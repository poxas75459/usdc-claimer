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
    "9puL2ShCykuarPZGwWzH4uNB54ykscq4ok1GLsvXeHcQ3JkBmnKtnnBPhteGt3TANWLukpxkYT5EESp7NfBsten"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thPnSKr6FjDUtbcKnvb3x2NfKUPXA8N2g5Hmt9HDaoKWuDs46WwQWKDq8EnRhL9G3eiysgea89krSE1V1JhdeNS",
  "key1": "3EdAqpXXmqzRN2k5BJgU3uFgd8CKthieBM981GNr468ijMSoeut59L319M6NHaPTYgfaFxyFQFfzn7Xxi2C7347H",
  "key2": "63zC93Yw3pvno8FZ6aNTRxGiBA1Kmmp1f9H2EJm4s8ZZwa6pBw8tVCedALiitib4jiFH6aLPVad2KuBHZrRCgEEA",
  "key3": "5RWkXh3mFidJxcvw3C3dEubzQqYoPzKwTmEV3TDMkBdaL5Eo4FLcnKYSuVVEZm8q6dEBFhBNg6vdC7QGFRonnt8k",
  "key4": "3bS8aqN2p4p7DqyCRA1j5pz3KmKLq3cU24bYaHVR94VS8WgEmhHgwQfR9axaAeftLXYV14kTSjcuzttjcnwePnF7",
  "key5": "QpjVo6YRHCNi7QHcHCdzuFUJWFYhXCwabz8SxK7AhFvaJ2oT2gr5qreTf7WSF4DpkM57Vfe8eiznWjZraG5MXWW",
  "key6": "2NACupi3Gksy66fjofGodqm6iKeWBy8zM7Dh8qHGnMZN5uHcaFm3MrXgYshJxc4Dfq93ZkEHwiEmM38wujC5JS2K",
  "key7": "54Lcys6cXSqbmaqBryrTmdH4ppVjo1E2mrpPFYWKFUWzpCWoJ42jUqM6vrLtc5zewpdTnJvzLUiBckFWq6QS43E4",
  "key8": "3s64SXMxMxALtCer461ZU2RwrxFzdyV4DcSYLJG7ie4p9DYJAkeNjgfJqMmm46PvKR8cheytqUzBLHQdmqj4JJCY",
  "key9": "4wsbfNZN64t5d29QipzBEGYi3gSZiicbs4gnzKEV26de6n56HM2sLCrzP2NsN5MLFS4t1Mts6jBKx3w1WdXya9e6",
  "key10": "4mcKTPw7YyEgZ34ronUTi6ZkczhkKXXMJrteiANsbT4rih939pRBfdYY9CkS86n7yKEE9hGeYEAfZAfbh6mw4Wwj",
  "key11": "2HFUmu4LMWWoDLU7e3k36JteTWCwvQe391HPh7LdzgrVPJLNUbn8L649ZZZVhdnHSKc4QmPsuE8JjGwqSdzeQSkE",
  "key12": "2Z2tF1pZcL2AkG2X7zxh3x4LZtG4mDP3Qt3QF9h8S1As7CeMqrv6CzipyMYT1BXThFXBVJzMqbMwRRVShZDDWCKx",
  "key13": "5ZHsbwcMBxuzDardnHGgUPR4rx1C9UQRsiQhfmu2VxdeUBLHV5tp3Nquuqg2hq1AHDRejL4E4yiMb5ReFKfucaMx",
  "key14": "5855kgd1Ub8m4xDMXXcM7ejXSYDk9jcqokTzzRjUp1bKRpRzfHM31M5S7EKcoNzEUEx6SthG9QRAvHPrjgvkyWdF",
  "key15": "58LQtRekNzGVUBU7jovo15gczf2zqAy2AJSFS7eC4Y47wGa5RNiW7QLT1FtvBCzCs4paRR6db2VsAmHDqzGwsgvj",
  "key16": "2bFZ8z6xjGERwMe1X94QzXFtXp6uGpuBbUcibEc1GGpUqCLyjdXbEZWncpcVW6JYsq4Zu6o9uW1CUcB1pwLeEy1y",
  "key17": "3mAJ79RjFrtuYNy3ADycmCZhnoxYiFok557A3M7eeLsVZetGiW8Tq9ijd4jWZxES1zZBNnBtUBvrWQmPfozFRaW2",
  "key18": "4RFaU1cdx9xGSCR438GmuM7bfnMBZKaMDKWfajTVL2KEkWcxqpKgwY3Mm1CzRhYs139Xhx6xhMAYCxRCQBTzFZVt",
  "key19": "2U66qcTAA8hQLvYAHQTpAbfgXfvb6myWB6cCdHet3H2NMr6GXg5xieHu9XbNFbRWkHbYBMVWxe8hSfwRFnpXt57p",
  "key20": "YRfmTQZkfbaHN76sVR9ZHMV5yTgXBrUMZavzJi1D6aVVaAiXKnBBgFrqgJh3vWRrdJBu8juAQi9z8wqs7KmPMSq",
  "key21": "4MfNsSKDBG5r2RZwDy8QjXw1tdrULwnNL2QcwMnA3RECwtf95mUZJ6dYSpiecEfAGpWokV26b5eX69uPZvcwX7hM",
  "key22": "zY7JKYzYpMv4MGJR99tESqFqiWMo6Tkp2nqPrS1fD9Au2DigaJUQHCfxZYALiFSXYvuHnSWaD1qx1tWQH99TvRY",
  "key23": "3Mh7Rq5jiKW6PAdAJ23myAFUxTycgeP4AYoYUn4VgLHhACpTExsCDmfdA6D5SPxZpnMUDV5wJnPMermc5fCN9A1a",
  "key24": "4WnTWyKz71uE3C2UGhXUFocQPrZTcXKwPmigfFFF6xwCbWAKZMkZScWrzid6wtEKB7F8D4kzyjmDCgw6ujt7nXSA",
  "key25": "43C5buac4HpPv8uGH4tXaB5rEeNUTpdhdmWAEyWyFmPmssWXNgXKX2Zmp3oUgej52X3mkSSYbRSpVsMLPmoLGSdn",
  "key26": "5UDB7smHKBLTuvSLcosS5SzqeTS79jqeQa7zBXHjuqdD5yHvd5LXbKKT1BFbRoRnbhsrETwiYMtEa2HSZtehXwk1",
  "key27": "62yv2JVXB4D5xMLCQwNc7GYJoAT8D8siECWL3qxZrFJVmW3xV5mx87wiXBzgDNfvHZU9cuEG3TK84aMNNhQ4xXk6",
  "key28": "ryfLTuR1NR38exctXj6vLTuTMYWPkM4S2YDPtFKKq7dgAZtzXroMuy68WHHvViEw2FRgdEc9D5phwo7nE7neYiT",
  "key29": "27uzd6BarWVuGt7JUyXDQACWZkBH1yFxnJzB8bzozAfRha2HAhLfKGLewQD5ULQeVJZUvaNEJGFgue5VmQndfxmV",
  "key30": "2JutWtazpsQdyMRV3rpHCj3G7rY5WbkKCiH9zJ5uUtfz55a1hei18eLUPqJK38s2wtuTJdkEgsdGsTzFqV2p8PVJ",
  "key31": "3m5AneCQgqA4T75RBesHsPgqFA1nnyMjr9jDAtkh5QwnEenPd9g77xXXcG1QChrYh4NV4ZidmLVnPwpWKcfDW85u",
  "key32": "4CPkYnSNWkzrHfi2CndxeA2xgVdc4pgoaxFT4DenSiC5ibGNFXv6xKpy1ZFxPWR7G3cpBUR2xGoL44CBqzg1hcEA",
  "key33": "5vqcdksfNeS1iFbcpTTtr9xQECe8RFu6gxXuUuXV7xseZRmWkdYZ2V3ZPxrdphGF2kShz3XA5q1bM3446L9R9ZQm",
  "key34": "2ijFyVf3AhAKuBhVgQ4qhUibitoSeCNhnufEvVSB3K6YApnC6t1WxpLu4YZpfBb4dv95TQevxYimC3SmY6VjDJJS",
  "key35": "3hoS9ohaS89wUh6FsrVWmnYeNHPMLfyjUdd7TpcVdVmUH9R19bn4mq5hswJrbezUFyTaCMN2kKV4qeKiepG8TBNU",
  "key36": "4mAo8gkcPshnSPgGKdSrhdQJafgivLZcAzWmaJFzg2Do8GQeaHrTE3dmNHDaoqTtvyygPWyjQ6TmqstmYiQWabUT",
  "key37": "5QT35yvZjsk2qC63rEASZrapkhxxbBsfzU1HNgkLmJhyrMKoeGi7B43xqQvRbAMeFsVcsrGwBgzEmiptPQTmBgDB",
  "key38": "2wqkkyAU1FZAxAjxJE9XtK4YxkpDsihcW7itahT5HoabrFHK5WA2GpLoisCCiWSeixaVpJhzw9DkSchN7Kr6kavD",
  "key39": "PDx3SpXNDbKQpURZ75n7unhbMCBm81MzckieGWCN85WAdu6b26V4fyRXDVpRqHL1nNXPsPxTxskFyMmVFywBNu1",
  "key40": "2bDfAa4fSwwxVDbg83m1Dn6yWnnBpA9FJ17AUXgaNhHCRoUNGEpvE9kdvG2Gs5LLSk3CX9kMPMrmFMUffPS622gZ",
  "key41": "61PiYWpkeuh1DWe2mEfkTDPqURid6sKNVDAPMmeFudE6WZ7dbEK1BzL7vLQoTjn9HMuzwnvztCj1q9jAN8BUtqVT",
  "key42": "5SQVXttxn9qvFMa9m3Duo6hUdg4UzG8jB8PML5MXU4mi7UraLKagtkQazazEgpuAEBExLaUJGpGtsCMHQ8cPVobb",
  "key43": "5KvTtFWx546EzUhrzcDdpA5vmry66ds7Gqr42YXzZDTXDLyUANPpyjZM5mRfAbEnQLWxFYrMEzhgefv4xA3UHmFR",
  "key44": "5URuF9EPh4ju59hdbJ5YH4bmhrxZH1SMLYU5UB3yxPoFbYvL7mnSgDxxTGv6QGBDCr9VpfVeYdgfeh2WYRAVnDmJ",
  "key45": "4jeszuu3z79XpyKokFFK2cvN1FUzcZ5mww1kzfgHD3giYWQhKNRzmQWS68z7QBq3M9Fi4QBawMAsBPYnQsrxpdse",
  "key46": "459v8j9PmDTiHw8tCxQVNDofBo1AXkGLLtjqygaKALiG2z5uQUUVJZxPJzmjoZDatVq9yWUNTMBzzzn52v6jPx9",
  "key47": "4uvFgWo7gGmbQbWZhsdsTsD6UcsMvW8rL4D2U76RNQUoMHqc4Uwx9dCNeYujkJxiwWNwXd3mmdz65AN9445KkAxQ",
  "key48": "26yWKi9fAVtSM4og7rk3gXzPMQbdgmsD3wXsyDYFVLZ7eHpa5hjTmXh1TAVTkSzrt5XJDfBr5ELxpzX3MTNuxjuF"
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
