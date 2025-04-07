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
    "2D4J3naxWEhwQCmyPzx4TKDk7F6L1qRQs5HfDfzuCc9uUmC2zXPEVTAzuNUX3Uchg4JDjrwX5Rm3qpN8QE1zHtRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p81XSBDohjRWtUHJRMjrJP6fso9dJune4RbzDayhU2uuVFKe1SxMYYQBwiyT767tt1KtGMxip4ebjuSjNVzDGqb",
  "key1": "qkGW3aMDHxhPo7LfA1ZLWKsbXHQ3rCUDDhd6BFaTBZTaqLh6KidxDBJ3kPNtwcHBsiiXrb1anwGP2yeTTwkd4JX",
  "key2": "iSejVopwiCPKiJ98UGFYJp9bTX6wj8eLdB7Bdt34gdH365UP9NCpujJgM3sLdBQyEDr3rFSGiwGw9iHvRZErYkY",
  "key3": "2T7UBkqGqSEyd9RCRuUtAfVvXc4ZbWwzXYAyDWoqLeZVMRDzgkGT5fwT78Sixgidy7Nd7R1XQ5F1WbsqHnng17af",
  "key4": "5aKV2FkiCgYWQ6L6fPnmaSE4kn9d1Zj9cVsg18D5NtqsC4af9W36dStpj16Shrj39Ccg6ECLFtaMRo4ax5a6twS3",
  "key5": "1NFmwFECFvfnVSYQj17rZgNkXcuKNGLw5U6BCHKeDQbXHq7fPJ6JwzxjArkCruGEsb4d4G7z4L9hDwF9fRchGMM",
  "key6": "3AptbBmCYK79ynaurqJZSaj7ipunEhqkN87tBygPbLz7fcZvu2B1vePX7VuTfvvJWb4ANB5WKNhMPdTSwrku4TKa",
  "key7": "65nUtF7sVpcuZ9TFSNVPmJXR5wVQGXs23rXFTB245c5XQpFwjkaxhCihp7csWUHousBDb1EhuZKhn8EbDZv2VECE",
  "key8": "5D12cQ7HqDUDuzvTiyfbzNynsKaLfgEN2c3qbbuSoZJ16euBKLD4VdpHfs2BxpMhpZfPBjkbxYKbyd3BUGCRn7mk",
  "key9": "Hqin2cfQkVns7zUhpjbWjqAdngxa1awW3JZqtByhtwXzBvZV32FyLH2XzR4zySJ2NHfZkph8J7cfojt37DCKvLq",
  "key10": "3pe1Hu6fSMNmmuaNrSZNddwtyMd1vVZrZgmZuwwnmrqm3EQgqbqq1rt4CNi2oMu5D5k1Kp3xcx4YrF846eJWYLVa",
  "key11": "57iwjzvCMDJRL2SCaJCJr1PmTuGs9zKaied56FRj8S5paQ3uRc8Nkf66GGqr65HA2FHVHLP1HjGRg9GHFoHbzXvk",
  "key12": "4ZbtNffgYHEHLMJQvhSkAphPHDoJ4kRQqFrKzvXbnNMeKLbt7SvnPZDAmACtonoptXrjEGFTmcmt7D8heErNcnzK",
  "key13": "21E7sA3bmtXRRVmVTAU7uhcm3k7MgpLVbZDMPs1zdkS3bKRPuVwGFa9MdYKZtyrdBG51gfv8NeAXmzkHyPbvEgw5",
  "key14": "58dUecaSF7iwj8R6tbarcA7HbGW5oujAa4Z6y9h5CteE8QmY5LRGXS4QQBBiRYsXt7ULFCpEQ58pSn7WeG9uBdXR",
  "key15": "3KmdWg6h3nhQbKT6zBLS5qgEaEvBpBjvHe32uZzpen6fvGFji1EyMzCbAzHmT8Hr2UNPjvMRXPRS7jEZrTw92jS2",
  "key16": "5aJeibNcQNrZVJrjqqyQKxHUUEcynNASVSSuRFrwk9aSVSurSxSwhBRXTbNBnwQeEhXss6K6y8rcqZ4eoedtPbbi",
  "key17": "4T7vpx2KXv8uaoFMHdVNHjBsshjkJ8i4ZRtYj58Du3TvFcdQTDizkU5Gyyd4F7V6Brhy7q3HxyfkrM9R92Hi3TaM",
  "key18": "4wPEPXzcGHQeuXKx2ejH6PiDkjJ9ffr26CMsb4KqL8RmPxRi857Pkb5X58xkiLLw8avfZV2fb4gqrmd7LhT2FDAN",
  "key19": "39xFJ6QF6NHQBZWhXCXkt3vbpAeAUsgbGmqDxN3mKFUDFqsj4J1iUHy8exQzYjDwWwzgsKFYNXfKEGtDfufdUscy",
  "key20": "zQg8wSWVXM3Bj2MnqPcceQwDvD6maxXoySan7HM3nrTGtkw8k64SZdpoZS3R8SxsRtuKAHzYRY3AEmiaMgXdHnw",
  "key21": "4GnbamweQZaLrr8fvUVrPnJotRLNhYy46oe7hnuQhSXDqMTNMMens1PqgYbVT2jsWyi3Umum5hbBWfSTMP6Jv63J",
  "key22": "3edoiWpkBh3orY8Es8jGdvkc4kbW9qJZuenm1ChmhEbPYfXDs4Q1b5vZ7pYRi8uZmyRQisCQpzDsHngfj5HVNJQG",
  "key23": "ZauWqPBjwzod2exWxTuukQx397AbH7ZgdStUiCP7BuiL4gihW4NvyC7rStrCT2km5W1bRe2CPUMZCs9B3TJ4s4q",
  "key24": "3NrVTFVwz5TjsvSAT126bcrgQySaY4HB6fkoNepmmrLHXZJKKrFxdDgSo5c5n2pL4EFwgu2PmosXycH1mDd2wFMg",
  "key25": "3tHNL771Vwd17guPZfw16RMSA8so8Ejeyuko8GYxzcKVfvpqMENE9T76zMWxZ4dxCu8z7GnfL1TXKnav7bNRWi5k",
  "key26": "3P33iU39TKmtRxzyHsXPnSQcW8rnL2z5mW8JRKTqYNVZ6Gm3ia8Fju3uBBra3TiLgaJxPoEJrsd82G4DUaAjfV2X",
  "key27": "5PgrVxzYizxCFdSA3WA486rQHY5W1uznwXzmQwvfFttVQgZKnsYciAa9BywG6PoHkWHZF17mSucXdjPfF7dnPjUE",
  "key28": "5n3SL5nLE2qo5fgTKAbKk2SPTpRWfB5VMggZAqmsW9ff6rLfQP52uQgg1X8GoovDsVi4RM5GU2mTtaPRx1JHJbam",
  "key29": "57Rov6jxy13cjStwLQgbVi5uhhuLsoYcooJy7kXLcbuPKs3YGt5h9xJmL6nNiTdXBBWAnqbRb4pUEvhipTNNoURe",
  "key30": "2nKEAMSLvETmwCNwjVGggjUXp8KyMycQVqhhw7AL9Fw49DDzsjFs5Cnt4Y7Z2kXwsBzzKWGYiBijanSjWg7GW6gF",
  "key31": "5RGtg9zrk9MKdERzMuHQuVXS9tmzXaCKyaasxCvZpzJmjFREcWgAj23F9Agm2TonecmWAavA5QQCmhaADoowP4rQ",
  "key32": "29oD7hQh2FHb3mEEcrcsUCgZSY27xV5NQ7n6NyhBURB9PGk8NmrDQ1a1zQhfS2hZgZ1B6KLZDzREBrqfiYvCoFvN",
  "key33": "5sioFAKBZs45irPxUm9GMRKiddn4BvPf9z22jy18A77P54rtJgvgxeiTni8dcNU1ueGSpHrasRBW5Y8nJnR4M7pA",
  "key34": "5BbFbt3thtMK4nwbuKd5xN3SNxmd6mPeTHiRZRm23MmhiJ6gtcZEXYEUSeKccrtNLCV9GGUdngNeVXMSAHXANhZV",
  "key35": "4YaH1UCJBaVFc8xaXyRqMyKkCF9RLw4UpaqxPrprQMr18DqkYTGQq76HYxbGS5U9wuPG7xRNmdGMNDJZfTHT61QD",
  "key36": "3FK9wcQnENatzP1duet5mev5Q1yK7amDjpLvqpFLaKWDVtdWGHjnkmckNEW1TueQEptiFrpiYdKS4ydhrg48a6Ji",
  "key37": "3z8aVGJZmmWtg2LNnsNkPdJ8PabtBE2wtj4AKg4dazasEDybGvkPSwQEumd1wwU8WMRU9ThmK3eUoMQf4uSjFyuo",
  "key38": "5Gwx6G4CSs4xwo2EPjWWJKPvpcu1LrnwcD1fbrCXz992m9mKPA5dPTWWw4r6jmyB6WovKFdzsUNReMnLGiHnGPzU",
  "key39": "4xNVnQUfiFoNQcswxhKdJFHtbE4YmwWZMnY2h1EzPCX6kMcdTLPbnr9EU14WBaMxQh19uwmDdPUf7ayQTh5FWFKW",
  "key40": "5EKRJzU2KwjwPM8QSN1rKaVzg2KcepKULZUQoBH7ri76pWVWqJS4cG5nXd1q9rsBn3z8m2KzfcjSWhGAqZ6RqQiL"
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
