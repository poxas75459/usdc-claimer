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
    "MciaysnUYYiffJmBPyxi23jjemfqAkqeRXZAbxgeziZc95Nu1J5dXCjjCw1Q3zvJ7iasBU12aNuWtwBcy1Mb1Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtWbbheohXAV4uUpnG3m2oLVrkoA185AMszknS3VqSTd7rULN5aGCKP1szxVuPgV6EoxAShEfbLPf1cdMrx2PSv",
  "key1": "2ixiNUvt2YAonCpXojfnWH34rmMrRa7m1hkeucbA6AUVJAAfULqUtxoF489TBp2W7a6CtfZq7RFwatb25hSQo9Ar",
  "key2": "3E6VBbusvZ7VDpEzTd9Lumnwoqt9duBPNzi7MKdiyiX7jkA82EKtKYqpjyMJqsBwFgdBPM8cZf9hmcJbJEZkD3M1",
  "key3": "yaiZquS71htL3cGrKu8LragaHUwtoig2moqdPE56tgf2SeKhqEaVZz4u5ejXya4und11A9CtxN2KHtcqVgK6Gw4",
  "key4": "Zk9H93JZpr2MG17Vc7WP3YpeYVnGLWkwTTsXemWYnCK4iGiBHg5QP3VwHKszJbrXNL8RazVSaZXCmoSd4wK2uxg",
  "key5": "3QJu5dRzsTrZ6yinewpidKBiE9ifMKmUoeYrVaquJr3evhewyDm2svAohPdeYubjD2TdJWqJVoS5NFDhApzP8oKD",
  "key6": "4FfiGnuMSuiAU2Ay5GLDLRbLwJAAQSB8JhadqLkuDjkBfmxnXo5mHvxpuJZVmkRQ5cbNy4SGxfMrDY2qsTHy5cwQ",
  "key7": "43EYaQsMy5AW47BZhHZN8MA52r93MrNAzNbrdSKAbGsPshps6VDbPzCjCWxiDiTt5Jjq8YpBnX17BcwJmfPYDfap",
  "key8": "4KFfucc3hQQ8BRkzmBvycNpfUagwXRhuEGAyCe2iHW8rs54s6LvC9URMpTA1UGgZrS8YD2Doe29Qcr3VfQPCRmNw",
  "key9": "29QedHBbxSpG2h7v3Vi1B63FvYwbN6mMSNbgGCBhvmvucJ99hhRPfquzaQAhey5odh3N8NrmkZQC7vT8zSdCuQCB",
  "key10": "45gNaHVityKBbhe97Rc8gxNaQHGRg3MsGvFPpkv3eKersAy5WWbPShXYj6MjmUK4cizpJxmiY5Kt8rj6WPEN5gdF",
  "key11": "2LNyx55TWqZHMTwFyPsn9k3EzQZA46bXKmUDZt5BKgD78vwFXNPyzDVcvQ7L8c8RX9vZmUrGQoijtCqVafhyedG4",
  "key12": "JwZcFkbNdEgyyw9w95rzpjiLbjGh6X9rD5v1BMQXJAJ5Kz2U8pHm6rRkxipMiSqio3Mqb4hikSipsw3C9cNkviy",
  "key13": "3BcJGR7bQDURaqdT6fBT6uHr2JUREEky5x2ANwwcuzT7Hs2RekGHbn9PaaT1P8N5VeDwdM48tEk8ddFWhnQpsLqp",
  "key14": "4K5JLhLEnRiSdtn5723uYsUSjg7yBbz1hAEeZi4yighWPaca8bV9bFBvvQAudSUTq7qzXVzyp2PmNoeuiosQ4rvK",
  "key15": "4VUr9pa9DCvuD3WA4xdVp6DQh9hGCkjuMhwRztEp5uvah5ajJfN67G9TMPFG2PQrgukTMpAkKyk2Bq3ViVqQf5FF",
  "key16": "2px3WJtzxJansuHkHoJkyQWTE8kjRpHtqbEfpVqs4hLcXevTv2xpKDehVSRXLAJhgseRdtnFXvu3a2XJaujcB5M5",
  "key17": "5y84tuYidNL1Kz1XQiBVRmnefT7ZYxxVL3DGuykuQrh5u6gDEG6ZwFPAAi1ma7f8DTkJ4XryHLcfshFXuDLa3kV2",
  "key18": "5BWDtxhg2V4zhEbiLGy3Zr5fNyfLrPv2WuVYSppF1HBmMqp5zZF4MaVRTfqhFLXA7Pdpu8Du2iwhjxRKDUzyRgc4",
  "key19": "4SCugzqug1W6mrWAoT5dp7UYDLDNXvPSHwqiX5yArmsymkzyeRnUHNECQnw43oKNSZ4uqvSDGCDmsRSYcXqu7ZVs",
  "key20": "3WoKnSDsns3Ky2KLXhmSdAeqtHqLzJVGia35oYfyG5J1szxt9MwoASRnLFp5EVc8g6wFjL672yG11tqcRdNx4dhU",
  "key21": "596BnxorDUniB66iJ6qBMPjnWhoUoBYFqoFKbGeHwDVsNuWsPN314msJhELEYXsRqYcn4fduCJn9kRpRB7ivRGUB",
  "key22": "4aSmyMUU4AH7HKSDorAWvFSMCzL5FPtwnDBAPXU8z8Qn8oU1mUtmnojx2JvqFowq55ykA6GqdmqH6R5e7ebpnqZ2",
  "key23": "4oVBqRoh7yvWHSMPGocd8bEq7C8yeyfaz1rr5h789pJSnzoQWSiSnGasWyUG9H5BH3WdDsUaCZVjnDRfr3f54LmX",
  "key24": "5g6HYuQLYRfCgGU2aQTVGKMWeMFvq7Ea3aTi9DNv8yah1CxxGgmvEyg4ydWfKJMaKp4SpP21kaghmZscYfcEQTDf",
  "key25": "zvjFcBUaveDfPfFHp5U5XtaxpRudVLMdRB9pQmjLN7cw2c9HF2FRCgJ7AigoN7xkJwXX1tweTTdPnmPXXbdEg1Q",
  "key26": "5jBtVjSzr8TnrsFZ1GaLo4K4sxD7T8tedaNQu27cJ7XDcJHpP4eHFXYSnsERUAi71XfPYfQggDxWPgh7Syf62v5e",
  "key27": "3gXebd2LVwkDNb9BsEdj5JZFKboHyqbyQQqCo1aTZu1YTn3UoRFgd9tNttHGsseV3mzMarLamvQo5F1ZwwPyQF1t",
  "key28": "3estzhfy6crkD65uYGimKfw7iJ1pbFPgv4ooWTeFSFVwg64A6sf17wAtM1raqu2YnPHaJK5GSAQyBp2vFwdstNfe",
  "key29": "3RXBcrS7R4S3KzoynEmNcf4CKvHQemFKaZpcbW88pF6m5JipVceWe7FTzJn13gJMPvgWNZznEmexd5LrtuUbiaas",
  "key30": "5SV3KUsboxKy3qL6bvNjkj7kEyJVaH48pL43tQNYR4RQf5RoBgUydUj6nM8XG8nVYrqqmfNDQXYzCccDVfp2gJVj",
  "key31": "3Da8ZWPNUJocx2JiXQmBLvPgQxMfJ16nuFL1pVhPwkHJmEjUSqXbKLszrW7XsS5cTbHXEBqsaH2Bi5RfzhpKSFes",
  "key32": "3Pc1J3JbRrmw5UyXy5kzf3rxPgBDFScBUc3xdJYqZmKAPeP4axKw6dgzj4ZGiGHYzFSJ27hFkA9UHLhsXM2VWzib",
  "key33": "2GsrouZQzRAFSzNKkmv5qrkQh8ptVaGft46G5LyMUDZeq6biBywDvxD2yW4h5pXarz9CBX9ZgGFAe9Rj4yU6WXsj",
  "key34": "62Huj5tLR7XHBeYmCGm8iK1SeMZ54TymvKdDzJgHgtd5p8xPYZGPDbE7v38fqM28BT6WZL5hdY5aEM7bLKps8rao",
  "key35": "4WhbNY1cekNJJ5nsibd3TuYJRKtpWP5co1ELEVNBejf9ZG6WXjHtQLuFiwVmWP2LJ3ZWi17RA7tW3hVkHBif6iwp",
  "key36": "3VcFRF7y26PUbnRPVYK3yTR1Dcq3mFfim4hdLAkSHEdTViNtArPkjtQzq99wnhVGV4xdC5KTabTNkjYEgPj6W2S8",
  "key37": "5yVDzAS6UCBbQ2LCueaU1fsYAD82H9VXVvhXKPDNLcmPeP46nTJAWRc7Bv3K9naaKeL7LX7XK7i6sEAm5TNXjQiq",
  "key38": "4R6zWdTfxe6orJ52F3EtZ1HwhSCdVQsDsJtTGeFfXs8w7udzBD1Mq9gQCpNdLUd7j5d9BUE1KEAPWpieVGQz1eKE",
  "key39": "3ZgXG1jxaGnpFjSADKBA8LuaG62VqFN2JVa6T9hnY8j6qF7i6ERiyTcFcvPbiD4d3C8yKHBGfLJrDGYfx4SV6aJH",
  "key40": "61zxEEWmCXCiozHAxJQPQaHAGNnNxyq6tUhS29Rmf7htozj21rg162piGmW5MKgqivA4xmyXQWdNr63U3HnrCy6C",
  "key41": "xkLTtmfEU1buhEzwBoVLBn3tC4GCKNt8nWnsZRT1dQmYPcEf11RQ5cyR72zcCKoEp8PoaLLXsG1KbVvScC57bMd",
  "key42": "5ucNhtyuPJWWGKDsMHfZQmRKFSd4XrJrGBHZMynWuW5Dp5rQdm4rUQpKBs3At6jv7GAdgdVmenGgkRWA3PdLGnYY",
  "key43": "4AG3kqkEptiK8kXst2x9tCd9CRCDBrAbViKLv3qPVwAFbFw1GVhHHRfTdVLrFLUC1QfA6weryemCWsebef2BXb2y",
  "key44": "Ni8C4ia9yTsMrXNrHK1MTinpjfjRV8Vk6ScaDg531GiXT4AFMbq4rSMQLeJ2C1osmqX2tQhDPNubXU7XRtPwrLN",
  "key45": "3jrAQniHzwBn9tJHj3PjPJerr7CmSqz3yFXpQqYuxYHvqDqJTCEM3qG4S8gK94SGwQWAKfKiLYPgmeciVfpG8bKF"
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
