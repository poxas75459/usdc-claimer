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
    "28GvMqhuHAiNBveLfQd4d1hKRbxw778J4S8CBL8tQpvUp3STNBhzfMocjp54bn2Q8VMS1W8ZLc3TaAoVrkhC9bLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J3kCq2qtHySdbeRgnxEAef4BQxDA6DKCxr2qgHynf4zp2J1RchwMmLmVgxKFqd1N7aq26PC5MWiTrsHs9xd8rL",
  "key1": "4aqSo1WqYmHNa2t4gmAicrwEaRaDSzicM1YJUf4GPmkTZ9wGXvCyQEfx3NmwesvLxpnaDwkDyaJy3WK7JSZG72Ch",
  "key2": "zfUAcoEQs4NznKji9fCByv55yUM36BhJ2hmyuRGAmujmcogeqM9yxQJ5Cn1KDvqrtgfUDYYTXknrKgRRp6SYxNv",
  "key3": "2UFS4TEYpbnXJGPxVe4PLj6xohNQWcoU9XsvEicWjFCwZsj9mukjHVACj4ETPz6MGr77r4bYp6vb2J2WegtBqd1S",
  "key4": "nVAhayX3HCsKBJRjKzcjZmSrTGy9dXwmssxDU2SD5Z8fdnCefw25f5hyyj8jHySiW1aCXNcSxi8RhwS6eTpURYA",
  "key5": "3VnPfVokktzg7UtwVPQv5rvPHN6vEYdYewxypjjtFv43BebYhkDYBzEqS3K6sqDwE67XQ3db2izTkd9vLaCaHnYY",
  "key6": "5xuERscYKuqdRYWFHaC2qguuYQxRCyxjxTdYYMKKL12hYGP5ah4CdCQ2qiUmFRzAPr8KjdNuW7x9yaWowehuQ1Uf",
  "key7": "4CzAdx9QyqbrgxWKiiwBgrH34UCQ6VJXMoUcdjoSPUABewkZV4aB49STVWPEPactnVHHnPyR2awwaah57WBAtemG",
  "key8": "4xvGCK5oGBMQRufz4DJSbKcLHERBZcMmsoZFMsEjXf2k6UzWRwLutNhPU5FoLZ3LUiXMT4KkACNnaGs3jpxge9fL",
  "key9": "3DuPPU4py8o81sqNGQzZmZVhoDNyqcnpa2cB6FcFjiVtX4sw3zzmthpztV79v5tCG3wYeRjLNfVkSh8zC6SYmXQF",
  "key10": "5qnLdyzoXXXyZgHnZ8S51BcWtP6mZCS9L8sNPLx1KZvYsLBkDZnfRWK3rEJwKBNfLu71jC8gev5Qfp8pRXGFi3di",
  "key11": "J1TTCTjsmfCvfDMrCTiSv3obgDqUcGomDEYtvn6qWgUJW1jwip33YAfzrqpNXCLJDE1tLhFHDQyiPketk1cFcyB",
  "key12": "5MQfjDmpXFb5i33tWAKq64p8FZgqi3UbgeigxYUVAATf7aAkQaHJfuHSnUGWer3sbNdPDgRtyCfQr4gGYTAt2BQG",
  "key13": "4wd8cVVmD7s26HJbtfQFLQDVCcfuDUxcbTtkd8ASGU8etWUWY8pkJFu2JxDzJME335AQRNS2TfdhqXx1ETiz6xHT",
  "key14": "5CGUNX5xikdCjimNiTaugqKAwiHVq39V85jewmvqx35uFPwaAc5Z5Uyx9ocy4czasxCsr6JueZEAeXJuXdbtFmq",
  "key15": "kgzpztzBW9rXQH3Y7inkf5s1AXKDjZ4vNH3m8PeVN7D9hxhcYLy7iLrj7bZRAL3CeiSGutwVf4eRdWjN2qRgYAK",
  "key16": "3KfzNProt8mgyumg7bf9MHUsCphiqvxR5kwpGvRzJWgvhoyvpjPhJrguQdcxJHSJKmnNEF6C9aPUsfCQmrvatSDj",
  "key17": "4mR9FfRbwoXe8y3NcxNZLZXg9H2TAv84sGV8vLWnhTXMKVQygmbYf9zJSKGxmB1o9scT2KkGXoMB2fEU9TdjW1Rs",
  "key18": "2q48VgXJV5xm9tAmXoQ3nwzSF8UpXyXtY4nWnjGfzMzUHUFudpoDFWrt1zpyt3yMBvRyXXEMonYqbcfHyWhoHBZa",
  "key19": "21Uc4tTS9Tt8AkFHu3Bk4WkGACTTy7sVcw4sM9is1nDv9dKGqYvG7jnUUsoArYB8TSr9tgr12GMAzVq3g5cm22up",
  "key20": "64MYaed7VgB7jsmtyuYUYd93FhsUfPE9abiTY8eau8Zqw6r5nbQmGEKH2abpPVs1x5SVLiCCJFF6J4v6Fz6FVnvT",
  "key21": "47yksQgxxCuFD2EoR39vsHUpHV1QAy8e6ZiegSmdD5rWTQk22XdRqgqyEBEKFYJXbAiSFjrr5xV4Z33RXNBhWc5t",
  "key22": "2nUsdYc2QyeTFhdv6cvN6Cjhaq2ZD5TAAyWhwfpz7xCtRgpCCUbkFBAoGgLQT4Rz7g1FWvuKkYKQBi6pjJaZf4sb",
  "key23": "3Gp93Pz1XEQDFMMr9oWi5fmKwRJf2GLyTbXuHQqxsG2Yi3x5zvTUcyXQAUL6A5jLAkHuLgfMcbLEqtKpvFvou2n2",
  "key24": "4DciN9RhgAkkfSxQVLoYKKXjhP913N7PuPYW7E61tt2vgJwkFKbexrqYDjwb2FXp2ec8oeLuhSNtYMKztz2wVe4b",
  "key25": "4TwuQuFPpHwWDscZsrTjeYmB2JuUKBeM4bP7oXob3ybcAhZKazioy7rM5rBuCFouxUgTzPSeaMiZtnyhSDnH9Xwp",
  "key26": "61MpqaCbqJMESz9qP6dsgVTJ8deEorsRyyvN45fWvnuPMT96piqgTPttguhH55H8dNJE6zd5BCu2mXYe899ocHSM",
  "key27": "3Z7LXoftBrZCC4E9Grgxug4bCJmXnwFtiBkJtZSQrsL1scN9kV2qEUj7vaZvtiF7crgxRcBZPTL32cxZTkhbMTPq",
  "key28": "3e3STLWpxAifSPd2VwUEHskwbqqSYzeRSiFkVBKGrkg4yCMrkyvQJDAbapTMigBiDErsYqNMY5Y4fMT3VpFSu7sW",
  "key29": "5Gd9hLWE4aVAo2x4hu4dv8UtzCLE7kXLDHVQf9abgfwLctn43o2zY2E5FgfiAezBQxsiXrPZuo1E4dL7ULgUoD8o",
  "key30": "4oRLaJDvNEVaSzH55uxwe1Pv56K2kQqeYZRTXTtc6D2fpXN2ESEb3ZYKuNNAg88jFJrW6CbqYCbd6FL4pUyajPih",
  "key31": "2xCL5kXuJNg6CWaADkv3ZFLgZiG8fXbE4DH8ChaTVTvLEhE69dR235wBAXBd8JEF8ioQejdt2YNuvXYrVP3fNZEq",
  "key32": "4hxK6vFVo6godYUmU79urQf8xam7Hb3Y62LJcnnG8GQLdf7UqKxeeex6MHJmG2QzigQSwEYT7pubS8JGbbbx55ca",
  "key33": "4fLhtDq4naH8hpVRqhbwViQ3x4ohhCRTFTs8WgYGyPxPHyUQHpzqz7WxVcyyk5gutTMAZy8yJiihprU56fwcqeDL",
  "key34": "4kXFR8vyu5DHbaptparzUeTPbWbVtygqKAffMwTqQHRZu5BVTcGEbPh5amwARd9vq9w7XpH1Z1MqN9qEVgUpparf",
  "key35": "3iKR3VnwpXeSWm2rdvfrd4DjBRR1m3C2rsVoYuPwGXnjrM7F3wxzqcoNovyjATvvEsFVDGUd7hgJkfvpr745aegD",
  "key36": "5TQpDwm8tSefho3w4mwtKVCSY68qhv666sxJAFaD7vaWqrmrdwwnzwPZ4UcTyBPw2cn3Ggys44c2MHdMqWjtzACx",
  "key37": "3y5F9F3WhHckufX12cicQdyy66rNVyTrB3jGU69tmgR2L4Z3JjxAohGnNFxwbPxEFFpmcQbi2uyy7md5A4BiAdEm"
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
