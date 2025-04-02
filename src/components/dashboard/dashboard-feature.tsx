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
    "5ez6uCRAWZHpFpArpikSKVw1FswdadTo2FHBjjRqSswLvAC197C8b66UZSbg2t9fpAJ5t6E6JeCuixsR5Z8o9vzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KH2TAKa1cME9a7UXm6iQDAerVusTjrPzWpWo2rk8RbRX2FX4HUqF8CwNonzQii9r4BLpoiFRBLLu7V7BEGcbsPd",
  "key1": "jJaHyNQYBqH4kKDNhEePdVuPTH8pWnz6qY1TroNhifPvrzJqgT1gUKGtkiruxRRpArjCaSYRRCny6VhfrSNZgZ3",
  "key2": "2yuQ3ATZsWpK1szRtHyMwL9ZW4CLLtCwZKwCcKQTiyDnsG2AeZRBeB6CdrR7bpd4ftaBjjiD2yWjtiKGuLHk24tY",
  "key3": "erFFnkuLNtHpXwz1xGTyaJ3cJwnT667s3Nr7tm9bBw7dDLtb9U4pecy6nph2DEag8v1o6teZ9KrhSCSxqe3Eegs",
  "key4": "z5ZKtBMtZ9F88ANmmXiTRR7CrBjPPCfGx4WYVw9AgyHsiWYo8KNqQKNBFnpoQor1rRz2DHrjvF913W3yvcWokWH",
  "key5": "5Z8MYBNQzzAUh5UL8dtSrgnCHLjWMiK7H9TFec1uxRoCfhUpWJSVnhKoxBoocMsFAmr2K7Nxg1AXmJ3oDMjkBaG5",
  "key6": "n4YANKtjvyjzudyNLaF7QYUUTwKKCAqWu3yxtwxmLvz6Zw7y7nnnDkg7KSuK359j2yCCCM7nJswwz2PwzKVMvVj",
  "key7": "45wr6yek9yYA3ijVGaEsekFy4E2u6QVZszcHWZtj4G8qB5bWXf5oi4UfaUoZaDPfi4RM24NhPzeXbFfqztSHJCHA",
  "key8": "63sryUJnsyvPvf1fWmUmem6fNCjixq32GFzFJUmknu7k1P6ikhwcFwecpbncoi1iNw5pdaTaiLHunv3UePFG6FX4",
  "key9": "35XuWAgPCktFPuTwyS2kWRgwgUPUTVyVhLzV7HXE9THcQE5rj92agoCVptuJZ97hGsPXMnDiV32KFbDfo88HfNFd",
  "key10": "52qfEpJVSg5YEsKMUukXQgMCJFnAK49YfBDzHQxxTxtKmZn4s4fRueZgpPtqhhFgWPkoXDE6mNmN1S7JHSHZyHKv",
  "key11": "buDkh5nBa9JanUrjzhzdG1kqAMscQMxHHditQBKCfizgn4sk7ZCH7CaHuUQScLASCajCYrMUbqJoRjKVB9TZBs7",
  "key12": "ZVQCYA6a3EAyxyqZY6iwiKmdgGtZK6c2uhCwDq8K9Bq4Po37QXLhcGSBFwGWCbf3JsVY3mqfBJ8QafaYfKqyPgF",
  "key13": "29jSxd2GfqEWSoGHim71qiPuRQzhNH2KgTCkPAUFnMR137zTcQM8sqb4CA5C6P8rdkBCKfSuyJaZGLPUMKRey2VU",
  "key14": "5D5j7tyaCJne7QpEQCChm9L2VPydvEmpnh69ajMpNYtLVB5ATvHsWjZiyWTYbUpaUUA8eLLd5FyqVY5AyK6Gcuwk",
  "key15": "5BNLFry2W57uqofBpm9miiBRfc5wM7ACd8bTvVHcBoLL4hSXtpiuM7qfogYkaH6tjyeGg535vNgJNmU2q1g31zeJ",
  "key16": "665Bon9oaYu7PJVTzSXKxZWNj1kjKP5RZPhwTtfmjLX4kYy3BK7tvvirxfbEBB766Hx6J76KxSRuRQuE731548Xa",
  "key17": "AyHqDnX2WX1Jxv2uUP4Z8qWkw4C3YcsjxwDQ9G8D3VsR3m2VkcnZAemCtLeqaF6NsZDG3baWZ4DyvkhViqvEfu2",
  "key18": "31orXmgcRKGYvGiatxWa5atzwFXaaDbXhdKdYxVfzJGDtcQsLLjKaMQbgvpQ4fXQhR7NTyoPF4eVPUVNZ3BtbEyk",
  "key19": "3JtY2TuY6ZfMYym16bpLtgRH1ZggWoBmVXoqbfeSRFZG4nBZT5Rt5ziFf7eVW4CNTJmQ8haDqaJJKLAt5nkicNZ6",
  "key20": "5px1k737VHFQ9iMofxwCnCRRiFvzzKhAzMRxR42BUWhwwhRHUsqVWCecRgQam15GAtQniPgMv2ub2jVipgXcn9vh",
  "key21": "4gBdKLhHuU9TXp62pExfi81MkXMLDvNFNZVgWeTxpEjH8Czga3SCzZhtpAKu553VQktEwbpkShgHGxaAQo6qdfW1",
  "key22": "4YLWQouJTVRk3ibwqfpqo9QxRezRr9gopbDKTMR7A2jkBCvqg5gNp9uJhQRqJraq1WfJFyKi9GtiDawFBHvuNCQv",
  "key23": "2en9vMCrHmvZoYvHSCJezzaCs3drGcDzmu5u26bjByvKg4z8zZWZXcxb5u9Ji1naXvdoWdA2C5fbyPAsHevyJurB",
  "key24": "3BG8Pb1q6TE5c6XL7dp5bqCCLA94HH8jcgf46MRoawPz1TFZP9mEhwYCR3k261EQDuNrbfzuwUf6Y3nLtf1xCgH9",
  "key25": "ZXDjeZyqcQdNqitANdKJiZShVXgbKgHmGBatirofDyotDd4UWqfn3SJrskMPJd86vaAH7KVyEsQ9RTqsHrtb72q",
  "key26": "2B7BQE29YmzD8TdHLhrDwqQtB3BpUBpcvfTSq8UdTaBAx7anQagrygewaJYJyQzBLqaWRiJEY8dXyHD57cH4GTmq",
  "key27": "4wRcVcsvKVQjXCwMxWgeukVmSbf9HNaTHvDW5u3ZsvxZND897zYxjNQiSyvXXJXZDmPveMM3acKqhm7XKj6KHqAw",
  "key28": "4E7g26kccPhDTphoymG2w5M22t87vrgGr4hXH4k9T3cQYtkSaJBnY7PL3FGgaPayc8HiabFDZkZmnKBwUDaYExzE",
  "key29": "M8FctmtGBNPiHsL1zPeSofCXs72FWtvB6ycCbXZyeEkHkxCGnULYUKbesuBpZaNqQX211QhChdcBvdipiVLuHsP",
  "key30": "KuuqrUNyQ3KmBg7fLAHhMEYW6DgXMiw2R8vNeaifmRvJfdsdZ5jacueGVtW5DsP3HfFKm54h5edjkHXjXE9Mn7s",
  "key31": "4kNGyjWiyXuLbGMKrGnezT4GJYAcn64uiRsG17CtXCLuS1EQySsrVMiQNFbAqomzj3QavcAVMH5MfupgaaWLRyN",
  "key32": "4uM7oXkNfXWCgfGsippEjaaMkKxMBjNGPu6oUqoHmek3udEJZNv68S1a8ASX3YrygrwjhGrgs4mXQ7fKxSgx719g",
  "key33": "2ZSeHCdxUTcoNoA9P1XizPk7XdP91dmgn1gTG5FPCpLmbAXqVNkRx7XPyxSFPUfYz4Q55QaHLw61eTakSGtHTSPm",
  "key34": "4WKn8Y5CajWSEn1VtFhWLs4zwkRtQiF6eoK9wEcd2zGy1FYcBBBcsHeLMhqnDQrtS8N7BjPM7SwSfkL31nQYCaUL",
  "key35": "tCAo4fkt4T7e1RtPWrDpw9tHH3J6gJ5WQ7MwC6S9FoK7CKkXhB2ok1Sxq5ijcvZFk4CsFUoww75We3phyBkzrb1",
  "key36": "4osg9urgqMox2BefQFWPXjFgXUhdD3qNDFFeWUjVCrjwBRpK7rxKZqZg8Y5DTibRZzde3Q4nnotyXvDn9g5u3qP3",
  "key37": "3iDGCooeBdjzffgVG7qehbMiBMFwxv5TTTLTNT1kbe2NibAZAhSKKMNe4wVEpDv1jgAToMzRL6kmtpu44TgHmZXR",
  "key38": "31A4pMBGfCq3xJwRkDL5x7SmA8hZC6pYaaHT3pAgZKrTd9jmgSDXXvxqnha94TjWZmoAFiZ4FFXp4eJP8fH2K2Ed",
  "key39": "3WCZbA7xKNk9Ag5kwgz12fuN3ZiZmjsEM3ymQVZPLQqFm2Fosryubo5KkerYbUxwmyp17MLVh2f6hMkR72NvhE2F",
  "key40": "n28nuGVTeM9vFERHGG4Axf3nbFUEHUSpasY4EfrR4CpS6uQ6juQgergQuHH55aHKBAXqNZJdJjHLXvu2byf2Lyh",
  "key41": "2ETvVEu4HQLSRpvXuR9zCfKMAAowKVFa6DRDdcxsUgooSidP7Nd2zd1GAv22w8Q5aUZsP5aywirzd2QzLRQU24UU",
  "key42": "5kv2uJCpTwDVxtMi7q2P1a6WT63PLNsMBooXBtqyNeZqMUw9NDR5qVGVN25ofW1dNsyS8FXtBJNB9wYJABDYJEyQ",
  "key43": "3u8DPxWGcsAaNyWjXX1JMhqHa6Lw7vtZ7auqSmSZR2LFu4yKnVzA4vUahwWE5mJTr7V9ngJhFkxkyv9v9Y6w5nCD",
  "key44": "4JHcXMBFPmhZ9p5L2GFhsP1GVMXhNb4UKLDRDiZbUV7GDZSV5a3QM42c9nAHRcFBNNeRqTNXzSAEXyJCMH3G5kXj",
  "key45": "2mJXHC7uYkygfxqLVbi5NbHwHYJWYCXzbCDdNcepTnSTVaCLerxaoomvgpwExWmrEs4gxWXp8psucnQKUS9bC7UM",
  "key46": "4ngzSqhyg1XhmEGQfvcErERErcEYLi1RssBupTY4sUkuWWr8BCzWeXdrxDpboX2J63N5WjVPxhd7JQjJs2CRGLf9",
  "key47": "oybagBJqwHy4PumEVQjiyszPZuVQf855dU7hCsNanfouQY4jxgNtHYikQVSZKpHdJUUynwgY4ck4wj6oo6u5V18",
  "key48": "8eGLo45QL4QWAPasQFnHCU21z7QWnkfr3SAkR2exV2fxCazksh8ZRSWEzT5owKoBDa1FX7eqV57ZqXnJEQKSuLm"
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
