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
    "3RnCiQToSJ2kkfn5MJEEPaLC1b6ypyesa1fqwyP14sxcXAZAYLjPfv4JT7GzQfVpb1uJVq5mPFayFJzt6bFC5bMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtA189PLzdidM1ptcyeN18cyVzeudcE6MAVu7z6xBhR69w3n6smmH1ofFcXP3AXwVpQxqKex2QDYDdvhpomfrMK",
  "key1": "4aXSuD3frtLuAm2GsWGW8yHtjp5Y7sneMuy6LQjKaFVpcdNPrD9G7MPECKb6uqdANGfZEYA5uVvSjXjTprXVtUeG",
  "key2": "2cPCehcodSaBDLo1UWRdstXNaEkbNiMLeMYUoNbWkmixCLhqGzx8idKZWu7sdQWnGdEsYtPdwe2e9rfA8RfKB92Q",
  "key3": "3eogCC6DXXBG8F2T8bRi1UzjPUAhURZPz3rxLKerAknnNuPjXaWM3VRQ2yMcvDSWATqdngLrNhLUMzPCtJDxi3vV",
  "key4": "2j3WSuF8MsU9tVwXNCHsCupzxFgswMZqJdo1QzWqsLQFxsZtsw6nk4P8obiLgvYMaYi6dvcBoaHCA48pSPyYgHz2",
  "key5": "3SWv9J4Fc9b6mG28Pc9yDMgFoPirK7uMTjYNsaFyNP757L7QgDqSpSJfvyDDt3Dz9wxKAXoDXAU8hPGGBgPDePLF",
  "key6": "k2F1RHfbKqevXhTToBfqxhw7rvUP6xtq7Mmau2rzrJCRc6nkZEnigMK7VLqzPKk55VCxx9Bgu5pgsvz2MZJjM9A",
  "key7": "5jzqzWLkXDL6pXNgs9wBTDjFjXPUqPNvUVr8HxjV6S36CWRMyjRAWwzPYYpfRNVcdzdcQWVUch2JXX4si9R4R6rG",
  "key8": "RcKJfghNiiwN3ReQcWE4zi9gyFqi37ttcRZXU2sxs4hhsFnS88NBpEEtE4Nu2Ya3CAen5voDvcJ1qSnc3sjbNfF",
  "key9": "2H6kzdYixR4AXkuYdpVeRpg1StrJYv8scMjkrjfDneevHTsRJE9PcfpZhQDxsP3kthonYEgmmPZijVLSx64R7uPX",
  "key10": "4mSSMFFGZ5NvfKiw4TVh6RgncgSoZkddBGLKoproyg24HFSocRkKnG6qCsZFdViNyMZigSkcJ36rt6ogJDDgmH2U",
  "key11": "4CGuAmuhVoJ652bYLsxi6Bu4Bp6A7NxchE5pSCnqQUGhgbMrSyfBiBhe1dFvAvqq3DLqY1bGtpLUuYGjCoDY6JWE",
  "key12": "2AZBzkVEesurarNEbrBfEdRA1igzGGLyPzeKWA4aezCqzBJCBZ51FHxJbY4ZE3vZhiz2ecQaGFSU49N6cmreyZ5F",
  "key13": "5wn7a8auREEQUxDCSQB8mFyW7CjXjnzfz73pMvk24iWWkmnx5PApUnJVzPfFhrLbRMNoRrGBbzEquukg1mTiDm5U",
  "key14": "yzgh7AwXe7i6MwtVVs7FXDikngoUdUvaRGeAW1EsQeFJ967CjM66ermkizRAEK4GMBdWPgLcSos6QZeEghWHJGq",
  "key15": "2e8NNYWfHAWG3xuTzDZbfYFRYsfRpBpBzQCaLrEnTdmrhF2CXhFQCn3DQQnoBNG4B6bbGKt6C5eMkxZZAiFB9M1b",
  "key16": "2GHVqQ9FYWCHorTtyamn6G8UZvyXQuG31KA7oRRLe11tQrauz3jtwefs9ejinKa71322gTD9wSeRmakUTEd1Pfeq",
  "key17": "2EzfhHZ9dpP5tCjFg7eDioGHsjFx9skfZtCvVxJ1pWKnG8Zwzo376MFCHyYUno9zWAyGirN48p7RBGybCcWEiFeF",
  "key18": "3vbWFH48sLjWPoi7ECgmDXxwcdwPxY6hWJiRTDitw9xKKWEQtdJAQ2jTEHkp9FcBkQycKum8VXhVEQ2z8ZWZxcfu",
  "key19": "4JWpPVGfttTmCqd1PaH7WNbBNqTEPXXzGbCjitoCBqHBsTGobwCRLs7JggKTMtpifh6rdArxfVeib4vspQUsCutb",
  "key20": "2Zs5tJK9Mu4wktZFVnHt7c9ydCofDE68NrKihS4h3QPYDXbKNktX5t5KKwKzvUAbpUUSc6J9vri1DLTNAyPffRMR",
  "key21": "y3DsbuMmbJnZv2n6amnUCPuHcjvqqJxSrDvpTCMVtSb6zpmkSXFj1M46kfEzE328T54pqiNLTyFy8M8e1RrLFkD",
  "key22": "2t5aqSUT9Pzm49VwAiJDC7vh5B6fSXiTKGEbYzfs6Mx9JxKEZq3pECTjjqx2VTF69aT1Sr31A3eoWJmwHbtr4oWu",
  "key23": "xWiL9TJFg8pnYxZj6FuVumjDtRPfuVGmMXYTGvCpFxMp3RCVtAjKsc1FB21qTChboVfvWJbAYYz2kAWA544jHxj",
  "key24": "4Kwg6TwUP8PM6p5vR4HggmiGn9gQy1vMJ3kT9NkurJt7AYz5EPBUpyot61ZGJcHnwXBkyWwTWkg6LdAiZuHrgiAE",
  "key25": "A5hf5Z1oJeRWmmquJru37KTw889rakWJkhVocgYWaTP6YW8DApSWxKBV6MJqUFfBN5cNzJ6zCPaZmY7nLtn6aWF",
  "key26": "38mzHXgfuaZ6JjvAd5FuLc7DFMp8VKZ2kZjSuSjCwygMg67dLXEwzvb3QBai7JrDghhH35DjKyw8Z7vp6wa8hZBz",
  "key27": "5uVM8ZFPn1zSfZSt7YLgZuJeK9WHbbTjk1CtudNmKBBi7GTMErrrTzUjz6fyz1Loiitt1w14JV5wG8xRpJDb31iF",
  "key28": "2DwqrvdEhu8DzJk4bPb7HGm42zgGM9QrrigkRH5CcmTUoGhDakbr9BWqJ1ixjoVFPkk6tQm4Px9gSD11BUmeudQm",
  "key29": "52dahyiYrSv5dkqhWvJUuPQtUq1Z5z7uQwMHfP9LjhGVeGUM1mCAASdpRf2nDhpcaAzvM5hZfgAL26MbZrHF9Rsv",
  "key30": "5WceorG9FHJo4o8jWH3SidPLHHLTMbyiS1mUkqhgSvF8bZpsPMK4hudVXQ6KxeWor7gGM2RznCNydD5Gp6Yi5BAk",
  "key31": "2BR2RZTPjPE2FzfRFbgngqmrNkEDcnz6H9v8dM7D3At2YGMgFdMgNNkBiXBjnsvreVnYZKtr8oTjeBBsPGu83cRg",
  "key32": "4ZdM5dRr4ywtKJ1qspwXqJsacFoAbZEEKUbVV3xYEWeF6wso2FqF1n6Ts6Mxuv2HS5ScUcSqVovFB7RJkBDrTRA2",
  "key33": "5njjJTo1JuGG36owEPh2mZSGb87HUWHguLYa54QXP4144VfZAD3BNrzk1ZZ6onLory3SbS4zfdZKF1579oguan2s",
  "key34": "4HyKjnWrUNHcM31Kob6zz5r9GzrabneGZWgxLEv1WsbkHfKSfGCv8xfuVjbyrgHwc9DP3EoYVnBrzZsE8ARCv3Aq",
  "key35": "29ZfKDELCBvemGd7zWgdgXedqBKvt6vmediECDNoLzoFRwi9SM3kYrvavLSJrS4n8pCEySjJwi3FQDu8RZQ42c88",
  "key36": "567jNTn9Wzw1JYY7wX7sijvMzwkFPL63C97qDuAjJQV1zfzC2315JPuXgAMXoFPMhYasQPoTU3RTvR7w51umbpw2",
  "key37": "LnSQmTxK2v7fkjLZg8W5zazFMUMBPfLw73G4wMXE2iQ3HgKasmSaRyECmVRZKfAMKysvaiBeK16xyXKD1jgRGow",
  "key38": "4SAgWjvHXBFZA5UX6xDu9dTyDp8k8wW2Dn96VSYe9WwMDss8FfUDXcXNve3bKs2hzSxLrbN2ow2GJSTScn1uwrFo",
  "key39": "3USztGPQw5tJGqsgP1xHb2wkr7hisLxJrnL5zcEqQqoAmd9PGWJqVB8rctSxknHsScyKKXBxQ7dYe9P2H6dtSYQ6",
  "key40": "1qFjiW47F8GFA6zS2SV28pBSDbxc2WFqFwuCRSsJ17cdNwskxVYtDch1Jv9mfuXKhXWcyFcVH5k4hDYNsLP7mzM",
  "key41": "5bvzwuawUsFEqKerWBo1W1JZkhRYnnhBG8PHUE6fJvah5wb1gLXZk1LqjLvyiANiWKXzhVK84Qpazg3Mrvq5VVaE",
  "key42": "3gS3rieTgzbeDixsUmk4vbZimYTuhDKsrhMRowF1b3vk7NFMPLSpFEvyiBFwUaTkkD9poTbiUuBkmP8DQPqTrYXF",
  "key43": "rgLr7jYsh5S8KuhKbepZpXqrCrKe7ufpMTtMa5ieqfmRainRQoHK43W467cZapiuwPHs1Pm7gKNyfP9pe1GgCyz",
  "key44": "2G8RCmBzADWsFUhE37x6hhxxwNg3bWhtSGAMNqbB86LKempNL32wsUD9AMSToVxtpU64dJFtzz7ZRWHmSFp4wmHL",
  "key45": "bnXh1NCcR4LTpgc4YFxQzyMyn4LmxVaABGc19kzeCp9YNAWJQPQe3nnBcnm9u5TKSQmcJ22Hykfx9sRHh5ziK9D"
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
