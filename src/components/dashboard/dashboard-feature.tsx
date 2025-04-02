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
    "3osUhAdCe3oPpBGGEbzdVHPChLjVaufZz7wXRCGAn4wTeaPXeKh51d1tPuNqdqaMQvbUhs1dAZyjHgZxLh8zeg9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K731uyD1kF2Xckysvrw2BGZdEShaGTurokUUw6r3A9yMbaYY3y2NKZs2XZHT4L2jnNxUJU5ddho3QPCXvmpjbjk",
  "key1": "4CXcW7Q9yeD27UHcETV42CX5UpM2chgYAXiccBxvCWnAtqVjbmbbJf22VmNfsqwopFxuKTNovN3aNRuoctrsioEU",
  "key2": "4NcVoLNru8sD3WBappH15HiFVX6zZRHpF2rEe9frgmJWaofamc3n624f9okxqES6nBeS7vHELKUYyr8v2dPktVwD",
  "key3": "25eRG12dG1ENRvirrkPNf3EuWKT9d2tmyyeim9N4ZArHfVbhhwpSnhX7H6fD1TiN42iv1LtG2bxy2L28xBA5V4hV",
  "key4": "4sLEW7hGfWULAd4osdkNAtRxrVELRNBTdXr7xUtnB5GtznFjZ2PUron8cnqLLbMCKkrNVYB6kHhdfX7Rrwyw3HjP",
  "key5": "4Q37kRQbJyDygCArN2r75xKsQMViX73S7tU4eDnKTahNGWdMiALs2yCVY9zr5EY2PUigptgeSruzTG34hrvBfuu1",
  "key6": "DRae7pLcKGXe1FYcA66VdJYa3Ta8r64LpkC2L2df4gShynGjSbakr3sb8NzhuJQRyYDkmV8Vz6FbddwZFe7Vb9D",
  "key7": "5s3WxZivuN23TLh4MLsWJqK6BFyPWUjK1KF5TFJ5r1jtyJ7YnmWBwqCFGNVCLeKLyWhZAujjB6Rb7obwc8MVNbjh",
  "key8": "4iahQSHm5vmF5fxAt5yrwX2tzSg88yK5Cq17Ayotf9FbhPJADzR9tYXjx4QBEpjRs5PPCWzve2VZuHGrKsSWK5Mi",
  "key9": "4yK6YXoGpPyeLmgDEhVdb2KGVX6Pvzt7Kq41ajhxBCyqDEYUcitWTtToUFUfwvsKuyDGrY3gtLwfdfomLpP4PUpS",
  "key10": "4bTeTUqMM92QQtyRYi8W4CUjzsudJoGcU1iFAuQuW3Sx9VRoXc3aYfPuFLRUVqUWSqH2VczmJ27q8oxNkL9BTa1X",
  "key11": "wccBbiEsn3KWqp9MQdb5RDKWteLBBVJtsbdzBvZdLzaNLpjLxDw1Ge3xCERjEFcy3CcGoM3QDKpJzrKWLMpdi4q",
  "key12": "4zyqHSdoU5GYPf6JraTiDAGLhXoQf47bRNWnE2cVAsEXQXvPme6amZA7trYwycnirXb8aXmHJfvBWRtHQMFQztc",
  "key13": "2cwsiBx2NeFZ7EEEWx9x9Hf2tgLuya4JFatnHLsC5VmkQUjEGvxeUr92rKNZYyftpB99nV89hGnnqzDFGWQXkvGx",
  "key14": "3pKb6FMkkgJ2XtrmLHKSjSZE4bT859jkWpPYN144WJEy6PnXnnZ9K4ZUTjhKErdGnjai4uPqjkJyvSna8Rxz9BBU",
  "key15": "5YxWBmpxj7TAViYEGeg5DUkdhzhSz58tpTNsodJ62Vs7UTuMcgh38eWUq2D2qGbTz1hjSoUbnrd7am4bdqcXtHpP",
  "key16": "MUq2pkZ76L2Qeb8x1UDduspz7Safsvp4ucKPcnLy3jm95KNHGusc7sPXJF7GyC38Q96FpEJ42QJYxrHwUfQFguC",
  "key17": "5t7TfrJboeNUpc6YzAjAGXaL4odyPvoDeuC1SzD77KV39sdeNs57PJeaMF78SG4tq1LDjXhP7N6ekP8SkEzr9Rg",
  "key18": "3wVj3vYwkX3mtja99aMBbvhjDusYxkG362jvub2vUh2knLFdwHE7qm5pLTdAarZhfiMQJfUP3mHHDnRRVSpCbwto",
  "key19": "C3h13HpdTf9EyathZDE9QGV95jntCfRdkDWtvFYZpFmJRpij4ufyMFJMCPdWEy9QBq6zso5dyyr5uaBu7XA4edn",
  "key20": "54EXBQLpQap5KuzwLwBAMkLYVvq7HrgVfbS8pQ6kFTsMptZavXMUb1U1dE7yqPj7PCHNwTavm2MRX2uGjnVsrB2b",
  "key21": "56ezwPUm2JF6J4pE7YVsg6TXCCQGCqBDAkA4rL3X6G2e99T85iUK5owVsWWfjSDREskteNcv1FFWx5h9SXtnSSXH",
  "key22": "22TB9vWnHLkDY8q4B8R5RWuxxYHkkLMotMXnY6jn6bUvek8kyUpjJPfq9xVz3sQiu5FUBF5FS9WdCGKxR8csjWzY",
  "key23": "3oVyPHvAXk98dDcsEX9oN2U5jydhPEC46SANHTjXiUCgbv2yBLFnex1Q1HqRVS5PDg23r9dwgBaBsvDZ7y5EwApZ",
  "key24": "2MSgCsjQ8Z5CDm7zCMrX995BiVRDark5CK27ZrFxvnBTCNQQhDLQbMYgi2XN8Gh48eQ6nhhmh21NAGDjfqzqMxL7",
  "key25": "2eyQ5N1tAzzXJ6cx31RskR1jt4UBNXpEEjVZ84KwUPduftGMNNWYsDKT2cUP2BtBZLnNUBdbRWVW7MsLFLVrHNRH",
  "key26": "27rcXXb8m5UoCqmFhapFXLZADY6J4n4tXnUqMrxERoyrC2FKmeQSWBCrTbcvEqmCkXPBHhuBtHoyMPssjm963qC3",
  "key27": "29sZC3cWW5FQ5FYnRACUo5J4KpDV4BeFChfb2VcLktsSj4MikHFzqcdwebmsQnTFoy2DAXpcZmH1EFANRtz9aP9V",
  "key28": "CpZKQpAgmXneGdF31jorBbGoESytRzSzK1NMcZwQ7p3Bc1qdNYhfqzab8gADk9NpoBfRSNWtFjYiLvUd4yvhBDg",
  "key29": "5p72tLRNXN5moMhCR9VAuorpwNAJ7D4JQPZFrEMcc5Y8rjfCruVKFk9p5LPkZYgtL48YnK5FeDPNGRSVvBgKgQrN",
  "key30": "iVVmAQAfJ9hMY532kv6rLCpHu5GjSjLMsjKJdM81R97y7QrWMdFKwKEA74u94ryGwRPGkmeKv4PPFZRVMfYGNFz",
  "key31": "JdipDGpmAMW3qPWY32QnnJbLw5vwuGGZTgrveosionjUCWj4ecUGC7YxsWfDaP6LWmBz1qoxC72TjPDTWe75TFb",
  "key32": "5waY2LpuBXuTJEGLky6qXYc3oBCoaZ8kqKfkQZMEKR5Y7Pkg4D2DhwDErmri1vURBRmv6oVa8zYjbieBprGVNnnd",
  "key33": "41qrmde5pujm1nJ2wVwHFDofQC8v16LtZWSWMjDB1pw59nLUezQ6H3PZbwVxDUDnqRcgXiZHiTSoancMTRsXP9X3",
  "key34": "2FZ4tDDtFyfDo7HrsYvfHbHaMHG1MrPSeA4uisvDUFHXkKXDRssGqLwaiDpBF7AbQdNCfFR2tmMD61ooJZk1QYtB",
  "key35": "2QGZAvh298NuqhaXDwSmzW7kJbgavou4MvtXqTFdXB9jwDS7EuNoqt6mzHXTrYpufZibZLXYJadMHv5UwKJwsg9H",
  "key36": "LyB8jo63JTGovebDpzVrQWuKzRi9BT8e2sBP65hngPhii2hJd5kScAYHUDsd4n4moDrHfNsqNBtmjSqWLZPZ7ZS",
  "key37": "24sr3CBL6aJU3Vd2UKByqm1TQTwzQmesqPHP2HtHzbUvK8FKf7ConwBbpYa4b2x5p27F3xUpMXYZTTxF1mi3hTWS",
  "key38": "rG3iVa2TDoCD2BKd6W5b8RtJ4MqXXJtaTTXxHbdj9EWFzvmK6qiem2aUB8nnLWzWZpyzqX68N5PnNN8yprHT7zb",
  "key39": "5XaD36eeAXKUMmzSxtwJBUuopXTk7LGPzuYms8HTJGfK6njgRP26eyZEorDqHixVVMF4XecJzaG7g7fxmbcoh5of",
  "key40": "biAEaq7HGWqTmeyv48br1P33nFjTJkTCjXqsgBQ4MVZPWXRctPdTCgkr9RSpaNHjx2NBQt463fX79jWWWEb7DEW",
  "key41": "2i6qZVPyHC4Ym7kVaM81nKnPeNcTpN8TqGSSfdGYXGq2tu9rcrtkvrwp2vBxcunTHM1h4aVXREB39DPYMhzbLWXB"
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
