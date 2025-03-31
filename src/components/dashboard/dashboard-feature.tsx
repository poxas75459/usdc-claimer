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
    "M44r7qqHNWhYtAr1FYqCpE4MmbvG9Y6kw86zB8Soyek8SD3nTHmVGMDXMbCryepAgNEREVovkBsPUNqyRREzVR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ci8MQsjqo2J7umaMitgHN5nCtQb5sitti5TzJoYx57p2JZ9pXKStHhV16afsTinNZvedTirbsnoSJ2EyeDR6yiG",
  "key1": "25Aqw6pNGpMjQ24kS5BUcvcocMu48jCq7WBcNFgzardvjVDnG2P8tRChFgyyW21zxHEZY6SAKYPu3VUcg1PGnK31",
  "key2": "5zaoiQbPjsA5tpWw6QKRRUdvPmbc9woqDm4YJ5tuf9dRUuT2f9771yJKmpzPzT3ZLAiP3tkhWov66nz2pP7mZvr",
  "key3": "5aZmYXY5VPBHDMapBjwmNYkxrfEA2CFLVRfLUHpRfYCBT5m3RnanvhJNdL3EX9fgsKi22YrwgTt52vKGvDFLBcam",
  "key4": "4HxDrde3dcCFCurMwoZLUdmSDw7b5eDzCRWW71s1yXSpq2P5D8KUrBhBRkS8dF6AYesBN17a6gmWCwHxf1xQcZgq",
  "key5": "2A6N5RWnX3w75g5XF5hpHf29w5DiwgYJLknPebkrhJwCkNcaLAneAt3zTwGyPBQp2iZbHTYGnMQ4gk6Uk8EnVMoc",
  "key6": "5wJ5X1pxXo6hX3ACQvHGazME6dWJfL3Kj5ZeCYBDVLWLbNe6mEe6xMQywRUzpfEBmkGWni48dsaQYojVM6ufvRrD",
  "key7": "47voGhPCZJNS6V2nd7Ga7L9bQmDQJo1kdAupMWKhDQqSLoqtq7d64PjRNGnoLBWnRkrpVaxqNLCLzR19arYBopzg",
  "key8": "3AVK3e3MaJYccJGmJVaLBMbodvAa1s7i71FPhTZBEvr8Z4Kqz3rNj7N8Lo1R66S8CsLHLNy9CN8Yfm45JxH1JfJw",
  "key9": "2j6qJbENLe2ovAtMHNe965HkVTLjgjeDiBRQPMyypoZpLLAidutSSv78Ergwc8YLQL4VYWqAN9e2PhEiF4cNf8yy",
  "key10": "4XkKrRXpLgq8yS8yxSCtbmiHixfjGW2BmMpzaCERKLPqBgb5rzv7nCHJguYtLLBJokML5GcKkijd1GKtoBvGtdah",
  "key11": "2tjGW4GKVF97wfaGVifYqhhGadkNd5oBGc94j3LSXNE2oWZMNzEhB9dBQaz6PyzB6EuW7hd7BCTQde8r4a1V8hpp",
  "key12": "5FAE1ESwjMv1q9LMRwWMFkmwmxYdGgS7RBXCjpArc8JnxVdf3ha9abrzjiQNU4cT7jYnzsNKu7RJZBXiBaYzZh6Y",
  "key13": "35gMoZsotLu6Ui6uChZDvRAa8c6mTDLT9AbC5D79Rs3WXAg1kppTgDbDxHWiu9JeJVQLgRTHLsYj1Y7Xp9vUbFwD",
  "key14": "2E14EzFvXttCDxoy4X6dDZWqKPkXrMrWPu24pSv1scdw7VMbtQj9SbAo5bKmQaZ8Rk7UCRVUkQZNo1owEgfjhtv4",
  "key15": "2aBJqgLuhjymMGDsHgfAVe8p1bgKyfnYCw5wKVVkNc4Yv1WH2Ts9y139ktj4kyJdjqjYsiVjopWzcMtMVU8C2XWz",
  "key16": "SCbiTvhxaAHGunuGad3cU9Bp6kRdF4UUHvEdyoTCAMAweDFBwRNU6QVQRpW6VirHxk72a4Z5GBNWtQAJa3J1djr",
  "key17": "4mzLvK7Rjef3sB88ZSpps2U4hrqnr9gGh6BVT1DdxbUH5EGbGGJPb8WDcEGMUQkHe6MCJ6s6BFWnWQEtEQUnAWpU",
  "key18": "47VWduz41UJDThCNJ3QoCwvk2BbMC4JpjQAyaBdHjv2Mv4y1EZzM65UptPSMECbCZcqEAYk3aewRzEjsXSKi7Bcg",
  "key19": "5xWc5w3WnVsfGBVGJg4mkv2pCKFUpNFHorkbJs2aYVSdM4oDzDWMmUyDZDD7F5gFxzY2V1nmXKk8T5YkHR3P2MVF",
  "key20": "3b9FuG9gLLnAnGHYQBB9fE6976MUMNxcgFCqW9mjYgek5D3ji2aPsYD2qPx6vefjRrPWmns6iUkT9uXofYcpEKKo",
  "key21": "2XVb364dfs4ciorVzG9v4bn9Toq2spde45tekxm1h8pJcBuqb6uymrzcc56d8W9NErPqFKNZKjwCfSZxcAakdUBP",
  "key22": "4x7Qp6E4bkKC5vMfRYFCLjV51fExpR5LoWR8cPXrTPGXwsCB5b2PAizak5M2MtyHB4Zs36Zx2atzTpZdZetGNZxL",
  "key23": "cmykp4HXxsQd8cg2WYPovb2poq5Lm2PF84bYX9tFphwdKZ9jQQFo9Pyu3FWwm2tLauby9nLR1AZyixUvzP3u39G",
  "key24": "2zKNa75M1U6uN7esdWvB7AUezGD1kGBzZFdbgoFbAteL9Qk1EmiNwoE2FyyCnURYTrKVRVGxXQEz7cANu9dYz9J8",
  "key25": "5TfdsnRwFXjXkVLNtuW2by1PfwKoVYVjpGEDGrkwBXrtWGMuo97bGGrGBxK4ePF9KeLD2sEFsifbQxoxGvkpdGnT",
  "key26": "4edpsiGJej3DL2uNsWAVNwozzbV5yucKBTCm4co9RXhAad7ncwvWusNcTSdKBobQv4w7HXqiNnSogrfEYbBSc9XA",
  "key27": "4oRD6RwJ8FoyYAtVKNz7XFPKKAvfS15k6hVtJKTewDarSWoeqZWcQD3TjtpvmcteAEgqiEwXwkhPjRYSRoQfCMkB",
  "key28": "5yTUvAp9vhk2ysM3bdUJCg8jQFnJDR4ND5ATe4TN4tRvoRPWvW11sazPFpxeZKq9TYMAgb9hWfqmjdcirscwbjxb",
  "key29": "2L9mJ64FCPUhxmhQHDkXzqJ6sbRqhwtB8iYps6LFWz7UgpdGQ4dgHcxvsEDEbyCdYb6dUo35VFGd4RG7VR1j1xZd",
  "key30": "48ugneWaR982L9kDTso2mYjSXGLwQWUrkztcv3NWNxJNm1vkEK9SJTZkoUSNT3AZZ4WDq6G9tR8JgsFBx5H9DAAp",
  "key31": "3VUdGnJYthBqnL5Hc4iALCNusyphdxLDdqSTN3EaKsP3k8jo3QtYPbNNMv9tSDt43hKFTEMBQ8AKChmqzGmDpG1",
  "key32": "5Y2Bpqp9PcBgLRv3BTNGyDJM9aCKAA6PJREJicNQBAPHijTZzq6eVy7xRZ8he3GgzFnnCTWhyCsMpSRuRb2vXyny",
  "key33": "2T6SHfKFnWaQKdzvzUkS13g26uqAMWhFQu4CEsvDmLAc2x8UHA6kZERnRpHTAEpuQa4g2LYEi8iLrLpZCChSmX9A",
  "key34": "4jDS7MPzifPpNa7Tq4GfafsexT4UmaTZpyWMkBhWFXXnwTDhiVQu1rtXk4vHxDTt7BFzkJ5vCYXuVVFo2Mo9cmYP",
  "key35": "3fPSvhrccmvFXUjHE5654vmkzQK8yoHqbT9T7MNw1cijp4yg7AjHoSh14A3ZskdtNoeUuietdst6eq6BgXaqJUSF",
  "key36": "2aELQLQGMLDvxGowpjgpWZr1GYVqSEZhmUzMpG9s32LNqgV7VmymfRzTqQrXU4AuTvi1s3ExC2T5ykdPs2As7pe8"
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
