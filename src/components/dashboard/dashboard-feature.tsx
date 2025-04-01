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
    "4HgbxREdJSDmRfpyEcDY7E7daWJmE8LS3ofzVbrsZiJYgcAxv6iUdadvhpFNUo8wKXBJZsKLXJTRkCpKNKoiDz85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvESyFpJon7QPT7CyKSzEA6BKGLUwjQj8t7YaDNvkmB8WsuAHPGjcwk88AN56ko1mvCedU8khLQ5gsAADaNhBMC",
  "key1": "DbK6R6wgczLBuEVtHk2sAubbShhKoNbs1VwzUo9isX7drAF3HzRYqtrr9sT3jjvj2yzSgFTUTBDbKgPAtsxDTrm",
  "key2": "5613RwwZKU1vSjg7YNH6Frrh4JYhy83PDsAbEXCWGzfPo48mCEifFMvAx9DZvTNw18fKbpDRng49wA3aRqLgW9mG",
  "key3": "5vZSCSCsGgbTVfuLNdbJQnQqgug6wgrfLRqf7L6PaBrBLYuRXe4KzWqtpAQ14yVEHs5Feu5zDoSWAw6EHFb33tiY",
  "key4": "4TsLhArcUmMiRjEKS42QN3S917BkfHq2Zn4o7Lp12nVPBziErVW7Qh4HGQeVQo44N8fvm4SCRozw72KmbGijHDQR",
  "key5": "nLESeHe5d9sX53Ra6Jnkrc8RvgyteiarAHRnR8e9J9h6NgzJdHSscanfbfySk2MoujQim9yswWdVboZSkLaSDsr",
  "key6": "2EbxaG9ryr7C5ku7KtzLmEhrJYRPRS9ba7ogzmcgAYjUL8EbNon8vrKReZYBVyW7PmtsuFzgcdSDm8ckFXKBM4gh",
  "key7": "nANRk8cr9DLHZ1Q92Pi6vLCLgFYCGyRDjZKJ4qmjT8xXRWwwQBkHPy7sug4yUWFdANPgQLRynfs5VYtsMAJEEhU",
  "key8": "47KAMbKg9BKuniU2W8kx3Uu9iAaoRWLQX7EngYosVUhnS9vNDsye4rZLJY9pgGk8CjqxafCHz7zc1Q3dBcD8VCqK",
  "key9": "9smEsXX7FkBoM8Av2rjbNaaq1WuPzArXNGYzPqpY13JQb2pigkeLdtB55Kcda6brruudUcgRSoYJMa43ncj8fi5",
  "key10": "2suJ4sWtLpMWk2M4ohhfJAmu18NdoXUaQSSLqEaVfFHJWw7roaKdvtCrcFAnN5g6XMppi4TJD7q1CEmGirnCazgr",
  "key11": "EkLq4eTnBsQP5pJZ9KDfcQmu9TK8nDegUo1axZ6TV3LJVMf5kgGsaPE946aC6VK5rBYohyz33ERYPzDMhHoWq5h",
  "key12": "KNHLRCrTXYQJM2nyQwKXxC6tbdgWVBQhGgkadRNxgaG9hCJoZWqxf37ecCBarLxismEjnJvisykJo8aALMVD5mt",
  "key13": "M5Wn2mV8P91K3Mo32H8KzBHUSJyD176cuXnSPEN3NFHnNYE38FuGQV3UDxXbiNqviWyvwt7eAgFrAAiNpqjUhdt",
  "key14": "3hgzSHqgohVbLwpJZg8pb7NHv8W4dQkTJPox1ifwEwF7Ga1T7A9EbkH6oURLZK2FTYhczAXR5XrYamBhHUARRAkh",
  "key15": "jh5UiN3FdL3c32stwqS1haLgM8NihuinMESeLDtmWjkcd8g2MdLQN7ipQpq6SnvzpueZxzkDDyR76XtEiiPEoWg",
  "key16": "2TxX2ajQ1oRZZgmVNtouqbWNcpkmvdswBLTFEmVmraB5DQkkLYqcCr8zEWu1XfZFor2Bq92GPBthv2gtfEAGe8TA",
  "key17": "3gXbqS4fPX7SGKWugdrbgPRZakrxnHhoKZoxyr2HqMW27n4Y6w7m1eWAhfdu13oKXVrvRX92uQK41XrdKEJBp44b",
  "key18": "4XwW1v2XWrzitP4HixoBkaskPQp45huZbwtqste13hERhYTx78eRBmxFLRGDPFr5K3TnzxxsLnc8UcNcpgJEFjrQ",
  "key19": "4MJ3cg7dKVwD2eDGn4bynvWiYxvWrQSbTThxWTGKcwL3PESVHxyMMBPs5k2VXgr9THGtcgfk6dKWbmk33FPxPWYQ",
  "key20": "4DLA8MoML6sZMQAUXjjFs3u9iTveDDzueabY4F7EEfEPGbuDitmpjyQFNDgWftC8f6t73ZTZpsnS6YmYfkZpHnL",
  "key21": "4EmN1nymDV3Bdz4t7CvzVQyEAoWaWEJVzLcZJ5J9Q2tgH7gHGSJ48NakScuAPYJJE7x2gq35jME2WhTpogz7NQWi",
  "key22": "2EPVveKKuuwxa1swTUgMZm5CUGqzAfaccGZdGN3737f1scJGQnTVdouTFnjw8i8cStoSajvfFXhLFYSSAX9aRgKA",
  "key23": "2kWnx2RASKxnBZM2x6TMYQQKfviRVjJMiaBDqSpM4MaPKBKe228nohZMV8uhZwMV5jFBXyJv2p83yVXQYgNXgxz5",
  "key24": "4i6n7tbGYQUeqeqcK2uiEFY3hbaWQKet8itEyxP4BGXt51zdgDxLJmrteTXJGRP2KCp4K5JAjAX4e1bEK1jfjo7j"
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
