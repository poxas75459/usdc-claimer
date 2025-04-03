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
    "2DANRo1YUgGiu6MaBTF1BB8qCLewzQtqRvCoEekJ1yg5eePMJ8yidQhoWpZQe3aZWFFSiDgneavKx1jN5McK1urz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t55fKPnAXjCDh49vbaG452Kk9QjFMbDFFkcZKX3EfZHwETgJMnqrymvhfVbfpqtUqU1A79n7YXo2apgJhHmCN4h",
  "key1": "6xdjBkfCYU5KmGutbf3DkgXNVqxtFWV3K5ac86drJdRSbrkMYN6mi9LxeXmuVy9SamuJqERAoQzAdSvkZxFifda",
  "key2": "tL5q3ASyWq5pdTvgdzVF5MCsMon4xRoEk1ECrXNbzfCeLQ2Eyi1JgMqAwxakqzJRdUfg3JoBxAQuKS9iLb9cfSD",
  "key3": "5VndadKshaS94aHmGMmSRiwqqfM4gk4BPL3uH8EqZzJtLqkgHDL8Uui6fYNFB1hK5APTHcT4dSmwmgq2ar87GCHG",
  "key4": "5ipyTGZ7TudBBGXUDh5NrpwetxefetHe3HAUEsUjtJyTv34czmvbhKTzb7tDx8BSQtEqzdN2tsMfgzJHQq412p9J",
  "key5": "4EHEtQfp1yPatVwSTvN5amP5fXJcrJxP4SWe2mLJKikNfcogxr4FnrUsUvyHZMCGh1JLVpn1cBUMG5nK1213z7Fh",
  "key6": "2Jn13WpCsMV3j778wM5X7niSmkRu69E4AffLMx5v5VVHYZ2sF7jvRR4Bb5emkeVrvDc8Bhddi3F8Ca7geSvegv1f",
  "key7": "XptESEs32wqWiQ7Kzjn8nCDdiiy39DYCZuzBcn998ZpbWWsUEnMNu4bsieYKM9jyQVDoKvpKoiCNRny9CDSoA5h",
  "key8": "EYHTRuAgfw6BxXU9vnEWXuRv8dtrLihCDRUvMoh9t9e3CRfEv1k6CaZYG8RKVVm4yZ2ViYNWFvTohizjCGSUj1M",
  "key9": "2FB7iri3RiwqzZq1xdxRFZ2GLKJ7XRZzSiZDkjJpD2NxSbrr7zNykcpKR8iK54WFMZR5F49wgKfu9YhVPNfeyHiB",
  "key10": "3dSgGpkeY3g2AZb7PLErDycHGbjYsgcG4Y6Sh95nokxQ4iazk8CKGqD8r47Rv6aSk7KjCM9xBgEYYi3u2wHxDuhy",
  "key11": "VXaT8yS5y85oyg2wyR9ukqpMACydN9Hh9UktTaRG5vXpcAyrKj6VLnj8RJ27ZFrzWKMkLcrYVVMQDvJbdVcBGFx",
  "key12": "5Ws3n3CvPogcaCGDEU4CqmbpcxoDBiTDBvReX9k8vJhUGrCcFaE6eiGeg7uTHC7xPxeiqjiwFLjXiZyTWbBFWbXB",
  "key13": "3XBptKosBVpTt7Av8nzh4KG16XUQTTbWrqxDsdVJRHs3b7v6bG9GF4JEMtgD9rBAQGbWuc3tn91bQ9SPkUi3dgfi",
  "key14": "2ZvyL2YXZr1L159D9FFbJPnfKzUXczstPmmskpCYyTMApJ8cnF9mgjQ9ukdHAPGGUZktn3yrwhadbku2V6R3LPSr",
  "key15": "3YciJ3UEc1ApngnoHXsFPZnimWVdKxnYFFJAT7myShZMrdcwkTuZr2dNZFht6J8kU4Jtf8bHSwYsS4Sn3DYrhmHF",
  "key16": "Kwbj28Me4BGr8js8aRpjZem3PCnGWFAA5uyRyUYrd3sPVMyQibubnzCbZYuwJN4uDpatbhs1t2ThkKgy9LwRqxL",
  "key17": "wYUdJ4QHBVT4YZ6FkuGGQPDWa15YCL1gZK7vYCp9Kt1eFJLe1FBAubE7VqppH3814faqf6fqP7Wz6Dk5cEDVsa4",
  "key18": "zP3M4KPWn9sQ9bW7EicSsfpMJCfXfUvWBvXz3121nAD5EKSL97c9hRMLjR3Ydn3S5GbVyGHwKwvaUxQfnLCcet5",
  "key19": "3B2Ey7pMtm17VUZbTNZt9qJZknXGmCjEUgdMaEns6LW6ymmG41QygCP76Quqbkv1bTFFWE7RtRwJBRjz3cwUAuUc",
  "key20": "ATvrm4pBLquJChK4s5DySmLYwrbUn35X6qfwJLPLa4AEY2pj4uS8535Fi93CCibJCa9pudf5b4pP4dqbkVBpxVZ",
  "key21": "3e4eEgLsBoN6x1dY2Z63Ubpn86NjnJWE32jLBfRjq7W894vTaxRHMwZmazCdhKXqrHETFo1UCjscjR8MrR2ZVb9k",
  "key22": "n4kcbBzzhnjnhctinyNeCJj2tnsyeUhzvvgYe2hAyQKQwL1gJHqfTyb372RpadSrnuCs52u1edz4Uysf8XSdERk",
  "key23": "2JNZa2tnKyifv2E4qYbVMUT3tsv7AcK6yZn38K1rnBDhE29nyMxLmNvq6KryCWbzVNFcVRjdVToPb78rptXNr6BG",
  "key24": "yF835vJLYejrFiU82GE2GsXnQ8b7ZWrTjA5hYKyFp8Mh53KrcSeX7VgzNdJQ5YsA3hHoPxWHaL9kaMZKoJwMd3m",
  "key25": "2obKNbdYFcSuMytYzB8jMCXyuBBjMNEcfMiU3mrtffv2K4XRwL5eJsT1JeBjx9oppnd4Aq435d73a1btTcpgwFA4",
  "key26": "2QmFrgvW5U695Pi41mK66bsEg6v8h9BxpAxq5Fmr4N8GiiY2M8u8DSY9R4kW1PwVzRSp2D4XhBZ2hdHP1BmhhR4s",
  "key27": "5J5FWiFJjcFa6VD6B89TPGLG932Nr6AVPbpBQYQNQy3fEVC4WpVMwz2QHwyUm2EPQ58aJdcpYDUPzWFC6ZMPqPH6",
  "key28": "4ic3wdn2NJEVLSMoZWv5NGzJ93xRYnVQ2ezcKokPfufG34KgPHKpym3yPjx1Cw7pKMXoiu82Hhq7PmN6J4GrDhJ6",
  "key29": "2x8cx1pvfftkAh35TFaC3oQtCcWGV6DpxdzMQz43c6D6bzAeKrnVz7ca6qzH5z1X7ve621pBjY8eL6m7SyL4tvAo",
  "key30": "4wK8wDpsn3JCyvdPqDVxM7KdmCexPQYta6EbVfJDEgQqYGvUjywtT156iEosXxmBLkwixUpWLYHstjHw4PQVbZEa",
  "key31": "Z98KUb4f37y6UPPK9BR1PTtuPD9Q3HF8KU1W9xpnZep3sLNkcy2qWnwaW91g2dN9kv4aQffUBc4461M1bHjpjyq",
  "key32": "2wAgApxuN43wCmtjig9MqA1gQYdEGwpTcLz7JNr7qQTeGDywyGn1aUUQdTCCu45TZaVn6ntMWyWgkZ9pNog5QUrz",
  "key33": "2B5BsPGYDNGPRfqnzVcGuzfrzdEA7YjMypHUSySnEgLuQwAewFbTAoZA1Yam2HiECEKUCXVqnVNzfv8jkX5dwmtS",
  "key34": "3kX2fKBnC1kEKhLa5vMJEYrHXJK6CjmTfVRuimmaUEknnaXBgyF2NuFGuDYL5nWmgPLgMcDxp8NwxXp3pmLTz7so",
  "key35": "5TdztNvEqbQrXJNa8K45s9UtmDtrXKkS7dDdteuFJtxy7waG6dK4kKmQMffd5kTj16HxV1VhwgvGbS8EVQM7tkbt",
  "key36": "XRf2oMVQqo8FvxCHQvvU99bcVVSwmqcgoj5RSKQsdML1qMbrxt43QcAR2xn8mGJkZ17RuA9W1bTt6tw6hSTqjUS",
  "key37": "5ZvzsXTzjfbKn9WCbb4KFi2CMxWATR356GjBEXRc4UWnfW6HKEdg12mqwZnq7WRqVDzbAR34KotkBEqeuDvDWokL",
  "key38": "3A8SbZbnRuaUn2J4i7KwcnRcBWqRcrGBjmSQyGzX2h9kearnYbfM1njvG2hyP3bb2KJTPXbHtK7RHqYs8m8jJeD4",
  "key39": "2hkSpsfwreMuWgi16J2tq99p6dkeSKP9mxfqEwbMEzjDVHCN7cCSqmDDsnrHytjYuD4uUWcyFTq6VMEGr2HLJqr3",
  "key40": "2txxj4wRvuxti4YPPDjGwrsVwt39RcgNszFDEPkeU85mGdvUoZ7A2SGehND2JKsXWY45kvRTqgRRasfigyECPde9",
  "key41": "5PUE8dgRaBTcXHtAHxmWGyCNCEmTReCF4hqhkKMBpFRJYtbXB5Pk8CENaoPD7AU8oxjCNjz44e34L3iAX5yMfq59",
  "key42": "5f2zH9XW7rJuGhTtvu4gzPiR3c6pQdyNzu8HZX9DohJDj4QEGrZb4Nr1k5PkaVGq4BreqGoHNmuxL6EUt3KdZLBX",
  "key43": "2RHV74RMDJpMPopdndUtqHNMuKcrZKXa7j9zS8hfqNXAers1UumaAUBuBXFStBThD5ad95JqrKQkguCyrsdvmoCk",
  "key44": "153in78R8BjPHig1nDKpKduEEUJHyjKZau4FKBRUuNkXBbxjfqKKwsxJwhaR5JfeJ2pSbsgvmYvfjQmGoAJcEn8",
  "key45": "4p7cGktNLBVd3XBf1v82rK6T8zpSydEGjqofndRk8rCxyzc63bGJbysUZ1pRyGp54YEgupC1mzYn3hVjE2S1NdKY",
  "key46": "2pvdpu1LFiWFpKK6KAmn2YFKANmUbXSV4BRAQU8WW8tL4xRiyeTo5Bay6uRaF2HtEiddX3P8Y2g94gADMf8QwMWk",
  "key47": "3CZwa6QnYVdBoGpQN1y645dsNbDPo8hyn1Ucbr39Ghi3id3wxPq22uUJKXrjsw1GUQtrgs36KvN4Tjyc2CYheRHY",
  "key48": "3bGqHqivfCbk5mDFeXu8koGXdCMpR3HX9UQQhsABmm9uLdE6t3GwAfBZgnUoT9SHL8EpEWkja5Bk8PJr36u8fAaD"
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
