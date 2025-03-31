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
    "5i4KKWSxoveMP8GmiRYjajvmA8Kat6f4F2LCrrCC3PsB1XzavfpqMKwex1xXWP3aPHqnVoED1c88NkSHZiEE6xfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpteHUpgBCaXT63YL9LhJKi6jq8qaZupJPvzUe5zAuW8KFeYTChrBkdVqacyPRVBdNE9ZVGGx9UuTbvz5SaE9pz",
  "key1": "3g6xS5zDb8TXELBd4ZDoGqqqPEDpxm2q1WY93YQdLrQ7UMVMj5e6Qf7BMWidC8Ct32LAihCpwFuy73Q8ANxePH1K",
  "key2": "21tWqExtDHvVugUZhiNqKsRGeNHFcL8uuFBFPMKiXmYBWwrBV93H9icyeHRUkqeiiuhsxR711h8bnXQFj6Qi776B",
  "key3": "3fbYmX8rMUo1Y8oiPbzy3rhbu6ZB2RG32T5ER2VSWGD16uDTvsL9PxQ71cxviMn6rqKqSc1TJHyiHnKSBQQHpzij",
  "key4": "2EDcBqiZp3J46F6EfQXkhnRqUMmQpAxby8NZauz5TVG42RiSD7ih4MMbpG4JRMfK8yBotR2TpYuDJceuUFjAC8CP",
  "key5": "4bmxF9QPijET5LC6wHho8aDoMHcGUbfvyZvQWCkT5vcun2GSrr1GaCKdoDZ5fXosxzfMVnJPWwHDMJiYYcFvkxkD",
  "key6": "5fg3gV6tNt711AjCt31hbvi2uw4wtuFPNk9ynVdm4Awp7vewvZzaNPfW5S2aMgYu7Def5CeqCZKQgyUsHrA5sKFn",
  "key7": "5enSueXqNrUn2ih9YbAXb3eCBmbDGujffUVQCg73KZYo2qVq2BC6fXJQMQvmTDu7xWoNxMx8y1EVWYPq3NFDAArb",
  "key8": "4br3p3eMU7AFMkJ6MccFGEj6T1VPNnNwiyPbE91qYfoztLzGQVjAvjSxTee7fvyxEANAHkyNziJvUwPgshLGJLtC",
  "key9": "4iK3u5UeVcKH5rRaGsJTSdWkaZvWsdfWhAwz8WupCGQ5oKjfH54BZ8FGBBsPjJyH3uP4YUp7XYHGcFGhRnauF4vw",
  "key10": "7BYPdftnLaGdb3saC1cunL2a2wa8mHsJp8NkX6Y5sNafz67RRJqVdFWd5D8HsxkosVccBTFy9BHRPmBF4gVo8rg",
  "key11": "5VtC9P3HzEG6WB4q2xZZ3r5ctqTy2ryyNgZ2BUbmPZvatYVGRMvHSHT2YEhaLcbinPKctkscqstNgzg3VUKxGfKU",
  "key12": "3xzBsNm9sKATPUNUDioJP3pWh5CMy7zdjKSw18ZmqgLiAwUS6ypoan6ZbTatMHAnEL4yqwGZfxVcKdwskaKXfziX",
  "key13": "4PABYXeQadPwkFqBf45LdD4QjcNuUzvpfWNXRCiZC2MSumer7iUJSMHfHb3JbcL8s1HeAdhKnv6Bvycjt3R8MPVM",
  "key14": "LZbWdzQf8mMqo4r65aJi2x43BQ4Ff6QEUTCv7JawxNPh8YCNRCYq69KMqa4B2Bg4gUAesMt7VzGLsLfu8NPGuZf",
  "key15": "qmq3zi21ne3RtkZ4PU7NnDfiiVFdKXuMrWqZtJQdBHACaJkHEsJ3UgANfJBCucKRwEgfVVPZVeacHt73rFFvm2m",
  "key16": "2myNdwuDkxMhJS1nZyLDoT5W9aJmtpwHGKvEfUqTM2cMh6Yf1Kc7S7MZxQcerFC8RQKMq7m7AQVSzpd2M8QL11Yu",
  "key17": "5XNM3LKyVNXAiwcLMdkkb2pWzX3bk8ZGihZpbkRtCEPxf31j8aXHxcJVpVjVWiHsfas9U65RHW1B95MNntitCP7g",
  "key18": "5z2GVPufC88Jdhawej88qyhtyo6CnyENdHccYtVMXMF5YD8KdFEe2FjfgtA3p4dfFdUqekooXgM1DfQYXYaYpjTC",
  "key19": "y9G2Vh6iiDcxyA9X3hRaMHZgaoHEsXni1yWbvS4BD18CmZ6guHiR4951kosemaTFBKmMRVrsRNEgqfHpPeNy2qB",
  "key20": "3HfUdzey28KnJH1SA58rgJGUdTyN4xNAhuTNMh7EvzG4hXSqpbwDJL1XSfMD816g7VuYbR9hf2E9SKAE172tNW3W",
  "key21": "2fpQWJM9FWi5GaSFJKf4FMfEwCNKJKgQB5hsHyVfHYBijFETPtVBcSH4gEYufk2umhGzRXfw3aj8nQ4ELzKJU3Js",
  "key22": "59o6LXonZ7mr7VzZm7op5nJg9rx6EuCXqhfNoTnx24mzpzKvxDrPfCaKLETLnd3KgiR2dmxbmvc9bZuqw47HRzLe",
  "key23": "59sHjzGhMx7F8kLhVTaB8gyXKP3o9TxXgmCyEK3dNwHXGHpJ5gL33XLsp7NPoZwWLPTzoxRgb487UJv9KgdHbN4s",
  "key24": "pLeuSnkPHuGJU4gh2ZcbWkLyxkSHWoPNjRgFsrUCMGAdDRTRWX2Qd6G6pS4sFALGhKoMBxgxrJsZqQmBgfGpVNg",
  "key25": "4oAd35Lk4fg1e8XNzFHC73Kbxr8iYtUfRd1zF7CoJRcYSkvPBpuqbwTBbXXhbDchmt23yTJ7swobum6d6DXRPUjS",
  "key26": "3PkYL2Dx2pFDhsveD3zpwsMNUH4u1Yj43B6eFJky56nHTBygJqEVSHzkoCt5kc352uePVgH5bS5vA36X7mj5HEpa",
  "key27": "PX3NYChmTP6kpKLKwtxsWMjAXyfC35B2qVFugt5LA5csz61jeDHGVCvg2NWv26z3dAgNMm9CdmKtwQnXbgDFJGK",
  "key28": "3XY45diDuhECjxJ2wH38uEEJnYeQJ7e9MxC7df6F6rAspgikshUbDoAJKTc2HAk7q7qtUTWsqoV9zzAz318xfyLe",
  "key29": "24CEwGPM1X1o8XbPF15GdtARtBtGsbRXYNbL9LyxEyQ6P8xZ4zWpr8ZgRC3d3iUS2uvoMeTUWhryYZThykkMXCWL",
  "key30": "5XiBP8xWaQSP7iHA827q2o39bxrxBfF7ZHcMLXQZ1dRQ48pKnJxkdnVwTEYZ8fT5BLeBkQZp3ARTL2oQ3kfX9jFJ",
  "key31": "43tCzYRuYrmtue8u3SVVuDZCDg6JqbotYsM8R2XZtkuzw4QHpjEqhLziBez1z4Wev1PbjCib6Hd2x65dao5T3mbV",
  "key32": "4njTHVTQ9W4q3KGkVHEjdPofykk1vuCYiy2U5mk7eXxqeSuMoqpSM2CNygvucV7UK4Bfr5Cakx72KWLBdmwU54v7",
  "key33": "3ysZgN8es8qAQ2FJPPRxY5Yo1RXKGELNvpL9P1fYFZ4dmz68Moncf5uruK4T9yFULMgHDFC37Jz6syX9d7UcMDUw",
  "key34": "N9qqpHojCL82CsZGq9grP3rMeyD6TGgHedsAGPbmbsgNmKNZr3F2h7i2Tk5SLkeCQtCuYLy1hjcyuDFQRw3PQjU",
  "key35": "4TcTdG9HJ4k657mCChBhxyubUHRp9uW13cCi9LJPkQSfTgLVPhB2qyPNce3m1HBWzZcHb1ZqMezrk2Z6DVn9AqeK",
  "key36": "2zXKXeZx3NskSCBj68rbK7hTwzwnYWirTGHyeyCDrKXbD5gzttts9aVChtYzLei2HeTJ9QW3kNPpAtDw7MbsXjzz",
  "key37": "4CxysNG3McTD5DL6nTYMGwghebCjmdU999ZKHFzaAmhjZkdxZtsvKnUMBFH5ZBe8TDvQDBd94cLhdM9fW2M2qCqn",
  "key38": "XE4sDMbzVwnC7AFyuKJYWqGddS7CkYswko3nKD5Qt4epyNKPhPfbCRS3Z66stCud3aurinkPur5TtDWuMdBB6zW",
  "key39": "5No2SAS9Gqc6AAfnp7jKJNNfdUwoV3U9xbcq3rtshUFgSh5umx3kuJutp4cNz3QJunGDPFEZ2tRRrNYVxwanA9fK",
  "key40": "4SMRdux2QzCurfQm52BFC4ypQCdhRCXWDC1trwrWjw6ZQh1HDVAoqz3aLNiRSbwm5Ampo33qUdDoZk1Tbd3vSCMZ",
  "key41": "2fQphUWhiBiYEnwBsbr5f26UjJYrdAeQTwU2DbmnJ7KWGu9zWeaxtqJFgboo7sYLUd6icd8JKUCU6nm1a4oPWZS1",
  "key42": "4uyJZfkJQuCgTkuWFsK4d7JrkuNEsVxQxKgEGMxvuJMe92kvskpZmpaHzZeAToUaJBaqap6xppJi3WsAQinRVYUC"
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
