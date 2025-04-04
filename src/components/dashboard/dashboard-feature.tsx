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
    "51TzbKxERTo58evpEeMf5GvM8vmRy5JToG4s2VQkQnQBjBEL7rUDh4s4mADuoQRsxXwokecdovuLdYtYPUwgFctQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpNpXzfpfcHQXaKNK76UsU2it25DYM7pUcS23UxqmW9Pg6AMeXnrRYSMGcQGQTNcSTGjKPFyEG7UBgjEqPDoPSe",
  "key1": "2FFgspQkKLVUJ5Q3EXp7hRsNoame1u4WWPnPZap77inndA8oM5WepntTe5G7ibrLYxRBQmxgzjq7FDdRT5oXa47E",
  "key2": "BQvaQSxtn51VEAH5JoKmdoJYfxzK6rDkxt71LbvmdnECGNfEPNboCLVRBaHSke5crFCDmFmJf5PCksJBhaxKGJU",
  "key3": "3DjCQ2jVb2PoFTa1v4KjWsytNQJWn683cygKiuTj7L35kMut2LR1ePrnQBoEurkMZtfvn9nebnCDBLPewnio52Cu",
  "key4": "4Sgt2iVReai9qJiMTF7cdWd2FHZe5gYw7jQFAJ2eZFcKPFQx8Z8o8d8mmJv2XMntYmZBGTHXjpA2JikKm1511Rj8",
  "key5": "jbGuwKo5Yuqa2wPERYzkyq6V8fSYQtRe8xn1EHM9gV4eH7NPokAnY1bjErwukKLTgaz6eP1ZaSe9PZgxHtsFNaz",
  "key6": "4oKa35CAw1oc4DRTCpEgQQFAnQHnQg8kx7vxzqCFoVDoZxcsTMTgMSqTodbqej3xg5ezP7PbNnx8Rh3ZyWKaxabG",
  "key7": "u5yYjJpwRXjL5s5npLi37mrChXCegrtpj9trp9Wa7du6praTud5ZZt5S61ufTunN9HFoDiYXL74bbekTqtEAhDG",
  "key8": "45b1e6ZRju4fYqvxq26GpAt9vEncFEejPfZSDZXtSEAui7xpTLwfYUQ4gHssBBUYAxF4kT5HNnBGEp4DKYv29c5T",
  "key9": "5nQ4jNysMCrZqVV4eHXeJeGJq4yq4bcGopNWvx9JCkHqrJx1d2TkqzcHEV4XiKixgnfmnKWCWL5ppEwoRUDBPgYU",
  "key10": "3uhvyEacXvBsWcjM2oLH1uHfWN5DZhtCfMjSyL3erV4jRy8r9k9Q5DRB7w3EGELk3U4oN26Gf3zZ6ZyLjuhkyj9d",
  "key11": "im1wLKjsi8Srd8UMD8vXVang92fT2bBsW42aqQjfg9ZuesGTwGfDe2LzoUbJCtEUfUxJRZuxL8ZBe85h3mdJtKm",
  "key12": "4MxfBsuFijNTXbdQyfAjP5MRNRKuXXnARaYpyuqNCqDxu6q3ftttEWSvWNwXMCrCcvGmb9YUYjf4CTBTzvz8ZEyZ",
  "key13": "5aNAZ6UQshB6VFxkuXh6YB1AC786sMGpADv5YP99piq2pWZ8QX14ZwfCYf3X5KjhQBVG1GBL9o4DU17XB6axT7bu",
  "key14": "3wx3qeqioxNx2JZAUMbErcQYDEdfgXqjv18AhdC4fCuP1KUZd27XcvRGFdesJgbX7w92zzEC17XwyTHQ44h2b8jo",
  "key15": "5bf3z867FZ5HoxKdKihLG47AFsj51AoWAPYUAqkb5vfxhBbi1J1mj8Q9LmcsbAkyWT7KbcGeN2wxJH3cAweoth7B",
  "key16": "3zkggbT1SMPfmg6rrFi7828yoEf5ixgsyMM3EFFx5BayvmjF6ZM9PvfYKuzaybHhsPEv113CpEmU7uPgRTAF1YHN",
  "key17": "J4C6yayZcfywi6gBEn6UZo6G4PxwdUThHzuQNoVnzdGcFp5L3EfY93F1na4mpJHhxiUoi6ErFw8UbcVxa9DSp9b",
  "key18": "3hiGVTXZ1B3i9fcmJuWrtkRXdmAq7QFhW1ocfVSdKrF6AGhbfyiuEhiFv8vVgdUezrYomUc2ZZmZVoa52a5mvQae",
  "key19": "iPC3tG54B28C7G5QeP1RvrXc4RN4gPVdu7DbbmBbMZ2Su4SYJZKo9bKsfEudAtNcYukmQjJUpWEDd78UpdZ38z5",
  "key20": "3KQiHFeSYXYG4Wc3n7ckkqCyo4xLRruxeuNziDiUxLddi57PtytfGgy48PBZxM9YwobTPkYaTFmatAdV5HowXeL6",
  "key21": "4WfYiDGV7tE5Q8hmR1hRegxdahCBkTF1NFr4RUyzWhaDsfZjBUFrvyN2VuSy21WkNrPczA4a2tAxxqYW4yebyHVc",
  "key22": "5TrYpnkucqvVUBAS5kfn2ppEUKRkfkdxXKrnpVF1EX1ty4yv7NPgHWhLgDb5GvoYELKkPM3FeBEdqyz66rweCzR",
  "key23": "5M2xfXPgVUUGmCPQhgbwUhzcQkNx8yVZ9PyLfBxoE2y6vptjqdSGWs7ooMbd1euiG1R8AF9DVsLVUqrBtmKY6u5h",
  "key24": "4F1RJWKyRytZ9WXXCNgpKqgTYF7bAEp8xwv8Vjtd3RbfkoCaEN3UYicnoTc1FXugDKyA7qRbvYf1PxMG8avE4RPZ",
  "key25": "5kCkw72N9TJo8uwAFH5Yk1mJyZ2ZiNhoLa8uj73ewAweFijr6buxJg4uRzgXjxCkFVzHec83c84kkeNZQMavQLFe",
  "key26": "2eu1nMJBZ7MRA5vbbrYwGc4ZRKn8BgdsrrUosRTtNU8ejFAtddPaxLe4Zc7f2k9LYm9trNAp76HFJ1W7QYVeuLLL",
  "key27": "56vcBdzsYyDxe2hpv8yg7Xho6Ex9fWZxxfCaYEiU8G2RNPm5jpkWfEmf5RqjVDvrffwjjaijUFnquPGNcYAsbrAv",
  "key28": "2Qu3aGe8Zc6K9dsutPBG3NLPvskqHQAr37XvYGhWUY9p3fPM9UCHfeh8R5u4sz7GKp1Unofv5EWF6uSBoMQe57r",
  "key29": "ivXsC71CCcTpFNJDRSphMPvTfnSajxnzhk66cqSqfFAf6eLG3bwEWe37bmgxoyhCAF5DX7g3V4zAEdp7Rbnpo94",
  "key30": "4VTuUB4MnZjeJcc9R29braRXrxDVYDE6dgxisKZbL7V1VG4PyRxLdSZGYpk5fgd36JdAYjrpTFe6fxyx7RWp8Lyv",
  "key31": "22FjpzenPC4hAqcv54Sy7BfhaaTFHGUW8Z1wU2SfnBJafjH526DqZWp7nex5gwygNS2hrHWo3jwRdDokVCXMgiRH",
  "key32": "5CaALeUFrs4r8xiko3mVKMpeDbVCyqHHf8biSJKwguHLNHkEPefxUmrnxk7uVNeGtCkAnYfAn6WjnLDyDjCqbks3",
  "key33": "53a7ZycqJemSGQmTTUKFUGMQUBDJnJGJFuUN8jeg3qj8CoT2CqNcAdg2vxCqfY5rFTNz32JcscuAcgPJtQ5FHwYa",
  "key34": "2UEmST52oZiv7bJVVscasx1zC3UthP4eh4iEBaNbMBxK9DXmkDNzhqE9GzZ3bWQnVjGDrRd6JBTbqAvkEKAUC7vf",
  "key35": "4t7S3wKgfQww3XxTUXVys2cDBfd88tYVvCcTExaFxkoniNNwGeJfBVxp7GG19Cs2qGbGX6FdHkCs8kapVWr3jaGF",
  "key36": "3rRnWymX54PvqCc1M8gC235dbfuZerVhivNqun3Aie7oN6BJzXgoh7hamc7oTwGZTsQmjgdYz9r3uJ846fZm3275",
  "key37": "5jrXsHiK695A2wY84PwCBtHuQ1ofmBCyiag9nEDHgaG7yMhxhuNoaakZgW2t7jwPxG7rYbyCLqc6DMhDxzJ9oGZZ",
  "key38": "51XwBKdXUTAfa57azQKP51RpE59WetRPtEeww1YXX3dqCBooTia75CP28H2FwXWSYpMvM9Qhpd36NPGtwXdDqSNj",
  "key39": "5PD6ZF5fpSLj4eEzf4hPkbsruYteYaxKi7eX2gHSksXTgVYsQ2ydnoVPRgq5D8tcQCkiHFzuKyxdKK3k9MhE9htz",
  "key40": "2g4HcajVjB2uL8RYJzvRJ17mA5bpK4uP1p8uCJwPcBndePYDDAGSM1AABb2QBhEr9BwLhDvRxtQFyzetyMubQhPj",
  "key41": "3DRTmReLcctgs7fjLASvFi3UpmPJkUdgWtq9G4ZEgLW9fGPGHzwJVnnonNB1wkGCVCF3WrPpYoJ3Jm1zRqp5s3Ni",
  "key42": "3fcFpuK6SUBGi7VRCz2tyfU7MtkDtLKh8mRUpCvymeMYkAkkWHo1bVtVH2DpBPC9Pu3ueEFcChAU1CfYjXV7xAXp",
  "key43": "4biwBG6YJRhYjqBXHDU9ibJ4j4SpQmCydYHFLncMYLoLuHgvE439HUfhv4KNa4ob6zcvZ8YQyqpZMnV96KDiTqsm"
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
