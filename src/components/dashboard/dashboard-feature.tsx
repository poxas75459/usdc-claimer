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
    "8aLjsZx5vnJcjtjp5tRKzZDmGuCC8vw7Zu2ZYtnWtya1oTgUpjZRtaYpgtLgNbnfWntJA9MKFnX5gCVMFhS3yP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A7EaWtCcFXjgLjj6J5JSaeakKe8kP5CguXsUaKDJuZRdt2QBRC3NhfbAQrZErSoYErcDrQJszJwMWe9PAqMYtxX",
  "key1": "5UVj9UDsWHxm5N7sJ85WyAXUzAaUpFFVJaCzXN13XF28sVrMZ6tkt7orGCSWdJ3EVNtRBZZUYkjBKsVFFDZqAYmF",
  "key2": "4SC4V5EE1u2t6Bc889radWxWvxng485YuKLYQLzbAppcscRrdZTqtsKBhSJ5ftEpgxaqXW4LGVaufNGkpZjwJSw8",
  "key3": "3Xx4WEVT7SL4ca1meWNTR1vzCTqNJTd5HN7kszVBG2VtzFPNNyBfQKsCSCqmGoV4YuhJ3PprsmWVJJNo5qZRLkdS",
  "key4": "8jootFDdunRKgC55X7Z33k1atXoyAfN8JsvWaKcb9Ck8kqiFKDHpQqfLC6HgBsy3irauAoi49kx3gRsrGzJgZpU",
  "key5": "2tpPDCuMv7yRH6pbWt6AKNYA5EugXhuT7jr14PoCRAtJSnpc4PDdqQsHS2VhLung1JDFswqsfDmneRgizwHZmfpV",
  "key6": "4U8mjMwKyWh4QYUepGembdrwLEb2s7jwfUrtHB3AmVAy1v1mYhKadEXLxPNw3TuvfWqTok2kxCtrJD7uFfsM9Xyp",
  "key7": "3B5cnAbS8pwaX3xBwUVBovxr1rgMxKX2tm3J1fAp2PYe1qnygYVGWg1ckhMHUs5wxxDkhhbhB9qtVGU8RTZ2ccty",
  "key8": "663Uh87H6i9urs3KnFtpnp1iWp7jjenDNNnb7zxBfJfghRLj55A4VePKDUsH2LPq8Ab4ezBK2tRvTWdVFqN3KQxy",
  "key9": "2rSLbZE3oNEhvb1n5H1LVnFPUy5GUkrrVubBN2141cFt1cXY39LXvPUrFeBA1DpHxkWDBqrD8cLuNpjesCFjGckR",
  "key10": "4a9ePx1Q1r5qsoQ8XHSxaiRSc4gPwuCY2q2SXVtPPzYg2F8WkjMbs5KQELtVmkaNKFM45jT3h6zfPKuXxtVQftHP",
  "key11": "5jcRRK7rvqLSSTEQuymbYEZ5y5FJpGxx4bK2J7qNmyjFnEUhwBmGk1J7sJNtpFXE2hxHR9weqrYe5C2vqTv2hQJS",
  "key12": "5hnGpwjQ5j1E4AaiQ78GfGwLtYEzGaevSxmiFFRoEUCT9M5vQZsm9BKgdnh6mTBEpt61c19EPwwQX1E5hs16vjDj",
  "key13": "21v3rMsW8giqbUP73UHzTDiUQPnVvPcWU8uVS8LDxTpmFJ5CUnf6GoXm941ZPckkgJerVekA52QmeXyaRPZmsCQ8",
  "key14": "6Kngh1howasUjVMte8jUaWPYMyEHgHXfu61sHWB1RNaGid9iCFzvvpKMBTDYLRbGNbcKrxq7peF7eZeMsPFXCjW",
  "key15": "2NGYkZLZv2sgatPdqdGGSPKh7fKMJBTLFWLMcgRcaZANBmoYvGZ5gYabDttvKx4C4VMxJxuefEDPLziG8jGeQGN8",
  "key16": "3rBbTaoDbVcwCdPPxd9kpH4gxSBc1bBR3bbBPyYnNjKS5TNiye6n8WPxFve1eZPCiGaiCFTL5Gd3mc79ngkSpAZM",
  "key17": "2ozxGdU1m7Noao1CHxwGk2pwfh9CdFciA9MoKUmCCjdD2W93E8GpZ6qC4fRvL6KY2vfqEUAtWJF4QAEvasZ4jRVR",
  "key18": "5TxXTFS8iFBLy7dtN8oFTmsiBCeU93K19fBgjNbu23RhrbSQxsNGnCJDH28f5LZ72z6xM8KK1E2HnsDynPuu7wJj",
  "key19": "2BsLfSdqbdN4dJXmjsYqSFqDG5Ywg8iyyNBZgvdtQxp2SJyPQxHUiELBESUXnmpJvZQihxXcKVHBr2eLJEdSxK7o",
  "key20": "3rpBr5FnNEGQRmJ5R8pgvsYbM6pn8uSVTb6zMSPmbKZARdb3syqAkXmZnqMxVXuVf3KjEd2eJb3rHz5rP4uyWwMQ",
  "key21": "2zKZmihdc9XqhiR1L765xwho8bGdcVtBYznYNMYkzbWCchiVtVWoJDSFD8od8Q8afk7xNnphv8thbmcMTAb1RZ9K",
  "key22": "qdEpTsAfRJrzUeNdhYTv3ePaSvREYiv5bbgM7F3q893vX3VVcKkGnUeDuUW3WUZrWWEiLeby6jVpfF9yfXjD1t6",
  "key23": "oehHopSqJcYZjCwZeQdWZi4aDEYPqyQZiwSU5QRVFuQfC2NhbqtsYACefsRF4zNaXfPWTm9pQjnQMjn4jSqz4eB",
  "key24": "tSmxhnZSVbiq38G2DQsg6xvFSobroPb1zU5Tj6GvGNEEMmw833cK6EFccmAUe165DrP66cbv6o7bNSBAAWwCYg9",
  "key25": "Wc1JWUzJ6Bugby98LaqbZip3vT1yGBFeddFQSyFFXxfxhab1X1jDcWzvqwZR9sYA7CBAUZ2UJHMa5CLCuBKyCW9",
  "key26": "5KddHAR3t8JopLM5j5NrtZDMzqjNrQSzkCVdN5HFTd6rfYEnHWuMi535e6vVH7vW8oCDyNaeC1SW7c1RB6hsRR4a",
  "key27": "3PN8TMrKoC2g2LGLomETVZ4zhhe3ykZJTxXXHQk1meGwmQEZ4nrPYSXRa6jnfq3LbvD92eChTHGq71tER5dnzPpq",
  "key28": "22ccEv5JprGeq38dRBHGzGXfzvSjHuNBkMmb67yoMtTL92xvKqU3fUUX4jiPUm8vBbhXxmmyRcsZdYEHBi4ibTKc",
  "key29": "Zqm5fhqFBMBuaznVHLfduQxz85C1adDbkmJ2V9hUPyEZrbcpxhZeBbmAjawezvm7tgkgibP6HrLor6D3UwXjnmH",
  "key30": "QiZQ4aTKZCDJMyc3kg8rq9Ct2BovXzsW3U9npmh2ZXZD4wJ4V8CTmAnKbk49w69u6u7otNWYtFRzi1sZgjvcSLy",
  "key31": "uq3J3RFojaxP1n8cZB3XuJgcSfsKxuGyggn4WYjYMeJewUawRyZ7nhk8kzsjtFxKJJ8DtjW1anPmWKE5TXjTmpb",
  "key32": "3NzyDoy8UyFcYEtEdVYvArdZNwwqWXREkiUw6nApF9Dof9fWbgv6SyV1Ae2KT7FaoCXbax1rhTXzG4WYhTTQV7ro",
  "key33": "3fBiLhaSJVfscVSUn9J2zqMDeubSpXqFf3oLQf5yyAgXk313UZFFxkh4y4Nc5K9epJxqNBaeqWH4ooCyqZrgTQt8",
  "key34": "2Pt6te2YKthJx3k8HTAjpXVZFGPrRAFW2pfTPniJaghCv3qkPiuJxiBwEQVJbCMpSGNgr7Mx5HnXTYKNCHgmQ67A",
  "key35": "63gSoubP1DYv86Mn8zLhrRZJ1UkgTpaY5JJXnb9iXqEFfKpHVYRzWYGQmtCFyyqtcTsSprienMBFQ6ua9vCdhxsP",
  "key36": "65WTb3Udwe7X5vundxsE3GkhvKAhXL4s5uRLgQTrhLjeUEoK2cE8fXPauXt6WPzE1A1MfNafPbpDQw1PWhxmPXQC",
  "key37": "4cjtQgBRFvNwQ3hBhTZw6SATGS1yQhLdJa6WuJ4ZuNG6guZ6mvQ6g1TYU96nk9eDybGqEVXka1YbXHAza9JR1tAi",
  "key38": "3acd5LraYHHaBiqhXbNvUChQEJffcTujLMjyY4yRdQiEEoY5ZJ3GnMaqow4cjw2gY2LzRLSTY37U6XUE75SWjBP6",
  "key39": "4hmQK4NKLKXj32S8NhbQcJZEjKe9T5HyGwf4oyFLCPP9Mguwwu1zDV6mQ5cLZqaFZzU6Zi739QqaLToAkdMS3nQV",
  "key40": "5FYAZ2H3UsoiRVJA4fVd6oX2NmxMC9UR91RD87T4yArHzfi8LjL37LHmj53HH8DwaMHwYczsFHcZnLc4fNASq1vj",
  "key41": "5bic7XCsDVVtGYd2kSVdAdMo8vQb4cLSB5MGgkiZre8nYjhv7KJxPVgbTKqvka3sBMhj6iqn8HpBUrXfryHgLoZM",
  "key42": "3w7AA3WoW8uwEjEAVVcMULr23M4mNcRtZ9GUQTAdf8H8T4R75RFFq6JezP2XiEE98jao9aZpYHpX8mC67h8XzkNj",
  "key43": "3RP51SpYzsPAW3B6XxoonkmCC8ixoxES65GsRVYVmKfgQNudLdDMJyP1nCF4wmgYGF5N3tG9qV9Xk2YijmK5Yuad",
  "key44": "2S6GVkKZnKidZexUteskb1UxRVYsjSRszcy3Zk9db6p2SMpQHCbrdWG1d45TTjp7Dceqube68F45qKhivnfdqrfr",
  "key45": "5bEYuacKB1paCDQSzUyqtnuWjMcjbEvooYkwfouri7Tg9ACTr1zq8ZXtKboM36FFFcu4VjvDZNFDiw3qsKGdG19b",
  "key46": "vC3T7QRZuSANM3N6h5TvAJXgbgf8mQmG4wqHM52zwGdpyM76DhnpdvwQYoK3qjJmLYVHEZ5XjtaUhtS5iV4gxa5",
  "key47": "3D9B6d7Feuwk3xR58AFGEsHpB2wnTwypUp4CwcbNLaJCJeZCx2pxt1s6m9XevJvubeFA4bz3bsrsFEFXzHt4KcB6"
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
