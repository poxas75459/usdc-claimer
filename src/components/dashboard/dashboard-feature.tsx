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
    "3fuNCAAUPdQVJSTdGnZJwqeGU7ALzCFe4LJ3NPCaFTWJUqytkQrN9Bq6bk3b4jquNDwTYPQLDomexf8MG7pRMXEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J48iTsv28ucZ1geUEXpTSvnJUmwTHnPtbjW85eUfk2u1ieVx9LBxpA1MjsZTQfSEVKZRFxffSfCdN9oxop79MeV",
  "key1": "53nHVQt9aahhXKohc2s827ULJhBXj2ZpyKD7RW6mEMqaaVCaxKAyanV6YvMg5bsktYsnWm3DSZ4iVsvXzPF3u5db",
  "key2": "4Wu2JhzwMYhEZ7FnGyBohJmhi36bL1b7aRdL8ksFXPYxWAbWFrAoSe41RAFuuND6JNnNsdvpFYSFAsfyZrjHeftv",
  "key3": "5oGYDpF6KMn3JHhcM7XtcAH3CfgQ4dWpKopfvc7qMc3jnaobuzQcf3EAUDiRfoConiZoSSgzRyYZx9tz6moKX4r6",
  "key4": "4Ris7E8fnV1a6wpEtmpHJGPobLT1BKsQ7rhgave3H8zz8Wsn1zCSAEhX7558tKP7CY2PSAbBULwRKdPtVVgQb3LX",
  "key5": "3paG4io4iuFCRSWpLsY8FhG14Lbs6WBVFRQZdeKR9g4sJEAgZAscuKiQ1TWgcqxmzkPyE3aMh3sMwkUAFAYdQSum",
  "key6": "4pT2aXfdA6qcYH7BPaKpTATJkXzieqbokr7BvEcA7VLu3QgQLFSJbRhTX8KYkCJEg8DwtvgSY3kqyTSQkuvNzBBr",
  "key7": "23b4ppuLUrHaPDXkV4ZeeBJCjDQMPaEPwxEK7UmqCB7nvfaUSbeLCwHLuBDdEJdQNxPcg2KwrckhC42tQVXPY1bE",
  "key8": "3d2ZZbbknPJFfGjGBmGWXCQWkWZgLQRY4JdbM4KcgUQA55DLo6aYUtfDnbLmLsZXM13CNYLQC9uN7CRNVaYbLp3v",
  "key9": "4mpPWR2gv9BzV1bbfJTzFb2sXU5TFaE3CapXYzbguWty6eq14aZHCbj8KpYApyEpvSpwEfHh8yKkcQDinFmdk2wJ",
  "key10": "62Ld2wovJDmoC1YXSUrwihwZgrbrNF7vKqzAYsXzfy5e2a6Gq62Pih773w2661zKCBtgVRypwp3Hhmiubj7CF7w5",
  "key11": "4HMEPYap4dnHF9jsP1uDRNUTm1zedBNbwsvDMkVSvLRiTm3wMjhmcVH4mmd6gmjiVyg2YziE6K1jvw7tR76mhugU",
  "key12": "5pLdbfXJ1rK9DDWD3wLwWx6Q4f5YoBPWiqFBfU9r9SHVvsy8MMt6iC4WwVQSmnMXKJxsdunuPGN6XDzDAmzYDTuT",
  "key13": "2nCUNitY6HmKmHKpWNEPzJZ4mDNFtygrmuoN4MSPdLU5xsyCRroqRoiJaPTwPJQBz9i4L4NanhVmky5dzYkCqrdZ",
  "key14": "61kdoTo9gQnpVxgU2SEF6sBm2npf2mXmpL6TqVu3wY5uVBi3EsN5Y1KdUstyqHFyF5jLXtwmKMDcv3ZKcTHGutx4",
  "key15": "3Cz75to2ehSQ7opbksWcHsk6JeJoiiFjcw9sVSgHeuwRFyYAdJNydZRanrDegaqzDH3RtNPtwMmx8oddzzmJv2sk",
  "key16": "4pUc1vAARbKpTDidMAGJoY7QG8hSCBKPH96Qj4bYFt871ptvLmWFJYZhzdaBTjE4Zd7TArE7iPCwZ3Xoem6mGhbG",
  "key17": "4V4Xf3kxFmnAyqiPcjWV3NjknY5wEnpkZ8DZMyDzgAJE8J1tCbPdMt8BHpNSVqNzjvNHxEmVu6abKhF1zMCH6vy5",
  "key18": "5jtNJJwAxPT3gjV6qmZSB82vLPp25Hn3UQLM62ipY7RpjuKW23jFVjJn37s9ooa6CZtQm83sKzKmEHwUVukBp1Bj",
  "key19": "4xkA7UQHkneV86xvK8xkRYSE2JKZyYvNsmhBrZGkAdfc62kwT43psuDrEaqkqsuHb8MdZWiHEXQCtYMeSmbTXfcH",
  "key20": "5hmyRaRsYANDqTzb51h52RBYxArywbNQNnNjpHg2yLWKdwS9Rw5i9ZES1KYY5vCgUqaxheupRux1LXddF6hCwu7S",
  "key21": "4G39UhvfF2p2GwaB3dkKYCgVfHmLcsExjYXq7tn7gqpWMhcyhXqNL2foDp57YiXiuhFfFPhw9FzvvNjvVHJKEmyQ",
  "key22": "3HmK94oicnQPbcXZVkRc3CNvweneKEGiGkusKVyX4uPm1KuyF9jhPVmZ7GXKtDqWN88ENZ9XnQNzjCqozYfc4FPw",
  "key23": "4AW8rEiud8SxKfrroUfJQRS2GDHTiyfXYuNU4u3esJ1RDMs81FcEZeSpcXb5fyLYX6wtSfJmk3N3kNYoFtsyYBoa",
  "key24": "2bWwC1pAUA7RapFUPv2U4MDDGRYMMGBADfBmr9Y3prGzuYojTiJbhe3aUT1HJTx2ia8BAjuCzeRWvf8YpMueatAh",
  "key25": "4ECwAWMjDvL4fwHJjGHgqgrUfDSMumTHrTXisunMJaGph5LHKRwHZEoWgm8DGuuvCC6S9vfpMsUjMY6XpC9ef2ip",
  "key26": "4aDKoPkAnUjs57TC5EvB4HiLaR5BPYmRpeJVycd9cUGRjrYar3vVXFczCagpbeLXNt4BFER3wVp6zu6kkNyXwtkk",
  "key27": "2q25xMxerPb5Txh5QtyJP5tBGzFPGaxDY4Rc8P5CPfpkn8gU3Y2cUt9FYnCi4KMtz2nvmKw7tHZBGWeE2FRvsTz3",
  "key28": "4poVd3u3LExGghyFXCJ2uLhpuyZkhovxxdooGZxGg44KsBotsMXsLJzbdFc7gVy9rEJHroQLLfbTtSQxugnsR7hf",
  "key29": "5PSo3ye43Vb7zwUcS9rRELbuoBAh3G4TBc66MELoKBMHEJJ4YUoX1Kv1Dmj73ceKfeZVLQqGXvfefQssjQKS1qmA",
  "key30": "4qnDv8dpHm62M3MVyNpME3ksRvQaqE1SpVogPh3SqZwCTvWWVY9ZvbgPr1mrQReHEMZLpZBfYnf35CA8KSThAd96",
  "key31": "5xVDdM2fRMryN5nwTWTCxFkxsoBuvaRkHTrsXZFTrCxu1NWFwJJdWaWbwxLQsXDGTFBVXfsCRPQHniC95CEy9hXD",
  "key32": "2v7BRfSdsRwFS1f6mBbpyTifFeZ9ZitCNuRuAPHx7WEiDS1VqVaDXCfEPzdxeJMcvTqn873MnwEhqk9infjtYtj8",
  "key33": "2WTrGPHg28XgrYgtuzKi5bkoDDe9ces2WVdD86mDJMdkZgyTVwp5g9Xy934LXS6cY77Ts58kCvN5saXY9g6K7rMo",
  "key34": "2LUjvif6mSgPkVCHemZLQqzhfnj581LgmrLp6cwa9Awfv9L7mjUmAiC2MLPg6b2KnAZnCYwEpYKPJZWgtK7nat1S",
  "key35": "63rXBa88CN6A38CGzXu7KJbEvcieLGiKbaKTpn8T3J146QpXjiJMp1UShMxcDtANgN5gHGEbVuSKa4Vu2KrLtP8j",
  "key36": "5Ui3EgX4KCGMsiheNM8rRkNLgthcgZpM5fyUrDJGgtR2BgbqWz8ruMDaAaWx5cbXn5GR7A9Afg6ESYswpsB3rVkY",
  "key37": "jw2hwWfDnx5NvHuUoB8SwRSejErbm7h7Tai3AtsmmBjHMWoPzUyXwDZJRtDPqi2EKwXYatJJmC58bGqjpdR3C56"
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
