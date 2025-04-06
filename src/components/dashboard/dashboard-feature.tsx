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
    "44hT7AcxiT3zqALqSDCRYtsDVkxTwKDMub8SLyPequweVL7HkgRq9adjYQJUTWaiezfJav2ALBvdxkzjPqdipdJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VgdqjT5MjvbnTtaH6azLF9wHrmzmTjfax54PqBwBC9pVP1oqgafFMNKKJu6Y4HbzFnA3C8ESpGnan8BoBk5bPB5",
  "key1": "29FsrWbmcKGEeGJ1Kr3rVTpoHS7TkjwwQ4eRigCc5t78ujm5meBnVE5WCYu8SYeGKySNQmwut4bTuyVc1greRPZ6",
  "key2": "2sQDcxU4nd3PZ3MGSep735V5M2psrtQJ5TDSuRYFF3xVrhbv4H76euxqxN2REyMhMr1uCCxRCERxWLLSvA896RtX",
  "key3": "unyvJyut7Rfkxb1zZd1vuZWo1DSNCzKwMix7ECB3JWMWUsCDyHnSB6e7Q6Xuh4f5TJcizve4JgTpdFjcVRdSjPk",
  "key4": "5N6n3VUhuu6vmx2DrgyBGyEHQ9s6HPr6X7HSjzv6MfiAWVe7n65vFHPjPpWyZwvr4oFnNnsM5TvDMPu2G2EVgvGk",
  "key5": "pUwdsxTDT8LzXkXn916s7NpsxbrXHSNidGykC4n3Rkzh1qEAVYZ8C4foyNqW2unYJ49QPF354jbpXTq7KoboJcX",
  "key6": "guxP1FfCS6BVh3Rfxsk6ckiM4B6ByFeB2Rr125WWdF471bLfxGDChv6hJhfnUqmBt4sWcHJEq9K2sU7ERnN3Cac",
  "key7": "JmgrFamLxCCB1FtKTiSr9GdwNMmGC1czcup1ZyHKYACCw8P58tyE4oDYD3QHhYDSr2x2jbFAwXZSzdVebniCh8J",
  "key8": "51f6RpxmSVjTjrSTmaeCWwPYwDR16v3zAawproPw8rqUFpXvSPhdWP3r7ZuffwhkUYoVxJiJtQBvtQCV1QTKQvXJ",
  "key9": "nhL7S52qCEzVPY85rSxUB2fV6y1mMX6Z8NzwjgbxfhD5vZdhyVSiqtofQLicY1vv7VqhFBUDtnrBxj3jrATjsSE",
  "key10": "5MGi9UerzKUNhohAJdQbWjcV9dzVo11YJiwnch2QLBDexshDUa8YN4jfvpkS4nNwM9iBZATS4dKchV8wXP5pGxZD",
  "key11": "2kibC9knXVus4UbXccszYyAnanekc2dkvxxmMWpERAMENs4rzJaqsiTSVNTihqz5vs8tuzVTnoANgZ3hD3kMfK2s",
  "key12": "2yiwrDoKufDxJKNjqVyVndffhuk9MSVwrkmVBU7LifWefeT8sy38TmdRAwucgHJ9kjZrBsbA2Jye1tA3C7omubik",
  "key13": "4MbW69eYMQc5GYE1PmT9sBCXNcLvXN399bB1B9nLAem5xfMTT6zLEY9REbTiNJmLyWiyavPcD8YGH9Booj87iWBx",
  "key14": "4Aw6c4VnNN5fvKv3fqcZKW95oSvmqwHLKcb9RTyv5VSvqNzqty64ysuiQ5vZ3gEpAqkjBdmQvZhVjKYzNCzpcXQV",
  "key15": "mSWFSdo7RzhrzuABBmyAVWJ1MSs7Ao1X8eM4gwEtJSTKU2Kxn9d5YuftyyGSDtSsHr3FBVaArhednjjwJRB5tqR",
  "key16": "wcxTb8med7H5ejdM7XoQ47pkRmg7ZuUPnDzoggjFcvBBnGEyJsvcXjZGBTXomfSrWvHPceTYtFJ6wjA8q1m3d9o",
  "key17": "4yJZjmouFbojczaZcBHHveAebD5oDTFvQPdhCPTgTsDFQVW568CB7LaiKARoWsw2LsXQAuZf3ukEocCyKrL2tH8T",
  "key18": "32iyJ3YtrBzgGqgepPo7xZndddzJ1RreP6VuD5yABa93G6j5yk3dVvLTE7r1XbEc6nctvgyGz5dWHdtJY8Y968rD",
  "key19": "LXsxnAi2Y8kuL3KQXiYvXk4WN2tfx6Lbr4Pwog48WbQMw2yeRerj4y8ko1XwMCsRZWq9j8P2Su8MnnkPQJ3msnN",
  "key20": "46AWjm5wZuH8rTTVQg8HtY6KsSidsrT1punA6UMSGSBe7sARrCMKdSRPmV5DeWGHA1KFfJzVRjg4dCQyTHsRhkeu",
  "key21": "iM8tDFKjQU7KgtN9QQR6AVruR4dtWCWFobfukm2vWKrA24t6wEwn64s4xN3GnHxNB4xWR2TqA8M7TheBuvYF6Tx",
  "key22": "2aNpme9RxnTgp7gr64zAit1AacvszspqessLnYZEyQbeb8XirCUy8hSQ6kpqgh97ubnCNwb1ah4GyLTm7tnkWZi9",
  "key23": "4XTqGEDzD7rmBnY9Fz43JspHLPyMQq7NQJDdrDXXs5qkRj9utfn7QpRzZV99Rem6NMiHoHSAh27dhWJ52sgaknWh",
  "key24": "66sMqsLLWREoyv3NVzDSmsd1WK1K2vD6AxHdS1uNFG3f8CXfCD2HjXbEV6Zyj5HDhj7BdycKqpBSGTwntwJufyvB",
  "key25": "9WvL52mnAFKNx6dAX7HiKiHvo8kqQdgNyKtJyXfBU61uEnUpu328Ds6gk2xsUGN5SzwGGd95YA1RMg21yRMMhYg",
  "key26": "3jTyCykCSmEs7ARvMCshFxnpGKfJFfi4X2YHpsoEwZjwQ3BovPg81sV7A3AnzVscorEV4QPB8SbGtVnjGchka8tR",
  "key27": "5ZL1KAZWmJhcoVKcUbrmvb1CiaDpJfaCrq8bgS9vwyQi6UEETFtmco2GhhwnuDarJt13R5JemMnjXoPeDdg2oHkn",
  "key28": "esEQtvnBGQFx3DqFmabtpff5pnfQ3hLQctQmPVGnKX4GaVaYe7TpkU2iM4p7kaX9f31GynUJvphRnHYNJovSAyq",
  "key29": "3g9ttZgnbb822sq7xRJrcEZgeiYk2iYQob6XZPQ4kK1da6szFk9XCjcfYhaBoDzqgKtmtBQU5sDgtaZQGAF7exoF",
  "key30": "5qk44jdpyY5zNfH2H4TV2P95g4xXYLw8ZyViWRni5UaXdMyLVr9UdXDu64JwxrtKnPGW7JvDyLcUwxA2hLe1H7D5",
  "key31": "4XG5UqkMiP9NZWFxUn7GvGJ6DgTddjr6rL9cgD7bLvdV2ib2TQgroURs1U8oWMHLqnJiGTSGAYaTKNWAtwZSbqSn",
  "key32": "2o2kcTPiHMW9oLUkqPkK77urFRGLPH4kUKbQpDhpbBUkFoFsbswjHpxntuop4VHcsKTp8Svi3AsNdebUUxzoyXJN",
  "key33": "2EbDWopiq76N4KHoa2zYMWNGAU86V8MxtgNG5tJHcj6t3TMEFbLzk77DxUFwHNAcNrcXx9WRvFxPMkr3pmkZBdVg",
  "key34": "5gBBcCMtn47Kr245Wka19V6d1JFV1N9jFuix9Jv4kKVdid9ZDwR24AnMxqMUbzEuYLDGDajWaGvAY7qRgQs2zcBb",
  "key35": "4TBHMdnqyqrwfUNz5h9qijWYaMgE9ctPQtiWcbAWiEy4hWDPxyyogD56sa8KPMj62MXJay2BYCjuZW7ozj2JhqgP",
  "key36": "Cq3BhxY6i6XxZUZpWf4rtEdeheuf1XXheFjVTwEF9D7Q1gScvrjG7yrQ6NRVjnycoo9oTTAYzD4pHBof4NPaDhA",
  "key37": "5eSNBRYh44S1PbsUyaatUoSWVWGNdoiDXeFmSnbPE7hv13epFjnhxnq2d6v94K8dUVEyjuuSoZRodZcVm8UVLPzQ",
  "key38": "5ZhFED4DnPnSFns9yb69vBRECUJdT19yDKMKcvYQQHmejcJporuaEKjEMng1XdeFLrSjqRSuhs71eyYaTGeW6rfE",
  "key39": "51T2awa7RNm3hvdR5jKMNJabYJ2Q3BtdsukxLMDEAzfeR7CTMWhRLmR632R6V3x4nNFkSLgNMEy5Z6aED5nLySHt",
  "key40": "5qW2ZQiJcrsFywL7LzLByMNqXNeCB5J7BeQjitQcyd7wHAPD9NQwBu8g8W7tHkHgTPoUwvvtQ29uDRAcv311pFJw",
  "key41": "2tGtdsnrZsfsXriq7gJ5VceX8z3CpWjMhTRLcYkJpXKe7jxGANWnxJvWpSZcTuZtFL3aVMZwrzRpXggiVaxRvntu",
  "key42": "32dPCFZ6fR7ZoAzBGNzZ48hFTQ6dPVuTy8BCpXsMHZ8cTcY7cpD9Sohx4ZFmAbyijjvDCscvt8sZZ3wqfY8TKWRV",
  "key43": "4CAGx8niombigLwmvxDpZcqFznzx4UAa51ycMxgNEdo5XhNE9FAaqry7keWWUQEw6Pz1AyBDy6JTpWTq9UXvm7En",
  "key44": "3h3NEXwnHNYLYx5FoLRoAz55efqycgZ4R5PCrCpFyRJjoYKc9xhhewJzVmBbENpMMvgR8cTWSFkzUmnZLgcY7GCP",
  "key45": "3byfsgdrRMASoTnp7MGMRfendTFjH87oDfhUZ1UyuFjqucB5wnTSN6rPh1VamMbjGaa6Dcfn3wgahV6xyykGFx9n",
  "key46": "xUTGmQucF4NNBJWjHrpFrfU6JbiW2fo7699qowhvh24QsE6VK7xVaovG3oTC6PiVZ9ZwJwyJcdZrdjfovhrixKa",
  "key47": "27cbFwVnkUebXrSKzj5m1a1zP6M9dnSwjDvapR4yQtMEudNM6oKpERL9bWexdATPG8WTarwihpeitrcD8Z5picLR"
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
