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
    "55q9d6dTYLmnHJFrzqJ2ZbXJPLjkZc3nEFAzJxcemSixZ7CE2Q7BWKGp5RZaCZsqNQRQXLvvcUuYug6i5weozide"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvVxvUtwx9on6UvbqwASPubWUHuTC3pUMCf8AeXSUFPenjw8YinJ3vvjPSE1Zt8dxNT5ckyGth1rMqbcac7koSH",
  "key1": "3AEP7omaFPvLUwUbCVztZwFT8arrRRFXdP1wcSh1trTyr1mG2gMAGBxtaVtw1RrMCXmxij5qxh9FX31t9E5Vj2An",
  "key2": "E98hyXstG64W4rmKaiBh3YJF8VrzFj16TW8AqzGZthzjHGQgKBLif3QLCKjVBPoaHEzm3BUdRBDdds53oAduEmP",
  "key3": "4y89GeFVciJ3FNSZukW4DNUWbSBSLH4WJPuup7GXqqwAgEeSJRp2v8f8M795r3KtcafqSkexas4YYPrEpCQYp8fz",
  "key4": "2khBrBR9bHDfiQwR6LgAezDNonKSe2wQraDH7YyZm22em9iTXSnstZtGHuLCfaQSahFTR2J4Sa2gZi9VRDCA1Ugi",
  "key5": "3TgqLxhtXHXLBECHU7tSCpjAwCkvVGAA4m6ViPGb6yroePJS2Z6g2u1dsgtBmVHsd1DYf6L4s15ZwbiFLDfZgsoo",
  "key6": "3ZqqUjm1eW71LTNcGVtweY7cctVsf5syZZjkD2d1yQb5Y2QMUKrK7MtEJegHq19iu1o7Z8SXVbDvUj38ma3DKHYh",
  "key7": "3nEKEupRL6ni1y9799awGs7YHQeqxMLrR4WPtdZpSVJTeUzHJQeQqses1AuNv4XdodUzpSv1feqazc73p8xfApcm",
  "key8": "4aKtWZ2DRfA2isVKY2h6pq8M46fH6u4qebybD2z5YBhsBJhgAWQapD5kazaU6b64dQHM4MpoCsxVFxjYeFh33ag3",
  "key9": "2bUeM5HmNuSNznHv7rVTW8Xh1te3iwDEfxRxgqsLDJ7w9Rz2EKN1gtVbVxMeYJ15sKN9PLYQ5KA7RzQz68L2QFhx",
  "key10": "4op8yoXGnnUqsM7w7Lku3e3AmCtFXENhKPwTzfKLRuyrsDNf5GTAsmARwYgshZ99SgT1wGYioQ2JfPdaaL44QnVZ",
  "key11": "2vh7op8ER9LHoVRJ9RwW49pNyPeh4N4en1UWam5GZcgwHgm1Teggu63Sbsx9R9eA1u6SBGuwk4GzDVxNzyJFpan4",
  "key12": "RsN674zfHdEbuYr3j4x6yMWJpsTPnCL72khk1DmFpLGCVSpWCwUQhocivgMXbMCvLU5J532o4sU4xos7UsP23ob",
  "key13": "Exux4uahWYBstmz7eXZ9NLP2NssfGCH15WTGWY5wj19RwC1g6SBThvDkCss1YibADfruVxff2ihu9M8Sw2Xx4Kw",
  "key14": "2n2hQABL7R9nsvJatVLxjiUJLhb7RmakFLfz5Qb8z19ZTTLwTK3aF7THoVbXvG2eN4ERUzyWMdjhZZ4Jf43jVvrt",
  "key15": "3kuXaDk4ijDTkYpYqiHtaQheCcg8mbc8ZKAyq9YVBeeSW8Wpj8AxSf1TUrtQevMeyEk7pNtquxH7KNLUoC6TfEKi",
  "key16": "oqaXdpgYz9q4fVgo9NMQa5gVtjjrk9ph77F7kDajrR1zeoXApCurCUWVkcxs8m3XJC4Fr6Tyk3ZMH2ucyXbJYVu",
  "key17": "2jKAxZ27mWZCkFUjVbZrV5hTV5A737RpBQHDQcArB6e6GUfGiQNA21bS1iGn5qUUDmZsgmJwr2GhL3isVGLEnCyu",
  "key18": "Etcm7cg6L5xRAYsnjN8RRv2puGRSZU9UQUyMNFvkYJx6yMVNS3nkPfm2CFas5b3j5UJbbksQzjKsQwin4Sgb5p8",
  "key19": "4NBoRBWe1EGwmeemGxrGG4wXrpEsCMrqiJxp2sZWsCS3F1dCEzbdZezqGU7UMcsoiazbfVeHwTPMs3krYc3mYqtF",
  "key20": "421j1GBUSrgi5ejt5rtpyzPjeaw9ZwTMKVcksZX1p4Q4vGpH9gXjPCYQVeWtUbtvj99MDXAQuKhWwqftknKJGr6X",
  "key21": "2G2uCmkkqHVCdevNSE5mk2gg8vS6biB1RBvpyDt35tyq2X2eRrUHpsswqHfdYQVukRhinD5rYbB4jXPWpcPoeMcd",
  "key22": "5Lc6ZfgvC9mTVA52rexFvh6bToYaznJmXAMMrAr8fGvZpma4oRbHZDXMVtoEduC1YgyT2Jry3YBtE4UmRRUxEtjV",
  "key23": "3yR6xDfSQtHrhdBaWDHYyEKCpwFJHuEp9vyUkeSHLKauGRJWR4GFJaxRuxQUwqXNYoN391r7GngDBiH6hkU33y5F",
  "key24": "5FDSyYdjzpD3djszBaBvoJ1stvbTmPabNZDXATg7LKpEadhfpiDYYuic8CST6cXSHZZJQHncsqKgAxXyN3o48gET",
  "key25": "4F6hmCEZ5WsuihCisw4hzwUgC6ycgmbZ52eGMhhP8XUCFMAXv818MQ3X12HTiNVk8V16skyHyKktghHRRCK2XNN7",
  "key26": "26KmetE4D9M3e9rf7qSiKDd7hyaLCDRxYb2Q42HWQqDHjUKqM7xbwgW4Acysa1TdVQqCVH9qyWsEAS8eN5KgjCRb",
  "key27": "2Ra3qypkuKiHVA7sGCtvHSJ4s8cZoj3G921KwnJUg4nZB3F9D5wuwnG2pygYRjrKM92GYeMQG5nRJVX9YruPEtne",
  "key28": "3e9iHLmnQSucfiftHdhQUjWeUVirM2zqXLqnRH6Qxyf66T3j5eUffiFXhsahPxXQcYvm7mNMtz9Jh8yWPDsRyLE8",
  "key29": "LwNGDJE8sxYvdusM1KQfjUbSgs53jtwpbjT7kdMz2nE5gHyT7RnznWUFPSfZMtP7KvZicZxq2B9pSzv8XjR11CD"
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
