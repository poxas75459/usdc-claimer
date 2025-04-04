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
    "4ha5KTFF4YHbFChuwCzJtAJNbWZoBDTdbaBbYqmByrewQggm6v9QxVxoZMVbKqhVdy1xRT15eu8G4hkM1HTQfiJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvYjUTgL57bgbeoHrWoGDb28JuapX7EzUss5PRkRA3PRWaG1Mk14yRFdXvzHte4LC7HxWN7oCDvwzgaHjvuUPQa",
  "key1": "2GBhARvJz8b8fAAevjVaePXL31wHZuE4LVCKFypNcEzv1SXmeb1LWNPFmenxv2kCjjh7jotLywzn314jHq7oppkg",
  "key2": "QacRqazKSVpEVhaxdJzaD9AvUbaSeedKLb3HchbQvzhmFZw5MwDtJ76UCp5UjiA5tCkXLE64k9GPLHmhYVekk4f",
  "key3": "5CngVv6NvbphfJrTi4592Sno2TUS1V3obZ8CXATHMbdKMAqD5wWeNTqJ5R5bG6YrbUHSRRou6V91HX1vPAfi79Xf",
  "key4": "5RfYQ73JfnUuKMhVRPdGdhmgzpMe1VVwn5JCr9nD3a4TKhMxB7yVEqZoGprNzaJV5QayeE61quhgMkty7okUEpaE",
  "key5": "5pSDq21HZ9DEa7g6xcBdZpkjJ6izLCbogWNUiCS5ePhtHWJ3Y9ycdtGGGfPnw6EjXFyJdAA2dZVCVfeLdRU3Xmgf",
  "key6": "ni8o68tkL8GDWFEUteeSeFCcecdgVAV5KhADS3fXXVMR55UtS2yWHU5yxUL3h7xvbd1ftEooh5VdT4JX9MGVSQn",
  "key7": "UbjzW5c61sTLWB7VqG1S1XBAYbgWSbzF5hFxUsUSzSVyHiMFdHDLJ7b2xLmz5Rae3sSRkZ5D3qQmnGHTaT9id2y",
  "key8": "2DVV3mvRVkaWDdnif18V1ScXsvFAx5NZcQDo64Si5FG6Tsqejrf4DbnuQ8LF4BRc4HAX2NGfF3ELKzYpWy3ri1B6",
  "key9": "2afxgY1jVV1tCKUYbGJxmsLpmNkyFts9a3buDuSvJNR5BaUwxEgroBgYoqg3WqELKvxmc3n4KZQPJm4F3GULFk3f",
  "key10": "4zxS3uPftHNuNZPXSb7ritqG3MEPKyrsdwkPgEY9bwBwpKu6WtSLVFGpS91v3FbRFC51mDKZCMVbUgzhfV1jnz1A",
  "key11": "67oDBmy9WTFRQEwE6PRXxzPWW3q1o4p8v1221YBHfY7VoE2QEVqtDdiJh34BgW9tNopuwvf7kQ5tY2dJDj5yWYJ",
  "key12": "3PqEvqhyBZdasMKvFwRFEQTivrYA6poUCHPR6hzaG6FPPsaSJ8mWhnxyrSYkFPnQX7kqM4YvM1p15adk4rHTj9bL",
  "key13": "2tbGtmN8WFw1WkTCLShHy8XrE7Wib1fCW11EpH7u8mVDzVWuNXyhczetoXgC3nUYYswtn6q9GmGt2aKWEmDs4i52",
  "key14": "56vGr3XFjfH3bMwLqqWCLRY8dKEnj83jX9erprMbEWH4eFQTbVF7TMGLsKBGXAzgR17sQJNVBnB4LkpRBJcPGLQd",
  "key15": "3ZbrPmqb3wt9okyU1ipVeostx9HGenkm8EfiZb2KDwXvvXg1X5ctRxrJCjg3jyuSNMPSPBGzBgVDqYVdha5KqNR6",
  "key16": "1pt9QM7zju6crhC7PMzJt95B2nJfdvFPKH4fuF8D69zvjmhCLjHPkE9kdphb6M6VDjuoG9dPvrNepVbbztMvT1q",
  "key17": "5TsYtW1bZYuLfX8PQ4nPzd9AWWJ5cSAxND7rWyNwVCsLmdf7RKHgJQ8ja3V2SYcXFsXS1kHRT3VdEKaXE61FKRsx",
  "key18": "5CJ5cVFDhee89f4KL8TNsavbefqMijYPZqm1z8VWsGgKRry6EPTiNMKjnAzwiscY9LJnKHt348B9kPcGX2d3uWp1",
  "key19": "3KLJo5ghzkhE4ycNgzE6DuW1E4nGMGLmHGrZsLcrurK3ie3EBqSmZU4n8LBLK5LUcbgLhHndY3p6MsP58abXZmeQ",
  "key20": "9wwD8HGDRT5EjpbCAe8czXfzYvEJoc9avu4BZejxYewx6u3jgnFkE4RwyaCUVRmfhtfvkRLWGzqnvzejiUfPumJ",
  "key21": "QNUNYHGbPAMn2569YvPM9xpQzmESL1paYHArLBKw2JctfgRXEv93Yv1MVKefPBzsdHejNswoknUYrMARpvVHCLt",
  "key22": "4CfLZWbL2AeYu2TTgEu68jYGveHoTert5aheUwHwE2Z9FbAqKFy4VdPhwdzzZbk5TrvvoD1SYQGdf8osuK7cdLdK",
  "key23": "2MiV9yx8mjEkiH712aaNezJRQiknt9KhmkDAG6mPorHEopyUFZCpFoA9jApjA5R5vd1s1yiPmaZdpEJxGrVnRDck",
  "key24": "2AJZo45SMKRGipbJ4UJHdaAsd8oQqM9Pz43Hs6QhmLHNv1vVnAxPudd55bMMV5bziyf4nNw5i9L63Mi4vm8SFvF8",
  "key25": "BMhV9jguRPHGmeQQ11Tq5FtS2MuAov4mj7vy9EDkcJhxZFzcCZHHX421gBRsJT33Y9Sz6u99nEyoFDGm4iEW1Fk"
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
