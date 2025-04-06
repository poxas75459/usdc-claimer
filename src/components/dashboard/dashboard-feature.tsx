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
    "4snStE5Rrdjs88Q16qxVDTs7HHrUmQdA7dtfmsQJD6yEvhqt92iwtofsLtJ3oJDSe1mGSbqSeZXTpRPepXgeVCbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JWwHV1vGyvmfGrVG5fxhmybznrcn4w3qNpJuYZSoCWrtPjz25jrbCQABAcR36H6vEd15369yCKcbVX1XyXtfDkz",
  "key1": "3YdoPpMwvGTwGDQSKwgbtfTe8fbktktdWxJjnknckV6421jBBURgAn9X1CcqYXWUr642BP8PFZw9ei8GB2NBAmqS",
  "key2": "4y2MPRP1Krviir6ySzBSLU7ZUh7HrEXUMKDoDTisdRN5J4HamytkN6a57J3xDa36XCBN6vE23GZbAVvDAnF6CNSr",
  "key3": "3BSQ66sxzkhrDLr4jUX1GcSbP4GP7qZyKYNVyhSSgePnFaKNXiE1TwNyT88H7jvqh1bPbCykeSGtNGx28PJX2HzR",
  "key4": "2t1CKVm5avZo97fWjWzcht7JHwcxtyQXoWNke5QaoDwK22iN6hYpR1DSd8NhdUU7uQnuvdw1RzimptEgHDqp48tc",
  "key5": "2iv5CsNMTonpytYQpMgvLqm3nTzJoEy3oZpRiDx4RJa3ukS3pNSUrKXsqM8538zgXZrpjw2TNPs9Rgz7aJRSa24y",
  "key6": "THnLDmGt5aqJD7Hhc65FZUjN91nxcZBbJ6es4GdfSBLdrKs868FW66i4AFgGJK5AQWeZvJFjF21LZHZ6UBPtY4E",
  "key7": "5ac6feVjctQbwi1boT91p6111og2hqNUMTku6zBdBZgsbTwYQDbag5oS3jmWopTxfPisBYyAt76iSUsSmXrkex4m",
  "key8": "5q5X9Ju3igkKVuGPZyhXZjtyHLnpe2872PpykfptBEEQFHZSaLpMv5qzBg7xFEuvdAsk6fahBi8p4Xbq94tH5Mvv",
  "key9": "LmFqZJMLNNqmh3aYmE5cRmXRsGsoy1m91JEBSW8TEMwWfMKLg3Y7PttBdqkxpujKVntzSrkKZDZtzYqbfS97Pni",
  "key10": "4PGAbjauo3CfeXZLHm7fTsM2fJMBXUhxh9LmBR4AjiD7bjUmYRG6x2JeJg4MvT2bmggqn9XzwtC972ArL7fJm98d",
  "key11": "5BmNpgdoDWzjM3Rgnxq2K9Vra13E8LnizsJjEyMzmR8fE9ZuL6sPr8LY1UHvP8XjMLVkGnsLT4PPGD8utLXQAMjh",
  "key12": "38RJZ1KGuyCC4HXqc9P9Lgx96Q63ZHCbP4W3DBqKFPhxHP6sbyNrNmiDm7kWLLLCAt1PHD5MMEUa1DtP1SmJAoTz",
  "key13": "2Quy1XpipLWiyb8yaUizKMYoLsFGd9dt4GJj9aqG7uFkhkPrP9F2YkJReH28XvU3fM1AdMZDzvr9FSXBBRQVdmSA",
  "key14": "2fvkf4oqgwqBZ3r78VNuv4pKJ52Y5Wo4mSameDmoVtvdScDQqeAi2vd2KmkjgFrXyehqkBanG3Zicks8p4SMPQpc",
  "key15": "2Z1c1aojfNdizVwciLYX9LYpn5ENabptc5p8tsRKXNHpZ3eUdYVEv58otpEzY6H5nbKQoj1SyjyLRWpzQwXKUkC5",
  "key16": "5Gstqgf9Tp2aYa9ni2LSY51ZQ6fbj41YnqfYMdjJPxnBNph7yfaFyd1jxUWvxj9aMJaL7q5rpmPXTn9gx4ypmJp4",
  "key17": "3HfAjEqP2p3MFZQzC8g7VTB511MAoosRuD9PNEmNdaMdwzMPuvTGeGeaDWvGnc7yX9pmfzEHgomzv1xS2A2HmjsK",
  "key18": "7bA6amHw4Ea3gTEamgiyJWpfVsVgqRuEXXGGmZjtnEnyjucqBfV1wnzDkGDdmq83Joi9wRxcqMTXe1c3rUd9ASs",
  "key19": "3id6qLhgKfo9gXRVUQ1mFJRyQ8FhcNZjTeUGGNVYfKiqmRmsgkyPfrfejeGuiCeLx6oEfi3TgWTmSCkqLMnYyhhh",
  "key20": "4va1JdhBW37BMMcBzG32zb6PDz8LWGFaabavM5GPvwKqKPhb7Q9hGoV3TVXTrWveLB965VRzFARgwji6zug99Tar",
  "key21": "3Bod5bVnjCbPj3NrKfchc37rHDVwFuu5H6ZKNB3QRPobGkPbZzdjCRRHehXau1gYayXSGvaZzb6g7RdD9UL5ovPZ",
  "key22": "5ApCx5miiHxqW9ZLUhUNkmretzef8TmjwDK8M9V2XXz4adTQjdo9Mfp1gib6GDtgkZSmtVHPmX97VPcHobtqe4fv",
  "key23": "2TSN1cy1nvqiVThhzHt65EJcSyh5ehF4uuDXBSKTWBWohhGT6TjshvdJGdWRejxEpnjLn3VL6M1ZrL9prLbgUutq",
  "key24": "37JxrHew9xXE3ze3u7wQ2EmkqFYZj2wgTuLV7gkvdycASH119Tm8MS3r1pCCsnE8h5RhfeGz4hAGPQh5GbMYq8PJ",
  "key25": "8Z71TEQMtKj5eYX9ZVZpyEZUZVbV9hueziu5t4x7h7JwTHR5vNfPV4gAkKPy2mshyV5BP5Zgwipo2LvbmF35bDz",
  "key26": "5LjpuGqA3U2KGnKYACFYPXdmAATqVJspZ73X9egYBZh39UKoFDGj8XL9BBro8EsPAyJA39BhKuzwxrR8Z7NhtJ26",
  "key27": "56AhupRpoP3yMnhJfEK7BgqQWcqnXKBKhZe5FeFa1FMYGcde5vUqRSAhbKY3HDWEyKTRL4ZNUFCMxutRA3khX1ZY",
  "key28": "5sPcUf5CFs1fLGbnF5tzehwHa7As8spTAUNjtbzSvTVhZDuRBir2MLUu5oCSW15VqPS9Sc2YJq9VvQQsYx3QiqhD",
  "key29": "26mdJ3R5wqBJzCAvQGqfdCQQfS9iXS4ZJPDb668JkPCARGQmy23cUjn24RpzuBpz2mgkkhG8QpUE9JfpYAsrn1C2",
  "key30": "4R1gNP64a3kiJ7MBJKM4ac8vwfvyRkZGriDyBin6esRHfQcLfDmpaHfRJWxXC4orqyZLANQxyRMk2FREEyCqd44E",
  "key31": "5mr6HGVzRRboa1s13QEiFph7roVAencfecFcFn62Q2S7T6ezqHK3noHhEskbZDdcw6ZAfQiN84Pjso9FY4BJ25mG",
  "key32": "25HwVaVM9XPxnLqCT5sanUmitrG5kmko7pCmQRBVLoM4onrnv4irZPxymU23caT9x45Jq9Vkypu7KydAjTtWFkgV",
  "key33": "ZgGkRquW4Hqkc4NpkWXTDu5azSSkZo5aEBs921H8QicbEs3rPdr7Wu6nRAmUtsQv8ki7TFfzi9g6RWPJsqRXrLx",
  "key34": "3GMPxEk286cArTd2wmPZz7UEwN54wcd1iEiN1mNnrcxRC7qKRZCxE2g1JUJUfvep8pXw5gCDRwecK5RajNm6QcmW",
  "key35": "4WSYsU3EqbeLYSKuaVeSEDM5Lycht1N5ZDj1KKx2fQBfxiQZ1U6pFoWzWniLMrJVM81D2vtnwdrtv1wF593o2tyW",
  "key36": "3hwmpzmTCzunNh59gWJikwZZgqGC6Xmqc7ziVd7nbxbxDJxThZtzAa2Z5Hx4weUMCDboWpdvAmkMh5ihNVgKoQLT",
  "key37": "5Ze3Nk2r5wrCzPFhSMQXPfuZb9deAme8n1tYBHidJsdczXi4TgcYAgi487JiHPcXYkLSgnoqzx6HVkscrCniXwzQ",
  "key38": "5XdoAM53eBGr2FZE6jAWNg4ACFKqG6U8owM1i7c2P4iisM6ZqkFkaorDB9mFa7BweqKXejbDQDwdeFW9eY3HJFNy",
  "key39": "4qsQ6oRUYwcU52SP8DfiTrGpEQoYKBc55UA7V1pcSHQgyTg9CDu6cD6bSySgCKwbbNGh2rC58959cJ4oF6cbGbNy",
  "key40": "kr6nm94fadYAWw27hhXK4oBLrRbmVCNXmSn9S67JmkqTNfHcU1qKcwwo9BoEmD7oVmpcDrva7vufZB5jUR8FTT4",
  "key41": "2i6FyGA1HM4rhRGurzTncyiFu8SSwmiRHvi3hjhsjc7YUyVXHKbrYzckVLV7aamDkdZoeTtoVEeeCFxVCUs3MuLt",
  "key42": "2UCUV42NLf8EfyLxfx65BCSrayiT4CePNgjCjyqMiNgrCQdv6wr35dizFUdhZ84yaFCfbQRBveggSbr4sRpKZtad",
  "key43": "4tqNG9Wec7Zv2szcQLxKv9aeewosXP1RFxkssPBQeD6ZrxLV95ZFEyiC6b5pxx2PFktZukRxnqVTRXkD9cyBFjJX",
  "key44": "5UA5Dvfmg12Aa1YFXvpeopHs6JHur6h7waUJVH24vpURpFCvFSjjqdNUC1dxnzujBUaadh99AcSv8cWC5SeHrYcw",
  "key45": "2UaNJ84HUnNNhzXcHuxvR1hdyfh1WopW7fUqgmn4g63Xbcm6v4E8f5v64D6Ccu17qkaxdhRxxH1caqBwj1ZxteNT",
  "key46": "jJhaKoCkTd3ZhXvK6JUTXxQLB6YbUZeenRakg6SUTCSB3U31cwpRTm6ymX49HnbZBXR41VRcXRzVYc55Znqepn2",
  "key47": "SU13WasE49vafjvHkfeomsKwEDunTKLvhRqkZ6BjZLiMAbCBkP1gmvU9G8BkhgUYaGDj3GJPTyEqjG8SyA5JpnB",
  "key48": "35mzNrXuVwJLLb9u3ydwVPCvnCgbhYatFqD6ZoZsSSxkoqgtyX9Mhgtv6s6ZNKwbUTS4L5r6hufyN8zouNg1GCfT"
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
