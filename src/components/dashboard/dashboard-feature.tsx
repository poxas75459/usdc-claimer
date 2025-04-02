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
    "3tskgznUoTYBq3nXsKDFaXcnn2WKVwsgrB7axhTapFNxV9fyHSAZgv7eBHjAjykfx71xcr6jMk9Q2wC6gSHuCRVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Yk5zTeosuMV8GVHdN4DEFU1HWT5rAM7zVhxQn1AWgUDk5hMwr91yxfga9jvMY6yXMADHh7tCdAmf9rMYYCsuYG",
  "key1": "2cHnR4JdvhYNxABmQ2KtWMRLrUdEcvTa4T2qBv9mMHj2X7cN9ztiwBsa9V3TBM99QhMsQJxCdVMmwAtBPiwD4Lvd",
  "key2": "2paQShKvwkkxQfD8HevRgcLbB11kERnDhQFiG43d58qChycHdqcB3MNRzo14Zzsj1iRsWaiTbwDkLbamcHTWqJ36",
  "key3": "5WJybQgwCTr1HufGmoGT6uR9q7qBJeMNAwWKAjy6pVp1ThwT6bo8tQLtcxFTezWQE6T5yayjaWzHkJYQZAdHf9xc",
  "key4": "5kQN23znr9KSL3tCcaVb6MsGrgQTs47QtxNe8UCfwBWho1nH2HqrZXqF92DtzwYQzPHVPATm19jw6nVYfwob6WcC",
  "key5": "5TWpdrYVwCA84bDKWUXs1Ca5sjiELwgpozvtk18qHKgwz7AtmW3HV83RU1VLD5qhsFiLPnTMXNmvijTEZhZLeRgZ",
  "key6": "37Te7xifPry9dyXcqw5LEEQJU5rLu4zyWR5RhiFnrra17CG255cztG3LoGPu1LAvVDWktDX4k98cC7qinagthZVU",
  "key7": "38AyF3Yjf6MjZHeJMyLh4WmYpEvBcdgmgiUpKKUcjXJ71Di3cgJXARGu2BBQxcJJsV394ndxwUqCjCKfppNC3SgV",
  "key8": "5VvNEGXdwWHWF9N5C761onUc1TMZY6KY7VdXWzuHCwEVgZmUTWtEccuwk1pdWiwiMmjcBX484gEKjU6WM9s8FqYY",
  "key9": "64DxXnJ6XJhwdtaPcodUYaTd6C4QiMt1WStaKYKirbxTQTaXQNn1tW7PpfZSerxbByFG4HCgzeoobWXEqLNg4wCN",
  "key10": "5nE1MDLfr2x7yWrNNgX9mrCzFBii4dWN4xeAzytP36RaD2kBH3WF8cz3ws4odXBiLPFriPP6Eybbh1fq3cEYrsHJ",
  "key11": "4zECvkS7dDAuuYfAcEyPMQnsQG8UWA4Cegh5DnkWPUEcffejksbTaTWM63DP4Lkqeqbjq257FoiMhRhTX7yYzBK4",
  "key12": "4TuJpgmgwDf7Ejm6maSMRBse7bYoQUcBiBLVFUngMgMEEAhwLavLNN5wkFShUDtGd2YcXN1yLkjvQjxjDFfa7ct2",
  "key13": "2gRot75F3iw3D8pLgPrDeesA7AoQDzCPwe7YmJKuYY2H5YfkVSwfiGKcmTMDcgcNZQwU1TAhUFhVPirU3T3zGu5b",
  "key14": "5wP2FWRtsaxXhFqHk7Dc3PwS4Yr9kiZTQ97YCtH2mVFe9N6zEnoCHXXNDsXuhUzJE6UD2nbc8A2nVF84aX6vR8qY",
  "key15": "2YjUaWvYP77AWAQFo8gnqiQovXwLNh9NiDMPuSBohyvXBzc8xYh1kgLh7HsDV6swFA3aUyyTuWSL96dPSuDhma86",
  "key16": "4Q91tACgZ23JcJJcMBhDs6jvTciA4kQxjCLUiXBYq69bviqbExHBr14zPaLvSf278SAB9gwD9GEZdt5J56Sygz2Q",
  "key17": "675EesCkRiA4oH88GWf4y1aLDcBuU6Uvebw2rcMaaDa9EkCXg7wKgpY5r2y28KrksxztTqaBCxj3bsbuEV2zJykh",
  "key18": "4zdT5xf35Kh9E1b8Pw7uLoSA9iW1XWYA7DW6A5B32k7z26Kp8J3bFGF9fVjdvoDrptcdE4Es5YukjfTZLnYLK6UF",
  "key19": "zPagAB5WAtdSN3eJz3NXeCQyNR4r5EmZEtsot6Thb591vdQn1hugUXLwjq3YDETcQHNT4qLQ8YLCUKyfkTL6rsR",
  "key20": "3yU3tP8hxWUQpQfFU37QHd3vfcJPLb7jioS5BzVse3PsGU5kKcaxFzYT7tRTFfHHZCRZXQ1g2DVXxAvtDRAUmmwE",
  "key21": "3eeM5VGYBDGV6oX8ki7HaGqk3DNDXYPYX5ZaaBCctMauZfvPcMvkt1EQ48yVgT5RmZqXrmqRXdKhxc4399XkxSKP",
  "key22": "3ucdcr3gSRog1hgUvnQhREEvDc9tKa4yLFH2ihFf1Nry2RgAPV6wair9JCXpZxB6uTHckWZxTBoS2ShDqbi6d7sZ",
  "key23": "3zejexoEYHeiQsHuRh7FPHA6ijJ5iAyivGtY61gf6D9qd5SDG2QVmfNpdCJc26jDDdWDCdB3644JAYacNb1CkPVZ",
  "key24": "jLU3SR1UwuupjTTMVEdnqKwev6Hup2B8hdeFvE4MkTnjtz6M3E9U22wkmpgAUTwmG8C2kLCbnP4Gnbs6kGi8eVJ",
  "key25": "4FPFWUxk7jVjqrgKcAtqp3VAjmjcGVTfcRHWftU4KYHc8hS6SzZz5R9b5su63EQCd1YCXDCgNCAY5PrDtjjp7RM2",
  "key26": "3MrMWsczXF1Dq4HkZcdcVdHkstEeDzm7bQWBvJ5ZWhqCWt6zXQymHz1MgKv6wF12McyDKjwua3pFYbkdMGYCMtm3",
  "key27": "3YdzTGKYjNMbu5gbssKanLZg38vQoF3nxZVkscbEgijHGYEkSoaAQrCTzTfHt7vTpTfuTZm5faohGkLsyJzG6BRd",
  "key28": "4YzpQcvWFWBGmdv3LyPzCCJoQ3LiP4epFtdhomuXD829xjN9KKFdSx3DPPcmC7apZciR5bCprPM5LvBSvDaHZXUc",
  "key29": "3kxxNyEphXhRu8j8YhpemvCzM8fhciqX95pf6c3N34jp9VVngYbV6QtzqxJ8heShMsujEvcAdF6fxUr59Prjua7J",
  "key30": "5XzPdRWXhcSv5bGtPMu3z817t3iKkAEWYWaLrWfNZoEchVCSPjJ2uHNcXLtQQ1FPwh8rAbb45Yx1pWoxTHSNr46F",
  "key31": "5RND1sDXdzKERN1dZVP3sDDshSEtbaEHGUvwDHZ4WYZhgsfWxBdXS27KNmJsWUBSG5okDAL3Z1jnjiVfzsZqGgUU",
  "key32": "5KewvvqcrPKdLJ2UHzHLbXYnrhAz9StYL8R6972CU7dFRs9thFPT3FBM8LfU4zuCthhW5mGGY3iQKWs1jYD5x9ev",
  "key33": "244XtEttMZUZMTDRtNmjSwTLnFwTZqkz9BzwSVkF85ZFJSm5HWsZrFkS2mFDttyLfVT3GervLWop5iNm5X8oTbpi",
  "key34": "3NKXs3QYXiweeuq8AvsEQhASYEEqvXbChQ1eNUy5TpTr2dy4n6AJKmgPzGP7qxcM7TvGEFYLNRJ46XxRYrvLJysY",
  "key35": "5wKFxDgcq2ZMjADDTSCPsrpu2n2uCF751q7K2EMe3JugzZRMhhHAq2os4EyCqR9t4XA1R1WUdBVdYSE7Lx3aGzjG",
  "key36": "5kMUjTVfKXNzs9H1sDoPPCE4XULvKGGBjrmmBmWT7rAHk9bmsqoz3TYEjVZLdMGryxD6mKzh25XSVZiuUWgMnXnS",
  "key37": "2cdTzRxVFBmmoAKe5ooBtsvvWfmtuGfoURLZ7K3hBBf79R6ULBhe6ZMLu9KoLU9dRdMYCArXdnSdcLVNJHZLvtBQ",
  "key38": "41dULvhF5TXTVQ9kAQEcgcb6t9uVFPiZmyX1n5VfWuG5vsuSHQznhxjDkVqKKFKzKD6Uwii8L7TLULFnDQxa95HK",
  "key39": "3rXZm3jTFzj5fFJ7ki462gxPqJtnkney2mcCidokf39zqvrAZgwRY3QbgUAgHXT27BgATYvDNWQXp4DXKMu5ELBd",
  "key40": "3GEimrwaArYv3HSTeXRCie7mqeaiPbwK3xYQw7p4ymdheBUh8N4SvcELq4sxmEyuMrvuPt87eMeKNAeRQAR3JPmM",
  "key41": "3DQ6fCGGSmZLJNQSUpdtdU4Nc6tdqN3b8EEo1XxHXQPVMc4L8aRzNmAKzsTnEvppVcHa6rCG3PA7tYE4PbGZ3tTc"
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
