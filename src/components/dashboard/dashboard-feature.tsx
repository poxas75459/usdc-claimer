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
    "oagH4Z168kM6vy1N4DqZ5vzjin2yubhkr5z3aQb3LRnPc4AKAk1XLhPE18G2djzEVBUra5g6bHX36F9o9gdL2sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrusZbtzei6pMYMkyhxevveP3nz39GwpYSDK2xqudQ7F2uWhikb7R4yXP4nLWuaUa6MupSC6Jh98SHcYoA2MarU",
  "key1": "3GBfdtYefhmQRe4drCjDQA1tsvxCAFwmxwx2qXpeKRXxgVkE2xXgBeCunD4H3FH4kQaFwT6QwvZGkQ2sj7REPirt",
  "key2": "3AsqfLFUAZnSNTtQDjupyTuU8rFTS8fPU1JW5nC2qnbohdpdVtpfFZ1Y86oyzP1o2Y9rho8ByYYJnS8UZEGu3yLp",
  "key3": "fbWFKyaak1GKUtErmkxA2BbBKBD2EU5VBAHYgUNARKFcYRwVrg9KdtBWZMJgJ3VsBcX1oYnUX8VCjGBoTLkSfUC",
  "key4": "v8GdZ23whdXyBQQug5yZcZXz7FBs2m3JnBN4c1KiBvZTAYdryaHs968qD8U8uVrpjG4KdLtfnxvqcp2Te2t2wMQ",
  "key5": "5f5KBmmunXbMcJsrDFHSYfwNSiZPiB7pH8DfnbcFmAwBumTFCegNE3WZQrQV16sx4mepmwkLXcucGteEFS2WBrDg",
  "key6": "5qjv4MFhvyxcSzbnb3DUuZao7pP2WLSouUChPpkFt4ZLDGp2pwyxHy4dGjxUhkxsNBGfyvUVCgJJSgVS2JcuB751",
  "key7": "434BqCtDLrhicEG75cTX186sp3nK3CGdnNMvtKSebCLnkiqDCsUW3VTfs6RJaQijm3PHEWeQhZd88G3EDSHMUDNT",
  "key8": "hAhBmUAjfoxPyWBHw1j7NdZSTiRVgVGEvAo6vLANEkgiVq4iQWSK2z8iEpw339myxMfS2YUwuLNrHRfAnhuD44v",
  "key9": "4vmCvWC39uHQoSeru85iEcuJDMg8NRDyj2sYoZQ7f1uvRbRdwfuiKqya7uSSLYoBZTfyVXSPk5XAY8W3P5KPpJnF",
  "key10": "4Pkq7iG5xy6hayWMgbngwS1ZB1MsDy4hpXT3gVTZS5gVuXZbPY8zPiax9PrPjQQYJyjUvm1dmN3YFJFCBuwwPCV4",
  "key11": "46gYUd4VA8F2RzTB6rtWY7h9HgMEmLYCMDPYUCttMXYcEHupktGbopSa3o5Th6Fn8NqYr6MUYnXT6TRVi7pZneRS",
  "key12": "v8NpLTf5QzC2Xf5RjySTuHUJdxjnCToyygAcaoqAYhNCUUWofHFQVRS8HVn4TuSaeUNiY2kToeTVxt97D17cYNQ",
  "key13": "2ju1r751AC59aBhibX7zR4XQo1mWk3tdfJWSBjbrvvL3Wvkd8H3o8ANzUnEsNdojtq7W5fCcCqgrvYXpntdRiKbn",
  "key14": "RopRvFioofD7ccFTjGZpQMKaxYUQnEA2sBmDJZA9BZkhi9Bhoh2wtJnFxVLwy3ngjVRXrttBzik7Ugaf8ES5MYr",
  "key15": "zzSv2KAdaBEUFNLdiu7ib7PHrN4DbjtmKbRMzXFqLsWkKRVEMKeVp7mi8K2Tbug9LaPCXRTyMy4qL22AMXbCxLm",
  "key16": "35eyucXyTZSuByNSjVQTWBbcqADRkUxAZh6rVsKiTUkFAiM15JCSfV5pSoyqnDVtc1DUEZCZmr9gnwNiDvFfEnsC",
  "key17": "66nA4d6oW3rRiodsrHJ1sogEDqZPWhGPkxZH9M6GAjhaiSex7h5s5omhZ7FTyZco3XD9KRnVKambJidHsa9UZyf4",
  "key18": "3rewz52UuAvkfnz1BcrkB4SYEUrRVjWTNiHSFbGfi4GFCEUY2hBRBFRX2jChV214KbJvDbD4qFk5TF7sUYPHnJoX",
  "key19": "4YJ9VKxPVCmZsmmdvZVfJ3LMR5zsC9MfTxznTTzGY3b2DqqbTYik4Uxh6R9oL6QFUdgo5PJKhajLv1nQxizPJ4ZF",
  "key20": "4z2yFJ8k9bqASqSQhuARV5qUMyJ4NjHZZKSLN3JyPRCTwbswfaJyfFnxTkwkQ7vp53SSeRCexh8rjQ1PBGE9M6De",
  "key21": "5MQ4awfFPSPQ5uBbxjJeWaWiimLav3siNXgNrESB4PcRXUYDwfhEKRyEApXcxSdxzEyahb6XPYhCr3cbjGoorBuW",
  "key22": "3McWnXNb4qeSUJyvQpq4KMkbgT4yXAu4t3PFWa7gyaUGbQ71csK31HMKx2ntHFcDhCNLDztTmzAJwDYexhRLPSyS",
  "key23": "4tqqPGm9p2vRBpKTCEaBms8DmLFPnDTxYKY6BDCkoUWzutBQXVHuBVyL3WAH4APrxo46refJHWytrusbidq5jfut",
  "key24": "5zaJSXj3HAQPcvgaVubrVykP9dBWAV7VZmdavYfwZnbFziv85ByE9NMrEsTJGvew2YNFpCbEiAKq8FDK8sMJUJJy",
  "key25": "4B75P9epSrYF862f38AV71Xq8xjyxxNtd5AkS2ZzHLrd4iZ2Pd3mEUZV1sGtrzR4525bh2Av7WBFAUYRHTDyVMoT",
  "key26": "3yokrkmbcQskEUjbEMkPtaYmTesRjBW6eWgNHoqdHMjEy44fcP3CrTNAfKmSBfxuv9vuQFVZnwwRUXafb2MS1FwX",
  "key27": "5wDTgjPzcF4K5BeGt7Wkgc4nScJifWHmb6SWrqcoShCcVQane36Cr5FrLJFMqWvuKfqK5po1YjV86LzcCMRWATPE",
  "key28": "3t3UVegZ3GvwFzPP4enhHaMYeTX3XqXiZkhGE4TUDZvfXMMGxJdJuUvUxj7z4wXTH9XWPtbuHZpYVwoVFSvDJgk7",
  "key29": "3zkSf7z78v8345a39r4VKkwAgTcpyc4EU5Kb3vrsb1iwegSF5phwzUmstYnGEJK8hH9HgjjhhLYQvXbrmzpszRCz",
  "key30": "27rfNoTEYHgZEW6euUjqc3RNWiFLPFLnjwAPub5rQU3HEnZdVTsY8MKLrV2G8BvPeM98JSEZdozK6s2APimybfcm",
  "key31": "2zffQL4c3w9XN38DrBupj2VWyyCcJXScFhnebzsrmDyAcCTJ8jkqaBFmxVwjcomiCvVn2UqbYzWRYLgrD6ZfRCVM",
  "key32": "4GDNnKTyuL2NjipzBhHHWGpbpXFJrnZZcG9jeEJZWsHWr2pnFQUaQDByjaSN3st6zZqdALh4d1vbm1nAb6WqLkK6",
  "key33": "shmLUQnPYLkxfR9JZMrVXhdVhWMUrEWYvys5jHzYyCXHgt2FV2Q8Rx5geCqDNY9BtAeC1VbcZiJ5oNT9LDXroJV",
  "key34": "5y5rJ8ZTp9GZL9LREdGadVDB4pbRRz99uLV5rrvmAizDjvBPB5gAYecnbPNqxWjR4ix15uasx7ZH4csaYhRjU4cy",
  "key35": "3381HhA8BtGvyg4LcwZzmADDNZUx9hERP1uG6Vv4omSsEan9hWihQ4gZCoKF6bNhA48Fkq3CVgYCYSUGGfeufzYg",
  "key36": "2VATfM4TWRNW6YKN34543AbzE7sw8dB8Q83dVAnJpVbKre1jazfgVM4vhv7179W2oiGdDA7L7KSo9Hof3m8RvQcA",
  "key37": "AFTMaR2avWSBB6LU3FDTB1KnSyVfxutbmBRDLi9hWc2rEzSRWWL39MbQniz6tETXSto1BztEZWFerxDTy7fwz3h",
  "key38": "31NTUxWbAevFiWjgLZXHzEsPGYcGDEnTv9b8VLTdxa2KnfNiNR1ordNK5UkoAJ4PtwaBNAg3PcNUJSrw1ZycCnKd",
  "key39": "39PfUnxiXZUNRSX621nL9M9KtHFaA5FeA9j62s6JNWH3AzH2xDm7mXwDUDMsgntV5b8zFo8s4yTRuSVvQg1trXKL",
  "key40": "4JyxoeCknYky9JXNqbS6VUM4Ev9xXVbsFY79nCe39hesehFNE7CiSCqJXFrYEnLgaiRXxS59Zqkoj46yuMH4PCxr",
  "key41": "3FsxiV6PuhvkByFgNvDTSEy6CTaZDARxaFzzQkjRCCdQHoNvcJLVUDK2YjyR8tkX4bwyXUUyHdAax69dv6MSzuBc",
  "key42": "4Q5KXEcuj7oANHHDjGr9yE1JmN7FHMmXR7EzNqXpS4n6nu9CmK5eo1xVB1YN1K9Cn2axaEqbmCBDWqre7pqQkuoq",
  "key43": "4RHJBphnFuFcSg3dNczfGctoHFPwXqcnUdmufPejwevZbYdh4CRwDeJBBWtC8KqMjCmQD3jNY4b3U9iYv7yBGhes",
  "key44": "5koQPAFDTtci4KHbPTGbpLLMhNh7q2Lvx7kbFuiCt4NyeKch9iN8fosZYiptcisSWLWAiNHiDSLeeEUYMqhySDC3",
  "key45": "4uRmdAspn8M5T5bi26zdhLbGsMkVuP6LBCEL8d74Br7Psxc5hr8NHtx7NCxqQU9FPtcbVBSTuPih4qo563tTTxBm",
  "key46": "5HHcpBRMbGcjJhGz9SXEfx2TCo49rvUEscQwFhZYh41UqbprV39Q6zZSJjmgrTmaUBtbGfwroMaesgtcAu571949",
  "key47": "5Ecvc3rwvRQSGxnwWURP635hMQ7ExBpWHysyg8m3sYk98RqjvEJGN4kuKapGBYpHyU1znVd5PfLoXcgG6YaPofNi",
  "key48": "2GYw8r5ZL9kA376ih7iTf6pDXnVA76oHGFHQ2DCoLwJC8675teWpgKpPTQvNdwrLHXYbSML1U9xMwRJU76zVDffH",
  "key49": "QdYTwiHDHHx5CXXuzkQ2C49XwGeFpX6gRpgRpcPpTuQ8tDdMRWhugoA2aL9LqLwVijyfgDm8EtQwTczJuGq4ssQ"
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
