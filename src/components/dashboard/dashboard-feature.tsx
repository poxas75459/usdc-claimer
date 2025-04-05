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
    "5yRrswk63YZWRDa7ByHNbwaR7Cvhn2CjLrbQtdMnmrKw26bd8RqhFx1oEbsYmmhEAY5UyPbQBJMNfiZ5DLMV31rH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnqEwTLSV1j6yFSogUajVFbc2nbxQebsEUBSEbDcvfNJT6FgXs151nMeoNj2jeGehoYCwKqgRxZb8S9xwFiSnFL",
  "key1": "3Xw5oH3K59zE3BJMDsBZ6pbumJoVHtHvtomA9p7cgZUfrZ7niL32eFpZwdDKbVMmEKDhXpmZaZxoebwY4UTPyigD",
  "key2": "2k99fDesfpdBKRq1eU1CwwtLRJsv9aYQ4jXD95FZVGJrrCSL3x7YC7dLK3kyEEEwJNhxLBa9XXkCJQZfxaTwQiSA",
  "key3": "5Rv8KqewSJyhexm9DUDcmxqcQBjLxKTpc63WMRBdpGZbS61eVNLY2urvkqHozDUhutgaUJRSTDcrEpRaV3U2paKm",
  "key4": "3iepZyMhRcm7EYcm4eD54u453UwFbwRB6Qwjnzt2Gqy2C2LLtLvsKn9UXk19JrMnYwR4Pj5gqh1f5XmUvGB5Axro",
  "key5": "26LwijFfQ1nekcgfw6EhqEqUdMJ6GximQ7ee6t3m8bPBkvVNL2frVgubQHyN3hvXJegTYw5ewPE63z2bUpK7Xwae",
  "key6": "4r77xpKoJRFNZquBjd1AEGuJBuYWuJ37EdApfeXjY7vPSSaox9yWrXVCw1bHmbgW6tRsbisVkznNco1As2ZQHHy2",
  "key7": "3iy8ANBifFrWX1tXyVcGoTFyXFUQNfWeQWanK1GkbufMve8zvZtm4YY8TVo38DmjyiKuQ3qKEboJQkFA2eXeuLVX",
  "key8": "ZsMWv6UeXACNX9WWrebMVyZe4CDj14ooStXPeQzPLejP36N14REgvwJmJo4LN9PPZ1UcnEvCt2q42TdGgqhvpfe",
  "key9": "4tPWHk8xUqGqYg4zJ18TJcZoqpZXQSbB5YVe8j5vBFTJoTQJsZ8jnFBJe7tgP8fUinbuQzFHQRaUPbP6GLUPTNTX",
  "key10": "2uJ83qYQAmCscaT7ony2MfeZutq4g4rzsNPiDNSsRLktkpxvstRAJEQ1HRBMdzYL9ffUdJR5BV3mZwdXJSUq35XD",
  "key11": "3fgFhQwL1drvYEV3yahkVnjz14Q518DhfiYzzaZe2HBFCDQL2HsmqNN23QiRnipvcdWLdnSSadFNTvbNbQtxKb2y",
  "key12": "5ULFBbKeDFZ8gH9VQrnQpKyC59PdcHStCYf8PUccSrMKRj8BGYkL388WB48jqpvuHGxpEeiWgF8CBDH5mjtd6VBF",
  "key13": "3QTE8Ls7VKyV3yxmaGPgQXpzr1qAz6KfRMCjcpmeNH71b8ZCTFzHWCXU7645L1qfShfo1MAD8mkFPmxcbnHozXZA",
  "key14": "42WLnZVdLsAa6pS7KiMqXgVugmVyzBGh7sSm18WCvizYcmXc2gj74LRojN3KVEBxowx2gB8cPmxZxJS256VHsY2Z",
  "key15": "2HcLTvVvomrn6n159npzxvK2h873zan2SBeofksDj9rPfifSLSVh7UcKe8E3UpygmsR2GzKQfjQqXCyiBcqMqUSA",
  "key16": "5zsdbHdGMvF5PLWub3cGQdhn8tm8jk3skbZcHZBUJPHCDY1xkZ4sCCvCP1qxRnQDVD5DwjzQ4JaWVZZHFwzcBYM",
  "key17": "54iYZC3tTbCKyYsecvBsjNQpdn6hSNB4NzmS9fiWDuxw9cqkCLEFRQzPfMWNfUcsv3n3uctqkZSJdvg8whZzkV1j",
  "key18": "234XH4MTDKX4rjVjGcULGvUMZiywRiC9JK19VD7NezfJobLDo11AsYsB2Hx4LEETTvoLzfBdmGPanLXJ7rKrQnwy",
  "key19": "3yGNHmZdaD6vphSWJkhoRVg9iZ5Mz7Bw1F43SvxH53cXWMfuL2czo54duqRPmjNfSYSERrxeuu5ggfEie6SkATmb",
  "key20": "3vnoYModx9m9UbXTg9hGcY2qC9bqv5rkX3jJYimceCWckVHNh375BZoThTwCzhQSfZBEBRUsF8EJYhFz4WVMTwg4",
  "key21": "5r7Mh1kMmPQMzKnxdiDrnWrhoPGwa5xtUAkznu1wyFBLx9QdEWcV7kZMU1JN7QyJBiBEWJEvzeHYp42n1MMvLJ9v",
  "key22": "2GEanSNZc9fy3LexT6ViD5sJeNJ11rsG3gnWujo9AwZn5xBGfVyWsoW2ZxArmDq1yiXggCZ52F1fk71f9stMBU3e",
  "key23": "V5BykuaFyDrHBxPwcmQKesP3o6pFWZjD2M7EWmFUes22PfXKgBc3akH2zx1dwUbXGiZCuLWkhateGkKF2sLPoSm",
  "key24": "7pQjagYhkqys6FLNnE7t54ubxcqeHDp4KAE37zZ6rQx2Ro59hFifAHgRkxX4LCfa6d6th4M46G8tSbsbbCeypBv",
  "key25": "49Ds2y8sMvHp3mqMcVtgDDmt1M1iiKSoESwmbmA3W9E6EvHhADLydXK8nGiiGoi9xGFs4PopUWU3LTX4vUapURzg",
  "key26": "3n5q4SWfNifje4MBT2cyjXnqPrva6iGAHqwacvnkEUQVg2WSXsQXbr4WRzwFQkBf4P7bd8sdhUzgnytxPS3AQwKY",
  "key27": "3wrXqJj2DnZQyDNbsb4JTotgBMR53KHUweFVeeV2QnDNm5n4HYExtBZHvTWbbVfT6ZyZEKwpmCBUXEW3RmWD6h6h",
  "key28": "65i3EUpe8uCWrytJ3hN6TcjcKmvhgHdfRNUMGnK9d511rt5oAr6ahXy4Z644f7keTLEKkBGCM1bNbWhc9gcA3D9B",
  "key29": "fkqEbHQT4nBDs9od1A9CEgtrQpHNshQPMuSsLQJdE1kehhvtLvuiRg1RM4GSJyRnj9WnpGKswAxmdn38bYzmcdX",
  "key30": "2s6QnXhTbAnVpLd96sQYVuCPj2cuaHEvCbycMub2jQxakTNFdjKSE8q3JQLcT6EGSxhjZEGtdTRMBtkxVQDBXyHk",
  "key31": "2UWdbAgYTU5fAWshWfneYqeVre3bXtSNqP8DG2xPwtP6bFD7xrJMySCkqZqBZD19RSexiWjMLuZggfNtgVw2Uuk9",
  "key32": "H11bVLNMrDytrJQnQRsGGgDFr5gXBD42gKULcoqnNQSK1mf4GeU8UbTZHgZRdfDTqy8w1rXUi7uai2KqSKsp88W",
  "key33": "3T9gyXUVpRE5VELaEYyzYm8i2yaafCbfrRJ47GtDtRxFJZd8ozLdtfjjjYKYcsZHGPRrk5vsfCmqouC11nUZY77K",
  "key34": "2tZmrZCQuP9oXcXsAvEPv7DEtDXPjrRWuLHxiCqABzpQLa6ZvpbNZZSA5McidbtMyQ74sL3xHZVtVHPMBMdDzn6j",
  "key35": "jVxm9pWaccD7tQU8KFdSdtef8UiRGLryzcwCQxu2SVQ7aYHpQYFUN34F5NSY4DVddXqzF7vYwF7VGpkwmErUsHf",
  "key36": "5hvEN6ax6mqu6yK74HMEJExFYuJwgt47S8Yku2AvR8moVF8nEck8FrxsBUkAP1JMuiNwstY3e1QtJ4yTWSBWwGZX",
  "key37": "iq45YGvXRvys2y8dGrBsCP7Eh8BfuWURUQNGJWYRDULUhFhs4Jkn1xYvqSzhB4gxuoiWwTfJHLgD9Kp5eMEPwrc",
  "key38": "2copSubdLrE51EWRXCENJC9ap7gMEoJBym4ypwGRadsLPqegCkw7VxckV4iwYXLTEMzd57hxPG89o8DGQWQPVNjM",
  "key39": "XR81Ui2XguX7FkpUy1PXSVdF5jYB2njjAGrAm81E1Bor9PNQxtJyfdbZEAESUC9AXe9ifYr5KhPEvaa3LmV3ssh",
  "key40": "21Ph51zBtfGji2Tq2y4WNLVRYpT9pZ35FVZSbCMvEhjf3Gk878Pr5J49uJqndJArjLkGrUu2MbCiMKZJpFTVkPas",
  "key41": "32VWKEAAq4CMhcEhaGwuuocXw8ZdMPxj9hwy2zjA51fJHKnQvdCygdT3GnSiVYikdQHgxyuyB4uZ5V6pW64H4bkz",
  "key42": "33A4WGjbARs2vQpVhJh9Zrt7vLLQNd8YoFu1Dct174P7CNhwKwmKd1G3VCCNxBxF4pcJNrgVc8Tgr9YZMc81nGhh",
  "key43": "42CsDC2Uzjv6YGPQkUxpuWrWewCn7LngHh9byJ5KbsC8RULDrQch7rtkC8DN2noZucvu5p2tW7NEKEcRPWNonuQK",
  "key44": "5p459vaJBJsc91DGQT5wwGNBk5q5ebKaBtafbsRUc3cwWoW4pHJRCoYt2pz4X4aV4uEbDdW8yeHkxvvQwvVGG6rE",
  "key45": "yAdZsBC1MUBh7Bi2daPrnJsibJF51PdVmnC29d6WCYSQbSokPnfByvqZb7y6eQHpytNSFBwbjs6GQfkR7vVwo8b",
  "key46": "5zy24KPaEseGg38CvTcgMhpbBBYLnL3w2nkgnaCBZVpFFsTEXe4kXTMrb7L9FYNvcDxpQaLJhR3rBeEo1LDKeGSh",
  "key47": "56BGKD7ky3SpyRmnWoJcRRBpqJv6bZzmQh147qRVwwcAmcUTF1aiGEf9eWVQxoWCZXdFaXjSiY1PXNd5fqxwHsb1"
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
