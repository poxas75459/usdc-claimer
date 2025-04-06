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
    "hjAaogFx8ZPWqtwA97hkj5Ty8XxoHULmm6up234AdxwqmCzQNJLpPfCYqpjpvcjE8RjC28Kc1h41NosctNNQr8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "syWwGaEagHzd6k6EKFT9vSqu45eRhBAaT9MKJGfGpAwXYPngKshNLPEyYGESJnc1SvHDvg8rt7f9yYdHvKb5Dt7",
  "key1": "AVUgU3Bja8djBSKTFqX3axUkoHDcGTbeztMaLUfTszCGxTDqsR8gP6ZKyiEWnsayzZfJsEuMJH6yugx8fr84zit",
  "key2": "57G3ZDtsz651JG4wsnbmZyKGFXajfW9pCfaBpKuwF8iG1KmsQGKqo2N72PYo4QEokks6jSFx1LPoNixU3K5zNhv6",
  "key3": "2yCkaGsWSPiBf2HFaTGCHpvmEhPjykGYCFz8UXuco1W1CYgyGdgV8sdQP3F7M2ExtccGdJUtpS7TtjnXNbcQHPZ6",
  "key4": "i9BfqUwLmLnMCUnrctgA42VkePVAJnWnzH2iJ2K7ji4tnjguNn1xxRFyA4zgGdrdmGgHGjwoMizaQ1xVucxJis3",
  "key5": "uVfUGnqb4Ji6LXuQiuvgxfN7psMergnzy3ww8z5FFugvYKhW9HQGsULcjPYk9Cp4K1qSdikhK4JcsLYJHUEPqAV",
  "key6": "63AkCV6Aqm5dzLFDypKs6RkosGXZwQT8DQidWJvVi9RQqTuUmLbsvRuM5aEzrqS11P6zdAE8rUJZFLV5zLpqDsbJ",
  "key7": "4yjNxPrKMGqwcwLdDAwUiVmd5p2jUs2GV54HiLeAxuroRmMKDh2gPaGKACZ73gGivEfS1nN2H7Lzh8KKjQpV4d92",
  "key8": "2SfZgSKHHmbYfxFV1uTWLKd73862FdhkydGyLfiCMdX9HxWQwKLetTZhoqTFVDoy6aEPGXbKMFKxpCh4HEN27ttA",
  "key9": "LfFp6cF9vCF2DKtBBqwfMwtWH66RqWZJ1rA3VBG1AaFRf7uycjmTn1tymrADjD88bKTYCQ6MH2QRzyrBF8zCj3M",
  "key10": "5CNr4SZ6aNHmK9vtLQ5nqPDzR2evKAW4sF89PnuhVjJHunKNATM6QWSfMghBFerssBrWYbDfBjW5jeSdmK3yiPPY",
  "key11": "2RnkM1ibe9UFq4NR6PcJCsWtf2DRGVAoq6NjJw1NvFqdWzjUi2ah87JkCrydK7jBNqjmzDqQ1LZjzx9gb9RHnv1Y",
  "key12": "hBZvbKvVX4HZXaJcKc2S1J9QWcZM4uRt16hwrMCtB6nsYhaAGPLCjA6L3HVp8DhKY6mLmC8j39vgKBNymNQvGqZ",
  "key13": "5UwFfwztKS76z9zSiMn6mPRFHCDPS1mCERVgVoH3e8BryaAMA6wZ6cr7rfg6ECCruTRE2b5hkeAkgVEcjCRzrFoQ",
  "key14": "2LGNKoCoNxftcXryZfmRsUe2xPUe6JEtGey5vXQDfcnD34cPm4ZGejnB8c3fSnesHAvqoEg3qtsf2WrrAZtWbes8",
  "key15": "5hShDV5t9u32KC7KrWGrfoHDWX2NjZpdcyuPB41yRnBnZkPwK97kbjtEurrdwjLnPvijWDY348EJxk8Xz3pLBHtR",
  "key16": "2v3E5nhWt6NKRgzzV4aJ1bDLjMbhCwGpWdSwxt9s1vZsSg9HVmE2HgiaTHK6fVi83H3YoRanLy16BcENhYmS65oG",
  "key17": "4Cq7WfopzUsFzcungFKuxsKPePLU8kcRHq6hEozpKGqVUHPBzG77oRxG5bnkKLQy5UHqyjwUUFZNYqooQRxifidU",
  "key18": "62WL2UCNmkqLdkXWQ2f91i9nTCWp59bLEE5tmk8yfFG8M3QmLJPsTSQaFvh9mfsgnCPrh93eBmyJeQvJitPTHRp7",
  "key19": "2DcPzcJmZjsL2vWzqk7sJEfeJtn8C1bnwfcZYwovkhvHCNfrdHgQad43eL7HSWgpQNBEQfnkN7femfoQXnpVhXHq",
  "key20": "5dRkKCizb2qvmwbrDSs2FPhVDCunB3ho1ENkKwuNkj26rGPm3WUgfNzaU3t9oKK4mNXigUBcDsLsRHMZoiBUKL3r",
  "key21": "6UQ4c2B1yPwjBhBmXRHTF6dybiUoUzAf48wJkegpJFwkrZbNGEofa4ZLNRZhSfcgiWNj7XQ13WRJ1HJn2eWGNee",
  "key22": "61HS55P49qdyXNDVPSshfA6qeR3nV3WYhZr58yDnYUYtda9PaWLTmb34TMg7yBaBt4MMueaXpykyctDTUteBrfHS",
  "key23": "4AdDGk4P9ks5jHJLKmBZxoQtJzZW7yT6yQATLZbQkMYJuvMvA4XJpEefoGwY3gMcTnU595rqigkPcyFsLrzZa5mR",
  "key24": "4fKAoZriiAppcNRnmGEj4pwZYZ3jjq3RupmEL4GLSptocos8Wm9euyrS7PQXdjZhrYjaxEH1qEFEH36x6XCteNRL",
  "key25": "srUNAG8zQDd4LCXzcsKqr67YeCqmn3zNaDB9GqNhyRkN5YXURnuSVQ7kkYzbqp4zaohauthtnWfujPY9gxu39xm",
  "key26": "Gjp9KUFw2QBsVjNaRPhxSgxRMuopT5fn3ckEQ5ZT7pKAFgFPhEX2KncsUwDFyiGBwKo2QXCmXmMW4sJtSgUGzkj",
  "key27": "5ZCBr1cX8G7UE5BGtbCuFwyzoyPcVDEDdKbHoMKgG6Wqx4JpCzTF7qQL3ZU91eWMGDMm28bkm2rVbMSPEf7E12yz",
  "key28": "5D2qY24mLTa1ktnPUuDks6Tq5jHMKnMy3EgLeS4xk5rxHysjqY7TE1uyFNcPpTxJVPEEqL8snszBLVMRYa8jkwNU",
  "key29": "5GaWXc9A3eecLUMeTDsQx6D3zQV38qEcu5tvftpwMVFKvQRoN5eDksEYDa6eEwFSY1xu4X3JbQNYQbxtXxg5fhzK",
  "key30": "3rW5oVmcbC9duCUHBoiUAzKuw7EEXrmExjpT3VPXSmDfx5zAkDASUVX2oUTCyHfrBeAWuHiWciE2RNNrsZB6Au9J",
  "key31": "pTJyy7c67mf6tRzcwJ9GHBrg1542wEaXikWTEty96VdJvGzXr97LTaqJeSZ8SuMxKgtn3RfrWDppP1HeYKH6pKu",
  "key32": "SiiLcV52dLjNTbgaxYWmnWNm4SGWw4UTUK33Fy1kXjGf5Rd8ZEgKCQKNwLgoafVqXGS6QhtpXDY1ddtm1JSBdKv",
  "key33": "4A38hhW46ETYZRNXVZNJqbST4XNqh4VqkLmTQJ3KJrXEULjCqkGi3iArfc4ayBKiu8i9M7rubF9tjqQhcJQ3tqmB",
  "key34": "3aJXy1DGidyFicFFAX9fnybjEFYh8is1ckmVYWZrS8DkRfEvouY851RUCraqnRLv282uFwE9atmyVvh8SNeoHyoQ",
  "key35": "5SkUSfeESw8X91PuUL9Q1EWR6GxftskeiaJaeCXdG6urma7RGavs1aAUkhAqDSPCg5jddvqc4emYytvJQkEJFuk6",
  "key36": "4EnbGBtYoW9K27JeR8UBmMZxZaL7ztQBXkfQJqXQon3FvRZh4qanTD2nv5FDqYmYaudd53rX2YYecfs8NE5qjcS7",
  "key37": "5vy6hHv1TXNraHQPPYRd3D1TyimS2JUpDfVPhSev33orfGT7yF4BoSzkUxaQVx6kRfXQLsni9uMd57VWAqkyN7Gb",
  "key38": "28ouTQVnPDiGoRbsjTMzwGbPMmbGnFWjpBN8dBRnh9XEBhrqTEa8JbQGXfMzURe1AAaTuE49Lkrx6yFaPMyrKrfb",
  "key39": "5EkDPDLtRUEY8vhbZG4yryPmwYHU3NenCf5ZcRXqoXAneGfexu5XfPBY9a9yoWtMTRFuKyYBTeeefUYhaQAg7Wr5",
  "key40": "4PcKVo6EBxS7NbDGHdVhoUwkBjpEM3fArnT1Xf4osdEu2vGvYBFgBmCZwM28PxNuLoZoMaCvWN43VbKjyPM5DffK",
  "key41": "5G7CjE6AJqrNfwNMZJumT94TvS19jcLdu3G6taVY9axZG6hatzkf6g83PLKWxLNXhVcrVaN6dj7PuNhPgMvuPXiT",
  "key42": "3xyMxpgT8speJTKqEo7tHyE62WzkD2p78pnZ8ZwYw7vPHFAyfN3HHQ4zxAXvjTepbijtmcZnRUdeT6DXeNDpXaq4",
  "key43": "4fioEZXdpNyWeABZvTgjpgLggg4Q51RCdNayzhiFyyHCmkoVWSocqZ5VBG1a5N1f7bAc6uNr977XZuf5MMo5K7B4"
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
