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
    "DVcivbka4YcJvm5tx8WsCDnGMR73UCRDmSwVa7qZjGsa742UZStTGGTEm1UH3UcPD4Nh8UgNQatKTWP64eMgnwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSM2tMu3EB2DX2LwcYwcUdbnd2wssCxad7UH1bTCxrfaPwSZTSSXEJ7QwQ8NKwedQU747SFkNswspxLQhgo7CQG",
  "key1": "4wgdAAFHJQZcy5esDwme3Kv9zsyKvCxzuikekk63eXDPSwFaNFZSfeBCzZEgFfX86M5DkdWGk1EVS3EeVGamBTme",
  "key2": "23fx1V6Wq9PJojSKqubuUQFL14TVz4wKo3Ui7YRZDD2KtMJ4wucvzaw6TQ6uVEKz5BDA1xYDByoSV5RaLMn6KWEo",
  "key3": "vi3Kbc5rsVw7KXQg82Qgqgt2bzPecoXt8f3Q4CxSk4ae1chSxmQDqhRgecPdi5ZfgJScZo4qCfiZDGvA65zsQ9M",
  "key4": "4ZAX8WhXDyfpzqLEETuiu9RJdEkp4vjv7pH1EJcCA4W9WKzAb6VME8sce4E8P6we1WUqV8zvWbXXPTKf67ZWzCcF",
  "key5": "4SnvJob933xALSQCEcwu6z4qC4AEYvWngTTZ7tSvoEuxBk8GLB1xNFXiViwYgwKPt8gEdGzgszw8AMVbQkedysS7",
  "key6": "3NBqFmvndABmDCn47vMUwAKYQHx3dYpSGLr7mekZBFS2B4iLt4GAyHkQsb98qjjLQkRLwCsyxFRecWx4gGb8EM1U",
  "key7": "3zWdEPZdqBDNcRKDtzTvydjZjxTQi1zyzXUBY6nB7pHjJ5HhRBQxigBJ41K68gpZ7rFffrh7ttCeJ99Y1tJbrcgo",
  "key8": "2Nx8JdU9wkH8PMspAHD6jAAFu5imCMeagRh6eYcGjix5E7MAnFniraXUMWugZK3SNtbQxYsDQWk2EXteyfG5Dvqv",
  "key9": "2FhV4BoqnBAzEP3uuMVz7vz2VcCcFuh93S8axsjT5bEn9AEqggFbqqMWU8bHM2WEmxud881B5peARaL668ZF72SQ",
  "key10": "3WVGdMQkUdR5qdm2Q8ZABTcM4y4hxsp6Jakx8pDpUL3DsVScM6X6AaocHrKBaJ67wWHX9oLw8ZC1wW4Lco1QTu7V",
  "key11": "2iHBN5ogAMsVRbe7QrswNY9zL6WqdzfcqzM1TpJRsXgQutiwBy8Q3vLLQ1XsBjjpfnSh34CkDaQqwPRAxhszy1vQ",
  "key12": "2GPRwArYTFwRMEEqPrBnan2doNdwvPBighmh76GVtNdhTB74qMorLCPSpbxgQEZYcumG2GP5cjkR1nLvMLCRxDVR",
  "key13": "2uk5BVL2xyr6PPGbcvU77GsXdqQBmaVoH2xDtDqpVy2UjY9bgtNqNmSASH2otpK7bpCJQUbzfxdeDFbXM9sGH7Xq",
  "key14": "88ZGXPLjmAdknQ4h3yptqcCwbKQYeR8DZBHzQ67ktWZX9isAXSk7wtFkAFF8Q6BdHhnyHSx5nhXG2qzg9rhxwbP",
  "key15": "5mKVmtoJN4v92EpYWxzJF1DVcTb3qk5ZBDMHp6Fg3spaUydEnNJCdoUDDGxcpDxF8n5Txk4xtV6LwAscqSCBv64Q",
  "key16": "3PmQqKy6cYuMnPWZYRowJmmbh12yhUsx5pzwo8dR2nrmvHvHUsUG79wXHCxkwa16Ss7KhcUC7MnMYNffZh9wdy6n",
  "key17": "5ZX8WBZ88ChAmr7HNveUYUHKnwNsLHDbmvcUbqo7u9fQEGFCxFTAMjRW9QbveubWDqBaNjxFw3ZngUBTTqN6vGw6",
  "key18": "4kDM2ULH8Hte64h8rHH7fLHNvUP3MUyins2RbqBgrtoReuT2Vs3x989MQhnXL9sBaHmTbNWhBLVSjS5L1BAvP97o",
  "key19": "5ibjRQAc6Syd3CuFjZ3qtxsiChfEQCa8oYcDz5PfUmNCdELYHDzEUEjUUB6LZRmun3r4cLDDQ2HN93VNFKiv7XBG",
  "key20": "2afm3qEFsP5cJ9sPfZRA9GrnJeB17nYjZPSwfrxb4dovkktCAGL4aKKpLZmVsUpxyGYV6LpyRstq93hRSfoMuif6",
  "key21": "5CqWQ2PbbEyg3FpdUQAw3hRwLaQ9VdvsaWr1rd5oVCx2wFhgfAMmmj6XyU1L4rrfYbKttT81dMu8fd2RCfd8JE1M",
  "key22": "3gVNaNkSDnhpSpiYoPe1ArNzFG98BNw1MAqUfnShQSE66apsZbER35BToeLT69nFNUgsAonNCVDPg1XUMtnT6NnF",
  "key23": "5tp1gzPfNuR5hLHeXocr4bRFC3X5PSzjavntvMb7mQocBsRw1ZoDPfASNN81s15ixgpXFLsHzEHAkmCGDFWw91Qp",
  "key24": "3bpV1GV6SXtPVv6iDsKqBhHHnbHMv6ZtacXVxwnhr9HsFMNaVPrpQwWnHCeDTowsXSnDVdqbFVxyTPNsHyXTmYMt",
  "key25": "2F2Q85CuWz1regiYG7hL2VMY1EFj1yYEucCFXkudeMy8yMFJGpPqRVZ8n3cP6ozCMgzwyutjijw96NsRr3tg2Sta",
  "key26": "4Ym91jPXhFsu3J5BMfU6FpHSKkJjraR3ZRgxmCizrzhYzyXGR7nXsPu2STbmBPqdWPWJYBU3Ap7TbZJBRYr3k9dS",
  "key27": "5BRYCW3UQG59i1boAB8N3MsfZ5wEnQakuCgkorCnjE1gx8D8aQ8ruJKTk4fpbBzqkwRkrB8jVCrHkgKMnCLpzDtT",
  "key28": "5tzsi8JBszH1dn2dWPT5TLA7LF7w54cX85PdoiTr4SPBUpQh9bNFNzTaE8zLaaLNd4FYeMNN8x64ZLJDoWVNLByV",
  "key29": "4Kak5kaZGFjkGuXX8xqbvPwexnmmwHPjpoWtMKoyYz3PqNSy8jorCtNFG3qZ718wgDkxMu7Tqap2UrRk8oc2bMN",
  "key30": "2gLPxJZ4zZjMes1KkzAMSr6YKWmx1G2nMw7SBQ7KbhcJk4CtKEqrFtAxSJaV7FuobcH8rdWYov3ACADi98jCxSDV",
  "key31": "4wtkeQ4MCyjN69izhoLgzdmqqPptKCEV9ucsBe3z2zJuWunNPqq6uWBKFWx9A1yucJqerWc1PE6SyZiZNMaao3YX",
  "key32": "31DWkTQYGkMWAk6vC68LngJEcUk4GdhwQrHyEWBBrcbg5Tmkhfk7t3BhhWkfu3RaWQcqYi8mgSn9UhBG4QEdpHwe",
  "key33": "3mFb7z2TjXBGsrnXzw1zDqVSPLyqvEAmM2cx24KPaKqhKriU2pvQi33sZ6tua7Cu8fzVTDP6JaricmFpYEZJtz1f"
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
