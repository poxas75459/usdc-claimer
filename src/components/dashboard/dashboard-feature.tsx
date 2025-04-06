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
    "6593hnGzgCyhayKSimXQBQoroivGBCyHXYusHjRvptxcKmBkvHiDR98RkTg5LXkh2RTfrfPhZJCQKXvrXSABfwaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dsf566CJAfoEW6rqMuM21N5d2cHJTT86zFdstPG485eDhi8pUQsvf6noNAGtKVq6goJtUWChHHqJvocxuanipJt",
  "key1": "5nhotXsCtwcuoQVdFCxZUkyHRYKTmh4HcCbq1BUact3n7qk8ok4jNyra9Ys8XtQt2HYBAFiyspd2RW4WZJeU1gtP",
  "key2": "3Nff7YezGTqZFat19L7X68yHeMWVi7ttyS3aAkW7aai3wz8iK8FuqUfhQkqvrfw8SLMkRFTS81dZwTu71ePGR3e1",
  "key3": "37jwrumDMdbJ7pHbRwwMrZ3F6PJDGipPXjeYf8W4WPbdzHyRNbLPvZeS46bfqbpYLWkoKvhTS2RhycxR7HoLPcS1",
  "key4": "iPNpUV1tSy2DTU4SpNPVUV6fEYaSETbkGPAJMKHGKY7TSWCTPbbphfmzgMpUdTPwrtLnan7NQi8xrCHiBtgx6zu",
  "key5": "4PctoGHDoMbVb74utRzjctBMmRb4UckGEHpKR5vMsc1paiY1cZWXqvViKRSFsVrxWFztqMioiRkd5tECyu7886au",
  "key6": "WkprEjBrXt999cFqzvMVeeQt1xcbTjAMtqkn2fohPVuTgMXndyYuUPVUtVnWvkqEVFH2jeW4wSoAzQvhWNfVNsq",
  "key7": "QBkJLzcWgYFcQ6m13x7JhJQJ5ShHCNPBsfeQ1Xkw3fEEkg1cx7HULHGx15LMh2wzzNbhGNaJLPt9xBuWG5kM51e",
  "key8": "fTJXUPSdSYWpKySs5Ae77rBt5wBz9gk6WKE1ADbDdrC2iCHPNP4wGQ2YMjDv8QX7FEcmydPqeGmCGxBsteQTFnS",
  "key9": "3jdy4rcoUoNGVRVJqZexp8K8aHWA8f46Qkyh1W8LbEAZhf2cM6nij1QnZAcbbqso2Wxa263ZcRqPDK716RqcmF7t",
  "key10": "3hJo7hwaUmWMGQYmjpSoSSy8ZRS26mH4VmCPnKzUGHKLgHdxh6VLdikTJSr4ShTpeVkLPV57FnuiVUntJap4jmmD",
  "key11": "4DjL8WnkVqcziUSEhy17rTMQ9XCT9r6abAhrgnnkd6pzgcdBVqyT7i91gijUJZoppwgRPHHBGyuobCSAUHt2cY6j",
  "key12": "31oqXKHPMxVQ9AiVDTM6WgcA9PgBxBpBoQg2X8sJv2ySjytQFwvs7kjwetiKvdEnsVbD15fUtaLeegkzTUJimVu5",
  "key13": "5Q4TpPRuh7WFo6pwTntaBwaVwJR4ZZ5FhjUZco7btWW8cm32JeDxnuZA2fqGHMCqw6vMU7r4nabDuCCpx3B1a5Kr",
  "key14": "4HyqpyaND8s7KYPnsGCrRHZYfshuDBgWjsgmQGS9LZfCLp9uYk1cFgxfCHv2T5qxDdEZQ6SUMQs7aVPfAqypZV4z",
  "key15": "4M2Qx4shKmVJZuqfhTRrfQGtA7Bmavwpvq9NVJMwD9R9WmKQGD4T4YLADhC6Dz4CSEqHm5BbJSKsCcpG7ZSYcpXq",
  "key16": "zLJz1pFiJ6TAtKDQNZFyb5Gko3UaW5ovKZKz5598wKxQRmM5Tu9SnUqsB6SXWsSbKkf9ibmw3q8x2ybNjrX6R66",
  "key17": "54nEHeYt1WgAMDeSMQWAXAuMeHibzGEMRkBTYLPqE81dumCcz87BK1m8hLtsubLgJmRatriETgxdUh2QA1edESC1",
  "key18": "4eXWpJYoBN29RHTmnZynwYoQwjdABqchYhoPNA1gQ4Fh8QscqCWvbFTJ3bwa8RBt1URNeWz93V28Dc33tJEajMC2",
  "key19": "3e2Rh92VFrfY3wNNdTvSnVfuGvGzFuC7pTVGjyEZFU1Ks6xt9CyUNLDqLdfGicZ6fXb2nPGU7m1QJAfToWqmEjxf",
  "key20": "gtKbBGgP55Tptngx5n6y5Pbd1siKXYaatPdEavfYhbThnaPN9jDC9VHWKZBygaF4SMqqRu3BRDz7eDHPDJnpFKG",
  "key21": "3A3BkduPvvKC46Ca63BZevL5M7zDRW4GfKARgeXZmXZ4iNHU27YbVjie74qV6ExoZjyLgZuBzJk19udHY8vQFnzK",
  "key22": "5KnkcZXbpPGkhtY24ZKRyHoYDGLzqGLj56hWokkCxKL5nrLNHK6Dnsnbz6v9fqwTtt1Tk8S7WcPbCA9vBLY2x71g",
  "key23": "3xec31wAPzghnMEZd4xtUsXSjp9ze6pas37BQKEkZxiZaS8fqv2YAKg4z2dfdQdRvXtC7gtuMu9rnB76Rtkq3JBv",
  "key24": "3gw1MF3qbtPnKjS7ya32GsvVTRUiSEfiNmR33HWsVBxTi2PmvYYkzcdq6RX6WM4w2B7D2RvU7fb75zSzWwn5BGme",
  "key25": "57fFkrYVFQ2kuuXq1Xvb6MBRLkLjYXQqZMzy3MWxLvVNhXpvzWTa6B9vWZTGnmTbXfDF2LYqY2ZapLXi1dUPGgxW",
  "key26": "5UYhByipmbcNUTVbVxQBXLBr1uuptgixKGDu3afG4b7L22hHGpGNgFEuaVRyhJaCvuTnGQoWUqaFwTkq2CRZZLub",
  "key27": "2gT3t74dFkVYcuTU6YMTR9bEPaQYmv3cDMJJKrikmrGcZvHNdpL5z9fhfc9ypU2CVBiunhSsUzYfsuZ5rtc5SyRD"
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
