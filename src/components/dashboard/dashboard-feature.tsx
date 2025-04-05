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
    "ooEwQWZSGdyRDtnJu5iAnckTE3KgA8vQmsPbzvgjwDdkTE889ozPtaFYtR9dDcXQmjfFQPkoW7WGFSoE6ju7PfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZT2xEkYmaJuuKC2LaHceG2GSyVrfujAF6ZrRJejacbVJeCgP23w5CaCFsY3KLmrkMAGQt3KWtSveCGtXjST2UC",
  "key1": "rJ2WDkcN1CjJ28qzya2GEfwBxZCoe62MHPr2re1QDe6G6Ri1AraoHNtQasWAETAuDkyoudpYTgkGjo6F62Uj9oZ",
  "key2": "H1kbrQUptGqVpAviMUJ96igiPd3V5cdA3rfcjCjDbqzZEm2aGDcCJopdAcs2FHAGUuPizs4qUCKdxAP5f4kHAz3",
  "key3": "3cdR96oCFAnhCb2oVzGmPdbevti5zJ63wrJLMhAA2xubLQowzyuyxeER5P4MWbcPW58dc8sDYNJrDbcNHZEWic34",
  "key4": "2L1WErNChfVg3HHdPtkSwcwCnF6tJMvSaVQSwv2Q9Cg5sz8A58xU2PvmqmdhogT3ksh1fcRC62umyiqquzRAKxZn",
  "key5": "4jLaUvdyTAwoKCyNgGc7NGaaiR1HWvKF93AngL9WZE78XpUocMH948D9o47GMYiK8QJHkpo8qMe1Hi5tvtzdqv7B",
  "key6": "3vTBXWH7xvjvVWGFAfuZ6JdbAz6GA6x3KsU6njdsjxvGMJdZnsTw2nnGXj4YbVTJbXGP64ewTZN391vC6DXtDvwK",
  "key7": "2cCYNy78tMeYTRDFMR3a6Ry5ReGyJhgwEKKocu9WngQsTAC3wgagNgDbGfE8jkyFty7zpQjjvgtuEfgrzQRBMu78",
  "key8": "4wMKXzqKo9RbR3itCnBX8DdZbiuYcDAs9HDqGnxkiCjbcksAwDwxqh7JWpnW2zfiySyt2XEcpB1fsoYETdLw5Y1S",
  "key9": "3f6BA3MvhhYBUcyTDLfoHHCWzNhTuuenuZDCK9zVcsyyBSnyx5VqA4uh5K9Mdpj88fA3niJoLjZ4ncJpen7Pex6S",
  "key10": "w9rgYZ8S89cUfu9s73J3tEtiu3S5DEhoobvoGaHKEBWePmkmMawKJqtymTcFjsPFPk92dWzgvZ2Qz1ghM89D4pQ",
  "key11": "51YwfE6vDbrZLwfyaNNeuJmRXMxuiFgk6rx2ijMLs5XKwNKvAiTeZV1aJADXV54C2Q4GwS5A5UZuLF4JgysawdFT",
  "key12": "2zd5XovoLwKjwiySBndT87F8pPiZsxKfmvHfb2YVLJYhvEFBtYMBFVus1kiSfUizoKoR3MtLdXxKzpcSHxYNPwiT",
  "key13": "3At9zvHg9SeWT2svbTGf7t6m9WcgTv75pwePyFdYkD9w4ZGYkpcew6J4iriRKF8c9PfBWAYTsRvch3YYwTnCitU5",
  "key14": "59HG9GD6cycHCsLYm6qKk9BkVd6XMtNqn3PYKf1GwfDAxHPd4JSvsQQ2EFHLSYQ24HrdnMtnKZ5fgjNMtaBM17xD",
  "key15": "2ommDe4sgRygMp4XNHtrdEjTNKDArCp3ZnRDGhM1hp1wq6a9oBCrxznF3MHFC9d5dAtvRGN7k2FSwcm2RBevG8HJ",
  "key16": "hx2AvACLJFd1NMzJnkLArELPdHgA4mQATFknQXwn4TbwrboLNS91kCGhuTVRwaaAgGmxWXMXqTnMtXdwEA1uALK",
  "key17": "5cv6LSNZepAB4oWRgzwcsuUCbh5uZ1JDegvenZ8Axq72dZ9dBfsPkFA8pgQCEZaUdGnXhqnfA2so2h5cwsz9jLMb",
  "key18": "3FZ5eeJvrXCXDvtGbhDRjnVgDxjjcthxMCKGQA3mtKhH6yZnHw2PmWbZcQPcQW4iia6itbo7sBufFvBwEm9an61r",
  "key19": "5tzNumuNK1tjmPYBAyanxDRyEVjmE1URvVob3eZMkHTwp3FBaTuKMXWmRDh1pk5YwsKy9c3WMedmKCHHFAVmYGQ8",
  "key20": "4UgQC5GdLbFJcNQJu9cFpTZGd2S7tNWo7mtLiq5phUiTB1ATpW9Y3Fjhkr8c97jtVac535ShnNLpjhCM7qsND58t",
  "key21": "2t6xpcZYo3qWQa8dRmjMUYq828dKdZMBhqu94mABUauJeL2cMYbCB1NiWgmCVFipk6hKKketeMjZxrGGc6XvSzYR",
  "key22": "ti4HXkek3Qvw86RnqX6nzNU2AgEvrFMcjQx1pNnUdzJdRinzhmWQaMGH76PGab3RbkGbVLRkosHKinbf6DUEhTU",
  "key23": "42VdciyCWnf7Bo4P5macwT5WeU2Z5WxJV7nSFva7yqbf75iJdDYF7uqqSgZ8TL87RNNyFxnzFjqrAxCPgyv6i3Cg",
  "key24": "hF3cwS3ByEP76zBZ4ezJToebu2gEKBAdXoCgWi5SCQBB9mz1xVKxN2S6WzCCfNWthU3VL8CGRBPZqy2n1UNSbgC",
  "key25": "DEYgBV28KZyqyoGYEhHb4CDFBDMwLfA1g3cjmrUspehEZKNbsvCSxEC3x5TPiZrq5GhYfMStWASVCa5Zs3xf64f",
  "key26": "2GGZEPFsR6smsbMV6YUajuyq1TiBSVpFJUc7b4rK4vbKnEB4pip15o1hEUmz9vy9ZXXazLe5ozM4n9aNe4fUnroD",
  "key27": "68Vw9t6nj4Y9euSqqcQ3owapyY3eMP11indQ3eRt3nuD6MWH8PThiRfLikzBwoXJPrk58rMeyPW6YTi9jfGxDUm",
  "key28": "wiqdssc46usLeowvSCdP4iX3UJ8qPcmXRzsWGHHBJYBATwpWFDEhY2CeE7AoYtS8fUDGaJBiWWe4oRAvbdrCohr",
  "key29": "3WYnwzfZTsJFnCMwQQvnK4jzJ9TmkrGF3mwr47HnGrSoD2yPtsfkamKyovyx4YNr1nMVH5gu7uZq3bgi145iykzz",
  "key30": "5pXQmmZG2CxXUzQrEM1vfX9ffhD1RJiqSMDfPdq2545uoVe7knfGmqXP8RLWEgjTfAwYjwvwKrtwdsZUFPUQDHnd",
  "key31": "3goQZAaySTqHrTjYYdUFhciY3GpgU2Tv3UB8eRG4M7dFC5TVsXNkzce5ea2g1aSaCTkoZEzGu1ACZN78JSK7BQdC",
  "key32": "3vCV4nu56D4graFoyBmA3FoWMr27h3k6RG9jN6d997Z8zcGmJdunPZ7tpQn1Rj9dL8b1cmb9kMDNZP5js1AkVHtL",
  "key33": "LJPf4jwjbtVixkrSDqypNKNDWHAXtvG22cqiW9CFGdrkCCpmfvg6CxadBNjppeMUQjGYNyoXA6rHqU26waHPxDg",
  "key34": "3R3Bs5VwFeW4b31pcSGHMg8CV6acYjCsvPFC29M2QrBXRhDbjVCrFKs4R42WL9QzNpM3yNm4nrijL5WQJwQa17V2",
  "key35": "5jrtpeucMqyvXVxonWkUiV4bfWfuM5e2Q7Ptr9G9XtkqKDg9sjbG9NtiktWnUBWQecNMkYRnYqwAmfXJjZxTdU3v",
  "key36": "35RteWjMxUFYcD4o7Kifimf32ddeGztcekZsVt25svDNeGLCVELHFj5opdkhfssTGj6Y44KTZCMjLSk4W1WwASZJ",
  "key37": "iuBFBJuzJpKXzWbUdJvaRx9BP6zjTqb9dfU45UM5GHTQ2Z4vfBYVQ6QZjdpdfstV6ws9NbdbEaVwt6Ff9HRJfS2",
  "key38": "1oSq7bhpH1DyukpExQUHkpVmUFfUqpB1SBKUJoQL62gha9DpKfeYhxAoTDoAXiyNcMNK6rF9hQ1jz2zQbTpNQF4",
  "key39": "64nX2rCTiUeaFtDEpQpaCyShe45ZbDVy2begQvdGuZNaft8hxQ85DcK4uGY59Ueb2MF2xqJ4z3FDyMFSEkipbpcL",
  "key40": "65bVagBMS6DqTiNnkA1pVKzCR3dR1g4xWfw7pqq5dFaj6HS5tRCMNT6EArTNKxKaKqGcQdZjLVchfPYxUeVbQLRF",
  "key41": "3zyiFeXqHptXhfXv7h6tLGC6ADDPvmt5S61mpGuuYh4PsyzG4s5jDDBJVmJvuFyrt6hPHz9YSpfP7eH4GUHsAhPH",
  "key42": "45a7e7VHHu1xb4YUGxJkrZb7wxrPjuNJ5uUqaxdwW5iLbmMN69S9M4yvyTmB2oX2o11bL8gDUNVz9Cypx7AUgCuu"
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
