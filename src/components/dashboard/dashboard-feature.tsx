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
    "62FTXqNMaFRAFC8BQ8wMqfBkXwAwsuPCd6LqbMKhHmo1Q9aU4ymy38pcp25mB1GXpxuVrJis57mMfLbEiEXQL37r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfk49kUm97mMjbkMUxstMMN1CrGt5iBesqjz679DbPSZdNXqzdkGonupwty53YCbWHFaLNLaw2zcaEG1s8m9ZnK",
  "key1": "5XbB4tHoWa5nCFtXiQd4B3TyRZSyhxx4Me6Co4pPJi9nurpGiCd8NYN4j2T9hk6QUhESGgr5tfetUvCzYyPe82oz",
  "key2": "53fC1VARw4gbYq5d6GZ5zroKirX5zPJ6V5QTL3eWx3M7X3gUY4At57Wbh7PeARXFawiTZj3NfcNNs4k13BHERrHF",
  "key3": "4UmxD3K6ZCpCgFmmGZPZGBTWFP78E6A848JH8KraSvQND5s1A9SMgpg8e9LcpoUD3HYDmFyHzFqx6vgFcZhPq5PH",
  "key4": "4sV6BZjWzwe94ycuyDxyDSkun4NmVpbgmWrWmK2LQNSX1vzj9uLBxg8msjPs2Y1nvf94x2TdoZthgHQ1rncn8vc8",
  "key5": "23enyxy2HFU1gTpA465nfwGS5PEbpWcvHnArTYEJqT5kJdUoYRooqxnTrn7MNWNDn8yi1qfJJ63QG51jAGrHTae6",
  "key6": "2RF5B6be2MBrhT5645kgTEV4MoAbrmQBxtAfwFMTizUhzZu2L5dibDTdYEYsDvoqDRBjopRF5rsesBkQPqijWicY",
  "key7": "3SkNo7e7jq62sDWzWdZd8cKGRg5LihmwNtaMKGhLtqWqpQ1R49UtAQBuha4o1hV3kzzR7Cf62Fn7LqRhH1mAa57",
  "key8": "DWnG1t4P19MjLcYXZ4chnC2DYe8tQMArB5dCtsWPddTPFhwbYMHe49d62C9MBfuuxbhZM8WDWjNYvAu8x6zep39",
  "key9": "3G2WEcrSUHUaVryziwQSFc2hYVw6B8vEufMuvjG5mgwvggHiribx1iSabXnmXPBrzyexGaS2nrQxN1VbvgeR8fp2",
  "key10": "3nwbdf6M7J7cq93DR12C8GW315Wp5SuGWCx5eCA58Ubo1J7ms3bj7sDnMbnQVzJGQA9aZeTHr9Cw1fXNRZtrVcJq",
  "key11": "2UVmVtxPqRf2ZvMAKBLPjaGc7taEDvQ6LYd2W4ZKJq6hiHZ25xxKGTXTWB7gq5SkERgGDDc8ibt4vYZAvLcYzYbo",
  "key12": "3SjdKMFqTonc5fUwb8biyiH51KxVuK1nBdHzWHULP5e2rUo91pxG9bV5sqAnyM8mDsZzjMRxnCiTmWsDX7snxNJm",
  "key13": "3fkV29kmTEYtaerqVnBsGD1iiaTa1v1tABjuME2totdpRizT4ANizofPTE1qzhQD7LomQASxwVyb3U8DeQab9pu6",
  "key14": "3DmMKhsqgS8GgcshbyG4oBQKcuARnwqADw86wwenL2oixN42KyeZpn6gdBYCtQBVHcqramUq92aPUJovM9N8tjCF",
  "key15": "3suzkvznrWnVQFavduF3YczW6s8bgqbXwq2U3woWQZPD4ofa3KvLZxT9ufzKURPkQ2rR3z4Wiy98RHjGkdRVwov2",
  "key16": "2Q9ELz7KovLvHwZCYSw8ryeWJSmDtPThkRyrqgmrgiYPE3PgWxMangsPpCEuR5JknTWEZG7pFpVRB6xtanA8Vm2k",
  "key17": "7esZG4iSJnfqzVDuCZKazGLpLycgXvMEfZVXYKfhEWfjibGSuUw2XghwscD5P8sXGHqH15GPYvTtDNYeU3wgjKP",
  "key18": "2MQFJzXdapBYoiDurYHVxi524buCUqCCmv38LPuUUknMMuuP7McMx8PnTBCC5xCwfLn17WUuQvmnySniwzESXQZN",
  "key19": "5Xmt4cbzkhDkJzWriVgTqzQ2SNR38wipQcNh7WScKj3TEVBV9LegeZHaLxziuEt9z7U1r8qoApkUeHxsXnJqtL3V",
  "key20": "4Q998CNAVJwHoswXBqiL7CsWM1yAsoDuVH1RAz5u6t9Mga6qvyQesZEHxL1gsQZr8jUSuy8tWdGNrprqVMsvkNWQ",
  "key21": "3Qk1QZxUL2BMDRkunA6dqQ5oQi6EWsZZ7geCEckppRMzVLasRkYKmCRJLu1HWJgubkZVZZ77rnMQXMXVvruFyYRu",
  "key22": "3aS75AMZPh18LqPqqn32yavjVf2KFsVZy1bephcgFJAUUYjDFsVhYg6GM9JFDfcEGVayiKEsGMTmkHCXysckn6cY",
  "key23": "5rjg28esHVWD3yzUoh4CjBNb3qpBcbcKaNAGvSsZjbmRcAsCh4BggwHPJtkRTkVxT16wCkLgj71JJHKj7T3qXuuZ",
  "key24": "P8gnyPS2hiTdc17h8kSFuTZv1n2nnyDQuVo2FBaFNYZm4mEM3GiwJaFX4V6MN8U8DhGRj3vrJvigTMro6PeEBpb",
  "key25": "2hUSu7W6ubpKZvKkKsxhiR5wMaHF8BCUwNFqPBCqk6sYJiTL4WyXSVjKq2gzWMztS1xPwpkQa7gZmpRMmTYfBGE1",
  "key26": "3EhVWVjyWwALmkVKVEKxYT2YYgXoNjbhdyEokpWpVyRFjNnG5gGQADsjNXJh4JjyHCERxgbYgyii9w2ma1C5CKvn",
  "key27": "5AyG1SW8CGtTdtPmMuUBkeHccdfFGuPXynfiMpc8w3JnadBgbVtHZgkGh5jj6TMEHLoHa7iQw33zdKC6fC4Cv6iy",
  "key28": "5mGoydwFnzxoyYX75o8Pk4rYKBGVJgTyotBHpN3QrpeRs1j4S2umbuoVjiLGC2StNTEpLQf51E7LoPsbhu4azy85",
  "key29": "38QGTZpan3XJfMZkDfcHGFWFPuhqxXYTmfET8aqujJsVpRi772eWpDdsrbj1Y2vfECYdkzq2QcQvf6ZC7NfYV7LE",
  "key30": "4U99YcBAtEietFxRaJnCeF7S9Dg9yFMR1Wqe9spAwuqhm8JDgX1s9hBzFBU6kN87EM9YYv3H6uVaY9h2G6ReLGhe",
  "key31": "2vfabi2bBohjfUmSK7jKHgiN9F56FKKP6Up3XEzxBkijFjSARfsg7fUArapwMM7MdR6ZdfYdKPaHdAxcRodUfSU7",
  "key32": "5Mt7xvKaqrNCGPUyLSVHHQzcyc7s4TRhaf1viMJCPpMM4WXAzUuRLkEMPM1MVDySPBQc9YgxTNu68Eq8R8MYzAvh",
  "key33": "4RPBSuwcFfRMQrUJerphyNCJmynUwgbbUyAzBkBRxLTJPso9yymbE4nwGBEb5rsMefnG58nQnq5tebcPv5ZyVwUS",
  "key34": "5yR5E1re2yDx2s7Z5GqTWRjXy5DHjfWg5Trr74WEjZ1bECEreFedJmanmjbaN5bCnJvX3rKRAcwmTuZB42xVsVt6",
  "key35": "3d8eNonH6N7PQz5k4aAy4aD2Hk2T6FCugfexpGGYSfLZjcTGPcaBH3L1PNEkPa9FPV8qe4SWTG1tUifUUfuwV9ij",
  "key36": "5tXh7g1GqouupjT3jKE99mhBjqMPCJHAgKMyGG3AeeGrhSptzVR2iEs7czpydhQemTBg4Aw3zAGaF5yTrGsV6h1q",
  "key37": "5hpB7dyLH1SsE1eMvGxZnzYyHDTGufrcCb4vAtdECgXF6JukcUcm4V4AhcMGrh1jQArMT7wvu9m4k5FEJi55eYBL",
  "key38": "5YgMhFSbCMXGTZMCGYNRB461c1sJwi8TgRWiqzDVDuc6VhiS1iSpM5iyAuePysQ7275JS4VWXHZSL7AcxWtd3G3g",
  "key39": "5jSfoWGgshfqUh5UdHCvHU3kM9vXgsZrJAQjNXrxjYGBxEHdkrWji6HNsT8CqyGocva2iWdiKadxiBpDrCHLNevA",
  "key40": "3Pbhk2Fk3EX81mCL5mvp4ZMgDuHf5RBW7FL34XUEEcvie1Ss5HiD4dnkmFbT3gHAp9XHg1nXCKEQC5H93b6BmWZa",
  "key41": "27gbvjqajV565Ps9tuX52yHmmbvuHNUCvMfJKJpFxEdAAx5d13HT6Njwfx2ZTytJRvnPwRLqYTrJ8yn1wLy1eqRA",
  "key42": "q4iUAUMmdXLq51k15T6kvPQ8vmTFFP5XRjwNTVdQ5TDKpfwBE7XerB6s697DQKrXKJpm4c7evGsY3m3D4LEH1K6",
  "key43": "4txTt8j8hnKDzzbueq3MDF2fsnoRJZn7aHfVtnZMkCDYgMnBV5mnD8di8kxNPGVUXSJ4QxGwjeDizLXRcwgjpzF7",
  "key44": "3aMdD6xKHisDcPDn9GbZoqi1fWo8X92MnepdEYwKSdT1hYi5YBT55Q7AAKHf8rYzER8wHQK7cjZevv29cfhhQH74",
  "key45": "45azB9vsQ2ULL9HiV6HqabUxQHtFVLV29xx73KPECrquCaVUbS45hpfjBUgSLhRVL5ynxvzhsgdDvkuXc7MHjMfh",
  "key46": "4qpLWBP4fWfjz6rkBvU9tLSgPtbbjc9Ws97e7tFnVXWVWNJYVpLZSqomQUkN8mGJWRvbyp8WBWK6CTjVi96urWR",
  "key47": "4uef7xu2LMevz32VFL2q91iTvcaYBrvY7aXpNKb1jTAbNq4AQa5hsCWmUs4Zkj8k1DfLaZx3JgyWDBoMmdjvgydx"
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
