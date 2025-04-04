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
    "2zT1E5sHJBFCfZVoAPB7TfRg57yEgZphHDTBau8ajZJn8CNGTx5XrncUGegbWTmsx5oA4S3ADNNCzWeKGDWuvYkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXdfApix2TqX2EbVXarUzJKRU8cHdWk6Vr1YKnSBKP2cYY3VoVUi25kbmFenkMJeSicrvSdhzpwbhdxXCmMtff3",
  "key1": "4ThMj8HqGN2yttQL54VyBE3UZGnVvVCRVtGEPaQe94g6wXXhn9Dge575Pst2vjM3ezhmc5sr6Nk4sSBG7i6f3vxE",
  "key2": "5sji4xuHiNJUxuv5CqGVNEK7npAuZBvy1DDpPDQWfrU1TYfZXrijiTmGEFH4DEdtM2sr7ELxLYgqRWd54QuwB1gY",
  "key3": "3seARLp4Ae4v8PsFxwNVDucG4fz5ntnr7e973R8LAEc19iPUFn1BXpvJ1DpfeABagNRtuFTdWCo4spgDd7SVRwGj",
  "key4": "4nSmy8bxkUnneG1e4LnS77FMsdP3R5BgPHSQP37nCjDxHrGPnkmxFkDZXP2frHjjvmLTbmRR9QyhyRkH3zeHWhUW",
  "key5": "5ys1k5V2Aby2V9B283tmcF1ABg4gRdnhSo2dfZETbyN8BwNpA8fC5ANNX2P1QxPRDMPLsRHB2LtEYPyyz1De1rzo",
  "key6": "5ohaoPSW5cE7uxgZjVv47S81r5AZC8Z3CkzBZccp93DgiyEg5FiRbprpBS5GCiEkjN8CsfWGuDKX6n1JKwpczFDP",
  "key7": "2fam8TdjEdDbKVqJTiVjE5oAxfam3jM987fYRScuq8Q3VkQdyEAVDUae4fSgweWvuP2zk2t6XunKxkpY7p9i5Y5B",
  "key8": "42wvKhn2xubk5nWQb578a1BqSQmJvy6XqpzMsX5n6mRqEGYqsoqBDdVxqi1mcR36cyRejQoGn8T2qR3e9mviTcB1",
  "key9": "2hRurEpkYdsUboiMgDG9ARZe9AKW8KCMKvJMi7rcD3aucep2xrioUGdfAZrvSdVugaV32AuZZA23LEy1NTWJ1K3K",
  "key10": "qX5PLs8y7NKk1wkQZGnjAHdEG1jqKdeRvTovMBkmNuEQHHL17qh7DDuQ2eGSRDoAJayuXuCFwN95WarG45RxBxd",
  "key11": "i7mdqq2ShC4iWa65WsgdPaVJt7J3JxUUGb81L9xdmhnjPq3Kg7NHArEAmgaRSV8x5iGqe6fnju4mBfzwxG9VYs6",
  "key12": "3eUrBxcjLmdgQubAGeRQdi4hYBDXJwkMLnq7RX2udhBiTCbDAVHMeg46KTizTW57J6S13tThBnSk1ZmJ43Pj8628",
  "key13": "2vrUvMgNLqwcFAnxpqnCq4WbaZyTiZm53VRpPeWjkEdUEpDTnPDU7ysgjET3eVvbmD1nJcCnKZtdxti3LvqPKK83",
  "key14": "5rJS7t9py7BTWv6pAteRxf5txCbg2B7FLhWqv79CkuEYXbEJ1JC3fm4i1TPAa7UAzz8ptp8FyZdkpXaRrSmwZDau",
  "key15": "64XonGYFh298w6oo3Pt1ownPr8YSyUqUhqdJUHrWH4u5JWU5YR4vs3EBD1fr9vdLtKX5xghR68s8EMD9k9KtxNvQ",
  "key16": "BxU7mSPZizQjMNzwsE7M4NdyXDr4Hr6fm5pN8wRDbkSVZ6LPMMnYSNs87DqnjfQjYUPRawBnCH7mRXmNZ8uDPVQ",
  "key17": "23EnDffBg7kVPNnHeDrp95BTwqw6XktJe7QbPskURzE6Rv67aJSdHZ5xERQcsTcN6gw1Lk367wuL51qD6J7Yv3Hh",
  "key18": "5ciGYh3vvuEG46ywGE4PXSfopC9MezwuPKpyoU5BkpbiQoq724R2ANA4Z22nGs8LPPES8Fr1iyK8fLNxr9LbAt29",
  "key19": "48QqA3MN8x4ufuRK9qYcV39PNKkJRm89zYjBLiViQ6MBeBu1XmG21spx698XuS8XB94EPNoEHvdnmS87nTxWGdJ8",
  "key20": "2VFmj74K3EQ7DT5nf8Y9tTZa9j5VD7wwwK55jb8mBDXbv9KXRNnHwJTwyaJhasgyDnyF3HYWT2hLkWF2f8WQUTAz",
  "key21": "2yHn3vVp8AsEaQo2FXUmFfSsXffUVUTVash3hvCuzcMnYsje667aLaEFt4UZ4XbHBNEQjTbQPyLQo1WhabMYhgb9",
  "key22": "PUdtXbYqzrD6NeKyYfGEzmBrRc4VAkXoBNGiPT8Y2NSJnEoQLoE3r4fN5J9xF2GMMzn5GE61dZV4y7he9tekhKz",
  "key23": "FEXC52DCao1mLPmYsC9YDx9yPYnZah7Lyk7YUcv2RvmfdJEvhmXbF4uSDnLBEDniGkRgUY1CXcqaHNLLjJxKw7M",
  "key24": "5qyLQsQF2euNJsAu7CJtsf35aV9dwn3b6xtDVmDmyx5wgKWZWcDCDy1zJEAYoud5dPH5r9tTqoc5pMEu8mgqkshH",
  "key25": "4P839CRuCdMuorJ9X73sub3zz7LqKEt1nDFBQjakyKqvUCveaoKTJuQehD2KLEiuvqv7KDxER6mfrcqUJBHe8btY",
  "key26": "2nHGKfWU7mwVwT88sZ6pxUK2mfDhPANYFE5LG8TyxPecEPWBvTM6GDytJXo6jzg5eE9VFBHwEZpFtqtcdmq2rax5",
  "key27": "37bA2RMvhgbeVRJSZLLWxTaPAesp4t1oyDw2QFUrk4xb2YJck8MySwwo7B6Hgf2MJbYwUM1CChsyFgRuGV1rBQRk",
  "key28": "uYNKCH6jXw5jXvQ1iUC1UYfyWuPiYFEgrhPAi2uUBU1i4kCocc1W49Nq8iRcMA1EKz1ME9MMvUrsgtdJTfPRAKF",
  "key29": "4bzjharKCTztMFkYcWuzNsXtEJ4nPUmyNLWAa5bKMjdR6dNtgcbigStXfRLxYDHa6s5SkojTCS914zZfcEUfdnsG",
  "key30": "32uCq1aEnXaGAA5RSj2B1u5NDUXCf1EUYAxPpeNJKs9q17QGD19JUkiNaXAY9WBhCuDmQcWrV9McGDM58qYMTJ9z",
  "key31": "44ShqYpeczkPZw9EXb4hCuVHrTtgQKxEsR82nWXXBmDE7XEADggJNxisVJ8grfAcCygvNzqXAjG36KiHfeNcCmyx",
  "key32": "3bRf4GZioB7C8PC7Lgw5yqdqeNtSeASwnywD8ybWtNTRWQqBdEhTa23apieitsBjH6er6u9PqnMckVyKxriEVpdC"
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
