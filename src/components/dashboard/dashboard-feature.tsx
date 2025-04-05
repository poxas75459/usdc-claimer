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
    "s4yTfmoyDCy2QCmY6iVZ5BKZPJJK36bz9TbkQaEYQc7jwzqj2NiqXyhEQdoacZ3NNS3nNFfdDPtqVpvawxtcB3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMZ5jWMN4Fz8kUaZSKdyrhF68fAEKgSVhecrvTXXEY6W2Pc2vg9t9E4n7ybu45cAFhsZaYFCSbB8uJ5gYQ3yLBy",
  "key1": "4VaALCoVuzLjazTDRmGBChLTCUxrR5eH1aQuhFvrcXWQCGTsy5FHAxZ7LppnRmtT6Qx6ZKT7zct8N82n9fJW6YHn",
  "key2": "4QxC9YXmBidhArKV21mpaf4Ybcg3mtyiDCknTHM45iabWhhPDZdef5RuSjsE742pAUZU13qUXSMEeNimPzTEVJp7",
  "key3": "5SfR9byYcs6jTt15kb3krMDDVWCtiLEtnKdRZGWZXEisEigEiQta1VcoJtPvQarkwv8119ESmf4XLeRwjthPJYRY",
  "key4": "5sfQXKGGtHCJc3XaTvGhXsAhkDjWTxXrGT1RMz7qMYcU7pMPQaa6QaqjcYPM8HDuenD6j11Rfs6GHaATyaQRtRxN",
  "key5": "2QEVC6YArub1oW3v9XEADmDnKYmqEXtEuZ6aBfokvkwB4r9mHAEaUq1QZc96BJZzh7gu1VYppSEYGom5m81rEqFX",
  "key6": "31MdGxzE42ptESgGA8LSbTGLk53yjwMJ7DmBmwXp3dvgEXLGQ17QQuKkA5oRG7R4JACgLMcQ8BMr4SfRzeetr4Vy",
  "key7": "2eUXjjVDm6g3DST8EjEJnZJCjChKGEoJySXop8oMVxGR3MKghJgDicdkbvQkWeCMfMcit7pAMHYRnw41GfU6Z69J",
  "key8": "39kRVo7CTDdYfdXzWyT7phJG2YhMtRhssiz8sW8BDhXcHUmNeNjXUayR6Gna5hyBCUuNuqpRNDuCHufyiws1xoQd",
  "key9": "279EPTCBeuoAq64CLg6k8Wsa5Zk5SBAk2WJror4swxgbKbHLtmyq4oD5WwxWitfmFY57WVndqrNugfB5QLac5fYU",
  "key10": "3NigBX7VJou87sutJ97h3ZbqKoHpAT37PL1PgTfw3vRjkpBPAFn4mTuFThuDMXPAPbxBnConMjrfK1waDQmyNPo2",
  "key11": "iuRJAEvuZkBNrXviGjAcR1MhRW7XT5c7PYWrjM6BFdLH1QWVSm2U7FXkEguH8NBkWwTD6516zsS6cGCF4NA44sU",
  "key12": "2YtJhGMLRGyZiuWSEdbuiG9Dxg7inwKeC979bWakKLvL2oGRJoiBwZRGwzctcCcvvY6L6Y4PLq7nbHTrVCS8jf6g",
  "key13": "EcAk5zFWNipGoUdkEXtvNQveaXtV5jNNbX2JxyGbtQcnQFrWZqjoffLRshd3ZVJM1woM1UK9baSYdReGfRVnhD4",
  "key14": "4e85Fk2TBRDP2vPrQ1hhoQ69jB9sf25regj8Fdz84wUWRGnmdRQZojG6ARgW2xXkwaSx5mGJ7VgUKMJdui3vQhSP",
  "key15": "42RdUvCUo6SVTEWGFT7Tw3HRN8QXhpjxUC1djZjqdBWnZhfWnqW5u2Je947WRUQEoG6iMN3P8VM792wp9Rygzh9Z",
  "key16": "5u4mGyNfNdGNPUJLYnW1ME1E29UQRWZsLuzrgiWg41DGBZuRRV254S2mBfUdyHKnf5avbotn4pQc5fyDadK8pRsK",
  "key17": "3CwtwmGY8moMJddSLZYSeTuhoDqUeY2b1BhsatEmtLrpefDKbh5QCGbXpnrfmErS3zMPM9oYAN1BhvL8WQsqoe9e",
  "key18": "2XSF5ehr3JvooTtoR72ttB4As9SZhW3UhoraAPYbPmS2ncoNgrkEFdkKaUyBNyg4yiBr73brsR98N1qNFjemNDzc",
  "key19": "RS8D9RhUK4EmQww6h3DTJHXhJ9Z1HkDEqvXiK8CVCyVHkjaKWtAekCdf3uxU3Mse5Ua6wz5JvjogoL5saMjLuvN",
  "key20": "4XsC4dpfZHbgigmdFGxbEspffY8KcFqb9xXkLs5mc3V6P2QfFYn9ns8jpUUZsQgPtRymZ5eJA9t5Xdy7AXEX2xAr",
  "key21": "3c8mAhWVrRDErmLzz3ZFHqxcDus3yNPBAnWj8DUBJgHFNvQvawkcPD4CRPyUdy1GPp3rBMkekZn9vA7GtXqRb41c",
  "key22": "2zx1BytZRfH7ZBtNqrx4FNNhTKjB9Y1pdD6WW2784LJKHPC44A6vfZqbez8LRJ2Ktm9B6i7Hs8z6MTn6Cq1KbAjr",
  "key23": "4MGCMUCqkXKuY9JexvAZaXr8dAsT6MWvd6dCEWPxA18cnXTy6mUoqk6GuKYiVhJQvVyks4c33nQm5CXKN3NdpEFC",
  "key24": "2VdC3xjbBHFeNGSJt1YC7acggTrgXyhD8QbquwKrsf7cuebTHbArvZyVvRUbvXPJz1BVrq9sm1zB34cXQ3nLy7zF",
  "key25": "5uAkDdXHXa4PCeXNdQwNvctNErxLyqSrPUqNKnXfimEM2vMn7tkBYPeaag5fpX8oDqiJZMrtt9iNx29Q2igKY48t",
  "key26": "3D4VCXFcXoGCKLmXUNt5vtfCoRQJPvt5mXDT9HsjnJbq5B2YDxUUoHEeVpDeBdidsafhVMW6mdtyZ6TEnLX2W8kw",
  "key27": "3LD7EFH79rr2sirBp8d3x43q13PX9BKx74Dy66VUKcgMBohzQaaXVCTbViNKDp3csP7uLCFENFktXSEzwNJa5AmA",
  "key28": "QDBbN8N6sDAx6ZvPN26wn1i99cKZYobShHBQtxsVumWJhsUGGBKpfADGFZYHwPscAog7ahcCEnRrphQH8Wrta1c",
  "key29": "4Z6YGHj92oS2Y7NrVcaV9JQWScsh8adMEB9zckVeCu43QpwgoSXQHRnxP3b1z2pGHBS4PaN9RENpD4gn3TxCy9Sk"
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
