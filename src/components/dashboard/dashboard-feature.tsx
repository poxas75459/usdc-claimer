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
    "27Kr5bpLTaEJiAyKJzmrQxZasHHLw52sw9v2ZhUiapMkVpA7oFj2CnPevzhTpNHuUjBihmx9bhhygRovLwzDkW9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41YDp21qep2M8dKfpmCT4viv4ocCL38LqS5QcW7QbuhXciUxDQLQU24Aci31cSnpN1vgZKbbJBoYioTGMJzdHZfg",
  "key1": "2ChY4VmY1NrJXekLimezaDDKPXDr63ZBbgyJxjEnFR5TdSos9CoAtN2HgeUdJoCV42FTYqDmbwbShLrU6VxENkdj",
  "key2": "3X3C2TynGeY1vrigVTu65i44zW9RM1UHqFPuZa1Pc7Tern5Lpu1S3UYuo3AgMjxzBtPdho9tBr3EVkRwEVX9RkXD",
  "key3": "4e5UuU9e59f1KQ7iufr4jJ7dUjxco9oh1bjGkAbLcrNXbgLywEb9EPonxMTD2asKx9pRouWa1HS2m9WhMVikoofc",
  "key4": "2kwGmCyevPJHbvHmYP9616fxYzdiL9Md1JrKBzaTX9fUDQBSBhoAikQt4TKGBpkJMYedeHeWXcxHPGYY2Fawsveo",
  "key5": "2FaLizuvpXKGN3HXxjjZKjMpUXttMEj3kWuaNzQ75aUCpAxGH1Ybhpvfnq6E3GWX7ef3qNyhw3Ffn5oVd3CMWeNZ",
  "key6": "3yi1cWuVDB6vh1gn9mXczAuGuwwXked9HBC4zJvnLy2QMNowckTnFfpxJXsdBaY5dZHiKgUbc2kwsQ6HAFhCDmtm",
  "key7": "2oTDzqD9QN22fpVFxCg5rTSbCNYRhwbad3CQuD3fCCbGJQjsrQABvoUyimqNygKBcRR7sZBBcWuA3q4QNJooKgK5",
  "key8": "jSpd1QxqWt78cyWcxbbdiasjih8Xv76v8feaCLfS19ZGx1NKTnedpvJN1UgZNv53mfvdaBtcRDPTVhxuQFG561h",
  "key9": "5qfT2FCDGMs59ZyqcL3oWttZYWvB21knt7eSnTeA8LPAQtEwEeArsgBZeuQg2MeDjZCHdha3HWQWPfeSy8Vz4XYZ",
  "key10": "5tthRP3n4tvG5TkZ9ZT6oTYCaEAT41iw7rutYfLbwUuKgAhHAk3KnnSJHs4YuzhKDh1XFz7tSLo7P6RZJNHTo6Fs",
  "key11": "WdTxRBd5EtJ3yU6qA9QQpyF8zf3Xqb5o3F8BU6SuVXN7SdmUKsDT8GddxaKrGAWHo8fBfUuug42Ma28mDTQcPk5",
  "key12": "3RTomSSTE1drgniC87RCpbFiZcjUKyPWoExRoZDXr3dqfwbiXErpy4QWxjrzNfzFD6KeHEaN8LKdy9wnbty91QLn",
  "key13": "EKdSoHQDMPwVF5WvXE9BaSfMv6YkpXNRpJivkKdjurGE57wDbZ1LnyYX1ajxYDmsaLbxhoPbucv8AiZyAeuexd9",
  "key14": "5JFAGD48mh5SS3dNGGMgym8h73kJa1zmda2uR7ACEVpmf6arv8zjhC42QqYMuhZuqE7Q6yUBdVYRDBJ4yRwurSQD",
  "key15": "3A9Ts1cjKv9u81PUVw9CccnjPFzaMx3UqX9mUMnohSHEv8SFYfRFj8f4UFdQ3Xn6WzoB5uieEJonj277FoZ5EUAR",
  "key16": "4ubGVvf3fHPiPBHdktjmTLjHVdKTrYzaeYtKTbgBdVGjVRqPa9z2HPS7cfvFrtb4u9Qoz3dmnn4ujLbuaw3H5shF",
  "key17": "3DygKCDjqq9tW7fC1neHiihWWMGrA4vKuwShGSSfUx1wokHGA7Uh15VWcMPQPnoF7F3LfozVA1jf36iTBp5KNU1G",
  "key18": "GcxYQCrDjd9ymCfYqWF3cJY7DW8ZemVJiLjHSNY6PwZh49sineZ9SKABSV9NCJDwqgfU3vC6SuuRA3r78wQhWrA",
  "key19": "2fw9F7wQ9RQHT7YuJHeWMkKMkyvQ1yRRjspqmomBQewto34CSP1spd8axfD8qf83AGc4dcQ6XZ4T6NtXT7WWBrj8",
  "key20": "3NmgnLK1k5zoM2NqcGw3fsKShBdsr5MVYGJMmMmJHFMfNowNhGrDbJ1noXhtekGENR361vHSChweYzCoiG8jXeJR",
  "key21": "2Kn7wqcUoLkjkSQdksc2hsMDWZZcq82inEnCrqmwiB8r3gATjJTNXZvPoJkT19Tj6G9ifFjanoryrRfZ1wnrv4jb",
  "key22": "4xkTx8XLr4y7rioha7d5P712sekmW1uNwRvQW3N2vZbzMdzjmtsWzWuB2Gc2X1QEAqewFu1FjPoRXLZ93Q8wtjC4",
  "key23": "8GMbkTsi1uWsMHi2JjSH9tWW89xis1TAKGkhqfQ3Nt6saTzKWSHqyr1LdShQ9gaCyN1iQczoaJCUC1fC4GX6axg",
  "key24": "2ZrRQ1iazSNg2H54arQ5T2L8hENGbpkeA4Nfb6aYiRygswGLDiEm9qSC2Ueu8tvo6RSUFi6kUPfdx3Xr4gqXN6oZ",
  "key25": "5aXV6aWmQQXP8MQeToJNPsinYVDhDh9E4Q1ynzgKfk9jHykAYsVncrbCoqLXFa7kcpebRqfNqzd8t7jgV2hr4cmG",
  "key26": "CPCvYSqedEDq9S5ZFQungUUep7aNqsAsCR1YJYjqhq3tWA5oWCvz4SVxgSacQCpsDpFvNvikG5toSGEhioj9jgC",
  "key27": "3CMGhdPSFL5YEmKTyCnienANT8nbRYdboB7qHTvsXZei5iuQ7QdqWkpQmuCQWHdZc3KS1pPFJxDnWGyHgxtpGdqq",
  "key28": "55vwRPZswjJCMAfkC46W586axpEozXDb4uVDm4VuTcpjCMpsk7dprGyv152mCtFWS6L1Jp5CPCJrshSrM8KhqJZ1",
  "key29": "4d5rs7X8m1gJL1Q6nsfiCa1xi6h8CPLMC1kvLB8U4VwNDFuEGXuqvXcFNfCD1nYyjqm31eLE9nEvejC3RwhHu8HS",
  "key30": "RAMDwCb2KsszRj4JicDZpEhUSi35ah5voqG4w8X1KuCcQQndrZLrpA96wNt3mZigki169RbsmftsBsR4kLdEmp3",
  "key31": "4g3MouWM4X8xQSM1rafTCouQ4tAnLx7e66RpncoTzNXyeU14PdS9nj3R1c3r9ddLAzYPMeDg1yer9DMvLqoqLM9o",
  "key32": "2FehWWcwKLAM8wE8nBxznYokvb7XfVg4CqjNZt1rcgewDH9MFjF5MLRvtk7ERcnN4VP6wMCFYZBH5UJau5x3PsNp",
  "key33": "4jjiFwPeo7E7RtoLiVADwBysBh2r4cae7JE17TW9SucrSjaanxXYYuTjNBUFUQKCteuJDecwpHQpspJ6b6Zp3WzD",
  "key34": "43odV3uMauM99FzuCXPWkiVQmCDk7DJAHXNhNkCEZHfGLeBY9hf6WtSWWxYWZjKKN2LBs5BXvBnbfxKGEmXThrzR",
  "key35": "5hRZsjjE2UUZL3earrEhnEua4GuoK8iL9kUkMbCovswcVtgic55dbSrDJacn73LATrEgPvzwc1gmxCvkTP8igwCM",
  "key36": "23zZREqb9M153zhPK2kWDZhEnqw9WtLGRL9VufsddPRRwLG4gQA68QSjAhBJ2q8xU5f9mmYk22fwp26TFFWxKKMd",
  "key37": "2ZzuhJnyv3tvp5kLsBG56EhjPQ1QRHgUXG2k1ZNagRMo79KXYw3f1B6GxGCPPFwZN4mXmDF5JKzPtCza2RPrpcfD"
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
