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
    "3wQ9mqFiD5HHvZcxKbqwrHyMy8o95cRb1a5JNuXrGprF5ox5HrLBGboPokAuHcakGy2javqcnj1BBWa8xwf9nBtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLme1F69xM4MdNBDQqCnWmudiDeY1iC1CAHT5LTw1Ujy2izCRVJDbMiJ4cBpZ3QawTTS6kub6HVuWVzjJjwpe8y",
  "key1": "5eTccyfzr1EQZDoDo6SuFb45v1Rx7Wya8k7MptAB4AypThh9QMiC2P2QubEJtMheZU7Yry6zMTyhkxD5sLoMRLau",
  "key2": "3hdQiT6NosDUvNDgzjzUZCzSgpagZ5esysznaFAuDqbyCfwEjDZhETdH87CKChqrYjkzbRe9v6aVaENW5cgGnS7b",
  "key3": "2hiAds9UgxdWWg9H4q4D8cT8PRnXy6denxwMniWFnEAMzSFt1K6NjcioqfzSUiBg8p2B1U6XMKUuLZ9EbsWS3U8a",
  "key4": "4mEidpcUZ4XpvSyYBHL6up127vwJLMq23SknGJBkYdSQi4eirdy1TqmHQEfxbHDa7bqBvM4KtfBE2MGZwo6jVxg2",
  "key5": "2L1e72Q2hHHZgo5diurLvUznvpavo2cuSjKCLXWj7szbstCRQx6nanoFEe8KP76DN3bPx55UdtXC9tmhVjFaBQpQ",
  "key6": "4ytdSg45tpCzDJHC4e3ZZU7CCz84o8mn9qs4V12zHz842KUUp4q3xprCqauqjyAtYqmwuqsdexheqqzpGn9752z",
  "key7": "2hwhdMx8s6xn6LDQtuy1ft7AvRvTn4Avuco8yKAt69jnK8htTKEpAgk1euEQoPakv2VAcCcp2Cjyj9f5pwWhimTX",
  "key8": "4womJvqbNRhwUbaZFChemvAj27G8gEd871J4yZND6RsxBF1bSaXaBqJgf5GiHrJNaitsvqu6B78K5Cr2kQk6qz4r",
  "key9": "2Tyx2c2j4dDMDV2zmCiFwocqfHmzw43biDcMvn7FDPar8nfJBPetZzespBHhd5Fqgq28hwysZFnufwcCnEXPF7SA",
  "key10": "3UsVzLFN9qQmQNoHRSLfvLYDXSB2jbfZJjqu3d33YxVkyP3aBtgzhAPUhYDFVhgeXCSzV2eyi1doHq51hwjUKCns",
  "key11": "64c5ymbXu3EyL3vZzbXBgnxyKJyhNPgFd3adDgyLakXcN7e8GorJ7zYw6xtfq644Z6N5ni1i6qXPmMVZtRKnTmPm",
  "key12": "45pnUr5UFKhhp8QHLerRoPUp9qbYYWsXME8p8wg95dojy2tGZzViFMZzT8WHhq96sTMjnqN26CjRtNTEU8LSJdYa",
  "key13": "5UnDDLZ3E4R2XcqHyx6hPpi2MigT6NLVwegCenUZzwsbdZEdBUPvxJGwKoFwYSBxPnaokpFepfsiwkXgfeKH6qjc",
  "key14": "3mUvVGMQ4TXgQ2jXF5HR4RuQYB7b2Bt5idDAKoYFopxz3adn8zw1W3AytGMuxtM8F9TvdbVcVDvAe4Gb1eCcvLg1",
  "key15": "4iDmdoPH26qh1YuJ7kidc6SPZhzMVVqJkf9KFJvHAwpk6dWHaHpis2Bq8mbRDxBkFnsWjyYKxbxRLaCuVc4SWSAh",
  "key16": "3cfBPxrvAY2pTb7uRS54UQTR2KdXp8KC9GesGs2A8oUUhxpJDd5hAqr6FphMNqkp4uoj6LGWKFMN3y8yJSPvhif6",
  "key17": "4KYHTAJ7qqk5ff3tRfnKkDDMLQ7m32Do5U825N9ZBU63yQUfnDovDeQuY5pH6gWxY3JR5of43ufZtdv6bMVykAgV",
  "key18": "ZapFFYEPQhhUVKcEQSndcEZsW5j1qCNvrybEoEZ64ueNgQwVG9tkCZN2FGHRMaUm69CtVKFqDtjoG9tPqCCF7Yj",
  "key19": "36RZvTyJdeQzRMfsKpkXqysQiZahncFBj9Nc6S4MCWw3ziijx8yaVzSms9bw4XRaNuf9prCcyRZfB3whA81K1CzB",
  "key20": "4tVMfrqrrDLkbBGrhPXUAmhYMiNENMoxumRmesbaKUESuSJUt3ctr49C8BFauy4a6a6cJBjb5auAWR4qgXaXgG7c",
  "key21": "3EXKLhu51GK7yT29dirvMEcU4uCuPhXBmHChRZBvfujajbCczAtPqQBbfW6UdQb35X1k1i6A5Xwtw8yxEkx9RRQm",
  "key22": "5S2eNJM2iYobnt1TN67BrdQS6nGU7M8e297G5bPP36xPoXTCppF1bKSKrfZD2wcsMtVNMNxUP9MbzWMR6avSbrzR",
  "key23": "o1CxgPwZ2iGesphXGbDF5xDQjLN4L8h6L3YCcxywurPAYFke5uJu1wttbeHCugDB2aasFjDuYYX7kgvXLA5N98v",
  "key24": "3U9YFrHpoVArT9K9MwRKP1eBFmkWJ4PXuAjQT47YvWT7jQwMUHfagKJyFDoCjtZEN4s8GwPtiDwxcA8HFp48RGFz",
  "key25": "5R4F9vUq1zvyeNjkrj4Sfxp5dvQR1mX8LR1EUTXVTSYj2BEQLpriEgxFoWwYj6Wr5TR6K2u3n3HjYeM43V2rmmv3",
  "key26": "2xaV2c23DU6rEuB8JtheEggfHmgqgLUqRPoCVeMPqFac3nAEFajbPNvXaS6kPu4Um9PQxhekPo2Nx3DGikhMEi82",
  "key27": "5qTxiJAXwmp4SmyryHdxu5pMbsynDYY1QYsf795FHUVw6ifE2i5WP9KJYFb1bPegw1wAH8Thc5ajjXLxEufmpXca",
  "key28": "3yYXbi7ZJAQoKXBb9Q46Jau6c6yfZ8GxYEP5yK2gYMs46LP91ahUZLSSn3LQitNuUzG9gyDXXp6ErV7EdyTwuNm1",
  "key29": "yfCR18ojBJEDZdeaYwPoyzpSm1RtnxLN2PVVFpehmWoBsHU9ryoMuapDpkrZxLGVoRx73o493F8FKEvD632LhSd",
  "key30": "ikGB6b68J5YD82oTLeRZVBx8ujt2vWvm5Y7XS1uMoPJGeRKYG4dzMQApYpKsYFNR3h145GSiiTmcUF8R9tjiho1",
  "key31": "3tvZBKhsVNKcSCpmbRaqtCvmYo8ehsRH7vmQx68eEBiitJE7faTVhdWqTB8ev1U3JLSuKN81Nb2SJJL6JoqyJ1PF",
  "key32": "2h3nHQmkTDcmzArK8C7Hfo4M8vq3Pq4PHtpfgcfd1cwr6aLKWCbTQei7xbMmWeBpp3HjumxkuYBu8haReXYRhiMi",
  "key33": "5z7J7FHLqJGZDTdfiiMhw55knWEa7CF8KehHAfeUSAsM6o4J3pRDquTpufeyKrhFjU4aG4839riG1z7VozXY6NPX",
  "key34": "4tSvUQBUstxmmSSWXgjWor5xz3JNtMwsZzAx3Hjx1bh8ruaYQUR9REPfXDSvYxuWuQZKxw3PGqmZoid1FpgYKMRD",
  "key35": "2zfcLSntUjPjfv8bfw4FZMR3AqBoZv3GSSxnBVZoc8UUAbEAEdqHX1Jvo4DjqGnePKb17Svhz9sLT9XzSRgy18KK",
  "key36": "tqihUnGTdfNhVqX7tY6X1XqzUtS1XT16ebMqdfckQ3QCPkFJYz153YKYemccmLqCNMy46ySqFhVRoKVTkCXJb6c",
  "key37": "57zfSLUdwLeZcAwdJMtHFXh8EaDmb2ksksu63GHp3eBKiRRxY1GKgrLjJXvqU3476up76Nd7SmSGi961F3BfrxJ3",
  "key38": "2cyT6xfiRvzyCCY8Hc4eC5c1hF4tAcsb7aVqAhh8qZJiyWXXjEukCimpsb6Fh8QUYmrwrbdroGXbRzZn3hqJxJaD",
  "key39": "359yQfX8xvDLH9y6XCFzzopZbS1gQJjcUQt5yE7o67jdTDHnvgtPU4RAzboXCURXy2xjAYQg2eKhi1H7SQo73As3",
  "key40": "5J7yTyaSiUhk4dKnTy8h6xwZpCWc3uEK1r4BxefDcb4mVv9kwHP9pGR7529q4z5CRhTzrLJ5UdBVr9YfUVuDKpBH",
  "key41": "2uJ5gnenwAnh9sMTGGgEfJMfs7cAvtfbY1KKUdQci56HBxGveDXrAPyeDgM3oPax4NE9hW3H3g2MnResYhHiFcco",
  "key42": "4HeTtaGt366jJpjnhGti6MPKasrbhWgXxLqudrvKrxYSr4DQKxwygFo7o5wvtzGtT5z77iS2aD2yxnSjUTj3Ros9",
  "key43": "28V9yB4WXpqWcLSSMYWn8yzNv8H8Fqhrp95jg4E1ykDjNQycMDzRZDixmcDp1BwuVJhG47CBM7nQ7X6ZVqgeuFv2",
  "key44": "5YtfBxuUB6YAzopXAZuyxEcvSfEYqXQ6ei2BiDMANsE15vn89vmD9AGVwc8fLZXWhBTXDjYg9vWkp4wMz1iQ3MHA",
  "key45": "2Dn4PDKvrRnSPq5KvncyEBLc7XLerRJf9EDpvBbvPZvaUFWpopKtvKszYzKvaSgm7gdQ7u5LxAG7aaktuegcveq3",
  "key46": "3EqKKSbzZ4skA2gpFXx4gdUaN7AGtkSRimPg2BEEA6HqCMRZ7wcVx7GH1KnJwwmUg75JvucXNFvVE3SDUZ3BGPvh",
  "key47": "9SQejh3j7td9Nr2o5AzXWC6khuuvzRx6y1aBT8nFs5NGxzazou1Wa7aXyweJY4jZjNzZnBEzKFyp75ePP5wWjKb",
  "key48": "3BdeP6vXKTJAJQrNgiaFuBhutQKEUj7JPsaAPKzZvPs4KrFVTGeKTiYa6T22bL9aqf18vmSgwdKfhFZGjezoS5RK",
  "key49": "4Ur4axh4zf2P9UXyELaAsnXpLkrRb5Qtnt1JoMUEPZHttSgMAwsnraNL1cH84QQsqBHFpaaoQyJwyC6XdYpDrBoQ"
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
