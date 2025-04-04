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
    "wY1VWCszSALfkVKR9HirSPLqKSfzow9Vmruyi8W3MYkwwSzBep82NHa2xGNt2n3WezuLJLGrsXD7qBLk5PxpkTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdQpWAwymFtmUzFg7bw1XkC2X6jXddgMs74DMNtbXoWgX3j8tWLNPXNXifKKdNbinhZyNfVT9qi8KkGgfQv8M7M",
  "key1": "3SWQgSxVnHoKeB96FCECxgqnW3FvQL5irvQJzyRS46woN6T9YjgpNRErNXwJkaYUGvu2gppJ3RM6aVxm6r1Y2pba",
  "key2": "63Lyh5CtfYnTWzCe7jVjrDRqeCLNAiJooNDZKUereLrpWDuXLPCwF9Qem5M8Ay5nef1FbayuHRSycAg3rkAEDMpw",
  "key3": "4CZiMFKgy16a6FrRcyHdGJvBDgnN9g8ZULzbRr591WGeVau5M1LcZ5qtDUi94a2JjsXVdKh7HCdmEZYQt1w26Lj1",
  "key4": "2foG9gJs5rWQAbvqJakkgmQB4qTaDe5fywhF3od6RSmiqYzxZgkWkeSLDzKfT4QZTCqLYNCkxqzcKcr1KSQM3cGW",
  "key5": "3T4xigPVA34vxgEDWfptZFkLdVnhrDnc1pfLMqSVAfk5vN2FPv2ahNyj8cCs5yWV8zUYcXq89Ajn2VYyZRJgCkyL",
  "key6": "5W6vJMpjWoz6XsxFp2me7F4PL8B1bA8K5ZV9kBagbE5pYAuycW1FC6wLJ4SiqkK2z3knzpoGpLqbL94TYFoQEg6k",
  "key7": "3xhBS9ivnCwwquzbkXsLQSuHanarpNtT2uqzAoV8TV1ZeioqFXzk4pzG6xUpJ1NUg4omJonbA2i1va2YLZ2YyCnw",
  "key8": "4zx2EL3SMrDK3Hp7QsZF4kc6GvLfbfSHVxn34hyrYGJUdD16TFRVcDHFFjFNRjXu5ntAhYyhmWP2h46HtWkb3MYR",
  "key9": "3z7yHGacs4tvuxFVfnRKmYRkAK1wA8e5wciYPAP9qEj91p9oheJFSQ85HRtmgHZe7Nhx5D5wfgsJio8WiEgV5ikt",
  "key10": "2TjVjPWMKkGANBciREG5hkhKdcSR8Y95GpoyrHoKSd58VbjziFMQTfPsPDj2PsD6invBazhD692T2ynBnpbHDFav",
  "key11": "6FhhbQzW7vi4gDADhoWpfsfv4P5DZW7W6uvndVPygmYg77u17BCqQ7xYGHKAMTwgwzVhN769uBUPzpNZMUhWHJM",
  "key12": "S5Z5sY715eEriWtAh2yzDja7iVxYU2nCUfzBXr6BYmat8YzZeTbULsmMTi1xuKMKp27vKX5C1sd9j9TT2o3GTHo",
  "key13": "26joDyRB2uvDS6mcTwXKtzvvj96FjNFV8xaJSjHfmsUyRBZVgbPg4HKEAavGB896km1n2sTZrxZNhbQ3EtGpN467",
  "key14": "WLEGhYXa4ggmskYytHH3GaeRECsH6ZUT8ipPp6t22HJRtTyA8cRYSctTtfP7roKZ3y2inahGmVHVuzEG5Bq2mhR",
  "key15": "3UKKrRmABjQYKX4PoJXPFg8GhVGmJ74Ra28sYDHqffsSTWKoR9sSrPfjrgU32AdnTzBn9r91pN5rTtCRAjN4TC2L",
  "key16": "5GjapivYFmw7gFBQiQdy5Ddfnf5hwqxs7G5rodeteKPfUxWoDxjJ2i367kE5V797TkoHeLBeaB6LwCfQ4kLTt9Ke",
  "key17": "3ZfZCZSmUqcFbFUbDPMWp1tJVQ1RNwZ3ne1k9hsAgD946CF1YmX5gHYC1XcphuGDvd15JQJgZuUPgRtuox2hKTfD",
  "key18": "5rJwso9zqFa1uEcooW1HzVeTxuLcmoVKw2UH6t5px1hLCPNuHzAdKCBeaeR7CgD3CQajwyYeXCbbmHbGzpa1nz2P",
  "key19": "3b5vjqhqZBsLEWnchnfi7oLzfXJmn7Z8bj6GWq6eg6WBDfVJUXwaprb6YoXzYRJpSqyjAVcCbG3QMoxSQ4BVrqWv",
  "key20": "4wH5VN627XWGWshxevVW9cBb9kRn7QFdYmCUA4W14M64KVQ7zJy6zVqZhCyeiYtAeLmqA8pEj2aLy3UgDMdqQzy8",
  "key21": "2Ebhs9Jkkex93apCHuQq5TfnuaJUgHaTi6wmr8Gmp1NSrrdzW9ctoU1nLFuEeKD5Q4MhVVukrJzsPY4fPYQyFbNA",
  "key22": "5Bhe545KiTvNCAxHJm21VS66dsoFtpAL5SqLMetFuGXZfheurhLFgUBULiytHn9dx4KZrgjQScwX5ok8MkVkghp5",
  "key23": "3VtDqhgnAPcameXyAELX9AwdALM9BumZjNBniN28N4RdPoqtjkPhSZBoDVxsDZzodztYDbrutW2dV1ebxXQTFDDJ",
  "key24": "2E999WjXedCYyHiBAVupfB97RdUzEmQyzAiAagmB7y4mz1UnDpToegR1jNDhHDavb7GVoymPYxSn1RCQcvZuGRq8",
  "key25": "4J9J6pauGmm9PYJpa4FSXL3V4gHV2i6EL22nn3kTzLzqbdwJtjFm9fPZqv27KAFpMAmhn37nRGutEFdJhGkcLdd7",
  "key26": "42cQENcGXy7JnGnu9i2x8vSeMo7TMko2aJcc9Bw6y8BbnbLmHgnFERatuwJ2NgvNC91hdabX4p8UMW5DCa1SVq2w",
  "key27": "5oDkViTmgd4GyxdKCFBznwEswgz9VKjhGAAbZFYqbVBenuNaeWCtcPrna6uXTTNV3HgC9joDfGFJ57jULSxxDHpj"
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
