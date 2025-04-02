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
    "475FixHRBVkVyvXJ2HP8m42gLShGgABwg9qRvnPbo1gC8Ry2LNNXfbgZjwJ2zv9T3zocnKMZtgEwwm8NaQxJPaA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2PFCiPPFBSgD9Xw1JYEkGncjDr44NQUTtkwQ4YPd5fFVncwQiDYwhq9W1x7JYcmLeodxSmsSyRj1e86W3nG1YW",
  "key1": "499kiPAk3LhzuU79LJaKWwf8Z356ePnaXiXj8q69THyWdX4xW7J3LWWzBivpMKosgXkjkuXfoy42BTqV4RixdS9d",
  "key2": "28jxmT4GCzT5z6ewT2wZeQnvhdqZ9aUZPjGEEnEbAtF14akULSCJ2VDqi3WZ1TMPCBp1srQJAgGapTWfyDsyzZV7",
  "key3": "jnu664AU6hgHWZsvrsGYiwEoHp1VJJXxxMEw3fkQg3xGohgkmgNQxbAyFvcaA3ZzypvJcWaWRC4Sh4NERTwndL8",
  "key4": "4HbaXZa6PNRctRBQBNFuGuVmkSuuFquoJupp82iKPxHyvkmNKWhpRN53gcsTVyJCo6781aA5hbNdsWjJL6HEmCxF",
  "key5": "61L2jieKvGyQR7xLjZ7v4H51bktdCmqQEXoaAbuN1nSQFqPhapwMtZKYBbzembe3P8Gfu2zs28d52Sm8UppNX9U5",
  "key6": "3cssvjSagRaLWfK8iwUgQTvE5fipFXkfq47MHbHAHypaSJA5re3Hv41WvScUCNekqXErDb4G8gQfJMLyt4YNQd2B",
  "key7": "5ESGaMtGsNH7YrLjW2QrwLijyrYmzQuu2NJPq1N5uTMRQEJh5S4BZ5StJV4bqPQDGVVTV1ELWkE5gZmCUoxUs98u",
  "key8": "YWFY257nehnPivL28yaQtvUzCFPsBpyvDQ9sfFpe9n5K3F5BnhsioubAEkkUvazWXw86kvty3v76KeRPEgkrSNE",
  "key9": "2KGZQLYiXBr8dANYBQLQVE5p6sP7gqfNzADKzz2gDXVVafzdfmKw21aHW1Bi7zXcEVB9z4GJLBjSsCbx7M9Q2A4R",
  "key10": "5EgigGJ1LnpBAgmKycrykz3KUcoQVmfxTWx875kPXSxkKpUVQezsSawF7oXYRCwLJVHdKAwtTSaaXa2JYJAa4WJZ",
  "key11": "5HdW1Zb5LD6hbFJc69UDNBffa44AXE7UUXkTYsf2jJaUtr8itjvBtWWuCGBA371taz2sZfm9nFrM8hwZaTfRomgR",
  "key12": "GCqa8RDtMJNcz7sYRBvNkp6NDpQAx5XPxJSTYpEQhgQjXvJucHYdnKd6RFap9qbwr2eLz7VxBt2YN5pATSsmZsV",
  "key13": "xYCJaF5VmkUJUfcX7Q1hqbKu8Jf26gMZM5kGVifxMfuEcsDozkyN8JWWrTPzPvGEK9tagjJNPAh49KCsNeuoidR",
  "key14": "D4jdUy7WBtnc7U4MDXyWNQ5tja33Rcd6Ca7v7cMAQKMcLhBMowFKapTuaUy2hMAwghPxwo11gyZyNWFpvGs381d",
  "key15": "zYM1uwhEGpY1gNJZm2CN7Gckh85zm3RLQSGkY3Q4bLhVhadM1YgMGtWBYTAfaC5mKGzh7KiLQQ9svGQGdJWGJtn",
  "key16": "Qp4D1sjahzK9abJtNrujes7qDUxcqFumsaLdoMi9tLs8cc4TUB6wTQgGe9GebLMmGFawBdZ2E6rHYycc7VdLZrg",
  "key17": "4Sp79iVSpukY4wjuCtWHNC24HVWh24gFguMyLqqgKtNw9L2YUq2CpHjFYZjuVbDvpc66vutehUJkkfFRsbKLgoMz",
  "key18": "21EsoQhSfmRCfjmfDPTTG2Znmtf9QLhbxLtTaWXt4gektZhMY3DwHPpERHhMh4nQ5ajXAEyHQ557Az1FWGzQTM2t",
  "key19": "3DQZGk7K6hXd7LqR1ZW7eo2ryYnn75feUmPUpSSKCSc6oVYLVgoTYpUa5Wa8Kg9MCvyvMPvaSa6Efga8hj8EjG8p",
  "key20": "64gtsHMp38tVJJTYR54yUfDZc1ebGuwvqUztuV9TedW7Wz8iM2Nj3ADV1q4rpq9Yc9fMjZ1L31C7jFHBAasJFXGM",
  "key21": "2hiJLVZBNFBQ2wGLDEx54rSB3SBjtspTm6SQGpoibwRFY9dZ83qKGdnHgQEiMLJMZ3K1BmHfqxzuvTeN7BCSBhiL",
  "key22": "4nAWTMRZbQkYvLgpEsx3jzxkgUhhhZ3ugkcgk5d2u1C3Us5xLxQdbAfmsok2W28VXFaA8PFtvTjbfxKoCaxZhpLc",
  "key23": "2iBznv7kPTJFqNrw7jUsN9f3AmeQDJDzKARbuwjt43iiZJDvtYrQf9QQP2TKELw7YgWy9ZdoeFz7kkNZP9mXmDDT",
  "key24": "jTdgutyVM2SMPLHG9uEWSbNGh6sonxsgzrRDJhzuNsq7nxVpNC4nkDcwzuoTz1jeePT9qyd5xSw1aGAFKMFP7j7",
  "key25": "4BKKoh8QRvp1afKq9kz3ipWSHhS77S8stmST5hiQRmCNE2fAB1ZNnGoTUPGdL3kfrEyzZM5aYw7VctKDeqE7ux6o",
  "key26": "RLbPGVWRYRaDsaACU8yBY6azLWuQjYbemK3a2ne2D9rCmG2jbdrV3DzpwRPquQA8sg3e56zZCFE38NUbojZtcuC",
  "key27": "3h1F5UFMntt7cBM3K5Uu3RGmN2fGDvPTAk4GjvhRLxUXuV6niFuwuvLTSgYZCDprKFCPtCoZ5ys88nr2hY79L4gV",
  "key28": "5Z1oNoYaiXL4GWrWqv9TabgPaehbTYEqeJZimoXuCS7k2S8easMCJGzRmWQvYrxDqMAX6UPEUDERZ2hoB2ue6utt",
  "key29": "tXtrbhXaBjkytVRJ2DF27oPVtjvbjsiY4YCUQ5kWXz9xP4D23c2vnkkq8Nf4qapEQUXR7QTVfkjez7Mb8Bx7hFa",
  "key30": "5d7jGUqMkeu7F9TajyZLSMBvznJLF7Lcp3Etibn7nEmP97rXrnNa92Usw6Dn9ivpMJiCxmqPFrmmFYth17j6MTP6",
  "key31": "5BJ7oaP7KomsVrgo7vpQ28yTEwiZjHcxwuStom89QxxcSMyG3BWCej9sEJcdjt1ytpBv5GgbmtJoGMPjkxMpVPeG",
  "key32": "3dc6uN7tKRijhKr9SUZXok7P4MAZiHZFYjab2DCiqvunvGMVHiiW8TCGjkrga3bLeUj9qJC9EZW66tzF97ahHcFM",
  "key33": "2jEHCkUPmdiUAVp2Nah9ruhKsnPxbkUy7vGw6jcmC3ssuiwLnVYdmbgMjTw2VaVNRWGHENAVZzujnG3okYhQqfSd",
  "key34": "465c6MrKrvHCnYep2h7d6s3Qn1JSPHKNfigwfBwDLG2CJd38Z2jESiMYSyQk1oAkYMYPnySvnz3iVxADaaMtPGw8",
  "key35": "63dvi7UNfcDN651bTnVsMNVyi11UE3NgR6eo1xtB9NwN52gGGSKJQ7Yk2K4kR9sdR5wpz5uR25MQgLbeD7aoC1ED",
  "key36": "zw9PbcyfBqJezTNo9NH3Cx81YCNdNWQsLXkaKn9BmbbKT97CFH2npxg6Q6QT2NJMTUggR7r4Y8L2tVRQwPxghwV",
  "key37": "3eqsZuZHbckbC4Uk1xeZwSZWP7F4Fmyvsj2Z962T8x9gedhYtfyPatKj996uRXb94H8FUJX1Pq8r7uN3HZwqvD6o",
  "key38": "2u5WLygyrqjbYooqbhJvdRr5XuU6nLK4s2kARfUpNzcbPMjR1H4iZYwx2X4TVHNaA83cqktGEUB76wv8UtNsBEBP",
  "key39": "4zz8FxVpJayKvd52HK75kFMirYaEj4UDKsFMSyPzNpxxE4FQACw9ZkosHG4rara1wBGkEXnv3qrvkZfrzHHxgPYw",
  "key40": "4Egwnb3SskkSg4Q8HrPFETA6HcG57iSifxV9Xg4vYBWMSaJgmxuV8hBKURLPJMBxYoJx3M1hFZkrXQ84XFLtjFGu",
  "key41": "d2AxVpyGgmMingzLu7dU5xZSGExMSFCgSQUqqLMTJJZyoNrZCEXp3KksKV86tTBJ3VmLKqQnG6SxmHue6DLvVY3"
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
