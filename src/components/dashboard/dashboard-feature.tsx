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
    "34WRvSEjvTfGLhe8i5KTYqgVj75USTttyKHwLoygfYTyTbhqUDdGL8ViWEUAp5FfuDUkeJzwpWTZfMiL1ZyTJCTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnPf3UApGN4vtPSttbARSx43Qs4YhfW6gEEbe6NXcRbUqKyQTjYichmKqLtEZAUtmJtEYJE28JaQPzCcQoTyzgZ",
  "key1": "4ZAvkC6C5MtBABtQqqiYZ3ZkZqgFDNprLX9Tkib54EvQgMhQqXYWkU2LkMNyp26qmjgbpdVZyZR2k4ChiMdngmYQ",
  "key2": "65yaxdtPGrpVvTwAXxcDSV7bPhRwHFrEPHRjH1nEd2MkJpPGw9R95onu7xUvjdkkcBzimy3rXKE5VFiShrL6niwJ",
  "key3": "5SKYPLohnUYTMoVQKVuXsAthaMeLaTSnraCEfn45CdXUHA4CNv3cesYSM4LuxeAyWDuy7TN6HyYCo5FTSDU8RNLo",
  "key4": "41kvfq9ESh13i616KoFJ2jhBCCptMTus3L9zX9StrAPcKogWiFS81ibGJ6YymmtmB7feQchmP4Q2FVJC4BXa9zU1",
  "key5": "HrzA1CYaFGqhKB11rhhnoPzGqfhxjECjxpx4ruKmXkuyLLsULBP6Sfzwa87Kosc1UbwusrQESfxaJpTPYGUbadq",
  "key6": "4EMgfx5163Hxkjmjw7fDNqD8gxNKaV6cHX51eKvByqWVd1ggzd3iT3AdqXG3dRvihRjwuYFSLMnNA2x4Y3yZfRcm",
  "key7": "62NmSTbz7XzgKnaGwG7GArH5RgaSswNdB5CFMNFrwZjStdyRPvgWX2LNnBKs7ocQowWGV7UYQ8CzLNmG2yPfAeNU",
  "key8": "3rB1okcChipgM6gqvSnrugmmShM4gVPDhEDJQpnyssT8xfewKyyeKYeRfNe4P8oWdQejfhpb5BnyVGSv3tMACQhr",
  "key9": "57njiJ5WN5G8CV2T2ojPUNXrFEEoVUNuY1PH9eSe7c2Xjbo28wJp813kwLYBVgMvh7sjfS2Pc8MQWtzXYqCV4gs8",
  "key10": "55GJPj5Jvcqfd8tETMcLLKoxU7J3TN8mbbadjcFKQgMWzQc8Nt7HejTH42d5Em4vvFstqHfDs1QAZnhUz2JGptii",
  "key11": "wfpUXaoMrnmhgRKboS76wDM4c7CMbgMXXLBzv7VYB3Qgpzaory44E9jVUWLiWCTMy4zE2vrBnPXTUWCpSFdEQCb",
  "key12": "4EpnUkEW6wbGvvoojM1hva9Yo3gGXdqmCPjTdtZRvGgCBaPZ7VPesaRBSCcTNT8MBvD8GYHLfCkx7pYyUrmb75ZD",
  "key13": "4QaXcsRQQ9mjvwBmRNXqf4jzJ1KXEvtXWadjMS3L6J9pzosUPigPaGXzpRPcYjghPcnPLrG8T1dJEAEvpoCgqiBw",
  "key14": "5fBorUa6otWGQxmvMvrsNvKdLdGd3uNH9G54pnGZfcnG2uGxggVYbTx6SA1fQtZEfMsy8dZ8SMjjisGJP84GPyJJ",
  "key15": "27TUc2XekKvcEXaVbTXNcmnVQ4sokwCjM18CWZuqiPAzLWjHEvSAANAGMRhgfWjytoP3DZEtvM8B42qjdxg2vFPs",
  "key16": "48NKL9kVdjw6Q7LjHe5em1JvcmWqFdmuMkG2ydmDQYPnuVWudw5MYXogGtGtj8HGmCX8EPmVd6BVKCZLy2Lup4d2",
  "key17": "3LD8UDQz3DRGB7YaVZvL1Qdu1SjXpm6tzjXxHVktyezDNNNivyzAeR2dWR7p76Rs79d9RsyxmsHb749iDuuh9exe",
  "key18": "27AUSFaBNMAVy2RBDxywzyboVNUMRfNbkV795W9AZ7mzB4YhUjkwZc7JQqZpniGtN3paD65RFky2SGQAY4PYLfZy",
  "key19": "4K4hKQJ741r15Z1rnwrv77hUv2fgFFdvRJyQ9JMhA5awTXhVriEqmk3qjgqZKLEgT7YgdhCnYqTLgkQws3dG8ze7",
  "key20": "37d6iXdB4kzsJy5R9Sv9GVcwRRex4SBnwRtw2yZGQVSFkgQjpUWfV1gT3R7eJRG61uXh3Kv4ZWzixdvMBoafeyAG",
  "key21": "47CEJP6mCdQj48Eno8o5QkNgUSxWkBJabjdQT9T3EXaUCH5KVMhQFXSi1tyZGGnozHT9nGBA3T9vMbVFHbrRMh54",
  "key22": "KzTE1GLTYxSjEgPyefhqirfxcZErQNuFmQwCz6qRUcWnih4DAcj5weiGN6mCiHX8cC8TP7orwufnbidhN1vBwQF",
  "key23": "5vap245YezsSe2chrkHK7hMANmLheh45RsbUki1pnQHLi3fF9uaoKCCib7PKaa1ifuDX6DSmdnBUDe6ZPWsYeKBt",
  "key24": "3EmVid4u38RVWPxFynG9uCFJ8F9x7ocqiPrf9nZV2af5quGadx1w1Y6qnS1S5j3Nttv5yMaXi4yhgcRRfUpyiULR",
  "key25": "4RNxWUNgUnmgmKRUXSCQ6K6DqxVawfA1iZPdo8zxXjhH9PX9TX4xS1xhjPt2XUHLUWTLwWDMcFKn9vLk43tDnMfW",
  "key26": "212jkTyyHiaLvaevMTYtC5avpnDH83zLpkpMYHoZe82i11HLDVCaZJY6iSKgHWzWPYaP8aJCBSQAMKZkfj4wXd16",
  "key27": "2zaE16BzTzwd2opUuwZQRbWiypbr2hydeNEVoAHee1eJb7E1CPy7zHyTQS7kG8bpdcTDih8wF8fAT2HFLR4Mqvr5",
  "key28": "5GhTq1mvmSbkovouKyUNACPHeNBdHPTtWuvkEbBCd69PeKukxUFtkmKgsuheQAbtm9aMMSMfVaN2PravbPN7i48q",
  "key29": "5NpgySXcP2rfSpMDH2arJZkNavjF3rwLcJYC5FaUm2iFkwL36725xF2kYT5j2q1X7s6A2J7GEf5AfrVzsXGDSnrb",
  "key30": "2zKWFJfipCE42zrLKbqwLyk1MCiKk7duMrxMF68xQNHGtiHuF9QefEdRVcxbqXvvj9oKJxpCypwxPgtvMNX8w4sr",
  "key31": "3RYyjeKdMKdnaJjcVb95NeHyPBDftXf7cVFnDBPRBKXqJE33MhNueoAPse8zKSLyMB4FvKYwDXZMpVE5XvBNnNAn",
  "key32": "53YPzzSk7jH3EJtF2HzAvwDp2c4QTCJNgwBbkrh7WwR1EhtYtyKvT5fYZq2e66xGbYdwtwYNBSrFFRosLp5X5g5M",
  "key33": "2ySxsbz4SaefQ1vUUaEBVFdAY1K1MqQapd8TKZtbXwqf1sdy5Z8u6NboGcBGLWfngQwF8TcminjUrBUb5Eym7nqn",
  "key34": "trHgoqRpdbxKCqM8tFatY8ApF8eJjHa9VoYuKSdSsNDn6wgcnrh2RMDSADW2p5BuULaDRGpkV8DYXb1pkgxCSxP",
  "key35": "2CaFv7NX26huNM14iPQ5V5f8zHgiRLCWC5wAxKfzT2U7fJsagXRBSLLwP7ivKPJcLC6MoVGRcHUgwivaXKadHS3E",
  "key36": "4J9Xv3U3jgtNokiPtBMaAkRxSUYL39PyfPuG6SfnQ58hWQvJoxbQqkmSwVrbFTGt8TPygWV2AFJtfU2RjZzvtozK",
  "key37": "2pTzJGnMtQxoPPtHHmJmuFyun6jJcgTSJ7B7pAE1Th4XWX2zsDrFitYL4jX2wFD6VoSxDY8WJkVPhZH7dcMPHfW2",
  "key38": "3BDQkyE8ykDuB1b6S6XtpTW71K45v1AdArhetbp1CXvtsWMQjdp7axqu6scQLRRUr9LVTo6eKpvwinwr7CUL1rE2",
  "key39": "2URrg4FhC2Y3hQKQ4GqfC8e2aHwN3LwNwHM8Ypwb5Ze7AQFPakygUx4LdxBX993uipR91gCSdsBuA8Tik6zE7Cyz",
  "key40": "v5rLQNyx9B1SUvQzSERbnQpMbS58GU5BKHHhyGByerC7Re1G1qdprGBaWr7dorEnJJ91NymaSkyzpiZ95vTaks2",
  "key41": "4maLm3vayBigbWghP1iCDgcyEk47wmuYoE3iBhDi9mr3yTJAnpzAR6ryqnDjmN67HmEoeVS7KTbsxYUkrymp99g8",
  "key42": "3RqP9Q61pNURDC7TM8Vb1gHp4pPoFhzpBpFJh6c1pDYspi838Vk4CZkGRFHDbKJi2HRzrFbB9q3s1mbpMv39VYXn",
  "key43": "2SkEiyxgukEfBa6rmfSqvj1wDuS4sJ5JjkZsDEXudgEZYbEgXZ4Rpe6je58MTyGNxMqcLmNG38dAvdC5im1RKPBz",
  "key44": "2twwAXm3u14GxujUkUi1coEVeWvwaL6o99uxbV4fTPFfYjDEqfKcqJ4CZLUcEDX8XjkV1Fu8J8iZq4u5iHjYDUqr",
  "key45": "2CcmFjRJiBLTcNeAbR4pgVmCcqgxH65JXiWmhrkXaUnvNAVjb2C96jffJ4ss1m6LVw939bMPQpvZmBkZUxqkpJmX"
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
