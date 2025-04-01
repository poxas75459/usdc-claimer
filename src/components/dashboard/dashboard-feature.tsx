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
    "3pwRhGbkUpExc5YDv6erzWwk48Tru3XDVtSYsNhp4Tuc8fqdR4Jj7D95RoaNV8msnoEDLm1gir5hXoz84JEv93Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hVYy2YytmWNUEEi6zzkPoH5wj4SftcKLxcpC3qwtgvBioEyXUwPYNUidwbeiST4i2wqJugiZi6LinWEmgBwrhRy",
  "key1": "2w1BT1Ny6fzWvTX5JjaD55UazpUhe3nRrc89jMAfwHxzNM8bZrcbsYpWRuFhb6YgUL59Yvj63ge57xj1G3U4E1Hu",
  "key2": "63u1uzr8jaxog7btmTiMy51nLpTMbqMDZ66XtMJRM2FhCzBMzjVN9GDGx76eVSCnMR6x81Qw9daSbfG1qVpmfeyq",
  "key3": "2ezEb6gNMnfJMQDB6Ya2PfrgR3UBdbiMFjhegGK4pCYMABJc4Ed8HDMLdaDvvaKpDV7YZzDBzRdkyLu433GkTTtu",
  "key4": "4z5RoTUvLh9hWfjfKmA292Ne3JvUU5vLoyvGim3GYNPBpZfnfwohPsLjaTJGH49MGoyRt1D4gTMZvjHbHfTZgaAP",
  "key5": "M6UwofwoNGsjCU1rWpLbPj7e6su12bKDuHuG5NWR3MuPb57Umd5KFd3teTtdVj1vkXQqHW1rir6jqJ4q6hp25Dj",
  "key6": "42aDrvWQ6oN5L8LzL7W7ZFtJAmv38z5Ys5pQyeJMW63Vv6wbyr67tkTnuwFjyydxKCbfaqDpq4jGQF24f7sQwQh5",
  "key7": "2ywBPQQaZojmz8CJNFN13Uy3AeUQotC3tEtgVTGzmq6PHzq4NBXZhDdoREuE8WyQwRYnom3DCBejyag3FFrAKmVw",
  "key8": "2M8m5Y65B918RPze7JMYYkj7fsom87b2duCRpFG3EfRuQ2kwJx2QW6HGkHEShUGR1PqoHkxaJDQPfp6ysEPKJpD5",
  "key9": "tvazgPb4iPVyGCKVvGQYpyuykJcYkV6UScazge5P2dLAz1H1yGNi6L9qSzkuw5U6xmbuF1MtzPxcEh7pFAQJCFg",
  "key10": "5i8w7p7gT1NLfYsYWAqV5Tioyn3whAmxvbKLcXwHRc1K9n3BmYi1yu2VVs3n5FHMafKe4ZB3go2gq7NGTD6rK13c",
  "key11": "4gsZUZJm3zrJd29yExkYG5gLWSFDbdh6dcnmpAgEXY5MWnnZSe5NLKrFrwTF8MFbVhRkzXgFYQPeMqpUJVcvtxR7",
  "key12": "AFvHgx8uojTBJLGaUBbaxQPERghT45LyAkGWTR9WBodZfujDvn5My5tFLrtnsNh7fFx3NGdzzDcF4BmgA9R7uiR",
  "key13": "wSh8chruQjxQ5BwxGdbMfUJ9NTihtFy2RCLACijS5HCeLG4LiZnKkz4cyvyMBUd5vv6fEBtWydgxv8hauzn99CV",
  "key14": "266U6uTxKawGC7i6xr2sTVmAbSafxvGB2Nf3ViJJ8BqV6ZZ8gQeAVhXP1r1ACGJhRiRb3wpftY6o5FBuPHHNWtGC",
  "key15": "64Vw32gZsQQCnSF178euqcot5NijmvSpUpZTMHJrjc4RD5BgR1LUwNkshyPzbnAhghbLj75TVDYkJ3B6mWMrdGrf",
  "key16": "i28eYT1Xff7Z6z64qcUJT8FXwJCZ9SuUfXWmRNRYPBFCyMXvgK8tch9oHhehVVLmXHowwaT4D1Aqk8scarKAkxN",
  "key17": "bz8Rtd51meG3vdk1dn7KL9bmdy4SEBbjnU3FctiHdy1jV8UFHF4YoADRDjDfAi8pFT73s8JiDPtfDmFsM8iPFoQ",
  "key18": "NUtSPYNYvQKczeuSS9DQ7wCDMGRK2S3WttmT3BcZF1tgPrdGw7aXjWxWdudKS91iGXWrkSZwCGgJKsxytQfFbJ3",
  "key19": "51qE6FfY7YbGJ49Cj1WgjahbRRFmuU553wimQWgUDbAYyJTPtF9Zdu5RFPEaCozoy2df9J4s9HtYZuKzEiq21HuP",
  "key20": "5bdT3KFMxFxZ29HuaGXHb7cGhqRxBNzQwNwXgD9onhyHtm3LHv8GBVtUVMjBatsYZFFBepa4cT2W7L1hxaucPpfF",
  "key21": "4FMm1iGDNBezKpzu3BVBZat2rkwTLnF3ThWY4CFcMF9mruZnTEBuNMFCbF4r6FNLFdn2zfNrKQoB5yjkPx97U2He",
  "key22": "4uzy6yWu7VoKwX8tgLG8PsxK56bk4FCxAy9aZggkhjr6gyc2Ec7hqHqWYSZXYCMZTqiDDbW1EsH6m5ZG48ZsuP7F",
  "key23": "3Mw8cUi2PuF4w8hyPHsvR5pgD4Xyon3sfTgBsLbK84VzzYxMMNkpo8TES8C1ymTqqZ62pTyyJG4J5RbaWYWwjGug",
  "key24": "2c6wqjr4K7qhdUe92uLrsSdRfVqDKfj7aWKdb65HWg8jee133HxBXc3HoR9WaCupMhA7qZs7UokykTrTxGTLQoGy",
  "key25": "3tCdGQg5MX5Rj7zQrDmJzdsGWni9oAYbX5izanW2ohYLvWqRuB72JTa82B6C5khLkU7nxjbxZTVbTvJa8V2cL9FZ",
  "key26": "P6Z8ZzVnKV6LQefU9N9MbmyCjh5mrKJgCbLdLGkm6U35FAYaZp7c6aBjwAAiNv6K3cwpfRhnGeLg6yXLPDDXst7",
  "key27": "3SMbWgKkiKbP4duDr5hyCZuKiJ33GNBvPwdapprhpoqbTMyWraMNvaMPoU4d6ncukepcrgZpkuGXuJSw1WRcfWvw",
  "key28": "5u9VK1teFv5wNaNFM9PBqk33Wxc9s12uxfGPHHxDxUDcD8HfAZJ4WMXUGUYDFFdsuJd3Wz2uNBh8ESBviRBSTUv4",
  "key29": "2d5DWpqi9ZqhU5QgYEpbKPgC8njVg2kX9cvdvggSHE9TdoACu7kWzdpBAq9WGRpSmRFhFKtND4yNSFpDTkHYbnfR",
  "key30": "PwpBLAzpgj8XXzudBG2B5MXQnpLHAJqVq2bhMPMEYieFVoKG5rHuLG9aBdzFXyGDeEuSZoA2ruzbjc2CtturECm",
  "key31": "24sXkMT5CtmGbGoLwoDj3PteBT1q4rCpFMTizQgBaoSEzwUTHsyufEWxQR2ujDdF7fepU2UnXagb1qjVygG1QLtm",
  "key32": "2aAbWZcP92mW5nmaPWSssVoUADzZH4DptTW2TaoVXsjrZCe3k8313JxqyG9grGAQonAj2MaQUwXZmN3jNuJqhVxh"
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
