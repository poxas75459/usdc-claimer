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
    "4aLXgL6QiJZp1XFwcdLoAhjxe1MNd9LwK61kB9vvtHL96ukMghoWXvFpznnxwPSzQ1nNjUBr9ZmqcHruH4uz5MXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkAd4yHCahkFhhKusKBsz9nhUQUqCVyA2B9Whgvpz1HM89F5a7m7WyL4UeJp2pvkbrzhyDfFoAmoxFjA7iTV3Z",
  "key1": "3MCv6UDqJA7akyhPVX5gVbx2bPgm7FQWcmftkLyjJYg1ZyaxTJJTSseX4J2HsQi2ZwSVZDPNHk58hXoH4EZY6yM5",
  "key2": "2HeV8nXhCDjt2siopQW7vg6fdL2Y2Vqb3RszY3MyztsM6rK2t879q1vgBKQvUBMHKZJB6rpisnwCTRbzqUNPjzxJ",
  "key3": "b6RdguS4QNStzmAZP16LMj2a8ZXRAxVvjskX1JQ2fvDtws7Pe2AVdND8q5fQiMebRb3bydNV1EDoQMtZqteZhUf",
  "key4": "3HrHQbWSo7G4Ry7Pqp4k7KFVYoJ1Qqe1qQCwqY35YmqibMzHeayFNzpUmomvdg4CKrmoSxFPHKvCsJvBPaoL39kW",
  "key5": "97tbNGAijTxu5VLfXcC39uqX2x98fQmm2iK4Y6FMHxAfUhBwnpjm18TJeUhFTcz67LASVfUocezXrkCgskbmpUL",
  "key6": "3TDTaCTnrkz2XiwRbVRwV36XgXGwk12FoqD1PV8SPHGkkUka1LxcyvbDgdhkCWoU6nudRqEzpBxtbthHVMC5QDAX",
  "key7": "qK8sR4D5DySNAYipEBqS5edKeuMyFkZb2HvUA19h9Pr8CXsDhSnjFb8Urrz8BcyHAy8TmcF4tVBWKbN79MqgXsn",
  "key8": "5FiSfojzKK53cNsoyhvoswsHa5tx7rLLLVnek5johms5jDLzvaoKYpamf6Zs8rDVSkLxcbyRZaxWUzK2iXkpmsQ",
  "key9": "3oPiEALFUsEPadEpH1XFnSUo4UmWtC4QCTgjBC6sMKu8F1yruf5kj77twejTTutySvirtxYtkq86iVtnGzzvtkrg",
  "key10": "5vJaQ8rgiiAPBF47ayJNtTjfGzffhvBE83Muiw7CaFvA7Ea4X7iiUWPooaxV2u1cMj2gbNU5gNZPbRRRQGGiQapi",
  "key11": "nEBmrF2EB3pgDhohJiAwFdudmJ466dTqFadpryk25mBCYS1EsXSWeJAB9nKE18gGEGv85ZXxn8q3STeS7XrvNYP",
  "key12": "4wMFUeHyymkMbU27R3MQ4ErLvfkrBKNDNKzb1uSV6fq1GTQ39RUcTEfLFpzEuGAjiEdTd4PiLhKAafH6mmxD52N4",
  "key13": "2MUM9qLkDCgW2LWPG1b3NFHKiSpPMwiCQts8JupHM7sFnAzgduNzd3UU8QyX88zC6uWPdQqPWQQcmod2DRoyaG73",
  "key14": "4kW8QEKqB6c87hGQ9Zmr1QmAEK7ygr6cMYjD5uoNtmpytea13hH5fkWMrrkVYPjPFuysiD3UJ7ncR7daWVdgcwLP",
  "key15": "cvRWyKhfCS7CkLPGsPqR9um7z9iy7Jx6R2uA2NDfmhzH72ZbGe7gz8QLsgJksPdeXH3b4KaUpXKEnuVPQTbkAZE",
  "key16": "6Ld83iwdPCkc3fKXsS9epg4knCQhqfWRtwGGEGUqvmWELegajMCPGr9EN8rawv2WqvrmWTbmgBuxb2hnT24HusT",
  "key17": "Eq7dheDYBXymsMfAEaR9wQDAsm4Y6NnpyxNtETx3kHXcZoyA5wFgkeE48wieUwpzLG3HR57cjPX7B41w5KdRZaS",
  "key18": "3DxYysiPHuJDMRXjHQ4fSz5soSuGGxKVWxB2K7D1D9rzN9rXoPuCz8DaXfvmgKLEQJdc17oEvaZbmQLQjR7qAwVW",
  "key19": "2A8o2u5K1K6mVFuydmV3GtJeoLKgG3yHnsM75XyEPhtvYZcTpi7tX1S3yVn22ZsV5dTtbq3teAy46ZQuU3xwkNKp",
  "key20": "271R5boJE1wTw2azspqCfonofN7nKFif5smB2VnUXgAUuxdEPQHcYx47AU9yUaz8rfLvvDKnwdt5QLwscNzwWMFn",
  "key21": "2f8vjnXJaqhm53iuWL84LpwRdvxffdBTQyBKHjAkV8qRX8sew3eDpQ7ksWCumPbyAVACvmC8ijNNgDqMLAHKnRjp",
  "key22": "5oGCpsUAFrCVtFcaJRiofxMJDLQUAhrCUniqyUFWWK6NEqy7NsvcmE7g97jX6rWXoM72ujSgidBX5d47CsXauSog",
  "key23": "3QfPDHPjVR5tMrXMCEkdGUrvfuK2BddaoQjUPYqev1gUPWf1rhnCGqWWdLCZhyv3U4nxEbqH259uFa8vkzw8ey7Y",
  "key24": "ZHU6DBdjnhggkDEmdvNWVwJEJwLQ7n2N9YnEwi9f1tyuHniCZ3rqDBKhX4FUErUGzr9Q7J1xa5DwWjzqxmjdLKD",
  "key25": "2uaud5vUvYXMqG8NPcfEmH3hv42XRsmNzpzSiE9H8kYMUi2wortNpqCZD4pSP1tN17Y8EeC4W1sPEUiYAULZWFmL",
  "key26": "3rXEze4W7YxT7bvgwstCay1Y26Vjr4NBH7zWvfcQ8dcEshq6v6SMRrZLBqDHKaqTgrhL3edeKk1421SgorbF5xjW",
  "key27": "5zXmsRjMa1ZyRyVp5gvJHwwXmMfTueoRUk5Yvrihe2MKE7tgVyCXR1ysbYrvs66ebfDoBaKNEE8vM8S361D9H8gb",
  "key28": "5MXB4bKT1QkLzo48tdGG8ZTSPy8zSvbLiYev7nN8743FjPfmfJbkgt4Wo4EHeFrNJqwuiRGp1qrWikNJnTTMTk8a",
  "key29": "ifXwgwdVRwq69eeYWaaYJWryeyYoBmmFzZLkdun9NXfzq7x3vpLYmPeQS8GcQJdQpAAo1AQdRVGzkrimUct3Ctn",
  "key30": "4HxekUP8RKZ8L3j2yy1sqov4dLEX1VgLa1rStqGaNTAN5uLh4iJef1uXnUjeEo189JqpnstXUn2BuP9GWLJpMLdK",
  "key31": "aV9S4LN5ZEmKAiSr1CB62yZNZXF28obafqdmnDgEecvQLbcoembhmnsb9ukyRiRSHdwEoaRopEVt12XsGd37NBo",
  "key32": "52YzAf9kczhJzXdjEPxsg733DabJ7BXph8HUncKCaaDtj4hFMX676YK8qiUEsR6Fk2vKXy7gJpUJTZAGjX3jwTMs",
  "key33": "4HT91u9yVRqqmt18Yi5d9EQiTyt4wdei6pwayoHGbk6kFGdLTa8AiqHzL6jKR1akAekKxwLd8R7Dt1mpJuDuNu2E",
  "key34": "58FN6AU1CdCA7aRgyBinoUnHp6LTCMhhnG16Eqj4JbNdggBvczQXkWgS8GWKMn7xrJ8KXSi21TyEZgbJobCQEqdp",
  "key35": "4KyyG1Kkkccp2Ggo9wQeCoSVrQqcoF81MmHJYAWhKmkH6XGLBtm29Du38y7N5qcoNBQ1V3yjEJzyvhVuUQW4KtFQ",
  "key36": "3GEoatFjcHVVdko3Cu3aVAZuSR4VKFhzd4ajuhXoWuTRnQ9Z36eHw67rQ98mATB6WPEnauXx1g6UnZ5EDRTVzBmL",
  "key37": "4ZKn8VKw3uroXPiLHg3pRR6LP3EG1JSTVN8Wvta4C1PqUkLS2xLhzLHAGK8C36oJgbCThuAregZbef6K1TY7Hxap",
  "key38": "2QDUB4px6GxJz9fd3kwokAqM8KUgtgMY3a8dYndEVofprMHY7CMFtWcNr3kbLCTe3NKcQuxH62DVtCpz3Hbv5hPn",
  "key39": "RWakeWwrTTy74Pex4AqcMkoTmQwFQ8za1b6RZiTeZUVFNafP5N4c4bL68RFDSGWobzGY4BTfKRhStsY2LjiKARC",
  "key40": "4Lshddy6K9RUfrdD2eRd9pUfm53WXqFDa12mtNtuKN7rx8JNYVFQ8Gp8M3kztLtyBNETUmQsN91DUCiMT93a5J3J"
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
