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
    "3gAVspXYG7G3pe4C5hwUNXiGiL19YhcaNWXQnU6Q5RKz5fSuZquPhfoRrnV17KkhSiQQNUZqi8tNKJC5nWci793Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j79bsWa5LMbSFwZuxA87SrPYmfdZYxoJHXAQZ47ZN7Xef9pLMSkHKhfaQ1ZyoqENfxe4Cinb3jMYUcSPm45zDqo",
  "key1": "5Y3ETQkNHqbmfXubuBPdi2fjLqzPfA2kT6qkThLDbqHcxcHAi1Rd4BZS27qN3KATv1SFPGiYtsjuQCm4XzuDg5pk",
  "key2": "3AbpJ2FzyF2qKutcopF639vroRc1yF4C7Mn9Sza7xKqa2agSveCWY3KvwcsUD93HGU15ABqciJhhEPrYZFrvR8m3",
  "key3": "3FcPc9ozYZ8xmfhNEup1W8jWrN4ATpqiZBkj2yG5A6brAS8jSCiWzMsp2ruC7f4g6ioH73djGAdvupjLUVM6ffRj",
  "key4": "2mN8HohTK23nM2xY1nAeveumxhK4d8HWQKbe2dFx8J3xiLdvgvgGYHzntc1tRpBKjDNGpHahQxPEX5hHcaw4AtF6",
  "key5": "2GrtCjTxHeSYmCFJEwQiLNvCSDFzzC3vwZQxr9rL6yWAzfQ7ZxNp4yM3FfF5s8GxtqKnkXdpENoKBdgqSJjKDbL6",
  "key6": "yjtWgpwaHYJwPTtQ9A1AGVZTFkKAY8nFBmqVT9kdwDLaN8GUZPzECMcmgadwhCZdpy6BH1oUkiVnrEH97qgjTym",
  "key7": "3C4tA3TMuSjzGvs9bqC9F1KBqC3haE1WGj7NDVZUUYioxrnfcK5kQhFB5YM3c4B3xuSZuhgesae8brH9d57uXJ7E",
  "key8": "47jhDLfUivCQJK3hWLSZtbswnnoMm3yjhKNEbZeK9dtUAmYUam6AmDs6DFPofVvQQbgy2tFPGyxw4NtqrdtKsDsX",
  "key9": "45M81kWx7GL42K5bHxAtPDXnLL8edSLGRAi66CbWGXPg2MP5JhRZgu6JDx7HFACuanexBbhdMr8Lpr14XnojZJqc",
  "key10": "2R5RtVbu9VFdCfzMPvJZedYSo3ckcqWYPuUHjjgStd4bww9CZzt4mswF8j5B1ZBDiCeDNHQqaJniyPTCTzsEqVrU",
  "key11": "iiSPetTJqFegaxCWMYXRAtNZCHEmz8PLkqL9dusMfzByDtL8UsPdYo34T9z9BcUGnaDjYxC52k1BWbVwvr4Ua4Z",
  "key12": "FhYEyQF4Euw24HngHXf8xLKxK5D8ixFGzKPkiYLNMF111KAy9oqSr6i3C3SbktjcGGRs3ZAdo1sQAijH2izLAUA",
  "key13": "4ydafQuSV39ZCsNJyKFHJdzWeiWG2oojnD3MwzQi1T5R2VL3nUUYo4KKdLAEp8WpS7DtAT8JKVL8HzGjs5RbMU34",
  "key14": "4KZmaEfKS6oviLx71z2hfiiPSCF5AktoRV4UPxS5ggHCeGk86t1Q1XdAGq5uBsr9zjqbP5mv6sn9MuTJEu7dgZfZ",
  "key15": "2r3RKruxUxt8caZYQTCE4ko2Riy1jh7XN7s8ibLZ1ZQk4ZN6LQE8jkv28QN7aWvCzwXimdTgTLkjBQRQLT8SPegq",
  "key16": "5NCrMtK9pWzte4cqCFxYX5SPazLypu3AbSkgsUBSkvk5r7au4zKMPwp2cw6f7ZD7Y9tDZGRLKmMmJQSraLKRCdZw",
  "key17": "26hUMsWp4UQhwaWL6xjZrL6anCKrbBMRxMUgsxjTP67GVsKeDUzA7qPKD1q7AVeGijXDk2czEPres1abS5gdV6Y9",
  "key18": "5JvpyXcJQc8AqbPkEAxrR5T58kJqupdryCLNb4eWnAqYDg1hWPxBpmD8Bv6HMK14MC1ZakunXEsTSFzxE8jSAvnJ",
  "key19": "2FcXGEuNQ8GYRHwLm1wuWCnuN1qSNVxUkdF4jnx261VJ1u3Lb1jGpqEug8VHLcCAbVem4fsZMwAcaz7FiYd72uaG",
  "key20": "56A398Z7wb1fbMb2KDaGcLhMt8yvreQXPYaF3YeACbA6inC63jczapigMCdZ38iQtgvo12rgeX4cBretf5RDdY9q",
  "key21": "55t3cg1FBd4SKUhF1W5qUNSJHTw7yFhTdX5Uii9DKgy6SptZnsv6TopZu3YH4LFQFQsFB5AXeYXJqz3YGfgB6H23",
  "key22": "4WvKLTZJ3RoF49yfrrJ6maiivJYW3zTHrESmEnScXZakkUomQuT46676sXRiAsBBWHYYQzasZSP5ZsZoMyZeWCzn",
  "key23": "23YPWdZX3VSgTyS56erfrvNFj26mBHZtsCVMcxdk8h4jiwW34zU6CogmCiwSBHpkYHJD565F451Hs5naTqjXVHqR",
  "key24": "4mYVMhMtb4YEgjHepgA5YcVUr8eSL9eWDDZtNmRYazJ75wHfx1nVuAfmf8qBbAM3iWU1AMvnsgtEV99qhcUDzXg6",
  "key25": "9nq6LzJqMyHaZWiyy7jwHcYnRwbMw7P3V9PPc9hupoZS3gnHctsUZLFjZQjbEeP1wh3ATTyTH1Ut8RKLVFVb9ax",
  "key26": "4sKBfm7ubxqS989g5c6YDCTGJmpftsYzY8DcTzeFjBkwsEYQT97d8SLPZzKmnMdr6MKsEX2JPMuM8Mv5scuPXQjJ",
  "key27": "2v9QhJLEg2KZHQST9cpPm5oUZKNoLZMEKjfB4T99SaMcSZe6SmyhFqQjRf2iLJYX5gGiy6aoPy51kdpMNucWe8Ca",
  "key28": "3jWN8Xe98SGbHifGLQHa4wgwenXBxrjL8KH6L2yoF9fhzXsZfo9MbBtRYh4Pd4zjWcpzXjNneKYj5ctngK2xTvPS",
  "key29": "2YVBTZEr6deVN1W3P8bK9ETxZqAUDzELTMP1SJTdswBJhF7sSxogDiXQsbAyTiRgt2YB7STyM6NLYB8kLxYL4p5i",
  "key30": "5R9j5uKCK9RZiHvNrSiPBUkVnuZEGJRzs9sUAtJLBZTMXN57soh1VE91b58bRPCDhriWULjcs7ZVkRf1u1cbWoCu",
  "key31": "2zQcj9egggWvqdwuDbDSR9cZqweRAutaAAPN9jDyPwWYaZNyX3quvVKQrx6dNo6yqu6jAxVMPiuy2VjqYrRya6Ak",
  "key32": "2XaLK7BCpFUDsUciw5JWB78YjQmNa5333QQrMCrUGo2ChF5cLXwe4SbzqixDjXecNkMp9YUmic9pvFVSdocwBboR",
  "key33": "4t5GUUiERFAw6pWvPxNXzAPM7CQG3MLTPGAxKSB8HDrWMVoiqmAjPGbwh4zx8wVFjvt3v7hdkuCxE7FMqcpL2Wn5",
  "key34": "3KSeUdXTdXEyLq5p3p6Kr21MoRpDCRY9nFxV7ZqvELrCqzdJAmcUWUDYwJG3ptTRfC3QWoCq6hqFVrN1t2dtBYjo",
  "key35": "3KkacWWZwbgDQX9U4BJgVehSuT5JgjihCKEUx8UQwqvsXioBs2KrkrJG8zubj1ZigCybuxXAp8U8WMCqNRtuytL4",
  "key36": "37D2AMu6eGEuEQdR9SQNg28yLMoWZ3V9eqpjaDBCaw2Sv4PcQXx5SveXhPAFkCDGH1MSzgXH1ZQZRBEgYoCR2MYi",
  "key37": "24pMiFzv86R9L93LEDR8c1MsYNYpJWwVaSayRv1WmXMrimzXFyAqcXWcpprqxLXJ7ccSpTNZmuHJkhZap3cuyqjT",
  "key38": "4j25kwvkL2hyVbgjLGcMWWTMYR1CB1MLgnUUvjLMA6WeSMxsModxEDdpSi17z9DPoFGa8a4SewEqFqanwwuh5gSZ",
  "key39": "24NANLW8JAsjoubSkyb7p6BvZQUqWiJf5PPBD2dDwGTpMDNa18i69J8P9e8Na9LrR3aDRRGghc7WTyWsyZ4FQ2oX",
  "key40": "2HUhobRYVHrnFnRGyekWTwjC5zsv2oTQ2pwDCzEWFZxLqEScDvp1D1Hc4iE1T8uCtzVJFBUytzvAEzxKCaJE5RA9",
  "key41": "2vEx4wFt22SQXqWxFgLDDaf9kG1ZgfSMhANv8auK2W8gjbQrXH4Dz9pWH39ut4V3q8SGNPaKY4haAKjfMT6jD7fW",
  "key42": "2h3tiqVFxRPBSdkucHS1y6bPrboY1LpiJ6pqnrrqa86JsMJZVCK89wUw6bEYnwikVKxF7vevEtMx8X9wAUhDqrj5",
  "key43": "2x2gZUJnSAQU1awx6NcdCmFc32FSdKa6bQFpwnv5C9Uuohwg6wwfZg8mAT9enrrmadG3Vwqa2fzkRF1J6MDkKAvN"
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
