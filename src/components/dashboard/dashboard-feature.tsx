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
    "5vYWbjpCvf6MQ1215az7tc7MsbcNjGbVdp7iQq571cQmTAjYXK2pb4HQUp4iDobi7UwqcGgYFh8A615c9WnfBmjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yiorjndsnUNvma1EVJwzsjHfBy9jphURxHpDFCcbMsgVTy8SaAUxHmZ7DbR3WBMjtLrQVHfsVJdokaM7bpjqajD",
  "key1": "48wmU269TBfhtkQp6wCGitntV15bT8GKteRJiUc6gYbrWH3j32ChkVYPnEmYTZKfpSLW8NvJ9dv46NHNS2gYmKy8",
  "key2": "5WU8XZRJBMh99u6FvLqrWQUmDAmJ3inw84KayNWHVSWrWqpNn6CfumNKjrm4z8d7ipa6VjPL3tD3kMMhn2xVr255",
  "key3": "46sxcx48RHfTWKVjTkMzMJf2u755sESohSeFfhK6nb2PhsHduVskFvvxmsBS2BNQwRzz8Kn1zT4vXVv7421ofdPf",
  "key4": "29wy69LwdpvohCzihGoeHpiXJKdXU1DVuGtttqJMe1DxY2MmpVamGdEnMKH6gbaGt66J4AyikASUU8L9osrJxHQ9",
  "key5": "4bqoj7B9hUAkFWLTPSTYYNPn375BPdrsQ3WgFfhKgRFLAiNb7NdU8WbWNirY8KTiseSmhpycpetY1rz4zyaz8eCc",
  "key6": "4eG9BFdsrNV8iKThWhDQWrfEDufhB5jYVJVshC9VAyNYg6WRmbtXgCjfsJbn4WetytyNx5y24LNQZkozj4v9FHum",
  "key7": "2uyG5kjtPhWYm8AEpM1wfGv3xS1q1hRXBkE8emJNRHUByBAg7CCiXtFHKUC5fjLX2i3tFzDBn1GAwbXJuZiKSGyn",
  "key8": "4VZZwx1anL8ZQ2RXrdaV28K3UJsCfyYr8n92CBh7sVRQ1SRh31LQ4KrdzQGwtzpUNBKxvtiR4iM1vczXMiUWmdWu",
  "key9": "4xwrjj1FZqtW3Fdn2hdfFC2ZBqdaAupy9vqgJ8BBgvaNGpvmXW3oheJkxiTTTq3aTJLFYYu5wBAtZ4rGDtL62P8i",
  "key10": "5GBAx1Tfga7vZZWRgrnojJJdL5Yk2HhabvmvCdHvVnCwshusgHPo8a7BfdSb2a2vumjk6CyNBo5vfAVwTcaCs5Eu",
  "key11": "4vCDrov9vPGS6o4R3bibD8SNao2Vv95str5pirE3HFtyPq8pvCFD2RHnSMsp8JJtJ3iZ4CgiEWau8sTJiMmN7wod",
  "key12": "3nJQCEt7KefBBojRBtpoth9rCRPr82m7Bk1jvCXCMtgdc4gNMxKT5q9GFFEU1HhEeot7of3fhSTJRMpoUcjcEZ73",
  "key13": "5YJCk3pCuS2fFLnudYCCKgeWC62tSM1N3XYRkoasXBxNaFyyM71XdiVh7oUHs92rfC28Kf8Yai5WjE9g2dSQ44c9",
  "key14": "EaZXCLsgDa5qQe5hmBMgnC3ZAkMjJutL5HZbmLxJPcP5yhNPDejbzFqCAy3m7V81bjqBA3apmC2rHP3Xv66TwpP",
  "key15": "5vrUBrHYatSckgBwjFLGW4hGwPBzgU8p28XXS7H8RoKpE3PBsm6ibAiKPp8YC53ujQvxQ9ZpPgDhirjWvigk4tHt",
  "key16": "LSgtWXN6dP59eCb7M1bXp2wg6sjzKpGxJWRWMWt5pMn33duuQGPhk4VJwNk2SYKkWbQdHWXLAodiEQ9H5AsB81N",
  "key17": "3qp6AvuxgQFetYqLkkiyagBKv5aCfykd5h2yZokEnzcJAB5orrfzMV9vLbcRsdWnMRsMnM7jr15BBNApfvUHVqTA",
  "key18": "3Q3NGExVv2cXrBxqsBRHRjDAVAkqxqB27uotpzbH5Diq9MMeS3tHKbghCmQxACLamQTDEMhcySb8ksK8EsAqUn2i",
  "key19": "nfgEqXv3pZxr5fQGmd7vWhXh3wBx8YZft3WTbCi5ZFXb7qSEL5CFMqcg89CCo1coKo5GhNwvXwiViSWzSebhnZd",
  "key20": "3esRJmyMZi1kxstPvYXkCe4eSWhwwb565coskyHbSHQBantAWczyLjXaKwwjCCXf6hdmuF9KWmAZqCY4BnSrCjcF",
  "key21": "23JpEyKV6MrQxCzPSLwtsUf3H4LwesvfjcpnyL45P8yhgh7tbrWWDw7ZuP4TTdGCmAVXRj38wJ8aSGDuee6hojyU",
  "key22": "61d25EC4pvf64DLPvfRZEEkawYnCkHshDLAqLRcZqiVuDbRQ2nUGg7B9SBcsCYy55i3gRbxoqj8X4vCNTeEefn1J",
  "key23": "38YQ14iskyTLmZMfLSTPqt6D6A9LsUQuXFmgEsYzAXQf7C7DGNZwidbkGJornAcUPnc6BzCH28n9LdD7VsBaBugm",
  "key24": "4azKG5xY5QLH63Arg7Mpy4ZXyogjVJ7tAYtXWHDw9iLRkVYqyMmSiAtR6fqtiJqvbJwasS7jRqKepG1ku5qBgojR",
  "key25": "4dHP4e6hmt3mTCXBXRMRCjSJxsYH95Fzyqg5TSUAwxXdZpoPHKpzzziK5nAPeZce21a5UDSEFYKvPCP13XKqLr66",
  "key26": "5o9ToKCupmVCagkfXc29x1hj1gdwucSXiyDcUw9NExX2GemPhem3PFXsWb4irPLKeccDwbsFiwuz8zBZDWNFmARA",
  "key27": "H1ZMMAGDj5Af1iY17dyo5KUEGXzezFVS24gcFTmLbSUtmr4tZnKtATefjEuVyBhanYyriJkci7Bz3AqxXoPyCGK",
  "key28": "5xLcqVQoq258TPHV1AXXE8oeR6huSouBpmWUGYE1Z294ByDecET1YJUVWXx5Sj4pVQexZ7FTfKRNGrWMBoykCawB",
  "key29": "4QUjgx6Gr3fPQRhjD5rrrBBCBm1V5sTHycq4iFDrTiJjEh3RwrqtFMu8qhzm6xYvBVrfVzDd6AwoQAgwjuAyNnA1",
  "key30": "3QSzsxgsY55tXikB6F9bX8hBQ4EbUgpm7dmUbeWe4mwvpQ8x9RqkfaAvFSwbb3mmGtAHWxf7rs5oXiBRTwgsmwTq",
  "key31": "UbaZ2Ls48KCuAJYdSs8YzoZiRVXrEQbhXDENAon9nZij12ckoN6x1naSJKoqFBccJKSGBTdLGa17Xc7LGgoPXQJ",
  "key32": "meXL1Xgvjuq7WoM64aWhmcUxvRfJLXgeRe1QDvfTRjsLL8h41SCSg8e6GhGKohA8HBTywJLf4y9oUiYj7gUgKSP",
  "key33": "gtrKS6BkeMnd5r5KrAE9nNKMjaH6aHLgPdfW5RKepQE6PzHQdMDezRtxKtZ7ddptdmt1jXv6WMJuAnV41GJwd8g",
  "key34": "4AgWEUzD9ThyXri1tBMGhbLH3CYEYZXKHGbD6ZWGkpbDfwoUL1VoTrEsHR1FRcVUhwBRKKdE3z5tZN88gbbJaKbs",
  "key35": "2cH3dKVYQGgV9RMjGppaF6z9eCBbT3uAoQXBdgmHsVydPTaqyqu7F3t1dCuyH4C7ueVJvqREcf67uQmsfB8Y72pK",
  "key36": "2Hw1AX18C5YYQHkWcAP9f7xuPg4PQoFt9xDkvR4Lmu8hJ7r1vR9Nh8r84mDtLNXXiu3CyrDhmiXBGv8AFy1yn3E6",
  "key37": "5hdmYoCXqUwm9rfiYhu5TeuyXMnscpgJ9fiTXYAs9FtXDNgRhwxxcE9pxLaPPTwEcU5gckmWp6bnXnSzCpWkDwSB",
  "key38": "4y31ZcJWN61NmUAWkXrbWPPBFFVkDrSUweBYGUD2Ka7xAnBkCoMkCksoaKbyjjyXjLquGkp8XPw6bS7qrFKfpHQc",
  "key39": "5cT7cAF6LGcVikGivYVTZGDuZ9uspB4jsc6mgCPZyQpAW4oZN4dW9rMX23pyLLZXuqpaBXSyyeMeeRCHo93uqrfF",
  "key40": "5CUQb5245qfc6BM1TM3TK1mdifRV36cqT6kBKg38KRSvLe38CCqegvLeNSUo6EaYvfFZFLpoeibLBySafUDqBiLs",
  "key41": "2biy9TUeS3yssxMNYwdaa2cCdLCAzxxxgUyd6V5K7GUXtCCwvFyd8hDQCvkWe2aUccT65ottxo5W6QHhqJWCTgzn",
  "key42": "thw3Amh4s6ZhkkE1SYeAYqXYGdA3CR9JT1M7nG7omKmT47ziXNkvwJ4qskqFyW2UBYvbXonUGamcsKAhEprfyRw"
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
