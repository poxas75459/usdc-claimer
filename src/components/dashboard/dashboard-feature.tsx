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
    "ceWRKjuH5MKKj2SFrsCyJFkwDa5QmMDvBHUf3FHCBrPWc7kJSCNAzexsGPTQEptNkDwUjG7MKr3xcSjEFaNT1mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JvgEd7UE8vXuuSwtVFktqKrDNEJ2YYZmJutm2mkQTA4MbNgbjD1TZu1MfRfaeebwdVukfJo3joDyADr2ztYHEEJ",
  "key1": "2CVRuGykQP7yfTWA61adGhbKctHqH279PN5JbGKZPm5rkpN53p3ynPvwgBpKuJzL4rbVHik9x2EwSeyJ1U9GU5fr",
  "key2": "5PP7MCKLtdYGpg2XuWdvmPtSkcFCJqGo6YtYASReVmmwN4spXMKJS6Xv6wJ9BRfamRTnp3oLVatqwaMT2pxKH2fs",
  "key3": "2v4Bs3QsfDCqnSJAqcE5gWD8v4Ya6Q9faexTWifePqkAhXV54t35Mxjcn9yvs3e3Yr4YL9LB2pEM1BKQmSMj4x5a",
  "key4": "o9gvbuPEYUmeu73HPkU8oeTd7jqkPqBHQGNBmusp2RpvYjYki4kHSptQw4X8uZb9vKzkv336tSDRZP3qK9mB448",
  "key5": "45Ton5BVunaYARFDd9QYDgRSz5iD1M9Wt5d3FChQdnCyKhi9TvK2NeWVYGzyhNYqK66zLbBo8MYPXDUr5AykUmPV",
  "key6": "2pChggRv8T7XnEgv1BLas4Lk6761cSu31ySZp5Rvci9CEK8pjTJQAoyd83bEKBYfJmhv5pwFCN9WFo4ykonJscdF",
  "key7": "5Sq3oEL5xE7t6Xet2Me5Bi8jQu2nJQDcayGCrn58oxFjmKzTM2KdNwFkArNkafHAa8BZ5eRKHPwn6BkeJPjeiLPL",
  "key8": "4Cqg7Kw8KP5ixoWG4mQevoR3rJEBVthtc3NYFJZZcmvXJN9xotLJcXschibEF8R6sSPXwJdWtAKbGV6T8PgJhE99",
  "key9": "26jjQYiCE7RjkvD9YoavfJi8kEiUk532nU3rsMUdt4bNd2SwaeMdNstAWY8Nh9wBfTSCGjT8tyerFAMhgWkjdXFx",
  "key10": "4XsNFZ67wDvrHVW9jmWMcvBPa7qj1qbYLj2cVFLDuEnQecWT38rkS5iaTLGnTC9FhoEsBx9PzJpMbsEzvBA5ktBa",
  "key11": "7puHKpfnrmJYkT4bhcnpEmQfC3RBGeGe8X91fZFsxtyWwFsKfUXCV5o7xQpxaru2hTSrczDbkWZED29sWvFYxZM",
  "key12": "4TjfHh2YX6pJ8Sfddnr1M7wr3AwPLSRZHSGNzVJBD8sSZp9hv5LnQGDL3yKtU3GUs5Wz88si9ShSrbs2pjfj3qrn",
  "key13": "3jNsEYBr9gizhMAAJoD3bsG2BHCkGRMrwLqaRWd6otV4NbMJFMFwityHWmbi764F1G8Doje63ssfzA5Z5GfAeNKL",
  "key14": "2pKqBxT3R5muVn6aAn2skvRmo93Zf2aMXseK4ZB2baUFCWSnxiTR8G1Rb6ibRticEXZ41s3JQF3cm4zpsaeQDoRN",
  "key15": "4kTvkbEHgQh94Wib2HxiypakY5Bvc5yUF5rLzjoRTU9uqZzmBNKdS4a9mjqDKF8Z5jg9x69TVVsCb7yuLxN6Ceye",
  "key16": "RtMUJQQ7wDbZCC3QRxzz91wqSgcrPzrfFVXhmrUk2RPU5howm1xAMFV9rYqzVmcmeteWry1qkjsS8mz7TzKP25C",
  "key17": "uR6AEF7m9PmbjU2pjgxxGVKzVxFRk9AAUnSoHpykhjpdfKig7bJuSdcy4gjU79S6WVdSVcjxKpBHXrydyC7j8cY",
  "key18": "4g4Tgt94RJ6C6zjek17Fuu81vspwCUJQaFZ92XsueBmt1Zcm8HEmdH3hhm5DV3kr3p6nndx29XGc5ff5uGdhPEnA",
  "key19": "4gkcED7A2iBw9qe5oMT18owJPGrhceE7QF4nmBSRPoU6o3Q5bBLFXstiNoDRetwKpuVPcZW54XbjxPfuMg1G8n1W",
  "key20": "4FCj1LDhx5qj5kxhTQKvnBkKVpQHLCxNr21eAcooScAP6ZuKeGKekBQkzb6CQvmpKTaAfojSb8jNhfuZXVFJBQWJ",
  "key21": "5ghADTLtv7iNJzBGcDS5wDoyzPs3K2BAeRUkWvYJRQaNnZhSTKWWco6eza5aasAfafVVyoPyQgNJr8CbaTRwXQA9",
  "key22": "61yEcDwPBZGArSTeRPx6SZuWHmbzYoQWVbC2hYDAHZUyWmh4GwxWhhyMQrcozRdRvPuWJfFSn78bDKccfynd3JW4",
  "key23": "4cjzPTWw13JvtrRLYdHAgVCndiC9RqBJLBUgwMFGuLrwgQNCKSg3QdMdMxD19THjWM1xJ3NVjRfLNysKvfhiV1qT",
  "key24": "3CSUAUn6tBmqMmGJhYQjWbMnSVW9hgFyymvbSBKemTngvpJSJA7fnGMvswsW88U6Lqn34cLFUnLmxQGSEzBShc5N",
  "key25": "2YkdysNQRCW3L37aLXx2mgPtJMLeke5mhwGzU764JfEWTqjgK7yKtKrQcjNiQJbeMjC4LjGdpRdGzHHGHFqQZVC9",
  "key26": "2oEzMnFu3NY7T5yMk3Q1JsfzoApWrndCWfDJckaHT74FpsRN3VpFDS1H8ogs6e8rjCevpw2Uwui451d6ZYGbA937",
  "key27": "Y6BwcP8CNuKbB8U8wUjEqRUonu5scZnGcXJsJJeBW6wtxMtnXsDJyurnPhENx5pBLBxwcLCFvLPweAPrSKhZ1vH",
  "key28": "3mrpARCKwALL93i3h65C1bgjLN1VNkbxSQi1Jt9FQiWJdDciDvpn94SFr7RjhTaQUYiW57Y1EueL6AKQTNpQCxod"
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
