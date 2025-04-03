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
    "4iXAvUZyjUQENnaj4Kzuaa9GFRbS8X2nggFouJ7UTCrAs8AHrsmPCuKakwDf7iXNG9zvB1uximMhbE8KwkeT1Cay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47a3tAabVz3S8DAnv2h6hD2DavW11NT5dRvnYkJ7c9EGPBGD3mrhuwSRvfCD1GPmTAFrrXtxh4pS6hxyDEV7fKC8",
  "key1": "385mMzKyJVhVGtE4iqJCMf1vzTd3bzZ1T12gsSGa7CUAHW8vPjdSgqaQVXx2EFhnd2r8kgyr5momhSamLyS2TrH5",
  "key2": "28yijSZ4vT8JmUfnrnQ4ZHiL3SV7JWFcKqG6GZDtXNPHwtXFLzHeivMw1HjAAHbow66uHb6cgCYDDdvtQ2qKyCXu",
  "key3": "AXx1nBW1HQHteGdsTYughKa1b6GRRrxA1Yvk9Qk5jQvqv3o3Q1PqwvwysTB5EwhZ7AZoGDpvtPwXbHZ6Z75r637",
  "key4": "4puTGvirGUbtjmMkMj928PaAHiPqXy6e4JcP6YMwTgndeHARJ993MNAgFkrNbHEqA4PYrXv3hUJGtxEmPpnePcj4",
  "key5": "2S6pfR2aYFtf3fJzpkHX1WYNWTs1XPXUBtPDaYjYW8gyWUHdFjTWUSGxTB5crRAeE3v4r69VB93aHXfG2ADLAfDD",
  "key6": "5oY2QypinFhp8uhfFqBfccGxP63oA6sd7pWvQizYEMurB3zc8s1X5FshSpKfmppLDN9Cb2KMi3h2xJagVSo7EPRY",
  "key7": "2qGsmLJC7U3CPxMrTtTqacEjuUCmrA4mGQx7dqHRsRoTfnruDHH6i4hcA1b6NcCg4H3H2dXb5Gq22nUjeP7XLXwD",
  "key8": "kCoUeSzcYxgfZpHGjNf1ebJeknm5cA95FAtzvMSmU1BmmFm76hiwc8UPYidW1CaTHDfWpeAQCs5uA6esKAx5DCp",
  "key9": "2nvoX9GLWvaAeRpmSqrg9EV6zmixmcovD2TBvXEGafYXXmYpNBZQ3zCw8i4cQVdK74KQsSYURE6AnzymhFy6DZDi",
  "key10": "3F739U9qm2hA2m6cVaPnWDVd2fzsQWWimG73AjeoSLtFcxsGYuMgDppBvb6tvShAbsJ23bkNNEGEQ8VAzu35h11V",
  "key11": "4nbFEyXjFS1s4VH7a4QjWJDVfTxbZtQSvtH68zefs2brm36Va2gHsqMHcFKeVfXrPYZTWsuLU2rJfbnQVGu6WUEu",
  "key12": "Wtf9yYX4gfa7EoQcGwbfD6TuHVZAjptLuaaDJ3rBZAefFFC8ekeF2U6GxYNR45vEZmJA7YjWs2VyGL7pQVhhEQB",
  "key13": "acdJxuFeGaZa3fVLRa3WQyhcsEXjfF48ucxLCqmzxQzXJWBbAFNHNUre5tyY5eJAG8sMRSxYNeHphvTmwWeN9EW",
  "key14": "2qENWG8ZcsQy4qXrpPwFxvSHABYT6d1EWHS2mevja2zXKpzMLxbkRECGBuA7vNUh9DFm3dC9LG2e77xbjyBCoKsg",
  "key15": "3XF52Vrbb9Wv3xi1kWQRfhS1iKgaAEYWxviUcFUJ6nMPp9yEXMmnhdgqsnW36D8xpnF2tmne4XkfP69SdrL3pnvi",
  "key16": "M6qh6ShE4PMYk7S4jBcN2FiPuwZjKyCkkBH4tuEHVfvEN1N1ae28nZNv2tdy5BUJMBjemr2aXVt9iYU4hTg1s1n",
  "key17": "BKjvhbNbdTb3ENgHuFX3zXRm5horB1q3hcc8r3Fu5eHSgpDUTyfFsL9NkPEmZepyBBoJv9oBkou88E453cxoTZz",
  "key18": "ZfRcxUCka9yMrhLhp5nUDUYg9iDuDYHHyNHt5xt63aRu6WgWcu4eUMmtqbX6EPfZoqGaXLxv4sEebK3tAFFX1Ft",
  "key19": "wK6wMZEmiUb7yr9fLXYHqnvRYXJycBMhkpJQFaodoiAXdRyd7mJwoQ7YVvVSjHJW1CRtXf3JZtUUi2GbCFrJ2SL",
  "key20": "3En79jrjtH3dFkSbtrP32LGhNAg2vRZHbnjxijmhv5ZxZxtcvv6w6WSGmk6XiYp9HrkbFvG7z6hp9AZ6zCux67Py",
  "key21": "4vvZigXs564bMFzHz4xhrtqz3VbtXLo4eWCjhPTbJ47guQxBEQFcNqsxMyTYv9VwheJbwGghW19rwD7AaGowSv94",
  "key22": "1NXqhUTckwA5nSM2qMefXqtxB8D2i4mrGGFMxY6CVGhw5HuA7doKBuSDeoa6Fx7HKe6dM3XTUz3XUgqU83HhVmr",
  "key23": "66hNQczY6A7ofyMmdWfUsbkKX1mzyckxLhgsFHLY4tpisPQYkewqvmgHpJycmejFJ9Kc4SgV2CpxxxsgfwCCGhV6",
  "key24": "2DGrdjdDi35mN3AJdcqWyPtVyWtsjWmmo4xetLQQ9AQjyuEig7ciEPnDJVzAtPifYebjofhjGmMY6RkWsf7nM3AH",
  "key25": "59vkJ8hQeQf3Lnb5dVXQgWNvot5J9tdzNh3PTTS6cUu9B8bPr7fNH7mgTjzmHFtBayN3BRuQbmjSLLA98BDFEYVJ",
  "key26": "fRRz5717QPKNhHtSrntPsgMt1amUKK3EuWUhj7n6KAtbsaiB9i9HArXJx59uavb8WnjbqMTPwJThSSurFBi97e7",
  "key27": "3HMoH47bdMKFW6kmSwX1Ao7sEqDGeuTsG61BY4pHkLafdnC5XjAb129mLeYNDPfAdNCwMjSqy52YJAQr1Ekg8L5W",
  "key28": "3Z6Y26YWy1mjXi94YP1cmbAZKLYJKCADBAK3GfJBjFwjkBUdQbFQRv7HioRUSqPaLUyc6VSY35XNyex9hfDUPxZZ",
  "key29": "2gKyWKZtz2Xr8KyWcaU9LALZkhJ2RFm5h4qJ3jYXSTuEYGW2Kik2pNRQbQvE3Jr15e4wYJRdH6y28LddceuGv94",
  "key30": "3XH6MK2XLpwmiVEuZQjVANYmtMr2mUjf2gDMsH35FiBteURw8KWq8NuJP3EnVphKrsdRP2n2htqT9JiSJ5SG5yct",
  "key31": "3Y6qQYbTtGjhFkerZcsccsL6A5auYkusSyHvzNgwMiUA8NVSd2dfNbr7pPBmkNPymroLoF8UD6YSULXymS8vg6dd",
  "key32": "4C2Fpru8Bi2DCRswngtJbFtG3JbtJA4XrYkbHit89XvztKuFY4PPS6xpcK6nVUt9eLPL7NsooLsK9Mvqougffw1L",
  "key33": "iFUn25XUHxCw9MYasMiGt3vM8cwQqT7qn4rmyr5f945BHcLVPVW837gjHEKRYYFS4RTK4jGx5GtNULjo8rg7pQy",
  "key34": "Rps1rWaunf51joszScdAJEWizQfUVXxuoAW4JTz81A7bTS8rTj2m1hRGjYEWPqHcC6uBDx8q4eMCnrenjgL5aQD",
  "key35": "4f7zccAhHBU4kvbFkRW8RdRjGhp2VbXaPGti4eB4aMcRiLQoT3UGUN2FTfSxPAQKPe9XgvTGWATpEsySxdsdbhtp",
  "key36": "2TA6n8sKRXCdXn2nQmvoW6F5TCbpQ5tAMGt3QRzaaYya4s9k8Ta15sELcL7KPYfq9ft1YXn1AgcjKSMfP7DT7vjV",
  "key37": "2bKzzQLCXJiZ4igjuNxxm6nxnKbMmBhWnmMTRDbPBE6zLR26j9NpFKjz1Z9MCHnbstYQ8LVbHyrVtQuHo54NsTAn",
  "key38": "3MHJXX1ukSC7naXAJc1qgVXF1GUgcH7Cmk38nPERR5JV76AEV3cX1aH88B13vZ9RPAWJUAijHZWZouFbCpXy6LYS",
  "key39": "5X4qcG4kudwjUYGYhWfnoJgWpvh4R4ZKfL7A49DnwRXSQSFma9UiNX6CbdqUCVy2CXkfixkgEADQUQVY8mz9V7CC",
  "key40": "LrGmRVUxr2aBRAiQQCB36k97L8qz1eY1E9XakLfYDQekYcPEDCFGW914HotWLG7UDMdKaiLCLDZHA7NcsN9GQZP",
  "key41": "42eyssFcEEtHBhX15cuqQYVo7g1oMZJ46xzH87LQo9JDMe88Rxb4FBRgH4y59GYKjj9uE2pEbSFbXs9Ntyf6jBxu",
  "key42": "2vQhCrA75jzB51PLTHfainU4CUqnuYdwsGUpDWdhD2p4jrXjF4afYfNqcejbyuqWHPYBAL7FpBaxbwi1ahau7Py8",
  "key43": "5ipB4E8Qa9gvcLsWj1T7A4GjzAoRwggtVd9xprWLmQUi6vFCBrCyvVXZsh4VRZkCWCE4Pxxr9yBweEL2tGqxgTzR",
  "key44": "3SUiLQHkHiDyXDAj91L5KzsHxqu4uacjt5vyYwvvPrnYci9fku7C1f8N67C6byGs1MFinNYvrty7ax2bWWvA6tST",
  "key45": "3wkpy7mvnABsXrFm9YzcKB4oL7nMDLh7DgdAb6gU45no7165d848D3p6H1pKtAUPJZWXm76WwihTJWRP72z6MmEb",
  "key46": "269cSjyEePwPNETbRC2E1UxyN2fXEmLX9HotAaCzMX84afKfjggVcFPZZjavWmgbews1ziCNB2S7hSGE5Y89ATdc"
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
