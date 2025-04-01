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
    "2tPPuRLb3keiVFhgM4LdHRte85fy6ksMgTsrKoPAC7bQPQCG3ozcMNCQEJ2Z6VwxuXjro7JBCafup8j9yHX7fk6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3ZxiRWhjfsQfSN8CWKx4C49oFc4okjergneqk958NDSTrPZfxnwwgqXMKfRv2wjTQPCoEHGbrJADbr7rhcJfb9",
  "key1": "3cXaU7KbyookPMmdzociyLPDZELGf7g2j2ujKNZnwYkTXnFNoAwXnKMz9AemyFy5R5RSgaJ6i97oCr9sqhzu5tjH",
  "key2": "2H7VeNyegrYiefXL6epH5RRXsW5tcNKgkYnJNxWuoDtC84P7XtgG7hJRoSovFFrRW6pHST4TthkpLzHZDXVmxh1j",
  "key3": "kNwhZ4rnpgbHutsLLzvdu8WFRNEcJ3b1MFQG89YvS4DEe2Ku1aGsxzQx9PuFHmuxp16i5XmEaLkUhcszupnxg5d",
  "key4": "43BJ8gGLtXpGwhfSmS7Diu8PqboeVbZC6esMBLJyXC4iLjt2SLPGtjt17nb9xK2omQqGU7sbW2nqUbWtGieQ4L1p",
  "key5": "5xH2hBtFbEZBVJ6w4axK4wEumKUkKmhVGzw6FVvH4BrRfkJofrZcvu3Rz6RHdRn6RGjZ43by6pzciKWV23NgVNyy",
  "key6": "3FsAVrGDrNrCodTCWFmMU7nqkyVMr2ztqTCE4Eh5H3ebvhgHNYUTKk9kdENhsvLMRtvSnX2tcDE8FSmiuTezR2pX",
  "key7": "2LuuTspx9B1ZGFKsof91UaaoQVXAYXqpNcaMa7rL4YDNPEH4a9ZhaRGk1p22dDwrhuADdP23kixwujdrNrSvr1cC",
  "key8": "uCVdcwM6iPEhivG6XzXMXHxEVcNb4vb2fmrhfgs9iYw8qoPWcYf8JcUEQfXRK5tH5ErJbuVEpnzvyAsnH9W7zaM",
  "key9": "55zkk5E17sq7HdBzy2oRJjLPYyb1Ca6oiBoyKaicNsWww7y2h1BxJNYc5jtH4jcSKZZ4sQ3n5zU381JGgRchVPnq",
  "key10": "2mg7PdLWZj4F4uS7Gaa8qxyrj19Kr9hsoUTHhrBtS2gt7bA6v4CUeTdJYrmZam5PckEmgK9WFTkPFDT8MPZ4qjHd",
  "key11": "5j7n9xGpmQSzoh8WodEenF1pDxGWWoMcFWcrszffy69h2ng4fUmXvW1jAaSocfQQFwdUE5a4eMwT4LY5qUsGwrRx",
  "key12": "32um1oa2WVT49tDiAkUECX2hsL8rQUgGZ5EWQ6uw7kKSXfh3oRvCPYKBfBWbTB3FEC3HRskLZXwjQbJKg7podCcP",
  "key13": "2a3myu9UpfdBMLZrFf81LjqFfTTsPHtHBRDHK7LnMD6FidtqZ3v5irE6BJ5fyqXqoyfJ3X7jfCN9rJXbPuib4L2z",
  "key14": "bBExutZSW6zT731ZFuzB612cGqKmL27batfu4j96yZB9Qar8u1jLv8siMDM1YRT5H4NqTQmwEVFpU183cn73CpU",
  "key15": "46GNmrEAKqc2G7YQj8Q6DgkWk3VXk8Ad7NE1skqpRGZLuoMYBJPDzoFatmKUj45nFQcTQH48ZnfACtwkDEDiLEY8",
  "key16": "2RgjgKHGt9P9VCu4nVgGQ9FvF8fPTfBNt1HZLAjz1QYd88VLA6VidB4zguZhsHspqS3YCrzFzHWb5MtYUCPpXKmZ",
  "key17": "4oJwgH2sW5KXqmsn73hgDAHikzanBEaokCNtRUrqE2pJhXDL7JQZ4uZ3GWrWCiyJx33UHLGa4AawB7zuWcUMuWTC",
  "key18": "4kcDHzXJcAqoRJ1Cp2gQmWRsHbZHHbZ3bP97kFPtucyBzXmpbzdXhAHbhNz4pjFcay7SSpz4Pnf9qJpHGDHEpP4M",
  "key19": "4SJ4bmQquVd2NxHAoEDbzYonNGDgdPAkGc7XgMEn2WTr1wFBUJhQLpHQECAoFN37vvEro5qnakf9JWmtYugt1mkA",
  "key20": "hnpjQ36t5wvHi1o2swgNyK8qwuXoU33nd2pTmKgmq2fYcgUSY6A1xB4sgicqeb4TzeeouioubxRz93evBBx3p1G",
  "key21": "5pvRrgrdDQ6Y7jzMjwC58Eyrxr1g1n6fAJQn7yCwi2cym8zaqhxZAycUXf9zoV8w8xbM9Ko8zabodGaCCqzqeCHe",
  "key22": "3LuMxe4fPKoJpLd2KE7MjmYi1kWYEce6L6SWz18i4zSM8VP8o8eJhJnJzDXsSxKN1kzcmPFXCJawWstfekcP4KSD",
  "key23": "2pKoECuWjNNmXiS3WQDgZjuXz5egsxHGgZJyEJ5VFFtj3QqQsVtC5pEH3MX1pqYTa2FQskiB566ebq1CKUe7GrAK",
  "key24": "3oq4Zb3Boef1HHNzuKMdFHHekV2cpwHyuphyVwF59S1mRzM2nCf8UkiJcC5McKSCepDE44W37jqq6Rwgdfiht9JK"
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
