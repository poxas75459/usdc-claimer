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
    "5x3LJGVBUKiH5jpDU2YB6ynBhu1dCBvW4M34AyYtwBe1nk7WXPuvPDpQAybqbYcFzP3Cq88uyojiKdgggmV8vp2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDosespTufSZUUj6Ptm8DTzghqnaorw5PRA2pWjF8kpoZdHveojVesAJU4eq9e9318fNzZoUJh1KyjQNsHbLvC4",
  "key1": "5LSsLLCLHWWpeTQAwAZQgQuT6WtqRtGNMjkZ2p5GG3gWvcKkEcQzFj3hh4wPfXP5d2yDu2hXonT8vTpM2642eogn",
  "key2": "53pJVh5G6vvZgwR269i6DtvWrEJhxRsxfDSBXHf91R1HdMnThkG4QCDZANTcFR5s7uHFJz2e7A9GevgfrPiBmMFn",
  "key3": "9zGFqEPScFS4Y7By1GQdSYknH1bvFLtRdV6p3JMeZ2yLZj2JRFDkYzbA6FQWNPUjBGgveJcmJ3ZXdHYsd9HqfiH",
  "key4": "3LbKQDyQ1Kq9TVwBNqgcnM4EmZEWV5qu3MStFQE1oVikLWzSXXFyWgJoCLYdBWBPtMsfdgHAMjL6D28KZmQWb7u4",
  "key5": "3khztYDoNPUr4ziSsJSSe4f5DHah138hx4ys74TaCy6egD2PXRgSDqYdipub4r64DkWr5CFsemS1DzZ5TPJGrmEM",
  "key6": "2R7yzAe4xxBRjaHfYnGKJ451oHtSMFc8B9X5EPuiPAt7RfLXRY3wHj8HuHBARYExarENnMM2SMjxcKyYg5qFC1oD",
  "key7": "3g6zBf6VC4BYkvXGxdtiWfQuwQvXG5NP7VJFDZHWNKAF4hFAkZByAD8Hg3TdLriL7KtsuYgWUF7DFvpKP5bkGBrM",
  "key8": "3DMQTfRvnRUjCoZ8wdBUdZgYLVq1f9duHEMda7hJbozW4SzJodS5yTWHi8nGZRnwDMQUewG8hp8scRzaE1PEam3D",
  "key9": "3qwUTqkfBnrxrhNMkSLRcMUkYckbFsg81oBNk8XCy9K4oWpJev3D21v5GV6KNv94z5JkWqRtmyXpmG98NpwY151x",
  "key10": "24tobDQFeL6p6vGeMBUiuZqVuCsCKF3epVUFxzpp85Mt3GJEEZH6XcamZZ3dfneTcmXPPVknXyKa8xEfAPVGaVFj",
  "key11": "5HJcGMtaLQcr8yC23M5gxVCMF1CrC7SYHSivyrAS1oZzN7PmNx5cG7stsxCuYtBveRP8yp5PiWJuiWy7E521cE1g",
  "key12": "4ACpym1t9TQAq64SVWDMADHKrMez9gHMk2gC24GPcD8Cf9oTbMRtV5RP2fHn3czNoaTrxK52H6VN6ranrNoFcgXX",
  "key13": "5KXp6Q626wKQihk6S88XfdQpgvpu6BXN7ugp42pF8pnYL3YGUVCMYGrhVTTjHDq3GkhTXDE2NzjiApoZjPVDFj4i",
  "key14": "5EiPF6GaKGoBHPLVxWGu9v3SzmjZQ2FbS5L6Awcv9h4yAMQPxsYpVXN4L24e3qeYKC3v4Hg7B8wajb6RQJNxH56d",
  "key15": "5FfwqLq6tVYJCypRr2G2PMa7ao62aQadXXwebdsK7ZmfAosKiuzSasyaWG64e5tsw8LmTXEB51vk8HqhrXKNG5N5",
  "key16": "33CY4CB7qeADUjaua4VA8X6xP2NWR56VfwP6mFXHmNQ2YxjwhQqjomGZr1BH7vu1nt7MEaSi2XA5uVbP6X5J8zG3",
  "key17": "4GNYuwZguJhBaCiPQuxGbKWcviz8KzTCUCrFXZrnZSyvgyHKrWo8ndsMYdN7XWZndhJp8hhMpBwiQaQogMwktv5b",
  "key18": "66Y3JqFFb3Bnz59h89KK3AtmNiScHobLE5LqwCyYNrcknP8W3KcAWQh66cgbRyZXnYdsncgavN6RwSuZGvDqAZR8",
  "key19": "3aHhwAKcrHgTXEH2xnDTAcFgE78hbu2jmfGUsYeeyd2RMJY1wz8eMuLT3Pktt7QvQqxe8P5Xx2F4hzkJKgfKQxhC",
  "key20": "oig4jYG8fZrjyLjURDXZW3EWD4zXmgMBpbEYzEUpPCBifufyUjabcTdn4DvivdDbpa6QtpaPPC32pZVkJagtotU",
  "key21": "qpvGTwstPUZND6mU83kQNgZew8KHgarvtGq2fxCrmpTFDXyLDFys34WK1ixAHgw8vbemHLZ65hEvsaZ2548qn18",
  "key22": "DcviXAvxxLbh3XLMfZpvybxUmyLUSDuv1Ast9nVtndX49Qg3MUDe4TqxgbWS9Pgep8WJNxNZ3EnMLvx72Y59ToE",
  "key23": "3ANxXgmxJ6LDhb8YPoCXjWX2bcN5HoeSsQDa4kQpE2BPrUktUxQymFcnR4iY4Zd3E7Dc1TLJL6oRAhwGtUiCf1zc",
  "key24": "5DK4zXNrqWoUMcURP5Fq7P8bYbJo4gd5C4zhM6UxRHSmTDFA4jwNrRyodhX9Vojj6VAomndFcBbSZ3MBTFmSfjbK",
  "key25": "4Acd1CgnKxmBNSTdxxpvo9m8JZfBRnNuaWgviyVPzbtgfGfwxYatsgmG5ut1gkRm5zWrzrD7KWnZD8WyCe7CS2S4",
  "key26": "4LhLKkYhybeKTqzYQvW1UoW9SRE4if1EkyhxXo9RSTojj2pUS5d8tKXF9jWUqmtsYNycRjwH4dTwtzAkDKz6Mxqs",
  "key27": "4iV7RJsZ5vqZJwsYVLbsQSsK8FCjwoAmALrQv8BNGeyvVw6pQLTKmG3ekDyT5LLdeeKC967EPZEgPT4xSHLf8AQm",
  "key28": "3YCUStU3BMKzgRUDchGZNviSatGoEArDKKixk1f2qdWUxwQAQv2Uu7AgoFKsDTsFSG2DjdDaJzRN4sKod1hAKAo2",
  "key29": "2X8jm1oH5ofU7Caye3s8ekMs7MgS6q1qzpEMkEweEtXuxxDkUPcAKP97qVjromD66zGAPJSbn5aAmxzR9xaSzaLN",
  "key30": "3ZgMDoPExmk2Xat1HEBzotuFV1Uohj1jv4o2HEwwcs8oQ9Gd8Zm86SrD7w9pJdYDYX4VuMNyZMTkSx4ULc3SjFXL",
  "key31": "z8pxkYKPyd48hhLsBzvUysruk2XtizXd3poRiZUCGS92YykPctL7kGEG959Tf2x9HSTqrquXBdRwDeoWDvA2KQN",
  "key32": "LiQ49yAkECSDYhG99zDUs8NPamBxF1VXo8uo2aL6P9uzEfN3q6T1mrVVRTo1cDkNnSTaGAPjxbj9gmMYAGazfsA",
  "key33": "2RQSS8LAB6HhE9dtFo4qeA7bjAbkS9vxLpKYo6vWc3xF1Gr9RasfnaGLKpyutx2Ru1AJu8LMC5jLwuJFVqZGc6j",
  "key34": "3CWXvepYKHqaAE1bTWZPZedZ3vGx7jVhotBTk2EopggvEgZwVkJJQiaJvMm6eHZgjdVwRTPUYQVW9bqQHGKSGiXj",
  "key35": "JGM3ts7yJyvi6A5izrevENq8uuRZiPQFJRhXf4V5vveBEfZm97NPFnUyort1EzefnoxC1XMKay9yRwnA1HUU2p6",
  "key36": "6c84zk66CJhDeMiaQnWAHJPwYAi8MjCo8bKaegU3HDrtLGVsQhnXcfow6WYjw3aPz9wdkWq4HhqkGwR8HHQo32A",
  "key37": "3esiHX8b8ZdpAfz5tC2Tur83V2xxR2bT9c3gGyXiUr7i38cjTtVcKEeh66o8U9z3bYiBochJ2dmmCKYtr2C9AoJJ",
  "key38": "uZEmqaifWC4GqcTmgfbwZUZStmKEPCCSTcabN45GjfYzdjJ4PsZwJgbxU5UURvhDy57PzAmNcDNRFa81DwzhvzC",
  "key39": "4mZ5Rw16LsHfe3h1ohMt1FfVn2v6NkzTD6F5PXN6S8aZUFSWSS5j1gA3C59VTjgocWM5B7jLPSCr54jbv58AHZK2",
  "key40": "3bBHC6BZKZCABoSVB45iSFtn4CZav2Ni4xs7Wqmwe11K1gBrYAPtohigPELxHy7fC93UftGauehrGVDYon439CmD",
  "key41": "5zcpJbAyE1Lir4H8ddpcRFd2qsgo2Fqr17SRW1oJn5HP5X7k1b6xmuhXQKBrQuJ6sMLMDbAncb5RsMQCuMyb2KGL",
  "key42": "5Qjrt3uGT1FY7iT5ocLJ2rEVPft8Wq8z6R8T6TkPikVLTKhVwUEn4fVc4SRxrZataeNCdaVV2hQKNVMcGcePzQKj",
  "key43": "2YdVSfEPircHn7xSmRxrzYNeLTuKVvgu2WsAJ6qg8GrARPBAzLZJmNKqfYkJQpEebhpQdn1ZQTRcvS8LfRkCSjMZ",
  "key44": "3PeAKZwuBmbwrXSJub2BL1qBYcrdri9EvR8p2Xa4cSp94vdHgFDXc8dFUJ6iyUggW8pQTavPkxt3hwuCYRTjHKni",
  "key45": "4UktbsvZCc26EWxSTUiuM3AhKGDvxsqD4Rj5ZApSCKiFXady73JpJNvQaTU6v2PrXGqQqE3HLnUEUobdmcNUhTBK",
  "key46": "5AsMvy6BBehkTsvr7AHj9yCmS1T4d1HZLFzsgrNrmwjwCSHCXNYFMcVoayv666Fq7BymmNsmHLsfM8cVDWWj83rX"
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
