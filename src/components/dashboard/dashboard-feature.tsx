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
    "3s4qczWZHXoRPUygtcCwwTDfT2h7WDnpKXSmJ38g1LprgWgySkpDKhBDyJj1QJGrzEjZ958xnBXhY59Xuj91DYhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VkCCY5V2uZCs5486NE3HPTKpk4PcmbaChvW5BbujvM5bSCWLHoxuaUiRtW4DAKcM5aCQAXBiYZXFvAQHkkLevQ7",
  "key1": "2dXSYvSXLGRLvtbiygqQoNUP3uiutfC6e3JL7WU8TtanzoNyhgB1QdUaznd4MQq4Ek9Cc9AgGPRSjSEFf2diP79k",
  "key2": "5okQNMzX1ZK3KcEakgqYYeApi2yNhYWJc6LRhfuyNQeWDDbURVZdeN6jpg9VXZyJZynrbG9EwH2JzopqZvhf9pGZ",
  "key3": "2MWB8e2ciSqiiUa1iwDTqe87FgHWDQRhvv99cL5id5vU4KPaYehguD6Ze6BKmJybJy6tH7xEDCRFVbQJxiCtGTzR",
  "key4": "5kVhPheH7qyeQtpLRvCf4djEgK4nGs6LWW5qxN95EXghCDCiSYXWEBmBpoT6c55sqdxBG7K9og4LdrrKHWjSKbhP",
  "key5": "8pNAWMT5utR33Ak2t7aApNCEwDUwGCM5uPcVgZhh6TyyDuayJn28UsTN53mm7JgfMy5qnpNJNqv9McsoCPAafb1",
  "key6": "3PuypRVMYPkTCSKWWbvuwytYx6UroWcSCpKE88NY5tkB8wkcgtyZ4GdQvRr3GuftLyPVXwmdANc3e1LRK7rZf1Yr",
  "key7": "5xedNt3nwJGRuqfYTGeSdyetVHwJ12qhRddsy2W8mQeZq2UVt3jkaHAKp8vZF6MKcxshG4U76MkvMLxMHC43FgBq",
  "key8": "4sdd6VHA8nuY8vYCWgVZBDQ9aHGziys6nhjjDPzT51uSy34ehvcd1sRTypjPZwbSCM6aaHPLikCiRXFJh83zJEqu",
  "key9": "3KXnRyPJfSxb3cA1gT7jQ836AL8g6ny6A1nDYec7CRaB2jKZSFVsBzDCZseqhkUFm8LER32PQhG1LFo7xD6dKmU2",
  "key10": "2xJL5ogEpwyJNabsUNVrYTCrsTvESC1fFj1E9ddTCphbfZRf5QRaQ28NpgdZ6boXbDKcYHHP6LGfyHkPhC9sotCP",
  "key11": "3cFP16cEs4oKSTsij1zFibQdHbKWVh9F2NLjaGZjmmauqJkU9YJvvWi3dQRZPpaxzTsae6hW5kbFtWuyAJs1xkEq",
  "key12": "ikK52y5UAWipZP3JQCfaUNTSkhWu9NoRScqHiiRxPZqcHhQTfQ2ogGDzhM6dRHJbtpNyh9fcxM5Z1bbg7TvS7S6",
  "key13": "3HfWt9tZX45kRttx3SwtobJ6QiS3rGNug2R7mj15pbTiGks2RzVBnDnCVN7n6feMpgyMx7kKBCepR6uTprVCCczi",
  "key14": "9ST68ojgf3gKNeTowSeqgmpgYXfGELCkPtrLRqsqVBPCH61vcZrHEsrXK6CDa8jd3a7i8erTKsK6tuCF58oskFN",
  "key15": "5pq3qcPnHSRWJy9Um9PGMGLtwr9BVjozSTTBtq5LnZRY2n8X3T7Z4sicrwrxTkz67ngXhARkxXpPxGQaCsjvo6Av",
  "key16": "4vhBmkXRTA2cK1EmdC4uD5dvYWZ23PpP3CKf1etKMpw73tP2HSf4AmHmsiGStTtKpLQDDHgkg6pRrpYnZr9UESiN",
  "key17": "5PvrhsFAmSXdUZmHewTACcieEsLeQNySA7cTQjfSi2edLpvi6Mjiwhh7UpJ6YyJriMjcBNmh7bmeUNPt3BTWDTxB",
  "key18": "3obNnBMHfsNeuUggrZMMnXcX6PeckwxecDYqUePm9wZ19PdeprzmUUuEjXHP9Hw5vqXPcShtSZmejd58FHK1bf6v",
  "key19": "35tg7UGWzK4hea7jzRWqcU3qnzfGHR7uQKoUQFfniWrsMe7cr9q8Wei24cBL1PsRVfEuUgsKmamSJm5m27SuAVqq",
  "key20": "1wufRJ59Xfmcb1zHYB6wYyA2zb9USMHEvP5i98bQS4GSfo5QVAn7Lk3Ftj9wVsQejnDRUmvnyEeD53Fp86eHsZ7",
  "key21": "3ABtEWj6qiHED2Lbc5HXQKCR3pJYveGnQWNVbBziyNvFK8M9m3B6QyHkbTxPPa5r2eEf8cbZvibFaie1sxwnZyqR",
  "key22": "NqYFTxQh6qXHM6H3dyY6onJ4zNn9KRMstZCpBBVdgH5hCKqpYh7R4oYCkN1NCWhGX43FNbxB32DhF7wxQiyMbdE",
  "key23": "4yPG8RsQ3DoEn4qJFBdvEuWk6Yta1WSD37sUQgag42XQx342zYoRZhssLNGSNamA95FbWobDXLfNWacMeTmeprTS",
  "key24": "zrsUST1vXh2oeuj4a6gjhzkBRPq4N4bnsFq2qJdsSqzeLW3XR4hbaTzXQwWtg8UGy5PLDEAeD4Sbxxs7UTSrpsw",
  "key25": "5qJWsJaw2jCzAotAuCkfVUQgm2FdAYmBqGWiVCi9uZoMHbhXge7JNaa3hjEd8Sp6KNkwtRmE7U8QQyatKHEjiCAK",
  "key26": "3Kb4xi7TY8QeNSxmqxEPfxjGd2W2ZiAUmiULTZwfFV5DUUnnpGvKtLM6KgCw4xo4UCHgXjjSktqyJW6kZJFTTyEC",
  "key27": "2yrTvhSSaPyqKhfVt9zPyboCYFHLj1njcK97eaQYsfv7DdVsVSTTL8s3KMKw7JLH6qGWCGupLnMAL9Rx3NmcyEe1",
  "key28": "2ycQyZtxQrbcJyt78wbE2qZvmdQz3qJMLAVyAP8x3y5uV5aLeu4rJmTJUUy4ojk2GUMUFYrQtiSQaWRQpvcd4NP6",
  "key29": "DM3dDzUxgQyCbt5F6F3nwt7byyJQu5XBQjvibXHsShNL2ZvVU8JRNboZHVfpfghxSrJcuvSuAiLC1zWhrcfhpQx",
  "key30": "5Ri9kF6Px9yimmhjJT3hsZnb2stixQUnU7mrrPjfyE1b2Q4ZZbAo85LGLzstboHPm2KKcbeJWN77FKP3pmd9AF7j",
  "key31": "3EJKv5a1ri5PnF1mhfFrEjRSGSicsbgCzvFgukqP5kpAvs5XrS1MU8EoThHcJ7vYuDLUKo27BzyYSn6bSSnyvLdY",
  "key32": "4NUoGuEHpC8DvvvCV8nWtiEAkARsj8NPyBaFHAuwhJQqd2Ht8bDwGZs8DLZLTna9uYLjdnrYd7cj46zRM2A7wwFW",
  "key33": "42v6X7sbwZdiZx8XmZFWcNgtLrNiJ1danpbgnq1vEToUGZPUR6YPhwSFzCvnMLvTGqBw82F6MrLMXCJSPS2UgXZe",
  "key34": "3s2ftb991HstzJHxLNY796d4G4pUtD3NMtfuWfMHZW3p4xYjta2Uc12TfWnfWdYWoEYQxJ4MoHayj9J1PH42dKnU",
  "key35": "5vDrjjQhjAuceyJ14bNTJhkNRpvEckdzDDyFKEX2aCSJpp5hMfzqMGKSUgmqc4yjiqKCHLfPjDERsb5tNRcsvb1K",
  "key36": "3vbwx79NTGN3tBtz6hZgofzqqTUPfJdzGyFdC6juf2bMZc2pToCvSNVTPVYQe5ufA1NYBAnTFNYquttznsb2i86V",
  "key37": "2dKeZkepKKJ2Z2tCLCsDfVe6MmzTbKW2osKYTzm7vDNvEGe4x9qtMikVrYDby5GagfcqMVSRyeUM4Cj5fx56sPRS",
  "key38": "2dQhTgQXNZDWwnrRgftX8cSy3YVRFXDovuXZxXNqchuQm34pcQZ9ujudUcDqi78hVzD6JSbvnsFFPvWGhVekcJkZ",
  "key39": "soMAopk4dtc3Tw1BLV7EV612XU4QMTgcc9KKf6ZKZeEL7dGPKcWHdgxya8FFbCavkZvFtaoBWxrFsPJa5hACSEk",
  "key40": "UJe86phZnYbqgaifT7943v5iwE5dzwemDsyY3wtdgG7vGtGDnRfbkgqkrykpN5S4w1jqEH5zYtcicMESCS9yG3t",
  "key41": "25b13BWeH1QkHpDc6jA1bhuWFVpaDc4fjjg3cyfKN8Cuit3yCxPeKDpRqAAEcin6bukiixBjmuKEzS71QywzjoyS",
  "key42": "5kUboH6frXWNNCxkJAkqHsXNu5G51m2ceEwajBnze21optm9JEpbNLFWhv6Rg53QzUyVzWfUSxx8oo5vjQL8naAj",
  "key43": "64bkpBGRtNjBsdEgtauhCh8HvCQe4P84yw4Z5mgKajrKtWT2SKW5AAStNn5FuznSBqrRtbehnHgXQYF8W3VHV1mb",
  "key44": "4NaTTQsafftLqa45ngLBLMjVysJ4VqXb6p3NWWm6P5gm8UnMnZW1bv5GYKCiHCac2LwXHg63TQwivMLxBuFs6Mxz",
  "key45": "4HDt7cJPN2HHD5ihX8gm8Q5Q15nFLcfcWGpQsmtpKZPTmv9cfMv5nsQMB3VB9S1ECf4h9KqMFy4qxkAJX9tA2oZF",
  "key46": "4xJLZj7787CJdrr8TKi864KyCHvb9gF1JyocvzDH5qpKCkifdg4UVLkzxNSayTHuGBZjYWsm4FpHunrCN6WPydYi",
  "key47": "32CBpA1sbHtkpq9Ys5XX7jnVoNq2Awc9SKYQvqeGhBjFJ4c2rEmytwrKgiJbecdyvTvfr9rvT9tLGHbeABPRSYuV"
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
