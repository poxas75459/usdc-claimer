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
    "5FriNLykYFxYRoMRiThqh23XS9UAyhiSpAkR6vm14gsPTCYEoRrXwJbn8ZD5Sng2zyBZv87Utxt4dk7hoCKmQhVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JLqgjVDThrn8tFiRBCEq2fiYyCrfa4ff9sr7jMyZhzCi3Gcc6uTSR4vpbcfNpgXxtU34E2Lx1S5cJ6dLW3tGy6b",
  "key1": "VPSH3UZy57HkQ1Np882yTjGbfcFyQHi6K3ywTDRuCzRTECSssweDAXB6Ss4KX7aGUZMY56p3KetM7d7RiKE5VPR",
  "key2": "2nh77MDUJCHLhPrr5rNocynwCxmTwj64yozXaRTisDK1oEG2mZD4F8ia4qLocxfFHB2MpRa45zqEDhU5zoisZyzm",
  "key3": "2n1onSrHoBuHE4vXoTVc1skcdtfJYNpk7YCKv7ib7e44vUJKxsNwJfnpcLtJqJc4gZLBqkuCuXt4q5YrQ6Ceogqh",
  "key4": "242uiLLXjytXhWmJZKkURjZ5Lq1nuxkkg5LhWqW9G8veYc8mxYMxaRmijjxMq1bG9pEtkReiLaYB9nqGQPcehWAd",
  "key5": "r4BRnzVapYWE5M23VLN6uHbESFVyftNZtUwPP6y3VjNMnVdCQ1nG16fk5tQq7aFeVyABMSeUcXCzeZp8iHvuSD7",
  "key6": "5bsYei7derPCLuK4HYUifoGraHvq2sfB1rvEfNUND64m3FqEJHe7bhQ8xNCTP2PQiT78QZauB4cAqoQXNvZCVDze",
  "key7": "cpCDXbfXJDC3NASs3iDwU2AphpBCt8jJ1kS9qZhnmqzsQ2VcHgoYYeh3ZNyfcm4oDrerNkzMA9xx7UHR8ig8pQ4",
  "key8": "2wyA2zdGJgmuaF9YboBayuew2HUg7mkoERUFSgw53pPxgBxuc2yY141kpeRGDZMRMkgCv14x67KXQwLVL8h4Z74G",
  "key9": "3XUvLDtLgrxingwo3M7X3j1wUqdmLVpcqMBJ1gRu9fJRGNgreRGExNzMrARoL47KGXz5QaVqXcqv7M2SjATbaUZ1",
  "key10": "5x6dUjMCDN46rcKssWKRT5CsbvsELfiJjJ9HUUon1mdfaeAREDj6GFBDaM6tFkBCQRXE4GoF42MakdLmoyfyxdcu",
  "key11": "2NDhCbR4eXoHBDj39PkAnoN27CACY9CV8duLug5LFuVML6qYqMdt4Uj1HWYeAiuHw6ZothiVhNW9UBNdViCXKYqk",
  "key12": "3RwNjHCHtr8ogagYMFxQSTg5TVFkdV8K3Sh9APgAzwfyHUuseapfR1cUTwnFhGr4HHhCniNcZSrkVbq8uGVHfoXT",
  "key13": "3StX8TrxBxPexuei5HuPQissTDFstP1wD65UuR3aifqnuMUr62FWwvjsn3JerYx7jsdJEo32u5c2QYpPicYewntw",
  "key14": "57Rh7dGxmjJshL665LYBRTR6KHT8GvMo2Z3zhqGqrRYDf5kTC13j1rUCRSaT6jHF29tngMLqszTKZn8WBXz8pvMU",
  "key15": "FFZrnqHyLFDVNkGBAkUxBF4SfiYTraLo5bookWQc7waTvgusP271iqjybY78yG3BEmbzLiwn9uDfZdtwzykm9wN",
  "key16": "5DBSnyoVvvmEAHuzyVUs9sTFwhfycCrcE7rgdEvuh6PGZSvfjiCTAWscSgTKxs6hPVAcg2teCj47oChvQy7VFH3F",
  "key17": "4tKCBu8gNLehkVbuv7duff4YaHpgK2sHQecSPUnwYw7rbT8vaitUVLesGZYNT7jDcYbJGpvrHfJeyYY9DFHcG5AL",
  "key18": "PB2EyUGa7LmJk9cvrEFEcLmrfZvMquMKZCxPtzKoucdJX1seoB87SWigTAnDyM295Vm7YAizJm4upSTqMfUykoW",
  "key19": "5mD3vX3E3wRtsvRS7zJTKmL52paqqBCyj9R2SqxnzFNnnhAqH6ThWfYaR5YLnJzqq5W8f4YgB8ay9uwpUp62jpwk",
  "key20": "xxQP95W9Q6B5kZdFMBJxVJDNm4teoHnrrmJXQWJKUwAYogB4hqqsEjYKD9CvMAfzMLo3Jy5ZA29XvqV6WtsnZV7",
  "key21": "3sqXTSuTL3wwJ34hySXy8EJPCkgGKtqHC27FDJC7kPtvL4qx5GNMfdXGZTJBFL69huSpDbcnEBtUe6ksiJCi4akJ",
  "key22": "Hc6jfBr1RdPj71qSLJy1zTqP8fP7EvHZWfAvUcq1kzKczgNkpSom66MVSUuo8y5AureFsnwNAZm3AV25caWCnNb",
  "key23": "3bZQ8uzWox1ysdxx1ji3NnjGovJkNLpEgFpj5xuJgn2PyuFfo2BXrCkDYa1fpnSNYTiyVauiJ2v3HcEw8BXeSkzn",
  "key24": "uLUzr14Hp3Lhnwx6SJ2Yq5UuK5KaKu7QLPJQuNLVCtUcgpg1xPmrdg69VXtRS92MLqUs2qLYmu6nnDNYn7W2khJ",
  "key25": "ZcRqyQo94CjWAx92ahaxxWhxsgLFxem8WZS1XEMRACN33kxeLbptUxinr4NhqC1GwKAFJq3qafDmmZch1khWhBP",
  "key26": "2H5vbFk19jSjcLbwu7BB69ZDgGyeokVnu648ADqce7FPq5bZ7qwYc8kQxi3nTSJSVzFpidCU1xnye22rHeTQe3TW",
  "key27": "3dsDEjRRSLejsVjjHPVYc6L8eiqgwoJU5pj9Jjx5zcpoT1VHCBGxWnN4Vbvn9Jm4kEKhNPDy2dSfDKVNPQn9yQPN",
  "key28": "sjo2CMSFpwVQwzmPHquodEbWbvLbY1qSJc4DnAG9xRgHvymJV9NKqVQrkqrfE54dtE6ahHUig1W68wvsryPZGig",
  "key29": "3oxVTAW4xDgYDiaFzQLHKc2LdKTP3scFJtvSg5i1r2YjkUWboKmk6d8AHn5QegRB21fahRbzHVQqUZRRJbuUbTx9",
  "key30": "zNgVimFcGDzTcAsuP8aTMg6VrNWuiGHvBL2sWd72ykxEqRuvU28BCB7cXMNEcSPvks7XycijuKDVDT1SCMnFVJV",
  "key31": "44gecU8RtBTvZVHXJHGwSu7CQ4WZgvifUJrXpHeoBdGqvkZ6nfarNjqLnLir4H4zyttYd3DU8Sj8t1NMVRvTv6oX",
  "key32": "5fpvqSJxchTbAmvHVR1X3Qta5g6DQC4YB1SJr2hFD5TiRt74uPawveZDvV5UeP5aD5NFNchGj28VzuSKDx4HixC9",
  "key33": "2yMpuvhEyP2rfZm9V7QN7SuavZhxE9kaYpuY72X8zfQcEdRJDyP1jCc8NrQaCEULU3bgLm382djptezYrp62CNcC",
  "key34": "3ZaoWWnsTSS8kSKUrEvP2WJVJysxpGtP85mwKyiHvpjzjoU3HoKnNnbvXc2ZpfvTsdE2TCsShvSDV72U1WT5eL95",
  "key35": "3ATCaWbXdNbwTNpCztVXcy7NGcRqMToWQJaE6G8YJJbboF8SJM74Z7bUJwrg8fnFYpLz19FwbfvrLaaZUA3FdYsN",
  "key36": "4L4hHBQ2zNVKxsp56W29pYPEStRqGhPaLJy3RAtEWMy5foenYHtSAHbLob3bidar67FXgHT5oqB6wMUCmG2XbWFB",
  "key37": "4Ffs31nnxaoAvRMPPNafEZWPawqniLpoLAd2oYoZYWBk2qA6DEYAdLFr7zodaBrawczChwffTNuMtXHS9QfGwNzx",
  "key38": "4wFEdUEePn5bJDu54Q4tDZ7ZbL7NNGtkUMtzngBBSaT6PvxBq6Cgbk68um6t4CdLB1GGiDK2zFkXXgxwRSExC21x",
  "key39": "58TSwtgMcVeMWoWUxCgnpzvrpPwjwGHUBK7Q5rkrCbZmYgRQ6HMH8Y8ssK1fuQrhaFEN9zB9o6PxKs7YJ2ngZvEh",
  "key40": "2LSJXyb646NF8nB6g62KoZiK9FRRmg4QAjzzneHh5nExnP1LMGTimtXN53cpVfYxTwHytM9uKwJaaXHj7m6nJnmv",
  "key41": "5KiuEDTd1G4htFiQj5hBNBDtSiqntMvMLYLFathXWgszL75w4DWqcLX1Yo4EfU3zcfhL6XYmyJAj68kL7pmN8gji"
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
