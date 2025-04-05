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
    "5zkQM71EqQGAAEkwKCWJetqqTYwQhKtaJiX4pDM9dj5iEHS4viVK9VhZ2U4Cb8WXg1Rj7igXqRkXEir5MZjpy79q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8QbHhtTx1srv9eSLtK4At9qwgLCuV3fBa7UH7nUAZRW6HjA1zZejbnuSr4nq4MbVEHaytKPPWXyeLkmdS42FkM",
  "key1": "5onNASdWxXrb8MHvSyJ9392aQiWDojJz7xKAwUANnojraCqf111Wo3qWmxeRop13h3VhYuo4YpCZtXDFznKoW8YQ",
  "key2": "HPEbQ4rsvSMMg8CWHfmVN6Sk87MPKaYswTBRsa4B3m9vnfayQUdXGEVpcucp5BCM7nFQ55H3HBkFFU2mvEsPZ5E",
  "key3": "4WHzxBqNwRJ7SoUfX7XiM3ykwMBCcFJtCWyAa9dqoGWdGrwCmkNsZYcKixcZBQBBRLamwo4tP3gvGifazkTPYRb8",
  "key4": "uKUtHVX4JhbWrhqskHRT75sTSH9CN8oPkJC4vFuCsNXNS4n3NXbNedHh1TBrfX5S2xuRTG5TuX4Xcc9NYHja9xi",
  "key5": "3dE4XZLWMxGenwyBgEP2PW3FUaUuFqSKnSzmr5NqBThCSPXFsBdHACtWRTrspf9ZgAyKKzkLPVxXpus9HoeyUyTL",
  "key6": "4KzRhwT4qmUWccRhX6RM86B6A1y7y3Ntg3duM9UXTfTYr3piyPxcm9NwKdx9kmeGMEhSni4z5WDdNQyUPzWcY7Tx",
  "key7": "2cBirFeYQMVnM9zw1P4EwcthDNvyB1krCp6F1Jhti3VuRnbqMMJJTEaq85NyLRoJaPkRAuKAjCquZBE8cLNNiHa8",
  "key8": "DFwXjVft5M5MrjhWLnbEMNHgFupdNbPCEVJGyXuyd7V2uCRydkiV2Ftk7JapX5aPfu7wCQTQ3H6nH26kAMaf79G",
  "key9": "3NcQ99Z4onbDVVqWAgL1m8WrXTgGx2GGXHWazC5tCV3EUY98dhKhAf1HNWrQT3TiiEdTmRuVMSJSupozfdq26htk",
  "key10": "33xUwiaRav6JucodUqUeSpXttamZJLKFt6f54hsHuabw5ozh1oWQkyqDhhseykSiwQFMxZGzJqf71KZgG9iQZYhF",
  "key11": "3kKqQ1BizcPTXKrMPWJ7WWb4Huoo3yFXgUMPbeUA85uExLSVnwvqwJ19hnFAvTsWdPtwC8TyMw9z3CesSjHRGsEE",
  "key12": "2HY1PvKZVD93eF9Y1reUrxtGXMmdFRb4cxhf3E3aQwNkkiFZExcx1CLPLmC14KULLGBHdTcBLAkwtjGm5YmadUMM",
  "key13": "Yn1qHKN3uyB6zj6FdtXEixXQjHLcvPCR7d5isxNqQzv9UxvpDgsex9or2jrWHkCvn8Hro71d7cftgcv79cWcAdn",
  "key14": "3PVNnHmjrtcYaFBU8Ged27du5xVQqfdAf3fqUx3DDZALVcUWkeqiFS5tJ1yMsJt3XNv5BqVHwEGnJa6JpMqUciyE",
  "key15": "2W8qF7HHMKtczNrEHFVL3hgrFF3jqpYYsBFmoxHSLnmhGZpMZtSiSQyhWJ18F885pTX7sjKE1RraWXJP6D5mYHqz",
  "key16": "3GQ44Kp5wwsgZXmuEGaz6ou62th8GdijGaPidJw9NCpQ2TCo9kz5XguFFoy9N6C5Qi65xda2xw3coidCZQZUKqNP",
  "key17": "3m2FgTudRkGEceYWFoFEDqGNsyiMEzM9KfQ8aNtj7p3HquTJE1pdbCvvnW4UNRjBWMKazdWn7Xy67yxvCTaGdziZ",
  "key18": "3mAQxG7soSXwF1LEsX8Qj4BunrbxLsyLHSGS8Lq5gJjbrD43d7Kkjpva5bdsLmyAqXzB8k36b4d1Pt7UtMPR1A4T",
  "key19": "jPHC4DQubCdrTUP1MVeNb6C2vPoD1uxxKGrD9AjbUtyFpTmzmAQhFASCc5Xez7Nb64Rqu3vq8SsYkregmb1iy3A",
  "key20": "3qsRGq6JyD8L8Gt2W2wU4en811wohA2GNC58K8nmATErjjpS5XHJjeLusQjZG2iMEDFrwYkC4UScsafGq7oiXyDz",
  "key21": "4Si72TNCmrhdmvCt9coSHcAf3ET2yinQSoHBNWiyRdVfXYA4WdKZUP9Rghmh96aEdDtehXDmiHePt7mk9dAaqbpq",
  "key22": "55gVtoZi2GPtNQtkbNRVoGaFf7hiJ25waJcn71bkzVD49qK9J2bpV6C35P85zCRQKgfxNvkQYQZvcbKuSf4Gzfmy",
  "key23": "4GtusbNb7kwQyuqVoa37QSyZgnc7v3HcioMozjGZDJF8fEMCRQbnNAgZTfLy1mLJARjmE3X1zVFf8wZK5xpX9zwG",
  "key24": "2JJ754Gwk9XCZQsAdXm3ikj9tRSvQ9yX1vWcar3sY8FLgqGhUkjtJD71hjBbLJC39tEkynzikzrE7d4cs1uSVaCd",
  "key25": "sVXqiFeXRknqZ92mK9KARsWyi7com9urWUEg6ERxdvzStfySDuHAjUMtbUrioTwY9dmvtBdqguQPfvVWJXyqpRX",
  "key26": "3w3Xd9rnuFjGh6BgmcGANpLgXDy7tZeUptneQu6CLoGYZxqccteZQvC3oTr2EDccZTfU1iCwBP6sr3apCUoMhB6j",
  "key27": "413UjxRHj8ULggSDEwsJuUwUaRDKj22HU5EmK3n6yJYvhqTELUCYyYJNfCYbuGDNNKJNTRNq4Ag23ReutEAAFVAQ",
  "key28": "3fLu6MiCJkX6EWcYxbdG42RxZ9M4gDuCunHrfKHe4anADSS4rsE4mjtrbiHNFTDCM2xU7DT5KnTjCvWjRSZLHA6T",
  "key29": "658st87gCBR9Nqf1u4vune3DKFGhYiTduRBhG2Tgqn4WFEcLY8oi4K3EtBxor1k6jFBzRdSKHjuma9VkAQk5nZ2e",
  "key30": "4ScrUAYktVsGk3NN1PE6HzkVaQaEUqntmfsebJNaUWg7x2sgSS648o3fQEbuwN1NrT1v23d11yzh3rMjaQPskqHq",
  "key31": "38MR2zdUsdZEpr9Zo4knn3i1KvQYi9Rd8qgTThzhpEjX5SWkU5Eaom9h9xRCmMAAPdovGXZXiowWd5edsf7T1W99",
  "key32": "smSZkLutMTzEfogsgnsBsXGDXMh55DnistegpxuCpnT1xoDERVnFU5qSj13R4SbrxW17ucMxjBdZz2ELVx6hPj8",
  "key33": "3LZd3yJRB2jtSPMJdyWJbKEDsu9acvvsCqytpt8ig7CBoJsrmVRw4YGAHaFg6zFnt9bp1nej7he8bz6FKgaz1BTQ",
  "key34": "5jBJEhSVaiwcJkDj3CcVrfrPFTeugbjuAUP8q4gbwXCm9woQYbTYDGTpfFAJqK3x5kCxzNxRMNYZhnaz8TKBpW7q",
  "key35": "xrZJJaFozeLKFvWPZY3RBwFMwmjSLcxsiu7WDu6Dis4dNz9Vjasr3R3MKXisdccU64hYVQEHdJxfLHZpb8vPSQp",
  "key36": "5Ne3sRXo8FQmZ7urcYCbm4AF2Yv6ZrnJ8iGzrp2WGAYSiUxfUQzXL1XnGFuKDpY2M8pCwmUpXXqsN22MmtRzqnw4",
  "key37": "2vZjHAmjzTV25dttwWtzQ26ZUHPu2FsSAq6c6pfH3jjWFDW7uY7mMDCB2U1BdvhBdLviwn69tHHGD2kyKzVt3QQF",
  "key38": "4pgkLFVkidZeYGesDt3CVVJsCy4q7dqZWyqkmpubhv9d3TdPcP5D7eJxLeP5dRdCHcoGVd3z41nm4vU8UCvLFQnB",
  "key39": "3cgNhJQ9xz87bZ6e5SMf6ya9xYCTVMv7HdgJXaASCt8QJGSeSadBN2qDhpGTvbj63wNpLwYt89GuaCgtoTvjMchu",
  "key40": "3HgRcLNwxaFcsrroQnaZ7itaatak1VA1Rgc4KjTmwxWzLmTgDhbsB12UXqhvh9h3z37E9dXzQ81CfwieLT1p3YNF",
  "key41": "51yqnrP5RdhypUjxseDDDqy8kQv4nKURxkkgAYuhMaLkjEp28x54kzFm49bDa3cZamHYBkfpa5DVxubF9rWxRCsS",
  "key42": "4m99UPuYWbPqDnDFEUkf5hv5SC4cT7yts8c7JhbVoPEGYgWa5Jc8bAYXg6QuQXprzLbgTTffonLhPUDEXhhw5EYQ",
  "key43": "2TQZNdD8L3Bt8EgpPija3SzYRJaAJw2da9ohVkytH2aKbvRaFVesTTjig9wBDNbjz8Z51HtpQyMyShKtwRtBPzVD",
  "key44": "5vqW12aR9rPyfVsjhrtrZCGa29yKvgj5Ks4v7hVLhNvEtpdZzah2zDmuU7qVJKxhe3KhF5ZBtBWUXkLXU2aCkhqw"
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
