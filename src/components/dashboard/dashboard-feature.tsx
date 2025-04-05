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
    "48qCawkGmTfUwMbLxcRqoTmNt6UnGuEJHBqUoAz4PBPCsqFqQNXZqoCDaY3ZRxwKuoGATFXWr1C1nJCvc2YyEke1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjmYYss91etTNcMG9syHCnJupGbaKCWMR2YxofgzLjHG6TUpNx83Az3naxgg8q3eN8bNKQx7x1UoJhoF6f3G4tg",
  "key1": "43cGg4VPNAHeXSZLLPsCWFohqf39AJ69gGXyo9PePFWa5MS9izMLTkw6PgFR7qCyqoqGRvqe2hvrP96XQQQLRse5",
  "key2": "3U8GKRxiLFeLXTWwU2dWSGbqJ45fCxx8iTgKfmUaRjjF3rorBkjshsM8ax87ZxQwzFdZn2uqpUASuR1VMX8TpcPX",
  "key3": "4DM8Thdg8YxaRX42Mu58VuBjuHGkyjEPAc8ZBLaQuYSCwpjvUYinpEeQKVu5ys3SaFfa68v2vY7E7avHPV6xehKM",
  "key4": "4SLnQU31V3kTQ8fHqrmeeNUXYWkG5p2kJxRyRB697wFzjpwyRZJ8Fn99cX1RTby9hMcEgL1zj7uEpkdngUkGTTmb",
  "key5": "5TvhFRY6PxguMjmxPE4d2XSGWaaEQCkkwTL9BbEttA5k58D6bQF2DFGRg2D5K3RDkhEehP4eqs2F14jSHwqNBuRW",
  "key6": "34YgaVWryuE2gjC5LjA7CsKiDdvAoU5LrY2jtZyFLchJatXtexLPf1AqiUFy2M2xsDLtNXRxcskTgy3pRSC8whDZ",
  "key7": "22JNK4y8LbYZ8sLPoNkpLUze5DrW8p2qgpJ7txFEb8MdbRShGN45Xb16KUut8e7Qtb7zDFSBinPT9J2dGKf6km3J",
  "key8": "5hcqhcXTZ9mrauhPi1A8EowDYNnXrEQp63C9fxtCoDKGmEfAoUrgNHLbUB6ghwTEsJhnGptcomDxDEcYWXeWPYyT",
  "key9": "5kJzw4W2ed4knpwKcSQRNSHfEP7oEaeuJdN7XawosWBvW9AAZqr8LE4y1FLdQrv2a8jBY6WWYo1G97HLrotKNsBb",
  "key10": "tMtvLAfjv2w2v7XpnFTa79ePUoYMYKfBrsHKF4yRTxfFyPEw1B1AUXou4MHyhAxPP9bjVcNPqrYP5kii7Eh4W5c",
  "key11": "4qL7q2JxC5ipxiXZqejgmjTyYKsBuf5Qe7YJjYQyoCbR8Mv2DiYY6vT94QEXX6xHhxBzrzoa186vNuDikBxGEri3",
  "key12": "3gBrsnokPoKi1uVHjXpyF3QEPGtikiCeQKPWqZozHTpDFgdhEsm6VuXtKHGDn4RDadwBU5JHasWMYGPoaUkP68gu",
  "key13": "TcaoYRVwX7QHryxmqUToKS2Ljy2KGJr2dNBAGLq9BmfqL12DKVrXE9vH917YQ84kqcz8oQNPKHZHyxgSJ48bGVa",
  "key14": "2kitjThonEYxegQaddJZPerSu6HxjFJU2Qr4d5bxwLLYd4ELXxP9ooRp4bj6dYUrWxrZPZGvpBrJejpkjQ3n2cft",
  "key15": "dBMM6YkcYLELoTDFihiWQXFtM59pdeyids8NGdYBxsbHy9G613Pu11znmYJ4XGuz5PeafVSV2eJVmUHgKviXt1e",
  "key16": "5g4r6h1bVSFzvEE3EwAD2AcgGwpivwUwYdt3iMFPXXVkLGvgpuZpjpGiTEev65ojSjrWM6iRE2bhDW1MHkJuWpZq",
  "key17": "2oDqohRunwPzjZaktM1F7nnJrh3zPC3ctfuyQ7Uph1ckUrB84mnf7RByk1twxaunLZcoYp7G56e3isjAJw6uhp95",
  "key18": "sYMpxJyoZ6WNQ3apMfKKH9zMWMWczy4txf6PNxymyhjQjRnYDdY9sWQvF3KZ9PWUhtRpgZQycPbhbLaPLJQVRv6",
  "key19": "2bvPnDfy6gmpkGUoFmkSPsnoKs63Wfhxh31f6X4wm77ugiT6jNYHzcgWvpaY1c6fNnaS7rewDUX1CPfTP1SMhnXs",
  "key20": "2jkiEukaK4fkgSv3R3yDoz93ZaA5YePMq5r6jmuwhHF3TU4AVpANbrswD3wetSy3ts51uRt2jyFdDkkn49nk2DKu",
  "key21": "3YTw5cjM26GRj6svN7hwgm8ZwQvgxTdZ55Mv4GVjG9xXcEK6mDSjqedNEt5DCXKeASHEvrfNWnciJ76TLccnMfrq",
  "key22": "3KhpGNjdVoAtkP7AZ4Rp3dLUSqQAUnh1aHbiuuZoXjCYtGNbjzEhfqj6HEK9YHVjE4TjTHT7ySsujNE9uDhFUDtk",
  "key23": "47cF45teDjhoYx3v4qqhKFB1rwWXgdQgvLGPqSDKsGMJTjHw2M4pjYLmrj7UvVtLZpuafR18hSDYqzQ2bNhVQYAr",
  "key24": "3GWtDqP4a8rfcGaAGM7JR3324wxRC7uG3cRJfFSYUYhZbUq13WuBLG5B4uwaWbS3JtukbcAKZxGY2d2UGFHRwTXo",
  "key25": "2gUna1uTQFvDS8jLAG3Qxcehdb2zvThEbensRgFt2gbYBjxn2SwhNNRvJ45j1Jwf8dJs9y8vWwpiHcqzzkDKNfem",
  "key26": "3N6gSTuzou3ZYbF9Ktwqeafbzb3n8MrJ2xJrqdBtreju1X5rNjj9M1mYj88AQ9FStoheoN8iSBFF4RiEYQohTzYC",
  "key27": "2ziaGYNhWGcTvjnExRKnqjRjZmRW7P6PZMm4Yt7gRcSmPXZD1ryq86PNRnUbQNLA6ktQ8FqaS8WjJHznfhhT7V1h"
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
