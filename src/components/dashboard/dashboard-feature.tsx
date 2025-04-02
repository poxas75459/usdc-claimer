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
    "5knYHGJJjCRb73bWhosqVKKxjiKzkoS96h3rQgSctw1vppct7YhKQPNgLFgkdJgz7or5h3H6HmDgRaxycFZvHFFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcFHJJPNxPDNLHZsG7e7UN6GEtgRsMky693vp17quQjG8D4pWiqqxQRXGtDoRiP8PAEpysyJW9LcmyBnR8PtkLu",
  "key1": "5DapFXD4MVx3NjGrgAKQhEXX14UfBc6YbEkbwuRD8mtkKn4qvfsc81Nm4Ze5VBM6fPejNu1bra8BY6t4aYsCCwuD",
  "key2": "4yqnohjxiDht4CZUEVdrfJkeRo3ksRGQvTstxRDmKEr9vGb5r9g7Hr3wEUUZtDYPWvtL6iyGzWpbbBZW4HhP9CbE",
  "key3": "svxS71zcuB9xDXsrdvtn1te58PLLWfw5NuG5UYmfJmrmBL4nGVW2WKha1fyMwznRQ6raPF9846AwdU546aeKpsr",
  "key4": "4G8XV7F5K8bANYi1sXZMAuxEWMrLuDqqDUtkv7x6q7rKfYobGE8KrNay81MdtGgd5gd2hp1n1uGtX7NJKQ6gPBMd",
  "key5": "5iwf8muwPwY324vm2fkYZbUEK4TKBGHe81mJDdmTnuVyGjTegxymH8zXpuYmV2TojAR4u7e51SxmFZwFZzkwidBS",
  "key6": "mkwsq9Qhn3hZdyYK28Mv8xNk7ciKjBxLgxDWuAVrUM5AtSnbEnqeFhiPHrL9dyhiKbtggm33SpXHpDNdXwuksBw",
  "key7": "51oEodDvLkfwadiiLhPY913nV8GM3nMKrusascDadFdRDEWdjc3DSYT6bx8dXhDSY7yNxmL7AXNtTUpFpXnoCxYn",
  "key8": "61ELN6HwbqL9PCax2YfmUKFGXbSfczZpT6gqm6uPRXLNrJNFL8hYw9NnatzkWPtDacodKXz8nUR7vRG9sPmo4Bmb",
  "key9": "3m8tuohNxGRLmKAeffrW4snFqKSk8SSqAgFCjiBaKH8uxLEiHgqDviUJuBhqbod62rJtabnv82Tf9sxpRjM1sEoa",
  "key10": "5JFK3spxpjosxbxpcSkbKUgcP55oKnEhsmTdmM7cJ5JDFNLMXcpBLHBWFvEDjV5TxfBZc6TghYmnt5vemKpdWLyG",
  "key11": "2cQ8azBLE9REikcBYhT9yhWaK18bpvmVhRCRhziNEM3qV91Hbqt8q591CxRAUeBADjFQ28Xv5xmWt6nPtkhuoiD7",
  "key12": "2agrHG2NU65aMuH2xsRm4vFofNo1ZDfGMUKFXrCvvz8xxnbQGfHyuX5WrFif5m8ManGG59eiuTzwsaTPPkcHQbgi",
  "key13": "2gA6akgWBBEkyTzwpFcfYmjTPkvYEFtsJ3LK1uZsicWz9EN674ypcBiRpV426wqwPCzQfodtfLwDtuKiehK6Bs3H",
  "key14": "nH6T1QgsYU3KMSyXG7Zms8Dk5krD7Lt6p3dZWEm5dY1veNWXreapZqhjMYeWsnwEBjd7rrmuwR1UZKkaSqNktQn",
  "key15": "547sJUSqHhXrkR1pthNipqxoVJq2f5eKiCd4sqZ4Kn1drTZzDGGuj187z3vPwULXde5QWZcnz2jKmn1EW28q5zWb",
  "key16": "2YXt3Y7Ax3ErouQbEPNuN1deQ3uJmgVnuLRxZ3nberp9qiVAxRGf3iKeBNcAiDuPxPTc4Cd7Sz5gGYp2b6yaXBFt",
  "key17": "62KQzqLV8hXhQg3mQFufpiV96NYjx4RtdKve3G9pbE7JsQ2xt2JpTHTbAwiN1zUUc9QvtXRboStdHrMvmsNdKGPV",
  "key18": "3VeW3AQ42uR9wF5ZxaH9i6g8hN5YuU5DCUmHUPinwjVyy5SMVMjcqzx8Bxc5KeCPGwACchnGbijGofjS3yW8NMQR",
  "key19": "3MjfWXnUoa4SekVm1da2dmFBAurvgoLRPgJKtBLWEx9f8Jw18x7LK2oBXY1UwBA3CcyV9NY1wv7NVLzgCmokLgvJ",
  "key20": "DBPmtYywGwJZrNqhvLjmsvdZn811hTkSgSEsdMFDjQYpTvNmRgqJc5m2P84JyqSXhW5DubKxpNGRYXPAbXgVXZq",
  "key21": "3u8pmy9HttbSnUmiqpDHe14JrVrsmsjAuU7BYYHdipFKUtf5Utjj5QcYth2591nBjn34PKUMXDdVPWCUdyHjBZMC",
  "key22": "3SvyiJM2QZosG2upG2VyGrtMz156gBhnFAiMvSsgtNHi6QcKfD2HiLgwxCgTHxtQAwY8D6GxexCM7gSExEcTbXoT",
  "key23": "4sk3U4jKA6yqpaWxrqxFLEEXMpQgPQEc86ofVoD1dyyaz5TUErCqTP7ErfBc69txdGLSmWNqGSnatffSDRwf7d5s",
  "key24": "37sEBjpM7voyP9EU9DwXReixaAMR6WitTwAcGhZ3H8HZYuwMTVAH7Wjx66bMNiECaZCUxe4wNP7E4bkE44DZbtRf",
  "key25": "3pA2p1mAVqw4EopN5GCHh2dLsKR4Po7SEaNMa3neYbStX66SD8ifQfb5R1agVAWfPnhDqo1VQ5XJnnshnVM3qsWh",
  "key26": "26yTJcG9r9HRRmvPh7ypy96UnqqBdj4197wWEDhFMYwNHx6XJgsRM9TRg6N4JfwP9rU3dkqRNSigoMsm11N7fHHc",
  "key27": "3StkpM6X52cLghL55LNJ7d5BXyAcf7KFzwPN5tsa6DJ2WS8whraqVEWb9UJqsSXFxc1pS4NJ6fZvNp2oLysBELLV"
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
