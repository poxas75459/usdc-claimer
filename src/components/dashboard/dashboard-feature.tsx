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
    "5APKpHSmuoNfr5kU8tdkEP7aTGM36WQnZW6VZzqpRWG9Tec97HJz3BaDBDuHxWTi8AUvkPnAdx8Lnj84mTgx8ext"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jp4Aehcbw9zYix5Tmp4Ha4spGoUnYtp1jFM5ZerHPw1D17RAWjwV1yKNpAdVEmt6JqQdbpnGq35TKkM9QpKeLkh",
  "key1": "3jAYhRsJL7S3PVYJg5NWkQDQtPnkCV34aN9isHsHDQY8gqChgFC2CxdNTurZHrXp4oam2rH8WpbMqYiZuHYv1xhu",
  "key2": "4nemKxa3C7qVqcWPniwFoD8JwVE9aksAzETNMCQ6auLqAwZWCw5VX12dqRbR5vfXmPfzXH26fptZEMiGxbea4F7A",
  "key3": "3YoG3hbYSpmrcxSB4ZJ8XQijjMU3oUZYgNyBXvjd1xKdG76rJQokRB6T1nx8k6JURXWFFTFecs3TG4sJSWrksmYS",
  "key4": "38NgazFmJgh4MfMhbRaWwmbeXk4g29NjpLs4shcuEysy2KGFFaxprZHSLc3z5tBuTYGscWQvFJSFjB4vfo98DGnD",
  "key5": "46N9PJegrBmoYtsy8PMppWKUjmCprpQWkts3q6GdG4HAPrz8UjSACccdaMv5GE7YDEF7PPLfh7TAgTMW9bxn7YNy",
  "key6": "63yU67GE22AnpXC7XkLDt2EKKyVpcG3v7mJKJZjBWAip24kTY54Ft8f9Fp3Toa86s8RLGC9ns3r4uspCxhbNd2R4",
  "key7": "253nMXayZmZLUMaoJG7zzeTrdDBENctuk1cD9T1ozLPHfPCQxt9Aa3KRUmsxEBTtfkxaydKx3xMgXUWkS4qspQvn",
  "key8": "33KkEkioxb6Hbf6BTjT2RJg37aqqrinMu8sTbtRWfiygh8LGg1GWjV28qkuqP3uvFfHPxHh8Amtb9DMu15LF1sqH",
  "key9": "5jC8AW5kxfD4RRp9VgRAZwkPAcue6ToQodV7b5jH3e3NdPFXYEiiH2xjkpCfy1ThwkLogy4SJb6bF8TD3QPDGGjx",
  "key10": "V8b3VU63iWmpnyBsss2nsoxyJPzFYN2LZZXqBwhXKxrkvbye8ThZiSCat7nGt8hGzEyPXytQvuAqhpFkQSubdyh",
  "key11": "2eFLSpBS5rP7FvMjrnBuAjajPSNW7fwNCnXXgvFNMrbH3pSp2kSJBzR8Nq7vEY2b7dZSVy6Af5WMsEuxjevS5ntZ",
  "key12": "2bJnJKq4xrD6C1P7DExvGTZzD5w9B5mVn3X2wMG4j9hsrxyjHdeJji6axpmMdp9fQAqUqVkM6UFAW2T8wrASY7K5",
  "key13": "2whVEYbyRsVG4FPxFs2zj3xiHJ47StHziqCtEHfsV5mwDxzhYQMfyAShKmXc8DMYH2Pcz9hZeunQoeQ78cTCobdG",
  "key14": "4mjiH1iTwccJ1mwTxWr9THkpfZQ6U6EZfYkkC3tVdEp4j4xnAtEj3cTMiGFcAbzxFxPTVTGoeNPjQWiMkE781jMi",
  "key15": "4Y5MpvacRzcqCnn7WF8XEsAEbLeUC1i4gZsuFciV3drgRRCef4ys1vFomBmdEu65E8uT8T12oQpoXs28zoRjTCxD",
  "key16": "4r8aoiNBQAeJ1vost8A5sgoshJwSWHsMJcrEenj8jhqyKW9n4a3Ky3ATCikAD7MEVYfGizFsHytzYEQUZNFmFTUE",
  "key17": "42AN9JvMc1D1aiE2PVZYaY6tgQExxk5Unj3XUvjdQMfu1n3L3tY12fJx2JinRCj63S8zf2mLGkUjSPfMj3aRTEZy",
  "key18": "3foQYw5SqqLAGi1942tLyMLCwvVCtLbzNoVMa5iVc4KegpySwUgxcUcGZEJSYSyx8qVJB9CxHEHgqjc8nGpfmsaj",
  "key19": "5HRk3TqqChb6X5x3K4NQbGBcLSeJeNBi4v6FyChBG21h5nRmhXnF5xG2dU6pVL95KU6RbV8nb93uyaZeFKFusPtB",
  "key20": "5a8DQMZQ8XqGfHaEkqgBJUHxmvn349iQeYpXxRMThMsQ9RAVZmcondURPGD9umpX9xJGxkCubbarynVuPyJWWmYL",
  "key21": "3tm1KQUgSrpW8GkPhj4cfAzrQp2DYhXGLHrUUaqExehCfjwSkjoKbcQBA25thzvhKHiXC5E8evXgfLFniavTQJ1z",
  "key22": "JLp5yB2BgjdVB3QNJyYJUBfMc3zehPZ2UJvekvWwRHfMCi2ze6kZbPwe8d1TF7hmN7hKdZpvhoKVpVxRHhXraqb",
  "key23": "3bPM2rbsmnioQeq3ACu5R8iUBHtxFoSAGpQyVeRrsffnqpMuW1sZkNPAEwiNxqzsaZSSJcqZZQc5t2HGVgC2oSac",
  "key24": "3Xc4LdfFApXXCc3L8tdU11YXefsA9p3ezNasoDa67EABNBYt9uNeKFSoLNyZ4cG6uM1GhbcwWjr8nggAg1RHthm5",
  "key25": "437tbg6nN5GrWqF99CgzqHPoPxmBn6Jyd5PtwXo4HzVWjXSkS8sHVsCvxuoKgMHDSVQd4ahbMTjdULpMmp8qtrug",
  "key26": "3urZUk9QnDk7sThkaB4V2a1ZBrtyV43eKD3etUth2FXYVZd7kscpLSJpBNoS2cjUKGkZkE4Dzy9xvM1woxdBNavY",
  "key27": "3QZV31mrvAQC5FzKTM7Ddmy2o8KckGY5qK8BNfLeH4HWzJMvAkowhZhL51cNKiuPEFnBXLkqSPhKQRWH5gewkYDU",
  "key28": "2XahcGtsmszEXvvpbmvAkEyvkE52eYiySJ1vcQeAkTjzquu8PHBs9tLCvDbjM49zZ5hY2C5iK7QQXXBBGBWqeffF",
  "key29": "3ThX3DfarsMmBJAHH6P9uoJZGHs4GW8ATi5nikDdZCMXUH112qgV1yG8vLWuZCdDL4t8fWDovGzNwmocoXHXg4ci",
  "key30": "5PNxkCUAyP8XxqnKgtYDZ5idADCFW6sg4pkkuqgFvmWDPMe91hZvFtbvMZ5GwHY1BX83C5gY6XeyGWphXzjfzqN5",
  "key31": "3hrWPW5KSMQh4cZnPYMKHGkE6MCk27dGCmRj3WAJoeXwjTbM73ePfJNzfMBFvaPVBi8j2ZtU1snGAN6dePrGtLbP",
  "key32": "2dV23kEfdigtSZf2DkVAzVVfSrW4WSVWPtkRKhRoGyd6Khfp8Kyn8Xb6NjWkNnt8t5DTFN1wq2FoWgb5j1PGapSi",
  "key33": "3T44ebi4Hkxjppf46wHbLvqZPeZrX3tjzRyYC2RLCoF4DUgK9UykFhrSVsRPA9jEwoLcCQkGUg3oC1w8XL1mdSnU",
  "key34": "2rPuSd2nppSUsHqFhm6CsoiUmcavGaSNba8yagFPSVzDefMZMErGmx77BitxjC7qtGpk7S3mzp4T2uBwot9K4xj3",
  "key35": "2NFJCwMcepymfK8fiqxMccxCDrKZozVRrY2EHfx9MJy4gstJg4ovsTx3bgWf2tm3Kqo9aqrWBvG3dFZsST4aezTk",
  "key36": "2y8yNP1ZwD51MDmdgAnd6sJQ353TtW9FXH9uN92PgvUNTiWD5fDw1tjjuodvEcYyRUCCTvEbEG7H3r8triBzQfn1",
  "key37": "4CtycY1LpmxGP6eqZwz9wJ2TBH9VaSZ3vnj28JwMsNEEhfsjdCov6XuiYqmEr5fwXYEg7YNxwuabwoiyyceQMM8F",
  "key38": "SaBaFQZzMVUrgqXGfNe5Z3KRyzjGfHTdAi2iAvaXnFcnK92brqr2jciiYG2X8XvDXHEArUjk7cwvWxnmA4MTnmU",
  "key39": "2E8h4T7svXX2vHf5LbjvdkAwNRpke3EQtJQxZDu3me6x1afeiyVTuKDqb4QbMoEWHynz6yQMfk3GVRVjkK9wrXF8",
  "key40": "hsPiTw5Dyw1wRxKSgGxmxVFhBNTz7sGoUM4cxiM5VonxLWjKXU85YqiRDW6V1K9Uhu98pw1GfKSZDXzebAFB35k",
  "key41": "UumhFSX2RHKytTbgHWH4w6LtzDLt84qsgSpd1MZ8B8wJd52rW5mpLV1wofXdptU3CourskJBLb3fQyCmmj9upG6",
  "key42": "5gLb3Yy9VBZa4miVxtE4bnjiJynRyBDbBsc2wmTvFZBDX3763NcvDqqTE9AqWfAWhuzuxEWaBGdxX9p2oJ952XU"
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
