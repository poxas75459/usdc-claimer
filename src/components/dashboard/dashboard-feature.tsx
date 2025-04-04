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
    "2BGVxoVxJV1TZFrBHkCYFWxvNvsYg1QitoJVkjj7RWRbbjYiQpDSVjyUajKj1mrhf4qhejYdZnWJuBcNSmsqXJE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kANhMwJuBDhhADSj5NhxPS3uR7R48frd4mkogsX5c61p6KfW7dbMSVKZkUmyWGd5JgcDo3j96Xc4cpXog8kKwjA",
  "key1": "5nKEJi2qSeXUjHFrtsYQ6BqXVEwmTYfDW4SEnJRgfqKHRkYWGMQbiv8cectNXDPxm2fekDWFFsNxQ48WAn2w5bDc",
  "key2": "2wMPQYiP5tM9zKuCr7dNw39jgLNGu7vSzBoRfyrufix8ydvXLzHQkUqgW53UtnEFGxjkbN2jmLvq1aAbBuwbuSzT",
  "key3": "3NiRHRTVSaPiCnS4Xj8Q7Q91DW7dVTeCPE5dtQBnwDhd1mrf5D6rAq3gCap3UpmZCmiNhetdQm661MczsjMxhHpV",
  "key4": "57oPM7ZQXTb2ctXbckMJN33E4wTjeWgC1q94gwof9ANHBNotdTSPYWnZmxh1JmJGNmnTsgtcBX9jYoebFj9E6vpL",
  "key5": "3druFDZWHSVcoy3bgAxdM94fWmgmhHXASmoXb2LwPgQpdMa1xtc7zcmtr9VStTTvTSQ1FS5XaAGC9wVJqZreabE7",
  "key6": "5GVYcntP3zRakVo9gdhacffJFyLTrSQZS2bWMgUJPP4DLNQSWL14bbuC8xiCrJrGH2Gq15givF7TzGM2e1hJtyYJ",
  "key7": "4rxgPDoK9RkzgB3tnRUT9mLbNnrko35364JxRsdy2C8VR123XqBvGe8d72RwbmucqK5SeussXZA7HdTpw5FwbHrd",
  "key8": "4ABy4ijhTSDctoipGdgkLi5jKQf5qYTUphafmSbAXDeiYYCNmB699d8zHMQi32e4Zujn1aPBNN9YoUKckgwUttxz",
  "key9": "pPtWs55vyaMb2uyWUC1QPzdRRBzfhGw8JH5cYppFVHoPGsAagPXJUhHmZWbCEaBTbCpWybUapxTCaJgw7dXXbkg",
  "key10": "4dHTeVfEvqb3wTTntBJuUPgct8Vn2KeQTz5Q3Qt3HuBf9fPBFg9Vhsgtrp1fD38kjSWZ6gRCoBC3zNWQmVhA22GT",
  "key11": "y2Ddbj8GRTrYJBYYGZXkzsgsT95nwaMBmJ4CcRNnByLDbXVE1QKCsGcR1YLJabfqtx82Mb2gMnqTCWZYZQXbX9x",
  "key12": "5AcLFbH9KZSG1eVmdNaLDuCg3K5QcAiaDmQHXKunAhtqSor511b6sCL6onLWPc4XAW86sDVNCazWXTrUGsMPZL6W",
  "key13": "7hd4XsmHWF3MEvnUtpmfEMpGKJSVLKcLxnmNWZrH9yGZdmo7SMFc5uT1tS6CXDPNxtUZCbCHYnUccD4mFxrgAUd",
  "key14": "5AjxsQ3F4Wbav6DccZ7rSMcLoe36J7yUCriRHn8nDtZV7ngzEzzuZTBEH4ApYCJcxeVdNiPpxCqVWWQf3ytCnVq7",
  "key15": "3ukyLDjTG895abmTRfqm7Eiqeni4dT7uX1E9piAztkCSXzmQdK1Qyr5zntjp2Nb177bBNpG8fhHFjtkdkUWFDaWq",
  "key16": "3JYyaEek9ww5cx4nggb73wxbR8isPVTRCd8NuZ2PsSqAnRd2LW8PYGhZmJZ8tDDZEncHD8FFizNeb6NboFtG55uD",
  "key17": "2RNrGyYDK5ep2yjR76SWqUfwKCDpmBCiJRyDFGW9muYkVafXiyCU657BxKDwJ7LiVwWggwVgnhfCgutzQsh1un6e",
  "key18": "3KcXg3XJtLbbF5AWH61kD74ecTnaQSHQqs7XgioYb8rb67bvBYHaTjiXgEFSABtnV2ex2NhzwsyrZM4iTGC4u7L5",
  "key19": "3MGLzBaqs1mPTxuY9R2vJZCSX89g6wbZt2TS5xHfi3Zxg5KHDcnnS9U1bBqPJhKN348v6oG5v1DXzCKYs1Zncf1R",
  "key20": "3ryHB4SEi4UEbL55cSNRD7fDecK9LYysMGYP18srKckXCZ7tiBYDat8WGb7BTxmepufPvEfzQ9hrrc4cBBVgrRkq",
  "key21": "2F3FXsBubT4mmC5KUq7TMKqQ5m6s8hLc6Te9Hr7unRwxNGu9GrPRigURQnVeMFEjZt3KKfTi3RFPFz3ahrHZsT6S",
  "key22": "3vvFz3XUtHsrQ9WoBinoqYsq193VAwrU8AYCAfZUZqyKhoA6Mt7W7QiQgfUzo6GV3rPyv9xGhT2mN4ehMRpuj3hU",
  "key23": "5DLJPTaGkoBKb2qsDUrz45qCNHi7mQwJEAAov4Vbgg7X8qZfF7jr9AKftK9ZGAFAnHncGuaLi5q289938iANnYwx",
  "key24": "5yzyF28NpDcLUq4YtQBfip7BSUCxqFroTSwwvoW884fCmLx6RXqjXEkNyYWcjM3iyLpdKQjoJs8Vs6a7JTcvt2qq",
  "key25": "5ZmbnLPsZmqk8eJJw1PfGsWtt7K1ydRJJRbEEkrvoMukJuCuAjMDUETCxGeS3qJTbjfvHx6UAuzG4RFENNLGXZpP",
  "key26": "2wQKefW49A53hZuE64VAPYefUw9qATkbycPqXb3QMPP1cbtBqaLH5WQcbQpKFAKe4AbLu78Ukqiec66MQSRDNZfx",
  "key27": "91iSfDTnGpAvkFaTzSyHrWzZa3fvq84vGaY56hsFovuJRopTiQreZFDuceiYg9aMieF9v4rqR7fkShxxvJhB1zH",
  "key28": "5t8n759UUN18RQX5bogvJKyVQ43yAE49XPYRmEqYgQqM3p6xR7o8AgofvTvBXimft1QJAVYgkxGaZoCWuY79V1Re",
  "key29": "4hDjSwMxjXYVcb3F6vCHn38GAnVPLzVDpvbXNGNq2mxn1kTugK9Ri7gfe5mPfzTUaocCvmQcajiutwNASSjLBPPx",
  "key30": "HSEFB1DCy6Zr91iSBZLTGfD9bJCwHhLdoCAeVEcRQW2vdD57vJAoNzTr9BT9wxH2ACRq7c6GBrxJMGky54FhQSp",
  "key31": "566RBrvz9oeX6vi3mKF4da149QumXvfgPQVAdeuAXhBSFc4EtmeAZ77cWB1WfkDFCoHD71wKNH4NxoxRTPRG7afK",
  "key32": "5rzbt3HeAENPaUJQesuPuNUzXuuogrN7bguVhA7pjYqMeBJYHXrEUmy5Zy9HD2G7bvyCD9DHmMg688V42PvvrBcH",
  "key33": "2ibbwGsFSkQ6Akz6tKKK2cg6Z9Qig9srLrDagkFM18gmxuxJ8kZt9PihAcW5gMtfckRne1pXvkH3XCt8j14Yw7sR",
  "key34": "3AG6tM71Ug7XQirurUs2x2MEju9trfWz9MqwZB2eCG2pJWwuBTrHkqB5WZG2LWJJ7yWGf7i5t8aB2Yh6jAPnkA9K",
  "key35": "3WTdFwmYVMZD7PmVyd6fG9EoKCh8ym9B3sBwGGzLg5ojfmuZkBKDfSemxZwKGJokmp8egEEoZbcEPmhMuDtpct14",
  "key36": "2ktLuKMgDgYKrzqPykXkHwPPDPRZQyuj7JJYU643dC6wSyvaJR1F6NhiDBYyPgt3V2r2S4rYzPkBfuRZbfbjVqTZ",
  "key37": "41xYFN7YoXbcebfnVLszhp2Tub21YAtBV2z27MKMkGRtY55XGgB4B2mQ5bNxLy2yC9Skk4XQcTjXS5RY7SAC35kj",
  "key38": "25KgvZbeEThmR2q5JraZ1nE8ruv8GWW11GE1tMLQ9KXXqPCTKJyax7oViCDp6JVCuV18X98YB63Wfw7RrUzto47h",
  "key39": "5EYrxNjGiiUaY5yrat5BQmuHgGMCcpXnGWmY3EzEC3ibqjfoWyuGYS1KeuqXnDhV5jvS8juLBLqrMfnFh5KvfrKA",
  "key40": "HWefqJHswz6kmKu1AxBmThkR2d8ef9fcwUvg8NVeqTF6Fdxgq7PrpV6hSZXEsw6CWDhB1Zam4fRPAvsF5ewCJq6",
  "key41": "4GA48dPUMEyhMHb4A5TsXu7UnMZC77VPdZHLa4qHRVjCrHSM8HfQoeWwRj5PD3pyJhA6qNL4gBXNEDFRvkGYbNNW",
  "key42": "56gbLsNv3UZDSDLzW1o4X6egZ9CbL1bYKK5uFTg3JfbfRuVba5qZSHPDVkSnuJ6M7DYU9kfSFMtwRFKWFmVFmCPb"
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
