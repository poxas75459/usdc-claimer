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
    "2gpjVUp2DfSiQ4tvy1hEvyKxCFMvLarRMktdMzDLSR5dnfxbvqACrJtKUUQFs3djqNinQAAeoo7zBsTpQJr6yPbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHtB5HPhjWnRjF6UnRqG8sQFfFPVHNvrE3fX3E89Z6tTcm3j6vXywCqg9UQgHFeMLB63mpLNrtMaUz6E9fes2Q7",
  "key1": "4C82Ct1eceeiL5jHsTd8JJKJVmp3oPDeBecTSNRwXwnzuRwPSPftpbcHySzTVrqVQ4PtLHYvyM5jzvK3zAsRchth",
  "key2": "4XRuyK1dHV8YMU8pTMcw8k98PBWNXMUYejqcYHNg757BP4KEdmqPZoQB4AQtKiwv8haVQESfk8TNpmmzYzG7XaqW",
  "key3": "4ZexGhXiLE1KP3zg3DRRjsmjVn1N3Uw6z1cWk3LFRuV3LuGwbu2ufyw7fY5PUvpRwuHzefriFs71XHQeh8sepdAQ",
  "key4": "5rWR15zwE6P4616Eoqner8MCvPrUcumdYi6wvj71wRgEDigkKTTCAqsA9ZDV7NfCbuyv94ESdeuWLNw7Gg5mG559",
  "key5": "gCQu4jpFUeJTNFtLMBm5XSkUk8aYKvNH7P1MRtkgwP3ZojABqa6kULfdrjru1AHYSFgvyzYRoSC1pnR1Ukjgi8T",
  "key6": "4Zz1wTzEYW7EJNY9zRfXVA7Uz4VEKwqfFo1WBo52Mpakz2AS6MZKZgJ5sgizwjhGT8GZ79MUJha6Awxoxp8tj5M",
  "key7": "NKZy348VoNkNoryTELkX5zRY6rphHm3qKKqwHT2Ebw7tKuG1z65w7DeXJQGCAg4eDptUFWsED5ME5WHFjEEpDFe",
  "key8": "2xHEWGKrGdjJPwETudcyMa8VNhPDtpnTAmFKMakavamGqzWAMgXSFvirSgDo27iXAyDK2HaY7kcph4UBbXU2EuNE",
  "key9": "Zo6vfMDzL6hHrpZkAaywACnRAcJigpLcQ55yZCDtr6p25RFAHbGhpk4XG9wuq8PJDSBNNat56uZCVNN54Qbw6k8",
  "key10": "ZVUthsSDFdUa3j7ed1qsXbsCwYY7fEDeCDFnmt5o2ATRbxxv3qnmC75qCiH1oib6i2ChnG74XYudpxAkjN3mGH5",
  "key11": "dBhgoudg5JzP2WMF5QyVuoropLrCA8odhAKLF6xURasPmVd9W5ZWKAtX8BtQMTDbUzrTbTRwWxwZEEmGaKCgxJ9",
  "key12": "4chXke42tS2shNwULsCr6v9nrgFaWKBvpvsEpaiG73RyeautFAihbaYe2gb53eMBpfdo4dBGgbGB8QNzi7BveF1A",
  "key13": "yizYMF38DTRWog51Syu1D7uCroMHWkYRULq8bbyoPBiL3H1eABAv6dmrbTuREEU5eWSPK3SvnqzobLtNj5mHkER",
  "key14": "5vGj2jvivHsVmbUPvcZvQ5ck8MTvLr6jh2oTfXAumEgE5H5W8ELsXiChFuSiJ9MfGxqFmyrGtk8u8c4e1bN2H2C",
  "key15": "3hgQEjRLPaVqn8SCgtKnWCQJq4cMSLuZs1wexUJTgPoJ4XjDVxDJUqgz8ShVCYF84DnxbAg3KjParcNKUhrXmRgz",
  "key16": "5VwhBm4vSeyAix9i8QXZYLGUUKFhbTvfy1nECFiyg7uMc8H7MJn7u1oiHqQFuryjg9eNEREEa1iSwkauSA49YStV",
  "key17": "4unS32xBB1zFYfimSH1pKkEj4qpTgSPaJxvJmHcctR1tej9bduuA8UBqHxXgV5GNTWMfphSLcdnbyfzpq9caKzhR",
  "key18": "AdDtYeBwsSxiA7v2raR3vfYaudWnkqbLdmj2TTqGxqPWs7VD2QUP9jaQAfgKnFNJK8m6aTrebrMnhUTpEperNZ7",
  "key19": "2LjBtGtXtZRrFfv9NmuySjZakfgMX6Lf1CU5dPzBsYKKGNbySBnLSgppUgvik6at4gnC8Trbcmzi3b2YKYx8zite",
  "key20": "4bU31tSmPV8jTGPHbVmXngXx5XdGDArSyro1tJR9zZSqhbpUdBMQR3t2fWnYhVAPsMGaCpwCf7x6QgDB3QkjsC4Q",
  "key21": "5gh2RViWKstiqMQ5HaojdW4rszBv3oqztNXF8RPaAF3UWH1EKFmshA67aWgVFQFyHrbjVvUaSJxBYVsf846XHsHk",
  "key22": "2KAdzk5XHT1N8PjsJ4GFn1FFuRXPJUVs7gCWCtb7JWnTktf7mRk9ZP33e9m1VPyRPTEWziXsE6iyakDfoQQYf4aX",
  "key23": "2j8t11tAja9LMvBivZ3HFZMyYmX3EUBihYzEuGy9Gb4H1yMbkYLYBHpshnSCxZQyBtfuDCx4Trxwz719mM83x8Hq",
  "key24": "468WpBY2xBoEbYKkvTHBcLVMHDqUzumpDAtXVS6mvunossUZCr7zfMDTvBiP53R6KVi7MADKLQB21q7oiVSJt6ss",
  "key25": "64UiCjGrLnzWhfrY41vsSxAniC6pBYMzyv1XmTqRXSGFQekii1HfKuN7xnAksq75XqgACdPjNmuumtKshfvcrBZm",
  "key26": "cMz5rSYpxwQrhqhdWmzqFTk3zgJbTfPRoobCozEwC8TSZr6Qxb9HMjF9XSETqdsvW7qyVWiydpJTSvPaW2Sx2xe",
  "key27": "42M4uhGfJ4jNqoHyPL93hch482Z47G1dZPiNyfZJbQb5kz6JbWqEr6PAiufqgkCFoNNfMd7zgKC8ktuu8uRyB4jR",
  "key28": "EyRS3g6cWh62um6MaZdMPyPjYV8CkMJtwvykAvrsQDjWkVz2HciRA4i2F7FVh96Fw9Kc9aSp6knXcoGGP7NPCJH",
  "key29": "5jeSSfswH6zzwfDr2uUXRhiFWh7jNNq6eeko7gk9HjFRmvwf8X4iMDCsMex795N7rGcMT4hxDnjFouUAZY6mSNFQ",
  "key30": "U6jGCuhSguLfYNBjKWwQ2hW4jJrZf39T5LnXEXwi9BaKeEkjYF3awHeH3Ay3i7Q6UrhBJgqzvh7pg4hoPag5mLT",
  "key31": "5vFVdDDrS22U83bu7d4YHDYDGr4zYwZXCBAmdeXEV5wYf6maZXKUWMRL2NrwdRymjoNQRrVKaLXRLbqiTBkZ81ib"
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
