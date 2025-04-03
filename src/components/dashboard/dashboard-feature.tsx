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
    "3hRu1deGm4qXVZEdx32z1sxxnCh1YhqTLuQXrqv7ugoBkY6AS3LrXKXWWfpYxkHVNsfwnTN2Qe1sVP7DyYLd3yKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUgNdKLsPkrb6QQNXR1AXCPJxE4ka4hWw4WLToBM1BaTGYcdpo9BEh7WyZsNihtm6XyjzDoa2WvXWCcGGf6bETQ",
  "key1": "3XSxPQtmc5RFAMc6qdVDDE4gPGqyWxwc54iCjALitGwWYYsLKaNMYHepBXCtkuio3NtD4hEF7kzXGtbSXzfkfa1x",
  "key2": "4gA6rzUspaK9X65FzReSEEpHKodPuMM65ouHaY4VeckyZEqNcXUPfM6HkXHUjD29iYcP1Cqgi6LXukxFLDo2YAqN",
  "key3": "DiFWmfernf7tAWnMnH1W3CEtwFAnrZAUpcB2hJpP73KQKekQjR4QX22wVbG3CFtkdfbV1YD1M6ZZksaGoCWdCqN",
  "key4": "KKXT6qtQgarkJ4v6uF32TuRd7NY8VFYTgKuiZMaPND8sCt2oP6Gtb7DnJLg3nsWu7EHnY17TRwWkjv8MrxN6Agz",
  "key5": "AM2R7tgmhR6vbjKs8c34LesttPy4PTR4kFpomcFYTUMcuPkxNjJpd5hvnj76rQFvAVC8bLo4UVvS2b3MVNfqt18",
  "key6": "3XKxdQQ2481V89hTs2yDDiLw4Z4rdft4C6yZEqwizQrxsj45MSHZFVWrABV1sYU7j2MGXzqAh3eLFxYuW6Lrh3qj",
  "key7": "iyENRXTaNF5ZaLhxmWj5gXeYG3rDL8Gj5YTU42rhtSWiX7aWup7eE6aasWvkE6mAz4hgmGX4SkS1BewfWkjeTmK",
  "key8": "2gX436TJFVLAgGMw6hjZrx3vSiwZyojxgP2VbiDxYeVpcJ9Xfx4CcyJSww6hgq7aeGhi1747mvGtAFTDrNF8ZVVn",
  "key9": "3aaWW5SWM8VxtoJqcxHeLfqqLhcrrCKt4ofjgCkmJBNHWifW5ePHhBpwKnDdWC8ksdydjU2KpDxz6yJRNXBvTaFM",
  "key10": "8LXP1DZijWkWBvWvzp122BWJyrAh4Dy3aFK94tgRzCqgm34kovgDKieC7G5oAsWkDNKWtJoQ57sfUrQUjezsNam",
  "key11": "adx5tn8UKK3ehbTAPVkSjYVmvJpLP4wuvdnGUEUT1h6xfFVxFckQNgaWDqfwTr5ufYVcTobGpgHAfsypx46jYug",
  "key12": "3ojcnVV2TF6YV9qCvtfJviqNm7ZeqdUKmyEu2zBJRoWAB4EEgNUp8LXPgtpBd53BArGy3e5R74U8rePbF7qUvbve",
  "key13": "4o8Qa28ELjGuMu9b9VPG42sfVz5W5A79SP4tohFuZLtpAyuTDRgM1NzDzvLnq9qt1ckytNsuHo3oBF3RpMDVEceS",
  "key14": "5HSZZgNcXTuanXoFa4jjQ1DRvCU8ZTigA4BGcDxjiRuZr76TmevzKmA7wc4dsj3mcBih3cLtVsdm5mcGxsRHWa8g",
  "key15": "GbHcxbzX6JbkrczDzSzw2nR2jDGyuMqx8ohFVDMczaoHb8bjXXkhGAAEz5DFcVpQLz2kqCqdX4fa26myvGSswNi",
  "key16": "YFaSNs9dHNdr47DSqfo5t84GHq19aWRWTYzmuemaikUh25pxcQ6Hdojuuyczs5emcMA4Lnp2ef9wqm1GjLRstXd",
  "key17": "xEVR1fZWER5CSrc4rMzeWqBWX5ehBioRuQNzYUjBZqiH24xFwMsVkYjZQHJD73vciW5Gis1vFEArjmJpjpsghNY",
  "key18": "5C8AzN5tVCeeQDBNpLe4rBMECrTkQfnt4pWivReHh6acnCRw2iC9676Rid7NxR5NDvDvcrmFtMbruqUwAzDiM45i",
  "key19": "2LmoYEGAR1hKarpiuozC6oLzd2z44eeZKT7Bbt82YoqDgaZLZKY1ZYf5Lg34xogW3zm7TBG4SYtggm89hatEPt2m",
  "key20": "5iDNbPNQ6A4sFCwakP1cC8GcTvdV75SREwF3x8xfiMnDySXtAdztRk2QYMYEVsUiijp29i3sjGmxZs3A8Di7dN1R",
  "key21": "azQdP1P8WuwoLx1xGgoe7xKFq7Hhzb4nghgjM8rL76dnPtWMcdYPdbPWsfJvkfUQBQBgiSXyqdyDDHPRxw1SNdh",
  "key22": "3BicqQxoiENg3Ri2phG6rMqDaXfy4KMvJqF7KwmCPui2sVqUUUkvYhiqQLtZF5tjr8GWN8rQuyHv2vr8YZMuACXP",
  "key23": "Y36UKQzcbrzXtHFzFwEPLnBd3X1mFhKct27AasamJgQeh5mPNRdrJxp1HL9ffFNcZW9rCAd32tgJQnkxopUbAzd",
  "key24": "4ARs7LtR4jY8FSfS3RQij1SuxQ2RfmzzrkMm3ojqqsAnkkU3N3yYou2tv99dPqs6LQLfMZHc9tauvmEE6VA2eQtA",
  "key25": "3y6CU8826cuDXnHEAyrmPMuH5n4JSWfszbPUxHyAYetgZsbuqDksBhkzaT2bAF6qGrtUTXs7ZfhkKGp28KZpZhH1",
  "key26": "46LhZi2Z3h5pRhonFks12XgofZWu5XkXh7FgaFBpMiVJ7naoaiTf7TL8dkQVPbBrzXJZGBUVdDRFdYo7UTs9fV9X",
  "key27": "3F5RriyXSNg13qpSVn65nDELYfAeMDsbK2gJfz6EkpU7eowkQADyBa3QwPSBnudxZTheBnQ6VzrH8hgKTb3bWrge",
  "key28": "3iL8DiervgT1DJxEGWAEDgUKbYaN5jkeqTxnn7wtmpKqnJNVcNt4jNcez1STU4GzT91hFUcGDG9zgjopJKX5Jtj3",
  "key29": "3L4uqdZu2o4uQuea2Q2AuLWbqReANHbtWjP4iSfYAx3i6e53TqpKJ97yJX8w8mLvFi6hYSKFTQwh1GCcENfnR9pU",
  "key30": "2xqaYPbPFpNqztqXNimYhaAoiSmLExef3mQhVkxWoXFe2h3LQKcpw7eU3ihQoSfRWBwuCiyqW64mu9y3yDjwgL3R",
  "key31": "2Rv4G79TvyX35KAEwQcqYcigjfhDVxLBfcAYHB4zfsR7qvDsRpWpuhdRKmXLkgHFpzoy37zazquDmWwRQTaBkJTd",
  "key32": "5o6f1AP6bgG5DPqBctYXDwTeC8hVLjZwwcq3SsSAtCtpNj5vtZNKaYEZQ5ybdCZoHAr2FUzrHqQckxawsCJewToV",
  "key33": "282Raf3zZe3QrL92Hubp5CrUMHbrCxNnVECdqMVova3TMjFokxny8mgTf2euF3pKpeW6LiYXaSPdb6dbBVYYRoL8",
  "key34": "4XyofrwHkHrqdvbMyW48uEBpUr7RtQDBFA1j9YbTaWCRb3LbKpJNaYKeLmFs74fbxM5DZxkgTp2mcSV6XMeoLspH",
  "key35": "ErsiRe3ZiF9yBxExEd9k7NLAToeKM91tNFhdGqbfZ8rict6oDEbeHk1C2DFbYjYJ2L5PXzeiTrYUZfrrDSUrTpK",
  "key36": "3AG9FppAkZ8GZBF48636jyRXZSCSnnPT1T57DmvBUSZMF9WuKGtf5DVKd5Jb8aXT4Fu1si9fo1EMbizLR6bNvicq"
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
