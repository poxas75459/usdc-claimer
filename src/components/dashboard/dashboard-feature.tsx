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
    "3KxxCKsZRyyue5mEBbae6R3TwRUk2uyLeoL2EDQG1FzzN6kGhLcUhVFWjBkCRnyQWajGsrR6aK9iB68AX3UtTvPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5156T7HYD8agSQwWZNd3rvzHPWAxYpyCxF6TBGAWFdPJtggaXZkfaYw726rUS3mn4R5wpyDDC4Ea2w4qUVUsU4u4",
  "key1": "4RUKfZwQRoYDW1R24VQRj2WqpQaQ3Asc7CBmWE3DaixVs1Y2uq8YRcWNtgE1Ss1YUH6nYwHpAT5BxkRaadYi5i37",
  "key2": "3D43QS33L5b9aWQywekqNnArfA6amzKzHDhdUeAV7qkA5v4fdukXt1kWQqytMLdBhwDhYQzh1DroKwXhrNYu83DA",
  "key3": "29EyrLNuB5tNZvFwgpg8xVPFkSd3R8K77RsF7NMxG34Tpz6LSvtsZeapEa5tPEws4KgPiiWHrtepPbeQVSRhV4kc",
  "key4": "1CRu3ZyNfhDSFtoQ4yy8ym6ciEuBFTwaamJKcNzasqmgHepTSMbmw4jTunFhR4dezKr4PTYPmEfVu2wL3M9EGAn",
  "key5": "4hjQcTusZ5FhsrHFj3vqeGtXJcA1p4Bm2g3EAr1sp1A3iRjRCSujLagpCgJs1yusce1HLaDydfGDWVutUqWAmnkB",
  "key6": "2WWFZWuUic7gGtgiyHcwEv4noZWdAUWhAnzyrfo4d1zSoJraUpwPqTVjmDZFEQibLT9XxHyrfeApfTsLhhprfuyA",
  "key7": "2h5DbqbLDacPVio7aNaD3NzNZFcni75NyyB5GXp6EtJNFv5HbFp9KNyJgC4Bw2AQFqEH9nafipJk8Tr8F5vWAAuj",
  "key8": "4fA3JV5hV7MuBqvEnhxFkPsZNqxVQLnwpu77QYysawyK2CtKqFzn3Rku3kPMkFr9vN7pWLr9qbMVcexnDtmXuJQ3",
  "key9": "4zdNg19BoCuhXPk4idfhuBTjjbfUt6ydcCPE2fg29a9eWKSiTj47eYUyBB7UzfHhwJseFfbyKxpXhNbsqipJ6knj",
  "key10": "WaX3bJDyYABZqpM138HKq7biuZ9r3hEQuyuPFRr18qJbGAQ7z9aPcncghN9Wu2ZFU72JYWY2qTP4GZmU7N2VA2e",
  "key11": "52iiwpi1G4nUWd2D8HbLx7u6dqhti7NvwUnnfzDWaGoAkdcpTyXQRvHZvKqtpQeycVXS1k4DrmS1uzALqjoLoB7",
  "key12": "YP33ZBMEwRBEQY4u9UcSv233ip9tGPm4CKoaAtKkL5kqBUsyXyhGnKJb5vWEiuhAbdzBBy741uAUwe8geMCupK5",
  "key13": "5vQrcdPuguXPjhPpTQu6t1LPDWb2ctsjsePStWEAxzv8699MvH9W7QsFbAyaSP7VBQTnm8h3UVfeEEzJat9MBQ56",
  "key14": "2TWxgonydqghEgxt8nbD4hxF2iRsBnsZatzkbch19enFa6nyRyF5xb9HutjUTsy4SzezcVvKvzdqaY42JBQuuXAh",
  "key15": "578zRz8Wf8F6L1UzHZSF1X6dGBWwhiLbURSBs3MWTUkE7JE6oiSbTs75gD9Ae32VEJLRAEUMaWZ56ePioLJqH4uu",
  "key16": "bRN8YttasjjUte8CxoM2sS9Z7ENwxe7JPhwN46bFbo4DuLV8we23TZqp897EnMmGLMijW8qwXSgZhe4yGwwKZ4g",
  "key17": "5JQm3iXPVr2TJHn9z5vZa1HbGHzmhgEJghvXjM8tjdFM4GGmeNLyFmUqEr4EUwAWJwu6Ujxt3gjggHjXhA2N6Z9D",
  "key18": "2auyDbYd856Tysff8eUm6dHMChwH88B3tLXteV7aqJ34zdjm4Zj6uTJ42oEx7WN2py1cpvNxZdKXKB1RtwAnRsTQ",
  "key19": "5txzBYvrn5bunudhai9q1gHdanVFpdQWYipTuW5uVnk5d1WoWdTbCmttSFLNWqz9qnUZo7wEU4gtCaA51142DDG2",
  "key20": "9WgJrEwXvYyLEhyA5MZ6ak5BmMubhAV2CTXyFrmQidGuPdTQZACgcsi78PaYv2S4xeayANiKCHof7KXKCJ9wcWb",
  "key21": "exbTDAQGRPaYMytZYvDkvDb5APV1jy3fggSHRjK3pjbbqybshK37CVHQajCrNLqRZNJ2GKEmqSaFz1VZwDKLjuX",
  "key22": "4jpZW6L8o2VLnWxCy3yfrMKyWUj1MZbia7LNM7vrfKW1PBVWxTt7FfUJzbX1i8bJDt4cEQbkSw7jVhq2FvVqxey9",
  "key23": "463SYDg9iL2xy8et11NLH2atvhRMAiAznjeXGvTnh2H8KGmm4KzodahNjcpoVQQpuJ7kqc8YaREiGLGimuTmqLt8",
  "key24": "3iEfJStdz3KWX5yfPXKspkR22GwRKZodRs14fmxAQZk6AKjw9AwyZqRdiDPY1tznURc12MYTpE8rMUV35ddD3uyT",
  "key25": "5Xwe3g32YnxHz4tQmKnkKyZ9hcTqBr56Tt3Yed6BT5EUQTNRjCoHFD6cR5R1YL2Yjtn3Fxppa6t1qMUTPuRaksf6",
  "key26": "3a7NkSG2uoXTAZ5G5m2ZSNqL9nTvDLue6v6ZUV1zvKkjjYb1VFvhSSmGuzp3afBFsxRpwsihczVKZvZhUicsm2B5",
  "key27": "5grdZm7amK2MEoqqsnwq7V3ponsVA2pURVe9yhH7QQqwHbS1yXTJ1N8ApTpSMteEELMrnWNTMHFHDfYSERuWCYtr",
  "key28": "5XByyBG8gvxws8CQC5xWk54fQNyRutdEshA4DNqK6utnA4NMTnPDfpnJMuavgoifEuvU575tEAPY45xGBRYd5tUD",
  "key29": "rTDuoDA3h6XL6xiMHsUfvMAT16pqv4VTufNpG6FzXyCZuYdAaSroPf51Ca7zR2WdnYHgrwAuu7hPuuy3x1Z7n8D",
  "key30": "3GEUCK4NrsNKHcHSKQ4BCW76iJfvzLPVMuQ6NS9ZwodtbHDhUQdcugp2AgdbNyiKPCJE2w25MpPnbddmNvU1sZFe",
  "key31": "3AXtw4qpdXGvWknNB8NXz3DriNWLcRMM56yVNKNt6kUgbN8rtbcDRmAz53UH2NYGQxwp9UnYrpUZmXMB7XrbkwYh",
  "key32": "5s1rRcntTcFymeSN1NVuJ3vZQ2ajdaxj24EQRHjwKebb5iUhaLFuqnS5AUtaiKuwysD3wLTk9Sk8y5mAjVJcB2JA",
  "key33": "2DTkruWviH8swirpRNwRzseCcKEugL1JDVQhTFqB8BeegUjWz8gNYMU6fkSGBptMt8i8Pswv2zHcynSNezdcrsCu",
  "key34": "5LEwtfE9Go82rGZ2sUgjegdLs9Xe6LKjqxW4XBEc9RZ58MDr86rGobFK7wGesdyJHDvENmWsAFzeWDPc9wELNJ1",
  "key35": "5JGFwctabpek9qNs3WwfRyFZsr3sfidi9Not7uVfc2V9bYp2fET4xEx6CyV2ZFq6G1zz4WPWgPPp7jpeC6t3FLq3",
  "key36": "5iJ4PkVrP99jjJfiuqTU6frPEqknZskdm8SgTwBzY3PH5icdSqs9dLtJApiqvAoVj76K53WK3ftMYqMa2PWViWWT",
  "key37": "5tKxfKVtgKXA1mPkHjBJXBA6BGy5Uhm4M3bY5XUJ4nkJDkFRuxsLe5oeoBLaEDwZz3RTqeYuuMasH2jhvycTkDJf",
  "key38": "5MsgdPPZNG4XdwGoVqfMeKebEtkrUcZZ64Yh2vTrZZ32jMpHUZtH1zLGbXpm35BeypeA18gZXv4YbxKEExzHqQEJ",
  "key39": "5XutWigEr8yicJQgxZUhZ7VKfeoGRak3uWJpWmA6aMyCZq2K4pnPS6YXTYvuPx1gAS9LoYrwe4XebtBAjSD8p2BU",
  "key40": "5ad1rqtRrK3cTcWLQDZiinfsNBYYyroMLkup5yMod12bHgwBNEUq7rtPqWDMpZxt276kVqRUDpArM9HWJLEtfBFW",
  "key41": "tptxgczMUqVieyLS17XH3LiXZBR2wwzVjThZ2FWB66btA99o6XjtGfXTid9EqW2B3njDpzsQWP2TZuh93ct1aNV",
  "key42": "4hARmioFBQBcH4tQTdsQ1uG7x916KBpTYaaW45tdCBh7bpPUxvY1iN6QtykHHw3E7xE2kmiTgLrKsbCf7i3zDbxx",
  "key43": "BCbtQ4TECpRB38Lw7swzM3bXdm34ik8535m1rKWvEymzNv65AK3dTNVzzkrnaN8qyS4iRhNrU5fXQLieRZpBAfH",
  "key44": "4g7b7pvurDCwaUToPkayRDrVrdz9wEc8umPrFyb5Qkns8dKrPkwdCZvmnsxBpthjjW1CCHbKxe1393agoGmS7zFh",
  "key45": "4fzyADKqQh8haBCWt7FAF7CZ7W68X4KVR7UJV1Q5RhwZ3N5utF3Xxsa9HsTxPZpMM3AZvYm87RBKVAauVcb4QhW5"
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
