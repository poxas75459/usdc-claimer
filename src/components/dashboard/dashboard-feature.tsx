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
    "HMP8qpJvxCzwKJG7Xi66P4uQZitdmWFo9MNB2Y2sJTpRTpV6zJgGayc6EXfTiNjbXzvwhMPYrhC39RXT54ESM6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCqDgYreGXqAbDzbGCqabiY22VrVmNrSAs5tSCnBJYk6zpLjNvVYKcki32YJMepwac38oJiyEy1RWeB18WVCQvf",
  "key1": "2kBD61DeaS5ok7pg33TQnnS4HqR5ke7Y6M1RRTmKouKjC2x5aJRKRbajVJWvzdUe3SnBiydERGNJHJYuLCc4K1pT",
  "key2": "2nqMwStXXREYCB4nQYyKgTvXCjq9HoRhVLVhsu4sEmfx28U1tUSrNk57Czf1DbehF15RA1KLp2WFRGmAGdQEZGVb",
  "key3": "3QZSs3cpcU3vboLFvWsEg6Tnw8dD5zZtnBMQmkZhZnJEyjK4ed1Jt2iZsRE3uDS5qckuExbU2V4RLekWkC6TyRA",
  "key4": "32BKjchjkvXmZXdax4EGYtGCg8UkF97evpVTFbR49gw3P3YywuvDivywRi6s5yHeA5xcRk76LNop9bd6vgQ5PBgL",
  "key5": "4b8FvFGy3zqrDPqVhax8YJQq8H4HZyWHgwcjHE89k5HD5inAUHNdcf84SzAEgaxUENwZkqtibc6rqDpeVF7kmMrC",
  "key6": "3JET5CXE1Hn1b5SgtovQpRJv1YwTLQFxp2cVmGoJyn5EdbBr7iAwYyvvboZmR1g6GUiPWd7oP1BR6zrXAuiWK8fr",
  "key7": "4nLhNYkBDQDfkiQZrkYNxgPa76PEw46WX3giVmEW1gwMeXJcVzvYGapXkZgLu7sm4mQ9j5LjeMEcRRnjSYHPwxV1",
  "key8": "3qBLEYhc92LT1jPqhoAD4QKWCc8uw59CDzZyYL5HmDD1i7ZBkPiGmUTH3CN9KAuNj38eAVzYVYKxWodHcQa3m7VG",
  "key9": "5XTRQTcnZyBZZHKGyDk2aTGcTHjJRpy6VBjq3t6tvhtT9CsJpNYeNZgHSQmx9R2XwYcjwN7iLhWoY7VaVA5hHkWd",
  "key10": "4gZPkoMtDNsGMReMdH6W7vW5LUNqNurXiGKdo44qfqkiP1o3vphnwE19RqavgXQxaGsMT8Lp3RWgiDmAsfDtGxK2",
  "key11": "49f8Mn16t3sncFnqxSWZ97SxcvVqyxZmYesyUJgcGsY9TJ478oHhKSHAj8jg5f1M7TL2otmnfcH7X2ydgasYP4xw",
  "key12": "53X4TaRaPMsNeKA1CkY7vQL99kb2saTVN4F5eGoUKJKKqBAJ6nKivRC3aLRfLed4CczcUHZggEKtGAUNUCnsBMQt",
  "key13": "2EfqvzF7zKtCuRG8RGuseUhJ5YskoHHCDimjzRp4FpPRfX4r5AvxXszxE9EAVwmX92o9Et91MQgHfEZjFqsKVofm",
  "key14": "4toWS8sRWAWFXW8j2CkpASuYjRwRZC2qnzcA3gEn2ierzHaUWPbRaQ17zoEmzPZGCxwoCG95QbW6DpnRWPjKLTv2",
  "key15": "5ZV39jDyHbqV27MAoGdnL7oRG7zvcibewWeUTs9Nf3qgEHbYuhGXQMQTp1irza4g5Wrhad9RttqM4VM73264X6Lh",
  "key16": "5Xx9bNkjMDVNc1TA1LZNx2XSNYrsrRG3QQSqjfQ6SBjRJT6GMCFdT3JeWUionp9o92eDcw7TTEsmsqQ8jbq24wzF",
  "key17": "h5HfjJPZzGtZ9zsPBFXCnYgf8WzkYeVUGZotX1AENEfApb6GBxE8CPp7ASstDxdrYkAxY2ZWisM86t4ZxbfTXxt",
  "key18": "Uhj8F7Uvt8aNzk3rubc8tBZh6sof9K8ZrauczmYjAcWKATvXdq7HRv2fioY2WxkSVYR38FC2dkSh3EEBcYztDES",
  "key19": "43imX1tsb3wgNJdbkSr6PgDQNJQUfsHMPijwRScK6APFF67TJA4iYcEieHadASak6eRidfjSyXFPPzcfC38hT1KX",
  "key20": "2GKdZrf7V3cu4wBhQQhz8dEr79Uom6AuXvqvzu5tpdt9gSFBbH9R5p9ZtprfxFmVREVjYCWSr3FA9u2ZYFeqVXRu",
  "key21": "4NqHPvgZpxDT29SAZTnszBoDwxHmgBiLpwFaJhM2Di386HAUxnk4yoFzYyi9C4QN1vsLtnryrGMQbzuJhUKigw3F",
  "key22": "2tNo8Ytc52K5CSWqAcv7LvbyUhazb6wEr1Vz8jTpq4yTTX1mCQMatHdCGu9DyJ8nyCaytn18fWBGkcvGw9LFuWs6",
  "key23": "5Xxy3KvhvfybwMWjtTrUwTXfgQkgcQvdK7dTHJEfcC7hXobam9fR6f5gduj6LRwCJrRBUxQor78Jcy9iKU3vvHrD",
  "key24": "XEfEiU8MqBSGv9VfzGAbzmWvguCYXNW7Q9Vv2QSak8MNwSTx35AZY9kiMrtZprWrmzSBCtTeqfjoqbjff9JRpqW",
  "key25": "3aYMzSeP2EZCQdq1YQzErf8WZQjqTMZPhaD42zd72bd6T9NAKxQyq5ZZRpqu1M9TnKFdHx434ReVz98ZQEQLsLu8",
  "key26": "xnFo2Vz3xgVjPeMEftLrH73xDYcPempCGUogXBw64q1UyH1ZvvsnCGd7LTjNZ4C1tE99mhdFimDmnXeUjCRAJno",
  "key27": "jrU6GHy9dj7yGVJfp348okg6X26nVCTF57oXgecLJEp9GaBnoyskG1mmzcUyd4VzFQPKg1wRjq5J8TSEzZxqNQ1",
  "key28": "7AoiYTHUnEdmnJWsdggzWJq47ZoWuSmtwaYFS5Hv6ZnGwzm37JfWuYrAWzoCSMDLuSaVe724XAZjS7dpJMHikHf",
  "key29": "5YE8BPK9hPCUzbvpTZZ9HkxicZC9Vbg9yFKDZMre5ZdKFAQFGxEap5DkzLoUemAsBDbjqqrW3vxsPghr6m2tt8B",
  "key30": "3bRyDkTWj6wuFnbuxqSrXVdVgnZBTVs9PWEzD4N7txiuu6j5UUZ2NfmiBduVZcn3pefKQAyP7pu4Ski1TaL3b4o3",
  "key31": "3NyvZh6q6bogjRUeSGgisugHGa5HDp3vJP6qSoqfAUnrjhY8A8MmEyQxmL2ep6mHhTuN19kfhUezzAKUe5nBgLyX",
  "key32": "32KgFg3h46R5ZkNUNYc1cXbMUPzrttd8W1CZWQUmiVfWyhpG51VkuecPQWSyWbn6avVejNunVqhu7aU9hkvtb9s4",
  "key33": "3SSAaKsVouvvYDPhdnr88pRhJ6sKwdm6DxNLyRoSsR8jqd14Q9vc28utp3DEnS928Mh33BP64xJXcHhhQHjaYoFL",
  "key34": "5AbMVmDRLQRuS3KLK7L2y8jUdGDneoBF5FKf1dfidme3GiSNpU5SxMtd8FNxJ3B3mRjG6GLMn28o8dmQ9SzNQ7RW",
  "key35": "3AdiGADY8TGaUqH2PH9xCmRH3kdeQdv1J8iFdUhRk1pbavh9e5uLgozM1VScDFVn7tUcvZ4vneYr4bLXFMjzNxec",
  "key36": "4jCkAs9uYcdBraNvWYWTfNGHaoQUTK5no548WMrHoPiTSGHPCuZt1moBWAw2dhzVTaeZUKiQeMmenXjf2Hu6pko9",
  "key37": "2c3zPw1fAkPQrtpwu94uAdnzCtLfhxFJRwu3oTeCdymv12Rft1dHDTpKDtVZgUPrMsNWzwUUtj5JSfmVJhq41G33",
  "key38": "5ZdrPVpj4ucZYqoaY3ysc7Riw6VmMQwkV5aWSU1rsvtwZZcEkfZLZ8VUuB97Zwopf4Rmdy2JnQ6SRq7JepskVY67",
  "key39": "5bbiiKxFtpwTXDktorHnUcnFE2SSRsF9bT4s4vfJkmVcyZfPV5onBe7xt6nyf2QVzigtzaBfjmvgnDqaVJRbbaTc",
  "key40": "5qmgeMKCJ32Anf5mWrXavwAVExSTatMdAVWaUQv1EVsk3KGvDAW1MfjPnw8KWDd9wCDsJG7QBiaxpF1Z6FN3qgEh",
  "key41": "3nRj7N681hcNiP9okWRp4kkw9xwPjYWUEkJyKBpEHxLePJF9pk87L7KbkvwbnDsAx5NHC87BsDyfQ84HZ6ZmgTTs",
  "key42": "3F6PaMXXEFnSeDmqTBCP8sBdK9zUx2C5dQH4bzkK8dWaxym4eddy9N8U5YiJQVY75MF8uhpfWuU74XHxogaRF37G",
  "key43": "42QrufHPCqFYLoxE9nM4pmHg2bLV6kcFRFr7z2oB8NnY6VSsynYwnoHUien9fbUzERN8iEeAgpfRC7tepZqN6c3V",
  "key44": "53TG9mCpY5GNTmrG5uDqPpqmTqA6wnGnFtKd9uuokLZTXHGFrZzCLjNLFEnbrouiweVfoGF4cRJafmSMzK8gw4hY",
  "key45": "62DqEwCKtZ3sYze5bEP8jvGUNtvr77ze2eiFMfEFu9kt6cxQ5Le2AD4qnvBGFTnmnn5Pn15uaMmQuuPCMV5v4tTP",
  "key46": "3s6N75M5ZxmLvBU5VdFmdFf75B4g6m4mqjTDXCjjbjaPnwggA9CwJ6TDKLtEJ2Pi768nMHBK13n7jfYwUYbkHZ2S",
  "key47": "2goPqQqpBHFFTuyaAdqBgcuWNHpT27N39NGqH2wumwhubvCfXcf4DqfjyQFt3pRiQeTYWgzybMDCAtju4BFsF5Hv"
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
