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
    "5wRMfiqunsjX4wKyVsQNoLKYH2Vkqvig6YDWMJYrBoVnDfJNATRBBsUQJuCSLf4DoDqyj2a9M81ornpWJ1DAxZ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCaorfqwobpfSr55uKEuLkVgeL8cZmvvx5HKW7FkJ84iUvkfeJ1rNFHSUYMrbsteYu8K4dnsQcXjCsdRaYnEbgG",
  "key1": "28rNJy7t7GAxtsDxL7Yh9fvBWb3FdjM9pdfCGfjnkD7f3KQPcxnrSmcfi3zgy51hMhyV1rNBc1Sc2ED3ZYpMoK11",
  "key2": "3XwdkdQs5Tip5HMFcyyxxJNjBhriyYaXnA8pSLkZxhx2p5i6SUUzow5zNLLq3WND3UxqkMtxNt1DWJTE7sJWpowU",
  "key3": "2yhrvMVEW7UQ7HmUB9ShdZhR7No4fgrMhqhmV5b5ZQU18cuVKd9smQektkRduyxsmfE7oJqu68d6jKtiQ2WAXhkQ",
  "key4": "4kMzBuanAe6dF4NGsukpX7uVsLR9P88fFgBdU8eTYBuGxRvrj14M3xqjYkhjVHSzphdUEN5BxeyWBefdXqDweuWK",
  "key5": "5qzEVjrmoK2maCur654HWSCyfNwbEGEDmjjLyDgrt7fed6cTLxjdh7hJB9F3casbyTYEeXPnypTRbL5CcoAgh9VE",
  "key6": "5PJHb2VJhta9x9tjwBpjVCfpYvBaT5arMvUnTDmS6amqFpHp8XNWPm97XJAZKHH6RHBe9iBJiwvxG6cKLKHwJVRi",
  "key7": "57WsDLN6LdQhKhYxaaAEC72CzvqxQFjQNq21PbUkq7xDvn4Nc9qcS6QbgDwDMn87AKVx4ZRagcX6KMx93kEqHyQh",
  "key8": "5GkKg5p5gDYQNkoBgs9eyATo7j99XsCtHSCqTT1Hb5oUJBJRCScZUo5dFHWwYFbeNDrFLPJjxU6hjobs9z4u31Qs",
  "key9": "4319doHMKPF7dzvuASs34b2uJAvnzzScMCQm1pD7g4cSYHkPvm2ycvU9Zsiz9k1rA45RVo1SaRzQyaR6u3Uxri9M",
  "key10": "oin3LnaWXqSVKt6uAgYurALfsWLPFpGL4ijTrToHdWNdGdR9G9ivNnTx4QiexWQc1gUrx5UfTwxEMozxook8oYx",
  "key11": "3X99srEi3o5xwSdtaahaPJhXKAfi7FpPJ5HxcT7osmLjQ2E4o4jjy4UAPeVMN54ToFv4HaDyk1Mc2EojVjczTu8j",
  "key12": "5BqbbeX94ZndmAz7Tuv41kt9Lgw4oVtSB31Exg4SdfpafZevrQWkaYgNTRhVACe2pJGL1GHvNodkrrprCG8Wcfhs",
  "key13": "4v6dQzp4FPpskQzCzP1r8ztwrpLVhaUcwVqTGTraVrqWDsa1Hommx1WJrHK9RZihJUKwhAeyXTGnDPKc3sp2xMYQ",
  "key14": "2toMqAygqDZR4RbtvXrpUBDJn2vJfEWBwvf9Nj3zy45CYqeSauaSraXkyXAFoxn3hGrm6PffrbL3gFzYTA1nxPQz",
  "key15": "5NX7AbgcMEqf56gXrrru2AMu8VHxwYVemdA9a9C9hAvVeCmTJTwWgakMgMEDjrqZ1gPEZGyXBNBYRTMexq4hnKwA",
  "key16": "3uGJU5ZKTkxeL9t6iakZXMidogitjJhjpspz3uYZcTxwVGyqyofZGBNPVdJLwx7kQTnujX77u7gbmYqyMuK4nsj",
  "key17": "58trndfK6r23Yfz7V4bBW5TR3uF6o886mgvAXVrqyp11Ncf6wJvZU7bfsM5xxhQYFkoejMygK3h9suNDnq77AJJt",
  "key18": "UWimxVvLcupb9KKx1PnUzH5v2T2pw3MJBAaJ3i5LTnLn8KkfhUsmDqtivZ4fvZbGAjPrkNi9fAN438GfizmoZCJ",
  "key19": "M3dnuSMwYf6TNepSoCsf8KDPQYgx2WvmjUT678TLuQ9q6yCjawCC9c9Szj7U6btagqXrHgTSiVjZPCsSEeVzvHQ",
  "key20": "5fcezMFvbYsKeeoozYD4RdLCjQEhjVetNQZjudKbwtuPLiRZU6bdueydgNnuVpw47XEfA2VEN1aKjgbkAFJPvZ3M",
  "key21": "VV8TjeVoZph3pJYEomRwEnwGZKciCzT8iuygx6RGZQX5tS8vJxDnUyKeJHVtoLNMBBL9CmqmieAPVU6MrhBwVti",
  "key22": "2isqi14eqREgErevBwXS2JXDie1btMNcAE6GgsVwwq9CJCyLktgZzzoUPx4SDnjVujSKUfBrEQkdbYTdZTmDMQjT",
  "key23": "2RisQMZHeXMdS6wpSqujFjkrbdPt5LpSFBr29rYDUy4UJcyuaYvEubZ5Jt1deogFdLwYfddaSZCzofo2q5Qj9B81",
  "key24": "4UirLUQDpyjhLH4AeTu2EkXCnZ6QaBUN7uudWqnfQXp36nXwyKjgXqKUjQvJku28BgxH75ipeAkU1McqyDBgyUFT",
  "key25": "4rGpYQXPBekAPGPUSA9Y4dw9Zetq433rHyrruC1RnykcXZ7xT3q3HtyweeUTCJjReBjQvbrvepbgTne9rmuq5CxT",
  "key26": "3xwig4QN7V263DkBAhE7u1ZVrphm9AWFrjsKMTr7Fm5eFj8ffH32hCysMNAUt1vxjQLGxYnJ1v3yWmFNmXnkp558",
  "key27": "DjvdnFa2RF9ZuLRkVz4ktGt8CLjeKWymKer8xtUeJ1AN5A4uEXoEL6sq1AQrP7MAUcWkKgfM2k4k8X2GHkhahU5",
  "key28": "4uE9E3M1c7ZG2qLSUcpNXFjASdFqDL3HpRMBWxQ8n7bL8uvC18QWxoxstMSqCeVsy6qRsDd3BfHvgDiWWWdRDoaq",
  "key29": "pSxViftooDTGrQgoyNonZrdSFT3WGNWahi3TbmFim3a9ZE7FVkUD9Zg67tJabZ4de9grKF5NifvN7KcXX3WQynC",
  "key30": "2HyMy8xTSisXnXyN8FrWxkMfkKsWXv9y2EdH9re7grKVYmUp97HzQ2YvmGjxeYX9XR6L3ZfwfVJhZ96jjiDtwbXv",
  "key31": "3d3Ruu3iKXHU86fEXr3Qt6dzctZn9xmRKxL5C6eQHuJL8MbAvitbmUq6XkyC2fkXr7Giomz5XavjxSJLMJ1aQ5UB",
  "key32": "uGn7vxGy5UjrpXZ8U9PWiJs3e42RwiDKGKM7CwHWN9mZZ6Vg8RdWCxUdmbf5WCrjTaeBmJV9VKdo1bmkZE6CzDQ",
  "key33": "RBC69UveMfP63EkGyi7GynRAQoWFZLxRn9VW5b6fqSLwbMKSkC8dFmc89KiW7Lm3gfX5yTphX5GNGXwqkqjVJoB",
  "key34": "3NT4iBopz1ddzecP84MHVTCNgroJYxCfMqACfPkukFewjAeh6hgkJWUcg1zBs5Dy5wc4L6wvz9tHTgwixwHAk6D1",
  "key35": "J7XSrsydyjm3LBb2JbVXXpRT5DZAcaWcMv1B3YDfzWW86Znf8dCi6KiE7eWRygaJQ88f6wzCAB8eHTGSEZkDUkx"
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
