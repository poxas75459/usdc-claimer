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
    "4tCVSFGwDm18VLL5DPTLqWGjQazSr947w6Nh1zU9s9MmD4fn5cHKqVjWTwdXkuU2JbyZBXCgJAGRzyc8ZnSLqyt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55BRUZbd6DA3RjBdvpmYsCE8q5Y2WrSgejxE4ArUMQw5wsGnCvi8UnskT26assqoBBoS3B1bz4Nv3a8Ae1jZ8Z5r",
  "key1": "66uAFLi9xfCkaEnH6EQL7GZEia2FCUrMXKnLHWmS3eHwzXoK9hCkvBCiAh51JpbZTEFXeS4P8CANUdPYdTqfDWre",
  "key2": "48RHY4YTWG7SK2odr2CZmbgj1EViTLPqtP8tXFAMrvAuGrBzDUtCnsk6WgJgG4ZdcDy5x1Hmqbb7MeMqe9sSfunm",
  "key3": "64sGJVxn3yqNV5jXZH1aFFkKwSJGwaUb3sxqwDKGkU27Fvr9SJgji1gB663gv9uXBFi6BYPcReGaap3WrFRT46fG",
  "key4": "32cAQjjdAshHsdRhATdGfkCAKsVvXMuwrkdtnjnvipEmM1MkscMNqGk54x9fZe4cf7XDA5GVBr61X81uDGfT6bEE",
  "key5": "34vp4TPgQjncwZo5g8Zm6Go9nXrgqkDV8nvC76F9byKLgJNhNmqM56uB4QErxCRzooyndNcVpmcYtFc1VSUDxymb",
  "key6": "5PHsxyStcnMGWpLGS4RLPsMcDzTSKkLirCqiYb1vhMmAPPjSEDnZRCi1BMbB6cSApqU3jmiyaMyZQKN62dwF4y7Q",
  "key7": "2wtCjfEUqTbYh3HudgccrCqopWLc9buLQauinNgBGvUFoTGepkF22FWgS1iDZRVTEupPzgcpAnVVGb1GSjYtNEBD",
  "key8": "52wY18FmzNtT86mg2stwvCiga3B2G4UvB2Db4iUQCFjQmcSpCbAG8YdsjSCcFiKR8tw3VD6BHXyBxeL3Ft7StsXR",
  "key9": "2WJeAwZjajF6H7BEAcHHcKwC7yRz8Vi4UAwxTDEozLx25mtm1AZRegCxyMCY6zM7ETimrB8WoyN3RjKHpLYxEBUP",
  "key10": "4WCeghh8Wtk2GezB9BaoApv5wMQAo5uChd6js25jBP1ZeEFLy2vCeEfvwJkMPkL5Kk5g8hjdeofpANhqUknk6wUg",
  "key11": "36y7L62xa7fpCNwEYuCmR5DE6WG4NruDhenoGHragJv6HwyN1QcW87t7sT8miGWNWujHMF5D9igGhLT7Uh9SrE3M",
  "key12": "5T9sFHazPeVUHfm3xagvKDQAn3fEV3Nj8TMZb82CXs8oRnEyYJTeP32CKZ3pkzgfqPiTVtrxQDLgQvVT9DcXXPu3",
  "key13": "42rLnhxnpvFgx6Hzuv6EHcWuFSa1qhjCKFos9BMXFeak989B8EC4V3wZgk59Ff45oUM2SKbigueQEMCjYSR8soiZ",
  "key14": "1i6rWcQwdELZ42GNY3qr59LiLTk5NxDwxuH2hftnrhzY99tfeQXX9dzEMaefMWkMKKT4vZvNe7nimwNfwZCdsqZ",
  "key15": "4pwjukfksXXv9S2rk2NLyr9SVAmtPdixF5c7B6w7zvuDWivWzjE2ST8XHfSymvEBCNTQHHZNFUomJFzGSvJ8yQTV",
  "key16": "9oBaYkk9STiSnqgBevu7mRtLFyZ92ZxWSFSRcFs63m7T4SZfAjkdvqnSN8bzou8NuxxA1jawhwzjiMdNt4hc83S",
  "key17": "3BB9ZSne3DWEPiyiYcfRAbKbERGw6wvMK8mhJL5XSe5oSrU2gFndYffpdh1ho7uC8MS9HeDXGyuHAH6u6zBQDVfr",
  "key18": "2hqeLRrS9LwJFr6sTYihZKEgL93LaxrP79SdZL2HwxyULdFbxteWwuwqDZc5V2DNYT3aV5u4kz9Mtxk2jAvGoLU8",
  "key19": "2kP9zY8kU9F2WNoBCHxngvQzuYDLsTmFNCe78VKUpLunLkfo35x9r1yzCo713dkdDaXZ86ZH2ySdxkQriPWxZnUu",
  "key20": "56M369uBSoXWSK6GL7ydke9i3zGJM2p655xLzfHUrtKYwgMCTwFkRNjf5QoaTS1MjZGuQY5aarCHrx2BS6qQjeQd",
  "key21": "7USYAAcKrtzBrKb5RNxgyFx7v6NoTk119QmJMZm3TqxeKEFepyxASxbsGDbEzVn5oCkEUxcczMwjDkMa8UTCCUm",
  "key22": "4Kj8i9TfkKUu538yMXhERPJf76EmmZ7z4YjnPJDRWh1iUR71o25EHUjWcoCzyFys3uVHPpwrDGyFhjn1cxrChqmd",
  "key23": "QsnjNYjnYBHNH3qkvKvn85qvLZJUJZmRkeaHt1w8CdseDb78s6Hg44XzH5MqstTpWT4CjmHuzFMxdAXw2STebAw",
  "key24": "5ohss2e6uetkNf64V4y7JKaWvdQmRKTEs5jzhpXdYyBfogtDkti27dgSrNvMRr1onvCWNePvNmwkMtrTvKWjuDp8",
  "key25": "61Hf518nfbYBRSJXWbnQ7YmPyAQWHzAMC27n5hbsuHcymY3G8VD8donF59UydFsbG1Ypuu91bFc7vPUoSKsw17nE",
  "key26": "3uawRavmdSFS4zteJLKmafgaE14J1Wi9y9LaUpVMAMcBz234DhGirATAp6MaEJ6B6YPW7agSSEaCk5KhCCYekRQg",
  "key27": "3qrzrC3gR1xR5BYwtVTy9cWDxpEo4rdTdHAU9b7zVoexSCk1BsULd3SwiSBcnuWTnybyoV7PNjArME1JdmoKT3mP",
  "key28": "5aCa2RgvF4NPxpSCrMNXhMRCo8D5Sx2MHfcRuWeuaZyDZnZ1un1W7s8LBxVrt8PWxF69RqRmS5PM5UKJjHDZRGuu",
  "key29": "3rpQoPQQAS7399zcGkov5To91muJY7jVafu2AwJhVWiavU5wMvw6m6uPJUJEH7cHxQXquQDfonQppazaGAFRq11j",
  "key30": "38duGcagaNJH5kXdmSgwnLDa18wLB7kPzhpi28zo5mW2nD8KwqrGe9AL8u4bfJLvvthoVPuChfP9joQaUXiZ2XSK",
  "key31": "3fRangqz6BGxsvscTnbttZuRJWXAUje4LQ99o7HbbmYdYMEAV4wMSezeWbtGCk5LwmTgcK3ddjWtFpSzj1sTZ5vf",
  "key32": "ZJatNXMhidCWdRoSXZFPFQ73prjZnDhrfziUkAZw6gqF8fFgoPfbvrcXJZ9GQv3R36iSuPVzjY4X6CKRGHrD1UT"
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
