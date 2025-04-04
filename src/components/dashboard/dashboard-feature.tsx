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
    "4w5TEaFM5k9i5uqmgyJ4wDtM7AFGpdewkRcTNrJQ3mJbDMWhrgviJ2499wuUMdKtcd63CuZSQTKm2L8xbF3Wi2FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NVtZEaJpJ88C8F9Dnv3WYvfdktrChjX7YsHkYnhAN4ZvDwvbdLz1nksVdu11Bu2jUhGTWaLRznkoc7eWWuLEAm",
  "key1": "29op7JSS3KvtJzTVZLucC8mwJgyGaXyyxY7gQT1Grc7uzWHbJnUFK1hLLCo3NFHasWfirEFfCjMQTJSs5ajbjuon",
  "key2": "4c4mtX9KYRSAnaR57E2s2EShqJGeXHW9yy7otidykwbodSNi6t13NxPvKSPBNDE6xaRnb6sxfBTi3tMG5NMERCa1",
  "key3": "eBUmAjPo38HPVCyjjm3gCbRo1VVrDWjKW29QDmkSMbBKruyhcJEyETEEfhrc4XRyjykM8iD3DgowtW8MXkyKMsc",
  "key4": "3fXZnWRtsRoDY1iELLjzRocjRbYNAyHsWxY5Vr2BXD17NxforK91ttWbjhN1roiCvfYbR4RpKJvq6z6i6q1VAert",
  "key5": "wB3UpMM8fEyGfaTNGeDtq5YvcKvwD6ttk96BQkEYfJuGSVCyu9tLGK8yudFQXQn2TYndCb7uHdhQ39c92P2zBJS",
  "key6": "32BPdJPGHQtiHaKFYpuurKRwpDzfKjJuVCpXEUJe4e2iMzmtguLDtcgjWCoUTeLVUEQiUtc9gVdgCtWXadhx8cNm",
  "key7": "5saGaVura9yVTWotNqSXeTwUxmqzgtwfQqyM25VWjtvR3KCDQQXdmTJUCfkCkXYYQyG3d9TBZvtof8i6oYZvLAq8",
  "key8": "5Vcacdc7u2KN4QTZ2XRimU7Jajvwj1pkHNVEj6QHq3uexgmahwXBLN3n1BoJCFDfQV8B4NgTCGo2tp4JY4dft17Q",
  "key9": "5QCJdVTZ3UUss3oDSEsXB83NJNzHfMTNPSNEKARM8naSqRcH8kbpT7zST8ZxQRqwQpEc7KHtxBSHGacGV6iJi3t4",
  "key10": "3ekYyYLdx58mYwU3M2cWjaoCwVpNoBEvo9oqoQ2yjhHssdQSGMAiDN51Qs4DGABCaizJLxdqfoyDZWx3EyUR9QcG",
  "key11": "3pr1ivwdFqjb4kDNwXnXH8fvVrhGRGgCrbSrXJVFAsZVdPB8NhLwpVNpKLLNY8cHDnHTfW5qZ7bhs1xhwkXsQ3Zi",
  "key12": "22UdDQGXZtcTYRTT7UWxgyksbc9ic7vYhW8AGHZvSHwuQBsZ5fG3zMA4n53ZxUJT8imjRT3hHU5512HQuZEKNqSa",
  "key13": "5yzTjLKMjT6RwRgs3A2dqkDUW3Yxp8K3p4TmE19kY1L34Napc3oJGBMuEtcx94UrDbravjJY1sUjkZggVzyRvaaQ",
  "key14": "fu5ryMofyo7dLydBQf7yx8mPknaVWd3T8qAnizdtYmfLPiS48Ujsd89ZjL1JbYR4KTFFhLntt6Pgmm2zK51jgsj",
  "key15": "3FLZSz7yKwzmn5NE2tjPbkjuKzHNHWSE4i9GvaTmoY3NKs2tZP3Qhvjzi8XKLxkkBD7eQkoDGuz78BgSShSYrx52",
  "key16": "2FiTide3ZEsVjh735dy45x51sapcdabcaY1gKNget5D9nAH5H15Rv1u25QHuJrnarHgEuywYtvAxiF5CaLnhGqnH",
  "key17": "4VafjbbYESvcrEsMQX6gvZiDDjWLEtGWNeozLvb6XqqADxpHL7sYtR1Syx85Es1Jh9aKfEJg5WjckgZB1TFQ5ofw",
  "key18": "jtsJJbyhiP2mHCeZ7nVDAsKosuyTZHSfqABRjqu1Zzph9n5NehhFCvvRN4BJMhnuC7kbHUxVp4nMWPiM1vLD3y6",
  "key19": "4Yf6BG5V6M3DE7WcjDN3gbs7kjxpPWSPRPE215EEqrUqVFKbRNdSATgoCvaTQFzCwbK45XHpzuyb3Jd7rnF31kKD",
  "key20": "SVMQHubQzyZ4Tp577k2hBzK8XzmRHFccYSp5VvqopzeiuixdWefpktQ6uLFDp964zqHZRzyeR2fovCmCZJcVZxT",
  "key21": "4t6k8245FjZScqoHrMKKW71bZXqmyzQYedFZKAxkJekVHTrPrkXS8LyhaHDunJG5pweVs6vSFMrQPhis47gmaXPi",
  "key22": "2369UT5qyHiYYWcG6tbGgrjzZ8iGWVRC4rk1LkXQpELTREzDckoEsYhH9s1dY7tZM99bUHBeoifZaKhY69fRSk2f",
  "key23": "TUCwzGVDZQg7xDXeJzC7dAXueaKdtemJfJvMhCEk1W6YAWwZPu8PMfe1UifMz3BMvsm6xtA8mfnP9y5oTw1F6E7",
  "key24": "5MUGauf6FZULfngBxbUF8Vi6Vc34oBwSeDH8gLZktDqa4Lp49E4C4tojXNHgZNboqiY3Am2KofBMSeWPKDJNG3ex",
  "key25": "3wSJM8uodXL3DYrKK878AH6rhs9LRMhRYYDpPRqnGRfiYT5msuwEevHUAimXxDtRtE7FSx6J24X5pEV2NyPXjK8q",
  "key26": "4P3nYLCLNhUsUdT7kTYEuYRnatS1GVYjiogfwSwrE6En1T6nVCz8C3gVYS1qqSVetDSSht37XLsGVA8JZPVYByyh",
  "key27": "2y99UU7UmFuW6ioZq15fD61e3sn2HTmc976WRozVY9Z14zGBKSiFRje2gRdAitV5X3RKJ1Jx5n5KaGd27KWJMn9p",
  "key28": "3XbYEkmWQM8qjHbdLW2HzbXYTszbNSrnM5Yn5WGfsMAfirqjAL29kxLvFZWaDytL9aQjb3MTA7DsMJ1WUNYNESgw",
  "key29": "3AJEDEm7njoygMb7i5rV6cmuHWQdwbAkz1HaH3eAC5eDtRB9Dm7pLa3DF1tif8EkabMuFYkuJiNeV33P9VMu3tG9",
  "key30": "61uHJG5obFwEZuzfEh7cceGxeAJ2jTLjBLuG2Vnsb28cTWH1NZqs8ykhKUyYjbZdTi9TXDm8aMAMnZjySHY2BJMu",
  "key31": "3NTDCaohKS4PJsJCzHM2i3eyKu8wz4JWr48KoSfxRzRPuaw6ShcKkjEr6ngPukYJ5JKdscy4g5Sb6CSdsL1X4pWP",
  "key32": "QMNXwkgBrm8mRqiEpcSvEbQAirgTED1tky8y3y4YY8FsDb1qwTsbFzboLnTGVCw5x7jP3UCiVHHMCaTDDsDjoY6",
  "key33": "227QGCHcaF8JBxL6hAUkKQcgqNpKCrngnpnH8Uu2JFB8mcythD8JAdPrNgGo9oCFzN2ZDKNqgRXzPi6cCs3MPy85",
  "key34": "2bxfurC7V7HtR1X4kVqdSiTdpxxCcEoakW2yDesL6ZRCfgnafmtRPZY12vyzYcogzHHe5JRnNHpwua6NBzpzAxYA"
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
