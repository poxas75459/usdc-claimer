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
    "1YQ1HvZAYv5J54ZGyQSJwmBfNuxGbncfftqibD4e8JNsuQrNhtTZ8hb9jEu4mzRWbDB3xpWaQy8H47B7UJfYKXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9V3NLm1RYa9ihFfFS6u7qFqe1t3CRks3J5hNHfkyuaRj7rBFGpcPcnPmZVsEhZnN55aYxxzYKpvcJLfYKmuwu9",
  "key1": "3vrjVHrq5Nexy3XgUMERVtMnzSVbcS8V2enmgW3nfUzVPEvehyGWXnadA3deLo6LoZwqnRZriX7xf5UPLSJyjtmK",
  "key2": "4oMSSnkDy1uT4SqiE4sW2DSv5uqe8cQT5twmcY7tYFEd2zYtauYXDJXcXHHni6UEQXE6c2McXdA16VXEn528rYGj",
  "key3": "5RGQt2FSWdSdJLgtimGioa9LMN4h2LSedQKzTyE1zAXnoqWz3TTLTvADo5MAUFTX7RnySMaDLYoYUTV2RzoEDJ6d",
  "key4": "27mwocmybSMbMnzdRw5UBxycZMArFdspGJpJN5yiDUZCqMYWchni66zW4661txCqzN13nxfkEqj1JUvBLfqa2Twq",
  "key5": "3QrAkVrRBPJyH6g5nt18E95hK7qwaQ1GMqbqJajCfnCMoJtCfSbnPfdjg5sC9LTEGPaphHJHVFQvKAV8iZphK7A2",
  "key6": "2DkSeSneGCQD5g4zjApXQeVDxvp1Bihek6XmSsQw6v8c9mQnRtydCYiR4rW1p2TLHKHDXZXR1RXCtoXUe15Tv3V2",
  "key7": "oJtT6abqyo3Uew7YtKhh4wd2p59PkJquKjb2HTMRxHa9zjrqQNQbBpQFw2F2eeSpG1HYD9TjTFfdLvYhGHdqBb4",
  "key8": "2pJ3VK22MMJubqeyVZ4Fk5wgGE24cnosXpdkgauCMRhWTJEwN7kg21KLvMxY16gfrPsmhtntC32f2jn152y63ges",
  "key9": "3fCfPAmki6K4aEyhZxWmCh4pjdkbPmS4jY2KYEusxLWi6S9n7hKcmnkaQqqa266zcBee5iF2gCeGvfECtSgvSMmo",
  "key10": "7y2nhXbhbyArMAzbDoRZ573A8y554T37ZwEPJBAoSb3ZLrAmFkb66stHsyCL3A1jGLdh5G3AuJKeq73ZmCAQ1rH",
  "key11": "2Si3LVHNkVHY2GiaLqx7wQ6opeycCXnM8GXUU9NgFuZthBTqTZbSdbKo3UpLzK3tJTyCHGY1qyB54AKYZWzJtRbY",
  "key12": "46ut2RikexKcrs79PUfenxNEbHFnraNQNBJ4WFQxLd18cBwrKqts1jQ6NLNyMLbU16nmvQUZBv2VY7N3Z2FcgdMe",
  "key13": "3hSVsvGFitDjoKBShZ7VDbgo4rSzZn26jHC6vWAP1iEXD44Pvw8mHaGZrr1DdM8Z6xQz3hzVdwfQEsz6oceKxWEY",
  "key14": "2g8CgmHAGxuLeCqTzXRw6C1WSzu1sttynuru69qhwXFKVPwGwzMRP87XvTaSn565y2N9MzjhJuRWCZ84Af36YpU7",
  "key15": "45Eova4TXrMxacz24VBWmYmo5YEK82FTxPUnfJbhUqJPro758P1xhyBxZo47rqx6QCaWkYDZRcwnp1vv9L1Ctbki",
  "key16": "4HSfDWeNiLnc1hvPLNF43hYYXjnmwyVTXf4bSRrEHzyC1rqpBCdJypReC7QYBar4RpQVu8Kf2PvwMvjQXFdxuUFE",
  "key17": "3n2Edvbu1YnUWPrUVHsPArZf3ikJ88tUTzraFFAkv4iFYVeQh1FQi85QvnbwRVXYDHn2aa8r7v7jr6QViHYZaWuR",
  "key18": "2EksafmaDHQw7y29Q1qDhnTpms9zzyjkQ3xxbr1nuY6EUCJGHdUJ63BJSGGDYJwTXZJGyX3vrrqz51uh2g9yjiMf",
  "key19": "3q7UBFsANEguXEGustntH2J7ebDVR18gC2DqYK6gHmKooFwYJRXn1qSUhEr8CPZTQFXUxmoQ54CgBhYsAPA1LtU8",
  "key20": "4ii1uwEinnz2FyLoyo1kQ7gfab22aYxG4zaFFWLQDVYAkBBnUWFe8oJiE7LZVeWNjLcApBRVEGWP4CCGtWczJuZg",
  "key21": "34quPPknpxswqSkoqoRTUy4FPGUQXJBLeEuK5KwHR3NbLPcJ4vNct3f7tQ26yFTHWEh66HFZ7cBewguwuc4uu8R3",
  "key22": "5qPeBDBVeyeUXD4UjyZUCJqDSptyNVgWXixwRC3WxZyGPVbstMHJktvDSXUPwviaJdqHfXth2rEFyAEdmZeHxFGH",
  "key23": "3fCuT6i6De82DqJhSoNPemnApASzHUiifyj3L8J9N67k6JhE1H8VcfEo8xAo3dcjCATg62mcPfPA9Vj5ER65TvK7",
  "key24": "4UJeqJRiqmjpU5mMvQB6G6cMXN1gogkJmWyf7vjZJSLfmZnzrdbuuRmgSbxuzgnUDtpbd1sGCuMuBQmSc44xWkWE",
  "key25": "4ETtqjcMKkrztRqUDUNpLjiZG3hwQPastpzFKZRJ9iQ7oBSLvtDqfjG5X67s6A2KddfFgkhhgmzCVUKKYx3YQLZP",
  "key26": "34aHwbiN2rwZ3mnybPsZh5KWLCPWbLG8qw1Q4jQMEM9DY8pDtYNnb4rETB99gHqMhadKVwqLDB2jTAvdb4GxJxCu",
  "key27": "4L8XzSWwGmhARLGoL9NBNkNcUCVeBnFwz71sVJYUxtYG9KNMxdmFHx5EtsfZpVfrF9BByrPo2bPnTftbjJFPrYn4",
  "key28": "5uGXdvik56zN6qhK1wuNKgnnmBaSTLJLoRdqHF1kdkVT3ayoPqwTVoZ9o22YNfW6ey1vxQvdEQNiP4ahJgHkLufu",
  "key29": "5JNfEkanZFbeLWXLbUgQWY7sK15KSjyrB2B2NDdGeveGHmQxLtsT8LSxq6hMscWSPA75ck7fAHyGZoHQnC5d3oKK",
  "key30": "51bMDHKYQ5unadYCMytFGhfdV9EfbEf8BkFzcTK7AqJkTkB2aox5ckgAj3RwgZ37sVv8RG6P5kmiA2tBeVEZcCEf",
  "key31": "VmcVwi59nZLCRLy8TAhcD1fK2MteWjwWP6LTkg6Aw4FektowvfromHr9LfYQRKFPG9CWmYdPiBwUACrXDGGFtED",
  "key32": "2RchLhFEi8i1CCNPBTvaqi7Z5G2fY6pRBZsyKVVkkDu9cERXL6CK4Gr4KY8fVZb3n3yh2REjWBNbHQBNQCe5Pscg",
  "key33": "5uBg72xo2R31LKfT9oNFyZfAcTMG3YJEPf4y51MRAZKJccDoVxjPia2qLujHEnhhtYcZ2d1defyzEecHphJs4BRp",
  "key34": "5E2dR9SK6KLGCEB7CX7ReyVfMNbpq8Ti11pqDaK22UQwRTsEuMU2mgpYm9a4eWMH4xmqbgDHg8SNM4qiEgMKmAVg",
  "key35": "2JCcaPSAXMXcpyS9JL3X2E9BmTiPk6DeptXE5oLgnMkY4b3i2ZZMP9PiJdT9vUKQuSoXECpBhTreB4NvvWLMwmEx",
  "key36": "7gsDEtFyWq7hZaQUACNJJHabvDQqErAafFwsNEJ833xckwmxU3FeYS9e6qrW4dGTPT4qfiptUrzMH2zA3Uqy9D9",
  "key37": "5s61kU9cyC81FdChuGYKkqTDJXhKKtQHQNJJCU8hatDxazzFKXK4wS3RV6H2yxPQj2F7xfu1CToPCK9LXbrWoCfN",
  "key38": "5rxCyZu9QJ1cfk9ZqicmRLFzejoi2d4ETCWzEiJZjWT32bteteyaSnhJc1rhn6EyFrp8U6yVXf2mmLbaafGUYfHi",
  "key39": "2PSJo9dxBZhg2u1xFwj4KPq8i7CrUK8SGbdmVXGuwdnBziJkasPXQBjW64Tq7gh21bqwubv6gZuWZoHA1pc6HdFm",
  "key40": "5czYhZDy34kCnuvfAyQw7H5D8peDAP7jE9p4goid68L6dWF4cRB3aPKcEY9wKGDpXNp5YGmXTmAPv9L93z4NpDuR",
  "key41": "2HGQF1XJaekEyke3ZMVc7B4Gju15SPiGNCNJgZ1PNgKwUzaCpKykNatXP1vY37Rq4qzAV1KDYWrH6utLG3nhZTgq",
  "key42": "2mwQUrxsLNTywhfghuBkTWCC5hjXDeRXSCJD2fvhYSYk9VynmX3yTwNjboh33fei8HKMHbnaM3RNUZtfzZhvxZX",
  "key43": "3PSLR7VkMeBp7gSH7Qg7Ma7mwCvUYmskA2YSGAjyEjDcCeDMpu3VLX8x4YgPcbdyra4EXWD3BzhYbE9drMJcSXiq",
  "key44": "4vMv1tbDbvFo138X57MfP8Yfuccph3pa2RsE9anZe1kJkj3cpcVdosQs58BxyYF4jYic9QoiWzuX4mVG6U4XLg1d",
  "key45": "3oc27poRakgBzw6Uu3eoyaTJLwi8h6MHbigzA4mUyXs5W5nzhGAbSm45Fo8YS9L9QEeVNsjQjF9aaLcPJBtNMY33"
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
