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
    "uReMui633YSkv6fbbxUCC2CsYtvHkwfvnUmF2PAS1taFpte9xcbPtbE8QCeXDz62b2fp8u7UqGr9nKUp9EdsMc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VRpNWT9e6jURuhkVm6aZBRu1jV1Tzy6CtTb9pzFdzudmip42Gov7QCtFiKbuJUjBvpFg4GVsW2yHHqDAyEit2zQ",
  "key1": "UpmDy3Rvib2jjGJ8mLcYuN7oxYxcVihTA8YhupYv9ZTqwwQuJQcymsQHHsr4f65MMCRCR176NaJWHYHTksGswYF",
  "key2": "3Av7ZKNyd1ow2g2t9NpbjTGLv7fnyv3AzKSn8EPVc8aMEuhBg3ugXEknqJw8Rpww48HwY76ykb2kaQqF85TYWH6q",
  "key3": "4fUZWD27j1HJ4B9nQYCUUrUBpYd4DWPrmKQYP2dV34fEcCrA1kvbnUCk7YKfeaVMskBopceExdNGhLE1TsvTfkMq",
  "key4": "5YTSsv3FZhmDtis6VMsmHExgz8cYeHbNTnDoXCiCgsMbD64STFGQBu3WFhP3WGXGqDXsRK3kf4KPrUqkC9pKhzVA",
  "key5": "4o7NR1HQM3Gc2VkTZkniCyNuSXhw8q7k6VYZNZCwPKzLSMVk6ooegoVYVHbaSZ2Yuu1zUwubKfDqPuioFCpW3DRA",
  "key6": "4B3D2uKoi7yN4HnwTW3dEtwUdFXn2XsGh4bvoMyUVuzGuF73H3M68jxaSwwyiSGYXZnwyaUFt7vfA1eiezV2LUAC",
  "key7": "28YLhvnD546X8LjUPJhnVZeq63Yso5DFjLYfK3WNgmcQyT9tfHrS4sYg4KYR42ch4rBKVAGoZHfYajELJamn5YzP",
  "key8": "3PYdeUMp3z8RknEUstc7wq7zeAFNUZkhCd1N8vBBXhTjf3SSoGanVjNvgVFyu9FmEoduA5xBtVYJvCxGyZGm63QF",
  "key9": "39JgsDHdRfwpUzZbc4n9tCyCos96TWSjvpRSSBMDH3qydBhdGmBGZE9PH26uvjG1jBisaq9jPwziFEHF8cgMquSZ",
  "key10": "2kGLEroTA5P5GfNCbTQ6Lvc1YTEVskDjDZH5jG7JKQfdsgtmJ4sosJe6DsZSaewZD84qC61xAKML6QgRT4hedZD4",
  "key11": "5TPkow3jHUo4n1qay1aTLvY4uVSTSyrwBeAvMEUSNCGTPMty4h3gzy8MGTvZaMzboyZ8m9KMNezW41ANLHn3byZZ",
  "key12": "5YaB2pXeQYQr67aNqhj62Cmr33x6rbsX4qVcKfq6adUKgkNwizCXcanMmkvKSRV5zjaRWj2rjK5BnMri9n7PM3tz",
  "key13": "4XV3GnQvrWKpKuxEffRXtM5iS1GRNsHR1HgWQbvt1kXHWiSdxvmsPvPK4HTr6Vnrq8Ana67b5xoaDNaBVGUa47Mk",
  "key14": "2jcQZcUFXAB2JAYco9J26rRwXRT5zKTp8ZesvibxPN1svqk5guPFMaamXAM8GZ2i36o8tp1nHpd31k6qMisLVYXL",
  "key15": "5FuNFPrPnfdm8XLUtJMpHonxxsrMi4Ysdy51yTndpMRCsbJfQFUcux8PDdto72BKZvyi7kZDZNS3FcNnxsx5Zw6",
  "key16": "4xRuX3X4mbXx5ge23SC7rByG2PMpyNn2tjXs8FL8TnHQdDaGyz52EuPochw6Y3hGAo63EMVxMyh7Y24dQqg4AWoE",
  "key17": "5jozi8dm1qSigiSPtyP2xMDqx9Vh2X6WgLFpbuzjmQ7nxZdqfw5TUv8DdfFRcjPPLB3YbTbp3sR47GFPGRyteFtP",
  "key18": "4XFu1nZ7VPDX4Noy3RUX1Gqx9EP8hKvr3RiLMVD7HHfwPU848so3UPezFnPoFEHZTfQpTjMg84iJqBRWYYPJsMne",
  "key19": "2vQCn4wny3hm7nF6Tc1jdHPVrQwDZhgW7XwcYVYVpobLuaV5i2uPH5UQvX3Jx6rCoZ195mwCWuk4CGjhShXuZ9iK",
  "key20": "3RB6GxGKxdqdMqAyVwDhaecduziPdDGRXKMLrbKyueathuA18Wce8xWv72J5xukn7PsZE41H65DAkt3gM7s3NkMn",
  "key21": "4SPdHS7y2Svi5vyZovJ2ZC4cZhaW4MGRg9xkdV2WCfVT9hr98DWabivpN9qxfV2TyDUCDmqz6WdAYcRongzDDEKu",
  "key22": "B1fFkbcMixZeb8ohakDWEfi9ky1epMD4D4ZGEj8LFkDQ5s8Ak1KQ5ARA56vtfevs7c5GpHejkLPTEr6HQJm6bqL",
  "key23": "xUHsbJwr1mLxoUhyBg2TFzPmyLk8oRt88iy7R3EdijguepkshtmBL53nNpsZ78r5MwixtJbCNwBLBDoMhiBcM6i",
  "key24": "3ZyhuMiF74uZqZtiZ3CqoDzxug4Dj9Bgis5sZN2McvnPgbezhBGLDuEvS8x8rkQ8evqnQs5thy7BJuyPMXVnRLHd",
  "key25": "57wB9PzDmcsuLoYhfBFkHobVzEPnoMKd7CSDHPYyJjDjnTybiUUGpYNQfYpan8UppzoQLp2hQFVXucGfcdTJcB1F",
  "key26": "pT9ZfYCR3nWq9bTJ7r3hQxk9xr7miRxtHE2sAThgqo3CQFT9jw8grPhUm18h8e4BZwvSz7sREFyAxwouSWJ1zRp",
  "key27": "51rdhEM6EYFFS85mR6BcQifSWSnn9ZhPHownW4YsCQYRPbCV2qoN3AqTCZkBAbLjgemEQ5r1e3UcxE4wYxasj1er",
  "key28": "E3Zg3QKLZRUBcJPfXeLbBfGDZkeoJaZkmNdmtN4aoXqzMVLZrJisquTqUhiYyVLQfAZwwsoSke4xNhTaRmkpQ88",
  "key29": "44xPxp2d5hqGJTCsrDTv9iJ2oYdS5EuaRSUd3xues9EJQ1RNK4oVpuzQ4YKYVq3JLyKLp3iZWVDHA1caypvQsehq",
  "key30": "5bai7qv6yNCfJMgzX8vnZ5Yfa6DSxw5BV3pxdtUkfk611kKgvLdLFL8DM835uEXBUTfH4ebUfcxKBvKnUD37y24X",
  "key31": "63RLvTGsvpoDwpmzimgKMNjmJaDPs1pXgMTM8JQ1i91oz4dUvXEfR4KGXn64R6UmTY2Cr2qYECm1bP2BW3Xg2NPt"
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
