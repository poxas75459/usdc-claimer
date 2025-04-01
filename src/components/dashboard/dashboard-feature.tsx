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
    "bNjR2w6Foz8nPAyFjFduDZPMuaou8WhpPmDdkn1YbA5DopsmCJeaevvim7EDDCucNmK7zM4iDyyArZ4yxznwXCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5riMPEKg7XW2ky7JP4DB66S6h1gjTRnKHVE9mxcbLDLuBLCkPMp5HJ6nS9goEGmxJzmLy3M286iCigNPd46KCvpY",
  "key1": "4fTPgpUo8DgzTWe8o4KmqCkurKuoQ9vpuxddSykPSXuvT8dTeNDJ3bHEJshxg9bTKRNnmC3aJynbCR34RpGeeSJp",
  "key2": "5EWbv3d5gSKjyYxqecVeJ3Qp34HvuhbKb3y6qHviK8kzBiyKEdQQoouPvgkQBPeWeTWaBgjW7Qyc53cZEKRZtpCK",
  "key3": "Hta1DXTcuNoaqFUt7Fa2GCMHqwuWwdV2BXcFvc5z9PLjwoVsqB1FicoCeRxSnxR1J37qToDbHVbqPvdM2KMKbz4",
  "key4": "4h4Hbs5J6Bgc9oBpiaMb6cTippLxKh1c6DDJvDgWeWpUN5BNsp7U3m3msYmMkLwzwmDTsaMJE4875NaTNRp8rdfA",
  "key5": "mABg6nKNPZSBct1bLnZjPKZffaPwXLHqnpbnGx3XeTdXHzLgz8mfUCvLXc8TAPeQYihjdQQGHy7q7SzybauVGgC",
  "key6": "3155ZJvwgRBeSpyR78PpJnaqa4go6xrigcLM3GHMT3e8TTPR5ANxrJhuDMCZrnbng2rGGRfX1b5FZyemXujzrLA1",
  "key7": "Y8CsW3iLp8rrhiqnAKE1hUJq2YiV21JH32zKAnFvzxM49mBWWG9XYs15VNoNBX7nXKPaNdUDWfC5suZnUVXup3S",
  "key8": "qih3JHWGo1TUcQBAz4BdP6VJsq9ASQqmkoNXqsiYAX1rqc4tpqPYPHUtu4oxpv77CG7fyMZRtZ5LGWUVuQ5g8Ne",
  "key9": "29yjMzsazhkQ6u3mua5W6qfPENkuxD75BSBLjCRf2WNJs88mzR1XVfFXRtW4osStpGEAfZcpyNQtfjDtCKEp99zW",
  "key10": "2XGiNwd5NzHgVmdkMX2y6N857Yrr7kZNJ5JSx5C39nUKtBgS1D9rqUt93jp3ent3CRV3CEKKwVjmLurPMmBxcGtM",
  "key11": "5WL89swMRFg6WLySh1cHfnYkiv6bti87q74TV91aUKuPYrj9r1xPkJt643NtzrwSWmW3wT31We4fHb8Sd8SDydNv",
  "key12": "3LYaHFVvzWUaDcDPwVFFjAK8ijFGGLQQasYCyPr7PMhqZZGGWkcDuzpGTNJFUpbwizHLcZYwiDar9WNKUmhhJqsj",
  "key13": "4o2n6p7rkR3bwAtmxsY2LzianpkGtkjtKdzXCiQwUaZ8hkNujgRQ7xrJBDqNpNR1xT162ZLHNNa8LCJxmBpcJng9",
  "key14": "44QsDuvs8mv3bnkDnhGHSZ5XJz63HKtYU8yksB3yvbBW2HDQWVhjDDv1Gp9HmqApSJKsesaaCHLtmL9kSy9DHsQi",
  "key15": "3aWarEXMm1b8fr79Npu9itk5M5zGMR5sysBTRokc2vscsWSpMccqDthumkuc9KoJEbUhXArSa2vFgytE8z3mQrGH",
  "key16": "2Vnv79BT3nPM486fQNmy4x7PhE95cPt8sPntQxYQfh6VK82kDnrUwhzKESHuoBZdMSnxSFxQeXGpYd7BLY51Tjik",
  "key17": "36qFtsRatBrL1mAHGmUX5kwTeFmNshkqw6ZzCfceafeouu82EEF4Jv9V7XV8b5ZsCeo5DLY1uvb3zj7U2zTCbdV7",
  "key18": "2jAUoJa26DjpUmWYLjWhFHGbmRJyd8yigADJdAuWbys9hEhzk84Q6hyBNWzY64z3LBgUUkqe4bVEf4zpcCNvr4AT",
  "key19": "4iJhpLo9NCJ4xYxUk3t4WpzrzgwQkpzDRg5fr3a5pBmWvvHiKE5a7AuUVDvQsXiWoGAt9zvwRCYCK6eVyzznFYCn",
  "key20": "NZ1ErgdYUjdm8mHYx8VY3Efbj71bnyof4RVUTwYPHojSTHaGDGiUeKso7m96Sjof7kBiTPmL3DDcdPc25Z7A3yy",
  "key21": "5wdUhXNxXD6ahFgvecCMfX2z9veqgvRBA4Jr21Yk2xwDcRnwQqdZ5XDkT5tbjLXErBtMGoyMyhB87DraSFDCZH51",
  "key22": "5x41ohq6G5H4q9SVDJR9PcK3ashwcv7XytLqm6kmVcxNezFCG8buXRcs6BXk23fuEipV2RgED63i1Z5XCmavUdbi",
  "key23": "31ks3DXioc1WTn2mE6WoWCw9nEFWP367QUunvLVRgMddCLnQB6aXoXhRurS36rLpLGvSKupN6qxr1N9XzZHBxFMo",
  "key24": "5KFahjqbKjgmGTiaR62UbsF32Mc5DnppUg5qP8bZgAGz2C88wSXPnCXt6B5ssBZ2JNzpLvNLNPeuVZWpB3GugJGr",
  "key25": "48hARdg8GkKmnXWGMcKNXrhpFNwpJ3QeuK1MoXD6YVV4ATeYg2Vip7MKGBpdvW2xcYtYgYNfePpCdU3fBdnCQZYK",
  "key26": "2z5w7XG7rvoWZFbqbJg8VETgQXJTErSagitPd7EHJaPuN669Rb6e4vqCwdUkNSQ2XBqVk3XCcpn6XGnEYUmFYhEz",
  "key27": "2tquovXehVCJAntpRT1mzVzeNd4ixtiu1atyVVJ7CThY22CS3sWxBQ3jqhrCMQgHi9oDRDn4G8xmDKjPh91Q72WW",
  "key28": "5NFC8cPpppX8aqZi2gKyoGdBc6MuKm4svtDxhmnqFHbdoy6ysAr1hcaLVGnz11vP43iuamLa4p4SzD8gSyxDAUHY",
  "key29": "4tzQiYB9HZQyDbBQPHNA4hFWtn7VKJDvfzneH5kNR77jXxLCYCtoUWUPBDM7fvXws5YssbfBSfURfWcy9i3u4spT",
  "key30": "2uxigyKfP6m6aueYRUiMhCxuJyTBLhAsJxxCZyZWZ5y1coST7RbXQn544RpuWEu6Mop3RZP7HUvpYPVYRNi5vQkw",
  "key31": "4wq8bi4kcC28WkqmwwRMwud9UJuZhm4xL98QPThiGrhfdKh5v92jJt7mGD7BkKEz2HH8vGabLH3BmjojY4CCupjh",
  "key32": "4QKkfr1PJ7doFH1m35oggrXhgvVNsg4qonh3ETScZUAiiiibz53hw68K99EruzwU53CS48DeSmKg1Q3Afo77SVts",
  "key33": "2vdjadehcXwo3L1V8gTQXhr246vTT2PDVj36MNixLSfAtRQY8rnYMg4iG6FTs97ZDpGzwR14ZP5VjcGjvZNn7PbN",
  "key34": "5eUCy4jCQD4s4Tsj1FpeLiKE1Wj82isT6cmjK3xDqRCmDTcygE4PiFwcPgpC6ExWs8ixR4Mo8jV7Pq3LMjuZ8abS",
  "key35": "56iiiMCT48bqPge71tKN5A7QedXvtwiHPVjrdcEKYd3jzGiusA48Gn3rcr9RZGHquhBxKotKeyh74H9Gprbfmq6d",
  "key36": "2aqwwfHCwHffy6DU4s3EmGJ6br13wzBZmUs4e24DKA17yRTWAoPznQiLUx9hWyWAYBuhcwDVsVf9X2T7uY5Bz5p2",
  "key37": "2L3cSRgmffuYxTQuFXUXDg76iZfvg7jYPheuZHWWdvdCgxaZG68g7o5hbRqs9hYygz9mwg1e6pvNJuB68m8YgaHP",
  "key38": "HxMtSDKb7YGyBKHqv5UBxtjnyVmsKNZi6B2hi7j5L7snCxz7oY8B43ZaNZ7cYZ383M4wWshEMCZBJgGNok8kPFE",
  "key39": "4aZs2wGYNShLgjpFyRnPzDHhxpNvm31jBY1y1N3rwCHjepQKLw8FzzefUS73RNSsJA9SU2cuVy6rWWrK2xiXuxsa",
  "key40": "5KopRGTWqY6si3dA7KYeXrXPPbK4jmqD3kaZakokMMXaNZ63AJw9cCCn2LXWKXbMnKiFhoTpTNi2t5RBKSb69ZP4",
  "key41": "2BCjBWgwL5LWjosSGsoM9SNa2oUi53TFj7hEZgNexDMRgPLc2XRCZZ9oteoRo6VzJsPCi3wpCwS6zhonS9vhbnCd",
  "key42": "2PrmAZraLnBXiPKvt6oRiCZP3xJVybTcZVapn5aFTJBG4HRVBDJjoMfVYVwuEiFziQjnfC8etb7QG7W612ijkC7x",
  "key43": "6146b9UHafz34swShuisjDoEEraPuxw25Sc55pkAAMAEFTzXMHWAGuVLmjfdWFSGaUCsemPDt4gJdvurQgVQPrbC",
  "key44": "3nX7zH8twFXd8VLnxQxJwf2bvcshoUBR32TN4hXHAFHNBxBvcemPN1zksPwBD2SD1mBJMV1B1tJD6YZWxBXSjEaW",
  "key45": "F8EEF1oNXUMXiHxegAit1quQismKcxh5Bdku6BMMFg3ZNfRRtCg6Lxc76AdebxniWZaRh99AMTCf3KpgCTYWbBe",
  "key46": "5yo5ZijhpTAxC3R7GQSm7no1HGPtt3ikCaLY3qincq7QYR68gRve2uDQzJoHrykwaKg3yzutQUBXb3f4ooJZKpDu"
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
