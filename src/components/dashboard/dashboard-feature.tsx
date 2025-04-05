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
    "2AoSHASYqz1j4GfyB8z7NU9KqNhKAJiQfGy8Ci1A2m4TPjyVLXDGV59FdpfPmq68ErhtweeunHxBSsq3obhFA6XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WnepahRJA52Dz1cC7FUgSvMsHCckvDj8Bw1fxjE1BGazT7uDZKc2cZM6ofe8ETzuNPAR6tzKMwACR7oDvpJVDmL",
  "key1": "4CC4qFLfcCJeR9kSB4jtrXukfFepTKBA1DDNy4PvRiR6DZgiM73XGA21YguoUcqgmELwZ6ov2KkWQvos492amF4z",
  "key2": "471kCrBfZWZBTwYTeNxo3qzj3o1sPDHzUUr1p14fsMGFq5K7PiTmx2JoJWu34LMemCyxA5MqxLZMUquev5Nd8AaQ",
  "key3": "29mVLrXrWMkAsKCJeqaPc3GX643MKykAQmYx3z3UMiWZGn3PSd4ZLcBBKhpWdWxqS7mBjcZPyYXYVWAVtxaweDoq",
  "key4": "4wZJKzC4jeM1sHbtGWvdMHWdR1JV1w6c4khQs6A8jzDbaBBSvFipAiWnMKHEczNrv6ek4XUtrv7KHg9vG1UWUVYF",
  "key5": "T9fTYAGdnr4k2q9MR3BzqkrajSSu5y9yBRQ4dxkJq8JjzRDu78vu5FobG2KsqamFz5MTqfkYaayurhAQQ17eX9k",
  "key6": "3D7phtZ8ivR85Q6Qz1kzybkQk2PcfzPwoXG9drQoTdAnpL5P1Muyx1Vd3sYUGxVzYCA9UEGCiGyYXhHBpUTcoZVQ",
  "key7": "iAbcmXMGVqKdP8mytnrwedZkQRfYd27Vv8AsUK4Zxz1wkYD9mYKZcdicQcecoYy4bjb7JWxJuWZRTJnbxLZpETS",
  "key8": "2XBMM4vQKQbi3MywfR2eNRduULR6rJweHNqiyCVn4fsXudYcMiomnGMWRDazEdMbgzBxQDvZUPiDrp2gd5USjbe8",
  "key9": "5xTuDDPCo64ZiGPr5Jif7Ww5QwSg6jkhMmBVkNi2wozVYLWKEadp8bfJgn2RSS5AiikQmLWHdvV72tkQRqEuWYJx",
  "key10": "59SYLn5akeewbEECzo8F9vpapBCNTHZNwB1x1dBSDJ2Jk6TPi9hsZwqrjtGidJzAs6dnAwos4AscHmE6Ra1sfws2",
  "key11": "61qzqvTFKjCiYEzrkG5RUeVSFNYAt5xWD2u2RnWj2S4aFru8y4tj9NN2xunfak6w2ZQcNfRN3yMFnGRrBebFNMK7",
  "key12": "2WRMoAfhDrSfQ6zcvtYLDTkhLNEaiYqxkz9Mtw12FM8qpPTcQ5bzswkt54CooSRh2f2uFLyUtDzL8BAzkN6ESqGV",
  "key13": "3EPaJScdEU24hihweyPwt8oGbwwCxmPHgWiTFe6vJp3Fwk9aJLmmAefgde4T2TbWdy7E38qeyY3tnKgHKNqDKMt4",
  "key14": "2WrmvbzPHJ4bsGZDUL9ghyScd6sUP7em7GnWkGnrEtxtqz3dwDXf1HbkYtxMy765xQDvxVvL4X1KJgM379qkreKF",
  "key15": "QXXfNZZjyWXfatYbQxgutgu2BYNS9VyWzQMCsEoNyMERMwY1GXwem9W36j7roFuQUQpkaTCQmcQ9pHJEb4V3PTe",
  "key16": "3zS5aK9BW3DHx3XDb6YFGmJNAWSdejLEX1Qorc66dLh8jPeeojfGvN9AWFLsB6tXMeX28sDCYim7famhhcEQBZLj",
  "key17": "3KqVEqZiQRSoWEW31QbT1662UPJgXvbsjbHK3zLMT2cemCoHNW6XUBfnVBn8NGCrTLgs4KevwgBNYP8FPsmYW7Zc",
  "key18": "49YU1DdeBjEJSN1xMAW8DsqKsDUvvrUL2HbNRYv5GYEVd4gKzDX5xrh8DRTud6A5rcbHxumzjN8PKqcMEH5rFDXM",
  "key19": "4fHdVZ3BjSRoggDgp6VPVWv57x4gWjxoomSwB3v7N4U8JBCm8uzsdh6mAsuxHrv4dvH8oqM93fhAQe6kJEjsLnSz",
  "key20": "5pS7Vb3H1Wr8L3QwRN7m1MorMFop24H9MejaGXTEYBcJbkNu1Q7tV2GNfgigXBRUgyJb5UdVPGP1XnKyfAQRE483",
  "key21": "234SGdEzaXKDY7PGPjvx3uuXYQ1w3sGXxvtx4bptF5XGJ1QTAqzDCiaCZ5H935MFMPcWK4paoK4Ymj1CVfuhvS7K",
  "key22": "3pLUTuu7BSqrBMowFBpMefQevPaZSTDankKx5nf5a7w6jNNxsAtRLrDKFw97KJdEwCZHHKUV4DujE2epxVxtZYAv",
  "key23": "XsacoPj2eVr8tG8GEgApFVdA4biobLqbN8C7dfRgpF7P8QiA3d9WLseVai6y2gsEqYifdDkSf1dvDrh8t4W3ViV",
  "key24": "BUtgCxLRy57qmdcK3fBhKP14EtGbuhPnskbis9QqYdatP3AaLdD6YaGk9BLAgAwCtKJAwBRvR2Jdq3e9JWF1mfy",
  "key25": "2vu45q5cxRTusDamJWN4zbaa4UQyAcmq3kqS5ekwXtJ31rmLRKbADRFHiy8cwMwJp5UU8Jamo1FH7sdVGRvX7P2y",
  "key26": "3akmEiFDZEtEJm56KVkChMVsbjgB8dqQ4zv61nAVXF6KXWUC2HmURSn7PcyLVMv872xyHsaMF4MGJHQ5idFirGJG",
  "key27": "3j8J7q3b5w8M6mnaZJdhMwCgEQnePohdnhXMyrNsVdiE1xpKMDyq2sKS2gpZhWBLb9L5no9J76UmUvZpQ3wsgkmD",
  "key28": "VPugGNYQaTEbQu8mUviuPDSHbXUowYqKHRvTKETrpgnbDXMKa47PnQ16xbqqhG9aGHvWU9TaLFNjmBPWGxMfv5t",
  "key29": "2qVdGBhRM1zhy9sozymFoBHnCFCSXgKT8SntxtjsNq844a1vnicRxmo9k83REfwK4SwwjiACrBARdqQ6FoiDC1gW",
  "key30": "2BBrgrGJKNrUL3Qf6zYdMndLyae7KvUZwbNhm9S9q5S1n4s7PKv2jr3se4Jg4kDCbhGFxRzzw9GVAr7j5fVWNmoJ",
  "key31": "5BeyWbBqfs6QEpZSArpcVc2NbDk8U2YZmqvEXrPqnXY5Bv4ubyW9LYAUr4UGVu2TgX1QJh8a3LoUwaeY5mMfH3C3",
  "key32": "4EBcWU3G687BquJCzvUer4LsLYSc3gxwTrQhEdfjMwGgYeizv5C3HohnaoL9xtFtE8Q1jbJCAUb6ud342yFYaXLr",
  "key33": "5F87z6rPmxFGjMdD9GaWoTvzoYgLrBSS77FUV2taXKMoZM6tUVFhvV7EzCwEDf7BF7swntukygxwG1hWG23r7kM8",
  "key34": "2jKxo6gco7L3huFUiJgAKVMu2jTAdsMLiU3VBKGuRWtMQfrZ4L17heXhrs3jFPHrujYJShCpjsQAEZ4fZ4Fv3j8E",
  "key35": "651Awgxs4zT8jqBACCrLbhmDJZBf36GgDSoEYdTAF5VQKj3467MBD6jFpYjdZoagLUMFvESkM1vMDtZobkPGUuum",
  "key36": "448xoN1UM99m9KCRTTHZBEiF6LCKvYKDeArD8ec1TSh9eh7DSya6W9tyMgXNaRh4Gp7advG9PGdnkuuPhtADDS6L",
  "key37": "4mqytqp3jfFkyfhFE6amh3k1zaPMkSC2dswVfUjtBMafajzKCeoVuPUk3Yo8LwTR9weJnFHTAjkoTqPpG7r78FR4"
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
