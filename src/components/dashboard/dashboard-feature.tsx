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
    "4tQNg7mnmEcNP6uZpjvNj6vTuUFv3ymgt1xx6GPuERa6mBocmgnxPXC8VdfZmvchQkxhNVxTBLJQGXxqSNCzxmia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MwJ9wsyyWmKPHrbDJvXpq7j5n25rWrN9QNT4ZcvbKir8PsykHopFdDHTo7VECkeqpLf2fEzBfCfrjjzCjAr3c95",
  "key1": "3xkCDEwhzzqAgCUm69TBANKRWF2yZJF14qDFTdJGsJE9E2v8ZgcvBQD9GGdawxhTndyGjzEmeahkNPz2MCdgxxf2",
  "key2": "58ffonyKzRw1PkwNQAKhwhq3WtRe53MhDXVphHjnYtZfCpW5XAoJccsHEkncndqi57UBs565hjrkTHZh7b3w5Cz",
  "key3": "2aH6uwRKRugRYRycHXEyJEcqBhbtq9wWct9EgKqxRKFx6AHuM1fnwdDVkyycSWwtsFzakHNzYCCpzuP51dwoe2qM",
  "key4": "4hn7txgHpjdvA7aSuQ6QWqYSieyhHH75zWHofvtwcZCf2F7tqqhHHkjepFtLzU3rHd5SqQZdUM1JFSug5LigzbGp",
  "key5": "4wF7ELSsQe3eAyo3x6WGBAkaUCW26dmdR2bvHdYBJkLzSsQVS4FCnQtz3L6ytBRnQeab1MPWX9qoZpq1fu7eLaZD",
  "key6": "65BqQCjpP8U1NoE5Nh6ppRqG6uf7PTbCzNF1gwWkBXoex7WqYoFeDiyHAUx2Ja7eQCFfWk5pRCpH41GD7sT1mzWB",
  "key7": "2RiANLhkP9kmuJzCtjjG999zu7YaPyMTFtP4bNJSbQEkuZhBQ19GYvQugjpsLCYFeK4zZ9MYDEQAPfVkPdfeUboZ",
  "key8": "2eu2q4mj34TL7ChNpR5BVMTTurANyEdcpSz3ZZParJXCAYp46qZoxhDRiRHQEQ2qxMnHtZDGqaWiMbc8axX6mowP",
  "key9": "2jS6jkHh7fcTRZ4iU81oy6zoKrK5gjzVw5S6f5EXjxyp5FhaJ6NTv3iwHArrFkcCxbwhHBmWEK5AcqqSfQGVW3sx",
  "key10": "3mMEeqVXaR1X5TQGHLm42MsQNcduMQ8cNJfUQtEP23MNAhnL8ockuXd5XgCMgVQgnVmzjUwFp8GppmEbKRGuVDTN",
  "key11": "o4U8VWDtugzGkJ9aTFp43uPXSmMBug9HeC41sSXLUPu33eMAiSVr9P9gZg3C3RQUADpmSGaDoe8RAQ1Cs9ubdVR",
  "key12": "24ihBYBbmbmuprSLtDdRcZ9WZWMr8iGLf1PQ9g9FRYY1tDLsWsK5hcH4dH1oA3v8ua3hodx5h7ZmpBqpPfaPw83i",
  "key13": "2PJTNuSnZAncXfXwAn2MwZ5GasbqxLfdJ6N5ZJPqTJHKUEmQg8j3qC49SgynHW4Md3xLk8fHEr8wtTM5nJZ8jB4i",
  "key14": "5JsS7Y7mCevAUtDp4vhn7nejaSmHReMH9mLqEdjZziPnkWjNkKr1bDyDPgRhcVVkeGnqNkxaMY2PYKQVX1zP8Bc3",
  "key15": "43kCbmS46k74xEkdx64HTgHLzMh3VMpZ6AGtFxkT2YH4gNvfrYnQ6zoNQswYa37qNjkPAHRXPAV4SyVKedtyEPvR",
  "key16": "3CSq5YB9kUWc7YaRSDWRhRQDJiBJfNN7mDx7Y47LijLGXh2h4WTw1NXyLJAkJayvbpJzURUPinvejptKzNxbJjZf",
  "key17": "4dGx13CHRvFfqWGxpLY2PRYy6ogWFU9kMmrGmyRzt1pP82Lp6E4zfzeh55ZnckDfSkkwpKoiZJW35VRtznhrf3Nm",
  "key18": "cLHyj5pNaLZpX4w5iVuHBG67YZxiGmaqik4WAUNQBEHyufEuo5WNxFcwwZs5hhjvRdsWd58d9wWzw7p71pcnM22",
  "key19": "5r69WB4158iqbAWnngcD2cjGLaeTo62jp8PoYWiMwF6ZqxFLCu5iH7EquDb6rUrwVVtCHhmetsakbspDyKRF9AoT",
  "key20": "3dmDw37nZZNA6F8LMmrRbUosar4JWmao7UeT2UoCu4odHyxZisjivy7xgZg75Vbp3Gf2Kje4rCSbqaQFKbnmHRuH",
  "key21": "xsdgebuqaoREpECaUZ42F5hDubGCCBd1mDS6dJeuYSLok4dDMbcjQB7uTRPE9FKQyeMz6hawttAdMKbXuvnL8jF",
  "key22": "3FbAmDmHpo36iEEBVTYTxkTpGz9BmpEg1tpHzdVvAZdRypgvk14zxTRRQCgmQ4TtSXyVPTaoqWGV3oXpQNNpcwzS",
  "key23": "5VCHHK3wKrNtvKXHSYqdUx92NFWxtG77R3HgtyeGQ2mCP3gw4oFSvk4fLi6jpkgm3EGwZbiaxQf3SWjcNbLoBCpT",
  "key24": "WxheCUZNRrWYWPms1MbFdTFba8YfyjNx75Zie4KxfPw3tjHScyepqPDALbg76sBgE3hp3SiriMzLuqArM4abNNC",
  "key25": "5aLhtgEXTSj2fdEwxkQZz5hnNTW7YVzLHy6R9ecAdZpZpeqnawEtapWRdQPddp17pq1WjwtDJjeodsDTTDxHUmt5",
  "key26": "4eo174ZzDGt9mBccZm6KEZYBNbp4Y1QQCcU5LudzEaA58pJUruvHbQyRpuvByZSssrZDnCi2Mm99jhDToQpDxRKW",
  "key27": "386ujragqcAZRVvYKkWFhRfEF9jfs25zHkqRQY3M6WSdXEALpMLxvFdYd6Nt7iF6EJt7Gw1gmpr6fMeaify6kFN7",
  "key28": "5P48JPyPzodmz8Yz5zEsuznYLgx7CfdEnBhEjtKWzSx9SgwhhKpbxuwB4fn4fBU2AYocx5hDbK6EGC1uctkfjEuq",
  "key29": "Ek49M1H63WUv4Wv12oi2i8xo8gWpYTPVYEX6heeM6WmB5XrTPn6cTTGtHK1L9naHzMqD2eBNBrFTzMTVHQbDGdX",
  "key30": "4vRheh7PApAR1LAngALQEkZbfn7XVLbmLh3VzQQmQcisnX6NK8engUc2RuipuRnVWxoJ5vHXyX4yZ96ccvt9EUk9",
  "key31": "5P9tYaZRggY8XoQpEfJteaKy9t8GDZEiYCoGzW6cUGtZ147caV49mZvPWDfLiKKwtoAFNhg8Qpj9pnageRRRYK8Z",
  "key32": "utgmHhWSKqaAZfrToKxVpuuHMn6bVCoSHFQ5wxiKvbiqY8xjLYWsGZ2PEwNMPXaFx6iPoppBkTmDKU3Uirc6A3Q",
  "key33": "4TPamBL19rJcTXCrBnhFVKnevUARsnM2mSyx1dcj6dAgMPeGPnQnCydUVZ2xTGA8JySJmKV1419EBC6jSYuQoAR2",
  "key34": "4dKZAVbPdrc6iXQ4dGcDDcWukcJYuWZYbHesYsvyn46XQU8zLyPjoWk3tThP72gQ3z3Vivkcc2VNQFPsCCEvk8F7",
  "key35": "4DqhUfpVWiJV55P2HMSCyYQJwwTMUiugPJ1JTnrd25mjumQ8RpQNve2SaZR9ZdJAmHCfv9gpnjtG5ZPX9K2g6MCd",
  "key36": "51FsvV3bEQYwk8s5YQjbLT4KjyUjxjq9s92zVZGXY5XFgFTmvzX645fu9rEMQi431yh1RjqVc5ZkBcLmm5arhnzi",
  "key37": "4FCV8MBu1jygxpHdx9u7jp4esbFgjrZv82Tq1Gs5FtyEiJurwmm2FMuCZcvpZSRJk18SpjoWmzJ5SM9kJUqYcZAn",
  "key38": "3UBnsbETJEqZTBwjrscruXY3ZVnpbQRXvPucEyiPFjUHwnLatMEiHRFWpSwM135TEEA7uKZJZ72Xw7gYr3qgcpEk",
  "key39": "3QrCe7XTXNFDE9dCTTfoqLzhTG1J7htEPBziVNEjMTMEodX6MzPPrjVxqqqMsNjgKiKBP28Jzqmk64Fm9zeGTaon"
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
