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
    "2BA9EPzPRanogNQLeTG6gnpMafz9FwYCZJk12XmiW53tba3jhVdS2f8MqPuvgp3HVAVUjBFDzzWEw2pGCc4CSeox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PTpfhqS7wcy6JEkDvLhDAD2DSNezH9o89wqgLKWvak6SfsjdH6CHgdrQGEpAPFY7B8rHxiSVNc7wYxKhqfGwDg",
  "key1": "2EcpH3zc5aiqVqW8VB3m3nyuEVnHVrGgMw5t2g4M9EtvfesLvAUMv86aJMDApdkNnZH7YFdCKxhShk6111dNsQw9",
  "key2": "2wmaytxLoFXEpTGhjgbBMP4xc3xyZ1RgieWSVNqRiAjvF9EX8RcLcVd7v3xKth3KPdmz5axQNf9bf3kBgkxTAs7B",
  "key3": "3J79abX989jNbwfRqcojath3VW2WSms6NgXFYBYwQ3oD1P8dH5HHBpmj2LsyYbAiMcRPKEAqs6EGWNmB6MiJHUXp",
  "key4": "3Y7ePsPJHKQqXNjxTvy6szitK2d2kdegFAaDFJC2dRSEHnq3uP1un9hi3bMovFscDyZK5KinSqbKErQNDZuR6ZKg",
  "key5": "3FdUK17anmHevivVoKWLSPa9ht4v8Y9LBtLtz7pHge47gzVDrWDNWLRdiNcM9X93CTX1NJrT4p1VqzMsQRCFEoAG",
  "key6": "4Pjgj66RaoaYmm67oc4qUbnPSxxBu4CZaQxGodaLsYrQLT6iaXcgteD5zLqRwh1TKwhVkx5TW9Kod1NqJFfFa6Wq",
  "key7": "3tstA4ma1jdwucCku75sZ27DksBWx5bP4k2Cgke8C8PKu8n8vTrbhDTjkiEVdnRtSUk1EXswMnR4xZMb6YcgoJ7m",
  "key8": "4YKcpsmmpJiTBwQz7QT3z3z79ndij8cJMwdmzNSK29g1dAzi5jRsgBFnFckgC9JgzuV2QXKDifaqigkLn3dyguDf",
  "key9": "5q7bNmhswReJfHfSiGYSsAFsGSh1mqEEkBsovrGEAKuNaMGM6cKf2u1dQpruQu3QfPA8WW7uF4HsVEyJeCF9ddzb",
  "key10": "9AnxVkdLfrqX5vpy6fPzvg9RvEKuxNBtNf3T3B1iusfcXAkgJSEMn4Ran1FAiEx1qeUW541RKPYuTh4ZT3Rs91K",
  "key11": "4Mh4ciymxNP46gvzUgr6d8d18irrhEzmH99Qmx1wUnvBgLgkLdQ8LrAZ3uXciLjCrNXE3HffN21SEJAeLpKMRhuH",
  "key12": "1bY5dwHDMfpsfsRa6k88fE8u3DD8au5faz4LTz3HNsjjW9LK92iAe5QZLTcmvueTbpFjtTwCN56ucSLxNXz43Bm",
  "key13": "gySFmTCNphvLXR9X4eicJuLsebVDq5BkrWQ8HRPhV7y7F4DUMzv1Fw83qjMvPwJze99k53NqeyYCwK26GR8mXyg",
  "key14": "2p8Efk2cgPW7jzQ1vp3tG3aeAcwHKdo1PYJQSb5aMwUKoJYmhTKe8LzmoHGcibupsfSXXLZv6hSy438mc1yPX16R",
  "key15": "3BWXjGcWFC4uYBVLsM2Q2qU3ySp6iE6YkULTTcccP5Yu6VTzBCCU5ttyvAZbz8WcXJAHEwUdedkRdkhwXav5RbQh",
  "key16": "52HyiU2wJniJgdueDSm7BVKzhfh9GD8XrKsh25YNN1Kd2hUG2KCbV7C66S6AaoGdcVE9Qvb5cQxXSJJZPYkdwpw4",
  "key17": "4bPnF62wPiULXFoXfgoJ92Tnkjkg6FoE56mjwUGMcDvq2c26RQEXaUFcS7ghVn9cv3ix1gTaKaFTTUzoJ4So9dDP",
  "key18": "3JmasXQcvrJkfEvUX1K6LciDqSvUqsKESLPU6CV4zXNctvd5JpRKPgV1GVB6qoApkmuwbDQ5QxoGSqzPXizWumoX",
  "key19": "2MVm4AF9rLepnsevoeCYyV88K1WfKatCr9YsgU9VUzc5ExVvYbehVDjj9jwGdNRjFLLegJ4mpxzw6nea2UJyC49K",
  "key20": "45vLHvkf8be9hy55Ek1qT53uKmmzL7aztMiwawYVJBPGXXikJLUhimgnmSffmW5LSoFcsfVmaUb8pafqTKm19pny",
  "key21": "2J6kxoTMkt6BunEoN3M2fkYXqCpQ3HQiWs2zgfHybAuTBNxujez8tXhtpARpqGdE1AtQBrRAbZXZqEpE5rb1T7r1",
  "key22": "5hkCPAVGqmCoxcsCbjSSWouYwrMTXZCdJXDGmSieaTN155PQzof9C8ZKgyWmMrHi8wW4711F9DU4ymNGdPVdVcPG",
  "key23": "kbfTD9i24vHrYHwzCN5C2kFxwtwerTs88rMAwkFYE6XXXR3juVyd6TrmoJbRL3QyQUMKPswsNbDxBCYA3jZu775",
  "key24": "4C5o6DFEwhC65HpSmMLNNLsfaQjgLzre4k3pJcakicQGoWD56tar18AERWE7xzKkFPekdyaxqSx7YaEtvs2qRHDD",
  "key25": "7YYYBuz9HYmsYNWB5nhx8FWNTeHU6Y1wLASWynQeTjKa2J6fSh8qyvTjLAdm5Xy9ybpJwqzbfpfKLN6zUk4eDg1"
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
