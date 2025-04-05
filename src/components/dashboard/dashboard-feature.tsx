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
    "2jderJ1U2Mad7nbb8s6AGTX7M2fFJME9bAJxXa8ZvTptB4VCbBXJu3FUwzKuTiLG4JpPiPBQpk6nPaPLrdRzP3SS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49SwWWtLAKpKndV23xyCZPhnqXo2nvDvapogu7AFuMXcNLRtHA1xVY6XUFoj3Fr4K1dCU8mbsf89hNsR5zhTDYJW",
  "key1": "2Tree3WBikgxFiqFYE1xpUmdkVoF7xohAet8adjqXGMcgbkBdBDhs5Rn6XmMn3NY3kwTnMqEYM9TjcqaoDUwo1Lu",
  "key2": "5ZBzYmcDimCif3it44s6Uzmpe3Jb4uJkLDce3kAJ2af4nJiy8qGm44PhjFxtmXzCgkGDtxeojbSDwjJ58KYPWEfF",
  "key3": "3B9GtZkKZoBvB9CVVVej9tXDwEvLrbmMJVZ6pWiBYnrfdRqQBF7nNHvKYF9twJtbb7HrRkUx4sQjsL6Vd7QgGqWL",
  "key4": "2AMT2qPLVvrfpEDK5cXkQWgsrm7R8Qb5pDnVt6x2VuoSucvz8PzE9Rb6nshuiHEhNRwJ6PTJBBT2vrkpLGaV5yEA",
  "key5": "Jm5aTrfSrtCXEmsPprpSKAKL6wrxJjq184PKQzmshn5zphw4sm9r5HDjRsse4StL5mAHxVYYzMKa9s9aUDzgep1",
  "key6": "42itSZa6SRGEmMYGdK12PCU6BSG7MWwqf5ELmb8CwtuSGNp2j4TPHvY8XdjJsxA1s5qk82cZxrmherW9AJmZPK5M",
  "key7": "33JCgiKCZMAWuf4Vrpyn9Hf34TqBwTpdLttxFTfordU1X7HjMNm3nTMfuMnqDPYBw4dBnvn5xUcyYyWboG2jChnr",
  "key8": "hBFeG2N6EJNCaGnGjE236dViRgbhVqBpSSK2cHJtN2MbmNgj2DJgzig4aMoUgML6Ug7SQ2bmpyiwAhzRGtP2tJ7",
  "key9": "4iE8idW8TqvApKUQqTqcMW2osJU9dDpsK5Bk5BLBoUuRmRj4PBCpbDKW8ua8pxYkrFpQs7NPhZxWiv9V6ktBp2mB",
  "key10": "2CsD5iLLeYKWtpirDmWvRsajyaCZ4sDcKdK8ZhYFnw2mw3W3nkNKR9iNXRArk1THaucJW5pG48McrwFZ4Pyzi66C",
  "key11": "HhhAQgCbfSBVjWgNFM3CD4c3bUWouzp9tji7mYcyEBCcSHghS6apTTriojzqVbMMLDieNfqybidfrkdzucUWx14",
  "key12": "5ts1C7PFk2ogft1n4FxMCipyjrfC9Lg8E5XX6P72uCJxpHA3h1hb1xZuvgnjw3ctPhgt62RyiuRPLe9am1uewb7J",
  "key13": "3rCeGCSTziyGPWv6bEJyFARz7iVoymYjbn2oSDrMFKnRmXZyfRxUkMGDG3WWJNKrtEQMn1tTkMYNhHeHhxb5GSG9",
  "key14": "36dRcjGMKNVvgEzQgRzSNwKbT5TkR6e6VayAhFTzpmP13iotexjpKT8L6TQTMNo3aeqwNQYgdCYKpAhaYMrZXn9g",
  "key15": "3RYdncRxgDP4QmcJqJ7uE4oazArgNY9ecVPmxRSuZ6oEuwHNpHYsqmuBDFiodNJxZaHjZCP5fSpErWqVNwe2L8HW",
  "key16": "5UEFZk3bvKc7wTJ26Qhrb8vPyqZihAkAymjzcKJwxT5iC8tysjVvN8NunKpNxVgPeZPunVEKLaQ7BtZ5oBUj9wra",
  "key17": "3ckArUxj9SmY4bxSMfqZ69eik3LJyH3BGgJLxKNTZmEFV8naFznGDK36LP2HwTTqD7ZSraFv4SKznCroRZi8yoKX",
  "key18": "Sekfsaa9U9HPe1xWeNKu5wCPr2T6aNtd4mkek1qAxCCrv9DUmZwiZbPC8kg4KDRhgHd79R4ii1gMR7BFXwrXP3K",
  "key19": "3XeDEyci7X6jPBU9Vqd8v8QLgAsxv4kgho2pBXJZ4bDfYZ51x4v6fs7TxUAXDq4jrHvMVWsVAFz2CDpX3gnmf7HT",
  "key20": "a3L11E1n92R8KW9AHBWuCVsQQsRZjZHwq1YrvoK8AZAvM1WdCMyptZRnwxkE9jFBck3z6z5NKifMTAuHR7sbKTg",
  "key21": "5BRAxKN9HURer1Zaxj5TL4Ljscd6WbcWMnBzDdg2jCmsUhwXxDVXSW8rFgRQhqUbZxBHVgQGEoyEGixFw8M78BeU",
  "key22": "VXqdmHjsBxmYGJD7ZC6MBYBXbVZbN9NDSWJkBRDfXW4WwUxi7ZUa27GXjCzWtTJMNDjdXCcqhskxBsSdKKxSjF7",
  "key23": "2m7cav5yFuZaj5TGobqMXYvk6tCodS5JGcGLx9zxqquMxz2EBVbSn3n3q7GmcgHE13DxtJn6hDzoNvMqKosXxfcp",
  "key24": "3YwcQ3yCqPFVjDvjZCLcF7ARtLgjJo3bqToomaAgP28F32GAGv3vrG5J2xgR3GXApuQbwhdLwZhuoK3mNeMM2tWz",
  "key25": "2aYUhCawXKHqGsy7WBdZXzSo9SeBTSEkY7fqsG6d9LEPzZs6XRASwJcbzJJR7Bq2qgQfWbvBx6gnPTGbZ8tHKt8w",
  "key26": "hZcN84TcWjSTkHQB92npJ4QSGzE4Z8FKPj7rcg5yr1oUfncXvZJLhS1oUdzkJ1P6ReUEyBD4i9b8dJsvhugKxhW",
  "key27": "29nYt7sTRBVwQ2oEpWRhcNqoS5Rc8cT7HmP591Q3ghftmoXZ3M9ahFnxqrdKeU1KNdXLmUFB4JQjZfcywe2CEm2z",
  "key28": "3GWQw2r52WUXWez6yk788EekEQxedzqEidhCnTgof7WwduNytQkxkzMsj1g6Cc39we9gj9fEiiSTA5H5QJUc8mwn",
  "key29": "31uSUi3mddG646xU7ZU7auQPKyDvnFcbfvKsRb7wS1FW7wX8djEZFtzBCrsDHMmYxCjLrcsma98BPKdxKBDH68pL",
  "key30": "pt4kG3BEH9JZCydudZSqMA4fpFbh235V6aTa4JBy3XEWkqoUbiHTCrMuFcb7w6bmuuNjFniHX6NG4zuo37duaV4",
  "key31": "4zNY8bsCYFZkjwMa6qxiK1PTcEppjfeoExFfmyx1wgmJcHHuCBa95ZSPBk5NGMdaLYC2DSHB7d4Zw25v8HqM7L2N",
  "key32": "45wVCmDiUafTWuspLkJXAkbW2g6JPpaHS7xvRxhMmA1XcngTpvW3ew6NaWVZPAkroBDfyse88bNk1GnNFoCMzk6q",
  "key33": "2LdDy7RkitA3a9CbEAVrDZjqwgN1iAL948nfEZsKpMbf1ibCQWuXnw4BCZCVjZ1nzYaUZZnXteTkhPTSfQNg2AXn",
  "key34": "3ECwqFBMrkzqwcz5FBymVh6ih7kQdQi6YCMqL8j6LZ18Efw4kXsV3xrDTXgPn5Fo1zBMra4PXSAZdGJebpJKkSDr",
  "key35": "8oh9L7KqvbBmteLEguieGZxvYpxYbhcbkqr3NdKQvcCHpc2JYPvjcqj2FzQhhqMuRXDDUJCPoDsHkiaftrjhTGM",
  "key36": "2qsNX43CivyWBvAdd2H17GaRtH4pZ3J8EpoLMFzxJQfe7Cc7ZAV72WZ3phGe9U4Ys9uE2BSxCHGvdMd8HQ1QD8Yz",
  "key37": "5GZDZ4xNr6vmkjHH65wbk7UBSwjRQyDrm7RKFmKx9KuyTgq6gdX9J1d1qARdCBPjgcyuhBzJtAdd8Ng2vefgo2qL",
  "key38": "3npzBBmHWxgzEtmrRtFXdTeq5hfSCrEzpn2bQ8FWcs3AZUDoHro8Ky3f58w4zwc1LzfKZaeoAzCewvLMuwW7Fwf7",
  "key39": "37Jr18QNY5tTQHtmaTuR3tHn7SDvBM1Maf3vFBsAoSxNdhjEUpEWtJUhjpCgi3vaGVMM3S8NgdKAbNsFipWR9Lou",
  "key40": "3Ask8uvgAdMoWGoE4cr29SvkJNcFgvzSpEJFjx8Szeju775VkwvEwbhUHoqpD5E1yYdjJbkiZXTfTJF5ciBngG6K"
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
