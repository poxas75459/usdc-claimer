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
    "2iwYgKBtr2P6GoQavNW5vYWAdnvYsc8KKhK1jaTmHAwW3pZJxXPZiMLySpUqp1H7xWt8UTuiogPf85A59jsCCJyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iC9ZbQoyMHFDzN28xtWm689KSrb5PwM4MQTmKZTEWw2e6ipTLrJrUQxQhj3gT9doSANY3zcktsBwCr1bLVkq1nG",
  "key1": "3uCAdGC6wTsXJvCevKZVDPbkv1gKXi93FN7TiCkM222oVN8BbcwxttCcNWXqKseVpAnabcMMybP8jL2KHeUzbzcM",
  "key2": "45qhNcAUnaHMXbuMNVyLNjTWT9gBeKNhz8tqafsdrJ2FTX3qE8D9jM5J6jQENgMwoB43aHS8tjBdg7sdjkEG5WhA",
  "key3": "4xN2QQoKRwqvFi641eRAgsQB3rSj5a4ymC4NiRJH78FXkEApGTDge4d64fkG7PW7nwQModBG7gcUfBQDAjfQbFkP",
  "key4": "3NMFdJiuS2TiharLu8KDSWqmaGxFbdbgKyDPWWhQxpSpp7HC6wnLGSbjMQLidcTnitzUoE7TKTMpVnA5vRZwkR7E",
  "key5": "62bgzY6ScfUYSpatyag77H3LjMWBth6pYETrRawTgsttm5X5GN82BcbBoV2fAKwJTcp2ZMBddHjfYxf4nYQ2v3QY",
  "key6": "2o3Z12neyK7JT9AWD8H4bbV5otmdUtDWzZPxKnHSZK77TPBNkUcj6wUp2WEZb9UyP2nhsX1pDhG3THB5VqHDmA8W",
  "key7": "39GvvdsgjVK7RotyR3mBfb14VzNeCzvuBNySroyxGH2zAgiUDmoXpHxz2UJWRBziSjACCv1m18wFC6rjKYdg5kVu",
  "key8": "4PScJnUwqeFh1YLKfS1GDo6Gkm7QKpHZSjrtAZrAfma3X7TxZh9CJAGnyqWYaUeGQjrdcEG8qEBEBmedBmV4s3o1",
  "key9": "48eMaCzak27cm7kybRixR9KYQjeHzKdesTcB9QVsG47YyLLTJxdZfsSy1zBQcE5x9HTsb9xMwFDaVTRrNi3QLh6e",
  "key10": "2ZD1GT2ZjAm5Mc3kD3Nsp48QjjeRyHmvASuNUsXeTTtk6AjVPAHTjJRNSLk6G6LNdzBoTy1hX56ZAdhdMnXiUQsg",
  "key11": "4afGU5ozykXimof67Xu2TJuPe1wU1BTD1bDNE3CmSVbPbQmyCAVMK3d5RLKhZL3FHmwxNwSu3sNdWawgBBfHPBJP",
  "key12": "57wzBHiLVU5EeuXgS1mpedRkjJBNJkvJZknSx31inyZ3VgFzWz1KRYcSj5Yss4RMGkyCrgrGRqN7raWdRmZ83Nq5",
  "key13": "5vkfnSB7FmjfjUy4KVKJBeg93eT6ejen8XpqpW3hn5xcTL7wCMVMBvYu5YGrUUYkMXqgNikoH3Stq1cbuaaVT2Gt",
  "key14": "3sVhFVsKTwJ7bug5Z38jYiWMBCr185F2s2eHXNUybfjSjw3jpg8WyMQCjEDnoMgLDVEWvWkctKGT3HLmxJMSHiJR",
  "key15": "4SXVQ9dCB8nwmgbYv4pqE6tyjqofhm1TbpJ2oCNfVWHtsbcYXDSn7YQ3ftVsLvuAVXPF4prQ3xyR5xVvDC2ooTX",
  "key16": "4hdYEGR9M7tEsGW6YtK7YuPy1Ph1Ede1Ba7d35fgsUjaEGHeTD5xNdjuMRaAEpPgxjnm1FseweBQHX3GW584nWec",
  "key17": "wHY4CMkXFcHdCBYbkQnF74qrjjPf5Mnso3ZU1FkrP9V5bCC5k8jMG3bEGW53GsGFMakqgAaVmXS3oe5Ay8G2fbS",
  "key18": "5TgGADukVPB2bVSSTbbUUuAqXaLGTeU2855fKTJ1RwptzYZYHFQEix9mKXsXgDwFqbQSobyBujrf68daXDXzhMZk",
  "key19": "5nX1AatXTxAxtHKJvbLsTJNYujswtYeU5zeybuh5dnyacVXWBqxfLYYM1GBEB8Hy11umavYktWB3FsHxQNt5A5i6",
  "key20": "3fgivRPWFtS15hqYbBMf2PJvrk35hvUqRnkGBcj8N7RowNehFxc2rMzQTTFh5c8pZyS3t14CDwmPgCQShA9Jmp5R",
  "key21": "iMRNytfgYZQh1c51EBAQzrzfaWjTLuGoMt4tfE77tLnQa7pf11TgNdfqRXNDpKKMVLyZ5sHEUQ4WUd4kCLmSQJ4",
  "key22": "5wht2m62Cct8fjexiLms295ChRGZ88yRaE8s8aWSnpNoXhmARMCPyAPyomUnyNnfYEvVNEXpmz67WaFokSEjfgye",
  "key23": "5irAbddmtWRfWBNspqE7YADDkBrh2q39vavwETveGCwi1ZEvXrtzBH9iEEs6Rp9XEJ5i28utLgveMENwdWNkFGdc",
  "key24": "7PXzSkjufwNddcCoYvsGJKRNxqA8EpDLBNZrhVF6cAsbx7bmECJvwp6D4QKSygDassqudfLYJzYRtrQwfU3dWqE",
  "key25": "yA5rau7eoQj17pRpbcHjTiMjnuggFihMN8EB7JLf7vTeMmJY9AAZZecMxXmQTQrRfsPLig7CY4ocCFLNLksKCc3",
  "key26": "59fxD1eUtDsA6nAD5t7rDv1nuTdL2QJFEeE9v6wVby4REXJXYgUip3gxgzsxboFwqAgte4YRa8RqHTZoQbz5em3w",
  "key27": "36ZG7HZrKoQ39MLVqPwMBxSfLyKsjKMwWfgVDQgzkrNYQFUp6DmXoivLSnoy8tB67PKtTVdUc5ua2TL9ypx63T8v",
  "key28": "4w4pjeEfpFbderRw7FnziEq1n4vfZqaPNs2LSHeHbcLyPhMfcXQ7BGX7Mcwb9seTa59j31bf1jbnrB9QqEU79ppK",
  "key29": "2Skuh3p4nGjfXLjx836xVZ9DwGsP15srbbEfoDrtdgnHTE3oaejmDUpWHTysKRnza8tMKaT9yZDG9btntdSefGbA",
  "key30": "2Gdxaun8YVFy82vnifNFxhu65VLhhVZGD2LWvqkDdNT8UwndESBFs8RigXYVUy47juTqcHq95PSHhh8v9Gaef21x",
  "key31": "2CzJwbs82C6JvumV8yAEcaGZbRNbE22X7q7UspNfH7M8xSEsaaw3peDENzhrHYywTe1kEoTdDHwwRMUEyLW1cMu5",
  "key32": "2hpKqvaEt9BTMPSDqbxAK973Nf78PzN7d41jXWnJwCaRqDsFa9hk8ToV6hX7QCjdiqaHCotJDxGpwoJkFHHahxKv",
  "key33": "Fm19iXu3bcd9VNXSAvnwPHNbN9RxwNutkMHdJy6od6Q8WpM6Hf7duqA4SbPKNwdryBNCoEG6RQBjzFzogYMVVCc",
  "key34": "3NCudiQS9y5gPAcmGQ4WSc4Lv3aMUeKxhWKoNN4MmkXhLX7vt3feWMKtUJioF4h3khwEWV5raAQQKSzdLMKuZJvm"
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
