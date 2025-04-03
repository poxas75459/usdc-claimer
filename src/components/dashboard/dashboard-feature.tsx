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
    "tJxu3nws8WPMn3sc5XkBnJFAss3uvdRtVFm1MoBRYrtRAHGww3Yw9CmfbJ24oKU28caZmbzv1RJvb8Fz6v8eDGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVdmLorYWfKt8kGuD4EGFmJVxqAX6UZDzQ9UJXmzCUK4RTAML8EVW2NmnH2uiCQNPci76MSj7Ycuea7fkUpWSV1",
  "key1": "3ww9N3jV3XNrVUrhGt5UBcFuPHpbpvBn6PKAH3ZbDze8Jt8nRjjsG1C2b41sEoGACKjXTJ1Yz9ea1W5aFenMSV98",
  "key2": "37y4yaQG4jAiD14vn5dyhFHeaiFEQvQSAkUh7usVWmynFQkg9j18LHEzYy16rJzMvWuCRX5ooAAEcZ1mQFkPQfhA",
  "key3": "6sDsW6ctfst9ZwLATJSzEdxgQQYF6nxD597RABBtMsniKZQSTAdLjvU7jUn1pkEioJfbejDpXdup5USqPi3FPMG",
  "key4": "dmeLssQx2G4ipmQ55wPxfCwU9Xfr1EznpDGPeurRkN9QKtRsZAW1QLk3LRaABW4ugV82sMdxme6fwWKmEnVVHRw",
  "key5": "58jsunFD4pcwkkcRvt6kcJtN75HoAJUdwpHSiF25d4rEF9f6Zcq3jnrU2QP2d1DXu7X2H5F3PvYjoBYDUHhDtN5p",
  "key6": "3j8Kbvvr2aL9YjGbPs9sBba3MHVt4eabdgzgLtVQYB4EiUTdeLoGKk2yrz3fUGzZusntejgGAdYEtpLzsX8FUDHa",
  "key7": "53oK3v5acT9fZsN2E9hF3MVX7wvFM76UERjMSkBKTQSZqWeQLPbL7NL7X7QAgvCfWdY9cZwUAwcLjBKNrBhiLn4d",
  "key8": "xfdS5dYJfQXHXmg8pNH4cBymL6BN68JExpp23F4CS3jLk1ZKsBE3yfJoGLNi3ZmqqkVXuyhdZ5feC4x5Pj9JS1J",
  "key9": "WC8a4zwcY8FnFmCJX2mHtHZtzMwjXQfcdfBTQ3YqudX5BK2py47WrMLpWwMauPfyqsmbX7gAEYmzYRJRuF646rz",
  "key10": "5fGYTbVioeqx4ugFA2nZ3ANBgj1NqiNF1e9NhoudeGYAvmqn2eHHaQBGz5sBkgyRgNW7PANKPQqG2NsoryHGoDJ2",
  "key11": "3cebq2mT9igeUhPF57EuSDqfMZw8g32AUWyG7Xb9fUJzXPYo6B5tWumG6uZA2eqk7PWjTxbvEeFdg8UfRbgPitGd",
  "key12": "5ZmuAHYDS3h5bJN9nGyjqSPGwyPU7pBb3vpwLcA3jyKYRYGdxfqDyfsUdyEFmqCGS87bdCZXaC7vX9FQEAczzHcq",
  "key13": "5qF56zMG5EBoWiZZ3Wpo6MNDCk8vwZTNzG9UaeSY5rAoPx9w1Lw3dykPg5CuFV5EnMomxwobRFm2ZTVvSJW1W2vo",
  "key14": "5yu7i91VdRsH6CJty14tAUMJtZufKJHfGZ6vW3JN9JrxMXPFrqsF53ozpVptrMFPtBfxgG1EMdZhsXBrNqhuLeou",
  "key15": "3pWMn6TjJJjWyrtFVuSm5Lxdk3okYcQoVvU6U1yHuqrirZnTCcANyEAc3JcisRRLv2ZSk26dz5fnXaouSCDNUsPs",
  "key16": "4q7pzdKmPFA7CuVbF93u23FxGNkkSSufMxN1M2s8y6BNrB4gGsVDdakf7djvkUzNM1J2UUEqV5jVkvKC4BbyhJfG",
  "key17": "3xaSaDZsdbgopSqEjdts6pqmcp7EZkDdX2pdqx7qb9fwdm4vEobJ8w6X5XPznyjR25ihZtxfeA25HaCRbBKcqwRw",
  "key18": "28ZyxnvM3RQrHDBeSavcKdtFqAiHo9TXAdWxa9YP5AXuzyLtAXQuWHX5spYrGPqEc788oBcFFESexMkNSyNUc8D2",
  "key19": "3i83Bt3XboAtqYvuzE3iQiLnHfGw9DDNNZ3gXCByJhTdFRxv9so5VX4RnViuv4roEGLxSMyRTgBN64Wzh6RNnkRU",
  "key20": "3gwk8rt82ZhEbocceRv5v1MfmU1XbPBWBt4vktd2CmuC3yeZMBT4o31XVs2WN15HyiZRgfsMD8nAonjozv1dHoZT",
  "key21": "Mjpy7aE4nbq1axeChYmpWKzQ8NZT4x8cxAzA8K9yEZXJUdRMHvMo21qUYZriX4akxGX3M1brsLXfqFfg3ivcJeo",
  "key22": "gJF1Vw2cx8UyveaMa9Lonqm2sm9kQi5X1cx224fkpJSaHAVWvU8NLbnFCV7bK8ujQMipbXC2fRZPnnz6oDtaFLj",
  "key23": "3ac9LvZi8Uwnqmv2NbgSKhzMyNFiFxAidTvziBorLe8p6ebvfmJTSRuf6wh9kSmvpYxP6cgPM6AuzW4h6GTCfruU",
  "key24": "29d8kKYLUkE2VjniaKczLMAgm7xDKu3DSaC2jC3zSS9HXnTQf1o9UEs6R28QzUMihkAV8QY2x53g62A5DNR6Hknb",
  "key25": "5RUteoNHwcwXc5siJzohdWtfVmdjXuSDnUf8yCrra278JPnJvWg2fvSGCKHyndSiCyPTeXNR6p2bxgBuxDSZeqcF",
  "key26": "3HK9S2kMTjfGkJ3dwLJUUtxcUBdo9Yvre8zo9jPFqM84n3AHKbCZk7vfKiiN9MbLKyfX6nZrmeusDzrZHLyTv7Cp",
  "key27": "3qJxbu8opMa7x1pxUncvb2FcjFzuEubsyX9vmV9755PHfn9wYsBB3UiEudmeZ5A8guqEeqHSRwuwiog6wAHgPR47",
  "key28": "29BGJkcENrzxjpQF4uz6nh9oy5z2m6icQsgPzj2wpxfnThP8yyjVd6Qe9w4qJ9ngPj6amCoyd7uaee8AiXNaEaGa",
  "key29": "3TVqUWsmJaxS3bvKjwZZ1AofW7ybdWn7JmQoW8vXdVjcfSJQG25xAySq3N69nX3LW2STbpjkXxsmbkz7yfqxtLmJ",
  "key30": "57VarBzjHnisMeqA6EN7WGbGwrw7B3am4woX7kh5JVgZpELyBLeD1NW99Vc6fPQ4eH38xzFdGTBEWKzVeb7m4JzG",
  "key31": "mE94HW7wXkcw1oa6dzLCesrWC1m3Sro45s9rED9owDH9dM1v3qRGTFtMx7vE1p85HNtSKZcT9bhXWbJgni6VySf",
  "key32": "37xH8k4nXsPBTf5pwsbuCQmKBdCz8PBLzhgeXSyChr38CQU6KoZRkVjVjr2RahpDegWNwdPrAC66TEAszMtAgJXX",
  "key33": "3YJMRPcpULxuANmjnQnpRH3wgxCpUST5mLtrSqjTh5izu52zqS2xZz2rppt2iJn4Bbf1QAtGycjgA9Tc3Q52i8id",
  "key34": "2CXTXY79KS6uopCdoLrc9YgjZoxuidecNwDZPPHNw9XdjXDY1WNWPUnaWaHdgBSEcQ6ek5jiPMRDbmGGcNnpJ7SC",
  "key35": "bbZ3q7MRoSTEHC8ENApHE43ULg2BXXb2beqkcwUWeAbBicwyRsTbyEzWHnYA7xKCy4tZeNCMfog5Pw2yQ8M8Msp",
  "key36": "348XgiFpCfaybtcVqQoQidjoAm6seBLQBCKehmTumnYJHakaXhdMVVnW1RwBw3QtMPkbDJoRotVe9ScpohrfRwdn",
  "key37": "9TrFi5UKJJiVPsqULboWH4ev3pTNYh2bR5b6adENo8obgK2d7qcQCC6CzcYrBpFCmCrPTAeXbASRED4ZzQkSNzm",
  "key38": "4HPG4SPwabR8SqBCbcBn2KGEAAgoTqXx9bobGc1eCNJQ9s8fm8xxJ7VLfHn7hBhz7A6jN5aZyUvW59oc3kWu77hF",
  "key39": "2BbV8CZYj9ksE9YUMbxE7Fa1oyaBjhBsaVToanjDbMepFPVug29AZEsEkPkfLcM9hDTUH5FQtgoRcXBLyL7Pb247",
  "key40": "3ZZLEYtvW8SdrdHy26yTjCCVoJfH5vRdjSS6h3h3jNXSjwHgRSDx4RpfZmMWhyBSXTSdn8ttsZAfPC6kvsbj5oyG",
  "key41": "226BFw53n15B1RGsw7cgD11m1oGGX8qwN5d9C3GTpE6TzYCNBPUvLt2u7g7JPhAwzf7zj6QH3NRLvyQeKq3NGWRu"
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
