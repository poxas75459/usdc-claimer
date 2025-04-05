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
    "r5hLM9cpn8zaGC192Zgdudgny4Ly6hh29iYzxgKYUJxBEXL2mZHKSQVya3qMYKJGpj8GtMaDMJsW1qQhqCpncX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ltz6wv8zZmx3T5tF37TKRHLPiZmKigwWDuGd2XwJFYnQ4rajpE5bgyaTXSvAm2ySsTGBJrP997iDBLFp3dB5iwn",
  "key1": "5sNSThoYeN4xeBUNkPEp646xrVJaEpBHtF3ipxRuPgTNVvMgGLdMNBaFPywsJYCHUVJ4oJPmd4MhfaYmwEX4uTSD",
  "key2": "JKRGNQZHzDi4d14VcHohrzhgfQHwoy99mT9wxD4pV1vr9XNhMEuHfnnojPkmFuCHtAMrzizd8HtJnj4nJdQToBh",
  "key3": "49CzQgiXKzVHwEb8eRvZFCoGe8zC7mQt4xfYURUMxPbmF9nJCcQFj1b19Z65u6Mub2FY1oGHB8weCW2tA8qy3Z2m",
  "key4": "4EerwFAfvfY7LUeeAZAmnBkeqAsSyMvammpR5Dntyymfn6EApSJNKhLP9orSdvHrAEm5fHPiPXrcEstgdoWphadB",
  "key5": "5xxe7ojzgC96RXMPATDaD4AvkEYk4LqJA5A6kTMMDseznbYXma6voAwJ8coqvSKXRHc1LAXcRQKmkU1KU3z8qv6a",
  "key6": "5WwCCnkPDdX3ZRzt6uyX5D3t2bBrxDZJQ2Y8j9fRDFW1UYAXLRww5mWhhQS64NPhGuwk34U8FaGcEuxKNKEcjPc1",
  "key7": "5J7qfo9HhMz1xJwyjpWmTvXymSsksEWvzVShS2Wox37stGHtS8QFHVZcz76weHgz1taGpbprHxtHw3S8xprFx695",
  "key8": "5MvVVEMZELsLPWrfNPiomZq6mQYCgSQJnKiMVXv4Pvwms8ZLh9UwMNYT6GboGtDRoeBzPWoukKoa8YXF5xWkoyX2",
  "key9": "4TrZbTbj2QBZzmMzKWVdzqvibMyr99LV9xpWZ4qDC6EqPK5jnHnJ546xWok67PVL25MqkiBK7aUp68a1Jku7KNTy",
  "key10": "35KrAYtvvWK5Z4MHm4mqfCpVxVdNeHecyXivwJrYMSiivDhGojeGovtZhMyhi7qa1JRrHKjwDBu7KKaQNhT98LXY",
  "key11": "22s5zmh6UD3R5J8FpzRE9KuAiJXryE48aFjxrPs7P7yqGieqYGticBc7YCbZfcD2FuTc5N8f8RfpWBao1tptmF2u",
  "key12": "oDKUBdtqVH22ew29ji53c2CfRPEcXnz4P2bzQb6Lkp7FtYe5spKcoodCXt6SBQrWzQD6mZbWdVnJz1fAjmZi4Dx",
  "key13": "5a6LYnMzgCtbW1dbYJssd2jF2upzWiU1TmJY4BV4cAs9BhNQXgJFLj4VAZpnYVdsJVQuFw5iDr47KTwudBd6MNCp",
  "key14": "5Rgah36Gcsern5PNFgHhKb6FAdpuLQyPq2xpwvFkGi4emTFcA4oBpLr4wiEmph9h61TiN1gAuYngt3w6mrbgtLE6",
  "key15": "49qkq9ThehkcHJHZ5ZHMduQb7y1wy4g7XdmHqtrtVkvMSxtHF9VWNz7rGbayB9ZPSN6YH342t63ahYTe2cyBJCoj",
  "key16": "3QQCi5SvtdFHj8DugucsSet55cJv3EvpR6zELtV4skoDhAoAS4ccWHwxifipSZ9L1QmeaFNEfwGkrpGyjuyb9os9",
  "key17": "41LyN8n8LpV1PgaPJmxwGk7XLPGoKjSGbgb9dotQqccbeQNWSFcoJ5NqhejvhVbdDKkZrS8FUomCRoFeRgPtHaPD",
  "key18": "3AeZEtuik2uoSaFAUduk88aGMh3VP1UDcbCxr8RZ6zmbjid7MkPYKeRcKhWhZsHJTCF53sFfMnc8nkDWMmhBMuR2",
  "key19": "3tUgTyniQRCFGDwE2xouDWGATFr6MzFVzXbw8PgpQnHZCHeAyZasXaBZSmSXVtQC7cUVamHMcm5CDP6kYwGjNRZn",
  "key20": "3w2KQgChHu5KEbBMWzubgNefK8dn7hqy3YVeAsr3aH2YpapbQHTpnLgN1ndtFvWUbK3AJYjWZnL2Mm2zTQAcEYvX",
  "key21": "5jfi6raQY6eAzsXWmF1i312QQsAFhDhiQYuNLXujRiazvbigwjUW4pUStPRGf5hjSjAb2eVJSYHuNrVMNp2XPm8B",
  "key22": "26SttcWBPRJKbxXcPgGChgmh4NBUJDQ9dck9u761EKNJsBe9FqKiEsp5yTYbF3kh7Evc99EpVRGoi92teWSKfu2e",
  "key23": "5cbpahFqjBKhxviXorq1jhrN7sWkZ1Pjg9jmq9DeCzPaaX7qtHVfjSGnCEg7vHN55tXYHG1mf33SHCSpzbfh6HZY",
  "key24": "5iA1iEJA2UQSyj9WgUyua5MTeJR1B3c2nSsbV8BrKsmJB5M3TjwgG5Tn8MBAaRpa6GNfZxWhzzXrn5nNWrMEMhJX",
  "key25": "51VWDxfxG82A5hcqAnZVQdG7moCnoxCYJF9mrVPWU4GSau1JLLdm6o5kWKtCCVGso4s1qmUSzS9jDn9ex7o8TH3C",
  "key26": "4pjy2REU74vAwxiZWbNq2tUHDJPuLSDjSHJmjtVZp8JzhWNB1FsFvgE1mmUtx5WMmYDwG3EHSHLxq3xJFGLSFHuk",
  "key27": "28BTB6YiYALmMxdSxnjkcNbofFHbMrGCnhMUXc3MBFfppgjeq4m1gVvnkPg8XTJnQcMa35SPP9GDyFMqfKYWD5Py",
  "key28": "56jY6B4sygzMLww1ncim7t2nVG9nRhrMJWAhCLgz8bnDN8EMC8dGXqdLWDD9c5JiPgAVrFP8oAzvV5okWkED2wvq",
  "key29": "4sGggarYcsS6PyQjFJAddsGtY2KpFNeZaYKZoKAn4AFcbRGPb9QCbswmztfUwAEZoRbLCi7KvxAWzazWovygC4VU",
  "key30": "5cJ7ziNJ2n4fL3yp5C83KLngPb8CC9omHKSfaVTrCRGYAo1ojmLGQsRhvgybEVJBkfNhkYP2Gyd9cfUigYgTA9gY",
  "key31": "5vnFbJviCtFAarJQY1xpVwrZGRCoUT1gjbgYHqB2X5qckKVEEv8GKz6MaVWAjo3xUmQy5yJFCy5nsc11dAEuozGH",
  "key32": "21YGB9iKzBNTAYSSpqg8h2qFAeLT3Gfb5xn9XpC3Cbw5uRSigD8jzvhCHan8b6TxmNe7f578CqFf77kLnUEXQrJr"
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
