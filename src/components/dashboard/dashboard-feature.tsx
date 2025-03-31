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
    "QRuNvQti46kZec3qat7MRXZzhfSqsdoWXankLLv3B8HkWWLzpTpMP5M2EB9Mfid6mpUhtYjMm1pHFr6jy33bXoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cS5oMRQxm3jgvVf3frhxatrdc8qyi1BFbqbjK6ZRNXqvGHry6p3YrhesFH7XyLPqxcFeDAR1iyyRje8sxzQfaGs",
  "key1": "3WGRNB3h6Yip4Rt34b7RMAgvQ7CLZZVR84RW4PPbud8creSaPkP6ECJR9L1PNCcwztH8es5ng4E9tVbZGncxBU2d",
  "key2": "2hm3gAcWLGGNqmrYo4PBmYx4pU7neahFLpLqCC2sdL8rTbAfJrBHyP8FvKJN8UvR5wuW1SgNsb5RZDunGJVquvds",
  "key3": "2zZWotCda1tXaehNfZCdcYhPL9cdo49dLGub2rjDseft21bCAtSqjQeUgamK7bCx2hgBdAv1pFPfcvAJnHKf3Cm9",
  "key4": "3HeTZSasz4cFbyLNhq7xhCsp9F3eh1GmkfB7CPxjSLwKtcYciLDH3ztGN7BEzksCEqcWKyB39bVPq7MhjE5f8Nk6",
  "key5": "3WQfmz8kut4Zhx5W6Rne41RS8yUPBz3vFsbuxb9pFKuhZp8iqHNty6fTd1RSXH7psvp7s6Q1YcHXLK3PJgwbEpwB",
  "key6": "uDQ4gpq8XZFFwTLVYmkrAEQAcx8u5W51UdKhHB1X4KtK1RhptxEBzsBZSpsDj8gvVPYGwspFTaQaQe6no2oePwA",
  "key7": "3AGm7dFVvdhdAwbvrWRC1Xr3d85mdeqXJRNQqt1q6dkmHfWBGpmgS7HrjufKTJjTtB1qT2w77ufdczEkixDXBcQN",
  "key8": "789D1eec9Tx5A1TuivGkcr7BgWtQauUe1dfn7ot5uENeqF2YfBRpwuP6X9pAvWg44zPtRNUdLZr6zAgDkrk8NGo",
  "key9": "2Abn6he5JYpNdsH7iLz9wmtvgxSEfa1d6UqQSudfjFGMqxR6fhHQ986ageZE3gyXTQRP3nbgeZJuaRsb3NwtmgiM",
  "key10": "5WS7BSDhUfoqtAkCfS52QGi3FAtucHCgQTdrPo7XFouJHNXrj6RbaQbyJ66z9PvftMck8Qms8TzXJ5zLAxJho8XP",
  "key11": "5o1f7rEsd9NDY97LNqEoH9fFvMmrJ4pmFAgMAe8uEZ1yaPGHUadSRriZMVe8YrPP3e8ktEKJNDy9XHEHzDPPALn5",
  "key12": "1PiiajDkwQ1CuFzn5Sdq7yhyjutD9iaqJL5UoD8Bz9D1qVkN3HGDRKzfnW22WDZm7xiA6KaW9Su8hdnxBg5pAPX",
  "key13": "3vn4uFxrUK8TsNQeRLs4F5dwuBCfzxGwGfUu6VkTZfiynF7eu9CSCmS5MrjAPK8sfqXuwUrWCVXNfTwwMb2G33fd",
  "key14": "5K34ZZ4kHcZNvY1Rs81ZJHAM8c3GAF4PnqP2VR3Wif6cVXUVeNKebbguzmMb6XVh1QuQDLV88EEj3e8n7v2hpzMv",
  "key15": "2ksUvVJQZDQWfPZYsMWSzLUpD5AoKNiKFVSnZQYCFmLQV368HSsrDCUEx2ENFnJbFde6YCPQEqA5o2orQ8DGyLBX",
  "key16": "4ic2KfcSdrqxz2ZeDYG6AhvSnesk4dbk4WsffYjBQBAAfnbugtPAVyYbZ7zsfppfEpVUy5KEN3QjoEnJZ9yqxHfF",
  "key17": "5Z3vHcXzWAn86Qzq5qd1PqYfj5xKYaGqxu2BZeqoZ5qcBK7gkfpmwkSuk935gTnvyzggtk5vFgifaUvLuaxNV7c2",
  "key18": "SX3DnUucwuBP2j71hTcZF2gd39JxsDDCuuTYQ2YEEDBmrmTBmDiRqsFmvY43ZqfsQKoZ4eJcLFiCU5KcGE5c8Uc",
  "key19": "4P8MUZQhL57SVpdLRgTMts9G2z9iSYVzSVvkyCztzQFLTd7e6gZwqKJcVcjcPwMGWKu1BeJBoL6KUqKB6wnfLGLa",
  "key20": "31SQYcV8tLdT2GM2HZx6UMaqqZbRMkPHpVik8wPyttxDMukXj2U5CSU3TbSRrEwSL7Ls1Jq3jBND6rh8RySmMQAq",
  "key21": "2L5WynKmW3QL2ZubTJaeYVECgk7MqF1Uogw9jNsy5MpbUDuHb928M9XeVSnU1HCBAYsyrDCiPZK6zccfxHoPZtf8",
  "key22": "3LUXYRaoYiQJJDQYKiknPFtuy1u71WmvM43RYUE1Z8eciYU4LLwQfn6wNv7Xp94VEpQL95LneinbK4vRwUwj35gt",
  "key23": "5xFfYyB9TEagy64A872dyv7XQb1Vbjv7YvHSMxDKGDE8NXeLAZNQ7CdJ7oxkqSfuN3bs3f9YeY65MdiymmNbYiTq",
  "key24": "2iBtem6dvMC7v8kFyP2MLRMi9RinzMqdJfnhdUAvaAzp3CZnJZradrb114edeosfefxEncDSt5i5uAUBYwjUMnYN",
  "key25": "3zQUWbf5W7PAWhRpow8o9aabBb8vnQo4goWwDy1neZJs5rNHp1UKEvKuN5nfYM2gfyQp9RT2HnbioYLb1es7Tk4D",
  "key26": "hediKTTgxJo4RX7Xrh8WgH664Pt86FetEKyuz7vCoumz9pC8SEEn6uD9UJKrZJM5GnZ2Dhe1GGDeJfVmgAyVa9E",
  "key27": "5ZuUacnhUZnbm31UARCQpPMHV32neG65FtuW1yDH6qbBxdYx2bTvB4zMKyDEebyzD8DQ6mTLPrn24pgw379nt6yw",
  "key28": "5qYprMi7tHQb4bd2f6HoTX6R8fpzX47rUrG1fCBEChFfwd6Za3riRPMe9xNZM975Nh9euAjXkTYbBTA7USgixwwm",
  "key29": "2FhRJbQwRLEsCuqrJ5hSKdpbR8y8skfmGEdysMrw6moVqLT7pasbHCh5FyvHsNLDpWDw5tJMWwsmFttzRmZias54",
  "key30": "5ejzjLrj2QsRkphGfwHRSqqURpmKPvmJyrB4rdU6pS2YELqrXD2uZPK6CFaS4VT1UU5m4P2jN57buM6KaKkyxBGF",
  "key31": "33zXAk7o2LZr4br8LUmSWDVJKhhtWgHrjd2rghV8mc5QPioySGA3Wpjrp6WCNxQmmef1dpQLSG5mEWxWJC1GZndg",
  "key32": "3RHvcBwoLPFp1754FC36QTUwoLT7iE6zxwfBRsvtkeTtVQZFKmstRgmWUodz8PjiRrE5PDm7zLFzkDkYNBngJmGm",
  "key33": "3JNggtPg4vaLYHBrVEx3vjMjUeY1iEAwKftcS9ch19Gx8LAmxj7XTEwuFFfn8dawweu8mTDLQ5cciRVrMZuajyo3",
  "key34": "2ZWF2Ytz59MQZFZqwX3ZEMZp2XLcJivzc3hWsuztzwqrL6aGUDr7c2pTCZCYMkjkhSQRV4orp8BNJDUHmijofZbg",
  "key35": "59GiKY16jPRt2eYfWq3bWka2RGKfF8VB5iUKSPHkXDxuven3B13XSL6rrYC7xCJCACt8g8namq4imwDvwgJ6UyKQ",
  "key36": "3jUc8Vgj7CwK7NWhkSnJM3DAGULCTJTpGVqUQAu6eD6Q6cy4WWFmr114NfcL3cN7yeYtzqWUeGiSSurKenfCkWMb"
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
