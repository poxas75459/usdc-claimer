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
    "65i38a1GC8YF9TMiBu9HjCdyJ5CVE2rEsaUeyYwoLhrjdSN7WhxcusFgbNqUAEi2tpme11eMFctXsgf3nQqKGZYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w8gtEJ7fzBmzWrxfcS7CcRVX9TLiUq3kJ9gXAKSk1NtgWBXDDwEY2pqZp6aFrz2gpqs6St4XMrHVRXyWa4WBvwV",
  "key1": "3NFSaVYSeK5T1QX322qEe2QGDZCWM3MpY99a31aZ8VXVxJQubcxmPyZw6XK6fqJ3Lmewk9P74QahMjp8ks7DuXmp",
  "key2": "3snKjRtE9TiNP9WdWtZbmWVuo1aMDoLvP1ARWJkCe6RUVKD2UVAbHfpA4GzpyL7dzyNodJQithinM2ZWeK62Wvzi",
  "key3": "62UXH9mf2HCv9U1hD5KhmXFydQ1UtAr1Bd7MQS8ht7mwd46dRnF895UgErjjE4urZWbycdyPTbqomZpgNiUeRXGJ",
  "key4": "4GxCoHwyXtPd88wNsVSZVcXSedcJXxTNMguWN1K11N8knBkYGX7xhqnRzFN5pwChG7hoQC6tBnmadGf77vwvdzm1",
  "key5": "3HAu6xhhAKxVeQFMAhpiaSSAquV3tteAe7SVBQUBmcsjrSeqXTFU2wgyXdGZuxzpR4LsWHaCrGpQpscPNEbt8sGf",
  "key6": "2DRuEyv3qHmgNZJjAeWxaBKEoZJNHtntcKfqdqXJxkbkoZszoRjUffPVn26mKU48gHvhzhzREaUasJFJVQhM39y4",
  "key7": "nRwug8hHnPkusjnp4aUr7iRPWyt6NWQNNa5YijVQkgxFuJGfsdnemuEMVmi7uiWM9oxBnyHGYQ8uoYfxQ3dn1FJ",
  "key8": "62vZPvW3pT1RV61LzuvkNNuSVDLjeHsQbG9v8XXXyokUiQHcRMYbr4btexAEmjTT2jLKoy2magjcmsoWYH9sX1Ew",
  "key9": "3Lt272gytQzMiJgH2Gyg5jFYyYxKBgRrmUEzCznuACnXQSzsCj6nieJWSh1Lp4W8rUHhkxxTi6dDWntmgaKM9van",
  "key10": "51pdx7hPUvuvd8XMt7JMD536CgnNYDm2gLsXPjhmp7aLY8hs12t462kzjxEVTgWBULAMD15tfxZLacVm91HPBLHZ",
  "key11": "4gk1vnrbZDrG7icjhWQCHxwk1hMovgVtcZniUJThgD5HbVZEQcTwVGRqkKznZif5N9RZBny1z4X8cjwGwzadUv7K",
  "key12": "HgJNkjrHg7s58Da8uDUBndpjumVrbvYhQ1GPs9W2yLNBdVF46XwNeBGfwuEyHNRNz1WX7MtLussSn9QAN4MSA4a",
  "key13": "5T58qzMh3jQy699XxdzRWLMzhkxMQXDgSzRBFUoBjHRPB1ecUmReSsWCSoxHfWVnLLVPSJoSS8wNyGEhnpPcKcXB",
  "key14": "46LaXGi6p3vmMgYxoDTL4qK7uoPkekTZBpRYVuQCuy6Bf4ddrkv4ybxcJjLcTbTEwFER9Cmq2hr2argggpdyDdv8",
  "key15": "43cCUCQaJSQwXCrC7tSmFnkqR9Hd1DhJVwYk4tiuWW8aarPJQL1fU1hQvKdY9xn7qXwfzjd4VahXKHXymxRtkJKW",
  "key16": "pK56JmArXEfwtsL3yDgBKntRWWeF1WJ9pqHg2FRb7VS2SrD2WL1gg25si8ZEKVphK9Ko3YA3THTSVW4oaxhRukR",
  "key17": "25n6Ux9gdpHrY6oE6KveMuhfwkryeWwW9brcxxSt9pjZVtaE9JfYLxtKkbq6A8ByujaJMtkqzBQDhF2gzs23c7BS",
  "key18": "ziXcw1WvmUqRsgpsFNV54emoBa7QAn1eGTDWpTfEfM2r2nbnJVLuacP6FYFvvaBwV5N5UKDPMgmdQybVoXVJcZ6",
  "key19": "2Z7BvyCCmQ4iJACE4KibvVarhskrAvHupJRWdDBv2UxYefXZwwGGRW4aSBj7MoZATeUWKTmLnpK3t5CmAs3C8744",
  "key20": "t9Y9zUost6f9YsuErhTcKLwAmghWY27Yn3T7dB1f8nQUYsWFs44GumKgSk4eGUgRtSccjRaxgfRhYavvEdnhev7",
  "key21": "3EZoA3DnpKjPz25SMGZ6HDbYWH1gehTYF9m84jv1LeRR9rNHpiYV43JfAzvFwAvioBvmUgjXDyT8c1v8ATZZiifr",
  "key22": "2FknWC9fT9VwnBNtZkmGPr2GYRuRXNkKUzbtWUwvkHBirBFccfbjm3uq28axzF5tqNvEbvSCg34c3E1QgDV98aG8",
  "key23": "4P4tjMmZjFnRamSmarSMfikep8xHfAYfdr79KTWhWQdcBM7oHQpJSVttRtycP8kUdDWinAvHhx3EUkkE2BM2U879",
  "key24": "5aGcnV9KV6rbD9tRpVnEVoh4CWMAYepzapHf95KrWxtzghiibF7by1Ehff9FMnpmsZyQED4qcRrC8T9PN3eyqRDm",
  "key25": "2SNa6wz1Lryh3DxeEPs53rWothRMiYFXFiww2rQdRKgWwKzkQ1K4R2Ssaji62nQqhhwTVJN2TT1FaYXxJNq5QNq",
  "key26": "5YjR5TMwg33R6u8z5Q5QsaaAu5isU1RUGZhUPijCBudTYFicTy5ctVcuFRCgTywjKHq4jkvTW9xSPimCfGS47NxA",
  "key27": "63K6kZdEQueaePZdFroEMRP6k72s21WyHxQGKW8qGdNJRfwDtuEmi88rhGBtcUiKhyFzHEopKNkNn3fgsidXRfKc",
  "key28": "5iwCnR5y5YJ98tqUyjwU9NfPspqSXEadoSXZ3gpTKEKYxJNCPzsahdckLUGWzeX3Y7DasRphhmRY1aLss985PBPv",
  "key29": "jWUzKvNx2BaJNQqrHGLBD4Yv82MpRdxTU1RG7dMQScKu3VoWKEbpMqAXEW84YqRfGoHCXDuXUHVDNgqcsPtcabM",
  "key30": "2mFLggFwCVNqMUF3FB9xTUpEEWb4pcEX9ZosT8fSzpQr1LRNV9Y7pau8FujjHjriszyUnfrGKdxRfEf4DKyptyBg",
  "key31": "63i85r3EMopGAVw8SFmqgjxYG2xZUGWnfZHPBfkxAjt3R2zFkofKfmjSAjoih6vZpVUsdofn3dfnXP7VWMw8m28x",
  "key32": "4wbJg53Qz75qYr1tEsaf19sK5MPquuGfBhyJzzgqCvRYUcgRfPpxwmKaqgx35babDVo6f3ErYy7Gz1X9HiTCN1HR"
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
