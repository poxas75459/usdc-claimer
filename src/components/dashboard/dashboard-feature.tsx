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
    "WowqHrygiudUoNPSy8m52TF17R2Q36L71bvnV5sAt6RxJBuML2yTDq3c7r5oB3H89PhufP1xmHvp6p1H9NXwzsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfSwcCjybSewkMj9eadxS6Sqn1sCKzr6J4Vb3eWeowPTEAUkmoPjwYDpkd3mezuw8mfdanwZBXfKZewennFxXmN",
  "key1": "4WhFnzvWPmZWAYJ1VfEDf9Tyu8SRHRxwuJPAUtLhPrpKMnUCUTBuNF1BkDQxzL9uAru8MfYCLRs82C61QiZvjhSi",
  "key2": "4NWBkdXZgMkt2oFw5HbxDhWcmxkBXpcteR3MtXpcCK4PqccRVKJEkJCL3Q4AM2hzuN5jDeFo8yRgNCYHiwPvWAj4",
  "key3": "2jREWHNgwXXDzxFdoD22Pkpu3YkZpyycQYdqjVAUJZWXbyJtm3R4ttDrdY7Rtru4wpehAfxmFucZ9BrRJVfSR8kK",
  "key4": "2mc1RU5ytJu1S56vx58LSLePHV2GRAbn2k1giAS1dMKg24WxDprXrvDp4c8J3Up1NvK8Tuut6Secgsc7nRxpYZ6n",
  "key5": "2frTR3LgsC7zncGToWVTsU7BnkrGFfrJmEBSrQsuAQqqu523mHYBSfh28aZLjNmPs4JBDxd8eDTXFDrU8FmMABnG",
  "key6": "4y7SKFaBMifsk2X1YqzmuCAAWyw4DvmjVWs5p3k5FBr5GzrupKk6KKjMTA2sY8sJeFUktHJ77PCLfpbK6TnPESVC",
  "key7": "5fCaRA6zU7e4pAc1T8wmY3RiYG6gEbuTbWPtF19mHdgDxJsB6NinwREAAG5sCrQsNfqFE33n2wxRfqUvuseYpaNE",
  "key8": "5X2CZhiJXLFx5nGA1GDRGtwa2kKEvGTr4emxduYDRv84QXsEWNXx14jmv8TrkPGGM5eKTmX9f2LPRggJBMYcwt24",
  "key9": "CDMyLCt38QaQkxjy4HqaBDG9RkxGthHrtHgrmdSChgUYV3XQHpvqdMU7C4uyM8maUsasTAmX2WiuBJTXyyb97Fg",
  "key10": "s14AkQvWRNmLbddHSCw6YMyb6QBkdWYsC21iTA4tqJQ7529y58NXESJU2btQ6SfTtGTKVWEBZVXYjNn4YGvvL5e",
  "key11": "bKozwr9h1SBAqYoaMHLqf7CfRLFMbe9eqDyDcZFbma14hf9duK9gEGiLHnBgbTpSkUmjwuQtrmfNnzrMdHHLeTs",
  "key12": "3wp3yx2KCETQiShyHaGsDD7jLHcWnorKbtT77RTn8sdm5Hy7teMydbVgi423zkUfETHyB1KfymEJprVENCkbtkKF",
  "key13": "5XRwJxVkFgvVMAno9xH63ZadLssPBR99hCXpCrinnWNMbxgqUoFFHNVvGAHnWQ3Hfw7yjhH8wkH7ojzPnzcHwrTi",
  "key14": "2NsF8cMfaQw5rcEJwAEdxuddxNJeavfMZop2Juw4Py6PCrEx5VLmiwKo6RiBNUMC1yyGhGKoPCz4TqL81JbK6LvP",
  "key15": "2Gqhhu1noQsLGPpgpLFSWYTvQr74UzM426asDaGUfpPnTLhkhujLqpUb1MS2YTQZiLkCXckA9aVAi8YRFwPE92s6",
  "key16": "5PGqNWf6NXgzYL7Hpz1j8mV2gVZKBqeu2Er9D8iGjHk74yHinMF7uvjhv7uFcVWLJcXbc8A4LcjaMm8CcfccFs3B",
  "key17": "3Z2iQ2nV3DmPZjhoQag5NytpMBGJEkxGPvrzChZVBxRgr8BDFJmxrBMGDLbrqmfh2D2UDm3C1rTBRidmap3d6QcY",
  "key18": "3h1DVgi6UqUZdLKsduvmy84yXXs6buwe9hKBsse8iyvY94dMuv4vrE33AFSwoayZF2kVLVZCm5t2oYHPyQfrLdgR",
  "key19": "5oxNgQaYqhZA8aq4BaG8RwuHj9sbVYNkN18AMouEwW24quW1RfZWXBA2A1wQQUNWZKQn3dfb79herCoPnEFk4Nsb",
  "key20": "8Xix5WEjYkr89juQGFbSbJT6huSn6sFatR3ipawmrVnkNMQFgy89LwLEiJS7pzHVmZKsJRtKQdYEHd1t36XKoRe",
  "key21": "apC9jtvRAgPJcYSFDvX5Yx3FSj6drYMPFTbmVm26cnoc82TpQgZjD1oJMyzPnWYCKaXvSAvHjVvhxZ5i8L1CU8T",
  "key22": "51favieubeL9SbVAGRVFHABEhAU9xqazZtngsSNh3oaJbqX5P4uVXHbkMhUNw2BduKUivZDUwWRWAogzE2eVvBgn",
  "key23": "2y1S8GRRRntBXNGcX9DAPhaVrQLZCL1GxRd4XfHVy4K73SaU9JoqiDdVg8znhxxCvHFTkKScPyTWUEdSXnVCFcPd",
  "key24": "nuHVgLY9q3rqKgU11vh6r8BTahdJERhgRWP2HfTKCWLxk5ec1N5L5Vw8NT6BNr5KQ7CJDgRXkYx1DKVqx1wgb35",
  "key25": "2C3b4XsMBppFDj2BCctUNAKRPwmRrsSAgLVUZ6bjQKexnnkCrsE1oJrZFSbHr7w6HSZ8o2VHnWxZgmS8kSTTeKpH",
  "key26": "2AexqcsKBcsEGSDXFVCoLKDCJsBPrbUa4mgp7f4ntVidAX9M7kgnAiGSR5ocdKMddGfKbyng34xmwDScsGmd8cka",
  "key27": "4c9nx3bsC1YDazzdbYyEsQ961nxcm5mybTDAnEErBwdR6HgQi376n86L9QpH1Me8cUUPfjBaCvRUjWRs8NuD9pUM",
  "key28": "op9ypAt3DYaUbwSUcQxrAmCfTFg7CKiERHb8kYMgXaewyqbNMuFz5bMeMerypCaNmmRJWRiwQz8YXTUrQouRbd7",
  "key29": "4u2Czn5tmD6bKRESFEdosUnPehDMqfSD8pdTsdJZpnqx17Dt44yPzHduxpSgvrRi75iwMz6Xy7wokeoLc4Hi9D6c",
  "key30": "37aDnj2a13o1GeUHPb81TJxD5L6qLtvHno8LNwqpbQ4KHtpxWCsR9WHtLXdf8LANzgUDqH2Y7orC4GWJh5BAkqPa",
  "key31": "3Ba3TARUrCEyihN97gjouq5uzrfvegXc9r1BzeAHkEVpVL6CLtrcTAMBt3eU5pxfvhSjdC3U3XAj2SFBx8hpA6ct",
  "key32": "2QfFzcDfagRaJwr5KcYeQ7SrbQhWPfoawykWMAPV8EKYPxqVFM9z3T1Xm4kkxKeJNvkXALbnzAyYnFXcsfAAD9Ss",
  "key33": "5XjhtnTcr7ZcefWQDEcCkbkFK1R2bupDaKdxRwsqH7LkUtBeaaYjSCPd3Vg9AzQujZESzBSHZB1EzPbBNiFYX1Cx",
  "key34": "56Jf2DZ4tqx38JbsN6cfeugF8UD4JPnKiF3dVHcoNutNdBwxGNBQ6h68gqyKctBapE3az5r1UWYnbt1GqULzBsY2",
  "key35": "4AJH2mEnSoM7f49ezAJYwG5eec7YKkRpcSfdsnpgkU7pyCs2NKmgAZS18LAFF13EE5cho9GvuDQU3cbUk9GzvBxM"
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
