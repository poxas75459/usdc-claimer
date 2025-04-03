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
    "tDMgB9V8bhcFPJ6LZwSefCJzT7HJP8AcXiRoqsP4FAj3ZUMfANyPmR45MVNXYTqRXUx6Cv2hyhxNqhf7CP2R8wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rNr9FYDr6V4QGXeUZz9yzhXnFiF62tJK6nVER6xhH5YYf1ipkFmqzuYPv5mNZZskvjXJh8BN84qfWk98CUyuyS",
  "key1": "kNCPTYbXRDtZyimSgjdP5WF2omBvmio21wpgefXo4r6jiZkebaoNcbh3pyeYJmP9KEgXWatcA9SDyaewu1wZx1E",
  "key2": "54Hb9X52kmYaudutSjhUc9RC2Necz97SqRVwyGEQwgVSgMV2fgn1kvMWWFWLDJee6u7MXE43TV6SKpkoL5PyQP3J",
  "key3": "674vF4XRaMPMArrseAqvBh4drkpzCWnZCH3XKVcYr2Y8Fn6yvKT68tzgGJ8toKndYTQ9ZXDcW9VucLEAhETipto1",
  "key4": "5tZP9RdyTYorxCNe69gAV438XaNwKW8baUTsVz2eJJk516XoYTgJchctkLRNfit5R6oaEXsCaffXfRovdEdftPEg",
  "key5": "5cPZPTiNA2oj2QdYGu826tvPpAJa8aHNr4PQUCcYgQevbmg43d2AARgBvqeicgUU3XxfenbPBbSZWqs6N9A6x9dQ",
  "key6": "24jaXpEgg1oXaXphuH5CU4PFsaX5ehwVKXJh7YxZ1uS3mgkwjhktUGeS3XryPfg2CLxU7HcXvLrNuABLZjFDKGw3",
  "key7": "3WCpZb6bsAuJct5HSWDm4GcAkUPQfo89UJ8XEuanmZEkge8JGMnjrqYQCPNfWCwrWo9g8Y75GR8inp1LTLPimF5F",
  "key8": "2RhyUwcfVcdSDtbNWAcY7ZTEDQcT3yxzTwXixJmJLJevbr2neBpGhg4WpuJKWrxAVnjZSGVVfAK6qjARARTWYEf6",
  "key9": "5fwtsi2Z2cZYpVU8X5Tu8nQ2PcU7NVNjvjhxh8CTpnjKNs3gZ6cNVwM9xCy4xjPKFbke4pYfBHcAHAhVxfEiDK7W",
  "key10": "2VtrMZbTqiqCzaabB7p6jmHosHzPgf7K3tAHw1AvEc871qCjdYbYpoPEPFzgYJELjy1Xcq7XALH6f5Qo5isqhb6k",
  "key11": "4t6TvUP2wYCj9iGDhptamxiaaLjt9LfE2whEb3wSiD99EFyy9bFfTYZB1UwQnoALWvNPXX7Nem85MvnXE99hJVdc",
  "key12": "27uWzyeMCEjYFjyGdhno9aiEjDnkj5Ff2KcEXCM3KMvSpPTC7LLogT5ff1Bt3u8deUbKuyXwec8vAPU8PJERKjFg",
  "key13": "NJhoDYvZ61huxJVSaRrNEnAtYK1kTB4CQXnJxidPDnXLYwu6zRSyfk348BD8V2UQ2vDwm8GhdKHx3Gfyw6Sh2ni",
  "key14": "5wykiMVFtt4qThokbieNrGkVshYLkbh5eWR5W4pENgkKQAtB2VXNq9JCz76oSrvq26DQh4YBCiVA4C9GeBuwC8Tb",
  "key15": "5gvMuVWrythF9yJM8Atsgf5rgyte7BYPeGrpGZSdsGMHvokm9ZMt7jndbC4vaemTNgnSa1DyZYhFWT7pSNAuiM7z",
  "key16": "5aG7hCaikajKhooa7m8amjtZRtAvThA9XJ8C7QeVt8QsZU3KKedARKtD4X2gjKzw9RWHj4SV4EtjM7x5sR28J4pV",
  "key17": "3MryA8Goq3m75mbvUdBmUe1okeVENwBrDpHKWbcCDD2CiumorWC37Pr6A7rCPFWdU7PYhSTtKDDkaEJ1CP2XCmug",
  "key18": "386iBRNhtuQ1nMDXCfXfykyV8eD1H3g5P1dCtiTHJx4eCM9hpHBokEsoTUJr7bxgbtimeND5ZCY5LLLryUzi8qSy",
  "key19": "2KoNxikJf7UH2VUGACTiAmHGxftiQmmnwpuBC8pU5BPZpCkn8dp4m3FvJrcZhs3qamJW8Qjv7pzsKE8VZHt2gUdT",
  "key20": "3GuU86yhm81TChJ17KDyJpTE2gqf8nL3nMudjdL9zHfx2kNhxYhWCX5buUPjLNB1KDFj8tTHsv3RuGpco3Snmaxu",
  "key21": "3hg2Zh2fm9nVJQ8L88cJcDvmjCbc6dthZmY1MUoNdBHcHfRYxe4fnzNkBRrWzEZUCxbX97h9ev9utj3xwAHoMM2A",
  "key22": "4rPBmdHFf6eLjggEoiHuSVyHgd3i4qpDbE1vwVtNUXHNKZvXhgXYPxR4Y8g1EQJxqQxKKCtT1myFZXg5fYVsnKeA",
  "key23": "5ZoSNS3HEVUrSHggcRaDD2hrpBQog1m1XCAkWXghS9y8uhR9gJiSa2bRbzgr7juSdH9kxRhbkBtDpuCBkXbbQTxs",
  "key24": "58ZaKgN3fn6K4aptzdLiX2nhHW3ySw49PTCkd5Qam5xuvPE4vToP68vSzYuGAwR91aB6fifBztkiBpmhhUYj7skJ",
  "key25": "7UBua6tBaASQmWCdAdxhcZZKiYvmGQNPqGrWhtpajpc1fRqska8r2DB2y7btuyqyBPeK3mew5zLsB11EeUSsDng",
  "key26": "21nNFY7NR5UK48frBvDcr5i4CPqCYWreJEpvsdvBQPZGHP9sdwXjhSBvDZx6hcLi9YUNckxgdsZMHFydnSeyb6PY",
  "key27": "5fv27frdtbC8gXJUKy4yqTgYocjKffKVAA2qEzrHEcGEBmQWhLMybbT4AFwWvJd8UVFJZaXuyZLGGTDbhNzEDPQ2",
  "key28": "5auMM88hgYCQe8gAgKqDehsgMVXWveUeWusKLAMgRaVLtr7YoNDzmdzw53RhKbabtpiUMhXQtZZuktKtztrVHkjo",
  "key29": "4eSo4dU6UsWW8oXo9bEaf6RKGbS9WYwpt1sPFmFxefJ9gwHxG1WxsebdG9G9aqNC8RZRKznVBJFptbKWNVaHkZJ1",
  "key30": "3D8bsWwJ1tZL1TvpRptd8jzPSsawzWVTXmNZWwG8VgqccTXrS8Vgi7MvRTrDvV4GmcJmqWc1pvKVrB7PzRRyB9vt",
  "key31": "3B7wP2sNutvxEj3osADsvrkP6vFR2S5RHMJ6ZFkKay4GwKPKrzbuDGcvbaLuNBwznC5UaL8PYDhQ23JxjQgmaUaF",
  "key32": "5T5ezedcjnzfdi1wybaLTVqVvxAcKsNKWQHaaxW1SJuirunMRZY1GVumLhF5szitFUBRgh3pG9HV9mxTNU44c8Yf",
  "key33": "atukBke6DEkp9ZvMsLvGR4xNEmS7mqvYBQGrVABqhLZRc588d3JWNvoARruP5RPBsWe6Ha4E1UNjq5vZHsVJ5Tv",
  "key34": "4KgQ4k6fVbwHS3DboqZcS8gZoBXuReoVXBJZRdLUtNyURaqkjnKJyB7n3vQBCXq5nL1cejcQd26Nh9aiXJkumD1Z",
  "key35": "55Kvr7HbamqFAWZbVkUyyPcrvN3PnUMeWZ8pf93tHC8nCfA16RYQnUp5utH7iqg2JnUeBqhhnW8osSL7hBj7fCiq",
  "key36": "339wHewquniXsNPpz6XSbkxo6E3R5tSxyjAMDcCPTAncVLvqA3wMVGWcPU7zXHM1c3rj1dFPuCuhPqgPzkkq7nm6",
  "key37": "5X7kFe6MBXdfEew84cDaJibyHCdzpAx7FTZsAMWT336cNe18wE6YpaWqauskTJ5DWpfdZLBGmjHKYirPeNYRpNMD",
  "key38": "5cdGMPtBQd1uLHGPfJivwLtcHEJnMQFd2G2LD3eD17YXMC8iYRoP2HF7a6YxE47x2qRdq5Luf9oubaoW6GXNhvFF",
  "key39": "2c72bVt5TKp2ByzerNRtgti4mM9PsdZrvgueKg8rekoeBJGdHfvEfcCVzwdQAgPX3suJjF5NK1sWqiKSGcXYT2EV",
  "key40": "67T3iMWAHWQXbPofQSGsugwF8LDNTjMvZZwByjon6so8HhA26Mw2iinYKf6wQWMeVaKLKHoPT6kqaWBpEmWqtv6c",
  "key41": "56B2bKdkA46GhUJpyyiwTQWSJCAHAPLykZfPkLRMVFts7GLKVBg5L4UBxnBgvbHGgRdWfxsQNrSkVhSPw7TZBZbv"
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
