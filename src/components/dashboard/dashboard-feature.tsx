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
    "5gjTJhudgg6MuvQCFYnivfpzwjWrSh9StsEV5P13Ba2E7ToNhMC14R7YinhoBbfwT2gfwPr3bE5wdZ6a6LJgS2QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yStktQauyEs5TQ4Kr1NCy8rPqS4kjk9EEJkpHgXzC8KskqUDd63Z3bHVJMMYaJhJ7vWVPGSm2HiRt82wDhZpiQu",
  "key1": "2LNsBbST95kEkLVBH4u1qB1yAMzNwsL8cUVVYjY4Lu6WTtpn2zFVXW6rg8UbWZjd5YTFWFx16rg3c9fGWbWA3aNz",
  "key2": "224MGWZ4Cg9QxNLwVxBzEon6qfxs7ZosuD4DsuPXMbZcvU2GTHKvyvwne369W5aNxVWLSL8iAtt9cAtedScLfPUw",
  "key3": "xEopCyC4xs6Ld9HmMAzTK7QzHgAHTr2uqYtChXwWE3goHmWpFhzHcuSW4h1XBTXBxtcpbekgg9mYTWE3teLSwDL",
  "key4": "4eGCjKnJVQ7Q2qh5WgppdoFEsGcE62xP32gSo9mMnSwkU1zkzyNPprE7DRXDTFfnPQBc8FhdmyVSZkBLkAVSEFPw",
  "key5": "bmQRDwSBBZnswFDzahfYyupPMWfooHAnu72NzGQKLhfCZCWTbqm7EfU27CUJRquGKCeziuEFHP4as26uxuYjogA",
  "key6": "2XJHW5QDLwKop68NJYWMGuQnQU7JQ9wUuDUiHqrowkicrpnqkCDoL56GYsN3ndmCAveehPaDTpcTAgrigW2PsKpY",
  "key7": "2gFU8WnbQ8Ahb5A8NTvhKq2zBWHszfM9rcvqgPPkd652RZ4PxVZX6sC632nWqr2RYWdS5YBWFUuohJFxhmknVqcz",
  "key8": "4zcwNvLph3S4Yr85fugyvSr8X5BfvbRzThoXDrSe8izaYj56FgN8f7pvwrobdDs3CHkbzaiSCiM9i2n2nE9DknAs",
  "key9": "4sFgmYpNbAQrWbh8JxeZUEK2zc7N8gYsDzkzEy8pPBJVape69Y99EuruBi7nBxm6MKdgRyxwb4WfxPHzEcBcsJE1",
  "key10": "84wSk5XmXFoGiWQBHtnQg5cEFyAE6DV5CKQxPsk4aXf1nq913TJiNDfsx6sZosJv3LmRLtKto8i5H5gAcCjEmXZ",
  "key11": "4xd1LkfYNzcywxw942ctbAWDSKgcrBb1XvoPuW3xkiqHR9AwaSwYwXGu8HeFXfzaTEf1cuoXv2Kfg6LGcchGenbb",
  "key12": "5FathJnJXY7bMKJBpvt6vRSFhXGztgpLWiP4h5p5vtDaSx49XSjoXzFULHi5sqpkkgtwN3cWMthVhMxtmFf4wCbb",
  "key13": "42ZnzWaAgthzvrLiBntC9w6Er6fNH9kLUBVEH4paE1dVE4SHeDDLLGCf3ixkuBJzntXKw1XBCqC5hQNGc2NBRux9",
  "key14": "41HKxRWjc7KjgUDSQuymTR7YM5FJMMhKKUJHgrbWw4JqYBM4A9HtPL1U3MJJdaYBCV6BKr6GchAhg6aNRdWFfub4",
  "key15": "54gNXVxVFMGMdU29Q9895zjcZqTHyH2ftT4vBRGsYD6AbaoUz2HQ5r2qwj7YJikSbnhMdd2pmX9dYcUMo2c9B8Ki",
  "key16": "5W2z42A3BtURBon94Z5gDEgwp8A1GfTNtcqqoxydvoz1GjdtxyLvhzNyMkWNT2esBFZEDrczVLTgz12h2Dij7PLh",
  "key17": "3vRkN4PEi4vQxe2U5mJHBYiQiau6S74nTZxxmMx9aFyeCgTMvMfjMNev5WbeRYUoAQnJP9auwYH6vx7ni6EnJDkx",
  "key18": "3dfLrnCNj37cZ8qgNPMa5dTRe2YcAHWvS1NNKqNjJWLesRRSAvBHMsQSueGPgxjTNXYEWxyNpaLFGLC8C4MFwSJB",
  "key19": "2uDPpqYDCBScCw79wdwiqrA6uegt7Zr4CoFMB4weNvamHfPkY9zCndmAbsYBvZWRYXDjUjfQVNThryxjeg8FgdN4",
  "key20": "4ikEbw9SNMyTGirAWLpzbUbGaxtf8ymxCzAyKt8jS6bg2Bn4Ggm5MZDUqdfBQNpMqzPLGjgkKc5AZ7Co9MDmdhBR",
  "key21": "2bABWhPKMkzb3xSf3o213iLUrmFH7dH7zHoYV1ejKnWFKmfCjqLA5WS34VPszSRwo1GrU6qth7Dq2cEHW4JoshQK",
  "key22": "3u6Wmtr8Kw3JpwEQXvwvnLnd7WizBAx5NyfLWTTPCwb9xzADSr37zwbv8nNoTmBeFgGCwDuxEmnRXXMrcNb9ebHn",
  "key23": "Eq2RfKq9rFqoR4Hc1L95KDGc1T9fcmH1zynrLUBXP7G8brXohtKxw43VbpKDXURkmdf6TGk5mdwZFgWNxwVcv32",
  "key24": "638RbvBia54ekQC9fxtEk7rbjHUoBWUmYpJRqhzmRBThiahSK1U3cjCmnb2tP9bHyZkbFh4kREVdqDEJhPDBWz7c",
  "key25": "3ZKxQGryyEnT3KFh5WcrAzJTCApizBKUHsGk3j59L4yoqdK8KD9J9K1Cs2GLEDmJfuNZHKkJE6NbtNAUk4mKbrjq",
  "key26": "2yMCKZc6aGr3ajKrmmfmtDWq5zy8pnEybfjBn44n73Bmu6hMazWcMN8wbShjmonb3VdTuQX3GcUuACNHekfgdeTH",
  "key27": "2uhgX93DPfNV4cysxzAL6UUAymKpA7T9DBDJGkp768gBc6HpkWJvfurdc2SpyNKXvxM1Nwh2su9FuSA4hVZjoUeS",
  "key28": "3D2E54SoBy3P7WYRKpWqMa5JCebbVjYWFN2HyKN8Su61NAcsEFQCAzJKn8rXgoDpR6rzLP9bLPWgQecxWr1UGdGm",
  "key29": "2UXuqV2wr7qUnCfcFgb2LeLCLZn5F8R8pBQjVPvw2LnSBNNuaxoMod2agdVXn9ggouXxSFTJ8tTF4ZXCmzt68U7S",
  "key30": "214AiVYxrGdJuHUHwxgbBSzQJ6KGarMG3o23C8cqn1gRrsczszXGzxEp1jqULsEcMiwREGVzAzNV7QpK5ZxxviVJ",
  "key31": "4GrLukn19J9LcvZpdFE6U2raZTNzVe9Dd39fXBVuvN1HHfuZFj8Be7jFoTeXyBRmNT8oksWr4u3ECLRgkyoLKLU5",
  "key32": "3SYKm3uSihYN1W76t77pG4WbXWVJkhEU5YzMAGr93o6qsABPkcabEezGEQJubyVKk2Gz7gj1vBxk1HdoYJmNzHW1",
  "key33": "2VZLMFgP23Szbvp4fA7FEY74j3PVh4Fzxg3X9tTtETDbQsLEr1LxVYruScCFZbeWgkQXdw6LNxqmC5mHpPD8fCr3",
  "key34": "4k8qCkzcxj2EW5ovDEajcHtGFFVH83MBqVztckaC1YP8VoRbd82yLSawes8yYyWxBBkR4DPf2RYG1tziZDCsnqeb",
  "key35": "3Y26VzJm5PPxoftQ6PwbNwyKAeUcyzXsrukWcxZPDM2i5sddhhjNUgenMbJwXCAjcaNhzUjL6nubbQ3RvEHoNA1p",
  "key36": "5ndna5KWfKPP5T3qZwvwaaTrs9U8hw9mx9d5TsJbkKkipqKk5jJFSeonwJesyJzVKKC7LgCwFYPKyGKw979PsjfP",
  "key37": "3cYoRwNhxWo4bBtdgEhmX8sNseDeZ5w9hfZQgNWdwGHE49yUKyWYdJRRNsWYYjY7EqZM2GTLxpq8bMT24iKoufKF",
  "key38": "ujDQvAAieVnZSF1PK8aE39dvp7PzG4orUSpWpKDKCXCfUr1o6oiRPBRXwV65hwnNnm6FkspF2xHThbBumgVK4WK",
  "key39": "muZWdVCknDRBANrWrroqj4bYr4vvrtbnw4FUmMQEWpQUjS7XjgigPqttTFbadg8E47oSWh6nvEdex8FSCvtByJe"
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
