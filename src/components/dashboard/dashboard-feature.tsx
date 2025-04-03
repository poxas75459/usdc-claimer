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
    "2DhU8wNGSypj4YfoRGPuExRQ78B315Yhk5fAnPhkmxi1GmGWGg4HagDKg9L1kZb6b6UqW9DC5MKCn7WDhn7PdrBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZhBbJ3DPFhtFndMoDWoTBpjWzFzLzf1PCYeNSrmEnPkWVcku7CgoYWxtRdVimc9oRwiEm9S9VzxPTH3U38tS4Kt",
  "key1": "51PjjW74wQASWHBYoM1ZqZAFfrVn5ZLW5Wovz7ykYTwsE2QCVEqDb3Zo77kFBCdMjEb4WAgiaoiEXPsg4mC9we3E",
  "key2": "2kogEKzUug6i644vkaavL8X299XKvhU513jpBBkJHP16FTtVLoKz6U74XzSPCurkFiB3PCEsxEWvw4xhBrkfTHz5",
  "key3": "4mkxzPXUE6vESMxV5bn3wwvrKUZinQcFBDGaMVRYKgKAycdQcPq5BBtg4r3f6CsVEXteu9E31J1hCAgoFa9G8c9f",
  "key4": "26NgfVJzLqmZoogmgZRdvJnWdCv9BCCpeaUKEwD58MfwKZkdvFcLcnsb1ZbNMFqMN8hD14t87XQxsVUDhVs8hms3",
  "key5": "hvjKq2RZAtdxeiMto9yt5UXmntLDW1tEup2udgaSNppTH2cBypP3WyABPuHvgiJQpjTdYbeU7jFUe5J2H5JS1NA",
  "key6": "5dU95AFoVoS4pjCrqxPccT9gaUbnhNu9hpgECRw9segfzrSFVN56H615dtTdWCaABmZRw2wB6bJ52uLbPVXuiFNu",
  "key7": "7TjVNmbv77NVJk1ttKjwepjTD4WWj4mbVETyU9HENfTe8Rpg6UnBcUjgpRddnurdcnoZrLAnfQTg9eLH1zpgZCQ",
  "key8": "25e6duWgiZJc6yCaRtPZKufrmnLRXxvx6C69JhafShf1pczofXtWVrDEyWGZRUgJ6CtsXyvr2NTA3p2EWbe6Ts3u",
  "key9": "Rcw2i3Z8uzBHnAjon7pZESHk4iuN9k7pj8LJVwg3ktDUFin2VvpiJpe5ZpwywP9CmtK5uERv5YyKqH2T2s3EsF9",
  "key10": "47edTQAn9dLsE4u6TLyGD3wshfsMb2pVhfFNgqXs7m61kT3Vo5RMmg3NKVhFr36aRMytpYxvkRkU2B18kT5Kg2hq",
  "key11": "4BJPiXVpNEggxQQ8A91ZbcinF935Fhkw6Xx9PRKncko1E6Veo3D7tHeCb8kQ3vPCeZNjqDGWXLv89AWozDdEkKP4",
  "key12": "5Zkd9xAjJD2cVRsCtNjeuysG8HVZz38nwGpQzZ62xCsRA3GWYCz9Hmz6KaSGN64y8sAZnrtMoQAAc1PX2MMDiLW8",
  "key13": "42pvV1KLLk1ayZcLpjA7uoE3CH5BLv2pD2FwwMP4znxpcZ4exp6CFU6zKNSWTSsRFGpKW7wtxN45QNxRbgmtouiQ",
  "key14": "4fNoJF8EfxR8k7SVE5diX67Jx67bb9D4wohmrJ1CB3ywBJeXekesn9Fx3Nwmxw64k7kKj8bLuDxCAfuZnRoVdsvu",
  "key15": "5EZLz2VFYDoj1J7xQqP2vcKc2U9B46JU15oBvp7UEXD2iewKwkPuJ2bFU7ktZHrTKbZzPjghV6MWT9xqYwkT9Xjj",
  "key16": "5xWREitiDTQbvyfmPnyFrLJgYPLuDPy1jhoQkh6Fi7Zheb6YmutUAThLhJ2xJMNE6a8cKrF5WX8xBugqweYc2zQ9",
  "key17": "4HYB4eKZj2cdfxCRbC78G6wxtGXAuWqEGprHvxnS33upoo5RRQ6G24ff9QVhFk7gMfc3BhDFYWVp6U5zkS15u18s",
  "key18": "5Zkryks9XccJWz2yuk6zcdzkWqtnbeWTahiz8HWifnwgx48dWw1wPpUMSYHxtUpzE6N35X3SdNL3YE2orrMSWo7N",
  "key19": "2LkSkoQVnXpLhSJCe5SXfiVCyRQsyidUmESvATpUKtapqN86mz1uvN1X3GJnmU6UHEGaMBBvKEKLtgsWiEE9WzMn",
  "key20": "5MF8E5uQitNUArNXcvC8ioehtZJi6cq41omrjZ3xMaEscumKpvQrbSjWdCibbfADAcTYBVGkAr6Ui18REcejpQqm",
  "key21": "56NWQK2gVeJiqj8ndcuAUtB9988R249uFmxEz1ZbPTrkjUb8wY4jPuXtEi9gY4gswqRjbNQtAxxqRHNjwB9aVp8g",
  "key22": "YnMuAQPRo2u8veoYVp1cg8ngdpdzjcWyBWmYeXxo24WGPHCPQRAn4gvs3gtv2Ku9HrebvDZF7F6MzTPRKGP5L1i",
  "key23": "S62C19msaDTTJ6VU2VNNY6LCPUvASbpvUQEvzcQAKYtfbYNABWLdKMiysaJtUnEMQapHNWd92ABmmpLuQXQLdbr",
  "key24": "4GSiryZL6xBPGf8A1zzHuNt8KqgzdjMTXehAGGFHmVT4XbY12yJWkL9JHbspJxu9nG9wCzMA6HRY7cDrUDBY1eKt",
  "key25": "besPNCwzj1Fn8sgEFspfpTASLxUyUAtb2xdgjj8pnbEHuMHzjrLrZyfxtZG7p93fmXcEvBx7T88jivUjgBPQncP",
  "key26": "3RjqwcteDq1RJEpY9KYmwLyKN7i1h37SByXUCAcVTM4gxNf29gCobSt5ZstFG8jQ8LXko7PS2WBiLavKHenkQxf6",
  "key27": "3tDSZND5fosrvRhwzchzGwa5gwkmECJZsWfGPZcX1krtMpR3EZuzniMPxQTMxfSqfJGV3Yk6wMGES7ZjPH558DPb",
  "key28": "4UgKv3TsqpJ8KjTUPFsDnNyeE4rpdobJ9SQJn9ZCu6WQCWfaZzdYoWCxCjdSk6fuapiWHu6WfPaLqh3XZm9Daomx",
  "key29": "nY9skVBWoFUK8vm7nZnADak5NBGGDsAvGqzwTdXHgpoe6u3o41D8gWq4PwjYNobokeYMH7YeRqNBTJpPCXx8M2Q"
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
