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
    "34CXRZz7zSB2p3iy3deJUAxMmgior5zuWjdzbhXT1oC7LiiSupSUpCZHXtGNKAPW85GSxV9VJC1v1xAmmU6N5WjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8QFuo4MtAufiwpmCFHGP3s4pgB1eMmijkZiUVEtnxkHtbZazHKxN94HhjHBKWRZd8Z93bdkg6vGsSPzjP9WAur",
  "key1": "5RUKiNAAMmTmn5WDQTLYbx1gGay6CM9PqsmYedv2S7yHzzNg3ug8WxqRSGcDYRTZzpxUzsChT75bF4RVbojn5p9t",
  "key2": "5YzSYXKUdYwP3CfxWpjGfWmb8GQjHdR6Wz2VMMeqPfhc6hC1gci7J5VQ1QGbzoS8r8fSeUhNfqMjPLLouh8XwW9Z",
  "key3": "xLNH2TZowzQDsiYpwYnDKgTGFWTrj7qgDqYGFiRhsuUGuw6xa3TdQedPtpD3KKCd9TJQVjraVYcZRQ2HZHhGSEs",
  "key4": "45gJQWA1JdpS3JvYYr9TjLmh9ZqnqQxxvWKUQN3iewGQUvXCoVtbAD4MavBWbHEhmmBDsxbv3W4EvRTK79SsgHoT",
  "key5": "wbf3quDPTiZr8ACPcpcrKBvPLtZwCePmUuNHFMLiUAugan48XNEMSgghMQRba7YRXvP7sBXxXGcmdAkpYVW8CrS",
  "key6": "3dSJRAZUgZY2mnmWEqAnrxPJA1491DLzg7XEoMoBggGqSy9WoTyqoTv1sS9kKgcxQdGkoKXsjJiUAVpR3TSKpp6G",
  "key7": "29bMRZogxFHHye1n8bYk3hFNf4GoAdmeCyKWdqWcCBcMh7JcaB3sUHkz91DWs7yy5TvyhfmiK17C7k7Z5AAE7iXS",
  "key8": "5doFs44Far8DQSjgC6heePrqsGhT23GPXMLP5JrfzN3EX23VdyMCWWwosoKLDVzg57u37aRmHSUvApH4LiQR99am",
  "key9": "5xEsM5Y6WYeqsxny3ivMex9UPxb8VVjK6JFv48hGQDVwSEogw33YegpehPUyKMacdjTmvngp4au7d2sCfwVS4XM9",
  "key10": "2qnWnBo5ytFPAWpu3PYVMEHoCFSYq4YBKCh5QXqC6th89ZdP3aki5AzM5auDfKtqVJgjfpXHSAmrfqSxjPdsMLef",
  "key11": "Yc5LgrWbbquiMNgMLqef54BHhSj79a55J7Y4MLTwFYFeJxhyVxGRb9pVYF96gnobccoJjzEFo6NC1PfdV4Y8Vuh",
  "key12": "2nn6enqciXmzLnBTxueAj1LXPnTNBuSCnn8toz2RYipNknwmGJjZACsmfkYg8ppFayuf38YSuEd4JVH1nk6t5sFU",
  "key13": "2Ahs8HzRb46cYLoYLTygo1kf57xk6PQbtvTudmY7HgQszeywXkM1wp68u8999hUgRDjncMfQHDsPZ9NDsAsZGQEU",
  "key14": "3PuVzNZPpHAsPXrgNerob4i17AT98eezFpQUto8v4c4rssy9wxpsjT6TA3o28a3T7qb9fj2A5UHLKzvaEtLQeSvL",
  "key15": "MyGgK896sPPwkqnxvpzAfNzLnxWXPbEsVHcsDC7ARWQevp9bWriZuFjuDkAiAM2WAYzqpNW61FjztaijDXYwvL1",
  "key16": "t1se4z7FLGbKmAdAdqcs1nj7dVHhwzh6K7RWjuPWUvYViEGomfwqiqGMn98qkWyfvJJUbjsY8HHK1TQzU538v2C",
  "key17": "rcXBbMbgUCnREXi6qooxC83u69biRqPU4cwsAUABe5Hzm8PK3ySffNNScC3bztmkVAY3xr4Fsr6BrCysxpbbtSr",
  "key18": "2WrDfwQqcgqu4gVKtjtK6b5d7XHwQYSEBBiwjaVua7riiQuhiULVnAnjUjm6abs8VHC13UXabydiBKzBWWjgb8CP",
  "key19": "5qZmMC4bczofsLn5pJvCU9JBLBV5L6ho8wWW7n1nhSqgZKfPHfVs4rz6zgBoJGP8wBPHyXftoXnxH5oZSmPp1Xf5",
  "key20": "5561kKSi517GotzsQFXcGVPXhwakjdzuXg1JC8x5Gim97wBcYpa3KgpSo3DyF9aW6ALzkW3jhZ6CczXUyDxSrNrk",
  "key21": "4EpVMMVtZ6eo12nkSBm2WtZWJpi5fjRMLp8pSui2GKtgHDu71h6AKZmTRPXaEfod6A8edYiMLUe9J8esFDXptX5w",
  "key22": "42f7VNarmWmX6vLySF5o6JDTmYqB7JZPtXr2KShXPjzPunHdCMzCqda5oxCE7fFVM68rhV9wR43mjdpjovkvNxoK",
  "key23": "34uQjSxsiPs8WMfCMd316ReHpy5SfyP2MfoRU8sRxUBEwYMwavUwpVYVhdR9pMTHTsfczGj23EYAo1kRZnZZza9c",
  "key24": "uyF3rjZByZc5TWUw96kHkquTFpwAa9M782UCn2LoWqsxS3FoeeD8v94XcCEDCTYiMDpWk36fhW2zx67VfDRdDbo"
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
