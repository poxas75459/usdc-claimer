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
    "5wArni4dMCjFNDA4LpcdbKFYwe3daCLhxXhwaVAdY2jKn8faWCRJvDk1T7ZUYnYxFtyHW2ptKVLvvFzt4xYfVp8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmE48TzYE8DkCA8io2BkmCycucAdAJ6nRsHWFpbjEoAMuXPjHH3H9as76u9XAaoY65rZs2cQmS49PgeU4f2U6Rq",
  "key1": "35ojQD621XpPbgKqodmF5LQC7jt1bAmx12nczcTU5b5PE8rQt5rHY5yq8gH5M7KjmyP1iYKwRk96Hr7pGTnKtUg9",
  "key2": "3y1ueVuXqDE9GjWPidVmYMeNHzdrWqaNNDyLjGgNjmzNp9pSX1aRqZ3zKxDuDUjeUUYu1fTfkiNMUztLx4UkWMLv",
  "key3": "2oavUXNNAyNFtvtAdDgWCUCCzNAWDCwhokw9RUdWSAn9RMyACCjjm4k8dmjS7Z2EGG439SeUgcrYBqg74SKgTpra",
  "key4": "3zPyA1tRgDM2KJuq8pD71CaSCxWDTA2brv2wSSjyLaSrFYUxSHw63BTSCYxaaFEY3EsSADGRPKBtP9mjvGyyJwsT",
  "key5": "hnHN7xiqexHKohWsCTqfea69v5Gd7nBevRyvEFyg2veoXCBj5BWDpXPR6gkBnVJJ7zafDh3JZFMWpP5z7ynJBsV",
  "key6": "5jzX8NkqJgipRtoPpYwEauqHdW8S2FsQwSFC8MnkyrQHHLnvJo3QbLFBGDTTp5PaMGYo2aXpbQurLybQh8CYDn7o",
  "key7": "4LoVGoUGWDqqLTAhQKnoAw63AJXbUAp6FYJpwAedS68JY6xkY7DyvdEm6F22xXSGaZDSUaEQLExUqKwErWUttAqb",
  "key8": "2uLy3w7BxjiqxYEHF3SXR3ZcSHiv1D9e1EZw7KHkDC983Re6XpdLTW5gokxE8vpyMct4V9XnWZ8emCr7goVoM5yU",
  "key9": "44cyxHgw1UKffjLFEtLwy3oVj1eTc82UxrfcHxPzB1mK6xHuZW7MZX4kEUqcaZTCgya2r63k1mSwk4pFmQXUarnM",
  "key10": "5e4i3GLTLnoJy1Krq7YekqDnZ6tfviE4kkoKM31XXJt9KuGfzs8bTj6RzaMG4qxfg3TCJVL7GPWSSdYBQDgMneCK",
  "key11": "5wWiye6vVjDtFZe84DEGkH1LJZLyVmNtQQeUtF5b2Caaw6XDdnzfhLuB9uPkRyzzTJ6cwdcBfrsz4SPJZKYSDxVK",
  "key12": "5ho4eHS1nM6abSsGZsgpZ4LDywVWcqiXKMJGnCtJuqnf6GxTfBj4h67UmJZbzqDMiz5vfZChVNm4t266d5eFcrju",
  "key13": "3uEs9ztng93zV992rzT9bQ7MREGZyuvSSFnvTb8ieNi85EsyHwRJifEFfBdQkaJZvU3jUJ2wEfjVvUiL4xYz3968",
  "key14": "3hp3oz8nTvyPn8nMzrv2MK3j4FTeQry7Zv3shhn9XU1Wvi5j13AbaqVf8iQoAmd2baaDoMGHRPWCdcePBvJdF4du",
  "key15": "2jsCisJCExo5HBm2ASFHf7WwnLNwbQNY6WpjR5jHvXtJXhqtMumwGMRrnJiFxSFCpsJUGPVVA36xNcd4qBrZFnoK",
  "key16": "CjddBQ3x4H2uVvRd4KZ2LuTZ9L3RDpc7u577KHh8Ru1maiy7qAMVbRaA6Fef54d3CJ92fiAVU6RV4YZaWTzbtno",
  "key17": "5HuCZJ7ND2EsmsTEX1e6SPAByAAiErHTupbSZ6jcmZqjAEAENhXcDtDcQwzdBJtxXHzUrkRtoW6Q5VcHDsDuiGVx",
  "key18": "F1ovLBekj5qSfnRm6WTrEyZjtVkeVeggcVTaqm4AuGY6Fqgcc4xPMAgnUu27NksSV1tWuydwxGfPP4NAWTB2XXw",
  "key19": "2D6i3GkC5kXoFzh2uWmuRFESusipYUtvJqAvtYqsEyLmKMy9beRE21ERTSNxvr1GvVeEqj2MGNZ38xyNQG9Rj5C",
  "key20": "44Cic4LZUJoCZA5aeW6Q6Ti6uXhwsfMLchpiTyDQcMJosD9YuiH5rufAGcy958ySxuEYbAM1n8N9BsU9SaxmmxpP",
  "key21": "4NxxaomB6VHmRZuuHb6dMZuKhkbxPKyzTb8hDQ5YGtP1QQJMnnnNhNEfsBKyn93bSkZTj6R7fNrvrE9j9r9AcRPR",
  "key22": "2HFiBGftqSgag6WapTx88qAkiw9XmyAxkFWvW62RfxRJKgtxwyz76Q79m3ypFq6GBSFLY1H9PwWixMpbiEu3ekMN",
  "key23": "5maWHRM4iTb8Suj6RXx8Xo4QiWRHyZnXYNZKKRGUyo6y4hg9WwTi5jdQuSUpqPGs44UzcndMYc9XzMUokzA9Puga",
  "key24": "7R2HzHxutUC7paouk64MVEnLuKyQiMzW5FiqnDRft95x8HNgJx8idCLaVpKHyFW3sv3hAwkRfh7qkpKiHxZCmGn",
  "key25": "3VpjjcNnTMT6g9CSevXqHDDBsqw1taVeB4yWgVtQ957Cffh5wTqe4wP57Uyf8TP85hPA3991FURv4x2zA1iGnuRc",
  "key26": "2YcLkQTxLSvy9LgEwo7UBULtFMgQjmemhncm1bm8NxFQoVLKoQx9w1tsf3L8H7JfTXMukA4urmgydyLi73Epw182",
  "key27": "5WfG1QukL3G8wZm8Wy3JsLD4QcJ7AhFb5j5gb2j4TLb7zGt1rbAifj3noLTErM16AYaVREhL8L7VS88ZKZK3puBA",
  "key28": "kAZRaZszaKha3F6QTCoh7nV5k7gKPciddZacikr8BJTZ6At8eaxoFWT5rL8fWYvwKr68ReV6dcdNoiXsi49Hqoe",
  "key29": "5kg8CrbByyNCfF33y4UhLTc5Zon1XYfsusTcGcgEfMp5xAW77BUSub8KprZxpyKTpwmUc2Szq4yhUkCPPjPrm9i7",
  "key30": "RLrMo7hpu2bNinz52uryXX5HcgvkinwDsSRVqrJAnz6oupS8ip7D7EEguWuJroR9xxmuHCG9h3zS66GGP7469nb",
  "key31": "66MzH6EzUzbEZwEm6SbRj5XRUzERZ2k51Tk9ucVDZUVS9U2UUhe6JX1pps9za3WFQY7aNuF1A6kBttU9BbvW8HWP",
  "key32": "wWLmewkTkbe6MXskiFxb7XqrkDgdugjdr1StAR6MyM4CNkxoaveX742baq9yca7Sft9gWhhJwrRucKMXoXSRaZn",
  "key33": "2Psa3Tf26FCcjmFGKivMvBmbUikCZaoJcdXBDTd5YW5WS6jpqH3vx5mthCRw2LZQnhaF2R4sj7AxSFm88Qv71oVC",
  "key34": "5x9aEDiJqRiKWvM3hbAWqWePqhRyhAMFpMxShGqspD2Pf7oD1WN9phRCsTkZvZk1hscJfu3mrnd5iLceV9iaB9AY",
  "key35": "4nFW68i4wt3hVqvmrVGZJZJSqYrXRb7g8SSiLxfqY3aVaZWXo6GWPsv2gmbqNwoGeqzUBoxs2aHKX2qqqhm4bUtM",
  "key36": "3CH2XHRWAXTU2nXm1ChjxsErDzSxqHRJJUqcF7LCDLQi2yUEz4zt2iMQPvEBor3MzdJVgLhYcy8XBDs9QRafREYH",
  "key37": "5uQxhyTov5pK8q2iFF3fUMuoPeFSF899hSVBCtvbmH2ehzkRsJ9cHCfUDtpxvALYos2NPJEYFdgS8woVoUHU56Ng",
  "key38": "4P1V11HXcebfEPBenMT459TDCFjLvsYmx1UkTNJNcYhbTJpf11pkBXpCiBMGJVVfih2tujjjyuJjqrCvEaeWR9zV",
  "key39": "4GyCGLbtLP5BGf8ve1NxZcGdt7PoMUhzzkFbj3sRydU9Ercx1qdQHawh9SnNd6937y3aQhh3VepBJagQ4oXocx4r",
  "key40": "2Lddd427puFSV88L4xc1DNjV7dXSzzMYcjvD8kJ4rLs1HmiL4iEZKxSQnougVpds8j4igk2j6uPiqKip9hoWghZC",
  "key41": "2b9Ckowdgu6Sbysx1yoL3x9T3rSLoegLDqi3AER35H52jpBmiL6UAr9ZturjnuWytq38BswG4ALYq8Uw4JP7Nn5y",
  "key42": "5aK2T7Uj2fXERFF1rjiUS6XxRfoDhGQb5GdxuinMbUYDmQjr6wwWVoqQAqDkfRDuTcid7A3Jjv6MR94d668Kjo98",
  "key43": "58D9wHWtBSmorceSw9s844yYDsqKv3AaMDUzPMHgkVJuZuaFEKoHFhh3T9QSAJ6EGXxEk8X9YbvBx2rCy6Gxpcho",
  "key44": "2JGS8XeiDjtckgQLAmUHd6FJhhzxJw9ZWKjQL3He46axQarbUpoJf1LZJtAnfCa3eXnW8rMm86HJ8SC2BceQEBvk",
  "key45": "1HHqo1mfcqGaUcnbnULBThPQR3YGbJ2S71Ti1nxdCg3tMGsSZpcq69rBCp74eTyy23sm2hazFfbAkzBLckqJCJb",
  "key46": "5UrqEkTq4QCttsHcadeFXx96xGefbSsodq7TSyxkw1ggznVttVaCgPTk9hG22f8wJ2HL72JhRZpdh7jxBzwqY8bV",
  "key47": "Y8nwQhS3vzTKPLVMJ5SwoU33V4knPYwZHELfHSSmQLUogXjLi8viSEeiAcoiiJqWSH6LoGfuinUbyBxgEjrmGpz",
  "key48": "5URGN6E81fy3qgKTs5n5SRpptcHfz9mbLWbxrUHVmJF5ksvez5Pg28szqA2nxDHQ8ZnB1tYgJY5zQCRktiGL9KTP",
  "key49": "3MN3NXVvgu8U4rG9ztrsfKoEUMTTa1h8RQviYAVLLegEndmGmAH9mEqGAUUQNQ8Cv5bjYhg8kC5beiBUrH9STKvu"
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
