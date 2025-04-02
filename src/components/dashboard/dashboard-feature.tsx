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
    "5X2PM35ahkjgVNiyXrr1ACkgtwUTcC7WqmjZ3J9kRPgSxvfp7oRF2PHJyNqGMhVz5oVQi1jHspzg6AeeNgLHVuLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqQjmJJqSERMXHTWBBz8QoZoH9CHHN3m1yvszSHV2ifmwYQuaAEzqmNq4TRGhroYWv1C5wN4p5Gd7KA242cGneb",
  "key1": "3oAfub8A2ygvtRoSBJTB9dTKwNEVxq6RBPcAg4bQV1KqCZgMwq9T9MWCNhPLwq8dfmQUp74tqRJNDfEdPuvKHwrU",
  "key2": "s644uPCsX53yEhXrUqZGupQ8vLjgNeeukbBcCMDuopk4H1ghXLm5FaTPH95PAkbQ7zYv6cAsc8KW4bJN6BhXXsS",
  "key3": "5yz653LtNi3ckuquPpudMD6t38WT2S1W11D5nuGXTdPvqvq2EVXTvhSemYu11sWC9fkgh2n1y6VjwE3QNm7uxJ83",
  "key4": "N7ndmkV1LtdqQfQgoKPd5hBiFSzy3jVbzyPdUFhmv72RU5YFP3fQ3rVERvceXf8g5WnqtNAufskNr1n8t2ANGc4",
  "key5": "2VEW7oUrtqENMBAYDEpHvYwSrhxQ6RmKq1wTAkzgXQwA6vRrKzd8QBzWpfvE2ifbUQnTs1pmcWg9NAxu9EwbwRhc",
  "key6": "4KPrZVbW7EPPKQWY3879wJgUUeAQTEeQ3v5wwvzfQdY2ocUgoxuURfQSsH53QnyGTEymbXqSMYifHUgwe4dwz6e9",
  "key7": "3Amqps9X6kvFzaX7pMXtiMi1hQVq17KjsAMWm2ZWqhwwk8LzAfPtKN9rP8GyffxPLdpJ7cNB3MSmjGV9m31adtQj",
  "key8": "KDE234obME1d9nTuo4Lv2umGsu4zvYxWgxGkvDScS79fPt5WnYHnwmC3CcxXgisf6mhQomAGfoqV6vP8ncaRwp7",
  "key9": "jRFenqGHvLPb8TmcL1SgAcU2wMEAxtF7cizd5YFx6cPQ5KtAVaNNGqhKCksfSLtdJFzyUAv9sak5gnf1gbFiNJo",
  "key10": "2GkmpLizXdWsCW5SQ4zaDY6n6jfjRWYaHpoodgHFSbLk6duvcJVJ38bKGBg6cHbSmMCD7Kx6S9PCQKzsaVWvHHoG",
  "key11": "4rM7KzBbLz8WpMFYxmhgHxPn3eFyRCvtYB2S3sjoBfmWAbjgKbzus65c1NqpJfR1A43ca1dUBo565VXf65vkgVek",
  "key12": "kjZckAY8EnFGzfRGMk1Nxhh3tCdcGmRspYT67fJ91Hj8qsi7yuDSWcBPaS38eAMAmmp23xzzX9e3BmETC2Bar1c",
  "key13": "Rgj4wcbd5Q4B3vUgGVeeFKFk2np4QGuZxVS1k2gD8DHoiJLF9ntyui5teZvPCnftxgyQ73Se32SLxxxYwKGDX6W",
  "key14": "22Y5Ppm7K3YfXw7Z4ockadYUscTrgTDLiHi9ecxbULEvvDSdrE7oqyCJyosxPWeRuKHaxhaydYirc988qep8WACu",
  "key15": "27P1PSJo8dL1ZPWUr5TRUoxK7YXg8YZBeE3JKnkzT1oQNt8nrZzAPLF1nLnQtUcQS9BF6D5SsWASwWpArxBQLtu8",
  "key16": "281hBbzjPMZdWxhjBAbmF7XB7LsHuc4LcRtVBZcnrLbNNYMqXwcBA5Po2NnuajSnKsVMRUaQW3bXNQ4Zphbi4AWv",
  "key17": "4DxTtjr9huvySiy5dYo8j3LAsyM29uzaor6V6Lps2Xc32Azs6NkEvmZWvASEwQr4pm8Zu6SUHJwCXUYsqPacR4Mu",
  "key18": "2KZrBDQtWkCf5FseLMojfkegcW4wjGSF77RyKsLgjaUgD8qeRRPZRmHT6HSg7XM8exitWVG8NM9S3P3Fajc5WUeU",
  "key19": "2ufy9Wj8WJgHKb9HHC47bicUY3NBgWqy4KRQwSTyH1HtkUEU6nU3eU3UpZBjbUNTHzJ6Jfc3n7e5XTsDscNSfa57",
  "key20": "nNkjenFQEEB4vEHBreJB7ccRJeRN9Y4qxwALLPPQsgzkUjenw8rESEyD3jxggC1PCQCtfGd3aADWSrz8Md5s8ru",
  "key21": "2bH6NK1H5sxK2toHfLm6w1kPMotp9ggxkea1joUZ2LfajXTRcLifmpqJ2N3Bdi8Sacj5m6UVAVcVnfuKry92xntA",
  "key22": "JozqmaZfivpC8iquDkhnKnhwr5F8KUkkA8goKKJURGAQSV8BZUgpmMF6iCqSfNLjM2rkAbGGPj17fzjUPyhGHA7",
  "key23": "NZurGevCYmbYAP5zdkKbgMiBydCzppZyABbu1kLr4sTbZM1NhGRwt8VNPFKzc13ZeQT75r75Wb43JKD2CV56yzn",
  "key24": "5fJ3o2tssg7R9qceWttJUhgwUoLv6QSdTC9NJnzhDThU42zV1RFT6Yq6kkoPsHAJsceENy4qbvRsRbHkqXKTzrCi",
  "key25": "HfheBxkUAhHSJTUN25AHGjfyhVHGjfmWC5Nk2Cd3FwoxLAAEjXNn1e8TU5zEdbpBRLriPpdbNQ88hgD1Qv8g2fe",
  "key26": "2svwCsqzHWEFjH49qGYhdRHcDyJ78tQfjXub3ZjRxqK96BE38UJAukiX8bWwu8DabZkEAYwPxaBWvBF94WmjghDd",
  "key27": "5UHY3EaExnF8YBjz34euELoie7cg6VbyJnQPBZDbgwvwLPQemfQPqKusVEGUaAn72DNyN3BWwJUQN9pbVXaHa1Cu",
  "key28": "4WHv6M8qRwAashyF1G4e3dGNRVFVPRn6H8baYzk5T7Cds332tjX5LEpYYzDxDZp9sJPdqWUuBbnTK28gfGfy6ZW2"
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
