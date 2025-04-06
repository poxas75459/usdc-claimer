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
    "6njvg8RQXkfQUniUi6nXbvp43ipyCiDQgBa7cs9b47uqNozKitTKW8EJawvHgbqNohitjWVGLMWJCBcJtjtRKqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBE1wc7mKmNrMt1Dz1YFPpA4xRG1i4hAnxFeFZic5eVVwkevAXprDRhriCiBGGK1tKQATWXoyDNN8FGssvaizTh",
  "key1": "3S5es9mmYeoZHaHxRWuzWNGKk6jC7p7GyQWtiM5PXamUhdEzDsDEJsLVY6F1vpD16zud61xUqKRDKoRcMgRN8Egk",
  "key2": "49ChVd7et6L7NCNKd8qMcFkAhH8t9HjUhcjm7NNuso1BbM1sntj5yfMPrViXjnAgzmhhL816jGjvttfDxMz6u6UE",
  "key3": "4ogXaHXT2zrZ5hAzuDya3ggs3iKgyRGNLZre8FBFJXv2UTs1EdvvgUkAxohqZNpmFT2DWakhN21AUoGW5wuD41yZ",
  "key4": "4F7BnkKjBn9ZkwCJfbgraKh4G2ZFFsUjQAqtWUN7Hm3euJvN9rK42iLP6DGjThX3a4K7tDHGRCFUzW82aHuhyzSf",
  "key5": "2tYvrkZwGLwiwwScaZMhrmke3tao1ujDWp4r1mDeRXw7KRQr7MYsuJmXYjrWyqHXnZPnVTYBvzY9ytX6HkTaTGdS",
  "key6": "5QRUQTJCrK1WuxKtzTsPfzo71nUE1xF7dph9vGFUhYFfX3YWHa46XqiPbhcfVduHeEZdNHPbeQyda69ZGLXY7CFL",
  "key7": "4fNkUaurGXVkC75WX6cNo14eT4fVLS93549LH8JXUw4f63tUdhSbPuQakRV6iJmxPCis14js41N1NuQyQutnvMoN",
  "key8": "3NkNQyLnHKEPEAYn2VP94Sv4AhBtkxxQHYm3zV16TFZPJy6NN3gYrGcNRGC9UoQBD23aSrvG6WEnnZNDBMkQ2jZg",
  "key9": "2PyWvvDtaN2bNGz2ThCCYVZrXGDc2vZtTAxZ6uGLdXvWhGoWwhryFCgpqCXAkZjH2Vh6HN5WTFFQczgyCzNVvWut",
  "key10": "xc9KyWg6fhHqanWHdGGayAwtxuxUuwNXYkDjdGsnWReq7qVdNihTfarhP4Frc3YXnVvviYxTMQa4yzyX33rbJTR",
  "key11": "4qWMLboQ8CzGNLgCJjzQhU7fVApuzHTny8Rj5yUChTSU88UPUoATdBSqYa8qFBUAL7caWkXueQsKzpAutmtb55iJ",
  "key12": "3ML7qQdnEszbnd6PYh5bqkaqzPNmoS6od7ZVzT9pNowUHTwcrkbF6ufQrdgvheVobiWAy2rR7Cwv5V7wZiRU2N6U",
  "key13": "xVYbDtVi23EBd9scDCsrmfhma6c9B15Ap91AWoVTUvcYSW6e1gZU3R8QZdh3p3M188Ju4y9n96Ea7QkpdTzncaP",
  "key14": "3JHgeTAg2bNGmhSqa8oxH4kjUvRYCpsbXm3EzcrnZS1SdyPmgFzKD4gJekPcFsZnmMq3CuRsJhvj3TGkcWiycnJR",
  "key15": "5XUqdQeopUGDurTTsLBVGcMCiHkC4DYn9XHzzan1iXCumd2Jbwd9wM3icb9r8gkBsd61sjBvZLfoEfgkhxMGRTSv",
  "key16": "24SEJqteMx29Nm8nK4q8SHzPjn16PvpFeAnw5WmQ1WAEiLrGbuF9qKuGLdgJwJrwrfZ8bmygV764SApdCxQPSsNK",
  "key17": "PxF6B98M3BQCrSwf2wzwN1nP2A5TN6rc8Gz2T3WNXdc9BGERCCydP865EZB9jsrVTrKbm4LRywn3RNuUaH4smvT",
  "key18": "5dnEqMhWx3y33MJFcTmSdMA8MRQoVGnkPiW51eJYMeQSGxQKmCdni6xvsKENZCqoDP9UBeHRtPn9LK6LkNCimVo3",
  "key19": "5hYbH4VEYxi2SLidxAkgG2eVAgkvrDzrgghmAxxUvQEVCe8cW9jnmezn4sip47NBKdMCUz8XxXF9BczTnxxFXPCE",
  "key20": "37qojpcZ3o22iMndHp4NZ2Q6yKE3tTzfGRxZbhGm7ZJqbyS3fUC72jYYKe5VcWCfrRpY7o3KkY6VZTMXJzHD9Sfr",
  "key21": "5KZunHj2MwddKguxtMPpGEmSE75fCcdM56rbSgGjvnRiBRCbTj7EmTNoP6wzovKW8cos4wRFsGqqTpvas17xKaSk",
  "key22": "4M4ashBphuRP9dcg7bSAgTpjmEbu6FMfNBQBbvjnufCpbf29CFsGSxWV57HQXGr3CT16XrUwQn7jo5DfLUszoEvV",
  "key23": "5GHiA5tav7KjEwmqNXutUS2WQ54usUbfdmkEcVtBAh25hm1BJsntVYGfXBAwZbiY1civdYRcJEaAzHi1WS4dq6Jd",
  "key24": "25TUXv24PTWmYr5W4Lp5PKRb6LF6cDRbq5jAthu8T6SbsdUcF3GZXRg71xdBv9yaikv67jUqS7JA5nguaKRcjA1q",
  "key25": "64FfxaMVtEjr7z4PvUJ3nybE9N3e5A466KfL1z5GguQykgfcHRiyHh3M7VPBFNv2UL4WxE1zhdNWZVr2AQkXciEp",
  "key26": "4cxDcmG3bmGRV8VPvQvDF94UQ7y1v1MTWyxbm9e8EdV1VagFoTarDxzxAue6Dj5nCTVWLEnywK2FLJBaRe7cA8yX",
  "key27": "2TF96jtyLFWGfijCLAEoevLYeTXzPbTHkLaEMBXQZVcPF5UREM4MNRWLmjyV2NZ1iwPNwxWBy6sZ36zgPN4SebjT",
  "key28": "48QWVV8EwU7sQYtNMsnth2RC5omstErbPS7aUuiuvR55eez5T5WbTebj5aiZfKK6MvoKB18qHXNFqSzYE6Lxjgnd",
  "key29": "3Lndvx2r9pX7F6v6RvvoMxHMhRiPoJ4j6PPXHbP7XuhMTzDPohGciyNp5J2Ku6J1xgMuwXeFYqDeLTgCPEPi3BAD",
  "key30": "4kKG3tbURwzgj8cJKLPxhCaAjciQ3onY9CJga5DysD6M4irY6y3E7R6LvrkC86bsGeppV16po7mSG16mRqZwWSGH",
  "key31": "vXsfDYStpsAConn4zkJwFWEB69fKYZVtDoJ5h1LBd3Kbp1oQtnfAM3n3JxC5WP6HgCtHZNyA1yh4dVqP8iEp6cr",
  "key32": "4XBVG8b13hyz3Sq9HENjAtepSShREWpL1gKVg7UV66p4Br5U7RHLzTBkzNbVZxci6KyeSNK5ZdxAkrootB2Gt5iF",
  "key33": "3MCbLcsDvDY6qpK8zwTwhL6qEtcLFQoW7LaSj8jHGYMEx5yE2iLEXcN6mWFVWvNETp377QoYTxNWSUggJkbiyW7B",
  "key34": "rchRjFiZ4CiMTRMSZS6ikvMQfaSW7K7SAxVjh8y1w5E4PaHdK8iJwXoBwNDbDQRHceFPB3AKszfHpV913QqwVBn",
  "key35": "2NeoU4AmrcqeLubWnunzVjNj8kMdWWDneMcJB27aC4FKXw1kkrfsAoJi4rW47szGehpmkfkoJFwKQq7n77epfCEj",
  "key36": "3fgp2Tqe4swVgCoSrbp6hJfaKm3sUBALK8KDfkwScKEXtDaviNLossDAwdBiqyHMreG5NTQrXBqo6NVnuv2oY6GC",
  "key37": "45PnuDsA76urLQjGxqquLBDgVXufG3jGaeEYPL28LT9rH2G6SPLiYxVEoQiwXmnu3iqucepyz41ZA7VdGWH5ncGT",
  "key38": "29HaDSU9uaDpA5gMcEd8cam7QpJ4HoH64a5k9HrSMSVMn9Uw6DXMR7LrVNzFHEJWLCc9QksdVWK8mUeUAcCFZfxo",
  "key39": "2Xe7NTcULm6sNdJ1s8Rz2rHEeJcNWdVUuyvhhXYDgHYdJoKUGozQ2wzWTaXLvLURiLeRijbqaRTVHxpTep9hQ9Bv",
  "key40": "5MEPKNwn3vDVgsyEVpvgWSatcrj1r8uUzViBJiSkkZGFWkei7KQ4aNDoQjxPE4TFuzwPkAmSh3fRAfixNsZe9a38",
  "key41": "3F6iG4k2BLyyN9KoAJKwVFVvtS3ZzgHrj2VBBfMrKigDU3oVqujqBxVZeTWGCGKVjuUjmdFz2dxAyUqiMF8jm8oS",
  "key42": "4aLNdq34mpz3neMkLD155okBiMAsPKWfA3YJPajseaFa5fPnWVmZH2CUHsHVfGbkD4umTrkwRSJQcwmSuMKM5Fez",
  "key43": "2YSDCznuFEG6gij9sW9jgK8TfZ1Q6PQgehAkFB1ZD6q1foWUihP5a8NT5kcQPeZxa7qHLziazYPVJpcBY51Lvs57",
  "key44": "4yNrmPXKsGMBLeiQ35DjkRcQvS8CZvNmyBVheDmQD69qw9jXN4kwSMNDjdLRDjumATuXdNtLZhGPZABrcMhs9CEB",
  "key45": "2sihTMZw6Mo3rL9VFQhAhhDXEFdoeMTivu21kAL39nDBs22VCYWGK9SSZo5jNP1CDu9YPJZNP2qfLBj68M1GPzNb",
  "key46": "53FgMigTcL3zRN719qzLCbBDTRoyMTP4V7Tb9qwzwEfvZ6tJJ7PPCfrmk73yxAqQtZ6YfkyPSr8zDJecLxcMooKa"
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
