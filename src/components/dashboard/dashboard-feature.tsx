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
    "67qR6AgHBR8FecKVn1UVzjNHGF6wnousEUb3VpDiZyshK6YfTkHHJivHoJWHkse6WErT6J6ZKoNngpD76V1XSexJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SPNZDiiexP6dWbi2foC8TEB6eSgxLRTSxTJBmJwVTS4rwti5PR3oDbmThXoGf83rRiwkV9rFTsZwsL16xY8vR4b",
  "key1": "4hL1eMLTus7E6piXy5mrUeMP3i5V2EgbdHdvqA7kVwBA2114PEpDJrf4pcPaUWbhEMAJm5z1sBiVGDprUri4uLn9",
  "key2": "3eJc73rAmZL1ipAxvrHcpK6hipQ2ZHPmBAJjSmmFZGuEua9GPzQ1Yaa8EkPXbH18XMGwjx9pckrzijCGUNA8FrjN",
  "key3": "5n3yFrh4XS6AHWmEZ3JMxvqUGskRSmugE6v5GSsmX6nWwNqX9DHBhfYytp7ysQanzAk944yWaiSB3af7XWEfdkQH",
  "key4": "2LUqndBomdQf3eJNMnDptzmg9mauUAKApHGdJBVfHQTJjg9Ze3ekeG6u5AK2nXqwt4VccS175naxNay4Kyx4vLKL",
  "key5": "2trMth4GYJKgmGnqSXEiP6BZMVESAsgWWQ8D5pdFbDMWwQRMAWa1ySomfHhvkbh3GJ38FV5mWZCDpHbEoBi7eNTV",
  "key6": "SYL9ZjeL3LSGN5jaS4FSLKWNsMRhobEprzAYZnvgivjRZ1d1SNBDFvMCshs4NV1ZsUHMhQ2gLjLHfKVs4pL2Vg8",
  "key7": "3VqrdRSaHtr3MKLJdz5V36S1SVSgKbaU4TgLJvuVECxs97nrNX3ZxSKJsdnVuw7CUVkTyirUNNhjgbJQVzqnAxUf",
  "key8": "5BA9NL1A5F5DWtwmPjWP8bR9G2SGDXit49GfDvocXbLChGC2uM6NvYqEHVnPg9cU1LkWA4Uqr2g3uJMCr4gbpax",
  "key9": "5irHkfxoEoW2AtXFx4jSea1PJuUDZmmZoLWvxTmiyNnx69HqssBEvGXAHmdA1UiZfvnWa5oRLuMcNFrK5vtzZsDR",
  "key10": "3oYYNvgpmDvmmBetwoxzXa1nCWTM2xRZpPRBQLF1ytgk62Kgaz6SMAR7WFNHqhUf47G2jX6ZhBKmLU6uPJephGLG",
  "key11": "5fCHcWpuTvVzbjNPU3MNVya6q5CRCKc3otpWUfm1dAo5dV69RhaDVTy5CiS1hhtQPkW4PA5H9pGXY7xYsgZGbqfS",
  "key12": "2zwLv5trPjjKycdFLkcktEUyDu5uKkXjcbugByz2XHUEGcoN8qUoL4qZEC7PLwWCz5Qt1ugWD59KQqGSpq3grZaK",
  "key13": "57PkN5z5WPuTd8zfWTY5Hjjkemu3JQ5fgsgsXwQEq6E5JM9LPrXAzWGaB7gfCH3oJ3UL6zojZ6kyAnLxUCa8DAsR",
  "key14": "5qVzZSEgUhXQgQRoPFg8Wpr5QedbwrhVaHFM8gEihr6raCU2zyeU7gEydJP8ZGF2Ph6eNHkTJ2ntZxEDKp8YxdKx",
  "key15": "3UTug4pHRdZBRHeHCAvPWNG4vbCEcRj3MFnWy9GzruoMJMCney1RphWSRmsxDS93cZJLQzo2b1xgajfCZcyxx8dV",
  "key16": "2ZaGdPTEFePfVhdX5KX8LiH3FWRxsrFt2x6DbtbJdEi2zMM2YfaPRL3SrvHAs9q17SMKHB9DBdbC7gXYt4mHF6jZ",
  "key17": "5Lik1zxzPxxmnAo1moXCJYNWjGwXHURvY1miAGw22eUSTKrQj2LiHEBGRj7RUzLSNtvhLqJVA8WdwaAX9ghzMJMU",
  "key18": "5da7uzHfnjgKvDzNaB64YXR5X7BbkEqhHZuREoV7qWhojhYSGUgiTQ1KPzfxmW6qmH8j6eDw855L5BQJzi6zGJeP",
  "key19": "2nPvYmZKjbaDZmZBjSUxEEitL7Wv9tiShg72a8w4hXcVeYHWJN5Xxb5GSbnv4iuoaWEmef8z2tKdA7GFvcHqXxs8",
  "key20": "3b2YHEjCP1UBtWuLwqT2wrBLPq4XH6LYSoxXEaQMLmdpxuU9k8jLkC8BvfQ5mdZsVeMERGMXDGqpfdzUyLN6DEyU",
  "key21": "4fLUJUByVMMSvPSsopj2uhqyvXxGPK7puaWoBbJp9fmBu2YostAfBvDLKA6YAbaFv2P84zrcUUbFEUQEmyvYJouU",
  "key22": "5RjuzbN9iX7rRbCEGRBLwW4mERU1kLCuhGe46RhD4mK28YBr1y1tY9dxCgSaefeR5h21KkhMjqPHxqUE8HUiez8J",
  "key23": "4M7q1pqqPRZGfqAbXCtc96zsVg9LpjbVNEtNU8DqdifDKDFW6exrV7wXV5hPS2KmCE1FGjzwVHCCCKS7epRPFX8D",
  "key24": "2V3tDvBxb5LpobpK5w1veZ32BWefUMfdaCLRfZ8VeNEHkhvT8yivbMd2oVJ7wsYHZGAhXDKTjrebqrUiXn9FDcjv",
  "key25": "3tWq9jHcmAP4PemSHSS423iemZqexCfrVS4x4EgtPCBrn57JyzXVGz9HtzasBoVnjVUWzrcm5MD1GspxoBSn57YR",
  "key26": "4CwDbN2WYAz46bxrpSttBNrQWftJmEhrNKhzf9v8b3SEqbEFKz5kNJNoRKA4DwkbjJv7f44JxmD4stFi8hxs1mqG",
  "key27": "y3PrPNc6vfJXCZW4eweE47gLSEqBnUMpTCLFQyTZcLmV9qJhUmoCednbg4DkGoLBMuACvBdGZM3QHmaXtYNVK4e",
  "key28": "ZpXUeBSXFg5qQ2UsmXo1hW68uv7DobtEikFCXLeDZZu15AoimTZ4TqQ8J6oGXqfNobUusPjBEy9hHjBzF5HFHbH",
  "key29": "3AUKL47ZwM9RFvinDGCjDwDXjvZKD8o223X8vMS4giARrpVuWQGk7pqoUbdYobYtQGyYgXqTMAxXSWmYBUy5Qhxd",
  "key30": "5f87x8tqgh1NDT1SZxg49gYwGnarTdsAUbNeUSL9mAbznebvLqrFR84Tdo9fPE5AtVzLsMSQzgZL6r7H5JWFHu7j",
  "key31": "31xN5mEJWx6SVGz6kBRw6YjJhsRMpaXYUwdR9m3Rim1w65b9uwgy1d98eNgpqTvPRnNRrpXXdGo4BTv9CHANHLTG",
  "key32": "4DdPbnx2eXTbXHE2A7ZSzJfB7a48kjA1ppsG2xFgpbM2DZEEjDUgm7RAfbRsNLzQxEgAbpgTKHh8M6QcbLj4xP4t",
  "key33": "YfmzbSZY97vGbLZEQTF3GvKC42e8XzDXGXZ8E1TEdcgTFfDCoJcN7YiVNBzQ8WoYgzSt8kgDZCXY4xCoSkaJPze",
  "key34": "2iJznig7SLhLLDxnCrhEohWZ4nao4rf2CvVnzaRoegKkyoE5MSvQ5TFna3DKo6hrZtzSHNTBCNqgG8bFWJVSFkdY",
  "key35": "5cXRY86UMnN8jredvxMv1tsax5Y1sia6Rt77HxCvb3HbTe6yXS1pvUGZSghoDiw3F8qPaoQHpn3e7bjfRupJbzfL",
  "key36": "9ybT61NT21pCspRwrZXRxCuQG4QMW7yUwpqUpsVacDuBVii9me1ZYgU283WSnCtqoegwcSrbtwCscREFLbikKge",
  "key37": "23epkFUzKSkbVse7g3e8DCwzjCtz9bktkFdbjwxpp4gezsYTe56X3siY2QK2bzAHPdYARkdGasD5Z1T8sEBAC78d",
  "key38": "2GtNcXukNrXUiddMDh27UHa1KFAhrshJnfKb89nN2B2KkNtmNJBe1bt24VS1HmDFSP7n2KTcmbXKCkX4MabCa1dW",
  "key39": "3bz77YQaWsPWiurf2HwpJh3X2MM37R29SHyZhUtsSZ8dkwbsoT9APM9gzCdFYX9UHEM5fLpZ6TAmRbrJFJKkLYw5",
  "key40": "5e4cpU93YtWUfy1SxNfFaPff4T6P3h1N8AY15sKbqjdJGJbF54mpE7oKzaAyPibsgKih17KddRsc3fh1dYauZ9Xh",
  "key41": "5aXWu1b79dp9k9c6m84TANtbViPjxWUKMuYrXDjsP9eqikd3MdCPTuUfxVtex7wBiCKaYJUm6FZDw7fioYRVpFfS",
  "key42": "53vffv3GF5A8oxWiazTdiaxZZoVbFy2h5jTj7vGc7e1iAA5xEMSdnyehN93FFLAdmVWLBzGtuVQ4KfgyAWYzhmUb",
  "key43": "BV5Uf4cJbjvQwXJw38sNyBYdxvqvZ1fsEfjDWewHUbgmK3MrQneu2kaxZeAARDpufiai8gfPffVwmqjKcwrCwuH"
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
