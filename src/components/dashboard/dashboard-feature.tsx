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
    "vHT5yoZCKYG3vGEjd3xXFBqYQ7KtVQQMN79dM4xsfV5ocCgJzHimCBEd1uTknZY72VnTTFLzR7GqhVUkNRpzyjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DES8ztXS5xeis6pqsdn8AcKa6o45w728ajbMbMXkAhgRkpxdrmeGJqXGVfAkWDWcoAY5A3YUETm9XLALmM5rWri",
  "key1": "61CVqHnAH3Akrhtf7ca4hU97MuBej33AMFthuJP1CJcZt1VXXJj8ffnXq186K7MyEWbb148Pn9h8L1AXrh7Ecutn",
  "key2": "Skrpc4mZY4qrgAwsBeDwhUDmeoWvnWcdUSmmJK2cyf4bLGWndiXgXVMH7sZaUkYoFcL3bcH44H3RTrZfa9mqeqP",
  "key3": "2KZBipwUKzAw67x42zKSKvydSkx6tieTw6xDrUwrLyq6EGcYcZod6t3yL9dDgHpfF52272sN9ZBpmTjMSFzLoNxW",
  "key4": "4X94Ba13wxvzjtQr3rgo3aNrb28TuFvE5UTFT9Gi4B6f474duWxb9wHDA9tGXWGu49VLCa3Byq5ogiJqbeRf4abq",
  "key5": "3g2pQ7ste56KvuRQbZYzq7PfTiW3n7Q9oCJE6tGmn4NtKoBaW3gsTCJZtNL38SdEKekbXFrYtXNLCi2miRAzk7BK",
  "key6": "2GKboBrCQ7Ao1iDhRx9woW3aQFXq9QKmvwH68XxgVgpwukfYCxXSNe4p4pkm4YNKYFb9cftsf66LfRbRYrV4x5gx",
  "key7": "3Figwr5qDqCcXZjWVgh7bcywdfnaX6B77YkjBsbCrKu9ngbf98fyNp5Axncm4UG5U2EJyrYPGHRSms1jg27LvK5X",
  "key8": "2vweKJf2MFvSZdMwi8XE8QsGNooi9mEybNuyNKkuVaq4jpS2KzxbahTsMH5TtUPCheQXAUiHEp2AjyQP5dGVzJF2",
  "key9": "3z6k1NnawPwZMN9zsgxmK6N8h132h1a6a6iw1DZ8GmUXyryQoeSs5AEWg33Fop5QStdkRPBPFkSK1uPv86bXw94e",
  "key10": "351uLmH7hCpEqeZRAMTQcixFG9eGgZobC7vroo8EV3utUaCgQxhBHe4SJTXyjkZDVFJCrT31NwwkjdNPAVAJt5jx",
  "key11": "YcJZtteFydTgePtNTYw7DobzSHgSgwK95iLe2Gy28Se1M4hTCkJtGQMwPeJkdufJJEnZ6x7tqnzBPuqqDRht482",
  "key12": "2PjxdaExir31ep3VtuvJNJ3qtwRXQhzdbV32NRdjxrpyePg5rufKD8fDi9Z8zpNESspJdzoVijUFHEQRP4sGprYF",
  "key13": "28ga3mxeysBUTaAHVDmEn2pGSbwzvMXvr3bZZejrGaZqHfkKgLRvJKmXyz8No4uiURxy6krFo89JCfEKxsvAFtTQ",
  "key14": "5NLVn6Ta3oLRKVap5pZe97HDfZqNpkusWB6DBUzHhMcbD1DYicjqRGHhhRWHFEZ4XmhJ7Gky9vMJtGt98ga9BhsF",
  "key15": "4raQPgphxWNwNzZyFekwbXkDuo2ERUWdWd4gacjQdeAHh6FS8jXKyvhjdnSApTLJf9k6eZDydBaTsERvpLDfVCgM",
  "key16": "63n6UM8NhZVGn8JQupYobiM4qvRYZ7cMqgc8hAFabEyBb5KWEft3WPTmjUboSesvrr6mAAoa1wzfKDPDy1HBkWuv",
  "key17": "4WPbqYFJvtqxp81vrRqnS7SoQbFqqxik1cUF6M8CPbxrbNZYVkAVRUMtcCB9vJHK24NutJGYpwqY1Q1koHYVSbHM",
  "key18": "4bnyQkzaTWQ3Vm3rbgp9J1AFosh8Vn98MhVQ4VTnVpcyfNhHvBNJtg4gFsaoLt641eEyqHqdRJGZaWG7jrBtdQkj",
  "key19": "5RqUxPCB4XwMesGQ51HVjvdEfExH1cCmuXGWjGNSRe2sNa1vK7eTkQasiVDFED6oykFGtUata3K7U7jwE27EEegc",
  "key20": "27VEBccGV4HC3oQhXnoNvkQnjhnz3SyJ3n9sPn3qZnXJCv7d3VNvTt9JzsiziLjd94bGK2b4cqUZqDCJ49293xhg",
  "key21": "3HjE8JkZKavaeMbR7oqSm2kActwAsvF7SsoNuiFmVB2tG3UG3cHMTWYthfZ82soYwMCgAW2FycuWu7demKQnxRer",
  "key22": "2FgaV1mMTAxbHyTbaexCoiGvSMpzNXAULEEu217FdxGdnB9m3GoeLjRUi56S2kpBTNnjkMg7i91FqnAqtVDZudor",
  "key23": "2eebDTu7JEeY9JAAxoqjg8pVVdaP4S4DK8CNBEm9gEzFxQaYJmj2d7YVj36nhqVvKpuMo2KPg71vLs3Sa1TRrpGM",
  "key24": "2NZEcb4q4kqTvbam8byn3dYYzvHTJJT36zmWDQtX3se3rHD6LC9yr55AAKMMgBbViS3djX3fxTsM57WM4TNtqT1X",
  "key25": "5wLh8itWV9YADd2VUZNqf5MZ6wd99ujKg2VoLvQ7BenoTFhbN3c3UMujdvYV9xSCHjq5fWZFvJ8owRBiJmZK8bmK",
  "key26": "3w6mxrHDS5XMzhyfAq1bfnpijPdgeQT3q7ZxSDZ33C9sdNEpHFC28Et3J1QxPnSZB3aDs3t3s4BaX1CEobENXNyR",
  "key27": "BrmwGaBDLTHReeaPNzknp8vSvYAu3ohYiqcbf2meTajHWsrk4oKzSpkZ6VtgqBJBDsqpuJ8r6uLHrVC4KgUJa72",
  "key28": "4Ya4frwSqFNYoRYjEzVritPtGzs1DVqFbixLRJCEnHTnEbXVt2wGH2uHKpua8aHeAxrK62tBPcmdr7CaoeVAwJzJ",
  "key29": "4qAsS3GyssJuH8b3pDYwhSoi1P7dCQ8osjoa4V4V6f8pmWEsUgnFq7dX3A6RrU2KdDQZVQ9P2eEJ1ekNBp8gcMeN",
  "key30": "3z1VPS7iXJaLfJFeitxC8kk8VvFQLgbfQjSokojedfQmNyC9xQBsSJcb3actecFJjvYGiDJkk3qpXZRo66CQZRH2"
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
