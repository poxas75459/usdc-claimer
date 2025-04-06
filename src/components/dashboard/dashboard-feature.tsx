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
    "3n9pfyYSAdwYR8hF1rMzjAzPpw18rSQVrDZE8mtA9PQisoTbSy4tM2VhjsbCRfGEWgv82mArgK5PpaoopTffrajF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enJGEjGU1f2odzLpGT3gysyCV3vv1R5zobUDgL1ESoR8h8QJgoGSjT7aDr8DQQMxtxtSYHSmqvRtZrjhG9zDuSC",
  "key1": "2WUNcsAPRCVhf8uLdA7hUdWPuSawBqHK1JFAKuetNvfGzvPtR9Si9XDVj9RiMwuAhpXvwVusSa7vikWCh43V8Hfx",
  "key2": "3Q3rNRsnLAKXP3T7sgKRKiAKbMVyhTenHFAG8C85pcTczthMizCe4e2Nn241U9fnRCsvRSpExZAtK2QbhAc73Znd",
  "key3": "4H5sKfvdV1qihbCGnv1V7QzSWsWs3nBjw8kZbHxFFqd3cdVuCTM7tBCGVZkSuCnoSqLoQFs91mWa734N96jQg7rL",
  "key4": "47v4FEyoRbcyZSxU8niSQBtvi1UMw4Bnj3CaKLk1EZwceSSvFxg4bgh8a73Wqkbvxv1xFEXVPCypkvESuJHZCnP",
  "key5": "baqQg3AwXU2kwj9hvrYhTa48c667gjH4DwWs4g3kuewG6fXHuBTVS9g64VqSs4evfXENkmV2hv3tusZsNKoPVvz",
  "key6": "3MA8atkK5J2dngB36pKHtWhXxTU1SajYKeUPRgYMRhz8tak4NAPyuVBw12Af2bRKEbaN9mL6Sder7ArBAtbbPqFi",
  "key7": "XBvL1jjAnyAaUSt6FuPHriRrz6dSVryDMV9GkQXtLyLpjKgiksihawRqqj6SgDFxGA3qobwE6iutN7mBGEHuKca",
  "key8": "4ucgXBkDZhMduGZS2htwGWVwhzQ8rojpdRtcHUDpeXzTmo93dABhcRr8JK7nobCck5ELGJ6rqtZvAzGs5wqqQENy",
  "key9": "39iVuVJdqcYNqw98bhGnZKoeCs7FXNZT25SCqMeiqPZQv3bNLqZHVcNG3UgW5rBhELMCRDrxy2evz3jMYQeifcdr",
  "key10": "2k2u6aSJUAJeeruR3fmVNW1XYxwNQKrQ4s3zkt1Hxuu85a4zNScyfDDb5UZLMfNunmCwkb2NWHqUJhYuRe83jwqK",
  "key11": "4BoYeGsMMAUwSwkX8Uq8eD2isXgQobRzR1apYTHZD8WsBF6WXhsKRoHr9im2th1wz38cF6oNBbGfHoGGNyiiDxLT",
  "key12": "549ThRCVxv8SL6WgabABJUpQTTD13rC8zEdTSbGcPXKWMLfgsx4VGEbXXyRQfrRLptJxiQwCR4WfG5xy6M7ocahd",
  "key13": "3ZLKEwHcEJ4EtMzmM8Ciapctr6AZVyvxbDEVJxv4jwn4Eq6kfB757VE3eh58XadejFY4rfmr5rajLfRo4kWsrDxP",
  "key14": "4W4KKMSXwWasgxpkNrHCdQkgM8RHo9z9MQbkEQGSfebE3uFy7kG3N9748pzdwiVpGknbaBrTkpyvprEds67GNwQw",
  "key15": "24USVbHzmbHhLMWzhdwTPap44oQYDn6o4vDsFRmG2ppUe8RhD7sxyk83dtNjgaB83V8i6txufXhGz3tHPNAwLQYx",
  "key16": "bKxAvWBc5qbK3mebFfkojj7fhan4T52qnBRsbbWGuK7DT1gQtkGWK1FEdqSe5h2NFqUxZnAXJRauSPvuNgxWrmJ",
  "key17": "3X9mYkwNA9FxQCjtzEacfdXekdUEPAogBNAdTEzAusLAxTB7QKcpLvYcwMUejCCExmncgS46ooMna65Dz89uHU8G",
  "key18": "4zRgs6hw8gKLyPqNyCg2KueEvx22w8Sstu4tmn2KYtPwiCbKoHStggsUzw7Eu61pJSamYpFR9NyNNdWxfbMcC1xn",
  "key19": "2KXy7WsdCRxVP7HmAvkFDLfG8XBoakxWtNmcWzLLEhV4YYzBfMBSMTNaXQfLN9nCaTG3gra8qzfZZsHAqZ9osEBM",
  "key20": "4bm8KtrpgzDtcs7Hu45PGExbegZPp5QkwYDUYxo5iNpKdFJ3NJyhnNgQNgNn42Hcn3ig218ieRzCQSjjZK9nd5Rn",
  "key21": "3ubF7x9DzHJQCYDjxw14Fptx6omctbMU7gkVba4azYQrXHChBBi8nXcdDQgAGTxWmjPXPR6BbGsTsnf9MD6nC5T4",
  "key22": "3R7C72z4vuktzFezf39CfLrubpMP3CPrL8XrwCH8xtk4UvytiU6FmHU1gACbon69TT9e8cEJQmASpPVMzad8R5Wb",
  "key23": "KgsyCf9M2gYFQPQDPy9nNCMQGjzjx37vGot5KnEsV3zLhuw2RLNq8PkH6qsPgFK5porz1Fr95tC5pg4Az4JKvtW",
  "key24": "4yRQdY6KqaHePhCFQMnWJ1RizAb4u3toLz1MvG9ELTnvuXNzYeZdjX2v4J7q2UmhZvQmhDnZ2CKNyTogHTAuDVM2",
  "key25": "67YoYbvoETm6FUSwkMK9BY9VvkKDF46Ph5wXWZiiwrNfj84RvRiafqap1FgD946dSMVQgdPeQS8tyLkjmjuGHT4s",
  "key26": "388XbkJDtHn92LjddtzFY65BsHDCsHE7CYV5vgwyHxM8ToDdnj8w5UE3s2htikSXA76A5JJ4TgX3jutbCbNb6fES",
  "key27": "2G7PW32aBxAuPmHFXaXCrgTP9XZWYo5GjbsCXFLdWYhRPhHXuYexSsfh9WquoaDN91rAjNGupRxX6CFM235XtC8z",
  "key28": "4J73hfk8WFE1zx4vkHYoH6ygXUf3ggSj3Muj338ZFQcEffdGksANxUK4iTqodR8QeGiRUznG2pMftfS364ujveoj",
  "key29": "5uzds5qALeADAHQaUxn8mTDF3UZKCzRu293sKCrdtJYrG38St1Eyt7xwpksJkvjShWmrZKYbEBfscDWp7VhhpvBx",
  "key30": "21co5jf6QjKfa2empbfKPV14htXcn3s58jAUY3VQ7ob7jg3DwgrGMdchCzeog2pu6aSEd9HgDFcxvLofTdL1viWG",
  "key31": "3szjgyZ8ruudtWfdXhDfcQR8D1Kn6LgpXyVdgdR4rngc3g7Qvz6fdPn4bYtUiqqauM61RD2vfLK5pqsnhVmC65uV",
  "key32": "1SDqARGmHLr2EjUz6X4dLVsADi1T1Uf4RwNNEafjpTP8UweZsiYPE3ypb5yPUJ3KYjB9vVXZYveWvGq3smPKQv5",
  "key33": "ocfuzdZL5MLcg4syJGvYazpysz7riiHap7u2FyjGQbvme3uupk4R4hv6yJpTxroGt8E4GhwXCvBvmrh4sR7c5sb",
  "key34": "4xZhba9pbTJ8NcYz17NV5Fy1pbrMPz4Ek4xJaedBLxJpV2K8V1mEJBsz1VSg9fsa3Nn5oNaE8uYj5XntYbGCyKNP",
  "key35": "24f43mb1GXsr2gLd5cTDyWtnPZVP2DS1AFDHSotJ9MiU6HtEabN2nh3cHiwFDofwtkmpR1Q5JGq2re7crsCtbhsd",
  "key36": "3dg7864d9FdTni54BitJypYGqUSiLaTMXxsyjrnTVkmH2Kq1n7PBW9i6ErYsJpn9AtTbk5AiZHtmpEvEQHAsGEYn",
  "key37": "2Paqeo4U6PYJYuL9xLw37xcX8Kq4zWNud1rAMBSwG5jViSL2eEJSPyHu4BS9cQYzufe8TqDVQ1RUSEdzTpwosEim",
  "key38": "4ohoBHAcAzwSKXafm3u8fxkwm3KqGD6gzX6B8stnHaHJcAPqQ5Ypi2FbL4NKJVioSK8bkpY2oFwKs6twsbfhDgRh",
  "key39": "57sggFPgJMxCWRQXS3Gv4DGAmVVzU8eVrZSQt9HE9UkbjmnG9R5aA8Vw6gMdDmBgTPHEMrShiWQMvuyDhF4McdJd"
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
