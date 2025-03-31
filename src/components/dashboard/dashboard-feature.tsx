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
    "5JcqkRJBB6viNbVCBVFZpVMZ1M4kUkzR2vmmPyzGijCt51U4yk4VfVEJZZ3QpbV9xNoZ37SGaYaHXWPgggRRJTcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQaVJkSHQJeFWfzMSusLX48xS1qni61ze2QPnyMnGHfEue2hzhnLu48ti7vzm3XjxmFQHwqfnj1Nqy5aUhqWdF7",
  "key1": "26bjpbc7TtdUWwRwgZYPaQC9W5dniYCV1N6vRqkTmPbPRccTKV8WAYS7Mjg4RSuszqvzfckG9Z4qh3JWL5ynWCL8",
  "key2": "3vE9fRZE4gRgSWF5gnswRmQXTpVBRrjN9yBDbLQd3vVWJRP85MmpUYdrci3Sq4EE5PHo2gMmxDSch8z2PYmBCKrc",
  "key3": "41tQKLymfc7VVr6TCTwgbjssk4c3ZVGxRHC1WHG27TQUuQH1kqCBBWtpuFscn8qXUbfefHandQmsCwJoGEJW5bue",
  "key4": "5Q5a6BtPd6xH88GWncDwdP2YSDgshJ9q2itA4oSDbxfYqsfV9yirpKW9irz9rVk8kD6n7pxzx8RZEpAj53ZdM4yT",
  "key5": "5MV6orfSafiR9kZKApmRV1b3dwcFFSpdpt1LUB6GR1w5KDdauJ3JXSb9o9b8op3D77c7XMLi6Uh3fnV1jEcsHus8",
  "key6": "nF7gPhZ7KqNYweEHSz2NAtj3pp3BHJgXCArGDDDtpLFfnVXhtdz4rqEaSZjuA6pKoeQjzmy98FMCRP8rvQ6Cpm2",
  "key7": "242koRfXLuBf73oivdxaBsCeS95N7AsiqKEXAVGcd33W3UJw7fmgfpXnXv4LBtDm3pKXjBfqEg6pgjzRfCuBDQdB",
  "key8": "6n7PrmyrEe6iziT4rH2UhQT1cb8JAC7amHy26eKvXc6mVEBiEr8sDMk9CLaDhaA1UDdH9WaMwihxoGJjZnY2Mw5",
  "key9": "2FxHesyrSPWiaD3SPUk3trnZTTKvMGYzHhJcwMEsJdLUTSr4nAkEnW1ceNETZtSpoU6fd5rb2imEGeZSGDQbsRjg",
  "key10": "47FMFi66k2c1SDvknyMxqh6rQaT8AFvufVkb8rMcdoUJmNDFwnz1mcLkJGpHzgwXWeZARN2frfzTxf1iiFXejppV",
  "key11": "3DMjzbneiQCHXM4bY1YwR15VAE6TbzhjAUcyXPWhm56tfA9WXJWAb81uoFEGnMeVJs4NhwUXeERKimA4b38kRzBX",
  "key12": "5pYyvQAid7TthCjznsHv3MswDecUry4cU1LmGUaxCEAb9F64axCzyvmZpp5yjbd6dXiZ2akjfuDsAXv73SbQfTdV",
  "key13": "23VdTWUfP2YkaXAJf4pQmHf3PH3Tq66M1sSffjD4nEHcv8cbbphd6VueH3LTE5hyRzHmuSX99GQf2fSyU3P5BSXZ",
  "key14": "5jh6DWazWWQuQHjPgYRgDcLfJpmLyR9HMe9fRsig3y1EE2s68SC2LoV28GHDh2KeUXEnLjCoCXaHjN6r37TjPVLk",
  "key15": "hSJtpjiMW6v7eZcboWkYi4ZFn3pnLQ6dRGX88GJM33Pj4tQjvNgSi4RkrVtxHxRLWtbDAX5BgodAkR3cV53PKp2",
  "key16": "2EeLUw7FBui4KQDstRMSa3kgsvEDzrXb4gMnZ11RuPhJzi4h9N82E32eYvQA3eheFbTJfMSPxihrA7vp1cwPESE7",
  "key17": "4qrKTc5qvSfgWDQduqnNuifmsSW9bFq6t2YynNTF5mw9xQNQUk1mAN3669vbEUcpHfaeqHRy6JEd4CUaT7LRHmhq",
  "key18": "5yiqrJTppab7oPUTnC4iVD6tqjpKgX9ZhcfDxpfgqzqUJxKaF1MctKC4m292sJugYqXWdiRnGC8FEi1mNzzFcRTg",
  "key19": "AE7cQcXNJdu5t84Sy5z7XnYYnjBhX3UMhNUdm4pErg8xK7VUXVmnBCuJsnQduSSNaAur4KZ82jgRfHCvjhSsbve",
  "key20": "5gbxMuhLTs3Q4shA9SvThgxYZhZPnv9fydr4BcMtvC7xJQxZQj8mKM68pCTPLgTddcFQBWRZYy1hr6gqqxRBSM6j",
  "key21": "3mUTC41bT2C5BueuUpwqQDSD29WRhKaQR5TZ6BHTGkA6v6wEcuBE7x4XKNUZtC29rw6qZRU89T2YDVq4xPvkaVUH",
  "key22": "3Zuk4u3Tbs5kaJR9SfpagUw6QJbkWUbRkVMdHmTPNFhzJAgD5MXqvA64tFVX89LBymcsckyyP1Yz8fzVtvoLjnyb",
  "key23": "USiUieE65681VJL7ZL5fNMb2q3BScrfCVtrgXnK4e5wSm2dSGt6UqNC1QSV52N1pDs5pYLASoZmSxfaQiwRYnF6",
  "key24": "2uya6PXhTz7DB2UTv8d5eJjHXMNqDo5JHLKMcHbnz7LAkTgPSizq64gDaeGZvpA5CmF83kYU75d1VShjkjazcHZK",
  "key25": "61mN7JhC7U95fXyJ1RthXQhj1xVhx3wZ3pH7x6CnE4pZKpCXcyrxA84eexQfdHrx2ruFDtK9fHBc5jZLLQZC4eup",
  "key26": "5wKBQqWXgGmk9YaZSFbUdH63nZNsoXfPWQ6we6ZRj6joXXbTaR2uSBGrtAtD3WyReBwAcUPBBPckwMf6anW7ucbs",
  "key27": "2Z9HiDTG3zx26NfG1jFbXZMaVd9Aw7CkXHjKU4bP4wQmWa2i3EewuapbJWQMw7NTt2vNBXzdL3ig97YkLCDYjhyt",
  "key28": "48bAu6T9kp5Zq9zLyvDa3YAv1D3bWdVDkiJse2JvnV6L926EY55RQVA59rgs6Venobv6sGFLqq9TT9EpDJeJnMfJ",
  "key29": "48PmtdxxDJScykbsttpw4uioXib53Nws93sRZirg2xrLkiS69724d2HP1iwx7KFwS6X1Hmx3kkzyBqy2jgawpKYK",
  "key30": "42WWvexymUpWih1ABru8v6QLd6C54i3zMLs8gc9vFez2jV7F8seUBJyofdRMfciD9UJy44mhqe9G4kbXgHyvefDq",
  "key31": "21PAfHQjUwBPMqu2bi1jA428jcrwexBkDBnwM2RY5AE3ymrpkKKaaSK6ep3TFRV9FN3e1a1UjwWkYtpe5U5GVdf4",
  "key32": "62DZoUJugDVoErjbmTxozLyT1T1oUkAT4SwptmksNhWBUQ8mQ1PwTrEqs8bNgvB8uRLhBn4KzWvhaCgGw3S1xptc",
  "key33": "4nWWVu3T9AysJcmecVhAkuDqtkdejKMGJ3ceYpS86YaxYEUfDyGuhtQ4SSjo8iZGtebMVwftXfkNkbqD9X3wPUNx",
  "key34": "Q27WbbTiiNkzueAKcXrWfHPxbnct5XyaYC2xR7G3EPK6Zis2cNJvrf5X8oCF6K69hEtyyYetvurdgEFrHDQX7HF",
  "key35": "GqtgyPFLkV4PSCTJcYmcdnR6BngEuLWYTFBiFFXArY3Myt3Xd5VeVFGvqfVvCuU5zMg8nv8imGyH9YAjvZ374tJ",
  "key36": "3NZ6axqYgASEVxVKAAE7pm1ZKNmPscBrhsHEzZwcApc821rqxpA9uDt9etuLGcSiNrG92Y3MaF1Ve1Ni6PeR5S8i",
  "key37": "4Cq1wydtjRf1CPXwD6rjVDNUPB1K1zzouVSBvEXzj7kgtnAs2Wd75uJnuk8WH7hFkMqEEuojnFoUK2KG2dJehPG7",
  "key38": "2LyKs3PmN93MmeQ162oZKDop9s9NppbsGkMa7v4fuE4z78v73NZQSrEJHSzF44PKQHTgXCiYzzBGveFwQjBFc9TM",
  "key39": "CfwLMVhPgMU7LL8ydKbSeoHWMkw1G12L3L1oM5qdftV2ovgAG86WTKqs4J6D5K32hXoTnbhKjfrkajyajaR8vww",
  "key40": "24vT5GjGr6PtnkmGvbRz8Jtqd3TQpCwBPn9ywQQj1y5kAtaVGfqdu4oraaDYXw2LL7YryrHpbnNJaRGZ9hdevJA1",
  "key41": "2ZXABF2zQg96WSVsKr1RcjgWCKfzjivBHmGoeX6GPEohTTiddDkwNvnHyeRiDtDLDLpNWpTzsLdqeNCg2hFFkQUd",
  "key42": "5ca6haG2KXDaTJ1X9LmtQNv4pcH63oMDWz79aQVPM86UNkaeXgL1BxkaW91ML8XrQSEKkvi78AgGKKoy7oBGF4oN",
  "key43": "38zbHA8n9AydVwS6qK2S77ANwjeeSSUQRTozdMJPTc1Gtb3jTeBvCis75zq3p46ATVCg3WheAFs2EWTwA3fZgD4S"
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
