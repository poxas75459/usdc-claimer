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
    "3RLfDNWvsBmLkVmzkbnDJeFQozQBuBLjF9gPpMpEiBqvZYSEtiuLDMNcCxWEx1PgH6bnCq71yDrdY4TzK5TqAoX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kH3pu27Arb1zrYntwCn9sZP2DgF2mh7XvauvLPSqMebDL8BZJ2LcBFuJ95jEpC72eBzP2HRw122smHc1M4MS7xN",
  "key1": "4HLnzGABoTpTcfdSEd1nF49Tk6DPgWUA3kCq8JYgFYvLf5UpwfCcokxrqKTGvK1F8ruzmn48ateF1PeU5Vuxxh9f",
  "key2": "eEZVVocC4jVACX857GhiwRyTPk2EYEenSDamYakPnjdVhsaWnPfR21EK2HZuxETufFwH4VR2aMW2G5Zgtmqk51M",
  "key3": "5PgxT2ndATFqj6eNCkYHU6AHf8mKt5LwXQRre36m1v6saJMyoWmpDEm3H68iZ67b2Q1fewqT1iLAmA8oVyR9Jq1a",
  "key4": "4rfQRPkQnRDdaa3SH2RuwL38Kz8rrRo2kSLuphqtqVChRrDVrojcxvo57GrCzqaiXKWx7mbriyJVyTr9W3KQ5RsN",
  "key5": "4PcErvsfSkhQr2FYKRydqsGixe8dkkUr9vgrPBdnEgDCzF6oeicgo3eHiprXH4zgzqhTfdYKPZ7Xq24SPXb6xzBn",
  "key6": "9DaxtWQtmrJdv7kFZR1e9cTbcMotW5r6Z1CrpCtvx49LMrR8piLNSNMrgJfo3zLZXaZFVNhkBiGYJihgwqbNCyW",
  "key7": "5jTBRzWruGxnzpwEpXiuxnwkGZWDyuHFw1DSjFVGRzQsgyn86uxnWbvzwJ6grgVaK6QpixdppCr8UmG9txcHtoQG",
  "key8": "5Kj3QtMmEAopnCkNz1PzCnoJHwE6sbx8iDrByZS5DNKGfZKqYH59emnSpxV2pt1838T2smeGygEuCRoHWhvX5ni6",
  "key9": "3J1sQKkAzWydiHzmAfn2whPQk16Yi4JNPPxTmRDwgo43ABQ9ujJyfe7L8NKP78Ee9HVezsTBvrgJbLkR5ggNsb2A",
  "key10": "5N7fzopBtbDWHWFAV2dSUAF2KqhCqJ9kbFm8m7ZvNbxBCzCWApT1PohJ96ssvJbWgRXmVnjZv68oaVPmwfgxvrar",
  "key11": "VEw61dVDeJVu5qgJKmbj27RNvDF96eSZDYvb8zdYE5xfNGZcfTLTEXtH1X6a3poBK7eYzckm4cRfumTLZZRD54L",
  "key12": "jpRXs67tqcnXBYpVrfXY1HiXXHPKXTe6ff3tBFhhiuLK4yJdo2r9rsVLeU3EZGBWp4nVg8dzA1rz3n5WkK3PzoE",
  "key13": "54jgwLZ2boD9YFuDtfhFmb4XrfFZg3fCpJkSGKCWNE8NUXHxcruudFQTMWy7aYmcN9GSYst6aLY83xEvSGEgsgy6",
  "key14": "5aA3n49GoN8SH3aPQ8xd2SwdVvGtDr4jJgz4wG8kh8zY3Svdxjq2LSZgg3xicacPRWavsWmgwDf2YfUnUwCdvnDK",
  "key15": "2peNW82F351R1HJaebh3rbZ28xazaCkmp9JJHyZxfsdAbDW8NgsACjuLYnPUMHWnpqXuoiJJMt6e2eV5udZdzGA",
  "key16": "511wBYcDmpQ1H6GkvH1Qr692Wr7FS6ahRS5Ncv6Ct98zxoEhedc4UoEmdDPG2DrZVgw731phBW26ewrjAsKJtpYM",
  "key17": "3UJ9wcGtdZSffXFjf6q1B37yMsgDBL2FFerVFrB92khddUQnJh66cowXGocdAhBgz2Fdo3yaSvaCeym4xoHBMLe5",
  "key18": "29jaTaPDvuUV26d1wwG2u8qJ18qBtWWc1DG4wALqZsN2H3o7drLAhmgCCnnan8ZjRiRDb6si8LVj2QF2jh5zabZx",
  "key19": "rtrPktmMSrfzu8d2rwBkPVWoWLLdwYWtfJwZMP935XnVHWEBtK5SLngwtrbF37B6eavVbr5J8PLSZ1TW6WBA182",
  "key20": "i51Wgk1T2HfwJVyb2qQy84HhfJchXGmnXdrDPkkU9y2gLrWS4JfrnGQs9uwVJqqD8B7ADnYBeDAJMN9umCiDxtV",
  "key21": "39p17oVKuGstuzketrq3JTm18WfXE3nrZLjNmjKFJa1FrRV2TJTvWBaakcQoQE69taMaYaTx38VJTARnWTq24GwM",
  "key22": "3YEDevfsQKjKmoigDUXmwzJx38vsUVZbYRsbbnrdRPDjzwCvZ9WB6pXaBx72hAvStF86Ensnd56qAhce8FSuk5sx",
  "key23": "54tviD4BLogrrKbHe9P4ZhMAd2DktRgFNpyf9WjsVihgEeDeY6eETeQR2yvFRADnz6GitBAJVW9S36Vv4CvAQCSE",
  "key24": "2VbEyi6QqsKzsJv1EVX4jtzypCjf7cSFmPjJPqKFdScjWMCuTohQmmbEyQiRsht3EeNF9oPdxYDsAvEwWmqRz318",
  "key25": "yFsW83exjE1Aw4odNVuuEvuDsosE3K2EWSdaiJ6UpgDR5WcZUJezRQLHk6CinUjEm7cugRhNJYEjuDe5fp7u4th",
  "key26": "4JPYVRafu4qKaAsCFL2doKm5uB9B31Q2Nqk594L8KGtnyYo32dB8bXzrx3daTZvdFKsWcV3ECgY1F4dgKJkMjNdw",
  "key27": "64SawVNFK5XXQ3vkD87NK5kHeyiSyTCytqVUrNxzm9DRC3EAcjwjSef3whVhKtvE9yzucQN1r3tsaoy53UH8AEK1",
  "key28": "52UcgUpLT1yeUuw21nDJQmhFQXkNBMe9g5EWeStkK2e4b9pFb6Jps7ajqPhZBqP9TPmJpf9xC14a55BsCc7oWs9g",
  "key29": "3Wvgk6WvL7U1PA842jyPfRXnBCpouELSsAKzmRypPYSH9eNmtM3S6kg55mcgM85WEc35wC6vaxqBANQa5FzhT4CK",
  "key30": "5mjmGSxd8ztH7HNmHo7HV9zyu8NQeGwCmSDGwWkBNVj7YzAWzZYWQGtCYZLTYMQfXDUuc45bSSLpWnuvjxMLA9C6",
  "key31": "2SAGxXp2ZQJXsm1prnMCs4GfNW9sRFpiAzqPMWggpKpi76T6zph6Q9bh4U6WjU3g6nJuGKuWHK1f2YEwb7PdUo8w",
  "key32": "47Gpq8d7wNNVuYN9UTCcKc1SjEsu1E17FGx3AD61jfiXSvq3EFbkeRcUr7vVyH6t8mmEnLsaKxuA1h8hGqkzYc6w",
  "key33": "5hoGGDHGCLNZUyAMQJjV6NX5zzDt4GDYxiRyHtZLzqt1z2UvgQcbCnU2UmmGXn1fiyKNaW2GvUxmPdNAMyyvxtdW",
  "key34": "7xxEzMV6P57eFEJwiSUsnqWHJPuK9YwQxbvQNkBAqH1nvc8kTik1MkxHAEiKCCCNvpnBaWKmJfunnDGX6A2xnU3",
  "key35": "nemZ8D3FQiDDjbgD8no7Z3AWgwAJd2hFP8d5J7TzBbjS6yLWGJXktJxXdKKegbdC18aiHC4SDVKSm9PHXrkokXQ",
  "key36": "39ogGB4bL3titiccsFFnh8jhh1Djrk6oNdAwdnYynKHrz692J7z9yhSuCQcquK5TCFmkngGwudzrZGNq1Qx9U1ei",
  "key37": "61vZf7c5hGieHLxWFZqSZB9iGZfUjN34mFnSRqEGyJwibpfFBNwd2cGaAthwe1WHuQunjgKjPXFdR7RfFE4EiCci",
  "key38": "BGVNNsg5v7fjKLGrifbMRKmiVS2M7ZXDUS7cYNU1y6drb1P1Y4TvnFbPwHtEjz89xRs1QsAAQJhQnMJ4CMgM4vB"
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
