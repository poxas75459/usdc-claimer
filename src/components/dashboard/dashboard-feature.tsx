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
    "4m9ZmSE74FyFsZXPnLRi3DthPTYHjYumvQwaWZPiirW2U3QZiyZJfNMyAV6GHtz6LFbL1S1H3vZDUh9jRQwsJFTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxXMgX9VLp2PagXir1subRuRwaubnWYKKPioAXuAyXwb3gwmg6CA926wdRxS9Ame4swErCjow2hoJHiaPJzU3gs",
  "key1": "5FepDLJ9nZ9ZpghxrHz4MbYSn5qJCayiN5hz5KwdMEDj5Wb1N8gVdARCTmg7i7hJiz3oWtEh7AdENMrYfLujTaof",
  "key2": "5qnjnMCW8eqz8QL1FRD11jHeLE7Nuv6dE87dxPZJpqv1t9nHmFu4NT83Sfvht4b24UrZmmTHqU9KPqvxQF8Urkvm",
  "key3": "21ouzfqpGTBAgJkSPnxZrBHR4kDY4tJSsX9PcbLGPmjMefyE4xYQiAvejvxfHso2D5CGxjKHe6abeR95ci7zuJVp",
  "key4": "43cN6yxuF1cXyao5EknkRA9bKZu5BAuGoKYXrFtyx7gWzTa5ZGEPNpQBVZVfGPypE5Auzzv9aAqiBKH1AKCKi2uw",
  "key5": "4eNc4EjV98QWeMvbLtGRyWSo4aXWaWDymYLgnEDFbrYY7Dh7yBotz25MHiDR1dkj1GXm7dYaUKjUPRGQEy5N1RyB",
  "key6": "5JChsBtnEVGFo2hA6A3euK2Pod2V3bzzxYMi6rq8aK8ukmkiLt3Jw6HGs9Ezac1Sa8i9gqsTi8FxAmbuS8CAdkHS",
  "key7": "2Vm4YoS1pTnxyu3kWwuyfuB4mdNFHZGaruXBdv5nLEpVBjbtEJMjhbz8MR2sBec3sPMJABZqWJnKmCcBks6YfL6Z",
  "key8": "3F6zv1mA9KucCdEUsMtL9dEWWE3jh23SVTfpGtmPCbRVQArLstEkC2KKovjEMNeVb3JGaGNZxRQR6yNuERj3rEXY",
  "key9": "2iE1Lo9nd4dFAs423Q6pBMgx5U4kwavvftUYV8m5Lg7Dj4JzzVjara3weUCaMArgbpGNvDhoPEnHh31zYyHi2NzY",
  "key10": "ZMbmMa67GAmy5g1xdoiswQCQRDZk2sgmCabZYv4eTf3hHvLfg7aVroGY44o4xdjM82EfwiXEZeTeCAyGmYf7WTA",
  "key11": "32rTnqBP7icN9ciCna4Avs4Ct5DMgCzeja4ijhPwfxLseeYtk4DwRMx9ysoV9RUMCL7gBhi6MQF96KBFFnHNHWwR",
  "key12": "62PBfr133ub6qeeifSHZgtbzqAUiPBotAUVysFM476DTtLnUGP39VGQYgrf2UKHZuMrRMULYhmnTErneoLtUFGAu",
  "key13": "4PpxELcJkoo2wZFncNEsjBMHhi46yo3EoB1rQNYYak4yeR5cMsSCVRT6rCUCeeYkQrm8TjYp1bTyrTWi9fSMi6gx",
  "key14": "5j1CFs62xVCiErKgY8xDN39mNESAeHHjPqr4gMpPiw8pKt1y559KnWG5LTsxcXcfxWBfH6GzQAf4v7EbPHFdgD1X",
  "key15": "4B71CikTuexCxCbPF6YvFnKvVvpy6DBu9yVBtZWkUrvaLmYj5bzqE9A9tVZaxGbMRU67v6EEQvEjcdcUn2u6837q",
  "key16": "5DvDAz25MerbtKkyQcHaAsDHrH62Uv48xAEXA5pDQLGeEEf3KijbT5FHEyncTbWSs8g8L9DztCHeC53AiHVCwA7i",
  "key17": "B5f3H7eXiy3KDE6Bprofcei6GJ4JDzm5baY4PdQTpWFXC6Ac6TdJXnjYotCA3YtJdMpYxAU2aHjsEQKf6VSeNnV",
  "key18": "5PqbeHgsBt3e1N2woyesvmN5xWQkvWKTG4LqdAj2iJeYZqECjLGiuudx8jrKkQYrKMtpugrXaqPxgxg3u3xuwrgB",
  "key19": "2SnK5vecjp8Wm1xYYtENWgxUgjBEuDkzmJ7mhBiXE1vjKhbwN46X6ZwQP4W5EXoChi8pmodgx8jK5oqhNXNJWGQd",
  "key20": "4iq94LdUbNjZdQxw2c71JwdXH7WdKBKMS2vKKEjyR5nbYeaqahSuahR3Ap3UrBrNJeksaj3oAnToDjf8mfEbnHB3",
  "key21": "5ZMFC46ZNpfyXxNYoTnVEeXgVs3izTUp4PmjAumceJzAL7BhTkTPDxHnK7yqe3uDS2y2j6GJpSgx1Yj7rNUTionE",
  "key22": "DrFRmyVQBh3fLz18oqNCD9GZLMjqoL11DR2cPhj5GJBBub2K4eDo5fafjss8t9HooLSxvb6Z6F94GHcigDwmgmD",
  "key23": "2xJCxiFt2oy2wZtVHjnRk4WtHoALo6aosDoRQwGYVTp4XHGR6wMFwqfwPBhBRdCnhjiMR6Naem4fYzC8bj82JacC",
  "key24": "4mKYjxBggg5a471bMvsV5TddHRYts21a1asrJWDfZ8cACRKBU9TZUKezokditxTbUvamacRo4ASdwXmDrW7wfRPZ",
  "key25": "Cx7rp16tux6hQCGfFCv5Qp5anGhnRmQuN7MsRpEqMDag69K2TK1S7BCyMzZWiPWEkEJWfdubayEx3LUHn8ebjh1",
  "key26": "3MB3L2eJkFtLtB7GoGnDg1bDGiQ5jZGCiGkJvcG43b21xMWw3oqmjXuFfSMohodHZM2gakhViKYYZ2JCiub6sqiv",
  "key27": "5JdVAg7vGVRQVK73erh157jTddEc3QvuKnHgr78rDE5GmTgfhhCbz8FkW7hrzoE3kgaAoTvTwNtCCHrDdkddyrZd",
  "key28": "2U8TP89CNpVQkHpyiFqx8L2PMdsu2tvJ8BqBEk5aPZujjFVJz3jQhteyfFLCn7sYmpH7RuTMBf1bJkUNKvFhKbrK",
  "key29": "5YMAXRWZP2c4zAYRaPBgVc1TeJKmZT52kiLtoQpiqnvMHuE5CzC9trhW8wkgBY9j8zrMKvxpDr2TVooZAKCydvbV",
  "key30": "yCpJCsVKcMzTAGHwhj4dxSdJYFJS9qX31PUDKRpYvyfpAjSN2kMKsoJZk62tCbSm6wPfhrko7JMv8jjdaL4z68K",
  "key31": "4N35rez3XoLkxr3Q9e92jtCdrryhMJ1HEgSWVvpQTJyGfegmxSzCuaejDpu2VUcvkossdQi8yjKfT3G5YdvwbJzi",
  "key32": "3FfKePwZj5LYk9FoNN7DwhXeetk29V83nV5pUiJc6NfiXjpYgJwUM12mdNVAvETy3JDTJG73bwinyxhyxkkd5MTN",
  "key33": "4HEmwmNE4J53dyRuFze1yWQYTVnMKHqsiGDoNNm7tm3gtCWzGbQWDtBEfQ34NCQEj71jbX8c3HTU5QE412qizFww",
  "key34": "4KUJaAurX8kd6VP2XM78P4es1GAVq4WbZwp1Kt4DBE4QWfBT1yWQc5HsmiMNpoL8u96bWzVngkxjnoGqGrQMmiKs",
  "key35": "3J6SfRjWb8nZWpR5bXFAbrK3pUAP5rNVJzPicekskJ2AH16VeLkSfUMqPCaojE988YqbnUn8gvpXsC75AWgg1P8M",
  "key36": "jt5CHS7oARkWVRsWMtehA9UHW9nSgCqiF37CiF2KyCsH9KSfyKJgij8RrVcJby2NKAsuQs31kjUqoLTrCDJ2iBT",
  "key37": "2qj9EHT3oZrBsgzE3SAnra3F6mD9DJ8RfDkX5AQn38tZr7zZ9qTXhRxAFdidUqgYo28rdEj8caV1s6tBp4tCknzW",
  "key38": "2sAhoDydwh4TfDahTL8qLQf5cskXQ94FdB1DXDd7B5c1EGkFxHuJs4nec6LqaiLGvFcXKR4qLhZa8dm8xj4tJmLG",
  "key39": "63h1UBHgNcDBaJY64otBgLxdxjENVQwRPAPpz3eTFDBBbRgmrz6yK7Qi8rZKexSwhz6kvTAG6Aajafq4FsmnZRNL",
  "key40": "5NmsfKPXT9hvtqSzXLhW46HX5HoXJMqfdHcHBuoQ9aXyP5DyydTMVXvUQbRqDrU59KHU2tzEUUFrQQKRuUbnt1JE",
  "key41": "FTwiSN7HasNP7tC51kVaN2qyApcv1GNWfBvTmXRYu8LETxYrShUGGhRMj34VEeGZvmZpXMKSFL8TH1WiL8kuMMc"
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
