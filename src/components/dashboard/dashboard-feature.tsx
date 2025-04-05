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
    "q9cpgG2dNixuTmVhMWST25thrvmDk6xXxeSoWjASuzZdALaNxyKbgYjAWECvVKCwV7edJmTi3gwQJ6tyJRbos7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unD59tQzzogneiRCzY2EfDc3bksFcnDGycj56qxnqPC6Rbze7dWXoKWUR94XGA2B5u5KB1XRghJ92iHqsNKpAGc",
  "key1": "NPgvG3HZqjTHrcThkhhpXDsrKdy5vNUpRf75M8LffKXHQByjxnb1jn5MfKiAi4YYbMrPZtcgfezCwEtrkGNydpS",
  "key2": "4f6j5hBsZ7JgqWQFuGMqZE3e83hXAa9rBra2QYjnYwMr2uLmrnEap3e8aAjM7m5fPEc2ieEVWccht5pbNJzcfWds",
  "key3": "5dtwYHtTekfyPHYCsUMHfsSTgcq9gr1iELr3gzN1TaGhz29kJoey8t8Rx2V2cJHwDkGerH7YcQoxA9e4LmAyHFu1",
  "key4": "k6Cn44genQ9gtMqVgDzq6jnbm1ypy88ujYNFrLHvU3AbdscP3ngMejiFG8PLebAHPx6rCY9zQr5Mt7TkHfNjas3",
  "key5": "3xqA5pLpUqWRVtBLawixSoAptwTXL6Zr7hnNni8idLyZkE1pz1JVxu5JhfmvGmdDaGTR2djcunTJzDXkAPVYjrj7",
  "key6": "21wacmeoDGM1MsxR6YoSAdvHENrZ2LS2huerCMXvb8zvFiDbEKBSoKbrSua2x5p2ZGSYdmZDziL9ATfxu8cw5pc4",
  "key7": "5L5Pw2gDWg8CMQSpbRpZ3Y5ToAqRMxZNSFRwZQbxG6JcASoNfRaAqQXcYSU8V2TeTYu8HWaCNSpRJKYQvbSXjkVc",
  "key8": "4vP5wWTdacLPAZz7sKtvkh6LpwFoftTEpWqswgerjtG7jiSCmC9NFce57GbFon9xkUR3mVQjsZAEoVD8Edbvuryq",
  "key9": "SU1UALJgxwGq1eYZ6wixkkUVteHp1fJGmwoFMWYC7G3pPdQTkhUrNxYwddLxHWuBctu2d4saMts8PMVbLq7CGJk",
  "key10": "5sTfzUFh7NFu932re2De1oNzoLGbixoPptnYedhjwHV5LKo33Hv3DSa4sJ7NsSwUfHf6pBZYbatuSRoEJA4rdvRF",
  "key11": "3R368L8cqNQPn2mKxmF9n3P8r5TtUAMVKBqDbTu43khDWxEoNErPuZKKa3Ekz3dx3mv5yZnpD38X6CaD6UG5LqjU",
  "key12": "5nqKiur9X2WGa8HrUhniFesoeiaoZJi6UGfKZjWowi4mUJJsL4XtEgqX6ij6KojbKKVpP2myeyT5dwizh3R58imr",
  "key13": "4eM2nZ752xvC18a2cY1TPDMX3ybT9Uh795A1yq2Hjo118V7HDpGzBcNAsL8sTT8QcDaK8og8BBcm2eN3SkzV5wxu",
  "key14": "4EKf6UjgmtXcCuAJVXroHRGxxDfhKCmSBa93eQoS5zTXHvfBHtNkRCoeB3NceasVrufMaTdexRfpcc5RFDGq2Jd9",
  "key15": "4MaJYJpENTCjfyXjDiqUP8zMJY8TqeiFowrtx1CqS6N3kCwHHv1VWZ2WdRB9K3ky9kxq6LE5G9vdDtfP1GTNXuzh",
  "key16": "twTWc2EEUBXkha2GNRmqbcSD1np66aZSRnn2S99ZEmJS1R7hhHKjW8kAoLYobdHGVHT6odNB1Xe9pn1Nk1o8uJF",
  "key17": "9kBWCEYt4naP1Ltra5giXCmswFuaUy8epgi1bKYJ5LWb8cKMCiGLivRNraGyQRo4EdGvwSJSPvJCuSj4oMNby2C",
  "key18": "gZ1M3zFGwDvP9BkijNFDGaQu368Rdsdj8JLcsWMqAmT2rz89KfBh6HuDJGYzfV3fmhSYe14uxFL3iviQffZzYCp",
  "key19": "dG4ghQ18wwKQy6SSG39shT4RwMzvytwjKQLtWuqUMzArhtvj4nKHAxCh7V3XDxnDrsLG8z7nRimv8ihhSNMG2dU",
  "key20": "UPPkj8YWi7zku98PMydpn2xmGGZsXVMTwDfaMYmsF7vCMQKw319Dftrd53H3yhJ2fttx3kZfX7NvL7dEZbzESJt",
  "key21": "3NakDkPdRfyxs7YgNmFR3EUUXzUEag9QzUW97uWKiUBJ7kyxKTxitaucsEzqoQNrqZxLm9o844tokff5n7bU2p4",
  "key22": "5YpyThJknfTagpnUqSb1E7FSegm6mD3TEi54JFTssSbpWtcvgrYSN3q1h9ch7gPxAbaqMrmakr2ZYvU2znVGrGKh",
  "key23": "2x3b99hpvxRKHPBd9h9rAxoQkyPHZujzXfXGnKcCHR25annfP39TZxdQRQD8GXFGe2BLTC7HxnWvVFWNjEdoRiWf",
  "key24": "dCxPJYUMmgvEQaHJtoTgdzVC597J29LQuDzRMYcNzaYy8K2bybCiSsX6RuFf5NA4cGKQ27NUfYKtTzb9E4RsBfd",
  "key25": "2LxMDK2uSbu3TVeDhy9VnBVMjugdzkRGSzrPhk3Te8QKhNiFZPwJCzefMEKaynJKRd7USweTpwYfDUf3ELFmQdeP",
  "key26": "5KDVSB1jEzC4UhG5bcYShhrn7i7nevghRuCgkr8mxyrmP5hcwL2oRhJHkd2E1iLnHuD41XFPPaPMRRFRcNLLLRrU",
  "key27": "2EHQt1DT2EjfSRt5Kn2fBbiya8vhSFPmzAxFC6RWSUQtiU8PCp7rp2Hhe8fndqFuroyEgs57676VTH1c5bk3XuS6",
  "key28": "3BYSBA8EM7uHXXaM4rxSZJt8Y6cvCsnck3F4VCwew2q5rDJ3iW6bNK4c3KxYmRq3pahqVQbrAYsfj1HWmD7uy76K",
  "key29": "5YnupMu3qnmUnrQd5kuLXMAUE421uPk3ZnoCtwP77fQ24vQSUD4ppauzefEKwaj65Qfh4o7oDz2jNLHJdhD6Hbyn",
  "key30": "4pWybwEosPkm9YbRonKUUTZBU181uVwCE3EFcRS6GWZPXh449XSh4o4i9eudbSfRwdMDw4pWSTWC3VU4KspWz4F6",
  "key31": "2iQzaG7TMfehbhHcby3i1XZNJknEQ5MK8uH974ZKam95NB31waLmiZFiMP38FqDCWeFmQfj1pqjx63XN2Ekjya7L",
  "key32": "2NNibiAA6t7TpqjAxZXBa8ZJmqQecUtsABPEZpqaUmWgfw2zVeW3m19JeHGfZyM8sS31VZy2wHD2dCaU1wkSXV49",
  "key33": "4wWxmTdc6uWkDzU1W1X2S9sFZjsQoifQhV1B5LBCEFeYzG7wrHSBeTaahDGPr5AE72UR8qmLXYiuhQc1TtDbDx82",
  "key34": "3Ag9DDFKKXHwYKq6A8xS3wEvxqacRXUFewGHvHUbmAJt2DWNTwmZ8oA2xMwveLipUBQiBrxE13XDKvnM7hVsaQ99",
  "key35": "3HYp1oARubdcGZZjfeiobRKqyCWc92ewUmgk2SfJL9ahXB7My98i4S6fJCiERmF32Vtcds1R9TBbTr3GEVty7Nvo"
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
