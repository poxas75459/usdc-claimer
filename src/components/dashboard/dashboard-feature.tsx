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
    "jjafVEZk1rT2neFm9r3TNtrysMDdnije2BHHhA2dxxYiAkfA4L9z28J2o4kbyourAUJF2J1fJXgi53iYMoD8iDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4Zz2BR8jUz7aFYXpbYt9yV9r3FrQRfZcMR9z3EVB6GuztSuRJwssb7NdvSessKF2yaL3nRGmz4c9L9cUntW3Nz",
  "key1": "2iXq5hNWo22ooHZs4QkQCwdaWYnxxQG3e7CV13amtpdVFEFyn5xeTzyEVZoiVUJ9zPTn9kfQigZfiAWggbhXfm6R",
  "key2": "4PZrJd4SgX3hjW2QqYPWsVAYfY6bU5RYangCXHzfU4FTtmwDpgZvx9iwoFG9hFEEMz1gYHwS1yWaGGVipuodGu1E",
  "key3": "oh8uTfxLADW8xYN35L4WEZijLoSHn1sox5CojKtaBJwURNhNzsGtKaWFB8FQ6C4AJTspWmFq2bicnorVD9H8x3B",
  "key4": "55xCWF71J6Sch3SiDQdidK6Nb2jg9i53WHsYbE2PirdyDU5zU66TUP9QKYfqkQxNv65Rri5gvyNdRb2XQfzS973d",
  "key5": "3QNnSuYSowerJrv6bX2xuhq8QU2jrYRo8r47umD8xXtkxGSEDuCfn3YTGUu6owq5p1qTUReJjinydrNFLZP8yt9w",
  "key6": "3qb2ZdFp3SHQ8aTS33vEb6WzqCGYjUCjc8bd5wHxS7wLPQWBwamapiMpX2c4WioabdDHiAas1e8NYr4ASob15asJ",
  "key7": "5M7kmoqhXupxkkQhufy4mBArgJKH59mxj8cK9UoiKBdL7XsSB1C5JXmAjYFrUGz8axUM1es4TKf4e2pvoNEBg3hW",
  "key8": "4wzS6j4KfE6CvLkStMiRKnUWyHFFdgdSX7Zbgt2Eqiqf9YMrjqAGsjufyA6YqXL7JFSN1Biz1RkJja7fqUFxgubE",
  "key9": "5yapEf4ihMKpwPKMY9JURNE1LA4JMv7ja36Hwk2QGmEjmqs3DhmgosHm5MdszbBEBxSvYWi6XSVm8fR2w3UwHCts",
  "key10": "5BkctUigc5HbbdcvjcjjSmv2JPHCdqz2P35JwnepcTG7vD8TCrPc6hmBqHTToY6pbuEVjYQK3bpjspdWPubYdmSr",
  "key11": "23W7yy8gdQPozBh4ERQuSRwLevnUdDs9GR1P2ybfAot9rM7mbn7noJMn62SyWGvLKbSK5brc6BqYMSXRuwMjmnzH",
  "key12": "3JDkkwW7ytwycBfEA4URxPLV3ahuTRB4HNe4SpwjA2EJrPRWe1NvDLRKcFPQyVTJ17cfS43Pv3SKgLAvod4T1U2P",
  "key13": "2NDrysGBNmGBcKuwYCMRetgEdJY1iQafm2vP6oRcjFQaWRUBKP3RNDStJbuyWLrtUwkyRDiWjodGnWypM8ctjS1n",
  "key14": "5av7a5rbuHjQ4JgueQGNXgy9DUBVXxrfaJZuiGSDVD9dKdt7DzWwQrRYBNUAVuZDp3mkF1WQ5a9MD78ZJdnEGpC7",
  "key15": "3FizRgHQgE37HNg9LEWCWrvkbc6Fym4hKQt4YPisVdoxRd4DizyynCQHjMqQwiK2dTgpfoz9XF6cgEyR7izvJrZD",
  "key16": "CCk5g8yCkfFo3cwXeyUxPgG3WjsUELgqrEUKyNkfBrdDCBd8nwwC4zgBQ38zymEEzrzequ1FpyXNABAPUJ6hfor",
  "key17": "5dwfqzUDPQXEEH7WGHN555ghXiEzVqySJuEjjtEqzVgJminxSQokaQkAofAiJH1QrQEDJjxoAANsKZHzjCYN4aeS",
  "key18": "21WAafowFEDeAD8m5uHdYqXKoGUG4TvLBY4vv49QQEuv6NQv7n4BfvDkiU5C5T78VXw2ZtpXgHq9poEa7mNoQrrg",
  "key19": "4XQL7u9xSdvaQSYDHgDWzdEQURD534epjYjvrEvFFB2fpTGJ9q6tEDAfvd8RpWssshG6gfnVixTANfn2YJtgX1HP",
  "key20": "5CMUX47x5jNdxPNqrDA7bWcYGzoYnLgEPCCMCLqTMvTWyiwjYxu9Dm9qrZCY3EqYSSDNsw8aZhs4ZneeRcYsTaGA",
  "key21": "3HHZV8ZtNXmAQbfZDQQc76gHbvqBMUkR7GTov8WuZg8wCvWrcWZHrYMSJftSd4XDXQ5BYqwx7XeTdgUxn1zM6BDh",
  "key22": "3kbVj1thS3UoCy4YigZ67PaPpn9Pg4W6wFXzm9TXwi7nX6APMQvrCQWTTJSmhkVbaxYngBRQrgwbsBh9rH2h6ikn",
  "key23": "36RQis2hdk8wmmbHr123LRe59HNTCzo5C5798Qqaf6qykUDRydEnrvwxeu6R4hUp6wGfckSY2JLfGjBPenY74UmN",
  "key24": "3dpXce1T9Xa6Qi28ZDRnedMp7NxFEyzaXLv2jXhZfc6o3JB863acustbYWz1oFSBpwPEcLp5782Mg939dvYvfkiL",
  "key25": "oDBxSz3y3j1Knbn57x9viDd2XNhjxM5GNbgYRmAnbvRAtfSSdRjEoWFZFEjKiPgA2kUyL672C98iwrwWpatpEN3",
  "key26": "4y78jvV2bBRGzqTJ2foBN9sPwnA7JsRoGee7a3HRQNg6e8gPzx4KiZWpA7CTXPpZRWpHPbfapgeDiYcWCx3YJ3CB",
  "key27": "dbXMa8bfCG2s75emwssEMzSWhDr9GXh18TsgauUvcnygrWyHQHDnRKVzkQE6qWhgZZReNHS39Q8juoaBueKznjx",
  "key28": "D1aEYEcmYmNNdgeGbnu3ZYMh2qr76SjbTVmiG9hXUfXFM4UWfsn8KmeKLkDHN1Pc7bSPPLxTRq8uEA237LZsmkL",
  "key29": "R2r6oyWuMp4xTpjxMVVz6HDs1EP5PqvLrshjcWSWPaQBtUKiq4wTnGbAbuEVBZRLx1K55SQYxjWHfHxgpuiFRQa",
  "key30": "NrceYSuxHidbqkpat3rDh1GKc77zBKfm3gWfZr5WFqfXCy3wfDEjhK1WNXXY4vK3igNNQY1cNGT9rnDNivA5dW7",
  "key31": "VxCXxuhem5RuugmQFJsHkVVAvFe2rht71ba6DcXPh8dGy5VESBuzTj5LVhrnWCDN4MCMYsxCRJxDS83FfA3F3Bz",
  "key32": "4gRPa5Xco3L7E7J7HFGTfL3wQmSHabdQ2Jk6eYnih3tfesPiQj2arEvY5SGR4y96xhpjeD6UfPENX9WM3EsGLgZt",
  "key33": "8YWR4U5uyhgdjmajJsz3azPHRq3zdUkDTkMfqjxEJGRcWio9XnaTEkpxift8h7zQA1raDrAqqYGCis98VkJ1849",
  "key34": "2Qc7XdnpXkW9h9nJ7F7tejoQR92puCxeCpWLeRwaDsFdvdcZLmQF3z91hb4XcxxooR4X8v74pQcgjTgoDaDQwNU4",
  "key35": "4HHivYNrxZVLpTya3inQLZny5KvZDfPAzxYX9EpMxj8xphNAHX4Tv8EhQBSYyjyNboskGkuBG1X4yQHNQqJ8Wscd",
  "key36": "3mV2pyy87eeeSAnYdFij74RtvmLRu8UrxYDT9hmZaC1vgXr25KQUxpDrVZBbxBa8CuiSPHz4X7Vz6K4cfpwnDDyT",
  "key37": "2Gk8iERgk5Ks6MYzLYtnRWoawmqhg43QRrvS9z7PvB9SoG3BrpnGtZCJXnedXhi5qVbCuEEGhaS1JiwTycDvwHiS",
  "key38": "2tK1bjLMwqk4mY6ecMebJ3DA7jMqxWjThyq69SxHj2HwDFEYJ6Xf9yyffrHz3E7sqUbua1JrJTuFZ7pY9nDnJtwa",
  "key39": "44jFWo3iNa9QYdG369K8k5EQDaWSB9NoS4YbHUvYaZTwRZheMkPXPtHYsnP3n5vHTL4j6ozn4beNshba5BMCU7u3",
  "key40": "5vH5b1g6Mc2C9tgMhuqDm9NgKjsfyKZ2skZrpPMcEkkST4TGuXECDJKz6NaGPJk8zKNsNRQ6hAWswRKdzkee17Fv",
  "key41": "2QuA5mDLFSwXyTzb1uvEgPXbMRsuxktYqjptzG4i4TxymvC18f1vUxz3s8jHBAE7iVeyG35zfjMr2Dub4xCjHsDG",
  "key42": "25FH92wdnTZb2sduPrsUGQMpCtCmRqiRBVqYexrn4siEJ1whj3PA1ws65HaoNHqAE5L3XkqaLEQaYacrdMe5NnQe",
  "key43": "2594A17A6t7S5NUrkTumyhvXPvF2jHjuKRYw1ezwUKocxjVwKPm4mEiMohGkbCi4ePjxn7eW8Uu7ZZdNyNLsEosD",
  "key44": "3iHsFt9hEZa4ePHQThikN7PUne4Qy5of8WtMH665LrxBJQKNooUHk7KrfmHSBeqNyHdGVLB1wu18gtipCCHis7G6",
  "key45": "4j7NAkS7LtbZEzzqQC4vuJqPwH9R5ifhSeYccgaPKAn25jDVYDfCxwFSFSeoG56xkB2ufEYZSbGXN65FGNVuVuut"
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
