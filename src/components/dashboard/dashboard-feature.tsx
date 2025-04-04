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
    "2L1AkF6kWVXCg5d4DX8UL8zNVdGd7Dzt8d7GR5H8ai8UTD4zp6bjWDdtYwgZep9qdYhFCetKwGF26t6Kh2sYRbH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D98YCbRMQubTMVPYkJmUJMxBg1m7s15AoY18iTox3ZkJme639fVNaMhYyAL9ZWpM28cAYySNa2LtPon8Ry71L1R",
  "key1": "UFTxBwKo5wKz6Dh1YfmB7NB2e5GqSMtHvZ1es16ZbiPk7ZvZxivj3nLDShh13uot5ediSV6URk3u4mosgKZuFdt",
  "key2": "3fi3b4cteJe18uxPwFcFHPvcWc62DzdnEhbJxAxwbQzmBwx8mixgfGqHVoE2ZHDdHa2D8kwTcpkE3mRwavDZpUru",
  "key3": "ZLEo7X4nXoLhaki6Hd47odNpUnLfeuQQBsAfDSakt5oB9ncsUatv2vQKm33n9jazD7sx7YQtFXZeaLgZQdmMiEs",
  "key4": "anqS7YJEhDfbpM3NPz2gVz8QmpMHCz5f1r2GvaR3Mzn3rZpSZuZBeUDKL8mxv1Ty8dPwpggGikfkkd5NNcfNF94",
  "key5": "2H8bVUkrbGEig2s3hbbeVyqEwiQMW2SQYm8gtffPyrHxRqt63dqXTs8fWChC4EoSwwPu13y47JVxs3khDJEWx3CW",
  "key6": "5gJrYwVPbDnB8txJrujQDGcThcrGLtGQhaushJytx89qnAFtoij7NEGQzgCNeeaAVHfuU14ZcQ2QX5Rqgxw3KYhD",
  "key7": "3LqvBwbV1DBytBm39n83ABQ9XeKjNqTHhDoLvQ852vaq7y2SBiAZjpXmquvvGj34yNpWNZ4AhT1dwkUvR4ojoumS",
  "key8": "3VaNkkXXjVHgT5dTH8AFRBCYDLPPkoZ4w9iPDYWPj28dotN4jAzyVtYbm5gFVyAjX8pcdxirk2o8DS3VW6ZL1LB1",
  "key9": "4MupPoGA6STrzgwYf5VJrUdyr3HzNwRJzVFeMst1SoNuWVVHHL5cs8mVtrtciW5FysiNEuTzhbkL4pHdXWNZWHbp",
  "key10": "3SKr5dBS9dQ9zfnr7sCk47sYQfAB94J84xnAb6nndMEDaqySmedaFrv1JXXKVVK23iKBB2qgzjdR3tANnoQdp5Mf",
  "key11": "66NwFVSUfEUw4cYi6VHJaGXqqHZ59q7VqHhaL1uEZ74AuzGDiscn4g8xdSoLbDGgHwyJ8MFNy4eJ88rMRY9hJd4U",
  "key12": "5YMPyGZhHyD1rSQ7XkzpT3d9vSqqjzv8fY9hQRZnAivg8nXzMnC8XbA67h7a49XJjz8FcUg5m9w2KFUJ1UXdBwjC",
  "key13": "2j3CsZfmNvYPy9RnUomvUVQ8RrpVVLzUWEo9Bz6hZxZk443YseEWYr7deRAYsFRPX8p4ZvrXMd4bbpHrKDksRbAK",
  "key14": "44heGTHLBotva3JCdGWRCC5x5LCHHFhgwbwXCE3nFuz3gp8ywFHqhs8YvSAjWC9EwgfuebmC4NHpjwN4aXzD1waU",
  "key15": "2gSitMdypUxzuFLAj9knSkXLGsML2X17GRLCk2dzTvT2MZTEE87pu5aX6j4esN6hc3F8Z5L1CGkk7UYwrF1kXWfP",
  "key16": "3EhnqahXQNMzTjsBtcxqSJ3QKv35WGiv8hyDBameNgecLXNyQxABYGbqYyNy5axvURyNoRiwCPx9XajR3z7iqJF9",
  "key17": "4kKzXdtodWxanYKC1yH63c2QPLm8J4ZS9uvtaMGAno4SydZZtYgi1GVwMAJYix4x1QitA7uDevR9FAKBarxVk5qL",
  "key18": "anpjt8HgePfZTgvDxYsp16fMRGfq51saxfeucrtAhZxpR45sa9bj6dsnUP6wq7rMrNsdTz32XhFCWBgNGmr9Vwo",
  "key19": "2kKRzdLhigrztuVJichqF6B5mqaEKQze5Jom3W6mpjmaRso5qcHrTkcqbuEZw7XDUVkUBjBSnu9M1bJjRxMAB6pj",
  "key20": "2YvyXVu6BXXZiLRCsRAibKcUA8cTJW5jn7uYn3oa3Fu5nKZ9sBzcwFWCDu5YG9KEAPbnN4EbK1JDEStetmfgksMM",
  "key21": "3AQHUYZ9tfV4AkMeaNmtc1MYhEEqmtgMA83RXcQQkvQKD1LS3VrQFhTDk4YHXVqG8iiB5VWr54cVaF9qsNnWGqmQ",
  "key22": "2pBTwU8D6s2BSWVxCRfpFB4fP8kCkpjrsvXd4WkezwkscegT3cuz5APTJySFw14YYBnCzsdU8THnaagCYo1FtBoX",
  "key23": "zuTNsgp2wVnSXxDy4JHTt7x5bZzE87CEx1kkjaSwfnWzbjzZPQqPkTw6eLyuztz2YUj75Bgc3yjHC6LZvB6eGsW",
  "key24": "2FJEJugeun2Dc6DVFRwYatGBBrpVTn1vmLdwoHF6ud8qSDiwio7d8YuNDNcqV26wL8gu4gyxDf22PrJKcbshKdje",
  "key25": "5gNg5aPLxY4R85YgJNdZdUbxcHBF2ieyoZ4ubDbEWZZ8DTfm9JJmDkRLRuekFBr9jnAxTn673PNQZEi3379DYWnC",
  "key26": "5NSjD94CJMC7bRzrEXGrhK1HxrZ6rsqyMyz1bAz1T6mkFYVUDH4BXxGZRZs13vZsUpfMmJLzBmyR1w6koRb6Zpqz",
  "key27": "5ANbPXAVVVtAkuEccWjfk3mwF6ZxtFBy4VmEWzypCDRCYkUDFe8XtRMRfRFSx5uhJG9s29tDgzhkCg6AJZ5tf7om",
  "key28": "4qmXsangnytEM9J991Q4UZnwsuJdtnfW1rm9Shx7KVTKMzmryBCb6vRN53BQLSXvMeWvnCR6jHx2GhmPKcQLHdxH",
  "key29": "4ws4RxmX7DhgN18zExg5exsV8pQtTZNvq3kH87VBuq4Row6et4yYKnpttPh9yUsiRMQB4mLhjLRNUY3sUoFPq2rW",
  "key30": "5DVkevpy6QTxVPfnGSLQtk1aqDM6RnEp2ZVpGvBFDfZXPaoLDhiQLASTMQZZqapGTjb9trn2tHNn4brFDUdeYPxF",
  "key31": "2NEweC4KXkXdiEMT4n36rcNNJBNSAPqJAC9NQ8SKrGotrF26nZr5fLGtYiRW5E9PL1j9pbhMUAuiWtUYVAL4Y6Wx",
  "key32": "2HehJbgzGxVFF41D1jUXnry1HTTkFTZhpJ9wYNe5sSaJuC1X2WJfm3FAco2Q3V6WkrkKrpioHJdF69g24R3WwauQ",
  "key33": "2Xyz1DNvXD97HftpZQUMy4BCb4NaaXgi3sbFHJMSKb6kQaQd4ZVRuTfX6y6fzWnNT1EvToiXCwxrJHwx7BacYHXj",
  "key34": "3zdSMsZ2rw6HQsZ4WMRJVXb53Ek6Ve5S38QdhJvkhNgiof1fYAFrkaAgZr67b9pH15sYLPeDMj4fYQmgFQVEJzeo",
  "key35": "4qr54AQWgA5VheFZYTLvp6bP7TmniDYMaDUmzpBLeVPvpP8Qrq44SqyfnD4Yut9Pg9AcjYGy1MMyMCVNdbtLnziU",
  "key36": "4AmM5wzA8xgKVmTW1QpkrSh45fBT11A7AM2PJfPJsm8D6Lrb6eZqwUCovrBzZzWBhN8pAy9SBHWF45XrX2WDj6hb",
  "key37": "YUCua6TunKsv3jYBxHyegEbfp5rYk2DTZ13fxuKq43a8a9pGQct547mLzowWTwrAYtfq8SpFzYWxY4uMnj8ERTM",
  "key38": "491F53HiZe6WoGSipQRtzUXy6LpvV51HUyE2n8cT1HAiEmc1qAkbLVvu2yVpY4DBXGMeiZ9nwJYzU4WN7sziaPDW"
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
