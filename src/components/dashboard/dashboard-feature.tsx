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
    "97riCDb3txUPdyBJHseHXsaRLC3198F19GSFz8G37Gy1KVh7KDSFosVbK3rB3k7iBRThmSzfhoxbUJREsS6d1aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCKYdj4ZKMK6ZoVKj8gTcQA7usDBCyqtAJ21UJZVhkGkEBfjm8gzmpNRa1fjfcNBTV8DuDhFd9aoBgGAZvHbSEp",
  "key1": "Kg2MwpiUNp7zHZi4aWT1xne1R7XDNczXMhNXsmqMxjcMnEK8WnXobV2UYruHwDTySsPuMqG8xRQ9HYH1bNUUTMr",
  "key2": "39trVYrCJkmbzbbuKTDkLEcJ1XyMe5zskHYi5LBLEtSprryx67fGzb7LvSjF2rnrZy3dB1QXrjc7oG4hNx9fBaLQ",
  "key3": "safNNHRX1qERDZRtJysGtuPWGqMYJfsxAybb4XEktPAmgTDL1aKqytkpfb5VqbLMTcLAU6GQVMmtJWGU2VLhaZN",
  "key4": "4ZhwDxBUSj9yDYki4ATUQKTY9ugHhfwenyc2j19BsRUcYYtRkXuEqB4uPSUkhZxgpqPFJuVXLPmcXQH2HFUoVA1j",
  "key5": "4sJSxmC24Bb9xLJANfAW3tY3TJN5LugrAVKfheYUHpKUDmUkiX5i6pjkKRQsjCWmLfYAr6uZwqLwHwm1Haa6W4Ag",
  "key6": "5DyDVq3ftvhKVTkz6wQpjFBXbcwMPj4PmzqZ15KunbN2z9B36zRHMUSSYabm1JW1Npb9sHmSigcSQgu95QaXvBDe",
  "key7": "5RpcF8gWDCpG4utCXVw12g2wULHfHxUXc6hjKesdFJ8dBagwYicSkkYUf3tQ7NizrkFAm3Hg17CNBJ15nQMEebXu",
  "key8": "4XT5MS9tWmvKV2abuNfhCS27xJ3fcuiVNwpD2astZvW2iuQi3EEt5pkjXttRCY9dcJkJ3LXQjJtoWPN2ymCw7p6x",
  "key9": "pGVYdGv5CS5uwiwh7rY6W34oKoFiee1ii89WRQwgMZcZL8kCPu5XfyW91yrcNK8N1tXnfiUVfYjxAE67xLHZrzS",
  "key10": "2VzbHUZHArmoF9y7wfEkZbMtsqGK6m68EadoDdCgPBtaFbNzXNy5M67wTizMzyz9EG85YDSp3uEzPxpkFwNpvJZg",
  "key11": "fqq2YFXkPNJZTSGsicWY4ervHA1KZH2ZWqtF9c3BQm9WArBPSi7kErECDwSYqVeJtWMQ7B1KqrN5df3VaYi1Kyx",
  "key12": "kkFiGnqtA3HYsfqBr7fLx8YiBt9YTpwbpsbtUP31oqq6A41GW1YTKyYxTxNRxmetmEd9kqrf5ydroaBZbwGjNv9",
  "key13": "KccAvKLmVR6bSPD7tLxZysBWMHaXnPm98JM5xjrR89P7Sa3V98Pw6AWPe15cgSp2qHM5RGUkhkUYpRC6DTL6zQ4",
  "key14": "4SjnysnWb3JBoU89mASiKKawWx97TzgSz7VgLxL4VnFxnkNjtiJhmmMRNeQR1hm764TqQFEev5b2nc6vFLhen6X3",
  "key15": "2T8z4pLcCRZFyt3DaHBzkB6LvAiWfnhVmdcdtHNaUhJLS88x3JfsVjrQRFTkTxtUQjGXszr9RzbMSUTbQL9DoW1U",
  "key16": "5EtozRPm5dmqicfLMxwc55n7Fgr7itYan5uwWNp4UPMiL4RsxLXHB7MFRCmYEjzxmgB12JoJzUytSBK3JdFnEJao",
  "key17": "4aLGsahnRz9U48Z2P9bh3auV6atsHhyffZvNLmjRUYYkob27tY98yFMfVdDhK5ymPFxuDuCDgXKgttC3QLv7gdFm",
  "key18": "39jZ8o6Sn6umtaQYtSs39FDqdFW2KyCeYjqTRsBpFQake3pKBeP1AXaV8SkekW9q6NtC1yEA53gbEfSc6UuEyZms",
  "key19": "63h7rRUDDvdZ9VNR7VNxq2tZf1bqEbHQBy53Z2SCN8rjd8sTKsXACrtfuYWf3Wuk95n8WheXmASApFKRqW31TVqs",
  "key20": "2w49p1zjyry9BnYfihVzWr91oQRuKtdwrZ3n17cHk8jn4PxKD3UrfGqB6qaC3xYFX6pj4p9emcBXmXJRGUoCHbgZ",
  "key21": "5Qd3BS27cDeeWDSQeLEYbtmim5pQcZp5McgBqxDhVtnNXhobt4fgfpGeqzuuimixH6FGN8WAYEXaPCCRYBSDqu8f",
  "key22": "3syMHyyuAoPVp8rHXdnhVdHyiJe1nWEqjcGLPDRVw5VBEjn666Su1PfhCRhJ52GLgV4CrAhDY6R9FUoR7Y9ZL1T5",
  "key23": "QrFTfn5Eh8iYWxHUETTpugwcSV1she8o83ADXdguDuJTanCzCSzBYEe1frhxsWBw8GgRcoSrGbmb9dqRBLjzKyp",
  "key24": "nfYULxn8gaubiSif2vYpECroitk3Uid1KL6h3iiEWSRVYzKU7wACpgHmu9voFTyrireNv6m4nMhYKcank2FaUyZ",
  "key25": "2NtX9RAymyNGPEjJTp8UAvAe459dpcnyBY3KyGC6U58SyjbzikjjD7e5cLi3dGxMjG9FzsVKc2L4DKaZZTD7jnpD",
  "key26": "2usUj2Ug2q9UToEkwToscPJ6dvYqjca4c5fBfnPS21zqVJTNeYqdqsREHeQpY1gQDrG1vkxfCS5nj2YABcDFf5gt",
  "key27": "PSPKtUe9HeBFRp7tvSU4aLWDvt2tW82FDSBrK5VzhDSrr7QBBnVvpYv1jRXxJw1EVy38Zm6FCvrGKfpyRwyQhGR",
  "key28": "4ozgaWrPXbdbHEgEWe85CRbV9x7tpo4qYmbAUtQjvjrd4yAU6hsq4bP4YvEM4SLwQCTwuqFJXHjERLpN8rGt5sWr",
  "key29": "5jzcyk3qGHondK9DtvxBpG3LqEZ7fS5u9VZRM4W2SQy1wFxxGFfmAeWZkZHneFN4HaRotBuLHbZRMm15TKiGETUZ",
  "key30": "m1Qpi8nv6gSf5JWHXmHrWLV6zkfqGhW3nMXRuXjCY7yRsXSMFtdB6CFHd1gNTPFwGNS5mNAwMhEtLx1pDFs4M87",
  "key31": "4LnaLVGbgTdtaPHVLdHWKAmPmPit7mvTjADhXZfpNMf9a2CNq3bmJaSePBp1tMH5gqkaYFUfKmxXjrappt1JTkAW",
  "key32": "34gZhAbV1rn3wv3YkEoeKUGs8FEdCCXh31hRv1TH3uaJH1SMo8ENTcf8PMSQmKyc78cRWPgWvcMvhzUy2SU5uDpu",
  "key33": "2fir1dJFrB6SvKKbHeVL58wQL5gcWrv77375VBbb6uYHQzUZczub9kgyJfyN7GjAmHucFmPpHjndZ2F1ZxHy29Be",
  "key34": "2MG7131MR8GCETvMc2jcS2phcsdgPeHq1f9FgMGqzWXt9T9e54YwPcTyc1QizQwpsiQumTC9jyqM9SPUiJoRSVW7",
  "key35": "4q1Mys6DbfN34XYCT8y7yVxnk7rTrPnAF7YZNeFjaKro8nASG62P3dPG53iow1xYn8oaPEenbvxsfjLKweXNXG7m",
  "key36": "BUN9DkmPkKN54ts8NnmWq9iQftjm6SQJgk3bxFeYVQ1zF25QXYDQGT8WNz9CYr2QnzJeefuEwLhPjToyiTCjKWh",
  "key37": "4CTK1jUk1DVU6aCkbvWs7uHBqGP8fENEow5i8yF1n1gdxC5BdYh8zYQvnouZHBPuXyPtMmZQABUHj37n9p5Lp5bP",
  "key38": "3yK6KYPmXQLewBs8RdwoPZG8KpLsinziiKoghNPLtVNvYukTfKxg9rpkW52pyJYbG14T3kNaxaF2ocraujf3zBbF",
  "key39": "4UFpqxBLeVztkCJXjQa34gZmM2Jjdywvitzd4y8po6mXsWw5rCJvLcLHwRgTeCCVpDgoQsA6idAzdtWBJ6wJSN7a",
  "key40": "2L7W8ixyot49QynvQWdUgy874bV1NVDa5wGEgEFqTThQEb6TZcEUbjTYgBzD5fJ22pUAcg64PMtQfABMQAqh1ThF",
  "key41": "5e1oQEygY5G32AW5CB7hxcgAGjSzKuZeVVz1FFRcPJCArSWQKVsEBRikucBM34fkPWUEMcvwTdHyFqiDhFuf95Mv",
  "key42": "47tjHAreKyEQMDwX4e6A57eLKKDBAZG5gbiKAFFbSjj3Bsdmup94MeBqseB9ueuZpMfktEQbqh5PFpHGU1QABRj9",
  "key43": "47iRwpBPivjs3yw3oaRQdbBb3D2nP2NoVZevUnpAscpZCvbHjey5gLGaUqYcmptCMNL29wEGad26Yv2rNoyP3Pe9",
  "key44": "5ArKxpSdwjScfTUKpRzY1Tw4yoJVeoCK7oc7LzWhbghiWYwCdMUpHF53VfsQTNa5i7s4ZgEjYgpRR7ZttyMGBez3",
  "key45": "5s3MTto4ewZenG3TKAMXFqi3aNkeES7np3Uqo74AMuRyxtCrHBYHcmjmeXejMaRsDhRRry7QMKZypve7QZQp4237",
  "key46": "4iBk35VKa8746P1p6UEf4fxBw6btmG3VfKLyFWeKZcmuv2nDPBQesVB8Tmh1oKKDFRZ6zKKucU9Jf27vXecW1gUY",
  "key47": "54Vuqx2au3owZDyqUDRTAx31PfeQjzjZyNHpSeky1zgJgiCjp56TzmDkFEJAqUZ4JF2mn9jp5AvfLwv3AoaWBkBZ",
  "key48": "2E7t59qZaGJ8htYseHg1r9rWrPfZoCJcaJP48yTAWDnuHYp4SLwvwzDTCGmqEearYbMmpRHHJPYJghhX3aC8La12"
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
