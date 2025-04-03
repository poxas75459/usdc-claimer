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
    "58htrETnheYvMNZmjPqoU5WU2ef63Z8yYUSae1UgiZAhvEPxoac5dUMLTHwy4XdLMUYEvJTnsmU6DoF951r3SViF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ebikUkaAzMf5yogaqVhxoimsS2ZPEx8nVgPMkyB92WFjgD11NifViX1nruxEsiRQW9x8rvhtCwMS94CEQQ1GLzG",
  "key1": "4rw7qU4u9zv3BV1wQV6VRoALLcF1bGVozLiwQfL7Uip79dnodUJBYx5K4K252BHTewvN8Z4waNUh5ZQhR7NhLWSh",
  "key2": "35ofHBgurmB2PApbJqaTPYvCohVepmMvSyKX1qHYjXuCgS6ffgYgzMzyBaWAXxa6ETm6mdZWyQjyRHmyV5GLvgLF",
  "key3": "5tfcekoxugsvp5XGKmzTJYw4cZDc7BAMxzLamQU7gYvJL4qbXyRwx6E53q3WZtyyYX4CXPTrdayQPE6fxP9hnNLR",
  "key4": "35tWct9TQ9bQ2XcbvYamoqpkg2yGTFGU4nFPpoPWxvV1mS8PLmU6ySHSrW6GbFFUKaSoXR6UVWUn2CggZHrbTzy",
  "key5": "4ogRRmkbrnsJqgjHaQ4viUDoAr52geiXKq7e4DmyVcgagDpdbAw8UgK83pGuqTnww34sFK5u2m4Gup4EX19EM8F8",
  "key6": "3H7t4u8zyqJPWAjGkWmLyPLJfFH8WtiS64V11ZgeBFkG1TXyfVVyvgQRChdyd7NaP83ETdntU8i3ZQ9xoUVip3V3",
  "key7": "4KPsKGYQ51MXyfoJ7ccH1WCHYrtZcFcK1kfQ32pqFyZW5JiYnwiQVBtz53jxoSDcKZ7HvzhqgJfBHmCw9CRKFN1Q",
  "key8": "ERZ2D7EhsJEJWtgHG5FGpzQyU5cimtwpCs5UfZrugmtLX5nq6ewf2QfyhyQkty5cpe3ucYL5D3eGykxkxs7EoFC",
  "key9": "5qAKUNjxpveWofQgw3NqL4rZtVJb7QExx1DGgCumdjgjbDFKAZDicpe3nBYWmKUoycpbZjMQVeQxj3vdcdAKPn31",
  "key10": "3QR3cGXpSNmV7bAG1tm4o7eJSfWuGUpnqNyFth9LHFyTNXTVFXGD16mZfXdKkYv4PKiz5AQNezDcyJ4W8WcPutVE",
  "key11": "D7cCdvmZRkuSHd2vR43nqXgBZuCxSLt38UVAajiy2Ld3tQdkVLNKkxC8S9tSHCFSD8xsvrGL8GThge1bBd6TN5n",
  "key12": "5yRNjfzC8KLcdwuLAihN7DUdVqPksdSjgBTP5XCNj8yWpgJYY93TbeF3pSD8HgHfgcEd5bPtKbC5deP7jvSsgg2P",
  "key13": "4EV1WZTdoGkujJK2CznvRscnBc64Rk55vbXoi3NEhHQtpSitPVUJPwK4jAXxvi3tcfNEN1dcbBRuhZsoNsDdi64M",
  "key14": "5HfnFxysT7DWeKGzdkxPfd9JVLSzGnVw5r19UrAMZnrfrMdLTcuP2uDvGYBNGWbGZaGR8rmsp6yQ5qwM8Yb8nNzg",
  "key15": "2t8nEznzexwHVW6ojQKe1ioBthKdH5FpXyusDFtEPLKdL7VHB8Q1RkU6PdKWVVXcjCFUfRp2nrzXgaWLwLJ7ctg5",
  "key16": "22fEXcBCWzdZsRe1HsRVND6uUomzFtpn8mNrkAN37vvZRNuNoRqVGRb5jY9USQLUvN4APGk2D6hn1QWr9pETiy3D",
  "key17": "2gnsfit8cKStmmouBdhCZ3sYPEvTJyGzoTCykUbDrigtP3RzmwZeedfAyompnTLe3K2dEg7sBTNZ8AnPxRmnvEEy",
  "key18": "5kAahHtUjPjPGYqe4Q26ib6TPfP7nYMU5sYyZspHXKs7qwyoM4EmqL9jvrXToMKfxBYK4yDevCQmKQa7iSTnniKe",
  "key19": "2WsEHfxq2twX9P1sJkK2Y9XQ3K6b8T47W2yGoG49kGjSBApxpA6zTaJa8SraZrxH5PNAXGp6ZeTPjbFpLfECtEvR",
  "key20": "fKoKwthnyENb6m9QNuF75fD2hjbNQPDJboF1eeDXLX5uDUvZCJQNLzgjijYwzFhDDsU8P8ittWtHBzsAGngZiXU",
  "key21": "8QzPYQvizcCGFScQW8oU8RGkDDMePzBBm2rFRU8rHfsGTeWGy35dXek5Sj9nWsRekf8gUtBNmQJ9Siqn9ES6xt9",
  "key22": "5i1XEJuQAhAujhppx6kHXdJYDonPNCivRXtMe6iTfAcXoi839XnVrZqZAh1TBQRbg9u7CDpKE8oRbYXhqzXZuuHi",
  "key23": "5PsH5Q4VjKaWeoDGeZiHHDmNK2mrHYPhFV3jwzMBSqAaY2ownYnpGmd96VnmdWzT7FnUMpxRZxRLNQ6d8jkBeiZx",
  "key24": "3EaKeWa83TPEsm3RSnmvVnkij4af1P2aGgqEEGtCaDyg62uTPHq1T9TsCYtxSAWNH6f77kTmY8pPAAwmBGDmMAzB",
  "key25": "3EzNQGxG9n8RdmLEpor9sqoYVErewgHEg5sx81xjC2G4pKa9bLEydqo1abnZ2h42iM7FGgsLEpmTZd3qLyzdmjwN",
  "key26": "4n9d3EEj3LLQ3PneMNKxphoAWrahQRnhbNnTde6NuSyCPEdbDQcZ2oA8KEMH4T99YusbLJ8PuKiioyJ7w1PsbrUM",
  "key27": "hE1rZKKF6BrPDj1vXJaJWy1kXbhdZjgALWPiAC487wbhA1NgfyUKMx2CTkLoueXfCdTYhVhjqz2ESRxxVmwxW5F",
  "key28": "MmNepFHmMVS7Xp32Sr8o5oLuZgVcsrfrHAi1PyvN3LadanWC9Dv2uLh9AJsfwQAfHjHLPD9hEuY5qAWbVW6KdXn",
  "key29": "5zcsrot6zf59QKBEVdaHHBa1WQBYmbyVRuj81NhvW3nyMQD7YJoUmUfkuK2k3iHVT8vTC9GWwh3baqyu2x4ErgKj",
  "key30": "NMusucQQPsPBMsWmjxXhxaccS28Txv879aYMaZP2uU3nzmzN3NBRzP5Js5B2ShLN22RXie1VAWqSYp91nXsN4xS",
  "key31": "48JrGJT9LMF7XshL79RfEY9HHqqCxwKbKf19KMySc88mU67RTF9hACFkJ72QdAKgJMu5RPDn6HxX5tazNK5qwkgq",
  "key32": "3CDytwrDEpYNWZtanM6fhf9E4g9D5T8Gt5o5He7DSiwU8qr6jNTxHcU5cb7Y1piCZKYdqJUL5BA4gm6igtryiDBY",
  "key33": "4K8JyzDWs5HMNJT3bSFzryCJxdjssieEcR8STDdmGKH4bDa94b4GdMyDoCx1NTMUeSRgypwJjd88uJSLqYwZDqck",
  "key34": "54V2BBmQoU5jfd4G7ycSiGdm3j557Fr4jMFdBWGNppFUPPqHHghRAj3RjNMicW3oboPc5ekHTAXUdi6EzjMDfbLB",
  "key35": "5kJreTLRmTVRqfXf8xeH6r4PRNWumLPXAAorC99spv3pCQ53HTi4F8AgPUWPnsWJ6GnCfTcsodjxXv2ohZYiW8Ey",
  "key36": "5mubXSAwe6UNg3NSkFE4baR5AfXuzsKsiDdobYdudM1KbkKzRYAe3vXShkYaMdtN2qynzA2qDFR4ShxWnUym4C6J",
  "key37": "kqqEin3GfgAWWruNo5diQ1wGiantMe4HT6hC3E1VVdxzjDEvzXVNczMkgwH6kG4KWMxUcczdUH1qeFN7eza6Myq"
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
