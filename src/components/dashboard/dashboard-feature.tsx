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
    "5wqJksRUPdmkEPRpznpo7aG178NtcZgYQ6UpLKS66cv6iVSETByGtR7khkLBVMxUvJhURdu6KmMJuPxmuyzuUZGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvLHKWJu2cTmm3pE5r74jPGjciFs7suVhsfoBAHQaPYgmmvF2HaAHJxbtkGghy3YxaxuiX6ZmL2wSvZsWBFX9zc",
  "key1": "4Gefb7SMsc6pKxVerSfxgVKyXfZTYmLhujnpeM7wNKqyvskxZZ9R9m7CYkTtBJ5W9ZQdoTP9uZ4yFRjauvPfHwUM",
  "key2": "5W8E18mENvziestLoK9DBhWT3iu5gNV1rQqaThnK6vuz48nnPtiiYbZqQSeUmrCtXhmdZSFUoKF9LwhePYYNUZYp",
  "key3": "46yQGQGE3fN4Di45AG3bcYr3cGoMLvAWJxYtREyWGbA1wyC83Vv3kcYu2Vd3jLKSNNdBBHK2HrKKB9bAGDZFmSuy",
  "key4": "25n9rWxXkS5udWDeShh4TmBEMmUbGWs6GaPkMv1QaKDy1ZT6cUU95iwwSJWvRczaXj9MMjZkw6X5D7CocdoUULnW",
  "key5": "32SweSKGoCn7qLaNCCyLimVbAmCBxRF5vVHA3b4WKBof178MDZSHnnBDsVs6VKt1pc9pnYtcH7tXSAE5Zr1FgUC8",
  "key6": "5azfjCu2EVCNRmxYKqU1twQE9MoxAVeo9xZnPmybRNhHHWaDs6abCaAP33PKAWLq5NqEKBpZaxvN9a7Exja4jQof",
  "key7": "4EmCVBHfjEAo8qBYRKd8K9FhpU31PVmx57tHYhW9Yw7UePE95uprXcJFfsR948GFBaQML481Uqc6Pb1wpWaRsmfV",
  "key8": "4yP5CMCiiwzANfD3pVdQNTV7PGsDV9o1TSyHD9XH5jisPgs4uEjN6HjBNwJwAXMW93zpXJpC41crXYjYkfVmEESn",
  "key9": "2jm7SvsdqH7QxjUK5er7utG3txpqVHThDrruw8JpjuYC4CQSnThbvWGaZ25K2Uw4yQYoJk5YZp8WGWGLUhp1rNwD",
  "key10": "4upMnw2UCkF7egpyP35rtQTY9RSdt8Xo9HpuobGhCgd4Q32eFz1Qdkoig3tTThFTNB9cToNLJanWd7mzxu8tNxyS",
  "key11": "45jUdzFk2FuKLUPPUWhFTxDES7oJRXYB35b94wuJh7UAdTSNLwc4xLufbVdoyiGUL2evXkBPF9vTdqwvELYJfvpU",
  "key12": "2noE8cBGwMyQJzaHJTUFNyCwZxpqrRWrExU57mRAx82CaGpc9cVCyLS7etuZqTkFrCwGhyw1gucyX5ywLmBv6kxL",
  "key13": "5C9U8shk3cTXab1Lzr5bWZmdNegyvJ1LJvhsk22tA2EuponSXkAkgBQ6QT3As75CpkBXXJEr6qbEsC8kL9pfjjhK",
  "key14": "4BnvYVgR69VWyMbirido6dE6wGRV1TjER7WdGn5aGm2thACiAvs6SoYKEVFVhAQpH1ubLFqEs9MbC5NQy1X7nxTE",
  "key15": "1oDcDCypqwBj516iXRcrXC5uT7fgPq6vbMexSu6XhFEznNv48W4YtVWRWTaU2bwjXWGseJAiyGHn9aS7GVkQZ1x",
  "key16": "muzKZxY9Wg1JhESM9ZCnLe7jEypXqe6f2tveCqLcTZ5GsuMmoE8zNGbDJtqUHZfiWGvMhZfTGLRm958cdzqiriS",
  "key17": "5FoXux2AbGy5fwrf59jhE3ZmpBXsuck9PJRNdRDrukdxDXWebUWWaR7ozYfY3UAoZrWuxVaffqGwEwv7eKxUxVpm",
  "key18": "3udRDsASzEfHSEs3NRMC2YsMU8YGpF89s326xbiTWp9AWaGsdotQD6m3AJuVeGU75cKKr3EJvB7LV9ph2ZsABW15",
  "key19": "3izwdNTxfH59sPfP2xWTqgDektYcqkqDDfJGEaAcuYw7C4J9WqXNZhBn66cY8Umk6nS6brguWeNTjGARWC4ByjSM",
  "key20": "2r7XeDP5YjkozNq493KW4aoAvCgGJjA6dWgCm335W1txjbSN38wu8qeW37BrCqVddpv3PxsjnKmrBUuupnc2dFuE",
  "key21": "4GjvZLTHJxaPtV2rDSopoeGaaJYcDnqk1wjaj4PtG7yiGhbccRCdUxVs13d59ydxbQ6cuecoi7Eg2zE9ZcJV299M",
  "key22": "5Ba8tqiMKqHkARRaRQn8uTozJUXPrj8vova9z7Q3rkfMx9DiApwqr3VCHq2dLQ8ebAB5ryCiecG8J4usajXjPdyQ",
  "key23": "37GaxRnUVW6PAkb4bZdy6JKrbaVuTSWUjN2rKioEnJAQQNBPGQwfdokykFU6uKuUZ6USyXGmrT3fw5cVZXPcGksF",
  "key24": "5JntjEzigTDgbpYoTYQKSsT8vDwMt6CZ9ChaSZX74joyfhvvgzYja9cPt479rSXiuAcAgQasAvUqtHdCk3nN3DSz",
  "key25": "3kc1nzYrCf5AgFvgnttUCyD5brUUywhaPUv9Fqx9aN2PsM5Rw4VzTbwQqwRXmBGoCLVYojKNKEZMM5nVBvuNBisL",
  "key26": "3tGCsz3P6hZdKk1CzMPiNZzYR74MSKXz8iuQkWBSBqhZPjYkLszpneYDQDeBpsr1NFQsVWsKT7P8onV2RWp95mjK",
  "key27": "4EvsHK8HhkQiruex5pyewY7AHJ9hQ8jghek4VNgZYzFdoR3Ax2VzBGnkbG43DCoAHSVBKtALi7uosm3XFXVqxhDZ",
  "key28": "5BAcZzZz1fpomX5ihczNtnPvmcWwuXX5w9AaQGFm3DZ9A496wyNnNhMtraGWKXtyFy2Wg3YcNJyS9ReGJ4K2gPdV",
  "key29": "3WPu4Z2Xtx7YyW6qTMFNtz8EYZ2JfbnmGDvj4TsGRCbq8RKP1DWvGiPbP8nz1Ps6wUao9mJSRtnBw57wDWid1K7k",
  "key30": "26Khge6watyq8uXP9WAcziX8f4Y4W5xHyA8jn6BvMdQy1h3PfUCUPoQhcGEBBFpNmcyYXza2ubPcaBJSTc6n4Lf6",
  "key31": "5vRPms3Gt2ZuaEJmcttELvHTpGiBfRihQzUM3HxD2dW3jtzhQVp6aQFSpvHzkp1dobEwGaE9CBucJpn33LkP7GgP",
  "key32": "26iJTnj3bxwSAP2p3R7Cr1vGHeXA65rP5AYK2kD1BuDQc36TkkrBAbefwcPXYj7dMAe3Ge62bZQPoLsCZwQJWkgx",
  "key33": "5AuYwjGubuwbWs3gp1Gu59RrKSoWEofMb94NuLkTgWcraE8rBnPNuyqva7i8pGi14RjjKfhHLwt8L8R1CUF6T5Q5",
  "key34": "5H5AJESBci9RPQQcbMYHYmDywkWyhqCCNWkudLRXsLdgXgQagq6spJKxgQLs7Ur5PkpVYJQsxG7Ah6prsGGhh8bZ"
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
