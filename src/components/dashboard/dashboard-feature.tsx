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
    "5tT2aWRKB5ECvr17owYn3vVgAS4HsJPq2V4iNYcD6yqYP7YJnS9s9GvBARCHYYVysFNNhLRmkhbA3f6EimCVkouM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dwk8x4HR2HDWg7kLVDdp4SEURDP5PUnncMeZMgem4qKLsEXD9kUHVngU3buz8jYcKc6qchohiqXqW6oc9fUGVu",
  "key1": "4AfGfZFfBYbKzhpVNVZLBVHS9iM6bRdfbR561Gc3VbHQAWXjR5zkMgZMsiB5EGxqgjEcP5t8JVHexjhQxNujXEFT",
  "key2": "49RAE3viRZGTQ5YMgXNhoi2cr3qaCBAftUFPD1ui4uRMoXLpCuUfSm1kktkux8prQuFkHEx5CvvbMuoCZFbSf3TA",
  "key3": "nfeDAR9wFwxM4EZhqdPnXGpL5FUDpQ9ju6amUa6qGnNRf1qeH9nDr7Ve9hZBHZMmWST7ERXVUXpSoBtkPahxgV5",
  "key4": "3z2NT8eRy27kfKSEwcMJfxvMZKLborfG62UrSsCo7nXMp3wuuJ9rM64gGLXp2hYFsTnvEBkQ2rG8SFtxBr5V8DQf",
  "key5": "3SwDDXeAEZyELjQm3Zw99PnYjm1SNAn4UDPT9VtrzMqgjymTUQFJqUhe85dukXDqXLvdQtJ2WRwDHPW1ujY52rPp",
  "key6": "2upT8cpKbcmWJbwxmZrjJ3xn5dKZeo7Do9hkzsnJZzvh4c377NheaY8EdXSdknKNT8aQm4mTzNXUSty9vDbh29ta",
  "key7": "21uw9UzAoevSDXHqtFPFwARZdtVKdk2cc1BKsSjkFMrWKTPhJYF7RWPjRjRweLQgCdrLAhwZBq8oKRE4Y8SbTGrW",
  "key8": "51Sft2zHPA1SF9VZSCwMt1yi3TpV1nLXk8bXvws63hT2GDHCvAvbsh2bmghX4SrMMZns85SDLBW9iRC94akK8gp1",
  "key9": "67eE33hkhssEPUjAzqeksuJiBWSsjFvcqnXxSEDzg7tLgzhbJRGcJrgqBSawnDu2HXZKHzH5mAzYxbCyJywZBBqX",
  "key10": "gKTJtprwSrd8vkHvbshUvzVirHkXa1orRo5pBYvqK3YwiNfD8aU4q22opf3SUaCwuEeZnbKXu7PyVtN7NAxyjpD",
  "key11": "3m2hxrYn139qt4aF9yKdcasH1Jk1sYu3Zexjr349jG5PBZjSTfKFd3LqYxvgfkE5MbHwopU1t2JFgi4oR6r4Vv2B",
  "key12": "2DxreWZHn9JMmDSQANR9HcJwsbHzV3hXxxvCPFDvqhTpzVARETdnF6vYooECKnWj9yRBhNNUTxzmniNMBL1RR7FS",
  "key13": "3JHMkHGu62cZ8oSG486LgNyEWhHHimurXGT5hjxrjrBSzCwQiKuBCVzmTXfw3MPrYXyz4NhReK1auyy3nV4N1gPB",
  "key14": "478dYekhzFzthpekS2jbkZvrV27hG412bzVVF28idMeEMoq6Cy7z8Ue3vzeCu5uLooyTBtqw4sb9TKPKcLzSQMj6",
  "key15": "5r9nTNTyFPSs2Xhi27PPHJ4GxQ3uXEUAp42ZSJhpcCTLCoADzd4cADz1va7Ftfr2NL8XSB55CHiYSLKgx2rjdrYU",
  "key16": "2jvJsJrUoeZypyu2jXqxFvd8XwrFwxfQtYCLpoMofr1soTQaViYaqXMMC4H3s9XmGq4K4tE3wu1noAAj1GntzUDL",
  "key17": "4raGiKb62AqPs33AB8rzbVdHGj3w1qRFn4gYCmjFbXYmwzDj8KWsnwzdZHjUezHpGpJSMM5GkD1nn2f5XLVmCPUh",
  "key18": "4RrCCY3w6iRVu48swFYbRtkvQAWpVz8K1m4hhhynHg4mzCsa8iT9vDL99e2zf2auq3zPdCjZ2o5shbc8ihRhXyP2",
  "key19": "5YQj9HHvNVHDaWxokqw7CdLZh6m2t68LAQKZc67BV3bLdRrCmzf7srK8eDmHpFGFeSxuHvt4k8NXhUHXKXMDY6f6",
  "key20": "4R9AF8S6uRB9cPJg1vWWWALKSeGE9zU2tLnMMKcqu9zwkgFbVoxWkEP9CbBnKsgQ4MJ5zPZhXmUzMui8h6cyfnxT",
  "key21": "3CzvkF1ZwPpmzLX5mdAq5QkdGMHvnS3d5sqwY6vx9CVs3KqNW4ULWnNW1x5FNiSfAZ9Cp6uVcmCFJuWFfKPXLZkE",
  "key22": "43ybVU1UahG7rn6fyDhiHx9g739q8NvS3MAfmRgDAeMPqpzj5sdaWmWLQb5bgsQGGy1pdvkeUQyVWD1Ne9zG4Moe",
  "key23": "DVv9oXvAdkU7NsESMw1AD5qHf2q1H1TacUXBGSgw7X8wyZaivfqNMvSTDMgawP7JXp2o2Kejnun3z1W8p2Gg1Nq",
  "key24": "peGHpZ1MLtbExmiCj8o1pHDnrteeALy5kqkhW9ne8Abc4B63VA1fBeEGD7sFYLeRCVa7gFedtaXvpoiSvaT3oVy",
  "key25": "5BVcTX2ujWrc54ttSbRGTVeAZAceBfx4Fqj4TKjrUaceTSuWJYicdGa8LF4UrrR3HaFD3ne6zhA25TPx3SVgu9nP",
  "key26": "4dcLWx6sSQqYU4wWqurivJYm2facMamfGDwahV3PFdRtdk1EVzgeygn5LZnuSDRAZYXkDHtJv853z4dT6pvBLJPf",
  "key27": "2L1q4BENS3MLGXwyhcrpUcUHkjwrgkMfTMXGvQjX4x885TXkX1nvLQ3EmgBXXbT4iyUMkBJVEoNybEVroBoaeJFz",
  "key28": "2mBWeZuEGUfVCrZoCHAJcGVTV1uft2dMU9qzjhyuqL7MdcDbyugyK8vyZLN5Gp9fw6CFazhChKMFd14BSpCdAnbP",
  "key29": "4C2xGA3jMrEgBCkdZgwSZPxsgPymGZUZMqHBcFsNqixWzhiHZNRoRr4Nt1dsGHDabD2P3Dq86yq664axcv8WfEMu",
  "key30": "aPdtFB5Bp96mScG6Tj1nniFJuDTpQZgBjdmi5wqYwkN3i9NgZv547VD3KgWSuAqCPvrR81RfTKssAJ1XWYpRa2u",
  "key31": "3VJmf8uQ3GDkVmuD4Qe3woawHZ7Eet5BCnbAnXgAE3DLVdyCK7yzFzHdkuzMp5RZuAU9WEgPQQUhz4XgBFMnnie8",
  "key32": "38AMKxVGGuouAydTQGcBs4XLSiVQQzhp5S2AroZAYMzVqwVh8gzSyBBw3DvmacGGLmHgveccVDCG1G7tAM22yXcH",
  "key33": "3b1S37AedkFqgihBQzhWfq6Jo4rYpNWdSwD8oN7gVz8T1vRzqE1FqiAcAZ1k1L6NYAd4o1P7VRgotyCv4cBojv2T"
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
