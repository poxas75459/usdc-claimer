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
    "2wEWs3ufkMkKv7vuuhM9YrUSzwnXmBGb2kE6XMhc2fUXxxxKnxahcDzEKEfFqyPVuKj5GUq5Aw3mjKs57m4XR7uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zN9iTRegGRBzVMWko2DDhwE8vwqPvmcAmyzVdc4fzhJaUDpx9B1Mc5kRHvpf3HVXbF6UwaFhbFdKXkMmAoMhheb",
  "key1": "5VeZTakaNdbf4EPqJUMi8pigrurtUysz1EnxVq71AjL9opBz4Y7n1G6CfFeFK1UL7xj4vnuSihcN6ebLNMEbu2F7",
  "key2": "23RiawD2jz9NyFLpHezP8svrxyab7F4FVyfY7yPRVb2d1xw9XUzkuxhqJQ33XdWobrhixzYR56q9xyvJTb9pJBqV",
  "key3": "2F6eS2nEADDE4V8SGTuhiJv1wBXXaCmuhbykLnfRvmkwWtsMzkd8Sk58rptr9zJGFTbeWhFDfwPxT1Fuc4Rw9Xe7",
  "key4": "3F1nRuKo9nDSsjH9SQmiyPi7B8ejL7t6AHidBKeBJfRLGQWJ9efACD2rfu9qx8NVZnc8v4REMhUFZ864wTANYTfG",
  "key5": "2K5cqfzBSoXNvrk64Aa9J57okXixTQdbGeGabjfTYo4vSqoCS1if2cMdJXZNTSPTR347YrTpW1j8eTDZ7B9rEcab",
  "key6": "5qhkCYd4auePR3yyov6mARG18eNa1KUP5uLgdGUZET4MXvGxerT6c2hYHwQGakYzRvKHHvgbLZTfJogE4JisMvie",
  "key7": "5Vwwe8v3DyhKtYs7S3wDbpcPoxr2YiodNC3hDWpg1H4f9n8XstNpndo6NQGoHSj3XJezNnmfqv8YzstcSwMLj3w5",
  "key8": "NBm5mMX1y4ZECKpVrXQrM3CPsM3z8L7TSM5v4Sive1yvMsvkoZDKiHXohG7683NjiLVVKWX8ktUVUemM8gokgTq",
  "key9": "5u1acnco8wgmxVv9FA4giGZhpjnpW4ipGKbmXJsoXfj6jsUY9oRhUgRY25yxVoGzdaWtntdUNpQ5nvtcGA81Bt9y",
  "key10": "21BFbXQ1W3RJWCfHFikqkgoS3njwwGApfPDBRJbYw4rDapcUFDHuVo2TW3hY3d9fAUGxnmdUjTEQDM4p4Uo7XsvS",
  "key11": "RSrSsS8yNEMh1PaVDEeTJ6Jk1sQ54CzJqUcgDLeZYzqiWjp1Wf5NqrD6Ux14JYjeQ68bshfcXRtiz4rELtq15sf",
  "key12": "4AcGXWVWpabHSiHJzRxHNogLjDRUbKZ9V4U6e9ZMheencmn4nr1GU7WGS6TXksUREKjemdmLD18nkcY2HyjXYGqN",
  "key13": "5Wb4zCXdQqA9XzgQYSNDdYV9965tUbV2myvXWraZfydMwuy757aMZKuasX1davW9RapFBybkL4a3zC1VUQ5MtGjm",
  "key14": "4Pj5J1BoJPMbf8SVLSBwcUQKUU6LjY4L4YqcSvK8TzK9J6AvYJ7skTknXq45jL18ZDNtKPdSbyCQaeBBbjgQ1eop",
  "key15": "5EWT2ZZyXvV9nbjB32kWgFQV8U7Z2Fx7GLUDMzZefNF1SDjPa79PCcUdDWoa8rrSKK6iBJNrkieZJsD6ba6YAW5x",
  "key16": "ekwAUF275o8eU2BC4pVHRZKLi23xMRo3afeKApWLbwBYQJ44gyXzDZTSXihAQ1BzkE6pdq1f7DX5VvMqrQynrwc",
  "key17": "7aGhN6WSfkt43daZTzVQ6HfZ3LfSXvkbG86QUXnCHAveRAS9DkeQRMg9xVDGeJqTiw1qSaxQQYkZTiBUKAJJVRe",
  "key18": "23XFgtoL8MBrr7e4YweZ8tFN9owW1a5YbcogZN7SC7v5GJYr9c1oUqBihmnahbNNA1epMFSJeFFSuGzUxcKzq2ZB",
  "key19": "3jr5G6GSDDo22fYtvi2gTf7kbhrf2mqagRTpGRxvZiimDfsAYqkVmd4rehyGAxiwTEWhXdRBdKWkJA5U7563HRhE",
  "key20": "2pNNNG9J2JDGrHMN1j5HS8W26KKxGhiBAy4v7gtGYMPNrEkdosingsbrskvNuXqiBdzfM6KS7XpafqG7dbck7xJg",
  "key21": "2QA2wCeKTDugdjyydu2i3ydxoz4F3prQGkdrfJbeSqSJej36tnGU9QD8QcuzKj5sLVz9tauNVjkPVQ6RuiuVknLL",
  "key22": "xbyydEpL66UHXyLGMZjKnwqfPyoqSDN2AJvT1bUEte2yJMpfV5LbQiNf8soQzoEG9SKM7cPQ1EYGmrNdZ5NoXCP",
  "key23": "vorHiqMYrDf52bptV3wUpwCCv3Bok4Kc6hGfnY2WkhvEZCJ7ECpbquisvsHzjHrRSN45Qnycv2DpzGyGXnH67Kx",
  "key24": "4yurypZyRcf7x8G97mCqbxu4WjFb8emZK4KTqxVPSztM76L6PMKU7GE4dE1ugKSNDPnin1QY92Qevrqti6JryBbu",
  "key25": "4YcPgdtpwkrCD7uMRfembUwFMzaE314i3MaEzM85ZAub585hiH1kBWn5YQvGisB41XVnN5vRknpGwZNhfsvDW5ym"
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
