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
    "5KnUvdjN3E628iEbxhBexbNJEpegFKwUwy22UD7nMQiguUpshQG2tbUNCC4zvbnNCzbXWQi4bJDpAHMn2o5skSf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nhKqQ6pm6b55FPLXhSDgcKLDfC4imZBqhjfjDmJm2gQP17xxQnnr55nGgTXEqRomsdVnV7ubbsePECb66hjXU8",
  "key1": "31t9SDFcApN3k61RBDLu3E7qZ6iT2TXNqKa36MvjjyhkqsAgroEQdXoDQggueoPZgh8bBaHgGo4uPzsqNViyCX4a",
  "key2": "43XQk9ohVM3fD6AiGqrxmx7EghKGyKMsG791Xm5ExXbYHopEY1bKyVymL5jek41X11Deeq76uQEsvd8m1ZHDXJ5m",
  "key3": "9piRtZttqRoMRjxdsgf9Tp4DgVFQpqibbgdBScLbTHUWwyVh9o8aFaSXw6F9cimxjBpf9mPzEewSriTLaMx7y85",
  "key4": "2wBqFijWHSA3XPSk8jWKkEMsAJSVke7HBn3csVEajpUjEfymwpyec59keXiumnbPvUW1bBA9N9jhUbvqZXGjaGDP",
  "key5": "22J2A4X7zPZJ54JebdoRvSsYmBm6s2WEeHBkVYe4amD92xLiajGEbHSjnTCwTH2FE3TyEJuPQCjNR9JEPTkMZaJg",
  "key6": "U2kQBu9Bq9nXD3vgaJFZ7VAFVAqsWdTHnqVvy4TbkrH92scSMS3K1DfKobMkhBoJRY4qqWSQuw11LPdkD3Xz5LX",
  "key7": "4aQ1oN5MrvCDERKSFRFHbieFCuCQaKMzjmzutpqgEKd9NNCdL45fyKx5hFyHZzRq6kDe4Mz3D4Lu4zG6xwS7UcvW",
  "key8": "4sjwyVg3xmug7muMvb7E5jPhrfEo4fuLkx6bJj4NBGxBwUtUunUDfzaNbnxDLNyVjsY5Uo19BEK4J5sJzCR1uwEL",
  "key9": "8onZ2BCi7TfSYuNNsfHubKaVL8VwtPgZ8TbdJDcMpE7kXHEgZvHoTUYNwrcrBsGX6J1gmeqscrNkw4C4bHLkLG7",
  "key10": "LLN94QFSoyTx1EDqaS8LURNPgzg1BU8VQqC8PeGMRDJD7L8DJwLb9e8yfgqnHexHoPsybTar5ZAz6veYGhzsuVM",
  "key11": "Ch9U6vd6XNDbd5dGjwNhjd6NxiY2v34B2ep1L1kARtRhX6e89FpmH3H5KtMzA4gvtd9Riqh2rVmEHCmFKXjYJyJ",
  "key12": "4EJ8LqQ2VHGjxt6mpGesDNK1gvxAEs4CpADMF7vh1SJAT6SJpsKWT6g5PJKsF5LUpWy1dkktoSC2WthnPLzUgncp",
  "key13": "4Vw19YWEeCtLv3vatKWbmz9BRFZUL4z35Dg4LXbjPar4Vbxew1tzbD2KnZos21gyZU7UpHpetiqZxYkmBF3hBHnT",
  "key14": "4fGgaYJMUkdkwdJ9fRt2t7WPJwoJKhVoDZGKX1y3CtNPZMfzaG4RT5dn1coMxEvcE2kn83gTmhvaxbaGzFvNKjw4",
  "key15": "5yQn9kpfNB9cMS7LaDvVbhPQNFA37SMXkmDQxDBL948ULzRt7uu9zaYnVvKv5CV2dXGYnDHBKUxRZm4xToS7dLAo",
  "key16": "3FDT3mqZhjd6yDPgxU3UCbPTqqHtf4VwFDxMpC261Sbs2NqKwZdUhHsybb7qcgDQ6dx2ZwKkV4nkg43EDvWuA2bT",
  "key17": "63xwVYkUC4SKB7Z1Qyko4aNKbHWg19q8TSRM21B2qZb81KzRzKRiTqwyX2jgz1Ypej95yydp1ezqBME3ci9ULJex",
  "key18": "4n3ZusJdCBtyvdizjPk4oLPnU2xBbUoXm5sHPLutAErLmiUYtwRgWFokowhwzhgbUDPMb9aziEaxREKniqhypGWW",
  "key19": "51D6NccYfvZDvF3HKqahXPhT5s1WRNdpBGWn8VScQ9kdzRQX9cPNDSRKvWD2PhWCCY1mst8YpaM9bjtobdzkHkie",
  "key20": "3VTV3GhTCAHuujq8v5AaTY6aaaAQAJM7NpvWmSMr4UqzdcPWkcRXAMLUvKpTpetfqRpZUu7B5kTpLmFkdJuENC4A",
  "key21": "3s1dDLfQBUS6Trs6DQLyTxDmgNr9MU5W64wB4Zr8HqaBdYN27kZzAZU1eYfdGmCHqpSxNeCtZqzM1s2wXf8Ly7ms",
  "key22": "4dCiQkMSw3v2XU8VPTszFcz99R8cCiTfq17jGRKdyXmXbLy5J1TvfsNBzbZXBxdH37BbTHcdURQkPtLK8tYyvL3",
  "key23": "4ZH4DgzdGUu8chnLf6QVmusaUwdne7tpL7gFavHr4L9xgJ52yuo3znQJfa8QmwWMq254GRn3g82F48STF331A753",
  "key24": "28Nc5MR1XiUdh4ius27KhnDwVkZG1zULKUVD6akza5pR8sGBiBB1kVwjRQiwXHtnkdAH8FMzgNgxQK9fQ8y5L9dU",
  "key25": "2PoAU8Rxoeqrrr8Hs5SUUyNh7v7U53EL75csRxbcqG1xMAS2n3btgiCvmY53miXxUmn75QPxyr25Fe38g8E9Pj23",
  "key26": "23QLVtRNV8pcMjDnzDVkLyK3iBxL5zBggGya96TFwAavPuKmdRBEopT9tPsFKX27yukx54D73QJmjw8pn7tjRLMf",
  "key27": "3cuUXN2VmKb8bCjqitHL1zUMpmhTeunPtqowZt8PcYXoKDT4RrXPcRBzKK4KoL3hpswbGDRubw9mpNGDgz2JN4TL"
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
