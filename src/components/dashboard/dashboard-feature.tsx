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
    "27YK6tjRY8ySLW46XH4SvQx8PiQ4kxEy1dhSY2AGXUjefDzwN15sh3rAZEFvrLLjD2BL9d7cns5t2Ra45HhtNXZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52CatCjSBzf8dfvSRQhG9riNCpsEi1kuGLgHq8mfph11zQFozYjBAREHEWvrm8uuUBrWwc1Vyr6MY7ySSvzrWZ9Q",
  "key1": "2fNJi1HDE3j5QyYK9g5oKdVQr9QkxnWBWe4haNFXJko7awRgvnxrvBazAWUXe6EmcLapRWqaGPs3fRQZk2RAiY5P",
  "key2": "5tF7kAyBGBi7vH3TR4f5NKx88WQsMeks58p6KsAJu5yrdQA6gcKqUEPRDazbYgQj7LCxeLqoCR8BENF6Li2Tnsov",
  "key3": "u63oxPg715ocLAvSoXt8vEuLPzYZdUaTAttoVKJ4KFeQ95TuwGW7VpNMPU31oZdzeDVTKPAKYC7kLkLKMzqZ4LH",
  "key4": "5XaNi47FqLxPfJsnyAqwG638VXfDiTmejQXHEwK7THe39f9wL3fCK4gjNZbyoNTQP18JnJKjNuPUxBUHbSmWuaAS",
  "key5": "3yzJUNNNfgZJnGKsAK7eTgP3rB2uY3iYYQVe6tEMDnUVDG4Fbzbv5nQGFyXBZiRsjw99WMAmazTwjib2McBiufD7",
  "key6": "5qxUeYTLtPjrtnCQncM4ygNxXvGHyRNQmdYFazeFefpdqD2ao1U82zo1ibzSKp6nnWrfuXrC67ccYydQPMTrUBxw",
  "key7": "3QszTScTpx9cTJS9vowpr44kgFK1dnRoDYCNx5vX6Bwpk4yrNTDe5e665KzfTpB3XP6YycLUEw8Yv8EUAvXp38i3",
  "key8": "4ArZL7YWSTp32gpb82XF2N5myJ8hZEycc8d3sqBViC4wXnMhMG8w99QkEWHSLQdmKaxpeDFBiiWfFbNfxHEhjzmV",
  "key9": "5yX2xDmwesTkrH4r7Lo3M7XstrBui8c9cChxi9Ge6EpHEKvSpepUJo2fAiiFyzDi7efVDrzyzSrAMKtuzc7puGEd",
  "key10": "Ehadr7DvzsYZTGrywBe6C7det7qW5DNGY4w6UE43JfJoMD421FUSgERbgcFZHk7768s2nAUu9gBYxvtbPNZhcJJ",
  "key11": "2xXozNjL7eH8RBLAaf3c47zmVP61sdqFxavyLAEJyFR7DENaF4Zk7n5pQzs6re3tMa5NzDBQyybEowNUpofoWJDK",
  "key12": "28oobQBoGiJgGBUJdwtt9NPR92u5VcQx6Prs3DC9wrKryAnYVLBLhKSz2Sm3aqyNmTM2ucKKxnCdsnq1t2Cv426F",
  "key13": "29PoVjrkFmUFfxg8rT7rSPwAAyKJwJdu5qQsGdeXjraeMDp4qpC2jBBJeJwUeFxPE3eRZyEU3B2QwXhfrLKXiPvq",
  "key14": "Ezxd7u5bpBTUWvRohiSZAs9eF6WQaQkYYTGai5MgrBfgCPvfu1GTHNM933W6xhq3mUEep6KwwesYEkTzffNBybe",
  "key15": "3vDsKePnd3eC7uTdrrod1P1bqhc5Q81XiYe7PZi5szYtrqyNJpUToYpaDKEcwq2RuU98ZGRwBWsc56E1PPX6z7wW",
  "key16": "3KBT1H61BxdxgaP9Yv1izLV3HKYaQ7EJGqgxWCATfTCHt7paubtv5RFXskfJw7YygFMzmddMax7yWEQqt9uaUxQY",
  "key17": "3HtHYwyukZ8zkqaxLSbhTwGBEhD1jtVcGt7DJQSWwkk8jg5ecHFC4FVvorUN8Tw4pGBmB2muZepzcp2k11dSDTNS",
  "key18": "TVgG3jEXSJARPWm1dsynxfYHzEqJL4xLhsTsZbouNDfFHTyo5E5PNxfY6sYd4f8kZfsJSejB7K3zNdAkeYahAvT",
  "key19": "23juPT9WRb9Fxu9X7n5tLMducU2vbZMyjR79USL4ris3ycCoa44JVXsUHMm782AFcdh1pB5r2mf1Gbp1rTjHGbxm",
  "key20": "sURg2EuGHS69WGeASdhMFGs5mtPWc6iqC8nfEt2kaqXqmKijokTKJ1NW7SdvfDue8SvwyhUrw229kcGuhSn9qkM",
  "key21": "5Sn7rmfpzobuXWxYvbUYYXGou5fkemSWaMwaMcGAtYhfqoBBzGYm1Ja2nhzKtmp9Jp4Dt8cv7R5iGWk1CpARmZXt",
  "key22": "3cS6UMVZcT3eSVnJ3ezVvHMVxnJXwYCeXXSPbjs1ahDDWtzaNGr5B2xunK8HFJibUusTJ9Md9MPn5zUdoRvQ8NAg",
  "key23": "R9sQCkTskCTdFTszF8XN85YMNsrjG8zwFrKQSs5FX3UsBaqjnCRP5gKs1u8JSeDHpFkxitGryUNfPYpjnhJTbVM",
  "key24": "5z1jV755CXLTJEBj8tz5c4Jo9yEecegNK2TV9UktVRtFKhyQ6479L8ydftQ6SX3LstZmtxviwAG7HbBaDMnGM5aP",
  "key25": "5BVUpL5UFW66qX33Gi2ysdJmrvxMzeqoGnVLPSeT8NVXYuJhKNjnJ4G8Evkb8fv74HiiQW8hw1Pr94yCEdyn77Da",
  "key26": "38Ytdhh4EhPuBBACTr9sd9XvfNtJRG7zCnbmMbjH6LtHTgkKX4bF65QBKpjWhDm9kJd3GRff3rncprN1j9DUEweM",
  "key27": "4yQQQGZTrttC2v9KioqSdNtuDMd2giV7WaiY1kfiyXE5wWKJxHy24yjHxctrBBZCZJoe1YzdEwNKAejjSzYiiXdj",
  "key28": "5YFyC8mZfqFoDTe3eP8kpU5o4rLZ3Lg2YFbf8PPCBYwggBUWuHqb1bjNz2LN4d8uGpAzHerk3xfDSgcRecWKgyYw",
  "key29": "5rJmTUdT4cE9cH7NdtzqZA1W12YJiyv5xa15XnFSvHwtwQFiF8t9YVyHgc4hJydeqU3Lx5F15CxnmoR8ZUYVrs4e",
  "key30": "5VvNXQpfzAxcKFEeJ8j3B9ekXqEjCZaYLczmaKfmUhcdoYc2ieUdva2sWdaZczxigk7JTxE6HdVdp9b7vB7viZdG",
  "key31": "3tgXwXdmdvEp5HFuWMZez5fq4GJQw44xiQdThDkrdNA4fNkCwdcpEdCELSkugjoUCYYT6KRMaodR18fKAVLZRYim",
  "key32": "5MwFxRNG2axPRykY7AxjkAGmBVSaDgsgd9shPMAxfbJBaQbbaVxV4ZoXwj93MfQrNkHwfsjoPCJ8Z6ktB7XbEYJb",
  "key33": "4P6uhVVWBmEE4NdDZQi8YxDmLSdTdpS65GR7nZ5paySEFMYawevg2K3gwzTYjSmRmV7WFmwvJXuPKQG8vefRRfXf",
  "key34": "2KsNQbgZk4hKp1Dv3sMiqsAwUZy53ALoDV6mBwfYppPdEinkrTKSAhsqYvn8NCPMthxTJMNcX3WzKLyUHnD4Dvdd",
  "key35": "12A8gT2jwWdHWUmRRdEQa9YchC8Qqvxav1pX3tLYYMCG6xXfQEQCkL4usmwYgGN62FgEu3qr58kDfibp9gP4TV6d",
  "key36": "Z7aFsMaavxhtGeu97YMu4fZnxvLFJa75RX2U2m9Gi4tvcHAdauXNKNMc8BktC3Rv52G7U9XHBVUSjrF2YkFtaNi",
  "key37": "4deqhqQAfGU1aWP1FcGvNhiYBKZuDjkArpXes4KN92YJMhWwPL1GjD2jPWHgvMepmuis8xvAGHiUNx7nS435PVhg",
  "key38": "4SzqeXDxTsMPARkUuakURmDyx44Ju7FEYZsBYJJqAe9pa9nTzP9Annueh3USzyPaJVXMqFTe3FoDwd3MMqYrjuen",
  "key39": "42kSexoovAhBvzVbtL4wW6jQbauTbYHhBeQorLZw7Fj6FNtgokySCEnvyotUxTEj5V42UPUbmLztwBrwvqfVFpQu",
  "key40": "5KwiU2Yg7VJsdDnHrtSYhStgbpUEzc5wKhGQ5W8Z3usPykwDHbpe9M9inZ5QW8eNNM4PBAYZdMTGKGU5A3HLsyeZ",
  "key41": "4JCqKFY1ax2vfTMVfd39pF34bDJ2i6df2RzjExdpA8EMnmes2zCUXJA4vSsrtMLwGn2apDc9ruNzrLDTmx6RF8Ug",
  "key42": "2A9DibdFDuuVyKkhP4gcuQEGHwjnDp9BT9tziv8reJRv7B92gr57MaDLnKh974iz8ifGYeoTfh1bZsbXJniH5T4t",
  "key43": "t576dKujMJdrurf3BnnPZ9DwpoCYei1J4jp5Yaa9txzwZ69uVEMPYKfKx1RGcJbryx3zJK5J7zMS3HwMa9zs24r",
  "key44": "2U7HFrGLmT7Fts7WgJjNg9z5S9zLYUHZKnXN38Pbp3kbwhc3ws25iwhCFTWDPKQFioZkZq8XeiLy4Azc2rzwB3BF",
  "key45": "3w7X8jRaH843d9j2vVcnMsf7pK6wu96RB2XqdPkqBYgnTsrvNeJTtTwtFjABfGNLZuSHYrBkmp6QzCotk59URC29",
  "key46": "4JbsrJzzbTWALaza43mrv1sskU2XJeEH21cnhrSntazpoM2SN3CsRCvZjXeDEtGHpRbekcRmEmpPnTnFQxTS4zer",
  "key47": "48Q6FpZ8Zq3Fk6Vbxww3hUGMfHPWYSieMPzuLWQv4XLnb9TbhcEhYyjHmLnFMiYpgXUwZu9FtDkCxQEbSbg6VzoJ"
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
