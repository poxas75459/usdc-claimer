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
    "4auqWpco32qpw8Lgj1qBD691T9NovUYGwZaS8JiGngxHSZDBDKt72anRUMXEszqqstQnKXR5NuVPEekTLZqY8exG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJE9epzaCxgWtfSccE7Miy8cDzAsC8SRQHAoawErSpqVrV48NVX8yLxJTNmKqk4wdpexKGzheXq6nb9xnD87S17",
  "key1": "Vpcs2iWXWZNyEq2iFX6oaL9kBpmBEDs1BP9jh1WjZRbeRJmeRH5L3HcGJiBTAPhX9dzU3bicgzPDzQ5ZYAquCQ5",
  "key2": "4SFfsuw9AT5VD2YipY5DJxZmRRdX4UWoE7BhAfj2EVQpyC8yUiJ2eAeVb17jkavU7o239DuzfQJCEDCVB2nYXUeN",
  "key3": "3YbxBgSaha5sDJ42ZEoYxt9tKVGoWkDoMvyQEegeCzeY5J1NVwR5PXMen2tzxd94kkXAwPgFNHoWxLewWDY74FMH",
  "key4": "2ABGZ8z42F4ocNocGND4medMJokgkMyML2vbLFF5vwvyzvrzhojdWhDoQJ6TLDQxJmy5XRsMPQuoTCNT4w44ZkCV",
  "key5": "5ePG3gubJv4WN8HHr9jPxnPTuwDUuJidSwoiqsvpNsTXjoYjZa3cb1AFQqZb2KA8k8Hjgo6nLNCLXCqdbGKyXWNH",
  "key6": "5WAdHw3vAWAnPhgknpL4RrQF9B5xMvh6MoPpQU4rvi1ono3uiDVcpRbXepqJDvYMUjZ7Wgz4PJpNU3cDx17FDnRX",
  "key7": "5SVf71edRHqaLByCKsdrma4uZcyPy21HKiUQqpTqoQQwFjeReuXQuL1GyaZFGkNTUT1kSibb8z5JuHAn5g4inK4e",
  "key8": "4RmmyYSs6GmoLj5WuyG58NLbnrJaUsWq3MpLcvzmjGews1aErRP81QwksgycvrSnxYQmiVqp2xDnXXVQdN14wxdh",
  "key9": "4WnAs1zJx9HryCzZYmCZA6MubE53e2kd3nzxtYvJfqD6hVkAyPJAUKw36boz8Xt8xxVJTbb1hSKdLo8XeW7b9Qbk",
  "key10": "sGzYAyQqUiLPtGGRh9TbDJrNVq2CiJhMngFBaDEJR72b25qZ5rYTQYNyuQPyKL9D4TpU5BfvGVrauEm632LFTvy",
  "key11": "4Jvj3oC5YthXdvx7FFmog2ZbEkxu3dUfLXZDrodxGsezMxK97giuLDtaLtZcmQjgp6bRgxYr68u9qCPT493PFd5y",
  "key12": "3nV9gGmLmAAbdFC5Pyns4fMEcu179CHHJhq6Aqar6MQ1xCtuFD1MWvg2WLQRS7aDcQasF8Y2Jcukjx3iQTw2ybiu",
  "key13": "4tXp7kCncKVhrXGNgimqiH112ETnQ3A2aN7E4jRmFgvck4Bantd5s6AZUcDcP4h52EDcAuD6icaympzqwM9Xtoit",
  "key14": "3LQVijN2wQwTn55MvC361nkUk7YgSL2Fj87FDDxJeZrrbAcguSdX3w9juuxcntCv29N5UhKAuY4HPhUmuiL4jfbL",
  "key15": "4KjDErkuUma3PigDpkYqXnGtBBiufbDV8ZZSA47ufu4eCE2vEuWsUJgkm3YHT28iXmjFpK2kFyrngfEaZYXgmtC5",
  "key16": "2UD9nvouoEmoT96dAN42jyHR8Rrgcfsz2CF5vVafMwuEzLnuDUXt1fXPbvbhkXkUzSqdQ4ndVyaajyxWNvDsUDBd",
  "key17": "478JCTJEdyj1RpT5UyUsAftuPtSTtavb8DDhqSWUNznMZLgDGxjw78CAeySLuW8TqXCikfm4dQA7f2easYtMZTb3",
  "key18": "3ZS91Hp5sEUUeYZaGeT7c2vvoUvxcdDakbpmDqaBv7b6Xw3D2Dy9eUU1kXPL4JMFyfkfyUXCiLBENMDpbie4R7ed",
  "key19": "4NrqY4xW5ikayhQHR5N3e8Zyd4LN3Mt2JFXLhL5xEkhkFgde6aMuvWf9ULg4MosZvxyuMA3ekPhBoKZDAAffhm9f",
  "key20": "3mD7VFR2yvARiLduZ5J2dtQ2rRpnV6ENWr6eVHuBzEhGZzePCvUyigpFudXhGsvhSczjHDcTJJ5vgKjAjrSNaBUW",
  "key21": "5FHPGg8RWEyPVydkYbkKMieRVJCmuT4uv6DNgKv66he5T2XNFWDGQpD1T89Mcb2WXEUP9ktQE2Fv2fUhWAgw6kL6",
  "key22": "SWG8zs6SzfBgU3EYvArEbqkmSrPzLRKfe2XchQSF7VbNvYoo8RCqgeoR4aoGcsZ5nY1gTQ1K5tRiHSb9CShsBhu",
  "key23": "4bnv7Wd2PXFDR33a646tPtENaGaVrzn2BVQMYEGyo5fKHiBfRhirkYY5e6pjBur8cz7Sbk1UJ8hWPw32QcmVh5je",
  "key24": "5m7somk49ybuuFnNpYLb1XnYD915oqZfkm72FRzHU1jUGVfE4qkXV44CmEtXsvz7kmJAUR8CsL7DvhRqu7vwS2hM",
  "key25": "4BmBgG8zYDuneGtDjrzBjasMyhQ97h5gLdt4dMTnTsquJkA8g3CvWbUAb9pHWgqmk1HBEKNRan1b9Lwsk741CnT5",
  "key26": "4ytYyQipZMujAgDakyPaqvqX8xJ8zi1Gyor2bgbiP4j2hMjD9944GgeWfePbRen9SXWgV1y4NMS5g3gdmrQufrwG",
  "key27": "5zzMrF7sh7hQWSuAaAn3skDYzZ98eaunZAsQWyYMAHd6HJZUrhkrKoTASSmq1WCA1Za87RsK42ajgVXZKaRw8EET",
  "key28": "P3SzePcBNK7npwGdEWriv988N7KXGGMmFjtZrjG8GDCdTn9pzmffVYiz8kD87p47Ed4RNgU7qkpUnrsvAUusX4P",
  "key29": "3W6LHBkFmriYoMcmyh6xad19bKVe27GBYSaEvzhjTDzAjuEAiAZSG2HbpkQpzjbQxGShk2xyqpb1uw3iSVZVHcxv",
  "key30": "5tAbRHm2kgztgQsnioVXRsXnwSrrc31LAnssZJbSxcEvumbjm1akweQRDZMrjmCeMvP2bGt82ztBUdD8UfrNm3ZZ",
  "key31": "4hjCfJB8sqQvbdpxjq1rVhgUt8qTrcqRRoUR2Bntmu83dQFEW4se7BPebFq4JitQ7LeoCqULxVF7NatK7S3yY9En",
  "key32": "4UvdmG6jqvLMF6UqHk5xeBtg15WjtBWB9ydciFW9N2HMUSiHoKMXdgVSKXnKL5LnwjzmpP6NPcPQA4ENiASaUs1J",
  "key33": "48wA17v8oHRkG7Tz3j3xATfG87nBrig77UDe3CXoovGp4a7XeF9JLtPxKQmnpkMsUwD5A2JUCdahMChSCGi7Ed1Z",
  "key34": "5AactUkD4fzzRFZvDbRu86sLTWphjrfoPVfCdFfSHS8zXYxC7zV21yx6yDtDtwfEpJ2GqTdupxqGj3ySihumzta2",
  "key35": "5cCYM6VL8Gz1dstvjFgtP8DurcVMtWDnghAXbRPL2dtMP151F7eQt9ckBgE4FETC8z96xUnH28ZwNut47JzahC4r",
  "key36": "2pmh25aKrvVPKTxLtsSTR3Umx6ENNVm96xBBHJJm68iZsdVh6NkNAizevYusGJ8JNvpYGtQsa38afDPgx647N3ni",
  "key37": "3xK3rtdKHqC3drLv2BCTSs686n9rk2kZB9V8Cs3JVf9tNZJde5xyxev8WzP4k6mxugNfwEpmNYdJ18hYwmxk5ST4",
  "key38": "4MiDvM9MWRJminpEq7aLWj7BbdLedxw8aDBKyR9JxUpnCN5PEtNQETexmaXK47yByU7d7UyDuEdjeisWBG8tCcuQ",
  "key39": "3kqnGKsDnYjNaVT3pTfHa4wLwQYB3WsSjz3T7sFY2quuA3bArh34zUhxHYEiRoHhZknbxTNdrLBZB7jTZjuHJCAm",
  "key40": "2pm5eKo9Wc61ZqEk9qXP1UbMuCEgNF9okZ2QEThZG74WuWQMSbNZygFHgA83r3qwNaNMo4zYjXVWH5kVrxzLz3AC",
  "key41": "2BJQ8e5HPcQ4EWX7yfLim8BtpmcFjHPfsFpDG5bbUeWTwLCAcLa7tyhL42rvYVS3KxDC6GYzBAL3mY1XeJBLfPzW",
  "key42": "5cH35ELx6a5mugQMPxZmV3GKtDKQqtVhfApAJgfcdPQJSxUzPpL4q8YmrC6boKnE2X6c4KFtB1ARm2j6KZj5taHZ",
  "key43": "58Bqt8Jsf9wZsnWLwpfTodWMq9n2eiHkcKe2KPP4v3vaPvo1vWtt7y5W5Rt4v4GmP9afQSpTUXvKPicG1Avm8BLa",
  "key44": "5EF2cUvubWqD88dHeKbZcqbXWodtZ7mQVUDNRauxYzzgQdyaiCH8ygq3r7wHvYDvkvb1uhWwxouPcQi9oDc4Ru5r",
  "key45": "2jtJLQ7VgT6PsXgk6ysgiT6C8mJh3iBrDiXxUjUD99eRTGe3AqqvbMvRFcuhnmC3CpD96EQUXiB3zjkZuXVaQX1S",
  "key46": "5sPXgcvT2b1MXMZMn3YMqHUyoDeh78WjPhdw1MciLP6JQkjjAyX6wJmsUVcwE61CjeLwm5yDKsJogtz8vJ9j58s",
  "key47": "61dZCFprjgi55UHwxVSMpVLQryDTRzh56pMVDZgQa1HXyomhrVDuqU7nags2Ukw4qgpUi2wtV5yrKuqooFu5irte"
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
