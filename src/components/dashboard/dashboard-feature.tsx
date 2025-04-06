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
    "54MZEhDHGmMZPghHX5MLvXP7dEMyddVWCiQAVRLBHA83TqQDbgHFUi7AgHnjeFX1FMhNehXFoj1diVqZWCBziSd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cBmb4YET1FQczDqkqH3p19PP4pm5ovEmS64ZMeGFo8wh4J3U34ANBqKhY61fzRnUbjWR9ZrMHSNmhG3vYqmpQDm",
  "key1": "3m2DWAzDPMEQmJbKS1NQFUpr3CcQyb9XYiiXn1jZCAusLzYvsjpQzNuTvYdPSBX8WPDTtQoVSBESLXzZj5DhMADQ",
  "key2": "3nxn2eyD4JU8kygKvHk2Bc55yukCLXEBPsatVKgdNrEYEn38oLHTKKZTJxH7m9vGtWwR8spQDyUDMkGxJqRJKNig",
  "key3": "3zVRcsarhX3Ckyb1W8Yo2q1gqykXvQJguvMw6X4VnmsP65h2ZrJryhuNLxjmpKu5G2boizpDE4BiN665bMnjWwW7",
  "key4": "5Q5nfU2P1ANB2VQLBgErr9aHcTX2PeQQvjwZvqCKrMQMdQ4nxt5rGNHLLZAq8ucMKQQaXiFkKuKGVd29LPcrNLwE",
  "key5": "5CgngPBrT56HZRPy1iv6tnC79hE9e4MMVxbQ8csPVcFRpCU2dMeAt3MzxJJAt9S5RA363F4qyzPmn63KNasV1kfa",
  "key6": "2RLQbt9G2xQQMATm4CkHRGAxPu357LsHrL4bw8VJi622YFkUauXmWRFoFgQ3nYLkNobXQfZr1JYT4s9Hx8AurCEd",
  "key7": "4ET5zgUNzj8JscVjAb8J85iuGe88CYP7kw7hR7AGtizSuQnF3nuncCEvDPKyWJCsuWkBnyzRAwvUkBPBnpfruoJ1",
  "key8": "4eW99um4SrigNNqzWcnEk8ePF33yx2byhTPMkP5Fmw4e3BkzspGCg6sAcGMx3N81fbmGeo8TLLbjAJQf1oudvecz",
  "key9": "5TaZAfGn3Fp7EBmk7GtVb2dVAxw4iKWs1gGfh2qu3FhPJ1G2AqzJCwmozk6QqH38GNQfRHizsyUyvD2RovdcZq8Y",
  "key10": "muMV9bwG95GcwRqA83kJRh8MseQTsLpU6rhE1smTDjaZTZ8zHPiPDkYwZabXSj4e3A2tk7th57VEu23g2BD8Fs9",
  "key11": "4JZMyZkhWWRbzcZbEYfBCVuwHoAHaHa8jiFfEpYCBFNPmXvRu2QWKeKsZvnmcDFC4CBvLRNnkzNyNPK4oy46tP3X",
  "key12": "3qx8Md5mpMuKjEoxFUxwmn7eBsikJ9jr96ucuwuFFAq7MmrhBWu7w5ztXcYCGiGZ6LX9KNRA7Z46yanpaZnVds8d",
  "key13": "2E78AHKZhTSK13PJyNhNh1BokHXZ5fJ28hLe87X7upCfw2i7Eh7WoSWGBj1f7hTYeQeqTazPBY6BYYi4YzUPa1bP",
  "key14": "21f8AChZAz3UZeBrxGAsuX1F92cGjUiv58ScZYhSwmJF6BXSSfyb7itpqRyZYUHyywZWzX7zMrrWEzWxwiJYXDZ6",
  "key15": "3USkYGj7ZK5yNBJTt1YH6Y9VHE2bbFiUFgPT5Jmius75NEXxoLXyqYw28Hqc2aAsycwvygkJ71D3awP2v9d85jBi",
  "key16": "2SyusaMkctVKdXdqPphxUCx6KAaMQu3T4nN2Xp9GEfAdJME192dHyVepkBsLE2nwLnechA7EPkJ4RdUreFDoQefx",
  "key17": "rcLMXRFYBJLjPsV2m6NXadUGW3xbi3MZmsRvZ5DriY8gFejUzCHMXrGquDqAZLNZ2eDpzS4Uv2mSry3VedqLoJS",
  "key18": "5aBgPECc9mAS5WsUFLxpfwmMXuTHqw8G5fT2FdMtxbNFftH8773K6eQLKVZMPp7W4nvQEYmDXrQLRh3w2s5cXwcq",
  "key19": "VB5XpuyRc3i5qJDkauQSpnjkYHzEYxNh7Uxq2mb6vL4R4bTSWpSJqkMgAphmnKsn55Cdiodd81FMtqjCSK5CHPL",
  "key20": "4RatqgycpGFALBxjmyDaVK52AysEEEMnvMVS8TUSCnQF9PPYdcymwF7Xqxs13KAi1Ni1FynvdjANamfFHobHFFfR",
  "key21": "65CQeiouuH5DC4Ybh5Am7xTjTp3rmR17ATtuZjrqnvSFvXPZPJDDxbB7dAi4LPTf3VDFmjCwoMLGgU9S4G4AzqLT",
  "key22": "3YxtMBqJudsKrREiicdoYLywieCAeZxjxHc6pjuNLHPenJvbARRjk1Z15rerYhDsRAQ7BSHJqzH7zycm8GisJSsE",
  "key23": "3kdSSYM1q3aUSjZoAhbdAtFNm2hBD8HD1cFRAYryQWNczx8acXMusA65zidfBRZxADTtpjTJnkWTh3geTsNpXsEj",
  "key24": "4cdLHDo5ootass58CYFPPGEC2oxiFwjhFyALbYtvwQpoL8sL2GKRwXfxwpGs5f9K9oiVkT2WDG7mLdVEj5TGjGqH",
  "key25": "2NJRzwjTbayynnCxx9sQogTPXMgW9gihLTQmcoAmWqqEg4bpRo8CSkkehwU7qjqBSkhLqzL5HgjbHiKAxx9wWBNY",
  "key26": "3uaHEMe6SadCHoPhCLSjzFZGJnVJiqg5ckLp3vfgXb96YsYhLUvv5t5Hj5r6f17hh5CCQ5DANip47PzzKog8KzWS",
  "key27": "3xLCBG1SscWNqASSEhB6rTUhAcUS2nu1ao8X37aSTcv1oJ7j6nTUJErganPWj2KDwPZsRnYeENT16eBZp4yJWmKB",
  "key28": "5r3vYEqLq8zhMGekxBNtXHYSghqAyrucpYwiYMe2ubMUUSJK7rGBN4VtfeYGtT9dpQJPkVNNAFqs9b345b88HQbc"
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
