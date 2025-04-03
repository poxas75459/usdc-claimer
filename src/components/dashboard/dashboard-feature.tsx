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
    "3KZBmSC5fX4HauDZX5BoJ6oLzUZ2PCgLpkWx1etN7RgoRvYLtzR6UHKVWYBZYLhK1ESgnBDajqam1KndLLhhDWc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdjDfswaUiEaWzBejkAur8Qo61cTk1YvKsonsWQSzzgafYmHf2ehk5J3NBvAfniSudV3vQJGrLiCrpnJRfUeUdx",
  "key1": "3ypHL6qJ5QjAaBapwKvTd7fUorwN6Jneqqh2gbeGov5hq9HmT5o1m9vWS9i8VGdHViEtz8XdPu7YMkQQq5dnfieV",
  "key2": "5zbsozpKDQY6TUQ3FMuJJ24kzhPEJM5miwC9UiaQptLoSkZpQnGi9hhVetQjmB6C7wZ5vvFu4hfxHLUJcxEoCUcV",
  "key3": "4EUdtJyZocQstTenByfNzNXNuvpVWGmWh7CVsuYyqnRTu1zeSfrrQ6TapYLECZXX9YiSJF94pjE1XVs25axkieVq",
  "key4": "3HMmSr1jMBaboG133yPQH9hrrTE6PqiFgq5pMBqrSaiWkNL6bbUwuUkM6m7c7yenmrMTLXVrvC32GCjgec8d17ic",
  "key5": "rJfTUvPyHhf2cZN5WRR7rPPxmU8znFLPPNyvNVAqm4sSqgRGEQe9EGJ2ptisb7NrdxFQAevwtM92Y9MQN1mkaNc",
  "key6": "28B4tQL4ki93Sk1piG2cytZPvHL397zAap7AYNbT5Ca3iAoxUqtcLifPAxr78MWQ9qKX4rxKiSLgAHG99mTBo9xf",
  "key7": "2YYiMEYu2fSjDEp2QWNbr5wHeS23WoPCTT5b1AERMgHtqceUY5jRi559YYSKSAfYfSVpHbKRXuCsDtWBs6kZtHo5",
  "key8": "35aEY9a1Lj3TnhoNrn7m3Ma1emXkFGXdP67mWGUwZaroMVzp18b2s5nmGh6bbpihZYocf4NkXoQGBMEmDmafr9R9",
  "key9": "5WzwjYBU7CYoqiLagJT9xAKMkaF8F5yE2ZVEiZN1xSjQVTennRzjUbmeMtWsWVqufPepxLjUEvpmfBmjL7QXMqZ2",
  "key10": "5ZjdrMZPTycY2YHsp3gZN9CYRHSR8To8Nu2WBvtMQhA6nH7et7cXe9rKb1j7T2SgkcYFhVgCh3YBu8cTSYohZa9f",
  "key11": "Roncibxb1weDCCaXpj8sY1ny1YZ49rXJXS5Gb3GSwEcTHPSPH82umGsoH291F8jX9QibW7MsBkzwWJdVxLbapXT",
  "key12": "62JgNgiHMd2FttTpjUTFxBo9ak7kLcEAk8Mz8HX3idVbhUoEvwbfzSX2CAE6rmkuTYMg9t7wwAsrPuZYB9u6iMS2",
  "key13": "XT5Cj6ZNc3e53NFQsaaXNTpzJcYh3T3HJgYQCj5keZPGvrz2G4umHakDE6hWULG38tRjsd1sKKdrwj3WUPE66p5",
  "key14": "2MB7ny543ENuBG3WGxqkQFKy6pmdcYzSATRT7o7dwZCyJZTmiZayBcdHkSfKZx764KwmGb8UMi41bjrqRkeGTZ9c",
  "key15": "Yvc7TMW2fNdt3cSQfKcBLJK9S2kLbdGFTx6MqfsxRCA4yxttvZPtTNCTz39KkDTn5TNNsFbq2xjqDrTn19YtbpH",
  "key16": "fSKBtvJu58bLcH9zCrx2mHWbaqU7fp19o7ac24qUefggMnDKdA4QF128TymD2YQAHzWbS1nQZFYmVrNpVbEoTVW",
  "key17": "2vYeMkKM8SCdRYJemjpteyZwxs7GnMTeEFCMHqnBCvESH7WSvG7a31UHVadQHYXtqEJMhmCWf92s7Mz98J6agWks",
  "key18": "4dm1mg8E3BCw3gxn8xU3DPyg5HRR5sZ7jfA3nzLwMFuDLZ6Fy2NTRNbo673hxokd2dwLWmQKFBkcrGVJMFHseHmZ",
  "key19": "3989et6fFP1nX1dT5fdEQs5VeW541rZX2JbPZruQhW115yH5qUKNRa7tBHq8jQ9CtXaUnwyJXp6kFuoiMB41ByPn",
  "key20": "2VbPr9SCTgEGe7gMSAy3YvzP12GxtRjQDF1YhkkXyDRYX7apxGs7mGHLPdw9zaEHjaY1Mt8haDqh87CaLCjJvB73",
  "key21": "ghBuwZzZ8cgxovGcF1PnrpCnB7HCTmfjt8WH6X1XMqcQszrxGRCpFjcjQtSsWLVnisRPRoAfvbJaVUcbAk7k9dB",
  "key22": "5e3qdW2qE5oPNoDiUjxVuphyioFmvVG9HjggNwzsaaLjDXEy2bg1hTgpMCAbFtL9jpvsQzSwEq2gWGc78JdmEbGw",
  "key23": "9HXLgKxvPw8fwF586oexzsNV2MUoCyhXzGq5aZ7cSKNBq8VWw6dnzxj39TerH8zoLvQSfsJ73x4cyQ4KdtST43L",
  "key24": "wUWqKzqFzeLtb7aTzBf6neUrboTAk3CrL4ofmPHmXwoBgH9JBhP4An89ZTNNmzpY83Ge8VEcEaSjzL9YSQjhMvc",
  "key25": "4FM7KdSRrQVrmbb7eptbGadvZF3q7hayWo4EVwERnQDA9voH7RvnVwsoXxTTwFJjq52EA86wyubk2xq8D7fDcBZa",
  "key26": "EXXHegiGZTcpPfg5R9QKp9bzb6w1i9hywRk9tFJNoU4ykMT8Ev4qBtqT8FjuEEr4igrwEzxrJHuz6AYs3thneQu",
  "key27": "26eNABmUufJXu12JDpXYbLWvrzso7V6nbNw2RDAEBSTV55Zdp6DyTJjVw3dhGnSEM9oCvScsDXGhvNpdhpoxTh4F",
  "key28": "5ruqVHFrWwMB7KHajCSMz4MRbgT764cgDBP79TGbnK7cEJcj9u1iXHXpac6w1VWM1uJuXzyLkBj5ZKEzhjFMzobp",
  "key29": "5w83rNvSXnqYP8kbVHiG33t5fQGsnyjKJyDE4Jyoy4Zajz6b7mic3RvD1XzQxPAbawrnZUn5X8Zvxx6rerZT2kPw",
  "key30": "5AsJ1RkPKqaJGg9jURsMPntW3Re4LWvryAfVkvQLzPGw1jb3svpnrVEvuouFAhem4mVxo7d7gamjADF1kxuivRrY",
  "key31": "3kux9vmKn2F8NvszyTwEYKFGkWGiRy5MC9tXZC78S85AfgDvTu6jxx8VKWB62jJntTFgSf4oA1tCerMC3waxVkad",
  "key32": "5Lrw8EciZQa4J9XBbUsWpHCNpoD3AHngremdyrA7N8SH9mLhUejrxE37FN2JqyKR8PRz7K7r82zTeyrfVovTg9sW",
  "key33": "635m5z7QbmGVrsnaCup8mMTNL2yvtRCfvV9sCePHGKHvgEX1ApU5dFsLHCFdfXfVEQSM8pEbNvSyMTMAamrQuUuQ",
  "key34": "27GmZCe3hfatSgdgpUrChi9tMxAJzsKeBj1qrHYCEssR4amb4JnF3QcE2raQRKVNUt29npVKNkSVyds6WpA7mHx5",
  "key35": "yQpstXshHF6UgEf4m1t5pvkvpwRg27ahnrGrCHNoaA9HmYXNDzmHj9LQ9DUMmcdkywhhG9debPBJK2qYRTdTU1P",
  "key36": "3iqUqtdtQ5zngtTeLPZ8amCP8K2PdFPodt5vbQSFNnKx8MrSqAnkDGPTjGP9LgfiTYWbMTeXB3rZdBKp5rUiRonC"
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
