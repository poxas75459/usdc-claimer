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
    "2XRua2N3rUPEDpmEq2BJdGi57LAocqhaV4ZD99ZjTfTWrvr9LjGTRzw3cTYmhfW5qefK56iQyWPgHQv9ZyU7htb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LaZ7vVjFJuHUZF3fVYxTwPJewjcx2YVqsTTEz1DjeBrq7tg6pVvZfCkrdcuMs3qcadrbNXtpqhY9YMBspF5hmmE",
  "key1": "5mh5nfUUasj8tYY2tf7y9QfzSZN4kZBzamhhNnR4UQTBsH6ubqfFbNaKbzSArM9CNBisZQvvV94CyQPwVSrTqDuq",
  "key2": "5RDF4FYPpuLJwcq4U1xPq8wsEepLYov3p2sJuFQFFeQLAZTUYJkHSMnfugb9EUkC67hxe8Ps6BziPTpjm3WAwL8t",
  "key3": "24irYVszcATa7ou4XrBJrifdixtKgJsmRdhzdDeuuHjKgU2c9ak9gAPXxx41QYLVVZPcAFNgAYmeGyJHfXPrL9tW",
  "key4": "2VKR5QtgJ4y76UG2HDNyG1YjT8iPWVPFrFJtJtjQNxozSS6E8BRejjtwcuq4174fvCQNoj89kLc72B1UfNDtFC4W",
  "key5": "Ls993J4iENKfjAKjcAortTYDDBuTkNiz4fbGFtpABQCsEBgY9MMFv9E5cbK17XTeXtfnGiYJkqwsE1zLTrMuhnX",
  "key6": "4mc1B5rARB2uttM9sZBayaJXERvaJTPrxZKmabqAAcZEFXooEJVeREWhN5gc4jMf2umoX9uz1JU3ouesHBw7siXr",
  "key7": "65DmTVvatbLAiYGAXR2Un9GQpY1iKxEqwSuMQYa6L8yn3r6D2rMjsEXe11WmKvAjvc8LU73FXkPDNGF2LeqtYmQ9",
  "key8": "28MFPivzwLw1iPbPGckkNEXoG5vuJSzT2GDq2tzrEnJLQMJ5fJjArNGfzJAswNu6PEwVuocs4WpMJpEem94Mo8kP",
  "key9": "dB2eHDYPMqBBpN1E61zZJgy5sWQ8DDztWCvheccxYtHyDmX9FuM5MH9wpTiS7htMiNkVDMwB88NPSpYwinDnW9k",
  "key10": "TLRU4pz1a6twwCioK9Zud6P9xMtqgATWEuZyQVMSccQAZY3rrrNx7ExHjrkyX2775jzCuqzSJJN5ArHEppFgAvk",
  "key11": "57q9e1XYWUNCNvpSE1puaPB3Vj48BjB5LegWFQ51rjy9C2LFABZJcZeqWeUnoQ2XpjKyuufp1nctmJDNkSidUJTY",
  "key12": "2GzWJGnNxBGLtsqz2sAU4hxNVbPR6Z8nSXR6fCZWXmnAnbeotJqcdh8KAvEnxg74oy9xwmWna95yRpQRoru5QrVr",
  "key13": "2RJTtpzu7BmcJn5KxwRuSnJAiddXe53qnwCYJqZKfdkvNzfn8m5cLmdVxkDRUCKSS57DRwh8WhSTp2qUGADbTG85",
  "key14": "V8va7fcQWmVG6PPHCWAg2cPY75fMQ712yTZhm8JwkioM2iJkV7w8AknmBmpYgANRxFkiyTby4BvdgrgGSZ2Weeg",
  "key15": "5LSkcjzd3TDkK6hGAp3BXL2YKki5MRUHhAjStB5aVt9YDy8iHnhfxyz7y8FyckjXsMA5QHa6WmRTZuA5C3j8P929",
  "key16": "2pYB9BXEMzoNk9CtPBbqnGYtX27MhtzKhvko99RtomWaWqacMbNbZjfKtifcC1PpoMaHjvwgXML4TVTZMqMyJPJC",
  "key17": "4jNxHF4qWmxugbppFjzFSvesDqGe4dMdKmk1zy78nNeRUZMj3Lew9n1Vv8XnF69nWrEiQdyEBFzV9Fr4gkf6KFF7",
  "key18": "4kfVRweaeWk9iPZVJSZYKMLAyi9BzNM7vJEZuzHFC6jDZ3ev6RWF42QLTyvKBrjGnmmrqfJKkKNenNDj34b7qK5A",
  "key19": "VD5HkbSJeAVJbBu3Yq9zNry1zhwm5JJA4judtD9vToeNrgpwvDszKzvBHo5VvS6xwmKpMi2ga4XdodPEFGXzamY",
  "key20": "5YeZnvxGCTXpV2HsS5gqrWS5Qnv1jq9eL7RPKPF8YR26h9uEBJZjkG6NQbkTq2vrJ52Y7wNDLRHSE9QkjhEQ3Z86",
  "key21": "3xo2WqGi6jcMgXuSvsCKqHj8S2TeD6PNEX98jdNBpanzcbMnGPbzzkXp2eCtb7Zvu8jpv2u9YR7E9DLzXz9KBCYP",
  "key22": "2dMcBZcr1W2wK49fxDZdC3mTCdAPXKGiGGDpK3GuY1HcGtKPUdptcLen1mnbHt8PWKf4kf4wTo1heizc3Swn4bTp",
  "key23": "4VKAqYRYioa6fybqDgNNGBLvBMK6apVeDsy58aJr5NN7HwaGztW4dX9AGDKqfViMQapzjXMz48NuoemAumKuiMSz",
  "key24": "445C5ntTDDm2r9ubeELzDxV3JUzKLUCYsr3hpoqVspq8akL7NFQMNF9rDuMAHsAJCRkggxpjCm5fUXRnbbiZyYYM",
  "key25": "3T2h3MnauDpBWH6UpMhVoN35ya6G5nbvLFK3Ais5DRUhqbY3qPputDQwDkGCamDXwuZhZF6N3i5D458QX8wJCj46",
  "key26": "jXiJQUWgSeSKAtU2LzviptExkL4BHRZRzniqVohYiAcmYrrqKhcS1BRMpkk7f3f7tH3ciHY83BJtewvgHLCBE1p",
  "key27": "2T6AJir97o2o5PxKXdXcfNzGxnqYbEh5wQXHQdEY7CAuNauKKNZ7bzb5QXzaB4mkS5SMhV21VNDbhmJrN9gvTfX4",
  "key28": "2EsXha51J9XSMZGEfT39JjHBe5JyRmqydiGLAfFTv1SXFDWs4cCx5QQ1xd4WdMVRKjUBRoWLiGG2Adcz5mCjGTR2",
  "key29": "6xtR41MZu1xPKQLhFSguyQN5UJJEqR7eCMTvCmC9WDjKqB6qvkhg5ZT4or4CqUXLtPSbkSD8w55DPRgNSYH9oj8",
  "key30": "5rVZqjEn1atzg5nmDqiF1ziXF6aMeGJvgYFNkfitLfnSShtBubhMFWj5cBG4HYUe6urF7KPXqGTgJF4B5oujyBJD",
  "key31": "3NWTEifmejkDZqmx1tqBZEC5Wo1zjBN3JgSD6MJCQvJPNSsQYcokgeXcp9QRLcfmfHpQ7aBDxHY8gmFugqXGdxkK",
  "key32": "2FGVA11ibinKMU3yN5wkXvJkp7xoRtrBUzWDW7fM7iu2qr91tEx1Bms558pjfh4X1bM6tsN24DhkjNSg2F7SjTNG",
  "key33": "2cGLAD62BE9vcSHFttqopbN7v2z1QjHgrEv162nAqSW2X8ya5qMfMGgTrVfsGSgKZzQA3crypjxc4ikf76RLLxwh",
  "key34": "333DYWWMvpHW4UwnjHgXPQV7qeM5CcX66htznBrvSkBDU5F7b9rpCumJbWSb3ch6iWBoqyzv2fDGAvXiJMAYFeZ1",
  "key35": "2P5ptH45wbGwpMPnM1bpzn2wSMQV7oYDdTi27bufXmH7FTA7YnqyyfzMhcNunWWfqpo8rZPwHvMa22a24TEAAsFd",
  "key36": "5JiRQYxAwXHtqjxPZbX87huYb3PVz61zHeughgCuRYrDaP199bv2QAgagB842V2wVkWcLeiud75Z2FcCkXH9umvW",
  "key37": "K5199UFwacXwxLQ2bbM3m2oJ7iR3X2e5sLvaDbab2LUMj9ovcGydDGJwBQ9LnQpdx5ZePsoTKcoMwsUtb37pfSQ",
  "key38": "325ynUKKphhPeoFB85pM4D5rS8V3W2PVFNBPXksVixCS9SbHfVVMsW56PAsyDMrsqVoWZqgbQ3aRgyZtps6W62y3",
  "key39": "tobiP2cKW1ydmnFKE3U6ZWmKyyTyMMUat5DMAjHaTYjcEaCmx4z4ahVgMRh2GcQx7FfACgMCdRyjpThrwWg8Vn3",
  "key40": "Vj6kaYM5DpsVmnqxJox7bPJcUksUydd83scgwJHji7EMPRVzV2Mprs5Lss9YzfjhFvcNwWRoCYBkNM2eD5qNkLr",
  "key41": "KjvnMoQQKCnWeHuc9Nbnfm35aHjGo4PKBw5Why9PQaTwEaRixqFG1CxB72TApAcgHz23x17i3UaMgpCti7zAGZt",
  "key42": "4wBhAk3QbHuPmJ21ETRSdh6xU8Nb9sgRWRHpVGidNEAgxqPnLrJL8aC9xGBmHXDxqdABvt4A1fZfexCW2ZzLMkuB",
  "key43": "3eahCSTQFWiTRWts2tRFgfRYRyKrsCCYpZknEw4mRFYGWFinTm1VnwUaF7td8aTauXekpo4wyNJ16inGUNBpQshs",
  "key44": "1VNvRL6cHt4z6eRsmXvfSQPAPH3f9b74b4x38CdQT84aRXTaUWdkqnxiCeiHaJKvDS1kz2PsUW7NeeoAf7JHosw",
  "key45": "3Pj9Xv9aUEr3PAp9pGGfV8C9xsJH6Evw7QDd7DRDWS7gmTUrfrU85Q6nUwWsEhF7uYYxZrWEGybBb1sgVFMvPN5z",
  "key46": "eggMCbkTehuBrN6KMmuddmKZQUXvd4SChTDXsUjMVqZMtnC28TMgJZQdzDn2s8FZduFo3JfL2w2VHdHM5zHaMjQ",
  "key47": "2ZrVxb7Jvbefc9BL64i9pqe58F5RpXt7cUSCNAuaY2QEeWYcCUPtHg7hAaEEDwwGocZ7TAYS4xNBc9jtpNoy2Au2",
  "key48": "nm7gi2DHjSCc524M8XKfe8s4Z1mzsS9KBSYv7KVeteXNG7L4Dkxn9mCwRmCVc8MArgx3RDrw4zRop5rHChgGjUz"
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
