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
    "Quv7o6koXH22p8Admy28QtRnkDFKfn8Ky3nmHbANJWkebj8Yf1u8MfULFS9sDu6iDsBSdGhrgypKZLyfStgaDQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZfkSdgB35xjeafszyhGG725LAddvKWkLUfsefdX83hkeaN79hCJP5NN9s3zpCbd1EqBxsKajfVEJMFT6ZwMbRt3",
  "key1": "4jyzfEMGKGgoHQNUeoYsobvNebSgare6HDDuwM6wq6BZCq9iKp5akVVzX4joP4623YfPm1LztYRVxpU5aN2oHN2m",
  "key2": "47i4YVzR9fL6GkwGQNdsua8txdAsKHZpEwKjw7ifgy3Z3yJ8iSDF3TPynZeSuxTaPzKKgrrBpAiS6UN5oXi8k8cH",
  "key3": "2SA7PJHU71cxhx9PyyVpfnmKiiNJWZWo2ZnSDCfkkf63XVScR2C7ebNnZB5aD2qWTvjxo2ioeGs6pdk9gyUU9hgS",
  "key4": "3gt99r5CktzVu9XbM6hp6enqiPJa5UjZN6N1hBvGhBhopWJZ1Li8KiGrwHv7c32EQ8qeoj5X6EtYPuKEvTTaaFhk",
  "key5": "GUjSAogQo94SWt1uGCEbguRCXgVCFy5ET5LtBVWDy1dJd4hcqjbNfUn7btYAokbQUpFBD9fqKGVBXKAvSHrwPTT",
  "key6": "3jMZzUkCys8BGUZ89XEP1Z2AfPwaEA5pc6NcgvPg1P6WNEoq9eGjwuAsThoeYM9T6XNWz4KZqvEjMXbxgu7HUDce",
  "key7": "2eTCW7dMyfnuo5yjZpHyNA4uZxnSaQtikqxfbsucSYEC3BdRCzbaE5jozHsoqXVT7YxHLM2mSH9wQrDwmHqCX5Lj",
  "key8": "2gxLVQRSRVvsVZjLzMfBEMamyJdZWhf1AjY9TvGLRMLxQmCehF8VRMx1ynVDZgVmtPWP8m58JS58bTk2zvxKBgxq",
  "key9": "5jt4Jigmz9A44nx2SxmKScmPj6khcTqaG5kJDpteLZLKYSaVVpDpvrkQrPtGB2UEBj6GZ8u1K1Eky6Y4D2JRaaEo",
  "key10": "23HpFEJpW9oFnsBPo98xt1zfnQ7CuFktJutjnaYjEUPDv1EWdqQZLndo7vdiAchUWsWMtuG2u7QGY7XtZ8zx6MN8",
  "key11": "5cJHUX7FkhrxWfbX4ntTgdGDyzx7xVB4vDCRt46fS8TGKvjrHgNqz7YXHq6wbWYrfLuS9pes9URFc6EZVi59xjio",
  "key12": "QCC8NrAR5SLSLRog7rZBAVBFy6aYgU6VqYRmgzct14Uuh668NKynz3TRuzYLNnwXrthBuXK9Q5QTUhmcpXpnTVd",
  "key13": "5pKpacfagvundj46biCEtZMM8qyLrM76Fay9iK4mj1nKMupu1gXdEsGX1uoHJ1VVd4iXDxSnUYASDF9KdTv7BWxE",
  "key14": "5tgF7vaHEibuUd7DVaQffnEo3EBhV12SpsMTkBR9kdDzdW6Gk2LQrNLyu65SpUJ5tp63tzRjmhQH4x7UWTMiFq17",
  "key15": "4pQVsj4jaKZtjgE9uTgEza7YLCLMhsMYGjBzscD9Wa7BoC5pvDZWUnHFDP29eQedKm7R4WbvcfGG11G53LNc92t3",
  "key16": "cbSi16Z52Cn1ARDwAMJLyPcrbNjy24dcL7TqyxiUMexgkhgzciPCn6s213dqjSsZxrZ5ASg4jzhToeXg9vun56S",
  "key17": "5e6MpVjNdBYFDhiG7XJjtEpami3PwRxJBjezmxZvLDNtAgTvRhwTvGdKDcswn16vcT62nXk8RaR2ALbtUsyUL4HJ",
  "key18": "4Sj31HuyagbswgnGZqVZR5T87Kb1HMXQm17bU2quqgCcgQ6WGXVcTkwPJV1dcLb2zHf6Qq4ZMUnvZHPiup8mRZmN",
  "key19": "2ahFDiuyYJVFUE4J1jcHmBfEFGtYSyrH3zNyW6EjCV5nnHUBvGSSWzTqNmZwpkb26HEE7qrrYCkRb3UGvkSbX2nh",
  "key20": "36naqPuGJLTH8pvJhzh4JfJmwDxPKf8EiaaYdkELWB4PJNubKYdFKahSeBdbPayybhEuc7YBbTW2R6gLQK5WmhWp",
  "key21": "3mtyR5hWSs5hfCJ2MBVaiqP6C3Ne3MMXvgF9ZixvDHXSPHmvif8nUeapim2xs7YR8Te9m3ACyJ5T2kP11pxrZSNd",
  "key22": "5WfGJb62UQa1zy572NwgT6c71fibEL6NDKV8fgsavwcqPN3T6koapJiNvjhbazYxJAaTeHT8vUQw5GJvTn4ACxYz",
  "key23": "5jd7VxVemheXDEgZN1LLr14oAXPeVGsdZfgz5n2yajfoJjiH43KaXXwJstbqczpdJnd9UXJkr4iBw5Xja33Jy5gS",
  "key24": "5ZUFLJTLvFkEEL3H6aK4Z8pefKKSjpVwYnWcLA78aVvXQ9767PX7zcgU99VUDcRKzbKc3BK6jM2mQKG4XdfxQR47",
  "key25": "5Rha6bhxywNxrRNEunkKtp8dkr6HVsFieJ67VGDdToc7pn9kQHnNB8AqaX9HhHWEf5rNBJnGyxXJfd7TLvCmGD5",
  "key26": "5DxAjxgHjo5u6i8dwUgpPNBUAc5rhCf2ShQAPqLqHRNRvis58ddhRKMyk595bG7KEhyCxL6Qfws9sgt4b5bJFPtW"
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
