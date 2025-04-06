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
    "3M1xD7bbsu1affK7EE17CwjrCo3NYA4RNjKMKg1mfhcLds8DZo5dMMyzqQRuCdu2RUjvdM4APrFS1YwgRKoD8PKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PxUJAj1AE1uckFBW3vsPtTxz2pMAtdUYEGHLkQRtusWjM6ArUCxF6Q9zhRbZfxTqEye3Zaje8fhdq37BMZTLYGn",
  "key1": "c3boEHRa7SQxKWSrDtWkYooieP4ZVooC9Ve7xE6rLkbZYmSsagusPyk3Jj8U45229Q4DjzMgST77dCtPktSTn2X",
  "key2": "phQtHvv8ZTvcgC1PuJ98u3L7ZA8pY3tYKnLLXi3MQPJp7dw1fn6Ytz1X8Kd5L1rJmGtFFr95jwW3fRJaAsaQCn8",
  "key3": "jafCr3fENV8NkyYG9tjTeJDnyNBk25DA2D4EktDZGvkTP2juPYDPqY5FHKLoJZtHnH4w3JAfj1CDmaepiMep5xp",
  "key4": "iaAbXhQj34wjPEjC8m6Ai1UZ4g3DpSAf1t1c9uqNvhbm9p5GpL6NH7NFovtWABm24VtSYFVBJPPzgV5RT2TmZkv",
  "key5": "2SkuSiQTMqob7qXnZF16SzywykgrkM6N9sXq7bw4jFuXzPDMtAacTAP6WTgbHonktJofpLJKzzDY3KUhs9Q4JhxS",
  "key6": "xy2XarEXq6RmzhMHR2bjjC7zQqxZuFaqmTXmTMDvwMXk6igXj1xzj33hMAQadFLzEPg3reGUdDk8EZ5731YtkM5",
  "key7": "V8JM9PJSKqgUCSRdNEg6mtRS9FYDWKhxsrMw4h1n4VRY22U2cNsuwQ2uoSmf6x81w3qrwkFxHgMM7VB1YgFisQG",
  "key8": "4mKitjAHCycEn2aFKyKMH5jaMmE9GJubscAVdhQxhCz66FuLrZNXCtfuE3BEyXXnaUym6NJRmZAKLMtdNvgAeYhd",
  "key9": "3183sTxYYHuNveftbwARYLfja1yWZkamBRKcEC4pPSHus1w5RaV44Kmx4vQ6wChtPgwANnS115a3mFEA4HHcCi6k",
  "key10": "26eH1yCMtiUJ49xBR18tuq2escAnwWQPX1oNpdX4MfS6ZdYqRYmAv3qMT5mf77CHQjtRgPtcf9qea46fn6ZMvWBY",
  "key11": "3VkL8cKfY9ef7ZB11ntND7amriCPVKnZcVDZ2BBVmdWHbRojwbe4hXiHg3YYfXuhtXpmmkGR63jwWhHnq2owAG2x",
  "key12": "5Aj3donqESNojAosqE3V4StKqcTHHXHZn9oasa629GpLL2zsAHLcgfEGrCpq1a57xn9SHo9c7V8XECj6SgfoGXZG",
  "key13": "2o5Pa9Nr1ZYRX6hxZVDLk4Xc1VabGY8yrKKNWaB9xwr1aPWm6pS63CknEyVwBpry5Fj6s31eoP5Qc73WzQLGULQN",
  "key14": "3zKPDAcehcgE1Eyg2QzVAwNCLb9e1swXpSHA6nkAo45LZzXGAgtfiuB7MmEwFSAzbDRTtUqa9fFQvHAZdX5yZNyM",
  "key15": "51rBbLAokhhfiNZfeTZvVnpqZaUoGgVKqborVgKTjdtQqP3xnyLshLrZnMm7dDa7H7dBupyUaN3JpBBGjj8v1Lmb",
  "key16": "3x8w5odk9um4Jv7E5NVEnwYEiMZyVYSmgSuypFSo7wdCrHLPZUqXq3X7F383P2BD48uLgA2v4HvdnU8kmYiG1HKU",
  "key17": "vnLLeuRPH59yFkDkQmvviViYSJB7tVmTzHYQJxe8A2QGL1qFxaEdGTQNrfeRgJomLdBVJx3HkMXEUYbrNZsPXJ4",
  "key18": "2CJKe5QcTMj89Nvi5VTErvBjnC2JmBL5dfhbQE3bxeN8ZGs3g3jB3E67EkL8AEJUnARpXPSjXkxHootDp5bZDi8D",
  "key19": "4hySkn1TUVBwB33h2hCjKQU2xTMvU8caDSXWrz9PiF3DKwTfwKnj3ocL7V8pnHeRZrXPYaR9ZxJrhFhYuctUiWiF",
  "key20": "4ynpAuPC58GdoRTMJYEdNmfRT9A6TLuSpSLzPwADhiop6S719QkFMZs5JkqbKM8gNop45ncgcTfHiYw16bwDC6x8",
  "key21": "246GLzU67dBMMnJRjH1nUcqVqshiyBop4zyMj29VAgdunLoRPR1mgJ8nHeSkCs6WBDPE1BVEMMBZhZt2BFdwiWuB",
  "key22": "5YKqwmZ8fqGMAvWMqYzutfUfYZBVhGdTBvHLpnYWniVUhGWUJ1rtBLVw6r3H9fEQoeHqkUwd2KU2RbyZKMxT7JP",
  "key23": "yakCFDULVALBf2nhEi9HDq82t1T6jxczqjMdhrQ5WV3AqBSzGosAR65SFeCiuNSAZdTDdMpoF7ybraiado1K8rk",
  "key24": "4XgWatVPZGVfxHUPCM2qjyxiiEBgwn4wdBk4Q5Z77tuEgirvyJR8H1zQR7uRN15NjXhmfQV7MqDBYznJv45F1ZBJ",
  "key25": "66wbcadBm32UEQDAEAcdhjgKw1XvcZxzmHipArP9y5ERCyfk6k4CQXifbgyfZgReazLK38Qm5kRAumzCsCkkHNRG",
  "key26": "2rRJviiEzN8Qkg5KnJroXjPS8c761jfutSW2rH2oihKgbeurQ8uTF4CuekZHGpJLASiDPSNo5TDttR173ry5n3Rk",
  "key27": "5KjGXtoSv6q6dGtj5PBVchjPxRmZ7VQV4Pbdy1YsdsvRUqZF4emYfMB6JvhDWinp1wBDC8ZuF8xDwczue5532jX9",
  "key28": "217pqyHDL8iRjp5nYQ6rJGoavydR5Z84LWxhv4qmgenuSuAEToe1uwEejtYFBsjzaH7yshDjzNvbozbX9wYoKbXX",
  "key29": "5GqstKBX6e5xPdr1FZdiWqDDYEzavgZCgd9oumPBn86s4HmA1af7tFSVbtuo2YMM53KavD3cK3kL2qH1Ea5JAXEb",
  "key30": "4uZrGjk2DZVxAJ7fWSwmZWgpw7eA4eTwR6KfHNNwYAZjDjgUCmuYDAtuvasRfcC5qtS1qXC7TCuctG82BWDuL42z",
  "key31": "3bXNFsN6Ngr6ynhNwUHHD9PZXdKAmPLjZSiWKR7vT1LL6USPgjS2e4NneonQNae2BMfPZG6nS7krTTk5EGP27HNp",
  "key32": "4vjAxvvgkRp33nhKxjNu8i7dmAYgBBXRLhUcUJddfM3yhTZwjEMtvuHxsg4ga1aEoWndYDwbBSBJZ54N2rAmxzj4",
  "key33": "5UL6FtqBgm6XmtS61xmmDD7ZZtvjC4d4ASpYgtWDhmkgpeGZ1oNP3KU136pTAWb9G8qAZF72qs57sEtpmd8on5Xd",
  "key34": "67DvbncXGK69UkSXh7j3xsj6byNvAJoeaBrgVQvpmxw7aRpGwZTY6jHqXWisq98t8S8QWjDGmTTgLubsCAWRQRwM",
  "key35": "3Y3QZNij7gKUKkbnMPYo69pW6nRM3VAFgtDeR2rBMHjxis1y7sWLtd9f9ssNVdqmFmEWv5KfEF2TdoKyVHkkv9WA",
  "key36": "5DLRBUTbH7spLUDvyxcJ7E4RbXZXLMEAWk2LmnbHTFLvAHnWjZ89yYeQBvMVv22PqpR89N7GKpN6V3Whdr9X62Gh",
  "key37": "2R4W6h4NTDnfMgYbPQf5iXHevqaWnu8QELtanz8iqZ9m4d2nGjMKk4PMePb6XSEA21dAeFyWjuJontdo3rTBq1y4",
  "key38": "2kmyQNhViG8PsLj2vyGj8ET9TEvCUJG5tHSX4BBDw6EXVxKsUkuHVVnKJc1Z96BZbrWeAka1UxAbb1StDQDYZZGQ",
  "key39": "9sKvv2ozenhDxxgqcJNdEjLvSS8hdpWwNy29j87NdEFzFcjNXKMAjvim6D6RpPGbNT3eEERjKEYMLxupjDmEiyT",
  "key40": "2AGApPiL6QEazMTxMvonqZNahf2xJi1pdkv1wNPkm6N3aPYqsKfBYL6pfyJE958CVFB3UifijRbtKhQtZKRNjvXS",
  "key41": "Zt91FiJnaaxC7VDCQz5yCWquAp5ZUMjm8tqkn3ZxB7T4JCJMcZa6ZL62ZztLFqcWZhMsbBiHRpFrTk2SqLNFrY2",
  "key42": "4gmqXH6Sxuu5HCN7HwDJi5DsU3UPhfxaWfwWyukYctC8MzUx8nQ5FyTV6aKSZC3geajzUBS36twvVZvedCmDE22w",
  "key43": "4GKNzsaQQrWrxjYc9uMcC5db9s8MTk6ztRwzWXJDb6G9roocrzSHLbqKStLxym3Mof7XXn7c2JjifnfCgc3sR9Ht",
  "key44": "2roX5iUMzG1gnZPFpvSoZgtWR1JC6B5zEFbXLpyXQqEaaeDLppxYMytfJJaYUrT9fWHPacKTrhFCyXVFcqbqUGjV",
  "key45": "3nucLUe4374ntuUdiJx1EGYkeVfAi3hbaWmuZNydWR1ieYKB2tshvKAzzULFu1GMCuadbJbM553D5RFM9uZDV9yj",
  "key46": "4xDn6rtBKDgJVwQmNaeCBZu5CjDzHy5jaWVDBdYtmueKHZk4emNpmUDNsv4TzZTVfDYX7TRK2M5JojTR8DYTY7kH",
  "key47": "L3FWBYm6Gt3hXRSRsmjGP4wFWyCeVnCs2NhpmTozywKRxrkFq5xDTQrBM95ubLb4J831ewUpVhhCZyAjibB3cqx",
  "key48": "2GR2j2HBLQExMS3x418rpt71ksx7yHdHXHM8FrEonPJupMFK3ep6k61QY55B8EGRtkC1Y3kZooPRz5hu3dyWGcmX"
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
