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
    "62u4mETGdFJFxxkRHhCf73ChNrdXR3uB27hUWw15nDX2BY9E6nWbTMCq3CuwjyQ3GPTVzxt78WHTipFWf7kCgzu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GicRkVWR8XWoB2AAUZWdLd8dQiX159YicVWChzpiyqA1vw6RCCozC7LLZTVoJLYnzLFe1Vkm7xKAhNLvrGG7Rf",
  "key1": "9N7Uxn9ehUNU6XbYsd3JyLvwfDbhzBW1Dzfqm6piVTDpjD8yU7nBcKToXUVhnRdchbSdEFEk55Akeqv5ZXzbXTL",
  "key2": "2FhhYtbca4ktSSkusvukEpe8ZVMSc6DX3z51NpRq5eYq6hSRpHgPzfqzE1KXtCYgMxX4rdSUHR9GAAdpGjh2MmSW",
  "key3": "8aWXernBJmVGcNiJSSdVpUo7w524dKEScQ5wCuWPye52vb9hEntn3Dk43SQ5gjRy8n1ohoo9Zxw2FZRHajmiQJ6",
  "key4": "5a9uQ2PsXjYESbSoYp3UipfKeLBcV9iEsV6x3gY298YMZtXHEyrb9mv3wcJTavzQ2EdC2PteUM3DgU67uJjJbAGX",
  "key5": "26yKnemzfGnVEvh6eVrCQWsRg1ijYPT5czMr5wPLMZ7x8tKQhi3x2kh92zfDnvbzkM1i4CEp7vc3jxtGpTqGoscZ",
  "key6": "2pZjpr5GMyHKHZENBuCPULpaKD1su75Ndeda9d2mAU2hMPrDk7WKcnd3kvZKytKbs5H9pXC7kYU4akfcSWdTJuZw",
  "key7": "29e1JdptZaDMXUrFUuuo6LFveVSrzCA31UxfdrjT5FLXXbo9gwrwL3pQCph8ypK7CMNGvrkkyLn8GA1bcenTbvLq",
  "key8": "2PdBi2vZ1bTW6xUSBaGMtzirKS8e16P9NrYUEi8Yc13RjwNNRNLnMCS1XnkuaPphHzXRcNePGGEr9beGEVRvmnhj",
  "key9": "CPtU2XHkhkKTSAysdwXAb1MwuyHRcM6Hjy7yxesqvmY52jzTC9i4NQ4UQeEmAeCmzzECe5UVNrVsfDwLqmcjQhs",
  "key10": "27MtGjpMQAHwtjjmMcBB7WAbgCzsV1BcQyzS5gx8hPTD4KN7TJ73sX1B88gaPd4JVtWKp4wtefxzNsJXYvdiXJsp",
  "key11": "2CiGLMv4F6f1xAKw8kkvscVgrH1n5G8uXtFZmrasaEUGnu7y7678eXqooZukaRE8Z25MukssrZe6WjNCMs9trBPF",
  "key12": "2ohHYRfRUSZrLv72AuoDhB5FwptHCSeF3QhqbGfiJ8fLh5CNYC9LgdAh4BUBKEueQkqmSrMysvEtz38VnXgHpNcE",
  "key13": "2tjVouTsHmew5PYXt8Swrfd7a1xA7A9Di47LqpLFpRxZrhbgLc9eHZBjhEA8e4kZ19n333FaYV1Dugqu9LFr1k3Z",
  "key14": "2zr5GT5qSR8qQjZcQQPz75A1qGfHv6WRdqSRk1Dwtu7h4nUaEj4BNtncWCC5aPG6rN4VLkUz1JnoNFzDGp5ePQr1",
  "key15": "31S3guZ1Ju1Mr62ov4SD9ei8sjQpYtfxgR48pSzWfDHMRkKdMvaTMraYDDj6auKrWeHaYd7o2tCx2WrFeyoGoCUz",
  "key16": "2SGMLAC3wVo48e1hqDeAsVXcGheJ8k9xnPR5faB7BbUrWSgt6aQiPamu3rNX5UEeGRc1jGz7A8aBtsecmW1aMPPY",
  "key17": "631pmg3RdvnwyWHhM8LeMWCpRoLeXJxjELBya5Jq5JaAfnCzfRhtfY9uPWtUGJ7VWTFC3Y9Y7ej7aNy4C7kTZKhv",
  "key18": "4sHQ5VndFRuY8iHDDT9nmC9uW8jFobEH5rfGRv5x7bdovEfps89yMEEEbgU2mtiDFwJJ2zfp5frk3LHEXCmnZAya",
  "key19": "4CcSoMhQJadp9VnsErFohcSx2k9qD6s4dq5nSoDCagkpibjsbxMrtuPbau7B57Voosc6CEqEvqmXoYrRn2uDjN2L",
  "key20": "3trqccrwaChhxWdwwsbMpA7VgNGYkHXteNEKoRbnrSX469kQrrYqjDngrydeEEXH44QKFc37C4xbcNbN53g3zmaw",
  "key21": "3A7BNNve5Zjnv2Ne7mJw85Z3jizAzAUHMw2TvKdmMmQFvtDNPvwA3mH9gNbUtVGPkkubUPk4HG77RrZMHUevyPGA",
  "key22": "5hJfy77FNQZFeN9pSd6dR6fp9xXe4wvo3ZJQKPumra7x5Y25DuGVp8wuifcS2H7o1TRtoMDffPY5a34hBYeEfogW",
  "key23": "4Tcjgoi8TCUuEsAw6bteH1APpGebmr5iX61M7e8xt6ziTop2fw7UYJncaVwA3kyzVZ73rLWE8MsHSDEZX3rbJbmP",
  "key24": "4dStnZhMVSdYEhFvo1HbHvBXdsnP6FmVXPPKqEWnDj8wX4FX3RXi3R5gqS2gTxpeeNWLLZeap3y6ziKHQ7yGejVi",
  "key25": "TKj7KTrTjPZehN1mxnQofX5ejtVnvpwwWsjdzBmqpcAwWCtTPjMqTpVGpHkivcLiC5c23UsczU3Z9qvgTCa72eC",
  "key26": "2bfMsM9HWseQfeoyQXHUbht9bnFKUj8F1P8Rbpv6JGd1YC7fSxeAC41mkbz4kedbwVyqJnhptyKohvRt81FoD2jJ",
  "key27": "2j7m5cNtVU8NPCdLJvZB2UKYeE62CPqeNx6GsETXGT3JyfSS5jZhNV8VHFzxBVP8nEcSTgU58CEq1CCcXcsLeJi1",
  "key28": "eD1P7yRebEj7qKz7LFcUbRCu3M4x6pXSdGvHayyjmdtPFchvjhHRRpvwdWVRXyzABGQSGkpYWxbBRgou6yccK2r",
  "key29": "Znyx19dZWz2tQ5mdWTRVKEqVBmzQcdYjFf3gWJLxK3ju3vE7H365F9DitSCBpchY7YtC9NHZsV7QyrrHRLN1WP4",
  "key30": "4JjtwjarqvZcdSpsSWrhM3YXaKFsWS3mgxFNVPXQ47hpCLTpBn2nFEfDHwArN9ww4Hr4YSeJgyV79t2dNgpLjz49",
  "key31": "57fqz9HN9WoTQgmeHr4xGaB8VfvXNCME8wTKJfQZ9xQDJ5zd6CXGiaUywGM1xrBoeAoxFafXNtbAKhtankoMy5QA",
  "key32": "2sNB7Na49AkS1y9c7nQtJjkmdUnKA5BNwQ8yWeRZY8Lr9aPHwyPaPK81JEGkvHiuUFcStXKeXmA93FcbCQfMaFgG",
  "key33": "39pt6jWYGeJf2NPqbcdgC5p2SeuZy2r9iZ1d7MJXWWqcQiyGp5rvrSJDtmEk6s3SvPm2Teo2v73ETAghW3e3EbJi",
  "key34": "2dgcgCGZqUiDxKHdobCHf1SyGqvT5wKG1EfBBiAjWMHufx3vkB5K4rBw32ECsa9adD5wZLouuzgR9uygJRzinut7",
  "key35": "5MgQrHHAAYEk7ckHjoReR2oxk4Wx2tceAdqNkDoSUARvB3iwvpQ74svidk1BfXcDhex35EvNf2kbY8p2LU4Xkua6",
  "key36": "2SYTxa7eGLU59FmutEwvS8mCQvZYHGfkBf2eDhDwCYPppq1fsZM7EQ42SaVjBJU4RZegUZAqayoyEjteqqJzdBV2",
  "key37": "X7fbmxpZk7qBSiYtvyFMi6UzQjob7ZKXfFPQuSiURnYxcPXxvyX3pY3pGdJcWrS2Dy28qHEiNtjZFaHJLbuEt6Z"
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
