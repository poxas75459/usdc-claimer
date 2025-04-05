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
    "2y3CF4nm1XbQZRXoRAHQJfLcEZKQjffj2X9ZnuMFS1qvprv8YG8mJaddSLLjCRLMFEZk1gubLBrqSvz5JLT44uv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34XgAq4ACWLrsPKKd8KKQTRrMUYZpbgE23taXm4RbB9KMyVDUKGFwgtWT7aU2HQoLgotxosq5ySVhFPurxdueBa8",
  "key1": "3viSHY5KoLYRiFS9PnBfHsfEh5U9GAH7bEbuEk7bAg9gtDb9GGtrnPTfVDP68vpAQGN7NeuG1QEUYZ2zpM5sHUG7",
  "key2": "42wdQBpdiQEGcDuWaQBR3Q7hf1kHa5aEhbHRvQQ2SUaJC76nMDc5wYXjBWBuzpqvyDR31HgG3Ais7WEybYscB84L",
  "key3": "21AU8vJ8Qmf3edfHjmCkZyDC8kKZ9ZvAXBzdBpmcPbXudKzWrA8cBSJkhw3JZxrKj39s8q4NFfyTwDVtdbRGYj6r",
  "key4": "3vwM7Mn6cyyYb9xJhhP5LJxaAkUsqbHkC9oUzf4aA72hVTur7HvHzWQkxXhqF7cWPHti9G1NPUsxMjLyQiN1uX7L",
  "key5": "3tQ6rUYUygGhnM4Da6ivfT8NbzPfSTjdbprX3y2uBT5jeMub4WqWHd6cDcbPipsaPN8PVerDqTmDARJVK9ntM85R",
  "key6": "2Xm6NnSarA8xdveRorsoxbEAu5PJYA1YBeaaEgV73LCCGyo8t5DfUNJGUzKPPtWModesMfe1aoVbNcnPEoPeji1G",
  "key7": "2kKgu2HcpVcm4gQWB2JR76PNXvxWouDsJVJroNCuVJG1PnKa68a5NuXCL4fK88RgNHiRtzsen6TVX6H7jaBc7D7m",
  "key8": "4qZrAu9MTUo8LcYJWDLVEruV1o32ur9yiLY8Afunmmn7vS1XNWHzdfwn2E2cMA2SwG81F97mQzWuv9p6nMjQY5X1",
  "key9": "3rK6HJjdGf7eYs1Pty1PuvRnJtt5J7Dip3xonKmdCJuamPWCgTsSdyxxoiTUcvHg5Er5Qzp8yHmtUYmeyfgLQqNQ",
  "key10": "3d8xqDkRV27RfEL3btd66V4rbB2auJn6hhsQAhSTTyJQqTyYqcMqp4hsRySkFMApafa3G3ARwjadKbrz359CkyJ8",
  "key11": "3Bxbbb6LoVt1Cr2qJ4Pi7qEZQkvCeLTYF34n3FjqZEyfn412VXkd7wubUJQYeFvzwtuzSaYuNKjDaAfMRuXqJypD",
  "key12": "48isLGQ8c5zoJPE3c5nWfGdXQGgv3QKM8ynrwpgn5EKLeLtdkDH13u3ue8uagjbwLpRmzkawSiC5axYKhnttikj3",
  "key13": "5g6w6UudtdyNA2okoCqkbzkQHL1C7RJdnchok4nWb3YPmxgdmv8uMfVokptD1gKHZDF6bMcEsMf8Bti41vfkBr2X",
  "key14": "3Yzw3CdQbSfiRA4UoVvrbnpCskerdEpuzKFPYkughfRrviKv4eRcYyipnsVkQmRMD5DCuWnVWnaPbFrRuaGqKzKT",
  "key15": "2tVmwzsDWhKyFwzfupecdEaGYzfB1UZZHYCjKGPbDqrw42UbmoR7TgpCFQszyqY9Rz4uaQrNFaRvKFne8AN1Ju93",
  "key16": "4o69uc9kj4Ne6vDiARk22ZeAD1PfuWhv4kMJJmpaZCdMjdRy98eEZnGv8KDaXyFWZmSHmfwJSG879yvr3UToddXG",
  "key17": "51mqKk26SD1t65wha1vyGVM2L1boXe7yr5CG6reecTUKNxrnLKFkMikqFQLh1SYpouQBEXzgJ1VNXjSDVyJcV1hK",
  "key18": "2eSmXKeiyK4kq11xLUfh4CXB8iQmCvnh5Yg6FrCcRHQf6kG96Z9udGNjM462DswNE4fbET2dHaySPkpL1GUqHitP",
  "key19": "67ZXD8cfyZS29qegJ8vdLQBbBacfcKhgjJ69oEnJh7Vo97mopStktc7nSKkH4asjNiJFspQyDxWd21vyeJEB18MB",
  "key20": "2Ur4bi34uMiTxkcLNzge7qiwWG24mcEziYhpS9pZByD7UCHAGfreKvvPrfh1dpSNdcdufUsfRv1Tnh15Ac4h5dWz",
  "key21": "2Nbj14qxRiTVdBKCKbAo5XsbnW3H64CnGDQDSos5WeW8jkL3fSEUX5pCA7iZQ7vthP6zCj1zhS8U23FCetBnNVDa",
  "key22": "5EoEa2smivPQSYnCgrgtVg6i9GnNvf2bJ26wCBKcaonXxpmiuGWLEUa2R8ymjxPvnRUnYmbntuwzbGbdMuSLLFdg",
  "key23": "566BTaDFaaP9MTW6Wvrk8UxHsoijsS38XS81GgC7KZV9vNBHZZ3Yv4QTimkjvVCwDMxkCrb7L3N9khUoLeDioCP8",
  "key24": "4uK8Jm33WGuyvBvrUf8bNe4xMDrCVvXJzfBZhTLiLG8t3fzFEcsxABNKCdLeom7a7cocUDjYoTap79vLPp76BzSC",
  "key25": "2Zj4bTPFjELkgwbH519K1L9A2qVxR54hsS5U58vKndRusBGBFMyLYKY5xnHYCPXpR7VciH6jjq7WbT2n7U1K6JqA",
  "key26": "5DJUeubVF8SZyoX5ed23LKr318ahun4jAVVc9ikNMjhdYQuQCbz8Kktz8HDcbv6tcER5Ba2q5Fh7zWExG8weAfBR",
  "key27": "5aQZNwqTKA31ikgvsMfHGb3JtQ4XJzR2VaDUSweiG3L8Ubwip63gEUpUAN85pwSuNowunV3iKzSh7HJYZ6csGytT",
  "key28": "495QjRP81ELTAjpt7gbFnYRrsWmxhmCd5KkSrFeZLYLmBWCiMvJMFPXFvRuokSeBWYz2z9jhBtdUNGmx9bZpXAcC",
  "key29": "22HTRJvZPe55kzjiBzpeLvVXGcWbyqZE5YiZCG3zWoLNzqtapUGmg3ekAUVamHd8sdKP27GE7qQUJnu9ipkKbP8i",
  "key30": "37unNtoT8b8h3bCANyAP3BoqXaY5mSBmrV4zgwMdXYpMWAbKe96GnG4LeDBu12wm78yxhFfwyDSMrAG9M15WcZSR",
  "key31": "5Gs4kBiMzTFBQboCMRHWSy53AoKdazEyKbS3ijv1CxGXLAwsj4mDwLK3UuuJzxRaiJLgRGeXYuDycW3JZHwTjCpZ",
  "key32": "56qArKFRxgjXM8CHaqb8FNXY5p2Rrs6xA4xfZ1mMYNMubUeJv4qLMFzPKmycT29pTBREKH6AzbMspHvd7ukXswD7",
  "key33": "2FLkv4C6M2MrWBRnP9hXY2L8F7XSVfRoehs3XtzBMmnDm1j6RRDKerJbGMyg7AGY8efhhFKJhwCHvtuzUdiJwUsj",
  "key34": "3EooNbZt8SkDzQ7L2uN6PanEtXGPJLttec9h653KvhCa91PtiSVESFFi6GDAixhPArAFaNDeGjWY8ij4qXERjMwK",
  "key35": "4t7e7WVijftYP7JoMMc58J8HxMeGCjn6nR2QH2X8Z9ESFJVMg2ayYXvaoVVeraXgg6Yg312MxqWzQPgAZM3D6mcv",
  "key36": "yufm9cjMpV4LsPdAMGDJeSAbnC6ivUqTYigdNRCqNCv3n43EtpCSVVcP8TsRq5wS9juNzZTzg9No2dFaSp8atBT",
  "key37": "4sVkcgnRGLkegGzU6bAQ48WuxfobvogEZMXfHLYUQeip8fxeNFcnhmZMAUHb1DqBHPXfPCPnXuwuPojA6hNNs5Hz",
  "key38": "2MEDzFuEENebtBqY7FnRUYacnuSGgHTPQPjqujGfooZGmjsTZk3WcsrqkMgrQtEjMYT1tYknDDGHQ6wYBHkgX36r",
  "key39": "2RDyXrRRKcaBKdcC5yo8NJuDLVb6MustEgxBwc3SSxjba9788RMdyXf4XoBw4eXsrY6qupSgHXmhXyCJfPKPJLNq",
  "key40": "5k7wFSMy67b4QFEQFNRTxTYX9svi1YaUiXKZSe7EJkmEiS4nMRevjHg38EQqjuChvfoL4Ve3JPY7yQJQ15mhuU3C",
  "key41": "5ZnKPdx6tBjmi7fFoWRLr6qtD8yU3bMHZMJjVdXN1EpacivaG7bwqKwz7HAu5JtoJ6ePzorsnEbyKP43qMTTyd9P",
  "key42": "37s7qJE7hEo1JKxduLxp7NHfXyopf8HTpDXRCZzw82ojvE7vLZYpXeCfwDFpSBXwj23MBk1ZaZjoe28DrRyvaMNc",
  "key43": "3FS8ghtTJr7JFGyp29p9UbKVq36EBeNaVidNviFkA8UfyuvwQQe8JiMhXr2UYtJUsWN3imUFyjfsJCKj4eBeuko8",
  "key44": "2UouHauv3NbJ7f9TYMwqTdjgn2WAyAnHVZoqjjJA6g1qgJH8re2tSt6o5STf3DycuKG5dipbwig5fVT1MAibtqCt",
  "key45": "NYuqrM5WRF9rZ4mAW1TkSgEvsbLkj6qSTjpfvq6UyWaTJjU3MJKVVe4jbY2CNaraR3SQGCvNn3wiMgP6nAg2qzK",
  "key46": "5frQB97FCeFrHD4jqPUuGc6x8imgSiXz1DWaqrssJQDwbHQQscsbDBXL5yHG9gMbxkh4dUfLvaJ32pDAmSyahiTq",
  "key47": "4QeVJUMnEzxi3uLJyMKXgrqkAG2hp2vPFn6DjcDNy4ir4iT7zAKEeNijQ3N84hm9uLcMEjrLNUi7JutKrJe1nosX",
  "key48": "57JCQKnYy32bx9NUSdzbrsJVBkUabvnhDT7nTA4v73zBmuXtqGNLWZHF1km9RqtseFF8WLkkuvKjHgnVjRHwQrF8",
  "key49": "4aF6bRyKHpZXj5aGUsW4niPF7Kuq8Wdh47FZ3D7yqmfG8dQC8KYcv8dSuMVmwwMwN8dHUovBQhX26ZCHGQbP1Vtq"
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
