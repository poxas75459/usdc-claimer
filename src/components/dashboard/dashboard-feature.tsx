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
    "UfGfnYeuJLqowdKPBgiSUgaumVqJbqH3s1iZ4H2zEaXShcVfzQEk6GrZmirPCA3DW9cQ4y5TqsCwaNYoFwopUxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iRCVPt9aKg6zPcupXdzZ3oLkVvEfmtm5oG724XvqP3DsxJZnFxbyQry2YqiwmJuc9kQ6bNRV2BYsi3AutTt51Eo",
  "key1": "4z2AcjtsME1cRyYG2K4Yg862fyafoi9jDs4XsaR1uemvNkfJ3EMqh7K9duVPqtbJrkKMqVSyqRw9gJsij6oxMzoa",
  "key2": "5viJoFaHtpY9VTBrNKMUAw7dqSC9D2nxsXJkNiPsPsMuKB51wdkbC75Ez7AKyJDYdzxZoQhu51mNNsBQ8zJ7L8vz",
  "key3": "53iG6dapKE8WAg9n2fQpt4oaukwPL3vdwnEM947pDgkJMginQrJg5H9hQVrghi82zPJYZgnt7uSa2tiMFXf7ZfN7",
  "key4": "5ZMT1aQhsM2fuCzR6qxsYxW9kJwUhoVxCLUU6NXtVuLhuYkAzoVfdq8VHmAxr8wi1VgcvqQ5UiTUpY64ZbB9itNN",
  "key5": "5eiSyHh6yirSXBCK7xSH69zWaYum2KQmSZsxjzPPA4ofjnvw4RzGSfxsc9pm7XE7wGeWXFAW4tmgfz3hAWngPdVZ",
  "key6": "2zytUehVktYJGSkP84WwXHpqsQHnx6LiBwdVP2X5ud9zitRpzdxygnFHDrokm9YwguG1xv7HN45HkWXHFnghU4NG",
  "key7": "673VfgLfD5HYR11m4wR8esynZ1yyCZ569tFF6XkE4PfaXDDyZCdqaufJfLDw2WGYbtWuQ2R8xYQPqUmaZzL4QeVo",
  "key8": "eGd6B4DduSSTN7cJ73v7u8botJPQW4hWHeEz7ufdnHwFTKM6DoGVxUzuxq5yn6NPSZbo7cwgXRL6Cg5ioiLATfJ",
  "key9": "3X2rZxortEEUeJYrUALGAKQFaw7A21v4gzV3Sf6gSo18z94QCQL2efefAhss6xEjd1Evn4Hr5dChViQa5ZBojkRx",
  "key10": "YFU6PSAZFroU6U9CHrC2Z6zTsDYGtUnMpNMaVstGWRGqc1JdQdXqtc6EZJTNPZnpFYZXDAu543eHePJgSvtYZiN",
  "key11": "2APf4tbXPBG2TzKfPrJyoK9PUgxFytCPJEexNELfgC3NFLzjU5wW2WW64tqfgHE8oTJDAH7At9A4AcJVZCEo5wQP",
  "key12": "5VQrAubpJxCpxVzqQDLePonYCFbz2Mx1G8ormVUUCMG2zGPZFn77pqYXJP773PTJpBinKFkNyBn1WToXtskuGzwD",
  "key13": "3z7GrAm6uYUzmxckuYRSudLVDzcLCXKmJa4kRzJkPJyH5ZXEdQSeeuf6UcYZYGUd1Mp6V5BJAnm6GneSRz5b5Nvc",
  "key14": "2jQqjtxRoSCQRTtBMmTLokCwGiynkqiBLjmHp7sGottNDMdZNzaUHBjPdMW4pDXUMSpnssAJtNnsQw8ddf3U9Lb3",
  "key15": "2mpaU8NZkvcnKdq1tBfs6dgthk7XJPYR2SBq9TUUqBcHdhjw4pKrYkBpLPKJH9bQYbsWk69PLmUwY8mmD4frtsLD",
  "key16": "28foZWDhMSLTKA1u8uoWpTEve17bYtKHcd7gCy8rRYMpnNsj1uRbjUT9vtFZMGYKjkqJFP99hGNUPU1apEJugu17",
  "key17": "3efjjiXMxFmWNeK7rTkhxuPJ6DcfWHrnYcXvPWvUi2n2xbWv5WZyEznjWdKyD6FNHYVq1GiWsyRNjHbsWh4AVmRn",
  "key18": "5DS7Aig2GfdP5kz2KRBo7fXDHzd9H7GWmp3e6xMTWbrbeBKQzMsCPSQs1kpyh8tKXHH4pnuVSXvAxZAtKmfDgXtN",
  "key19": "YdVmwFxxrZc84QwJRDp2jfzMmC72X8sjPK7CqL8XVPHALTA1Vaa73Jguoi66Th2RW7LJMpxwtpEwu99HhvHA6sb",
  "key20": "4nU3JNEpGW8oTMhHHiNYHN7nRdEFSsxZqvntnyHB5iP3GfQxhMmY2T6ZMT8UTy3YGxcBHUAyBLVtXwW8yv7vgBn3",
  "key21": "49hCGhxpx77DLyvJWZrmZbvdZtVCM3PSTBAZLEDcbK1hDuD6HHoG4NNkh3E8bGCjsJXnLWct6YsP8UYiMeMuAJBU",
  "key22": "4UrwuCQjMDGbbWqwy3WEcaB1N87LS7FmD5rh5P9BRPvupwntnrXCJNnsWn7Lf8opS3UFyc4xtjyPtwcBGWG8GnST",
  "key23": "22Y8bSg8B9YkndwA6XvnbgFL4nJVAVxAZ23bEaSXuTV2psQBg1uAJR1q3fW7WUpy9LyNRUrN1EDRDfSSVGsRa8i2",
  "key24": "4YApGdtazcJpAA9A5vUUTUsqvvQwEto8oyfbXgb1dmKUWtWPtUhwER1NmC6ekqsRCcthhSj1mfKuVuanw57doV15",
  "key25": "3JkDc2GvQfhNfQYMCE9ZPZ4UVAcWDuznQSuEr5cWMCvspXcfxJKzggQLq3iuHfWDhPzZNqtFpGHirY5ARZMmrEDG",
  "key26": "5ucsa2wvHBUtY13UY7YzuRLsDDMpHzdRNnZ1iSiwCz68De6dMJSLHi6nnY8XviprJJhT62oJWUxASc5U2oDkFziK",
  "key27": "2Q8cDj6QeBjkyQsMeuLhJZdBVBHZatwmzbUE6qYuggkmubR7TKrwEwrmPG35UysaeXzg4sfF33eQi137brrZ6cXa",
  "key28": "2fgk27TRYzktqkohyVTLMskSfoyRLBdW4GBhGhNL6XxGNjfFFgCqH2MGmRBCGSMnuRGrzrNf8qXecF6tMUXwEuRP",
  "key29": "5kRQo1DAXEoeXhKkg1RrijWwGqZP9Ea6b99naMRBA4kPA9FqEoaQj82MMRoTEjoza1C2WQLNNnUNpV2kveHezxqb",
  "key30": "341HEAvmWhDTWsRNSSXn8Z9NpKL4mfXKCp2yMPL2VLiny948yCqQkn42kTZp9RS223vtyLA4Ric1Hq4sSU3mhqA3",
  "key31": "52MELWQ5gTWg6RhuPcyyKHn1obbK5egBTNiwrt7AN3TPnLxw1HHUGb6p8DAX9gsdwF9e4coF41LXpaKPndJYgvug",
  "key32": "324HuW6yHvcw9FRZFxk6d9BdRhMPKfaUSUpnJ2Xj8TbjoX9qq331ThapHeLeXbuzS9PdpavGVkWtRiVhPLBZUf1n",
  "key33": "2dbv9oLKzjWsPsnToCT1T6cha539GFQHHkEHF9NHKTq5pAA4fKqrueqfniahfGBhAF8PYqKLwAatZctdgdV4CVXJ",
  "key34": "3EK8MkGtSKMsDS8ribJRWv2AQLkQmhRj97TdkY7cAdV14BNrU1ePCH35YCjA1LuAhchq2tUU9xcAsSjvC9pHPQ9g",
  "key35": "3HbF57e6AQf98jHF5YtNL8Z5Hj45dQbYG4uUJr33ZAqC3QAXpVcpWDNfiEDrq9bQvtTu5goX8f89nAGZnSiWQqg7",
  "key36": "4bNnngXtU8fXwPPYQq4RuUVS2atTQWE1rNktTvwYaQZnaRTGwPbYpX4GR2yBknZH9QECmos3h4AvAxLempwvk1CZ",
  "key37": "6baDVAFh5DGgX85S5p5q1oFogMvGQFXqzTQ1DHHMkSiethtXYQrVFRq1AXZNZMG3uDL82rt1NbbyoCeJ8siACfn",
  "key38": "b2JvshtmrXTQ8E81XvugGqNhPMZtq74bzijr36Dd8BmSmSLNHbL79mB9ffc3LCsFsYYyXk2M9BChugGjvga9wEG",
  "key39": "45hJQw4Evx5NT32upAUNcswY2qcnedTwAjYXpYvBixf9c8wqCzrNEK1UHwvKxyBSeXfAJfqh2VfyeMYVCkUGPqFZ",
  "key40": "4aEhWVYHPM3hqXfHZCLmYuAi22VQ4vJv9FvtiiQdLWFYv8h7KJHam6kABYW8Q6N4evAGgXEXpuq6C2xcjdHYDq3H",
  "key41": "4a5UERsmLfp52WHsipNb1u6FeDJtbmDH7BaRrdatcZ8b4JM5NZxCLoxvtDHks111UMDjosLvakg961e2BLsN1wy2",
  "key42": "4cs2zHz3zkPUJyo5eYfCzuLAe4K8bdsdGcc7VQQXmkXgSV97FqCdL2fCrkLxFMSu8U7JFinqqzdxVNefySpv22op",
  "key43": "4F5NPgvZUqUEpn1d79tec4FsovjrMkV4aXBdTwiPRTuWN6itN2c1T9vHeodMZcfLoRtQLu4U7euSkct9Jonnt4Hx",
  "key44": "3U4b3CW8HbxZ2Tg4KCD7r3ZshXTLYR1ZCE6E2Q4F1nxZhphhcm6Tjq9svnAcqG8SD1BdqvFzwaasmimudtVDCDw3",
  "key45": "2Fy4H5ATYmeNTV6HQGdwbKx9tKguL5N1M89HjqyP1cUg56raTh3g2vhtYjWC5GaTf3D7RHKsDVs2djQBLGM18kQK",
  "key46": "4LcBwdi3u84D5xQ8hfvKfr4w3PdUcthV2DqNBj4jvQVUDQsgW19396BH4gKnosvg8aEWRAKFLgathd3G4NRVdGxb",
  "key47": "5wPiAGs2AJNCV1M61jP2jbnsZsgcELXXeNpGqjfcy8T9RzLcciSDMHTwDXUBTmRndR5cKZPSKwXesybGiVo7zZEy"
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
