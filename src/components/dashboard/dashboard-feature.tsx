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
    "4PU2CnaJH1fseGMn6K4D1GtESJ7sYrfPb8V4jK9oymMu5XNaKdGcdckxhsnT13rywU8djeMt2yvmeGmKtNsEhEmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeTCYYFR6BU3srBoMhnypVDNGHd46Atvu2ssDwjde5qozaG4mJLfWumLrMq7CF2Z52VAgDQst3yksX78AcmwzXT",
  "key1": "wCfFQBfXkXt4N7jJuCUT5qENdmY4PeAdjZm7fvQ3MKb1K8ypmt7jzjnMnH5VoUCeeoerFnnoiojp4LNnj7imGSR",
  "key2": "5dfTDnjmQBhiaQ72wQVShmf7uniofoy3k6ZRasdzVHMyM5yubAbpAUm6dSb1LjGQLoxnbHSvNZLgrsH61Zc5et79",
  "key3": "56fGgo72ZiFZvUbniUgQ3QFwuJGoSHbpx3TYmWhpd1iERRKkLd6HJs9F6NSu5udyyWXFXY6ursxawQe9YtsWhJwj",
  "key4": "47mihE26ynFUnpvo49iW3UHqmLs6BEXv6WEHZuvF8iuFTFB4BZxXu7XnbJKw9yN6ibpcRUpTUX7HYCFNxhCw4vBA",
  "key5": "4TvSF96JzqLkB2LSuEkPhqVKuNTV7e7NXbf2EeEQ7abaDf6gmhKGaidi24sgLfQpdwV1JyaZTyiHu5fqGRyru6H6",
  "key6": "66ASRVyHfFn1QEEW7FNpzuvc99AVdD9aZ3GPzfwyh7RQNznUDgLYKi9vDUVsAhxCYeL8RsNna3G8NYi4YeffDkEb",
  "key7": "5dcjcYT897GFpfjnBGsf45S5MDRNVCvyWTy6pbFURzvdgUjJwvuRD1J2ijSAmtFZCKhhgk88K25KpVV41UXa2MPD",
  "key8": "2Qc4qD4khfPdHi75YBuYKCTfURtjt2TVHSwHopydafzrcz6CyrZ2ZPkiYLYexT44KT6ubFt98XBoxd5n4v31ZGC4",
  "key9": "s7xLj1LvGxqnHFqLA9EcAytp5863Ezo9EqJUDALHRQyH6F1tZmg4REfCcnsciZJSnUwp8G5eKivJEKjhN5EacFN",
  "key10": "5GpmsKdFjq3DJFE7nFxMx1sNRjHvEdyVgLEKqb7wu98UU56UtrU35uWRp9TvMFPfEgQkM876fpFLCo5v8BhhcczM",
  "key11": "B2VyReBYCcSnbxDsqQVqaSuaZ8ic5eyKrek1mCCjZWuqgmEsDpVGRzUu73rgAFzNcVacgDaj4sNKW2nH77PkZz6",
  "key12": "3fmiiYdzCbJ9W9rFZaxXzin2LjFvN5mxPjBD1YYr2gByG66pbVRNgxJCjXC391kP4uXHfoF7LQ9s6FoVZtCntU2d",
  "key13": "4MtriWA8FCTNQqgL3GtkCeFjg13Lqm7hrSs5REJRqhJTsFVKWpMLQfuccyis8si85HdeYzJi9htZBCfx1CPasjdd",
  "key14": "5ciWfan9et5oZsZgtfPo67ECQDynDbdZnk53EBRrXBzggQuK3oiWL5NwkeESvngfFuN44wf54BB3vMibssai7Wb",
  "key15": "5xksYvSdCSCeyXob1buxSg78m4kd4T1J9TDTaR1PBTWKGLV9vMo9jDnGkpe6zAkv9ub4oJNLiKvd3kLghKt4Lsxr",
  "key16": "3qdxQTwx4HfxQTvy2mjB6Hbw6tEmy4CPGEZJ2Yf8aNCwiCnsrvEs1Vqhpam2AVEuQtWDo8YwfqHx1vrhpf8a2NU2",
  "key17": "2Tu4mYGZHWwL3kN65P88zGm1W2VXtUHpxGTV7yLCyrgHCyiMH4FkVmce88tEyd7RGc3ct9DzZDbdLG8FCY5fEcpW",
  "key18": "5iJGVsx3wiU7Fa8dXSACvhtuiyWsqmxTH5yuVvGwb5B8V63ekKi24mzfHXvvd7Wt2HNiFSP9e1VMczhqNtz9ptf2",
  "key19": "3gCseJynC2FHVULK7K3u8eKERybPsSBQjwDDoipduvZpM5B7S9MNw5XcxGkgG8AzXMWGC9rG7nK3MoKU3y75BVMB",
  "key20": "5y98By6yXevj26MgZN1UmZmwTz3LVgD1sC4Xu4hKqztnGJNdGDAUiEUBVmEaUgd5dtvD2GZjpys7cMLfZcRLHg3w",
  "key21": "4kDXtscV9anfJP9f9iyBJcppwLxyayp7q87Pafx5ex3xDLgz97JWSTd7Pf5KXiRUmJhtFRP83Hx5DfH2KGULCn5f",
  "key22": "MZKpUiaMn4188aeCymMcK2qVmvYkLew8YwkyH1wnbPrHNaHg2QwmH1qAKkFHRR4fWQ3yWXFe4PsMUwvjVVvVrS4",
  "key23": "3wc4ZsvRW3oZqPYAFJNjNeHNocK25QWeXZuB7YsTqzJgr4Jwoj3vKZcqjnD467mhXsmvXMuyNVT8eeCMTX4DXq3t",
  "key24": "32uRa9ua2ro8WpCQzbPopABVkajp1F9LTizpSbHZtJs7Rb8VuoKBsMK1vadN2rimxdimzTbXs9xJGKsuyrLaZBWv",
  "key25": "3nKKN5Vu4ufdWSe2P3BSTwd9ukUot7jBHL6p3TPeF9sRzXut6LwS5YEdJwBwry6PQwdT9azGKrLTBjfsrW5PrAHy",
  "key26": "5fUqLj35XuBjuEgn74JuD5bwUKuWNCNExVVuJFnub7w2sH8pPV3bVrNg8sEz7MbrmRsQ1xHyGaF6uz8t77fYTBHj",
  "key27": "5z9aCRSyjuxZRWnsm5hBNjM1KQanbyM617bbyfFRBw2nvbmFzF7cmfo6W7hkRWBjcmeNTmH4PJ4tyoMFMXd96C39",
  "key28": "5WF77p8LtEzqQU9yPfM7xj4PrF8ZnkQWvjFt8ZJ6PMAuDkHwwWzRRXGaEwTr963m1mNaCtKPp9kzsTgtRr7MPPnQ",
  "key29": "3EPzN1MMv5M85mvcimp6L9UGwf4G3cTkyJXzU2Vf4XzaqZSsU1DV8cK2g6atHFT3vdhcc14HMNpnhw1F4sMGoxff",
  "key30": "2ia2vrJ6qdifGe8hEnvapQMij91BNUXNxDGUJrNqX88oVZ2Trs3VSGMgLJfGbcsduhcr1VCBnGDPW9559fN6RYjW",
  "key31": "2USiSuiKoPc499LA5r7Qh7BdH9LbSz5ZFQ5fU4RvC6v8pDDBZSrwZX74LLZfSZhUJh3Bf6xgXvBoZoy2yH8oYgDW",
  "key32": "65kHkbziVFShyS7GUMA73B91NQQqbzZhYobboabmGUe5fLuKF5ZJw5osye3wnfURo1DcJ5TUQu7hUPuRPRF6cMRK",
  "key33": "3id9XDoLJzBcd8r7XeBHEfGSf4VJt83JiniMh2rsi9DcxZ6mqCehWcA118j4QRzb5z7kiDWBxXwFJeAuUv4wdoC9",
  "key34": "4o76jfjVdQ4cWjpPjLkHB45KmaJuwUVo8BG2f1hdzx3DKYfBmoXYSpYYJb8pM3RKzYufDU4e7mWrRyXQ5Ttox4Gr",
  "key35": "3JzvtV8QFzW7wgAcYxqe6jfKvePTaNTGBT6wX28sJyQUivbP6XUye7JvkCdKzm2QPq8K6WNWb8rF7SoLurTEgPqf",
  "key36": "2LZMbwostDJPUp74KEEYnCKaq8XByyFbbACW8wStWzyUZxdCQsrCmZt1Zi4eH3SfmDJSHnN69v6rBwUa6P7j7F1s",
  "key37": "4HG17Fdqtsknk4veyXStzWWx8hQWkf6rRude4Z2TbFvG3V3BT2KFD5Nd4S3RYbTqYMCWgtmHPBvQqpHrSEzSFVYF",
  "key38": "w7vP6XpdHTrLkDMFutNrdNJpZMv127SnbLshAh6W8Hzec1q76FyhL8MoQciEK7aVjqkifKgqq7XbraKCYHrcZrV",
  "key39": "2RBNH72Bo4sAcJ1juP9453EGMxDNtsXuyMC6UD5RZJJPKg8g4r4hiWMWE7DGhEdLKkD5N8hwYZHnkernRCrWTQCp",
  "key40": "27qMDAQ1JqLDmJiFaTCcT1cyv8896UvRcBVAo4HAJKqUkSEJifK8ZquVvpYLGEssLDdqLmHWv9wym2aHE7mtjWbe",
  "key41": "5gdzhQAttxg2ckY5qnYAhWer5pPiFKUrgN7MNGwuhrMU42zRxrStj5uaHkdadEEWZJwJukehSLeZs6fRpaQfeGd5",
  "key42": "3ZMjZaBDpCdd8W72367yfUDyxkFL9wA3KedpaZCvQX7oqKfKctmfNkvXU44TFcYx3dWxHn6KU7GB2SoanDMXeJ55",
  "key43": "61QYfyriHZMwAeNZVRN8qsrjBrbzjLtupyMZLpwBswpoYexVUvufzWENmVLtYtr54T3vVA7VAFd6KeS8KpzqhzHL",
  "key44": "5XvNvYwaJdhb4GH1HGgZtHywwpXrDD6d8NU48oWPEnUfrPLDSGrLwESxgm94wd8yZpypYATP6eby5q63KwfBaZ9H",
  "key45": "uz3yFi8XwQp66YNP1ArCe5zrCApu34xbu7XSYhoELYVTeccbpUg3Wb4uY9FeTUogjARy8dbfG7pCHRDTtwiYhCP",
  "key46": "4ZLNBC43fD9R7JnV5FyMThhdWc43f2L4obK6khXXzXiVmgCbD2BfFa873WN1axHRZw753H36Ucvks66DwjJLkT5m"
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
