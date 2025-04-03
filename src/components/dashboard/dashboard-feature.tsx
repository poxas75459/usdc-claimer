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
    "3jjStb4gfmYZqVWXooNssPqiMtmuswyq5sgQF1NDeX5zwuDr2GxWbfbm33YpBu9onxdR6V6StFkppw4fQdeKFJix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEwiDEAYJNrv3QrMMFc35iieFRJP9i2dtBMELCEK9YDywfJzh3tyBTuZNecaH8dfhGwDuf2NyoTKDTDbvct1PXH",
  "key1": "4VPK7LcjzhRMp5uQZAfB4ZAsE3SD3rQwx75N3bNvPeMxi4vCxb7SNjXzs8QUeVUrvrhcMP9HCy7bPcUV7aTrw4QW",
  "key2": "66k3CDShM1qNDRCijomC7wnNHd8WqAEGfLTGrNMkgri37T2txsuqV1C3RQH3PhmcWjRLaBwKFcdWzsxCi6pK2Nw5",
  "key3": "2bL6p3vRZG58af4KiGNBVFSe5hw8gqzxxMC34MnY3rGdzeHUApdEeLhPma7weKWjvHfV2y4g2zFH5bJqzwELMLCR",
  "key4": "3csJBw562ZQK6vKBeE6gAAeMXkcCCGVLDRLRtNQth5tmdzJjuXruhs153YPtfS9yRZiR72mLKKCYfWfiApnmpxgG",
  "key5": "5TLqsE8AyUfnd2Bvaj8UKFAEDG2jfGscNmX1j9RhcNobcuV2obeCXnS45dxFAs55XvoPxUpgHgMHBEfF8y3sMQzE",
  "key6": "2bMZngR7aFCuipgW2XoDitwC3hwwNG1TP8ZpvT6mtZcMG2F1UviwzhDDXBuZWK4GrvEnezQhHCxnaBa8UJi4tya6",
  "key7": "3kJWG8ynXTaHFQ4b9U3YwNvkkcf2GQAoQ8ttN9butaXuynL8Exkvu9ZgyCGWMkWi98tzHyXH3aiQFpCkeiU9SWya",
  "key8": "2tjNQUDXFVSRk6jBqgqsgxEDzhcK9ixmfy9spZQWFGTLctbw5tTPqToMKiqr3Lj2Xcy2k9A3wAaQWNQvs2JvmQhR",
  "key9": "3hWaHQEfNhapkhiLeyUYvWCbAYZj34KnvV64UGaVJUVAnAvbYAJ2GoCzTe1qweqXiD8RAgo4NvkuUhVQGGXSexZu",
  "key10": "3R681SPLgMYWvaHvyamjXk1gnrUzekggUEUa48zofxvQtT5sPcYSUdonPabp9jvo8vW98YGnr4rCFLZLvgmQ4vSp",
  "key11": "4jNQ1e9NpBAganND6B7qr23NvWoiaBtJv2RH1XjXMnrQUMxsBRyWMtacZBQyS6aHdRPrLWs4oNo1Hp7kNRHvUoae",
  "key12": "2iGmqWt3soM1vzcj6z3jzbEBnB7snGYEw1LB6K7oymfGwf41tBT357y8Jo2Rxsh9A76yNUrUhRjHpy7WNNBndg5g",
  "key13": "3ZpJEr2nRDrA37JJxQfPjyxjtV8fEihGD6wcTrHMCm696yQT9XLqb55oBCcB1XgsM5H6i7bVFry9CbxgVrSDqfdi",
  "key14": "3PtAS9xkkToHb95nXXo8gM8vH634VUeoVdqDWBB3BStJe88qNYVyWwMDirBKAn7bD5VLfMRyDmoYHbq5tWnVzjZZ",
  "key15": "3DsPDY8YEBZn3aY3t7KPtrobZ1tqpek7Npb1NheWevxtp7jfF9YgMh5P9bo53sTri2AUCAYQbdAmPRwnwRJsjbGb",
  "key16": "2qABk3qVStawZBH9CkQhPBmCFTXJFTrwgksPk1uaegHRe7yFecP7Kz9NTprZVNKCF6JKUo8qa21MHVG3Uq6DFvk4",
  "key17": "4KSPtht2dznJ6PtmjaVgwKaU5MhJtetMSDMSdgYxTxFpsschUZCSYbw9PfcXVXZFMbgLtyJmoPv8oqW49BFCwcPS",
  "key18": "5TmBmvVcGadNNj71rNM6JrboZFpLsWRQkD5GEp9dNfE1vUs5ipWsKibdjEwYB1NVCtzzbV9zpvbfyFVLP4UfX8Ew",
  "key19": "Ue6yK27KoF7CZSHBYV4hQof5gT5KhkfyoG4U3HKK15x6svaxAYcgGqX6ExoPzxbKmEx1zNMfwyxsjkzb6j3knCW",
  "key20": "35xnZWD5vmVa4ipDkuWafKuPoEHTHaFS4U7dPjGS1neSokD27KNH9RFN8Ui3nqLHgKv8nwGuYNRZ8K5anEWobQBN",
  "key21": "7KWJSomQqKQUDok2pHwDqTeUrjiE98BrcZxYRUnj8e3ZcCmd76BryQagHecoXwNZP3D4UYVYTnWFSzrbRkFshsM",
  "key22": "3kqpsw8Xz16nna76jKm4VTJkAYpL7sJFu1L9qtXVBQn4rHB8veQcACATM9ybfKK1wMCVV1EembBjWbf7S6Sv2mSf",
  "key23": "3AmEDpPahecJ6QWDjLNzD9G9TmnFBw8HXRBHgErXnL3S8j7qHJLHa2fS9vefM2bgSzCEbEhErG8vtBTmrFkzYbFM",
  "key24": "p1Nix4F6WSNSci5WJCUhEYVqG6XZSy2KTL4369mzKy4nPdWQwS978Fs4kuyh7yTpxwDqobz5c5FAYviiw2xRWV1",
  "key25": "hDJCLaRUkoRnsDFg7DC5gnTHBJTuvkuQ3VpqdrQxnZrGnMpnxAfsKVHDjPFFjQ4cMhoFyAXrbo4wCZi8vYXTAeP",
  "key26": "36xw8qjr1oZ6HSxWSE9EK7TxDRiZNVYoLnVKBQN4wB2e11KLxSKndUJwyxcP9Hqqk2RXf4QJLaLhaTJLhBX4Jee9",
  "key27": "2KnVi56hPca2AkfptiBw9yy9WNhLchKXgJVP8wDMSAsfdStewducidgi8SCP4Y8ZC9G7uHfiPPxJSyZqecmL2U6K",
  "key28": "4H586Ubv4Vcv26Z3iRMaUNbRS7RZS6QxkRtruzvhAnHfzMcSPYZioCGbEcRF3P1c5x3gTcCfohCpNi2fsBvMoXpv",
  "key29": "2TwPtiX6jJ7StWKEouckPKRay8m4Mn4kFd77uGNLiWWb8QxyZ6pBwzs5debqZrZsrNMP6q8Db8oFQXR7MJYYfAJY",
  "key30": "3PG9EsDxiYntuYX2XAe1LheqgQry1Zh2SQCGDeoXF4iSCDtN9R8cnEiQdu64bx4ZKBnowmUKXqW1FNVhQAFxZbtu",
  "key31": "3mLVakxNg7sXtCuRXUkj2dTd4f1yobgqBfskyExNZn57u2Ux8PBDe1op86zWe46fiXU6WkUMsQDwDN7J7VQYgnzu",
  "key32": "4Bqz5HJE6nJY6xiFpvqZBXRJ6qYNKF7RbVZ2XSrcfo2LkggdRUQXMjaxXvk9goUvRQkpxFYZEYd8kGxUsCrk5hjU",
  "key33": "5vYitcS8acF1NPmNSoteR5AAGw67eCGnHR5NDcB3zkg1pTaQjevzn3fJc5eF3ZcGetbnoRKqs7iQEungNtZCBCjk",
  "key34": "NuqqpTnnQKH7CfFdLhcmWAcPWm3LyBKuSQbYeYzjMrPFQtPmbFdLhePJ9BQykB9HFGLjoyWuXorNfS8vv7MYHLr",
  "key35": "3Zg236KMhuoNQ6x5JPvMAoM35GAvnxHRxiz2ajNGNgeZTGHMa9cU6dsNBzurXibzp3FMGjvuUNnivbxuUN7BF6zB",
  "key36": "5ryH3mHTFz6Xo3PpEZpVFcqEj2z9j34s8JFgBgZBqKuuTExJ4zJdHZ6cakmt9bU9SU1M3MExvx3V44FXwj5msR5E"
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
