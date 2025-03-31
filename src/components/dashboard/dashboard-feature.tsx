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
    "66FFa9SbD78UPywHFTgbuvFhc2sMGry5gaib5HhcaVAWgc8Mpj7UdPTRvNBsSxt2qQM2uDQsXWSFbFUwiWY44kN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jse6huDSqZuFb6CvxuESVxE7aFWk3E75stpeRfcRXZuV3XSVXD4wwYETcNq1bRGm5ArDYCzQDfbgHdZNi7P4oPy",
  "key1": "5AxJAdEhpzBgVEsz1khpuwP7UqarwBDgqYuuykpBRDVZSBQASGEH6PtEF9wTB9JWNoir6hbp6BXDVnpPfm8ziF48",
  "key2": "4x2JNf76sDxJE3Cgu3MFxgMCCVh4y3Ux9iXs51wkgA8RpsNsKVMT63pomiXsfRM7PUha9PZXKwLESujsf3UZJ5pe",
  "key3": "3KDBZ58SkbmCodFbZPPiHdcpFCFSZxKVjxtQDcUbt9tpgXKg6Z8oSTUEQE4vabuFjfFaGWf9jwmYcZ2TbG2BqELH",
  "key4": "A5duDdNQ7TnB8oXvMt1Vo9AtDc5EfXzMVSj9oCPgPXofMTQa5dnGU1ZyZWhta5tW9GoCawrmkNkCLWcVSSZv65m",
  "key5": "3arGwfY6quCmvvp5cvB1eM9rKBVEGSee1u8NYGRpw83zHyq4n9A67z95geatUmLH4xqeBqSAJ4gaya5bWLFRqVxf",
  "key6": "5VXe2m6FhNT6yYcC68m6FRTUbVnp2Zi8yYvw9v7g5aRJtZipnxgdvGfeUWdni9DJ7pLfN3Wig5zu2jMbn33DyUP",
  "key7": "7piPkPzbFcEsxF6Z6Cvh7XCsoiXQEDyQ29c1AW3QV7gfoeh54u1fnwE5nWfrtoj129wn5HShJjKcDmtY4XbNFrB",
  "key8": "3ftJ6GBifh75XRjWJcFyDVJqVU8oCn7VKiZ5v2vRJajqDCXcs6RvLceY9mXHc3dUQCApfk3ty9aLKaMMXoz6ggdZ",
  "key9": "EaPDQSrnaUMKYU2hwMvU3c2rPjfbXVVzjFPPnAHnrnMdEnsKeHZd7WDqMQSDzGNPEwpPNBBD5UFqHrXL27ME6Fz",
  "key10": "S6Honj6PpPjHqwK2aX5rszEqXTH8dDDpgNFAtqJBWorb3HqBa7bXpxwqwLiHk4YKf3tPn883QX1FHoNta2mwipi",
  "key11": "3zJd9MnXjYnBjtws5R1UxcjRCGgZBfVy8Fj1s8jAQxusi2FiusJzDxQ2BLTvBmzPEgXLemHgDNgZbM84qha6UMen",
  "key12": "43msHk8ZeZM9p41HVJ39NM9HPZ7A73sPGaR599AFpU4Wj7ozPzcyeigkzUTmChUhz15ComFBeaAx3UZmuPk7gaZ",
  "key13": "RfbLX1Hm6wf7Tji9VH3JCitwMt5sDaqzwLUKcKcgzCXmG1gvjUQXopZ4EwydD7KzkZnPZEbyh94MzADSRN38eKW",
  "key14": "3bNrNSWrkrFpwPjWKtH7kn5f2EA7SCJrCa7d8B3eKLG8MKdqYYDkeT1SSUCdRKBeZY6Du3TfGvEAmFhA6FSHF3bd",
  "key15": "5KXAiFApstCuwdFVzwNJdfptvdBGQMW4wnALLViS8vNiDMdqo9Y8niXbzuKd31vNjY1BzZCa93H4AHomKrC8TJD1",
  "key16": "2ZikhLqpMZkcBrBs3KnvaDqJAhYsZNfPxnaFdxeEdKhDnmetci9EHZYWg5GqQKWUjQ2295xbc96BSSqUQmMFVQj1",
  "key17": "3JsrFEC2nPeUeHrrSa4fsSftTA7FyxmouptkWTHAtdJBD16LDSndSiMGB6izVvwPjhQNDirues1Zmvfk51ywTZFP",
  "key18": "4946rFy3PJxQ8V1tjFm2s2RtNZNQPbWQU9TaZdZkCzaHY4atvqk8NT55Rzd7R3bAcpvndXmfa4FYHtNYbKCqWrcB",
  "key19": "2K8DDao9i4Pz94rg7nkZm75JVN9b9fwMnAZgSriy95zG85VKydxkXkXqBRhmdNoLpigowyhmaHFTzSMsiNr2nFBQ",
  "key20": "61jm41U47v5AkNhv3213LdvPzM6J1pvc8oKz1voGu8VSxK2yP4mHceFuv5TRLjp6WWfQ4b3rtBtDEgPSAVCAktBa",
  "key21": "4dkXqFw47vqVPaS1Qij58tfriq9WWZPr82SxaQy84ncQFsocr7yQYmkjLZR14gF3TrErRdBbDXkQqTZ5npB8y2Qe",
  "key22": "21rzFHa7sTo3MfLHgtXSGPJxQY5aNg8CkZwETPKAQCZTsCDZQ6s5yyvtjC7N5mcSWt5RpiGJcaFmGaQ3ByRtqGJ4",
  "key23": "4NLJHdpwVH9ZUaUxr3XfrNXqMDtyxGcRM4C4uPpGfPevtkPVmY9HUDEW9Y2k2YEgZok79t9jKg53DMEk1Fg9jwSh",
  "key24": "5FgoCosV5QejL8va7T3u9z72X5X3JETFZBiJYwUnEHeGpUNDZcuao4JhANpKckydsKVJGtrkd19Z8n5cfUz6UoZz",
  "key25": "d8TeQNGTozLG5q2C6MKqRmTbsd8AgNUEdY78HyiS1F1LgXtnwttL7ujDs7rnud9XueBCcZFz8TNXrGSgWDEM7va",
  "key26": "4EGRnkX2tc8pMsm6FfsUsfrxHiboCxzZbN8Qw1TqxmB9VJTXKr64YUBkr4FsouLJaGxyLPhX3X4tdNHejfn6UCU",
  "key27": "2hhVGrTqYkMwbWPoyrSHTb5iTvijUxVupYRCuPyzeSUvVeFHrb1WGVSk1HA6VyHDJMigXAcpeJbMEVgaVWdmunrB",
  "key28": "2eX5hXd4nt36pGdGhAWoEHTznekeqc4xsihWqVwmHAEqgbDL14ZgpheEKrvpxgAjYnqUByWTttMw4dXnEZAuPxEZ",
  "key29": "3mpbWCkagCCFTgUfxHTG1eepEmegmZuFpBG1su1shsKK7fGyvCFMHppRArc85fypF7t1RT2QnxX2KaDtMKwVnL3s",
  "key30": "4j7wfv7fanjo46JUDp4PdQe7QW7k3dJwzHh9L4huvouribWpjokiVF98P7fEMnyZHoC8eTou3wNomD8h7boPuB8M",
  "key31": "gATDDSpGeBZ1Dskue3E1zKgYr5QZRTmeWsDUhMEZxpBtP2vGWQ63RkPCLEMGbNJer4d8JM85QE84XLMGRTFY7DZ",
  "key32": "C8bNs7wbzbinDzH1ZNPdNbjaWwoauJJmq6hUpBNBox76RaK5a1wPNddUrsSGy1QBkf6cFvZ95K2by6ozDpxtPnq",
  "key33": "5XwVXfa7Cwq3FbcoUTukPkXmRpkVxb3iz5T6Lnjxdyhb4QqmRNKcQtDMyBLMVgT9bYtCv9vB9VEhEFLkrR7y5AMQ",
  "key34": "jjxEMDi7Z9vLJ4SEKbWmVjFdnpMsgvst5CqCMXYcJGo3vJ8Vo2VpPv2zdgfTDLu9q5KQrx61whkaHzTHArDBQU1",
  "key35": "4pL5whGMWQ2BtutiefsNuRhsNBo4ZMJkTxnGGGSC5UyevXooEoPUHHcBtDjmu5TvcefieT96gvyCYuSVA33dChuE",
  "key36": "5NTCQ5strPtGijQ1pkVjKBZnmd1QbLrs5Dor7Kht3pEZ1hgpPEaptmBQc6SRbKMYC6BKHgwoJgZMq8W2wAqt9Gwk",
  "key37": "2UZWSJ3sW6VgikVZB8Lfk4rEpXX6iZN49oW9q795vAL9Y95foSuGY46AjUkM3Cw3sCcKsUJDuqDnHmyH9hH1qvj7",
  "key38": "5JoLcC4mn2T2Vk61WdUZ1is1F6XvtxDYfB57ifKyWKwCYge4nJS2RMcF9ohxDxow9QE8WXxkZ5GZk41DjQRgREax",
  "key39": "2kb16DBV8KK2FpehtLJDYCXZXMVR1hgSTVGgSUJNvtiE33owwMNV9CmzAkDrmUEdnBBKY9YRfZSRsQ59cFH2Nqre",
  "key40": "2eC1UdNEJv73g1eZYBhS1j5koWEVNdhdkCYSYHnKYLTH5SDTBgbMuAkbNMbAbXC1hjeHWhzVoSTxbUEvaF5Nss5E",
  "key41": "4zGNg43AtkGmJBMnpdu2Y9LeQZMcbD7iAQZBzDZiQWcBLshpDwRmXA71Ji5XNcVMwnohfYcR8PWQ2DWb3e9wAxMW",
  "key42": "3ubkX4tXxawpARTCbRW1LuJruiYSb9LD5rrq3kc4ZAcBWe2tiYy78xcbMHCQKjRqpXusxgbM83aq8pc8mh8eQ3Px"
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
