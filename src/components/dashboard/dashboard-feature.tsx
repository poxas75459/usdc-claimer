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
    "3DRniTiNmwN3V5NYjvKBTZFPTi7paNYQep36XPAYe5iw6v6AecWXwoKtwRNzR2dfPhuddULRewcGTM2ha1WzFeo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aoF6XFczEer8bKBf9t43HNmTMXbZbabpNDxzUSVpU3TPQbJsHTTXQs4CvKDH8DrCbmpSyDLXZTWAFyZVxHsSgpG",
  "key1": "3WYgCjaG2Yyvbq6W2QTVJMTo6BuSmHuMB8WDYF2BsmVnfA6Q1SVPnXPB5ayKhSQGLayzFnjEcBgBGpYfCtN7VziH",
  "key2": "WfTZhPzt3oLYHM3BLk52h9w3Dm7xvrtgGRfHP64nPmjYtjJuwSnx9FRMtinpTTMXKMix7huowF5VAxQ9Uak8EVV",
  "key3": "4uksffmDSeN4GhTKkhANfhr8bjMuWmf76svmfGZJFXDWwTs7uP99Uhcx9BCvXFfi7M4c5rwfXffrJf8vMcVLyPU",
  "key4": "5qoP1giiL5R85maPxR9PzivoZUNk84aEAq5wuA3MuJpDCPHt7k1Zvtc2DxJmLbNFaMzudv2xkh9TBmr3X766xgPZ",
  "key5": "2n1aq6mWGDx5UeY6rgdPTiGmDGVLat1nN3sth94QWf5frGWEezmUEiTkWRyYYfLwhPnTJGLvBBv21RiXToEFrvPe",
  "key6": "53YdTf7oRn9RbwyMHfk9zVEiyFSu6h9m44EpG6J488KRPhv5Q7wZjAKpFb4gDBhjd1RJ9X1mDdCNe1omTWUzv2Q",
  "key7": "3PvvqsbJZzpSHRFkfi8X2191NumuDkjzUHqUcs6D9eSnf5i6nwQnFJEswBsXVZysutu8RLm5u6ddx3SWwEBP2fYi",
  "key8": "6R8N5CiQUq1t6RmBtuPUCJ42mYTF8PC1SdfMezkxyuyf3Bxy7ZLSpuLfjVEQAjekdNC7gGTyAxca7XKCiN7Tngu",
  "key9": "4GdFwvEcAK39GcXeucjLYPRChrrxHWsf7wdwD3VuEz3dFSndSR4g9SFvsAs261R73eGuJGB9LDi5PM5KakEv1N2y",
  "key10": "4isvY3LERDYrEKo9jDVsg4UZMr6X5n7X8SrnLCWVHeo2BhxhNPGdQJYBuUVocX39fzt4aDoBrcNo7oTJcxsXjNjZ",
  "key11": "3eWvMn8EtRVT8Gosmtki3YchSo9eaFc9CJBkk2G5ooZi4LXsx8xg1MMdpz3cZEPoo6ri5T7JPhS74bdgEadG9Yad",
  "key12": "5QLmAAAzt8GpQB21uqnMnVYMxM5ZBshLJfqFADmv2v6bypAWTc7vEcpVQdPLgaRSiMPLCNNFN3JoorAjMz1ttGNg",
  "key13": "Z8vbfGhLzCKT12NPvLcrNW1XPxo55CrjwkcAioeJ9czPdaiw1dBmt1c115NC9nR2JZvEWsguwr6hoCzadMxwrDY",
  "key14": "2kZKhNXcYzGM52VwuGFosjhYSUHrnkbFoLrXfjBK2XNwNVK7Fv84d7J4zuBZRDCd4Ny87NteBjgBZDCvCimDMNZs",
  "key15": "5NcYqzzkuUDzWiQ9GTSU8ifWqQKWFvPyo65oy2Z2grW53moMWbe5Cjv3tXLtR69ZFwmH6cR515EBZ2rFvn8PRykR",
  "key16": "5Ms75sqKyhfCMRTwowL1nR4LC8nGA4X1muBhSRKtqG25JiBfPU83uJWBURbqrY5CNBpd1QdRRnXKzDoDCnzf8Dkd",
  "key17": "DL95kao5iF4kD4UqrmM4w9WZzuqtAEajpi2ikhGAQha18sqog9VTtETPr2Z3yYWf6uVEqGfHUqYkb2X3RMcKNfn",
  "key18": "5weHDDwuXquR1kot4WkyXbyqeJyyZ13QSt2zDhYkGpZKsY7hZcUdA6iZd3FnS4PbB6uVMCZ6BZj1HQQ53MFDzcVW",
  "key19": "EorNeAJgToPhVtmmvPmSbqTDmCZP3Sbjc2ByoaCruaupv9CBZZdGdCbbJhDcTw2Czhm8kD3RHNGx7d3pNFHuFrE",
  "key20": "n8UjEZDNRvhuVv3BQhj5tAkbVnTerQ35VPsukqEiPeTekz9mYQ25d8CJ2W136YoAYTo6Zyk9etbskstsNb8odfU",
  "key21": "4bAeK8i3jCW84cjtfUA6tmzVUqeT2zWPHSP8zcD5zysFck7cBErcCH413X3k3XUHTHe3J3iPzT52GTJuXNhjwgwB",
  "key22": "i4BSwqnqmxfLgyAAwy46wvbGpffdxGEbF5ogB6TSxKwA3PbqyxwhpPRh9YMCqhZgJQmNECFk3s6imE9qdzt694K",
  "key23": "rA4Vx8eMqE7VgffKDGzv6KYwnzRtqSYRUuNMkAv2n6MXdaG8xX1yvJjS6VKuoRFKxkBwEEBubajDsg1hENLXom4",
  "key24": "2mR8jFJvGdE7cP7qBumM8E5dwYCZm4zEZEqEr5ruPcjhppdp14AtCi6fDbkdW7TZTw44sEVgom88rEqJCgZ82dzX",
  "key25": "9NMhRtttZA6zMuKQEMLNT52yxQSF38esKYukGDrtzgc2xoX9cdqtgiqQsLg6uC7hZf1vqsbMAnk8R74fVQASX6p",
  "key26": "9SukN9Fy5hv7RivGdNX5Zr6zmAr2dEeXcbkc9oA1cMEXXAz8qKVFcjntekToTqWuRGr4XbsjKCuB1YzGzWZPUyE",
  "key27": "Un5u5UD3nNZJcxaxSwCo21eL11fhJjGkdS34iKMkhrUiowhtWd1mhMHrd1xmnERSjK1x9ffbL6QCTWpJDCRerVs",
  "key28": "2Z4FWbk7AvmTTUbwzgAxWuChk8ZpHdcgqiD2avSZyNCAqzkyt9Wey6LeoS1uLH4jNxuHtCMHEk3uN1ntSgpr1brj",
  "key29": "5ZmbRFN9fv2mreTUytJWBSAoKSCcjacr4VTHBXMoAmqZPcJWPX2ZhujiHrhcRSKyBwPwBZHvZBN19m8Q7PS7WTJn",
  "key30": "45BcVtYEQvAvYpSi5FwCyMALKmpp5Us8XHefitpUceMmteL2MAHKgMzkz9EJ4bnaizwpzqMXVHUZDtQkm6Ap5TeD"
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
