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
    "NLGozN7QpzUfNubedUSJLsjDLdD2E5AveLocpyAgqnz6UG9U5c71TPB4j7EauXVpbZBQnwyZnHDSPuvUoxZbYps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275qSXwuE4eNpWwLvgwzAv7Yo1oceSk4pb2vUS7dKpvLz9pNAJ1DA4GD9UKjL3y6FPEGuBKSCktjd447hjV2msJS",
  "key1": "3RWyqdGYELnSgonS52ibTzZMXwWvDJQw9h2FYTkcZD5Pb4ePcmSPVjHw39ANcdECETSzMcyKqKTmBmzbUqkD4wFZ",
  "key2": "5eNLsxheD7WX7P89PnuGMEYPs6FSeqYrrsBQs6eQw9kMKpA2KZ9t3AmTfZKFQ3aXKHY6XWTdS4KfJiiCof77gfdm",
  "key3": "2LrrTW9pZFGwDZH3PP8dep2z5Bm3UVMHe36W414kLZfnTKNP49tY5t4opGtoTc76nWC2VN9Cz11DbWHygX4K5Phi",
  "key4": "3EUN1NjxfTtiU7hDjdyFFt31adzTzUSdAYk3BWFMsyvPeBKoTPo1tdFA4k3rqFxfgSzt8uwG1WuXCpU6YmhVPjcT",
  "key5": "29UCFckV1RAmQWo7km8sMsT7qUCDEkuWwBfiwbfbwHLjpCUNGEFbMNTc4oNqHYMACYuQGL4Nb4uML4MRHHm3Ecx5",
  "key6": "pe3fuNeiLYZo7FqCnxeeSZuHQbxTesN2JZHFeXMSmA7UHs99XCTAbJhFhVLjiTs6t2GxWyGf85aASEDxX2yEE8y",
  "key7": "5zQf1QUTE3SfkWTuNFgWFw9TGHYWyFqH59gN3xmxic1AEyJjy2xRhKFdWL7NVeXD1oAGcDyjvBbYugpwqBbd9gfK",
  "key8": "4diLdxAoxStpre2nA6nriEJDXWiDFaJ75F3aZNvsd33UVPxs19kRFkEAZ6JqNkSBRxye6BQi2ZZdGYjVfz4cB3ML",
  "key9": "2VPW3tzrXAUq9HnJtiXT6ZjBnVhH1NKfxUhvbz5VirUNZd1yHSt8xYSSSqRWNNaCMJsQdaBB4qFeE41SVZ361NAA",
  "key10": "4XYD2B4xsJBazhKmuaqX59P3n3rexAkDehXeP4KaktWenN7Q7RKtAVkVhxdRKxECbbw27GxqEZhAkYJYn2rEJa7E",
  "key11": "2aQxJ5qQyRN4qWBvnaNBgQ53orA5mNdmEjj93Ef7FozwQthxD87VcWwBRy3B8gLDmV72sABYMyVvhCRudqcwqaPi",
  "key12": "H3gRKmF3eY4taHcdXiqQoadDftFiPw6ga95gzL1gzcbfHm5ufFM2YK1UaDh9chpbt36BPNwwV5gSMehpVT75bv1",
  "key13": "4qytZUmRiF8fK9qhBVD13WdZy4hknSdhbLmHEVE4imXjL9XnGDggQxdwRAmwW35HoaFVLPivQimpokiAFCz22wwp",
  "key14": "3MEVGamH6nMCgZKo3uXK47qrtQapDGexAqYDbQccvWCNrisxDh12wP5KQPLkzs8N39vjbwF1rWEV2hgcCZe9mSMJ",
  "key15": "Ussp2TaMLYC3WNm6Zxk5xJioTkYTYezYqgBiTR8mRhnwRvzLcAPFhJ1aHcXHt1cnuExsEK68TqBv9TdjjbztLwv",
  "key16": "4np7ia2A5nZDMV1v5hoy9cahxCzbDBR7UhNa5jiVNSWfAagTt3QtGEKks3Z3GZUjeSkpownFBYJKUs2Eze3eTo7u",
  "key17": "4sVn9zgzjNGgNKrDRisSnuXAm2sTxzwassorjpVvCJXByHzZZJbDm9ReNuuDaqfn5oXHsBcVpuNUz2CqPotTGPVn",
  "key18": "63VpRsmppzKwRChQq3ESP9qXxtagYc1jgmtt1NfDJ1S1yRwLp6tqYYhC1nwpFYxxgmnyCue4SXU7pAptfaEwFs9n",
  "key19": "3opM5bNw4jBzbwTAQvBhFDDE8rh5RTtQB5joPgadZM6Q2c3CLc47yT1izSFvzq8TgXYHrKDgM7gGvX4azxLCs37z",
  "key20": "bYCsFQ5SZeBxFEidhdGniW7vVJworu4SJdRjxs7jS44dbNCsS8gGRaXWFos7ftUv2wqLuQytrCYbB7T3DV8ZQyK",
  "key21": "3utfVmnnQXWmEgFwQqVEYNzNqYo2kAbzkH1NdAvufuL9fEir7vG42GVUeQzEv5Zh2d5NUBNRdUpGR7eR8vU3ZuVc",
  "key22": "2oNx3BW5xdPfcHLYmjaafHCWt7LfRotRErdfF1NJ63TgpsiKy8GW8mNNAAGUiJt6LCpgau5EBJzdzSN59Eas23Ni",
  "key23": "dGVjsRxg5w36eULz77YGHDDxnn8N7TBCob1qAyaQSofB2nQPZy9BuENX1VUagHDWPGcwQKuBsS2VjSenRwg27ti",
  "key24": "4VRZSWgAkYZyTQfq2Zov1uBWhYoTTiVbow3pA5GpVtDqF7E4JNv2NJzZQs8YWi7L9bCgYQtNTGEKVQ81S9n3mGge",
  "key25": "4iYZoZgdnqBZn7L2VCgQnvhwvUeuZTqcuxE1X7jtc2b9kHsDFAYokuNbfEez2jeZiUsZ8BjJyGotRZdw3vhR5e11",
  "key26": "TPHUi69EcfkGrRs1a3R9n5uhgvjqBJq4Cyu8SXqYqVwH9hroPJNVU4bqBWYUiFRzHSEQY2SK6F1NRaUeDTZk6VY",
  "key27": "44fHxQJ8aYbqdgi7JuYmc1ajK8h6ScQaAL7NZsX64pkwn34Mf5y4kXDv1pbVeV1o9ErxKNtwLCiPGyAVhjDAu5Mt",
  "key28": "4kTqWQ6uCpTmAwfr4rFKoBVvSkBbeLHpChvAGcQ7k2eQw6SpqzDp1PrXVHXbVYEkitg4nTDcFTFg5TntXuktEP9T",
  "key29": "3Te4E2UZcSWVDCNAtSsSjfyYdxjRTVebJEC1eWcE4etTg1NxxYqubkxxA46QC3LCgDHbtGM4xQ2Uvr9z5j4UiDti",
  "key30": "5q1z979iPA3WidF6SecGKffm6NHono65VyRkjhnDTB1DZx2sFksFvgrLjdSa9sQyD1G5twKi7FddNTHYYCAQQgXx",
  "key31": "dbgYjtcis1dgRHLeJ1Twbpqo17f4rU93PKFC8nQ7SmFDti4MY2b4sm3MuqW8THMmFud5wYbtoDKRrAA6S5MfKyp",
  "key32": "4BUCxHhm3AYr4epMFjyRyVpedCeLLjBPbNxbrajYPY84bPM2s9922s5Rhk1RzSNW4zyyixfrnUzGjqBUXxFrNnzh",
  "key33": "3tZkjefg3MMyoPH62K9V4zai8ogqTGky48kiddzCyhKwZg3XpXL26zcCzMAgHKK1USQcXJMLvdABmqyGneRKYihf",
  "key34": "dC6UwjPiTc4u2zYUH4QByCHreXQao6EdRHkjRHJTkbGzSd4dANYKSwzACMoxKhBcr7hF46mLg81j4YCYHxTn4Mq",
  "key35": "4DBgAMqVrWKXuckwPAAcztDd6K2CKd4ppLj99ipXnrdmEzJRE5pA45FJj2xLR3UN9BfQDwA57WAtExyF8H8Nvb33"
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
