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
    "24vTQM5L8wPCj8ed1VHu3xQpxTJagRYL4w9vesXR6XNqz8bsVut3X34mxJJYAQvr59NQSsKaDFfyFEQAEMfKogKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TT859sANwPXqdshWSt4FrbMn44ZE5SrpXtKLkCtY44vaW6a4v5Mp73foGtNYew2tsCBnE7fbYwtDv9bBdFD5XV7",
  "key1": "5gMHhGxhTU7rxAnLZK8pLEg3D7jFnKffgUZwCU3qXUiXt8qtE6G9Ec9mu2enajVCC49WbkEmM49mFFGyHWn9wTpG",
  "key2": "2WxSy59CqMkw9X1AFrSWKoc2GF6w3tsJJfceezqxZpaQzfd6Yk26tepn23r5iHW6L41giohyS5qjsBH2YawgZXQk",
  "key3": "LhjAvujCPEwmTYFGCA4RJUGspLZp8JcUotnnvbxT3LF8F5znP5hUGV6huHszUKSje8mwmcLgKYcjfrk2XP17PbG",
  "key4": "4CXqU6c7i4yaoXmoUD891mVqWMg2JXsFJRVHyqPAcfKFrscZSPYfEZfPEiK9CZSxQDa9S7ptKe7guE9KaUg1Hvk",
  "key5": "GmNjKVXbTx1EGWsfBJpkVvzvLL7hVmkf4bAog5KXhtZ5NH6ryrDi35Za8y7t3SLhZ8dVBe2hvM4f7CbFJLiLmLB",
  "key6": "4TtMtngRXLdY1YUjzhNw97Q2R9o6p46A1NdRsUuhMkvUm62LveGmWNLxcSnQtZ5TXcfULT5PhexVi8ZXENKC3Ysp",
  "key7": "3PGbeCBgUnGQ7XooMxczE5SMpvQ423c2bZHVRV46bzdTHd47Ws91gLw6EmbsrEWCp1RTJGiijxEkS3TyicySNBG9",
  "key8": "2iBAAHgoQQkLcYKD6sJvenCzwgT68LVdX4oNSPZXaE3jbBag8gJ5DM6pLiJyqPFxvV1moJdY53HKtC6tmATYZ95X",
  "key9": "3tfnaSg5LbivCadj4PMues3ZigAJgUDFG3xJ4z71PjroipuT49EncyFBdpAFyqUhM18WK7Ei8vAUYcS6rv1DKmSr",
  "key10": "2ZFKD1LRxSnBBAu8cVFKNLDPjJu6aD4wijF9efyGHNtAhjoZZPN6ziKdSJCx3zBFntmKgryKGcw5RfSRXX9i4ohi",
  "key11": "tWZ6B4cyrU8TFtkVAWEoQeA8tE4iKeisHmsFURuG2DR6EHNs8SUdUiLJDCDh6Yon8vPsLXynBr1sqrKmH2rLQxo",
  "key12": "4gWURCDVa3yHg1KbRUchWX3UEHZCVXLjQzLB6DcJKhLGNqWGXuP7nKJyLo3WFguVWJAdEGnxaEiitVZWpyBRstKJ",
  "key13": "5UmBiUoL9PQYCmkhYqTNJgH7TzHcTvVc8JymizrAmKRtftZgUGN5EoFAJVkZE9UXTJVHbJ2BR8NbRt2mpsd1JZKD",
  "key14": "5KW7oXV2EA6sgi4EmeNK4m8c2idp17Q3LEubNMvdDtpHUoJL3VYKNnybz5Ucsiy5d4EstdL5yybhB5YEFhRKAzuG",
  "key15": "5vPjhMaFKNuKkiE8Jyhmi8yzoqtDS8VXPkcC36ohh5XXEZFFAYDuj9nWvb7droCrBUyHwXoCKJwpn8GF8GLbYGif",
  "key16": "5mzuheGDGm22gXe1Q1Fy13F1t3YjYTGdPmaMp71DH8oKF4xFtz6v6nm2cdUCq4yddKsVBggGJxQV4sv8vBypQnHg",
  "key17": "51otw5ieN1SCFFarZHmbg4SN5DfKgTqK584jAGhHkZfj8wts9rpd7GUXvEvJtRUV3bkFwosoW53MNSCtfWMoEck",
  "key18": "56QdPPS6GbK7FXHLMaWggGZGdb9uYUtEwiYzW7goW5VRxWhZsc61bKrVkyZxg6o2ND11zgwP1y2JUf3aciEKBFKA",
  "key19": "3fa9RCmUtDFd3oMzrw9yPxfdUhBt4w7Qs9BLxnMQmaxzBJtZdR9FwX1wdmXyj69Jx1AFtnqJ6KQrtpiLHUpyJ6Ni",
  "key20": "34EsaWHwFbJDvj1UhoPCxbKA6WAQtKjp2FQdSDPsrd3Z8UQddQoFUs5au7RpACu4pJTWDNhYJRMff4mPbsAMDJzU",
  "key21": "2qZq5z5moz5Add8n4yotz4545gX2v6Ns7FemfZCYppZFjdsKdoLmyAyH2ds96NPBetCqGWNdz6tmCW9DkTiYcMVg",
  "key22": "5waFcHzbvm18iat2MeH5XFxLXbCt3MtSsUTvhrwVqWVRx56ryYp9AF8Eim394uVBgwZVruvVFUYaN6SbyzdiLz1k",
  "key23": "3jMQBCzNePgmUqPfahRdSeLrWGoqT7G5CeMUXrXKwmKerBErXFTWfESyaYrJBKzYKLt1BszW9VBhYEMB4sERYBhe",
  "key24": "3QnhJxp45XPSanXnZafGGtoLHkuwXCBWZ8P2heLJXMydy1XqYVDaQgMXSLeQA3gjneaBfKCW48A9Cb6W3xWdkLUx",
  "key25": "4jneuWVsk6Fm1DKKGQ7CKsbyA1pN3dv4D3NmJuu8zKRM5am919f8ovRtJAEWgMB5j2BckLDLA6eAEgKV79F6XULR",
  "key26": "a7iirvddzG6tuwJ652JDnvTf4qRqY6PKjvboWuGBkTF9CDrAfTvYK5dLSWnjgf6xMHdAguwAKyvhfprN64TUZHq",
  "key27": "3Y2Pfb7vJdueHCSGSm5PGmmhhzbevEnbJESQ2JBFHNtJa6qrcc11UqmwXKZCKAQhPMn8aFGJyNX1SP3g5KN56mDT",
  "key28": "2b94yowaRRdBWvh3u35cWd4XESC9Du4WzE8h1sqJBwrjkoAkXSpMycqK1ReSSVb2adoNQHkWGixMeDS5BBtKi3eH",
  "key29": "pwXJSXW76TyDmAdxprgvghx52MBJv88X21aP8kFuXMGy7sxfy2fkcWr2d8mun6DmuAWyzs291U7g5QyGaNeWznt",
  "key30": "3TCjcfEpyiQNi3ZgkZbhggp2feqCZYhjeS1x5XEY3JPuSmZPYdHcKTCDQDPdD4rgh2QUJ66WGCuhuWmvVLt4vTFe",
  "key31": "442MvXE9QTiA6ZL8GbqaE1yEn4ZKk4VB4kiGmDNU2rAcod3pGNGKD1Z5yFgkJnS5RGKPYsHvamVLTXi8FXdphp1s",
  "key32": "42i7vJ1nZxyaGDJzwZLFQ6mNdoBYtvR8rzL7s35cBdDgDUny5u8xSd8XyEuAmEXy3MFcW2DDuP9FchwygcfyZ4ZU",
  "key33": "52zDdvp3bKLsskptzMVLL1m2S4bRES2FMqUnSKMcjc7QDAHBtQEfB8SHipwdn8wf1i1SSz8XZTHLj4FyMevbMFok",
  "key34": "5uUTxVAW2hhriPBYHWLazKHYXTufbFNXuWka6nwiWAgx1TmkPJb7hwLCpBbeDJ5LeteCrP39va8iUB4xLx8dpugT",
  "key35": "5BEfjhCB2MdN2EBjXhWX7prfHRwL3iePCrJcCihs95FQpqqKbsykLDzjc5ntqShAhTMkK18HcFkVg7sEsUUSeEUj",
  "key36": "2Y1gXfenT99bgfpB8GUDJL5PXCnpkxZaJb3RHprvu4VZm7nyzrYMubZHRDULEk2nnQVrGqTZNvy1c15Qx3Skr7LG",
  "key37": "46HHhyjnmH8XbTotujWjGtzsv1LkFCu2fHHbtnEAMfyienkTMsRFcZuFGdAk4LsL5NSm9jB6oZt4CTDwz2JqvTWX",
  "key38": "4aw6xWQaYWnVp9HWAEnY66BnR8rpBLFhKJgmDA632ZiUYiqTLdzQFZ6SZ1aTTenYPEDpH6iBmpqdbb1nQyoWAMh2",
  "key39": "4U8VMSPgUrbNoPCaC23x3F6LVtYhcgnYSNsTw5fAtBy6ZMnNvoVZ6UxgaBiKf2th8ht3TKTGdSyZWaUJTTkVjtt5",
  "key40": "5pDqqCjJwDdYMd7Fh8iAc7jeCaGktuWLcQZLqWmCrQ17Atap8NqppgP3FgQxLyfezVtA14XFeCFCUdf4XudTdADW",
  "key41": "3kSGHWGevBPwjqshYhvo4prUAt4avE7vDLvnhgeaXBdH8wnLM3h3npjr9YTehgnT4A9D76eS1WmYN9LCWe8VsVDz",
  "key42": "5q69tq3MatmKm1DbJ2cAUUEoSz7ozj7NPJdLYzSM8VVsLXm9dPU6tsUnghVmZWY8QYy4PVs3wmfARa1N5LtqwuXk",
  "key43": "4NyTfzsKbgek8WsvmogRtemRj5vUnDFPy1gBQQ9npmFhFV5iBoeiFSiC1nxZwU6RtWak1QbjwLFy9kMXbvCAquTn",
  "key44": "4XkKJVRogC3huL8gXreT8vsHRV7Z4WXnRZASiaMAFnXcFaWazxTH4iHSJ8bxvhzrNC244h5kwcRMDhdzFZuWV372"
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
