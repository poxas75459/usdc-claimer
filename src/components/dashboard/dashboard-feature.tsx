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
    "444GJE4CeNRrU2A6smoLrLeTiPw3rcMXhaZnEK99i7az59jey3uGdeZSdGohVWxwM1Ed8d9DtqA6Y3oQNqKH9obU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSZsEtwjLS71pdPuBMkNjoZVewWitrg5K9sFRH6rw76eAZJeJ5fPbj6SNUNsGBo1bp6aERMpTwr3h2KQiS3KTn2",
  "key1": "5DAe8Kyf9zZw96QhuR1E2JPD1A9hqyvacXwXKcGgc4dSRoHgPccfySyh4XdKL4JXSJn7F962NJJN8un6JXADC3ZE",
  "key2": "5PGZo5srA7vVHgDqdgB3xTN1jVevRdxFqSfE4k7UcYcnjtiBozzVz2B5BXqQ9cu9Zgo92r285KTxnEewVNLNkJk1",
  "key3": "qWwHHvYjN8U6b6M1hmWBbg3zvQf3P54kuoay9FcPZuZESd7W4XDQvMmVAnHonsPhosb5eLhPoMeXHU9jYYVhm7j",
  "key4": "4yd79MM6nvSbaUY4hFCWpxVZTxTAsxZRJpjveFYXUiWwSh2SSaU2nNG44dvexNTqN6y3Pfqrxh9zUyfevCum74eQ",
  "key5": "5XKPRpqtFJS3srrT8Xor6oCswHmuLNnHLCphovXovAjZs3dDkwnX3Pt3QDjLh61znccguoA9xCaLRTF726WfPtGk",
  "key6": "59ToJsBNpjNGzMwWNS1SF7KmjJKV4VS2qNE7Bdgj7uWuE5oQNSHkfKRi5eiE7P4Q1h7DWaH6acK96zXVgoDnYdiF",
  "key7": "4p5kMgkKmohqjKtJvx9PcUxTCpYxNRRrmxz7e6BVpwndkHqegQXo8BTfjwnijP4aeqiyyDUj8azP9949LCcu42Jd",
  "key8": "3RbU7PYfpsjhrjHgiTrnnyGGz7jPgD1TQR2e5tfkVA7dnHQbZigEdHAEPdduAUfWcxM1nTHFGJX9VCqYj7p7oMpb",
  "key9": "4Y7aSH1kTRWXqk1NpmMnD96m8gebGxL4JvJdiUroZ4g8nW4S4KdRr7Ya1J4t8wwSo21SKx7uS7VRKUibfP2vohjY",
  "key10": "ZwY2UjuM5ky6aSBTqE5dy6pCm4sEBSwuvmSiEJTskF96rn8r5mahSXqsYffM1EZkrpC3GCxSLDms4gCHMkju4A5",
  "key11": "53Uy7Lb9zUd48v8r8g4WHdad84QxQMqjQK6Rw4akFsQCvzBRY2BVAXcCPzq7xny8A7D24CfzWd8CpTq3Mz7Uqthe",
  "key12": "4v2MGz7Ca7zZdj8UjVYz6cSsw4rF5QkNJDK95CvtgBoK2me1e49UuykwBkgsRpBtrxmzPu8Su8jg9UfTVCu6vNAi",
  "key13": "7gn27KCyqpGygdFqtsozQyEdy5V7GbGo9em4EyZp7Xc6sVTin23jfr3bDkujNyrsAGTWeCQTGqHdVrAJ2Di4GXs",
  "key14": "2eNrh1Qz1tE86WHytiho4HgzZaYryMrKQ1GgHsgdathZsSUWbJWB5ZrnQuecyGG7DhAg1nwXTfVYnkzLNyaLq6x9",
  "key15": "2M7i7oEXgYNhNqoNBvDE29GPYbuAbMTtVSnDNSX2CQ6p6qmXAiHJzvcnABk3iyUcfn35oBn8FHRcKeTLwC1EU54M",
  "key16": "bB6HvEZs5xQa1tvz6wfEZqvYs1Neygnbzvf2J3dxHt8ziNEMjbPfs5kxMZMwSbaCkdWwL4yXyYDFzEFXGPdNReQ",
  "key17": "5AHY58HsWZ9nDPNYH2XF9BeCMBDcGAanrqXwNe5XPRzgQXkrAdDTmR1gdxKA5XjpAvs24Mp7N25Lj5VdSaWyY3mZ",
  "key18": "43h8bnpsX1UADw759VxuXSacK41yvStsJ9u1RRnxXQqsRsTd3XcvAffkje5V6DBzpJ1nDmWz4Dhf9HQiNB5vMa9W",
  "key19": "5vGZ6fEm71xZoehkXcVchy3v2nc26KHXyUi5RVtUw6VMcuBWBykXSXhskZaj6X7Hg592spbVc65r1TA2Ek4jUsk",
  "key20": "41qKjDdF3qA5Qjroetcpna9ex7oq8ZsogQPBhp95j5GJoUW51Q8ZF86ceRfAB7nBibdnZwq2KUzjxoHi7Hzfbh5h",
  "key21": "VPXZnzxJpqAmpFyjxYfaLFB2XE3jM5gHmzKA54nPPtbQ7EudMgD5Y7SaFxcAkmBmgo7eVzJrW4n5gzwkbbvkqJ4",
  "key22": "4qo5xJvVeiPuZNcBtQvw17poberKfV8PQawgLDmjLwLonZUt6duoBUiNfYCqgHRtQvSG5vF5BAbJXFj5qeunqChc",
  "key23": "4ZgmbUUZd9ZSP9mvkDFBPGG3ZZjhY34HpzMwAiRma19Dgiemj3mT4VXHLtPtXYqEX61Ad4crqbqAZLrKroYJcG2M",
  "key24": "579NWiU8f8CBzZDuWQuWY9bbXoRQp1E37d8oLM7kDM4ao3Rw53xyrgimtGte8NTT3uFnbv56kpJ1getJ5rQTbXH",
  "key25": "3ow4mCRRPwanhZPNZemFgr5wqMLRz7Ufw8dF1v8f7oqKZMeSNouJQ7AXTxmPXuBhqTqvzq2vkkAsMDzewa3ojXqa",
  "key26": "vqV2zi4wL8wbqDKYPw3bqvJv81D9MWox9nSNEK5SH6KcQhGwpi7BEBarYebvKpUq2f4TgTQw1FXfYEfJ6o2tuLF",
  "key27": "4GzDru7UqCyaJas36L2MQfw8LJEcg1bBEdeALFo6fbgW9kqcCwwEDYXGGNCpWJZ64pCnLyAeFrpu2viWdJUvGns7",
  "key28": "25fAcAzedt14bUoCrBpFDRLvo3Lv3iLv1fnMQWq1D4bHmUeYUxgC7Sbdy3c6TGzJ8DxVpwb6DSDDr5eXTqXgtbuY",
  "key29": "5G3ZzpGrqx68UnXp1Giyb5KEYUcJ4ZjtSCyQgTd1ZNovZZBL93sHhy24U7mGvgpan97JYeXezxiTq3KtHn5DB8vL",
  "key30": "5xH1mj4CTiuiyE7Km2C2ULL9GiQwer28NsRCQZq8L9FZuDttQNbnZ58e9Z7RLfwuHUg1tG1MewNTq581ygryb96w",
  "key31": "5tU1a1fBdaRLZAnSW2vHzVhhb8BDzyhY7uoSMWCn5Cqet2CBtuWk2GwfkNQTjB2onbUSm3Zs4Fwq39BNs16fyYpe",
  "key32": "64jEfmgxEnFGo5ht2KqYFi5dN4PYUuZ2AYkAG1t1jZxwotACvk8NobnKoLDB4jmDfrRYyPBEsTojw4RXefzkQaDw",
  "key33": "ViqfeKS6nVCwwAMbnqMx8LxMmCE48k6sDzYVmCpMBbWZqMroDv6i8gvWbZAJLHqB6P7BmDf4siTsKS35gEJCwps",
  "key34": "3JFbTVj5jfLp63t17Htv6mjuKQChEELXR9zLmarWYFdrL241v4YSuP8kdGT3iFmNXL9bP4Z6ojce1cBRRwWWAVmy",
  "key35": "q2kXdiQKE4vEU6NcKD3Z4EmAVjQrNvA6RuZcbDsUZmP7DBWUZCpyB5iHTTq7Edd8L89hvcebPjTW9Fg3hEJNB5G",
  "key36": "5DNCeu9JxLftXiAFtXBAdkekhLkMbcCqALsn1tQq6x9rpQ45yUuK2j7s4FDzJYvMedQjLVWmV7KmugoSLKz7eyKu",
  "key37": "WQ8cs2FLTQAJqci1R182TifKboDWgGp6guDFY3B8u3rAKYznFuQtooN5jUhTdf2PVbh32VPkbTSzFGN1c2vCQvs",
  "key38": "gn5uBvAQtBcDBobs1dxvnVeCw4rp5Tt7W8WgRcs6dfi3PfrtScuU8EiibbcVyDwa6QPUnY7oz8vnawPsifC5R1E",
  "key39": "5MLvK5p3porMDRX4pTARdMdZTysk4oKgQA4EQ6EseohUTbdwkaSMRhWPaJsBzeQHEKXCEHby6g19YzV96auRF4KU",
  "key40": "51dWHg2XAqcyuFLzTiy5zoBACEGzRK72jiVp4BN4qK1atqS6CPLqndxQyxipCaSSb95omzkRzBfXek13KcMXRG37",
  "key41": "4NPEqg91UxioBWtjgw66DqHfTyJYKpinaMjojxGo1HEdsQbNG4VzhWps1QcVSnzkhQYqogFxaerJVdH2MuADiHiV",
  "key42": "55TKE1W3hpBYooCUXZ5Uvtoo3CHksNRqcgMMFmJG3SsE6S83zQemPmpC6bfJ1e7qQ46SvhjhgZWP5bjLNzuko6X9",
  "key43": "3Hhdx1zKmAt13igs4gyJgrSAVod3XUrm4Sja5qGYn1QiygyRBquKZhD3b7nVWNWfV1XhR18wENy4nC9vVh22eGGP",
  "key44": "4u1Zyt5QMsJcpkrr9q7U3TbuQBNDaqhSnTDJrMhio5NKKb1WCyNuDv6CBEvR37aLP5Wde53QR9zy6mYrQVeBSgAn",
  "key45": "28qXoSWYKg4aWBU1FsDTHgfXJaZJdqePbEoocF3pKWgRpi4DhnknEmy8hPPrfpdsJCDTwVVLncLEbk55zvmohbGx",
  "key46": "3pCDBNQLZNxsT3Ko9fWw4Ktvs3AitmdJg5ENsZnLE1vwjz5Q9HaNcnCkBLQ7nSykkNKJmUMxWemq5LCj7oSyySDK",
  "key47": "2xJ2CEW4FA6LhSDeQNdf9GJuA5str6KxW3QghnJFgZPsTt3Q5Xcx7rDsDGDXwdhL8gMzvXHe7dRNrvsqrDjckM1T",
  "key48": "4adg9nACP8KQY3uwUWtEsz57HpgCcBHemf4QAdVBeETQb2RC8m8rhVqPaUFYGMfd4dvuTwqZPyHes1Duo6CsLyAg",
  "key49": "UFXpfuM6d9Jjr84nDXaTVECYRfCi6PUyW8xLEqyDAC2qA1CxvEQQAxnWyztaXhjDc7syvbmW58aZuU7JzFWc4b7"
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
