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
    "PWnr6hdYneDiQkwpKycyUXGmHQ9y5eemHKVsypoNvbFxe2CjZn8bbxEXwLr3hNs4jpuCt6inUPUbkgAkGzR5nBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dCdvkQ3tFpDMCq2RcibxLsGDLfoAmt8ynw1Wu8vGXYadMjDrS8ZVNYWXyp15YRasQB55XMmz9aaYRZWunbeUTNB",
  "key1": "3RaLTiCksk8GQQ6417on8Tz71s8k17SxZgXKsdGfjiKLkb45L1NzAPsPQtSUJXdU9gm6KidhwSi22LpRzUyEcfF8",
  "key2": "3HFYYzMhroejt6gtXkcareWvpbxkjhem8QtXySBxFBEzx2r73Yu7QEXgAGxBmFByLmZ31T12DCPPmkoCUaG85Ck6",
  "key3": "2kbxKx98BhrKdTUTrQPEL6Ca5uKMzaMGsSKyg7ee8QhG47hRscyRjZGdN4o6aXYC2eVwYWi8gcYobDphav3DbQix",
  "key4": "228d4h5SGb5CxVmbeVynwnkYoSRcnAA2mnRsZRjuELVhkuEoCCMiXjC8CFzTSC1uc9YF86SRP7DLoL3NDqEpm2jD",
  "key5": "48PwjLscAkqaVPP6nPc7LxSEmpsSfpuq8nzKEDtqZkQ4ZunsWMBoihLHe2b1GxgHQpo9bD1w9teN1xcgPEHGLLuF",
  "key6": "4XUnX1FpWUGm7TL8BfxGSghPLTp2sLab2t7n9ZXzRUL1xkb8GofEy9rV51hu6GkfB6KitnrRUnnfeamVXeAxk5VA",
  "key7": "64TZUcNijEngz7M3uwF6ZhqawQb4wVDiSA96QuVCbxhyZFTrbwq3Piuga13h7jfXTrpqCXsixDapVh84QBQfPj9x",
  "key8": "21Rj7wWc93FUqgmTsm1GZuRvGunoKphXj2tEmbtzHNCYxFYbgpBniaj3AdfhmbCe586bXHpMzixJifXbLM7RdRjP",
  "key9": "3wDnBTaYHGe2H9RdbgdAeFajitfwb2pWTcmja7hTKqd1JsSp6aCEx4qaYeTh2onnhcTXM3x39qkm5N8StPn5K7Yx",
  "key10": "2TbNrMgK5MU2REzUqFB7tqRTsmggdv8vdUf9PkMnJZbsBRPVEauSWC1NVRhureK9BoDR4bKzAZ8spxEn9RjNNSsV",
  "key11": "xpRCGkz18qayewp7aSwLRcQ1BvAvHDqrQ9wL7EFhRSEt5CWwZwa5omJJjFnP8kZVScsCftsGpULwACXajr4sLLq",
  "key12": "5NYJUtsPzMC7PiCtr5RhqoAjB8GMxE1v3vbvh1nvnKAFtQZMjUYk2MmmZj1juwLKBK3WMaCgHCfhMvYLTseBSStm",
  "key13": "1XTLoXnxUqcr1xdjBTFXTdZAksVfrqC4tB9sjEDEumRtZofQVH7BcVWd5RzD52nArjVa7P7DTGPeogSttRKacH5",
  "key14": "QAPndeYMYJTkDaqRXmViK4muhL7nVD2WaTK5SRojGMUm3Sj45LkhyaJ8PT6QpNg4xVf7is4nMXFyc95d9C71TWA",
  "key15": "5oLbrUrVrfknpD77HZHmcGabYj3JTsWWX6kCvfLsNUEoo5ktBzwKwKUSaV7DWDWooH8p4XchRFYwHGPDSnHpByhi",
  "key16": "o9W7JRpDB7xyZcQUSZ3cDdNzK8PpCgsZh7XjgDfHCnMiyRAUJ2FUX6DT48AfjfdrKGbD4HQh2pwZLCn2U5rbkGj",
  "key17": "2pcMdqV8EZ4B9bLBNG6nDe1x3dVbNizUPwfHnCBPMSAFUKBWK5U5pVHzWyWBrW5mkzU8mts5eAEeQLYbqSGxF8SR",
  "key18": "5WZR4FDE95pYyXA9xVH765ES6oV8sxEHqXqpJkHVSKmDNLFxZVgT85HnJ8yfKS1JesacokYfV9S9yGP2mSNuSiS2",
  "key19": "T2LRoiF6DwXgo4qGgsQVq2fGzMV1cKHvHGxySwineVHKgTK9LXX1jA65fGouswfqGMwG7deSj3jtTB8rYBF1RTa",
  "key20": "4gKvmn1Dig5zxwdTBxiQn6oztqRpoKsX8K6A7ps3BBg9zvUVMVUsytVoEurDxvC9etShKTpCgpUUXwqew7VP16cv",
  "key21": "3eGYrAJe1Dha81ozkRuFuRZPn2D3x1wxH3X9tM6TZQEj8L5wSwfY46hMyy7ZjHEXLJX5L1tDo8BpzxHQ3AS9fpR4",
  "key22": "4vd8XfbVWP1nC5YDfiWFduNJRAqnwfDBhDLu964Ye3jMz1qvx7eNBBxbRBffCYYgYY2YxWJKCB5enRxxMKdiZx6b",
  "key23": "2Wx1KM14TE6Wz4cZ9PyyWX8GRjnTxTwQpkrR6cbynnxAhW7FyWkpAnHNCHUC62EeLx8yxdH4N7mak9yG56YZiUf7",
  "key24": "4PgEHTiszYaC1QMHKLmrNT5jiUWDhhoMd2EGKGKoHdgAPwyry64TRnxqDv18wPFvd145SFZ3oNRaetx1XgkowhpZ",
  "key25": "4FYhPxLGHGeDhuPP7dwxc4CeJAzCzsW2x6XCzJRaiggoqUr7WRUYw6BthRgK1sjqnGzceQU62woNhm6YBJa7DaQf",
  "key26": "gA9NbPzwHHECCoRxPCG5KKKX6RWrstkVeo9Z8yHn36XHaZj3Uy8VgFmDLdqRs5s99XHGFWbEsY9J1xfYaWwytHf"
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
