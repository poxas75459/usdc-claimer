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
    "4YmpXSKXBgKCgRL4Za12FGUKb13gAB9moX3o9PbPoCkzPDwiSU5cA4riSYNML7JAnbhsnzwwPPgRdTHrcYU2xbnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNAf84wXQf7jLpCuzupe5tLZRQsigPZj42GBGeDyn91WDYVXrCtXLWQYg9bDpVzZdx6ok2b6JkTNnctrWxiwg56",
  "key1": "3kv3ySEtWbxTca2SFYiKmCSKDZYDS5e8tRnFUSribQyjenXMdNf2YWhx73zKfhaL8PXJgo1k8L3Bfvn5vf61xseL",
  "key2": "cGjAXMCmNce2NodgMfdVvq6rgdgYoZQds8DW7YnRsDpSK87pKtizfZYFsgprG6E5GASzP81hnqy4AVPnT2QWetW",
  "key3": "4k8yGbbYw89WWXyghaaeVL8s2GCyKxmrh7Nz3z3mfqKfePQn2LJgV4upNXaTSVQQabg7DV5vXGPZfu4mk1LLqH9f",
  "key4": "4KBkQypGfoRVsSdJ6ZBUGeo72FE4YQZpZQHgcJ6RT5PTV48beSvuuKv1qwYDor2nsYVJ94NwZF25ihWZYU6Z3LvA",
  "key5": "35CMuqtHDUWvH3muYtZNAYB7EM3MUPStszQ5C6bnUREaQtCuJT7sjovgzZqNc3EHuxWzPiGiVAFwm93nd2BEcXSh",
  "key6": "4sFVxvodPek3KQKnYX5ubWrB5o5pgkesRdMUV9KGQaZ1FSoNFtoXvwVyWBHG51NyS7o5yRD2vdFA1FCmGH2dPWqQ",
  "key7": "4N4MeoF5eznSx7ebU57o5KJBpH4kC8LRaCa1V1TbPAXXXx4u1rho3uVNwRX8aS2VKxvL3r2iMrA8UXpYPEVngYPZ",
  "key8": "5PR5QQo7mU5dHSE8xmcdZAKj2p41XWZFRCkgKQy6usgHkrsP4Z2T5kUWRRRKBHrvXVfRTcRCHAcJVzedsJ8riJ57",
  "key9": "3Ht58K6idJ6j9dtfmz76CpoaPH4KLT7Vs8MQMSuHwPxtiJfWdWFU9Acmh4Bpyjmj9Yt7po9oWFdjsMxjvM4YNq4g",
  "key10": "63cEkRwWq2PXQV4HUvMGvrWm4EkzfepkkDV6yVTMzKzpfvbXz791b5pfA3DUyePRVxB9JdMCnUGAGrtx6cmHXseU",
  "key11": "5oNNBiZkpgLvStHDno2V9Pj94AH5qmYT69Gp2vxfB7pvdAq3DntyGogmqDWcimZJEyNV1f9UPcsCrP1TygZz7Led",
  "key12": "4wLK1q4atVMVpoNW6a9MmCwgwBRRnimuJp92W1h1o4nScnFvuajnJYcfr1uWiHepjvYJnTYBUYT7DkYUW9NbQHzL",
  "key13": "4AgmhCEE9jKKH3mXqvRNYZyaprd2uRLiUszFZfdnoWuz3RSBZbpaWqwWshM2Ksj2Ga7GPZiDBQLHtUEcbwHXZkSG",
  "key14": "3ARNaay3NmLTMz9L5dLkymD7EyjDK5NCjqMkpMCxBmEsFbg44ax7H5HWTV5a4oSfQGGHG3HqDzmz9G51xx5QRJKJ",
  "key15": "bqSxynfhFW1pBJ1JKY1T2nsg3j2TxqptjuHa8Tb4Yckug6NKyTGvnKwMsMt8XdZzDKYCbVfFkFSK8E9yD1ywZB9",
  "key16": "3jZhrKDxjj5dR6STDwd51CDhhP9EgbvjSGnvHR5es21WdqucjbiNczKzgG1LfoBMCs5JfcpgGVqZFE1FTpRTB6zn",
  "key17": "5KPN67UYqw7yk5sWjXuDapGbCaP6sURkvsvuVN76PZVDUKMuafrkJAdJFa2Efg9cTbsgMuGkqmCVYqkc5fpT7AVY",
  "key18": "5t98AnpQPLwntx1Zo8GqNry6nNmyW4EYbW4VBRwks1Z2qwyAUT5Xo2kPf6i38SLorVVEeQPCYnyviQ6u5MJiPFaZ",
  "key19": "2PDKY83nJtwQBK5BYsaqeDRCh7G7UWzckJCNh3CRUwii4b1o6ftHvQyDhDSD3u5QfeQpjWgF5ghcry4oCyUbr98P",
  "key20": "2DWhqVFfXVCcdX1vqo51gYqTL5SnVWknweXSX4UynuBaTLantKYj7zYXKVLcVShBRYnJ8zUNuAJWN9VoYAHiHBAG",
  "key21": "2UCFWe3qjETGDGsJYFLJf8MMUdqG9FnJV4ALB33wLpxxisGyuutKWCErp92L5p22rM8G4MMWMdz2Lag81s64YngX",
  "key22": "4TTkRkif8gCJUnESCGjaZJJsraFHznVPnFNDS7NomwLnkk2PsLPVZrM1jgD6aukD5TNNTiMFxiGBoF46kFnXW3an",
  "key23": "4R6aHZjiYkDT3kjb7StPS9xnzzcNPisZrmLT13HJBNaeWkbu9fiyYDYhbdSN8KK8tiahJw4uhZXVu6cMkjxAhamF",
  "key24": "2NFjXd99fwGJtpba9hosCQ1Pya2vcRMb1SenmGHAckNum4bR82Dyi5xU7L4RuKcwjs9FxBvDPHTmUzADMTqgyZfy",
  "key25": "2KWhPFCwkf24b8twd8WWzFcc1MnGT3EgcFrct4xMLZ5Lax3tTLuk7MB1QDfT9BpbMayC2Dws7AjxVCSKBE5jC72G",
  "key26": "5wL3ub61ZHwwsjpJ3nTY4ZxRCwDDzXuB6wbL9HmXoAAHAQLrG62mPyDqbzAc2F8FWoY1KjqjEZJMB99bEHMEYcy",
  "key27": "HRpnzyQ17vm5ZtarEb3f1T96eNGYh9pUMEzwERfhJvP7kHV46aByLQvMMhw5WUptSrJun1kHW2QZgscECnVntRY",
  "key28": "5NaFaa7ByjRD15hB8sYkSd4n2JaPQwNRzZSDaKekKnwMJcDabjWm7vmugSF6nGD4iVRbykcjvRLeN2b5jYnaJVop",
  "key29": "3v954mMGiYUUsWfCZwsHKnvtLG3E4U6MjpBevTSoJrPnuA2t1YECYZxD9n6wijCs8oDZYyndTztaUrTSpgqLdqZ1",
  "key30": "45vGKgTW6Nha17MQPjAmgMtB4eYFyJVwnCwfv7hKzhZ9fPEbV4UGKSN3ZSt7frKdthqFQp3V6jngvvcekfSeXi5b",
  "key31": "fh7PQ2SpoxgwbsHq3DVMKk1HkjPnjFA5XEXNiwVe2jUMgDTuGgWadPDxkotTfFQoodouoSZY3tWELXsZmiuhC2E",
  "key32": "XBRqgcDDPwoHV84WPVubZg1q7YzLNdTbfC4QswAo5BZF7FgFUYsJqPJsYMUaLiNNeqQApCxaoNaqnx3Xa9zpGHq",
  "key33": "3MHz3d921zHssypwENVessE8FohuZLAX1FTjmSpivTMUL3jMgsrry5su39MqL9kGjoUixJ7KkbBUPgUFW6tvtj89",
  "key34": "3cezubwqNnkbjqSToYiVFArVBiBdJ54ZR6CtQyXW4Qw85b1dHf63BXZpJZXazTgZ2toJLkVf8X9rLGK9E8oDU9tN",
  "key35": "NSvGxB57Fuqq85cLtka4jc1yu65cxizRcvGLfa4sGXDhZzqRvak4G4BaAaE8Jr9chu2fqP4qeoSu2qxYYGqHJ9e",
  "key36": "5JGuMjurqFUJfukEBiyNTE3T3FzriGVN6eMdkLkydhuqsXMdv8wcuz9t2azkDi5GBTtyyAr6Tv1BNLEsH9vG9A8R",
  "key37": "3tRNbwaHGsWaFyFh89XEn1raZx7jMpTASUWmQ1Q52kYMzz4YHLZnBhx7uawWm1QK5SwhazC9UmfRSxYqCHW5Kaso",
  "key38": "RN9gi8Y7K8GjwaLTjZDeei9ahXvPda92Y8nZoHAPmvc17qFBwPTAiYYrSzs6zYZxdHWbp1o6EwQjipLsAZwZcL1"
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
