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
    "rXZKgaS6w6kC1YgZSJh3zaEJ2XVR7X9dBaGm3qrNNfNmgvdEpy3cKs6xescHKJv2TrfsKomF7X5TsvrGXYcnyxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xL1gmgxuYvJNiAfNWBEuCdurWCcJb3pGSSMkKVpU8baCYfNVmFM3MW9yxJdnHjb9FFanFGSW7pQexRNCwNrrvT",
  "key1": "5ysXgNxQGk2HrwD79ycqxTA3uNtL661ffjRA2eo7qLQ66kpdSQg9CNdm7spBrmLfBWDEneAxKoW9LgV6ihcebgg2",
  "key2": "K184RmnhZu6RKKEzFUQ2KKNWjDHvA3Ui28XAmFHXHvvfMCxeaGs4rjY3fthenic9FQiTicu75bGZMHDGTL7imws",
  "key3": "32sNL5PdZeMdBKRHT5k3hKYqXk5aAdk4pvD9fhhQF9fobqTvf5cGQ98juJJUp3kfPTwJ71mrGZg1vimYgYWY49Wf",
  "key4": "3U794okfX9cSi3gXpVv8ELAxmatz6851P1qQ2aTJhFepJWvd78BhGzpbddphvWKfHUoWWL9RbXe5sLFtSp6rVT4c",
  "key5": "4BSw3LgQpjLU8a9Q9sgubcPDeDekcgYVpQoKYDdttaycpfGWof1hEubVjgaW2GFrsZNLTo1xuDTNVNm2CJ2xrHhy",
  "key6": "2B1DpW7ZW964pXdRxtvzBxk1msUEMQNfmCaT4BNnjUaAHLpXM4xFrN9wFpickD5qAmtsZDT96jg4CEUJu78Pcrut",
  "key7": "4X3PHD7AkwRHizBKz66euhbsAMmJSM3NWx8uqXPkyiJWbD4aDzzVY32ZSaxvJBw6KwySFQM8HYkwVcz2Bs8anbkc",
  "key8": "2FGQ6tGzk1WruKY9zkzUtoKb7oPbC21X8GESvftW8A8BDxRhgn6E585XFUfQk72YHe4hGqADEQJBjDXDNpZj9QCz",
  "key9": "3tWTo3jwdmTYEaYDxAc4EHXvr6tjZYrtnPSHFXnpbFwnocKbsgDvUpjC8Zrm5q3229K6ZACSdQR8Tm7Vo1QDKSfJ",
  "key10": "4KHX5aXZpucwPCs4p1yZnuJgXRt6jzNELMts2h5juVmVDCFZoLiFwAHtpyuaMzbMwD9A6P8A8kJfrgSkyMtS5rwL",
  "key11": "2yNxJcsLCLmHUjv5mmkZWRCvUZqefKugt8QsVU1UKigZtkg5wHziBfffgggz2wtey2PLvXWbyg19Prz4VHPx8Md6",
  "key12": "zWsXBmB5H79QatNYooct4GtzmVMh8t4d3mkmVRBTp1Ab6z8EwV9txNeNnuz1Y2ukusAufkReFB14diQjgDJUD49",
  "key13": "3bXa1HKuzdYHSoUzUrWXzcGo8hMu3C7TcA1tAictBBPjZ8qwT3ZbPeEC9TLzsWzdaivJqeVfgFB9GmdpJgbgs6BY",
  "key14": "pAybkUzYJZkUdbVKxqvM5khtJ51fMkCHYxdqETPu8M6yxdHXgj4wJWciiKSeneEKbuBPvqVhMXBdxoMtEzRmSWE",
  "key15": "24qKccVKPYynaW8yUAa6QZfamP9XHh7RAMn4oa7UFJ7fswZWpi9LTZqZWjSpJqcSAiVmtk5XaNzpKsEJJp2Nzzcj",
  "key16": "VLfniBhhpUpp6z7YkvZKmdUtigT6TvbPTF2ndcPExszxKbXjoDp4vHZHiTwGcHxstQGbzYKcAHMfMhqVkEGXo1T",
  "key17": "3jaJCwahu1YWWB8oVnebQE8dDSfTvWeh8Riwh3jaeNe6kizVFPaLwxJR2TWz1unWddSfHb6y711ozUyK2GE8b4xr",
  "key18": "2Yz738KP7nVGRScJcYc6QRA9wgPNnwFDEnnKYPCbGjmv7geEXRwPYXpxE4Z2SGtZHmG7h3RGNuhpTBaKNZb6c11N",
  "key19": "g7gAFb9EEnuKuqdraHpDFfuqtXjiHCRobCrHoCVY49BK9YqjYeorKuaMne2WLMX2DVfcunaBCtenKkebhRxHjzY",
  "key20": "sr57kKHbSvPphSVNqdqh7SMvJT44h4NLa6CzqDoded6ubFvgDArwfAxPxWAQWhK3d6gadpePW4GHtT3apzAndvs",
  "key21": "uTf9Pi1JQniutx2Rf6sv8CFoxERk2BumHsMKopZqKapj2LBzCwcvz3rRjFFCKpToRjE6263cdyiunSHSP6KwUzM",
  "key22": "5HxtGTEM5SHYvPV5DjkAtgPzH711JCG1bicBegYhpYWXit7CtdcRv28FjM4coaHhwVtomXDScrj76gSCZmgzSrdK",
  "key23": "h1YHipJKLuGujYutGDJqpVDTM67CCKdBVWv1hC4NMLsBzGVJST3iDXYqCqwJAUutXLBLxf33AR6JHkWUjDfeBcG",
  "key24": "3ckcK3gGdhCbT7iqvDty7bJmo1ED9X6DUaZiL8wzwpH7E9XQWgBDokv7dA5mSefHgGtMKBSN1bXZegxjhfe6iTcU",
  "key25": "2TUXBnoVaStLajP243KEYsAjfYvjmSgmcGhvaAZiUWjANKKBTFsjNoy4s4tUpqQ5nnTdtuuJKNnZKx4JFzjbFrYP",
  "key26": "3nppeDmhjkeXvo1AKMMMP4EmPkjBDuX4yshVrZqkgWJnwckkv3E6cif3qphXFRjEq7MftwrNr3UP8JcczPRpNNYW",
  "key27": "2DjjCKwEz58hPRPAvoJDVWznp6C29vhe7dMRTgTe7TwVhwnmS39ZujiAuoqZKCmwx8Gs4soHHx332bccoQvNhPhd",
  "key28": "4DbyLaKVZpx8Ys9QDHfFpNpKKd4V1dEnVNQAhftdEuzFcETazLtAMozLsq51vdtuX1Kgb9vTDNgq66L2Kf7es7MH",
  "key29": "3n9YNRgEGYyoYDr3RzoAiXo6HzmHE9xSFnktZqyd4oHxtysQaZ2ZjdYMX2XD96zr78jUosvUDaL9evA45hY4J4Fd",
  "key30": "3dsgjFw8bv5JEaveCV19ccSyDwdRapNiEPahznxyyy8FuXiR3SVke4DFPzL6zfcGrFVLmxwssaVZ4Bd6MACsLvdp",
  "key31": "jxssg4J9MxWEvfDGgAv7n3UXBHbiAuMVoQkoZbPSyMDqfGRXNLptjELnP3477mmp8WMRSxftCeUAnqZLmLUxtZp",
  "key32": "5zEUZSUS1Yxkw9v1qhx3yUrZJMXUwt6Mwx5gb3GRWoXCvVL3KEwdZtTCxMhKZmFiU8JDarLsuMBaKgruXGhVkg35",
  "key33": "4vvjUKUMQ5zGEevUE2XgGq63cXVKYz9xSfERQeh4Dadx7YDcvXfSaFwk9TSWK8qU4HMghX8cXf4v5kT2vFcTJToc",
  "key34": "hkYsWrwfNLsufFQTuYWqVV95vBELVsyhJYt1E2rbcq8YGAEu7L7eCH6FfBsUFJqt2n7TE7m8hfVnFz4LBrZiq7Y",
  "key35": "2sCiUh3rAKieBnXvbggZXjJReXr9aZNEQ6gPULoEgefyjvFPD6YPzibn6Ax1gejQyC2EHQufWSDWedBfhrjZcVam",
  "key36": "3Zj1PF2LA3eUXEJBfsAHMRNnaRk68yxkZDKUjtExunW7xMw2UVXdjUenWfsSU8JUYFvKWZ5XZbn1yc5HM6QzapVC",
  "key37": "3LA3B9FQPCLkMASeoVVf3Dq8DC4mNB8VD7bU1d7Ujid8CQmK2h1VSke6vrm9TdPFWRFxSmT82dLJkoC1piNwfABw",
  "key38": "5bkg8pYz6vC3FAnEcgHgP8YfcnvRYgFZsxZJh18Hhng67xpM5NQrEfeuQGhT5mEH3mEDKEcsag6NHRvVy7SJ2GcM",
  "key39": "5jTJ357hiQsSEfgBrNNMPEro4gkaiHPZ4LNdWpXWvAJWFWfzkamdxqXbSSFHVLbaPDy2jhkbJ9xv9ytbDYMqKLzW",
  "key40": "wDMxmCRFGqhMkTvCWmDzg3dJPiyQj21CqB9QLiRtGarfVLRySAWvoAcbPEWQjYEQXa4wxGdFsXMSfGTv5T5bRFT",
  "key41": "4PLJzAuFCsqQqWq8oBRDp6ErWpPVhiQp1ELooZb1KtNnD4U2S6XEhZSFw9hwmRhNQcjAhTs6QMzWAcEcx4PB5BB8",
  "key42": "5EU39BZJ5SZuGXDKBNa3vfsHYmza5JQTLyUeb6wbGRVDfyGu2ruyuLV2aT7oKEnPYy5oE6gJnbzRf2ETfxdr492x",
  "key43": "3zaebrHxu13jSLmtSUWunG3Qc2jBtn27VZ8whwvmCSFv4MD3AQhGmNutQWepGGvP9rxwVoUDCPdkS8PG7vktARXu",
  "key44": "4B3EfSLdxKvv4ZaEPhbJDHaZDdEUgWJmqdVGeoFpZ1fiXEVXHPYGE7rvrQiPQRM3vX9Zf1TerdBbcDU4yTrmzibi",
  "key45": "2Mye35Lk5z161UMuSkc91TjYueuirRrqTqbYxbcAv2ieprMGJLhkHkLLpfH6pFPrA4hLU5GpCAGPfVpKT6FnZG5J"
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
