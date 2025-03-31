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
    "MywsRsrtLSDoRdmujDewR3umdaZktm4iSBdbL9MsCHCcqQPe2KfQWui3QX4jNCeUvgyNL6q5cwpWitCm4UVLDAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDBrp9jAJoSet3sDUcboQn4D9jtNqZE93uDi3taMvsZ2bXRAbdbtWaah7PavDVzoBUi7r4BoBFJgkV9rwXSB4wJ",
  "key1": "5Lz99CzU36fGEw31nv3K9kU94mNiEpbLyTB2yZvmtBZqZfLGcSCS6qWoXfqyBgR7WnxzHjaKVqa6a8wwgiN7t6KY",
  "key2": "5wkyvoS4CWKvEKHQPe3HFA8E53iLWBC72SJEfn5gNWu5oNcWsjPZfn5vQas7voBJ2a1KPaajscbeBXM55VAULCua",
  "key3": "2vvnK241SCS9JzQXtnojfud1C55UqaNYpPj9Xi5SvgCWsHsv61nmkZNQjVfV3x7qNiWgdWnb4SWEMWaHgTAgDx6J",
  "key4": "24YnUEUR4fPU6EdMV3jmUpyEX3T8H6hqDQmsmyMkwJLU8oY9BZkwctuU8K4ApZmpwk9rYccbqA63jBvR34P5fRvb",
  "key5": "4HkqDfFqyCsPvUw8mNsj2ZbiqhhNAo6jo3RBuwbcezkVMokEXBbbAvPWGdF91GGLANneQgDLkJyMwW9b2EuBLNEc",
  "key6": "5PHBiMMkUNqfdD5tzXPYKx5q2YXeyYEyYz3QPE63vBko78drcux4ziwfM4f5D6DvSBkBcXEvqxWbDmojuGJdkQnL",
  "key7": "2Jp1mRFGbrveJssNCaDw4ZEKQWxCJv9Sh7apq5jzr9K8Xoio2cxaWRNtEbqaZ3ShqZJCE9xbLzHXLV4vniiYw4gk",
  "key8": "XFdgQwx3qvu6LzXwm6CbDBBGkfvcsfUNxSPuhWY5wEsmNsTRxGTprEtp2agdwd6uiBuqXEKKswwJnv36jRuaaKM",
  "key9": "VBUHd7BrXoVoGrsNTGztDR43rQ2japQPHCzaAZn3MXNnMAp3gmMZ2JvwPn1Arqk6LJfv9npKqKMnvhMVXuQircH",
  "key10": "5MVnrM7zbcHrjJgkv4wRvN4rz4eLpBoKKxvviTKmbL4xLENR9xS12mXZ9PrryREmjHCVEN4KsZbGqicjw1ACkt1A",
  "key11": "2ec286dE8TAPVHPGKfd4yBZZdBpAz5xw7AHDevRZqbD3dv4A8b69qZtYx63FNHUHfngC3BwDNcFGZxoWQTVmziRN",
  "key12": "2Y6obbQhYiR73xwGkiJFxXbSRDYv4RW5SJxgoLoAP2W2XAMP3tUQfBdhTF4aVtWsQchCkX24KPCuJ5MLnA9H4XXX",
  "key13": "2KGjk7QPnqjyB2vJggepdvYZ4PnT33FM5vKqVeBLZXYsWWos9fJigbBY3nYKXPMLmwLXq4khXNgAMj8KQK9RPfk2",
  "key14": "2LmaqW565eqn3DuyEoU9Ay7NdBwnoyRzouhD7eiHtLyKeJJWPshJ2sQafWGetZPLmfHd2L23RzS1nJk4bRiMGoT1",
  "key15": "hgJvDp7WkTYEVamrJfuNayM6fc7MJ4Y7hX3UnzxvvLyDzGLypeDJ7ihTD5xKkubrWSSypHG7jxiryQpDEiEfPkL",
  "key16": "44S226iwxCg4ExekzoJU7uDaM4tAFnCVsh9R86T5t3LsxauaTgf3JD7D3Bmbu2tFSLCQovdgDCjff8fj3VJTA4EL",
  "key17": "63Wngb1YZbZrU9ttZNfgR36wNhTmnshSx3LHNeU8XXNAMejwnALCc4h4KJ8cJaH6YDa5mjJQhTsofQnpvHFSveQZ",
  "key18": "5Bts9kvoGHpGSwESGRven7vjtu4a1J6jqH9hmg8bj64tDAHkHMnowdhcHnpxuxp928ZSfhXgk4dNRs9Fn2m7R4jF",
  "key19": "JQwrAAyPhLtU76rptrCE8iz5bBvTYhcHLMzzQCxqHCxiKGF2jLhjcuw8jxKbkpubHBEEsnrpMYHCASZ3gZd2Csr",
  "key20": "23cnw7G1GVUNE3YVCunpEaHPft9YXcdBtbjLkyrt6aKXrwGmBNiYhTRkmDogZwyXQP2KffuzaTvYwcEJnW5uBUMH",
  "key21": "3z4BzXRJBxrHwRGrLreyyS4NRZAoY6oaLyEmsTgtH3fn9fkv26mmYJ2P6sb1GkXQPCoEy7t7AZexEehsUtUiVhVZ",
  "key22": "4sGWUJLB6gz7MVJUuwYhUjURBHC51p16gCtncPgUzwsZzvUnvjML8dc7soiPwc9Aj2ShGDPpQrdW5Q9k5HoFnxda",
  "key23": "5Mi5ruosJMZAudqj3fPbVVPkqCTvD1DcFgGnuqZ7C7BNGGZsMd7fo91x5YS1iwZrJfShL7tAXwUMsfEj2op7fxrt",
  "key24": "5QdDC8QcCGF65ukUcgWuL5kvkfNkKYJpkBNbauZCjtAkVm8UCFSStdcwjKvxLrt3kCN8AJ8tRnVgtWvEpmDirNSm",
  "key25": "3kVnLDeDBA6Zwj8mNywXWZDfZEyGiEo1ayVeJBKQMG867nW2H7ewKVphhevKhBzDvXcvjTGK1DwPyGSPoJKKY2wu",
  "key26": "3LhPyfwLXCDPBABDhAyrcB2UjeLrNh2zeLR3TE3FHMc5aaFgwhp4YXE6jHiSPMiRAUTysUVwwiueyS2wSNB9g4Em",
  "key27": "2tmTRdZSgawLiDM7QHCfHW4jofccisfD1mPT8Lv7ujuiW7gRwyrVorTuaY1F7yznMD3UDLLLgitZ6KhCWmhHDcmZ",
  "key28": "5McTwat1FtivbDWrXEpbKP1NZJSyQrgqfNv574WCk5UHd2axu2CLQgdpsQeXPUwC7b2wWVtgHrwZpKw9YVew7Acu",
  "key29": "gJCU7nySAtjr5UWsEUbqqaPFfeqjoU5Nie7Mm6yBoiKGAtVPRvyaQ5RusTigU2uJuBosqNaFA5PXDuob7K2HFZN",
  "key30": "3JQJrC5NEPodRastX7XSRH3zsamZ7eoA2HER1d596bWXje5n6P8LYdu9ncFWmfgbnzivgLSQkmbjdYXWtqS9aqp5",
  "key31": "5HJaZasFZ24znNpkFivLfuNsrTKf1eZPwPJTEMKuUv7uUXuwGS6A1yFtsevVFtGoc9ge68pfBmAJpVvfHQbRahxS",
  "key32": "Zf9vWjjxBFuwVbPZg4hv5fwoEDbVk4PDqpGUfj1g5PhURAoLvT7BUAhnE5gjkgRvHdEzK53zcJP2j9D89VeuZTk",
  "key33": "2rbvtCDvLg6URnmS2h9Y46oNbyax75CSsFjs4BEw4QF6TWuNKHNmL9HHMVz1oiVxRKXXNUUXjkrAabbWEXPAVUnk",
  "key34": "42HeYrukTUPPFGFk6fzQCZg4vH3Ba8xGn1VF1M8xYqRtppnf54p11VeHAEg4pPTBVrVk9h4boqHTuE983GTLsrM7",
  "key35": "2EsjLntzhwcixsCLs5MQeS1mxwYXQ1AYTmhq5aKW5PftQWXfNrB7VxgCjkCn4yekkQDUcMVEC9qKeomoQbupGvfv",
  "key36": "ife81eykRiDexcEcHVzjcFUFYe5H6hkwJD2MfywihqyA7MK6zhyW1wqSzpgCJuJo5Uj18Q8MeBrpEFLLy6UTpHW",
  "key37": "4mvnnC2P7eLKjF2zA4H9VW1CjLVxa8L6Pj8zC4AJmL9t6id9hWdN8zEC8wefwXAQsJ9h8NYyCzWJdT2FQAuYUMAR",
  "key38": "36UD7fAYJEy43TjTU17Snta5r1fdfZGmtyP98AoyGm5mMJHBmGh7JWpDKwRZAUMHm1qCG2ryMJSpoAsFi5FvJ6yA",
  "key39": "LPC4DAovFNTwotX7MTf9mxkRgDkZp7Zjv33yUYeEJ6dE5dTmVkaBWghoJfgiHpRVds1iUkML2oURsMnkjFcn1Pi",
  "key40": "AqPDeihJuVuhEV4KFm51aXZTPKFZBewCwDZQpXE1iv7hXYkCS7uU5tpXrff5SSr5NcUSo9AmvLQnK6Zifj1KZPB",
  "key41": "5GanUDCaKwANwjivqY8MnXQVcUA7SMkvMM31LLGMxFdU3b3WbKQbytu3bE1e4nwy4SjznQ4iEna8Ckecdrn6ujkf",
  "key42": "234f9LRAqJqYQ3Z5LbMkfByqtVvDTazqKAHNkiVNnygRmzan6ndU1zkUWhLLmBAoLE2hirLW7pwgjEztetUyaV8f",
  "key43": "4MHhjM2ZdfCxUYsyuQyQs7KMSBmjkcuaXsNoL38fee1Z4i9jWcvkBcEF9LMUVB4BaU71bQ5XEsaEhfatdvbQf9wy",
  "key44": "3FAbYjvM2MZfTXJNDdXNbL7fKdJhNoJ3DkxBS83dJk77LUc9oY7TeeWEaurW5HREWwN3DHsXth1ga7fniW7aFjdX",
  "key45": "5x1KY5384mhmLVua2YdjQAtJSCJKCh3GSxWxew3vXrKfwquB6WrT43Ge6bMmqXouDzupKL1R5z1fkYJWvKtADFDH",
  "key46": "5ERZXBrty8rvMyQyhp3pxE7VGsDWy9oiaqCREf3RgL8196CrMG6PgHS87L9R7dXQ5wKEnQJ9U9ni5RUQvHcQp2gD",
  "key47": "3VGSJ75AWQanzbPePsyVaBcG9k8pTFSnFm3aY5jbz711oZk5fdxny2ArsykDqLScqGtFefzCreHBVJ8SyhbUo2rM",
  "key48": "2r61mKy4UqVjP4R7rnUsLgXgj5W2wJi3vL6WU5NMeExgyZYtNKvdaNCSiTsbxgAtiJDsnHRGhvqRjNrGZ47H3my9",
  "key49": "4Xgn7gu7cbV5PJKZSAYd1HDZzS436JMuZ4kyBW54HE3hXJyCeNdX2UH4ndWuizbPuSvacokRWn7Mv2oYSccNfiUh"
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
