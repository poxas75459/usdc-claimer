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
    "ocZkzJfZA4Pn9yXi8StoTAuX5yQN11iQFfsbUyUHnsrdoQ4njkULDSEYY8Cc47fECFyGteqcvo9NFzD4fj2ktM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F31qpgDrbm5ZsnbTBA2whoLf3bLSCWLbaQM47KzyP7m2bsX6EBLArSdkuY5qtSsm5jdkd9qCVYjowxk61tRmzdP",
  "key1": "R7sKYkNbqV7TVM1X2TCfznX3uVvMTPsvBZVE939YQdDFCGYqMSCjSmnkfYVkvvf69QzAE2UhCZuJMUBHYA3cEKa",
  "key2": "acehcNyYnKdJeSaLZPdkesgHCDuR3Zo2n9mj5fcGd6vQTA8uMTh7KwpgHMH7uGcChWGcZNZbUjLYS66pkkV5eds",
  "key3": "5HTyZfV3uQDRW421rWXKKgCYUi9qCzexVHmWHAZke8BFdfFDQb2bdjsMEJwZbVia3VfDSU9VwGEN6UDs74TcaLyD",
  "key4": "5Ly13sM9UuNLdg6nhE2MDGNrxieCsBzMXaHhJoFpgBm9TAHsjeHuLMjLvhpjBAW5YH9o9Qy5i32vBwGstZVgtfw4",
  "key5": "tZQQA69ZY3E3DazW715G9CH4Vr5PwWGbRG2PhS1EVm62Ki4hWNsW1i7iX6okdFTTcRN7n67pZ3ctsdCUh1A3ryV",
  "key6": "RTzbquWwD48GXFgRR7owsAsKdzjZ1gWGcpp2AwhvuvsrbVWF68ENL4tC4pvNUWK1uDHbKn2c89rUmJ61x8x9JZP",
  "key7": "4ahfDKXLtAb5DAtkpNPSE3LYJmprjpFVCa6ZvDMqmQt2vQX7N48bwPNcLvWa6oHG4gvFEJudGAbiu3gsirJfeauw",
  "key8": "52tKSBFvHJgQw8fcgsRtyspP9KiS6rsr6XNNKDkR6g63Qhwbcm5gkywKPgF8s7qGVvWyXYEqRNqH85BTx1CL5Pzn",
  "key9": "3cPbkGeQ9GHhyZrjvfvYsLmkVQ9JgY1yVEYJxwBNXvZGtFZN4LTtZc2XLyLEQu5msFjsEGQyDus4TriQmHxmN4Fy",
  "key10": "3zFxfHcU2SZYhDZ4gt2SQcoJaZQMQebNoNRXhCpFLRGkyaWZNiVYrGfCgkrMzvuxWSbx9LxK5FScdyJGgbrU7Mnj",
  "key11": "58WHmnZSucBhrEUrEZV8TYLzUCpFejYhTrVYwrud31GQwP9c4AEJYKMthLZ9aSF6S3swpA9vYPyuh2eLHzHRh6Hb",
  "key12": "zQ6UVAZF4eEwNiAYUFDuVzxBLBcZMUQWL9pWYcT7myAYTNjSm8ii2baqCdKPPNKEF6P7kok8T634XKDsUu3cppB",
  "key13": "36vWW1DzqNzqv4gqFQmH6Eh2xKBF1NAhzovyAETgGKksfAiKXvNHoJ9ANXpPUi993zeq2W2frc35yEZcNjsTMmU5",
  "key14": "4yoqktudgFiU4vTA8a5XbpxiRmwt63JSGLc23fz1ddGtgjANQ5ZVZDJoZpWYKT2Ssvp2ESzTRPVx3NwP7SnFtAAZ",
  "key15": "HFFQAu292CoFu6LADZixNhzXF1m7TwFb1w8EYJZ69YLfRKdqiQiZieJXCaifwpRuQTBFv6rT5LWADXWXvaQqKWE",
  "key16": "2Ysv4M7i7h4ZNFtSXPH8NzyZTC9uba2sK7kXtuEKdGMpJjLaza4mFUz8qNsD3rKGnQnRufZcfVqFtfr4UL5nGwr4",
  "key17": "3btpcSikd88wKEbn7ioAQZhgQ4ABBz2Tcj3RwcNyMnA9G1VdjXC2Lia3dcbNrBDTcLkuC6bf1mZmHzkDhFF6LdB9",
  "key18": "3M6y7W1AtxkhyJTdA4gd3njci35hBoJ3kgYMp5LvAfXLZxdZuDLvwZXZHyRnh8nvBzdy4Cvgju5gSsYjTJicHdXL",
  "key19": "53tDJMhk8GCEqJFAbTWMhtzgdRsKXoXYU48mKdxnZX4dVDPGBH91SB4QLrQ7wifxnUFFU27xNfFyEgMivrzJEecE",
  "key20": "2B9BnM8RxxD15CEket1FLSZYaz7N87S5JqjqzXYYGiuMw2ukT5QvjYaKzCd3XxxSPZ5z83jhB8TVdGDQfQoBmDUy",
  "key21": "3nFSZAmaUuSa2GWzkATBAGnr9JDxq96whk9VMf7DKLG4s6BUfMY2kLTc2uAguKbmt1wTiMmKEPnB9UUPaWZSatYQ",
  "key22": "4C9HdTAhqstNbHQPMCcmxM6HJ1R5fZYbqHGDvQbkJW6VU7xkz2t9rR9YQraLvRijvUfaBiyKnT42KrwQGGGcW1cP",
  "key23": "2JzegvRNcroneknzHTPgWAw3Fnez3Rj3qbFNVFSnRSsesRoRxZatZYeBzEbqMMnR8j6fXMMb8yUonE31EquFYS6C",
  "key24": "2fBmMszwgouMy88JR1oHZy3RwtmMWKS2p5r5SXfhWQ1aP2AX7FY9XTEiM5bwVeAJ3G5s7c4PQRH26ka4JKjeP6Ay",
  "key25": "5ZPZJGXTERgzeJq1u5iSmwmTxjadpKHsN6X5Y4RVBHLH7UjnjuWHvurG6cMkuDQP7Roe1frc3vqxzQtpoSgvCT2o",
  "key26": "2BnhnFo6EWqX81GXYkLARYjH52bcu8wkTdhKfBuFofbVurCp4kSVz9KRTJTePykAaQSuyQtk1CmRHHWvFA1V1vDU",
  "key27": "3ezxzHwL7GKLfsf6R9KJPppZon1i8aACTXKRoiVDN9p2twDEJKnnwoNf7FyBxidQQCPin2oiHzHaVMQbWAFFpFTd",
  "key28": "2ordN9iy1tffqrGPYTFtHCkbDbtCMo39YQsg7j2UnSZfwwTNNRUVWtB1ky8QhJ1A7Nj8ky6BEBPtR9guxzK9RCvj",
  "key29": "2zDUTm5R1yucsVqwn7dNdcaYoPU8xQzavzXRYPzKq3K8ZaT2JfRhycY2xCQugSc9zC19RFjMViUkZeuDebVwepmb",
  "key30": "Eqymow6yXyDFJaThAup1yx5UW4c1S9iuHL1DeFj1qVwHzbQ2E7FLzkzieJXLT9NCYJ6G3SoNcSB1P3pxUBYzrim",
  "key31": "UvvPtJUKeAqhiCak4T5deoVSGH6yPjkWzbz7xFdmAPxZyj9yz3QDJAZ7vfsrAp7EKg8qSXpppzuapBpSBiutYHh",
  "key32": "LjdmLtXk41imEE6EuittDW15D8NqH9gMtJQFgrayQPYJVdxT7SW2h6cUK7GcrZokdwf6nEzGFBpJpYGuTkVXDux",
  "key33": "VL14E1VTrLc9eFZ8MShnXXQYLD2FXc3kJA3po5AhVqN9T5muZzmnmrBpidEtqtiHH4Nj1BvNrrLkCR6LZ7B9wo6",
  "key34": "3yHeU5oaoe8J9rpYNiwpqdjHV5Dw64gZmTrMrCs3KquKdxqMu9hCbBi9WhfuwS8LBfnBWX6R1duCLyP87mcZoq7r",
  "key35": "2aJbVKmdz19zwBnyQyBk32XwoHtJkiW1xFxGTkjiq9YPE7mBgqv3ULwvAnjZB1voKWMfB5qkHB7axszPKc3mSdcd",
  "key36": "z7oJSrzGPt6vrFbUncvBUgqFU9Ex3swpR7RPR8WZNvok7cAHqPpXeSeKTN4tcNNuPNj8QcMoKScxtcwde7dA6jA",
  "key37": "4Kw1StjgaYMaGBMkGFsTWeccwzdyB1ByDax8eZUeWGeDMKQiDSRVnKTGAw6sNkNs8GLV5o2paKA1mcKKmw697Gar",
  "key38": "3HkEhgGwSXrgpxGLDnokBW2pQySkknUhJP3zGEf7KMt1K4kFDiX71WFN46GcBgk1eh85J6Lw6qiA4f23YzajTjMp",
  "key39": "25BwZoK1vkLuiB5Fa98fMMfh2wSgqmnwENeNQRKBAqxF3qqYZyQL2Lq3VWZzAbnkNJgqwyc9mnNx2YvHExLwmR4c",
  "key40": "2PW8fnrUezgDUsYQ4vAAspLSnCuTDkenyYQn4BYFojXhnx6p4xKKFkUr6H9TvS4juVcT4yg2d9SeoaHXbcY8J9ug",
  "key41": "adnwbKTautqKQWqy1RgKtDdv3vYMG5pwtzMuLz4a7eZf2i6yULfPs9drbFhKMnAmweZpp5F8brDWDLSu37srETL",
  "key42": "wMLypGx12dP1e8Jig6qhsuY867AFTHKRZd5MkWsBP4nyY9GbYtUmeoTfg8kuY76Hx4RJ8LQSs9nKLeyX6DweQKc",
  "key43": "4biBKkTpRWXhzB6QLvP5C71PtwXshW1P63c3RQtmaVWnGrG3fw12t9ZMLgDVKfZ3q1ViuT2MNXDFDFbdBuCVw8Pw",
  "key44": "2uTqGL6B6Y9rR2UMtUy1QqZ1uw4feexkkH8c8SaSfDJVXSF2dr8oUAT3DX1KkFJLFAp1d6wHvSwqX4JpYmNAoCXP",
  "key45": "22qWqJGWBf3gs3uGUibZNJu9XVjWjd6Kj19EYp35ZVnmuPkUKujt4HsGk9Pa5G1R4qoBP69D3KPJtZLLnyPPjkVo",
  "key46": "5xHXuH3wwn3SSBbwZp5MFkBqfEBe2HYgmKZG3yGYmi6MCznLycKkYE4t34p6MDW4iS24eE4XdmMTrRNTTuYQ8AeW",
  "key47": "123vbUVaEmtpFrr1oMegSGzLXyDz5pzHqsPj7fx9ntb2pBz8b9dZoaGfmKRLD1wo1C3T6F44Hq6CLBPwJZkXYK48",
  "key48": "2s3s2qx1AMmLcK7MHwFUixdPQHJJ9o2m5LjB6juibVBpwpcuB5HifbvevAwtoEL4KGd3abn2hmwvLm9oTiXb5GUr",
  "key49": "5qqNSDbmvsTezr8m71pof7wgcuL5HpTudWDkFoAHdX1h4j5mVkHPPfPWDR54bUxBEJTYA5Xm9WXNjgKb8FfjFMaa"
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
