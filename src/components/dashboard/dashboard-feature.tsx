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
    "5macEC9fmBrr2tC5nBtcdKCc2Wdvfwcbn2UHCQXyrSH6Pk8AYw2NMRfzPoGaAUPMgeLaTiDe2cYm5KnLmqkdLwiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBgcZHbzRMEp7s5FGTT3MQxxDFHR8B23JpmJKo5bpZmYmHE8kv6v7GG8UknJRZFkmA13FpUknyqicxSU1fGVwWe",
  "key1": "3uogJd49pLqgGQCsMCVJGaGcbeKW4J3q9d3X2ARJyhJzJTVUDH6149kks94TZ3uuRLGP8kMVyu6txkHaoMUqyBv6",
  "key2": "2NXqrwAgAsThC78aZ8VCBvBknzBNH4bDYGiD9198uDmmQSFRMKAYBpBxfdFua1G6f9Uu4GhVvsE1LJ9LNw6jmLna",
  "key3": "4YWL8Uj7DQe8awU147DjGUV5WonEVD6qMvAK4ysNb7SKeFF7Y1PNgfMRh1LZkTsiTLEnhhLjzhGsrHgN1vooLEx6",
  "key4": "RH8kLQDYruv2vK5DTpNQZ426hrqK4kAYaw4UGfrnAX5PoHYCjFxFHYcc7Tuw1mAmnyfv4FnHfRPajFCbCi3ivRd",
  "key5": "9WA4FUMWymx5sBAE7woxnegcc7ubJ9e47ZnmeoumCteAaSRNrYysbhZ1ykShH34DJHTp4wK3NBwa1EmvvDQikbB",
  "key6": "4ruo3QPs3vgG9tQF1a3r5yrvgERBUDiUGJNv657Y6dgrLvHmMADMghX7JHBj1dGmaYvWekYznZ6FzdSFG92pTwKG",
  "key7": "29ztibGKA7HVXpSa8pTJvjR6cHKULDmJbeVGERhfWf19Lm2fGr49TApfWGtDJdTAWi6uUJBasm49Pkrj3zcLkdhv",
  "key8": "3AfT2KMYxrgwHwiWb8TbkYNsoJsRDUyJA8UfsMJKfYgZHUmY5TPzg79GBaKQRACw6v4BeMaRT6QP3h1b9yh93uG5",
  "key9": "491KX9LgoRvjoZFcfSFck3JCDxHMuhToKFu5Y3ZExaGeAoZfpdsJrY8TS9w4EKwm87UsZXJeWmcoqNBbSqBcrhr5",
  "key10": "24PbcFzoS6XP5tD3GnX4faHZxZiLoofXEGDZUdwieo8bqX5gFy8hrVieB2GPiGABsHpAeBcy6qu7Y78sLN97sKDZ",
  "key11": "27SpncQpLGtNiP4fa2XLXHrc7YkrsCLzVJPw9f4ydvGJFbHUQUcrdeEJwwmwRvfny1the1Hd4JCCB1DvWHx6z2b5",
  "key12": "2eise2wVBcdH4ZK2RedYE6JHhA3mdN1FcdEQdjxfeZCZD2TyoS6smhhR6zb6t2xRuY4zeVUVfWjmGk5mu6ZTA8oz",
  "key13": "45BK3iwGsSJtkzBkno7TWbEsoxMntsCTgYxHqENFkj1EWTeqzUXPyZgKHwWMJmtLorXH1DYgQGwty7bY4dvnEg6z",
  "key14": "4NxWYr5GeCN7r3sKUfDBtNbhyYaHo2wkBHhjaShPeh7NApcB3jP1myxnY5h8CZoSKrcSoQ7ufMDPa4MwcccMhhCZ",
  "key15": "aWKvzfHnbutCa93SBS9vBvFEW3oGSeCf92LQiqz9EtB3PpQixffVKADhgJBai6BqsXRFuQxoeZUGpnALqoKJ7bg",
  "key16": "4GDvwv9TmyTmXvce2Jdvegwi5t3ahLjZ4S11kiEWnjrsGJUv7LmjSXky5k9vE44ZyvKiyxZ8snCwddfCBsNHitp",
  "key17": "5gt3pV8USGjfy54visZSPyjSXm3mkrHFYtaVAbyd3FDAFwoFsdruQivjGDKguDoGuuzKio3MufJR8CZ4q73Z9RLX",
  "key18": "4ze7WwfrrjHQiT8pXUrDQSRrREQzWaNa7EDrQkYD4w4JDQcmusx3Jbgpo4xRFpFD5ek4MDRWSdKWwWLoLJcJXob9",
  "key19": "2se6byHi3NaedLGbFJmpsYzojq3J7iN51XVphGY8kR6cnKzoKrgbn7PA9F1Beyn8Lwitgw2aKEmYnvgUavHM8Ht9",
  "key20": "kiFk4HYS4QwjvBzmeR3wSKQpgNDQLqG7LHFG9nAYaNvQ8rWTHM9AeHMi3EBwdeF8xNZPLai7FqDwBi1JEYDM9p8",
  "key21": "FPAuhcUyJTTHJHmE2mYzh8vW81tZVPQVD4xNg9dtU3WhDraeC7swWfPTFhv5BfCa73BftFQYibxYR3ACj9ruNaR",
  "key22": "5FC187RuzqRPM2tg4iSW5ND6M8nUSiFMLwF8yXeeBgw2HBYoj966nArs5tYX2NRHRu3PwDej89rSFzN1qE2PFiUf",
  "key23": "38rZ5NFteUpHaDKj6RbLUTwSuZS7Gg3e544B3zz7Vy7yorWpge1CkTm6w4raQKcAq3MUaR3ec29oCnzg1GuuRCAm",
  "key24": "3ymd3CnAPBwK3F64J55xGB28ZQVRnqkeaEwEpzp5kjwyaWvPXpJhPp9EoVKbHT2UfgLmVSUmQnXzjMEti3Q9xfGp",
  "key25": "4DneQyTSCijAVZ1h5862ZjsdnvF2ngdckFf4pj3wzBxoQpVRRurpKcbuDMbeckemeBiseGmJdt8329uzxqr9ohSN",
  "key26": "3rdUmeJ713SjJD2AXyJAtERhZ4X3NRkAHG8bPRiq2H2f3iFsuhZamRbkXjVB6urMdQcY1wxSBSgMWDZL1ErQvKQp",
  "key27": "4VZ4idFoSLdu3iNwb1WkzhmpnuLJnCDhXjv4jiTkNwTXCX726cso3GwuLA5dQzJgm48p6mPCkzLwVTRy4YpC8qcU",
  "key28": "5VGsD2karCxcstTh6MhcxCuHenyiJjne4KQXUbe9rqxJXk2ozNstmBDx3totqTvU3umPEDmhqqFsjv2zDWMLpm6j",
  "key29": "3e61AF8FZGjHDaoS7SCoPq1xvmwzFTcLUZn5EXL4eRr2hCrdaM3FRfAcAdsv31giqGved646qg5iUhJ3M9PJs4ef",
  "key30": "5qwTj4QAh4jxvst1W88UsKyH5T13SWqTjQyuXd54GjvPAgWjMWkE8JP2ptFXPvHUjNq3e4ksTXZxiV2sczSMaGEN",
  "key31": "3YJ3S5uKJQKATWLQFT6Tb5ucbZT8wVCWhyV1qcrjfEaZKnuva93RkJTcibQwv8vMYXhErgiiBddNa88K6w1iZSV4",
  "key32": "4EGU7gqdXhCs8HE2vtc7tkUZgM1iByvU87o9eerJtZwmfwyEsdr6pwPmBxKVNRRPzbMtvdA3W7PfBS8xzzgtbSe8",
  "key33": "5jsZQK28GgwXMpGMYZxqbS2u9sq4rULB3QL5SA3sEsgQhqQBpQYoAWbrximhCpeAwkMdmKg5JNads3PLNHkmDT8k",
  "key34": "674zi1r1wPHgz1KBH8aHRpJnp5JXbbSaA1er8A6AnYKkb2WqJPY66roMScMCrEBHUQTjicRbByTDz7LjMvETZJwk",
  "key35": "5egRzHAnLbA92aEz4wEs8a42judvoNKTgdgAc3H3kQWDyEvQtEFQmDwy4P9MvK4o9yNtvZ44NPqVSFaToU1hqq5Z",
  "key36": "4EMBc3phQgyT1y2EgEmPfteQmQMHaMXFESSQyXKiLHmoUV4Y7ZYHaf6PVAJ8GEzrsr3vbgV4FWMc7Z9AVtKF441i",
  "key37": "4SwUbnJEx1xY22pzPnqENanHnazJHUvBRPJud8prC8fJqqKfCJaeTf3gYsS6nqQet255oiXcPEih9abHuCrrn8GR",
  "key38": "5pZ97vw52KFPvXj1YoHKZkcs6iQvfyaMVbhVZHTXTHUjCf4SgCybVA1sTaFNRqMeSoJeMDPH4bTkzrt7dgFuRTL6",
  "key39": "3YTSw7P4YXsXuqkm3pNgbBXqj55U8qYMh6RektBVxa4i8TiWfpzpxVBDmr1q7fvDZ92vzY2pnawXiV1aTp1TpQxZ",
  "key40": "27VF8wsZjQaAHnyt83jkepfJ5KbwisxEq5dfieZMr4EgiazZnve9NHzTiWSu9oU2AgA7q79meZtpsfaPrj8uPxC2",
  "key41": "oowbdHaH7xMrpumQqwZH7XQCBTtrVpybdyY4cFGjzfbc5RDndfv9Cey6pQfwk2QkYqJCuSAMfYgwcfGsDigngqd",
  "key42": "4Ry1D7QPfS3EnD4oZp1dWWCj8BVWPipU7PqCGURJfgonA95nq88HZz5b88xdLVFTTVRpb1oGnf94dqqh6DxmAJGa",
  "key43": "65voughhTWEAfhe2Ennr3kAgWcbXBXV8uDSdRGHzrxej8GVMnR7nC2F3t6tFcaBmAz7gF7Lym4QcGivYqNKrG3o8"
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
