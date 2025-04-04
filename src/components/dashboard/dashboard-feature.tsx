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
    "3EGFPYFPSDDUQDyXSRVoqK2KqR8Zjt8MMvSPqb6akdivZZnDBegDivDxtix7DSLsLLmubb74XKJEkHpPEZGJMUuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z5Vu2Brm4hAXrb45neekgLyQopww2DeufNjgHFetNNsmqFcaGnsvkwHi5eyJvCfudGGdJgMgcWNJpEaCSm1ZTjq",
  "key1": "A7yReMXv4zkDxyeB3Yn7H5xE1PfTZT9e9idw19ZBVmKqXV4rAhG8PmLmkPb5pgYsYvJ6hU6gvb32JKaUsoyuntc",
  "key2": "ZxtSGD5vFe2qhEwYH3dYJueEWUPvESqk9NQrMx5txK4RLoBRktfCWH5tyMvz6DPL3pZn4VoL9CpxAXN8kXcZ63B",
  "key3": "3ssv54ssQ5zuC4WVFubxockEAUpexvGYjbVegJnHC2gnhz5As45G3q1YzNh1WS1foaKBdvHSp5rmWWpCzDu6U5ks",
  "key4": "44VnPczNpkFwBCCv4piEkRXxhtyFDPen8ivApenZC4XHNo7tNSqgifKLdw4DEM4KMDYxWAK9GBC9GcefhJERh7Uv",
  "key5": "4WFFotu6f7fCRf3VCnUhcYfYz4Qt7abJg6W7FpSABvSienDCeaCQU27gtZUWj8q3JreGfkybRJbCLpqJeJ3vdZX8",
  "key6": "2R9sG8mhBSu5jx8Endbk7FTdZhAc5x7D1sg3KSXJHN5tafyvPt6Yg9BSyQ713igt9hfdu15cMqG83cXDBBrN7BPY",
  "key7": "5d3WRRrQqRDjNTRhPhq4BWGUfcgU7xacLdkhjJf85SneqEuctjSKoYBjVcriPC1ct7rpv75Fp2sYRr6Xc6WnYqVN",
  "key8": "45c7oUZBtBFQ8tAoevRFrCHqk3pFLcYZWReVMZay6mtWHk3pNFaDFQdSWHzyM8fbUWnqW4i1M6WmqjoL3QBcvH2g",
  "key9": "5uuefDjfjRw5SGLXaZ1snSQPGCoJ6QHFNzQvLPU92ckSvYKoK7nVzTRz9LR8rYM1kfSbAFkRw5hq4iw21ksxUdhc",
  "key10": "4s4PNpwFMznFPfqAXsfjpioqYYwGM4XskBsmPLFcXdJTR4J5XsAkRsotXta6VvtTprmoiMCfXGbDqaL8gwU8S3aj",
  "key11": "3c5d1qakMjJVTGr8m7zsw8iNTBtgc6SUTBcqaQwsxzy8NNFiKRvnULfDj3JsiVo9EGN7R6UKwX6vshu9pfrYHak2",
  "key12": "2mXc9Cmamrz2WsLMGJQwXfV3fYPunUTTzjR7SvUpEdQzxP4MHrjnGfEV8Wz8KWUw4mizaY1FbG9wpgrxc2EdXQVj",
  "key13": "SK6FbkkiALzRTnF4iSQrmeYExFrWoP9pHB8QxyKHziAaEzK338EJvsCmxpqEgTtFSPevRWk4omQ5vP55do3heD3",
  "key14": "Q6C1eLYq57BZygKkMwtgNRLXuXq37KFUSSXZaQWM5iNpkorpStw4dAwK2jEGrgWEM7KVGG175qj3tSxWMVv4mb7",
  "key15": "5qxUZxfvmKgjcGcWvgDrMdp3MxpAJWCng3RphEWvPCzZYwUidJkfaddF8n6yewYAfbTrhKiunRSxeBb3V6sF7q5t",
  "key16": "3mueu3yMmjVuv1dgN8WbftUcgAc3TP9KSwdNB7G6T1mFKRDiw9XoWCFyhY46J3DhfVzVmXEgemEUJu2pxJHeMP6p",
  "key17": "5DGuw2S7Gq4Jr3hgyG97ZeqMAUh68uwBX6f86XWUFVVSUE3YPEKAhG3Ve99VVy4DGbsJN53GCah3mZkDSsgATVVh",
  "key18": "557xUxjPvnRbre3gZmL6wonuH1QCBFUP5JrhPX7UBX1Cvnp9u1G6mJYKhm98wjRPDm35FwfMBhsUt6idSUctndoL",
  "key19": "4gsdgeCEkE5KBAHjKBY8wU12PuU67mCaU9WzaxfdnfG19p5iKaHjTJtKSugAESF6AcPec6paDB1gwP2uC32igNHa",
  "key20": "2yAVHWC4H7UEd69zAZYk49dC8mzHeA9K5SXJcESdaACsKNstKx6rSG3TGMd2YQ8Ra4D1Aer3pHho8nbqCevdCJp6",
  "key21": "3WWmAgHwQuKSa9YCBXE1JQErJdSS3HiHLVHfx3SidZe66AD8tMGntwE9fT6mCQNKwjnLs42bYvMxRsY3BwQ5Aarc",
  "key22": "2dyAXcd12dYmCXNEZuHsntQSqWGNDGcC6GsNz6TrM7Yx6GQAAzxLY3QMtJt955sHrwygJquLgR7mDkdKdrxkhCiM",
  "key23": "2irHG96GEknv8dg7zgeJFY3tdgv3d4xQL6rLvAPbfjCqTFmxBc3VGmonUhwNdc28r8QtxbhMppLXryJDMsn4xoT",
  "key24": "1NncPdRxgJjBscXCRYDG7t6h1ZydXM6EwW7r5KnDprht8mtggbK2M5imj4Ry8oUJ6zB4uaU3xV8o6LVhtfjFugk",
  "key25": "2k5hn9jWphXfL34Q5hEs1UpDnXTdxSkEbP8cZZpLs6oCacEYDhnyV6wAbAJaCQfJn9RjdgY6MwXNegPkrCDT5o7Y",
  "key26": "3S4rnqS9wGd8y4x2fGZkRFWt7r55awYicy3yoNnyJdRc22qVHrov5nMPZZtLQuaZQdXvN8yxbfBTajUMmCmtHCni",
  "key27": "2HDjJs7PoKx9NS6UCQNW1PSvMkw2STFfxEHvuJWtTzQ613gbTEo18oixgeN9ELdDhe1YBUe9dFRFihybVrxjh5u8",
  "key28": "5C4qRZVe8yBdL4TzaZZizVZ1Wv71TjUyv5r57yK3vanHhn24SmwsFfucFyzohc4bMD9qWCVraECzzQ5sFxwJq7rr",
  "key29": "4mx86fDzF5XpRAHX6tEU9UCZ7KmUHRpzCG8dF8w3w1YYMoG3GG1jSSFjaqNsTp2yLLhVuTjaLJx3dfsXxwnKfatF",
  "key30": "5uJwzvVp8V1WUfTQPBK5z1VNj4WuhGRp1pNLxjyr1hbf56pHDjJNEGYnuGqRyF87EcsCwFrTEYbtB4TV7NQi5toq",
  "key31": "5FdGXqbqgKofnw8cC4psBe839hLsYY9NjB7KJbr4MEZri5Z3wj8PzEYXBqX6ZW8ieGr2wudKkDNYvVhEMh1jGY8A",
  "key32": "PLsCnQHE5k97uFcqmjYEfndWEYLcQE6oA6qK6xZrXYgygNZxYBjsSftB2GfxdEAT1zJfcb6YU5XKFvqJz7pQKYy",
  "key33": "28wH5zhVs6ZhQFYZ1vwMfkybAco75XybznoxzzEPXLGGHjiXvpdVPu1wsAdrP6CuuhyLngQDtPUy2ts5siAVsTpr",
  "key34": "4QEddbZ8zv6hwQL7V1ybxn82LoNbnzHHArqCHt9tr2Re3Ej8p719VJ9gjt1toyAWjGXv7vDsAR7MceDw9PTU2nfo",
  "key35": "2U6MVS8bS4yADhKhxKPRnftW1nhhagTZ5LfYqUvEqXfqeA8XwJSE6gSvKxbAN7ASNj3nZb2gZUYYsZ64fQgW6rn",
  "key36": "dU7gfjaFhn5iMgMEy76X1SzKxTZZC46kHsu3XmzUHq18nkgnUrLEp1KZFA6c8YvcYxsp3HffLyUJGxkfKmhn7g2",
  "key37": "2w56To5aabe8oeNmgVCfbwXxssgi6UEG87QuMN4WTUug564eoeo3Hprqbh57CmnRiVn5as1FkJudFb5zn1rF9oyM",
  "key38": "67LytwwTyXdYJLYqjM3TD8kyFNKdQdxGx6VVJE7w5Fzjysw4r4VWZRmtkpXNffHkCdc63Zk3GkvsC7THJicDHMMW",
  "key39": "18T65F9Q2ocsLR3na89S7xo7nDk11au86QckFay4FgyLcqrjEtp4xFsw7j88b39zpQPQr7uRjjZp4XcfM3qcjrf",
  "key40": "5UYR1ihBPxigkw1nSoN88tJ99GSeEuChMCzuCQ1RqzEEbSrBsD1JNcJmS311Pms8BhFu1wTnYWMv2Y1ZjL9i4Z74",
  "key41": "5C86RPWrfGBuUU5JH9LUZ1CHeV4YqgPJtsfAQ3iQ33WnKJNfoTLLtDRmtRvwagDJkFCJqHr9mJz8ShuHbzoz8YZ4",
  "key42": "bnR6FnnXBxF1fn94MtXs5dCAbSLYF9ydanVhApMmVr46PvJYvvXPptByVrDTYTaZoexUfcDYCqJTr25G9ngCcFE",
  "key43": "5v6ve22XAnzGb6JgtXcyx8fiEmunbUBS8r1yc9ijpauHwoeVLTE4bnyC2zuntx6TM5T1uuww8HBy7gBFS9HoYMWs",
  "key44": "SfeDuFj44YgFksbMpqpeUvJnqoTvNhgivmYUk6UBhmMQ1WZEz9LQhjGjjj1Bh44McmGXBo73UZn1mM2zBTLPAGo",
  "key45": "4AYUP9a4VwoSrhanR7qP4RQcZffjBy6p14QnWPYcYTU58dKH1QKQRN6bz8XHqH8V25B4pacow7dsJM8dzJKMdJot",
  "key46": "HejRHLxoNNFdd3a7ukNNMMaC51wZ9BF1fikPkn9up7SEuZWhXySgPs6rhEfr6Rw3ixr9E9K6JMqjCwEtVP69Jky",
  "key47": "3MGQFVt2Un7nLPUJBwTPk7GCRLwkPyL6cNABJQvxeYqS2JCmGssb6v5jfpmDGe9wBWh1bVFdxzCW7UhRv24nYHtH",
  "key48": "t17SEJtqFcGyzBaCRPYnsQiwY5r9wTeTXbQNHsH3QgiYw91b7X8jsRDoNH2CAm6ngTBujrPKozrpbmyaK6kD12H",
  "key49": "3iD5v66tG8Ed3TLAccTKdLgDRxE4gsUYwjnjFy2xJFJyWT2EvgFSqTr8MN8pgUHuXyQGnMXUGzVSnmGcY2BPjSJU"
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
