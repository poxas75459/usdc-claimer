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
    "2Da6ijUFWuQzCB1445cnGi3WoqMCgSo6VJfRPZCqU1ZjdYARstoPb1cVS6KaXEtxi5merLTHz2rDvdep4zba6TaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xXpadfLKLxN8YBMh4TSn6aQHfhG5Hb3RDiLUmyLxjk4yWGHBXTrm3ECfggxm795eAZLdwKTCboRyFUt2PngGDS",
  "key1": "3u3b1v7zHEQxZx14W4eYtDnBHe1WsQJyRWgpz9MLcGc3jx158szYpRXxTPcQjE2yJrq2gacPT69YhU1xcxh1McbH",
  "key2": "31qKoxDH2az8z5a4Kf22EMEEJxeADmYoH8GnwXLiFcjkRbrUhUrRFTpCdRn7KMzRdGkm2syjGRNd3a98jMmihJPe",
  "key3": "DnUzHDsGUT9QG9oRqYFLj4b26Hut1mjt66tf5iZXg6DQC1Yc4hvGEUJjgrwSEg6gK1rwyLcKEzitjRg5SVKdwnb",
  "key4": "555QcgkkRTdnr8gcGRWrLSmrMJbnRk1kFSAnMkGURi3WUd4uzfg8F95MfXZyZ23YRWiwt4yo6i3oPfTnnU5cqXKv",
  "key5": "2mbJiJDNo6x6v2XTWwrbTp3WwwayqFU2igbEjn44iYoSrScjRETpg9itMZZAtVfoNjKVsqzfxhUnFzRFVzFjSw9n",
  "key6": "D33L96RAgPmeZjJXVqBsKiW9mXFJVL9gjeMQ2BwBxNHa4FsBHuxPX1d6Sc5pZEbeD5hVKm3ygVyCPtwZRC96Knb",
  "key7": "3i4GwLL7w9uvfW64H8K2CvNAi8ua33VMLJ3Rr2nNjihk8tie7oDAYfjYHqdyZZaLD2g2bNjh9u2C7WqiDyCjG8Kh",
  "key8": "HBzwv5j5vWN6WA5fBdQbQ6dNiNWsy9HuH6FoKNfQR2kVwMGJTBXbduWZst9p3r92mEdgQEvAzg3bSbgctKnrAow",
  "key9": "4JnZRS3CMRu1CViYWLqB6sJY5Q785VBrEKGc9sasad9JaGauNRJRdSTnZFyUYvXgM85GvrrpJkjpWjpR8Q4xmmK8",
  "key10": "2FXmHDKG3xwN8Rv8CvpTPZyWuPFE4ToY8vScqgtY6PEG7xRs3d2ywphzi4rkkZ4GZxJTNbUgzxrJBCZtnF78CiPx",
  "key11": "37uK5GSPCTvwSeiH4bnicF671JkNjrCTMVDvjBpujXrVTx9XHk84BacPH9wt1sGFntfHaydfcNL97xCiB4ckEArP",
  "key12": "4xgCPJHuwMCJr37nv1fAk7hfRCredUtRoKnLzvzxH5WDkMGhZgeshJFCMzmF7HEpC2iDZGzcTH4ZTA2CXTmRPEcT",
  "key13": "65zMJi6dv4tujhNJkpVxwUiMzgBVEmEWT3W86oEa4Qd33tXErwSaxe8qjFPDncGaS1oReEPkgMuzoVn2aFaxW2dt",
  "key14": "5LMrNyqn464B722vnAVkixJiGg8eGf5oWpKY9Bi8vdd48bVQhjwTd3XNB8cuz6osrujyHWYqQETy6YfjtA6QKQ5E",
  "key15": "2s95AqrywjNzpqmzFTyqGktbUNrRGu7LNz5KEcRNjdmV6tNSc5PHQ9yccEHr3YuKC39jZDcp3ZksKdzSPZjJs6J6",
  "key16": "2A3FHqEemuozAsnRrV61pc9tvXKSEf8DLZLVy47QVPe8ni4tVjayfSSTzTo4fHgyDEREAJ9oJanKDL2Kkv24j8ss",
  "key17": "5ANLdYoRNRWdHvRcf859vFawybiha6zRUfCwG73yGRRiPRp8GjTs3qV3J1a7tEYpEhs2B4izwfazDAmedd6NfQuA",
  "key18": "3sxutnNz7Py3HoLtnku9AaGRpDgEjSKtQtxMbycvdoKGanQYj9bRcQwkqeSGVBv5CpXwJvAUeiFPLiPKiX6vpsVj",
  "key19": "4xXXWHpyLg8EGW49pNJCqVhfUv1SPFamkZqEN8QXKR8z7FJ6wcfQrqjEMFzwsq6BZbcxnr1pQSWp35LX616CcAmL",
  "key20": "4EuYwrscRyGoNnXuK4WxoggHGmFG6kEc1xisihLzgUpxvttbDcsgue9mv4tj4chMffjRnKkaidv1hoBqhWNFFwkc",
  "key21": "4RnsEjKBdTmB3eyNmirkV6uyCyzzBGgSW2Ef9tBQg2aaqhCAyzq3DdP5cym4B99sbETJ8a7uDd9Pu5Hiaj4mRXjs",
  "key22": "2je6RMWqGdzxBtDr5yriu4xEGhmj8URsjvUvHDMP1pBaSyiZWdsXVaJMU4w6w3n7KUAqd6n5qjqYi2e9RpnbqXz",
  "key23": "2XZH1PHDtVYqj2RTZBHsuSosBUU5SAVqjf6eXhvGcrwR6V5skZG8n89c71qZn8hbWwiCoDBzA63kMEhkaULit9QM",
  "key24": "5hswtCnjwsVBFrgmVCP7yB42zwB8dA7C8DtmwGcWdZfGYmhkT3jZEttUZhiKZoMxwrywTqV8nPRyktfdVb4Q4K5s"
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
