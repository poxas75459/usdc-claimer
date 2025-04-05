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
    "5KaEzzyazhWM74xyEYghE8hceta4mYoX7QhHArpXy55AQTvALbyJnFUBjKT9k5ixaNFDxXXJDJujcUVreq7vfjY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnAoQLS4HdZAYkxn7J9FqSs54AXKPuRZLXknNJPwqX9FNijLCTiHjw18JxF9aJmf3ZR83xPyMbQdZSzzLTRLmPp",
  "key1": "4yBQxSYg979XKW8awGf922dKxrGNbGMcj1XnSPRZ3BPe8KkUzNfLCEbAMzVAMv2oEh5nzSNLdRrUsiQD49rD59bP",
  "key2": "e5JdRWJ7Kvh3dh5VSBq2gYVSYBFahjjekU7e9V9hHhPmLgsmjozKqDHTTHtyLYZCxbJkhSwtRi4D2grXDzkS9YR",
  "key3": "2zKd36nNg5BJ4GN5iQ8JZb1Ro8gnJzwMsjj9nNVBWj2oCkvegD3VAA6atv1Avt4vBs956teH43iJmmMCCRRH7SxL",
  "key4": "3VB5SrXQhtoZewMteRs6XJpbNp1SLKkP2roFeeBAzPRmqrRSiCpVNztBtTfsEmjnAwUobwSmwfrpWvLCE9VAoFgB",
  "key5": "4sWJPNumYzhGo1javWD3cux9uVWPpDiXqygKRviPYndunNwVkzhx8kkDMLJnRe9hyHAXhrXKzmenWzHoY9EAqvbs",
  "key6": "tzM575ZKR25zq9HnkKVYayG9L7rrRYkGpwx2y18gyZF2nx5nWZbHP6tBAa21eRF6g56d86mgfugAtEp3GbamPMD",
  "key7": "4vvnyjRenYXBadWcmFfXR5djP11XqB5qfLpii1Lto99W477yxgo5Y5W96GUqejqNSfGJvTWEuCbovLY1Ki3mr61d",
  "key8": "4vUVbzmDDbo9VpQgRNd1Sp5CPaLwtPGcqepFAdZ2a1vFkZeUFpNMctinudDJ5j4R51y2bRwA3g6Zdsh6uWkpyD1k",
  "key9": "5tRhXbw2xZpLT5SbYVoXZE9v6Hz3BQYZmNfNcwn5kJHT8zUaTZZoW31MYNZj4gZRuYC8Rm9YD349VFJfRDaoYVkp",
  "key10": "4oEWLJEFBenoFQoLFk6r5R49MCCQvvvdLJc4XBXwWEaxUUtKxeyqceLA1XkptYroNduQSyjz6kpfYoctZCDJjgnU",
  "key11": "4is2fy6bRTyy9UfcD1qH8JHPNecGZF99eeKpcL7EQP5S8HapFr4JJYKEyPk4M9BWkfDQErTv9qjPvZEQRnySVw5w",
  "key12": "yPyGcpuZH7tPDnKko6VpLiwnKAmsnT5X22frja6H1iGHasYNEgnVqz5UhcY19kPEUN7pUsdkY9zRUNqvu8CkKVX",
  "key13": "3KNVD87weEuoYGVd3qGvvQbRbn6oV1UYcDsCdUD97pHamRYcgtyQuXUG45JtUwpZJKxheUnncJTGLTVgHPgYgmeF",
  "key14": "4d3NERWMudBFvh1dxyf6N1KfvDCJWXx5HLUPTqWDLUgfBoJULmw5TqGEjt3YDJQeDSZ9gAaKD2ZXLvktPq2xkm11",
  "key15": "5ydsiTs9ECCmRTHAhN6BGE66sgCprD3eSkdutZP2XMCJKuRmaFBoLnAGvFPfpRL2Si8hyCEHh3ykCmtfF7KUWuR2",
  "key16": "hWY3UmwbVz2MrGZmWGmdjSwg9fHxsDEeWduxPUfunAbyQbhH1SXFxtuUWniVms2xixGSY3jJAxaJv478pqb17uc",
  "key17": "3C1avn1rzmhmqKcNdNJju5Rgup1B9oEnzGCznkoJ2JUVNyiT95AbJrx8uJkfdxjYkovMdNvYu5WZ47j3MjKRtpJH",
  "key18": "2NkDshzrSUq8xE3ECJ9bXL2UZoXjLkYxn7aruGWSdfob66yUVxNTnUVm4UV36QwDVf3vgvhgMWxY9kjZQPr77a78",
  "key19": "55uxWYoSJbimoZfm1rCytU5yb7ctHtShvbD49GUNdrnDkmPg5zXd6XxCB75FJEkLUPXscQLejvVUdZtFipxUG6wf",
  "key20": "4Lam4NGGrQw17tiaB9BThx3Ap8nfZp68zXt8dnR1QuzBrAy4K6H1ryRDMATS9Lv2fbk4FFFapPKJvjRL3P1HJFhE",
  "key21": "HDk1sHKNTJLtBpxJbBeCAkRsqZ3733Ur3nC45SxmWaEsh1S1vAdDqDrXY8FGmeV4jvMb8ef1WBkVm4ebU8rJHom",
  "key22": "3pDjf69YYFa6q4pS6EzrujNm1JFGWmboHA2AJ4yuiNfZKFSHu5btayayxoEtUKwTb7GKXz7RMzKq5FVpXrGGbDop",
  "key23": "2qoZyqFrV1RZdnwzce6nJfvwvXoqQEG4AXwG1hDt1KqcqJBagbbefNvsNZi33KQtDTLwRunWpp6mDji7CoM8ahAN",
  "key24": "3MZkbHBs873WL8VkVif5MgFWFtSqjLWU3YpmVMJiFVMYXfBgowntiNPFK3adcw6wHgdM6UWFg7ceJNaM9vF5CP7H",
  "key25": "22ZnF4mr6a3ru3dMus7MSp9Dzwe4JreVGii1FhMWsPNmWZTzK1VE9sw1oFHPiQEcn66fgycynqJJc3psdy9ZU3Qq",
  "key26": "3d89q7hKKJ1GH9nbDWvC6m4fB8AiN6uuYxYWdZmZqgUZo55TMHQEmLRYav2m97cJDmPeJ4g1F3eM4P3KfhfQ6An4"
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
