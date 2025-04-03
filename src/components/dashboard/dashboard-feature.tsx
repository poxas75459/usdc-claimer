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
    "5dU171EDMksTuFnba4NijTXSWads7bTJKsP1zWVNHD5w2dnR9Jfpm7ki8wLJrbQu3UBvCYaVY2bPyyAN9oYn1Akk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9ePC5uWYi2HzGQtZHX13oReZ4rnSPYPtK34azhNCnhcRJdq9zLhhNKEptY7wq2ocANDrinRUDt4LPEwgz1qCJH",
  "key1": "3QdFZyEAnpf1BcoGFEaR7Hw5rJ4Q4mpp5o63XNN7BqDcxVPAQs7oFNoCrTvkT62csGNnNWxfnh1nHUABqVFoJZzM",
  "key2": "3z643oMrtR6M65sFPqbAzTHgqk8u473iSNsDRWGuRTatuxNUfJWhwjQq2TnGcbyQQ3TmdJcpsxb9QipfVFFxVKXZ",
  "key3": "2G5xzcqPvhYnLbUyz2ZkCgKAgDcW9mB2W2xvTwERJUqm7zHRtmtV479CiQtwzbKBJ3LntBsZnAVnMnMBeLR5d4d3",
  "key4": "4BJ4pTNCVKMNLi4SwCtmkae3VGS6mHYzgGeStufRNqMB9wqPSsnHXaN8nGBBQWsSQE2TbBrYQ6LE9Lskdu1au8Lf",
  "key5": "3LS7rFfSi7Ta7PUA5tQJWzdZ6bXqxfhST5FM21mR6eKBD2whp7xohGYm6bVRhzhHwyQmrybbzbBUZbyEGedrNQq2",
  "key6": "2DoJiK9DFXbzVz92Ju6bjfQGkjHkBRW49EPjoCAGH3y5AWFFnPJij1K2atgHMi8pyp8y4YCnEXXbLgNEMTrc1oVu",
  "key7": "L3orkjntQiZQtcdhizQQ97vMUPTciJh7KJiGQKXMjfa9GefiXKzg1D3iUsTqi9TuRNLN6AmcrEQfv2p13j8442z",
  "key8": "2EKBiVgTbuoXno9Lx17B3Vj4gMAZczSTuSfVBUK73PY4r5ntvFvf7LDw9NNS2afwztHnJLvjVgn3mZCmNKRkXNTM",
  "key9": "2cM8b3ToGeAJQhSMG3MgZZJgRUxhvEmpzCibKaETkhYVwVj7dJ23oqBDSGatv98RGN26G8TUF2DpAhe6E2Pom5Py",
  "key10": "3GZU2VsViCB7Ym1rpw3qbypgP27S8FghVy6si3S48dh2ZuQczHAAW3nbexYLp7ncmxiHQogjakSbg2a1EszXzpvr",
  "key11": "5Py2QHjpofhLJ4FpvBQwhzshawGscja1h2gskrDFnvkcBJoco4DaB7K4jyD2JkZHAhbciRMMSeDvNFmyhVTNtiu9",
  "key12": "5XpvFRwBWvoDZEn47cs6cTQztHQr3g9MJiRMZhrgcdTUGaMTb7JdJxDgbKJQkoK6PM7RbiBAZPJhoHbAtGmkWmXq",
  "key13": "35CJg4k9hLDyqcLQofhDSVvSc3p1K29ieoPCiKz4Cp9kheaYf7NqzFL6wrZRWT27GKd9aqnJJjz7TNt2qLP7CgnV",
  "key14": "4Hvxq17XCKvpc5vU5tqykyXqPHsPtVX8FG4LNvywaFMkHwTrjaYVSWZMEzikCeCVNd9p2DAPPKnw4bBCKDdBcsuB",
  "key15": "57zPuEEt4C2DXSEVDKwnnBbEsNsfgZyu6i1Pri1A78RA7sonoMPLijAfAr1GXjKpizghbCiFi2pupxfwSoKj1xv2",
  "key16": "2Coa5CGGZUY2oMvEvEuZ3qSLgXdhAn1YMaMr1DMCUfrcfmGqJ4WbyhF5RfR9ryTX5dBf72PbkSM1xqWtB3MhNTvx",
  "key17": "3XsfKeNmxx2rdG4K4bozWYq5T7icTrX94H4wRCYUs7JPw8EW4xcGYrGLgPmGgNeFJ1h4JNqpDM5gonUUfLSwCG7G",
  "key18": "3NjXvPCwMf9y62LD7MxK2RVhywkRxb5Yan9nBCA3ZVnbLR7RyHKL3oB2wYyPNmZRpp9dxWBw6ePKVicHyVNtMXYp",
  "key19": "3JrUqdR81jJD4bmV3SGib2yrmwZRdeeS2MAzTJhwJAWfxK3SdxBvpAXgtKeYsZcX5ziLS5pqPjcGez59HoGhj7KT",
  "key20": "4XD9qZ4zSiTiktdwLXaGK3SBpeCm9ssArBsnZCZAqAnUpghkwwN6xk88xJ7SUqJP3WRg8CDe7XQnwumC718kywMg",
  "key21": "5FUKeEU3YC4Zi1sxpZiNcvRqCKuXsEYMGxuncMaLbbFn3m6G1L6LAu4QCa12UnDYgDwweEQMs6ciXKLWq14XaLz2",
  "key22": "65S7QKHLcxkk6X9TfVp6tcHssNa1hNGHzwXvhqFAq5sUzbjvDFEco2bTZuREVYUpwVysdKtUrLZ5urwbG86yuKi3",
  "key23": "2SMfGYegS4xPttZc47TSGeudP2NhKbbRUeNvaFHzHjYP9C6wKYzAR3rMvrLRKSrEyrn2VupMPoFF87uiTYgbwLqj",
  "key24": "381mc68hssrF6m2N5mSrW3hUqwHBXmwdrKegyxuPs4tup1qUettK8GpWBLKZUtWXadx22ZgmLNU544HcLrSC8JUv",
  "key25": "3Z1WZwYzzb25P2UkC5xDKCCdmzL6a7uFhgiDbm6i97kpygHsuhXXinkFzqoggup6bcSPhTa4q28MmPLYcGHacwDf",
  "key26": "3K4QEWDyHf41krJfaoUEnvKoS7HoW6cVsmQG5v88dMni8W2Yz1ovVpYGiC4scfyx8fuxeB1V3PjDh5VvsVZosZ1j",
  "key27": "N633sksQRsnLSNx8XN8nwBQNyJ34F6AtCNCvYJRbf9fajvGPCoVipwC4uC5RusD5SsrU3zLPgXQbZfkTjqwKXFa",
  "key28": "25C4LkB7TaPU32FE7WTZKDvvWV1ob6sRPiLWv5kB7zjzxvDyGnhnHF1zPQi9z93tzRnnjmLZeabT1hGdVdPDSC1Y",
  "key29": "3qWHoD4A24T9Es9ZScB41PKjazyhy8MpBz2pyseMXPzgEPHhedJuFgStHJ1ZyTcao2Cydp4rL3QERiiHCYLoM6Qc",
  "key30": "DaReU1sW5z5dBPH5KxHqrS5BTq1xuWSiNx4LdpnQkCe7cUYoapBasdnYP8ydq5CuX9pvTbZxeryJYWjYjF3TYyU",
  "key31": "5V7mejo4jhdp4q2PCPyXJEj1uwB9hv3aeFyPSxEsgZvQnezh7TMF2mCVsHJ7pNzcjeaz45xdfeSQyqo1LDyqAWxw",
  "key32": "4xn3qchFe1QJaVmrNWGQYNUvu6XqUCvXQT5aHp9DqPmq6pZts8hsdaHZfX2isWMGYR25ezu5GgV49tun8eDvCd5Y",
  "key33": "2Zjw7fTPXgjruCvSYb36iQcDBsqirKpxpnZWtE7Ye3P2dqjDm2bgE82p1eVjNyPXfdxyFEXQry5GUwiffkvcGLMg",
  "key34": "245mo1vFbSYtrXRJbF5xLpFzoT6iVEmesDbjur6VhwMyCNzVFoRqLkFZ3aPQG4DdTiZnEEHGMf19nQHLNFFibp8a",
  "key35": "5GmwxYqfPgmCHeBzRaGdQud3ygGEYL957gVzdNuF1jPPiJi3pd9k8cUg2sHXLi2kQzsg9XFVMdkLR8g3bEUrvjAY",
  "key36": "4wezAS1gEjRJuCraJ2HfKqkchWqF8Dy9KFD3tiDwZrKe9dQG3yRazFsTE8VhgA7chj6czXszC3B136jzXS5MsYuP",
  "key37": "5veKBqFgrZUSL3ij5jmdtDJGoAx4vC7CxHrDrxtRas1p2VEnrGP1mUfbHDXkuVv3GsQjb791byrC5oC4JENErDeQ",
  "key38": "3Jqk2E4hNg398mi5agGM8DFJf7L5VezT9ZMUb2kmZReT1aoUKHzDJVNss8aQ8KtmkC5J9h63jHNekMQEFq8rcBbJ",
  "key39": "2GVYGPR7HYfa55PLHKMxCotJ8dbmfMvassutnwgvmNXZLyLRRAJgXfPdAfyHm1kcNHpz5sH1A4vqN7fk853fxhR",
  "key40": "2jtrc73k48WdYzSx3YYaHbntNTb8xwG714C972bFMHQFP7Pyz2ZvMe4gcLrXkF7wRTPGWCXL4WwEEFULHywNBeV9",
  "key41": "5mfVvFaHV6YFJktWxQ8DL3oanCUzdNffcYkun9nhVbCVje7zaoLXLsfgkzuNQSbfpNAMg7KaaKJHgWrLW53EWj1n",
  "key42": "fXgBhj1qPSZMTAZGt5ZwcLUdBj4GZ8wnHViHVwF4sdtjeCnedkFwDbRrzm7YdawbJhoSEdm1PQihkYreZFH7ToM",
  "key43": "r6ADqx7LZVoSiBh2FxPGAtfK8cCDQpivA72NkjYdeJzPCZzFRQRRwhYz3Zf6tTgytgUbgwV871fuZS9Gdjrpgu9"
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
