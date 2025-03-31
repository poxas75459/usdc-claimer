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
    "nc9EuwtF8zjUco2HNrKPPBRfcXR2heQdzo33Y1BCWr3BQZ1hUh9Vd7PMsJQFWxnA8V3CraAgKpX845thZ3THXBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wy4y8rJJ6PXBipG1dK54Qi1KhqfPYT7xQ1hWrgK3EdsxJHDJMphZxVRqGj9wA2VaMoptRypoKaHTDR4nHEUEp3T",
  "key1": "2b2RGnsivrRAPfQoessD2Qjy3xo9CY8V3GvXaUFL64YEMnTYz44aP8QuzThifq7h3V7juqBpWTXnzPiC5RNCPtdu",
  "key2": "XWRYVYqMCbmRHahHoAg6XrFQKyWBdnXi48x3odhJzatKz2SaZa2K3DmZ9vEjRBo6UGuvRuxeRrc9Mw17nAM5N3w",
  "key3": "5v2vUTQiRuFwWzjYHQHN5b8CuwZjpjJSAKSYFW6h5R1AyCgzyyeaU2YFp8HLzZwMTbyEwfsH58hAuYWyafdmD2QR",
  "key4": "4JytZVRiDqarxzEo2ikfNBKSb8mPVEPoqjDjMyt6qpGZAHxUkNEmLPNQGBwyDbNbuWfvvXUmeVSge4iYTcBHSQnB",
  "key5": "4qHwbz1Bh3bdsPZGRf7CYHxDYgjBj4V8L3sJMaBAq96euDArFmF1BhdfckJWRpZd8Mpd5hKs1tnjrQZD1mLuULBy",
  "key6": "3LVb3WedQeVqeU9RkkyVNg3ZZzcwvvqNchGUvuKGmGekdQuxJ5MJ68zK3vRr9vjZhNmmgsDjC2x4E6gTzjjWUsHa",
  "key7": "2f5rWoLPLq6fT72eYu3YpyzcBUKYGg8tjci1vukYx4wE7QEqDqnPtn4ZnuGjAZ2SL7GYWXfAVzsfmXKwmeWmcS83",
  "key8": "2Ht83mnsvxLpDU5XfALau6piVRNEr8SKGVUTXDJBkgzWHy1B4hhDwjcbXHuEZ4ZcvctypSrGyUDfxFGbGyheSSzj",
  "key9": "4caB86PAXw4jjephz77EyvkMqTNzX2U7KJCCJoXUW88uLJupx6ep6o1yV8w1BdAFR8o1C9V94hkHJiCmQTnHTdbC",
  "key10": "559cH8nBQdJKkvRwZKMhBydNc4abcBnM29giTekgkmtpW8FAYFqPCCa8Ap5bZfQf6sZX6qewePBJj4CxoKLBLMt5",
  "key11": "2uUqtAEbHQsWwuYiLZu8S5yXydeme91gyGhysp1cUbP7v5sysTpyTVAST1hf5oEJLcsoji9VFBnxFpzkcTAzmEL2",
  "key12": "25axuHQfWMAfeeHvE6zQnwi7G3ZKhWTeeo6pxgxdBuNbwkcko6sJEySFZEjibm9YUgqqLyrfSYpnyoo4NaEPKiUg",
  "key13": "2GRdGbTWfd1RoJnHUoNqQbY1W5CqgSozZL6gwWfgd5aZphCaE8e6tXZd9rhVNnBnsii8GgSxe9W32Q3Bcbz7fuNn",
  "key14": "5seSq5K2LU7JVGDXjkP24Y5SPtHo2AAazhNvz6gzocX3m9yRPVmuwTFLZkWfoWobYaVoapQWySxCumnF4jVB5BAH",
  "key15": "Yg51J9jS4iXUfBHf7gpGgMeqnCcY87gzE61CRRkzoK4BfBAAtDbvAUyqBboMo7MNtk3LfPpgvUkgbJwgVpx23d4",
  "key16": "5C3F5zsGy8KhYb7ZAXfNqT4ES4TRpDrxt35mkMfpBSJbYQwkAW15erSB9QiGVTKyU1gbPY3SN5fJGnoygt5gMPxH",
  "key17": "5c6ab9qqRweKxMVHfunNtmDGeh7AD8cthNu9mX88K3nwP13Ca9gGMdPt6ifSB3CBJHcJx8VNW3zCXcY3uWSTV3f2",
  "key18": "3jhQj4qq2bjVxHKwFcV26v7qHeQPdmiVC1qGcPBU4tidh3EwQJXqRdHW7JsxWg95zj3bj3EsBzQ4Y3XjBLJCT8gU",
  "key19": "TB1mvZNtJGBJ7izevMXykCX3GhbLoKGtahxJnhiqdbRnz6GsveBCBDZyuq9K4dV2qLF5mEd1h11ZffCubHafiaa",
  "key20": "5yS6BybyfwXfuGZm8iT1SCJSxB5tSM9Buh2MQx8fZ8iLFcf2bnYBDdBhD56tbmvp4VdKiMHzBQsTR9C2PekHh7hG",
  "key21": "Y8sBnuUgMMqjcrsGvVASkESUDCBCvBuRp7XmWiRxKF2fucxTBZvvsKgAsqZKV5oGtRE7yJNDGQmsBgVpk4XhAbv",
  "key22": "2ktZqgnMMc1kXSWyUfZVTMDToaWPPdkkshmCWcMvbf2gRNA3EnchFFbLLMjAWoULYCGnp5ZZocXHqrgNkawBXPGn",
  "key23": "nESxbAxnXgQEC99dzJ5puBLrYJ46aD1XPtBFxfWFD3tqw5qmrLZKSN4NTDfbjEcJwY9eDbVc8KPoAtmRyRiGYfu",
  "key24": "55iDYfxjWVvhK7Gd2W79vRY7RerR9azXskhT6X8DpLXS2JdV83ZfeNtBK1xz1YrBCDcCHeic7oCynKncaMsRP2Yf",
  "key25": "67bYadbVf3gpr2AhPXk64dwNUN3WKhSRvBTdFemZLMFKbCExHRwEiBN7vQoBWgPB3i7dRc3TMNasPY3CyL6wKppb",
  "key26": "EkZ3vzcaqd53t2XvoFfhDRw4zyFtZbCWGxTNUURcu5GsN9AwhBdEztPWPVQGQP9qyWfxsLwf3tBozh6tur59ZW9",
  "key27": "33fgVgG7SLtQctJ5Q2ebyf9uUSrki45zmdmHpQ5JKjpgUqmj8EqEWR5DLLGaSyvcAtADNCTmi8ELGkMTMAPym9aW",
  "key28": "3wPsZgYBcyeMR4rQ4FmSPXXVGRCtxMAQ14W4uf2DT2dgF1bAQ2Rw5aoHFvTM7e7DQZ1cmy4L6bsyPhrVoe2csNQQ",
  "key29": "4C6MrnJrP23bCtn7W8QHGijfkppsabGMJh9pZ74Xb8Ud69L1JJAVGQYma1aTnYAB3w6DQpBbBQrNBy1zx8AGDWnr",
  "key30": "5q3yiuW9Jt6xtL9PS3z6rS8xTiHYxwHn2C4XqWhjugDngo8J5cGK55YwaNMmUy6DzsvLZmuAFSQW6wxoioKnKdQ",
  "key31": "rkqBp2nVV6Wt7wa69EdN9wS6a9BgUYNjMw76fugEKEnYs51tiVs5FXd8grpHQj1g6AtkksE2f568S2GTPY6zEds",
  "key32": "3xznWNqgBu5FoSJoDnjaeK6jc8dEmSPY1rLusNAeEdKXr6WPGkQK1QdnHmusZ5BFU2xbBpB6rFEUWzhpv7x3kzg3",
  "key33": "37bseQX9Xb6mbBFi2dBwxZ8eVjGpSL4uuQNNaYjczBiMczurWWSzwejY5REK1KNRgYFXhXAyBCKNSyVwc7Nqx3uh",
  "key34": "4X4gnvhcH2H3r2PfirY7ymjgC6mRd5Tgcaxq36vyGPUNzPr3k3GzVo8Mt9njZFCCJ5WK48NuokrTjzXzg32fpUJJ",
  "key35": "5Dhibu55VxuL1dagPokh76yqwvvNGjqAYB6jPBMNYVPAqgMLtWSt2VwHs37vgbRMxwGbHWsGy7tAxjZAoaYmqLpX",
  "key36": "4XmY2nfKrrL72rkT5m5BgA9kD5Gy5bFgoq1XmSaWFJNZzwstGHAXkHK6fdW4sqKYWLa8XKzs75iKLp2radct4WDn",
  "key37": "5qAn3R1sWuYiLVTFD4iy1cuo6QGXvWoPNMTYDVcRsJq2b7j277tP5Z94UutT1xcpetGCeXtvZVs5qXMPLm4sUSk7",
  "key38": "3GjQ2V5wJAV7U9QX3Qj8GvFFNvsAP19RTa72SDTz197hEN7o3AZwoRFvLBcky5iXBbpw4Q3eQ7J1wGnKfavv5BcM",
  "key39": "mcV2yEhSgctmAbbKZSrqcMhFwdJutYXvedc5Mii6AXRN4PDnYGv2wyD5MZuKmh7PntBShnPrrHupPzWR8cNi5sK",
  "key40": "TiKsrSD4nvQdpAjQi8FTYCtUjVDaZHYebQjizdgRN4DbDbVG7u5nKSNxjZ7WCt9AAQrn6rmTc1H7YjaS2HaVZiD",
  "key41": "3MyB4uX58dfPwPTwn97Wz1xDFpiStaRWWs2Kh2EA47WAc8h4XDP7akL6W7vGsD81DETWh6NoM4UVSJWw1CgeU1mr",
  "key42": "2S8W1uLAPLvtMWwjzVFjyUVajLB28iJdHBgrsypZUyzzudQjHLNNSRCfBgQDX7WwnMSxmQvxeuTq1juhBrcbUrx7",
  "key43": "37ZiwX2MSKRQs724RSyGLv38jw5TPvGZf4cpGmoCUMJZfZgWYQb3EwmyEpwNqKqgacao5EKQDKJtfripQYwUWnLA"
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
