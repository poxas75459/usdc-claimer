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
    "2i5TARSa4oCA76fb8UjkQjusY5j4dtzSwvQN1HpQ968SmCNKiR632PidQ6t5WJaM5857DcQDaG22mrwhpWNKpr7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tXDGCEVzpi4A96M7oEFi4w87gzrP9CPTL8zsGuRDcHzvaYTFk5MDo291Me7XmC1BRDwUTaTsaGPFRQXETM2Fpf",
  "key1": "2froZQsYFPAksALxtS2NsfRvusQuesLdt2xY4DuymgD54D5sLHRpgS6WcCMww7E7uFn5oXwFxV3B4DSwE3MY9Bci",
  "key2": "5YoHUoxvDVMkrcNG97k6XZfei5hjyYNcvzDYJ2iG6xEPmAmDbzani4aVt1v6BgENog9nEshboiEZjGFFSADWYVJ8",
  "key3": "2iqVquFjSiWAnN8jREy9W8aWqknc6nmpLZDkSMYne9GUFGSEJaWJbzBimkt8h36WpSCtjuAYDAWXxg2V2FtQvVRU",
  "key4": "Y8W4JVdQ4r6AJhTkfszEyj9N8k7MRkSbiLY7jQVX2HRWfEyD4RFCT5VYrjojem7PEopAKJoGejkThWoTaQUMfQn",
  "key5": "3AoHsWbL6wrgWvrTjVk1BBsRsZsaJASyTeS8x16sbpJ3wCXQqCkVCzUzamfZKcsVA7dFKP9rKvoV7J8AC212EuCM",
  "key6": "3CTPLyTbteBWhoEBpSSSUsNPfdTiQrvPoGrY1Kbwixj8r46WM15Sikdt9X5a5jMQiMhkiimhWnCnHCRT8YWbQoSn",
  "key7": "4zb2V1yY85UtfkPRzDFRpPjmMZ66s9wHRW1oV8u6mTr8EEYD2rQuYtme3ro7g32HQcaQfk1JhDdhtwt8rSyb7LBi",
  "key8": "23awBjiP2M7PkZk4PjCTHVJgHj5A5RaQkrHxupUsDmeUNFACDUiNNavgaCVKHcVJ3L2f8fDKdAP6TBZSwtaaqcAM",
  "key9": "3iXPmb3HPeHDNqJkybxr2CBtDGZipwuMm7BR7oNBT4mXKSpo625fyn1LUWRW9qtXCBR8XCs76B6BxW25rYr18JtR",
  "key10": "55tEeNbCB1ccXDzVcBSA8N4z89xr5J6ong69kwSLfGJ6UPNUmVH8CSx5AYVzeDCJ4E8J3amcM4SqBztwyvwsg8zW",
  "key11": "32E77NTqKzRNL8SRY25caR5r5gh7jk3qQ3Cx6pWspf7REZQWYgWsS67uspXMA2ZJZEBwwjGc1z6F7XY9yzV9mBb4",
  "key12": "ZjyShh5uJz7ohy7Yhn7JLQgJsXCaNVND1kkkBTzRi18Wirn9Rvza3LSBKnQpASQAmtFku6teQfzQKCWH9MAXD5G",
  "key13": "2RPPQitYS8KNMJE3aeZjXaab4YLqPWEsFtZwuf6cuBJdq7jmzSs16zThe4dqcHqNmPtey3kzVAQvT9ct5AdcU1SD",
  "key14": "3UpZRtyKVPJBQ7cvnbXsqP3hTuYjDgUXDcZCxMxjCiHHfve4dEm7qsZLb71CT2STu7xCgotHzkEDC5ZshmvtpFu2",
  "key15": "2EiMaqa1gCLv2Rj97QrMAZ3u43B8HdHrbFwHntcLFsDaAY6GVdYY3yrntZZcVA9JPXmPTTRBvbGZbQujdYpCPFh8",
  "key16": "5yWtdDWt8rjYchT3D89tQbWHmDkQ7byeU5a48ykm7WwiAedtYax2P64pQJ7dpo2q7bhVnZyoyUcjdyWKmfnyFG6i",
  "key17": "3NVcGPdZq7Ui8djMTPtw4iKCBy2m1Hu6npmEwwwTQQuE49wiiTQd7KfescEUGXbxwFuFFgyxiW3qAkmHx1Uw4AXT",
  "key18": "5mo6GEGUw3HuQybTM64EYj71XqkoZfsrrugift6e991Xeri1TfDVTPeSMvQcnCvzn8LzAov4473xkAry5vydQgAC",
  "key19": "DLQ33wmxBDqxPun2tzhJ62PGoE7QV9t1mXHyzwZPn7B8S8qEYokd4WMcRDpUB1RevkcTwr8Y36rhq9qaG19WKtf",
  "key20": "4a5qSJYKA9xfWF6YWfoYL7qJurtKxEXGfpKnf3CczqaCnQdrtbJb8xtojVAbSguXb4qXmvA8YFzpw8R9ycHXPxtc",
  "key21": "nbFc2MimpYh3RKWAnm8M2MEwaL1zqmzm69WF5UAznYGfUZ73wcGXMNh529EWciSbYT5yo3pRU7kfeqFTjQUyuiG",
  "key22": "4rw79696msSghuJnos9kn6tqsivBz8Lm8ZkXx1puYnmvZfiXYEGrxiv57HcKWmiHwjhK9YRzk95TfvcN9h1ct6Go",
  "key23": "5o4gLH9APw34pf7j3A3umChTffF8fmqxoaWxoo7BkzJw4F1qN6igYLXcrqBgxAefZoMKQTorqc8bepuu3aexLyUL",
  "key24": "6L81E9TchaA89jXdfUiZhU6KvrpQer7LdFtnSYkFGvBTvQJeMRP2Ncb5GPprE5hZLvuDZc5dnhCkEzZ7PErvTDK",
  "key25": "LGhseDejBtedumZkR4418pwtNg2wTADuYdrzpdcf33oqgxgpoGsZ6JaRTGVxZshCtqxrWpEYgTgssM6JdUVE8JC",
  "key26": "64AC4gwq2HP7GqjL8ixgju4zauDgAgmD5RPMD4F8z2u3tfwr9ixciVAaeCj3DtHgCXUTsdGvTppN2fa9GHx15RPR",
  "key27": "3uhNqyqmB4vxPVQAN9G5BYpV5AaRuuLoai1QbH9ebLQbf8rRQkMvcfwvPBvio4wmtNovtjeFGtzfFLGcejyTjq4x",
  "key28": "5tQMXhC9rdR7LCMmeeqTaJsFaJsziWHCZhcvUwyyD9hW9wgu5N6vChnRoEXmeMjyJdZn1yxDuZbUK5LLQgKLkcdM",
  "key29": "2hGSDjGGW65D3Rcgo1JCu7bxoYtJdanBx4zRxRpScULz4HziB5ap4Uc9tqG2udWTq3JoGGaMMqSgT4YKiEMfDbkE",
  "key30": "2WSBy4Vx8ZHk72aoMDDbaW3L889Rk8F1xaKvadx2k6buoi95hhFM1xLC2sWRVDBacJS5RGuLQvaZ5QLbLtRfyEKQ",
  "key31": "5y3TeCxQdkq7bqzPmbSF7DAM2B4oeuMjeHgPXq9RXPMVSiqQ5Gsf8gcMk9DSVUmWee3A6Rp1hy6FZA6MJNvnksid",
  "key32": "4zGYXpakdXYfucL5LCi11nbYXcF2weM9fZuaDo3hFfbNTKcEfxngtqxszvD7JgKi7MQgDPy7bYAtENZ6NhBq81Lc",
  "key33": "23RR66kxd9DxyLmb6UKG7wVibLtunTJsQZxT1pHuvR2bgpupQpgzb9oKgCVodGZH3s5DF2wenACjiPPRSordguif",
  "key34": "24PawTz98c1wvMuX3XFzs1moXvbd7z2oxgWMRt5DvihLL5vju7ZqKmu6jKiGc6kWQQQBqK6pvQVevRmbBQ5kodgC",
  "key35": "5QhurjiKAXkrkvUub3pHnSx5k2Mw2SzCYH7vjyYPHa7Xu4aSJyHBYgAVHtXRJZzbqN7fqkLmbBhvqSNhD2fc2r9Z",
  "key36": "4hmeZJzs6pbWAjbo8CtaqXeocv4ev9cotoBQ5sjvPKnGyBEPNvK8PnFwNU5hPXDZHNaXyDuamNeQbr7zRpzYhxTZ",
  "key37": "2hvWVXK6m2pyGAa2jiBz4Sx5TuqqQKwJbVFR56zK2UyBCQTqbWt6gwBnrPk598XE9xYza5MnaU7oB75uw94n9d34"
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
