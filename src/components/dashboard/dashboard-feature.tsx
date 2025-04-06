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
    "3ugCTHYeNLRyBqGNfFduJ4585oyGUCdrEMqRy49JLwJAGUko6yYB8MH96WFzVegY38574WTifAA8jtPLvmrroAvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6N5yy5ETncHwTcKE55i2GLhDAU9QcP1B7ZHBNFJefUhncKuVW6eEdVzgxc2Rfp3dyHU9gtKmsagi7QDvCnCYAdC",
  "key1": "3AVHCFxxe8xjMrLRPK35DG24LbehpcAZnKm3VLwes4fEXqgnNV3LZYp47DfRqCacuzKYBPT2DLKDrmxSuvvFm9er",
  "key2": "2Gwyfoxa4mWf5CuRvKSfUuWQTqv2AmopWKgF2cRq8NCDvuB8mzb2PjcLSE6D5uW9GixBYhvPXzorgwQbd8pcan1E",
  "key3": "5Q6N3TpWAVM5VTLzYsM7UDKxjeXibVKdx5HDPLLHoNeLxHGFpuGzRmvEATQFZFw9X2cGiF2XUzAvpswXmvMrE99j",
  "key4": "2FRJ5N5uu8DGBDvrGmstyMXqstLaoV8dXQ3dcR5Berm9mGUj4wEJCd8G1EY9w2R6QrP78r1daJJix9qTRqFX8RK3",
  "key5": "21So1hF2w57UZ1x21avLziPqRABpsaZDaKUq4RjZpWpJrJkH6D72yFGhJvz3WeVHgdHa5EbNAwN7cLCeUUzRxGUc",
  "key6": "63iRBATATgw9pEoWnd31ipQ16Pir3tZwxsgbjAoZ6DeGxpzifaYgxNpmtiHcfgefHS9FSgQroyTHDSRXV73qfiqb",
  "key7": "38AWqivf9NwtXZnRXyZhZ6HaKLevSMiPDnTMwZARGMqYNAhSdBBK9dYQ4JxfHEt2U4zXfYMJNHGF4MUVN56c3USw",
  "key8": "54Kk28f8m6xWQpEDEbyYrVLcGKRBzmTcNsrhgEx9MM3aiv3BvEKJoyVptQyvDWdH5SxrqsJs1oC8oDJb9iHFucDb",
  "key9": "5aXpaEnrEnUdHvXPteSKVMetEzDoo6svhaVnKNgJWMiDBCSvevrv12hTWZGPkv4FNK8Ka7KQ3Vow1kVRQLbfmHJA",
  "key10": "hi21izkj5X6aVjG2hWD7JLXmUNP2JXtq2g2MjJv2j3n5ggzrp45tfmFgwLewSFBYtzWQd6H4gnZXCvssYn3SfEz",
  "key11": "3C3qRHR39YkH7QMmBqpMzWV36pZF5i6AkzvFucWr4UvQ5ewx3NRYwqvF76CWZ27PAo1dmmvA1N2SuifQByEKYXdF",
  "key12": "3sS2Rs1WFsrMmcqofgtcfMAaCSCt1msptGG8H3cVLNnSTk5xv1CWx8GYA4YYrxJWXywthzeEdhHVX8n5GHHCcXzn",
  "key13": "5ERgK1PMzUZqeWPzGwp3itqaNeCqs5DuCnFE5UAaZqgdhcDbvCoDY1WZ6MP26CJaCNuLYfq7gsmyNYeax1mGg5ZS",
  "key14": "ZcEVs7ZwDF6XGFjcPyZR88HReszWjZGbRshPDGJvLYiRckGPRLaVQ3NWaCktz1AePnMxN9samddGNp7AjPBCScf",
  "key15": "3u9Pgqeu1BoAy8EE7LcYEMZb2RrSuYjYib8qRHUZQsKH1hnJF3gbPsh3wasecs9H8sXACERVvj3VcdD4yCGRE1JW",
  "key16": "sRnW4yTopBV9EXaW7ZKuxYQoXS1aN8tHmxoS2NF6dg8DutKBs7heJjJzfkMoe1P9CiW1epeaR77hSLzABv3R5S8",
  "key17": "5YMt1er3k98ErT8xhko6q9ix8qs8CY2B1aLRY5U5uVonApm47znR4xDPEy9MmPEZg4G54G1r1Kk373oxeXhyhfky",
  "key18": "4cRyCWZRSNaRfHbtjD4d1FAm5Qn6QTSDHsTtmfHfGdJvwqmjwbf9ZAyNxvksjicd8D49wptZs6nhgYW5Db7ZB4xF",
  "key19": "2FAMiCvzZk5rR9wyxHkLEedfP3t2aAjQQqHRvSiw9p2K3ekqfuFRVuhU9rbzhEbEnXihkB4e227nQKAUAMAKfcPU",
  "key20": "5ZWcpnKbpH1QRvc7zbBUG8EHrGE1sGFdteEB6tpfbzKDv1hk9mdJ1uZgWjqkrVn5KuvKMUhnjJoaWJCTSAXCqnfC",
  "key21": "5yoNWrnCz3q8CFwNqGRpggNoiNoJ3Cz3xNGa2DCFsTj8gSgJ9GoBTi1XAQEhN4fJZS5ypSG1mxeX729V1KEkGfQm",
  "key22": "2oBdMM6VjCCZLRUCsQSYkq32QWypg3Rtv9hWeuQcHSkUtref79Eg1MX2NRfzqSu83pLypSVa7jzrQ1XPE8xcTRgz",
  "key23": "5t7c9kJLaiwYpwspcXg8Ve6kFn3UtGSokLCdvhwTmFWETGvTN7bSWy5QqydJGSQtK5R73bzHHfyZ2EgHrnn6ULEj",
  "key24": "i78Zjvbb4SNjSCNNb7x3fabxz522eg9hEkg8Q9WQ8FsdD6kKMHyu1xxdiRxpgytCMGxtCoL6XAQY9bRAsTnxJLX",
  "key25": "5pk548ZVLt5Fb6N73thQ7yh924SSkuJL2kKM2ivsjAtNUG25mrHg2PrGQ4ptuxUK2Z239maoNozoQoPCuFRpj3MM",
  "key26": "2fZL5EkPnSh4PgDm5nthwaGzy9MB4JX2egQyZeD3TS6GyC4rLYJibFLVuiRQvoG3Kqspv9gabcHadLMNHPEW4cNQ",
  "key27": "z8WutQRqdPzrYFvjSNKwKoEsrbG8cnJZjDgLW7yQNyumxBe447uZvBm9XGEguvmQm6VSDV35FJ3ZJL7R4iHFTYZ",
  "key28": "5CMtCJLM1EvdXzPXM9JgJbi6zaVJzEtskaviwPahwtbLEE9hRVPybtvM7oTzj3uQ7aQF5NcJ3Rum3EDR4Q19VGWL",
  "key29": "pJKnbqkC4NtL6qdZB9AdCXaqgUaRgBgcNrNchTYu7J3nHm2M7ZEGUgifQftPcvXQpAL3vZFtMBPVftYCshu6fZG",
  "key30": "fJ29CtGoigzoHq1pQJMjhg4UdQbx1Vcoj3dmrC5HVT1QeZE7Zc46ZuStNPTrHbQnSY8H3YSqgC8e76cB8n8Yrrx",
  "key31": "4cdinQmSyCQpgrij7sBaYLLQbbfjPjV1UH7RrRZcNaSB46BeeApq617yHi7fo9CAAUmTDN3fmhxMz5xWYqxy1r5m",
  "key32": "3sCFkJBGTi2gaUMmbrMiksq3opMfuqeFyQ5YeC5S83xVTpnMfovyTmjP2XBJeBx6FHqkUFG4stTVPKLeJey3ZwJG",
  "key33": "Y6dXJ9JDT717R9Lb3MC9pe7ZfSqAxTT9VFA5muntvyWqE8Nxp3RWMjoGAAwbMcBfvKfqR1RtpSeVsuzeA4oJnVC",
  "key34": "v9fa8vt8jhGWq8yms56BUgqfARhEpRxxq9HNW2UVVhkiuk9axoY1zUA1ogG8Uge8HGt5FyT7uoyPMoBCCiU15g9",
  "key35": "2YX6DR4wJD1naMAzdHnQuWoNx8KYfXk39Z7XgRaJtJk3V5rtUMkehFNHgwLmEUNDEzGr9WVxEPdEPeBNif1RiniZ"
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
