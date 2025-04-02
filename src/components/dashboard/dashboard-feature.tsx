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
    "52CnAvTDh5RYr2KaZrrquSn6aiv8eMC76KiU1TfHX1Dtr19X8vz4WoNQ93znxFKq6wURfT8VTGCKH4Cadbq1MCyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VKbonhjHmskDJXGZcNDv3aSeCiwLsuueRhY6shSjsQt6RRKUfHkLDbSsGQAPgtNT6hXVz8HfvLaFqnanNk1zHeu",
  "key1": "4xmSyzZRASMwo3JKEqnRPmqu7xNX1T2Z6mFSwjASQbmLufhN5HtA3c9Qd4CfQmHYKLS3DoRGcF5uxci7oMPz3UiU",
  "key2": "4TJHuhTurX46HS7GE2p7W1ckwMuy5MnH5BusDAbR5ieHxaPfF6mTCmgpPZxpEL2h6JHNdA3s1nfZoRmF5g2HA8Df",
  "key3": "5ktweqjctTVeEPuTwVjC3bC1DzLn5HfkJpd6DqgTojEo3EQgZRKFbLTQYfxvH9KCC5GXct8SnraxJumrLbc4A3JP",
  "key4": "4BLxJk47AnjLZ5rufYU8gTC1wZCbdYtzfPmtAjUERfa9E28sXCVcH632Wp2TaXga4EL9k9UJemT3ojYZpdb5WoP8",
  "key5": "2AEvr3CDnx2MJFiBY8ds1PgxsP7QjUjkYxMEGAu7CxQd3H8RuQiPwj5Ns7sXEoNVrRnjVCP5tCGtKaQ7aryRsZtd",
  "key6": "4aQtrTr1jN4hiem21Qn5cJei3bE4Es8boJoJFod9AKj9eDJEePWzbhZNEG1pwUfRGcFnCrAdrMVz1HBeJwu55jEU",
  "key7": "2huk7i2kgYkFqbYoeSkzFdta6p8CK6BMYqHUg9qH9d6YrcuF79bktoofLJvmq3xqtugQiPNcyy8tnwe8iSV2QF2V",
  "key8": "2k1CXkfEfFQVKrVsTFs3d1MQs9DkpMsxst3U9uDwjxe21C7QZcmgjHzoSY7DB3RR7oMBUdG3ezVDF2822Zfy31CW",
  "key9": "4n4Pu3uvtQ5tkbKtyyAqqZCCyPTbi2i4CjNxtxhDdeBRYyo72AmYfjQ3P69AuG8nvMhgKkqLjVqUFrbMQuAU8ueu",
  "key10": "SW3FF54FTWnsZYdPN4cxMEWvQBUPu3dztGSLE4ZXdWugHHB4mqcXWkXPESx87A1NzGU2NKXiYLFs48aJkG3SHvQ",
  "key11": "NSq9DpBzsm27oMTNcjQusgujHZzizMys6YqFZgueRZ12Eq9sPZkmc2JFr3zQq2ZF2SGhst5SEKnccxnsr2Lij6A",
  "key12": "4GfRhFXtnkkaiXRBX4JZR1hmHnSQVqFxtfEVHbZn4eiXYhwaTdtc8yH2yMMHsBWju2aMb8r7RjPbQK2PotknnyYn",
  "key13": "VENxr4Po4ihvPVUnPtF7AJdBoeCYmbr177LG5j6Z48QLAB5JYLJ2cNCoRXRAdvLSVcqDKCrAnB8FycvNsC4oTjD",
  "key14": "4Gs8XrPN6zJuq33ZKVCrZGCJk7Mxe4SSU8ZUjZQoQuu3xJTcwxXTdmYdZHdgc779deNU8Fgn5Fpt1zfo7Z9iHt1E",
  "key15": "3QMsvpaCd3QZVFfo7f7DqUN96ACxW9aRgNwZzoUdNu44mUxz5G2jtBx2HaZuYbmQsTXreX91QfC7mCDLvSjsrX4b",
  "key16": "iTvaMzqMrMW2YV9ngV7GKfh9RZhaHj6bZCab25r9i79mPkN4FnTJaCS6T2URxSy87CTwxvWFJADTQW319DFMras",
  "key17": "wbvYEWvFhKtYfwZViw6TUiLRQxsDqihZUDBzJGnam2R55Gps1tf6T4TtcqYWFma8vpNAQiBsgoEXV7GcNGvND2z",
  "key18": "48SS8CB4TR1W7w6dQHL1XM2RNtNanHdXMEsGgw9JSnYdFSD1VqMwC8beEU6REa6LAdYesXskBVevQAVZz9VA9dzM",
  "key19": "3PmxJBjTQg4emTafdGe6NqKt5ozJYE44X61urJ54CP3KajX7vosnxu8kYoXjyswTkS4MGicJJQibSKSt1NDfbsSF",
  "key20": "4cfMkkdpykN4LSbb5MbQw515p3G28DNfHoEw9duWHT3oAaqnqMDqhuhgGaxoSYN95dmw1XWJbgSTLVUiJuK8cDoB",
  "key21": "MYrtx2aduSR2W4L76z5zWqSzL9GbpA5h7VJXXHJbQ2Yhx1Xck9eZyGarYa6n8fqQ8qLbuxz3Tf5gBT9qDZNYEJp",
  "key22": "2wcMY13isLNGz1FRV7dM9Etsz8iatwkiwi4MTYx8bDzMc6A8igXztdxQ4R4Ct7W1Y9Zu1jkbkq8w6CXFod45EHRw",
  "key23": "2afJmALFxqmKEZUyP1HraPzp5vnXHdQ4kHBsVaNGh2e4ucExBGNkJB5AiKn2wfFuMyzkPBZLdfSFyUbB84GG72XJ",
  "key24": "4mQpybcZ36hTSLXz55mAfsNu6fcGjMXrECD7369uvEMV2dzabreyAjDvSqTjCFcjn1X68pyW1s6yJWLdA1cgAPrL",
  "key25": "VUpVv8SeYLv6ybzRWvMqqZeUDK46Wi8wkiS2r1jwswugwfwvzgmFkPFTj9jKhkpMv4auBvJdYdJmAqUZWwrJGPo",
  "key26": "zn7HdH3pjzsRr5phtD15kfwf4ZM7qKGTGbLbUADuqVBTQ6deL1UfrBTVd7P2J87jrTdB7G2fj25VBSzZREeh8ZG",
  "key27": "4FGgmDSfKZgyRVrkYzCfC3UhGfUqGioGqauQKa4otMCo8JksvavMCMAazZKKNswgjknEWGJSVLXd8WtLs52xRuPB",
  "key28": "qqDBwxyXVcEAPWwpjVLp82m7ZRoMaSEAF26PUi2ziWocVPtKA4rMZAnGLFhLJaELG8Ahh6rn5JKw1LaoH2mBnkm",
  "key29": "iXkbenFxWewCiT3stf8NNmA1pQWqgHnhzwhL49so2rQjEAEUgeGbMiWoFXcKafKNsyHWVpVfj3jGm7xr2btBWT6",
  "key30": "2FmSZ77XdGWTuZeEPV8G8BM7ukcsA4z33heDz4SHq1qQk93CsF3HTcXkQLEGtYzL55JjrmXSiHAeWey58Tbs7vLJ",
  "key31": "4kNEL4Rg3YdAAhJ4gH1LyLuEWJH7Z3kyB3QWaCj2XaPk6sVnm4xZDwaFwymKTr7ytBFVWjyihWFkuoz9eZ8jn7CS",
  "key32": "3cULj5BVuoDWhrxGfM6UpurhY3uzC21eGQgcAQshjbeCxC27KAvn7W45qB2ur2u5GkgkeSqFFdpwqpcZzUQwv4EX",
  "key33": "3c2CyH5712zJe3Y33XbSeWF1tSgKFp9hsjtGKgn8MrbzGiKZxWmehFntTzHVR1zpJy4G7bfgpvbyN82GhxtHfQvi",
  "key34": "34pyjCpGq4JCiDmPMtwaT44ZvZhruSEWu8LB2SQrLSU7RL8SneRRKvT4jG7C5Z9aZ8LJiZYDDmbXHtg7Yb3inPFn",
  "key35": "3JjD9hpVJFtvhb5cxa9KbZ9MgzKw9JB3rToHnQcVCxLQghg4f3HNYZjB7vNaMnWDaAiwUUw24is1mq4mAGEJVNUi",
  "key36": "5zD6XyrUZZu7A4QEEk6m2D8iYEaUtRdDePgdP3vVG79aiLuQ4BecxtnnJPBvR9rHWDdLxEgwTFAEVA4oMjQWxy1m",
  "key37": "3HscCyvf4GZ6FXTcbTb1BGtNCUuu2dpr9BwWf1xbSWCgk6q2sAqu9wWEHHt8HbKMN8qNEDGH8nY2kZLtEjo6EvdA",
  "key38": "2jF5mqpjJCi9oaDL8WaoCcLHeq1nkhTd8XxhwjdRWyvenjD4UoE6kRW7eFfL5k2zM9sAVjzjeWggipXk34Z1dNwj",
  "key39": "3CHf6UKoHVZrsCCMaiJwMF1Az7yLDWjJgxq1D5Kohoh6kFauDkHfzsy7kjVuxty1GoKGTi9aJPx2kvNY9tb3og6s",
  "key40": "5CUYzeZPQ4QEV5My4JT6oatX1h4y7HFUdtwEhCK9QZTMqaBFsJyDFEuwjTYmpvdWUdpmpYHC5GJjBJERpyeUuSWC",
  "key41": "4pseyiX2Nc6qvYCSEAf8bFixSX4fnzYSRm7KrBdLx9jd9uZaG3UiTmmMoSwKfFbxyeCKkM9V31ie2JdVcq7NPdjr"
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
