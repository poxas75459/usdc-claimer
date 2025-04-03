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
    "2e7jFEbu6UsR7B1njM2MWcfLkmZCpnrPpLeMV1HmK38su6MpSkXKX45EofWGADBYgyioE28x2h3DzZt7v6iQ6XY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uiyA5uWMChfPxpjv5JfqyHirVxCybnrzgSpVeivey1chkQhKn8jTD4wMJMFsJpVePdsWDeGHqteYNL3M6MovcG",
  "key1": "4Zq6RsU1LRtzDzSMGTdtJmRCRaboPvQwMf3iAQ57GJ9owhCr9qWYFgVUnhxVGQEHooXigZX2W3m2ZbqdQtGzfZnt",
  "key2": "5TiqsREjZboVjfPvUQqUqvPgkRo3fHLSBBFLVWhuLnpjY4VF57SFgRg17JjmTtRy6Zie4nVXYWE43a9F2MW3szEj",
  "key3": "5vayRXiaa1BNGmu4GetPvhb9Nhnj4KsmgFGQv48HfUNjG4YEh4f5zJxUa3KQAvWGts2iimLBqRXsfkrAsCB6Euwd",
  "key4": "2ugiqVujna2RBAL84QbHBcLY1Y6rMn1T2sWjAtEpQvj2jGqk4LgrtbFBEDY36yiRaGnuBs3391eaXNh9WYVqTyiG",
  "key5": "2YAYkVL6XUpzMadhAXMxPvyzRZsaHn6P48r8wKfCev87dQSdv2daghKFNLUkkyRtR34Q29EdUfwHKt3WFpUkFb5o",
  "key6": "5UN5aWnThXC3rvnRUEAcXuUGcj8XzgTcXneCy7R4JE29Je6co5eG5iNcfpeeChtHeJqwaHKtEBVMM7nbUYfB19AC",
  "key7": "3QnzWpREHx72qKgXmimDERBMrg8fGVXxfvXAQ1rLeoDJj77BVnmRfpG9zoVpk4B9WUWUTjWhNTrjqrUJVD6UXfNQ",
  "key8": "4xQNeHHGXa1KSdX6qCsqstR41cSPA8zMhaH46B4jFzFBJkerLhekjtwmpAGYuPGGCwGtPGWPUWg9yDr3aBQpJNVT",
  "key9": "3raDtCUXKAngBDSpZE3rB3YDATNsUsZDU2cJ8XsV5vGVmbCogpmcpscwkeHi5tgaH3GdBpkQ6RNUHvR2C5stuDjC",
  "key10": "27pNKMgP5txVwPbQTwtxY3ZRPCfCJL2YC8b9GF1eBLB4FYz1A9qFSYH5xy6hUdonn6Svknkf3sJYd1bzUCc1ReuB",
  "key11": "5SaErxpJPTFGLbhXuRBJkGygAK2gX3k1vw9BG6FkxxCSaSCPwXYssjz58phVNRgvtsK94sUHBkqf5gRkAVWnjvHP",
  "key12": "3kZBxVs424RsrMigFAABsassR5aDD2KqJtMztwj2SK3ADXDaV6SBKPiqgmWyZSYyzdBas4mmwoquc4kLhvxZbHi3",
  "key13": "4cVE38Gpi3HxWA8mYZPDL41eSs31NKhVwsarfnE9Dqta7bnYmYYrWxawy6RmirMyPzRsA8AHdaLsg7ZohhPGfzA",
  "key14": "24utLHRRGgoqzpJmJpSsm8R3yWp3ftyvNPoXxFeJYCGotnNYiUtHSUiZdcsL94gcuTCgvdqpBppLU2yEGn5PDTLt",
  "key15": "SgxhMXhgrfGQ6qnaUP55U31JLgmyW7hwtYN5TJdHN8rx2PzmzYvqs6kePcA5kEkENjkkC4P8tuYQ1QXhYBr6xpL",
  "key16": "5g1GyAX8XXjiwrRXamfrSdB2hr15qs8aZ3vp555csF4t4N5oUcvYw6bjt8hrf9rt8X1xraHYzwtDYxpFp2FVhZHB",
  "key17": "39jFhjUMd7Pq3gV16s1vcR8B7tCB4Kw52SkMe7T6HVPiUZ5hxu9chQXv9qBaKyAdnL4eYAqvM3av6SwjMQPtUqAJ",
  "key18": "3LNS8ckvWJVS8JBJcEvcBBhVDx3TnMt7FstfWN4QkU57BwVz5pwvjefowKowbUpvi4tg2R7d7hWtZ8jvmUVPEvkd",
  "key19": "2D4SZnJk68YCqTaF9U7NxpwiGwpcXJf7MjM7LwPWwwtWwzu6HM4ZKmH1HGWDcU9R3AvG5kNHiNpAajftTzBPLj7s",
  "key20": "2Xt78rsNXz65448R5HaHwqsBf2hKzH2mNjKGLuEwgfe5URiBodLj2sYfm2j2NLzVCgQkixVd8hA5zvnxxPJYv7rA",
  "key21": "4k7Y733zZgE5UbMphjdmysZkUqqKXvkicbLF431wW3ZHPW2aFtr9q4ECW25XsMvAB1jqhELHJ8XCWgUiFcBcsUGb",
  "key22": "4kFdjzkvTXD1sgc6P5ymaFmVwzg8uc688AotvRdQsMkM9Y34K45XXb63tyvkqsYNpJ8QEpUvoeUVd22WdiCQoE1n",
  "key23": "3Hkh3JY9WMuXq8T6sPAXWyEQxafvZ3u9G2diaKGGN6n1sS2QJZNH5pBuRxW4XSC9ksLWEKRREqKrWYX1HuEGHQcP",
  "key24": "iKbs837urPHyFGNqzZNVYZrqiNg7uFJ4o6oZgAEMvKS9K1FPYT3RV5j6PTDB1fDd42eVtyNehyDd1zfMkAxu7Jo",
  "key25": "5tpe8dny9FLMkNx31LFYWadstYALjnGz1CaHnsaGyytVfrVhiPW4fTQ3Mwp4TMPwsuY5M6nyWYoA3tJRxryR8z6b",
  "key26": "4b7xfBaGHcW58AZgeEXXZaKorjfvdANVjw1n4TQMbfjDi8Z4WLMxkJoCQVoYts9ySBwQnFNZkxC11ZEQ1eTn5zwN",
  "key27": "3k1L6AzTTecrkEbSpjLVeEcFk6mpFsS7cbc4ZCZBQtdes5bJrAiWPkdk358wa86xiDuQECxKeDc26ELFgGPLpt1i",
  "key28": "5xdeoAyUrbR8gYivybNMJuwYM5m7eEsfUkdfUSosXDTi1ewKPmyaSKMftLWrptoJQXA7PW4XhEibNFaRG2oVB39T",
  "key29": "dTqDC7x2zZuwrvn6XuLAbX7ndfUF1LLV9sT19ec9LowPxWQ9sYq5skYG4ig2aBpp2gw62GnNXbty9vFrVQxovoD",
  "key30": "58MQD81Eia7WkSbdwzNSETeMvuph2MKnLH7yypUrMf5uVVVoahErzSsvSNZzVfiSRH44AhqDX98w1DxM9r8fLZ76",
  "key31": "4qs9c5ZfSo37npwxuu8UwNot9iH6YvaRm4a9wouZbcc4yGfoUDHcQVvszQ6urE3rk3GnmbYUuvJ1EjoTjtMtDYS5",
  "key32": "2i2bDT4aeRCGkvwVTG4JNWpyq9fVn9ZrRSZXz2nRhATdEWqD1u3bcJu4zs7xv8PpsHru6G1RYhUGnqreiaDWqDn1",
  "key33": "4bs4KGhzNDAdEjy9fPpmmtHHatHA6Q9ecnCki13Zycuzx9vvcxZqhum7EgbC8zPLoyVzj7GdxLShXtmdQDzFiTGR",
  "key34": "42pDxV7qEar1EYn6e5Bm1pNJDkNaEvvrpRs68NbpxDioHzt7xQNMsox3Fo8oHAH82KaYbi3SxQDZksEJ3N55r7Rg",
  "key35": "2Rtb71G2RuMjU6Fg2MeLj8hAHgFVaA4mJ7SdWnad9E5b4BX26gQHbGqm78n9YaDZV7L82k5GxBisvSDV8XPJE7b9",
  "key36": "5SY92YDCtdj33FqsKKqkqJBCbud7AqkPajc5vr11256577ecBUSwADkDcUFJ9ksanPQ3FukoW8ArQP8t2QPR8pRs",
  "key37": "54HPEv4c7iunbXvYw9SgPVroMz3FY2DFvTEYx3dPXZLPGMUgcehw23nZ5rgnZGDg14rMRtf7oy1vtzA3gExkG6mw",
  "key38": "4kjSTwkhdMFi6U4mb6JRVVJ1RRbkh1Wauv4WJgjpk6xfMWMYm5N7J13A3qQUMNqiiSkHW6AzgrEw1QWejQ1z3h1B"
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
