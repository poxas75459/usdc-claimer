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
    "5ZJ3i1U25rVSSh4t3xF4f228upUj4PCQxjQwnfyRoPQ4YbsTf43NsBMcj2HRm6NKSrN44MER4mQZiVTryFsTF4cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Br5AzSGJ4tZCmnoa8uAFYQHLtbHxNxvkZVZRbKPdTYfpVsooDPi9RQQdApUzgdPz9xVGEQguPg3M7kCAVYd73YU",
  "key1": "1C4LBdg2FUj2MWtswXtF1pj1wBZUW3xXgx9LtboQT4cw8vhueFfP5GdGcK67PLBpTYHCrV6uacBu6hyuFJ3nZe3",
  "key2": "62VczbVALHWzouaoqDCa454LULJDLgvcmPk1XmYx3yMX8EoS63DiPZWBiADiLUt9n7A7Ng55rpqWPnJdRZRDrdK7",
  "key3": "2prRkesBrgGwQfEwAJqdX7qXfUBN4uAiMsjpNk4hY5MZHMLFeeQpfZy3M35mJ3fRfLzuTXcPw6img6YZCUwXjuZA",
  "key4": "3qoig36VZkehaBVkDn1cwFWFQwBrXzATLMKgwDSiwEmu99dR3DtuACQLz7uww4wXRoxjBiqmsfGdyC397vCAbrfA",
  "key5": "64s3F77FgTGP3CfFyRdfVdiVQUqXkPEVso4FHzyvegR1VPqnJLspHKUL1WzxUQSgjrHHHWHA3pR7WNpNY6WQrNxS",
  "key6": "2prJKHJvJkcp55LFMiKMmJDLbGrJ88w6RcxmVKruweEE2qroZm6iCiaU5gMPtnvHKRdJtN8MQYRSYA7N17s31f9b",
  "key7": "4H1mjLjjC7G6yGVdQVG2o5MNkW2K7JrZ6WedbFUydKnUi5FEHgnV4i4M4F3GHEgXhxEiVpcDhnsn7rSdtc8B1nwx",
  "key8": "5XvoY99zYXwTj9i89TSYzLSDKDUiBDDqzibRd6HgsGCo3HZwSLfENRBmLASLHg38YR9PiegfyMNXsZzQtMj3RS72",
  "key9": "5LMU5rXKapnE9MTEWh93N9m4haqLdumCrTqPYS3dN2ocQxyJureWkJRErZZdneYts6hjcYu335LsPfoXNMXRTEs2",
  "key10": "4N8HGFqEirsPGvXnGUzfN8VCm2MiYsHCAQH1nJHMWaszctVS7bBMxqxuLtiyrCKcWMJ3V8A422DvKrwSWZPMkHuz",
  "key11": "cgpKv9zn2EyEq5SNdjawHHhRqixP3huv8Eb4Nt9aNuaiSmA9jzncPT5YoHdXwh1WzCcZfM6k2yAJc3iFutf3uVw",
  "key12": "5xCiXpfYw7F3dzfsw5nHgUJexAFVjtf3EZRWqL73tjhXfvd5YPyutM3FA3b6v7yLvujmFtR6LEwv8KdYF4ye6Xw6",
  "key13": "5KFF84wAWARHPDSKjcUCELd7cZ8bhR3hnEyDcsJ3TgPNfUfLk64qGDm281F7dPbHsUYwABM8scKn8okEyYrby9gv",
  "key14": "3p9uL6nY1f9qSuhLdPhU5yMEoUogkKHMbgXKCp8dXeY2x2ZpgfkM9LLM76Ddbi6EJ6DzNQWEuhupJ5pnQL5PeVoQ",
  "key15": "3NwBrbdusoZFCA9izj87ziNxEiNnt3SZmyC8o8FrfcPb8iLJrE9dHzFXE12faos9oZ13K3Dvrhr9tZTus8NRxmSy",
  "key16": "5U7tTa31ToyrAnyvkboVWXZswGMPA2QUn32fXGJPKQft6jkYeKz7P3Q3V8b28k1SMwwi4rHLQ3WbtpZeDkN3gi7N",
  "key17": "FjCtxDAB52U89q8w1CcVUYvQA9wqgcwFNQJMuSBf5vtXHqy9Empvh5PT4QqYoQRgSYD3VuqxWUxc2QFA5V8EbYb",
  "key18": "31Jxmy9oiHK5aQRxQWNmnNwL6nuS8CbV79r7uYWTw3KLUabbFdknmqAFbvPGegAKVUrXL1ExChZ4STgqDqHiSgvR",
  "key19": "4xtL4wC6RGmkSvYEjk2arb4ddjxYtQdQ8fmdMz3VukQjVGnsC85RihLd4ZdW9vFGVTU3RChW29U5VDkHbV1N8og4",
  "key20": "g7Q5QTzU7MD9amYTb43T2vhmYBuJ9A3CwYqwsRna8UW3BR38ufqgjz2xBoUtobGfT27bjdZ1T3Exdn1n1pEozan",
  "key21": "4LH7KHzUgHNDbpdDEJ6zfLnXLYgSedq6mSgkXzrThTk9nsqpiHSgxtZ298NsyHeD2gSShKCcozoEQNsN1pux1ECU",
  "key22": "5jTuGeQbnyU6FR86MwwCCPBr749nZExzBApcGZFXB8y7cBrMHEijuj6yxeJM1F5kXYXmsU9ELyQmL87GxDrRmzNN",
  "key23": "5baDrUnHvkSnFifM2cFCjFSTMsro4MVNMWwDvrDGPQCcP32rDUvgqLGxeCmp6PmGCxkYod9ibvWYP7sA1TZCHS8D",
  "key24": "61Am6oGQhK3QrnAhDkZsboQWsa3R6TobLBBW79PXcE8vbSpruNbfVzMza5PYq24CnLNAcu88mfQZaii7B98NfjWg",
  "key25": "3oDE5eUUV7YvkuFdnT4dGV4TfrU1UfiNn8dR43GDABSn4q85owTGfXK6pDMEaR3A57KRxMTY25jN93xSnki3FuSq",
  "key26": "2kE8pSCqAbz5CqzdkHsnY6UUn7EWawvZ1WbsZFn6zrY7bVycXKTkXP6hQ1fUmDwQUmxtDU5TrT2n9mVGYStZx1iX",
  "key27": "5BQpyWB1XzAV3gp6L5vrFj3XHsmjwxx4hG3cYs7iik5JgCrRCwYprLtyRqJawpwFs1tBgjkKeRMtTrKFzqKPSkum",
  "key28": "yoR2HMyA3C6kauU5NkhLBEUh5zKk1X7Szox53nHu5EBSKi52GsZhe5jKrntxSxmV4HhqJK16C2veQh99FU1b4jk",
  "key29": "4inYtrYdantwMNRsL6jGcXQpd11RkqoDo6DnDQesVXyStukauWL1vcGoh1ze6gcJqCRoCEmBmanFJMhRss3mewUw",
  "key30": "DWcfsNV9Bgo5D1YCkCrn2Y4PzUexAbzGpdnDx2Az5v3mKnLZDMddedTPk3PgqS5rs5F4zDNy8LJtis5k4sSuDjn",
  "key31": "3SaijbuMHzmGGgL1aSD22EdhncKNRuc6LFcuU6zmCt2GqSxJ9exSE87eZBxjkwdA2aiitWH12bbH7DjBpxuzT1on",
  "key32": "5F7RtG9sJg9iBStHUTnKtAYybo7DMNjkpw9tXhDenSApDZr4APP9QpfXx2kra1HrmvMci1yuHbDr5czEbUkzM3vu",
  "key33": "2UDnNh4MGa7nt4GixMP5CEpZEc424rd1BMGSAz4SnDfAHfYnyzDF3aZwHnCRht9qxr7k4GkjeebwFnAmXSax15pw",
  "key34": "2sYmTebqWN1v2SpoV21YmMqkabrLhWmTxPjKJTwtqZx6zHs1GreFoezKy2Nbb1tb5ohtwCTX1BhiyiTm3sdKwvUw",
  "key35": "3QvrjU2C6Jp5eymEzfZ8JgSEztJLwHcveYGW7nToWaydP9DPZhEN8M2RSnCCVLrxn6M4CCPjw1aawUmWKxopPn7m",
  "key36": "5HVZTTvyuWPB39MmL2W7PmjNBobWbReh89B4ou95s7Z6Rp19rva2UHDrvZG2rMnMADPdBPiFE9z2qQTuH3xNhEJQ",
  "key37": "3mshwoyK2TncLeDAC5pJD67Z9BbuGkFikZPB3g27dgoMRTPquySHEzEd1gziSfdrBRXmf4ntkasGZWRufUkc41wA",
  "key38": "cPEz5TWmCW52husros4NRWQShmCtPJFy9AQej333LFTF5zwQAgLk1BVXJoaCtbx1SFtFYgbTNuDb6BEa2A5tPt4",
  "key39": "PY58448jxJ9eXo719ZVgqKNt8HxxH2hn7jTALUkAshpZuMr6WaX6L4Q5n3aNWSZh5xHP9zAq9E2R6TSTBAHJjKc",
  "key40": "5r5dsjNqurZFc3ugkigQ7o1Gtb7x3NqxEUPnruafUaGAcqyRxJcj7hCaVzsUkoqSuuURP3Xr9ewQvmq92dTTWcfD",
  "key41": "pK7koFzDfgbf5oxBLmjasbD1YDkhhVcdoruPyA8kWs2rji4kot7qmDMBg1kRGq29uX9bWVrotgG5JW7SXSk35uz",
  "key42": "3B7qhXAXXx2dyG8AxiXRcDxEeXKJNrvRfr3UK8PnZQ13i6cK9XXqGmexMnfs3SuxkznwHwKFTxLgbMoXzDtJKpPq",
  "key43": "2SBDP6qFHWwD2mhJQUz71MDR68RshnBufmoHiAVZt4NWtYRPSZv8qumBKxsA8v6CgaxAKGGYdTUFfmhZovKqoDRA",
  "key44": "3VPEX1ys9uFdJStdiNm9kc6WyAMJo47hSx6YaUmvmjw49cABAEGmAowBvfvQHa5grLR8LrT34GSbY5vxEsnXPrA2"
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
