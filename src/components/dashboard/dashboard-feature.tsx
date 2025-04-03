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
    "4J6N9G1NPhc9P1k3n4Kfp1eGzSvpxrAzkhZdXoUioTwTdVKeXxcB3pYB25R8QE6y3bmonr6cWUSNacWQ79HFXntH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywVARPSeprVkHFJaitfFz5Kd6yhUpXaZzErUHSbmN3ei3xENwBWTAkacE7iNvDDVuL77HMa1VYepL9C3eLmqtZ6",
  "key1": "2mNsAi3k4KkxSKCpGu9tjbJGn8FdW5PBGiuhZJw3WAMvXJpaKr6XC8omEVvVBoghiobHwfuEuzRYPdj47wyfsbQK",
  "key2": "3PdhXDJsQmTV6YaMSREHyXZzvJ13P5bWqecuL9KCSJNp2akHmooSCeNoqn3WWT6uJuYEm8rcWhV6uTrZK5j4Z6D2",
  "key3": "31NovHJZbAJGi5LSgdUCCsqNXWiqJUy44GRxCH41478DwsnrUQ1n2iMqgwB8Cs5Gr66aFVG2oebdyZFVT9g4LtGq",
  "key4": "5HdVJYaVJZWMMLY933FYRharkh96VUqrXSPpsbds1omqYQ2A3e5PZobBXmqBfH4M1ZGP9hBypjwMVFRLDqDXt2fh",
  "key5": "3AqKLoY7A2pCwYPXj2BCWtNW1KXKeTYLAg5PqP49WWZ3Vbup35WfFEJueFLEGkDy4Ut4YCf6WhTn2bSBzF4WaXdy",
  "key6": "52q2krxmqBdVC3mty8yvLpLiAuLY3ww37yv2tFBevudGaMBx88VPQLNfhfj1dAW4CNFCDJePgsXAhQo2Mvm4DSa2",
  "key7": "3H4RenyzmHRKQmnPa8xSiTu5vFANgE44nnHabQ9XcSMzNKbZEBdDXNMb97KkBSFrn2kHJY3xmshMhTVFaFAPuGEK",
  "key8": "5NpVszVf6qKNEhnAxdbrRpwxNkVVwdCGZVW7pzmC5BVyzRfdoV3adbKC7XGrJckHYLXVPpqT9U6SWm4p87KQnmQk",
  "key9": "2tqUVRkiKqbAzbDggi4U5NYdL3coYdsqawXfVoLDfawKbQrqGgteTAsWHekgKbLYz1rwWU8p2E111NohV6qcsnJB",
  "key10": "2ULpi7iJoKKoV8MGT4NRyqcYVWfpDM2sBfcHz51owHwHyL7E8dyhaL1HXVjoQ5vMowpnoamMeLmmsLuBHKimfFpw",
  "key11": "5uQfmU1zWwZSh5xUkFBKrrVLo3SsD2MqidvmGcLh7rF2bPYosmwdjDXjvYMCU4hXRjsvXQpWFRhKnHjoey8iZdAs",
  "key12": "2aMgsU3eS98LDQeW9v7EPRvuy5REMui5nQwh2u3JNLnHxGMZ6xZiGmc9K7ZFjVCrPCRemaeFjNMQb4JmKEw6ENzf",
  "key13": "54B7PqmxhkG39YpLjwqruvdxRAa7PtVX42gSdaBHi7uEAvj6gu5FK1bWiXuBBZdug9TrEMJ1N1DRXUDdp2Ke5JDb",
  "key14": "3qcwBr4eogbmFd6ZTfEaYMfHr4B2wyDnfeJR4GxttxAVX7fZJAC77MKEfJkC4NqJxJEApkKo7gfA9jjbfPk1StsB",
  "key15": "4GyJL3ukS7uC4A2qPr5qjvt1YknTFnzVEgzRXXqxdZrez4B68Bx2azYqQnuUn42u7ySu7t96WA5mpPqCBhoNu7jw",
  "key16": "3LjApNgdPUEfuM4mGH19giqc5sjAyXTBbbK4yHGJaZYnnYpgwX4FVSGbFnFdHBkhMzwdrYCzCvHkDRaBmFq1cj7a",
  "key17": "3vKVFXgcg6wTWQNvgLmFXqfBFxHSnSWh99umexe5npLTYGVB5idjWHkYug3RyEZDpYY4DdD6Rkgd1KQswRo4JvE3",
  "key18": "65AWa6BN5eXPWu2PJ9Zy9YfnEmqF945FxcWEUfj1P4RUfCpMsdWKw5oJvRAJwHjgZknBD54Lka3GjdTJAULbXQAJ",
  "key19": "4hab1rgTVVbvxLC2an7okE9WACtFpBRKX7skWDSTokxjfDBRn7iAQL19EeDs1VJ8zp2uCSDHGTqiGLm6nRPsFQ9V",
  "key20": "rURBSd6cPaeZiKGJpoFnDEDLutWudsAJUydrJ6dSSDFFBmz473a5njw4BP3L53eRmBSnkBV76MDQus5SCQo88qL",
  "key21": "5bJXbAj8uwQdTkMZMtzU6Ns2uKFvNxKosEYQddt72ncyL73VUdGHP2EbtWXTuiop3HYvfXustHyWU8qBV7dEdcDP",
  "key22": "4TgCg11T5fy6Qx668u1Uxq6UAyqbEocSvTNWmFgyUGQmAWQYBJA8DVUDBaNnWoEXaEPQqRGhqpgU4RQ4FAnTXWak",
  "key23": "3Z8TnPprogrPM9XnZPLkRs2LXDJA8xuchGhsXSa3hfKJD2Y4nfWddA8Ms9wth1W38J9Qm1fnKDu1x4p6Rw1Tusqa",
  "key24": "3vjUeV5nH6JLER8kgjKmNoonADEi2Ao7s8JjMY6bPniK44bDMm4kT1JXSGBzh8WzBkk1iwpKGS62Efq4cktNW11W",
  "key25": "CSjy8G7p7AnRJBok9o8HmeAztxZQsk7QwpoqWoAfhkh6KJV4m2zHirkaC9BYj4PBkxE2APWdiKQi3NA7CLtWdqe",
  "key26": "65W84hz1Uifz5xwyo7pe2jMjwDLVhVSMimAh9LicbtJGBp6xGFDnxkTjYQCMUGJHNYGsnsLqWmGfk318GbXjFg78",
  "key27": "XVrdp15nsNzw9FrUEZ71QPcJTef2uNbTK4rrVmBYi1ES7vKzj9cCC1fQCuotxLJiBemkjQnnjubJUmUXWMg6Txn",
  "key28": "37H3Kk4iEBpkaTauY8Dh3vGpNUfngmxrcV63G9ZKhJ8jZRrvyAxgyfw94VfXTj5kmiRQp1seNVcT9MAgHCMQNoss",
  "key29": "4FcTqhKt2dLcsJ4d8JtnbC2XgwHEhceqgtDB6xDQcP9hjXXNL9MTFHhZW4uSYkeCQ6WMEgTDJ73kj5MyTFvzwnW2",
  "key30": "586xYu3yfZmjtFGB4voNJyvCiwPBph3AMsrMS7rkw94KZMG86FjJ8cUfUMD5QJgRLRdxbYmvNqg6hFAWyPYf96c6",
  "key31": "32BudZvgozDDRHk2d57Y99Kq9G6azz1ytivXsGXWPGG5KJhss2XxSQ6gFx3tkGR86aLcADowvN8wWf79otkkxHQq",
  "key32": "536EHiBuWs6ivMXYU3bZatc8J8bZRTH1ZGTyXsuQD4r5zWydVrcBKTFC5WkQcGPrd5WjFNyzpxD2Ko284G2WhqqN",
  "key33": "2fy7Cao4zhdTLnXKSBJ218TfCrkeNhCEoXbmDuwCZZ1SoKMrsC9TvYgycn9qbWfbxxAafsNdpA5ut2Cr8yfNvsAU",
  "key34": "3GdAK5wJK478f6cfNXjrLbHPdk8EfxKfTaWjyHDAgs6gV4JzQetcW84jpUzB4vQNyuyF1JyKmb8ZD4z3rvQ15v8b",
  "key35": "5u7QBaanQ9scPCXSzHHCYSiybX1TJMQbFXyTzd6mC4vLGp1XvvYHB4gbHpRZkmnkRA6yaWiNxMhDzoWo7RRQSrcs",
  "key36": "4mTgWHdwvHrCpeFx35YabBeH3WEoFemzbzBew9qMKALkteubkvkpaZGySmh5FkRy4fTpJ2SEfV466zjy3H1MzoJV",
  "key37": "64HnP3S9FadmSXSx29pjp8oxm3XGFcx3oMLS97foJ3amG8EfqkNZAz34vnt7QUYXqbAMUHTntEh9paowhuYJy8F3",
  "key38": "4KvMyimcY3SNXy5w8La2JCEirjfGRmEHUZzW8xux4R3jKeSF46FkkjFTL2AYKXTm4AcvKGpxoQJjudk1UgWj9MNo",
  "key39": "4vLZWa9LQQtXVfcFxS6Utyy3H1CSYPW7DWZeqvhy9UzVRvEBQvKLiNxrkx6LnMMfPf4RqZP1UDqRFPvxAXmWnghP",
  "key40": "4qbGFYm3D4MeFnbTxJ6kRVFWhurJ79V6ZHnFoSMxQi18Po3t2yfp3bs7f19kKdLagCuGX5bjqENKA3y6G6X8wBTV",
  "key41": "43bRV8GEVW6hkt2j6pvxwy95AR2dTQojRaVcYVfBV9ts8LExUFTsnv9ZfCgDtvUWrgNdSnbWNKQKw5m9RijgoBi",
  "key42": "4nHLWqYpmFDhRrQn1ERpKw98krZphrCoDGQ1GuJbLVU8LMYqofRsirX1wHwV6akNBfMrJoAyuaSZmHGidjSPgUv6",
  "key43": "2BbGwtmagA4FcQzvF4LUp8evTYSdKJPcVpuoD7E9uJF5uhQpqkmV1ekio2JkQyTa26at35Q19RUtHHQtPQTEnYmK",
  "key44": "4ufeaAr3qBbdRdiynmuaKFGuxi1Lgs2QVvQNLvZq2KbXWag7nwKvCsvKag1fm4y7qwdPpGwav2yiaJuUX7Gcv5cy",
  "key45": "45JNHNeJ4GcuHYgJYnhV78S2m16YigAK84tLSndJXdF6o3e9c4WD87X1CoxKgrBbkgnXoWXEtzi4Apdyk6SmHhMz",
  "key46": "5LhVYebNbFQLHAU5SvXGU3sZZofwgSSn7Y8ZxtBk8rDBCh8XbAx9YN3LjhVKiSfs6R4disbxG4RFPHDEnqo1BSBB",
  "key47": "muGHBpZQsfm3p3cvud2J5RpbiYXyckrFwhg1rwSNkWkz8vpz6VCWJHNEDrMvTV3D8ZzvVcUCDngFNmJBqh9ZnLm",
  "key48": "4Ewe4Nz9dWV6PzMgcNL5Jhy128e8aiakmLZmMXqcgQLV4rf1W8KQCiWXgxWe9CR7cDuDh8hF67LXPhxAcpEt7cRv"
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
