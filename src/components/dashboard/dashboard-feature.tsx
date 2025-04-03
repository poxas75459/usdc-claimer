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
    "5bxYbR3VvuuwfwHes3JFL86k6dPsu4T276MHV1vh6nN6km1goVAooBcpadouCj7hDr5cWBUhgdNXFD4PZevcnScH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EssjpQs4qynFvxrTffHRhCV8q26R1QM8oU7Pz2Ua2tgqohmDx8cpanNBoVzxTuBNXuVHDh7LfMitsaGF1xCCXMd",
  "key1": "sBhr3F8erJB9fpe9BNHD2wBsJyMCHFKMUpz5LFhXDB5EQEQup7jCzGZAgrTgsUVBodjnU6YBw8Q6RXZwSHbhwYb",
  "key2": "4Q6Td1RLWUAzS6ceUvB7j8xrdA4QcPW4c3DoaAD72dmWvMbV5Wcfzv24vBBqKfaHPE7LhkAiDxg18mZqKwsJCA3U",
  "key3": "9wfYP85AZNAxBTYwzCedbRwuKYYeKWFqX69XXwAYn7qbaQqv9WLmvJfwq9NNxouRHMBzc1Q1hq8zXwzr5ALoTfs",
  "key4": "4D2tLt9wq17y6Nsdaugq8zfjAunVHg82ARoyqTU3SYeB8rQdwTWFj8y6gxcXCCCDzZvtnNbTEUa4qQbHiCfew99L",
  "key5": "2V95ymA1g2hcQ8jaZKNNsavaKpNtDEPZptCbTWXKfzDDupoF3LdYahj3LAhjn72RLy9nqDmh6mnwYMPPPmwk8JoJ",
  "key6": "4NqBop8b5qRKrTttSSmjRTmwiUPmrVjTvk2AxJd8a4XzYLgAiVVUDqoiGDZYPrwhbNQpR9ZQ8MqrTFiDW9kFEmZs",
  "key7": "2WakRfsLAXCSKvFCRCqgPoLnqMrbgkyn7FsDQ8dUMn6BNALLSA2MZtZoroP6mxPmpNzVfkU2hHYkUvoURQGiygx8",
  "key8": "4yRix8yTZCYa72sTwdqdWX4zK9iJvWCruSNNrZmik1k4teSBe7SzKi4SXVQG4AhRu5DaaWUeoL3cZXKAZKbesDYc",
  "key9": "cohK3qbZN3jKgCzxkkyz7vXRN7zGSUQba69DANEpz2Swg1YbY2FtBTXdio8tAHGUR6pw7VMxjB1aj8N6spwtRWr",
  "key10": "3wUSqrKmbghFUGgLjC5DvXvfb6N1useQfkAHArnrKyQK8GshHgV6dN99rKaUw1Z3cUBzENX1XEzY9GLfR86s4u1R",
  "key11": "62pVHBwL9XrduhNdCSCqXG4KYMYZT1ifc6xt6JwPh9F5QybLoC4ax9qVguHUrkrBMis8oKjmuXJgnGmpQPtyV8wN",
  "key12": "2fKfYpRXHpS4ZURBGScLXBnDvoVjkkEnkSDXEZj2dt2F93NzG8kwPWkYR9yLkTdZsaQmxb9LNwKsTCwRymy6HBLx",
  "key13": "3Af9m8bgfnHy8cN89EDSQ7mW2b84jB5a989s1kbojubYjzLfRX6kF3fzLKDSan1t9zD9BkA5y157fmGQnvJquKFH",
  "key14": "x3EdBydubsxbnXFFSftxYaAHpCx3ri2zK2jQNA8ceSghiDdRSjQQxr7bGxUa77PAzh3vY9Tcoe2d45DbkD7ECsM",
  "key15": "3sPhb7jceuxwfemkZaM1EHMyBpiD6m8qPH6wGPArb3QoixL8hx4Q9GKtNtpUAdKMaHrgqgHUsiJox1pYLKedX4xa",
  "key16": "2CiPq7nfxXbV1osdAAdSn7Ym92szZS5bwifsNb8s5LjijxbmHetvFUykuNPY2RXV9WXPMJv5FkTnUX6TepML1AS7",
  "key17": "5k3jM6gpRP963nPEQrBTLWR5p9bsWeudhS3rEA7C5ZHGRJYQBPrJUX7babnDK7eXfoS5sCwDMiUbwySaZAV9gtBz",
  "key18": "2Ri8zJL4sQp6DaFZhRuorvXkj7YohzVZHNUXfa9VLFQXKkpuiPcEQH6dMGHEnPdGYD2kDe8hG4TTYxLdtLvfWbfF",
  "key19": "4GzcxoXmnEj1qB8qTtGD6jUFz8oSgfep5spUcccTk8y5u5qajc8G9C2Qir5X1TSTebg1NnmhavfZRG5XSTpqVedi",
  "key20": "5agtVw3JWvsrHfZ2Du8iaWf64NqVzda655SfdhUPY52pH7EFyP7FiVRKzAvTXmmUqpYzJgGTZvh5gzDEp9drLNPt",
  "key21": "2UAUoqChWpfQCibRywuF2MkKwQ6ceFz59r37UqM3cKiv5RUsK2ie2sLVWzKNjhZQnqv2vQj1pxZkwJHyUJQBtLU8",
  "key22": "65pR4mxE18hizVuBvUth2qcV14ut4jSdfxhLQ3xjX8L6dCFc4vkgdgxYiQwhxA4MysuFL1xp8htEaR3Vh1yRwhBs",
  "key23": "5UzaNLgA7N4dwmbz97RiiuJEMtx5vMwnsSoJvsiBmHvQXtHHrW71R2S5uMvEavXuP6xEeA62tF47QvQZjCQcztVg",
  "key24": "4PxtY3phsadHX6AjYNggSGSGUuzG7qTsjkzvf2icZU9xnpKgrfNgLJt6qxD63jR5ZvngNLctPTLc8sJoj4Bbhi2K",
  "key25": "27UL5ji1YFzTAjM5GRbX8p3HHvTNgDB7Lqh7mw5ra5vpvWf3xnMN2nB2VC237bMZ73rgtiFGbHbi3KxfmoK9A39V",
  "key26": "2CTjHy9QE5QzbWU6hYJD4PFU3CTupwpNgsN8E5b2Wj8spENsWtgZRpiBMkHD3mcaC8KNAdmtsZCDhBd3vqVQC6pJ",
  "key27": "4QQimWVjpxsyKWJp5VSmcYwVzs4CnQ2sxuT7s2mbsAt6jhZfGVPrh3QTQBesPvE2ZhSqSByU29zPw8gDzfQ84oXw",
  "key28": "4RUR5qq4aYQfzJMLe3oesTpdEVdCedGvCXKsvyxwLTKjQTTNuuPn3zLYvhY7phmXqvvUuXW9TLwUvEf8fpMKQHZb",
  "key29": "22HBNuAWMD6o8UorBivDN7u6C4tWr5iBTkbuWG7EHrWyMTkdYqPUK3VtMJ7XFTcfd9mFpXWQeaEenS3vWwNZecuw",
  "key30": "4UCRHP2kgTSXafQvtpvnH7HAiNn5Y8apyPht8KM3JtszEnjHpjdG67BWAmcqNeKZ2tJptEeYTtuN2GqW4WF5DEam",
  "key31": "3roBNBzgghX8ieifWJPuDpzQNVRgv1f7U8Yckcj1tkNvJbM94jtDVFdRmrC7Jh1cHdPjDAQHJE18MQ4hkzvDqg2D",
  "key32": "3rEqsmxHghDdFychKe1MFkVZu9od3sTpSe3eJMPej9VNMaBGAtPSVEELKdzyG4uP5QnQPWKdFZNgrHLHLpXRxZko",
  "key33": "5yVZKoWXpppAQxnrdBRDqW3ZfAN1HvX2xpK1ntbjASd4UsN8hpbX184mcsWqByZ2Zh4o8TnRGfukMJoJfxGA2VYM",
  "key34": "4Y18ZeGG36zw3LHfSHFr8vJAAXsez78bWdYiJxX5MaeiEDGRnG7hcxEWe5ANeTWqFPqTucnQSurk9nGpUt8qTo7m",
  "key35": "4Ae2fqDbKaXZK666SQuAsHZBJgSU4BS9Y1Y5LVW2jEHXVcWbhNanDZcHeWeyyP8Si3Wifrz6hgXEBbYhzthiBPz6",
  "key36": "2Q61zCpAFxJtCMyr23t88GrehZC9gWnSuMWAahqVzrwScTQARqyznxjWX2K8RvDeHdyNChkePWBBiLeHAwa2BKg",
  "key37": "5EMKJk6B6AdyG3mrFawZ7sFRPu4EXsJasG1FhTLehGdeNmbvWvgQkPTCGR9M5qKhfiqH9Ngn17smZCfpMXutGrK6",
  "key38": "6BSB9afEQbcwYfFR1dxkteuFygVTVpibgbCqEiygP1bpHnDjf6cBEJj2ELvLREYtdq2P4maV5rHoSq1bg1jbr8M",
  "key39": "3QAnSJvRgszeAzi5TnspMeRkT4kKGoeFCf2NkSvVPQnrvT6X9fuQieLCFKuom2aqdrve97JL91QYFX5xfq6jZtdB",
  "key40": "3VduaQEwkijVcmAwHk9SdaCvXbD4SK5pxnYMJLhQAd15mvkViGwuJRU7J4KMwPgEGc1PDec1N8Lk98nNKFz7EPv9",
  "key41": "3ootixycNEVg7nk3bazxcsMDYkFuJsptZLChxZYUEgr2oviknf2jqirRZSw2vMeo7f8MDDgv45Ep1HSoKLCET1y2",
  "key42": "5ynCKxZzQUAye9N2MUjyZeVUqwCxv93UreQcJWTi6PUConxZFHYRFntrwXd9T5sPbjxzdEKLiBYVM76HW2iJjBxM",
  "key43": "UnKN3tAhkNkrsjfni1Rzp4uFVVcTLaEVUtLNibp5zDeP6jEvzSPBB2m7dZJkzq7r1ua4KuWQnQ1wtNoErG5E7T6",
  "key44": "3PqSB41WVovbc8MM3U2AjzWNPrxcp4XVN3cvWNdV5hmRsCvFuXnUfscmZ4wmKTeJTsZH9J69T3n4P59PMdphn1sV",
  "key45": "45BfxVvbnhGXMqmgfGpLz5btn3NQneTzZCnFp51PjEEBADeNWDs4b7xYzSVaGFRhPLwQTiztHtNGxF15azADHgdw",
  "key46": "58w4fVJVKo2eJLnbiem1nEFuYgUuE1pGkonrZeceWLob1e3cQtdipaP9KAJ1uQSzny6EwKXEwMnn6ytmxfyV4n8U",
  "key47": "snNxMuuFUM1ZYkTV5ZBR6Ai6oZvf9GDYx36Xn5kVjERkay5A9iQAWLj23HvhqceRwZBi3aXX7zvwh5vyDQbWWe3",
  "key48": "3enNW8wRGc57wm6VxS2FBjoHWbBcVzp7eshLE192WfoCrf8pRM9XX3PsRawJ3Hg4deFcuLksTKPonUsfTZdWPKGw",
  "key49": "28oe6tzV82CH4etDRrA4Z6ph82E7g8nit6RtyFi8BDMsaVsG5sZ8yutUFs6uv2SnA5t54CBFnmfPCf1Bq7WjKxPb"
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
