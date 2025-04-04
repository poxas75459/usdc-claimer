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
    "xrBrEAFs1sq23T1qePhYuZZAaU8ZrPiuH9PbWjpGEqMD8Y2wqtqBPqXWLq3jWyxxrChnktDT8Cx5aB6avGLzY7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6A4T9qNiywiU2E7ub8Zx3sFeiAGLQTCwpuB5sYcQzpzWvH5LmM84DBD54QUbmatKX57LSUAdbdccdKFtRSQVxyj",
  "key1": "2mJbX4bY8X7tZniVh5agkt4cHFU1Uw39KS5BoY9c6bCX4LEm6wkfbomcEVsVuMMm4e6UNoKU7nPLsyTPhBj27fFx",
  "key2": "zGQZV2MN6ZuNoEQ6BTip2pWrGSkcJ4BorZETtTAMNP6dsPukpvDuTUAxqTNUhFMdEkeMnL6Sg1WEWpnWCyEQ7Gg",
  "key3": "K69LTxU2TzCJ8AgpA88m4ZsNuRJdbuUjFr26JYesHvCjeji2nqsvM6krU5cdyoQvb3nQ4stF51EchJaaba9A5aR",
  "key4": "3DzhhDibHWUfzVsU42zhpQYcpTfhjBzj34skrhdHh4LdD1aSjGFRrE3hwqQpL94SctVENNiTBqwnuZLMyBGKEmNm",
  "key5": "4qHFAjr4bEYbeV7hEevPDVHXwnJVam8CJ5dooMdQFpNFcSfChyLMBErehaZQmKjMAkLXvKy4txJyw5FvjCKzA2nF",
  "key6": "sNkA5BXSPB9rn4dLgZcPFMM4dksRcASdNGtsUzNksMSmttVLNWhZBM3nWUVUvt4iXcXhwTJsEqC9x9UmNWZLkn9",
  "key7": "4jmi15APyFcsE3KRVeQAAqV7Crr8eir91msYeXmpUPoM4URZs2VZw1UQU4WxNwU89MeG8XnAVAGH2ugeMbdPBFit",
  "key8": "3Jc9Y2BffJy5AJdATKr8L4PqK2uALov2nExxWhkeoCPeQVeYKS9da5zBCafPe82EAqANvYPwj7aFbDVEFGDkvYEb",
  "key9": "Q3HWHRcwCTbi1fc6ZR7ZXPQkKvCVFigWjtfb3EuZ9FyhPkd1zLx6eAzwufS7MtHmVkAapX1qR8hdNKwTJXQdFsW",
  "key10": "55DouHExmoHVgNaiVzXxbTha6w4fDjsKLfT2z7ZW2WxNpn9reoCNuN6HLkGW8KrAi6rFM7GwEFo4RAMV6dxT5DSG",
  "key11": "5Mc54ZHNwyHYcwYKvyAJP8e4JCi8a14nv3xa7USSoTR14roB39gxW3paebK4YumTdp6ovWYEQLR2tsmN1ER3Z3Pf",
  "key12": "57JPVeeRS9dBEYjNL8W9caM4E9VaBcfJenR2niCj1ToW8Hfzz2QDMqhtXdJW7ctB6zssEBc34z8eoJDCmP3LDTJb",
  "key13": "4SL8GNxS4zi1Vzeu78H5zUiVsZ9bwwC4NLC9njwPLKNCd9dYbqdsLoLRkQ99fPxXnKmmWwPBTVgSitPtAMDDE2TW",
  "key14": "3L9ZsgNaD65pfs8suprJrU5tDuQ3B5KKTqeB5hKwSq7aUWtTaTzdXYGbT9WwStY2NmSshGu6ELFsnTxQcaoPixWX",
  "key15": "2axMRoNoAq44TLdkNNjHLw2W8GcMeuaUu7UDTi9JLn4ajLWmSfevWjnkW6cRJEL6b4jwG1dmK8bQxMr9GJKjbUHC",
  "key16": "34oNt7Hi1f4W3mK4LSFYhUsFuJ1EAJ7sLn95Jdiatg7XJmafepSSHzZZWn3SxwNuzXWuEVzzJow34HkaNvcZtxW1",
  "key17": "4RNcShcnLDmskn2f4KJHFnNNmjqZ7XyA9eeWEcw219JfZbV1QrR115g1DE8iiKHaoZfE75DdwL22zHFcHxcfsvWA",
  "key18": "2xnqZB1Mse9kKVnHshW4kGC73ogrxYprncyYW1H9nJDmcZ9zKM5rtA3z3q8Yry12pfKv3XhnfQDE1tAtg9BixGxD",
  "key19": "4kkpMW3eTjqCRkvHGr2VDHWQjn84M4cvzWcVmYXiqqxUhQYNDfCKmcEebzZ8i2ao6xSMHKsXo1oUV3FnhefXxJ9i",
  "key20": "3tVzFghsW6CbUGifLvuJ21iEdBRmq9RAcR1uYaR9t5Ve4MQTjBKQcPGoSVi8GaHd2Gt3sVTbnqe1zb5iazY9sr2P",
  "key21": "2xmFU3HcbiCHAC4JoFTCqg37zs1GcsPzTEiDDpCkWmntupgUPuKh9tBS4ptWEc7VmcLkNV4NSDFTbVhozkmQAtfe",
  "key22": "HhUjKTL3iJtT7HK6aKvMDR4wm9aCrcU2hAUd8FuCD1GCJutGDFWHHV9C6jVEUFgn3w8B3z4wZKNz4yPupH6zmDr",
  "key23": "mbwNPyy4hwJRed5bbjoNFmwwaDnFdwmWYVGhhRyVZJ7jPX3NYS29vHz6RQUMnoDQtyQvypKpXRUHDjpRuBUX8Kd",
  "key24": "2frTXfWPHMDdMfH1oWncDAHvTbB8QKnmkqKJCuJPuowYBzCXXC57y7PPeTWwZtyXzDfpCvknX9x2yq9VMudv3wNm",
  "key25": "4P5NniFQLdBvdsgth87EyDJ2ExV9Hr9kx7VYL99EDDBtt3Cm6bRwqhv7n4WRwTNxebvqmpy3KNkSQtmqUXpBeyHa",
  "key26": "4PnNDYdciw4dZHs56ih7yc6rEDK1d4nb5U1ujwZA1qw5H6HDmHBeuhvfprkiNiQXVa2yPwwcE6hz9wFFe21hGWhg",
  "key27": "2c4UeGfgKgiRYRg7QaEpdMFVz3qMUZF25KJqQy237YFxoDte5CUDvVeuUodGZCa3wYdL8PaFo3AqnT1qDgmMtwS9",
  "key28": "r89jWCuv344LoAwGsKSMUjUe4hSxfnWKCSn3YLtaDcM6rczZHRmt6NqseBD5dF94ZgLzuXQcaagz1bBhX9RvBxQ",
  "key29": "48nFYDuR5e61cFpAjwgNJGRzu3BDy8vpmcrGYxRm1X9hdPsxrAk97yDovEeczrRJoh2RWiBAJLwdXyne9PMnLnQm",
  "key30": "2sQkwYaQjJQQNDfzHhSp7VffPtpk5VMzR14CvgKhJ9z99UMR3Y43u6jJ3oVpkbAuLrJmrDNHiFmP56S4RGt5oezm",
  "key31": "62Tr4XyA3q4vPjtLHnHYtqyoWvwH943peEXBgZjYkJM9Rgz21C7Fz9bEKcMjftQtTr9MMYLb4ChWtyGQrjn1Ayta"
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
