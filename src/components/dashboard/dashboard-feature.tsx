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
    "3e5oRs4rUhcMvKbUGxVYzEBosZ7ZbWTa8sCuxGpvk5nbgxYY5E64sZHGv238LDssQZKgcRS6yxXmZrMTeYDvvLQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6VQraw5vpxMdVkpPfV9qU7s9T2ww1y3zBUhB8gxsa915XV91J67CWSE9Bzq6RTvK6QD8pGpbEKKXq6pgKjUAp3",
  "key1": "4iwwE5P46f6MDxQ2vrdKxS3dwFFuRYo2adEkA6Sd7PwyzhA9KvnX5uu6J6d4GwYWWLv3dkNNQnExxEZV1EFjborP",
  "key2": "N7HcNhD2VZAwf5FXjVHbubSS9vMHmsbXm7oCww9xxVFWppegU6PraJYmbJwDcSUwfqhwCSKdaLFuqpsHQdg4b2z",
  "key3": "A4FocDwdirb23P7T6NveTvCELNhUfhxKnL7gfNzUzWAWezxVT4PDzmHhbVprh7nXPJpzwttvoYXLJRXX6cTE9ay",
  "key4": "2N7yP653eKdh2UmPeabds9XQmpRChATVkkyHFp1F9CSUVnAXvXvWfLSkAnePDJwTds6xDdMCnQmNELY2Fw9xeXPL",
  "key5": "rkaGUCbatAvkV2qkS52u8Umgbig4gduiVHfwWmZ1eLHSJafhv6n47NcLCSF95QifK96hmG8py8peF288mM6dd5V",
  "key6": "5mNgKmRvHZpttKWzSee5Xs1SYxzvmLoe3MzpxSrvLrv5ZCsYEpp23ed3a7zhso5g5Qeafhbmq8AvYC74HvxokVya",
  "key7": "4xE5AVRpmxhPEWbcR6VYAwaURwLvoV5GyXyusmbBGj8rPy5mWjcCs4dp4NWETGjopxinMsm4A4dwigVMuxCBBZoK",
  "key8": "3rMpA5bFvUMgbpZGSxMa3jL2Ng3PwLYwhDXbfZXCNNCyqerEdfEu1hLCK6C3KERNr9bgwd2dDZEERnX6uPDwJhg",
  "key9": "QeqQWr9PefjC447FFhpaQD18sqj4TpeaU64xSMT47zmR5UkPFn7YzMvT7vDUVdoJ5WGiq9kTKDrBRc6XHfnzxt7",
  "key10": "yNAKuDPASEeFfA4f85JdmA6FySD92yyBkMrX337WsimePKUMNt3xWFAMfP95TuK2fysmvYN7dUgQKGtG9H6RH4V",
  "key11": "4g71bNmJNiiVozKoWXLEtqhYTsjQuGnv6JfK84JAZhseNAMPK9dNRKnsew6P1XA12ddrALmRHfv5bTU8L85UrULz",
  "key12": "5UKz7tPTta5Qh2Md4rnNqhryjWaLRHqU6cGvoz5EUfLqp8BgDopdvKkj8Sdp1BJMJvWuMjfbjW6T31d7M4sXkb7e",
  "key13": "SAccwUkbwjhjTXzejZQZB1k88rMFnahrEM6Qf7L9zRbrDZnQvqwCED9fGxB3EZ4vXVmEwCtFD8CY3uLCyvyPsW8",
  "key14": "5Miz9MJsV32UkzecCfAnxjkiefhQxnKWfbWoe9X4q3Hp7c44QEpCeQpzTJWa4T1outkFLKaEgQQ8doQVXkskhyAu",
  "key15": "5Mznak8zp6guxxEJoW2cT6qu4Gu3SZfmepRiVwyTsWDAFcLyseWG3FKoYPq22bJKTGdaNNwPfb18hgna7Yf4DKF4",
  "key16": "4ytQRQPvpy9VCs3EjuuyJHUtwSnEoGB8JvYrmr1rsQ27tZqZ5bFGFe2idM1ARmJqpgDwCAD86eMNQx83FtuWrE9v",
  "key17": "s9FTMbV1Lrky2HpS4QU2roCqm6MVx58Mse5FKbkMjP3iDM1BxJquThHGS7RRKX48Wba1SvXmaQmKJe9LD1pAf9G",
  "key18": "4HUqV77DPT2rNcCJLMLMvKmi9r2WVzgcjMJDR89qKdz9vJX5nJWM6gFHaKdMcYkCdcKPbZB75iexwMzdy3iTAGsJ",
  "key19": "5o4ZfdnMod9VqoxacdqwFwSDJNYxZBfsq2An6ryAbwp5mZKrYuTkXXq4ZawGYRFzkcW6vpU6AmmUdWtscYXBxFf4",
  "key20": "4nDUuwgbfjge294C8BniYdfyr7ojJTvhvHaoe4QkFTSZKc6EgNAYzr1suetn4NuWG3HoQ4du48BocG7BKHYZ33Zc",
  "key21": "3ra7S931JMgGViDnaNms2H1fPZJUYh3hSCfZhEX2Yy1zuHg311e4kjhsUJEraPoCYBYqoZLebeBdjxUKmu5irMw7",
  "key22": "63mJUWeA5goE4dsznHP91LJsqfPLS24gLNpuKw6Lee6zLsoZUqdsiKcNmkANZvVX8sfgfrdVzRTN2LnjXiZWAwt",
  "key23": "vxsitgaiSHbTrn3ptr186XnXKHA5ZDihwu67exMnfgn13d2T3deXhenneeXTTQX2rP3AwdvZNm5treXLu5ynv5T",
  "key24": "22PdHvSkAMFdA83u3pQ3rih2misuvVsCr3rZ2YAcsujqWAYPJjvmf79G1Q1qJEe6sgzMyd9XmKEy63GbaEKLRXPA",
  "key25": "2dRRxbt8bbzDvnBu55am1HdN7JgkB4JNUPAZgm997MXTMis2Ad1mB7Y1RmNPxkZTyvb2A28mEgKZZBzPn4JccZAm",
  "key26": "4dbZXrEPa9EGz5u5DmBJVMaegbvB2xaTJe3wBJvrSrbYAX6zaviQNQGK5VWbkLRQCQqkQVjJhi7287qyeNFoMEmX",
  "key27": "2fZdZkJk2xSZk7KVCwLV13a25mULZq5mhniVei1kmVh1zoGepzoKfLZHQJkM4hwLkbXNtWzLTybvja4rujgNHWs6",
  "key28": "R38e5uoqAfzAy9vTPhAck4zZ26nUQXVmJ7rUUJwu7ZAomWVq25D38fYbsLfi2v3A53LV3pxdwwBh9mme2tLFBTW",
  "key29": "4rGhxfA4D3L6xAAeQuwTr71ctZc4C8mjdJqBAxJ6Pc5XohrEjuu3hkm6QgGDX3U7fXsM6Ukid6G8dywLbC1HMifB",
  "key30": "35YuKg693Q1A7NmMmgBbtjokmxui8AeSzt4CTZ3GopbaVFRKbwkAA5dy47MW1kWY7aDuwhYArvTcV3hGThMCtHQm",
  "key31": "5ACHiMrqW13osjzjsm2yzgQ7mAzYGPqoYuaabucL42Wx33kBKxSEKe8ApxKZw6BWM3cq9swHRSHunwCGR7d26Uoy",
  "key32": "5fRDSRhyJXWGhj7ZWJWctb5C11evk3UfvQkcbLpvjGXV7PFTVLkk8aZo9hNcCeZw1wwZz8XuZLNsC9gZYbtAeq1U",
  "key33": "McWf4K8w3wTKGAbxAT7YX5t5fs7gFuqUT5wGeTfJRJJdVX7dx8frp5TmBfrwJE7La33fMGYrJvTKpJejvwwS9xG",
  "key34": "5qY5sVtLCUnREPzbWX7qeYf9Mue1Sf6Z7XbQCbAUvoNWKoq4pF2skH32THovfc4EzEGtfqoXjfAGgPZZzdE7BfS6",
  "key35": "5A7qJbYrev8BJBVNHGtF19N5fuupavWmCzx2gND9nxxd4LW7siLP5ZrPe8qUb3PExYs3qpxSX262pnX6ux9WVgNL",
  "key36": "4d3PrJjVUGX25JKaVc7Mbp7v68TXzi36pSLVos5KyR1vTh4rqksanFNLBmZN9UnQTdSgaVQ2tc1beZNTW8a1SK4z",
  "key37": "7VVrnbtGJ1CDsTsMCUtLhmadAqnhaYMZC1NWmCSTPXxLsVe5jBVkeqmQJH5sNgwJaaPjtSZqEq3coRQrMvYRhqe",
  "key38": "4AYNJW4w7iKZ4NcgrLNLaWKijyAGcG42CEBMLPwoLbuBgQ7hhBBBzKXb4eaMEpykrNoxDE131wAvXtARXByAei6B",
  "key39": "56kDCkV9HJwJjDTYN62mktz1ABZ8Q2LxZJNYQnq1SghHQTiNabnivkbp1Ek56gyS9H1c7U2yP8G2aFWpiKxUPuv2",
  "key40": "3uvybdK9CpCc89X9VLvsmb19A4K62nMaeEUAxRkpWVEcv6wF7E6sgek9BmxfFbtfdM5FeniWoKmcNoPAxcV9xzBp",
  "key41": "3M9pjUMAsTN7ETYYzaejb558SU32ae6JQ2ooSinopqMpPxVa4iJQV4qbXAc2VCeSftQ4E1mBNhbxaYMMm5fTR9d",
  "key42": "1Nf9TXW1pqrHj9dkEGUPgmzWeBho6Bh9rntgn2fje5W54fpNnWavyXVEyjTNHQJCfimofNLPAFTCmCWA821pAZz"
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
