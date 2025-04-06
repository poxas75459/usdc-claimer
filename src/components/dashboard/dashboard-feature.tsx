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
    "2MLmS6uChd2dcP2T2QyzV37mdUhzU4e596STd9N7pogswAkPR69QKSxdz3TQhK2jzPy1Dc4b1xGSQ4f6jtykKtUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YjuzhBGGYXpCfV9UymDrsyNFQL4eh8PpPdMgBo7q5bSu5PhBnD587mwyj4oM1dRoixDS6HgJG2xCfsoNvyhJtsZ",
  "key1": "2c76NevzsRGEk8nMJG8UNRWSUfaNCDWcDL4MQfgsRrD3ZR9ixibsvDPV7P1UG68dP3rXYY1qfg35AFtbzNSWVA6f",
  "key2": "aXmJWzgGymtJmqNiUB2hhxW8uRY6pkB2jCUnVVuj1K3UDXn3JHx1r3SPTZPg7tnSSStrD149U6vxjUC3JQTVQnM",
  "key3": "62SUgWqZDViTwFf5h1gjBJEqcKzu5zm3mCiBJ5yf913mvhgz7dDDmyKXiHVBHPQ2DjdjFjdSeAZX2NrY47dnHL9g",
  "key4": "5jf9mALXSEEuawQcwqv6KA8phq5Dup1UTcDiMErmJLBB9S34TZ3zvw5USskswK2KfpHCPi8MsrHMiu6Zu96X2NE1",
  "key5": "8u9K4TnhbWZvGyLzzsBqsBAoxGFtwkJRELFhWUb5ExwVnrj1QtD8d7Jw1tQixCuwyFCsL4dLtTzJGhbiCuN4187",
  "key6": "5i35PkE5eMgFZB5SPmsspvLDBdDy9uKQyiLenvNBUg5Z5R7a6iU89BHgfFGXzPmUpD39CWG9gR3CAQF3hBMt6g7T",
  "key7": "wwWRuuiJX8tkSHdAXhqWGUGNbFkwgf61QiZJ8k8nvohoLxyo395VfNFRE6cgzKDYWi4tHZAqufKRfDMK5678HjJ",
  "key8": "4y4vhKgkizrHXuGEx4vHJ4a7fbAQWXhVuSMBq1FztwGZNv3JvomMe69BgkT6oH4rW5CdSrry6d7wmsrBAmUnY5ai",
  "key9": "4WFPtmjf3gx8jyKdABF2DcdGBM3ZfLnt6eJrWXHzKrb6UZbRZGNPAQKNWmcTCWYDySh7Ye54U8gzSak4DPUmU2Co",
  "key10": "4oKJM7ivKG6QA6whrXiC3Wxur6hDMrNxuGB3kJ27KkCMcYYbgwdTmYkZpuCrBEdXdT4qYNf16KkZrXLNmgu1tNMh",
  "key11": "37mAAS7zz2i4Z8jT7oocAvY4sQjtjPhRJwKuVKj1N1Zn4p27iYCLbimDYkHqesF1QN148HbgSaLoqiXsHUwvor9A",
  "key12": "3yNsfWJsXQ7M8g6XUkRcoNUvijvxavQwCeHpma9UytHY2ceBRGNjPezDtqBZ65UwdC66piMzpu6etV88YkUXc9hN",
  "key13": "5DUPwuaSFaURJKHboQbVRSKUtKNzLMPxY8HGWUFLgkfwpV6xT7CuhJMU51LZVhJ1tmnVdQhqsfEFC3eaZZEKytAn",
  "key14": "4Bb1ypFLFrk4KwNg3ZWiDtBJYtcbsRCffgtqHnkCKb2fLtkci26ViCNoURjqvtnE5JsUzjU3no3PXmZLG94FiAPg",
  "key15": "53vUM7bZzHoLZpbHWqnkBPm24RUSoCFr3644m1WgxJBWMSNtp4Hv4eRphGrHFwCX3LruRHs9kLUThzFzfXN4fW5T",
  "key16": "2hfUqu4Uay1RprYqzXG888yJX3e127LEZAw8bb1u4wDJhA3nuVWcH4aRuohDmj4ML6tmJEFjkCjsFGzZeGoaqeeT",
  "key17": "N2LGREMpqkGbcDWaERbdDFnSmUV9A835muTtrnKWubXwVtDnKDBZsZcRvLywyoxKF1xiikU2e6mJxtmuim6fJBh",
  "key18": "5hURVsPKjDFUTCDBeUYqvxJi35m1eMVeH4rAmUgn17tHbaUfMv6fZFDQtU2aa1Co6jG7KHUb4ePiFsu4yxYbmZ4Q",
  "key19": "4zv8DonrMr3ZzPuWt7e9ntmjs4nZvsxYSb2zsomb2ZjRPNa9Si15hMmr9ZSZ42HnYe7SwPUSrC1SPTYrvWdySstZ",
  "key20": "21RY8JMEUEcXy9yGPm26VfhmMc5ZLfYuFzbgxNurXSw4nRHiC43ULcJkBaAAHviHRzsiAVhmzqUxm6bcBUibxCL8",
  "key21": "59Rq3KDuSbtDiJQTdW4Cwe1HNht8UpvS5mammcJ413om5BCAMKkkrWuL6khGvRpDYsFLUqmfgzetnXTo9Gg3sW1B",
  "key22": "53UUjKjNqUvaXh7b31VRts2R9ygns9LGFevBNydfCoLm5QqWpDD8ht7i7fhbsdTaH9w3hhp58kxYQUYzZhxMMsxp",
  "key23": "59pvza9j3VVuXjZzsw5qMrhv5tRMGLw49ZDcpk4k3LTHH8scRYKXsRhZBWcwX9TnBww7SqoC1fQuFK9UpbCWVySU",
  "key24": "fHbo5px63m4wQp7FuxnJTY6YaheAJLT69YjbjYZKSVSgUXc75ciUENufdSCBGxKmxk9iweiLgE3LRxE75froHvg",
  "key25": "2PQKy1Q7GK4ARsLCiTmFwPJqP5ovX9jAjQaH2o8uoNQEpS1YU2WcyJxAJ1sR2M1tPpQLzVRCYJo9pFnqHjPBb5tR",
  "key26": "4ouH7WxYDZrcTSxvWzUXzvCUwnVEfhtJCCkpUZbYyHgFEtEuukAYFBHvSMDzxqVHXgvc9ArjVnD36dfDNHZ7LfAZ",
  "key27": "5zvVvHm9nQEeZkqPRPJMTeAgTjsj93k1mzXymMHqnyGDHWKpeUxKB8J5Xe4ifWmsLxP32eEihKmugRr65RpHVWzy",
  "key28": "SCUCSiJUy95unRRSqXaSXuYAkRT4djCNpE5fDS3cLe9iNP4hizZ7ECuGBPUUexwTknC8ovyjd93YFm7vQ3hwUTx",
  "key29": "67PQaA1N84tBbA9xUdm2dvoE1igHoxHBGTjdEARReifNzAxULUs47vMBK2BJ18Qba5shDteucx2ULAXqLF81c1H2",
  "key30": "4vJR2DC6ezwT3B4stNkmxbVF4is9oKA3G3VSb4yjy3iVY7pMg67qNtA1gVniyP7tz1o62mwx842yLqsLW5mams5P",
  "key31": "vWCW4Crwu2mh4vk5dXGHwg1eZZEa3hhJoj8uRa3xB7r5zjC4sKwhqKt2SpZL5XGqQTf8VyKBJo2Z3aBxUcmNDr2",
  "key32": "5Qtj9yfzbxgkrXEMUKEzx4mybuE1ytuWpdk3pUKRe6tmcfKwHzersu7eSxdBeBpRL2qftfbzR54iph7yE9JTx5KJ",
  "key33": "5dv4C9AWT9ZzGSChP9M8KhPmpFoMGXFkkF1cQApbdGSk7Rt9YTXz9UJZjE86SSvyvwgTfYYJgaWPtbbMJC1Qn8Dt",
  "key34": "5WBnJfDJ83BUfM6qKcfPaHLwV7qXXhcy8RGzUvyhBhQuU2zjFsYdCW9BA3y1F78SvnxKAbEDbvEx1hMeEPixXN9Q",
  "key35": "2JxQEh8uJddddWvXGZUFPbqkfGtkZGbztZiDjz9cAhgkBKhFEfTTa1JCFhjTXHnDaQiHDCH4Fu7Fo1TkNTL7yQJs",
  "key36": "5Xfm3aEKpLeUhkEziE91o87Kzrk8kedexncZDPMyHKsSGhZRL4v3KnhEmp6Cbd22Nb2o3Ho9iNVQgh32zU3A8G2R",
  "key37": "3gvynSjPcPKmFkFb3jd51B7iCdvWfbj3FF35yv7bdLwro9e8PNmrZzph4wqRGwxNcAkuLRzUL8Nyd9Qpo32kGJSq"
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
