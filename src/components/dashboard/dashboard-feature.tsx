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
    "2RX6jCweNBNFY7YykMo5VfZZ93qTDG8c5K1w9XmTxz2Wi7Jr2YREEZwhkiy4Li8Ab241op7ccS96JvRGFxhADiP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjemttN6TBJEz3cFZCrXTUxGgSjcczPJv4vv4dEbMRFS7SduMLtv7MypN4Ardw7Mumz57c5qZu9XNXSidgunxnH",
  "key1": "5DFt5N4sHVSEedB4BNk4DfqWdGSeVHW64jaEkKAqHi5gdv8Brp5pMA53JxM1tJdMjZZtDXtp8UFjaJQ9VipJXV4X",
  "key2": "54BpikWE1ma6BrjMQBVmwG8P9fGCb7YyzensX7pfNSJDgsJ4FWUTJzEFqrnGTg9DdKSFL96Py9ijtVV5MP6BRRqN",
  "key3": "3YkKcG3LVBfvSXdfShs7bbcz1EVs5sJt28c7xwrNW5WWNHeMZprkJB5x57KBVP3UMm12xh6mp121KyJKpjESa9vu",
  "key4": "4ms7EQ8uCE7BgALoz3hJrtMDh21oV3TLjc1qEhhVRqVGWvgZfprfhC2tVGqxWqsR6SxbnNMiBBnLQUqeTxW4Fihh",
  "key5": "4WDRkYLQN7X2LKgfiMPanavJdMfMmE4mEwwTFGj9yBncyPENSvgQFAmGUXvKtcsnFwnw59Ks7jZYi687TbbSDLtg",
  "key6": "4hdrmuyJrGohJ1wzu5uVEQHxWXYkbxYcKMwskbfxvq6s55mCwF9WnLhRpjwqhSFNU2eUAVRVce1Sx6q1egB6tfnk",
  "key7": "5EoFDagKXJi54sHNWiKdm7D6PBGtW5GaPAJUhyGCAEDC81K5nPBBqBUotm74NxW9W4evjK24tTJtbJYHT9jhK8E",
  "key8": "2CPHk2BFbFXMGDSxvuuyEgmpgzJpVST6dmTNuvUmmW41SLj8FwZx8xkBfwT5rg66k6SiuTJDXb4imNgpiUuS74bc",
  "key9": "4EaEsz928U4eep1TQ1EEaKEyCkuvfSLs6R16agqsM1Vz8bN4aoXuLQmErgt8umbu4cb24SZHkMHpFzdk3Ta9YMHw",
  "key10": "UhcrF1fQkvKEx4Zoh1YCv7X9KwFSsGsNrn71D4offdb6LhTtF7fxTHyDA766hyuMFAMk7spi29qYApRTFrD9fEt",
  "key11": "4zDhLSR2yDntV1Q66ZY7HE2Q2Vips9y1trXenpYVzEzKQK91RiKEwJC9MLmGNh9mWU5tXbuU8DQ7rZnjavztsZ2L",
  "key12": "GvuZXqvP74HQaGy2JC4Vaurm7kPy26PVnBY8DPHPrFZydNWxQBTykgyaouiDqEy3SRyPgWAh5oyPx1khx7wagjG",
  "key13": "44ASc2HKmScxYmnRVKusJGV7wajR96RXTbCTprqwCscEcWVPdRs13Z8yyeSWCE2tT31JFaAgFQEysVNFqtW1FDYA",
  "key14": "3BCQ4aocaTWnwANrSfJTqThqFsdFWMF7MJ9iH2V5k6kGyjJGwr8VwQaGu42P8BzULsdm3VAZnjdJG3MhRGskLcpS",
  "key15": "3UZUAWh7Uomf3SkioYJvx7UvWY1kiGmpMbe51acKBJCSMSsQxP1fxQBSPWdCLkhTM4PTUZHAMpjbyXSGRSHPHZ1V",
  "key16": "4v9mp83BaPJzP4Cw7kypkKZdkxnAQkq6UGBwpgMDtz4xAR5PH14N5xkcDepench5gL5dJdAoNxU9eFNKExVnhAgN",
  "key17": "39xQN11WrLLHf7qYBBPBHRkzmf7cBHFueX8uK7jFpa5R116npeSP19VbUxUpSzamEVPpE9wJ1BHQP4nBiBmhH6eR",
  "key18": "LACRUbCV2TnJCkDNzYagQ7zKs53mhYQbNKCk5tpkGychBXGWkSYCzqcdohdSDPqrac17spxj2Udw2ifWYHujdsX",
  "key19": "2Rwc26zg823mXHhAPKxFVgvx3CjZeUmRDkyescfGAzzC9osxiYMLedRJwmuAUWYpwmyVQt9eSXw5U5nfBHAwSycT",
  "key20": "2JvgdFUQookZUz4s1B2C1EZCPawV5z7cwUxjvvM5JeVx7mdTjKLYciJNH4Er3jjsNpHo4zAi6q24CWxJ5GkLxFh4",
  "key21": "364GfnSTZMamo4bJZgtNJoQbqMA5uqR5udaTSa11k1zj9jgcJ7CmMbdXcQa7LpaBDwZaLGZ4Cm15dLwyh4k6NJzP",
  "key22": "2mADg9jCBDKDShJk1veQjNnVw2HCRKgZvQCMR2VhBzdaVz5CwtE9PQKmQTXa13D6wz47rW3CMUJb2RnT4F6QCSHv",
  "key23": "5ezRFtQHcsk99nWQ4caK7aKMLmDFvjuUi1LwAMBFKkZGLV7g3ExwqQgyaDL3waFhxioCzmvVXiWpyLxJD867LdSt",
  "key24": "62ScEd7VftA1X5xws3T9tgPf6MsmW7fZ5HFahfgnAamgLmuyMT2Zmg37amS7SsuK4Xi47aQVXbLSHaKFJHYpLZby",
  "key25": "3z6JoYZojJRkpdfWsEe8XgeWb9Y59Dw7B3ySV9UBKRGFswAFTTuKrSvqaTzoSW3hJsnmZHpSQRmwjGMtxz5ySHcB",
  "key26": "4eS4XyAtYUr2QK18NdjAWocsF1FXKNXMiHvHa12YRjoU8rQ2yB5gdfcojJEAp9cRNbPmx8iNj5DQcRXFxnUbT5BW",
  "key27": "BStzRLuP6K8iSxBD7KE5ZUopq2ztq2ZN4Qjck4GwiM1X4DXkaJsYz9Xdnt4x9e3Q5CZKycd88UGk4i4xJ6kfKk2",
  "key28": "nWujL8k4GS56BgvtzUBZBiKvdpCKu5pERFwWqcxWUuvBPFw1J4L7rZhqT9wNP9w9RfHU6yiVMLi8oBEDWcWU5z9",
  "key29": "4UFPSjNTxDYiJqhFKf12VJnJ8JiU1GtRWKzxcTMsDXDucZD5gYTi3EZkVxgydc5oWZgY1d4FbioyAUNLx3PLukrk",
  "key30": "3Un9Tsm3NaxPuCNKzHZWE5uNfXPxj9bdYN2ueo5W99PBQkT8q98vqBEnrRENaPUS9ZLc1Bh8kSnBLp8PMDPrF9mD",
  "key31": "DYQDTEDPNKTTXarU4ZYxtAcTTErfoyxKNZB4VktCqou8rby5UCr1cMAco8WD6z1xDxisWrcnBtdBuUJoL1DUxaG",
  "key32": "5KwBcHYGY4b9kbm5qLo7mMKNJSg3GjsfzGwgzcUveYeygb64Dmoj2BhAj9qhXRu7Y5DGSe6FZUS9d4AU956Y7koJ",
  "key33": "2p5TtxKHLQVte1BGdSFW2J6nLvyrrifiyYfyicnqZZAFstLy38g2CU4gzgWwRaWCuJKSGN6ytF9BeiQqTnrzBCLy",
  "key34": "296LaUMKEJoT6rbNV3RZVGdsV4Pp1GvxjiYWVFfpgTfwaFK6u3s92d5RSvoM2jFqQNt23pTgDvmJZU59H6iAXnnM",
  "key35": "2ptvr5g274ACtLc3DgFEPcpLZzrawbQmDNE7ktG6S5dnM51oNDgsJTLYpLnbnugCTKSehrxDVkex79c2vqUd5KaG",
  "key36": "2PkRm6SwSM8R1wjeQZ7N6qHkNkSvX7RjnKWFwU1mSgx52MRZh7SSc8q9CNiJH94pSJMcJyBf2CsfyVdqjexPiC74",
  "key37": "28xbWSYitauxuEec7ffYynA3G5dzGEQ8mKABbgbCCQfwBriR3anbPHf2QyaCF8WKupnh31o79p5ijH1KBEANAaAi",
  "key38": "crpzHgsqZ7vKLfXP68eYeQJfrvwwTL7SzTjERsLXsqZNwAhAeFT8TzgiHiK7m15VBEemcK6mXK4jZR8TJZYqDM1",
  "key39": "4WdkAxLAzZwu6E3KLUHtriXnGgXaipGwz9wQKpuKGeccNs8fKHbnqEZhwxwzAmooMDp5FzRUbXQuNy2HyG9riFWF",
  "key40": "23E8auGqQt3JxbCDKmPhpGKkH8gW2TXnys6hJXnjahqUMUozVgd1arXMJNgbDSagwagWvA1A9ThmRzkk9rW27BWG"
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
