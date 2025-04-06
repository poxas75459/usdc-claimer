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
    "4UiaTfohQQAEYNaW2VgNjS6fbdBn2mnhjz87ZcXi3acJUFLC7KDBiZRECqZ1Hkz2a8bBUWWcAbs71kpABjhQTint"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Y4sNVxbQ5iYbAitL7b3iPDDqp5PGpe4rECRzmtmMnZYPevMX9fvSk255bE94hroHzDfCBLaWx1LdbuHaZiyFJJ",
  "key1": "21mu91Y1BSAE7pW2zeQ6ZxUom4egFTFugxTV9YvjqjdC2pEGMzNFqb5T2mpNiuDR22DUbqn64cYXQ9vxsFgM1Avm",
  "key2": "2Z1DyMy3b4wCjR9y261pqa9Soo7EZVdbLXm6zFpkPuM3kg6UdSDoctHkUjMfmjFgBQVadVTLxDuhnrV7ZzPKMvzB",
  "key3": "EJk4ahNMJR6sre43gwd2KrhBq662zEjznZCo1H12vRxHAaLzi57WWvMxKywcsHBKCPe7kuCSdA5oHZYHG6CLZNF",
  "key4": "3HbPt8NcQMzwMMMtJSamStWgwL2V5UFwdQq3SeTKzfrSq3FMGB3otRRVS3sDk33jhZKCBYfhqQWdhvTZEQwJNFrj",
  "key5": "uPurSCLJrEmv7QXhR2iSWUUuyguZF3v91SrCHdyz3trX1CDLCa4omjtKsFbkUDqQxLCyvjo66XVQczVDcWQbSoa",
  "key6": "5pY9FubPL64hWGxdawXyMu1fEn8GbyG2YZ7hmLdGcurir4aTmZyakFaumhwrjk2ZsGdngue1Lu97FBJKCxNr7VYX",
  "key7": "23Etn3TJaNXfLRKHpEAextQTPe7ezPqfXxUXKgJZ7pXHwAvegbSK6wXCq94BcP8F6bne6aMpzxmvKTK59p6tpsoA",
  "key8": "5eLdQAq78pjgLvcUdc2avrVor2cqzZLujG3bKZZGCMzhvstP1v5fpm2JXHYmKCAtQsLZDsA1eSeAbyod3wUqA5dd",
  "key9": "52CNgHhLVtXK7PST67pMhSsRPncXeG6vmUHD4GPxYk9RKMetYtkeTadGyoDmXfHRoLW4LYDziAyhd4HY6CqpQgCX",
  "key10": "3qU8kffxmyLM1LPB3nG3x31mpPGegd2dByRZ8unRkRh8DdgSENzNtJM69pkpi7RTfEWScYXcvF79bqYkxNur7fzp",
  "key11": "4gcRi3aTrash9GxeYcQvgKHZXvCYnxHjxjfUM2iCbt3CsNeVv2Y3twEdrM1DWi514yq9anTpXBhfMVYJ6J6foQpj",
  "key12": "2T13AfPQSVVUjiSgxTpKW8ayrs9CXbx4gvPtBjPDZhmC628oScbHgxRXkU3BYYGpr4HZR28ofAxHpNyuLyN7yX3t",
  "key13": "54nm81G9xmrn35SJbzo1TFS26Su9QnFtnE3iDe2dr57BSBMUp5tQP2C1eFrPF5UbE2EVWStx2DVBDRAT3eEabwDU",
  "key14": "3FUae6L8vx9SVpsHbw7cbkzoSUSJafUZxwF4jTomjM8FJa9KVuiRnEjf8nKquEEkBGv5eeXdqVwWSCE7N17rALPD",
  "key15": "4Q9f7ehvVC9x7DUsJqfbgrFapUx5yXQkeGSqs4bB1nXKa4vfjwgzHZNLrUMZ1nnk2vvgiyv1h8SWMzJSr5csAtKc",
  "key16": "26fwcoJSqDrPiRcqJhx6jWBzZSuZvCmMTLuTuB9gZwGmHHRM2AX3qvPkjx4FBEgoniUmbdSdzWiXpTDAqBLUCjhz",
  "key17": "43FNxkTEcsZi47C2WEVxeNG2jeCTZauzn57kqaS2rgtsFcneqoDJ6jtw4SnpRYVWgVmRvNLSjhy1BDtgzHNieZ1U",
  "key18": "44x4xizeAyoQM1vyRrX4GUZMSx5Q1KsjHbG9GHiQHXjdYYpk455fd6YyFdNzwZ5E4SzuVGqG3t66AVafJ1FyypBg",
  "key19": "x3toyJH5ceLzwwZUJug1FZ6tB5ZmNgZSarKeUXP9YhnqmJcBaqb4brQzwyF5485RNCZPpwEXu7A3Jdd5cKnbh9x",
  "key20": "4KR4sv3esdP39RJovBbBLaL6pksYUi83UzwGiBfuAcpcEhnQBHcQBphzVV9JKY1NHeSt9sVrqZvaj6PLf9BFZstz",
  "key21": "4zwVwuxdSXCwpdybpQNMfJwifn5VwFut3k5hyKnM37ZY2FGm2E8CSyzhUkF4JG3Ny9gUjs3Lodn6pHdfuS4dKPNu",
  "key22": "37fCGB81zRtrBQnvKGbMmXVHaa3pPDBkTQMLcr6mu3YTXsQvRD5AqPwhTtxaWVpSqyXzbh4z4fEC1pngGLXb2hJ5",
  "key23": "55D9Veqac27Y9B842Rnx7Yfu9qyRAqcVapsfWDvFyuVSkUCQ12mi8SeG4YLPEd8K1DQGUrLfFctdCgKHCPFnM2bo",
  "key24": "25x8jcz6XrCPswJcbvTRNEG7be9Y71noazcgVpPULYms1htB7mErZqgNyJZf4JRSzyxtQ7VVEtkSQTxqjGiyPBHH",
  "key25": "43fEN1cYfZBJpzMg9AQjiXTEEUgrkZSfTAYixnj3YMY1xbYAKsM9zHYAqskP4DQFc3oYc7F3EkQsYngFifzjogtF",
  "key26": "33N5C22dQ71KWaQtQ68bZciQ7bjuYqWM3HbnMfKUt5vRMUUkL8DT3HpVF5p8WokgRnz88MJq41jTHB2mWvUmAXHC",
  "key27": "4GVJMnqfu1qG2iGX5MTZwbacAqP3XTTbgCPD9v83qzQc7LYjU6ECX9PZEHDK7QtCti4Gb9NyWVxoPDnvHhX8Ni1f",
  "key28": "4GXmzmf2uK4s14YEthWZyQ6LGHeuAsSAkQiggqC4YZocGZwEao45r9mdn4zLk5obzLK4UAgXvw9LRVth6yTEM21M",
  "key29": "62m81eu7mHsENSvWc8XWk31e8TiVY69YtqF2boFkWiD9GXhHLgdzTE7oMjZqXppVoEQBPUsC42Uwm1J7KyLJxLoQ",
  "key30": "3pKaKo34iVhHNJCgY9SnLYn6N4b224cMozSqr7ApcySTqKfoqPHw2J7u5WxRNQ7EGxSA2Aa5NmY8Eb6gnCm3xeSM",
  "key31": "2mK6YxLZ55CeSaoQFrc12N5hPhKw5zt781B8eJoLG2Vkaw1VQDvzcrAXPZyzWcN9AiscEzv2y4ABQAB84jwvsgs2",
  "key32": "L4es5LbQRJ8SdWTbwEfssZ8NLJ66VMDc6duMdgf24GJhyTfoL22QexNdStgvcbQM9TxGPRNJBdzsdmQqX9TVD6m",
  "key33": "4TftQcVp5fpYrrKGCMxGFNFJpvuT7BhJamQGFNd76Td2JzLTTbRMqHjDfqVMb7pMdSZoRDMj74fUucMgUNHKmLAT",
  "key34": "3tXguZ3JYPUXZACfsB7vcN3gDsYdNaWR8M2wwHhh6Xf2ezyMijHcHGcg45DtHRRah8ECt2ZHGyUmcE2RYiscCDDo",
  "key35": "2Y1MtESt8wr2N7wWJw7RqfaScbtHo5QFKbPARCLBdS9CggpaQRELq3miWJePgSXFGckhogqHJZe1zMAfi1dxE7Gx",
  "key36": "HCEJjk1f2cCyq1yh11Rdw6nkJHwj8CLfXPM6RWFWDbUAmxBHv55v64HfnQYifRubx7dJmeT38kdJnLMJ9RAcVPL",
  "key37": "WiaBMykECoDdB176Pavi3LjYjKjiPKDkBBrnHUtKDhqNawwdMPJcJcwPbZEe3SN73fDqjQTkZkzAhkGUEYVSq9o",
  "key38": "3EtDVEyXdZoPszyrQMThZs75kqM3HaXZ4dQ4FZQ3E2sNQaUPj12fzbay323QHjK5kkEQBU3HG4hcM6J1ZaZ3dh9N",
  "key39": "vqke5dSnkkn2vmqYL8SSnCY8U12s2MMnffMHADHGigTmY4vB2V1V6FJUxxLT3hLpuLTLyzEa4HNrVXDx6YodbKH",
  "key40": "5guvaabSAS17TxrGvBLirUP8Vo6SfBvejpzDPzdhqF4HNqPA6NdgkM6efEsa7WgU6ct4YuH2YMhif3vKnUNDxnyM",
  "key41": "25Pe3cen7ota2XTSsZU9YVLhPEZurb2f5Es5iyQJ8JcCxHsDVCCyG2HbD7MbfP2W95mBFhTDEHCuz14g4uPVZyGs",
  "key42": "5Q5ast3RfJrkij6rPmzeVBtXjcNxic1DkM9wJ1Axtta5R2fT3buaFP51b5BwFWMquzBdByKf5ybVkAybgqmQpVtA",
  "key43": "5RkUEknro2tY8TxUbqyWEeRCgVU1M4i2KE7F1ka7EJg4udR6Vezvc1HF3FkrWYFEzcwHB5CwiewqPiMB7PBQVVpr"
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
