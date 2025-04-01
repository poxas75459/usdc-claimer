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
    "62NntEqC69SgwGiEraYv8ANgGyS3PqRQLfoqZb5piXkrjr5BG2eusAAxoyK3dgRxjKKrXJiTmNSxYyCZMWjJRH2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bvNTo5WiCZ8yiu33PinLfKP1czgXWFAgBu6ktFcqL2yZS5x4JyY8UEUU3kih97H1yGt59FiwRBZYCvZjzEzjDDj",
  "key1": "3nbBr9TETWKk5c6BNYNbAc6Fg61ijk5Wa6xv3dAbMqXZRgUiij4J1tHdYpYTDVnkyyk431Q4Msq3gBQwGkm1RUDP",
  "key2": "4k8sR1FzDDP7879Utmqmr8GmVi9zDkAEPfipBcyFPHfuipQQJAkv3YpX1RbBjFyz7Ku9mt5nnFo8s7CDC7pbUPst",
  "key3": "3hsuiQvTbACsf2tCLdWxKpWuePB9s6aUw9wktE4XTf3hheav7PqTgu6ipRmkXgKp5HDsYxxxX7Thv6adbq66pWQ4",
  "key4": "2XTocookHrxxxoRfJPUvbjpFGU7GzdA6xUGyhvkKHgMxwCiFXvNsr1mAbrahRZZcQD12ehs7nJ69UcmASsX9Y2bt",
  "key5": "4hQP9P4Kfxt6o5CqfVC7vgyzonEEsM4QT3Twk1ZqjdCeMxcJFaRHGCPyHEWd2UQvcc5GeT4fbtAEPDCd9FDEuzrV",
  "key6": "4YXzB7kzEyEoWhuEzsrvzaxEYem83igtVMF6is4MSX96TReVhnvTtjFpqMLZjXCE4R3uRLqNGXJkEKiSVAPqNqzY",
  "key7": "2rRoVArneVkVwfoXAjVWBPVQyjHDWHEep12PaF7PpYFmWojMRHjzauoyvR8TE1z6USZutbfUZTQeud9STudMpP9b",
  "key8": "5HgjY3LbyVxhEXaiHcndQkmkxmgF23LQHv9C5s7Gg9hEZLoU1HT9MPwH6hFsnXiVPvhyuqoZT9urts8tjWvyFjbC",
  "key9": "2sq6wcTTmVF1R977E4BDpbAZVjzsnaYdSPhdDwi5AB2aZ7mHnwL9aYMT4mrDSPbRzDwZ7ZhQnJY3AjWwScXFYzM8",
  "key10": "4F1g3c9Ebmb9qi7xxB1yD5yansL27SRi1ejWp95ZTtxcaZZkvqgTe5Myqm4A39E37PQV3GWYAdwT5T8FJCKNNJ61",
  "key11": "58vHP3LZWrnb1Ymv49SzqNu6iH3Li6wFKsQEyExXxQq1aaUMo9yxByXqHxP9SS6SKQ9HQkPHDpDLqNUYYi2fmyVj",
  "key12": "51yU9W93FMLbwxyqFY2c3ATGAhziiZQTfFGVRvGKxwCqWgJw1dy2ZKdbMoydY9v8UPSi1iW3df31PwdkEKfBT6zS",
  "key13": "5hYXuE25NDepW1KLYVQenRk8kPW72q6s7dpYoDsCo5Qc91eztK3sC6kWD4HmfjqScZnLuHo93ExTs85Y7oJShjVW",
  "key14": "qqjfv314is562USZSGA6NaSXGXX44bx2vbcxi5EYnHS7QNV7m3RYp7DQNExa42FY7buDdgaQXj5zbqArffUZ3aD",
  "key15": "4vcnJkohzE4LVVBUxNadn28Sdf9xZmqPGRfR23ojeP4Xc6FXie2KeYa9aQGt28Dh5hHtyYrg6nsccQWEHUENVbyE",
  "key16": "ok4WpQJcAFJfHm8XqiQPKqSKdxwCEtgdzALgFeYGnh6czSbZHpLBqPsoiAR9uE3kvotqcKk4o6AFyyYiW58t5vt",
  "key17": "4tjrAsyLNALtYKR7UPB7LAibjGBCMbns9wVcKwsxePhwAS7kZDUQF1p2YTrYybNzjD5NN978ReMLGnfYkNTKje2E",
  "key18": "5Kn18LucqjpZyWJ2ZFjgyBBH6M9TpSTSVduADVUXPBbrkvowoYfhMSR3NoXFUSSbg5z3zbmkEitTvGz8GxtgqWL3",
  "key19": "3jifj3TH5dHhZUa6YbCqS2uq7Sp5Yeo5pjfT1PtaGSfYbQ1TMU88ytdj13BDmsaWyktBmXC6rvDBUrULx4wtraMy",
  "key20": "4EkCB2VxMKL2oc545jHJTziCbNW6PWbtKPYS7PN5kgxcUQkVKrfrdxFf3e2aZJFgWQdBP95WDX23Qh72QQhuXPE3",
  "key21": "4CDvhwXT6yfwkq3nzTPtG2XJPxu5uH1HGgWnnBRJQBuaWRYb9RqwW4DLJVRRcfH2qP2jcb8vjWWDhkRWV1oN2Wt2",
  "key22": "2b5Un928WZfmvdGqrQ3YdmmcMemDecVQTWhN9DvdfSj9nXecu7PsZMTBQTxaXX3HfGfj8hXSBpbtQjMbJwq8cG31",
  "key23": "2WGWV2UFGgZ8VKHcHr9H9XuJuLjVKexWpbacyocKBmH2ZzwFXovVqNQ56DZVy5j29f9xr4KqAz5gJZNkt4xxMfTV",
  "key24": "24sArNTAueHHHt6ejhtafvePJaXDmwfd7WaocwKSPaF2r3zWnyjEhchS6Y6Ui57MnyCcQLHqhmu8exygNETNggf6",
  "key25": "KPj4N9Gk6iMToiiuZwTPsMJBD1QWFT9ckQJfWJDGnxeBhyiurTBdBtFQtEFwQepdLKd9tGXamiptY1fRZgTTSPX",
  "key26": "5VT9osweHa9DTH3XbyjujVTC1E51tsE9oVw37J7ZFK6ukkTU5pGBrpS8zPqGMmgdFWUWHNT5BhjKueiP7bTtcUHf",
  "key27": "g2suvA46CkSa1DByvQFUz8FobYaRiP7QFC49ySUGAmK2UK3tavgF33SkTspuatGmsrWfYXuMZqJpnkpDG93sKSr",
  "key28": "4TQpNqRrUH9nGcYCrq35Jc267K5YoZUu3nvzFWVSzU93NeNpLW5FFmBLq56sNR15RNwvrvFDB1G74R47WMUACy6w",
  "key29": "27KyLtLJu7vh2dffAYHBg7NinwvWHq9Kj1r2cAbfkP4jo1BW8fQfFzPxnXcE6m1aqGk7Yp3MouJxyP6gBo6ybYuU",
  "key30": "4MvopfykXcPKLfmHCnKhzCTSHTcJ7izc7m6odMLd75owG82At7yETszubTji2ucUdKEGy6XopLxxrMqvsGz7zbQU",
  "key31": "2BSwH72FGNeCVbrGDrhYM74euz5P73AfMTfW4iyMfcZDpai4XtJn2YvGc5QrXJZhh7kYkchV8fTYJjvd4GznFZ4Y",
  "key32": "4SqfUrpgMTscL1JsSXnZRAvo1VYq84TAYSFQahBEbuCC8DxGnRZoNEsxZDfVbEhYpqXcRD3fBJmmXYmYYAC8CCxT",
  "key33": "53JHKWxBHoCKpRroNobq6o3USWbXNahB7QdWDzCGQUtHJnTdnCfQtf45buaBbTbLSd9pmKfEGRzCUpsboNu5jcH1",
  "key34": "3k39U4BsztFRn1fusvaeYuUz49bi4NTnJ6oAdbBPhYxxNtqNBsbWVCcfJ2GEJGcZtvwNAFLSqsZ1hMN8SxKZKEwt",
  "key35": "YRnpwYM5fEvwogrsXWJKCvySaqRjtWMXtvzshdPdwP2m6ErYL28VmH2fYZt75s3Dd617s4drzjWvE8tWFpMRUiQ",
  "key36": "2v5RmA4fBEttMxdXxxawjiVTjqTK2MMe6cuxk47WF7sM5NZwc3nkbRpKThXLXyeyrFgskFRoVBcAZXcny9TJ7NjU",
  "key37": "32wVhQLityjpntp3aF1QxBhJRks8Tu1ELgF6AJ3Nfan8G6rEQTz6KAaS2hBhVKLvRwhWcEQ43p72AArcVAm2ZV43",
  "key38": "6LpRDd5yjsYXnWpkRQEH5q234BWLudxw9zb7fvpcNz3j83X1roVXMHJmoyL57Qit3tXVgSkKYVBEPQwALGdjP4n",
  "key39": "5bjky55nwxQ7a2842dxTCnZjBZokLU8D4rNTU1XA3vMzAbPENsP1exjFi29XKb8gVtaiJp4syjEquShwTZg2p2ZT",
  "key40": "4skXkf2XsK7GpbYJdfu3FrVdzU2j8aaY55GTwRcewHvXqNF7WAwWG642mc9Ym65ePGjevAiogG6pnKVyomGfAvuF",
  "key41": "23LhuFmHQQKZTDcgkJRR2r61W59JndrWSb1BNXggcmX4YrKtb9DjmbDGpdpQioNNHj8teNabd2hp31mhFTVbVucA"
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
