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
    "4Sbxxh4kxYpodoB94CG7qBqAfcU7ZccC7JfCgeGz3BeSsCGhqQphAAMz3pJ4TJ7DDoqm7cBo6VciqacHAFXWQsn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSX47bpwRi1EmpvhTcxuNXXgR7uz5VAngyK2y6WJpgYQurchT8sXeon1cGrTkYHTeNLMNQiYYXQbxQWHJZRxzk8",
  "key1": "52MkjTruH4sHT1b9TGj4ws6TRo9xdXnHk195hRcu6yXbx5jdmpL1jxCEEUvRoUUV1vAuyDAnY2RcRmFSVaR1TFUE",
  "key2": "4jHyAgDuyPVt3znVtQTEhPP68o4fKThHNBnMhcm2FeiNhSQeDg3mM28VuX7RsDYni3g1Sx3ftprNFLftL6kbmutr",
  "key3": "5gsCjVjkhDW41pzZAf2b6zzZoyUgGS6DfNVdfpNANpma8uDuFVJkDZ9bhvFdBNoPbrtrkWH6rrDFgYzq9zYXjgjC",
  "key4": "qe8h5Y6G8z6Lk9CAX3R1eYHxzURXLeM9LDc7sBHf6bWkxmBS2UVzPKJdj5meJMZmXLHGHy7CoTWNuwPmWDr7fiD",
  "key5": "hPQsDTmfzwuNAUQ7SPt6EBQXJgJhH764TTqssXFFphFbykYiYdWqUyzLroTsjVCuhJYbD33BqApJw4Fzg2U4kSG",
  "key6": "5qizbrvXio6ZvkdA6tGLMiNNSEdx5k1NZhtGQdojGXVBZWga47Fqx1RRYSEsTrdu6Doba4kQcG76T8KgjWdseMTy",
  "key7": "2uZYLRuqgXg1aWpp83TnyrwfcxgGiv5SNFdw9Wfs2ypiTvianLrdtnfBwUYcrRmMJiXr7uh7aRyRpu5ZB5gTZzoW",
  "key8": "54gqv4BE2CPwZLpvpCAjUeyuesN5uMWrZ5UmyjbtWwjVUJhtoJqHd1TuDaoiqaCQ9gCcbZyaMghriDVSYt5onvGq",
  "key9": "56TuJmpK8ipB3zrr5kLt3emrE98ioYcvPEgvz9Zd4pQoiYMPBAWDDat74kCiuNpVwfRfBFwj6hCGU9nm4GASh6Dn",
  "key10": "5koL5abVDr7RMijPAefmtqnJDvQMYXsXpSyLGLmmNLxyeDjp5Mh7bPmTaNeUfQT8vt9BZeXciaoHgBTV4EMGtiiF",
  "key11": "4xrs9VjpTijTB4RNv9aqmwwC2UrkzyZbr6coqUq2cGYgJFneo1WQYjNGk3d1Lbc5sLdK59BCBhWknZhr3NNYJ8kp",
  "key12": "3TeMuQUGZ8NhYkWXyY4HjGuSx4w5GKKLBHrQbdQ17t1FoXTEHkRnDmYBWbVTkSeFxAnjU3SoZ3HHUcu18eBABuVK",
  "key13": "5UVYcxnY6zPGRmNXWJzzu5AoLBbDHaBWQVqtX3oVZ4ZfwcQMbbFqpSN2qcauNeStuEiecv3PFZczPEm7s5tH92JA",
  "key14": "2gYzxhRfYwBqcBGt7WUqDiPV7cFbmuoU9chuw9qqRosLGmuf1iy3aUmzRzjYDzQgarwQ75AXpf5YUrZhKs1gjKwb",
  "key15": "Lwwa7TDVm3Nj3srjfcJvrxPAuY2HAa7Nx7LVPKi32yLh19dj2EJcJtK8Wbo4U5vPsBuhfw6moJpZLnYwMU1ZM3F",
  "key16": "g4jgpzqWZ8eP9D7hjH3yDmga7qGUPkHJ5wUATvzQMZ6JR9dQbGEaCHNxbkH8M5HbQC5id5X7cLGEawM7PVBaydU",
  "key17": "48dWSkdDk7EMzKrpZqPGwL8B7SNovvLJxwq5fynd3xSdSfwjitfsaB9okQxFgMA4DxDEpjFj6FNaVkQNVcPCssfc",
  "key18": "4Qw5WjL7LYU8LumUpjkctEESe4oxVM3CEUNget8Gt662a8G7Hi2URyXsdS5P1cPkfYCehtGFbVAvX5vAU8yKC18H",
  "key19": "4BagBTo58Wf37G2hfLNAwzX8nxiz63BS2Sj8XBKnhUpzk6bLJYuvhPtHuKy1rf7c5pZVByoHr6VDZp6zUjdqyxiG",
  "key20": "5hffDm65BDACyhKnpH34nHgXTRAAHxLB2VBW8dt8GXnBmVbujr5TRdX7ZvuCux3YjxHULEv7Qz4bGBk1AQCWeC5L",
  "key21": "2eYvK8pzscEXnQr1rHZC8qdptrozNiYd5HEsBEVdVbm4boop3ogTBXGw4rbMaY9xWSHziLhJU7s2sByyo2Uw7TWR",
  "key22": "2FCTqceFpKzqGxxLF1GBoTcsrqJLCUmkWxT8Lkw1GqMSjxi2w9vp8CM1SnbckbNMDDEN5LhArnRGYRQWS54oeEf1",
  "key23": "2oH82Zw91t6AWtVhwoSM1bMrouGsffYht3sfF93dbPnm7C7LqzQXVLdVoscvgzH4fZgHuCNq7szSLts8mMQnnZnW",
  "key24": "3GjUaQquRykaj4FrDtgp1dEAzuscbQA45DMiHxfNwyvMbPvnZPGJtHkUNTi7CDGyBWW6Q83AYXGfkTb3AG6zdtTq",
  "key25": "GW2vFp8qdLgssZ82gwEpxSA8PUWS4AsQozQbDXyBoCC6NdEtxwofk3m9BP2HwZS7zBJ1S6XJaTc7nVNHSNU2p5p",
  "key26": "KvZiwm59AfrLLqRvKSGxi3ZZscEaKDX6Cz4EDJo6UWRgyoJ9jvv5FREB1ooHKzovoBDKLxyFLjb5W7eo1juGgnR",
  "key27": "iq5dedwncP7NTGFEWcMwAoLJ8EEBFtUBdvSj1KHNRQZcTTGXZp1dVYnxXeVwmxKxfTw3cYr9JF8U27Yv31VSKMa",
  "key28": "3L7vSqGdVkDRE39UiTsUHNRTm7xUC8htsRbDT8NbiqqUjagVtHGP3ntNYq4myePUeovTPDP9BeL8X8iMDgAKu6P4",
  "key29": "3m1yAJbYvmPRdNZsWab5g3uGS31JDJcqLycDnVKMk3mVbZ32dtGJSUuiG3yhovL7mo8MfSf32ZYKUhCaon77U6nz",
  "key30": "5t4GwjM81GNcKyWeVHqubqU4Gnyy9a4yNCBLTTHW194MaEhGVZhA46WMG48FThDqLCyFCEHGxBFtmG84ZCEGTHy9",
  "key31": "2Vg8fuEc5tjSQvHuWwQVV8oQYEjuw4csoGgXGZDPEXrpL6Z9WqMjULGhtmF7N1khmL5qQFgoFWXqYiK73AscvQAD",
  "key32": "FZs5bZBgXQVF3fDbtc7Z6kSB46tqedgvuVFejBwk1kydkgDDTt6numVdR431S67v7D69TUzgpMRScSSc7m5AQ2X",
  "key33": "MUjTMXwAFsK4f1afEWK6y3Rce8RgL6KHhJjAneCXwYcZPxEuVXB2qbxN8RxWeA6FCiSUQLmE6BkNY1XtLcQWX5P",
  "key34": "2Z7uFW55PZCtj49oohdbTN2ZeVx8KizYhDV8LxaiAxhfiG3qA7osWzcd4Uer96i1LsJ3Q4HbGhpecxkT7YmoCic4",
  "key35": "62NT9UeGthJoCV3y3YquKino9MD68W7g5obyXiT2dUTirYksAwkncfgVNqC6Ln4FDvEhbqnJknd3BzAtZT3yR6yX",
  "key36": "5GghgKVHN1wWv9rF8uqRmELR9PeLCSXQ34FijyNCZjDQp5EXhqXSCh6BfemqsTN6DxvzWUUysJNukbtiD2cAdz9k",
  "key37": "5HpvoC5cyBS5LAQJ5Doekepm8BmRYJ5EX82jEJsN7roFP28BS6hAS7nnsb1RS912fbUbRdbo9EnAowNVAf9hoato",
  "key38": "24FcUB1wbQMWwJxKsCQAd4czZxUL94ANYa46odAETKhRybkAqnqNYaFDnBaZDmvEpGjeuriU39e9mCjhvjEGmaRg",
  "key39": "5iN3gXADagatyJJmPbFh3L9o2u6VT7oLxyG2sSqGe3NpwaVMLcodoqrbNpFXyVzGh9XLz6AQrU9UtB78bLzBrvAu",
  "key40": "4GyXUVoikCDHRZt2XCXRfXvsUy5q64PsLVVAQAecQ3R6AyM5GrTmvgMpe73APMjfU6NW7JwjuKQkSG7Dozs2umpd",
  "key41": "5HTNLyx7VS8XR35gs5GD15fvCLwqszR9qLEE9ixEyd619S35HqYBJBhuA2UdLGHifbFBdMgihhGPmmAWZpPszuxC"
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
