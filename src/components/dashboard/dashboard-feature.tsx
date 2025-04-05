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
    "5QTie92gttS4ofow9pMwEsuqQaLtUW6utMgezzZ6t4ihFF8QhH7kNSokdBAfEJ2FQjuDfxCK18xWtrfWaS3ndiPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8Pmgy4Mrr7hirwEb55T7tVHG2ZK2PvrqupboJNBta3CpQXy5dRUfVY2isFqH6Lg7318ZJbRFDAaeadvy7XmjPe",
  "key1": "3LXpFK1LZ23HGBv1rpZkjDSzXuWHi9yn6hRyMHRiuJqSriic8UULMbsp4bSwiakeM6TDSwBJm2AYzMUTDbHSeLVY",
  "key2": "2M71R11m8A3SKeBpDpuQD63dugxQPN6qa6eWJh8VaGDk2FMjxbagTD8dSa6mRdhE2mrpXMKrhrgUbQYuj5mxcEi7",
  "key3": "6LcNDuJ2xiJCUm6fHoh3QQQqcmqCJussthZYxVefPpAufjTnu6nwSjzYnMCHxdg3jqo1iHrLgek31VHQVzFN4Fr",
  "key4": "2GSd2hP8ouERtmfMQhQzDoGAXXYXUwxk8rhs9ATM2i1xXJrif5m8D7tafgo67rf3t3G4Cb6r5h1XXUhENhbLnmEu",
  "key5": "48sJAqN88MftSbhNLrcG4B5sz4tgEFW4xddEkaDpFWex8WU7gFDEGpBCekNgLsxvLX2hc98j7T2PKtb3wXF4h9tF",
  "key6": "5vszBMCAGcJhjc6rWhAVar9VpZSgS7d8B7L96SpAJnfapJ7GFRSxC6VNXXSMeCYyvgyMsgFiyqkZrosnDietohqN",
  "key7": "5zhKjEf1hLA3xTz8XpR9cGVM2jeCp9RMKMCD9yWu3FWELpxYEqS7LRKG1JGGdggx5PKG7bGT6XpZA2UaJyFDRbVW",
  "key8": "AWXUZ4tCtn6pfE1HrUJpn8MGkanVjmuG1jQ1vkkTVnHiaj89gjNyW6bPP1Gfpn3W1nUnnGeot1uMaL4cvFw8zcS",
  "key9": "2Hq822a7BPgJqH4Zfix7hegPuUsMskzezHneKtAC6GEyh1P3YFrqCzbAUYNhk9GB594CuA5dKRd8tT3tFJymqTU8",
  "key10": "DN2tZzHf2RPtoVrWobHVZPQQ2quzaz2qiLu467FzS1vFmUKhRHZqbY7sM1ynYdTpTgZV7MKejeEAV6rn9WjJUFf",
  "key11": "3atwbmWHwNpDtdF4xFX3DmMw3rXjvF8nCPDAZhFXXNqMEBToD1i8ng4bUggh4eeTQXj7U4ZikbbWeDvJcGpb9UYS",
  "key12": "24VqebN4eX7PVQgFMcQ5cX5TSY9uAAAsnRTqNreEY9ojrPVq4F5JfFfW4hfqreVvcwWhLKyM7X8Ubj7RYQx8CzTh",
  "key13": "5qnBLaMcw9zDuoFy8MsGW8nGSusW8maEY8JH4XpnM9ZpeU4qMFfabfwoWndb67v8HCc9NPAtzj88NzJJYZKFrLvk",
  "key14": "4XejZtGSnDkG5jaPdwjEDRF5hUy9E94SuRW8pJ2YHFCYUWdtgkdwQaECdJvFC2z9tuZimmC7ckLnMiXSmNJT4Q4U",
  "key15": "5euxMZAxRNSTDdoqes7vADa7434SEeSJhzok4R6FUhxBuonCHahZxoqk4LfCV917x8D9ktDCxQQGCeL3bGWDbzQn",
  "key16": "3fxy4DdstcKxwYPphWrz5LoWFkunzsMeqqukniB9GtCXdbS3AHCQzst1yGSyoLWPSP1jaEs76r98TaUv2vnWFx6F",
  "key17": "4P7RJf999HSzJAaeLSesM5dxcauBTRt38KUCvEV4BrrLz1Kfkigv2wDAfcBiM7YF9XXUGoZmQU1ncCoiy4inTEAq",
  "key18": "znpen31BKzutyeXj39LcTm8kotHKt3qBs8aj5FMUMXeAExmtp1iw1m9DeeaaXd3hALfvJn1QDG9acxsAKk1YQz5",
  "key19": "27MTgH3MxT2W8QXuoMNEZoCLh13L7KFpsXJ2N7GRSr9qEZcZfCuMDtwo19gUNCFxbWkw8Wgz851onxrdLsD4vWVe",
  "key20": "28mbHVe3aNipM3xK6jBFMLk6hgkqVJUq3AN8F81gPmhioePNQ6u8v6PxBfjjU6hJsym8qQ9VK49zbrvtgAWEye8e",
  "key21": "DtoxmN6jWgxiW5mNe4QYiqRggwqTBPFAUFzGNMMMZNyXz3o3ux7frG3FRw7CCxycJgeMP3tCcC2EwaYCgm6BNfP",
  "key22": "42sNefE6sq942ysMGxnwRCRSENLLZ2PCmKunwshHRdpq6WZzuEAmE68GaM7ctyBki8xjNTQVemy4WuL69QNX9X31",
  "key23": "4LJ8KYJha1hoPKFA69tbjYrPYeNcf4RknqYRrHZxkwRUVvzXxbjDc3uXCFA6oav6mecYbJhJcbXKSLBjndi2Uyce",
  "key24": "LYJhU753wLjwzAL5GYad8ePwC81AT19QLLrMCAKSj8Ug89rHK4qgqGhiFddVM8KEacwuqcoMytqgzYtez6H6GNT",
  "key25": "2QzHSYwcc3V3sGJgtQteMGYYARHodwt4BhrhCMBSrNGUWnQTdQgq94wstX7CvR4j1t577jCWrtZQBcy66T7vN9TY",
  "key26": "2cbLgjifmw9D2DUM1onPCcy8zSFd3xxL9RHXobMQ1G3W3suMa4pKuWm8ERKyGzkmDCFSDFU5jKETyKBxZWKQgR2N",
  "key27": "2GqURGAhDd5usMGNHSVn78wuCZffBczWymQHS3Je1H7RmB7BVRnJbp8Uxt78cmtStKk5XXLr7KZt6Amovv74YM4r",
  "key28": "XXy8o64kSyHHhLctoVzENFqoL6AJEeANdV8wLKBhKFgh6ZrC1Bb4Y4rBbLhjdDNXXTDuvGZ7voVjCPDTjjioiSi",
  "key29": "5ATzwWgm8JvQA9MYdWg1m5h9KfrV2yXTajJzyWJEjRkhegQdBLqHi76aiW9mVuqA7juwnYMK1hBPXUNojFNSqyAd",
  "key30": "g8n1J4SYqdAKSHChQAy4E4y3SX7MCstF85FQ45rnWQREV4gwUS3EVmSFSfbJdcpK8mATn2SVjWSaxKeqhHQHSdV",
  "key31": "4oDZ3KMMpx8yD7iiByfu1utudJy84UcUDLR6ncPTx8bt7mgXKUfYHs8buqYPGq8UF8g91inKCeC972g5BU9gufaN",
  "key32": "4qHEUmXAnEvPkGCKDVCRNAUUnctGgwA3RF8UgjYPwrwsu2MfXBeaUKod9mGEP2RTybsNHGZ4P65WYYDfSz3eowW5",
  "key33": "4bVwd5je6zHj1PQTCaqv1bYg2fiXGymKRupxqdF4fzCnAecdR3ibPh7qtMqEjMPrzU5RECoZHahGSCYdpnJzuaoW",
  "key34": "5G3yJD6nUknKNZvwgEZJdDJzboh1TPMdoofwNLCbU3H3dA2cExwVGGXPgoNT6vENX34MFrXGYGAhkYLdt2irgfwi",
  "key35": "3znk7J1pEz6PzDX3V6sZU29ZYiYUbsyyVG1snZG7jJYCc8Mtaq2N4pytZDmLbLHYEcRr2cBV8AW6uBwzNcEC1DMv",
  "key36": "2bvn4qjPE9NJZHdskauxQeRG8G6jCys3DDRsZJMXcH29mUjHTu2mJ76GvFGkkzXTNk71EtkFExCdg6J6W181R2f4",
  "key37": "4UkX1fjdvMm7319pwivRhTN2Aqe8eVRyZPv56pHdB4qSHP2r7ZQfYu69BK5vdEhAXH9j4oMebNebBH1jQa9cNLTU",
  "key38": "2sJkceRPpjFsMKmHtzPiCgAQbdwSrGKaz4JUMc5T29pFz3eDR5DQuFjwM6XjhViDA9ffTELz6MJpvbys9JocvEX4",
  "key39": "3mfi3C3RBpsvthUMiS5hFR9eVf8er87QgKVVnFicyiNr9ovrrYN6fUFbeXAzvUtYFRPeePpXkno5AECYg2bsV3QL",
  "key40": "3SRH2G548b25B2PHBJDNPZMWTifwE3R4j3yoZugviousAJY9CeJmMMSdeLgNL3kQByst87P7k5xPATD4h2jzZKjZ"
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
