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
    "5aYTXRCr9CxrGF1ggx5mS8YtYwkUcMoc3ET8oRQKcA9fUM5BUvMXCxoFjdbbA9vsUBgjNBMFVULrC1nbLswyVDq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KVT6XsjmZKJEfagbmVoo9eUMfze4VJyZj8ttdD3eucmqWEc8v1yhtnaXzc9ZgcVYcbMXJHZ75RvvSiPS7W1KDe",
  "key1": "2GPZSJL3M76KfYcagdZz5V4oKVV7encpg8CtzVLfQmQ4Y88xNQGPJP3UM3Nx2BUWbNAd7rv8z6L3HFq7PUz82dky",
  "key2": "499PuRZngEP5rVeNQmuAznnDsYWsUidGZV6j3Uoy9XoMwAYShgkXW7PBQm2MrzrbzhNT3yrowQKycvKgkczSaRtt",
  "key3": "5QuQLxTAQGnLiJdgeGwW8bztgy9T6Wa6GNZminQSKN7iMYoo73w3SKwwvyS5dwQ31zJFYbsLHMzfeZQrPnyX9Miz",
  "key4": "2KPPQs9N41Mk7x1gKdyovvLC85EuWXupYxMx2mxpufrh8SH9WeWrPVDZPPSPAM9mgXS4TYkj5K7wu5JKVEyLWcAk",
  "key5": "3iiesh5eHSzfzrzNzbZ15VytYMAPqKJrYoz3s7qmYbaXeR6ZXr8gP31nVAA6iQ7EXuHYNp6Bad1TWRz8jm2mUmPc",
  "key6": "3b89TREbMFfZYGZ9hG3Xmbd7uAKb4QUq86QhTkRwbd5BpiPwe2fYPFSKMmTFLqmZebQyhRWCygLNG9YjaY75dJKn",
  "key7": "n8JactJ1w4PU6UXTMBTR812iUMrdKzu7eYHB7KtMu9RZGsYqoUXus7sxbhzog9cRXGTgoAJ5j5EN7gqnjjcC8wT",
  "key8": "2B3JpR4wbbFvUsjerFDzG3n9JytciYEELsseTZfXhKuea4kQAJe2JNinmBALBQC8S8tr7mr8rjZP3DJypTWWMuw2",
  "key9": "5GKbDRAK2Rng9h3PSrtuadmQzUsSquYG5RMRyfQFTkSh9cDA9kFqE2qs7Hb3usePwW6gnrM2jouuYJ3Qf7DS9MgN",
  "key10": "3XERb24nJxsXMcZELBgfzqepbD1Dik1wugJ187Jo3BWyeCLcvXTd3iKRqs3k9Gbh9K2QX119VmjarpdyxxrsCvkP",
  "key11": "4KXPb4MH9HJxCSm3nDCcE2f6cDVqUkHTLGfq1BCtKT771Z3BcdUAsym6cGN6Pfkj69dtC25WNWF37LH8Yo2KFgo1",
  "key12": "5jNS3H1i5sEJLB7XBX23VCcFFG9x9rWzy4zknLyfav91weLdtA2i9fF4ymBJmJKaU3sPoq1tiPmqKKjpaEmCJtSm",
  "key13": "53s4GLrZ6aoVav2Vhg4QSaJrJVyMfhgVaAVLVVQpfYDw71fucAVMgYLNfdHudTA2roGuwtSzisn99rS6tZA4LmEZ",
  "key14": "5UAVx77CxdT6Hw37GDJXQc3qAhHvBqmT23K7k4MGrMZ68csCrD6243uccAvpiBHvXQKDqnJmj5wZJxEwwbLtuPCj",
  "key15": "33h4h7QpkYvD9t5Gss672A2oJZqBYRSwPUWAf5LTWLd4BLi8Pv4VHyqF8dV8aa6nMj95kGEGbYiu1mPrDJaRVzSN",
  "key16": "676eGE4h888sBHNhseDdBx9opz2HTbWbnW9iHLzffCBCXrFiUMqjiyUpSHLhV7aFqSQNj3TuGM25nKQVj5ZL2Ph2",
  "key17": "5hJFwi1H9LtoPzAy33EN1fFosmAi4yWQ3DANEA9ysgpEpdQyWYYY3LkWU1xCdgMzmdHcMsaivtcFV8YTEQCJf5oA",
  "key18": "23aCYPEBXgY7Zb2qvvmYkghWuxcvK1uQDTzR7mHicUV78QaSAzVyZFuYqC4UwNyy7TtFdKVcqTHJs9QbNFUHutqy",
  "key19": "4YaByjbU6h4YVi2PM7u7hazwpF2jsRy3PzmgdRB3rH6JCQytPWb329fZnTsTngoY8mhYo6v6GaKJiGuqp28Fx45y",
  "key20": "2D7UsKBgmL1SVyyxLW2vq4CXkW5tDvpTkXKDTZJokas2cJQCsTA6aGgh5ribU5GAduj5vcZVRxHtt4XZzk4QaMAj",
  "key21": "ThQTxfF4eBhLX7RsPpR9SyHSg8doubEahJP9YiJGWLmsJCzZn9fFrPJmZYWKBtiKr7hQAHkrCRkENX1H48QGswm",
  "key22": "52unitsoJjy7eSV8Wse32VQhSWV6Mb2uq13LWCqWsStJRssmtJGU9SpQoQpvbJjkg8dMzvyeUbBK2cAuWQxN2SJ2",
  "key23": "3HB2zsg2HCyFuCgdDS8jwwk7S5EVrMGfDUGhMFyVupUqi6sYMG8kJ4mYb6jBbzWusjv3TTKMQMcKYNE26ph6szGv",
  "key24": "u3uVgWcGnAP4utmvU5qHr327NipDzLNj6v29zDVxA8gj4NMCFyReLBZqMvzwjRfhLC8DLd7wj55ruz1PD1PU6ZN",
  "key25": "65qoxmerPKWKrLhNrr88ig4WoJJQHd3vaMBSSGxQu41qmWdgbXy8Umhcdi1deQom7UB9BJx1aqCxJXQJTnMKvrmE",
  "key26": "2a5XCHdoeXgZx8BGNa35hR8XDGb3Dyh1UJLXeJt3dwDrdX15RBDt6B9sPxATvTiuovkgovqRjPHBf4MefBvH4Wgo",
  "key27": "38iDnik2gecCSZk2Hup9CmGyR26WdtMEwPyTdkCnX6HDPNTaQxySWZMSE3GvJsWAJcHJa5Lz5uNAt94DME9WhVtH",
  "key28": "3gE2uP86RfS9RvR3qn4WKwPdpu51HqsdTJDektRqYSxPExwy6ziKchYNpuwZxHHrnLmd5wDYA8Q8hAzKfZCK2KR5",
  "key29": "4qUNmtrT2wnQBLaZWzvRfQrR2bjwT8nGpwc5JYi74ZfphnzrsYY6s6EjmqSYrSGnzGrucgaKFQcrypLWEtRea9ap",
  "key30": "4b4P4ifAGjX3kPqhjUxcG8i2XHDnf6qeWxXK8HbSecStcHmzuQN6XgcPVpRgpJopfBWid9CS4Cw9uH71XeM5v96N",
  "key31": "46GofzCK48WFsx4eS5uUYGAN9yUSzvR3sGKYpxxQhTdQuNn2m62FFUDcbEv2uQmKWhSTPbzu1uV7gPaeRq6VNc1i",
  "key32": "kdngFV5RPg9A5VjLqps2pD57QU8DZtSsyDCJhPa2fkGYKRDxXwTyXNWqh2VAbrUvVCnEWKdkTQQJrJ4KCxT2nhp",
  "key33": "4enKaFtoMeV3yDqABCn9amA1bFHaAmVmawsyWGWs6EjQHSwonXCEgqGTD936bDNgDgTdN5knog6kCah3Z8miDPMr",
  "key34": "2F14edvZ5FyvuDFKGv4qxxxAhCyUAWXKGRX7qf3b5qGmwUdt7X1NrrV76Dw5jGH7H3cPFfQKJwFJ1UYM4JUfMzPN",
  "key35": "5KnyNTRSqsR9s6iDVHfkPxNegvRANQTTqAZaGU5o9ApqxgDeWzkjiQxdP4s22R5Fn4XB1ST3QTv4oXagTKx475Li",
  "key36": "5y8Z1fGTPXZJg5987eoKFL2qw6FRKtffmH7eP6gpzd4oRtBnKV7JkPCLc2xrvkCzPisMLh3rWB68J6m6QnGK7muq",
  "key37": "4Eko7JjLrzkLCDjCP5ZKKYdJMjFYreVRREQjSwUgjgFQcrgTujbXSaqkCksT7eRue8Gtw9p6JhcJUGhydxkH8XSk",
  "key38": "2AENsgUz4qdvoqG9mcg42CTGHRxPxEbym8Bt3NFyXTGtNsMB1eMWswmXXziLhFG3L11je7oLbCBXbH9875i5FSZw",
  "key39": "3nkwNZWq5L969LL4BHQGztmz3A4662rGk6LCMehR8tnk8pYHMo9cDgvk3aY8zC5qKeBUsrYzKywzK53oZ8dJniWQ",
  "key40": "hCyqHNFazwknLyMbJenwsnYDfPi3fneDybTJ5bP8Eq9oJk3rXBDwaiFDHXFUUud3dufrPwF5ku3d9QVM836zhZy",
  "key41": "gauaqsDGFRBB7enYnjo8AeA45GShu8U67QWZPxCZ7LvSeePUxFCtvRJf5Bb1A7Xmh5BmmskzGmopnE4EeVWizV4",
  "key42": "2Ds2Ve1fZL8QD4JDz7gXMsswJ1h2Qx12DQk3uBzqqABDqGtkx3ZYzd22bpWrQir5PWUFqrES6J1pbjqTGRyRrSC7",
  "key43": "4pLLcCBFLP7QVAxYGWdA4KggKKPjZeY7M43ixDuxf4UGxYPq2ThZ3fpYCCWmaVDAHN7T1Nd963xxKsAbVcicmi4Y"
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
