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
    "5RTLCuDZYAGx1uyVrd3Ux4wiU6qRKGyoFgnwDKxMXputdGeHuHwUtnqAPtaLr1A1HXSkooAarTsDpsUSwPvcFgcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDHNKjjvbtzGhcoxfViQM5yQxMbMbWiQcEyeWeGQKm4NYRxhXBxrUU1bbSRwV5bw75Wm5tWkoegZKyDDRgYSwXL",
  "key1": "2iHAqwVSjLrxuTAvHP6EB3CMxP3CWY6AzW2Fzzx3U3Fz5BQSNjhMUN3jwBqHQQ2887kXdZXRcnLVZJeyfiBJhizi",
  "key2": "3dNT7Rze9r2kbtDtEyxPV9MK3VAMRK3mQSQ4isW4qo1AdT9TgaUxqpeMc2D2oU1MaDPr5zdjAqNiJhRTDExxjW1B",
  "key3": "5WCL5uEMhCHsLhDmpi2aNbK2KvRGCALUy49ngzznKsHdoyknxrnd1XzC7xbEPu6UJnaBSUwWYuqMjDtj4EkyqnQK",
  "key4": "XDMUrvuhJ4Bbew4xQsrbV9LoEvhbkwDQ314vhKZ3s321nazB7Zkv7dp15Znvof9wxUzHgst1zugmJzXu61rkPRx",
  "key5": "SXi8TePgBv31LPdzVn6qGePVtbgPGGRDEYb8xQk4V4zGT8PZXyqCjCDRqGGXuvEHnYB7q2fgs8D1v923uoVHaox",
  "key6": "eLiqn9SB3Gfrv9eMZf6DF7AZ4BoTcuAPi7gbipHudKd94fk372njzJ8jDu1zzJevWNQHb8QbFxEc8KEJUXyL6ds",
  "key7": "3PQYTwJodVRbroEEf8uW8mvxs3wZdXMmkncQ2YovaGqUgP7xn9riZ6KHUtGgLWC5SZmFsNpuPAm9xXUL8TYpwafv",
  "key8": "3MBw6VquPrsPnh1JnpDV4rPeSoacm37riZypgJdszNx42AAFCqDPj65yH6Y8GXoeG7Yi3yvfN6PViwZ5JZuaV83m",
  "key9": "3eS2FbJo25Q3xVdzMyvDc1XsoYtcCfkVhaWcfmrwCq71JBsXyryVVpow6tFbg6uZy3tEya4xQkLMnhaPmk7wquur",
  "key10": "2CwhCtEqSBQ5dWJ7eqYy8MxMigVtjcNGKYD2mm2o57aExo7k5ra5xrVwjvA2SeFLnhf6m9MmZWPzZZ2SrQrbnTng",
  "key11": "pPQL2GJ9DCLqHmAG4yguGRzXuZr4c3a6eXYR2tcrSptuiMXdT9v1LFdW19qWoesscZFakiBPz3ygXuxQxyBeDM4",
  "key12": "533LWaKkWSPWAo9TMZVq1TsRE4yCgrLg2DyjfsgoaEV7XJXe9z39dZqpD2Fxhs9pbBLXXZ2U3pt22jtsakjMMqbc",
  "key13": "4gkL1vst73SM4LVUKfZQPRDmD7XQ7ea4wF2K5CSuBoTE213H7db3tpPU2QCyDiJ7SSRLNi1snnvcDq42gRKfQjRz",
  "key14": "3BdT4X86ZmACWzNXPb5YsuGmeXdnHUnogjddCYqQGRcyjUKCNmDkRP2zRo1cnrTHYcZU6uG8CQwgAYm52bRJWdSz",
  "key15": "5djLyLQKfBHzMt5DTK5VoHcAUqKTvDr5EHXLcJMthc4TeJniEh2GbLfF8cdUpxTp1B4PsEhGtJkatjaM1YLBwaJh",
  "key16": "2L8SrcsEk8n6Lg94bVYB5mNnEMbgKLFym2KzLC5enoPiTpMFkryzEyhFgtPVQdXBtf2oD762EbPjWHoANvEq13dM",
  "key17": "2ZSKQeSmBFCG6GzE8mC7acDLGCv3x6RnHp4fkET1P9fib3yimvFyYG67soZfX3hK1kBGjNPxTDuVqTJccX6FyDWH",
  "key18": "ntJWYUbdCH7vbQaYHMYn5JrQVoj8Mfw4Xr79jtjEzZuXAQNm6hJ5Na4xSyukAv5uQXDAQX8Hcs9htRbAbNbNpto",
  "key19": "24BgV5eNj8ZEBwsV9Qu8oExhCsyG5SERxpWFr5BNMdzRCfGWHtcHdhRbmczoUyYitP9h7Z9BcwNHq8wMYTx5NVRw",
  "key20": "4psL6F8BegHakiJodo7jWRCzXPffY8jVMxgLat2cJTfioqBeQRfJMHSmPQ1woBNDxFoJCntDoZaRJ3hV8avvLGeb",
  "key21": "4JSNS7wkgvBz88pqrYgr6K5Qc9J3And148gDr49D2nszjwspte1HxEiRAVvSAVq6JFr2L2tN9iZQJ4rR6oSMHRNq",
  "key22": "2QmepsnMLckYicZD86wrTfeETnr7x6s3hNSaLBjNpgpPUdaLUJf365sFhCM3eHzMW8ipdvy9iqw6KHrzcmJ6YqJU",
  "key23": "44NTdCnTzPvcTKup18asCtVGMEB6z2GqLBfNCJ8EvAFExj82DCmfY6CuyP8j52txQcr5DAepVaX3Eg92ZyfjWi1N",
  "key24": "5m4rA5kgXUBADjAXsxCC8yFp8RUsZ97mhW9gcBno4UaPdf8g2MbJQa8LhmA3w3nMAwqCARqiczPMpbKTRuB4eRvy",
  "key25": "zow2YgDPmsyuAB4cw5HySznQtBJSc6pTQMtv4hLwi45SNKJSR8bzocWJMK2y6yQcJbRi4JKoHysAHiaKEbnshKP",
  "key26": "3UnKhhqsQQcx8W1bCLVsuKMbixMdFFtXBkvcLUT6j8Kzwf7fBuqhuCcdwcoM3oZx5Wwf78bhvcKJ8ue3pzV96JgA",
  "key27": "4si2Y1rPZ3JiPf6bjZu6WdwPQbYejqSf12vx4jsjgQdw2bZmJq6KAFLiZYh9KdeE5ykzQDWRmmdkXtaW6KXGcZhs",
  "key28": "MFf98PPiApw7w6coc5pbyvKtU58BjocDUfMNJCHMgZoc6kvpQuwnyjQRxUnKDkiR1YoV3GUtbnL5rwZaZHdMXBf",
  "key29": "4HGyjuTrfRgStHBv5YNtytNTrhJgJrNH8ekXhw3wU4e1z2updM5TNmimKgniGiFmgnDp5csuVa6SEiqFoZ9u8C3Z",
  "key30": "4dbGpR3KvpdX2p7HA4dqhMuZaUM58XDuSTfcWrZ8AZ9C8643crxVuCx9cDieDomzc6Jbg2VEdXiH3Zg55Day9knR",
  "key31": "3Gk18Z5yrD5ynmSsgGyvkc5t2dNEJcsvebcQL8ksX9yFVdtDZrisiA6FyQeteLyeSF18fd4t3xFmjupJxDRGnPtA",
  "key32": "52gXjsvNMWVVPaEXWHVLDHtcQojuKNrbAjYt2ZzNoLd3nz3yHjcMfnQAfQvsxNTHttwX6hjZroGCAXknHQWxQ6yp",
  "key33": "xdKpNVvYokGhP8DerhVFnM7tpV2S7a1Px7QoSJj4choresX9eVjrFndB42wCsnPi4wyXyxuVZhTrUzFtzfjv1hE",
  "key34": "hqKYJJ5bVsYD1jK31BCUnqZkR6cdzBQGAmmnA94J6pvE4VSZjeqZfVZdUPwcfFbYYi8gtc9L1VZATNuFX4apEMe",
  "key35": "UTpzp6ymen19aKbMR9XEoacJunMUgQThVB179k5PFkqFKXYPMz2b6hWnpHJ34PbjGze9d1Vbukxzd4VRebYmXHd",
  "key36": "37C6jHdKKtJ5hxmzAQzcMo9SzjF5VexXFkSEAkzrqX6n6vCXAWLLrcHCFKWBmreerrSTe89EuUbhsdRE7XnXkea7",
  "key37": "2VqbZ4AFVR9K4wgFLA2HVsLj61xiYwPiuyg6XUu9AvMxMSB9BcsSQGhUX7bfRnEi6cNGt8uDnun4m69pCqzfKhMg",
  "key38": "3reBypYbz9UVLJrnafHGBkSWbGenaH6GfExVfGSaVHxYGkFjz2XToGgUdN2Rc2vEfHraaf3BEJsjLNpdQniyAyUJ",
  "key39": "5cgGAyEyz9Xehad1Y4QCQCsiNEs96PLhmPAEbzSXyCMDKojatE26G4bAn8JmdCcMHpVwmoHpfX1F1JSD1dmKBNnX",
  "key40": "57PR4iuwsg43Mcu26D56n2RetCafdH94md2dbqaesWNa2bKekBfSdkQvL6Aw4VoezhTb318WTuiPwF4TRnhsdKdi",
  "key41": "46sBqtCAkJe5zqWqPGLiYXUesfEfEb7tzUe57GtZzu2TGqeMzDZjJiWJ4YU3vHd5vn4cBDDfrfupDyk93cMpWZNL",
  "key42": "3MPskNS4uihdNJsDP3t3cf5q4LzEr2HGgN31qDW4B9jh2rjQnQubxCr7ZtTztvq5ZXiPTEsVXHrark9SAK7aSmU3",
  "key43": "5SqZKPRe3c6bwMggyYu4G9UKSW5KjPc9fB89a9gf1XMfYuyXSPDLCqKfC1cDfbg2bKqmKcKdiHze3GSN6CHEy6aB",
  "key44": "593zMN58hEMvz8r1g2Azprxg5pkzBcs9SyexWsB5TFpMKgmubwuhqeBBa7QCyV7f6pJm8zgNoLiNkQLiiNSdXhZB",
  "key45": "4d86KFeQL4ysfKgY3KLVn9MqELyFGaGbEYst98TKy6wQ1CSdEXXXEzP9kFXoiRfBQJdBsRUixyzLEgsD2wfbWvA5",
  "key46": "55zCkyWZWmnCEKpthoGVuDNfkaTopsWZETzoquCs7x4WHUxqy1AqWVP5AbMaN3CAYCvEg5ZgJCdVJkrmTCcKMtTG"
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
