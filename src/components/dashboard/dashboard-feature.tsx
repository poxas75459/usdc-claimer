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
    "2m5WK2xXfhj2Bjb8EdeHjSQXJdVjnvnz52AfE86wqfA8vFs9Pa5L9Tyb25C8XqbPMZbXUA6mXhVdaRpc8LUJpXQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JRvmVd9LTpioRoMGGkeFuztPLa66j7oHKChnAFHLT2pmxTnJtT7UtHbMz5JukVQ6SYPAoRijgfgx86JTBN4hSuR",
  "key1": "3VCGajNndy5XdoCX3FcjJj566rCeyd9TXEKkAfQmXyHnddyC5ACtghnCrETDdMiYDPgTSf1PNn9DP3sJ2hZhHQud",
  "key2": "rdeasCmhzBJ1chbhS1D23WcCJS487aWjbgVpM5i3fLEA8DoF5nPDhTMUDVbTRBjwvuWHvRUYV1DgRSX5KpL7P7E",
  "key3": "2pWhcMeTZGnAmRABrgPZdEArfD3adEZrCJXLesPjJEkNJP9M9XTyUnLwWkbx1uNmMmHS78zzDjSbUjGzU49YFhcT",
  "key4": "3aw4dy4wQ27Vn24BhXDKH1xSN1UB3M7DFKDZ5xrWWbkKxUvw2a35XpUEAjU7pH6VeRtek6vb4GjGxLkADbXT3feM",
  "key5": "3NVMaKkp3cuW4ENJsDY2zoFn4oiRFBa3VeKSALXcso8CSPF9vE7MnBWppy1jQXLxxikxnknnM5sVPN2YtVnuZxAj",
  "key6": "4ARbh5XEWAj4Q2aFycPFXWxNYs7BFnsAwUvPdYWHzqusVi4e16UvgeiXFojNAHDtzMwhxo56QcYj6wKBeW24rSQx",
  "key7": "4CZM4Sbr7fom2zjsGRxk8GLsaYupXBDkVecQTqfJkCb8mbXdf9cbyCKbg7uyCRZpduHdEShohzyrDRH9HqQXZWzh",
  "key8": "5om73vt3E6r8e8pLcpxpPryavpQNaVp5e6ea1eUQ9kRPr6aPSLDqCrzq591Wyfuk8QAk1wLPsvhEckzjRHB2G64D",
  "key9": "gQTGWtEM7MS1F4FrFiJE4rsiFb4fYuyT8Ws4GQ2iFF2jqYVsPBHvgNUgLh9qE1Rucjx1Fsjs2ihZdtYvgYM6APd",
  "key10": "4M8h4inJz1iL3AFtJn9mAX8rZcYCwxu2roJSSCTRviBMJ46Vp2UR6SKA57ACjqJxyhHdbqs4aiDRYp8iqgVV2f1C",
  "key11": "4c5huWExoBgzN8THxums1RL4KzFV2sdQrF3wLhV2FUQSv31C8cSJz3Jkj4WMu1m4SwZcJudVkky3zX73yPUDxBK3",
  "key12": "21XtBUx6TPw9eHWzvA4vA2ggkz3qmjHfZrV8Vy7FtdP54wj6g2R6YXDFX6ipCj4zsiHPV3kuFfDWF6revgaLPpii",
  "key13": "4BD4pVeZH9BbAxYE1Z21W917n8T2yvZpNKnU84DmgRTbSsvp6fc4EXv6rDxc7i1HBaR1nMnbB39BnHB62LkVTpED",
  "key14": "URccW2g8MihmggtgDYbUYkXSrZsGJp3s7sbWezZfFKEe8x2MWxqUE2w9HszSG93LRqBS4S5yN39GKtNgQ41vpN6",
  "key15": "4NHoBmuChZ81rmCQE64kgKMUhg5KGQ4yKmYQDiE9YZjUNgJt9AasP5D3gtHusj5EuKMCZtWdKMZD49v7ipw5ay6o",
  "key16": "4y6wNgbtmETinCPchwxmdQ946gWS6ZD8BzTBhTuz3HAmtiokrgM4bAhd8QB5yRYHu5KHadm3N79jBy9UridaBx5i",
  "key17": "588rPyDcKujzvU7PxrEDRALw2dHE2bNMvobACZWqryVVPixdL8tF82dLQyDfFE1xAAJc4jSrZ6WAm9VA66yqUVwA",
  "key18": "3YWShWAMkRkBoniB2DpscWGkBGprinCM3SGYJSWBDg8Hwj5VwEGV2sdm8zZBfZBJEpBtBqi9pqK1Z39bZ1WnH1PC",
  "key19": "4kGwSngpzGuNa7A3ck3DFRARe4i3Pp7ZbexGrEJZXfbUVXaW9PHcicT42iVQNaVyvvhCZsejDCd5NKkW8Ncfidzi",
  "key20": "8kQKwjj8wNvqxFhsrn6AWZ8hkt8LVWhEYEZKzQfmZLz6RoWifDT3tG92RCBuTqsGAXiBmqyiHEUx25UnWwNXMvd",
  "key21": "5mWQMnXEpkpXdnTLtfqaaxahZQzh1nVWkLoHkBvzxA7u4p29y3Hb8YXKBEBTncf5r2W3LdHSZAp7EkRwJjodh4iD",
  "key22": "2UN6yamW7rjLQ1AzHMWnwnPLjfLB96zuv4mzAupxuoeAPHWSZSLqgPmJ2BRxeWbs1dBTT9KXnZJyUYqx2UybYNDC",
  "key23": "2MSxQcfYmbPJfPZDN35MXz3P3yFDcotXtTbdP1So39xnjq1ngMmAbBggDztGnKjgaWysoyj2QBNqmGrhMNTEcN61",
  "key24": "3tN8sbufpQQFmciJLzMn5ptkxdfbfUz31nCJb8WkC1awdB75eAqu2Uo9XH7JV1NZBEAY4kMPpLUKa8xJbbqH88Fb",
  "key25": "5HXgivceTXHC9Y88sk6tUgZX45EGvrNxvMXEFgieJot2Jfg5SYvoHa99aRoRobL6piFHJainhK4NV1nS43aYxQGV",
  "key26": "TBb7bY1DHkUktvsj1KWfAopZBuf8v9fKQA4WSe4VaqA2u322hi8QmQiYpJU1gAW7zvwooAgkwWJR6PZ9zXGmjv5",
  "key27": "EtmruuWn2SdMu1n84dDTyXS8Gaik9R3yBaqxsomBb5gJWY12Yx7ca8JLZ192dRqwWWpoSrrdoD9DZRpF3TqJcW3",
  "key28": "2TxsbvepZPipLWVKhSxVcQ2sTPACLwwCcqa7w65uCuuAEf6sey9K9AxYpR95SRBf82LghK1A1GWtFv6QxrtcpYYJ",
  "key29": "78x3SFESXsmVxDAdZ6DfV2Z6cGBdcmRfHuPzqYGB5q7Aay1fkMgr2MYzLng3LVV6zC9AvTjF5ihrQRr85uY1gUV",
  "key30": "3YeTuAwqedeJxRWicYAGc7YfM9KEuKcH295n1kqtbtaL5oGa4SkK7qqTKVYmi4WhpS2tDRnvHQFJiTUXf2NYdq6X",
  "key31": "4WiKpNHhFCnT1iQBVdPFTnxpMewHxRxNzxVj2oAxg5XkiWeMSuqAYDtZz5aUJLz9tcK7HG7FKvKzCBMptwADbKtC",
  "key32": "5mWPP4Ppiuk6r6kjrhCGW1aiKrDh9UN8vcbrFmSAQgHf4gaiVpuiBz9pi6YmXZkFxHC3xCDvwpuVYFxnkRpB7fkw",
  "key33": "2Zuas59snHBHKSVKfxZHFLhALpbtdePBJy8H7pKvDGcpcXCUfpQtTCx7DHR4XzWg8L4ijHd3kizAwKhqfKJQeTCi",
  "key34": "3TLVHmBqz9bvDJT1uhVUxDWcCSqsmXssQcNN6xvxCheAVfpm2qpp9QaX7eocZsxdbYQgE89RPHkgigx4zvh1Xus2",
  "key35": "61aDgjEwwaCirFRQj3SCdZsazF1LJKyH3vT4LK9YTdubQPgCzqa51dQTLgN7QGGCo3KBW7qz8LpmyGFEPCNQSYjd",
  "key36": "3R7nSBWTzbvANKo3kbKSzqYuf9e8dGFDj7UsuBeERsLJV9rUrgLC6WncFCYzX2imP9WUXYAqGUfzakvUgPkPCq8t",
  "key37": "5LkHP7MjxLVCHz65pphFZPBeYucQ2RX8GxSg8DpMGCcrUBBbHMiJUFjzAVG81s3BxHZTAPFjaRprcDHTj3swGcB1",
  "key38": "5bNzTRAmp4qGPgFjMQUbEvFwajKBQcpCNM2HyeQvRPvuUmJ3quEHh5qYmyFZq4NxLY496FGpBuzjsz2HPVBWyQYR",
  "key39": "HLB75YVnf6BqT2BHuUHHWrDPxumXiE4SEvxXmnCc4xx55orBCYm9QYeDcHxQcEjexPMvK3GAX46X9H88L2dkuqD",
  "key40": "3PCaNQRB3TSMBv5TrGhp6Fr7YuzVfaqdHaZXzAcbW4iMRFkgg92df4kk1xsWTWqfD64VaMJP4xEffRP2zAkaNiKq",
  "key41": "4BurUpfH6vMaJsi3urJAA3o7sJxWaXuocqFRtG7nXmJbM2rZc4qgwtPyjCp2zaFFJUEEVWegSc4TeCmgbQwi6Qqw",
  "key42": "28wWGD7RcWQCGpbiy4QfaVxiiReXXJ18nNoL7gALpG7UHfESfJdGW6dGoPLyqQ1kzvyjhooubgVDVTTML91nwLRH",
  "key43": "3KLr424NtDupqondG2segK9n5LYLySN3i4MWzZdhTETpaBPed5KHQvVcBwHGGHYYrUziVB5xMfXjoV22peL3vBs",
  "key44": "5NtNnLxSxattWV5UqJtkXPRYiG7vAehX9wUMcneNoc8sxWFuF8RdeTP8aFE427LetL4RAgeXpXu8RD8ur8k1aajp",
  "key45": "4VX4RNpBuNQgq3WJEF9LL6nFHiEpHBZ6mF3VyusvgjgFox1ravmtU1ZU1Qpvee1xsJxUgpBNr5MLaQGX7ZMNrrD3",
  "key46": "2THzMhKWKLS6kKCnvSLrUEdHYzb6WUEkxkBma19G2aBXo8MmHQiBnTWT5g9XYKSTJAtbusaUBV4rwjiTS4DvV6jt"
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
