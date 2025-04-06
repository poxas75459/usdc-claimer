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
    "ZQuLAmGKnpYkQFsDzpkhbn8AFGMSfJrTFd5PYMUR71DBhJLLVj4fTSWdfPq68eKi39wASTbTLmYTfJjJC2fbcft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czmaEZZRAzUXnGSQJxASVNfMrSJTipgMZcWYmE152P1im3azQJCMHKo1cCQ9ZGA2YXVfTTYo8Xx6ck7N7kJCPEf",
  "key1": "2MrtL3BAeb9RA3WGo4rmyyTVv7xvDZRmMVYTgwtFdqzeZYKBSNeGzqb17yuCP1c6NPtTYSYxkc2UMEmMsZ413Up3",
  "key2": "3sqbr9dHxw9nDzwY9o23z8V1EWXn3YtupjUdBkh5z3tesioEDSi72f9hQDUF2Sqmp1N7z6TYDdducumuzJf2XJq7",
  "key3": "3yCW1R3VwpxMLio7WTQ7Snpm5gC3zRbjAzZtqn9F7f1LhXTYhNghZZcmUWdfGXx8xcYagbesJXfjxaux1g8r2Udv",
  "key4": "5Wkdwun8qKZ8kMqDUEj7EGuhwp6WnMR6aXw3gVPNyMJ5iywe7u9bkNC4qvcjG6guvS9VJbxwc23hMeAjNnsUeWpo",
  "key5": "5sx5LnP7hyRMh8EoJTMU28U1cPhPWkuKQ4WjMptwqRjnVEH2AueCFwzDPKr6aL9HPuayxyMps1usK9jSYMU2TM4D",
  "key6": "4kqEM8P8UJcBHxWVrurNJGSx2VpTLfokFCggZN3hxdDLbiWpu2vR6L2eSfJxBz3HZfoHUeW9TMgjkJerM2MyhGd3",
  "key7": "2UzCe5ndc27SEgzTAuKTzB13CDHdjqtJhWfTm3ubQ9DBbwYYqhvYyj1kKzCrLBzwQSqUQbygx7SRYVYAh2gfP6GP",
  "key8": "4zTqVMLUWx4gKyv1UjE8vsAyCcU9Be2ennptCyjr3UkXsDtinmPhQ4neAj8MS7TAuGG957wc8XQm6SwDgCT1PiCx",
  "key9": "bZshtFPjbM8S1YtrnHceFtGAXgHybK7XcvtRWF7eHBPaNEydhkV5GnMvptaNdwojkbxQ1idM55esMUngugULJUZ",
  "key10": "5mkereGXdzpvWQionEPLvbv7d2HXbTuaajtPGz6m2wGFrbW4DGWfUQdbHru2nNhmHKN8kF1epTETe4ykbFnTG3v1",
  "key11": "5a6YebXiSoFJtSg5nSeE8gPgeGgnjPDvT5KHd16LU7hGSwBbqKDxV9ugHh23EReTMEeqiCfMDhtSpK6fGgW17ySf",
  "key12": "dxWY5LaRZ8Y2xQoqSTMGpvtAR3sSnVnYwPr6zMeFXRnvmpVuzejgNU65MMPH5cg6NcdSbqa6vEk45PCpQnpPzyh",
  "key13": "4eTxzN9PfMLB5eBq9ZkTJrD9ZdAG7tpZziSqNKSEpg9gF9ZYtLKMzjV2tG28LKHJ8uemiHJoTU6UduGK2Wmjqsyu",
  "key14": "JnCnKAp6wFNC9BFMPVUUPESUkxP525qcyBtYscr5htpgWXNNWfK2UArf7Fjawpm8utwXqbFgUM2tCaP9W81Ro9X",
  "key15": "225YWLu4Sdysjm9NAL1V62Uzazs9eG6tRYtSQFRFauUFCh3Yo3579M15ey8gj9ZwKjZyZNKq2Wb5a8iJXLtKtm5v",
  "key16": "64M6oy8mcMcPDSNZ4kkSMVkC5Vp9b334QtrVH7Qzyvuwd3KDVQ7UGYpcZ1i6S9pqixw5vr9sHH2KQrLejhhL1xkz",
  "key17": "5JfyKvMJJnaDAqFKskJ5xTVkW2uvJppfrfR5UNAaKu8Ho1CH5Qc4fyj2yYfac6YS7VYJLVdJdJLtn3kBJcYCsyRq",
  "key18": "26iHFPWsJbuppXS7b4DXBWKxnWAmCugej8Y6KUKZruvgjc6o5aE5vCFBwPiNWeKZprWsfTGrojp44g18PFjM8r4N",
  "key19": "242fkVyYWcaQxHSHfBVWqazkNfzVTrwHHASkt7sfB4k78Sm8Qw7kf2JXHGhAGVkbAaZxdgVtDoeeAyNEyxk8UM9K",
  "key20": "63pHVZi4HQNcjYGt3H3yyEyzpNG2CFc5ETdxVMaDRPXahGZ2seyrBNChW26PAKfSACGKETRUEXxJG13gSpik77eh",
  "key21": "2zMcT6Q2nsXFSFxv9EjKGrgNM27JbdzdYtbj4kHFGzuFa4v9AnwmEdzaWVPWLe8QjyevzsPbXNHG8vciKCgyr8H4",
  "key22": "31p86GyUYRfWttUyCFjr8zhP6AehD369qynKYCc7MqDyLZTGvowVMHkkYpugkAvjVeWoWPn9SF1x9hEf34kfSUFR",
  "key23": "4dYfmYghC6HYNf5neutq4HUzJ6cEV9xpj2j6cc9m2X9ym7nnZPSCNuWcFpo6fouvt1mEEfo2Y8Un4jqaDhBqvTat",
  "key24": "WkHixicTxAshdhSnpGn33LYQdjWGmnYfL95NVquV91AuByhvxkYWXmA3Nu7HHu6UXP2wavVX7L5FY31c3Bs1U6N",
  "key25": "5V1zWHtaDZYnrFneumUhp6Nsn6nNvGnLjPrpqnP4t6F4MDioYxYLKGmh2JHuGqB336Ggx37g7E68JDNSP2RRa38K",
  "key26": "5oPhV8DoRPTVkuFLgMamjnH86dK3GbxoZPGnPLY5fZSrMxrvPMyTHrGVdhXMwnQfD97FwEqGSXs1GVwJSArmQKKJ",
  "key27": "3xVPN6nenWaCHYPeEFGuCpypQ3dRivsXcKpfKsvbDksuSNbAR9rBpcajSBSmgVAfurmTRc13NPk2axrhyVe68ipH",
  "key28": "2mdH9GuKEZ1HRsqcTmXaBgDE7gEr8FJSP2amyvXrtjZkKC6ZXfeivB3AN1jxCxw4rmNtACUEucEvfL629rxYwC7E",
  "key29": "24XGVoZQs1BUAyYPDghY55E86KdGnVcQtTmXcdSVh3wYK3eQcG389oJcZbAeVcrQJXzwvmVtWTthvPZXikS8MsmB",
  "key30": "iV9vnmqwRG7neXPyDu9ozV6pN2QQgRMZzsJC1qpNbixcPZjkytwUNVW9phtEAAM7zhgdD1XtT3HPYUoYkFyKfM7",
  "key31": "xgtHb7jXveQ9HqEApC6K2pcUCtYoCTgsocUqULFWrTHwSt4qHB4KQeeURWaDiwafBrW24gNY3tXnp6D9skUcZbM",
  "key32": "2hEiKjm3SYmnpXuGDaQBTpDgi3FEB2hhr2TBks8KXfeqWazXBYkxByzNo3AaXtvtEMA9ipZaUYPHH8VpmVxLGtC4",
  "key33": "5TwyWUmn8PgPUkTrSw51vUxvB59PKcsFTQoZ58aC41TzKfN2UuLL6gtPwyb1v2WT8ScSUSYULNqx1fsrwaebkQ42",
  "key34": "5cw8UgWD1fGNgXTNXUnjkZFoGaJuRvDBw6QZs5exA9ejay9PjfJzGhW9QaAp6qKoTDM5aGSgPiiTppADkYQQiVwM",
  "key35": "34A1eafH2BPn1pLJbLDMuH66g54pJeaYFu7uiLxG4cxTRhyWkXcjq9iN4uu2dzokMx98jdehzZG3nbQEZoifAQyi",
  "key36": "5WMRgY9AcjCFi1DVo1zVmuhnCwSHM2L7Qp71xFhvoQGs9B8cdZEu5FKeXwuwfN66tEhepw2JLovZs9ZhpRSVay3P",
  "key37": "3ddjWZJd5Pe4NbZ9rtig5yDM73D2BmRvSdqDmxiXbUzqM3Y5RmxPpK3k9J2KB8t1WocATy89sHig9xAiPRdUvp7G",
  "key38": "2xHhSMGjhtczLxhbBY3Y6zUYgGNqUU7u7fNCqDCABhkkkWu3yL9N1kCRFFyGRMztgWCHuUr6TpcCg5fhhvugpNxf",
  "key39": "2XqvR4oeoNP7i4JEHh1xPgFnmpoeuYpwEgaEkLFB9wdydTreTX8oFNCcqwqV8eXVgMdLiXtXoWgEGdEqmppXR97d",
  "key40": "4aMDEQ7hESqVxpKYkx4CMGxYk66uPRd9M1LzSLTwvasJ7fwABdsYdJmmd8pXZJr6yh94ntKbZSmbYgDopBmzP6JL",
  "key41": "28pzAkDjVFY5k5uFmfyEmvXqcYYpCodneodA9vbMGAQceqwpjhzvFCe3qskSZyAxmF7b3b9mJoa7YZbMaVX4TptF",
  "key42": "3BoJkf7BVdytKc67Gn8gFo6pYBnQHSv1N83LarcjGnDD1oveQZn6BAMBsVZz6efeTVukk9SibMrVVyA9YHUJEGcd",
  "key43": "5mENYUcZyERD3eZXqs4gXdMVfzFi4mdGWnaA6pUNSp9BRSYaFBsSnUDDHCegsy8fRqLfYSrr3XN7EVxofPQmtpn8"
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
