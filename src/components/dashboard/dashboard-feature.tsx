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
    "3i9XNFpXF73hGUHtf1mBEUUe32MWu5u9T6pfd8hEZziZd8X3DVQaDBXudRtXQGMGtr1NEZMHbTakc2h5rNFuU2dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gFcsedXRTgoU3ckkMBeHkvnXXjc6gDUv8EJTYixVFTAyFtSxJdJZRiqeQK5LW1SG5qZkwPVrhApJmkrASzSXHNX",
  "key1": "4gV9XkHzn7bcgDQLD9EJR6EM4AHff4KgrDPTVgabGq7iTTX6ZcwXT9C2uRiDfCsEn3g1tLSCPUm7FzVCeinforU",
  "key2": "2RPuMnzmC64BKpo7qpHWa5HAJ5qmFSjdqDchZEr2rbhfrsEYwpBwZP276vNdryWbitMHVv1JPo3d3KuSBZrD4yQb",
  "key3": "2NrYKQ7tZLxQ9YwuMNp1E1tVMGV8ju4jxnMXTnGU3f6pENNboUYKKjgod1yraNVJKwTnsXGhWcxeboRCMKunjxc9",
  "key4": "4FFX5kGxH1yFo1qPYKGqMoDg1h5aC5okFLQo14kMQp7mCAiYfX13XhEsXabMGugGhmQVJ2qPsLHVsqiXEJvZp165",
  "key5": "59ZWAx4mtwrAANzHPAToorApc26n8WGbv9pDSgb2j5gbx95wwntbvCdJdDWgAaqzB7Z39MRPgoBU9KjDPyoWk3RK",
  "key6": "HEaU7tan83P7G8y6iY9953CmMPQQwTFZ8xjXNKtuKneEbPChpYWfMGowFGZqQiWPjYK5idHcwp3buLzz1JuYgFw",
  "key7": "2qXfqcycq3sgqh66bfTsBfd7QcapX2xUUoCEbtzo6Nkp6595MXqTknFwUB8hJ1WezZ7RSDGb29VcoX5mjW8AvdfY",
  "key8": "5QZa89v24wdc2nbMydShErPTSihEDqPXNq27NodnCPM12e6L4ZPcPj1nLvRxxv7k589TnDjepsWX88vv258rji1k",
  "key9": "4tUAnDGqhVAUaFVPjxZFAs4LPTpp2DKb8YvRaaW85GZDPJo66kFxAjz5svEUeq6mnzbsvprHbVabDN9hh3hUGnk8",
  "key10": "49wc3VqcpG3HuVPerAJi2foGBLzZEXJYy5q84qGFkS9qZ6pVs4DbrbBdCTVCFRAg8Z7Kewgw1qHKi7mrKxvimVDe",
  "key11": "k7QNhii5K6ynk9sCPLTTHFbZjJLwoeC19WYDL5yhgNoRQiDJBXR2HcFJgLbdnjajZ22CYUd2YgQ5Cv8XGqZ77Ax",
  "key12": "2YW99uHvhxQXHmLnCvp16uLyGopNqZBZoxM1mzC17Qz74pKN9ucP1ohs6qqXtSn2QVnryQPTgC7KvMfuX2YfHw2F",
  "key13": "3j44cReXX2JNgiCGnuH2XzQLNpT6ZycQXy2R1N3283uEP2ysGJ7eAtxARbPJb1TAuZ94kvpw9CcHVGhhscqoPXgt",
  "key14": "5aXk9EKrADQrwPphAqghokuF3ZBtQEz7s1hXiKc4DNVdq78b6KnK4RyezPMnC1MUCgHApDKN3UPxqTtpaP2mWWex",
  "key15": "3ncU15wKHDHLF3pt7hf34yMv25UPXCLkaciEqdSY4XQsqyHysbLgam6Ldnuu7vXqMMYhcqYjoZx5tvm922tGxEP8",
  "key16": "26RuJKVucMhqydAvw646PKuv5Y5Am93GPzMihYyhCJ18eLL6S5zXq7sJvyhZ49VZwia9VR1LywUq23WSVrTTJPti",
  "key17": "z2TzDDvbTM869ScPprVA9vmSc1gePBotTNwwmqQcvrYgvKHSBEVg6QduU478earhFR8B7a8xPCGNXQqAmCSme9A",
  "key18": "4G4ZGaUMfVMggiz7iB6phBDK85X3hGdQC7x9juiMr1BCfVw7XB925HippbvSikNQUe5T6B4kXS8q4H1D2XRBG3ht",
  "key19": "3StZ7iWann6PknbgZ1432jpZbYBU3N3t8NmDvKJV6TbjTyk8kNpeyATczkt2sXiSr656HyLLrNr7a5UjBhW9yhc1",
  "key20": "3VS8arMcUaM3NPbVSSSTc2UwP6uViUNHwkCs71TkNMQHUfnwYsViw7o7PhthoPfRdyk8EQpawEo1cxS2jdomi7b2",
  "key21": "33Pj3yJ7VkG9xgCvgL1TYvXujUDUL9jGDdTxhb4UbJMMCHtMTMe4RNsthJ8WG4mjNb4VFuFTcMg8Am3egcHtKXs2",
  "key22": "59oRgz85tJxvXEhs6D6pQND5dBdGp8Y7QXWFRBHiUMKYq6vL8d2xk4DU146u9kyMtieahaQXKSF7TgCuoXrt1RrW",
  "key23": "2LXzekDBa5YfNBTUCZbqJrneXc4LrZTT55jLFmFFNoSRHSYhStbQW78aqw5ywj3H9GL5mvo4YjAbrJA3CcBZxA4Z",
  "key24": "gPwYQaoaPmSstF3wb3LYX3SmSy8wk42E8tJpVaXE9HLxGgErxbi73t9DySjUpU1XgJe442AeTrLHGdAoj5LhwGq",
  "key25": "5kcVBbfk9G3a3zjExKoQo2TeRbZF4BndbQ3Dg3wtVEkWk9H82sQ4LeoUBrJPFYbDthWhz7fGEcVr7QJ8t6qPRYL1",
  "key26": "4H1pLcVTbSoiyiwwb4tLFD4MxwBm9TR7R387bs6yNXUuEZP3mXPTPBrpU8MK3okRxbvyUXqy7nbqibpokzonw7p8",
  "key27": "48V3BjTQGoSs8yaEGBKs12aeiAq66dZTdKPVPJ6xtMdU4a9GEwaaf5W48J86Emx3fJ9qDqXAvuWZL2VoqAkkRZxb",
  "key28": "2JfBtY8zaxBwejabwdStDkk7SJDQrvxpjXvZpegzfKaM5YgtYFk3WFcBHnKA52M3CqrPmTwS2j7NPWJgVdVsuHkE",
  "key29": "3NgM9Ti2RnX5mvRWWsg7Ytf33zkwosXny9VeJtsRLG9a1NvG1fbewBVLZaYBfthfHwNGsh2uNoZi88giS1p8MDNJ",
  "key30": "67JyHXwf7inWyYNAJT6K7LbPv5oCLZkgZwR3RunC7hKB2YeRShxy7qJjqzRkEFztV2Q5yA56YaCtU8mrofL1rnFX",
  "key31": "37kVxrPUeUomGkjtD8phnTA3USAcuANoicayY5f11FecucbogcwwezLi8XMzNfJfDd1e1KMpYfHP6BPDA95VUWXK",
  "key32": "4gdF9TU9CN8BMzm5KjC4bPPaY9f7wHgq3LgrjowD41tJE8Ahz7uTpvonFZpyt6Yxu2ZFjZNqR73K5HAtFB3n5Xi4",
  "key33": "5Xf3Fnwj8QTLPzCHYgm57kkEkZUTNznSQEc8LfiS78tXJbr4kwzrC9nG9aKh7d5wPQFxLMcAqSzFzpqkxqY9FkSo",
  "key34": "64YeJfrwGUAAnNzLfxy4K4crwoH4GWhjg9sxRQzFXKEJ2NgGXWFSPDozFBqJVBjdyV65ixRwfR9a3dSj7F6YVBFN",
  "key35": "5zpKs2CvogKCqvgNV3aB5PQqXdhEDgrC1MKhfRWCwuui1zHVb9GsJftuY95KXRvA6UbX93dzU2STVUi6riUVPbr",
  "key36": "2RuMFY4zSxHQ3Hq8WLg7mbKYjEBHRRTVBJoSRxJd85zN36spYND7v2P4sw5X1nMyhoY1uJFVEdqAJmKM27FxWqqb",
  "key37": "i58QRwMNjeFQe1J39mpjKWJi2qREgeaY7WdyeDFyStknFqZnJFwrDJSnraD3UyRwayeUHWtuDnnsK8wVHWczXjD",
  "key38": "sYbaBHg4D24EnwwNRruXmjDyj4AiMVgosAzu54gTgqcGs7kXomcdysnXd1UVK3B5bVJFJRodCPe9Zb3f68oor9J",
  "key39": "3SPBcbEamL3EnKDr5DXf2FdqZjG6mmHzRPNL4GovuFwogGBCs18HczWj4FGwnSV5RXvP1PFmpA99eLUzgketsXXN",
  "key40": "2BrHuG31EPrqPNGMCAQhYB7kNqwqz8mfrtT3hGWx3gHVMXuLNLhSTwWQMyEf3YXQUKT4td27ygapU7CqsRBi2mp1",
  "key41": "4J254CY1xGoQaYB4A7rTF9FkYM79w7CizvF27RkfYAVfQTMmBgrDhcUAix2fQg38hrf1hFaG8xySpsMGvXuEPpKS",
  "key42": "ve1e1gzdHE1JSPBhiQSNVM4tH5sUGV8Lp3dndPbkCoUBTjSXveFPUghL1MBSMsXrwSmejVfEKaAfpuAoqNfsPss",
  "key43": "VnGRGVYKKe46UMaNbdY2ksRgf5A8FTRwqUERYtDhf5nhSQW9BkBw919bVgF2y2WgMbkbcuep4mrHGcsnD9zRoGD",
  "key44": "4fFd9t69qGCQ9ZfRtUmt8XdiBJaA2RYbH6eR1KhuypbLqQeYAjNnafQE3wibdUfEh7DXd4BMuSkPhdb2cCCCQ7fq",
  "key45": "3UAHz1CxQSmv2KtaC1GWD8eteP4Jpmj2dWigobb2MZm7BKzQLEPYDmJXTgnByb6wWS8DSorZY4pdJcTfNesp113w",
  "key46": "3ZzguccYNsPMw3gPCdGVN9gy5b3JixHaZ4ky4tWWFxPZsHDRHNpz854J7PzB7uYUNCgioHxTzF7AiKhALisRp17w",
  "key47": "Y9MS7TQndqaFg7EoczevNxyxEcZx3y1o9x263Sneephx3eug2bYFe7LLXihHjiCVNz8m9EHhuhSRtzjbpBXWUA5"
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
