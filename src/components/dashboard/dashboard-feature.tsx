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
    "3ABU6detV6kRMNFk9YuYs4k1gxHhhG7oxHJwx6NygWH4DUrPZQ2zHPCuab9exnpqMmu2dDXiSTTTwrH9mB3dzBvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juRsHDriUT4pdVkPVC5BhAnoy8HAjGqfGtVdDkVTFEAvtp7tZtqf3MSoBGckLW5Q6uQDrUk915MVSy2h9H5Ko9o",
  "key1": "2PafS3WzoDA5Weba5QKwyi2ggcaSiF9UCSBawkcNNfQr4Kxs13erG7TqmPC53LK4HCkA18YintBRB3oQiRyj2twV",
  "key2": "4UpASrdQWWqiUGWSH6Jnyy3C6bhLc31StDPv5yam8dfrr7RCubhdoNSQNDz3ZrGL7NzWm4gxiiKZN5Nx3drZnnW9",
  "key3": "4rY8fb2YHhWxTM69bGsTjZPN4QcqKg76nCLCBNRu5KyUgSy83N6dYhcmdymFSz2FFm4Y8nJdjfRdFCmWhTFDURLR",
  "key4": "57W7xpCrNDCDgFMofteiz5ekL2JwGMZcorpATFAbQ6Dz7ZygoeKdThkJMGR8E5YiCjtats5DnkE18nMzZPmHPgjD",
  "key5": "aNLDTzULo4oRZgutAnTm9BydAEVrtWByyuCQwc6NCd8TASZ9toGFy38s6Tfx7RCgXYimCJh3fRDGJcE6H5k9t7s",
  "key6": "3Vhno2GZfisG97S4AojMrK5Po19nm16pYcbHWso4S6mBHiyEdLnoC3m2sCqGxqGGQdd1xL7L8juApx6uxDQvamoe",
  "key7": "2bDEQnzmonJriGZUDEzFg3aHqW3gBJDske6mdYK9DXgUtRQioYmXAoDzMbZ7cF86bwJoeWSAgPkt3S6uzJi6TzVG",
  "key8": "4egynqZTXN7PsFvwJGC29MD4tcgEByz8CYUn5DqCpU1azTYpmWFk7Dnp3bqZoHffpSDzn4sQKPKF5Ai8PwB2dcBj",
  "key9": "4SBJ9dnzNsDyhcsWdaaMk949NprNFyNL8a3253SunkLjHLSus3TiFvguqkJcTeyGt3JYKLXNjjN9QcNutDWbPdK1",
  "key10": "625p3pXi9fs277o7aZtqCTRpYcn83UNKybkG9JrQW9uTCww6XyW8xLty1AXnvcrrzBoJ3yfuzJGDTojc42wppiPn",
  "key11": "3sxK7RzJL5gFAFh7rcW1TmKjg6qhnH8K7F9Eyjeco5kgUGFECZWbNNoL3ar42BUcScmr9JontRetALEZPAp2ZZdr",
  "key12": "3SCeUFUziZJ1VcjSfXYBug37srZgQCS3NBQuDn3FzZoGCp3Pt7edyMjvGV4Hpw3w3aNS4Rms8xd1Np3qWfwN9Unv",
  "key13": "3w7ZbYXPUn9HpDPYguSGzhJiAkzTznWuRXRmnncZcFephaMj1o8ZvUmJeQufoEQCChufYUeMFjEYvbEMvtxXP3b2",
  "key14": "4DrMLcWyR1N3cBb8FsUHxS53DjQsZjq48ja6SonJGGMZZJoPeKwzFQgmwuqC8pZvX4gMWdGed5Kr2w46d7sY4ZCo",
  "key15": "4keATHKqN6whFVhFaUBWWqqZNeJw2oxzHcS1Nw98pCBmr98jZ7zAkX1PrqyyvQazrT6DREovKZCnJ49J7P2gRvGd",
  "key16": "5uSDdmQR8vTiz493jv4heRGB6tS1zpg3msYUfMeaSLsMGN8XHupzAYot3feKm8zCCvf8WxXSkhcK9EwaunuG1jCk",
  "key17": "3kEipitMyyNYauu6BubDwQsqSRJYPaV3rqSiewNj1rFXnQPmP1h3abzco36SymyLVwLuKS6sA4KnpzbtHHtcaxvs",
  "key18": "2LKQfCoFHs5e2u9mhyji8BDbzQ6RiL8ABkx4T18Xt6paFVtsXqukGwV6rUsFwAgMS2N8UUyKZZkcXqT8i1pgPPh7",
  "key19": "2htTXGT1RRkgf5f25dEbtc4MGfHw2ETVTskkQXLmDc1SHV7smWNabLbCGAxccmC7NnnpLhDXyRemxmKKWSF8xeTb",
  "key20": "jFM877CKq1kBwMLEd7u9hB8kbe5UzWkW2JoTsPaEPa3hCSUbVvSFkwWe4D5mrkhq3bYJzDQRCnAMvXyNCMirgJ3",
  "key21": "t7ikKJi9rJZQDmKDm63ppNQvCwxCdSbUgBfTsrFZZRFU5YtYXm3jBvQaLhjhp6n59WjQVFN38uyoDxV6Z5Adaan",
  "key22": "5p3u4MdJeS6xxNhoRwoerZg9P3CkQwDHNiothg7NArp6ndCwfxtySuqNW1LgnSB5rZYFJGhMZiQqA4JMJFc1Kjvj",
  "key23": "21ojrXMua6pWbdeEyUbQgzSBhUQpiZ1s8RPMeMgKyhResLipM4Fng7TqTJtfZRZC6dJKHU2brBJK5MezRMS3k9y4",
  "key24": "2uGLczEJrjTzeysbf1MudxaaK3Vm1UZk93EkNvhD3yysbAbJ23JB9cob7cNyMgnzE2VKWiMABnG1ThhgGdoWVrLN",
  "key25": "A965RNBF1LTGuPzMzowKLKuhRq4pdLWdJFgkqwvuJHwwRVBP8i2T2RHByGGEmLD354SkPnSQqPbGVmpeTWReK98",
  "key26": "33C7zPqAKrqFzcdEM7H2WdjNYte9jGwRuP9AjChQQYYtweWcSeCWUSvvKQRYWbPHRPw3hLZ7t8KeZi1u572ipHDh",
  "key27": "3wgdfndi49eW9oppoQg4TtqCRS5eRHTqZVp7XpS58U1gMa8GcoE4hkmizow3yuZhymUWfAPwm4mzAgmqEF6zXWUM",
  "key28": "4Mcy6wrhDvPZw3t8oWiZMRYnG1WvZ1j2B6QScNrJgzeDQoKcMgxy1CTaqNwJ6iScVffdM7XaMo7LfWj8pUkUoWyo",
  "key29": "3i2fRw74P4odqpfeopKxpFBepbC6nyX2rTMzoSXvHebBZh13AJXGiANMaLhuP48aKXgcDGfmvdiupdkbLaEzo7RA",
  "key30": "5pGobtXD1yiX4nf19xSiXpttk5mK1aGz8FxrZxEYUFJuPafzBjrwoH8rtCVuxYH9DzZpk7V1fRk6MBdp1X4abQTc",
  "key31": "56SmUCptgGaSYg54yirSjKi4t2NTCKb9gRXmYJc1cjCv2srjsSCjzkFCoqXPR5k6bdU3gBCfWYL1u9cp6p9YW7rX",
  "key32": "3jnPezSXJtmWWW1QLPRdCN3JHCZGVFQJCnH2ZHmbstwZ9zuW875d1jzjpmxrBdik9mhF5ftSaWddcqMFxBACFyXS",
  "key33": "5urpwJtbjHuh8FeGM7Cyedwm92weAhr6XggBSWQu7d6Jt7MVRqqFVEyowzs4SZBxg7UUPkCNXcfujSGBr4iybupj",
  "key34": "4Qo2wCCy13AzNKkAqdrsABH6HhH64mVicCkRZvmBeSLcATQJa8z3Y6Pg5aBYY8Zh6Jf3D2TqYSzCnpdJRjBeGuDp",
  "key35": "3mUiZbd94GnoY2qzSR7UJokqJe1WhU65pznmF4RUKEU988L6hvdfXvSoarmgP5kRTdY6NvvcFVzdfQLQWbYT5q59",
  "key36": "5753TFVa8aaLCwQAyFsJi1iHPheC6LUTqKWvLd8gL172ZJkwyJ4YA6mTkgotxFP5gwW51YubYiKh4J6P5b8Jj6Ri",
  "key37": "3pbZfCSEqYikFu6Qyc6HoykoxoHkkw7M1moyhZcSsGLcmxwXQY7re6EAKqoZKJqbkxkdidV3UG1KGwbBuKhuRFPS",
  "key38": "32Z3XX78BpmseskoWdmoCS3KAYxbQPQefQsPNGDFV9ug9mcXVRctCj7tsaFinptEUZo39hS2k47NRtopkAVUTe2z",
  "key39": "AzatPHN4ExLTWaBYEipuKUcp4j4ZAEqr36uAywMWTTrRYpmMggrgQXTjPEAiisnysnxM5fkbGiXpYMQyC2Y2Lu1",
  "key40": "3STFpdAGx9PGEJYx8BHY85aa1KaobtMtzHqU55GaiNSuYxTNT4Tw5mfktGL3PYnP36Ro7rHhkh8zRGzatDZrNJ28",
  "key41": "595ndVyR2teVH1mfx7i281mCj316aVD3seorB6YxNsGSqT4HbbmqY3Bs3Z8bHm1TNp6a96UrC2VuYrXEMsUQKmNF",
  "key42": "2Tm1zTyqsL5v42Ha3CkZLW8zxZRqtNWD542HaoiwPv8ieKpeftR6FJqMhjqKcVHPb4PgmgMqr1B9HVPj6idtxh81",
  "key43": "5RbUz7mngVArQV1yBELLKzyS2JqtUSaMbNRZ8Sm56gdjMAPnYaURJYzus79oUPKLnjCpTs8AbyWm7KbyNSqTrxzk"
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
