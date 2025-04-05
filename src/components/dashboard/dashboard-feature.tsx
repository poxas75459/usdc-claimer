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
    "39TLnrBVkLqZNxGHde1uTrCoQVoejP2pZTcoF6W1T25f88X87bH5aKY9qMpcZEKBdgxEm7a3zM81odW8Y132CGqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3imh8SnmBE3B8SgRUNCxkQRjRex8jZyyJd3kG1NszPCbwKzk8QzJPokiVwSBts2tFdw3gma7dSEPiKhYu1k8WQ",
  "key1": "5qAfUqZs23W8SEyeVFfxNsqGqqMmrZTxGvLX6cGMEXYnqTZ5AFU98Xzfz9xrJZphwF16YNtVyTpAL1FE2BdL9h7w",
  "key2": "5j8dtywvUbP2vaQXRp9hs5qbt2DvNKjkfguzkFSD9qQ51fEQ2PYCbSyak4tL3GRuhv5WoWrEHDDPnxq9dco5icRi",
  "key3": "2bidgqiv9kX6NNTziszR4dgKpzca9vjTC9Vbpo2Dx9gvjyU7zt2vdXq4i6nxSDmAoXnVRDVvioKhhzvz99pDPkLi",
  "key4": "2cBEF7aPyQi6x9ypp1mX2pamAtkcjPuXRJ2TBNRzhMZVn4AjrcHhwp1vBtA4hZtdqyyghcq9eiq7ucn9DNyGZ4zD",
  "key5": "624tQj9s1gtKMHAvqMsswcjVLTgKjDtTBE5NdtyE8Mnyz6Sb9w7Nyafg6fTZhF8FRDRGRDXYgcLwVFPAdHM4qgtU",
  "key6": "24eu6yK76nGAsGcLf6bvVznYMM84rjAHYEeF8DgRzDBpz7DJjRyA2hbDAk3NhuZkdgeQJaDyLrWKmrM88ef8STTU",
  "key7": "36TJn3hw2aRbxRZP6Kpr7Jbg55yxj8wsbv39x8kfwB7pLw4upysW3SxEAbYNj5QHSuNJZuaXT87xRXgAcjo4abYa",
  "key8": "5kTHeR5qhbgFGBKYYCzvthHWHgVxaPMyMMWxwUqiTyrL8FnXtvbCcZeVBayxk64TUyj9qB3hcJCx4GNeTyTXprUU",
  "key9": "4MJyhtsVGpRbeFTFYqw3L7RzF7MG1a4J3NWAWgrm3cM87Z4Ci2o675xfhZcCLKCjk2Aj8xn7KSeweU6k3ZmfYPeQ",
  "key10": "24Ediothm3Psshh4FJJFcsgFkTvvBoqnZSZDcSCWXgNUQJpBRRK1ZBYyMqW6awvDdAmwSq4wpd7MDgPcdpRaZYuM",
  "key11": "5PgtEHK9Hp7rghJXZcXN2hMbA7owgYDK3VMgNmqecFgtw8fVDoGNbYYzduhiJ6Hm86RsLUgooHvUgkVcWDUymZhe",
  "key12": "4UZzMAYhgVwK2BKBqQCAHwGmmDbKyW6aXDR68pVFRW8KCx3RZRwSNen5qNDDJpP1rZ93yesNAnekxv9vU6GjEWpJ",
  "key13": "5K1rNiH9QgLe4u4bwT5k8cGbfhPV4JKiDbWCHyf6hxNv65krMeGAB1sM8ZFKY4H8hWiKuVhs5MbZtaiyqBvpUCQF",
  "key14": "2mgswkycZGgzKDL9G82aTPA2AJhkqDZQhZsrahUdDhjNcBkxzBtBiFzDRmdEN9MyqLJ3t4GUDVcVVy1XUgR75YGy",
  "key15": "43my78rDDzmMMYyGFhZ3UhcPZTf1sUzxcqnm327nMpraoYyxWmfw4PeXFD7mwPLwAa68FJL7rrkHrNGWcGe3hGG",
  "key16": "5Apdv3bP5ghtw5LBWQRrxMW15t9SucfuqK5hh6GwQFYLvJtUTnhUUhxH7CjpT7yX67PUaUxvsPsJ7iiLL41WuqpH",
  "key17": "knHpWTbhsCTiAf5g3XJ4M8UCQcV82uMeuyW11u6wxGnuxo5tUdD1ruQTzgrQucZaJpPzAJqxjeT6epamkMsBeEP",
  "key18": "AMP1oJRrhQHK9pVKLPyfbyfkGPczHnRc7ERdS3M93qxc1sFd9VhxDgHmxmeCGWbAYir4tZYBLbsVkbHXqTTsgj7",
  "key19": "51CbRE2HMCVTyqJ6yaieLThrE1TGBzFgqLjXif6wjU13HRAnahfxGwg1DnAHUHjwPrtByS1mPjq8F4kp6N9L52vR",
  "key20": "zAri7LcNap5FtLcskN75T84e4d6cSFz4SBNBNoUDGCUtLGthgk5MJ824Ba3cZdwAwSRqr7ZaciXk1sEAPDbGcmk",
  "key21": "CHWERjzhS9YU7mvfY3HbReRg2W4ZQv3H3x2PocY9MCceHQYuvaGHzmwet65GbY2Vajdbnd3BSR8oZ1dk69Vdsug",
  "key22": "3J4WZRXZka89Uz1pzXpAB767M3T5ZVNF6gD7kC1KjBfPWHLcBFZVyDcu4ukrxe2LyWPEBvKg5dQXWfM7qAUXQ4xj",
  "key23": "3fZBBcCgBu1tbVsprMehVM1YUKH4KGJZbnb11tTXKDxCq1Nm6QiGfa1qW7gaUBbc3QScbvXdCgbUb4JQgVaYi6o1",
  "key24": "343reGcUfnkmiWvSsUax38hgBwkTLvVcDqeikdFi7UGBpxo8qTgoyV7XUSgv51gQADRmiChtUzJPahsG3FzmR6tV",
  "key25": "64ocxNxfNYDfqCG7hryTAx2nw19vfjNB6jqCLR5M6exKhob7w1pUqukLgh6TxqGxF7ujVwR8eAywtBzpTXvDivN4",
  "key26": "2bsh8EPD4jPCbdkLHa1BNwP7hhuCwotswjfiVt39RdxzEQLNz9gzHYtahNzkvL1NCgzDQNv8M1TDrKBLFGmMt4Tn",
  "key27": "3jN73r6R4SwNMh3DufPwovLXxoXWGwhTrYmQjLVUJQ5eoyXZETJMVu8jJZoLUi2XRQZWhuzv9YJkrgw8pQUYbKUE",
  "key28": "3Soy4tqHCigrhK8FYx2i45PD2eseJPZHwNN2aRwVzJzjukVL2FNB3iFptTqLyqQEdEjRjFA7FLSYbS4tfaSwgcwf",
  "key29": "34JzWuVUSsbpfDUWppbX4HCDMNRbPg4iW18kePtHtbZAckbmUcKEajgiCU1DL4uMxHBsJYn4c7xtYFZvSGn8Zcht",
  "key30": "9ZxaJtrm24yHUgbpvdLegr3tPLafLiq5wJDxkAvNqfX3X4dy6ePfbd44eAtBB4KDswuVBKBm9frFbzCV2CdEhZx"
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
