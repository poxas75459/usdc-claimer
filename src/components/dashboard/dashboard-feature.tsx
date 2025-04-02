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
    "5WidDqdqDa6nGDaJeSaZmtFs6XPAuQWHYYUqASwf7XzxWT9ihdSRMN8sNqdPWbTzjxDMRqjpiJxteyZvmcdAM3XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxDC1GN8T6pfzQSCYptxHgLVWmCUnQGzD3rLBVBa76wc5q8Edy93iJnGVDFvHkVoamDmWg4gujYohP9mgjkkLsd",
  "key1": "31Rpo7tSy92vHXEJFYBXF285X9ZvsRKEahM3BBuTh1nxonhmnRhWYKhqH61Dsh44b3LZL9197GdpJEqqS98BL7Wg",
  "key2": "PLQNi7QQXEj961uKAwMxpcpsQMNSNxLv8ujcJ7KzRsz9wxuS8RrxbeByKWAdVSz2PcPyVhtbq5tgyFZqnp5zQN1",
  "key3": "3MBaTC7ztMnaFjN7aYqYHL8qowa8JJrvyaWaoCpuMSDbQJbTYEt8RSUv3u1Rbk2ZHaJVVG6SUT8o6tBw5XjiQEnp",
  "key4": "4YMBNcUm4VvzgBXXZSyoydsRENcgYu1vX7VrkXMU2cGSWz2KYLdkwojGQp3aahDQ9yKwxhxdQUcLLMA7kZsXeLmY",
  "key5": "2WfVaydK2CKpofEqG7fKCzzyr68WuTidTCXb4y66oDSse8qgj8asoNKXoiDZWnc8LaxDJsAiNHHDjpE2WKuBBPEb",
  "key6": "5HFpdhajtk7wuNhdPCRa177GGrojkTxeFeMT4f6hdFDeAHWRQtA2GXdfRnYA2iNJFP8AcYqTVxCEmSHn66j7X59w",
  "key7": "3pAtE7QpVjHUntZFZkJjutikrbt5koXb7YiMu9FZ6pjxTbJQ17TgULJktvt5iHozAe9L6Akq61FQvCMEveR8Lngs",
  "key8": "628ETaEuXq9JppDQBKHLwVhmPrzBqpbKy6Txwky142UaS94BmjkmnGXWWWUtVBwJnYjYqWV49gHyQFYqJZTd1oGs",
  "key9": "5h59z5Ak3jnXPWH3ynZwqXEG8k4aic1fetR6dbXgrdxY5smKv6CYmTUUr9GxjveZK2XkGL89rncCEDe8TisvCghG",
  "key10": "3GHycAZUv9o6AGTuTmPoaRi2tqsRvEBgK4Drm6WdemEJCF9qUzXazMHtXVDpFPTobA3N31QCgYUuhAMRq1rin8uV",
  "key11": "3sqzxuAsoM8iMoECbGX6hwhj8FT5KDi3uHXi5mTr2NgxHNeyyxzgu1d41BdYcTB3f3tr7WBue8c7b6USLqg2vNND",
  "key12": "4LtnospAw7CAeUaHntNAW7qehpZPrkG6epdRbqDRm4F4apHaGeZ2mbsnqVag3GqYryk7FPstDyiUe7WiYqtYsR9B",
  "key13": "4ngaagN2zBhCf28oqEU2GynmYGfJmJTTtuRvHiU6C7M7nce5bRGWkoUrjbstBut4rGM4PtNuwhfRQLmAzPEXp8d6",
  "key14": "3Jixp3AQnh8ZtK7nwBrrggyjCmJJ5PyWVAFjhectNap3YZKwGyeF1yTNYB57cMccWBbxuDC9nso9CQN3y9i83Ap2",
  "key15": "piPbBxepF4QpAgaXBSaWadY4TNzoeXe7dxhFeSL2vCHnjqNMq1FWp5rFDNiEsnZyTnR39gCXfaFR8UGurWoqwSb",
  "key16": "4HaXSMfoeHhFbUNP7tvNLWa1xa9F99QkFAEQkoRHDd7hpfttEtegpCGcccqB8N38fDoYstcG8wfAsEAVJTGHPXGS",
  "key17": "4o9Lxria5iHmfqbBz9aCB1hxJaDxySBmji9nPAyVNYS9WPWAUno7QJc5x9cSBzHn4ABk5hvNmWaF348kZptAKwde",
  "key18": "66H8f7Bpcs556HbVtRqcSWeTgEApLRdFjmfb3FZSxveR9TaWJVmQVRzYHpPV6kPtGmDQ3y82CV5yyutyQrSRi5xB",
  "key19": "5Dy71a1QccfdMyPH7UhwegUHjXKW9KAACpbDDWDW2icgoeAF9Y5PkgLBuySdVPQqM61ZSfwXLPDe1yoS9KmaLjxP",
  "key20": "3bcBeNA9MvjTeJ48w2MUvZGXnpp1FAhhr3Yo8wGrZrQnvMc3Gzp1RFdgJVwn1A4jmY5KG2ZjQXfBoekHpfuaz3gn",
  "key21": "yGLFVjTA4MNDiSV2qzmSb6XJ8VMQFp2aG1TB1ghVXbo3RVNcpH6tQDx61N9DQwouK2wfCqEmz4S5vLcZ2i2f6hZ",
  "key22": "5ajPgmifkjgx8NWgbJiGeobAT4PajhfLgroxipDxuKmqdZNmDrwLpEaytofkPZk8nJMfM2685DopaZ3gzVsi8268",
  "key23": "5P457J2smvuZCHpP2FD9ReWGTxW5h66JyzxHWKteakqeSSMefQxYW3R4PvCrv4yneV9bXQA938KDZecLyDp9SNdP",
  "key24": "2VATscJrPkxyUgyU7iJqyiiC5TQe6zrZduv1wSj4tWh7EwFdu42AFYstbfcyvYuKjhteMkGTkGytHvynUwoesRv2",
  "key25": "4Lqfnw7vDsM2prZ9G2FceqkvXS8RwE8CvVgTMHjJ4M5eHZTfiQtPeK5EwfjXaLvEMmHKpx4B99zuutPs65Ms7XB4",
  "key26": "46wqNuNYLRxExjxA5xEgcwfqoqyauKZ2JXnakRYi2d4KdQVcfbvtr6q9n3TpD16vHjmsVenh4xR6vKLB9BTG95Rs",
  "key27": "3JFfdzJNX1kSrrB5LCvswmqLtDnwkXP81YxKe3kxA3QVZUFDVjSQqM4UCZagn33nnq3D6wm9ZmZiMcioBcdBeSXs",
  "key28": "5Bhgo7ZCH2foodSg4JnRAf4ZtgrHsJvi9imFUuNTHuC31vWems3nZkunRfiomi4hVemC8enGMEQYJcnV9WtX9pZK",
  "key29": "eZQM57jGbM6H4o1wAzn12KnG14D8tCvqBEYPWbxjBJzuS1DUjQgnxFkRk4faG7orhczR69yGdhWKZx7FmEyLTSo",
  "key30": "4WQUiHTyQL7esimyPdVepf636zNTkkrcpEo7nFBWSAuAK6BvhQMpmCrfaHkiitopcFhuu5YmciGZtFJ4TQHC716o",
  "key31": "23B8QbC4XGH7yo6MZN6a7QH9gbayKQvdrvVkseVEbbg63LXBW927AqBQGRCuo7X7R9ggNAnzB7dPnTdHAwrYkGSQ",
  "key32": "3vK3kxCKTL4ZhRwa1BtBh798Kp5z43RA1dhuNtMRwu2ra24yLkTH4FgSY6FCZ75FQNFLnWWvggaLYrzMoZrtWWPx",
  "key33": "5ECix1XZtK1YQXbKyzAGJ9ByhKQJ4QjyMYRapaBpb4zaELoMRTPW5EzpLVZ6nEEGtTFHfxfCyrQNumeJgqMKqf42",
  "key34": "5wg23x4HTxU6t8RfRRHBSF6EFXCQ9qNPc8tf49Fewdm5fbkz139bGTEvHcX9WG2AzEzWvkxFAuZ4si3Ef6T3wvaY",
  "key35": "2hTJKLPDS4LPyxq1Dd7Uv7o8MgS7X75Y8995VRTVeenBBGTwFmpwHbNqmrDsUfBqDurhF1DqadvFjCriUAiXogL3",
  "key36": "5UmSZ7b4djVaEApFSi7HjDFfaSh9y42RZc1HLz8vxjExpDzUhisSTu8Kz3rzX3zmDGyZA2byDWn1oksTx71kcd9i",
  "key37": "2BiUMVkRNm9jcyGaSHqgzr1M7gVzrm7MaNdjmmWj5bnfdXhq6iuFmmndYNB9ZEDY3rT98oW2DWAFtkfuUG7ube8P",
  "key38": "52ozP42cQbFHx46CYoG38CE8YFdj2M9uqAwenx5utGLTfosrsGUYt2inWac6qgrh7vRyNn2fajrLXGwBvvBtNDqg",
  "key39": "4GrdMCw6P4CNTPMDfkztBimnAPSNsHqz7jhm6vLViHi3MMR961RTi5WA6EFw1EH6YGwsyYhrC4Gz8oFgBdiho9AX",
  "key40": "27qxUoCb99U4zLNypeznWsJ8yng2HvyooFxqDjfaSEFkrJv6A4mYuzM8ZSsUdgRwZaVYPKn3jxoKN7G9fNtWNqGT",
  "key41": "5GdzESaXHpUCa8SJXayd42PLNTEZj92Crht3wsngfnBpYscy93esNr9BFQ1gpsC4jEzp55SS1FP2fSqnBYZfiFxv",
  "key42": "5hbnnAF3ivKSReriNUkbZFiGmVMWxCsr5y4F6PRGH8LLUgytrqpKsdrPjCpAGXNETeBC9f7bKzSV4QGL64NBRmiA",
  "key43": "Wm8oSBFav4y1ozNJF1mNLtt1Uqs78ERZKafuGuwUQG5ro9mp1nMzZ2P7nUoZteWZ2PHYvjvymR3uAcL5tbgCWPD",
  "key44": "5tzDhZpqgp9HyKATowB93XYAp5WnGEY3AAAaSERRxt6cknzUrWRa2v7zB7AyBCPEaun6pjzhCHtQXSYH6hEu36rK"
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
