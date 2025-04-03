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
    "homGSJiGDZ5XN3fETfVnNKwheL8rY2GBX2oYDFMhPdigq1ESfPLcu5jHqf4QvtFdqxq2Fvd1nTJrVDR8qc6uYdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FTHRZQsmofLWmSap6V2oKiL1ZvprLAgfdNJvv8SUMDVSXenJ23n8krgykB3WmGT3oZ5nNAW6GvDNrVQxvZRtab",
  "key1": "4EC1rL3PCNByr9QKuTbWC722x7kvRhmUCTTAcs2VmgjnUGfKcKRJk9nwryKkEFa2LnbGdc6py3yir4oBqmYiMDx9",
  "key2": "5sZc82dPaZM8oY21VbQ8pziBWwE6pnBWDBmBsUdf2HDNFCQxuk8o18RvRniQd55TMsk3wUCAgeDxhwa9XRay4zKb",
  "key3": "QBzeGZHHEN4WQ5pTDpAVMuHyZYkXDrXJ5JEqYMBdRZauzF2w2RGtUVxaNDtfDaNKNxYzQsD3UvUS2DGzYT2XxuV",
  "key4": "3UGfuBbgRwXzRKV6jFmQNTb5ixDfsH7okrRbwwZ49JuYiGsdefe2BQmV1uZSgDBJb4cn7u6SA4wJ5uoAwWmi9jML",
  "key5": "66iEy7tLmyjLpzsCjvT19nUcJrX7KtjyCCCvNkPenYyiwB16Txn7pEwKEoHzsaxtLR5eL3jwnF2gsqzYLcz1zySJ",
  "key6": "3DRG6788uKHLS3PcpqSvzxbXY393yrRtmXs81uoGTMAb4vBy9M6SWbD2CtDDLKSFdWcQ3CYWXnKGgU7kaFkdG9uK",
  "key7": "tnMSpd9UyitHNrBWpDc9UgUpaoYikBoK9U6gkDjoci4PVpSf625BkfTtRVJ8frNTi8XPMhL5jBnYzbQoT1jYfQn",
  "key8": "4dxbL6iumSi7BDsMCq6sWhf6ybqJPNnHqpJdjfUgqmyERrvWSM52RmG9vT45411rGJvB5n64fHfKuypVjP2gSUMQ",
  "key9": "5z3EtwZpH11TbKUcdko15E6in83nS6MExw3d8YmR6LWMhbar5DyQYU9jfTtXAdFZvUh4WLN3NZ7m9U5XyfFSHtuK",
  "key10": "42EMQQrrDY8HASg9AaDEvEJyZczTus3rbhYdsqmYGkDZsoaXy6XGcSbNcKJEgAEzqMmUM5CyXar7sz6uesnQFd8N",
  "key11": "5NxridhtwQBL2qzYGKsAJ7DzPtwUimGqEEr1kZ8KGsN9aB8w2q9DbFKrFFwnPm1GJ5God5pq8a9bGRFrFVGu8scx",
  "key12": "3uFVwP4TAgdqHBsRjQUgo1YeB2eMbXF7Q8MnhfSJSk2PtjrcEKGNZCJs2RSVaPZ2g8e9y9GYRUE81qPDk9PQzFYD",
  "key13": "4ULVt6rMC4M7BxYFpo7iFCCDyPgZJh7VqFbh3mXkH8SUZQbHPXAbE1icnBN67R9gbqge7dYzdmJeqQcczStgESP4",
  "key14": "2v9Lp5gMbcks79LZby6UM4bL2oFrCmwsxZ4Cnp45DDxKzQNoKQ26YKC434Vi3sPA8EponHsh8vuM6KKY3cs23QNM",
  "key15": "4Y3cksrc8vMbNoaAcghGywd46dm5CFb5sjqcajshxTUZ9qhogmUWi2LH3vpZjTAXvVwaCpDUvm5xKDqo2j9fLs79",
  "key16": "2n4xg2Y9rR1yLbQ4aedoF9uXdDp1FTTzv2fpRvjaZ1GmBU5HjUCKyD5FoZZqM3WQvwx232MDxB8bNZpmWKF2ip9j",
  "key17": "3f8LLoHE1GGFczyRgUHM4mNBCzKNn2BQeftHrtfoXTgSFpa1a1A2UeZaDtpe4m5YFeQsodn6egVEH4dyBTw4wnan",
  "key18": "4FeqqHkaD13tAuwEpiT8KAxZCs5KzfH1SXqAKQ5dN1Kf3hqLYfNj6mANfmvUxJyum9w4aqyQ9bH7jaQZJAm5cJKB",
  "key19": "2vmRhyDHeVkxH7GGfWuBjpzBM4CtNLUWHTqazctpYVzZ28hUJu8gMDbA8w76xWLV4qWQK8EhikTHqPdfVtyCWbER",
  "key20": "5MStSfY6KNSKNob2D7R7RKJrPZkV26iDRERsc8acNbJ6Mmx7FrQHfefpMt7pLKkaHPcDQ234Gk38nCSru5g7mvpy",
  "key21": "4ubp9W8sgaRWmhYMm33d5YoXJvSheT5eEUrz8Kr2SL43d92C4NBzMZ5aJE4K6mY7FKSDpxQbe93KgnYsjk7FSWXf",
  "key22": "3Jg6oyJLYveuV4Jbfc2gFp9so2dNscVThttpAXiu4vGq7nWRsQiSZiosRgFhCtED339LUDJexCn331qQTnnCzCie",
  "key23": "3RK3oeBhRyazLi1pxxSbGvzwRVtG5nsxNq4xuFYBZJM4TRUEYccsJs9tWuQRoXdYKjLXEwNVabFh3vYhuUhDTBKy",
  "key24": "bzPEZD5TcCrj5XUVXvG9afwTQj5y6ULvsUNGTph9GbxLQPFsf1AiJfDXjtoYjTrbGXiJUqrfA8r8Ji4NLndD5bY",
  "key25": "DHp3SUeP1ynJZbCSQd4BDVdAZEycTvybSd1wgt9EHjUW6bzvy5TstUkQgRTornRW3kFjW8u66rppYq8y4ifuTkj",
  "key26": "3wyiqTa9Bt7ajUZq77noAoHA2RgttnPvEp9B1vLZdrQbL5kTKbzDGqLK46vVddNA9CxmKqoBm2LVPEfJSXM4FJ72",
  "key27": "38SuDYzf1omxjJG7KnseYVW1A8VC1Xn6EhwnugXSmG7LBU3qTiu89eg7vtZxc9bQvB78nZLzEXk3vMeGbCqjosmo",
  "key28": "5JDN5JLBGeYs9wQ2VQu9YdZVPeZd1ewHQgQJAwJBi2swXLy5zw8X77JCzRD67mbu7DBsFHRkm7e5hSgjUVGUV6eZ",
  "key29": "63PmCmB8S2g2WmQZ28xePxe9k2HAoo36W3mdcdQT9Ty6xoxVL1SqauREJLRF9weBE5cpZzkvsfBBQ383Y48cTH3S",
  "key30": "4QATgM7EKDAcxLSbj6HRPoq1NfLEEMajnoUBU2utSiQzsg4pf6ZVNdiGKUiZ2uVKYQyTQoCfyd8it92J4JPyuGMX",
  "key31": "3L4LXNwtshYrwTFGB5XqyWdkFjVg3FvPb2JV8jaYgAnvNgGKC8F48SiW5TZoMvuCXh3TQeWG2VSAh32vV4CowTyF",
  "key32": "44GUJpdfFmy1aWdNZJ1kArfNyfpKkvLTVJRMhdhLY331TzUnAaiDt65J3GYkRVqeFbyrCqNgqwEviwzwaajDAb4G",
  "key33": "58gtvyXuvzBhpB8Ldpf6gDYBUQXTT1THB1BPyLnquHUXXfRUKHMWC7cpKh8AQnttZ5HbANmCfJviRfjcCpR7F47j",
  "key34": "2ymDBBjihSjQ5WCQmdayJpyvgovPjckfS7M2xQ95B1otW8TXyJsh5UzDHxE37xdQV6LvZmcfQtCrFV8ki3na6Ufx",
  "key35": "x57LN1vDt23KH9XncC2di2utnJPo3ktCXK75uqn6Fe2UtZLaG3AvyAsC4WfoTW9FYh7fzLavA2uVtkdwXKMEn1m",
  "key36": "5cs2Z53AGLPLvJnYwTMEf4HmELaLqvUSGLudMFrLCJyMYEPb9JU71VaXYbfJiAzUX27ETyYvRjx6Hb2fumzqi4rv",
  "key37": "5jsb6nD1TCrPSQYVtPgUSviZKUMHxfMMAvU5RNHxNRmrWnwaQEVr4qv4fprY25XX778TqVmwakY9vQghJitPhxDu",
  "key38": "5qhHioznkiuxEDcBCi2qv1vFdYJNdTNiv92j4mWFpJnJQL66qxg6vn6vxDhzSkWYjafygKNufixYzn4fAQ7u1HkY",
  "key39": "38h7X3ZnM7WiuXHoGeF2TTqFk2ky2PdNy4uRr5jBwPvm78XCBvJetwcNror1Tfi2ZY4vCRtqQmLEneYXSdCEPTG",
  "key40": "wZE2uHTATBoSs4UE4PKguNyZ8GFeuCdwQ2qj8bjqJU9nP8yqG87hmWmUzNX4acUjubYDzvhGiuUTLe1pLHtLbej",
  "key41": "4LUka3CSswQg7otMJrSqLAj6F7PJW8gqFto5oniSCBgo3p1Jj1w2qoombtL1BpCTpqv2XLTBrFvXyT9Qqf8m78Xc",
  "key42": "64nfATk9ghidnLVuqac99wTwj65n4qsktmAWRvHj4YZLjM1SF9AHXavGA7Tw9nyyUMWN3fCEXXDkGrVnwfrD5sEa",
  "key43": "3czDx9TD7oGWw6ApXySf4LzkYGQtg4NfmCXhGGhcLkmqnTSQL6j2VGkqUphA3Hi72Hdszkeymz52AvedAwxCS9W5",
  "key44": "4RMxdsnnEnnXyqrDUyTbEMa712SkUqn8qA3Y92ReHStaqXXiwp2sUKac84iiEz8LSVepMRYYmc3EJ4Ecx5jcYmj7",
  "key45": "xAny1bxccn8rAkP9ckaFeRF6qGeozSxx7a93NsRw2FKpAhEQg95ETGxdvFjRS7pqFdh6J1DViN3BjbFqNvL6MA9",
  "key46": "288PP7rKydhNtz6FPGz4iG3R5YT4ZSPhc1jTbRRYxo4WdqNB3BTik546Mztu9vJHwoNYhz7JsXEpkgvi8B2ABgSR",
  "key47": "bFUvcRLBVBNuhos7zzy6P5cFmVdMRDPoSpfXShuiZ5hTLA55bXzncsqoJRdoRMnMPQWFrhSBzxoJcHaiwpTmyxm",
  "key48": "5ovW3xdWVWPCim5oMT2hoCFycamiFxg9VP6rSaTmeT4gGMgAo692L7cLFpFFd3yQpmh2RijR8QkRKCGedTtkz4FJ",
  "key49": "3WpPBanB8FRr7cMg75NNLNr86TBPSzenvNR2TqKeTngXRzTFJATweKmB4SHZ6p3MHphBEtnAvLS3CXfmrCR8koVL"
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
