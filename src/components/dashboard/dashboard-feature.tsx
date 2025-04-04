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
    "3naAtBndpUg4SWuTZu9475wMZqWvnW1JRzxmu7S2qg9Jprwrh21hqXsKGTc7n66MH3H7gbfr4wegXzNY23vCVM37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497RRcizvPr3fE15VPA9pjx7NntFkxc2UWGEJWg85umWAdtRE2uLhNhkbnrSqBfgAh93JRnd8EUsd4s9K8Gz4xmy",
  "key1": "4L7tDur7dYxmmYJLoipDhpMmJZ7vu1oovWxbWp3rEbNkEuwhYTPCi1Q2VeV5MznzPHwYgxuypfwQsbjbWTSKhfh6",
  "key2": "R2DKsBhTYgDPppbR1HaYMjEedknXab21xZggyfGPQKxr5MvvN9o87fDa8Ai5FY5Bm4HkzW5UuKpS4iSPsb6rcNn",
  "key3": "DSVn1YZeyNsrSMLeNSpT4YULaU7qoRifHZVzwkM1iVY9LKyxCV3fqgfXDLDRjzAFuHbfw4GaN6BmS3z7Dp4hP2v",
  "key4": "52PePtuHGccn5mVHB6otpL4MWpYxSwY3fySaWvZoUCpKcPfkofZVjq4sdAyLXACGQKt3Jxvm1ABQy6JUEutycyEH",
  "key5": "YNZG4KY8XefsmwYA7RcWRiBAFtJWFJGwQsP96F49VzvSNWd57T1Yq7CSLJPXkmMmkYPySaqp2z1CACsCthwsoRD",
  "key6": "5RmDUg6k6TGUKFB7NsewEqG1ZPvcvroWmKXAUhSxQiQUJatdEkCBz8S7GzSaS3Ny1kum66ao2xijAyKuZs1EG4ey",
  "key7": "p2CVfC3zJEizTH41C2kpVF3AcMCvPLsWNUiRA3RLcFg57k7uTsByasvacxqfSzYtekCAMXJLtcGKJk9eSag1kHj",
  "key8": "4e4HtUHWifZdBT8fpbaFNCVap9gQeqm8oJbHA1ptLJ5HvvGampw38VKuGwrWomYXuPrA6K9t6LXGziSz7Mn2eKeE",
  "key9": "NjG6ZLWfSbzCEmkdJi3Rka7q4R5vhMBcA7UsKJfFMaKGjs6NwAiWe411hK2hZsadhnb6DTqCXHPPysPPcrmiN65",
  "key10": "4mDXmjwmGMdzQcx5oxwEsLt74nZGf35cmuBpMy2tJ42Je1E8GyttbywKqR8qoDwuqxCaDEXjRxJK3DtkY8vw4KN6",
  "key11": "42nH5q5xk8XG7BeTwJUXFBm6dq4o7utiZw5zEggnNwhCmuG9dEJzeUYtV6ceHjBQpBgEwYc1ajKUA4Ap8sCfwjvy",
  "key12": "536kMxfLRxfr21iUgMjTcD6GSJSgPg8Myh6SioEbr48ZDJzDvvXQyv6erpJgKtniBJ5o6HfcXEeE3A49urUeHFbB",
  "key13": "5Xjwdpgv1sZspkuQFSTaGdP3tPkQbT2BqUSvSstuGFi824aVxxjofSwzUNutmiE9MyQWFoe13vMBWyq9pZzxqwkC",
  "key14": "3grFhBAJk44Gbxw279Sdm96ZoNWC4bv8YKh7q5H9SmdYmT9yK7L7c9pF8zVWWMchUDK3xTKT592VMpwYdN5Zz3Ni",
  "key15": "5pXxHz6JMMVmRiRuc18PxnZ2isVH6cMuZErr429Am7HRxnk1Xrwwr3saYiprnv9zfayuavcEE1FdYJc9Ab83MaGf",
  "key16": "3AbvAwJfYr4bQtG5W94hHw9rT83hF4aTwUXucYd5RPYXbdKpbJvWFVpL3KVU2NnCF8C4wUijq2BqPDHyv9SjmQp7",
  "key17": "2EyWmcvjjegVqy9Aytzfr6XNebKTZnmgS21HYqmdcXpbkYETHucA83BvFgPLsEDo3SxFchX64oZtUa7X6vekkuCv",
  "key18": "NXXQJKDqLmgFtE5LRZoyhBajvQfpGvbwbHSDG5YURHnUXdBX2Kigfb65YSeDPvATsa5Ni4mqoHQd7hWdeco1Whf",
  "key19": "VAAgMgg8JyRpDymqprkKnY6iX57fNEJsf2w6kJxuj8x7eX4KHrArdZFD2RX1ctWH6c8iueGyLvyVa98AkCoACu1",
  "key20": "3uE7T3uKj34fhHbnEYuUAvfCz3brdG6ynXtXsd8GqxyEu9RHv336WrewGtp3PTj6vgNAQiMLAYK3WoNbZwsr7dY8",
  "key21": "4a9EN3KvXPZnr5B6o5KASGoPyhCi4REUiDbvE9jaqTxck2hFNJGpjRePRznup47yMDG99oLs8rW83LKSX1H8JUwq",
  "key22": "45Y2uvMHRhUZXkUpSaG3mwb2ToWNz8TAXdwV1DPKTJFYuspxC5QGYwxAcFiMbH5KzwH9tdQJ4bVAuXmPFPXJxDYt",
  "key23": "49btzyUccCzMAi9N28m2DGJTtGMCTC92gxPCv2QAvGAvr7jN2XBofVfbjQj7krjyh3SwmvejtEwUhRUMHPp9WvwJ",
  "key24": "57W1JmzCuiWU15wR4tQdxcyLzZuR595kvmxLMmKTxp95ywkaz4BYUKR4KpLk45jQjGN8i5b56y48apmLCAMh5o3K",
  "key25": "4cK2eQcwbcwL5mKsJHDgJVRpNsRdiQbrCgPXFbpfp5HhzsEXxz5enFmg6R7gsqYycxY3UkTqU8ugC8ingxPMfJ48",
  "key26": "2YZbbc6N91cBmpkwKj5M6UYVtoB9go11zzj4ChTvvxsJvsGZeUADrWypY5yC7ApaRBibMwJFVWVVPeN2bJbHM6yX",
  "key27": "5MeGTmaTj8xa2m3s8Z2MmhpFL8Q4e7f4DSgttgcmxjwUgsNBdvurJV4W34J6qJ1impMPNmiZJozP5fYHFD5j8jdq",
  "key28": "HdkSD1UvpX76qiRVfasG8VSzPXt9zGvVAY2DxQQDHs9kC74Q9xX2EQPtLpCyHMxwuXjfU6rzfZD1RmjNPPGWyyX",
  "key29": "3tmqgUqTACGhwrHd9vmoQHMVkJgkDnKLGfgrYiLvUgaJz4JLhNZ1R3Hp42BPDEZ5CJmSjhV7TkSa5JUAiH469TAQ",
  "key30": "3wUSTahbM7zdB2BCeevQ2gyTmAFQMTA2YfJiXV5m4jXUDoiZ5e2mUGcJeNmKUfYBMasvyvJRW5LbSGLBpQviJ9uu",
  "key31": "349P4MSL9KvbwkFmML8paRXb4TghNmXhi8S8pM9Rz3o6SwdzdhbAu9LzLXV2aZ8RFRqA7c6SByfsMc9en3DNbS9b"
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
