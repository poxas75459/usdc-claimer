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
    "2ggQQQNaJ5bgbXhXmNWzcGAXf8qErYW3bPcLBWwJuyQBHQ3ptg3XAo82s73UEhuqLJJGQ4YHXB5cxm3Beb3tSt9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LVTyFpgEi36ANA6fZXUikrWUzooKAFcFkF9U1qTJNV85CE8NjzxHxcHuCFQibHi1ScyuDsJVQnEed11cSAaguM",
  "key1": "58HPELLpUEbji491AQjFN1gkJRjajmkHsgPHXuKgvupABA3o1T4CmyUUchBp2qroc5Vg61fd4WkmxaZHiBHUPfKZ",
  "key2": "2jgFeUpwPmybGgurfh52VoXLTmpCvvvw6EV863pa8rW13dK2J7WpD61PZ6KbTx3i1XXFFHQrPcasM1QvtodHrPWe",
  "key3": "vXpsE7hPGXpf7aSYrHooScSWaipJo3AQ4hE5JmzGVVqH7TNLcDDRSda16VG1h8ugE4yJ7HbJZTPR366B6PoQYoV",
  "key4": "4pa16BToVoJ11jAPxPQZXDeLAJ19mskz1QxFgSsmWdgJkwTEK6peib45y2nt1fiudTL6aVFUEWwQF3wtB7iC5YTS",
  "key5": "pYjcCvDTfaj8yENkcSnMLrJoGccVQ3SogHgSJKErdLMoy6zZpPTcu1WezTDwopjPXqwTkfUCoYaWu6zneVJTBvA",
  "key6": "Sx9tQZ6TtoGGU33Pgkghoj878m5Jqip9ZdN5N26ghGNEDf5nh9rXgutB3kEq1gfumr4VpgdjbWBmCe6TXjTFTJv",
  "key7": "2WsKrPcra2HQQpSUnKPFdgGiYv1Dph8ZRQWB46CQBsFBxpE4eapMQuBuNvne5HK44pq5D6kqZAchQcvf9qK7nfNV",
  "key8": "25NUmpQiDrL9wZfbqeq3b1hintQG1B2vuFkVHMuixJAxiP7K8KbMMbDUmNZBC4LiakoYLH6rjos3piwgajbcrZ49",
  "key9": "24AzUHNvLF29KEVfVEwLTJzVM2ja7JNZUqTJmK7639Mx51fLhsDW6TWZTgoTwK7PLwdD2o3BZ6K3siGJkkqecst2",
  "key10": "4Ae8QTp28LzSk66LrcSLpkzK2whyMvCAhFMnFxtHQv71pyHttXTEQVcYQJL4mpuBWMjdxkrNqHT4bjri94HuHF9M",
  "key11": "97RuaaHKnkLwUTZQ4qhwKMKerMQyJSberc6qRSY1bnM2CymZJqq5kAZoRUZXNUK8RVCc5zUB4SoCMfFgRiB8TJb",
  "key12": "fbxu9uqGPixJt2fxLZgcgdRkH2FyX8pRQ2ikpYETAQgmGXdzFNo1xZkSVM9KT5mg79JVQ3Mnvj6zBmuhUfxJ2A7",
  "key13": "y5PkktpbN6ceATWtgEd69d6RRUNrLymTkRE7Bu6d3ct2bLmbkBwTrnqbvKkbsdkEHB4HPvcXkrT3zT6gjZnQgrU",
  "key14": "63rDaHj9KwVfPqwfbjGyz2bTxn44GCJdYwES2DbCLHbmack3s73kyEpzPoE9oh1FRkgY3ifkcPLzsaBMLyEftf5p",
  "key15": "5ZopWnTrGfZzZEp6akXAogQBitvmc86xpsVj4pChCuwgoL3Do6Y4CHKM7DVDh9o2UJvSmW36H56w5jcKHFu8GueE",
  "key16": "4r7u5sVgmSCufEok2YJ2oPPuvfvtuojeu3AQEwYnprwE1MKP9jURQhqAz8FCcM1rvffcjJZ1zzFL4w2by75gUjpf",
  "key17": "k3YYjKKKC6qHLmVEXB9TjdQ496UgWny2ci94t8Pa1ac5LhDWBpALTYNYsJ1kH24eNQSBCJTo7nb5ycyQMfG7v9n",
  "key18": "3u1HATEAXjS3QfLVKuvepRTBz6qnTymTvMEvSZWgf1EhUoXuNiJEVu8LaykvSosD6vWR9XmsQHPV6HypLPDATdVw",
  "key19": "kahhFpcvCmV6ji1WGsFsQdfWTUZNymMfzgsuEwX8KLnhMYeHJgAKfR91egyNWCanLbydeuLWx5yRnb3LtbEmHev",
  "key20": "3uroxC84Z3o8faJd6VMmKnqeXonaZB8nF28LUJ2iXvqxvuaowmCDW8bnsjLsxoq3xE34PjNwAhgs2NbgqgXKFpdf",
  "key21": "274VHrKqW2k9CXZ922X7fJFe5mgLwaVRUPNw2VEmw9YYfhpGHpXSfeAd88mDoRbvDTSAxDg9Qz18mWCko5JJqweB",
  "key22": "2DbJ7NbaH7R6cU5JAutXeBZe7ZoNgQfKMT5rR341airmBXTyzGGK5JcPcVZKdAeUf9YCpyJt12VNnpvz9BGKfqhu",
  "key23": "S48y98aQ8QqzNkH3H9RajvN1BDdNPmBm8CoXSm5iWUx44suNAgoctz5gQLfwyH1rifuAWTSZSQgXq5WRNfYWUnp",
  "key24": "25e1yDWthBQ1AzmtpR7RcrpLwZ9bdaTvgS3bjHPeXguDx86u6dcWQmSzuFcfZobVPCxgYSCDTFiaxepmZ6ox1pkT",
  "key25": "281xHetSLj7zQCsZ7cGxsEnmZTaLShvNJwNY9PkCEmnVQU72bAf1bzzZM2qRkCqJbGbsC5t7DEgmT2kQ3c94caPy",
  "key26": "2TB8Y7Jj1bBbm2hj3NDGWWZuQbaWFwu14Bbi1XCKP3FZXVZYj5NYYnKjZ421EspWPYT7YdeSSffxNgFgZndrMgJ4",
  "key27": "5MRMpAujasdiGGTCe9qwBcEbBMvEos3bYwCxDzN3W65r4guBBSqrCqvL4U2ZvzpoTEDhDGAaQssPnGvV1vCiqoxm",
  "key28": "4onETrkxnCjnFHxvo31XBvGTjGtnM78RbpneHq1Lr3uF1w5xho6ynyVzXatrfLoJZHrbuNU4qJGwGYXy1tTaguyd",
  "key29": "y6UsSrsezG3eQa91ZgPLng3VM4AC6auPCHPbusk83LP6xqKFYAG3s1gCZh26fvJfNvJc4uuFC8y2Pt6qnPz9gRf",
  "key30": "2QaKLjzUZTZn3a8Zpv4JQt4nXTNmQhXE2YWvZ1eFv97DHRwQkeaey1N2SWTidLV4BGK5dHj9w7f51WUQ2UrMnxQ1",
  "key31": "5GRh7yL8Cfu9PimsJUKeZaeXy1m331qA3iaJagxsE2QkYLdv6geVS9PXgtS2vkFeWdiG5wbuxCmDXvpkkY6Ac7ny",
  "key32": "qyp6JA5h7erFcqrhCkymG69X1G1jwJXhM5ZgiCYhqrqrqQjjVbqwTnXkeQVx5vDiQ4vzj3gmFYavJFuHjhaWPaM",
  "key33": "5U5QoJGLHTJoxgzit9bHnNH6WUNHUVjJ3m75WJn7AxF866wEB7k4us6tDLtADBhdW4gWrueypxVnN5Ph8BgNFHPe",
  "key34": "49U7kr58Ykpfu1jbMvDMQjNdixKG74bC869VmMYh3YQQwEdnKbNf3xDsgpdGnr4nHzQrwLryM7uE1Z8FMx8ruc3W",
  "key35": "2BpweSbteLJG4tuWoDHo3rwjVx46Fte3ShL6EqT2eaiQnEzfLoZA79Ai64TYMnhBUsWf5GLjgT3BWGUvkmq9vGp5",
  "key36": "2j8gPde7soqh7BAgnG4NMb3RikKAQT7jMaWw3aLFp16VvaVhpzCVUW8EvCMyWEPC4C3fnxs5EEWtZwmitFKCYt28",
  "key37": "fxqWafpfxWK2TTiPjJMX7dXuZRGiQKosu5E5PfaD9Ykpn8h6cdghT8BKDxReSi3cwzDbHPqBWFPa21xu3vJiidH",
  "key38": "5D7FaNvZyPBo7Q31rzsVaMfb5gZiX6sNJSjNHQqBKDouRoYo8h1LufprBk5yFpH4KJNc8FhzHJmUHdJaJP2mihTF",
  "key39": "3snhAdW8mzAPoZq14KXeQ1JETH2japx7tB9cCMMyizfPA7H8mYrrrELGajoMjJcBXeX3Hej5ToRYM8kfX26pPmic",
  "key40": "2hQhBVwb3icEw2DxrtF7nZBjQNYtrBiei7gZKpQgdJPQCdoTeWK3nUecd4XvE9UwBg7WM5ZX69mdu2TzyhbbLiY",
  "key41": "S8MyFRV9FhRfRmVj15e9s6jXpTA3tndywnAzyjv8JTkJLwYTqBDcomB94NGfTcXDfiJ6HYTyuqs8ibL6rsJJLcZ",
  "key42": "61oxW3tnwXChHuQJPksHcWvL1qTSFhhz3EceMvPZibn2j6f3fgSBW24jHrzh2Ksw8sJWc1ydktbuo2NEk6GjgoMh"
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
