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
    "4qjoBRnXFgUfjmHE6bY6yQR4x72z2JrRUXr5xfb3oGVfNYp5JE6rKCbdL5swdsz2WDtznyfrGbf5V89B9SJv48b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GccaNjeLNDuv4gQD7MpwZxXEh8NoXdzYYWXYGYhY6tt9o14T4938hdHh9SSQ7HZPv6x7omw3EUZ4yHvgQkzPTDH",
  "key1": "5Y2dq3oTVk5WnYuQeureXhjEatV4y9Qmh4zvmYd4eqxD3wu7yJbYKfhkDGqYEziqCJZcw6EvjF4bDZxKq91d5m8P",
  "key2": "bGnPbSapmvPmQ9MLVKZZW1HHv4E1KDGLUL44X9AskL9etSfQh43tNxpYGpSsJjmEVRd6mtSwURKQcN9m3mzxxTo",
  "key3": "5CvbYtJ11oTN7CaGK2baoyo91YQFCrbteTqc6NhUz7GvecivhXfUdMpxQojqr6UMun7CHqZZ9omjRPaBhiCGL6vZ",
  "key4": "2nLtAWeHW3wVAMRjUtZ1PkP7Mra2jWgHH46w6mV2GySnRPxNPTruSLJZY9ND1fjXYfg57kNnc2LrBBJPTbt7nSjR",
  "key5": "3cWAkLiwQ5DQ7JasSKTx8H9MWGvMeaJRXDxpcYQFqEwykHBB7APPFB4kQLuFYHkF5BhNBjnocVofR1ahwBz5KS7b",
  "key6": "5NkssRkWUcXncGyZkz9RLZu6p8thXfMfEXTXBWk1rXcw97b943ZKTk9rvRehy8EJ9boq4cpGSDarXvesDR1QT6kj",
  "key7": "2HaUrUGRLBkh7UEitbtNcZMKxMA4ppnxy914zbLHSRLpaJtxeq3doCyRvbwVSm4p33ZPkJsaKL6Hb3sXvsewBKpq",
  "key8": "d1CtQ12eM54XQT4k4zs4bj3CxNZ1xB5157CGe3fp1Es3Us9F9WjqUJVhHihre7TsDs7ksh2rYTsFiMgqNvwSucW",
  "key9": "2VXQwVToWFpwA6s5PGywspPQ3toE3MMcuvozoB5DcT7HHc9Tyxz3A29CDRui9SRYjEfc3EGPtZ2RQsj4UUsL7MBB",
  "key10": "GRtEXEeNFxzPHQb3TNy4TbWfxtQWSaH3Foq8FNMRz4VcTbKXPvAyiJZubDyFK1mV7P4UEUVFbG3vVaBACQE9eQ3",
  "key11": "4ZpSWGtskaq7DemxsDLjL49jTZQn5GaKMVnd5RnPyCHTRqDGFQy3CX4dmdWH4bSnnvRLh9rrLNL6XzDnKJ8ntpqU",
  "key12": "5KMjByDePYn5Lbu7NKBoSmsW8xz2Gk4ggNaWzH9ZbgKHXiJojS1VpH5vSM2o2P6Vd6hHzC3Gtj7CTPnxMGLngtAP",
  "key13": "JarsA7tzPuMbaQ19zEp83BqqFBStvPWQWjSDVYogtZZh91vnpXxiZLcChMFq53P1Fatv544X32xBKBh6mLNY8zZ",
  "key14": "3qJAbaE9nFwW29m54K8dc6ZSj3JSumLmAZgG944R2Fc3FkuyoAoPWdgn3i6tPdsrJVjk7Lf1UuBwpQ5VirRgmW7F",
  "key15": "4XRcGKTrEoMsqro8t1JvVHoNj8bgg9XTWRdBXWqDSTnVJaDKtYhMX71JeaCQG3rmMxmuvjvkF8zQPskfxvAnkJLW",
  "key16": "63aCcJJvBH9KftWZ1PL4fwvfbNGyGCNtp7niUSU9x6NwFck2KhS83mdDP9ARNiG7CT5JRkJcN7oVMEevWE6nJ5mW",
  "key17": "2JUR2SVS6uN52wDt2y8z1Zr5tZXRZcxUVtYPkZqPShDgzca8Vfb5Xg9TJXmCgfX64vX7jpSXoFcfdrtHaEhXsa5S",
  "key18": "vAuKYnzVitewUppVym2WbcGE3FRRR3nxPY1bbjQ727nv1bWf7zkdvD9yN7nrUBnuKP4YQ2TWKPEyyu9N8kYVT16",
  "key19": "5i6EG33CLDs4u4HHwu35WWcZ1pm9QJNtBu46fPBouEtNfkx5s6U2oPQxABkuy3ECygHkiUWDWLqq2zV8Kbc5Gnsv",
  "key20": "V8mihUSpVSaePL4btXoi8fgtQR1ygEQerTLwJYBu2VfbbRNbL2FbJMSQDLwwGMjTt2CvrmoqN7bMBDvtnJGWDdC",
  "key21": "4p5SbhETFFWGUS2U5J7w8RVDC8vqzhnTXoos4kP6WAzrw7JJHocijVmjJRxQDnqewVotsicT87HyLuQCZ6sRL6Am",
  "key22": "3sp3ppiii1Q1ZfT36CBRwVgzaf6RAokqq7uzcUnC39JYtwNQyLSH1iajAQwV2Lgantb6gWRQG3HrhJ6wuVTXJZwP",
  "key23": "34oAP2kuTbGe8pLUpisWLWcr4wWG9uFhsNU5RXWEvPWDn8YMrwvtdBrUjBeHjrcz6XtxcYNEn5WPSEde8Afj8A2P",
  "key24": "4MmUf8bavMXSVqrcvehtPitkvbTu5dgsVbvUVVj8hZsN6CKPj4JjhYbvoP4R2U9qRaWXjZ4RiCJ2ZJhk2joqSCxx"
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
