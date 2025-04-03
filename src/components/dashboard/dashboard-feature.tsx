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
    "MvfvbswDSDyk7BLikZfK4kJ5Hw79YjBrCxjMyZ3RFjTxP2qDXpF5dVMEt7mbUnEXvAzLwiZZuKEJC3JSywipQdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whQ77jQgaV4wsfqEn38EPQN6xWy8UyPWpoV7FU8GCg2q6T8yufv7a5TYDoQTUwGpFgjznUoinHr6P9dd8rAYNjh",
  "key1": "9eLkYRAPWkEZZ4TupSPviysZn24fYiCvvKKudYPMhVhPS6TFPLVHvFPKTHyZ7TBwkKQvMC3FKKrxGF7AGxksK1V",
  "key2": "3cBvdKHadjSdUf7SeY3pDaxSzmgyuLhEU6NcfuTxmimgVioFx1BipATJ7CzmTgdsvGmnTUhRx1LhpEFyighGFYQe",
  "key3": "62GjazP1gYZsYR4LYB2ScGpEuLv3GBbqdK5wX6SU7hghXfZtXGpQ4NZiyuvfBgaKkAAtV49sksosSjfNMnkkuSUR",
  "key4": "NWXbD8ryGtXL4QiQ28JnvCwyFNEKxV4iGxBE176nKD5aqVUxJuNxW6VH3Chb5ZkBYXT9KTbwcZzhGGi3QfdvsFf",
  "key5": "5m5jmNRUgQ6rie1LSeif65NrGB2wriDqkqf7kTM7GmWh1teWWgnJaQ3QXbji9UhKNsUBcoYUq77JdbU8KY2UL5EE",
  "key6": "5mSeiswb3TKcBpf5jWm8vGi6y28ypNRb3LPH2vQ97pEh2U6v2xGdJTsSWfY8FxPhpTT7TG9WzP8mzRJtiRrkBa3a",
  "key7": "3TuEYpmJiaHpg6vmjbwTLdtJNoQL9Yz7MiKPztAKjTFRgJEsVEbKd7kYmgu2kHJVjxFPKe5bxwHx8KtdkEvw2NsG",
  "key8": "RrZFg3i8Rh7Fng39pctX1Vcc4YoPeEvNa399YNSXw9m4tSyaxt6dbyRgqVVb1U3beqprn7dDKNHk9V3EBP5TsgY",
  "key9": "3vp1dkE14UPo4n513U2mHm3jCAxkvjXBkgqNDyheMx7ToKndraW8deSbubVRGXJK8gg5XMG7xw6NZrK5fbHkHLqD",
  "key10": "2daNax5ZPyY2rNAdseRZdv5Cp1S41CGWrcBF1ZSpQ8neBmNCXE277tJfw8TSA49CnH8HVpENB2DmXsA7LumfzPrN",
  "key11": "252agVsvgYFqAHk5nejfi2mx1ATrqAGAHxCri5UbPpqZNVYGkofWqgRX6r9uMzsq6TaVHJwFRoUGbUvqUbfiJFKZ",
  "key12": "3SBTbwETx69sWkC5AKHAMDt33LpbjZtfBq23UtwitZ7U5ZMgGVW5ofPJrfTgyr5htXrh3gTgXjo96ywNgVJo68rC",
  "key13": "5yFS3JSU5ja9TuYZSz2o4RiVMie1DBmPVeiFzw21oD6WMRcZWApnc73fMLcYqYenbVvUUaY8VALJWPLG3BqAh1b3",
  "key14": "ZtjvhjrCyk891SoVHutSaFq5LQkNEoDFrq9x7Cq1Eeunq3bCLCifnbyN6DVGNrRoX4jUYhhdXnJoWXnsKnQTuV3",
  "key15": "62vrPnSGBf7prgeTmmHQKhr9Lr4MoyVZiSpi4tHjSTXMRGJ2ScifUjGthGEujySvjcv9TARtvMigGiWu4Y97Leb7",
  "key16": "3SUaatnEBt72n7nq11rUcZTSkHqzXcSv3KNx2NKxPMGPQwfNp99NmErRL6MDEr5G9bfUm2S8z9cUwwGsCY12ZhKL",
  "key17": "R3anSBF1bBpnHyvVG7Fqw9kAUxZqRt6maqdCvtEPXeCKRM1CAs9LgvDNY52e2ikHKDk4ZZ8DZcHZXFyfW5ygAAC",
  "key18": "29khosbqTQtBqgjbmM31PEjnCeXk1uaEQt8k5uwQZth5SMCP2eQeo8DbGE3f7bj8kXBHXx1ddKm7id17z58wGrrM",
  "key19": "3gCzBr2DSMumsbGgCuYU9XdKUxHagC9ZmjaQj4cr1LEnGxnASBispBSV9Uiv9JzUWfsQXpQFA7DLFm1VXs6dL6TE",
  "key20": "5RW4HiJsVjmwZ9nC1VSr5qwAPqHwo3akv2ce5xapETMEkYx49GsRQChC7GRLDCykQBZa9FqKxbrdUCU8znxNCeaB",
  "key21": "41QSPgpyowG53Lio5CP38gn3JfYEAcDRQa2tTq8n6XL7UpsC5YpFSJGfrGmKMCQjrPtshawmfA9RPWY6TKmgVd4",
  "key22": "59zNRv73ajWyHYHma8b2AG43XD23TYquphxTQ5VQjiXLi3etGpHnByeHizdk7LotC9WpzXyaf1jms96B514Xq5zk",
  "key23": "3QJ6ZfFEjcYinj84iDZPeV6S7rGUREQHL9hLmL9m1mwYLyp8BF7bBVGQRCEBEX9xqzwe9fqNAs86ZKGPvD1vWMTy",
  "key24": "275q2duf87whZrPE4ezusdqnvyaJcJJFNwAcJBjTQ8oxomkeKnJXYstxkvc7r98VjGwn9Ltm41CR1zRGrSUJ3ioC",
  "key25": "2dDXWJdmyKh7XG8BEzYATyrF5smA2UyyoMZSNGibhYLnsLfKJPSSJtG5SVCvLLP5Lmr8Hzd7wEyFJWEzwz4kTWQ1",
  "key26": "5HKpRb4xdfiWk1GyL9RZeGG6xqiq9KjCSwx3Sq432RNytR1tFWd99598hhg4i2mRFjS6cpH9PPX3LAjsByJUYUw8",
  "key27": "DxYbVaGvYjgk44wQWf76YNLzLFqo6BBCzoRd5uKNNa48Gxe2kAEC4mfsMJTBAFAHWQp97zvRw2FijDfuWp4KPLd",
  "key28": "5E1s2x9s84L8jD9ai9T5FoakyLuqyyBaKqe3y65mpZaBL8Ytwh5Fd8M7GrgTTwi4jsjugXAcoeCs7Grfa8mUpSJo",
  "key29": "5n11LuDA9xuQN4faHJdp1nWmzzwCkWDHJYrmejFEuKgSzXDG9MXkZJZnXYUSWNRj566MCtci166UMYwRA1AgxJw4",
  "key30": "yNpEf4J3WNKD79AS6FVzjEAFXspfT9cfoKZsc5H5zZAJAPVpTuQpYRf8EvnocyipwKgtc7veGe5dX3KY9CwWcaN",
  "key31": "2bd834cMuLuFpgx3jiVes3Ehef8Q1NTgzsXmHLF6VTXyuKC6atCCwNmEMoM1kb3BWG5qs3UwzmLVJ7Rdg9DKQZaM",
  "key32": "2hjw7k6LvBzcTuyfqV2Wtpk3W9jzr1pcYFKUHH3heZTaKMq3irBQAeECkkfHURaDVtJJrCNW4H2bRgSEcFUVHhJt",
  "key33": "2RYSxdEyhMaqfth2ZEvaP73BRabinRMW1yCLH18bhqHTohHDzeR8AGWESN4CicNsERP9FSj951AN2whwK1ALYpGt",
  "key34": "2QSacpsyy223WT9V5fvbQpp996XSBmr14p34cgAkjpkqAKHone86GdPZUoBJiQWddaDED5DnjLMSbaEKQp6pvNpw",
  "key35": "2KGVFzHbRgzJk1p154CXLniMy3Kkbq6EyMxtPZVTswCpTAmAJPEsCDJPYHaj1muPyybihtnZ2VupjuYfVhrN2maj",
  "key36": "3YASwUUFzzPcvTTdUkwcR3XEnbHP9LvVCZhTyxyRJxmfFFgCBRHPKRZFNSuLKaQfnTmmqWWJTCs7KJHPToBAWshy",
  "key37": "49xT82PjYkvTbuaftiwiA8QpyBd2HsVurRF5CUoka2XasWRLEaGkrMm7zeaGXFjQCLdxEXG3oLe7xaSq5UGtKFqe",
  "key38": "i6pkarxPMD3MZkSe5FTFakydvNxKekEhTViPZdnLpdTnV1n3A9XZJf5n1isKoWxNXL7TXZJP6A2pY3H5qrHgwyE",
  "key39": "2MWb1pHwjKrUT7X368muFRX7uezvk1UMnskUqoxBzjGctgzoX2rEyx2s7kXqtz2JQxnv98zPygVdJetMgxEUmMG5",
  "key40": "5zd98bbBDHttAcvCfsfmEsoHWuhJYNE7EzaShcuxAHWgtwgY5iiN461wKxC79MaNVBy185KQX4aWy2ybnxAw8Vah",
  "key41": "2F661JKN82g2Bh3ukksbhNkk3SVbFLkeC7G8nffzdKxFCVzvrrNuEDA1MRVF1deLaeqznA65xDFn4Ht2pfkPGCU1",
  "key42": "3qgc7SewuAXNRVT1go9ib3b97fieZ3TuJG5oHT7hvZvZL9iq7hx4mrRJV18JoLXtxWb1xJsBRcFE2KhfD78AsNnG",
  "key43": "4UwD7tFQijMU4CqNnSdsiVPBTKToBdWfWtyQT5mKMFw6yQKcoy374k8bU7TVKBc98Gon52Hac2rgcw3tTqHNjqtw",
  "key44": "4sPy4KXuZzmtqs8aKe5u4ALqfccAUhRn2KtUbnuv4yaKsS1qNrBZcjVdeksz4A5GmUgrmhgRWQmqQnth266c3m5x",
  "key45": "44CbGvRZ7GVmUi1GiJsGkB52FwpXdijCcSUb2RnJ7f6Xir7kNGWREdvxshXj8fzTiArM1VAiizA45cWXWwLcE498",
  "key46": "4TfdfTxUX2ppxYSxu88kVjfY3Cdc3nkB9iG4a6vzXCofPAmDVoo4tAJe5e9JJitdXAPTEZMZs1dTZrH2vykDk1oY",
  "key47": "5WBBAt1of31asw9yjSxQarbMPTsvxw9ihzBESFhrNJwdEKNHPXZEJN4fg8pQMmNFw3H5RFv68kAqPyL2JTRBrrTv",
  "key48": "4DDtiUamr7eyrQMmz8w4Ni3fpHxJBHYcpdLAVKRmFuisQkiapTFaWKEyzMWDjhngDJcfTxNrHfNhnkSs9ZthwCuu",
  "key49": "5z6KPKtmt4fWD4eYcAS6JG7sdgpiL7s3Wss4ocht5vt9j8NNu1u5j356TRPLZWGs41vZ9GFkfhhAsX1doQ9VKBxM"
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
