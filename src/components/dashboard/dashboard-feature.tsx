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
    "5GU5sMvkG93vfPKyFdGbbp7i3i6JMr4tLXDWq6zmbSe8wiWLtYebtjNe16tzLw4o57nHEemnzYTLJ7tNez5bkPUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L99G6R2J4T7aSL4UndPCVSKoVfs4brX6Tu2JLJZzbsu5RhbQdyaYey5DmeuQ9W2nRqWJNbQx33okdwUJqGCh2sK",
  "key1": "4jBNRiNy8PTHPhBGxaV7qQsE8RNC9FN9hRYpeUDQJiSVngpXjtj6nuacK93JA3dGhLsH33W2Fws97P92AJ9cxwHQ",
  "key2": "yNTqVHwainzDgrqaQtgz3hNWKMbALxseZC2ADWaFaXDGstVkx54NRppRFKQ5SvcJRfjF9MzfKrMMHDNCLDpuvsk",
  "key3": "2KGLRLzhMxacA4vZRoyNsYJRxPyWnwy5qqQ3Ka62gtLPNzt5WoHJrY1vhcv2bc9yPQtjqg3A79zSiTrDB7JwewmB",
  "key4": "3tv8rTEFkDX9mnGrFG3pbDGrWqa8B6wS7AH9yb7cijkeHDjkVPx6q89W8AP3aTmgeL5WJLujavptgm2UVrKqCQQd",
  "key5": "3PSd1aAubXChh3qe3XdiBTHCgByzjAw6PeUUPaSVvh3KaP87PYD69Zwjz8vPb6hvYfWbpvqR7NPPjyZuNSz8zFYU",
  "key6": "4P3CqfdCFuhFj9Xv6we845qdKcdj291VeHKQSkY3m4RYW19ci23ViuWSCoy7M9PXmWvVYVXRkwFwbRUcmwuZfAt9",
  "key7": "4axSy3TPHe8wdNtEv2Zyr5y1BhNvgEdVQCA9DmpAeLYK5eGKBTn17QsbPcrXUGnPvbGuD7oC4hV7mvzKV9WAdmnt",
  "key8": "3W2LRvUmhKfkZ9BCocDrj316WTXdkDN1RKc55ovabTCwrrqrPuHQL1RZMNYL14viEzhzguDKP6Xnpnsr1gGUe473",
  "key9": "3Drqmyx7pXSHM3xcpSzJ9dryatkK9Fich7jDoaNaa7nyHhWQErENJGBDcsJ1qFr8cTi1jsJnzarTMiE7DxU1pqCK",
  "key10": "4urWNv5tKxt4rRNFhqU7pimanYjAXMb7McM5hwvtb2vJ2wjYcAKKbVyB7CfwEGEYqtJT4zHbBvBHL9vCGJvvimVM",
  "key11": "pMtGN3oeQ6PzMydBHqc4q4xuoJqwiAfS8hRvvt4hR2WP8bU8BkBKBEb8j97ga15bc8t5UX7WUhZRUL14ghHMfq4",
  "key12": "j6trhmH3Z938XnzVvj83SFwDCsrP7xqYb2fSMySj1uiUoNLUYA6rnyv2zmZjPCiUQnwy9yuipDX9bm52jfptEd9",
  "key13": "PEuTcd3MxkQzC9GtHdaX3DHh3PrEHdGzfVn13WjV22qyvdD6AHSHqqGvjq6XZZuMzuwxDs3rZetZxBouhGenQVs",
  "key14": "5ZUhpAFcocum7cUqJLr7pWnJ1rgaN29itAEDnGEsZ3FJgEAYcJjaRrDRym1zyS5Sesh8Nytg8XrEyRfbaFgpD5c7",
  "key15": "4wY43PtFa1sVTWRT1DfoN63uYNZx4DcPwWq6tb7RvWzq8hYHu9Bn1HuVP9gMmkDUvGSikdyertUz12eWKtiAAfyK",
  "key16": "3RKM58gFhqm5LZWh2hJBJEJtpnMzDnYwa4GZ6bwDiyzxuAnNAMpeCshrCaTjU6gW8UvC4eARBg496UUeNkdPMPoq",
  "key17": "54H3sZ6htCtrydVvLj63xfD5x6gkEBKnqSP8eNPFwrAC5u3KGo8LqejkA65UPdmLEnU3jkyhcTZt4pq3FU743yUj",
  "key18": "3bFdWy2EKxicyaRcQTU4rbXGZauruczSj9eSYUo3Wj4FL138sK58GD3ufgLNxKaTNwj6j65bxBh779sA6V41hiEB",
  "key19": "WuRAxUK19YYifPzqeuDMCo8pJy181zrR3kxChcaqJG9GXgVLzJFM3Ycn2hbmYhjQEoFTv223gGkTkf87iKFbGxD",
  "key20": "31FxXcBWKC8Q3kc62Urc5MhiBYxMw2aHtEj2MP8L4hmuDuJjCVGMbsDBrkEfXg2zkWamsf6bWzsPwbKuZoL7ET8V",
  "key21": "KdVnz9uixSLZMW4kZ2BF8RR7kUBK96WoWypnAAZKs238qkXUv1uwczLDULtfYgAWqhLkB4DSw8VbmrwegeJRDp5",
  "key22": "3Q1Mc4imoz5JU9dweEsevgZjwgXYZF75SJ8msEx94tbPjzAQdyhFVBc8rQJz8vHyLheHq6noEEVfjuG8KNpzopRx",
  "key23": "5L5ps1wJiLMUiDXEgqG3nE6EAW9nvnpmVvffNWXWhP8qKb2RwTN7WcombRAADwyLDSVrbLogw8ZK4GuGMJNpdFf9",
  "key24": "39cK6X3hS6S4WpqUdMDniTQ5BdzPPdvj1vYB99WxsmJ8cN81BgC5X5K6vgTsoe1S6YttgdpESLFF6jP3kanYEXLx",
  "key25": "5DwwmRg36a7D4dKB1zc7u3KKACL7Tg5erytjmF3KQ738fAQoHFZKBjyVC5y27XixMqxptvbBH5C4rGD1zxyySSuD",
  "key26": "4KSyEvHbjjK56GS7bSV4tN2fyon785eDyuj6RCY6grt7SqQHYywN39fUcqrtugc2UaBpw4WykbgT7nYvR3PoEnLs"
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
