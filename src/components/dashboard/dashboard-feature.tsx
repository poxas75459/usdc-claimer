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
    "3xDyapWEeTdVH4sUHHcZ2cjCRrg7oHNKuRDN4sXWdcGL82cmG5r4FJdjEnYWUmr7m4UpyAV8fuZdGdwQAYD3TG9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uZPxrwMGyGoxxcRE3vD9Evt8gkJUFhWbq82dSJ6bK6EE8ADLzbM8UoXqYGaniT5qi2AepNGRijsaPF2FKvBdiBd",
  "key1": "yivMW5Jn9rQgo1EyP95i9eu9wQCo7yEQQZN73X1ccE4u63yDTRKGYCHnfCsUxEvtKPBgcH9rfzA3Ndrgo3tBQ3H",
  "key2": "RVTHPiMqemUmZ7x8gVRAJH5NXTumJ9zoQcMu4La99jpc5HobsKNjTMaXBg19TvdLzihF3iTqaLMHYgoU97U5o7t",
  "key3": "33jcvw9q7aYP482sjuFkFgzSxqhDGGWYL7q4ugG8jN2JeeJMnrXGwWNj7y457DpsXQi4zWV7q5NxfR2NcVBBQrqt",
  "key4": "tMe11yqaNAeYcndkEqdhvKFjAy2qmVgqnRVN8BBF6rcDigeKA38Hde17PQa533N5mWLY2c21Y1b7Xf7g5qGVsfu",
  "key5": "5iB9uYzS3CsMnpSJgMW8xgFJ7LkmzfTukccsV5eupgCqQj5qs17GjUhUExkdmAsAe9awr2Q4DUPW11zoEVLAftbb",
  "key6": "VTWT6EZaKMUX49R4aLrHSMnsy4uni7xPCMeYgcutH3u1e5YDF1BnfckuvzD9R57rCFjh9JmE1B9LHCtotUAPCaZ",
  "key7": "Ydd3AQCaAWmpDT62Hkf3ML45oHTCXMp6RDLx3m2uZ8a7ZY3x3NFQyyHaLX2Sxg1bikHUScKgdNjBBshGdNEJTHL",
  "key8": "GPfSpQr9KzoZjWUMFkmaU8FCvdcwARhHe9fcY4h1CyazLykofsFjynVo6fx6NYbKqZivsRpRezvLXszyaSDEzuB",
  "key9": "5CipYyu11dJcjj8SrX9vLWaUndX8XnMRwCroKxuf4RP7M3NSzxR6Egie4KmPdvfRsZaFL9fc8QRdj4ci48yHa6W2",
  "key10": "3f61AyAeqjZvALM499Cia8RZtNpXLo3CaERzqgLGovTKJqDzahq4Yc4tiJNAh1PiSjxH8F2USoyz9Th47nLnJZDK",
  "key11": "44dBH2HMdaWm1iyiMsKvRCA7CmRLg8BGnp9RYMVnnZx9Cqc1f4QwDo7nzcvA7UdzzMRJFJzRvDgsvJdgkbceiTRt",
  "key12": "dkt7DenEwxJ74jXRk3AFzU2PmjT2B5Q8AX6qo4mPNXVUTs4ypH87TpRf6z91Cdu7RtnvbJpHQoLcrTU888Dq5je",
  "key13": "2dwWAkV2Y2bjfUJRtRDTiJbLfAx2BNETUo3xrNNSjSycXqo883TcrQ45pxLJcv48PZCJ4kLzNaJgntkFMNvqhcpa",
  "key14": "3x3SdsCyf5Sm4LdnkU2Cjp4PimA39XVjpvet8MR4bhiB1dQe2um5r843YRMpU3JPYcCeFdreyxDBYU9mtHTwN84s",
  "key15": "3SYQMQURQ4L6VSBqLcgfbYBMdUek7DjXRozba9NmAP2EgF1tYsVyp8ETqS8yNN3hZYBgqJad9GTBRQAHUP7LyV6",
  "key16": "3sGoKqb1rmi5V7PQWtoaH8pAAvMR239wVaHUJPsbAhumWG3yjHnidSmV1T4JJzF5F8T5wf83XHKNjZoTys2q2trn",
  "key17": "wzC7LVwCYy9eFwiFZVRzJ4dmjVXuB72kV2zxucqguxfhY7YEPgf7nAPvcReG2uibhbBNQkUKX2bg84WbzLhtYcs",
  "key18": "64hDbYCZAotcv4ug9QZYVd317uPSrhENMC8ueVATN1tF3aJTb1nTwY3RLRbJm4QTfXeEDefjScUFipcxADFwh9ez",
  "key19": "mqMwurraE2Zr39BtHAEDc9YHeybMwQJYvKkAU6q68LBkuT5mBtBkupSDoEtkkqfqrdhfP96kuFDSU6fRR86MHM2",
  "key20": "3jRq9kHjGo2kMkiN6FChJgKsxrvq7c9JjbqB34EkFcokAfJgyoBAyjMaawSxDDuYq2xoc1UPApFUitcEWeDzYLeW",
  "key21": "5HztZpAcbiHMgXNL5WHt8P1wGg135CqxyzzZqLsZafE5qLBvcr2oV1uWf419rLhBbPZwEumwHgGuzhWUM1CRiKAC",
  "key22": "3Tp8FZrtTLcVPbj5ug1hoQrdVQgFEJaZWJSBGGkXiDTkbR8HCwLMWNZz5eBUgjEE3C7AZHt141GLwCS1P7mXK95j",
  "key23": "E7pYm9xf3Kwt8qWLbG5YNMGm4Ww72YgLtMYv6PyKvzqpVeXXaErthWzUXungQC12C74wDUbxegvqt7SoH2oB7TF",
  "key24": "4axRCx8fze9ZQcEapv5gmauE84GckQ6fdAitxsQUC5Fu6uoTbo21K9gqzb2LfVknuyS4DWxVkfFxB5A3dAkPi6qz",
  "key25": "4gahbBcfk7vfduaeSYYLVDuMurZd4zvVUNFGQsNBgRGQBL78RzB2jPykCxKVEqT7iN8nDawgU7wF83u38JDxd638",
  "key26": "5KcptcKGUZTE6tJxph9Nr32LwM18yBLEkU2YoWiG7brWR34WiY98YftRG53ccSyrNCDHjchLu7p7Jq2m88asQWQR",
  "key27": "2DXAd6ZVV288M5u4bEwBjuxJMQTzh3Z6ZYQAwmo5829F5Ud2oDatA7u4aovWzp9C7tFb1SYFiR2XhQBxmFdsXJc3",
  "key28": "49mZU7xoC4qGQhVuq17McZRshSjiHo9dZbkSJHb92WywMeqRNYCCwQjM5s7828haNkfQYk3vwaokfgWyaaRFsVMU",
  "key29": "5BjKP9TqK4f5A21XN6kUMPJ82jVBJwy2XNqPdfKAofHCsQe6j1wXznrjyUXabgMM1ZANTcJBNjRTNuoQ7jQ82RFD",
  "key30": "4K8pEg3s97HG6RbgMbyLQpP4hVu4D5Um3D5ZL9c4Ds4QEZCWsJjwTEHCSo9duMXYymeBxzedgFDeBXEfAgF8EvmD",
  "key31": "3Hc8gsEBS9aSKwaUZAbkqvN8YJ3aEmVCcabyufoLtPXeFKRoggGh43AHkvAm8K6tZb47RGcQC1UaigYzHkF56Rpb",
  "key32": "2KKjA63dKj66D7u9AVp4VgjRFsV6mUPNk6SWrfNCrt3BGzEkjDBN6Tg34zXqhvm8qG1PCVcE7vHxrPzd1G5mj23m",
  "key33": "55n1DEjz5ma3Js1Hqdn44oqt2Pgd3x1sYqAYYwKHjjCEXQpufcrmGERDEMAGdKQ6tNgQgqogo5CvSgpQHXgbKoeX",
  "key34": "PR6YbB5L65oSJxmXGCYEw5k1pYLg1rxBtyG9v1kxXVwvhK5BWADuLP1fduw7HUbGiwCH3yCgNNuqcGMJq4gA6F2"
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
