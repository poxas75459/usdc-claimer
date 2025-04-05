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
    "3NaqfcaqQcTsKKGAuWTynCzbe5i2XXPjYCLJH5t2vi9XRK2ua47utfkSF8exNGHapdPMNTC2BtvUEiyKaBmFizto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QcDn1Eh5FJCtR62QtFh7uxDeytbsYYh8sVmiUYHcbvsEPviB6oe97aepfYmgYn7QUQL2BWNUxeDjQsJp6CQRFcy",
  "key1": "3fJbBszzF6uP77kyvmf7dLL2QSxpu7W1B7c6tQ1E8Guktsdmt6sbDDujg8ahan2QsxeZHfbHb7GZJPwCeFifCxit",
  "key2": "2StKXDqmRJoxnT7mjZTyJtaz4952B2aggyzZqTE9bmH87Kah8buXZaAYzUC4MmyZFjSBdb8rEfirMhZu7ErC4mnE",
  "key3": "dvv2sU4bsA26E4qDaX8qBzrGxkCrCCnM5K9M4Yx1Rhf92n7tmdULu4KKhQjQHcUSSAoArpk3xnFzxCFHNqoZbdG",
  "key4": "2GdDbPmW21fWprbi8W12hN4312qya6MC6xTbTczwEUADU3NuBRrJCe9Nkmz8a9ocTbUjYeX3iRZgzK1dDJs8RAjB",
  "key5": "52vWivtNzd183TxG4MwwmrLu8Ph1qkphnTCXbPfP6VqormpLpcpYaaiqsHVN81tfvJZ1y5xipT5z8Dcxbu79xGPn",
  "key6": "2MqjGWdpacHMUcAkJSjP6N8aoiZkFkoJdhQPrDm4yLWt7meS3NqYbiXGkMP1Y724KFZZVBXP7H7RsJrrbZ1Lcutb",
  "key7": "5r8vTzqHkBPnxGTWtCxEqJgw6k263gthbVcRidZVaDRd2558VX67mnEMPPTB7Q735c5GQW98JG9X4ACp9rM1FXuV",
  "key8": "A4toXN65Xdeg6xiY6rUg8vZ6DjGBgzaPSZDFCE4vekwDw8wS7L5cGyFctyUHLgMLpBjGfoRNNeBsf7A7FnDugp2",
  "key9": "ne3cJxiQhX6XZfGeRMx9VYXAKREe6z2wV3fiJtVmLumBRTQtY83uZiZGxufGCZERAk9XQqZaR7nwsYgBT4fs4mn",
  "key10": "42rVG4suwshE9TUPKBHj3LZZhmVPB7x7pJEM9cyZujP2GuT5QKi2jD5fQ5bL4LQhCgVJG1F9ipkmymC7ZpnEcsLu",
  "key11": "26rgE6mQubp5qWks2T1zrz8LSy1ctFPYoszrMWebeKhxpUZ7f4RtKxykg7BVkb8j3zHtUEVN3kav1uJq4NHMQeRe",
  "key12": "dhgNNYbApLFZrwV83nWQbjz1EoNmG84tH29pxW4MeigU9xwEmZqbWZ8BJRn3RCyjphdksby9BhafvPNd7ATaXcp",
  "key13": "4yneGR8xodymwRTff9fG1uCkSGQk2shUXZfyF7JXF5FsgKmnevWvGL5f1isH4oUMGUJfrz8Z5EtujbmrK9HgqqPV",
  "key14": "5r5x6H1FTuLbavH8Xq4kHYKjLQzyqMLkoBjuYXXcpfQuxVsVNBQA3QzhBXrNUaHBSL4rw3bgFvp8NqtFVEvDBrsP",
  "key15": "4Cc5Fnh5d6rbm96rjgizd4NhvyFaGai32quZMbowHfjBdnZepopx7mbuzEkKAYfk5XAuwCvqpP8s7kr7zvk173HM",
  "key16": "5TYj32wu622StsBB8GT452mo8DJPFiAXvz3tPHYv2iHqoRG85LjDsxf4DJq7XEVjbgJkPejRpTZQUPAdHjXuw3rh",
  "key17": "4jzA4hzafQmKq2J4yumrUuG2RsvdeYpYFU52gNzS5xfcWUGR3oTGLjWjv9Ano8tKocvHZ8VJwf2iGusmLi9N4Yk9",
  "key18": "4tBTn4k1zTiKMr1o5UDdDjTtRjaB4WT2cEUcsrS1WmhamRAxDPMjtW6JZMXU7QKTBzxti2Pxys1ymrtnWrZbw4G5",
  "key19": "4SgLXpAfHXQzQPuTowjpbiyyvGAe1wrWtsCuhy7xxzduPt1SMpJDoTcx4S7bCRdMxPRDJKH7KWTphkVaWBbRrWfq",
  "key20": "sTHQMpq5Q8pS76kwoWoWkpXDaGL3KDPLtztZggYdwzP64qMJNpuXCCRYQErVUyZBZwGD7JMqLPUnsQV7BRKudsB",
  "key21": "3yfJJRoTJfFfjoWn174w9zgvwvt47vqtaunE3toLayrw72UqpUhjSYtD7DFVNiSjY2f5XVGbchAqhgjXKEYXUzrf",
  "key22": "5RBXdv2Gyy1mgGKHvY7SdXY5H7cRYX9zqbFg2ko6QynqEeKmrLKwKbzhJX6U2zVMwB3Wsn8vozrauBjyKA8rPpxr",
  "key23": "5nSCs521uJz1f3kx2P7fZ2oeBQwFUsCsCynuPDt82nRnFf6nvk49uuuJUVu22Pt1wBG92xXPMc64QEP3yianVHud",
  "key24": "m71VBafHjVMaGnDuHzpuPd5NJW5MeBHtmWeKen8thFAtHoPcSrC7BHJ7s4gLryzXQ3i9gGcsr3B6uiPH141zUSX",
  "key25": "4EXiCBErdNEYjYabxTCjQckiY4uhpijhhEQwFnyGwNgiCUKpvtfpgSknJpBQzs2TD2RSiT4UZSbdQZwpWQDNDjTG",
  "key26": "3b2UvN3FEtVrBVCeTa4qY3jiSpiBzgrANafgN4Czqh7A3eZAdGdr9XpASyW7dmEeUpczztt5H2YyGaEk1sCriqU4",
  "key27": "5bZNBKSY4xsaJRZhqLNihZBnbR5tJxmdhQbJR5fbFzPp4n6sks8iRWkt7ha9sNa3379VRJh4tVPF56BomtgQxQb1",
  "key28": "2W6miRL5Wtg3dasbZaVNMvajVpHnVrrZTLraHAtp8FtXX9yzZ6tyyK6SapNqtxpF5Lr9fnQ4KFdJh4hVQFhBeV37",
  "key29": "3i5E45aseHC1mTAEpDbwsdtLxeHoE8ngbRF3gWBdoy3XRLXwrKTGdQBRxiBVPrZPbv4YJVLxzLge3jpWoFooXYkf",
  "key30": "3eiP8XMtt7nJhfjypzqYnfUBbMaLMpkP3kU4kti3PCVayeeTqtRZpFPVgmfahBLS1iTAi4xVQUmYtmYcqeZaFXhi",
  "key31": "4gwvCk6SAmZei1UjsHbUxBX2N7wG21WvxW6vbLe5SkpB5D2hQ6pXWkfJDTvsed59X4kHEuTjnzRHau3hGgEMWyeZ",
  "key32": "7KK8DcwdLFzywoyGpb1KNyN7iUvRXk9rsDxayupvtZnwL8Wyv7AxHkLkEwGu7m2D3WmqU3tLBMebZGydwWnxJwG",
  "key33": "MuG59ktz2WvhWb7agKa6pRy7xyZwn54CYRdrzYvuuMenY5UhikL29kYbRStbPZg9opNbbqcQcKt6SyLMVH4ZAr9",
  "key34": "63e9c7i5dEHtiaU1EMVY68ahs4yh4aqjcJXuYYW35WXhaRNcJW19ne4umfdb8HkShRvPkqykeM8hYoTbAAy7Cj2v",
  "key35": "4TXbLVfEp1YzjRn7ysBhfBtHtWPK8vujNfHuh4ZqJdQjqX41vkK4TmNK5oH2P7oyLFVzEDbMgi1K98XDxrbUmfHp",
  "key36": "Cqbp6uCc5e2nY97EoGpYDrDNaefQWHMUhRyVijTG55vKF6YM7Q8RiPhw6yhF1JPf2oaaMh8GQGZYpvuRDWzL6J8",
  "key37": "4Un7RPHMgnumShJWeh87e3AurrqaNWai61dYH5QtEJZ6ynqft32mxWoqamPwvEbjDN8eNZAqJU6AipYuHTrhYV8N",
  "key38": "JitvVkSye1hHUcXKXggq81cBZw93LCypSPF972xdPmH8y9wYUhi5e1cvCtx6qUpnBoBxXn3N1GokQ8PtPN6EEaF",
  "key39": "sVdLEeRGcBXcW3SxVck5u52VXEUnm9PqNW7f82af486kji9mFfnsvFerPQh3GJRcJh3MzmUSC5BsYEfxSnVKMaa",
  "key40": "5v5Xu7U7exVvhCfy9N5hdt2BuwiFXDgjTTMntv2d8pMP5maRNg6Z9KUV91r6ggbfAdcvkFPvBfdhBT35gmfXU7e6",
  "key41": "3FmqUu9XxzYUjP9mNnbSCZeKVa1iXMGcYCgoP2Hubsar2iCkbriiEqAKqGb3T18RFGakxX5zvhk4xfY6xHWUyjMc",
  "key42": "5B3kajiGzptMMrUhqVAZvcR1MNajwkv2XrMFBFit79y5B3SdDYuKNQyrGZBBS5iYYZvrzgeoJweNA4Tk2KVY4miC",
  "key43": "e6pDkbBX2CynLoSpgKNm22wwEkYzjFUveVmt9xVM2yk62RHnSKG7UPm5vckpFujxxhKrnZPsqfhdiX7yFMorGu1",
  "key44": "55SqPexZtva7JnPABrqwThHjHnGK9ypKqBegNXHKJ1cfFtUhwvTERoTBuaimSfghbumm8QPX6u9sjwX7sB8f4S74"
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
