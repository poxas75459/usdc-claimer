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
    "qs7S6kuD2bohtmZx43KvhR5VniT3kU9qPijt4WVBtuabf2DSRbPM3wRdXkqudR9yimBkaLHzkjKkS1DUUPpZSDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYV7TvWkd97mYTLxHesFb1RsXiGwV6Yki8PJDKrDJTVo8WLUBBDaLcRpynsEjTgvNyH8H36w49vxZHVcHqUsW6i",
  "key1": "wuAHi9xEYMADh6inpE4VeM3FoRBYXsDn9ZFVngpfmPJLytHGgCrBnpvkXUgwRi3M581jLYbu27zicyCnewAVMLK",
  "key2": "5qdG7ZMeGgP5BC47yyeg4bjfTZvUe52hgqjk7m4dwz83xR5Yynv4FA7pWci5Ghu2Pwe3k2aXhwABn1xo6LBjQru3",
  "key3": "5qLymLqpr4BUXGuL66gR3z9Pwh7oTWMD77Kz6B2HSRBME1k5KGfQoumrsoHpc919HankYdnDt9wdnJ4f58RxmrGr",
  "key4": "5MhSCBtdxkCGq4RiaD9RteBgHWjtvJSymYhCFcT5AyeeES41ofEjXUys622qkDuqQqm5JXvy8FsJ2F4UsAyv1vVS",
  "key5": "49DhQbDPXfVzTazpoXqADNoqYX3sqfWGFXKmT7FuerYH7N9Vx6ExgiYwbCmZpQjnPb3xg3u8DjBB1Dpg43UqmiTq",
  "key6": "QifjdpfR67bPme2sANPxBbZCw7JYz2yjUWNUxSJaWWcc85WGYRYLUX3EpVzeK5JF6UqJWteqgv5tGzCBuVgQZjz",
  "key7": "5bwFPbA5RytMPb36GmLiqY348R7NLJ67UTE1ddYw2yDD3PYcvWpDfXS9qYGqpAZEJaXeCvLbPsWhwymUzY3Thq3q",
  "key8": "JsoaZeCfo5NXNFWmFH7YdxBi1ka3YhyNxttFXDNoRzrgCcgnxmch4jGi1e8cuvnWATMyZ8mQyucrpJim2ooBLrP",
  "key9": "2Pq8MncUNqoKojpstT1H1ge2Gc3bETJQkzrkPXber4zpYBDXpRyWUkw9tozxDG6bo9C8g3ws5qufQLeLjYfjxLyr",
  "key10": "4rnsV2pgsqkTfnewKpGcPpFgTa5QU1HsMD8TFBKJPpnfX29WnbjXSQLfYFrwrhjbgcy7AWBhqw6pM98vpVXDbLDU",
  "key11": "2LBJuHNr9fza3UkLacwz6r6W9ZYhSwXysiHyUA3nVdiqfwacbDM5mt9hc7JrhHZ6Gv4KwYSJDYTRVdvi5DvWSdw",
  "key12": "2TEpRU8Y5sGoffpzKGh36yoyJ3MhV1dfnPnnhnybuQ1XGWDCSVJMNAYiV4266rTuLiuGUSerWMCbp4fBemaMzUqv",
  "key13": "2kkUbzF8crTFfuJksXL9HHWm9rY19XWm9xE9bYtS6KemADWMRp3zmfMbpQQPwcXVqL4W9rWRuFdeswArQ3z6s8wy",
  "key14": "2QdijswNLzqoQiJismKCgRpguRuKpHeDwrQedKwH5rVW8oceeieNca412b3JrFBdt37Dghe4yLPteosBbdFaB4AE",
  "key15": "sKoG2K9DqSMcYfFXoNqQaYmK3K6kfpZcHJ95ydogHs15ZNUikj6hCMbb5L82vxaFSbLx9AsHZF4wNdmcpPscTQh",
  "key16": "2XE7rT5PNGKvCZpgq8FHhsXxWNT3Yp8Z8QBpCAf1y7uuz3hVqXAx2sgZW88KU4F2yQoUdANzo7HNki7mg7gcsPC7",
  "key17": "CuTRh4tBtqhcAwhpoATGDMMyuwrGwuSJRLs2ffKyRrjZHaGruGZXDdL7gcB1pZgNi8w4yDNxjh9HgX1WttrtBAi",
  "key18": "b1F3KDt1NnxfYF5QDzWqmyQAug576FbJkpuLUY562spctUEgiwvzApQGAg9CJYt5oLRPeexvmzZ3kuent3e3rsS",
  "key19": "36D85KZprqS41Yx3AAkZmBt33QAxB8gevfWcG6QVXvv3hKE1WhD6qfyevS4rzSSsV4Pb1vzaswbYWbUBRBLRtvUH",
  "key20": "3NqAsGwzs3j8PtH3ZMFbWFX2dMTDPSqMF1RDBH8yzAfMWm9gJ9bJqvP1UcKn5WTVNg2JyUtYvZoVHfcZR4iR4xuL",
  "key21": "66ciF4ZiN1asgMrSe7RUta3181qBp3XVALTKzaCDVxnaUyDmcaUnR3fmN7nZvZiooWvBpWGMfdMtUeuFPxkHLxwu",
  "key22": "4V46p6abhjREtAZkhBUULDvewLf9XewGt25VbpWsEyBxEjpyY8R4EK2iSoeHm6BGZPo1eU8d7QFQtzcAyBBP3nDw",
  "key23": "5BVJC7Bp9JKx4EuAF4c5Be9wgeZxcdHrhWG4cKF8AxTC9M27JYA6YhnwAnnPLWu11Rkn6KqoGcKnjumQ1Wd7yNic",
  "key24": "5G7QNcyJw19UwDDoE23o8xkzJ27NRTt5EibqYfoYdysbWczaZayS4mfsLdcqqKGZuesKVPrR1PB5Ug3MUMwKAE1y"
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
