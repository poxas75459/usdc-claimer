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
    "49cstiko5mgMrA7SxX2Hjv6syp54bnLjtQijRRhDjyCqRHptZt4HeguxZeK2xXgd2RAHqYNxegpxpJ3HTLv6BcVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfPJMEK38qQTSpgdr8qH8PfLs76mtK1aXZKWzjCW9jd69wqyGtfXtfqKfQj1Ap7RQUNsb4tbJv5xrXFcorscSnV",
  "key1": "2nvf5CNnFvaeqiwfsKnDZyEkweRW8c86uDNtcjXzFApMuHzDa3RyVAnJXk3CVbqW1usDy2KMJt7xiYvQ4kT1wbj2",
  "key2": "4Pyhtea7Q5NzJ1qiViCrDTZjMayzm6nc9BgAL7cwDRiHc3a1QdvjRv4STmCA2oNug8vcfwRiyAMHiJXQgafHfDBn",
  "key3": "qjruCFvh1JJhmb8Xid1w56rVXvekeLqvfSkZmU6ai4KTeBxEWoMxwpWBeCHk7VUniZTNM9ruSf9bjv1x7r6CLPk",
  "key4": "24i33b8PwvCetnd4F456TmHbTf6qguFu76vQQmg2JQgU3jtJbyZy3BH5ncWbXeN2kPYwFerGTDv7fikZcmq8q1xg",
  "key5": "2Wk6mcrLUc5fd2StZ8FZhzSR1bWKXkgjHoWMZKRmLssJFeG6DpRnPq91T3Qo4im6HJhaV13ZqinLSNjeaofddZc1",
  "key6": "2b8kvaDBmwXbUdR18rJLT2CNAB1uYceVm4zfYcfsyfLDSUL5HPiizwEyjjR73XnVHmeuUdVWmyWhdNV1AztrmsWR",
  "key7": "3WYQvvXhMjUGW18WQxPeYoq45kw99NqM38182AUQCoBKVKvwysJ1wtBt3PtEefWqVtAahdHi3bj5t5auRAUFFWf4",
  "key8": "2uVWLA39X2dCzqgfLAfLMnGzeq83XZXy66kJeyxaCeJdsViTUmiJkKJ6ECATNUddTZYScHH59uHxH2rLGx3iXB4P",
  "key9": "2PRjf6zG38nYVS6M2zUuqxtmeqcWARrJ2EdWmxaCbEBbUQgDvcMeTwxM1HQRN4J9HwkWkhv4CdBxxoc8FV12vRSk",
  "key10": "Yhm3DapebkPCUmBF9ixS8wLbEQoC67EgyNQ9UXAaf3U4sZrNpAPHCAacTJ2tuXGd2RcPQNV3NaQvjEDm5VMFRnJ",
  "key11": "4yhUD2nahGV6RK7wJz6T4uNyecyxf8ifGPaMjN4cAgroYyAyjf57Yb1dsxktBL848b4dPkFAq5b5yUhh3kQadVZx",
  "key12": "3xWHX92gAB12zN5bFvm1udEFRBRyBk94LSE5L6NaDWrq4xCJiMUaHvBAokHzsc5BS47qzq91KhfAm4bQs25AmU2i",
  "key13": "k9mfuGy41A6sxssxS2gy5fdPdUBuMYPQBb1JcyKoiDTeVsYsDN2PgXPAtg3K1sE3MvfR7xkt5VzpcyiKBcWfT6n",
  "key14": "5qp4ipHcNf72DeC38nnCgbaASBudZwNtyZqpCL57B1691kDnBLwyJ7vF4UNmsnYF5xaH5rc5SmTnotByBGDT8wZU",
  "key15": "53qFU7NxjC2BrsWfcqFKXoXrnBpNa5R94kvQ9Ux6AkBagWTXywuVwHZEUJKnHNukNtkasSpAEcs21w7ztpAwroJN",
  "key16": "4rDMtkgjnANnz6zcN5t8Mz6QYXRaJXqiZBi1PftqUMJVLhKjfQK5EzC5vEnZaGvbQ3ojKzbtfBSxKe9rXvp1kyXN",
  "key17": "53cXJcc8ak7kzZeioHCJF6feT3GPwfsfag5S4joya2obaBAkc3qVsEGMJKx9Zg7ZJpYNWjsjMPvnTotn9qeZsVS8",
  "key18": "3h24HhpNXsb41jX6fJtfZGJgkS1Y6JvM4djSCCVRhSbGHLcXcAbeWvbZtN4hgBcUyUsez86tdDCCsKp1m5GkNpkP",
  "key19": "fFJeWjh99Dvbus1jPc7Hd2uzrmnnkFEyHuNKbmtLdFrzpfc2wcZqPF1E14n65DeTssGbx2GxarzjYCdomp6SbPL",
  "key20": "5quELVZrA53RT3tW68YEVmtKnf5Y43HS84bx159wsGmwNQEgRy5fGL6x9KT6Cu6HbHJbJSm4TqiwVw5XdZFL4sg9",
  "key21": "3KzvmpwRuJd6ZvcnFX6C7ogQu7fM9SitXj2p786xMBUcXfJJY8XCUGpxjGUpBaBo9DYTeGFHR5MuLZrigFezPEfa",
  "key22": "3SQPL13APrU1Yuc7dUTfrnE7MfB7GqnmUz2UwyDixe5aqLCdZp6JRAuELdQ4wSRcUhU1xSg2JkrkjYrhGvWzQxHY",
  "key23": "3ihAjNjDuWzdHXVjkrugdhM9E5fGPx98LnPpnmBzRbdy9fzwy4XfsSDDy8pNZgFbwaQYFJMCtSWvpHsLU17A9uB4",
  "key24": "4CGykPPpt7KpwpNgLb9GpzTNNCddtManmdrXMXTbinLEkywLotMC5931DDdXwvkoJ61bZrKTKPwuVTbmsRDLvyYP",
  "key25": "aJFyoFyprj8AoSyuugbw7TB4VWwTf3sq24TStTD7nmDHTWxBTDFMnRZTJTXVN8eGJ621PSUVphimqpkJYmppNfP",
  "key26": "Sy36MvgcVBEHUibyJFtB73ccLVim9FW1EbtdqJyjrvGU6fQWNPKuUuLhrCU7nDJvoSwhEjEcwLhiofkx71vKMd5",
  "key27": "3UKuVhuidGWsq1aLw2Sgw9CoKMmSAWNtu4t1Jqw94qSuJnY9jJuNawhKxCoxKpxoPSVGsN8d8Bh2BW7SbbfBHTNH",
  "key28": "5qA3J1C8GdSR2kUWVCQodPDUjBvxEjXPHohmow24meE5EsGZPzhQ32YGNnfVuz64U1kpNSEPNsNxdStw6hA1gdkg",
  "key29": "4pTJ2uSTE7p8wi2gGfns9R1Z5vsRHRwboGfMKePJnpqKLrQ4QZbGwhkMq9T1cBL9UPbzqPNL8CYwGFEAJ9o2GyAx",
  "key30": "jazoug7WgCKN23oiGTtjmVL8hRACyYwX9eZXfRQQfrfgXg9WeeGh4erAunuKcdrQnRxGztgUZgyc4zWQ6t2QnYP",
  "key31": "5QuZnjgXTyTt5Y4mSKVm3SX79W3TEc2bpp3QC3gCzx8UPQxwq3LBL1YHRCtfBT4k6agErwpjgfY9RqfiJS3r11La",
  "key32": "4opP5pG1ARnj7EoymxrgVFxjRwMZFdHdpMeUUxWox6hknsBkXMDh89H9FPzhMZc2axNmkUSWs4CH4Hn21UTAwzPZ",
  "key33": "CdimzDJwXpeAdYy5xECpLZGSRMjZpSDxHU4p2HNkRAUxRAVXESYGtTDEJydUn8ETBhAv94uYkoDutZd1aE2FQRZ",
  "key34": "ggn6DnFft8CCV1PWaMsXoaZ7rJoxACE1NMykpnrGbMfESvQb86dN2icS9iLkBumLEk2YWWA8YmbDA5ToaZFqM7j",
  "key35": "7cZMAyToK3KJsw9NwVPqQ5fRZNzrx9bm9wQCyza5pHP6vSSnMUJyCkZr8RXEQXxkodksfHYap43AwpNB3aKTiKp",
  "key36": "XPNkcC5VdwDXbX1GcyJQdT4rx9LH6zA1a8txszAwksfnpg2qWEvjWJD6WuaC3oBY8U9t4V3YXNKAErPHBCut8Gm",
  "key37": "62Hzg16gP8BjVdM4G3SSmifyNkXoezLQ3N2vkMRza45TvEsN4qJE1LdtxztPEcjt25uGUBJoG1LJagURmieoBE1e",
  "key38": "WhFfVrSKgM2oNFLBGFHh7pcahTM9UktFAvTjCxjBrCowFAzmwVgm2ouQCc7x55AZ7j38Kb5Rsf6HeYEvdqZS7aS",
  "key39": "4j6aLimnvbgvKHcAcPoKbHzLamWKUK72WAZTFUFbvherD71o3Wdja8Gi8ZHgced4RkZy7ti62eTzskJqvcT9Kzv9",
  "key40": "5cmcg6TYjqiLCoV9SS4B4YQAzup8RiYowu32EXAhkoeEYRkUozq8CjZ8mx6zdHQb9SBDpyRVhxum8cb58zgKDrD6",
  "key41": "3jd6z8w97mnEBCT72ydKd4RoQpKAg7x9N4yK44KPp94hb7RDY9WGFEMeHv6Xd9kMPru6T564rFQicZJH8W3h353n",
  "key42": "4TNnG7Jr7rtUbnMC6g656REeuqTpjFCHhJxc6HKK75kzY8GLBxT5kN7Z7k1krxiJaRnZmzNTsFfktRdPnPvSe4dr",
  "key43": "2NPcyLMRg3bDfKAGT6hGbCTbtnxodEeUTn3FaNoD774756BqpLhWpeCChg8diXF778mkrGtmHD83BnMGJwRhZEUK",
  "key44": "2mfejiU742oNhmFQQHoNQazMxJqbYG4dj4qEbgHovzsx4UiSxtVUJZbKTDdfBkjHXfzkQARLFMQUsm6usewcyKrN",
  "key45": "LbLEcZRwD5D99tch4eG5N85PwU1PJPqPetRgiUAcE37eibRqZejtTGewbYNWx1a26dUWhTntNLXnExGS26xKc2U",
  "key46": "241nSsL2fseg2a1f1rMQtDJ1fBtaphqE8iTB85YVLGXWjtb3vqbqsLZCo7e89K9j3FqfyCmzm3Rox9URqdzy9kgs",
  "key47": "4zQuTbwz5LWtBB9R6xpQjEYGR9RmHH2z6pghgb6Je21FQVJXwTxUWG4yoHiiiHJNyU1UkosuiV39uWxGBzkFt5Yo",
  "key48": "2c6f9DR8Mpg6c2yATaXWWtXJbv2LUWtnpvM93hpshCXgNZ6CNVMzFaEEem9XumZBAujkjGejnKXUdvdKFPA7scn8",
  "key49": "47MPtWReBY7BMeZG8wNKK4EFVt5SERoZ5pHc7JYGy2Qq3XZ9Pnfs9xhKncXaonpV8gQVfnnSf8CHRkzHZPehQw36"
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
