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
    "3zGqmKZG67gJ3dy2WMx8qDDUebxpP4yVaG14jTvAXiGNyB8yx9SihmjPKDvjWPrttNr2EuX9JiMyozuwQSCsaQyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cek79bvNwGoXFPcbp66dDntZ7fV8uSxcYgYbjpin8zCkMhRk8YdRAGzRo784QbXztNDvWBRi53FvcSyZkrGRmbM",
  "key1": "4H3CAvd1m4PyYKSp7C7HkJibMWfgycAA61mWTtSn6BTF4zXUxZ5Q4vpfQoSga4XTSvkn5BpQv8VHutYJ6agaMaB2",
  "key2": "3a7khFq6AnjhskW4Bd2scW4XgrxDmjsy1KxriCpks2VQnwkY87YhrNEKncephPJU9DjhRyiTrqn1ZYNNgVQdVp1f",
  "key3": "3uSj8TrxVCQH5bhWGkPVAyjR8dDi18ihW5vMNTjJW4hKYFVjpBhKHrbkdFhzj4zhVJkqBVt56nfKv7PArQG5TPax",
  "key4": "2MDGV125cJ5xcssYjVjgsKZEaeMAu7HWdeyzeuv5tMyiBjWhhjKNTV7GPQVEXNJGDYDas9Dw1c7xLjyDLN5Y9AU4",
  "key5": "38nzNgPcGuxwG8knQ2tSL4MPtkiZh61EghpzxbTpEnKmRdQcNWyYsq84PasXvjQwHiR99XQmPnEESV4ogVKRrxui",
  "key6": "ujJDNDqBuJhx1doD92JSHQPCZyf5BY3tCXNFDvVXWG8pPgJyns6wXQjmv1qtEgS31JVUqkLABU5SRZdDZ8yFMsy",
  "key7": "3qdGoRKHkMZKaXFW9wd7SuJA32sRm4oEvhsKgVjVCJCpw8Pqmg1qpivpWVkXVkvFikoPXEhEvDkuQsQ3E86AvoK6",
  "key8": "3tmbA2LcJApU79L27F7dsxxED9VmhsLk27AuuX9GcPDh25TmhLPQHGZG4baa2nYe68Q1XBMJmvaNs6fkArUQK3Sx",
  "key9": "TzZctU5DL3za2c3qaSNFDjRKJrSr4wyzEsXLaL5CBTgUSNRWBr8tWJwbx7ocUgfUhmxyBbN6FKEqPhUArZ2JmbN",
  "key10": "4iGX72DeWCSPYWiDkFcm9eUmQQMqDGCcHDXoXoUBagN1ZpUu1JPrYhsAJ383Hrin4yASsG9eGFEDxmYkLXk91xcZ",
  "key11": "2eQpHr2LSWCGSt4XZpDhX4AEHrWQbjPVsrUwapYd4n1daoJmwSEwBtDYjgjD2qGipAjouH1TPcwrjRPawE9rL3Aa",
  "key12": "53UChyPvUrMgNrMeKfyymsvgvHTMWRsog6GzAMq3XDToPvgkJQuebjF2M7teokLVVoH2KkiKPTFDd9XCko4QGwGo",
  "key13": "Wi1KEixiKeNAQiWkS5iugBGBGJbH74KQD8L2iGVpAgbDSrkwxMxDvov1c1PwRvgEL7VfPy1s3mDx7ZR1DpyEj9w",
  "key14": "2jGDB58D6Hwxh348JNYKPJuJZtCd8e5eWjVvD2SuWRH5vqrkWUQ5P8UWpSUDYtDqJ5auSKZmmxvVBw6ZMprXjrci",
  "key15": "2ZsbAs5khDHvuSFfV6Zmcjyb4xpuZpqqGsoxGoZWxWyWGLb1pee96k4xoc7XxgLCGNxTtkRBGXhuMffTUwRAFdfz",
  "key16": "4Q1C8j63yqF1FKFnyCPfhkundbabDozprsHPVA6gYNNgoBt7wQKSB83iBdFqTdgGf5KU3cUG7dtimC5r9ypMPFF7",
  "key17": "4FQjUKdGJaj2TjRL4xzG1MNeq3CNB5dFPepe7nbXP1UhJsBxNnsv5HXDFPei5dB5UZuCeLqUUotaGqwj6mkfbhe6",
  "key18": "3C6bCkWs7BZ9UWx334aeCNgwWsVP1YHo56tTpnDHhnRg4kYqRyv81NBeGhZC7f9J1CTEfE8oVEdqygq5bEF7LoYc",
  "key19": "3csFa2dzvWcne1kQMjc8q4SWUCE35RUVp4CFphVQYoeKxBWxzFFxjTepAy2BN95gVccHQJ86PpwRQoePQV5X5bRt",
  "key20": "4B9BhzcKTCvKSuKK72yjU6cXAePp3HwKNHV9noH4ymiGeuHuYHWmiQEHwwPVBWpAriqfB4G8DxcB5K6D3srJkCZR",
  "key21": "wHCkWPkuDsvrwQKiBZpchz2bfNTZvkjhCuPQDDpHfnApse2YbQGwsA89uAwYvPyH7PSgtoCnc1PdmWVq7HaatE2",
  "key22": "441YUxffbua8BDDrDKw1TVNtSzamYrVor7B6iAXRWYPfmoXp7VD8RxZtzyxviKRa9zKU18ei94UUC8zgdGwQ7fow",
  "key23": "4FAaGmEEnoQFk2dyqsik6f9RFEqxX5zoiHn9pa7DTvkEPBBBjDk8cRMXGayFk25PvYakg62HE5vBT1hNFNf6xMjw",
  "key24": "XVtVHpmGc4Vyr8cG1n6gWHEfL2oLkevDxGuXMBzYyiha9Dbs7MSYTp8MzsQUDLUBP2fZ77rAJsmtMLmYvASDTef",
  "key25": "4qSGzWUVf9i7fsZbTrVunmszXL3GsDXVjFgdVLyCnP15KkYShtMwEr4PWz9ZrT5xgna8VKcmSkyBeoSrgKNGV6F1",
  "key26": "xgr5ifYLwCRkY5ekECMNjystfBELZc3xeP4kdE2XM1rcc3VMpQ4cD1jqSTodhunoDY2RBxVcQxng17Cr7v1KZp5",
  "key27": "3hm4d8mdNRzgzc4xZCGqSKM5JbnPMD5RDxFdm48fFkGtxNGkMv4B9S76G19Gmxfm9n9vR71jyEeVeyxpi9o2mfxU",
  "key28": "5SyxGMgB2jj9Jtiis4zqH384fvbPC8YaScWrrV7mTVsxCsy8VvJ4neFW9Vk9CWPAnpj1PWHNUCFLFfyT6v11CsLF",
  "key29": "22uJCETnQqHtJirxAj3YJYRdpy9BeABc3BWSfbjyT5JYyWvTPPSL3toZAMLuktUNiKCUqre7H3ACDgd6PT5wGwiw",
  "key30": "4gxKuH9VooX44zRCkfGrTDXDyj1GXCHxDNVPAXvVBMEsNZc9zCvSU2JPFWCu9nFhFvLhfFpt8BG4itXWkamxE8dJ",
  "key31": "3VYLnx7maerWHTpECbhnapeTU8ZSkR9yHToEaHZXvAAJ7CrRUFKc9YVq6TULnLXY7UXUVGUaLYjmDZBUZHSQ3nwY",
  "key32": "2pSvPP1xSjtuMUo3J3ePaRzLyaTMgcaFsKv9iAZPk4f3r9zW1Trbu2LsysWTnLKHx7R8X3htSpihHEj7biSxyK6f",
  "key33": "5Ty24zNFhHa3o3uX5Jb179XBNYQ4ApikCXnDxUjvUqJZS8VR3AR1FsfuE4EEJUoEDYJkxNdnTDfQoBxsMwEJ6Xu4",
  "key34": "4HmiXL42PWMPfPyj8sYUiHBoXEpx9PdfMsaQAeSzVrZYqVqJf3vS9Zm1aUHSr9kLJUH9zQ5ir1m7pM8Ho7WzcJyP",
  "key35": "381aVsRcCPUzC8y6FVfKMiZq4ZAepS1wuvA8dxGZSJPxQQbR8jQD4L5Wnbkr91214jDLYspZkhKwA9RiZ4VN8p5H",
  "key36": "it2BGLEz6e1bEAkECBMMNsTZbd8H1mMdnGdzAmfYUqZzQw2TwwtP1ZKD62Q9vdw6JZgriryfyMZEuLwfuc7QsQk",
  "key37": "5e5mTaekojyq9bJkU1g5hL8iba8XGugprxys1dPZpLmhEPx3oXqcxmjWwvScrSJJsEDwxgxVKxEEpvGryEeSKrP2",
  "key38": "4L1FKb4LGjpCxWPtFuSXNeinYYxNbqqcxHWZehCCbJrHixxGMcNT9DEpa1KKcbX5LGzWhpFGc7WBJdNG17HfFH17",
  "key39": "49jUjxRw1uDc9kuiZ5Nt9HpY2KzbpT6SXEY6DoDdrHzDLxacjQ9UJGErfjtHdVLCv9d9pykJL8AwXwH8nY7esqAP",
  "key40": "27CpC8eUmVYaJKx4txA9EjmCeYS7qwSLEU15mg7a85dhyc8PJPpnDPzGMmHAbdFo553TYsxMMndZ3FtMk16Y1aMz",
  "key41": "3YuJrgmCSWQNPVCoCY7FNRUPUUK8QShFxTUYCSJhXzzj7zmCyoHtyE8p7Eo7WXjRbfc6udqjPLhd5ALSYDxKPLQC"
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
