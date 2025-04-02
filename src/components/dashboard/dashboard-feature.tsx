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
    "4Vy2oKH8LWf9LFgPaG3RLPRSPCy7xGPaKSeo6cSmK6Zz3aism79vFCfCrof7BUCQ1AWAgXw9y3tbTB2462a2n2U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRAXMkGNrwokXuux1LjJAr9eRGsbGPgkkMY37wCcJJxndAVyPTnDsSmtD4Fc7Rmg7deTzDkWWEsUxddmASiHAFP",
  "key1": "57fkbDFQ7PMgqvTs3Dkd4GkvmuMSzAVGLyEZCCiDW4F3suBBQbXFd5pkQHtLwQnZU427osefNtcTAsibXgc7qrp1",
  "key2": "j7TmRdUuP29aB5P9W65pEmhseWvWvUafxVpcYRwqcS9jA9d6BmcZ4EgEjdJeUumB54iPqNqqqvy69hoeJSL7xxz",
  "key3": "2EitjHgtmEaszVZCMFciGcwASgArgQABdRBEzZpS3UbZHitMZ8KhysmBoZbdtv4khj6wKs4KegVBx8QYL1XS9LAq",
  "key4": "27wLSjvMGise2xuAKrsf6iUQezHTNNVFUkr6VsE62P7RVWvYsgHATsXsTmHWPLeNTzsCMPkPwut5PY3rRq1zBkmj",
  "key5": "2cYkZZhJcPxHVBaP3Du2xqL15AGFhc4eA3U8CNL92CoCuavX6RMwDtktK5ukLhxss9GETj3EBgvncJfyqSxSEZ7r",
  "key6": "5nVpiXQo8Jrv7Cdz4iARWKHPVKfHzJMCBCc8NMRz3rd9F2usnDYq7Vn1Z3MEuh8Jr4xhCS1tNqWZL9iBuAiE2buM",
  "key7": "61YippEBYqVFkQiAwqPhHPZ94mz8sp2nprTsytj4ULyTxR89mwF4Z9rj1SGVCDFncJhchtZamYrUfyU66M1L4G1c",
  "key8": "4o9XTSMVH89DQ1Mrs6YxujjMu5h7VaDPVz5t7gtG9jPWnv9RZzkL3uAEYoEYMMkyoui6gUt5Hyes2tbrs73VSEb8",
  "key9": "2cDhrquYJ93iX12SkTQtvvrPufowyHK4QDDV3R6946voXpzQ1NNHE54a7Fmxtdha2PyxFYU9sFtkuVscuUgJSbxE",
  "key10": "4WNzdMo2JWBDEQ2kmSXRF3Rk7vKP8Pht69RbABothpWrTetmCnq6EPXcpxrzxCPGnHUZgac32M9vv7iUvQcGrei9",
  "key11": "545HDyaeCukUSJZXkymvvsnLV9gKDTTp5uXpRoxd72nBYwHn8TjqAUhnGphwZ5fKya6FFTs3dZXKFJTiufjnedfU",
  "key12": "48DMtWkqFS6WSDcv6Vym4s91MrLtJZ9QsweeQiBbT4JEHu56teJwoDUYtfBjZMQDAhZd7239EBjUtPGeX5FYS8ae",
  "key13": "46L4VDvtzAut3agsEQuaB9JvAjKZBi52QVmcZEeGKThCV7WsU6DRGdpWCupaVsvbpzMK7H1hGbq8qo3X5YNrf4C7",
  "key14": "2FFW4PvEPyi1fwA8EZDAqbaSRKQA7fQzVmmGuVLA85LAghdhazh8ZEkCrWPJZxHqUeRoqBNukKXGxS7r9yU2hRPs",
  "key15": "X5Sx4uWPatXE4K5e1huGe42TjVhapme3yXJfWRGRqqftM3Pta44ut8DPxt9tQUsbxdz6hsf2soRJbhk8jFRWnPY",
  "key16": "2Btebd3M9QwA9ovo4yvGBLNnzCT3QQQok5rrHeD7s2fTU8zc9x33odv9C2SdSUww5c75jcojy6XNAdbNfrbti4HZ",
  "key17": "3ou7in1Cq6fgMANVb6nWTwB6yU8oDfLkR7QfxJyVGRY3YfcvkJNCjisRbPY3dzdixyA5XZLCcHEEfjoBd3ce8Z7i",
  "key18": "4xZ7zWxYcx5DPCv9ZZPTSkF5SabG4cnhWo231QhV5rNaWW3HHQxo9kijbwpyeFHtgsYRgdfm3oYrFFdR76C4WZRz",
  "key19": "SZrrEoXVZMgb9X2No8bnQfwAKodc2ZRsbiTrTntKVs8wxaR8z9KV78Zuw8Fw1dtB4BRyDk2FUKxku97Auww42JP",
  "key20": "RfMqu1V1uZ7rbEHJY5Sme5V6yAuTz5oQdsqJsC1u4UZGbb4cxLny6paXKCo4m6vExXC9k5C1ULtwL6HGqnR8z1J",
  "key21": "4F4GukaHxes5CBBfUaEkFgwwLmma3SoNohsXiztVawFwuPBWV7QCtq3fwFwMcrES58wed3WtMBz9FjKh7uQBfYcv",
  "key22": "2v5ZsdV7GJky5mmRSH87etGJ7LbVt6u4QAiBrtUfiH4oHuuXb8mrgtXsdjD7xE6uJ2nov3eqsCPKiqioBtbVAoFn",
  "key23": "5CD7NGGx1RY3FtzwVspKH1WML8Uw7vh1gYk91JN8c2ub4dmcibZWWVN6Zf56RRm5pyfmxtRss1VuabwKFJYLV2dZ",
  "key24": "BzEyfyGxnExt7RNTQRD2mqVYZYS71PL9ak2uanaNq7q4Ekz23MXR1poUfYFS8Ni1gciWoJdTCqHQ5PjPHpNkEfe",
  "key25": "fXnnrLXCucN17XRDeWLtykkvCcBnkX7n8aenVFVGzGJHoTUTRSsxpS5ffsUMx1Cz1UoxydEf1sorLAH12Wm3qa2",
  "key26": "xCe4mzorg43t6jPZ5oWqVDXtcRvwQNkSTVk1kAXzi1zkW6X34XYqn1oAWmsXA5upsvJ59UNwbUtTwBJyWzEByXT",
  "key27": "5YWYd4A2dsTcJh5EVT6RCX8upXNsVsC83HGmXPWoM9TKXPMYpBBZaZHWXGbzfPsPMmPvRC9VNG4AyVNg6VzCtfE8",
  "key28": "4YJukakAm7oFdnjzXeTogDQxQhAyBFWQmNjyfhejm8xLSqCg25H9w54cqE7AjY6wqMcAvqiptwTgZMVh8Qo8fth1",
  "key29": "3xih8pdytaNQpWJ5DJujNnoCv65fuwQRpAfUT9YBRR6GmJJLY815n7SoLdKvgw6jyhQ9eeni27wVWCgPmHtu3MnM",
  "key30": "2nwq7LtX1Gf9MkXGrUQad4boKv3eKEqtBCCopCfgwBKvKkXgF4eKjZfAErgjNUAkBM4AKyZtaoNMBiJp9fdotHym",
  "key31": "RwUW1uZSjNSYrXVDT9ENHm2tysfbSzHUP4U2XT3ytu1AMUwUnmLSfUgbNUrfbqtNRMygVzJXFYLofw3i8EDePxN",
  "key32": "2ncrtYXaMAJr1hPrzSXEaGuFF3S27VbcTdyeVNmcVG2txAQmk1rNFXRus8CkogZUbzTjiSHbx8oPKU6G6LN4YMxW",
  "key33": "5NkwRDqWqp8bRrfF463AaK2ML1pHmfYLEPCLE4hVF5SWNYkhcQHtexg9MRwRnAuBnEhiPEpH6dDutKA1D1rdQifH",
  "key34": "3TnwErqS8Fp19TL7tBpbr9LbeoUH9SJW1dbfyL5vKJhSTTSh9scygS3m1cGUv6ygKDmLLRpqbuRXbgtiZp4uik6b",
  "key35": "4ftNd9LKvvACFdkJUjFaJFLzCZQmfCa6LzxbH5YaLpquoT8rv1cGamAAkvJdFDGpZwpUmkUfHt5CzxMXFS1zo3qd",
  "key36": "4jtXtNfqc6CQNipKkfwFsxDWWwcxMhczq26WZ29KUi2NBaits6D14uj8B9Jjtpu9R6RjZPCsEUQGNyjn5dbms4GU",
  "key37": "vaKfdZ1HBgKSEfsTiPQDrb2jVNbRLuX1YWt3sykroE2YKn1MKfAV21pfoKbjJd8SgLVU3AHFeevr39KRcdxv27b",
  "key38": "R2STyMUeNMCvUvjhDhhayoPdiDZuHaQmYSjWhjg3DjkdsV5JygVhEZvbW9HTcw3AaS6W9tacZDXy5eiaYoVsnKp",
  "key39": "3aFTXBq5xwA85Qux23ZA2CXXN7QC3QXgkBkoUPEBdMdzVWjTm8otLF952xkr7Vqo22hPVSL7GdywvK4y6ynvXMiS"
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
