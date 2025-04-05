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
    "a4gu7S441xFqUHG1mhWJoWxmhHkuGUVGGjYW6ZtNBAqz37eL54FjgDcirkrpGMQ53gVrmsTHM3jhd3cXS8YptXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TKVi5ddWcgJk4kEay6VLhCeFW1BcMA1nw1ceqtrd9Mzut4W6s471QULwFwM3PxgVYSFE5ba1eUhVzexn8ENjTg",
  "key1": "472e7yjptG6CWJ5JC3TrUtAjzViKEvjJSLz7NvhMFHGA6Zz9MdWXXKoPxTXAVFhynrjC7joHoBR4MmdgWep9546w",
  "key2": "4bB8Sa8meVtpPAeEStReNsknFdFmr3Sv7V1StpwLwqVP3QMMZd5VWfe7z9oyzgZd6aQwCmp6gznbatcrTf2vTFwc",
  "key3": "3Njdii2WkWxZeueNLXB8iVG5XnxcBqXG29RN56VdPqdQpQ1Fi8DewTCSgZ9KFBbxHJ416qfk6Wh5bnndBo4RVzmV",
  "key4": "4ALGdLPu3L6Tr42kzP1BdCUjQEPNTZrunY4ZMkpEt7hT9vfGmnM8SxK1sMPH1sDf8686kfMsJBSZDVQsewA58wEF",
  "key5": "2Lf5XQEVXAsQtoKKL7w1wb2ABo3YFquk7oXB97Q4Dnvf3ExwJN9wsCmxGBM7pph5QB655sdMVeCnzKsLJ2GdzHnF",
  "key6": "5zXSw12Ywo8xMJV2z3vMFe3w1AUPXKTfua8oNEa6NTUvZKSQcpUZGDwX72FuYnid6A4oTNYwgEVgK6GnNX6gocfo",
  "key7": "Gwrxi8X3cmWB1buQmPohv4faTYZBYzbXLtqa1jHQ8EK3KDaHtjHgKfxW2Aq33R9mBmEei7pPGqo2aLkgS4JT1Re",
  "key8": "4Y7burb8neh82t7HucgcPattn6ADZSJR3cchpM5jWQrZiL9UDEGTVR4o7yko4rgxqhUmhxLjL37r8FvfwJrUp3U8",
  "key9": "33DWMRppxBDGnkiwo5Db968WmBRbPkahSSuJcZRFUuJXDhxMTfjm9xXTT9DSmvBrvZ8hTAYoCHK4voPPBBcDfko8",
  "key10": "5WFmwLRhinaBKGoWsSAKff5Vopd3aGTxMtyXrvznwc2NCzbZ1SKJwJUXyqPVfXzoiJJogeLzcFMMXQp7TYaW9vZC",
  "key11": "2YW7u8Ka8N8uDqAJCNf8naBua2XXtVQ7TdNuqSXXh4L3hTmyxSF5Cb2jRE1yuXgh1i7STvbbrRH4jpwbfxAu4zs4",
  "key12": "5yFmyPG4xrFHV6KKWzwoPtfkDLhGwanV8GfwVizzXe3wUdMF2a742dGSrfTG1Qjb3uaxXyZ55xSgAnRAvjNNY7YP",
  "key13": "2FUToBxWpTfs8Xni9XAWT5y16Lj4moTeiA1HaxYpVdc3gMDLi4fpSjDNUtxSScZi297dbktaS3eCQMSqmFd6JRwj",
  "key14": "3FhtRCPu2KfKLkxDykVst7xT6oi3fphNZWPPxmij9ppQz5rP3mZmuKA5cDQM5NfFWrigvmY7BwuUNikQzVtQs7Bf",
  "key15": "4cCiVjXjxBjCdyWgfGgCewRQwTTQoL63fjfXSyf3LV8c1s7FR8xbig5NMD48sqg83WzggBRs7mi6bkpAbKfDjBGK",
  "key16": "4228QsRjBiEAPTZLWnRJgxV9sDuV6ch1rSSiTWjpbLbqfDo6WVA2MVV8wKzRyzpyfBFA3arFXdReTStTrXu3HhTf",
  "key17": "JUjKCq8UVMLjkX5zwMGh5aZtMLcWoSSUnRwG3w11NDc7FbMTnUVxPk4TW1X91AxHSKDrkFrGZvi4MMH2R8iDF2o",
  "key18": "pDAjnRL1oebG7Lrv5d8ZXH6ExtP4ACMwWfc5t7fyLbbjSQaPJMd2vnVMe9ZRvp3S8kWH9sGZn3xK4E89rEN7kAH",
  "key19": "3jvREYvPzvD2XfgyV5QTArud62Xh3676zymxEnuGkvfZxcoYysZgUx9w2wheWT8auPbLBgih52jdyXyLkVjqgCXR",
  "key20": "AeGAxmX94U2MDz3jEbqjWUyFGW1svg5J15NaA5WYiRSg3v9FxthorRN6WKqkxfiHWKX4s7YhNU9CRmoAfnCwtyk",
  "key21": "5SByFQESLph9SCjc6QoG6JFMFPMqFPm9apxtrSDTyfZPnm38J45J3fAps9ZvQhMAaAwvcZWMFKijRu4XnV5goK6j",
  "key22": "2EZjeyVmHVVAU9fbuTYfg6QvoWabix57KGWKoYQJ418scVGpTtcysB2xYU4kC1nLECyXGdafkueaxDDBcH7M4qah",
  "key23": "3JhbHzgDqPVAZYmETRCAjoWGQc8z2wPbpaM1Pmbr5roXJesdUYHJ2Q15NCRXyHmRPQdEutTx7fFwuHiVXP4oUVBi",
  "key24": "4st8yjcGNN2u4fDksqdSg7eAUTQ7aiRAwBsHySFqj9Vg7hgjVC6u9XnfP3uWyDuPWgHkMah74YYL4ktCuj1mMXt1",
  "key25": "4z4zBTCqMkLz48A5Bt7tPU4LMjH2eFFoQoATroJjBCCdY2zaBT2tQpDAAfYEJFPYqUbStsi3WDxKK2voA2MtHZPt",
  "key26": "3FhY9fCP7oH9rCfA9jpuTMpsfJFYGQKCWqUUF1dprRKq6aKdgPnFqq4YC5fknzRJXRZKmn8YFM1BozrEY6EMZ8LA",
  "key27": "3UR7Jpc8pt9Jw4edvpPs1N2cXZHiW1azCHgWSZ8fxdnTyHLC5GsX2Vb6CMcRwAVWvA6wmuatYcTQ4C4zUEp5rHAq",
  "key28": "4MN4bzVqEruKow2Y53b7Sdx76fodBvh1SSihpVRT8bjHpVhpsdRWmxGqqzMaeQ8VYHbC6XWqUy9uQLbCRhUDwskT",
  "key29": "3rrgCPvvmS2qEW8tMHxfG4XeQ5is8HASFT7Ep5hBhNiyh9QtiY6bo38E4uvaZeXgbpPB4MQ2C9xHaoBH6tNJxbSz",
  "key30": "5i3gSg6xopuSipyDYafsjoDGNcn8cHLEy2NJYhfLPLmzYc4wxp1sRNMELf8SD5BKkYaQMxEFT7ph4TAdWYi6eqKy",
  "key31": "2RgnYALwZvXsFPjYGwJ13GNxt8Dz4wouPcdLQ8eUz6JuEehmT1716wGG1ysgnAEUZcJJ5MteLee4kfzCMwpiaWwT",
  "key32": "4DP7AJXpo7BcNmT7Rc4LzmiWKhERkXYFzDP89vcEcuRykTbAeg4g8h9dK2eWbWkvT84r67p5d4Grj4D7wKJJc2Y5",
  "key33": "4CXqnxmJ9UrAvEvbreiYPYk3ttjpRhDbPDBbPbRDkEvfuKoURFPBKbfJw4NApg2WZbtVqwzuHy5x5kmhvFyj9PGh",
  "key34": "2AtQ9Up9ajzWd9YYHYovJrDmppyeXfCkm5A9RL23iaWSXQU1Yy6Nk4zW7FvGdhYa8j2XSjM9sJCgNEHCah5jTaHq",
  "key35": "5DSy8XPHtv3CQs7VQFg6H9t37eCbmTR4Zbpze5P9LhMG6MnYBCvJCUB2ktR9YL3CQswed5fGtQDHspDQViaFvpxD",
  "key36": "2usW2xBgarLN7miN3SuNbTM3BGNVERaA8BwRsswerQM6MaNFsfgbDXJD4fWw313BsyZ24kC2CBU669MwBtioUSYt",
  "key37": "48jc22YmzvCkWmeAKUkdjCJfWRYmLyHudeh8c7WqAg7fZ5uhM5xrjVuFxwCU4gn2tTMnV58at4wXQBB5S8HcNNN8",
  "key38": "4Ku4gAfdjYckZnXt1ohNby4nuFDhZgaXXsLLfDU9XqDQMp5SFGabmQA1psqeBKvBMr87SjmidZ7wf1RuERtH2p2V",
  "key39": "29mk9Tc1Rp65jRh4XADKH4LToYahRqadPnowiYPAnHiYoRavQLDpNhnpzzTLQQUNEYK8rNBAc8hQMA2VWhgVyXWp",
  "key40": "2KbgCzPMRviMCozxC864v4Wj5yUHUEiiW5qRWuN8tmHYgsMjfGPDtYF8JdfGHpcDsAfabhM1rDoAsSrmqaEavbmk",
  "key41": "2GzJdFhHGHM9Esu1va9nDJBX5P8ribRZWMPZBvPPXEdxUxtXvWV4un2jaD3HhVVoFCKMf3QFVvymqgbZn8FfSBPe",
  "key42": "2HXs7uyXpcvpS3SNKFnwhEGJREzzhVqrWgrZAMdJ7SRuE7v1QxKHYQ2pVtmewwTHnzbKrU1ZDh6oEwH3Qmz7bE4d",
  "key43": "v2nCmCD1zbGphbPtMHmQC6LrLZs8TYuHBaq3Q5PsAukwgCUZeJD4P598QgQ78M4toTsmqyXH1qnHMUmCp8nH24m"
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
