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
    "3JKXxh9B6aKSiJi3E93smEmfioz2HFaqPcgpNgArPfuyi5w7pv8t4eHuw1FGhjWTAGRDVbFjkcATaPT98yRKt5ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XTZrPWgVmgJRXdTci8pjjJgBDbQUrpsa896Tb3mQfZGABXuR8RiccRKdAvc5swCHPyP6XkjXgsLcu1juzLk1onc",
  "key1": "w97Z9bxaykSvNUQz16jFt37twDFxYYnZbuLQAYrCHw9a7k62xuWEwiZBqiZnVUm5P7xNbwTzEu92kqbKA5dBKtf",
  "key2": "59m1i9H1vGqhTLKcREKqukNy2SXkWbD5mcUkCm5KLa92XNfWzcr3wYKeTbcKcG4xGCKpVdynyrcR5rzna3N8JLog",
  "key3": "44isT32YaPmoFKJ3Pdq8bdcucF87T1e3xsFzXEciBxfsUmkjj7gpBnGkCUiofHUc4bBay6vz6Ztpb4xoqvvqs4A2",
  "key4": "3pyXTXeSaWSWhnJxoAvimED96j9oay9TP26TmdHeyUkNFetgdj19usfki2fX5VNMaHoRiUKHjr5vkzGMJPsaTMeD",
  "key5": "4HpvLXPwK899yskxXf5cr15FgQQWi1pb6PyZn7k5zG48M88ZyabJMTdeywDddV5kWy5KvzinbJ7Zyy7kCqJ4syUX",
  "key6": "34VjDNwtkNJkitkJfrSamA83hkmgc36gCHcpooePmFw2MTWEa7wGHqrBkEY4Q9ohtPjK13M1ELU3tRh5NUhptrM1",
  "key7": "2xMbvHbJvaZxEXZhpaedjFhXE3yozUsGUcUawehRKUd5zLhtggwvGDGkBF3512H7bBYyrSsbKU6AvjbmDgJ6fMeJ",
  "key8": "5CYy5Ka2XoaGYyR3BMggj7XZDwWU2joucVtzPWGaUdgpW6E9skGwKrVfmzghZdgZYCgn4hphbw3wjFAyyFU8ga53",
  "key9": "yHkafHSeDwoW5Y61CGsgTdY8KPxLAR2p6AGAVahknGFusPBow3WfNB7wGGoDRvZwcKX9vdvsVRy9tS3bH8ohd3z",
  "key10": "7FiTHbQXqXwzBggSV2DLWVuEpiXr5GE8WejrXm68GnrvBQ3GPsCGangEJEBmmT6Xe3Cs9RfetxMmVifwsba5sxM",
  "key11": "6197skgYktp6gpPNap6Va7GzTqTbCE5VTmLxzkKQ7gk3scfPSk8ergXn4op4vNVbwmhnZSQMya8wjEDj8wzASfZd",
  "key12": "2zp3JenV3pqxVarPWQN9RnVfJdLTrUTpZgAMGzzDvZ69j3fjd4qbHfHPaGLsvfFp9Q56mFNSJDpS1rVCjzrjkKz2",
  "key13": "3q2HutTxoTeFgHHgbSdfvJ2ugm9ho4nw48Y8NBGMuGasymFtEM7ajWni9aYYoredeCqzeg3qTtM2jVLZ58hbgz7b",
  "key14": "3KmuQd5k22cxSMAuJW7DjYiTBT84JAcM1ed1icQEaQfjYhPgxWydvAaqfQXjy7ceGHL6r4TsCPiY9xWS1DBrFbha",
  "key15": "3bwgUsbhkkpoDz1AcuY2vxraZBDnchLG8nMtJ8ZS7c2YjDeuHbCB7GqxDUAG8vC3HgBAHpXyj9PseKmX7UuFezXC",
  "key16": "3Zz6oh1npEAVzUycCU5iuoW8hiyqt4rAS3BJvEMmViZAFUYEusnva6U5TKKCYQ58Cr8VVxgo2ss2YNmYJAKBx1DW",
  "key17": "3CWQpZTzuReRKkyV1bgMrZzwY6QXMCf1viaUNA525RS49WxxQpUZvBkbQNYtRcCWXGj2r11Akds7w1gSp4GgVSWv",
  "key18": "2PwcWUCuh55jjxosP6aUUxGRWc6s5C9XEUdqnoKkcArbJVbGL6cy959XqccU5ZzNiPxhdT4zoTPTKLrJSCwmxBUA",
  "key19": "23Auk2FfJBzuyk54ww8H7ovuYvspbNsmJPyAgw4iActFcGs38R1foN4Ei7ojcsCxkkfvFwqWEHGCSJ5LpUNEwgcA",
  "key20": "3RPazNqwnKEH1xLqvUmsjUGsFSfe2CcN3P3cdwgLZ98DgiV7Tw4Dp8MWQa8N5Zp6gSZrm7VHPu8T9eyGwj3pRUMg",
  "key21": "4LgGqzTMMc4i2WFL2bmXunWLSLuyfFHX2Aq9dmJgJ6HZHttrDHQ46Ldc4ysvMbkywNSZCmsVUUJ5CeMA4tfh8btQ",
  "key22": "59GKwknNcv5ywYohezVMVuHUscLZYzAoixeMeAFJv86t4Y6TdR98TFpGFPsCHcLZzAsWWFJsosSCppS4hqcRQF8r",
  "key23": "4THs3RhDor6LRBqwvspauszD5oBwKBZXzVY685rKBBTCnbBWhcdGxj3Jx52Jq9ebL8B1weu5thDfzuCfGtmUwppZ",
  "key24": "2Pm1U7ZZz1QJjQ8rmr2v1TkGA32FBB1jRTfxWrYBdnbPKUM1rq9kB7uDssY96JptiHjUtH8RKwrNhNbSA5Rx6JeP",
  "key25": "YAq2k3GfkVHJmu4cEmgcDN1uTRiB8uqgsGKJ4cSWZdztxQThiefpWwbPJkC1vbSjiVuYYH8iu79HkQ4Ms1JAj3L",
  "key26": "62ijC3SvejyRkJgA74LrhMWoHvWuByuybpA5aCoweNyGBJv4GLS9fF4ZwWs4WwZmbDpmXMATWWtxMmS19JuAhQ87",
  "key27": "2C9FVuuXd2HkgPkHK6fHExNvT1LsNeJEA68igMre1yb8bjkZrNec4UURfqHqen7L2cmwELFmNkpyCAvgu7pRuaen",
  "key28": "2FXKSLaD9z5YwV7PLMAHF91E31usouHfydAaPUj265dwGkaXwQvxfGUTS17AWEqLQ4RYxy7ZPME3Q41fgpM1YrWu",
  "key29": "28dBx9c3FDYxx9v3uxxXuNUEKUiEUMrnSF6gNtwrThpBaT8QfXG7Tp87N9EQqQ8TAW6HcA83kfhsSoi571h3h7Gw",
  "key30": "2BnXryFUZrkywinNDJWMdiqRac3p6UTQyABaZsPFkauhhFjYZU9zJn9QKbn1wKU2areEZPYTw7WWBhDpE2Xx8ryi",
  "key31": "peUTvHT4RucDUTf11ovBdtD2HKfw6sbv1hUqjCXp9bKKLh7V14QR5AWucvgfqbyyEWX2XGcrexmv5zeYX7ikikR",
  "key32": "3KxY87adxvwe2Wu8Nf54ZgmrTMLHwr2w1GnU1bDsLvjM33C6sNgFAGb6Juktos2ti1z3j8kWe1V6ryXTpXrc5SZA",
  "key33": "3A94A8CmsnborC4fTbnTKMhvzanoJGGjv3XMLdUztgWZyHaLWfC4cfifoSa5hxuTanUFg2iw5K4dNQUkzkQNs2zV",
  "key34": "2B5LGJdgmCUFKFuWLNq1bzUetkQfVvhGuVEPHcTRApfLP9Jmh1imkQtwTUT8fUbLuZbYHUogLDwnce3Ls3wC1J4C",
  "key35": "HswSyhiEjjevV6jAPxzqtajvkGY3mah8frFMfnvbLHZpnc8PH9BmeSTJMVkr4pCPjEH17fv8SH8Svh4HH7CVt2B",
  "key36": "4UumSsRq5p8EhdUmhJP9jD7TC5gtrjvN3T8gEzRYAdpQwuyR9S2fknpw7QAzQh9jBSuxRu34SNB6pXB1qzYUoP11",
  "key37": "4K2xEfobKsVZyJn2n8bQwJyh2ZiVd2Vgz7a2uNLxGq5Ngw9qTDd5a5Eph8SXksZN1ymu4Q82pTVRUcsJQEHtC663",
  "key38": "3YHkFTu9XZAhez2trFFy6aJtN9s6ZMRm2zgfb1PPdZczpLbBA61kBrQ7RhaYXu6u42iy2ta9NWSDSJkfUcp8rYNu",
  "key39": "3KenodMCaqyyjzPdSqwWU7z148do2QZYPdpmLc7YWg4ruXyBfbnJUEFJgRjRd5igVYrHFaE17vw6edmbgqiSYmBi",
  "key40": "kaz7VufUmE4NfxQAZhSHNt7VtHE9dcuWxUmNyhm4yCF1Uq6nNA4XWFWqHP7mtAFHHAiTAdVveaXNWyzZj5qi6CQ",
  "key41": "35ePf8mMHU4JzTKgrjYAFdahMz9XfaNXN6xYKJ5ZUB39cvW3mrQUTvwtmaMvnwsKM4ah7RwKbtBg6ihers3yjtaD"
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
