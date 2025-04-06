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
    "4eVRrdKaWediYXtJSoyUqPCc3UVZLeTwsSSeAuUrTetBjvVrUqz8GenYjXjkhpDiXiuBkdM1hkL9L6bLFwSVu1pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31BtRcdh117keuAgdx6567b85d7V6ycGVZiZcXPXKEyhcMahHi2JrfvqvH5iWT7pR4FeNMN2x93YFBpgSzHcKpGy",
  "key1": "2UTGnQBRTf2X4uoVTUv5uB5AD5oxVbwZyqZVkM9sivAV6GPvcjCfXPyCTGavQkWZcn66HccTiwcZDtbK4XZaNhoo",
  "key2": "3doSsP3rRiUhZ6fvfFiySa9hpaVDbyngP4yjZV3t5zkBmiBZYiZ7P9SvEszbXTZGHXtWAueFWm3KXdH3SD6R3ANV",
  "key3": "4QdFaUV11X3hX79ZG3nvgdhL8sr2E4TK2P2K4vmpRWtF1qYz83uiR97bhvHoBLMXazwvWsAzc236VULtrpA2144c",
  "key4": "4HaNovgYHKFjss2rh4NmY3YSHcC4mV5yRBm57EKXBsZUfgWriU61w9uJPYkVkqfdQubDip9RsVsRoQxTkscYjN2o",
  "key5": "4jN64eGiVQ7s6ejMu7jjz6ja5GE1EUsTYKBakStJXk6YVddSdHJcPwJyqDSnYHKQUozXhoAk6qU8Qyde8b6oZZVF",
  "key6": "8ZeiBfzcyGoDs27D9wgN5CxZgYiXYLhYKPSGyH5XXNrzXfBv9yze8cUJ9DLUVaWn1rfsGQVCgYS6dxs2ffhw9bq",
  "key7": "4LTY7KoztC76wa8goMDDZQ4C53rGEYzBPuFzJjXjTGE9J7gd4qG2mWQ2ZtiSfC9TenRpzE2XWT9HQhMdYRes6edB",
  "key8": "4S16wBLPkh46yWyEC4hhKtdixYZiQGt5tUTu1FV5PbSbR3RqZNezk32XHA3o8H2QmFFMxtHMhCJ6JihRQaViALD5",
  "key9": "61n4QRCLqm9CAUdvwEqAg4vC2ZzcEhzHqHeShNor2dd3s7aXs7eapbPWcxFf8mx2vfwTAuBBWkMpf3m9Sv1vKAaS",
  "key10": "2hYHuATAnxJqB3WTsfuWGnLCUcBj9WY3zzxy4rRuL9oLkBjKZRP5uBvpxkxwiebf2KKYtgUvhPZ4GpTEayGPxHje",
  "key11": "4UcLnSBWnpn8fBi3pCrfoFoc7x5cv2AH8YzCcoAkwWfZ9Lb2mJrK7stx9xnRr7v7sjie34w5jvvMzTBcuEYRTkkv",
  "key12": "3Wev8ooqPyuycQMTZm1oX3AHyaz8a6Xdbq8Q1kZfmV6w5FF3ebwdJ6TfHZikt9jtypU5f7JCf5ikP3XWh8AZbvgn",
  "key13": "srDGcSPy2oeXLcprajJrgyQdrMzppNCYF57QwgnG37LntxqsreS5JAV4oQ1GWEcWbELFqDokdod5JzPNinnvjEu",
  "key14": "5Baw6LNBvJwgGeEoPdsx2Sy2njtHT7rJuYMDBow1TU8YSxLTaoDqGuGkYZfXd3yA6Qrzs63rRTG9d1eT4ACuig3Q",
  "key15": "38BjUbrek4PEBLFhJmPZxNJunGHNU2yTq37f6wgebSCBpbbKtjyGbcYQwT7nqQaWUYw7kzEHsPEcER1hyT64qgja",
  "key16": "2XZzjujH1D5kjJ5MbH4PRG73on4sePzZgn8bXxmJBaNiWS7Tjdj45MgL6EyGheBW8C8jTyCEbgK4dP75UxDc1eSK",
  "key17": "2yvLjmeYu1M2cGpboKe4cYtRhggMotAGWJWQnJnx3S7AZ4AbdjCTjxpaRUhbqKP6cNsMu9icucQMx7DaVCGGMJyh",
  "key18": "2sctCA9A9g7gdkLSVz8ZGqDrXoVwmBZoefqwDvF73VwPtd2htGdMrrEmEM1sTQ3KKvDZukLJwU2LxPxhFH1jmsd5",
  "key19": "4vshb9LrwkYtuc8iakYhMnTMYFox5i5xZ26xETtCYiZch6CzjepX2rpmRUsHWw3j8zvq3aw6xMTwDzu8sf4yxyUA",
  "key20": "3PsSaqYNSRd7MKRjxqUAsiXMvDjRegjwMmBNghAofAvXpEZkQKgG7VL9YjWLWcYRfANY38MEJ8H6AYBywuWrj47B",
  "key21": "5zCHn9P9MuiqTQ2xFuTr8vYB7PJD8nvni6hT8JkFU3wBWugzEuFNQHn2fYUKatojCQZLKdPLFd5o5fAX48MqzZ2L",
  "key22": "3m5ASkMRK84ArJmK2XNyj8pwhNhrXsyMjdmBZXszhVrs5xDKaXzgxMaMdNVtF1RZikfX12WKRUhzm38f1brxJqRs",
  "key23": "3WUft6CMxWFN3eQ7g2E9dFjB1j4vseGt8NJEA3pNfx8qF6pcasU1PDhRMTuB7cvDxbESpCkkGu59VbrDQsD7e9dT",
  "key24": "eN487vxwPyBsdLkPrkZEkkrzuE2ejgCydZh83Sxf6ZcutY8Bg4pcqyL4EgAfapSHXjN4YnVDjimocvTskKsv5rP",
  "key25": "34uE3iLCqyLzKBmxouaCYGZMTNN1kuYa32x34E385gLhoS2KBGgBmvrRDhSp7UBMdPbbhR3Ekkaww8RG4ozctM1q",
  "key26": "58AAVEbdcSQDK9Vq5TKLLhMTjm3mPs6Eyro65Xxoy5PnpUpEwVwmoKiz13Y2CrDMW7XbifoRbpFK6c134nZoiFby",
  "key27": "51BFyaizxjEsu8e44DXRmrdjRSXvdXh3b8R3JuHcmUqRnjpozD5ELMqLKhtL4cEc13cTGJWz4dmfujRXUDm2YsdG",
  "key28": "5XPzzt1x7t2kYmcLqYLvxYwx8LqCTTRBLHo3P8rEsrgE6oMHPnoDTpbox3kDqmvtQYr45W5C4XULDCHmcKv17jBc",
  "key29": "47B7kiUEGJgbCjKTghjQfWm4TWG3Nq9yKnAPyjaTGFzK3qr2s2NLWiBReUzHf6CgKDJnrgLrBvFbiJnnwGJJv7gb",
  "key30": "3DZQBvN4Eacyqygy5wHX8GvnbEU9D4DcHDaCUxJqiWXH2mNRKe77rXZoGbQCbf8r2pns5KsvDQ4rpRfM36i2dD3p",
  "key31": "5JDyU6cXpgNrhgyYe6LMhxzPpw3hwxrBpUVhDvWJpZtJ28NZUP5Sa3cerhWkcCZRSCYkKZQHNgAiSVwZeKPW5nYY",
  "key32": "FZbb1BqkmnGfxeTm2g61hZmbcghPp5jvxC3abeDA6fmg3Fa539J2WPL4QXpA74JEFaj3Ek2p98JVcwaNKarxwz8",
  "key33": "DnC2q22ojLrN8uDHrfpNeLgLiHcKNJD49FpMBcJefA3WAz7HFnu6dFFi2n8BvAFd46zT7JeYdaWeJ3oqVeLkGaX"
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
