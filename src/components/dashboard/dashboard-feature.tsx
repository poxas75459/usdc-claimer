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
    "5MeE1vDpmqYsBKJhCxB96XvR8y6G9Af3qbeajcKgYy9rxduZp4X2yZEzCmsoQoJQYmPPC1kXNq1yy6zGM96nsnAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByLR8D9DZQxvhz5MKPpaJnij2qDA7cx7GQRdjZNXoXPnCZiCvMQwo4i4VGpvPZbUEq9YTZaFjMD8UyHxQhWHtg7",
  "key1": "4HqM85WGoDG7zHCZ7fSiWG4so8ahgh8j8XABBBD6Vjt7fWwj5msr8XBGjVMRGVHds1VVnMJ4wk9RQhmDQK8Ce6b2",
  "key2": "Pgf2dc4aaXAhMNbKaaWYRExp5DUpWU9kBbPVb5KerDWLU7znqAXN3eiZiBZPb9h8fLHvH8oMJk412cbvJaSXjYQ",
  "key3": "p4vf5sKWLNjNLQFMr9C3CxVPCUzQk1eiJhR2zJFSia41oCmC6QY1jAq8ZxtLZdWxtpV4c24b9u2Gq2Vb4jTdesR",
  "key4": "cx5gwQqMgRBQRcf47KY7aWkHR6VcGb8r18MvCci9GckY6rod3yFxKUEtkVJbdiazyRFxBPK9MbWyXU6hNMoY7tm",
  "key5": "2U6rd8cVpiRZXLce9gJ9NGQQekkNzEiyqhECb7yZfqvdSTXa4f9GrxRtYayXkD89JEbZyx2BdUuURhMWpSSGiN8L",
  "key6": "yDS5XAfBRQk1v1LqnHgbP4Pa1Xe5CqkP7sLiB8YuXkUXQ7gSBd8LNcZSCcd1dC9rycCdRjkH8aK7Ya6pJCz2SRt",
  "key7": "3h87REFmXH1c4Dpu7kmefQ3Fubm3iPZpdMrVYRAeDzxNqQdwY9xFH56n72C3MH5VCCy3ro97EW2ervs3MhATT8Ci",
  "key8": "55D1bND76uJc4Z3arbogXroZkUvgUQGxWpqXxC5gfQmhwttQVFyj2C4j4zYdjrABnhcm1w47ZroDnYvapW5fPLS9",
  "key9": "mycGa8igtEhUJycBWU5pYo1SRqMZ3zHHYGuAjJtbyJ8ehFXumxLfZpcbxgjc1nnvwFJSkbevt1ZnX1YKtV894Cx",
  "key10": "2XPJhgvnXTmFfwsU7fcKYFVBcuXVm9o3AaedSDYW7bcY5RKsBYcZmyEpUxQ453ZDP7BpizmCPJgnnoFAVh9zsBP3",
  "key11": "55gskBGGLU9Yq3YdimZwXU7TqEjf13WhLbeYr56aXHwtmQq1Pek9TKoLwZM7YMicimM4ZxarTfiMM6CzRotc6Mgd",
  "key12": "3SpgGU3yFBfhpyTSvxHLLA27UmsRizHZVJh8FLRaU8cFr6L8Ak7hnj4xNCjukT26G5bvAhWA6XYL6p1wwUSLNndW",
  "key13": "44ZxXeYgCTgiVks8xQxZtYixKUqJxr5V3gsCq5E5ckyxUf8ZTgidFcZtafVjyFsYVVKs38vW11FWrgtPyWH7Mhxz",
  "key14": "3rgeJTT7sgEmCzd7FuHYMhj4Nk857KN7twa6qUnfomSXhFAhQbp8RQw9rGavCxb7zFqkEyipPoPyAMWZohbMLPMN",
  "key15": "5FtHqYWW3CjRhWcMujRNm4WG5Gdn16gCg3YLABJTvY3VZLCz2PBk4VFivCkSDMZBdJBBupisBhCpFUGKqemS5v6n",
  "key16": "51craNAYaSrv8Genw2UpERXpH4WPpxBPm8N1i8wJDyieKbzij5CuF8DdHwxxpMNSigRErcqpnb5MfH5UneaZJf78",
  "key17": "5jcnVvy1ebecKVa6ACWSptzDvbPhEtXWYSho6hBv6AS3CFPcYnxihDGHjBJncQ1tSmqS1XeypxBc8asVWmWcq8gt",
  "key18": "3FJ1LEzrA5E1ERajckfz3XqYsGMTv9vymTXvqQyBscbWWkxxqUedMT5ptSsRwoMa1GwyYBCtuiasv3ChioboxAR",
  "key19": "LC4rZm477h2w6oFDH2sBQWDpNQAXbDQoAX243HqqJjthNaPkAV9obBqssAufRnwwC2oTHw1B4hfEvd5ZbMwpo6e",
  "key20": "4P5ojBXjXdmF3SHLWgzF8WcFjwsAJ4rN344rPup67spDrUXNbc31UjQq3EzXZ8juTfPvh1FFeZSgm7p6BW5fe3GW",
  "key21": "ZGCqdnMoYtuAWBuajVCfFHV6xghV6tN2UZPBQQscSPStnxKMbUFQFqQmAG8wmsmfE5hGKmRvQsX7jGFmWJC8ABa",
  "key22": "5c5tP5rTfdQmTcgvPM3ETKesmMCD5TN53Tv9KKebj5ZxXDE4o9h1YbA8F2s8CsyeUj7QRq5xr9La1iB3Bvcp2w5M",
  "key23": "3ya1y26dkLzzBQjuKG8NgPEJ34UF5iGXhcMv9rnZvJ7VJraYzMHsm8AfjQy7gPNDkXvfeBDpQ96Uk4v5NXQ2HaBF",
  "key24": "3i2mgpzYDxh7D3jLGd4Lkj4w5UWfsjyMMYfqj4eXbvcuRsUvgt4tpKNGJU8Y3L9ZBF3MHKQm4wSAgwKtMtsoVuia",
  "key25": "fwkMpdSBAZePzgztf74MvFXAeyGo6TPok2E2DkEgBm45mnwTcZHWwRPF4snuDTBxwtwssK3xdFmPVQ3o2xX2CSb",
  "key26": "5hp9LhNnMZorWxjmMMi67JHNG22ruaB3SFUWjhySpiWkCZTeexw6HVtM64wgQxSWfSzYBgoDdGHMpP1f4GCFt2Lg",
  "key27": "3TQCu7mgkVg9h9ChvGuS9YdpVdmAjh3BUJeyy3fCsxmXkKLXtdd5JLpRXHFKHG8o9LWwNyNPP1SmS1KHYR3eWHbY",
  "key28": "4meHU14jVErE59xGoGCLL9QdbJpQf9RNWMwYsnW73pdDzkwKUY6y2N6vbKZEzPPHQJvNvdMcCvqkJ8NraCuRvJKL"
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
