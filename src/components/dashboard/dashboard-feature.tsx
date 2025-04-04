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
    "4WjXaYJfEPQq2LNQrWP1cXN8uWPyfBdugnU96qxjGB8CRK3CYCyiPDvnXrqNM9ic51nCnxDdNW3mtZsegADGLksR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izP9hmEaU7N3Vr521BHZNRqSuGxGpH6S6WwNpK1cd797HGGw1Hna3EoBivv23CsDbZqt1EDNmCFoKXzjjW9VDWW",
  "key1": "2wX4Wpw81mTFvpU9mr6UvShNbNNZmAG8uzE3KMjkDvVD9CFZaYYiFCpy28G2FHvszWHvApbxH58oTpgmLLBET9nW",
  "key2": "3M9Q2bAEoT6nwU9SzdgPpJQxqCb5LAvsEyV2tE6GRvLtxGRbD68jBMcYVXZTLkD8UYzUjwfHJ2i8AbZEqSoZvaod",
  "key3": "4iQo2Nz95WfoLTFcQs7foFkJjBDZtrzfjk9KqwjKD3qQBR2Lvk6nfw42LM2RunHHq59fGW3zDnuWmLXYcGQqBzV8",
  "key4": "2jA8ss12A5xfbM5jPH485FYownEBDiDQmMb7xeEQvFyPamHW6t8HgJFWB6972KbDkVMdueNg9rHewVZBRj7rwMxW",
  "key5": "572xvJ1CHgrUyMsrsFHpsu9azMWxFUhWuvNVYFWb1SDVug17nwY4JCfSNDM6cLtsnBkmgqNwhwRoQrZUUNnUKapF",
  "key6": "4dEGLDMrNtopvsuKgqeeskew77RptSKpY84NJwav1KrAo1XaRTckxwpTBNS2bS5pxN9e8HQeP6f9BSXybAXNFSvV",
  "key7": "2BnHzGfASDM428HdN2KqLaWobqEb3gEBTqhjfJeFYPwA3LxfZ4UosjjfhTwKasZ35SNESLALtixm2jMzypNZCV6B",
  "key8": "3dpnFPz537893iV7mn1z3e3VusdcxRabU5kWFigT6C4vagMe8GmNwBktGfYi81oBi7x84zWbwCxRo4KE4kp7ud1f",
  "key9": "3tZaHFz9MrLwXsComXvpu1YUAN92cCE1siwxpFNFfk9XzW9nKi98LkTC6dwktvP1ZvQfFYgwWVb6ZcpeR5sWVyty",
  "key10": "2iJALqLc8x4KbcAr1HgMuGTo8J22zd7NkE2Tq5suZoMX5qaxmerMmY9YT9iLnr4DNQ2yYnCrgx6RMHusY3pwTzqr",
  "key11": "3RAz9vKD4Ywik7RX8VrmFN6VVHw3fErVDd3FKgBuLAVpy5x8Gf6pw7iqyq54dxfMYNuRE2NhYCiLmG7Nd371qDRp",
  "key12": "xLJy1FeXTcHYvRSuaPJg2REbLUvLd79dMcsD91uWU6ZFrcPfToAPtNyUaQG3WXktoBbcYFGe18KoWi8bu2tZTgd",
  "key13": "5Bp76xy4SNnKQXbJn9c9wd5xiweM54RU765R1E8yizyRC7vVje14r8296xYSBA4KuddCMnFTGUE1uRchcxTc5Mcf",
  "key14": "4ydV5jsfJVgBeiAXD9VR2MPRU3aGJe7DWpviksASYMMSFLmt7Nn12f1yw6ULtsccXtPPjbSmmMqnp2kbJzSNJVjX",
  "key15": "3RxCrqDgrQXXhwxyDY31CvFadpEGGg2Hju1qQhR6PLxfFAQmM9h6yi5MXT3mPfwFUsQXdcw2wF5QgZKEpoQXWLh6",
  "key16": "5Hzpa1VFHcmkyNXmwdvJnuDTPYVfc3eLb1hifureWh2h8xapH3YqMGZux3fDkMRjEbToAq4pGGm6vakx5oovQPjN",
  "key17": "2zgAB6hNCSvzL6TioM4AuSgCTdjcznJ4W4XbniXupNpejE7WFiDAgwDDPkf5LohK9vhS2GRtDHdC59wFgNFjMYqj",
  "key18": "4sAWVBHMavSYf7KH1t9u3AjsxKqewSbmgeEiiBzjzUmvJLRhQKHcxu3QNZ5LHdMGbFgjbzjXf4s9TzoUbCyAWKC5",
  "key19": "2pXqR72EgLf7cpGkno8pmYBk15GnBvJjbSwbh1tJvTjAApWSwhNtuu3po9yitXZ5SQj3LKmR1DMPozt7DwDPntEW",
  "key20": "5kqvGm1xt1t6ZEfpd74oXcUEB7w1XQ7stRaDoqzCp2VuAMtRhyEdqFEqLoX7Q68UnAci4QvoiQCoqgm54BFNcUeW",
  "key21": "yvjohQXHYFexVJEXMcSsFSR11NKR2x5isS7wNqkEwE1hsU4KyvEdxpf5Teknv4QRWEQUxq9r6foid96VdU4E8kU",
  "key22": "2r7DqkX6CgjaXxwDA7cUNvY7YLACJvJS9yHGtD3BjgSGzcMatSE2hbcMBStz2FSEQ9L3eyLZzzUfAfeHxbFeJnz9",
  "key23": "37acfRnf4QefYFCDoxCHSjA8rysYAJVrA7cZqfGusEiQnwxuVTTD4hsjeZJaUUcJHe5cv4Qjfda7Dwciit7dxLR8",
  "key24": "4X6eu1PS2QrqBDtQYoMu6K2Qde2N1MrGjEnnsHPfkCavKPr8F9fr8yVNuWh9jsHpYNHji5iSwPayEYCSQMb2jWWF",
  "key25": "42kJ12iK54iZDnZbowpCt9paEjvojDnM8TAPgYz1EGFp3RLwXMUZWeQj2jVbdghSh9pKbiyKSEjXjApB1YaHbCiq",
  "key26": "3eDHyik1e1JZqenKMefQqo3UBmY84Hsan45pK54eqX35TEs5SWvjtqGPYsZKe3HPRiuXDzaNvHDEtRvgerpsZqxD",
  "key27": "33q9cjVjirpByjVCpegRZJtYvH99Bd9WrSiZCt4te14fPYTNNVDxXEgpnpUqCQkUScNMdBuTnBcEycpkh6gT3cpA",
  "key28": "5hkFnD4u6qRXUdxT2BhayR9ecSHN4GGTTW2JJ4GwFa3msMBu4xPPvpGRthsC2pjnMfWDeffUC8ej388FfKzeSScM",
  "key29": "HTPpLL3ADsKUrQW13QwW3Es1J8DM8LFqdfjnLUbkgSXBrWpNQzQKQ4VrcFG1hEuL7zsqCtBM6rn23C9NYBMxr4Z",
  "key30": "3Mup9HjEwLb9CP7UYmQvRkuHhsZJP7NxCsR8D5ttQavdQYZY5kt9HjFK7cddzzWvZ2fxLLCvwP79tZNEDAFHczah",
  "key31": "5PbZZnHwcv3cbWmVtDUf9AHHgAHxZNoJYYkbaY1S6LymcUPh8dEYYu7cGcWSrvH6fY3ghGA8o2qq3f7sgkCukpyF",
  "key32": "3hsNLEhVSRoJJus3CkwTKmHRokc2crcUdDVdG4K71R39x9fdHjJDBHXgHDYasFXAwBEi98kND1ttMckWVa1KUshi",
  "key33": "49PNcYm4V1FBA1KTZKCVHCqD6h7q8krMErzBgjJDjHWHDkgK8izoR8twexnbnfGWHWSqnBQf6mHMKJeeruiWDhpd",
  "key34": "4HcjkPAXay7hDyv1ickfMPeB4qXAReEaQU9qpmf8SzbFt6uk6WtoaFTY5pmSAXC3sY5tMYZa5qATKJmBwhVXjisr"
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
