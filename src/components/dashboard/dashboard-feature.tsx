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
    "57yHE65QJA5gUu52BLN92V4WzkSafhJRpQskXiJFY5LrqoMie2rr6CYJwcrJHrEMnyJ5jMs1KusGtvZPq9o8BUVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZwVjXAi1dop43V4fv5RCT9uNuz5yqQXKboe2fLhtGWFTCZK4i6juktADsi3tnBC8QhavMuMksMr1PBKNgvpq49",
  "key1": "C4KByS8nxHeTZAV5F2ic36KgU56DoTvtwARG1d6niN6dSdLdhHsmPNbmLMrBtBKFDwojzxnVzESkBcn22Xh3jdy",
  "key2": "4biAqw1TBg4jP1osqJV89x4PcrsvTgYCr6PwyiR2yQs8YNL8iFJ1M44RTaAYn3ZTHbCAu9RZoNiqGiUmoQhQyZtW",
  "key3": "4m3EdD41xFcn8hReY5KqQS4aTUtj7A2HKDPGwYxhcCA2TjKwU4JfwJyjxmQqysugGVNdat37FGKFJPgJSWsW8cMv",
  "key4": "66xocdqfv1toLJmEwCQiSDjd52VtKzcDKrmh8sZcMjvd2kWf6yqWbi2Dyf64S4i7DU1HWqBsLmdyYQKxwMbqgX5J",
  "key5": "5rhYBEf9vUnH8QnVMGtumuqv1EZN7jh2vtjYGWozwYvsB7F7Ahzed7gqREWiB1j22rATrSgKU5CSBNTnP3cP5Knn",
  "key6": "zTTYcCBWyxCFzM4BftqpcXN2EKEQ71Qiw1x6gefdeq81Nnvj5Csd15btSFq8C6oVQC5LBYk62hR3N7rLVYjyZqT",
  "key7": "e4Agyb4g6gtEB4P2AiQRaAUL9hy1hsU4AYCqv8VrG2pezws56a4qj7Y3QSh1j1RXGQzPvypCiUa5ph3Wp4cP24c",
  "key8": "42v7LYKukELHDxXQB2BE257seoaFi5zBwUYhw6d6UpRY56QRW8W5pS2CjfvcrPGZugW4j5tGeTfCG3ySYSPeMAzR",
  "key9": "3Q2L7aLYbrjZNHQAmtSDaMsjYEuWC9Lgay46vLJxngRXnmKdZPAS7brNoSU2mgV9ge35NUuwcDqeitsQBDD4ZVbi",
  "key10": "2PSVcMCtcXVQ1B9BcaMF49PsMzhos55RfvVmxiZ6apYFMXrjTdonnmriXZfdkw9LGwmpnYAK14GfNG5mcLintHKW",
  "key11": "ArFy8CwDqm7oh4X3E51jLN6qH2T1zPiabbw1Lp2QzvvidPkT11Fv2UDZLGYbcnfEmuiMGgt1jAKZXfwroaKwrY4",
  "key12": "38CyJ2XB5LYdqj6qRE8dajEeVa6byA37ruGfxzXZmDVUp4hYEPfhui2PhXP4ynueSSYv5zmBsJFeGGMaBuo2vPN",
  "key13": "5uHVpAZ2jhdajNfVkFdunsuExsxt46KQZpvx5YCJxCk6rrpzRFv4JSbGR8aLzZbBazAvW8cE1LfeAe8iKykjUHpP",
  "key14": "2xvEumqNN2nmk7DxrkvoEpPGS87UcKuMpFeNtVjJ89AifugkUit6ZR8gKSQK3YjcZqTBnym1dsRBHVW7bhSZt3Bw",
  "key15": "tPdXFRzxKsV4ocp9MmEcK35UUsTCv2PaXNUaD3tEcuD8FxSZ4jT2pHRj2pkfhSbRS4t1JiFmFqbGt3LTDWsc36i",
  "key16": "saaWRGbG2n9LGbKd9ipsnBzQRPJ52MsWf4znTtYUDc6PCbPHhrqR1pf127eHNR2n6qERnsqz7RARmhmw6eV4W86",
  "key17": "3pynxCznGnYkLzFnzCZVhg9L4Wp1xCGYWUg5tozsPVUhxLjm7fYNmNGYiwwesSVnHC5asotpADocnmwapix1kAba",
  "key18": "3PYrUEmkfV3UvZmFv6izpwEeC45zt4uvcJhZwEobXarS2ZFJLm9oE8FwRYnde9254c4KMTERXeQywGtHtgTkARVi",
  "key19": "4rHhNwDA8VFTp38hcZbsndumTbd9hZQNpS7aEVi3iicvzQp1HfMUdCer6YqWpCB2dxEPDYg26RDotKsRfVeGgpfo",
  "key20": "2gY7bnrRpgjRyCzPrNyvJ72rTpoXZjUoo1Yf9QCr2HcxpKSGt29hZAAwv7NseQNB6bRBX5P8J72T9siqys3N2fk1",
  "key21": "aUUzjvaoAz2LVcBfu6Ed9YMHYHBsAYvHqSMWQAGmoVRsXiGVwxTmEzK3r7Uro3BpP333D7jPyNbQNcLUYDwapCu",
  "key22": "1J2UMxGANZ8GgiLtAWB5LHrDj7Z3rKnMeXSgod1kzEaMoNVcn7jVkXxKJTkMijgWzr7N6WgNeJ3wUnNxCA4tFth",
  "key23": "3XA9JufEZMzYc7JaYYANLtXYV5GQRGu1m4kWtFVm7YDsKBJtqZqbriFfE3FKVSAr7MqxXt9wg8rmk43ASP4YjsHb",
  "key24": "2Lv6Mm8mG6Euw8vJ9xHcHpT9Sb2Gce3Tp32K7kjMnkD5ykuF4j5vS7dYfCqSUUbnfWMjGuAdacHwUg4SJZDVDozB",
  "key25": "i685uy8fdS4mJ1LbZvtsZx6Gxmram2qb8D3Bq24LvGTUVDjdsTKd52GMJxJzBqAaDiF9E8Xab5992Mfmj6BrVZc",
  "key26": "ikaaQL67DfWZ6kEhn4nEMRzzGKTAngvEtCGoTyiYFJF3KGKvue3VFaJvodSZAYeXzpkjGZWqmwB1aP2oeyFA9Bm",
  "key27": "3R2j9yAveNpCJ1cepAo5jLRQGZA9xZhSWKcafPpWZxLS2bw14uihjK1tNG5WBMvZsQQVFRHbgeqKjxTDUrresj3V",
  "key28": "5EdbnTNaqkYv31ABDs9Zo7wY5NYy4sQKkpawFwRXVZSGWRMmhjgreywkKxPFyvQoJn2hakB5y8qaYy5KMhaB98h2",
  "key29": "2TqYQtAnAEUTmeghNz8JidFuJF8LRf8YTrXTEHKxZkUo6cwazoeMT6fc3gLbPNgwYaMJ9WpJxRQhiftE8M1cAJqa",
  "key30": "pLsEPSbLa9bP74XASShyEHQU7Xq357ZaCdVJ1psdJrLSi2CdyyEVmNHzzJg1jsxCAUiutbv4pHfaUsLN8oXqY7H",
  "key31": "2BZhgxqcjdeAMeTUaJqw9iEQXmnbg7skaUDG7jrPuRL2b5ESVxHkuxYQKxVF92kbtPArRT4qU6oEx58sr5hSsidg",
  "key32": "4rJjdThH2FVYRjguXQWEoeTE797tR6chfoomVbLbFxDX2jHLqEqWwnQ2jDVZAZD9VMK6VjGiDC8WLE41SkJxsn6R",
  "key33": "5yTvC1fjcB282z6DAjuC44bHQLU3A9Qrrf3uX8o1u2b5VWpgEJktFafEjHYLTYLXtDRuHNx1GMwrUd9d9eEb7Ktm",
  "key34": "5sa9QL167ycQKuyvdAqwSNUUMsFHShHQUhyUt6eAq4MtuscQ6UQ1D4ZYqmBoEAkDrgnydKyyHSkwtCSKPpfZJs5x",
  "key35": "4nRaPrUaVxb2pBTEMbbWGBC8ekp9LvncZFRMhgMPCwzEZyQi8MAbiDnj8vDo2nCM2RCYnCM9tuD695yexeocHC34",
  "key36": "54XVnEZewfts5BKEgqNzSAJyFm1AdhuESP2YpbDh15e6LJgT8Av3KuqqoXFRp5trWSeSQbsiuUgP9uHNxECXN4tq",
  "key37": "3aypxm2vJkBLzfizdi7TxnT3xArx8JDEwF9H3MvMfKra7oR2DBJdejanbepwtm2E5Vx3dSE2ZNEfR7jFvPWLsgCA",
  "key38": "2NjUxtW46ohZq2uvLiaVKMextch5VEEaPdVebxaS8PhaBjYtw1pf6SQnAeNAYfhANR6P21QAXzhpk27D1JEfmCDY",
  "key39": "5TwyBngCuPeGDFxdA3FLsttr4joXzVMbp25Lp3QxfTFCHuJ2TDPUFHbeJJ4ntDFt1bNwnGyKYb59fnXe33i2xrQL",
  "key40": "4oi5tu7AhDqzzS3eDkZ3FzSfp9xScUfVY1neGzAtK14CpxxM27a4j8mtCYsKzZ6HsmNhJgbPkK9h99Xx1eUwTi6",
  "key41": "5jDRe8aaXdizoHUMjXk5wvb7FRxfWyK4uCKHr17shMXdb2AYWVnjubKf2jbsDdJfSyzrKynfQGaw91RzyqbfmXBf",
  "key42": "4ru9eVZCRSFjpZdMVXqnpxXSv93e7TnrMeNH769nnudKMohQesAU6auwHPbJQd56QDkcoVWMdwUdN4w9GduXiLXz",
  "key43": "3GNXBHPauAtkTyjj2bHPwChwS8BBKFBzfvaP261AQJt9xMdBcdcicG2qypgTd1hCXL7S9wqPMwDctpMJEp444xTs",
  "key44": "3FDVvpWdABuiCHX3XbA3vRmf2bizEPmS87qi75KvqirPt9tPMgoKnA7XSovuBezNmpfvvnAWEvrdTZmi5hDvBfP",
  "key45": "3vigjkKWkWUUqz8yxojt5oqN3mR6GQrzgJrNDDnTzoPDisvN7EDzM7sK2dTqJa1qbbqcTpSgAHfPV98ujjUXzdLB",
  "key46": "2JANZQUGGC7qMyN1UxdpVqdZD5GM32SRbcWmBwp2AG9Ne9Yn6Ma4KEnZq2LAuKGuoEBieHy5jx4BdhM9icLzikos",
  "key47": "4j3Upb5yihouZdhVLMe8NfLJVnQWahQ7Aj4uyRnMJrLrwmjJE9TeJhDSTRnq19vgyWMifpFxArycWdUQDQz4F2fr",
  "key48": "BezPyVjqksRbLes57GwZupQB7XpFmvKR8YUnnPMYeXsy5rS6198j3t46sS5ZjcsG2iEJYHiSWRCgB9DoaDv8APM",
  "key49": "4gMeeFMRVLPZwz8EGfbkRmMpDMUYaessGf6yFAZMovmbajV55rvKpvZBCVXPSSvQgGM711zRqr2P56bDLpNWWrGd"
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
