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
    "29uA5vwFjiHpYpfCotcjLS9nXJ1WSr9qcUdKDxBCN88mvMzao6wpQ2sBmPwQy7m1X6bJNyNwkGmjLVjF8zhnrngB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncwrogDeTwqGxxnTTrgZxzn1yHxYWSnG5c2x348zDMoQFs9XwBeNHpTVqBwNJZ2geKzehb6dCU4Nq7EqGBVo76t",
  "key1": "4vQSnGxRCZYFYczjFi9jZ9ZUSwNA1b14gZoo7RrYtmCdEJ1W5Kq6UuzAhK7qD6wH8YxY8w66Fj7qu7faa8diMA5u",
  "key2": "4dqEArfEdSUuq6sWSUsXxTpdALzM4ULaEE8S9VfvBXwc8ZXDEED1To62sUSxqKjQvpuY9wDWxAAuYuezs4EoGUKX",
  "key3": "3RaYLtatj9jN6cE5ek61PaQGYmEgkKpJEiQ5zcj8hfAG2zjFBWyGKQNzT4Myg8xLkeN2dbwSLaUztaP4M3o9zcaQ",
  "key4": "wGJRrArZF4iy4oHi3rRDAaay34sxQu3hSTRzKNBimmVQLgjdyRTF97vx3ZbMxtZFqhUJNp327Lu8CaZ9vCE4HEF",
  "key5": "2tKftty9ZTnbyv5mHhtnpK8yht2bK41c2noeJY63gLu2JauysaZqbq13sgajFu9rKmXDqjyndjoeifESD3EcxTxH",
  "key6": "VDQFJ1Hz2JpdbUHNdMGNwM813KoQcUu5gPr3wo7NM1NRNx2pSuxAm1WsbiRY15fDCnH88cmnck7Ggf94WnSeAy3",
  "key7": "4XhAi2dh7AcRCJ6XbWoEfbwNFgWoLoG9ASkoqjZk9PuVsFMyPipZoD3s1seBRGNr8SbuTNaEu6UYrRJviyrsNxm7",
  "key8": "43MgUvgWQ7h9drXirjhf9yfD91go6qt5PR8eUEgfsbd9v2e1MSCQZCeTFHbQmDW4Ejow9VEnvBfnU4D9PEiihUDn",
  "key9": "3KQ4jJpKNh6YrD8Ak1McsUhvyCMQLLyaKwEy4Jh5q6thKXDiUsvsrU8ideyBtyDAdeTuFaq26WY7fyXam9nEAwfy",
  "key10": "3roQFCPxbTUfRoY4GPFkBuDuY56TM3iW2kbaUSWdq1s5pod4nCRYQ2RGjhqtiufLCDfZ5E7dJtrPUKNMdS3pspVz",
  "key11": "2cKKrFrbqgnhhzQda65AzbPdzzWyNqbF2y2ZR3ayY5Dea6Hg1TA9dk33ARq3FTJnytTTwheof4we5bh9vR4LaXuk",
  "key12": "2QKxGnpsUQJqP6JkmdQPHRkov1wKs2JZ2SAe62Gnovrua2Kn2PmFC4ufMWrSMWrTUoNxaoj3mgF6yyzo23DsSPXa",
  "key13": "2vLjtbmCwas9kWB4NHWpDSwUfHgXnP45e1p6ebBMN5ncVt4Aw8Lk5m791FCFEZzi186od1Fxp3E2EFMXL9YC3zDf",
  "key14": "2dYj9TeuHyx4jgre2FUiiK9Pfh8mJJcXop5S8trCnn2wfzmovRonZvfwMKdiPUubH9tTdYobqm14fDefL7GNr4tz",
  "key15": "3KajMaGnujdzT8rmioFoDouG4y6ZseGoR1Y3k4nhNigkCqK1ZzRZcrqnEjpng2HTBAZnKWZ2FUWuF1hZ38uPVVz1",
  "key16": "3HrMZZCZkwg9hHJtgXmTbhyxBgx8DDTKUAULSvAkPzcNFuWVbgVdWu8Jvz8xeXCWRTpbJHqsBu3Dx8zTa8t5ei4S",
  "key17": "663ZyMM1YQVLWzmkfbWCjYGzGuwLeayTHmxhCkV75cYp6EnX1hH8UxtJhdnP91CjBaoG3CcyGhrqsXUNkD3cZLvH",
  "key18": "sjPYb2iWMNyAdms1CCy9GXJp1FuUhCpKzSgfbCGvZYv9CEJAZmf1gp2VZsLxebpKmLkUFqD1gqTPn3iEBH83f6L",
  "key19": "3TmH6EKtKUaktey71WwJf7CM5CBNY9rKqL3K9MJQBpjuv9fmbSn8ACAqNYNYgSkwZLvAPmQjj3RBd2JNCWNzyjoj",
  "key20": "2zgRBHA3Szpka1btgMQG5RoGipNdhAafAnF9869Z1F8aZMdahCPs4kYVYCyZtssZoCTKgaNAZQWgpLn2z18jJAzZ",
  "key21": "2ATESSJTCF3fKdhABLzWm2PAVhphkfKuatXtkewdfhxUG9eNSoQBuTuCpPpJFMcaiRFEMAWLnpVhwbBvsDrbFG65",
  "key22": "2bz3TtaNB68AAdnN4cMRjNm1qHhKx45xogLN4dBTJvUAHFK5XgX3MKusp4eyEMGbHEf8Ai5YsdP35qZjny6nAj9o",
  "key23": "2NpYhv8aXkBZF6xjNdb81J2ZzRvzKfQcGq9k2sfjFP75M69tSoLbSe8qw8zFfHhP7qdx6FBhhbXEYrmV2EJhGWPP",
  "key24": "bjtad98ToigRWD1rsuDVbcUEewgxNJmPjb5py5U8jdMuWp1osMdyTvab94pNjhUvvQgBLNiBj9hEoyVMtaepH4C",
  "key25": "33DN4oxx1tbWz5ade9tMx9QbVqUkcAVgitFmEXaMgs642wU69fo8T6imf7u4mBjaZv1SKmvWyb5XtmBpv8MMvVsL",
  "key26": "4ZQSdK6cfr8ynTcxutp3w2PE5xHXz8cdb1JbXGTFkcJuCptBv29YcdVgugft5LSG2t4D4fUX8Y6TPu3dyossReoR"
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
