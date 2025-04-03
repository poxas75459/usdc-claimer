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
    "N7GJtW3jCfqjXk67MULH3YC8gx6n4wTTuNR1QZrWCg2gCLLm9QHcb98M5Q3NHiKHcykVghpcaojmcyKcAEa4sxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xMxVXwQYXv8gxyTwD7WvZQQJXxQkoFeGpFELKbQM5Ygfk5usaKhdMefsNhdcsExbWAsXxqiqCTtvCHRLsRjpJcX",
  "key1": "2cAVW9cKbHBtjrASj5mtGfxbKZQSGXV5kHVqChNAZicN5bPv4iqPGQMVwf52kUq3NQBT9ZvxTphiYFgGfxMbjXVQ",
  "key2": "2JsrCu8cg2hSfyiHrPDR14yNo1kW6L5UJkJxQgJwY5RQFRfwhxHAjqodYu7vFCw6BvWTEiCQAgL6zMzLJm5zbxiW",
  "key3": "4cbzosK7bVogCASsUy1c5HEgvfHKNQnjuBxkTHEm3DXsTg8MTtDQYcvhZ8uewmYaN4EGpioR8bJmPsydWtdVBS4b",
  "key4": "4PjZyL1TZJSTy3kJkaxj3FxuveoWqmVPxbYqEzdrqjiYJKv5NYnhSGENdNZunBJRRnG5P4C3Dg1z8fucW54TP39",
  "key5": "4g24UGpwrtxQSWHJYQiWfUpcukPSGTFtPMzvKcZfzVaqNFgXRjW1rreqMDnwaBoaRrFnYpZBL3vrwJDz1N1cu38M",
  "key6": "291iTFcXBQRv6nDWAmvB9vgyW32S8AWdRehiXYzByJ18g9qeadYgEJsqA2FLbjjj8ee9mcVCHDQyojTqW5iobGz4",
  "key7": "44KPGpV6divkDkgSdGeJM23wA9jKEjcJw3Wev3yb2q5Bs6kJfHo8eqipyKx4z9GvkikQTkDR9uXwYbWTHPq4mcW8",
  "key8": "3mnJVw8VsJECfcCTBHhNN1Q71siUWjvZwggGbY3xwRqs9CysTnraE2RMq2XwxCDj9VdujB3zLyANWWUFBdfa7f3g",
  "key9": "2hnPBcMLC9PBgywgMSou8GAvZPUUAqXgBDQfxC5wf4My2gHBnF4sLaf7p2b9AMNHtzkpjgyYYwGMhvGtbwWjznfT",
  "key10": "2bum8ARX2uuxiYqvrYu7HC8FYot5d8ecLvKwQWqyuYQgB2vZbGY9N8EZyBGaYjMhwc1zdDQPRDDG5CwcRxFCsZCi",
  "key11": "ceN91qYbahxVArQJWGpXbGNc5gdUYqWhcrfRArhzQQfDDbUjPNLyChV45reqryoFcyPtsM4Ah8Vy4raF7Uo3Bi5",
  "key12": "35f8W32pWfHWedW8iZDcRSkCza8PT5AdjhrmCDWfYCdntVxWvVKpjuJ27RTpD2FXTrCzwH8pkdMPfdzAZyNymYg5",
  "key13": "5VMBrhFTB3ghV47YVZQaXJcPWpSMPJLf9VARy5Kbyme4f5dpuhptsgo1bjCnqS5NqC3R16T1Qy3JMxywunVDxs1r",
  "key14": "2PCsQFyvk5MSQXwx4CFJPfHDQ4Td1cvv8cueDUBLagycjHF2KwBiD6YnHQbrDSqmzBCvNyDbtAXWiFQwdTvb46Z6",
  "key15": "KTve5Hnd4YSfx6q2GECEHP6Xd6FnUpL4DUE7DQQKkVFMgsLBx1zoYL2AvN9gai5yVbAQWTxhLCfS6zcmxEm3aoo",
  "key16": "C6BroStKp8BWDKhLToNETQ7TbLaCJFdvKuXBb8zqFCkyYxTTAtiihKEdouACMvRxCmvURhFwfHhnwt6cdn1Z2M9",
  "key17": "5dmcB4tvq84AWuPMo249S3SChzT9nLLgj73DiMcdgEEiuFwztMJcqZ3QUvSYtzu4L7JbMDeU6QewYnTvdh3Q27RX",
  "key18": "5jGT71qGD14nCuDyNFwBWaPUEMFWFXFa9xede6vrLjEMxN1gniA3YopR1vA9gCFQMVXbN5ajy99xBLKyuPWxH6hg",
  "key19": "3PivvYuDoXyQ9SkZXKsUJgambJ6Fsyw2H91SNXqcmX3wk23WnjnXCn7z7y9it1VLaJxVf1DbbWYGV3AfVx3DFyqR",
  "key20": "54zf4y8Lis7TPUaWxDXsgMfsJJAW6DNDgu3vYEqrTAGBD6r7X9cVdRXYRvPcYTYkcnMdLZztPsUmfMwLgTSUUD1n",
  "key21": "4Ef7MeSDURKkYbd3DBozSeZGkTtqn94MtiSixvLW4QH9SiWWecdhhWe2tgyCWVUaeEGUyZUvo7mb3qgWPpDcQmj3",
  "key22": "5VRofbY23HWn4K4RsxWM92AXbv881fau7uVTQxJzNckePUJKMJCX55trFtUjfR6d98jR1bjWFz67BMVCcXmNF7tj",
  "key23": "2iRUjFEaoutcKdNGE9TQe8w3fgSEgRQn6LvtheQHjZ3PZn5rR1XCRgP3Ln61uNp8xdcBNJtwnSviSB1hNyqjGxBN",
  "key24": "3yKSxwCdc5m2S4eXv6h53QzQxPUkCs2nCDTWzP4WAjq3QHUTDjhD4eFRXGrDGFKHm54CmrDwL8XmSNg99fNJxRuu",
  "key25": "5mbhjt8z7DK8Tc5QUuePxU3obU1czZp7964BStozNPaWFrooRDSXNw2RkTUaKGyWxczX48XHvUA8zcCvU8DvkTvZ",
  "key26": "5afXc5cAHyzB7o4YRgMV19YVdWTxAaNMECYg2oXd794AKyESmomFSwtvcF81ZETegUfFHeXuKAFeiBcMidwYREUv",
  "key27": "UBQQWoosPYohDsjRGSY9QATTvWBgVHVxinzPhDT5ZJeLWqg5wrF17oMZ4gJjLYRnkycWx3aZ35FSneZjXr3xyNP",
  "key28": "4LX2knnuV48mquye5Y6nD5hmTqY9u6y1PuF4XGSM7EtqA9oXmdf19pSTAjD6bmmMx2XVw85CNpjFLPvTmRo3dhj5",
  "key29": "4cE8tBbjK8kdKTa3Go4odepfhDBTsi7mfBTSwt1dm8jDZqvfmcJZaXiWf151VX2NCt6edeFJsCekhE1ipTEmzJfK",
  "key30": "2uUP67e6KQMhR2XPodvPhH1TKBGX45X2TPzWrrN6ru5YKUqbpmTjV2Y5gq1t89v1ffSJXwdT1fcMay87jo7FvzJB",
  "key31": "5yhtGPseavum2n6w2zvC8voy7Y6V7hjpntKVhqVdZaTAz7qMdtvqMe1vzRjVzLdvZEBUk6sri34QiTvCCPJ1grRs",
  "key32": "5VazFLbfneWtMPJnrVgK99jcDH24zg26hap1BXL646vwZW7FjrGo8Pu3HXZRstN68uYxk9YpixefVhKFoR5kjvQG",
  "key33": "62ieoJQk24e2Q9j9a8uDwYhFfv1tjucJ3hBEexgAt5xQN1XhWr3XgipRATsMhWGpK8KkmA1i1EdcWxRftDp6CQjH",
  "key34": "pDVR2mbCxHC7cJ3R5nxBVbrF6p5fZBKtfDZmbMuLXxHkbrbEjKE8pkZYGHCzEqAqXZtVML5XCNzB33xT8ztyRyn",
  "key35": "2SWAw3r7DAcHSEZ2Kd69XpSXHWMjgp89notjKtxBRBwXNxtFcxq2sx8trXR6Jsqh7yX4AYLZ9pprMdaRRTnfoa84",
  "key36": "P2sfeEhKUmcae2rUgMQudrhicfsaLda4XzmjoACd81fGwGsWXMWSz4QqjMnik5EaJfGDcAWoKkW14HjG7VT5ZU6",
  "key37": "3KKK8W5YtbyTSPak45t7fCgJrsQ5L3ENHZH7NJsWKCawMzUy7KLsQvoh5ezadWgZc3cneyXFhCrzJvqddJzJF6Dx",
  "key38": "2xQeZaRDGQPqYKDfVtpKj1ioLozudjbsa83L3KtPaATM4GdrZPvT2qw5R4TH6LQNZwMtHNvAQvorGPmi7pSBmsuv",
  "key39": "4HKrP6NyS6R3hAxGJJZk5r6rXvzvqmwd1dzGxLXmSmwL6jjuER1bbJB4qYXmdaV4MijhVHmKZKBKBGoBqtU5SCSx",
  "key40": "4bafbAr2oqKJ4FeAjk9ssmbswBhQcAC5eySfrnBwhrJEoW933t9kVjuiMXksouzbLVqiRHAz4jmkfFESbyw4LJGM",
  "key41": "237TiuBckLtxTeiVqv2o7oLvmmbHf2BqpyywUJQHDM3x6198wZcXyqRK9Pr4RQBej5AUoZscfLk8ywbBojsceFMa",
  "key42": "LZWKbdFJ1G5VfP6pJzHMg9KSJgB7PdPAdh5neC7tMyEHuveW1Lt1qt92iVtxNFnjQmfRHZBJq8SwFerBS2ceGq7",
  "key43": "3J8ntcibNogycsbxbxMoga6Wb5AHRNymWJ6Rh6mCzwdpYzCVmmPjeoLQyGdnXFaGkAFQ7carqjKJuj6ozG6Nfnze"
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
