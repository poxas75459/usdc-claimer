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
    "4VvPFuMMCs2ZyYB7StmDQ8wTnCye5NvkmTbFoenCu633QvMWpM3oDAM8c8RVBGQdvJGmeQw75oTXV9GFQUhk2FQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H7mAkHp8UaEJShk7xbAfMpAfwrBiwm2fXfLvFe8nkM3g4VMnd5gfw7LLuVwxHAiQaqb7ig7RNJjYSYwmQtqwq2w",
  "key1": "2gPaV2fT3HZc2qsvShtdr4fGJwynGQDQkRDGX53SUi3LweAqjJdNjkq8kqJAUAoFcATpMsDuQa4WtzuZtMtB5ufK",
  "key2": "4m8eS5eatuN41odQCFJxRRWrUuToD9m9wH6ifRMo4XneqvoSmbkWNmhkTGd9rKYioZKSuYma9jzoAPiJ567iBUQ6",
  "key3": "52djqpw4Ej374TRS2JNsrhujZijktNynm6a7zJvaed566YDDorwNjJ3PuhB5qscheyhkBgP2QBZmz416tu1yaWz9",
  "key4": "22kKiS7ydssyWk97wnMi1RmKHDcChg79tszFqjfu4Ro582wkzcUser9sC75YVXo88RBH86G7Zua8uwsgx7Ehnubw",
  "key5": "5y8kwAafDTjmx6korc7EKogvyuLwUFw4FfxjbjSVNZ6AGa4mCnET2SYXCYnz8WSCbRhmcVcnpM2XHYxh6ABVPc7T",
  "key6": "4xbSRghf1wVxeKm8ok7FnmEsUK6vcdtoKE4Di45vR8ZsEHSfM2aPV5ZB4xTJn5UDUVPXxeVGhNk6vkKGnHsHsvK4",
  "key7": "4XMnxbhHRpqQ4cvhRXJpgqXNU261D1Q2qKKfRknmSrDYooVMXvJVt5ot3K4kQ2gxVU6Rt1HpMPbBd1pyPaDdSgdg",
  "key8": "2QGpAM2MLGJ9UJt27Vdx5QfZFTcLRup6m681MwZBQCYDpnweKhb9fdfd7tNLircHVkqgzNwBzJYpikojNfJTe3Tf",
  "key9": "2Rw5xznqgM4mcE7ohYtGvZceqz75f6DLNLMW2bf4saAm8KdGLKUaEpb2UUjpzym61LfsEAJqDLNBhnHLngF9svCq",
  "key10": "524ug1KgKHN4v9pWQKcLWJJYpowq4cc6euFqYGJ522GmcQBa3eR6WspUJ9eFtWhXbzV1kgKxB7pFRLDLndnmZP4i",
  "key11": "rf7fbzV5NyAQzEKZTSiQoBvwrefdzBFaqJ3NSqHUN5dTSSLuR4hW56rwNpzb33qS7gNHtnj1ksgsPzumwKe5GiS",
  "key12": "2qZgK6ccRFozXtvDetq48NGW9PoRh7s1ugj2gBygFN52nEYRVzjfZed1PVYviQJyG7a1HHzYxAWcRsXNMfR2VSPs",
  "key13": "2P9GDc6hjmKt8Vk4Z7cN2vYBQGgufUDPzoCAj2oBgciJDwzZ2DRuAoBP58sPHjLfaLbf7ej5nadnSahWtr7mDPrx",
  "key14": "3YFHx6FjkgxYXFaEwZq3MaUFYt1AnTTuQuScFnrZKwaeR3tkpJUKHnaGjvKx4BJFHC4Ns7AL77bNtdZQzmwHV8qD",
  "key15": "2qUy5i8qPABo88v2TyVRW17zFq4PunpukW6YGSV17whDz2oovUmcfQM1jNCKByPHUFCAwNYHyk5rnSFgkhVK8P5w",
  "key16": "3H7s3Em3e5Q44NKxEAJnkgAmQeja89VSBTVtgRrMiozt1zhPEYBeoeqcNMTr8H7VcVSg1s85oc7Y6XqVATpjpiTA",
  "key17": "t8YJT25arAWHj96fGMSmja5TDGzUFJm89MwSMzWm2XMUETJF9mmhwqcXfCWhP7USFSY44sjqbqn3hAEHZ3Zvss6",
  "key18": "65syGG1dEJMFdTZb31pMBEbFD1dG5Nz7k3gBytng1htgjnU6puAZz9SbbkXhGSj9ux7jGv7UkP2JvWrqJyuAQ82E",
  "key19": "zsyf5QzyyeEepY1RvohiAcA8FeqsYEeikaEsEPEPixPY5aGoyHMN5JBYR3naEg8tEKmyzCsPcgctoZefNaz6zus",
  "key20": "52ekax8LycpP3EvXATnVF8UPzTP6Q33te4xeZwZdhxg8dibL2ebx56Mf56gdtaQKZrqrXbCNMgXiATUUkUzCv8yF",
  "key21": "3NeRrUay2DZFUARisLxtNtf9oa4WxPHPXLwdVZULFM4aBYqBrmNXoEPSkGWmPCsMK9XtFH59Snb9qRc18kkdVLf8",
  "key22": "2p4n5U7htaMZBpUHUFou4WoTbWDCUmHPhCH8q2K9cKYjt1nX1PSEzkb4ZmADWrc7VNuFr2ppnwZ5TJZJKWzzme3H",
  "key23": "2ZFddE5LwSxFnuPQQnoVaqfhSJnpPs5sXgTPWBm6s5yNFYRGY81227Y4MJHS8TWWYEFMvWdwcrqcuH49BLWjAoRD",
  "key24": "3isF7ViG1HFUsdnJxuvS5741DxLJmSXdigAY24UYLgMiwoPb616Zk3gcthXNpBQvVvX94KmfgSwyrqjsg5Y1sDGf",
  "key25": "HDDnEh6HAoxe8MQ7Qdxv44AgmQ4etLu8SHeDVGB5WxSThSYooAScCizx3WXZkiSU8rUqCrPseyY56bT1NuqRe8w",
  "key26": "5Hn7KXHXdmdVdXtfpmjUgKdggaVZ29e7Uwa1Eub1CL9sAwPdqw9DQgCRNVWhyFy4S7JBmG4gobwfeDT8UA1ozKVJ",
  "key27": "4agEXgGJ7tR1nyoWSGmfYNVxxnkRa6Ec2qvQj1WXaTaezm2dABoay1f5KsMQRJ9MhsCTzCvsAca5powU1ESahpEc",
  "key28": "46tDayHK2rDVsyAyFxRZHwRoyYGLvS88bc8bxnvcAKyYDcaLPWYTeJefoUHpJrrK8qxcJwK8p8cKtofRWeqmpdMe",
  "key29": "2sZXpaQZ46q8qNzWsNnxR28TNNpW4HZPosdW5JKLeCWUR44WY599ZhUTnj4MHSnGxDodqT9DmRq7LMvHxzaG54L9",
  "key30": "Njjtvux2qFK41KuuHjtJtj198M84Du6SmorwKVF3vKfDMbVk2dk1syJZBbbhcVmq8A2CZbRns8jTzpC4meN3Fbs",
  "key31": "2B5CuVDJ2bb5x4rRDUdaaLXCzutBWA9RD45XGswQSBrTGMnuL4yRbbbE9SaMrey85CYtqTi2iFpgYo39W6BJ7gKN",
  "key32": "2CCT9UQHQppYQ5A1FhrCr2P7ExenJ53fvs3EWBmUtDADxk18kjr3L4cJKGQTmCpvgYoYgtVE7J7HzDnVfMWLjzaW",
  "key33": "5L4QnF54LeHXECZ6SCidjYKKCohRtnLvnuTH5V8NQofea8bCJW6woSstwzoLwtckR4eWJchzoec2RVfinwBAYVXw",
  "key34": "4EqFWqJ54CTw7CY138kaeSR6RkbQGD1iiSxxzP5885JoAxFivS11bWq8wc2eMtjCPmvix3q4HMcLVL2jhdotyK87",
  "key35": "3aEBf5ezTnwcoPBbkDWs4Qc612j9LXT91X7tKqorqpgeQYqMWrnA1zmpqDxuYZkezKhrubiVCg7n6iZHGk5FKC5a",
  "key36": "5CdhwoDsuNj8xnRpmA4deyoWdtzXwPEDTp9ypjU89Gpc4DMdEMWJbPgzFFitQnJRxExTsqi3iooU12bv7KdACwdP",
  "key37": "4WeSPMgoLu7duoNaja9u2nvXvpMjaRjzhiBKUJD7C6GcFaEZxQBj2TRKByhXh13kfjRgvvbqLnqehMVg9sSGPwCW",
  "key38": "5mFMn3n1LEL7BguKvTRCwUZjjAXAMn8b3BR7ySWuxBRAbW4t9kjFKFZk4KJ1v5innvfDX9dMH55Mfuw5mzrQ5yZd",
  "key39": "5YKoXkHBtrypB22zZ3swx1sTovmRF4pvPw5wfJmBL4GS6HzFuRN8KM9h1TkECQF5qCM858dxqCeYMLy6pw4Mvars",
  "key40": "jNcync4niYq7TunAcKg9DL5zSwkZkuMrBWiPnxa9httUxs7akmHsh7iVh7EjsohvFBU9a64jgmuzvvEHme4uhtM",
  "key41": "vgghSNtQLWs6Xt6xHcp713uELvgQaT8f7QXKrox13xi6MviPmfEAhTdNP8sVpsq7FbjhfBs8j3LhPjs7hq45shq",
  "key42": "5cWwq9omCmivwN9soqqCp5Jy3hT45CHgREWf8DMAQYx18hrb8APEt2XQgUBVync4bCv3WnksUZyKejKRxCBqwZjA",
  "key43": "4MxqMqX7rYKvgntMkEFhnwgC5XEcCojJrscmNUpfguEQBeVArEGqzg92F2EhYB55MUTRytccFDBbQfzhpjx1i67D",
  "key44": "4s4BbjyNyYcfK3Xa6fopSvhWUKr7e7pwH67vDTTqrRThEzU4bc4NxGdQzbLtfHSo6cLQaVrxh3x9FPvWU6kaGRZm",
  "key45": "DW1j7uT7VYBEj3ZDJUtYdr9XmqsPKMq9MVhA2hWECg6QG5KN1rdV11gCFmXBGugXPcCnsLgFU41iMUmuufH4m4c",
  "key46": "vm1GdedNvMgkbW975wCxsfCKdHABXahaKor4inVeKMAJ1mhSYzrwPY58y4qjLrJiZn8Xo8KqU9cRXgB3vuoiUNK",
  "key47": "48h9ihXhNoyWF1DqD96eSjcKhgzpWXMgyfJKJyQfRsBYatdTR9EcSfaukScYgLnnzNGVYqKJnaeZ8tKeS9j2C95c"
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
