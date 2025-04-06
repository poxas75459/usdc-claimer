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
    "4jo9XKVjV7iFYEwHd8E4RXCuyPzqe5HmqwVsez25cLQLoL3E2KaDhWhdNjHZ1vDdtPF8gTvTBgrVvv3XqhxsRDE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F71DjNntbe3hQBUc1XBKk8UksL2cd66YK23GxAKx2EV3nwxzsmvnYmbWTKjHdBmFWcASa7ayHVdjDgwJXEm4Erb",
  "key1": "2sXkkiBg5Bvnuz6HptsDKBECy5BR2GUj4TtDDYG7VNnHN7P8bTPNMEG3X5jM3VtbNQmTPhkQR5qus3dGHzAXaPoD",
  "key2": "64YmRNViK7H7bvtRf73EinBYdJ6tXnzyKRY6ykJBrrXMedHxtEkrtDnxg2xmuLdNPzjZq3Gr7fuwqu1eiaMHp3hU",
  "key3": "3wdmqggN8PJdjVhNbtuTobZdPchK7niENjJwxqpBwnsGGK16vKmKe3at1HiDmnm6veSFwsF9cYiYoTXkAFirPqEo",
  "key4": "2vWgXnnQQTVrbPcSfGmiWZMQ8FLnxY1HC9g6Cs1ic2LHk5sSrAwgVnMXbwTi1jsFC3eKhqNwBJbj8zrwZ9pAQ8v8",
  "key5": "3FMWEfuNX1W5pA44dyb2PQfHcP3vmae4DDHEB2mgRd6GehKWWUY511a7YLY3jLYypz2u3x6QVmJ2FpNGmzVscLWD",
  "key6": "tCgeRdDu4ukcvXLyrdYKouRKAUqw6YrtCecJFw14nR2zY67QJjMKxx6HKapqrS9afhGPFG4V9B8AkxubjcCdrPP",
  "key7": "ShL1G8AknseY4Ro63pFMi4RhU38zfU6izpmwwDT8nQ8jrENeEV2SmyP5pv3JBJuKZAy6E61ztEBq5fFqeG7EL2u",
  "key8": "3SwpLwoQhgZtzi9kjk7zNiBfuL1pwoMQctPmDAHf8hdBoJbGYhL7ptUxzakdzaTMhmFTkwNsUewGZVt2q2H1a5ck",
  "key9": "5rQaQ8NTqwoCjJost3XHpM3pQMFRmXSQF7qnESL9VE6zj5PekHpf2KWuLFk1mMxMxfY5ScZNc1GRpLWGqbWFVHSW",
  "key10": "4BQQrEZH7vSBdJAin7DQsgL9gn9eZ6PY3d9QzvEGFHVtCh7tLfCszM5et5Q7uW1mXXHjox9ZTug49Ajds3nDT7wk",
  "key11": "56QLTD2p6gFVScvNTNt3iwbgCn7ZHeLzjeGNVSnwiZNHG1fZ28Lf3XqHtNnYbkYAY3e9NcQdeR3Uvrh6PKHbpUUX",
  "key12": "5sUmKD5a21TDn78JV2exD5kReShd8Ha3EhsfSFXEtjuc6mXarMeXixCsUbhMs3mtpnXZHK7HdoQtDojuR4c2C6yS",
  "key13": "3uR72Rfxrp59dcUNSogkRmdy7vP5QGJuc9xbg8goC8kZLMC2mpSfXoF5qvtaskmsd4pSaVtKfHcmU1q7hwQWQFkn",
  "key14": "2k6uu3DCTwivsffjCKupqrwqLtv1KUxvrr8F9rgm8dRjbBhBzUnWtdrvn2T4mP5C6FE5SqkgVeDfAtm2JhHP9PW7",
  "key15": "24eUSFjEGURcNTkT8vEAr4bzZAdTbqbar676eh8MWySwSSTtQsLXCJMYaJG3WUFjQ2VBaQ4ZGsVE6BJ8PX4qTcEF",
  "key16": "N2wrcsTFYJkbooHrt2Sj194D1XtbQELU73Xt1pBQUCf7gzHyKvFTz1PvfQTo1YZLzKLyb5LoTaiWJxdycL9gRsU",
  "key17": "nNnkAxCB4b78tfhhVT6en87WQYNST5foNYyKNx6bfWH7pD9vuhkbMXgJ4vk2sKr8RfBtDbwufEZLrcofNEqFyUY",
  "key18": "4U6aeA8D1v8zL7Xxjrut29oF7Smmj2AWLw1KXKSqJBoTHaasen9TbcDLmuNNPNoEDhYfi6PjNG8fLkV5hhizuxqS",
  "key19": "3xVxsKzehJ1Nm2BsW3f4jzCa4HheXRBc4NAt8KqeJYPBQ24EJSvFbFJjW5AcP3pBiMKmtRyPUALvnqsbvfjKSf9v",
  "key20": "5kmyt5xUK77fxA7gQCRz2sUXb98Z8r2zC9EfzgKjg1MQ9WhiFLof7P39yRLnEx6kULVBLGKWxGL8MBUduzMkQG4H",
  "key21": "CdmZuNFxLBQyxEkjA2TFt5VhjoytYrwVEgXTW7yf4y6t5m963sBSXRNdmYmY2NfAUPPpideKnWAyi3JydUYcFLT",
  "key22": "2nnE3uG7eT6aTAm6e23yj9pYVNdZBn7buEyAMbUF4dD5HTE6bhJme8gQQhRN4mtyWhhiJR3Wq9P2ku6jaxjGTXT3",
  "key23": "5HKdVy1zrJmYJ3zB5QCzqKEvbUaBwo6w93YeSNeryMSW2mHey3VFMMydoH6nrGuXHHpMtcov7w5ShkCDJGHDpwJ6",
  "key24": "2kpKrwoU322ZDstLhQfFYRiGw7fxcmrNfQA1RKEz3e95v5RfgQQ5W4xUsukrp6B4tQkUUH5pYAsmxXRYpXKKG5BT",
  "key25": "53oRTyGbkrU4E7JTb6fHtDHt9SAGcSoiDH2yLMSxsXrQHaHxTtz83PMuwv9Xhui5mawHBg96pGctTjyv5d2qQysD",
  "key26": "5nAUed8VKrAP8N4c2NdEyxtqmajftLoZeQANaeP8j12b1nWo5JBqDTR9DSrb4L1abhGqTRpgytyDezNV79bT81LZ",
  "key27": "5GiP1GoZdXP2uF7fGB5ZVH9YL5nWtifVTjsrfNRKDuTke8Gb6vLNs4dBRfSK2S76HRVLjiEkwttB92zjGEMeW4GS",
  "key28": "JciP7aEWBZd2TJ3vyJddhiAnJgagaCjFRFkfZM1bGa3tTNoSC14RNTj9y4EWe8TULzB3ge9xtnCFvayEwKYiXxh",
  "key29": "2AzL8Sbi4DPtx4pnsSqJz81xugD8xnaJWEzyRTf84mF6d7uFZfUcyki6XKbHMSGS7n9uoMhxvq6XJCGzYwuyAGzw",
  "key30": "2KJQEfcsP8t73HjFKT4ERjwySWwEY2vB36gdfbUafRMCngzoP7T7d63na4aE4k6KmQbCxxnfiDDJbQ4SySPTQQBr",
  "key31": "2Zah4KUW51mxSqE6xkZGDHruS3wAZNUDr7cxaQi6eGAwRA7hH8Z7e2LhwfV48nbnkLheZEpL3Tp9BSFR6WtMLkfZ",
  "key32": "2BsQQdxnTj8uekKJV55APfRRtx8rNv5KVu6XWbhph4c2R9zHS5Cviw5kFarhRqHqF9pLy3L4HryaUpEhiEWTB4uS",
  "key33": "2AHsQP43wSTf13R2P6RdfewJ1Myemd4LbQQ2skQ4pM93Rzc7xc2eyJVg5fAYNYuYBYE2HzAmhjQgUFurP6njeh1y",
  "key34": "5Rmf5xbw9xCyJ4UbBPuNsY3Qqe1RxMW3pPv272xriTK6C33TeXd6d16zvSU9dxdGXVo5pHx66CQihZ1ZwPBPg7Ta",
  "key35": "5r1xZjjJB9zUUXhdKcirpCKMsRtwXfxvegRr3Nq8MJg9JVgn8Fvn3tujjfSoubFM9NEhJsC27tFWWZQ3hLJEyzDX",
  "key36": "64pLXuGqRjSWy1Je8g6itd459zGhUg6poRGa5cE2JmMCWtyxmhmgbtF3enaVULReCNG7eMDXHecqVteVtF8BXG9W",
  "key37": "2zWsuXuNEdYXRG8cMcBmmBCEFoXNefUEhbwGN459E5Sk31SpvnPyqKoxqaBqWQTegLUWWahid8fMuLoZ62mhCxps"
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
