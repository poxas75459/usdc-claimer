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
    "4o3BTKyBf3icR5a9gvtkxrHdhXkuwVTVaLRWPESy12jpU7j3gzxx32uDeP3XUPaeu3NKhioY5xorsDXgzagYnmms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "256uFJ48VJoW95aF4mEJmwL3VhXrUmZCqfmWMpLeTJWtPmRdXuCThsjwufx2x9jDXSUU1m6rxFKTYVCnZYDoSgud",
  "key1": "4QcfYAEgsXBWXQUDk1vVP6u71bVkLQgEuFHVGadqiEck6cSYnt5Tz9s9aRxzdWCHv5V2XSVwroyZWmhE9UYZzMXr",
  "key2": "eC3QvDGxfWMJANVs7S8B8ZnLLsXZiPsgt3pUKkRwB4BbfDhzfBFa5GH7YrNfCiN7uGedKCJFRXESUrZurMWBXx4",
  "key3": "5SjBkLdyiap9QxAvHkKgDcDbbTdAGLeJLXryzWPngj11gpWEDRPRX2wzuV88wwjiBYVcnpkqsc2vhWDq94zV2AAV",
  "key4": "2st4jk6n651aRwbUkykVLT5mhdwdubigNGRPGZipzobgxB7cHC8J2hJcrYBuNKpCwnLJE896JaPee6rCSp3Xd82A",
  "key5": "3hsHzXp8nxVnCrdAyVWnVgp24h1xot38pSq8E7T7qg5AdF39mVRdhb7YdwgkvwL5JpavoE6uBgRk5SUoq2KagU5Y",
  "key6": "4DW6Eh5jCsV14eyx1RCzgNzkWQxYtxSsWSVFuphNaV6hwLGmuhZmHjWhokJET7Fu5anmhtxa9jTQUwCxDBnK9Xmj",
  "key7": "25L7cfFZvDuZHe2NkDyWb3riBB5wMr5oZKZvxgE4veApjwA31hNksKdcUKfNDFu2KSznJahhYKDpHnSBuy3LbnQL",
  "key8": "3CnmPkgcCQ3487BpW88p9oyAehnLDv74goeRnVH9URMPkRawEpifxMfGn67dnKeUsQCxNJtdJHn98FH82HQzY2xe",
  "key9": "3iCZqFAeqJw3fFwUjfwTgJg9T8TZQB86TyE8J6YQt4Nzv9ZnzcQFszutEXUmnQEU3Ao7ejf4ahWBLKqPKBNb4sBV",
  "key10": "MfYeHUPTEKJN6NA89Rd5mA7jAwmxZNfiuRiU6bt3zx1ChXDxFmtP1U3ELmXtfcZeQCkx9tFoPqUgnFLQxh4qMJm",
  "key11": "3ZJsdgix9tpBtVxsas5uxBXv8Wt1fHbjkH4ijtz38sxChaaD5nB8ua59k1Yp9LdukhqS85ydY5TaBaVfL4doQgKk",
  "key12": "2Q7fPwQhziX1aEwuXNcPyq8WTBt4BsVSGxHvwjezndMupN9gdS54xLcaeDLDTi5gp6MmNroHwf4Za4Rg6SNNxXvv",
  "key13": "2g2kvJgo3g22mkEZ1AhjbQtRpjgSHhQJ34HwNxF1LhYrzFnzDyRh3KbaVqcKZSsAkB4i7eiJfRth37uVTBfEoiEY",
  "key14": "5XKUxapBmhA33Vna9uRBQKKJPFFoVz2Dd3qzuWy8evWCTD31KDGEGfJzxWF2ar4vCPK5CQpHc8DESgWvYZiV65yN",
  "key15": "5brAfGgimiPvZ9ujCtvP3E8vQRTFxjEwcZfCg2vYs5xvLkTa8WLPTFEFfvrwE5WS5qSRJ8zFoJ3axxy2atJ7bGkq",
  "key16": "jmH4vjxGtgHeWnGn3f8YXUaBpMtyeTDChpB3NayqezoGSEdoYpoy1ENc3fE9qkCCbNp6bp1bp64dCL1BoERz7mA",
  "key17": "4FmC91GD4gcFv3rEiAzV2qoYTscHKug1CBz3ENyLx8BZYDNZgPJDzFmK1PBAH6WACDdXRwTALRXM5e6wCWw1VZr2",
  "key18": "2r9MJKTG7EoADWoqNqZDfwaqTzn7CBjbVveBZur6pk2JWWUp9xRrkwz1iePBCx73o2rdWu9jC551GvoNdvZrdC9s",
  "key19": "5u2frsBCkixE5YUgEAhpc5zRqAC2kj5DDxfZHsrLB12YRMgpHfkdEdtEr1MW1gpnRmk6nx87ARU1AeVscDjuK77h",
  "key20": "2pXjhrYogJStNGFMSQaCW1cYw5m3FZmH2jdFiZ224kh2Jtvazw5MR9VUeMyqcr27xkao9EiVzJEndautCweeomxn",
  "key21": "2QAi9YDo5oqA6xg6gmXDfizecg25f1Ns4EiXFspeNXWwRbhU4krUCBUrAnXup16WKXLypap3PX63DkL1hdph3qgG",
  "key22": "2FWQynbqPj1m1vYBQzp9gMoer7A7hsaL935xEMHHWaUJQoVoDT5eLc7TvChEWnfdNx5AeePVxP1Bna6yuUGRvPB5",
  "key23": "3aBQ5daJUhjqJpbTH9HsXaPu47krQWiHQE4PKtBHnzHEfrjQML9BiAANpfQmQbuWqXqEtvuGFzajf99MbTXwmdDT",
  "key24": "NDxUEFDVUzxXy8XtYx2twDQxU6P13UXJ6gg6MXQtDGa544YDu4T1iX18t3m2ADSmsybDFv5wfdGkZCXG8ZhWjeM",
  "key25": "3TwWMM67UMhysk9JbfnB67KzV3hmLcMoZzkFXz8dhs9pdk17pyDhWzhgE8LqbR12bAwRsgmqkpsbi7K6qsDBn8AT",
  "key26": "32pT7Lc2nmThhj6FUfnhPoXEdVvWEtFQ3EbxeRiYd5TSt2YdL1w85NShChAxcrmZvkpeL5eRQiX8DE6F5cprSDhB",
  "key27": "EdKR1qEBLQqQSP8NfGKg8LmT7crext1oqQcHpA4sYG357c9zw1zy2MrfHDymC2tiFa6Wb8S23KxMxNpdkxFnfHk",
  "key28": "zAkn5QnmkBVBsYKkFH77U4yZT4KxpzynuwwZb5sErC3W7Fw6ABaAJXt29bhrPXcxAKkDdr8wrQesWv9WYwuTJje",
  "key29": "391fLUjQZKMCYVSpD9F1YJTYE57xFXa4GDcwBKEwVWpa1DJEBzmDC5kz6MXsGJ7JAyHLVyXuy9AYM16urCu5ygLj",
  "key30": "tYVj6wDPSewMszUbyfxLWenvhkU497wo4m5dgZy5TEnsFo2hUxcDK5B8dBPh8NQTUxBvR9LQdLV3Fm36aTkWLkv",
  "key31": "5CNmbuWPLHbX1tsF4753RoNc3fJ2YhmUbj7vdky1isvfxwxsGVv7gHJFN9C1eXLzhiw2i7TyjDSkGqZ9FdZB78SA",
  "key32": "5NS1LmV5CETmpADnhVnPGSwqAwiKsKM9r2hozK9o51re8hsDRmCb7Ev4tJSSQqyZMZurd4uR8t6ZAj6LfXsuwriA",
  "key33": "4XMmaMwf9wUAGwhmg5YEFCYd7qoWtt51FatBzSUWErdXe5Zead8KjkAjVfenMdgcCmiyyZQKwRhhhtLqFYi9Sg8i",
  "key34": "W6KrJDyxZQ35pQ3QDv68uwJyHQMN3pmDaJHPP2eCKEiivouVnBES3WQBd7hJ4EXJLkepqFqEBRA6N2iNbH3Lmvi",
  "key35": "5dcqaF1MX6dEzbRHzMFqfAF4AMsc9m4VYRqjgezMpP97N2Rzx8uPEgpBi9a2ij3WjmfuUwwEritpE6sXJooC7dZK",
  "key36": "52TSftQUUb5Yw4ZjNT435SJrSX65EEDwtfWygLkFCEYhMqFicaFDYmvF1tttV19HZaymiBqVmL7484NLiaN3UTAS",
  "key37": "xbCF6jCEHfqBjNdG8ej2M2yQPAugQbJQoJMYi3UsUe2YNSuv8bvqryz5jR5F3JSEyijk8DB7FrptnDqYDae9QfG",
  "key38": "4SYdbzNRND6L1tHKakynrJPRPy9iwaFVUB7WvWtvN5faeyAAsAJjczQkAKwRqQar74oJ7wCPuVJaEtAEx3VFmG4a",
  "key39": "3DHiWXiZ53jdKL1YG3MCDXytd8kPuVGdNHRQSTufQpSpKKsjBFPj6xPHygbRRNGecKCriSSRpZeXqSA2KfEFFFTu",
  "key40": "4HK5tWBPpXnc1Pzvc5owMSX15ezkTVQtfs9yyAwu6c8E8Yh1CCN2zrPxR7xCQDenhUStUazNhsw89bqi9vRSNTES",
  "key41": "4UN3JPoS3YsWN2VVHdzvFrKYdGhFos9C9ze7jyXu9jYJTJJSPfvdShhSjNm3ToQpW794TmkuipyD8PVBp8gSqgKj",
  "key42": "3R41a28oRHDfg1tzGp4Y6DLyprn2ATHtwahcKQNeRzkw6Ry73c3CUuzvb11xUzhUHiXyRBmAu3Kdu4Ao3C1sFjrS",
  "key43": "65cRmbTAvFrUhN6Z1ZA4dxbJwRNNYjiU3rwsrJcB5m7qJEfbznARccpQqWs1p6Zu1se9g6PrWSDzmrj2RFCV2Lj9"
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
