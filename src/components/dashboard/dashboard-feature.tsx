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
    "244QWMCKYZrYwyXJP2RAWADPp8FjskdmizWyWNxt2HhXZ4nw4ccRPXWxfdkATEks1WWwaY6PpRdpspg5e9mGGy7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wyvt7oKAoBK26dbGQ9EsKkJqDU7h1nUKzeBGyiKhrWSm1wDoC1wektuBtdeiEoZ8Rzc9BTQhjRZiAJKFVCphqRy",
  "key1": "3LCSkq6JibuKK3JkjxCru2crwsrvttRXHXb3taS7wZrVsnbZyaiC6udFvAaUCWzorHWHdCtAjMuUdGaDNnpMXcWS",
  "key2": "5xJdaR4vjuqSha9q8DaNCk7LwDYnhwtm1ovQXSS9iRWAyqNPPjGic61ts9RWLXJAkLCNVUeo3xMqHuD1UGuHSWTB",
  "key3": "61WMFSwJEeFcwbM8a2VVWtq7sq3CaVE9VSC9Gfk7PU2vR7Ba85hFN9n9Xrh8iyUmANr2rPQEoCcoN1j9TJJe1MDi",
  "key4": "pwvaQaQFsRU4ieHABUt3ZERsH639TsGDA63ddFPTLHUzofCtUZ8cpFYzVsweG7RQ1D5udg2HiTL19yZmnYZC1j8",
  "key5": "CCE6UaJtBDimaTFyXiuSx8y74Rvvzs6EYwLnGn3UL9P6Lbqn7eDceJ8qLqrB7uTrw2kPc4Sb7qWuM3MLUaPdKeN",
  "key6": "5BdiCZwyJjfnaYuS1ghRMAScoUHV19MQwGu3FzyfuHzUP8VDLkEmqMsxzgVgPZVU44NQx7tXuPsidrrHsAnN1YVv",
  "key7": "3MgyQXLu5fCUyoWgtu1PWEKFhQudkZdGB99yccA2sMM5FMQN2e4ew7hCfn7JAQSZBYts4F6XVY58ej85U6Bsx9oP",
  "key8": "61Eg5EmDhb4Lun7TGdsPsfeomYyrc6UszdeqKTqkG9RFSjyJxUSuqnKHHFvq4moZNreSDdmB1JtZvJpMXKW3kzot",
  "key9": "ZxbxJncVBzU4pHHi85Ya9Jkf9hVS3wFys5CUKnSs9wic4yVkSoNwrWLHFkCWEtwGZQxcWx9wkR4dVd7PMGEQUAA",
  "key10": "4UDBYPrcNMg2yaQNbcku5PLFUiRBAabZDLjWKzZNVhYHAufoaZKBaTfVvTu8b8CNxyjsH7WbXNzkkZ89fsB4PJpi",
  "key11": "2LSq96yDix1vV1B7xeJf8gStUrSu66FJZezScmKSrXV2uKH7nqVCiGq24GY4UZQivbjZs6UEtGnm3fh36Tv8DJA5",
  "key12": "eAWnkwDVcsV5nXrtXLE1eCAU2kx2GNnfgmNgHWdJLfMg1V3pj6VqCG5ZekF4HgQq9nLBGYqy1ZXxxsaLT2fYnEw",
  "key13": "bJWdqy7wpZo3yzfDNyrCXdaSF512qwShY1aBS8A7gNKhueE5Xz2VxLdJnLw6a4t1Mvbw5vZqTSdUJMFMQEWnXQ5",
  "key14": "4Uytctja4PEaoPK8xhxWAoVfm5pQ3SAcR3QDEa6YmAgs6HmfcbmWMcj8hJB4sDSWBFuMV3xiuxTzUXCkq913xgG2",
  "key15": "3g1idwCj5SM6c22YtbV4Wxx9iLarcg6hbAuexqwbkDqPTWTAxVmK992xNk98SdfTTnxNJhcSZ1EP5uVceKiXQ3JB",
  "key16": "5VdMGKfPMmZDqADMfxaj2qvypD7udWkA1BA7gFP6YDz7QhtfERbhPFtym16FiGdR8U7fq5yPeU1LxfPQTCWU2W6L",
  "key17": "5phyYotKn74bFbudbrweoVtQZfGZhCZiJWN3SRFbRhPPyec42N2cu18CQLoNzxSnaiWTwtBouU9TZA6jqesQZnNK",
  "key18": "2VPeonaEQRGbdkRopowwDzVRuytqP6nXB7JbJrqadNRiVg3FZE55unJbBVzSdKzULSrZWZdQai3jz2m9YxB9Bwz2",
  "key19": "nEGPw4cWpVQRd4JkJmpmcPFmf5SwSm7Y5odfbYJEfTkUV7KYGVEdLaaFUBbwxG2KnDugpWatTBc8G3iH3djDEUC",
  "key20": "cBzsH5drG8PN9cwU91f4n6ffe2AZECN2rBeqnYA3Q2hmr7zRNXbQHsyxZwxQ3aePcDV9QicJL2k4fob2hdQqL3f",
  "key21": "5sqbqizd1xLZXjAeBp4EE2z15seBey8hZdxBAxh9hBr255bXxksUAdCu5Jo3m2iKM44ZAAwyd3QnS8eybduZy5dk",
  "key22": "5vMwV6DYfUA1SZ81CWd7yGhQDgVSQiiXu4sakZiGVkJXpgLh2mBqWspDrVyc2YhZxapkchtBuWYRoYAbPGCwpjey",
  "key23": "574p3njMWuQXWLtF9UNtScQVZJvMy1MYbrFyaaZnp1t8bhfDA1DtHbHMf9iun4C7B8jjEemBNi6Z8Z8SSmRRMaTe",
  "key24": "53Xq17ixQWCkYZRef1wXVxB96JVEFLLw6oxFwdYUpV8QP3ytaKPHV3qRnZiGBLeJJg38tqkwX1Vb6JpjDREENU9b",
  "key25": "2uHNxQEojY8kTjdX9rPoXwSRhkRQW8zSGbQHgAQ6hSc4j4Vo4xBevSXFvE6VG4HysZgBV4qBcScewQWqYcCPkB3E",
  "key26": "3YMV4YBdJ5fwnNxqnHVwQfsFF7pihoorUZVGxTVtsYHm3RUizVZabV2NcRvUQ25Yv9Qq9AasFfz7aCiNEtFciM12",
  "key27": "5Aod6bdJ9Z3fyuSQcWaquK1nPq5e7UBUaSL5wtCP6VEcb1MtQWy7Zdc2ArXcPjkbz9gcjTHxe3zBQ2iBnn7jn6qN",
  "key28": "2oJGbnsNshw8p6a9WUraqfNSo8a1wc67gPrXntfj5BMSn6KDS1PGTXrUmmTE2YQm9tdfwuzatUYdnDTBWnZP9QjF",
  "key29": "3wzdXMnafCubsCKNKqPecxeDpQ5XkP5HSocA9eDB275jF6Rn2nDzVEcVJ6GMnsFPV3EecPKo23RLrF2ciBoDuPE2",
  "key30": "49xfRqK19iufmt49uE5V3hK5LRMvugtYf9EQUceLJjtwQv6PzVtSVJnbjCMZ17Dk6wQUz3ReRH4ndr1f4wgtTJzn",
  "key31": "4oQMQBNB6GSXDnALd62NSMn2PcPv8uosUY6T7TMW1a5gbmDqoLEuX1D14nBd9kFnZFUBNsBDpP7jKTeXLh6DUovi",
  "key32": "4kX9sJZ9YGe1ZkhoGXPks9yP5PeYwRn2prtHLa7kPKFtitrQHHzBEyS4Xfw7LNyHWVMAxUSMs2sqwS9oHtpDi7FJ",
  "key33": "298LU3ePrTNGSF7VX3K4EJJQDasidqW68KTVQh9CpSRigCZFwDdR7DhGc7DdUH79zLJApkR8ycq9EpmPJGu1PFGk",
  "key34": "pgst6tomsRjAaMChrKa9SATf79EXET6T1bxhqT44JLa76tJ7XV81Yqdx5L5zV4LQsDLjET2ppGm9LvJdUGec4Ro",
  "key35": "nskPH1tZTXMpg74F4Ggb19DbzWp3e9uvMnenLMGLfXv6CH5DAB1jGoBryGL32zB9CXabqm1m2x55nTKF5rUnWYe",
  "key36": "3mKkZBsRQbzXUupXqXCZa6D2XnSwx7hMgCaooeAYeMneM72euD9mq51zHanbDeRyjmbFryNkaKKhFjypMbKkLmrk",
  "key37": "548cjcFXxJDGTdcjLxEAke3WNo7L5pZT3FBXXALKZ736ar4wpvvY5N3eAb97ZWY7uRVBTu3pYC2zBy9ZwoDm7Vcu",
  "key38": "5rSr2BUxdreiwG4Dx11yLzWo8KYoNSkkSBjAg5sPWwLmQh5kAKCTuDAyNoWoKbKLER1i2wcvxrc8ZnYT6kuhQdaW",
  "key39": "67Utpy9aLGUuAGCBpuoxzPZs87A9PWfZXuw2NhK1vyjk9NSfhghroayYk3ytfcHfNrzPsS3xyKZpkFcmXGvci8LQ",
  "key40": "5PCtszDAAzvRiR37XyyacFHuXaJcSAWY12Vkt5asDsBUZ2y2wswwQnwbfx4dfhTLCUMqhkF573fLvHUBLjnUioqb",
  "key41": "4ieVyrPdni7b4V5G5V9adMdDun8TxD7PTHp42KYDpifjbrWY21qBf9qoMX9tarJ9RBFLnQettmfT4my7aZfQhVwR",
  "key42": "5ZScHZTLVNqv5YuZQwTdF6U9twm1EMYLjuQD1SUv9WMPoH9z6xZpeqsjG6P2ZYf3pTk46MRCGTD6TVoweFrNaYgB",
  "key43": "2ej8JYxxJ8CgtXLkR75gMZd3gWh8KzuFzhYKHc9K25XaWu1HCQV7YFXVjLQsSv9ihcdCkCngMRUS58TF5z5DQ7wD",
  "key44": "3Z3mS1w18EE1Uc3RWEBaW78Ha9LbxkNzAp1XjWMjmxb9FZqCNfotvZEkro4Nia4Lkv6RQTEVf7m4ESLKqP1Amz4u"
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
