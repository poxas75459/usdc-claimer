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
    "NUB3hHx1f3HRK27ChZvv4BRKvWsSXYNruxGDiNjVrHE3jJVwL1uQcZwjm6Q8vMnGiX6FFNRTMUDTuVDb88eWzCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JhQVktA9tRysiaiAhSBQewiSHGZ7JJNf9gGeANXXkugPCz68S5KkVydUt9tJSPFBVNyjaPGY6g36T8iaSsqq2RF",
  "key1": "5e876XcNMngHY1tU6sm53Qtbx35gCfivjfWGn4koDj6ARxbQQUYgx4p3bDGD5MYjZqAqjRvZBTd9Z2GZvCDZ771H",
  "key2": "3f6xyhqgTjkAJ7WdNcyafpSKvba61uHkJYHHKncL4rCaqEPkBZNCaf1CT1xpvhuSHt2yEpo5JUJq3qcweGSFmXxJ",
  "key3": "2VNd31hzTFLUGQKoL2wkhEf3K2bSgccVUABekMumc6HuYXmM5xQKiu4GdgVx9snxd4oC5ku7iUwSAr4NFEYX3sgH",
  "key4": "4hzrxd6wxQcsQ7nQV1vU9zbX5mmde2V2zmgMe1bKLWHQArWqKkLciuyMuMQahWGFibNWtdEPXXkhuQrHbus87YV3",
  "key5": "3Hds553oZZ7wzRV5U3srTuahqsTj9aiucZxFseGUvCL3VNRYGerkhJPAosMaycerPMYF9f8myy4WSYoju4BY3dTL",
  "key6": "jhXLT6Nmiopa1C6FfrSDEoRUDxuGF8otaDQ2Na2aqLVcbLbbSvFv7C1BQAbLHoYB7eifXdF58NA4wwqk3AnJVcT",
  "key7": "4xkgbfo45MsbHvUuBwT22WXFjbtnfs9PsFzB673rR8oHbBTdHbcxBorMPd3ZCCJRVYN837mUHczY9116xdqcCRk8",
  "key8": "4zYJKSfbn9TfYhhg1Fq7ECCD9ipPX776Bd7jQtgZjoLuFAFk4NVWQf2DsSjUuxXqM62S9oEU23ohacYAnL3PCV6L",
  "key9": "mZcxRrxMXmKVywnfs113sHbpiWvFSpNwhEjtUYRHCv9g4VT1CPesGYDuqPoTiDq4b8sETyUJJVPmWa7wjUBFwup",
  "key10": "5xAa6Y3f6o8uutNyW9ozDubVdYTYiQkbyvAwQFwNFqk3jtM6tAfRZV22uZ9wkBKcz1JN86m4MjkBZk2wp5huPzyE",
  "key11": "2dCum9za5BN654VR3GRKLuUEzuQprqpAMM7JHqnWricMhC3rE76NDHrPBDwZoMKTrpKoN5eb3NRLnM7CHzpLjR2K",
  "key12": "2z2yhTZ6B4jVa1u2jxXu69bS4Xehd7BNJaDc69THUrtETaL48Zqw2RCRXj1MD2eZRbpGdRBkFiHoJRw8XdQjPXgp",
  "key13": "2zK5QRNgHWZsPLTjZDGosXBvNTjCfe2YDCRCCWVAPVbVRNjpUqNBZqB2Zs2MkiKzuCfMzZ4r6GYojRkikchndxAm",
  "key14": "66N8brre9546yCUZg1BCFinGEsmi4E69vdJztEDfnu2275jC4qd2HJnQvt4m5Cc82JhziLGYWLeeAb6ftzHnbnuq",
  "key15": "56ProENdQMsWptYF2aDLqTVkYcpWpcZYSewgnjPNbNi5ty98RboH4WqKGvNYX74Zb1aN7mTydKzYoEUBN2FrUsEG",
  "key16": "4VpZEyVkpCGJ85167ZkXogtPAkG1RsmK6MH2r2s6hBiGACy8LCL94h3X2bSZbJM47k7yvnuNeV39EN2MrVJ7BnrN",
  "key17": "3x3CAotuWivLY6ce5NpimHd5XW6LJqmDcuUFdwPzS9emJvuYzmj2S1bWuob49YxyWjvka5QbtBHK8j9yJVYSvpB5",
  "key18": "31WCFUPwYEv7XcyzXubD3tp1jnBaRXdZbvxYGRn3i4qdYwiKnxxgTXcbrCSCVZmQ4JSJ32oWTydsoV5W4EBsUz5B",
  "key19": "4VrYKdJxt9muC2LmNDFrqvXdEqPQ8Vf34cqCrNp6P8bneen8utVKRTMjeptbtTamJVop1SEmsB9rT4nTtraSvFoy",
  "key20": "3QqwXnRHNYxnrimuNi3dDciUsJThsAxxc1jBtJvKDGy2TNBH4KiAHXasgxTQEHLf9LDnXAoB7Ne3emhTG7r1SojF",
  "key21": "4MFmXwFrHMzRVLPZoDhs2PoG56mJzXbvh6TrHkCyyYQfBZDJZ1m4H1fSUFHUsHyzB9L8vuAvPEt5asJzxZQi2vq2",
  "key22": "iNgD4Y8Vft5DyzEgoqNKKEd71QV5d7GFFf1tUD3vGxx7JMJENtaAEdLb9tb8rzrRcjJozQZpgW9Tg1o2kgXuGoh",
  "key23": "5UuR1iG5uhWrK4VLWQ3XfM559yFBXV2qY8RdXdzVLaGBJcvcbccckH7WCYHTWaFYPVtWR8NEWFDS1cZZD8H8BtZC",
  "key24": "5hKd4LLgGUDWRLMSZUA9XYorHJZ1MZSQU2UH3KDoSKwVCPq2xmJcxVZCPhcabhBPCtEfnQ64GM5YkuUgfTxfT5bx",
  "key25": "QJFJ6nLNnduBJeTobYjrZip4KuhuDZ7eDM95Wk53fLxt1upP5UY7fYsbaHoTmqCWesvLkxppR52KgUBihMAnhX9",
  "key26": "43hTXikZPL1oh9G8ijk8L2gq4bG6pkfprh4tcMj1a3xqNtUmPZKS7FjDifHMwGBFrpSuQXp3efBVuecWV35hJKKA",
  "key27": "48ZCToGYjnhSBvGDtC9wbFhxoPjLECFPxZYUyUtirSLg5iJikHTGU3XHiJ2f5hboHAUY42jLKUktcqrVJid3Xe6a",
  "key28": "5eqQDkJx8a4nZPzV6JiE3XgqgB4bt2JtW294e94XQdMUczwoFBqCx6CLcJC5CzjqgeudhUJ1XRvWj2HzKQMeGEZu",
  "key29": "4nPPcmu78QCBMexunZzeb2AUSq5mvXgZHmt8irbtWJWyCsvps3mFh15JY1pX3o3urn7S4JFbfHLN6MFu8fcp3rEr",
  "key30": "4BUV6cn4wyGNfN4sUEmhkTPdQhvhb6Refw1Dw6QmevrCRyJFvcFDgRbHnQ2Wjqavgjj7nCGtBChWgb5njzfnFKPh",
  "key31": "GUqTwhur3SKWX5pHeQL8RLxYSmR18nuxon7jHgTSfSysFzMqodDEUrSsoST4Fd1jbFKi7h1Q6Uz1X8yHDQF8F6o",
  "key32": "3tk2nHJcJD1coTXUA5KW89vcwJkjWRPoYpHG7sTwioHUcppbXPRVNMmhBCTNWXXaWLb9xNwUcKH3DfHiQmEp11qz",
  "key33": "5J1ysTeT2NPYKLY9QX8hDhvcZhMiYkdiAzoVMQJuYBoq8aJyhN8M4A2JoKwSy6rBzjXc4LXMWYbDxGowXn3QXtYZ",
  "key34": "3EC3r9HtqrW17re6E8EVDPkcjNog19R4oAzD2kf2u5bJWmakxW7LZmaQ14p9AngZQFioYs5jXB3hpcjJLiW6UafY",
  "key35": "4vYvTfQeVdBPQdCftBy5vsaC5GgUnnQEK2zwyHNYrjQd7dWZeMYWVw6sd511NnMVxCH1RLRTmoXMW8j4Wped2jXc",
  "key36": "4gdfAaBPcWx9E8Kvdt2B2ubPNeZ14YFVfUH28gT6L86r8muG4TTVwJqu8P8XTPqg9MmNkqhqkmpThA6mMSbyGrux",
  "key37": "3FyuK3sUaB1ca3g1nqHR8DhU1zjWsvxb2mnokgJuCvnK6CNSYS3QqaKWTBzXb6XBSu8U5DdZX5zTovv7DUh1iRt6"
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
