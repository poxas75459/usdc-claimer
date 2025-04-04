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
    "5m7LSFCDxo9kuHWbipa5jcV1xGQjejgsNK6WKgY9JyxvkBb8vhqkbwx9udFVF6MKtJtJErfYdsoaz6fDFRcxHWTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4favWYS9WePmFYXK7Vzxydyq2ShfJXqWQetNxrFNMsFLhP6zuCPeijGDfABgcS3G4mMtnYiMJjuMjNCpdjfATnXc",
  "key1": "55DqJpFyorhUDxKvcUkpTVkmseJWAQ1hyuWLQNjnCrqM8oXizzLY75hmq1NU9jH51mbmMSUog3sUsKVEeAAmmm1M",
  "key2": "2B6HQiZ8HoiCYZoeu3xsDbq8qrTa61Gee7if5eqbxPGFUnYYHvTcgbRkkFKT6RUqSaTs4VFKsq37akjwQcynXFDg",
  "key3": "29Ex5FiMUgSfLZ6pbUkKen2DeYvwCMZ6qNffM5fDYkpLgv39rUri4nuWjHj635WgMsnXKr9Pf8abHpUqrekSyKDv",
  "key4": "ZAxJghoS1g3rD3mLwUKksTt2z8aarKbLopqSi6PwUTamoUMnBMuNf7s94htHagRs7XMNdfen8Syy75e1omCdfVh",
  "key5": "3TXiMJHpX5aANCbjD8PVquCyNLAkY64DsQ1zvqLukfTBKLE6taH9phe2LXFDGMv33f6a8qnAAxocPKo19pUrFQ5N",
  "key6": "2URopW8NHoa5vqd6L3w3LhMLBr8rKBp1h4MegAH5D8MUkFBEBqryK6dX31i5aBeuwJMc1oWfsXwmKbzJHKbA4Aa4",
  "key7": "taGvgfmF5UfDGC6mAfCQfKTFCFc9Zw21D3hpwRbBShU75tJ1ybLBicE4ug9jTfM9dKQQECwHyZKMDE9Vd5QG4pt",
  "key8": "4sHteQPggT6YGa5qnTgqcbbTYmJzG1MtNFoUC7T4zdczZvpFitKYUQ9YEBaL6jXVKvSYunvsx52U7vZPAZQh2S5S",
  "key9": "PLNMbo1LUAYU8uZ3bm3gCJgBd4PpCGNTsEbizPwn1k96wRNxRjyeQWZX92wuGsTHfTkzCqQU8a6ypBV91KiNxKr",
  "key10": "7LV4ybSJXA14GLL2AkUB8vU4Lje54HUtaKcT1MhQojqRuS2dTTy4UcCQmp5StYPsUYmNSPLrawfzk2TT71ghbcn",
  "key11": "1iKR5ENUEkVPkWm9QMeqg3dTB6HcFzgN68T2Mo9dPagNfQ8QMQ1Gqk2SsniXu9xhQ4YuhaZ1bcExadjNoBhGt6",
  "key12": "61T1SemjbjQCEAVpsDAR7ypTVBWhtmx5YdqNUpTxiM6RX3a63FD4tHghMK8sC2Z8zugdyRAzXLrDztLSBgxwVNtw",
  "key13": "4epfGTCxPiZTmFqV41fpLod67qpEoeHBf9HmFxBxE5J9faMevfAAiqJmKLWe6JHjz3uRMbQX82auo7YuNTMWzLm8",
  "key14": "41YpKtivaF9dbC6aerhZMBTDKeAtGMakMxQkmGDQhF4ye95si2qWhERkPZQGx3q4DW1TaAtfUNHsdY3qRWwTQJoB",
  "key15": "4uG1gLcdHYPVM8TX79p9hVZJVdxUJcpNAt7Sqhx9ib43XgK1tGFD5gaCw6CLftPDfRp8qXXNDWcoWAcscdEWoK9V",
  "key16": "5NpofhJztMn1CSLbAr5P4e4V1t8c7PkG4LWmBoMTcB9B1mdf9LxYjvVpFdrEufiY1h1YhGCkuX5vATMkBgj9ZP9y",
  "key17": "2YwogLhuMjnWUD2drumzTouTK6nsDJKzWoRiecJ5Dg5cMXHePKD1v7Y4mK46QVPSot8MxcLUrWgMVgtb8jSW52ng",
  "key18": "BMNskdwoWUUnzCzh3sgx8K1KPcoibxTEi3jL66Lwx2Lmmam3VRfEkuWcD9qYfvDs4Dng6Q9sL9U4sXJJqQTz7Jn",
  "key19": "4qqLSmEN9yofz3dVNGGF9vQHNCiVSofTHqiWmCtBLcRQWwJqaNcLiF3yEDtmQPoRWxTkNxwRQA4Sk547XLRH8vDk",
  "key20": "2dyj53n5xHDA9x6k9x16bibn6ngwyZqPnZN8RXvJJVcyNwUfS9w2cNg7tMFyvNL3NtBrmX4ySbuaoDDRdKFo6iUv",
  "key21": "4WvkbYXrfVqQzkB7m42a7LEZrxx1mX2S4peJxCLsyded4FuV8ZPniQwNphZHgSebvGLFUMDDvbcxgRYY4DvbJfRi",
  "key22": "65jXKKU2k88Yp17U1bvzEEeRaiNmNcCJc1jvGCSLzYpVedyykdVcQs44FtD8cERaW4oh9dWHwqyep6XW5wbSP4wk",
  "key23": "2XjNPq7Ybt8qxiBcZ1V3mLsjvT7C4gLz6PPTqajnZYaz2ViUtyTpiXGWpb49yTvec9y4E5QXCnoxQBbvath12iuf",
  "key24": "jyFMwhCLmZj3iJTGgu4wLq9xVdd9v649C6qVnVVBFknZAzkwCEJdWnKhYCm2JWjCDGMMqjXgfANTyEebxWipT1Z",
  "key25": "5NXAC9ReiHLi9X1zQbDPjc1edeGD53uJHzNC62bRik651ZEqmYLZYTpgsRw2h1EDxzp75ALnFAyeKnXW3WJbUePp",
  "key26": "JBysZFjuNAXQ3tTf4GGSuveofewYNwuys2Dfe88g2MsTBhWLydVQCfzcx3deAgpZVTFQuH9EJdo1i7fkRgxKVV5",
  "key27": "jNpdixGjnoh4qnuPYrVc2CdRxe3GW8sC2tRHBdiVTo3KpZtfqq7cNgYhQ7jEFUXQcgrwGyFsN71WBYBj5q92W8m"
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
