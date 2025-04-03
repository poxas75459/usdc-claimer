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
    "4nSPBuQMThVKt29ZeeE34MCpWqVETHrf8M7UPZZGsqGCa3sqibHKYC8uC8ScfsWhfXW9AC6QMRFuuedExfUYRanj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etavu1kaEyeiQGi1RpJg4NM2A3vPqyX2ZCSss8fzUvEkPBuEQsJeXTsTcs3UPTirapWRxZfphSwDsCFZcGGyAPx",
  "key1": "2iCSM7DxvEPKDz77QfX1KC5ce5GSEZML7hat4wVwesiZAc3TQbLTZHZPcwtWpVjpUpoqfyBmfRwtUYWYQNVwU4AV",
  "key2": "3qLTGqSZnCndcLS8BG5FXoUszwpeNHhxEwKxVmjbztodYvfXFDWFQLEFeCRBEQfhLFpYffVPkTHvRCzLEQzphA8Z",
  "key3": "2eihc3BifvnRAnQzd8vuWarLTHSuXfwqrJsTsZRV1qK34oMEPEVV8raeky5RwypNxh45bkxDjM9F3XELWsPW24Qd",
  "key4": "3hTMEgTqZRmi7vatfd7GtQVtpnYHETE6cdhBBe2aQkAf7F9cjZ1EizJCtAwAjoCD2i81v9YuoixB25DiWmCxzf14",
  "key5": "2QccGTtqV33PwVvtVesXUkqY6xXuwPXjp46XQYHPutvLGh89L55Pg6nR6Tiv9ckJVsoKNxXbSjCsd1yxuswugjKu",
  "key6": "2Fo2tDZQknn8ZmndU9nvT9bcdDKrhe77K2XHRQZCzuZn5kz5FuDCgAMPJbePPRTqbxi1dBUfeym3VTNT4iCWLSko",
  "key7": "4dkQsTjuqKa5GNoDRB5PW8z4zyPMGgk8fvVrMonBxQ6ZR1KFVesu2ayuZEy6kE5N4zbwapH7BypnDPMjcEPZ8A3f",
  "key8": "5XcxwLmrctDmmeBKrELiPpUs3b4fVVechiiH3zswSQmr8fowCCXi4rrnjaf91KcBFgSAD5Cfuo82wTFn7LUv2cYT",
  "key9": "38EaD7BeeVyB47v2e4Db6g6ee5bKZwJMw9Gh15nLKUHo5AM5sv6i6d8PSWPGFLnHsWqs5GdW6zPxBMjVhaqt41tZ",
  "key10": "bGvYsAEQ1bdmSAvpdTgb6NUcacdZHgzmYUmoA1mo5LLvqacw9qiBeT942PQns1SJjS6e58zqXNd4S182cz7Rfg8",
  "key11": "5jEu1w6VUTeKqGMyuwMTq6rjGq44nUuD1iVg3K5RxywaJSbdknyVvxn5i7Bwd4m8uTBC5Wz56wSkLgVygp2fQVsN",
  "key12": "2LDr5cF6viFrumGPa32ykYjF44CwVFA1RDRjaHLEz7GBcosGm7bwuHapH6eoKD4biAf6BeG5PvcdxJvRaUSMxj6P",
  "key13": "3JvZtWJSLxg9Ycz4LVjrZduW29rnwxSLD1r7TxWSu4kuk4PCyguChbuUdKJNjPQi1beDQk5nYvLG4G8LLi5R5Agj",
  "key14": "pJaHtjWGEyYwFz2MfnQBVHNj5nENX9hLtHDVZ9csQnFauaQDBvdFVWrphmV29aZqGBZS3sep4vjaFbpDgnQ1TW5",
  "key15": "31k6bGM5VWnKM92Aa6ix2u2mh96QQ1x2j6kwiYyenvtkMBqF2gL6HUZV5CT4aioSp3pmDNpAr5hwZYfHCrhgpug9",
  "key16": "66C9wicji1GKGTifiFRuGV7dFKaorxE4HSinhQk4pBmp6AE448zhgGvmYxQgDdVQAFoHDbAwTgTohUBsE9NhWVd5",
  "key17": "51q1Kot2pmyrMJzgkQCBkSmXujWrCMG6VVKDsM3Rw7EhLCfnW4c5nUrNZ9NRk8aC1DUSG5rHRBUQQ3Bp2k9wvbBU",
  "key18": "5hzmPrSJwda1sXvneXx6Re5JvWUKPtusMD3Zo5PdhC5XHLE1JdcarXQb3LTJuSq2cV7zZ7rnmjh9AhZZRZ4nhbte",
  "key19": "XeUzffK5k1DiuncL2ewm8yju3eBTcxYLzNVufN9z8GvBgtvP9vYPKei58NsYHE7iVPhaibSBjjpU3GNUQL4JbN8",
  "key20": "4Mb1TYC3qQCRYeoNyPRsDdZDX2gUS2mK9VAk92muq3pZg9zaZ5Cx2nTmnGwECm62MffEqKaQBTfxghkcu3uFbVEh",
  "key21": "35iUsi3MQdUaY5RS363iHf2xiwm1p2L1XcraRcvKwE5kv99heLzwWEoZMSGd5cWkJN7JZsdxDq7JriffByKK2XT7",
  "key22": "2JuecMVfpvDpBMHL3iGhYBPuiziTzx79u8bC46a74uvrqH1mXtnaapZh4ein16gjt4SxwKC2cuXTqJQwuWfhu8JY",
  "key23": "TLgqo8UshDVqob1Q57P2Q2jSEf5bUXCJGLniDPtkMb4St2hXHmRQinnXyZvt2dbqaXhniAeAbQw3v63b2jF8Gv3",
  "key24": "3SQ7f32Tnnwevyvb5MGABuuDWC2m5Lheq3DFjnNH2y2Lc5hY4xZ5vtd7erhNCMX9J2kX7w4aJAGWBApUMAL48WXw",
  "key25": "5mHvSupCVFRkjvboTPV1EL1PKP9Mk4W26X3yaRJK4kst2D8dFJKVw2vRy8TiWempwUUbhgtXtAZBAANnCP2N8pPn",
  "key26": "2vKkNjh12FufWc6kJ12kcMue5uGz9GSSqfKT3r9YtZyuUqnmDRsgSdgf73ym21Hww8z9iuaakEbG9VEERXbb3G11",
  "key27": "5qzzTdXLHN2M4J2UbV7eVoc55AQw2STQutTDDJDZZuUzW7kKdA3V5ecgcseJfDXvp1yMxp5zhNoEh5F1LjCFjPrL",
  "key28": "61NXtA27DZioJoyAopvuoq2aTqKzPoo1e3RXKXUgEM5jnptLEDNeV7a5r7M9VS7XXsNtYvitdT1TtABAKvWGkvxy",
  "key29": "3FoZ62GwHFp8dmXkXLE5ycdmsxVw5xb3r6E7U7v4YPRTarsPYLD1ZS6Z7KwE9ViuUZYNzdEqS45qtRxQwN4orrmm",
  "key30": "Jihv7CYP2NfyYCXVYMQG2GXH4eV6MA6U83UhmBKLoemuYosA36xB2D4jknp5D2RkR9WdyMkJuc4jV5AgXw369rZ",
  "key31": "2KjYEoXiVXnVfTwP9Ezv32ZzchY2VXCWKjAwNCMRaQJQqNQS8c43ytgNUASfC9Pqg4cMqZKKMJSydr81V72eAiht",
  "key32": "5wwdeLkBZ2DuFcwa5jdjjz1bwYpadRsMNRFDycxn4Pb8LQBHKEWzKuC89uKeUyQfHuqyy4r87MHwxSspYGp1jUkb",
  "key33": "35uhLpxpPC3QfiRZzpqS22ayHSz4T63kxC1ppGNnhsUFpJ8d84jMKuXc7Wak4fwFaL39pmrknor72YSB4yJ5QYgA",
  "key34": "4dFfUhDvXsfyqHgs9SAxH2Hao9pkUGhfKTLXABQsHn8qHVkvpkU15LC9pkoh5QeR1qfQ7zSARpRFBWLYJu84P2sm",
  "key35": "3JxhxEQW611gPQknPpMBLvEbY7fJi3yin1vKe5jgnhyKJN8fY4Wwy3TNid2tAzGtv7YfNmLGQvqFBu2m8LfzuFTo",
  "key36": "sx24xcZTDusdCjm1oDuoX5yEUmFF4ck4VethHCmg7NUL8f6k721PNuP32MWBaVMc9BNx2jW2v2UdZP8hnPN9ExJ",
  "key37": "5et3gbMxdzk93RwMCA7woXJzQWZFXYLuqZyVfo8RwAX7hF6LT5nwY2iHtvtEFbBt8hbtyWWZntTmFu6HUR9nysXB",
  "key38": "5gbdUdZruJdbzuEUPCECdCjcq3EE7BwY4WoRWbjDuSbSdJFcdn2fNFAeUqS4Zfr2mX7yUkwArXhyp4jVpi3edDqP",
  "key39": "2G9jbWomtrJ4DCBggHQGbgAi12HCGPK8rTUyDnAoCM1AxDntPycLMj7Fq2msQ8VjDE3scPV5GtdRFj87ZFZjwKBQ",
  "key40": "2L2ee4keE5hT2L29axvbgL3w7WVgVxEMXDZrbEDzpwudLtEkqKcBCZLRfm4zXvHawJeFJLRnuq3bBkcF75CCNU9p",
  "key41": "5rwJHiMS49FnmeP8rgTAHr3XzRwyBDAtXjsVnZB7rdE7LxrUPRKUqTSHEPBP4nidkaZgQyDKtMJg2LS8H3MtSMHB",
  "key42": "3hG13M8n7cAQJuSnXBmUkEJVXEmcoqEmN2x3ioaBF6WqYzixJW4Bjqe1LJ9DpgFGC7fFgTsUeSkrjqVsaLBfjnvp",
  "key43": "4bHxote3kFA3m24i4W6x52fSbaE37e2g1PksKkU4twP3TsTH4Vpm5KRUpyyrwxxQGYfV85w3VfE1Q7EWmJ7QC5b3",
  "key44": "3pJHnBVbryDXCXKfFnaZezn2LSVfDocRYQbDpRsiPpUe4c2uF4JXeku1t8kNz9yCofAxjq7SFMyLd6CmiS8qgVh9",
  "key45": "2fxLFiGuEm8N4t8ooXCXmxaLFLcyUQdpUPDJwR12Uh3znAp8pZLBqjSyxnLrYA8mLmuF5VneFcb77aaSJUzUsVdD",
  "key46": "2WAoEgVhCic4nsUfZdUXQKu53h9eUMVAnya6o1kCqTdeZg3LaDmwGEX1Zo1wQ9mae6nncpdAWv5vJdiCbregSGKf"
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
