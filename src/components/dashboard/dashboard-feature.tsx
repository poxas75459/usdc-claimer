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
    "dLSVRHUir6jPaYkPazKHWyro7kn8HjHQ7rruNXsXwy4tCybGrnTwcrsgUQvcwBwhv3zAg7quBy5VmFnM7CZEHoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cidPhATBoE3v4Kz9xjHKSbfrWMKJUxG91JEeZWzQG7E1rUGXRGn7K1GFQ6YXf1DGTFFFUHQogLUtQTePKZ99Pbg",
  "key1": "35pNteeZsAXyKKVLHBAakZF5jfASDqiC1N34wDcreWq6GTvPt4SZ2X6ChDGhRST9WqwnmFKC2JsFFVpTTXyyNnbD",
  "key2": "nBdzA5wDGTGXbG7KpjEbmkYFky7FjLqHVNUT9eAi7s3LoFkBddgocH8o4xa2Bpe3VQhbF93jjsiTNKkdmZwNkEK",
  "key3": "guEJ1tQRUM4YnkFn1KVRNWqtnmmzmb1L4hSuVQJHQg2tC59ruvVGL3AteKWfA2tES9saemoqmkDyHrhax4dvKcx",
  "key4": "4jj6x7Rn4ZYbSp5PfxFzUGGyJQNKjVGJeYkqHtiwZxeVRCxs5esDdsQAS3xoN5BJtsB5oGHiFpezVUWEZ8382WFG",
  "key5": "4DuVDCZUQYVZzUMEa2u5VXf8yAP6y3my4K1zyzQuLMVMXLDj1kUuu9pvDry9JbJB8sCqBaW6gu6DAUQUq7uzwMac",
  "key6": "2BHaZG7TQCd6hFfgxS5pwY1mqCbRtTTiZwvHCDFaiHomd5YnWyYYmDq1mRMxzaRSPxZStX9936PVyQ56UjxRpUAD",
  "key7": "5aVLGuPTLCxbeqAbuUWM5PEvDvASxpQ6t5azRym4zUJhAA8pLN6qGenMqreF2NxPMJ418SiAJhfUPprrkPB9tUHd",
  "key8": "4e1YLrka4kxRodaJaoJUJL4D4ekgLAbLRw25tnZJnb78mWieyVbPaYKreRRFdJNWY5692jBbZswi1V5Y57MiTGfG",
  "key9": "3RxSHajv8EUBvzu1ceLhjdLXdkCB88csH7XA1pxrkzWZnfCbftMKdaowFVzAzGFLGtBAkbLaCU91LHoHbgzih1io",
  "key10": "4qt4KAhb39sxnbwoShPbeicmBFsrWKzDhZcQoaGRSc7xsTQTyV8aJrikjLWA6NrGr3d8jPEboKbuzq5Z2CgDpaov",
  "key11": "5C3wJHmSvHdHyTBhASxfU6sTi76ZuDFQCP6DL7jPS3F19kaYhVeGfP6PQmsn3ZHQbMjLrKxyAdRguhDY14m4DFsb",
  "key12": "3SQtTKQrzdacVU3wBSVuKnmXQpmTYCJ4GbvjMrKLGCZPdQmJtMAmheWq8pYMn4p1p7ZUi4BJjB6B7kR1nSpduztJ",
  "key13": "4CgSxNTswvUZ7RJhEZMNSJwyCYCQKaYiTapYS99QoYwB7xs5FL8dqopkQ48ptu4hGyNwkoPGDkW7cHR3z1t5rGne",
  "key14": "22m9jb6WBNWuCw3eANAipnnVMW1VBtHci7MeXFHJZzzNB5toUN3fS5oXJ22YQWBsJfAhhsrH2rY4vaW64PcAFUvE",
  "key15": "61VYXF1gQnYrtzMXiqkRV3nmF8QAuhi4KCBYjyMD9aD32KNEbDubvCYJigF9iVmf9KMfkeiGoALXz82YCVY2nHHX",
  "key16": "3298pNqaqqrWikVGfxNfwB2CcYD98QTAm9cZxtsSkhgzebZARjpJrL8JuW5b8TjwUrLjfxtP38DBBrWmwZTCsAqe",
  "key17": "5KajsaRxCC4jKuSfHEv5MjxgYd7ZJbbBLnCFFMgQ46iF6eazaUmwRwASYLEwkZTZBbhY6TpydkUTQLg9wJYwbe1n",
  "key18": "5PVswvaSgs8urN7ujeoy3FJ5yq35Q3s5cErPejjaDH5Ydf4jpwkS6ZtUYThuEBn1VvYucvSnMsaVTHAV6GsiwhJZ",
  "key19": "4FndDUkBh73xNUHRjHYfEG2cnMt6vDLNsio6hJZ9BHk9Nct6EWhFjuBRPTG3D3gLZ569KkXh83aQ4xLPdfjnEUzh",
  "key20": "3XTBLje5VqAm4aNAtggh7KgnpGyU52XvUL4ePRyfpzdjsfbYmEbaSt1YVtC5L3MwNfpDLidKswuWLaoxxVcwA4Yg",
  "key21": "DHja9G5oSrdWXmnBW2aV6nz8MnAqPSrLW5WtW4uAZby4B79XU3GPXWKxSmyxPXZUoqh35MXZAz7HYmNqP4euYPy",
  "key22": "2qxcsLzchSAGuEVWNTwVJhuae6RXjh2YzVmhvhqmByfxQPkSvrnRizP41iVYnwkYzzo7ZGq1F95hH3W9bUp8UcfH",
  "key23": "Uif3asNmmGUP1CijXHJmEZkr8zchrf2vEF2Vbzc5vZuR8VPpJC1snAr1DrM1wHKEddnQ8X8Wu4XVaxzkxPixgSZ",
  "key24": "5GjtytSdMCaFWQFF1uRgqgKunG3R4EXbjpacEd4n6ztoo8pxEhSsBQP1dCQaRMuCRsQ8RCfYxfK4TTMm9nyfayXV",
  "key25": "KYAcH5XpPFwJSmbLuzQziEJMVv7Mms2g3NSuoxFEW3q997mory9RxHbysRYcdXJox4AT2hSdPn99foV6umcySsY",
  "key26": "4gLPBiPsfa7QVU7eswkH2LHpCDk5eT285uZeTArc3gHZmXCDARFXtQtaocfH8fi7fGwC2VZnYFCdPvgciTD4ifFH",
  "key27": "3eN3HYa8VZrQz9qXQmC3fKw6mgP7WEovyz5qfi4RsYjud9wn1sXUGtf9zNycZactFEpz64UshsEVRUzqBDqehGkM",
  "key28": "5FoR8LQ9VaTGSzB41TEUvJLUr244yLoVWpi1ksofu7aCQauavC1ZC4A7Nk6DvhMdUNBSw5Lqbhix1mgVczGvF1HH",
  "key29": "2roNpkkME1GuGX8wQgNmGyiXjjqfAfLmCbUjKpXd8LA2FM31up9Fr7opV9hE1LE7sXwnq4HtcWjDG5BJBQKMnFeK",
  "key30": "4cALMYkdMKA9oLBUHxnL5gru1xUYxbNNhAXqmKEmRNgXEazMemqqhjF4ZSns9kxEGT6eqnFN1Gh5ejPFpQ9oVGHu",
  "key31": "58PAao9hcdcvSLkTvpMktHPrBYYrz19fJRBNhe8oiyoY3JfeMvT6xe9X2pgqUNSjTfyqmC7noC5G41V8vtDpwEpw",
  "key32": "46xb8jbdJaNGMXLV8FQCMFNp7eTXnBtreJbBWRuXBWwqwq9ZXTeqtt5WribMYoFMpHdMNBCioXou4RyMCH1yPAED"
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
