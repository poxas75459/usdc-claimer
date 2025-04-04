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
    "2rapteL51sFxRyXY9yBFja1qnLx2uLMXvYMnrtUzFCns5UJ5jB6YSTyxvoVzNER8AceRUxC1e7GW9FcZiKyYbyu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnYnhJVC5N8gQhMQsEqsWHDFF8KMHyqcdU8HN9W91CzmrhbieHRsscT9p4C4z2Jm6NNNyndFpWezxx1PnkdUwRZ",
  "key1": "DsEM8mhobEFjbAAdZuWXJFmFNf1W7tjY91yixdfVuJ21KB97u1CiaxDEN55rGFN89SaTYHFvwZ4GsxLpwAosJtb",
  "key2": "5zGnmnk8fU1SwZWBXDRenRXSA9HdbnP9Tnfn8ANnK8mQPnABWvn95xvM3hujYJmC6RuRKxDjDaWb8No9VBqd13uv",
  "key3": "4Fd2v7y8SNervfVwEDUyVpj3J89EkPCxwXRq5TueyfuGNPPXZC1jKGGPdTmDetz2rYRGgsSdyFGqK9ChrBNZ9C8T",
  "key4": "4CaW9xcVRE4yK354rCqJnJdzYfF2H93ibK4xB1o2fDGu49dM3gsNQqdrWDRTAqBuHucWiHMxQdaL9rLjFSKjf1ZF",
  "key5": "53rsJxyZRwk8EsKJe2m8p7MZZYPFX3DMCiRH76YDdhrHUHWogkpPFuptgsyEGVsQrMyCmb7ibDDsBMpN5zhiDcVF",
  "key6": "3qbfa9y7dmikQEXb1S5fGQR62ND2g5P5g28JJAQBGaxrdxboTbtB23TmkA395o7FVjp5K5e67LUgi4AT7GHSKN8r",
  "key7": "5zxCxa7hphCZgM6hnc7ARFKanQPD3q5dsMqJhYapWtVQMKv6Uk3STxJe8KmEXZqjuy7DZYbZq5sJVh1EqgPmjxHC",
  "key8": "3sa8Y2QoShxLBp57grvs1w2R9GusBZQjZZoY5TbzkWs7N63zgp4KQ4oJ8dHx7EDREAeGXBm4zN1UML8TqKqJHvy3",
  "key9": "pnZ6YaW8Su3t4akR2SXwyzsPVXUCz3qHBuz9skpLUdsfHspUvz6uVcBFZwR52VSoyCHZx9t5yXtkTvt5qS9B4BY",
  "key10": "64akoWn9LfwqA8YKc6tM97CrhW8PHjqJ1csmfY9GJiAt9rjQJDqk9th17CmbiaYy6ygnz8cXJsrRux3CvtWNUzaA",
  "key11": "4kRWU8vSoLHVdAMt9hMC3vxPR8mCFjuCpLa9BZrYdxEC8T46qyaWZuKATYwrja8hGtWofirDj4ppzzNSYtXLAcaN",
  "key12": "2uVWn6yFyGWxx82T3errvDHTRcjNgtSRiiFUDZ1ZHPtBW8SmMC2jHBZ9uncw3S9MXbm2JrYuD78BwutyWGG6mfhC",
  "key13": "3yEUWsNeueB6sCCTTsBjTJjvusUwu4F4idunCdCK5akKkTNMAJvCa2BK9kQvd2tKnw7ECStetvaYLq2xLmCtGKQK",
  "key14": "5tRAzLVNWxa7CCxnNGvJACxwVsjweE3j4x1euPfffuS3kEjFMwj88mQrWeyE29LNTbDmhjtZ3Zaj4R1gof4uRT6d",
  "key15": "2o3W4Zq3hh1Kk4ugMzyFiKtUnZqHqGJmpLSk2CS1JLL8xR6ZpbzftHDXCT5tuDT1D16Qzt8epVe46XDnc4UWf4sn",
  "key16": "2LPPatZXky54mZcqZvAMsu8t1rDdpfZoYhsD1pBvfbH6wgnim1F5dmCqnMXJtrmRUV9844T1qowb7tJhvexDogNC",
  "key17": "5GxaFsrqCRwWwsTzCNiWmxcAWnuX8UisVHcCyp7i9tMJXhMgU9oubmiTBnrtRP84Dm37BjrGoE8WnqcTm4dGiu7G",
  "key18": "7EuLJLCZXq3o5DuMLGUg5uP9cQ7pHNB54QXMt6bbcHrcn8GLXgEr3r737E7bR9UEHgp76cdZKawfoYJs5TmYDdz",
  "key19": "62cXB14G4F7jpYH1MFPrJhdmG8S5zYL8fLbdMM7YJQAHTaSXFKJPMiSDitGzRhocA4ricYpmwz8cX7US7aBPtGdR",
  "key20": "5baXhoznwXZ7RRZCZAMJq334L7M98qLHBzhqywhjyJPcvGkhv2TeNDgdjRoYozEhutcBKKeSyfWQ5yb5ERzroQxc",
  "key21": "2n9onWvNpUdXxKvaDLPskFNk9C9pkckvmSEjMmwj21jm8AN17qBnE8BFTGw2uA3eMvQ4zqVkTKp78XKxfbFbkZz9",
  "key22": "54S7CVoa73B6X9eTCWy9N7LofAtGtDKtTMJmNc2KfsxujGo6kAbwWDmx9tieL3wz1fekYHuJb5364NGbP66WBUoL",
  "key23": "4bVAWxRFBLxYitqy9KWp8bbwDsadDREFSYHRX7GLDBAx2tGaJjBJ9HdSFjGNuuyzhv8qNiKGzHps42Tv6W89GDrj",
  "key24": "jXLoqque6qiR8LT8kWzzs911XqYVW6m9PDxt3zkdgVksp2vrzsSF8KYfEtUyi2pZ2b9h1ebCrFu1vgz46RBAdgL",
  "key25": "3f9xr3VZq9n3ptimXBg35fpiymB96v5ZdaB97JuBnn9CDqwEztHZ2ZokCNBCUA7r4MjGZeitw7izR8ghK6ZXoVkb",
  "key26": "5dMUHGcr9p2H2eGS34Cbvyncf3aytfpSJREm3QUn5rmY9EEFMmkTRnuYFbu61LjUtPHDVCEwZ5YH6a9Jjg9Udosr",
  "key27": "n4bS2BCzrrLxwPZBH9iaWUtPUTWEK9uCQyWyh5p7DUu6k1gfgPTwwhMb7fbZZbDgHqsFSAMkNcipUMrWLkkW1h2",
  "key28": "JzvYLNyjYicZVtEmKSbF5KcwgAaZs47ZxiTk3nDHNP7WWqskrMy2kUQmnvZdW4qL4rSff11TqSS828RmCZpUn6w",
  "key29": "4aUouLz5eAh7u6tfiD36aSWoebG8pVxhLDnepEBf5LcWvqyoPAyQqKXukYDMQPjXeqWVBVXzZzx7urXzcgpdX7Zi",
  "key30": "FYGBCCFciPyA8JxMAqBnxa1viB2ns73yhBkeajk92Bhkew6ZZ7iyWHo1E2xoCJvYS9DD8KzU5hP22D8LiCVBuzB",
  "key31": "5G1wdAGfPxiwcxw37U6uJob91XBfDfrYZuWZWQFtnACZ4oBYvnLLD16eb1cXijdSgMMLUnWLFojPVJWYc9r9zD6A",
  "key32": "2AjXHdCVrJPxYKaLSC8qPkG3Vf1ZgpC6Ywq25EdDKahdgeCspvzruEMhVhSygCM7d2GmAem8BZ5p1yDtjvNVGS7w",
  "key33": "3x6Xc86LjaozKxEVtWzMz4dSjyHVnQXBu2UGzdrqC9tKhsGLYZSH4vm8ydJiQjaC8BoRFcmDa4kosT8DxYwnf4nw",
  "key34": "2YqpmeJ4rSKhtbMvPMLUkNqazspfoyRP4j8zDRfmhhg8pU17uGMSJXxXR1UuxCE9nzW8eMhNb17R41YyLg1z1XVd"
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
