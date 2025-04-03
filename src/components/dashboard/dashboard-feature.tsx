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
    "2wChts4X5JW622pC7NBMKdUAeE4ZeLxzxweZquxEGJrvJbqtyNiQbqGiW7PXzZh2vci19uexRBDQQnftah2vMDbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYuqXcEV12Yh4bizrf4a7Hfu8ZvMw6h5iq8JRafomdY4jkJw7Ji45Zqw3YqGPSWrSv2wQskFYm39fHqqgfoV44n",
  "key1": "NwDjNF63JHUPMrWvme8ETNWg8BJYciafBW9iRzxN9SGNVAGcMtRzcYXJ3LwLXRhaTu9fcXn6MTpZ2yMaKJfkLms",
  "key2": "5Y41gCdPfT944LFY5KVzHstkuJhcJCEQBkh62nAQqNcwhgbG7EQtZWhdwBZWnFuqJtNut4N8dqfKsFCZmtAQL8mE",
  "key3": "kYEDoy3iQp3kmeRZou22Ba8HCpFTPHNsFG7wAbki8wLrqR8VnMCDpHQu4bou2tVEQQns7cXtps8WRFB3GpCK67k",
  "key4": "5WjSVAYgC2NYXy3pWS1YjQTfn6rQyUK2ioNGb6pxfMdyofPyEBufbTgFpQCHeeMZCegCVG9A4UsMCBig9qoepW2f",
  "key5": "2WpdBEg4cNpQqf3bG7DWZezWeZf41GY3FEgfJsqwdsfHVsTdtViP198BZA27N64KWTP1nzVY1idXs1hnE29XMcRE",
  "key6": "EtMj6YUCARqsa4Nuwwagc3woDRw3vip9We9A1r7PaFPRvMQ9VXB4nrKtqxdWkiDGLyyn25ypn6tkVNRCk4hey5p",
  "key7": "5gcV7gV5zMj4QJ1KnZkqjfP7cCAMgtHNUj6HsjW51UitGnjD8kCdWnM36xo8BQj89fafiQHJAMxS5mAW637GsbKt",
  "key8": "M9f6749k9izU2djv2uTb48PMaDBwDTnXRA3yHTrkCuWM48f6BMEtVcE1km6MJ2PuhHssmDFLVjZsZDghAtpJzaA",
  "key9": "djafGyZDtD67r5QdU3qkKXBX12jUjRBH1am7kZRWXSrnK81EeroGJ3Neh8Bz955r3zutUfCaz8ZY2EdVthZk9SD",
  "key10": "WxwsaHSTQLY5GRi6A3nsqMgFbcs8PY1xKrAx1rTY2ikr9wodTPmQHHwbKP6PAseTZxw5L946hn6QDTr7orysoeS",
  "key11": "2PoF9LiL8r9wD6tU8ZtbiAo2viPXrXjKZq8uFAUfdFqMtRc6eodWA69z6E6k2zxeqfbWqp3qUK3QSipKxXyScJNq",
  "key12": "5ooQHbUraLqDyahamznuR6gRNkFDGMpX33FNDweidiQYt5jU8KJiEqiV4RSaybSpoWyRPimbEG331EenPjK9co8P",
  "key13": "63vj7HNxagzgBxRdnyMh3J4KBsiosPsPQkwdfofAwSZxPLpPumHDkwux7uDifpZrm3G9hkQ2Y8uLeHqZ8nJ43q9a",
  "key14": "4aC8VrJWB9rh4KZkiRYuH9YA5epKcNyfDiJQTH3A8B3Rw7H4vA4yLRzHiGpwcBmXCkXXtTB5j3evzcTnU5u2cLnB",
  "key15": "5HBvyoTj8PFumCcGxPDa1kudnu6mN1niSmQPufMRmB2S46taEwnzsnRcSZ9q8F3e9UzT5JCFzL6QZRytWjE6HeUr",
  "key16": "45xXr4NHvkcTo2BEHtVquAB5yW7Tzk1CHxEpWdRFaaHPsTG5dBtA4qbigmAMraAdiKtkZJ2qMVfWaugdsgxHEgXC",
  "key17": "3nYhHtAUrT7zULaSTM4MpJFCRYyesiJWoCRxbtjLop2caXQjiouT24RFCFsnesP1paFCqGy35k186tiPnxz8n6Tr",
  "key18": "2uvtRoKzmeDsLQuc6BwQ3YHjr51DhqVR81zokXiktb4AJyR7P1jkU35NhchWqfUKnHMrmSJP9Ngj397JU5KZGyUg",
  "key19": "4cpe6o6uMjD6xqvDHxy5p6x7WvfPonmN7jYeoLRayHVhXk718DhxcBCZKDMoG2Ld2WwwcrfwQVJyZct6XYsctcPB",
  "key20": "4MVFTbT8y8m8yac7ENG1ptcT3sJt2LXRaraJ4JJTJCm7JCqqLw9ajLqtUuHszjDzAS9zSqZiVWaBtvct3WAn3uzL",
  "key21": "4KskdTtuq8yfLmgCaKakpXDw2efTHWNbkfRfzn5dYD6THYfCwGMjBkVc76yxy5p61nLHgdjXKCFC3R4TaFJhkbhV",
  "key22": "4CDhXdFXuYXF8xiPUyAe8Mm6aH1QzEXHhH73gAf1dbP5D7DSas5rQCwfuucRTRRd9xPgRqUDY2UjtHWMNn2R8j11",
  "key23": "oymoLcJVFtPHWmwyQqLFCkZvPDhjYHLz7UNkuJoXAeM2wMdJKzwLrJUZtfz8aALdgXJbGRES9JoL2vxx4THQde7",
  "key24": "54rBMZ5MHjoD7gMmdVKbGrtZXvKF7H8pwQGfviKTa83hPoZEao86z4FMhpPkLVoJqhkWTCW53Uhd2zkixpsZvsDC",
  "key25": "uVWTnYybfxRynQdYsuzsvpXAoB6xBJABA8mkstramDUfv7SeXPNA9a9KTkwYR5XoaQQkUt2jq9b5EZXzLUCjCg2",
  "key26": "59ryS6vxn1PcrhqAWaw9WEhTY9WFnwThjkCF57BfewsZz69LWjx6x5eRChgWCLPR7jkD9DMvV2UD3zZ1U8V9cQTj",
  "key27": "2jjsGm9mX9oe8TfDSr5oirpkJ3JBoF85Lcuoh8oz3JHXpe4C3NQNbx71w54RvunRUPitE98hbH5gSUMFxYFjKZsw",
  "key28": "eQZfsNjjxe7fJcLPUuqkLCdW5Nc69tCWaKZXR8gAt1YjhL9seDeknEYK3XgjHKx9quj3cJd48aXva7LjweirqEN",
  "key29": "2Cd7HMwjPw2xD39mj9qpBGQVcaH2sME62CNy7oU3YYtrDKbBbsuLh3DgfZZQGjCoL7FhEuwkNrg19nAdo8wUrMWN",
  "key30": "3M4wCntzR98PisRJ3oaiDcCXQwd2kw7HKBypSNhgYQjshuwdVryS9cDQyCSkuin67AGV6kPDDyY7PHa77A7N8dmw",
  "key31": "5mjB7Xbtfas2wamBbvLQ64QLwuUxmFNRff6QBHRDK1mYi2yCw2qt4MB3imzv17iyr1f17MrYNHoPZA2oMyvx5kcR",
  "key32": "2AYBqnYjzL5Cs6g8UaTrJmjDss4r1QPRsdkgtDwQoFzbwtVTUJ1bhKZ6P97GZF6UAxiXsCPcFWNyysGfvD7DwYsv",
  "key33": "e5sWnxtUU38n8Z1jkfEADHEcF5SewQZ3L8BM6rtAYWjHpSqng5pxs1pM1PyZNSBH1MCDRnVTXMuRQ42L8y7oSc5",
  "key34": "31fE76DiCALzNgBovEpWfsRXnEinqy8EDrpZCtojQz7yHFhV8Weh6fZS56JzBAtiKL86kP4hspZk8Yve47FeQ5gF",
  "key35": "4piJd4ZZ8V1Ap4e6WJPKEosHudLPYtrkRPQnQMwNnQPjexyPzxecoSnPjRdvvkKTeogmebsnSqbSymPrAujKyihG",
  "key36": "2tx2CcnTqbDJQvS1m1KZVX6h3pyrMZEYNbcENDzq3onbF2AzDuN3ZggEJCdMpBsDBzMsKUnP1ybHrGJuRgBiVj2w",
  "key37": "2qYrFepnLAcYyzBG1HabTqne4XPvsSjJhAPExYZcCo3gtMLnxgcHLyHEzLh1naUn8kBbX7kNLH6e7YQ6nyaAGKJy",
  "key38": "axpF2qNj5WyrLp1PQ9nYRCt3jq5c2RDpjHPFJKiEWXXYbpr3VdxvVFshTPrz5MFiieszusfJXtMvs8LFeaXSWvh",
  "key39": "4JtTH24ZZtBvTvSNBNPgwwT9YWoqAcQvFQUGT4s8LwJdh73JrZwhgTY29towtgczjLG5vQHPkd6NTd1bbHxY7NYj",
  "key40": "3fsEQ2qZL5A4s8Lbm79kEYJRM5NpZjecyVZnv3TVTrGrNa5xzCmqPqzqJfaq7YAswdcYCoE47zy4heeXWJWJcPZw",
  "key41": "2WRMay41sianaZwRuuAyZgfka3e3pY9NCnuKUoLAMgV38parTG5HQ6XPshfYWjYHhVFCsBw1mRFkG55hmxSJ3kab",
  "key42": "5ZkJnJkvJWvLgqYeL28Uz64nZ2SpcGXq5yNuxCNSbu5aLQVcgJ5XzCXectJuMEgxXwYJ7BpaWw668JVXc5auX6WS",
  "key43": "3vbkYsrsecEbWx7xZJDy7zPgNGvgssgavNag5fhbL2XFsoVPBvncMnLKjRMPJg1ZUacybaNk4pQPQiMiV84WuwU"
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
