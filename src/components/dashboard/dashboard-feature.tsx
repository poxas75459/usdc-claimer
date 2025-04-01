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
    "wJ3gCJDozDZjDduDbUW5eM9atUF2QVRfkcToM22hr5t95PNveNMqJi58YPGzkjAWaYRTTVkwhz5oHf6idYm9nE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Ff1T46FGPfQjapWZ7Q8RfQQj1qqRvMgGfxt81a8KcYrJYQY4qn5hSCjnzQFHKGgNreMmoU7cZ8Z1s3WWkMAuyh",
  "key1": "4R2VPmMY2wa8SQaznPTyAGujwaZYSvf82v9W9R3nzG5Lv48xJaiEdDhNwbCchRA7fzY8RXDTK7MNXikzZ9dgKmtt",
  "key2": "xJC7JNGGPQWJZydNFhdTSK3GK8X2dkkkxB3hX9GPvsbY7JRUo3GpYA5CYJPYfFu8YFH8qaKrgqu2Y1o8JmUFJJL",
  "key3": "hngXVS2X2wtk9CNN9Z4iK15FMPzxLacFPEJViohiyzXyXesCtvh7926pk9SDvhdFZrd1NycoU1EC6MSdWrcPLEe",
  "key4": "gavwc4tJDLViPiUZekwpb2BRUYDQ1tvXDuZRZZWCdet8SAMrnStRw2E959s5St3pBz9h9RiarEp1ynamckvTHRW",
  "key5": "n18EPz4YLAciZK2BcwCD6WXQFEGfFMVuaWU2EAifVoYx27KxnCmriRCy43cVvWCBdBrQPaVP8xvk4iGuYotUwDM",
  "key6": "3M5csT4nnnKXvw7NhoFbSdc3PxH53hZFxTL456Dk43aSJeupHqR4Gx2Jf1H1tAxSrFqTfktR6Q3SH9J1ufyaF1eU",
  "key7": "3rq2RHyVoALNTr4TqDgBEXTHQUd9bnhwauvgQsXs227vDDsxKbsmRxYzK5sR52VSBr7H1dMK31ur1VGFZMZUms3J",
  "key8": "47cXc9xkUXHgLzgXTiCyzXSX6kiC2dkZi4SDyHcpU3AB85FbbCWwg8Cf4db4wimD8zkEYT6HGCzLaGM8YAdTPuCn",
  "key9": "5MsfJDSeMoXS9Uf1iJxm6VJ2GvNSzsQXTQczm5aKHgdFzvJCY5p827UbNoevoN9gTkVPkBEdayTKQpsiZckGJ2Ro",
  "key10": "3kdisk5QtNue2mybFHCtgWdwmJRC1DvmFPKxJK7rWbjACAvQkvFQs8GdPh92UzwWv5isdWqX22kaYyyXVoG4rbSF",
  "key11": "3t9aLNXxt7wAD7sWeuVfPExL2c3j3dPPxJPuaWseTu7JaDGQVeFbW1f1GDERJYYh6wQHXHGwC6H14MFdiydmmWEf",
  "key12": "27VU3vB46NJszLXRcfb2mYxAzkoofbSsHc8ZMkcrFxkuWaACnbN1eXxemc5uxPVxUJbtGsbVFEKsr74Vvhfi9ske",
  "key13": "4BC5rXc9HRwc9HPGJGJbGRyuRCovykagewkjTjbvua6LouEQs86sGmKNj645yxgfvMeU2qgTaFjLtZzhGyDQXvpP",
  "key14": "3tUcTtygRPUZF5ugmfR3z1aH4qBVrkz3DhLy1RQmBVVp8YKddVetZ8LoxjW4g1MHHBt7mjPetP8owXGfchNXvn8D",
  "key15": "4W5ij4Vx1VTp2rHQvLASU67ZRfpxdCwceCyzUQMnr2gwKPsairBzeTLH4EMoviueJuLAzqeFFsLRoMokKeZmk78u",
  "key16": "mhWS9vVvd4q7uGKN7y6N5E8Ysy8m5hVCZuTEhFRxUnMVEtpB9iZVbhNpaEs3TUaJWbBM4xbx2tk4S8MNknKZSFs",
  "key17": "3R731ofg1VPCoufByE5GLdyQUhY63VVUMswZaYZvhC5MfeVEZFxHnjoWhCJWhEHkD3SDx4H1wihAfnP4skRqQFzG",
  "key18": "2nMRh3qrcGRB9uMkV9KvcWNKdr2ZfNCXN6YNWCqbWiVzNugVx1eTjKurq8pjkmbWB1DJvVuZwiSkMtc33q1gbvFC",
  "key19": "5cgC9Ycj7yQoNM9SKeZiN9UXbMr7X7TieVihFiBuzLq82xetknFCr2B8Wka6yb15KvrbYfCXeaePB3PaCGtkBnwN",
  "key20": "5vuhZSYTxLtFFoARyyRwiYvkYX3aa1ys9cbXPaRaCz3LvfCGL341RpXHrtJCmzEHfZmHyiBxdyuBZWYGE8MW5YKQ",
  "key21": "AJjMVuowCUEUKcg7wB2ptJySndGfGMKk996AZvGYLQ38CitFfvt1hsRoi6kax2ZthYsdpoTZqrNmQrXGrYoSneU",
  "key22": "53H5wDsz5nn6eDDaa3t4gXRfi2XTjKEbUE787L7V9gAqqphdkPGQwrDoLw5LSvVh1zt5FaAU2Y1afg6Y9fv8RR91",
  "key23": "LgPSrVZgp29smJe2ELb7Fx3EzQTbAEkdoEoqnMBdHp1EHuq3EJFvctK9d51JHQDDQJYUwLfDtunhRhN9YMtDT3k",
  "key24": "yBbP1RFMhrsVPUHNcwySUqnvx7ceJjcfXSfSbEd3fQZ44yRknsQYKuHiy4zZUddCJLVufPHSST9V8bUs6cZNPys",
  "key25": "3nMwuWBuCxVnMUbADNicitAiExR1mCgESKh28cpC4qWFG75fUVH74PYL1rKsjhvjUZHdPuTbc8R5q7dkb89b12Zg",
  "key26": "3rnpLKd5SJAM21nTi2xENvcDjfz47W2GJRS1xHGcmaR1UhPByLgyJmH3xfj2PoTonscAZ6z74D2oErHXtW5rUd7K",
  "key27": "BVVjU4tqdZuRPcxwU9XeaLXJMcTqyoCehBF6VDET3kw1MJ9swjVNN4XQoPJ6k78JXpjsn548GwCe5Knp5C73JV1",
  "key28": "5GuCs1kzfY3AqYpsGbzGqgqyQQSGSLAkgWiHZJ2TH21wdSTJtUtZpDyd8sJLW38dPNQYHdbsP8PbNk3yyQMPxLfQ",
  "key29": "4piLbLW5Jnv6Wo7nkdE32pgUJtsVDJByyHrSznaWx9n9KxpsakgK5kscX1LQGHb6XaZfHRWacjBq1yfyS6eiheSd",
  "key30": "4exoXa5duHr41ydkgsraBf7zWqrqZk6eCUXfT1dxqpvCUcMTuULf2PX1ZDrmxpmgHaju2Fz2TBQJNbWrT93DVQh6",
  "key31": "4Y3w84CwEsEBfmbU7S5dcpfXiCsLxrACDvBWr3fiNXCWQdtMivt1LyFicbwSscSNou32CLyqQByTBCga4MNjzb5Z",
  "key32": "2EkTkaK4H54Z5LhRLtYPk5cwdTUZypzBm47wPYvtq8BU9PDdn3Wucp7xZmWdqiPKzBT9wViyDxTwUBziNa5paqK",
  "key33": "kzkvuVVXpH7reBogFAtxEeZmLa4XKQsXhapbs8dafrGYzBihwpVUcbguKRzMkHE8nq9Z7ENYtHxYDMhTAcXVWSt",
  "key34": "63rXR3jAMccGnVSHsv2J9go3xDLPiwsJmgWfjKhJrWPVM5RuiGmD1Non2Vf14V9woNrR2sXPdejH8WCwVD2zY5Sg"
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
