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
    "5PLgwdBVQV9LEKQgAWcCLK7e5XwYsCp2FymeUDSw3oqVuNR4qsufa3LLM6LsmEbQ9PpWEZoxdU5fZ8Gk6TuuL9XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUfH349uXwq7YJFFtbs54hhistbqSKG53Wqxfw15PJb1kT33n5rB3KcnR8niT9aCiMMniJRK4UgBnkB7NZnDuTe",
  "key1": "5EJd5vZGVcdtPUKa513quaJLq3YdTHjsvkHUNK7rd8G8CwQFyPj8nqF35RJVmLMgTZLYRetNtt38BPKXxB9cHhee",
  "key2": "NsSRrxY6gWwv59yprAM1PAauHhgEUph8y17SVUXFBgu1NGKPz4P7XYCpyQx85i3C2d7yhyMVPB6oLpgGrE4rL7g",
  "key3": "3ZZzd3MgALJ8z2Pi8pjKUAYdn5UNatBiLW8XFQBDqUJawupvWq1pDDTMFCFhTxffAZeM91EE7uAtmorLmbMPMs76",
  "key4": "25NdeDtobJvPfU814KPy6xfD17JbFUb6xtu9T6rXh6WsAiL5ZJwSzMJHweFFDUdNmMWBguN9YRRc8nf46oP21Qwo",
  "key5": "4KjL1n8HYcAs4UENnHPxLDhGD6TWTmGdTKTeQUAdRWBMSiZG3c1g8MkVTh5qFobeZfctjW9LPT4e1Jh74BNSKGHY",
  "key6": "2HGG7R4zyYtwkXroTXS8tPA2BjBG5JvT3UyvQdewrw7EpqJgSjjki1CTyCcrVPqt4C6gVkC7BsM5UTEuuyQoeGNg",
  "key7": "34oKZsK2UC9QFnqxEX4az1YnHxzBeUkso1ybU2eS4AgU2jKbNUv8iaQigKa1Jw5qTfk7xSU7xStAuy7CounEBLyB",
  "key8": "3SRRXGLegFn3S11EKrBAjdr5VzD7nUAfpdCozTgzQZH4MBKHWmWyTnweCC8ZGiC1fZrEBU5bjq48tw9S8es3wDBg",
  "key9": "2XwkQcWNqYMoupXb3Pi2P2teugbMtKLWG9MFKBktrnyLXNakKy1WKqxUnmLi26waFvAy89hCdCFVxZpUnymxokm7",
  "key10": "TX9FLp5tEVBuJwbHhEar8jrm7GBGDkb2esWfM2Ea6tq1GwznJ6a6SG4MPbfS7awqx3kipQMRGzgicWSN9hFdE6T",
  "key11": "3qeyZHpHyhzb8LrATugh1PL5Hdkh3AYmf89e9ALpCR8iQj7jpv3eqT4uG99MGnf5gc8y8UGdm2gTWmmnioqF17An",
  "key12": "5h2TebfmhHKmbdnXSLGB4vc9ZL1sKqZVmcBLrr3YaFDWiMz56NKWUWeXkEacajVbVZdnQ3ZoX4981rjukxzGsKVT",
  "key13": "PP5Stmva8c6v1bpXHk8ojTHHRwty3avie7sc46BfcR6QWBcxR6fTHj6fkczXVLfUxhCZfPnt8SFeKgAtJpHDSbi",
  "key14": "4s8i9Q1VDC2K4bkh7zhPrjK7QKdnsDNY1HGsFw9wSd8CfLphLJPfiV1AYYj4R6EtKi66ARN6czX7sYrCpbZ1ug1r",
  "key15": "3K7Uex3uu9XhH48nMaFJhjzSoN8k7pLG6DAUMP1hRfc1YVxTQLP36qvcB8MHa5iTossH1XR4QsXrLKz23YFNdCU5",
  "key16": "4rqRcyXXDszJzmdwH1aE7hSPAvA1q3TP1xEV48dPDatZWJji1MvF3i3tHnjW5bJbneFhRT26rJDt9dHFuM1Vqcut",
  "key17": "4rJGB4hRM6wPkv7xdLsX8oAEtXh2mUepCiEhUya2m8T8H9NXtWCJh8MNoB82GgmDdf8H66Pb9bUizcaHUppkEuhY",
  "key18": "4yMH86s2kDpjDZUhvf2KeZ1ubHKAtSaz5SLmX25k93CuoFuGo1yx5xi2reJKajLBMVUg8kBxC1ixp8vJFrQB9aRY",
  "key19": "WcBW2osTuyeTQAU6zF2oMeSRFbWxYJx7pHa4KzCVbAEsD9kZMGzWZNoBuapQKgL3WkANu83ftngp5UoLSt65EVM",
  "key20": "4tAqFaQkF1ASB5eL9N6eASTzJTT3NUaDfPPx8EHi5gHQCu8yU8R7YAEDe5Gas9Z3QjEFB6gMfMh2fxFat6y1433M",
  "key21": "21AaUBqERYUktxT8jTajk4c7ETv5Sm8V8k8K2P8Ctyvh3gtAGgEBkSPaYmVWzCuKdj8Lth2ShMAR3EXwJV4EFV3M",
  "key22": "66FBUnkyq9PxjbhYHkz5A7KLgGj77JBEM4nQ1pshwTeKjBnUWPPDAHF2XpU4uLdi6AN3trQ654PEtFLSthP8TGqn",
  "key23": "2p1Ji4EiwqFY2U9nd1FSLZt2hV5Ks2W3kBekJ6wd5HQ6iUta9ivRANtF2eNvgYnAwrGabkKj7vyBD4BxVoensPqY",
  "key24": "65D3SWqpFxEE4ijER96xB8HbtL7xWiszoevJxQVrCv8ATwLsuJYvABnUurgJuKvgTfz54vPEpSJb1jXLWCrMH3ra",
  "key25": "3rQFfk9JpiyDm9TqxLG6r2iPus6F9LxkUXNRqCkW3FfoawZ4F3YRv8iLSdEA4dLSqdaBi5idZ3t4hk9fTCHrYctY",
  "key26": "39K8GJxQjmCkQtqHVfQ9aSrJ57P9QTgwrt8qe8xj3NjgbFAnCKztZ9U5gCfvfUJnFyij5FK8X2aKky7rgUYtNd9",
  "key27": "SzKtwh42b5AEDYUpXvYMtRNQBUcZdM9ZLxLHvUvPhYaQRyPdpZGpzLYqWXXzWMeUpMEAUcuX3ufz494GkesR7Va",
  "key28": "4JA6hgEf2g4tcLVx5uDgERyW7GXdV9bfrGS2TJSMU6EbHGggworwdcJmsjdZfFhZyv2E8u8GcgctYyQefC2T1diL",
  "key29": "43Nz2HnU1tV9LwbhAfMRh6RPpqFJrArxc76sw1LZKpbrEQeHYYy98f7sok5vzef3GeLvz2jvSZJTmm7Q8kDTTohd",
  "key30": "2gU3AhEkwYKoy61BdErBN4NsAPsKkUbj8sL7oMWzryeLC4YJeLAM7VZ1RY1vbXH5itqFxuvBeJSrTVBSgdxBSFiP",
  "key31": "8WoDT7o9JzMeLMXMHTCSfo9NM76w6VRgCf5pAgaSnHx8VpXdrVFBinDQjvXLFxME13kGM81FDqbgUEZiLeBtAP2",
  "key32": "4f9UUXUyTZQzDczKzcooGjQUqH7JuP911azuUud18xWV2KRiRh8cFSJGFEAZSKHwX8GPtw3P3uKoZZegnCEhhr9F",
  "key33": "5DCSFgzAMwVdCpuQ4FZwUj5rprSH8mt6CvRASVaZd2DfB7jt71p77C1CcG9PXYuzPr4P8cgtqDZavUL5XGEw9dkW",
  "key34": "3nN2PxBdffdCQSGdhaVwhW6F2hEe7eXoAX7SjBmpS7C23a2gkTybNCp1F4kaowXBmCof8Etf3kKT1KCv2HqViroo",
  "key35": "4RdBwWheYdRK5HtnqAEJ1o9QzqRCCmmx9hTNziPjfZfLd8q8UBzGNWRZ8cmucLqg4RECVFvnTYyVzCwhmjH2xmNq",
  "key36": "3anuxFQvRmsGy7pTWngm2dcBcVAoka9s7KioxSZiUS5JkbBn2aWScdTbZzpd1ofsSwaJdFPECmYKfUcfupDN39Tc",
  "key37": "5QmA5qJwtvGuMJqECa8C9tPeajZQMsqxeHojQpzv8t6H2wouPYJqh1SzR7nt3GAd78ZyMP93WTEoHiHdeeCkAqT4",
  "key38": "5wmEz6iCW4NvWNbigcJUxcLp3Q5QuzatWUQ6o6fWuYDy458UoL5K6z8PmWqY1mctVr4XBm5qWF79LtmHTpFPQx58",
  "key39": "2WX4Hc4v2NndeWPePEA94oD3xcsnYRhynmYWNetYuRMheP1S3kB4hpfaNSJcV8eYM12rkYB5zWJPeHCZKSxFcnSe",
  "key40": "32ccFsKHP5wcmHBwkktjBz8wbXxk2b5UnRwmtrzZAXB6z4Hpf5ttJQntGe2c3cz3iJ97VshRjVdBjLjUg4PYGXVF",
  "key41": "2BK8iZr1nJNjmgG6LWh1P6MRGH1MGQkmNFc2YRU1dHxnUQw9DAAkQyCbw3gF8rNSobWpKEcUcqnZCsgGGPWLLhaj",
  "key42": "2uJt1ZNf6JkAUVzr2RxUfdyRuJYUkuiyGzZdmasHY66jUvDXv3vWRsehuLeHJSF2mADPjqByYp5scJKmsWG1ahot",
  "key43": "4XxMGZjrZsqgVjqDN47P1QZVDVNK9P5GNjMmFRcbWcatnYifNMR2WxRjuqD1ZhBs1eKgMn5GX5ERYkCWnnMuoxtd",
  "key44": "5zXGCTAfH9tDiP9ckc5p5XMKXDfiBBUSgCRiutazEmMNHtwvWjEmwQyKidof3FsBFyWJkQ6ZM6DvHDE8zwXF6BTc"
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
