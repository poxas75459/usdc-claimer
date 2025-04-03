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
    "3eaFcg85jW17LHUXWEcn2AHZq8eMr7nNWgEoHx18ntmsaoQSJAz75tCCxg8cyFYBucXza8wsMT5pftwidCYNRdw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "353AJw5GqNEXuyM55TtP3EU2wDrK9Va5xgcoJ3z7ZvUC2thQUS5HHBT35dbP1kKvK8nhb4GzFUmqd6Ate7b2nDci",
  "key1": "5c4x6Q2XxJKxKh8U8F7fLfBiffZFzB5UYe1EqVjBjiHhB9Cbcv3pURZnAEVLWi7WCMGDN5seDXAzym5YN8T8ihPU",
  "key2": "4782JEqxkSHEmuoWFuQApaQPDgyyMej5qu6QNanvC3VNrKAYxV1kf8qd3kmEky6rTums3jMsVAoLHA9wXRawmT6r",
  "key3": "539VAjzisJeCtPWcRfH5mRuDLrKHntrix6A1T1iDQNN9gh1WvFkqRUnw4YVopJ7H1mhhMY4vo4pQ9ZsFZFB9ADAo",
  "key4": "4Xaqe1mRcssvnwYtWmgJrxAezu89e9szKbpLP1e2iTwMe2JhhpWmGe1fCHwCJyVMDTRuShvmwmMGjFsjFPGCW3Gr",
  "key5": "GPGRhcjCUoSybHJU7hSjRz7iHcfuy4492n3mE7SpVRgB1YSuKSQYvRT3oED5RA5QXYgidXD7ZgCnnKFbtmcuTWm",
  "key6": "61n3CiUoPecmMFDi47GC556s9L9EUVKCMCfiujTCqFbKRHonAWa56kbsNYrpVxMc8kt2gkM7n4QGpzTWryjMXn43",
  "key7": "26HHSsacxxTLa5iPXXomCmWpCdUVk472Uk9w5pNAb3RLt5qFFtZBZPaDo7siS54Acvq8SxgbgzFaaTCnHtnBamNs",
  "key8": "7Um1HFZABxUNNxvmLXRRUAznTmkD7c9ihgDNWsp8YTNGKUWus7Ww5NXN75aXEbvXMuzcG7256P5ufapZUo9gjN4",
  "key9": "5r6ta7PzJJ4pUUYWedqrbLMZjZ2Wx1fabYpLnHvfxsogmbrGFNCdPsv2DKYasqv388g9grjGmXpXSvLPdy57hmhS",
  "key10": "3w7Szpq6vTv7HGT4QbLnqBzqBGabaKA7xFFvC6fznMQhjccX2m7BD7tDkHqgs8kZ7N3MDMmsKkQZUgbcb36JRDfw",
  "key11": "3erqDzwfTTojjC1FJWBg1dKJuHW6y5LX4tfXpmwruGh3wMExFKEhy9vMuP7zK4p2YhPkYtdMTpGSH4m7bECBgVP9",
  "key12": "2CXGaz7xzyATrajmeAhYs7AiyQHLAXKPyFBzYvkHTmcqVtNj1TnoV4pk7bLv1RfWo6zdTCY45CzzyLLhyxSBmVRB",
  "key13": "5DBasJPVLqYUM7MJV24aL97QD9DQLGmc17YURuEuui7riSWnQa6XKCZR2BxrcQWCA2Qe5yFy6JUdcxAwaf4uaGaQ",
  "key14": "g6ep3jR5BgZPD4vuV3GV166G4atByepeKSS4dcs7pTY7q23RUxz64dgbhBWYtqdPMQDggmFUqEGtXuvJ8SyRZPu",
  "key15": "3p4mmN2iBgEiYoJTqXVLizE4CXozTnccKX8RsxksQfPvmDmfBHtRgD7YYV5i9JGxqvoc6bDFsiQyveN2DnQ16Nfu",
  "key16": "2sBx2M3HtWQajjniKGs3fcwf9Qb8ef8XAyEUC2Hiym8HwPjvmqZ6pNEaz4Qh2kn41i76tvDXDjtB7n7X6Q9EBr2m",
  "key17": "2X3pSgGbrATUaLk8e2XGwBfYJMZbtUNfRxit52nty8nnwXquXSY1cPRRMmCQU6K5BTA2D1vdh5iqqF9kns68C3Ag",
  "key18": "oEfv4vMWpAgCz1Bg9kkSDqZkmYYe367VB8sR73K6DRFthxEbyVRSrUt9NjB8CFGy2XEq3FvxLAHrfz9D8P3iKDk",
  "key19": "4UVHr8r2HXhcjN3EW5B3Ky6xXgcJ17jg3tNh9ZJ4peg1u5GFirtRpGFqn6YaLENJC81DgUG84oBMzBmXtauojXEE",
  "key20": "4nbE5eyBBB4h8QCnHgheZ6i8NcM5ZeET1fMeaXMNMkNUKC3iUi6HaD6RUBMegQmFaGuPmWrxdwkoYBW7sspr44hy",
  "key21": "su8gNnfvTK3LXSqf6LHJp1J7q2Mrdjz1zuC4eff9DUynojBzLhC5kow5sT5FAokbyCt7mkr3r1agY4GfCQ2DPzv",
  "key22": "2Tp2BacV2FYkFsB37uPaHj4TPriSBYjdRg5AFPSuUmFp8j6zZJaWKbgpQ5LtaqAy8dcey6SdZDNA2p5t1vJFTpNj",
  "key23": "43Qst2VrTSiR56oci6MAqbkF9xmQHKGHAjRDiSvFv8KgkGMe6SsojeN3DDt8UVwowwdj2gQVvxQnoaL7bQPXeL1m",
  "key24": "4PemziYMT5xYTQ5uSyUgRVo97HqKeJA6VvA4EEyMgC3egeTBu3YSfxrzSbPQppwK6k7UpDK4by4o98tD11bsuXnN",
  "key25": "48UfKd4o8f8gF4uWkjtyNXe1H3p4XfM2QuqUXnTF1AxBDDF7xRm6WG8FotdqqKBNfbFZHgXiRCoPpNxWXBw1Vw2W",
  "key26": "2nWWkUcozMqGbN3ymQkWf8Qz9fTebqEBhCdZy1jbup9NmRQEEZJhYgNYuCXLDRUnGxsLFAHEu4n76A6qCZZvSui8",
  "key27": "5pbPiGRPkRLMASLs9vHm2Dayocd87VUkge8fP9ephjDrDEwWYeSFq67Tye3s2KNddZSUqRspsjbf8n2Qg6GSCaT6",
  "key28": "e6CZWEGL62o9iLYQGAeVMUXb9CXd4sBpTXjEgNF6hzYx1rM8sFxQwALoqL5xju6GZhu3xBuULWaNxbY6MJjbTHp",
  "key29": "5ZZsecwrQzVckNJEW5s4URiqXJgC24fiG7viZ2vbSAnFbwbGe4PQ7e5Lyfy31W58kmTAARDVMEd9u1BYCuhkCvDA",
  "key30": "StuQeTYiznFd1VoQkFFrUeCYuPCS5ix6TyYdJRLKQUT7ghbrvqaryn17LeoGjmTPXeBoxectXZsEwuMNWG2yLaX",
  "key31": "pHXMnhEBBEXw1zG9GQ7NijvFkDoFigpAf2C948oAVziGJJGWWhEMfbva5ckg8XXpfBHo3EK3VpVcPhkhgg2CYwP",
  "key32": "4U8cAJ64ZWfJXWdciWpKnjQwZFoEfJi2ve3xT9tmVRwK56fLk759TEAhE1f8V4KEZLvcoNe9MNrUD8DE8Y94rCFn",
  "key33": "4ztK2CWKzCCqLbwETYUz84MQQeo7GZQAK11b3YK7DJY9FZ5SN1YxiRXeYELnvcpRqKd7iYM5LUa73vTvZg8L6Sut"
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
