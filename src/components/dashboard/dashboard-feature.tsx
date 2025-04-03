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
    "5UuJey3nASr1eCseiQySECYeRt6BjDCksgvCodmBoJ3vA5hJSbtsdb8hdSZwKWZ7fDHzkLjKF5R5G7Dxug2SsV2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B2CLgvDebYNXvX6Dy3K7nSv3xeJ7HHQXFxjNi48p2PBiMgeZoeht9dwVugpJdvS47w7E1CNNXVEzw91kVovnW3V",
  "key1": "6zkW41eCPckwMjYKBvArZPJnNDx8C1xdhJQ3ibdtHfNFv1eYjhGks9G8FHvu9NZkHtGefZr9Xsit9wSxWUT6SXE",
  "key2": "4Mu3k9o4Rc1NunKxiGfWwzvxk51681yRjj15c3UDhbmtSiv7DrSMp5TWH841aeCKnwWuebyZDyE7CQSq5HB8SScx",
  "key3": "5zdbZfbvecHw2g6Fz3CMB2wiLzAUDMNbSftwWHr8HF5ERLiuomcXqB9FSQkSV7SXkAKxoCpXNqggHZ2L6juCn51X",
  "key4": "4SQBrW3UNHW3kTPjauf5coMKoG17fd31H5XknKA42pUt8j5CFmUwA5B5N2wmTA6edP96Lj1gz2YvF2cB8gAUJwEE",
  "key5": "dmKADE1nDEeRytJQDetXUMjN51vWAWg3v35qWxuyC4JkYyp8SmV5QXPiCiSfidUveMrGyQqt1b78sU7yCAAGNGG",
  "key6": "5BC6P8A2a2FrTEqAUp2A1LmreTzUPKgUJgVNhbmf1CgdhivpQfpmvXPFxtkPLFexX7vMZXWxFJ9oHTzvA98QVJ1t",
  "key7": "9YvLR2jaVhK21u2PeEPfxwgxXdmnHXQ3Tq7pcUbYNUrko4YQPYtQycGySS2pRuzM2etHWx1qXnuYithNi3Nm1FS",
  "key8": "8JbpnaE8wa1D51aEkdaqYnx8BCmwusZstH2TruT6jQr6Arri5EKcqc5uKhkwJLfHPLRWp3ohB5YusjnezirMzmt",
  "key9": "2qDupdtAiqsGq8d44QJhm7UG5SLzre3v3Kcub6Pq38fgrNUKULvNYCDTfQ4mu8vDoYt4skEbKhwmgSJsf237tmeZ",
  "key10": "5HZBQEGxoBqs5ie9q9J7xz5frDAg8KgvgZGhLYmXjSG7tv91TMXV9Ss564cayeaL3SdktsuT8r6DGCZtNyFEsXoj",
  "key11": "5CJ7wGdrMUygGURpmox1T9H7vvvxkDBZCW23e9HhxUMX5VxgC4V8Z2QjwENvzc9WTErhipsyv28Q9hHejVJyeGtE",
  "key12": "2FDQ5JcyhJLT9aDnrE9cGgfxEFpF1qh96tCS4cnnx1hYU9enLbAFxvEqxetpMLuyGJXTw1FhYstWnK3k8V3QFA2C",
  "key13": "5LfyRNQ5PRqou5YJF8XoFgopbLeSyx6tjcCb5osdRgnGgQ9WTsB2yfzEZidPJCQM6jUULaPY2MnTZiNDj95gRemV",
  "key14": "BNDcov3bNQQTDaJhKScSWgY6ambwFHAh7pr55TvFRnNVHiojGkUyPdLT7YaiXdk9rwrhtoojgqvkLcAZMYYrgXP",
  "key15": "2K1zReAsjDvn7myZVBt3J6vmvvDEvzgY1DnxxLGhJ9ph48992auHnPe4YqdhBcmunDHEeDywUW5Xs8UFQSRPj5wx",
  "key16": "qnftyph6QivaE4rvMPLWd9moKv3ECzwBiqHF2sMTLZLLEXiFfvpqTkvAJgW9BRL1yR2ZU7QS2e1iks2hzqqK2m9",
  "key17": "3mDf371wiMxPEVsf9acP34ZpJcUrRCQFFjiSANiYZ74GugYYpfXMQp6QUmTRSPF2pNEiJeFJzdkX5QENfkPAQaPD",
  "key18": "4dxxfhc3rKgj9bvCcC3tZQXgpds4zDmx5YwV3rfvyRFKXbpyd3V2WdQkUs5ZXXfDrBvTHkZA6SGjX61jERBqV9p1",
  "key19": "4zgsAPvoGaCvLQFK55miiKiTkqpGj1YSunZALyKHacXJBgzfjHTRnVbmHk5gXfrcTdQtL3JN3ZjLnrfLvFEfrsaH",
  "key20": "HkQSo3CR6EQvkU52fZNGSMCft9SBtBSn3jyAK9bmHfPQ5YUKvRX7MGinX62sjsxDZMCDxUNJSv1NpAs1VrP1gBP",
  "key21": "3deekWJrkHd7EJtUUktaKXYSTvZxsBjso6JfyTN7jD2X7rZxkFUZF6GM3Bm9tKHD5bMyR3pfSoKr4FPBqbdbWkKy",
  "key22": "4ibSMccMjrZcJStTSePWC3EiBxHJNoGMbYixF8szpaLr7bLCnsK8kDkk6fr5Vby9BVXhZKzsGJx27rs4JxxRyA6p",
  "key23": "4tNuJFE5J8YchSMSaiwtnCPNM45grBfPXwnwBLUcUwrjjcphJzaFbfR93nfhzK32WeCERzDD9zbD34Dyhz79Kmm3",
  "key24": "3BaHr2AZTf7pevVvqPHmA69PneiQ6dkhbDg316UvVkBezaMRed7xz7rjpiF8kTuXYxXxM8JsX5QNgJcZHdk4a8DJ",
  "key25": "5JDUgJk93PmN4LmwLieKPdzgYANmUWGPBidbjbY67dzfsBypB8YjQ2NUCkKvp8bpE9ND2L8ryJVJYqco9og1F8T6",
  "key26": "59iJFLKpMPRZVGzrCSFwqNjkEtKbseBaqoZSG4nANvbHo93kJr5XiAMvTeM6rdaVkTY93VbnpnoQsCH4hNGtn4tk",
  "key27": "53fLikgEdVptEKHMpMyxDjhqGBWCmiCmHibffomSUR8xc1CpUEuebHPHKESu5hJYGtCkmLob5B43LoCzT3kKNH2D",
  "key28": "3Gtz2VrxYhvG7Xxz3yVsCFrVXhYFzxLR86rWa48y22RzcxJH5yiUFSSGvMYqBEtTz57rUcG6V8LNMJXULi8s2eDc",
  "key29": "56xkabVV7CEaYxMS1Apt5Bc3QUGU5chZpVuvUbpj4FvNvHvYfqvX8Bdvd45nGngRX1z5m3W46ergssA8XoBVZT5Q",
  "key30": "3F3JhYesvudQdcBxSgsZwHPFZWKo9K1FLcDc5c1dX4QDkjMpesyHtzDud7GTuuY43YaPAAWXK5nYGWnjHGUJkpTo",
  "key31": "5gi3UdmsaezJDnQdjtCv5wWERD27wozdnfVrpcaJQTMqiugAB1xPGXtTWykBNkvP19jCYsqA7pQwTeBDd1QbcRCb",
  "key32": "2pW3ybcegb8MscU1mkL94uBkaemt5PPKFn3Nr9xbMG95kgApqdYy5iadi9oEnHaxdXwUZM5HoTajHNrRqPqKjrqK",
  "key33": "43SB7b2HzFfQm2hmbSz2Fy7KR6DK8YeBtNU24WXBKm7ufjgA9XFR7T8cDNyTVXSCkRhmmaNUJejJqV4dXYgR6hco",
  "key34": "3HBPs9uMBPHEknweJY8RxkGdPpoh63oBzzdQxm7yegRRFRKnKJ46ACgzPDH8nGpF2iAVV9hf6uqenNxZ4o9RqfQ2",
  "key35": "3c7rm4awgzH7pXpWJ2hqBsCRPFzzq8fqsktFvwHQNkGFkwPot76Lfniqrrrt8xZJnmWqTHr6NwopwMJry9y1nQRR",
  "key36": "59VKjewQJZRmYjXVAYShfFEHzcMocZP1eZ3be39H27WYaKJoZy6gkV8ckrojVAGmrec9BYfkqzhCs778Am64yagZ",
  "key37": "JEDQPEchDcnDtreYvxFw5QEst2hsvEh4ugwsWgRDboRTd3qCvkW9v6UaRf7TGdcoDn2bsWS7H2P2BFeUTbVccfW",
  "key38": "49sLiWpaQaNWMm5nFakdGAaEUk7L1t1aJVQDDL2GuSvch6KAxNrKkTmpKix4pq8a3TtCohDNa3bzLKtcYBh3gcx2",
  "key39": "z6sAXEfhXkdBmr8MDwDF9ou23f66F9Q2RToh7it7DR1esgA3oqyv2hQWYahaisSpLwBKJpuy1JpESLzyRCad2XE"
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
