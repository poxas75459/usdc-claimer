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
    "2mPfqst3yu5twxkpbGi8SGLQkYSsVvS3CF95wVmZ3WEo5kEusfLRVBT17YiWMunSnjwNmtxykmiizmnZP2HaJEZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KisUjNQGBJ9GEojmGAn54MKU3sYtFp8Sfu2LhobeMMr2xsB9gzyZTyk78E4gxCNye679c2psASAJis35nfKdXq2",
  "key1": "3bq3CHPWUDudB4m8hpCUdZ6SR46p1hX1vajSpRGm799tddDYyeJjCJKdhQowbPUDfXdNpQdUnoR2RT3qeDRUahs2",
  "key2": "5wUNKpWtp4EGfpG7dN3FtZR498yMVazS61f1945gr4KAPTBZ41JU3LNhxx2e37n39gatFVYCJ64kYd4Aw74Q4EAc",
  "key3": "4U2aohvLkuLxyQ2tS51VzETp3qneenvURNQSWmSzL1JkbYQCVBPKeBHhYQkFAXBtZ3PQSWTkp7MSdr4XVQneaNDc",
  "key4": "5mRtSvBwg8cWnaSd6weg5usJ9P5U5k4yLtBYWbEHGoBFJhgQWp7QJUckSbFLfahZfB3RwUwaotnkecYcSc5SrCQb",
  "key5": "28m5217qzr7EwU9bGHNJ5GYb7bK1u2yqSFJiH6Y3JfB3jNBJQDWXtwgoSrv4RaYGKwn6Mz1QMhoXEJf9dwqZcw1m",
  "key6": "4ESPWWpDxk4Lho9A8eQdzYPWMLeFkzwHRWR3QD6ibRdw6uESH3om6z4C7oBuH5bBUFJRB7w43JH2EXMbAEskRC37",
  "key7": "5BErtx3bqo8SZgv8Hwj4wHeZh2FeJwHZRB6rGKoAJL1D87yq2qvj4mZSGWQxYfsH6HdrEaLYZkNVThRVstnWZi4q",
  "key8": "Ugz6Uj3i7FBrTns6CAHncWXWa5qf7wMmDRwm136p5AEWVfkUaSgwwcJCJA79AQ3uw8qvQxQLZ2GN6RnTzL6AkU4",
  "key9": "2LFygGnbBQ1h4WEeLeTY7KsMphRb7wejzxLoe7kqHiPvuwi8ojUMQZcBp4Ynzg6fJQyNeNPmmpHtw2hCJNiocNoD",
  "key10": "5xASs9HoNnfkon6mWxRxchf1qyageEf6PwLk7J3G8v9KJ7SwUNKL9uNSrbtHpzkpKP6fMWKChsM45tTfwQ5MBxKi",
  "key11": "4vVUzDUPtg7nPfCc6Yg2N6KbVMGtsXPgaBwFaNCQMDNwR8xv3UYco7CbAo3tGq5x1rtnKE1J81wjVzXLNxKedQnm",
  "key12": "VANzgAwdpCQdMAEo4MSc3FS9uY8z8ZfcpU61p3GaccuKFpUzjAbdwioK541h3VRy9YZ5fL4FhKznyNyn6XBatHp",
  "key13": "36aBaBmv6CXTnxgYsvC3yHQCE4x8vBo3pxovqABJqyHq68M53n3GXtxooKaYABUZrGhyitEzxLoJEYoy6uHRbvEy",
  "key14": "u9Ljk8wCDBiMdYmJpz5UJtgKHZnY2SR4UZtjjweKB3ATqe9JV9jMD5exkY1XXe4by6nmt8C4nsUg8DUuSPM33WB",
  "key15": "qGHZqGpuFSdsWZuA28wQo28jckGLCMYCYU24LmqVKp2yzskobmEoKx24URsqQsM4UUGzWbDfJgjDuK7eQ9o97g5",
  "key16": "3KA75qEUAwFoVJidV7L57AWNioVZGQuAWf4kY7jNjBDJbfgpfM7gxY4Hk8tYjYSxXbaQCK4ByssFKzc4f9KfFhJm",
  "key17": "41dmiJ6dX8AGp762Pg3MwgkuxFZCXkumeLMupJb6FmgviLD123eFQtpH9xgZFTr1HyN2WwGPZMkFskXq8ujaqoTF",
  "key18": "4TJXEH77gx5pjr3SKN2vFpsXSfLPBqMqDMugWK4RcqeaNfUZK55MUCQP9jzsSdfha83uc3Z2QYMJJs1uh6DSLSfG",
  "key19": "3RbyXBVKxxT4L2F7W8xEWM96BYggfwdFETFUFVJfov9BoKrQA1m6Pixj4GqnNT2371hg6AGTA3G4hYeJoaYwycQ5",
  "key20": "4nKr6gXxhAErMamCYqzBdnU68yw89tLiv9Rj8d2bCLbVxZjQK8HXoykB3HMHkzY4C9xx1LeMFQVZCpq51VCoZEAy",
  "key21": "3DukSu4aCQHM5ffx1JSWuP1YUjd8UPvsdnmtpJVPxJVEPuMBFhaD87q42SsTgFP1H1qSrJ7UstnvWbwCqWwXbKXo",
  "key22": "2xu7YzagDcKGFdMw9fhZFvYfZHE2UTTCQpX9a5a7qdH5HmKwhU5JgXkk5zTCeyqsVbvjknRLY7zAbD1ApDwy7BtX",
  "key23": "3WfySkE8wimo4rzoAqrqb6cQjffE6YRuWsoNBSvEJ7mwcEDpdmhcLQQpc4FakziamPW6JziJozD63Eri9eSfpcz6",
  "key24": "3xbAm1Bo9zpHbMKN8ayrxHWiNB15VJUp87WHxFRWtZdL25SC2FSpjhExW8F6HNg9NVs86RGRqtgbmcj4XYnVmxCW",
  "key25": "3mXPfATgguw6Xrahv7qheUN9ckmydL8uXbfCkx8jLFig9VVX3wDKPUrmftFehfq53Lu7BzNZEj9k59UybiL6bGbi"
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
