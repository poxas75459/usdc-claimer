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
    "4auzNZSVS7fpUzEXUu91pgZsPdToVJmQYnKvFxgGyU284RXrqR2ZJbBfzGaWbeF4sPVFhJknJW68sRNzBMn2rt3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3JXw36wKPr6vS4abj5ag29bMVuZ2FSCi5tTYjATE2hfrLf43Yk4djeCwBMPmhjBty2unXUG3gaahtxWvhAb9qz",
  "key1": "2uH1h4CwovDkEwvuz9TaJLavJKXt1um86P57Dfn264Nyqd7XZP3XDPzYu9WPJF48sTvKpDZxVEhRtomnSJosa4z9",
  "key2": "bzyvdPJGEimoHz54cnoSmUEYKBMixg8hnfMf5hq21z9YbMgoUtrD8Tdqp2GVai6SiRFdioTTqweQZ7qT5wKVLaT",
  "key3": "VpqZYqMwctnf5u9GEpLEWL79QgzevNAcRAm1moWs44i4VpjoEbU4c1itmJPNpTu37eAMVPPVJ1P5Lj2q9VRLERe",
  "key4": "4pTMuTKdDcyxBuoa5ABz1aALaVkKM5cJpncj189CtUpDEwHY6t96VjXiZon8Ed3cWu5WtHtqV1PuTY4kFhtnYHeA",
  "key5": "5UDM2fzGZwiGq4cCukN8pADoBXZ2C1pTDeDh9TsjxEWxAE7xWQbucXMkUarVsK5ZX9UskJmQKQvFonvcQ5hYAmtj",
  "key6": "65iHcPFSmJXSi5nnWTAfooM5yy3uxDdqyrWdHnTnbsZFxXnzd5LuXFrz3QfgnbzPexxHQdrdw8ZmKpDBv4xJ3rh",
  "key7": "48FDPfBAr4R264v8jYK7PybKxo5aXXhpRpTHX2jRqh9gsVrsmrq3YLxcq36zsrMR125vGfd8gpRSB98iynhw7mCp",
  "key8": "2cFkyrZfuNtnvA9s8k82sd9SoQMryzfgAcB1P7nSSrdZE55HFBHEGmXKvRf5WzXmmH1ex6BxjqZSYbMqwq5Bzc9X",
  "key9": "3rsZQUmKdMTTTto5CM2mV45aPGMfQAP6CJsFJc9frUEnd4DGY2NBaMFHqf6YSANmJJ7qhxoPD82s5cjhXcLA6Byu",
  "key10": "45M6AkLoL2P4UeCffTnHKArQWFtK6zSkDBNzeVQFPaFAsQxfaxy4MTuFMk6ZmRQmHwKUNYfg9ix4dnwPhBNY2RNp",
  "key11": "3kwiQ9Ytr9Bea242LgYtnpLGBSt3CfxkCyvJQiu8REEE4QrYKmqgMVH1gvmgVcYqrC6LRkjcB8DA8g8WNSDSmdNW",
  "key12": "5hCJvXDGEF8irb3BV9fj2FtLrkhuCkk2CRkzNGoZYqTfqEQQ4YjbfXbhYBvgUEpcRcHWGJwTmhgUiKhw5TMxufSN",
  "key13": "3JsN9xBS3cwqCJBPB4uHtD2aGeHLysGU3YJyVs79nSC2SL6QuV9ZSdu2ZNU71SFtDuqsZ1xAzXphaZPHtYuJQRks",
  "key14": "2cKmVegTo9md4unFQKkSvhqe9PsrW8xCCPxnpWvu3pjQGG7pmAFkehVU1zS5K1Q4b3bTLq4iU9jgSRjRyPpcEuqC",
  "key15": "4TeMMbBLtneu8AP13WiE6k6Wf8ocf22mFDjw8uBGMLCxeL3TDjyX7E9KrJA7AoeZAxf4JZ6GpAkJK1dFd19xtm5q",
  "key16": "57exTK9xVxYYzZgtiSwm7s3vriHQ7BpwpGVerzh8aWKYsWM9KX51SNoahRRfVvns4to1jd5csM8jYm5GtzSGUMVD",
  "key17": "3knbqgM2RrqYRKgyfCYg81fmxUgohLKnSwHy2xfNrg4PGG333HCkJpFSadvV4XJCnybxdvhYKsQqXTQ5pfQhnDB1",
  "key18": "42DvL3fRV25xJsd7yY8U37cMHMdkA369LrcywMAAB7sXtjEf24HzPqe8DfBFVFNS9nizJNVhDSaTY4fndnCEh46F",
  "key19": "2jU9JUMJiJ6mY4qTcADKdw5SQifYagVZ84B5jniktktjebKEAzGENcLytafjrsdsSsSVh9ZqwyFLjrhdk1REF8Et",
  "key20": "DNbjX8N4zKhvjrBTkZUW8JeL1jueLGJjLR2Ez33kh68ooujD5priebretqUZeuFpRrEtEEh7iwYy8R6HjedTGkA",
  "key21": "pKLckyGs2HYABF5EKMH97YFxaRLfYvR1UT7NFSJwMEiQsnpNUd7UCuYq1SB2ckXxevTt1KU3A3VygkWCSJo6hSG",
  "key22": "25AJ41w6RCaFwXbEMxSELutvANSTM8CmwJfEbsGq5ypi3EuNoKjhT9L5WZEDnhpCAY6hAwwxoeLve6XQE5TLsepP",
  "key23": "3nte9Qnf8svKAzdr5pt1LWu4Dv7xGTGZnH2ahzgmJg8553N96oXqrzrRjPcAWvH1frShAGEBmntyWh8tpwhgbfEY",
  "key24": "ZC2thzEYE31Fm6LESsRDxkjQvx2eVgd597W57V61YkTHhpQnSGA3x1uVgQEn7tCK8NBdsxyx5sc8zgRWif4eGee",
  "key25": "45sBLsvLZSX6iRBvFUVhVNdZnxjiz2oGB2z9mefjhPyoG6LRgydfKP8HzbDv7r4fWDtF4rbMohUJrixqGabmejSi",
  "key26": "4KAMB2VykMmqxvtAmPj4tUfnEvGRA5uSX7MrneTEBz1FNDqHu1bzQARP7mnUodFTuoTii2XKmBn8SZKjyKm2bU95",
  "key27": "2stGSeih63dWAQHeZ4SuW1uCvGpZKbNxxQo8ViCWwzbG9HMchcp8kPXxpd83DJnPSmKYyvFk2Sbd3Q8WVpwvJEys",
  "key28": "41F6fkDx35qG3AdbMMPThLT7eeJQVBkeY5E8mGLU24CwJt4HNaBSh5yTUxWNXK3LgH4Ge4DJcZ2ppRtzfAg5kdKT",
  "key29": "4zXyvWDgPBHBMnRDXunnLYgkgq8oSi3QoambY4sARj3dBXeVZKpmrbAytAQvxVNY3q5BSBQvpXeHhPFG2ZwrDvA2",
  "key30": "ixFK6oS3ssGMaM3V8uL2cr7LutzWnZdo6y2sYL6FZKai96CJ6nQpCxUGkT7JEzY2wVBJ9CJPnrPBS9WanYUWrcX",
  "key31": "4st1PXeMq8s2XKjpJdN4NJTe6Mb5kMp62GtZ9n66bHYvXwPb2ZPqCiv5GvSUdJXgydTzzBrBpygCF86sGhVYTLQV",
  "key32": "3tLoAmFZgc3GmB74EUAdqJguTxah6HMgHze7xWVvxdKPFh92ywbiBVhzPvup8kgnYVJ5K8H2gbarrKFeC51U8ByY",
  "key33": "32up8gFY8i5dzgtQMv7modjpnnaHpYzQcbPn8zPPj1f99BjeJeQ88oKEuP9QyzV98hs8392M19uvYgw3QzFDBfYh",
  "key34": "4eT8sAyPaBhntStCCgiKGQyvkxWCBohxNUYecFdHeMjP9ZDk7SpP3wX5YUdJALjDBmAdKhV1Zinq814ySJdZkpMw",
  "key35": "3GRZSnbw8AUPALCHgSBosgcczZRgq7EyiGmxneV5Sbtnm69CTjfyhcXhNHMeDwGLS65EDQV6XjbBrovdauMyQHxi",
  "key36": "5PVXfx7PD33yDbc4pNqiPv3BzEycv8R2Q7qCDJvJJ81gbER9i4CzMCwLhRcURqcJoTrRZe5416ma5CgpHnXABtRt",
  "key37": "3ENrpf9Emq7jkLHrqgAs9xnyMvySNMj26sjwuVUTSNygxyAnnbUebE6cgMj6wM1XuwWJcdBWg5WDCnd2e4Vd15ai",
  "key38": "23eVRN4rf24ArPtwtBBCQEyEUMaUJCzigtys5cE59vYnXnrxkdnwFLAQMRtGyMihtU6sDJW9tpHbs1Zm6ScdKDB5",
  "key39": "4wyj7CkVrdi5LmLNsGM6yZb1UVG4Nzy4oKTxNQcTG4wEynyjKCMzuaeUDmxUBxen64B3d1twuyyaZYGT15NLFvHk",
  "key40": "5SBjvDuXs9WiEVpzu5uoFqa5rr56yADv7bLAjK8Zj3GSMD8iBBxYStKv1xKi6HxTddM2D88WgARfoEViBmABXDgK",
  "key41": "5FrLyVLcSTUTR2DS5taipwK8AKtCAhMotDNhJ4YhoEDydu7FkKBXsHAJECnBsRsYma94uP2xujB91WRXH9KyVGMi",
  "key42": "3tNzwZ3oQMYh4eFA6xApCVy8jxBnDwzmMawbf79iw11yZFpzN6jfosiqjsvn6i7xoFLiTmczR2CxsFV6A5SytQPn",
  "key43": "Yr1w7ydroSdKqWrRLdBdA4qancgGMoKQKrNzzrdrbzZkdXoYP29jKcaK5FtdB95YpRwYM1vQWps1cVbaTmGMhBY",
  "key44": "48HDywA2aC7c5XEKySdqYpwpjrNQ3VggC2wyEDYbyYSW7aJabw56jNRxmAB38oXRn39HUTBmPJLjxCG9ARaWW6TL",
  "key45": "3Fpji7pyG6aeRA6LoNSVg5U338qdBY4jYBDSQuaKh2Gu4s3RDfxf1GovXSw9r6rHxFe3ju7F4y6YR86vSGtSCKwH",
  "key46": "5KEBWua3ukTjLgBGnDh8QyLgK4UW1LgcQb2kArP2o9eRNvXXVaxtw6XY2VAeYc14j1X21eupfMFxeyGApgU6cMCq",
  "key47": "4Xz1gcUGUckHjE9Rq1TSko7fCXtqrbkiQZdRAHvyoaSU6hZ271dfSpYKXimiL2y5Lc9fhDVxYEZFnvd4M1WtWDnc",
  "key48": "o4kVjHGGc2oi9uqpVdk31179nNKLdMib9wWCEsA9DP9gny1uKRhkp3L7vJqc7HD5a3qDQRR7Q5Z48xQeaUcZGku"
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
