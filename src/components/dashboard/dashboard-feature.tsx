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
    "2K6GCzx8MdxJ7GDEfGPmbWAHPzBzFomJnmL8UjSW39sh7oXP5kTREhCQ2h7mpiMbTC71wcf7Dpj8mvoPwvK4uBTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DripAdJpiVXa29XdnYLrncJHdW2XwKng1UfxmK7PcTDKsaNyPPmL4mFBcrHTDDEQupdPwuQSHgzf1MTmui2SCJ",
  "key1": "iqq7ZwVYAoFHpJUgBQQwqawqLjTQACrQrKQc54KCWmHzusMngish5ZbwFraj1NytvCoGJniDLJP2ZThxYt2V3VE",
  "key2": "2DvbA5e7S9i4DP4SBHRkUbTVs8wFAQHBro53hwreuS8JjeCEAkZXgqQP5hE71qv6qoq22xrogYQJwe87phAdqmvk",
  "key3": "5Tjmmeddc7uDadnYnmXjsFgYnMMZnQ7VdXpfK5ZzSrWNyf7vgW3MggquQWkkXMj4iLbP6DM7hztyRdFmdY7qwM7n",
  "key4": "3mvt8Lzp9twR64VQqxYn4jWCx9u475Ry2eXFsFYbtfjWswFtDjbew91usyvKuGu365VG4mm5bw6CoJx9CELHA5wX",
  "key5": "63fUcw8SsLjTi2KgY1KprWPKiTYWWPdtP3r1uRSwpfwYZGS4ud1XEg6jNX7tjwiv8gkewVLVzyuUMnSCaNByuJa8",
  "key6": "5mESSUYuzGoXiPeYRcKMwJrFzjhysKruANyQskKMvFr4CPXksuKriZTVANYtR34AiSoRnjrQ4VABp2Rxp3WCpaDF",
  "key7": "kw6Eatv9KtGKvmzpFkunMYtwuFkCVcB4832NBE6tEPs4sDbCvRuRBZBwGy4GyGXk4LjLCFhu8qJ4VvuSMWarfaR",
  "key8": "2U4iKAUiXdxUYxSh9w69mc338mHn59NaiEA7wufApVakqGKCiCgzVEPzRSFBdGqQnu2b7ucrFzEUp5o4NzXK4fiD",
  "key9": "HLhJcWnogrojoYGvogUU2YfMXnEjkhKZPkuZ2wyhpW3xmzv3qb3nvFNuJTFLzKcrDdMXLJpqZNtEmW9eruHStrk",
  "key10": "4wwpNYBmGM9mgQyD3wqXhnFq8PHsgMxWquN3CGcRacLCNX1w1X176gWEg5D9uFkqe1ZCJtCsyhVR8CgPmffNKxSb",
  "key11": "5nURZuyE5im58RNcH2BFBfcsc8YGhRQ9Qf4M96bT9rR5hqYvBDXtnMCXBUqmhPrDDsnLtdLRikb7GR9ucHuWJtgZ",
  "key12": "CSL6DQFxo8YJ9sHW1bTVpQnXATrVETtBpkH9zv1ZLAT8M3VbeftxPvG1LVxXyQqijCXqQ7SbB7C1xXYEfbcgX16",
  "key13": "2qLzCzqNvyBMPLMkUpUrqatQawo3oVB8NJwn8xFVFtwANNf2pGFeGbZGUEXQZCqs9GLFD7xKDLeCTWJFQJEpYaQF",
  "key14": "4C5a7cyVEYNAD2BG35m19rNPxtJkSTHP6YUqDF5ZQXjnJ1xBEJTrro4T8iuLpV46QgAdtrgSnM3ZBPwQiKjjdCTH",
  "key15": "QmyYmvZxeDoivCDinvQ963D3rwdVNn763xRVgRSKegEYaTQ98b5oFAsLdXGywHsEm6Y7viqMpTydneqYAoXdB6q",
  "key16": "49AwJanzpUve7SEgmJTtGqmsrtXBVabca8iwjTHpywRKGwvTszQYGfT8sYxtQ1rsJZWBwDw79nwY6i9WASr4Zrjo",
  "key17": "2QF4uzbtvo2oWSCgtATZAKjQ2R5b5FQ21QcwyhTpijwoiqwqsZ8c8Vtvy2vJzBd7fFudcVFSZ5MDzme6qu1gC4FA",
  "key18": "4NcopdZCJqK2RciD1pE2sUmpJh4scLLBoK1Tex5bBJR1ekJJjGe8Hxuhi3YEdNMrh7WJDPEwD6Y396XVbxLHVa17",
  "key19": "4EW1X6wpYrbpXGxbRMzJ2G7LqQ2raG64HAfzmFU7Ki5J9aPLNRcwcEfcACcwf4BmVuiBpa5ktY4TVqjaX9jGe8tw",
  "key20": "5695FUVB6M4a2YShq3YPVqhabGBDwacbLqavY8HAsfvWq238xUWGQfSHrxzLDwa6f7imzPDzvcALbqGCPvg3sP2R",
  "key21": "nwJYPmhKTb7aj2KAf8W6CQLNC279oKrjFPuJ2Fs83hCd5PMmMUL9qFGQj4UMz53mZGmAmNaFscVq6HwTH1VmGgZ",
  "key22": "2JgfCADemWwdy7XT3kn2op816UyxRP7LvwLKmH83xbvrrc1QHLWrPdxJsN2X9g6mt1KUk8KGe8AAg6ZCE374jxnw",
  "key23": "4Zqzppb1WrSLm2Cc6Z1EWfhbxSZU2baYF9MF7eC9kAjRasdmD5pbXs7bWZ7FKzoDThobiSDJmtZi8MHvPC2V8ZDz",
  "key24": "2mA2HjNPxNbbbzvzhcJ9YvViLxs7QyZgtbLxKBgz6cWJyRZnYb7FxWrcc5Ft3vdiDd6SbGoEJu4mCWRv79BaS14Z",
  "key25": "3UrYjyhP6wEJik4i6F8Q77ety3kyzrSTgmRPGqi7iANZpuDYddTky3qpHudToFhe3UW5D1Sj4vuBjjAECFjGA525",
  "key26": "4YjJt92RTHvhFwpehqKdYoWWuFSxTWBBj6a9o6qwu1Fp7gsT7beghM5qxMsmazzTZNXWbL4HttTN1ybQbvJ6irf4",
  "key27": "4rHPdz7aCucS4EZdasCy8GiLZYVQu2ghL9ktPAm2wudHPhTfN7G1Z7y7yPjTGzXrrJDewhjW32afRgBMyiiju4Gn",
  "key28": "VLfiw1Fh35vjBq396QGrVxjAggv4PWMWxGFDDyfSVX9WeMgmZAXZAELH5BzF5J27dvAifjZs3ixUK1qao2eGNv8",
  "key29": "27HPhue16DZfC48Z3cQQXrpCnFpLCwzjZeTdo7r4XkC49oc15ud8faR4LKJNtUrrBts1WBSHMtnP26syZJt2R4FF",
  "key30": "3Qb9zcN6vP72J19fvhycZL8EvuJVgNEAVLVwmVyfk1g36QT2cn8KZA6eq2yBFAxw8rUG495zHcFYKzXbTBvHWJ8v",
  "key31": "4EtWhzZzLyUjtjg863tyXuP7WadJheJtdR9XtCViqzsFumXFHkw2N1HpGZ9p8SNBuC8dFZmX6ACZbXhFRZ2YyBtW",
  "key32": "39HsEm8X1rgK9kB6V2BYf1KHt4VSTtY3znr9yZLrxTRqkxPh9AuD8cXVuca8TmRPGcR4eqABdoxYnqvKVV6JyCCJ",
  "key33": "3p3xH2BYNz2ENea6VzUCDUa2QTyjTUN5NxreA8wW6edhVVWtSVPY7z9zuDoSqjdRBiATkqZ3smNKdzLpSuC7L7wY",
  "key34": "5rYHmbAsCQ4buBxZiWprMpNCj5drr9wUPMp6DrcvtSLmUhqmA67mbHzoW4Sj8tujZvUtqdFuy8Np2PNram7AeUj6"
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
