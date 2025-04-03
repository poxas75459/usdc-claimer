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
    "5AYboa58gEpxFEENGiCRVTJTVsQicZaUFAz6BMwwg1N9FQvruL64vNHh8mDJygXZ6sKNr3VXFW6QLXc7Fx9VAkg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPFD6YC8n8qpq9kgJSvXBD1rTdwGyf4YqnDZzehaQsapcFyViLwoJL6GkFK1L3EvbXP8m15Dxmk3tYxsY8HyD7s",
  "key1": "zZ3hjx5mdb3JoroYzCHhuSgnwe1P1FmEBsveL4CtTZU3zcBcQ9YjVZg54pZayWDbzkjBc1NK6UeJjnn9cGzkcGE",
  "key2": "2HjgwLnAFa5FyzW76XsgpQGQDBSZYknd5ARQr3AKpaJECfnBJdy4u9ftBDTUPuh3nMLhC767yqwvuGvPyXh7w1od",
  "key3": "2gop944TPS3KVB3WmBKwn4NmCBsHQqspwhAUA6zbsuS7khNCHQxiH6AHTjLf77SjAiACeAttCThYUHmEZN9iC7Dt",
  "key4": "2dLJHAkFRpp5tW58e2PvhisLkkzBsiY6ZgSbavU5Qa4oqvmgcBJ9p3Wsx9xxvnfc2TjTStf8XsHGrEV36RcHaGUF",
  "key5": "3UHsnWeLZYiyND8cxtXjQoSyBTP95ugQTKPfauhFqHNX4MsScT1FjYGTfU2exRAS8FocQ4w2i6JVjGVDL7qdweTj",
  "key6": "5uSvEFLKKzjFKD2N15QMDaHbTqanyWNtYDCf9VRZFdrv2UKrUaJVm5sabbJ8pDVK2yxN7cKF7mkRa7f6A8rp5ZQL",
  "key7": "nWvVXaGVTi9qhSNVw8wuoD6AtmzeQPScB36YQYDg6B9dv4xDCNAJQMxvpGccusZL3mX4dn6Ptfn2cr3s5T3DuSi",
  "key8": "481TrnJSDgkVKYbtx6rvEFnj8aqx6M141tydSiizcfon2rbizptYT37dJRgFBwL1YALbRUweQDkbySUhbfgG2P9T",
  "key9": "3WcMrpcEUFrJiJ4q3JQb8Qyy1cybN4zwCLNkQ99kSAczwyNskDUhLYUkLQLdC2L8ztcji5JhP9uNo5qM6mvhk5G4",
  "key10": "5CnRvKjjXcvExtmbgtwVeJsuRXJeFcyEaxgBxhv1pDakTFhC7DxQRWvF4GT2LXtQJMK1CzTH93CCUgQX2GwmWK2y",
  "key11": "2qDG88yF8HBP7eUH1WsSagM8SmK2La4mjvpxEnvi6uSsA8GMAnx7KS73z8rZ9jTX3TpxyNhhAcEChN8oaE7HPBdG",
  "key12": "5xBtbqwXQBcE82iKS9HFQMoZqAg3V5pNCrcipzpUx3ujfnHubLTw1WDhE9EkJ3aWVWzBd1EoEb5nKDzWjBxybJhr",
  "key13": "EUsvwgyFay8fUQL1tuZ7FAJaAry847jDLR9suwnZ4YBZmCqK8u3Go9KviQuoeroTfNJDmT2eGQhHnNDMj5pfeiM",
  "key14": "633CEKJfx43hrrVrfsCxiUsto29Mt4EzacHmdbQL12w6NgXQbte34Wt4aU2CLQxGyp5JmbHqC42bJsABBERt5KLf",
  "key15": "4ryR4kGiVEW2qnpjV4PpTP7fmQPyhccswXaR6ogKnfKS9284rKdDGmgw7AtPWiFaqosc9w3tQ56vVuKte31jvcpC",
  "key16": "3K4hRwvMp6QqhEzVDFXx8tYjzgS5k9MX6H6qqhkrCTKK6XbyFS5CVVBmZfNubwHtAuUc6MwJiaynDLp2Ge4iA9cB",
  "key17": "p8EeTMFRoUQKcUP31MRLUuwffkjKuRUSceFQU9oXEN3xAQgY9PJazvuvNzbHMf2SUocKkHWXk4o1ZWj45VAieWH",
  "key18": "23yx5o6airmscJ2fd8SkjN42ukrppC2DnVGmPWFKkoFFqNPSJLagzKs9s1KzYSZ2F7U98vdgPU3jucxM84sTr1aU",
  "key19": "3itj7hSgoRvZHTwuaST3sQ2HFMJN4CYMkFj9k8MF7UxhQuEZTYsDeKpfoSVkBCJNG9sgS7rNbCsRkP3GnKTSQPd2",
  "key20": "3b2mHr2Gy9TeUi9vqSozbAgCkPCYwo2cPgJiBaJv7QQrgN3jZcR3mHoD6J3rvqxG41EZyw5LaTUtm3D9X8ZeWKL9",
  "key21": "5hscppvDUmCpFgskHHVeAf9QAR5fwWkGphDpT8TNJu3bwVvJiEx9d9MNLGV5GAh7BKuypvqe62rKSVBkEvCLTDsV",
  "key22": "334DmYFzaw5ciZPzvWSejMxJSt1ygjGZhmMwh9CAQnrgpkcY2rCiFqYzdJj4WPLPDX7YSDzD1vgps4L8RSdL6vCi",
  "key23": "4BNyqtrausXauZJQj1FHAtarWQtHrdsd4Lh8Y2rAh5F7QeBA2mouPWfNu6eJxASL5odDsnGmNg3JBAovfZBfujjB",
  "key24": "35cVdtdXXqCzKx6QBkgFZ2XRHkp3U6wo5RaUKhRcuMaCJHwqUmsxcNLZrGG8xkDgXvYuWwY4qC3k4eQjF4Xp6ufK",
  "key25": "5JJE8nbXGEooK21aA9WyqpLaZNckAutLKcjAtJYnLrCeGZMtagPJ9jh37SDQq3DDnvgdMtqR3yjSqgdxFb1uBFAt",
  "key26": "qjxxdCqLHErPgm3JutV2x5kvuxCJ9YNsVeq3bpWAh6qJeLkyV2hTuitjhJqHzatAZNe6MibgXmjntz66Z3nbNUo",
  "key27": "2b5vLTa3exboqkWQoxJzQHA3mDYxLrYQAEMCKrzJqCYaLWFEcTZU1LLLbBxqnepDsbYzAAyG8eHPR3u6PMpNCxVQ",
  "key28": "2ShYPkqU5MPL6mvBrdTYSHgKAAWDkmysiU1iF5C2N43T6pVFw6b9Yn11bqNL6vyM1dekYyTqfYStXchKMqpbknec",
  "key29": "2xC4i4zH9moxoK4ohh3NScYfbHgQegZq2EypCt9T75PyzKWH7TrFjaQPCNjkP4WDkwqipK1ZVo7AA9vaCiQDncUU",
  "key30": "27ayKnrr1rfEQueLTNQ1M6BwX6uM2KyHPXfj4mtt5McgHMnQw7jddK5vP4jzYTFnrAh9pjxt63UVFnSJWDDhWn8W",
  "key31": "2YDbubUDCg99yAAhng2Eiu5uiFpAcjGyYtLAk8SMdoJawhFMWVVR1tSxpmznqJWdNjngZQDSnPkw4jrRmYowVCv",
  "key32": "2sdAhMFqZwRuXPJFqB8ErpcBCkQTUy6HrH7HQhLGNMFQ4ZozNcZzJyeKHkcWTtunWzSEZs46B45HBmrFbwubM6UA",
  "key33": "2gRmHci2GnY2xRTsR7fBmVNR53Uz2TFSZto4kFhugecLHoXmTaAXWqqkzn93WKDMeY3v8roqbaPuywPUxXfEDfx7",
  "key34": "3KLXXhk25nmsNMri5kBuDFyz8KY7q2Mq4mA2CUdR5gSCShZ5xHujnrxxjqviB2qfXXrkpAiU4Em62fYiSGhSTUax",
  "key35": "3dZMK1bS3SWwwn9KXRydJ2hqfna4rVQ7yhFFAtrJMRPJFeJ7zXkjAP9E58dwjFM6LAF8MevYaq4oRon3drJU5gnN",
  "key36": "2qq2FbPMYhWxgiaMVmWjurCZ5sXiwnojAGAY3P5CYH8cusJwrAJftDRafGiDarnpDRSKHd5aw3iHA8NkLafkt1UR",
  "key37": "2kvdyWFJdwm2Dv2rDBG3k4AeP1GPufofT4AohtyrKTRaKr93Yv7NLrF2WhneynNAS5kx1EEmEf7QxtQLYoPzMhT6",
  "key38": "33jdsSFFmayr3We35D5K4ZCXid7qjjxBLBw9eRyyejY1CzUbr5VEVt58rkC3SLE2aePWV4yAwuerMBMFRY1btrfA",
  "key39": "mxWTBhgfm72s5Y34TRhTnpKPeteVc2e42c3RNFNb4Hmxod3snpoxUF52hHGzw6s7Tf1TK81WPzdhYbNRw6NPmXw",
  "key40": "4vxKUPfxzU1whBPu6x52a5exUYZ95RiPQTg5CvSpnFbVxiqKYDsVZcGpis6Pu2xqrHaye3v58GN37r9Tx3uAF31y",
  "key41": "2zqtNefXfxTReZE7JwNMu57uPNjbMyLDLMGW6uESfr4oN5MBVNqGGmWZNWGhKKxsUM4mB1MxSed12rQ4J3Pam1Lk",
  "key42": "4VcYUFXcxgMmLdWgzCRQLWatJ6ytFfS1hJ6uLtZdtHnVK9PkuhBAhP7NxNNdgp3zKfPCq9TfvodeKLLPZZ357yJr",
  "key43": "513gCB4Lexyyubpj4HrT3dTe42hizF4Ks4KB5ygU5xGuWQacKQjAi2qhX6qkngDYFyQg96FzpCVzULUPJChPJKiR",
  "key44": "2etpMjNMi9wDmEpnSqPdvdVJhBVY8rZow2DVXFXGwNEEkyEnaijKzFLfe1Vw1tJxtYfc6DLqdrngU7c8xxqnwMT4",
  "key45": "44grF3Mne3SYqW4conzSmUZz7y6LF3urAQUQd553CHeb3r8XgfbN71KxydXk7iNbSmhqJkZUR6Vjzj2x4QYkq8zj",
  "key46": "61GmmWFuU8b35gvwF2BCx8qUgy6jZWjqikSccf5j12rLHNrvJcrTYJgzSxRY5M8rubDx9iNPG115B99GoK4Vc8o9",
  "key47": "484f1qejQfV8VuErZjExQCgE1yhmsWrWmeTX4CHjH3du75qCwNCuUhNMZZ71PUhfyVj7dFP2dQEmNiH2FEVcbLpF",
  "key48": "3rcitUrWuyrof163xFpQNgWcQxQW2ePjgV87FwSZ7RoFE6ixR9UuBsuu8BcWcGST8CbKeeXXf8DTcMeir5Rwb1x8"
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
