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
    "5YC64HKRnFX22xLmHY5pFS1UL3i7J4wMwTDVgThvN14qHoZ5bQVSiymZY3Yw61D9yS6EBQL4B9kdw2EmSV4m2ZeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVm9sfBurgnqAz3BS4kwsZ3JCprPvGPk942thaD3UCghCc8gQ1h45T5BgZVKoxbNVLneyHpURF5n93C7DjykSRh",
  "key1": "4Ub9NmVxkHhVB2DmgYLY6wvjdtnuN9uwBKrL7BehdqJjK1aakJ1wX27KExVRbh3nac9Agw2Bh9F94MMGWNk5YCnt",
  "key2": "3zzEsLaPS4uy8FfH81tGK2y7PwhMkh1vneJhaGbWnYjGbTeUrbQ5TEtqtYwgzTjHEcncpxcvjxCSNy7nVKAhug6F",
  "key3": "4XPDSqjyfMVtDcSkcxDVxyfsMXAgTra1xq7wm9R4pLWNDL59phkpgR1M6d6LLuWfSXjmXKeXc72vE9DWAPy57WAa",
  "key4": "xmoGXGNKqBK5Czo9bTHUGSNJjvPWbw1bvcPnkChrqY4N5Tc6UBnzHkmzVhmHu2zAFpzZ6C7aKdDiGaowM6up6Kr",
  "key5": "2coHNkLSq2DF4wdA8ojmKP1ZTepjAvokxPh1RKeWvDNSYRfQFnAUdWifV4R9A2fnNkhH9kohupQ6FHGXzVvKQduw",
  "key6": "4EGpaTV5uiBcTGf63bUqvVNsbttfqveZEDbxmWdBQKnmapSsrBvHhmtbk64o2WLe2Av9JWkY4zvCuLJGBNDaPeSP",
  "key7": "24r9Ucn3QyZQokauzZ6CZJP7tpJTcZgCPjxfSeGe8awnN9EsJraXJorzdTLWo1bSb7eyU3iAZfHPKNJJ9ysFFRx5",
  "key8": "33v3BTUfjfhxDFWH37E83cHD2EoemqU626ob6Ef18kipdCecctfzQhNne982cfF13s2dxynvjLB4PRVarqhKusDu",
  "key9": "3hZG9R49W7py1hv7Ptqrj68oxZiKs5qYNxJPn4zf9d98ysgjAW9mc4ZqHaby3GYsymUR3iGwLBa412csdqH4GGDC",
  "key10": "4ufYjhadezr9Rk59cgkQvq9qMYjPebpqo9w5URAwGmFw36uCyBSrVCUupLyM6iPSnr87DtyzF2zmhcLqj26YJr5M",
  "key11": "524CCNoa4tsq1Us6okeVddEwXpHAaApNWGSsvMcPUg7PZTekN6ywC58vQ33tsCgoftcAM8sZE5uAeUBYpoxDHVcu",
  "key12": "f2oQiAXYHLGuhGj77HmMqrZ1orh57PvA6GDqNXcxajsz15kayQF5hwv5pZijejFYgGTX1gYtKup2EGzhUzno6qt",
  "key13": "3bpJc24V4riJxp2taPApziw6ENuKkJCiQofUnR563D9Dh2Hwf95xQf3NSYxxupMuaBm9AQMumHs9jyhcp42E56ij",
  "key14": "3dD9Atm37nqRxaSoh8h75TdhYgkJ6QFiQ73DMEQX6HFtSJNcMN5q1aDqMbkhV8xBMuRYpeUtygZMpw699m1HVQA7",
  "key15": "5ogzQR81V4QZ7d1CG39LE5adnTbxn34riGWn7FRGkw1YxAwunvDWw21xx7n2Dihpbn2F5DDr8DKy6BndDLcXZ76R",
  "key16": "4BZjFVDT61V6Wn2cBKfb3owMcM49fLb6hve5a8ycDJarSsEJYC675GpE4YmoFEtCuSj76jog2BF1ee879uicwGD3",
  "key17": "2hvjq7cMngtTMTFrrGBTSmS6i4swTSH4M3PcAB9TDrF7TWaUr1RLEQ4fa9CEWgFoc41SXUr4juq468MKYr5bJbFe",
  "key18": "3XT65aPWbDYTn3yGVWx8H2wry2BL6rU5BHamYAarCn8acdhVpQovePwq4q1qghUHVbVhKdAmthSP28qgCc6kUP3o",
  "key19": "2fBTHtFAMuhuBQ5nZqe8KL8RddkdWKuU82t2pytAqCVdYAJw9fiJzWAQfNmUTQFCLHmzyJs6Wsmiz9f9R3AQp6wh",
  "key20": "31ogYNQNWkQvgUfUqjUAptZ7XmhvrqaCQq31pY3aDQQ9nxM6FWwjTGEBsRWYK46R3pMruEyzjohx9ZT51EfRfGig",
  "key21": "2wjXPoTG4SYdKJ4Xt4xfoYQGoXVM2DYKbbHTWbRjHTUQBrHkB2BwxVQ52PJnnrJrd5KLaWEDePArjmnb6c6NDrrs",
  "key22": "2dXWWnLaiTfymNpyhTUDZPpLt1vFZXEZbQEZWhVGE1FgLZMPAdLYoPBdpbcNv5eiMsSJeSviANnBaqtaDLxBg7JH",
  "key23": "5CTX2pBaEEQW3oMJcxafHD5X5CfARyABaiE2EbdXLz7bCG1oUFn9HYLTQUzMD8x8MtdxKBuhSjYyqS445uMv9wh1",
  "key24": "3a7j6nsV9LdAx1osqrpHzBDMyWC3hhLF2ppqoBjMCwk5NZyKYnrbr8vi4289RNLRrKBzJPaiG4Bkr7dBXrspibdC",
  "key25": "5aqk8cz6SzvkApnvR49Fh58ovQfe6utoWDKtiy1DmVt28PU39VjBk7r1yQ3ieiEiYzEda2YUsaGvnzvnRSLKH1hw",
  "key26": "2CBvzTVj1EfvXk2Ycq6PHL1fvZWL9ViVcxVpZ6ALVGvFKqvvPnZQn8AMu4KsT17GPLz2fW9ShXTUSJQ2PfU6suv1",
  "key27": "4JY2tLT1k8igzW59DTaRqYU6DxBqrHdXrW3FyZcWEGC7HGuKVr5FfAheZ9HFEMV3nmGUf8V1CXx45LzzZuGze3HT",
  "key28": "2aChQMyNRRfJEviNmSN9XdCcrK4WdjPH5J8zCUXCYh9NdcSeq5A8So4SAfwECBuJYVUPVvFCBSQ2jhKBi2kG5RAU",
  "key29": "2356WhfycQGMpNUs6QDCmcpLmombCsymxo7ZgRB3xhygur1Nmstiz7nGQD1uvcR6c3NWyCzrB3c97ih2y29sdybi",
  "key30": "dw8GP3s4QtMv9eKfNAutUjAQ6N8SMN2VJkC9BRU3gAYMzgA7obaT4uScvWhMGZZ1qFS2cj3shJK1q9UFpYhsJVG",
  "key31": "z5jZtb3cuYbGJJz6iTpYSikUxjFGi4hoTziRe9zrBMXfobzFkBnLJFdkRBb8hT5Bb43M3UBuQ8CMJSJEV6HHQVq",
  "key32": "4ct8bgmJce4uzbRwGmWfNZMqALSYc8Fm1bHBvFiTFSYpGw5gq2VVHwUwyVQyVjcjWDcbGG6uBhpmWb31M2Ki3Zdp",
  "key33": "3kQpoiJsDmFWV3XqRAsAi6cbWbBG7umQTy5uTExcZKpA5fJW62p2JSttgJTDv133UvFgu35B9sPycpNNdYZ1nMqE",
  "key34": "5eiRrfdyZz7Uu1Pz85AiHXiaNteUHrXGuXbem3tSX1NGJLHVoq4PCToEBVLz4RBZZHdYWnqqsDgeqwr4fP8Qwc3Y",
  "key35": "2Va8fG51aA9AdHEmCVEAxv9QiPSiFkHfCSLXY7g63NKC6aRwFgZeu5YiMibYngkbTSZtwGUbaekTis6XcwuqevDQ",
  "key36": "5iWkXu4JBxRqtK6AWMWkyeNr4jvHijgyu7skkW8D85HNYn52CGYfutcfewAFfPsQFVYfB6NPuyyCnJzAfZJnvscr",
  "key37": "23sLguykX9Bd6243uR2dfh7gsMqsUAXWChzB41oYQMbakqDncfc7d21QCMpHYRqccoXbk8347fQkLZnR83L1srbe",
  "key38": "qc7hcGTAGykDfyLApNFHmma4Zs76BVZoVtt8KWFJSFZCB8JdLmVYAeAVwvkV12HS6Ef1Z8n8RztQymrJ21w3UbW",
  "key39": "4Bo2Wu8gESkRjCbVunK5HFqh6jCzeyfMHEq3w4BB7LqMxwan4dKTKcNK4xkGvQ3jhJF4ktFRhUZhjoRUu5ToCky8",
  "key40": "3UkKKGHCFS3B3DVdqDQyPZoM8asz2LvnCqFDFT6MHGUkXkRTomwhVDfsQf9MXD8Ktgr9ApwwubZQ7uQGBMY7utSc",
  "key41": "AUNBxtQJNuqPbBeSaZLfkS6HCsXmW6mrqBy8ewJ9x3vkms98kBjiACrB7ti3zMrE5h3KzGDoS6fMzPgyHcdMwGe",
  "key42": "3tB4sucP4DfqWQxg5p6WDt9p9guJqmMH9qZSeyw25EqRgPuNnGxvUVWssfN4mwMpi85Akku8i9Bnm8DKK1Jq9K82"
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
