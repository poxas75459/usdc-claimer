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
    "2enpqS81n9bfvofvfcfQ6EeSdTWHsS7oqGhHiVCpAoXBqGbwYemUxbd6FaZghnjdnKxy9P2AL8RYFDzGsmVyuP6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bp8xZjXaLNkjSAa6B3oHcN2FtMtTqxNdhVXUynTssKVshZWSgsrsLypzHUAsPdNjo7CcfsyVFuvFiMnP1jwQcQG",
  "key1": "5CmXWNuY61VRgxPeQCUyYDoSz6bHZv1qdLQVGARZqL62NDHHk4ThB3cdmza1HBfZwqYpyfGwExv6kVxFE8jTWW2p",
  "key2": "5xGUiLxMCgdtPAET7BAtJmwk6nqugKvrretcZaCQPLLxi9FNTXipx28u4fzwjQDRMvAqaXYvL8NLvBPTLSQiaiyD",
  "key3": "5gNMecKyGQg7Fvxb8xFDyMfJfp5rotMj77h7RMEywzppV2sovL1UkaJSipgLxw9nrWE1jRsDqHZkrqjUXBMD3zNv",
  "key4": "2FUBL1ZMjzYTJSdhHcuwJQS5voRyNkziXXkKJRg6X7Yg4kZgWyTFgXAiNgNMPyjfb3p4BQy7xEbSYGxQJej5agRF",
  "key5": "2MwdKXrfgzK8dgeGmS2vS5Xk3sJF7WJbB51b8ZYHBAjfweBSX6oWcRkB8sDjhmxHHtZFttQyLkPg4dLW2PifBTWg",
  "key6": "jbf7fpBpZw1bqWBUZywX5VyHKbZe2ZX5AVLq66oJ8VyisBmi6rHALA9UHSMZdvBiw4wTAHvJ1Ek9AuE3ryvovKw",
  "key7": "5QNdUZrRNBAp749Wv5g7avfSbp4GpBrhyPZcmeUt6GpvsVfZiZ3o87zHqN2QnZWXT69SKnuyBJTFNSwAK6w4GLxw",
  "key8": "ki7gRyXPG3mFkby724DXBZNkziaP8DCdnQNH8uafyDsLdtt92Sry3t3xusvNW2DeWxBHmEhGkExPAjGazToD9uS",
  "key9": "5LRBrapUw4WfttaQswRZy71FSPowq6AjA5E9PCEx3KNG9ebHVc1SQXqvVVZw4JHgT9kNbHkWstdbN6aEwZpvUwHz",
  "key10": "4JuszzXsFPnM2bKCqkAN4wHJFEMi7xo3eCMW4Co2XaSZPo9jHixR46nRkYyNc2E1NAbFWeXC2QFWr8iUGrANopCM",
  "key11": "3nBwxgfx1yA46aaoNakdnDcdaJrbGLR5nkkMn7U31g4ty6h8uDtcz9v7dToNE9VfkPpzXKYUcwLiH7psR1h2sBnj",
  "key12": "5gxtTw1sYmB1TtXa4X7qQw2NBT2NpGd2zdWZCYfXHy6jE9iWW4pknjLndUvBRwv7fhtRSPebppnvPev92C5cdhyV",
  "key13": "48UFvNez3DrAdnDmYqduh1Yr3XmGBqLFR5vyHYSTnka3M3Z9yF8TY824D1w82yLakhjm4VQ8LCn3gqefoiVK7inN",
  "key14": "4PFfzBWL7AnG7m8ktEhcN85wshEDVQ3S11uFeXbJThHZYbD6VSLbfQPqcR85YURahCrsTzPTXm3XdyatQge1wZPB",
  "key15": "57aW1Z4HqupKh1X5zQWAdEaFzm6oQBC1SfCSbknV7WXyEMTPik9Mgn2wEYDj6tQNdBRTyLWgPB7XPdgCWX2Zdck6",
  "key16": "46vMAxpEcTonWpcWYJcckhW7TdxCziVd3sHmzyPKQxUb9ELf5yzSMGXHKmPzbQRAoyA8f4mPViZrD1N4tRAgsaXV",
  "key17": "4rDJWGxDLvNYYYGUu5BuyRFzbdbDh42ZVT3uVCPYqG1Pd18CX68sA6UvJpTqzSxuKCM1a3EZLmRJkCQu87gsYa1Q",
  "key18": "hNZHcLsaw8iomXqgLvYttu3uhpPfbBBeReHpZiVCWfE7HJSAhSnDBjzXr8pQA8KuM4mwL2q85xm7ZWm3K5bLKYc",
  "key19": "48NTr3Jq2PYLpGeUYSNP3KmNSYN6owo8r7iyc6b31dm7guzciA4rF3ChcNPNd2qQAjvSm5tAwW26ueEjHFYCDTPA",
  "key20": "4jtUx1zAmCBQUjrg4dsGXeCUpmHEq3fZ8nC9NNaEMyqYdhvUp7G9oi2xxJdArt7kWdospdzEjjf4Nis62Vy8sbjM",
  "key21": "5bE6uM64Yo3k4uuf97AnymrttZKbGxPW3VsCNfLrDktHkw8QsxCL9UDkZ3Kf8qRy7Ezo39Ygi63uBQ5rQWnUk7t",
  "key22": "CXWaCjTq9Dw7Esvy8kcyhA3rRLFGbKSJvQkPgqMh7c7Zur3KPndLiP7B9VSB4uxZEenNHekwfjQn9qDp2xeDmAU",
  "key23": "57UG8wLhd5ZEZjj7cC9WxgHRwmHNzTUhJPzArqSBzCnTNjTRXXQeiWky9qsW4g5UAVNkyDxCP57a3KFbTSwMBZ8D",
  "key24": "387aZdNjzFjKyKSEdRuJDo8wvqzzEiesTv7sZd9RdHPYSw17uR6W1Ddjd7WfuxmJBx9kH2utgXwKJd5oHM9hgSu4"
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
