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
    "xJKSnsdQbPE2d75cwTJ8rVN62dL4WtMsNXsdSLDzfTCNvoRGjhUzyvpYR183cZ45MKHjepyfhfh7EQati5isL8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfPYPMssLHSxJNFSpJr4WmkSGRxbgrhkP9pVG1f98seHHooPtpcAMrtN3CNU8RbfXS85brdxRcv6TfkzD2UXbYq",
  "key1": "24Svdm8mdkc3kYTtSfYwUwGiiDGFq8yEBmbz4yMNFeqr8gZ67VUk3yPsFZpdeEdR6uMAMwbYuGUthrQuT7zM2Hj7",
  "key2": "4sqaYyKNx3ikYvzMD2xVdoWPjzfjR13WoJVEQZ3sAdKDbpniE4C1uJptxys6eaTuDENxpXViEQFtefovzGQEGghe",
  "key3": "bFvYQAs14G6Lz5ckySkD4XUwpYyboyqg9dzW4BYghw39M4nAeH8fcV67eyEiTY3mmHjsKGCYkJW9CpL9sYuPZHn",
  "key4": "2u9c9zYXkDa2xbzzSszGQHMJ6H7kAwWsBb3aLJmQ7nB5Qsmj9fBFP2PY4T7BJTEvFLanpfaMAv8mBF9XxNkQ6WvZ",
  "key5": "4iBkoJKn4ak6ST8c6gbVJZ4YuLFyVsHC8CS8W3ZCcbg8Pkize5v16szimzfJKW37NWTQ318mjq2QTvxHmt8Tkvdv",
  "key6": "kS1mojVfMyC7BqSVP2mFS28z1iaiYNvNCT1eXH4DSWsUkqqLxxJKsU369qDdNhvQMCi4uzaEwQrPdc6Yg1sE6qc",
  "key7": "2qqcfyBSUosTxPaKPDbVVZpdV7ndjKTv8uq5S7QXUwmByJwXkpxBuWw3pTFEbnYBrv4N49JiHv9dBHDQKhQuNRN3",
  "key8": "5AndooXc7nrkerKdQM9PTrQxY5RWeAGpaAFfmDmJ7a7FXoJmBEhn4LpWV9XuFFm3GWXrXaqzHfu27EU4V5qfGmLa",
  "key9": "4XNFjcUP8A9hJkwhj7qQv5smxmioRMXaVhsfCYVgX3bFZ8DcreASFk7eKnqA6QHE5khQyTb4y3yJX9Yfzh4zeVdd",
  "key10": "21M8DATVCFAyHR4ybPUvi1BwryGg6hMyS5jn22mcmwn2Y3HRdqZ1A5GWvLfAdgcxCcqpXCvejtFpJ484k2nAyLqz",
  "key11": "7SswAta5QK9ugFUuVwesbL1xevkt9xdtjrPYiJZtNz7uWyQDd9xKgg57diGYYwuirMSmZ6gd1D99RKZCsJQz6wt",
  "key12": "5zUz2B7zWyHL25Piv1kYLgjYKA6rEG29epiMKsLZ5wqVGDuEGeC52cUfXykhnmYqfVJUpc6KHNyAqqAripp5wwYv",
  "key13": "45P8s88wfTVDj8WqKg4Yci4A2J3jZetMKx1SWytEF13JKXzrEpA7DPASXUWcCHmh54HA8nbMPZCoumsRL7ibNpBf",
  "key14": "6bjCobyCgfenwn7Ma9iFsia4em19mUCwsTeg3fY4ZH1RcY3N6WNFawfUPKNsXgJnnnRumByeNpfUWad5CDSndT4",
  "key15": "59mF3arX3YZdmDdqH1JSMqbi5onm69KeCnHgz3C1ujLqh1GyNuyr3Nxs1D9jdGA7Ty9QtQuYH3Zm88fd1fypY3TF",
  "key16": "2fnEti73EtoCxLTatsdey8oaLDhKWTPjKqffRaMTsVRpSAap4iWCLZU4WYfrd22HtBmd1DE1SyDWa7Cuoo46fbKe",
  "key17": "ujkXZQHYeKLsrtyckyNp4W7dyozPkoGpGVsRB4DnmsEvemZagL68jiXWPLJ6thHC8poTRMBUrZFdmFxM3GfPUxT",
  "key18": "3wNpq1wH2oU9dWxPPKtFCfjVKwbGtLFhSrFkijKm5zFBKrCG1pL6ciM9rbrcgncUdTFVU6NaasakkRPka2JmAnif",
  "key19": "5ADT6BzfswQhbfmnvioCqV3k1otCmCUcs6Dy7fLaERekqC7Xpm2ePY2rhXymEk4wMm5CTw3uJspUEp3iziWGsXCe",
  "key20": "5pgSz86Whj4Jjb5J2ScBCnLN67DTFo5J9rDPApRLbqkDkYEDtriaZwwqZjmQaQ2nqyJXRgMMeJQHptXmMZAq51bB",
  "key21": "5diUeSXadD9Ef6ZibjwFyiThKfcGwnBzsokLE1RQ3jyrxhWH81h3aiFFL44qUvcjYq4pKyUV6qqjQKEZMpC1ZotW",
  "key22": "4FEgkxMMAH87LUj8ncUCjjZk9yJuLGup11UoSJWGzxM7a726nipPUBqQRHnwDSyAv5b63SC2iU5S1qsnMzPbX92Q",
  "key23": "27P4C4JDTkCjSiUcsAEbhVtTU22iPgJXjTzBei65s76DkdnoKh1NvFpsqqZKXnUa1LEF69eQNz2Pwd3Epy3rG8MV",
  "key24": "4KEvGSyJcXMkh8ASqxQzSyRBWRhNLZK47yz4knvQBrFoxYfff3AkVSMF1Fw45RqvjSc83JwA73uRU1sG8CnyC5pc"
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
