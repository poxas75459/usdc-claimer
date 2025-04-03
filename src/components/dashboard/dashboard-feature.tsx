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
    "4zFXP1Z92Z4m9BsvUngjc6VjpRqT9PaU7mwh3DDYEWQHwQ3guZrQvqocmv3e2M1ABHxGU1XFgqvNuTAScAnPT9HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1efThFY5oNHBdeGej9hijKfmdCxX87D1XP4r7pgyFz33F9gM9TAHxKs8qp5GtRCHo19jqqYfVh4hdKwn81QCzu",
  "key1": "5X8duMuRSzt6zWdGoX2Fq1qR4oied5a7iAJwjbopWRtvVFmU4qvXS9pyg6eC68YdAqH58f6CkjTdGQ2XLZiUNmvc",
  "key2": "NLbVPKT5vgG4YT871CGgHvsvymd9cVWEnNiTPnMeQV7ZVM8W7MmBuqhCVhCHaSxkNE8op9hrBMVhWerkwvWtCTY",
  "key3": "murFfyovVPqC9NG7npazQvEZnoVoc3rBEsiW66EfhK8Si8oGgS97QYepDvmZvWgxm9qnutyyVNBZ7sv6ffqKFHy",
  "key4": "UJ1DMiFEobnPKeAfbs8AiecWqkxnK2krhFJoTKyw3dHnn6JyB5f6gXxVCbxKhsY9EE33UfdHK4HCfbFQ12TGKi9",
  "key5": "3aGn3KC8b9Q58ijf73jDeTYSS6tKYeKg5rtmkBkxowb8eCccDJF9JepRpoAY719jSXzuBwW2zaq48adeRyEJMxiq",
  "key6": "5NH3f46wMgL4mXykyK4oZkUfgyZyMF4i95yCPjgmcQGGXYts1gHH99tjtuUaqq4MVPkGsGEiWJFiUpNHNa8r4Gw",
  "key7": "2jGSz4QRdnRUcgGCLURUBz4ypS7U6qdwyFGH3ka4VaKjQLYr72pzZ3cs4RevYcTtjTEFbUnALZoYguDydVjYas77",
  "key8": "2jC2i3kYTe585jUD13mqwcy9fT1N3qs3z3ZoKcpnggeQLqPPc94SDeTBBctCbFTNiPoQk9C3DWQq3iSCMd7XVKEs",
  "key9": "5GKvL1WTPRSjdorKurmsMytJJtqRcxvLXpM7a5rzonUjvc6NihSkhnuEjV41MhbRD8ex1xVaosXNxjCarFb6Np7M",
  "key10": "2RWfdhxKy1auAfujgkNwcznwdiEsYniYAGdAdDKCrutEfNZb6na8QgbsM6P5LV6kYmvuKcUiyozB3Q6q1skNFy4K",
  "key11": "3a9QSt7T23hiADdnF7QJASG2EaGbfY7yizxgi18BdYwfen9yxD9ezYaSWJkp2vHrwMQ4BdmZCG4T1bgvFUDahGCk",
  "key12": "67V9bDNBo7aZ25SK4NzqTh2EgwLKq7deFFCDKGayax1M8Zae9WkJ1CHN2SatHaH8bK8Tre4UoctvucxY2rjw6QHb",
  "key13": "5kQKdDbKcxyeT1r39JPuPwY4dVyYrEiiVSmxYd5bx3F7cwT9ntnQdSzPy77espLHgG5WwjuYJEnnmTpyLLfPAzrd",
  "key14": "HWW5a2rg44ddimu3jEzfxs1kQL9XerNygMr8ZHLkJhQpue5janEo8YoGYS5Vb2Wzh2ncCUWn5PgDYRRsiJTZYs8",
  "key15": "3WY8PN54GtaZddu6y39eKrhYTEhtxHCMjYFTgcSeZ67muJRLdMyUjdU1rYFb3t5Fu7FgP8okRhBpjgTmvfW7T8gN",
  "key16": "37CVFUhXuPa6WqAqNxv3rLx3y3ZXSDpd4h9rHxXZbUKoWj6PQh7py5UxiwHr4tPUScvypn3RrLWK9UnMG8SNuKiC",
  "key17": "37cwm6NG9BmKnkQxar8fHcTW3gv7AQc6G6dETETVbhc6eSNHJumxTUumDoPq5mTJQBKbjGzjJ99CC9pasCEERNC9",
  "key18": "4kgkEbLWCiFDa2bqQpw2ZBDdQLYz4fdVdBUGfUmscT8ut6uUzwB5heEgiGnmW2TcMwqs5v2shSfUHoXRCrS2EU8o",
  "key19": "44avxWA39PL6WPQP5XLXzqtTikuX5qKFkaXL2PtbMtGj9aS12cECFLpN9LCmAcdDvwQP92BaZuXE8z84WtvsduxA",
  "key20": "63EC5NUFd5nJZmtGCchGpUk5CbJTzMw2N2ZUs8YvecMZgRZb5tmDZB3rQsgdhKKw4tSsZ9hARQVnXZnjJzASVfJp",
  "key21": "5TAWbfRHvs3LiTLkVPhnWDMy4u4qTAEuH8A8cTLvvbBSaYEi6r1APawtLebn2sBRoJpVRjhDijohEX3kr4Xk5pEa",
  "key22": "8ba4ZLiB54144cSg7RcgpvQkQeEAewzCUcDgXbY7bFC55ruw1kEtyK2uxSj9QpPnNuYT39gk8zehbGtccLZu9TL",
  "key23": "62QqJ7bDVbyoqPfUrtGbCYY66KxJL5VMM5yoqSw2etQhQXS82xuRDn88DGaxYdKjcFxaC9s6EmXY48YvEg86GXpo",
  "key24": "V83pfLBuscFt5cwm1gS6VuHcC6aLYjroezjY5HRcHzpp38bdcbXevz8SXnK9TwNoQfpDR1ZhTmZFw3Wuh1RLZHj",
  "key25": "fnosrJSWH1uKrWPu4c3144mBFESj2xQxWfegM9YeKmJE3KtZH1kokuTiwsR2VjQQj6XnR66tb6dqx8ujzpDJ3tC",
  "key26": "Whvs4zbzc97gBruRYHGPh37JiMGdZFCfSfvc7kYxzRZkvXq3VE97uxfWGJscrq1HS5MVQvbqEova8UyaXDLXHhu",
  "key27": "45oDQJJYj46fREyQFgaQTmiuCVpA7d7YBoe33BwkCTjGFZtUJR4j1EeLmXYXtvJ22cFMy59cUayYVqcHrJrq97PP",
  "key28": "aSsdeHfkJT371M2VpD1HU7FrCNyNpdBrWzhuogNFx9pNgpD5xEWYEzoAKs8MTsDeRmoBgSoNs3JPGYdxYkJW4ze",
  "key29": "2kZAoPZBEusmDEFq4NsQYeCrQJ3LA4aSxrosB8BCR4BHmpPetSvVDd4iXAeYP5EHAYD6TvJLfbykj4LGbryGd6ZR",
  "key30": "2smwzbWm3sfWZVUzukEqei7tHN8EQGbjyi4cRqEwEE5LHAhkH3PiVW81aiYVAvvPMG4EaHqbkjpSvVazdt9tVCJK",
  "key31": "2kSJsLWPCLrGnX1qB6EujvMN3EJtuquYV8KrSQn1fkWe9NVNN3KMF1G9MkYfTJZe1qmjFatad5poR6RzY7w4eCzA",
  "key32": "2jS4MDJibY1xejfbUUfVbPjafhhxKo3kENPZrMYkSEVxMeXoka5ivk8sFmJ9HpNxpz6YnFNyWFSRq6SUCAzFedYx",
  "key33": "2pNu9P7r3y4YEecZHaNNiKqxoRzFngKyrGt82yH2vkcMnjCtzQyU1x5m4dSSNeH8qrd6AM121wYbop6kdZwKSHz3",
  "key34": "sacWMVpFzo5yLRmCpNKEyzxduVXLqPkgNGQy89QZuqnhjNe7TJm3fuoiSFQkc4SvzxddCepmeAY6Dz9QikiUuTB",
  "key35": "5XnemFERG76UjnBtrr6egQSXi8FcDnR91xktAcZXaUCSgdK4jKZdp95Fw5eTJNmFEs9pFXUYkEiPckovyR6fmaDF",
  "key36": "Feg5NM8CZa5JzN1yfGXNdvzD9Gm8KyjwRCUNQF9W9nvbgorEhvwD2yHw7aPMj1aXYnrEUiEyKUmQujH1yy9zoc7",
  "key37": "4sLMKjxLC8Mq4cQCAja6TyPRfXSogemneTpS1hrWJpN4EcqxCgmzuKQ13yUpJGdzgr6H7Pj7dfxPZm61DDgEqdDF",
  "key38": "2hDC9sCtPUpuvekhSx23H6d7djKiE4hWo8UidAhYmV1mQoe5sRUuWFW76NoD1EK5fVP1x1PwS4FFsMP958q7fCD2",
  "key39": "62pfCa1dXawZRcDsG23qz3vTCTFx16okX4T7Uo9EwHPYaenT6LHjApaZQZfijMZxoswvdxH9uC8YPcdcNnHPDe4Q",
  "key40": "5BXhD44TEduo5Vxg2KifbUVwpTUAgnBV1NGG62jecPDnC4fMCo9oDoXs1BpnLVJeTfRWfD6t8cB55Gz4gnYTYwzW",
  "key41": "2C7tDYoW3dVpN4YskvMut1zrekrjPjGWpRkxCBkmwsXx9fDwXgqMhjALwKpzUszn5tvRteUbRH1Dd9KuEsJo2bYe",
  "key42": "2M6DJXK3h15nEgm3TxmW89rGMB4bNAB4sCRGfNeeeoU9z1tZFZAt2BH7Qmf9okdHentRGmgm2FPEAeb2ArF25Ddt",
  "key43": "1Ji4tL9qfWnmyWyog6qH1bPstCqe3N9LsKZWmSrg2to9yZfW1yjXyAPwRVsWFNcKcYa1XAUKQ63PK9BkVKQxmT6",
  "key44": "2gQYkwevKAY3Xxti44W2yopoViTS7tpCtiimcP4VqVQQ3X3jTaVyHikp5F3Q42eF4Pm3fQ6Xhip1MSnBpYQwbkLP",
  "key45": "3CLUoLkNs7wEzQysD6NrF5o4PidU4DH2CS3mm7ua2La9WzhuC7C29eKkbhu63uxaadxqjTo3cdDKmTwBatrQgFnh",
  "key46": "2ZSr5B1HUa7vYm5kDeLnKpzE5r6uH6mgvV9GBYYGJJPMxnSYKDiURUV5Sc5YQLPHcEiXFKZVkdePyzsuXMkMuBbY",
  "key47": "2gPjTnXHhKLnJvNeUjdCR5rh5H2AwXNRPunwQG6Ffd6tAC5n2uSbQLfYV5gZEKctmhgTYAXYa2gdncWCgVHXNwN9",
  "key48": "V2Mhj2ytC6V6ED5pcCGNmz8Jxp6Vxi4m7aUYXLvbGNEMcRwrvKZhxCR28Y84b2KK8PjYfSaYEaHNuVjN11BxcJs"
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
