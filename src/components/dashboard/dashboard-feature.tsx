/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3eis9JLa5GaGgkNg8M5HR3fpr4L5jb6FEc1bzENzpNAffccbyCSCyxQtqfFxSk3btnHo3U33R3huufmNYFuwTKng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULyhSjENg9AL4gL9R8F765K69KkTqTV5H2wUCkZ5XvkCNy7zX38VkggV94oXHU1FHzJLYkbzc1Hq3LP1W5SqFX1",
  "key1": "24f98DSA9g14uJui479WB8dvMVuZ4ZjTpUW7ZAAeELzsyoumVmMmvsPo4ticAAR14bmuN46SqnERpxYAuZZKPY5W",
  "key2": "JTm8XFcCzG4cyTBtDu6ZdZxj8LtSyRgkMha88o3tqZsAWExEMzHbcBYVnACs24ppWPCx5LDFfx11DPw4zu4wpMS",
  "key3": "4uyePyKMaTAKvXoQnnePHyxG9LPwjcWterGuz69Z1vAX6qGH8RTTsZPevttTPZbrrsULkA9m888hL1oZtTE7oPYA",
  "key4": "2Ei4rfmYggGgxrVjEdhuiFwBNJj653d4v2Bn5TNTye4fQtYwysNvPWL1xaEWCJyZQ1huHqsjPNMy9tMzGEEecYJF",
  "key5": "38qMDhew12ZabvsCDHBPitPVwyyLB6FHfLjrLxrCfjHRzcJfkeBG3yzjSmozf87CzMreBt7oQ4xdnCQaaiTjt3yP",
  "key6": "KtvCekP4JA6E3WHNVzfhSnXH1gX5csEi52og9BunsRJrSJ7FGQ3Rd53NVkyDiZFdwLCU69qRWCuCXVwoKwzVeMz",
  "key7": "4JAZYrpn8ry21qVWZf95JzfbHDt69WYv6wsLVkbWoQS9YPsQ2MFmicctLaiEqzZnDeCPZH4JCRgtH2y1huEAWfoe",
  "key8": "4GjeVYDu2GtY2c3SxnauxtXSJuqWZaASvAfX3rTno1dvRz6kpak683yQYhucw4rruvezNQpQ9XvcKNVBUpfSbhNK",
  "key9": "2cU7YAKzJv23XUv4uBnAuFN8TdrZejXnQqtCWsVmyTFCMGdQvG4Qay2oGRbr8kniqeVugbnv98HxJqJuWzGsUprV",
  "key10": "3kCEDdEed18jwCMWExGE5BsUqpfJpr5T3KUGJLLsKdhPq4gsa3EKJpAR42b8bpoyy9VkVTNFnP87gUahWPMSvKhc",
  "key11": "8RBuuNXX2in7YWUiSQVZM2TysiXF9wHig11doUtHHhX5GpBRG3NXus4onPT5uMkBkPeLFsNfmzdz2wgQFbrBnVK",
  "key12": "4Xj24D26WWAAcY19ByrTy95y6KVosWoJtB1VfE2gDSHn7MN5xYUppyE36J4Co7evzTRdZTvpzua12y4uXoFrp69L",
  "key13": "VpmpMJspJSZ3h8TdbuK4tgjGkBWpocKrzpLAWuXu1C2RVYvFtoAS5hGkrVHucg5B3Hhh3gHm26dGEf5byzXy987",
  "key14": "2VKodYX3Dv5bEuhMDTe7sxyhUPJBCbzEcpx6BQJow15WEJ3NKCsjX4uejjqHm354VQB2mG1NKTYojY8DJ1bVHAdu",
  "key15": "62cZBR8jiLMz6tS5WsW1jfocuM1NxBQHwgr94h5MV3NgCyLDFxTyXB1tTSyZfFnww69vMH6WXmb3hKKv8fzudw19",
  "key16": "3Rc7jZgKnioPRHJ9bHMtu5RQL2AkipoCaj2w7Womup8FtctQMX4C4GgvYJkVKAanCjGD3htxzjQbj1QcRsRaEoFr",
  "key17": "3w16MKENNPfwfxtMsTUH2nwdnDSnZKSeGCQhu4eAj7818X5FxuhKnhuRSa7BPdUMMqafFWu5qfCB8W2jWudkobJR",
  "key18": "5rzLpNF9wWpZ5GDphy77V9vPxzouaAyNmPbRQpyUGEP3zdPwHJ3ntkS7tiHijp4FWfGeTTNyjpC8Kit2oAukh6WE",
  "key19": "hz7RoiC3nWLVMpUXxomJHSrno4t4Qs9Rh8eJAvuNKuYQemcVbP6ihHz9UQhU1PWJzhuowRh3XK3JBpme1nrNnHT",
  "key20": "5nH6cC22tKwLUGWBthpFHRYMdtaKfYDeMQpKCb8rtMmQwVvzQd7U4tkgEuH4VTtb7zidXghXqRAifvWineLpzWLb",
  "key21": "62qakofH2dPPFUGvU31SvpgMN3sJa9g32anNiNk2J4SsfRiTZCL15dgLgpeWzvz15TKxjpJ88oCd1prmYh4mxkF3",
  "key22": "5Cqr7THuoMMWnxA2XQpgzp4i79RrwC63cfMLXQCNdMDFeuZi1JppisXiiJE7k9Qze2fUx714FqYDgMRVsR8GXJeq",
  "key23": "4s4dUEyvvFYtvDHCyNuLQASDoWfiVFgmAPEF8YS6Cz4hHH16qFxuhws35Uxa26Lq8TzmbunPF9Phvxhu2UbZcYqw",
  "key24": "5JfDvtbLSR3VBWt7Y4VsL8urruwKfUZFD5oYjMfQ81J9THzkz3eTYLGY3zuwN8XqW3sbv2DD5BaJWr16a56Pt3D",
  "key25": "4h48Ztsw72Rt5otCEs7qQ68GGrL19jaDUaVXJuhfg5NCCyqvNJ6hwgf4qVUr7DjZ7Q4UFaKuVpEYYgkBvhXcqkbn",
  "key26": "63M4VBu5x8R3cp5WpfQvbDjFYBseBNadsS5J2APbg25b633jFM9rZawBFAu99fVMoqcrBYZrVqBboZrbZgaDEBLG",
  "key27": "4whBhdWcfythQ3i7BycUiaZgqrw8K3sog2qmU84DAwafHjZXW4Za6W6fMrpMUTdhQAqGcaMSy2ZgDgzaa2S2CLci",
  "key28": "5rPjVXHPpkAixwijABHY4esvhx5Y2AeaDzX2shpR71QhPy1C9rhyKDnz8ddTiq8cEKGmnzaoPPocPg1ZAcsXsE3d"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
