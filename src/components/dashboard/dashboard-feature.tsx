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
    "23NV4v7VhPEUVP9oCBQLiZUiE7D8Kb569F8hCn222Z7s25yR1PbiEVPJ1tdzcMGYhr8gFnjcbHYGRpScEit6QzvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdmmqqaDNwpwrQHDMj1xSSF47vjdoZtf2idgEKLzqjYJubJxyYh4hr7oiKvDfBRmrteFTvAtPMxGPQFSnyAFyob",
  "key1": "5smvXowjW4GNQ58cQRAQSTG1jmhxMsWiuR4LAoH1WriNa8PVTqbY64wQmt9pkccDLB8ZJ5myM82jZ4f9RJkGzHsw",
  "key2": "G7qPoJMiyCsCXvGRi6DNSTnt93AoDsHM3CAJmzFa8sUPzFFUqLSRYHRNGca2Gt8rJtaRkcLGy374iguRQZc4hLb",
  "key3": "dZw7nVMkr71sPVqmjvgigp5MuL47jgCz8fu7XRzCbDZ2GcUWLoDFPvuT7KrVrp8f7aydYWkAcQzmoNtRJM7VNqC",
  "key4": "3Wfpcm5Exk6jZFosmGnMmj2Y4FSGS13qPHiRFE3pbcEm5A8kGryduYj7D7vWbsJy8p5zaDE2TNXUu5UMEKAb37Rt",
  "key5": "2z3MESuBPiivLp2kNGfWoYutnJrNd8x8Y18caeuk6CrfeWxqsUBNv1jTDDrm4Xb6CD44RK5wBomCSN9S2vTxeWhG",
  "key6": "27pjsVPtDBbXQuwaDRnkQK8zcXBMBFXcJz2cAppwSrzCJM9TUkCWKRTsQG5ox83rnJREnYyE812uZARo19eVCCEn",
  "key7": "4heVwwcSPsqZ98CY1mfqmhTAypGpGpeSCCgwD6pQhv6pMw8gAbc6rauw36ECHXGam9vBL5DW2wRVWmTh3Va47EGh",
  "key8": "4FevBDs6gwuviiAACsXgbrn14UnZ5aCRgQh17vju6kk2xf7rDAHM3ovNokTL62cFGX3ss1rzhJHZyEUajMz34KZ9",
  "key9": "57tm97EGS4EJ7LEa5fjzkhBLERuonVbfvnrRhB2FtGkxTi37mHgfAeQ8TsqZKXLKPYNNTnumhGZUod87N5DEqKkV",
  "key10": "uUASzEofJ3Gv8xXPacs8mBdAdigsxfnfGLB5KekFCjzJUWgpsu5Szr1u9HxnzG7FZfwZGp7d8GvmjwNzsaHinXQ",
  "key11": "22dy1dn4iw15yJVj8Lz6BzsSaEvE2vzxqsnjLPptu8D7BTwXUuGah8zoeRPHDQohWC77Cdmuv9GggiyUQTMgF66i",
  "key12": "4FarBT5jkRSvMCSuNU6RbsRRFmA1ZwbrCV2WAE1MVf9RuSuf8VmsPDJsG8nd82aS5WRM93gLAbqp3didAJw3tBcx",
  "key13": "44kcZ6bja8CnvsHnGZv8NeZv1qKbrHzpX8GW4cXTqF1mRsqDDyTULGAGWThq4HsG6wxuQcA5EaeKEsTq4hN5bSsh",
  "key14": "2RSEVmZtnm3AuLXMWPq8zUSHwX2MVZuaFMsAMhe4hyp6t8D9YTBcmDJfTwckfPKYMGEUErzJ2EC5fdcdY8RewtZu",
  "key15": "mLePGQuikF2LAL3aCBhumjFau8umFGF5TfArC8LYZ3eA1McPE6AEZJRK8LyCAnqk6a3CfXCzW8hPNrFVydfaEJu",
  "key16": "4sRC1QEJjdK3mf1uJS4S6acSwiP6jGRaH7SKFv3ZfiXLbxYuPfJpswj1qwR7Re4dwDXozdjHoV1f17hbCikfci58",
  "key17": "2G1imxGP5tHCZj9xb7gLs2kgmTQRDtpgaL628xwyAesZ2PDS5JdmLCEV3gGtyytpQPPFqzimfK9AR3gukG1jFo36",
  "key18": "3YUY6W2G8TrcKEWkgW3ZXpCJbnWDBtt7SLZqjc7zNMaAf9PPc9kw6hKKUVRZA3vuzTD4moXAqFf9f5dpvRcoEB8W",
  "key19": "3w1jU95KERBEbSpSgWty44sibVsbr5VhVie7fyJ9xCAx8FyBnMFsCfN2nz339sUgmEAVvea2Pq7LqE92g7ewKpyn",
  "key20": "4MoKa4CTm9V2BwsoS3ZWQPW2jCZePxVf4c4NC4hkariiYGBayRkgd9n7BMeBhKhsymMwpsPfhrgcp3w3rYTihQxM",
  "key21": "2Ye5FDUt9QdwwdXH73xAZZqiLqcFdcJVTES8rGSbjJS7H4mJFVyo9e6YgVmRfweZZcSPJEhuHCxbUWigm8YjtWpr",
  "key22": "2PRg34EcZo7sL55S8gmtRiDZtWMuFATYhL75aK3rWrAzjDM8homqfvZc6bq4C74fiSrFsbeAKnbkd4XmaH46CBDe",
  "key23": "3hKS5g4QWtv66hAnheoEU23x8aq6rjeCTpAZZ1wMZzAj8jAWteocbofy3fBFw1HG4kR9dA7dZffKfyBUjkPNo2ev",
  "key24": "5tUYQr6tztYQgCisK19Ym14wMqedwnAsHEtJmPBFsRJ8T9E96bmytcru7z3aBx1Vc5p1zfmdYuS6WAY9VGyUKwFy",
  "key25": "4pNoMzq5RTgcDFccLmYoZpk8C9nui7Cd4XwfWjfCbbzpKCzBAZZCug2EgRDsftj1YMM9REa8U37t6YhGt1xuMXy8",
  "key26": "MXEjT2qdXBg9198sc8A5hH2wRvFBsJHiymw4yY1EEgdwe1H3iRVxXySutGyRkwMh89PKpUsptp6VtgLud5VRcAE",
  "key27": "51PZMd2Qpej8vSoWuAYyeAbENUa3sounyaruhNUKuQnUYgBLitRxyNEoj2eMyeaDpSuwUwpVAjwHMtwBqNbpChKJ",
  "key28": "2pk9Stgq5HDc5PBGe2FsVwHmnG4MNCWgSdGf3L2dX6V3KBN2LiEnMT9b2zwaEezdneyYm8L8MqXnK2hdtAeV35Wp",
  "key29": "3uJbxQsb9uY64ntKnfbdjp8mTpgnbj6nsr79J35H4dYhQjSPSB8M3RcVwAbXanD7yxeYDuyFYGsEwWzaSzPWgJhU",
  "key30": "2SRnni8fq7khLBUNC7oR7B1YFLjsJKEJRDiJVRZ2nKkxHYjwo2m9JKpkrZuhwzmA7f1EgBP5EfMT8e3VsW3UGKG4",
  "key31": "2NswoFkWFwHpQ5HcCz98C3xfJbrfpmttV3ZKLc46K5Sa1XRKx3kXCZeQqnyNaa8Qpd3enMpXzC4J2JWXZqaSbbdA",
  "key32": "3vqgMNjVfwKWWnuF67ucb5a6huqxvWZPLNJ7KXtqXjbTaSRzYMN4NfCvxihrS3ffT6zVaXpZBnGC7egRb7UEGab7",
  "key33": "4SB35uWCJTjvHgK1QnfxcfLAovqSQVpnJLeU9eSzTeyRMsnwuztHa96h1iaTgpa7wnR7y1v8MezQxAkEBwDteGw1",
  "key34": "3QNx3ZkxzBiUGPC2e2cAD8qoC4DsXzDLRj1gepRZpouATKPE8HFt4qzFXnPYLMmiKkbUYtKvRQJb1aA6vfa6TjPj",
  "key35": "2usBvsbChQ3Tw3RUt3uwrPq9ZAojE4jaKCHm8DqCiQSCtiNXzkqcQGEpE7WbatHPuTGVetQciyint6ucV88Moweg",
  "key36": "5VyoZoaWB3N9ocPd6vcMx4GmnueZHBtqwRqW9GKWdMJ4ta8VGRZjR4a4TgM5dUFcLUYoEvWH2U6KxhmqM4nyK251",
  "key37": "3C8gc3BSEgcgVm9Sb1Y2Z1JJhGUVgkwfW52pzj4oeb4Vu8yAzdFEwVK51UnzQ7QsssRgtxRvQUTgD1JYzk7pP2pz",
  "key38": "5CWDmLw1vsvD3bLZ1Cb8hWtYA3wShe8VpdPVS8wM9eArQAkJQV8yyabExaypCgz23aAA9PzvvkhRKmM36y3KifGd",
  "key39": "62v3oKGHSZAunNfTeT61tDiouv8cQv7hj56TYbTbr72PRum25HdmaPN9QSB7Nott8u5tdXB8VsCe4RnwsDSq5X8i",
  "key40": "285P35LaEqSmEbfxEUaQFvxdZbjrDuW3HAujnP5K9gPvhjdtttMJ1x94euKxDLdqQpQpyGcPVNJJ3U2wS8hLbjZ1",
  "key41": "5jtdxmWQJBGW7UpfXekm1XJMkZhK2H6EVHsZpmqeF79tsekobyZuPMcqvqZa2vspd5gcXEhTvBvHw2SSmNX7BUhD",
  "key42": "4gsePSkpsCktpgoZKYNwTgjHZpVg5UvPCEb3DgKMTHAfk9zf6h9zP4nMJZJujPBWAs8F6NfBgNDbZcvDQ1XjMk4Y",
  "key43": "QPh1QtH2zGmqwwAgWV4tijvMVzNxg8wC94a6ogCFjknFWVKCZjs6ZaPGs7FV3VqmUoeTWSZfY1QdTHqvhU7R5Nd",
  "key44": "654UNAdo4cENcYDQHMvLRGdFsJrVDukDn68KnPqQNptWtJQLXUwJahZ2U58HYhN6UejnR3jBVCfxuTJSjE7FeEge",
  "key45": "2VFhDYz33HCRU6oqt2tbNwhrnmfNpfqFQAcezw1TW176E5qa8JfaWqbDRkJ5gpffKrmjmAZ9Deg587wv9JhYYFEg"
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
