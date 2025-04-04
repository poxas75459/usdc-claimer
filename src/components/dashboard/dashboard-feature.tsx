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
    "2BYp7aZhik24eQ9MrhYctfEHJZBrViM8mtssu8Zz28oX73uFjCWUjqCJwgAyqJk1BxYzaSCCrrjRQ1hHmasUqFcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6fy4rhkCiV9y3EpEYAJc3qLv1KJc7jqMQPjP99RVnGy6xUUYHDQVFXkcaasgLzxiMNF5n6xxtuBsRCzC7sRWqS",
  "key1": "4ZGyvoVggkSXZ1b9GEa462XRkweE19HbHSCAmJsGqxpwPSPnV2Z6BQPvAyQfptLidr9hXvGtjWfaeYKkfL4p2wmM",
  "key2": "5pHLBZZQ6Dtf8zywtXj4TcQDurTbpbgKLxhpzg6DJjNpg26qyYVYSqt561MPRcJUJ7UYAXFWT1Uru6CooeTKLxCm",
  "key3": "xHKtbXReG28pmRqqCyQus3nhYM7RKn9kybWK3X68xuckmZUPxRQ879To7hdRW5hKxPh7UR7LQSgymGifFE877Jv",
  "key4": "5Z8C7YC1NuQzuLt22Q1mvKmY7Z4Gwuog4sznTcB9tZg8ZwciwYztGp4uwQaY6g46umSchFXFsPwmVjsP87qyCgfv",
  "key5": "UukpD6dxppbbaQjyb4nXrSgBSvgytpy3houP1V5bmwq4fDn9egx5eRvW794Vqb7kqtSWQo4XhDW5oSZmePRoTRL",
  "key6": "4a851zVGTWWpPWn6L35Vnj38qFonBE6K9sPRkvFp11BBEcg3x9kfQ1ncBXmp3dszpL1RzD2RZkaiJjXLVodVvTgy",
  "key7": "4F51f9C6mrQEzgCgBSacezFZa2HDVqiAMphoaHDPpd9WJESsXav1vaABRrs6HWTN3tr13TbLyGJSvAJEAkRquqtB",
  "key8": "eu87Q9SVkSsCBtzFxToGQR6UKJrNTxLRndhPyfYukibB2RD3DK9sMFBcHe9UaTHfWrmMnAzp8Wcb4FvpKkCVUj4",
  "key9": "GdQgKng5TdTUY79z32ZhEmgyMpLTkhfBqJVUQm7HXX8CQRVvrnGNt57cjq3yZRiMavHLjH3iBoX5CMhCKXrQdpF",
  "key10": "4ei4emkunhMoNGt7VsfjDZAeFWXW5M6B8xsdrBNqH8LkUaG2eAW54QK9YhtxsPveRFwbfpwnZaZZfRoHVbWjTDyZ",
  "key11": "4MoN3GjeLkKn3fKuZCccZHkAxRrbU4N9B3pdrExNSLUTKvFGTRHH2HbLc2FfqJzyaEuHwZL9iJKLSpM3M94qYY11",
  "key12": "2dBBXSouHG1u7ufqZRTDGKzuAdVGX63oq2NfktEdwok2Hjxr6yVCZDEwPZ4ykbxUAGuVPzyySd8bDCHQ2j3qeGie",
  "key13": "4qzstDpztVk6Wb3M29tWnveemiJN9NpUoEg1GmykGB1qjeiVLL95xToAQEwb2FSFzfosanDcLL2N9b7scnep9yyv",
  "key14": "2gZX4v4wAVY89mqsPGWCHZMURZUsS4YXxyeqy5XXb24UwPpThqDgckEN2xDZ7nicViGmpbz9Bf5D9cg5qAr8RJTs",
  "key15": "4bkdChSXtYVjN1hoA1WYuxTRTwa7EHUci4ERWf9Wkk7eyAMuxiVHB5JgBvuTAktRwepqC3NakRkNBjYRFzHFAhAU",
  "key16": "3t7UxdPo9R1Y3RbCnphkucrZVAS5T8zNLVZUKbSUD4F2UzY7cj9Ei78BYVUm2g8ZVBerSjehwSsELfNrBAiyJQVr",
  "key17": "4wJPyypyHBb5LSv3PwjvXen3K9kx3ZK7eBEHBbyFNqb4SANdn5SvHSeUJ8uGy8danQ7uzCi3HV8ma4k6Nkcw8Z3n",
  "key18": "32MTnpnk9GAxKDS7wrqjCPxUJ56Xy9p6FL83AkG88Lm7Hj4XAsEX4KVWZy3csFc2mGj6Qr4yvfrMp1pyaMFYNPRK",
  "key19": "2s8yZVa3sQBQTuvZRFRjaWmAN2b3CmdmTHHga3sEJa13rzm3ZcbWZvK5ZNpn3o8rvJCnFMHMcuT4ebyZuP167qfc",
  "key20": "cwu7stAvXBvnKxvzet8sZCrRxSvh5oEUSucg8JELoFR3oLWzMa1eiGR3j2ULqzutijqjYygdyT5QnN6z3uu94Z8",
  "key21": "3JAfwWrwpmY6HMuddaTgGvApGoyzfYWCzM1NoxPbsgsrr8yKkWAjZ21Bu9eYqm9yX9fn29ZPHbNneyhuez8xeNz3",
  "key22": "2CeJTKMN7ih2jxEEmCBge1dmTzoqMNjfUUpP3F5kjUWgwLK9UXMBRf3gLYYQ7LMExDzpGQVvkj2Hrv14ge9rRWo",
  "key23": "c2RLdSbuhL9DfJkkvsQnZvxcHkcxiM8L1y5U65FfcmJDguBcgqw9PjJyuqvMd743jC1q3hQs7p1Yx8qzfqz6wXq",
  "key24": "wzAE3CWrfsrAExxHuo3y7CKHG3h4fgvS5V5RMg1qq2mm8ukBtMyeMRsJ5UWMtJQncTbqSxVZTRCWvcyUbitagUy",
  "key25": "2RcEQsS94WhhctpWAoRdXFidsW6RK4gwG7KUeG7H1gjvy2xq6QPUFsXGouqWYS9pG9N6ir78Ykf1EpyDZtWgQa9X",
  "key26": "3M91P8qfPoqLgGt7aixTxr1LcurWg27pDA3sMidJqA98YdAdxbW1yCdbogfqc1JR5j6TRoZaujRsRFAxY9sYtoz5",
  "key27": "4GHjYGcmMbhyH6S3EkPHSysJLJJfiRqe62yLXfT9EYUT9C1yj5Gk8TE74D51opfryevkr4soFC84EVPbxuAnerp6",
  "key28": "3zV8DAEHxfgCu4xWu3DigCQ34kpfgQeBTY8xseCuD4R9A7BHmjGdzTGySr6okWnsz9741GkB9XnBkx4eLm9s7uCv",
  "key29": "4hiJbbNpeTqye1vciBrK99RQLs5ysL7dFnUupHy8WdqqD4CNE2LVk1AQaCw2JFCm2U9nHAmuNYeuz31uUN5NvRCz",
  "key30": "NwC9sSsNyGAfLxxD4Mt7WsPJt9GZU4C9wVjXGqSKsjjXqTLMzkNh9FnWjLyThWzhC6RnBa9kMBykqYoKfg1nVUc",
  "key31": "2C7wBN1ZYJYCwTiT636uGAVpVaP3eA8XdsVNUpJcGoQMu6Pj1PD89ev3GvRtydS8aMD7XXELZ2NLv3zKbWJLqTYA",
  "key32": "2crnpMmMsJfE3rQ3JLfRsv8TDhofV4xtigd6ak9qzfJcLobJQrUZWMwYLCuu7efdZFKQX6Kiwt4xC94vn6X6YV8K",
  "key33": "57rZUZfciSTCdQ6NB8ohpSqpRfqCmm67kAqg67i7EAchoo5afEZ1TdDJje9YtHwGiaoiovFmhw2Ye9acVGdgxd3Z",
  "key34": "tXgGzu7haHZXRzfgiwGoSiqDbjt76KvZ8nbe7ixQ7TCt8FrE9XyLKWCSV43kaPMa5JE8fvT62HBFYEDTgVc6KkL",
  "key35": "3DRAMmHVv2iAjYwBEjLb5BwETDCRPtKXVHe7F8tQQpyM8P45Nq4PDsgH9cx6z12yizh9JTxsKKAirP1Q6aVFehU9",
  "key36": "3qJeg8jZZUXjff7FmJkc4ME4AJDJpRzpSJ5dqRByV2Ury4m84ueAYzLN8x4GEmXgpgdydb3Ep7zd662eA1CHfQz9"
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
