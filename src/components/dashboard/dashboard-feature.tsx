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
    "Pv8yDcTbWwYP3WqL7ZveFYku65tM2Lp93tFFCSJ7HebmpJo2wfv74Ay8oNv1R98TGbcBeJXzGBFEc4BGBDKbPt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vsm44Rw4uEUyXVeVMcwuPJGSUuyMzcktAZRQGZrtLgHtBmUCrTnP5MARfC3cQBUbjbY8qmvHWHvZZPHmifvCWzn",
  "key1": "3mQhCAj3Wq9sVWjsNnXQV7SVhyRaMGCvbHRXvGuppgiuNjcNLEUgsBMABf2udBeoKoSAkFQapwsBi1HK6i3GHfz2",
  "key2": "5d66Zj6mtLrH8xtmqb2beeKZfQDe2VvoL1eMycVjFxQoU3B85AcFiMMSqf3zBGym3SPJ5TGzHEUaa2XMcULzZSJf",
  "key3": "2xPNnB1s9VbMtbwLPPxw9azmeedo9FUKj2stYCBg8u2CMbgvU9TVhQA7ko4T4cBoGHrbTN5mijQ2bEayLRYHK3Hf",
  "key4": "VJGgowbd8GGd588gc7Kp6iHJmMweDp87sADwKcvFKvb62GeeMgJEDsVKKYUhUBnCYFdUAX4Vf1Y2NU5oBgPgean",
  "key5": "3mmVLYk27sdCzhgRC8kGUdLME3kNz6NowfdXJvqsXm4HYaVLTffdKLTPHB6UzDch5mDYqLQaycjfLkWEK79DRYJy",
  "key6": "2yCUr5cgdoLLAcg8zDuR8vx58gdZ73Ri6zL8e8TJUf7HiYmZ59aQLvpkr66cAGyPtFtQScJbkbAZpwZryaKHmmaf",
  "key7": "5Uze9ECgi9W23oMW6mYdm8NsLgNc4DypLq4vJiJZpg8Ho8dT4Z269C3oE9VYpkn5QEwmiLTSWJxEko8aifsAD3GX",
  "key8": "2499x8uefoEdq61Pcp5o2EP4pDLVZULmWpoZcYXCpFt6ezYnHyUPPYX1Y14mbDva8LtauNYuravne44PC75sG2c3",
  "key9": "g5PyVqjmArgqgpHubtaGdoDeFEcDkxBRhKYoiKzEPLBr1Vhv5NEECao5Ug3jwN3eMNqnbDrZAofMHLRQEE9PYdz",
  "key10": "2C2dXoEC6BJoXgmW7mmgeTfigKecXxB6xwtSuEWcpC7hJZ423wknAur25TK3TCTy49cvJY5VzEogtU5Wq8mJ1rBm",
  "key11": "4ASVU7PWxEwibScFmfUZuaGtRHLWMSJegydfaenkWhNzyQE24kHpn5Jy7gnFukDtCNBSHBqwPAWViQziEvvjrJK7",
  "key12": "3P553Wk1dGxgV824LBEUbD6sgYDDxHtCpboMpDMqVSN1HGn2PSVdFRAS55gYeU7vKa53xFaqN7AQtSr6TuqHxnhZ",
  "key13": "LokUFKiNPHH34Qm9vRGsEsEAoB73AwaMoo1QhBHjLfex1EFSUstvv6Fa8i5Zm4WVuEtNQLDZgUKmNL8uVkj7i3C",
  "key14": "oUHNF3mvkLuP7TwZxMFhKKrQEv4pJJ3RWbgq8urdPBppbNKgQCLb6d9RJGSzXVmqpt6bybJ7GpQTmnLe7AmgHUY",
  "key15": "3Lc4niWZYAmKVYzzjR2X4HtoDhNdPGKRKVEonnVXCeSYWEqquYDfMrCQfhWQcRbMeGbEYh1tkZH8hEWpnwxgZqrU",
  "key16": "28oGAZ2tXmcBuYQExjnv3KMa2g1tHNWDMbQ9LwLpFcm3ve2SfyyTYPw6m894Q7yRBrPCFWZWikJ5f1FYj6yAkrmj",
  "key17": "3cqkC5uaMUNgajm713x2eRwubu9Y8GpLoEuoy7JiCdEHycd79DSbt1An4E48VoCcWTUhmZAuM8dAmXVdkY9C7aTg",
  "key18": "3QUY3Ptnk86JgxZtounKDa26KZqmb4jmHgHyBv71PPNy7BQ9E8Ssdu1fq1bzXiM6hNFZx3LpCbfxy3VtwzDXTJWr",
  "key19": "5b9CqGkAdmUq2vfwoonrdrCx6EpsefPhzRzqq3tvyxQUVRFE3RfrzVzQcrrnu8wD4VRfhYx5KHpnupWyArWd4JqZ",
  "key20": "4NacSrMhpZkcPYqxAmt1jpzVQngN5tL4LBBZmQTcUiX1G9CLHvB3otzU2uUfKLFS6HZowLX8xsg4sCfZbeFwt4EC",
  "key21": "4zjvpU8Sne6ATYnVkhnKiBJXLPpRUJmh64WfQYmEcn8qr1aXZydyLPVjAgkM2hzWJTqBik1UGHPc8pcFZjx4we6X",
  "key22": "2BaaJvWMzHBw3y6vFX7v5aTy66soSFRHHmRMnpPJTzBG2tBdmkBY6brAkwARSWkE9bAcMQdJRWDkHrzUxJ7sevHb",
  "key23": "guu5cFfCWsbAstj9cu8YjPKUXxwXm9ck1f6tSSSzNps2tomrESZJ27V7ywbmAW1XojRvq6AuqPFdHrxdYtR1DGZ",
  "key24": "4ATkAQrt7sDHGAYS8uL2ZqeukHeMK8N9wCr5BfhVwkFhDCfVzzwWuCPcXpALYKd57pGREes6tYzJ854YGFrPtFha",
  "key25": "2rQTMPZushK49qfYnztJJGJEbNsi3j7mewESvh2cs3JjrKUjsz7BqmygnDsMcpjLxFzDsBCFF64EsoVavX1sS1ph",
  "key26": "BQLzmgBcFtMqpsgC8uQVcp7S9RopMThLCUoZYWuVajMPeCJA3kAaEtNdE4WUyBweb8NMNeGYfWpiXbk1gF3W5LJ",
  "key27": "4wwAAHBJvgzuj64Fw3Zi4q6mMprsxEH1RtwXxRXBtyWQHTtPF96qGjVbc7HLQquQYPPvvGAn3gcGXAea5BXDAFR6",
  "key28": "478j3fbMX2dZaWJ2nKEJ4JiSrKrxfNeM5qUCHVwd6czvmW5XdztVyFEWVto52zVtjAfMvAQV8zk1svHSoCLyFJUX",
  "key29": "Pubx9uS5zT4ft3uGjLgfAYFa8XbThkM36EHyvAaqePz8CmoJ1wzn8kFNsUMwJwUcnrLgokpivtqEn1GPioPVKEX",
  "key30": "56ouscYpyDmn32oHQrZs8HyzTjeCcdpwuW7pBhehJthwEaqDBvE8H3fZycXwxiBKBcYPXmAdQRCBqKZsoWCetFCh",
  "key31": "5Ki8tHipSK9uV7LCM5RRW3ctdJsNmrzj3PJZFBBGQG1jaGHR5TUcV2gJfDRcMWJg5C9hASWkGu4j9dUTpNJRvepx",
  "key32": "2pghWZyN57jzfB3DCujiVXGxnUsYd5TT2Xgco5V5u99WSzNYKXfpwLKSpuxvxpr87G1Kty1zUj8DrKV28cBceYjK",
  "key33": "3x57WwtMgjCtEHY9fRPGGZT7MWjvi6H9dj2QKcy2MhnhTKqtg2VmPM9CwWNibzoSWFqnCrMcJTUnuVCbdBSsx2E4",
  "key34": "3xDMaB73dDvN7MMvS6wK2qrJCACDRbrsA5QABHfYxoLp17oWGhFa7cDVYzhM5j216XbFt5WA6UmAwL1532gsbCmM",
  "key35": "3hvR97tuPP4rmjUWJnK3LFUq3afePWSMQecKSaN388aN886ym915nk9hpPtxF2yVZdxfHw1BgE1ReKgVf8oou9Cx"
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
