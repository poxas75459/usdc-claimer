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
    "4wYWwXd26UGV5rnpkiwFUwZ1DvbvAMBQZuHYESo1UjAQ9FZJnpMReTPuzUauR741rArwknLhEiMyfMTffazedNfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTt4V9YjavNu2JZkt5VUA7sQKcnyRyPtHZ2fFzGMGYU8RW6CXCLnwUMX6gD5vcmq1iSjbkkrX8H88emnkKc4tuH",
  "key1": "5WfLpLGKGiDL7XZd6zdRKrr68UMs1DMUVyUqtBWYugW57HBm34WzU7pqhC3awKTBoaSKTFiMiydcZt7triPj77K6",
  "key2": "3UZEfNJx4XmssUX3kzueGUBwsSv8J64pHLu79q3CZzp1R4kR6ysqrhRXbDwwyQu5tuVN3fpZcnjCME57VyQnPBhq",
  "key3": "ZutDxRoLpeJJAPY2YMCSceh6cVB52P1E78sJTSpeDc9DZXpbqJ6Std3GDeXNtGnC6B9nyqRyrcUPd573D4y9X99",
  "key4": "Bhu57rZ1dQTxonY4chXXAPMYL232dTDFxta5h8FeESQewNPguRdA2BK15Zeb3DWAgxXL4gdWtJr8dUkc4Gvs8b2",
  "key5": "4Dda9FiYQy7ytjVJxeBV16yybW6mL5TykEBhnpYTKouJavEYoV1PKLJwNGpNpan6UqwvemXQZv6EajBEwtV6t2mV",
  "key6": "2w88JCfGjaYJp5BMTvJNSCzXaB5c3z2DKc3Yz9XrTFkkiRxSiFLEP7gC8pSXxiD94RtBxjMdgzJSFsoNTE2eKzp9",
  "key7": "R5YbYBF1RFA2LK3RfiFa4AStGJro8BMx17WZRzDJcTUqT5esHg4ZSQN6PeocS1vtsmcR5AQiJoSpJYrtFqArmbb",
  "key8": "rR2dVzF54VibAgy3k5u6u2dBHbXJ94mEg6M2JBbtXD2MGr7DrLXbtWhSh9tLfm3SHSvGpJFYswK2JjEaMKZn72p",
  "key9": "5N4wo5aVHFDU7UFnTsBYJvbWgoZ9vd2yTfLG9RLcu1nwXvKKsVUxrySAE752bKMRcsCzbenJYRseEZpfHz7WKohd",
  "key10": "STWmcBZRo9V9FRJPdL6VxtEPFPUgrtSvAhiU9AEfKecxFCDDSB4PCoiU8GuFk6sUKjhipKeinw1h3bTNoScsL3w",
  "key11": "hqgpTQGibg2fogj3LwzFm3fUDkRiRPZWXMSGJ9PYRr1NqpUXuVV5khnACT7DzBKJQikiGixb3ioruKL9d8Ko3To",
  "key12": "47mo1TShWhHZZcew1auEHSD6CESFU31g61jxSCAe3pK8P991bcUwQe5KGr5Wd6NrpZ2Nxisvx2mcsDmHH815acTY",
  "key13": "kxUnWpkJnC2YNpTkk1SB9xmC6YvcQ1nb1y2jt4aKyMwAi4kpQGtvCc3TQzuRqYBKKuD5Rbb8ijufcXCCAS2ARE1",
  "key14": "51da5FpBVRN6Q6jajjEqhJDSJxdoBwpTq5v4vhTAVJzEdEcX5CaSctKQLHkgjUxNdUQJBbtENkPowECXVbSB4cVd",
  "key15": "4uWowPHoTsPt8fAScmaqCj5ZvHnQ6eNGQurKuishaHgMLPaMgj9TsLBFg3M2vK8nazUsaYaVUZ5DDWeAg4Yztyat",
  "key16": "5H69BW5EjBfdCwN5AAZcNoLbS9t8fgZpwHzsue9rkh31G2BqidkcwzrEuLi2Cd5b6QjhhkKg4WMCm7sdekVyp1AJ",
  "key17": "3CFcu2QP1rPWtFJGEAuN6YKt5JcVsrYmAkiawwtjsJ47kbcPZTq779b5uGf9MkX51TuZk16tEu64p9egZBj5ak5u",
  "key18": "vQ8suL6ijdrQ9WysDJc2CUixBmPEt9SMWQ2ctt9m6RgLudxQbHF2bGDdkj4whrvpYez2icyKJdNb6dehrWsCRT3",
  "key19": "3wRe3jU8pyV7QzB8uxG3Lxw43aEbv8oj83ZrhoGRPsZxxJh8A3DWtE94qjEcEmndWPbCF6deLoABLVXchmeHVTsn",
  "key20": "5ZFMuxzZ7T57bLC2YKifWgijH5DGuE7gMpL2cBJALNH9kVnyFvTz21XTbTSfjrFH9dNF9fSmsPQNsUcX2WP3JM8K",
  "key21": "67j4w88NsDNuKrkssGGwRKVNNhKB2eDo5rz6S2zNSv5shuoMsM4KLLqWeZNLrEMbkMJ5mc79MT2y8LmLLxEh2ZmX",
  "key22": "3ahnCmUDWSWC4NRkcGPW99Q8Vp5vH3RRx3kNPueCFs5zioCry5K6LzzNoTebGWmcDRnzXVYGFPtk9VV6nVj7mLmU",
  "key23": "2HgagvrdNQGU8ftw78o1TPRghpVE9cLJz1h44XYEc1uPr4TfQRAUp4efmoQEGoZafyXtTCeoSBDDhmWKTxtXygA1",
  "key24": "2VTgMS5xhqUa4TMYtR9ZtDGoA4MZ7jt2VAZTXzSD9NoKWtDUp8s4uj9ihejb1SgYp3YpqqDGvj9mqJZRNr5w9P14",
  "key25": "2AeRTD1smMPY8TpusdSrk62TaYvkPvvX65Ym4Rzgs3ZZ7YutKCKQ5Bi9xgzJ2PtkpoTfpMN6hpe7Yf1zKT6edUVY",
  "key26": "dfbkX3fUB3Wp6xSkpTZ9rgr8TePs5Vu7NVLngsZVQDpvapeAN2GTibaaeLcSjvH23NVPkpp8kJ4tE7xTun6aUNf",
  "key27": "3vNo6BMvq9sgDejZ1xpKztGqieWrNGxnxPqRGdiN6M2DPwqzxkFxLsWCJVCUxk9VqCKgec2bdWLuxNZyQV95UXns",
  "key28": "QcEDE8zAfikaZv3SR9qc4smGF1pwvMpjhDBg8pGL49LxcfRJ9RYqgUKc6pyJzCSUuvSWJcQgqmPtrHsePchF5jP",
  "key29": "3ZkYaXUL25umKsvNdZsyuDfSe4Fs9soJAjLfkVHC3zQtkt9DzSVotikGiCrWZT3J8X5BeNPn9n7sbwzz5fGA5TGr",
  "key30": "5dZNohvu285vj9cZ7DGzDJVGwsXyKx9c6giDzf9zjXyzEmWy8s8cFTDVb2THJLeJh7tPATuqTzuxQKzFefxQLvdb",
  "key31": "3Ym7G2XFGYhceUaq4xrRL8xVyZ4Gp6hANzBDmCvX7FHY9ijnMQiastweXxWub7t3x6QA63tAJVyS1HGXH4BxhroR",
  "key32": "5no34cWyFxczcMfn8exA3dHP7BxBGgrfPhWccxFaQBcnGw7stxGGH53hJtCuDhmjiJN8mrQykK6K5XW4maxQC67Y",
  "key33": "385CYUpT8YVbMMEfym81nrrKJqSShZwvrtCHnKwFFhg3pGszCF7TDeUofNUtcc4sUJtXjunDFVmTfy4gnyK7nJkQ",
  "key34": "2VAqrSVz2BU277eLLymWbaxWCWdD26GoLh6h1Z1wXfSXVHRWNg5ZgCDbXmCMJEXmKKtEc8sUR9Q5YtbMLxf2UvRR",
  "key35": "3W6aMoxTx87yiUbnrbzAd7QhQj2L9hR3mgjHbEb79gtqf1n46hUzVR8G561ngaxeoHVktyKoLceN9TesUaRapoq2",
  "key36": "23moB4uDZv2HmueWzCqGNh2gCJ5u6CZWC1QDEHDDPm1BCWNi2ob9umKWxbv4xw8SoEPH7eQnp51FBvBadHuan13N",
  "key37": "2YCknK4zxGdHDGABeD4oFNuDAkSR6Bdumf3Fv9SXy2cJFsi5DwuBjxj9tqu9t6mXTpdCfNC8uxkFmJczLq4ddgjw",
  "key38": "kssZxNxmRHxvH8gy6qVjDRViTDtge51X3rAX82ZbcYQXSKqMJ3EJx1w4BrcTegshHJ622Pkn6emLhExcgsHDnzK",
  "key39": "69BTS88kr6RESBQfbyf3s6LCoPHGEwLauSmnyPJAigooTPhD2a4jfY6cYnYLedWXBqmcCQS1ZoKqHU5RrDcsxu9",
  "key40": "3EZ9TLqN2EmdTEPAmW2CPmVhkCQgXPcRa5Jfxq5QCNMH6uSCVnZpxaWuUiWxtBRXYnezpMTMTr1yp5KjfzUqVbT9",
  "key41": "2pigxgLiVSS9u8DNXe7c4jKDvFXNRhn66PhGb8KZWMTiXwqFCrz7K7Qu6GfvtXS7szNBfpJaWVzCNDciTRZubs78",
  "key42": "37eEG4ozgkFb6Hjyb7Ck2hhCQjYdfYQUrLLd1g2PwqPdgwGgnFMgxaEnRD5H9a4qo7SoE7FpLHUkJhqrfCgR9YNe"
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
