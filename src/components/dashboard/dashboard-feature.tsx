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
    "NRxAMgWaEYGKCPEromu4sb2Y5k2J9K69LLSwhP7idbZnBj52Lg4QgYmGgRDdaHBdRdBjaaBw9v4wbveXTvrNZZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AcMkfJpZWMvoY7xBWfnucwkSd9F2fTyynZPxgvvhMUXSDzPSnztLivHb813YsRpEgTPXDVzW7n2riBxLLAJSPJ",
  "key1": "5vYhthfwBLC1zFvmA9pBg1AnKA9iGCKdfVSTfHTWXp2QeunThHxugwhghm13xA7a5VMRDwYg14nnPvZahRZR3h3e",
  "key2": "4N2tLhXLwN4295c7g5EmUhBfCUWJxKNZtAoGeLSLk6wx15RfzJvKdkE3WuW8Km64x3272wq4rGMgn32RdCrAfkGP",
  "key3": "aCd2PcCrEDSYXdUpyMnguVrmC5N2Kr3TZTpiugcJXUwocLqKhzW3vPfnev6E8YPfUL8R3UbhxVXG3iGRYLbjgCj",
  "key4": "4fCLVYgdEeA1LznTrvNtxH53V5xMQ1bQxvULNE2z4GR4HoXDKHfhZGZ8FDgBP1zguhJk87eEUGcx7NTeVooGUdR4",
  "key5": "3nUwxKqVLr3Yem8RdJyDJQ4rCpByBHtZDQiUi9G9s5N2TxPDb1FezvcS4rYiuwdYU7hyoKDaAUjKG3YgBHHmXLF9",
  "key6": "5pxgpKxY2FZu3U5JmMCT9eunt5yres1ohhfKBLMZfCNWt9HuiR6Ka6nhhwWmhHDTQYtGN6Pedca7fVqL6PWtt4a",
  "key7": "Fdw6Wo2P3QEv5D6kGvUQSCEEcNe91QmXjqjSAZdXgPZgkXkeKDaJcZa4dwf9B9csDuFhqmyWiHc7gUNCmQhQps8",
  "key8": "2o1pm7Zx7nSjFziFS5QbfTGJuQ9eC5U22mFtui2J1SycjaBJ6FJ71UR9RqzW4h7xcwBY9YxMjGJVjUo5u1hyzNcH",
  "key9": "4CVW3NCfVb4PdMYYqwdmEsVjk1nwTcJciFtK3KanLie7akvkPDgNnhAa9d93A9nFCg1X2GKXUSjv8hvp6UW2HFVH",
  "key10": "tZfHiRSqxwCkAUCj6zPxp5xt5ScBW1GudoHEjaKekG3u3Ek3wGFRjxRLpfRWydEYrXbA7KgEEoK7pJeR1iSNSFy",
  "key11": "3kCVHNfd1enA2spDY5seJa5fMM2BVzvba3C89fR5aZcUfzttsY4TKGRcvr73btJGqmL5MBJz3SiJp5ZW2BeSMBBb",
  "key12": "LwTYKvcvvJo9YGKds7n2twTiPSnL9mANSDW1rm5msSoQtMsj4AqkAv4V66jFDjRpvzKtvgidFvGCMaB6VfuiZf6",
  "key13": "2qaSyDJZe2amjRWTYVRLD5eKbmvxMzkySJyExzNqdWcG6ECy5R26nu1o6jpFLoeG1U31VrAVXsDZ5cbAuJ3Wxc95",
  "key14": "2FvUur5vRppFoh45F329jXqM462LaX8HViGsDmyRZFvTWqDjZCVztmhT6zQuZUpgoNLC6gKtZpS1TZBSnLWpoVUG",
  "key15": "2b8ramXJpP26ikBksW9MZqits3sXdHFnzgknvraAUn5tKjh5kdHjs9wdwxRmUD4ownpVgdc8pFPLrqsYCvsgXLDK",
  "key16": "2qH65mFqePaw3Mdy76VoF65ETRhVYNUSJYQcvgmXuNXJ4w3xMH3z94CkLVxoXLNbiuZKiCGwQMp8Jhn8S7cJKs5B",
  "key17": "5fbqAhBDKSKNjv4v2nKkfeSXt6hz4NA8KxCEXZxHvEWktPmhzc5295ijchD5socuVwkzD2DCcdTd4zuN6pCeRaMA",
  "key18": "PVoY1PY2ucLrkXt193UcHoYYsryunP9dQYCVMRtoHX8dTw5myL4q5vyUH6yknsqu6eGqH4ggru5sMgzCi3jM4bC",
  "key19": "bbHj2p2w3YAfxbBwh1DejeWVkczLUAHps7kYZ2t8nTnwstxzvMtuAXygxKjjioLxgbEcnb6p14WoMo9WzYxHKKA",
  "key20": "3vMq2MaF3LwbEcMBMpHJngH17MsAKTo5uGw6k5F3T6rw6hzcXfnw2gjRjHDLqhJ3bsMMLGdoBakb7HKtFr3Kw7bG",
  "key21": "4WxVp6282Ty787eNLD3jAjoHRSMRUZcRnbzRjre9fKfPAJ2tbk9dCXtPobaUwPsebDdiJivuqSr2v5yEepxnYPcb",
  "key22": "64GiCYwF6UPRDTiNexShsp94vk1mhq6crky4GrMv2GYzWnfsw75Ln9TyLUWWfik5Zko1AfobyUqDU1JLeE8FRfzy",
  "key23": "hTjsqUH9hNBvE9WRefKdAbzXNY1MEVscYJTW9jzeAKJGUBApAsWcn8doffvzGAoDvbTjSm3AFVQzcC1cAMfV2ne",
  "key24": "5esy7BWipfwMm4fvGcCfribR4B2ADJYBAFNMbFbssWNHydW5hqgYs25JjiRupzm1GkaqRNJYNamZfFzmTjdp7gHV"
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
