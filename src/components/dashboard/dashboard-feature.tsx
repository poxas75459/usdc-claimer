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
    "31ezEpGaJZ18qvfVu4FNW3ZoJo7ZrqN9HhcgqjHsFwh5sQCUshYMy71fzfH2ggbamr8uRQJZNDW13UjugoZiut9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8HDgTM9EUpTu5jVkp5is3rpHhnmUKxo6v2HigPLwHEyx4pTxzbG5iSTACxraEUcfP4QPPAFCdK21ktZrVHb8Q8",
  "key1": "32WBUiWquMWZGhtf7dCyTGmToEhgtSBLnXvaFCWDumEPCv4S1gVqrnRpWsBBPiN6gqR7LZJaRKZQ3KYmib59SZN8",
  "key2": "5wbTisgwV254PGGHKFRmVL3g9HHzJk9TFJtqSjB6TiZWX3crvWhEGqVCqoYue4geUz2mwmKJznGLSdmKURNzUQbM",
  "key3": "J6vWdKqQQ5aG2Us6sW146XkWBjDfcpiuuG1B4UBQuGGZVRPEbnzYRopbN2bZ2uyxsirW2BA6yD62w8RS4zKdBiH",
  "key4": "5PMoCqdy5DW31Y2UfzCRu6N6TcupUchCBJL6NMZcQ9cNnutmTZUzRNCfwz6NRBuUXsQ26Qejdu63YPsuNVsVFcC4",
  "key5": "5wtb8n2uU9omN9gy7LoPCii1WJUcfP8L7DkXBri6LDvtS46536f55a2ASuMxQUiCwpkZFJSgrnRMhVWnq6e54Rje",
  "key6": "5QmU3WH2eYW21KosAw7Y1xbZEdpk3bagpiowncmyDtBn7gWbe5JR1hqAFqDRxurRJHXB65DotMPGSW1zLoKo65F9",
  "key7": "5VbjdX85XH7rYegMU6LHeBPh1t61j9jh5snQ5vKnpQqKrZVBvHF53L2Lc84JZHK9psRHkUHbAUK1qtGyAP6reqxN",
  "key8": "YmpzNsYof1vPKiYMg7o7ZhMvCcffojaTY4PEmfS2fcLyz7ADB6HhCNCZLJGtdG5xViaVzBan19wLpqrSUazGMsj",
  "key9": "3VqqHpZrvKKgTyJ1ndqLeFs17Bz65H3XxPvqdMNYS9QmBUvu4YX8FXbvaT2DFqYfPUJ98m8sWbWKJMRnHbWyzYag",
  "key10": "38k6bXpgcyK7YsZHh61sBkP1Sx2VqauYxUNXNBjrHeBiNnU3AXxeckmhG3dDGt36zZSRa2y1TqhGvotrjfnvwBo5",
  "key11": "4WTYE4sgaCxfW1WCVJ1eT71pe8aDfqDjiV5cAvVQfjhwP8fNbtRHcMLfvEG4cGpCiQTR1JmkcGGXxS5A34z2S95P",
  "key12": "3TJtEv8rfyduhgFVV7U14QuFKNJD2M825L5XhvMnThcw7TpBGpQznzd5EphVh7EDLQj9TSaWV4hVmQavF9ZEhPn1",
  "key13": "5brHpJ1AvGi6Ht8Gs1MatiRRghRe7DDNwikDP362P9kJM8B61RAtBmbRrUj5LBzMCWWEh7KPVW6Zxwz1yDF4K6QV",
  "key14": "5RPjZrrc9utsdMM4Cr59ofJxWAnBfsED5cr4AkUAD3vmx5JXEa9ZwKGKKqrcVLvTp98N8Gum4oh8MiqK7SFEQdoZ",
  "key15": "2TsAijv91XsJxLzHGKTK8Vbs4iXYupFSUmh3RxcJ2KqsNni1oWkrKH4GT2hhwGsm6vWJR6Vvtb7FNt7zaqJdVXZg",
  "key16": "1ErYACZSpEgGCdyMv6Lqg3CJ38yWKf9ba2pNW2nNHCgikfNCVgQZF2obXbXCtJZypADRwbK6PEhMi67kWrhar2Y",
  "key17": "533tECjBqx6XFYVjz6ccWz1ymokujHQQpNgvMXuhHSvkYaNzpnXLBrB5gAQhQDk6itVHHyr2JmpmkoCSYEX5oW7X",
  "key18": "4uQbXLmyb3FGXPHr7cQieSCafPJcKWEvmo2YCDzkeLHXxV5ZarDbbv6B9KFY21AMm329XyYpJAPn6Xa77JeKzNkm",
  "key19": "2UTf7P8jF3Pmk9FKkuXRj3XpQ2HysheUitXkT3JmqY1xX4d48SsxayjdobKq4Qw2bpdgWbq6ofgoAZkvj98hCSWb",
  "key20": "5FxkyRBs2HPKvhQp18jPu7UYyNkLxz7ZbVNR9svLvZLX9Vqbvs46MiUbtmoT35DBi5QY8GfXxc4qMrc41ZvUtxed",
  "key21": "5pymfqgj3sYmHekqUdS22J15frs8uhbbKDSdYdW7NcVU4U6nYmJwKVXAKeAELjqAW9uBothy9ZpjBYXnCBu86CMc",
  "key22": "3Ksrtdfhdi3ZZSan1BtwK7V3GaBfxY2nssmzW9QewX8sSG9ryKsNB5yLtkjh3vMX5yYG5cY6pfSc27JutJ5bVkQN",
  "key23": "3C7J7QfSYDSxK93ukjGgNT1DSPkFyfoRQzprhvUrqa9jccDiJZuRyD2LE4BtFZxPyfrFKDFtm9bmoAvZeK5eAmSU",
  "key24": "4YHKYB72EJb1c4dfpd3TtRL1VUEB1vr8prvzzsE3yTA98FaE5vf2roHvGGFd14ceET14fnzKdY5h7zbSVZXyGGVN",
  "key25": "2GtaVGUKYtdWo47QeS5pGXimPswrSQ9HTtL7XHaSQeHH4GpJqJ3U8w2Vn5Gp65fCwKT2YKTVEmdHdjHKJDXym5sc",
  "key26": "3hVpQZg2r5RQoLr1tNw3unjnwxKsytUsiGWFUBokxUFYYb994xJL2abqjANFRMRhwyTfz8F4kmiEt7hfYYtC9eQa",
  "key27": "5EPBSTWiHryhPDy1cLnM8x1DRmLPYXEHgojj3i1ENM1Qai2VAPeGt9kZwExykexqwfGTgt5drvi45YNa91VUVg1Y",
  "key28": "5Xdae1cd2xLmguKK9iMzsjtizzeBgdhtpDK4a14RzdhBiRizus4a4uUmqzayJQainR7RjT2RDCTCX5KrpWPP8CpV",
  "key29": "5tewdDJ7T6QAZeBD9MmAP4XzsvtzkTLpH9beTW9PqNCkChpLM6oC4EsUg8bkuJyyUZh3jr4ek1tHoa3SaJfywBvG",
  "key30": "4jBYdqM9vuvU9XKbibvgegzvWVj9emDk1hDRDPofTvUUaQaiJZUiFqrFeX1sZBoe3mirMTohQAziW8ztNM5HydCe",
  "key31": "58MmdYEvSE7QhXmdZSnNFRiVnYhvry3j1FYn5R7Wyt3TVdBkawPwwWmAAqWfCs3NoiTBkktXvYRJxtV9JvsCsNdR",
  "key32": "4mLRJKypctovGDwmGq6Qh1ELj3qXJSriZq4zQkAoXDGCbHzbFAdL5kuF2VfF1THRSVf7pUiAa3eRDywL8a4NjQXg",
  "key33": "3uo7ZiYBjKqttycm2sU5AkQicMSUwxVLSLQ5BUD3PkpTMp6q12tAHYLd4xSirpnDzs4Gb5X4hH5hWGmkhy5gkWni",
  "key34": "VhteTgXcfYLeSB3CzdMewHiDWLuYN6Jnb5m6VVtPMf7fHcYhCxkJfPGUNjE7JpPWyb3QzR41vmn6ft6qRxpG8tz",
  "key35": "5QpeX7CyxE7Dfua13x5CHaNvWQx8HLi31LHeeDui5L8vUoXo5mmnTtThmwNscX6stPDMFu1sDZrKsBWwfg1iWrdB",
  "key36": "2754qpyG6yzEwAt8LFz64DiPKy3q38d6TB1AzmikT8jUnJUBWV6XKq6XwCDiAFt3JPL8Tspup5PyndvWU4vrAfmz",
  "key37": "5U6tHM2GcM1SdBxDei8EcyM7X4ieWWtSRBJz99TebnDSTEho8hTXaeJC6rg12B9pezxjpDj2n3b8fYQ5vH51rRg",
  "key38": "3NxoHfnarD6oNArxDkusdcatfBdZV4w6F3qScY85ZR4huRyWnNmBDkaHKByeEyq3P4u6bobWjGKV19r9711BcE8S",
  "key39": "3iWxJdChs3xPcQWLRrwwhmWLwcvYpwPngRkcL7cVTPAHpFm9i2qLk9H81kYZQsR2e1rWbfM1aWHCZDUrtToari3i",
  "key40": "ztZtW5P6KtpzJwQKVaiL4Qq1ZJ5xir4GYJyqVAS1NngSYLYD3kRz1sDn9a3FofSFXSroBNJuMBAJizCuX5o3aeQ",
  "key41": "3nPFR4XrLt5ioiwYE5i6BLQ5J1WjVvXen7Eqjv1J6dMgpYi3Lj2gfN6nxL9ebFaKYMHmXEkD2omc8nDQNH1PfNVG",
  "key42": "XfS7SJpvj71fK8pCdC8SJTQDfnUErEQhQxtkqHURbK7ofLmwaUdwGpTMpRyLMjm8uFQfHPvWdaTEuxQBAxNAnAg",
  "key43": "wgNRb5feBneQZeQXnF6h5PLLGnrcWaf4pwQrDa63AV3y3PjU5LskAoMmEqHz7TfTurfbW6SBbXGB8N5snroj4d6",
  "key44": "3TutCmSfpT3w3wzTvb95FTnfSjDCN6z69sbnKy4uuyqCeTNjaoFhVEyx1hpwPB3VwLNjEYiboB23kDK1AvLQzF5b",
  "key45": "WeY88rW5kQVx6VB4nK7UozdjByP3wqzpKXS6vkwBiVWG3CKhFqcSdurq36ApAmeE72EaMkMBoFuqKaYusNcJ9en"
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
