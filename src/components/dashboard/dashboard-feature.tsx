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
    "46ysMhcp5pkC6UvHrEghFEwP9esk15up8C5KTSKzE2ejiGMvKqQjEybPoiW9kBcMEcFfWTrZa8Ged17WTtA4bgeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qaFS4XPMCN1ZbwjT8MPx6SiDEjjmwX8vPGadPpyRk3u15YbYWvXpnaaenZYSd1rrHXkDtvyMQdyiodRDWS7PB7x",
  "key1": "4oXczuAtRy1NT9v4mNbQpQNjsbi7tHmLjKYib43sR6eu28G3zFy9SY1Ny9c7bWt5kJrN5QK59nrYwi2gbvnjPWhQ",
  "key2": "5kp2jYuuVi27mAAmiW5zAraZhqb6Psj4TLtNmuRZQUSJBoJVkqnzsvB8qsN6Y9yxpsta39oNpUx8w93uMJfwvVih",
  "key3": "5ewcvAJmNoVumLVyrxoyt7W6tNKVJrc4T3gasnctVYrqGey8k9xNnFDxQhWQGeaJ7cZo5saLSkHwvVyZ4Sjjc2Tq",
  "key4": "4VFvgpxmtHG1G9xQQKmwNTmR3h58aSAK1gctJVJJJAUcTFqwHC4RXCgLqiUgijUh33tkrrX9qRAcSTQMSajBjiWS",
  "key5": "kSPX7Tf5Bn7ppQJ3Yau6UmZnVNSJyGAGqJj4HW5HSNGv6XTZDCUckUXADRz7aoaGzN7Ro86NUh9D4wfnXt2Zh7i",
  "key6": "3V56LAfLp7LZLMyvWdyakX3weQHp3enaPptW72jeqdUtr2kaARZ7nTybU49c7qKsrCd9bZHzqH3JnRH4EGiJhRMW",
  "key7": "2iLq9v7VUyXMNEZz9HgnaSknXE6btyTiSV2FcGq3fAdqUFaj6J2tefXr2LVjyUu94t5xKyBLTLD8JrYNcfwswWiT",
  "key8": "zk4pNWuDeprx4GerWK95BirHuqj8V8WVuimA6saSVmKGtKVg2mmoFkEWoayVb2AKYQfh1sPom64QvW2xbRFZNA2",
  "key9": "2UX2ePxwk6bsP8pGzJR3jWAHrrmuaRY9h3f5HUh2poj3awz4XxCsdSVTcgJn6pwZpGHoVgCkSjgoKftcWtEpppDN",
  "key10": "3PyCA5Di77vZhv12Gd22GwUhrqFkSzxRAsy7MJco2yWdEiZFNW1CYB9o483PCWyp85U9DcoyVwzawuUBQ8TT5nai",
  "key11": "4Vy6WxQdnEvXcoiUhkRZutD8aUMzCr5ks5NnjVjaofsG9YNmLCJbvTNmak2vPH9xJh4Xc5CTu83wiyFqEQeY415T",
  "key12": "4rMFRyp2mmAWQbn7gAmPJWHQGz2oUPF4LrfVdMPMcn8x5dbVawQwwXHbt5b7uTVJtgdiyFWhwzaer3dy2ABuuf8K",
  "key13": "2DAoCedjVWHHP3sbAy75wgP52bEpEzZjtGSrB2ErmHnDArFyZM7de3iDSib9uYs1nQyvohQMtWw78Vq42eB9VJnj",
  "key14": "2fJZTUNBrmaymWyrrzStT3mV1X6qrWDATCULBHjQCf3XMVVwsKzoAMsiwqEZ9dJmpp4C2zAkfvLiWCt8dF6B6GfZ",
  "key15": "GxNaddnH87Wo36mqHSDfxfJ7KN5xp719EwFtUaQh87wmgKSWkytSMp2Ru6e4d5oTChPbfQav3snT1zXf46K1Fzd",
  "key16": "5gU2TVkZW8iUyUKkfvj95PxwxhMBRxMVwYCE6P7625X724g7HXyw2PS9WhvVk3SBFPtHZVcCxrKNt7foBs6XZTFA",
  "key17": "5aANHveER9hjh6UxHekDERjAanyzjCAaEdHVEwtngmbjMV8Ncjp1UADHhERExkciFTjGeewTrQoKEZ4Q6VgTufFE",
  "key18": "4mnXLCEunKyEq8A7h4SxVFQvRci4F9TnRf6B3DUt98bNFd1noYNfuiZbTx4EGcJxD3Rj9gAuMSnPG64xa8aN4pQ4",
  "key19": "4mFvqUEpsMMCTToY6ft4zkptxztDxZR62DwUJJ8FGEaEXjo1RraYPWogXceAaxMwg9yZj9upzwcGo1rakNqHi26c",
  "key20": "7VAXR7WUMcVk4pqqfBk7yHZX58v8HyvGaxPvC4eZ25eM1bfAYJKfgyKSh2VffvEnwGX4xvstCRgwTesy29Vhbb7",
  "key21": "4gdrxBwvaGqaLSmizP1gmbzGyFVjKscQoJC52zTJUL2MbWbhMFPxebHGrwCnHXHtp8LzEVpA3aEHcsTJNmDZu6gS",
  "key22": "3jisxeoytHMHQzecDuyzMUFpSveeSnX8gQBWBaWZ3js3pJaQBkkWZM9Y6HThiFo1qdftS6iwKSytHtZDd7rzysXy",
  "key23": "HpEc2agMqoqiQ1vm1wrYAYBsoRTJUKs1TywcwxTwtm85xsmcGfWJqFpWzn3DNY4oJGsN48R2v2VauCcdweJpmBx",
  "key24": "4wVu6LdwgSJSCnyPtBGvR7XGNT4jm4Ubk3fDCgxrZ9rWsiVrM9B4pppNExtivZrWPd1stjLucBjuLJknNRLZ2MMc",
  "key25": "2EACNa9xoqwHf59o9To9hRCmn6dNSPkidEyagxv3WbEuuwh5d7suqKBXJEttFPjGJAcQqDT2d6S2GeTZUf2qy1dw",
  "key26": "2nanjuGjBXVFGqGtfte1z1ViRT4uoiKPw48qeRCx5LjAwjdPeu7BkNVewh4jmJoPy6KHRgpTxFnAFBnpxrbCph9r",
  "key27": "4wCEotBMUCuWsXiQxKdCAEXDACMiNoiu8pwmFv5rkwJLUA95R6wQYUp7PMn4rp8HC8xjQaM5xvbwtPGGKT4aTjmy",
  "key28": "4eYkVxvFPU7ToWFekheCfvK8aUyhLcLwUeV9kZZVfLPhnbozmtubL1VEupk8wDzNZiFqzsE1mz2HCo9saxz9Ts9V",
  "key29": "2JbpQErcnukMoT7qkumBenfSbbxh2ksSxGcne3idacVwSbYMqhb16iGq4PC8m4Ye6zJ5yBpkcVZ4ftN3uGhDZx5p",
  "key30": "4gG5yxjKSiHHicQpbu51R56FDnKr1uEepdqSjY86MsCmeJoeupZphDafPnVGo59LTZSceqjUNKKn4EraUb49ULhB",
  "key31": "PHFNQW7KzxUMjkwfgi4KMaPKLDwDY3JDGad4Lo1fkwGDnif43QhXuKuw8wcXXSb8f5Fvq8UhjRuUexb9MSgFLGG",
  "key32": "8ypt7iAWUqUfKmyRGoW7x37sGrxu41ija1rn2GDLaSVvU68N8wvTFnxq8X1kiGiHahRYUCHYaZhf7EjmVXtrvaq",
  "key33": "5Q9LeT7zqJjp7qKroTXzEL2q27pgJyrCiyvg1gv6YW4jvtLh4H3mSFtQ84rQkwHMRdvQuDgC2V1LCvefJgYLSoPm"
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
