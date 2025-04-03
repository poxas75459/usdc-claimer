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
    "2rabyYVxZUcjp5M3bdysiJa5D3yQxB2G8xLFvcLdUQFyMu7f88Sa8RT8EUD72Jn98E83xpgjus1DfzTD1gMq8iDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FftWeHRVH27DoqtVRGnTkgm86fNajCLNiyzsetyNLpnuEPphyUF81STiSLvtV9AjtCZUtdTUb16jdZt1CEV49oM",
  "key1": "2vQB6hCR1ZP7T9mif8eMADskGKhBb7FAVgxyAj1PGVEEt94fEXScikCTyRrkGgu3qx4yPSAXiPwUdLf75sEELxDe",
  "key2": "41sNs3C2CmFAUiRySTJy5RqvDRfJ6UReXtdPwC8irvArQuCHRGSe2KZvm9iWupbMa4akEDgtkeMob6r27XebuWiX",
  "key3": "tJe98atJLqqghBvtLrGLtM2eoyxCYKQKmEyyYY27Whh2WZKNzA87BW5rMZApZuLFSqz9gKgsXrDmZHGwFXAb5vr",
  "key4": "2qYAacKxTc9DdhRd9LW6HKgxQPAxYaXeJjUA5HN8iA658xLpa6aWMkcG1JxUfdoiYiu1E2wQ39jgRxg9bBZoKjP8",
  "key5": "4mfzFgC6m45V7K63XsssYAZbZ8gfLjDxA1fyFGe97m5H9FVMGqgitVWRP4w68ks3JDUyFXofDgTdbh31FwcZCCFP",
  "key6": "5E273f4BtUCoqJ1zXTQaVojtvnkUuh8aFhDLvQnyzvRSHxiihijkpZgvk48iFyLUfe8wkZXF1zUPtkFhNMLq2A6u",
  "key7": "9KyEZzFZFgGFJ1akZrBWRmxs5mVyc5it8aPdLMHJLKEKBUzCuJ4jBvHTxVNvnFxtg5eGGTJWpnqh9GySMugXxTq",
  "key8": "3Qc9x5VRUDiWfygqRzJuV8qDyC1tTF6jKJ4xhEbFvqyzYG7kpSEAWx6etymGvnBKVTemjKzAzviFUJDFeNQm3uvL",
  "key9": "4QdJfUERDY3FtekZbVdzYVHN7p9BvuE7uDJSYoTnw6LpRxzRwFrbqzFsZZQMaSscpjDxYFuxieTZ9P2gQM1Pfty",
  "key10": "o1NAUrsY42UVmPeE1JLgEej46SQ7jkhga8Z1Nkc7kNnicth1wPVTuFEg9xyFXMiBRXmhPFqqoFG6P3azGGA6mVn",
  "key11": "5oLojJjG42mXkhWFfn84YMXm4RzApz99bgEy1duVGrwUmWT3NFpdxm2nNQe6osBoc8W8XWb9px96emfytfud8dai",
  "key12": "4hPq1Q1p4RV8SxSm9q3CnZ5wkmvXqz1DFkVCiDbafxZDKNQDJb8nQKCRzbtPPKP7yHRdTyN3MaXE3ViQcwiJKXnF",
  "key13": "2VubsTpkUsL7JiGjG4sMsvYZ6pMt9EPYYggLnps7hm9zNQdpxUU3yzRAHaRtuJpswEHe7SznbwUhUPf2NwperfSy",
  "key14": "4BgM766BFdfzSCYKpt66Td4sQM83Ztk8nsRdb2W59deiDMyjHC1gcLQbB6j6UAx67StMqrHvTy6fhLWcE7E2gYbk",
  "key15": "34oKBBebEdPgjQ1vwjkzi9bpMGBAMjFwZ4zMwRifs3XDChPR6LyVxCiEgsrdA4iz7aRj5ZpaNVbRRKLwKoXpLW8S",
  "key16": "56ess5y1idj3mfrom7USYm7N3AMoApFKMzT2jP1SFMkbEFX4knZtwP2VH54bEZDQ3wF862GwhXRpcW6jGKhDdTmm",
  "key17": "cfk7c3UV5ejG59xMga1BjnEuAu8yD9zVW8FyVhjn4mjjHBSZYPuY19bveyx8TuVooEF4VSqvZLPUd8BTnD2F1in",
  "key18": "35UYLEqdHDXeKG9KUFzXrPiMjYWifah5ut6gqAFfJQemS1uRDxAH3KQCCvFBemcG9utTMF3fP7m3TipXPRk9LsLk",
  "key19": "mZFpY4xVBtAywkUDps1WhGWXuAAPHaimWm52ia2suDobjduTJCHMuvBLtaJLrdxVrAeqBfv6pAz6DC55m5Pdomm",
  "key20": "58ZsvR9nvboV7jiy5TVQ4kvmU1jveW5Gak6nmEokuet5Cxg6hhncYgXLaAEQfp7KLaG9rgMCELLYQiwVm3pbA7u8",
  "key21": "5kc7QCoYA4QzvCZM3Yo2hFTPrtvreNHbNwzDXM2F3wu2oLaCHkrqYLn7iwTCjriSj6RYsSyZD59Ne6vh87S4CkL",
  "key22": "5wPkXAaS7Sa9aeMecT4UTK1j8DHNqLLFR8i6SvPu2oGqcWyn4QvGGrXeWKycPhZMzTgzQcv7H6JaHJWXn1GXrVkj",
  "key23": "3orLF4XJk7n27NCbwJ3tMJsGcydhugsvLHDEqMQaB98WtFzTuX1Y1trnAXv6ZnTJkvb9vYieYTqtTUVJG5Ggntxf",
  "key24": "biN8GQWsGT3fbmp6S3VK8PNysjG9LCG6dSKLGSNnYzVgDjMPszZ5FcPBnuoFeFgCU6aoDsKfYnhKZjGvFXHbLwh",
  "key25": "eeRyeiciuNSWiBvFA5EXpA5gNrEqRGBt6SExSY2wdyfnH7iAGhshUUN2we7yPwo7jBcaNAFyiEpTMnGajYAxNxa",
  "key26": "4iWCZ3AgRq99Jc5gxZJnCLohZjnNjEWQ17ZyD8m5iJEvg6ffJH6xup3FQoMut744crQjtJVu3SaJhCee3zBJkoBJ",
  "key27": "5bmKAJE6NQvApEaS4BmEVwUUrFM7zvkVuPFnYDSYBKMpcovegbtq8zCwHp5jbU6q7pPUxkZaUDi45iQVUpZ9izjZ",
  "key28": "4AR1D8rnfXAdVoBVciUJ8gjJhiv1wjhwwdm3ejg7hqVRc6SWM2m3BGDmywqhd8Wqu5NnpoVfhM6JyzVxU8rqmqcS"
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
