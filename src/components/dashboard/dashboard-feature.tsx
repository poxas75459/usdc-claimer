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
    "2bBbzYMEN65gjM24pL74AgT1AmQR2aKdRJNip1iaLTcXSEFM4r94v6Sr78gmNi9q1HvjWg9cr2rPhn6secndrGor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNHbdhmV4FmVE4Me9kZz77HezasTo9bA4fwb98k3PnGjXVdn8VFrVa5nEofUhU3T7snpi5Bxe2LD3joCc3bKPcD",
  "key1": "2DWAn7cgh5Anrdnb9bFExCoVCTpNkZyrjUP4w69Hvn37tX4Vn5d86vnWDs93iEFr8Fn6Hhc61NjCvkNoLTQXojo3",
  "key2": "4NerPdEDfjBH4TSPjHmSuw61Z7w2x53mPWSYiJaPCvVWiSJsu9aQgE9FyhJux3M8QLVxMoVPcfReXkskYg9G7LXF",
  "key3": "5wGyb8SXQRtazz6tYqt1xaKikUJz6aRYbG4xVVCBa9R4BA1Sutdj83f7izHVWi3W4EkrM73UrjZV9aUZUB4k4SNX",
  "key4": "NEca6KaShhzmqVpHQtZBoPdrhvMSJSZA2jEXLruUx7dCB8mWyqYUHQDrWFqath5jb3EAQD1e9npBxvYiu2sTqdh",
  "key5": "WGHfgiudAQkEAMMUQUUKPuALw6uAJicyWNbNhHhavzWH79WLvDiqXKmCShKLmAnEqG15LpS48WGz2iDHRsnxmAN",
  "key6": "4mD69UsNvsyS348f33Jmrqd87xY91LTvLmDk9qW6qSiWCMT3d2Vy2jpKubkZwVCxeixV1gKVxtZxCRz4WpQUn4d3",
  "key7": "9pcWnrwFKT2jpSyVQDTaG2u1isG1uLz9Lw33QgwSGJ9zJErTUptFywspy2oSSi3fD1BKS9U3NT87kaPiGczDNjn",
  "key8": "5ZEEdDnGQXmRuYUSFrUE1GSPNnSUrjKPV2Za5UNfBoC3WhQXbRuqhYWowyJct9aVKXs8G6NQdWgRqoUJXnjo9qJo",
  "key9": "3acWZrLfqEsAdreNGrXmqtUUBGuPdy9EH4MfNgSBjrEzK1mvBg3GhPhry5E9zLH6jE7n5Vcpg4TQtLxDRwoYhvqr",
  "key10": "3pQ8T2CVDaMyegCs8PkSwXTiWLmYQ43bRpmfQstcZSywQDFjkLd2N5K4DNuZnyeEprmwtvbv5QvSTZLLHC9UknWz",
  "key11": "2unNeQQMk9wgqCbpvcc2PqKTHi8QWi9smUP5UT8dt19ZszftSW3EffyYmmndm8uQWmoayemZaXiTR5QsSFydbmhn",
  "key12": "4uYBMcoxE4Rj7GkNsHi2u9GbrYRyhdc1FbjSMKUG5ZbdYAYUwdhbMTiKpTguFKXvtFC9M8U8JKimA6iVmWGtozr1",
  "key13": "5Mzhnue584DNREb5s2mvix2TL9XXxk3YHo7DkLD8hLkoAvF2cHTANmtDyNHdNMnAx1MmS9CJpk8PSkkHC82u8qRy",
  "key14": "5gUccYNubcTg3tTSBfDKUBNmXQrR9peowvdi5XVBz3PAiNmZ88wxG7mCThuuuC8FmEvt8CgTSyVYhmFrAFZKPcFE",
  "key15": "5M4oMGEe1acn86VkH5Vph7b6tQhFjX47eaESiWsGSkNAZduvH5i8JMUaNNoXpFdr9NCjimESXoWZUN8pyPMuE68R",
  "key16": "5qZvhBjXtxe71Ag9Jv64fz9P3p4DvcKgwvK6CDWfqxP43AmkLHfLfsrLajprJZ4iXamBhHhaCkeip15RAaMr97GA",
  "key17": "4BFx2KFXKFVHsC2sSxdiX7WKojD2Pdex6eEEJK8JKK1WE94pX8RUrE68zLq5aP8nXfmUzM1Awkb8h2n1zaDvM4Jw",
  "key18": "4Z2qmQAYpw2Hr4odDoGZnQjpAUTuEbPsfTwY5VDU93tdxLTiRV2TpeJFyszkWUpVWzwHscEENCycdRQGB8FouhjU",
  "key19": "AeLbdUPokTpgQsLcDx7cUH4126i36NHrpTVMDAaMFcpgiwHhrEFhBeuZMACpL49UXBux7MdPCsJ3WC84opXctZ8",
  "key20": "2wwMbwXP8zLvbXmqMnPvjoTTPmH246hTKpWh51eMMe2N8zyk1FtxRMvSC4kWswwg9x2NW6Q2iVAdNGQVQrS5TZSX",
  "key21": "35AZ5Z9HYks24X4GgXVKZjHUbwjPPBx2j3GTdc4hUXdfFqfSP3s63gv3zXz88DcBrEnBNkQjF8FCQb9aEa8srrHQ",
  "key22": "NQgkNZfr8kduQcupWVo777Y5qjqsR3zk9aFC1SYqH1hxD43JwMMgtHm6Eu8QbWvkjEhRPxH4SPGKrS8cSm7Tb9U",
  "key23": "3oLFinwdAr38bESkqV9j6ZGDtdUybSBNp3E1WQ2AUNxiK3ExKVgA8xLGjMzdehhbAaMKfQauEHaysEJ3v2PtKWzn",
  "key24": "4Vsx9dQR6bsB1XTJpxwG7WPuQJuunLhaaiwoLW6C7azQYbR6s3ak88bkSXMma6mTsr9H5mdoB5yE9YXUKsW2Ynbw",
  "key25": "2sAUv7tWZCj5syycHEMvxbgXmp9M2SvrXmZ2jJk4LmzDCzJfgsEDVLxMUaKb6DY6ULpsdMrLQKUY8MvZKPQxHWEW",
  "key26": "2JcQqP7qyPFJRW27Ve3kD43yMTpKgzvsy88jUVRze9QWDz83DpRY42Gr5Qt3C7moqmo34wKDb62cx3zsR9U2hDH1",
  "key27": "39armtQornzs2oxtcSYBPLAeE9uJGbWk8evtWg6f4UNCXCrHoQzPw5G743F6qDZaU3tNqkiuyCA42av5RZn5DkvV",
  "key28": "4cx3VXpWp5uCMhJZEcmuaoQ4gqhAxXsgJpJss5hUopds19iAjiCFo2CgJpQ7cbQfgQvcZWnP6K6uoioS8gTwp9Xn",
  "key29": "JhNwmNgiPFGpxdh9biSzNGyn84WAuSMfSELgCamewvPHRdqghdqYrWG7owbuUFWxyhq1us2n9TwmUVJ4TL3VDDm",
  "key30": "2NAZaucPkYfufcGJCt1CV9xtu3Br6go8pyacmipLNqm6LdJmiPYDqe84gK4RRgsT7LHX82y9FZhBLi1UDuUPeede",
  "key31": "2XfAz5qz1UeCXg8ofydoHm2jAqcNj16HAGSGUsQW2odH4PMNb69DBAV6FfLRcqWiPizjiFr6LaBJXGQvXJG9cG86",
  "key32": "3JxZwDeFwPBNFvD4Pf7pDHErUUPpsrp24dNddLdPojUdiKNCbWgpZMhn46iA3ug88Z29tFDKfBQmspwdAHkUgp1E",
  "key33": "3JPwYWzH3fy3doUfBU5qLgpg8i5HzS2ph6rwnZrbcT133TQTKWnuXPxQSPX42SWUdJyeXS2zYSViM7onWDrJeP8t",
  "key34": "5h14uupbH2EPCxmqGqzihhPjVqVpktoeW997KxKz6aZ4cUCNUUzfxN6z3bSeUhb8PPzZdLi4utxE3fvsdhDUkUg9",
  "key35": "nq3xyiK8jG9p7vVZHaAYwojeo3CQpCxebhjXbBW5kZSJSQpemsCkssWBLYUmUuu2SnyYMgXPMwYWineXzviqaFe",
  "key36": "3m5abaagxGR5DvatR8bvs3o6sH1LgeBHoLRj4VQYJ1mnSKtCuMRxVR67p1RtYQh5DgYdbVhf5B2gvhscXs9BjM4p",
  "key37": "zS6JKX7wGDLYcc3RfMzWtBSVdiHsHNJJcQTwpBVSN8UZDZ8ks9AshpeXPRMDBnvfmAg2bAQyoYHXbpWVa34qyZ8",
  "key38": "24MNYdgNvyivXMNHXpVQCfaBxX4TScgnTQUjk7f6GstWg8mRA7DqFAGwsWTWvFdJ7a2Eg3Hwqgcce5KWpi3zysZh",
  "key39": "3srYV11fbVkP8z5H8Q6HsJ1ZuHem3kWRrM5jPXr2s8mrn9kAafiQYW4G4Coep7yaJNt6BJVySBFqEAvJa1f6RfWW",
  "key40": "2s5CekL9vKfvAh9dcJTA4bVznWdr7SgpsEjyrurrHwN92ijpVMYGUhEfZnJtU9CPV2yug8ftVWNNLqytTeQ4Ps5v",
  "key41": "c64iknyycfCRnJGexuJa4rBiYGpkQfK9VMmug1Zys3fqmYw5SbxQknhBKYBVekQcbZpe5g9HQwAqczuizxL4Wv6",
  "key42": "3ct8LMztY1GxJLm3q5UbnPP9oMydPrnm1aKyBbKBUTp7fEw5m9vUsUV9LvixWyx2vjheDURp6YS2tG39XRiXxwwN",
  "key43": "4em2oJza7aHfXhWZ13Qbt2Y6kRocKLpY2xYRvFeiW7FHQCmhNPpxTbzJcAZ3uXZAKAyrHLH7m7daMoMdnBvF5Yhz",
  "key44": "3PGejwfbnSTKTKpeWUoLdv3pBAEfeukiqF3rGqZ8QQznJx5LWYqcXCbNwJGBSPr7xcbXKfkU1KgPaJTvoqEYrSBp",
  "key45": "xgxkTyrFzrk3hYvTJKjyAKoryWC4iGDwTtEhhmmR1xhnuBhoyDhWEaibYqRtmoq19965A9LMKmrSxd1YztULdxS",
  "key46": "5C7Uf9HouwwoQL2AYVqsfjADv7QcxNPWzrr9W7MbRtYTHQvWSqTTxwLsUDQfCovMXufBiq7ZKQCXpf2cqP6fFoC8"
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
