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
    "4STfm8rBVoU8YJF9NMknTF4FwYnUtWForBpPCKZSLKMQH8aMVDzzn26chGRUqHNz3xyMUhTEWmaxnCZnowvmjrec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RLjVjUjhPetTJAP1zrZW6ckrBiEXN334H4j9nwZvCqfg9WrwDnjYXEp9HZAdE72hZtQ8afsvH3FUCwC5ZoVYNX1",
  "key1": "3FSbYfQY84DPsA5FXYYZccLnFht4D4gCE9xadspHMQBdvTcQuQSshxc5dYXDtdyeGYKGeHu2sgo5UC4kHNmWHzbf",
  "key2": "61f1qJLzTTDnyoddbeHbCr1hm7zQyfFZdiy25P79EPSpBHtKDmkB9M4CTAiWvp7AmfbwJKL5GjiPFq4q3CejFboe",
  "key3": "bAhwJQre2MWvKNEKEMGMuwSs1Gb4FqTVxMN7PmTcwb1DReb8uP5Ta97ty5SW7t7xTYyziaqf8Zjhow7yz7h3jfZ",
  "key4": "5eHY1UPNoDYpKKHFGJ5TKu66WhVJUE2idQ8UKZB4mX2sAiw9DjhWTPst4FvwimKVyMRh86sd7pecLxvirbvbSYdW",
  "key5": "2wFkHw7C7NWsrZiEK1CeMYW112iAyjHjubfiMz91q517HyS6Zh7s5ULufEtTjC1cCYHoEj6k9GwDx9EDrmKxBdDQ",
  "key6": "4XKYcjccjxqfczrtqRM2oZcp32aXFHMf5PNm3rFLzhbgqonDaCeFdeveEBZWsAP6YsDwTLDcAqjC7TQWyPXTRUAf",
  "key7": "2HVVsD4jQCn3PNHHwpZDScotac1wNwyoHQLycNZhfREuf3EPaVM5LoKD8Sp55VfFsjbfVn5ohk3b5mKrKbHFinZU",
  "key8": "58iHbhCZQhQndXSYdPE75aMPDbm5Rw3z7txtEoSJAPgoPTmBSE2w94q91eWCA2a9F5bZQo3r7D67nE3tSgrmEsTB",
  "key9": "3aUXDD9DBZxdhK6XaU4MhBeU9iRcgBtDBpHcTJ9VyxmAaiN9iaEeGnFRjb65nxVdtp9XBgFDdtcEJQxkajjnas3Z",
  "key10": "szNabjwRGqQouJY9mGNQgFX4tXFWN56KggT8ohTShMvQUqSY2suTSZybyFaU6qNpvpCtLo4fdY5yFruQ8N5QuC4",
  "key11": "2oK9FM8NvLZ5YeDvyRkEGMf4zxVLDmZ1yd9nQPR1X6wEb2tvWSuRyGTtNMuHddcBnCxYt3fx13U3UXRzr9GUGt8e",
  "key12": "2JyW1cTkCvnyxGvigKmnFdzHr2DVYEqFUnViRj27XgirGoKZ4isajxKvgQzzrpYrZPcCQ8iRsk1AUEH8x2e4ecSZ",
  "key13": "3jZi47uwQASNkJQb9Wgr8tZVJ2QGcQf2m5AnjnMG6qdxr5wN2TVCn2jLqEZBjGYQSuriRw9YC6uUj3C8ikJnJyQk",
  "key14": "2oi73VjkbuuegrkgcsZW8SBBSqKjck1jkqk43hikTUBeMwhy6VKPWpYZ1Sp42HDQpyPzg5uL6GqqaUey96GUgGsY",
  "key15": "3TqCEPLaYm8qjh8WPxN2NEu4tN2pNjqXQ23Q3oJHE5WzUL2A1b13JZ2veyEUtio7R7nP6gNaj7hucQ8fBVF5qRns",
  "key16": "53FozSqX7pEur2CyHxVjb5sQczC62vXboNTnKdS2eAzqdbSRmwq5mxEAdbzXxyzZjshEonPMCLcPFqUshitBY6uk",
  "key17": "63zbDDY4mYprhqmDHVj4HX3ayyJmL5HufN5UGKJKgcdWAVRyFRcGyqg73GQz54GctNgRRJuVDkgeWYQVi8QC12Yp",
  "key18": "5WmnsqLmFXE54N7odDoXAo791adrmx63rURMRngM5fKMZYp5vktUVF9ZFsRHNi8p6JTxJj8UZhrUEZuL4QGYFmKw",
  "key19": "JG2ZBXCfnMfquDiZKfwH2184kYHyLMFqpjkxH6Z61AvdnC4ZUE55Q15YnnNvoJPWf2TTtD1L4aHw6w53pRvtpmR",
  "key20": "2MEwFuDpD4Cd58u1W57eAajgR6mzCZko8k5tJruervrWFBvVPmGzVaDabTPJXSN6xiej1Fc9U3gcv76nG44kE8XT",
  "key21": "2QW4qyvXkufR4ENzW3no67cs12bZJzAvahTkDgGxB7kV8PtpUCNEcjYu9VWuc4jf6B88pKnpobeM2yAKFcaVjrHf",
  "key22": "5kR8bJbUbEmLYePiaKRzHVCExEHddjv5VqjMjz4wLQaaY3qoRVdQDNujZdyoH2Q9kUhkpx8GWGBN5BcvUsDv1zYP",
  "key23": "3aceaBET8gykKx4ZtTWL66HPJujmCdrnX6RXQaP7T3pZDg8g4C7467RwUXtcVKa3fu46pEmhu4qq3v93BzFfuhmM",
  "key24": "2vPPAa4W9cFsjFEuHmT4DK5ki5DkfbkQoNLdWeoV9BXKqov1iNChgyhErxGMuQ4Rq1xDFmQi68H9D8DxWgsVj2J",
  "key25": "4M5YTWPibYne51pRP4Tm3VCvKoJWUd7DwhVXN1b41yV96x7TnTKSLLDiYhi7A88Td9DGBRqkMRnGj5MyadnPiVNb",
  "key26": "4L95mTf4B6c6M9hM1aM8oJHn5jAK59YBRuYtKfZ2e6wtnP8TuTjnj84QtgEtUm695YRqCjGvwXGpin3kxdQHt8g4",
  "key27": "3GzyHdBzYCa7rHsgbyyB6tWngcjHQ7zegZiUKEhzaLwBNEcfJKo53W2Y3q2gecSEuzdqiuEGf2QuyewFoNhd9hNN",
  "key28": "5H13YgQ7WcEt3arPJc3wCq2QwFx33b9YQDUyTooDqkK2X6921nigKrYEsmLsVa5pcMiNG7y6Kz9aYwwXSQeGriHn",
  "key29": "3SBuFCtmKmiLY86hLGDgvnnc24FDwqxqGQRTzxWREAFUPsd4HrpiJZvqgFZcyccxg65RihorwefBDpnvtHCgs7gh",
  "key30": "5qjem714KV2atfSLwV1svcPNNRrWDY3VrJCkcc9fgjA6dxa67eRgJzHLVZehKGNuKUNLzuSca2DRTcAgY7ojk3kU",
  "key31": "2QzehiodTzqcPgHssSWbxsXQVe3qWBU3oe4bjWjXCdraseBTpSV27YYP3Hr7Fb7sNxNwMLSceZNJbcWai5V3o6Qb",
  "key32": "45kUkwNzCeaLn1T6jszcGhE7WLyoCwQNq5t6dqq8anPLaRfuxF55LBK833xDzBqn8mybNVxsorkZZwW3Rpp4JdDc",
  "key33": "4GDKaiv912BnhvqzGnEDzo5SXZXafor1e6ThYFxUReoc5qaxsRFZ9vgdVTKsEDyPpkgvMrwkcG6GjR1bdU21kevH",
  "key34": "3VA37t7YYXYqxmkN5ipUxLYRaBRXnaX1dSNiLNHCENjPUBoiZvYwaAfwzgajkh5Pz3e6Zym3JZfgQqNXfyBhjwbB"
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
