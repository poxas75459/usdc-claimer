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
    "5TxNMBMEFUFEb6sryq1BA5FapX6V2iv91jo1xsG8mofRBnFQDTSSQo4rM54NQVfkcvm3NXDrASpgNtSvDbkiVh6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbX7vhK3hL3GaBchVquYaZ6Vw7E62TpYbGH7fFvoHsCGHFWYe7FDaxWUX8dkixcSKoZFQnq9rAeEQ6mWhe7o2SD",
  "key1": "3zJ8ZNWk86BYC6VxpLMPWLkx63ePvs9uq3dsBWvFhgFZW5VkLpYHrw9x4p5F6d1Z7EWLboq8ZfwWZXUpSHmeJBfW",
  "key2": "4RmLwEAAnqoyMfLXLNaW3wrxf8sXRNHkddMQoAAJsbakNXvtiLSdnQhjRsQVBYAHmUCfXpttg7VPvvieCM5vUwad",
  "key3": "5WdeBYFoSK7ShxenSkXXdtqgSJRgPiSV6Ei8UQHpuKvTubr1rx7EYmJegwVL7m5gj6WksngujWNG9dBw8YV9UtQ5",
  "key4": "4xTrvTfB6Kvnn2Uh2NEmTGPb5hV7LmLLo3cac5p8PQCRn8XzGkF6bsDaZEZDoXBw6EAd374ka7ZNyjwzLHbKrkcc",
  "key5": "2aNuActBTDpPXS8SfLntni3PZQ78nc4yFaxXKxFrezDXHdcGPneheADpfCKPKUXg9QemsYJJNugpDS4uEim9RfoH",
  "key6": "55gAQifEUG6Yp2DTNJmC9k3LfzHPPiMZCG3ZC2uexvNmiqdb4s8tVFa4xjrNvVMXqSfDavCBSDq52g9GuEjAJyGQ",
  "key7": "2ow8SaRRZ68n6UV5vBEAUEEGQJhBC9WuuXp4itjYCNorHmQvqFSAvDqmMD4gjnkstWSHaecEYSLjmkvXeRVLx3m7",
  "key8": "2ogrMdEuBQ1i7wqFE5C43sTiQEGntpKYszuvWFhKkjtP2MjtX1VsNN8dhEDBCBERjGhm6nUSWvZJeFRTgz9m14yj",
  "key9": "5FkH455tqeMgQCCPR5yJ7cfP3jkfkBEp94t6xjSerP8qS3ma5SYJPcLK83ThUWkJJcyQRQ81pLxXnNnTnVxY3uiJ",
  "key10": "b8PqUUsRnbM9xrfsDERJJEXiPCSX5X1Dqg5nyFveHQYxSknxXFbf5F6CejsvohuTqpZzeuDitB9Tp85tQnDFCUA",
  "key11": "4WxXJV6F85Ly1kMb3eVPmq2whpGo2c3akiCSzuKCHoZazuAs1mVYJ5nFT5x1v3nb8b5PdDwRPppejhobzN1ZVgD8",
  "key12": "2gP1FnufjBYLov3Qo6Zh9GmLxuRW1jTKSMEPE3Fcn8URtFbWjvpKtMQN2TSNfFU2UNH4pFhzUzqVqrycm5UrQBMo",
  "key13": "L9a9yjQkTWgnbayot75cfyt5xrugjCuoQ9za1tkNTANgQA9GawuJt4HoZELCipLpiACp1BirdGbniCn5sUArUFY",
  "key14": "5TnAyxucpMXCeaKggoZHwSXzv8i2q5nGSkAo4zXkWdh3NWjGYWN1ZWRqgkG27mVQRXV8Xsr5HccXsfYDuF4yaZbQ",
  "key15": "5bCvDo8U4W7X4C4SzWGdzSAqU7y5YiJBqiQ81hg6wsp81SrbuC5UKP9g2ccBrptsdkcjjjRaEq6wtQ3ekQL4yqYm",
  "key16": "MgW35ouyFc1foF5VVgJkojN5WQUhmb5e7uY1KSFS6JsWa5fFWLBwHau3Ab9bufFpZoDBBTjJRF89pJamQ1G3eFq",
  "key17": "zCAMJhS9UKj2a7VnjBbn4qJPTjQtrYeq4oFhubhf2sa1TqEbNgggGT4FMkF6rLAyUwWAxXgmRgXa11og2id9yKR",
  "key18": "4bKecKzqodehnmUMdALiTZ3RHwJNPBySLKHLRwDEgZQfk7ePwZ5qfLeU5vgDyEUzpd4UrooRGn51zQxKFTciPPpo",
  "key19": "2SpCmor1LpLYBrGy2QE6Wr5hcac8A1Sky2nFsUUkvRYkmtXN4jxk425kvwxzVEb2nyVeWdqfgG8wHsHSKfYZWLCy",
  "key20": "brb3Ff6a96iMq8WDarrt5MB5cLNHYNGS6PLkLkgiYaeawhUeEnRjPLLmYAoXn5XAcStnWzrdpu5QVNHKSAkvQpy",
  "key21": "3tgx8Vg23RjS1YvmcqRgEa388tmyhPUgr12a8ipnJaNhJoeb4h9AHFqSA5JcgA9ws3bUAyyzGQFhgUhnjDVk7KmV",
  "key22": "4M5xCe5NXCqrVd38HWXydNki3v3EPAMsotLtGetAhDMVrGewfJCBPBEpGeWWrdEwMMmBydquX5cxw8d14uzC1CQx",
  "key23": "5192YiJZA5Fa8RPjFRTMLuj5icmHn3umyprt15eacPeHx9p2w71Kpng14YqpEqM8GDKsMzWBZMe8KW5T4peEe6PZ",
  "key24": "4BkCY2NQgxi9Ld34618YG3sYd3DhwTYXGFj9Y9xNcfqyLjXtbwbqdcDToD3qDt82u3xeTjatusGmxvTCjYkWwVv3",
  "key25": "4SEiWePvxo4QjAPucY4NY4w7RDbsVd1UNQi5H3uutPYNk4N64u9wWkSUXr7UbeanjAwmKDcV1juDfFpHRtxVdvHk",
  "key26": "5DtPVFkiV7Hzrx17afU4CMtAVJmRfnRSqZPej12VYDeKZpVAqfDo9P8av7oaVNFUNJmhAPWKeqUTgpLcmYZ9BNor",
  "key27": "3bkW3udDQhgUvD8YYXBnrsXnCJyFQKYXMSvvirUF4ktTgJ8RabBzGh3fgny7GjdPMR4HJjGfHBiF8cbaqnez1Yy2",
  "key28": "4vCDXDxWQ6s3neDN7wmpYFNCX3fEQodJWjPYWHDUXyMTkMjChhjHEGPwNpdQYVcqkLqZcKC3aaBjhMQjP5AMH1am",
  "key29": "4zHEdxeHX8aJ52M4aXgjb9xZqrHW5Fdq7DjYRoDpLg469qdZkvwsZhnZY7qcuQCBThParEbyPzdd7UUhydump4Ex",
  "key30": "5QbUjtRUCkmmsKq1uAKfNtiL1xJpTG2ge2eX2MVBkADYm6ma4cs8A8VXJP7D9x2522FqjRxFH5WwayUV3dEPVXLy",
  "key31": "fBrNbkWAbb8JHMS1sjJFXKBSiM2G8VhRVBz2ah5KLfvXqi1Rc95BfeEtvcch56j8mxqyVLy3614JkF9bBNj7ka5",
  "key32": "2yGzWFhMFKn2qxFjLuwVSYurKX4rDNjyBVocNZ3yJKQATahG1ticXdPuid7i6nNUksvYm38VXXiLpjeLHzsYtaLZ"
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
