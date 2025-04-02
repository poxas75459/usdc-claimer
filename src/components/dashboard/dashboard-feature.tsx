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
    "3uPzjMDbwTTc7rxTcERqpGoySkAvrDpXFun5QGcRY6zW6QNXwfr8PzpxmaJ3onZZ7zwxSnAWhEbwPpCRKEfaxZAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u9KhL5GRNpjUYsi1HPLd1HGYEUgUXwyheiNkmusSHoT6pw5edxP6AUqugQqoHoWap5Bk7ARGX8rVbDZYFi4xr25",
  "key1": "4c6qzpaUpPSwfsJKSd18tRSS6D9kmQYhNhCG8eGjRU3wsbHkbYUnTjfB55PChs2US4eHmVqs3upm8g7i2nXG1hvc",
  "key2": "4y2SAUysS9xvk3SD7KjUyYhb7Pr1tv7Y4AU5q9rh2BgWc9U2WVQ6Sm3XoKjsJqEVPDrYeMdGfTmRhrZrft2kajMH",
  "key3": "3yKPw9561dgvjFDJy68THc4p1U6MCpxJLMYSSWUMBhHEmPxcWsunJ61Q4uFHKtAQbaczRT9WrB5sjs82tyW1CaJU",
  "key4": "4mfmpBn2QLmxexEUmajaKqhJHnjxMFpyqrVsUSt47aAvujpeTVDW61Xdptp6cBR9c8GLJkSAKiPXwNWELfJrE7Rb",
  "key5": "3YKUZBPph8fMH1VsVjbFpRf7gU7qvqCcZv8N3yzmAEeQjZkTzh4QrvNq3Dh2UbSt7P52xyJ8HFJxn7prt2R5EK3g",
  "key6": "5hxHV161UTfdhCbYiNgZLwEer8XKtWnF5URTmsB44pNJWiRKNycB1UmWoFNfovwWfiPFEYbtkmq4BDjGfgFajqZG",
  "key7": "3jX35jv2m4AxvmVSPzyiQhmi3aNP1FhbNguervVUuFr7Ehdnn6VppVbxr5yBgX6Ju9R8jH7PcFafafjXVa9cVvzi",
  "key8": "3Hmg7HWeGo6BVtNf9QnQXgwCdpYixFUypHGWVMN1EV7SF5SnfzDyq5BfRWoW6hgqWoBM229AUcCqj1xBhge9HrU4",
  "key9": "2wjxCT6LSApfVbhk5ck5AJDk43guoHPSjUs6qd973ddgsSSNR91sqjwRC8gDbQbi2cPKgq9CPXSWDCZF6LM1B8sY",
  "key10": "8tk8XyHwX9DXqVuCjExT596vKfC38Yipop7tuHLviTjmsG8wdbMbBkXK5bKW8wn6QrmJGZA8o2JXe5DNcRXoVvS",
  "key11": "5y5nnTBY8kdw8K5jASHHhvPodd8wHg9PFVX8dh6JGBncvn7tTx4SMwGCqdGD7q3Yzcv5gSCUxb5qPjkhZkPzxxAs",
  "key12": "4Zb9UEQPsga3fxSEiJ8H8x3SHHSAnxSU9P2vcS6iuZsNtuJD44NGDveDAJ5F5MN4J1M56U63keZ59wRj2vPgmfbK",
  "key13": "2SteAvTHcB8c5UergWVa6FP5kzDkRFEfxLtHTpe1Ra7nPA7FcSDDzcq6CgVsHZMBTXwHrWfNvvhVVamWxgEukAMd",
  "key14": "bkiixas1S49jBuqynnCA3r3cxhDZioycBG1nd8qbTvUpcTJSwsvAxjWadkLnXid7mwoHLRveZoy1uqpSdUdD1MF",
  "key15": "2AszgtAPbdHtpkCcJQEFFHfgQWeH5BLYsEYv5AmFZUC3TDf8dv8Cx9ESYjFTNYsgDZfqR4XjZFnpAUGR1vabDrpq",
  "key16": "2sMZKNfmUFvb4UuHfpBn9rQRCzYLjVTxZ9yGLt4iSyynqA329krqa9ANApaQZjbSCav8eM4BQSSUiHLABiJav5iR",
  "key17": "3W1rHgY1T9F8E5D2WweHV6uZDSryLi3pZJrT2XLqSY2vh2dZenqkCsMsXfN15MkR252sfgcGe2zfsEcVYQfMhWYH",
  "key18": "iCgpwD1PwGatST9dGd4BUPufwdc4hdvbEiJWJMmDwxzS1bbUr6NmKMHaaGRwhdrhESKuUGQWyuPJgrjpGVgcSYh",
  "key19": "37NPnNb4BUiq56uktYhM4EJFKXxL4BHEqKx7hTBTzkF9PMmviYuXxhqGYjybqqLekkATFiW7TfEwM4kywG2sjZR",
  "key20": "4oiS4vJBfy993snYVU7CGGDGBBtbCtEC4a298u2ZSQ9tzXoxqXdXg63FECnTpQvyu3EGCxhhMNAw3dUZr9j1o47h",
  "key21": "pGGRtopNxay17MVYSVaZx9gCTavJhCKGXUG78hKdY9oSC9FSMSPGZ9RKpdrGi3E71fjWUBDvNVTrvd9XnfKY2ZW",
  "key22": "3vd4E3hfDkNYzrmzpbwjeQpXMTSiavwj6Aemv5WB4yUq6mHZqm799LWqgcJZoDoeakv9P8eZFcJYu371BsJ2bnGG",
  "key23": "Mv8dMQyaeEuuaGGxUog5qqVbmGF2ketDn2MVejZuGSQg1q2YeZeH4UW4sETeLfGewykGXfp6p5EqqkrMBkXk9Vd",
  "key24": "5KXKc36E78hgiXVTpQe13RQMSbVfXfwYahGz1neoTNFyHAYTYgqh5irsPRemyWWgQqU2uuEbzauRkhmuVg1NiEKp",
  "key25": "4zKb7j6Dt6JEZ1E9dxEtRxMYw5GWCangDqKbcjBn28s3EyxSx38Ex86oz1cZjW1Ccyur8VrcSqszGtBBeTWbTxJe",
  "key26": "3NFVHRfi9XS66dPHwb35WXGwahtgjZ6QjJJ9nbexTfDWx3mtoZpJFQhJ5cJzRfX8rJ7YXSZuAsfZf3vh4owwuSKS",
  "key27": "z8VJJKicKzWAkwBGuTDxhZzG52Yxf4X9xFDMs1kira2Edk9ELef8yqiK5QvccrP7wCUfiL52XbQzEpXCej4BqPJ",
  "key28": "rePbScurJxCn9Xaqgbx9MpdRxi56MTVLvkYNsfwhkjQUmWA8B96NozjcFUXXz57ThHbjZnxcfykX2XG2r67Etfv",
  "key29": "5yFpd1mnxx8ZfszkiZDhUjqTVgqbzrdtvzEdWcC2fWeiL5vVEpYgtdc4bi7bi8dy4QgeJNbQMJq79aFPAC6F4pNX",
  "key30": "3EaqSabd5hUfzR6E6sftT5GUr1m44f7nwHXZaGrW1bBPV8cQ3d62nqcAJP9wiVpbmjQSmvZ9kmEt34QCSZnn2qHe",
  "key31": "47K8KeoqTVDpbyMSEy4javYXyNLZoeXp4U6r8LNu74sK8CtqNFG6cmnPbo7pwvBFFpsEc7wRetFf52gnRhNtfgKE",
  "key32": "yJEXKmrCdvwFoDsKJ2WK87VuDyc76j4ob2sVoGsQMD7fJe8TNJ45GMaKJr4hM8NrErpk6GgMjhTo2u6jC56BDxu",
  "key33": "4Z6HFDHvyFYxC8992fB78TZuZER5rtYog7kVwU64r98JNNHP9Ncrkt1mCJHHQV1DYRxvu78Dud5rRSsswySMfxBV"
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
