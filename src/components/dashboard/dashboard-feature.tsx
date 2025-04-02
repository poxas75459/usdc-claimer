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
    "3UFQmuy8zxj3rv42tmf8QDxDiE5XqCmxAbz8BpuvAQGmg8s7vDKbWYZtZuHodhYKmxJ897faeywrU8F9g6rdX2tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UAqKWSz6q9w8MqBmucSZDqcb8KaArZqgruAsq4tU1FsfL5B89woW7BxNyoYvNcf2pNRWtFQyKK2AEpTu8rawKu",
  "key1": "5aFqD8vZLJ7dGeneao1yMGUnJRhHmLZjXiahetFr7Pif446we1ZUThGA8ftoVo3YVZB1DJJH1ttKCvJfmAtHa8BB",
  "key2": "3mhHZohxbe5Etff7tTsmDUgu2FLJNNtgpBjHMSYh6e3Ji1oLZchojXuqKHd6ocjBHisa3zyDUVSfrU4eiZ5ZXNSs",
  "key3": "3TrkfdDya9k1QLVYQE1nfqSKVNHweE6TZmrAKHNX3MsZjnxtUe3r8tD8jPivBw77MFiUFnzbZ89uAWWKN2cMDYVH",
  "key4": "3nibKhXZ3fLUSWwYYcDzZtxx2Y652UZLhdabHYgxjUp4oEtqJKa6hpAigVcSdAmpoYzkDJtj1zDQKKNe8n3wGv8d",
  "key5": "oryW5yNYfvmbKnspy7gPf23tKv6NYgPVqVkUHPtqqB74gYf9CX75RFNDSemm3L826NnJATdETEmbQgPztrRaFCd",
  "key6": "4cLQhX4jBKXEjRxoTrz5LfSwizMbk7W5UvWRyaFj9hJmJE6MXvaWwugibQ2uYCQ8EAaLR1bZBgawz7GsbRyk9kPs",
  "key7": "3HNnms2cWUpBxmBaEwiAjGAypJqkaVQ1Sptx93pWPQXBgrpd2DHqVibFB3kp72Q5R6DiC9d1zNWBgw6AkZ26gzLK",
  "key8": "3Gj3Lv9R53AEqnCPM7bw7hfcfai3gH8PdSLLupEe5TcGsHGcYuB5E4GHrjgYY1b6q3ea3EzDJcdBCJRRKY7PvVJJ",
  "key9": "VtcHsjQ3heVnAFbzfdvLpSozPya5XY5oD4fK8BXkggoqQcrCeSPVAapXbPEg87a77soCkbWB1As5mAGGgo4dhPC",
  "key10": "5JNkHLUFgSVfpbQx7LnF6BybpgZjCKVqQa3qdJG3mVQCU6K7ysr5Fd3fFFS92dtfu9RKpPRWbbm1mvqdruxrWoFG",
  "key11": "2CnfWNE9DjuSpnx5DcnUS44UwAJhZmczvLQPYDXKDqZ9dJxEJehnkHQAJYHpKJqt3pPyVYE7L5VuZk3Zz86dzWRm",
  "key12": "3pcANheQioArEM2Mkhpjk4HobTmf9VxAEmBPyBwS78xFPAzoMHvfLbiy4ihkwKPv89aMXi5p22CQEMPD8h2ETYYg",
  "key13": "5okYjmi63teintPZH9AtQdouA57JPtCsm7g5V5VgmuHBSZWWbZ6nu8AzN1djwpBP2ZV9abqPX4mtwmpnJrcwUqtH",
  "key14": "hkHqCagBT1Eo48e7pW8aoTC2igtoHEtZeWLqhfVtTkzsGzYmZ7CNPNbs9xt7MQBSUSKjvSR3CKTV5RozMHw85pZ",
  "key15": "4fggXVN7pxjJd9AYAL8KmbUEDJJvmHod4WSxe5Z3cQCQuHm79eiannzrKGF4vqGv916d8qXzyrCKAm6w1t1AC9Au",
  "key16": "3esgpact3w97iD8rDGpYzNKiJXnc8gNiipSu7R6XwMbGrAtHV2nYo3DYpKkkWTgttrGhRe5QVJAVbGgmFMppEs1z",
  "key17": "r1NmAijQDgneXEEZZGdkYwRYpw82toi4SK4fpmnvJ5qaQmrNNhWC2s5rYjLM54YAAHutXXhZuPrgfV9ksppJAns",
  "key18": "bRcSTb2vkM3MFNmYMbxMsH3uuirjM5uBv1x2tBZTsgvrZTKrnUJ24dGyLeoD643FJq5uPCppattsV2BtRrndDcp",
  "key19": "kkNZ8d9c5RF65ASdmEbVmFYmsWX9EKyxAwZK4XWjJC2hquavYpaA74kSYxspeJmDGA2UkH3B849ebQo2QerewMx",
  "key20": "4aq9UTGQRHQMGYCoMYGtmK4us6RZJVGPR4Q1NTMPyBN2r2L4PELxppX6x4fLVYyVjz7TsJkdSKTy3fFWp34o5y1N",
  "key21": "4RX3xoYvsHdvvnztAiCvumfiZ7VjrCH6XrapDKjjR581Eo5F84az41azYy8Fs6P34VhvAbkHujrssa7L4p2RevFa",
  "key22": "5Ft2yb1i3nPLK2bvjLpGnZNe5rTmZycC9U3CVSFWPKHkyG358tCsWHJrguUHTpdeEybjXTzcPWAgN9yW3zY1kAKF",
  "key23": "46yRCsRPL48aoT1VHyG7x1rcwDCVmrNtm7jZ1tGhGPwYLu5Hm3TvhBnmkKhAUBa7Qe17T3A1PHMUrZuJENcRjcrS",
  "key24": "4W5bZCJbUAHeV6EtLnMHjWJhJNJwAxMnncq7k86TMYn5D6AKbhAA7e4Akagi47A4ig7y8YTC3tbpbF9knvFQCc82",
  "key25": "F2X5n946Ef7h4EyXumfBk1SK76k42Ld3XwZovUZqH9Fjv9VQuy4eP4k7hApucuxecu6Cb1uDyq23j8N1tw8B6LV",
  "key26": "38HVvM133kyPTxrU3WBi8aJ7yAU5GpXVcZYZb6UdH7K8PrzrNeaSQmvLAyAdwDf5dP7LWTnCPDeCLV6qBDy5PnwU",
  "key27": "2SpDwK46DH8kkaNn54ig8Qo9DjtH3YQ1M8atC5Ed6jhBhwPcpZsrFttH1CdsMHfDnhRUYjH2q93oZwdEegWVCPDd",
  "key28": "cZBFFvpHz1ha4WxpqrqPj2e8ptfhaEKTi7zt2fuPVmbRyjRLSXcbpLqDGk9aXTrUZn1K8Rc6XGXfm5q4BmQNc47",
  "key29": "gFMdw6TN7zPxqn4qUyyqpd2scKi3B5Nx8tvhuDZJPgK376K7m4J11B8w8agyVW7YBFsG8qagabjvhzeXAiqbZ5L"
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
