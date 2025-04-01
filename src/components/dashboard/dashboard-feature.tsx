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
    "33aKPDDzcQmaGzxVZDSAcvX3hUPfh28wggnDsuN2DRfmyd4MGHAorVaapAYujWEgwvo3RUCAdS97S1Ysqef8Sp4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQzTiNdB5pmVX9jM779gmoRY2PZbPYogY4me88sFArvzmb84FrXVRhDfiTPB3GpLGTgZtQx4EekAe6XBQnGQDhF",
  "key1": "3W2mX5DRRowJ714MVo4vpTB2UUbDB3TKRFfoud12vVPrF9cA8e1gHPDFuaPchkbdzDWHGoGwTXpR7AV3nTYqZWbU",
  "key2": "2XHE5S7yCRLTjJKmQs7cdd1NUAjA3PgRQAuZR9JwvLnVagftqZbuccS665YrX96tPsVr2ZtrdFe3nrGcfZVi5wxA",
  "key3": "2CjVpraCGdJFi1AHXZPTWHHFr1ZdF3KMa2ngQFPiUX2ndJdJdTrGoHknUtDa35PwtMkkuVdqnVPq3aRfjNu6wxVP",
  "key4": "2TupYjMGU9gjkvue6xYtAMUA9vnDxXqkdzLJAQkorufyCdep3Aa9xbo6Anjyu9Ru8W9BdqBhoDsQwT97EgkLfAVR",
  "key5": "4oQmZ8yhY6n5gnuLqkfpCc25Mqda8oxwEbXMbn24YBLArZUvc5AjM8bUST2TYPyc2NBYCVp2MFMYtCaH1ro72TmY",
  "key6": "3chDkkYNDNbLZDsbCdfVMP2Z95NG39suFABp3qRGxpdFARHFsLJT45akahMTbWU9Bakah4XtF4Sz4PG1zdA8xAGB",
  "key7": "61YaHWPdQQsXnyeSRX1obMxroj7vt5p7rnTs6mHXSbm39r7KucGTo43fzdP7euC43aFzEHtM42Uqp77YymUGPt8v",
  "key8": "37DLRWkYTjAfdymwXRw2Gnvpx3rbKBQV6ptL3mMd9oHQDG9xCnW7d2JFXC6rBaSrW8MudQ8ny1cernUwcxYdvmLs",
  "key9": "cT2bZZuVFwm4trDTJYuxhrwoA6WaGsPp1roeYwFFwpFitjNgp8LYgcMZADcLcgirwb7anYdZ2eNbQ8DsjotJ9Ay",
  "key10": "5nNi4HYDSERqocsaWdJWBeiMLxUJzXWvrfdVFMqjaBC821PS4MmBKEkhCtwi9CHf47XYv2dpyjYoSn1H7eVxDcpQ",
  "key11": "5LWBBQcQPdGVp3Z6YhWHxmJr3TVVycWQx3DxQ1k7eQnM4o2LWHwpHaVTHXJSmcdeoDwNW3sRSAqiTXfYLkMq8EDK",
  "key12": "3QNkPyjPUV7hgtX8KtxJrzuTX8aHw29tjec1JjrGiDA3kRCHZfSevEQGFDKTaPMDnSLX1mb4WA8eeTkM1Q8yQgJW",
  "key13": "N1wP4BNuVE4YR3zB1Zn8Tyzh7JsVDBZvnKEFn7m3okiUHJ3DipLsX46xkRaz1u5WXMe9yqrB7T93LiQsJCSrA8a",
  "key14": "5UCRQsDahSykyui8j7pPkuKr5reZmWw7rjjPFQxR3Vdtx8Xc8bCkW2E1KpYNoyiDxrQtdJ7FLjACnoxWv7yXj2iu",
  "key15": "2unUxxxJdYqpxHdfh4YUEsNH6qAzep68HuaMEBFDwbz3fGm8aHr1wetdF3pvm8Q6JwxiKzujfSMguppPEvacC6Tu",
  "key16": "4Pq2H771iJMj9uXmj3NvA8Dz4M4p85gKcSm4ENioUDJ8jwHfQeTg3UNdeuTvoGfvsxibv2Y996kCPhjbgUi9ByXV",
  "key17": "2yjjc6BDWXhFQygiKrArLG9pDq41PTTRUaq5URbxq3cV6iDZwaotMeTV3X6VjZNASq5HxmoeDjmUMoaWgcjkoCch",
  "key18": "3kHoJzmfMBJ7C71g6Fvk6mfCnaoa4hrP9mRS2oEm3nZ6yuQz7CFYqFMxwA5sYixewxURUsxrwDyCcUuTED3QdJZd",
  "key19": "5tbXmq4yg5Z3HhMMGutgDpcrPh65bkfXRZDGvSeiRyGNMQJmtzgyzeewVycqx9aTft1r1rkTXhEMTrebiNiUtao9",
  "key20": "3yDBoeEQPebTpG4nDVmuR9n2kwqpg4zuMdAwWNdKKW75eGqRuid6irMrNN8W9xYJm5CThHjXpDTHRcm7mecimGed",
  "key21": "4hj6xWAYZz6EwiuCBwGDoBajjvxBPanAkWJCX1AFvm9xRcRRRww4aYof6mpRELooESd1rgexPjzqNSpqkJUpjdKM",
  "key22": "hRvovMaZjay54SfDF4RW1xkYMWs58QCeAAGcB4if8J2sANLD2mfv7L6maRReqCnBJw1qrgsKFY7ZgwRBpwr83SR",
  "key23": "3tHkbfwrwAGgjP3GLoQ2fRHJ2rTWsaDxWzoKa6XWGou587fLPsHmpf3xbKZ3NAfakhubNcsBZTr8VrVZGgexDkr5",
  "key24": "3XfxHay1D7pq53APMw6xBDst6oMrZdpr2yoWQnMWW4sw7VZSch1RnMhtNqUK1KPMvxY22Giyry8ZZCVF6xUhLJYk",
  "key25": "2jDnJoQDP8ju77rQCGrvUuwRsi8UuxJAJxid74Hwu1MhKKFdHtSvT96o4eYBAa6c4DZw4kpXB2KRpBimHC9pJmGZ",
  "key26": "3orDS9d6u21fqbwjdDwYGvsHZK45urhgvoNnN8b9zi7AoSaQ7xmhmzjukYqBqhyEtT8NxZG7uQ7gBSEUVWigv7XW",
  "key27": "4PFrg1HfSai9a72oPhHuW9Lmce2a6vNEsHpFFKxRnoaYFPrKr3p8SqhUVtmSN1dCRa4W1wEyHsVRLHpgHnjCAnXa",
  "key28": "29HTJ2g9kC6EM2TjZ62rXqhXKUbYnxHsecQohni9vKw1RLBp1r3s9rWfca8dxK4KQVWb58YBni8N1TfyuHBvZJg9",
  "key29": "4A1CYaB4NNDsPW56ur8dMbC7fpSajFojG7SKTmeWn2XWrkWeZHNLHEBTs7QoUC525WTDjVezRBkVGVG8KRbihKxk",
  "key30": "4he1ws3vgMCDnwZ4buF84Bezx3b6BNTvLZtmY4NPPUzGiJ5wtnSwrCqfT16mKG1Miqo28zv9FupkcQtUBZyJrhYB",
  "key31": "5qFDKTMYuaKdmP7gJFSM4cgvi815XPUctQdTTHMFa9Lh3UBdkTqxks2DzgpKZLoPfMbjFAt916SmhEaNJuecWPU",
  "key32": "2dNWSfrc3KUEKgTm2VUtyMYR7uUDot9ffTP6aRSgpSZ5tLen2enF3sSPV8UGdM668q5Ld1o7zcxVbWS1ry4tYJrP",
  "key33": "2T5ejY37KkyUCrnkP8j6Z4gMX7ndxwRt8PJ4qTxSN8eYPUYBBYp9R8vvgG9dq4cbWSwN9Ee355KXLYgXRv5WPe1n",
  "key34": "4N5tYHBAHA3duUaYAeCL4k55XdafzLA5vF3oVRmXtWGpixH5GecCJkPPz8AD7GAUw5iSTRThEdsotwETSUjQTVid"
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
