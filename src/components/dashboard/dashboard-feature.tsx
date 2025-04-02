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
    "5WbHys6P8BFRZJjCGTjrAXQ7hpifcPcd691fdGpMwWXDuT7gCJAAkVFvu9VTgtbFsvKNFoxdA4nZtSn5HV5at8jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQe5xPC867sKwnd94F4jUZiG1AFLTJb847j8EPRg5i2o8jW2gFkDHcrZzJvFiwRGwHKFqjWKK2Jx9nb9ruhftCi",
  "key1": "GWrZFnddPbFYwM9e3iRvUg1PJkXZoQ7PWpa8ESSkMAbwcHy9YuFVNbiAhbPSmNR8pETpzRhQa8rgckvxewGJEB4",
  "key2": "4QQ2bHnShXdRyMMqMc3PxCsj3GH5bdbAMbYWkMfiPQBQSGmgF8E3VTYXbtB5CTpo4ceuSxcPzL2KkaKGUaLALKGT",
  "key3": "3nAwe51BhKM9uPnUB4QZAxF6vizf9bj2TsDnF6QXvXpq4kUbbtfqBnzGwaYbu8zRUqUBSuMjN9ZBzHvS7RsZcAkn",
  "key4": "66m9SFQsGVV3tp39vkyUfymgRdUeYhhPXiDZnMUeRHuwYzXTR7oZBoJ751HUJgpTwEFxzhHCtkZMxACtnbiP79sV",
  "key5": "5NNhZnAxNj2B2kEvcs8g1VjhXqgwVz72SfiYDymdqe65TP2ZfJEZ6JEFzoEdQMv9DkE3aG61pTaxvMqT69Ln6mY4",
  "key6": "4Jk5pPuJgNsc3EMJ2PJDrcG6hH143titUdY18pjToRvHNzQZfi3UhyVxGjBZUixnZPuy37yDUCVdN4Z6DtG2aMxo",
  "key7": "412ngrv8oiW5setAqCDaQ9YBjKAJhBckWFBsAGwzMsVaojGepa1kDtQQ27JM5nJxLXDMwi92cpex5WuDYGcmTQq3",
  "key8": "4pqPN3caN2mnhQFxD5qW6mro27HDb6Q1iHCwYnRuNeWjPY3MtWYWt8ZYx4BXkWZyyaAssTWAjsJTTNwCdnaXB9T9",
  "key9": "j6LcDNxVArBgcDMKyYsdHTpdyStpQyzChHv6x3M29pVn1VFTrrLHaPziVhAaY9KJKEoF5oxZJkuj5BKU3cSEiUH",
  "key10": "54UKCeJZSkKpe8n4Kvcpv6gXyBAJkndY2cSKtgGKAtuA7BNKHc6HD9sy7zwg4BiP8RX6NPWWNpCytHQuhREWyHeN",
  "key11": "3hK8Uxki2PCZffjLSpkvpsNbLxLiVn9NsLUHrVpcKhg45E4TK1BphL9niAFA42WBJCc6E1a5A1bJ8EPN8CusehfW",
  "key12": "5zvx2HGSLy4Vjp9fGoZyVsstnkLPqxViUniCGt5mePNhTzf61umLqtPngCWqCAGHnXadZjgfUxNXy3e9QStUAbHp",
  "key13": "SQzkWTd6heWpwiRpDhTwPNojvfN4m72wSSvAQSdFPeNLdWMJ3isXVXaJhrAPbhDnqW1SkuYF31Ur7612aoJFsre",
  "key14": "2oG1dahgkQG59yEGf7D9xTLr5FjsQYaSiQKFFxUQNJ2jYmU5wHbqc1S5SZST4TLjSZyzLo1Zneho8zDri9MHbwVR",
  "key15": "QfgUeoMMJpKLYkMhyrxfGVPt94EYLSMFc7BDKa1m6NrLVUqjVDWMKWW3LvGpt5Btpu4JQVkp99DSdHaMMLiC6YK",
  "key16": "4R18Kvg6qJS6UjhGezw6ACeMwxDv8qww1MsSpRB5mogtMVD2U3YLynm5NVvokutNs92WdufC3g4Q8nEX87vJSyQz",
  "key17": "3TMfGkRBPmaA8P5dMAxy4yhNbjQwSRGozGj6Saygb53CodouD4NfeK57PXsDpmkeHiMEoxtrzvZmrnKjvhZHdjfS",
  "key18": "2RNyavG74nGwHvqwqrSYaCsQF2qRVuXh8LTyGdnXE6hCHhA7QwhSXZNaHg7YCWptWSV2bhsbsMoM8SL5u57rkRPv",
  "key19": "2WDgGBV9vrKfagAeqXbGR3Y16LUdXQjVu5noWtUXdnoCkPH3ziz7NB1itangkCkGfvvGwPnEiuAyr3DGj9Vy56gh",
  "key20": "D9BLCMA2VpeDp1EDsNpMQBma9ZU4B6LsffeLBG4QoPUnnE5cekXBAHRAr7VcSNeMZkWwd2KcJLvrD5rP8CbMLRF",
  "key21": "2J9kSKLbcmKL3rgjafT38DpG1Q3AhkuTrFamKqzePosXXmMhKCfLqCLjNbAXuaeYF8JMnrzJuKBoMgWK1mz9jKFU",
  "key22": "46pZQvxPFjfKUPF61cxRJwkhmNL5CYhwmyReVimwfGXVcaTnVjteHyV154VxXQJLv5a5E8C7NNKCFFcesaTrM36x",
  "key23": "4xdQwq35kKLmUNP18dunL7YYvhHPgfeyrRdVj59GV2r2T9cYMvUL7iLNyRE5XpzQyRB92APvaSzj2Q6jJ6oSJzkb",
  "key24": "2u34KRmKHP3J11UwRK2fxEbM6Sk6t1uLfiYBquMpruppCdRnH8kv7M9NT2Dkio5dr8onhZgt1Q2N8VKf2UyQrzw7",
  "key25": "2GwjUbTQn8HK4AYDKwbkAWRcx5PXh7aMVnhSMjPTzdJyV6RHwquwZxG5NsXK6hBtjMP1J5cSSBdrbntMecaEAFKY",
  "key26": "5cWJ5LzGtumfuVgVuLRy3BMeAwH2ufvu3nW9bq3r3m5wPECDxXwXeGzDuQyPbG9dznrr9cuh9FgB8A8gcApqzxDK",
  "key27": "gZb3UkwG4jSqYU3BAsDPHDJTG8AiXtWtVhU3a24UJ4ru1AN2FVdUKfRkmU8QPDsHQ3o2NqKdKYMuNavhtw112DL",
  "key28": "3SNuUH3NwBv4GLfuyv4MeaSoNMTcEcVayNfuYUVm5hGuBS4PX4raSPq4ThRMmfqyX5Bv2EZeTjDmAFNnpzehsvLK",
  "key29": "25aQbc2yRt5yzsogwR9XEDySNLbfeUfWvniWY1kvEYC3nm9h3ZYYUjtCC6Yd7vc3U6vgiegjbDY3NckY1orHHGDJ",
  "key30": "32Xd3SzokDHM5nbhuJ98ywEZDnvd1vPJXyYWkjrUHim3d71rfXmFbZBKGKzGWugo5xNZoHGAEG4aMzZwHrzkdbp4",
  "key31": "4TwrAGNBdhSLXDaTJdYqBT3wHixciC6Qrj3szgjP81LPN3AERFm72MjWEiavGwZdtWJorU7987BqEAL56v4yzzjf",
  "key32": "562XLjXr2NZi5AzkD5Tk1a9hRadVcBedhH6ermi7XFysC7E2H9zAT5tfiQA77JPAJ8gRvPMSTStJg7JCiN75QFUx",
  "key33": "3xHw386oQ684ttAbb9YZs3kgF8jrSiZy1hGJjN3S74SG3617up9s7NgDwsbTS2mcLT1miSi8pHcjvhtnVZCA2nu",
  "key34": "qFWYeockPCwxyELopXeyVZj5MhDvbTKwVM1vrCkhnWuUMNwbBXiCMpdBo9zDuLiZiYKHnoKobfcyLRU9R3aV5r9",
  "key35": "51pSux2oYejNTbaKGRMcKmQGvh7mL15DTZ1CfZNVC2F9hsujo74iDm4wMLWjkcvWGAJ6cA8NBZMJMC2YGDJ7Z8Fz",
  "key36": "LTjfioSb2pxr1G8ys6RecyCraGSTsaCpn9xVCKQA7KowNPAhx9b8uMcApWAxDjCwQQSbUJecxBmHaPgKVaqkhm2",
  "key37": "4wUCX1rd3KXpJif1t7vt3Cbo6jaiG5KFjXhmHtoC73J97bLa41UuEfyuHRJyoUinZN9AhBVcRDdnLhE5iLds2yqo",
  "key38": "kPVdNPcskjwuVosYQLn1FvRv3chgiDATsLeJ91gmfpJTzp1rXRUfLUCXMMNx8EJ1roPxvnAXzsPKejfN6WBStx9",
  "key39": "DVGvhPfdA1v4RFcqvawkQtTEZipZaPNp7iijqotgQ1yyAHe9dK1KNoS7YsJfPGXrCfARxCHr5SERmyaqu6N5BBH",
  "key40": "5QmVaBDuhfc2sTM3nyZZUDY4jZhnG5RGmWZ2hY1tuvAA4A1KcJRgwuXx8aMY5HwfmdLsKvhxwuA4oYgxYFwSFQo8",
  "key41": "4CxkQkoUHmsKkA6Tcbxb51p42pNdpMHbSR7hxFXPSFFBAE3WSyqkYXY1erpC439Q5hgBcG4wTuTc9PCLvQ1FAWdB",
  "key42": "dxFpGyKEoYZgNBZL7RXe9kwXRd6bjBSsFeaKPZeo6rHx5XXWt6ruHpLkiq8YJ596pqA2oQPTVwXwCK6JUKbNQe5",
  "key43": "3RhbCPKnR2UGP6nGvfEABezGato1o6vShpTrung6QiQfywy9QgaGVvzYgBxNDg4i2eicNpNbWetDae2QEK4qaZt9",
  "key44": "CtfkYCvJh2eYCQbPugZNdavxvnkw9kQdC6hUj1CFxV6oq6HyRRR5EdXAvFLNFivG7v5qfXtz8FVeUmkDj5szinb",
  "key45": "5cJHLeEqtkubU1CtMv96cPdcgdauK58nBHokvzSBfZAudbzVXRfV3RLznYZepb12rafUdvyVHvRXXYdiuAjNTSF8",
  "key46": "3DVpswkHbN8Py1hJ48tMq2ms6BX8LsJMFMaKxUmKWs5gzYSSvYgJ9g43xRiocXsZh2ZHdty3ru4ytXRrtJtCzkhB",
  "key47": "2zFnRhCxy6ynxcxXbkRDYPjnwNwpfG4mmJXiwhnFTpFCqgqUXc14vV7dF8a3ouBg2q5Hjdmk1G4LZsay2Ejr578X",
  "key48": "4KiCmax8Uhz7bmTEjDbiFdDJ44eRXW5nNqSC723ihPtY6T8CH7SXnbphMHdTbsT6q9qPEupLHmehM9BAHCBxo5xr",
  "key49": "5CpZNs8T3SpLqUxRi11p1gHDpvW8day9oSP482mpY8peYx6M8WezVUuceQ2YRvDAsTPmYXPToQ4LfaTid2uocnMW"
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
