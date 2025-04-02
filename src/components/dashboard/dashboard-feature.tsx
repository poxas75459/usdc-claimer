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
    "34VjgQLi9GtAKDt8nJJBfjZnrfckq5PikArsR3ek2tdi4VB5zv9CntP3hCcAnyCg9DgKnDH6kzYXtML2JTYESwgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hzd7c56yA9peiRD3LLdbmrPJD3wv1sMWMxw9wCrGJSCswzfyJosKKKPRUNC7jyMhKMmfcsyTmQyaj3roAkQ6wXo",
  "key1": "m4sQQLtSccWAds5JHnHn8FmpakMGUgSbNWrZKBUyomrakcRk3FaaoMDyb3eMLqmERVMq3vUjyRAVs1rXPsdeV3R",
  "key2": "4tmbDtbXDDJGYVTTMT6esKe5iAuexqQEErFePfBwo4Ye1EibdskyVytFvkET8CiikSwgA9CuXksePM6cKWABGvzt",
  "key3": "fF7wivD8pPsP9Ayn9B2ouM8F6BfaXZBiUQ7QFVDHd3v2qm86bJ896uGnC75VDaSdMgKfT5eYbUFkxSgXMkysbo2",
  "key4": "ju8NRyKZs6LWkqYmWYgZZa225QmEve3HtuE8gcBEx6YyTY7gtXKjwsvEq2jkTepHQvwnsWZ3V7yCLbkkPPgz8j5",
  "key5": "CNbFYBNJoPZDCPesKPRjoR3p5fTV8XEUqocLK62QtMwTN8ucPda4kLPX3AspASMKBZKtD8N7tAA7geZ9BksLGj9",
  "key6": "xygRPcu9iXtPP2HD8s5Sr4zTUPBubBCgYzQ4U7LPAAxKQRpFfVM6TePkCVQGNDM61HPPzeFZmTbuPk6XTUtFpAv",
  "key7": "3my622qELK2qKRaim4Lwk18zJvjw2BF6iDC2GoZbEjXBFYBzFcJfQEtPRcB4jeqimpceQZc2RDmvhcQUaYPe8F9o",
  "key8": "4oeb8mgm6vMbpbkJsdQPW4Dg79txP2ouq7FRy7QHx9wzqUhbxbtPUfKgFAwAeCR4rFbVRaYRYsBdk33tu76EaiQP",
  "key9": "3Nk8D7nczUEAYmaWtbTkU24aqzGqVewCiki4LU6TjcdNCrfypixv6KTXr8UiE6bSgX6c7VQSGqt4WRceCR2hZjAQ",
  "key10": "2AzvscMu8aeZsmtVXZPwPXgRtimqWf5t53EzDcgfvXBFTspPFtEdcqCN2fKu5hrdopMiA2HEP5ULoHPdGyc68FSv",
  "key11": "48MvefzmASqZ5v6EWyG7j2rjpvNow9NKaDjPWPJySAiiFsY5THgW6yMcaeRrJgmEsBJ5uMNy8XJ319dwf9fUCtSS",
  "key12": "4WqKAdZUVPcXb8XyQG4HvXMVLC7uVAGLx1oiLzJ55AR7kB4JyStEvo8xSGqbUWT2D7xrqarAEjSWugS4EYAbGsv8",
  "key13": "x1VEKU8pnAkwiWMcv1edQ513GYLttn16BTKUZqQyyk6gyVyvdRa2NH1sS5YdxdXtThc1ydYoujH3vhMqi9j8v9U",
  "key14": "2ErRgsyQ3z7Kmr5uBETzeAJSpFUeBZbBxKZ6CxwVHnbAQMGvjuk3TiUY26qraPPxCnYqvmqnshqocU21fh9CHBP3",
  "key15": "2GaNjB9cF5bRZm39eKU2Aq6T2xLZb28RRnZgnyWqSczZpj79dGgq9sPJgfb4rvg8QoaxmhRz579YM3pPgG37Zxez",
  "key16": "4vxdYkxVFwL14JaB5W9LAstmjSqee8fJht1nyyLPHrQqLUUxs9WZkTq6whXJAEaNEXMgZqA1J4jrPMK7V2HWRjh5",
  "key17": "4M2L3VHFfHft5YRnaN6subGNkjFZ3sH6S6f2JXnmvxJcp4RrRsBVSD9uUP71C7Q2hQVVTGFhMqHZw7AMhDBhAiVy",
  "key18": "faVMsckmUopdnxHGwRmoaSSt3iWT9nVH3hERP7enWeAas2M6MSTTypeoqQVKc4rHLKPPdtW7z7dGgnAJsCCjJeZ",
  "key19": "pBS7QQi8qovvTh9gzYiuqiYRDUGq5rUgyz6LctFPV7U4RDFVcvEKfr9WyM3ALPSeRmGtrjf1m4o9Tg6Jx3mfKvP",
  "key20": "2xtAXhvfbbXyVdyLq8Km8gnr2F8gNMV1MupZsQBvxJ1GSUDLYafufiAzAm3gZJQK5VCndBXmAVYkyjQwyLbzaqXe",
  "key21": "23VrBCXy4LLutCM1uKxtHKyqCu8tKqkxeq3Vtygt6ooGUL7KrWhdG2wXvvjZK4iZmRpGHAQ5J66uy1BC3yBbYnZ9",
  "key22": "7k8nfp99w23FcAMcYdEJHnPoyp9JiR4k7TDKUjg7kqvH8jZdksASidcv2oQuQv8mmAMfeyW25X3YdqSBjXtEBfc",
  "key23": "5S5iPmcYFUAxV4x9HTzdKk8yFvX5UQ14tQCc9o5Z5abJuZHtC5seQ5GZEeEhe9VrtsHwghjJTZmsTCVRsbFzv9rJ",
  "key24": "ShGAdKzVpM4oaGocD16Z8iRLLpKkqAcAAw5G5yg86mg8XQLneGgJFE3Px7rf2iecPzEZQ9Nd1E25fVG5xpPX5xk",
  "key25": "oS2cZhMTP65hfyxqV74Kz4dL4ygjCFKVp3ezBok14zwRtMw9udvsBAXnDVbit4zu93ryLWPFvm8UcuqSfQxo5jU",
  "key26": "543bPFJX8TuVBb8oiFpYNjNNQLy8GUGvek61MB3yXsSURaLnoka7eYfvQN2Uxeo7AeZdXoCNdYkiwN36un4s1q5i"
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
