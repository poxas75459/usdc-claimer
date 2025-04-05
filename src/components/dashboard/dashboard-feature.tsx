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
    "MkSfrUAPJWQRDa8YxuBQ2PXrqtAENiYcrRntzGrcT1izY6t2vP7VvqbLvh7ZRbBMsEPHZhauDZyzBLnEAG1fC5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgqS97W87ycGyFRsurQjwbSjwb11MdS17qes8pmKBeg6shsf4rpAuJHNwXU4B7fAFS7zwtmdUJeRCmDf9sGkcCV",
  "key1": "3zWMvTdKuD3YGJahJQxd9QkxS8ZjS9Fd8PiKRF7fgj2sJK1vMMhmHuyHTjS2CqSLYvaTv3iPD8rU29Bv4NzUe5bn",
  "key2": "3Nh3RpMeq13JGHT4rujdUWFX6tiTfsbBEVVd5tiVy2CHA5SEn2pFAJQ96xw3wdgDneQCjkXJeLMkcKzNT6D9WYng",
  "key3": "5jJbzpxg8PGc1R5C1sQsE5nvTRXaeULUCb3YfsWCSYPmcjLm2CpxpbFdeborbV76TeRheVnzdHrY9cok89GCbDMJ",
  "key4": "3f6tuANqdSBFpuNyPXJiFW14QodUcFwGhGmHrnffzaAVZz54hpU8sxcT8qSVisXViN4eLh9yNsrn7EtvmGFhwGyQ",
  "key5": "5JpoUZL9kbm4rdYgHhyemNfLmgCcyfXQJeX8FrCNAyV8i6ntANTjTXkBCPdjiLGZP8giD1gfHPDPz15fH5MxfjN",
  "key6": "3H28LpXJd7uCf3KvTLCorNeJ3ztvbtMoNPQwYFHZAy8wqCbQ5gZcQrYVZYYGCCZPbc6q86j4jagXB7568PM9GxHf",
  "key7": "os8bu8pnwwiD65FfVTKez7KogvuJRTM13sTtURHypFHctJrBzWkzGt6nzLnN9eVCoVE6nFpku9qvHauhoSHBBPW",
  "key8": "5wxcuh4x2cegRhvthZiQdrC4nEefebSiaXwUwszxq97kHt5Gh78GChqVJ3kMhB4hJZaFXeY7XQQbdngTfjXLH2sq",
  "key9": "2gMPDCz3kpsHVQ1Tu4FTCbdmEqcT1BpZB2afo4P3QRzmrZ5zYZP3qCjBfmx5mxa5Rhf9fBp5LL1PU6MgTVvzeqYo",
  "key10": "5xqGErLKC9nouA63urKtuQCtfwn1hgeGtNFWh6AYKunhntMFmV6NceyqCKCE5X2k4HUXgADzn2P1NE1ZHxV5xWop",
  "key11": "btFa6d4Xkw2EpUrH7NSGKbJuJ75143j9kyos8NsmNt2JW2ub16VQSmRE7BJSgBv9hHC9PmaTsuXb7MzBt7t5ypg",
  "key12": "4bxQsHyRfMHWECkmKA3G4NyQAj877aiuJBjcb1znk9yAiReqbPGLSqDoT4fA7aveEu82sXouHWTC23N93XBy4JiT",
  "key13": "2Q8PVfSCUrmedLR26Hi6h4m86DoYhaBkmHEepXuPvmN8fgcWLcgm9zVB86cZJG2D3Vrp94n6FqrxiKut7HCTjato",
  "key14": "2vPwRqrcFtTvmZiHBc3UvwXiVFyzgDDcr2V77JhAS8EneGBCV96nVgxEoPQ1BWU3a5jYvqnSbpCYd7diQPmwxUqL",
  "key15": "5ZZdVHtQKXixatR37gscwqxa29v5YsXiXQfdUjYnxAnSyzJR8uxECYj37n9iXPshhnuZ4uHmsgMSHCJYJGfQNePS",
  "key16": "5teieqp2hWie9CV2bJnmcMcu5h4x3yad8r4wXscWgHZndpLQXAaUKBduTBkDRS9o12xp5oUjKZtGoGhQraZ8hkkz",
  "key17": "5TPZ9NLiYhph8NL2qu8ZqY94pHNeqCDFmXztoj5dGPBnBGdR3tef4pyaFyZbsBX4RQGPNJ91t5wgBRjqaRN7LQm7",
  "key18": "4seCtAajFbfzmBMX5S9F1KP3FvCVSXHU37TLeYXqVcENkD1HNnMyJMG2o47C8ar59DihCL2DzBefSGTPqkNeUSd8",
  "key19": "sxcwv4Ra9zVovYNMZ8gNFC7QZ2YhtpYbP2x1gaT2r391WqUio6N17UPaRqXjH1kZDdUh7wQpKMiPyWFmLowXMEJ",
  "key20": "5Dc5CMvRh5tgP5ZnTR3ZQ6LpvmbPDQsizhzrmv19Y5uptEC9uZ6h8BtmtYH76zHPBaMHxU8Rds6UQR6PGGDDKTTY",
  "key21": "KMrmvxqyCwGwRUdGgRbKftDCE7HTz1CrpyCTG7YXx9xUFNgNcLRpHkcAaC6srkNHhswGqBnjuBY4qBArRsxmLhH",
  "key22": "c6CEvBYfLLpuWc8wnepn1ZG1Q1ALZMJXqEYhDCxobMSTo4qAhAj36DP4hDYcYH76sYPFHg2Mq61vDcXqmhLs7v1",
  "key23": "2kVf8bPMshUQEj9gq7E5A6nf7744aBwwMtifEzaAiB3x2TTKGi33DQ3KgfKpyJY9VBs67ar6vG2SBENUG125dt2G",
  "key24": "5nXVhd1wJVvnv4RctoKRyg1gpkQnTybNGbQDoBtPWHQ8vAUB6cu4b3TpZhnbfNrqG8TFp2B2kT4GcR9kbgZrkKXM",
  "key25": "2P28P41C6aWKXFfdj4p6vmdXLrgoDVzrgRkqHHohJek3hEuxx9BZeULR6CDFJWuuczPEKkjAX4YTf1qS15hDz8Xn",
  "key26": "54UwVERykakaNk98DruRWeD1U68GWyEdZjcLQA3kTrwL34tRfSL1KypJ4UmhgM5g6N4hLnv1jqWUWG8HUZytnVV",
  "key27": "5fYVu3z3g94QJN5r33DURZqBnAMMfyif4g2n6EoND4MaGcME4m3WYS3XQMw1ZTdSXdqvg1m1mg9VVGs5RXUHYeQ4",
  "key28": "5Cr9pMw34d4CXpofMyZDiCJW4D6GPhuWQEbyPHHNoEGgGA9wg4cgws4QK3odqJrRh35EarLenrqwyZA4WsYciVbj",
  "key29": "5JzCMV17b4abZfuXZDsojfhFW5EeRcEpg8YBP52yRKNzfSxUV1tyxnus1LaxTqtj3EFm4BXPb9jidMUUrgeGdz5Q",
  "key30": "2zLeAXFgSQ1eQanKCKvz8PpA3BzFaYzGjF4VCSZ5He846QNeCyu6rEjidd6zpctY1pYr7pKF4fBfb6UeYcYzCPjv",
  "key31": "5pBhgmdRPPRL6SQ3FbmaDdySSvv8z35TADCfvuFMk14TYX3xWsDGkP2FuQKpHC6XT19vucHH8631Af28gbjks2P7",
  "key32": "2YepufwzxvNYhM5Gcc3MBU9xL785wjKjJdoYVcrLqpmRmwKcZ1qvHoC3P1hq2Ysd2QHGyRn91znbAYqXgpcMzrqh"
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
