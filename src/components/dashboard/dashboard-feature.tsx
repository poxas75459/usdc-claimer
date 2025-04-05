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
    "4DnyUFG9sa8BFp8CkmYsZRVAWXQ4RkH47NmcsKuvQaKzZ8RUmgcaHzqodPG9tqghf95CEGdRqKb3zgHoNHBE4QpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7x56o89KMnc9udHVcpnzhbkAiqTQyS7st7RjLmBuyq1YySAD5vKWjLVL4uPitE2fQeSsmqCcxi6w5E7HeHWbj8",
  "key1": "24DdBwvscEWSdaGm5gHucR3jyzNXUGisjLoQ9AgkLFe8MeBDVgpKgAy3dz1ZMeTUBFX8W2MQNLSirHUJCiFEaxdw",
  "key2": "UWevA1pwFZNAkHtapBTBiCCQUJQASKkaeS5ctf6A8RoRDY7nEQpgtFDoEQXKWiC7NBXqK2eSsx83rZBsXostP7b",
  "key3": "Ltt9C8emEN32dsW1bNkLf6YLbA8vzSGR8i4uouWvciUqQ86fbwqSj7UU4Hg1Y7Nsw2VaUCEgFJEtr8vuU3kexyg",
  "key4": "3rU19kUvgfPU5HyMYKVWeX4kdxNwiuYRK2Z3tX33XLpuBMFEizqyqW3i69EEKyQ461WubZo2e5M5JKwwFonGLCNA",
  "key5": "25tNi3zw7vMH2cidw6v68C9xE1eyutwsfv8NMZ7mJAH6ZNKQPpBHFhrSNAN3nxGYGWtuzeA2HEgFKsK2SmDEknDx",
  "key6": "3FPznPN1J5ZvJs7pNasJGBkg8V33SKFkV1sz8L2ikaVQPkqyGJdUmeahZynqeTzUEbfnXt9tXxaR75kvzdQGpoCK",
  "key7": "4w2bk32wBMbuCSRZirXvwJNw2EiTsPSgBZz22ijZj6xzEwLuPM2Sba2vDj6D8XMzWczgrPSmR93CzU5cevz1QwKJ",
  "key8": "4ARFS8pzNpopk4uHEq2ZAcbUq2KTyP6Gkdd9HDqP1D781ahBx8nJN6Skta8febEgbNtmMYHP8scJMEySJcxndx52",
  "key9": "2ooB5Ma9NrhTbF3QK7nR2afM2VZ6kddD2KyGAhaQ7j1MgXjAQfbF1HJSLz55KhLyzCa1HdNDitynx1PTxFSZC6Yw",
  "key10": "358QLk1yFGSZPiWwebkbbPeybb55BxLWFFjhQDjHc8urCg7B1UjHEH6a24M5oD8ygCJi7kPYDa9CBTWdGNkqv1xb",
  "key11": "5Bqg6TqhxXr1V6wtu4jE4kz9jXKUzkrv4A2VwngWAMhWitZtPAGfFqY9KUrwz7w2rMrkbw1VRKmDiPcNusiuVChR",
  "key12": "2cP9f3i3tCN5pLGRr1Q884GoevBqvz2DpgZTQn96CeEp29DKy9Nk6F66DL7VGUiTmkY7J2HF5RWazpZbF4briD3P",
  "key13": "2hG3pQpTZePGhdjg4xhLyFcHgTxtXr7zUhfVS5vn3VRp1GVMcBpuFr6Xv8GiaCdHrnV5Cpjr8uBRjeWZoGcBoCj",
  "key14": "4NNQWVsg8XUs8vFpCCTP2zPW6kmeWaCMNBfgXBZtywk96CpD45oSmfMaMxyqscL7SifCd5W7m5VTkJhocxCZEye7",
  "key15": "3YAfsmZUVMVMk9vv4ecSnfNggVNXnZA6MTNLVz5NLSkwMvCdNmfcabwSg6rUzNgYLSqDT2ULQsKme9VADRQ94hgR",
  "key16": "oDk37WMKEVhu8Tfohi7MYUB7yfFWUn9ihyyU6wevovEC1mytAQTVciLcHJBafnfz11czA2csmppiYPhFExa2hUp",
  "key17": "yW1D5EZZfasESJVdgka5SPbBc5cTGc3w6TEcXhHDABy6UdJKZdYz7vHomVwoemTGbbejuqKxdss1uLMa8myjS7L",
  "key18": "383pkjsY7FCaMshf88dMxFCXyo7sAQWjoyx4nHWcrTvdnMV9TLKHMJZPQ3H9eyM4iezDC8eTyjceduWB4JYt9CMC",
  "key19": "u9jE1orjhkZjBrxvqAYqvRapEAcJb4QrPrxvpVcyYmkCKK1xc26pFEk8of9P9ghuLpcQssxhv3QQCYq6qPy3Lbk",
  "key20": "3YW5G4SHGorQCAdvg7qT2Peh4pjhScx3YfLnL9zgd2cSsaFpL5sFg1ovWczgQqrKLPgQ8XrSEtJBXbF9j7X15CAH",
  "key21": "73DgG49fby3Q69gzMYHBMqEG8v4qsBonTTXCxJexrgbjEAwrhyW2MkY3gL7MnRdi6wYxHmoeArp4CBqQiqeDzEX",
  "key22": "woNWqxkVnFp7AHztH4ZcJxPTGQ8vwTjEqv5QYHDFeYFh7otheepWDPqtJuP7ahL8GWAzxvVBxggkB6a746UYXQU",
  "key23": "4AMUnBSELv3YsohakdwGoSBmYQcARJbKBmRArSFtPBgtHScd6QP116DVGQgVagsKGzpgbtF4RkNk9MAs3UjhX4gL",
  "key24": "4RpsHcxW7VSBEDA4WRykCjmEHnQziL25vEeMfXjavr4rLZHr7X5e4kSa8528Y2sRtBi8fJgV7aZq3QoAqp8PEkkq",
  "key25": "5TbsJawfdYdCDddUdjdxADuqGZQ6vHdAJzCz8QcsZVnbaBJg9VhydU5WC8PE9hBspqoYxx6JmQFY8h58EL4dxTAi",
  "key26": "xTPkef5MykC8wXMdPVJbHct9mAtVvrzKWiPYj7knm9KdmLqrcL8tdsrq1ZHGd8XvujraEpya3US51TDAmBrkRd4",
  "key27": "4CLXG1JbRbFoVqLZvZomt7CdN5ZV1dHXy8KDsQYocHA432oYp6NTMZbF6BswrgL6PUwpnX3pAEYQJX1iPXqQTyUN"
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
