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
    "bj6TNor3EF6zPQHFpgVGLaCfjBbF6hJRR89kSLx2EuxYs2sy9p9h7jRgzGzS9gfkH6TUNBNyFg46v88zhxtMz7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57U4LZpJeBR4c5pd61YTjh9YNnk1BoM6AnUveFs4UsLrygsHWDqq6zwtFTfkGXgDJr4SA4e2NHX8kyWdTeZcSxRc",
  "key1": "2amP79SVWgYE5jo9gm8QS4K8uJYkLy9CmXyFT5BZhURB34fwJ6hLb4DfJdaLz9xo6pMzZW88GeEi3JFY2F3CamxY",
  "key2": "57GTe427TMZVjSfTUGjyFa1JFakXmpw3XuYwK269syutTHcbjb2HmPSshvYnhaijL9Arxym3qYcs9Gk334jseZnj",
  "key3": "56e5JFjiTcrDWeryAVTphe9h6JrvzgxxMxsN2soW55ri4YE7A85d1GXpeXvQXiezrrU3PeSxBpa9hSnQkDMrz8pc",
  "key4": "4CpdiiAuCouxGp6gk4SUz134fq8UH2tQtWGceD4a8GKav3Mydpon7UjAqEnX1hPZF34jkK1wTb4SnUmDcLMjewvZ",
  "key5": "py9S85uZH6881BXGdjpPr8TyLTu189K3QgFZCGgjhWGPxNRdUhLdffNXq2oL2GD5b7rfGPryyGsZMapTYpSMkZo",
  "key6": "5sLyCJefk2oTw1Y1HSjSVGt1LUbGrX3rUBHGgmRaozHQFYRZQ2SZv4vTTSGxPCFvX54zCLnL8ALaLEzoJuSfJuJw",
  "key7": "5Ldow8hAKvnfGZV9GZzcbDJqP889TRuFRrKzWj8skDB5fqJRkmWHt8Bcq1f2QKhC573dPiVfNqT2jfUjfPaCGgns",
  "key8": "3J7X9HahUW1x4z5QWpdjiKcvyXwBduGcZKEiQW6RQuZtP8ogvu9p5aYtoB2AQstzpbgXgoMUchtgzdEqbfWVKh6W",
  "key9": "66zdAH39wX6nQrAweFdJkU7bP1Mt4hFRdmKvUPD1zNhAww5MuP7W33AJTiwqPPK7mz7UdA55HywE4oJfhoJZdYv1",
  "key10": "4LT8U33D8D2vy2KSNwG6bZfpjCoan3xWmtFtuXQX2S5db8pDPw2QTucCkYZkzZeFWfHvtKFQRjTaEierj216Dn1Z",
  "key11": "448oTt8dmoVGEJtxDaT6Qk8SdNMNaiiR6DobzAWhMsyqHm2Byt1UxbcFY1XaqisenzvXBJQYA8TQiHdMd9kq1owf",
  "key12": "3iaWAKMZjvd83tz8wvzdP9H7KDfSvPXaWuwJzDtyiEjQ2SRn7bjeU4QbBzqmUzeD16CnWa9Q8zSvTfVoFfAmdxo6",
  "key13": "4srBvNMFYro8WFnkVZ215koFesLrN4Z31r5TJUpJmH4qwXMJvDo3MTFTqH7saN6ogTNg9AxiTR2pKsaQXE4TViv5",
  "key14": "2mJMMbUQip2CXv32EfifVCAw2mbCQQACYabYEevCzt8BNE8qXTPtsVWm84kscqsMoUZaxErsZve3sPeZEqBKBUYx",
  "key15": "3aJKfYx9gs75ecJK9MkonicRUfCKKNDwJdEYrwDUL1iFSgLizYx4vWVBDzEvqdUNanbBeLQgn54DMTshd6KDAWdM",
  "key16": "3oZZcpWDEiQXCZYC8n5F6aYaQNUgNmy9gHCZjNMMVsAXmHGt3oTJVk5TLt7av3b8gHAt2tVpKmwxrTojurQqARZc",
  "key17": "265Q8d3CSEQhuCuTBLFjYNQEfy2FhFUeAFG6L418biTqyyAdAeqwL9S73qpUEETR9igrk4GY91oMdh5C8UwqrSTb",
  "key18": "TDVvnagn2jsQfagBnw2s32wRxN4Qh4Ay5PAwh3DfkYh7tub1vwffzUxoesGDpA8tZXMdVg3PFQiWq397rKGqpsk",
  "key19": "5zkkW1CmxvFW5EwEnNhEWjD6Ta9KoJzdA6pRekKahk2xZsoaxXHZvyJApxt4qAVZw9Ss1sHSsahuUyJaEh4AKtqj",
  "key20": "5AjGz3D75DDGwep2raCf9oZGDPd3KWVpkNWgjfoqvRMbHKsTLxJLPAZesfpwJE3WeVZuPLkAg7XTCFJCoAkoWXZF",
  "key21": "1FzJTjvtw6R2gzQgHPyHwZXBjCqcAoCJHkE3egpCSE5DkfkKGPqViBBRHfYPhF7qWmLvaYgFiqFnkwMPGCYWWSw",
  "key22": "46z5WuzCwehSsQ7fbvALPqdVQCc1guEAHCA82PLncTJEMFnn2QQcjkf8HtSypBPmTEhpYhun8b1uuMuaxNoLr6uG",
  "key23": "4s4UDozzn3Qp1TCUTEGb7LfhAoniW6uwttsb3KAUmKtWfQeyN9NVUmnZa24rPsy7hXp1y6d7NRb5aWwfFmfZpart",
  "key24": "5WMFtHYUQXbuidERf6L33i9qPrB9PdvtXTXEzjd9ZVZRHX35TyJcgNbV6mN1vpFJsxmHnvmARzhH4YwUqasZqqer",
  "key25": "4ibw9dPfg6zYeHMdzz9Y9saohxr5JvKYwREEzBRxGdYDAGomiGwguFkn8W4Kp5X1FeJfiUq3jMKov8Ko7fXisD3y",
  "key26": "2F7Eq54SrkToF1T8KU9K9A7FifwyCxvSny3aeC5dKwnQBBL7bA1Mi6maJ5R13GRCCem4BjR6WwXnMvzdD632CGep",
  "key27": "g9fyYRbFpVaPtbv7swQahcnyr49a7vAsNEuEL7DPVUg5LAPSz94rcUTqixcnNAxUDxuyCMnxJSZWYwABPF6E29J",
  "key28": "2UEvHFtNfVYbKJtQSj9Ri14Kpu3YTAQhhbGb9UCQvtMdbmjURdYUoYzg9XZQTr3H6888VEyTVg5CEADVcqkqSPx8",
  "key29": "65q4pEAiUxCa2cBmRdCxQkYpjbUhzrd4Le1hY7meoGEYmR2kSj8jZpU7oGUvtCZEoYLzDg5wbqskehesg4NCyCtm",
  "key30": "3btS1sfMG5yaLjNXEEAXT6wQ9UUaCiCcERgfH8ub6k4vaBRkv5ukdELZoXiJjdxfFnkpmZCWdgwTyEeA7kkhxjne",
  "key31": "5imdTuhtKwZcR3uEDbSawZiZCjxAwLENstXo8xF28Ds61S8mujMmfHL6HpGULxiyUqPKCtGPr4cEdKU61paZ9SiU",
  "key32": "2Y1irw7aTT9JNSn9cqoN6A8sp4Vr5XZv2XQnng9fNmFy1ybJ9oebzaoeHm74VaHjaEZhoCw8JqG64rvfMEQQj6rb",
  "key33": "5X5rB9GmZY2HAFrgBXmuqLJXiLVREJUuZj7nEqvJBaWzYaQH6yjK8rsZM8zNZB3yyb6NBggKGcX1Rh1VTVBdhafu",
  "key34": "pZa6YmczSwqDAZj6YfpyRptd5EG2gjWvwrzhqyNPqFYqtDShyWou8ptZ5tqLWZyqXQb1jVkQB6En3CUb8xfR5zY",
  "key35": "5X4Tc1BPA6Qg4TJzKJQP8RcWLvcQVSPjwW9TLzEbFs6vDAb89EeNLpSP9DVWzh6j95rbatDWbUYdu28uZ1gzPpVN",
  "key36": "27HRuQyV4v52q2Y6EgLQBEdHJb549afsR9sH4CUH1txQ1RipNphxVHRbU4wTJwaxLMa48dd8SMBEHsXGNtTMsriF",
  "key37": "29tLucDQKUDWVFWvtBCyiLYP2XE6amsNBDUkrerxb9BNEbyNDEv6qmQd9pkEgfFmBDa6ur9aRhphEXbbrrBAJTLR",
  "key38": "SKnm9jcqzEyLB233Rh5GLji7t3sN6b4LN9oSpJ7axT6gPXVyivgfW3PxgMEDUYdLHqSSz9jVPmd5BNpm2BkfHcQ"
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
