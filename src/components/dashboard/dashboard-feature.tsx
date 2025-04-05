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
    "2mA1PUrH6DPvJtGdZDXhPaKiSjBUiEX3GeLNH4xJ1RHzHZ9mmLsXVMegZ5ACT9fV4mAMP135nvM24MZXQEba5T8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BMYBfLPURe8vbXJZbjekBjoNMVDRbwCn4URKC8Dgq3RdBUTp1cg1aEMbvSEhzQhtk27ytjebW4akv5KAGGgnnw",
  "key1": "5aKpSLZv9rGNyiWoHageBJVyMKsD2AJkpx423nw7akqxyvLRGVP6GQUAQQPGeqPzZzHA37JnQWEHdZMxt27kUWBx",
  "key2": "5BC3ZVV3wepsyioKkiiMu8m7P2wM9hHeZ5jf85rcrRHtwRE4kXh66m2vVLtRCGe3MiUwYenfRax3oQrNT35PoDZP",
  "key3": "xazzgCYRJyrDfvzdGYR8xVXVDzP57nsjwnrkVehg5N6ZJBwVBwRj3cfwAhJMvT3q7TtqQhipUxa58gTFhf26xSW",
  "key4": "5e1zyD4NHYW3PqPgP12WEaVCbzJM6bEHjzbyxjVYANGNh9XxqoT75cqY7MWqJrdT2zL5X5JExFQUzao7xZ1UsVwG",
  "key5": "43aYKGA4DRJ348RkRna8xobitiieTPAo2KQuAZNgD5LmhM9P7ZnRi7eo5nFzRzq25zKoAzNfnfuRmK68k2VGCNCT",
  "key6": "4JBXoAYosHF7qXR4nxYK2kr6p6SrM1EjtKw7BQYJMaAo692SV2nSencfpfnukyenRpUWfyqbjbhcHzgDDivTw8qg",
  "key7": "2Y17UbYrM5Mz2dCQEPyP3EWXvSWKQKXPxGmKw4vcdx6cgWBjYpY792J8ubTd7focnvXLmw7LBfFipj5nBjPVYe8r",
  "key8": "TBWnWC6bf6cx1iP5XmmGAawFVj1ChBpmqsYSYH6wZRMH7C2rMY54SNgmiUGqapVsKv5WkHLSAnDSpsEbbthnAxf",
  "key9": "2Hyeg56hjacJrF2AtVPkd98J6bfs7HCSnJREjbGUBbayWgwk9BtMm254jY7VSouLSdKn2ePv6wKabUNCDAofi43a",
  "key10": "3zvoRvbRKeHutjzubAS7dDDtJQ8VtJKD9AtF71KhF7B3nkDsbc5pZfSNGKkkdPQsYHVbsGp4FKK8QhQz8v45uB61",
  "key11": "5fq7su2fAKQtf21yvELyH2pBNMxwTcQt8MfsuU5N4ZTDiimMn2Akm8p2ngubFfaeA9jpKdY3nsgPoyz3TLgdWT9z",
  "key12": "yjgCHbDXuGAiJkL4NzvY5tQ7MLqvBbzw9eXXpSPAm4CLaEnoGrfiA5Z8sJiGBXLzjF4vVpnhJ9FLqqudE7VsuJ3",
  "key13": "4raEcAGG4Ucteg4Q55QtyyaxKqjeawgqnWyhBmNN9JVWNy1H94tpgfqNTsuKJZmvZ3A9SE44upxAgCa5fUxpvw2P",
  "key14": "iujEt2ucdWeDqSA3Au8fSZTKMGCcAQ62mVpG8Bvq3xqUjySsRiU9A5njqP6ixq94Jg17dKbSeELQuuncBNDAka6",
  "key15": "5a9epzjykFyR2iXS23LBWdGvdoJhpkouScuNn6RAk6SDa3wbQdR7dERz4qbkaZzFTiPWEQghUZsqKpQZfRERtj4c",
  "key16": "4euJUu6xcfh6AHXPCY5sdiZrGKt1ec4PRHw2cVxrtNTRr71J5bhoBxhBQT5YzVFbVtr4qjuhse5eWokoibcVsaRM",
  "key17": "5qqA97fdFPhZmDHjaiAPXtyaLuiSGFcvCfJb2V1Mgwzd3tiA6ZJSHLsfMJDxCJzf72QarkCAMi7XpTcrcPoX1oFN",
  "key18": "4pqERNyYv6bvf9g796J2jtTGUxoeq5w7yCuw5psMEKxWVnwbqyGyY33hi8LnKU24TZhufsS1Z7RXdx9THA21yu3M",
  "key19": "2V3QygGMPpxP6ZzBr1cP47JCH4fz3MLAtvzzaTZMZpHtSSADQpyuMDt2TRhRDCj4x9u2DpaMr1WBT5HsW8Mb5CAw",
  "key20": "32oYetLmVQdyKir6G3ifZGbP9foHbhnfJKr5BioNGpjJMHmcaV4EKvPfpeJVJ6AgLpFY1y7sjAfYSah7f9Jyhftw",
  "key21": "4GdWgu52E3VPUWS7w7QfSp4tC1UYXSEWXgo5ZFj5pVeSemadr8hQMfZCsqiY7DJctGP2Q8ZxBVV6dKoxCXi7Sdxz",
  "key22": "4h9G7RX5bKBmexhTYiRnDTGAMyQ75pTzL3tjT43wN45ZT6DYDT1oaW8c3344k7oeQgDquFpKHar1iQw74aeSKFwj",
  "key23": "2vmwsi32gxSLV9J3bW6yj15Udxv8rRXdmsH1LuQmuvnBR4PX534yUgMXCTJdJN6K7bBWbKehPbbYoifyax5gaVs6",
  "key24": "FM83XahqHjq2zrvZNbZvnu5PsXdDT2tMNPS6u2cs99Yedfc7LfDqJy2vQnVoCkna6NWyC7ai2Mi4eZnwkvqptJW",
  "key25": "hictk8TQaF7fHiFoCVDRad3sbc7CzqJAMqVpNvUjsXVAWA3boLpwawtwm6LpVBEyJDYHrGuYP58JWSJo2V4AQxY",
  "key26": "3eEjxM8mHJCWxUvtrVtJJrt4KBGS3TXw2mNCBPrTeAdJ2vmcUFokEKnPh1sKDUQeNuT3i7vMTprfpCJPnPAQ2GKS",
  "key27": "2ee78g6wntHy2PWr7dZ7VguJ2vEWGijZzKMxrX6VyRMuzBKcg4NEh8QiLsyypJZihYcBqmczeVZBsT3pocr7ABPk",
  "key28": "29hdZw4iYSApiK9KC6r7V6whDLuhy45FTRkERQaXNXab2xNoshh2WkqD5KJXbFWqoTvNGfz3aWct6r8G8MKKCN9y",
  "key29": "3wLWc2M8QGzRWkvPTtEsuqYwKnGf4JMvKNZhJrn89Z4wDwSfWMPYrDPMDTKbp8QhFLAcZFifAQ3J923VuWwyTm9Q",
  "key30": "6p5itSfW4FUfjmkzQAVAb2366q95qZR5sJ6SNDL61Lo7fPdAZAvfw73UWMhK2tvThaZWzxceyDj7f7A85EmXF6T",
  "key31": "2N4kbFPAr7yu61vhKWWK42CsqC7MmHupYozANHTMQ2StMRLvHhpHSDTGQqxSBPTZdVoYkoSHfXw3dpqwETSgqV5E",
  "key32": "4xQQ2Hqx5FtiA243V4khwCT5rceueqYjU9vvDMt8idjGzojRN9f1qdcFjHREtiaQ9vCaDUkVxnXPUHrVfmdcmJri",
  "key33": "2hEKxmJX1Wzi4FRQ8gNhaoWNZuPMpAqGMA8PyU5E5UJsfMyY7uNMssK8VAunEJ5koBFz2JYisvvVLvZzbUYynomw",
  "key34": "K7q4QaXPDgVkc37rSddZcwKmaXKyF4hFK2SbbGtDpK44upps5CZGEP2E6CDoBE7CzF8Z4Ds8yvAzHv26Tik9Scm",
  "key35": "5L4sje66M1KqttE2StXmAA4YdBQtyGhH4H6BA5uSEtcJuDuhHCMksyWcAwzBrPs4N76Nt2TW8QKSpfTkiY1w9PaQ",
  "key36": "3zTcfPyMHcriNf7BSXKumyn1bkSn9VN88267ovubh3wAHCtffZj6dB9CHR6bx4PT2nzdyMSEiTJTE9ai6kTtLAAk",
  "key37": "5ZZLEk7yKCp7LfHXAx1kjtQVJFpbtHMwhbAKcQPmVeuyLy5yfRUski9JpD5PLLC4Sv4nD8RyrC7ZcEvYVLXvNSLJ",
  "key38": "62AQYYXhtTgVLyJ9sEBGjuf5BXg2NS61Lxf3ja2dnE5HvJ7RxPrtUAjG74GLMjUuEEs6iJTJUEtLTT7ZDsBDd99i",
  "key39": "3sJU2YTFrvGgfbvn8k2YS3P4s6VabH3Ek2u2qb4sDA7ggH3UptxprmsfEENX4wZ6Z8UU7gmREdpsG5EjK8a8vXfd",
  "key40": "AS5yW8VAA3LVZ3yyjoVLG22c2FvPGuSkupbCPgpCZMYT8MV4uLXiw6krpjxNQJfuumMpUyLaboGPpiKf3Zhbmaq",
  "key41": "63HErKAtq9KxqaZYedJdyPw8g59pYRCnTrxkMQsJYVzpLWYZiCXYovNYhGtnAt1Fom6CFbqeJPuRn6fm9qri4kLb",
  "key42": "3geuQAEMU5szv5qPWyEq4VqQBzewmTPD4h7tiU8xWv2bBjVDfotCJz3S4xnEo9Lev4hnA8pL7VqKke2GHeJmWjxH",
  "key43": "2Y1vhYpRAbQ1VNQSJDa1TGJfMx6SrZPG2vCohiUEH37Lj1yNmeLvuRBRHNr6F5o37i3hXHwDjitx7v6qrRypSnmo",
  "key44": "3cmGeSQ7wad2KdCDr2Lriu9Kow6qXnLvNonsDtb42pzRgSJHKmdD9mhKrwDjyzG6J6YWqLay3cki4MDsPGh5Lmdv"
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
