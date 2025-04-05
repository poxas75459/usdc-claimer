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
    "2vmyqNwNBfcguaG33eBTtK5uV5jrHhQvAj1YTEAkxWxsWrmj7JEo3sxBzF6CZJ4m78smZB9BTW4USVs4wbFkGRAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWeacFag21vY1xRcGzNKUfXqMsmeNR4ZCLp4deMavjhpWCMTAR59RGE7Disu5SnuB84KEirH5vT8UAzB5vh8QrZ",
  "key1": "jwvdGbr25zLgfoPEwaTGunGGDBvNvm9jM2Z54Ex2btaffM1ebseUvovC9v6ewgnZxAKZ7Bnm9Yh8uiJcgWPr1NN",
  "key2": "3wKcRfWTYKwqni2g2cEQMueVXyKcHc5iKXJ1yWuSkyXDpMQxW6BSm9vRqBsgk3eiMJv1u7qECbRAHZoQNffxhxkE",
  "key3": "5XUztrPhowRNiRYQhNbfkJgDTFSKPDRj1xJUSpye8PjqukC9sJupp9gtrQbR5HaC99Zo1UFEZrsSRNBPJa7oVAVq",
  "key4": "5MCePjRVTxbddNuon1iiwhrgPjPqhoBc6U4Eg7HCXgXY4VcowfqF6YjkJktqzE5MD18Koy9Eufd83ALQcQyNCmWV",
  "key5": "2AQGReCLpZQ6cTYd7oUhQaNpdLgwKAtycmis1hZtGqyrxUvaWcBYSGhK5cACEpZ3tdemvXP6me487jfwjeqHN9oU",
  "key6": "XSyehgA4eztgcL5yKuR45FLmXSfP2UzAcj2SYAML4Hq7iQbifvVu5Z6SZ6WmvPgNwPMuKPiB9cYS7J2aYDaEEh2",
  "key7": "5Frow1jzeMicU2hpos3BnjtgoAJSxjnaeeVF9t8tc1mhLQw6X6hthtw4uKkj9ok44uSBAaEXYuLjU1NzeU6ZpAXq",
  "key8": "3ZrBEbbNPmGbk9CXuXoudKsYgqMKLLdzY1DwCJWqVhSKguDnfnfDwJw3KbzRqQKVYXcsv2jgJvN1Cjy6YfjHXJDg",
  "key9": "4PtwMXnSm8ahnW9vBmJDEMGQTm4Uu6zmkSoai7P8ripQrCd5W6QykXSkZbk1k4QVjej3eRWfV7xpiiwyzNk3saa4",
  "key10": "3RRYvmPp81FXz4ivY5QAjuiRYkoPRhfyZWEh1JSaeBvpbWihtE3Gs9v5URit1CcpBeG1KUMQ1GFndbaqrmz66Msd",
  "key11": "4aJCKmwaWPc2HnvhvKtWBGMVDQF8YzwxDVYeT8wH4j6xt1aUEgc9mdFXujgjtg1RWyUii3xm939MVwJ6AD7yEz1W",
  "key12": "bjLA4rLjPGQdHhmeaYjHr5sxuUQuwWvh2Byn2ibhmoNRmD75Qw4FcJMRLSDQaRv7nUSyenjbQ2ZhovdB4d7QR94",
  "key13": "3FnmakJ13SVeWfdo2nvm7n8hqdxgC5FZBUXJB5KEKkako7w6AyQhSXiAVTNoehGpr1Ev5hLihGCbMzAmpvdYEd7q",
  "key14": "65kHhod4cDB6QBVS1WmAkcPk2uVAs2ZQrgSbMWQhCgTMfGEzFQ7UcWN9byWaCtmDfXc7fqxZmW21nmj9a3WAvYsq",
  "key15": "48Qe5bKLxQSeNvZAVrZcHhFc4vAJZfMcTfPW18rf8FQfFgbtg5DCGWeRCqoiAbPVfU7DLQ7ArQps6oqZYV4XvsVG",
  "key16": "2hNPA5UNFQb1Nkaqhat38iZLbyj63y8E95aGwa8PdeDwF37y7QaLSSHb7z4pBdrZvrtyYgAFnnaWLDjkBymmP7KQ",
  "key17": "hBAG2rXEN6MLosSmmzCwrEiVLqKs8wUcjnFCmdHuZEimpcFUyN6WqZfuEAJHiRWRQh66CcmttKUz7kkvPbM2sZt",
  "key18": "2r66nAMDYnd2bGdgnLGW9gBYcVeoUjtJeVnWB5foQGJ2hQvgnFZ188W4gniT2A32XH1nVQ3wC5cgc7Ywo8afmn1o",
  "key19": "3QdmMrBqtvkJ9TZYxJLG8pTrSy2tKYp7MZSnrqF8JmdoSZC5WizS8z669d3rLQpRJxsV1XqdLBvEMLUQ5TKf4ent",
  "key20": "3s79JRJx9GMbcKdqK38XXBqJwtpsZ5TicK8ChHS8sspRh4zvHsRncmSermUY1EkepDMWAADwR8Kfo9vMXsLvygwr",
  "key21": "8DqFDeUybw8PGzxYUk2czPMbp4KRirn3G7kR4AkKWdtqfew2RakuNeQSLNLJg7dwS4Lc3uhnSkfAMb8kHLuCKX3",
  "key22": "4gVWXHtNs3nvSVB2d6MCWMfmK7v4KBxxZdegPjG8YBcfzm84udHSVNnA5CDLo5igRmfUqqG1fkf6aCz8Wh1PQTVR",
  "key23": "kBvSiPCoeyWwoSg1oZgiftHokLhR7eQydkTZ1x9kKZ5dWnhXfkxMmchj5eiJ4pxDJGGCw97XVJhGZBrjj8Heutz",
  "key24": "SHSjhWzbB6bk68EGK86CyWgKX7ZYatPaQWY8zzSPmJLmLU5B4ww2fKWwf6cFEL83e89tsxva6kJe6Udkf6LNq1J",
  "key25": "eakmrUx3eTBJa1wY2VphxactQr1gyhdMckLiSiJb7BSLX9cuKJzTje74MZ9n5qRkYPqALQPrTpYVefMqBbREffj",
  "key26": "3dXJFPyFtA3SFAhG8YhdK2my7qZxUqLZ65NneFJAAUE5Sx6Nqz6Th21iNpZPqZutz8hFT8zuw9Snu9ka5q6YCMfq",
  "key27": "WkScbPttRaRJcjrGmwydLWfMLyKWX9EQz8UY24T7k7pwFJsGQB6cu9nDATnMRMiQukihY2b3im5YyMqRzUjxaka",
  "key28": "C8tDrDEPHDEbsM9MBwCXZa1Yqo8czHxcAqTPadZ3VuuHwvSmUzGQcKSdDb9XumLTmRABovcNn93vWquJnvnq84e",
  "key29": "4JU5VRPBGFjcVkLHCGuHGSbdSWcgeLUkaWEYWxoNGNhMTdfyATZg4iF22yYmJQahPVA7ngUvThMmoM9vKpuZUr3W",
  "key30": "bHfGadUZsDieJQytVNzBdVXTbBUxWm4N8evDMB7Ku2eEx6MLDFJHwaaL4MfESEEkMqCd7bxTSWFeg6wCHtcSGRg",
  "key31": "5jRWT6NnJRgDk4X2Fa5MGqmXRe1cy2rZjrCaZqgPirHicgoKE6K2tQER43CLMUdynQmT7yLvjxpcV8rTHyBaEXcC",
  "key32": "3xjnEbnhDy65vZDgGDpmVSMWWEDjPiczTHXJf4yMTf1jzWeUJq5iSNTmVkPxkJHewWTDYo1VeUVQAHw1qFHt1kK6",
  "key33": "4ZR7uiCJp8w4s7kbbNxw2N98Srxgf5HPF3Att7NPyfQCdeJBjftc7TyjN5cKPE669GTDtwqfU7etTtYRoVcxNbmm",
  "key34": "3MyAe3TCUGEAnkmYveTjDxitHgKigcMG8sZduZiiWqdoXk5NLmZNgR7tkG2fm3kKeHFPBgur4LHuKaBG1kw7xStF",
  "key35": "2d5934Ce9GjrN3FEHHxhtRfkVHLYLGVXBvMogMM2qpDE4ReQa53kTGZGQCfnwu6SzmBpuCfJeAKi81mkmV4ffgnG",
  "key36": "a5kNG4caeAbAEaESK6WQH5qtPJAbVoSkpj8pkcRVitZHvEpXH1VJD7fXzrgUAn1DBMrrCHRSD69d5HfTjZ5vevR",
  "key37": "4eT1TVM1HBgYQnFiwQTq8DCJy4vb44LvNNSG4KVVTRafB7bm7NxubHUxU72NYj7Yk5SKxrqDREzW4wyfA6cT2QnL",
  "key38": "2j7wZXqMfNPd1wGw7ZSnxTVBEtpKuMiQMUZepESpyuoTXE8nPrJEekELDBXdd3JPfsF4kV2yoSTdKribaT21Pjmu",
  "key39": "5LS7f3CyvQw2WACVYSwT2QKnB9BZgWQe25qcvBpUKmQkZEmFFJedEf9FNq4TqVs6zDXBmjskjQZKrZpvGsEu4CtG",
  "key40": "5Y3BVuSsJWYvUYcLkMH21PZzCf8wGJWb9spxuzkMQkTnHxRnYxtieyA83sTBHWmV6vFwnVJ6A7g1g4wzoLTrCnAq",
  "key41": "5G7qZyx48sEzLBL5zSrTb5gtZU3CqkSYa5ASHfu5Nzfn7b8qhoajgNbvhjJhUwZxKWK7mC6T6uq6hWz8jXDwgTLe",
  "key42": "R9kYyoHfWjLDTYJv5EcHDe76DVWHuytFzxKXE4hoM9NZb19rbsCMUBA5DwhUURsLEQcVbzhJu1MHyiJ9JNnv6qQ",
  "key43": "4QQBvDdGsDRYZBNeCvAU2VtVkik4wtDkH4Sh5HbMNVE4vXVS6bJ31ynQovKaoQY7vk1Ac65FY791XqDdH9f78CGK",
  "key44": "Jv4QNGVxnvCPU8AUVkCPin4MmLECwTMckRy5AR5cZgCM8sKVxiVuC6ZdkcRaHU3KUxxjyewmyURXJ3Qh86UwuiM",
  "key45": "3W7xwScPWSPv75EMZxWGFpJxavXJQWMmQp21s9uAAPxssRfBLoDmUKZ4DN7SYc7rRMrMDj3P1PTxchQf8oS8QHPG",
  "key46": "5uubzBAS7hQ9qGShSGnkGWebsaftbm1t3Azkg8FyQaKxUKC89WkdKjFmdBKkMK9jEPc1DaihffpVNQQc3QAfTcxK"
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
