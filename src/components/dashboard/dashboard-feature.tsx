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
    "2YN7tfpSfKVsDbiqfD77DvzLVvLfXUGe2UR7E5vqT7osrHVgZaYXJDR7t6GQwTXy44LZMDbjBNQz7FRGxkrtBihB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceVYWc7MH8S8RExaJuDrWdhHPLFptsMC6KWfXozNT6WDghuXJ9bkqjpDDTUCDyoBXdxTdyL23eBodvmsvLNEBkq",
  "key1": "4VeQoEoWbop7nZUUioQHJ52RMkGMnsWPzBWyKzkp3KGyRtoiNkUtRHf4tWQTwg5C32ibnrZUvma6qFjt36cn1aPh",
  "key2": "38R3U4BdUJhJukcae3HrZEVaZyJcUpL4adPeHYbEMsFrcs28AYXbriXGpdPH4XWZMMEjJKCdntdSdRwcagLxBU8Q",
  "key3": "4iUv6ZUsPiFvtCcPKZwRY28E5bmYjQLq7T3zdURXgZfKnJyRMfYfa4wKYYMmy4KYoagcZjfuR8PacJzG21fAqYLq",
  "key4": "5MK3Y8HpGDJLfzogMnLCykLiShbPDqmj8BQzHPjy34XH8p8HUjNaAuZLRmyUDCh4w2hAZ9aLvzCygtpv9sg8QZqd",
  "key5": "5mebtQqxEb4kZorGMn7wABkH6ru9mF7uCnTrxmoSYTdoYNZ3bZzwsL7o4JTEaam5rHatFUkNUHKYT2FmiPJfHoSx",
  "key6": "5EDn5DjH9tRwxwSSYJJXRPCYNzbT7igMqxsmb2Va6qsS37gd3B32VwRm4AcNdah76YD5zKvwTQL74AgzMm3ZRD4n",
  "key7": "5BLr1mhkbW9Y3yPcHnkhEkk5Rb2jwHPoJmjwPPRmMAQDAA2FELmNVB2pRzpozztQr9cTdtSqXaGzdiykG8a3FuT5",
  "key8": "32UdfvXAbns8RSDafSSbGR512gi62XSXRgTjWi461eVjFT32m4jPbUmqg31J2zqqdJ9u8Ec2YVE5dd3BE3gaJyKL",
  "key9": "4wmRMo5HggaG9uDNpRuZXXnn8D1L4oghnHHE9XtmVHUdWCG9FRj82DtYhwbsWY1GybgzYoV1XbRVR5QGg4Rr5eaH",
  "key10": "3ZxXYRkQHHYkdQFqFVZd7hxB1AuFdXBmSowWPrYKiG6QAC62iYi43Vr4iNdRg1STqA5zqcvtK9wi787W622wVqtP",
  "key11": "66AJFeSGPSwVpLDFVy6JcbRsdxXM8eDg3xs9Y8UR2jfX56cQSyV9u4evEAx6HUDviDVK2SFx2rBf9JWJjSZHYw18",
  "key12": "292SsN54SZzCZjZciy97fudKfNyDPw3sBHUjb3XkroZjj4uFnGqRCxLGvzQxUhJDMJJnxPc6LJvQyzYQgdcHFC38",
  "key13": "4J4wCGR55HDx5ejQoQh5Erb9rbjDkjT8FUsiBHZnsYfSDoCRgqJssMN2nATcjcx1ui9QTYEcbXGBsjBGYeyMmYsX",
  "key14": "3oE4Sq8GkzKL1HkP6RvpVLRHZi95wTmLdVjEYrAuvrxvMnPN9bS5DJipR31NEJf7KTYGGtKGUbFZ8RUkxb8B2vnE",
  "key15": "3n7mGJN84UVjAoupnsPib2F1ryLvFc56sGmRo7nkvtXmoGg8Jh2fNNfdEoEWrdsKYxuXjcpmNMMnYCT27rFgfg4C",
  "key16": "38RFcdB34DNP7gzCUqNoNsNvwoDSxA3GpnymKxcEf4A82Vxwm3o3phKrS1KoQ7XekpNtAjm2JS32YbcG4Y9yLoFv",
  "key17": "6ut6yz7SgCgY4vUtobqfTVMfnzkGh3jCH47E6F6dBzmfrDpE6dQFD8qJMcugoqB2s2Uzz6WpBE1hh1VSkdQnUG7",
  "key18": "3FBT81bikhDL8MUezrYZyDjTbmC3vgwfeJK9JvBN217v7hyYtp2A3eGescWS17xK4rjLTUiRBwEen95WYeaafbXN",
  "key19": "3Ebw7koMGHsFqiP5V9vLjngdB5c9ZSvXX7RC7sffDUUUwz75GVtkch2zGNQq8fDrPZnYVQu2athoCXKz5GRtBfTD",
  "key20": "2ryBFpWyw3MovW6azy5n2H2AwMW3RT84xZu9jfrNiDiUtTxtAwuvSdCbp3pAnxNwQdgvBfds7ydz3NKeBWmCAxx9",
  "key21": "5RncSqW8fSUyQb5ev8EehPTKvYwy5bjS3goPbYwBGoqqy1FTCzT8Gte6LVksDQBKSPaeSb67ogHCnifFBAKJmwCN",
  "key22": "yQViKmg2jmifiwrhMVDQbU9AbkxM8n34AACuqyLkp7TUBWftonK3YFs8qJ7Cjr19NuRs6aqpZGhUT5NromajbUg",
  "key23": "2nLXeuy5XHYDdzK1NxScxzjAYKoBMgMrw2ZPZrVpRzyqN9qeMVcmZYcViX9gNQheJMYRJUkEUenesKTeoiEZaFaA",
  "key24": "4e837isBZfXGvBrVbwSa3NUPFdhcBTtuwfnhnSrwt5vsxZQzmifQGTobgE8SyKAaHs97ZHdgYfNmRZ9kozxYx5BD",
  "key25": "3AsBdASUFJovch2VTcqSGhijTQwaBVSERdNsyMuKk2kjnrLPaNQKCiPEyYV6qC3MFjcvkSi2KqcBANcuMCEmJNkt",
  "key26": "3sqf2wLayaxsXTc9SUoRGWZgfRKGWWaTfDd2qCRHSKokfJuoJy2qsYagsuRZPJ8XxAiC7zHjXB4umxDrak3rfMnu",
  "key27": "3Wu6DGqwikYeZ6iNvfk5qgSZ1hwUt1HbTT8n3VchKNyo4GyHn621zxJLnLksa2HZKEVt7sGFsRyVJsgPnVfsHBgt",
  "key28": "2pmhvubtXSzBdfphsLcaafpEsL253Dg9xusMWbwpBbSKVN8Xt5XDarNB1xVEKaae3k8ow4oKAba9Vbqhtq9nfbnt",
  "key29": "wvffChPGHYme2AgUQ38yH44vqkvqoMmzSobiftmCv7aw9XC7QSbE1QAw4dRLpvYPnkAAqaFibUcW5fRFCsdxgoQ",
  "key30": "4CJw9EYi7DiV5gSzuBLvG25nZJiRPsXwWj81LDDwhbXZD8UAoAvqy9iXvzwGNejafaMcbe5TVKAVqMp67XSbYPSs",
  "key31": "5CqejNGBMr9xGcHvYZRSpurVPbkBaRKQpHxBfEgrMVLuPh3A4vmi21DLWMuMey6eB6Jx2ddiNWi9GwREaVro15Gg",
  "key32": "5c76xsEaBDbYUFvDApV1jEdGsh2Ti6LD3j6M3hxyp7Lf4AVBk3i1HcZpm9Yq2Y71vurQ9tFmRzYW1QULSVw1hMip",
  "key33": "5965PdDXQ4Wde3kyA8CU2WNisAbfGMTj6sPSnCnHm1aRzLocBiFgneGyYDwxSNP7WJ6jUp8BY1m7YjXjJv14FJve",
  "key34": "RSvCdJZ33AK2trgv8jrNRdDKZvzF2r7zBxrfqv52YBTEngS9ker2cK6tyjKvnqdxCQcRq6zDi2MfRCgU1XkoxPL",
  "key35": "42VqHKcP6LCXk4Eu4QWVHxa5gfvC8zsLFJ1dumXpQcNzyoQHdPNvnv2xuDKj5fpg5qfk6deenAKZ5rNTwDkQsf7d",
  "key36": "A2wsrCHf5gApMDmvQw634Zo8UVRzM2oQ5MWj8QZMCxvRx6U3uTZ7B2k2XUc5JGwyXGta7cDEHevLS5By5bHXWTh",
  "key37": "5dzwqbVNzVbqpbuqG1JthrfA1dSwoFQ6NwvAr4B6iSd26D4vfvnjYAhkMKkhnWRapqkkF9dBFKudSUCKE3j5p55S",
  "key38": "2cMF7vub3egNB5CTZVbnd98cV7tA3Ykfqvw98dd8U1aNZdNnwhnx7aQpWKwhzFYq2mJVcmbtmJZo4xaKqj42rb6A",
  "key39": "3FcmpvExnqoGPaWEF4x9a7jauFkfm3hJESGgSXnsLxhabhaeooh6PYs65KUxxVWju71867SJDdxqzZu7jAiGkn5",
  "key40": "3ubZzkRW5fP4RF9XAZRRupgijdYhjzEcN2HdcdAjnH6R6ahv8feE2rq2EBSf9csDhKKCNRS84NfLUaQeXAeqyx5E",
  "key41": "23hnX1ULvndQcFxBxqt8Wbi3KipNgtvSz1z4GmD3eNSFEiCTzAFJTB2RHf9XHsxcyyZhokJXB2vigAK1gEC6eV3L",
  "key42": "4TQLojVDyUAEdftghNTVQQck9oFcvqhNZi4ahyEmS43rcDRxXC2r7qpeJqHmNygnBzvaNFfn7rgFWB8p2yB9ig5V",
  "key43": "2WRYbzowtSSLqSDTWHi7yqFWq73oaUn8Vf8YW18c8rHboS8R6LDNqn59JRQnhcNhT1AGXRpBteaMdXG27x69LMW4",
  "key44": "5Z6xqq9WJXeyEcTBN3DaXwU9jNkVws1GvmeJrP7TxjDpRMcYGtNuh64BwLwN7Z1t7HJrhV6jNFtK8ooiJUtmuy3s"
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
