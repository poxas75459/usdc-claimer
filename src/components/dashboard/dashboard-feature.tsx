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
    "2v9cc4ZBAJwdgAxw8ojnvvUFHi7YQVdDi11VpGbe1M5aub8eG9LePEeaNSsXwS6gv84f91UVnHSSJYgXBAm6q3FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YdQRXo8mjRnWUHjMoBZGy11JeVMpmi9PJGhvSViP95P1WnC3zrQooLXcXeKqJXdt13r2FSeM1faeryskF2BAquT",
  "key1": "2mMGc5QF5FRxj5DsANUSZj24XsmT4rZ3SDU9RoQQaF1p8DkkRZfmqfyRbmvCFE1n87B1jkWxbJMCQduNRrTzAeeg",
  "key2": "pw54BMyWQLgRBQtHyDvDNVeQ7f68GXB3jXE6zXyufUBpi4nMaEotfyL7Bc6mEZLLDLrrNRuGooCGGe7n5uixVmM",
  "key3": "4E61wtrMW9wHLdjaerCjJTek6BbpEmZAfH2FEJ8NZxQYHjXE9rab5xtxgu4thKTPCX8mEo3xx1FjXVyAzHK7Xkeu",
  "key4": "esmTJh5pPVqHs2G3QPgLUxTeQQZ4rBdkcwhGTRC3CYLfJzoKpk7AHS86G6DLx8ymGvfhtRC15fpMh7io5FQxWHA",
  "key5": "35ccPH8TBtHa7fhqPrvaNPqf6N1EebbjveUmFfRn9MrZ4fPGScsdKquoSPPNJTDQXWkk86M1TdbaJt5BoGHqLAcQ",
  "key6": "5QeKkEHuEk5ydmV8DPdPCtTgZicqCytqAAowAAFGy3B7WCytewtRrZAnV75jm6XdkaQ54ae2mTSw82f7WBbSKuX1",
  "key7": "5P1wtQAyB9gejV2UwxnynZBg7Gb1K8RB45Yk6AyfQv6BgvezBwy5dqrBs2RnB61L7EGVB9J33MGXVEut9N9wyukz",
  "key8": "3mrEaZgQZxNR2iuVYAHkzG7SkSRZTFrCtzKgC6F3ShTYMYwSqn366Ber2Z24gQSaHdoBiudRpFftgNYJJLVzSxgw",
  "key9": "4wYsUH6BZpi9mV4kwtXXy5QwLvVgXbETpoFftdMFWNoDWu4in2dev3DUgEnsugXkA9WBQb1M1vSuHFHnuKmCnWjP",
  "key10": "5jFBCjYeKZjU2cer2WwhRA5tnpMpasGmim25MpjjcW4tmqv9p5JdYdep2erXoZmeUso3KQMpR448dF939BWjTEEN",
  "key11": "cMbceE6Cf57UNsW4GKKp5HkB1qY5moGQy7jfQH469wWr8ge9AJQ1eDiTQcHdJSKCpcZzsWwwnLrN7UV4cxosEvy",
  "key12": "2SzHTNwsFWVBbki6UjAyoyzHYo9rLDKbJNGUny6EyMNaREQk4BQtRneR3PqWPPoj8J35smrcnZYHmowyxDbxePMh",
  "key13": "4wKWQGw8xfKgYzMgw33e1XCJudchduxBeYGgZPF8QN2w3t2Mnhj911dji9buWaVTz4drVPVT1US3VBa9rd4uFK8e",
  "key14": "4SfkEUkN1ZsAC62MhrSdWdeJHs2reTqgW8B6v8DwNDtdCwMjVYd97vG7N77QpnS99aM9K7MgQiM4NMz7236kDhQH",
  "key15": "3T6wqe3M6kwvdQ6uWXQFEsM9fEZsh8ahkV7Z8vArL29pdqWd2RdM1v1zBGwmCopCVtbUwdokaGwEtJN2Gbbo1ur6",
  "key16": "43H3Vo4qDJKYN294jJzbViDXAS7ZNu5NP8dAgZcv9XDuq6rwxvcjduzWoes4G7TgJuXYX52R1Mqd6p36kpmc66wo",
  "key17": "3P5GkquaELvHH1xy4UdjLc5hwvdJHvEYMST17xXRQdLJXUX2XtAqy31PUAkJdmx1GQbwjQreHG6bSCYkoijRfjaa",
  "key18": "2SMUNbihs5S1Wer14kVmyZjFYk4VEBuogU5ZpgGUTAk1e8xrcQ6RbHXGmw75ky3w2CHcAHKxoWme5JC4wAvdzKnC",
  "key19": "51vhUyV8YGkYwypPH7hzdiCVXesP6yR2MfTKAXVWte6URekkrkVx9wx8YXbHiRnChAToG64YApSunWjtTWrVwm1T",
  "key20": "pSEPJmj5o4f3Kh7JBLtdoGKMdKgTRtT14BSPn3aaMJvUw91Ae27HLjUwXazFqwEp3AX9pCd3hVhGhd83mhWZ3vJ",
  "key21": "58ERT8ni5m6MDVDbXMJGnnLn9fDBXhHDvYdo6TXt8o5T1cSJhwxFnodMx5zj81T5A5qxhLNjMDUrzywYhzNH8rts",
  "key22": "3AZKpzufx9VMq99b9JcNG8hEervQ11RqCStx64ZQsLBZ8vmSHGBoeyLbUSFpzQPR6dHGW7tZ6VDcAsFL7K5QVEjq",
  "key23": "521koPY1Pqs4bm8cBgLTCkuoaD7iGRLpVgi1pGZromecffDz8si4sWscztfLqZMFHE7Vgee6rPXtroX5noaKA4wg",
  "key24": "RX23gRFeWMrkhZsqweKSMw4HfT2E3qUbco9oBHYFGWJp438JHYjuCEqihdUrZnrPVDHvpffvfDGGnFfqv4o1Mou",
  "key25": "5dW5Fc4cYRN2LjQWvrCXcDiYVyc5jyvL4dDbsAUm9SdVBB6jk1jENB2AbiHYt6tksVrDLiSQASaoK8QM4st5YXnD",
  "key26": "5Sr2CfYnnTofWzfsayVB1VmD292LWhvXDuW67kb9ZAJHBnJhKNrwfa7nk7uMTWXD9ET66DFvqW9fr8ztinpb9TiP"
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
