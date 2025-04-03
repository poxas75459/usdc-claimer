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
    "5iYRfaiPUsEMiNJnN2JqnWnB2rMzrAqh9PZkS7kHf2bjwCCTSyyZc3WopP1pGKXd6zDWWjENuHaeZ5gLcTdpcz55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgWwfxwLso2X6u34tB7kJ4GAMn99ZMaU9fneFBsXSFspHLKjzsjyNn8mbpXdqtJK17gRSmtKEm5FSeAkdibcTwB",
  "key1": "2AUW1HrD2MuRE5KSCx1VJm7DALKT4EPrj94XGJVexnCvBeULrHpdVttV86iCPfw32bVdXkjoF8tsN92vMKMzd2pn",
  "key2": "21sRzrLywERZsbCg47JZgYTKgAnexnkk12REuEFGgQkUCb2vMtHos9ZsLGQaFBYH7CDG86MaydN1Dyvx2KQxoEWC",
  "key3": "2e8SWs5PhaefafjiXBX8u5uxt4x4Ftuh9HTHkioFaYy1mSHwzKuRBasTYjcpLt86hr7a8FJYQ7smZgxBzsXK3sPL",
  "key4": "43oVMnkpXWcyYEgPquoULcjEuAPztkTwzY7Nu2Rmc3K6i3KMkkrfCHArqGNuoXC5KMjR3JiXnpR2tA1vxU8xGPA8",
  "key5": "4U83C3XvHYkaDRrWoAH451i1GcLigMhqCGXibTT6VUsorfMDmXDVB1ZDsAmJmXhFfTypXH1n3DYj7Z8m91rXVeG6",
  "key6": "5MSdXpAFcZziyb4aAXFKZhJGo28z1TWe1nPqycjXQfy2CdZ5rLxqLaSad2aX9kDhjStjgpBv1WkUqG2Yxg22G3yE",
  "key7": "3oEZgh4btGTHvEHdHYQqrWKxBoSuG2wZ6apzWAf33sPJNUZW86v1AFaKe7udKE4zQDay6Rhn976tHZAMwQjCXsLa",
  "key8": "2qqC2Mb7uXtFXnFo34FZYzA3aXxtJ5JoWAGVMieNvezzVxERvBq1Gvo3R15Es5KHHXEZyCxMCSpyLNsqYvc2jj5T",
  "key9": "4tF9CPZzsukTE5sTgRMZXFE88AfAfoqeF378j4U3VHa4DyiF4m8MtmZdeG3qE1bVKXshu6tpaTLkvXpaPVBvuSfv",
  "key10": "547tDJSKS8fNA6mH7cdsprwMePyY3XgvTXyG7qGrq1t8W9pFsCpG85snccHL1WpNaKgwkLCyoiUEHkgAbBAmQumW",
  "key11": "5UceUC3NbggwQYeeNfdheBNx6D13gZpd3FenoS2MywiRt5UMDTizvV6ph7JSY1rSnvqwNb9eJ7uFL6GvQYTz1wzo",
  "key12": "5F3t7tu5NyVetbss6qZap4xhicfe8UhWRiHqsBcKSE3JJZiWPJSq1zVMDjxLx1k3y8oBzQVcbGjRi228Brg7ZiPT",
  "key13": "XCmAoCsBSz1WqhyeorBRx5eoDPYGvxS57PHkiQ2DJS3Q3byx62YHqCKagRB8VpJAgWYAC568SXrVXJrw8Quoptq",
  "key14": "31vBLkT8AMcrJkbetbBFL1c6QKNpdd1PUrVDxwES4gR6zr1RgWwiYLtknFJQeTwz8hpa7VdaJetjvbiHuBGir9AD",
  "key15": "4DDMqQ3NLqUEikVqUZVvncv99cp4hLSNKnFmmsnUjLR8aRuCES2Ceb86yg9vzRohKBrG75nej7754Ytu6eqYerdb",
  "key16": "e5W72zgW7kAUYfvfdkhZGoA1TUY7r9iNfnfJ91mWJxh3sQtNjTnF8Ex7F8kQaqyqLZrtdZYqAUjLgoG7rKT255p",
  "key17": "4eyq8ECacgcK6FbWMwyRYh5f6YAuvos5Gjs86ohKcKrviSuZhxroLoi3XRdubTTR5tuMqWmSzkWVo4KxvydAcSM6",
  "key18": "3xoH3jXXJbc93N5c67j2qQHPvRnUsLhRHtVRDR42iJi26kX9FHgTqeGochRgDRJc3mi7tvnQ65Vrbj7K3s6DpeFc",
  "key19": "fLT9ho4LmTZUxPT76uGqAYVmWZrwiUMEu8xwRztVtFXB8C2VCE4a2BQiPoDoyKVuv1RpMxLSMsFR1TkiJsf7U7H",
  "key20": "49USxZ1K8sK5cuyBVPVwh8a1WJUYRN1Na21di1bDhZi1D1wN1FzpVxN9e9pDuHiReq7BruztjJMf5rp95p3Gf7Dq",
  "key21": "5K95vsevktDypxpaLpM5H8apNSkJGXqedS9EtLCNpUJvDUxP5fGUP1uYHLh3XEYvCz1YKUjR99EiXV3fRnNg83qt",
  "key22": "3k536E6gpBQesgbxYN87ptbod7Zhf5Y8VLxjNZpUY4s3b1BmyxMJtevoNzjBmRBHkpfMcyLANSAawowidSc8GufM",
  "key23": "39juxrxU9scbubWeCfZW1oE8QwjykL3ZM7XxdMe33WDcTVUqaLt9uCWwAPSHREfBhgR93f3g5froWDaPoR9MtY3h",
  "key24": "2tWBofYNbUPNspKEjuswBWT8ULciJNC5Grre8Cp7e68hp2aNoZVnwufh3cP5GVyupEzqy3RFtGo8q4wYGx6prNww",
  "key25": "2NSxykmaUNs4PSN6JnDruixs3QPW6cR8f3xi34BHgxzNfisb8LYTMfG44pnw4uiKV3dk8Ex5F23UwKsfMd6aLA93",
  "key26": "2Df4QsDAvg5Vo5KCHko2DfCoBovHrLXCnSoZfwgWLpiVVX4jDYE7Wonu1ix55bh5UBt2zm5G8EKXNQgbY1dJ9R53",
  "key27": "2djXpHUCKjMJyWiUUC8hJ7R9JAsrVJXswnEVBR7ZMTPenJnky5bPqqaX8gYseZ9uvQDmZUrMr5MGiaN8eqSwHguC",
  "key28": "2JCJ6FgRztW86WYwKSkSkQRJfX69JvaZJJdEJWWPdabJzuAHDF3yrYbbU9FqHkQYYJcWLrwX9Nod8u2XToRz1oJ",
  "key29": "Wc6PLJZcG8G7EVfE5Prb5pEdpUsWxckSAuUofQ3rUPkgCexRpyN8p7MWcw1GkzqBvnp2LBLUsLAxfrDtL1shh3Z",
  "key30": "3ETFgFoU6MKiCyuYhgM2r8YvfW1pmL3e4q3PfCT5e8c1jeVFLgRm1K8sBrrzbbcyCJzeQicmrZNsfHQ7zUyqmdWe",
  "key31": "3YjNgzYC9BHNRumDFoXAQpLHQR8GB3x7APfUwzCrEdQbYgUrxacPZQaLaUgSDb3Xj85Zg2YHpx6FhEAkX7gkyftP",
  "key32": "5JVHBABJtUbcBafCQGnp7h8AjE3ipztbdfGxQ2qgXkgZromG9iufizchjpXdUUduoRcjK8JGwEpj64VXejPdUyjE",
  "key33": "CSxQ4o4cMPnc37g6RrtF5Mqwe7bU1PRa7gBr67amu2WhHhdqJEvG86m2bDcD2P5o4CNHo1P71wphcGQEfCxAisw",
  "key34": "5SgQuMXsoPhWgivQFQL6oajo3CyxqVrRWvBPaX3o65iS4pW511Gf573gyDS3PfmgVmLKH9NQPqrEFiUygSdcXema",
  "key35": "4ndbWeoaxehLKP7jyqBJGZuQcBqLunBZ4G3TgXAtbp9hk8wzEEsnzuZ2XA92t5KhSDCWu8GKiptVeEnuG2HEFu6w",
  "key36": "4JjtY7csy2Y3rkxncbUS5myYw6G6SdbjKceV7rX9pncTHyg6ZBcfC4wffqdmzGaibkcGqcUzmH9xXCjyRfByfmMn",
  "key37": "3N7hShqG33MKFpeCT2FvdEepocq5f5PHwBVZiLeY2fBkyhsNpzC9DDkWxnrFK4nKYXK9vQyziUNb6xCcaUs6pyAF",
  "key38": "2jHbaQM5hRQM63kAvgnjZrR57DM5tokfkS9HGQ8wc1HDSbNDiUN58ZUVijArrJCbWq6rLhqwJayXX9kVG5ro1Cgx",
  "key39": "dgn1VdhLxYTe3pzb4M53FXqYr1ngUqSyXAiwh375SJS9PWy3gA72TpVZKuMuWmqhRX87wdxyC8R8QyzNt2TndKh",
  "key40": "39cK7w4b2gBCNdRXK7EAhTbUypF1fevUmernE434td5gGFtZUoxUFVQZtM7NLze9qWRofSYR9dCCJnHoHa7BjnTU",
  "key41": "238Wr5jraqf5A5J8fEAikrXBTowhjjq1124LExJ7837SouANPtEju1BoK16198XiDU3wjs86fQmZ7E1Zpa58pfNJ",
  "key42": "3W8eHMNuLDS6d2UbGBvoNJt4QQADpxXfD9J7AxG2g7qS2UNaCUgNjM5iq7MX777gBCTFQvLXQAHJ7dV3fVk8hmh6",
  "key43": "2neaMooowACooJp49qxvCf6avoLmCjLbKrCp9tj25THWMqWn4My73V3kzHM8Xrz27qmCEoVZCEAkjASfYdkQsQfX"
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
