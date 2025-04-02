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
    "iLWdeGz5rWi653c6nuPfErUbHMhe9J9g6iuUsKhcHLhho9yFCpNgVUoD4qMqbz7RYNPf9k47p8vUq4BNsmCFohE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52k5KY4fvDaDzu5PvnRQ6dZ8vYvrmW8CSyh1vsvnECgu91cVHfpcWigwqD9Cfakpr1e6qSEcqkGyX1i3BEgq3Hcn",
  "key1": "2JaM9PwUcnMxcmmszAyNap8RcY8GX5jXkXw2RYvXiLKwgv79hbS7Wj34mjnpAnzY5jAyEYGH8yWmXyQQ7xwHonGa",
  "key2": "5ZWZ6Ztus7Y6V9ZNQ3DaGEEUv6G62eNoE2xrzyf24hBnYoLAgkfqpAjM9cYUsrR4d27BoyAqER3WWnoWALtPuvXa",
  "key3": "WCwZeD7sMt4LhJSJcsztSsF2fJZdrtPv7LQhBjTYdHva656JuzKtSjBDXwbvpzm2LCFCazCabaUWVWPq1HCDiRw",
  "key4": "57afnB1WxioPMsC4hbjjYZFEths9iPc6fJnUe1px437W1bQawmnmHgNf5gyh9ERnGwAVBtYFSEf6B8pFnx4jn1wU",
  "key5": "4EMGqyy6bS7DemiMMhWGFCGKGyDJaeHcbpu993Qb2y3qFKJ6P4NzgjY3pHtsyA1P7bb42483kQsYY6rvZ3qA6npf",
  "key6": "3Qb1VKCRfYf8RKkwfBBmmXHPqDADe6ZaHmXgdDUbhMFwJdA3az7s4zpF9Y4k78D7h1FSVVBCGqw31NLQLkoq2o5r",
  "key7": "5ewYra6TdhHiednyq23QxpggnVw5AkVDRZsmPQVcPXrAsikLrFPJnKWcuRKm6CA73mdUFCzNZugy31N3KxCSKqJd",
  "key8": "4V4iujBppQdHceE16knmYXoVj3ffvqX52Pic9TVCXwxy9PFNuGPd3AbiSnTGP8aUGCRt1Xbggmt4gaLojakhQZ2L",
  "key9": "5r1vW9oo6XjJ921apFbEazes4jSMRD8X3UAqaF1ZtSYtJ6VftRvWfNSQVrtadCgCxVaDdrTydLogysNnv4EWQNbs",
  "key10": "4vUAtMzUCEPZC9dLoLs6ex8oGdMp3R6e6gWsnvKwxCMZTtPpKwLngPHL7tSGnihfm4EqVaxzNRgtkhoMdES1yexY",
  "key11": "3yCXCqbCDdRgMGyxYmQULeDTd5d6LG4fKWLJAJNktq5YWHmkUohrqBtXhwkSxFstnWeaadgHSV3xYPWA8puQ5bQq",
  "key12": "3BhAXBhdSe4zkFFNt68KmZM5GNWg5aZPctiVfD1mw7T6gp23vnARB4QfKrAxJ5HmaQEdobf9kbAFG8auEBHTjtT5",
  "key13": "5tuPADgkYRa4yxz2YWRJ7MUEQvCgoS81nKtPTQAnBuG43wbpYd6BUMUvhFG9aVFuhGZ6HmxCgDxPM2PteXna26en",
  "key14": "2YiPxAPMPA5t1QWhEr7ZFJkbprc2TwtH7LWNburhjzLrdwkmcszjeDbHWaghey3W6sdot49Bkqe6kk2rft3zE35H",
  "key15": "4dzEnL98nyaLd8wnR1NsxGb9U3BapxzZk9bDDFvLu3Az8S6LA4Wnt9RRyqqzskVEBv7jechXvAQygAGikpBthP52",
  "key16": "4XpLFRjsRZF92GsQmW2w2Q9NfMXMWGocVZVTUhnqZVec6joVQBkZwonMQKZtjdYZFdEf38AvCLwssYpFCwiN5Jid",
  "key17": "39S2aAZo5R6nmhUqC3HthYNAYouQAdsjgzWG17dEM9tWAwUaCMHS6QGETxAA7yRh5Li5TvZbojm3uHkjJLjZ9wnx",
  "key18": "3Xm5wU4zCWv6qWFCcHJCpYcoPNHNY9b4dPt2FMiCaQCA9qz9tjPCS48VL7kLbWAepcmUKEmFxsYnWFvNkPUWzbVX",
  "key19": "3pib5RLWj6p5FizSNfv81fU22nXppb2J9vQjKpRkbn4SiQX46oU5fwyAkfPmV2X1epVgGu3d8SBw7RtqsjCBVNZa",
  "key20": "3MDyMpdp5Hn3NcCLPA6WccWcqy5Txw6HtBeLF6iTPY2ckhU6sB1B1thEKUimazt8MLM42r4iD7rLeG95RSkiLrXd",
  "key21": "4c64iYNxj6vsugjQ3C64Ja7MwLA7SoMsro2JH8wXwk6a3n4K76zYm2dxj3WE8dMKfWx7KW9cNRUJmVi1ie1RiasB",
  "key22": "5Zyn7dfzoqyteytJ745Ptvy5sj7NeFLChp4boCTYkwgFLvaRCS7dEfpJiu1KLJRiQeiuPcymj8ygwrEUcqiuBdb",
  "key23": "3Xv14bLiqSsedwXCH3voYvDxPMGzjJopUQCv4ZvyRceQBeSsD6Dwacd2xxoxCH6rpRLttTn9hE51kdADvdnubAef",
  "key24": "5RVi8S7GefeXmZVfXaLXd73KCjxhdfDJbU6CY7s2LbDacfEM3ymEW1D8tDtVNWhGBpqe7sfDDCxztwZrWSS7YpV3",
  "key25": "3ceYm8sVFkZWFSnz67Cu4s2XE8ctd4ctHet1Hdfz4DdRpBM4avJ6yuBb8LJeDYh7wPjNgUUwFp1tT9NJCZVQVv4n",
  "key26": "5GiQTpbhbLQGX4fAet2FyBaK9yK1K5NELvhUvnMAbe32p98d79UszDQjVQ83ZteMBrFj2LqaN3P6qXbEUc9GJJxG"
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
