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
    "5b3Man5xUTneDRr5rQ5cgV4wuBVx96b3WwYXPCBDMyDFTN4WPixuye7wayKM7Gas75jxnPM6VKML8R797mmHHmes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZPgXEUkF1MUja75kBjDYBQyECK4i7Hh7iCafksVJb7eFNkQM32frAiKS1UooYgMoS2AnucxxwtVBTJQfRe2twH",
  "key1": "gXx1BdTEJ1JPdunVoZ6sqQWwNSUd6N84YnyEPvHqjvvZWvieJ47ioiMxUJSzfFu8qkJfMr9tQtZDJg2bVPRBUup",
  "key2": "3EQTtKmbZNwNo8ezPEfNzsGpbXPLRtpxgMgfxkYyLsued3aZisRdCCKk4YZ5Wbw6FH4EXQEJa7zBaqk5xP8BMkbW",
  "key3": "3KVN88QbTBtEBJmMuew75s5mkevMSLWQJomBTFx3hDxJXAGebs3sq79MnRSS5jC9D2Y22mdGXTJ7H4YHNHYpLkwE",
  "key4": "36SmiwzL2MRmmRFxtCoD8AWwvYR9AVhMgrHF4bGJCMvh2BdMrcbcEtXctgGAkMvwCA7LvARWS5zz9UE9bpymQ5DC",
  "key5": "fQcExCwefUR2aPK8JVbKxbvbtikxGQVSrBGQKszv5X9BkZiHUJut4uNquGrX3N33PDGoTfbxug65pYnKEjk4ksD",
  "key6": "3apdbBhbZ6j9npGEZsCFqghkxKfsxcZytjdrAVset4rztWT5BhUgFALYsMRcQwM8mWEBcYKaha1wcahEcygP6fFK",
  "key7": "4KNNtDXUPDnPde5tcw7bXNQ8Dkua1GvPth95KrPJCPEvZ5H1Ro45XWj2pZii1tgye7vAPCHHNvuRWJnSzr18QwWe",
  "key8": "4DyRgwUsftdMVCoyR44rLUoTS11wZ7qUM3ZAefB1b7cgj2ZB1mGwf8R3PQSeetKBohHhZ8gemxVCiv2TdVeoxneg",
  "key9": "X81LATQRtEVjsXrurSJjue3NDe1jR79rx82dfUaHpuWTzwvcpj1EwAHzq13KgDn93w2Lb4kbhAKq1dqRZXhrDkW",
  "key10": "5WZQcUeeQQcpDwDJDJ6KLLtsiWfo2usnr4gsmn4BQSN6csiA1uj4etExJQyRM2txdQC7dcgYZ9pZjCTKBfrMfSAc",
  "key11": "2CnUiM73kzBgyE6Fk3rDoDuLV29had6cDwft4DFnBrppNfpqiR29Bvr3j9nEXNosWtXwfLPqGuoMczWUmpeMUXnR",
  "key12": "5m68xp3U11PHftdUDwAigyB2FjDbSNDLJydLyN32eYcn5hiN8AFyW5MvoEbEPcVhXqkF3myNfchQwDjWhzTr99kD",
  "key13": "37hNSLNLrs46wS8hfR5QfhzXJDmUpb6Utr2nm6N2QVVE3FAuxNGJBJsh7vvd4rPGS6JFdCgLumVPDqZYVSnNV46M",
  "key14": "5v3iayTnAjXtG1drW3aygx7DaaAQtC7BuA6DzWRtU2ug5gCcJLdxz8er1U1Ya19AVGW1fTTiLYCySQceEZYgjRmV",
  "key15": "3qG4YDNvUzBk5jNDvWRdXk8aCye4LEQDHnxwY6crGKsoDQczst8nxKTkw9WwGJ2VyZodHENdgZbBqKP5kTDmUosG",
  "key16": "4mAuUoeqE3qZm1WbTA3kAjANQNrwWYiupHstToukMTd4m5uFUJgKxKox8yPzPFDxVwe86dUiCCRFuumuARwUeKo",
  "key17": "2sKdMMf99bQgM4C8LwTQa7nDffFtziMpmuRaPwyeMiMWCSnSyHWvyC5wYbqjLWigDFLQQkyVtoRhk82zkfveWnXr",
  "key18": "5ejbTLHnKQSkJJVhae8hcGa7nKCDMhm2LqKQkjTsiTNAyDrhHVPwbFkaQARS2iYhd6Kb3vnWPYma8oLeRaFa9b5M",
  "key19": "5miskQzNySpCZwttZsH3zfrL5FU3qF5ttgAZD8MakfqVLVbDvaK8UJRjCcKZXDPdHeDDi5p3mMp9BLe7Sp3BdA46",
  "key20": "2KQPJLtxvnYk4wmWGhTjcMJndNh5iwV5DnnDjmAGsQkFt15jAPDGHUxSJ1AbaX3p3AwGUee1Dm6SdvLS455ZLoWn",
  "key21": "4UrEq2PKh2AZmfc1bDqqcwTQLLzfLrrGgRDDMSCR3SjmGtdfitCwfbrqSnaihdRGLmsegtuAwwJnzaPGZXru75Ah",
  "key22": "62hB6F4kqAxkV1tj1LfHx5daJw1i9a6zby5kfWmtUiB84aPBtJHF8hwSwLz9JbDYjuaoGk6GyD7SXUhineWQqbCj",
  "key23": "4mkfq6L46YdL9bw6VA3oFpDmt5rD4SkDDGNnCDm48s17P49cgK6CdDmKjWYaMG4wkKkxHBHPzEMrySZvk9hVukCq",
  "key24": "4P6LwbprMypLqDS5ZoNC3s6zSv29g8GzMaMdTmgQx2yrrhfQdBkaVeK8bdWMfB5TLY9ERcdgYFYMm2ZYJB9uDXgT"
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
