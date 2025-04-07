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
    "2w2foYXrSHbN7cQ96dz79QRJU89mNsu3LUeNdcUwNgjAiQjwrWXLj63BeVfiNgSmPS91NhqWFFrFruYwbdWRWkFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32F8wp8qjJUoG6ELN2FiEmAPbsVjDA23FxMtV1F4VjaXJdueu5BitBvETTpRoAeaEqByrEfQ9BgujWt11eSvrGSv",
  "key1": "5r8rEEmTf7xPjHcpvF1cn9KHpNuf6ZZC5F7x6b6dUdoD9sL9DmVymyx2Sa97utrL3Ps2CedFyQEvLvXxB3WEpct4",
  "key2": "2cT1sWmQrTHQNxh241bJSW3qWwsqfu6DTrj729jguyJYp5vTsMKMxNnr9qXGJ3WS3r5NCMFApuk198PkhemMSjMJ",
  "key3": "5EKRn7wdmFvTBRVdpnLZBZ6wRZZmZHUTUqi2McTJFstcpUd8WgtEDHkTeBfG6izu99eWdeFdCfNPqNMQ6akeMsJN",
  "key4": "4YXgtG6j3NbNQaE2xHhLUP5Z22b96fTwqC6xB3f4678595yEejQRurgpiwcJVJkj6f3BpHiWQoWgQu4PzgXE63R1",
  "key5": "4PRfpwz8xvMgVdJPLrpAKHH6PLchdc2WRCsdTFgzBoAoupyyqcXuTHcsqKVkVii4vDo2GkzipryHEXTcQazdVRgm",
  "key6": "3FM1Jw5YGFHr9TTEUSeLPS9UBAFg4Cmdbf3q1Tkip15krBr82kkqvqJerXfn6cUGKD1pLmNgedvSgexXbsF2M8A1",
  "key7": "33gn6d8Yjijqr59LR5Pj7GzZLZRqma16GtY1ikR7RCGwXPSj9NKQuMVq2X9ECENugwkBqccLnKstrqtGnKxoaMTn",
  "key8": "5G6r1bhjgo2NiFY43Aodqkox7MEyWaag2bJDWHHhQiQGZ9eCYshdyeKhNM6Wi4PGkXq793waVha3Xo2Ny89ug95f",
  "key9": "5CoScCSJdvnLpa5m8Zww3niDKyUeX7t48uVqeMyKkrw8adfE3ByMmMr73XCgnbxsDthEqGsxN1t94w4nhpyA81UP",
  "key10": "4q3DuVXzfMKnZwac21uaXJKBmf6ph8HR8p7jbcwgADMeuKKNCrfbEctPD3neVAVok8WjhGseHA5Zem8DtWrz1g2B",
  "key11": "5S2bktrF722UXg8VQ94vaTZNHn5FnmDzGpzLZLFf3uRuvd2dtGz5f7v3kARLuL2jkY22Xzg99qoTd13KHtdqiPqe",
  "key12": "2YRpC8dpdQvaxH8H4ZvzMjqLEcYLp4EdR8hEaTzf7zbphoxr6q5ZwPDX4vVkDqoJ3NVT7you1jnX9QYdstujyfyo",
  "key13": "5ac3pipyTj5QRxDwXPPWRT5enWWPSRvSfJ6GL6LpNUGhCf3ahBeE1bed3tJbh8effmiu6fiLYCggr777WKRQ8tdA",
  "key14": "54TJXiiaBiSV1eSenSukT9qwmdEp1nNDcUsca2GTo6m67JS7p8m2ERwDF9zmnTEycJR9ffhbCkaFoaRK7PYYSVQx",
  "key15": "2UN4TaPxs91XXUudD2rMApXCqvWmLpesp7t3gFMnHSQsPNMWJwtWPuXCgsGBnUis2ZJQvGqn5UYsvMVyT2Y27WHC",
  "key16": "2ZZDJJsSqX67aMfcyX7MPJT1fekgY9dDVxJQEEKWkGnLjkqknhFYJ36wiFPtUbHAdebseTMiMeoP2qqBoBYcS6nH",
  "key17": "2gjbVFeTQJ9WoRY7hMYUfynWo1vJNBrFCwrdPaCc7bRtQmrR3uRSaLmiTrVQys2o4rAzMpmg5FtpnoGiNHnVwt7E",
  "key18": "2ypCTCz6a1cRw7AxiVririF3ETnrTJugrV4GPpvcg6exwFpdaMALRRgh8szj7wnEjpdJFdaFLLBJrQq9Qrqyt171",
  "key19": "2QZu27mZGRyvZzW2ra638dpKYBGpuxKn8fnN6NMWZJt94Nd88n2wbMcSYFm3BqEehXuwqCo4pmUf2EkL19Btm5yd",
  "key20": "4B5svfDoKfmyF5ZNpnGp5nbMy2QiRtrjNhtR8bDuLPubET35CqddhKZx32B9zhYr9gY3PUMRmek8FY9DDhn8qrjZ",
  "key21": "4VAiZ1r7KuSYRTZoNY6V6dmSx5bJwhuEc8RRt2vLaDKDm84VfHD1it5yfaRTo1qZkzTaJBrEgRF28Rzib46zBjnq",
  "key22": "4ZBJQXLkyGX7qAGkdWAokQccT3MqnEcux1ysRMEbujvRaEo2GXrFakN8Q959VgGJmWSgcAKEtgt1LYSijutVfgen",
  "key23": "2twXPvtEjHcUVKRLocub2cRUkq4swNHxJwo26bkgvwvvH7rF7ubmkM1xL6VZPe5dSQ66QhJUTZmKviZRCXh6kdhF",
  "key24": "RWenRPk1xc3rsC7L3Fc6pmB9UuRV6cpZ3y9zZFSLFvw3ntCFJbodABEoxNCDjKZv25QsS7bwpo5vG62vTornszf",
  "key25": "FUjbM8VQCuQK1HkSiXt1TuFu14aKVKmfimprAXVpug5sGHUma1LxwpHmL7KnaLVQAs1dwUncmvjNQb1rY3K7X2N",
  "key26": "5N9h1PTMQ63c36ybv11C6Ny3ZutjDhnS5u59upBmDhh8YebSbNaoixqf35vTkdSx374CpjjZ4WbJgiWCMcZFETzT",
  "key27": "gRESJ42pyCczHNVRA46q22sYMggpCPPqPbF4uuRW4NFuJCjCyxQmhkVEjmsewRDdvYx3J3q2PNkmng2RyBoJmev",
  "key28": "3Gmrt87S6eGDepqaMPiEVegUbeXBxNkXwn9tYXKhWV136HBqqSeTKniRa7ek7yoTMJqGZ2fRqdVnspquuzNoDPem",
  "key29": "oXFK2gDmt26s7GYqTdNrJYjtthWDKWePAVhJp2fEMMKUsFRLNS8Z3QQ6vEnHNdy6FxwGSJo6DKKyKa7pEwyn547",
  "key30": "G1jchcn1ogEw9GScgHF67Hx18tpsSb5XKiECgq4hjA998xNQN6CB9QtvSwttEhELosry6FhmesrsxV21vNXmu5C",
  "key31": "3UqPiuvfUcy91mn6BJ2aVZBJNvv8WebEkgmfQMJUcy3J8CgA5zDFRo4DZi6bUMP2cBDCm3dH6n2ako29dsKToLwF",
  "key32": "2dwaic1TJ3bkUtMWm2qKtPpBhKhKG3pKWx6u2ijKd63zHstMp7ShWczoRkGCQDxwqNRENoTsLySrsANNKvG82f2j",
  "key33": "3njoGvdaRkF78DDdvuMSFQ5CcUpakbLHTuRkpaWmYh4By35VtGn11QZzTLYViKEjGNvkhnnecY7KisjTEfqbmnFJ",
  "key34": "5LLDSzGTAtHBRp7HMSE8M4wLx3Hy1pTQiVqqqjN2xhzKxcNeCFxYjXB2qCKT1S7c1xBgSaxwED8qQPYgiGkKVAw7",
  "key35": "51PyAXYQuBPyBwEehkvWrsLMgc56P3bpgMUEGnB6qf4jH6fvLxNeQwfCSBNdWDfkR7BQjPonkqMZFg6gs4e5b1fD",
  "key36": "2TNWk8fyQT8qGqHfB3rj7aoDiRkk14xfr17kzSumyDDNbD21K4EB9h6pr5pycmAXuxzAhyrpUsPhXmQ3uCHnH9Da",
  "key37": "5fcoSCGk8baVPUDfsGpzwAhYxCnwTYeFFrMbYbX4B69sSJEWiDYEXWxoyBt6od2XFEhTf6YpxLZbUyfAJLnkvREa"
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
