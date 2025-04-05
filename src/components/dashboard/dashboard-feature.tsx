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
    "4A38H6r1MWkysgoRFcbKjWa4gnUmhJBfCZvTUyY24GKKP4ARvJH3yXg1rmmj5oB8mTXc7582YQgvLaJgQ2FDdut6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJz3xmoNAHrfAjgF3D4uLz4bBafiqKqVav3ctL6qKj5NPBHgekNWXqXruBsqeS2YFuqv7JimRSaZafSWVoR2BnD",
  "key1": "43uuJkUTKNbML8aKhRCbKQGEbGL69EYmnQPWqjTrGJMWzRkZjNJdryqMqMXwLm1hijBdSSPuiXiuSZw9Xm2bHFFa",
  "key2": "2yPkuXS1XSSbMjRRrn6CSBnJTtxfedtGyhsodbwnw1d8wZ64LhjDJqxwxnW4DTnJzjx5VCUqN4i5pV6j3h8LJXTC",
  "key3": "52Dy8B77tjAtuebdeYz7vqN7wrxirjqSbsSYxyKy3phL5ZAue9t45muWojVVfn7mFKWZdkRAJC9nJqUZX45LFsdZ",
  "key4": "43KFGWX91NRhzu9MKEH6ngdh1suksf7EC1f5znHWw12tfqZ7tcKBcPi2mwSXRBf1vC1EDTzmQ8tWyaDzFXpF6tet",
  "key5": "4QRKRxX7CtLx97RnUrooiEAYBCV91yCiPvtu49AF3sLTEkAjYtP62PDL8nVdtyGcgaJDhrWtany74B2A7DGWzgo6",
  "key6": "3uNc8nr9oSmirwBWB9nTWezuv6VXiEsLL3gA16SFT2A9tE9FzrLYG2qmvz4wnaa3yp4sWyJtk2GS1eHtwYmAKxdx",
  "key7": "ath1E1iYYjSSXoLYomzbqH5mkLZuB5WW5J1CsYubkh2umpHGPVv3QZs9sAgZD5wC68pLHZrFDxDW6PSWm6mP8EJ",
  "key8": "qcayZxLZpNuXZSjKnZCRCFqLWfgy6tWhVy3N1K4URKKjBVkRLMGxsob1waHmtZvWuzpzuhMWHga2jhFH6fuerWL",
  "key9": "3pgCqsXXW8JqyY5ecXDhRPm5fJkgGcbJmA58rRUzNdgiPER1ramPTQcziJdSrY7Y1HdcRodRTupoaAGyWzuEiqzC",
  "key10": "5A1bTCq2m36yHa3xwrA9JsAsLLMGyfpPXRQ1WLWb8BVM9ovHDd2RzvVdGqBPxSo3uAiVQtQdPh5DDx55RGgJK2hd",
  "key11": "2bznxWctChmrZ4MnyPMQdjCBFuvv6FAhvTZh26s3z5eHsgvEH33PTjLe3pEA5kUyVMYmU1zjLREibXL2SEacNf3y",
  "key12": "45oJzTWzSbVsAQDpSuXrjqV4U8VkFtbwwcBLxwGf6tASCCD6P1PUFCCmya8DxzieQ6Kg4JAyXhXzkvSjav2deNfZ",
  "key13": "3MYYQFMEMazxYCmtYZrhua6Fs2SKNEr2TBYqqdaBuR6y2DZSSAkeFHsomjyKxvf4GzPGdH76BpjRfoPQA5fSaZTD",
  "key14": "25ADgbpLcqetykDye64zSWmdM8xCx9m463jELVCPZXAgH7kBzCq4LswstsmRZuKoWXYkfuC6dCwunr4k5MaWgSQZ",
  "key15": "mX3sz41AkpCBFhbwBEPv4pJb3rmDfU8RQfFLJaZMjevAXNSfafwCjs18uCUiPh4p2g6Yv2U6stqVFP45fg22E8Z",
  "key16": "25Q1AdG3oTiSWjWDR7jSK9b91JygyggJcRUMaf16zNsr3KxAydoW5s4qxHQwbARhnhcc987P7KhcwF8mNde1UVem",
  "key17": "4ecnay5eTxKuAZbcXTmxgjjCZjJYVKLeURQ5PCpka4qjujvqrzE2m7fVkaqvehCvKTTLBZVxq5YrEanJU99ndook",
  "key18": "3is78zmP5ZUo8AeE5iL61RrBTjLi3QrsRiWsNvqH6Vxs7zbbREecxNxp1fhHUz1rS7mCKddF5VZmVwTULT1KwDjZ",
  "key19": "4o1SU9THaP629j6FTSjcgZebxRmTYbufoL16KfQToUCQMYh7NuSX7pWULzvHR6Xuzhrc7j2fsqZ3BeerYjKXXYQV",
  "key20": "GsTjKN8JMQLz2fwrrRj7TwMDCWWyhz5xVf23jeeUsRb9pqu5bNXCQheNNkMUhKVp3uZEWuH1hbpEot6j4e2CDoT",
  "key21": "47REENLSzQFVQPvsT6Qxg4RZxiFW5eU1rDNNHBNsYM87vaGMbKn4CpXUVjzFYt4nWTZYeNh3TcqngdjxXzXsxoSr",
  "key22": "5py5Nv2H8EgJyuqirzsN5yqryGWVaLgttEY1hXutExi3nPmhWeF9FNCC6Egfxv2ugGfU1LdeBzbC5vGNp1x3AWNf",
  "key23": "4v7edUNdM7ZL1CUWYjVtAZ2oz5aWLgLcjDG5VQmkKFVzC4fbxWrBLoWqfLXmhsDDtVzcVTHMohynE5ti9MJbmqQX",
  "key24": "5emMXp21wFobthttoPtjEzJ7zu3CDB4yNUu2HRAuKDuZM3QH5j6oswszsNizodHD9oZMEHtYGayUQbgcqorYegni",
  "key25": "5WdG8T7D1R5QVzDSLU3PFqjC5GgvWMuK3wj7sZMt519gJXHFQThAcQP2ic8aEumM6GBYsgrzv7DkAd8QXSvyZY3n",
  "key26": "4U3XojizL84M18WV5E1bXoq3mgK2dBNi4hhKFY9q8V8zHwbAkxNY7baUDm7TFTkP8v1Vg5jvTGsfmr8KL6x7g5E9",
  "key27": "5MzJCfgT6VBH3rpP4uZtVqp44X1T6u9ToRkEKGNgjFGZbpnU2tibgHDLc61EEVV5fV5qKEc6mcdiQwRm5Z3wU27B",
  "key28": "4wdwRMpdQaRi13PMmLV3qTm3UvkwwkT72JW19gz88V5F4db9S16FwEFy6F8mvUmPi9AwpA1bXZnuM3PcTRgowjEb",
  "key29": "2FAV6XGMtfKtWtqLjKBkWwGhCWZ94pnxoYkALSPJ59D6WxA22VwjEDU7zJz5o1BhtDdEcKS7DjBYVHv65uDj63nJ",
  "key30": "5bpixLYmrPGjH3joSBdRDsrs9v9qPd7vYoECcnj3yj1DcBkeNhduhd1SfQYwjyhFfmLuaRe5qJdPtesRJV9PsEuJ",
  "key31": "2Q4cwqMgstojG5TRJnE97EyEVcNhFZ23nGHYKsDEa8fbyRJcQMf2JSdDBXdtZiH7R5TpeicZiHsVon3eRjJpy8Ff",
  "key32": "zKuJMz6utkG4B6qWZLJNPNvZxXjjcWFkPh45eSVACLZrACXRTNLNDjcrXgVBG7WvziWx5PTDcjYTRHsk7U2ExWX",
  "key33": "3G7s2SjHxGth9Y47yYtqnc7t22eBaPmdKGFXVxhZJMo3jFPAoPzdbJgwWczyLD6HVFGEmggzZd85gyudcK9AMFez",
  "key34": "2RTxkvbBLY7MCjnmBWX7E1kMh6iKPJGR6UYDXCPHocpnYybW6zGYdjeBt715KQcocGPez5cgpYbpXZgYLz59cycs",
  "key35": "45Ly6iLD6BPHxSGt45Si4aASL7zDXh5tDLPMdNQK8zaCS5Ux7eJgZeaVcCftTLdQUPSoEN1YSUD1PwPbbEJJ6vZX",
  "key36": "pfKNE2MUz5e3n9d9ariAJ3d4X5XE1ZiRpX3Azozj6viywaPw4UaDiuneX9gGb6YEcUDE46cFracR3ndUo474e8y",
  "key37": "64DzyXecfhTytyFiMUs7GB1BjCXTmKbdYLeUTpwhPXPG8ZLeyJ8Vu3keA45zjd1oyrehaGVuR3ADp8sEwLw2gvgS",
  "key38": "3QRWCXusFrB2LZEm7oPFEZ9wRRq6Bdnyqn7ACHYdtxJwr3LyeLqBJfu43oKtBksM7jrtmq1ZtA5VC5UevTE21fyQ",
  "key39": "uRzofFXx7znmYX7nFoTx2U1KCZkFhedeALyZ9ygoo9nPCegTmdhdu5CbsPDwTkp55Am4esHyxsTWTEVvRBN7YUQ",
  "key40": "3wU6eoYmscvjwsn4P4frcvNJqZruyak8RjeYX3hfUbTmnuZ6EZ2Xb9Y9E1LTP4R7rC4gf8kV2TPs2wv3qvYehT6w",
  "key41": "42oNXhFfprrqHtZePyft5bj1kj9a8GRTNQ6SNsqTjVv3sHujRnKrgPr2TijSGwBx4YANFT2kNukbSkZrV5V9AhJR",
  "key42": "3z36Yngm2BxCf6YU3KXR98q1z5ab3PLNo6esXArVStSkHwqfMQBxvxCnHPUoVBs5rCiXCyDHqf1utmASUSEiC41v",
  "key43": "37Hm9M2Y9mVSPSAVVhNGKnBSEZcSLhcxvzKoegeftXhfFNRCKbNhQJLwehouCor6TzScgWrfAw3Ej7tUfQykjHdH",
  "key44": "b2Gt5LMgqQvtaqQPNzsZ9RaaVz2UKdAsdaCgpqfyPRw4uZ7SsNqA2pMtjHEbi997vnmdnTSLWD4pqgVoAy4z4Z8",
  "key45": "3AzUV7KskFypRiBsnBTfnNBYGZCRDpRmVqaRF4xULrBSBgCagiQYNrfNv99wak5fKamRzZBHjuAM1bz2JTxPKT43"
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
