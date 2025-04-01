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
    "64fzoxh3bRa4byvy2mJmxENXSig1S1wUKPBpCPTyzyGxNpm7Tt3bTrKsNLrQvwzRoFk6ZpppgcBBLJ15JbECanEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVbYF9p244VkkXpicc1SHmST8buULoy4C7Q7Te4TMRdNwCRDXT5iFyzsWmeKw2tRBcoUo41Rh27KUTuKTsNjwmf",
  "key1": "4eZBGU2dkfGDzBYFgFDwQzwJk82CD61szgMU6cHikBTXujKbj5d9Ki5zosWM9QWDphz1G7WDiJTzzhLFrjtRNEQC",
  "key2": "Jxjg5pP14XitZv5jpd9W57wPEwTw3vWUVA3xW4tDmRqtxEwuWsipveGqA3PmnqczWytiTxRybcjRMaHqf59rqjM",
  "key3": "5oiEX5Xbv92ix7kxJR31SsrjcfvjpuUcRGHZd25RPzjmQ5ULaZruh1mN9murDwFKMSqEsTkm82sv7XRMDRWy2kk2",
  "key4": "4BZt59sdWCU44jPmt2f86SnfJDWw8fd2xRo72M7KZXes925st3WjNihL9HkpHM9ygY2qCoVvHPtNHtjroTii6w9v",
  "key5": "2oBJ2yyvMLkj1gzZ9vTKsT9Xm6K1Ag2W49SmsLJLy4Ns34Gwos8JVJw8xJrzn4MfMdYbAQaYzdqvcgk4pGwHKgt1",
  "key6": "2bddAbu6P6XXs6v8hYXCKmYQJHDnGsDe9io9dbxAosBpi6Hzyu5P2ZJSbWP71wfWs3zag2UcWapt5FLFWALKAKET",
  "key7": "3k9HDobLBsuUuWuzJmNVbxiCK5ETS4i5V2Ku53cPqSWmWXbeDf1QzNpWAscktiWZ6Pa2EWnqNCRcnnSSfpPsaCqe",
  "key8": "61SmgscfySxhUAn96MyCzoQqx6uJiYjNyc6qfnE99DJ7CeXBAt3zTnMvYASsFzBPNkdjYKuPMhz6TBUMyRNbBL2e",
  "key9": "5QUZ3TjwzTVuZmb1qqhw3cnWxkymHB7EAqXZr6KK1kyLymUbqMWLda4VENkCCgT9CzvHAKLM4EFFi7uYYJkerauo",
  "key10": "4xKoayQXK5dj5u39UhtRFWw13N8N3nZFJCHTZTDLX47hUDEFfe2tfe19oQjCjuxXegZxsxCBwffxd2muXse4dGt8",
  "key11": "a9dXk1n3FNfnQ6zBDtngVhqGX7f7Z7QWjRsY6fnCY1yziQsavvvsZu1NxbGtDpiPBNhAeti7hhnUD8HuKMYxn3W",
  "key12": "y8eqMTk6ihZWeY2hiHwW4wP9rCDdPxdkWmCDoXnSYJf5rgTFcEdGUQ1oBnhXx8jnseyzHszSktd8ExgVtJdS5QP",
  "key13": "4vaVHxkH2ZuM2axJGEE7FUJA9j79frULAQkXmsTqKEUaZKyBwmagxwk3Eh3paR6yYJZquCXfMQ1VK7nMsTk9ppp",
  "key14": "FHThbpmrfxw84NPQv6VH7HBPjEqxJc964VwtwbTyM3yPvso87hHU1uLr7r2CZfKKqCwSF97cfA5Ai3Jrq93krQ4",
  "key15": "2K7USf5vZBpD71LzZCb6sQTgUx4DPLqsVp3vw9M5RREfkLXTSpe5AjzCUTPb6qVCxewNnUWDoPahpaGatNgCDrng",
  "key16": "5idV4GCZLoZMp13HnnJX1saysBEzRL19eqkWFBBPa4adujBXLJEXiSZv42WZFdVBr144mdPRNZWH5VnXyZ8UAyAR",
  "key17": "5c5YuhhbNtRpThrFXWTArED5KLyUq89a8nJTPhyEcXo6LABH8NVMx9fmJvvov1YiRovN8Un2HZpjjnoMUUYJtn9i",
  "key18": "35gNxBH7dYdDSMTLs3QBtGpFo4njm8f1vPYFqFay2KkVS8mqYmqQFxm5uJg4XGzGkYjoqHSrENHViR3xGECqFX8w",
  "key19": "2HH3FFCowX3kbXuNvpfUjm4416SwTKtyL6hRNJrtvkocp5F46n1eQ8GtW4Bx4Y6pxHZ56qLdVtnXbNeSgVzSftr4",
  "key20": "3VGg67TJjZZXXd6YDCmdAVGg3nc8DwVdhjQpEnH8HHafB5LsRe4t7YPQq6KfeR791gGZLiyHbcxjXvoaekS2TwLT",
  "key21": "32gMwngFAsjFWSehmvHukgKJhQXZ3RYvDNVNY4qxXHqLHxJz4EKLmxSkKVjEo73KYWMttF13RkczrnTxyEuhLkQS",
  "key22": "5FgCADYchus2sjSqkrtcEw7YpqsGDWhrawT7fLhSazcVburrvokGndfvzRFJsFq5MPJPXkUsKKdVJdEeNnfaCx6o",
  "key23": "JRy8vYpiZYP7Wq1QoENmAW4utNndqkjR7gwFQ4vJ1YJr5Awt6aNHt6CE7KK2Zq5sbRoseNQVLZoUHQikRqN75Fs",
  "key24": "2kvsUKDA3T1UjZkKxdzzzwWujUrQnpyW9RMbDk8U1k4HJp8VVaiJVAjhsahZ1pqE2vcJ43DaGb8Xc6DSFRF6aUNk",
  "key25": "5c92KhgLbf7Z41pBEBCKxQXoGyvG6TX9BLooNvDsu78upuxu72fydj8NeUJzgbX1pJbhjtJ1ZwsmXVXy2no5a5jz",
  "key26": "Zyh5DuBGEyQi413WGba8Pi4mnnBYRBBkqnpcgChWBjK63cB4ESFobJjSMfYVMTboE8B3dvAhtWTcfivh4YYK7UV",
  "key27": "WRLLw1gaQ39m1p8PJwy1FYgGBCp3aVefyjsLK9MXX4nK4SALdiUydqexxcAvLQc9w5iB3PqmH5Fk1xZELrBniLy",
  "key28": "22pPnEi884ZaWEW6QqCkpG4LkmEbjXzHhihe5XW9aT2gCdznxNg6MKXHa9Cpe7EdkWKzPq7ktARqVSgUSVyNWRRw",
  "key29": "5FniZ5TX49j3wJzbAVDYZG7cCQQgUGTN2NxfgFYkPKfY3sceJxTYhiRTFw7nzNxnseZ5k6vF2KRa1FWL923PKJTg",
  "key30": "5YajxuKgRwLgPby1MNraUT7Uhgfz8WTo284QLjLF7hg7WiCdFbT1vPneqA1Q4KBRmgqktpAqhyf4uu31FTwW698L",
  "key31": "2WfRqXwzZ3RbFiQZ7X3dgnFtzhsuUBr7JP5EzTKph3gTLmYdAWhowLr2vfPS99taMUyDmzh9AeU24fBw2pmy9r7E",
  "key32": "3mvUGicxCkdCJRvpiUzpoz3ryzCnwYJH15RykS5P7vHBqsCqijY8RjGSk8pU85fRQy8AfLfu8WkNvkS31qJWt4y5",
  "key33": "3WufGs3ZSiNCA18cgN6mAF25vF2KkuBbxDNphK55C2432rXC6eKWHDG1cuQHat3gMLVgTGbQNp1ozN956BpWtKr6"
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
