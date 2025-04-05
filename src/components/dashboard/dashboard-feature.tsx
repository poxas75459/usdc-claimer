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
    "3Gb5McPSMiofz7cfqHwhYXbVQizapMtZcN3JF8n91JJr35AT76jVcLq4HrXYZ9ZFgetFRopTqQ8kZZpZwoxMkwH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ck4usL3b64MQUpWzbM91qiukiEkHCHSNEV5eDPXCa6iey3nkvNCvTbLPUbQXmHNmJLE2SL2YLSjAD13BmQyaCKM",
  "key1": "2aj1r9XQuV7cgiRDbzeLhDKu9jSHLbvgoi1YwZxjp2pFuxyXPddxcKYVmMCAcZpbmT2wLEgcUSYcWWS4gixu5E2W",
  "key2": "2F1AaDYg1Q3szWJgmvz1G8MV2HAUXrRoAA3g14WJXdbMLNXCsFz7SKCxzGoJXYTCtubnSHYZY2P4APDASf2HEN3a",
  "key3": "iKEqrPLpGpW55oJPt5xnBszUJahkqkyGV5izAPQqp2uwsjNC86AofhdtTeBppJE9W4z6bEPu1LikSTSxfe1wD8f",
  "key4": "5b1vYEdSDNWjSA9PLyAWBic3fyoZ9SegfZ1Xz8nyLAqSEFLDGfFNn8jkscXUFBESV8ZpWvNH1FRFvUTAxaVDUzZH",
  "key5": "4DRwTHKeyrSzWk2oXYxiyssEvdkhiH1TEQPktq3qxdsP8GSXkrT6jQUo59cUoN9W4e3JNY8e63PqEEWkBeytThgN",
  "key6": "1oxnrA6Vz6XTLcGNXiRfMxEKXQ5vuZ24pWaXrPj1XLbBEApo6VXumhGudHzuksZDhodpkyEwR41pMVZQnP2CEAu",
  "key7": "3Wa19qnKr2ZmHZnCxxAyggrUYye85HzDoHLjgftxmx7iUYBVedByF4pFhy7aEgaJubLaL5r1geppmSvDaJm17Pdg",
  "key8": "5sbRyuyeQ9V9C9hk21QPvLtzCbzFArg9aTT75L7jvSqxym16ytJA8e1k5rzCxcVS29Y58mBmu57z7KoYVXepcSbj",
  "key9": "5Ly3P9Ju5bRGGY2G924nYYneJYr3aGdksELgESWZUE7jp8GGcG41skrzo8grqTYP1hmmRAMCpyTVVTC4QJRGeRyv",
  "key10": "4bikFaHfbaxBptNGfBLN8tynsNL9o64zQg3DuYdyVWD5f8Tb1ipmLTw7UT57F47t72E39FUL8QgF1JQgQUAS1VkN",
  "key11": "v1GTbEZsRPKoy4YhytUi5zCTzdtuyL5GWys5JZKHsFZvjDcse61KjctmgtKuuyANbTfX9kArsoK86grJ1NXVznE",
  "key12": "3RG5SFtY9m9mNsdTGUaG2SsqcaTVtbWDMSDpn7XB1fWuw1kD33HRs9dA4mMxkn95XWH7HyCE3PdXjRBB5Ewcgsn6",
  "key13": "4jQzAEC24righnnkyJTMgYCfZQ9jdymLEd9mE3FppRmECmu1GpabqbaM1ytjqGdtsiYWdUAVhH7zCy8KaAcALxdm",
  "key14": "2R6TtD8HvtKtyHVbvNiP5WTw59RFURKyQ3KhESe3nfdfgdhTk2f42hQgyBVS3w4rjL6erMQQVCgLsutXbk4kZgWH",
  "key15": "35NJVk7JbdvM2a7amxKTqonfGtmzSMNxeTVzgQt17GpTiR7qevM6w1ca6cv9H2SmWNZEEPDBLJ9ZPHgxPmt9wx5M",
  "key16": "5qTyiJDh4Ax6ZNZBjRbMJcCc9rb6BJiJjgz8EBzabps4gQ1fPwbsV7mqmKtZpgNmHHWrTevao7qZwMFJKeWQvSDs",
  "key17": "KFNR2NtK9NaYgCmDTcsPYGLZK1aEyGCjs2oaiR1GYZfKdex5HToRqhx6RRnTRuSF146uUxh19QxyuWDnJ2H7wda",
  "key18": "5fwKCGQLNih4oDKCAu5p3CUSkCrUppYPUhLija6ipWK8tDds4EUzQuNem8mXiPuymv3ci37gKik3gWkG2thNHEJa",
  "key19": "5qu1AqwpAy5CE9SqBonXva9NSF2Q9Bq5wzGUYbaRFn8T1gqVp7xSYn8Vhmtd2Lod5ipJMApwa4bQpqYnRTay8WyT",
  "key20": "335DgitHzmPsjrvJig8gwXYumQpp3cUC5fodc2ktunXh7oiRUC6xWZXaSfRne5u86Xw8FR8AQvvdjkKW4k3AYrH5",
  "key21": "4kCZyWQNznx9C9Fdfz9dM1eDwzt6b8inmR3ELmLw6AGDq2t55HxsbYhxNARCnBVxCqrK5ZqRzRH8CGMz9bfP9J1G",
  "key22": "27JnmxxxTrdsqyv32xcExSS1XiWFBMypKhwjPnS6SFEAyKhs3G7c8TuEvbta8FGtc7xjvoDchY4CxPrDCxMbM5Ae",
  "key23": "2qWw3mTmkRu5S5gZNYGMfezPnJ4Q9s3Ds7rEjSZJWsVkDhavSUjjpVNAnfMGQhioZMohPND9zvJEi4iqX6BJYhu2",
  "key24": "3gp7RAiy5mXEnhYAMGtb7FDLuRLSCMUXy3CBVhUvPtkRQJrxqn1ECSRCfSgue4U4Pw5D8KTXHiBSeowKv5FeTLuq",
  "key25": "2A39imRp8RQ1RpzCb3Q2ekAiQgdSVZ8fP2Pob3MgjmvDBJgTdSHCFLgVsE8QmDonyRWoF3dWLMx5xEh8E5eWjPgw",
  "key26": "N6dvw7KBX9AZ4T3W1wLcKyUTyaGDY4dPHvX9pRHvuzAsx3f5FA6ZZXDb2L79TjvS1HchVRfcootTXgBiD6uUo1J",
  "key27": "5bmzoJR5Rk8Xw87r12883QsmfjJPAN1NnZdZswutKxEw9129TPi7ReMMqKNAkWehQMWktPvUaxuiHyZxBj4kAizK",
  "key28": "VbrBuWxSMwem1ATuScYkzTdv6rF8WfdCo6p9NswuNdjRAHzqyNhzt3t89xUuiVgR31J3gwrWG9kRW92ujKxs4Tc",
  "key29": "3sxc5Eu2tnPR7rYTZuSct37zuCJfMCywBLcJUXZMB8aGdkwGsScikonr7PHsznQSU1eJ1nbW92ipRACHsrduozht",
  "key30": "2Q6YLEEBB4Pakn2vQqMQJJAALsNmLA4gSLScRqWjKA6zY4RPYfKz6nzJriijXYy2axqYoUj3aGSijq1aGBAGx9Ps",
  "key31": "5S8HE9m3ojs3QrsqNZH12adBPqVKhFQoT7KzoAXbX2N4FKFCHtLhiRF3QhEuXvypCVmsignoz7dxW7TJ6CiEaNXH",
  "key32": "5Q1YyZQiiVuRGBDZvmGE9XtDHcrQZwQSP4D8nTmdRpCoQKDgwUXE1NxknDHULYmbdgJqg2wcuWkCYc8YJmMckX62",
  "key33": "51vR7g6KVEbJqJzNBBvdcahPVoF9EAQpYbeuR5GEqEwUbw8NnxBD7KmzaVC82pLJ3kHnmfx7m2BonVYGvAQ82uGa",
  "key34": "D9jnapkWAC1pjRWpGY7HbMcfCHSD7GcHu5zA7GGkauQ49ZvQzK2aGU6DSvEdq4b698oZxegDAh22j3HaNpj8JpX",
  "key35": "4Lh8rCAzGeh19A3oDfRjgdcykPFPRjdWRHsaRqjaJMEanyM6RF3gPTzj2eruM5gJJXQQDzdxmqvrSCQB3bF6sT7P",
  "key36": "42uiNHhCLTswx9MeZVdfRpHBnoGFqLW6DSGLa9f1V1ehctUrYR4g8nzjU4ffKUYKHN7ZJP4yrnCncMvaMbgLXHLX",
  "key37": "5DmCKdqT5fyxZb98witNxnbrYoLam3b2EXywEnchsmCNDUv3M9AMczzC91mJQYocTAfFG5hcLgtmC8uN4DJJbAC8",
  "key38": "eM6ioP1Q9N5trLSjHfrVLSS7z5PEvN6iFWy5twUtXK9Xa8kkDgtm68MCspmkkyEL8pGFQXJTJ7KbQfKGriMRwAA",
  "key39": "P1fdKQKohQMRceYP1wdCfU66FjndmDzMkL1BhAWWpF4XouQ1oj2m9SfFkeHZBctS5rrns759JrLeoMtWMrvbY2e",
  "key40": "2qNePPpamNbvzb4ZW7pF35NJUsihiUwPeSWUiqNKP7eNkqrSyNXQ6auQ8Xqy9eZ1LTchn3ngPnNV7Bk4aWq4Hobj",
  "key41": "3QFyLNYyCrV9GLHhDZc6DYgsbqVsTfMgW5raLLxeWPTcMXa4yphhM79xn3iMUm8awze88SLVZ5D95Y4LxAwJb6Ve",
  "key42": "4EmK7whG5jrKm3T5FARsmgJfS5U36sk2kpXeyuzntFZSumnhAJaibUMPo1wHsLgSHdaLHL5uPSi4H66B3ge88h43",
  "key43": "5s31Y4LE51g9J3GynJxBvHbbz9XUCdWPKwLwnscJEMhwREbGSyJX2QrQzw4UMvuyGxGAv1FtoW7pqvzrjqtjQohW"
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
