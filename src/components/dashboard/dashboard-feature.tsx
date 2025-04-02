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
    "5k4kHTfR6C29YULE4yD8doibbSnWuFJpwEoqEcZvLe6KAug7LF8qZfKwjwQ5cK5qceutkdTqQrMyHWgwxzYSrztk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vv4k5DwHpJEHEmypbV8QwevzmK1qDQSETabkubFLA2gjYMsKGrNJNqsXpTt1beXsxmmc6GAB7sQzZiPydXB5rCS",
  "key1": "2NfhgPVh7oJSgZY9LQBzELUf6HSNRVGsP1T94ZUGViRmPQWTddJ7b7q85g7e9HyVHm4hkv1DWaP7r9FY9FzgxMod",
  "key2": "2ax1cbscU4iXqzZ3r4AgGuvHS6BTGTSxvVeAfTmbJemQkevHNSZEckny5K8d3kS5orpHwdZazDMETZDp9CwJu2UT",
  "key3": "34sMSyTmfq34V1C1sqjLHREEjomDSPjYv3B4t1tV3A9nC4b9q1s5q2QHQqiRM8S9C2SMr7bc8gvSWCmyemEyd9w4",
  "key4": "3vPy88g6P4ACSUpNcH2wpSQJja2J4XKoV6htNwXvSmENTtQ4F16fYfus3yNir5bRe53iPCSdppMn7gCRLfc3qzAh",
  "key5": "AqApz9XDogBVMvXid3uBip7D21LSDogoBjdHxcdysib4VZA6ESJdTCNtKyVnD6tQK2o6s9RHVZ2bfuxDYx71hxw",
  "key6": "4gqNVAaJ95MFiXSKhEwEecD45SuGJZ6p4KD7dtMKMMPawP2Q5tKmT6JaExU4XeSxfBffeXXZQP4GXbZvjDNWa2rC",
  "key7": "2aRQwiWV2qXNw4UKTLQZnW6uySBX9Tw7TfQPPjpZJy8Y2ALvRGgnMnczDTbe8G7LQHwbX8BAJZZZGegEmHxVVECi",
  "key8": "Szm6s291QcBobXMrLg6KmLLJUmatsvJ1x3VLpN22iTU8nLFTAGwLEhoxhRkCXVNBXouot8SXFi7AfEztnGUJAZ3",
  "key9": "nmJMjLsPfGt9zNn117G69pKN31igVKvN1cBWSXMigfzLEdohnTum59CDDuzeWAx73WA2VGqWKK2kT35SGrje2JC",
  "key10": "3b5a9pHqDUk4ZQWbDHsTcSL8AnQ57cohrAh8xuQPhDakh6z1GRZxEXzSLHYn62GYd49TCC4xiL56GURxDyZzSAMV",
  "key11": "v56CJEon2U7MGMojb5sobMWBPdVVXiGQj8Lj8Gkpud2v7wCEPCNcxjSrFVXtubaD48aKxmZzMmStptEyWK8DPRj",
  "key12": "5xFFgvWz1j7RxFtpLnoThSdjTfEYJMP38yxPZjnYUtYfoa2CuU2MhnoFpfdU6sQJTP33BEB9pyJ7LoBhuzoBywRZ",
  "key13": "4A518GtajMxzhkC9a64s5xao8bdinguV8NNyRYgNq6X9rBRR6fkEMm56yBxtNj8qMt1DZwqBMLBKkim2QsNE2fZ8",
  "key14": "4bMwCA9WSeLUbVP1CJRHwoy7WuhVhN4fbXLDK47MH4ZNvF336UzbDM4d1kVW5PW1uw9xHbiXwXnmcwvoprWWgjkc",
  "key15": "3pbuEV1v8sTQ4R168tG6VtbR2d7iqGEVwhmiNx3PudmSZoP69vqxztpU3qTvLnbifF3dkBuzWSz2RnAc2ECFKT5M",
  "key16": "5k87adsycU25Q3ZEvdj3nprAxmibptKyD2QGSsRGiZRimqiZDyd2NEfPPTGP7hcXktmj5yk6ZNND9NuebA3WdszE",
  "key17": "sLJMh93sEh9jDpNuC49f6dceRmbCCq2Hw1z2L85spQL8WiAvbj7NH82SouzrjaMa9jUmhgggmNkZLDm4UjXUpzA",
  "key18": "4cx6RGM8R76kz8aPsVPWzuZDbhCCifYpZT9Wk1nnGk2Jqjr7o1uMTV6F1P15xFLCFnNJxnZr1u4Smaqy6EcJ2Rhd",
  "key19": "3JaPnPgsNjETa114qtmwxTQMzkcCsoQUka7u2HX9rhShr1AeWrCSFdjsomWEwdE9aFXjRu9ThMynq9Sr6a4QXPjA",
  "key20": "2afDXa3eSQx641Gs2oTF3thUpMw6gFPPkdDKVAR8RXK3H2VH2D5cm5dEWZSKUYbkB4w4USxQcjrhkByWygKYthWx",
  "key21": "5XNJchqq2AwFjrWnG3Ha1AKBaXLH9qneVhGSoodhCtm6LXGzap6D9CcnaMGuvptJZh1oqaCBNidLEbDY95HV45VQ",
  "key22": "3QaxqCYH39S27Kw5CsVswwKy3VJSetXue69q6spBv3x62xHNFrmtH53mryRECTFm9FD3HsvVfKWm8B4ZXSatpTCG",
  "key23": "3u5AUZfyCAe8uuQzvnid7eBCMXscmKorrHE9eN5bsfsm6ycmXWZ4yfreN53oedS1wqq3jaYEvoeKmmQL4ob4bxbF",
  "key24": "321PyLDhpNecRZmfD2iaaeBzsZ9UUbcuhmLLmk5WDEeXNJztBs3vkej3x5JaeMmBeiVnqYv3KNKykraw9LXjCh2U",
  "key25": "3zXQoiJMLgitNjvv7Qf41z3gXjdKFdEtGMRWtrh8PUJANq9Q8aqv3S3qXLiRxinLTuWtXbfFKsH6vKKP3vULD4sF",
  "key26": "2oWdXEt1GeSCdPvEBVkauATMZvsJmUeWhMAMHg3hF5HbbgJAjQg6yY2kMXk3Mdjor9eFckWuG8875nevKAFCQdxq",
  "key27": "5kToXy9gqeVgx9MYDj1ghqBh6ZxGm6cUJNn7j9H9PjKhTZBh6dAcjZpdptnx94BL2GKvxonZ4Ed2KkTcNggMC6Ao",
  "key28": "4b8s3efN9NJNsYYxcJWsBPQkB6KVboDXCTgNCReiYUP5c68mYR6Wv55iFi3Uoby3zVKVKvrkuwqX7ohdcLqi9oRp",
  "key29": "4cSjWT2ne7PZshE8P4DTwNox4aXWgFrmUUm7zM9sYBXiQJZpRDGGMjCg4peFD9ZKU41TMJfA8AannzmZSWzeSLq4",
  "key30": "32CJF3oG7BgkBHctgHSF44Ry2VQMr4hML2NWjhak4Zk1bjAPwGUxo9urKbyFo54Z2xr92iYyqCPhZJSPscEuDRE4",
  "key31": "umhNiiTrJEJQcxf1miYXV45TjMveU52rorHphKPNeLTzFSFpYf5DfounZRHmWBja1yejTH74nQwmnWGKGdSDaFv",
  "key32": "3eTcKB6brdjUuGfTzBqSTQSqdfL4qgGNHKGLCq8R3oBnHUXzAubMazYXgoyRodLD3Kdrpiuuy6PXsP9VeeKdCMP7",
  "key33": "2Cyv2TFMkjB2vf9ciSrU1qjVoTmssVWLqwxTdyA7mcyPsbDAHtsNuGTfDskgvi1offVF9YyTjU8XgjkswBjhqJDf",
  "key34": "3G26PSWA75eDfBKos1km4zr6xs5LpUhq3TCgGfKSTpTnB18RCfN9tVEGUF9b8f89cxorSiJjVaNQTzsQ4t3q2Lx4",
  "key35": "3BK37yfiiXqsTuqoKS3SoS4s9qJrmgwsiVcUbwjwX6PovRMhmEw117JmM5ck257nRnSkTCCw8X2gQLQt9odSVQ9K",
  "key36": "2xhcV8uiuxhdvxHBqnxsvqMwjzf7VKpbtbf4FknkQ8ijPSA8agN1GZxhYZ68bBaBD93zeheRnvRdo456oWvZv8Me",
  "key37": "4rWtxSNVZAzy8drnpx55trDqM2syvBY2vUZLT1ctc1sCEv8iQiL5YKa7zqW8Z267EX8mpW7uHL7xnsKydtQSXe1i",
  "key38": "4RBZ77tjn3vUbNAGvVpTykPsPDcevgekiSYXuSqZxeMoRnDCzpYgPeMjk1Uh9c6JjK2RVBfjAkpvo4bWeWrW8ALU",
  "key39": "3WrBw1EGw1bwd4vmcmuDjrNBn2RGLcAJvTgKRwTV8CBmqSuGUoBAPyUCy4TXDsbX5p5Mjhd7fX1Mt8TZS5DRGRDt",
  "key40": "kaFJtLU1RbXC9JLPtzxvrY8tQWMcYTB4HyvRNZCeeaT7ujoo4PXYdf3G9HGwr8hQxZwLXaid2AD5W5d4PnVefzP",
  "key41": "vEi3fxjnJRGntDd7HdhsLcBcFbXqjkL69nYApXwRMRCV8Pe3M64zegmcgtJLYu4awKFRu7rmEwwGDkSukVRScAp",
  "key42": "3nRvVHJJypaHRYuxrL7i53ZL7PMLATgAr9UbDeQDCumNK93oHWciQLvetuiVABM3HKfpEvSNH96LcnMxAB2QdYQi",
  "key43": "KANEeeYEfYGzENtcjfPnWcceYKqepzA6WQ2JDoR8y2M8eqZRRBsMGN11xinG2LnXLL7MguTBCFbfaw5KbKtkMbH",
  "key44": "a6YwFFotut32DvB5MqLjHQsZLiLcCr5NwG6situPACSQH6YGzzsKES3GRtCJbXXipcsQG9mTXNskRAYZ1GRx6jW"
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
