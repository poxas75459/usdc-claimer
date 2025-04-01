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
    "33HnKpKog7enhWXVVBAyuHE1Zsw3afn4vsaZsdya6sB8GZbL5uDWeYXKZSeWi8yBKmoRuNt5pTu8E53Jopseo9dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwm1eZu5VrFutCysEnA8ANp3MJEYFSrstNs6tYZBi4oMjnMf68VvsWrRqyLNAaj7LEWE5ntMVmSN5hPpLXu6Vaq",
  "key1": "uzWTeB1mCADfkdxA4kRybdUPLG3t8A2nLWdRMrqe8cyP1xtodATjjZ6aFn7mLCETpNQJNrMX57tEx7KMgQf9Zwj",
  "key2": "4rgQisQVfRJL87Hae4ZnLKtXXTgJdf2QYWySjbXmbjNm8XQctMtmHcK5NtcdYUG9jGXhiEHxkpnbrfJ7R9huWfyB",
  "key3": "5Yxn5iVB1mEQDBsUHquLqzNGqrk1sn66kdFWoRwtJgRGrNJzwf4QySjoseXsufhvNBHxagewQ7X7brCQ79HfhUs4",
  "key4": "3TBG7BqnXhQKVieQFLeS8XxYwNyMB1W8HDq8QkRqeRznrehojXPkoB3izT5zyGddyAMBumLR8a5hsq74YxjznSy8",
  "key5": "4WH3kN8YyFTww24xcTrjEnwYNSt5XnzhbAM2921TpHS3sCwXRdP95y5ziUsdHfzHxVDYFn7U4CBvRFDXqgBFJoJp",
  "key6": "3mXUcCtdeK8jYPvvxrE1bGUWWR1k1hwe6ayz3UCM9FHzaG3dmjNPtjsqX68eLD8SViMA4xXo6YyDBHQBysJjSVvM",
  "key7": "2ZFxKUsoPEqKSz8ZCtn9BSVrAoBMA4MkMhwCmAT9R4pLU2XFA6HkYdasR5CDAJph7AMj31gdpQUdJqCMu9QWLWrC",
  "key8": "41Po1n5ASeDHRSRy93t4SL1JwTToSEYeJCUX4cqpYC5mWapXDuQycnTWuYw8W5t9DrTJ1edmcfPpixMFBcVih2Bq",
  "key9": "2XLBQ84nHZ7xFBYz2LFPTuuiyKbr6uHErbNDtUnpeqWnobJC5wFmba4ibSAi6ckcj5KXPMXFKgGJq82VQ4CpBxUM",
  "key10": "3mVt6YR6aBLVe6prgzWjrDp46oqGbTrJNCEkRvoH3fa4EN1143wEe1crZn13cQxj4op3gu9mZ78TSLb3gJtFAkzT",
  "key11": "3fyxDXjZwXDkRk187ZEUdtQh1tJupt7nKJiheqSbJz3cfweQWTCCED15P2mUAC78QSxYY3VBoPbC15fzXzLpdUax",
  "key12": "3EheV4XHn5N2pbwfrHcK1fr98RZx4TWD1QUBT1P3wUVcb8t8NzEFVbC4DsczNZS6MdcCdqZVeDaxWuw7YKjRKtzq",
  "key13": "2mYGR7U1kRUkp6hBk7ZSTbuKG7VfkT8VtKqCPFw6A1Dcv854gW8A7hhSd4soCWjfWCxKMwd1bVqXyuesNMMz3io9",
  "key14": "GXrdL3RZrDL5Hu8ASyJ9SwVZtV1QUxhefw7rGgmQf5shKtMEWH1HW5vJenWDowcSfjE6g9d113DE6DrkmgJiTZC",
  "key15": "iNgpqnzh6UDPtb5vRrvn9KfyyPRgSWQxeCAS7HATRgKgNTWphmpCHSprvEVEm7FTsQEkoiG1ePzhDbyQszwvhfQ",
  "key16": "SibMLxpJ2Gt7XoWVFXWjJqvn2AJ3mKeepCQyZ7Rj9DgaS3GxLQS7gwMHeT1UzCSpLFbuua3i8DoLQNFqEiR1or8",
  "key17": "4KMcMXDSWbaqpNGfncxN68vK7rv89XDSYadxA1Af6iEeiBB9vnWy6oG2XnVu7bTHZSPffab1kYSzvKKUcqkwxcAw",
  "key18": "5L9EFdMviJLPyUaf6Dwvi9L8p47TeWYhwCx61noHAWBFejbL9UJmtK4Y1DUVywUYGoA3xmuxb9o1yoA3yGdETkkf",
  "key19": "21rpAoYY1dkaJyZQERx8jHb97zBTCbY4qbPdtSfdpHfR7x9VhSJuqtnSkwkCdQDyJrjN1BkfS4e4JwjmWk2ipBk4",
  "key20": "5wWtmbLrG4h9X6Vdw5EF3iat6jjqn5kBMXMAwE2KgpFCo15jgdf9VpDFGx6umwaFdnxmYKLqdbzcPnRQuHHfF1ui",
  "key21": "2zxpbrdRxT7i3sXaxywL1LGYSeNs633Ea5AHjzJF3PJvs4QhTXx8cZTyt2BCp1Q3p1AHCLX1zWqSxrRrhdBv3X3k",
  "key22": "3BE5w3kgp8VfJJwVf5XBF2WeeiHtbnaR89prwcH5UB2kHieXiGWHdw1F2MmdGL4yxXScH1XUL49pinLk8gL7a9GD",
  "key23": "4Df981M3uZhV9YsNeDuKhT77eYECUCywVw117ASfcEYrunnkkVVHbBmU2bNyjgiTdQYwCnvuQFSwyA9YhFcWKQuo",
  "key24": "61w1DHaUHAtYK1rLpaLh9SygXu9PXpxJfvyibrev6JU1TydS9qskm9SiAvm8PRBd3ohubhWfs9tQxCuRM5p9sNFj",
  "key25": "3eNS6P5EUWw72WEwsWXmJGBvWEsuu6f1LMcmdsPB1H82quGgFfe7mNvV8EXrXWiac6sQnrmfYTCjPBjE5WkXAdvP"
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
