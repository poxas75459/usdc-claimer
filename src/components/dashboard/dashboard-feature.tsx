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
    "4ThRgs2AXASi6TJJejswpAptmNuRXEN2xSpnNz3BHKJRyUNFwSCcKjTPQghDbX58Hs9VthdLUXzu4GJLL9zn2FnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66UqZbPVXG4S6vtJtv6fKoEzjpri4SwKrAxMg84CToisYj4v9jiok6SK4SMxVzZau2bEck2uCj3Me1TeZt8PQYMj",
  "key1": "5dnyZ5W59ChCrVXZHL3LSyNNFicKFdMj4hx7wFXo9AqC2uQdkf92Sk9vciFN142baDkepD6SpxiKbLQjjM4bh7sM",
  "key2": "4zHP5CMhMAS6sSBDRGuRDyjwS1FQ6FhvBWPrywp7A7LUzYEoARCxQhzVWmgi8CqqAaFKr2E5U9HSFb2oAQt1GZ8w",
  "key3": "46BeugRjgqDuQGeyJZ6pyuGsqxPyfQE5eXiq68cJo1Xox6xXzaDX7ji1ckwWVyc8DYexu868wE5yrMhJzpDywhJ3",
  "key4": "2pDHK97TWtcSwPLCqVLkbapdvaa5aAUnp9a9cbHNt58uoF2pAmwixTpNChGwNrzqkTBSRpKFZ9G4wVL6i8DsuiRF",
  "key5": "3hiauzF3obJSeFjDfrwrVkQYQyU9coSmWF549v4Ab2hE7MgDy2j3i3azhqFugrNTPwGgnv5bunETAfeLGS8Epr3Q",
  "key6": "34ij5ueZbeSGFX5ThuPAUyGdrofcXgET8KrMDVpZiZHPsh7ggLpTZyXcFVAvu9WfQB14aiMXnQBBpZ1JCy8w9g2K",
  "key7": "3nsFatbLgGNx3aRrcvW2bxB6WwutMWHwjJu21t8EdiBJWRhbmdLonmUo8GPbJhyAtX6UYciacGsLcCJ2FHkQXTMD",
  "key8": "5jDc3kQbxLFTyKTtAkRRc3CaazKRtYR3oKY5cBESjqVRcY68Neh7wb26hgdixy2QottfkX9gQ7yyuuZM5wp5XHTa",
  "key9": "EgcfkZaMdAuZUJTFXSD7Zt6hibBgvvex9VLNB9GUCSXLbqogu2yaFbszU4W4eEPDZVtqhkr99GdNeUKrnvSWLMC",
  "key10": "3mAdMcuDacqSteYQc6zWk2LH7zzoUtJtzw7PJGv9kY5GeGWdy9pdd7KpA7cU5nFwB61mUSe78f4gFXiDN5XYYzKu",
  "key11": "KBF17KnDLtUYGafGkGRzgJUK8fyXcLJCLFehNSHdd5PnZ3tt61bciAVxjgKHMu7Je2HYVZPaB5gsRaBYktKMW4E",
  "key12": "2RbCX6Ch9prqJpcwegYTAPBKmpxG678yBes7MBcEgjPuMyCNcgxWSPhB1fMgKNn8fvZL4ie3NJGD4XRLCBAyadKN",
  "key13": "3Yzhox2g4GKMbWhp7nGg8U9EqkAGbMWWDGF9XmXjQbX4TMysqqvMH65c8x2diLVP2jQ4zFU3eQeD1T3N9osQXqck",
  "key14": "4K9YFTa5voC9t5ybdZeSbuHjnHq4TJJsJ1bLv9JwTp27SDcMLdMptE5WNgAYD3MK9Tf5N5AUVGLtcoeJPpwWdn8H",
  "key15": "3CmL7GpfeBdnFSin7iMrMNjVwKdHcBHiZbiSi7SqhZtkmzex4Fuxt53Sbnmbo1osjSSVXzGfcVq8zbKmYg7sy1SH",
  "key16": "2Kq2azyQiLvtyr3QTKovEv2Ybn9vMEPdDWjvMP211icGquWAoGJFEwAyKJfg3TxnNjA3TeZxFYGRameicrmGBiP3",
  "key17": "5L8irc8Rf8oy92UoU5AhSFXS8FKLB8xC4B4p5AbWiZJQ8SNaTRR5touHNCEVVRzkU3hwR2fsdJxjWEKeJZYxiTSx",
  "key18": "2YYCVt2x7WxmYv1nykYHcnrgzPD8f3MX1g9AqKgnjbadVK1Q7pRDWtiLgzghCyDUuNTodQLrQZu4PNxqnVosGTHj",
  "key19": "5yZcpdJwbZzQbgyfbemj1m8oiKnv2nGkG8CKsYnPo7Dap46n1JZqE2iutg4Qm2nwKqvT5pRqBBvjivuZYo2eA9Fd",
  "key20": "48XCc9mFYGp8eEiwVDCnVUA4R5BtbTvmEpHCSB9Zhz8BiCrsUarME6iANQShvsKKUcZ9zAvi9E8zMMMtMSQbvXnb",
  "key21": "4JhjQ5nYSgnC4FXG6EkiHDT7jyAEJK3zxDTiPHW2dKQY8k16ZBy54PsgLqVYRpAzmzDLCgesC5YUZ7wfq6zJTENk",
  "key22": "4tXqa2QRWtQahYUp7DgyFsDiu7vuwZKwXrENHqeBBPpv3WVxkTDFw58dt5ESxdDZjqnjvpuJxQQfud9ea71Cmb5P",
  "key23": "31rBjczenrvdZYdmZ9a16J6nFhPmCA55Jctnno3KraxBpf8ipuWKjmdJVVeoUuYKu2LYVu9uksC2RTgnb9jy5unX",
  "key24": "5EbwbLxnCoxG6FTmABPViY5mqfRvEHqAQa9tLC3rd1xAkfNjRCJRchtCaWAkH4nihWnTZsCfDPNmnEvnhgZgcfVw",
  "key25": "2ghncBHGJ7m3dbzhTR2tmKiikwYeXN6sQE3SN1YQpCFBnVR1wpTPB3Jo5ikoMg3BUt61Mj23nXqeYbciEiy5GCVn",
  "key26": "XXwTVhAQhNVCdmgeMPDejbyxWzgjVs7bqQHg7QUwoa91cCLjHzgZFqG8U4JUSHtkyMpJhj5A9ghXz9mrKiEUjXL",
  "key27": "4qe8wFXKNRTwrdERsLtT2G2BmcRaXgihHrfRVtuhD7pNmyDEsTSQjCe1eVGEYTNDbKwN9AKduyFNxE3PjiLiiLP8",
  "key28": "VT4vS7AdTVaD2XfHDiZkP7P3Js9xVyv6QtRkEhB2R3HKhfoRPmQVojWA6mh6FigRB5MGZ7ZpsEP5qXSZfiixHfL",
  "key29": "44YXXpeyHUv6MisaiSrW2dXqMo1w5TM2KnwgWxk3iUsE8F9ZdTU46CbMWh3ZcMQybWUz9oP9pLQJt3acMt1hiDnV",
  "key30": "2f8f9jtkp1znL9piMqd4Q7jkTf6JqFSAdtcyiWnD7ArzyNKuGzDTENgG2Msy5GsMpbc8d1Xz6GPLAgaQS5p353mA",
  "key31": "5FXTeAxF4QbjK8zgv5LWgmNMcwL46gvUEbJnxwHMAMzwyPrgyZVE6144BKw6txULxZHbptq3GCfY9GDU6L2BALsJ",
  "key32": "355RVnygrbWcTBd2H8Fvn36cotKohdcfAVEsFb5sjA5Gxhi7Hi3AbjnBq95Wbyvq2xyM5U5AuNJjW3LF5pxSypaf",
  "key33": "2EQQAsfKKZjdG4CwHwdkzc6eexqMzLQkZx9E858XKGaim2q4kQcdywonxgg9ggXwEPmxpzrm3Jj6DL1AB2PaM9Yd",
  "key34": "3L68ZiqFR7bKwkw6Q9XXtkngZkm1ZRRRUqQz6L2bpV5M8TzPXSnDQEjEiww8MZLQLoQahMBEVFmXPJG48858tNtc",
  "key35": "5BHoLkqbeJ3zpgCFhrWHSubq2TbuER8LJqXDYsfyXBu6vuT73u8oydTmQcskF9fUUchh5oBzMyf8uDTiP91cr2sd",
  "key36": "4Xe1dLMbTx6JmeGevuwei2v9HVBWB61SvghpXWAkaDEEd2yKeL9ZnWfDeqaqG1j7HMRGpnxdKGH2xc5t2k9EqSVd",
  "key37": "5bHqBjz1eqsQ1XF7D18FMSS9EMpFe14w1CEy7cYdSkM4f9LhvGvXTMrDJgbzQNk82Y4rrvDUnsLe2AtJ2uKPyq29",
  "key38": "kf4zaUdzyrYiUGfxfqj2bRrPGMr2pRiydbtMsKPd3qGhHiHK1zTwzLwkqGuZKnLup311hFaLXdzgKgWdiTXHS8N",
  "key39": "2P7WFi8AQFKDTtWAZZkHt6zS3PbiyQJcTucMjHiUp6Th6aSBYMFT7kS245rkU8stQHZH8yeZtQ7ULitXcdFhju46",
  "key40": "xfoEmdjeWh1ZryqPnLyyaUqYDjGWoiGpmyE1X2U5hLf8TafNJGihcuLTrbqShSgbUqhfssT4BJyFNfDR3pgzSRr"
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
