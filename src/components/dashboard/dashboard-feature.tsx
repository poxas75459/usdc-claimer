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
    "216Uj14uMTpwytMf22ZpPGygu46Q6DaMbCFnrattB8CLThV4J16qasb7Vs9MAKfBp58LpvsNFc1Q6quPiHTqTbM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24JCwnZNjb7UtCeu7yXbVEhsF6vE8DGtiyaig3tauY3wbPAzvszz84axN3YtGZt1hzMJQwcmmCgo2gKD2FQN5FB4",
  "key1": "2gUUjAKzrrvJJBmx6zSaGp7D8g1sT6bUQ6jyUpea2duH9SfZ8qHAFQhb9jQBJz4aZEVkM6YARQfcydJjmPn2E9x",
  "key2": "4sTyecwJHinxKDk5QRNugThxKcrmiTMQfa3MKu8V8ZgydzwtpENZzvYbDgNHfNdmeR63Kb2SPm7FQCDpjgBA9xSr",
  "key3": "56FnZqNJyjchR5R2DnRj1u1ivaQzMRD8cV7jDeR58Duu2EfBZfposeycAvnJDZuSvrZAiJPiR5BzuQMKdwMieefF",
  "key4": "3EmgUy2ZFvfnr2yFsEEmJsBQ5vt6aYpQPsfDLiauquAmV34vYLDEgfqkCnRTXmSczYkHVkFMVrMbhzz2t8b7GkVL",
  "key5": "3kv7gr2jUYaXCLDHeVgBe1hdQjPU1bJbYWgrkxjd4TxiB2MMDBGfLCu766b1kapTLCkn7Q27eFcwXHwb1YVbLKB",
  "key6": "2cghw1oj8mPQnHmLpULDqbVDbExMT4oZJkePyH4KBnc7UuWXSGzbE42vS7EsmSyNkdd8BWzn1W67EpQ5VLKRt87N",
  "key7": "2eKraRz6hdejizYBQzhR3YRceaRFR7cMxBKhWRT5XkJpfL2Xa5mEEhJ5V2RrSBrhhjbfjnKchR66uEcbP3d15FG8",
  "key8": "5ivCrBehGVS77fEY8b3EUEdkF1K4demAe4rccRQwn1mv5wVS7kagPdhZPaV7LhFKFypNe7R9db2R3AGdTwxUY6Ph",
  "key9": "5TyDMJuCy6mDGX4CT6tTQWcX5Nd7BFRmg2c4ugCxMVVu3bnFDXsn23hMXJ5dqqPBULd5rvXFKkMk62rZgmXTwrtr",
  "key10": "5tN7C3mWz5avKRbzNNmKAnX7knZ4VnGq9nBydnygcTUepjXn31tRXyyMSrJNo6AKWTgMPMMLarv3zqLfkCyk1e8b",
  "key11": "2UJpJRYC8WmZFnGNNt7xJLohcwnz5suLpUQexPq5TtPo7CvrzQfTTVgNgd9RuuCEUrDYDC3E6bpyBYNGA7Vimc3M",
  "key12": "5oHhR2aeUqpjrSi8rPR1dx3GSYtM2LGj2umrNXuHninPiPx3q772koJMQXi2rJR9Rg6jtuhByfaGazPpgjyenQVT",
  "key13": "5scuyexjgBKfxqR8Bg5TnviB9RTYidBLt8tMEFp1j69Xhf1bwxTai1oBqMTrfSJj7dBFCPmBavR2ywKL4tsPeGy3",
  "key14": "5ND2zxzvWapNfMxiy8XPT7WFACYpS9jjAdJ1hGyBjtRGVwve6huWyQVee1wewhQvqSrNazMVEnGDYCngrFn7HY2B",
  "key15": "46u9jKpqr2XzEP92fMfKGuxeXFwyBBJWsnZzJMQDESa5eRtBmunfFfCDJSTwu49adLgcYaUN8XCpuCFST1BqajPX",
  "key16": "3u2qFJBNgCQLSzcE6vK5jDD6PMjd5nVKd3tZt8Etf3W13V4CT5qst45Na4yxpwGV7BR4DEwTe19pbZVP6USbXjCx",
  "key17": "NgqoD7qbhwTf73BvReuy1nuHru1Kr7dhkuTdPKy4Z4gTJudf4hnXydWJw2yfDPodUfYmiNEgBKFKHir9RoDkTFy",
  "key18": "3xtMoA3PyiF2UwWbm37pFrpJrwMBwhUuo71L6AntzwsQKwJVFkz5U26v3MKDuZKcVVYh4LehbYTknnHUfEoTSyJq",
  "key19": "VDrRpVLmxA7jm7ggjhgpncAMAqTu41RwVFRCQJfFCbmLdk2gonC8enfbELmaThW3apTpcntciMCNrDm1dKspA2Q",
  "key20": "5FRJcFP77SkEhxMKV4mmwmU6YqEDy4Z8PDQ91ZL7raQeXWsZQzHaLemf7QTa4C2hC4m7ZsCzo3xQuQNcorFv1s4q",
  "key21": "2wna6y1Cno6yYDozAWAdmy9BDdTLX8eGeDBPvE57rXPBXTHsZ4HAXefvtWCZeqZGsKyvvBqXZ5kGUfs6Xy99adwF",
  "key22": "3AFYxao6isAHHvGFjw668Dowo2ZHruEqmC8T7G5K8K1iZ84er5fo5kNjP8M3o5nvq4pDS4Tw8DMmPqVEVNU3Laz7",
  "key23": "VfWMXKYLSB1QQBFjMyyiErKStPEHH9DbHTPWTQ7xDxWgK2kDSsGtWHCxuv9q2WofbPuUTFTNsNiRFG44jRNB3XF",
  "key24": "4LhiDrzph9pjqtNkCxHqu7sRWHYrELzvwBFwLeaFmbUvZnKR8vBRWahkgwntfMx1Wvxc8sTL5UHaUiB1S5JN3wGB",
  "key25": "MGcidwHGyixRTgPXp8QNm94dHbr7J3Nx6QD1S2UuSDy3azRemvdro8wM29J776Ei7XCZrKgoXkgaSoRWAfdEqj4",
  "key26": "HGrd82XCxQ9sSz6CuLsK3usqtU2Z6RjdXvrk74yfFExuPD1QwEjeEGuHPrmZGKnPiac6RD3Z57EG2G8tmRMosPB",
  "key27": "2dUdPFBNDDP9gTvETGkmGSoFt4z6Z8esYBQdZ6JN9EuqfCsLZsN8gLKYgzzAa6dExjWRBEayBGBF5CsrNitiZUT3",
  "key28": "4J3v2zRoJCE6yNrkuz1wPCE9LCgXoMyRxfbY5x3o6EXSNyScJVASFz3SfYujbPDucyvMGfp8UNir6MjVXBoNU3DG"
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
