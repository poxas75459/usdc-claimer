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
    "5C34ZERkztJQkpdGYyCNcARWHs2JV6YT7e8bHxzKsfBHWpmr4592o3obqbcuTANwo893FGyhtuqRfzM8JTyFHB21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udEsjUMUBEXSEExJumeN3GraNuU9TeS21Drq4a7EgXgqV6ZNUr8TE5W6BW8ThK5VBxjdZR3RzuYHEZtvx7cYeys",
  "key1": "61iybmEw25iWi7cRSFue858AmA86JTmKtJu2bfuKdsDUcbij9BZDVePAJrDwAjK5ZuUmFs9bEpqQAr17aCwMVt1k",
  "key2": "1hKSufsc9auyfymccDhfFryBaStfb7JKBCHgwM89YNTipxaPG8PgdxggTAfzXq7BFPziyx8tDC54ard57ZxzFZp",
  "key3": "42pN73qvPNxNLf3iRpWjBkRVUv1igfjc4GGtXju3oBHYyzo1JQGrSNwvMtAvqRJLJaQisWYnEtDEmrbVfJht7Yw5",
  "key4": "zmXFVAJWp7nVK5yvZZo5KKZQHgbmdqSngE2ej51H1CvYganAJjSXn8HxghiGAF1MHMQdbPV3HGmnBY22J8UyNVB",
  "key5": "2aAZVfZ8JQLmSvWQuXvSauTGuYeSBmFVBLByroVpvgXzeAU4TVCeA8JSieCY4Bz15tNb7ZVGd4FJCfftpBnT75a9",
  "key6": "tj8LqB6HGh2FaFiWzpwf4h9C1hav9f8kuhMbFEjRYH5pgs37Z27vHv8ge4UkAfNnTPzXZRKpWbc3pFFfmg8jAHz",
  "key7": "5193rFn4CnDAeNUotESHKYoNUuBx5D2PPaRw3zVQpRAzRd7avYu7BkmgpW3EYhHeob5NLkipT5e4DoQQA982Ztbq",
  "key8": "4sdLdtzn8wwzUxnpUEz6Qn2HxTGVZYoMC1yJvXydiuk21DTwNBgXx6tXeLPop8J7pRGw7iFFA5ob8sP8667B2Knz",
  "key9": "5KeLnYAE1aEb3u8eZkx39XTxyaMvEjA47NrLiaNfCwgS4E2iPLGkQtNhmDdVVPqG5Pd6tFTgtEpf5cLCqxWRHqbQ",
  "key10": "4rCHFDU2eCxPWB4QtaD9VVKZhbXphV7TUBzDHpRiY7rD9ZJPuCHhevWHWdetpmkkXumN17d9CUFcFPLqnM2LN2Lx",
  "key11": "tVPWWdKU5fUwhorYcFpEkJHPEUzv2qgHgZGoR2yX8PuuT7GkPV8sWjF6GggY9FpLfSMpYBDZzgBd1HfQ3gbrxfN",
  "key12": "2ypg6Nr1VQ43mAjsViZsacbCy1aFHBsJdmcacRnW6YSv46jV94pTC8aYivFHkVyFeNp4o9643MCCsh2os85xMzRb",
  "key13": "iGCRdH2rRAz1kqo9gVuuL8M8T7eukRzAykwhbCAXhhycwcjmMyayS1ieHGUcuaXGbJcYAHN73huHS9e1bS5xQtL",
  "key14": "o622aSnzvt9gaUMdEAVrHzhFkEcFwrLVJJRES8gZwqKqg56SCFjc3TJbeun3E6m3gz57fofVQCPWZwasMRxqaM1",
  "key15": "1gvyT9jAG8vtXPYcFdkMKGGuRyK5jhbLNVWECS5RodfmuoB3bNzq1EKhoCddnsgzqYM81p3ceq4tMAomEkhyw1A",
  "key16": "9qJzWMT3pNQhkxxc7sHE2gpaAgwYjt5RGD6ovYZ9iPQCxtVLUTpmYpXxngQrFyGWZskDs3AaKTYduHwHSJkppM7",
  "key17": "tj1jBXmGHbSnWY4rEzHC1ZEyJfQR7RvnUxrTRc7iBWWPp2fRSAZzQpGS9vGeb7Sd1hHhvK2wYQojvyjndELKGNt",
  "key18": "2euchJXcGQu79c8oEXPpLjbYqAB5tRgv9BpEof6Ksx61E6LtJBXhpDVoRa1prZssndsBQr9PDW8gBSfQESGk7Txt",
  "key19": "3Q9PF5dAS9fBwozZAXBCMGVffdN8S99zaso4Accd7kTC9EjCKu78GKUEyE6Azz9ErFxRA2BphHjVgJH3KfjWKGYN",
  "key20": "59AH9WXcKrX4Qckyb3WMoEozNt1Cxt2Pxmpvq9aK7Hjsdxjvx5kkQST97fWhJQTtr2HfVS2ygZVKE7abxGs1izXJ",
  "key21": "PRdm17tKdiytjixjJGfj3fixpN9epNjwx1WpjZtp2PehSDhj3n4fcvGivRX5PaPSd7UxfiXBtrEkmVfLdfhn11g",
  "key22": "38UybdRUTikmGJiW2g6x6zC3e1RA3AHg7E1EzMQP94j6BRQqHL6MD9nR2HztiSyvRc8fHRHEWDuRZ8375S6VU7h5",
  "key23": "5wwNK74FGsqGNfBanwJJS73hcw6NHid5MaGF4RTJ86QdAqBr5CFRN26WR3isdprQa1FdyoMdfdFp2MEWqfqoWSKm",
  "key24": "5aCEg9SyFXU3vGKjPafWdaQrAQ28hHCKEKjFaTsjzLXCzJazEBaJstKDUDbawN1cY33skGZaAMQJTfCWc7PyC3Ye",
  "key25": "4VmmRLFe4cYeuikACoL9HJJf92FZok3fyB96eKvpgfZZepVQiFL8j2heofETP1SJguhGketPT7e1Dzi4u6bu1cgd",
  "key26": "3nmwnfRxWSFUYrU8YcHTdgjBK3YrvfDejnzjVBfZQgDPKL8aq9ynxBpVNzWmVrVsRna1PyGfmDda89kjiMxT5U8t",
  "key27": "27SRsBT6zzG2ARHwYaEtkbs5eUkajb9QZ9STSps4kgvvgVwZiKn6EZGHVKDeonuaEiDgWLLtDk8r1vAKy3w3hRHa",
  "key28": "3gonX2mm151K2udeKuz4W9d18yvEM5yArnhjDKKgFzPzSb9ZHtfmxDp9pZ4gDDWwUWsTKWtsCRGPVKxhQCVAcrTd",
  "key29": "3tFsGWBdM77u2rJxwLzz4S1C3k3dEq4sz28HZwGBBa1CyTTJK3p5tfGLeFt7iX5cQXVCpJYV9ihwdsLW5r2NoSds",
  "key30": "2zuBxfz9bCbKVtGj4eHsgvdTFvsub617dTHvjdQ7DA7CZdKfpdsbErsXiERegLQy2jaD16KML8uPZeM6ZqSJviPX",
  "key31": "4emfwwkGTCorQDeqpJ1neK6vDAaqTA6Jro4ShYaiJCnizWqAWaiRe4oYpkbyqMP5WZqRhsKpcN2tvy1VChaPHSkP",
  "key32": "qyLf5P22xqjbuoejbqoxi7mjA8yavd1fMtz21oBAASynEVcdrH14b4DszGDMXfFrfMBGgN6vBQFmHz2PgSxJnE8",
  "key33": "5xNAzSq37cRXVXQeAkxCVEei2aNPMYWcZHB5Fa1KcV6Bw8eBiTtCWQ43waxnGFRcKPCdmiyU3WUPoJxypd75SYU3",
  "key34": "4ZUxEWK9LFAMoEK3tbD5byERU9SfKFkjEVtQdYRsuPt4kKXXPsNWBfNMP3qz6RVsCFCDNqwV4Y83fEq8H9hFErv1",
  "key35": "WnCcSNRGdAxgXXgZfdETHsYZWp3QhRwED3rHxCvShCBvxzpAYVAeaHp4Sx4kTzMAPBQQaPPeJQdREy7jtYV4kst",
  "key36": "8qA8wgiN6tNgmzp5WSfiCeA3UrUcKc14JjNGpnxrYvWVTZMm3fNAUQQRwzD5jWDehn4somMjeM29PJzps3wywDv",
  "key37": "5B1bznTnVqs2feLiiCz7E66hURxtU9V6DqCy9sncBzBtjv8dLVshAGvRgmxEDK8dPvgFBxTwEn4vTC8EbM29nHV7",
  "key38": "TN7fLrrVV3X92CHq96N2arjphNm3PmcJkF5a1ZvEjwRXuL4wfXNej88CeNkNuvJnUt2pcNWr6n4MLYehUxGmSRG",
  "key39": "26kbB3aRnwo3qEoU7HEwKC4uLJ1NffFjzVWt6thmEbL5xoJcfi4ZfkPj9SwzUqAQqhyLG5z1Ntn2fXED9x3nNQHM",
  "key40": "3MFvyhqiKcUA9LdaJDLpNydUaPKSnFg4V8kAnzEJix1eLWPC13V37Fh8jNnxihVqqWya4wiFfhiLt5asinkDg6bj",
  "key41": "3ewu5EoE81i2d5HdBxrNtbcERCDV3cB6Q4MxdqghEyigJ2SiyWipZfdBx1sjL4qKucBkKXwstB3ZNSs5sveTRkZw",
  "key42": "5wnvV9ZeMiPomrzv3nXyJHGfdnDBHREeqnQQgqonK3RkQ5E8fbBNvMPSNuhDyNHWFDGurvBiNJEddbCcqhZVz2hF",
  "key43": "4esfsa7xUdizpr2Pe8CbkCDAKka8cZWzGhAmGaimshktzD4UPSG46ZsW61nk8u1ZDV79ECP4Jn8318Cqmo98TuqX",
  "key44": "4MskCF57muh8duArMRy1WsEQLHzwbqqUwLGvBDd457BbyZg34bjxpQNW3zbXmKYKzH67GjrjWfsZ6S7M8WRhvg7P",
  "key45": "5SzJCaKj9DaoDBwp3vJxcd1wfe63MjcADyMyw7VKDv9o5qLsUFqEnhXiLDpLoWhZpfNybsFMKaEq4BeLUGfLkUCL"
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
