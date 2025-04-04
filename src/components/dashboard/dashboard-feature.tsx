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
    "mMs4HQCRp4hXvHdbuQyfNwNXMwcb3TqCZbqPqU1eXE5K8maqpHvNxxNmNqJhUAoCA4CxQATMazMRAHiySo3PX6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55DMTY7VtGQPrKXENpbxXTRSjMCRhskyrhAWVLS5WTNvsTQChFUWHc9GZicYMShg1S8sNiH1YTVGBZPDUWfLUrXj",
  "key1": "36VvEwRKPph8LSTG1LCEbzHLQXQALxQ83JNKdF8NNUmsMttAwnBWaYiNBPNeBoFbXgfxNhhxPdtaA8itsSqTVBrK",
  "key2": "2yEuCPueExByQFEVseKKLuB7KkDGL8YaHdgbPK6SinB29NvavtBR3bhjSHXxfwJ5roHThRGxNWMYfAY6VhF9BJaS",
  "key3": "2UnMMCHfyypSLUw6RVvEoyUahArQTZuCuuZV21NX3iFrNSQVqhwVUrfsqBzN13JT6eJf3h6zoZyN4RRroEXvQvPW",
  "key4": "5pv8QDMogGQiAUXrj3r8MLVSX1ZpnXuggDuqUreHPMpqHe8LHgYsHuLcd7wKnGCh3Udk251kAok8GcUMZe7ve3GD",
  "key5": "2S4FCM1poYynajXwUdAE1YzvpBWindBZkQ9c4P8hTmo9tiuwf7hvRW6DbvdHNyUTt9ZH53mbVbz8cdJma5jLNASC",
  "key6": "ewALwy4LQyhu1CXucsN5u1zccQSBYFQaPXJcK3FYXJRXiNPPCsM8xNgC2fmmUM5UszymUhZrzqVBeNhx4HAwAkk",
  "key7": "5mF9BQV1UTwvw3QNDintSnWppJhwFifKjdDSef2EEZokzenau2gg2rdYMshFWUQXMAmJDDiADQJKNhp2TRwKpFQr",
  "key8": "2qnvNL66G7MWKwu85HGS5qxcBg2tW6Dyy7XgDGe8cao349y1Kor5aSKCMqFT42Bx6UZnnjTidPc7FnD3WpdtMZXp",
  "key9": "tVuBRPWzo4vgdSqfbQcVzqFTi2iuRe4Wi1iBTWtL7r65RdrTWizYjS3AkEw9jHw9GcMFRP7TPHaXbQvYpAYhRhP",
  "key10": "4vJv8vejuGuWZavMi1kdvT5Bxyv8fnxj32iEAM2PHufwRWgXrHZXFwJBshURqFPr3MZNK6WUHYcFyM1joDq4dp8u",
  "key11": "3KyHUx4SjWxhifqvghSYLqDm19eoBLDC2eoNTnRdrocBkW25z6zLcP5nXG37BjhxWDaanpXk6MayQpj2xeBzERUD",
  "key12": "jNAU8t5SmjvZev6zxwKUq1vN8QFus5mShqKTZRw3mZHRTa2q1JCCXKP47mhodu6LVscW3QZRavmwRotrP78nyFP",
  "key13": "3ScGiQkVtJPvtsvAjsoTAWwqU4Xj4KT764Q1D7b1smhzZekPcbBMJqaeXTvPmj7MFkx35gcpH6Jiy9FxcPmfH8cR",
  "key14": "29yTGjksNjwJQUj78xoc3ra84X1Cyhmzcb9saYqLmpLS8F9CZqJpVWH8Rq6pM5nciuFawAPLZ5UfZHRmutJPVWn4",
  "key15": "4n6W5WQKwFLYJHR4uf8qdumHHro2dywZByeCo4SNv4kP28azUavBUSG37xYQEefy73vTj367jeAPDAMRwD8cpeUT",
  "key16": "Wr2XeCnCGhzEqVRqBpBHur6rbswJ4VcA65vYpASkT9LRrjPu1GdTy3mZbyQnZsM7u48jFW6cmqM7aW7uavSyTvb",
  "key17": "2ehfscX4gBzaAHKJXivGb9Zi5ocfgHMY2zqZwzStn4Whqd29uw7VD4S1YyJtYg7u3dxp2xzL86kjkfRei8rGzreC",
  "key18": "3ktZv82CMcESijCxX2gAVuYWBsoxSkM9vtywa9vvkVoupbFfrN4GYuoQE7Ha9LPRBQjEq1RZBzAjBZ7jqAAyoTBm",
  "key19": "5wnexz6fCrqmb3ZnuPGNvSsKkEkdYvY36xjL9gnEoNs8TyhJGhP1rsQX78wpDdLqE6ikTLtbFRi4tendJZTfere7",
  "key20": "4MnABs7rh1cyaUSTnSSA3N6Rd6gL3YZ8Z8CjaHzQSyKZwMH4PJM4FuPAyfTDemjvmmzNGzQZfxoQZezwEX43SnVE",
  "key21": "tsSJPJjSHiFT4H7SCsY2teAQitBc3xqjqmXpAE2hvY9vZiSB1pBPjhNeYFS6ZTEuRf5tuJtejHbcsVjMVgqXzEc",
  "key22": "3TeVjgBUbt6a1HqrCQNNhgQn4d8nJgJwHrbDu5AjSX1UtocL7dfaVYqiefqr8GGZDHAEfHckGtoJb7BSHYFKyhVM",
  "key23": "4DzE4y6uKvvd5jZ55fjQCy7MDyA35ucXMPPWXtZLTWBL5wEeESGckGEzQhWVvEUoLGYSxG2q7fjuyrwvwySHDJjp",
  "key24": "25HaahqphZk9Ax34pubj79NSJwxk8ZUCM3yyr1kHY3wvffrLTUvtWis4GkUUJNZEojBd3tj5ipAPzmW5qdWfhTDK",
  "key25": "51KY4EYRrRJP6rReKC4v7B7PrgoqSt8bRBq61SbeEDgyWCeg59NWy8hvZmYYuvTHubshKWyTUGcEGX74NhhUKW6p",
  "key26": "2PXPVC3cyHsjsK4mSKjSht3ScWb7DojPvhgWzXhQZWKuHBYGVWPbQsGZaGKGWnzDhDLEDYVdkNRWyNrMxx8yFEMD",
  "key27": "47TeaKv6kB4BtJuJV3d1LBeL6c5Av74Q6eRYi85mbmeLe8Wgwz56HgUgaBAqAxRmwhDyFyeC4acQ4mmqffg6SVX5",
  "key28": "2zcjGsZwfMx9cBwoQN3hN41QQYdskfZhqrEQ4pJnFFpz1itvkKSQVjRLiXmtCUsc7HtxxNPveEu2TGiExMJ8f85h",
  "key29": "4ogNWUGQEvVEfHwMbAvFeWgzaFHC7fet53GEznMp9vnPFg1XPu3nHFAU3zh3kkYrEyb7sZ3p3JYdH9mPjtnqsJNu",
  "key30": "46RpwGTmXPyuihYEymVXcbynEWJdYKNiTnTn2SfbNsxUJ4JkdcdUomBrSSWW8ryjUiVBJNJZbXg2sFZgD6SDjEJx",
  "key31": "5v8NB1D1DaVGiXt9mZLXCoaM6W6qoq5i7hGdqa28HbRLzRnk9tDkmU1VueU4c9EDhuTkXdE7AEdXs2ot8bJNifuH",
  "key32": "fC1bwEf2qy34gZjPUrVZ9a8PUXhK6pC1HNG2tjvqjV5kN84h9kNQu6pVzomzyCbQMM6XMywdEibRaLYw3ZhVoAc"
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
