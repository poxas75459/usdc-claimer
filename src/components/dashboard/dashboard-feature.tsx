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
    "3AeTXrHP21y6yyDSC5g76LUw2fQPhfJcUU8xoLGc71mzxUvebtK9fQYG2E9wiH5njxL1yzrCKuRngFx189XvD2ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wV8YoQY5TruX9n6cKeKUmAUsgj2LewUgLCyMpbA8qmi9xEayDkLKNMRwYQgzGYrjymb2KArWZKWsi3EMVrHAnAp",
  "key1": "2GbyEy6p7fgtY2G9pVcyUwZC9zWkAj2w8H5DJCBg7Pe5JbjkGGQqfUTGEkhxhWWvRN457deEY7E1TYA59D9spW11",
  "key2": "3jeC6oJnrsxEDs8E7aMy9UFg7JGtBeABYNs1sBt69rwf8Gd4Sj81Qp2hfCAXCrYi8G4wnytqXgYLyf5WCRDVnhEs",
  "key3": "3fFwNAPQ358pv3yCAUXWvqsF5Df5RYtyrCApUuvhh2myDsLPts3rqTFx6fVLUD8tTowwjMrYrC2DDHTbRif5wswT",
  "key4": "5LncSqFCjxq1Gmz65L9qDPj3EuZ3Pb9MGzPpSxEX4Ry3XZcEFq6nBfZt2MHSMzsmdwMuVfuS5NhKVDAUxkUBtJmN",
  "key5": "3zLr9kFbvQrYzJzrYpXuD1rbi6cWxgrgjyHuiQQemBJxA31dyFtxrH5NkPAsxWvL51zmzKpuCyvPYvXGEh85J2nh",
  "key6": "hA2PSEZqBCbJ6biLZ6Q8nZmTrbvEbgqec7mcggmQ26v3BevZtxmTKjaDcbmY3GnoN4WwzPmTwTYZMRixxKWf5Zq",
  "key7": "43UxH1i4doMkVXtjHEQfJEny2JGHPxoVMHBqBHPJc1vHrCkQphDzMXJiqrX556svk5iFnSQAkYTRtv2LFLUJyuGK",
  "key8": "FXQeue162qt2E3c37kuPboSK2zCnHP9VJB2qU69CELXXoamx7yg6rbcJyngAnFDuAukiAgBdxHR3nghgLp8WkUQ",
  "key9": "2FEoPyB7raupdTdeh6kodq6A3JADQdtvoj1dKAXDpohbSqXdcH3d3xJUqdLT8hPXx1dLE8M79k2YkbVUqJ3NdTLF",
  "key10": "3usAVowScQTBGKknQatXJZWc2EGToYXNLbWWXmkGE4u9zURgczLKB4ZSt4qVu4jCKCYFp2VMQ8qsodudykbnjo65",
  "key11": "2TkRMy5tZoADT455RycfTKqBkY3jrsFmphMNUxWodfmvG8xSEEGMah7vgHWiccCYjpppNXe77CtVD1eUQHWogusV",
  "key12": "4ZE8Qt9gtVTqzr1sLw4t2PppWm5MCj5DhrzkGrp4h43BtoqsFFNqZ5duu846cS9q3JZYZdUgLfpcmVYr7SxQvfce",
  "key13": "wkWDCjsRGos2ihriv5cmqZnPaeLNxXvvi3VLRoTvTr3EkDue74dhTRBawY3yjprqVtGHraHiTWm1c7nwjY62vxE",
  "key14": "3HHcmzHzHwtekthkSsrQvudKYGBsbPZbtd9uHyC82DpzrZbUu4m8n8fYTGQyWHsTCjRy741SMCJxtLGegmFqUwgN",
  "key15": "4zfDq1bMDVXw62Jr1K9P8guomq88cZPxQVNb5gSYAcqPdPYS7GKNTcCMLAKhwGRfuov2h1LfzuNb6Vfp2U2wT5C1",
  "key16": "rXHxgKnATvN1eJRyyXjKvcADE5j5RPJR6Yo8eDSUJY4wNeTAWtTUVuMz6pWEJdpakF44y2Z6xp7tMyRzok6NUBd",
  "key17": "wXjrH3M6QjkWP4qUymKPxw7tcYjA87PihCqo5EQHQdqe8bhNGs2Bg17D4SA9GUZX9iJ1mBUnnkeqkVydzJRqZ5j",
  "key18": "25TAiFpcHB1iks9mdr1EU2D4deMsnQws3qKUcrnAjBbQLXoTz2Aa4GHjEnXNkPuH6PmnDr1YAykhyUTFuDCf4Fyc",
  "key19": "YYkyJUQJE1C1ypvRBBRG9bijQDyK4tAV6d1cMBBWetS97uzqBQ6fQ1EibBevU1uPAtWxTSXhaaewZAKrcdtoFKQ",
  "key20": "3FKuSUT7quA39oCDHhV22HvJrwV4f9o6gQ9twqXcZxYe9AZLBfFqy8Fbyusvuqq6dZicxnd8d2QgVXghgQDkwawB",
  "key21": "tWNEEaiJ4eN5oab65icsnRzsxopdURXFY76US6v5BGCTfWjfssG7FzByNgLTghhfWy3b8dzuHLt4qmkseDYmZ1g",
  "key22": "2XT5jF5q2Ud6Q8k2iZNVgRE8CvHqiDNMs5zy7Kqtfn3Tonbqs4Su8c8uLPURhDnxN6bq7XpuXUjRzvFGKWA8fBML",
  "key23": "5BQnEbRAsYAxQ65NqSPa61R6vAA99KCWuxG6NdC3ZyRsBeAL9VedwHXP2HpssZp8MxxrHEcvnqhFACJ3RB7kB5vw",
  "key24": "24e7WU2F55LuRsz2x9EH2pJfc1x3MKaLs5R21QSsLe7p816J2ohaB4GkhZY83Kycs7rBNLuoXFKsr58zUvErz6Bv",
  "key25": "3q4fsDqKQG2muBWTZPke9zZzMDwVkmYxTmwSxYbhrABNgdXUwgMKEppZeL25sxvJTGUdNPojRbha5cYgdCsThin1",
  "key26": "5X3rUTZoQDZ8PPNq5XpMRs3RJVHnmNv2dmWHdNYrd6nXbDgZDMUv9BdJUXrmhCztLnWootaWvi4t4UJVWYoTq8MY",
  "key27": "5XBVgRsvahr9CYKeCyzPZbWpuurUPMcJeA8WLDxNWB5BRKRYrGyxm8A1LyMPpEZuc3JCX5zkCwA1ewFczo99984P",
  "key28": "3pBZ6kFYoBVoroqzjBpo257tLS1SHo472H4Z4B8XsF9JCmvVw56RfyP3bMNx15w2aqDyhoGZxmjDE1ozeh3Z2TNn",
  "key29": "5RDWXaAHnMbAViY6Crju4imdYqvuH5CD3jrN5jZQ6C8bByFPkkMxZnuCvc77czs3gg9aTMAVj4t2q2BcfEDj4QC5",
  "key30": "3pU36xV34vGekrZKR1XLBc7kLCMAZkkyyWoWVxTwtdrY5zUzjmMPyVAXm1HLvZZSsnokwuGTs94sy3H8AUgKb3GD",
  "key31": "4MwxnQJhGcDkz3Mm9xxYpdmKWSy7SRfyzfgYFaKdwAxFgjWRz4P2b1bkF2SgtLYm6fCRQHxz4FpMSNUNgkocMt47",
  "key32": "byaptDVpdjXAG1M3UBnHmeDfwgqR3PfgTkmxaFVpLkC8LVJzx4FH3krmcJTWr2CJke7HmRtrmb6jN4iWkk1NEgC",
  "key33": "2JiR8ie8W5avqUXTzm9q29UuUjV4NripoRggsWEVV6ekgd3Jt7XhGzffzYyKtsC8AyqQSTuZ6Pq3sQv6qxFvRxAb",
  "key34": "2s7CQzoUyKXrEM4cLS1zh3gFPvZrCyoMoH9tAvBpLR7SgAhpQg6MqBAAY7DhDL9cMwY74iozs8mZTZux5rdoNTzc",
  "key35": "2xR16TrQLjMKD3Y5zVEUbbTDv2L3Wx3yP1umuLvSZhtdtdmyipo5DWhewPUpyKfsHVGAX549Em7QmZPXJ8e1ZmDS"
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
