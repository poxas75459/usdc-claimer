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
    "3RRWo3hE2HPtts1JWZgKhJooEbD9AgNKhjjpo7tGkjXs33b4whXd3CSWHs4FLoyWHA8ajcPQtXpUkczvc8xQrzmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ua4CYfRdSMQf6KDBUe1rTdP8q7ZKyzrKUQSc4Krv3yH3FA2DutrEUKV9hrn86XxsjKGecCe19BiRyJS8VZ8RiFa",
  "key1": "28DbAHPMYysAyVTZkDpkuPf1sBg9q1vkLEfjzAFKyLw4fKKenmAUJnaruMNsnGRAn5MpQx5KBN65o6oZHtGzv1Vw",
  "key2": "5BqfzGL8UJVnr1KJ1Qoosbe2Huy4fNPkVSCQBVPSpQf1c6VwUJsB7ykk88KPcvVGoBD5VxoLGwcjLX4FX7npatW8",
  "key3": "2eP1veg5ZwPejYJ2j91FzcuZ7mVc39eiuSfL5KZLzBL6AwQbfbbj6xkUHduMPt3vu8p9ZxvaSZFPvPpqvgACbmTC",
  "key4": "4JCyauyZAE34dZwAzxasZ74TfGyN4MPyvXKzfxo2958daUyG6NXqDdi5PiA5kTa65vHbGXceCqYkC9mWuv2VHQtd",
  "key5": "EPeDTxJh84HdAxKQahSNrYmB9MR6wewsdx6BRmM26iG8PP3fb94ZmURnWpuqvMVShx6PQzcx4GNs7PmnRmefGZF",
  "key6": "2kw31RmxCauoJaK4iBMRFvRavKd1Q4kVvWEteF1wczKxDTcTm7YjDtUGBXZpPvRCcStEPF2kxPL5fLQUWHETitsM",
  "key7": "4x6bDPcivdhdTkzTVCqcyETUu4qcGqdVbDhqjLuva6JWPR21vwQpHn1Uh2QRrcCe99pD6ZA63pwUaQW9BFwZYKtq",
  "key8": "2PXgn7pGQdE7mzuroSY2SwmsgcaiBT37CadHu2SU9HqA8B1DoVRomyYnnvXtf4WVcVUgDH88iFkwoN3s8qicnWmA",
  "key9": "3CSrSjnkKkc4fYSRLoWvmEujzDQApj4RUphWhpaJ9zjPbERfLDrT7bH8n5HNtMHF8dMbeHBFVmJ4kARvuRwxNixR",
  "key10": "4qHt8DHyshqobyZQLYFRwD68qqZXXbM1f7Qq4QZNvArU1prQ7eFSipA4aiDhyBGH5sGMgGyPFfWWWWcwu7LGyPYR",
  "key11": "5UHH7GBchcge39p9k1kBum2shqEupSxnTCq3tMDeW9ZmE4d4s31LZH8djCRxmj6C2WukhxBmisMjU9WtfSyMJnPX",
  "key12": "GvdtUSZHo8Ex9WAkzKVXgzxCUdezAPgWEFeDbv4ed6wwLLhFKVhQq4EZVhH2xPpaAFFiKMgU1tJEVfk4747vnhn",
  "key13": "2aHfvmhAJpLgb9umbG2sYS2TWSXmmM71cU4obWFzvFakdc97LhmeczxK5X5zTUPD33j6wrZs5rNcdoBKfLgaxtnZ",
  "key14": "4jiXwgpawXkG8HPGNpw8uqGJ5aP1GWUjcdtG4hMQf3pE8j8bPqCpqKX3DkFstG7bQt7QBX1pQPqxHdD6uxkJwqpk",
  "key15": "26zYdgW54jJaN1MAgbnde5kG3mLmn2t9oFuPm9NDfYhpNNGR3yyAq8GX5yZiUqp7MZhFFw9fF5x4gL3LhWqV1QRr",
  "key16": "56qXSKQzzAX4AedrJLWxwh1hjKmJhuokyXotvVDYLVu6x3pgDDaFkEMknm2SHa426GJMB1hmmpRoNKTGu7FG1uEV",
  "key17": "3a5nAGQVHUffHpvy1tkSzG1JdA3Gf9CCk7459v6VDagi1xw2Zr5HF298u172nXFbu9eSJqDmJe5VSoM8nJTEySvQ",
  "key18": "jBR4EocbENc8kT9UD8v7YmyUQr42CijWcsmcfeLmTD1rUKZA5f3qnFAzCeLgFYGKccNKrNsAzyZRNwAaCkbNtXo",
  "key19": "3ndE3GnWoaaQtoXSPyCuEYzmydeFjSWAhzQ6EUZUV9Q2WSJKxB5u8PdPrKSM2iNe8HFpNEu7RagFQEiZuLoprqRk",
  "key20": "4TrCsccz5i6c34imqRj1AKGCaRXdyfNJrHjD6i3Y9eihGUdzCq1Noj4v5tPvYaDhiFB8mqFZNknCGcxysH62Kx9M",
  "key21": "63i6iMiagpiohFkNL71mzzCBFDhBo1hM8avBNY3ZAu8YLwyHiiHYvmKM95gAC1r2cyEu7zqE9bzbr69z7MZcQehg",
  "key22": "3rRExxR7eYCPa4nnDEboVMAhf9q9t7q3iQJvNwNXeBUr1FvPjF86RoYbRraHRNSfCAqkihosppn4JxdFm43MH3TG",
  "key23": "3mwgJvJTpK8R7SzB9DZqzozwovM4YiXGrVX61fXHe7fBeYW8UAMVwHfWSoQH5RBCxz4WweymXWihHsTLtmvuhD4Y",
  "key24": "5JCk5emUdVAVscnmfKn2a3WzNtt7dC6CnHqu2CJATeLP3SgbrtwK828FBqEnvzhjQghcR5hkgT6Qh1EY8RYUrrqE",
  "key25": "5QjsoRc95uBzVpkrW9hxDw7hhmvW6xPUdNFD6UyvXz1z6N2nrK5pRT3ktytVi2KhcAGcXv64T11ycCe8uEi75is1",
  "key26": "RmByxuGRPUsKiuaAGS5CqG9g6HUpNvbfbDqfR421wmxChJYN4EM2DAsPuHf5FGrJS4yyUwPEWkrk5HvgEaSGGry",
  "key27": "CStQ37XjwyRtkwKr7sujDX1cfTzTsDP9LSgzAV31M6VkVkNCJxxbKhp6vF5KZv1AL7cy8R9fcYfgozADgJ6Qy9D",
  "key28": "hBcG6jzgwoQs5t3wW9RCfk3JTq8vtqhZXkvSkauGZK8AuFsYYZveHdRUAiyugui1r6fnHLa1WCNfGuGaEjsGN1f",
  "key29": "4kYYPDwBJHfL4GZTR3QPjcBP1SCuKEMX7if3Hnvu6AVxwqui62gY1JtxxxtSZMQNLrb9yD41tr3F8NDQaUYDzwF8",
  "key30": "46e1Ds9BRK6ZJCwU23pRHRfXXtkHpN9pJjGbedafiVCDW1F6hbupiZ8mAS3v3Tq3wPFS3s947pF1gDBxqGd3nYwB",
  "key31": "66m3nijsxmd8V5JMZr4hQ9Sf9SqUEnwjwCufovfoJbLyLA68UpQRVRv3A6nzrdso4y3MX8yida8M38ZW9BFLPyP7"
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
