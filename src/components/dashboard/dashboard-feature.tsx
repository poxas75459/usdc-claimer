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
    "3ZWniSuZRtiTWohxL6JtbPpaBTccXA8m8XXWAFeaatKs91UzJovntDJEhquCRk7dVjUxLHrLmknoSYMwKYP5CDuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6jQFfJiFLsougqgDM3viikJPxFp9J7GYAUQFp5eKNts2DbxtetkY5R5So4KxA4dfR1KwGiAJDzxK9Uw1CB19nr",
  "key1": "3bZ5NX11BvFpJDQLvfH91nDhUdVGPbtb2QBkq9EeonQrtE85VmLUKyzrbdpgcAMojCFGyvVfJWeG2hamPPnMjQQs",
  "key2": "3726Hw41zrwqYxKAzstbdWqvdaWKcCDCz4i7DBmpfHeuSK8Z8FSqW2o1MN6pU5fS5TnG7PuXFkJ7YoYpsfoa7ibs",
  "key3": "adZJdUygM7EiwZximzU9jRJtfjFzEjXSdNms6Td5Zt3p4yvVgUQLCBNSaWg25ZN7dhFhyKMnd5DB8BKZZ15XfLB",
  "key4": "3U62prVezJzMsX9Wk1sG1iEC4NYxgokfeBXyDeWMstrUiHtvpK3RiqiXRg2D6j9SaMuPWRfoKcBmMWqJwjX6X23R",
  "key5": "57G46tdqEurkWeJJB3R9uVpnZQtamETgog3mjnWqdmDPT3im3NbuJveXBrdLFmdfHmAim4hs6gNhc7mhcM2eXN5t",
  "key6": "3bffGAc9Wc2adedRWmotzgrzVAABpxBcgaKVXZ49CVzRW9Au6Q6q9uRHZ9RH94VBLRm6nMHERnZARHDE71B8VkR1",
  "key7": "54aXsA9Rod79yorVUBPKDmYicC3xT7kYW4CamGMaWnvXwWGb3PoSd6zPabCiBr6o1mu9Gu87tUCv22UJXoJvgTRo",
  "key8": "N57wCGzHkqs5SEjLEuBzmKfyEb8Wk55HncrQKUDhpVo3Z2BR5qPcZVXw7ziVsiqLMUjLABTy3sAWuSy922QdaNR",
  "key9": "3pLhZgcQcv894cjja8QmFwhR8SFKy5gch2ST8E95ZkwPh7nWyNSvxppoGzij75D1tAS8rUh7QKQzFmZpuJXHTN8V",
  "key10": "58ZEKBd8NJPouDvo2qY5X4rkkyf8XiXyA5pHFpgA6PpZpiNqPajAdAXf8QEW6fSEz4C3jnqrEoqAJi87UhyyCDta",
  "key11": "3gegfDMuKHReqGbCYBPd2ixgoZYd3JefN1Dkha9fzwDd9ckc4hxp2GLkjaDuMYeuB6rTovbYu8rtT4zBhHV9LkGB",
  "key12": "56oiuURC7PbuBBEEdXYF1XmuijmofvqaDQE2xNwDCEeAME6UWkQzASkCf2Zwoo7Mmhgquux3KS9atwEarC6mGopn",
  "key13": "4MGS35S4bCC38W2RogJ7oQN4Ps7JoXobASDRDJh4UXXQX2G4kcGDFp9NFnWJb95VNWXgwDjySdyukXjC8yt3msbB",
  "key14": "2pKHfQr3nxjhk4sVUsqRVBKKmvQ3FHztiDTsU5hRRNGbo5JoALK9xYfxFs4nu2SURxzdyZgZ4F9gZehHBMfuMBn9",
  "key15": "EurX7VWyhJ2kVYQ1zL81xyJ98zjpZZRDQkj9bsA8gWEt81nc4CtSrt3iEskirbvYK8k5uMaVfGKyXvrWdLjxdHp",
  "key16": "5FysbvSZN4LXcVGFb514iYQbYeETueFwsdFUxGvNWqzUWbsPWVaSCkEM1rcETCXbobMEbBH2xhooi3EK2zzs9bnw",
  "key17": "212BUSrFnkKNW52B9zBnqVJrezVxt24B5xeVbgERjVFTnZujojjyLUcbrmVXdhyTJnexdMSZbC6mXC4uoJm4N8Bh",
  "key18": "LTs42BqjVNU1toaCHAFdHJgw68zrShknEKCQ4T8q6GxYkrUnUvcgPUN2mmsxsTvsEL6eVPhGoZRxbUUEM98hGFz",
  "key19": "FYQePheFNrvkFHcoTwfc6dgQntPGn3iPbWwFhpH8tGdunBCaEVesVNzYhsm2hPMU5zmkZKJxQcwPVGg9r83UEg9",
  "key20": "65Y4nLAk5xW4SPXLLdmFL62thvjvJd2LoHtVax66WLdchHys2KXSAJkgGc5YfkYSvqRMw99ffZrnXKjaCBAGZoTe",
  "key21": "4gavy4Tv5xy1u7goQGsSieqwF8sG7aPQeff7os4GKhriyDUdnHrobb79hAeP55KJZB3AcQUqb8ssdaMKuQrLfB1H",
  "key22": "25RLudGuoi6o4XzUfkUEHSejUaLYWVw975sduknbEe9virnFBqS8i5N9Zt3SeEhZB77WUJbL4qCRX8aMrrT82dBb",
  "key23": "2tbqjV4xCwUiEpdp52DLcHY9bq5NFpT1vtGd4HpCDdi2CJtSdsn24g25ZvS13nXJUQ6axcDnY5zrLBdJK3P7c2Pm",
  "key24": "3nUjcLF4uAN1sF9i7SLtNfYa8ScZzRzwjTLU3ukTtTK5zMxMa45wGmcH8JvWbJqbxsMHCAMN383Vq5g32pqBEvig",
  "key25": "3f3DeF964Me81fPvLUvPkXpNPhrLvJMGZ3Au475AbvR9Ed9ws4BWwRZh6eY3U5kMBZ3h7YifpPyco3ApXQSBJ7pZ",
  "key26": "48GKb4BkJsPm5P2a6mrjsckPgpN1tZL5LwjvuUJLyBUUHparYtSUHhyKB67NfTnm3qxR4SzCcqP7a4RE342bJiZQ",
  "key27": "3GX6kyiyAbgQYJw1rkuN8R1z8RzuHNmsJtoXPDoW4YCetNQ2HGYf8m2LJuBrUe1Lu88ngPqtBPuJKShpyQLU6ppF",
  "key28": "26e4c2Vysfr6twdkNLFDF5YQZLoHEyTHmNvx4LVAfRA2mgaepssLh9eRd4GC3TEqi35o2pZzrJbvPGBMLRmJ6RYX",
  "key29": "5fgGvvBfs6qr9RmK1sCXWKvTUDLwGfXrfqw6HYCSTQhEqTNzySVbDHEU2oQAXy4La1FehMJcBhh9Y8KHRFfL9MbF",
  "key30": "2mz4Bjmn3xQYH2qTTJPkJRiCZxTUdpicpidmj8FsfYMUHPfnhS9wDxNwiw5HjmKVWZN9ayewEE6DsaKDaUmbGkpM",
  "key31": "21Pf7kYGhG2STocXL6RG9EXNoZ4xCHAWxqsHRTuRqeda9sXD2KyKnUQ6rhef3T8K7X9E5rbL8TgVHRnM9aMDSiVk",
  "key32": "52ZGBMYjHYg4QtDzgMXQH7ia7x9L7Gjd8PeaZGPS11WgmsMzWA3QSbrb2D9qURYmeq2rTVPaT51NRyfM854YsAav",
  "key33": "3itrhQQQqiWACnBy46nhTdWgSxMPoatdhVuV4Kk9XSaNmd2h27j7oF6RXVsjwhjH5bfFUhVfnC77bCqPUsoXK8DK",
  "key34": "5aZ5XB6d1iNDTnP21s4uXYJmnM2xUV2P9EPyCyC2ApsrgHFzoZ3M18Fe7fzLwpKK8HTHzJam5PpCtVDp38AoSaoz",
  "key35": "rqrXyfHJybbqfH5Ac3D3s7jGtJs9M4DUbgAKufDKd9Zmf1S92gS6KRYgMau87QzaDVVKkexUQYBaFYvWATmUMHk",
  "key36": "63d9TV9qMQn9FAztRP7H1aFdfPv9smUAafHn9jorZJisyVEtfjByFLdG8eW9g93jhMmTuaBp3wfdXrcbMwPK8ixA",
  "key37": "5GTvgxUeAVJ4nw1ZjsdoEevYSraXPsUUBREB15D8d8Nag5mXSKcqfocjZ6Sg3rJFhLBa5WJJTb44u2oU76162o6d",
  "key38": "2SE7QW8NeTvsxxyqFDLVjkDis4jbc8R4NZfUfGZsQzAaFCEdVjMRL4zMZ8xu3UEFVcVVvPHoa2LipNfLK9mEbPhC",
  "key39": "4xjK3hwHbzzXwExWfaZuXicq3TCGLRetdGfrwfcEQxtQ1RPjFvuKpnHoPGsDFXK8XvLvC7yDdRpuX6D78HcZm5sv",
  "key40": "2qoe3tffdmwwRaAU32R5nwNnqfSy3pWjpk9ysyCtTZWJ4uMBScst6YbcSeP4cKaXvULeoTxFHUVUrTeityNe2VQw",
  "key41": "39Hy9scg7qdxYqToPxZ8poQ9iqWFTknQTjsRaUvseEDVwvNcein9RbKCzgvDYL4E55LkjKNM2SbbR8J5UsYvDF4P",
  "key42": "4LY9sPvi7d5NsJvg9AhzJoP47EG2TkTorP54uot1firbKSbjaxwKugcasW9w3LKx4c9pXc8CmBfsjZrdF57UBZE3",
  "key43": "5mGnTMKVxEe3kAUdpm757Ue2pCBXirj42RzKPKjFQ6CjF4kX27mYGSRfGVRPedWk1x7ka1SHSoHkS4iU2FffHQvr",
  "key44": "3772GfMZJ8ZVjcqrbR1tbXQz95LweE4Ka6G9o6ss37muav5ezUaTrkzX2CmKibd5Q5yGjtdndQSDKSmrb6vi9XLm",
  "key45": "yiiUiEugpBJ2wAUUjth8ByGhB7HJhrKg73L3xDgeLnGYHzM2sPUMbcMYrj9KnJUMpu7oJREWtbFdm2itpxapCYC",
  "key46": "53GwJCcEeqdpeTTb2xxT55s1EGmjZF9R9i2ZzMHpRPfFTcc9T5fRybui7KQ9QkUL8sL6Ro7JYqkXMpszdqkYHXqX",
  "key47": "54oPsimX6tMpjtHJGnmje83YY15ro6ehT2rAjy7Pfr8Q6fXyZy4Dc6jNcZM7FincDybVG6gjpenawao1NLuweQs9",
  "key48": "5JhTGP5hM2WEKUMm3xUawnzWL9whYxJcwMr9ZaBREdKhs2iCyjqYADutZh7XAR1PeprntRA4brBTGjtmdcPcVu41"
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
