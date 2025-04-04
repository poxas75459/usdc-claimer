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
    "2b8UpBYLLbvYPVctjDrne6DpeZtBqVxaUoWsDcvX6dkXz6xY6hjUFhp4LHAMPPkkWH65oyvgSktZvPtognKM6ELr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCUwaRW37SNZdrV4NVQ7EQwu3GJvbjGTNkHVQ1urUN3SHphrrRLBN6WRg4X2yP1D94GVmPCiT4cpTvxQayJZENB",
  "key1": "51esr44QPTE2f7GqWGj19ywekCmDLQYRxdmh3YUKoU3GsDXLNHrC5PETbhvzwHY5tjc3knrPrSQG1rWqt9HJxjkw",
  "key2": "xDYkVpTFQ821HPvHeqwJXVXuKmC4jGE1v16EyveSBiGFtvQ9SVHPd5GboJAkUUNVatPezdB4Enr4kehDY6wnuqc",
  "key3": "D7DkqJmp1Gp54cdP7etoqoR7wvPgx7v344w9E8TsqxQLYJjjuyTjNt9zR9W823rAnormc8X6kci24GrCvgHin4t",
  "key4": "3HhmHu1T5uNXKWnaiPaofDxP44E1WXjN7a2naQSmw1tKLcyXDpg2AAYYfaZFVUcSbLkM4DNDbvjpQnNxUX2ux5Bc",
  "key5": "ugoWEYfAVN4hLNWXimoiT2aUEtbXwUDs9meVM2ShqzBbyoPrg2sjfp34yf2o1ymxpExFvFGKmVcAWH74Wwr8u6J",
  "key6": "64Je8iaw4WenKtFFXci9bE7L7hT3ZAyphqXLVQUR7mHDLNaUqkzw8ofRSh9zSL1jtLZYymrXxFzSbVAwPPDe75FD",
  "key7": "3YyHEDCMoHjA6e5JVe45ERPixkKq76DwQSdEMa8sa84apZd2uhWihvjDE6xeetFdixqjSrx1YBhagMT6VqaZTcAU",
  "key8": "3Z4BqGX5Zzr5EcAQUj5d8bYJovNPjKxbPFfp2p4RNaNa2rS4cUMXxM2iaQXYHC9qZ1ameVFKvxveM2nx6QdMtvF2",
  "key9": "2AqX1UvaB2KbUdYMtpdXpPLtgVFbuaFiWpZGjLXzK9JyRV6AhZNvnGCwq1B48Y3mLWLWseBuuKq4nmndCEYGa6z4",
  "key10": "PrqK4dx2DcV1UYJUippdF1j7MuF6i5JbfZsGF3u2iYFXYUmyCbBDmCHiGUdbv66baSLKrcp57NY3eGsrnAg6SUC",
  "key11": "1ukWWQHnhoJSw6A2H5FKZ3BeFvpesXrSBhik3ydQrkfSLSSL5NGDJy5jPdnerLXmJjjRknswjGKjgkQTvJP3LBi",
  "key12": "58DAdLuNRUBFK2zPqgMbJU1753SdohE22GNouTbDGJThh4xGg9gPj2P8RTSzDhytd6D6qp47stH6vqDWYDZqRHyF",
  "key13": "5v3DTSfX9ptnzE32QNzuJcp2GiLKupnJsRWt4YRzAXyJVL9E7S86SJRsQnBQgkdUrcsEiu6oV6hVZnsGewtEjRqV",
  "key14": "2Jf8CPPFccW72q3nRD2YDTK8WhLwqzQYkjx4VsPQb6RxY4GJ9Pbqi5PP5KiAjGPVn7WoxPM6Q2qeWD6XVeMTfQTX",
  "key15": "557B3R5RqM7ZoP6MNSKUWxL4WVBgK8s2CnUMxEVdj5XqYmHiNo8uy82S3Zo8KsGRKBRqPPuiz2WfmWGLCew9LQU3",
  "key16": "5vXhtXfni3uQ1DWBT6j7rohd2VamC61cHEtXzhtBwkgsBdU7wM5tWPKwVVrh63v2xvFHJyt8ra8VxdzRMd7Yr8LY",
  "key17": "2MbsJodE1qnnRcEacrufUd2hd7wdPhFpQVM7bLdejSWupyApHmyE3Ld8JqgPsF1ULXEsNE1LM9fydySSJ6MQ2Yzp",
  "key18": "62rPYnXfhMKbYjcN8NtxpdX6jWgVE7sCeVTQKYKiDtsM6cXUMWMYWVH2Y9oQU1o4cjWZMEXieawzYJbknTcvU6kj",
  "key19": "57PmhzgzNbpkECuLuq8gy6iSYhRtSEABkR5R14qqjhjP2Ug1VeSFqWvRKDJ3yfHCvpttYhhHYj7hmtGpUbLAcYCZ",
  "key20": "3o2HaY916RcshGZaC7FQfbFPiZ4B3t72hsZsSdkmtfLfYuViQqJ2Ei5dcP7LDsAcAAoTzE5cvSg2HXWX2mSr1K3C",
  "key21": "4Cuue8ZgeFauzos2f4Ksk3L3WQPZMjDqqyVGAGYxpqYJQLH8s1kWtrRrZ21B457RmWXETMxZSj92L1YLkd9FWVey",
  "key22": "65FHnMrN9dTJXD5BoHw8Qf5uwBx88cPgxori9iFQr5WNYX6Eaq1qXo8QLBYfexqejG1E7uDEvrceJtv91puCarA3",
  "key23": "4RY91g8TEq2w8NFWx1VNighB3EEzb3SRp8YYBVwp9xsgKkLdajWcPduYXNhVH2fTxRv9LQJZqJTovomZs3kQSm7E",
  "key24": "63vMfyT4DuHWiPhbdPJcPNUuBAPYSQ2WFT2Wx62RE3Cwyv6APeUjJpXgtDFSptL2o2r9PwtrgBRQ6hrjYbBuT4Cx",
  "key25": "ZbmzRTDosmxyxi5jYc2AQzMWDQaQLo1SxhgV4j7Kzww3K2vHDxj4x6pHiAf1XgHK8MWgQbwr2sYGgcEcHEBJdTr",
  "key26": "67Aw97SSuRbzFVK9pRDp4Tvgz53KzJ2gjVFE1v3TokTxYQfpj9HAgaSFKpawVwa3xcgkP56z2rCnD4nmYi3wxTwT"
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
