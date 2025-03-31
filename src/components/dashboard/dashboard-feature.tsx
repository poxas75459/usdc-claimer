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
    "Luf938itmEu4BDqsCJZfNAtthbMzJzYgKXDWkDfG1zNwzeN51yL95SFnuFBX1VY96AJ3qXuSm7zdmwpCx5iXAwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCKvRo4w7vZ9sLc51j6ByuB1U8Va9gXCJdyGDFv9p5BbrHdKFZ9f5tkZp28MxDsf1Bw1K8gTotLAXNqfu45WLbq",
  "key1": "5udvrfcveTszS6RXqsiYB1QdXwvqmMYQ1xsjdBKTpkAajSHyxDohrhqqvnmaAtzicGYcDNk6grZFH4r8Em1kBC4G",
  "key2": "5vLsGJ6M19TYQi7etdqGJainNuikboRDqQBGahJNA9AuG9xWnMKrKd8sbxDqkTwkNBXnBxLJcXktSqPTVpETCikE",
  "key3": "63qz3C2sMCM1u17y7hf5jkBHr2yttEBYN2UG7PkELMHztAXjDW8mdEzz1qtdb92YBgM8zMez2HUuk45drSiqGF6j",
  "key4": "2jdFrwF7N6EygTmHUz8koqZjSpyXosKHSWzNWySCmLzkZf8pJmhTBrjAQFxZDPRPRb7oaa1dZiY8agiNNPCMLNsS",
  "key5": "5ACMCQy1x74pUdeKPBTtx79e9a9eNoQMsAQMDxLfaTfnG2AYyPrqLKpQULYqoMAaAVWuPBVgKH78nNhgix8pStGn",
  "key6": "WPLfH5ihcNkUAp4CXoHd1SLpoVZFjT7Zk967PYri2GaXQZjutPx8JbXX2jbw2YxDyAbkFrm3zXyJHewLYDi26Ny",
  "key7": "4gJdsEMhtbFSKnkeLeGVgbSFAtGNNUYHyc7oaFRPfGMfbtUsHpSPDmissNeiTAcN7wgkTwEqaqH6n1fo7RzoxaUp",
  "key8": "5rVeQJAxvTSXSwjR4SG76Tiyw6Z1DVLtmomaksMPF2hcUXFd4uVh5ihiYahh5wen9qgYsdQtPC9Zw6vSqFCN6vHj",
  "key9": "52w9WfYc4kG6MMWqFvNq6urZPSifPMrQwXo5zCcXqBCUWSQMPv942sw8Q6msCcuJ81RXTUMWfa4gHoArbdeZZiAX",
  "key10": "r9ENa1xxXfBPxi762Mq89zteQjufFYEnGpq2fGP7dT7thmmba8KE2fYfpUnEezYpRC8JyVsb212L9YkMUAcR8Jq",
  "key11": "3GFfzFpf7BqBqiLZeGsgXWbAoeWTx5jivRyBU7rCnDivJtGE7Ext5DbbFqwEAbvftwAcDyiAWqRc4jzkqhvwocGd",
  "key12": "YChm9xXK3tDagkP6sAtDZ2onPxTEKKNune4w2zWyLmyEedgVmFckFq21sfSBSj6Q1HoVu6AHKhPtMsFoCHnXVMC",
  "key13": "3dBmm65bQ9gRJgHr9PmrNVhx5qtUj3WtKPFTZw94TUSmeyA2cowUmcHdRtnbz9uRvrh3W8tK1LCKY1U8Ch7TCXtP",
  "key14": "3B8BrDY918vnsNazkV7EWhZusjzYNunZ7LKviRTYLn6CNw7MSHJirpS7vZkNe72FbwTqXRBHHA5eJTM2AHDGb5KX",
  "key15": "66EugTxJzkk7jvC3zuEn2vuYdsg8oobTMRY5qYWS66CW64KtyRi7fWLWDtWFPzVhV6vdFwBkCsSfBeSbiNqewjPK",
  "key16": "CSv4vtzMtqeT2aNajPv2eqJUdx8bHLjUv9eKYfZq6BUCdhAk1odiu3ay4LUjkm8Ztt4hEsqqXUvBK6K5ZRxrvty",
  "key17": "4oxpcCRv9de1uRaW4jQ8ehkd5G1858z8YKfWcionNJ6dtcGpHbji8LEXTijKWYjqjMZP89HShRG3nwA4GeGDeEpw",
  "key18": "sHDeQbZB8RkgL2tszf1iY3BiaonSwD4AA2z9jn2FUR1NbA9z6QHFf4VYvsSMbnrW4UrUxq7cuZZJPinSpqM7vZZ",
  "key19": "2JfA2k4L8ynsRLDbqdQKkwsPunzxMneXQBvZSgdhozhsnb5iQvmimpyXZZ8HKwtXih4LsusgTooQvcp9KZJzerMY",
  "key20": "YNn1i5ArQMzTnN6sT9cb7tcimfCMuMjnzhKQcVAJhi2sAMQq2oKmbmkFxEYTcxz3HLBPZ8UqAjCRLeruNDeegBL",
  "key21": "656RotM7VMmvFYQ6j7KjmU2pWbT1nRNxcdtNQ5r5qs1vBpdaNvCaZinudoXnz946YngYdDTMBWQdiZq2cWLQbBkW",
  "key22": "5XfpXS6kVUWPN62nK9bsdNqb1a6NzRxbs8zWUBcknYGabUmcjH8AorvtwGTW3wtptzmBW9tppxbgK3iVnQiaQxP",
  "key23": "5UHKZBwoHBXLQ8jqyxhRuWkGijCWu1sFbjEXKVN3zsb3EMehtRvFR88fJBJ3Njt8C5ZYFC3xc4bNpRK2h7GSETe2",
  "key24": "27Abirhd13mYCZuRaqgxoCm57XjKp1PmjaaQ4AcZXdv4GATsWBDh7kvgPB75r32hZw1w6PUMdS38S5QtiLUDBusZ",
  "key25": "3wdMiaDTizFd2VEvos5RLwhz39Yu2fokn9mh8cfHb8ZQ2iacQRUAAxFhWHiMHvpsEHicVidYsqSiGoU9FnHLkPMb",
  "key26": "5wA7DjPBRhdnghigYSnEdFsLZb15gcLCBWXPp8E4yXYi8hz9y6ijWqMrMAkCcNnNfaxpGB2nVEFAnhFfv619CzFD",
  "key27": "21sKGMZUCNtC3tABzvcWSHvrL6nfpAvPiWc8KyKwgdLN8noySUZKsZ65nAxunrGi5NtJgNJAuHZHPpfnQug5SpRX",
  "key28": "2rCH8gYHs9BcwVVTvDF5n1WXueBfH4xMBiAczWRLaUebw14r1THbXGbbvkaNbqw9CXAi8FTpw8nCrESoE2ZGpAvA",
  "key29": "59UtUDLXJRAphi2aKDe5cZhpCi4VsM3YwJzpTMwrn8pnHzy9oXUV4F7S8fJtZfcRUWARaVdXtVLA7dh3NsUb7PHf",
  "key30": "5u9iGdtfdatjPfkinLB9wmPWtvEzwxHXVx3WGe5a22uFKSdGCVXLXfdpFbYMZpzWRJ7ewS9hR6fCshh61VUvXnzW",
  "key31": "3HFyhqrR5XTjMga95dtBXaEm7xkZjccZzfUaZ3DUCDTt5FTioJ2CJSh1vNxiwMaeWGAybdjNtzhMMN3sBMEfqpmq",
  "key32": "67qQN5TAHVgkmzwkWigYSx7GfWuGTqqQiS68SxEajQDooz5qRa3TgbU9oGPtggxEf9edaQcELrB8g2ymgdMqspCv",
  "key33": "5WrB8PEbz8rQubyqoGDZm3G5dcCwVY5RNgWRegGhxMDdhjomQZH5Lunfg1BTpJzFh3novSZjtRtJZFTdWcivRaMC",
  "key34": "4HEEyLjuTFdHUKBXGBmw1Y2mtE37MbjNWx9icExKwWQ24uf4J1EHiXdN688mY1sznR7dsLLyrwtuiGdLf4uSC5bL",
  "key35": "28fZndekhh38n9sDPinFWeFQhMxue2nzwoZJmMSEv1usnjn7DDBEzTw9cdf1a1KTNiXgL5ghX7tz91Gbrdcqpx1G",
  "key36": "32n3LRaQeP4V8qHLshYV1D5ZhyZ6PNgEmvHxRGvywCoKDnyuq2QEUBDjxDj2J2NfCZzSSBgaTGtF35vyyxNjjrVT",
  "key37": "JgrhBCLcbEXEwDLrFQvssz87Q8QKULfHkY5ahhqqNdN5yHhwY7jGp6UDgM88hdiCFkWncDK71gweHnML4EjeCoP",
  "key38": "3Yakoa3AWzLxUvWLz7sDxMppxPa88NjAGyW3fLCAq2Zs4kqQCnPDPoiXM7f134eCdqVt4U8RfqDY2DEqVduu2RZD"
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
