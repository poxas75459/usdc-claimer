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
    "5E2ptBQQRwXEDc8kq8zdDnNvmMSMEonwrH4dyHMPbUn1gK82CxzLBdKQWC9HdXU65BDawAcfBMePrUhRS8xKsnjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjfoWkSqWFhQw9Y2ew524ybhG5SgUDUEqjt21wnL9QnHMfGhpc8dNubipT3RBWi6Kshh5VNFHL2cS3arR7aRNGx",
  "key1": "2qBrLJios8KDxpagswSdS5XncHkzxQrCqXukvrNZeF4KQvPppedxjVL9KazUA4mKK6yaKPvmksTskAp5dyYiUFoV",
  "key2": "5AGawgv7hdQV5ga6SEVyxqMm6MZonQedaZLkBT6AH5FbszdpTdcaZkwZTtiSk8cWZUnoMpwJXuozH3iT4pZoLuzr",
  "key3": "u5LyyfFe6mhmnW1rc7uH5Unfy28LksUaYgPmHMHumYEDkpo92JY3yiNjguu5tNHf6igvWqgrw1H1LVB589ei8Rt",
  "key4": "VGeFQAN87ezTTfyd2QCMhfRHbJRt4oFGGNGtYYzJc7dhFkp8iCfWeh8Sm6eP5tdDibK3PDhWKiNK5RjDif4kDGi",
  "key5": "x7sTfU3a48mTehFcbMF8H8vEXgnEAEm9mbUBSjfKUPeyeG9pTpuXtT3YWyaEn8EKbaBsvZdZXNy2tCRi1aib3iC",
  "key6": "YMCRp8seeooRpJireJDRixK8YD328CdBDwEuq5SDLxcUwzLjiSNfxT7NvQRd56ELhRfUpdPFNgvhpo6ZcJgX7XA",
  "key7": "tDdAtdMAgEfEMq2iGK9Vcuh6YEmBtpbfvdALAEGns1QqZeQ18A2XTe3PC8gjdGANM3WrVsPjArtRgw13k9Krub2",
  "key8": "Y7iXsoJCa8gvsyMJE18DZZPWxmj8mQAUtAkijQoSaxCFfgLz9Zyi8vfzS5uawfiZKpmqjiWVHA5o2bJxjJ1oZ9j",
  "key9": "44mWTpHaa7diRAFLZiyLztwmNi6dTUyUS3uxnUu57n9gf6fxukpR3XmPD5F2semHQXbPa3JuGNPHGRDNHhoko7Ng",
  "key10": "63tLn8ePEFmmqyrVyoaV6LbU1g6zuDEcRHQ861BVFJhbnM7Tg9e3MTrhPUsbA9nLFoc5YydvKSqs3K3pmYpthrsC",
  "key11": "48jf5KqY84SmrN3orD5cEGB2FwePvXJahnosXY7n3V24QeYAW4uAk8xgXn6UohUU9RRmxU7DwXxP5X5rEFQgKxze",
  "key12": "28NfsR7zNuH2KCz4c3VnHTnQ3ndGVbYAT1Q1yxhFbn2CzRVUdDgMVKWdP2f6MVos4vFqheUgzSoSaqwqw8cjBMb1",
  "key13": "67NVtAg8sAwDUAV2ARa1RqX12Hzu6F12HvaYArA3jV74B9PM4Hxpiv4VJ6mjZQRMDqEaGaMS3PtkqhEZb2xALRj8",
  "key14": "3CZxgvPERQvuuGXEmniarTGCYCP7uTQ4TahXpRqcAqehqKvQ6d2VXKQLB6HjhWLpWy33TFptbk1dewdJe7ggjVUQ",
  "key15": "6734sRfV26aYJ752yqkJrMBxcRKSy48qBbvTkyTWiY3UoQW6C2zCSdLYXpnqDd28i45ts7anQdiwLhGRb5mEkCrN",
  "key16": "4VCEYhTL6gipc67uFR8gpgqKa1jNq96c4cL8gbdr84bEEkRmhBKmqHYiNbqtSxm7UxHiNvSJwf9Ud2B8yaCJZjaC",
  "key17": "THgMjQPdaTDvbLEUqyLSzBMY17uY4gkFxbJzJTVdQiueNgcaee9RgR8SDugJwuAQbfbi5DbF3THXdkLTeASRZTf",
  "key18": "3MHX8xmkpBGGXApTsxiF9KRGq8dkxKU5wE74CFqfxwuh4EVYtwNLvkXQ8rhWVK5VqWeLhNjXr3NnRxd8YMPHHeuF",
  "key19": "5itziAhsaDVg7ihDh2Zk3z8SLBdda3hakTKSdgYZWZ5pJWLRccKvSDtqumARjimqYPVAv1nafrvfAeug4HNFTwG5",
  "key20": "4r8nFejMmPYYRBhwj8nB2BexHGQ8t1PgPv1int1737RgW4ALbukrh6huYSsSE8DhXnf55eh3rq1MxGqt6VGHdJHP",
  "key21": "5RyAnqaB6p8sfamHTeiVRJNEfuPHtfbCseVp72apd1woTdg9k2zcWbeNAsawNHRSCxXF7wSdVB1cxpMPQa3nhhsd",
  "key22": "5AxNJBLaB3Zk2GmYGshk9yGuxwB2pjw5fEWLN1Zi7jvjAY9NsKEQhhuK7SqLRrNrpqP6DjN5du3qVwHpKeefAs32",
  "key23": "3jHNTNquL2zEMmC7eJcBntVYNd1mnnS5WVWWKpxPRbxFNCJcvsJnxipKdX6nFAcHWhCkJj7HwAPeb9rKFCxas2Fw",
  "key24": "iB3pbS3tQfmejTQM2hDUYP9yJYQk3ptpvd3VYfauXiyLyN5iYqzeKd9mrCAkt99JyDjqLhc5wv3mMJmZNP2BNpm",
  "key25": "43hFaFz9yLUaKEsYFpCdyWKEBXPt4h69KxFW723zAQbVR55pYHBajrVW1fu8pU3p7ZrQdAZK5XuanB8LKpofmpFF",
  "key26": "2ZUVfMrUaRhrFmF4Xd9kDntHxeqLx8CPqTSTq9v6EULRX7Di8EJdnboo5cyTxiY5Pxe328o6EL83DtxYzwEsUj17",
  "key27": "5hDvpYPWdd7pD4pMRoQ3isRGV4HkYEiiiggKC1RUgC5vn2Y1JHEqLFKQhstaKgaK66zHGbL5Kt1dwb6ageQGjEZg"
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
