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
    "kSRaoKLxqMYjJNAh1ckRgYAC5PGR8trWauaizFt4bipJwDWETsskoqLhyca7kyFbPBNDqViiG6LJPdL9Aquouxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6DV7GJAXKvTFf77GVLTtqg9Kdm1NgBLFCyH5qrYbQf1r3Wfcnei4JfQCzFm2LgqvbtM5EqHkg1AYMdw9V7PSTW",
  "key1": "VQzGxKbZViVRmyXGCG95HqWrjBBG7wKaUmH56XKA1bR2w3VeJ7h7YwzCmBf9JqtUgAPBumHabKELAyZF2SGWZC1",
  "key2": "K1PQrvQnYycGCkMJuTv59yskAdypLuvediqootW84Q6P1qDwoTaZWDommTWyC6gGkVGZzPFrpQqVAGpqcYo1E8T",
  "key3": "3SkDLiYVgoW2rNbiXMiXSNMX2DYVU6kaGviDHQezCCHxCosGp6cigj1MyTV37FtqYrsgNsqqRkxfjXPK5mLjJdci",
  "key4": "4W2Rjf9WGXnEm5rCy7t2uDpKKTJoNH8LXDHfQugg9NDVz9FEAXnfxCiBFbZhqDW7pEisJexdhvUzXT2Ziwke8b4H",
  "key5": "3SAkQ88BuJsZMUgyZnvEpN624uBHyqz5R5d4vLdh6DcCqqrezCxwJYxvQveYjcyBTnaaHJh6wqoadwjSGDkSmdMa",
  "key6": "5XAJvucV5jstDnaZuPXtWA9CL1fVN4RTacW5JQETYQ81gCG39AJZp5FNa3uiWgiE6inh7bSW9HmcDibFgkKAAf4U",
  "key7": "NxC8MH5pAr3yAifujq7quNsBVyqPZokSH4dKU7hyd5uqkEarDtU3rwQuuY9MbWdKq4XataZigowGavNcaQbewcy",
  "key8": "4X42Y4Fd55eiiqW8HNkDz2Te1qsgu1VAfq2WhTEFcoKKrremS4cxGWW75W3vH1fLvcPEyugz6SMsxWnAGYezG96J",
  "key9": "2pFqmkLtXNtiUmJodK2GSAhL5mFrP7F5ahosXPpnYcSb5MprGRiTEbdjjzncKtni8D4UnrS8s4JQEvYvMMUNPAKR",
  "key10": "5h9XHcTeiXRjKvZkSwis8TiUEdRefkyiRRdiNRJyJYXttsKqnvao8rFWYwXc4o6bxZS6ZNAqriQqouxgiPvXGkAG",
  "key11": "57GN7hNrEYRitENTt91mBeCsmifr8tDK7eKMHrEDuLXBPZHCPkafquTknXD4TdKNz48fD9wzZd4QsVRJb7BLCR4m",
  "key12": "ngj6neZ3T97EDnCxa2aRqcfQq4PZw8pJDdPaVUwtvZxJVC8Verj4gY1yJMW2Va2hpktvcTn48J33pJQWHhjwdKi",
  "key13": "5EzXTAKtZhc2LfXHKqmHNL2AqUMgBiV7cbzEtzos4JHurUUQWEV2z9fCydHyWRxqUguD9TbatxFikd6hczMAtS5W",
  "key14": "3drGuY7cieViwqno5kXGmuk31u45hyDbBqHgUz3BQHkAUPD5Cb1dnHjEcS8ENC1RmAgG4tmmHiJ1cDhuULQLwaTR",
  "key15": "4zszAKQpiJu6aFtzCRRu5jPCBBjF2ZTRC9erYXj8QzsqeFfxfDAqWHDhf1BsqoiixsJ7kn3UoXRYsKvkCvfBYbRw",
  "key16": "f74sLn2MfTiXdxryQVJMJdsofsJXc5ALzqPe3bFhYX7bgKjUdvmT1QjUhTFBqYcPGgQNCuRzzh9JZoi4fzXMd3C",
  "key17": "59AYtFLQ27gz8EQETyRETcVtGneA734giE4MDBBvuRVqdHhwgtso76BxMKNWLAbUcorKJtAhGktE6Y2XvQRvJU5a",
  "key18": "54MVciY4GsRHJMtwEGBBtqq17RwFMXcDvrbn45G5jJoxqVVGPCWVHUjPgfLUgWFP3HgjvUZhuncjpzA4B7aBCjCD",
  "key19": "4jSg7qxnDUMxuDUpvjD3XYwD12kexiCUAvFbbDdbjLLZizEewZ4Eb6LtqtzFZKnih4tmWgnjjZLcGRYLuVxSNMNZ",
  "key20": "2upz5juHsWWF6NUXYWUCngMjnkK4KiFGNvLT9Ype2UCT3psL1biRjzC8BLvDH3VjiXDPq8EoJmdJvh7NP5ifd7gX",
  "key21": "BWjvSkrewN4apRVf6pgh7Po9z9NjiHtcxRUhUVDWnrphDYVazpy9UvfYf5XPnr4rswnuta3ZfEEDqnNNkgsR4gs",
  "key22": "4mMpvz8b14HDKy6YUqEYA8PrY1DPBDPM2EC13xfApUW2H5LZmWuZW57um6nWj1arL4ZpRZJo6FwJgoPBprmFqmTb",
  "key23": "2DkGhd5KsLrci5nbJQQKiRrmwULkGXPNpnrY6NrkrzDviEvaQzt2pszPzXXsRLwynY5FiVMvJ2Udrz2u19V16tdG",
  "key24": "55inXqmAMWyqCNHQDkt5A2FpihMBeBSMGY35hAeRYPqFH8tCid8rigSDrbNQSqxvcW1xvkXpaxjUrimEqMY2RmGV",
  "key25": "TnCg4PktVwXLLb5aWFtU9i2NNWsAkkiZpRkgPQyKPZgKV3vEVbfdWsrFzXoLXbbMHpLLV7MmxcAFuPGFFDtg9b3",
  "key26": "UA4mzVDPBRv9qXzvnDJRsGWCbqrtbWhuBE34NV4GyettnMZZo3YDHmw2nFG587QdPfLaoHKt7MBo2N2L5dzGarA",
  "key27": "MX1XqrK4CXWeVXdjuqGGojRuTFmLEPhxBkAc4fSJDVoc2baNCgCj4Si26ePYiPJAFUkFHXUJrbEiQZMTGCsVnJK",
  "key28": "2uPRa7uEtsMXZJ2DTBmVGFbUrsM7ghqZwxMxmveycAbQ7J8NhaxS8zbgfGcpZ6LFHgZgjkRZc1ghFMjNqAqP2MpW",
  "key29": "5e2Ff2Ai2z1JAa3U96PRPRfpQn7r68ucLYxekRazRVtjiMPvpdTgPVLK3oK1TvntxMRWuTqRGQbWx776JPrPmvir",
  "key30": "2xhur3CmdH9p9RWkfbKsE5ybphapzeXqSFw51QEYTf1TWASWRM9ZnnFLu8fcF1tMPDjL3irStKMCqpqhN8rPEQj3",
  "key31": "ju7ViRdSYGCKZ3XaVwDQgdEFd77RBg3XSRQFaqqZHcp7848hFpbcGT4s9WAgvwqyD9JZuAcSymhg1EJGP7x5nD7",
  "key32": "3ZcE7xFG9P9HnLWM3FUmFGJitjWquBx4UyYMrKD6cPa7gmeF7NdKh2jJJ4oEN7A4PP3Q3UwUKmL4ZGFyJ6qw4ewi",
  "key33": "66PmKkAJHefWsojfG1sj3qsBCd5LQePtxVE4S8xD36o3xukvMXd8h3foXDWRS4tVR7h1zPESZjrgvw4y6VKC7saj",
  "key34": "23bZSscNhZbei1W6RqEV4seEbrjsb41CSASsGZvbUZeSouL1ALBS5TsAb1yp4CqT8SBsyKQA9Y2WowdU8QqdmtQQ",
  "key35": "f7mVjkTUJFCmfTnM5irhRetkdc7rwnWGXamYfN2AUzYKqqW5hRwDtqnrNfNps4YVndPqdhc2z36snPjR2TQWnRX",
  "key36": "nrgAR6okoNs2nSqWfGXXBwuN2JHuaaZvvBsyPcqWPmsJRtWC45wcya1VV2S4ZZgEVxxzQ9zWMpS4Sh88AYcpppZ"
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
