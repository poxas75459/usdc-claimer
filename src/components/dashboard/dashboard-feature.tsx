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
    "5SK8BRMsFRznj9gF33sa5RCL86zdKzdQWDRaJzsE5SoYhPVQHK1XSRxkonfyYxB1Qdi5FwdfT7HBJZnrZQ5v7q9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29G3dLUCT3UJsAetsUAbDCdmGnWZbBs31hXhAyVAbfWs5WZYGKNNtz22BdWvm8ohL6v2sRM7GTq6M6oECRvnKbBn",
  "key1": "2mhc4i6WUd4EzzJee65n3ntbHFZFX5M1bEpLtvmbGE4NLjvbZUbaLCtwTKvAz3x2fUdnbkMRsbdsu6TTGtaB5cin",
  "key2": "a4QUPseqZwmi8bzTc1RVHueBLhfqumXfqmk7bhmKGh1qUwXeXwR69xThMzCPYY39cwBrvnjoTS3vH556CCRrbPm",
  "key3": "2UgDyUXbA1apYzCVKKJT8U1eWY3HPXSsLxhcMh2Q4A2ZniCUueGt7CSd6netLj4D9c9EzevMHJxEpVmsDR22Gtnq",
  "key4": "WaFKPfobKZW7s6DQ97jeM4Dhefkz4ZcxuoA4e6Cf8u21SYfFuticTP6W19vyYLqYcLjPJQwdXUeuBYvAvAoTZRH",
  "key5": "jiFAwzBg8dE27fPX8f3UpebcPz5Xo3HteW1syoB7cWEndHRJjfdPPQNtGYAShwgbgWMqqtQMrAzACKvawUKbsfT",
  "key6": "2Ezw5UAx7c2B95yQENJmNpkgpvmovud1n6fGpPBMSpkFby9BfWbWWtj3cd7SgJqXAgFzBPVpYA7bM7FT33CZYri9",
  "key7": "2gK7NimHWbzN3pqj8R3wpvxA4HwdD7wpTJKvoRyiB3KFuWGeHWvE7iaAp2LSUiMHo4ApFqmyzHAGEzBuKTzNeUuC",
  "key8": "mfVHd6RBFUietkV67bCh7zFYxqYDtXgSa7rJweFdjE9F5D44BmYkPPaShsq6amHP2trRZGwAHKhFhU6b1kBiiwU",
  "key9": "3EHtErRRtJk193yvEY6crdQR8bLiKeWqBy5e5Vfg4Zdk4m4vBPoo1NQ7mZS41JtSq3AJ4qUG1JBF9usnAC7JmWJH",
  "key10": "3itXUTtieByusKUQ8Hj1XiosBSvc1RqQ3HtTHBsEz2beT9pBe6cSs3TtLzWKgCE5LEEyvWfTjWPbyCFwNqVYycGW",
  "key11": "3CGrFoYshtbcu3xPs9io7Nk6VKvD78gxd5dkuVxyo8iUPSxSTxNa6RvnbfUugSfunGorSXhJTU9EkwfbiuTvZ69K",
  "key12": "5VX12gLmzZxHoTFc4WLK1LrdaxcnJrDjTQFP1y3jLj51wdUr8vZdwWtsB2L9w2TfXEfQPLAcFsUfqfgs8BcNF6KE",
  "key13": "2iHBf6f28czHYKz42n2mSudRFEXRiBLJsAN99A99jGwevg9mSUqCcTQ754yw8anVjUyQxUkMiLeAKRWpcYubf3Qc",
  "key14": "jGxo1cxMZSHbvW4YNbFvpWfs1NscZ7XydKyN7GgCuUJd9N3UmH2sDg8xagSN8e3QPUAyhCDxLisnuk8fUsW67bD",
  "key15": "3YdPBiaBRQJMiYZpqYR6Y9svoSnQALbr4mUGN98ZvvS1JryQzbhAivXm1PFd14AWPeVYAALCvqjFwXGMGNKe23Kn",
  "key16": "5BT7zUKkTbkRjfmwcVvjLJ7TXXZmMrgKCoLyrZppjN5kKgWiUjD4t8j86o63uh4hvjiXVETkChH4MQCYmayYiiTB",
  "key17": "3DMc8qTQDNVfPfWnsECBWGg2h2PL1fAXNLCW76FdLeQWU2mwTvYyC6GNqXCTy6osRMdeeX9e1StuKkVgSJckxRWx",
  "key18": "gXN9Ff9HeStpnxytJuUaoXfX6ixWzWXyFBP8uHRA6krWi34Qhd6xScvsooGLkM4rSf3goNYzELpJeWMVVt7Fzar",
  "key19": "2LSdHDJ77bp5TJTwWgGxDyEqTbfArdemi1bzg3qwcMW5wqDvJqqu31Zh2cDofTyUn4NBJZ3AjSnStjWgDgMsgMem",
  "key20": "CYoxRkrdNLCvCbgsQmrpXdW2htar2Rfm1LPqZmvmq6YWgGkMU3WAsKtwifMLt9JzWQLRft6gm5y7vyJnv1LyN3o",
  "key21": "1mErd9uHoLRcy89VnDXkniVnLXBYtumoLKD628dWVEKRdZfFmp3tzoSU6XLCbGMkfN6JasShHgnWHzJbcF95Lz7",
  "key22": "3jFaGWucTG6g9MnnPgGXThQaNX17GjYL17beCc2ypuaxbAU1RyqfhWGVAMJjNaAs5VhRWiFvveVtpDRnF8zMmDyH",
  "key23": "XHWP658X1Sa6vqmANZFPM8QDot9ucun157QYvq51HAVNiZVBtLYAvM7LTTzEfVeGnu1A7xDy6uU6vePwLVvB1Aj",
  "key24": "22co1QbKF9FfdXxFNVYyAYMRFcQrtfmcgfne7q1TSzPFN2ZLThKfNPv6S98Z8SZhzhHbBgzdcpggn4SzWePxpfCw",
  "key25": "5u3wU3AgLeNBAkMiG3xMjFpPTLWYk1pQLZX5vEEX7VnSgF4Xuh3gkFSLTBXk65vZz9nF4qBv43SBhRAWkAbs3sH8",
  "key26": "2p1HmxbW5suSsSr3AvvHz7iz7keWfUYnXeP93p6aEAosubM6exHwNDoCcJP4K77k5VHcGg9AYvJvUbesw9bzR4Qi",
  "key27": "3qp5VA1bMNCSKaEmysMo9aSptQje3fV6wWMmgFNV9g4XTgxy7Yrhi3p9TA9isfNd7C9J3jfYVRphkcHGjisiPBcr",
  "key28": "3gEn4mbHoFh1bBVUbexYBizFo4tWLcxZ8bF9ieAkXG4GvorkcKvk6T133dTqvWasjScRcwoZpAENBubR14bGbsH1",
  "key29": "j6T6iViJrjhUXqYGoUbzHK9hdSD1AHmb3KcuKCVHDfdJJYM5scVTykVE4Q8ZAohntCgU6mjTfjyFRfi8BKuWDvu",
  "key30": "35VzG7s3uu6faeKSt62XnrbWYnKDeeYxCSB81CcrKZoHovfxzGJ7mpGyBr66imEoBYMkzNMyVaqh8JgsnAhHDZWP"
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
