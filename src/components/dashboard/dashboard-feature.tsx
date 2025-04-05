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
    "2JefJ7aZxUfbYhoKeBy8fHnC3BzvetU7LzDrATKW4RgQJC9vmJXYeGmmHDSec1AnFoqapDJx9s47WchiPQbSgEic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hfT2sLDELKTGAywmuJuou2NiWg4ux8f8fkpcKgirEXeBazzgnhjX8HMCqmqAaWXTpBzCiUE12dYLpQ2iihuXGEf",
  "key1": "2Gee6mswFECuFMiAd8Y1dvcVEtgZjTn9kmKfSHup5WyFJ5jnkiuMT4jhwSPCWTiQD5Xta77bXjb8ME9soYNjWtgT",
  "key2": "3aHXx4xSAmJYhCpiFtBWBHzHsMDouQ9csjqqfBRksursydG57YVNP8seVkpByPzzrtCy91RppQSBaqadG6H6zRCC",
  "key3": "2Xmp68EanAQ6SDqUjDDA1kf9FtJXwmwKX4BE8uggXNgFxwbaVLZokBMrXg3XUkJfQjaYD4cNoiQc2nj3kUyQgS22",
  "key4": "4CMZ3vW7DQwGZt8u5KUjFTEtt219vdXRp4RbkX2wu2ZzkUY6mwZ9KMePWAR4swRvEwChFXHo6cobUDhZ9rqJQPdy",
  "key5": "5MiNNYnsPKVuRpm7ftD5o9esWnD1ULAw4Dd4hVterDXE1sySEyowH9p1g8SmEctmER3As14XgqtdPM9Udgfy4eQS",
  "key6": "4qLtcBuGGw1jqaD7udvuSfrdzB2z4i1MqVQc1eMtWxndAEZ6GkiVvVJiBHKmSQq9Z6Av6bSb2pkvBuctBDWn1CCC",
  "key7": "BpS4x5b1LJJqv3sV1BCb977GXsnk4gfsCXs7ExtKfQK363Uofzq4Hh6yNdLLQk3VfNmrdtsjBAoichKwNK1kGBr",
  "key8": "3E9sZvvgqt9Qng3oHDMPdwu6qAgUsvvH81ngUm86wuKFo1Mh7RvDG2AkPjBktJqj71WG8td2ayMHEMPWcEG6kauU",
  "key9": "44hCDebNjQ2qxV6d6LUj7mkm6Uf5NLL3tro2Wc2gsvLrxV6KtkxPWZ1erhswm4UDygCmRmjTfz5Lp18mgMUnvAWN",
  "key10": "2ZeJquyf4vtDTCPKVPVB89JENba5SUvbksb1EEkvUhCmfLZSPis7fHqrhn7pkTbaS6dCMNE3XewwA2e5honHAXZE",
  "key11": "3kwxdETCEGJS1QwdzaPwNTkCwYLz2M9FtYufnrjg8dN3ZcNNSZhvTu7une3Y1zg6bMAnTD7fohbJDZvpFyWVeQ79",
  "key12": "3wS3AS9xcsFKhDH1mCATVhDUtzYx8LBdtuaGnDRfsYbP6HCBDyEYQaG6rdKe4s5uUUYBkBk6LH49wb5g1Aj9bHrX",
  "key13": "MzA9mD5AQzK3m3onz4RgkfTqigaygDPXTsqeWEMJmG9aZNDPL6Y1RdMDnyhR2gwA6TAiXRkoBkNSYp91sdBzfty",
  "key14": "3AYDLmNUUM1NuijfAvXHrKo3JateQ13hqqpXjnQZTArp8NZjBq49cgQbiewic2BQCAWP177P29JV8ZVgNkCyid4R",
  "key15": "dvReAbPExiZHVaJKwRU2fYtcbSoiV7gdEVQVWFv18xJwRFV2DSfLsK6jFjv5QGjqs6vdQhDkRWNNWMsiyBfPk2m",
  "key16": "Jy1hsqgzmb2sW4aDtb5b5GwkDwZPhG64fTtNMNtURUf7WazQTn1pzrCDMZewhQTHUqJwTeDgdZwNYbGRGAzz6C5",
  "key17": "2gLHrHKqR1dtmxfGKVqrGbiXNCBV4UoPPtSnzrng3hqDfxL748rsA12kXGJaVcviqH7GvBSuGFnokBbjXkJqNfWU",
  "key18": "3xcvMgrkMGYm6njdi9yTFRYgEapRbDCnJn6v7Ho3NAwgckVfh32aFywWPCXHVghhH4bY4HQYP1kba8M3WYUyzUqp",
  "key19": "4EBYG8dbJix2dQAwfYr838X8N1gYdCJJgK6c4hb3og2xrbusCxMeekgPksyPtbzbcwqUgK4CZ8ayAgM9HCsaW7E1",
  "key20": "4QKMRULJEJrLKn2ZRbhy5NDnby4kc6cPfH7ftSuY173ykLLJReW5hi6JoiADz2dKRahJdobmgYfbfwPkkUrDXJTC",
  "key21": "2ea5Wiu9ysL6CcdFUEVZLxYNy1JYEwqy1B9LBe96tHoJ8t7scWmraLDs9SoyNuuUFnZYNeh4vbVviE5w4HnKu6bB",
  "key22": "3YJ4xZjZp5saQbfGETa6r4UPJaPvWVZ1BxuTv7FMZq8URhqD6xQcevecLRNt74wfFenNCfBM3anhSkUCkVe8srvf",
  "key23": "3my1SeRH1qDHonPjkYfTYQEGgzZgFwpPS28yEPR7PMooy1minnNBu83puesstSFoaQrCw9Qi86EB2qMdAmdQeTKf",
  "key24": "cjM3Njn3vNkF7Y5CeGJmm7wBPfU8o9t68GhU9K23bHoRuRhhgHZzHpGaAJw5KbLoKwAUZZmctGzV6ssv4TjTc73",
  "key25": "X4vgaJDoMQYqaPJFTb9Uvk14xJVCUoFgWFcJ25Ct6fm4nBCyyF3afGoCFXPRszjVdJyEcNQe9pwRFigVNZ1CWxN",
  "key26": "4yagmnPDcP2oT8Wo8jA8HFe3HX9zdKGQT9yqJLLADs2T6XfqW1WbuAiG3GixrUvdYfxrsjoFBRGS4tFL1BHiNfCe",
  "key27": "dJnHoEXmrhP8GJDSwcBdoy3Y4M7aLanQsKDJfaebjcfdxhVrW1ZSZduLTZVaJduAGyEck4ib9HY3F2LSEhHQULw",
  "key28": "3gmfTfX8piPvXgk9jzDPdJCavVbJj32AoXa8pUav6QEMLCCUPEft5D2gYf21gj7KbzN8VLXhw8PyKdp3WziSH4AB",
  "key29": "2m1ghKp5fketTib7vhYGabdDfY4DzFeu3HKBnbDy9d9xhfM3Jn5U6oqGKWpbugHrN7NYZKT5VCSnnRg8gJVB24xP",
  "key30": "5XsUYpdePvShC37E7mfFXhPpK4Ht8e7PoPfzzTHQqXXavm1rZ1nkhybaA721woQAESL8axsK1Y7GWixsEdVUXWsa",
  "key31": "2ndLT2CnkzDQd9j3prkWdwZds4Vf7Nusoi8jM22vVaenZb8WusVusA3M9V5H3oNJk8GzFJbp6botKeAaTvdZsnCG",
  "key32": "2Jhyjq3LgMemg18FnGq896EtXgxDEC4fHC9wATBLZGYS5TeiBujc3iYZ5DPFYpZBH53JLkeQuTiB5svtsAzFFq3p",
  "key33": "g9Hkyp1SezKPx1voZEfpqUbvcLwyQ2K3ywCTnT7Qy1i3wSYZ7BANJ1qUUsfGtKz9xRRRdKAA1Lo1RpoF3kcJ8Gm",
  "key34": "C6v1ems3AGHn1gWFiywY3eKnmv54it8eAh6RJAVxwmwRp8BeTfKrJVieHeFoiocjnjSZY5Yf4R5Lc6VVAgUVYfa",
  "key35": "8pNMwvnFATwvuAQQwk4hYHbBwshjcPbEBRyQNcvrwVotcjX7iasCa31TcMxNWio18WUPiGGLrjh2QotMQUf6Qa6"
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
