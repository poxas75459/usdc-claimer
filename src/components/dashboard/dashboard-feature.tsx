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
    "4SQvxTGYvuFNKrrFvJmaDxGNZM6zSwanVdWRgC7PSGe7PddPMrg4JyQeTraUmiVkMJertTMvWYhYS6YDmZq1He6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dybHUigzT6gN9Ua7xVtP36oWZ9H6G8SW8r6wgamLuY6iSDyh3KVzMg58tgbw34YqBvy8BxqhPN29HxESgiUNdZ",
  "key1": "5GvABJNJqdy4kcj8m2m2RvMatA7JoK6xp6tuEXHhXnB5hpUd3QmKuV4fhsoL4VmNzjYwgTVKLGtU4WAXWmrL5Nhf",
  "key2": "5cWPvGCoqnBYorXog5oCuttJ5SPpaCRfLJQoZSSedHwmUYF2rCJZH8HN4BrFATb6YJs6oZVJDSfEWKzgYQdgXdtm",
  "key3": "3jZVFbPBpmFh5GAQnigK4gA2n1Jmy8wSF4qzpcGL2JrCdQgeydMTiZjiQ3jcUBXYT8sg56VHrtdRgQsfF1feEnVx",
  "key4": "YjDkHiu5RGrxcvDCQbBdqxhwWnATc5BhGtJ8y4hd4rxKnNiNDUiA4PZfAaveND1DQBTQWKGF4yf8c4GcVpqPKQr",
  "key5": "66yKkk9njMxqY3VdeRgGspdDuXmQqEDmgRpef1SLgoG5bKwGs6zCY3bgGFC6JxcADw7dhFgDbQrk5E2whoBRQ4NE",
  "key6": "41aEFPpYFJcEacmaE1BZDbvcCiF7FKqXjL1wrWuTfpAgZM5qJGHPo8UxXNqq8dKLLWKtt9JoRbqk9ckBrLMiYJhg",
  "key7": "5y2t2aPBUnrwB7z1pHKcJVVkbrQQeTjwb4bL4n9cQVnjpNWXPpPL8BHrUUD3x3NYMFfKEPe8gmYTS5gohakc8tx1",
  "key8": "5F5MSujQPiqgNhFRAaNeuoJ1kgNf6xrd2fLQhJHfx5E6WupSQk2M5bPtfnD5rpRZHBAmaLJavDzLVYhBpw2Bja4v",
  "key9": "2x5U5zKXF1mMedNZMaCiW4o2XgiXAjye4m31hv3MKr2zKFx2tUvACBMgfg8Zq2UJo3ZCd7wN4wTEjcLNZyeHbuQi",
  "key10": "2zeCkL1hKVaFYvQB7aNR9VsTYdmJ9EVBCWPALWRectQoP1WFiR9zSkcfaZ1FS1zoc5iiwtc9K3jTbvxCJSkVDe9E",
  "key11": "noe7Vxj2wpth54eQmsEBcxXvzx6JcQSxMu4z8UUmdmLC9BPasZmtUR6pS8g1SEYnAQiUGi9eGYT5CXzdZenUn6z",
  "key12": "4zrNyHYcfdJQeYLCYzKrjTAe39ujaxi7iXCy7dsufYZzmmUUWr8nnz11EtnDHXp9T2q9mGkiJdyqLFZwaVX4tfAY",
  "key13": "3pRW9wnCLAzKiK9WNTLy9Lp9Ksw9hQjUYu964vhGtYeXMhrB9qoDhLodDwzMYGyuRx714Bvqj8wQtKVREW5dULn7",
  "key14": "4vVb9tohV9kHKToGnRp8kWVjFeyovYVaLHXsRtdbNvzXFqgUqMmUS6s2cHUuhnWgcr332gZ5bXypd4RUEftimQzs",
  "key15": "9Ry5bC3F4AsVDLTSSrVk2Z4v1FWameKSWVpyvSKcXBRg5bEDnbk88uZyCsqRTbTfDHGM4bBSzkZrVT99tJ78o93",
  "key16": "jXRLbVEVozjZxTkjFhzthG6DcMxs3Jh8BEKPykiLQATg7aTYaK7LNmi3LcRJpRuwC11dBBPYkqpUD3S9tM13SCh",
  "key17": "3wQpsxXHdWAR8eKvxnEUukZVE46sc7bcKNvVNFNQ4vvK7i1BHVcr4iBV8LCaDUmLY72Ea6j7qmm2u1y1gZJYywWK",
  "key18": "3Y5myXjVGJUkJ9J6mZTV6ECVRF2Aqrbnw4wVmLqFMhAGEEy2jHKAc4D4qCGC5PjHisFUJMd2c5REiaEXDsfTrnZ6",
  "key19": "4ep87jpeJuDZSUrzm6PHqC47zxkCZCZAEEmmkR4tmYaAeTYbH5fHM7X4cBbwwAyrLQQBE1Nuzs2cd63JPCvDeWWh",
  "key20": "2MFkYRsacFmooYvSTirLehBiBM5sV5RnvysCywJLdkGSpbxCcLe9yTa8fTL6LsK6uFxwuiESNNaShhwCNodi4jPZ",
  "key21": "5ZdftwrVuvXJvUVTzqyiYa37kZQS17R9JYnkdeLh1zN1ZbGDPpbzwVxzJjteLfVmF7ZTXQiYrGnG25v9z8bHPNph",
  "key22": "4dNcAzxBHmdK9JF1pSUreTfCBqYFchBuwZDypPuUdYHwwNNZs8GhhyoHpAuJkpsRdD6k4ZexWuZyjQe3767WDGcx",
  "key23": "5yTbmUUZtqgDLA6rdQzhWdvCYGtuUxVpGTWr75Vo1Sf3jYNmxcsAUsZLFwmBNZfXdNMtaoznE6uAYp66BoD7yvdx",
  "key24": "2eRKLYqsYL7EK3oPEQZtkPi4g4ySvgnU1cYhW1LV9ysssDPbyz1ntSErXdkhJf9HvAjfjb8urMnQVHDxQpA2y4EY",
  "key25": "CjydcczpxF3WQwYRkFbDhNxkA4zwVH3ahsKqwA44K9nsvG2xLcygenJYHmJqzr6XfRYnHCsnEaaURczCWjA2JXF",
  "key26": "oLmREn2Fq7UyaH18qHxkt1HZuhbkAaoQZvH3sYE3zWG2LiVAnvGk9tE7jciHpM5h1K7W8aoJ8439nu2FaYxDVjT",
  "key27": "5dAg6jrvpjP25kidNU1NXcsDizvdQ9Q6a85TE6aZhuGApZ99gNfBQqPeHtzyUnArZaCmvetEAK9XiGrayn5dvbBj",
  "key28": "4M3aWB8951JzmmPjYhZDgBTuQeqan6Xxr6NGYMzQjq4TZjuWG741b2dwC55C3mAegDq5BEcSVzgFzJUwjAfP98cG",
  "key29": "mpf5u9KhMFKCTP48mfinR7GsNYfX5gaHcrmQNrtCGQETzwNS1cmLSm1sdqqKGtCQkoGrfK2aS97kniG4r35kb1k",
  "key30": "3LfWeymregb792U46gq7pW4vHSQit3L8gc3CpjtN8B9NDRuoDq3RZAoUzvT7jpfCcEVCyeDqHfRrTdoQUqCZ5dft",
  "key31": "4UhGp16D6y4yb2azUrD77rgMgxgZzWQ79hFHbzfe5NssY41pqZ5nL2WcpvtTmQEYQguvbnnryHHunnoJ3qz7w8H8",
  "key32": "3FkVbNe98MyktWzGe9JDeGvn9ps65ApvV1sdqb5ogSzLYA6bstv7vFXyDGQfkigBRWsr5hqsKcv8Cc3e6pktpyDd",
  "key33": "gbdykKqsZZopcfCaF18fLDAm4sB8i1GvPXn1XnAsfaBVMKuybHbRWkUSV4JNQQMKiWFFx6ZSPmo2zBrc5J8fHga",
  "key34": "AJKK9M5hHkoUz3nk5vjPu22arHdscDaifG1UQhkcEVnJj2KCSN1yW1gCtsrNoaX62JrvRcvqWNXkyjo8zLE68bC",
  "key35": "2Zs8DmGRWFHwzZzytSwqM8jjaCcaUjhWSxStMoCyNGK3r8TvVoGzqM5CZLor1CGd3ZPXLUJGnSSCpggquwP7qKpE",
  "key36": "2M11YSybc2oP9AVRFcj4HCFETqzKRD2SJWuecnJSnhH9id8anhhNYfqXJYY9azAwZNHQsxBhVaCDt7LtLpVUNk73",
  "key37": "42GLP2D2XHzvezzM3UcEbk8GGa22zFYPxfHCa4C6VvwcvxWCKbk59azAENrcLvsMDkkBsG6Ce5KVm6uEccPLS6Wt",
  "key38": "35hRT1S2jCd8v1HVpG6aaFHDRGmJfptD42hCmxFZ4BAn6tAv7WZEqddLyLHFhSRTCPbQM6yMcxc5ygYJhF7UwEtH",
  "key39": "2vyKQgVeqZD2srXPVkXbAixcsC37ofMYXL3vrdnDLR29KwYbyiVtw75MA7xzJMmwNawhMY6poEfyeQEppvKQ5P9E"
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
