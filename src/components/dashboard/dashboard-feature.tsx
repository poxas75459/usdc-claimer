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
    "PKUS4nbHQgiK4eZVs7a2FRMgGgz4uDfHrdMVT5tdXFrfsXFjMLjWLjTQU8ZdDPhCEsEmrqBBFGcnn92A4CXqhUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezCfBj2YHPtg17s5FUXgzZ2LGVB1kKWzQygjXzGmJLFHbzSvP5hYem1ozTLhiVH5bAwTRcS1CghLD5o916YeurC",
  "key1": "GxJQZWRWQF5b3y7ZQgT2PPMPA3EP5BfE9WQAAfN12jDeTPHJRoY6A1Pnd2mU3fTxzGWYgUYGTPNa3TF4Fv7b19Q",
  "key2": "5QvfRART2UGwK2HoHerNmWSZT4yQXQc5mVKbUMNXkeMwU6F4JJUsHt5n2AnqyDsudpGTaocsmWWGEJEutg21mawy",
  "key3": "ScFkk3VwSadBH1UQ1pu1pJQfB64v2X2kpMjkzcmxYoeUtFWk6wPFFk6FdD9u2XfB6v9TkV6KsWjB8j9wpnzX9NG",
  "key4": "3r4wwcymN5PDMzcTB6vyP47RYHMgv83CHX2qPizpSNXVWXgd95aRHrucVht1ED2q9hjvwLwken9UmD3tEAU9p4Zn",
  "key5": "2QC37xA5RjMCRNPn7DtRXK8RY7i9QpkyzekYDw6n8GiJhtE5iabWsmfps42HVbFBry3bRJr5nYrRz4DjcpbDwdzQ",
  "key6": "Bu2k3wSmRuPES9FELU954w4nwTHfShmXLz3oNbDxx6ife7Gcft3DbZgsKPdttAYCyuvEv7qfcW5z7R9B6sVbdyS",
  "key7": "2NTTLbJvptkgTPZu4QmFtmsoj3ZDCQPQeAq2Ui2xbK8gL2pz1GYCqggdRKMSoXnLzdf4KedPzjpAnwNZmU8u2rwb",
  "key8": "5EWTd32jRsqDE4kUTZB1AnaBkw7T494pY4yfDAg1FfzLcnAgDbn8UugPtaUAZeJnAcNWmLGaa4M4bnXBLmdEJjik",
  "key9": "3yzy9HkDAJ9EmbwPRKXFpFCsxa29i6CTPRXoWKhJW4hnHsnabHzPg6k16xk253sLar5k4CfLckPfdrS4SPYx4HoJ",
  "key10": "QeK66TbKMR8Rkx5EFcBtnN9fFtddcRKjVozvbJP8hxrb7K7816JXpUs8NZKV1jBGRN1FzK531owfA5bGAsE2vyX",
  "key11": "55ozWh6GiGN5GmjfNMKXJEVGs1fbCMMsb2Szjx9Dmrew5pnH51C2PtUzmNSUw77S9ahrX3DqYm1etGQzu9Dc2Fny",
  "key12": "4CVYWV6B93YUhQ2pCci71QGC8uPdeMx3BuenDD8nDo8DbP1cyf3HzJc4dwjhwE6j9QpUgdqt6a27skw2vVB35Zma",
  "key13": "kL5y6Ty734JTn8dgGjwMcPk41SKqppjmL1hdQYdUs424vy6LyUN5ZytW2wxTsMKpM75F95CXpfsp7pjut9YrQoi",
  "key14": "2uxgmNjn42wpsEf9zWV1dQF9CQDBNgc5q6oh5F5E5DFs9mAF746XRpbR8VFiPkdyPsjrAyzhbWFradHjV6VjrdpU",
  "key15": "52Y7y4jRoEG4TK91L594NSVxp4Eu9hcMgrbcofuFwanb1C7zFUX3hAcUnuuGiQ7yWHG9cDWx2PYS1zrUhfV7Mt9v",
  "key16": "5xYkUez7wXCFKn3jbcwZhVKi1JX9EEyEXYWTMP1CLZ2766ATJuFoLW5qdWCQyzFhQgncvddWerP7z2JnfQL712XF",
  "key17": "3HpagH7rkLr43Evo8M34JeAud6ptjVUekRW179RzgX7kgmeK1uxKeEeiMDHHx2BCGN2wVby2xuHd3NJ5AqM8jh71",
  "key18": "afmBH1ujehy7DhAw9VggGgnD8MMtzPdSLqV2QjFf76rA3YEW1thPRZXEHeD7rzKS1m98834ndAebn5nHNmtckSy",
  "key19": "4SHsXys8T3LfvEY61EqqpakpobP3fLNCev88gy8z9B6Wz3aHPKv9nHKRXS4rdnC2Gj2VH5HuLUNMEigr7k7YqVL6",
  "key20": "45Ja2h5NV1gAScXrjnRWjDFX2T4MQpNYUPHN4r4HYFfPQ7nSTV3Pu9znvzAhRLMYjhbCDrpA38QQvFjAbvLeK2tz",
  "key21": "5fHHJ49tRugW5TrqmNJbBp5pqDpzuTTH9HDq7VyvnKV1Tz4iLQu4Fuqw4oi4AAoUoWufJ5KqDx4j2gKwrRRCUNhM",
  "key22": "4CLzLcx563zSxtXkbtBQ75mL9VPfmSirTeRrEj4BG5pQu9imu1958mccW6vDGGDac1aMKnLhWXdqVoDz8QeHqEG4",
  "key23": "Li8Z4CCqPdRSJSjC4QLxqumPgJ5GRNeMfVV19hux4ZeCQze1ebXrBsNVPAKFmnBu7ALjWBs7oVsahct5sEEvWKY",
  "key24": "3EKkh8qJsYnBDLZdMEgF28mZGQzqaLS6DUrudWnhZ3G2adH9Y7usaNmaZpz8wkwiCVZLypzENkDuoXno73ets4gb",
  "key25": "2DWiZZiJgHSDGXZvrQPk78oNei16MtbF99uZage7SbMYgaAbCGGYV363cXMSDx3D5QmecKPM1yPSm2vcBNfRuyiD",
  "key26": "2FuUJr1rY75dVsfS7MStUFqSjodQPAQPWNHXAqmx4aF1ZHNpEKfdKUdrQHoRPYAiVo5SVC8GxJLKjedkrkyw9HUz",
  "key27": "3CaMMGfmUfFmzD5UJFEhArTED3ERFBKWE7gc9BvzkWxbpwzfcnpej1DbkmG8cprL4EvKu97zB4macSXzG9QfoCnU",
  "key28": "5LvYw4oXcXJHtNFHPeupPn2aRd7krsxQt91qrkiFs7du7sNf7PEJpatxYCmW6dWHT9hnNPUEx6XZkZz83gn7UKKs",
  "key29": "5PMb9R5iWPZzUAywBnAruNFkg43ekUueWB6eFd5UQKcjqUZ6EVkiiJ6q7LD5DT1C7jUbHz8Cb98jCQTnsxVSN6em",
  "key30": "4hRMevo6pfbqEmaQGYaTqEgwV7fcwoJLN5gKDV43KZT2jb5cxtafnxKpPRfW2PYCyrK2dm5bVRfsJ8KnYbAUAqnL",
  "key31": "3kAdT6HzwPgLxfKBfGRDmAH3ZUDdGhZjoh8VevHqiwSrpPMVhSkBV2igwbxfd16ULaSiBWd4CDmjkfNekoJitDfD",
  "key32": "yhvYugT16mCqpnLp7r3BEptXjf7V4Fx6zvf7SPxvjHE5g6APfBT6HDxUJoVJ4KzHdy4uzxsWLZSA8UhcqzkwAGB",
  "key33": "4A599z8iCMVTCLjV6oXCMLPCMwvfFA3SUz1tdRhFyqRSWaKcQC21Ejbr1JCKfmyUnNBfRCVnFsr9end1D4Lqg4eh",
  "key34": "4h6YDC471yBjvKEufv3JVEfSKeV2yNnZjbm9jEtofzPqasBzdUJgNc7eAktMvnHVSkMoNRvnZVoLMhCZH6caDenY",
  "key35": "3wZ5fSYqvmnnDDBZnLKNuy11j3KivdcfHUY9QbMmmJBqWGqVT1o3ecoCiEv3VWxZMTUZV7z9WTwXFZpLssiu6K7a",
  "key36": "UJR2pqXkZ6bcwsv4rQUR2ykEitFCPkGvrHR6pqGVYFaicZQ3pVQrXcaZ6pFKDvSvWkCXa434FF9rG14YJgB6bN8",
  "key37": "3xtiN9FcdApQWbpnrZJr2K9kHnbBXyMMJ3zYHcJT8w2usKVJ63HZYJ4ywxtup6UKGf9JKFnJqyXonU5s4aZ4rzzk",
  "key38": "2woPj4HfpLskUgxY89VJSzyjgieL7CJVEQAyj6MDe7QAVYwUbEy2MS85PjomRGfhqH3BTPLfCDz1QVkqtXngA2Ux"
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
