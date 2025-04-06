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
    "4etQxG4khG2xqQHRc7DPysPVuBxLgA29fTouDceaywzXdvSUALV3t1Gv7C5RP32ouX7C7XTbEdQ1WuMzFdkj7Rwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnhVRgXKhLSWZh3uQJBvRPv3tfQwnsoL13inh5LszXKxSNsJRZydjw9KomE6TsBRyr3dhzNupitL6wuZpd31p5w",
  "key1": "5DLwS9aoPkpSfTi3Zu21z5i1XaXbiUr6zJoFSWXJ7SborSFAVReJ7gjd7hMZo4QpJ8rM92qB61PzVyeyW8VNsbRb",
  "key2": "31QLU35CsSpu8WFpaUnGTgm5kXjKNS1Veh5NAjjG1eFdexh6irndQsB8c2EY3eHLD2QJivdX5UPHxRtdFTz7ifkj",
  "key3": "67gdHZNGnHfjrJmaxDCckmh1zYMyuGEmq8nmb2snvg1XMRLQ6LWqfsi6S4UcDMdRsH7LDYuMJrfwMHzbWnai916n",
  "key4": "o4baFc52D2Rtjv2xYEfcSBrXxNmSMG8GDFjpJjLZ2WFbJwG99kjtoLkC3LuZovm9eatW3EXRb7WHNbXAt5zgWRY",
  "key5": "4sufUw53QUR4xkmDc3wbDdy4fVrA1DW4j3urM4hCZwEeZxRK78axBsrvjAq65S93BPmHnp9TkehP22NniAX5Bwit",
  "key6": "3HgcMa6wFwZBTtHAjvKFy6bHysKhsW9avsdUXmQMBUtfumr3ns2ubPdAirtEXKzL8qFsJK3VBUpFyVfSqxbqW45b",
  "key7": "3jUQj2W2bSKr758FnmbH5oEvA7Mwy119WvDs4Arv6xkT8LraWPw9BWaYW71C8qaHF64HHgKQKyjwAfVdNqSpAmuF",
  "key8": "63nnih7tXHrjVjKADYz2DhYHAzTsYHKU2JdmreP3poVJSVJm3QRbrh5rQn39SBavX8fecgMFZ2F5B65UfXCaG4U",
  "key9": "42xm5HGh6dcEbreHKb5mm4kcLjwm3fMPiKQ4VSfgc9p1sscq6mqk7jg7qeCMKxZgGD33z4KXcaLcHYm4KgxpAsHC",
  "key10": "3vqiNbNRe2kS8ysAH4ezqpnoYPeGmxJTU1LeHvD4frX6Ry9Nkh6Ghc1xxc5Xgxym3wMajRQKc7bcpw3bxPw21Pty",
  "key11": "5h56PK536Po6Dbaw4tBA6qWd4MedqB3jXdrSSKtp1ufPeJvUQiY3jrLKqSn3Db6gU4LtzDERztMzkpZRmjTovXpc",
  "key12": "4oMd94TRbAohkyQ5La8MYxChyaV9z4jWxqVskLiWBCiQB7bVZ3Ngynr8QGu4Y5Mp2xzsdkujNnrfhc3Z1cLNsr1F",
  "key13": "x4j6n1H8H1USHUEtsZG3sNqUAY699bVPzrWS1akF4CQw4qBbTJk6LkgCFUx38RfVEChb4sxS82wnxUmszq7kD6D",
  "key14": "3Q4KVrbwZ3MbJZcdBmiCFaVdbcYGRAosRMCG2NP8AgociBKcj6WWzYwcBN2GpVrCqhbwZAd4wi7NeZNnnWr41HHr",
  "key15": "29CvzkBHjxe9sbuBxA9iYKpSfbq26HjUdWk1BzV1q6UfEww2udrnVk5TKqKhhax86MaVafo4budhxxnHRVrFEj1V",
  "key16": "4AnWF4fAYtTwnwW6Qr9V8kTD4M5x1UN6aFAX3nvNNPu3DrjAnb7WDbng821cQG478AgabBxdbhdNUDQUHLMzX2Jy",
  "key17": "3y1duDzagf7DRwQe44cFwL1NgV3H5BVF1UnRsejTB4NSuKhjjf861UBAhHTCe2uqaWrfwsz8H7fJspTUBg7pny5j",
  "key18": "4AvmVPJ9efZro8awSu5Q8qo2ukJY9JG2EJrXWjSrvcJh6iXaTYi6ae34cL9Hmkv4ht8XjfpRSsMoMD3wpPz8zVz4",
  "key19": "N8vkkf2i4VhBv1xBcixvWZcPGGLPxNRkQzU1RiUMo3jcG7oMPpbxeGgnQEr3bgvwQy6BsyPJWg8SukDYhSaaiWQ",
  "key20": "59n9tCGG3wAm73aJgk45cbRzkcZ1vwe7fnsjbLUsbPZbtkBAQH4mQS5TLSer1o1qoUrj318r5cdK5WmuZWEkVZoE",
  "key21": "5jqgD8rPFxCfD59F9R3Zc7TMik38yXpeha1UjaPA1BrQZpeoYosEhdBt86PAvHJLwZcfoqKyQ2Ve9S69rgx5fZ8U",
  "key22": "58CbUVwyjgXz1ozG3GTm3eG8GGimLEPRtuBtmfoV5yTgv8Lm5ymACPUhFSAUSgiWkswPDWYhnseEYa8q3mRH96n8",
  "key23": "2T9964GDXNg8UXSKt1FMb3vvqaGMkFM5JZXKkdBajGYRiKXrydgEuBchKyzefZ8GJmB3WAFESMYTiuC7uxfuWLYR",
  "key24": "57di8dstRFGzFjjcUqZ53iwVM7Mk8BeSRken1xGqdgDaUbw9Egq5BV4N1ksSADyDr32XLRSD5j8qBwDWmDGqSyVD",
  "key25": "3jbjAif7Urwt4AkHGjG4KtEaq7apfTRTvpfkcfTEcreV4hf2GDAHgpp6H4Gwmef6LSeun73jYtaz1FTJ7Yhim32x",
  "key26": "3SWVFgjodZqkP342hJ5qvyRCZM6tc8ZLUKz7duMyeEAYCRecDFNdsrg7SeCrnSfqYfGgS6ZoFCiCdKtTtz4g3zpB",
  "key27": "4Svgjg3KetGagCdfVCL1V55EN9zyFHmQaM4VZRuTxHVnobK3Jo9rHhRnRmgXg9qEEcSmCiRqNUCivCpMBhU5sVCn",
  "key28": "4U7MDd67fNvxFgXzuYJo6JTy9a9H6Uzq5fu1VkfMcyRrP8ocvLiV7FSPRPPJmsTrWBPYRACJb5LDUNagjjBK9gPP",
  "key29": "5dXb5dJNsJFMR4iuxizrJY9BnqfrixWL43v2yhh4QWX5Vm4mq5YYuMKwmztnKHWsL7iWHasvhH9wjxrpYx9EvxBn",
  "key30": "67JxFeqiNYegX8K8przoFR1ntKFwSN41cjbAPhLfKYfPrQx7jjkSPfGwSjfaKk9NzfGTrbsXaiMjpRRKf1m7nkj3",
  "key31": "5ucj2hUiFLrmhGGu9i8fZHCGsJTYzT96a84opYwr9Emtk76QgWGinrWBoXLChqf5pr2uQDpZDuL31uqifJLjvg18",
  "key32": "5F5oNEhAh2x9axVfpyHEBiupnQbpjiRWbG7fFf8H42rxiEUsrwD2DsNCnALntFfzYci2PYv8bRw39A7MDq4ZSNFG",
  "key33": "2RjWWfhqCZAHjHtTo6THPE2TaL6sLscSa16dBea8uMHtMwR5wABKmgGdevMMivm8hB4hb82EZ5L6zsKd9H9hXMUg",
  "key34": "2uYiEfo91DwYZUDhJd5VA6vsfkAXRGAtz6E2fcoLmQMgBhPEYZJK7SK1ipAp577wdXTCMfxRnWk26gWfo5C6sxhm"
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
