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
    "YPnm9cPhMQYSTV2qJpxU1XkvmEads8nntkY9yeWtbudxEu46miXYi8DTaKGF5swrvFBgK1kumLQ45YDe3uDUBx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3f8xGvjtF31TRZcQVAxVhiAAZPR236eGwhCJYJoyJk4HKnvQrdwBCwnZvdLyVYMnAnL9tyxAHxTeVGP96jgtQp",
  "key1": "4PV5aostjmRrwSZH5ZRCN4oRYYVVkuq5mBsz4AJkxGrSUxLJxuu4LvUve17eAfE4aeQLEeDyer9wMCoeLFCP2uv1",
  "key2": "ZwmeL1CCwgFLtByWRrwLe79ChKfPJVN2hHasWuFpupkyuTfscpLqkY9MTjH6ADZva1QewwSXDNTt9Lp3PdtWokh",
  "key3": "iiWUa2LqUWG9CaZztLdnH2inVLvBm2LWCLLdkpwGm4xMQ23HK7KGLg92GBnoMwXN7asMFU6RXtCNNY2yhKAVmH1",
  "key4": "5zTy4qXxZPm2QQ1bTywRx5DDrNFXn2PsipN9K9bmGMK1SiqqBfkE2TVKQsF8wBerdE2QjEmt4vRHdQtBB36wadz2",
  "key5": "29sW68mxpeD1kdBxtiNZUGPb4AqDuG88aVQjJ2WVK1CkcDrkJzKsjkGBVtamWa2yg3Tf5AmhMRF3R79hV1DBaBWB",
  "key6": "5ja7K6dbEJaXTvxpvVGcrteLDjrfCSaQEEt1StfDHtHe9HsYrEZdV4dYBvLw6SB8BPNDZnmFvceCb4aHKdth28LF",
  "key7": "4umAvGQACru1fHYcWMATZKCJYTuFgdCtmShVocUHQbzKoMnm2v8X8dqLoKM4SVTbDGDfzHaCrfnYnKcaejyZznk5",
  "key8": "4yFd1s1A7mGYkC1EtyeK3QcCCJ7rF6NLByZCuuPysYq3czmw3YEW32gCPCvB98kr1KUxqUmMhmCfAZaG2yENYppo",
  "key9": "2c8YmVaTyFTgE1T2LtFbmUKc6Uou82JsE1qSdwLzZeKMhfCKsArGPbqdsFqykMZ5cCrbxGMKq4UoifBvt42tC9wy",
  "key10": "WemcbbyWEjAKYuPsfBLuLvDLPF2SYkkisTq2N9GwNsyUpbYhpQjyudcXWQ5U895NWcUHy7BK9AtXqxxqrLdNs6v",
  "key11": "64k3RsTKJ7rsLPG9AFqez9Sdh2Gwk17KLfBTayGWc8sQ2A4FxUThmXh2KWvWbYevmby47m2GL3ArLnwoNFeGZagP",
  "key12": "21w5gqSfqLphtvEfjFM2KehD5UcmuyXCmvTcN1C5dti7tigTXHuHXjBng2sqc1MwGbS9S33JBNstHxcFcCRrawey",
  "key13": "5HvBv1mJVm67qsuVjM8Kyt8r34huhViHX9P9Rox369Lesxos5v2noFScKgpKVUPme4Lr6Um8Rnj4DMH1TEBnWX26",
  "key14": "3Z8TAG4s2GEANEqPc1eDWVVpxmadsP1xGDdcupTF5ApTfUMe2Xynzo5Jmzen3QrquVGpdbkrC387dn62na7hRxA4",
  "key15": "vLkFsRXGpFewMSkfvS1L6EBtDwUtVrUALo6pntYZuk877codgJQjzEkXGDQWYQ8wV4giZahYnFuPcTJn83amPvw",
  "key16": "3Zi4NiWd1odiVUekMAgvhNBr75teLouVUZzDTT9TBnrSM39Ggg2CBEYCqjep5YnKKG9Y5bcA2cnA76Q9347CYkTs",
  "key17": "3MZE8CZHvPAyt933kjXbn1VmsQKcZh13hsA69FESn6Dsg82Vz5AKbVSthKgEQH6Va3PgWysubfZKFK2wsinKRu8A",
  "key18": "2LPLsVy8G4RAdPzncvwfNQDzvAVE4gY69dyzeEHZnwUe99LtmRaad453XRDdBrhzuhHtNzKpJd5mXMLN8W1eAVJS",
  "key19": "2n5PYuhvCnKbJdXHuBjNdYe67pz3hZBcLX3jkzRPx2DUDZbkTQZXzVTNJhWVveVESjUvt9U8jf5ikCSpGQV6npro",
  "key20": "2gwBFRvN3cn2d6gMgdna6inWwxc1y8e4rPcDhuUiKb2n8wwbUDzodNSmCFnrhcvjQKbwJ7hkKiPPFJ5Vku6nFfwk",
  "key21": "63tFNh5H4m63rVmBhzSdENoTm68gbGUB73yaQgv3wreD47CDFQdiKWcxTmTWwJtVdqdoxejyfwXN283L3hRQVk7J",
  "key22": "67PQLiA89iPMjuVgNoWKfH7DLbuVhqtgENNNrZLD7gCAVWTP3x6kUHhQT4umYYb7erRhYMiaCFbK9prHoKnEuQQ2",
  "key23": "4epBohZWyVyMaVX5CPkYnomzwtURzob2gRjFSmrH7ucJLv8J7kC2dYSyUQUj5veohGcqjp72rqGK4x5KSoCBf3jD",
  "key24": "53mbUdQx5vJQEXsQUsJeQ7SSPPtRx2W1M6MPTRFGCFiSVodzwZoKT73fkRTgdKn2mf71dbE2SWobq4JP1t89THa4",
  "key25": "oX5cvZMi6Di4aqBYctnxEwExqxV8PWZTguNEbTgcqMGuCQHrqNtJgE1PwTsmkMjFGqTpTkr3mYemnWzHonjZ1YT",
  "key26": "EpGy9aZPeZHYFamMi8WaoVXXx8yJugKgtgffwgPdDtKNv5QvfpsDzCGJdHq6iUHLG5px862cn5tT7NkvcuJaXzh",
  "key27": "u88sA5LMe3E2cNCDpJBdz9XANYJH53gP4PPM8EHEz6WkvfLAUY2WNcENEj5ivgJYkX4ZzAipDx28mmiYY8Z8Vgu",
  "key28": "4kGPygedhV2jN7VbdrBzZL7oMAZoa9jerqfVWfzikz7sLNLsXEBWL6oazXqTwHuXazVzKvvFwkgDmyyW8iUMJu4y",
  "key29": "3yQtgNGGyZSFfZ7eHZPiqFXvJBjyxvZGkCXuWPWANAKHjmMfkDizsh6cWZRvGKsB2o2ftusHqugMsAGcUxEJBbk2",
  "key30": "5rBersMWHgoZ2EiEAi9seeVzp5ToxMGDGU3zovo9bP8x1w4w4QEiqUrJRf13vPbzMu6wGnoxcEtpEH2EcHk2RBxS",
  "key31": "3FnPD9n84zQfS7DYBhMCFipELv7ei855RbQyMZQZCtRD7uehaVawadwTJGQCP1BEuaTiQnFm7Q2hRrep1FvmrF8s",
  "key32": "2qwPTFUgAdixVA9DqaUH4kwUCRATWZXzy2gsEsNcjdoughcZya7hGpLpeJBb21xCteLXmhn21UzjYXhaimpfejZV",
  "key33": "2bHTVxsLJRPRKsqgSeHKmJCub3DK5vXeE4tpsoBWgJoJXnQuD7C4eSFMdMnQMAif1jS4i1zm1vZynH3dsgdRm71N",
  "key34": "4qtUDRb3frkz8Q1D6mevwu12RJMroWNzeHQQEBgcmHNU9U8GQCn7N1U6ZvzEaoirDU8UW3LnYE31X5Wn76WU3vZx",
  "key35": "4kktC52vcKCLvC4xp9SPyVtrspWC8GhJpM2axgRgGHMRBwnesBcGYdEFxGHBkQgcNwtPYUbGdRYuTBqPEbobDCAs",
  "key36": "3eiEMW87N2MVUM2nJjK15JR9vtaDLhy6Kybbcimh5fcJQSmMwdMmkFnEHuHzrD68m3EamAgc8tQQCXv57Kc8gifA",
  "key37": "s4g5vDVpsmmGAW93gYK5H63dyA7YpDo2Y6PucPwpUYqouHvpkuV2Zrg6P4sDQt5ws3ciHSDbkYRfnPQ9YXToYZk",
  "key38": "4ZVsLFY3vTjqVD7JvArDDQ1KJfyWKageB3CoRHBcVKBnSSGW914FtcXFrhGycj5K77pYjrYTDWrAXXmo2Rv743K5",
  "key39": "2yFJGBGrqP4DpncZqvjyWotmVhhTGvLP9jDg4Nbj2JobdvzyQuD1zNWKv9QgyxQQuqiBUsN7JxQeqArJVA39Ug4d",
  "key40": "QuRY6V3ziUwgXAbSSWdc1LbhBpyWJs88ZbJ1rgt3YRMEBLSVSmauuQdSLZodXoWYEQTxSN8AF31HfiF7e1fgjzQ"
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
