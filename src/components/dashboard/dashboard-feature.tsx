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
    "5ZNfoctZJcHUX76DwBfUrSgXHieNAPJB9bB2rKbuQWi7nkKXPp7awLyCtHiutKLeiMndpvpytrfecpuAyFLW7rHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q96QMP5MFxwY3GHNy25yx1m8cJmRMFQQiAsSdug6auvhJBBtkP7mz7XKmbjjPKXf6XtoYHHg8KSRt7NrMVqBMcW",
  "key1": "5zU2hTkLK5ZpeyhUosQTVeS7c9sAtg7VQBtn5MvpxDZcG7sfPf4ALYHSjtLyPZdZGygiZuQbfdQzsvWHHZAzJ5ch",
  "key2": "t33XQmGkKuKez9B9EWJmCdDx74BaqEWExqWXruKHjaMpYVrPYS1Dj3gKv3gQhSaAvW6BWHennVpv8xnoAd4CRUP",
  "key3": "5UWTYEbCReaMPWsybsy1ZD9gQuzNsddqRBouKaxQeYicCSkVFgMqrYKYRw4yUMJKYzWp2LaBZzKqrSHKDCpGmuiy",
  "key4": "3yDXhFAkDg4FhhJVfgXn4g9KAN8vTDsbBivfDHjx6ou82S9dk954HzbBqexjU9hr1RNKkWruYdiVTLzbBHxjyVF7",
  "key5": "56XPJbA8GgkmFKSSudPJhcySSpTD9XTnHMwqDUGHxwiFrXAXXCBrQ2ZXdRGwUHmjLEGFsH3Ls8hWCvw5Ru7LRwGh",
  "key6": "3hNnF1NKjfktVk8prnaRnWYepQfYgQC7f9o7fD1PtCxxEf3XxDuDFMkPzXw4rpvByoCuxNauXiJLZNMq4PJDLeTD",
  "key7": "21eustBg1kVd1L2qMQwsHWiuFFAhbii23KYEfXEESdmZwFihRXePtQmS9GrU87Zkdcf1XtmMvK55ShitimvHubvj",
  "key8": "3Q6pwn6JZ5FgPctWEbix8gbFFz2ASeU39WPghvWcCZPbpNDZPgG5aDTwrFWMbhktEWXxNHs6FzT2HssK95YVqq5D",
  "key9": "3YNnttZDWdZCxkeJPQ8knB5oKHkKGzHbdce95VSEcEMPVzGSEZ4mUjnhFKdgrTbxvaYQxJYL23uYwMjtpPXrVKS1",
  "key10": "5cEg3trfD2NAdX3pwFXwG4XA5nBJzxRVQcKmkfbDzxLv6NDktgzxVxZNQmECDVWzvduDcLVJ1rhLPvX5TUhbLBQw",
  "key11": "h9UBDh2H6qahjBpTQY3Q9eVmzJgttzn5jTaGdmpZvKviV1Y516Wvzam49B4A9Ttax7BVxgShcq81BRDxxue9kTD",
  "key12": "2QG3Cec68TCnYeL7ufLvuZHgpnsrfDNmaTgWnh4naXN2SqtGpmJQwWST4ub5rPgEG2dRtMuoQvbDVsUHTjbeo4CD",
  "key13": "4tpJXpdfuTeF3VznPvbB9iah6s3g3xRaR1VSNFHDX6bEBawBg9ufCKBMMAe67UGtJg659bS7ELtfWM6zeSh4H8L2",
  "key14": "4AGDiZB8wW9vNELGQTijaRYXJtihR331rSbHkWYzee3yicKKEy4pkMGQFUD71BmW9J6Wkg2txBBq9Z9mTKbBjcKd",
  "key15": "28kwXcJgGQqS5bDmqEkG48cFpTHta7vHNAjSwa8fmzQr5AMyJVuvpdLBKy1s7RsAyJ3TL1GY3ypaYXHrY5WCaWBB",
  "key16": "22fDMKjCAc3FQ77ft3tEmFC541PcVZPCLzCjzbqr7xh8mLnyaTysH4zQtyc5U2ZNZu3w27zcEzvYSd4nWh27ZLhP",
  "key17": "z1YhiunWEJk4VCGSPDDPYEPqVJKtnYFirunEcb7iCviBsuRMn4mSeYKD7tFg4Jw2E87BLUG7ZhmnCosLDuWj4fc",
  "key18": "3sCDGnfbDx5qDHjZCqURnPvVVpUdFwdiQn3G8jHwvVNB29eB4t6LMdLJ9V1kJCbdMtZ9n7aTZJ2z1vqrTRDZjwsd",
  "key19": "3nJE7svLqowK6gSKcpEPxWRdxAk5ijuTf6wgfK54feMZEtAc9cwMbAbXLPSZ3BudF6DKyosJKAmE8fFRyboCL2rK",
  "key20": "3EbDuUXZu7EfU3SEVQNg1Az83prGdn6crKq86sN1VWodqwwEZpyCZ3LP6txuHgfMptmohgFev2zwbG1C1poUHQXm",
  "key21": "5ZqNE7N7HYDJDku3ViH6Xn4CBjtXvA1tKsJzzL8TNxmS2GJWa8MCHPX3rmtRMnXBRcMFkz8NswivX3zceL1TGujy",
  "key22": "4oz4DfszyKMCJJZMb3k1TDzrPZDYZXUJ1bhqgjPK5r25A2PHrbtLK1GMSGTYWojJjhvHbdmrJDWyT1mvn8aRbfih",
  "key23": "2GxMfqopbkvT6GLJDhZ77FDZed52wWUmu1B7AQKdDDSomEb4iewoEmcAwAF46228ZTMyHhiCs9F2p6LZj95EQHko",
  "key24": "2Y2XqfbuoLZW998SVNMhszeF7JCMHjpYBEj5sLf3ehyvEmE4oFKMZF73jzKivrRu5V2bYNZQvN6A7hm2oQqPm4KW",
  "key25": "4YyNXqJZWJxqS4oKZfE2UZeuSgPKHRHtjAL8TWpbbgkhEPUhP6cNsbgFvPiBT2wpKzgLLShbK2ktPRQQTgtWNU2h",
  "key26": "QK6pn8JUwhv9F7nosAwBXY3S3mfeSZLt2rJbVfY3bTjekgywFgoLqL5ysfJprb7pTxgtMwddMZzEsuuF7pt5tj8"
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
