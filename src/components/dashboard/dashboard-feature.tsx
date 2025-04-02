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
    "532cvvxN3niepJFZJmYhTe5RRwGPEGDcpNqcQjyHXt4BW7L8KEECywsTVm5DmvxpKwCjUMv69p2azxqS6EQRtGeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MmR2W35i5cr25BrpfyDeZLx84LSGboF9fNaKVgw9AJ6CTqgfDmHXP4cJTBAYKKLsf1z5SGEB7EJcJFB6oPVYxxR",
  "key1": "FN9HSs8n1Up76rTRa6roR4i9GNwqhMUCKkqfyVK8LDVV5RYXhBbxXPoF5HpyqLSnrAR4bFPuRh2eBswHkmdpY3d",
  "key2": "5zf8At5ALqTZ6MDySL9SgBR8YyRSUS1LeurDcHScspUrJFSyEJCvTiqd6Njjf32dnD4iXBuM3znkscX4ST5yAGFJ",
  "key3": "whTsGM1nVnXrztLHoFuDF8mRKc48YyoU5xrg71pr5HCPjygoWqKtKHSorrhQyGX9N88xx8G8g2g83tB2N6JG4K6",
  "key4": "vbjAjn8Vc8utGcEfEdLXv3LqqmFaWF7D2HWTWDGZRDtTbMUDm2zonUK6dBBdKAeWpin63gdPAiZeGZq2LYoA8h4",
  "key5": "2QnJDtXpXfJ37jhkhr5dzoEQvdkiZpbV7dW1W9tUUYJc1dfeSSUHYtifamPMQ1z8NwwToVEdsJytmMpFXPjq9zpB",
  "key6": "3ziqft1N5TjRY26493m36FZNRDReyUo14zvu8S46PyshSMSiFvofKj32DsJTjLqugC8TMT1qbrLsDfszSApCc61R",
  "key7": "2PmRWsrFgr16BgLA52tDruKXkG7T4iy7QhwcyWL2YTAcUaWZUyBWVZu2JSS97GNbqE23bdHefkbj2zakj5uJfHTm",
  "key8": "qpC6M9fYVY8D4JdJs1YKikQXYp72AFV577i246cjso6ev6k95tzDoaYRyivdVEPKzpLPgRLXPA2uk56ief98dJQ",
  "key9": "3uJXkUu5ncgQdm6Svh3TtxEAaLumtPX6rhrReYT1o5atvepDRrANBuQ64magABM2swTABRcHJsSCeCx3ENkPPxqy",
  "key10": "x5ULQaBQAfzbYzBSXxqEkr6yYDR5JN3vwifNehEiDNqsentTVgxSpiU4VTFcrofuCfdkzQRMq6g1ejkJb9vCeZ7",
  "key11": "4pqxiPC14J6bGo18sHjGnpxtkSdNJXN6SdUtA9R1uTKUDxvPcM55ecZwh6zYj6WBsG8cc6AARCkVQyMSCqvVvRFm",
  "key12": "4zk4Wqn3B8hF5RedQNB3YUKgUTGTVGZVZWemgvRPPbJK4kzAAn1r1PEHWKX9cXpXnTpUML3UtGpEgGxcyB3jBNWg",
  "key13": "4opu3JfHmeXt6c76TvEy3rQ8DyPVxsKr9x8NZi9TufNfHEwf8gydRQgvSt93sbFSJDh2BQ4u2S3a51GzguTjxhEP",
  "key14": "3MgimfUoSDNQcPU8epNroskzS97Ny6A7Atqa1TAvb2WZDkQipv9dnQmFXmaJ85efBMAtREunQGrA5c52Byp7sMhU",
  "key15": "2NqrgAq1GMSWeEKz6msrQS43S5DqzgLToka5Rw4BUuhQmiehcop2PzENZgChsBUJHfHWLAbqypCFFYgxa6FoSXqv",
  "key16": "2EdxWCKg4WkEnjMAH4cmbzMHXyAGQaF6PNq2DYaaF13cGYBjSLkBmBRgDRpEFBzWyHAHkMZT4U8pPUZK8A71ASef",
  "key17": "29jySpSXahgfyUon2YVYrSgyYjLVqz8SYri9qZ9E2WM4Rzax812tomFSZeaq1TU1wTw3YRasQ2df8SPBccEVpJDT",
  "key18": "5tBkcAWjfwzqb7YXyJ6wTTRKUsXC4uDo6jb7pvaydN5JBnQU9mJx38ZMV8g1sX1PRW1hKE7ky3Jywwpi9Lzmvpov",
  "key19": "3Ke26ySuZtgsjdukfVDm1SGSwpn7o6N7WfXypwQiAtNwj4MWWFJc9fGe4fKx8DfV4Zw26QQo1BFoQ9kRDZStpfaJ",
  "key20": "DmW3ZVh9PRdZ6Cnnzx82qMfaFfnTUZwXFDB38ZJwCeNV4SKCbURZnStzZB1HRZY5xgN16wWwDV4Kxq4BRuHWUep",
  "key21": "5jzwpqZ21eVhoiKZmBBxiEQkP8XQqixyUdVEfADFbiV5gdMYdn5iTD5toxuf2RQDixGaNNgeWr8u8CKJEHkyiFa7",
  "key22": "SyQAEqbcS4ikasv41dUuPAWRHTYecwg5joMu4dvQc69jy85gsrbWxUSbNZnhJP7txoib371oL2u8trREANXiSjF",
  "key23": "2gTk5RZxo3Haa9FdGMEoBn8uC6jsmMzr7qmmWZHvKEvKw8zjifehCKT5dmwtxy5uupTLptfYoPv7B4fSEvKwtz4k",
  "key24": "2FBRq8H6iZULLiMzUwGbDLXERDG9DpK7jWRLX7XRaP6eMDU9u1dvMTvFaLWUx2HPmcbrGLw4zzkiS79aqL1ugkPS",
  "key25": "4AZMqsdTFsgpXatf8ErrAyKsCnt3bdogvyjX78jSSxxiy3DR3YuE9QnKps8J4ecTnzYhyUhX8joXEM3JFGJX9mjn",
  "key26": "3GHn6PuTS5dna4qvE9VSJfPGjSqCQdFaAkikGXrFpmkSFgk8ZDpsj1UeMCMUzgPS7a3JK1UDb9nQEbubR6R1fL8F",
  "key27": "5LhoZZKCMi3X44YB5oGd7L4gsRnG4cNPp3jsZpeH42FJCXQT5WG1eV9YqcfYzp2oVUDoa13Fiq5Qmc7uvKTicXV7",
  "key28": "J9MSViRb2zEbZ42ZQbzFNAjULeBLJqeJH3yiKGgMP9CTXJyGqiZHHZmCyHydSdgGApMwfKvzZtPqYjcBQb2vJLx",
  "key29": "61Ny6Fqx6vD5Wa581sM22RzWWZduZJnby8A6xcTyeLxb4dro6Cx5ZrxYcFbqoT32KK2TZ8iZUZ87DgfxikcSyYPR",
  "key30": "5hdKa8yZEVcb3dkunjkU9dcNnE2jyJyYnaCM98CszN8ndBh51RiZm6a7HhZS6TihUa2zQKGKwRxNKpJQyKT2knpn",
  "key31": "3b59fdeH558WRowUGpbGuviiwT8R62uWG4RMjF4Eb73KNet4a7PD9oDfvDcuqdEtK8md9daGdu32zAEWkbymG5FE"
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
