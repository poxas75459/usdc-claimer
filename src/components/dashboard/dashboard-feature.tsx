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
    "5yBXakYtc7jpjiLrAfYA7jYZt92aAcGqRpo5VnzNL5ePfwPmvZb9FpfxCNP8C2BKBCaNNoqd8bq58RXCXg2Yy6dG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kSJNJ1VWqBucRM4zyPqy1xj61MAzXzJGytBN2LuiZpMSAB7qdsUJvnBuimF6uXEagRvvRA78ByNu9WZAiSZcXbj",
  "key1": "3SVjHj6zuEtEWc73o3yaZBgjKunLKcdvxcs6F5RASzhEmuC8nP9Nao6RXywp8yudRo1HBjFgjgcxKHpXSZSEAAWW",
  "key2": "4JVp8K8JHFna8JhVtjWzsGYFqLsV5GoSV7FuGL17D5xozCxRYjmAdvJ5BX4V4vh7cJNAps4wGriUnizVsMZ78zHD",
  "key3": "vRS7dWE5mWGTyjN492xcvcqSVDi7TbU4FexdRp5xLEXSxYzq95WAbHZZ15wceQHEyL23Rrekk4oGryyRSk1TTUB",
  "key4": "58GqnRCKzDLFJWnDV5gMHBkx7uFJ26WPLdEoAfS5mkkrtKGQj1SMbCWjF2mfPqzYSAqENhSn8ipAwMU6Zv5nVc72",
  "key5": "1BVRrYWfNuvUqtgJq3jbbNWKQsTPskbfkBxaM9uMZ1wWR1R33fNYhGxqtD4xrrwMoMm7YSCJQyF3uUqqxLfAjV2",
  "key6": "v6UK9ukhcXkcawyGS29qs1cMdjo7Sc8jHtAcVy5B8XYDcNvyCPN2rFB7x4iwVcKbggcQYRrpE89Ns8Lx2UpwXcv",
  "key7": "X6oGptmHtTaC8dYQAng1evrKYrApQCLpW5YHzxGBzG8uSjw2yktFHWYjQe1aqfc9EtRG2TbXsa9yZBZ9tNfkVDT",
  "key8": "2mby5UutuvQ4euizbonhep8FQNtSRfLSCeHfCUTunAUz4FEFguwdnenpTxHAwKfyC9JzGkeUH2LoQuRfMB3oJu8P",
  "key9": "2tq5nCEfSsA5oCXnTMnVpbf9cn95iFEMDGWMZk2jjJDfxFbQWrHEkv4LzkSoXXePB8ZxeUmZAHSvVzq2o1qztWgc",
  "key10": "3CeE5p53vw69fJgoJrkSedgpTs8MRWc6PPgziekTjxUxWy7rsaMgFL6sZAGiyXL4NdmKTUdcawz1tKWGNY4cm6UH",
  "key11": "4uRJdcfYcuR5JCxcGWhtugjSc1rBgUgv9dUpq7sNZZxWn9vLh23rpDC9KcvfbQYJMYmreFdV52W45WUpReh9Mow4",
  "key12": "38GkpyEjuZwYc4MEUL3YKwXtZxWFGEBY6v8aAHggsGFYw7BWuBR8DR9dX7P6Pi4x27P1PC1sYwbp1WZxVRTkv6FW",
  "key13": "5v39BZ79GC7i1wg5WSL9RVDYRUydQd3RneGcMwYXJD6Vxn2yR8GtZrZcWuCJpXquhLLveKwS9eZo6dyn3Ek56mJn",
  "key14": "5Wi71FrzwnhaF91FHQrEBcYADbzbAtsZYvaMubEvqGQK1ySJRbb12wXvacxBSXNjqP4qj2rKqqWB2J3BWvhNDYQ7",
  "key15": "43sttmJCjyVef4iZjfcj3ifzzgvQdR7LCtyDsr1U2sFDEAswftdYtPvvmkSLRXikErkKLwzgJbTZXmEcM1fccuHs",
  "key16": "2g56DFCMXe7wG1QVeABpTRvrXHkYuxn81GnJFoc2mHSuzPK3x8QjkdW8ddakpMJoaHopk9aoB8hcMJCnSUy7rL3a",
  "key17": "4AdBW6MAcqVAXL6WH6otpehHu8kQ46tcA4wseSL2oYnESTF6mjjLJDhWTsKLmm4FPMbEcJJgfPuD3gvehWwymqNz",
  "key18": "3CuMHA3S8DxQavcTraYe9nbesnJcC5oWP5P78EREn2VutytdfgECQb26eAHe9qHRjFtBxHWxhTCJEBKUVjJX9t42",
  "key19": "5UxNp6jPbPk49ubB2eqFFHVfb2NEHuJJGqhZESa7ZjjkrqUarsdU7H8Q4BREbkjdnM4qE5P2wVU67TJpPHNvrygK",
  "key20": "3te1g3v45sgLiaKXC8PrRdy9JVQj8RHRXxJj7HP6PrpBaa4GAV9ZN9nC2tW9JAWRuqpRjvNLVe3gm4P6BCzgUvXH",
  "key21": "3ocPPPKKpKfRFQSEHvpEhJfRXhCBLjuPJuYMd9vgo43Und7XfkCTsZKoX91Bn8ddJJixy6fGiUwPHkpon1W8hEoM",
  "key22": "4L931wGe9ZLTwRctZQ1JTDLUh7u6DPDeDh7gyKyFvXNGY2uY9SJ3Dt55kiFj1ZJMgQBt2JEuZPHwpBfi8zjBdt9j",
  "key23": "f2Wghr1qsQwoLD9Ak59t2QvCNhfZnFHXicBPvqaKyazHYxR1RBLfodJqyckp6d3haChFdXmaXyenyWT6coAL9tf",
  "key24": "EJfWuwfvUA2gcyQfs632duFxhNq7nbsyoBYqWsCFUHe116SBUeWPdkoAbEsnR4TS6dVLcQAbo8pU2AtirrwamUQ",
  "key25": "4hkn14PuMtLFDP7RaeHZQdVms8B9z9u11dzU6UU6p2gNgYX5nwkqA2ddNC8dz4nvVdso2h7XaW5E5rVML9FwK83v",
  "key26": "3v5v81m3zttLnLS5D9Jn87UsbhANC1fztJ34r3kmYPw73Ug3Vcju8RuLkbyG8csHJ7xVFCfhMcZEpqMjzKgyzWoG",
  "key27": "5JZ5sKivNy1a3M8uhYF5jfXjD8dtVQS6Rj55f88835ZW4zHiA2yxaY4q7yfJdcotse8RrQCpaGcXRMJGUyLRntUt",
  "key28": "BCZcKxMiDErZqMTmVmsApUg78QLjPbBR8ikvkoXwB4icBxtgD9XT3LFp7xXZd9BKf2pjBBVG16TVPBuxJA8SntF",
  "key29": "5Rsj353n5JmzKb6xXPqqJGGrHkGQKf7UF8zbF9Dh83WpnzTmWLHSBs5SWXd1vvxwuPvkWMM4FejokvXZXpDGJcP9",
  "key30": "3USoj1pBNEeSjCTChsYWko2zJ88mJzpRbwoQXq2EvwcHFFYtjERnx8mkhb7CvVFQkbsHrbmvpKj1YJrVy54suBa9",
  "key31": "2oYTafJGsTHtVgyYLWKg1y5d5YjrXD4hcvTHSSH7waiarYuP3CtmeExPAfcJ16kmoLXRVPVs4YMC5sKJfXvUKH3L",
  "key32": "5wa9emotT9qieQWRobfHFskii9CsmkckhXVsbtsn1aiT2DKUeAwzED4r6G2J1srZ9WA1zZeMDmbjKqqtoLxz39FH"
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
