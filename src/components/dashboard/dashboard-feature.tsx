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
    "2QE3Ei9dV4Xh4M66Up6ER2GjJHi3HLfDEvziDENbRciUSDNPLDsVFf1L64kJ81tgqzfBZyL5hEpv4m41vAquqXqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQNBk321u6iHxAse72if2oTpGrrU7sM3TwiTBKE1vTFQZo3XAam3Tn6bbQ8QCDQoHLj88roi36epP3Dd6T6CK2L",
  "key1": "5jQKduVFU3zcUxnbRQPLCYyWBXb6WxfQPejjH7Mqfztq24Rrmbu2pWxHi8fWRwoQd2dVG1Ht6nNxr3zC71kxsGDm",
  "key2": "3ATitoksgUC9sDTqWRgAj78t6kUnvxPfFAMybnNbnvNBq2tZDM1EFWHnNzP6HTnLcgjNGQqwsS7drD2s4Leip1Wc",
  "key3": "dLxH3D8T1D2T5MESFxrKYTxKY4sFUXXAQhekWJB83jEermE8gvYxUerTGPVvc6sZB5No4JK9EyNorohhbJmrPdy",
  "key4": "4PyMvJ8aKrjDtEBw9d2gmvioWf1YGpkxrthU1iyLURZoRiiWwZ3pxzsQD79dQf2s8UtF9X1XGVfb8NcBaTqeAhMC",
  "key5": "46iSrVFT5Tem4qz4MUH8i4tkkXkJFcFBTbz2VHz3JDwThJnfWMbDWmx49K7MbrReYu5A4oMz8kxd9ipoEabbjm9q",
  "key6": "27ViZDFCopZKmfSS7C8Yi2Higp7nLPYkGkPJes91EYWk8vMVfGgCpCMM9SZfELSve6Hoo1UuFetp1TqzA2hgpRsU",
  "key7": "26HaDq1wDBELrf9AiF31bzdC3eet1SoEuv894uNPyeqfZtS7UL5GhSvhkAsBXKcWYVgbADjSkKrcZK16M7X2gopn",
  "key8": "2yiZSeHuiejiKAjvzMQ1unvTRipdeft9w58p9p8odgRiQtPQBBrTYmdGpQ6R2DcJbtqfU8gaLLajHpxhcERtivTR",
  "key9": "nDdEY7Ykscaqe1MvW4VWN25FMweHFrd2UKpcHp5dBnwCC28NgXVDzUc6yrtvp6TWsBbRDLAJVf57cE5J6UU76aS",
  "key10": "DE3QFvZzFAHASR6JjVa2AtZCibHvYjQ9oJ99dUN2xkqdj5AR4H14VgGSgr4FKnC2PdM9DYwkJpfhyfvmC1QYEnn",
  "key11": "PayjvpWRVwNCHUTusuBHUGASf7TpVERwYWSgHDeccaihdqcjiP7eovCmJArMiW2EWo12eovRTLvt8CPe6bCBTPx",
  "key12": "3gNhcLHJKWBKViT9ySak9nMMfKD8wwdjv6oCULyL3xq1afrpsCvx3T6i1S7rk9H89S6shEPFqA13KQ7aqRNQs83k",
  "key13": "5kKKCoToHoim4CJXqBS6Qr9jbwN5wvheQWvqH3b7JZ6QJYo9PaMHbAGZ5KnfL8GQPk1oDnsAWGCe6JgvBxedRPTS",
  "key14": "CHpVB8KNLrC3SHQk43gxCQsDUmPQVwtAWY2tvrmpEbuCbhWiG2SHwHatZkADkMzeJ5Z4zxgd7VZ1Tg5iP1HL9v6",
  "key15": "2nchJ4DW5phEdMEoeJrYh1wpjtKV4U8NksecC94pWfd1jdAquovSNTsWHE2XSnAx5HLJV43arWAdNLNAudDL6WfY",
  "key16": "2Pn68Szij9oS7Rt2J6RBZ9rXx8P7CDvzjMeKYU6FANJbTm5pFptexxEjxVf5kXRsRXnrASmcBhT42YwJuL2Ubu7N",
  "key17": "4WKBeBJwibKJuDTA48ynG3PHaF94W3HfkaybPfFgQEKEFfP3aoWDCUXLXZPFuuMq1JneiiRnXGaQiT1BQQRyZh6F",
  "key18": "3Eds1CHj9tbhc8RKq7vC84KJezfPvri93uAS2WQmn4six4Vx5G2ZKBQpfKtjRVFegqDbpjjbucWBQ6TMqrbsi4PC",
  "key19": "5LKaBu6Pp8S9uZhEy97eDTvp7Rro8RQSGTQ6u8y2NUTUkvXcmj939qjfZKUR8Q8WG31R32c4PnTnQXSe9nfmj7SF",
  "key20": "2yvWA4aEepW5Fgf5hGPYjb1H2rzzuJYom1a1nXm2cvyxyKBAqWPx9uJBj1ACw6RPwdMWv6XvyLi8ux2KuaUMjNHF",
  "key21": "2wCX3p3x6fBYmz4jxBpycDpZkYpYdEJxWXo53bvJWsHzedwYercc4g6EMEVN8X7WL5DUaP4VqQnSUc7d94X8QAkG",
  "key22": "1j1VBrazDu9bNJTyZ2p7YPqpr1MyEGbBmN9Y1uk4Aw5DUFT459FkaHzRAAs3NV6VEufjiWEY6CvNTfV9D1EVgP7",
  "key23": "3uVubBWnQvXNi98fjnTPjP2gEsjSiNrjSbUtL62zWmzmvmD1XgFR2BLHgg2uNwnRgpHRe2gbxMQg95HtAVKicGUX",
  "key24": "2kRtd3cv5otjTYKsE1mkz132wJbbCcvKLHjL3qEG9UcEUjM4tsDBFeHKTzpSSEdrjP9tsyz1XTwDUqFjbweZntn2",
  "key25": "2yYJXqBYCW5j6fKg7MxqaWrTDt9icwqAJYYnEENmxG5gNGSPrLoNT3bWk5xgGDEHvgZbrjnAkZjo46SNXaVmPzGq",
  "key26": "5pxKPWWPkZp55Vg8tFHr1kpbvhXX5WKnC9AEtf6arkUfYh1MDn1jPo6kwPUbLvMxHL8Wg2nk2bQVtAoGoemHqavy",
  "key27": "4F2qtkhpRrnBeSWaAi47wU8YptY1uCwRAXsFcBMLnbvJUDmLnw2eC6jPfaDMEg6LeimJrJhg7PohtdfAx5Q8RJy1",
  "key28": "4cU3S1XLVq6NoX1ejFhNbH9sTRcPMCZSeVNgT1j3bA6S2ciuL7knnN11xTrA18xWZT4s8warC8fyVNiTfkf7HVSR",
  "key29": "KvcYSCmMVcBEq1qidcLB9jzKWvszzboDGLRm6z5STZPdwoKCScNFt5Y2gPHtbqaYJcgJRVBAjhLbD6JppGUdsU6",
  "key30": "TdELnCXnM8HQo9drHGCKxDbbx5zzYNk2cnbKitqkzo2BHq5xFT7wW5Dvbwr6J8Q57T1S9msXzsYUfL8651wzvga",
  "key31": "3bXKAoPiwewdjz5tzbtVQf9FL84NLL6vd4DC67vw2VKCVnJZG9PVAYzSVu6ydeRbq6XXT7a7zPuy2ZEt88ZP1VCg",
  "key32": "5oFWMTu6bcNrdSuwxS6HSDREMHLD9DW9MHtimQMhafkRq4pdF1ZyV9dWnXi1emzA7AEWUbYJE8VubHakZ9AUJ32y",
  "key33": "3LPVszeQFayau9mSpEsH34Vc3ApyiRrYUHMBXq1Ce68Ze8QMAzpDAqEEcBvmJEwCZjgucHc2r4dMocYcdFtPPjNc",
  "key34": "4dfjWDdZyw2YwxfoU9ZWoCrh9Y2MJ91PsAXvG9rjMi1iVXPFKHkb9GSvTzcujEbtDr92875J8GsNSN95xrR2dhap",
  "key35": "EEx3sXvNwS59caju7cCygPAabCH76ahJH1tRi4xzroebBTC41sNcNTRYpURGm3gkX2x25AjvurwRmTjjbDsixDE",
  "key36": "3tYjqcP8rNmCyJGgcsLt3qTsgwtdQYEATS7zWVRgPZ5hWRnFhtZDJWDadJ9oQnmc3bfJiMfns4zsbqoPb7ZoqyNP",
  "key37": "4fZKys4ZWrXN5D8apmmoJi5LrSqNuwEukhkVYCVFRr6kHLehzCsXTuVJooHhE1ogTMhXvLGVtx7wGaKmg8CUb8Lc",
  "key38": "297m81FfVwXrYH81KJHp99wmzrSxkvUVzVAU3DUM3C2LJvK7MPzaLtFRomyMvGytiN1PUh7ttpYn3daPRuKZNPhk"
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
