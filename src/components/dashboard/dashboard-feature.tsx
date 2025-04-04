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
    "5jnfiWbH4iEUHivN7x1iNrbT252SkNzvEtdy57etxBP9Ku41WTZBSJzL3959aVch75csnc9WEVdFxfFL5Xt2AtGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBaPGmoVPhMok6JdfqQH8Apj6RBLq3FQ7jbrkzAocZFKWs1XB1S3tzD1ScxVC54cXRLTCwvARiV1jRFNfkShdw3",
  "key1": "VpuDpQtoApPxSuzBtiVzMUH4ra4WSxTczmrXsYdy2MEKSe4TXAR8HwZhWXkz6aR1SyVe5bUQed3244Vy6z3QK2r",
  "key2": "4uuGMKQ2ZKN1qwK7PrDVF1Vybd3VFiL1mHawAEDWcVNSv32saBSwXKdyMc9kXDVW7EaFsbe4LE6FUGiDt5UXic36",
  "key3": "2VieCejyizXk73spKMZRpgXf2W7ZjTiEmySBdLGGZFmpQ28oVVrHwNEH1X92AXAP4GqHuyno87iVbTSNcfCTaiTN",
  "key4": "5jCoB2qEUN79wx3ZkgtJWWP9jCMU7MKtYxdHsJk32LYd947sT9aQb69Px4m1vCnPj5VAZaDK99BjmEENwUjc9KPa",
  "key5": "1iJq4EKRaKdRApHZT7cmhzDMSSrh1fhCnxwZoxqaU5xdzEXTo5y7KKuYUjdAmBeTyhKeXb459MixWSowGWeToQ1",
  "key6": "KEHSSRzKHeTPz7ARdmAP4cxKjMXoy2XZWDHptFGbSYVSwmuDk7E9Ar5LXs4pyb863EjTM3mJ8CmyerzMfHeZe1s",
  "key7": "63wz7P4bYxFYo5UJ8wBs6PW5HK6PTLPPNfuNuScXx7An9QyTXKTXby6vkmK5G8uzjcvXj3U59QsSD7ELhsCZJ46j",
  "key8": "4YH5GBeeMRDk9eUqWfp2Haqw4aU61QaqBX88H3SSt2hkv1byYXKXwP6uFasHsKPYdkn9omFKP8fsQRned56JTMGB",
  "key9": "4MqjB3fjtXkFf1A3Te6VWpkuenYid7qguBBZ8SQo1Ld7fBt5xMFnABxKWCvvHo3hsEMuti8jMJdjzXWkwXmMLC7S",
  "key10": "4KYbFZPUkcceEKFbtTBEADGEsQjYPUPxdtJMn8Ppo8khWSMpLgABca4LkgCeYNPNLPXYonPafyQaAmrFMjKxV2DE",
  "key11": "FGuJmY78DWmSW4dLjjepsFX9apmyuFG6GCwboTARaLZxoRHwemeWHS1PT6cUSf2Wj7XiQ3s9p38RN3nFF4mFTUy",
  "key12": "7PbreyF8i8fbZK4jaNdmHbPZQuDYDNqzM1WWgoJMXb6dMS231torcgozNirqEc1xg1YR3JzV7URdpE1U8koP25t",
  "key13": "4Ex2tMPWoLvaDzmLYKyGRXPQH2spYuyvumcuVpPPBFhWZsNZVrom4fZERGZnPf5ewgFrk3yW87WtcGxaUCUYnpZ4",
  "key14": "4j66idXiMs22bExmidyXSnkYHY5Lg6Kf5dXh8h9SjyXxHg51cGcmvbiQK685sNLWCSXiBUy85nc6yUGMis7XrZJG",
  "key15": "5oyQpF8RDzojPu2AnwPAB53NYuXsFLfDmvdXRo3r82465e823sK8Yr6ezrDR2XKb6BfauFgR42x8tdjh1xQRoBug",
  "key16": "5d3XgQmq2QbkiV1LZv9EGLG1qH9FwHx9UjwM6XTEWHE5WtTgt2fK7qMPBWRnga1tDacRiknHwK9ojMe5HtntW8m1",
  "key17": "39JnmXHfmqqAE5bcoQGjwqNDeVqpSSTauQH3ACPXHs9SRxE4yXrqoYM9TxPMBmqzxAJQrJRyRkVvVwwqjAJnRuab",
  "key18": "wru6A5QXpranssVEqyuJvAuxNsdf2vwi2eY8XCpe2NyqNW223LR4EiUFGDj1owgfb1uHBv7MXdWCrKQsqnWqh6c",
  "key19": "224C4usUNgQJgrgnpcmSLdtYzzEeD8hDwJuF6JDPGW57NxxS2i9KoTHh1g7nDkFaD3z7Fo6rEE9fVWRS2DR1ecNM",
  "key20": "5GydXE1pvpwPryT5X4d6zzhgpJUGmbXNEHSRXLwboVbQ67npw5hHB6YnLBZb1EUK8SU2HnN42jpHfVDgBTkacMUS",
  "key21": "53AMZeuXfXYc8dbk9ZqfKrpyjpZgyMbyWnGLp3c6UM6DJDeHHWZv5JWupqgoM6qA1cMPDda3JsnZRyN6diS5ebXY",
  "key22": "66RWL2v3eGJxhSbVPwvydLLBS7cX6LbSEN2C4Py97BRRTaQCR47CXi62xGmVkMwrApD5S7jdspnU7C4VYrxdHBYa",
  "key23": "4gDiTJ9NLSJ4vMDCvp2xcCTeM9QSCHhqVjYfzCM9VDRgQLjP3jyC2SBiARje4NQcXA8nZo3tJNdDdmK6rQb9C9ri",
  "key24": "2824FDdytnHUCQe5h5e5FDvSEo8N2QCdFeJFKja91Frgr2GWZ46Mm77v86zNY2rr8SPNvusrWSVEswN6WQGRNutN",
  "key25": "bpBvPmfAdFyvQsHN8GVbtfBeiNyX1KUz5kmW2uWFyTdpGjMBTpjGmMKQaiVzdAzmVZsq5PT2pZ54H488n91f4mM",
  "key26": "2x2NsV5dTyqottGStGDmAy2atJWCW7nS7WsGggEUHnbXM5yTtduj5eNLY2u4QKfT394TbyitCYUNxoSAsLKNjGR6",
  "key27": "9Q3eQ2q84M9dbomZHWbSENEkQUQzJgv7jGcGySDdn8owyQJmU2aNkVFQzAtdeEZ4GSiuVSWFU5GXxjCj8J6AMyM",
  "key28": "4d2F2hn3xjtqp88vLbRidPTn2mf2TwFR56p3gLfyuKLmXCNs74wYyYXQ8FVb563rF43RDwfzhV7B6Q8kH3miBpFp",
  "key29": "3xm4Eg41ofD8aVsGEgbEaCsShx5sETD9VrqHiPGXRjbVWmFPt9CqZ2RcUjLLGzDrRVa7RDmQAebd4i5wpo78mk7k",
  "key30": "5NUsGD7MdiXWuiqz9TAogJ8enrwkyYHCoim8Qjhy9XgXpUMFUSox37F6cUS5upFFhKkX9YmtxPHP6J2BtoXPUJjh",
  "key31": "4BDsT7D7fU3cLXZeD6WVNDijhiQJ9xCFYiCX5d5LujW1raGhhtD9LAn3dc4GkMW86j9wE6QrV6WtqCiry4J3SJ15",
  "key32": "5DCopxEdH9vndEqtrzcmtrSn4CwM6xDY6fQva8tE6v16Vukprf2TvwTCPXrKZrdSpvdqFoMghDcU3n3dg4PHcyTX",
  "key33": "2Xna5BeUUdWcyzKSHAS17ZTWWfwNBALfotqxBwbHMLV4u7s1UfhVtPMroAu7Ydhj1fZ6sf9BPWTgq4UBgPAHhHE6",
  "key34": "4Sg7d1xe1Wgh5KJxryrPpb1e7YKu6ALDMpbKu6MmzxgEAs5QCYtf6nrADBYcDnpk2Zoa9uSXr63pRyMLksstJJ6j",
  "key35": "4Lvj4PvaVCcKLLtbkKARYBB4qQsp8RLLsUJxzEpccZccWo76ZyXh1UhdA73GKxDXjYPqzgvMYVcWcn4ynt5x5TfG",
  "key36": "39FrvRqf88L1xTJxScuain1hrXjxA1DVgsoeMGJfmp7ZvVRzNwnoYpa4HvjoP1bGGucTzvxpAAwJWGL1UhueY8A3",
  "key37": "5jg961oiRLZh8FSZYJDvSKiTERUryzeYEucCc1k2pWcXaUpv53c9i1uFLNRr4pv3MVt5i5tsA6J5cdaDJefi5VQV",
  "key38": "bBVLhtt1VmVWRYDUEg3wTTJtkUfFdhHSryR2dmvvcCmRjfaAQN4iiRg8FeCof3LSWymPE37qQ4ugbQFXWoFhy4z"
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
