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
    "2fxeCUanv3gm2ZRcTnn4N2WeAZ4b8YzohjrmZHsBXj1WpHW5ttRBDXT6KFb3KdRXDaMC7BSpUHVfstM4p1SRB8wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9PVcDFJMzbteH6SMzaaxErn4MdVnBrydPBriP2niEdF3yVmG4kXj4rnac6sZJSyqE2THn8fQzxwoVAYYjjSAqY",
  "key1": "Abpw5XswLNFMNZXCnA7oQFfyhBnfqRNTNjsxUUbiSxpksxhwuKHaKrryVvMvn3CsTWVMTErHWV7M9HM8ZjJnY8T",
  "key2": "5umjKJatp1qQzgPUkrqKqQKrTKUyLS16sn9u1jj9zV3xGQ1TQv3PdKsMd7h9taMKZJ2QscjJuFcKaTUcSfS19p9z",
  "key3": "32m9PCuSYkivSpjfKG2yPba46KT3qZ7W5Q29Ed3BzH6sQHhw1FDrWTVecB8bcG9agUbCgQL3SHs2n3az66dd6saz",
  "key4": "2BnzTr14u5h6k4bzk41XVpH9GrkRTQHr7G5DNUYx5dxx5uCixqQRPYzJjh7frg9sqViH9P9nzeb1Lajkry9pyVnT",
  "key5": "3gwLXFtYZ1zgCmnwmfbKtMyDW5oSMCVV47zVb2kpjzjb2eqAAz5TtjiHTG6MWTEBf4hChs1PJRDU9JTUjLukfhTX",
  "key6": "58bvXDBGT4t2aHETXBavyXt2NA6EKYDVo2oD5AqcXKkx53zh267MUMoB2mRt2uvB2SKopPJ77e9c9YWWuNHZW8xy",
  "key7": "3uu79Lv8AstQS7dkkcDyYmSFJxWPkEyBXYkZ2jWZv6kt2wBcVe7yyrf6XMq93Sb71wgxWgvqqKkEKRM89r9h7r19",
  "key8": "cJfeZw1PzgNy59Z9Ypf4D461AiX6AntYHQqbcX2UwboMSu2GEp56qDqLbmrZH1eBC3uC9jCabywCwe8SwYn9vBH",
  "key9": "9Buv6pTEFZYZwXN4AnD1kmwTt1APbSeEcQuApuF6QShekxKC3FWniQuPpW2tMXnd5s7LA6gYNExie77idDDE2D9",
  "key10": "YaKaxYddfWLxqLECyJhAanRYb5yVeNE4pmQNksLtSTRmpwfLRFN7ixK6syE4PqCHKVN9zsKv92XNmakSzTbT7LF",
  "key11": "3GPiDjr2siAFwvT2whPg6jYgeUkE2HayUJKokHMuXRV9qZPCfNV8dciDr3C5CRuujwuHwRTvBhReiCJU3QhJ1F3s",
  "key12": "2qSsCXuExppAarLUg5cBtVLFfvY7Lq1Lft2A4joSJ7E8JzppEvUYWrND1e3ENB3XHP2HPDUMa1zSLrHuj2SwfK4u",
  "key13": "2VU8cpRfj7q6YWwPXYu5MUtBeLHScXgqkJvQEVvpsWVfd5yRtvA5YqazrS9EmKhnT39bKndFwwmWT3NpUB14Jz25",
  "key14": "io4pTkDWJ5NDFeA9VonWfy2k2dbG5d28gqpBUWm81xcFeifPRsAX42qdRnUmUrkq1gzBq1YdiYGnJTsgVFqvJDP",
  "key15": "5yURMAAoYYDkSE9sBdVKPASNu5uRN6wibaswRhgUUiNDMyXfHbXBA2n1JMua84GUMVwHn93HLmcrFbVH19uPMG2K",
  "key16": "2nncYo4tS8TNcaaq91RD2vjM8jkugDkEkz2kcJxsMrMrU7SXLWCshtXXwYo622PjmpZPXqfskWCq1Z5xt1SXZLeB",
  "key17": "2c98fdQy5QxkoKVGo2kADBDyhrnaMPLBnZwQ5rFKbY4YfKL2yxyjFgDwpd8j3XHHNr1hq3FdotCDaku5ZHaPKiS8",
  "key18": "5URx57Tu7k1SWxAhtWykpLYTgX6otWE3QWK57ZzbcvcpdYBEfFXyJD2TDdjjBqHUVgfuzD45Zz73yVQqQdpjt77M",
  "key19": "tSQwW3zB3gPsbGyq7yBcHuZEZHR4nREVAXwHtf8ywEQiPQ5qkZbFR5qkFmJmZc1xnysm3FksGQXCr1C76ic6AUV",
  "key20": "4EPcjeW6V3sHQoQce7Bf1w7kuSzcokHkmQUzHohsGTjVDWzeWgNtgpKzgFJubHiswgkedTMJeUVGScGHa3PTEYaw",
  "key21": "3Csr5XRgjhzfGWEwn61FQw9FKtgGC7YDLMeKPVvbKfkxhzexjDMCPK2CpWhk6Hxh7Bvz4377KfuE1iKrz3dY7P5X",
  "key22": "2GGu2e6yNPU3rtLqd7BKnzD4oom66Vugq1pgLdDMx9Bcarqi18yeXF6kP4SqfqRBE943TVtB2kPyQAe7nMKEGKyz",
  "key23": "EmGy7bSBUiiDvs9T4x7D58iECYCCtrWpCWrnTwfqGZ3QVZJyVFmvtKDF1z7m3UCMkCpQ88kBnN6edQ7ePtmW5Rv",
  "key24": "msSKY4xJMC9uuvpb9qNWn6W2PR6NtUVWK1nqwz1nMN5Wtgrt5EBqDgVhrbQJ16Nx3VBCvL4kr9fNyQpASM33mEL",
  "key25": "3Kn3cHP4Z72eaq8V5gXfw64ve22AXaKxBhTxFYvVsDEDTpSZVnCScGgc3bDq8yETJ3UvYHsHn2UcobigiffAirwC",
  "key26": "34WPwy99Ws7XWWcEwrrJXR7u6pRTAemsWA8omeCGsRih5tcQcDrnmswR8UG4amWMeKcPhtavjQnZYfh4NtMFZPtY",
  "key27": "545tbSYGQmedSFkHMb9Ef7mnfKJfUvU3k1U91C7tqs1f2XLVpreR5wBc2UeKGo9uhFc6ph7bZm5Ci3RyctkiWFbr",
  "key28": "3rXthTw9YrNkD2or1YTe1W1uSi86yHit2phCcDBo2g62iFBA6HjWN6HFWcgGAXpPpV1VpaQi2GMJPxBYWgvbpUyq",
  "key29": "336nKfxvkygFhJNde9nMTNy4SPSnxKZwJYFfYPgtpaK23jvqMznvNXRb1ByQitVWbk8L2hUYQQ5DPJHR6WcYM67E",
  "key30": "xZHv67FfVsz1bow5Eyvagvo8yUKJyyH65uXutiCtwAHmEeQuYFmmXeh21qDQST2Kk1RBpe5SYZ5BiJv57CZK4Vf",
  "key31": "6Yous3XJ63b8M54KDizXXCc1FzWgNuf8sUTG12Zc93xxuSaJqC41VnhAmrbV5zP3Ha4fQjf9apJggmNEq61ip7b",
  "key32": "27Xq7z6j9KZDi9ngxbrLaWZ6QEBzR7zVWZyN7hZmyHmoVaDgPBUCVPU83DQYAdKg4SzY28gVKJBQc34L58pSM9tz",
  "key33": "drnf1hBnPXt1T9GLwyRT1g18ymD6wn64U8AV4zSK7U7Pq9q5jPj3vr6Q9RSCYxtGf6hNMbXMAExpnJHroaz6qap"
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
