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
    "4ARSfzQxgvUdvjF96iQCBmYe7EebWWy3U8siAAYiZ4mozvhQPiDvMLy8ZaHw2AbDccBfyc12547S931WzBWcFMds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kg4d5dqCJLFDPavoz5Td9pwfLswjNXnziojYqLXZ87TW6xynatcXxz6Cw5jXbsw682Pn5U74ChLjczS1GZ7JXyA",
  "key1": "3ZYXLzdRVKanSSTLbhVPNV3gomjoDcmxijMsDDMEJcaJXz61vyLtw9DUPQMmRDXzeHAfMCnHGiZhEUcKeFUmD9ut",
  "key2": "46iz3nU6Wu2gQi4rNbfRUSZGwDsb1PqR6KQPGTNdUyHtpgmjXfc8DVV3BfnXNPngTGzAgQbLD8VoMeXVtKj9HqqG",
  "key3": "3uhEo2kGLdVQZHgTJmU8c88pMFbrSL1d9AxQN1EB5uxiDFiXwsJZWWbFTEZ6s1ZDxduTPQLFTPkKuiAZjtXKVsLT",
  "key4": "MLqGyxoWVrj6LQm1zCQtvmX3GoiFwJsQCeMXbVFWmeCHz4CwN3NqpwQBwyYwA5DozK7oZn7FvyYBwrXF4pxeZ39",
  "key5": "Jg8G8TgGfRo9N4gFtDYyQJ1pCjpHwdme5n3m2P47B1psebtPXUG5gdrQx9NJYnjjZj1uU5e4W4sE74FU5T4unqY",
  "key6": "3MAUi1UFNyFExdMhBVavpwWgN3VWyFw1DnGfNJeuakfTdmSiwVuScfqFn3Qunjg5BKznrnk5M1rQ1rbGM2iaXEWf",
  "key7": "2sANY4zuEpMjxtUfazYHXWWACmjWXuvxVdGkvp4SdwfFcMgPF5eYBvAyKx9q6kMWEpczdrkheYNXE84wrRB3CUKE",
  "key8": "28tZDKufkj5cRt1FgBJmDXf3mDzY4qwDzeNcTxq5qQCVjrrtDnL5BtymXFx6mJCBjKF2gF3Qay1viQBJLFjqdGyz",
  "key9": "RX5iqcY7iRLGPjyvXkzqnofjM1Zb6xics29iBJSXNuABo6aSEi4nvDbTSmvKhAyeps7uSvjaaYp6cCkyxQHoUn2",
  "key10": "78uKDrqXTeqtjQfwNBYNyZVg27Tx91HFBRajvPicwHqa6gX2Ts9TbrMZk9JdRfzQGPSE6hfia1d2Y3KEsYd8QTi",
  "key11": "27acshJVLRn8LJ1b69kuRNdpTTqejpPxq8H1zDWkuajSQ6fd7TSjuR6KaEAe31pbyCQ2ikan5r374EZZmxodSE2A",
  "key12": "3KNzcwRgQNmb1QBRuABY5MUZtb2EhxK1RtgFRhNJvWSbMXQ7ikmmRy9tKuPNpaxgQHKxxHup1JC4n1Zw9DjRQk5T",
  "key13": "3kiawjCv8sMmfA2936pezVbHLktQz6auFgRxGjrRKHm2PKCcGt2ST9mVnKEuV5rauS4Vy5MqXWysvu32rknq1aNo",
  "key14": "4YueoN5kvAFT2LoUo8aH5QVdY727inUVuVBzVZfkbadQv3zDscPUkUCzozRyoNwEPRZbh85NCsRt6rxRmPLJzLeS",
  "key15": "Rv4wahVJSM12B5qcJ4y88HQ13eX1kvHpKzxwpwxBucM3ffFjFeUz9aXe1EuuTYGW6kG52LytGzfZcbyF6BBZhVE",
  "key16": "5qX1ztzWnnqokdzMQowXQ6CwXe4punLQcrC9qJuwzNvKDy7EpmuHvSqmwHhem8bGfe8RYUhMGAzPidAd9v3b4rcA",
  "key17": "cUyv5ndCsX7g1CPDjsZNavL6d8UgdTPpiHJVWv3gms4mGPKdHa3XkqzzvUH5qMVXXb3yCTppugChX224erMb7xt",
  "key18": "3WJZYzn6PbSDB3LMxpVh95c2vZiym1WPyARoJp81FDC5FLgGmey2SoXbtkUFps1gYj6o1SVrU6Tcy9Agdc6MzmA9",
  "key19": "2jePWiQMcVjSFWfTd3Smgp78MsVmejmDdBXSU8fX6wMs9X4NfhAtawAWbsiFRMMZq3Quavb1tkQ9St1n1ENwgDB",
  "key20": "3GvJysnfNvkCkcEbFBJuEM4ENKiWRRqWimyQ5c4EMEVPJWekLTQGDWavQvudM1qAUpu4YV4bYd6KdjDS2o7wnHLa",
  "key21": "QwAd5fU7wfHn31pQZdUiDWBhdRiLuv6GqUD6mSH3qLMqFpiuvEzfJPJkVj3u54PVQSRZGfWAhi22KXVfVbFpEeM",
  "key22": "hToS5nzBvDdkYEYf126L84rSrNgZ5m2conhoubbuodjkfD5j9bFRqoA4xs1JmL6iDGsF2fuydWh5aZvtsKTvydA",
  "key23": "zWcFRk1QY8buUnWGz8UEJxpgvG36yf7gm5LV2ADfvhkS62gDMgATnBFen5LLnWe2maQoF3JKxXuCTiVJAi4WMkY",
  "key24": "2GtCyEAN1iFsZsy8EFEenPg9r3UimWBGvtKE5HxW4P8po3rWw3jZKqwrXUMCjtN7TWmPk7khuZzadFHtwCDdqXAG",
  "key25": "cQ8vNA96287XfKSr1irBFLoJbxUa1M9HBtPH14L84YSXixQGQbUX1ZFGPvowYdVKVRkgHQGEVkye2x362URG1EN",
  "key26": "4dHshSFsCKC4rokJE7Hon9xZRLEo1d4KzrZoboQjM3ZTYGMTBiF9CoebeUezfCoyUiXdbiqKqbohVpF2MaC3YTnm",
  "key27": "2UT7irzdEYrRduYm1WnStKuaingAvigzzYNAn53kLo6pBiiEFkSaeqn4GHwKQXqgvZumUvRfHQGLzhsEmFLmjYBr",
  "key28": "4vVLEkhSNehCmsX6GDeStVwtdykps2ov4gnjc4LqezE3RC9N2fch8VoCtH9JaUugqWdKE3uWqBzi16tgrBwLieLD",
  "key29": "67KrfYg6Exsrgnz8LGCaXg8mhFqw5ZJHLyWrmCtWb6xfok5NpPeYytBmsHPn86KX5jVAM5pMYXtpGHCYQ5MRnug2",
  "key30": "35KPQXzqzjkLdjd6sf4tPXw2UiG4p9Jk8Bo81tj3BbW5jgPtopiKs7BACBUz5VRVb24NjoWwvyqDScULtxtsZ8U6",
  "key31": "3aYKSDNV3FEXkA1mWCoSh2YE7SZqRsQ2usNn6T2gFsfytg31wdbzUazexKicsPRkUyecMWF1o9ugsjQg2sewfFCV",
  "key32": "XZLFMc6SNi6V5yJMrWVG3kzNdgxa6AKFeM6zvUFmx6G6BnFGSc4uzDi6aZ7x7sVvN7FGmPZb5FdWw16Yav8yknu",
  "key33": "2gtQ3sW8CdZiak7X62L373xRK2eYFdtNH4aAmEu182PzuM6TbhnEW2FTSN9Y9fDan2bcRiADS2oW1bxRBwPWPka5",
  "key34": "5ux8CeQCgGoCZrJQ63fw3zGXZJXzJfXq8LRsL1zdCBnv11KYVqPNjNQJuRCJCj2o5EzqeGS3CZii2mxsZecqpJkM",
  "key35": "e4mQ4GyXA8c48shfGp5nmKxEgJn6PH82mtgxUwUjuooi3py7PLEsjc5z957f5JAUQTbtifUtCoFVJBxvB2y9mN5",
  "key36": "65YKcqdsVM7g3ZSPn1NszY2eMg4fcoF8DmLv4nywtLQW4pV8cW5wt5dhZ17sVXu5cTbi8MaFt8yp5ed4tyf46eMy"
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
