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
    "3FeC1EqJjYePiDn9XwTjzZHZLdfkBTM5CvkBbatwqkcw24VY7JYe2sD1YsjKZEVrSqKinSAEerEmTbjYEtemQyyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5zVEGdTC1PTSE93yHkU712oSH4Q5sKjrBRkckxg4f8fgw4Ee5yWWSygPhmjZx6p2S6PmuvSx97ATVxmZBQPbmg",
  "key1": "nwuguQ7txpC4wcv13jtEiXFBsN3DJntn2t43Datid5jkDD3D8x6jbjMMFbY2JeU9TYRtcwcx6HEvUjD4NFtBfSJ",
  "key2": "3cj9NV8VVkpLmQy8e3ESCNCLSwBWxyMgVrrnX3oKU8TfHfHLebsewEw4csTH6iLnSuPG7vphZ3sKtZyZM5z1f2nX",
  "key3": "2Wa3Wmz5VrTcmaxaJvnMsJSXaM8v7gcV5TBaxyXoWW3N1CRb41E1G2qZit4nkNQBx4y48iMnb7h3UYXK7uPioS94",
  "key4": "3rbfAGgjo7dFT6KShujp555WZZih8fxpy34gaoeJ1pFKeLwnwJyivQrhho4v2o8eiXvjRAG6xRkFeCj9G4ttsbo8",
  "key5": "5QFUn3CsaRdwx3SjbULK9u19ZPPg9ciz4p3AFzinhKggN9nYc2NGHeWB9oYamVUnyJXJeTn23HgpptVfgYB8MMn5",
  "key6": "jdaquZ42G4P4avMyf1ZrrsA4z3oueqKziefq4KzBK4TVvKtTqQ4iGwfGHwAQgWf7emonCFYiEuTCrBM3ACfjt2B",
  "key7": "1XkuRTVQha1Rgd1BjxSvJXaNan2ofdwnAJVezYC4z7utNqp83fa86hmFF1mYjFLdXvWfybYEuffAjfLe47tztgw",
  "key8": "2rr9eeYq8vtT86xHZJkZDMR62RQj7Qed32UzdNYNhwYS9q4D8eP241tBTzmp7GiBnbC3cezpHSoSuSH6gcKhEZy3",
  "key9": "2CM48Yu7YfdKX4M5YvMRfhY5bGtTVZj9t9h3vioj6JRVxo3XkQHw1C5WiTC7cA6sj4PRwUAjXQdUL7MUBw4rNcfy",
  "key10": "23RcUjcdQPRC8uP4QCeKX4LFQ5VBap3Ly6WkJjY6w7kcRVpLRpzwSVEjHj7pwiwqMQJAzTksb4k26HfENw3jncWw",
  "key11": "2UQj74YW8u6gDX2Y1oTreyJPdGcV72omArQjEnYrBX4GAwhovJcAv5e1MmwVC7nFaL3td5qt1XFFRdotZ1HwodXd",
  "key12": "4SwHpUpqvmNbBroGRmJ8TwGuQBCMxkcY41izKLffRC1raH54qHiyaKwqVgasoMkfVCcUHmQ9eMXks7b2JVMY7ABP",
  "key13": "4xGqx1QAqNwbpnwUiH52ZgCWSgcGbJCaczCiHwafnL8eeZo5bbESExdsw4boYDPAxEFS4hBnDbPaN79bVoqN5TMq",
  "key14": "2CJU6SnHzxScLJVKYjnee4ySjcrdF5EKrb54ZmVbkticxDMBVNxSHNmwXB5HANfm9bNfbWCmSPAMSmn9F5cKKJ56",
  "key15": "4tZHXfznvfT9ePKAb6uDiwL1Srigz1djmYKzWMotEJFz4gqUWRz9f5aRfQujETP52wr7DhmfzR9NM3AqkLz5oQFN",
  "key16": "VpKYKTLbYGgjEg5JuEr1AR4ykfLD56bb9cHTWsP7WZJ2dpwwsLbm9xrXDoP78beLBVbTjSz88uaDUUXG2XfYNz7",
  "key17": "2m3S7e848fVWiXz5kmYo6dQkfyF1chPXNCdRwFwztAzmixsLWuhBers71AVfwA7ZFjtEEP18a9ZchqL7SHicRTrf",
  "key18": "4uX1qbA556cciWoTgjXvwCT1beqGSP7qzusubbDEGG9JWezGhNMTg1jXS7DitnBqnVS4c9emairBmcwwxRsSCKP5",
  "key19": "333JXGbey6NQ57EpaLFr3jVT4jjPJCBfJBM9NqVtSx24kbob2ueQYLUA28JsPYwZvzwfSzEwiWEzdQtzuvZNK5ez",
  "key20": "3jHTLi5btq2jFH9NRnGK89G6mecQn312PfygejkBXViiucsHAauTuxetzXGZodBeQUW2iQHfduKWcSirgdUs9NjG",
  "key21": "2gBo8d5yZrZftie84PkHMnbkpjDpKRM3cRygZynjRZTPoBH6pjffFokN3Ne91CHqg1nmiKmw64Cu4t7oi54Ssi8q",
  "key22": "5nTiQ1Vi8NLUP5PHyXQS1p6Sby2UXDTjNgSJTKzfKDS6irhUFmbPgi7ETwFBEXnvcUpi7s8z5XyY5tDggaXYghUt",
  "key23": "3ZGbKLT7PaJDsp8dhohcuAsnpmqs3AydQ92ddA6TmVFAMxmfkdzz7hDrGNXgHZhbaX3DqNDBz4Hu447eQCzXCaK1",
  "key24": "4oDv85ppTsatXjvYKxpGs5PVSwu1RSBb3BTfQ5sPENdrFDrWkH1wPoNar1hx6ySkiHa9kyCV5brmQF5uKXNMUfZr",
  "key25": "PoD9k9ovHTTJAN8asD43xdgSAv1aYjQECZu7FVfnWmASrJxyQKZwMFLTJg2Br14RHVrQ7qM3aUMKyaE7zp3E3gG",
  "key26": "62MWKdowFQ21rRNjWxafrNyBnf8E7qCDkAQ8rDeXyrHLFZgxUwJtkJiGpw8ay7qoAMrCyj158BGAHXU2JRztdhM8",
  "key27": "59Q2CJbJvhkqD8mAFCaHQ8zzndnscEDHDVuxZyqE4ToKMj7vTUkGQeGBiT9RY2Yh439H6RJ2gdFPi6dFzcB2kQm8",
  "key28": "z4pF7RT58SDKMyrF2Cfy8TBM1cn3NZvhWee6fy971ZdcKMJE9yJVwfFdo3PS7ZjgSi96r5Frq4fCyKneajahaFA",
  "key29": "sRh3MnVQEXPULk7LciU6iMctX9LprCVq51TxxXYsGtYifEtyFHhqWFMB2NaxjD8m4zMxsuU6CK9pPgT4r6p9vwa",
  "key30": "4dSF1W5DMACSrqDAePKTnsHcBqjqAxE3Bg3iatBvTME62E1fRtVE6Dbx4mhvnL1WcME3yfptYbWzn9cD7NdPakM3",
  "key31": "42dqeML9dQ3rgLWxCWNJEJREQdC4XZB1FvSymtFydrZWhbSJR9aBcJpJooDQqSWEbSq5c8TR44hDu9fnoaL3gBLJ",
  "key32": "U3rPHzjkDq57XNjK9oihQqSxVXsiWwtCnd9XfL57XDaTSeR8NgVAthYvztHP1etbypTb8XdXcFk6RQkZkKwuKEV",
  "key33": "X9fUsMENLGs97gvaFTacoxWWPnLnT1KFakuuauKqMT7aqAnuVTN27if793k8Zd3G5w62NGPKbWSEVrSYobr8fjT",
  "key34": "5gnu73asfKfaMiPywJMDMQGHuPKjerih8ErReymNXKGQRumbCCiKEvNSxdxWUDp2WqBoFXSo6nLn66C1QWScCsAY",
  "key35": "4kePVgVZ9GvSM2i9yoFfZFDde5Kkm7B7VLjgKdr8cDhDk7XibnEekN12aFM64k5R4yXCTromh2Wfkz7hFZAHj5zq",
  "key36": "3kUJ5wboLqGDaJK4i8i18kHZzc1yFfMg1KP3VfkMNwG79yzjJqdvvtwccYMSth6gveEVZTL5frQJKi67GnVXhdYa"
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
