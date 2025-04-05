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
    "5AjLGuogPxqKC2Z8buZB7ivM98APRij19NmonUKwe25BcWQik71eT3ZhMpfnYruq699ngEWTUEFf4mjAbqSg9ZAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yopzuj5zDPDoDATwQwHXoy4bqNZh5siQNKyucVnZ27mcLEzRkXJDmo6j1XEA9kHLRYdMqHpNNny1BGciubwHaqn",
  "key1": "2Eh5ELbB5thPba35uPPTZ4DtweQrEKBahEo6NrvGvnPPBnZit1RGi1njUHNTK8xr895Nu2andSKcpKUbD3YTcPj1",
  "key2": "ZvJY9DWnfWfXjLfqkHSbrMR1cojcspMmNLdpPvk9hX5xdQcvWT8WejqyWNg9sQFHm1wnHZb2fMG5GCWwkkSurLY",
  "key3": "3oJEiPKzhahYo2e2zGLWevWNgUtsjR6fBKiHxB5ohfxeH4PxQkJ9Y84GZSXPrP9YLNRAUrPwdnyArTpz2Y7N4XkU",
  "key4": "4umsJJMQjbPigDtvNCuAGgQu7wjUtSYACmRA3Ag2YYk1VpCqmXaKqKLkriYkg7cGZ5Qapv6mhrCv2XC9tzPdZHDC",
  "key5": "47tAmbCqtGiK3hW85vXtZfAZMfxGPBitrdupepk392BQKzrRyxLEq4u6g8WpPP57AANVC3HBGafefEHLnfaTyREw",
  "key6": "maY1HfMWjcbwzS98DwYamdyMLaKXk8tjcsBhtyE8iM6GQcGEvFYMD7ChAcV33rHB2EgpRhnJcviP8TjnDWiRpGz",
  "key7": "2M5bv9rADJ1VLM7BBk8SYRq1c4LsmeN5usHwXFWRcTg8mWh15kETjgf3NsyjPd2dkZ4mBLYQX4nQ2m6ShPgu4ijJ",
  "key8": "4YqCwJ17PLWy45SxLmh54mkQbkUptmuyYxwKpRZoXuKWNp3KfJhjq5iCrUSRd1Zrji4KEYM1YE4sFHPnYznzk343",
  "key9": "3ni6YKYZTodDMYn1NwLLHZLp1scCsVwJ192fR9dttZh6vkMHmSnQr2wMbePrJx3kDLp4FoCKVNEccMaVjTbgwQf",
  "key10": "8qCjDT3ePaB6j74ieyh3AgwpQzVei4fZmrbf6RLALN1kqzQpP3EerLt2Ja5VQS6kah1GDDkvETdUEtsUnto1Jm7",
  "key11": "5LfE3dvn4edXgHRjHSWsrf943EBF9PdcDMSJSzoDVxEe3ZQVV4He641rHLWW26Bpz2D9vvdVPxbHKmWUczJsstYE",
  "key12": "2aew6NEcGphMrD8ucuyXaxK8sTkpPr1rSDCsfsuppPBES37WbAqTpwKLEn68Kac4btuVj1qzBcfhPRTqRvB3mG41",
  "key13": "3Qnihm4PMHs8W3RHxat1p82WLf9PHMoRRXLPV3nMLsqPs4wRLuzpjhs6jzgABcvRLVpwxGFFmJjKS9gp5sX4Wsnz",
  "key14": "4mM4RbJ3Exgi2P9MDmJazSFiL9ahXR6HdNniUFbwb5cwnQz4t3fueM4fWZr6wVsvWASxWARij2sJW6XpKTqnV91V",
  "key15": "5z7SUjK1QYjQXmtroKNiMQ1Cf7BtuEpt6tuQ1X7AuW8CyHaYosUP8btJUXqswtxBQ9Qnr3J2k299m2RswJMoFoEN",
  "key16": "5u7hoSHmiKjey8AUVa58Tna4bqH9kXByqVNgNXVL9nc8pjjDtqbDXqjttSvNpqLr7NtqW8sdEnzgVqz6eVNwBNVK",
  "key17": "5QpkHLPAUXaKJ1vizqqacJrT4WzRNia1857uDveoH3TD4BUWoDdrvUVHGEQkeSEgfTdBkrZnbkv2sAJ7TTSg9fM5",
  "key18": "s9mAEkyX2EyYRXXDRuFapFDGmYaq8QaZqccDyxqWzCwTtrGPs5JJVerKE5AvdVdedacfFb2Jvez39sJBABHyQ7D",
  "key19": "4Pd5EFoinq6vBw4TTupAz9USKZSVXHBp5qzGwenTntJA63ikQdt4QVtwpUDddFBoKqyrLbh4SPrRhSQGwGhSLbeE",
  "key20": "2kiy4sEeesWc6Eh6xYmyicLA76nyNpS72HLr5uV7Hx7uVCawiGnxKBRzy8E5QBJdYuqo28waoedRXC4UZ5VtPekh",
  "key21": "4ebssPefhy73gX6BBENviXn5xr8puiKShTLaw1t5az69PfdaQhKsSA41UwY8bWdXGN9RXobWitKzWUm6mNZi8rfP",
  "key22": "36ZSupPHemAkCDerdZgNAxR4kuNpme7P1qqCVRvBcaq1AqgrFwRzFYHiHq46Euo1ao122ZbURqztDZbbpkeUG35c",
  "key23": "bjCQuiDAXCGDZiBx2b8ZGpUEVS4UPJcXwVgFc2X1FQHdD8aM7Tt7JY4P4RG75J6vGMntH56ffYFMHeuHuBvMDwt",
  "key24": "3TcWLctvoLHvqXTuWWTcV7xLJYpKEss49gVgRKfZxgBvh44uYaq7AFrouGyV45ZsVo29dYgcd6vA4x9acaTM1ShC",
  "key25": "4hRaLt3aA5GdkSHqFPCo6kbCfCvhPiykeZ9maQ3ghrk9gb7MJhGr7HXMELaZptL8jLQGMrQLqEeAhficeSHAiGzT",
  "key26": "BUtbraeFQu5RkQZXvETkkCXzW2Nt7dYppNiVisQG2VcTvqaHkPgHUZwB9qxmJmo7DcYcYAW15EabwHWZAvEk48Q",
  "key27": "DDXJCUQSogU8mjDXUSZdNQkmqYkRszCKmKK5d9L1hpvEtrRujo5wYcfBioYYuP9K1gbS8NUt2ixs7zmKRgJsE45",
  "key28": "4SSBQxMupEJBe1wkWRJMAoLWc79UkYeaZpabPLoi5SdVZP2X3tT2VsK7zTzDiPza23WTJ7BLNXQqeje4XKHp6JXs",
  "key29": "3uzD24WCrbSEfcNkXo8Ygyb1JEfT4v8hWd3N45jHQGWfdcBdUxQd7wayCd3kzdzECRW87CuoibcPSRLSpv4mmjgz",
  "key30": "5cCxFEas7jiUU8ne56Qq2uuMnsN563zg41qtdkC1raEhqgbmDmMHa4Qov4ZDQcoVkqPNTfvE37vEp8rcvU4VLWNr",
  "key31": "5vS1TZjLYH5Hb6SnQTk1baBe2qSajYWaa7dCh4LF4H1snsNjLgFEPr5BwaKawc5cpT9xLnYBtaRhrg7oLtfRW92V",
  "key32": "2qbJVEnXcad2r2gyLJgSnjdyFTMBW2BwTTbzSVHtS6jtMsKgNfZSMhQcFti3RF7FAdvymLvwmFxs7XnHZMZq4k35",
  "key33": "3aXmNGxkisacXareSMqTwNaDWTAxutGrZxr5fnXTxeDwcjhGV9PLgPHjgtRK5SygW3UiA3yrWvDSRQp88mGQNShY",
  "key34": "3wFV6GP8qseTprLahXPrLXhhUYyFSLDEj3jeNF1nfJytPaJjv5tNbW9uSXjpvt2AQvzgdWbzPbwpXwn2gegnP3ce",
  "key35": "56RJQZsW4ufo5XfHMzgzE9mJYGCw19Q4M5XfuaNsz77jNhkAjTvngZhECRtpUUZJv3LqLbskN9YHzfc4pNrWv7pv",
  "key36": "2gkQ8TYCHFtGeRTCxo8kjtCpn1nsZaf7roVCWSaaLn9KT4ZYvhtHdesvpcUzpctpbXX7wWYg2zrD5gr3n9NoUiJ8",
  "key37": "3cSFvJXQovndzc3JzKSugDNPeUbzyRT5hWLB8jj5APJvNUC7Tg2WncKU2uA2KfsHy2DYsrfY8zGCaSMrbcsUiRCk",
  "key38": "3TJUZqp45xarhg9CQRnA3M32os749FQo8WX9uAKSLebMgjdqU65xaiUN16DtykTqEo8EucJtZiw5T56tZUUm4Gsw",
  "key39": "e2y5AGwtmq7y1JeqbZy724dat22p4naSdQiBb7NX3zJparxNSSfRPpgExWN9yJZnhrqoWo5nYZPD6Km9eYHeArE",
  "key40": "5KE6youaguCALYv3AGKAX3WQ1SVc4PvkTFHk6T2dkPZds5UmG9LPb2NwHd2umGhtm9MtcEeNFAyS4sMyDEp3zfRj",
  "key41": "iYb1wDTMCwGqoKxrtZWwVjusCHRffegUnxeG47fjmbFpYsWaMYgKVmCw334L94yEbQAHmt3fX8rTgXkKSs9vAz3",
  "key42": "zyydhG3Mktuhv6o7ybxfibq1wmAPX7RCWFvBqZSdyzth8RnWTT89maNTmWufuRC1nuY3Xdiehk75ZJznq4mfdsb",
  "key43": "3pqPCyjnMm6wncf92C86joSvtbLnkhro1tcbvnEc7k1BkN6Qu63828P5KN45mJSA2CTkWAEbep2YxFhuTsrjRWs",
  "key44": "2bLrfLGJbbX7PnLWhFmg6xe4HnSTGwiyqvRTWgYv986LdFXRwXGkRmriQw5w2XW3TXTnPri7YxBUwpwEwq82NLnf",
  "key45": "L4v49CTBUTi4mUKm1UefgG3EheyhRWAQrhUG1m3RDdFpXwaH5rm9fUsnuTq5YoV52ArXfHUeQzTEi3rRLwea7Gv",
  "key46": "4AmgXMGiWERiXumFAj3keZPBdzwHkheU9AWdefXgGR3fCGvcHxhwXRKeZG3t91k2caevK7YV7E67MYJe5k9Ewmxd",
  "key47": "2jrL4RyN9acyB9wPEw9u3bxTrK4KKn8DgspsVZFsodSixsDbwPQSFxrnFDrqvvKpekQqyeckS5mGJ3iC51pjdAA5",
  "key48": "3itRngCY3SmTgXh6WQd7qvEZdsyPHHufmkfBdVkJ2cnM8v4vt2asHHZqAqdeAWJmpJxvnaJWDdHwhiTkc8B2t6gb"
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
