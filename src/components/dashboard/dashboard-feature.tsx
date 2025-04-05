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
    "5HoWm7Z9FUSMMPPGeNEyMGmdrDAMvuyHWcErVsJHbgCAM2tqBDngCtkQ9AgqW5P7Qbp91WHVFBAfQMmfNJfzwwzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTPGCfKZxvj61BJYFXErbEdFyVukmGNqMgSoPNjFGJxGmQyxgyJd3G8NyUFXgZYDFYc3E7eYjoWsSHKUd2GEm3L",
  "key1": "3EPBiZVUW9MKDhxHaaLF38sLt3RBto3AkmrA9rWuABi9Dz7h7rpww9F8rG9DDoDSdZR6GRTnmxNm8i5KivQRRyPk",
  "key2": "4WRLxzmgAH5wr2UousVaXKSH5mJ6L2wz51BjEBN4E5RfNBTxto8BuRbahJdT3uWDCHCURrLVixg9LoM7bJtaQ5Vv",
  "key3": "3DuUWNCvR8ZxihH3q9UyGAswarGnxP7guS6kN2NAah1htv4DrWNshkVyQhE7cDKVPU2Wq4cXF5xW6rJ6qBi5mr2N",
  "key4": "2HMc7i8K1J5BeatKWt2nSvrfFhG58R8HbzLibgophb86MYgwigJcs4UG3GEHwHRRqEB7zXA2YkViYJSohiSWKKLv",
  "key5": "2772JFH1e695AYUpHn38nHBg9UtsNo4gCM18TBEjxPcGGUwpnGun2fJRigQb6HpYEb6St5wRUZ7cWwHitQ3yCLGE",
  "key6": "34yQKCd2FCAq6ARWCp2wYNYjbHCpqkwQz1HrLXUBMT4xQw47e4vnjt7tX9nHRou4nWKeNKt2wgr6wgpAvCHoS27t",
  "key7": "2uwhWuoVakqXP5XYhvztKMiHHZHUhJjidjf8M9xLVWV88tHWWSe9UazSAqCaigtJyNt9A28GDrquuFaUz33kES52",
  "key8": "3cz4vHx8PEbWNok3FeskvfG1KYhy7zVbwsBfMSYv7pyqKaJSzbkWgQEMH9XSCdoQWnAkdNSvkoeBPxcesidVh1sh",
  "key9": "pSf1BtSM9wpwDsj18FXTxTaPn4rqRMRnzNggKknLqLatEmCjy66cy2XwkqCNpYXF8r9WM8aET7kdSsrWKMdHUqG",
  "key10": "5pLQNEeRKJZTPbZjAUEHR8HbKkHa7WuWcaLMeVFBdXQjE9SyH2wmfTx2WKSdguasMoML5TQwVmA9fVcqsrmiKKo9",
  "key11": "5AAhXcKY42AT1HsduBkQdjUmLnwDTwSvmTB8FgKZ2o3NWAMV1W6anHpdmFJNQtScqkKAbXCUbdoYb73tF98p6bCR",
  "key12": "yti6URWuw6q7hMzEJ1wHfBkZq4bbVmz76SsNupxawxJcfDfiJDsAeNUShug6zBTJLubmytPFnMW2TxuLpAXSDzJ",
  "key13": "5e2oB8Tq7s1WDrU44bA7Resuki7pfSW6m9QEiVB9xF1tERtFie2r5566gaYqNvydt6PoaLnuqdmwjhcKECHK4DoJ",
  "key14": "4TqvLnDfSLQcej2oVK8dEACjfhEJpwDxkgR9uvfoC165PtcVy6k6QJwA3uxvCZqMKoLaS1hLBFSE9yXzN5RmPsA4",
  "key15": "5fsrjLyJ6LA4XVi51jJTasU8kWTQg8bGiSsGB9j9TRCkPcebvnLwM4i5SrJHLDgso2eH2Gx2RT8hD773bbc8ioig",
  "key16": "3AYqKvXDtQ4fRtf2FU3CfuYZKo8h3h7odPu2PeqdDKea6qndxhakWvmyUGLzmoiobAkekJMki9EYZSFKBn2XxPoJ",
  "key17": "23Qy9dgn8gu5QXJS2pf7A7RNPWVMPFEdpQs1RnUgjWhYJX8KkdxxcpMqQcqwK64WP4oJqo7eCEh2yhyLe5XP8RNM",
  "key18": "mwvGfmP2722vBjo75V1kS45NCU1Kh4QFwF3rs8ZEYGM8kStgY68NcJwYVtFs4bp9oKnvWAH4QSJE9HZcMAyyd4D",
  "key19": "5aJ6zXAYrUyZNwMdjSLZ5feqwqwPrah5jaeGb6P4cL4Akj1xc3iPCA5vC8zxBsupUfJPLXfSN3sxr8WzgHGGoZFt",
  "key20": "4oEW9Tg3XH5LmVrfdBu9RGv6PUfVMYVVwLTj77DXCMD3RJkMf38cf1FvZcsoGBD81t4FiNpywvsve9cLv9HqrjJi",
  "key21": "3KsvFbH54xRL7NKKAcA1CNrhU7uMFxGErTizEgoNNWyRov3mk3WAmpDprBYCMJThTwtKDwScZrRdJxgopAA21KjK",
  "key22": "2uLdDpqczgmndyR5sh7csghUFfF4SDHAA8mB5b2srHoTDQxDmKhC86LzZd1ZwhPreddufSHC4Bze1w5mUJYtZ1rh",
  "key23": "325oy4WJ232PGeE65TeLbDvjF3NtWaG1vnTaoah5C1qTWKeuEf1GcDBmBhv62D1JSfPXnLiYV1nUZBo9GKpg4Ek7",
  "key24": "bmSHCPC1xFVMwrpqi5twNn7KQgc2kWiQLe4nemRVLmQN3zDrbgdKhNUNAQTcgzPgfQi9mJx1FJV2opuVc8bjfHJ",
  "key25": "5HZFLyJXSnv1qBqNovLeagoqRCeSD5WeeYnjeEHEHEnpvEfSBrxJS3JFzXrwJiZG7sLRwd1b88iWKKaZcGU24b6i",
  "key26": "67EgQy8RRXDbVkNAxx1u4u87tS2TkpN8tJy6SEutTLyCr2eRHRvf8j6WFH2LorBzXsnge4sbkSnsWCMLtZC3JoTp",
  "key27": "5FttMcHzcdPkPopNWXNwZ1PJDzQfLXvspBnuFv5DYGQk3gK22kP1Z2NfRPxikN2Fv4GGj55Gpzi76oTfnV7C3Vqm",
  "key28": "36R6iR3fzPwR9exnTEwwm85Sw9iKSK7kW2NPasZJrjDijm1cteCd5sdTz9cD6PVfouTj1CUsXs7cgc3UJ8bVCvFC",
  "key29": "4gF6byVWxbnBiyq1wABnhqAKCUKSnWsdQqr2ALnrFviRCMjLmprcxWjzVgZN9zNcLQ1ay26yC5wta5fT5TS8Myty",
  "key30": "3rkyxAcLfwJmsaDg4oc7ujCq2BetEdSai979r3LgDkQnmYyyPRuKoG5bGAy59djvaitJoJg7PYCKP41kRT7REgc6",
  "key31": "5sEXdYgmTtsTpvA66io6HBY8mW3AyVDWf87FU7LcH5BdynGBGB1knFKEust8EvZgNs7xeGjcq4RXd9CFMvFmatf3",
  "key32": "5KVwLunrZp6cGBTsKiWkuFYoTrgPAHfZi8y4Rp3tP29onKYeANwNFUxuX2H2NkpS5yF1pQPCkQhqGNApw8L1wfJX",
  "key33": "3SLgemDKaoKUnKG3chicTbmP9uKWKxsZBXZK8wGATx81JT7ZTdR2YxojAQNw4DejfSjvch2EyH8Y6Uq4RmA9HaiG",
  "key34": "2opbA9aZyvfjR5GmHxcXNQzEwUnQpasv8p7ATmmxWtG1eiX3HkUzu2A4svsXR2knMWseDfMd9LRspBpfjPkox21Z",
  "key35": "5emcJ4oNDuRreLDkEnxRM29xhiH3G2faTKpH72VFEJFPqBS5KotRCGb1cBSVfH3gFTxqce96NfYqQ9KU3uQ36gn8",
  "key36": "gzShzVzHp84S1X3wtUptJ2D4WDiStVzCk72YtTJB7B2sHKdGqDWFZAcJmWZsCEJfidEeTNcmoGsAN9qJVQCNyPQ",
  "key37": "4c9ZXVAEzszwYX9NtNjWnHFGBJuPg895nr5SPgT1sRf6XYvXXYf5UaDmZ5FuaeQDirA1h63mGNNG1tSfL1rzKDDo",
  "key38": "2dnJRkQ7DLoNyxJJzmtu7MGTqmmyXvuj9RaacfLfrQzXU5BeN4DtwLXnqL9CK97i9mKcrbH8ETACMgzFHS9JXQ9c",
  "key39": "3XSrPKqZ3ybJWR3c3MiFjgRPjpTp3PRBuvvWqXbL1Xz1LvmxS5STHyG3imrBdEfR1GyvM9RBJxrL4zu1ST74ZmvA",
  "key40": "3ZCjdLecJPtvN2MDM4gxd7FzLtZ6XDJfmquaeDJpHN988K8Hzo2rGyABq6B4hVewAUMgCpHB9Vzwo9q1GzUnVzRH",
  "key41": "5vpnQheebYcV6AVTBqpJdZLgV875CudKrhQunVabJbsGc7ekK88C5XovQRY5gdrFEh6snCXNBvSiGFL7oXBG2rVi",
  "key42": "4XXswrr3Wmtcu5QEazyYaALZogckZXgM2F7ufuPzF7eobg8VH2YxmeEuHSnL8RN6HxLukUiEaUSiNvEfHxC5sTBq",
  "key43": "4vC5CES8GLnxPZVtJSRGVh7K4TEPDNrneTdEdmAgVdsvroCiodQ3a61rpSr43wwdomWJVbfiVqTNAHm3SwQcYF9v",
  "key44": "4ptoVxC5ap2GhqYrXDy9Dw1cHpgWHokLb2veengkbQb2CfFvf2WANSqhPTGDd2ucM4nc8VMmpp3xpvguDhMh5crM"
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
