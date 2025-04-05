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
    "4cSSJpKF9VcKXiC53j8xNkiLUBawzVT33pG35eFhDwF5mNvgH9w2BNaBDXYA1MAxya3ZU2p3ozczyj2PGv1xDvY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Y4p2eBzboWmySSBUmp2DFDq4LtK4CNGqxkb8WRXYnXVbfABCU6QqymYqQ3ogMmdyooQcEvDss2vdHG5CviKHQr",
  "key1": "4Ms8ux61rJCPHxcvPcLYfTPMq2p7QNT75hbErUEzB5QnjRsdMkJShSNjBX9HVoSXYmVXRWqggiYuvy2Cuiw16gPp",
  "key2": "oKxGSBniRywicv1nA7xoJ24GquvS7knjJGXGVEXmifU7kGhyL4Mkmwnq1V1ju85uoAb7ezXea2GyceLVx6C9Adh",
  "key3": "4KiKS9JrapTmdVpA97sKW4BfJkaiUZSEmmpTUPSScZeNXEvQXRuo3VBP1ubU9gL4t7RKyEEnFrfrtWyeGzz8TvaW",
  "key4": "2xBggeWoS4nKtCjj5HVxQF1YaaeVTbv6jq7UHyKBmqdt8cNaCtsoAja3L37uVj62MuBA6Zfd5ACD1rckD5o3wYnC",
  "key5": "KyHChUaY6pkxbU7a9Fc5K11YE9bvDHPWnzjhduawsRHZuyu1DHgSNyH3t1K93WZCpeNiAANeArpQCuy6p9KCgR1",
  "key6": "5mYG3ToH5gRHMsVRkT5WMDwPa9XHP3YyLhZC7YXSzX6KunSgZsRxa3YBcUmWu7RXc13w8wRR2fYMGoEG9xbywAiJ",
  "key7": "GghgEqsg7xRUjrFAj5jiv9NkVsNBMr1ocd34XpJ66hKtbvUPrD1QJgzyPHYHzKJeSr3FEUL3iHMgtGwUdWumcoS",
  "key8": "67jaCnPMJWXoTZECUfv4ihmvcoaxMb8azGn4YpG2cLausnn5zMDkkq8aeFtjjrACsN8tUrJuFmAwbJxzftVT5NQD",
  "key9": "3WCt6j7tVQ6FNcnBDJQp5e4w21NEqXBncJexYVJPWpEf3KsjBbR3D1995pGW5jsi7Ca1t53tU2J7YyL7UWgk4pMY",
  "key10": "4UZjhCFZZZWkpQad9B1HXLm7VVnM6gdyXHVjXx9rW6r5P9vjx4pCzwLtVAM5XZSTm5nAneNER8naxKh8uxkG4zMz",
  "key11": "5Tqku4M73V2DyB7icbDr87zbhNwUs72JYaK9a4LqzRWu4VqhwWFWPwGryNW8uYp5eKDwAJwKWM1Jqj1iyeeh94t",
  "key12": "RcnxwfF5jz4YjmST1Eb7SF594GwhhpEdJ8SwhiTMKJeuuSuy7GTi7nVAvYLWvBHYEPFZo9z5vAbuNjKEFstH4ys",
  "key13": "2YVGAhFapPJ8uRh7JXhToKoAEp1mEyDetf3Nei5rvAwNtZzn933E8jZ59cBjxfBtyKdMpvbmwmMKCRg8amGTCRf8",
  "key14": "654HvrUwnjzMRu2LfgsSbdLFfsFbpMgyDsAY4tYAxFkj7QadPpe5Pyyqqi6MWaNbJHBXTfUkbVec1ubLg8xQ9sqW",
  "key15": "6nqvcD3UzaBQ5ZDSikcEnLr2FLC8LDC6rvxTqQfEwtCrH7AowKXXTxDmtyfaL532ftzm2m4JNQnEKbBsufSSiMM",
  "key16": "PNG2bj54StYjEnX3ECBzNyCQfv8Rd4uadXg6kJjYX5fsF14hkJ2vHMFXcG4wwnjtyYmVs9VKKpEqMVZk8TfsfrC",
  "key17": "3hyzPR6E1qFpmeSMjAksE1zY5hVmFsa7oS8KTiobcohM5TP61e4uqNPgAQJqwtQXm2hcY6wwXFvor6EbfqbXecDP",
  "key18": "YTP7jevSpq98LvoDVFadT6EpJBiyBVTiKxYuscDdpEhfJpq4UuxZtweoy8gDjpcygmhiRcdxofFPgop16Av61Aa",
  "key19": "4pEKsZJJ91pGfF5Cm4L2DyXaXBhWTFmZgtCcXaY67xbKoMK6cpNm7rmWTHd8MB6Yg9Pr392Hm1gGYW1tHqGHtCxk",
  "key20": "4DXrp9sTpDDfHVc2abQw7qRgyfEgBQpYd2X7B16gRhLouXeMVY57fdEgBE377KzHPsiVMvfVicza7ayfS25pdB1c",
  "key21": "b7kLmSFFdZomZLwZDQ7UHNwjXzAbkKde8MSupqT3CuvP4gCERyxTaMwQqRyB946cpc7F6tdCvLGJCf1jH6g3d8T",
  "key22": "1DNCt9xXMWP8aXBBoP8VGmpArbU85xfDQdUJZRA617GKBRyVY3xYYpM1G2eWLo9V8fUznYASeEk2RQZpW4FSmhn",
  "key23": "4gDoRXnLyFres3uAr6eWykkkGagvVB4mSGJKj1ZgGxTqB7vrSVpBbkxAMnps2AjCK3DpQCGEu9QSV3CZJ44FGf8U",
  "key24": "3FPNwGch3YL9ozJCDBnsVazob7wEz6X9BACeFK4wMUGzTnxHonkfE8MfXMQ9LMRegr3uEN7WRWSbL4CKrsuT7Adx",
  "key25": "ZETNtyFwiLRFoSS7bVHsjLe4G5idmxaDpAmCrr4nN4PyFDGN6vVGjLotG9yWBXvTGym7fA29L7vKJkoE7PjPXwT",
  "key26": "3sijubuwnLAxHyS1iJ51CNYTuzbQHy1Ut9vND9ZtjNALL78XNVT55oEJNAjWvVHhbJutu6yUoVfrDNwvZgHJrW4M",
  "key27": "4xyH5xuvinF1ZD4A8dUZxQqksLWcvffFySLyKFWTXJ73aMrjz9oydWNhmwwhasSziptBPzgiEVdAAVtVmjAZhrTV",
  "key28": "2Q6smXWhqpAeMtKuWxZL7UJXMg63FCv63E1Zf8XAZrBw6iYHwj6TsFXenGSbmghiX44yLHDAdV3Bwp6CofGWMqfb",
  "key29": "2ch9b24Eyf9JoSwABEU2bap3gozEXu3TEM6JXJNsCkbyfWp9dBrtebxtZyx1ZcJQVb5TgBecfhawohjA2VS7rw2P",
  "key30": "2HswMevSouwd3mn27brPVXTn14rFCdq2EZeE139dMYRigBQ1JigkQz5RjWu3eKwW6bDVzSbXSv7spyyZcPkxhWsT",
  "key31": "2B6tqBHNskqLUPbC5o51zd9CfXys7KXaQxvfSoWG4bvv9xZ2EYn2KrWqbTixchCe3tRQmuqjg28GmNv8HrCcJzPd"
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
