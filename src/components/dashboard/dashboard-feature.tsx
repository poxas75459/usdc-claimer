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
    "3SznkAwWSVMY1CdiYooGZG7yU5fPnMkfykTvWVATpSEagyrLCTzgnraufriYwz6Ye1CwF9sWUYwjkeC9Bg1bwZmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZBFRBW2DcGZKSdajLTsHZcMg9vhf6e9MVbwvmky4s3YJ422U9fZGCafbrH11VjH1CGpLsJxjvHwxcoSAWfxbarM",
  "key1": "ke6eE1nVKQuuW4nMtB4PU3beM4QE8Q9CqDUPtjh6ijXZwFMw553trWfe8VqKChsmJZCeEAATr7re7sUTqvssXJs",
  "key2": "5V1hSLbjwFwpTgduHEDXbn3mbtv9cBSErgZD91onhQcsHk1jyc6NPAaqhnp6mJqfousHfU7casoHTnhofcEcPgUy",
  "key3": "UBPMki5UmRQCQS1nzaJQNsX8HReMVarYkaiPWh46agrWNeNuqwoeJsSWa26k2JHkqsXPh7HYXkG7N3L6Pcvgb2a",
  "key4": "FqkptGDu5B3eKCw84SJpyL9gpAwJspjQB9ioFvwpPgLJvWW1wfHRYzsMoLP5zN4TDGCPK3i1Hr1PwH7WxLovjz1",
  "key5": "5xoxPkHg75X8h6ui6pxKUG7U7w8dygHY8DRjPaxidYwHCbc8DEcRAatbNqPob3a2nqu7cgXC2GMyPSFBWdPpdcNf",
  "key6": "5FXxskrstBUcqTxKneUQmRcopsmWgoFEhsQeZPPHaM9coSodbnS79ti2DpPHV4Cwm37td6uJctgmyY84ZHoP73d3",
  "key7": "5zm69tXDvEuuAPAJzFrWrJ4jkMzSHt1NiFJTxVwNWRihcrFZpoBQoyXvjS5obtqAKk33Z7YmDe8K4eeQbxKWybdz",
  "key8": "3BSFiqdXwRgfC6BVySZVwoH7zZNqqAtLVcAPC6ZAhxj4HW5ne4KwovevgiZT7vGPpvDewFufTru29ZffVrr1wCGT",
  "key9": "2tSPZf162QLG7wDL8Fv32fnGFwZkTDjGntrH2r45a7gXFWFe5DcG9RJECL7PmaqV98erZbVwn5WFgVdqgtTK87PR",
  "key10": "TRoj4LC7GP39ESEUvbLr9HPjdpJSotau1qYXiBGnaHmvtmPB8T1YxfhdeEWwFwPcgqyLWBhjZFNMYiMN58mPpGB",
  "key11": "3Leatmve4a7dtJGXSuj2Lw8FpX7KnMWFLhJazVNPokjvBCn29SJNaLUjFvS8ow65ov3bFWdaEbGdJqxEtbJrccnA",
  "key12": "Um53nePgekUzqDmCRyzYwJeq837JrEqakqm6LNyBbDj4HxsuQLx8CjPcUCLEUH694GLpYb1zJZoAKr6SL2EY8ae",
  "key13": "5w9ZgSzfqmPTmwkssgDxmeU39TjPP2zKLZgMXBmFRXEyMwki5VPw6xUGqykayU4io6iayiymGsXCsTLEvkKnSQJB",
  "key14": "9qo2wemsWz8qVuVRApyKLqikbpuBVL7vyLxfpmYCPpBtoNRUy1cG8GyCdJdYUEsBmGnPZr1NZW9zNPnzDKAdJT3",
  "key15": "3DZkSVXthq3mbWRcXtd8Jk4Y9SCn47RJ7RFWBEaDiaL1CCUmt2SjWbZciT5fL3ZuasEppkt6E7ixojkzEoQ54LtF",
  "key16": "2ZRVMCNge8EYVCHGFZ9xMzVsjsMYF8Tw6UduSuBjMtU2sfSNYf78bo1LmMLgZPw5tpGFFtwan5zVSyKs2SP6JfKM",
  "key17": "2ukixUgs4mDBwxVVUuxeLAVMU2bugMYceTJxoQAuQaB8euJz1GmpLq6JANAq9ZeTpiRmpntJMguvZEEtcooZj1Q4",
  "key18": "CduHbyHjt57b32PPczHFmUStGknc7qrBy3EP4AkC72Y47uVbHWAh3v5GmUtQWMN6J9wDFEhnMhJ8h7YWeATCpP1",
  "key19": "52dvKgTp6neQHjwLy3jeejTa57D8goAeCghJ2UYMVn93FDxHa2vj2XS1ouVqMSNQpAxCPFYs6SzfqNafkkQbdZfD",
  "key20": "2WKyiAEqmYKYtYwMCEofuqhJZE6UvKw85kqC4pt3ZcqnyNxw8p7TBTLVZ1tTs6cjz5rbXGe3cUejy89tBPzErLh8",
  "key21": "1pPEjwE6VkcYaDirydrWmSUB4VZNzJ6wG9Eh4hdkntUYQG4KZ8M5KNJZzkr4wKCksAyMmqtjUUrsKoF1vDXjVzW",
  "key22": "3ZMKM4BMRAiPiSuLR1WZC4i3tZELkg1wprmXZpGH7rQAT2Ex5JKK5pK1MFS4yj1LAb11hU52WEWmCFLRivWXDoDi",
  "key23": "3M1pvMNR6xjs78hD6zehHiENmdUfkLus7gn7WG6oA8i1SFXv5oJTym3FsvX77czVkjAVSARqdraEcS4hS4mSPSA",
  "key24": "29e28tP8oLR1jGJg7fkL24y7a7megN5eZkADRp2WTH9HZRBTg4S3E8rpFuL5aK8vtT2nyFGx7r3FwaAisgrtXb9R",
  "key25": "3isyFRSM2GTrYp9SpzcSiPq8vKan7ZJkGUjzRoKkj9h5XSZzMe173AXamxiNmkhGtdvwrxEq1zmsoUsCSnA7LdeS",
  "key26": "5ZjyPoT7pgavJB5wJRy2TrSR4wWR7yVFYv4kDWPC91rPWxuoKNdpnCPF9M2Sf3EAxDeeLHQEQ75xW2FSic1Tqrw8",
  "key27": "yGL6EDNJ8tTfTizCkuEeRhZrnbUdRPA6zj8aPGWJC4ZuuX6Da1E76q7RWZif1nKUpSAFKxRHRUHSuLVwbt853Gr",
  "key28": "4b8bUw9E2jBiHg4pN1bkGNZpsPSvpt4KhQNJYKL8p1gLDMbfUunwpBtRxKzeg8CPV5L5Kop9CWdnS6su3fyiQ3sU",
  "key29": "3Lz6DsXaaNYtj2a4Ni4JMvphD469N4BXXWeRFf8MbHffgELNLWPBx7W1JJ2TVmeHDMwwoMHekx9aqLUwb1mEnTLj",
  "key30": "xWAznbcfMEyFkn8Xf1QMmM2icRMQciLhpJ3QqqxgRfoSHbBSdP7zh7Szht1f6eL9cAXyAXesBr7Gb1KBhc9y7k1"
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
