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
    "HJj47uyCtaLkDbj93aXWkR4KTRGGePypPP6PRmhmJ8uMqUwk6VwpE2G7bpWsXpTmxLTFf8EhzsL1byS6EEAyAAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eTgfvju23SUxx9KG2GKmzqkbfMM6ccNjraPYtRDJBuhSPymHGLekx2EVsXkir74WVnVRSDHsqm92QaVJ1eeCcXw",
  "key1": "3kVanCPomQEx61QVUPztqf87efhdRdH49tC5EF4ck1mdz161QcHk6FB9Q1g6NP7q4XdCDkzT4iZnP8dsYEEmrMXS",
  "key2": "6m6bToLHZXqSkPcUDBG7G7aoYuKmnE14StWeNdUPYD7qin5PwVghmgdTYJ4rZqrgtvyWEp9rDYKr64AhU6zLcKi",
  "key3": "3QMeBi7dC5RixhX5K2WeX3aTp5Bhdry7ejr71XX24Cp2rNbqSeAzCYH95dB36sqwgxgFsrLNkdXx4B4Q4x6AKJ91",
  "key4": "McxGt4KNqZ5D4L2kHXareyTYbonN9WgtFsP8NBj5npYodgz2C32VDccYCoEi1H1ebUxMicrovzzCA9grziHGKVb",
  "key5": "N3hghEdQdUL7xWpeU49wFUHsquq2EMGLUM3cs8SjjLZFVicfAhUUACEz6ph9W8vDdkC5L9tRbGCFnW3mmQBj4f4",
  "key6": "3rr9EqXsb2sZCJfkT5QSHKgq2Y6dkKsUT74k3963bu2CHybHYb9u7NrjMu8oBk4kVUBDoya5rrshNtf3kniESc8Q",
  "key7": "4PZimmKsyJxuNXgyroj6UHkPCmwLUpUrPdBusYLKtKrGiTnAxt3ySGG3tq99mur6McV5JVv5PeLErHxbrXNkXnGB",
  "key8": "3MRwb57j4T9c8MLNCsCn8zEMfA93ZepG11aAzQ8qRiAoiFT1MoH9VaE7riGqFmQKJJZgPxY1wuNbNgwT5mAzAoF2",
  "key9": "2R5cFEk9zFH7FZd6tG6tkrwMhncW6e81pquHjzM3ZfQgFvPPgfWsjGqhriYXyHCnjXjE3eVzMYxU28KLoqpPzWfu",
  "key10": "7QhTsWVCEa96WKhjEvs6eh4Y3WHux2T8GyVNtmZinvLShYkEoxqah35WVRsWFmBngeVJ2it9bnN1DaCks1EsFdv",
  "key11": "3fpRamD824PBvivqN9aszGsRs1jtkUgNxkX89j9brGAmdPD4DRNxCaWZ76VTPB5MmW5YjTpSsibnwZ5JxyEVMmTh",
  "key12": "tQoTSxkmEu3nwAbHAC5NPEA96m92oe1Wxy2yVjEYNiLaMWG9vTN7gpfkHhkpobqBBgffTfR1XuzkMuXqQMRY6rf",
  "key13": "9GJAqz9DFX5X8viCSVaVR3JxDeyXCgGFXLVtMtb3drnGKJpXAuDbZAXjdSXKuiuTBHFC2b5etJA5m429fXYReh1",
  "key14": "3AX5rcjGZyuMx3vLywQKqJSBp3fiJqrXrvYgsGKvRPuVi3g6q28MCCVouEGpDFY44PBt74o138aVtuA4BpMR8dUh",
  "key15": "5N1p9c3g9wdWgy8zUvqpBwNSqVAhL7EF8RXPZQvV6iGcwF4JJXDEPELbpFJg85yMcg7yNksoVgYfmstE8pa6MDSb",
  "key16": "rUKqnEs6eEnEUMSU8cBMofnmuqTLK6DKsG3gJyDjq8H7ZVS4zbZkrSGzBkg8bnJMvGGZg2UAPHgffUXsXiT4tjr",
  "key17": "5BxC3rTQLmiZAqmjkVpFbtJJrPR5ZBHjvkGwjEaHwL1nD1F3LjQtp4oKAhbf1fsfMc5mFXxEKQgsbG7M79YmUS57",
  "key18": "aTtrtEQ27GqwUcbq8XQuCr43hw187pABLnBR5NPWQoc4M4EFuBkHtj1HwJBJNDUDCYSRRTcfX1WyARbmRo8iv4c",
  "key19": "3vpPsgmkDnfowqTudrpkVtKWMJB3iZt4HBZVnMbF95QZ4stwDFhw56DZUryxZ6ZiSPnUP9WRynYXb3XstMH9YiBX",
  "key20": "3ALg5jS2kWW7XkCbFpk34eHHZfciek8XBdSJ8vqSEjU39DsLU3mvTp8ZdWoRNBaQpFMAzJHrcMtip8DryPwvUFC1",
  "key21": "4SBXT6efRVfC2NaJLKdpVViEXRgHa5E4Gi5CsMH4wogL8RnF6e56AskupkRTAmXT5td2h72546XBvWcujcctJErM",
  "key22": "JSaA8boJ3WjpzaoG2KZBHCYoAwTDnz5y2NwJFDs2ewutdjkDUHGkHJn3SdzCZbqPYebwmUn9QMBsVf5NYfbCcRe",
  "key23": "3r2UFW2sFWZ5Y7r8XhBYfJ937jFc16PKp8s2Tsv4udaAJZDXs2dFJGEcprR9y1CWuJaKbELPEX2DxNtyp2arGv5g",
  "key24": "5K1P1N321Ur6gfPQHkcUdjAvHgoasB8SXf1qTV1MfLVUNCgTrD6oWvenc3YQ2hqs6Y1wR1Jbf9uhfv61zZEUFR73",
  "key25": "27q6aKPYmPHCYeKab2ghHEHU6ewtZFx8hRb1b6m9tGf65mHQh8nmiupXbUeZaLe2s7EqT8epA7HkWMLQ2Ne5pByn",
  "key26": "3kMxj5fhRoZK9qULSkHWAVHegDgy4NyyX9gWAa8ERBKpiJ6YcPbQyW88eyx86USZzXMh3uYL3EjPtT5SjNNQbTBA",
  "key27": "3HuCS5AC2QvmXrMgtpztcQwKyuAMPz4snjvtJdQjZXnVaLEgKCHne1NY3fBB2FAHa554TNp1PEk8Xxs4syaTZ64p",
  "key28": "CcnJKJDSeG3bpDWqDVPWqArpURWcNkirWL8h3UJvmHGeAMbtZkXaTmnFj9yiMWbrknENpwajSXSHAWiheezNSVJ",
  "key29": "5GZzh1fTaEG8pMChWbUoufYmpLoAivuZmNFCo3KEUuzTB8RVAKqRKmUCGiyUdgKbL5teQ9WafYsHVc1tcgtBPUVy",
  "key30": "2RdUbT3VCDDBcfGnmmBGeMfecA3CmoUJfsUMtp8yMzNdYwuG1WAKpfNEBhPp6YQBqztTnZkw2SMZDEuqWVswPqEq",
  "key31": "3wbc7CAPnWeTCFKpKxpnrYNMqgLUBfKYjeWU94c38GJEGiryzLde5SB6NomcofmYJ7JLe5K2iQNbsNZUE7H2yiYy",
  "key32": "3VEw6fwKaW9WAgTmr4P2qE1aWFx7BeaHYziVsHVx139ErjQ8TKKmjoMYkXf1WWhqr3yPNk5D7YwoVsh72GQU2p5B",
  "key33": "fLzgXKSS8XAyFEvYsbwNaNRPNHDgihmcb6nApX546h12uWAvFfqvtYQJRwtyuSSJi6wsjWKqF6Y954GNjA8tw7S",
  "key34": "2u638a7j6wrRaKNCX3BHBVW6fKnxqoiktfGmq68tFT5YBMZTQZqRzumWgVrXwfgegB1R3anYsZL2gQvqjn7oAhwf"
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
