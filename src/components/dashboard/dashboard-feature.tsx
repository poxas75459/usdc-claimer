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
    "BwSstpuPWcRZ6Luoq2Wp7g7ThWuuc6fs7UC81sLHKZuS13y62r9CnKWdZqeyXENXTVf17Df6F2q5DXawmbgd4wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xpe4TrQj9bcMa3YC7St2ZSi2ByF1gERJ7v8tCzEmJiyWvZpTxRDaEB3NqZcjuCFokX1hBTbNqeKW35AgKJmjL5Q",
  "key1": "25TtKyGHZEs5rHRwwrsXL3xsxjT9R8QouezCPZbEMxuFh8jD2aRYyRrx2MwnipMU1DbNtfB7qLSjMuDgyVpPZzYW",
  "key2": "4fKWGWivftKwRrSwmc9TEc9BcZ5HicditPA82aeUheSD8qhKc8HqhpaCvtDBmNpoHQSRRcpygCrinBwdAEadi4dB",
  "key3": "rt5maZbeC5VqxDgkJFKJJTBAByGRgpJdm3SHnpgfZ77xEwe2TUh5YRhY3es2VvD7mnN1XddZnsZVdBsiVBq3GqG",
  "key4": "3gCm57cGnUYe2kKZcnr5q5GJDWQHu9EQV1DKaGggH98Csj7BbxZBLUPrbva3pngne7RujTX9WL8eFHf2xng9VdzP",
  "key5": "66vowvVYTnjiEi7nJb3Wyxh1tAmYAJdALLi8vonUFP4wYLHCup2Rd689RVLape3RnGgoYyp7phLfcQsUtqRrPvHP",
  "key6": "4U2VM9jjmgvUiDBBHd7r7E8AjnUJUCZhMqyAFFZgsmNbnpys19gF2RpWDQpmpq7tcPhfdhqv7nwZZFWWXJhpApDg",
  "key7": "6kXtUyLFQx2ZHdTDAsCetmJvgWRFgdEzVyzRbHziYW8T5QcjddsCdWYyXb2GoLewmiDdkBAKX64J1SkpRDMUT9d",
  "key8": "Lo9m22x7sc3ozWah818fdWiy83mo3RcD4Lxorkait3bqYN19CrK8tqSiKuCvwNR9ifVxmj6vkfGvmqSonF9Jyd5",
  "key9": "27v3ttxJh2bok7JSRobR3DiPrRjdPWEPebg21PgWshSswZzr8xMWYNQ6cBaCaCqhpqSvP39yaXrWg8bfbj6kpGh6",
  "key10": "29wdrdwmaSbVogmMQVb7ffytUK9JST5bSRfQTcH64jyexxZBguhGAp1sf5YTr7hppkv1xBz5fSv4me82L2FCUXcA",
  "key11": "pVoV9EU9Hair6cCJqpujVXjBkoeAnHQsD7pVbLpnyREHRxubLMuudPMDABfRLgUSo2aCDf1rtwqT9f5e8Gh2MX6",
  "key12": "3tHr4bifhhfHfTk2J1VfyqPx9Mp82iAtkEdhtECVFxrKfLRuHHcptY1U4K4cybdbe1oCqHKfssEA9kw3vzogdGr6",
  "key13": "2QMdPch2ucFK9Qwet2VQYe17eenCMkLBqVM64ddS4uXEK2WFHiQd29tAMp1RUYopbgLDdjr256ruj2FSkMRMGfFs",
  "key14": "2MnMYShXno3usTKer8grWXg9cSUKxyJfpqejwKFGfn4sXQrk7YYz2tmadK9dQVF3jStnfE4eu1FnQr1Ld3E9Ax3A",
  "key15": "2iisPuo2vG5W2TtTPmtRMHXcyLNZh3ektnUzPynVBTSVunGKGJpwq41ue1vRsKKBDB4ze2H76xrLcmAVYwaHRH9i",
  "key16": "AydR9s7G1XJ7MhG6VcY1piBTGwds3Zf3arM4R4vZY1SotEN3S6GWXjbXgRUv7M1fwpasNQbmQigPv63Bs2n9Z2H",
  "key17": "eoeHWwEmt4zuP6Au3ra53SY5dt2JpiG94d4uyiCyJNSFEPRDP8ZC1cwcsN4pSDbFJ7GvHHoJEN2GEn5QughnfTv",
  "key18": "5Ee5LkUwuxiSKXkwiT2yVWy2zQybkVWsJHHcPcraAAztZLpufYJgXKrJugF3WRhNWkxEtbgonKbYNM5JF9MqUx5J",
  "key19": "5ys6LoZ3CWkc2awG7fuyWaHACg6YwbTZVni2xNGTMZHsDAqKnPgKa41w3piBuATdc7diBRW9zP7KxqyH7aqY31Rm",
  "key20": "4RsVwMhZe7unx65wTNGawHEZZyFxid8iCmX6zCvBZXUnDkRhxDHPyLnF4gKWrS4jUVzoZf2zEXpvGCCatZhnJ5LX",
  "key21": "qay1bVRwKXstfGRXXpomctS9t9bvt34Us1679bakJHFy5VufKX3npxfUufcTc8se9txcp1Z9ojJDb3ojSdh6kcE",
  "key22": "5wA3EAFHYAEohMJcWBPC1WG5fFDrXTANQEC9oBkgpxoJG6Uyyfbq1W4CmfPysnCiCPP37YSoK3FxiFuM4DT3Y81n",
  "key23": "2RTYCmsjtvko7tLETunufwzRRpRgdz9fVi1QymLRuPMg86s7upAWVQDBsh8YWYa9EkgKSLVbf5yjwff3TH1vpsoL",
  "key24": "4tYtTaH6jADjEPsAPanYzyrAn5APNyvav8xTNQVCpUcnUskQzvZ7PpaFXnxjebuoX6QFN4nNEsMUijX52QTBAivy",
  "key25": "226SpZEz5Mke3gAnYNrxNGZyF58eAZeGHhE8njY1DWSQAd6jU9nLhmwqM85yDSFNBHnam9qdpRWdUNk87i4txZ4r",
  "key26": "5DeBCyTLWr4FTV2DdmUPMGuMzD466pAYR1Rv4UK2W5AuvZupPSWRT9EareadsogCprcxQCVZVZT2Zg1H7A4AyXuJ",
  "key27": "2HtSrJpvMZQ19jyptcuT2PdBNLweqddud1diZxjK89qGPK6nNVFCkjVWjNghZs6fFjMULy9ss46DTExQ79bRfJnP",
  "key28": "2j31Nj2Ky7fW5u6zxoEYaQZHD34mTJFGaUTjjTpUNFXcMtCweFPNLHiPxH8W5U2kTyy7AqdHvcst1pemkebxHJi6",
  "key29": "4t5ytSGNpuerJDh55yfzwyRxqGJdomMHcQyAgq3gF9dX362wPhESM75CKhB7qcjpiyxoTRVepJQZa8qPXbSKYpjm",
  "key30": "3mrrSUiQBW1eqwLAnatcaVLCc3bztywFktUMFNYYg6LAUSijFE4njTXY9g6J83TWmRzzYxMAqhGXgnQigxjo5WUQ",
  "key31": "4ySNJmCa18KWevDrVdEe6xWCcRU9qCz9MretjrjpLGaTTyGTpwupQNmHbZH3vogYchE2tPMUCZGttiYqNKMMrT1j",
  "key32": "28wn9P9gEYmNmXUW9R6eJ6grhbn5Y81CPvYNE3VqgYk157xqLcfVVFQc96T8joeDZQBrWC2oGbXoMWty9dX451CL",
  "key33": "3ixBPNCGcKWZn6CqA3zA4zrPUoYez1gpH5LiXKWZvnH5pvkkqTw7mSLbc5Skg9qVDyXbrsTWQP4mCvv8QBSJeNmY",
  "key34": "2VpgqAHD6m3jsq9NR7XR6VAVsvsJ7CTACzGbMydXNFQxncXyhntV4fq3vCaHbizrnThTd4Mu9AqzkLxbiguik6cv",
  "key35": "333yxgrRN6aDbK4m1ZokeVowkV5r54bvzZ2uowgUA41X7Va67E4vGomnJeu6BosUiwWP7z6wjrtDZsMKveKHu7Va",
  "key36": "5RczU6eY75n2j9DPUiozoc8C6MFow3XuqVNea4vCtawCbrockf4gs5Cwxfgoy4JnDWkVfXJMZebYZyGEo5sHa4NM",
  "key37": "4HaN2MQasdmiUSLJp9ugia7byoXoYYJU4S7DKaCFdXgYqwGKP3TS8gfVydacNXdwUVgaHute7EfwJZS6J8kB7JU2",
  "key38": "31gs4XCxdMErDjZJFtCAunfjm3qM8shvz25hfpFq3rBc8rNgAvEoZyZSyztHogJStpa54zP4Q7D9Gj38YqFNS32A",
  "key39": "5MvhCMgjJaEiA9FUwjiKNzS1pEy2J8kS5r4zBbX42UcYRJ4EVPTLN6VntKpLoux4c4omAjwtnDP4Z3kENFBd83Po",
  "key40": "2E57MGmuLm6g6NssubNeNCexWVH5RxeTANUSFo3aTbc9yKXigwCWSFRJrk9HerdG811UEcMdkNCHoukdbZue1Hi6",
  "key41": "4PcvoXgbCjQ2KaZA4KKatxRBB3PTLkcSEyqcGwb4ZJZCXrWUcZp7rTu8vAxnm6zfmrQFCMdVKiWHca6L5x8VydnG",
  "key42": "5Y8FQyW2WbVQ6Pg3AbmKCJCnkGMsh22ZUCgCZx8ix8zzk84UK7btL1ZpqzbzwMb8uKfYGMbqRSHdMUNSj6R3BiaA",
  "key43": "5ZEUNBjgx9JV7kKL7z6du3RddUEHkx3Uv5cd4g8ZLhVgJetPpHDuTSUEQqHftdmv2YyE9KpQdxSvTyG4hUjZ62iD"
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
