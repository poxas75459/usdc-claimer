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
    "2TZddUQHvTRGhEJqZpok5jbf54RduTmgQtceSpwYdwAZyU33KYbayWXPpJV37JyJCXiQNfZhvfg1X4juuxJm7ovM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDCZnTXhA38qUKENvqvJ1BaeZREXx4erKhb87JiZQfk4m8JxVtp7NwMyjV4aNMGkdjQzkhc9YvdZC5GRaakCBM7",
  "key1": "1bbRfesRsVek41GdzzyuXHjnwyUUkEZ8wd9ZeLUNJuAuzo81ubqggkeWkdaWs3bC4BKV5FdEhMCdaMh2r81PyL7",
  "key2": "5Tk6HJpJoQuz6koDEVz2sivGdvTeTicdf45mSDx5dvSadhubCM7e69Vwb5WXnki1XmfUjRfKRmQkWLzhUP3rBj26",
  "key3": "2KYGMpSqrtLWux5Hr5jhrddV9GKyq2hbRN7hfNiUaymhHpnbEmnZ1eXMnUW5i83ZogrJ9rU5UXcacfSeQW4T7ADK",
  "key4": "2sYzjJpkfCC4U5Y2DPmVyjv87gPjDq37xzPCRP1x7a5diC6W862Ye8gnAPgETx8pq87A3XftJ4AfsDbmUjrSS4EM",
  "key5": "5ZRpvrU5cZySiPqSLaug1qpHS41FyGPxceXM4tMdDvTCiTrSaoJ1u84GufdYMU6mHGeaQ429cAntmP9SarWijdxe",
  "key6": "629Z4hrBRseymkSEck7WD8p6t1rS6uFcSKXM3QH1LSzn5Bd791YKzzLtt13WWyVV54GdUtZ9A5CtivzDN1WqwPjf",
  "key7": "3b6bDDQMg458ouLD3Qd3La7jhByJbHh6ZHTSv2mwy5Qiz1RqJQueKyKJtfvYutcgwXNLPb7AR2YguWzCEBh6EBKe",
  "key8": "5kwKK6x1upHpAV58T13AjcKz3Eaf3TVCrCZ4E3YKuFdUF18jg9Xe1mumtMN4mGo2Nz9aQYWVihjz1FTj5mNp9ou1",
  "key9": "2c6QM9H5ppfg8K93VhmSbqxTwN1582TtWvJEpMMxThq2DNwH3tJWvYdpMU4kjUAaPebL7K7fq2JxA5Fpq4W73vic",
  "key10": "2AdRqJA9LXCsCiuJvGfp99vYPTVU3ghxz8RMhc2GQfSuBzPxN9SFCn8PcqLCLTN3QLAx51PJcQiBKYBh4XFwrLWz",
  "key11": "3BeXsBVNUewWJBCQ7aXEecn6HkgkdQCdnLt1Lab5N84sEsSCGQ4aLrDBYy94pD69dsZijfnKVZN4jkFQhB9yGv5d",
  "key12": "3o55H4zPm3CwH2aa8GoGQPhFH7jkkGqNYLaEJcHxoj2fZ9bqqnVtKphipWsCuwCqARWGs7LjTz8X97JGKP5RMzzR",
  "key13": "kus8kqyaehVPpRqTSGtXcTXj4VcfstZLVtTCqYPNJaNVEPy3hqtajg4KXgNZrsgvgHp2m3TPYvuoxyfUVWAbpWw",
  "key14": "5qh5XaB2ZY2rhJNrMsaJ6pWGPJ1uQi5TQoh5JRdqD3GAj1rWqvgHNUTLTiGfUVQHVQsgCjXs8gnDUcEFwio9ZZxa",
  "key15": "4dwCWJXtWHyWWWCEVcZt6zpMQPEKemR4ZKif1chHWYHk6yo8nAkxFtJSLRnZTZd9uV9BFSASwkPYH9mVFaGjTHtG",
  "key16": "4rbeBNaCiAGqFvRhwjLvzjQqfXiS6V5R6tvA1BevQsYwVugQFshmkyemr6RDuvDMh4FgUgJNga6ir9maGHoyAfZZ",
  "key17": "5H4VjTe2PNWksGaJcbLk3AYAe7vCahrqNPcfX9iXM8bxeWDjCNd8xAnpMMepMtxmaRVqLrMSZ5iqTaMQkQ5pxSVA",
  "key18": "5vNegnyTaojrwGqKYM4cV7HT3USyWmMQMsnor6kJQR8wWBGNdGaYnHSoQe2q7xjmVXWrNbfwdrFDabx1TmBDNNNS",
  "key19": "4haB79ww2pX5fj6qcesYuz9UnKKY5amunh2ye3Je34zjUsGTBycPPWngy6MA8rMLoFXEMiHn1vpWAewaK1BrCdWb",
  "key20": "5qUM6Wkpim1JWnvZxriiuXpAiFJ4y683Mv6depGDZXN3f8QX9ELDtJhJeKC2jYjgs6RZyiyxAnu3cSQwPEq8VjCy",
  "key21": "2SmzUFrughpJFw7hor7tJajYF3sxNR6MKuEcEakk7MZ2MnciTPWzyQLi6yX8sYgdsDdzEPeCgchmkSrbuVzNzsNN",
  "key22": "4WWTh1Liiw8xkyT1HvdyUyhMEFkVLuvoezYUS8qF5nDHUUMn3RuP1BfUb4Z9K8AF6rVphuBTS6g44EH7aUZQgwc6",
  "key23": "5CXELjmjim5VobFFzd4GDCon3645LqLmUAh9ktwGLyT41eJUnUATbim3GjzhyzYJogfZwQo8M93Dbpckso5p8nYk",
  "key24": "2bma3KDqocLJX5hxFH86oSofz7hMLVqjh4gZC4MYhxM5k9tZ4JmpoKTwSFMHxMNKbizNGVY3a5eP8pQ8Eyb1tTdv",
  "key25": "5nZnQZYbVtVz6Vbv33PDMGadeGpAPCBCj7NpB98eigMoGG39JDaN4NeYJxc5addwpNTjoEx6vtWg8i5TX7Wk6vhw",
  "key26": "48A2iZvkNgLfmpCUi12aKHQSxf5nXyGjEVY8vyzPr6rfi5XRw1bXYhaZdyLpoCkxCaadxxJ13ikydeG6HQVr2NBp",
  "key27": "Yn8eYTgdxHV9dxNYRjw7ENjEKZgTjm1NKKp9aotA7y8amHQ478PjcpAi4vi14yeBzzyQ38n15m7QnNNUPiPfBDA",
  "key28": "5s4mNAx9gdCkiYVzzYMKCBox8hsstnH5oeVxGqgPm6m9Bm264ov1LQGxsXod4Azagvw9PR3MferkKKq7t5ymn27z",
  "key29": "3Lov9ZnDsbfjLy8pFhY5Ktz7DonDdWxZnhgTf6KPwXkpscBUqerKbP3LhhG3jq7D8nPTH8CxXTE9uCMRPudKXgDu",
  "key30": "4QiPqtP4D5bEHjtGxTe7gTkPpaLYBurwnvqEGmXttp7mcWezY6ihLscK4DcQCLfNzPJaMyfK42fXnhVQwyzrYx3U",
  "key31": "4i8XZVXnGdyGastztAz5uLPsk8uFGx5N3bSvjmG7itzxcVuMpGffaKcDwV3r3t5DtLdDvwa6y15fCaLA26SRnnRK",
  "key32": "2btdDeFnXEXZMQJPJaGmT24eCYQRvVTx7WhciAe5wVuppJh1WhwCVh4HZZeyPYbBJ4qpMmK42zkML2SjMLHYhHVM",
  "key33": "ZMGVPBeAKQ65U7oKCvCDKGLK1AbKDGUrh2msKBfzStWidK98sWu1tcW9AuKctXgmoy4yob6hfNHXm1w9pjnbpxm",
  "key34": "4xgcu2C6ZWdWtBEJx8zmiW7JYgxh9BGNqhc2BomkeRSdqvJF4sQMVWrd5mEa4bC3HyMXmBb9MXSLpn8b9qouS9Xz",
  "key35": "5o76XCR8wZ6sT82XV222BVkfvvdYtBuefV8phukm99gv9ixMjtkxowqH6QUR3WRatSBFR6tZDRzJzZRSmH7GzgsE",
  "key36": "3wbkSiYZfQ98YVveHfpd4Wv7i1hkH9HSWSBmxCQatDj34myZgBAqC82G6DSVn235qHJ74yYxthe7EjACRVvFGqUG",
  "key37": "sYTQVVUViwXuVbQV8zv7WbD1dc8fkChx6im8L5VpeE1FJSCDCRiBAqp1rRSgeyrXz9dPfJpCERN7fhpksSRxUxf",
  "key38": "JNHe6kHQmvEiZGBVwS68aTTuWkpT2Q2hvPc1qA8HAr32UZYjngXdgNxGooEi7xAMrbiGcdiTLKa6jf1kiBUiscm",
  "key39": "N1wHcpDVCzeLUmaFjhJiauzYPCS4ki6rpbaRxiEMdVA4mfzXrSpVR4PXuFoRFjgqHNCtzPgC9X5fB14tw5vnSYY",
  "key40": "4LH71vNzJbe1sdiZnqEZe2k7n6YhnkRwNURABbSXfWZYfshBKpqfae5uPQJX146nhv3NEf1oMyPtuWGmCJ4ppLSK"
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
