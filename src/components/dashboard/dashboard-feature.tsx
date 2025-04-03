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
    "5LJ9UtCNdcLrogH1jnQAaBVvo4NM9GESnK5AiVBFnRgPcyGBvpHZfBQEYJHi2VZTiizBHSmH6mE1riK2RuFwCuSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpFBsdkV4NUmdGuYmmfpp8mL2FtQf6iK6mbgtxrjjWJ6YqTPZcCUzrqudUWZ8Jtt1vapt9GJskDgQe7ze4kRegy",
  "key1": "hhAukqVVRr6w9CAvq7iYZfzpqZPWghHmpGTVpNckhyV5oPDgce7gzPfW9Jq7hBiDuyiX42kuooWXKPhu2Tr1eh2",
  "key2": "4aQqUEQLVPiKDdspCzJL2qvLTvbGtcSyk6vXCvMkq5drWq5Qt4TzUDbXn13GviaDUiwW7fHQXMYvXbYhCKteSza2",
  "key3": "4PNCrMrERu6oZoKLMXMcMH3NhYKWTkzQUGXmxA4waM4kh41nPDzHZZfEga6WWZuFvFbA7wt5pq6apNYQDLJivbqu",
  "key4": "2emCUmwcSqmK8rFWQRHtmgTd2hjhnE9itCBe3Vxq9oCNjpjDSXcvbhZxVPTihWmCZ6JurwBX6dtpemoVymSVRX8p",
  "key5": "9mo1oaLiaxz1WawvrCFU7GqrxT9MZb2i4xBC6iJt1L9SKapsxQgwgyymcKvkxBhHx3JiapoeWbbrSVDgNPeC78E",
  "key6": "3oiNqnPhzJH8CW1Yu6DSjhxR7Ek2J4rsTcq2y7trSPE7cUmPPjJ4EP7XpAisKwGMMZVWcfq1xgQyrdp8vWppGdsh",
  "key7": "5J2A2iZKX8qzUBusVMR2XkZRPTSjgdXzeRDMgdPEG2CYgy368wPNdTZ4Gqd1HroztPah3TfkwXeadVJHPtY958G5",
  "key8": "57tinBJFCGyZTPhfqV1H714noNabjTBzPUau4KmDamsfkqeVJF7Dv7HuqszsvxHhzyhoniD8ppopqoQbHo68w2xK",
  "key9": "MEtihWdKFxrLfBVfqhofkZTiAB4fJZmYszEdPj3QkC8D6NsSTkNKw5AsZsQv5FjkGwuesDkD3zEpT9DCg48oKh4",
  "key10": "2oduWqY2S3grj4QLmEs7KwPM6oPHZdpm6MyRnDMNyTQFWtMbxm64Fdh9FXLpexgphdM4U7eyvtNKmMBGKWfBLYQR",
  "key11": "5Qy5qNM46sPu3a6F8zoWNsC7byVBxqc6AJ8MzAuJDA438JL8iotgFNKZ297En56CT9FJg5ukVw3LvLNGMWAo5sHD",
  "key12": "4HM3RXNT7DdTaQ729VfYCVPTauTq1wYhNZrUUrJ9CBk7bBFRGBkn7JRty5u5M3X6itDsCFqjrmGtAS3d5AuHK2bj",
  "key13": "2bhQEefYZtgkH7FuHMQKcrXMo8PEn9Z2gUCV5v2bRDk87hB5tTodg52uxSV3Hhg4YXhu1wzHcMV1zeWfFqECjbJG",
  "key14": "585bR3JopTcsZ2BzDdQYSdks8fZuKm8m32JFwfbyeqCGJZrW4dmpJxaryZ4GgFMU2a5hb16xUgQ1cbRB98AoYSPZ",
  "key15": "4fzHyVRcWQXpL7CmEXYpLZyuAkN88kvfK2M5bJT7rgrSMgDqHn5c8DrJTE1RA8QzcGkmNm8jnb6gaZZsqLtqzpdR",
  "key16": "5pdppdgv3YvSRhvL8wEALGpntS6irqMYVb4dfTS77o1UaZQ7EUnzGuvd7trXoKS74sbKMuza4x5F2DhPrg2n2AaR",
  "key17": "3ZXBrCnoHDHdHxT3WwNLboGnvRLTD1SMkuzbsWCdJW1nqZKienLYa97EZXQT67JaqTTs6i9J7oXnQCqF5gdfrbye",
  "key18": "2SgUf8LUmFFGRZ1FjAhn1P7L5vNzV1AJgP8NP6miYFjiLrykroDNGdG1ETMpBgPeBL2iTPYE6wAhh2RxNagUhJin",
  "key19": "3hVnxLJfULd9s6RZvZYCPs4XB3F1So4hBNMKd9rGyYkjeJU3uMcLE4Bpvn4C2EZn3dfoJVhdLCSaJGWKJnrbjDPA",
  "key20": "Luy9sbd1Ghr19bjgQT6tvgNjXWLHn2mRMCp7x9cmb2CxpuiY2GVM7SLC6SfzN2WFmrXVhbGx39M5wvJHnJSraCk",
  "key21": "2ccsePsg6hNCv1dxiaBoFycdypYd3FX7MvCCcjU17iKoUswANbbhow3e7fcR2xnFgR8M2RNkz7mthPjDtQ1b84wd",
  "key22": "52WMSrDT9Ls5oay2wU4iYyTf5G7ANB6738ckEzD38hvxz7cACoZ6hfTfLrwq3hQxTH3QS6xD1myUmT7dtWgJWzSp",
  "key23": "L7vfMwsrX9PXurDDCLzP9PCCoQUUaeAYpiF8Ae4Mq24RVihXPQQriY2vKuMHLUDZphcGEBsPbMsWo1ZKoMYVdVz",
  "key24": "5Ydhw2Vz9pb2hHQFwmjsuhXX1JGJvLRCYcTPUsYbVosbFRdBHQzosfkB9CyCbidjzNry9zzVPGwuB8dxjLPKQN6a",
  "key25": "5WnmfXXXGdEQn4rZ2UcFfnvZbK93sVLNkc6CtYhpaxuKNH7ZLAvyimQkUifsjQpADD5C46aRnBwcezGijaTQhamR",
  "key26": "2kxV28UBTX1L4yiZPx1RqnbixApUtSYHTeAuYPWz9CmXST8z7aj789MJwyRSJvVsYtQ9usXAk7rncLosQnE9k78Z",
  "key27": "2ctfhzQPc6LNYP6Gt7WvBFi98fHnW45sKm1EwLXZQfgpRcr1dB9pdEKEuu7h5en8REsTCFZRrbVg4jHjzwWn5Yrt",
  "key28": "5KCrcHe3RGGVw9MZhAWPLpABeLrpbFiuZ77gi5tyQCWkdEoceZFpZkj5EtK4ZkQicwQx8K5Qyw6pxwqSnd9ZDsky",
  "key29": "58LostdA5Azsva6XDpVQRd1XqZF3FpL9whCjCcehWUUZa6LmNeJQLRefWAiwAZ5qjCBa25PLCNAdKu1WLBYneakY"
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
