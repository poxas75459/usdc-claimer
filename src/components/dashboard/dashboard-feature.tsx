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
    "23svy4pzfqwfMeJtx2oDcMXKcBLuG34G3cBXQRY2ygSogNiTBckZ3KCeYRELyNQqdsrFRN24YKU98dcdJ53p5M4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BtTBpXTQ78ccNudh3zwgBaSmwrG9ReZjWX5K1snVDCCcZzHJwACAon7yrgRybpfZiweu3HuCAL2mmT67rgmFLSp",
  "key1": "5c7Jh11EUrczAzBoSrLZBz32oUb32gZwsDHL36LLbiWMHUCiJeWoUEqL4YJT3qQtE9tq7ud2JsuaJScmMhhKkays",
  "key2": "4bwppB7ZZjWHWbwCzhrPDbC7d8BnoENVEnsQDpZ8gncB1RoiSkmzYZU6n4UfBs53f2r6YH2bL9XHmj9N3TGbqq4y",
  "key3": "rYkz4cu43s9aJuSgvFpqq5JgBR7NV4vqYLsya4hDqagS9gufFcchBbctX7jUzmCzKgkY7aEnDepdVobhy16sUCd",
  "key4": "59g9tV3eZRvpAETxkqo9pSWpXF7A2RLsbk9pombQHPBvbemsraoXK3zWpBptLyawdXCCAP1zubkdJW1gedid1mat",
  "key5": "3wpN1hvM3TcKyTReQXV8XSQ3RGg2fVtbAfTVHGRitvNH5rbebr6wLK4Vw1vfdsvRMEZXit8PdQHxzZc948GpZiGZ",
  "key6": "4WJrwddFGv1ogDZohxHQkWaG2hQvaeTcH5hEx4VujUjMbtwZMG4td3RsVPZhGS46uJSZsMzDtX3k11uCyc9YHVBL",
  "key7": "2A7LC96jMK5ZNcR7fLX1AAmWNtZ7XTWoNXu4e4PYqbpSYfQDMmWVBDP9SzpSEtZ9SJXp194HzdsKjY7myDtdLf5x",
  "key8": "8q8taNaFBcki1QtQpcckrkYcaVH8rHwaCc759PtspL3fmrNLKE1Qge7sUjrRh413RKWYh3gTdv5AwZ11uniGLXK",
  "key9": "61Wt1vEWuNLFr7SP6HohcFxVd8MJjmxaHRbbZcfh33MUVjZBuECMnBWLkSzYpDEYZVUPr5Q4NvU1ZcJGzqXQQjdZ",
  "key10": "2qLmdaikngNZ3jyvZvzy1PhPe7qkqNNN6yFUfqvoGSkxRZUQh39MAg77xTPSWgLdYdExXp3QWNbcvQzLeTho4g6F",
  "key11": "38bDBvVkG2iUR7aRo8bZTDNKDCvFgVtCPFAKvmq6cUjvoULCuL4XjRrkxhqV8Hdz4eXwpF8SydmvfEE7ZreyE3Eu",
  "key12": "2oGL4jcKshT69FqtGzg91ZGUFH1K7ZgTPvyzK1NyxXzPagcSL9oMiWHVcme6qjoAQPHn5dWSmJrgaPE4e3dY9Wa6",
  "key13": "3uh2pefNNX7XyF5n1YUvStfm3DgSejkW6Z5Zi9KZwbf2bhz1ZbRYQ7Uz9NoeHqaWNV7tLdVWb4hKrmQhD3z7VyCs",
  "key14": "3qz15oGBi6kgaP9p8Ctj2MrJceVfqPFrT3Gm5ehe6VSsDQoVKhN3Y6Vjm1Bnn7e7LDH3qGcPFxWtfe6ceJxiiDum",
  "key15": "1oc7WEiTW4o3GUVnMVZi68EcHqkwQPQr8uCeH1n8sub8tbyij34aJkhP6zj85wzbtmCPT7qAfCDarFyFEPvQ3C9",
  "key16": "5KXuMcDxbkTy9PZjkDn4EVVrNUkfaUaQmP1YZrKeE8SitnkAnqqHThyEQAHtgkPqDLTDGWUWUxFHrjCY9n6b8sYr",
  "key17": "5gJNJRdHJ7v1RuGcYUgkFjoqCed99UGSvGqJcNYg9ZnuSxZm2bjkREyK4rAB9u6WAva8fr2wuuCpcXZb77g4gJJv",
  "key18": "2Q71qEjSfdxCvdFZowrP8yhEqD9RWtmHE9TuVgJkpzyzpiZAaBeLUqrZmpq2DVtkz1pXpmfGPoAXCMRxo1P7WnhF",
  "key19": "3sL3N78YfFsdHD9AuHdHuiTFimonzrdDN5s8k67Be1rm69XriwuY8JTQmZJdjBkLndLyg3Mg8VmAov2nnbj1abyE",
  "key20": "2qwG8zpAYFqtnXEE5oUWK644V2mSWL4fmzywz6aLiUfnfNAYkZAWLUPU6CZfRbRJVtWcmiuYbSEjUnQufyRQzkk6",
  "key21": "3mrhzL6Fmz9BGJdAeYMPKF6u2f7WPqaDRoDfkXKwGMAZMAZYqh7HjyUiPxE9UCG8vozp3rvotoS415if2kucCLet",
  "key22": "5NcGcYqg2vWUgS3ouLp8uLuBS8eNcp3Nb6th4P3aZ1EUeoVBgojbDSYxcEYSvzEG5J3q5H3ZeEzRD7k8daVwGAdC",
  "key23": "ykcCLZAnL5VX7nG5KUT56nVJDCgs4RgJFGK8u2N4zpEwnCubcqTGiKphRpdkrotjvPcTP58Ye77RorqDwUaCZqa",
  "key24": "2Gxkqyzb2TXq7CqrreUfzU7vEUZtsXboen8rUUgHQYnBL5Wag2cNR78NyNXqW3rMdSsZgb7oEF13Q7eWBKzMcC8j",
  "key25": "236t6D7XGr1gzM7uoVVsYxSpM5r5CxwWS8ZurQpBaSXmuZFnTLia3wEKgujz1vTBNL56Se12cKBafQ5NWPD76NoQ",
  "key26": "2qrdDzzupqJDfq82EqiQDu9RHG4LWiBb6PdH9komekZwktZcqSBjHvS1t29qWFjHePUJNcJMXpWmh2qThwimzUUp",
  "key27": "5SLNmim25uxLPVv8Nmu1sMVm4uhNAPGjpVsqsBtsaXqdNoB3YErZEjrKr4TpnWfHtWDJnSXAQ9P6oQdS2Y9tYtNk",
  "key28": "2oK4wNZLtpJsw17Vtp5Qm2u74xTgujNkEH5r14cWd4nbzj7rhqtjix2E8nWDWhgC4RiuhiXnqNwj8t4bDmmcsX5H",
  "key29": "4djJgztjXGdAUC9nzTjbJfdZvG2Urq7pJ5x6YofronQqt1jemkG8KqDzWr6KSrNgg6o3fb7vRoBVedu7LmMbLGcP",
  "key30": "5JdygNSfbWFUX72AvgUUziUx1CzscEhshpkEdU9sNExYmQWHgfUTTu8hjnkd4Pr4QFDdZh7o7AMQb9XpcL6g1TqM",
  "key31": "vPux7hM92yeFjdxGLT99DMH5YqJ5Qy3GMLNmVQZ5PyFrAYoNufAPEuGko1zR9s9YkDBwxttvARW2j9F7hsFXC7Z",
  "key32": "5b36Df7hyCEWD3SvkWcc3ZxT4W3D5UDSy2crywDpeVtMUoX4z4onYsStAaD7EwQgNWdsTjAtDbqFhxw6GueqziUr",
  "key33": "67FiGFd7UhUfU2AAfEF4Sc8W5fuBPvVWZD6U1JVtmNCaEXqgGoHpKcgBsneDAGb4FRPt3UzRVofLTeCQfGf8fw1P"
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
