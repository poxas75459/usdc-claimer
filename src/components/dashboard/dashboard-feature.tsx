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
    "35UGxXT2uGNKppTUJYTumRFMJwnWuoYJC9sVuhSMADDqvxYf1jc2CmhrhUH9ty2wG53tYSf8WKvQtAy3E1MoLPsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEMTnQ9pPUwc2uqo5VieucJZy4mpceF98TJqWEbpPLHyjW2Q2gPRkXKN5ukQHc8dTuryQ3BfcCQpMnGhxi8s9ht",
  "key1": "2po6AHbD8NXLEtSWarf1cPmGVnW88QLtMVs96RozAvJrLrxdccDymTATRxWPRFJdNcX1GRUvD1B4JeBXu8M9Yebx",
  "key2": "nUf1Ru7h9Be3ge8QczhSGkMJt7yoYNJWEy4ZE4PzaP4FBdEbd99cNeDBWK9MBXjVfwkZ4PHuzcjPuPYM6P5MEer",
  "key3": "3j8bX23B59qh29Mthr9B8psdAAdgjxZpDM4bB69EbKxxf4rewLRtmNroYjEnQrrgNTbqELPhueppE9b2KmBTkSwb",
  "key4": "aerAxnKAdA6n6xc1UuRL1qxoyTpWTYUnyTGCLUa9cd7AcEkZ5SW8SajoCxyt5oghLQtqahYbQbSAb7F5mgmr4KZ",
  "key5": "492TogFVGGyXHxXcUMA6GeHWpj7eCnMT4oVbsn1VTPrthzKzo8yv5mGyBYuomGFRe3CQtRqip9UmvyPYETMzS7wE",
  "key6": "C4E5sXRspEptH9q9souENZQtkjhN3UCWNDzc99QzhUWaGBkRrqXEXrqzQstpRc76ibjZquBpNVtrz5FQUVR57JJ",
  "key7": "5vVeih1gBMbtK8fgKbmDkKkedxxsj6jeBcaHZrTvQxsSA1tYaqD5WfH7zpbzD7Hv1Hev1Vdz8syXD434ZgUPg6t8",
  "key8": "2FGtjz4NSY8StQigHy5qKXHDc83UAjyLcQgBNwhprGs8FP2wDs1VgECaRfSSBjMhWRUqH4RG9wLB86s5pV9EHgEU",
  "key9": "3pUXEB8z3VTq4YGNnBXp2Vwjyf7c1fULTPT4N5mtZ8CNLxHqoMXk4adt8WLmgtaqAoWg9VpkCVssKEmYYfqK117F",
  "key10": "zVK7WLYStp8xkdfVBxeZS5FfWiHsCAS3wvM6132vat1Td39YPYrBY17hVkuyHmgtkjatXPLJdQvpVD9ZUYGjRYt",
  "key11": "obVqqubQzckhFViFXy1E7m5rQQs1Gh9MzdTtKxMhagAXu2F6pRnRu6zQLEn4QSXbCisuhiLMiY5TZQwvz3u7CWy",
  "key12": "2KD2CusyCja2aRyLD1ZdNGLmRG1RB1hTSVCY7M26ETizNypZ21g7BDWhGQsdzuFcGz3wuTM8Y6M5TKY46jJkBPdv",
  "key13": "2SSDhBKWR5QHbrXgtfiHASm8HZiJWvX5Kp6GpEz7Xkmn1g2oHCFjFRxR1rniCWXBWtV4NEe4KqhuX9NzxJQHKsr6",
  "key14": "47eF7TD8BcP9ct49HcwSmr4Qb6N9zNTFjSTaL5qGYQirHbF7K52uDGn5ei4d9joudXx42vjDZkfgkd1W4ctYoxbE",
  "key15": "mhWMnfXszFvTiazCYbELimRus6XqwHB1vujHyaJHsQcK8hYAK6AQoHGvrnhfifHWFShsc9mS7aaoHVHoJGYY2JE",
  "key16": "2UkJCNetRf7r8oiUzQjhZu42p2gH36nMJtCuQD4C9N1ifHfdfSSfBSYZk1Yi6YjhXgp6pUxs9a2LF7aaZaJpsY4P",
  "key17": "5vdmnqQbMKUunL9tLS5wntxKvGP2HtCZDwhDn3kPSvcMphcHk9936vMUNfUh4rZgGguoQoK4venFQX9Ea9EPNMyH",
  "key18": "2t5PMP5t5i74phehWKvJTYzRmZtHtLt5kPhpPfNrHNcZ5yK9XQEfG7YbWpQiZeswvuPkKAQiXn5LspRzAPA35z4h",
  "key19": "5XsmuUDjR9nri6itNiYoPqGykAn7fCYrJxTWLjRXdFTGe1PuPiszHWDacJTjsFJZK2ZSEwNqv8b7gxMonJ6BmLKH",
  "key20": "5QZReH8jSSBeLB7h9TQ8jW2ShYCEFPGNZb1tSxP2UqaRJ2sDr6dLGrSoq9CFRv5BULx1AnjMZZ13GoxNFxuXueHa",
  "key21": "52nvxMpLvJ4LPY9Cm6tSHdfhWgKrPq5PMP2dskPrsipUWoV1et6bVkiAbHRw9mqxdu7ifLeLUs4uJzpBj4ZhM5Cw",
  "key22": "afbnSQXk2d4o6cLX1D1b6wwSzmkevmezCigbrb8HeWjUsQhuLiKtovH81tyXpPKgCiSy5YqX5cRGHJXHLpuMCj7",
  "key23": "3du7YBimWANkZa1EYs6UNfkVpoV29Eve31ZYoUtPNHPEKciSWEdYGH6AYWJCneRw9vb2vPD8D7t2Kwii5r9C7dJx",
  "key24": "5keCtTvymjwMtgfKou3dvy6eU4yNxwdDgShx6fZQHWrWoXF4ZunQJmj76k8ZDuAHCExiNsDQqboNUuyQvk2foQ1S",
  "key25": "3QRRbpRVUuc2pNK99WnQNeEZUymdxNTeH6RJCMJZ6PWk5arEpZ9KV6NsBPwgSZCXQoES4HgjuUp2RQCgkSU7kfsU",
  "key26": "3pX3DcsEB9YmNxKHWgKaKYthkWf55WM7oWxoX5vybLomvebYxrrzn2exNcm4qGfGYt6ezFpHVQPeCet9aqeingve",
  "key27": "3XudReVvLkkuaLiT9o6jRyguFHPjNYaUSiZmhJvXEf9L9gYQjy96kkEedqb6LpEMWWdWo1vjyrY34oLDL1SDpmt2",
  "key28": "3it9pjS4y2rv4ijGD1kqPSkCp8kwZs5F23ExuHHFgg9iuDPkej7sgDgxXLkcyZzvoQiRyn8xURfiTnDp6tSwMzvj",
  "key29": "5ncv2fzkWSLy1RYf9s5kHGzgwG8btQkfRbh4S4Kka5ddfHJRt8PkZTXueJ5xkst57VXAgceVfxHd2MSTfkkCrJEC",
  "key30": "31Ki9HHQxRihJ1AerN84qzeZAk4WS2BrN4RzYDiEgRB8LEwDEM3hQ1T9jJfmhtuqwTL32EPEU99deokJjKr2ZGUi",
  "key31": "5mWokVt6QaD8fWaU6mW8NKhVErdfsg5NUhdWPp6p18sJ7XsMiaz51iEAA7CJY1WcnZRC4JHwsrbgHrsVn5MCagiJ",
  "key32": "tXE2ATNgNbjSY7fkxt7KRbHnkujwgdQDRkkj626wvcEioiNboBGaGB8XBok7eW5QVugnzV6pajphpirbXBKaroH",
  "key33": "CMeEWcgZbnccmRaJFQqQ8oK9Ba8C1Ef6KDgBnDMKC3853Us58P32NyY5eDrpD1Hkw3xiwb2HDfB1HLi33KMMDyd",
  "key34": "4QNa7cRffueP9b5va6CABpxYYbaEL3rMfa6eW9XwSBHhjoR9iVK1zvWCtJfFT6hk6eu8bWtLp5MNawSFvy28TXqq",
  "key35": "5AZYUpbUFNehnFReZrLL8Fh1cZ3oeiK1cm9Kru388G7etx7BPHbEdUiAefa7S3rV75JfYDpaoqoXXSJ5UgGbjK6U"
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
