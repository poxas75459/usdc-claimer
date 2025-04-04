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
    "2ZftfE9ze8ZBARy3jecRfm17DmD7bNdt9Jq38CbqghZiJnsbX6wg2RwrLJNemE4X7zsxUsUuH1vUQYtChVSHFZ9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67LYenEmHbHsciBR4dBLn4hux7XJDmgMpfrafxFT3tv2Lsn1Gipkk4m8jWaBj5FXHCwApSHhHpiu7GmXpqYM2ULd",
  "key1": "24Sxg6wCv783kM8nY3b3X8nb7AeUxc3ekuYP7wXcoHHpHvptXZ5HBtURiSRFdSf7Dkc6cvVUsEx41zgwRfVhmNXP",
  "key2": "2AuzVMFeTeJov8x5ChPNefpLaK7cZzkw4WWv95j9dhG3B8vCGuWb1Qiz87udeTdUbZ77RkyGcdCRrVACALMvGqYU",
  "key3": "4h7NejkCyxFpGsdDX4avMXtuaZkfDhgpDzz2mXc2QJJpHMZpw4QprT2pv42mEQm37ReFVw3nVdMBsbYQ4rGDrNzD",
  "key4": "qnerRbV44nPoqLyK1AGKJyoGBuaamyZtJJp8SFcXSuoMLzQYQKJYYwd94PTnJnmT9q4Fnto2k1Q8W2NSwC4z4Y1",
  "key5": "5P9gKxvYtDDQ428dvMWcQYNXiNvSfWDxr9vT9quoDPL46H2CtyBdm2pcSKn7eG74W2MyQ57kxw5JSHLbGJoh4QY9",
  "key6": "3BFgBtoHySmoDHcG5pSvHo7z9XAxXTv9T2GfyQ7C7VDqxPnwk8ygL3a2edaPTZZTfnM8CJfigkbpzhmtfU8K6deg",
  "key7": "4nnKSZ4C4LBGKRkc24EzdwbKGhqoiUBXwvDcuZJATpYP7aNEKG8iD2UHmYQnxug5X4uqVLTXQ6dyxDNCkzQtoD3R",
  "key8": "5WNssKDEhK3NrL6RYYBm79XCFLXbxavpMNqK4GqTEBXAk9Uz5zJJvBbgUfMpgomR7VjVaw1odpb4gRXYAAfCocW",
  "key9": "2ZVEuWG56CSrDyBwi8xWGzVWfaoNFN7hiqGRohZUrLjjF1vw35cN4DZuQFogLdWb8Jkv2GVtiJh5HxNLhhqD9Pcv",
  "key10": "1iMUe4G3aSV29E5ftVqA5iuEyVsP4oqfiq24WvqV7m6WfvyPmZAhcJ7S6WfQW2TDEYhFM8iBPi8x8pH3PDkYdVs",
  "key11": "34fSgU5ub6mbHyub4vPj9RvgdQjhPHesEsvVgJjQbmS5ykUMxxgeL1uH4Aq3HquJmefjLqUp2RTKRxyamLab5KJL",
  "key12": "3paNfNRUijms9vc4Z6cygUNHinxXiSXRSSj72pWtnZXgEtzo29wPtkSQagtvoaRdXG8Z29TQ7fNoWpDTdv2oPyRA",
  "key13": "2iVrQzrgJJVRvHL2FGYef76zTiZNd24ZoeMY6ikiGvxEupbjvw2r13Aj5pXp6wQjj74h5XqPTq7XPtYfof6n9oeX",
  "key14": "4XdzDC8HRe6j7XBYLZQtEEVvmB5berXByMb21RLdwQxax3NFKMtAtmJjPsdhyxG6sp3QFqNQ5RW6qtEqgwyA7Vg2",
  "key15": "Grnd4KmNSjQrTwBxiyRz6HEws47PdiyBi4WCFqfAmAku1cvq7aB3ZFKtBUztciEsw8GLNimCHo3KWSL72ksLq9C",
  "key16": "3TGdPkEK5sJRSZuz5DU12zxgsetba4KkuJVkwhL7ohqfoEEMopnLNj9SPGb1a1qhvbPb1L6EarT2FNPf9gEqiLbn",
  "key17": "Qs9gTFbuCK5hoyWvG6D4KigUyU2KAX7vqyD4mny8dVe8d9rj6XCmq6amRjcBR3jyj9AB9ZvP9fQdwqUHuLyLfc5",
  "key18": "3cYw4t7aVwuRMKLNY88zKN2nbQ3ucMetnLMhbx44fxVSzMNoxjn6hz2BY6oLKtNVcBBswkEsL5dHQ9kmYpaDj6af",
  "key19": "2jR7YhaBbZEAbXnf12E1E1TKwSfPC9e9DnQRZapyZFuo4Xv3YAsLNbKPArCwGrf1rS7ksNVyWq96pg5QuZmwfBCM",
  "key20": "YrV1oMjHiSVogE41Scp7GvWEC4FbM8jBJ7Gb2d9Vd7g5SakL6DxhJc82rJUzKDCLdsYydAmias4xz16MgHw1mrV",
  "key21": "5cj1mRLBzj2Ewt1ZasMas6D1cN98hgUCoAL1sEYG6sMpB72EmAztpoText8Zy4VZbbMKVUfqf6tt8Rgv38f4EDTW",
  "key22": "5MDR4zfmAUm2E4mPbaPWRgUc8B8PZoxvvY26p5d4WEAJPLYhdLzsRrMnKnont88FJxpFR4L1WMUFD6DB32BJhBhF",
  "key23": "4JfUdYYDWAoJfL7HsULsbA7QfL4xy3UhGUfN4g1FqLbFaszJR8biMNScLdNQTN8tYkbLayszokoxi7wVtsaiXR71",
  "key24": "3p2sjJaEBRyL72Bc5jymLwE1SMpTfh1YzK4sv626SQgE6wqYqk1cBKwTJEn3VFaHhhYJC8uKwxEke6xqfU82zon5",
  "key25": "2grgHXR1mjaHziZ2N5JHMcA4Ld9DEJSBpGiRhDJ75o38Fo19QJtt3KfxFQYm54QFKQPimmaEpMbJ2Z5gRXk7g2UC",
  "key26": "3nr2PA2xP9JbzivKMWeuVy8Pr9hJnR1Xbc4LRavsb1fdJVBESQ7ABbc4rptxnjE9fjGrw7cF5F42X4ijmJBLywJE",
  "key27": "3ykVY2WUvJQcRQQaQQjqFc6cYZV8QyNEbxFJoRfx2xavThXs9hXscRkK2qdCs17LDQcmfEdkeTqqkMHdJ4nQDRVN",
  "key28": "28ym9hMT8jrGoqgSrhm5M6y9JJFmmR9j9nGDiroX4KZiYbE33Ug1aMNhECPNsru7XdDA4dR9bWTqo4gQyJkHHGJf",
  "key29": "2281grr9SEjh43TM8tGdVAy2TNPGJLLnAsfy5RQAFPJegFCDdXqmfSppRsoPwMLfFGCquL94Y8GBNYsKRw8PnDo4"
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
