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
    "3WXLd6i8SpegzjthsUxYMeTAXw7Cd9J9WgTzNk8oSkJLBVYFzLRfekhx4a9vf9PdK8DNAzijzi8npmM4Ec7WFQ5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZ9rnVEnv2rTGpVzAgVD2Uzsv3WuiEXHagB6i9HpxXdKz5mAEcMotRmmsqPt8g4opxhvhGjC58xLL3vS1wB8DB5",
  "key1": "2FvEgm3GddtXZWXQ3jhXNGNGGQmtW333ZFyyEMeGP3LZ498diPcBLPtFEKQSdcLVTkZWAyM7Pc3BtcuKasBQSYDF",
  "key2": "3jTzXqVUkfYdjLixkmGi3Hpzb1n74utZyjpa6yMt6faEvkJDLueC6nZyfB6jqoJyds9CzNTVoNauD8RLurxYSrSK",
  "key3": "4DhRgFJvoWCgoE66m8r11bxqVyvucj6FH1Z9KB5Yy8szWRuaRfJ2kNUMsGWfLLxeRfPcU7F5uRH21StA3bdKYVeY",
  "key4": "3ynW4VnJXq8W6eEp3igATmh4Dwqc21E563KWdhXPtNMNYhSVsCBwGmUQNZQsp34Z4Pk1qmVatr8ybjcANQkx1NSy",
  "key5": "W6zFsNRVqkLtkWbVNSWkJuDQHcFMhdxNrfvakbHgHk2SFmPVxBpjqeTaBcwZT63qpM4tchyA2H1GzNY6AEXcRhM",
  "key6": "4VxUXxoSh1wShqRHmdWyLb7bBNkBS6DhhZhorDuXL8SWuSSeURPfSQVYjdjqrTU1aXikiga7a2AnX2cnqN9VGmXF",
  "key7": "2rJn5PAekC879FmwaSkR43oj4PhfhRSeapnE18XqF2a7WfQ8dVnxYnFFCcHcPujh8js8bJZfBAmAFwuGSxDDTU9Q",
  "key8": "DmmKYSBoh2aDCS2drm2teqrtGkD6K5Z3NVL14fWccqrVmkZgtWQmW5rJC6fGyfugaFqNDWcCPJUyfqXwGAKs3V2",
  "key9": "2uFnPofAiGiuYwp7LfUa4qdpJ1yDFJ5z5VoMpg25QfpLP8VwGwLrMz15cyM2szvppy5rnS6M7zVhfaCa9Qf9PhGm",
  "key10": "5CQ6Zjc2gkGrX4TVnyvinu3wo22K9YfdcYFuE6ZrJZ7E4xUqgVWnEVknyyFoN3AfRZaRmeHdGxmhdy5Gb6ZcNY5f",
  "key11": "V6uwCfgqHQ5in7Zy8vnbbzzCCNo2ffB8TEpFLatDspXsJ7XyALVJ5co9LdM5q3qskUT855QLRo4b3myP41fSYpw",
  "key12": "4cUp7NmrwRu1c1mvKCQPinGNdHY34p1rsiMDj9diMqE4LophAjcfY2eEFpZFKsojSBV5obdePH7YhWQ8eP5jLvJY",
  "key13": "3esLLL9bGUN2DBN3fnqbpNBc9oyhpYoGMvbjM7koBM7kNnWpYPQSWsoY6crcvPq7m7wRfuwJanwJU9TzLvrvu2JT",
  "key14": "3FjR7W4AyUqb4Rz5bHzg6SK6R9k89EQ34e1ufeo4Vo1KsofHEdERPVx6kXzh4MPDJPrXfKs5pxfMUimHLWKLgmub",
  "key15": "3fsjcFAw2jRhQJBzk5rwARQ5ca36onu3XzFVMp6VorQ63aiCyBike3gUw3Z3DvmYGA1Tvt4TGXZNLMgt4FvedK5u",
  "key16": "4dobSV9V5KQfRd2drpefMBb3NCdsUkNVvuMYyHAFQrKUzcEtxsDKrsoz2Y4q9hXYy2qYK1EDiJDb4dAAxtX1k5bM",
  "key17": "4tJtZAW5ZkwjoiEjd3dwkQsQWtpGG9aezU68A2pE6JxX7mpyQExjWb2q4cz9kpKDPehK15f6hHvPZRB4w4KyS2s1",
  "key18": "3QtWccXJfMwxD7giic9FYHDPZ1WnSY5DB2n4ySBD7WqPFa3jMv9dPjBisrtVhYW663en2BixhLC1nZnMutMUWHb6",
  "key19": "5QDHzX8YdEL6CJBFewKHJsBPoiE43bSKeDnJf4JqMNLLkBMXYmmR4vhDsRxEgMjh5tYyH4z1bmVxvZMFDTV7FBWL",
  "key20": "4qBJDgPqH2QcgfZXGnCfzsUMuhXwUPZseGrMyDcqGz8FFD3o8iERCCnNeDXhiVm52Rh3MvykwVdTmEHXyLHvTJrD",
  "key21": "3Sx8LNkLXG8GYngXrAYKuUT8eJBq3kLA9JWJKeMDrBWnVXLDfmn36vwfVrVn5KE18ZfQ1c7vUuzh7tWrK4aFTvsB",
  "key22": "3dpMMpDfDaeRVSDc6kDgFhzK6PyVMaE1cempN1HVHC7QnQJzw8EgWXnZeovRLjjgsiQ7ejtYcdD843v8ceKDowES",
  "key23": "3YYQTYVkKbaWFCCfxy1eb7Gt8zfE5xw3pXVS3njnBoECURvC5jUyKSp6yPZusgpA98xqnnhPp9FWSP7Q65QAgt63",
  "key24": "2sYV3HEboi5S8ktJy7yJCAFjHeGT33FZ2RVP4DoMreMcWxWDt6GjBxxonEgVMofKH4A9bjsLfjA5Y8ijqrKMK5Pf",
  "key25": "5BEgZYj6TKa6tGfcvAgkkhXV566qmKp9hvStmM1APX2kZ7QhuzYEPw39SNXATmvsn4uWjtTERD65vBevTPv2pyqH",
  "key26": "47e5rNb55SPa5kcNwGi8QEiAAbVFCaTNbyY5uj84TRzYtB9XeJB7Nf2Wn1PpnCJ44xWW6t6MqNXR7AuxJRVGRLVw",
  "key27": "TWU9F7LS9bKahsE3KcsgDx4JjPvEAoXXfJL92xr4kRdy5JjaNmKSUTd8DJktzx5oToZY3Q5TxGfhDjNDRkpGB9m",
  "key28": "4Z8sbUp4iVxDg9z1rNGsSM4mASqNeQmZSqJjUcDHkAT7Yfs4B3ajETVtZxDq782HLPgNzp7qTuJwqW2FCfmeeqEs",
  "key29": "66k53X8duLEhXMAKKaVHSoasxpBFQ6zhg2TwYNhBvux16Bn7d5tp2s39JcDaZmfQ6WCCPsDBuqebDN1bHmzpW59K",
  "key30": "2bfLcWxrpV2SGfMgfsG7bATf5GQuw4YC4n8afv626jwL5Wr49uiRPvrtvYP2yEbh8PT76XQVGXz912iH6SrBFGgA",
  "key31": "43EdhXz2dMfmaKNLCerS2AJevP4E7yKKdJ1QYuFA74yBLC3fYwGNUtW6LePKJCru33PBPurrsjq3U4rvrRBDzZjz",
  "key32": "XcabmiJR72NYb58sVXtwm1LgRSUjJnQtN4Un58zDVkikCkWcVV3SshhD8BFwZAMDUdTNHfcVDtsAyyZd8D3xGLj",
  "key33": "2mfnhFoPvBNv9rDQzmbS3ptk7V77TusaCHqCQm5wuvW8KvTroVxeeCLz2LviXaGQ1FZj3Lm6LLFB7Ct491ugKgkb",
  "key34": "3Ex9mVWpe31BwZWhysoicgB34G4JQDGviYPNN97k3g7MiBKzXVLuMLSM2tLKPQBYc3Dv52uBDCjj36A8FZaputMm",
  "key35": "2R1PLV16s4bgrnfN9ZkwtdHMQy7GZkBHJgqj26S5rMHyVBJWbm6Rso7pQbfnBZ8FipW1J7TrNHPb9eAxm3FCezRh",
  "key36": "5giBAKAvuaRsPne2oFi2okNn9hREJokb4DUS2doo2VCQuz9rmzGnrc5kSRfEyZPdsBxhSgrQuigVYrdma4FPGpor",
  "key37": "4tMUN5U6NyUiG2pVJ782wDxG3uiDtAGPXHWheG59KzuUxqMJNnShhS6n5zzcC5fexxB5sk16Qfw62QhJZv6B1J7a",
  "key38": "3QSGzJndmHHzy2AXeRqQyE2fyZtoWk8uS38xgaH2eP5p4HCQXtC43knuzmbZwqfBxh59Xtx8zizKPYsVJYGrNYMT",
  "key39": "4E8pzajdGGc8a4zv3nCi5YnA3QVbEkS1DMdehCq1DhiohVMCwmh22gGiD5ihne3KNTv5PMGScr1SxPCU37usK6u",
  "key40": "2vK4Dty6scajNu2FKw2k8Cx6eHNJR8u9gzFVf83MxSWYtYCAgah15ALKxyyyAiaXNTmG97PnEUXiVXvEYR5yz8bs",
  "key41": "XLx9Y2WEQb7hJ5yhiwwzZ7uxcFZhLeDnQHoGM2KXfY65VTc4rVHU3x697v3TJKmTB2XBi3bF7NR9Z9ZeGTSbaAU",
  "key42": "6dYSU73eQpq7K7uhznJsTvAYjkZMyzWwS1AeswzkhpEqa9V56pxDLwjwnnss7LErrV3Lf9YC9ZeGNKhKbD3tU7H",
  "key43": "4uqQyeyqpEqDYsK1ZqZTryQY5KQ7hmRZjU2pETGh3vCTS6L9vD3JKVHahZfPVza7GsKxCv3dpP2QyZzEnet15p4G",
  "key44": "29Yg8z3xEJsnGtLtX9fipcqk6rLhgUhvQUNTDjtWKi4WPLRZTqNnKmiwXkaVBsv4CbZi8obzdCz1LBhSPyZ2FQfy",
  "key45": "4Ev16QGf7Aqimc8g3YZTBidwMqzzcDhAFxmRH17UwMuJ9T6mcXUvr6g3vXSA6VuNfgcfK1zvmS5Bybgxp2S3gqpU",
  "key46": "pbhLRvWfND5x4SAc1S4a5AbZMmzW8Ut6SHid16m1iL4Mut5jv3nUNcH91F6zXvjL5f398W4JfdDAk45c8R1CDx6",
  "key47": "5bPWKsbagsoDzBhDdQAUqP45T4SXeGTvRFo6SDtRe1YkrF8fa1EX2rSs24E2VvsDphDVscRQk4mmiTYJ5SEDQpND",
  "key48": "jchwvbZXRnxoashLKK78zSo9Z5FPn8vXupKDjqisMjyNDqs8wTgkqcRqP6FrnHMqCHVeYg9wiUKAHv6z3RRwWQ8"
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
