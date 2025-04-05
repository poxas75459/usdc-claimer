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
    "3so6PYYwrvjKSHQRbBz42EyQMRzBa7TWqxoc4YMz6wcAtjvxtnXpb634JWjuZJihJygGJNZdL7HPYH4R2gH9ZouV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fWUJUBwPv69wrZBGtB6mfDRxYgJ7TunfeeWKWFGwZenW1h9urDVm7EL92QKDfbci6vp5W8gc63iQKQUWeZ391f7",
  "key1": "52jM8DTxakNpvEBnT7RfChpvy9Qmjp95F3gHS141h8Cz4obkePqNBwcFtyY14KLosYLLd7RKhjnatCaQXm8BBssF",
  "key2": "uKRCswBLDryk4KdCubcijfN7ZfTXjBpsqmQfe23h4iTBUNPHjmxHrJyvhDSQH8PpTiyxTTEYsiWDS6SJVLB2m2b",
  "key3": "c1GVVjtBXrjhwM4Q8LFCvXZV3TMjoDTbkU6uLXrtZo7hgEkZk5km1jEj5VbUDqaUpyNi8roXj4fgtnocCCVy2xH",
  "key4": "B2vzZw4TDt8PxDXZzp58bnHAQioXEBizAMjVTaW7biYd2NtJQXdEN3CaHPBq48NbMVGDyaXT9sALGXhubgirFRK",
  "key5": "r7vvLJKrXkSAwduXmEhQphxnx5CFE6LKirrmvKr7tda7D4C1d5gi1hFahtFCy5CQfttvmdaZquymQijGfjgjkcU",
  "key6": "4AkFADRAWd2JfzmijE8JA5yM5mA6Mj9f7XuBPhwe55VocUZ48h3y7N8nJXbuJ5mS38o5TbfHFF4fcYK242gEoC3D",
  "key7": "3sAjzr9Bv9mBTHaH7WWNxgnzpGBRori6ciLhJnF5TQW7r4FX1xPDVRf7wfn5hPXi3TX8KPrj4RzNZLenTzrYmWNx",
  "key8": "3X9DjYmDHjphNr89ZLvDwzdEjyP25opzpaXT5cPBBQFNbK6b6Zp93dVLLuaywbPJtAsdp9jgQJFuBWtrhaQWKTa7",
  "key9": "42LaVLL221xYX4chTK7SDaHzda9nF4XbwHrxCsPouxGLURJ8D38NQsuQEDsKh3yeKoy1fDNHtZ4RtY9pwURXzR47",
  "key10": "2AETBLbQhYYRLRr3hNM9deN56abUKYGARN485A86sCfJ3aGdkL9CwYKSpNDfeNQaK99hXE3ev72KGhAN6Tu4UebH",
  "key11": "2uFegSm3MZMNAEcXSYWFepBGkVxKdwPX54URMZ9n7fYVr8PZbgoRRsZqGPDB3h1XAJ1Fb1is2xU7j5swWfq8G1cs",
  "key12": "5GgVGp44KhywGQ6yUCwxA1iMXohzLmw9kPaJaz2jpjaco4WxFn8d31m7pNvor3oJQcswEBxaR2jQVxd1ZwLDsy5n",
  "key13": "vd2Z8rjg1Wa9mFjTbf5QdDE1oy3WjTnCpBPJzfXQ7CZv9rSSmjDv8Q5HzKVD497z7ePpMdYwbB8SV2f89PL3C5F",
  "key14": "Lp4osxNV7orgcrazvUfXWGVJbv8897WyEG6pSPSqJcjbhpo5wmaPQisbakCXkT9ph7dFdjqodLV9oxnhckZVoKy",
  "key15": "29dykiBEfrdg7rE5Zes9WZiA48SacuRc61unduUr39XB1F1xMub13SmWBehsQRUPQMmozT4rLr96Kf4C5SnPBTfP",
  "key16": "3noh2CEc1sLNPUbgzKVH7sQKn9BkbPhzmZvHFMHB5XosaRgAjVqnmLxcmAuze4bzVs6Mf3YUKTVuB7Nhkxrv2pEz",
  "key17": "5PSs9HsMFq8Y7avPHy99XM6HfEnKkkfXxcppAe5tvLn8SNwcG5QiFDontH4iMJxamm7pGTvrnx8E8xedGSp72LHP",
  "key18": "4RJ9VXWeJfU1u5iqaL7Z9VKa25r8TwoiCPfJbhPeur6w4pbaqqNDp3owGRNgjrHNejGNdCMGpRdJzjRnt2RGp3vm",
  "key19": "bk26ATtV7WnYbeKt2sP47hDD24vZKkqYHugZSQ87H8HdDT7SSQ47jdFp1ESGZPgQS7sp4kik2JWGd8h4mMMwSXx",
  "key20": "Pm2cxFRtoHGezdhyKQrCXH6rLevXLLeygYCYLjv38QAF1XqdL97D6zmB3eAHvPmos4zU66tkZkQAg2nrbvGje43",
  "key21": "5gG4fC9xw8TcKsbyNFodVPgEcAZpMwukUeLNjWmmmhRxqzHwgWTwn7TLsNc2MU2ChA1zudZ9bQTs9nZsH7crvZQE",
  "key22": "386xieTFacUJmm7bLGsydVYbUEDaV22XDkYrnDnNT12caMayFdydAKFJDaSTKtAchikRBiEQdLPNyQyL675LnFvr",
  "key23": "3MAiYJjig6JFzwaqdh4xUDA9PCsE5s747praRzXjm2YJzM6sRgCnxDPdPjUeQb5dxa7NsJveq217B4sufjRWjpvD",
  "key24": "5b5vzPCybSr4SW7mdyWXxvv3u8gfEX4NbY9v4Y25i8RZG637zMje4iSe27gKXsoixQcbkEJ2tfmbvjc5P5t3g9Vq",
  "key25": "4NjdX2SEsYshK3czhoo4fxCDRLpjvQAEhkVE78Tt7AfKisww3Rcwqn2qCbUAP78gyaHLMxRZP31MZLcsFLsK1CTK",
  "key26": "3qesnKUXyascuZqqD2oAUWw2BVpTt4ve3CaxmFPrVh8GKuL1euq6V9Sc8VcEGsAHUhRkh7tJ9dRXW2SVjWtk8Xgc",
  "key27": "4Hz1syBNQzmau9W7R8fUtgrP5Rj89iRXvtwQEd4wxHm5L2HjWyQhcWMVuKq3VZEBCuYbaoJshrYgPSWvWehqAef9",
  "key28": "3cz8vHUvYmaof4xDdK4pYr1QEyQeQUCiER4QewomznBr9SnJyYT3VwVjLRXfFEUHTAQxYcBJujJ63FtTU36eAPfk",
  "key29": "4Qt8AiW7tj4N4FRXATY4jAc7Ksu8ZQbMcoxCupsDdFMAXxbwFgJY22wpVdYNHLWdnfgJfvXV8UPQnjqxygXBCrpL",
  "key30": "5bXrPbgpWc8TewBAEbXtVT3ZcD2wbJJm2w5HCw9L534ZdoFHPK6NKYa1XY6GBBXLC9soRUfNAkRdEuMXxCe9utfM",
  "key31": "5rEpLryxP7AvRXST5cE7yugz5KA6SbLvG6161pQW4Nn99vtdpyC4uoRVbVHbR9Q9P29toi4PJSonSvQjnkjHEneJ",
  "key32": "5s9AVtkXgrs8Z86pUU6u4PD97SvQ8XXm1wBK1KnsaVFXuX8Nd6hoKscnmTiSLoMWjWWP2A8WuMUeyu1bBrZtbYvt",
  "key33": "2XvFJMHU3wG3VmHuVa2Rj2Z3zHSxpPTcYECM4xZ5paLh9bEWjoa1a9S1zXtzv5TKzswt6mHdgqoLcTqSv6fw51UJ",
  "key34": "8PPbdDNhSBuLQC2jirWj9ME64hdAt9Efk7aJpvL5FkMqC96Ype9XyVKrVvMyCgvJJnZEr2HCySV4JQk1kXywzuS",
  "key35": "5mAiAeTDNXac7ZX6Kmnxvr5UkYr6iQKHzduNc16ii8XyKMosEGuRtU37EiQiBQf2mAzfeSB6ZXTmHMgAyzYtVRyY",
  "key36": "2CYt1VHLNdZJCHL7k4BjqneZysWBGVHxfLXVPCZjt9YzSUdcv8qfezJYCfpV9mBudxRgzoYEenbKBhDqdvzrvBEa",
  "key37": "2nE1zRNquUxtSKq1TSMyLcxubJg3R2QmiGcfsJ4gDiCZFKEcuDG34ZB6jhErTr2mfwfnhueHU2jefnzwhTPMFcQ",
  "key38": "3YVQsemWnk5KVkBWGNWYX8QhKkzX8qpmLsKjLh5fBPdeWh69x4fSF6soEbu4APCdja3wH7sTgwLEU1QiAJKhDgXJ",
  "key39": "8hpNn4WoAKd6wNrCRncyX7RujNt5N4xEYEMauy2rSq4JqeinkW97Z1KLkzCzcyBPxkEiJC57QV3GmYvq5M3P1vh",
  "key40": "3SaXV5TtvehHHbUuAkziv8eAGnAQBEniGuQAjyEVVGf8qCnHGrGCDvGABFQ2xYhNrVHX7fy5ehwo3Naw8vgKYhtU",
  "key41": "5UosgNdwnWu15skSbf1Ni5KPGgoT7kT8fTcAm6xZr7JzqKS4Vr2FZeLzMExXbWCBUCFZBLMYhursxdmWR2DyXrNQ",
  "key42": "4RHwRuk19JEf1Nr3S6MxxHAVxdV6Z14dmC3aCBX4o3N62KbCi82ueTSMACfWvNxjPRPWvHp85sQFfnJQpU7QPokv",
  "key43": "D7B5fohLcZwHHw1GLaTAPgRhshWgJCmes83WGAn5D9gRJtfa4XbHTaxfD1MBuapfGjG344hfw98rXctAdsZWksK",
  "key44": "5Xt2jkHucdeasAQ5GhPgSp9CruXHU71WEkWgR34tL9GdCSZcyodPVoGksJ6htLEq8rNhCo1b6VHLi51QvNNDHymf"
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
