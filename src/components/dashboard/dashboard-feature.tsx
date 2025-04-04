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
    "vDZs6x3PPHhoceabvaEFc7BkVxc99VpoWhY5E1n9y8i5a6hGXyAkrpev49SJw47DyygYgpiHqKNvoXBo6tGWf8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZYaEcWmWfqZ81tbZtCM9gZ4QYtYzQxQrk62C4kjBHGDX2hkJjZmKH5Ef4LAUeKUMeZm3VQA5iS7uirUbYDnvyn",
  "key1": "4yxVeNZpUaELDJpjjpnnJaLR1DFZZJf5TAMx8HCJerFMMHhumiVCxWSH8HTKngBWkZB5CiYN2H7hq34ZCNFZFwc9",
  "key2": "4WZ7E3TkKqe4TYAkm7xGFsFPezWKmouGaG6yVc7MjxQ9QNPQHohUsmUqtUZUNM4MPtsGqodhECTq6ccYrjShACZi",
  "key3": "5FLGWX3i3Q5nwiGHUCcnKty4qB9tFGXzTZ7RYEZkMxQfBMratJDBJNbdMmxwWuNXmcSbhy2STyTCWm1uJuxK4dSx",
  "key4": "37uMzcarSivr3e2CDRhmNSb8WfwpCCmzajyjfMm8zFoLM35BdvipeEecGo4NKpQv7p5ZKCx53CeoaSDMJ4hJy7RZ",
  "key5": "4jVh7t2t7e1pt27WrTuNWPDxAs4fqbmyJq6tCa7cztJXn7GYkLGN1qbxkdLvwBcStDZB6qegRMcRT5Gre3SAmTPN",
  "key6": "4VmfhQjyoGTMejXcrPo2UTvtdUUkxoqz7gZU38zGHjvh5TJucrxVwvTxdMciPWwo4VS3NsRcHgmgQtMBfSchcGZW",
  "key7": "4urFovfw88nnYGtBMrVKDMHYpbRWiRV1obQMiFCNhKqLaPcjE34Q3xhS44momcQcsgYeidnbL7Q4KWiWKVp6UH9D",
  "key8": "3LCSAx8jrYJTSKFDHxrfxs8h4QAEMs6ycMCbXFkfgnk2Ha2boMhWzqFqmCxfien3s4w7sewZZYS6hw94oSbwtNCh",
  "key9": "4eNymzJxp1ph16QhMAX15YGMeSNdZXQNHKk4dfmk8Je4ZRkPqAG5tUPvGEgjwhxjkPzJTX2UoYxuHdFotKtK6ATW",
  "key10": "5N9TipeaDRHpGivSFbcZfkRKFwnaxbXVNJMLj4kTVD2wVmZG8meuSWHYrqNpFAcntgFM6xEyzkooeiG1dpB5y6Av",
  "key11": "5NTrD3ysgCrWPAypaKMxVpUPsiFAZ4ZW8RkZmvMCSb4D6inAmhuzG3f2B6pn4ryoAjuxfwLyTRLexe5do9CtBRAg",
  "key12": "4N9zh6YS9UTDVm4W3fkks6B9o9Q2ftZjx4pq15TkBszZEfTTTyejj3qWVrt64JFuUtm1vbJVijGeG3R2vjQh8FjG",
  "key13": "3MMJaYmeyW64VwccrE69hDXs7MvQbr1NGecyrxmEeVnFwCPsPL5eA8r9wrAkHTwoEPytHsgFHoVNQzahCW4RsxF8",
  "key14": "5ZeAF8wQomZJM7x2eMhoW3Xfu6xx9yN4uSpx7DJ8w2aSytreLwPJd5mk87B7RXaRuLjmo1hBXku9pFCYrP9NGYNw",
  "key15": "3un45r3FWSBdqP4UivuGSCu1WWpK644zaXQoWGfCud45ot4Mcbt4qvAkn7RUYxUQ2ZRgpKeMCAPgZQsKA6DiDdR4",
  "key16": "4j6M7SrrXnKhdDEGmz7AvPABgMC1aXRETjf1CwQuqLjJUm5Wy9obfpDLNrPmUoWnb698tWcP6zkrW4ei7x5QBHZR",
  "key17": "62iPKx6LuhRbFzC2x3CGApiPXXMcqbm25dgxxAPARg3prJhNft4hf5QQTGMMcvzwXQVM95SYR42jkvjhCVfD1NjJ",
  "key18": "2B17Mb7fjSRo2jhxTh3CqNUE9b365Kmvp2tqdjenoS1Tdsz91GeQRS7XwKYB4GZucXg7YS8R568Zhik2yrQREDXG",
  "key19": "tg26DJSGSy1MLHtNi72gmoYM7VgoAjknSZzaxoFGPfWZFAx8nHQiAjaSZNSeex1fM2YCPk1U8U88utBDGWLWsoV",
  "key20": "3cFsyNkGwfM2eVoDaxuaiLBZ1wiKY7XYjcz4EdBtKB1TbDtyJABmvoTnSJiCadeYgYSHeUm5UzK823dkxogCT9hZ",
  "key21": "5HWzjjg2JsG1wegnz2JjDANFcYCcsr3aVLJGD3zbPYAtxitddCS8FnsEfbYkYdDBGmpJTvwYsktSyuzchGRTeZBF",
  "key22": "5tDcpk8cXBYJ41gcka5sqDgk69X5HboNphUATAu4cbswXVBSTQugxLbxmPuWht5U1dCJFLYmjWR1Z5uvRBQhQQpG",
  "key23": "HJB7s8gwFa2PNgy2h1Aw57aZnn4Y4AS5bVWUXKwpyG8vB3skvsJaMgEu9tcrmqdSAv6aXJPQ3wxL5KpwSA1dL21",
  "key24": "kExz7kvfwhBhh18TVhFkxfbyEJztnosDYRSniR3ubMTBgdP2m6pPxpkVkVd3kFvbvUS19NYygeCHYMYGM1AdjGN",
  "key25": "43VC3pp1toRBZLnSf3pvFoWMRp2gcCmGedmmhWsQFPWcQXrEMepjJxN3Rej7LMNUJoMmLTZ3WQRx8o1LKEhsLhTc",
  "key26": "2NWD5jHpTAHVKTHQ6h913qDzoxYBPtB2gFTMtQJH3Wwe2p3Pnj3bNbiJVLekvB4RBxRUqkVfQf1MDZoWBe64fr43",
  "key27": "23Gr5V43tCSc6jvZKpW2eVN2G9gd1gR1rJbgYwvypft6ZoMfv9Juo7iJLXuiGW3TDKNH6MJs1UJ4tdnNruGbgQES",
  "key28": "nW8YcnChdGCNkN4oiHBcFKqSD9RgudkX1AoYpGhD3LxJY2Y7CY5kPPXHfq4NnxAkv6ub58c4jjr9M9Cbaq11tUv",
  "key29": "XmLEzpcb77QiggdFiXY4GbfPE92q3Z8pjYEfw5jLLz3fcYSTbrctcMoMm2ws2HmSPkU8CDJfpY71CVrtfkZ5dkL",
  "key30": "4ks3q6zwopei3gzbufPmqZ3RZWzxfgeyjrRLWRkL2G8bkafHuKVmcV4Tb17HKHZcmjTCvmA2VaLvag9ooHKsaYT8",
  "key31": "3jGBMBbxe1ESHkfdpXofrP9c1mrqyEj3yRFpFXPa7RT37ZWp7W9AbGAsExraRGH5pyZSED4PZXzqL4zkvGLJYTrg",
  "key32": "5LfH4CQx12EHdVb8Wd6PPPWC78wHoCnNrN4hJgRYaPeW1qYkkaytpTHfZEoTaVimQCMbjwDMkRcWd7928GWXUKDH",
  "key33": "xMAR7G357moUyN8Fun8ozpETinaiyhcuVZ13o38Bus4ZUEQ1of28DR4Ykp298H8g8ZkM8uJoCFKPVjquehSKCyf",
  "key34": "213FiWCsA2JpnGesLpYP3wmdxqQxBorLogh1ryhgtx5gsdUr6Afn9EnvEkiU6Sj8hVUp83FFohtCFBUuX9EzfVjN",
  "key35": "4PtBLBK7yn3bKtZedXki3akrJYHNeC8VPHL8BkkBuHg1qwnXBbzD55ZP7xKrdbex2B5NUoMGpVSn4D4Mn4tMts11",
  "key36": "Z97LfAPf991pmADu1qF3FufQB5tV9cP1EapuMsA2ov5JK6SYeffaj8GYP8ShDB263gVsqWEvHr9hJGJhvKszijr",
  "key37": "G1c7QV6KTucRLbsCUErxhYiuYA39Q1imNSnMewEUjsQDzpAfh53ZZgcGxAtcs4EZxjyMiVCAcWQuyD6PHpZGbwD",
  "key38": "2ZzwizdnuTE61WjJhy8YZiP1SutoKZ6J6HVhEe43aQ6phSV1mH2w5y89UZt6XfH8aFr7SUKTBFxq3AVH12Vq7Kmp",
  "key39": "4hY9YGq7L5ytxZkU7WuuEoroNtZkVNaYwEHjM2jx8KSo5pqT82FBP1XdqPtifSumtoqfFVvJug3hDbdss4aiwyka",
  "key40": "5vJzRyMBJkPr8Um4iPUsy9jhbuShThwv3Lwqrk2jq2fkUuEBBUe72ywQWRWp344b1nTEpwyBn824gEM2HKtMUGQH",
  "key41": "RGsWjXxA2U1uNC9AiXLJJHuBGjvmTyVSSj25f3UCKXP4hvBTStA7yvGSzv9CXxuaNm7wuEhsosfedfLLvjTBNr3",
  "key42": "5uSBALytWMj42cMk6GjkCsex747RtCUkYXv6MhZvMNzJCzb7EJwhMPGQu9tVamcfupuG2P7TiNSjf2kJUCB9TFop",
  "key43": "5rjw1iqdbC3jxKg3o7AgjeyRNvx61r65EFZ2R7aWaKHTb5KSduZEaTwr6LjDFZCGPUygJMi1FNSJo9cE9sr3FJt2",
  "key44": "4qtLcXNHFNHtHdX52TDU8nvHaDCT3VcxfVvwrD2iFoQfHk7Y4ipBs5jAxCYHwiwWZMNFtkQDv73kespy4wBYLy8P",
  "key45": "61qHasfpad74RT6pB7Dv5v6TZuibQg3GeUjpXn3JBJjdZkHy1BJrwz5rHxEWuYosj61y5qD8SkDK6vtdwywqSM2i",
  "key46": "DMtKBH4gt7kxeoUkBhAnb3pfsd67wuyiTvXDLccHqz9Ata2MceYdemPWBiM3prSFGbn8PMr65Ajwv6Eny7dpi1d",
  "key47": "2mHMQY4CfZXh6XitxsepP86XLdRqDawj59oFFoFJJiPgKfz28sGZdrBAiyHXbuiHer287K2DvPKSJDBwMzk4VFCX",
  "key48": "n67xLSFYfi5MH2Vn6YpXo4mJ6pL5ZFsDLLSnneo9vSHv3vZrBkA38xFt7m7P8ToyUPVipXRSbJ5GVq5Ks6oZc7V",
  "key49": "doVUFXHEp8ULFxKukFiRPbjnpKmuU3jfSwWE1wUJJD3k1oNt2eakUCkash7n3h9giEERYdMGUsMYCizceGLFcbm"
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
