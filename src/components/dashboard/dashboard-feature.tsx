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
    "3jUYPh66pWtkwg2XrrKuGwEu45VTynpsZvAHNzZ4Ngyf2cwugaV6hfZAwqbRcGtE7uwokYawexgJ9YMPkVzp3WCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jAnfo2N4QxFMiBGuvL1rBZTbJksRNawbxfhnTVFXPkrg6vgChMzchpc6n8BxfnrzCoPPYZHGPswX459iqAArDqe",
  "key1": "66ribWjPi9YCoiDKj3LMRioaW5UXfTrWq4PstZ9BNJrBAcFkCaMKtKLKdPN1SnWU2Q3bdCuhgRXWMVHQMt3FVh4V",
  "key2": "3y2DwnqJZwXuRzUYyumJLphrkEsu1i43FBbWqMLp5Nv8W9fr8vg7g9qebzPWcuCMseEjrid951PMathWzzCBfaxF",
  "key3": "Lg4F2jmBj2aMQD6GKbV2Ms6jK4BjwMFoh4kVgkHRfdXnbrWNoVeZp5zobjdEHKjJ6rDRdWYkPF2sGvRt8a79uYX",
  "key4": "4tybdVFx1pPVBFojaiYgyNF8sdfFNh9JoZCENmACsVvJhux4DqoAx7YA98cc89BmpQHDoxCP4a51dYHGXHJonKDQ",
  "key5": "2NE2cWbe1oY7UK6nWRGQk3nJQcUgX2ktm8bFqJ6pW8d2T3wufTky9hrWVcGuKsHb7orCb2pV2HvBiSCscrZAHj2h",
  "key6": "2Mj9KMk9RveR8q9DKsSxAZo6BKPhoYtmWrek6VWuKdtHXgRNdhmt7MUjmrFY8wkhjMMNm1MoDxCnMkP97fT2v3Xr",
  "key7": "5kKNaiLaQKeSLCHwDF3Hv1UuGefDMCL72Xqex6JUBuxQXpHEdWvVMwxz1BadJxdu742w5qCvHwRFLyzsTiEd3a6N",
  "key8": "WHbCf3ubqTtWk9taxK3pY1DVHfsct9AxwkKYyk1zmywTiShKJQYQcx9d59BGWmjPFeDJnk3pA2GwqEozXMCfecu",
  "key9": "5LNLBQ74Cv6HCfqgf3WGz6SwXQTaD5XE3TPLuFsMnQX1GQS6639Ae6o4xDRQZvf7WHNhEgqeAL63rKnEQcr18yrC",
  "key10": "zp25tWBKoasmDtGodyjFbJzFRJFFFxGru5zCBvQRikkbUH7fALSA3poV3M6jix88m5Fkoa5c5VYmG8TbmiMi4cA",
  "key11": "zPHf3CguG5gQERnsLHiRAJ2NnEXCKNVLUPcUrprRJygq865Gdtf8gjewd3NzBcNangRUug2zTYJHgCGMS9pDXsW",
  "key12": "RBu4TSTTMzszcYmtZysknaby2QvbkSKiMM8nM9h8hnmT5Hs5ntvFEXJmsyvY8uFsttD2j7fwTekp98D43RtFBSA",
  "key13": "4crGENKTbKHQNgT35HcZnFpLh1oM1swJbztxdR9oVHvUjqHPLz93pPSh2nb1wnUfCoLXHsVSQDhjidwzXabt1H5E",
  "key14": "GwE6gLFbF9Ms6oHTVtDmZMnpBkmLUADE37yEm3v1EH1BLa8GYJwQZDeKMVzNDRC4njtn6A1KxTh1q23UjeCFQZo",
  "key15": "3ag2yX9m2uZfTZvLnkQG6cuQ9w8iG8f3nxtdtUvKm4NDg6PU7a7M8DYzwc2XZdFqQhJHGqHDUWgKiEe1npQ6Z3VE",
  "key16": "4DbXFXh5CLwdsk379TNGQDFmKk9aqrphJYgbTiuvgD7bCbM8cT8DyU15GTdGWzp561DDG8vQNjfty6jmFNUqQk2N",
  "key17": "2egbc2LiGEnKs8NY7EPgRK1JWZTWHkLUUp9m5FWCL6kwPEmtUCfNuCnGTeC5Cy8Wxzp3NzS47psFjwbZrV9hVVbn",
  "key18": "3AsCxi2uEHz1LFQztgLoTuWAURfL2VVQ2hmqA5MRJ6omExxUgUskhiv2pjTmJJ8DDcU5Cs3NtkHTmx46W7dfcELN",
  "key19": "2AVufv7Zq1oKhZdeswciHhyjcFtb4t1VrKtsCTob5iHnn8CSj1GQVJpKL7wQTwHXm1GACb3L9MKQ2Q1UJp97Hu9E",
  "key20": "2VaxHqDXRYMm8E6SLukkrNJbCqWdX7prq7Ph7iHtVpbW18erDv16CWdF4TPMzGJayrVopJPkMN1A1EHMwFBCvTwg",
  "key21": "2TGeDvwinZ37wNwiwjjEbFwFqHKY7szwPgQ1ZuB4qtD9gKzhLaHoZSwArdEaATNLZqJMvy8wcuSnYza1tPuxocSz",
  "key22": "3yzA8DY5vSuW3gHctQyTAFnWwATfu3iMWbQ548roiGQ6Tn9nrSmGNZM1QKpJHmUVP6E6pFMjH24gEbPrnRGuqcui",
  "key23": "4R7PuCVmG4C4ehff7bW23KnPoYTcK6pr4RY7Gc2EJ27FChD7jPfMoB6Ho3fiAxLqnNxxJMWobGT5AmBQ3V3UnWbU",
  "key24": "GEW18WmkqzjsvfTzmuKmsMLbxJcBdb6xjmTDA3z3yxgm5CebNWw81XzLKZHYpMGzT767gYor2nd2gHJkxZfURbJ",
  "key25": "5RkAMfTrQnNoKrNwbCBb5JwMU248tEkNYnJsQkKTAY2vkTDsenC132FiC2fRtP4pj4zQZ8YpW5Ys1hxyY8r3zi2Q",
  "key26": "4WoRYVFEco473pQqwGk44uMzPmRpMp1xQvaJ2dRYSAxkAMyw7AyR6bEhzpjnfEeKLZrasDk51siCrcMMvxKWWcK4",
  "key27": "3PV5uDcdz4y8CcQTkcx7jBdbWXSX9wzDZcMFAZxF52wjvN3gs6HAzVj3SrWxWviW7Qv9EbMoyQwnoj8tNBaecCxF",
  "key28": "641k5uahu13vsTYzWv7wH9wJb2j2NcMYiN4mZL7ox6VcJ8NU7oP5Nru5jLfgQoAGnHRQMmw3Kng6rRd14T5fXQFd",
  "key29": "4w9Uqi1F5zKANop22xExZG3QPuy1oBMBDqnqz7hk8GDcgxZoyBhoBdoxFoRZPaerywMHtRfCoLhvjogcSz6EUPmN",
  "key30": "4zpLBJTdhxkYvDPr7vf5YDCzXXXWSbWEmVjUSoXiN9kBYw3uBYQ3QLogjZAcPnspgfivYvLv25V2hVFaxNUZDELu",
  "key31": "5qDim8qR9ih7SY2itA3pJRGqRKKhJcoztTLbAuYJJ3AHyrwjL3HDt1Jeuwj4KuekdgCUf1mECMQigmWN8yMfbomH",
  "key32": "2ZovGAyxdvaTKCNVK9T96njHLjv1UuJnpKKTvQJvJmDYeVKTUa4rGEGkiDSsrbtDVtt3zmXGgaNunnpphuDLaXKP",
  "key33": "5YP2hyRyBxCf2tmuo5kn5v2xXLzgwDwagFenqrENJch7H3zmyAEssSqrQpaKu8Xx2CydQtVsZmAtbJrggmVFqQYr",
  "key34": "4qH2vdJHjMzadySwcp9CuTn1EgzdnkR6ywR2azGipPEZd7ExPXkGajQF6eQCgYc5FwKcHRjVd2S625kEmm44rndJ",
  "key35": "3y2VjGzaDSNoSCQBL8pi9byPaaj2m8jdzrJbDZn3Wdg4LMhS6Dv5G4QQ9vNxuBKv6Snkq9BLnEEXHQw1RFDqtHRS",
  "key36": "3tg7cKuEVwE1AMKEkaZsH5U65q3GKvni4LAMxisYj425qsVFj8TeECG7rXEzYsifmPjJ6aS9o5oF2H1baxUsgsEC",
  "key37": "5m3QagpGXFVQFJfLCkXDTHUv3rh21zRXKBgN9nsNF9Rky4GXD9E2ouZn3UdqsMBiH8RAWRsLMnSqBnHC6mLJCVqC",
  "key38": "2tzJZoduztmWeHAVsZuLVerqMpdDVmZDtVVC2RvahjqKQvsM3NFHZpyh3WjT2CyKStHhKdHmcU9QMam94EpWPUVW",
  "key39": "YVrZgfgWLTh67fiCMxdftgMrykr4W7pXsmP5MkeuBcmrASVCzy7U9WwMqae2eftzYBAs2GWJCa3XBwqPscHPjCG"
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
