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
    "2FaBqDEW9ETtgtcgV3qA7DqunWY3AikC7bUudhZ8FstUuQEqNJqVyjF7zbm9jyKRBUddYxWW1gb9e954i87KN8oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GPh32XnZQS8JpYByvgotG2bTVphh24oaSDVJY8QwKBdhTsSZoYQaQmYi2BCGGdUmd3BZnVSBJEYsVT2WJQw7EhT",
  "key1": "52YwyjMfGZJ5BrgF3nQ5Awi7Yk8adkb1UdSG63nPiXQsqkjdBgRuKh8qtPkXiPQUcfZoeJDrSC6x7Dg8bq6WR74q",
  "key2": "5HnXGnNHCEzwxgRA8hBidBre4xcDjkSGQxJ6J8qp7dsCVFf5S5nnaVW3b41rUHD3bJp541NhwgvGgabUzX6wTvfh",
  "key3": "2wZrTnhNgcwVJcNy1kbrdpU3JgWfesXtnQemA824AeDHdqEvcVyftkBnPgDkhyUyge1m8rQLVU6rKtXYRdc1niBe",
  "key4": "2bpwPKE7MZ8f1gQiiYhc1eaYUknJDfyKAPQM8w9BVfrY9PtCt333Kf3P1UguPk9adVxhPZmmpcqDefinRNtSSPxb",
  "key5": "3JDHRazWzoHZoDH3WwRQUFPKrg2faP8vdFXSihWcEesbBir4d6iSV7bka9H5nZht2q6vETDQzHqxRXvcExKkojgG",
  "key6": "y3iL5dXHBeXf1a4CJsGLLJgdnZjsGDACtbDJ7eh7vqHhUwv4y8oo7MiRU5MNCpMf4oQ9qpfkM7qjs23jXaET3jn",
  "key7": "3mRAxTNVUguf4rMUsgbEn7vyJzRAJXhTZ52WCSG5Cz5LUDuMRHzDvvSDC3jzzoqizhreRFBknRvRX1UjjSbA9Q9J",
  "key8": "42R1ndHySEnyR39cKPMCvN19FEBU15t4qRuFGgjwhDBXZbr7fJk1kF9LoRNZSuXcGWtctZFGyE7WRuvPxPc8Bxa9",
  "key9": "7Cvt1bPxL9vvAo9z6vca8YtPrcDD6N92dsoStJfaLjcgrTaxquVQL8JWc2KfCvGbFtvKyCm87su4YqTJUNnK6vP",
  "key10": "51t4vPhy57w7xUhH88eJjg8U8LVWtop7neYATH3tyBdK9PPLX3DuHnVKRgDb625MLNoaZhbjD3bAPeaZa9FnNvVC",
  "key11": "wsxfa2Mm4mjcFdF2HYgCHwAewsFzqbJeEU7c7GPvVhbAgUuWRyPhhRUCENTSBGQc6uWW9CaPHMEyU45q2gkn1eG",
  "key12": "4ZXRJFdzoD9DhV9EWynMBfMYH49Rv3Se9ebFoLNJNuWcUZfddQEyDVHJ3PjB2ZzSidwcByQj6ekivCMLNtkQ6jf8",
  "key13": "3vJwhCLZ9iAU6xFnLy6MqQRoQdmCKWt6LVGbSkwdUP8pf1i5keqXw93DfZzFrCVTFZECruj4jrpq2gMRzFw3pPVV",
  "key14": "4tsH3ezgBRwe9tJUx6qQATAroT58iEfAEpDJndh9sEkK7uJnzanv8NTtBV9juv7kEQHKKgg7AvDpRHmagmNCziDZ",
  "key15": "3ozAi2V4ubWbAJVmGF5HeMv8cRpVh2NimzAXQfozZdhESJXYX3n9fMX8PN2tncy29wP12M8rJ7Bxz2BcM8hLPSPZ",
  "key16": "2DPHRXQiWF3PBfyPwFYLT2Hb4sFK2iNN76rR8TeCLPKEMz7tQuazP1uPDDAcHnaYZjKdLxArc6H79CEqe2wSsZLo",
  "key17": "5eiaWt3oPgat4v3M5Ci7nMC6f3zefjzyrDB12GthpLK7jL4mksVBQhndLsbadsDZMxHKw2HK81xy4ifmfC2iYsjM",
  "key18": "s35V2A8S7zj5B2H86UAhGTdU4jjWKGi5m4DhGaYEYpbAD8JG6QVXgBRdYQFq57mLBdhBr61aoKe2u1B9iTQwbHE",
  "key19": "2mDm4MG3ghz5wgTamNuYKB1u9EmsvzmFFxgKiyuaQfBV7pY8AR7a69m3CmXrZivMKFGFmt8yDyADgFp3PeXgQdGc",
  "key20": "42SpAbkFNoYqrRN9dBF8bxKcZp51GBFbu92F2qN6dbbXW6PEt2reBqrVFJGdYFDZrzZvwc2xK8ye6MDB9iEPuuuW",
  "key21": "362EvJVDbZqAvfsVA3Jmq7Sw5fBdNGkE47GptiTwSx8bR95CdZnrhf5eGWxyMweMSx4523UB4BqK4DsXb31hnmR3",
  "key22": "2yPyeV4RET5wxHQr1s4iRGLnbztiLp2Wsym2Lzu6s5mHaH7pqeDGf6Gwf9zJDrHSk4kh1k2bJv7zY8hY6qhAYtkB",
  "key23": "LtPsyfnuvFaqVwjQJYKAdyBHwfBnSLDQiH4BcxrHWgVGbx4RbN1heeFv3sD1EduzGLyE7btEmguaTzLV9GFbv2C",
  "key24": "NvvPVuxfGXL1AvKYN2rQkmSoD1J6Z1aw7hspfXKteTpVjDQCXYgZvPHXnveGc7nbdYsoBHhaeiVk9visBnfZCFL",
  "key25": "44zQxMubVoaYTyAiy4SG42kSGFAtjFxuA1eYKytzHBehv2jWbp2JfHSHG9wULFZWBxd78h2KoWzWA7gP8yQWVpF5",
  "key26": "3GX8eTonWFUr29k8M5P6ojZpf1FwhdkDUbBhRPdFe5UBwLzQpz96APZUhMxdY21SvRU6f5LeYWofL4vgRrEf4Mgh",
  "key27": "3G92QuMj4vPiPXbpTTWrXRMkFgoNzfcRAjZXjjzKYpzKzdrU7e63N5WDdzA68UJrKFuRuCEhpd7AwZxS9SBJC3FG",
  "key28": "wrxv8gkczDN11FsSwszyxsVSZE3HU4UDrBcgFN4NHVvQCWCrXrnEugAkTmiKWyof7VR8RDqFsNMVH42UJQ9VSi4",
  "key29": "4vcrJoGqhEidgwPUs4DyjC5m3CsdLjHcUoXyEvipMBH6qXrVKr3omJroth2yHfmtjntZF4rEr2BWWhBZj1dcnjk8",
  "key30": "5X1rYg8Yg2NPR3Sxnr4Zo2MtpFTcwuoDZfwRWFRarHL28g3CnF3kX7mzeGZQUu7LjvzsAuxjWgoWsVFhRF3KvdBM",
  "key31": "2bUZhtTn5Gyif6jdFRaMetWZj7kxCtEeGKc5118nFbcV6FvXg4BjSmBjmbikCBRQEn7hR9tt8J9RwiVaHfyqDYBj",
  "key32": "2uXafxFQGTySWncszssPtcJCT1X4ncsB2fDKoFJuZczvXMRF8UsEMq3xdsbHEzWqJpf3m2N2UkBxMtw3PhxUtcsF",
  "key33": "2GdcoaDhebSdYcVPD6L3rFek18mUL7v3M9J6Pygivbbo7ZZ2wdMAmuWBnwFG8ENSrP31JGnkt4sjDASPw1vvUAxM",
  "key34": "5VgQ9PVTLVtbcRMgJbrt2ppfYM36bJxyD6J4xGJeqZDXxhB4vEaCSDCwX6f5VsmzSW8uX8Pqzr6H1sN3eLuqhVVr",
  "key35": "dLtQ1cR2pskGVsaKr2jNcY1wPaJ82SLHAqCdcAoctzN7KkR8nPC3CCy8nhmyVf411CNVjbKfAQb5m2jdXv6ieMk",
  "key36": "4y6XU3zuKFG3XiaBDnQPUZXdCfJjHg4igPP32vuREV2h6rxDVYuAfjsPbJpbAwLNK7LXP3a5PtEUzptAD3YuLjdY",
  "key37": "5BRQoBLThU5riNiYKtc2bKSAgzP7DgdHQXnZTTGhrZM7sgXFu7Qqbf1v5qV3DsJMHyrd5P7s1p2Q9YeGnwToqkny",
  "key38": "oAas9RYVuAVtmKKCTgA25A939qQNkSB86ECz9bNTTxQcECGq83shWrX2RowiahtZHLbr37UJF7G5Um7REfJeQGB",
  "key39": "2xbZfgJBxDsEf6PeNQzKW7WC5Bqnf9rV3P7xSwVJQ9xjEtVzz3Unq5hbunxxeXWsVa1be5DrgJCrtgqUbroyAXFc",
  "key40": "4xXq3MhbL7AQ9UGLaey6GWAh9hD39NVK6GAdRcmNtJ45ALDiWNWFfzQWrThA7DcQgdDmjeYVGemj9zY6oWTVFSB8",
  "key41": "3f3yt5nCPF3UGhg1mka1PMCSBsq4j5eigM3tVfXqAywURbuEUmJkbTrP487r8CBzZBaRK8rwGknroU9gtJsJmSKG",
  "key42": "EYd1weDKHqJF993UQzt4YFcAnSZEWcURNRMq5VVLFcpwAjozKc187BkDgJUFsCJEuCpNn48dYYfZK4UmZFnHpj4",
  "key43": "3jziNdmcfwZ67cgkTxJFjZKy21ELyepFnnepYKBimmMGLS1fcCJKUxWNwnt1jS5hvRh5va8mjXPhCRf6XYGL4CNb",
  "key44": "5qam9eZoitCAqfHEjK4NoWKhVjfx8VhaidAPoiqgQVocoEFxYLfXQMhFeSs8DfYu4EoeaLYNccWVUqewwXjbvgpx"
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
