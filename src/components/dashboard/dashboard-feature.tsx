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
    "4GQFnD4QRKqzQGpABxL5s3MgoPFLMkxdChYa8k6VfFSxSPPP2hyaCndGmfcR6eRUwiDT1FJGqEAnxNx6z1hGRegc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMY9h37J53As3KbuRfp6PKMDMMTZTpa8TYmhLDvc6MXnjur8gooYHQDKNqrwnaJhPnnd9wALiZ4faXDnLkCqowB",
  "key1": "4cBEAJEwyHR5MEsS3rte16w4v4nndv3L5tcWU2u3AKuQ2oMdzcaSJLv7x3vekNA8NrMxG12ynx1rHoiWqpwV2AnL",
  "key2": "3FvgEkQXNQ97h635jkLwx6SUxkSUbVCPjoztTuECxNSG8Tc9gWaBQccv9MEwLuKybWC9GQLLXq3P2GDdDHSU5Bwf",
  "key3": "3Z6xWVhDDrzPN2XVUJTaB5bNuib6mCgF2AGrQ1VskMcrTYPBuGFMRVR6KEkW9gBsbb3MDpEA54ahtA1pjwFPSanh",
  "key4": "qhGxK6B4N9ZqagEWdgiqddPokqJoWLwPpHZTmVP4qRcJQ76ajv6KGRPotH8XcJdK957J1CRMh3tkEkinG58Qb8v",
  "key5": "26ZU5AXoK3fFbBLeBjdiUFCVnruM5jeHy33brHjXUK2hVbfHyY49i4W6quir9uU9m6g1HpZJutpzx7FnyjBU4KtV",
  "key6": "LrLiKVZpnqLgqd9eHhgwoUALn7MxQk2GsS4zQCdoKoLdxuVfRvamAQAPo2kifwPkbeVr1Uwf86xwDU3pJWWbijy",
  "key7": "5BoBkca7CJV1RMaB6xs35zerD5zknYmjRpEr68cVfmeh3xjm163bsTVPdhY6euk5MSdow27LPrT5LbCJSjq6fSYr",
  "key8": "2Qt3xqpbspwzhnSPoLKns43ismmQNSi55QuxxuQWbhqmoVNbffTS4EApoP5ZEVukj2KeZ3nKZvJLvtrmCFSZtndp",
  "key9": "2zNRzZyHfrmTDgvTTrEuqx2vf9nc7ANv9ooNb8gNpjyWH9hmCsEgj7cQE2kMY5TDVoceU8mV7JfRsjRwmW8ytrDy",
  "key10": "2sanQGt1WnWTmiqDXxUZWVNkiM1qkaq743dNn8JXh77nGJeJ3cZUqchTzf9FSPHgTPiy7QAxwPsRqtQec23EcZME",
  "key11": "5Jok152UtERavHgevrixh4ZsT2NPZkggRvNt14ujmb5mjBGsTkPj4khK7dS96ENd4wGQLSzoq3X2vGVTc1Sqjo38",
  "key12": "5EbfKVBszZr2jpZYfAMEXGYnPt5meKVbnSZwrH6NjLUSM76sBZ4X8Vq4F2jg1SfNmYPmkidKMgJ6ecjgawL3U5kH",
  "key13": "3bADMA2dZ3bXiPXXJTVAVn2s612bj9PdPKnEsjtcRSSB24iPyhw29j2dYfwz4jpLpnqa9mTp8r6w6Co91kDYwcMh",
  "key14": "RiJ1CB54weTLuYvFyCva7CT9KT2eff81ZgAgihB9bLdt9d9xe9W9AZzHHJSEDuQ7grnUrf26Xsqn3a4ngBmFJhk",
  "key15": "4w44261PRduwEu1q1HePksx44dzt5R2xD8FhLfWRm5WpYKJSwEb9tdStfJssdL53Zsu3ELnaB6Hed11KN48PmEJz",
  "key16": "4dsgb6XMkKirMz8qwe4puTd3C4mg1VVbESdqHdDkTtA4cJCMuptMtDjBA3aB8dF4hev2hjSd2LE1rAQKviza291d",
  "key17": "5qRWgRrVGauNZcjWvYfyC5Vr9CTEp9mQueqAcKV3z9ztiuog9LXdzXfgrAao8X3SMBkbc2mKgGmuFWiLSLEPp2ax",
  "key18": "4LkGMFuPQu5nfLBB3c8r2nAC61y65WJqPrunXPbSaJwAyo9GJTXbjqNKC5NDSKg1KuDETUkfbSgYeSWSBf7madzF",
  "key19": "5soKMrfR9FYNY8Xu2R4cmViWyfjsQibkRuzq817jBGDJGwPhX2X4VZynRR62Hi27RUv9tH1Uvc2yxmUKbgHucxaK",
  "key20": "444MJsb1KtC3cAZu7qXSxmhTU4EoSeH5isazKY9XgLodRDaF4UFLEU2gZUjixAMnYwhv63v1FoERLR1noVPnTQJ9",
  "key21": "22dQqzBHPjVRo4ytXR23oyPUu5FDnZSFBHxkqwcyW9E4eX9Aui5vKaxezqUHjon6SCycGiuGj6btv8uAgbsxmBo4",
  "key22": "2gcGSejfex5xfxB2nfRG8AbbenZYDEduMANtLaVFNY9YXnjU8TnQo4GFFfWu5k1tv4CQzsakEgCSnpkpqYWUkKAE",
  "key23": "3U3ExyBvbzKDmZx3UUMh9GxzpE3qDWi4r5FMR7T6gHAS9ZEaGYygDdaGG1LvvBdcuPfNHYKcfiodLFHVHSdMBoLs",
  "key24": "4mo8akChN5xE9Rkn9gfGTCEDvowAmWHLQ8cKvGjDHinEhKeszghh7nafpY6SQwjCJLx8MwgB3kUQgBQFX7974HHV",
  "key25": "2voP1yV7KSnhS5TVwYNSgazzdCdBaQiYhcmpiGmV8M8oytRnUAYb1Sx2oSDaEuDdTAAggxmNRXjmzPwqtcFufAAA",
  "key26": "2LWQAcZY9c8UPiJSLP55fNb7NdwvnRaZ6VPCdNrapqx1fuXEGXaiXT3Lp6Tk1QwUYSK7VoxpYZRCZiZ88mTGsBN4",
  "key27": "2Ykds3jM2wFGxULEj9LDCDdA5z8o22KMroLULx1Xd1SX7REwysFDuofTFbSdubrdNeSdY52LjvPRiUaxV89FT9u5",
  "key28": "57JndXzPthBTues65xDnqYjfdGpaqsk8cLim45w69Vosg2nKJzeMA2FaudyCw7EQHcJBEXshxxEaux1mg3t2jF6x",
  "key29": "2hsZCt6bPDheLReooeaHDSPF6SJMuktN4QRYZEFuXZwTCaqFpTfv82egkurR1BYp8iRoPDzJM59vAbWL3QY7BbPa",
  "key30": "3F56tNPbbuFvdy3fK1v7ZEmiZE8Q9yTts6gjEjvH6brDZ6CfC7JPtEgkGKcJrcPZx9ceqEs6v6jxBB1WubYGqRNa",
  "key31": "31hKHn3AorZ9xKgbycGinoFTZcPgNevoMHqbEPDQm7v3tCrw14gYKoepv36yVnPfPTP48MMdnibmAXHqAHV92STN",
  "key32": "auYiF5P4fyysweRVw65X6iK3ZCDPXFifC69o3DaxReSdCRBf1gk6r5VvywxHijtYxsTX1Arc1B6BPZsP25o7Bch",
  "key33": "EyfEWSqVghL7sz5F9huu2Qtob3EZjNuaZAtr7eeub4jRxiyhSbcCnX3WXaQrNuZz2doSDJfwhknarda6D3gUr3k",
  "key34": "3zndV7GSZDu9CDcqpGLueHW3r5LJ63sK3qh8bNLkb2U9Rya4nUdrund1x9dp2mP1jC66LAVn9V7qSxG8v7UMRDnt",
  "key35": "5ovAhfAJTiwzUFbNw96JZQpJGsTufHwX1W6x5iqw1dtbuFAxdHjufGnH6dtvD8smW95CnjqK21DEh4U7EErcJqji",
  "key36": "3akShnKUWxyTd1UgppwjTGeqtCcvXDSxnJ8B9nHtj1hvNGdFFrfd6EWdB93srn7dmjaqxcZ1EAE1PDTtUp73wLTv",
  "key37": "2CqdfivKWh5SMW7MuxghXsMujxzF7aLeuUUpxvmKbDQstyJyYwTApiES9WPihckmAHrHkxRhpTRYoQ7ff72hKExc",
  "key38": "ZWVDgib49okbfgRhXYEuJ7cybf8A7huthBx4fmCccjDuTzYHcvU2rtXppTUqEVDhxu8F3Dp5rouTBKo3w9esc8w"
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
