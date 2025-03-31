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
    "Mhs1fe47TpoM4oWy1BugNT3duGnbcvsS92Y9wr2S2X1mHqLPEoPneXj4PhViC1XU45KVJQYkFyLthaXJgdfwBk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HaG9XEgSVQmy1n6jCsniACJ6gZkPyRTSnzzcnfWjFbxTdSrT2jQtEFXv7uTHnXuvL2Ln93NHYbpfFJD8pgWjL8G",
  "key1": "3eKDJntaXMXrGMe5GPrNt5w3qpw1P1aC8pDDd3TX6rCcBjHu9iD85n9pQYtgNXP89Hp5HMSeNup2bkyYhbY46mAP",
  "key2": "2KSimm8JFxJsiu4FPornnvN5xrEi7XJ6Kr9ukioho4bEy5FNpXDkAgqeYosQNXLYEncqjNCiqNXShScu7WTgRg1j",
  "key3": "3DVrxp3TC3oqvGVqWPfQyUytfw9tTqnngBR2sagLQT9L98vTb35fsmk7rcn7JxLN5YLtB7pwuaDBpjDAYkkeDFMD",
  "key4": "5NMNcCfTEgxtdDYWCBtYibvYZUwVYswe6TUFgJpyiG4mPSQHETmmUVhnhb5okhPSAG5Dk9Bz7TaavMN1wP37gDBE",
  "key5": "Pw4ghcKR9RkvU31Zaam7cd5BYBAiY2mxFt74LUsW2EtNXCGA8tfGGrgsRnCJRqXvafiUCRA5YAFHJaed9mfbPhF",
  "key6": "563dEa7oaBRpV59Em4HESRzeyxFQzdDQNfGdfRuQ7ZLr9qpS41V5YAU4Gij5Xme9smP1o2zbhTm2yf7VtS2twtKR",
  "key7": "LZSNhQXzgJTtHV6ubVBeDyXb8T2yzAxoUAoNHLkn6KCr8VqD91oFHZWi85kuu4uq6iv4ntmRb3vup3uQM88rrqH",
  "key8": "5qFWRw1dajiFn5rQh95nN1i47yBo2cujTVpb9bKm2TS4WZZAM4qrmEt8ZdUigaBfF9qUqgSkwdBvBfzVW2kqN96w",
  "key9": "2ay6ZVtyFgrQRq4MWBA7crSi7hQ6QwQ3Hd2K7KNxtGtz2KbAgq9Sq6XAwK7NKhefLQ1fhY84oYtdnKSZXekEcEFh",
  "key10": "64mstfiG7naV5pzx3bqwicdWLpznWKAWB3mvb58duC4U8MxcbPoequw46pZjz5WCjHVgmjar6HDLMWwFPMJQrtC9",
  "key11": "37A5UkS7NQudfH3eLTpoZdbdGNFyx2ACSNj2MnytqqxTLSdfTFoBMJSBEp7JwWh6UxybuxdcGJRffVXDArfM1TCM",
  "key12": "2229C4bZfJWGrQ6zgWmTyG3JoDittk8V9d8JTkMKsx8WKPDr2ccWc3tQCZ3w81ecSDUz9vKUFLAqTGcvXzmQNNAj",
  "key13": "3EAKokfbEPxBENEjUkiMGvqWfvyMKTUJT5xPqfBpiLrCktYUFAUCeSz4KGFebR6eatdhaNeFaKWA1QCc2rfwLH62",
  "key14": "2jgEsfHx8bL7u3yGzVzFwKmovrUzPHrKSyY5GTLzH5m3upBTJgYmg2nPYT2rzyBi2nSsx381zfvDdp1Q1HSuNBJU",
  "key15": "5uDBowbgfyWASrEcjex3BR6XgcGnnXvjdQwhHoA19GHANBtDr566RMK8XRPfiW9x4MXWYngaVMjK4VriMvR5Mhiu",
  "key16": "4wPo7aFf43ybbeRgpCv7iawqC7XMkTmAHnD99L9oZQ5dPUkACRkWkHByFfCyBVVrKrzoRrDLh4VGTLMnMZY2kC8h",
  "key17": "5E3djAFW4Ry6DF4Vp9YGDtUBn6FH1FwDtEdKSd7G6efE3dNZnwWXv2sApjuFeh2stoQyrkL9SabVYhB9RxQhujbY",
  "key18": "4Mt8Fp8PTzceJCXjKzyh7Cca8qj3XTPMjrJ9t9Ez3LMQsujNvuAesaktiq4vY78F4X8mE6tJC7wF4BJsMYFXEigw",
  "key19": "4shCzKthqAdQ7mwUpKGxkj5mzzkRrkLnyFQjfN1ucfWUKqT6ifaTz5fd7zJ1uUVwtYmcnLQtjmmpRZZXXPKopKBo",
  "key20": "3QYDitXR6T8BhQBGnhrdZtUoTXvjbW3hLLFL4aTjFEG46w78WyL2vX6v9qr21DZYAXeSzFZEC1SG1YFvu5nAkdrx",
  "key21": "3VzWTrZJWKfzKgTHivf8ZXkmffDvCkq2zrKiVriuc1jtiC4psVoJnK3TnWV2dREhvsFGwD9fjDd2MN1q6eBQRhCS",
  "key22": "7pbCB6TAAjsPyrx5csxNSrZ6gKFhsDXwir81rAVNCf6Gu4poDPcqyNQTAQHQdSe5ED3KP5LiHHAydMWrroW2szk",
  "key23": "5saruuZAcNkWCX7WXvRqTPRe6mPbkmfrnw17jFiPR3jkJNQaU8g9R5yTrqwTnZzaZTB5owWa9RgXkyTdddaVxvGQ",
  "key24": "28jDUUti9PRenR9SbX5st2i3jk6J6reCdstRp8Y51WKAWED7RZNuJcspM2cB5xtotfVtpaZ8sPNQFEPqMu2g9Uvm",
  "key25": "5dmkqhaJM3n96VJMR7FSaG23sWdGck4dGwySpFJaNMWAv1EGPtKTA7sqs44PAfFoG4SUCb2BApvUkJvdkUtUeb3v",
  "key26": "66s6zddrEiEHqEoS3aqUTSHPLdxK2smXn38rb43sjwRP6FipBejuKnPue8FPxzzSgZhvHaS5hD13cVp6xRHBSeyD",
  "key27": "4Txzf83WxBpskg5Tu5KoCjSwZUyXjzTuxPDq1y2CaHQrHCsJ8qLNzPoLWKZREkaGAUhQmZigzeCkFUvDduprGLoC",
  "key28": "2pvC4iXGYQ1m7u9yvKVpKHWjkg7kb3dmdmkuqSmL9vfiQRWqmufngSFTcZZWdoNAAiDpFFnjWgtdgJ8JLs2t7uKZ",
  "key29": "S1vUeiaf9vnNoBn8BR2ZXgXBwQSU79mHb872GdMVcdADbkp918ugXsbQrbRmZjyZBmxn4WVdCyYBxwLYk5vkgQn",
  "key30": "NjquuprSWVXT2qvQThiHCfAYNecxdQfbwcKxGDfnhM27KjhGiD6HuKxRYvc5aERctc4NjEigUYvCH85hzSYLqHs",
  "key31": "3zsnm38xnJkBTHfuroRJdgzDdGDkGwBNwWNynJ4Px7MAiQDKUW7JruVieTPtWE3UrntGdCwSSbKS6iTmDcked8tC",
  "key32": "48RwXEAqDg8Z3phwsMsNqqiz2eB4rzAAR8coKQQmceDmk1t855kFGhPswFUH94AuhCtXCENUPi8Pa3CwfZo8L9oX",
  "key33": "5axxcesdzPuC2BeGtMFEZSEuPVQvPQ98bVUY6srvbjMeqC4QHRpM9d3pMimE2S1CwTTQcikUeLkf8XfMVribMuiq",
  "key34": "AgGzo5NupUF3vVPYHMWNLGXE63LLJRmZUyz2HuRsdWsBD9x6jr1tUXvnwLgzmCPj2CrPgzredU2vvWR9DyFizt3",
  "key35": "4tD5qHzDCBUkMeadYTu87Gr8fzkXMeiSrHGTT5TBgRbsWwzpE7d8Cu5SLwq9zqXvM7vyosxcFPWNY3pUPC2K1yGi"
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
