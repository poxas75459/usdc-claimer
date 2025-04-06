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
    "3XrtWe4hmX7ew8113Yo4RAFcGhr5ea7HhY2QCj4EqFKXJoDiaGezoZEBYoeteHRKkZgF4BQgAPNoscZFy2XUNF4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFUtBMEFUfwVPA8iiWAyrCxQo3pKbjkfWU8xan6hpcRWLMoFHuj73WdoWbMcYPW1wCds8endtqRAPBkHeM4PBz4",
  "key1": "25sb8Q4D45tjH1BCK45MMENNGWvsSVTjudooGZqTXZJWCRKVvPNPKXP5GaSP1pws3jh861pU27KiY1rK4LT4qL5e",
  "key2": "V4Kv4emQQ35QeEjUrYd8VxEHozmg6DGFWv1TCJ5NR1kNzE8FxW3k6gpWE151tenRwVrJ2sGFTGG6PFSBiYPQmaA",
  "key3": "3C1f3g3bh4XJmU2EurLsUXhtc8hFqw8cE1NkFYBF2PXmCFHefe5CEyte4xtXj63c1ptyWbKRNGLTDPxmCjibrDry",
  "key4": "5wbRK8UYvyGqsfRznSQ3mxneBSFrAHr2RUQyRnnrLzRRN2reDvG82LbRn4HQU5RwFfTfdSTnFt5dVCo6KRTw29g1",
  "key5": "2HQBQMoBrpMnGYw74vZRjNttJn2Wd8zvppSQ8wPUL4BeBrvpgyPDBT2nprdfhBDjPL1REV9aW8uhdhrzHne9eRK6",
  "key6": "MzsSCNXv5YkYiRW7m3e28LbsszfdnDd3HoJSoGFNFfQTx5CfoJDaE2BrG3CYqkESALbWaqtZpVnp5NBYNxvidV4",
  "key7": "5BTkcFsMWGvxQuccompAh9UihWozY6rjaQwWxTi2ZHUYaeHuBKADL1LStm38k4MmkLsGz6AajrCQLG7Nf2yF5ZFv",
  "key8": "3ZCBZWSH8v6T9tdzX68LKdZy79MnC2ZnbASicXSj5JcybpuEro6k164yDNJiFNSh7GpYviGRMNQtxnKwa4VBtdV9",
  "key9": "2xJEgSoiSitzDcmZWhxQcmKSTWo3QM3agk4KcPjL4GRZZKMiuKroCwn8aHmNDRu9qwPBrvAuuVJjvEpZ2xSycxC1",
  "key10": "3cHSBWr1Yme6ZdDjkjTKdfPjqf7ALNFMuQ4WWPPWods2RhfC8Cumv8WU7hBKjoiFjudNhQ7i2Ec5Fg8aQjcJpd4H",
  "key11": "2epHjorScjQibHNo9YSb5rDqgqTRZ6jYztQu9PsvE9DMTHkyeZPCX6VW5igb9GQS9E775U4uA4QDpiMmqPbD8yXn",
  "key12": "rjdrurHLifv5qunQMT9JmrwUNy7C27vujQiM9ei1AMb8Vw1orbnDAwkzpJgh7kkLaynasV54oUks4DXF8RMwksE",
  "key13": "4Jfq3qro7Eue7eAeF3w7pquoYwWRH6oE2t3QRqkf5Sesq5M9Th9BoZp3WNkW5N32hbKWd3isd41kgVbmYFCFt1oc",
  "key14": "3n7GUxoBDcKaduvUpVjJmXoRojstzckguWFMYtJaJ5XhGn3c2aR1Ub7xA1ccpYCrsXNxiTLJjtTKUmB1nmEfWL61",
  "key15": "ar9C1QNwykfYkHXtAaJaHYpKXaGS1hszYyN3NWbyjEMf9v93MkgDjWwJyiB5zRTsv4XDhjhKbKJJvmy99n7NziK",
  "key16": "2AgovEXggj2aw9g5MWsBnMpWAFetby7bvRNsjsghxWNefgjENGXU2Qia7Xm6amaB645ry9g337mMopXnDRcBNJKo",
  "key17": "5jZHfm4dZR1UDP2LjyUyXhxdwKuBPJTxoUYTb2rGYGCGQRZpGCweJsbAPtm7P8sAU79A6aypLkmaHhzuYGaWJXpp",
  "key18": "2HxJxq2TuZXhhRCHrFmGwBywT77Pcq85CQvFncGsqLC5WKZzzpKmNRVZFpEoM4qCpBoNZaEtLHyHjfZt5cWGURkC",
  "key19": "5kuMfQgtcm2bmJJaGF7n3aXbhMMoGs12pSsKvKwgBzzJVqLY4ixUVLUFbMkddMfCPyE3HiFAmmHUVECPgBsuPTbD",
  "key20": "2dkRhMuE9z7qjN5HUD3FMsLAjJTzpsc7b3RoBgi3RQZAAGQGXwyyfnHx2V2ZUbKkKfaeaQk8LQ39mqwFhPXnEx3f",
  "key21": "4gr1wAExBqTF1cWqoR1GnbPRFW3QjSTjLDpykXwr2w2nwK3PfG7p9dHevmSmv2FfMkuWnCyu6XkwFbjr2GWWcTr7",
  "key22": "5Putt1UMFP5LmnDjZtKkEg4huaMuXyjkoD2Lh4Zh9ovewYKSX2zkNoeaiXfs3FvqRVJ6KAfW4E22PjDwzaoyTuiy",
  "key23": "2ZAUf4TwP1ZXm3hWpyi4tVzWU3xU5p68daKCxzBc6roTfnd9zWKAJBbDKDjDQBH7BLPNHcFskXyg6cfMNA8dR6rG",
  "key24": "5MhfsaxNwnJ65zXFSk72fc5LWXWBwAMrXuWFk2hQFbGpnGgxUWJnSGKpTeJkUZpk7XeDU55PSXEs2vdH5HiQpqxu",
  "key25": "2iABe41QK6nse3XW9mVr8oxcEL5KMvCi3eTx6njQaDmUrnKX7x4GEj2isAnKARK86zYdHbieF33ydVnz3wLd9jk2",
  "key26": "5Ei32gwbSUWeWU4W1vo2UvVEwtd5KpWaeYnJp3esjnyP6jFZe8Uqkg3ZJ2PFqmRukS7rF96cJFJo9YbAGVihuVzF",
  "key27": "3Ee4g8VerobE4Q8G7jtNGm1VWcC5eMAWvR6yJo4bFnNF57ah52XdMFgCukPkCJYGaVT8QfztQf9aJDJNtshFEVkb",
  "key28": "gQL6omceVy2Ri89oGrkKmWEHRuemERhaq6pdQtF3HLT5b7jg144jkBDqVKArjcn9ZjmvjsXNFLj7prX5FXR2kbA",
  "key29": "2SE4sLXD3S3SAq3VhmxAnZwthEGkRsusxNpvA6RKmDkVD179Ui85CuwvQ59WwMnNFxxDhWv8LNfF8hQdAxt5cP4i"
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
