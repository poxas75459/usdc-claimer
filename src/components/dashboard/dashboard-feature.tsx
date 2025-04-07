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
    "25hG71PYwNFtog4BC1sNMikWWLXDZtVQVp3FyijgGjTZDAyToswskZzChgMX3mWBUYHhfS4Q76MGuKWFRDUDFWEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVJLpwPZRfafU6kvNtxKE8YtNqG4GbWj3afFsMSXwzsbqSZezSy2fE5pCHUcwhYoMh5h6bp6GKqXEPzoez73yMq",
  "key1": "2iyZfwx2hZfGkWv2tu3mAKK5g39crJuqtdEJhHcorqdPX22QXHy1SsosCoWkgPPNw5f5vs22EXxqExCrnMUnFK6Q",
  "key2": "5jauiueeFi5fTUqMymPp952JecNs6ZUBPPjRKcGpnRrkuLiYeZCLiJkcnWDvb3As41PMyrhuTkoDmeWtXezauCPF",
  "key3": "J6ksvKXVWvcpgWjw3hTktCFBz9FUdHqRkrQkqmtcBTfToMtjgptDDVD3hv9imd6W5pRjSBSRhPHpdRzCpJX4naK",
  "key4": "23atNYgau7vAjt2FTi2Yz2283SZ6DR9YzgpWp7gxGtXEUerK7DQaJvUmgw6HsMQzJej3n5NLVT5qvqadsXxM2cGp",
  "key5": "YeR3VEjZmeB9CTjYkZMLEtHojZ8Dj2DYGPwopDWPVjYWLvRqSHzSqmeAp1PhhQtkjkrXseKmLTuKHKX1PRf8Ttf",
  "key6": "4kHahjExvr1kZhyAmB2eR2DSTzoWi57kTeGSEiSQPaVY5DzgLx1kRTxUDz6C6UH3VJre7TAXGdC8wbv4L8uf2Gqc",
  "key7": "64VJaMy5exAmRBdkimiFunY8dmSghvW2PcrirRzzYXW8btVVGV2hjdzpfxFMfWcL9aSCW6PFya4LbYxf4NeBHuTD",
  "key8": "16UcXNvU7XeRjRxDFQxnyMawMMJEzQ6gRz7ZStrbFPGY5SCfdB9o8VzfoNHFjLYE8R2zDWG2YsdGzAqWq2YdVYS",
  "key9": "5NDSMSKvC7Ri8QpfqbUY56DN55hdfnRsTpuD2ykmeTU2aY7PAAi5pZRcgpHAWYVxgcnUzmgctDyHwocF4YJzCqzd",
  "key10": "5Y4mNFHT78cyE37gFecNAVKWGVdGrDMrLfBMcdd4GbJgMtGPmmkmNAS1JLgDbfFiavW53gKMqm7HHMfWnqLFs9J2",
  "key11": "3PqpSb1zLw2qFKjbkTtRTjz5s3Ud9sfkKgtc3W4cC4sZ7aURTRfBwwjXyE958spP3UiXboXuEe1rPhasQbpKsL7u",
  "key12": "3EPN27niKmbtLbRQiF7bYwxxBmdKYXV1QFaDv5oawECN8ospEkaPHsJrtW7rTmLweZm7f9i5FPAC6McpgiBV5aCk",
  "key13": "41SXnJgjqgU3YJ8RXs37oCJdNtd1V1nLnoiy9EqgHCxxN159xQ9rqJa18GhBGcx3eibNQBB5ucPgzEGaZ6sHKNVF",
  "key14": "4V4JM1cEDDNBNFnE4V8voSujqz1netiK3R5QYcdfPbRj57xX4ZMxnnbA9VCi7yg2E4JqkY42zRjgdoZpNArpTtky",
  "key15": "4ALsp4rfxq7ktUUcn6PkPS2YihnXrYEWhdt2FvDLTkDvgRmXoo1yj18gb6NWY1c4n1gLrxFS4R6R4J3NTwMCRqQM",
  "key16": "2Wx1r3S7zreEJmpwRiBVfKPAGjfeF1NSZFvDtdse8oJyVFZUQ81YhM3FkmncNqLW9FtrNJFrn2HxRgs6NUQctHy5",
  "key17": "337VTRZRfRLLgUasmUbWXkjR5rx5nZZWsJpYP9GYQHFD45DZ2Qqk1ayrS8qr4y4uHchrPCWpTmL6pUCYo4cDhk86",
  "key18": "3UtxbbnTT3qK32fCEsTTgF4KiXSgginTZu3YX52M4peD2r1mFGk6NhG5aHWjL9EdAWFLM2Bbajiav52uUgxcfjv2",
  "key19": "2vgk3t6QoXX8YD9Wy8q2FMAEypJZdL8uNPFp2aqtKudoTtX9nLNQRiyw6ZGqHD4KZnVAF16Akc9nKXBL2a5m1xYA",
  "key20": "2oTu9yCRP1kDe5FhWJ7JvoRszMzQU3X7yL4cftG5iCCpfQiny7GtCXd1P32UjHuwSuz2BCgizyxCMJ7FFBbjRyKK",
  "key21": "yvyTRXdepffAibiDnVuiawGYVxBTGFgVyLSnYyJ2fj1yorwb1uRfANZ4b74MbF4Xvdv7BaNY5ha5Z5v7fuQH6GL",
  "key22": "47Xhewk7w1MwWHhiUi6kWH5KLXgT9s47LgAJqNf648La1eUF1DmQWenjCxeaa2DhLrx5HkyNV8Z6d8eYQD2ivpAr",
  "key23": "4knuYwZZcBiVEdbLyp6EQ9sdYiT4aHkyafMVzyTQ5iTnBttdb9K6gS96hpYVeL9rReMq7CSYmXpjyw7ojdEMBeHP",
  "key24": "r9hEg5s7zoh4GySxzufpecXs3qZSDpc6KxAJynGFWDpGgZwwKF22h6jydVoXDWjNLYvcb7cR3FJXkagaM8pVz6c",
  "key25": "5KYBQytLjBpWeWwkeLqUiN6VoGrBD2Jk2EhcuSAAbS8PWv4xUN2mKxuTKRR6ZC1S7FbgSnKPdCqXTicrCDziHaNX",
  "key26": "2GDhqiiRHY7gRbrwrz23f6bRH7iz4p5n4TA6eiFaiMDzRB6VyuRHNfQFrrno4EE4jYrHGrzHdfEceuRHXe5mADZ",
  "key27": "4MShZgqcWaVUesYEyP19s2kR1rBxRLQtcCmb3PFo6kqfhB25McEbRkCv82DJ6f3pKE4yxacWM81bJkz838c2cQff",
  "key28": "UPkbSsBVedFiwiXNJszTjwhLXUavZNpJtDh9Qa8xmvYQgfzYxdrCAAij69hPfFmNXpWMhJePYmFapS1YR8S4Ap5",
  "key29": "32DiAy8tpfa5Fihc3i8AjRd7k7h6mQrezTXyKnDe88fwFCDLxcqKSUbtFJR8PqKC9M1S73hkRWLQNrSV5ztghJC6",
  "key30": "24KEBaLeQ67nTT5AhpDQRU1Vz5gyCPtSBHYqUvYQg1yTAAVpiT3SJi65NkXaxPmUYaWmPEftsFizdRLdTPQyVNdH"
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
