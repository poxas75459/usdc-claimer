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
    "3e7PA5P4j55WjBX7A9N8joWqGxjRZyXKFeBRGfyK9uuRmijWY2VJsndpsauKzbuk2QbcbEHTwiqjDhzDhopeFaBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54DXvZfTArdn994N1dzRbZ2y8noJNzSam8LKp5Sc6hKJuSUU7Bie2UWbhzutkHdLYpeoYTQnpRyofob7L1rbtVU8",
  "key1": "3LVfevKYC93eWw9K5DbNaZU4ZWZo6Sq6D4FWC2Ki4WZzHhnfvkwwoGx3RSoQFXPVR7oagD8HZpsbzoqMM2yYCNbS",
  "key2": "3JELcwF8Lzd1dqyrbB13Ax5VeU7ETJxmipccXqRSwhVkpZs5esyBN2g74qWJHb1RXHoj3bxteVed2dZJYkArU6iq",
  "key3": "JNnbGgB1YWtQGXZNpDB3BK1ccbo7FzLvf3ZWG8oVdB6xKHAen4ZdwKvhAHRohmC6vW8UYtnkkoDkykMqYYKtojh",
  "key4": "62cYUkCYaxrVTZDQ9Lk61b3EhQ8q6MTvyyhjQcLY7eJCNuYtdJvAR7wqbSh7zmpnBqh3ABGK1ydzhoVr4wUWsBQ3",
  "key5": "4QdeijfyimLvuUCoqSXyNqnmwMWtjezZKZxRnKDTE6ECLZmE99khe3Hqzu4NQc8ESUE8B4a5CSkWqrSNApW2Mrf4",
  "key6": "4KYpW1QHAzBtZhJjunDxHCohzFGT7pncmVguXxdaEFCVtqt79a8EgvUJCZfZxQ3KeyDJVzihkgbYkB3cDGSYqk5M",
  "key7": "54EcMjDnJqK7fWiVRwt4cRTy4hnBgRLBjEeTFbjGgtwkRZkV2t7KCJ7o6AxmXn217VQZsZLpyzS5qGG9oZ4dTfKy",
  "key8": "q2oatxjjVyxCY3RtePWrPyzsW8GGHL9sqKmnQ3EtCAkqxpFuQD7xUuKPtKKuA9ReFLMqw9Gkgijpi91pGJJY9PP",
  "key9": "2zwB23cZ3NpmrMSB5vui4Cv7CrV3KjUtGDTHZQyF9UikY3c3XDz6tamJJ8xtrr1tG9PFAm4ZUg7G329rE6hg6UkV",
  "key10": "AwEqFtUAR2TRu4QjifTuSw82gX6CKUXQteaaepctPt47BLJAn9sYeLFBPRLwHuKiNtDaDRdc3eyijBGfSH9Vzp1",
  "key11": "51nvAJ5gSpCRn5xXxe1ePU6iGyBhudiNdanhbQHFU7pkWPkvuPqusp28ygndpXnHFhSGkHcDwwFydwwkAYUcwh48",
  "key12": "4PVoZ7JTxWSynDENGCMrmVj3kwyMxhXNoHFfjnAAPYSfk1yLo4TdjDrtyGiquSV26zGTWFpCJzZVyzqS5Z3s2nwT",
  "key13": "TQgaBt4PfzWrhdrYiGTT8rEuicctFMLR1KXyHZCRmgpdSattraUjJTtaYapDgEnAftC25x4K1ms3p55YyZM3Zr7",
  "key14": "5JCkbwPVecCvEEhCRMy2R2WbHBWWm3csEBqfaN8et3DU9quGH5sVZyauYFYYL4m71WzGKcsYksr6skC7XrCkYtW3",
  "key15": "4hCXo6rzpMDrKowHtbhKYRLZheaRNYB7fBGaXB1mKQVZz9FCZZ5hfMQBHdFCeuU3Cgy8PCS7FGwV6up41vgsQ61K",
  "key16": "48qt4FstrPcVrLkSvqJJScnMmF1pi2Qv1JJoJbya787LWE8rXbrsKdhxe34BjLQqxq7e2z52g2ujZvGDU66pHUYo",
  "key17": "3TXxBupvnMbdY8nyaAHVPCWSNuVochKYkeJRs3D7hcCNki1YvLbpHdJH2gQdTxE7ViRpb2G9PrgPuQfxHzKBm5TB",
  "key18": "3VSqMM1e1uL3yxh3dcDP5gDMZ2uGCn5QBnzWGoj53xr25rTvLN992uCxFGsaNd1w686GGc8Rvjavv9KwDWMYZAju",
  "key19": "5pohEvDk7SGgtm2DWrewGTfTecAtVxBWye12LWiYA2YoVTRAzJzkJ9KjkWzwH2TPgSFPZGyY1woVxKws8EhU3KiJ",
  "key20": "3AjuJNFPNDLrVEzUm2y837FvV66uD44ZrNkn9dbryKB5i3NeiPFQTxuRiRvPdfTiXGmSBSjzfSWZyXu47UiYoktg",
  "key21": "2ubfRxYDUn1kWFkc9o7V3A5WLeZE5N78jCFNLpXU53jcGfgWZe5WqcvUCnxBvkucN9TtNDG6SKPxYHWHyq86hwFz",
  "key22": "22nYYwypSGf4RKQoyRRjBgbk7i9QZvmD7yBJaFrFPYTX7GDNJjJ6mVdrPDaPWwmsuPgEaqa46oUFR6hSFkgKqUtt",
  "key23": "5cjmAerGRftAWsvqWT1P3sYMSwPBasqtuD6g8EncNhPLuGAthHvC98UK4yCXmwqYsySGfPc2tAxAiwqsi322vhgb",
  "key24": "Ga4ygjj1p2osZkV2jNaYvQpAQ7CaQm22ywaGNtUAX4CppBj2PQjPAt3vnEkeAWTpfLgnJ6omf7194jdXUtr8him",
  "key25": "qRDsdiK4VSMRMENdj87kaYDtwgBMKj6sXJeQtLajguwbB2Cc1ZGUCW4gKnmTDFneofJd3Jm85Q5CyGLrKT7WGSv",
  "key26": "3dtthqfM7vVnaNrccnXQW3HUN478q7RceHZiE9Yjafng7cuep368ZW8xgcoPj7gEkJYz1fXAFrfcyxiPExMJqFML",
  "key27": "2MKh1egbcusvzBQg3VkPoiLingW6xsM7Xm6J6faKwMeAGxsA9UWin2USKdPjUJFzhUGGKfkJ9dAwB2ET7W6t3Loh",
  "key28": "2K94urJHwuRaTsVBqFMegnLqVeYbwvbDkaXijPirCWtuMYWv9UmsNx9A1fhVtDnqf2fdHZ2e1NpvJ42YpQxBzHCH",
  "key29": "2zeSsdh4V7aCAGdKXTofUVPbLYGQoAT2ow5qEMAk6FzMhvFVkdYx8ECdwMyWQnzjgzySg76Zn2ramBZKp5HN5rto",
  "key30": "4qeCZpXhmGzTF6yAqL5SnsfoPPDPvtHWeAwm6SEtSFTzjZjyLR8UwB2tSft4VxJENYDRvSC7tpKimyFFjvBzTRyu",
  "key31": "27EyzeyhYgDrQDb9KFr8ieKJJiGZxaBDdT2EToBMT26bjtMyjf5dVbKVW6gCYgw19XVGgB9eV4tF5ZFMheLZDEGV",
  "key32": "39wK5gc8tL8eY14W9ew5NxgBfPchnPGo1uEXTtn7rzxpnfibsvFt2TDqGfNgRjUzGcxqy5dqdC7fhezRfu94S5Ao",
  "key33": "x7bZw3LfHNkH7SteEeUTdMTnskU4xgAMBQjw6RECRASQeuT8iU8vXt7QxmPVkrXcQ5P6LjZY8tVpo7rx4Pd6y1m",
  "key34": "37fofuBhk1dD9w37gWtGLXJUePX5UQZcS794rf1qUJ5dt9Q3sq2RRoV2GoBfHaXJTSRaKpSV2MihQcNzin2QZmXn",
  "key35": "34EpmU9RCgQSLvvFHUmEV8ThrK9b7oi4p8ERr7vWtfN5HXbDbejXqxgVvZb8rTrLgpaFTSRtTHCrZCX7Y6hKEATT",
  "key36": "PAtjiCeUMwYTVfrx2ptMwGWDxPGi4f9bqdKPRPmJu7BMqeM3mt297eUxpzAZzTuw6vCsHnMAdZAF1e56veJKuAa",
  "key37": "5nXBeNUErFM6Cq4283Yo9tkDeccJaVHVtTkTU4JFrbiDwJkxBXi4frawA38UMbfqcqeRUDAsoNxyRtWtsPTPgaCc",
  "key38": "8VaXms1bSfaHkUJGyrRzDgMty7wd2n81JB4orQnGVJp99pD3QSKELWejhfKnomZ1QzLbCXqkfuqKS8QHKVHNjL7",
  "key39": "2TzMwvvRfwA52evKz7jyneRXjzzSPWi9LAky6ZSf937wMXwcgvHj24GyXcHbvf9Fu12nK5NHPddYLtmt28dMuMVr",
  "key40": "5Z79nyQQyG1C1WGH6V2ry5zTjcrJg56ESEXxMsrJ5YM7j8ot1aZ4acX51ye8gQsp7TuAgyihVVAEF9kATWkjBwoK",
  "key41": "2Kx4RU9X5sZiY5wvAFMWmMLaMXZK4Ndxawag1dHrR279WMWN5u5phRnadKSzNzhU3FzNd3KzD7CbD7hhDAD3rc6G",
  "key42": "4GVU2nuX2aH1bHHcb1iRVnjzeWgqm7hChEu1jNDGai3V3Vyd122wLVQGsBksAppRmKoYZjrrwpkHxbpyYbe9QaLC",
  "key43": "3HsUqRW3fESyEUSbvcVoihFVrAchgWGg5frs4WuNVHjvDMJtbBwxfYevwbyRkcjAgJ58qzvuaaLBr1sMQzBPGgNi",
  "key44": "wLmhh8UAA4vcVDDUH94JsessKgAu8wsgMgVccYkGcafj1WbSwsALagNSnkc9yygPE1sueaC67ut6z7cmHMq55NA",
  "key45": "272jNSmnjiC2U6Hx2toZdisXjgjdSpzsewpYhSdtrcQ3M3KE4z3UTydtiTxBvA3r5QFdqhLiEqNbCqu3vp9DeXBz",
  "key46": "4KZeaTAXeA5yikTEX7tvFfWSQdqudQN3e7yV6YqTaqKouQW9H6SmpCXPRVKbjfiwtZbHWYYtMvKhEN7mEzTnU3Mc"
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
