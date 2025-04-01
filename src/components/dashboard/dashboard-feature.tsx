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
    "Knd7D55rda6WmgXNYoxr6fqPBc29BsvDRjHt9WXWzfnn3zFeNmNVXKACTWinwA3cfVchGWNC1nMVwttryzFdHwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Mi76WdSSJc6aC7hXLanJzBYJpwdYCXCX8feHTNgeM43DfGxBUsAaEyh2hbKSfFsJ4dzEvFzWnFyrkDhNv1U2to",
  "key1": "3qKieMUiFukqeJM5u28Xr2KE9BVSaY3aLvNYSQaLDT7ybhUyNtrA8ZEixJC86qMQm8ptt3yBxiUyH2TFrX1JWVVS",
  "key2": "3Mz55JfBU97pQtmvLVRkZa6HXNdFrzA3NUUYz8rtMWcVQqg92YqGXCzLMsTgHJU5CLNMp5XpiAsuyevaBM8bA2Lw",
  "key3": "4qAoz2Z1E56FyUr3BebM6KRmDeqRtijnsa68SCWbBGeQ1xrAPuQPJtsG9VZCRC4LrmKrCyQ9Tu5je6uczSiJKYXz",
  "key4": "2FrELpvqst3PXh3z3ScMfbJHYUMcwwjbVc7Up8UkbbjRVbRVZQi1URC4ywcqGwMJMD1zKSMztXpotUDLGVcH2JGY",
  "key5": "5cwYr3pHz2ok2sJRWTTQxEGF4Q8d3snpT8di1NE1QhvpuYwedC9tyPWsvArPiQDc4XBfANNGns2MWEN9BE8R69x9",
  "key6": "3d3JQr1vRf8w22moSAo6habbJMdvwd22KsvV5xEEmafV8oC1Js5DdfXWEn88pgDWdJvQwo2As1185fjAAsehZs8S",
  "key7": "4YULqdtgG9tVGapVgZXUd2u9S1doSThxL6o3Z91eBgXnWKraWcti9HTEvZkv62MvKU4ZqH7ZMJzZAjxEep36uqBJ",
  "key8": "3y1kXFtt2gxAst1djXGGoG4JVoChcCw6Rx6FYBNMCA4BvX2XgsqDodHKh2yXPfkSP1m2FiF5xYX2YBLktgtng3E2",
  "key9": "44tSZ6T4G2EzLBbUFEp6neQSiLomSzWJQXs9CvCLa6BKAWSDCQUob82g7BUExyrxK4uzHKCPqjdTwpvSip1qF1FL",
  "key10": "5dZZa1UFfQXGXDyPPhpfLuB3dhSxmvHm8vkK1RHzt4mFo9Gry1x9Q3odujD5ggmRRm3cent2jzxKtRPSSCHqnHrj",
  "key11": "4kKZw4M8dwRmeP1fgBicmepQngB55mgo2VJCngYuQKTyjJnMZm8GyGb9zWTEhB4hfnamV6ee19iQ5sXd8GFnsA8F",
  "key12": "3PugpWSMMkJbXz1uVFs7XJkL6FUYBo8LFFt76XwfrxRLyNPQeC6J5cYwR53Ps4gWf6R3dvEDBjj1qmv6N3ttLhL1",
  "key13": "4UWLYxJPUKp3JNtv4thzS9mU2v9UkPmuQcbN72fQB1D3wiopG4V7j1Vau6E8rzq2LUbrFxkryUJhYx3yzGrY68VW",
  "key14": "37fM13rWnJjh6keDZdtwyDdo9x5sU9LKaxdbWoNt4ssBHyPMGWV7LkZc6mgXgyFJ2hbUiMh193SrmLb1UjT1natc",
  "key15": "5rnagrfx9DaJjdAnxBsykgmQ9ZtcnKEXJehq5ufbnYsg7jY7T3ji8z7jdy2Enr9vznWf5gYdHHmhzCH5mexUKhd6",
  "key16": "3ifNWA77h5foxB3jTHQLW1oEUp6kqsU6fojo1FSh6pFXv6t2o5TJZkQnSajE3ZYG6ajJFjgL4vmfeftAfm7pfyTf",
  "key17": "4nh8DWiQ3M33aeGBnRZn7PG6GAoGSwY3YbKeKAh29pGFiWQDiEK2mp5peQQReNGokKTXVNL6CNxMTBGMD7RDEhXS",
  "key18": "31nwoknzjAfyCYDwDxbn1nwKKiddpUZcK4qb224ytCEFfRve9Fs64ThnJ2s74b2PNUAjX8ksDChMfKEjNgFNtcCw",
  "key19": "3RgF3G4ExhRZeiv7U8ffrXdivCHPXs6fiiJWuxAjEPwYEtRSVzozomdRAUSV4xwPGQ8ST2bDp75qdEhH82UnKhEK",
  "key20": "2UohLy1e88C399TSVmFiWtZfo1cxd3z2vf6soikYkaxzCwPGvHK1x32kAQ2SJ3VSSEkBevk1EVbBTh7oqdGeQP2h",
  "key21": "3sMgdjQaf3j8bnyrpHFEVsxrZtB5KMt6cbrZq8CfaaFP5HtaMSSdP66W7mPa6i7FUPDPoj4V4ExnDPAjgYhAT3wF",
  "key22": "3S9kBdhU8jkqxZsZEACrRSWduKdBoW5vPgd3Bohfeotm5BgVkar3t1MXtqDMN7xTSeMqU8JdnATTbsMaaB4uDStT",
  "key23": "5WdtyuX3NrNHo7qjLiFkDZuooAHDt6CoWGyDX1hyctfsJCMy7DBQyxRQ1w1k6RjVAb1Qcmu1z1vLhL3M4xZSfuDw",
  "key24": "4Nb3AGA632Bv8UNwNcyu25XRbZWtu9M5y9cChUhzcewU8T4ZTQLNu3YkV4UND4PF1sczGcxHNqMgMUhXCiUMBkRR",
  "key25": "2A5GrzcRY8sLL6QvNfN2qYMRPmXDYNYCQcLsm82v81wmDoqqVwJeQqtS1oLxmXvWVgaESauKpLiFHDMbi31W7AJb",
  "key26": "4sdjSjGXhXFACtN3i2UM4MdK27YyNojdFqUxfRNAf8fxuGMWVSwJbsvPt5A6iajywwWpYeJjde2PbG4p87wARX3Q",
  "key27": "kjrmBny6HcxVMvqpdtsEy2S7octuqQMfm2iT29EgZZsrXMX4PX5iQZEiUnkgevZhsoyBBjeryVZ6spNp8CpmD5W",
  "key28": "3kXKLfYfgWqQ5BxjcD7nEHUehNkMUNZ6cfwPqZBvvahjjS67wnMiku2yYCmFQEYJcuwLiKL5iVmYCeKkRhpoHTQV",
  "key29": "47gt13zoCBjiD18Gon26P4M8PAp4f7Yp626rMbJu7ur1DRUpGzPBD53N6oQHEv81RaXKhUMcS1X4ncuR365581EK",
  "key30": "5Gfg1YuaNsPnMJMRjuunsJucUHrQ9n5Ak8ZHVvUiXywYYEv3VYrGBZypDVdCLofuEuCsTpJJB35v4FJLbskTiFWa",
  "key31": "5gfTUXFGNdkQpwK9AjocofrxDKvBVfdGjLT6vwKWEjsqvL7AT2426JoCyTs5FELyThHvJR33uzZ4xyHj4ZaekYz9",
  "key32": "8m5zBBhcqeGQkaDVePunYT618C1MNtTWqyHSoZQq282Yfhs62wvBJ3UpA9PgQRoFx5QBgrEcCZmy5rW7SNn7mvd",
  "key33": "Wq5ZbhahuA27xH4zJosq4aLMALCuDUd5rBAwLugMMuiztzKymKxHEj9RsJ6r9aoneT3AHA414Y52en1tnoqcsxF",
  "key34": "UwzYjUyqBZTDD5faiqpp6WX9dKX55qUTS5yQ5YNs88zXgap9SYg6K9JjvZ1Mi9nnAmh9Tfb2Yqtw5ct62odqvAT",
  "key35": "4ieiHRPNb6zzFzTVxXtm2keUU32YvCDbbGhWhpYD51Lr5jG3BawWNhwnYVkNRfTBAcNWG5f9ri4KpybY9cHwC121",
  "key36": "UoZc8mPjvDVHKsJ2kvdq9Qgz8kJ8CkDZRWxBYijQfJfTzPbKywh9UnvdhHcTW5X5Q3Be5s5c3SBw3BKQ81BAGeU",
  "key37": "3FCv54oxWRwHGiDrNPfa9TqHFJ12iDvdqvhjXyDxedQ46vtdo3bwiuwBPRGncKhmZb2BCnUSUbWfh134M1BC23W",
  "key38": "2ZRVYvaoeQTNz9w26DXJh4WednHWdFUVg4d12dpwtGVvN8D5iomvQjVz4KMGTn6kCve5SU7yrmtwZLBjq5EEZ6Pw",
  "key39": "4wdxqp6gWap8Pz6vyeEC71z2GQn8gMTUNpfbhHf59mVLfqmdz5WyK25F6GpEh4fqeiFuJXhdvnGCV66bcuhJuic3",
  "key40": "3XssCZFPupnbwM2PEuT5EmrhsXUGPvZqfGFbtYQ83C8rzBERzJVqukRSycHdjZZmBDvF4dxB3e46S4sEZJXW89mz",
  "key41": "3umd9FkK4nhhjH3CaR4gFJo51Q3LihgLxKRjW5GAGcwJydYc44JzkuK1BYsAgqMfDu2ShaJRohyKdRKZQf6yFNwP",
  "key42": "3LJmCnYv85ZxM7diGpqXPoRsQc3YtmaWuCZ56FAz7wLv7BJGTcdwAYBd2HUpUpstvhoETSpCBQpo43p9eYaTMeT1"
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
