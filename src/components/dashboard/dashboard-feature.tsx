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
    "52QMCBoFEFRMH7YndwepE7DMvcFtcsYtTfGLo316cEBaKKUtqNPVbMd4HMAyxkU13qcySVWSVTBXKsxgjAaYAC4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36L14xQEj9zhjgFMBcta9W7mAGbtHjYgkz91gd6S1tGvpxptySk3A3rCnWJrV4orPM1J12w8MMLi7hzEaMAW2gsM",
  "key1": "4VvoSoxQW2aFcgGdzjqnUWbyKYU3gacmpu2RcKojxahRgPa9UL5eD9tQ8tNnpBui7u2kNChaBqqr9QAyKJ9XSujr",
  "key2": "8noFhrmp7mQXA2AzXGQ4G5V7GmRCMqGw37jFyJFUpHVvtp12BH2RushBp2RNPHabhYF4ASUzJ1VcHin7mZSKJrx",
  "key3": "5Pm9rFqE22JbBZRNcDNND31nTsd1m51rSmsKmiTggCNf83u16qDcsHMytnNQEPjrj9Vytexq7XmpVKFMJwkMMzS7",
  "key4": "5hyu87DV4n3ThSL51P5PbqNSN9W4MWNEpzA6qiWZe6z3LfoxYKZDPTM6LikTGJKRZgben7fWPph6f3JiiDXLy96y",
  "key5": "5Y1gP6x1jfagACkhZEzaEjvdydJBuWXo1EzEmMGf8brbGREbEwwFrdH998xhAMCH39Q1KgaTz9P2MCEurGhd5HkX",
  "key6": "2QyfnSUheguUz1ZcMxGkM8U9AzMHaXt8DPbHEauwMmNkNXjEpQCj4xcNDB5aXF7SY1a3ko6STCbCBDVYnNJXZx1F",
  "key7": "2ToXXw7ErHuFuRbo5GjpAJuRk64HtF7wVX18fHD9c2P4ciYtzojjNpNyEYMhTb1Rx7HDyrWhtbjhNMnYhZ4p3TqS",
  "key8": "3DNtkVE5ryve63rP8B6DvV7fagAiXGCXaUGYMuUV8qaB7WbbCcoQKoiNJA22njRpjQrHwAhULLQ6TXXX9R1p6ywv",
  "key9": "YWc1Juyk1X9faX9zwxcykHni6RvtRzwWWuTdQEoPWas4pWtKkYPmhN7Db67vvsTCw1kijTvzL7Cb1BidSSVa57Q",
  "key10": "R3QjuchPYkpYw6xP1yo1WYfHbWDKARvtXZy4GokKu6YSyxhGZv6JsQLgRX2gcYGnpW3ds8EYTq3UHtmrE3RzfZS",
  "key11": "5VxzMDhWns6BiAhxbj9VxBYWvFTbm9ojbXpkideES4sqRWtBB7s66F3JAXRad62qi39ptFCLeDxWmstJMBRB8aXX",
  "key12": "5yVVVEp3YKAi85EwmAG15iZAeijcZL71pzQB7o9j9HXks6jrxHLFWMUMjYorzUriKk4izPUKpDWDf4XPpo9pzZUs",
  "key13": "4P254HYWjysdFWfc6MVfAPHZ59PjnttNYDUCsBFCJyfmUJBhjuQY92wcDwuUxMDe8eHeeAgdXazVPw1H3bvGd3Xq",
  "key14": "2cQkPKycHL5Tcm4aqezzZ5rcrbw7bnGCkbwSLiotCdRiEdakTR3Eb5d6imCZf2fX2yEU3pAZtoYdujcxgBpA1NGX",
  "key15": "26px8wYTeZYWYxj6fjtnPVNTVjJ34H8WpfrEqSQAiYJ4Q2zZukJR1nCBSmBk9ZXVqU3abdCLa1C4P4CTSTSAy7P8",
  "key16": "3etQP13YbdbuPCZSk15X9ESe2EJqwgmRah4h5PYdTT4zr7BP56GPZCogMfPoAkMg39GvxEjQgYGRKRUSRitJUuu7",
  "key17": "5cYEJhTVH3Fwe7YjKj5SCkiEAEAa1RmSuR77QXoym2kisEVZan6yfVTaUMdA6HnD9jfqYeYwPMBq6fMYHocuuzTT",
  "key18": "4W86z7KorkotNTXAAeR5i3cJciJC2zMmUHHSLnZywgm8kr7MaDDwu3ZZNVA9oU8fPswvuSk6q17EmkunsSgYcmYd",
  "key19": "3x9bNJymXVsGdNScZgQVsd2PMcRok2YXKCqem1pznCfYEJRdbPusSuYX2JjFsKBp6knipEeShD1rs8aa2okgbRUP",
  "key20": "4Tm5SQVQoV2VxM9PRbdJym3VENwFSsMARZrXESxeW1pUoD3oML4fBZ1Fm2bcDrxQezXyBmN5a1GnsZAery2Zao6X",
  "key21": "3Q4jWnfwHyg3aJphqDeneqe4vZSCpYeEd8JWJmwMtAKvmnUnicV7nNMfdRSJxkRUuKWvqsX3g14Q8QbPuxvBGFVK",
  "key22": "4KwHHTjeVieyQBMcp69J7NniFxUZZAtqzq4sG3BxBe842S8citcJKu4GteARSQzkHDwUVTcdwshevGXux6gvEPxw",
  "key23": "5EeXuajHxzTbdeZmbjpNabSzpzhwVdkz5ywRGtDZJxDNnYRWpmvP1oxP6CVT773BrQm2YzDcEvMVhr83EVaDRQ6s",
  "key24": "3EBGpG5X1rVdMHWoq8NmUnHwAfqGiKaPwfuEW9xkb1bBBvSyGmdw6RMExe91b5jZs23e3pHLqLtPoGdkG4MsJkeE",
  "key25": "4dB4wG6JWi1B4FLtx49fPe9tX6xyCTcpAAiMtdfMEQ3ZBZsjU2K9XJPabePZAK13j7iBWJB3Q9c3azD1vbxvuVH8",
  "key26": "5DiuqPi34yxmsUYUsJfGGKFJfKuKmq9zNXSZJGy9bJSWCgArEMzYsek57jKX74rkRz4mHhBLC8XeFSKriHxghnSh",
  "key27": "dWGKr7QPmUmjD8b8YjJxjo43CdSSfrYLicLeo9t5AuWSnMtFg24wTxagg2fLXh6MSKspi5c6CMQgaEnWtan5yu9",
  "key28": "DpT1QjAcq6Ed58AAHzyLyFfYc2aqUgpzwuwYnMEqyQNbJ3T3UWyLFMHJYhkyR3e7xveyxnxAb7eSAZPxRrmcDdG",
  "key29": "5XZLuTKY14dr4ag7rQais2uXxvkKV6uDY5RhQQbpTKmNtERwSEiUYdW35MDkpNm3oYtzno44wFN8YHkMUEHXeRf5",
  "key30": "3mTQBqCuzw2SLcPBGay9btWU84Nj9WnVjrxWtoXHpQdQdGBSVnB5Vva2ZPMyVaXijnMSg7qKcedGTgnLwcBUzFD4",
  "key31": "53JZjo37RXMiu1VGHcnq6vcvPvSQUR6HW8AmCQprnxmA1JTJXihKd3Bu3cTcYg58sJ5KVvwf3r2F4NzQwCkuyjVs",
  "key32": "5Ch1AmoXSfMijAa7XMyowQSnM5XXxQVh5Dfupx8aAAffgRcA5T28NzqQ7CA1LVMuYCkLRNzKwBkhEq84de8uVGQt",
  "key33": "47EbexzVDHm7reYCbGuVoktDgcnyW16BrS4ZZAUkeA9Up9fea9uG5vHzi7yHbUke5ToWSb4Z7ehbtZvqR87QDFVq",
  "key34": "5a1sjhKAVHm6R5HpgHLSQX7xJSsKwkHEQVxc14GyZ5s2j4FoPuswLMRgrsukAnNeHCHWeT9GfnHMyKz4PTgHFiDQ",
  "key35": "bczTbyPnZ9oGE6M6NJMJxfzXab567rtUED32QrUr9k9JgSJu859mNR94aJ4h4X2fhfJ97jEfdDUbVRyWksPYPeZ",
  "key36": "5qm3FgTQk9TH1HNsWtCtxdkeBKQeU21oh64QoYeSzoB4BRDJE7VRsHgKAoTpXT6vWQ8Du15h8gcDys2uNzXprUoU",
  "key37": "2qwVhUuKZn2LhMqcPV6VhJ7gPJDPui1nAJVPxaigL5DjQUM8kAMTmAc3k3EsWG7fqebtLeUkoDBz6rAzLdVfG3hK",
  "key38": "ddxKtdAoymish8jiLxpeCw3A8RFu3BUfbncBvS9KcEavyP2HBX42KRgqSFS5K7hqk3WGLQSEao6apt7iUh7Ne4D",
  "key39": "PgBXraTXKtbRR6W7hPXiw2fdPFKfa9HQhyX3oyzqvdC1mKwRXGRUqFTr8Er7AULYJujzj6SFtaTFVRgty1ZkVKJ",
  "key40": "3PVhCTKLFYcsU7G1ue9d2c7p1mh9DWZQkSd4WBv1Qt1VWhuibPsK6gwEfiHGrGMkdfUnd19thZy9QJmmSpviX2M8",
  "key41": "3MaPSUcGzBqAc5K55uownVrMjsjXk98LgDfp7Q7vfhzvnfwdgVVhRapARLFZKmXrZ7UmKgFA5NKt45zBdVMQWD7Y",
  "key42": "cnCmnmWgex8oCpDR5rPu1wAqHUDgqioahj1KeHCg6DcvaE7gtiwaaRbunRhbDtz4iB693a9hxJg6mX4Q3a4bZnD"
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
