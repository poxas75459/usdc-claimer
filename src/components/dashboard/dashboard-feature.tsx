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
    "4T6doBvjThjfrWWoY9ff1VyxWxjd7NHwwaw9DK8ucEuGHX7hWjmnHcUv8vkQEf4sjEyzx7CShYNGWQY8H3X67KLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674Yv9Mx2XcvNovmNdLPWqKjf27cS1G8HAGiyevbo2E8uW9wMm1K7DvtcDf6AUJyoxgCj3F52K6XoJGgDTbWAXDy",
  "key1": "64fthYh6pzkAsRYkqsbnRfQcL3CwuY2USJo4N4NebcvxUd9jbq4Di2tJH8kwFjsKGe2VUikYGiewnMkC2aax7vdr",
  "key2": "3wyeSzhMZwJ82eVASd4LsPxAmXuK1XE47cMPeDgkSnDkZ2rbzH9v4m5rhM8HG2PZNZtNGVnJMXb3PfvTs6oQFGMS",
  "key3": "bmHVuVs8rfveW32Rg4oi4q1DpnQm2xNav6Lo37tTxDziaWnCsKqhZLdDgbGmSpDj2XNqrUUDW8aCTSYfMV7ENBT",
  "key4": "xjxf29PQ8T8KzaKie3sqJPr8getdNmdsDrmWB4seRbAHQz1t366VnYbqR2hdTxpYG1Ept7xWENcZyzTs1wEYi7F",
  "key5": "9uy8S9MbWkNMAdNxnMiaZwMYbSQnagdF76b24YBchoo8znhJ4A7F2dp6mdWinE2C2qxH73cbXPKXCS6szzFh9Ui",
  "key6": "FCxWJPhgQGw4QzDrLK2v2ZapaJQSvNmuGUXNRuNSVKF4JSvwGGDJWANE1udNoHBUVUdWNrSfg9mM3jj1CPieXMR",
  "key7": "5jtPKhSc2iyPZojR9dhmTc5HRjtxzyDikLkdrJ91nwrzzNKMQuLQm9naWDMYNrdeSabtQjwAvYXF6B7dRxcjHnKH",
  "key8": "3oX2TcEDdw3JGrERGCgCaW2vtmRSv4pymnHjvWTsCrio8ofkidcoWgG54uiqeAh38JVm8rBsYkpHLQczB23KAtLw",
  "key9": "54icEDJeZ539ifd6N2JHs61X3D5cWtM9dDnCXxbMk1YXqWwMUfnyNCtkHKZXiUCyS7px2dPL9ApCaHtEcEFCXmZH",
  "key10": "4EdSrNpo6fkqZd8MdayKc5TmRNXQiAjwiSb5wN861yNazBfrVqkX48mp1vRgVtqnEBBKdT6y5qKcXntaqVueBpjR",
  "key11": "4nXiaLBFrq47NLogWXbD9kKpkz42QnPd4HGFDJSUrYfSBmmTKsEA5zqCQ3wsQ2osMyMWDQVXQJS1uCsBhhH3nuSK",
  "key12": "51xQVfbsRWk5ZFjvYeLCcNLphajD1JQrJ4eoGmoz88zYNAvhHaduxxZmymomdme7nouR7BAhtgNDenCnR8gu89pB",
  "key13": "59CuMWuUjn9Gymvg85HFnL9DMBt56nFG4VhPNrZe1nyCjXrEWTFKWAKjm3S1ovEtzySv3yD3qzjcbAK5nHgfBWv3",
  "key14": "5NswFhrKcP2iECF3mM7JUQtCQePZV8yBKVLdJifY4UERFpPZpFWHGbYbYKNR8eneukyQgQxM7NCSz92qBE8PXFFS",
  "key15": "4hSU49rsVX2QYhtM4yAHWzUXyZrdK5cmnaPthiPSFhKTprZvU7BYELpDfbGbiD1GYnxmkDew5Vmv5uxg53urKk8F",
  "key16": "5JsXCGBkhBYrqPBdFssBTAFjBJ7MEFSQP9q3exgb4ASSHCRwCVv53VRQ7Ho6UU9q3SeMAfQqNzQwFchKGMbWHmFw",
  "key17": "j5dwFp1NrTpDcw8ZJC7moxZqAkxAsiMU3F1bkAZeA4JFdEtoUf2RLr977qtKuxwJj6pmKUDtVBa8dELZPNBYUJo",
  "key18": "3qdcUMdg9UM1Qz3wUtMxv9eNuaJsqoAHwjbN9MHSpEEJNNGMPTVLaY3W8db9fCMrRweZnoyert3jGXQKg6nE5YpA",
  "key19": "5EQLb2GmgkadSKjm3PSFecp1ffYJDGrSiP2LFejqVGbkUGvXz4UY9BJdP1rGfqmEriyfXJN9CM6NNDzijRAT9Uz2",
  "key20": "5GmupWMv18FN9aNzV8Yby6rxw1AxjHZ2RjWsobyHd6i4igrq6r9pyqS4AN5jtcXHcc2dAdG1Viqr2R9RYLB6zmTS",
  "key21": "4RZnYoAD7PyJxetfFsjziBV5QFAspNgBWnz6M3z5GF6vqAPCKrxNdiUvJq1JUuvyRXBtQzr1Y1GkcVL1gxvCY4Mc",
  "key22": "2LmpXjczz5vjfjSxv1WV4aK4ZTwZ5dhLtrTBfGv368KVLDbyz714ZiCogCHrsGsz9zJNDZWf5aoY3bHFZCHwFffp",
  "key23": "2xeBRpgZcs3ewgYr5zPisfFDxjy6qFoAdFCf5DsWdabRWoNfVXEsPhoubr1GA9yW5aYhUtvLSL5i5VD8Zf7GXcwp",
  "key24": "2orJTbv7xBCH2uYjBLZmq2VyTJCr25pbJbrVdVY7CrdcbXfqED9c4zgQUqTgsB7V5K7yU48mKF1Gx2BKk8d5gu6b",
  "key25": "29Bh2z9eRk1ZHz1dC2QhL2x8fdDXC6ti6h8vZ13p48xtQXm6QEnXkcQ1RUgZcisibd7TjbWPWvUJ5ex6Ggx4tjat",
  "key26": "5bzWgqUnr47vj77VoFqh2uoEiLSHL9Rq8gBoizyNxHEkAcDpSr47pWNXA48XJ1sh6ULhAcUKL8MJmMHPeR4q7esR",
  "key27": "3KZTRSGTGFwrTmRWwSeniKpXLuJkSVpZVUZwBsUThDKoHDWXCT3GVi51kJXQuqwrw2sjMc94uwzhHZSgGyeoLDi3",
  "key28": "4JN2AZCPKJSdKBZ6NHSYtHTauotuAknzCeMbPENSmSLTGEXHkCCNPJ4fXtVUUQsF9Nr85aRmdFzSdGNodttKi9L6",
  "key29": "2C2oQsvhLNBx5MSaCdjufMHyTcqbHau214J7Xz5Mbkkx2aerQUDZaZ8HZLFEFt2ehXtsNXB2s3MpMZqzeFGAGYWA",
  "key30": "4EeMnD59sLu9t7jWcFRHXPEU6mY2Y5QK4yMgHMSYrdE5CHKvyxFfLKeC3qXAG8jzvMFRoeJR8z61GHkxxuudnozL",
  "key31": "4SJKsWTiV8BCqvRjKvcRdqFFEqCiFNBXXnaazkWLw1TycZLJD4aDZ6ek1GqjYZYLachj2XzLaYtmJR3csCCTZq2A",
  "key32": "2Kkamj9A7JtBxWwfeZviXqeDu5wmzixuKRRfeP3RrxQ2KJY2M7gWKnbeWbrfLURLfwRWn1yQkR6bd7BiJpRSigUi",
  "key33": "552bwWncZ4QHb469nqSUEbWLEEwtmLo6yYVJH3oQ71DPdqRqTVMqc2uqWAa36mY4aJrB7JPpQ5E6U3Xx1MCBw5nP",
  "key34": "2sRncYAixLqX9nd7C6nKqMQ7m6XLUvEBysKPD8KGQW9v14ZmRYKp4mDCKsvFSva5iF8p9PTvSqcAnSmaR8J7Y9wc",
  "key35": "4rSUAxn3RkzkD18npWUsgmTCEte1CdtQ35H4RNjxQ52w8A5cVjLoKUbKKwZfMDJ3yvFtMyS4b9kBYmZKMkGjkxY3",
  "key36": "2WwPcUmjFhZEjv964EP4XoctjdMm9aSt5V2jzRwWKeV8vCogVXJF31mYgA5gATUJpbS5gyKLxpW8eDkgeKj5vfLS",
  "key37": "twvnEo6bE3zKykqNT8Gb5jiPBmLWN2ovCNrBv6vGVi8XdGh3orT73VsnfsiQBpDFrjtArgxxLqoB18BooVHCdnG",
  "key38": "4Lr5R3Vwwh8qKignZVvh3FKix9a5KexV95gw1MbRSnna5iTjbhr4679fiuuW9aj65SpmFLimQdkTPnUbPrAgU6Jg",
  "key39": "DfRwGFPYFikrfpD6JrJLqavpuVvibKCFxy9w3ftuY4DxjSZXZv794ipRX3M4kMHhG1hJQ9Zv3f9tbMGKZC4e1Av",
  "key40": "57xiT6J2LMV54qxGhgXqT6ijqsUtpr2TVAQo4TyuZ4pdDD2M4d5n2JuTL5iPQ11kfuq4asK3dcvhdDp91e8tcUmc",
  "key41": "5V618jnauVMicZm7Coq1XpisukuohGUj5bFxSDws2bnbW1V336C67KAtxuTT7WDe9GyxmiqoaX6vJe5k9iEUFfmN",
  "key42": "XECuEu7JhNhuPPvcPas8UCp5cxPiFZCvMuNWCaQDXjYCZzFY8sxHWHfu6dMNFKssNCraew9a7F4z27qxk72hEX2",
  "key43": "3ZhAMVfYZBS7wbwLowNQBkkL447TCUwW4YP9Xjb6KJBbYJSLxenT8ronkAHSAVC1Uwfp4gtG6JQ882KhuRcJy7UW",
  "key44": "5YA7QzHf2K9jyuhXPdncMiBCwzAkBKLRQ2LBSSzibvFc5x9aGzUZUs6WkJz9t9gkzfwwRigc2F3e22bfjjdbcVYS",
  "key45": "5rqxb5kx9HnpctgMfWQV9BCF3b6MK3qYuw2rduKzxBr8PHJtNs5JQ1AVLqcEBMxk3rPGvaAwNprnuQMy3ZR3spq5"
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
