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
    "3iBUySR3kFALXbQmQLw8pky8ifE6iYV46kfiVJSiPFpHBnTwGNFAdipdg5tgL9U2nhUhYmCmzPpQR5Zgb4ZfUr2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fkryRa7Z7865d92c3EyCXU7QruBQgL3Xm9xS9WK1g3yA13jQ4doNz2yGvvKJCAVUY562XAteGynpDErvAKx8wK",
  "key1": "m52wCjNdv4SkK8hXpm4xBvc64F5gukYm29f5EBGH1rHEczoF3wmYayVnd9FK3SQeXxcNefgnvro9wzJ9TP5RcQ9",
  "key2": "3WD2dRPvS12aRezgAiY1chtbdNtrwFyfgg8SPDitsYczaS5XWcgZfa16jydbD8bRrTaWP1HQJXGy3YvoNPtS1Z6s",
  "key3": "49SK2iKmKhxFEpYSKGmUvAqygMeF87PqD9qyyx5yuqtLxGqGb8zqWN2Cgz9NVaH1uxTbcEqKyrNAHeeFnUGta1Wt",
  "key4": "4PxAb5iiBaHH7yixXEYo3SG5EeDkt9kNF1n9vQt6SicCpNNmKpfQmts8HqUxxXrNgAQpb3vUJekyhTzioXmnT8gt",
  "key5": "2L5AAqNtncpTkMPC2qcoetyz48Ecy4yk3tBTSUrLyrapEXzEJRHqd44ttSNRJqYg6m4zMPfX2xBH3sxVe4ezZogp",
  "key6": "4wiPYiqSQmYGw63gT9T5hk33oKzZ2KZMH3QVx1jvDwq5Z1zKW6fUpWHGxqwD7rq8KrLJTdhL6hstkUGramf1iQAP",
  "key7": "5J5FQznSwBL1G4GCLcRXYQRqk2hZzCLtZZoSiJBNq7KWfZMx3RRcQgCzrvMXKPeBSKmb6W31qfuhAUmpPN2qAk3g",
  "key8": "rUjgWpw8DHJB7mGwCNUg7twMiYydijeYYa9RLUZGNhWSYUZyGcASgzdgFYw1kcjM2A2MHR23EYVTv3xLkubiNwj",
  "key9": "3WRaX8FactFsSbpDHspDsykHF47KAzecPYk4cgoa6ZMPXDPDNChiBgLCud7BcJz8gx4HC2tZSj8xowNYwvP1Ugsf",
  "key10": "3hjd6X95gPhW37XMT6L9efZSP7J8i3cFe3v9joBX16FEz3MD6WFLC1K8vNhyH67ehYD8362M1aMWyx3hk7xrQXCg",
  "key11": "3N5UuCHVyQX2EhAuAPkdcNgHBoCAbwPXfcY32m5houYYkNCLb7vsbKYASkneTQizzymyuXyDcgUErRRCnqhxUu45",
  "key12": "3svTqJvjtLJSo5Tyo8o4DNKyKksBcAswp5DPNaAgTsWW3XEZMnwWxBgnmadgFvUeAuxt7M8GPU332zHXkM8h7jPy",
  "key13": "XffbHJz6xHQZU6sRpK3RqPNB1c1gMDNc9M8baKueNeZrrZ1RuRN2ARYB4rKrcVcDLySC2pHxK1LhyrwxNPXjC3J",
  "key14": "3eXQkcnaNMqRrNEPcSMjXEhhjGDewATtrqnaLGErwjJQuqciWkYpdyKLDVk9VSviMepStAeScWCtaUXvUQDD5TcC",
  "key15": "124dV4jgeJEvPWvYom4Tkc8gStgpVAv5PkPMMWA6wfAUdZJRvyErTNi45XaH9TpMmT7JaafrhuSLvuHstMji1fYv",
  "key16": "2geLMuksL7ahusASkc5LF4zgdF3q8Wp5ztUxpmN5wLYPKo55NeuWKoYrnbgh8ivCve9uF9K539kW1aRrECABtsKu",
  "key17": "Y2ndnX4ZtRo1YeiUShPeed3RzRsXEywFXEFfoPkeHr9Ta19dPsG4KNiyRN5gQSS476uHzDwWfT3c866CX23CmAJ",
  "key18": "3n69Boa6NeVqo4YMyUByioEEUDapbpt82FaekD4hHb7wQXk7AREKEpWjRXmiqXBrXXBYWNC696paUE3hLwLQpAwB",
  "key19": "5NyjgxgbbD9JeJTqx7JKFaN4YkYkbRYRkujoRhSemYUBC9Jf4CPR9K2qBXK75YkqY9EP7rGueBfUZXD9jHCr8yM5",
  "key20": "ZDmNkUjNNYsCnEhnnDVhYzvLjrWp9nBvkftUHcjrnQtuRTCXVRRZpCEbKFLEsfDtEKYRRRe9zVovX7t5GdbAv6a",
  "key21": "FKPfC4BvZhxV9ccSoJHby83N9yVSynyGLXevB8hpS6y2hERqiTBjB5EQSc5tC3owMPepYXYUY4TP5Rhs9S8zpQ2",
  "key22": "5NkEttcECemdXB4HFi3EiatGp4tJvD9fdtvboRW5LYk7ba2VGaLdzFpzn7EkC6o7p3eT1o2runYsXtTBeX5Gsbqe",
  "key23": "z8AuWj7zR4QxFAEkz7kLvz6LWE5UERoXpXyZ37S7wuun7GempNexncSA8f8xCpfwnTyFuWhp1hCc2waEjQKNSfY",
  "key24": "3q7hwhLFpKqxTm3hpNdV2t7jwtTS46YKRw4wLeMe33oJAA7Y4M28127JA2w3CLofJdqfwkgz5yj4yzk5RW6zpcpZ",
  "key25": "59BJpjNYuc1aQ4xMy9ybdHJsqAx17FySyQ1cg6B2rtM8jucCkzLtFvfSqRvGRX3ALjGdDf3SLaWJEJ1QsEwJemD2",
  "key26": "3wLbNwsXaqAsx1XkBGif8jSjfYr57SzqaPqrQnawx3oU6p5qhsJaypsFhzvvF9nuxShTYawuo5fU6KZuKS1rW31K",
  "key27": "4692sVX6bJ5fBfwxVPFqGDzWzmmyRr3cHa92MPMjvQvsHisUstjom1wpczP4NmhHpUxHJPDac256MsNZFaae1Gbu",
  "key28": "5WqxLhQeMo1YmENxqGv91mjDftFBJKqvksJvQPihppcC8yrMsyNVRsnWQSwyoAXcLYhhMkDxiHySbT2Npadx4W4m",
  "key29": "3y6Lu8jNRqihHy2H5FHK89b7KX6DVfwTYafjeyHURAxKcxdhgzNPovUCJvtPNQmSY8cHxmbsumFzWMXAU9JQ8m2w",
  "key30": "4mAA3fxuWBY2cNEYDBwfBrDt1PYFSvbjMaCrKzbR8pY5eKoNFJCC3BeCY9cdFBisKmAEpispFgagJUBkCfYzpDSA",
  "key31": "33t4Ca7P7YzGeCzdUczRpDHBsY2zfDowe3P6r1Bz3gWuwqpDk6WhrWBLagEy8wmhmEJNmdmgURVyJKapnDoEuAX9",
  "key32": "2ma2pStkPj45JRKJTEj3ttTrpinb9eXBnRrB4a3ZihFfrr856g7DCaSHRAb6gnKsHtp89brqzgibBTyBs428rA1K",
  "key33": "2sE2Y73wekVaEdJD7NvYY3Y3tRkQjiFs9guUjf78VtWRH5Z8ex2ShpFS7p5B7TeLqWk349eyT5cUZsxWB9D7SYy3",
  "key34": "5teWcyftomugtSE1piomft8EJd8yEPT8Bsq6Hki6v64EwUZSGXSpsepTY5ES3KLiM9EL5F8t3rcC21jYdk3MnkFo",
  "key35": "22Uu8Lcx8XGhWZLHzaDULHnpbU4ghEBXrD5wN8jSUYLseHLXNYe6xbGyia87vfTcwWVd2MkVDWFEcPg19ETgVGih",
  "key36": "5WEQ5Mdbu5CVVBmxT6Pfd8mzJj9taBz7nsY8McJot99ZZwVPskm9hwDK2vvNTmDi7uxHid9wPuRze5WitmJNhLdJ",
  "key37": "5R1KCrqH1wrrpSMTTi3ww6YP1cLgmApty5LR8oq6Y4Y7wqnqwSbdznsjQLLuiUXRGw7KamsRhCvuhxgWqSQoZpgG",
  "key38": "4hSQxbfq85W9MUwzzKtzdYZHKPJ8CVSv9Jroh7ABzAxUjDi2Upt4BsoJnEP4rEByVyeqy7BZDvUhPgNSoMM2ZyEK",
  "key39": "2apY2NzEc3FWWgjUffA9DUrotwmrD94Dx3YevCPwYKvjAsTGBTELvt8M5CMEhocf1d57s5NyaZCkmutrWPSH3WJQ"
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
