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
    "5Sjuei7ztUx9U5xaabo4taE4aJacV2LXoCWpV1BCqGucchZCGgkzGyRJQxff1NaEgwjiHjFZ8FxQnLch75VcA5vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1pajApUSgR3uAXNxjfqeyoBUvpA2xH9b9VWe2pCroXrMoA2yj95YwWxfoXtb8J8anYTuZ4bgK1Va9EbGdvWRbD",
  "key1": "2azPuqAga1qDuh97De2meLsxwxaUiYkL3xrbaR2GzKkZgKT3b3jpG9gKbbLkUXMCMNwswcLPMD5D7HSt5KnAcFHU",
  "key2": "44i4NtQE2z19C9aaCS6rkwGq9kQD3fdhB1jAAtKmB3wTowM7CshpUFPJr2rJmg7ThnugRaqcTrwdMApdie1u6hjT",
  "key3": "fD5FjhLczweuLJe2hLYZjFohz8yv9UHnfXzEaW7JEdPnPD47TjALojKrtzoB5eSeSXqPEsLh9X9NXZMKm5EthgA",
  "key4": "T2sRtqjqto7PR3XFFR5ZxL1wU6kdQu5ZfwNtJPqjLHKnkvYJfKQEJ1XArCzwRGqBLQKqu3qYHnKFp22nVYw8M2X",
  "key5": "VbRuhnBsy6DypDSVSbqEz37zq7HfdB3FZAHGC4Cj7uoBjHaLxJJ6qejVBwWMT3WzHj2DuLbrAo8SrTrS5KKdJt1",
  "key6": "4XfhWVRuqGtS7BTq5rJPMP4sFj1hhhqh6Q8qo9HCmCRicuvxFoebVf3BJgtvep5NYy4fxYY99gzRorSTvvgePvDu",
  "key7": "3nFRLQ8MtzYehXY6MZSKQQf2GKwYFnHy5nd5NGFn8PZ6V7ySUscAWML1xaueqbdR6X9neL45JwT8J19q3uJD2Sg2",
  "key8": "3CjG5a3dCjFMVdVXN2chHbythAh5TfpGbk4ZXpKNusmdahSHYYUVYutbKAS9dYUrD5L28Q8ucWUAHbBr7AvR3xMW",
  "key9": "3ARxDNx1ow146wcbGsykEZGNNwSp8UQcBV2ACmAWfKVvC2dwVvfThYjQk7pYxFfhhNYG8V4qgjGm4bCLZVbybi7",
  "key10": "Ljb9W6wow35S89e8bFYaSof5HAx7HMAzCJLJYThnuBhQM2WWqXhGZFU8ya889TEhfn7EHnEkJSM1KerDfohxzRW",
  "key11": "xrCeWZiSSb67EyiDErfEsEBJHA3GaFDy77xo7j8q9HimdRhf2sopbCg7WHff1eyHKvK9Cj8cPF6DNacN1sw3Jng",
  "key12": "2w2YbJSz89UEUFnjhpPfLBbU59287t6m1DHL3NhyUJg2fD1yvLvxFD2RPkTDpSdZKef1P7Y8exDehdhhBKW57phT",
  "key13": "63vRJmYFHb12zvBdhCxoXq6yU3XLVNscETPrq8td5tWACRV3up64oQJB2joGZn6S673hDsFwmrkdTk9EaeXgtYD4",
  "key14": "5uY54cbaxyt1G4EMAkbhNbvxbknUZTeEUbAcYB4d1jvxPRGzfpcngWnhYtEDEn6coWpJAJcSegzpw6n6FS63qZmA",
  "key15": "3TRd7GojLLeroN4aYgfDL7vYfdN4W98fSUTsmHcbGE2H4RQoWjVG3wfCyM7WHWJCBtd8Giq14RvTAwogmT1yeegs",
  "key16": "2XbJEX5hJwDMofRR4fLWrvU2ZGPKfzhRF6yGvPgv4D2unCC7zNYSE3FJTUeKqSxhqdhEH1Y5jJg7wLzeULgELFfC",
  "key17": "K47UMQWaHGvY9gjtS6icda3Yk5nVJKPpifKcyi18tNWsitLtyrz7xZY5tgTMQgrvDNpLwVuYLp828CHaX8Vkecs",
  "key18": "3bB9Jss6BmpxQsJqtPskjjT2DSEueG2mrx3Gaa7yjYhrTmG8kw5xUSYyyyk6urFKTMXxtjKGYzvPh47FQ7dQa17p",
  "key19": "48MX1BKArZc3hK5ZARHmjaMZVbabYHM2eEXMf9vZaZ89m7mHasbu7ki5KEn4tcyR6Ct5mXx7bUig3KLvcMuJEnxw",
  "key20": "3awbPttte1DvbSD8AEvoFy1bM4X9vjG75uC1RiSXiJuVxjqRqspBu8jpcuZoeAoGKvEgtXZQ1bvNwZa1LeZi4Mpd",
  "key21": "22AvP21UKAsvtHgacvQU17u3KCKFUJq9Jn6FytAz1PvLP9ksZDz4n2oqNqtroVQAbfCS6cTn2Amp4q2nxZmGPABW",
  "key22": "557KLFPJVjhuGRuAfJ4wfB6TdwdkEHZ3wFGkRsBQToHNqWfic2CRFcM2mz2WxwbNL66PZme2rGFzmthtFTV2Re7b",
  "key23": "4Aih56JvWm7sDJ4rgx1a53BzsiajpDZxk3BhwKms3GQ6eia6YiDKHPCqnWoC747UVn3MFzi3VRVyWBmKp4ApJMKJ",
  "key24": "AszJtMrpkfAVnsx7jbM3JpsreER6NiZ8ivndPjd5Sje6JZGFQVBQnJzGumtJgnsXoqCiTQ75znsLbzoyviowdWi",
  "key25": "8jm9jxXroPJXXP9kRFq7rx7kJ4ymSVw8L6X5xkQ5xfafQvKCvspZpSuiow32c7C5XARjaKxqVRAu9EZzqsWLqtH",
  "key26": "5QmvgXYTEqoVApZW9JQxM6tFzULgKE5Zojj9Phq8SQkDA2sbVmJoVef8QNoNCCq3MGXNKEMtYh4hUQ77Wtt5ThZS",
  "key27": "DFmJtj4RbuFvxvAiKoztVaDTrMUoLmmp5mWCXDM1HvRfqTSNxnEGdtppXMTfe8YaF9RkPrE8B5hVvmAfH2CqLb8",
  "key28": "wBDbcbSmHmDA2oWUWDxajvj3Pbg5BezyDtoAvyMuJ1FL7jZFTXrFhwEhjGrQBxWU3apDMAYVRrZ1HBPnoBDozQv",
  "key29": "3Yr6ZXiAThGvqUwTVh1nsQzXUrFZ9Nj9SqnGqxYHezcshioppsxxmuqD7Hpo6qrb8UmHAS7YHSAPhvDy5gVThGvu",
  "key30": "479APBucYeZXVPvkUE6a7atLFC45DK9vbVTh4eTozm3E5jR3yGS92jqotgNjNiCtX1KBeioXzb8eeo7FbmU5C5D9",
  "key31": "2FyUd4PrmVCFvyBgiQzGHnBYS3nxuqnkBDqQ46TVUXSJanh8UWyRg5ELyqYim7RkWtUsx3ivVfQzo7UnWHtYnem2",
  "key32": "36wG7BRLgFGFND2EU269BdfRwyxnF3nYkVPVskNjy1dXDNpwKejByszFKpSyERywJrctxbCKa6CaYeZhes8sH2bK",
  "key33": "4mvqZHmeDJxfWgSHxH9Y8VTaM2P5JRXpqA8NLEsTSeWJoHs5P2KtawG1X1rkTVxy7XuXcVqorV2rC9oViUGhc5PL",
  "key34": "3j4kvTej6GMpe19tcj7N8eYfxh2xVAro129mV29e2WGTHgw1hbPoVqLn7G2q1DB127novpZXAZ5pHKbkrj2xVVRa",
  "key35": "2g1zKzxcKbntmBecTMBSSu3rQX91SUUUodt6uPV2wxno9WbXWDa7oGaTUs9nmuvQn4rx94XvoLuNTzVKMFbBYQH6",
  "key36": "4JCp2666KT7hxTKzEcBJULz9PAimKEHsZ5ywqyp12bqgUgeSFtpGCDFKDTuJaiBtM8Sh8wep4JLtrxGUnvrvYyKH",
  "key37": "2tLdVwhCY7bYTZnhPJtXuEP7rWFsDMrFBNZgoziJyT21NbwqwwodgDmrDFkquyAgKU5qU5sKcLc8ynoSyxLfMtQN",
  "key38": "5eRjSsxeQXAiETGLJhLjmFw8Gxvs237UETPa6HVTfkCgZFgHwZMb8ibponUUVM3tveQLwTFpgL5pbNHoEpUWNVc5",
  "key39": "2jJvDAUUEY8PR8g3ux2rxG7fEcxNi6vDPpsCofzLcqTtiGudVuQaijgo5Mh6vd6sSVMGPoJcDYDnBsZqN83xGu1x",
  "key40": "2Ve4V7veFvYzqLpbVMKJFQGWubdYqFF8W6tasrX5N39aa1yPzos1b19cAUyhmiQ5y25bjqSmDy7J965aUMvZcf8B",
  "key41": "337a2XfFxEJnMLVMi5HSzCaww8dBSySjtRZTDHxzKxGiPb14x8bbn783tLGnhuui4hU9fmdzi4pXKhiWAM9m5GNz",
  "key42": "3xpFVk7Ct7aZ6hMnhGDuKUufbJ91zPPkm3JA6Q5EdfaggWsXQyybx6bo5x37rC2QgTPK4YcEdNKZvQYc4VBrFUc",
  "key43": "5GAxLkQUdbSRaFQi9G1e1rrxyrUGh2zwgh2rpJQFeQi5hibWgXgeR4YxE42XuyxfX4StQMs8tswevwMD6AKY1Dpc",
  "key44": "29kgwQSw3MKwP8sdgHazfsWYaqGay3StsHEXo95sYrSCAC3nzgBZdusU2EE6Y9R5zHfdSHPRh3q8jw8B94azxcMX"
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
