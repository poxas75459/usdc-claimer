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
    "3PMW6YcTFQwLWEbnka8DD51QjgNmNsFZpuPQFz9tnmSoXBAQqyiuJW6BBUAQDDJWKdcmHsrXBRQyeM3uhADi3GEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vj5rYwUuNEhjbF4rp8d6rtAbW7JWCLsb3NAjKZZgRbxHNaZAbNTLs9bFgGCuxUBGC6ikUrs2ijUSSWxYzbnJCLh",
  "key1": "22kGqi9ih19vAeLJrcU4N5355v6psjnmDMgpjFBUGfqHowSwdAH1RtSBW3gQfB8RaydejZ3uiNbyD3xujZgTMEXE",
  "key2": "2aJaQwUmnFenQucUj388JzsYqQftTDPb2TsXriCBDHqgtyHGcB5M53GQNxnyGuSqGxWMZeRWXHvYL4RecE7tEg3V",
  "key3": "AkM2C8232WJdZNCc1UYi8vVpkP497dQsibYsaFcqc4BYZYfhoNPUxAmkTS8iBjVp6jcZgGZV8RRwmrU6BuWsnH1",
  "key4": "3UGXBndLnWfPQaFqczJjfG2jJ4kyPHAYA63HuKqWiiDXxxPoMcrcJqVwFKLAhh7QvbyhbJrZ1x2iAmhmNaUv5PxN",
  "key5": "3y7ojAZAzJNaGt93X8MMoHt2F9Vkx5igLh9xDRF3cKsawM4At2oatxBSfDkntyM7VBiVULeB6GVSW4J7Fd6s6Eg8",
  "key6": "2Gx5WhweRHDao3sVHws7nsyaqLWwNZRxj1Gu5T4rLMXGYnsCYgxWoAnySpWjq9tq49bHLGT8j1BTTLQcZiEh3ubM",
  "key7": "4V6cvF65yPVhQGuH7ASEuXu3UALsfcw1XZDWt4RrEyhdiEnBamrPpf86h4Nd769ASzVZYgBv7R5bzhYrVmJDWvU7",
  "key8": "2y8NL934YsqFx9i4KN37i3bC7ryyn1cpZYnHNDmRMDuoU4ZLs7tbqqH8uzAqjjFq4Z96WpEHR7dQJ1u43jHmUdsw",
  "key9": "3jjG8haFAGM2DMALx73pEPiUfbJUVemqGS3AmHg9LukAKqwxQkRJayqufH5U5D8vqmDojtjGmBECgqdMwy1stBwe",
  "key10": "4sjhBsF65Pzxaamfkq8qfHrzBshttbQgBi3zMdVsLwv63hZzmvPwdAMjDuo8x2wNiVbCi75QFNwkja1p1xstkxen",
  "key11": "2t82v94ebMKe1g7XS7yMLdNcoEkCn7jFFAZB2miHsWzPhbLoe8o7mpcQYGHLiZ4LGjwQ52QqhN8kkMHuj7X7m5CD",
  "key12": "235AG2PYsPePkWvghb8hAM7YgpfRESfC7ecqJBxVNgj28aV4nRuviyXT8Y7qNLcLKsq7UcQcDnfnD5BHJu5Nk5Ht",
  "key13": "2EuvXScDnVJJemupEiyuhQX327fiaQzL1j6hVQwRRTmwr83mqJ4T3EkuBdKKBxU6s6w3RyRKhaFsjtRUCw7zeFKZ",
  "key14": "5mgajMnmpJeuq86aCrfLBbgwBUfyDoiy5ZXeCoE4U9f1HQ2ptNVtDqzpqhFPkqbc4DC8HoCF2XaTQ9EC92seacSX",
  "key15": "4HKutuNVXmAKbVzFaScCwxt4rRCPXLjA1Me9dXLjVHcbZmBCtDFfbiBhYrjc522DBKSs5CRKw1krMyfgPgu6ija6",
  "key16": "7LCSnNMw2PX95A9cJUnMP4ti6CZxkBWcH495NLXpX4qqNxPVaQuoUWWLvo3KfwXgRNwpG39K4PJ94JWFgVyjiCX",
  "key17": "2GksC3WTPK2EPzcra4FNkwLsfGPG371pHBoDf7PCHZzgS9xUr1RCtu8prY9A73BGqjVVTrbuK5YhWeTFNWv3k18n",
  "key18": "WBEubYw6pKp8aGukadbnty94j4KpMViKXKAMB71yiCGonFHuRHDTMxBGXJAarKonpMaGudzyunviaYB63C7wuuR",
  "key19": "5Ykf1k7k6BassGLkjyJkrhrJqbaBiUG5SwVmDxY9fFsQSoKoABmVcKQ3cFtfbsGdeZ5Znem3j4XG5QLJfG4BHRic",
  "key20": "AEUWdCzkce7bBAu7BZuixQrxrRLYBwVFVhnuSTM3wXyujgbnHPAQrommjA6Cg48HnHGKxC2ibaWYhhragbrzckD",
  "key21": "A93E9NZBujUTRytp8xUy2S4Jw5yTmRck9azyesCz4dySP7burRWM5eSGGT714hBJ38dSxEZwBiSuQQ9PJgFyLgt",
  "key22": "2jcXWdXK29jH9U59Pn3X7wQeqqvK8spprHccuAnqwHYdHnMRXqRq71xckKGmXFxvnkawSqBrL8eMf5wT14v99BL2",
  "key23": "3m7C9Zurra3xqeMYZJnwLxxFtHKLtub9R3rG4qC4PHquQWceFZbhLHjVpwJtBk93vf4QnzuCpTca35eQMUX6uNVk",
  "key24": "S8csxB7cESonHNkaTraiyJMf4kPU4JaTUdVFCVMfDSKf7Gi8ziSCoYmPyqH8D2HVJLTppKH3irXYv52n6zmgBuy",
  "key25": "2TWzmZTWWKSZPfwjjnHFqUB2cFPzkcbnL3KPCe15oVixFcxpgKFz82svRaAtdgf9v5q9WUsLQmMSwe1bm23AzGoR",
  "key26": "4xX8rzCySLnCTxHv4Lq2gcs5ZmhqqU5F6qDQi4zmnH9fbn5BUZ9iLA1kCUu47m9tWADHXmVsSRomvqpiPdR4GNik",
  "key27": "43rcBHuDZZBstrb8SbwSuLS3ytn1dQs1e5MRgbVSCLmWzMZsLPGzHJDGEdsGKTA6bHmdRgNWyqU8oz1NKVj9narx",
  "key28": "43bHrtGQE5y8K2jA7WH7ZG8BJnTxe2qQqHBKnmfjwpsgsCM9UokjsCzTqny7LNLpJEnySdpG2DUrriHBgoZ77BLf"
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
