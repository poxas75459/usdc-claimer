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
    "4BN7pwGXu1EA7eMsTz25dGQVyCMga2Z5Qs8VbWJYmiUtgJgQ8mhbRDYQNRkjWKBN7hAXbY9SfvbyVFY2egHcCoFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SxEgqv51nfyEnAbRYyfTbBvAfk297AiczYgZ8xqy8Er3KZaayVkPQKLEb44F9ZeqLMvbjRQryDVmnpfmuxP31tm",
  "key1": "4LgZNMuhPgarFMQu1M81Mo1Va1L5xcdwrxteppBj41Ef438B494WeofUnW6ggZPFxWTGRwVXLVoszoCwvEkStkRq",
  "key2": "3m7faaP6Uvd71DRwAcsoNyA7tt5QZ1jdnRh7qWriSMnhgRT3eiXCsLTkF6Gi7otNKect7yVX1oCqA88GLVpQstwG",
  "key3": "2P7JXLMvF7dHR1FkVxmNjLzEA6VVNLHJtbg4a1K986d9ZBqCcRPvRPcNbHTthiK7eFr9uAyGhnaS84EyzyCW4w5T",
  "key4": "aunprDoLQtVZQA13Tow22xTHVv8M3T6WfRio9iLiwTdfRzguVJw7AVyByFqDAGKLtGrbpamcs28yn92MBwntuD7",
  "key5": "VNrw8FkXX4xSxfjXqrHf99XLdKyLY14k6BMzTd8N5JcgzhcnQm6D8u6C7p6s24x5Lk1BZ28ZQX7nrT7eP2eYSBv",
  "key6": "2tnuCCQ8vkzr8X5pATuUxroJVYddmjWv77ohtSigWiTragMgqjroJbM9LmgJLnToeSSM8o6iAZ34yi8HJxq3vHMg",
  "key7": "RV1yzj2TcGpuwH3csFkhtbwkj8tC8QqmWukVkyMiZSo16z3mAyAzUz8SM4vRPezvLNCDxKZESjFqnidSzVCXJrf",
  "key8": "4DokKt2zkKR1gYbnZ6bZRmqVeKXrXF5FtsVKX3DAxTJhgxizwvvxwoNaMSbgCRT9LFEPSZBaiLDQXBVFRykHJJWX",
  "key9": "CjJqMkfGPXkLPvGR9Sb5xQbUu7k4cGk7gHtMQPfRnmCPVT76EVzejGa8QEFw5M8FQuRmLtcMpkdQv2yMfePXvnb",
  "key10": "9VM5iSqqeUMKYGCEymVXffjMrGRh2M4ANsWoS48gT9JjutfHgJHB8ektSTtcLCi5kCQ9Xp1HsRuuGZDiKPqRUPz",
  "key11": "Mk3nMWho8DTcJZKVXf9drhy4r3eEB1abfau8wkJfAjRcDX8u5RGpc6gvhiaaCMqjJqksPBHmhrXGfvkos1v4JnR",
  "key12": "eB8QjhcouqdXaLSvvYX2uYG69EWqokMrpWREXLWtq1ET1YeTx7CBdPUvRLJgoCFmg3oauJ6vdmddmYtRwavK9cM",
  "key13": "E8oHMLgEQbFgZXLj385C6iASTPHFy62A8zi6KTtDmp4RbgaBnwXkH8m7HyiZNPwQH1MLajjguF3kMSsi2wZBQWJ",
  "key14": "5pWTMad437uZtBCTLqsdb89okjddhXhW1gvUJK6N5QdLmLb5uHeZcE94CmAiNZKEB7HAYcocw3v3Ffoi3pp5vQDD",
  "key15": "4i5YnVevuZsBbtrCeDveJPVTKiSn372cSyRf5LHHhQ1Yix215kJqz9qnxqwgHw9j39ZoHYZAhXUVsCfV89y1W8Mi",
  "key16": "2xNohNNsXoP8PXfKFn5YMwRQKKSngCa9SRyTMfbDWYooFPvNRcZPAsYj8nc6KdD33PPrZXUX7s3RuweAPom5aD3F",
  "key17": "22vnY3HdmJeVxWciBFttBTzgktSkmwitQWpjqf1zZM9AcoCpkQMp96jtM79RPnQ3EH9DVuqGsDAceyhsLX6Vijk3",
  "key18": "5eeCt2qVazVDGn3dDwGeYvMaqXEAip8emC35ArtAxNeivQo8gumFQjX1KAwHMu6FivvH6rwq75sZs7szdF7BAN2q",
  "key19": "CyvqedQCoYfiRBgnntFXhPyaHMyDqZGM9an8m8txoLCRVndxNEoPAgVdARNwPTveLc6W9EFQde3eWDvNYvy63yt",
  "key20": "YEHRHfz6UBwGchYJHf2rced4zvzEtuJ9PR67cN7YhxQa8A5zXK23quZsS5ke9LWJGqzmXW5uuvei1R6RrnbcXM1",
  "key21": "3sXiF2rFkBDoZBepkXjF1B8ZGNDYs6TGMF6eSo8SRqRuNJWPkEBZNTcmomA7gkbWF6xyo3q3hhPon6N5fK3eAe6q",
  "key22": "2q8YoWVXuTWZXKDkMmpANoShj3KxT1JYPA8397tmC4SfYs5eLY72RgbFNJxha1mUBFea3AZBNn2KXeceKjfFi6vx",
  "key23": "3oiFxMZcwdLjTsehWxR7RpfeUdJzDQYQ4G3aCkCPi1wkuG6omGMkxWqJWmywdNVWMsHc7HkfCXXW1VDAouU2Ktq",
  "key24": "B257X8H3RfmcBcwfKvk5gn8bBR9eer5Kkj7cd82y8ZjXjGauSmKuhRaTJda5f6QSjaE7ftfz6XerHhSb7joytzo",
  "key25": "q2UKCuS99U6qA2uDwBtUnGpa2UPLfHYCHhLSfKF6yq5N31pug9ZkVUMCzCnyfyUNxXZ6Bwjjd2TN3FH1UNvU4cQ",
  "key26": "4zQ31ZiJtGe8REWsbrUAJS3pZxmLtpPdu1LhkfxuHytX5muwZnXAKNwLccSP9pzmcyQBLSfG5tm1V3ZcpksXbWMP",
  "key27": "4vWqct8TJBs89Fe3BMUtxPwQzRjL4d2nBngMzBbU4f8623RL6xZvALSE4TsHPcPoG8m6AoZwP5JX14jav6mTvdPD",
  "key28": "XX6Km9f1H5KVx6KoobEt5W7zQ2cFU5DxRGWfVmWeuT1CppY7udzgc1Mqz78zBCJrpE89N4ZYrEC2H7vqR8ydtNi",
  "key29": "3HxhvEFUYScJoQ6wvYaA4vTHVhXENQCrZnTPLvyahMtUKB9PwjFxkX6xTTs3tQfxbZuhBxNsq6eyPayDYVjkUbMf",
  "key30": "5hCr7CCAN8reWksqi6YUdRn9SQAEQTtx7ncbFnFm73rwNWRKtiXUL9nAsJ36S7XRuPsWVokWk4RyGzukzZ3PgnPq",
  "key31": "cX55AaLuFQLWT9zcxhDcbRoEJ2Mzv9gw16f59XtH7SSSKurWc7GrqE3hVY6fYGBSdsF9K7cDyiCFMvAv7McvATA",
  "key32": "4y6uCFChTcmcKn1ofnyJfzc27G2hdpSNPCtpG2wz6TCuAPRYwFhvLiCr2TBZDGyMAj8sNz4RPLdUR6qU7Vuj198M"
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
