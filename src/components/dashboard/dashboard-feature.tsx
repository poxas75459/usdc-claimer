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
    "5fmKPfjNWUdkUwhiRe1NTUqFDxbALvakH71RhSFWHPD52a6KcE3ZumgL9WdLbdAUmDU2zFoY5J8UmqmFGDEsNhHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhSy7worfy4t4Msg1kXbMcWTEJAL9DTzg2rJKU83nmRDcYggoxdpNe36c7KvMQcL7aixEqibCYAfEQoT67QDU6y",
  "key1": "2iLkzk1kz7tVj8UNgavr2ttBNfpkGQpfUmgqc2ur2yoqjpZDzk8vY7siP6pQWy1iqVrj91WU2AYr6zUR53StyiZ7",
  "key2": "32YReDvik63PgtihrXiiQUDyroLSuAmC8Tsb1pVZmLD8wM2yC6XVWA7HRh8T1DvJoN3A46DdSSASYnCBJk1Ewch5",
  "key3": "53qN4XbZPgRcnoBm6P2Lqg5aQxWzCMpfNk89qL5Cf1m9LoRwhsrAsLbSnqfFBLqzVadWGs7VfEV8LBKudhqHZY4n",
  "key4": "35bbWFB6jhyw6on16t2J5p6sQc5LbQV85c2vArtdYUPGT4x7s46BiMKNk8WC3ZC7mJPgzzw9rjLHUMgMq4zEHwz5",
  "key5": "3R9UEACPueBkeXrtSnvuZ88CzyxEBwgjPaBESYdDPeD8Df72ADmtSGp9N2vUL4oNi6E5FtGtJVahX4cnWdve4fNU",
  "key6": "5tesa5PzAWeV5kcxeE8AcXu3VAyRtoprJtkFfVLzSZQGw8k7iFjrEcAGRAecjyad44QXp8Bvg5t1NVEy8hBqELJ5",
  "key7": "57Na5udFvdH6QSNhMndqCBZvqj5ZFjdxRrGwQDavCvTz9SciZ1EmsHNpSyNLmqEq6GZCT6FTb5Ucg1UHL1TkYGPy",
  "key8": "36dJN1SXLvTrwVqL5HMRvmcXicX6LLBfpg3jzP66hLPHMJYDjLM4A2M5MeJCqrfnzy6qhQ4xAjTotiq6K8GvPvyq",
  "key9": "64GohYYRSbWYXTgsuvtmdQVkKG8HW4rxaVCrFLfyAcdaHyAyZyXW9hppGH4kx68mEzbVpt9PfFY8vktBWVWR5mqP",
  "key10": "dQwaHKJAzua4dWpnFb1vowH7JXxrUZBMvQNRVwLdfFTh8ogRAiYVG92nMBXmrEf9UK5pNTRtX95Ep4gbQQDB95W",
  "key11": "2tJkFfhACmxk7sAjz9c6DAJNMf8fYiY5vjktmnobwZxWeFmy2N9nyVgfCzsmGoj1oEqyMsDEgE9psRk6Zhd9xH7n",
  "key12": "4CgwbgGM31jkpMWdGhowd84VzXZDqU5f8jg6BVNt5ncreo3bCX7n1eZHnuGX6zJqgAe2a1Ry7uFgT3ap67qhgSvm",
  "key13": "52ANwSJmAcm5fn6ynBVDrVVAwTgpzsWzrT8r7kGaxHDyoYyc6jmWALZDnyLPCkQfocvERaT2Up9b3wFf3XoT6d4c",
  "key14": "25mXr3r3J3QiFJCGjQcxhhQ6n2Hfzd2zsuiB1ChEFw5Yvcg73Re5c2bRU1UDD973GENwT5FGXsjUoF7TP71oposx",
  "key15": "8g7JcdkHA3UafRqWfnYAft9NjBbAdfYAKXHKLJ3kw7DyMmxa3Eg2JhwZpZZze8J7BTZvGjZszgREMoao7ex4cXF",
  "key16": "2CxdEASZiPxsUCHtDVmFJwzdm2wwg1zA9odn4R16oBDDerwareN3FJQchve6PMYCxuDFmhTB3dcYhikfR3YrhMj5",
  "key17": "q7Teb1r8gP6Qehy8iHZ7mAWgJUnwzWcsrXhezhyAwUyR2UozyxCTUEp2Q5S2BsjfAgH27BYjthrFfSmsB22BN6h",
  "key18": "bvqVka22gyQy79MSTNW2ECDjwtxL1mxZGfMQtr8z7NNAHmWUuYvXrtDtz8LB8W9JK5siKf38xijLyJ48Z527HLn",
  "key19": "5a8N7d7TNeMTUbc4iQ2RbyEy5uYmschY5eqTRFmkvhphvMQyZyyPJSjiy3HmjfKzGfTTw2EFFoS3bqR9Wr1nVyWD",
  "key20": "5r1b3C4uM6G35UqFbz3J2FdrUDpGdrgh319DJQsAhJ6kiHcCjLvR7E3GHCDqcPoQZMtCwiwb4cL16xvki87fZ7u",
  "key21": "2BrRTTcUmuKSHgXcNLzFmCRkVEcYbWU9GsbYroEdxw2Qf7tFWdK55kojgJvn7oJrhKXKLKQ1RkBfwi8gcBfHH4By",
  "key22": "2sjzsSGUPdY27zaP2gLftntkXYeNX7aRvWxo17mgtiQytVYcu5XZA6QjwYKzFPavy8hbpdgodMvRBByWuKxUKTCu",
  "key23": "5nsUo8ozEWW4RGiWwe58c6Zs4zcTtD1vNP4iXnADxNnTRgidHXBpMpWhyguwdpRkTMJvjPnqmv6WNbVTDSzwiQRy",
  "key24": "2e9t7kVbVDuaYhEAhQBCzruCioJfodD2GwhAegCUoBvXuRZq8pZQnni61Auwh5tC64YTMdaW8af1apmCNi86q7i2",
  "key25": "2Qq8gEzuLyjW8SVDResVDni4P6n9VBU64Leb9qweaSqegpEZzmV3gEzFAAFLEZbYw3UF1dVmcqgeNmun7qXn8s43",
  "key26": "2U79hqPEa91YwJypj5xAF4Ee1A8Jz7r3XRZd813ijSj5MWXnHxu4NJTboYZy1fiV8m8dZggwMSkT6GbnStC5eUcF",
  "key27": "4Su5PUy394UtUVSyS8LrczAEpspHZX8jjRfTLEyB6nS4briwYukPH19hakCRU2LM2UW81kvf4kz6g81LZqn9MXMH",
  "key28": "4Ncdv9eCfuACy4Z8B91G5kVhHWRuTJYYNFb2oxkc8EhfcqbtHTVwhadfYmQsQvtHpNnPh1w6Ff5zBCkDMDE2vw6y",
  "key29": "4YjrnxKDc6J4EvfXUFa6XH5ws2TNQPxvCNLScNVonbP9ERwB4jVQPT5KiEHFgDoM4toN9VfuFiYAF7SVPk9nfqp4",
  "key30": "dCUvTQRbWojpPyd7VsnQUUxRJ5etyubbgQBQs7xngBXvnAHsPeRmhvvoiBU1XFWBG1FG56hRVFrKwtwP1pC5v67",
  "key31": "5NnBkoVD1dUUBgcxU3NZkpqtcwDWxwsUo1YVuokrr56Q8CP2ozFGnVyw1nQex8EFW6zxnrMZrXZqjdSesSSiQU5E",
  "key32": "41ExNZsWDrWjbWKG3cLB9oD7pgZAwnnqQ1xn378xsFUJ8vg6Rc7MfFsDpPQKcCdfU5v1hEzXbHQ3LVGkg6RoT2Z3",
  "key33": "4AFd7Vuu9DEhc7jAmEAA7oo4UdjUhZaTNXkdV4y9rsgvxLuuix4EFYxqwR5GuMMALdkQFR6pCfVyVdH8Zcit1Q8v",
  "key34": "4dQxdg8GhKiiZ4kSeZHfS4FPiRm4Gd3UbAQUdu1XDEQtWLVKY6GaGaY81g5nUUn9Vps7KZh4CnUCBvy3mCu9n3Zm",
  "key35": "4LkWZqAkQXkAx7cQ9qT2uT3CVdAqbmzwMJfHmHwt9DR1GjLAE76QfEhS6bnQp8P3svtW2xmyN3LSz8jmer8e6Vn2",
  "key36": "eo7pcWitdK8ivwEkVVVxSvNtgXqLi3NXjzPhJuXn7EyHS58yasDpf7TDy9h6JYp2br1VujF1BCDbVL9QZ5L7u4e",
  "key37": "2XCsTovGaL6oWmCSx9WthTEAcry49Nuqs22uvatcHVF7JC3hRG74BH16JcG8RNxa5JLTJTQVKMkmNrz3xitX8GYQ",
  "key38": "5d2gvhpTvwxqYtuxrUewXfnzimVttV2KnuykiUTsK78mjz7PKPpsswmmBEG2H1hteQ9Bwrvv29b3G2hetSRE5Cfo",
  "key39": "4gBg7mXhrbdqT6zBHGvpWHJXytWgYWVaZSCRkW4CLnyirNrQQF5YiuyyckRQeUNQKWVg4Loo5kntwUwr2Y28ayPF",
  "key40": "2dZqDoRMSpoxBkVj6pEfT3f2ykuwAhdeqnoxhKvqDohUT9iJUrNVgAQ5aWsnTk5x5BRLwXe8FpgG5GJF1i8Xg1ux",
  "key41": "4oBAyRF446p1E6ujSnGMtBASYBwZyK35NrB1qy7Loq6WjRv2KJyTbDMgsN5hm2adAQT5TE212AhYySRkv547rfNr",
  "key42": "4CNPfxRwxXmsLhydeRJ5dmnzw4VdQ2GF3QQfN9cmviGmW1pwoW5nsRynXyA4KpsjmXJUU7osPe6Ejkz6Jp2g1ffv",
  "key43": "48PAkwUsuBTs39vDJu4vQd56aeWDPGE75vuLVUfastMCYCiMTjdVNhozutgUPnk97Sv6cGnUxvsK5Qhq3uYfjwZ9",
  "key44": "2qSSRCKV86R9RWtNcHdvMNH7K99Vd8JQxhNPmY643EN8YSnBV7Mfu3EWPDw7oMWVhvuVu51VEFbLoULy9FSBpv8t",
  "key45": "3zyq9N9m2vP6UDD2E3UaA26pgaZabW3ZD3W3ku1WWLPvijuztmRnr3dcvJGMxQBkU6QmyoA776PTRn9C6szs9Y14",
  "key46": "2WR9GPMSvPG6Y2GGDqSQQJra5Em3r6HBzkwwLwK1tjvnQ45415tqwefgFifjZJLhuc8NmUvnUrz5P6YzSbCwLiaf",
  "key47": "417B4ZCFmTMwSMdPmPKXY1PabvAoVPvZCquE9k6mTUkFhyN2GteZJTHWN6M3eF4CfuHSBoAKhAQucATcT1mZiahE",
  "key48": "HrTYfUdRA5isEcyx9GzG7ifBujNMNYGYrsFoGJvtcyL7xiBhm7cckZan5gGccuswg87dBq5v18TjSMB6fLqh5BY"
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
