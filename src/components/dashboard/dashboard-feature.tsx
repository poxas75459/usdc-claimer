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
    "5RDQAAPGzYLZPmReapyTTMeC9DJ3ki5565hfgh1LyxzZBpXS3KTvMUaa4hVfZSBzb6zR8GQmS6Cwj3hc4QyLEPLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REAs6VPxuCe2HwD3F2yxegiSAUGmVrpvn8bLmus1dLsTkiVYs3ga9wCCRYuNXJcAqc8gJfddn9cnwwj8aFJyFLm",
  "key1": "2JJoqpHVVZ5DfEezV8eX3dryHeRGALaHKJaYnNdE8WUtnSGNsARwHWtiyjhZBufwRYvZ6HhYGQtC29jWw33gN4ru",
  "key2": "3fZMFQgNAEm8xHgEZmstzZGqmXZUpxNkPgdwAprbeuBJbcQCBx5MyNWxie4fCgc9mutGd4U3ZamMZPehGT7VGreH",
  "key3": "4z22kv8JTKRKkiXfGYurdxF6Y2JsJ57AhTU7JjqYyoEX8f2uXVeDEHv465npYBcFmhkmfjANMaQVm7M6JN337YWM",
  "key4": "2J6vMaN6wQUnf8VHnKTEFM1fPnqkqxCTG38ccjKtCw2f1zXttHMwX1Vy9sDdHjHgKZbvnu1tsGdeup248CbgwQwW",
  "key5": "Zg3zZHERZrmanSk18Rx8zPirx4TmGhCi2S6VSR7rW4355HNoqDRFPf1QukurPQxW1aDnrHvwRonK5t8xThnP6tX",
  "key6": "2Z7fQLSuSnNnERYkpqMCMH8vzB7jwi6gN7Gos9JZ3BHLRFMige3n1HeJcaBFJBbtr9y2umu1P5NKcGvNMZqHwGAo",
  "key7": "3ywoaw5nF5JXpMmarBLmPuvkhxHUFvymTLzYF11i5uvpa1iqEsDD694od3g8HnBTcibq6HZa8oh9xHeqohY7DCMu",
  "key8": "5f1iZkLAvCYKisWyYMpwvKZXsipKoFAEZEubmo9ZawhCcdo9AKnEtAP3h35Zx2gXtKEeRebMkj1VD288gNi1gc5v",
  "key9": "56Scwo8kgBRaG5yEw6qbA7U7755CaAEX9yCjMC7kkgmCfJ7McndVP4nRAXni2nLhqDrBXve5gRKYUz77zLUX4uHm",
  "key10": "2sH7VG7exc85tEKFABbWo1iotXTVRxoBjnQZ1wetVSCymaK7JJaAkcC6uie9H16V2wwq39PJan5snSpS2Y1HY9iG",
  "key11": "3A8R3j5hgF8Jhqofy37EaCmbfLRcmYcvMH6VMQ2HCCuK6KDeHpKrqybDNN3dZXgw9nypXuCvbR3oAT9cuQm68orz",
  "key12": "jCRdpKs1P1b8NFQa6wWJdw6mm72xJLCJJsPfhwemUKRv27Dv6AyvmKCE4GAhZKTx3R1QXZjuHQSpmrPERV3nMqC",
  "key13": "4MNiZ4WRDX6J2W4oxJmNd6bkr7zuRdgU2hWPZHRuARXuqJ3LPA85NMNwaCQPFH7Fgyqdzk3WdFPJedf3L7vyqHL3",
  "key14": "V2NM4wkhDncGZn1g2WfJ4FvZhMcwgXEujSWEUTGWhdjo4PdtELUuvoxxbuJSpiykdR2kgRrGLJTjQWoL9a4mn2a",
  "key15": "5RTHH9HCA64JMmikR4J4wQFEHbaG4cPxLjLBgB46LbgGwgjSSvVxr7AxCGAaczLXFY1goB5hwJnzGXPei7CEEgMT",
  "key16": "2aG4kCEo7oY3N4mNC2uNoN7BuoBtN6XZHGVWpAB8T8cWT1Mc82pvooWT8oiAsAW1aY9nP6JBAbGcsz5fGJvdVus5",
  "key17": "24TDKBy5SY2mVWySq4dd32cRW5t7UxYd3zfMghgM2etFaxxua2dBJGC3ZEeJRDPc5Npua7yEU18WJ2g8d3Wi2NsQ",
  "key18": "55YsW6WR3XngWY3HaJ6xmd32uVedereJL6h7C9pVpiosvaGhjdyFCm1z6dw1AFRLcLSyzwLiFTNVZWvSP1jmTy8g",
  "key19": "QQ4Kuknm7YkBybyQrnmeYh6Aex41QcNUpX7fqFfnWiCsQfZeS1q6dgvZvyxpwd46veaY7kbA1McmS9WEo37ecp8",
  "key20": "35XdmhSk9wMSNvqioETyF5Eq1nMKNkeefAzLqfaVHozk44H2N88gvMXSkqq2Ew36ZEi74FdZocjNgjVv9853cLKG",
  "key21": "24KmPbMPBGs1gy2C9SZwrsUT7uoMAGX66BDDCz9xL5ui5oj21ujmgzfNPdnn2u4eD98Ru1fEFDDm3n9MpCADkoZ1",
  "key22": "vDNm6Kfu4tMhgeUEL5JebzZKMBAHsjKvmGhQnCYw7t5LgEWcNaA7TkBuSwQX82Z9EakRBnswkNvhAi3zoEGMnyL",
  "key23": "3X8gH62soksFJS4Vx5EsXAx7sREMDCyp6TWn1QiiNW5uFAukoGNax7Vco8KN9PhPobrkfyGoKSnKqLnq7A4eqgSy",
  "key24": "SqbG2Ho1ovVQbXtkpaTNphR8exKZ88dozuVo22ZsaCF3823mTt6q8K6S5a5527d14uyYFv5Sg9qpnvVyQg4eoJJ",
  "key25": "43Efas9hcVKR7uvQCxVLTiMrEn3VdrEe1L7TDBepbamRgTpaBN147iTvQTfwyfmmn97BqVrtEux5w3fpXZZJ2y2v",
  "key26": "2ECy4zx9dAA14Pv7jY6UgoSDieMwjhm6fLw9kVMN6DvVxKLBzu98x5nrxzCpmpmZCTVFTwS7xawBNDX74Q2PtG8k",
  "key27": "32NupVuqCXEoe7wTGvd3TDapvPFk6yNriwt2dGHqWqc33Gi6YU2bASb2NjTuSzZxw2RQqod6rwEzJ1vK8LtQikmW",
  "key28": "BEwsjayyGxHx4Cu1DnAxwf7GeJRNPBL7XPA3yxEncDNrBtkaCaoCCkWxeHjCQGosDspgWj5J6z8P3kpgTNCEN8K",
  "key29": "5woHtoQwR9uzAcQRY8GDffM9jXLej8HABPCpc4S4VYpR3KiCyQD4YXFRQi81A3XdWXDcaYp1yCTSbWfZhsM5dSh1",
  "key30": "2tnDwc3AxMy8pGfqrRbgkxeQK9V7nQaTyykzSNvs8HMhzEnQFaMgSrwE7F4gSRSQteSYJJmxt4vAiGCRJ5yngERQ"
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
