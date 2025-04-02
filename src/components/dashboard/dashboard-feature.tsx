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
    "2NNYXsoovnpDRz55E6oRPPC4eKSwSa6rAXSiZQ3NZjkskhRWqz8b49RrQEZifVLbnQKVH71gswLJShUTVhWacZiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BVhfjA48W4Zc1m7Y5RxAmk6U3ajU4MSi9MDHmXUwFcizacK5ciQCSe769zoZh2KFvzPzsw4J2bqB8xeChfm4AY",
  "key1": "63Z86LNsjfp9yYnEXZJfXuTYx1cpQ48fdeK1wN8Ms1HmEKC3XQ5b3QRb45PaY2QmCaYcnPoRey4ndpyBwRFgFVEi",
  "key2": "ACu4ZomahB1pLVgGiJAP4vSvp65g4hcTiarT1BxpVAnXAMQS9k6f6H62SZnqGWpKDZnGRW7tbcPhaMRKtut5V4B",
  "key3": "3WvoWiJpABxjGc6F8X6jp7tsnYBfizQQPSU69dKcs2y5YP7o21heSkFmiSNKWsvGtoCUyYkZeUudkS9hYzyAQnP2",
  "key4": "FHVUERJA514din4qm34QHEUKnDe3DygMd7nsRYhVPQ9B2iYN3xYYm81q13nJLFq3GNxQeZHgvtv78RPSCc6Avz3",
  "key5": "5t2X77oVobDDgWRVE5GSxCXrQovzgFUwzRy5Rpz8ARXY3PTJHFF9KyZVsQiGEgzCmeMdu9DrLEGprD3gW6p1CBnQ",
  "key6": "55Bsuk4D3LQH8bdraUepQB6WkxhBg9VHB1jCvM6JGj2Mof39irKiHgFzqLw5rmrAT28EiTYB5R35toWpdJuoobxW",
  "key7": "55WaT4jKRLhiezLEd28xPkDZBvNDwMRBZ5N1jW6kspctDhGWjbaPb9jfC1PCa8eSj34iT9vDBPwDMrupFjZm1J9E",
  "key8": "3UNYSfrecLhjiKbEgVLhyPCdwdkLM5zLEh2AmDnsfd4X6JXsuSTJyMJS624Ae9AgdgAbsY9LcWzCkyrSEixj3nPq",
  "key9": "3fRCCfLra2T9vVtYQrKw4xEZfZazQaQFYf2pkj642vMBxuMLQD9haUQiuzcQs1Kvd5KxSEXDDchbpVdSFBt1vBZV",
  "key10": "2iPyvWx8EiEG1huuRse5QxeoUWgz468cE1UWNHuRtkrD6kJJotSYftLwDkZq3vpW8TH1tgNLKstWvHdbQpoE6WVS",
  "key11": "23BuLMQJbAcJ1mMhxBHZJ37wzaw2wnMvi4Khtx2cwGzui3ywJEnyGSbENktKAk8wtoByx1qJVX8g2Y1bx2Ug82Ua",
  "key12": "32VRtBEHbAHapdVVbYwow9L9gbD7u7SvvLWHjASwTt2cZuvQqF6nrQaLdi6s7bWwpnZDLFoWw8Xo3Axjy9NrZGKX",
  "key13": "3GdaqWTTAS7ygrCtfkMaAV9ZNsByxQty3yVm8MNsx7m7bJkB1XoeXwhiUTyqUSCh35XmeZwryqDgFRoufaDVBY7N",
  "key14": "3YnsFHXVeXMfs9EbjHmHFZzVxBTqp4pWDBY4vhbhhwzQ9waCWDhwkMQsygtULFwjuWhqZaVdG3HLQNswB1gj85rs",
  "key15": "21KhVaDe1PmPFRjqGtpc9v4fURSxjd4fjqkYmGQJXcZY4d8EJ1MxcpbyUqRuvptFuPceUZzfqKfdDiT8KMTAriBu",
  "key16": "4edBzjMaUp8dPtJXwSUxzivn7FJcUNVQeNceUv9Qc6Br7SzH8H9K5VvDDBgzEk4cEx6up2R3oev7oVdfK5LZN3bi",
  "key17": "3WxbfY51kuupS19E56Fjqeqb4c6U7mSUwzSS9LSGoYz4goAyTxYaQ4qxU79izjL7XBD9uorxvzfVBUb7rvGAjFnL",
  "key18": "2DVXByp7hCWpKvUfN2Rr3oVqHQQsirFs7qTxQLMEXdMusTzG95GzDDazkpgfLWbnNXxYow7sddoQ1hkFTzEjQnH9",
  "key19": "sPyngmiBJd2JNuxzhuYJ6vaXVxsgtMTcSuwW4bLVcd3nvF8jPh1PP6cUCzonCjzi6ev5GQLLEnzYa2LbJxFxqsv",
  "key20": "ZdbWiwGDnSeSfJgc1aso7fwtw4h8HRjtxJSTgbcXREoypYP7H5a7r5Q1EZMn3sELnjPoqedeUt75Jhaud9mH79Y",
  "key21": "4eZyGSz8y6k2Tia3rS2qSKMNHjAzR1D4hEkPrAFs4pLx9jahDh8ZjkJhARbFerqWuaUq4V28YExSaFh1aJS4cqax",
  "key22": "5LQ3hEuD9eqDzCa4BxCoGfksxWYtAM44QCH6Xd6CciTgfh4tVhS4GToQya4s3EPEgmYaGb66kwFmR7rWNDuw9ama",
  "key23": "51nTfU4AT57wtMAsuE1V1CZH5S176AuKGeR36vEeNZDSiruDPSh3DnkRu3MXScKjmPGSC8N9rWfb9xCJbVZKTdKV",
  "key24": "Qh1kYNJwbSBKAuhWoCzEnimhwF49EhH2aMTXpHxNa9eFEC44pRxGpdcee82DdTHusm936hWWALhxfQkcTQu5pkY",
  "key25": "64WbEPTSCvs5rHTtyAzViWc5PGotZRvnkxoeVDrhEDdy7ZkVypFkZ8rPz3sJaZGsABjnSjqFdUTTbS8FGP4RupJA",
  "key26": "54vMzPAVtNCUs4vQgofJXXPGJHwS7AnW4Q3YMZc87xGqQAoTXLgufF2Xw2p3aZg7Er6ibc9vwSpmdGzybzKbo7hz",
  "key27": "8TNt4LS6hyQgGdtbba9yxp2adinGUNYjxMyPhtP95VfZvJmkVFQos2gXbBdBi45pVSavSg1qayWLMmxV4XbCtBc",
  "key28": "3ZNaMZamRiJmaXBGb1yBwkxVvkYnQYDq1vZmFLw81NVZZ8oAHENHi657yNEBHGAMEQTNfLZ3ZWYSSQ1ZB1ZCE9NZ",
  "key29": "5Zz2c6LAttXkkyEjvzhjBJVasj6QMB379HXuidakAbnph2pEdauZsS6pP7dTqmpvgUCNgzMnHLoyPKhrpjufjbyC",
  "key30": "4waKCah4Pf19mUjJazuUEc7xyy5WThZDtp8sXhpu28qf17W3GcYJMUxv1PWL7gKKjsjgNTnVu3tpCdPPhrH87kkm",
  "key31": "2t7hPyJZCWqEoXUuK5k91BdH3F4fdNvAdSSHUpkRmRFkymoW98Eq1XxjfjU6CzeR4xKquXunKfhU9rdgB4C18DnW",
  "key32": "29c7aju37JzTzwgbUQ3xXV6YpuuKnEr8a12SbiVrAWFWVoMmaMm4SXw5fpX74pY5zGMzgZ3oAJpKqCBnvNDCSE87",
  "key33": "mZDNETkDp9ptodrEzWpiJc3ZLkfWqwVtNvcpPz9fEoZXDHnGNFfySGwmNkfjW5ceitf6yNRKNceZNJ1izK2T3U2",
  "key34": "22AbWbHFKqA6h8CNRmXVAbWK4sCEqmS8E46X99KgrtQCmmXGJx8LzzJv6FzNBvAh1a1bQsFFca3zK7PNs5qcZFji",
  "key35": "54RBSCMQyNEPBUA7fVExbZSHa2QNeeP8HtDgUv1sPJbpawiQQLSrH6JVpBrqZMjjDFKKcueeGdtxqN3MVqtDpr8m",
  "key36": "5GHh7onfRN3DE3hnPMLEJzxAgSvxTUx2hUVddyyBJoVv2y5KAZmoosKNb1V2jjHdHqr38ft3BP3Mq3d7UVXG6APX",
  "key37": "3JGAzqM2qnGuTu9fr7MRNFpDwni7CdeToxxz12V9Pp6bPt5GYYBbtJgADq5bRkH3u1AfGo4XZbJZ6TUJcEXvxZrw",
  "key38": "4dLPsF8ndyL1VxsokMXkRVgARvwiFnc3Em78HpnhZX9Yc5UknEj3RXSV9BQzW7yfocPBXPW1JMy919Mk59DBCX5N",
  "key39": "4tLuanaoiuSWyJddoC5h3FTHSuFVes41Y6qzni7QUyBnpNh5B3wFSdxhaPJrAzRZc9oYGivd3vM2SagZjEfRCX3f",
  "key40": "4ktcneWLLWhVNiTNwYH7SrDy6BTArqaP1PXPi416iLX98y9nkEKHFyPqz34Apik83SEkC7GMW3VNyTMxymRVcnWq",
  "key41": "4nyCo33zSP13exo4GrYdz9HiXnTThx3yXRAas4oiubyaQdYiinWrBR7G29WPRnhnLW6ZnHJBt4oRh6J5UKXZzK6F",
  "key42": "5DdzMiKuYpX7rfD5p4PsaKK9KnpXvLZBAwUMbqQpwW4RtUWyAZnY9Y37n7Lk8nDvfHfmnfiQAuvwdMVvUXf5qKLM",
  "key43": "5msANggaLLmjRKWAUobXCR7H5AQNmsNaMdrxcbt68feFsN73TwC5jqcvEBAPA2mTSKV2ZqU8T5WPaW1BwCaV66dg",
  "key44": "4mRRbp8cfrWdftQ1n3aWqW9EYBgiLuPE4eKzf57SahHNPasX6rN1eHvzAAPtc7i3Yc9r3g81XcVCraWsjnANGD1W"
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
