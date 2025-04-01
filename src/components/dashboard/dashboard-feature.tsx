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
    "3buxT1NdXudqqmK2XmTi6k5Vr24wL7VXG9MXFiUuA4N8Hdp1DWwk7CBhSHrJqdF4n7NU5AzrNeahkGciztjhFdxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXFvTLpDSZ2g3diJnKcDFdu6iq5g5TFWHuQoFnyViqxSNGLDtV1Qn5uaFJyB9pxXvn3SXZCMy6Ug4rAv8wEgm6s",
  "key1": "5LaW7qi7Yvm6pDEBFCGwhwWX7pkVMMh8XDw1gEuJdNLSbzFQA5qYUjhZM8bgmUMvmRuqXTpxp72wheAehMr9iZrr",
  "key2": "Eydh6KxJBDcLMLjmTXKCz3qkt6qfYjXzHn2TxqeEAvoxZDJK6sGMfLJzC3uh2PrdFw1mJuRxMnSNM3HJ6oMqhm1",
  "key3": "4jwZtPEXSvLjmN9DSa7bVVBahqSx6T7wzK3kkKomwxVw2kmJwQHbp8yrhwtqq6RLD9PfojDeLKh14pQK5RCu2SWt",
  "key4": "3N6Gh3y4h7VPHi2zgYrY6kppNwwjDxVWnWFbeQuE3ZyPiShyLy1FL6NpNHgujdPhqwdwEcYiJdHG8aJrKLw4easS",
  "key5": "31mPfvpcPURehYxDfeS9FLA3n846eJeaxdGKhageXfhFHc12TKxa6yarjVyEf28e37xroJAjY1qSkGbgorKQWwRU",
  "key6": "4nAtJV83HYS8vGfPELHm188saHLnZDSAdhkG99EHJdab1aMHqF8oMi5pyuZa1PmpK47S2nRRL6CEJbwRH2KC98zg",
  "key7": "4MK7PTDEtDrxnQCLM4irF69io1NnXwk3w9YNP3rS8hK7VwRgNGaF2KTEzyrzW8AWj9sNRxR8EvHTp5tHZjJMdTv6",
  "key8": "4DumuzCkx2Vky31qfjomy1oSKazx36WaZzKgvxzLDbubQKT8mEPYyV3cnL6WAWwTkhAMcBDhDyvgrD53yTn3mz9u",
  "key9": "4HpUDdGoNygh2vMreNcWYDTN7tkJ7ymACJP3cqCmXUBTHFHfvEj4gxwezRaWFwZoGhhidky1XaQQRrdEMVesfQ4N",
  "key10": "3WFsFqifEaK1ysEmuEgRL4L5fjE4EWDzzWDBJVwLvh7AEmJTmdjCbaZogrwWnnjxSvjKbWxAswykmdkFz11r7CmB",
  "key11": "5NSopsYHEggr5hg5V3pBci2WdpCwgdaAMZ6AxVqdTEMtwyc2Ak4ukLBJnS8EFCAu7SVqQFEdzqsMig2E2eJtFd8w",
  "key12": "qkRo4C8i1CeVLfte9FfL7LjZeM3qGt9EXrzw2AJC9QtmDfZiwHCzrt2Dm7wjh6PZFWCTWCSjNhvUj1nvvFK6Er6",
  "key13": "4y7kwupbiwFaiQDE7LJ3dfopuZDgko7oUmUikaa1XQWecyubbWyfQ1gNMDXm4EaQMn8EsGY6npxBZa5HgRV2ybK7",
  "key14": "2QCBdjxoRUyTwSHgaTpupGgoJpTeuHc4ejhbXWHftRYXk2BFMxHjHnwRN55Jb4NujjveGdbAJGrMckTD7QZxDRqf",
  "key15": "2yFkrbyLBBKdGPqeHC52US7qypVFhmWLYs7RPcJDU2HABm8ajM2TbVuKZbjfEfDhvtxg4fYTbkJkh2iRxEeXXr1k",
  "key16": "4v6UJVMQH8eHBnHefYqgM61sPLbRYDS455Y8BPWbFfGuQa6NLL53nRVtkjGWAzMC3i1SXdwFPPxgV55KgohjF18W",
  "key17": "5SxzvoLrKBPaQzs1pTsGq5NZ74eGMzbnPXfwf5iigKWYA4wUdcQ1hBJA7g6KyjV8hW8UAckBngHcuwT7gYfaSGvT",
  "key18": "59WhbfdDTD8Du2ptRq9bRqwtrUbA49zzbsG4ucMJw2nVAg1QnoAFTHCDifjQqj2WeV2Vg2kVXNro7a95VTs2g6mB",
  "key19": "5Zdra9oqGcd2E8Q8xqa33WV2yZqn76DvtXnKo92yZ1DgPXHFTDG9bFsY4ahPKfFemxE2jsSFZWzgRVLFeuDMu9uw",
  "key20": "24GL6eDSsKZDvKyC3n3KUtMkY21Vs8nv5d3hnYBH1nPeYSsqVP7Q9339kfaj4gzbaxZV4TW2DtWimATQdo1mzHCJ",
  "key21": "4mK8gPjDVWAzZpeAaDtET2FFCNGvBee6Bo4DDiyd1zgwefKtbXXZeS5AWfdtRh6sjRdArdUc2cicrnM9FMZEyBNV",
  "key22": "267u7BhuZQEdaajE9XWeCCjqCooXTW9gyWrFTsAxrqakTqvUAhgFCbLfkftVq5uUm7b82vkqCWZAGnLpCJxoAdmC",
  "key23": "4ENp7YjACDajfwFJeYx1K8GBCbFmRmkMRTWGRrGrdfBKAe81kuDf1CmH3Y5r58wWSFqe71gpYQLLksjtmbhXpLJV",
  "key24": "HxmUtNJc2TsbpiMPbz8nHxsM9UzKpAcikHAtK3NajFwkbrRhxUBWHxKbgmbsNVXv5Us7SKYHEpGuoEjWp82UGEJ",
  "key25": "3c64gzjFHamKMKiSjk5jagrvvHhP9yztzkBSxGwuo3a8uyts3pxVUuR2ozN6FN4vHeLhyfWX8jw51Da7nyBAQLQB",
  "key26": "2CKU9ruAE7uVL3vCFEjj1nMzkxS5wEve8fnGxWZqo9w4zeaH5pP33wgmXEGBmKc1E2GoKrJDPWhwcYR73UjsW7Xc",
  "key27": "5bSA92Kw6Jh3KqvbBjWuK5qJJL2hWjfeVNx4o55BFY6VioMJ7GUdUF14spkukZSkZdu9B56r8jbprWctYYpX3VtS",
  "key28": "wtgTBg8LC6SfKzCaqd6yugzfAd1pLwPdNBMg13AkyWZApGwhkazASzz9Fv8CE6fbuKEc317xjrBHBgi8CtcQe4q",
  "key29": "2YcHP2Pv268myRGiCE62k1YT4UiYyaGvRkxxYgz3ZGz6RSVjHJ4V8CKZNqe1T6ADoaJHR59S16n6QKPFrVQ9h6nv",
  "key30": "38oSHZB7K3TXvtSLzkH7CsdvZUv2N161WePzjWvna3Ye8x94hfGd8MMpsNdVrZsaf6wNGnphF7JktTDaK82gHnG6",
  "key31": "2LCeWGQVWCagbks2H3C9RUJvuRLKnfsPbeUUz4TpDrVNRtoyzdTy1n5veMQdugV67wUSeLvoiQ9vufubvFP1KvF",
  "key32": "3drhJ1qiEWQZuxrdgnTsacXuf3ZrKog8gz64wdjfvPN9xVaSp2hB5LtN6qsu92859Nig5kRhryAQSTj1jEGay2kS"
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
