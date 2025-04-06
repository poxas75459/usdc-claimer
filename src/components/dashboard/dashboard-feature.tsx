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
    "3drpwia8s4VYzayhBgy2zy5BvDLtseqUziQx9EdpTJyuazWtdoyU9vMhEQDytCHMJo7t9BNmhjaMy4c6kfCPVToG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pybvvkZCEpUrHtSJYama9ivJpj6yVM69pr24bWfAnBvf5NQpzMV1CgNKAmC7EfDvT8fkB16j3GaGwEezQTWo3tJ",
  "key1": "3ZWRtAvyDDx4yyssiUxtuoyAzqR6ns1tjAuigX8xhMn39hWLEMbm3KXoj359KfvemETtRs8rarzEQZGcrgY4hYjp",
  "key2": "J7YdnQbB5kAHb7gbX114ztAdHFnibPHmCBacqQzBVdBENmgVZNjTjxxGFC8wD2qYVUTnfgLSfyT71phSKUrQmT1",
  "key3": "KC9MBtNv5PDFmLQXyzKBsAwDbmswECfRLYbtD9Q8Z1o2Jchgi12wVAKhmyrqDq1cv8jaLqpJGU7gqBdBECdUyuV",
  "key4": "3y41Q8NCUwsw8PJtoPmgKN4zkfT1zJWxdBtKhEJrLpcyzHf4qFrJ4oXTJJRZyy7PYFT7Lzkfchx61PUe91d6K3JV",
  "key5": "2JgJKX5cxwCAtqE5Hh8VDfgJfP8ed4srASZ9pqXLTCa6hXZPErEr8fZ4q1Rza2PNoeoAvLzfJZ6HBzMFfjZFwwWp",
  "key6": "zoau9kEsxDYezdurbwQ5vnRyF2QbPzHJhW6A6fca6EEZyyQDNqhUJPXmWhK6BWgsjvApkAm1ARP7d45MeSMYfFC",
  "key7": "24h741nrLv1BmB3RtEAYJi2P22ZX2r2BsiyxVxexDq8MFCitrJNYHqh1UpRNwuBZWQJ7fE1x5N137xyG9WqKxmYL",
  "key8": "5EqbZLPRp45E2HrSv2ZWNA9KZeAg923XF9Z3YBsQdQE8t7xAryjx6aKUiDU2dV4dmSAYZAvXzZKdiDczFvjrgy6R",
  "key9": "2QKLYSvFoJnaFLepEuCumFSd4WqDJasScPLwT6Bws7SakhBFmxjeV7M51wJgWJcFn8VKnwCvWd9UFJ5sCmrLtwtX",
  "key10": "5s1xVYt9QKNbxvoMDbN1PuFbrDzwxu31yvb5T2jApPHXS22aQKPVgApqhL4Qund1XV4dZH3W5av9a1eXhi6ex5Lg",
  "key11": "22Aymq4cBQ2FSLsUpUrj3iqsWjjcGL8FzpvC7BACVTiFq4UzDbTtTp7oKoctUWPzHVUZvhx7JoikVwNUgjhx18My",
  "key12": "2nWLvoqWT6cePW1KnevBRGazBJyg2MD8sanc7FfrsxuSqaAxngmCCK9iyq2S5XuZH69AMjKNA2JnztDNqWexMSaF",
  "key13": "8TjWWwUe8yztBbX3Ecx4dc3wgWWhjYzyu786S6bRVPVn61sBUgG2oW3ukhdNr7vXdrWXPz1gGT9u8YsvuGumi6A",
  "key14": "boVjS7nZK78udRGdfGmKrU11qAGSskFNrqEzQ5FiNBVUBdhEkxFiPiii9AcURsXEZKqes21HKfWXwZiL37vX76V",
  "key15": "5sAcS4CQtdXw7Pwi4jtjq4BwUZownfgkVpmgPkF2kMxKDribKhpTQsTRqnYG6r4vmnK5AXdQJTUJbfRMYGj52RQQ",
  "key16": "53rs1t3kGhnXDN3tSrv3dRuxdiWEdP5BYAga2uYq84ZcvDrr1jdSu1zxYpqPDBLnAq8hQXDWepnChqzv5fNMwyXg",
  "key17": "2uzjwzEJUTb8XU6NGBTuKxShdUiZpDKv9Lp62c2naDNVTZngnZgFwAwEGgMuaLoeZpquE3QMzhZL6sxWEuksjUTW",
  "key18": "jjWvtcdBzwgzhhzLY4qJzfbewRfFJ1cEux4QFeFcvPokefGYpib7r2BcbV1j2ApkMirJxTzuESfxiwuWoVMjVtV",
  "key19": "j5i4QKPKQsDKA3iuimDjStvM6xxNtSWbUvBurs8KkajWRKrbcc7CGPWHhdksEZQuEZkuwnT1TEpvB8kv32HK78j",
  "key20": "2tfWPnuB1xDEZ2LNRN6dPStS7AT8nCY1vjPaZ6A8ST37A2aAgjvCzf4G8QBJbT1pK5vZ6YoWaH2skEFf6hNwXpR7",
  "key21": "TGkYR2JuxJMuL5YiBhT4WzC2Zm3gHTD2k1dnPxeijUJ6DNtqDUHyzctqf9YanDyyk3SBSrRhau81B2hbH89yZh3",
  "key22": "33eDi8hu5BaVMqDR4t7cA5SZzrrNj2YA2iBQoxh8pdTc8stn6wF8FbkfkGEjuXFJteNxs8ErjCGAkH3aptoa9HG9",
  "key23": "43QT5oKSPqnuJPCXhMXGgNePH9oiYG7Q7SZt2sTopsqxhiUjDtzxYZDiTShijRvjUUAqSiUV5i1sUvV9zG7Xrx3y",
  "key24": "2UctWxF3FEYquMDfBSAtHxXR1keSxG4hqRC5fHrfJprMRiVWdN5uH3ineNm5zx1XzZ3ovtzSjXzfxRzHVuGbMxJA",
  "key25": "5ysLGf64L6xhhP6MioJwsA1zykzH93M8zXNq8MY9mET7CG6iUiHDUaftkDBjXZ6gfzYch1MQprtvh1fTsFaoLr8V",
  "key26": "53mQVoAGAdpSQ3Fc8ktohpKrmReh2PDT65jpKHDwJ6TTNh1qoJov4B281Bvmq53AKH1XuvLPHrf1v8erEyXyH37m",
  "key27": "59rJmLNzRzbHKQLhtDQwpXnw4qA1WiqTvWTzSTc7ZCW7jzkPm9LLYzRVp2oaUur15tMbQMsh5hxVLiVKyb8QfReM",
  "key28": "41dXtubs42hLW9HpdaCpcVA4eS7pBCed6E1TRqwz611AWiTUPZ2zR9QatG87qhM48WPGWsRhJgPs5hvWVE7e579y",
  "key29": "5WbKhooKXUAagv1iGD9zb43w7p1bAg94CePqbaFS9hL1YotU4UBcvsV1bd7wxPaUHQ9hwzfwnTXBwpqCVKUcwf7E",
  "key30": "5qn5AdrFrqUTvctkeQ2snxkLvUWqtWyBThFLVhoZPxzJaU2ZtsCLaqoj3bF5UCEpLHDJnhmguyNd2r8Zyig3DC1v",
  "key31": "mxZUP4ekHWeHtEC4mj7uaHL5Xs1XCtgjVgM5NyGwrmsVf7qkLp1QsTmDxtCykbEFyp5a76WG7fx8dFKWkLaCYkv",
  "key32": "W1HSVbS9ewcCr5xNvV7VMHBBfGzkbL2S3j2i7zejLYU5nJDBgpGp3fbHPuMZ8RuFFKkABTi9qB7CHmU9HhBeHRr",
  "key33": "AAxQmifvUjAnC5NWFBa1gbrsVavVZiosoqUXex226uoZXjaXR5dsVc3mikjErvvM2simm1ZJN2LmAqWyDjYjPuy",
  "key34": "3ZpYXDEtjRYF8VpJ2CxLx88cBC3UthQkSjxM47BBMFe1okhqX84ewHdc7jBXzGmB7WHtJFZSrTUiFrcmjxrzSD7z",
  "key35": "2dMtNDRtQgo9xQzYYEuzLjG8bzvnMjwojrpCNPJNRW1oVdKdpkv7oT7wvgLyDWj3mXZwY4SSYpQWrbZc4Jx771yp",
  "key36": "BuSQzwD1jTfgXuBYqDh9dXFm3gPSEVvvAXD8i3rwh4vcoWtFbxPPDSHJCJpEwtwPURHjUvXTwm4awGUuzRzfsak",
  "key37": "379aEZbrRS34Wb8pztii2BHcJ7VgNGYzraekNJapT345JTqRPHLCADTm2kepEBhA7eJzkG5kfMAGekzkBvyTdC3W",
  "key38": "qp3DBNffBA7QwRZyU6wHQnYWVxXGYxq4BLAHMJsenBJCgXEoPJFbAuY7xJPJdUXJJMFziQCPFcaBJxVxufLuMHt",
  "key39": "2VdTULLfA6NiWXFsGVjDfPFNpY9PR234eKqDwWWYaWkehYt6kKwZT3GFMbchR7gfonwFEV6bFj3LtZrKaWfxb1ZG",
  "key40": "2PFpCjKXHGVbAndrN2BCtR4in421gvsuGQq3u6AS218vT6YnKSTvZrHGhcEbT85SfGi1VBms2jV12t4BUF4N4Ym",
  "key41": "36eZbp8wxBJtc2m7VvcWsdFepCjQ6r68DsxFWHPEj29qTMQouNXKt18Zw9udZcfjo9tQ5wH7moeApoBSKNM1DjJM",
  "key42": "361iTXeNrha26mWVLQoX6DWA8QDdKp5n9Vp2fuLpQEYBXnNGcc29qfx1dxysAmDMrbBTE4xFovqx15FVcT7Fu8CE",
  "key43": "4FyzdGVWT5acxXKc9MYBcQFD92nwriBDFU4LrHXaUrYcSaAmzTsnAtSQwrNfYaYPnWKWVd83GMYTG5BQyuE6EvET",
  "key44": "5QPb8Wd72ak8QEjKFhrPHcpdcE3V2RuDEPYCFRkkScFvigp7wrtUrtR7b11b5VvtPUoDBibdJvEurEjjGGaMFXvw",
  "key45": "4k39XurmqY1jmAsNPz74CcF2HBLj34pr1MWay3MozxCrDd6SC8APRDkBzYe9ud4J1SniorVvviHowPWZyw6E5Wmi",
  "key46": "3qJMkQqtqxDPJYXCgsYEy8kniktD1CKxpAV6RKgNZwqkyBqV9r5gJDxJr4BE3rJFo3GQBydrtVcMrBCMcvJFp44b",
  "key47": "5WVXP9Pe8yoWJXsV9rNsFohygNVSaJLsQm25KXQsSR6RKxhL1J5wGEUwEcnjBzENfYYCMkEVeyGaAEKPUgqiUxrb",
  "key48": "3GjJjSt94C839XJPLDjXNXejPB3uy6wyPhRt64AZiQq2v7fnF8KFQvUUscPCyDa7yzzjJ5bo6ihF7MeQjQqdWmsd",
  "key49": "2HQoFqfEGm6z6JgkVuKR2988GMFbuuZoLj3e4weuhx9wspAu51TNxYPW8PuSon5jK7g3XjV4p8BENHnUGvzUAi4r"
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
