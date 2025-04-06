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
    "3mxSETY12bxZ7u9ipz2jgnuBkywbBUFbjZxCFgwjtC5UT89yUgakF4mE1fRnXxqqcb9MVChbuRWSgZZjs15gfQ7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D75uuDDcbEareqZPkMUsRStRAAcFQFDtsvgZAz8A92FVrStCRd8FjCkivD3JWTbq6zkBAEXT3VrY1g2MArGrDBa",
  "key1": "wtoBmSA4Gx8z7GmEWvucA5bS9QARK3K8GZ73CcpUBYRbxvYY1mFiXVzsDADy6dRHWpRRqrA6VmkJm3iKR2xhD44",
  "key2": "DtzU6943G5SwtA2BiUEkwKB48WKAiQoqmJyPvdaXXESXZg9W8cYQ9dobvNpwG7eyesWFTGyWp7zzZz9xKEnpCSz",
  "key3": "3A1CvRrax8Zn63WQLTZrfmWTArAziHu1YTV7tYhkgpf93YhXVqCK5Kh2nzcVbTa3yfyqxJ3DxAmLW7GXUYadteC",
  "key4": "3Vjhijjn3gojL5LXynoYWUQH63GKTn8Cg9nimpwLMSPo7Vs4vBRhNoKGaeMAYMGmsn89A43HAXWcZcvAmmCCdcxP",
  "key5": "4sTQ9dtuJ9zLN9eh1GoeckSyxC9JwDuNU7AvNrubFbqnrZFj5pmpHggaDstq7hUhqBVZbBAg7B4DBeJMTVL9FvKP",
  "key6": "XfacVeRJribPrKgbEWmJJeDdBPFm1LEqo1rBdMZCDdAYHR5MDSojntQNSzyw21guLoQaGPJnjov2TNTRQK8yRZL",
  "key7": "55CjzQUXfNndg3WkF191ipq5h5tT7U2Fabq2HCHH8Kv3WpVrQp8P6eibPMb4RvS47Ui9J7u9w95wCb2MaBu3m8Z7",
  "key8": "3BYG7SYokKhHeLWby13uJuKdC7KcMorEfHrNmx1PHW3NQDSALvuXZR22fXjiTEbRKMLGHJC8wp9bJUkCEprz9uJD",
  "key9": "3318JPw7tSrrU7nZWww7TCCJVGtiM3ujnJ7CUduCVgz59MtDKJscfxG1Wx6H5WcKTE3kXt5dcp7sAADrHsVKks8P",
  "key10": "2jdFWDhYF5SZ6X5mxX4rWtQbsK4Nkd6eLHSncXP6iz47AogRa1dDC1d54NaYjnLExkwF1kDRvFofJWWk5CnpfNU5",
  "key11": "2eQuSzyWcpFAQeXzdLrmCqtJXHS6998mNFFfUSBytAQUmZNW2PqH9wzqimD3gBWpTWaWn47jkjmGoK9rHHDduLD",
  "key12": "5Qh5yEmrXPgFuxXkHk4Cp37gdRanKG7yUzvQnKqS9qCyqP2WXvm4ZHn2AD4fG6uqTTEvhgNrdHVZQr7UTezHP9fX",
  "key13": "4YUCFK7NB593ywtRUYV68vW8szMrhBDwd3v4kkvGLxT9TGsS3GUnopAchRmfg7qTBA7gYneGXJwyodhefsh4ehsC",
  "key14": "5FRnCEdR7uH8tspfFkG21SGaqZ9FhhhvHgFRqQZhWNkBtgTWyZtEujBuf8goECm4pnVXAMraKSCU6kVAC19ZTN5Y",
  "key15": "V1Bh38q8hzDmmHALvPNbiMbzLyyWRcPZS5aauXz7fkCjukxZwagAidy1xfTqkh3bxCE4HDrQj1jzp53sQfk8UWo",
  "key16": "5dXhaqybjSBZExSXCVwbYpjWdKiCbk4GRNvomEUaSTcYgAbWrFwv4Cks7YgJUWDvMpvDjeN9asN5uVcHwUaQs4Hr",
  "key17": "2b1kKoyetho7NMWDY8xZcnc9z42u4d8gLiBLVG2Yngtq2HAnHg9KaUXomB36F9TnLwE3m4EqfPebd1W7UoKN3Njf",
  "key18": "5Lv8dj9KeE8FLKPeixScTWuqsZyh1GxvTWCKNdfi21LwwaLWjgLCa1VcDg4znTirWDhaqu71XdpgH3dhGchvD5Wb",
  "key19": "3pJ5UD59GJRqWBSV7KKiDmAHzUo8FBemMa6yMz7E94j1vV1RtSTwDdNyNzEahrVsVNrdDPZWUvYgZpKzdjoKjrGu",
  "key20": "5XSJ6cS3SMPTWcaBnC49dCXaDqsWdKg7Wv41T6jQwPEJcAJLedpeNTRRrm1v2u2bTAa1itk2UfPSYi9ATwFzcnNB",
  "key21": "61Gyn2imxwsCUPmHDrjgsbtujcjTtuGUbrujqF9qxHThRQcyr8nF6tY2WnfxsdcsdegyU3u5XgBPHWsdXSn8CA2B",
  "key22": "5gbtMNfxDs3jaUWcSahL5q471VBxgNqLTMcAZmeHC5xcYP1driebCwatYLNP6Nv1Py8t5s3dKSgn8oc33jCeyTTL",
  "key23": "NMa5zZcWTa3h9SN2C1B6c3nHSz2cBcY2mVqkDPq1wezfCoioQFt2HazDSARPuMAU5B6Exc6EKWrSHLGqtt1GpSU",
  "key24": "2ay6ieHYDjfJeKVW4Fy3QNkzVVTguyMek4LWzwubJwrox6jZMSC1g9Es5oUqJbTg41auCNRAEJFZ1WRnrxusyRx",
  "key25": "4tUThxpxYKAZMpBNefWoS8U2mDDgWJnWcyFCyrAgDSVdswuJeeCeNDWQDdW96jwJUrExHuzM8RJqQUVfefRf5vgg",
  "key26": "3LotUvswUQQQVBQaPCm8SQ1Pxr6FBE7NWgQq9xrS78xjibNq1gAF2Uy26CRTH3b8pzdautKa1v1imKw7svsk2kaC",
  "key27": "5ps9o7Tx3K3d74b5CGwzVjnDWigsnU6WoFQ4EBdC8uFg66AqYfxwAFRimuUvALSS7thyRDiasCnBCRM8jX4foi3u",
  "key28": "AhH4mmGj3qWTfeuPWZ9GvzZmmEya5RS5EvBaYuG1QU3d7Y6FvQFECRESSVDrDyeLUi6agkwbjHJUNeWjyPyjeMp",
  "key29": "3xqkRxqFv1KK1o3KrNGutQVZCLBxLnQNDgGPDNbCrBYw25besZcBtgt1BvnuNFSex3NE9HGckAsMVytW5NocbPTw",
  "key30": "23SRoFT8e62Q8uAcngx3e1hS27Vo7sjxUjFXhtfY74JW7ttPvZVQ2Bifty5BokkR1E3vV97fMYAiqtbNDLiAqRsp",
  "key31": "3bjCM5bBYyrxNwYk7ybToxX8EWc7eABpZwstfX3obWHB4uBmPF9cw5fUF8tTq8zwKhHskLMTvfvqa1aed9CabeyV",
  "key32": "4M5Nc2oCxa4N2B167j186pQFwYGUVVmQEkxrguNHUkxyu8yBLYLGV5RnBXrpJPwiGk1uZctoKZHmWqUcGXSPqPAJ",
  "key33": "5MnUjssVZPav5a712YpXnyBk78SrZtjzGKnpHC1nnWwpZsVMc5JAt9qDaoLP2Af7PcZZ3koWmL1ZvRePUyiPdakD",
  "key34": "5xuscFK1Fu9W89BoZQbY76s4VKYBT6jqKrbb1rrHDK6TLvxUWZouKVCkudvn3ziW7ngnEHxXALmt4xR9oRt8UiFs",
  "key35": "5HU4hmRt6JKvA3JtGpWvmZ1wWgoBdMeKUgDib7xN8M4LRd9skaX3YBAiHL27cEtoitZ2bZSVbVTNJszQ4bYcJNWZ"
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
