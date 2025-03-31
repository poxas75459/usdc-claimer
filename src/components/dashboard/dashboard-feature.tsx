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
    "41tXRfzK2s5QGgskkjiPwzy57URk4vCHZuuMjiKgVQrNvcQkrG5v52JMbYWuu6Ww2UaRbew956HmrWqC9qSiqPim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dAUnrEHntweyrbB4NXoax6jQ5XHyggdt4yr8vAEo6VyvPTwG3scFxze2hMAsJq3bmwUYL3bSc95GniaSV9GqMiB",
  "key1": "2rd7VVE6mHopun2Ph9jVxDMVjwuSCbZxpbfMsRb9J9V32avgscEH4CTSyqUQn42RvHPxAUifyMqEiG35ATiw9rb1",
  "key2": "3czuUqhpN6vgD66Eck7PQfUmGTeqDbkye7w8QCWXQqRV644Jhs2KJs7rNmpkXWLA42RfH5BHRcEYgeP5LvoaDur9",
  "key3": "3YdzME67T3KHh4RppFaVEutQ9HHA2e6gzpPin8kg7M9QDhnRasyJEgnxV9wbQj4W5peQGexY2gyW842yAaEsKRNj",
  "key4": "2VMbcTFAWnDM4J185VMHK2ZxyM5AWeo7j8UCXN9o2D43m1UkCR5NEuv8ZFFZCUh3iGrd5JPjLFRaRkmz3gBeCHcL",
  "key5": "5ocoCksjrYqxWXd6Rm2QWKsKpNkMsgPdnYqi7ZfhT8fEU5xtBvv7auKnEctVs7HKt9wtRxrDovr5f6jpNAp6MnoF",
  "key6": "5AnmM72xjkZ7UCJyZpopDxZbLr6ujb8BLXqCXyPftwdUp4fQzBxzipa5NezKEHonSHVyVpVbdbxorHPtUUFWmH4E",
  "key7": "bwDBmimzdboKM4kBku5jUJf2pQ6VxFyRU3VFhikt9t6qca1srjRqpKn6qF27CbjgV2phSEHUETae8czL3DJk7kp",
  "key8": "2776xF19WpSQPKqXLTFHF32oPb6LbC1jBtG7H8vPWPFQRUCadg1vLLgjwj3TfRX64rKT6MropfRSjN1D4aQ2C4Z4",
  "key9": "3XKfoCqmxVQtLNmyLiEtDf6AiviUFhuGHhC9crdjEgSn8tiwaTpdkbxNjTPqSRdKo6wB9cQo9AXamWf9gno29T5t",
  "key10": "3K9MoBrN9S6BcXEhpPirFfwJaXLDdXccpBs2foRRjQ82bqskEAzwmdW2PZMvEuFGCPfv32aMKC4itkDmeiaCayhb",
  "key11": "5Ly47JrZGrkGiEbMGqynwW6tbMfdarSvfqoDTo658QeQSm3SScz4GUiY3aw13rxNGiwAoM4Car2f6HaVivoTWfTh",
  "key12": "32QR2Ef3FCmKsxfFbdhbWrX3Cu98fRTvMLJVAKVFPT3KkbSJnMT6ze9yocx8QduYRGZiiMKUuST6HK36SLTuaqqz",
  "key13": "4rKQvCuGHoJTXchXKXpFGGSRQtqQQs7QUTzBQ3j9tSrqVpmHhciDNKj7UKuHkXUtFwfLjTwYAjAJ91jpM1WqRc3G",
  "key14": "2jxcKLy5rJSTbZQcQDkLJmMQYjE4AumoHydiKaEkLdj5nHMHEwR5Biv1RB2SsDtE7U8s139jSAih7jGT2x7ZgsNy",
  "key15": "2oEK3HbUQPdVBWXVxm9SavJeWLywdMcf8AyvQ8ftwSEfazTiJz4Bhw1BWt8YHn5WBdV8tXerE5LnJBPv59ynLCPi",
  "key16": "3QM4noeWrEDd5X8Xy8mkwSHbFACbDuWMEpuuYSXSF2giJYhvvJtfCeQFG5foy1TCDPVBVqsiiUoM4J1J1AREcKPW",
  "key17": "ZV3BmCHTQ5FkKeuQ2jcPkK1XRbMPcAm2t33xoVdue1ZDpmP627UuGFzEBLbkn23j5SkxroYUT6ozwdVR4b1BWW6",
  "key18": "2wLHyvcMZTNy2aT8CZoq3WeYihXsB4FjX6bo6E8evMGmYFa957qVsskXtV1XayrZcu7WXGQ2P2KRQ8tYqvkFjSpY",
  "key19": "3Gu4VhzmL6uKS2U3qDkN444d5Rzx31isQsNi6ThynqqLLqLVu9ysG4svw4JTffEC1u1vQ7q2wKdxL1XA8F84jc6B",
  "key20": "hfLAf38CKDhENCyy9FSrtNiKeENRezWpTvax6we4Gt1BtZVA7dXvH3XCZV1jAWiTCtJeA3tG7JpNAp1fhPTiRMd",
  "key21": "C2yR62eisWd2213tzEZRjtCHDN6LbM3FC7gFAwxWSEutj6TWtKgwMiZL2KSaK3ZK9cbdKcWWp1MJLHAm4sJfWgN",
  "key22": "2eTdfiTppAMTjwYwvoHY84urdQoYp4JZD933zHVFxf51rgbC3mXXvp1qmadTD694wZ59zt61Xbm56YsvUzhEktTs",
  "key23": "5L6CAzo83UsDP5ZD7GBsemnbJurGG3CwoxHbSzNwZYD5de2AR4VUwfA1b29meyVcUA1TqmQfgaCxN8cwKjAi8AUr",
  "key24": "3eXggiZmxuDHFtGnNw63MwDdjqAafnKxQKEMLXZdoPCFCeYiThCUzFhFDmZLqfvRt1ogeV4S8TZHG7oRoQKz9geo",
  "key25": "Tcfp9Pf8hz2GbyPnPgA6VrtwR41XY9Cz5cBg2t5i11Mu53tmkAQrj6pfLYqwpXe8JoVm68pDhdg95BeaLrEjX1o",
  "key26": "3pSCMYGz8sbBYotaBfG66YuMmsdpSDNuLcQ8gPrFfXUshMCi6AYtjUZ6Dh6nMt6uJMkz1R8itwRkJ6jqxP8w8L31",
  "key27": "2sZK12A9xVYfXPAwaXGHUGWiQqxagqkcKDFti8QPJMhWc28bwSNWYquA4wXw76oRjiQvqpuEFHhiKhV62xSozjPC",
  "key28": "5FL9bKSycUXjN2156mreRztxNnC3KcPugpsbP1PVNSuMmrYY7vZvcoV5qydU3r7ww5FEXMqmb4Tsr29cER3yaVnj",
  "key29": "4jS2zvvBJ11m1YPtJB2AVDu86kGgt87F9SgrVxx2aL3hoxX5KpMoMsq6WeMPL2Jr1XsmxZ8DZ2MidSCoHgJfvZg8",
  "key30": "4CajrKxp1Km48w7HxEhn3aNWY2Yty3pBwxpnP6aD3wanYnff8uz4KDxEB9G9SdjbugNb4Nui7Rf48FLGfwZMnXsQ"
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
