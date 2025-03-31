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
    "5Ca9HHnJMkFWn6i2sSMqs9ffw84Xd9b5A94CmL8rHVKtyX7xtWzhjCCXGLi7UN9YNFq56N7Fb1T2VaXzXLtK8GD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Y1FdvsA627hEYgBa1odHcw71zGtWHLrxcEXc7HG77b4q5wFcczCjh5tZQiJFUiy5V3Ka8YT22gJMtAo4pXBWnc",
  "key1": "5FiTrPZJjrmtcaLLNpki7WaHUotGu89UHUagkmiTmMyVddHxXWxfyqZmqgYWt4UZ4qQd7GaVNv9gJWdr4XB2Dkjo",
  "key2": "23C8CV6Qy7BJcced6i5G5XtrJjjpi62BeVsJhsZ4UZ85RpmCAXTLFmSiU3KQr9zYpc5VeHrWVt7AFTfua7jeTkiw",
  "key3": "3HopZ8MMdQmn3bRAmUJUBwGR3cyzE6C5ecZCkmHokZGpAnRKCX5gUnQ5uNPkxKsb2XHhwCpdK6odSHbRkzUFnn7R",
  "key4": "52MHqWYbaDaAf7Nt1yrw27A6EMqWFu2w6waJXJrzntKAUM7n4vj9o5r62ZBP2bPE7Nm3rgN6k8B9wafeVWyn2Cwc",
  "key5": "4ne5aCHHUK6hvbFu6ysoqDWniSQ8yewnFok8VjTvxU6Tp4CBSRPAdpecHGw9iLJCMcBe8uczEAD6veoFUnz3yvFy",
  "key6": "UeDvefrtZ7GPz2MPHipiDM4GCGS6ku8agim5fQ1FiuhFsBS2WttywuJKWpkK3y52JSjswzDGt5zX9ktYbS8Xox6",
  "key7": "3wAE7djtr3TbmRcKr1zn6AVKHEk3MEQaDyFxxfAhMsQVmyYLHagYiTex7Cs2mowTRBoLUcVXuvkfozLyXgzaaq7k",
  "key8": "8UgRAnYQVFabn2qN2XpJYY3gU1P9NPVxFXHqjrySj11FWAucAX3CyXL5kM9Xb3anHk9XV9kTAHjhZCGen5vxCzH",
  "key9": "5GzxSAAMFuNyv7DYM9RRxaz4xEB736vrTYNwkhbuzYh5jioxagWy6kmWnYR4NUvjbAdyrh95gsCVdyJjPxGcEtW2",
  "key10": "363Nk8eUcknYAgxgStrSAaQ6Jkt1xa2kGd1wwJukD6FEsRMc12VLVzeMEF5hZfGgERW6RxPMBWYQbPS26JbBucir",
  "key11": "5H1HiJ9diNfYutg1vo8joJ2nYPGtpYN1ooXa8yiFzw125nDtD8u3xTsfCYQMioaxYixgcRMu1SaSWFwHERYL9Efn",
  "key12": "3rkKSQtu39C2PnQEWedAFgBX5wtJY3RBMAuyc4WKseJnF8MgFBMSMw8LPs8gFkivDZfQA3xjj4BBtb7mdBBdQoWR",
  "key13": "5FUXSXq518KbaoixLoYhf4Usr2F8h97unqRXNmE86LUf1iifiGzwQcbs84HKhjn3uRkKXtqpKAe8YVeWiEGpYa7e",
  "key14": "Duy98pixjDcrdYRCFMgNk7gQM1v12rw1m4uSaXek42YSCooHRn9WnajKmiM45GrMrGYyfReUVxNS1Ywkbc4XboU",
  "key15": "5oBi7FdvL1k1offYzJpK4NRBd1fa9Z3w6y9PqYCs6wPkSuhCfzyTbftnsQ2TRzu4VEzjch1UwYtRmYnz3DZga9qS",
  "key16": "4EeCPF2zVCazCQQdZ8HxMX3hmiZX2Wmrx5oapmTsP7nKMZKqcfwdNQDKCrvUUiMt86sYQKXeVK6q2L91WuWVrTTu",
  "key17": "5cDn4vvj1YQNSzKJbrMeFtkZzgmh9uVqatpALAMyaT2zSp7krvi7M1kdKu5ZQXuotDTA78msypRmWxpWvJ18K48T",
  "key18": "3MxHN9N2q4hwEG47hag1uaRCkUtjAdyEbN7xJQyKnyaE2R436ybei9JHjm9wLzt2atDtbcnXpqWPV8Tdn8R1Lzq2",
  "key19": "4WvHqr5mVQe8aV15JthJsHQY79Bd6UzxiCU2qMYRNBjuBXuTG1V2iY32k4tg11ZpqegLfvatgXGAmX8jWGbJvDwr",
  "key20": "4VtzuveYgjt6UXgFbe2ZBv4HoCfFZ6pUP5H95aiL8d1PtxiwQNwtJauvGUhyYTvJuwzJmTiS9Dv849otX5g8vnRi",
  "key21": "3TdreLgpyyg1JEFDZxky283yN7TCMhSXxaAEKgAbivH7PdqMXVYM833GzBGcEeQJ7WxnMd6WuqZPpwvX8fuwda1P",
  "key22": "MRyptsDmeEHg2RF1UEBXHwvr4mjA6XdDyn5CkishcmYxKC4Jv6b6N1N6pTfmMvBTcxhAPGV4ePwkRwrbFWShcDR",
  "key23": "3SxXnwpYkWHS9mgMvmqLGBGJ78ywqzfFDkL8Wvk2TSi7mZzjC3RgWnmouQ2cLfVuDMCTNwCviQTaBjDFBg27VVKM",
  "key24": "qMA8NWatcBy4fqQXt6RCLLhATrLDDo1ms1MWfLwzGSeRKt6BM9UC1mUinQVQPR91yQX8z7rJfweh8KHjYnEhndj",
  "key25": "3J4vRY9dqXz5iHszsRrBHwAt73vYHzonNgcRAb54uZtQ72KRNeMKNZMrmQZPDqfxmcbqgCHFjU5YRinF3zEBNsR1",
  "key26": "3Zbf3NEi5MmUXkeLmzQEp281VSETmbH6bz8KhxvxDxy4BthnThVsC7VUE6GzAZT6oAJgpdkDGjMAYcFrui5J6Xgc",
  "key27": "67fxN3mR25V4rduCMMMZCNjYJjRB3ZpSYRTYbx9WRMBdSbZk13rvdgZ23mrmMRfBXeY3UDVS65bec3fdiUe48GBy",
  "key28": "3owH52krx2eTNTomopvzuDGiJs4hordUiX54h3t1AeCE1ttE9jsuJZHa3EaDSWWWXCXYs6tckjV9Zoz5rL33jkHY",
  "key29": "3dvbq1cuUZikV3S1Bi9Ltd93nmN6Jp396KmCETNs9qkf4Q2qxdDWYdKZhRMEj6x1dmdyoGPG6omQXKnnPE4241HC",
  "key30": "49GbgCuffrv7ypwowmNTgtYMLmi2gPfDRyZMHZas4AAVaXPEre8Fhwg4kYB5pQHBmjLXNQDZxnNbxWqwdeoPy9Ti",
  "key31": "5fY7KDWrso1hpPKTbvy1hADU9d2PgzrVNesfhY2RDuTBE6cZgNXAVufXhvHzigop9xam6js4k7CDXRvU8VBPa8oS",
  "key32": "2RsdfECv5f5vRfgGccjFYcLgTniAQfSVtbJw3E1mEt8sf6Hn9kHdzEXVfexQjpqKUfj9t7vWbbt3xaJmwyNyx9Dz",
  "key33": "26ZgLR43ZoqBRdX1NVuYPjKWwN2cUiSF78T8ZQKLVdh3xARjttp8v3ajiiQmyorN4dPN7fCcgqBXEZr1AxQjYj5W",
  "key34": "4vMmjMxtmcNVHsq24rxSWbeqjy2Qjq117uhUFM1TJ9Zhv7TibHMUKLr7b3Xuy5Y3W5DUGictLJoo5PeDQUQwan9X",
  "key35": "3gudvijv5jfLqQ84qNve8QZvEqN9DgcC6yMwWq9p8WFQ18QqFNqim6cvVCwuLVLrVcwtcDKtFFfyhxi5kRQPdUx3",
  "key36": "3rKiemb11udKWpTkdrsfWEMm5LMLDmrB6VGeGRTLLRqBWBfjUUu93GksJPWb1eSg2vaDR6fiG44bNNUiGcBWbECg",
  "key37": "41e9euNpJXTwYcSE4i1PLPsbEnLPtYuDf5jPXp5Tf4FFZLtyeGeCgEcG7tqtHH9YcgE2KScFn5njiyoScjTBMima",
  "key38": "4H5nZP1Dgf81Da9FvwKRdZMSPUJABUSdx6uS627GEuzPhJuBHrkEKt9bTPdQrqKQKLjWfszGzcTGwnikdBh4Rxek"
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
