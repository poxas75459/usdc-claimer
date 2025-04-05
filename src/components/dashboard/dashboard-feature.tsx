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
    "3pMc33DKZVnJNhmuA46SzhedsyT4N6uiYYJbc3UL8nGQGPpwZAALgtKYVtDzJcBHebGoFtZ7PfRGP7CKeBGset4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49XpRX5dit1GPt6aNzBtbuynGvN8agrZNk1rrfNo17HuhVXvBQ3WxwfZfeFzQhFQ6v8REWXLP4a3nYtk3mJv2P4w",
  "key1": "2TCaneUFYAsrVXFohV5wHJzT3tx8hq3jBXBpHDQ9WQ7C7shRWAiTkm8od4TT5PaHmyDEd4kXSYbUsJ62ivQ432zp",
  "key2": "2XV1oRUyPfuwh9i8oEztYXsxjdeMTonSpat4eGMWCEtejtiPwiP9dj7AuLYErUfWes1SUvXAv3QumFiGB3LrShHB",
  "key3": "4mkXbG72aBTvbmkn5598dCJQWgc7CMHXeLQnyawznqbVXUkiqvev8LTxi3MBMJn6UKX4eeB5WMaUA91HdnAECTiA",
  "key4": "2U2Um2bLQ15z5AcWXAhx7GWCmMsVCxNhRfQLeY4EyELMq27DfwFSLPBPLfgv3SwTT7iFa97EJdSL637SzW4mwNBs",
  "key5": "KCEnEE61mPmBzPZWeuR4B2wCtaJ4H4X6VfPmMT7mv38ckti3oVpLD2dZSFat7fyXtvGwrfy3vXu6z2WaGtkA3BD",
  "key6": "5cQGciFhW29KoYcrdpdHfLiXbWDBNYJuWmAYeiLyYDrGg7t9RsiZpS4NPbmCqn72Gbvrctsp82iphDgWm6gSEWaB",
  "key7": "aTPDFiwnnAFd6iEoo5DoaAKoBwePanzoAoRdtDcjchUxERVc1RdhfXHdYxfniFDAREVSxPqhyaVX2nVXcTqdauk",
  "key8": "5qFJRdKymBK56UM5Ct6NZVHWZDGAU8js9efR2hVT99JK8bveG365o28JkfPpE5U5WQgwZFgXwJJi6KLeEqE34UaF",
  "key9": "2vsQpzYMK5xMzup12bKNyvNLUM5gBGEvjFoeAgttuTT6bzgDLNDN4wXvEt5ZuqKfCk5afo9cyJYS9jTpUR7tUFWK",
  "key10": "4jkESXmdBAtdRyBKNuGyC2FqxDorRCqcgDjCp9NcZYQ1sh5igT9Czj6TeZDDt1h5k1pPnJNHqN1Bb8cmwJTYr72u",
  "key11": "2LJFRznB6zDGDecZ6c5Z21qovuAnj4f8PBPtFBuAqXjvMMZqBHrVcrVKQnc6GZGzoVWwYCr469wYW9QikXHDXFWL",
  "key12": "2P6nwqy5k4eEm8vALwMU4Xw6dnCaSvkkmWB3SPhFE8W3NePVxN99LDdfWQRJUxjnL4mrUEo67Mgx9uNLDoZKjj3T",
  "key13": "36bLzHUcoNYtzYRsMxBDAG76w1tKFvPbDvTRbroQPJ5ZQCuALr7AdCbbShho9JgTzVXejH1F88uTHhXCofCjebJf",
  "key14": "5ZrbKX37BxGcfkRucXriB5QWPkxtbdY9nxPhYeJrGxuyjJ3SNWyXLNxrg7Kpopgn5WXPEV8KppdatyorGtrxL5xQ",
  "key15": "5f8VM3GKL2iWhd9Noi9yRKdwaYFzPtooc9GPbt1YezrmfXjN7fRW7XdQQnxPa13ivJsZC4SJC7obka4GN1Fdo8eW",
  "key16": "4j93GCW6kZrFxKvKXz9hPWbLwUJduuTWM8RnTTcDjpPDsgVAbuAcup8Tdw35G8YmE4TFXdnzANMADxbqkoXTFGeM",
  "key17": "5BVAVrXMjMeqZvkfVYGsm6TmdCNFwsmZs7iavRk2LPQoLDr1DAqkNs1d6agLCCpevB1VjRmP8WP27qDTFBbvHENP",
  "key18": "5CnqSD6kPL2pH5CKfJrYtXhYwrTLxDo1gxkCnCGqa15XkJjhhNMYJYhvrecDvV4fSxcFB11zbSFZosHiDA3F3UU4",
  "key19": "2X3c3CzoePy3umKZWX16T4W3Zy52SyPqWo8AUewYu4Tx8yE9ZNJ9er23hSUSVbnZ4xnBbiTcWRCksjwz4yFsDNsh",
  "key20": "2x6fNTsbbGY6CMiB5fYuHAmHq59cexRqnfQqHqcVuo8zBR1Z57bFUM9oDHTPry4BDea7UuHZ4z9Zw7cvneDUShT",
  "key21": "4QHTNX3jH6KeyoEz7HfZBqSUqZyNgGh9ZhxGHTmYFhr9yxJRd4juR2fgVtLvSw8aAjroFBFvEo7W87q6fRtDpmtQ",
  "key22": "2cpnUFaQoQUCcGPPWKvneFigD1vqqkGfMC8A6U96cJa6JFnw3R2NgS17weTAYtpR5uCzM9QqoHjVsFxj1aybnn39",
  "key23": "4cqCo78o6PJS2aw1aaPvwLfDG1V3cAUGbr5s64PSvENX6F8Vtk6dN7825nEwX5gU8zGkLk7N4fq4aujxavy4gvhp",
  "key24": "3WahLqDFKfLGWEZDZzUWM4uZBzhbAmR4RHd27nneE72MkLQYhhjk8U58UvxZJzw6Kof8Z4MbDGDrZdQNMB6B2yoF",
  "key25": "z6eEZsddtUpFPsrqkKibSFhjp9XFdyNPBiK2VfLsEVt1HDUoeUYPMGRPdanvineLRbtnBUFZC1CKK2gpiSg2g4N",
  "key26": "5b1TsYUZ8pBHHmeC7Rc7dqrhC2RBxmCJdxUMmCUTvb4uy7sePk76hsTqbQnrKCNYEbGHYgQFcKVcthsykyAVxAHG",
  "key27": "3SnSHsR2giHfuSPw4aBQ2dmkDijAhV9EXQgZRz4FW6DNNC2Y1Y2BauPN1ccxizPcGp5yxqWinNcL4TMdUcbDVFKY",
  "key28": "61XxTGaEY6UtjD29EXAYqUxr4xTPaXqYJZjLEMLkMmk4EbPE1cCJEi9gPEE9xXpj9fFt2eHMqC1qHEzwt952DgDE",
  "key29": "65TjrpdLtBxhrThCJxd7jWkGhZYes6noBQUmPefqyJBVcQhwGPfaCHyPsRMHcFLqDZCEa8Zf2GznPEuQAyu3ZBAm",
  "key30": "5HYpvZMsNhb9Kj3Z4DSW2LTC7CxSX8Q1sBu4jwodnfPJ86CybzN2J69Ni19vu3aq91JNEyDrE8YVF98TzVV5v494",
  "key31": "5LWXrwV2RD1F2QTKC2NvBgFTXsu4EQv8oT4AxBbs6cPGTWLCQReCFGQtfVReNkPwKdPVkhEDV5GRLWWqBBhjMkYG",
  "key32": "3XtxkgXURjwBS1UaXjQmprBUVtvt63SL7Fu1pvb33aU83WxHy5Q99odoCBb7uHPFsosjtozdCrFXMUZmLqbpECb5",
  "key33": "3Lsev8stTkzPi2ojmyURoU9rGFdtxcVTo8xhNP557kTQVCdNuMuY9jSqj3ngU4qNbNeKx4Wsq3xD32t5hKvvVJpD",
  "key34": "3drx1bKh5LRu25R3jZ5TUVwSKessr41zwLVXvTWtUB6592d1xne2YM1n3DH9tEaZZeAuG1sfKhUxaRjHQrbCtQGj",
  "key35": "K2rdEDuqwShhQ5RYK7hVg4ndvnJoCkKq9bh84EY9Z52Ti5qmYGyigf18uywzZ5RoCU7Hj6goEifEJjS2NCdYiVu",
  "key36": "39Rehzr42xbkqUoVGhiJZQzMkLN9BLNo2ysjqq8NeKoUP1zxEZypJfk9vHR8igx7duzQo9fRsGYKeGuVYRHwVfhB",
  "key37": "41D8F4EFpkyc9penUAEiytJzMSNpKVzfoBs8Huu1ucLDgu1YeDLjpJSVrcWcAJWWLz6L18C49JdNUjSmYAFGedmw",
  "key38": "5BkaFqg1Rjft5hHrS3cMXqUXYb8i9wCPpTiFfNU2qBL54yCn4VZe842NiqwzgS5MYPgqwbfiCdtq2Znb6BvKsATe",
  "key39": "4hy847kpe8oQvYexHj8F51xYHhV4TP3sfozV6fHXhUhiPSwLpmDcd9rYdyr2HFxoSLX5ph4KDhPNxR3EcBJWpnmR",
  "key40": "5GqQv8cAgAHV45ADF6XXakSoNXbPFAkyrinELaFjN2Bf8GjgMZfJKjfVXPfjr5zSonRLg4F5YDJoWvFsSyk7EAJw",
  "key41": "viQcWwcpDSogniciCqVmTqmNpxsCUUFhzMSGqwAXYeKfQizq9kroK2wrMpXr61MjcT6G9gvXphHzWGgRwi6NBPz",
  "key42": "2umgJ5w7QafRagv9Bfhy2u61cHAPyVK91xmLutyvasJXrEFv7LFHCbUuq47N2JeCLmPjDtQCVKaj2FtT7rvBJ8mr",
  "key43": "5xCRduftsPYNo6JVVYkw4YV6V1uA8RKX9KLvDrU4Acro6S9q9s1XkJcWuKQJo44mBSnGmaiXDKr3wMGFQ3B69rsX"
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
