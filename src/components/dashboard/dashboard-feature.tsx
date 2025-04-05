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
    "2qAdf9xnLaB1HovAAHUBfHsXEapzxyGVy8zhKFtfeXZPV5F5hJsTRL6rAgEtBe9hcN6ESarmHEGPvASXzVgBy8qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zu4U8AYnr7aTr5Qm9pjbCMvfjm7mygAb3HSN1NG1C2Nb9gZNnsQ3HRKb3zPBf3rkFdBj42bhS8ehw46rRgbEj4z",
  "key1": "4WqRaQSkgsJDgvrB48so3qL1Lj3zZAaTX8YBE8nymP5nbznZ2Cc7EK15CpwD9LvH9URMJPcwdyyCKaiTge4t2EUJ",
  "key2": "1hY6GkyujtrqhtjatoepwwYPkv12W1kjn3Ghf6j5dhvrLK7EhWMXDQAjWUkg8tzeSAYb3mdaEmxwbPocMdahZum",
  "key3": "fVbWSv4HCsNA1kQMFqN4QyxUeZsjkq94kRMSiGvomn2NYuuF61GTptmoi3ttUaD7bscPRRJccwNhMtqYhjveKBW",
  "key4": "5Ha3TECvDQjFEL3at7Hq4WALUXDi4kn1cEZGNutHhBWzDQAv4bcBz7JaoDTjWCrQrpWjmsF1bWaoFtMRMu7iuZMp",
  "key5": "4YknynhaMpP4TrX5dwnF7ck7n68GDrBB4X3nCQmPLC49AGKc8eiRjj858DL4u7Zw964CGkk1SXga5ZfNAKeA9ofN",
  "key6": "38MUkDkC9c8nW6Vdzkr69fbpqCBTUVC46eVXbqSoGxF5rVa13KjLywpTnvNyfTEJHnrap1KzUty4LCP59MaLsXov",
  "key7": "5Eqi1jYqAWosSRR6YL9kjGEw7ctcWyorTeSJ8vEC1fHpbzZEnn24JGLsenbVE7KqvkfBLugXJBoTnGXe4tpuhJBn",
  "key8": "4bzFKdARBk7PyzTD7hXjW5yEtsXgGLoQNuzqvxQG9fam7sc5SGqG68tMeuCtwhSYgQy7iuPEtoLg72P4BWoigp8u",
  "key9": "54BMXHe5vpTjHQbCXTRTc1LBD9jV5iaZuUs1RAGwoLswhr6JvTQKTRHr3SmhYMBHUcSFQsewGPQQyc1KzWxzFASL",
  "key10": "TDzoemyxLeF9P6cuFASFMCzY5gGZjxazx7ohCC6uBZNH7mdFKf4b3Ej7zwMwRB55RWvkgwd1Pp4YpWKLqrxxe9P",
  "key11": "3QrpMpkENq75JKYU51e4at67VPFMngu9ozfLY1apn9SBmf4ETaDLfaCjcHwLpr6idSSFAw2vZChvPo4512pzeBTp",
  "key12": "39aj49aoiZH5JDJWPGCWbUeS7FiZDueBU2qxmfoeBn5633yjdbKrhnA6o8XqMQTYEgi8KVwRDjgC3GtjT1i3ck3D",
  "key13": "KrvYKdyr28LLkgxqFWCLJFsdQtF16rSeLLEJgDhZBZFdcrs8d9kFyn6HMhk9cW99s1w1DiFWWmP4bqCZNo3tKh6",
  "key14": "4VkdPjRxc7M4JiZA7W5T4Y2SW2pyGvg5vSf7wsBcDDYyK6MnvKcgkKoSHKuxG7USejBpxGd4pAKSJSFCambEjVe3",
  "key15": "4wnRtkppdgyWDVraH7X7gYuiPjhHAE2kj1FaF9ZGRgh4UW8DvbWfrnDQZTfnuTmzBMayEY9guFH5iJTrfgagPzgz",
  "key16": "a3pYcPUTzBmnoaMF3J4STT61sxhQHVM6w5XwUEDa8SyBj66A9PyJexAdRz9WxwVhBg3LSdPJytCwbESD3P2k1tT",
  "key17": "5Y2zTNpoY25cmm3c7QrRyxGE24NZe7SFg1ePw4vfPKdxciJVs2BRKMqgqbirj3UbAq4wbCD81XHgo5DiHeLeud58",
  "key18": "5ccB4ESiqecKCnjhfJzwauKZBqrhXRTwcu5MDgXFcbupEfeS1c2PsPrxQXmuW4F5UELwehhVJULyhGPmsf6kdLLV",
  "key19": "4AjUCHUa7kmcFACu7esfVLNJuqLHWfDbMV8dbRDdn58syf5VSYrXYsWd1pJ9jBh3pK3cuaynM6jVZCCtiG16fowc",
  "key20": "Hieqo8T6HhatY6rbiTmY41KAFf1dKsj2y86YfWQVD9Y4kuZufU4RKW8h37TEhrQF3AdziLRFg6SkGxhJ7rLzCKr",
  "key21": "2AEi9ynMa8Wjq1bnfwcPBweeFCW1uiQZxLtWpExM6wKDGz1QpBszpBb8fj1QNPRe4a1rYLD2j9SUSbTU57J4AVVP",
  "key22": "3mvpuuiiGoyWJ1R2RyLP8tzkE5wmnbQrgS7Wg6td4vtaKvr7FMMh5TreQeh5Ar3S1cpoCzZ3TixkduBHK9qy5e1g",
  "key23": "4RzfFvrTrPs6WgNwFXafji2aEKy4CEU6ArCRdCXCtzsDXfdGa1psyzsvqS2DFVxqERrK9mrezzscvcKyRDZ1S6Pp",
  "key24": "2Uga5LkSjasbeKs4LtSCivTauCHKWPbrVuXxEWQMNHRC4jEhtYmx3iohqKbHRZboCRsWe8Vc7YPJXkcAzTAB4Yn8",
  "key25": "3jYTXS6u14wE7jb8Kvju9oqEcp46Ta239UwiZD3M6CJfnXHB1fZvhsGp9p9tdzZPdjTCjPE2rKebQYeWnpzWXUf3",
  "key26": "3LG6wMXQLZUzAFvPSuCf3fCd5RYxWkwNF4KXJ9crkEXCdHojgKUVV9dC7aTcr8ZpyteJWWT6XWE2gFnZWFLvHfW3",
  "key27": "3wBEeaxsbeNuSEcnc2ZLPcLaCnWdPumKEcDyerMusyqwivA3nFuN6PUQFnCsqwdrEaUmDGK8hZ9xLp6sLQjcmAT6",
  "key28": "39vdqrNZry14JH6refZRmMVetc5eHMtPNiZ4H7RLZPFFEZ3EbygptE7ndwzp4zxo9cbQdXvxab4K8TSn4AC8JciK",
  "key29": "3pw2h8tG7gtx6LpF5xssCZyuMQGnazoPzH4m6gzTHjjJNaaEHtoduuDvGnKgGBnBKKjrsTVzoEnHJiC4P6ehJ1Bd",
  "key30": "447KdFGGj2dMmSvGq5qB9iLnfeYVHWg2h71TuwDoeVk2SCpurR48uoonePB7SDxQrzS4fMEbehd9smBEX8WAjit3"
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
