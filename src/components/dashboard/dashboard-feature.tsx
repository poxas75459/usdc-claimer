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
    "1hMYeHdPCJMb6ibs4xKxwBy2ytLPfxLeHeV2TZYiPzTNnoyWHbH6eNMgu3XMSwpf9g3RHjzsbiXy9KwcGp6e2EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENYaGL94aKvczUd5csNWdU9uPfA5LM8spPdd2jnYXDwXrAutY7kEnWwNeDAY9em9DzgS2GQWPmHqjRjV6osC5rN",
  "key1": "3xJGhrnXniRnmukg3NYhUfgyJJBrBiZq3VZLx6u8RUvzJZr5x7uz1WwTSAUTpEFRie4KMxzXPn45nR6syJ9vioVr",
  "key2": "3cDtjXxkZa42NwW4v5SgAGhENZn3EDQmTnwt2mdDaLvdg8h9GKs8KyXHH51c1pEDdg1hMz2nT3nPdZsrh9ezUR8k",
  "key3": "3nz3HLyQcB4wXqUGvEtzvorf67Kvk13jseKj9qELRDG7LJgkej3UXDkeU64jbSiArsMwRLoCE2fft1i175TVCbax",
  "key4": "3iJ6ijW5nn7cDnj7iPMZfukSFbybYik2kXgKTQheEc1XMkwsSwF2d8tTB361vjs6zZgvz3vNGpy2o2dLwrCjyrRA",
  "key5": "5yiCLPddYAJNP6A1LHBiMtEbst8XMRLLvNw6ZGxxZ3FxiTCo7FoQA5rd9t2pLNmgfYaKXcYwT5bu1JqXZkeKKd2f",
  "key6": "21DXVj5N9wjFGgGWK3Xb8b3ZsDjyLZ33UxrE5Zh2tHvMp3DHJzUyDuNRG4hLz52E9CmN2SUCRHv3vNto4hUb6iqf",
  "key7": "2wgJhKpvuBwqCBRyJh7gpW1F6rDcvHUxLDaQaCWAz3GXtjFeco5bFX3fGkH8hMcESm1Jjrp4mKAg6V15YHc2Mszb",
  "key8": "JYQMeYBidB6X5Vgvvh9ywZhvKnAk4qsJwM1Wh5fqM3yKE5X5PFPDFcfCuuA65UupaFr2rz4SsSVSDbFtCoWYdm9",
  "key9": "5AShwtiG9mWwg4RHw3sfjw5STUyz6qLfjJrxJsksamNdCeNHn2fhEB75xkAHVwA9VxxntZzGfJ6phu6NynD8WB8v",
  "key10": "3tuhMd8g462CeVuccHjQY84vag3Zzn3vGYipsqWYRw4ghoHifqtEUn8eZrWuun4zYKNfQzbUfqg75gPRhr5YcCM8",
  "key11": "2mxvfK2tRa4Hxx5WU1tDPG1HB27gi7tEaY8t5qsDQ1oConAXvcUnribJH6i5b471nMs3MGndwxF74jU829rA4m9a",
  "key12": "4u9N7ZzUaLBZ9hawdb9DmsWD5BfuU5YhxyrnNucktYDxEC122JyLz8xADSoo9MVJKvsEDGi8sG3DFq5NV7nX1myi",
  "key13": "47WHF1PP2pupGjCZRyPaGbKbqA8CfJjbaRBsDvJEfYcxq2J6yhUK1AkmgMwUG8kNjRXNPTJgzVy3kofk9ccTntkL",
  "key14": "26dj6nZiWtAVRv4HBaJrpPUNvHX7cisdfg26M2d7LRsEuCqeiz41a1VhZGyDF4eHXCuiqyinUVchry3c3BuzgUpa",
  "key15": "4XXz9vwaFBhGke1G1zdobD4mgQQP52bxKTm3TpJjqpqgokessrGGCAkCwV44fok1c1PDKdBHrCBFMMZgPbeaZoR4",
  "key16": "55VLxWrZ2rBSFDtL1PWfK4WAppjos5958AreZwGhsAoorMKi8AQegYthF3QjsnWy9bFPULtZinTwfKG2Y6jB3z96",
  "key17": "qgWMtKZCELydFcDRnWcLKcaUNqAmCChrTFRCiqVHa2xmKghhsUkrNuCsjAuAnyB6a4stDPMErm59t6MM8mVKVUp",
  "key18": "3WdyEfY924v7ebURKNJrgdMe4NvnP58V5xijdVdYVqt6gArbFFnWHThDjPC3niKjZB2GA3rMWsPc1WfFMQxmncQ2",
  "key19": "2KitYmPL4F9a4cdhsWq8gnJaPSq9YePsvvFmWcuh7szgg4yuvTdW1KLFYPkiRS8kFinDY3FTqStD6LTkxzrPnBu4",
  "key20": "3asGwAnQHVswupDgHZwhQsAv6FhXWYKQjiSotSh3SfjhCXavXKcHsUuMMMFfAKmdqWbRvg7R8ytGmmoh9u8YR2pn",
  "key21": "61Lq6R1p9LaUKi7c3JWwSjTR4uQaRGiVHsL3FXtVUU9Da9QGvbnoBK6cV6psjhqZDESRv4Qr3aBS7gvrgkRZ7iNj",
  "key22": "5QtXj1PVhJz4U66VjmTDQ5WqpuUf9Xb3y2F8eTe1z9BcH2mcEJxCD8RH4bAxP9FdH8WG7VShWpkD6iZwbfHrWk56",
  "key23": "3iJvYQbLMCGgkLCyvMuhQAPxL7FhQx57zseMJ5nfJmAdPN7YeFHxnT4vZ3nSkiDfeYTNj2VaTuFoqmveqRkkKDSz",
  "key24": "2iJhpgjV8Xe4vrrdgQ398xaU7StdrzrLDKHR6w21s3Frjrh6oqBNip2yrcqRntpXrNJ7KbW4vJgQbWsSBEfXXbAB",
  "key25": "3VN8SDbK63V39eKHtUG8CBdGjZKLom6r41WE5PJGsz6sirWHnEqZ5YUonLjruKn7q5Tcys2v3QYaumC7mJwm1LB6",
  "key26": "5QFAfuAS9JTxoBCKsyQo9rvN3c8cjGhbKQvUwD6u95VS1inVYGhZerbQxoiBmi1seLgD67GE4PuczdmXpRQRWcP4",
  "key27": "66jPGX9paZd4ZtWMBxT14ZymBUprpRbF1jHNW6UPPmqW5YgcXNdULU41veCfdXPJpMeowK3UYPhJProPR9MauFKB"
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
