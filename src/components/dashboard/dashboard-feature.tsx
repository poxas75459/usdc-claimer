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
    "5ELSfY2tBjKWa7afa5YUgQLAYLrZF3VXyAbGKjrFyr11xhhwZwRkbS6kDCxJqotkpuWsez8SuJh6A1emRTnnwBKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JEqYQmJMx42K1konLaRvcoURHHNR33jNhfBBP3MXxx4FsRzpZvGypgAHVCadfWFYWYpPDDbYmGCE2bquKAYEZNd",
  "key1": "63CxJpo5xuoePPsLh93u71S2sDoe3o4YTw4MYrUZ3ENcUGVA1VQgxnyFY9xXdoHh3vfSeKiwC8mjHdFW4ey2edeh",
  "key2": "5bZhaqsKrj4RZaXYYcuMDgLFimkdrZA5VHSxk2V4xiES8A4hLVDxgLiWyoWLeNU5E9nE2U11AAmcKi9aXnMNvjTY",
  "key3": "4GS9ADRKumV4Hyq4ue229v9j5R2ELTiYCZRm7tSfJj876X6gZHYAceCL157UQx9rRT9UtP1BaVhsysMa9AeZQ7L8",
  "key4": "4QacjqouoTnyCWZiYyVTCzvMfAAuaAYQYAdffaTpriMxoGu3eFXRM9yS3s7zJyv8iucg76aka1XKRBfVQeYeU2kR",
  "key5": "5Gu4J5aXXbAnJgRRDeg6K2UDNdd32UoTaDWLrvieNgmvm4jBX12na15wdST8aVx1gssvPkBi2WRrS8U29jpwFgT1",
  "key6": "5wQByHtPsDkZq7gz9cy1NveC7Tj2CoETjqPpqjBWLYyC13qkbd5JyZw3j7rgcVhX6cX1r7YYdszEA5BFGYrRstKH",
  "key7": "kR6dBSz8Ng6QCsaCeCE5H2MHbCNQSUNNZQKtdto4eX54VGXkL7gWXZmgH9swfWW8fd7dyTMNJDpFy2bmYhwb294",
  "key8": "391ADECYRqP27cQarVRMGkJJ1u6FYApB3rpqUU5jQn1QYQb6Q9hsq2TgkhUDquejmjAo4PhcCLv3ieshLG2B4oQc",
  "key9": "5HSoMgqYzcJ6srCUSwtLVSddSbtwRWJVs2Ws4L2fLxLCTa3tWmDKpzd6Tr3F1GyYUN2v3q1M8XrtK3XpVPnDowHV",
  "key10": "3ZQi5HNdQav6M8dtKkNjXxNRDfJjdyjiUybfCR36jCXKaoktsGAuXHgmZPm51c4LzM3Hx8ymo75Bd7xGpvgjrD6Z",
  "key11": "2nSuCivqC5PRMrq41KkYc3ZQ4aqtNvbiQfUcBJGv28kpRT1xq9ppC2LuiKS4dp2JhWp43K1XgKqkHs7CuVp2EHYe",
  "key12": "4U6Cjw7NxKmUhnd1PcLR9aSKwEqBa8s7xx1eRmTy6NtxGiR6zjhCkCYHjbA4uQLc6scLd99LhR5TQdMUCGDy6SW",
  "key13": "F7mvkDphJawLjGJQTknop1Te56NHxNKjeVRHJLNUy1NTKm6kRzVDuJnwsm3zVamSAZcATbQimBaMZ9Txxo3s5hZ",
  "key14": "4nGocWybdvSYmLap1oktRYfdkEqEwxcb1UvNqQKvwZJZEfBeJ68fJ2EJMrzQJaz3uZpB24VGSid9rrfesRxCeqn",
  "key15": "41mu6J4w9RWHyF3n42TimRcwuS5wUYDaNZ4E1HtAA5ALgBN99zrrEQ15einq8NK5sPeGbzSbpXaiYgKaVniF4boK",
  "key16": "3mkjHNRd4EEQRX93gGiLZCg1pBqcJn9ZVWrsTqxgncsPswJeAssHGKy25C1iDijU1ds2Pe8zGR91vDC5G26dyvoU",
  "key17": "53EzuxHs3WPs8NRH49SE7PjubEqHJ3PT23VwcWDABjLCX2ZZXmT7Vp8ZB6sCUuVxgpouCE74ggcG4pc61a1dwekB",
  "key18": "5Mq75q942FWnt85JvQLBtQMBDYuY2e1VsymQMHCRUTgKXAvjuy1Q5aGxTABHU9DdTPrn4gLfeWz2BVxGV4qkgp8W",
  "key19": "5rfQDok6tDTrKD7Z5xXPXQusvfFeUsxumfgtVyJnwrQSXrgWWww7wDW5GFu7MasWJPaKvxoEGE5amqhQBF7wyPTS",
  "key20": "4BesZuXSXp3AwuGoRU2rbCMULgoWVA9t6xuejWSwrAyp7YEXnkTX54TpnbKhQgye6ph8ezbbVVmEJorp3e9d9Mub",
  "key21": "5j83XcFnzdTJA6wSBWUeM2aTJg7QztdL9izzWVSq8pS1ZkGYRwCyAB68q9H5cmMvH4W4mZDbUJfGeMdfeEJFEaig",
  "key22": "2tMV7kofsuGfzGaYkfvnNo77KYzmDtnKmP38WZNAbSzYXUQEY2bBej5YRg1Jtc5VMcaT775SGCjk2txP8PqjoGXC",
  "key23": "5qWkjfNF5t4dAYqBKM1f6HmyaotBnfiaQJJNVgyG3s6TKXGDuZS8esL8tSiQRWLdB9D5z2vDv1zkrbgMALWL7jLR",
  "key24": "52YhpASHxXMMxwrm2xyJ3PvpcSq2XTy3oxbxzZ7HQTGTUo819uUv9TbJm9hWDqPgKK4xAUvhp17n4nKiKH3Dg1dv",
  "key25": "5m2JEx1tzXadUSuenuCS6r1ucLDgnd6EnFNWhHANaS1Vw9hCXqXAckbxUaCdaNXjRrQEaL63UmwLKuk7M8NYQFnW",
  "key26": "4QWR7Aay12CDmjM3zTGikXSuL5Xur4y7dtV3kZEy23vtYmnLwxziE3P37actq31hZ7d2D63yHQhhZiLeXHH9Edho",
  "key27": "4kQ7rZcJfpys8pJ5PmqkFetpW6BCLMtRnhkbVnDcFX7fbRw2TYRSUuTi7XqKBkwjMgptMBMkJT11w5MPErZkBafV"
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
