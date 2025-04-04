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
    "cGMgGt5Rc6HM2zZ9XbTteH7ZEG9qkrbs6kkWFUM5gBiDhBdjxfSVKEYPDSSoAn8MyXco6tksPmZ5Vn9ru2fKhKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ekNGFscPxxUAMNbh3AHQCP53t8L3feYwt2jenchoKUhE7XMrCnS6hjtrz6Z7iJ6yHsQr2wf2SzAcq8bYu5UpSZ9",
  "key1": "44EMGrGUm59pg3DFsTt2KfMwcGsLRAj5P2fGoPK99rqZZLMqZLHHJNwPyTmLK2rnhyqchFS7Vom52736FoMixK6j",
  "key2": "3ZdoQGH7rc7qpygc2MMkE6Mz2cegTDgd18WdhpvqPz8QJD5Hi9xKzCesqqbiC9AcxG7AHYjGC2eUKDCRYHKkeusM",
  "key3": "597zr7SzXsZ2JX41QrrvnfskBuXJ9bTq1As9nojUha1PA6qRuj6EC9zN5cRXY6gfvWmrcAmNehtEbYbRozNTR72z",
  "key4": "2Y8VsCccp9wBSoMiDDdxUsqTb4bqWkWu8nkAXtz9dPfXGMKd42ghw1hi7wZc3eucBjxV7nqYMxrx3R1UCTKYVYTc",
  "key5": "4dyAH1csZMoXRqkMH4nRKH9zHdERgonSegGvGAZ6nsS4esCydJecmAUES2V5Vyz2R4rBmsmR7aD3GgtsEVhSAgVu",
  "key6": "67dawU1KcZ6EAHAaP36wUv9TwVEfxVevvGr2LAvChETUP3Nn7U55Fwr8jnokLB57sFpmqJiJrKU2PB1NzPmoigBs",
  "key7": "dhgLYL6m75VtQV4APvkhSZqQg8Y4653bqzD1oucBuuBKS4jWog7iJXhLFfq8Wx8bvRqmLo31DEw4yuP5a5BSH8r",
  "key8": "2HeGADBRWAagni8fYcx7VLe94LA4LNVPPkGvMrsq51utDsbTFWwrcx8wrx4JFZ3cP7TTqenoTYp3sSeh3YxbQmFy",
  "key9": "BhC9bZebKfGWaZhfhFu7mZCp2jZgpZ2wc7KdFcqJBg9fiejGe1JTEsbkWUu416SyHqsiSZFt2JDMwE5d3jKnzpx",
  "key10": "37F3CC4Pk6yUm25HBtfGJzGAyp6zEp4MBk9S5m2SwmUkFrmYW1y6qCCBuJ7Zd55wES7fngJGF8Q815SL8tMpFuPB",
  "key11": "YpWnQr5mwUmySSXJK1rmrsEBT1WdXzxTMJJuwzidDZRqWizHVmFq9qZ8JKiraEcoFYp18a8j9tCMU2e5negAHqH",
  "key12": "5hUQD5GfZn25awt8axSXSuUuDLskPW7v6NisGnw8VbCnxUuMQTsVdWKzziQchR7xj2BuSyy7hfTBZn5dkk23CajX",
  "key13": "ZaRYtP5h2QPYGSy4ZfRBj3pGM8S5shb8Y8VpyLTcSpYAz3kbu2pvbCYSzmUgSgPk3HJPsLRrstGUVNM62tQ2BWu",
  "key14": "GdEPYTC9VDGVbkmndEChq4pjYAXuEvix434pvXsuvV797VbhKt5LCcVBz4CJo838PYMaU6yFkHH34fpEudBYGKX",
  "key15": "5xHx6dTeAxr2Jqiw4pYnVbLPmTNq3Vaiax2ZhtJyDx2XDb61Jt7SpQvjXeJL2tCzbYoyFAtby2eJN4VCk8Wo3XBx",
  "key16": "5xjWmNK7xx5HBnkHmBPRYtV5XUdJVh22C1UXRwqRpZGi6JuBRSKfLSbK84ARfr8hQx7p1Amq1T3WD3MX2nVumHvB",
  "key17": "3RdkZsYrGtHNXeGFmwFvRn35Kmwyh9Sx1irz8cZ4ZKXepYk5t5jy5NeLxQK7NME1yKKCxQ89HM962xfz5wiKQSzX",
  "key18": "3cwvFkS47kgBUZownbR2Vdy5cMJwTkMrqQBTXSbSRxqdDaj2bsMhy8JbXcaJTdm6kgdNJeoUEqvA3VDw7fBiGKyQ",
  "key19": "2HqcwHftyvaN6QSomP85wKs9dMweqSJ37fVuE4ieBUPg7FWY42vUD9wygyEPJbAEcpi9oG5dgYVeRDozjcd3GMkd",
  "key20": "NdDGK4Nfbj3ptr5nWAQgRvE749V2o8MPwCmVPSDRHMVzNEEHLgc1PPqRpQDppB3xwbqzSwiyJeF5GCYfrjWKDXh",
  "key21": "scNXCcJh2idxLAEEG67bQXvNP1oDkDxcPEdCtjmXt8M8U4S74JAm7UybrhYMvG4uMNJDLCcvmj2PrTomDTZk1ZL",
  "key22": "2BDx3TmSqSbFdGVXxbmyGbfkHB6W81s8Xu3K9TMkpK1gmF48xQmXYANbduBrj1PWRZkTBmnkjH1rrhbtfRUkCqNS",
  "key23": "33s6mgcpGbMdoYHoF3nhC511o1xwpQ7qB3xpRwUDByUAzyj2Xrbf5uS4NecuoQXZL5cof8u9pL7QgWMSaaL4kwHs",
  "key24": "CQuP89XjFKsTGSU4j91CRXxM15ethZyGpenmMHL8Sjnmxxs8qtKwfiwn5wh8VzLskMC4HcwVT6frn2Q57qWaBFf",
  "key25": "fNhzvG4HHxUTv1hKbncoG1gwxCTPzJDNie9s3TYvkEUqGwGySAuzGTQEBfSSo1HC5vxQtG3N6mU66J6uG8PzFi2",
  "key26": "56U2KGbna18aKfJ2tUtf2nokWeyQpG4FSmZuQTFr8jwRseZ3zS39ydnfTuf7WFhJTLKe3PGMLG1oQp3w3mtKEwxF",
  "key27": "5UBvroirsduu6ihJnF62Spjz2X27BBtSqmqWozbD91Fs7ogKdaHegvroawmNipKtqeAe3jdUYQmYbu5SEssfbtC9",
  "key28": "LWxxo3evbKNFoDXc127oSk6GjPXsGQ7jDXc6Bt3RYpZVEw5PctHCoVPjA7TbtMozpsLChKWCwxykpSRt8zBZi6t",
  "key29": "21sanU3q4s4BGarsyYNYPfhrVXLLPvN2X4CzhEqAL5LsjQ6u1YionfbyyZk8sjbj34Mz7X7krudCVEGVVyq2HN8P",
  "key30": "2NJThgwMr6FEoVqhFBZ8sz9rbfgicVyVFp6D3PH8k6fe772F6szgqyLLwKSHGHUSLBjdposA1LCuU4J1LfcbJui4",
  "key31": "3bMHC6P8eb3dTrL7coLYFDYzNhRwRSn7QbQMXtoWN4UErwbYsqusZNZwZ1YCtReWBNGPrHDeehgaDPxzd2Ne2XbR",
  "key32": "3LbSTEjoEXLNPjo5bifti1VaiZXWtgvrLHGwKjYWMQkDF1VdCEXpEhPq5yRUGaCMtzr7RfRe5zvoBDouDqYGTukg",
  "key33": "4Zn6Saks5fxpiJtjWQg1o1HTpscKnnLiTEtHJ6naFcwS3Kcxp3E1CVenX556qwDubjpNNJ9bx2oJQMYBrjnP32t1",
  "key34": "P9o7vegvw9pG2wRazVzfp8yPGrmngS5x5j8G9n7mZ9idnuLxwj486sdYU4WEVyLN3e8vfXwFM9HiWGSDtSRaJPW",
  "key35": "iweGxpWuY697Mb1o2q1Tc6H8BUj1tNyY2GB8Z1z1WibVV5x5PoXCRPvnymG4UevQHBCHa8Yaspis1PHnNxZgo8A",
  "key36": "4GPn5yUw97NDnJd2JW8aQoqKAV22PwJwe1AdMo5EhCF7sYAZsuwh39WUDA3Y9k8YXnN57CRmmCb1bdPcMnEadZLA",
  "key37": "5z1Zu9dLFqgExNb7LCUJHtKgdyDpdYUGjiQH5Lea7RAThPcpXHkHy7FrtuqMQVrN1NYhbGvyqdeA4Ra9WqLxWu8g",
  "key38": "2ukjEmY7Rr9iygUFM8JDuGMw6MkKiXvg4JwD2u7K4CAEHup2FAedDTQqpGcVxiQBhwJa8aKYpwxpcdzwNCF6Wacb"
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
