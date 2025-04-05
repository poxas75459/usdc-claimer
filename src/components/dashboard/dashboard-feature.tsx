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
    "2rhSnV4tkZHjPNFbse5UVUFEkXJFBZoYvQBvRLU9kVYH9sda8rmBDEY8kPqVQEDrooCeEsPHjhny7vMjG1nm6Gv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiHQ7v2L4wPwoTy9PCz9KFPF56La6FWdUNcNsbw23PqyqNA3m161o1TFyr9XRMnNoT589Jx67KvHy4VZCTckgc8",
  "key1": "2zdgJWFm6S2KWP6mt2269nw9GwtAFN8MXn4mx2agniRS9pwooSB7gWKXwCcSF7swzx131d8iwxVeEn6wTVkRfZQ7",
  "key2": "5t7xxtwGtoFJjrDPAMouLqcUfKneu1GxnaPAoPHtE7irvTNK4eaUh7cA8MCzihQ2y6WdvsKdBGtfmcdswsBW9Erv",
  "key3": "zXxrhD26kyfvKsnuxBck47FDYmwNTRw7VR2aQBF9Y3dTaotUNqkhVhzMq8v1VsL6jMeHbVdKYAUXs3fer6Fe1cc",
  "key4": "3GUBt7tTxwkQQk7NERk2rjthazzWuQEToxyrmSCd4XXobeoscfq4oLFRaVvSYKhycLf8aTUtQyQDe7bpMP4jiELF",
  "key5": "5nRBjxtWB2Y8SA9s3DM4utPhQuY1LBv5hJiCxB6tmXRZ2M5T864RYwaTgEpw351rym4e9xHS7RrU1Cn8T7E5e1yr",
  "key6": "2jdtPsVMkZc2C7oYPNXgMLbYhsP98nazF9JA3qRwazYZ4SbuDpBZKpjiQPTGVrXrcAJHp3gwvFCUGtwMZdMXiN8h",
  "key7": "XtVtygJ7XjNZxd9k96qD3StzM5Mpsn4CDa3HG7eKx2yS1snv3xyHtuCoPv2Cf1bsu7hQKx1h99czQgKUAad6mJb",
  "key8": "3RkuyK87hzchfPg5seh4SoGMd7DH1xEHKhcX6THM2hV4CAD4p3ZdLZLMHyUcpt5GALRzXeRPxRJMu5hpKyPz5znd",
  "key9": "cU4Fn7JcP73ZW8YLtHhE1h7nfNT7VtTve3C1YBLGA7hxR7ThAsvMGJ6c1JL6nSvGKvTXi7SKiiZMDy5VFiSnySv",
  "key10": "78UH1ppryyp6doAdU8N6EZs96j5Udy37Lo7cTDMhZUPPMgdGB8npfQDhfZgbz9fJqACX8Mv5GsEE6B34Ut8G8pg",
  "key11": "4zCyeAZ9hzhGpvN1cYSUYTenGy3omXBv6CjiT2vLcPkhjwxcxn64cd5aCqt5z5jZ7PU6EXTkhFrapwQVRfKZemno",
  "key12": "i4Mujjwvp7H4Cpc68twdKQ4W1e8iMvdm6v3TCV39dmJAepTXTF3JEgibA7JDiJhpMJpTBXyjDCp7fhVfvn3BWVV",
  "key13": "5ZrHRLXXTMcpUz2ra2Yj1kfNEEsd3SkSAtay1gDqH8YVPPQJxypoVJNCbzwmMt7uDE2K5L6dNdgL4X8VVS5svvTP",
  "key14": "3EPpvQ6UbPmAc4H1xrRjdYtfgzmrAX4boaVqZyK4VyQCM5TRBCmKLxhnYysPkSmuRsSpMUc36c9uMAnnfdqhUBpo",
  "key15": "2s27bTx37VL5RM4dk1VRU1YkzeiNyDehvn5yUhwMB5kgjvpz1YcmJsj6sK6Rm6qcnj845ptYJd1h6vLE4UqyZQ7t",
  "key16": "4oXN9Ka4BgFAUtd9Yg78ZWnH2eYVLDF7Q3aLe35sNsMSqSCGAn3c4EBQYVFX6HocXzDUoGnpUMncyNsZsAD7s4MU",
  "key17": "4K6eDSYLCqwJaEomNEh72kTWqsaiDL2F28bkJUMcMGZQGbcMofpn3hXsbM7QLo1Pj7uXGZzv4Z4G72jc6vNQafyT",
  "key18": "49SR2qcGNbkrwY5mUWjemmg1CJke1wY3zjCLBHnJ6rgtuMUMyfHRFhbYibt2jT9xJAcHm4KJqEhURXghtm2NsGHL",
  "key19": "2LpDTe8r7aWLie9nLWAtJJTZBtK7DR7nANGATsH2Y9BLkEjkeksoryWVe4RL6ZPbafSQFtyfJZGYWf82D8QS8ztq",
  "key20": "5VjVCaJGLTHXqVJT5PVtCf4XQNgKkuKQcjUDUdDgTSCKsm58k4DvA8RWRd6jAjdHiP5Mx4rxBSuVRGQXCc3dE6xe",
  "key21": "5mxpDMaUKGXWoqBhcfPn7tcaKQ21tKt7LiaznxTR2mHf1UcV3HjzC7mFwbFqNVzi4RTXza3eg2aeZk9fbweXyAcF",
  "key22": "3f7rnox8NaWu3LKhFs5wUCTDmpAfJ6WPKm6dQ8MDBJ1WdC6xpwdnyMMACJyB31a6S8TLE5hDpzijRN1srwDHaLV4",
  "key23": "2ZR3VaYTaaErtW8BsNnaqw8cm9rDXEnfc8y4NwxVDrZsuvLX5kMMWWD7pibGQdMk9TuVgKfRrTvmbpERLXMXs96U",
  "key24": "p87zu3oeEChacYvGytrzztZMQETTAktwdC1dVmy4RUiiqxGQ1RR987NLgLnTbsWus475BHNkikD7eh3xLa36kPv",
  "key25": "b6j7VUSEycMwckkztUy8AD2kDCcskhBmChQ9Y8FSpZbK6NTYJquttPByqWvzwJ6bojw5XtaDkfrYH2tz9vhYNcD",
  "key26": "52D5kiMwcsE6TFL5ibXQXoh7d193X7wp3CFyxJRt7Nn7XHLBEZtLYVYnvivav1wSLnStiiHp92VMWa3PJk5KenMd",
  "key27": "59PF8PCbrRuijvaL9P76D7TQasWTwHvN1mhzgG1wt4xgAsekwQ4Ch2saWvupKiS23upti3Yuing1iRZiNb95FTvW",
  "key28": "2CwdksHj7HJ4vgMZVSbQZGRektE2fwVi5dapRHter9eNDKTdrsqQjJ1vuQdAREKZsWc5WW9M3jYcQemuawJLXgU2",
  "key29": "4WiAtxxxgEsUCAxcaFu9S6Tu9f8SfrG9mkBJdq32xPTiPjAtty7G6fASiH9MqmcGySiED28v8Eq6zGpqgaWsdhvR",
  "key30": "4ExhmNuQo48EdpcxQBBKHdY2cZ5FWBJurg2d1EMx6LCFCqLWGtLL9pHcvJdoArUT4sQkpFvmvkMhM3vc4Gc7h4Q5",
  "key31": "252JZYpBnUaYUmAeFa3r6RxRH2DmD4rkUP6KXNEkxe1L1ckT6kkhnm413sa3UEmrH5R9eqmnC72UNaAm217cx8dw",
  "key32": "2dnFRDnFUEGFK42AJXR76e8PUnKMGqnmj1Ab5Ub7xNuadEbZw8onHx7crcMRP599CsGLPwQT8r2MZHdrR56DcBw7",
  "key33": "6vGD5wA26f4q6phvxWXi3mdVzHDS7g3tc7axZt85mA82zw5tPuWV2XkkVJxu1HEiWRYSLo6wKSQPVp41FAxaHb5",
  "key34": "2iRRPnbKYbuYevFshQ8j9SBehi9qeuhpW5QNSdKVgr4yeH7Yg9rN7CGzAZTyExh2DjQxY13unBD1vVVQQdXbdQRA",
  "key35": "5GCd1uyv6CU1VKdhDXVpW4jaN5rc4hWipHH7Z27SWLHSCJgtDUCPVGR7X3NYJpzh5u9BQYBryPd8uBUCajRcLDt1"
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
