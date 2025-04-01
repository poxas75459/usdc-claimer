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
    "5vZr15MJ7ZNaCAgq7WV77ttB21Vvu8fCwRERgQw5YXRzdr3ZEsTsEWsRAerGDkxbWy4Saow7KPCt7k8EBNrtZhkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3Uy22K2mWd6rSBmFCTbtdQBiTEeh3vCSRodRcoj6rcigGjHEN58DqoLqm9NsXMWDA5JbtUZg34NWApcbWuQG9K",
  "key1": "SLLFQ97srMLq3LvHXRy4M9FEsHSms9yjVAZ6YvjkWcnGEqsextJKwXxp2yn9EQaZv8EKfYdMVYtRrsWDCTr7eNy",
  "key2": "2z7ieHaxx1TtBViuf6UP27QeJvcfG9jaPR1GQvWqWLMEDnje7NVbkY6Fpayu5VccQ2dGcuLma2ESi5U1rHRqVr5Y",
  "key3": "5qzqzPYDHc6RWVDmUbYa9Yguf3BqLytGGynMBTCEBzMhzzQY5HxPcpib9dxBuw1BF63v2fbk8YPGyzdn1NfAmhgN",
  "key4": "2MCUEamJVzpTVSSvAGz5RTgeniWenm6LeDdT9qqAFFg5xm4xnrgNrdvhyR5u19prU3BvVeJpjQFZREHvgbbjDELb",
  "key5": "ARdMG4prCURafZoEHewk4vJtFYC6zMJraxCzBGQWpd5j1WhDh8yYPyma2nTknSUhpVAusTAuL6Xer6SnaYN4n3b",
  "key6": "2yBDnDPgzDshaNgBwL67a1StiADb5gjFNhz63CkMrRyfh2cp6LxTxEjw6NCaXuaXhjJiu38CxikRmVNQUWg1Bu5j",
  "key7": "4gnkuJfeTwHkoMT4BxXju5RCLzEGRPEPpAqw262ATcVHZjvJvCKT585LMMjPNPdeUi7rVn3Vy3FuCbZRQpS8sSbR",
  "key8": "4hEJ5nACRMruKk1c6qDCF5AMBosuiGmchqAAmfs56v4Z8bbXFzbYReSEgwZyJ1dkeZ4fSgQFHWgf1yHEBKycAh1X",
  "key9": "2tCcLrBLHZFgdUVBqigPNyeJWrv9QuVYLrMwGDAYXR4pL8NWWEiWxK3t9tMWH3p6N3q9D7BxpfdVNB5oTEeUJbNz",
  "key10": "3b9JDwJxPMLevU6J3oDwEuXkUevCvsnXQxh2CG5LDDDrR281i1PbCPswiTBgPorJTBaqaMCHNqvCfAhv7FgP4HSy",
  "key11": "41enB6sMaBgnaA2erN1Re9PYkkycBmUPqFVvjoed8npMq1nAwRVpP8diMcJWHgjM81GdcCAQd8BFZcpWMgdnQFQN",
  "key12": "5jJVNWBwyNTc9woCQAn9YaEyry8A9EuwL6HihFkBJFaoe4pu1pUjzBCV9C4Kp1qN9D3ERBSw6prrbC8K6DqnWzvZ",
  "key13": "24mtyFnuarqCZCseDSfUaSzEP2bsv5f88AgAiqLgYjpo1CiFBNAVfTDc1SJm31XypXkUXbSfnEy3JUZJj6JL3nGY",
  "key14": "5j64vxZgRZA7yxmytu7a1Kq5vTB81pncuzR17pUaveYZPXV2XJuvKui6Xd49k1c2dX77oun2sNqK8FaZJyS6daQV",
  "key15": "129ZYjKnn1URNFzpt4XX37d82BU3tT2kUv3tbe6LsNkLavb889PJUXaeMpm2JxHw1Tj5Av9rUHfm8dtA8dURBmkh",
  "key16": "4V7TJ3unDNZw8NDAAurhnPoyHCDSZbnrHmuWHBbj5r3qi5vvigEoV5VjWjuGxpaqLV8zBSVfJQ3FTXMC82JM6SiA",
  "key17": "5bVKsDYWC6b2Wp63NLago7yqdU2o3Rzo1ShUxL2CyZwTFQJdRN5LQAWprvB5desfyduPNbcwSuBT4gHiQPZ5UXQj",
  "key18": "5Si45fnCQPCrkfK36RaQuDca2tp7nDYzEpoJMRR7cg1UJaRKdocJcn9Nb31nPXzjpSMkbbeJCA78CGXdVF13foGw",
  "key19": "3JLqiiPEciaLmXsyxFLBfkSze6bThqKHAXqLfLKDsGqJ7NojEMZvxdGEZcK7YpV8gkUhQYg33tJxQFLMjQvp2Z9B",
  "key20": "4tGe1qzh9SxzByvqW2zmieujVgF1eh5cqojTPEkG6F3nfbj83xx1tGfaZtyaYS84LkkYtTg8gupAyAzVb99Gbwu8",
  "key21": "5pAeZpnbeDjTXPF9yteJ6gdgzegY29F4YLDCGqSXAwGg36DMH63kbJyBtKaprTEaomKt3fio9W619FPg2FNJFD5p",
  "key22": "3R3RFhMyrhEWtNpe6o2j1cHDZBD6NbaL8BCT9bFMiqJyyZCgGMCV9viAueEddsh13q9HQNNGfzRSYGRGYUraScj6",
  "key23": "3g2FhcsiM4oYMTXXciR3WJPbiZ3k71L1DGmvm6gGCXJdCJ5uHEMM66pHfAP3mdqYzoWnrERVfyYt3xs7siprQpSo",
  "key24": "4vvoKg5gSmTerQduscR6VPTHeYhfaE4xb6murfL2SCWyqcpCiAx8m59JqSjvR8CZZvKoP1oe7gaXS38vbuxwEKEy",
  "key25": "5ADg2V1fB15xbDY4cbaiQhnQhqHz6MdG6JXYDSBEFcmB8k8PEW62i9Rz3TqB1tYZ6xi7QC2fpCPrx8xUz8SYfq8b",
  "key26": "3UCjQMzKNo9AK2qTVrVKJp6eU6xpF9uxo8cDMQP9j6kaLayhxGUQUjJLmjfRMo9sC1WixTsyfBUdbd84aYhX6FVL",
  "key27": "FCGEt43PXiNMPatZFbaPWfaNUKNETnXmbn46L1gtj5HYfiBWWuHGvrbxSRhNYDDnozVSE2r2kKt2SBPvqHQDa8o",
  "key28": "hCcuAUpFhhB5GbBX4EAsncujjx7dwJYgVya3oYDaVVptg5W9bxvJDRBCZT4rXKJHydqXodH5v4MsAh3ufvgPvVt",
  "key29": "35oRYcw7ehEE3nUJyu56M2NLUKkxsoorudt5pLpsQ6pkqMm5EKxFmocomphqfA3BnmGyVBW3L1GE6GYYw4Lut2pH",
  "key30": "49gmiYCYG5jDJHfyezCC8NaDvNWuKjthmBmydC9Euo8jxicrfuHqaVouZMmFmKkiFibyzsB9qaMWXNMhJfcq6EpR",
  "key31": "2LNrxV5RifHiH1Vuz4tNwZjJpdo4ZyMN1MMLKLS8291yknDh3eapZD1EUVJAZJu26ahSbMAg37EY68YwJKqNGFkP",
  "key32": "3FiQx6tNKX9NZx4Rx7MHmuX48v8C2ufka8CoJtzpA6nD5pqkLKqcfNTSfmoL8yuy12Tt9rA8BHV6vMZCSVS6vWDL",
  "key33": "2SkuRwSRB98wvQd9sCi78kV65xnAequM6DoNNVQUJfVTULC2iTt5rpNdkA14hTdyNFwDRJvk4HzkjvCvwcT5fRdv",
  "key34": "4bbX4z9kNccmBY9Uo7Z9sA7CSg5vDd2hvUZjZz8ZY1oXfqW8Lpz2UTV1gHGkS2QHKqQLgCLFkcNbx7cPwuiKiYbv",
  "key35": "5S3ngTTipmJgwDCHiadbb97HnNHRiDUBtZ6X5gPaLd4Cj1xkvzRFk9URWSs52GfVnfE1y1YikCo3L9DhVQehRUKm",
  "key36": "5K6vjgQD2cCrSmGaDhVWZ5NsmcS7ZZAYFNMPy9LSvm3XcBmeseLMKRGW6PLTCGJeLH6DBBMh9ZmD7Nuprvv1csTV",
  "key37": "zboBYg8v7sKZHBZRJdHhamSaLTtUcRsab4ikjxfWoELYXSk4H7YwYkZaXfDUNhK2qDVdQj5yXzmGpAiSQ2p9CLa",
  "key38": "U11ds6yK3qH1G92UmPyDsY1Gu1yac6W7YWBKGz3YPw82vNR51VZBXD3bH5utrqdeNHCtSBqGzCiYg4SpS4KtysR",
  "key39": "5H41CrLH8DTavPvF2pHo4zBJo1nfEnnCzCsquecv2nnrNgxnGeWVu4SaDSAWtG9LZ7YSgkVrWi88i1jLwXvotUNb",
  "key40": "UYint3va6PMpX4AhUJ4tRWWVXyU7LKj29VPRYAXWJdffbxSwaSfHRUfZF8P555Gm2uiPLNByNdPkh2RkNXRngW9",
  "key41": "4zjreE7hsGrBJssS5mTsPTd6sGUr6GBYhta6fWa7W7MzgBpN3XcTt9NfTVSG69ibUm7Rr5z7dECqXonxjhhoddzc",
  "key42": "5gay6MfWBTzavm6JubMoxwGEiy8FvBuq93ZBdadp6JteAr9RFvQoUP2LZmWeJSwstCg4n3TutDJ5vEM3prZK5q9n",
  "key43": "5RYezb18DmgZ41YLNtxUSpyDRkFozLtvDd1eGa7WFaCcGj669tPApTY9FDkLE7hRSTH6oxYTyS9JQE21v14PY3PK",
  "key44": "2nGYRBd9fbNuAUKuPPV7d1qDLHvZbcthh8HqCmueMSwVJRfo6j2qpwRoyVsjTs42Q1zaZGQJLSLGSNshfyKFniUy",
  "key45": "4zc7q3wTaDzzaBDeYpTgTN2Dt9TAXJRPQq1fuZUNtaoJQJweaVCJVRDBM9F7gSTCjFiupPFnsYCbCXa6B4VDMgZp",
  "key46": "3Pxt4sSAJoLvbfFFezJZNpmv4Kam6o13y3zTrKzkfnaWWKgxzCK5zf43nR3NFqrHs6PbuCzJSLDkTXjHGVaSP9ru",
  "key47": "2VdJvZhFsQQsugVSd8Lpk5QWKUb5xwzL35orxJADgbQWT46KZFTz71ZY4DPsHHGTGJwntFi66t3rLedmwjDLQe7P",
  "key48": "ouhfGMaDGCx7Yzt2B4jCBi9XzdgkMFukMPS8ATPLocSDDJeGaENcFCkDevn2bSTiZJKycm5DcMcpXk6j7uF2khU",
  "key49": "2CZ1g5CkgoroLJR9RE5A8yYrAcn3S8G9cj98P2Jykdb2gXcsaJ9uZnC9JUyz6ErDeQwaLxs7xaqY2q827Pm475xL"
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
