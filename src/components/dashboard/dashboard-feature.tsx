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
    "2z7cb52edUtJfpLsgoEqn2AwihU45cbuLr9KX57SGAuqH6o7eoJqMF2kSFnbLr3naQoUieQrfjdT1wnxqHk7CXLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgbbUShUHvJLyQYhDMK46TXDMaXqLj1QoPn8gpKC8YEa5GaYq8125R29hzxGhyz9iYt27xTBWKGao8oeQK76Atf",
  "key1": "foPpkkRJcQhvNi494crnyHnWYcnaYP9TvTrBHBzZDUPo6CbawrUNoRbvRZaviycbnvuekrmFs1UD7UKtAU5XQGx",
  "key2": "2SUu5pv7Gif3gLjJkMFYUx55b2zNx2mKaRSB2s4sAgKAK9iiQ367rwhCeEQEr5VqtyWnjxmJrVP3ZNiKFFnNHZqa",
  "key3": "6U6tJoZ7Bdj3Ce5dpZFNvXmoSoBH6AsSsgLphVBALbKUAdEfo7h1afya7veDePFEsongWCgVUCfJkWRVoUfSAuy",
  "key4": "2vxkMtqJSzVQE6t2oXi6c1uM9QnN4TCDU6JWGybeyoeZLtMVDoSLqMkt2TZymw9NVEMKyGkE2jm9uePEw957bhsm",
  "key5": "4HKxsvS7psYrVodzTnE8a8fLDfr4jTJXfQTiLDofx5nvBoJAf2QMemK6Fvp3B4iKop5nNQhavGkiR5Acy4anz8c4",
  "key6": "2MrrCfUixZJktpbSDgQzbxLbkTCtpaGR3VGpuo3Yr8zudt3WagUxgNzwzGLdXFGMk44tG2L7cLMBXGsgwmjngVNs",
  "key7": "3EQrnRG8YDNr8Wg552rytgukNj9HCpA9v5MNxKUUHLUmu8q8x8NCmThjim8Eax7Ho63ZYt6UM2CxxtAiE5uzZpPy",
  "key8": "3SxrS3Ln4aqowFt3Hc8ytrYrWAS4FkJAyCveQBn6xzLR385akCW7kQWxLvzfoGc6eoz9XcwPvzj11wY53essC1wt",
  "key9": "33VUQJGbHdGp8mZVhRszyiip3n4CeSXxL8hAyZLahY511fcnudxyD5McQqvLqSKByuxjftcykgKHsuMbJhcm5qPy",
  "key10": "3MbWD4YE8oSMJhck2QmM3kGtq14H9ibnSK8W3vMJZqqoukxSHwFjWknRT5coxFXqizxax2z7fLRXByHeZgR7dGzW",
  "key11": "2jvvTNri8Bk4QQCsfNig1htTqTCnbPMQRt2VwgyyPW5nzVXaaEm3z1SVKj2GvWWeBrzCH6HTgLxXwGXGUdysyB9y",
  "key12": "SXMay9XscQSkSeHjYUx8EGVr1t5vw2iC6Lj27yGzKKhCCK8p9mWbZDoquXfYfSe4SJLLgv5YfNZ4Z9mY1eVn26Z",
  "key13": "5ShhkDX9UFvXZeyJ6NSVfhAaKwUwpmuh1sKgZKPDYujMM5C7WnyeJf1TEePEY1exJUMg8tbAkWh8hEpA3dWZfMtv",
  "key14": "5gtqeKaf3TXgfVA9pJzed4UYkRfp7HQKvM2SprtSm9Km6yfD6WVTQrbY7KKqt5dH3Fm3CxaLBqi7wpZgJ9X5G16u",
  "key15": "3Xv3KGfof1dJn6tyENpMBhHoyvtiCuUJDhbxryN4bnxeyAmpM6iV1sVmmqSxTXcTqjpJgRuskvuSoZb44CJdxeuW",
  "key16": "4NWupNC3dHXbcbjkUbahEzjVZjucV3yvaFE4wnqdTM2VJXNSFg4fnPfuEi5fybyujnJpLUn4SwRqtf7CPX3Akhtq",
  "key17": "3oqmTR6vNcHeKobtKyKBihLDUQTx8fuLDsQGaRuHjQX7ZkW6pqM4TTsDsiePhRMuLoifQz5mDWtZdk98n1i48Dr",
  "key18": "G9wd87BXdwhF6FmFEvcp35vm6GUfS6UneMFvYAf69QxcDvfay1KgCccQHUsTKQKsBudPu2v4Kqf2hX9X1GZgTNQ",
  "key19": "5utijwoY5MXUbd4Dh128EtQB9gEEWAsDPgRQp2F6FxqsUcA5bgkNrJa2eY5mUXq4KhUt4C1njgTA3sW3aJFN9L2C",
  "key20": "2T8pzbgksXSRVGGgU3nBfk4AsfTmgzPA6aLUg5YGqwfoPgkd52vAkmpTPvHzTuAaNesRxHHdMAbYTBKptzD8Rjd",
  "key21": "66NQMCAj9ayRBMarSpNVvaFosM9CxcoxMxmwiMZg3wnrUQfRo1K9fc7JGzCWGCwcP91Gy3J2Y6vycaZwCEKx4vd",
  "key22": "AwYeQ5qcteiYTfSpRY3fkpPYx3J87QDW219G2njfPWyK7P6WhToVTm51wT5uVJhnBjHDmTtFDxMCLjzgHNWy8hH",
  "key23": "PF2Kb85FEnyek5JqFbz5EyqYaay793nxtbjM8wMYkLc5GYnjeiGDVwHJBgd5k2wdNHQ6xoHN3zaUPZ6ayTHFXYh",
  "key24": "4rjUbCdjxtY8uhH6Rc1uFCy2iRpHAnjz2KjdRaexXkGmAMAL5oRqbr71VNZdmzWngshPxcx5kQdG9evrJhde9rF",
  "key25": "62fneb5xvSmCNXYKpgCCmtcWA3yrLhE5eh6vLgQdKaDKvq2AgKG5UtxnEsYacF6pHFkckQWuZR39pZ4jeK8MJ7sQ",
  "key26": "3D84s6Hugrja4L9GSoYs6KBCotwQcvVENwqFDhHNjURPk5jKzCv8kQKn2qi84BEhLN4f9Xt4fMT9PcTALzmucKZo",
  "key27": "VM9yFRnz11WJKdZHmkmeMj4e25BiYw2uVQjjpQ2HVK1ULmMnvfM2GhXfGmBGqUNM6yuyDmXkAav3xG3pbWt5PXe",
  "key28": "ut8SG8BokzSfCF5uNd5Fzbvok2BGxVhkSAQ1RsGpLipuAXgfaXfexhBwxp1yWQ3XcZp9aLHDHkH3Mv84JZjtiYZ",
  "key29": "4FvTPwiTLwUw2X7j94SGPbMXsW9zmXn3fRt21DVRh1hh1AqCmzJU4Gnz6q5f7qRdsRD6UjvzuhG1yG7Csjz9rATf",
  "key30": "3Cv58qkBKoLQfKrW2Zg9mrsDumQR1tNyediZLNDQ23Bc5dHXM5Wtxw8WSjtQ1kGBpNKY1gwkv9Rai7j9GFfw5biN",
  "key31": "3MM1YKSVtPCtmzbzeJtaSzfGQ5fT8DRYRrDqnGxWpMp26u41p8iNP8PT9FpBRx2PN7wDTas2FC4Vc2EDoMFZtLPP",
  "key32": "2sYEMPk115rGC7E8rtz8ibV6zaP1cY3VzgCVfrhAW2TsXnxVwGNYMUkYZ4JPXJnFeP2T8Tn516v6YXDUyi7yArz8",
  "key33": "5BeCfWASeNbSA7BckG4WKDfw8RiMHWGavoU9JFwTJX1TpHriGqd2vwDA3EwFpEQiRBTBPLtTzXUJzbu8q3MruL2h"
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
