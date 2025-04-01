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
    "2CHhnGMvcxNbH7eVKkmFzi5PpP2toKAbzqjGgYAonWt3FpW8YoKJfsZybQC2TTuSSa9vThr2PNFAwtWjk5HMGWp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kC6wmkSEspnkbc9G5EgRbfEcLrKYFoWAD8zuY5r2FmzE9G9ehJ6aVVTFbQMkdhj3QJjftdXth7vwLzwvRca8s4K",
  "key1": "2fUmdxXdSr8kyuz6XRgQ7y1f3Pk5VCytiTgjz8tBqeouJVspP2qWThaxMPWrsjNnVDr93VKBimjaUHd7vGzuUbtL",
  "key2": "25ADPHdEBis6D59ekmbtGGoZc6g1K1iGqR83kEegNCqKkd1MbkyfKc6ZK1GR4wFtJyJvS1YbaLQmyiaPR23q4XTm",
  "key3": "2KCyE692KxQpfJeQnyMkYsRHpZNtHgR1DjQx6fMehLcrPZ6M3Zxvf66YhMZsiJXazLY8dKEYvgbbAyvMLEiANeKh",
  "key4": "4avzY8BZKcJBAkHDKsPqJmq456LRgauBmdndSpoEykq3fZaQp7p6QFthXgPWpZtSRoygxyU22UGj3m5Aus9B37Q",
  "key5": "5eTJikhqGA2fA1BHDhVxrXPuDFZwra8p1YzZK4cm7wiBw1czdATDRFqEEjhekcakLvTXxutvgbsfTgbhjKofP5GC",
  "key6": "5sHeLHVPU5iAgX5wm5mZmeHcxz3mvaSgAgorwAoPGo5krdfrpibPjB6EwTyg1TxfE9t5eggjv4YjdeUANKj6ejGE",
  "key7": "VFpiuuCyEiLQ634PTWDbuXGdZP8Xo3jk9Mu7oNvF5nFV1wWyWN3To8ZRTLEikgiUQM9h6iLse8SrtnCA7Z1AgR5",
  "key8": "3Hv7QTRtu357mg3LSm6Vz9it9vQd266aRwqtpZKCejyJLabuBrJhGrQ95cjgpuc4yh5HCj9JkkhXhQ1DbMFxh8AG",
  "key9": "4hKeCce9AEK7q7T7z2cW6arf9i3hMo4oa4v1HrMYnDXU6BkrXtdAHamRoQxwFkGTrycVN72sc4Y3GurbmTabvxsw",
  "key10": "44X7nd3RT8vSGkjUuiY39N7b9zFaWVpH6mogsJb3jSGQicqLH1TwhNzDpNxcWyPeEYJC46Hr9d42PNvie9k7ofWd",
  "key11": "5UZomJoqoqnFipgaHosGV4DBBGmzjQzQrkioZoRuGGeEHVVpuP4YRyLB3qhoMq9CV8pa5cQiVG3yrDwCmiAMcZY5",
  "key12": "3NS3KU8XTGKBr9kuDc1ZBXp8MCKtFAVd98r2BsKPz6e6iYcioU7diyg7cYnqbXW7178JViE1AxwEVQ8n5MJvB7Ng",
  "key13": "37T5UbdMT7s2AiZtYuoRwxKHhqWiHXaH2rfxFRC9zKUA5C835SX1L6bgTJ4UYQbgQWfboyjMEyzGGuLnhfsPvtQm",
  "key14": "25Goy2xZb5EZkTLpWUq4qPCntWdHQMkn5DnyrM7KSwM3VQg2QynLMMuGsXmnNMtvwyoAUnDDu9ZH3GgdB7dsMxu8",
  "key15": "3NTofmmAQqF9ZT7EYSwmyh3d1HYtXd426FGSLnKb6NJFUqU8z3wt7ZYEWGfqGesGWWmuyEr9GqyktPMiLssGx9RW",
  "key16": "4c7V7GHWmmDJDi789CWseDG8UiEsn6gmgq2EPjn6eyxyAkCUZPAcEXBbtin43yU8g3jqFTfBbbTW2rJLsuovhzoE",
  "key17": "463ccrbnDXTjwb2PuBH8YnEG2MJHCfMYr9TAx8ohNZeDXJBwe2g2puQshU3RV6fo4BSndQYGtULwvcE611utSM2i",
  "key18": "2KEMjEwhYXwRUxvSYvTNe7W56fFRDvbydQPtFivzYeaUa4H44iFyrBxFTfonDTviHh2PVKHYjvzD7KayvksdtnSb",
  "key19": "3ajY1saRTcqHfNdzZ7UHp1c9i4Aeh5qnq1p4fHFxW4vTwfaJZMPM7w5coHaSCmyfh8juaSFAJJefa72g77jxFN21",
  "key20": "328RydfrUUPoFVt43XQriaNMtDNcUKSEgagQ8uJMqF79AbJjwsu96Sjyk2pu9CvfuJ6SBMDCtn8bEDyXyRbYsxhh",
  "key21": "4kiL1SZzfphVzKG8fZhacNxxYw9nVvTd1CY6DpFiSpV2TcxHoKew1HTjqWdoQEMuwaHgdqSFPixuae3ioGnH361G",
  "key22": "32ENdQrx5JzF9WNzzdRsVPBP2QLPXA8en5ioQCNgxhhZa2SkoQmyrWjPTBSQzcSbmEJC8GyJz9t6MXW16GGEeTrg",
  "key23": "4gCWo63oqP9CpCNu5m1w5ikL7CQQSkjx3UqeiooRgv3LqBDMbUiGAuZ7JXgZRTnes4A2RLun29AFM6tmw9Uwo1jM",
  "key24": "qukLBbyqzXbs1vL61t7BnkZAoh5pmPQJRd5P8GedkE2iQQaeFvav3zeEBaybckg3QmcaG9kWcmyjEkTbBrXLC5T",
  "key25": "rKVYNH5ESb5VEAzS1nzeoMHTvF98s53j6WAP3ccw3ZjtCSFUpboScTNm5NJJHL1U1oHaEWDmYnN42d6vCTrK4Za",
  "key26": "Cntyb1dctEtCtcUE6tZP8Q7z7UNYeQ5FnUvnda8kv8adyV8RnGKBpUu2pkg9ADs6ZTJ36QeNx6ZnHmMq2MgdTuC",
  "key27": "2Z6EV8Jy1reJt7cGHWxnNxSA1XBtSjjUHtkgNr1tmA7WNcwem3DA5zhHrSckLZqAyL3LYZQAXSPcy5mbca6VE92Y",
  "key28": "3PJEDpoKYsNmk6LdqLkp2GhxDqRpSQx2LHtYnZTNgcRYzbhQ1Ri8xdDCkKkTuXSkqxgUZa9JYuFreGA7QpKG4psy",
  "key29": "f4KRTk92t3uWMJmDedsdqcU82qoG4eqEx2RBoLdxaR7rV5ff6gxmw9Z3fasFKLGwQKryk9BvkhTS8GWm2ZxGAHw",
  "key30": "2Tx2uTcvJBycMnqVY7mwuLmE2f3oEchPamuSSWr5PkLppPYbdJK1WktsC8WCvAMnUgLzZXmLxsBMvS1aQjEgmpej",
  "key31": "4RyRvfMySNGcYqGa2cEss1TJrKrm8hE2isqAwHZPd7TFJr3kdSe2yoJfTh22yudviD8TeSAsCtQYVadZyHaqwjmG",
  "key32": "4yAJdrC9RGXLVUUohEJNt7mVFvFoaDsvPnFER15eZjXVRVFKmKmY8P6yCq3Tp2XLmJEdALTAoa3yzvGxHRBrEPrm",
  "key33": "4TGGFwRMNt2B4HW7bpwrMYhLSUFkxe9RX3ohVXt3Pd9y3xomT4VUWRcRPd4kSdzA2RR1oGkNtpthwdp2wQwLQNoh",
  "key34": "2NwLXP4MQsaHTp1fjWx5G7KeN7EjJcFYvhztc93k8KVsEUPb7M7BXKrh8W6ugo2pNJGdLDYLJvA8YtqBg1ZLSxup",
  "key35": "2zxn8F9JhJeoY7QrLr3mJycxGU1Yc5kYVMvKaAcszokcmD1zc76Mor8Lahy5N6ywkRauj9crPcdXU3trRdW3afNF",
  "key36": "3ZMshYRkFvbvDJYo2QCmQKZwohGDXYdKu5H6kMeEG76BW9tc5wtXKYMRUibQmcaGkZhaRTTpCuiphq2ehm3vsUsv",
  "key37": "3yfCEw5ECJdA7G9fb41eUu8tTzW6s1v5xMDptJe8CbVefBoT93Z36V11XDzdLL3FtKQRB2xksGSsXfXWkjC7NTPQ",
  "key38": "CsdbtoAMqGQ3RtZ8VfYSeC4W6P2U9t7uE9wWJwra7zxQ2Vk6wgPSC3nj69AVYYZq2Tj1eteAWkvjBZhcMMmnF9T",
  "key39": "4j7ZtZ264oUQNHaTw5UVP5Bvtmdwsc8v4KjW5PF7ciBg3Yu2qaQhevfdDeJXJLKCtse3zV1LYTL5ZyEyG1DAFgm6",
  "key40": "4NrMTfSP1cAF3aB8NVjti4MhB5NK9Yq9HMtzAgHLPDU17kXQjTPY2y2vdFBVZSFF4W5JP7yVTaDuZLMbF8rk1MtY",
  "key41": "4HEVSnH5St9z6ADcxHAzR8m9Ptv41pe5xAg8QS5NT51qaByhrR1ZkrHYVbNVzPNHX6pG5ZPbiCa6fnzX9mjKBFvg",
  "key42": "64Pwjc6KHsiPiyuv3CZ53bo6cwwoU4TLwpRQ1e7FdjWrGPyF6Lhswfq4hMmzfQUGoMi1PvnjezAWjnVLQ2YKhWjZ",
  "key43": "2foedLgm2esStA9ApJEcAHcrRBPDg4JYaQArqhDqu1cXxk9f4Zr4cqSqydRH1Qffpcd2FrxByTwwMHqrZtEJpFst",
  "key44": "5FjbtTwj4RvAzmEuH5zw1vxESmFrDBeyBYYdRHkSh75TcbFgY11Ywquf2WK5CBtxcrdZ2boaY8GGDJkEg72osBiu",
  "key45": "4yf8dKpXvuxzHRDD2ZxhvMvYrT9FYqQKNMJhGxvmkfKj4UvPwRWNmg2mE24zCzan8qA5udKfpTv9KSd26sSPpPS5",
  "key46": "3k2HoeH7ZdF5T3FtJAySkzZcgvp1GMczKiTmcRZ9ykvPcdS8xjoSq7MzCCSf4mQwbeEgbujj4vnW718mH5FGNpqd",
  "key47": "3sG3vkzd1EcaK65p6erRNbwEEuHhVjZy6MBHggA7fyhbvy8bYTKHQAvsqonEgtD7RwGTCJ9BNCZBw5FjNk1UaK4f"
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
