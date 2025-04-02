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
    "5M2Kh7KtaNF587x6uLCkDdaesHTpWsQMg2U3qZVVGk7wSdL9tUUqjShmB9HknatJdnUecTjTmcK1bjEeXqtqagvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2daeMzGjj6KL8RPjtRiw9es5ExA8PHa6irdqypUhAzP2kjWbizC8xjferSGw5zWD9kiypxyYbLfugDMjbJyGSFfw",
  "key1": "gkaaShFCtGHgdaJeMQHH7EKjDy3dL6SFWjLd3X6HZFSPRKDpcxdAqMeZe7nAB4dVCYrkKHN1xpBLDbTyzbv6HAE",
  "key2": "PNoN663cjXtTt6ZZv9eN8ghMh1HuCvWKY83kDtPd3754E4d69jZvww5zTkUauvKpCd2qgtd9yh3kgpTzG3FfLQr",
  "key3": "4C59ukUvgHeUedu1EY5gbC1dVJEvZnPP9xbTWejuKybQwpr3A2xpJxs7HNKr5GuG15hczqVfAuzJBp47A2kX9Nsi",
  "key4": "uw92RmeRAepnfWQ7qPJ8E1kX3TsSHyVbYmCtpNnK2i1NZhTJ5Ry5nimSLEVi6qopYJH87Qrd6a19wJxLtRsWqto",
  "key5": "5aQ4ub3VG2bvyfPqzEofqAs2aCkm8Hy6hCAX26ADqJaRiv3heCUp8RFsj4LUeNkdDtoTpcDuc4SG3kj8ZRkVqaXU",
  "key6": "26qDbAaTQnv9FjHzBuYqp7cULHsnan856BmqoasUnoC6KB35Egf9C3z1YKg7hX21UmMYGpGPVYN7HXNGTtNnK9P9",
  "key7": "2e1KXZQvGEpTzwWZ6qY5tiJ52XXMd8JhNdts1XSQbgfYnfgfwQ72yrkyHWEKXJvc8A9vrBCwN74pgCY1pZsQWLmJ",
  "key8": "57nFadzbQG48xdG6BdQQhk9JJrbouoKob46r5A4ttSiPyPwUYTGdBgHQ7yvty1kG2om2Uo7dTE4v73TQvRz67DVb",
  "key9": "53TP3tMgxsGhvgWiwCbxKBWa5eCw9rqFnmnqymJV94KdbBHJVJUW6WaBY6B3DTPf9EJenoE8wGx72vuKnbKKwojo",
  "key10": "4LCQLYhk1xL4u4dkdcXh8TpijtqiMzqZWNMAWyAuZjHHgBmXszcAHwbhuMBk2HdDiXf5Y6hf7QU3XUpUNTKgT7hd",
  "key11": "57MTPLDnRPiWk7pv6rB5ranqJaDSsiTq1ARWj9Le9y2JGzLLqv4tXxUgZcfkreAj7wyx1pkLVfAeY65n2V3TXgPa",
  "key12": "Cc7pVWaE63RgLpAEeTv9BP8nEaRQ57TZp2tEo3QSDPEMT7a9YwyjGQPVrN3pK88qTPW6ZmGdaVXyhJjZsus8ty7",
  "key13": "3UYyKt7Mtmqe8LAUzJzyjozavnC1jPRg7YA1YNPj3ejaF7fSBayMoQmbn4RJJeHH8PMCyDR2g3aa1aiSGxAMybxk",
  "key14": "58UKq7CKEMKwMGptH5aoiJkymWGhnVFTnaLbBe1RiUxV3AwXohM2n7GN1SfZtKDa5vLV5vTVGf129AffG2JwJxai",
  "key15": "vwsZhyz63M9Vb7m1a7KRn37jJAodC4eNXP3eLxJjk5FbW33ogG1DfKBXHVyddGpveLSMXmsHypPz5wKsqBWEGCb",
  "key16": "44NW5jGYJcMErjuQK3PHHcaufWRwkFPbUAWFX8VZLNecxar9B7Bv4EoidxatweqtwBnXzdunFx6yJCDczprqKmh9",
  "key17": "3FKmd7JpGYZdtNkUrPCPCWeQVhTwwR7M3KTCQqZvkcRgrPwX9mYQ35RCsHMzGbjLqxSDcTJxuwBPs2YURSnFGTZS",
  "key18": "3C3rXMZ2MZFDowKCK4LjVS2F7REVdHhEnW2csBNenh6CFfYQdrDUTGqYwyQcYH6EgQdjrSx5V2uferGbQoC1SvgN",
  "key19": "2EL6z3UWKSwvuT7C8CKpKim8XN6hhMRemMc9dvCosLBL3XCQUdMAxnDoHxu72DfucaWtca5N9VAtZSZw5VWduhtz",
  "key20": "3LwpBnQXSEnXfS5GCcFCKTSiP3L8cT9vPy7164JaH7bTL3YiByK3aNnazV6hDCjWMerUGMvSv7sAA2sdQGwniXXH",
  "key21": "NPDpQXzE9HJdjsXfreHdKqza2UwrZgGzC1orfsakSFDAjYA9CvyxhBSV9Zejmsv6b15g3GtMaWM26PfZRj3MmNt",
  "key22": "64UFnwfw72pseYf5mbAsaD3RJ1kD5Rh35L1C15syu39P16k5Hcr4vrurB65g1MKE9eGssg7zoZtTSHcb8Bgx5vCp",
  "key23": "CmRKmGNyD3cvFjWNy9QoV7je9F8w3Qqdgkku2k7ouUouNNpPEF1baCV4DHwJi4N8EKYDQL2aXVXcxczKTiPxSr2",
  "key24": "5EFwgp5xbwseQga4Wu41rYPQddr82VEpkrdCXJz9zibUR5vtkfVGSd6ufQd1qXaUzaqZkNX3LsdVaH7VGY9P589r",
  "key25": "4R5UEhCuV5JUsjysPJPBLNqwQH2qNfPT87yUeE989VJqa5XaZ6VefJardD6ckzJEnNvcGmtn5QgrfFSxZFRRDE1p",
  "key26": "Sm39bVjmuwVws4kzaphh4gAq7N9JpphKssnuWNi6uRzaHp4nmGVnRRZNifcrH3dLt4gStMYrYh43auD9YwM835f",
  "key27": "4cZPSw1BxGuXW9HqjmisU5Y6nAY9Ghv9arKD3vQJ4utPqyqmrBFVjaz4ZuALA2x8fjsWPJ4gE3xrBUUEkFXHSkAB",
  "key28": "WvZ4wRRBjy9h55uv4jmG75ig5hfZQ7nKSpNn5vBZCJYnMShmqcG8JQVGC2BrbDN84L8dpQLQYaqQzdU8fNV9DKe",
  "key29": "4XafNEvbjeYkq7qnaZyxCnUS4Qd1J1XDTYZmLdNPsyS5YVE7HFMT1hrGrrLyuT1kiBULi85qvhZjLVvyKP7mfi1e",
  "key30": "4C9t6idigEsExJ38JJZGxRniHnoPWkuDWbYmh4eZkAaVNP6CMhkwjEnttnJSF4KArLGH7ycugNueeYNiEAw8teLK",
  "key31": "4Yi5V8xi56SRp8xRuYsawQ4QdFiJGgiHvoKs9mE4QQ4HCNcGMgvcPiz1h9LxeSDaa4wHSPx8rePNJjUwGg8KKBcK",
  "key32": "5NwKsHiyZRqdKFYJkpSZFHgjx6PGRwdcWPzM7oqugC3kfKJg2cgwJUgDLBEyJfWaveRgBvY32UQgpCY48kFWZNP8",
  "key33": "WYT4i7YzyFqfNMAnnfKfiAzKjqhhrWSNU25sv8qnsRCj6fXB9DdhRUcxBRmxzyNV5PTKdWeKSJaKT6AD9ixJ5fK",
  "key34": "3LTywJDCgpvsNeiyGXbyr2ftntFDRWXx15XLA95KwwDuGvPCvFUnXbuup7DHn8MnanTbDhvnocLnVWhdhPd4drq7"
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
