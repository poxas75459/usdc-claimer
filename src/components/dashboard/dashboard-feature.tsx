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
    "5sXD169vRRu3g8JHTR2qoyQoD7e3FunbcWSuhg2JMKNMAhkyRfmk8xD5NJMGLcZ7eQH77nLGQXnU2USngrWqrbZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrJggJ38hVgne4PMcEsugyJnz8jJFkE5DU7rxNhWmb8uNTJoZxHhc55hWGHfeyTLMf5AcUtfUrbB59Y4hiYSgMG",
  "key1": "3fua7o6J8PJ5XdMGPd8NRcmVvnm6MGxVCGK1XaPVDewynDvkTRCh6KTvX2e97cMA7RsPJ8zLRmGfvLYtJtGropR2",
  "key2": "pdeppu8irNbX7PCdZaY7YuDv6S7j3tgJUS643Tb5GWaACQu6Fx8nDrTfpVTw55bao4wUbu3oRBXHNhBAhde8CjR",
  "key3": "3TH6GvYzsLbyrpY2FoawnKczKUD1MhnhWwufyHhSF6QAfwfPE8fptGArzFmnUchmWNUroVPVPPNLGSfNrD7G1krv",
  "key4": "22QSigKnhnNCasbaYYBptqkR9sHWM2dLb16yJGLq1h12XNwidzY5yZoKLYN8Yq1ud7nNEUTov9fkyGNmpe6vCJga",
  "key5": "521Racc3N6CfspV3NSw4JzgUNeayDiNgfZLwLnfDAnn9vPRhnLVpDKRrn7GmYyzXqVSqpYDXT8zAankufrLpScuN",
  "key6": "2d5HTMWJB23PGkLkcF33Aatamfgp4DG6FgesLsAZUFREEhzAd2CiSm7ar7LQ3fPViDZaVinm7eeGeD1dH1oqFLuW",
  "key7": "3L3tzPdGKqECYr92hXhuLCueFdbBqm1S5dzt6sm1BZgz4VcLXCL8BSYuX7zok6Hif7ujNXhrLR8swQvTEgBJxvHm",
  "key8": "daLat7oWyNVFFxiKSQcKxDA21vUfUr3Hr8DxvoaGEr7c99Xf89a9KfgJVtQxhQA3nZKQt6D96WJFTdSA1fzf9zK",
  "key9": "4wYrcu9WGyqGNrd3uXzgGfNkqy5Ji8FAQZXxhaPwQX4uL2PAhVUZ6AfTKo4XPtR7kGZmZDChS3JvbyJzFH2785Df",
  "key10": "4agQoH8rXZZoWFvuXJPEQL8bKTmFRCLm8cnuZsSGnT7wz4ccA6JJraXkHbTcaegLK7NeJRn73fGnNFGG5kFb14Gf",
  "key11": "4LL48uj9AU9PdcscxBcxKwe29V3jC71yxdNANJmTNfrq1jyFdjZ6SPZhdzQCmqom1p3v4W2ve21oceissXguiQio",
  "key12": "w4ugLDQ99YrdsHATbP4WvTYY1bxeVH5eWbAD5rcajyxjqQatDPRbr9WiP7kYikDxT3CgozYR9VEBPzFHPP4rGhv",
  "key13": "641aTWA3Dty29jVacdrfgf6v3auUibwiD7EMABu8xae93SB3zjUDDmDNv4YtmmPjrH3BmDPwQJuKa2hdJFYmdp4E",
  "key14": "343XumkRNBoZLLejaTFPz3MTcqYynE6uDtAokcYPGqFi8dTDKfRRGnH3FYvhA1RzGmFtaks8wGiWRZsuVhNQUePF",
  "key15": "2dpL7XXWcKMyPTe6YCFj8VzrC2qDNRdW9WH1qJiExVqPLaLwSLMGJGek5B9H43YSMHk6vwBgDJFVpFDyFnAxUecB",
  "key16": "2THeSA2Q47tUBrqN6ogoLxRwmFjLgMmbjfkNvymJSWNJLKzeipAqQfYn1U1DJpSsqw4RHT3B3qjjk6rnpdPR6fdV",
  "key17": "49VJXt3Jg23BCrhKeu5cRkSHV2VJbNfb5U2MaScSk3BneryzzL3hEGK5hFS14aFeRZ1yBe2qptqDbfZp1NigLDVc",
  "key18": "3osWDLs5Pdft2Jxr5UX9a1esym4Tsnvjv5duF4vaTxWUy1jjsjpTMWMaLkshHmRK6evTXcB9JLB3Ew5vDeix2DBS",
  "key19": "H8nVy4VSZJucLkKXd1koCMg5uHGf6FiKLu7Ru7dmKHqqfimfnNPFvTJasrXUBKdKtSSfxMSkh8FCPkprb37jBcM",
  "key20": "3PaxVjwn6UfNDLP4HhhGTdTMX5KgpR7muXVY7soXpgZTnS6wBYvtGDqagV1gAi47tVb3ihF1rszmxMr3HMCFJB5C",
  "key21": "5cY11UaVGbPXF9ZpB7zCtMzwKL9GEVYLhE4qj3aK28Y9Wd1Q2jwzJZHsHJcrJuU1y1ZC5nqdixDzS93EPjEdCT6M",
  "key22": "5fxytDVwSMAxDeuz2sU2TPzv5DZkiyJAMbHoh7RHvEg36WEM4FBbVt4RcsvV4wo6CkApvLuaEk3i7GenCtTMDBhx",
  "key23": "3zEQVPwScF97QFjqQ2fyn5TqFa5hKMiHDJaAieWKVkcH4YTDPLE3puBsYdoxJG64cTFLss3HmgeDhWfoBFAvGKHE",
  "key24": "3DqZLbwZvAupkABtdTjZ4SmvPXwkqoL1Yp64qwv45vuZFAv8EdMS4ZTj7ocJcBSMLdTP7MXipaAxigox5myC1rJu",
  "key25": "4tm3DjjN3V58sPJXRksGKdEKdQdq7hSEGbHd5CKzXRT3E8aESBSvBCuPotzUiA6FCmn3giDduxvhzFYcoFcuKjfd",
  "key26": "UbWCFj2najMhNC7AsRM5X8QzHaF6uburb1zQM9aSY2Ny6sAZuWEVm4DtHKV3BHq7vNX9XxCs7ruSRpvDGtheUG2",
  "key27": "2cZc58exnk9x9fwSAvoKrbPJGzgkQukSf68sxy9BsQr6DRCjRtEm4y6gAxoR1Z5vGr1u8wctjTUAYAFvhLYawdwr",
  "key28": "5A8WiaPTBvWnR4tfikxVPcaWNNDyYxUcm9d1n4vc3Gi4hgYttD3mgUvRXyiwY2N5XZSsNE24qScq6aRK1SxCgXQa",
  "key29": "52Zzm7wv8p4ScH2c92sbBvXL1SHu7gZbKugBM2SS16YSnBYeRYVafWPUbQhmVXJkMuLPHJBmyvP7HasC39E4n4LK",
  "key30": "UyHbkL9G7j8xfAdBmTVhqVNmQBkxwJ47DxPF7VsToFM7cLVPC56pm9npqJQVsxFuZD5sSSEBcqzLyjLJcJmqrR2",
  "key31": "3FmkoZKaA44saNawoTegsBnsnfBjRirJ9wS3guB1YiCoHKDM1HmBEBR7AfWgpKogz9Qjhsob9Xz1n8TjJ4w1hbdB",
  "key32": "3qXAYQyCDATo5mFeJTJsvRbdMAPHu9yPu1XsY7SLGuTsbECbC3HLgDigqW4rs8zGDSTRVdSupEWGCeKSffP3Jtdo",
  "key33": "3Q7dR2nLvr1irJ4xcGYLU8pPcKGdcAaDm9dooJUFAQZnrvdAU8rJYjUjPftV58oGDsb1iNkffYzNgzBjYZ2utTxo",
  "key34": "5XJW7v6ioAoNRNsGZGq7aNWh9gYR848SV5KvxKbsHRWKdwUH7jPdYaVjQUDeke3gRztWsWoyG1UJgY9Nm1uYyEzc",
  "key35": "wxdQKZa7jsi31UatGFjQ3mmtuCcanoNJVikoyhjLgvt5Kjp7AnPSKzSQCijNhCqAwJpWEhMZ5oY5a7iq17HVWcm",
  "key36": "oYM3rx3MXKe8hGqC6sMmfaD8uU1VhA5DRub6kgWBJ73zzsFoYdyF7wfGkYMNHquLpuU6NrZCsEU6xT4RLWDAiiT",
  "key37": "5UqsXJisjo8ii9iGuZieqoMY8DCf3iT93mbP84u6vD18shETZgEksqrA9pRT9FKtRSo4CcmDbWPRTW5iqrY6ua2q",
  "key38": "2AL55xAW1pbfwtTBs3kQRbCgzFmkqYncyizFzoDf5Hw21mYpzL6463HVKrXd4NfDiXVPjBP8EYhi7ouJKSpYm3p4",
  "key39": "4qkNRESNCn4wzc4MBE7HnbrdEqcC94zEMBStKSMimgGxJ6i9uTvXfPphEEtTCMVQTj7nFAfpscASZ15smnUEMQff"
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
