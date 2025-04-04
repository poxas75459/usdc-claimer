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
    "PgETnbNd8HS6KSG38TSnr5yRGWpH7VY5nPXXT4rdrodhDdrGgMCr2unHH91SJ9mX4tB6Miwj4HqFsoux2eSsiAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ANxsYZHmjHUCsKihEMiS5eXohBrT5bre8J4CpdYFfRHp1weUscwanAcw3gsv56aMaRryBkSznnuSSQor5CyxkVp",
  "key1": "VcUzcejJ2tiVMBCvkBWpSUnCQgXvTkYdSwpYCoeXgrs2b6nhREKr9aAx4bQ38RTsrPQ8heXvM6vvAjhFzo2mtXg",
  "key2": "6mEoKd7ovZbRAQYAd6wy4MoeJo9K6iqTykuou6obDvmfQsE3MXkDZ3mJo2Zdrr9g2Dsp9P9cUeh6aGqd24BBz8e",
  "key3": "3YpNzWNuByNL8dV1v9zBM4F2Wh8xNJyYRSPYoVfTf54mEbxEVSufoAxGQ6rfNg6DxnHWW6dbJriPnuzjqqPpvsT",
  "key4": "5JYt8v3bDzf3Sc2qHWQbMtnVHeZHLSnS1CnU4EBwWQDNnSfFBSjMq5v2SPkGPJGkAhpHB1YF3N5eTrZ6rZDtT3D8",
  "key5": "4QMdhoCSM4tvfUhyobwzjHS6KBT6QWoT7LG2rmrMheiPxhTTrmkc9hS7Ks7F9WYBjnjzB4XrWUZ9nqQQ1MTXoMtD",
  "key6": "3HXtmRkrQeX55CuJ3vVKTydZo2ib5M8RkirVnXMDBXcN7DmWUJ9UKjSu4uXdniSYVoBUjVYPgxGXHYaY6LDPUHZF",
  "key7": "49zDYSysZmDwo6dkG7EccW2sUsy8hdaScP8NvWe5W85scxjJoWFbLNd4xhAWFF91ybjLcgMGCodSxjZXgq5Gb4vp",
  "key8": "2hAZT7maMkkTymt6czfAzoMX2GPeSDNrYVjBaZKRh6EqL7jN2ihGpfHkncbt78AG1MA4EnX8ecMAyNTq3mnyz2bd",
  "key9": "4aMKmwYKMtdR2orxUp1M7ed8fQCT42TqCWGtEt7npjCzbRBUwPWpV5T4DuQeGzF51r9u26xA454h7fARb42Hqv61",
  "key10": "533JbMfoqmxMhpYnSx9NhQZEcETkTuuu8YeBKWoQjG8eD5J8i9jmqRaBF5T2ChWhr476AGfAASkQnufkZLtsK2AA",
  "key11": "2fU1rzuUPkfqr11sqnrhshvobaaw9DG6LcQi77tn1xyhKnavqCQWnP8EE1rfrw91mNQUH75KriNuJzEnZ8nQ4LQo",
  "key12": "33hbcbo1NysHCsKJbjEPAaezCAzM81Bce5jjpij4Cc2cuNjQU4B3Uq5Fo5KFkEZXheiV5NBKZFtkxS3h15c3KsVD",
  "key13": "5y29fXr4yhP4E6tiQhsyYFMiZ3AWBoErPtTrFmL6sr2kijPNZytagiqNyXT64Kv7YB6SHQVanX8rBgPai93cp33F",
  "key14": "4jXGCRk1GajZbnXPpiHCd6TxUuw6dTRHBtgzfqkBEN4P6TfLDwt3YA6B5e5fAQ1xSHm9R6Ue9P3hWqwVrH6X3EyD",
  "key15": "2Q3dAfveh5xpFATJYB4GBHahaZRjkNRXwJAMhKQeCd4UA7qHnzSRtiKZyq51zyoyFx4busRQX1g2P6f5eBW5t5X9",
  "key16": "5odptzzdyQsuB2BNBChFbzK3LFV22rARoFh8Tg7YYm6r99QA9GBDjbKCJ4cZpCcJSgJ5iPyqAyXokiG1M5Bi2c92",
  "key17": "3gEtFrAJxu1aq1355jtudT6LpH9MeMttjSxK49dQ5438xgFYHXM9yFqySKfPmufTfQUTnGjScQ8opBDGxPH6Gkfd",
  "key18": "4yM9GDjS8DF8ubZSowddn4Z943Lpxvk91KqAn8L3DuWi65Pgc3GrdXnmRhGeJxpZzn1XvW9nDTF13vdCpyU9ARSj",
  "key19": "3TisdVfES1zgQnQpdKACvBYH5qw19pkjhanfiX67KdwRDe3qbq16436bQJssqm3aRsmZG76QxXxVvWYFwjgMoRij",
  "key20": "2MuaUXoKuDBLvK9w6ddY3ygaSGkmnmQpY6uYucDQw2bgVMUBcmSa4gFSYUpcPax2uxrfZF6d22N2NRSuxMLRibah",
  "key21": "3A3wecCVLqqNaQuwFmUkhJHJn51ry3JpSX72kB1gtG9XYHaZCwD6bDhjY9osUHCbJDkHsV4Kc3hggfau7TDHTCcf",
  "key22": "5xFxWUzbGkkF32cxB6Tho1CVpCxzU71KgomGt1CDTgnStNLA7wGsD7HoritNtArqmRNVf66GiJJpmRsmJDBFRqB8",
  "key23": "2VKxoW1y8rgYqkqoT9YNGbaW9gWybDULGaHtb19ZJjCkbXEyEBmZY2q4RgNHpnhdBNbGDEvfuSqqjEBUm3KRxT3Q",
  "key24": "4sZ2N66THyyykhFUs2zgLzF9PexEgzv2eYj63DKAZ89rjQ5159iSepseAShKFreKYnDLqNBgDNdqS4NJB1kRZtAN",
  "key25": "4f4EHk8SzeRQnR6fcNbAEyTAxWwVE2RtJEZEWyQHwXaGVj9VJ9g2ajTrCNJyPKXze5Dk4J6qnDNLoqZTN2L7kF7E",
  "key26": "218P5kzfL4oXKs8kd2d71DXmP5fiT26dMP5FAMC7UYktFq9hXT8J7BippfNrNfdqV2TU7BR5fAutvqfg3pGqYGvr",
  "key27": "4WHwdECJnUqnY5RaudZNi1rFaWnSYqKccJ8Mtd4oeaxgZLLRfcAhSPXZr3EMiBFTrCUWomDRkHk8w26HZZgTaLXT",
  "key28": "4zqFP7ph1j7YZFAvCXoTW4GEqKQjBH5JH2JsU4pPsaGRc9zxjdF5pbsi1RUGq3pWanCiVnw7hA27mjPUet6VtY28",
  "key29": "3boFfs235kuqJ4ZWYdAESyHBUMKnH3B2AdzdYDR6d2RSherVXqNh7bgF3wvtHHkJ1wUAZauu2CBw9dMtuKU4nbHc",
  "key30": "3VEovHeb8Bg5kyhdKaZUY8oFi821TAcZXEXpq8fz3owiPfLKmeyu9ZJpSbev5zejzWPifRu2WFmyRBTc6SMxue9g",
  "key31": "4RvYkDKQFNUwzzAnottc4FdXUWiygWfyfAV5Y2dqkvFeY7zCoo1kRaF4wxeGmjN8TNSDT6j8fkPZnh6QQprxw5ZW",
  "key32": "GNXFwyGCW26CRfMCBUwMuYZ1Fr8f5zg8w3s7T6GPMC7AFqiicH9V3ogAhNv2CjiNyYAFHEN6imb6usePM34ZnGu",
  "key33": "2kaKVYM6AiaKjSHgMev9dmF6tqaYzfwMLbJvrGsrfVdKBwnVrQSsscZ7EB7vEfsPrWWNLZ5g3TGxgufL2GHKCwmk",
  "key34": "nrL2rsPfThGBbgjZ8KXbNjVYJuogkg4dv9nH3diFMFc5EDkUAdTiFphqCEZZTVwWBtWy9PgBbSPWVDKbKXBVqj1",
  "key35": "3a285RMAobyWciTrN8L5xwYHFnCLnSFYkqa8ScKv7hSWecLeeNvPNZSLKiFuePvjicyod9WbLUfStGSPjEVnfF1J",
  "key36": "55x3jpncWiQb6AjhmDEbXsaj8S2grK88QKUb4cE223WQVQCYtUMuntwT32j3LcgabtLxfCPsTXeY9TjayF9fPH46",
  "key37": "2F1KF5pLfMNjJEjM3uWknMSiyjnLszhd29qCXWgHXBP37Hs6Xj5cLuihYTNSQNN5RRsn3r6dbx6gUGgXQJQpqhJF",
  "key38": "2fv9SygT3Yo2RmutQmtEaCEVKZskBQHbG46R6XBeVvZvfpcTZk3yjQqUBsBn3RXWuytTN2mi9j2pnvrSk3HAz1EM",
  "key39": "3PmBpmWKRmYT6hD4uUbMkSsAzR6HtJdaQdoFgYkGvChrQax5GM6FrWCiGBU99GmjvCQknBALLwjbUDokCgYsFGpH",
  "key40": "3SjcYmtt4dWxtazf4sJ5FuSN1MRu47c9kPBCNh5qk8kQ6VHbKUKqGPTtip7Pzeaop51tB61TBw8UajsqpLfyGvyk",
  "key41": "5BxQVKeuQMBVo7oQ5eMhA9G1b4Y94wEpUgPxfjWAVQ2mA9jhTzYq9pSrPgPRE2zeEL8aHEAsWWPH5jvcABrn9EgR"
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
