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
    "5MDekr741C1Ci5rWi7sUbBicTigzaB8vyYpDGoDQV2wWjwSkDVF9ve6NC9wHwSQz9s24pEkAgpwPa3b1MNZ861Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMTMuNsTK6mJGYcWacwT4YQkAwfpYwS1hHFMv59zFtMyj4NgACCBgoGy46UCaxHFZmvNE29AWPb7vdKFZRcqGDX",
  "key1": "3Ftc8EABGVWk1PnbBXVv9tkPRVDY71Ze9bXhZQUfoD854Ctx35vNX9AJZTwGUxDRSNxs69gG5h5dM7Dxq5q8JS9g",
  "key2": "2563cH6ZHeXsEXENXv51GQmLNDNR5CCTFDBPy5yhG8UGH5vLE3axnMm3YWyDqMSpMagEVmJcohrhFHP7qP1qwwL8",
  "key3": "LQDHpQksZoArgjzzu3mGcccHGm5ZLnpkfdXeZN13fx9UGoXKwYj6NYjiawkvxVQQ1o4jd61yiJWvVA2LC5QqnRB",
  "key4": "31GAH6S7VhFQZpyepe6aN4oqFbNEdC2zXtSoYZnSXdr6W3LZjcsYXrrpE9AqYHnKZ5RttzpY99qUVPY1RLJjqGSz",
  "key5": "4gxBBRKtK3H3cEsm1qU5VzPx8TZRWN25SA1evM92pPM7QBgwEEKqfDswDWvGs5gcWRKgo669TJoAMRQ2KMSqWp1G",
  "key6": "41Wd6hFQBtR9KGLJTEgDy1d8bSXeHyG7qSGa1Aj1PSs46f3iziWu5mULxwhv4UP7c9sFC8F5PaDsgERgQMS3vwk3",
  "key7": "3evFMwkL4YN2fRpyaLdFmyCwoCfBXg2R24EkJ7g4jjLbVpMwRbF4dczKUmM9DRSznwXA1JtRQwj424qcg1H16kxN",
  "key8": "4jfwfKDZZmrqZNSAbCDsr7JoRVssUqpGghSAQ4i735hwiDcMruWbQzTxsTC4RCMg3Yw6cSj6gckWGLY3yEx8KtSq",
  "key9": "7XtLxb9RTSZ6Z3GsAYPg8LkvdaMA6ebppGJTQ2Xc9rf9m2UUvZWXfpxPnaE9d58wnpwGMhHofqLsQFznQTFxFZN",
  "key10": "64rjG8zYv9HLP8xoE2B9NG4UsHAkppQKh2RuDECN2vLSTMXgEsmDshtwRQAs8wDiavVoyRSsHhBVJtJxYMaLNFf2",
  "key11": "2wZypfK5fTcfERD2C9PAC7FeN4Kxa1ucqi5zvNVFJyQJmjyLrGwJRYtE5Jg1T3f6avie8S7u2oP28KwNXRH9X9di",
  "key12": "4DYgWy9SPyNSWjf2j7irf7KZndnFbWQnqZZvB4GjTf3FmFej5oahU1k9mqXg7YL6eTLG9ktwzemJ6CNruN18RbS5",
  "key13": "C49sNdMntUfKuXRy9vx4Z38j6c1mncFFkh2rAXrQthof4Dos67CTE88C1uSGbXmwbVYt8Rkoeu14hmbRenEQ6WU",
  "key14": "65Sk4x428dfh6VodPrbDZCMWYqiSqhwutfxoLqofQEULJZ1wUFbAwp9gQExuHHhCRYcP8DoBYJWN4MPqwdksJyP2",
  "key15": "4zZoQqEnYGufMQquzg36XZsDNKnsVGotPU1rMtZ6Z8BFerPimArv2pYmuwKxhvr2quZzgvXEBBjzLStaYz2dERU3",
  "key16": "23bG2qjymgrBEmkbgaxqmHwoJoqtC2kPXr3iA8X1KCaoT3An4i3a7dCzZYDMoAMnfzL738sraiyfbJHjbNXAyovR",
  "key17": "62eSPu2TaxczUsNdtHfKAS7QPBtMyXRLLmMWyxiCnuNqbqLgWexSiztvYTJAEeAh4cW5m8mdPp48ThpMqXvsfJoe",
  "key18": "3bSgi2oc3qTf6PvAAuasPDbUrfAunNQpr4e7vdVL9fG9Jka49wbVzp9cXcoUr8T2Rf5HARUrcWVKAWEaw1eFJS9r",
  "key19": "4udUooDKXzmzi1K4XZJCUfvHKUhZYJzosQikNhLSB7oZeN1fWodsA6zLUZAbQSEFncqLcPjTyHbNUSTMucvvokwy",
  "key20": "4GBwu7tyJSi4S2qQdku3vwEVByDMtjNgooSTn4Pu6mevMByuRYDiyi4aW9qxNS72WX3LPp8WZVoeYxd7CzqaNwPN",
  "key21": "4koibShee35ED92iDv7JxPxpmFvRkWk3UT7ChtcYhih53wEkv8ujWcci6zGXMgFmYLpyCzPFjcDnrF9GzMQNw8hN",
  "key22": "56TmajZapd8Q7HUPVP6oSswhxfDFFSaByXgzL1VUsFZvX9UHcPrKGUwWhrtjpA8gdBvcN2Ude82djFUZsspbgHCC",
  "key23": "4mXo1A7kp7e3kmRLLRmUHtsco9wS5yn61q3vHwphuXpTFSGLqwAZSKNp6bTk6JTs2j4MBpkjsfG2S9tzHFAHYMe2",
  "key24": "X1hBFb2hcMFDJhbWtXtUgD76B7PHL28wDSqZw1bHgMjkTYVrR8dnwGeTUs2B1omG1S7RvvKLXKoBUK7tbdyunvc",
  "key25": "2cmFSWhpMvVGnYWiabuKfb42yX5RDSKnvM9TyTJ1fJ96CvweEqpJLscYwUpt4XLaVMxCteMXr6KEBLPFmVLpkRGg",
  "key26": "3ac4hGoZdLrqK2nXtNVfD5vRqTqv7JfYdQXemC6f1pckKsvFvqotEMJwieGLPdCLzPndtZ3Z3adoH2N5qx1HR6A",
  "key27": "heeuCSwqrnhqXKsGNmv2XzjQiJUSWUPy5PHvrrVqMQfgUEGzDHsa3CmmEC3TsraoCHTw5spqgVNUirLCkKrNZ9D",
  "key28": "Bf66u8SFgVC74f51N3mCCDzSvZnHQCPXuS2RXse2eVGmdtNBPqnqEieuspvgBrG3x8pVj1BCjTgQeBT3z334EyU",
  "key29": "2fsU3HF42QUfznQTXZHhhnbFsp8yuiAE9DHVhrF2pP5QMG5dAof9y1LsXcAM1WP2N39cqqKfrVT4EB5JcJ5M1QPA",
  "key30": "4MtL8kkBmqF7Jt8E8aqHXcZaNWiCNgpb3xMXj7WNUas2LE18skc24FBEfiSH9CXaGqMaA8ENtaoWmsJdDmSqvgco",
  "key31": "aRva5owBVUxWB7t7u3w3zkZzk4QjwpYF7BEPMP8E66qAXQDBsNxpXCGEzevHGphPbpVb4KBZeNTHsVULvCjvmXn",
  "key32": "cPfL4ACWiehJEfsksquGnwe23bN1XPuGo5Sa4wvL3MsE1XLeZ22oE17aPaYcH57YeTpQjfqPNVv4kCV9VCU4xfr",
  "key33": "XGsojpG8TJZYxu4WrhsfUZ7AZyFv3ai4WxejgVwEhVbAFp1G9s1ScR5UpGPE96HAWKn3B4Erqux12vA6N7T5GBf",
  "key34": "31VYSHLT3rtiJqGZ6cppaaJ8fJQW6E1wdBZePJMU3y9GfVaUaZhFMwjrkeSWs74EmqTuqUgAuzsAmnHscFcsW7m4",
  "key35": "478mE7fCSJgjKL3yrYHyLiXVQX1enG4v8zv8CshG5jCdrHcZEHF9V1tgCWvyaDinNZukWrzS8xxroqCAqTg2QLpL"
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
