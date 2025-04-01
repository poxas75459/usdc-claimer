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
    "2kqYEKHAxcw5K9dvaRLonvmzRFqh3w144KM5AqCtr9btXuoyTVxT3TtQ6cPeBChNhoMgSCT22nCAo5evY3Vcmd5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233xHX6hnnFBteGPphbNJVLyWx2j5TLPfmEeGZRHY7iHpc86YBgSDK2eTfFDiqmgcFEn2MkP1ePSh3nFBgVffBjC",
  "key1": "557MQhRhgXHLq6yAG51Uooi3nnLLT1gDeNzYh9Sg6tD1dYz1HV8zuS2Av6U3aW326XMBa2ZsuMzS9KJhN2gCyGmt",
  "key2": "5LtF96e5jxSJAX5HMxPcobAStrsgQwwG6FfFW7zFb5XS8xe8sw83eWmDnGR1A1oG3HPFVxKjXND65g8wD241uFvP",
  "key3": "4DYFzGsGrR1rkq4RC1MdBKmmf9j6YAFX1ReTmNcjSX8DRdvQhRCGEMGpB7VN4PcjS2Pfdzs8T86TL3K1Xqyf73eC",
  "key4": "SHmPAqrYeH7i5UezpMphoj12qf8q2sNwAvPctoxbYZjSSwhfQYhxodpLPGTKesDGUHBezVmshTqMx64iKicoKSg",
  "key5": "2S4qdsLvAfWuuKDmZdjfaJn6xYaw5RxRa6xYKENQT8nEBs9NpVCAbdCnVsa1n2Cw8EN8MAdreEfYqQ2TyFq8G5Xx",
  "key6": "FLo1FfVW1M63okTCdg9m9suFRqRqLRSUeMSXm9MBFMNChSJqa4vsL1vu1Zq2EWRKw98V5QadoA9Qi28ALQWBXdN",
  "key7": "2azGHBeEbkucYTfMrp1Eh77DbQMzq5Y8D1ETaprLmXwgiV6TzSNWdfgxNanZ5muYdNP1J8ztrAJMohmPBaGFbLeY",
  "key8": "66nzpQgyTYYPzNyXP57K7b8cjBqdofuCRSDAHS2UbZzoKHCJ4khNLbe3MZW8xF3uNZVsbzgdm6CZ4exT3CaGQ4Ax",
  "key9": "Vki2rnoSKkXmAyksKCp8R4qLF7JHLHdSsiLwxLn45XpMA19JaasCHtzesswUfzecGhcNzD3cMAcrGffFCbiP6Tq",
  "key10": "5QAk85k6ZSSfTRPB2Zer7S1E9Fn2QPEUHnC61N7pyYqTPx9G3jpB6gavx5io6pUd3GZbmqDwbqQpyZgjtfEPfbeb",
  "key11": "5dq4hkMGrMXjErJE4tGyVXQAY4TUHAqgSTXg9GqVyTVKi64NsAkA6d9sBuzmw5fdBr338izS4TNvPqqpRZmTDH3Z",
  "key12": "51GgFSX77vyT6DjmJU7dB63QYEzjunHftsvBLJQemgNGV7VjNMSdcdCJLgQDw6hxrtWgJbwZc9zGDGDNEjHrzTXi",
  "key13": "5bGbjRE7BNvRhgaHASMSyTGMUPSy1uzkD96XauEFNRA2sCLoYnSKGSSRJ3zqL2zHmmsLqe8fWAjtv9LQMMjoGUY4",
  "key14": "3EWVrYroz7ZhxvJwJeZZicNBZyCHqeSNBrQ3M4YQTFfQ1ojRAuVeuk7hem2GjeneJsEf1wWp2F37XTChbgPbVctj",
  "key15": "4dwZqnvup6jj3NpQEc3e7rP6ikJGn8kayvAxdPP9rGZT8vxtEoTgNyiK1CvaCciBgzmggxNxxG75QGXjU8dnWVfv",
  "key16": "2KMZqkcSTJSw4Ps4grHknyL7DPhamDvEjHT6VDS3j7Bzag5TFtLv3Bi4rL7feCRfdRFkDw6P4JEFxC61MBqW5b7d",
  "key17": "25WYRAVnAvvh4psjbPoc3SVXb3rKbatFno9kY3o8exHtAKp1NdUx3XK8ejprsnRVJpA5zKAhPQ5q2Wuf5gvJzoNM",
  "key18": "3LWAQbget4jiEdAn3Wrz9pGJH5aHGVp54DK6VAKGQPirh8aprS3RHHZvn1LyaC1Z8PuK8Si514gij6oX2x2nSWeD",
  "key19": "2bsYbeu9iwzJ13q6JwvBnpk3Prvt3xmJnwNtVE2GRWHnmcud49Z5ors4CqvZ2hcEx2Z48r71Ey2jfTuVNzbRunJB",
  "key20": "2QUpfzbkQogEbhgReeUospYvR6tAMSezReLyQu7QhmDBm81w4SmCKtETyZNeEVk4PHRg5WASrxWoh75wzk2EAvNN",
  "key21": "4UEnQ6sjXWg1CoKhmC34UanMSGAJiVUyM4tUmmPiimVnWzrRnU18nFe1B3fDzf9k8JE5vZYZh4F4dUCegfTGZMey",
  "key22": "2HQtCqNA5R2gNxUm59vuWMXsa4madaKoc5JTpfmeD4NJS5ob6Znr2DED5Tdd8wH3bcQHCqKvwvqH5YULBo5Dwdfu",
  "key23": "4u59ayEtRiZxcbcqLeP2JBML3RYtMyiKfGQGD5komyYaiqonpNFbvnFQGwLKL6psdHP6u5vFR5TxqpdNi4Fhapp4",
  "key24": "7ZoCM4aZJYHdLn6cCGm47A4z9FR5uazQEErLfkEQLbZVzi7DRMQBnG6tEkaQUwAMNKRiFeSAEyABekxE2DGpZs7",
  "key25": "5yxU5DdvSJxV4gyXXppF1N4EYu4HSbBe5Hmx5CQZmxvbzWtNPjcanCMmUTENbdc2bkRT6qNnwAN5BknMrjLtQFRX",
  "key26": "5MbWyMssJs5eFUDCwygcRSPj85Gy7GozVuyzFPTfevWgcKx9jsgLEBncdpCPUdGqDSFdkUFj3XtKvbNCWjRaEmsc",
  "key27": "k1EYhJCWFZgGM9UU41UUh6Utg5VTXnVdpmMF3Mwdu9jmc5BEqv8A2du4J43bDLDMdXV4qzxysNkikA1mQ59Tm3L",
  "key28": "56MbNgoG5tHi9Bi9dJFBskDoXsMRbMcqEKitvkAiGXN3FqZgMgmNmichqSdBBUH4n2vGLhmUm17WmmLQFXV6YAJi",
  "key29": "5yJP3HHaG7ruVerpgmMyiEzF1qAB9HY8VgSH1zSM9o15bFu8EJRDL7Cz6AP18cNLgLbxV86fa2saNL2bn9UV2Lj1",
  "key30": "2JFmjh49Uk1pz2sCQCwGb9ySotC8pTNgcEFt3wkAFbgzXfGMapSVTBYVer8xsU1UCm1CvG4bMY18UYQMmZUxcLsW",
  "key31": "3UQDbevjDzYpZ2xS1SyNso6w34kJR9ePkzaggFeg7sVVjpRb8j2BPuJV2BZdBaLBYEyrGFtcwwA4xmdKevYWVSTs",
  "key32": "4WpwRrpfxU82pEFRGiuKysbBmawrymUyduRouXQwRNCNtTSPNMHJft5XFxxhFFyjjfVrWQwpDHsbrEkfVtKpofhh",
  "key33": "3qgSvorpXtFrBtL88PoLjwjhiGd8EeCZTpWnQXLADPamCbii8PRB9vtBQQDJFUE9x5gNNfMx7LxiANv333BkFr2P",
  "key34": "5DFGbdUP2SGMfAbBWuMeH7sPqNbZipozA8UZcSAKgfvv72VTqWGSEwigsnPCxSneDxWSr7PqKTN5zjTtVc5Hengz",
  "key35": "2jSPRVwxz5QKDS2qA4UqmZQucpkKtQVfzHCgBaf7zzcC7bYwmP5NKCH5EJwEBxYrHZt41CotUKzGQQNXz3iu6Ad2",
  "key36": "H2FGt4QSGW2QabjyFndVEiu6A1Zt8LqLnftC7ZStxVsraKFoEzqy47EaaCvMe2J9Jgd4omEASa6a4G3nk8p6xmH",
  "key37": "2PJE4X5JSJZiepQCYzbibM4FEkWY3xnovthxxGFHw9rooD3D6CisxX6c4i72i2hmAep5FTrqnszmKMvcGqz8XsLJ",
  "key38": "2NWFY5QrvHcq7qc9KcMczZzgXEGf6Du1Hfq6wzp5sjJ6HXkiKAAv2b7C4cDBzYGUFqbjuwYC6dcjkEnb5zXk7Lpo",
  "key39": "2GLKvPTa9U1JUXEgwSUGm2WArZjBBeqmLUKfP4tWXVXKeJjYNTTGiAW93NNAVta21MDgS3Mfacni1EHrZGVonFCB",
  "key40": "5Rw7mjC84vkeKQf15HpN7Q8bmGVYUqSDVchm11EQGdXUaBr3dKVRB49978G5B7Qgq7oC8kVgDGC1AbpBF9pV9EVN",
  "key41": "3W8Rqn2WY2CF2NRAHBJHVJnQtHkS6nLqBiyGGi1Nn4Jg43Cd1T8zHjmBfxsZo6utyviw7KZAaDfMcKfCPDnhCoeR",
  "key42": "pwpybm4wcuN9YkCdkcp1M1C1VQxXhJXWfbJjowVUbukmNjYobiPjaKeTUWvL24u7ATydx6azaARxHGNAedcV2M4"
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
