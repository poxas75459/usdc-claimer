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
    "4mehQTJGe7UymuRafzeXvWSvav5KdKaHLgRtyuSkswhsyNW5CQkyUcb8oGuM8vMcvuJyDJt9BSHC2LRoZgfXYr2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXSJL8KYStyAd5WGXQWGp9M6Df8GRihvRck4ugGBck9SiUgCaqqjTnQzusJzbqMXKbcifCGwkUAa1rSGSevoZWX",
  "key1": "3UTNNUmqUnczGN6ZUo1wkNWwCuqQRFVAkLxqeUEjxwkEc9j6bhRS1PMjhgkbM3utPBKnBg8sGRN1zDCWv4ryC6Pe",
  "key2": "31VPnbC4UwmmPiAbnxpzssTdHfEoo3wJWTgkUs7bcmWrhjzteKZrQLaLVtQBpvuEDSMcBP6Dan7rBJHbv8vjsFhR",
  "key3": "iYa6a8TGDm9dH4xWTCqMhuvDYTafvp5dLibyMkUdS5qiAs7uJbCCfD68TKm4MpeKhg7hoK37mbuEQa2px7KgPjE",
  "key4": "5HzQeegh2hhShGwZSByiZrbRsUAAS33WaNeZuaRRxxKY7nQm7Xu6f2qsfogdDLt82xwJXz1ihzHpTyYoF9U8TQoS",
  "key5": "55pYhJApCbCeNxtngDtGoouSJziRD29w6zmQicgwqMrbHkz7J7CGeH97jEsrGgQgT5aGECS4CcMBPu9C8ejNLhsp",
  "key6": "V8WQDtBcUHWLsuwy2gUQXUD1DicVkWHDbVSms3t8haNgTchTynRbzWknatHeLX6y99TDZz4AoDywxetEcUsch9j",
  "key7": "5HgATPFUAiZgLXPsKSrgxpBtwFxJkZ7rCv1zeteF4agECa3jKThAdyzkjb2xzVjzDZAsukPPpBVKWXBrWjd9okBg",
  "key8": "3wEgx5ACKvreAw6EoKnMC9mqM4Q6ZYQ24nDRoSJsD5DzB5A4j62FWuMwC8bDewdCFBK6fKbQwQbTmfb5e6fUkWaw",
  "key9": "5SCo2rDpx61E3ELm3L4Pkd5NmNu2oVFi5wRYEkurpdCMLpxwx96SwPdTszj1esBQMmnQ9PziKyL2Re5waFhfaraG",
  "key10": "2zuDV4H9xUD4SLTj6ehKkLJnrgKWkYXCpgS8nyJfhvPcBv3KkMoDpsmkycyBBmskifLb5vBozgQ3TeioyDX8iD2K",
  "key11": "4yxDu3xk6U3HmwRGdB9tiY3pTfCv3eGbyWXDVVcrqWoB2xbJBkX4hDXdzRr3qeiv6UumrcgEx2Mu3dMJj8e78GJi",
  "key12": "5HJWkmD2kBH4SuBw3BQu4pZ4smAfLTqB4iEURqQUQXQj43GJ7GS18N1gQShfsV8CS2e7JtPTAdstpdtqabBPdwDR",
  "key13": "3EWmag5fKYqph4dFZWSVinxtHvs2MoCt3h51zeJdqzA3jm57g3bsbdAKPe8ARzzaer2Gmz5Mp8TwmLLvrnjpiRR6",
  "key14": "4Jo6LTy8YiEpH2ZKBP8ZzG4qQpmorzQL6RfHkLmTb4cWWLUfztaEMAvxRCQRqtXW49AvnV9dgqRLWxMwxfsVMduS",
  "key15": "2RVDYEXHuGUP59GH33L79WzjwQyPXmC8rFcYj3ZmfbvtAFRWMSjWDUTkBmHKaLnfLAzrABL4y9jdJreyPnB9aaBS",
  "key16": "5bmGZGtDyngCkV1xeFfU2P78oaEqNLw55sYjgvLE28BRgiYxZCe8PH3p1cFg5YtwMEDXymPyESvZHLdVZJ5iwuAB",
  "key17": "RZYDVqGxsV9KB2HmdW8u3bNz8veuKbB7icwLRRQSvqeUThxhb83FZwf1VHwLtbaviED7VmVt9bfvAUKMynH36uB",
  "key18": "4FieuKeYGS11hQNjUQzZRzCqMhRymtAPDz9kKJQykEWWYr4Czrs5eoztE6TMsUoiKohAVj69iozhFLX5yEmmnVdN",
  "key19": "58Y2fjz1kHEY7zjPH78yHr8hb53aRCYPHT6BdKoCTfbERycxFsbGssgfHHtmwkiS2t7RDQcuQPYxyZxFPPGhJrmu",
  "key20": "EQphfCiRdDnPJAU8NJPNAac7ZMp2P8ovoAGmDdYgYGA8kV3HzRpR2WxgcrPhY9xSjQLh8CT45ZavLnxkFTcRYUR",
  "key21": "5zvf9RKCYC3FEnZADQQViK7pfuD89PqM4w2HpHdNrBpy1rjZzVqwLrYskF8mADrdXQiFvsTsR38fcPHCH7EL6fqa",
  "key22": "2JcjytcEwkf7Sik3qAK8eS6WwzaXR7fopFgYVeoQuZFm3kEDP8wSxGqmNBAsEvb2fcxP46YpWTATdBf3fUbUHKW7",
  "key23": "4SAntnnWikhHkevnbQ46RErVJvAHJW2i97GsaDMGtL3FmHMhupvbJxMhhPnwhSjxMBdia98s1mpHbSUWZjPainQk",
  "key24": "4msHHZ74sT6UxqXYRDa9hRbeUQ7dNdJWtnqUNCcj6UUGYWezkcLnoXAeSRYTRyGcAkqaKqpus4FJkpBUfh49doKj",
  "key25": "25r2e7MgYb7GHTqghGszhZYwS916yWvSWBpNQZUXPYZcfVLwZ1fe8untrnKekmr53NYYcbYf59FJNtHNN4XaDwma",
  "key26": "2cGgqMbAYQKNvk5mLTkSd2d2fjy66C3Z2siqf2qLb13ci56NVrRAgk4pEQjFjnEvgCETsqsqCNNSdhURKDv5ALD8",
  "key27": "42Rt9We2De6N3rD4oz2GhUwMpUtmAfQyq4knC5GBuzcpEeCYZ33THYhFxtuYRHkf4dCgR1JNpRLbDy1cP1WgtD5D"
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
