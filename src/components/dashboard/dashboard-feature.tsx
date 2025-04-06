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
    "N6fCSfAjtkQo3tQMzqzo3UBuM7KQm6x4nhjE7aYwfso6MiqkkAbd8kXhJfyYWQL4BMVeU2vnCHdh5RAici2UsNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8sHQQzKDhVJX8WRsLFgwuGqN373U77qnXGSVEPUkyiVkKFfQxMULpcwzJTCcfUjrR4ET8hK4yFNJbYKTb8n9zT",
  "key1": "FabAK4yqCRxEhTYjP2SMreFKQh49MESSG5hW9GuuB3ewDap1ECXiMM78LsgAjdmLvVTtwmtsj1epEUYb7GjYQ4f",
  "key2": "4U78LKp3vysoBjWKPfEVP5v72bvLWMQAgr6fFhsKxoeU1V4CY4J76AQR2R3uvH322SXtZ8RXxQJjzfps2agrqpMQ",
  "key3": "2Wo4TScmRVyuECA64zEvznvLQw8rtdUhU6vdpkMpidHmKyBQHp96ZcnhcW52YQyad6so9xXKAVYdFxr4v7P5W4Xs",
  "key4": "4ZRafxbgDXitiEBhnwMybyz7x49TKpawFR8ex3oUNCcY3tgUrM5JtVyF3aHibXdKWzXcSZSPweoYsSRFDkgboUcc",
  "key5": "2AKtPTE634XhT6oN72kPBiK4ZQTmn41w9eB1NSjuB9DLEfyJRZeY2cyaxBSn6BNDfFrEEURNTBkspd1qTZVsrt2t",
  "key6": "4QaLJEiUt8vd3HCjKKSUsynsmgaRKgv7ZBDjwE8e3Umj4XhnuhXGEHwJUtrPDQvefYgSWsD8DXrhS9ejwYhC47kd",
  "key7": "57qUFjXPu2Ht5vTrwuP8KwvxYvmrPsf1KAjBCZWKH1u8R3YKiEWiHpfEZ1VbgTcwmmJYbxETycdBs1hSTPfPRJzT",
  "key8": "4BRsmm5dbv9usdP2yC9d48RtVsWt4shopRFq8BKikTqfhEEoqqyqnnYphD7xWDNeER2twKJJZx8YQQNVYSsP8JwX",
  "key9": "5DiWCcxEhfrTVTRypQxDwgMH8MGMJ2hcenqxLng2SHmhzPjG4PFLutn45KScLg5XdTCsBhbTMA5jDUVEGabNwDqL",
  "key10": "5jH1RYQ3NtN3Db7s7rbxbAb67WsqR4JoagmiufZma5kDUzVgsxNdMz8iKLU5QAggimKLEMhkp9Xf6qGYcU5uyV6T",
  "key11": "3DRp2prrTjxyjH9g9xpZcnVD7NKFj4eNmQxUGPYVa5EBj1iRdBCd5D96AQZPHCzZA4URzU6Xt1JjUAsP8nSdRuPM",
  "key12": "3oMUjXxafFXvPCv2X5WQSuNAyhxcYDyraJg9pt8UMidaCC2ZvLmoe451kNzwLJBccvYAh86pyp5hckzR2XBpA1U2",
  "key13": "2eVcMUfHGrqm7ViW1QbeQfmeqiWjK4PyrciD6DACxgDSm4k5eoNA3wBFJVeu2jGmvWwgRUHrZEAMGxVU7bftsWw2",
  "key14": "37jSwUvucatFengtWiLAx9B8xLvghsLsp3AQ6Q6gPNqGADnyop8HCV15i4Dm23MGR9PQjqBDDMe9KP97mXmb8KZG",
  "key15": "5rZv2w5BRLrEKT9kQhYSTDydKEE6EJPQBgYUrG2rPdyZeKf3AWTaFTZxnuxDnCpZmhXG5B9NUnKargeStoM4fYZU",
  "key16": "W5dHQTB8Z13WZ5y4LhqD1vFTwZw9aX8CAzgdjYuuVYT98RDmgEJ4t9QJgKgc4Pe4sx5BES2Zj7JHCjLzqR3w59K",
  "key17": "5LwA42v5mMaJ8BEXYhBscGjiP669H23tLgnGu3ks2ZqMS52r4t2S582fj4mgUhVA5NeyEsZwjFvoRwkJLz4PM4uv",
  "key18": "2MSfTuzE2povSsfio4RSM3FD9vxWeMxfAZcoyRq5Ytd49x5ByVgk1CKGxGwB2cA77XWQqF737iyhVHxSzyLcjimc",
  "key19": "41jXpwrZDbWtpJqEsfCxKiKoziESu42nkhxgCLSfQ9eS9avhiEztTv1mwPNSuChXqEMV5tjdEfii2Xt91P9QLaB2",
  "key20": "2VpUTvSxuPP4ekggRxwe992torGLpSGXkuJ65zoZL1WjsQc2QaRXi92dHLx1ZhKpQTnh5rPgbri6Czo3bTo2T9Vf",
  "key21": "5QyfUpQpa4V7q9vNaqKqd28UVJggS61n14tqPu7yH6zWAhLYjWB1tFCfRquRksP12QrmFTKnvxGM2RtW5wpf4GoZ",
  "key22": "2eLa4JAzqjHDCiL3DrwMsq7zkXkoQZQB7q71X1rSVjuwLKHqmZZQaw8ZWpKJFkjA8virH4iJbZAHcHH2dE2y3HhS",
  "key23": "4bsCmXvZDam6ybEu9qwBHA8Bag18jZYhS1uujMi5ehAsTkztbCG4g8WD4ANrDqKxycV5PNTmN4RKwECB6aXRQQhT",
  "key24": "9GRYoYeGnv4BmX1mJTkeV9uyLMv6ZBa49MvZLdzupe4D5mQdbxcg66AvoU7D1hAf38tugWPAwjuTbCfSjsg8ymo",
  "key25": "5ocgHe5LerLgMAVTHpp2Qr9Ps36c5FSPgehE9cNrkNhuGzD89HfHGbEfw4maRaojikUuxdmgzKw5KSGHJWf11PAv",
  "key26": "5Xbx9otde1HG8cxjfuztg4STt2nWfdve34xBVcv5isrq3cCa8miSeZGp1XvERJgqfbziyfE1X1qmAJKgFspmE3Eh",
  "key27": "2WLo5k1ty8atXFNV93JuSQ97Ri6hDWFV8FKHkChneG48hHZt6QkwreaTNpLeDu7JcjhFpR6psWTkZVtTVRMfGvc6",
  "key28": "5fbe3wUDVPr31D4C8L596prXfGmGociDrQEt6taEJdKMdM8g7C2LhxAHNds2JeuNM7kUw4CdbeXgYosJtD8SmX1h",
  "key29": "wohr6UumsQsUQ6fRyyXThk7ufRasrXhM7rJYcWuUBY3vP5onKYBN22hrBhb8cYsVGghVxyEz4esPN1s6LFBTYeN",
  "key30": "3x7hXXR9Kpkb5TL19XZV4E3ZxCrhXbFjUaymb99WynYpR4zhqZxhm6qiEAfk7oDanNDciM7LPHJQx9YrQVBy8DcL",
  "key31": "oN6tcQZkLFAK1aambEuWSznqYLrFnpf16kevtas3bLBgBs4jVMQPy92iozZn76QEZKKLEFnjXyorKRZJhyJTEhF",
  "key32": "3XR7zJADhpYWRqMaV1DqxkqeBgUUxKCMu2iaVfGyqivTW7DBU21oUV3hQBXdqh2XzUiPp7hwLoRM9y219t7YMUyf",
  "key33": "DdSfHfox3oREw94A7hYjwQrWFiCcSPkFQbvzhcPYLhPkspWAvBrYKSyjpSFvMC5F1K7kZEoFdSBk6vwPdt3bk98",
  "key34": "2H8q7V1oJ3dDaBCwTqsdFu4at9gHugc1ggJunR4brg6acNaRxvHt6bVgV36KRttZJUdiARjyFbKdiyRFFPi57g9J",
  "key35": "5MA6T5C69EkK6YYrMo6Yx1SS6Ybk3WFXh6fJfZD8iwJTCdxUsp26J6qGz5t75zms6Ggxoaz34mYpNfVcidfPX1Qg",
  "key36": "64y6XqUwKhc66tYYtUFu45doJ1ihJruRrQ3b9g6UqM7TDKJHH95wxvJ6wmw5jDNqiGZdWy7fqtKb8G4tMdm4LLkr",
  "key37": "4jHSzHBciSM6NWfr9V9cf6RYxmr78ETeLaHvGQ6qu7vscqBWLYoztChhLP6UvjVQ4HfChew5VrfYn96Z3oUPeuPx",
  "key38": "3XkFEKxXm4giLeMKjc4FiwTLnGVnB6TfPVjHE31Mb7vk1trAgMZCkZ4FsKhvbYUu6CKkH9mcz5DWcbFwJEAQPtHi",
  "key39": "3amjBhEB6gJfKvho74oumgR3RxRkJ9yLAXEgCLnG6Qv2gHd47yVmkjBrQHHgXnHrfdpfZqxK6ahDiG7YvQrecbRh",
  "key40": "2LUtToH2Nn3MA9M8LTvDrVMgx8Mr1BdwCpCsTxBFNkh8ffqYEn23i8Dcj9joGna4xXZg1F5KrDnASegQ4LygqFcT",
  "key41": "2t2GL2UGTnhZZUmVDCGNv5NzQP3TQa1r4aDpeMaiJGrftyyh12BuKScvFfg76zttFnnjm7RgzJRPMygfLZryb9AP",
  "key42": "YvWvWwDhzES4WCy2qdwjxqRYYA5o2zjoXN1zwnEKhYg1mNZFqEay476HU12pg7AHBVoFyJPiBtvVmBDL65KwtWn",
  "key43": "3VqNEKtdkfJpFv2E4974ZGArUSxgFNgTKX9iCAntX2HjVkrwusGMAyRc7kXFx3ttj5qzVzoq74q2EMJKXWc89F2v"
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
