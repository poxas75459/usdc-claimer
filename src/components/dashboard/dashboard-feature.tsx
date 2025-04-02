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
    "3jHUEPsxQAhFg6PQ1xAs8XfRhYaS1Uej8eEb5HwtAcKJrtUoRi1eEvXWW4KFEA7MDnY67NY6kVintmh1eEzio81d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215cfsgCjo7K5obzXJgqFopYAoiTqfhD2i4Kktu6qhf1dgEfEz4vVqPJ1V3gneo6Ax3BnNDtoPSvfiLU5jWkpVF4",
  "key1": "4mC7Ry63sEkjm7C8M8Vaih3Fb78p5MsNnBZa1WgqnE4M99uNmo8reknMgnpqriCRFYcgus4Y4zdDVwBGyp6sd6vc",
  "key2": "2ZnEApH3kQarm12Lh1hRdigXCt1eJq77Gdf4LGfTAqUiYeWiNeQvRMkpyrwrqUrDGbinY1uUAoRfngSVr77zYiFL",
  "key3": "21sUze843Wvf3XoL6cBGyGpjwRS8GVrLoahDeKKQw1TMurptkGC5JkrmqtMHqsz2GvcTdopLeMm9Z4pjuavenN68",
  "key4": "5Uio8LRSJhpEiGUjFyciw981dheavWVLzfRrXsApwZMRXA5JqLviqrDCoWBimmcqH4BLwxGb8mk7XhbvbLNGHxRu",
  "key5": "3iAwuZvqFW9dJ6sF9zxi8Ejs5fzDnMiQeCthjvYERrLF1mPmCz7ExJ5jgSnUHQxczpUQFnFGPkbP8gWj4C3d9fbT",
  "key6": "29pxiNHgaNKSTT17oCD4Ai8BFU8jSkQNrHgDZx9dV7akqJrzYiHoatUNGkCTN6QXTvNa8BAKo5VFRfigYxFK7JYz",
  "key7": "4nJnyMivwY5emnD5NfaF6YyPA3AkDXFTuJoEM6K5ndkXjRit56gnY9HYpYfxZv7SiodwyJxFt5GF79g9Kay5shb5",
  "key8": "2tWJ99R3inGQnS45DaoGkSGm4J8r9Gyu4s8qkZFsdYrjL88a3yAh3WUTvyBzTTUbZMcPz51h5zcx75at4ZqvWPYr",
  "key9": "5oAkd2SpdzakFKW8kz1P91ZNcYMjCc5yb6NMiQK4Wbm1xsNwW6Dedm6qCRmWivUzNWFrJJLh9Q9esfedbSaKf7Q3",
  "key10": "2RrRMK1mA3myyjvFsi5Xo6U8xpAMXvzkcViGR6X5DTE6LmKU4e1wCc91qoe1WEXnuQueg4P1j7c1KJpn2G8xYH1J",
  "key11": "xMYhejAX1o9wr1yEGBxsMK5Nc8wq5S5uMwLYuEpmrpfRgupBESWLboP9y6fFV5M5dKDRNZmkCnGyEYxqs2s4hU5",
  "key12": "3yB1t26eYcayWZ5bdbTmUe4HxfdxNU2gBsxPKLzMapX59LRhsLBtPse5VkTeKkY4AMBzSZaKfPRkSsBhjVJZvkuj",
  "key13": "65r6soxXG5brR9dn32kEuupPN22jUpeixsVLqmRpXfjGsk2pFHb5U7Y9Q91PNKSsyzWR57SpybknrezgzEAjRmwS",
  "key14": "WDkVWGsTvLPwJNN6JZ29TVnc6HTgaZvRscYs77hiP5dZBnoArmfwFtRuMChxGrNiEqg9ZfSr7HnWSp97jULGGkz",
  "key15": "rR3cp4Q22wGbDQT8rwiDqNrB4X6ZSz9JyGv6tcuWhaa6CHdpsZej9N7J47SJ6BkxiEAdFzcKvMBSkpkqctE4Ce7",
  "key16": "2renv5Z4zk1ckhMjibSxsyV8Pcb5wPSwB6TAUPGJKMQbgEySxN9C3tT15ULqq5MBZ7uoWVVyCov6SxQsPNftP2kp",
  "key17": "3u3BktwAMuv8TD3Jkt7ALqXjyS83EWEtQhvXUqqqvoZkkyi1h3CaSYKvMpcnTVS3npri5dEGNaasQwfWdPbH2QwC",
  "key18": "BHnJRrJKtLX3wuDwXPAsuHcvRFXpi4FaSf5TtU228633BeixrYNZfWHUYEbo97pKxYVhvrt94pDcsw7UknD9W5k",
  "key19": "5tk9FFDpWY3ktQmxYRwZ8cxM1quiCmye8XxE9z4mrCuy2H9JVxnMLJJoCiPsYLyhzKkmfjHcwLJ239BwXxHS4DD5",
  "key20": "4qeJyYCCarp6D2GtEizuppRHCDeCDVK5FiD4fPy1wApxM8r2e7fQ5MFtgKy5XAYqbg6FqfRAzMJNQ1jm18ryxxqp",
  "key21": "2SjJV1H8zL4w7HaaacyzXA9FUXVfQSJEw1pmxB7DnbsetynrEBvxgxaRbsk2DmP7HyEojtwMSPDiEbEQEgjcwQSD",
  "key22": "43TtDeEPdjTZ58Cz1jVpj3Bxm3SfnTGHyStbbvdXZNWh9hbntD6TvEZNXt5Uxw6JYkqinZ5DMnXXbtwYWDidUbog",
  "key23": "3C6gPPJpkSrNhx5H2XQYhnWBGr3bFTuGtd5LS328Df863w5Uie8fhHbYeaDXdx3DURRQhyWyYkRAUzs5nfiMiKEb",
  "key24": "LgeEUNnoXkyWerjqVTuRF5LywxhJmmaPa7hf2R8XMxMnH5k1uDBAZT8tJZM4AvHu5NQ6EU59VD2CR5rS9AzRxnk",
  "key25": "4UQRqR87yoPTiyWUYL4oAa9juioCfZmEsNHPJcbgD8h9c7tqEpctDTJJ1yAYkb2ukcz1YahBPkseNTepYZcjjjYi",
  "key26": "2PTq4xZFwRVoPTDa2o8UmJC9QBeiwHmr5CTzP715QnUvdp3iGtu71gdJcQT2QJk3d1gWnHxn2515sSxPsEcveUGi",
  "key27": "5evN4Csf4XWdKPz1TpPEKWcVT2joWn8z2jiisAJCMWcoUksUnL1c4LDSFcDu7z38ADp9f6LYK9XrJTVRAPy8G1kK",
  "key28": "2KtivQ6qA1nwveTou5awk3BKninZej3GBezM3UmGTLCnLzedb2FAFD3SQCDE3oMGtLsgDPAijEqev6LJ5NQ8mBGV",
  "key29": "2vcutUrmMEPqnHvtv652Aq6J9CsvwwMZAwdPkpxpnNFuF7P46qtw86gMFjeTm5GkgdNLRCD5j9TwCGKbVHpYcEyq"
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
