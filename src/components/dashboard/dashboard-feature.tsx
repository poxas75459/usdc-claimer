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
    "4qzXbV2ivEZwaFyscxLrgaK7YZASoi4Y6EVuu5ESgfmgb1A3ZYD9UanhudbhPnbf1pvg7aXGPyLdKJgHHAjAL5ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAuyT48sA9JBZwvsbvd165DF8UetX4e4gkM6mo58RKZre4MZfaXH8rVRrCh5EEkJmcdYLMLFjB1neQMEp4ZgL8H",
  "key1": "3BEU9V4PWCfmsjPvo7MrkyTv63hhSoPcHeMxGeNiS3FYLQ4vykQjDogwE1ANJZQCoJiBh47pbZzWZ4NrCQeRvzog",
  "key2": "2kUwDDGwTMsssV4adSJgvASZc2JDMEaStmMjxUrDYW5XFdwxEGabScipZUbZ7o2p3Eye7PgrhDgVq4BCS9qLcjEN",
  "key3": "4rf33bvvXtXKcJfFaGtZiv9E8NSLL527HDeTevecjrLXkQQsPwCPjB72j7zdRzhzRnkr2ZKC2UE2P8c9fMNMaqrR",
  "key4": "4yLkVn6efNVjXk1wu4UNZ7wn6CtxLrHE5YT28ZKsX8ARyTiWsJBU8Q8yaaPFiFiCQ8KjjhLvrAifJzdNShMT7yxP",
  "key5": "3RasGFQ7ftZpfQb23fSUMv2GiHVMgat5mQaGzPw9pSMy24mHXupXQ6FpzNK2GYxrkEQCGagY4X7wTazxTZ6dAAHa",
  "key6": "5AA9rx1AkDV1JSeMxatMszHQt1G2StJnzYP9qyAiMatCxnvA9b67qXaXhzzTPSovTihVAPtZbq6LxQG7e53Y2Gj4",
  "key7": "51AJnBAheTJRz9MZoMiKcNr3XcH7cM3KuocBcHQ2g6a3Ui1wDML7LcqJ3uhLvL93FFz5u6V5gZjByTdjqFeswFFJ",
  "key8": "4mfehkDJJbRjPsHYMZmdfR7biizWYy3tHLj6byBhxtkSdezdPzT9N56PA1tNSAQ5QXzrwHRat1S5YRvoWdvozVoB",
  "key9": "4x6eubS6Kz1ZRG9YvAL5P26opLa2D4j8q9bJz2fiPn8PiPxa2Subw2gHQGai92cqgydYmFDCacFMfNjwV4L4SJBL",
  "key10": "4Efdep4wWaXBdXN2eHWBsuhHZ9C3hweF5jX8eksesnEFuzho9KaTVXjz6FHhDoa6jhSyr8eZuou4vjxCzaAbB5Bt",
  "key11": "2HVWFv9csm5fJU3Cz1kFQXe3cxSefMYaf4kdU1hfq5nuiymVX2Es39iXoPHEg4hiM5Lj5PtcMvWAsbgbCXzp5XSP",
  "key12": "5UXmeFReNDYwWQLh5WLgK8bnDQbhXz8VhKp8vQMxu5cUaDC6QTNomuxD4xtDAYcewiKraw3dj43ZLyofL6DZuG1T",
  "key13": "4AqsmoqVWBPmVEsxeHLDLwBfKp9sXU3gbnk3cZrAqYveGWJSNNcsszTQLhMyH4VHNeNsh1jp22MHnarq7ofRFvQF",
  "key14": "5VwGg4oYCZmjj4hARdeKebMj8AcmLz6Z9tzL7GPcFhqdoaAa8iNKdEBz2SEvouTFCiyzG3PwzxyKSJv8ifqAQPRP",
  "key15": "4Mu6SfVsF3LsoMAhPFsBAW99B2aDsBP3WmKs9geqHsHvYfLBsycpvnGL9BQmhRoCuyoxvnQbtnP4fUfKMmdSTVpU",
  "key16": "2NGd1ezCoo146A4PHrHgqFGcM2w9yPuYiTNwkMCcDdYoKdR6YHnFoAeAGJ1ALFKKgpbWmSSqqYxbFTKcJ9PbvopY",
  "key17": "52SMPcxmiTKfgh697NgnrKZBLG5ZzsbqtKiHk6VMQvH8WGrycNy6MEFst3ijF8VK4A256hnNEPu7Z7MhBwitojH",
  "key18": "53XFBNzb9R4kGm18fohxKR2tt1GqWPY8WVC46xvLHm7vvX4BmWaMCuppwHcja1p75BamBoP1CoRgWYcHsSVRAyfR",
  "key19": "3fLijVAXi7bqf72jH8qxQXKztjCVPdgrQWbWUkjti7qbEwDN8KZtuHAz9AbjnavUoPJvU2PaTkji1wr1quiFkobb",
  "key20": "4g1gf88LULYABBrYmihCH6jZFFQpDKZ1ZzpKVq3UUZHyGsePZo5n7XkgNPyBj7q9R88EwzGob99cP6Knn2ybRbqq",
  "key21": "2wqEPk164BjVaQcb5cwpnwoTz9ghag8ANjXeF8KDeFqWjrR8NVBQAXxDTPYrEPbKspG1YfyqpwV6PxiDBKeFptwY",
  "key22": "kq8Njey9WPPZtnBJBRZGLLhY4Co7B7TyASdPcgWW4gvEzYia8na6vz4qwaPWzebUGtKMihCBANZFTs8eyrXytNh",
  "key23": "5KLBFyDhoFbLtN98SCUvKeg2ZtxQzhnt7K8v6gxeWkpiLQn2s3CBsXsojbFishDqWKb9PYoVqefiDK7eb5NCDRti",
  "key24": "3jSixRcWEaA7xH6rgTJYA1ymDmonQfeNuSmu6LCpJ3rxQbxhvwQmXnVSr4hoRGYs42E6fejuW9y9zXVdiHpDEqQC",
  "key25": "3RHQq1J4gPfhR6vVtCTcg6yQxQDnxnecxuWXhvXfxRFg2bguLpbKbdnpmdQpXao36qTzV2SewEE2HedvtZX4XEGC",
  "key26": "3WfbeRGahfMvcUMnxLeKYrsR7vx44wqudaph52CT6CnhDPGH4tcmcTz1uo37mG3p5pcJWABqbkMK3U4tn5W9BotA",
  "key27": "5HEXrg6sw2vnpoajP18e2nmp3iNPJ3YbbKYbasvGUcN8B8sWeXVGaPhrUB5Hx6NTPo5agAUQRe2Twr1cQKMg8Ly4",
  "key28": "2uovNJdbJrbvH45cVHC9Z6F6abUZ5TTaduUb1zsXuqyHFcsk2QDczUFZVHDuMWjzA34rQT1DmTY4HAh6kdhp1EwB",
  "key29": "5rnQkPggNYh45R7ESLPU9WfyjRWUw5wdNLYW5T7Tg4y8xpWU5vpxCkfJ3sJHyiNM7dK4Jp7rrGuNqkReVWTtdodY",
  "key30": "54Z9Rv2QXenyM6N5L8EcGDaRTG1hh26UzAQGnf6LguTNd3zEy4nt28TtEPLX8TXismCE9mZZi4DMjtGR5hU6SaHr",
  "key31": "3G3WTqy2pHeiJ59SQ2Bj34hzYYcdQLt7Nxkzvf4DW1fY8Kr9ck6H3LEzLC16q6vu4C4Bmr3EGsG5i55Qzbxx6WUJ",
  "key32": "3xRMXcWuiReWJ3prCVeJyRP8ionTwVf6bz2corm6h7DChgcynj74UMSRa2mWFZsWsboh3awTiXgeYCA3NHRVgQ6u",
  "key33": "3YMycv3ikUPTmFNa6kYR3kEKMM2eib3ZnH75RruMGivz3wuvsw5DcBczovp6jwPDFeJ3YuVgksBhwFUaPtRLZXxb",
  "key34": "5KCjBpkyfJP1an1V2LFcKWRYuniWv2JyPErKHLUwbsahhWsRfPQJx66W78tHMC3DAKCekyfhuPYXC1YkAzDebg8e",
  "key35": "5oqoFtWSTUgms5pik3bzL85BM6nxGgETrWnK299TPiKNxKQhDwyadrSizWEWqpyYb65Myunf9iRPRL8ojXC2nGUc",
  "key36": "5DWGgxrr32ducFnaE4vv4tYxS3yZvurJP3BCC9zcKBAnNFBZFUYHFqSned7kC2JqzJgH8VsAhiLHhpnJGNp4P8R6",
  "key37": "3PVEo5GLhntpfhPjLSKjBcjcg23Syy4giQ2rMbTT5ZqmuSFqE2aHpGTuCiMoyV6NNyy9eFpzUjTfsDaMwVMdKuHV",
  "key38": "3qGyqV5kgSZcSKKfbsQar1swzWSTfp7dkFD7XGKqrAsWCxpGeyb8bNzGpveYSdHubtk74FrGitADLfsaTNntWurf",
  "key39": "5hkRtRLikm9fUxGQEgNaY2G317zUiiX47RrfZAX1qRGvBC12FCp8FkBZda4BenaLcNQMXkGA7YkSvgHXasM1E55b",
  "key40": "4wdxQVRxXtJ5qm234BYC28tz7EqiXtEczZN1wVVVtwGET3YknUDYJpoyQ7GPmFnVqsUegxjHsaPeAcaoddA1S7Aj",
  "key41": "4ELQDQ34P9WG5fj5podbi6Eja2KBZnsQBpUc7riUL6PvTsWvUREDdnQkx97t23nGWYtWyhdjepG7bJRKeraUmhf9",
  "key42": "5t45hei2ZrweBnmyJjYeLuwMXAaWiWhAwLfwQEN4BWYzsGG9cswCZqpssF5YkUh53JqDFKc4nMcQuopukA4MSRuB",
  "key43": "24aHaBs6ERjTdzeC6YoDEfUi5nfdEdAmnim68tN15CSG6bHAQ8wPdXfouppxsPFyAjDja4J7QHEsuYsrgJBBqCc9",
  "key44": "5k6dp1YiwHqYW2YdhqWWHQFgDZCQ8hus2T3aSJPLdCnF9NYTs71cQJeWvmkLZt2qVWAjvBFr2GedmMWD1UcAjHxh",
  "key45": "UQk3haxpoLYctxPC2QjRQUKsKwKoaDkDBeKfYKwCEvqe8iksV9EFCojySqJMcGoZjPwAS2uZ9Yb32jrx8UpPAaU",
  "key46": "3wL5ACJUZCyaT6yjDGBwSZui8R8wAXRiVQwV4tVgMWnuFxzfw65KMt6AJtWYK7j1vcHy6yShSzVXRh78PRTkDpFq",
  "key47": "2gQ7kDQu25xwxtTMhEvtCdzxba9qL1Q1FtjtqhFRW8XSea1hyhnWi9UoMFHjMiz99WV59BNuc6A7jVMkkEveHHqY",
  "key48": "WKVU64syoNk8wRy2CVHUmMsq7Ezog5DLwAfta7eenLLcf1SryZEACveoqYtDmCocupQeEo6jmoXnudPBdpLavQ7"
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
