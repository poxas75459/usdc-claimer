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
    "evCZ23HUMRYpNeEcZq4p4tFXpioPBH439yhKqdx2C5BjbwPPRTXqmyE2Vt3pQs6df4GSbhaR2uGiZ1QSsxb8S1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rw7PbuSSY5qXUSybRnVeCydNu9gyYGcU2xguKrBkgWi5QkNJZMvnSw9fj2ohYnmCNAqFSGbHd2TBoo75KTuZyLC",
  "key1": "B5PYYLzs1s7ZKgQRVvyLDGkC9GcpgteGF5A67TfcWgizizYPyyvhjq9tJXVf8PihNKvavVkUyXaVUSzscJPZtiP",
  "key2": "286q7cLKqCQM2Usx78mUgyZNTfqknk9Y3Cmyabm9x3RYkWsYEfS9Zht8PJjAM9hQFDxSuEQa68gYhcwVKseN67ur",
  "key3": "2wyAt9PAz7DqHW9PAvpN1pEEUnGByRoo8GT9WFGFNu9w7782ZNpHeJFYemCmUXzLVR6Y4X6EbK24WiieExVX2pMV",
  "key4": "36bcqCEybdF9kVf8qZHKH5tDfsQ7fTwRDCFDo4gSBFSMZgEUMJdgzfN4kdzhoDpAbgdHzzLuecAPefvPyozFHjVq",
  "key5": "NouxR7f8VQc2NEp9c9foPBrqmTnFhiMa8J2BjSN3sgKtaow184FZsCF9EnGTBufDQkzqC44YPZUg5yLMePMjmRj",
  "key6": "5sPwfCwsjdSrHACKAU6hvHQHDebErHDe3b399QLBxATJKAjave6h3eMupbQDS14ECH5gabBsqxYTpSp8VfhfBDJh",
  "key7": "kuz7d5ptgWXdKE6zX296R2D7ULebrEPotXNfvM766KQkoWiEuTbKEDgMbbTiFXPTrjF4Hd2onGZkEVX1jubM67y",
  "key8": "ypcctz1FYhgxT5W1q4dSAgpnYUBUvVxxi4KJ45ZULpH9Wm4EiPG8312MzLYGYC6SX9YEfwGoFmiNvT4Vroj3C1V",
  "key9": "4ooREjB9oQhZHC2ywrAB8aQvoGpRvaB3ae2oB5XhBhiC1pcqFyUX28NYrcj6CFPs6nebBz4xkNYLxni6C8MwyHAU",
  "key10": "YDDfRfj4vwsWKbtQBjvDUHYTf4Ek6gEerPhYygpwv79ocwy6ZRuZhLgXGrv46fgEMPS3XwHUDgDNweRmSwh4EHP",
  "key11": "53Pxyyo6oqfvVrVv3vk13uSjt8umv4Giq2bCBi7hqyJEVm5qYFVEcH14m9W7eFy5VuxqwLt5XZ1DyFiYw84nwK3n",
  "key12": "5tTnMddaN4nwxu4aa87yjmDTG2zo17H4woyfVKFSVySjXG174mTb92oyqLn7xHSMN1hBEPvydL8j2TbwaikXxvE2",
  "key13": "64UEHPdHxa56FsrdgSBKjEm6B9S7k4G6kCh8rhhyjKVRYYgeU4jE61ymwBUSecmHUY8jdYnDu74RrwpiAN4Xmh7M",
  "key14": "3KYB4ZhFSF92ESqAedJE7xpm4LAFGmf3EH5kcRJwRnJhAWRCdJP6g3FyeYfgzEmVG3pzunhoCD8B5LWNQU5Tybpk",
  "key15": "4xgh4VQf2M57wCGYR54M3mQSV1en6dD6g72R7WDHK5rZz9GvFr7LmQZsc7nJkMQV9BF8zWFVtbiYYQZiUwoT6VHQ",
  "key16": "67mLLkfMbPeWq6hWdq4gEZsjpaJ3vRLY7rtot2bJKxymzF63bxPo65f4TENLLJ4id921SzgzMMB31vHHuqp8NeqW",
  "key17": "3GLXpS2j46TNtqiCnQbTepvvP4h8RPUnjpYBEyVGiRTvaXaf89qzkySDJSK59n5kYcNfU8sbSrZmbqpSvU5d9bQD",
  "key18": "3FkNJj5PAQyLqDX3CEycmhv92Dqu95g3HB1b5Nh9PWFiXo4CBNHtKodmsRAcEgv9GUiTVGxoJ6QWGHMH6JYDyozu",
  "key19": "62qdK926bQKwhcGMmxnpNTNrGdpDUnQR76iwEsPDcN3ysv9XBqLhW8AW7xG12gJMUhNoDne1nQmjAxGK4VX2Gku6",
  "key20": "2GZpTBeyBkkHmzY63dybBp4CoYAzYXSVGyuJaZDkhT3oYcarDvNmfFWYbUkD31dF6XpymfACmV4QmysrfkhWYRyf",
  "key21": "6uSznMeJLN6GqC4AGDm2y8yyYp5DMyzC9UkS1sUXH9i4kELHL7CeXX6fmEB6wf8Z8wfFBgqTR66CfZMrNivsLn6",
  "key22": "4BGDxAtjnpmigBZNNcfKnaDApEQWLST2Y6dvKJ1UmDaSXAx6fpPetm5kFMFSmhxBJt7mt5GfcUnj1B4etKbZ9ZbY",
  "key23": "3eSrMK1NBcCMhpPzJjViqdLFG5cA9oogv4AgL6LHdMyKbpdpMtWBs4TPHtvRESWADLo2yRHxw9zQ1wXTbuFtXvfr",
  "key24": "4pxH5VVptarX2r9q8goxrAQPcefA2ttYPMn354mwaQ99FMcBeezePYyxNmFvLXNuXa18A2jmXzeduQPnJ5L9aWdS",
  "key25": "55JSfAEJFCH64kWu1nRQcBkJrGja4Lm2x6Vo4LUzcvimLwvtMdpYdKKvDGM9ipPNenaEcwsSbGHyXWRoxdWxnQXb",
  "key26": "4eqS7oLjbUFz7quv4HETDMfLXAYH63cqiYiLb9yhuWQgYZ9iMNaBb4w3n6omdZZVPt2XtQDTXLnCHr9w3QidUkHW",
  "key27": "3qCPuwAjkho13YBmEBbupmV8Ga4QVHS4DfjDYHWZHbbLE82ruqDxaZ4WjQefA67LK37Dr66etSXMTir8y5aHxMeu",
  "key28": "4H57iouKeg6ur9Rhupu9mNeRkwstTdQ4p81E6rcyf9YK8SvbcumKZrZMd169BNt59J4uXUWPUQBbDeaVDTjoTmxd",
  "key29": "Axy9rRvtTboivAwFst2kPdNmpr8SEceSNQK7mtGDgLLRnKqDYozKzqi8m2vjR5fcwSpki8gswPjEG6o3NQhbYvB",
  "key30": "5qHED5zffb2YzKwRWhZYyQi56rTY3L3ZaCFkuZRdq24iA36mBiQqs3LqfgVJU9vSKb7K5tsCEG1WhThdQxNGQm3B",
  "key31": "2gAAeTzAYCyw8zNfwejDiADbEXWfXhBwtAwL1w6HNcUyT6mRAfZDfdEi12LRSfV8r1S6EsNdFWCpFPGjENGkGbzn",
  "key32": "5fCuhFzAUpSedc7SwE6FGdu5iSnGRYFE15uYCWaabQesNghfu8jGVuGR7LDYsrVZcg3YiBYuHD7E53WNYuoQzn9b",
  "key33": "4iPZcLrhckeKj656ACxrpAQcVAUWvQEJsgAeYtGpxMCsERTAsptYSkEYa8wU3qw5KY1bHoRVQMq2qdNCJZPEYdeH",
  "key34": "46HTLmQECiu58qEBeTDThxbMHgce41qcTEFDeZ3Vk5o1FvLmvT3927rzwzArz8ACttcHtx3NsYP4ka2kPreegsmP",
  "key35": "2a3TCSz6CXwteL71UF45JQQYPd2rvaAWBcc7hYfzSX4JR3oyR7SYkuhUX38vnBcfQuX5oW3XYYw35XUYpuL4sqhQ",
  "key36": "2r4xSQ6gQCcB2fdg9bM2uzVRLgnz6joYv4GPVGreYiWjuw4Ezdthct2at6S7RgD6sgH4yp7xSPw1knZ2pUVSahJp",
  "key37": "4LdNvKVNiVLgAyShvRxZpYUBgkJ7qF4bB3Qh93T4ZrYxXNeVZvNYZHMRgvzdQabNug1di7ffts5Qu68TyrtXGuih",
  "key38": "5y3rTBiALjdz1U37CEEuhH2xUTsp4fwKTmbRDfw31zkPki2Na7xwZaRhAB417SbjR6cQtrJVD8SY9WfHsQfJobbb",
  "key39": "y4bvunoNz5owLWLduM6ZWjQomiWT4JtQYpuTkYRCRYB9Ajsv5h11upSquZuyL9NbqwXeN4dSmGMkLWLYtpVHSdS"
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
