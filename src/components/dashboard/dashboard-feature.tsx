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
    "2GZARP7SnmfZ2TxB5oj1xngNBC9U5yVDZg1jzMMzHWYHn5nJRiyavwGd5yaEbSXgcWThFUMNH9hfown4jFt6U7cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55vKQE6RwW9jUXYv32geqhBo41ev5o8Aqto8q63qAzasiYREt8cBraUFfe5jSn2F1BzXXjghWBXoFizffkfvRZHj",
  "key1": "VJDMiL1jJiok9ZLyXEHYytZBEBJZRy2qcSRzFth4VHWGYwVJq6EdYdo6cHFbDdt8RiJP3SJSL9qzMywYVfMDWN6",
  "key2": "43MJp5hgA5vtuyrN6fJBvWqd6CR4poGd2xdetcDskoAMRyHesKRNjvJtyLXnybgAdA2p7i3VoVAkPZtLHKQLwiY5",
  "key3": "4i74ufkZLCHcerDnTRgZqQwUdHJ8roiH6AoUAH9xvNBBKn27vzwitvKxAgqmpmuiRQairaJhGSFf1CgfzZqqed4A",
  "key4": "5mHMSnorMVCVSy2Yvwcmk5fRQLtnLM6cFxXKLo7viekm2soxdCjByjAN68ZpKqwcbEBas9Hr6ZWDCchZXXhxtMDd",
  "key5": "mwqZHcy7EPWksQMuCgbZe14YJ6JZNgoiv3p8Z46xxWqUWJf3sggRn8zpho6Zb5cKTJagjjvyqcjPA7dGciz2yJZ",
  "key6": "5cXK9EoCfEpnFAvcSE9XvhS28Z2gsaFak53SuZ7App9sfPUuHSXojsvUzDEMnJU1TYm9vjh8866W4kaj2ckawngG",
  "key7": "4xLMJ1hZkd8mtpvH5UG8JgoTMtrVPTUDthkafbyutHFwLHyhcNqrHBWpcohobEonPV6Jrs1vY9QrJNHNfokoAgJn",
  "key8": "66QHat3onc3vrX8hD3tGzXcp8mixHebHPfV2GRY2aSLH5NpVNVRFM1pPkrGLte7EpH2KvkCukLAZ8skxgUQbc2fi",
  "key9": "2kZhk7rfgN6EJ8uRUsqiwdRcx5NiTvVSPEWXjwB3krdLriShostWLhrcefQKKxSKiLh2665jxFr147bGj5pPyh3g",
  "key10": "pUBoZQ1KU3adNuBAxcEP7Y4jU6pmDH81So7fNNQ72TzTqG7a1KETfwMNmZQq4pjJ8EQR2wYyE1b7xYHkoMJTtNG",
  "key11": "4f3sH7wABmJAppf5FEYzxDPRfVsom18RTbg4sBcgHb2ox6hh9aHmC1ywNGkBhZgx2heNyt1x4d14CjhBkUfrRftf",
  "key12": "58jW4mPwjiSEZXG8hHZ1en94k3N97yphnBBo6PSFcTCDCqu64Drm4xgcKULRGqQtMLTpbhF68jWaphEMDhNpX3EA",
  "key13": "2WuNppk4qC1EWpXQhbAgYGfejyMdB6YfuW5QwNWigB3k1BjSW6HYHnAX8qvN9JvyGSchmbxRjHeUH12oWiKttrCk",
  "key14": "4d8ygMxdoxNJrTaircvbPE5EJ4LsQwsMU2DGNnWT3bpf3a7TZtyrVAfdBie5HHGWuzLtPRaGwxgUREFn68zmMLmk",
  "key15": "wCSDGUu8q37C6cya2c3TUAZMMtqsBNdNR4hj5HABQsTa3vfBnSSgr2FpeDLu6UkMMQtcm9QDbn8SSyeRiYMKdWH",
  "key16": "3engSjWcYyCAyLCzv1SE8YYYvbgVsAGPYzq24wF5gR5A2pFFBH3NkXjYDhKGJaqXp646z53ydwHXeSaxpSpWNw8E",
  "key17": "63sFfinRzYQoKTiuKdaQPgewTkeDUknFFTKhvsRi2xxJsp6JdSLFmFUdvhzP7ohWyz3tD9WT4Hp1ARiC8oGdY9yK",
  "key18": "2gjJfAWAJD4zq59LdGDouv8fTJPNYKLttFj5ukH8huuMXsD97isx6rxczVL7U3JEHrLNh8ECvZdi71PKeQmmJmaQ",
  "key19": "4S3wkkfo5keriCy8AhU1botPDAqw8nGbQP4FbRupR1Ak4uVSh6oGhn5pYekFqPphXhZyZDciFM9wD3rvDtSePw33",
  "key20": "51C93kCEth2NgrToyX9uQjxpiABooT7RXXNmyk5M6V754Cz6ctudG42xPLTsJi2pRRp2G9GbL9emVimfVWSsND1y",
  "key21": "Aqugc7rupdVzFEnNcP8iPGzaChXUvBoCECziW5cffyUKbGUoqTTcucKsDar1BwqsymarWNN2MquyBCeE7xetFuZ",
  "key22": "UcCEt3X4RyH7vmEtQe75oHeAXRm1GfKpd9wYPqVcGL1wrdf1DkVGoL4f4pTTbbffBD26MgWfsJv1Fj8ngLCWqJq",
  "key23": "2xn3KBJLce9brrMMVjbnaa8zgWWNYoSg5dHUHGTuSvsjQGTuv145eWPDv27mcStauYnEauPL8djiMDfBhPMYWsBA",
  "key24": "4udtgFujJCAe7oqPXc9wMskPxmrRHaNsrJpgo2P2JtEwZ9TGybUd9pc5Q7ip3pPGGhjs8NWHeauiVSLAQKhh2ThP",
  "key25": "SQGSxYZerrJWNjANkb42qcXTvGbTLhx3H8yGLhYUenF3175rn59XKkLkzuhj4BkuiHsuGu8AModU9yBvMJtyDhT",
  "key26": "1zZ8rsVU5gs7f7n8vQNfM7wyw3dAXF2MxV29TCoJitETkuuvopUgfKa7Zh3m56d3y8envFySNMqHSMgTFLh2FEc",
  "key27": "4n6fggiMtnjyF4aizGSn7nm5vn8hCzXQDxSRdcwe2r7Fr11GGAKBAgFbYgYUe6D369NUBCmi22YbB6G3p9xN7UK6",
  "key28": "2Bj8mvF1E1j6rw7gM4dgMekTh11p1PS3aAiC1G1L4Qg4YWCPCJUY2tVapRNVjQcjJSpnU1SB2oKwbWHQRx2DUVVX",
  "key29": "UoZnsD2LR6Z31pbsKeHAYBT5P9XnhQRGfrpQDjxjdpCbErE82zt93PVquWj29GJBnSdm8235Eu6Jd4SHVeHjgq9",
  "key30": "2v2FDafjRiX2ECfwqNQVzv9shCSmPJMKjepk2WrcovzNoyPESifCNcaSQNe3jmDs4QdPmPbRqp2j9VRXkwiwmeGm",
  "key31": "6BgHHoFDmhpV6dphSg9Ldqt7tVZK3SdzE9teoqdQ7ph2z9LPNsnpnG12LFR5nuUq1VEXfuxpSydGxVJkicSiFjM",
  "key32": "4Z8soojqc1Mc6WfNH9KJozkpxxsUx6PLJYaqAwdEA6sxSC3cDhEuv7o5XDKpUD5ZwUNyXYuv92ktGVTwzZyTnuMS",
  "key33": "79x6yPY84XZxdy28M4vGJ9oqqfrDqrvnCkcqZcy8Kdq1YszGChWkkzu5K8tUsTAwbGpmbKKQGZ2GeM8gtwMsMbg",
  "key34": "4vGN7FrAqT9AfdtgpeCh1RYsiF5T8jKnHujp3YSprA2yu3vevtiSpYYCRrnq5Szh1x4Dbpy2QWPZQSLMzarsFr6t",
  "key35": "4Vc1C3uCyFs1gTLTa6wmozwA2stwwWBn7zmTCqq7gg626mbEotcChKUCUmomVNrdKKaQ1TaDCfGPExFrqbi179cj",
  "key36": "2xssKeb4ezJht6cETnpsHs8X3xZMeenB5h3i5ppL3U8pSRq918K9ZxugarUCNArYiE6Nqb2qh2pFQXkvU34VDhcK",
  "key37": "634HppQ8Ju7pASo272J7LAMse5cjdUSQ4z3gE7q6CESfyEryizA8ahuDvt7TPPQjupzQ3manigYSdY57mD9bm2Jv",
  "key38": "23ciPixZWKAPthybnHVLYThTtUa6zxWLtrc84SKyCo7JN5izro7pLzzTQca2fdN3mLAS29h28nFENtLqoKZKFL64",
  "key39": "T3fK4we2nFNCqTjC1JYNRPZ6Fm8Yticw2Udyb1EKZQ8SrF5WrPAxf8UPBAuznEYLvFqEpbFX3RUHEEmiqWnwVz1",
  "key40": "35is3qKm84Q6LL9JGzqLYPLJoX9K6wgC4tUg5V3bzRFk9Qjhmf3b8cxv52DQYSgUFaG4ppDYY9h2MwAaPUrFrxwE",
  "key41": "22xZ8P6yfyUFrdQQwoLYMQS6o67x3LEDmS3Tde12iEuMci94Sm3L36KQtHWFJcdu4Q8pEZqxWE7P6xxhBCRZFY5n",
  "key42": "RW2XFwZqFDCjMnEVdqNWFPysfggt1Yt1HkqBHJQELo1vpsHE9C4PbP5yH3Bh8pRhfwKww4EeCXqQVatDkrUVjz7",
  "key43": "55Rxpc85hHTnnM9QtZXxLMeAYeaAiptefzFQD4KNBC9Wke6WyN4dDXH2cCQmyV6wEDRzAZDLbntFjQo8Z1EXBBq1",
  "key44": "4LD9GHPPYWB7T7iTu5eeW6CPfZw8hFJFiZmw5tUPouSzc9RUVN2kPSd4QzRvZWJfjmPkgzoKoqTZ4qHGQP9gqXx3",
  "key45": "5JU2JhShfBEKiiXaGiYxVKgi2x85QGgQkJQxd7MDFRhLz9hq7L5aLKtf2Qz8mDQLya1BKrfxrJjUQ2MWVJGGDSu5",
  "key46": "4aZJYVnWSgD9iWqpS8oDRV2RBbtY3uQBGBGZ1YwjR3f19BBFiUbzpksJLXcs8B7VH1hHDDcCNkCcYS8DU5H3Ydbh",
  "key47": "2sn2jAjAjsndrc14WsvViAtTY9inWswspw3DPkVkv7fJgQ3ZTbuCF4gA62DhJ84pxtxpbrQ925oTkpHD7AJjGdky"
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
