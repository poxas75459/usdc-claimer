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
    "R3eo4SHi6UgdVpidWcJ6NGbZYh8tMNdRKGU8Y3dGgCFZduqS8oSByxd7w4Jp72AJS9933xo912jLv2h3YHfa6wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SihJx3ug87HmsKpjVXiTTLuCTrXBJdmyhrYETkk316NDSXJqEepCcMQQWF5GwnaHeHhwbyDJGprMwbzJrGDbJYT",
  "key1": "54FrC5w8ea1R9nb66KgqeZhgC99csS99TnSPQsXSbmW4LNKVFu9hmG8RcSHQg4Ginx7HorMCvvxMgARjGccGcm3Y",
  "key2": "VaNbTfLNTk4CyxsTxJN8rzfik3JxF7mVoLt7L88PTN1yjyjhq5mb4neDHphrBxVBuZpxorp4YG5kQ7ueY4e5Bzk",
  "key3": "4fQRxStQyqnpyjrqioKTFSUt1PT7EpiZDN9r12mYEDVhGRhdZpgkm7RHJdB89JEadnLUPrsBAjwwcv3bZACVJRs4",
  "key4": "2XapLkNRHDxWidjApXBcNCPdGptokXNRGgdSFCbeTUyWftkHiqsPp7AJZ1uZN2S3iPa7fCwHiYX57E1KC7Qkxp2g",
  "key5": "3xWDMXWLMRXMd7DAJHA3wH6bVYY9cLgS7Zv94PBQ5eBQuA65gmVDRE54meEZD52qUgLdSfJyi6MsvggVn7WQ8Rws",
  "key6": "2HSSPZhjNZL2QxNvsYPggsi2BP67mvB58vitzpM2DMxe9KjAwghzWFT7RmcfSn6HdGmkHv5FXPCQ9bHYuJWD5HXp",
  "key7": "65whfpV1GV8jNpbRfcCwCENyxCmmvNG5NxSY58dWXtjhCS6LPRCQt5xDxcpNfC6jncFtByNRFKGuzLwcnGY4K7vg",
  "key8": "3w2PfGxByfXZcs1cf5nnk4vh5EdogCS1mJwoPTRFnWYPEr1XiVNyFy5pVmTAJifYj4whThSoFsAWnG2unwehbz66",
  "key9": "5TKS7vg7bM8JUPckiKnnGmo12CeFqcJRfvXyjRz7zFngBPBVUcH4gNtGdzkEJDyd1daKREVLHQiDoStfRuwfYPZT",
  "key10": "3JqfBxmQJ8qMsZSW3Zqdqfu6y8R7Kh76YEy324gaMwACb8vDDMwyAiBe5ije1osVqoy9v4uzwfBmrQ9hjicArs8E",
  "key11": "emi36M6hny11dXi6JcGGX6GxP8rR3EyKAofhiePRejtsejwN7QRKtun5Ly2oHgk1ZdZufntVYupCVCdYbDX47BM",
  "key12": "5fJyZ4ePcQDSWzy4etyZsMH8LsLJNDYpHb7YERXV342gHJfcthS4dt5xuZdVEeSLMoFodtQ3Cb3GT9BgZFE5LSCz",
  "key13": "2cvTdz92sn95V8zUcYUrPg1dUUHDvRMktT6P7Wz2n7Z2WW7fdLMYxWqETjMWa13Ttd8bt9PDY8oiaCP6JXzYfFgq",
  "key14": "CUmW2s9AEp7U3gZw8NArxnTZrCvKpJtzzz4tmpGj4aKDJ8yY3Juz8Js2GE3sZtMBzZZaNRdRNYki4BQWL9zAx2k",
  "key15": "5wY2hJFgrvpuE9okSspNYcB42uvAMBrNHx5BUYx3qiMtQ7Tvd5z2qQmEJcTFxukb3WTT2TKui9TTKcvYcLT6Uv74",
  "key16": "2te4y3NTYNi7xNawM62u7qS2ZHBXGCrXMiu3KHco2ts4puNrCwrUtWqZQWPDymDHhG42ytj87gMmtpFfXwQ6QAmN",
  "key17": "4uhqzFrby4ZL3czd7ALWpJPDqHkoYDnNRCbn4cfuN5ekBrJ3EzCZPW9joMVZPoNPLFBTRvJ7sPn4tQh5iMw74L7q",
  "key18": "2JR5Z2CmXG7f54oSGCbrWqcJ3xtzoKd4ZsmeB13LKqg1f8WshWv5Bfgry8XLJL2v23XCvRCX8Z6pgdLTQjFeWDSD",
  "key19": "5mbd2qxn1BR1R1yhWVydiYuqCvE9PfDcMeHJfQC3vYE7rm5bqXAGSYnk6Pq9z9Pwjk4VTDPfrMwiURg8SjiRDf25",
  "key20": "3G6rpvyCDdThN9PdoVU9yahkQ1okgUu5ys79XqAHcDZLR8vjbwKgrnrneYUc6etAmLCASSWiP8YfJ6HxH5Zs79Ji",
  "key21": "2bqaD91qfbdErbtV6FBiKU8pn8UXLwAi62UPP1qufuYSC7aFB1sBrUdGw12wytT4DaaMhZHsPnahqGeNVypZ7rzY",
  "key22": "5wGzkN8mHmufjeHyZ5A8PhHYgAxENuCQUtkgmudNRjMk97nf1NKj7HCLwq3bj7iVgg4NvpabkJiSGb5XTg14qydi",
  "key23": "5Dto24mmqXx34Yb5LNj3DLZporogdhFuMExDTtzyU3yepizHxqmM3tdjtGUjYgmhqnqE3C7gsFTfkwhEmMZkYarh",
  "key24": "3MZdpHA3QneZJF4RXP63f3mXdbsnsTUXgaR4tX8CR8fd6BjwgEqQZwEVsUf68EuUFds7rtRLeTxZFuCre5xqwTow",
  "key25": "4VagZQ1KsoFLzaP9p13HdqywjkZkBgJp8rTnWDPKZD3tTG2pKRR2EYC5Ybfgq2o5ijdGbEjZEi5PJB8MnuuDubqY",
  "key26": "4mvxT2X9bBb6CzbFno2tnqG2Jkf3THyaeL5DWhegYinzNNyWZCnpYVNMaSWoX7M4BZk67kAnPt9YvtYCyN7YD11b",
  "key27": "5wdteMrsy1GbZmcPeg1aY5FVfowxibd7KFfbagLtVhMaoWuw5JNZ8gR5qwmm3Usq4k8gPwJwovaedD1W2ZGUmHov",
  "key28": "2uSqMSkC37V1B4kLKFAQDsvePN1j2kj5vEJuiuzgTPp4XCtSt5KJZvyry4L4fRg9W6BuZHFDw1n2ohLe8gk2R6tj"
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
