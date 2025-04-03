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
    "5DZ8dBKmgqC7WQxMd5mUH1V7kMGkHcKvSQFNQmWPk3Ay6oi6RUuxSPhxgkhHscZrFa8roHygf2kWMmAhGehjC8bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "epXN5PPKMwhftdwiRcbSsqu3uixFF9duPo6k7TkhQVHJPFTTWC8YHuwTGJWsDjPhFtV7NhJpWmd5mj8PuXzVHLG",
  "key1": "MaF3jeQYGiKg915h3bEBcNSgtYu9KrsxZbT4daAV78JAPC6gDHi5DgtgnrytgVfWXCmgfkgeLto4RhC57Gkomcg",
  "key2": "4YzJrqfYKbRjgp4jsABJYZyyHQPXpp6oVa49dYTyhHDHDCtahFb6fbvsVy9eNd91NUKednotJsfsL6EXWkyg9kS7",
  "key3": "2cPjDNS6JSpyvSUtDxPcWEXDSrc1HQAEXgh4GEysKxTTXCiNv4RumNp3F8vtSG9j6KkzYsQTzsS8ZNWsNpzFQNJB",
  "key4": "511TGyC2YhTCsVN66efHpnYn94ii8yLEta9tYAKrHAf1o7ULmTVWDkHdq1WghvnMn6T41i89bqQBNsuimcMkkiD2",
  "key5": "3XWeEnRBAptqTKTAasYYVWPfR4HLEXXHhpybTjW8YmxYbZruAbN3o8LKoUF2GetDEHqUvHf4fYnZhXRURJMgJY4s",
  "key6": "61UaDY9LJBGJfqLdmyKRLgBxn1CQfPvrVYhATCKgusA9p3Woh8ZZ1cqt25u4E1ZamrBAFmdZNYCdjDUyF5GJN4xE",
  "key7": "4UTHGGAquqMtLFZxMDS12juVfqRuyWoDza38nHPiQgYHn7HWFcu3CcCSKEmdjQRDYE55FKpR9hX1UMu34u8HcjQ1",
  "key8": "3AwxbXH9WVCPFCWSWNP8Sydjpm4rwVUPMzcn16pHh4HrtX1xJZi3MNt7RjGDrdyEa8A27Q5ziXMxyGPVNNx1fbWt",
  "key9": "9b2n1e811x3cyMAu4xEreTqhpgJwcGvz5xjVKktRQwnJ5MXZbWXNbHbTX1Du5Kg9Tc1KJ16TJxbuYB7VuvjerZ7",
  "key10": "3avRrZ382BYk35im9ErQP9rVXmnBGirqk3DZhQx9kNg9yugVkia1bqypEohRwiD3s7dASeh1Ues3kMX4EAYvcSqY",
  "key11": "2N2kpv22TGa2uVYD7dMtQkpQq8fWMdAQUa5cJBPFBt8HsjxeG1epimh8B5BnEHtToATtFFASxC8bZtij6SFDoyXW",
  "key12": "5H1VWo9tv5TUbqKQiMQ77xZLPTh3MUgfTtrv3j7UD9banu2o8cjmv955KYhiaTGY3HP5SZCmDh8uffdqj8Z2cAZi",
  "key13": "ErmxhgADaPUonsL9n1x2Q9DJUCjndXwgJy7k4jRRYiULv7nevgPdUrLFahr6MhhZTWi4s2vPAsaEW946def8ioy",
  "key14": "5ayqWoaPPM74r5TzgLwE8WG1PWwo5nQd1WH8sXb8xE8kjfiRQjcfNJ5bsY3sk4Y3spkiW3SiJ7YzrNRDxjPB3N85",
  "key15": "4nGAs5bB5KQHAqkT4WCkM1FvqroVTHjzHSAokqbT3Z34edh97ksLGFsmbUnfRsmbYwsrhGqdoM9F1WLHQa8fxasV",
  "key16": "5oMi7tYeyFTvdZxBq6W3oJzLJARPijV1rYLirQfDw8ZaBjKr4aZ12pLbeVt3TEj3sW88GLtUQicyGJ7g99TuRqi7",
  "key17": "3grLtoxdgGVTX7Er1RCYBQHFn85QSbAzPATZToRitn4kD8fzRP5mDtCaBkr8vqoZhKj96NZDJnp2Z2Ne86tJnM55",
  "key18": "23vYbQH3XJWZKuLsm93SpbjFsD4h8cVgB6YsBMuw63UnWDSbF5xhrPUmbanHZmT6mgrWAK2azyz6MdkcYtgjvsUL",
  "key19": "3B1gU41e2mGeo3QWaWHHYbaLSLSeSN7gMDMXoPecE6vEGqNsGA28rpqXRV646WMjYv6iqH9AL7vJ4Lg92TDwpRdA",
  "key20": "4MapC2VWV54Gg4nAqiYWzDvcjsYAzH415kf637p42m7Li2qhsiMmXsHogJ5K3WDLpV2JAWdDJqzi9SCXW2bGusjk",
  "key21": "3FL7vMueP7JcLWCMWwRsnSVJLWcvh6FYjNWNb9eQJpQ262ikSg9w9haE6FuwNuUhzzKc34sVDtZQGZxgxb76Xi8X",
  "key22": "4cuJqS1NnvTTupQPfdp9nGd255ErNxix2gFZExNne84KXLAKz6769jWu7KAmsmpea83d4ABcs6AikWThRfig814q",
  "key23": "3524zUeuLUnGKhxGFNMg3TMikc8dXgQe4S8GX2iFPJiXL5xzoAoaFcf81CdJ3TsjK3qPnAZS4kkYWsubQyzoQBCJ",
  "key24": "2ZVyt1T99iwrUeZnFn5ZmsEPM2RUehnrxzWHjT3oRC1DPukmgz3EFc31asWru9zvGRtLuoARtCA2Naz9qAuz48Mf",
  "key25": "2kpM9kjqyhkMw7JSZh6aGVcna4mnnCFsBnFcw6cJM6H989Rwrm8HoBbnKBqntZam6ZbhdhunhYYpTXNWT5Mar3s5",
  "key26": "ELw6ga3hyTSt64rqYiVaE4Z3HjbMVvpFSe6bJM4q1Joy7Qx7HwP1UUcYV3DJh4hnpL6gAiNE3dMSuaog3EnGJu7",
  "key27": "3hAh6kpu3QRCRCt6JkGGrcZTUqv4FboNeU3SYS8Nvi3FQHD3fTr4UjxRhBZdYJSydozispfaCRmgjyux69mS1rFM",
  "key28": "2s6GhLvTcGaCT5kmwhJ9nsU3aUKBYUfr9SpSsQNiwCoeGQpmDYbCNDgxPCBwyD725MFgCpVeSWCQE6KnH18kkS8r",
  "key29": "35EHocy2ES87fvZhbXzcwhAWayCz4vVPmEcFEq34YTymySxFetvt7NbK8TRCwcjskgM5Gc7B1AYEkM8h7Jd8npRd",
  "key30": "316PKJf1RaiPrbEdQ4iKv9FDobXnSnTFwc3mteAX3Sv4W4d2s6JsLtimkmCQdkctazFeKt97LsaXSQyxBAynWemr",
  "key31": "K3N4iXQKo8Hmrt8U88qMGDNDvLerom6KAfD8m4cVHgoU9sJkDUrertFEkCmiwa55PANjXaRkHFcqfEu4JKby1zW",
  "key32": "4QFMEZCoHPKATAwkdP1hjELMvsD8ksdvCUjih8tMmD5ZLxPM81uR42WXpGPRK8hpAgMp2ArXiz8of83g32DyCZyr",
  "key33": "5jeVbjbHjTuc94NUHNqaT15e9nzTzqpQ2X6xKaXoSh1Sg5XJo6DaGoRKoP879GK8vgBkwTPantRHs5arPrAWFbY7",
  "key34": "4JjfYd5T4SrBdF3FWqBPcueU4f9LkWr4mYiKWvDcyTy5apQzroQxDL3n582t6dtrmowH4stVdHVn1QYjxsQHS626",
  "key35": "Gfpg2V8BX5v2qevhP39CBS48D8tKg9es17HcyXmMrsZMDeHfAtihyXGyxjGauVXbVmk11PYZRCzpfCU5iFokb7v",
  "key36": "3C6dqZeDDHsmcseeMVKfoipkzh291cfzUTuPGXJWqSej2HZxyc7zUSs1wftHmGDkbfEGxZB2ZCzZBC6J2j5UVsmH",
  "key37": "Zo7TWFyNZSjp36PH6CiiQP1cTpbj9tfxULT7JnqMi2cafzamecZ9c6EGuWAmk7S5fKasaXA3JBbboET3aLcsMYG",
  "key38": "2hfK6oA2hag3YgG64761sQXTxHCS8o6BqhypED4y5qCQ9Kim3FMBzGpgLXJMXJrts2jKWjndRvLTnNWtfyfkQeHW",
  "key39": "45YCvMixYSaF9LpbXqy8jeP3FEPtmdH2cWvZXGbNmwnucsjCHpgr2QD23ribKqFc2fmUgCSHF5jcZ2316ryRK2sP",
  "key40": "3bYbLHyP9HMP412De95hBQZG5MXrzcbXAMgEX5S8UZrvroxy6MnfndWVQAfyCPkeTHjbUQRwMQ8ckM4DKNKgF2zi",
  "key41": "cGKryTMA446sahZFmwf87BgLq78vizDM8PjuAGSwSCVRsaGBoFoV3t8mAjLv5kgdvWRmBSy1JeqnGLrcS7SwFTY",
  "key42": "4v3GPVrwQzibZ4GCf2KdPFX8FmXHcGvsXboK82FPqLki76wqhnd2JNsiPsBCrGaJr5fcPEYYS169ipGE6hESpSTN",
  "key43": "5uFm4cHjQecegdQjfNAuodComwhbQRx3Z77dSWPXiGFJM7hR61jB9NBRBxo4FEHwRqhqBAAMmUGd95C8wm3UfJFr",
  "key44": "2QxHMFauxPQT1GbqybjrffFBuuzheFsrADQvvWVibzXdyjjd8hxizNN7mBaM5zT3mYhfeTiaXoe3QrCCR5ZD53AJ",
  "key45": "4VjDJp7vEuUTkUH92X5RdSkQa8zRA2a9Epiw5L2jedZjuo6nbKWAw6yKo5SVS1xCC6KYAjMCaoBNh9Y9owymsW7q",
  "key46": "5jsoJZFC5TcebkAy9W8RUyNc8HoGi9Wzo9RTpB84AVaXS8dXiC6Xhg6JKyxoEdnp3dtVUbbJ737dhZsGS5AVra3V",
  "key47": "RMNefgW7WgDkT8P6pomZe9Y4r7kPthxLJWRR3jYFfXeCnpChgnXGzHg4QgTVyFP8m3nzdYXXN4N7KLw49Nd26Qw"
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
