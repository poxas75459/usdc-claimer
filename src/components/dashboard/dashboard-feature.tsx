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
    "pbSipPFpTZi66uoRLD2Vj28gJKQFupZe7UdrQwAKSs9K5SKHBUMSaFApY819zUZ9bkNSyVbcFh5yYw2HdFbzb3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCJMuopN5QHnYixU5H2dU2bhGxDT6pFHiMuQjSE8nDU75MUf72KXLzbLYuF4rPMJxCHYaszQUWre4imaDuhXDrW",
  "key1": "5uYvChjCsZ68Ld8FgegpiDKuKeAvQS2bAp2cWErrAu1RihEEiK1Xv1e7jMALSYoNGXTuwmhVdvXP8Vc63pyzyVik",
  "key2": "3A6bEaucXGLfPYGLo5CbQ8JFGWc71iz7YnxiHyRS6bSqT5vLwgKtGGFGNvoea7ftDk6wAfDh6qhinz6tW8yVZ8A5",
  "key3": "2i6KZcUGWPFFjXhZroQFUnQVSV183DqCtnGoDJNBxsjsQz9dUEK2Gp1sw7hKeVyRCEjUg5Q3a2uzbT13CLeKnfVj",
  "key4": "2QEc3Qzz2osYEhausxXpRWUZrqbN79EmvJrSxHHt16Pn9AAq3ZTTE8maJe6fbZDhhA3hJYTfXWJTCYjzeLhpA6pS",
  "key5": "ApHH9qMao4rue3FeTmntoKioLRxaLbLfZ4yRiBfxxaPyricqCQM3perm3Li3TZG5ssdTW3vzPVtS81V3o2Dekh9",
  "key6": "2ovGvR8sByAAn9YhTwDGG6dbrTeQod3nxqkLgngJ8T9fGFfMB7622LxgoJbjdoZxVEVzwYMGmfnMe8xgGxPrwC21",
  "key7": "7LAhh54Wx6NxFAWbYN5j3fmpBzErGYhVfTaCPeejYGzpiJ4dC3CF6Az4Xy1bExGVzuXCSewCeGa4jMHcbSdNqqE",
  "key8": "4epPFDSsixTZC1JFSFFgdLDfgmatbX6eP6wwM61ugfstNRC42Ef3mAz6oL4RDCACqGgpkNGATaMg67jiNSTrNjGL",
  "key9": "2cMc62tejVPfhJ2YntYWc3AEKMYHWp6dcXg8UuvNiKTEZ8WRBVXzy6exLVuiRSeumRepx5TH7do7LLKjtyiyaQj3",
  "key10": "27G5mcra8reZMjZZ2wnpRHHEAz9j3pnGK9abcKNqRgfpegBqdcV72ywC2TViT4Co6ksX8fTdjrGCM8dnEGkn1x2H",
  "key11": "3xhT41YxVWmzruQGwnAZcwBx9gZwbgVhwrvpFrjcYoUtgB7B1Sx2jB3uTHAib8yRtm5qgxwqifY63tGWDPNiScxH",
  "key12": "3MWzpWaKDBBrJEHKWTGdTFzFPQ6WH9A3v49Y6ETESh3viNf1J2JzvxNXgV3Qsri4T7i9U34bpoJmBrc6x6oAfkHR",
  "key13": "3pxsay6xJCtpLUAw6m7wmdS9byruL7cBB3ZkWKT4ikNPjfTPRqRKrhqXRwRRMLvuWkeGdiNXeK9rsnbYY83DxAtp",
  "key14": "591vaCwAHmv29v97dMGkFiwdP6rJ2K55fBQqSPkZekepi2yAd3CwhhZXNPD6zMqhsbRKxRRtd7Nwi9EFG97uCe64",
  "key15": "3wGfbWf1uXa4KnK11eNFMA1zvEtACD75Td8AX7Lt6VmTUZNLuYB1AqJgNF3Af5Mq4DbGcuwsNkeBzNxrqA6b1q3Z",
  "key16": "4DPEzNfmdkxqBEUqbRiqg1UWHc5oAUny67dAhgucqFj7AyLRSbB4QFfkfXgBw9ok2d9C9Wct38aJnDzphe6iie4p",
  "key17": "FN6W8T9gondhF7ibikBcPFw8FnPRPJdcb6UaDrKKnCqiVojotri9rA8JRuEM8hbZraJg3xAMw5tUSLYEgJQKYbe",
  "key18": "3tiQNQEUhaoFqdc4QShLofEVL3rVBUzzbPdJvyaQweMz1b7Y9ynEtJnoZfRSz1poGyNKn3ucWGHwf9zWUoSoj9NT",
  "key19": "2NdrC1RuMBLkaMaMVbeBs2rBiv1y2hZoFBh93L9QtmKWmBdth9783Qtvn1cJL5yfMr9VsaXU4AMZYyYhe2VKz1JH",
  "key20": "2WPJzTyVjpQwJJdRurJxBZinLuzT4e6WVuefBngYiovHJW1P4fdWxWUfrb2NprHrukKoSW1wgepsLxoyG9TfRSDH",
  "key21": "4hxeiHVsogaRzeo9SdrJCx2f2L12szzQbrAs2ma9cpCfrdmrs1P9YQMqEf2jbdfqo7xUzsugEinXa17syNTJXrNj",
  "key22": "5A2H16pgJPb61uwmu61Tz6NQSFjdnLu5GqRcgSD89REq72PWfakJoRbVPLVGDAc9Vozuv5uHrHS1Mw1HnoA4UoBt",
  "key23": "4AE58VFGTujTnJkFUvNrVFsGDQXQuHJJPX7331c1ocF5EnZxff6RwrofMchPMHmmsvhHrXNoSXgEuXk2d1xb2Q74",
  "key24": "4J3Yq5nSiwmzkn7hYWErtHEg7tyBiPNPXVPecbpZv92WMepPDUyu3W82E95FhVSh3AwMBszxqVViyqZZEPdf2wkm",
  "key25": "4h6gbadeAkZQT3atbpuMUStZc2xR5gTE8kFqD72oxeKatMqayPWHHtERjw41FSJUEgQsyoDrUns53HgzLLZianLg",
  "key26": "3CJe7wN86XYQyGTx4nK6HUR6mn6J4btCotC9711VcGb5AHhuoH3M1UJ1d2G4wG6FjXg1mXbja9vkKco61oLsz9ax",
  "key27": "x1PxWAb7kvs2miy2vHXxnmo61sANJ9opCzAEpGVa8TfVwGL92KnvFKKdss3qdy6tyaJfSC6W16imEPaAfFDXx9t",
  "key28": "45CgMHZr9cxx6mHVRMY9nPrxvk9qFUx4bAWR8h9ENsTVasNYPK64HhUeKMx4nn4zikz1E9u35h8R4ARYnm6LujdV",
  "key29": "4qkKwRZgh6WJXGo6R7xLpD2AVwPdCqHLz2JRQo5azyaFVwKGCTatQjygSVHPr45eYhzh6rqMX3FnJQFUw4PV166t",
  "key30": "2y9zknQevCFz8EPM9X936zb33A68p6WzzErZEtXzkXeb6jG3XpfgkSpMrkVzPznrsHhvGseE7iA7x7uRzUbx5j7C",
  "key31": "57kA6cmM7r7Gyf6TXCSEyg2xodguD7aBy8Dgqk7Ep1AfhFHWzsSUNzMNXfHG48ZH8DzJfNEp8tR7LFV4gEtYn2bG",
  "key32": "4Bi6GTVDhNwUGE1fjMNmfYPVo7BDMt7PMGKUHRz9w2q1NxA9gK2o17gtVXG8RYyitA2ahPWZ9cDYwPQK1ZeVz4io",
  "key33": "57EPGMRbhiRaKgNrJHNLd5gXPsgLbpEhtqJwV5vVwTQKcVpXDh44zygHhHFuHdWn7Ls58jga3WwJFRU2QAFNpt8r",
  "key34": "49pUCXqoD8kdFhrDhKTE2SrgvVPvkZqrv4Fua4EU6THcjcCbT92MPQUwUUjaLRr3fnji6s11pszJVbAqsE4N55Bu",
  "key35": "28Kxf4EG7faAruHT1hT263epNNPT5vX8DyK6mjMWA4gitUeGoW86miYcdrCsPaW29h4qKRSaxMXrG5urfYg5x2sE",
  "key36": "4WkmQydHsV1zWDsezdjYoUC49Nk8qhZ5Yhs9BCW5WQ1RcZNAr7VdzWg18buEz488eKipoWhRSgvCjrSDc2CxaQgw",
  "key37": "3uquEFHbtAGzY3S4EoByj7mvw5cRo7g4tZHWyxNqsTzCFVooe2foMF1zpd8TUYhUdevM6KqRFdtpepjEgH9AZu9X",
  "key38": "hs4PuQPBi8Cnw1bheQJG6bnEzDy9wtM8SZ7zNRBkYzAAnTussg5a2CjV1BN4qonTFLXJy3d3wX4snPS6iUCcJED"
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
