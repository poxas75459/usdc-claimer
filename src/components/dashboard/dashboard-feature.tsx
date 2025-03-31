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
    "44sH7pN4Gy1K9gpfXJGqGcvDGpfPJKmhMTxb84efYYYQ6mPWCer1FuorgZovUGNQWsSYidA4LSfeewa25jUT3kuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSuHem8ubU6f5bCJm2zKW5V7MaZvzRJwovLNj4A42A6CHDANWYZzWkVfBtpnbTmcm1pKTbCmYom3xfB4SVqfj5b",
  "key1": "5PxATpUgQpX1KwwcQouZPRxLREVFYfy6UiDUdzyCyjPyvmf33svFPZ2fnjDhKtQTr4FRrPnBrDV56NhfwmoT6uhP",
  "key2": "5m5GPkzBJtdisLKkHxu2aNfHFwq2rcn3J2itK9japuHr4NtFcdRrvxTAE3FCyhaDVg9KxcC5EqL3XnLNsta1KqwB",
  "key3": "2Ur6NXhe8CgczPqtdkMQFr2UvtkraYeTNNLunCu6yFvZHzPrcp6CziYW51toRhxeRHp9jSpQuWDXergo3uSpBAXY",
  "key4": "39Lfy9vxvjaxKPuo1EAUtdf7M7CKq5YbGPfBCYYzHRtpJXkUytFNqfiRbdCz6HP7Ct14z6eVc9AuiBVuvmJDPGvc",
  "key5": "nCwVK76EhvxMdTmpoZx4JDvPvg2ScS98HHFhYeTu3HyLsM2KA7gBvYpU4iRjK9wXiTzYuAhugFS8Bn42VNP9k3a",
  "key6": "5RVaoJJDhVyjpyyKd7JGEWBfNsYJ6xWi7EadMJnVqgxyHvsEKRPAyUSVawa9iUzPgXNo5HtVPmNr4dxKUaERsmP8",
  "key7": "5141PeP6sxW9Yh2wczv4PKY55yUx6cnWn6hUo6FezN8b31kEpY8HaQxSKte3djABFvgrVb7qc6uHyR1ZxLVWgo72",
  "key8": "65xP1bL6V6UcafssVaZXSwDnyZRXBQUWgp7pYW84ZYwNGiww2iGnPWWbRyFyNY817t48hg9x7RuD81HQEbgd7sNh",
  "key9": "geK8J8R9riSqZbWSfGTEX4Z1NnUyTi6e38t7BqeutxnvbadnsU4gNJHZb8tjkBuSBnenrwnsj9r7b9Zj2CGSnYE",
  "key10": "xGpmTNGuab52D6fVrRmqS9dG7pQ1mtU9ohiRhvV799bHanR1Bkp13dGmTRApJvKebFBsuFUMbh2CP7W8PHpeC1V",
  "key11": "ctpYfC4CbdsiSGLNtRKZAseeRCtsWxU7HxryRowmmmvAc2FPbnXSwFq9RNL4igZ24eRWG5gUgRp3aGxGwZoK2Ta",
  "key12": "5kPXaYFhi77Nq1ivptXDRjLD981FF9RgULL6AF3sByoV2brMHuC6yCDqRy94k4VVJsMoSupEbjaE5zZxRCBmBxeR",
  "key13": "2RXMxYFGc4HMQxCXKYNxLQTVQnJjpnwwTHzRRJTKauHxADaBzdew6EBA3xFyChBLy6TGgDBaam4vZgAwquearJe1",
  "key14": "4stWLG4bmoAJ2eCegrJJs172saAqyWV5B77q7LZKDkYS8qyZxfSv51spJBt8ZrMXnhfcCsp2aKdDDBj7FS5KaCxG",
  "key15": "5ExDFQEDRf7zC8P9MUTX3KLTzp7wjv9YoiRt2po3KgPzwuvCzXyqtgsdDzx4ZLtTTRMTHd6msfZa9q3oepkJkAdG",
  "key16": "3BJ53shUKoqadsvubVRPpMdbU136qBkhuUXo5VCv9C3Ls9qMX3j8pycgEuhQjMCgYpDSM4tSfMin8H8QiVF4o4BJ",
  "key17": "4jVoYhTAUWkvY3YyPYVH7npKBqDGyJwjDNEME1dXXjHG2kEeYdVT25bbygdWxvod8NFYzjdb4Adm3miyEQtWiujv",
  "key18": "4viT5DXU8RJvv6SZNoYGpvzhq9JkYFf5uvCyoovzXxRFywCK7RTdvnfd4aYCifoEDaabBhD1kxWmPqaYXXssWgfA",
  "key19": "5qiCkp8HA83MfVXRvyj4H5QoXP7FPS6sBEJCY9bWgtMvtS6atFcXFFiPFsPAZ4oA922ffNuoxvRX6LeeV39cgH8U",
  "key20": "57DGwPpiqwCYeq75RHPRVrLfXLjhZBNCfQpnfESAEbzD9xiiG46D65um9RgQXhYAAgBRzHE2qTE5H9WBf6yqo6sW",
  "key21": "3t5uuxmikNbWtx2475HpNmyMoSCKoVZWznSm9LMdW3E499wSmRFBmDPVDyqWJqjesfrWrbQghcmutG48poSbXYjg",
  "key22": "29e7it4Cj5oVns2AaZqozHMiWKf16Y7aY8yzzDSJRhb8gnBh9b6DZXVuXUBBFc6r9RaftSfJyRxFn757ZsNo3mnb",
  "key23": "5de7fWE9Ta4jbbCcbbD8fvnZZK2kKp6yth9omfi5AkYt3WvMF4qhZoA3D7dUHbgNHof6JoZwLvL9xnBQNa5wHReG",
  "key24": "3qWDaGzjFcA7Kkt7xng6gdjWpGTdeNz9a34PcrLddJvFW9R4GGTKHwLZCU2nEPHEA56JdQvNPSFaq2FH1HXmYJ7F",
  "key25": "3UKbQjGQLTZnMHZuf2H8SLKsyEtqSiLdqu69zSA1dwu7qJ8sioDfYB8ishct3Kp3EhZo2SP19EYn5SgCL7twoaqT",
  "key26": "2Lt5a9PCzv6royDVXxhYEx222jioQ5sWWmPuPPRQDGsMEFoELj5n4P4WuzWFPRVi5ApiUVYJdbs8cC7BRC1UH1ip",
  "key27": "5iqDBidCxjJhxPkZhCgXZKBEcvT49tsujCSPDpjdyB1nXDaTXNzJRUnGT94SyvAeJNc26NedMhCwgXLJ6XukJ68i",
  "key28": "4v37hG3YKED6bqTuPZGEa9X3zcnWenEYnFe8runLBZDC2bDPpCUxmGCTf2oDe4XsRjiAvSPdJJdgLqVj3qsH8iEv",
  "key29": "3LefuCb5wJS7Eh7WN8BNGrXhmQK1RbCSxXnWWZrCbNXZDK3fdYdWjNqwHtzMNycPXiWtHmAun2C3sFhnxQbAJn3r",
  "key30": "3RiiepuS3ZirzqWCyT4W81oh3ErECxcNZ4P2tM2eCfS84mK2U7udYpTnWRP4wh8bQ7zjRmJoAHuNQrKVb9dEWGsb",
  "key31": "pXK9rBEvXUf1u2iW2ULTH7SHoZkyA8JMAevQFTCKe334Lg4JYrMDuezedS42uZYwuC9sJezKou6iKXHMQ9HkGqE",
  "key32": "3DWWPRuqxmdNEPk8vhmAdDgL213XSX3zpGPx6Wiaou91k3LJUwC1NxNbd5ub81yyFNWFLx5UTn83eA34vDym6FJY",
  "key33": "2UQTVJTctGTToHTQvRhsjYq3YVfc88bLaLBDgwqGiBRxU3wE6wVkHaPnouQjSnXCkbZWzhvoVs2oAbBk2D68Ef4f",
  "key34": "jx9ibZv54bnu9dFhZaDCKgmoP31C7vdh1EVKzU8rziqpJLY5uigraMF9ru9XVAfT1qjnU92QgGU41Q2rWN5s7mc"
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
