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
    "5b2Ux517f4D6P3dKfA9mtVfQCMVMWCir9uCba4kprwFRpp4AJWpmxg2zJ9op6emPFshtUmB3ceKCtfrHF7QMBwdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LkbkcxHGq7DKNpeRgKcdbaBbSuTqpv21cBdvZ3CAGbsZSUWKXRBHVhZPYBzohnQa2vjkCkoyLZmTiYQXGnJV2f",
  "key1": "LpwebnyomCpsjYW1WWB5EPTX5BATjrVMyH9yVjd7nXbu4RqVmnFGXs5MG9oX2E2SwRuFpmDapM97dqMmUzkpAua",
  "key2": "3WBaxc6o4DPnDEEg1B41T1e4wzzMzTHSCBNkkUvmSndytxTDYzxPKdoykSjrUN3o58gpy4s1kFZ4BrNk2miKt2G2",
  "key3": "5DjLCcCzjAc1dkNnpy1uUL3DfWeEkQg7jA1GYkn1VXbcpkQDX1HmbpJKyrKhSppSw831hYv3mFvPicXYt9TQWMbB",
  "key4": "5s2YaDmqfhCR1ocNDQBtNpxCW4UCxE26oxJRvnjBNkyfXYHmMvyfkoEoWKyBejvPwoBJjEQWrAhamwR7PapayiSD",
  "key5": "3anQ3S8YzW8dAsAigdiycx5AFDr7pfyQb3Q4p5YtSN2k2LSZMsnzN8j7mJyPLYQozip6WStpAyaq25xTQMvDBcCk",
  "key6": "3tAVqEpH4RH865ZuuHtSVm2p5eCCrKkDj3Q4VRbHKH3WQFRscPkfqu4ANaxxvALyGBJEyuibBqc7CMQRV1PbsZ7x",
  "key7": "3tKtnFefXqePZdhQcPu8jJsGPwWoR4QekGQZ44njqb149AdyJUDM5Az24zfvk7Pfvp9WFCSvcueWodpPTK2MYmRN",
  "key8": "2zc9ouzqbCwsJfBxgTGGe7QaJtxepQh7tZoJZvgGNEdRVQNidNGB18mW7zWkJt2q2jPgoHLQfGfmqBNYL7fzMiNJ",
  "key9": "4jJZVjkfHfcX9A4paU32rYATEMfwDDugSyNuj8fyL3JYCoYJjae9B4tGbUGgyMpogPXxqDqWL3y6g2wLD4BAvR9",
  "key10": "4dBgzcmeULkx6XAytj5ScaaM5eC2fLBw7mBT3JVtDqWnXS5jJqZJoviwEgEF28Fw7APBQjB19DZD1RXpeYyZxvZY",
  "key11": "4bdvHt8KWWk8KrXdqes4jWXCSpwabsjRj7k4dhs7Uq7UaX7RsFwWpqDVov7V4L8oEDY72eFVqX5VT36AUuVdcRZs",
  "key12": "31R4VsitW6BszninT5DMRW18qycmtoExbUWTzaf8eugSK8iPePGohsbAjLfTyyZkd66u9KPeNXV8dqJi7qqnnpTV",
  "key13": "3N5zACA4ZwoKEzBngv8bRphbTgHPonP24Jg5Rqz623uiyG56FMBzomsGAf16CiNVKgmDcrvGwb4VrLoPSy989PN8",
  "key14": "wNinXpD5h5RM84VT3P8YFrdS7eEdAerhEBN6V83Mq1fYF6NU76NhDprDox7xpdqYtpYMsKwnRRH1Mzg7VZAsbMK",
  "key15": "4HSEfqQgUxmQCz65Fx5MYci5qWJya3JVpaSAP3m2RjwwQpKCXtnd1Z5zQ3rAGAnzBfBRB8D4pL5LdohgqRFVPJco",
  "key16": "4TLmjx2K7wNJAMe4wDYCwvjkK4ds867sUBmtmSyC4ZVYd4sX8FuSZHEQpQt2yqhVjc9CMrGxJf2Uo8oMyXJugvPb",
  "key17": "2Na5ZxZe35Jacv7YAH3faGNU3ZhyhUjGwdUfE6AdqQs5X2yRNBngNcUK99AGaBefU8yKxdvQzNQzk5dZ1PdaTDiX",
  "key18": "6Sb9VeK17srAEKZEguDYgdpstXtP7kgyN1XXgSJ9vyp3iiUfciAftAF41EaFzxJs9xnALwgcd721sgVBGBrahdD",
  "key19": "5CA9FQGudQYViVMBeJYYfiBi6LCvYVCs2sbg5vGMXZVnjv292cZcuAmDrqV1KyyD3H85yP5RMVQJMNe4cFDaozAE",
  "key20": "BvjssD9DVzx3RXqE6HBgTeDrAT6KUysbjGc32EQo6dz6K433hbPqmX6ZRAkMPTWxiH8zcHsWK8Hhip4E29JkLDZ",
  "key21": "5XtYXEx9Q6zW96GLpL99fnqfz28Zkga4thWLXE8dAUQtjUVc46bsZFU7Lt1oLM9HGpVUWvzcdYdKwvW2GLrmLP2d",
  "key22": "2fY7pMSoh8h9e3tmMSc7LaqNW6UmfPMSjuxQuy7u2VSidg9oCs9ru1AqKVkdhX6uFPrZmEUR1gv6ooPe92TCeexA",
  "key23": "31R9DzfgNUiWBAkEdNpQvNtTNf7ps5iRSigFhc7FUunCSWXRBzNQRwneQX9AUWh92fGEvWUxSn2gdMSmeZywgS9p",
  "key24": "2ej1WN388UwSv6JGCE8ZyPEFp6HohcEA7SLXiMP9ThqssSLvGtD7QLn2ro4s2Js3oYqEfsfgbtdB4pEkcSMkVd97",
  "key25": "3VAyz9TbVuSvFm3q7ytckjE1E8asHtkgmmyoXScBWy9rHcaenYG6uLAc4c9ZGiZcggZ5iarcwuahNfkyudgkPGz1",
  "key26": "3Y7K2Yw4xYpwYhD1iiCmnRt79VPXSnME4HeDEDo78kpnKwsArubBZmEZbeKG63c1Wx7Ma5b3M6g8kSiyLUhUbw8M",
  "key27": "5TXSS9ettCTv5uuFVtXe5nyLeL9QgwXEsenKdLRckacFsbQkWeXNEXLfovWNV3ppVbenAhzNS77huEdjGJvu87CH",
  "key28": "2DUCp435RBeuVfw2t8pRTDnQQCQhhmqD5x3AwtndHV8r1HVviV2CjqAZ5BWcqqSUz6H3MsmsdQs16KGsm5KCevRu",
  "key29": "cXXPKWfKrqGQ5MkWbUF7ZvJRHoSYKqc7fkNKEwXRwxb2wz9erBLzWUwp6RzLrbK2ELrhyY1674q3t6tqqFj1YJ6",
  "key30": "54fNZtAAYX46FhddDnk1L6wK3nd85tYfYguyc1X93ybPxC2wPn5hFcgLHkf1Fhow79skMLjBjXft8zw4XNntQT8Y",
  "key31": "4abkdqyxNMXbTGM3tqtqfotP5mzrdBteBU1ixVLdJpF2hhsbWz76JwQNThgXLTCQ1mxAYTWtgM9YV5TRUsviyMpQ",
  "key32": "s4ZTWhspRAHXZ4pQKmJd2Pb1ejAenTFWZTQAVxCqKoMr6nNvsJ3BfpBzP8iBKVdapEX5DJSmF6H1RkgrStGHG9P",
  "key33": "3r7pQuDPwN4QxwyCv38SNBPXrE4nsSKnMCSvp9zmPkjKHiWWdwYQQBYffh9yq7niEuWqoL9UpckWoxxdSXPUQYDo",
  "key34": "UhkBiCPyoZ8Xc963Uecj22PG8CrUc1apSDEzz6u7YzAHBdpGGX8ESJ37MoD6m3NpbUaEeMnp5dNfgXXGrPtK2hT",
  "key35": "ZEz6dCXgqpDmi1sfVmi1TUveYPkQFyg2CDsggbRVYnCDkXdvyGQR2q5bCmRQMB7MKqwEAZaSBC18noaxAbaK1WK",
  "key36": "5jCX1iD7oMLtA2uWtkxAZSwk78iGaVnEpdc2RPAC5ppgBcCGCZcM7m3ycS7muGEns34G29tdF6XjP1ftrc6zqpVW",
  "key37": "5ZeoYN1QfpgCy6mb7F3RF2VbrghSjPcaeYiU9iy8Nnp2X6sFfi6wT83NwCZPey2eBpuGcKuzhU5HBwKXUjq8Qo7o",
  "key38": "2oKBhhEarKmDQvKLus8N9394rqiFPWNdxNeWKQbPeJf3bgqwZ65BQB1pAvLnHC1BnSJ718FYhzXcVH6y7Ma9ACiD",
  "key39": "Lk7C3nQtsNhQRVzPmc1vXKSkLG59oR8JJAai1QPYVLHFBDiq6ZrGEfBBxXXLYmZ87RXboieqhCEpTUYWiNWbTRD",
  "key40": "3r1EHbm6q29GZCQnDWv4XHjRfdbd354exDndJP8HXD1Hum1tKZ4JtYunRfsaNXH2sGyyKx2Y7VnGB62szovgzsbf",
  "key41": "2qZGHwHwq5SKvgVqVKd7qLRyCRzkwP17h4JNVs7mH6bp2GFqPmu29im7d9SNpK7tV5cBRXqN6YB9iC3U6UoZHQgu",
  "key42": "2nNw6e6usz5rHM94QGgVL3gryKPRcomKcy6BxdMZg4rkJnFuQkb1FUMpCXUvy6a3qeJxQPdsRdxK1JY12ZneUXBi",
  "key43": "5QmxbiSR8Qxb19XQcNraQHTtZ9nN5xv7RtNdxPJBqb7jadgDHJ2MomPRBdLvchRnTA6kppbKNV1LZ29CwtcLqaJZ",
  "key44": "3z5sxwGm3cbqqoPuMGjDUCJo4isQdWRfykSrfHffEHuWEgdUJd3vCXGzDGE9ANb8PUBQ2x4Ltearwmg1LYXZHafU",
  "key45": "3mLSp7Wr32kzoV57Ke4UqRLunhbFiL4BhymtRjtcEhf6HTQUkmk2HGVdup7GCegu1vitLDej6C6th3z93AqF8Wjd",
  "key46": "5sq4wRAATuTirwpfr6cDHDpXtvZziJBPFXxwvcEwygNxz7M4vCyv99vogsQhs1pksxp2SSbgCTQ2NFBbHYLQZNsw",
  "key47": "61easQH62iwQtUh7MZcsTpetaXzjGUb7q7mCVxfNehHkzPAqArQNzXcy8gZMbsN7Ykp8nz99qPpTwRL5yFyP8Poh",
  "key48": "4Gb3innVimGsnKJ9yZTVpdqmu3juCFWWAJt9uFLfm2cQbe5sAtMMgPYe319PMDWKPjCa9s6USXzi2pPvXoZG1HM4"
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
