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
    "3wAqVhCav6qsHi7dpNBytuejdNtcNvwM7RFTHJo8A8LQhyLU5GbV64m2ngqKKAmXnL6z78XCBNtKSJFNJsX2L8Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HtkfoD18BiHHaQhU4amsUkmzVNXPS9gkKcDr8DzxYxGCbqy7n7QKE37fjN9e8e9oByZjcxEdHBgopFNqVkuMsos",
  "key1": "piZfuLuSBiLeng7NgcsukZXAuJdx2KRmH6DawHVtfTLb9eRLGLmxJE2CV3F29W7toBPzyzHKXcBeFHXCH6FDGyS",
  "key2": "3DRwK1xzsf942hG4HVHG3FPeVCfJpgHv1TorforGibf6yYER3dC6JtiUkQtvDtMn1fc6S9s5MTs7a24Ux6RyQmVD",
  "key3": "JPrMTXJFXdRJu8vNv5naURCagE4U9h1f5jSa3HSpRratLFUMysJVFHoZZTFWAVWXzPWzFBGQXUBxPNE7RrQwKSV",
  "key4": "3NfiTduQEn9fTFyUv3WjsjLLf8DJ3FTJBisTcbY8LFZ5JaUMVasxBtTZLFJ13MM5FwRW3tGwqyrFfaVcgYtDSXtX",
  "key5": "27RSTmTdTE4sNvmxcaGczDjQ2szkUkRpN2euAKAbwZ2b9db3QajV3qytk5M4EpuWQnJcNez1wBg22eu4ufRYwgMT",
  "key6": "4BZjJcundGHPzGeuwT51LgbLegMJdsPNsvx41BfiadkTGDHpmXnVCuc5U4seRxXrg9rCZB7sAnwEdK838GFUT9ho",
  "key7": "2L6r6UHVigSrPCuHFLRB6Ru3PrR8HB2PG3a4d8SB678zT6mRswStJETc97eyynYgfsp4P4Vfv8wLPBUYZpygxoCB",
  "key8": "5LrCyixh7EDtcNP2FhazikBuET4embakzKGPGkntuiY9Vhmroc47nvPBGkxK3s5VWPaRZGPRcRPbELBzvroEjjC5",
  "key9": "Br35zJecJZHaBVyd548ct2FV2g5QZzn8Sxw7MhLwhYmNvbXDQoEkuZx9UYvWntj1hBcH5pKeVicQjF2JZkefQoB",
  "key10": "2DjoR4tZSpDhdy7UTLWhnEWuWxCuACdxurNzTvhFHPKExxn86ZqP1Z9ps9RE4aXeKbdaU5Jtwf3cryVgRYfEU2Ki",
  "key11": "37p8kPZqSKw1KUYS7gECn74UwJpMuMXmz8oHiAL5TQxNFZGxNrKxGyvbLfCP6zPmgivFDS1jybXwcMDMbuE4uxcQ",
  "key12": "3SUK4FyLhJ9RgdvKnGfEnHkEgJWL5LDBVR87QZDJ2Tg5KFeRzLWDHtdCfszGYbu2dhRYPjrHsbXcmYk7f1RG82NJ",
  "key13": "RLUsj9iih6S4NWwEh9o3tcZaM3rn9BnE2yPQV6L9JbWKVaHBEKaBEu8JkiGP1vqfEvfCh5BauB77r5R2Y92FK6b",
  "key14": "2qbtYgr7eURW6ZtJvmJAakQx1YvazthiStPyMstqAbX5hkSYrk1gjv2mMSo4cvLqKGyFn77kbhDm8KgXcS4Bq1ao",
  "key15": "5BP73wZQ1bf6imsay93qqw5gZz8U1ViHzr3Sj64PfbZdgeTT9BCwamSWyoDH3wkaekJjKQi1f2Nqg4rK2rmxJMhR",
  "key16": "2vDFU3pfC63Y4q9m3SqjJ61AiL2pCZJerSm6nm5Cqb81eZYEQZznTWLHVSSJv2CLEnU7P9cQr6rhssbbcyKKVHWY",
  "key17": "5Mwj9DdUE66MZt7Ssd9mVNLHZyGwzZFqHvMoNTLKzHL4Mi7qV2TgMtZkSWm9vJkXy6Bav6gBLeykDPUXQWu3d9op",
  "key18": "2raHrfEDZAa24C54WFrWvaaQURS8mdq7X4jdJGF4JJ3ZPn3xBwnEg7HqnYeNhoH1WnytA6kgjZ9xmvvfdnF5VG7P",
  "key19": "52kTTRCBxa78cGuKGyQrLZDVpyarqNz86keyoHSG6in4WdEKtw6sPwFa5kKQGNG2ft1JQLTLNDtXGiHeapxzP1Wc",
  "key20": "Tb6yBAMww6Cpkjb9JvLkJG8QejpVCX9CwcD4W6xFcAm63XCo7GB38DKdJRhcihczh2e7dUcAdRNS7JWXJAS3gBx",
  "key21": "3KgX1tjS79baZStAReZD7io1aEy7C6PBgJTeWzV4CUdW4CngiU6ZoHpJw8y893j6R9RkEPWBr6u6Qj616xG2NJM2",
  "key22": "3PTmo4ouSQp44SvWneMBp1x7gNv23kb3sNWjgZ27SAgo2cYfPNuey5amoZ2eSaK7PYW1TbsuQiqy78wHrpFLefWu",
  "key23": "5sNrgvj4dQqxfhEsoJWmS4NLTeLzifz8y9bgS3QZvrrMcMDzs2xWBV3gua3NG49oKJM1RJ12pb4FRKfTryc1LWSc",
  "key24": "2eJkBk7TZuxPS2P2478bvybXXZqFLdUFDHYjjQSXYQJteiF3LPVoqvTRrRtmfT5WAdefRRMxa8qS7g7tbzqT2K7g",
  "key25": "5vxtsBjxTzKHXm3iDXSGep9mJEkwxruUb5otGnYv4D7DnRGZwTkk7HzhCpiYT2S1m4vRW6Ze4qYWbpVjXZK7dFsy",
  "key26": "kY8TwPQchsEgoushEYgU8FYaNEJNmkshs6tEibJfGzgQeKEqcASV2Abd3kTKy9jN11BDxkJwzTfq4HgdurXdhpJ",
  "key27": "41bdJv8Z178oc5oRJbdqKTTJBe8Nne5QmXX7842R3LvKLUDVmLaz1Ma2rfM2itHmG8wG8HNqmXnZ7ZtSJcLDt6Z",
  "key28": "5V4Swz2fYpSpri2hKwgeV9A2LLHDkKqM63vXxbiXSB58uNnAirNhbnhq9EqFz1a47TXJCh2TvVyutqc8HUofb9yv",
  "key29": "UYJEZ6c424Ncc2RthEYBB6dNZPoBEi6uJRMcjSjjU2nWXPcb8YGAWdx2bce7dsrVp1YULfTwWEWFtukNLcbsiyu",
  "key30": "3U4nJ1FZxzLCDSvm1CgZJoTKtw2uN8SrSvnthfsnB6LjtUY7u9jDRhjKvGbNE7mv6DB67Awc5C7SjsyL7kFv9Lpw",
  "key31": "NHPv7BG6Dw22rVjmdm7Xqm2bJWdxGY2WD11HNksXnwrNMZuBwSpqwfrkq7xxpPX9TDnYZu9S9b48Gx8ExGazo4v",
  "key32": "4dLipLPmPmc5cE11Dfwgeb2jAU4uDaB3XvYeYBgk6GYFk2Bik7TBpv8r2pV2Nbzm13m4EdS98JCcJXe9WmNwuwFK",
  "key33": "4FAKwiM2PzT12wcBrTryJJrijva47VC8iayYmbMTPGEN6YrM5Lz6EQ2E2w7xSx1KbasMBrrsHS8nGzvudAH6c1zk",
  "key34": "53QD1QrVQVgFgSVjr9aMT3XoGTPaCH2mKShDFzAwW3gwCFgVtUwFDXvxnVH7zQREgFDfQxDpuonTRsUzag5Tr7TJ",
  "key35": "4Ui8o6WoiZNevpFcPj6JgoJcTmEFim9JxFVveBA3WEZkw8WF2wyBCGPhHGAaGtJb9ZxsZHoujTzTu8YvHraMmLFt",
  "key36": "4vsfX5Gpk2KMfgpUdUPvM6pQBHvcpaExafD3ZqA8x7H4tFRkbn4yAMqVNTVF7QQDp6yiJGGUEebBKsKYc8Sb2vYT",
  "key37": "5R5ait2GwThZ3eUfG2oR8zYh6sxuxPnJENe5F8dYvLB2sabGfmJg5dfFcAxAYPRVi39ni44uBQZ6sGaq54QExhjt",
  "key38": "5p48SWDZocguWP8zsttp7s9UaBwBYpL2ixrkYB6PWmSVWGpgu6ZK39Xj4e9BbDrhHL3cfnPELAxma9MSJvMw1rUq",
  "key39": "3uGhuWcXJhNrhfkFVVgiAJxoSzDxLawHicwf3HXA96qbGrwUz4LhzyWuBFFQZwHQqGgyigvu5SvhjGqpEHqKSWYD",
  "key40": "3GPsCLqZZHKrJL75Ha7yt2T9gYppqnfu7JhCvEdmYaMU6NkktUdXbAVwPmS2vD3qGBqU7Q8neMdBX3xoPM8cjxkh",
  "key41": "32B9DSBBjSrgxbYEKB2kZzNJsHjZd6gtoqfJj7FhxfHwpQdAXjCDXWJGNujZM4YtHRY7c7Sekz14kC11Ti6B641j",
  "key42": "r1eRPhBpcjuexfszrGaK3yvTKwiKbGpKEcq3mWvMQcrNQYdV2841Ak9ABJVVJj2cHWKKgDKTUUT1sFsoQpSA4WF",
  "key43": "5nv4JQ4yDmKHCg28zRKHGqYmSs34c9SH6CfXr8MyDoorekr69FedFCteEAwgo8PYwLJc1dDimWmKQTqJHPrExtFr",
  "key44": "2oV4mdfaMLzHtpotK36nKX7HKDCz4QLTGjVyf8hmPWcXd7W9wpidtFsWwCczVURZkcT3Uh6M3c6YWnXskUeZhLRQ",
  "key45": "4vYHmGdaqgtrYZz3x2oGFJuK22fJ7K2kUQz8GVyHqHWGpBB2zxqPbtKpL6S4Hdzz5X69v9GkPeSwHYc788bTPqsx"
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
