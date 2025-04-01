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
    "4Gj4XS5PBLQMabx5n82cVCcMzibUqwk64eJMtvBbPqzESWUivJQjEnEQ3atdpXy7qscLnRAw1esoMjyfsASRUqk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CD4mb9aG6q3HiphNvrLeizrE2yazzpfgDYig3i4tanz76zMSKztr4bjh4sin6HZ5FxA9AmS51sJpp5a9WzuDyA",
  "key1": "3dXUhvdXRUR7gaRFgXZwGQ74664jqWGDPsVHySQhSszZwQ6JphToZ5c1d1VT5DP1QT3k5Fb1yWKojyPSfCnY2HSY",
  "key2": "4a7GEiqSqHsQiBi2HSchqpF9kAvwx6PcdpAA5XjpHX5nbPAyho43nQh14zcRjaPmRNxW3Qw7KMYqpkQMy2cmbcPG",
  "key3": "2E32tVNKGy6tMNnJF9hXGcBMi2F11evwVTaGBeAGbH9qJCFKCY5rCmnX7G9KFku8oVFbU6U3KEUE73ze9W1vch8u",
  "key4": "4H8zPEaCyn48ptKoNgD3zheSZHn9Ni5fvk1E1oRLMboLEc1pC4JfJL6fyT4E4MqT9G5333DD8H8ZqC2xJUmJHfby",
  "key5": "2NA5toTg2AQuh5PU1ygifwcVEdGd2uKL3nkMNPVLEMtXmuJrQGn1kPUs6i8mgoRoNVn37rfiZwiV3Bk88KSLLpb3",
  "key6": "5Z1cPNmKW9rQyhXw8A5hgmp9SYAd1MiCFxo1CW3UB4Az1jKw7yEQ5VbQWvTQrv9NkhrkVPQegSkPDMLXetEP6Fex",
  "key7": "2aucmkQ6PsiMnbBVWXqj2LqXhbpRU7kcMbsE8pqgk8za2uAVgbkGdArTGUuxteVhg1eti1gyNDD3ppCmSrH39zaB",
  "key8": "5PMt4og84agcYreTW9fAoiTKMUWM1NZCGSKuyHGEgbbnE5tXyf4aQjQ91KwN5Ss8hkX5pyaKJ6a3P8BuimG9aiNs",
  "key9": "3pwi8ZpDwaf3djqYnAyFuZ9UWexhoj9DAsGgXiyXx5e7warQ9DtcyjLTZtWtYGzb1CdPMmJAcwQpgoZyDBNYKkVv",
  "key10": "3SkTCUGjCkdcmhbAFCdt87fpTfHMmsJHMUAsg3q4sxnrryYA85AxXrsCVHaa5tHDU5qUHogVmVh4jhsB6dayb9im",
  "key11": "4LFVBC2wcoA3fDa5W14TunygH1d1mpuff16FDtV9Ptr7DZ93DCoG98cG2cFntcwruTAvfyuRt7vDZ4uKyVzq4Uqx",
  "key12": "5r2jckbjf4MLwr5QoQWLeXP8MuxnBcxRjt2WRV5YqgXywKFLPsvfyEqwxyNq4uUXRuxa9eu6Aqbz7WAxbnu7mdxu",
  "key13": "51p6MQdchYjXeWtUD46ZNocrzaWGQ28gq1PLnE3oqjmwcWEaGDKizVQL31z238wibzbcQqpJPuxeKiyhsiP4kXEA",
  "key14": "vtKrBskqeYjjesiyFhZJ9N2FRqrwuD2tHneHYqUDDQw82YpeHiqiZure9UZydwxkbxQkGPbV3jQqXmNbQwTeXB2",
  "key15": "786KiTzxSjKynFfR8yR4Uq7THgNMhM3vSFEfoFM3mox27uKeRN2kigS8z4cUrmSivEGEfu3WWLRcVL3Q6Qywza4",
  "key16": "3U2nyzs5uqBZMbqPW61JLN7XBC7U1bz43Z8TKnRRt9Z8ku2i531oY2x46FkgrHFq7KeFbDmc7fSFFfH4ufu1SmPP",
  "key17": "2zCRKUZUAuNtvUcL823BuC4f1Zq94j7YE5DUTAPqSLUh83Xy8W7Rmo4KK9sbHDGbqLnjBdKRHE1piVcufoH9fu4y",
  "key18": "2H3WgvGe6PdxXd7cq9JHruSAyd77hkiXddzXAR9rKGbEWXXWpkxho39f24cuM8e8knwd5N32D2oo6Ahvj3aSt7in",
  "key19": "5SRNmZZWpkctsuZ7qS6aupXDrs6J27u11BswdmKsEreFz8gPsebJsydNdXnDVEsjtS9vQpmxW7D6YuTKNMQ5nyxc",
  "key20": "2QB5yQhcsmyHSWPoitbURgHoL8DPCocch2iiKvLNX6BLmRqT7erNMWRZRW7g1K3vdRCVko9cj13Kn6thUTXxT9d9",
  "key21": "Kd9DHnuL3bn5oV2yHcEaLiXVUNJA28fp4VvMvyuyDaFEDoSz46Z4rG5mTMxGz3cZTvi2YDm9eu3V6fMCQX1cNbh",
  "key22": "2w9keZTVFRbHgs2FPQXXu8EUj4aoNAZbdZEEkBN71gs4yJH3JWXdTs2uqhmJXDEgCtC7mc7vqUZQSmEffUR6Ar4q",
  "key23": "4skTzCXcDcVVofciKZs7CWZehEU9XK7DhMuwL7cX2QWQBfdgyrRwsxBW1ZUimu99MPKpwDtmJpktGrCHJoL9fPLK",
  "key24": "2cSGDr7aHSF6KarhQiTLMM4kX8KxiPk4cKGsyTTJHnMmLUJXDJ5St6Ug6wjaibDACkk89ASE8DnbJj9eunWqH8B9",
  "key25": "3VzzfDK73EXb8qtmUSVU3Vkixc41aQPYNsBvoBdoTeXJMUvVjWmgLbcQzyi1o27ABywyxywTbVCAqdrVs11ueatV",
  "key26": "2DMeJnoDjB4fBxq6Qk5BiwLg5W7bYL9tYnvJpaEnXXosYRZLRsSkm6TmUw2EpDZ2obNSjpKSPujkn67gDXs9h5tA",
  "key27": "4TziWeaWj4UDxvPUZ8j97mzKCNDS6xk1E4phUPqUKnigiCqm7hvs3WrwRnj6BBQZYr8eATa6Aa22ptT9wnF9quUA",
  "key28": "KtnQ8c3sZaBXHme8D6aGvAPB8VdWPfw8M6BCXrE4GUxDcjhkwiPJBfGBkqzGbBrzgPekpxJegBWJDPdsHai1qfE",
  "key29": "2casqhoAEin2s3tH6G98LJKuWyabUWtBKEhURq6qbRRXF1m1Z7neZzXGKa2Hgj6m6iDrt4c3msPJBMKaimo54Bsy",
  "key30": "5eL5SnRYvQ79j7hDKNCEgvMSdKMB4bhprL2vEMwsdS24vqW3pzuSGib21crt1npb2dDEfHxnQAVfo4yAjYZXXkzA",
  "key31": "p1nAxrYciFWkmTYXC2Yimo9w5NLLKy59ULhyv7YSprC8sGJUvHkaPg8jXCGKAY6qsZbzNptPNfXrsMPnHkVzha5",
  "key32": "5rQxufFCGR66XdMSmQuZ2QgEEEqDNhXT7C4b26x2YjkWg4dpfrTTAfWaHXRmxeZudhfKGhmgjkWQ2dcAdsAsotqY",
  "key33": "2ALAtbFcJ3becp8FhcJRa1b2TYHmpsSUQxuxXBaaKt5n2ZRchUqdvSTRx9RJDYfd4XHkdpQ9fY4kZRtXSshqNT7G",
  "key34": "3VqSSDrxG6M65GVEdeTt8Ar9GXh5jWmcbjX5njRiUediWoPuicqagZPtTE4txARqAx3Ff19xVXDz2DMR2pyr2T56",
  "key35": "Me4vRKJ2XMP5g7iyTVim34zdkbyT7PdFWkinVEiUY1uqefgeJiTuujZ8UjxodoMvFC4vKRSn8c4Ag6q4wZsAUtH",
  "key36": "2fh2eoKmrmpo93T6utPBDU36czw7xgUKwYcRZR6trTsstXGiwGHKrwiDdDrwbuA1ZYAL5xhL8Wp37N8h4Q1keJVg",
  "key37": "5tDX7b6kW36MUp1TDFd3CbSW9f3NHGWY14ZBnBsMhWXSXD32m3SZnGhRqhErUwvEPstKWM4muuTSErd4eJCNfCR",
  "key38": "cVRNofYgP6uDMmZh2zqiCXgypjecVBeD1cvF3crpbCNoxhYJmRzfC1nNshgt9reTb5PrSCLtUykdLfbsFK5NpJV",
  "key39": "2rofpKePZuagnzYTokx1X6vkdXoN8LZzP4iggbMAy6FHRLT5ze8vsxb3J1aZGmnD4S49zwP6wuAB3uz3kezKjZ6f",
  "key40": "2SViStybwphzcvGTXfpStRoFNN6XMgDhdgQKaauJwuk6JdkCdj6ABTmheHDF8gGZBSWt8wswYwbU3uQbbaTjmhaR",
  "key41": "6TcEfNBbUVFiGB9jqWWemfa7U5tZng4Z1ic2kVwcfKypkLsZDWTtE5odqqxUNswJf1f8yxS6BRgYatxuoVyW8nx",
  "key42": "2VVKz5uczi8mVspTD8zDXBmaJiCTRCBoGtBfL9sFdJKtsYALKoZLPT1m9ehcNFbJB78WU9wSV8y3MZPYT1dagw9F",
  "key43": "5MK5ZStK5Z4ee7D4xg3EaoXUACcUGwjTXwVon8vVGMmuCzqSoRohnxzfydFuK6GW91Uwx6Qs1qd1LfKXohsnYanL",
  "key44": "5GDeTr1nXpfUxQgcNTB9mnCGrK2NLhkKpbMXReS8eomAPPqJxMtQc3iZ8gVe5sP9mNx989Ssm43rMcsHFPbBdSYk",
  "key45": "9fWqs2oa2F4JLDVyT4KkG62wEnPtMdEyj7ktUVxERLLQHR8o9FBkoXgkWrFRUL1QwLmnmggFhqZKxBPpRDvxcWP",
  "key46": "3FAp8zriNzxifEureweza1bn3VKAXP8dwmGjrbCSyf3oUGdVs81G4Npu7wWv2zJG38f1itxrHQ6LFq73SMk1zzsF",
  "key47": "4bgVsBddx5wgH6BQC3CTkQeBmqawvy8jzT492EMBTVz3jsFk3R8SvnUkyZ9fcX1agzPEBkPETnpcNcMDW6TJSGqj",
  "key48": "pEeWFvyYGMNRYYw47DXu8WfoPpPX5DHnRxLCVyBALdivaNLgg2HR4AhC8yT1kWbiSce4SWEZAXnJ6EoST73hcSC"
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
