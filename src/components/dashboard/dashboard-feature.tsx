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
    "FPdiw1Lpy9toWzLSSqJn9YY8e4Jx2sT9p9ymw6ca41p4VsySddWTmtYXhUikRqZdFBqmHgVuQtSj4yGLgRss3C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53q7Nv7MNRJkgPMnz2aYE6cZhDbKHKWTd2i1gDzBCUAWKXEL5ooKUxRLbK54isGbHTuxRi9oxtkQz2eLBych2DpY",
  "key1": "5nF36Ampz3DryJzhYWPjkZfKiw7FMGM7iXdwaawmDLjwN38U8GtLFyauWRkmLsEafobFdxvXAnbLXj48cuKR9Ly6",
  "key2": "3GTHwya2AGFqyR7sHP2j6wi7DsWnUWKvN4i6UrgniUbZY28kRX9sowbYbcTckQWuEreYtugoAJiBjbW6f1XQckfp",
  "key3": "4EmAYkxBtLCt8nYhUVhoV5HvZX9c6XyQ6q7ypCXxAYsB73KxgzSRm4JYPBWs8HNp6XuuxnQYCDt7h4pFZQ8fWmjA",
  "key4": "ViPNVjAgKQnWFH4M2FgCTUqiNwyjxFMJtUkXnM5P7YM5xnxJCujWsREztCmHzfUTaJT76Tu9yxYkxTu8LRHkUez",
  "key5": "6dQitaUTSeNcgcgKfJ1YfAE7n4ZRMUQaU12Hngm4T5UbeQPzRWiMbVHzHhLbmmpGNQ9RcM6AN29ZD2J6rmacNZT",
  "key6": "3kpgy2jp6sEK8P7LSjcLXnCQv2uqR7fjYZeg55cHc2MzPSzoG3QQaWiYN3kDaucbp14fSXCCXKjHt8jkCYDXupHw",
  "key7": "3nj8LgjrLTJF6h4nH4Rz9XgJrfVhoVPLm4xzcejomgCccRmSmVEYmKXkZn9rbj2cxwu3zMdZjAuspLCg7w5Jbgpf",
  "key8": "iJKMw3ikJgRdyTd4dVtrLvXMLzKEtUDMqHhkSjm5VZrdxmvX2Dfmny1Su4DghK63C6TVFZt1niABX2spci1ZnCo",
  "key9": "9sgchPQeBaBFia2DEe29ohVbm4fijtybRLwRJy4f4DzTfT66qNbyhiMRoPY2EfoDWKGFFNkycr2Kvfs7vHmLbfQ",
  "key10": "uRxxLoz4abFkcJjZoGen9bmRVakww6dow1eta1wkCeN3Vzkw67GQ21P6nNNto2TGh5Mw91Ve8LG6p9BJBRn51vr",
  "key11": "2GPLXZFdQNjujtfg6LcNHd5X1ZYPoXdCeeBPsQf9XYQ3bqUrEye2eTa5D4ANTKqFigd6ELk6NrzYvrDBtXQWmE9Y",
  "key12": "WkDeGbMm78jmY8EYVoynjCaixicQQ43DissL9zck5GLnveUN6idMwpByCyhHvt3uo5znPSjDFBtYCTJqvE4GYmj",
  "key13": "488VzKLveqggac3qCm9k9Pa152nHfFz1xiZjBpeSbeV4u9vaREghYbfwqWrDxKok5XSv1RdCsEQQSeUrCcbK1VSN",
  "key14": "328xEvowKsEpzp9jTEozGhLZTcTiMxdqTNjdqDPmJNNpFT7wpobqusp8gpnR973xLubwyTQjzxvyKxBpqwpduaSq",
  "key15": "2MqKw85qJhR8jGV9tgF2TbAApth2w7BBg1HDUSk64QorpQDoezYKHPHs9h7NJ4zbdNp81g9SJSWgUuFxhWmJYMaT",
  "key16": "2BfnfZwR3aix7oLZNdKcFfBXubzkxqYbrrqQ39VmzikqCfeknXEAGgkQd7sTCEivotWfejkvLPwgGJ5Kq7yCZKGE",
  "key17": "KNj4rikdrKDEh2De2BVtTAMqr5kxXUvE3kYyf5R9vLGMzDoxUQ334tkv5gEFiUC4UPwCR9H1xTHqtFpGG8bqpzP",
  "key18": "ZnxUiM1pk9e5cPGJSc3hqtKZBt9UUQdDRHbuN7zoRBif4qyr7mqfjd2S5nq8FRp6Y5jiu6mwF3dsQqPewWFfakN",
  "key19": "3UBoFR7aEXFFbUkLJ9ER3yhyCu7tqaBDEE3czJPNmQ7mkTszrogiC9P89VPfPpoe6dH2K6RFMJW236jiXgeRoQRJ",
  "key20": "4yEbidtSxDwM8ZCsNz23qwtsfBu44ncFm7UpfWt9GnmQBnAMmApjdfCRgvPUhqTNHSH2XxSjvNPQgK8qcCowNEhP",
  "key21": "xHyAhm2YkRsrTubWgBffMFyWpktYyGVJzyELn8Ax95pEYcVuYDd424kEBAvmGLDpMmwceRZbn3BcgRVrphsGC6F",
  "key22": "41NFP9yvWYiaY6oKdfpnmnasRigcsTkwNUZuqBLJY8xK64gRrttyxkQMx9PTur1YGBkfD1dfjgpXo3MFkms9TahN",
  "key23": "47BarRkJAR3ByBZnrnVio3XkJ4Bw4SMcj7i31UvhopEwM1P1oLkxsLesfDLSknHGGq9pE5VVg4gy93nkW43UbwiY",
  "key24": "3vHxMx8kzWcxRWWfQz7s3ABFDFcjWoJHQuF4krCtugPfRtrLyRHyZ7TBiWN22Z2tcpRmRFvUXxFtvpmCrHfqSDXn",
  "key25": "4Wueib8eXtKmtATZP3mhfr3B5UgWDkzyS9kXbgUJvfzCchnHEUBTp2uQZFpNe9v3i7HnukC5bCZcq3btsftNw3j8",
  "key26": "4sTjV3s1XrJEmjmEp6bxDo58tTUYEJ1LAwQbkfVSb7ion3o8DGSpG7Pg8KroFoVcFkXF4nm69fd7sXqvrQp4Asnb",
  "key27": "5gQXa5LWCZvtxmeff9hpjfcD7uyRwzEYSAJ2tc7VihspqZBpLUxGW1hRS8KvMJdFe6rM8b94KWuBvw3ZeujhWLpX",
  "key28": "3vao2jhht4ymR4iTQb7JbsGdMwdwcSQfWr5uUSxXVKfqpYYAp8cuz7F4NpYVnzzkWpGP8vHQQn9Pmujtatm3D7zw",
  "key29": "2ixZwY6NaG8mVTzxJ96xR2RbFB6bb47rhyJgu5A49ZvXxXeDjLPpdGt2e9NbxYSXQnzHSJ1h3SMakiLf7dPtzif1"
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
