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
    "5c5BzCx4u5xxKCRuUZiyhHXhyoGJE4rVBYnbZ2sbN7TMhjE7uCSwLKacp1izpf5Lfjd2UYNkcQqwXpr35QoR4WLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tRRfbaPzXNQnF2m2YQQ6dEUobygLtQLbsk3BCfnSZ7KrM7FyHAHVarqzbthgNrRF7jNgXJ8gQvPgXja3JaszDKB",
  "key1": "5VZsdznFYgc7srqFbKmj6T2v1Y9hWcyukkuHcQsVgzv2q5aZY192saKbYPW2nUoi7na7Wnod72BzhAEgBqv2EBrg",
  "key2": "1ixQPE9L6tTNXiZJUm8yfwCw9dtzhM3bVxtoQcLffZmdSJe3naDVdrSnrDhSWF9rX697fgFpohY1zk6yZSUoFsR",
  "key3": "UmaXzdz5ymhVe429PUFBZkz71SfG8qgXHto9c5mkQRygn5TX7Ho5dc94n4GxkxoUK8z5iNhM1y7sb1ZaQ9AvqDU",
  "key4": "5WTn52iy9XeS8XmbAvyqSSbfrWPAZWuBhEfTaNm7g5HazUwoNuM3vKC3UCV45athySPLxSM9JmkYbbuqtsnupjqn",
  "key5": "pngVLv3694QHpKnStFRcaGscwxa6o4dKwrNsRiHMJVJF7nSEHmYU8CjqmR4SHRPRLydLyAYmd3rCXjPkRD6koQ3",
  "key6": "3rqznwoyuWHtDxXux7r29CEsYC8x4hdLyDYA4kRYkYWbEFXVwmrqcHUUpXyM57jWqFXQ45m8YS359s6g1oRaDw1Z",
  "key7": "5fW8Emu4nfigQ3DQdGgUJrFESA3PZT5dUCyMrrT4LQ6Va7LJxsEeho2mccuiHw7ZZ6wwmVdvSuNoraYHTtaYQ36T",
  "key8": "5wAK1VDMWurNXhafBgGBbck3qhtTiTWuQunfFYmJdbe94m9PdpTTbY5RokxicyAd3porh592Jo6gy6Q63agoBesy",
  "key9": "LsH2BAdinQF69BqC5YqqTLpsK516mSmRVJpxrzJuhDWWscaNKf4A9ou9uA95zpcDK3qZNyXevtUzUNS5te7k35y",
  "key10": "2tc25AwywMUwAgFiezrjqo2NiquWu55qTBvKGFxeoAb5hHBuWVkSQTqxS5sCjmYZ8pFUwYvMYDFgJZsiuFQShXEd",
  "key11": "23QPSbpUjqkNYbY9QmsScFQSxitLrWpCRrP5Nn1uhCPukmW2LYXNwVcbwZPE5npXzhoULyEfyjp2g1u7kw3t7pF8",
  "key12": "4Divk1YhjTMdVeFZFAngdwaD5JuXiX62FB2Ko7dKDTrJrScCKJFTEdLUPxXmRtcGqRt8NdFqp1RMHxq4GVMXgsqG",
  "key13": "2MxDs4RDRZbqLcFHXNe1KEjP86XBbJJQycavaP9ktYurQAkSWvrK1XQZYR8QWLbcm9bWe3yiQzZPNvAWNnpo2rSP",
  "key14": "4kycgr12fkFdnL9X2RnadNREoTZMQB1zPT7gcrBhS2SsGC5CcePtsJCA6YTLvy5DGFh5UvkgMpbpfHBnAuiEesid",
  "key15": "5xWhbHre1n2B4aDDDC9REYndVjn9X2jjqZhT16YyT1aRExadgMQiqrRWMGurtg8GPzDmFD9fW9TwztZznwhypBwx",
  "key16": "38rPazvMQ6inZT2HBpzQJNs7LYihYJZyLAY1ZRADFuRatymZjMCf9apQaCvdvpd9uwknBLvCw8x5id465JBFBUYE",
  "key17": "4w2CvEKQtn7ypKDKSaxBJDXqPsiCqhRNguJRpuiofkuUsbxYYBnLszhantoA2GvVshSGzo6PgQTmuHZLa2XGck9B",
  "key18": "2SU6ynPvkNXXmJLrzZqDsRH2BftQ2hx7z7asqjDaNn4Nxmx2fDdmRrADEAD3famrQ8NTTuPaChbWerMyweRthZa",
  "key19": "5XAtHd49JkVNK3RRcnPSrUtCqx9oMdygjLrkcyDZLtCfHRr6Y257Dt4ahwsE1A6uwFmacSuzuJHy4xouNrZdP4NS",
  "key20": "34zsLd9DmrxgNbocKnLLh3VeuyWCnoFtT2BXwvkNHrE56E7c1bSNs8VKjfLzo3hWGRPNmtUSgqcCBAcDMxpJJDb1",
  "key21": "2i6CHV9Hf9BCRvQWWP8w11vfJYZLqnNrXZpsrvu24mQXCPS6dtWzDApr9vepDwPQvdLgeR9UhTWHe5NNUJfe2Ano",
  "key22": "4Bfwgwa1i3fZ97nZG1qkyNmUs14Y8JpiDNXpbBZLECSzLnc1ztFYQeNN38AoPgKk8ExgRHXkAXKTRmKAqjy8Lin4",
  "key23": "2Re9LZPUHqLAaR9FJD2SAfqhnaU8yEUoAgNmdvBT1SrQRz5EBP2pCuQiWWvTdvRWrUGqom8Q19Sn2sd7Cy7Gnqp9",
  "key24": "92kadTbhPvGtCcqLjwwzvGMpXPzsmrXMnWmuneRJAk3fmQvBe8Nu4Z9FQyctSC4ip91UN5Vy3zB7qVxRzEK2RU4",
  "key25": "4aSYXGQhJiDJCwf2wySk5VRgbkA8fAasJQN7C8srgqPeWztoBXtEy5LuHzjCPHBE9ML2qw5hz7EsFu1W58XwVvvk",
  "key26": "4sZL3YaUWKPruN848MM7CASgXDiEQ7i4dfeZDEjJ7vSehSHwEfCnTsiNhgDUvpUiGSYQHYtuHjcGPFjQwJDpP9KX",
  "key27": "MMN8WUCKsMoMj7jD2vkArD8U6QvFYmjfiXNX6hheLEjxm9WErNigqzVKWrpXc2g4PKcZx3dwK6zjovRiY3jesyE",
  "key28": "5RFB52RvXzL2vcKEoimPq2A6yJyLWb2a4FEtFWkmfNXHvJ9ZpsJWxLkRujyeLC5ea7D1t5sv5zb6W67JpQGMy7wX",
  "key29": "4WJt6ArRMpnjYC3Fm9XsnZ4QZMA63SAPxTDL3oZgkVEzKczU1nbT1DnVPDrxGCWQrBKRXeBjtVAut4omRYM2ykkg",
  "key30": "3ZrWXAuYjdHZVjKAaLYz132wDYAZgwvarU3wX2TmWyehkWsQaPnnNCHknSco7i9W7P72k8JBSvaeAH5d9eYJi7f8",
  "key31": "2xrgEn62e4LYJfzEnZQyjvGP5QErLahAFXrf3WP1RevnoHubzxKVQ6riLejLJoX4J6ZHPfSTAcsExMRXhdqWAbrf",
  "key32": "hwNhG56TJVuqmb7nBUz9C1JvtaqsGZpUKfNn8rEVdvdm54F3HFzw7E9AifmADBkH7qsh1TZM89CGhkcPVfXdPvy",
  "key33": "2ZYa6dR6UDm173fDpQxzAobJDYRREMe9QnvD8CUYDQDMrpn8DTksueMqSXz8Bosp31uLNid7AkuMDQZ2K4RFAVBZ",
  "key34": "2hbNRAmYwG7BH5XPv3E21eha6ZRz5dcPip7oWMtmgAnZz18afxxgY8jdEVjubvYifee2NWps5WFqXdyYioBZveUb",
  "key35": "5jNGY8UyyW9yxxdt8kNHs647hCBRx3nVUyQM9BcNDk9BPEXTc5gNBc1UQfp6iwNvMfwRDEedqe8F1Q8aQzUQKVrK",
  "key36": "qZEfNxQj2AyDS2wi2vq3fCLqxUHgGVjoroo2WJYkqD8gvTH6jNF43eiHxfc8mckVGgFDAv5Qc1vBZGgYrJeNmQp",
  "key37": "651kDRZQEPoRtg87BWWpqkUeFn3zYnRa81RzFqH7qQCi2aUqu4QWvn9mepu6Hzq8jgRuRZJh9rcaTrooNhwVzTVU",
  "key38": "3jvXAnnHXqDSYgS2FETbMZTJ8ooX4yRbw8si3g3FVB8X3u7NhUdm4doRmXijwt5ysPcLKoX2CV6AfjD5iGcX1WMm",
  "key39": "5bqvKyRpuvFvqnCB3tXeFi2EPrYcWfnnc7DNfpp8qRV3TTF9aWsVUEkiMyERvjUbrfpngZoTWh4gJci82QFpTmY4",
  "key40": "47ywCRN1W2BLrygsQq5SjdxuQBRVQjk6dTchTGtNLuHnxZwP5uRZMSRAKdRkZ9xh8gN6khzoNASmbXG7o4mkJb6z"
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
