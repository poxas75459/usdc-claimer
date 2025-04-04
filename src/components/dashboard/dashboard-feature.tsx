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
    "66YMGsszWKYiMd5XKUkNLMYG6PeUPyCzxJvJrefetMnGtKeUspVFgMvQ6c4K3egB9YPTauGxHFDuFYb3SC2ici2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59M66TsEJzaWfWQGvp6bAKv7n8mgvCYNArcCsZk9xYoxYWaDk6Z1VZ5bKBzqfRRHzdhV3U9SxdLjCrrrt9WMfgWs",
  "key1": "5NQtQEh6bgi3BQUueq2sVBTUaKoxyYyCKvrnLAn6qvCRJReLRewJagqEDeiupNCq35RnWzkaaftxhSHTE8vHV6S7",
  "key2": "o2hxdfqzHTWNECfafUZmirdUxTFGKJ1eSH7qhrdeziHKsbjFt2G75SndjjGXUgVJh5nfoTaN4e2dhh2Ldv2sF2N",
  "key3": "5q5mT9jNYwCcCmsgtaZuRoEWP5Hg3psLaqPATptvPnodJ6tXPUWCW1UonGZytgptaBJX2o9igsbWDGsr8TjFYDj4",
  "key4": "21qeiyZautA6rLNHkJH2sRVQ3Dx4aryQp3WrAyc3gs4b7UNxtJDHcxHR5ZefZNuGzsHtvrjU8TxAkoRWVbkjsaWX",
  "key5": "5839zo9EHs14kQhUMCUuZc66YzHZ7L2DSZMGhMXxAgFgs3MST1H3FVH2QPVvrLt6uCijC1GWdx3bjg922njv8x4V",
  "key6": "3rHtUQ1MiUErLi57HKjpucySNg6NSXfLc4os3eVa1SBQU13q5AuY3RGNKXyjcNfMDdGLZbbyMRVt6VhevB7Nu1pm",
  "key7": "5whtixYGJQSu5UuvJdukZNfj6X7pRvxNAnP4DNXsq3JNTyTY4LJe1ni72kajVXVF19vjBceZH5SRh9UWpKvYkUR7",
  "key8": "4cP5y5D92oA9Cp4dBY2q9i3PjF6vh6kHuiDks87mNVuJyNhhGc1XRBeQxwTrfSsyfpzGskuRZbAWMyLaaoZxNDxr",
  "key9": "3YaBLBVLzBheyXLGYR9m1JTTfG9oUkyaPN3oR9aDCBpsc9zBVYVFEnZEHyjLdK5bsAAB3nRwEvY8aMhw71qKbxvy",
  "key10": "4Lobdn9d6aE9qGxouMXhaZf7BFvcCNQjZmFiKHPSTMRVvcMoRzYuoNsh8VB9VJjeZNAhuwpUbqmvjZMJASgozuqF",
  "key11": "4tYHbTjfbzgy6Vc66qhjAhBvTomHeg6ZTvJtFKFdVyeANJtaCXf72634696xmKdLxBaMq2ebV7dMB488EbfyRMEW",
  "key12": "4eLVWzVeo63Xa15XnMLuK1hLpTGPWA2Wbp492QtFZH1TWWRE69mcvmCzbALFbhDAQGqaqptPRdwgs4h6TVCng9Uk",
  "key13": "272fSSshXh6B465HjT5tn4Nm8N53sR2S142wJxTz5dwyPrfyAuRENbFqPoohiGEBtPq45yukvExaz5TjkYRC8b4v",
  "key14": "uyrzufTmirh3EE3NjWShPKjL6hZFQfddSCrWRvKMBUr5CwhtnqomMiXuovYfjd55nqt892PBbataNX33zo46KAR",
  "key15": "2yNkQtYioPRmyeXY6yRTrRkvTQeKUQM98hJ1WDpTfe2d6j3BtRUeeQCcQjazW4BVMohHC8ijL7CBoAmKhy8Vg9mD",
  "key16": "2q7croT5hamoCtDH6WHDGvCPRGy9cRa955oXorPSrJcKJe8qLJwz2qjbitFSP6Dcve3VGy7sjaV6ZWzegGyXKgM4",
  "key17": "t64AFfP3zSohP65caH4r2V4sXeoHct5kRhixVRgFnPf13zuPM9e7evC2jNPeDzwNkNhMpZCjS4zCRJnYJAZVm7x",
  "key18": "3wn5btJsPQTBm7ChvtXVRZCLVYCbm73ninMHyFk3unxHy4oEQ5j2MqNthyoK3VytEQWmZKvp8t3P8FsFKLyAps3M",
  "key19": "5kSkMJ8ZW6y4JJoBoTRkrPajayD5Fv9HRRq1MiA6fTyCaxotWdzMCEsktoLGhtLys49oPm8xmKttuBVNX2E1vF3N",
  "key20": "38jyqHvWG6haAfzKqDXhgPBU15G3ZLogbE1iPtkYv6U3TmqAYdwZ4Ty3Ynj279uxLWtyCaBChRF7cqWHPNNckB1B",
  "key21": "3NJ7JaLfVkDVL7gkaaHemDhRqRte3AWFw4LpnSBakV4FMPEyJGN2UsCDgjB2JPgtKLLVY4WgNEnnXDPJt1YaAhB3",
  "key22": "2VGAWPp5RCZVnBzFJhusnV6L9kXZwMgut46v7yUd9frxYuVKLudVhniyeFeAQdaKmR9h4G2jhbbg2on5uCReF6BK",
  "key23": "5ndNK428Fcp215FQkxMtwVJwsVxjHaoM7fNq2LHWAqasuVqQeiSQydJbFt573iXZN6bBS1wmvwndCjtBQNZrRaA9",
  "key24": "5dNLDonMVkb9hkgGPuaZM1B6zNgfZvdmJbjxz4gJBf4TtBFPCfNm5ALZQPuu7kjfH82tu62uqKiVEDpcX54DdX73",
  "key25": "3wSa4ZS6WoWJoVq4fpxYgpxQXxpo9fuBQGuGmh5RTgd6TdjG1KTpp7t2o1ZhvXyf1XsGXc2CLn2hnrxG1aUKkDSh",
  "key26": "iV2ECbk7XpREFxTkjCVJwiyA97yQiBf49bsedGU8N1RiaYFPMm6yaaBsKmNrQyk98piejTUgZ2bCTiADW164nyG",
  "key27": "tzF2rjfhFcdFVRyZzjh723SKKDUgB5pFshvFga7amJ2s6oN6qR1T1NM9XKkbk35bGAXhr5GkaVHLySfXBw7AYk6",
  "key28": "5WfF1DCzLwaPDjRRQEy2aiVMYkXHdBRo5a5ZrC8VEC2t5zFuYyEhr8sAZy3G9hvMLCtw79xk2QjWYbAEn8JE5RoG"
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
