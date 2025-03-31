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
    "J2KFkMEsydvAVvR64qndx9LWeStfKemhD5cQigzoU2jqHKtUd5trHrnuYdJowHL89ST2AuiLiRpu111BuzRzd45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsM3Uhfz8ADb6A9CBpuph3zPoqiuLNgxRNA4ZoMeQLeEDvave3mBVZPMZhPSgJsqMMiiM7j6qUaXyRnB5kw1jSR",
  "key1": "2oEsN83K1ChSLurSq8F7DKEKTci7qGvszsp8m7MR5UiScZ1rXB4YTf9EbrJwxvSReJx35R3pyXDvjqsCmWqNoqJK",
  "key2": "3BuyuXNYDFvVvBE55XrvYmuYjZm7EBiuD5VNtiMeGsE9vPrCwA4WrhWM5f9wnrC3rRk9ARZPcUxCpMbmCRpJSCuz",
  "key3": "2PDukLpVQ37PSQukpaETx54ikF72gPSZDiaVV2FCy4zFPQB4Ja6XTZaiXR18m9K5NwsDjd6h2p3SQDcqeS1hVzrk",
  "key4": "4eSz5V8azB8GfJU3feb6KMRLu5Md3hhZXU2NFkAFc9QdnM8b7vhsZAQEcFwjRu2kggZyixuDZrARinTX8NESjyLU",
  "key5": "2z5YQGRu5CnVF97thp2pNyTfFm4rmDJh9CjxEMX8uuKWtGvqt7fEUw2sQXfrwWoG3wtzgVxSQDo83dzrt3wCxSdn",
  "key6": "c195hSzkxYrCbiLhuAyFs4DriEf9NwZM2EcDrUaE1zUpqP6uSdn4A7WQrYBzSw4ZRoKqUv3vyVfxCtTaHzKH4oA",
  "key7": "5DNCcA3h4wSHzgJtzNFS9QniyhPFebsTqqcu21eDZC7VFnb1xtBiz7SAqssZnNEudvjom8XP7na4o1tJaphfDUcN",
  "key8": "xLE4NXEr2jcpjpz7C82kRPSqLSQHRvoHoLVnqBtz5xTyPaF4p8oxVNQEX9rXXZeauX5WYU1niCquPAieFL6uANe",
  "key9": "2BqfvK5crejLSyJ5XcRiGXLyiBNU3t94daYeKo3yTymAq7hmRTsVtFp71s8dur6nV9p1LDB5c1MLFDT2qUyMLumd",
  "key10": "ouKftsAykfD61DsXpkKKCMz83XYCqBnLzgheuFfQU8X8v3UfqyYhQwhEa7GJZ72gqY7dX86G9vbuhAYNVhbESs4",
  "key11": "2VaBwMtVVZb2TcqQBmxrBnuDBhs16t9wjhN5kzVQeRw665pD6PenBvYaRANQaJf11ZoSXfGuusgEWEziC4aUkHce",
  "key12": "5vdwFrgrYBMi8U4XYVoXEEk11YGc8QEdLadmnU4nWUBkW3UGu9cLYhLC4vaSG8So87BkH8jMHLcZn8ksjDsMuXeu",
  "key13": "2q4CUDJ6HQ6RSqsCSz5fmaSixQP3EoLiaxzGWQ6mtq8hjMryntQrdHioXsCuFE4ftyXLdCuRynFYuj1retHebuEs",
  "key14": "cohpk1Rxs4dxu4W8FvyqsM3YEDyikqrjKyFuj6tC6tm6YeenfVwHCnPSnfDBDkbmScwEuprDXzR3tJeygA419SU",
  "key15": "52msuhF83uNUAt1TxrHiZWfxSpjUf2V1BFTepzzBqcdeYzJUfuxmBiXan4acJwbNXTaXArfpuoqwAipWHWb3PCUh",
  "key16": "3bhpKcdKuiehtS93n1zd3LyUyr2MWxo8LaoGBbQTLhvPiBQ1JSdVUhWjf6ZjsYMReSw43ZYkzuDtQjdCADzv1A7Z",
  "key17": "3gHhde8FaGqXq8bd8roQbgab3GDanMS7ET6wmC32xw8ecLxaFStaAF6oTS4mJEt9tAVnNtKBfEU9uYjwcAHneDhP",
  "key18": "2r5K7cU5gkqiBVnonXzfv5eyRvr6dfQTutEWFQ6Duy3niaZePsdzvfKnjoLTMLBgZUkyrf7CQedVrrfA3VaMomga",
  "key19": "2eJmuc12HPnf4K3AmFvehsWexmjMmT3ib2oEzyucesa69uosjJ8B3RieP4hxVMUgXeVKsq5ULjUBQ1hipRUoqqYu",
  "key20": "5YjAn4BEbJmjRM9x7ShAg4V6ZyjmBVhFBLBXjZb8QBXv1CanVPohA1pL996UTRCSaoUvnzKohaj5ArLonDZrC6mV",
  "key21": "mt6rALGU2y6tGFeBvQoinF3J6i5xgGcfCM3S73qYb8XngD28jJb7hg3bLEDW66XLCC6ZeMEyc9ZWSHvXrutBV3L",
  "key22": "52c4i3LFJ4DcjzGvepvJEsLL7edGUdmATJPDzToeXFLMg1deU4JMFiLA1yCZP28Q3pxafqT3jNNkduNCeG8isgF9",
  "key23": "3bpBSSwmA3yfinjKNfVsJ6BHh7s7mDRseVPQ2oxsSM6SyU3eVERWEamz88VE3X6og1Hmhg7Gk65GE4PrAkZPJpns",
  "key24": "2ZcKkBCvmaPeLtB94J4TZAwqmXoD3kAkF3AyPXbUMxztpVzCHaqZUxzm3tGTQZaTJedEo6Nwho69xKn5tx6JmiJ6",
  "key25": "66geEMJiZumppVXhzp4YBq3wzoUgfiq33Q2yTxamj9LMQLBLTTtWZmATJqPxkCNHLQ6PE9weCUDC2dE78TFogLzX",
  "key26": "64aUPuh9Ly6LttYbRsUyhFhuYTFM2QF3hMnVQq2VWpnCuGrrrmVaHDaGPTadoRqE6sLdZdkc7HpSkWuen43mrL6X",
  "key27": "3jY2PKYhv6hTHFjTNKqmhr4AbdpznUKzitE4SS8qB8xkJY49ApgaL8gfDPL7Gxdynqvczu98yLf5D2zxr6cuA4nD",
  "key28": "294xD2NmCXQviLRpghrSXZLg7T487dAYhN3KvRUhJ66YShdPTmMy6P2kcccf22823RhhjwLv8PQuR5j3Pon6sa8e",
  "key29": "37XTczxdBoLgGcw21VmDuJu5FdpynPfH9TfzU2DcLWLiTqSpiZjiEkFBszSZYB9fzkxLLz6uwiULJTmwLMSBEcfh",
  "key30": "3T45MfBAKiBqp88Y3FF9DZ3H6HcE1K4MmN1Y4BUATdsXXxbmNwjLBmYno8frt8eSzV5v2SbwDcFS4zoHQPaHMXRs",
  "key31": "2o6Fe7oktvdrho4SWeWbayFXCrRRd4q68Z6qyT2FzQg5Ny7GPckjvQcTZdZ72eT7MPFPa7nMcb4sLm9dCNtVz717",
  "key32": "Y3Abt1z793KzZ13hdnGiSsDQw7uH7R1f7rPVLbZUMFVgP9h6pkhbUxq2WvsxTe6fs1cWEeYLrfFYisUDzspLw6p",
  "key33": "dYuxvj1dV9cSze5obvmL8vy1YagpsxJBCXMosTKX1NRixuTXkUEvwRNpESGeg7g6985RdsWoFjYAwrzCiCaQ6UQ",
  "key34": "5ngejoeJaBGmKJZ2EFva2qH1bsYoZNfh4KTLez2jxggV2RfXbdiNbLSRUcCdvhYa5ddRbV1GQSTw2vYZpW1RHsJ5",
  "key35": "2BH6TVykVUoe2hfR4VuY9EZgVc3ZAGxU3EGe64uRuwdNWA1vnwti8ytStqTX817Ga9SpVVeNPsT7VWzLkVtEGvcS",
  "key36": "3QV5Jj5S9WnztJPayVc1t8Grj9uBGjx5AALUJBdmvvBTwkc2PfovsGZGTAD3pobjdSCnVpm45nD9BXMamwMeiC1x",
  "key37": "cDB3MkReQYowEh7LFLG6h8cExxee3iMm5GkNfp6J3aasRUzuNiaaL41doa98XBnDYrqjjqST5rjQsCNwmjLxray",
  "key38": "2aerofJBMb3az9VcRN3Wem8NZDfGbq6CtLYVV3WZNSjXEwqH4eYD7wKfNkEYKjosxC5fogBw2RkFQC2dZq85o8kg",
  "key39": "4e154oXLmy5J4yVuEeAqnSExUMctbPTEQcqY6p7cPzutQoeyamdGy5frFyJQjwk61LcFe3n8GJo2AVoA9phRc6P5",
  "key40": "4nQm2mr83yvQi9wzFEcV6cKYqj1ZNKC54cArb859UacVVwcRjns4ZMweG4ZVoAKfmyYMuxbEk4GrDMdP1x6jszo7",
  "key41": "2Z5RUZsNofUcDQQPqwmUgxRnUU2gzVnDWVPMFpoe3yMa9LMBfKxH8LePNrJEpkiok91PaixRQfyZqNsHAwWb2rJj",
  "key42": "4b6W9kfhQmLEchLXBnv3rqy1BaFgByZU9BJKh7V7BgEwkdJwnQZh8L55AMs1ddXquEeqThpW69pPzzfu3JdCrenF",
  "key43": "3CuNfdQFk4F7i2CP6nvYmBDyhPjSyuW5DY7ebPQyAgkFr2DsXkVMEmfxk4rMTGe4jvaTBqKqWPHtZMX4REJPfMER",
  "key44": "4yYnwH6C4ijY5DmqLisSdn7tjfFd6TVydX7PkgeR8CiRUpX7ReMEh6LMrqAJzd7jYYiFyznmDmW3GiyEepwuoPjF"
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
