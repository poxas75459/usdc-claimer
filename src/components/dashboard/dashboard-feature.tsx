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
    "2SMqS3aNibdgBP7eXqzqAsZtt4pa2Z4QYPRb3U7wZ98QTMmYmgLVQJPv1eLG7EdNBSo3h4T9tXu1mXDxdWjB8GuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZURRWxPM13KD8c31ajuQQKh6wQAXMozqExoCrD7HjCkqqdTph2LKtPSczbEC9LWnYocnhmfu6zxcips4tATGyri",
  "key1": "3ZSjFAFULzMgXjtur71sXCL8xJSH2ni3L6oEP7Wg6E3Q19rwBoH9BTT56uATvVzWeZu3iJb75FVDLxEe9mvYi4ir",
  "key2": "42s9EACrDps7KfzL5EmYudqGcmA7cLkNDKqyjeBV9jZ3pk83Y3wY7i3NSTet1sxCfuPCrYhMi6sXBN2bC3ymHNGa",
  "key3": "k6SwaWFxq36w2RW9pNq7HQYG84kZyCyoLNw51XnYYMH8aeF74jRmHvWzHi88wiG1nXnTZ6i1rz24ZLYL1c5dVTd",
  "key4": "4aQkoqQW5h9Ex2cTDvvMH2k6bMPLUYCE6iNGckjiYSZQezkTV3rubUiGkxGJ5nzYTCShq1SifLcQZte8BLH7QKbh",
  "key5": "5FmtpXbcf1jfyvSnULrqbHjSsirFgazyHtgVVamhXqp7p83UpAbL7LdVMi48A1dBLg8FK4B96ovjXFMBQkb8qbMm",
  "key6": "3EjwhYnNhUCfnQXtJrLeZN1i13txk9VK3ZvmdeVrAFV9E6tJH4BX9jrDF1Zd4jPvgnPk4tWeecBCBkM8uxyVT4P4",
  "key7": "56ajh1MsaXNVt4YfwWYRSz3LMMThBxwX4PBxZSiAnPtvw43PvKmwoBGFAuTePjSZ1nZFSvxPDY96vSEtqxAcqQ9q",
  "key8": "31geh1x7M1ykWwa1BjL34Rk3tZqEdzeSMGoDufWnQJgngxt2T2tfB1A9FSoXB2YQ2SfYVsSEVrZaGyGe38jvEJJC",
  "key9": "2dPyCoHoUff7q8XTdwhcHbqCRYXoS3fMnQDaDzNMqCApmrXDteNhnXrd2efxyymCjBHNVyaxY7jkX9hfQwoQYXsE",
  "key10": "2v62zcGCVMH8ks9PiUBAkiakex3hPNhgfybBTWJDWrkqCRPt1rUST2JosAnAqmd8GbkcSA1qUXczczNFTxe2SM6o",
  "key11": "3UuDzowCNhCXm15ouySzQniwB6mv1x4reRsUJFwckUmXJzkUBp3SzfXKVUNDtC9tU9Y5RBd8x3PRnrygGUHjDz99",
  "key12": "448PDGLAzbyG7UR87Tgb12Tsyt8oh5eXz2SKBs1cJvdB2zkWSFGpCM3HTsQyXgPYv884wHXyeEMKews5eg1R7Sko",
  "key13": "2qSRK5MfazRTRh19Qt69MUpyH4szjUrw53EdXKszuYUyKJfyRVjDLxTev3UpghFkvZG28MKrdBAbm73QmCBk31kL",
  "key14": "2niy4o4wXyWiSww1YE3YG9iwHSbvnXmoRoFPKKggQdqF7KzsueiRpvJS5CKQS8QgjmDB2w7bEPUwpCU2e8qWxSia",
  "key15": "4TJWX3W24bcrYjLYpXDYXhV5JfaxdWdRyD7eXYLGHRnweUswdqRHYFPvwzt6GwNx2YKyXfAcnwMLMV1JCWsxD4fp",
  "key16": "5yfXyrzu2GCmNeRLjLFdAgi14j3fb6czVq75GvvCUFhXZj3DZyshSzzpQBLuN71WN5BkeLPHooWTdbVeHreN2Kg4",
  "key17": "2W4G2qXbRQ34DAXpe1LHgWrfRjnwM4KzFBPCYLVFJJQY5DGXrGCADeoGrp9FbDXwh8eBCxSDeR3zSqJ71xucGPiM",
  "key18": "3vGchi8it81HCtLeLQxj8aDTrMdLEmm8vhoaWeX2iX1LpjXTsjiUcnAEWiJLWRuByboJfwssP6H8V7XKDXbZ3seE",
  "key19": "3wTRjPEJNqKVzesoX1mFSQDcXWM3aQX777PeAFAoakQ1s9VxfPXK7kbZiiG3YantbiGzQ3oCDFS3h3dquJFQgRRH",
  "key20": "4H2CSBSypLbWET69qcCarSQz2Kkgqj3aU4tNq3MkEfKX3iF8XV8m9eaSwRnyndjeqiRZSsCsHFJVoHxLfzxDCei9",
  "key21": "4daouNSn7KV9uBQ7vX6ZPaeHK6nBmq8JwdRVBKFiPiGwCyyUnCSSeHwQZYiWuEv2CtWVSmKjokCHk41JoE5MzKdQ",
  "key22": "3TLJPFYUyjmCw1diHwPYKaoRowB4c122pkWZyxJgdodw3ZnJpSsDLFgwChEGmE7M1e6tcc35WaTo6SfYqhYhY7om",
  "key23": "4uykKisq5cw4qhm7ENdtrmw49KM3wWa867rY1o8wCVrH36qVuBNXoFCw8Xwy4YWmk6bxjv4PkdaJu4gJFrUaLEzJ",
  "key24": "5h5Jwb2n5SSNCVddts3WrWX3muWWLv8NLkw42WCopErk9WvNKbeXmyP8GqJ9oQDvi4JHrPfuRxdw6TN3TReZvZUe",
  "key25": "4JNKkeL4DuhuqafvpWacHgKHybvUYeh981swoiDagHMFW5ANYQSn6Zx2xnHjah5tqaxh2odT5ySZap83yvDHZbzd",
  "key26": "Lu22VNMoUjbkF3n6rcKP96btLyjaNHy87PKtgCRySqddPwLd2poBSfnJSe1LQrg8ajEFdtN42egAe12GAxWd8ua",
  "key27": "4qsyXEvtZAp2kHHyoS4xGdVJkmH9y75M6yAChGvjFX4VRg8nmicwwPLWhtbH2FZfERqdcVpP1os8f2VAJGJZthhC",
  "key28": "4otcUpJ3C8jGynmQSCCJ5caeEkRp9APW6XZL3kt3x2Yt4aNgsNS3kPWGrC8yy8DXRzQ4TfXz1S8n3v8Z47q5gkcT",
  "key29": "5G9NXgJLzuXQ7q1CiAN626dubutSkrSmEepksLroSnjX7irU5yR7qCBT86up7W5qupE6gtQxk5BjJbZtw5xAGDeo",
  "key30": "2ksuSS4itRavqN73kT46CNqdr1tLLD9XLV7Rf8pHH7dYkt9vZdc67GMy1AJ5ZgpuTNqAVCC5S4qo1pdRDYoGLB3A",
  "key31": "L2zk4HVLYWbD587je1AdknboPg9w88bgYghdF7LiZUV2PvnJMug77CLUXTb6vsappwyekEzoU7U59K5o1kcqFhK",
  "key32": "3iNRpd1W6FPBypqsqv4MKGdRY5nFbc8H85hUkpWikYPqsVnGUaycLTTVhoYGzqqYWYQ49mDQs1Pc48wRaeAG6fbg",
  "key33": "4MDsxgSPngFEoUAdZAxwpFfjoNumon9rTU9PbXwdYRPMgavbu91CkeBSodfWMWU7BNfE7YzndUSQcLGMJMSG5yfp",
  "key34": "ZoxzTmYTndvGKKruVxhoPtxzH574V1HuranY1gRWrmzhwDTEv3M33XBmduNgFL387HEnebVZyLg6UYbnqewZYB7",
  "key35": "51DCLy6q424zgPawr8Xu9iRgGVgBwmfDW9Gapw3dqBjVEMW6YP9F4K4YxBpERrv1dZ3veN4UHWcW3FXFcuvSwybe"
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
