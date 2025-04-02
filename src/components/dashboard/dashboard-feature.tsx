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
    "3LX69ZERnrxhrXHPa8uNjYLx6ZkXBSa3XQKGdcanSFwUsZpQF5qsHXLZd8eMNfb2UzqFVcCD5WBxVstrHniTv3sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Po98VYD3jDRA3RfECX7TeMiU2CDbHrczANfhw8mBjSTJBquFTnqhzBg4tKwsARZMfiLRWprZRU4xew65bx661wM",
  "key1": "ATYqsiwRFw19ScnCfvVHMeSKGSZNa55xmp93HfmocMFDrgoaNNKVLcCwdyDm4yyh2zYbfyro8G2MPhwKhqHFMxJ",
  "key2": "3ev1MLwtgdiZ2FV1aRxa7jnVUSguc82ZuLnTevCHLqcjQAE7PxTzUEuQ2C26jwQ4yqi3RKbppRNMwXictYQbFGtx",
  "key3": "34kVyhirnuTgUdHKTvCNe4uqXCYGoJ3CmKYcZ7ocjmX5Fg4HE52QnvWvhgfhAp4opFPsvwPnybNnKc1WtyWrBxvR",
  "key4": "4bAZf3Wu6r4sspzdJGpB3eizGpBSsZgkg6fa8Dht4vjMLVNGkyWyU6Cr3CSgvupBzprYEA8rN429Wgj67q6bNB7F",
  "key5": "9L7nCGJkdSUKkn2WnoZK15mxrDSY6hbWVTNgyUkGn4kuTK8nYcwwfJyfHhErr3hWXxxu4p7tRrSM7qexo8nf8y8",
  "key6": "2b4r3ZWmin5pb3TbYif3wLc6H4934in1PTxEA7hFAY52g9DpFFTBnQzKzGQucaJkxKFXCsuaMmCk8r8y1V4UGVCL",
  "key7": "4f3s7FyTLUmsrwZuuqymoWkfqn1mzNXJkkSAGjJkLJgAysGY57puazJwegQP7EqWh7QFnPEt7wnpzGnivneE877H",
  "key8": "5w6zcrx8jYgzJre8t5WRv7rRkoE3TdZoMTk9Zp3q4Bgj4trZtMz1rabBRkE4CSmEhNGhoScg7xjApycG9Wz5nrRL",
  "key9": "2VsDdm79yEs6pPeW68EE3PzWRXkYQV7kMHjZQGNBPMAJdxEJA4HgS2UMnZjEW8gwbT9oDzYQBj1PhHxW2agSKgRu",
  "key10": "3s6vJtcSXjLLSiXutMENTizoH5V6swVWbg3iwKcdYNuJ5pkuobMZNq6aLo4oz1YqBWLdPP66cB8ujWbGbJQoTEHT",
  "key11": "336mcQhCyXHY5BeCfwS5mpBRZvqb4e6xS9fYi3juQwfc4Tq1w6qqP7kCpb2xTqSSdAndKVwpT4zuecJAhxx2Bjwo",
  "key12": "3kJ9M6zuX5oAouXmc7CG4VL4rfVoptc4zEMsrFgmgVHK6DvMcTFnZZ71PW9hehideWBwsX9EE83xeNF8xv7A2EDs",
  "key13": "46yPCdGRNhh38AyYbbHcNKGCJWWciXfBj7vuckbHre3bMd64Ta6QcQATNoAxs955HEotY8kWXQu4iYCa4gqh1zYX",
  "key14": "3h5Y2RdJN83yv83eCR5jHviGpgLPUhsKMKsLqtYdc3EAUu8AumSz6wcYHsuLPYrz8GJ6cuDif63mV2ypp5QAGxf9",
  "key15": "4z8uC7wkL6mDZ49vUPrzKJuFequiETHX2MeBx3sU2Dqp4BPrGBC2QE3qdzgy9DP32Hj14wEt1cehQWLwNrY88wn6",
  "key16": "3cZduZ71QjSEhexeFPrnNx3KffEzdaVp73LMncYFmfCYgo92QdPjexXUxPUV8c7L5KsR7b91qTEfnB3BGaFqsiQA",
  "key17": "3ekqohExUpnVbkmsAtQX6hM7dbE9Lb6RD1nT26BMg1EcwbyFL1mdSsNoMm2bUwnfSwDT9ALFD85vRVw7xzrGkSuu",
  "key18": "jXpznvUPUAKMmEo1NHkpE1LQRYEFqstdyCVR7Z4JNxXoz2q3UmMkhmvziCGLp2BkBMQQ3ySHMB2QjxkXeNXT9jm",
  "key19": "3vH9j4B65gKycPyNfdnaHHKUCUdMeeQfA1Y3eVrUvUQWL2Wu2vFncozALG57kbcVZb3aQZHW2seBgocJWmotmYuC",
  "key20": "bcnGvjUsXQrTXaiTfbbWEJUGC2XXxL6231wEG86RRERA6kGFASbG7TG5Qd7yXTuGkWfDNMXV9W3JnNkSNuqVSJR",
  "key21": "3hfgMqD7UYng2z4WUB4qRDqWr3aPeZunkJjeBCZExEnEThyCia9SRt7gbF35nKMVC5AoLF9dT7CJJprRNmNzdr7b",
  "key22": "5vDEjPQUDpgkPJaeFQJ9JU8DXNAY1SxzBdtp5wSxN7PZ6AhvyjisKfKtPoH1Msst67qWFrSKRShmKX13SWd1ZdHE",
  "key23": "2gd7hLqDQ9V2kpR2wnVZDFzBXEfP2ucBcfhVoCYgi528P2bjjfiSJv3N4acj7bxjut2HUUM49S9NqNy2i98WZZVA",
  "key24": "3hdGgGEW2FXW3KdkKEc3yatHbsKBYETMhqXQuaU7tkFK9DUEqrzjGCi2u6kEUqbG5mTXCeXcz9n2q3d54GshNDWU",
  "key25": "2AAem5k9moXVvoUkRkCD3F2ubn4pbg1F27dCqRpdGR2J1ke4wmau9ucrSvVBBMYJczS4LCqkzuqjYaDQ5BGwm9rQ",
  "key26": "54uF89whh5zmpFLFZgAWCwXKU9hNEKN7TMdHmDM6w71devfncvUaHX1nJ6VVtEUo8QbCrEHP7teioun34xPFM574",
  "key27": "48jVRiTB3PPDUHVV6GhZwToxvMxvJMVGNi9JKnAFhNcNwCWd5JqjXrym3gRctZgcCmezKhQhmpup9zeU8aqRtnyT",
  "key28": "2xC6viUcWTFh67NJV5kHYNhMUNvDrajAX82Pj7Xi2p3aBWpUZnRbX2GZHeLrQ2Lo8QFS1Cj9VY9pCjo1oGRAEC9Q",
  "key29": "2oHSCTfGWxZT7L6wMxn3B4Yw19dJGUbEh3B4rAFFBiDv34VgzMJgtt7trcDg6jP5Eccbj4jFQSbgP5HEjYQkcFJV",
  "key30": "5ayoJznyuhbKSgD9tWm8r5G4UZHbXwwWSLTpgHtSSgZHh9kqVXveKQif7N1zyfmRRy8a7YEoTjhx5tPgLC8kCj8i",
  "key31": "LBh85xsPTnwRVPCfiPdYk7eVLBECuxthrfsJbSQRVWMSAnEJiNuwbzy3knSGvGmkwnbVKNRmyNR8mnBR4zrf6EA",
  "key32": "3r8QHuUa3NvfXd4QXmi5WtTJtdLQwnC2YCWT713czGSaLtkwdxteUG7pLrCWVKnxdeEGvL7TZ89PkKskQvi85JcJ",
  "key33": "2My8iebAz45Su5pPLUGokiLyMpyhgkhwg737ittmGApDs6EnE2Gx4RNthwxZ4HbHm33qkuY7avUFyTYVG2sSzqPR",
  "key34": "7Zfbv1JhnDvWaRexWKywdtuhDCnA4ioZb3QmAyyRgq8nR6mRtT7NkQ91eYSAB2NzgTSiFDpqNpmzn2UaeNP1BmH",
  "key35": "31Xxh45DaTA6iyvEDw8e3zCkPp6ZS8N56rRNQoEyEEEjgacSNfpzdJebpQDr164VdJGT9QdE14AMuYfZxUk7CgaK",
  "key36": "4TsM9SkBDhDpYuecod9nmssPTkjDV9967ytL2B9yJNrqYLeC1QdkaaPH5EhAcy8aUbEP6A6tbx95vATGvhB5ZP9H"
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
