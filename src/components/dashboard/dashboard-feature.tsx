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
    "5cVgE8vmMH4fw9z3CcurGZQchMLCPCf7CUruhvgX7E6N7mPPYYtHMYc7hbHyNtcHFv6GBNwVXAFPzy5c9YRis6Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2476ZzuihaAKyjp93XYhNAgJjaFieMa9qeHfwBAEBMFsWyNPtf6Y58wYn6PbkF2JhchGj6opWKrFaQk2wWeNvduA",
  "key1": "3oqvmUshhYLiEdcTGobAycFkHVhCPWzpVFWkjPvuoKcUQxfUqZHXbACbPGuwgXmRkGc5Gzu3iZdBYZhtpUNYCBV3",
  "key2": "4yvL9xAqrE7A3fbAJwamK8PDphCrhfLWnTP5Arv358Y5nK4NB5MSAs9UinKTk6PVjkB4J1h3bqPPEnyT8ytndbgA",
  "key3": "4oUZg3XfcLgh3NMHA6MwmjFVpuKLhYqzxa2iYeXg2zCtinPJD6Uje61vJ2gbXqLg5sQkPQRXLP7mpnGCRLfCDJwR",
  "key4": "3ZcRLzRZemEn93VTGf8Pwo4SxjPQLUEgXbrEApb63Rn61xYekayqbP4puod8RuavuVh2zpKju7nP5XUwNqkqkjhN",
  "key5": "UmdvFkA7vrs4Qhq1xbgY6EWQg8socoVAGWqJqyX6PAqR5c5BpWhBmU6fy9T32eYe1VdBffxa6kSWUgGsJjRgD8A",
  "key6": "5MqLwZjwm7Bkvw3ZDn65vcV2XqyCPuJZY8qL5HekokVvRFVSjayMBrftBR8xxXKp8Lqy84bZJeo9oZtBfHNpbo3q",
  "key7": "2ntJoaJvXhMuy9bMD3bnKZFggEbmpvCk2y3KTRUfvgWW1p7uAP3575cT1nk1xmfTFpMJFqLifx9sVVxVp3tmWvxq",
  "key8": "4GqCatbS59SgLWQBCAPoW7roTYoQQTbhpwwMyZAUf3KRPNeMWzMqApBr2jMcZ45EAsSFSPW6HrNjXd2SKb8Djkmp",
  "key9": "5jkcGUYTqDXXhrRqHZuKXURnaza4vm8G6VSCJzP3d32qb6vPGWYVL3vi47EuNL6ABREELtkEbv7Z4dSJEJkTiTqJ",
  "key10": "5p46aK7unbAdp32G8gdc8Tq9HsxE119AYSWHMiPk3Zy7PMKokjd9kDosF7dqWAWFzmS7nepANrPahA5mUbrj6MNh",
  "key11": "3yZUuLKgQkctWvPH7vrYb337bpYKMvBBEPMmwWPeMECJ2H8yKsJdt2uqMyQf8MpckaatxJtZM8iJn7t2bpdj3sSS",
  "key12": "cYCk1AjFsVnxB2v7p5RAWdrCNwFGLbTAusDZyuS5bneVJHFxZ8RXmA1GFhDNce5cfj1Ftdve9Zg2coMwuuNKYh4",
  "key13": "X7QcGMfibLx3PoFTBCdxQCPDLvnQPEY7ukyycjLWQYKmoYrghaM21es6NutzBBYguRZUqKYeCGPBwGUJY9h3vhe",
  "key14": "2Lp7PeyR7jbs2ocVBYub4FUh2jzFivbET2X2hpQU6w5V68kgtfoLCcsGbE2i2pMmdpey3Yx7ADcjJWx4rH3hdD2j",
  "key15": "GPDoUskgHqyvLg77zFko3y6gLoAUyCzGeS8wH7W6iF19ukoZPxyjYzVF8UjpwRpSjQhhxdhUmn78LzaFtUnwjzU",
  "key16": "579ppWg4ivKRE2Q5vzPUBg7ZkChV7jQMrP8V1xyunCVaTKVqH6GG3AysVsU9rByfMGP5R4U7EiXhQzb8CkBiVa8V",
  "key17": "X5tC5ExmyCMTXsnyQ6DyKaskqkSsq3sYFPbbgrqtGLznviEV87ZeY9W3HM5LqnfzWSJbgHhSihVsbQTxxwrxxp9",
  "key18": "5qk8d2SbrtjfmUG8ks6rJrRBT7NVFN8W8Rw6ViuVGqQU5QFTbXk8PytLrnFL8GE8HJLJkivZ87nsSn4fLcKs4SFZ",
  "key19": "2i9aEA8NCnZ3qwEstDcYerok5Ay3JYfzSuk1TizhExvfjRea9N7RDcbDFHxAMKc644UqRmJR3vJRHZPnNkiwKGgz",
  "key20": "W94mWghtwW1ym92qPGy6oj3QaNaSyAnZaydHSJLeBmvaGUru7WybYcwqrE4enkQJR8BxKv8EWD1CpMX7o6j6qwq",
  "key21": "5pRvFyEUWKetZgHdwZbjXv3r69mXUCxs19RY6FCMEmN32AdzMa85Gq127CYVx6Bnj4KhsZW7ENRn41uFSMLb1c4C",
  "key22": "p38gSARrknSYjfgeP2TkkRtrpdFNTax5dPHPzxFqtMSNQ8kCpQLEaBcoZ9PaGQ51mLWvxgrAeZJRbnoPUstraPE",
  "key23": "3uPDgP7FU4WDtj2x64o97GPeoQZV1JCmPbbxSm84KTK3dSRuoxt67cDAEuKqgPwZeRcssmYdWyNxsQgibuKsHTGN",
  "key24": "Zyr2RG7sy1cScy4tzA6F3FkE2qESeeacdBmKHwEjP38REqqFwWRBuPwVYgeSybs8VaGecqe6u7priANwH5m3moW",
  "key25": "QFMhnJYAwqPLwG92JEHgNscfQs6vYFwBZt4HCaqgxiBZYjbxWNtBsu6zMkwN4Bvq8MhPGQiu9ztDRfuE4pTAoUf",
  "key26": "5hNzi4S5TEZ4P3yu7EmW81LYuKMd9vwPPGJwmee86YBae5NLUq8SXkGDfraKjxDfLRPHTubVipTi31LaWbX5ppjL",
  "key27": "45JokA41gwWKVJdNYoKnuv1z2PMNXZ2anBYrpfzrHC4hEFbS9CbY7npECmm9eeWd5n89hNRvzdRUz7i4nqRpe3jo",
  "key28": "3FRa38hMRVfq9y5ZSdftoHQuUM7ioqSGtYeZTXybbgiwh3EjcY9hm5izPxzot2kd7ebAPiAiAvE63sagGnniPrSz",
  "key29": "5h7GZTD78YvzstxY6Yc2LSAwM3Sr1ahrMqD6qo4k5dBPg3Bmd7k7WN2qxkxfgvmQqNzieQfPok3hDh4ZrDUdCNAt",
  "key30": "3mV2hMcvtcBajo2gnV1EScWLEVSoVPaA2h7L3NxgJQeGUqUhoMR2p5ujK7sTaUAPjTmqf3nCP1Peok6S7jET7sgA",
  "key31": "2wJG3Bxz4TRp4fpDG1Nd7uzMsRYNWXjPCYQNAUGnf9jThaUjg58fLsSZ33tCjoV1BnFaLaZYefpYd4tnQ15fNCx5",
  "key32": "5vGUWc9L6MJ2iv4FTaGE2dE3oc8YY6HNqmXVEkmneM7yCJK8Zcbg2mpwEAmpTZRyN2zQnMRCgf9xsAaEHvJJvUwX",
  "key33": "jKFFSn5EkoAnrKLbCGv4y3m6eAP2senfntGwB5DWnCDFDtZvquPRcf2Z5pMDBEWBPcnjHcnZNgJQfZD2FGFPvFe",
  "key34": "HcC8uuDuQ1hE19yhPwFA9pLGRS2B7zdZsmujpec2rGytzX2NAFHwGzgzGW6Fnd2neLRJ35sPtzwTNUDMyuRCHb1",
  "key35": "2pLb8aYuAfeorkG4GjVCBS5m3VyyvMax2CAdf3MErjJjVWgsrTbU5bnS2wP6jqYJEvVUrTMtE5yVnmna3FZVdfHd",
  "key36": "4jtv85fnm6GXQkVgzRvTtMQqVocFmWg2jmthQiXZGzN36uz6yg3hBkBaFfepfeYtPLVr44DT6ZvwaQfJ55BNXEy8",
  "key37": "4rTBqw49Boo6n5eTYd1GhxLu9Tba4KmDHJXNskE6MYERRoJT2R6wf9jHam8cd9MK6issUWZfgNAJWEc4amrnufZE"
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
