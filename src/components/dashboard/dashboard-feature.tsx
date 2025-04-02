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
    "2xLrT5ujoviJqmo14XW6f8yNK9HTARTS3ZMwNdXi5bm3RCWUq4rJgKBpoANQDaspXBeafmSZHZaPoBEbF3tYn5mS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2oLFrJPBcDeCJEzZBE1CgumyyUd45hgUXGQ16nNPmazRzqoRQ5kaTL57bNiBKBjDaK8nHoJ2cU3zsNuT8WwcDu",
  "key1": "5ywX7YBi8aQWvySuDGbMQmhrqBEg4z4QiJUnPDdgcgcyVz1d1XfT6rGfzt449zUpbPXvD9iRpD6MDD2GziBnz66h",
  "key2": "5w4dM3K7NAmpEmebgu9fr3AtBHn8Bc7pR7G6ygNzz9oHSBppYtANECq4TiPQPYkHRTFmJrz7piGW4uMtrauPTups",
  "key3": "3f2uXNChnbxyLwd6rDJtziNdE1KQFUCDGkdGXccHbvNC63hpD6g5uBKyYd8uDME72h38L8tqQLqCuu63EWLYynbu",
  "key4": "5BMSWToMZnREop7Ggs6g9AQ7pm5n7aAy43WydjQHCBZf2yuPx4vfedWRveFyiM2y1H1HkQhoHyhFDYrBhojNs5Ae",
  "key5": "hjaLEr9ziCzNsqga3KRXF81tVdu3tKnbG5HXboYiyH59cjGRnT3iMbU1N4iPDyuhLWpMFoHazKL3R2JXKMSWggc",
  "key6": "5pDY3MNgst9nps8yNfCT9LN13gPVNkTGj48NoXK5Jvxjrky4J9EqPNfDkPo4zGyuqgYAkVho7JgouEVj21VpB2HC",
  "key7": "4KUjHagCZ2aGNz3bmUN7FKt9tofBAGWR6oiCmrbgmSv94EMJ8QvHT73B3Qqur83LKBZXnNjhiG5oFEXyRW9vLR88",
  "key8": "W4oHaf8FPoWF3fVZ2ekCCRoj2pcuUjD8s7v3jSseisSsXbyvj2qYzGnGWUCFTu5Lt1QMYDTSaETCEbFT4aw2WZV",
  "key9": "y3ezvDXFjvZcRyvzzcCe1qehAcusEjJCFRtihmKhEt6wwBk4SVxpQiBcYks2WKG1PFN4QGYcWTzFCxsNNiEkfTB",
  "key10": "2mfd725sVqDapR1rm7e8PSk8DMMicTnd3fm2TqKjZNDdzj39zGcbzSgtjDT85sQJdHfsqeV2bVg24yFvT7aJPQC7",
  "key11": "2jVXpX3AeKGAfpEhe2typtesRz9SDFkSftfoh24CVhhdc2KwQvr5CKDe98j5xvN6cUCg4Vm68cJ5fup7QpcJyK6",
  "key12": "4BrAevjCQ2rbYk6AwvWs7ETLzA2VoY3k7NofdyLjoi31neGyydvVKsxp4iCZPmSWbryjZkMdzpwr1LYfQXC6v2No",
  "key13": "PwMkUuHJurYoR59puzL9o4wZ5U8p8EimX2jAUh31FdG8fAj91f9moBrR8kzGt96xs8bcYf5UAK4uTRGGiKqvxSt",
  "key14": "2MGNPWLs4EPSyES6aFqR6tur7evK9dhYdnMDJAhZB6UojBoTKZAy5VcGWTdskofccUuPPouGjjsggUVxiHsP3iGL",
  "key15": "42ajxWrFvCHmSw2k2iQVF7aEnnvPJrX7wLayFC5WMgaFjiHm2os6xkzmDJSK7ceDZVwH7WPTgvToHfv6mQ9G4ZAe",
  "key16": "3GFDdrc2TpY2YKFGwWf4mCVgXyWW95o8G3EujJN6J8xGpuw9okwAsn9FqK1P6rVJnmeLvApSDTbYyxm9BwYjf3Z1",
  "key17": "5YXhxpSHDiPgH7CVHGmeZTaxfpmcVgv6J3gLuExAmqhuH2SrHkspuLmMyVBVSaxVdZgmEZBbvsiHJdJT6tVSDXXF",
  "key18": "5Dz8Y3WcXHMXp4yFzAMPUHJkjXm1Gv2eCXnRmUaQCEyod546FfNk4XbvTBBKDviCE7D6ThHNGC8peEH2FEa3LncS",
  "key19": "H9jsUKigELB2Sb99CpKM6rhajrtVKxC21wiqXJs93312DjYejDTgpLqjpQ3QAqC1EsnHVW5pHuNe8mQ9364YxUv",
  "key20": "37cZyuUq5CM1yWpWLjJRjEBdn2N85fRzpve4NEN6t8ZWzJcXSH19Weqymh8Fn8AWxjyeVCUnYBM7MBxE2SempbVW",
  "key21": "21Ls8WNzqoC1GLEfH8RbwxeQeCju3vn29U6c5mNDisa4itJjPz9ca9vJGPLjHHTFC76m3btbgU9oqSMk7Q6rGetu",
  "key22": "3TNvCwrFUaVkXnKS68ZTt6Db8BSaamnZCU6CndiWb2eHmLS4QSZjWmCjFRK66sNnajpNQN5mXsK8cZFyMAcYCsWJ",
  "key23": "3jspcbuhMkaNytrsopsbYRb9XR7PQoAcJuomXfXSSAZ2Wik7nMawLZXeodcUyMQ8NieimB2V4uPMXNzj7tkHKXEF",
  "key24": "fo5PNYJrZi1aysahoQkRJa8soGWcr1aZtoeBAZk1tUXzwQ2zZCBu3cZ63QdzYXjQRTLxUmH8TtqGC8SWV5nzriP",
  "key25": "5iFgkpS7FotKVSs9kgAdAGdxBVSMgvuBaqjY2XP7U3VBqzo8mmNn2cy6saemKDWU45m1Uv4L2QUhAd4vhwZeozMp"
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
