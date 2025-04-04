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
    "2eUBU7ufrb9AaVSNHAmSjMbKsUcvCmhA6nsBVpNrzvZvMibLAbTUvr1m1LikM2dub1VNQcmU8Yv1gPZ3keYqNUd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCx548MVej7w44BmGwcPwuNnGVAatph4jyA8V76gDYs9LfVc2CaGJ5vkhzdvjGFCdW2dC7FUZxzDqBendEh4P8k",
  "key1": "p6ahxbHV3PfioxLBX2v1eFEuDopV5FqMnBGN5eagDS7JfNzSiNgH5Mig3QQs9jSjVupSj2BG5G8dqx2rxmXTDHL",
  "key2": "2fS38bBnZDZ6vzpFFzqmRPqY59W8DrYz9egM61gyvzBdhA536HG487gsydqB28FiHUvhEXKuUnD1jZEUrSCcE6hQ",
  "key3": "vd3dAyykiXjv9HJyJ9qLtvHXEV2SUtWtt8yGzTpPYzgXKeWmPF8cVcC3BtTEemwPKRYFmjv9aBc3jJ9RBTxEvFX",
  "key4": "4mWE7xQUL5Xv91fBgwBMj4nrs8rJkLsBfkWaznkVJn1HL7B9UWBDjen7VSwX8bVfcUgLuJrLqLTU7v8VNST7ZXCq",
  "key5": "4bg6J2fPa55G8oMteKvk74eekxMSfBL7Nj82YbbfPE63HLiRL28yEnBPT5J8LNteUvmtGkTeopksy7Q77KrJjUay",
  "key6": "kNgKubeA3TkwWW9NkLwYcYWo98seHocK61agmzK7WsRGC2Upc5AaP2zynP546gi4LCvAgzGJKJq3PjCcGa53Hrp",
  "key7": "eQqHkiLTD9f6gj9ANhDepDNc9B1gRjgyZFnentf15WrajkQbnUQLpUTgzUiHSXfHa8VdEbYa6jasAgyZDWYWFws",
  "key8": "62PmbAFrbV8xUvZpiBAwD4FvGnsaThffdqbnryS7ivYVqLWxM5st9RaZ2xJ5vqgADCDUEuz78gTXnF3CcWm69FvZ",
  "key9": "HqXdmtYuhErzf2dbwqeVQq6QT4BnBTE9AuprDma8E4nzvcDDKsioQeCbjVARZTV5KgmY2998AA3fc6zTdRfjsv8",
  "key10": "ZmeFpKKuQjZtECvaXSSRdEGp5wCcAhGcXqkK5LfgrWz6wWecFxm6WEj9qpuBuXBJ55wRK67xfg8FXTpg9ojHZzH",
  "key11": "4cdPm4N8rU64NH7AsoKPAyjXnSGEKne8a7rWWJnUXSS2WK9VVqTBqcMhjPA3TKrb3sHVb4tY2ZqH4M6YSLVH3F9v",
  "key12": "5FYfdKPfD6UfboUj6Wuf6A8PG5MjcatzNbHZSs4PL3V1uDJXZmWc65MVsS4WdXQXuBDaQ1pZALs9Xzh5eGZmjQw3",
  "key13": "Y7cSadbJc8YqZqbkKQ52cvTxBodkrTFzvbGvSLccdSeyYzig92SAdtxZdRprxkyr7NevwizRNfxuG9PZr9LHj24",
  "key14": "5LCcPg9qMYPKBD5RsXvaANtxGsAfax1Rvq1kJ8QADiqxn2HWapXh39uvf1d4f2iL1bhk4yUH1kP5fUCLmbqXfHCP",
  "key15": "4GKNEhe3QFtd516hH1LoQCw5Wt1uMQU73tpmbj4wiFNgd8gVduF7tvxc32SHnrZiabtoTeUrxjQunBycrZZEAYin",
  "key16": "3BHvLbctqaaTdycNyE8aDrypXTk4rr4bQMoepuqASpLGB1w1EoLnUjAobvStQYnWYQ32WNUayuTF5sWA8CFDHoqN",
  "key17": "2wVkof6MGEnz2rYameSL1sadArNWYdtzckACjfB8ErfWVxknSdjUKyUYWzz8jKjjyNms3ZcrSMuqa7usTD2W9kKt",
  "key18": "2uJqTcKhMk2eEdGuSrDvmCvdLrTSaKHrTaPEtYMko7c4kJFqTkHdUEaEcUiKHTXSMkzzqYAbruqi8GjncAgZ4kg",
  "key19": "2v8P7Hky48mfXxfXBrnF16hQ72VwAewhoyYTaBxhpwZ9Sa98WHFkpyJQvDdURW1cArrSrAQEx2gAPXtuM59Qa3FA",
  "key20": "2SFwDnh4xPHxG3kNzqGBYx7vDLb8TQHQcKwskUf4xMjWt81sWBRh5BszKKdTGK24JN8KQHBYLcJ6cRD24M2oQDcc",
  "key21": "4dEN89cqYkyb6RitWXJQHYofKJD8AMhAXkjsGVLqew7e9edP2i9g7uw9taufTAPccacmN3dwzoNZUrAGRpD7Skaq",
  "key22": "SonyoJP3KLG4jDLHue6tXE5L8WQG8AG1nFsx285hKRzkmPsMDCs1cxQJF7LE8fYVviSb4eEmBikcaPjZGo1ZkoA",
  "key23": "5wdiSZcrsUdnGNvcK22mRJc1TJ9YjWYRsHqyeg822XyDCabJFKwVSm5msSca1P9YLQ972ish9t1kqahf3Z2wUrVz",
  "key24": "ee7vGh2TK7cyz1AGJCshiEuYbecUMbUu3vw3pMw25FmNXvaUtkSy2vXJzHQrrEiCHxFqoPNzf2Kv6gCGygkw2fN",
  "key25": "3CmLUqgYGQLSk1aK5enLJiKSUjTchVBBsPBDddZouJ5TB7Kg9icwjL1KtDMU76ETNMBRWHzdtNU1p1ZErXRYpHs6",
  "key26": "5S2dcJeGZ8FeKkboYw3jmDDCS79YQ2vF9JQzdPSvhmgbvRrTEL6kkwjre4uaUqdXDrrRLyRpHCRZZVySqDRU2qSq",
  "key27": "5MW2kXNNAJdYrmbhahFVMuTRABuvrVtPc26TTz6mW3poDf1mGv2TV8TQtRm1QfpUxt1WquF2rD7gMP4kd3wFNDa4",
  "key28": "31rftxNB3iTDBCSxjkkHymnoSRwXzAc7utk75WauzUW3fZ4WNqKzPAjPezcTyH3sCF8UEcnb9RZ6a5Je3Vg6EvPh",
  "key29": "A8GtwDN8RqgCoQgUPeJYPNVVXdBikWzS9zQwfe4eAiWxgpuznAGThZr3PK2U4Tw7FFDh4jxRCgenLzxCZSFqFrQ",
  "key30": "c6YK1ftGnDDCC3BLazRPviLvPGgzNZ6Us338HeX424YPnpatAoYCgTu2EcAjh5zn8o5LV3BwrarU1omwKR491uE",
  "key31": "2DLZfHCs7Toz1XyCsxu9aaTJ93HUVLYr4GvBiU3srus9PomqvG6moGv8S8qJ3SdHkHMpE92jPCfrrevDE2yRSpc5",
  "key32": "5ksNdjKV5NgQUXxfKDEaATXofNyofZ4KNM8R1ncNT3CV8LQSjaYjSVQkqic9GgXmeyqEkcnUV68RuRcy2Vsd4jS3",
  "key33": "31enHmJLf7ExGY21o3qKmKui3v7EBLxwBN3qT1oRnrYXNMtzAYkRQZJLzyiK38bXRQhQV1KAa9y1GJPZd4PZ1Mhi",
  "key34": "3xcT5EhuCtxW9MWG6MsmSiEF1C8bELSXSzD5LzYBUsRvySc7J3KEwBJfpH5NWey5omxwymy49D7ZyRCkKFZ33DYP",
  "key35": "2NdV9xGsUiKxe5qTme6McxF4RkQ9JFWT7dTPzs73cYv5CGUuhK3XAxBmQDcq2Ch9XPXDa4EbGMNb9jLrPCgH322p",
  "key36": "4A6meehTUBd7RpRBu2t3oLNCJLtuC3EwMCBXJfdPJxSGLtXJ6sLnzhRUiSGKTXwJCgu7tZ1E68HBZi4AcnZZBo3j",
  "key37": "4TwTjJ6qDaDw1DGgoN2tGYY48Krs7EakFJTjiTLNHvTuVhLZiWrkC2akb8tWx8j9dK5b6f8gEYWZPEMfsKhGq53C",
  "key38": "38QrkNcjFit5NYovq82o7yDVcvQCBy9WBU6CUY6UFwqB3LwxrEuWnG68cHn2ntKh7aB72g2k3TVioJTJu6Szadbi",
  "key39": "4zUG6PndCHqn2g1u9pSub76jGv5ij4jo2KqHysc6CttDVYz5383U2zM6pUPCVFZj8fxmS7WL2PCmbEyMSHg45Hrw",
  "key40": "64KrGCH2h8XULDJgC2qLwBH3R6U99bpF4DAr1UhdYymGiWYZ8KFbtYc1f7ua9vHk8xJcXKnjFP31m2sPRrKu5ysF",
  "key41": "49LEg9BWFEvBQxTMtEvRjgqu4z56kG2CmSPunn3SsDZoJ63m7ngJWLRGANTuAzwcf1GoUhhp1osDDisXEvi3KNs8",
  "key42": "2bPhzz7KVf28wy5NtuEYtqyVmRTi3SYzvNPKkCkxTEq7JzANKXuHynPwz3ELzPKbvgtqYGFYXVkukzJMkJvUnk2U",
  "key43": "54ZCSDihyj2ztxsumg36toZemYGL5yRzkqSLnWCvHg6qsuKs1Eusnn4m6Z5kXDXp5wg8rQi6vfZYVhFvoyQMQjag"
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
