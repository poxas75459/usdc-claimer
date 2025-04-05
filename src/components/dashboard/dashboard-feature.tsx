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
    "26N2CubvtVpacJBJRpLmd3cuXmL7HxFvXMrmFqw4bzKhL9K2J7StNkKAzs4V45Dve3DMJYrs7hsFHGU35hPqxZn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VjNFC93cqNySEvaos35sdUobmggiuA9j6QpCazwhrAvb9R42bqACn6KRsvfTefJpJCiccb4eh6qx1Xnjsq6UPUL",
  "key1": "44KXSMNVSRKCQJnb61i7yMEMYWobubtjw3vP1zrdcMfuMTpUBTn1eEkBGqNVDo7FZRFVVpSB4aNgfDCopjYMZxQD",
  "key2": "3AiivCMK2oBFoZWPYVUCnSx54rGDYunq8mD1J3UApUWQNVFz9wbPX5RGPcYUbVRU8FoXVzDKevTvwS7KNM9c5xyZ",
  "key3": "NAb6deZNg3eU6WH8Gy7GkCwpw1sK1EvzJfbtaArfMCvbrCWLDCxkJirDQwAiVKnieZaEMeBisRhJ6ybKnYmhrZj",
  "key4": "5EswLDZ6ddf6e5p2vHguGDhbinzuxRJwWT1HGc3Ydk2uTtVMVvcmEiyYUWrPePHJhz5WwxxLYBcVge4Ebi7vBP6y",
  "key5": "5p9v5BMpt5LGaBmGj6HjSkp5uBzrVY8qMcQg3q5R7ipcsfmLRmG5GoRwY7s7neHCVjteJ3ppPYf5UgZuB7oBsbiB",
  "key6": "2cWxzabwLAKeYokF8uByBaoSgASkJxeGAwDRii3VnSEUKx5kvdob3g4Qm3174Evpn44eA9dCYSpY3ef7ceKtG2N9",
  "key7": "45Nh1M1AB8WepBZj1NynfRrqnETGQaf4bXom7hmwXDbrkWFEWXN38EQnNWxd2iySDZjUvFcwgVtteUZAbVSn1zJ4",
  "key8": "5FMWvs9quiUxUGRR3SXf8uekoQJAME5rJEJT1KWipzWcibJ3YyCk8GiSYdZRd5SYvfNchweQgN52xqamqGG92yVQ",
  "key9": "3H43dCaL847yWKQyAuNBaiUa9wJLejxtcYJUZoCrdvbjuyLC6SoYjigrFBHAhGVK8d7zvX2XUNHGykRR6gp7JoJA",
  "key10": "5f4EKD5S7kWeq1bzCf51CSBbis3S62ZSQ353EN6iC4rYPCN4K5H71MykAzseoj3jtoM5Mq5Qjd6jWrcZmWHNdhR9",
  "key11": "5rZqnTjJb3U3oD3DR1yqL9eNHbq1EkZvaBrDL95fNK2FwtXMY9Sx16Bxq3VdXnDu5wZoqKUQqvFchYCgD92SZxv3",
  "key12": "z1P3Y5mijriQErtoxAeqkj53xEZByPX8H7vXeMkEAr9AgNhCkEBZ8n73pfE5sHUM6tGQHJErsJfh3BcHXffHKwS",
  "key13": "5kQQxTuCyyGfhqLoG7n7LAc3GbdFn4ULof5q7aJVMChjastGegMhb5VJegMYT8mPZciGvahRCA1YJs68NZzUuYpL",
  "key14": "3Pk5P6PEaTCziY2BH9Cr2JMnxnW8Fnz2x6YSwYkyJRe3UCtzdCvpRFzzA22CUZUhdzzwgWmuJSJEQ1ZCfLsJZ1dp",
  "key15": "MGJinhbed3aMv11njv2UjSJvJrNxb7ZKH6d3db1JCNs4tqHtXYEEUEEGiRQjXhjd9TudxmYK578sYBdntxbE6wV",
  "key16": "4hpkzg1TXVheG8CuxW28r5D1j7TLVv4jHLM7HePgdijCLiw7Qa4M7efDDrPhsunbP8rtGMZSwiboKP9XWAZrvr3o",
  "key17": "oR5c4aoQio7iY1aFy8EL8Pg6sMuNBzHge97tNMcAKL3GN8KZHHZc5DfwJ6sSPSpzAcvNXc6xPokTM7DRWPn8ykT",
  "key18": "3wMZxenogrSvFBHWmyPFcGnBz6ZHx3sXhGiy1fa8vPML9Mb8Hsb6g9gbkQu1qDroBGfbPgYT5DLCieaFkfiTJSUP",
  "key19": "5pYs2Qu7ZUcTx9A7jHzGTzcsPfEsP8SZPS2efh3BLkavUvQfpW9EWr3rWCQiXQrAtbP3WhqFSY8x8h23ZvpsM2kM",
  "key20": "pgT8fHNVWZqwd5fhTZCMuuTAciVcTfPWtazN7MNodYRim4wdMhnxSBoY7q49jxYgvutcvKxSGNWqqEH61nRjENy",
  "key21": "5hsoy2AbGDJfJviiA1XraZvKgxauPVm9gXmuVXb7kUvXGmjKYm9uQSxNhBJUtUXq5dLnDCjTjgMgpDJrCJ8R2Ehn",
  "key22": "3Q5iGDHok1MX7oBChf8Bj6U73LdZFDmhKz8e4ikgmsPkfFyvBckfALU496CHaDq6G9B5y5xf12rLF86QPBH4XwM6",
  "key23": "4gmZTVmyEm2LZXqihjgRwKXthoY6NgtXCcgDMphWnUwaM9RSZaKePdGs6WSww71pu9n1LnJW3bNPcQ2Rh6LWdx5Y",
  "key24": "3r4cz4tPBKBbanJdbehuMuAeHFbBwXcV6sLBbmp5HLzYVEmYGP7PRzn1oEhJoQWobjVh9pYHhXwfGedwqJar6DZf",
  "key25": "3kDMimR9Yv8cEk36QyRaYA4342dLJEJB9d66t9tFHtd7bWgFXhTzgwETKtA8zgCzYk969igfSvt8XWmqXBrS2gfD",
  "key26": "2Ba2nSCHiPfTg7nEEi2rDd7iBm1cfSHBiMvrHEZVtH9bgKcd1qbePYeiUNVomaCSiiaXRJUqUHWYekX5Kr53pqRc",
  "key27": "4PPPmdQQfY3kjo453ySP3E9DRzngdwaKKjvmPVCz7LATXrAynuXck45WVCBTfYf5QcwZdZmAK89c3Uh8izKViAcM",
  "key28": "2tyeNmRSzQvD6uiXR4EoHjgRPsmcustcVxAWaUDC3VWNMA63Ygg559Lbv2zmiQddwyrD1Po13JKUQvbDVcN98d3q",
  "key29": "4gHJBfthA9oVcRvPBYUWTCLQKGF3umh4ydwKTUr65GbKctLHyxdSiR3Jc1mT5ig3J78WC8hQHELNPyjn6VqHgPR8",
  "key30": "4KJpwBfBz7hFHhjygHN9Qq2LsotWhQaXntGDaoV23ZCikLUHirsh93MFF2Srof13KL1rReUaW3qZSCS6kcf2rNX2",
  "key31": "2NYRktcU6LaME9MxxvQHCUDC94K6oNyPMMEkL8AnrhVam5grrnCt2ZcnkMjLNGoF29Tph7M4AdXcCTnyyShNpL5r",
  "key32": "2gfyHSUcMD4yWuKnFMNb3N3YGKq6CHGQXK1KXiMEjdZ3LFwLJBzA1EsqYVGQmT8ZvtKiYcYhb7DEkD7ZTFu99JAS",
  "key33": "4rjUi7oAn2gP9zYyHn28UhaetjH3tveLo9hTG96GSJZ6MYktmS8WEnBaB1xEK2NuZqdxfNRfTaq7zHiomoiCdqnK",
  "key34": "puAYi52asN9Pm4iUW85YqrqsDAkrkq8JQpDtqg3rVDVRbG1fw2n1RmKCctoXHMVRgjgEAcAWE6vQg5Mavi6ooTB",
  "key35": "4ky3MiR4p2hXUetGn8cCDidMtdtw6xkG2zShd75jwZSEQppkNpz5n5wEZ8bcHRswi1yzmvJskSWw4u43651sZXNr",
  "key36": "2jD4XQ4pcBVrVSrYc7DMRaC4jvNohPa7gjz9JaiJYmpyp1GGBVjhK4XxwXoum4U3qQi1ELLkuwvXHmVcZCWErjuo",
  "key37": "35jRGFh15t3GxeFBTqdiZcK6JAXaCqK2BWYfa7dhaHNKqYuGthL2rv184oHiRmQV327hLX235FkXjLEQmoEn5Fg1",
  "key38": "4TbCwkAxGdGRTDmVdyfTFoVURvbDfLQoa5wnUEXSbaNksXz4AsUmptb4xZfJiaLYN13KBpD1PtSaW4UL1cNNdmi6"
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
