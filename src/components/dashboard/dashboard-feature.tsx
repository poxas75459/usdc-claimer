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
    "2f4T7ZADtRaGGV8mhq9JmQEHjXEhmWMWQcQPGMbFJqNATsaYJsEFuAoF5dykTNoi3vNiv8Zo3MYeeC7bwBcNmvCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67T4WJNuhypyxYCk23GPwtYePW7BrZVe4QzSYFFbZA9CawYZkUTUthDtNvzjWFGbiXFEBruMwm3XiSNDboHeWVBW",
  "key1": "261dmqtbMebfPTW9YyeNgMyB8c3eqwY9UpUe9xvi4GBfYYqASXzcs6n8tU8m6aTJ2ZrAaw5E9VMnodFtywx1RY1b",
  "key2": "5QVfYB5J7xGnBvgadHaeGd8yVPn8hymjcRXgVd1cDTBqqYTNkfqyxW7b3hC2g6mQ9j8j4gzq5VV33mLc3KYogR61",
  "key3": "5pkCYEQRz5ZySBatAUNm5wPZUmS3wXzJgDps3xhiUjyWKwHppHje9k8i3zGXnBgftWn6L4PtoWN1VLEScvbNkTQc",
  "key4": "n7K1jwq3SCJbP9H9A4eZwSFiS2VTaav1S7nRN9BvQj5yvegeUtbU2JjCMZkgBKJZ8aCRksVA2iDWp7t8ShvmmYo",
  "key5": "2X9NVS3UBEbixmh9iJZPcrg1fdBMZXC4T42Mt2p3DHSzxom9wVDZAu1t4feoubjzMAXswxZARJLaHvdkEdJ5o296",
  "key6": "3fgeBVoy2FXVXFGofvGMFt7cYPwWCS1voq9CMHJqSiVFc1KYdpurJiFzLy8DhzzCkXtK3x3kKXXqqccGRnRiEpKt",
  "key7": "5FUyZoHWRzjJA7bkaCKWGNKAZ2F324zyWeCW8pGy7Ngcy9tUvvSSLeevA6YS2VsmjfrDCv46AKEuyZVouAqcbuGa",
  "key8": "4hiHuvL7PoaEJJh73MUkY462fjkoZqgKnpokdDyDNtNV79W1LC4Gtren3wvYRRC1uEeQSVW9wx79F972q7PZSEPM",
  "key9": "213mp6wUNFLw5bWAnFn9VEoNRyXCV6P8pp68C4kR4VPkPkZcfDXnknpq33LQC51PdV5bTLjzr7kR1AiwoEKfS5ud",
  "key10": "5mdfhMAfUGgxKoZo2zqWkdNMk37HKsg7fwzodKDXwQtZBkhLkhrhM4uhM3s1nrrWpLeWEdS19GVwyX1HnXoeQd6U",
  "key11": "4PvGkmzAFphfzgcSb2M6N42n2YJRVT7N7WFZpR2nrRbm925Jz1M1oUXEYXsasgWARsHsAbQpH1LZxkoe9vsL6LGz",
  "key12": "5umv5bt3BgyHHu1WpfLrD3yG94wfmmrCW3r2g1L9LMP8g98LAiJ1QVNrFJGjZytgQAr9denqwdR71YcVBmncyTF4",
  "key13": "3EWn1dq3tkfy1Zq5BwvKpePTvxBWhRJAZmVuA8nWGxgGTXwAheykdWuxzgSVbcN37oSURJGH3LjghFzTRf6qomi9",
  "key14": "3udNNEeKJSuBFW1eBaV5P2j1pgoHFJzwVPQwx4zjzVSNPPctkkRNgYccDV2cLYsQ75v128cpmFwsN9HUpTk5VB3n",
  "key15": "3tU2qFLrmwMre4Ufy75gwTpD3pP5W171FP7sTAtkvQihVgzHMUEyApmjYWiSb496rZSngBGmrxoQZED2U9mbkyNR",
  "key16": "4xRxYzQfdxbuMFAmWHCjDHTqMz9wiWaJiW97yPXCKA4NaA1hn6msQjxaoRfc6wPezeTGcFKPYrQjcEcveET37HCY",
  "key17": "QbFJqp9gDUHyke7pFkke4j8iagU1hPM8Y2hdwySheQ5BQsAi8oQmUFFd6jaDG8ev82vgStWWvsygVd7BvskzouL",
  "key18": "2ETTABWvvWFgDCm2VkHUfKR8GfjiRkcLtSekm6E48TTB8iipsFv7jAwZzswJ8iYuicDuZijU1xxkHjaZGnunmqem",
  "key19": "vqC5PGfir2jEgg5YAyAE6MjCtiJsMX4N3fR8CaqrrbYGNdvzktahvQAwLudYtGjKHc4nyFD4fNaxhCRgDkhJ7i2",
  "key20": "5y953HieFic8hPhZ9hQZAV61sKBDMnhT6EkKyPfcfTUnfnZHv6byD3ixMf5XSUjmG7d2urwNC7V6eApfRyWYAiTJ",
  "key21": "37nDMUDJAZDXMrUy4WutZBNxSeCj63n4aV2FbNbDyQG6XK2L6Q7yh7ZtWoRzYpQajfEdtT6A58agGVeM4yWSQ9Ww",
  "key22": "4nwdxZrhrY1bHbLBQWAxtrZxKfFzLZcHrK5vWSvdFAUpTcqrdnCf2WvdxZwtp6BG317xWHwCpqyaT3vJEWRy9t99",
  "key23": "64m9PTzXAtVKgpqxatGKMEfYEKL1LvVdchmQo5T34urmkLdkaNmZKWYfoSkGqgtzj9BDuANLviq57aa52QvR7tUM",
  "key24": "5m7MsHCw3DGxw6ewfYRcXwnpme5sT4MTYn6WtJ2kq7Pjh6AEFkgyKjo8SMbDqVTzysXnXQmaJTFQYyF7sdXYoHjD",
  "key25": "5szvuyXEZt7s1tyLR5oUhFq2PyHjBLseunhkqQ1HkBhdSMms1E8BozM2tT2vV7i1DC5z9QtyPmCEW4VsvkFToWSL",
  "key26": "57pUfLKWwzpoN397PR3F7yZbjmtJh38bFVvAC5tEzoBUZb7HvghHAPsttmk383WARS4RnyAKd9fgnUH6m4hZt171",
  "key27": "53UteXsri76t45Na5kJPLjjzpfhpnWHiBHoikqvjuyJWUniWzCoy4VeJ4TY7Ua2tezcZfchx1FFwfA6hCfU1dfzb",
  "key28": "3hj5rDnEPXpJ14KJasg5u9c7aHPt2GnQNken4pEgQTwpFpszteFKixgGKtaLWC8XmybGmGdjaPCFQ36szZNh9eYV",
  "key29": "ts7YEjXbrbu79BTyogCGniRFdDUoyjxednDQrRpAiCYCxu5MtYdhChNzo6Zm5kSB7rZ1yFHTUmBPh8MhpErraMB",
  "key30": "45UVbSerrtaPQa23jq1qVCg39qkzZsPyyTRS1thW7HBMVPP4Z3wRhS25g6bXvnm2dfzEThf2Lm78cbWzqmY9rqLM",
  "key31": "3WpnZ7VbjtJvuDKKrwyVZmHLAaw8aEYXk49NNh9rSv7CXZn5jeVEdMYaWcM1fkzSMmrh44sUkLQ3QrQMKtTTovSz",
  "key32": "5HwrjzfoqxaCfYpsg9h1uhTaiF8x31yikT31U8CoPHgnznvP9qD2oKq6aiFY3ztvSffCzHXbXQ5Vq7E4LDYQnfbM",
  "key33": "5dUfcvXA2rttiut9PWgUCb5XTxc6gQkSyMZbu4B1n8F7a9r9c84nZgcfM5FiFTo8v7jAZUoyyVdqBhyhWQ2ntZmk",
  "key34": "4LhsHd7waWotvBGTTWuSAMHYPSAnaR5bdQ7MqQh8Wdv5V2HpVjyGU6F5T35BKDqfeBHQjuYdJs5g8nrA892Wyk9V",
  "key35": "51DWUqHTGZi44DWxLEAGjM7EosLnHFKrqrQUHSZ5zj48FGnxfoCvxb9fdPNQTWetctZentK5nPu1B4yfUsLYvFZa",
  "key36": "4f31GCiS1RTomrUahBLFQ1e5Hb4N5C6DA6Lumv5DBWyBhfMYocgq2dB4EgdnPNHKTrhViTW8d9G4JDtDtMA3E5KF",
  "key37": "2tiNyvSaTfrWwPi7jva5uBVEfgATFcZiFaWryLiVMiMk6dUmEeKrX3tznUnEiDpEtjevAnhsvrQNFw72VrDFAWNr",
  "key38": "5HND4csndPjZWFSt8RDZPsKjoJUzAtofV3jWmYUANEmAgxk8QXuh8zsaEkCZfaS822YhpuyBxsUcPCVSUexuLznw",
  "key39": "5SDADEFAXLeCz4kKbRDgVyNmadpThzshV9o1YALSuHxzcaB9HCEvnh9xovjFNXbKqrh6Ktr4fBoC4vW1gx8LuM8o",
  "key40": "4rRcRKoBYT4xGzvZowkHdW448GDYNZBcroMJPymEzUxg1kKXT8tV9jH5aGjv8zrAH83VwjViB3zmuXV3V4FazfgJ",
  "key41": "4pbWJAcqyJJbMDUgVuqFUV4ugucoACBNr1L8XR5GVgymrgLoQP5kzUcapxWYUW8BKhJ4xMnKddeHxfLCwZDGHoCk",
  "key42": "5w7TUNQRxyUFeUmv5AjC42M3etKYJ7utwuwv4LWv1aJgd9gXeiK5ch2RWthR3kad94FLin5VSGEwdWibdC8VJdjd",
  "key43": "3t2apG6vFGwzpBLnGwnm2PQ2V93WocP86Y8FNjFxwGqXzZQM6JJuNoTBiDiN1ymQMvZtj8TDe8JAb6qQA3rFfa3v",
  "key44": "StuV6Eyzkjf1WfctmzKNvPCdMU3UmQ69pCbEtNYxAzE9TJiWuUwNicdDudjFUTN4cmKJ9o6gCLt5zqssa979Pn8",
  "key45": "39rqKMdkWu2YxPdnqxkJpeeFnHyeHvTJz2AYkn6TEf2GJnhD2rmq9VD3T4WEJ9ZB9uPxGjvBXncZRaxGofywTsMq",
  "key46": "o45nhHAXYpZ4KH24WhpuB2SMEisxHPZGTLCVHd3WVDCDiDdHEAYUCxt3pg1MEdJYgGuUZCHDc6tjPhLMyfFJz6o"
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
