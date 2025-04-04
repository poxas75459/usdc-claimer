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
    "34uBGdXzHqd3ePWJzwJtB1sfvhSz4hSL2idwhvjw5ScgTCm7hcmNPN9kkygfPr546c3ZfQULvAz8mwKM79scNK39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WF5ZzcmkgB11ZETofYXvahSVRDLrrxbh3nGtSSijXWPnkawrM1HoGu9WotxSMTM69tYrFyn26bSu72yKynnCEkZ",
  "key1": "pfnL37PHuXW4E2hwAEBzbr5vw6pSERb9gwB9d1M9ieLP2wjWL4GmV4eNoQzz9haSD7eEkEB1UXujUyHvGPtJRRA",
  "key2": "36GV1qWYHrQcJazpfKbez8F8p2Z6ZT3qzGrJXA8ry9LHNCBPZELLTV9L1qxZMkWmcLZZL6VZGXLiManCZtPdMaeY",
  "key3": "3bWEXebYBwHd4MSSNxgxmYuqPVktfzvHXBbhgKgYcAD9XqhdkcHfcRpGvKNaRMJ1djbAXThrgeoPUcrsPVU2YgSy",
  "key4": "462mbRx9vmY3Xum3ozRobdUy4ReSSZXMjPWjzs2ujY2owpVoHMgRbAkqNyHZoStW79CtiqzGpofezUjyXDYZXyEj",
  "key5": "5RZrS2CHchP3zSxXQZ3hKTEkbJsaEbhr36TTSuvaNvVMdjDbuz1kSxgxMYxguUfuzx8DxJqBfhB99jtNmWUdbcXb",
  "key6": "4QdV8ksUhq1nxsnXBXVsAhCMaJr8VXnKdqKL6fdS58Fa9M1DGv7fjNDg5iVrsyX6XKWHknXwyegn4oBwbYH9NGYc",
  "key7": "W4WVqxPoK15hoftwWA23GDTNM6Efhm4sBVC7SpkgTiXDXjcDHuya9uwvCX5S9XTXadBHZhJcsvoAmdTy4A6LTZM",
  "key8": "3YW6t4aLSJ26mtRjhnwKKDhwiEvRW7bWNDTDCe6HGuoQ9LE77w7RHrMf2cK5SekKL1QCcQAEeixFLphvPxF3ns54",
  "key9": "26bqoQ1Y6o8ZRgR3irXENRVvrS2gKruJh5b1BdAF63i423k4DiKS1x1ByaM8yow97KxUqTTBw8ndCoDQHTTgxJvN",
  "key10": "2EAGFHdheKJWUpj7sm47Z7auikiCNzsKzoPLQG458yrNJpiSJXFi7JsfoKkA2adYAdKoRKcnNxboEWxykcvwBRFF",
  "key11": "4Jte59Udh9zvZZxdCPQkd4qLfbapR1GB1VCMoQsd3t1cSbeDcPkXJsoxWNXRznaANeQVn9B92YBV73EGr6auP6S6",
  "key12": "dpVC15Nt8ZqN3yxNdYyNum29bkF9T1Sy4LqoM3mG6hnvLhLQqwmJRF42BE5usB1yrC4a748qqfyzh7jncnhxHeX",
  "key13": "3iGxmQy8NEMZHknZJPeJsQmAsFYPTnHVWTGZBgx1Khxi3XYmibihWnoqWXarh8DiErzUo9rqLDsC76DTYqCWT2E4",
  "key14": "UStfKL4WzFkNAyviG1RYbqLpctBDdrH4pYRtecfLgKfzfCXu3yQNy6ZhZx7co2zxVoFewKzvi2bzEE91NKts13f",
  "key15": "2UgeBxS2GQpuYcdUyRXvrevdojr8Prcdv9khWfJj99pRz3tYbFwDPhA4rLHAoycfE1PKDfh6MRJnStr6BYBJ8nZz",
  "key16": "5w43Jr3mBMKYzTyp6W5GuTq6LQRgub4gSWfw5vm12wP5tFs3wD62K1BvztCbbSt5r1PWw6AR3FcnBwFhFEyZ9ypd",
  "key17": "52HV5xNQNybsBrg1b4gqpqUvTih1wZqD3aEDNTpeLhkJdttFpLbsyvouiG3W6SV2DhmXgs7s3FebmQHCDCiwFJPy",
  "key18": "41Qg1cabugAecGx9a9kAjdMfKYZkEDbLt9eZLVjdkuWicuUJwhPajxt4enoSJeffJbsTKKjHdAtDTMBGu2hjUdDM",
  "key19": "2EHEqt2xAG8GgcJ2tQVxz4GA1ZSEibxzHTSGHjNLwvJ8SyAWXuiy1oiTyTtnXLzzvXaUN1YtxbpAW7SgANjorcEZ",
  "key20": "5JMXzizbAoRBJX7cYJTSh6oBFDKkAnjKQXW6kJgnVVVJfprUwETGeoDgPwGv3qco9ZH29cJ85o6aPeaSrvX9jhxb",
  "key21": "5phsx3e7siUpEUuVWni7ZYQhfgnyEi59G3ZAyDqjgZ45jHDd6fhtmZTimyJebmW728ouNeZyr1s5nuciL7aNnQy3",
  "key22": "yd8HqCRKaDYtq4pqMmNq6WZnFWxtUT11SxqF2bBuZF31qJgKUZokpqLkbpfo86Chdi74oEDXwxRXAdUhxP3rrvR",
  "key23": "4sBY8edsiG99vHGa7ywu9SS477dfCf9vytS4wpWVkHXnqfufYCRkff1cGBikQLF5jvZNQqWeUdJfF5KGfU6vGZmf",
  "key24": "5viS8pn37JAPj9NyyyVGEpsaV3ucheX2PeJeLE4dfcepbfn4LhJJoZ9YYFys1GnkoCFJeDXwPx4BMs5nsCTWsQaE",
  "key25": "yn1xVzFQezdSEYNnzRBdnhanjPwgkZrnwnsKA8ZqTVQc8SykVnAvVEpmjWKTnw5kLrn2ik43vGt7dEgbWcNQQsc",
  "key26": "41WLfyDwi995CibqCWtBWEgtw9CNAx9Pq6dzpJ9EPoULioCGE5Mq1TB8JWJnW7a17c6qUiRXocKtRPx7vGM3TPPu",
  "key27": "4iBAR8YE8w7Fv3zFSyYvZPFFEQ1ruu1HqyML6muiLZ9LddZrYkicn1JsahDPQyV5dS3nobuT5d1Av9hqUPRXvC8U",
  "key28": "4VCmJh2qnkR2TDBGkeyx9F2NWy586p42U16BjYo4qd7hsFXBSyHB8a1eXxHqgKsiWEFGR4Gw8BoGZJwi2wcSv8Sh",
  "key29": "4tNKQ1Ay8DuD3PHVmqpzUN6gW1x7MUGagJ5EuFH5w57WMEziAXvdzH1xmQQtn9XBfxje5EBgro3gpuNaPbDwq5wh",
  "key30": "5rTJkx4my5x5yELPEAxtVjLWowCdiWtLYrSn5wY4pUy8cQa6Se76ReQt93N1ca7FnjjxbpwrYiyJ53p4WpCnHQmh",
  "key31": "3NyMGfddcJDR6xXvWw4qsFanrXSLmL63wjQY3PvxfC7ySYHRNtPGMSnBYRjbSwSNff6upuVgHjjh7iFv15uf9VAX",
  "key32": "33SvE5WKBHVJR2gPPBJ6x8GHCF9qbivPDZAs4tWUfVKdkje9w9ajSNNCKCKRJYdJCqdHhBSdqzYpuXAbbgBVDQJp",
  "key33": "3fF3U1pXzSB1jM3Epo6pEET2CFWaAfdeXBQ3S8nowbRaU7gN6ApKXKLcoD2yyUykM2rvSFMQfeTwJ5Be1VmwMJkM",
  "key34": "29871d3ZRpJ8rj32eczG65Q7he5BLz5t95Ebx6uqaKe8qj2BDpAmy7BEz5enz3CZDGfGDAoWVvJxdLUbqEJypSP8",
  "key35": "3Sp2ErdA7xfDo3kLUyjnwSJcdrPQmJiuLcgEqFPVFAFghHMkRAZyrsYkAwSGyL5W3qkAYeQ5S7GdnWFw5HcZAvsU",
  "key36": "sraNfNs62Pdm5U9pgNiLmpEaM34SBhQTKjAnJ7JcbXVq9i3XSxmDJV7j9aFP62FVirGAJFX99nNmSK2c8okJxPh",
  "key37": "2bq83WXcyD7ey6oMfWPMVjhbrMA7jk9Cs37YMvbjtGBmnJpHALCz2ynuSwzgHbZf6yM6fUEZkN1yXUG6UxwV6szk",
  "key38": "99fr4tjgmAtfszL5VgiyudQjQ5KKKFyf93CCTzerrpQB37iuRoiNxJVheLCndYNDsaGbeLm7ewuCf8c5XARBGJY",
  "key39": "3D1KsfMgLoTt6hZnWna3nkYH8nkf1utwKmEbwC44UQjQk1GRMKgAsmCQHCDsXQtxh7YmHSuZu9WsW5fMuHrd8qB5",
  "key40": "Csgs4Zn2i4fvkFUZbFT7rWAA52yiwvRCmz57s83X7cDi17xtiMT16HD6TNDncy4cyQtXb8oEoYADUFPz4L4hwVo"
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
