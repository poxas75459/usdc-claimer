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
    "Ch6ee95yR8VvAeEyBpd3fUj8CD8UnWT6zwMuNotEEnYrRC8cR6b12m7ns5tVwQPhLYDUfcN17obbWfuQRUXUv8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tnqbJxWrHt5f76uY5m77g3czi9cKfAqBWPZrTgepmzrW1v73ZsxMmHfxVxGunA69JdfRp2r3YjD6rpTrCvExz6B",
  "key1": "5FKgwEYbBqWHuYMZoq6abziVMdkBRBNGXjBFEpN1j4D4GEyz8wN4W24SJyHMrBxXT3hsF8efoRdqYqRJG58JEMzE",
  "key2": "3A2oLZ8zwSs7HuqZjngathvFt6Nj6aMrpFxeyuH9z34jiNgNZbbpNW8RBqpDFtGNStDpuKfetJcqNV34r2NAywaC",
  "key3": "5pv2KZMrThnVoZqvWTDRfB9wjdUx6Cqphj3atQfzDGQDyNV2Lmnmwtun7MUc4sEHexKj1axsSwJqJSgKnw3Lgxeh",
  "key4": "3y8LfoB5PLieJ6QpoHQUgNQLhwsdNnsAZQf4j1WhcvbPAFndcxwJcRx6pTFA7YciXwWSwUHShnxmFgVkWkDESKes",
  "key5": "4Q9ojyBzv3hUaWJ7Zfze7aZZUFE7GYftEZWFQhW8MymNhzBWM1CDK5QHTx8ghXDCiw241FzCa85jUKJxRCAEn3Dk",
  "key6": "3qdrzDbgAmrVx52dJLm8Q6iez4b9A7pkgdHvmxu67TnbX4vfCD9BfbjrPu8dG5NHAspwkd5ikQv6B5aivuMR8HNT",
  "key7": "YrA9y21gqyMmY2TCf3pgQ7Frmn3kqHeo2eUD9Uc5wpYTK5aDvhEjEigk2xLfTVRCkwpSF9SCzQmZQf5A1HuH1ac",
  "key8": "29NvyVyg4hoG1NgT5s82GccfVH3CFZL9QfoDdxQtC2um4AD6CqUETVjGcJkfMpUBWbPK3w3ocA3ccYxLf1khDuc5",
  "key9": "koS6fWLmUV8fPTRGgDgdkx82j68H2p9Ggf4fjmcGr9ejU2Fmf5MSd6FpHCwYeYHAJSYSasFy3LFv2k9NWBjhCFi",
  "key10": "2s9GHgtvP8Hu6CffTCfDVqe5kbLayACW694JQS9wpXCax6G6tsNCf1rbp8mvLhfnEaoKUHNimYwpuVX8cECSmYBi",
  "key11": "hK1hEunsZ6xDmoBMt2FHkzNV7ChpmWq1pzaoDVAoAoRnFW5ofpa8fg7HVZx3sRao49imjxFXJPQuMhqxRGj4aWN",
  "key12": "YJyNQwEJnF6JSPPetD2pVy4ccVyqZbSWD7KyLvSLKeYeAa1bxczdzMkpYeD9nMydBgEbtD6qDAJMzxpkUTjpCPH",
  "key13": "47WX2yksvMMwvPziUACwkzRpMcnanfpK3WSdxAoBg92QjUSk2hWfsN8kR91tpq5XRFzDFtoTtMC8qgEBFJ6DBM5s",
  "key14": "3piStJ7XCpHFCJ6wLmhyTeDuN7RiApz7rpunB9hM2vBVctNgXzr2LyJk3TbVqs2CnXznArD6toufGWRNWeCF6sQi",
  "key15": "5FQbHMfc7vaRW6ETvY6P9onhu4CeiXZQfeajQUzKCKuEmAHsmLZ1NqaoaaLNtJs97cFEzu1BCrJD8YuVtUxCLZDH",
  "key16": "2WMbfN8dQALgpwksyEKvAD6rTbdkYKVmGGLqxKhooB6ykhncJhu1mJFVXU1ZDVHt6tHz5fbTTQwtQRjd1p3UeNWK",
  "key17": "2qcSvFMBRPcqPE8z5HXjZshzVNG3TRKuJmTrNSCVFisFt1VHmG31d6inb3z8NE4SrMnZuBPgc1MKrY54KWyEVqNe",
  "key18": "5Tt1KBseyVo3vEp6ma62Jjkkyrg67w7UvNQu7ahGMdoDyY8vTdtN2CQ1nJC59VbDkYHRHgRfUtEwkHyw6rv35M6r",
  "key19": "3bW3AQCiT8iptxT8hKXaz1DpFNj4MXRJcvjuD62gVBVmhN7XuU6jzz8peA7MmAv3w81VANNUmkrFDnGPSAF1FniP",
  "key20": "2T1cA4ragfXWPoeeZNqgTsy1hV5Zv346jrMUMMcYvaFdiSzjVowTCatxSBvDyHkm4aRzDym1fjmkSC32rDU1N7JJ",
  "key21": "4NVnps3SQZsgaFWNNokDC9Nn5rTprUiLeXd2n6R2mC2eK3GtDpm6bJaiQRwbVwP6SzJLK5jCQumQb66HsbvmjkVi",
  "key22": "5EsJ8L4TsC6GqUH7m1foEzSyJZ2Fyevz83EfQQNpT8c1p4vndeAt9iLSATvo9AgiPemyrShNbJ4zimK8VSqrZqGe",
  "key23": "3KvJN69QqFLcjvXhHjdXwRFQRQjmnwawPprt9rj9quvLtGEqvwDTzAwSPq23LsAtK5LN4kXGh88V2FQbjcba6wfu",
  "key24": "65aiTY2vQMgNfbfakRbVW3mNcWjQsWN5FyZjJX3Uih1FkYxyfQmTg14YAyVibfsPCt23gWwoCx8MMLTJcBXRGgk4",
  "key25": "PhJxA2rGXiKEz2zKHda2LeRvgqxUatnWPtFiBF19eswdG1bLu5BxsYZBHmgHuPGiDSEihD1JyNan8r72G8T1vaX",
  "key26": "zz5cQdhFzeJwU3twjej9CmF772yQo6GQSo2FpLBEQB3GzTS4RYknP8y982kn9fVQJSTjgAhaqkEBFXWsFcScC3Y",
  "key27": "5orZdgHjQT8vDhM2HmULRzD4KVHSYuyRueYBSS8XuZ9yupULZ3YJKXRKhgLjTiwTV3NbSL7Ub3YNfC6QXigaXduV",
  "key28": "3F97Ry9gRgxXRG3QJbWYTNRvUMfNNYooN6QtPKgFuojQbQZ6oVwG57DsKHyAviiYCnKjHNrX3pDGqJvidGnowvrn",
  "key29": "H3bj934VmK3c2nukeYaY3bCm7Bpqzey9Bdpgy1V1TYVUcj4Jye5bYgS3PBXWAtv7bp6yKuU2at1zLPtJhc9imL7",
  "key30": "5JEeMH3qvHPc7QQnumWzTM7PNSpsFpQzXTm4aut3DRvmDWfhsDwU68u3L2kLX6SRWisRVuFgbwEFQmwhEDnYaWB6",
  "key31": "2wceEcejbDRLyceGEkA64tLmvj1PrdFx8PLgNdtpGEbz6SharAWvvbSLnc1i8XXqMAYg2KtHr6xghWkUjfBfmU3M",
  "key32": "5rtgp6uuxFB7YJLB8AgVpe76Hq4XC9nUqjAGnCx6MwKJQVhNHBTKiyHz1Vc2kq47b5traVmEzU9T4Wm3j7rVRycR",
  "key33": "4xCkAFVyCo9dh4MK83czTKq4iPUKng5oD2m4Am6P1oUV8RxAwFyCsVkopameUgquNMtcrHvuTs9jffpRoSZVz2LS",
  "key34": "3w9ACoW3sQC689T8e3uZFeqh1BuLVXCPfpxMD6arXGVgJfixn19NA3cy3TR3SjB6UVfcCsvfWmjKvUzj7hAffJWe",
  "key35": "2UjwM2PWYTm8YjoY48kGguLyWTDGipRk3e2soe77ED4diUcsqUyC7Ec4HVpHpfqATLyzM2NNvxmQjiLPaDQWQAGH",
  "key36": "464L4hsyynCQVNz1xWpUxZxnJCn7HdqcZ6hvDeLmT2muabYqQxtFaMvXw7G1BkFr89CmthaRDWAsGKToFredhb5Q"
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
