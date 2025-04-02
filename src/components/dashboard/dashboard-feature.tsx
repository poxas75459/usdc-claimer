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
    "36UxCHyrFWPxA2Y5UGbszaG3nAf6tpR6shdh9Zzsk17avPn3p4rcBoMuVQgojvdZBCz7SzPDDajigzmMj9XUacoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qS4t5PZKK5tP2KDixgRQiJQPMFrD9keguT8NXFT1sRxVUis12BtTmL8aLMKmB6PYWJJS718agQiUX38e7nUG3SQ",
  "key1": "Q4AzLNTcorNSbvMwZ9Fqr6qqiVYCQGWavZzJ5tXvfptHcv8FTFCV9Rg3LzBTt1DaLKKtoE9uRm2ArDb6W1hmeHm",
  "key2": "4j927iZofcBR1FxGRzaPiioxCuPXhCsGUYEcBYyFFWRwgmRUs9Ysx9Zf4piMihUparNYLm8gM6YHWsNZC6p5fKF9",
  "key3": "4HUiNbDpQYYkCKhApY2pTh4UWjddzSeCyErRhAz89Abp1FppXwaHrmpMhc4uEKw95Gpd1PXApd6j4UGPaEZuhmUW",
  "key4": "5rcWp1prCWiQyLQP2cAs8z1ciUFrvM4ziWvGZYNLUbCZCooLBxdaBgafyEnoc233e46AbctH5GSAtE6c2BXMnsit",
  "key5": "hQyGwjNfS3rHoTAkYu8MD71ttjvrttrhnYbJ4s6gGMCLvQk9e875UsEcnKm3mfMdv43Cfw7WyTmRYCkQV9KFbX2",
  "key6": "xD7qLbwt7E5Lwi2rJR4XtLK7UP2UQPtnSGCa2ozMRv1nf4jukXZFE3jNffmh7snNfXRTNCpj5Hjy279PBci1bSb",
  "key7": "5s36FRQnCAj5CZJSHp8qyNXCpcVnU45L3BQL2X9GdRYRqiXqLVrMSxMNHQ4XUv52kFxJPbjCNWg7NqLFfW896aqu",
  "key8": "4JvVwY5C3zYMSVR3ZoC9NTvLoBqgahU7o3KNaRcAKHWkf74gB7FZfYvvqx1hMjLnLtNZe2Dy34VKyxLFJ8Xv6Q52",
  "key9": "28uFCXt6Hc23GSztuCZVjouzoAkmGQHAki5UQpN4UgtZXDd11WB1wpPnsfQQ8uRfURv4u5s7wHC683X1W2AahLDm",
  "key10": "4mXEkNha5x9xrseDANu4r8Sje1sGzF2DJ6AgpchAXh2PdGTaXF2X99npexU1hmtoFRhRPtRra6ctiMG4DGAZnE5J",
  "key11": "5wAXYvbSuUpMLrX7YBiF6V7de4gNuFHUTTfW65FT8y1zFQ4SbG6y13HbReATqrMwnKcw3GpPdXNUcg3VYtYwHJQa",
  "key12": "3zSZUjMzMfuFyGM8BF7y1g9xesPpYsPbrxjGxKvaRhbr9u4RRoyrnn9GDPHovUUZT71oxSsZzoeLcn9qNhAPVNva",
  "key13": "LykuKTphBeTewRUgp74jxVfM8AGf9YYCXzqrPkcF1nRYXjvGMsFzvHHD3s38wKiQerac42GeyuaYEqskRnp3TPu",
  "key14": "mi4Nwjaq2dk8RLmq5oqM44r7erdo9Qb4V4btPq4NUPpT7xtgkKWyKZprnsvfReHyoUDGJoNsCw5ckrZ8mMKZiYf",
  "key15": "4226t5MCYUGgt3mkt3GNCChV8uhz2KTBLoJ4dxrnhFsY6PTfGd31yrC2YBqzhV11xGV3VajTERwHZdY9v6zixwPB",
  "key16": "2yfCqZEp1C6ipK7PjKJvk1AfnpAtWWWgntkFBopJRQ4Z1nxGmTG8QWZ7dcr8cWuieCnvAUFisRxyzNyzBtbTZiu6",
  "key17": "47Qsb7gci6w3ZNchin9on1dUHE3mUAsf7PbgmEhsFGWkHi7hnzEZhEt5ghtVa3V3Y4TsuFxmDsNj2xKeAeWFr4SV",
  "key18": "4fQ3JzkYNxyriSewMo7cAJDoKVKKicZHMGJAf4Bg83YqkUbiMGGBTCVGGUgjSnMub3kqXgTjG8yfUAasbBp9rZbB",
  "key19": "kBAreBiCLJhD8nm4NZs61WkxRWQK8rbFTFaAViHthkbmWbR6pWBRZtVvmU1ck8XCRragPdscNeb1e19gKQUwD2k",
  "key20": "qKmqFZLHK7G91jzxLPe2b2HRif1z3xSnE54adSCJGmCBaVbb1DPs8tEdGtPdnMmUKhto8xCfDu98AJcVE51jmqW",
  "key21": "2kQFtxtzvdpymyxEepbAHHnfLmk3NXyExsz4t4LSAi7fRJ2wnmE1KrTgYyr6gh5UTPtUX6nNL9ASdoTxhfSsw3Tc",
  "key22": "5qp8ruEJofw6XH4PoSpqaQJfKjpcNQgTDYLPV8sHazQULQz4HaKgAnZiKa8WieCJDXUtjcmS4L3ZQ31HX1UQPUVK",
  "key23": "515ZrEw8jbpkhqnEZ5K9vPWJh7Qp6BNtE4xcfSAjrBTfTiXrF6YCrc99weVTPK6rsgDEGC43zAYS49QmrzSG7Kob",
  "key24": "2PwdGStwBa4uisATwHwryPMny517wsVy85TAnK36DRbaNxWphYZ9wBiV73pxyo9ur7uvqCkqEr7bHphAKrfAgnp6",
  "key25": "5FK4wtFf9k9VGTxM994R2KPaf2ckM4fNWvTpQxjqQYohZkDcehHb4orV1aEh3bD6fVFeXG9zutMMLNJWsUwbpHY2",
  "key26": "tYsX5tUZ7xbJcffpBPGYoA8FVyMv1CE2FBTTfNuzzjfp6MTtxNRa87yct1LiZwcN9GMCHuP3iowuayiq5axDDzP",
  "key27": "4oAh97pH3HkQruHCs8bnPYNVfFGWVSkA7VvTUvYU8iRL11Wph9sHEcqa2jhjWYmqX9FaJksJ8xcQMLHKgPmcsRs3",
  "key28": "5NM1Y7XK6VT2mkD11GkNT6tQUfMuWjC7W4h6BzQ3hwt8MzsbuZv1tKjAJLVAh7X7TPmcc7wBWvqioepNc7b839DS",
  "key29": "59aUK31jymrdrEN64xgxw7BbJFSRFqS26azLChULp7fWE7zJyABoPKvMDMEzfALWKSW83sJKkj42XkMJpL1M3u7c",
  "key30": "57vMRuv2Udk7TFsRQp6cSk5qKJqcCWeYRiq6HjtHNKeopuF1RVuCnho2rFp8waN3uYgxuqYpQWQbN9frp51zmFzi",
  "key31": "5GP5CUSNH3dCaobiz5J8Ujzqbr7ctA4TLKbkbBG5DRmX9S3QVpKqzHgaThoRz9r9H7T8A9xfwJ1eJ5TjoRjx1ZZb",
  "key32": "TtDyJhFCtN4hJVX4erFtVdEaeE6DnL4wsDMeZWv5QrTLuinGsDL7YxgLZxQEPby82GuW3fGxziN2WQ5HAz6HEqa",
  "key33": "3v1CrF8rk6sACFNLPs2UEkWKTw2NgePjUvUFtd644awKefge7mFUiD7EToSLx6wFZ6HEEkDwAUQdMDwYWTskrMQy",
  "key34": "5oV7S4BNzs8YLoU7titpJTmMe997dW4Ze4tGuZbZf6iNPUpmjsNddGeqA8REd9Aj2tsfUhTHKkWeudAN9K4569By",
  "key35": "Vjh8ShqRRrDK2fbWKse9GH78MyKb3wMP4F6URfhW9ETB4kRgKK5QqCTeGHKMxq38LzWmfhfzFdpGkSaZvMhG8zk"
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
