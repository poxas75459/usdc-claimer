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
    "4THQMQT6zneEt2JrBZboMyB77jkRMdNqiD4RfwyvWt7cqQyf6a1XCyuUUfLGeVks9WihihT5MK6revnLwHH9Kzd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GBk4tTv6LiQEx36Av82cUF3MXqmkK7FumerpWKeanpDRp8ndf1dJjdsKqw2VVmyT2JVp92eeHqYPUVdr5nTcjV",
  "key1": "KuXUzXSf8KeKDoNznWPRdz3VSCy8bnR9waS2TXQy1NiydEKa58v4tJ3CyLSADSznKZdJJwsz5p4X2bKjdgvW1Go",
  "key2": "3fVTzwFs9bGbUS8tqeQA2T9TYYV4qJb5G84AnPLVtgTY46yfatYvcuPjchZ3BtfGTQb2VpXmvhVkvozBGBx6yDxj",
  "key3": "dUjU3SCMPXauzBEga4ZKb4GT5M33q3LKGg4Ya3KUUV8gPpnrcB42w8kC33PzEBy3EX6owwSFPyvWdjPcAwvGwZH",
  "key4": "2ACuz3Fr5XLu1TXqCXffnewZNxB1rRPvzpqqX2M4gywQXjLkpKad2nMBnzGg3d4vVdBNxvu4BDauKEsAjkwqgtiJ",
  "key5": "4oWwoG7MmtUgRDgjG7yzGuhot415xFDP9V4ruvCYKtzu4rLaH8TS82uFrNn7sjMQ7J98c8VCav3F9LZCsQZp5WEc",
  "key6": "3z9QTkzY6paWdNWFMaDqypxuN55tytR3JLLncbbnmRr62cTykMS13rVokQFXPcRDjeEb7BNskAGR2ji7VP8Hq8a7",
  "key7": "29zWeEbiLwWEPxB1Q7ih466uz9fAU6JcV6MLQUqyShDm4sHyUHRTCnsPDsoHrxS2XWij3sYZHEJiDw66hNBvWVCg",
  "key8": "2hD6XDTqisgdHrxL5UNUhT8qMpo4xRwaANRLC9729HG3tR9wpUJ21Wr4rhLRXugkFGp5DeWA1SVEW6KX4jkDCnwV",
  "key9": "2TqoSGtM5NTG527dJDi2pFnT87fgMyEFGLAC5WCLPTC5CJD4Y1jzJCTBHPaKm6a7itcYqvQsXjg3ApDZ2Cdh4qE2",
  "key10": "3CVQiDqovVTWjXYCFtcvGY3GkQKTLeex3Tq8RiSHcnRBBkCfrZwjxNh2Uxi7bNZphZTiTkr3rcQmgS71XfpEng1m",
  "key11": "2ArB1gATw3YVY38YnPKvSNmN58ouSsfPnwth1ydpTvaVHZppnPNEksMfaiF3SoQJirfo5unPWfCmkTFMu945buu6",
  "key12": "4YKNAyjVpDPXXvAvjNfzJ7uxxHjtLg6K11PmgzNiJVqGQJZXjeGC1RNCcUUjPgibEy517N4qYfi36T4kA4sKZQJt",
  "key13": "3yRGEt3JtphocB9H69X7P8Nirto4U6KfseTKjHPxFna94ij7YmEZAvjttFMem73tPi9fDjhJrZqbNpiCtecct82G",
  "key14": "3AJkwgvh7oziCssty6rJknVov8yNP8uA3pmeHMrHJ9NYpTzLrFcDWfeeyisrbz4dyH2tvYarBcYxhc2ZFXUKbXzN",
  "key15": "4dthY7of1yXWmp9XSgmrtFBJSXT8ucBafkQyvZr3VTinAyED2n3KHrKszPTmyGdnFVUbec14TrLaN9yaph8BhcMP",
  "key16": "622Za82o9jHMzAxynQzJzebgEZd4bStdazxH7aPDX32eEoP1Uqcd68PCvvkLaU1xUYiV6hxpHsAZBnF12AXKEVgQ",
  "key17": "4t553Edq4wpWWkyQr9DNqyqPQoKmWJFmDYYPVcvAMrV6YwvJtsZ73CyZK3RfY2hetrmotQu28c67Dqy7wGAf6AUQ",
  "key18": "4RopoA74JouJFXYm7gxTTRUG9u7QjkVnHPQChhmqQAMRNoBB2oqihr3epTzVmhKsqscWReoU8xB61CuPo8oeTnMt",
  "key19": "5mSexKhjUFuumRt41B1nrcumyG9cnq9pwdumpVWA4XjeKJH6eyVCQ8xrN6JHUXcNxKb9M7oQGz8eQp9G2kEJNV8y",
  "key20": "5vubNCR6DmXBst6VHKcwuJDSPQj8xpzWN2qtwvRfez8LcRzgaYueSut24Hpa1GRozuvrxcSRdgZ8FNXfu6zkZq5L",
  "key21": "4YX1fS1fFtx8GgwFE8bmk8WUJnAurAsAwHdyaey1XmXpVdMos6zxHFDLXDCShMyJ7YqNZhb5LXdF4jAnvn4bqmLo",
  "key22": "2ACwK1mUMJbBLV5vg31BhshQkT1Yq1md71pQXDz4tQ8Lq5FrxJ5oD8j2DLZ2USikEmESSkxL4NpQ2bFu3USU5XKP",
  "key23": "5JymwbJNUx3uu7NR5ve4J75dHsVBKaRSxrbqTJN3jfR5BJaNkMLae5hT4v7yzuNiDm5qktDZdZu3Z7CrCgetuqeX",
  "key24": "4eCGbVxPZwqtmwvQJo8vBuQZcKdCFBk2EHqcb56QZ1Bf5oEYqktdo6htUMEXAY4EsXxsUSwV7FCmgCAkw95K16pZ",
  "key25": "2nZsZFS6bwXcTcfthkP8skjy2Xcri6rsfAFZnbrphfnuwTeoWtqhWGtkWDR8xihkg3PVs8kea8J3NkrV9aaqeVUe",
  "key26": "522R5aJVf7hTVssrizREsNiqV495akFjmfEEWMHV3iQRtGuMnninrokm4deVVgbEdNj7fVk6gRVghcpcmovBr9EF",
  "key27": "41JyEU6bbbzCtktet8WvJLmPzsSYopzBXCZK1vAzQpBPR6TDMfwKp8cmddDgeYUK9UNkZrj5FcC8nu23gkRKS3cv",
  "key28": "4jqFs87ThJQnnNbEZ7KNY9QbQzhAzHYsZoEYazGn564bjNZWBZ1xpNvHu5SZJ6Jw2NVU48MKqiXVjYt4oKZrTxY1",
  "key29": "3qvrfJHXbLNwqC6FKtdTcrFYcrzs8XC4xQzUuu8PVNLQmYwFmthcWDFdmaAt1WvntqsJ9MgHbqvs5j9aTD5caFuE",
  "key30": "5t46fpQ1ombMjgPJr1NMjLij33RRA8CdtEPeaBpcW88Y4dj8FEyHUtHcLsrXfnGYJivoRnA5goKiKk6g2ZA6f1oN",
  "key31": "2VEgxdm66zWhoXkE33AacfC7ZmYjR3AowTUS5Y4cs7kRhiS48Hh7wc1xvWHmgJTguAqNMXnsQek2mdsReadg5keC",
  "key32": "3ssqxybQg2yENtUrBhvikAgrWRAxWuNxh6ifpqwsrQrYawFHkgHf6C4KHTHyR2cKeEunp4b8uawmBHw5G2gmLH8U",
  "key33": "2oA6SpaAD9uWVuxLAfTWtC5WHGxbRwdo2nwSxepv5mRCki1LEzUSNrJgCf8aE2WAniwZe75Thc7ME1pGzzUo4dKf",
  "key34": "5uVTSP7wXAe61BbdDK5hkkTRAJbuCN1EySmkpSwgX65Se5PcGagXJR2DBwkPFeW2GsuR7mDzdbcBmCExLfJNxjZr",
  "key35": "48UTnABaq4Hmk5TkyyzKiXziaTZLCABpNtHjXjxyewhMLiPiBMxRWiNRfU98Sp5tkRqVtKZW7eQ4SkAjhheHEfYu",
  "key36": "ooBvT15nfXm8EsQYjoEB7CiHxnJ8BwHeLWzrfgErEE4kM8qn5HN2TDrsM4JovkjeZz54oDHZXDqMd6LEicVce3k",
  "key37": "3KuWTg8bdZs5jUPZfQNkTeYZKRyxkubwvjVkejtZd1TnJtC8PdyuRYqb7iyVtTigQHZ11WPc4SAitrBDmCaQRvXB",
  "key38": "5y8cytP11Yxc8iPtoG8kA4idbPaxeXCJp3sufB8TaHwLc7ZZX7SZ4ZmLAsfdUa3hQtgQ7tRXuT3d2dithZHkLCLR",
  "key39": "4VLp7wPyXooL5G1qWvtv6QJEH4RPXwycMqu6AMSRiyh1rwjWDBCEiRoQSzDngmrCDe1zyUisEpk1LzdZyLdKRzMy",
  "key40": "3Hidefd6SiHdGKXDy4caxtdN6ArGfFVuEx8tJVVwU75kFeMwUpPwWup8ijYmdHoCkLPFRPtR5yG5mj1kMbnH2GBf",
  "key41": "5GBpsksN4G9g6HWwcqabHaipU8R3LCDBeM2zvAvxBUGezSwPHpRcX6MAh71fYCVwD9SkojtTZmGUedUxZx6hFPrp",
  "key42": "3KzEsxdq67jvkZ4EZAZjdFd9KgkZgn8aDRGaoGdLeC58zLNEGBY58AG5HdUpjx72TVcsVKmpvFTPCf6ooD1B2Vj3",
  "key43": "2679DJSF7XsspXvBnENYR3z7LND6StT8VKQAAwewkrnCW6ZdijitvMRsLzx4FzJ8hTH7pKUp9b5mzbVrSr1oVZ91",
  "key44": "4fHRuRPWiJnRyCGvzb3awwJ7zQSkDsNS3KKhfLGZs4F9NGsk1N38SrU1oWu4ghY61misVqWtoa1VGnLZdXsdqbEx",
  "key45": "4s2L9Bm54puydZrfsEVPNTyKb7ZhqU7bk2Bw9eTEMHMa7Zp1ZP5ycaPA4KxQEpcET8Pus2REwfCe4HFbCX1cdBWG",
  "key46": "31gZpcAWUULqnmYRGsuGJANEnxsKXuGjU5VUAZxMWNmmpZrMruE5f6Tr3bR4wrfvGLfj6WdASizSJYiZmUzX1BGU"
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
