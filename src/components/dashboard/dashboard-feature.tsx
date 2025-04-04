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
    "hdK1HxoRixZKg8cbemerxz3r8SifM513kfCwtUx3V9EY2wEgDYjMNh4aUQsDWgun91cibmeki7kBwCV4ya2RYQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2YtSebyDxDZK5B7tbYKNDb2Dv8gofbkBd9yUPYED55SaJ2PtyU9S8MdnQLxLpb1RRE5oT7N2ktwbPMDbeUS3Sg",
  "key1": "3gRUtcH9AAANpnZQG8XZsFPivxjfSVNSUPGUjHfLd2GmvTudpZcSv8LiK76G9fYaTRazWpkqZixtMMTE4iQthXuk",
  "key2": "3nebpBU3VKU6DRGdrE4qfmscyA7NBo7xHGM9QgAWm3rPFbTQvm2byMXK8QT4oyxtzQkx5yTeKQJf9mSrm1wtNyEd",
  "key3": "24id4XrdemTKWU1koSowywVSTNDExVaGWcgky7bm5SmVdS2mGYUNE4BAxndG8cGSs7xs8p4eyDCtrgDe6iWnL5Un",
  "key4": "3tm9wuackB7PQmnasAoFB23VYQVdacFVAG5mdYpCTqDyiBXxGnh8yPobJV3HnuGe5S2CFMdPnL3LkUprUss5coZc",
  "key5": "2MWh84FmqkGBS6sqGx3U4JpEef6BmRqZrYRXSTP1yyFY9dbYLUX6qCSoXEGraMJEXBJJfd5CAqyPztaT1nkbEjuw",
  "key6": "24FhR52ufxmJjXkyyPfWSisa8p9KFoH99NGg7JkJqRr7KqV4f58Gynuxh5GepC2p4y2bz758AwdiU3MeUrW8FEhw",
  "key7": "2qN2xSPtfPFxE4Wv2fQWQdTFky2uSSHH19AEZxnAL92utTemQ5T9U1KbqCehfduvpaM1hJGZqBEtygioPy6ScFj2",
  "key8": "2yvvyk3rJ3c8FjadB2CauCj4QcvYyFoA5qzsNBSeoDKTx6BEMLn56YZabDtvEtdkmKLyHgjPijEebBztiXTLTMbn",
  "key9": "5uFWc9Aa1cfayAErDxYFodoGTXtJQfEg1b2o17uYLb9fkGh89VRuehsFVLrvETVgfsBm5JKZXH351dmq6EFyTUAW",
  "key10": "5aFusyKeVj26hCfRRcasbSQzN64Q5H29ggL9NPhQTJnNu8qMoqcYEhWSwbwVGMZnX5nLDxugevjtaZemL9HFrdaN",
  "key11": "3nGAjpbtLw8Mbp5xEnLmP6AG1R2eCPEKxu4PcrqDgcBxyFWnh23qBBC7Bho2kWQjWKNsKAZpAncVJPG9ui1fZ4w2",
  "key12": "58Pe3LYzNFmCggzeyLrRv4zbjTkFbQZYB9hmQv7xFGxWNtEyPEnteZqHAtdExkixStG4WXRfHpwdxgvneun6Nz11",
  "key13": "tNC1J1qsUtReYozq7czuyn4jkcHXUyAmfMupVEoaVkNtb6ndSv6CWgJ4HB5PZPxjTbpk5HbQTysShN7mPQN6Hr4",
  "key14": "4rjqAfH9MWwurgbpufDW23a8PtxGmoFe3VD2ELkxiEySfbnVxH7eoy9v89W4fDkT5i9FVXaUrpV7ts9Cj5zyJLkB",
  "key15": "4sJt8FqUSaoFe2ZoFpwTDAovs2znLtR2NK4P6mJcLduTz4TEcLX2xSahHWkZoemQSBhJdeivb7JL7aDbbjVfxHLn",
  "key16": "3xdvxVpUa9wcXXUX3QPMt2QLpyGieP93WZkEQU1xAj8euHntjZXZi6oq8RCXUQhRJRQyuijB473xEFG8hfekC7ai",
  "key17": "2D16dfn2tWzbepfmV1gL3VKKkbjW9kMDXANs5Y6dQk33RUfi1vsVoGPrMaDS7Jx9XhRt9DXEVbFFK85gy38udbiS",
  "key18": "4YQsR91ixhbXjyPvhz2DhwmgXtRtV8jM6YJvp2aHWVQGeC4VJ3pTtb8S7jbM3Ty65mcjv2BsHSrQJPUbaUYHBsWD",
  "key19": "6oeHSHnFWVZvGvs4ED2KGhNxZmaCH4wnhbARcRxbKKYEN7BSiPAq3bAAm8GaP5JFwbUSY29i2sUEMRTeaRgx6Du",
  "key20": "xMube6kgtZ9TqSzjP4UBL4wvNicpEVZtUWeVxy9qDQM6BPg1n5a7Ve2VrwCppegAudUM3HKn7iGuJgF8ep1NVdV",
  "key21": "2GcuJUh7AxL7ay3fnCyh6J9EYUnVLyDLFgkzQgfzX1mft9Gau3woziu5w6Kxz2CWjF9XK52Y8wDmurQJ3R7JAbU5",
  "key22": "2Lc1K9tN73rvVzaXqS3iuWskjmh5RVMz14WzqhEZrZrV3Je1kw9kPNmyciF87Z63rTADLog4fbnLkRN8JmrfgaBx",
  "key23": "5NwUB7czAxyacU1yovQMoy6tsXDNbNShnzxsoY5Z4VeGZ3VPBJ2fGDh1wYBeJTvYGAzarUm7DGZo1Kgvvog2RZdW",
  "key24": "3pA5u7EpcS3NCnT2uKV1stVUfhkasG2GfkVGWq8LaeHGmy7UiGf1gqhZBmE3yBL7MFCET4QvD9sX9uyrHxYcYjXJ",
  "key25": "5XaB1SuZrwSNpsCHyraGUmb76USZBuyFQbckeHiRuxgveNwKh2iQdRrsq6pDLVAM2S3i2TN2U1CQ1D4o6YGEF1f7",
  "key26": "3qCkzxf3tZ8YnFZ46TSDxo8k7h3p6B8aUmwXezuHWLnPheeU2r4hbnBKwrhBQTFfAgKaQnYvVP26aXBQREa1oG51",
  "key27": "3xZo9DtwJKjtUtx6vM9fowh5Cm3ZAJu7naka5p6XnCafqWac5WQ2Xsr8jNGXE75qowz3YFZSNTCshZAjs6RyNLcL",
  "key28": "5N7YRGW3bsBB4cpfjTb9dxgD827qkoPaYTihv4rMPxC3E87j8B6rYLfRzdg2u7jr93iwgPadJvmsTNYgBXLqYdfh",
  "key29": "4fXBgCgoBNJAiKoMrmbGCMFRUEteaQmfUouDyHwGcerieYBBAyVaSsGPK4Up6U6UQ2AsD9RbjdLnhbHXha4xvYpX",
  "key30": "38PtHYCJw5uYoiGa8WbHG4GW8x43fu9FyHXEUGN5JTgGsjkDpStvtfRESWmC5K8wGgpBr9CexqrRYD6svooM3jDh",
  "key31": "3CbJqmsNi5svKMxDdTBJJBmY1RjGoa9aTQBfF43bgt7Rzy51uYDcrKCunqhX4mjHCesNUgWD5xiz4fW9aAQaNdDq",
  "key32": "c3tyiipVXTyAaFPqfV6qXDTZrkLKRhUbL69hRvHesfxz1s3aytDND2r935rFVEvZkTGVL7eGGhHgX2aBvkNbDXR",
  "key33": "49SsHJ6aJQmL5sPVe8hjxnSw6AtSx4pmaSjpRHHmQjhcm2GFUD2996nojq65KuTtHwsyzWpN2u9mXNEZf6e8HqHr",
  "key34": "2msLfScW3yZy1bUfa97WUPqSZZdYbTeA2MKWm2q2L7YVnFetnU2LY5jf7sPutZchTUxS3ZQd1xRwV21XhVGPxyxD",
  "key35": "4kffnJWpTBE9JuhraEhFHqo72J2fKoLh3RFpZ28qdVPcjNmvm38Xs9QAC4MsSWuTdMEmnd3rCFgRYEBULRt7D6oT",
  "key36": "2updjDpMJBFH1WnWBvw4BaMeLqHaveogXT7fQSKCULMxfNbEwYPWJa8SJnD16SDwvVKB5p2MyqQWPCtSX3yT6x8W",
  "key37": "5ngkQuxeQaBDtCYRuf9V8UrmG9KB6VbQRFEiQ2m4T4NbYBJvoSGGZrzaAf8VvpcVszZib95hMaeTtWnwmpoicvCQ",
  "key38": "2YdRpiATuXY9e6fboL7Cv4ZEH3Skv19b69mMCUCEUHKAoPe9dVVqGyiu1nYdfCpkjRtURDCUvyWJZ9fCe9MQutF3",
  "key39": "3oBEoP2rvBsqUUCQy3AuGcwrVhZCN5KWhaNQYvLuGWUgu8Jv6LFeoogk3jcQ3WMMSezYNjTBhAPmJqUXXhfePjxJ",
  "key40": "35kfDB23bwPy4P8ZL9hsZVQv2h2TDWQEpdhsFFGGw64faf7hweQhRusYLfzRd7Gs5MDPHGe9NJs2NyY9pj4WzbTw",
  "key41": "4yR8MRFLABxdJti3cmj9xsWtog6dnN3SxBEEd31XmxvrM9MoDuyuiB5sLJwTAkDsEP8uWyhxYaaMuSt9BjEPwLFr",
  "key42": "2Rzb81UP8xrChBBpNkpLhj6EbWxYsSQWPf6NtdvRj5d6mzDPTvVwtrEK3LrfG8bVywU6LXsoD3cmCS8ZH2XwUQfG"
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
