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
    "5oZuzbkFsjAncPFjxi9vztg981ygE6piAcgCD9QMyRpMT6qVdneWWRN2aNh6HSZmwuAHyf18ZkVGmUunSdEo4mHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJfGugAdYadZW7Yo8ocQ7t7D6ipBLyyC5RTJodGx4Rk1N6vDSrGoxq6ia5VCjVLabjPjgizkwBjNaVVmvYMw9LP",
  "key1": "4kpx32o7wjjCNUZfDREixAi6kR7bdT5xac8gHyj8z4kgzoE2K1JczRnq138NbCQjnV65tbebvWwXbw6245QerJPY",
  "key2": "5fJJoi5SBZGjC81n1G52jshxtHRAr5Qurx62H5XtEA6Y9VwhoZUWNs2KPKuCWNcNvd7fNriytzYJ38ZhmP1nakWD",
  "key3": "2GMvxbbbJykBFnxQhXHuRj5kGprZhNzga3fcJq45xzRbjDXCBwPxoVrtQbV2CJ6TVFKLS1wPb5nJ71HVsYzys5gU",
  "key4": "CnumNK38fERzLE1vwD7CTNKFhCfXGxQJBNL5gm95GkXg4r63yktQnNv86c2pavuGiRHYLmdbqgUGobzQi11idjB",
  "key5": "nAZWT2gN5db9a1TQPc1VssPGFyJQJtadZp7hVnuzrrPZa8NiF8PVmKv5MzRpL6RBa14RC3Y6C9LdNLGZoPcfKsA",
  "key6": "URwLg4j8SPCsujWiH3BhQ32yJw3kEQSjF2PfAo5jrujLoyji7t7FN4m2uQr1ufzT9mJYckKvK3VSZx3TLGBNiw7",
  "key7": "4a7rAHk7hJZ5ESimAR2f9BbAzByAg6oQecP91y85DKBsV52J7C6zvG5nfvQHV3nnckteC514B38gwEKVNHyFSJiJ",
  "key8": "c6gQptrGJfQrbK47qbiKn7JGN1jpmwNqN7qP89zqkRfsRfEWbY8JdFbTtRiQ9vBDb47bX7RHWrgkJ63MwNn9yk8",
  "key9": "5s5P3THc6AUtW6AB6G6i2i8mbTMrTmF5cftvnMmmbQ9VnMCjyaX7HeKZ8Y8cGbnqeH2nYSntLXPKiiRHtfSaPeiQ",
  "key10": "4Q3dUknC8uEFcMZQjHQn7SUNRSE91kXXafZT861C4CWHBbpXEmSVCvoF6JbkRH1h2pfypcE5PojuwpZ5opgH7eQk",
  "key11": "sPpbqJdh7FMSkBhDCugkcqc2DPBnYYNt4spLwzo7wmYn4u99RUjsNGuSQpSdUURD7HFWGtESkbfQzWpDHWdHRRn",
  "key12": "3REnVTkC1tdrkM6ttqcmoDAatrJgjYmmbGExQgQewTXmjkeLyZ93xEQ7y8zqy1UD5zKVCaZAJCkCn7qZrBuVcMBs",
  "key13": "4EaizzCJkcYr7uHwbanpi4GkRqjPN4CBAT3d8Wgtwr3R8eGUJ2Kx3ktmtpkpeH5PcXkvnmwB9DPt4BPMXg7zM8Ws",
  "key14": "5VMqF3oyYnFarwGRiPaRsskXstxXSGpArXjNhzk49Pq48fLFYzCVDXBykLre5JXwF8txb12CWjKESqD7k1XZtqRt",
  "key15": "4HfxDdaisj71hTqXCYRuh4M1iKr3VeDTDFs9BwRLuUVCVhk8weB2qrVXsMgNpdKqqyz5vPzc3QFtPpiip7ztP9ix",
  "key16": "3yZdFXR7FDXkHcCjpM9MS8A4xz4tvc2TTo6ajt5deiP85gb9cmQg4hZjjKFj3JQ8un1UXfFJDgv222paL5qNPNAX",
  "key17": "kasVns2jZwjvnY7cKqpkSVQG2ph7hpoCT7WusMP42E5VSggg2KnKSLfgBGgqiwX7rzEGRbHds5Ncm7cz2qH9ZEE",
  "key18": "3mEUJTxn6X2ukALDwHTR7pHAUZy8FK2W4tECF4fDgHgYdmR4qap5ebosDn3t4kxRxfqRfvdTM1JvbfcM14qkAZKa",
  "key19": "fxNHoXGFP26W3aKgaDr7ZAqtFN1nETdkWNTeoc3QsBK9Mrni52q1rRM6z3vfq3qw26eimkUMY6DBGKQASs8KB8n",
  "key20": "5o5Uc3SYEFccfdKu5im41kAak3rfJpmPKQnRM6A2j1nBAso9pFJPt7A17rCxue2bW1zNCZuskP8wUrMEG67KDRk2",
  "key21": "5DsADs9YyPvEvF4EpeHkHmBnhf23X3iay35QB9BhPBnLFKA29RSJSTKgWTZsGTJgvXEnnmS9wN3seH8P5FY4Whcp",
  "key22": "4YrPYbjD7FxHdrkjhV8WHonQWDtTgTmnQvG6wSTadAut8uxXvpir1hQyY4aTH5MHaTDdnhEhGdgxDvPCPmyQSKDb",
  "key23": "UbsvLzZAPRA7SEQQ6Ui1QbnCphmJagXryBSyyAZNaRSNWoNXwmMDhPGLKYR36RP5wxfvWGRD8jmmxQfp4aeVzqN",
  "key24": "2xbAzYv1Z829CLJV6RXcBVFHM8XqboLDQCE8wiveoFUby8qycxUiiCXzJ3BdaLwz7ggBNaPxbCZ6B6MQLvQUeFWg",
  "key25": "2SXJciy9UdxyrrCrqrLAakvWTNUG6NHTCrk4Do5quBk9qoqmySZeYyA4G1hsuZLaHEpeg7X6GZPezpArjQVMMP4M",
  "key26": "3VZ6CrP3yjK7xTGBDX2pqAxHX57NohYaL37GBgFCvKLQwkQur1gjAJa3SeCxNQzNMAf52tSszP3nBvjzxXkKcVEL",
  "key27": "281BoTAf6HzcfEmuWUWk2graAzTo1ELWLKty31FwGWqzyoJSZUE6WvGyPB7VXRkY8Pwf8tNBLQqDHL29LC5PPXRo",
  "key28": "1xMWH9nxNxgM9s6rjQNsMJ4gTyMd8mdqYebrQ2eD4zHHFgiPTSXFwwE65cShorqGMXjpTCb3z4yUFkgb1eFiJd",
  "key29": "qb5WdwipziVcv981nmFRjjV2XKBd8t2jSJrpRb2P56WrFDUTegMcR5qjZRBTpVjz5qoPvR1aj8GH8DEPqxB6rEQ",
  "key30": "4GxpepWdWgfe6CvfLUUjjKqMfjVRS8ty8mm5tAsPBj2VzyiA5zVUgUh6iPGwctXGG9eyERwB1xMnVqznZqg4qjFG",
  "key31": "4UazSiv7U7h9QB1YFJfwTF6VXnRyFt6VPPEvsnzJ3ZHdpTQqZtjncjkmSfpqT8sTdfJYu6CPo5yhvJWA1P2NtjfT",
  "key32": "2HWnUELAMvDqzJFTUyvuBFfBCk2tF8wwkapmYRXf8jquXt5KiNk7CDnwTQ8r9gZWqjSHopZMjZ4HJmzdjp8Mzz1A"
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
