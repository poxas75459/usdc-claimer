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
    "3p1f2cykqcdWLdAPLpZ48YTFMXYJpmS98HBtx9kYMvQhxBiMYGV6ebwDNNw81MGUZB8H6AejRAavfUAFoV6icREY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39X6T6JbqyUMozAHqgdWd4BunK3zUhWRxhdRzpdU5Pcup8bxNjELxmeLp9KbLmjvavMh915nAjos1H4EBY7NNR3E",
  "key1": "5pLz2UPXxpR4qNhpQmKLW85p6uEPyBP2tmUTbhkPDLoG1Umu451fg3vb1VzfmsHeYZF2mPiiRvoVSn4yGErpuF5c",
  "key2": "5AiEsfbxVxJc6nKYymcxiEStY1r1wBKPqmZGAZxEkEGL34pe2a7pda7XK9rdUnCdjZJ7kWr5JACBuevskKyTds6M",
  "key3": "3NuY1yVFSM7TJkX2RvHjxZz1ESdrTpAT4hU7q5bwyFLcnUxW7xkemGDT5u3qTeXs7GWBwKwwLQV5i2G4YZr7GoYw",
  "key4": "3KvMqejN7NcAMPnmNDEDiUoaeKPhkmhuX2Cf8RzzuPUhjq9VwsAASPa9X6LPfBVuRfyPv1rVPpaP2kLktqgyPUx9",
  "key5": "4wdgGC6ZKcS6YKQhywmHYJssCCD68bYRhrgYPwbrVjFcjijAAQk1X6viKXgx4c1YiwTXkHg2C7wzjgvsrtABJVJu",
  "key6": "XyFDHQfxhxNdt85g1eeAB6PoHDvf2GTmMPGgUYc72pdCTfmpwhZUybgiJEMuMtxWnv81j5njCrR5URba2AX4G2V",
  "key7": "5kSu7VcLk6PgC6MpKfVfVtDB77Azuxzmms5Uth72BChnEtkhr3QN3dDSVhJJPC89NgsKk7Grn8EJj33CwiYcZsNU",
  "key8": "3Eh8arnXUCvjmp4tqioN4nAwgZTyPeKqhbmyPsCzEB5MmZYN7pGiWZJiNpXPf1JpoGnGRCK83XCd2JYrQZLDDwRg",
  "key9": "3bWkrLxdcXzZQtP6GWLXi4JWbSePPzaCF8x7ojzcysWMGVQXEea5hYpKRyfdku1VRdwj6c4BZz4aeiC1YhVmDKNz",
  "key10": "dBGZe9iYEyXeRgh7AK5VwKex3ugrMp9YDff6gySQWx95p1R9AHsZmnpr52qxg9crydLJWK34qEZM9poQrFFcBxe",
  "key11": "BxjLfKyKgWj6hDBgXophCL5sc3xkbWdPLt5gE7LBPFUQbBTLW4MaQCYE1Z62dpDa3MonxfqMdGmtjdwEV27x7rz",
  "key12": "5rQNoMRD3YJ3n2iamyZkCMuErw3H2Nw8gLpfSTyLCX7y9vuxKwFJe7ZXuVKLMUYvp7hgY5Ds5jBoUpnp3FsFzsBz",
  "key13": "5ELd5sTuGH2huLyWB2y63MtvJvhrkHQtFNmFbBBckieABby3jvV2JV77hj4kQaPieNYNL8sVKx5twioSk6D4ehkn",
  "key14": "3rKdGBjq6Rg86d1Trpx65tsq2jaSYsj5EzTkbXX2rtpPJcHb4fCHc2QD39RafmC36BdJbYg2SKWVH7gDU2FF366t",
  "key15": "2Xn5AMWNdnKiAbpLgR8m38X1EA58PgsK9bishBZvitHV1a5Y6ihsQC7PNjvWbXcdA21Js29gsLD24Xue2KAWAH28",
  "key16": "3EgY8LK9zkdAS5qqPiVVuLP2T3BTKjXg1TA1BYhPT7PXqxh79k4J1QLmF3xR9eP6YYwov8X369D9YVzJSya2S5Vz",
  "key17": "22UcLt2BwEBYp3ejmT2sD5DTHxvU88MqRbU1PyjUxnRfVrgTeFfSJhcJFCX7hYp94JcUNLrsQhCaPYXK5mtiGxtG",
  "key18": "1q4QyezuTgri2QiMETnfPjx6Z8szXXv3WJrJonwiQeDLAAGKWR9RSCPugQvo5ZvovN6HP89LuQkwsL2BQJDJ4sC",
  "key19": "mhKYcLUrzq5RxDLsqxbYnYrb1XV8cQe2EAgxxrf4dPpUs1Um2vLxvEa8yhymGX8pWhhqhpakPYVaKEpiq4oBskf",
  "key20": "2jrKoxkQQn7xEMtG2RZoT5VykygiKEtm6n3R8oWAWZxw7HacH76KsXhaWXa8c29qMYZBkkKwxxkE1SqQWzTx6K7t",
  "key21": "fyM2UVcb9ZSwTESVZ3RQEeo3jAZ5RuVf61mj181i6QzW4K3qApG56ie4cN29jLAzyMbz6YWz9zR9PDMr7PC66L4",
  "key22": "2eCyDWxdBkcGWopJrNbR64MfvzbENzLBUXH8551NBNyduC3tS5fF7xMShL586SD2KvV3d2znMnx7uBQcSAeSNwfm",
  "key23": "5u9qHChA3D9LZNKLwHF7WQGoarXPS89koycXB5qw9hHLWMZQgXoZkdYxKVH9WXrDRgWtUCbT1Ymoe5FtckCbEm2V",
  "key24": "44Lm19kGqBn3M4EwXASHexeV3qhatftmPf5PTpepaqxMgefvZGQ3yR3Xwj5A2AgfKE7NUTafnHRwz79i7eXKfZxB",
  "key25": "2x1bHVtAxrUZ6Mq8ZiZjay3Zjee1gjgcdQYPAeGHfcFA3Hxj6PCvcbtYdZ62DUupDFMkF4mNi9MN4yKukPAGzspc",
  "key26": "S78T4J3sRQgRrcQryNeJWD8DMBnVmVWmRat838iLg6Hwb5zijoVwAFr3hq3dyxoatHLC8e6Ubyv6FGcsNv5Bdv3",
  "key27": "3fAbxGjp4nT3AGWCXsBpsQgjCJhdhXP61GB6qEGMcvLTjMyYj4Jpt4cdtJAvxDrmymauH81gx51kP9CmcZkLteko",
  "key28": "5ywuTHgS6WYf81Tvvi8fjUzJBcL3wj9KvwPFrWCrX3a52w4FRcLoDvBnyttYCtEZfqKeF4vfoCDdsPhcrW4oMBgb",
  "key29": "56eEk8Yipws1jBkzzxNQLJDdNa1iEz8AHCTPKM2puqhhpPBYqKtdBNGumkonPQHY5AyLAx77xjjJTPbfvN7onAMB",
  "key30": "2bgR7q3qyb4xbfB9xb6PHMwKsckQyxQMjY5uPYjvsngNBjABoMhNVVyjVvoqHiFHtecrZUYCPV8yqGGGgUMVduTd",
  "key31": "51YWAbAneQ1N9P3mz3rB6L3dAvSEaQp5GnYqUeQNe5ZfjtPNGgfBTTKp84SskWVkmkgd7HEPu9AstMLmRozsynJj",
  "key32": "2rxBHLaGKnpDYWyRNFtLZHP27ADZPU6umXjkeirZZzifruZAFYQLJWEYovvpVahqYkz9CKpyAcwgajYiMpa9PaPC",
  "key33": "64RbmscoBYTFM2a7RsJMgsCzux1JFuRnXut4GWFePrVUrRUCgHfY2GTjUo5yVjHPhKgJJdGAiCxJUFmQJQspKon5",
  "key34": "5Ew5VpYjGbMLpkcywewxgmLNEnWK1DuVcVDs26dGJWXg9LE7AtViN5rYjutuv8ojBAEVbDfidBs8REV1XJWLnWQw",
  "key35": "4azUzB374qkBxppSCVGn3KsyMTgnAGmczrwJUG8kTyGwyPB5Eqf93H1SesgvjyuNCPumagnkn3rHWUBc4qQpZ5wp",
  "key36": "2ZKujbRiQJKGeRmBJmuE3Wfxrv5epVHBtixKRRqzbj5akx4opGkkP9psJabhiJNB8QP3MBh57ECv3MMeh6zmMMcE",
  "key37": "5g64wMcAJps3Xg9UbjWSoTLqRdiCjswHyKXkQLTbSaQsnHg9RT3VGSr6rwzJo7UMdYp2PN2eXDy4kZTTQoBmkGar",
  "key38": "4aBSj9XhacCHn26FEi1QahSvT91Mxwy4Q4RMHGpy9apFpcRf8XbgY9sK95cja5dbXD8HBTUofbYxspU8QHw6N7ZU",
  "key39": "2Vpq1KwxkqFkfgJnp5PxUBWpKuKXtnJQJfTHw7nCSPXXhgUV2YonJSrukmbuMP2nYeQP7FYAobZN2qcfxhZSVM9B",
  "key40": "55tnQe8PpzauVYonLJnM6hd3nBaUFRKMfcj8mL15AWwikqGAJTSfHT6nXBzba1VFptzrP8woqSG89EzRY2TSDTnX",
  "key41": "629XwiuHN3oiJLnr1Czhn2YKA71oKtcSsRfM2odeVDFga2ULen5iALDHBocdYAUDN48S7hqMAQTVnhunmpKe2e5o",
  "key42": "3f1bvAZY44AVLtHxfYvQ2pSnWgDYGGUGkLPtXwRT7vgo1vMW1VqtfabnHy9QkWjp625gTvfmFdqDpwYQXQmd8u4p",
  "key43": "44Zisbmczw5V589CL6vppZhjZSPbL89giD1wdbmhCJbbb2Z6A6r4aAZaMsfnPQb6GtVQu1Ai42SdFpMCecKWCZUH"
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
