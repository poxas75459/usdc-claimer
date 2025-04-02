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
    "RkMZqykodoPvGy63hqskwyvhBy2bjMi9BWpvAxx1H4Br2RyppV5GLFC1xoCmQ6i7GD6FgZctNyxa7MRQWrde9Ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tqzS1pbuCzutQdUGVvauXo5EMTWKCv7ASUnmEQ4qpzKiBAAqGGoWouEdnLv5571ArjNUuAXS9q2R89ASQZw9Q8",
  "key1": "59PLzKzzRUwdCoetXFpnAirwspDM1v3wDMTXSwRWrPCzEfF9Yn2kvU4VJyR4YJJKswnGEdfEyQmCg8ho4poBkXwp",
  "key2": "339DxmXhA2gKR7RrFUqLZahAXXzXyAjgkmH7RYavV4whdSzTKPKWRSgAyNsvjoXTnUuhRbWxJmiiEgcrpxEH1LmM",
  "key3": "2HAxmX9mHJNiCiZMNJE2YMy5pgPMCMnhYTJjRrKuScvs4GWRYGwbaYbLKmuNBAPyxyNWiJY82tNXVJCE9ggJLWfv",
  "key4": "r8DJkyTyipPgRrcXd5VJV5j6mVhhWfdWbu8jfEHM9iFuYUaYm8DSGHURJNrkC6E6D4KLYyp8JZxNLJuKqVHYkZP",
  "key5": "61fB3atiNXEEtgrmbC9zrm9EhmYwD5YrvpP4Pa9LymMfVQ6hZsMiVUrj2fkXHhEzMGz7qPKZYk1fxBy94GibGUBT",
  "key6": "4jZuK23gqUMK9NyK1XNtNU32H3iBZdhbfP3uZtYeQpTLPK4ap94Nq8mTc9SNsxBdFG2Y6iTgEZnvQ3i7Y6ViQKir",
  "key7": "5nCFuh9eQTzEBf5ReqzZ8SmnvvHTGrtDLYsgdNoUYUtsjQenD5GNDYS8tU7xjCmixbP6Uic9u9WGKxGNdLqBLb95",
  "key8": "4iwaRrU1suaQJWMwuAbAvbpF39fdk5wMgdHE6cdxusWZibdtZxnytxZHSf9F7z7nSH8MbLKMmCs4wzXocGGrVRQ3",
  "key9": "26WucritbzVLFkahoFpM7wgkLh9XDgMLHHG8XEM8KVZ4yhPUrgq9j3LzdBN2XM5rFSBZWjLZW7pmEXANJr8zUmPH",
  "key10": "2Kaj1N1Syc7wfjZmk1UJwQaGS5VsiTLpBz1PfGiRx7f7hktzUMoYHec4j1D95d2Sr2Y5v3fiFYXGhwGVrWxX5gZB",
  "key11": "dsZzcBLF1Mtg5X4q1szfxvE2BYJbFtBivy7yHPwxTX62hYW5aonjmA3V1YETRA5bEUpoTUwiTEQCLfcSjjxcVrF",
  "key12": "5NMhrL9uZmK5mu61s5MWmrPEBBU9NSMZBqGBdQcHDNuaRDrv8EetXqc5sPSxG5oYuSdLKeCzBVgQuAvQhk3VNVVT",
  "key13": "Zr6FowUr1bzMCMimpVjKERiu5VZcLvjsiYrkxzCdhQjZfnj4Qx1MHT65BLrEtbcJKnN6kpZDYsXGdcJBYwkzvHe",
  "key14": "2p9qAxDyMM57ueHYapZgFVVevB4YNv29roHSGE7U6L2dcMvYfbL7WiyZMtR2XRu1nuPwiUgBw9CeqkyvVyqcPEjj",
  "key15": "3yMnDNCbQLLZ7UETd4aHmbppKrnvEGoLrSrRzcKmRw3xWpsveGFqV135bD6YuqQU1Q2yrQYqkNG4hF4fBV8zUhbU",
  "key16": "555Gy395jxhH3oADyn3xvmVxpi32wVjkJgHkDcRWRXPNryDZWSMj2Qytfm7X8KHSqknTLcoamJJ1eAfcMLaC6HKF",
  "key17": "PFCVeVafKs2bAff9Di3Rn9vikAkNzBYY3mRoQjwWgWtnCJeR8jx2caw5mWVnQ9Wg2i1satUpus97VJRAUzxYL8E",
  "key18": "cgvJU8ruxrgjmgMxCSWNdcyHGg2KEZ14S5E1hpqEQV8yfyDfSRb4ukqRwKKmCNKr1yzSDFJqU31GPny1R9BnjG7",
  "key19": "H2ykZB6iLMQArKkmLF5hqecSgiFeoJsRJzGp8csMYYSd9TRsS8EfKSpifD4Yaj9QhjQQqKwYwGT4vE6KX1knqwL",
  "key20": "5LRn6pFUpewNZMLPxgcpV3qpRY6LUxZY3e6Nyv5JURbSgcnFT9t9CTJMG2fq4eMBfcKKhPmi8Sv8qZfHYuJ8YKt4",
  "key21": "4WLW7F2A6XY1J16bMXFs6t1w3rVeosTBuVSgPEiCgrTEQLhZdcAY6i8TNiyVM7MT7xchuLAprvMpJLKTCyndZiUF",
  "key22": "2hmo76peaPew77fPpfp83L6A85Qx9eQ9UvaWLHnh9spoNXqN3UVYJr4MKpN2oERntyqnr7vY6AX62hbbsxxp7xvV",
  "key23": "28PRebbosBtKSFL4iaFP5ph5eY8nKbRSE9cLYFw9GqRSJ9YjuBXrdGRMvL69eLTTGJt2CbnybCGo3xtZq2fpgBRS",
  "key24": "3AxG1A1eCmR4z39CisEHb1PQMqU9TdZYEpMDKhLwNBEagqGNMcpprmzmP8uUTFVPWCLfBRzNwVxA6kGonR1AVors",
  "key25": "4Ts32g8JCGRvZiP7KUFKsLtejGq5rfdCpnTadrcRGp82x596kKynXQiJZHMhrdPtDnHC97UooV6LNRqmv5F4ptjv",
  "key26": "45DoR5N2X47BkgpY2YUN3UecxcembV6hTTjJi59LWSfFtwY3EQSJz4vNe6gZ11WVXd6aUzGLGD8jDKt5aesMpQKQ",
  "key27": "2CJdm7DMf88Lf9ZByimHCxYj29fbv3AcaqcnCi9TckrYzt7HqKeNLduHHPUkSxKUYDKUvCPGQ6kdtoLxu8vbXPmS",
  "key28": "3c62WFed3cuWLWqMQJy3BM5JgEJywVf2jHfFrRPfmd18NhDQ54jjNg7vZpY1L3cTfVecFNYdsU1pwHSJdn2xcsqK",
  "key29": "2t3ttGeHTjhhA45aiUnz9gmSVDY7EYdBZooj8pRniGQrtAHyDkMA74jnYWFqZydcACGcrxueUEP16ceti5odPQk3",
  "key30": "5X7K611dhHAiqX8zmduCEy2PajJ5ZBdxXwQGyDxpLDHvwzmCkVxVTGwgf39fSEi27HsFhKASXNFGjwH6f9f9HB36",
  "key31": "3u1YHT2keLsAPU2ALkNGLM2np8cxVV54KZ9eGTqXyCHYMYH2M1wHbVnTXFRE7NexFRFcSXzJEyoWWCYd4SfWx5kB",
  "key32": "3qaZYhpHS7FXLpyjvnBqVYo7C8ZynVNtSJudEF4BBC4sjNnFqrXZNtNf2fiAGSqAsifsqbJA1j1tfbDsBLdDVrTi",
  "key33": "5EEz1kjxSZsbwk5m3KtTUmgRho7T7Kqy1q6HdS3BxwtBCwX5to1Lb1gPbLvWQEQp2kQU8mW3W99kNKT5HnLCtuyR",
  "key34": "2mBbiq2nfFPZScBRMTF9TSWvYrmyff1zwVAuR9JFseYJPrH8p3D5mzeAQtMZcXyCrjkDT7DeWRexbvvsYAPowU8j",
  "key35": "4nwHqjVBgM2ycvg3yipuVziEXs4cSXq7Gwu28TNGhqjSWufFdeQ57cJ3Gdt9E9kaktaE1Vr4eeE1H2QBh1AKKzkX",
  "key36": "ZCynmRAQBUabSCDmBgrBuhqjS8Qx3tUDnC2apz7bXhNDrCsAAJ75UJxpcxiJLqo2k3vXugG274CUQZvufZR6Xu9",
  "key37": "3WnDN9LzHkgMf7Z4UG9tK8rEfcNWgGBtfgb3iCe3cqfE4eQFurjC7PAhZShWUqeMsksUD6jw8vXcJFUmuCMBswz5",
  "key38": "AiFuWkykFKDWkMCFPkKHqygUYw2KY2XzmeSETFjbRDoHC8NydTcfZ9XarYd8Y5ZGz8PEKaBYu2CSrLHkf32bsF1",
  "key39": "36X3aPvP7Wj73mrSmFVwptngPY3ZtJUtsYmv3yEFw8BDQ52Zeh1MjwLQNV17tVggykpXeX81JwNqKfFc7x2RWCpa",
  "key40": "2pTvGj6u6EwZFEhMf2EnNStGaz48ESSmennnYGwc8VthHcPRYfuCVSPFLquewx2fCd19hAj2KuysPmGUoCdMieuV",
  "key41": "YaBeF4L663tJekNqXht6MdjN5DRjv7xzPzTmnm5wdzkkNy9t9hSyGim7bk6xyZRtkmWxAwnhsFaic9Dq3vWbbYR",
  "key42": "59Zw3BJzC45eft7PfDVLdtJrbpxoqrPvJ2nf28K2rJhNDQR9eGgYifBVfTNyrsgv9efVsgknRqRHuugWRsarVuoX",
  "key43": "5x6PR4UGmgcrntkwUkQC7iVx8jJPbfAEjVeSKVT7xnP38tBmkPVxWQfnkoyCdLUGZDNkugUtoLWGJLxJfGQiW64",
  "key44": "4RsXmRVYpega39D8xVw5GQtpycC2urrFgE16XQnzwxgHCyBazjbumNmJpBmzRicEnRyzNpiPHb4wjSbdptuxAqLx"
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
