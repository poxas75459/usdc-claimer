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
    "3uKHr4SaPV5JGFfqevAGFS5Ku1jMY3SxMsMuC2ZFqgNyLXqcsvGS4ua5zwc7zKWN1g3cJn9YDcBnHjL2TNr3TmZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVvVPgsKKPqBkGKdvWCnRiVTxWB6P1QX1S45y8MwGhGnckuKfa4CmKvtrgkdg5Z8zcNa9tbYQiC89X7duYLTidW",
  "key1": "h4qDqDTX2n5p9fqekHN5SwCqJjLSQ1cL1PmyqAF3PNvpd2ukvbcpwdaeBS2bGDiWSCmDdEggbDMN7BUJV6U6AKH",
  "key2": "4cCVdETyJriW4iXmi1hr7xWMX32ppjLYNnnXGD6E6rc1erZy7d4xSEKTzLUWynXwbbsKZaYPk9qujJfFtqxjyScL",
  "key3": "2HHJeFrS4qWZ6CXj1VyqW7rzD2fSGP9bHf2iwTKmsYZ4BbAKjmnXrJkwZpefubv48xb1siJSYCA69YgnFWSb3ion",
  "key4": "5o3tkzLgKrxrv7r2uR2qqE5isdgfKct8iJ6dqbrHahSD7kYvFULQR4mYXdjDpzgjt759d9jiXkiiNL8HrALCjekX",
  "key5": "XQ7MGMwoVCDm9apUDHMi4yY3Df3R3ztJgharJAp5ErQzeZDAMMWn6ArzRrKmmx2w3M5brqGQ25X7VfAyUZzHV6h",
  "key6": "5Kh5EkSm4o8WRDUzrS5g2km6uLfGqjzE3RqnNEkY9gsnUPgWxArgrLEF5NNbRk5LobFB8e63vy9FzVt356MWWLcL",
  "key7": "5nU4Da8jVAzdgytyuhCm7SUN3NCzQ8HvJBqwdS5hCRen9V7ogHSDVBhxX2SV8jKg5K63vQ2ZwkbYozPZtktpVtAk",
  "key8": "3wNY6dFVzeSAeuQ4urEFcnAVFYvWcW6soEcurH3cWYpuJthkfMJNRJVykRDBo9G9ZvQwWARV91EyW7jVaeU6TQ9q",
  "key9": "51fasi59Y8MRKBqyxBDmhvyoC8vyFTzxEn7kMczJkYDo6xpUYYwt3LF4bPUsiqvaQrPmdPmuc7yfFkWynqcy5hfo",
  "key10": "25uUCkZJSDxe3mKwxgpf489DHioJY5Eu3nZS84NWMN9RhqUKJQeDequkjGGxRUeEWEeRzddre5hJnETh5qkh3c46",
  "key11": "5kckTaYy2TC7SgaC6EhTGwRMmfET4XbMtXZ5tfdVmHMw7dKgoezW6UHmamFkL8VFwWmaBDo53uqVREgciUuXA2rD",
  "key12": "5HCg7XuoDfgZ9RAZnHKMXniQbXp7nSgSRdYsH4uqSZMo3UpfWBZKhXatfh5py7oVJL5PLfMtjsZUdzughyiZ1eG6",
  "key13": "gEpggcH9roa5VpdyL36Gz78gQFoon1qdfWSXrB7Y2PXRw9nSmfxUofmC47wXVLq1aPoT7exrErZBmogJD9ttARd",
  "key14": "4gPC8GMYStsi9BJgvuFusLk7X2RuX7Bfo8jmEW4c77CzGMfcVeanVsU6YFikkKagkTUzaWAPoPAFCLaqmqUivQ6a",
  "key15": "5fRStkUY34ezbzci7tqe4UUeAmnVroVBTMJDJR2y9Euwo2WQ2ZziE3eRUPSv5FVd9qG5KrpzCVutyyH2TNwoi7Vu",
  "key16": "45W6bS8YmjreiQjB1dwHJj5yeCReLudfySp6qEZhVnhDn4L9pJR4PYWPPt6k58oAKTfTYiYsCNFewybtMMXSZ4mX",
  "key17": "56577eVeBa4knDPb1wecLbLxqfGBC5jVgg81pT4aYwX8eyeEitGRLqPc7xup1ymscDTsLVnnyp42E8zFhNha21Ce",
  "key18": "e29ArbLygrS24EYdHTyqCJ7rfeBQuek6geGyBB8GJbW6HVoqBhb1DMnxomuua54TvFstZjfvrGLY8ZHjjAqbHZh",
  "key19": "4GWiMeLALnp4HkUQ1uqB1iTYJ3reHAa59Lq2UwJBvyzzpzA64WNarqoAXfnzicpRYyMKdMLZAgnpRUnPWvVQrkpo",
  "key20": "3mK3BXhb84R3z8t22EXPpvj1hT5dmecRM7SjtXeaQTFPjxfG8AQdXY3CYKpfUT214ro6KvRtJGzs2umKEEbu3RTd",
  "key21": "4x1KVWLc3YiRsQPzrrm8hMCxkZwjzdfAdZFhyTUpueVd14hqLDxntaB4vWwjopdfC2ATWTpNByJMgx7mtL9zgoN3",
  "key22": "3XFXNv8fwWrVvitFeEYuyRTr8BUTag9YjR2hn8buyphqEwpFVSi5yefGXZSuG3an5FySYHSjfWh6DegZrP4ZdW1v",
  "key23": "2y2tYbeaMLNm44JcpY6hhwci69dg1L4EH4z6JGKSpg9oWDAK1Z8J4ShqN77R9aBUTigAqFwwZdkRR5ep1gF3z7BM",
  "key24": "2znCy7AekCjPd4ULn3SjMUsnN4nra2aB12j21udcuK1P9uWrrrAUFFB9DUEagsvCfi1boRjR5rMbK6ALew3c2wkt",
  "key25": "5ffY29zHPMMkroZ3932cWsmv7Y8T4zqUBNBh8T1tDGofYioAJLobMdfd3s88Qv8Hm5W1sFynX3uTroaGCqsCc27B",
  "key26": "qMj191kbtdDxXoefKYkPuj3wcosySpNgzKrJ9XRTwur1odtmt2YaciK1z351HMPuxvMsdnRpR1K7BZtUdREAMgj",
  "key27": "L2TvnvJVC8yePufm99Fukihm9L9BhxzKP7kVsamdhkigGSVeSnGaZsQTXnBkk1sb9ZV8H98VydRiemV9csAvjaj",
  "key28": "554NzGWbebpraXTXCPycWqEQCRKtFb9476fTeJJ5LrnXkpWkd9ntdvqrMZb3ejMQnnA2jUak9Y2ytqgpehBfZwY3",
  "key29": "5zqJUiaA2kQaMngtECpiobHQp5Rpzqvt7Qf7tDQKeX9NGPdcVgmmFrSskE8ULsqfFqY8aBzmQqAxpBxZp9rcdGtR",
  "key30": "5JBZXb2ystKew7sQRjMi3mUiPzZZKuxNddzYF2u7aKDYihC63GaHvxxWwbQfdfSh4y3VLJgQRqEw1nKkd7i45hbh",
  "key31": "pw6Vxn4QUvsk2N18CriAfTaLjn3PVvXj7XXeZRXBE3mh1ssQdXj6pfrv7TTmfdtLjTH5MmVw3miwS6kLqDYtLCH",
  "key32": "4mQai6fUPtYV6d2pYQmt8YR4X3mWvAaJEn1HNQrg82i5kX77uS7PyVBf74JZvSYinkgmWJB85u8XxmEYPYMGfC2f",
  "key33": "2Ly6iH7cN31X8ajQz4SnuwrBXiEWSLyfqogforRt5eevZj3h2TkJvZsXHum2EC5iK2FUEDcjPHpePoht49ChwZkE",
  "key34": "XAoXcnfpnhz38rCecFSHdCqR3qaoogL9ciHnvdCRSjDB7mif6vkez4rgCsqL6ZnajfBwSnS4ktqtQARQmFkguTe",
  "key35": "3aaFGVkz6JvvABSBySfo1Tzbn5n4hCQm4CsGPcW4DUgXg6gqC31FhpMy62emdVEWJw617G7GTrm7FcKMmvUYkX1W",
  "key36": "2MFFWkPLx39PGiVi3PjB7uWRozRPZb6USpLG8uJGLKQHorRprvzzNukkpQk8Nh8taUe9s37Xo9Ff2HfRyeu2hc5g",
  "key37": "5kZ56yiHW4MgDQR2cBc1TJRbf5fTobKWbZwtLtuqZPpDoGRXxNgS9oRqpH1raxtiWAwWX78sPrdu2FwFkXUCe8EE",
  "key38": "493LvChTzdFeRVDS15mrcuJ5C3Pziqmfm3eXq3VJmkk6aTswYdC71HYPcGn9Aa7mfdoYP6xzWJKVbvxjYxzebWRM",
  "key39": "4eiFygYn2EKFphA3ayKQsNobZApRZuckYbYeezfRDL96kULEgN16AEk1jVcv6JUix46pwFfpfY4SCzNjYNWSWrWz",
  "key40": "2nnciv6pURhhm5B8oigzaBZYp9NatqqqGF4p2GKhCpEUgdBVMjz7FCcrWTzw1PeN99bhXL9UXwfSrm7qbVmRbmzs"
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
