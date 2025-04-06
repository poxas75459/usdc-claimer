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
    "5acWgm24NQb7YCL166TGGP3tzQSLnSPyAa6qem51J9hokfbSCeY582Mas5vLM17pUkQaPvXExNsp2gacqBYpqrX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3tgxi2BrxdzLazv7i8EGsrT3X5fMejuQZpSk6RZpuMfUQXSLAkbn46FAQ1d7A79tLja9fU5oumG3ooMZtf4xyx",
  "key1": "3zP1zvarEUuGWnPtA9L8fpnQ4YDkWgP4rjfvEXyBDA3kwuHmK31tJSVxcrCshRHjQfp36XvD9FVfNXKf5imR2j2E",
  "key2": "5doJ7JVo8iSgU1tui7FRJ1nBPvwX1y84uxLkA94ndHcRVbXdf3ebqshjjqKwLAwGgtMAUBo2JTwuHtJYw3duVKRT",
  "key3": "bNbXjZSzQ7TCduuQQX9puESHTyAvYAnGu2mkSJL1oUQnqUDeAGaDWMvunRkH115uJb9j7pCCzKDqaYwaAvPa6Z6",
  "key4": "5dptKxjnf1U1DFtgSLDUP7RpmmkvTyMinTVobrCiwL2HDm8Np9gA3dFt7ZSGVnKn6pZBok28fZ7PYt7Mn1N3JkCo",
  "key5": "5NvgXdXd9meDKzKytRq9vg6k5zbZv8whRV3dZa93TmaScPKYKAQdn3HijVF8gAH7zxjWv9YnGGB4rrn558SnpP7Z",
  "key6": "3wTkxJmthfeYBLjfsEWDkzwADKgytdJjhX4SKT1Vjvn3hxjUsY6M6Rj9uKcNhw1jzj4zTWAoo3aMM9KmSWWvpz9z",
  "key7": "3fLxWaRFdFk9stzjNKMb6euqYv4pstd3fh2dugew92rVFc7rNGNcieGrYbxWzzt7mq4EoHgkk2UfttJ4MiioBz9P",
  "key8": "4knsUsYVMLEjccTRSXC9dYboAAQJNqT6EWmtf9HZcxyxvcid8NoQJKLWPbmC7VzroQHk7yi8WeqNY1xE1McPatKe",
  "key9": "4rxcSPxSs5L9MMzVDgQQeaKdLaNorYtykPb9kcX5mJnB5CJpD41zUEj7aQcctavsnBUkY7kcS5ASPuix6hEGdW9B",
  "key10": "21b6BCJmviYXwQbVPUvNnsYs5xrwdn7byriUMY4x6g6sDmstN6PNyoS5G3Sm6XJvHvU8fHPFj9dnQheeHjCnPU6s",
  "key11": "5wYjHuEFvcfft69AJX3bWh4drExB799AXwu6Qk189TMoRrLpJb8jTN47z4hmiygSLWob6spRCGvppJRWcooUZyd4",
  "key12": "268edoTYE1xUndtGBVDXYDwfo2jKfw8UXmvjt4myfAnkLjyppnBgujE537QvLK4fsuD28kB1nsqMBcXRPFL8vWMf",
  "key13": "5JxJXxwctnDw48dzxDcKzVmSGHKfGSCgvgZ4EhonA7qFLLBCSCVvpJnkDCm5UyMBgfAyoztKvQ17GweEvVra1N3q",
  "key14": "4HHbtSsZBYsftH4XCigbnrY5F4btmKT7dhUi1DXZUpNDt6b9196gtcSSsHujYcjayw2LBMCcNUGwyDG7EFFAGrXx",
  "key15": "2oDpbGUkQop6svFWUcePLv5eemXy7UwBvd3MpF1pt4kNAYpR9eCFjezkdVgX8KGo366rwyNE8bJmFHaJ8YiMSkgk",
  "key16": "3Ca2ZwQEqdcnVKHxj6yKcQzqEkyZqfo2dMA1mP54CkzDSkiWVFpTSq18Q8zaDnUZEaKxztAHucf9S8pAE5EniynB",
  "key17": "3oRmuH4zuUaNh3dRtkhaP7CCgCoXC93K7WfZznm6MyHurzqbrpx6jBGLSnCvMgKonbiBh5TC2fbadxwLbp9V6Eo6",
  "key18": "2AjTgEX38AMYFDKVJyG3LnTY5aH6X4351ZdiNgye8WvbHE8ppQfPfETz1NiWnsEAVwbu1nXtbQRmcPnp6X66u5PQ",
  "key19": "5XQ7m318XXBTNjStqRXNkxpf5CVJfcn35Q5gPxGxBLXpBCSKtDZK99AcbMDe5hf4VWMei6o6CLb4CrftKZcrHc2N",
  "key20": "3cF3mrbTVionPLZZX7joTLZGkxDmSyfrVna2GiAjoNuPTxyhgpfVRarqvVZG8tD287ajvYCuUAySS4CWLjKssnyo",
  "key21": "5KXhEJi9hh8XScu4JLSKahZ683tzzxHEK8kDukC2kMFjVqQocvbPf7WtQaQZap96SWNY9YvBjzBbwH2uT8rdq4wj",
  "key22": "49YRc1yovZN8opbDLUDWtWkvsZAVrTHP6rnwZPnCopUqUmij4iSo7f2QymfweDmxYC53jDzhfZHejHaAgL1x1Wcx",
  "key23": "5b7iVbUqqqLsZbhzKDP4syaDmF9wYStjpLbKz2sbdf94LmHKHzbC6fcfQNkna1yFnKQadhgrgwMrcApPzw4dvw13",
  "key24": "67Y21RPHo4akyNGLwK6nRTgmMk9g1t9RxPG7USQkpbxxthUM6RhkWwSwYEgM1exjW65bVLnkCQh6WMwLX239QfAc",
  "key25": "47R5db6SneAcxsAzr7sgEaE7egjXMmpodHDu7uNSRcFRpavwrHcdeuytp5HiATAivK2aEi9KYGtm3vj3LNjF4yRJ",
  "key26": "34ewEDJaCXTq8n6WjekxmUWEMMLQ6GjkNdo46Yqej2xx19FJ8xkPDAEXw1u2LrmJfjQwvNJawnZQ5f4N88CtXkQb",
  "key27": "2kEdS6BkFHFe4bJLReq6dFJEPQwmVzdTrYsmwVPWwrZwnyMXcU8F4xLU4yGLVdNamAg6aP6WuphRDiXHnE7SKZb6",
  "key28": "5GqUyHW1rbRZXaxTAe3ZQh5ZQJNbvTkZ27ASY67KEfUXEz18azhC3fGDhNnCtYzPXJ63fEZUsCc8CGe1i84xAen8",
  "key29": "N5exQqT3kEQm6mvSr39sdCTqR85dFNn6GuPCMJiq7wFCabfmYpgCq4kyxkuM3zXfSzoLWD7Kvdo8AKo5Qz5TvQQ",
  "key30": "5H3q3YKUsv4tE93anAvGrbiq9hwiXqZtKptryc2HALVa25ZFku4G83o1MPxJXfS3nN5T88Hkz8uFEJkhbfuBFtJE",
  "key31": "3aSDJ5omXEHnVieKxkK1Wws1b86DdTa8nL8PacW5aEFUeNFaqjdUCPzEcGdCbzgM35oNRYC6u7i4TEWy4h3QYgBD",
  "key32": "3xgZG6BLxafsHGHMhghBnKkTbQroHxxDaxCsHQHkdQesNkSkAzz2i2F6kYXANrZ9Nfy3AoFmYEPEQUts4VU9xjPL",
  "key33": "4SVwNuMpdj4Xti2jL6wnjf4VTQnV5P9wKVStcmXY5wGyL4QD9TKNXr99ydnJRVXSzeULcE1rrsxztxuGBemcFjev",
  "key34": "5Tv9fETRSL9P4spDuEVoTSi1ioevbCck9YhxvUBATo9Yw99ShCaHKXNDJx4Be1AnUkPtq3t2VvU5DNEV99pqrWrg",
  "key35": "5T4RJU2r3jpVBFti8GfaTFptRpG3VbFkvQXDpNsyDKwszXiYEZjKJd1xt4nieqTMKKkM16ePJLDwRuXqMRtEr8yA",
  "key36": "2D2tvyZCdiNv4uj6MM6UA3yqMo74iJKYHzVVVekiGUXPHZrjMN6bC7UBHVsVWjyt63pJ8zvdQU5aUMcyfe6feb3X",
  "key37": "Eg2S7YTXmVzPJe2Hu4hEgQDHFKzahyHeBf2WFhjysDsuEnX4yqtsPdeXxXRwPma9kdwsR2iGZDQABSJVgLzpqxT",
  "key38": "rhjYPC5Xtvie35iLvDhid4F5LvDyQqTyax2KvUgsJsRJ3XGt5s9MQrZeFPktoK6FhuSrBKFnEXBR8yaq9R4Zmho",
  "key39": "nKVYZnfQ9CetwtG1BiYhpbXbedvb84QK3D8dJXLF7QYjKCL5NnfxLTkDFK8X7sgCiRqMSfyqX1u4GX1KCc2tW9E"
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
