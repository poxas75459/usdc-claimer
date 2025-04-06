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
    "2nhNGokyrxcStgNZVTiStwprPQW6jVvWc9d1HDNRoVDUFo35QmMnRB6ivySqLM8U5USQx3iFNGJdrfjKqNmzcrog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWct47FLUwaQDe6XLgPKVBrRQ7ChwqkxYpd5GE4XqRnHK24Q3Eng7NGenNFcUeGoR48QBNoAPFZkKBn6NLJ1gMY",
  "key1": "5ieDtgq6ekupjG719YhFRTT6Xk2XSykaK4BTcYeMpM45mLRHhCiFkxLy6wsfn6j11LPFW8DKiA2DZypet58mcdfU",
  "key2": "3XbKTTcCdVcbFSfCQL2oqdhzeMf287YTwtoWz16FqKSub82ZFndq5zYhN4b9urYodwpwvKeLE2PoudomyaVUJiqW",
  "key3": "1cKNiQhYQse2q4dwJ5QCamsQA8gryXLLyp6SL34NtMSVpxTHYeVzWTPw2zMLZjanKzAoGd8VohiV31UDy9pAAEB",
  "key4": "4Qi2kkr8K7BmjSwdrtULXCHvY69VEe3AV2ca4GxokGmcBvmEZT7MzLSdAByHbRgCrGXwmuo7tRbGmKAceVz8S92C",
  "key5": "2nctMmDg5FahvBdSgv5DBpGcp24sSroCorxiAyfbpPmjgKbUjHtiFbPRqpbGStjvbkb9Z9SWu8eiiNjajDgvPtRU",
  "key6": "32FHDNUbtFoEtfCiwBfqfpSQSeKaAk985KeMFtfCnt6rooZH9Av9qoxfudfziqDQAxNZ3HS6o3vzjBybMQ2FXL1j",
  "key7": "5dbxZbctmdq12haaP9rz7nkocgCcuin9anQTnMDd2tCFwFHCQRts2Ts2TfWSgbBnRx5ctdDHpLtwXuyaihszDrZH",
  "key8": "5F46TWaJTe3dVczYpgmvp4RZcJo6vf1NTmR85GVJAwKhB6k6q5w8jiFhp6FCLiXpFuaWGf3HAukbNbavYxA4SMQ1",
  "key9": "5tyWrXab7xE4unoLAokxViGzSzp1D6ArgwhfwYEXtvKRTDBS5Sq7oAQXNQWhnXaDd8sKE392PYAGJ2cDjbqbQSnq",
  "key10": "5SByCE6duXm3tjwWWR1n2RpF7gU4xodrrVNxpcMT22TubHc4TNTSuQ6WA3YWd5k5XayuQvoRxyLPVzqFfuwnQQck",
  "key11": "4o1p4nzVm98MUqkr1TnS5VSjX4ScW5xqiRArF5gSg5H5PEe3ndTRMbWaXE4QRVqA4x5ajouZC16qmdD8obWLbhmh",
  "key12": "5oPLevQQQ44uhPeNsBQkVtUJbfnRuHVdFSHRdmf6xAoDGHo3iViDE2f7roqn8GBudGm5Fkx3Zc9RfYHD7nwYJRkr",
  "key13": "DArwv1NuJZTEZghH7J3caSMBa1ioRhPmomA4amvFDrEYX369sBMPnKRrmBJumN9Bp83mEJgw2m73m1tENdwdwcA",
  "key14": "4wD2mdkzuzMKABzZz3kpFa5bZypAY7VuV7NhqNFM75MkQHsPJyipUphE33M7sU2qkZAcGozxJtn1fDJmBVsz2VmK",
  "key15": "5LmdmTWC7DTBVXavLmqrRkBsgyu2zXaok3BU6BiWSkhmLd7fJPoSGSQNFUVtUavJuRvDozUTycG35yHPyG9Vbrkh",
  "key16": "2umR6dgAPojDWUVNVA2GVq6fbXwFoXmJh6ymnRbU3T7uiTqeQzRRhXTBJ5YDGdAPs9an4fXz5yzAemhjrMVUtAYk",
  "key17": "2CYSJ1uLKrDjCUQMRZoZW6QsKWfKwE7AinwsvDo1x5tLNEpBwuLTP68GnYihNuGGgZgV49PSoqsHMKD162MmmgSj",
  "key18": "u2tVaq2HWPFMzhVWETM1oFNvTBJVVcACvhqXG7QK5dkm6v6iZy7ARCQYAUcvDPmcz115qaKXndeQ71dbcEogxD7",
  "key19": "4gpCyPYxDypxJ6SeWnVoviQ8aWE4J2Yr9yUxcaFoYFFLSbUsU9cq5z4dALtGJwSxVVSgGCuBvZLXZY3RRX61Lqgv",
  "key20": "5qMshMKsbesnCi9LjN5DUf9buZiP9Kb4vyBepcxb1zSsJ3f7ovjMqB36cxsengbp2zfCVdKfngQc5bFaodJJGbXA",
  "key21": "2JWFT62y2cFm25XPS1bHNQx1mx29i62wpeZG8GiYCZCoP95ksb5RJXMZqrwM3VL6tEyDUeKxrHAWHensHTfk1tmc",
  "key22": "2S4ugAzjnSadr4d9qPCVAQ5qpbPop56tzsudzaAbhPn7d9USqD6vzTZdchewM8TciJBKr2v2YEQtTBGxAFQfoJk9",
  "key23": "2HZi6hqUf1YRStDTSx6zzc1e6kDNmUKd2Nb4mnYfwZsb3hWKUjdkg47sxUdXrHMUtP4jXCaPraJSMksfmTbmgDQL",
  "key24": "2QBv53NfGuGkMXeGXCTpcTXN9SpQNcA5iu94WnNwHhzX95tVCWFtsAsMN674KasxGdrPUBCwa8o2zKivmFHVGcKS",
  "key25": "4suMRGk6sdQ94pyLEVeD7AXcMQ3MRRPjHQNyDjfu1kfxmcdHGzAwaDitph7cH1bSRWr5bkBJ9MA91adYbvDGwS3m",
  "key26": "5fk4nie9DQoUJSGQ3EKAXuUXDMXRqH8YFo1ZhfMFYmuEGZmMetLEVJMUEJ5rozmXiWkejUAwR6vMAditPvJrcjBQ",
  "key27": "aMDjn5FGqukgDPs8T3SrLVKitYT9UaB4Rwvg8vnULBdyz6QPXdYo5h9mJYQnVq5D1i5MXjtDYCRjLBeYmjA3FiL",
  "key28": "3ovt9asnUz8RmBTCYbsr8aaTR9Jh22iD1JbhLAVhBuVu6RANL8Uee7aKoLWaMmxLqfNvL9sZQ25GuxD8QKwHypMF",
  "key29": "2Z4JRuxVGgpr728PM6xu9vnsRjmE41FsGtKhayU5w9fESYo8sSCS6qf1ugMGz3gNXcvcUmMuXWxNNRAE6fAuBBfm",
  "key30": "4DwhHx2K8tuSzPQeD5stZcscxLXqsFw5Q4oUzDDC8aSpSXfJmQSwWGBWGLxpRQmcD4pQWvs3zcXzxWvjVekqjCtX",
  "key31": "5DyjuU6DDyYj7sHZzveyrVqd2EtCK7YmpcpYYzgmSqTSvfTsf9z5eJzQzSN4jenMR4s23n82CWVovWMv52SQ9fcb",
  "key32": "471FoAPtprf1FuczHPVERb8sUuAUxZGBFHpxS8n6yeRDbyCiAaJhbFHw7iTMYFkRBxR37W6iX3JQXzqHpnKzJ8eJ",
  "key33": "5krRWVxTL2f964XivEw2F3DD8XCetmdm5p3SdYNjMEVHXutScELixUndFTUYC7vXJKZFBVDV6MTH4cyUpgjsgns5",
  "key34": "5kcoKKnN2uE9YBCJzPCtzwe586m5UQiqz9CMagVRz6H9CxYWmpqqTKafGNfaf8BPv8YzWkvkA7LZauzjxULzJVx7",
  "key35": "cgW3dekqZ5EAUEEmdzYYz5Mc4mxgrSKCX2BuQoM7ejLXiUoiM5ZtXKhrkjeBQ8eZYeSvkjTcEdhpoZmmFcMTBjs",
  "key36": "64KHhfNv1u29g363jc1EdZ2P3ro23ir42Q3c4ebC1qsNKV4r8wLvLaLNmhGCk1H1s3tDGpXcWBdSg5HVajTPxAny",
  "key37": "2psKj1qws3pqitt6HwEwvU2i6CL1NCWBEbHSEaBgsMXUtZRMKHFZHmHXPQDGMeUbBEFU7HQa7Kg4o4KoywCfHmiF",
  "key38": "4iF2i4ck5LPEkbWstUBWejDkVZP6FEhQevpgBbugwihYTyrXxpFmJxhtQBonP6wi3ybxC9bvHesXfu1kvbabPEW9"
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
