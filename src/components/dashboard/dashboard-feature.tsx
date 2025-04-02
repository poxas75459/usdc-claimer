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
    "jVTs9MVwYziwzHAQZVs95tw9ykaENgokBYcs66jsPRVE9BPwpLPKZDYVY7hfJVww2pc4SUs1hknhcy53XPX61B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkHVcv2yX7x76ypjT8H2zGBRNEYZHisho4jGxiko486rHyDu28eFZPb2GsGhAwSgqmgUTN31V9eZi7NfWqXUuRw",
  "key1": "tWXoSigPPvYJt8E79x8AoPmDfYy37vp85YCsEaV3LYgkj3aAewtEnM1q3K55AHf5WeuuSXy4mmmbkmAweR4ZusD",
  "key2": "295KHYMUR1f9k7dZxvkBF65E66xpLwCmnxKmSf3fSdzP5Vu8KqEmDoK2mNrT7yih2hyGdLYMg4YnZfKg5NPjr93Y",
  "key3": "56m7vuB56BkT4z427NNuy5E3BZ5riNSgBaXTky2nV6GiMyxBynkeeK13bfu3248iRnmNYk2X6XFgqXEGRzaUx8dp",
  "key4": "4qRNy6bWnqDfkHzRCFhjqFyGxaTpV4T1KsbPV6N6RQMsFjanEqm8iDmWgStr2s83HmD5qcJTP9zackjbidHsxupU",
  "key5": "QmuJvYtVCsUbFSXD7QS3koxtRDmpBP7i3nLPvLaDqzkmysgFjb77vdGDRwGCSGbP7xfb1yFEXEtSKnTtRse8jqe",
  "key6": "W5gRtzCp2jfUVGN1pQjoquUFVMbzk7nbCAhfZyYSqy2Lvck2agJcUFuBKRyieeRAGQhNupXSS2xUgRQ5eZMcY3R",
  "key7": "39yKY6DixmG3eFjhJLf5yZ6cAHTYoBkASjNYqA4wRanjVUf5Nc781b2NoRTovFcqg3NMH4vWM7Qj79MaxR2Y6EPe",
  "key8": "3xksDuCNKryUeifBxD559zR1wzr6kHQE2oZw9D8sxZUqF8kHzYdvCDH7dR4a1drKCnmYXSiHup9giZcLpNjYoRbM",
  "key9": "62mUg8qaLM1L7vVuR2dY5pxhRRhNviMiy6ydEPi6BRNUBhVvYW5qY8b1rwJJxHivBgmvWjTonnFiVyFDaC9CTB5q",
  "key10": "3tnPhrXoKM2LERTzaFbRrDe4pwRit7Wo2sfnZjgScozNBJZxNxvZJUxteySdwBaRmPLL38JBo53jsEgNFzczeN7Z",
  "key11": "4BiAvYarLD1YcuJyCduJuekyXQ9HkE7kifpnP4AN86E7a7D7uTVtmf3YxG5cHzxdySSYFnEJeVp5qDJb65jXJdFE",
  "key12": "3hSxHzN8e3v8mw9eRxFw2XfrnfuCLZrmRWDLwVMyDK3usjqStKvnsvcUuuM27ZdjGbX7Vc6wDwE5FbvkAgahVomy",
  "key13": "4KN4cGQb8abiwVhSz6kHyvg4LuCpjh34VfPrkPNC4eyvCTtysfJLx363QsFKyr2B7Uvd7wA6pC6JXpqzjkmoj6b7",
  "key14": "2fdmVExJXYRQbJeif7RNzXh78d1oHvAjahh77Kge6Bxp4ZGDTjEL37NrTGRK3JMTFzYYgoHpGrbGWjERL3vew7hf",
  "key15": "622bmMZhNEEhWQzF5Vq67WpL3ZXhLteDegQjy8tcYsntXU9yATLKLPJsQLp8nLUzj67XgWwjBCnviwR8V4hPpRgE",
  "key16": "34o8aSiJ43MQRMxqwh3rZCFtQcpScFZiumwiMTHqDtG2m6UFQTPGNin1Gh6ivvA9tjnw1UxijnTA3nvnQ9hNXnS1",
  "key17": "Wb4rJmxpRbAnaQX5kaQD7WRbnE9BwFrj3AHy8efAW6NqAvAnKFrzGj49Rju3Rxsabnv53pVhummL1xy2YifwyGt",
  "key18": "2gEWg4Zf1WLw9mTuoChjEXJ6nktZqZSroGePuS8ZRU4xgMMfUzjLAXQDp21tpWYYHYLStpUW9CFsN8uEdko17eUd",
  "key19": "2aAfcJvHqq1BUgv1xVHhsV8sdJjD1umfDrbGrQNjvRrkkctpJf7irkK6AumfheLHmeTcHRTVSc7E6ycDyREAbGX7",
  "key20": "ttEEz3H8StrsALybzqreE5Yzjw163tdQpNaAqv3Dq7PuqreiMhKf8Lgf7Y8aUFsW8D2vU93XM6XSNMUSvWnxsyH",
  "key21": "41j3E99SGMd4uLm12vGT2TuALg7KF4rjh84eB9am8rqgGuiL27hgEQxMW8h5dx4PhqmV74gJZXNLeNWhvN5Vzm9c",
  "key22": "3BBMsjyPXJ4PDnffw38dic1HiQe6YTWLivhmkZ7YJRr5sYu6J6ZdRTMStE6gqALRZMtKPL98PFaiLQwtzHdGxQFY",
  "key23": "GXzhn9VLRvEFnGU4Ld2UXfLgW8yroySgcVd4wwnGTwLuia2KRNLeo957X9oRXuuzvCTfLmRs1mmL3F9R6WZkRgd",
  "key24": "2XtUgwRjY6DnEcaXueo4rThmQcevngH889AdyZ9yEsN8kNkApNj83BVgpVd7943288DaB5EPvMydav8W2pxuyFVb",
  "key25": "38dz16zgEt1L3FXVeiPp5dEKn4dgq19WVbjWW4UK9MruQRqyBcZBf9tDdbFjNKtZT5qVTENEPYeXakJvB8Gjib5e",
  "key26": "3cRx9eA4dtEJ2p78eoXjgGq4N7kGL1E5fPBxrDpnDyi7ttyjDAXAM9dS9d3Wqc7PKhMa3bkyt5wMtt25zf7Mw2EE",
  "key27": "XbXhuaKE2XxobBm459bmBuc7TPc2zGdSKJh42poihWkrDEX1vUXUywPkrjNuW62UM7DuZqaNCTxp82mboTsFNE2",
  "key28": "25DsBmkoJ9gxKQaqUVHCcGPBDTuLddBg386hivbmHyZgDfk8aY8tgwrWscTceLqoSemCCD6tyyfRXGuejhGeKt35",
  "key29": "3dGbCoXz8s2BFkiv1u53WYXSRbQS1rMruLF99cgpprU174P1ukqBeNNgEfFc8bKMr3juC2zBKuoJ54ZoCuvizKr3",
  "key30": "5u22QwsyK5M4Sw3d8GhZJi92RSwJc5kR9Bo7RXgt4uJHGyfTRmwVCQ4tyDZLZ4h7x9gDhufR6eh7qJjdtdz7fgh3",
  "key31": "me6HaYAwpQD9qNRvNnUgcnna33M8BwfNePv31Pd2erxmFshjXKYT9MB2k7RPQ2yYcCcsLotHamv6UKMc7m6ywm9"
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
