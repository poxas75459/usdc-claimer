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
    "5auaefqcEr7fuivMrhPy1yoTayMHnMShEZESXWXTAWD2BKP3gvaV1iTeDP4NUkJ95BUcNhNGtawW8eo3xAMgeguk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58KGM2VZYQoDL7uCTq2FgZWHRiSH78eTAhut2KakBfQ1p56b411WdZG8nyzhf2gho7KkBQySF2pTrTjgd1qNvtiF",
  "key1": "bDv9nKEi6HK5eHFuwRVgAzED7vqs3PmoiBKn56djKfWwnxXTC7gnC9CKRcTPSnVnMhT8RmW59uNhRxTUohaXq5H",
  "key2": "ZZhSYePmmPfrt6dFZeZCMMNZ5BwGatFiYrjAAmzsaLpNfRWH8XSFVEzitbyyuWq4wGpnUZr2ncmZprbscXM4JVz",
  "key3": "5sqH5u7aDD6HpMzDxtFkbpY8HrEbVxBcvQ1hYHavdhthxYT9kzhq659Zr9hcFCkYfuUBeW3XkakE3LmVtqryccKd",
  "key4": "4RyRgzR82xTsCxwhbfsUwjAof98oFuHvKnQBXaBrLmG4VQC4Hs3mnpMZdQqweqV5Qh9wENktd3wAzJFjNC2Q8dvw",
  "key5": "2WUt4w8JrAzGKEsbkaithFn66xDkv5zQiFq9ri3CuNBf9Qf8xHp1qDv2AY5TFZr8Y6vM5vSLNXVZXiNBH8qq6Muq",
  "key6": "4o2v1o7ytApbGaCtfH3zzHeaJqic892gieXmo2K8gujdbgoc9mJMEwhVDtcwFHbwaoK3p2AoiSLeMFDDmMLpcvcG",
  "key7": "32zjrDy5i1TTCEBPHN6NxVaWVuXL9rujBvMmsLheAKzTyXTcoKJZFsFppAZ5yhpo76XZFjJBQcjkmZtEFGPeWDP7",
  "key8": "665kYDVuycxL63wyJ3SDuWZ7Nnvd94dLVj26Zr3Tcke3PASWNwZxftVv5EtvPzGf6EcEam4ZbpWakscxqGUE5BRP",
  "key9": "2iPYFC8BK2YPhLq1LroDBUzsZAqGPMr9aTqAhRgkYfvj1u85XAxQi5NPpjEKtwsXKZQeXEviLU2Tx1G9pBF8vCUP",
  "key10": "7CftbUtTaJujmK6GAwKCEnxbz77kKJqZiCR2qp3QuoU5HbBHu8KrWpsLwpCQvJW29YMo2sDGAFAX9V3QM6UdMbU",
  "key11": "2fZaREUagv51aQgoGDkR7YDngADEkkEoCt2FmvY6SXw15CWZA9ELMriHSXa8ZgTKixyNCVMDxidLiihrebKvZQTM",
  "key12": "5wy8VXsdRVERwZPuat4ZbTec7VPsujSF3sfbFU4Prs7wPF2MgRea3QyRARUh5PqqEe94Kq6SyxDwHn6oQuSvQ9Wc",
  "key13": "SCgLT4cLBoJ7wGZEeLim37FjV8Nck5oUYGtNg7w3xJaScLoCDGhmic1nvpZuxAq3uiEo6MMJ282TEtggDL7FNWx",
  "key14": "4ppWhUSwMHFCoxawv8U18GBcgjUaEgKrw26ijyEoRPsbpsWx6nReaZ5XBY8BgeUnWgtUB9DEw6c14bMZTYrt29B6",
  "key15": "4sDqdA6WJ57TTX57fcgad8AGwm18sCsvk3zxwN6HrQqj1xQp1ZU1BNFdQtLpLXFpVkc5RBTjyJVzsuqJHWNgrhM3",
  "key16": "5vRyfMGYJY2ZhTGWkECNe6we46xarAPAXyDbcWdHYwd4yvZgD8bCrJh9fYZySuUmwE8N3CtTQ876dXq5Nkxjwegg",
  "key17": "vMrtK64cpaCzc3xG9XqUP5PX9FsUVeRgihZzPXTXD9byCgBMsh3WgNbeCBwEYJ9b6GGe8HoQ2a5n1F1Uyejwbpv",
  "key18": "dmLeNwxFz3pm3enNW4Gw2JosFWtZcmd1XMU7AJbmLAELMJKuEFCGzFcNfsZKzrnMmp8KHAYcf7s1iAFuTchZxFY",
  "key19": "5BwXBCk1ugXHntYtw1iNRFJQurfacccdTxQkgEJrhogzhr7KtiLkQFm3m2PXMCSr3ykhKj4Q3N9ZREyWDjakpFnN",
  "key20": "XTLdbHGAcYm19FEqLXr2J97NJddRkENBeGRDUfDKZEpR3ypCU6TH69dSx8wyrr27wYHSxMxVPrhaXjYDmVAkg85",
  "key21": "4qcqWq3V5suPdhJB9C8V8AReAxG7wLb8seZkjbAVNxbLAFHvkdfzAzTUZmu7HQzUSsz3BAMhQGoe9GtQh2nw8aaM",
  "key22": "5jt6A8ZbD8W8XtWHBZMMyqUqNaaLejJAi3igZEiktjsVVXK6evAwVaM5mzqgBv95kEAqcYCunRKYgKXQpNQ5Kkxs",
  "key23": "2tUvBrUsdhkknaxpQFPBb3D6eRFFnjfowVE2eEjMqvnGgYJdXDFSzXYBqkoBUpza7wdDY8mMpQK4f769p2tGnaYF",
  "key24": "3fzkDnsU2UPAyT8Mjd3JWChL2Jye9VJCmDUUkSXiKrW7dfBjJwWwjaPZwRfiwFKUAahY7RcZXB6tQenuiyR4XzwF",
  "key25": "Dog9BkszYAjUbZu87x5hiEqCgH2mz5wjAqQyUS7ASV9b1XFgeGUkD61ZqKtV7u9NVcg9tswKUU67nV2zoeqonyz",
  "key26": "2sD5hLSiuFuD1MG5nsBpZUV8xZ1bLUUmAwWENScLqYvmK4PcEL1cwmbA3QtoFzW5NWSW28pjGKJotovGc3vdEUtv",
  "key27": "3aLMmTZJgWMyBds9opq7Gbi31NKjpkPxV9ixMTjrzgd6AGS1sjkUSAPqw26qe1vNGU4yCdenkQkRQcRA9Qfh6bry",
  "key28": "NsJ8oeK6QFLSCLQXWygTxLrqK4hfUjNFg34PKTUGGMh9WCbEPp3hL2z3CGH9gTWfBDP9UfVmf736MSsqiL1JvGZ",
  "key29": "4GUjjDgacM8SfVFgSd2rdhbH8X3BbnSE32LkMTMForaGuRm3jnZCdLfKge4GFzxojN5e3cnstiCeQtvjcGNWW6AE",
  "key30": "2pXSMV3SZThpB5pj3sKZL2xeSUtnhgN8ns7wQxuc6VDqtQvYmXugkHBCckX9ueXQ9dBt6pdD28aebi4PQURLRGks",
  "key31": "3UWZcQ5L4hWZ9df52dVSszUeHTFcyugjbXqmHUbbzgNELodGLP2RAnv13KBSCD23LZSeH5BN1ountpfxEfLAfseE",
  "key32": "4LcPmvuuYfYimHCV9Cpq1yZugFGvozryYwsPZK52hutXK7nxbnmDmeZqV5R2kPtGcJs8oqtZpnJG2DRbEupkKu4g",
  "key33": "3Kyb8GiWi4hwKV6VsutV1EprhHLBDgYmLT3MHChfGqWEqjhWi6ZehWvkFLg8V9DjbfjJqALZ5do5TnaJssj8gXkU",
  "key34": "3i8nG9SF8KAWRSJpayiTSw3utaj8Ys4PHMAwFNDdCdWjMGaq3FrunMGSx5hLtbsQcCcLKL1d3Unh4ihru5ngQYRE",
  "key35": "6e5nskYM2WA8g2evFxQ2x5Dk8WwqEJuzXNxukzekraBJfZXXotKEUuQaJbXRuDPTnRvqUmRwtHNtLhCgdi7yy1i",
  "key36": "dk7jLu1o6KjenUmx3Jcjbnvy7j2C1hTqCwQVca4PptfbrSgNMu6Mswmhb3SRsnWs5WV2bCSsoK9N3ciBsyRvCKV",
  "key37": "5DHZabzwnhCtNY1FsZVXKznRE27Uabt4ynyQk8335tb8cxnXK7XhvpwEoqtQx2EwsQxnqKhmCvifW7LdpP1S5JbR",
  "key38": "2e8rpui8UHr639FwJWTJYPtdi6BtT9DNjwfcbgZhN4ZrDHfNQdSigujVqZBNKBVp86nUNAk6MdWwtQte7nLmv4Mx",
  "key39": "3md3LqfL6XBSMUZU2XhMZg9tWGYUcyJTk1cp31zzRMF5cCmvjLwB3XS19bM8szVeTgAceC1qXXA2XDR3mcoghbfg",
  "key40": "5pHHJozx7CL9ZnxcfWtCaf4EFZt7QPoMHqugDnAVYsyGpxi7c82R8LNu1WsgeEtYBYPFUNKVCBqSM7jnR5dmTuse"
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
