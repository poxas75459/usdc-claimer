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
    "4v2Q2VAq3oWsvHKopFvhWkVm1sYHfe6aqBf7g8iiX3J2oYjtxQmPaDmUPtNEAyU7bEt8w7ZH5DZBx9VvVzoxgRF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428XHAdLEwu14iQ8XmK2xmqg3CFuE9drhhUMyiWrLDmjrntrRH9uWviu62D7bGmWCs1FNrAN4PddeEfDrqGZGD3b",
  "key1": "DCVb6dA1xrzj9EjAZazQMeyvoVPUvfY1P8DVn2UMC8Y1iY4i89Vah7kjT3zPUVGw7epEPFkBix1iQSNnb9ozidH",
  "key2": "2J8nJWq9vQfhaXXBDB1Qgyx5bmZqx1XEcEBBPPKgiCRftBPJe6LQUtmbnbygAP5mzvQKtmdz3BzfKapGxPXXvnoL",
  "key3": "2fLGzZzpz73Woebaxq7hsXSRY76uaA5gCYU3BQiUzCd7q1tXMj31CW4LFVvEbeBU9yFK8mdMvoH2ga3c5kxPFq4C",
  "key4": "3GjQAMA95pLHyvYwSrhHXPbSf89jt93skxR3qJ4bR3z2vqZQYYw1jWg4mY1QuP6HNDMf4tf67exJHmBHPvZ3UBTs",
  "key5": "2juRk9BbLn21gDUGjBJnn2HyLVzmbCf8GfA7Gbp1WjemJzBg84VFMJNwTdmfDP97e8jpVHnRLRvygNgpRPjVRYp8",
  "key6": "WjMUfwA6LB8shcC1xiXJkEeiS3AqVDY3hfEuvPWJ5ogw1UNm8XGywjyF9TdUcffNW5Zmnk8dbbHmcEpEZ5abF1W",
  "key7": "3ez7sTviACmeg8q1D1skPkHVq3xEFLJSwwJQqWvda4YprrNrnyt9aKfebyVKAkPoQMUcDgctH7Xdx3PJC2bSDXAz",
  "key8": "24rnMhFmuMT6r1cP3T8SztnaXCneSXccb5zp5VG7eLHiKDaG8jn86xxRMTc6P9xmQY1dozy4Cab1RhWXoQgkecsF",
  "key9": "2rCXfhsyPgFoL3RKF4cqLedu6Ra9Y4vu6HSh1tiNrYxtHtiSpXGJGztwaoy4PJc66dYYjH9R96NLTWJLAULuqFqQ",
  "key10": "4ipFsnJxRmxGo48qUgAJkV9rYE7ouEUMr8ebYADyaeVwXB4XYDgarvk3ahWvjP2wEa1vSkQfPy5e8Zz56sDYEnL7",
  "key11": "3bdFU9CnpJzPZ9tpcBoYpYLmGTJwFwmfec94TuV3JHKUewP69kLkM1n2ripzTYyhRNMhPBYDqTaKenGuqJktYiJJ",
  "key12": "5eNEtAHQGbxBX6X27L1jfUv8SdCmTyPfXG4GK2unLBp3n1bcSGP7d5b5rajMbS5UBEdhLuqr6UpELajR8Bdrd51F",
  "key13": "39XrFuuXFBY4aBSKB4Fr2RgkU7fDb3BbsbmssvGRuRgScKsNFwPgpQg56c824jtX21wQvborAvy9tXtkfV9JqrbW",
  "key14": "3fx9srfEMiuMgPZ7WUdDpjQ2kZJFb6Bv9Mb15XbEcpfHNJcJbgkZPFGtzjgXeCkxqjP3tt7fbQbjhDhotpp5KaWD",
  "key15": "tBfzLpavkZto1oF4vNpUgtY6W65XUedxaiqbmtosCkhQ1oWwLJw8KkYmsmHoZcpMsYJuNCr3WhmcT1hgp1sJmck",
  "key16": "459SgfaQFYYJNEDVJFCAxJCrqLFuyctDCiY4kH6pPymxDAfhgAhALeaib8uKXSPmPKrprhVMtKa1CbwNLow9cx38",
  "key17": "2abrnDQLyKmFKieit8zLoLfhKPEq5FMk2n6G6Kp1URZtePjbzmLtKniZg1xAQDxzFLVf8gEH4DFoYZzfoV6cvv9g",
  "key18": "3FafmgzftTPrhXaqFUmnofvYczMYj9jDpumnUbMwae9hqxRH16uP6xTgX6a1uJCzx5Rtj4dp2VLRefM5rN7e5eEU",
  "key19": "4ntuqjcVNvdjp5FTHhwmDdv6bg9a3YabbP7uTJkLkSqNeRs42uiQVPub4Lm1wRg1SAsFV1eYogFQtd8tocDL44bz",
  "key20": "3hcqwq5xqfsDLjKWzt1gbjwsHiEX6PKMcf58LemZWgqnGmnnVJw5XV1yU4ZkBqrGhAKbUnSStjCMQ28NdWuoDvLC",
  "key21": "TkCi6xg3vodspCT27us7SMCiCfoxNaoEyEykAozQtHZ7vUorhNEdn1GYxnXHYNgDPxF1AnpBdZjeqozcACxJsbz",
  "key22": "5cPTRPUzj9g3crhGC288xJNyJK8PFU9qH1ZVtmwacqaYirFZnJbjNzcxrE3BgGkX6iuwcEiLSsE71PbuYxpgR8mQ",
  "key23": "5kJM38ZA3HLDfPskVk4fQyt5KdGgpSzMMz69i7m6FdbYm55GBRAGPWRyF3PcyEDAVYuj7AkVcvezUSoGcAwUktqJ",
  "key24": "51zhZjbP8rxnH8B4mh9eDT8mMuiGCjqe9unPxno7SBrUsEUPY3i2d4bfg7DQ4DFfF8pjoHwr8fPkUQPcUc2hYeNv",
  "key25": "5R5Fcheqmj44mr63vH7nPdsN8RpPoZXfthy7RDBgZV5ZEcr1HveefV1eCCUiMC7aPajmFQhUx6FWmMSkZkAR8UyK",
  "key26": "5aCzDSpgsThX3fSeKbje6RXszW9x7VSiF7JngqrcTd1kLNqgnt5t3hebsmmmVi6v4qQZdGV6UBNkyBvbFsxDh3cm",
  "key27": "3Phm28tGWhRDSBDELqhrSoaYVsuVWPitfioCQAZxkaFBpdW7Rr8rekLQtzYunUso3aC92MUo8o5Hx7CcPXXBWe5K",
  "key28": "3qwYa4d4MF51yYKfDz1xurkgkvS5wg1MdHhhx7pD5ymm62QNrrxYJyv371bCnDmxQoCjvkanvSwVXrvzCXZyNMa",
  "key29": "5WXzm2TpvnAWa2rvWe77ABZDooW27ZXRX3UELouZq7eKV53gihN4ZXB6gFqc3adTP2ry4RT1q3XCGDVg3X2dmWsH",
  "key30": "3fqVK2d4n4eTjgo5eM5rb7g1V7XNWTzb6rATkBEjg7v8BeyZ8wt1qGg7HnYSbR7u3kHPjcpbWh8RJ9yX3DuaGiK",
  "key31": "4BhNTMuypSQA5KTYwMGoZHcQpLHivkFzfZc7hS2Ev7WENADbNxRqU4F8ZCTr8bNkdSNjZXzQm4dTiEmGcJS2L8di",
  "key32": "S7BWvAzxp6GzXqDXmLVwWmTsoiXymX8FFooDt7w1LND5YQM1tWWRnwEyKxis7aKy2GKjCQsEAFa7YK6RmPawkgU",
  "key33": "41NbBa6FZLW3ptnptznFbgGiVpmVGntRAt6TFwr5RYC51mqe5kHAVxCggA2GdoEY86gDhu219Fp81bvNtK4877w7",
  "key34": "4eBDt5XBytrzKBSzre2rQDvhcA39gFeiK17GmaFggyNETQK9NCevaaKFkKkrXfWmH1zhHVFdfu6YryMQpEWEBWTB",
  "key35": "5CRmHxseUytKhXv2C6zby4GTn51wxbJZSRyRRip5FYKMvrrmJHKqAsmncHhKmPbo7nvaqtRhYJQD2isjdKK6LnMi",
  "key36": "5MpHvdPxYbc6DF9jvUwRCeQQVapP9dC1dryRna1MEwdmYQ3gKKACG8g3i3yVXZEwHGKk2PicSKz6BAN2K8CnKeGD",
  "key37": "5X2goDvBPPzxTnQ6GJYCqs635A39tjL4gYFW5uMW4PF5d4k8xUVSm7WMwdiYyQUUPBBEkGzeHhhZ2VS8Jc3hPYAu",
  "key38": "3VJvYpk1aGiQMJwG7QTw5QfuUzvRf1Rcga7ZQN7gnezkJPrpXpDws7Yy1VZ8qW7gY8ZL43yWkw5CRFrL8DcDFctS",
  "key39": "2DYa56mfTVt2HcZgDBgVtKJvZqAk1oGvzKw8ucaadowCy293wtLSckGFRf7mtrTiNM7wTT3XsdNz1XPzvpmH3Sgy",
  "key40": "2YVfrfL336ieyL7yCuBMwvdcg7d5VyXoYurCB1SQcEhnn3GWaZbtXgfJLHm4NK3ak6Au9qmvPhoY8NxTvM6MmPFc",
  "key41": "2jsjfDSEJYfLdrZSZHeQuA8pjUux5udtSyHWgUPkt2cPBpcSpVPs7793A8HVJS1hfh3YKiszfXapRzNorrbB99eg",
  "key42": "5A7349R1Rhd8S35PLriipgf3mK2xdzWh7kL61bXQj9DY4t6YuWo9u4GUQyWfNFJqdPg6HMojq135xSoMjZgvUs82",
  "key43": "vvEjkshfSoZchETgBkAsU2SjZ8eNWn56TSWRD1Gkgfs4MW9Wx2C37L7QTtFw7qCgTps9w8zZaFYk8dCrBbKBetK",
  "key44": "GmNTAeDpCM9pFk4Hnrdx3iz1PREsTcPpUYqTBh3BMxCbGZhsuwS6egBGu2p544zUMTkjSiJMKwvkEwHJzmvok6j",
  "key45": "3asuxZw1FDPjjmZVzoEo6TN1dgJqKDHNAB3VyquprchoSKQKhPthe3n1VQuYgSvS9qSeV2byLBY2FAjJvX8RkD5g",
  "key46": "5n46c1BLUMZU1r7PVP8gpwK4qWQuWDD5Kat8Md6EbVMsSAJbAFtoVoEN1Nuc9XrfMrJakKxw4UJVpznWoGjpt61s",
  "key47": "5JQGCrSBdtKaTF8LbuwFv8KVzSMiS1oKc7WnEXmKdp7vjCxag5D39n4fRnpaaNEn6QH4x5CCRyZgSthQic24nATW",
  "key48": "GkoMXtB5REjqG5QCDrGisymTJMxSaau9hynJZbXsZkqf6ySfxkEJgKbXBE7fPzJ7L4zyHHDNg5Zu6JMiV6cv9dd",
  "key49": "4N7BZMmuD5Nvj9ai8E78VYZyAkrf61F2i8WHM75kgokAg7faXUV1mdtM7XcV95L111JYv1LJdZKhV7U57DqwhHFK"
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
