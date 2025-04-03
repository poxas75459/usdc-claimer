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
    "4eqwVPGKVbFrAaWNwB2R1GYcJvbNyMqaeaAxo2C9JDeHzruTwB6MAG72T7Bo5CBMFB1tgXH7dNG91WW49MxxV5MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41VjcEZptrdsVaBiHaffTVj7NcaJHvgXe3MEpFxiMReWUHpky7ZvpzTeNxnwzS69DQnfFHsPNZ8prKJ6HfHXqSd8",
  "key1": "Fiif2u7yG3KFdXwQgTWciKVKphQVdCE3dJXr221jx6Z31xNGNZau3i3viYfbcWpSYCXTdpaiPuUG7E3C1FMxRLu",
  "key2": "3PzrJNLF3am8WDhDm8dhxpeE1H2pBzdRqLJ19Y2F39pwmE3qnFZYjsKQsLCEzhyCo8QN2MQxhp5ixasFgHknFV3w",
  "key3": "2gqTHecGj1yt3vikTh6QPioxCpGF5Wrm1De44dGrtSjQdAKKGhvA3CBgtSegtRVVPNANpSRy6PYbGyyPeR6vFByy",
  "key4": "4U9NCWPtCxr9AQy24cwnHq4VDcLXxcBEysdmMPTVv4TxmdhS2YB1AXnxXN2SenKxvf8S9zBKTCbEpNQcr93CTgzs",
  "key5": "2JYLzZnnuY3x5ChCCEwwJWHuEUkRiWaAdENvjpC5CBAG4K94gAT6NyhQJygcQqZFzFq3wP1hxndMfc5YC7KHSWL8",
  "key6": "5Vi23r44QbGmZXuGFeMgAHbfswx7KSBrhW1a8jgxRGy4sSpgpnAg8WJV8mWgLh1Qhx9iE6x5wFRBdiJJA2USC3cx",
  "key7": "3WtrCCJBtbyYJcpa49nxkzsQSX2KwJejcKyK4Bjjanf6vEY3XSMrcRWr2mZS4N2NYkeZwK1z6BAxXFkRkzoXXXtV",
  "key8": "3CtZjmSGHdXT8ZEXFFBNbEs4LicaYp8Bhc8BYfKgPQZnoGCg2BzThbmDQVuFkW4GXTwtRXi7XNa2sKg9GbdfqjcT",
  "key9": "wSY5iAJouyBx2z3umUJHG77yiQiGQryWtgbNfaBVBd7ch57AwhJtMiXsx56vcJefJy1jvUcpvdy4tzsxRkyLNk6",
  "key10": "42NZA1ogaGLxyLdczR5QGzCgwBSgKWjyCp1pq4rZk1f81ApopTATQ8QmWKdYNfSeokGav9Daeois4KqgUpLjfbyS",
  "key11": "2KFtnpWk3JE7QMKsDCVNGGqnEP2sdwN4UH3TBJ1BEeBYQdHj2jLQ3wgfEHHabPr4zRcfgPQUXp3bk7Ch4h3wA6qw",
  "key12": "5mi7VZ5osJ1gArLeiE8cWXXAva51vUhV78cDjfWT3HosXemNxMh1prBvtwN5kL63RM4nZFWSGVpUtqZbmT44G5FN",
  "key13": "5XoHCV3yx8FP5mUgj7QJvhPW4T4AhQZJFbiYW5F3oX8u7XuAfrSnEUMpBNboXbV9SunZttS76gYG7yqVB2aNqABN",
  "key14": "3ywkWFcMyycKzQe4Gx3BfVJmDo1FoeVqbe9xERm1DEnXU43fBa11BpJbJ3o63x42UPRCNVYS6UhAuzf55RDJWmUE",
  "key15": "3RkeLUXM8y3P4HUvydvM5Q9nRzTykohCQxm8z1cxvpqViXPHS3wcyWc1s7muktjZW9pbBc6gseNpyR5bQq7jfEX2",
  "key16": "u5ZkRWCJQFNZ98NuRU1eF7gYqvN9Yi92LNfi1ffCvHZqNetcDbdiDEDk6cAdLN2VV1U4ouEsU3FRRkdB4QtcFwm",
  "key17": "3GdFyirMTpHUU72meCNDGZVLXXmyyGgreUGjGLtbzpqByGVnnznVd877rbLwbJpD21tPemrnri9iu2y9aYfNwA2W",
  "key18": "37bd152N2HdKQAopcmzowwoaDpQpqHHup2EekbgzhoUZ3KvwzWcZoVTvcRFy51DGmiad8oH89iYXrJL92L8DxRPb",
  "key19": "4mMWSGXGkpcBPq4vnoWE17eBPwk6wHGWzrUau86PgQPuCEMue2GYoGoUMuLMEKe63asuGPTreJ3guaWHsbiegNNw",
  "key20": "5QRNo4tLNguygtBEXEuDXHzkY5158muyx315SuhxqGrfDJDx1p2cR7EdueW2UN6nMt3sg6Nv872BPGeccq75TTz9",
  "key21": "62iSU5UrQ9tM9PBiWQjKTHPHT5MT3SfkCEzYSxUbutiFyrpsmjogxPnpJx9bqRdjDHGax1J3A7Kbb7ipqkMhKrv",
  "key22": "5C9gDqiYjmkxdbACgXey9sVqfuh6S2PxMSjzoyXjXo2u9QXzJXs9fGTFvoYLphFTTe6GqkewRgBhuvrbSXKxd8V3",
  "key23": "4TZpJ7kE1cikAML9xcuBKKt1ncHym382npgN5qM8v4cdHsQodWqCiKH5LMnwX8RLJZwmsrdZsEaxaWSpu5ozGpjN",
  "key24": "3iJsH9oHwqB9rmPwmD5LYUSmWhbNqC3B3DjZedD9HUt2VxwXzvQZHDC6GSuucxK3BQ6knbRhN1HhFcZDVv1NivET",
  "key25": "Y8ngs1AVQ36YKs26cA1Mfr4EjDrvHrBTXpQPKzEaoPSqBY8jV7fanSMPocxpF4iBtGEwEsZjSyQgLNxUyJAcWFL",
  "key26": "2vxwFLn6dygfFmPG1F9frBT7c6o8vE9js3kbVgGbNMKNSzTExMonVRruG7MBYMpDBwW6FAm5NTrU92SFVcLGnQp3",
  "key27": "MAhbXiwZDwGcW516da9KRKBVc5NpwBqR9tVZiJWgUCAU38uD2hVAECNFVyQozn1CngqGFnczRZQ4XmS93kC8J3d",
  "key28": "2RzpuaqsNgHjvYLT9Z8avEnR2rPPAZvzBCXXx4xEGW3QV5TqRPCHxkUt1FAqaa36HMYPGwXZKKDSF5TsQmTL4rrg",
  "key29": "5mo68kU9kXpLXtzT7PTH5VnNGGKdHCwZ5Xx5DewNnCvFsh1qZkd4zC8dnpaZxnh4A6rHe1erzzGuw51xnGLFeH1x",
  "key30": "4w84KUWepbNJQctpHuuKDkWoXVTxoSnMfYJ5HsQY9iGGqFFRSQgvFSynXkqecX6RN155QK3D2izG9x5Ktm8GLeHu",
  "key31": "4E4y8LpdwNixJfdUa3cC4GyDgLPwivthH3PKCsAcXSiR6nMehkQuH1TP6zeN3vWVkocffh7rQpD3Ny39AXcvFaqr",
  "key32": "4HFYpULFg3Rmgqeizs1eP7RXna9f1aPoN4Kues62JEuSnnXDUAXRQyraHTaWiUJ7QwQDdEdqxNnmTrAqq4hxVAGK",
  "key33": "j6bS3b1hwaoHr9ouL2enFm2ZTARoWa5SExAH16jbENeF3GgB3XK8tGuhqpRqQ9pPtxzGWL5HKWgAYtVKhd4A4XX",
  "key34": "3berqzKCHQ25hbKB5TwBQ1XdbCGGfmMgzVBE86R6UdqWggYZkiVNeaLWDCVMyUH1RzGPACj2ZNDXNxrKBtu8qWr7",
  "key35": "5pi8RNjBcdLZ4HCEfr8S3xXvZYaHur1mKsg1guSVfDMVytfaNBdXSteAeGt9CrxsyyA6VmeSR9K9ai7HV47AUyz6",
  "key36": "2Siy22WCCpfNmWtuPnFuUwP4YhZuk6qedbaBwqoHnuY8Y3iGVVvvAdKsTN7gGCjQ8geCAxZWZD6PsuQzuoGPLA4T",
  "key37": "4m5wbapaeFCPYqFLRWNSXw7J3B29wbgL2CYaHLTSvVyWv4XNXCimrJBzTiAry6AMkRVQrKaPyosr3w9hARAhrDdn",
  "key38": "aLZ6sMemDpNQQ6CYncCHxQQ51Z7Au5QwwTJy86U8q5vbmhcxv5mRXqxsbopL7Xm2Az7PTXgfxskwno2ZMtmv73c",
  "key39": "4ToBLXLRpYDXRPiWvkAbbZ8opA1tZwwy3qA17T58GVfebM8tkjDp2UmfAAgsGRH1ciLz6FGVYGPjG5ZKbS2mzWsP"
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
