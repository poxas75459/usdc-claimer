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
    "41XWEZKQ3pnScDk5f5SCNYeLA9wd6if7jYNhMrLDj6C4c2NXRT46vdhDGyLzLtUv5fqUCYFpYRtVfWgCJXZsvfyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvTLRrydeqNVxtj2FDdYSSBZNp3qkSJg2KtDf6ufYBbiRVEJkdbP5u849ZM6KQFHyZg8hxgHU8TcYPms7i7icGu",
  "key1": "36SJmVgSEiJGRFDfMc9VqHEY9tU3HDsSfcWYaoJ6f69LXrugcHermcGXJEg2dGYaC61iHL6hvb2aECsDLFhP69oL",
  "key2": "2KgAsxCvMa5qSyBKbXXJ6VAT8Lww47AymacQrqmXhmefRarLEPBUPydewnBDXRjJDaaDiVAs9yKhrcW41MY4PpNT",
  "key3": "cWCYpAnFj2pBzA27rYUFsdUiRANuFKvC6a3dPpPjDuG6z7GsbsXGRcMNBxXfu9Wc3LCF27oRncLyt22uzU6oTkL",
  "key4": "3Ef3jFhLPjMYMtm4aCTCbFs352nYJG2iXapFbAhceDegrgsX1jwNLvX97n6VrEfRwae3K2xHC51UKs9XBRZZ9ep8",
  "key5": "5SUXTRFx93vouPhWEpH2EPR7AJ5MDQLvYoKicTcwmi2dnN637zHiL8doDsx6qdiUBtA52Nwk4p1tVi8Bu2beCW5M",
  "key6": "2quYCqsCno8Sx4Z9BSPkJfjpQ4rpk4uWTTdc65BfbSo3tyckGYmLeAHz2Tq7P8U2CS6R6VAP4JkKquvRE42gVzgM",
  "key7": "bzpspRfnJcxwc25cPTF7hhhyLCkL3hX8jFvjBzhRCmtELN7SfS2axpW5ryBDtniVGW6FayiRPoujUwAXSB4QQb7",
  "key8": "2mrHrM1wPkw5SpBtpjQgU85QzQsDTeriiuPe2v6g6m81BeQGmjWa92smY8mvMYrFi9VdnbCtrnoScNsXwXGtx65C",
  "key9": "5sBUP9TLmoqfxB5c6o6BEEtrvdUD3547Jy6iWPxYbwAcobL8gXwEJwEwUr451C7t2AMwq3aFTioMHtywX4c7X6GY",
  "key10": "4jtYFeDBiENznQB6yct3LK6Vy8DVA5Pv9Uv7Pp3GJz9kARvmjaEwRL8KnU3G91kZiH23cKBhmMXL7Jbm9cDr6w7",
  "key11": "3RDSQxMkyKmt9YLTZL6y7Zuc5sT6zTw52BV2JNq4qroU8pmxx935vvxUHhN61HcT6uDetG1mLyeXbT226FGFauoY",
  "key12": "34ShwrNqhM7UjW4m6ouum2nVmyaGsRpUvkNwzJypAUmayRU3iXoYeLfEEAzZ6CQG7tDq3LBD29RPRYrG7Sv8cr1s",
  "key13": "ucJsh1KVuKyx9MLhhaqtyzn7TnAfGVtfDLFE43nFbz7nLceND2p3RUoMAhR2ZwK9YFW4cRoMczRpqNsKiUdHozy",
  "key14": "2yXt4uYBKSeEUrgUXGAbrfbGB9F517XUBAz4Vi4c6PRV2gdDbH1NF69SEsuUNL8vG1suUzuKKQug33aT1y5uGu3U",
  "key15": "5en3QDN2mQHszfsBmaA8X5UtWJLjw1JVVkNWcuHJz9Dwk3NYrBtzG4A7gb1EPCVnLxGYcuJH34vrHk9zQmL8cjnC",
  "key16": "5WRbqV6nnYmCtyYdNXkGrZvgx7cD2huZ4Ap3hJgRMZb14TgJtTCBjZPmAuxf8gi9bhDpxQzEbswpJvWBYEAKkEh4",
  "key17": "2NekJYGMPzV79gvtjGU6pWhJTFdWra87dF7Niynd2Rtto9XYioDfj9W2Dn6CNfRSEbkoVAps2NAZWpRoeGrYfY3Q",
  "key18": "51nKEHxpwemnhMKHNboMRzjQUwTA4W75QuppTYRBDG4TBjWYK8QxWhiPaeUAumqCqgfhMNVf6keygzvt8SoJB57Y",
  "key19": "2nehLtSKChu2VqX2UowvfsCaJfVtsbpRom3HwdGtcUdXXET38XcEJWwgjR2XeXnPK1Du8xa5VPKbmNUVunkCysJZ",
  "key20": "3BqjNaoed4KYE5Ng7pKWk29DSSo3f6UcdjmQqop53uV9T9zhdXESNaXL7ibGSAZPEuhRhmvmML8k6ADrkP8sUdRs",
  "key21": "2uY71w4ajc1BcJHtZtKrv8XmfCbWc3UAwghjq5LBsEq9wmVLZvmCFaTXaec27JGYdmMWrAsXpVw2c2KFW42oshPP",
  "key22": "5MqrGJ1iicJuuxyfnbywrdcqRAdvAYxQ4gnhFVDs9XzJ9EwWGGhCiAHaWH73j8xe5Vmmj8X2TjJx2nX5oycBGywV",
  "key23": "pbFasdGA6kQgRGXg3jRJyD3g6F3qCVGAAm7HsoqPC4tbYdKG2Egq2t9LPboJYZeWpqVypVoMeDMCuDxV2XH1jXg",
  "key24": "38MVBxuCuTXWDqThMsu6meegHhc9Uj1jwxeU92Bh5U6ae5BouMRJFD9m7PR3S8uG7aPTBf2CWF93KmwBBDQoT4d8",
  "key25": "5KqA6pYLjhY6Q69GP5bTr1aYT7dwF6x4Gtw7tiuNgzmw2uemFn5dhhEoppRLfxeEVvHgo9zkk7ojjPme1DQxzEdZ",
  "key26": "Ee6psJXW14MkramQWjt1xwneGGyfCi5YbkLjqfRtTLtUcvab7BX13nmL1L2D5qPAoiwqrGDVw3Y5bTwgTemQk42",
  "key27": "224eKVtteb3XnohDc3zq6MoRv1jvTUyPBFpfrEdMKCsTjHnP7fToHAxBj5e8g9bJo9nZV6HjcsUddYnA86r7XiEp",
  "key28": "omFMMsqZ4rgPxopdpuGz5rVv1HhcUgPzstVJ5NN4aEybNnNKdpxZoQqFfjatb7vEsPN51T54UhqdMKD9sFBJPwL",
  "key29": "2dVyr7cYv6fW2mrmeHrx1zpo8HSLF5fdzg6kWrvrb7mS4VrRshUvRNs3EmSjCdGZTqj7QxJnRBqUrJmJPsQdHnkC",
  "key30": "3RUtETL3oKSZnyswSmNpex9zQ5QwCKL91vNXMR1qTYA8gna1cgjzfKvVZBcA26HLtkyE8n9biAB66xsa8uNJXyeY",
  "key31": "P3WgNv8ax2evCh2yvHXFMsA6TKdTqvsayBTpAArwUvtwsMZRjh5pyvejuWuxBiXA1zTBySZc3mj7QcZmCsJyMrv",
  "key32": "pj8746c2inA4VpNJrJyTJZ4zf3PJhUvydY6oa5cpWRDjH4YoEubNSSDs7zzFiucuVMefv5UVRPtJtcLMcqvEozS",
  "key33": "3UTk3tLnJKS8vFSuNWqZ255kCwjKADK2kYouYGdADCBFSY3hjGodEw4tkGJDCjmmZczcVeSvYJ6VdBxpfnvj8xoS",
  "key34": "4zsFFhULkury4bmXiJKaCaXuZpkwY6MPfZWXD98kZAURYYfhDreHxqyxgdX7tEQJPncax6KL8NqdRDaSGdJ5ZkKx",
  "key35": "4tjb1fvKmNgoWLBogYyMBA9wWvwAr8yWGaNAa2yiTnUWweC9gguuhKHUiTKzzcdiambFVSg8DKhuxjb6G2yZu7Xc",
  "key36": "3VomJ1yNG5WMKGPFkxxs5nq9bpTMpzcRpd3atsgFXnXfHk38MLA4KmUXnkAWdwt1FeNh83Szy5W4DcTywDjoCq7X",
  "key37": "5Xc7u7J75Aiv1zyREH3oRmKh2NZch2B74StApnwXaHCUJ45nrp5s14r2NnFN6N9nexNdszbrhMaoQvB1A7BKj2KP",
  "key38": "2423B8b2kBroFWsZFCU6dyLtQ1PgkNH7Jn517JspAS1gVr2BgE1SyHqeazuvX9Pute7A265gsdT79TkCsAX7nszE",
  "key39": "5fCX4mmZ8JmNUj45xnZcaxsADD1btgM7sPSWTL7jfphHB4E4T9HHkvagUrJ87TnFUDcZgLVhFtgF1L9vKF8tjaP7",
  "key40": "3Sgd6nwgrtPCcrFd3w95mBnFwdcouMervcW2mFioapkaSRTWFAKxMuuUCpxixeT6ZoS7p1Jqr89LSXeknNe7xHDd",
  "key41": "4oe5yUy59uvua8mNXzMZeUHKXpwM96jBNq7Ydzbn25UQYzJ537SJWCWye3cohp6v8AS6r4K4p7RCowAzUV5RspuJ"
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
