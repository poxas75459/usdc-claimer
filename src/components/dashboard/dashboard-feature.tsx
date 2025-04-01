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
    "47i2TpDqRe73rX9axu9Vb8otyRpKmCeyJPccnQjx2r8CPLJjMEhnJGY9fZLNLUgFw8XjUJQWJ5Gu7yPirDZZnziT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7VZchtmcsVdvrdHtkGfagrgkMgDyXSnjZZnveK78aRVKJAWhUb9UX9K3fVmcpiy3JQKend8ffXbnjgQXfy3nsb",
  "key1": "5g3eZ5V9qcPpn6xt8n2a6cBRX1z3ao7sXnXvCXMit7hQUC86zY93arER8j8AiXhwhTo4qpqSj21TQmfpRgZswVgK",
  "key2": "2RxEUgonxNZtxBNH5zumeBVAHAdv8j9j1FZmkr8qxepmuSGipFfNttetjTTxw1zCoLTzxe1MEZisumE693sBp9tC",
  "key3": "59Xmqyz5nedgiaK4KwyCSNkTchfR4PBRDesHN1WFDNGJRjyqUWH12zaWdKeVomZCKYPBAo4vhXAYtfAJFuipWAxX",
  "key4": "2ihVrQAHA3fMpQLrFBKdiCnDdVSPqvAVo6XCfKhjSMciJECwr3f7YkCfSbXAGWvi7oD7Jt55HDE6wTU7W7pH6KAc",
  "key5": "5ngNzQU6KiL9Y38wBL5yWeAxL82b35HGmLfo8Cb7ST9FEUh3LZb46p6dujW3vhPHuLNtjYZLj92aDVY8vY4o9oD6",
  "key6": "2xK9ak7n6szUggHF8rMyp6kvqMKSMbXo4YhQf1adC1oboK9BLF8VFaLVnEbXxcqWi9viEZbGt7EnVCSwRFDPg3ZY",
  "key7": "KN75ufMxsgLu73oQ9Xj9ZDh9J3k19kFJVza2wdiaFymDBHAwFsDqq6NqQU6gd972y6neA8R2fgdYoBuUphGhb1G",
  "key8": "3JYcNBoET2dmLydVefNGtEP2VdwmAWqV1WcPdaTT8d8zRVFrsA9HsLvahMaBdPJiqD8tSRi8EegMU4Vk6yMNhozY",
  "key9": "4WUj7yYshf5SW6gaxoiiZf7mJNDhoEPnSPxb4EDTtzE4yfqSdnhNS6aqtFPuEmbwXzSo6cXuqPmQSFxuuAKJW69M",
  "key10": "EFD3nZ9CawN89tYuCpYFZNRr3GeRVKhXsTztJyLEPMVmeLJ15j7jN4D2djMEHH8WP9CyNTA1153jjPUZyXjfvsR",
  "key11": "5TcjfZDejKpwCheQRtKCstkE9VCKLkbrU9g4iJRdwG7yVPasxzXJpoXMZNaQTqW2pqV3VzS1GB13GVtdMJzauD8U",
  "key12": "5Es1abb8Rj2FAKcXU29V36kAmNUASfTWqy8NMTYrHYTeeZpcc4voaVE7xSdRkeZXRLnatQixwaRZSogjmHXHr8LU",
  "key13": "2Pu1C3MzztrJShMYpK4Qi4k2Ju15TcqfKt5QP48RJYEe2YnMiiNY3FDF9on1W9eXyZpRogZWwCiNDUgdnJfAsUk6",
  "key14": "3pQsNUyiuC6g8oS53r9Q9bGH7wE7S3aWnVTfXgFH5EHSPSiXVTp5w7iuVNCgZL5NyTWDSdysiazSVMsjzNLA2UZo",
  "key15": "VyXUZgzBK3mZmWU6Ld3Exc96kr36JzQRUNMXhw6EGFtTnmbFkMLH5BuxmhinSnTJQ4nh3KDwPizNS5RfQ2hZLDS",
  "key16": "3EowDMJsxKw9bhWhYeWiR7wD5uzbsueRs6tyZubnuP13T6VVcequubKKijvf1i4fC7jjYeUdnYGef8MiuqqJ5QK",
  "key17": "4AaoAeYrk6YuFrSffYFAXqTD5SiCNf9VAoCVYm52BzLsuPcEJnufAmozh7gzfhhWDEiddPc9Wxw6iRznzDqQg73T",
  "key18": "5mEz62ZsshM94Qsybb6Wywecvs7Mp7XCemYNWcAmrA2uCDwdNKaymZCfLVT2hwx21Cz8kbiChmtQpnn3LBkdC5mS",
  "key19": "mWmw5E6eUCLAptVmzRhdBypSAQXkhXai1ofsc98baDtphJsWpJNAQKu9dJad9T9wGTMwqKwSHWKFFBkhbDipFFR",
  "key20": "33RjeSwJ7u3iE1KfvC3ADXHfvqda39yCMoNX9FDo3QpYJVnpxBq5r5nJMjA9oMmoidUQy5DRxAcN2yufw4G5WJ4R",
  "key21": "3tLajCVDVrwF2QFGmiUuBWWCjTtj8RPAW6E3g3buoXYeXiqK2xwPVsDRagrQk3DA34znLoy5ajLy21e3S9Aj5zSn",
  "key22": "43GCAuzFYYGzghMBgqTQcQ7qHcQHXa6y8TG77NMaFz1iqMf8yHZB86ai3yLVoh61kiWs12a1ih8n1KgGoXfeThBm",
  "key23": "2nm9gBKfSaMd3hntCn165xbRr3fBTB5yunstcbs4AJyX6z3kFBRG5XV95QRsDjiMQVc6uT3jif9kstsMcCxvQ5oB",
  "key24": "5SdfLXU9JC8Gi8V4rMFJCVgVVkxfB3j2MXectfAY2Lu5mkgfsU596DziKyCJ2xt3xXB6BYBDcSN4QfDBf7h5UGze",
  "key25": "4eemrus5HR6ikVzWvCS5jZoYcepzVxvAaf5qrb91U8FzQi5tPBVfxEgMk2J718EiSuVWGZd3T3ZJc3GeV8w6Vn7D",
  "key26": "2X3bqHWvnaXvNcD1wMt8kfpi86irKtkBrV66rx9LeAMCwe5ueCUyFPToaWDycnRvN6rPgY4xiNYgk1HBdpnHRgaw",
  "key27": "5VstBtp5DEhnynuSGsyVM2hcKQsgMData1fjgrGSTTQffm8WBXwZHpZmyXsWF7CYwD4q29Vxa2XyvWRTVjwvBYQC",
  "key28": "rr5x944EEsNgMT4DqVkJQs7fZc4ojoGmcjyQ3Lp9pAHJJoXQz5DjAgUtjFqdvm9VLJpmQhb5BLki5j2a3PRKhsY",
  "key29": "4DRmzFvKFgVPHewUuGrzLfgzYSVkme5fsNtgCxg5YB2W133iEStsVwaMr6eQFXj4tmiBRRgexj1eMn2P4teNQkNm",
  "key30": "2EP6MyiovzVkwNxQSxSrE9Tx6DCsA9ALyLDYpPW4BVjse5VQkcCgPssra2tGURBy6EyMg7n4PozoJvbLALfo9Y5H",
  "key31": "3tXZL42mdYezrj1rVoyQ1tTnmFSuKbrFBsjzox4BcF3dDXbVkCdKkk5NiycwX1Zjp1UrXJWSnv8zhhpQCkmEgbth",
  "key32": "pafmvkdvgiotiZvvm1CLJaZo3p8CkDsUsj7xSazEr7DHSPBxKGHr8rgwyMFFYUUA6gDjgBUVptPYTLXqgLQ4aoL",
  "key33": "5Ce4BTW3opbmNYmiCSKDjDKTWB2gdytWXCZ9mRXRKJMD9BYuqvdK9Gy4fW5qGVBkA9UBzy5cDs9j9cgYfD8omTri",
  "key34": "5d6k63XrsAUNkN3pTYoKkwEznaU3QA8DaEXqMGi8CkzML5p5Eo5bHZtq32pCsbsqNujnmbQ6BGdNU8JSpRB1ZQN",
  "key35": "65PMLf9q1myUyxttVTuKhg6Be36ULovExHRkGGvFLWcpotSBw2HQa1FBRHiL7gzYaed82VWChJ8nAo42T3AQVagb",
  "key36": "3EBR2kfyKjyyP5EwBDTkmKhL3FMtYWeZcq8EtXiERsC8fHrTCm5XwZ5D3JKDj96cei36RwfRap5oJWkAUYhpvSJg",
  "key37": "i5QXCuoRKMRycGS1BCPP8JnwdJtHh4gesu8ZBtAy8977fQgN1G3VXgyfkVzzg2uJHeyyU2HNuWcmw2EfGJzmWKg",
  "key38": "4Pw3xTthtnYxxpZFnagaB4SDC5ZVhBus3c6aZtjbAWXKo6G5HThQnGzMr5NjkYtJDrSTdvvQieL4QDhpEAZJFkxY",
  "key39": "2Abd3X86qdMH3Q1KA8AhZ6jXGr36fN5fFdSJZdUjdJJ5LRSn8FZk35nnmVXKuYhUcrTKyuZSy9AKzky1bPsfnb9P",
  "key40": "5UGWH4w98C2R1Gmv4xgiXt97ni6pPoWjE8Gfor142sfiaJ1rf9gKHtpCeD1t1TdLrPZkKP9zQXCj5u2Td3MaZWNZ",
  "key41": "4sqGxGxqq4tZAbHEkJ8U2xPYCoRRwoz5a88Vtcu4xaU1gqWAosMnzijubhGTziHFbb5r2CpXnHDzYFcxpuPuPzeF",
  "key42": "yawbGg5p6GezM8o2vCECKYLEHp8B92oYJ9ddGGr9KR4vYiQRsu2UFLRQbCpKb3ZBSiXFBPK8wCGZYnkfPVEMMUB",
  "key43": "5XkgR2xFfjjstv7TvFaQZrQEZ22kpDcZDj7pFdWZLYZmeYA8xzaLfYTo5AMsMVTBP3YeiMtP5gX9hKgkGvGw2Zdw",
  "key44": "39kfkvyjJVUC575ExAWQvwcrGdgocXAXJMKi7mLP54GBiQyaoZM7RU2uuGPKBFphqDRbLaKcDP46tAgvqd1R4eEv",
  "key45": "HiJmkKPRp5YpkoHEXYdKQ84D4MLjB5bz293JcvLkgL8HkUJZH7eqim5VGQ62a64qp4tUcK8wG34vgJWo6nHDcNV",
  "key46": "cz8kfKyeTDq4PW5jR7LsCksAwgJDPXyogcJPb4sAScSdh5pdHzHEnvZ5XrbJKrTjQm9zQ7rUnCWcaaUZ7JhKJRL",
  "key47": "3dmuYR29f2f4cjzYAcs8XaSwxXvGgHwbRTgmBSuxZghDm1LzFo5KW1HgH3wASVefPnEk45zgfNsvRSDgXM8mEAG3",
  "key48": "tTCw8jGZc22HEnSaDuGw2tUpgJUtbjDCiyCMMZmxUcAfLw6DFaCdiVLwdThavPMGqAv27VvKynh4BRZjPg8uunV"
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
