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
    "2MMjTL9NsFC2p6qmuVSkX2qBT3gqdk5ShnQ1xPyHHwY2qmEGg81fegYzghpi7uZxLHXWv6rNZ1tKMio1SEZQpPT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sXjvizFstezoCsxPzb47p5dausWMSHvHSmimsBRfkDQKcTRHi1bM6DJA5BTQSYkvAdzZMP5DDgWAAnVmQyuCWR",
  "key1": "4Kv3PeBDEtPkt6qNdNQsYGjh6gu32S1khZFrwt4nWKrmLRfjMnwc8RdyxwkA8B4V5Vd5M26ZZK7ESzaJfxGsTisD",
  "key2": "2ge4eHwFcniFFAwsWiLeUqjqfh7yjXYnjZDEwuH56K4FTCcmuwUoZWFKV1ynpLMDiwTfjikSDMdA5Ww4JH8MktVE",
  "key3": "3xHkp9XEKdu1p2tEqixFRQ9xP53zzWF5qPRQDwtvgbcVEGguQk2JCFs5XsGuyHRH8Ppe5o2Zo2djsJUkUuW1oswS",
  "key4": "39LZ8LabWerzrEzDjsniJQdjU2rj2YBF3wi65xaf18Lf96Feu6rM9NXURaXCqsK8K5U91Gcit4vhvzqKWwKd4hFf",
  "key5": "5J8VjQryP9hqrKWrxTgJ174dV76c1KqLeiuKoCYjayc4oEF56pRxuzUpthLjbee5PKUL2duQ9nvwqyDR3MpJ4yxz",
  "key6": "2VWonsGDobWiBUFKXxbBZMxXw9mynsyPXgUGY9q4LBGNFhztvDccWuum5mzpF5RS88Dc9WXhoU93Wss4XnQM5W6A",
  "key7": "3sPZBfXGDDewPHJ8JafN5VdMc78u43221NvB6WNiQoseAJtqSioD3iQuK4i4HCV5HTKt4jDyAhz7BvuCcnZHjVNn",
  "key8": "4eRjDi5sZcBKd955Z6q2unNdiYWMZjQLbc7BErYTrNVFGfBvLP2mqQjPtSsrHELFiFcFbeEfsSnJFeGw9FX1ANYa",
  "key9": "3zZA2sL2N1oXfAwm8zptj4fkNMwX2Wd3u85RwQwJcHGUa8yg7Zhu6ruAgaYymhc72MbadAYko7nwTaDfw8xzk2oM",
  "key10": "wcbwbLoioMTGejYLAuLcfiohDYimDEMLDwrfwAC5fmqrpAPKhg8TdLMm2NK9iDrq4YTLBt1kHnPKAvfK7d8uwXC",
  "key11": "VNbicBhdkBA6L1gNM23z268BPb2nR8j82xdRti91nzv4HWDQfrqnTeF26yCCuYrE91XVc2xrZgZX57mfdDpX2zy",
  "key12": "2ruwfdcojuXEh2AJaXicMN1y7kFQUExAe3J8j6kwi9NyWPJ8mi1Ym7Nkfo1Qx2uph8RLWEgTKgsHgcf96aJXogH9",
  "key13": "5yoFZKE9hVmi64mkTt4YBGmjxNj4TMnvGHcVKyzL9DB3hSyPLz9xrKUGkFRqfcRC418XBE4GtenqZQ3H5zQri8kp",
  "key14": "4rw8fWCZJumEaS3BCGVHLx361kUsqaWvgED8p8uvqqDVyCPd5Bw5gJUPtAL8tKUX9LGbNvnmyNgLeJjMEFAYqqU9",
  "key15": "3RWtddh4Vz5G6nA1kFyvafZCY86FVqzMHqMNGpGtoTYsoiMhk82i633M5JrMCpb3MSt3zmJZ65S4pZeyryMVhKfM",
  "key16": "2Bw4f3oJWTccLdWdSHKVhEX8c3Ygvk4rRVWSLg6fYSxXtyieNHG7idRrf76cAfpH7DW5L8hqMuQuFpco8rXQigkW",
  "key17": "4jXpTzNTUp8nazyfZ6pBSF2MivQk9Xq7pSW6URPV1Gz43P5cnjjnWpCPMpZmK5Nk41xHnfWZfpr9QaoSn47pwMCA",
  "key18": "XFU2AZP12GFjQMVKpB5LTpCXcPL3eAJX7ysUnRhfcGXC32Ap26G99zHwjMdgQTAxqd13WLyBGjc5NxUnxLcGmsa",
  "key19": "5MziD4d7qNWsxu9FV4zSwg2cKowftbvjWWzFcV9uzAdus1ppojzcst5A2dDZzZxdGoPSWh66TGX3LbqYPYtHc8t4",
  "key20": "3e3PSCphoaUnWc9EC7SPKRzwTrGFS4pixugQKCW7ZecJxMDhcXR7UXBqqsuPLZaKTJAf8VukKFwxq1csBDhjbrUH",
  "key21": "3yYH6XRDrTsGjAtqvfckzeBkhtQuKhqfhvb6UV3Rjg417sSLDdARrpfwJC26jtda4YPddS4MayHzE8NNXVT8JP6d",
  "key22": "5VLo5FW9AD8D1V17nxhRKqCjmgmkid9iHQz9gh5vUPz5eKHgoMos17sPfoieFLyNzoDziTA7PcreRBs8y5j5BddB",
  "key23": "558Qhr8KwdK6GgMZaPsyXS2dbh9rFhbi6Htu91DhfnweULDQYBxXFdKWpeAWUMmSj6yct1JQyQxm7YaCWSh8yXto",
  "key24": "58KRsocjQAtVUEJkJrgrqJx8ubQw7m3hQ9kPw2Q3iZPPhtG8kygnN7evFY5zUbbDXMM6Ds3PXqo9YCfvLanRKtbB",
  "key25": "5AUS2PnukAaSxnf9CrYsx28DV3CVZZYc1NagtsF9B8skbyZx5Y3oHRGYhS5mWxNd7dBKmKSrhbxZZo7zALB6UX4F",
  "key26": "4gQNHsPpX3CXuo34zGAQanjrVigGLx6z9exdKNm4KEDc18chYERhigosikJCvZFxRY6B78xRvgPYzMzPxXbswsiy",
  "key27": "5yFb8QQxxGLwzmHizCupDb4M6cm9uR5zW9HJMsCTAd2rvuiVt1TXyad6pqaggDVeehFgJEJ2J5wATGAvgWM548Mt",
  "key28": "KwVDcevjPCwBmsPkx1TN2Jyn2eK1zCRPLqBoUjK9p74EuoMYWJQTyB8mKD48LysaXrBDqxEJvrUcNNyASgvgea8",
  "key29": "c5M3WthA9bRAdm2BCNccYbeawSyEZoYuUYQ3u3nZ5mfbV7FqH24eTWDnqPhN7ETXB8eKW9AwTENv1cn1ayuJDAM",
  "key30": "4dR4KbFWnFBYinaNvDLF8SDiHHHSxpA3CGhL83JDa11CNpDXrt51ZefED9TMjwZd5hfw3Ra618G8h81qPX9Npgx4",
  "key31": "3H8PDeSfEq1ywH97ZXBZLjRdYfHQbqj4Bj1JgxywLVxMzzXQJM8StZhKDMmn8sYvjuVYxzA7NTCo1oA3Yz4mVtSD",
  "key32": "4gqQmBdGHvit48jMviY6P4no3cAJtBvfkWbyegDTSMZc4ZkafULkgurzoFZV23pCezQhVzR7LTm4YVQh93Lqz68j",
  "key33": "5oXVyUvqfwKX7kSwMTTHBNKoeQ3A3Aq7Wzmk5DFBJavRZseqwtzLnbvHDwCQ5WvKSpKsrVJ6T74ACr2jzYparHRe",
  "key34": "4aXA73vLhu6GBvK42Wey9MmthAJ2oNJsQK4SNkyAHAWZnToeKLD7hxCkqwdqPqn7UfAGjg4BV877AGRbYDXQ6KVw",
  "key35": "3ea3tEPaKELECg4gNwNiyLvMGjnRYJFix6wGkyECDjNN9STcTd6w4vDyUXCNyM7FwDrYDJsYsbkRusUhhtTWF4Lo",
  "key36": "4smoohZdRpRqycWZfiR6FaHTmbG7iFVZ1Pd2fqeUpUse4AB4B7R916YiWJQGjSxam6XSit3D6rqd2YxgZtXRonbd",
  "key37": "2R3XPsn8rdaYWppPCU4RWE3Uqc2KXVavMs7aP4jVP1Byg5FTYut7JVa9NAiQKfe2nHMY9gk5B2dL9Na6vEGU1L7E",
  "key38": "2WF2woNWygoyhRHbrfeYMZJBi6D8eE98wNunB9aS9KKWL2tPDnTwCqTrUEn6Wuhm36m9m1HBEarXeArdxww97csM",
  "key39": "4XGcBHRcDWChetTWWsUssCpiVnxZpF6JWJaqP1N5DW2URJyE9Jbqrc1jWiU4ZaUBupTPZ4SNgVjhGZt4BhmZc2nQ",
  "key40": "3AZWuZWSfJuM5qtsM89C7GV2u8UAQvY2L1S5nZkfA3TSvFbd1Y77QH3YfCMM2rQRd4BRaWe43dArzQUwmJQJguGm",
  "key41": "fEWr8T326p5WX44M1NtyZVgmqxUUnMvLaVJr48EMKdKDfQW7WYLQRwU7chbFmxVqPw7ZXqANkZr6hMRP1UMn1YV",
  "key42": "4HuCYBsWy6RmnFhw9u5cfVQuKCSV6xf6AMc2naoMdkgSa61zEpG76fHvwitJAj6UsbtvcoMyo1F1xGp5pjBR6RmQ",
  "key43": "5YwGwhidLHEQFC2zFAFBRQp4hYZeRjLmz6m71ixoJHw7E8jUkzfPV48A3gtnzyfHH1SHMST3ShRoNKwd13HHraW7",
  "key44": "2CiiV7TFoGMRk9uz53tGcZTAQVAXX3fWPsSTAW6YYMbbKKGBZHwqi4onDpbkJDQAgvnFJ4KkaZiDBNT4sUL8Ckjt",
  "key45": "3eBahMi29oiKLt8rZnhebX1bWBqiuVwfdzYcU8wBXk89g3aZcJsgPDyFsA9i1hprJVkBdaEzvSASnMTkvX6E474b",
  "key46": "4xK2zf9Ai3ENT5RnEWz4Uu8Gdzv5ydpKAYvz1tivjDzStSVKpm7xC3pJks3ZkcB2zzCjhctfMN1AmUwoMcqNgbyc"
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
