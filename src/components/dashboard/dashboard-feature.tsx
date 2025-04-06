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
    "5K1QHrLXnRJF5GzU6ZScwuSVZWDJbSDdfyjqUnJWyeSEaoBBcKMgprZUz4rCBYzFNXMJRMoYcFBG7apeqTvwAHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S3JnUE3NrHnoCMA1PdZzSaNr8BDRiXy3qMemspUEz4HorATkTD9RDA2gTfhanm7F5k2CYiWwHBprgvJ2KymWGbA",
  "key1": "4DrunsEi4Ybb577fX6A31jpxXPwXVgo9nwafyr6fCWoDCaKKroVWJD7YMKDB17Ah3B6aUaqNtwzyJQSiXono7usZ",
  "key2": "4TdZNrhJXi2424FPf71efZcXjwucLy9Wz6SphEk2YCG4eXL16yqicv3ciKveRXe5mXVHtTdrF6NiCtX1jYeEZALM",
  "key3": "2jMV8XnQBUtKyvGeoFjgMq5X4N2A9VUkdUes1niNdUcK5MtbHMrwtYUqchnVmY2EsCDaFeiYdHnxEngseBGzun2x",
  "key4": "5BHpvQFDC3AuLSUniWLh85xmmD5ujQyLjcuSQKEsAN7B7FfPyFBoAtFE8YyqjkqLqgMfLVGHZVRK6vHWixxqYHoh",
  "key5": "2893rKwwgi79pxWSBLm42ViXPbWkfFA3fPejrb8rdjKU7Cq7EvwEi2wYwaNhReV6ZiaAgwuNAHPpu84a44pmyZKc",
  "key6": "Y6ei58ExYkJHbeUCwWDtWgEaMzKXsHhkrP8QcVoYGLW5jxv1xkn3kMN3hbcEk8p6ihTngHHAns7UCFFPyrJjywi",
  "key7": "2smr4TW7QP7TKSk4P8wfrSZ6Dcd3hvUrVhHkyeH44GR5B16e66PBXdTkATPHSNVSVmdXsN8PFWVRYUga1NGKuVJ9",
  "key8": "2AuSPiKfmyLtTzG2z8ykmwuM1PEE3v1a7usk8PnUTbtGZeZfy78iVAUf55G1pu8NHMiSW12QeXZawCHXsj7Z4k54",
  "key9": "3jj2HwAZc9ywjPGXoW2BVAyZf1GJkBwEAe61YppdMFEstexCrekCRTPbfmsC2FX1aH1xABrqhepYG8KW12y6yENx",
  "key10": "1TxZ4U57pjQDhV7EC7buMhGzydYuHi3QMqJ2rEfrFSmHEx1hBunNvErk4M9CGtRUgR7KY6e9YU67uVRiF3FjwLd",
  "key11": "21YLBqnNMmoBd31VsPNrk7f8u3ddvb9u1hnp4ZtDDGfcPAq8FoZDcW3oBNTRBEq6NcJocj1sckX1xtTtWEiZwzbJ",
  "key12": "4ew3uzyPy9LtonAQRhajWZYAsgns9qgfwdPpqV9mbvz1uuDcGVSQVCyGMNXxZP6NzFR9dt3wPZyHSuiDFaGmFEEW",
  "key13": "3syaTtozzmdXxNw1ofov4aH56YFBZ9mtzJ9hKFq5eGHxgaZVkx6gS3WbqatK4fiGm31zTmPBCfsr87WSunjvV4iu",
  "key14": "5T5EgnTxfUNcUHfAkADRNk8BhmFPLZYgemXDVj4fGWgSgP2AVeyD2yEYmuadS3aSa7RvV3nyZgXghYPhwAtafk2S",
  "key15": "4guVuuvHKwGM98YrqgJQ1AT5bL457LLmdV76Ud1nu8rFPtPLxxzme2mB1hXSY8puiP5bcWYbRXYPdYrhJeMqUh5A",
  "key16": "4WKYHkcbJZ2aCVXHPpwJWnXaCbJVRtzqgg5em4jN1c9MHxM1AHwX7bwfBYzUmwdA1du6SvC9As1yBGacrA24QxzH",
  "key17": "3AvKwAh5ZEfGKRtKTkzYZbUfhJDZpJUaXuyoYxoo3nmBdXcPdfvcjvy1QKPSsmmjg1zosW9KRJpn59ndF1nZtYrY",
  "key18": "5S9jUHKA8JCkCJ3916WqiQufXq1WAUKE4BfwoFTBVSQay3XzGjgEzfrjZc8NKaVRMjZKK2baBDeV7ybtY8zRfyBM",
  "key19": "4R9UphsDKBf8EqHrqR89cuDN2pft5ZtBpM4zsdiVHaU7EVwhTBuyR7wzb96Km6hcJ6cKCrHJ8gaWAw1XJncKsTGZ",
  "key20": "58UqPcu3psPe81HWXfK58AmaHymByt1gf8qVkQ1AXtiNkyC2pfz6GbHFKjG9aeABijQXFHfWmXHhLoNU6Ayok813",
  "key21": "2vdCwWSnmwRUmVqbnt8TLYYQz6dEWaDvKbW7V7n234n1nP6d154E2EssKFJU7SphDMLBUZ74QGrGH4CUgogZhEE1",
  "key22": "PyWaN4MZbsZ8U75ccHbLuJam7JQ9ynZZpCGrF6mhiEfTq7xDeb9a2cyt9ms14SUphRdZL1JUJKGiGm2EmPCPQ1E",
  "key23": "5Gs9HfzFpchn7J7SsXXiZ4pN5n4TKzrr8Wy3zwocCNkwnJLSNcS2LVZvvkLvZaS2226L7n7BNY7HifWotyDw3vjZ",
  "key24": "5MAgvAC8zDPKogWW5xXHFPVLX6RDH66eEtsbJoQXjPznEd78X3jknDxgNK57axABea6hw53JHzB58n8ZTizgduk2",
  "key25": "3zRVdhMMzQJzhbwjYEBScSYUo6MFpiAtFHd5y55mp5V7zPemL5aQa7WPEjCfZT7jV7gMSyLD1ncri7zwsRczwH5c",
  "key26": "3dByezdwF3z1P2tqifxAA42DyF8M9aqNL9K1UtMr3mfirhZA2FKnZ2b5HXxDWX9vZX8rk1ViGe9BZAmbH4giGEVj",
  "key27": "4oTZpbGRhb8FDMXkotdwf3Sn59DnSass1BCgBfnhY8rGVAoYRHZiCXa7AekogS8e9ka3HmL1guABDx6WRhNJB1J3",
  "key28": "5qwbhDEjyCM7gkaRhPDZJK5rrQ8LDPVTK6SeoWDqwG43YwnmLMdeW4TuAoozJJEvGG2kX442eTD97KJzyk8rmEdJ",
  "key29": "BFofh6Ee7D8FFdRcUs5M9hXRWrCDxEHVQwu8Qis7Zb6QvFiVJ3yjwzMgsCorqCb6kZJXntGAAvJPYsq3SzLujvB",
  "key30": "2FNMnUmyevTVPASLyLdJp9GF7EJeHVSnu1QV8W8aYzug1movGEY9REgA1EM4ejuD5UmbmVakeAsS49YiqBCwYqL4",
  "key31": "SrrbENy3Wd8xugLxhxEeLPoEKNdNpgUCr7yNGjyii6S3KPEREEgRGGLc6e1cX42AYAktFMY6PJGK2ZmPzNNxdiN",
  "key32": "3jBzCiNvvz4vS265H9vmyfG3bCiXJH5tPVmA17C7VMd9j4cBicUg5Bp6oughoaMkmtLkvGTU5WzGwLLPqRb67Sym",
  "key33": "UQt2vfToVaWZ6LXfQifMaY7WXSKVGdJe9vyBvQY3xcBfZaN4aQjx9hQohwAPQpqFCS2B5zYnbfDeiKkhL6Z5fmw",
  "key34": "27ZjhzcKxXfY9B3visQD8bxhYB78AyeQgbRESWV8Bo5ENRG6NQ1dLQW6sUVfzvt6Vm28y1stcVYvMnT5sjnhhY54",
  "key35": "3Chw7RuQiq83iq6tqLE81hudvtUYAw4hP6oEPgqLYKjaGgfu7wKMxi58BvhVxhBuvgwcJAaYapm8RDqYi2u574VX",
  "key36": "59p4r94iLUmN5enV1LVbiXLMJQcrcEcYzuHCdc4RujmnLvZ6mqVAVcrjPXJPkVF95rrq83hk4Uu8NMMRDVjGpHnk",
  "key37": "3NaJe8x9GdsxaxWZuKCAHWNAjUskYa1TGjmzN85tqP8TprcjivUwVKPEuDva2N9JpimoK5TJrqsSYht4Tyow4FdE",
  "key38": "6k2NEhwY7yP3WbVRZmw2o7KRCMpZMgt5akaR22JBSZxEyKA3D674kvHK3WD9jf7bpnbPLCu2URCLa8gYUHK9PU8",
  "key39": "5EaEgrSMhHqy47T8rXb3uWqbPzpkTNzkdkQDWhCeiVsfkppoXWj1xzVWKZY6QdPssYxNPjgEgFLg5BhN68ETvPQn",
  "key40": "4NHYdNygPAQuhqGe9n4geSMt8fcMADZZMakJNTSg93zihYV9M1szAVjiA8kAZY5uYME6qa1qpSJawAN3kCdwpSEZ",
  "key41": "4rThCZhvvAN5ee3qghU5BR67vJ3aMfjbH61NZGVQgcKU4WJfBC4JznSx2xcS1q3GZdGHT4EgPAekmyZpB2i17rJf",
  "key42": "nTWT4EASjhwNkC7D7euCWH5o8RifCqFwDUGZBfehwwqfQeFb3FSBeiyq5ck6MeHVpwpTrQwPec3SQVySSXp8Ew9",
  "key43": "5NaCX1svFjmZ9RHPYrxhyXqqqEmrxQ991frztBFVu7iFUsxRFR48mxQk5E7Cyp5MbJuv6fZHVmnC6jeywG4c2Y2T",
  "key44": "3tUSrn9W7gB2F6FstLe67x9z66mPnsEqBq4qmJxdiTw8ZREr5g9VTxwcRt5aV3RYqdY1prDSKSBV8wkfxS596v6i",
  "key45": "4tnMaTML2vCXPg8zfT5ggHUEkYGwE1TsucuEHANL1LYvVbn6BDmdUkhtke8ugD3Zeeiun5CFsid93gfn5iwQti7w",
  "key46": "5Q2451fmjdtQdXwhDajsAa62r2AE2qtBLY25AipEHsxGhFa8Xge4dj1x2ZbWmAk7LxEyGLb4cLn4FAFt1eqEQvUD"
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
