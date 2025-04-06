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
    "43BNJKy8PTf3DG9nAMNUwrP322VzMyGzFwcfHzrgZwKYJNxLqNWMgVFuTKzGFZnwfhvQz8iksW7xhw3oMQUj2hDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TksJFhPgK8R9imgR4UrGKJ9PjcVW9kG4Ey5LfNmqEJyE6hCXbqVhcTgTcHJLDikJDLtgrnLzs1AnjEAB1M17rHd",
  "key1": "2dQsgr1CHJDTqxmJWMGJGZoiMHxiBjKbQNoaiaBNVspfDrWh6rj2EDAxoECNSw1S95tZhoPTtQStoSS2DaAbne6x",
  "key2": "4Yeic4uyv8L3vrtV4axcEaSiaKKEZ2fU4YHmkfEptSXQuNhsRT6s6u5D3QrLdPZ73YspaNcF592SFT7CCLjirdmJ",
  "key3": "b8vrX8DCaBrBrG6TDr1QwD41AQF5fUCgv3xLwunae3eCtodwwewiNqsMEFzdRAURxZqJyZLCbvT1ShfACQrkCBD",
  "key4": "5UpzgyMJzPXGdufhrE6W7nzu9mLfXL6WiM2cWkzk7KduBwagH3NzQ1g7BAng7qbJLX5dtdCmajzyA5au7rYVAkEN",
  "key5": "49kYxyS8pNzMG9k5cDBKqUdqgDcP7YaSEZNYUxP8eQbD5DQ9smRFQT5TQXekfTAj8whEzC5gZwmunZBWo2kNFrt2",
  "key6": "ySCppAn2wzEE4MPaTEeea3TFyPfoPcA5EhfcfwKvwN7LDYL6BGUAjJri14zBLb4Fw9UZHB1jCfer6y1xSta3ke5",
  "key7": "iwgEnfxpFAKCuE4Uw6dPt42bbCCSmYpvzyJSiQNezoS22TF49yGmhdy4wU5ZuJmCzLdastMbS852uQzrByigV6V",
  "key8": "5UaoVqzzN2TpFWUPckU7S3iRo15yzvzb1EikZ6PY5GH7qgM9ym6yiVEng4TQoqYJ8KJdfrHiQh8gUaeHBjtGDTJL",
  "key9": "EQ6SyAwFPqxGvCCerDE72Q7DVdGMqn3b1axTKXJGd7Defv1JMmGtB8vh6tzuDMFeKFypRYMtULKx7jhdTxwMnSV",
  "key10": "LfHSCke1LsE4i1yanNLWZ4Vy36A4Tqpd6YPWidDGgxXKJG1SGKZq6C5HnugsaeXnFhb5izUUbPdgkmshXg962vn",
  "key11": "4hqaohKSsmowzBqXREZ5RU6zvANtrprFmwuS5GfY7KNjAd7WqZSxRu7Ums5qUjwo1bTGUUdgZfKFYfQvTuZVkevd",
  "key12": "4i4W4YUk5t3hmz7foVP6TifvsPiaHAaFd8N99L7BNqSizwAg5kAnrzrgEEEDy2NjuD137hGft82BY6H4e3NSB4by",
  "key13": "2nCoW3JW1gnQarTL9RFU2WS2ADp98TpvurvN7HZHqSyWVmwe5vRsQ1VN5wrn356EJvf65p8FVpSv9SwEjNKF9JnK",
  "key14": "WEmsWhDRrdjMYu2TDYVX2ubLonwFxWMNzKcyXgadnivKhwjwhEbac1DrEzMs5V4QxGL36N4qikXEfSTzruoaojp",
  "key15": "4DP54J4DVLEgdaV5NHKJH8WR3HZADhMEqEUYMHSr7ZYfqH5rUCfRrPmsNVCkjvrcUYzSFRtnUVp7CCJixokGZDU2",
  "key16": "4WHGP2EdVraXH9LkymG1gGaH1c5R3DszVko8maNPBs7kfpXvnRWB7uiiVNjoGyAmTTD4WfXfHXre1t5ttWwfVBWs",
  "key17": "2XLQzS9rWVjUzTPE35Ff8i3B5ALF8YQoK67iqzAdGPE1YGoN728C6oCN3Af4pv2BmfactAWVssAoVaMSueJJHzgo",
  "key18": "5puBHrPJbcqhiJ1qEt34c4hgRMz8xM21ZW14wWQrjNCr9RdAH9m2NHDcJwPRoCUeyNbWwrdKipZVgEtzAjPtb2Zw",
  "key19": "4jPoRdott3efbGmswKUDvv9by3YKH4qfHKbsJYG8cou3ecBz4eVtzE84edAQocsavzFFE6aqYdZLmC12vbLcf3FC",
  "key20": "28TFgWkcNMdyi8uhysBghNtErUHj1TjgKH4qXYWDYU38fepru8H9M3kDCZj55r7m8a4yU97XLSkvSG1iRLjGbE78",
  "key21": "29X5dzc3GMBgeT9zmTwLy2f353D9YkQYk9HECKQ7DVCdghG5BnxVHfcryKNYD1srKWPg5MbxMB4b1aSY8iuMVpW1",
  "key22": "61wBU4AFzcZsMs8pnnBnoSMmQMkC7ahUkF1LkgoCBfpoM9Cgn54x432XFfvz59yR9NaBDbrHrVANhwpgexzA6hj8",
  "key23": "2pQ84ZPF6TsnmE138Y8z7KKRnH8CLLKUR1UUjag5Bnydweiodpw2KJciBuiRTzFfSHjUXMqsWs1H5mYTLTjLe9We",
  "key24": "iNNuscAg9HfDJnmvLVMTbt9Ls7uKzDhxa19nUH2HjATyAYrbArsbVGFCBA45hHCyBQ7phn5h8vreUvg23CVGE8r",
  "key25": "2U3ohhbEsXAe3mxG18kLpcsrDqmwKr2arhxRWL1JVFJju7iSmHvvfSrm1LM3tCVFWeTSXiEgAq2ZRyX2MH321uG7",
  "key26": "MheKXnTyNGvVP7JqWhHRt6EF6kRhqfy9bgV46dGWAtaJ99sCh5rKgPVYpmKBouzqCZfnJegreDohebENHKoLZ9e",
  "key27": "3uqwTtf37Tufw8RvivNiwD7uxyYECB4bN3EvbBJoEWjexpuAmCQMB8JNnaKPr7yGXvwB9yVfY5EVs77aFp6Zvfos",
  "key28": "5BnzBCyqBqij6Z9AKxJkK72DB1Q5DzVMrvSyqMPjDEqyNZqt4qkwBGmrtSBVRLWML252gzfqkCJKVcm2GYASrEmq",
  "key29": "3QBXH8Ru3bY2fE247YqSkJyxdKMaXo7HfoqSPeBMnyAcPFmvpkocCGpNHUu9eJ9NEHkjeLBeeesReeYNhaoVAsRN",
  "key30": "8w6NV94JKfLs4m7RzyTANeM1p1mvciq3C8NZ4Nf3NKUR9bnXgtERioz146RbqC8TFrS9D7byGyKxPH6fzZiU4qM",
  "key31": "78LhwGd5c52NJVqjMW7tHJcoqp1wrNBxczs4faKkW2ahowC2vqV4CUK4YCjixpu7wEgk1mX26o9R2SAVzYFFknk",
  "key32": "3AAGKqCCWDfaw4Zjmpz9BhTdd1F2kNbUbgFfUgcMirU4Gkzh2KunUkA9t1gWjcVzgwCrk97Pet2NwPvZSP7bGKnN",
  "key33": "63xtK3hWSxurzst3xQ9cg7JHe1FMPUTXUBgJP79nmaXZZNYENfas6RWrcN8BiHctG3RXKS9stjfKFF6YJL6gThCC",
  "key34": "4x8NawsoG73JuQhQsciCggzYnEY1Lm3VqgTxy9ZnFm3yhL7X6WUxVY6FFgdXcUDo5xyJdNebJQHTnwjc267PdChV",
  "key35": "zgJE8LMcJV1FvyBhNfCUWNFxwzDApZHmNVPJ2cd5bY2PG66eiFGQ6FtDJmWWkc1w7nADvZKTCHrd3GkodBfaXyv",
  "key36": "4raEFY4fyrBhNektkS4gLSVS7ttiavPkpg5RrfpWKU27SLNKqPCJmyPPzUr5pbToVaTrEH2hPerTne6JKSiZTqqg",
  "key37": "Cn7N5yDo57J5UicEaNgx2CdqVH4HM6qsRT6fT3ZUNx2uESHnwpZzwW6m5kkyS3qkmLyuTaM8ck4174vfzzkEA4q",
  "key38": "2jFYT5PccZkYMMsKxmp7bLkmPQFd6UrYeW9bboKRFXGc7etUi8VEoF3Qeq7tACgLejrGrNkJXLyX9B7gmLy1821J",
  "key39": "59zBgQbEEx7tVLinPC59AL5ykG3nS3BiKV52g3AVoJYJJWSGvEe4mVcQ6AmLvMt3rQ7KeyvB4Ck65RF9bmmBSUbw"
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
