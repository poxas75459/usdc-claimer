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
    "e68KMrJ58CCCBgjEyFnfw9W18XPk4h9oLmb6yHRCNLwxeYYmcgqVb65569NsYZPiB9yjrPyMQeNkUc9tbsfTMK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKrbwjaJKgKk3d6Fm6kESAj7pMNb6zG9mQoxthPThoJgmGQP6VwwD19vCsX25HQ75c7dn98Pdem5QKAGDBGLGwY",
  "key1": "4V6x1kdYegHpuXi8WRxKCaxUVYUwTD4vg116FmYU4zuMHfrZDTTXSaXnRAxrSbwwPjxdnUE91dJaBg4EYaiUH38h",
  "key2": "3NCCkV733ShkC12TVJ9KHgNYPPNkWboFeW7HsoGB9waSLURCAhGddWiFoFXZo7SLHowDVAkvkwkc8yjmpvUDwA58",
  "key3": "3cKfCmhia1pKieCuxNv5XTk8S6wsqW95SCPapqRpsfGNyuWRpTD1hSCjNjHfRFe7a79M3nb6Ah53HwGfWw5VdKXM",
  "key4": "5rYepr5M53pbWw4ScPB7rJzGDUeZa2s4dmasgacExN48VwpPxTpU5ciLyfPfVUaCbnxxzChLD5qR274mAbByUuce",
  "key5": "2C9reYQZFPksq4o645JmG7T78u6VrNykgoKfY5GhFgu7ASBnHTQQU4QJ7UE8xVo5FWL1fQTjJRg9vjG2ckWwjx79",
  "key6": "uCHvLfpKVdyxgDMFwcqvhnHDKgx1PKycfjM736WnaVPrFMbQWsSGSG6dbWWzoSRABmjVWgnxjLG8X19ZVcmA3RM",
  "key7": "4snX4dqNEB7P16d58PNpQXzuuHUASdMJbEJxf2yDjRqq1DEJjLDztdFYuL2qHT8capS3B71NjcaUVnxsiKiqWF4K",
  "key8": "4kmx6pfZHBDRipT87zVHTbTQUVtJv3dRbjLvUjbhhYaLhN5TuwgWVyjNysKC9p6bFFHLkbzJDkB8frCsj7T31SSF",
  "key9": "2nTxkeiUkpLiT8i94oDsJ3kJ8QFNwv4xZ9poAFrHyKLqAvXQ1N9NELwvdPRczeWYpv7wsctyYAt9HVsYwDPtBrXx",
  "key10": "4yF7ovtdoVELjr1eNgHQ2XYLmBiv9KvY84u5fyasTLeTTGZHfxKZjuaZCHbCDKPrM6aXdzmNbuUexvEGUGmXcjhj",
  "key11": "3dopwe4jNxkVhjo2iV39S2uQNfGayYabLttQkazh3tuHFxMA1cMCf1RSSz7pFXunX6ArbVmbXZcyruG7ssCVVC3m",
  "key12": "2uFm1mGTvbADuCiVK8udzpMZdUsQQiqRhiK98vtwtZmVe1BwTpqG1PSQeDusk7DgNdZo6L86P9FhSznh12m91jpY",
  "key13": "2EpbydEizU1QKzXHP2nEYLDwmRxjn6ZWCeTmKQMnw2Ep4sFCfDvPpT6bBn9hsJ14M7Gqdx9ZbkPzZ4YdYQ1BNG2Y",
  "key14": "5RkvQzrNu2q7hGt6iodkTY6BfzK8CLmks5g62rpuGxoFytNdnAJ3kadmBXsi1sxpQ5dAbLBG3MkHxMLeXZ2rEFpf",
  "key15": "4raW2GU5x4kobe5mCovwBxft93JjAWn3zyC7eLbRpbGoRgxgN8CP55wz5HnDjf3o3EmnA992JKpZHoGAkVVBBGEg",
  "key16": "27ow8pnz47FLxs4HX5VpnhixmuzacygrXEMuCTKtpun3dwq6V4x4DeYEiBWdFfTDZAjpixJXLY9eDpX51pAw9mgo",
  "key17": "3ZetcqhsJEDgaDRFEUpeiMzcRhXQrDQ7X3FVeCH7nbJ7hUuax88Sfi7H3VyExGyecwnqcoLkdy3N2ADEPT12i95m",
  "key18": "5jDXHNN6vqKriDeg4zSTufbYRt5oYS6RZ7x7K4gJSTCYtUjaxRfJ64dV1PK6i1ALz8h1yb3fxgngke8GCrBVgaZ3",
  "key19": "5k9ZvraqeY2LJLhT4MRd2HUYKTobouJXvjWVxuNoiL7ar4c1FTLmJFTUsd7S2fdbbvgEigNaMZu7hhTRY3SUdevi",
  "key20": "twqM58bkWsgYXQg4Hnqf5P6w1nVethojRAU86kkPSAYiQCJ2Pz9pY1dN7YXJYXMpFWTYgbuy6vdTnbL11geYod3",
  "key21": "qaGnhH43y2Y6nBMvhrFLCj98u64551Ag5VpjvJV2cMrD7QtKAGbUaBMTmNUUXWVMYoHu6ynJhqATLuphSN8Lnrd",
  "key22": "3ASygR3NjQm2f571TEMVeLQt8acg1kSLBKGejJD8Mx5LG6H7d5RHy65AN7aVdZS5GqETg9Gmgz7DaDiCQY6KdA8i",
  "key23": "4FJQW9tN9cgkXwKBW1joMjycXEiHLW2UBkBKMovXPPRKLKGWZtbKtgFC9c7AgPgAtMJ5N3aZQ5NiCquHs6c2rwPA",
  "key24": "1TGQAG9USNbDrNTqu7GtcmjFXgmkbss4cj134KWi1tdVVRr19kPowU4UerNKKW72G7VMM6rjgCF5bgKfAqkCoHN",
  "key25": "5dLtQYxtyxRwFwjYWL75zjB26yAnqScR4z2T6Xp6FonCcrn6M3aN3knHbMT9Nx3ocHsnnErrYBw75sZUae1u6gRL",
  "key26": "5aTSmL5JwWFJzfEitgvooAQq4m1hwjKLk6QJxfYRCiyXcyPSyThqU6XTAvNH6P2VhzyzbmgAGTu2u1odEBaTSh3m",
  "key27": "4wE1NcTFNy6LePgdpHvK6LumPXWgae5qKFnUCahTQFDzf87wm5JhCFUKVwSNZ37nf6uak8AXzv8W2tVPwzY3JG19",
  "key28": "2g1sa4eiqz7HGqjjcgmGyCZV35E5DwVmi5jkDXxHaJJ2BrkCatPEK3LBLnkeQMGDWhkAfPcjPGvWWMZGHJNtFr5V",
  "key29": "4ZghhzdnGwAJWvGt2ks1mnboi195s4NQ7Z4uXsbKuzkqN6QswQf67PK2LPvYxaiT1cEVJvDFyfr7vnHco283hUPc",
  "key30": "5TVyq5rfTw5VkQ8w6Ax3F2VJRudf6jXuSnALZPaydXMZ7oWwxLnQs9uErAStZ32jXTuN1CH37jpgc95WFWa1mXT2",
  "key31": "5MgrJ6qpfHeesy2JLdJbqaJwfgNjp7ohZwfAUbW8DzzNefA2bnZPMLPj7NftduXEojqGLiasWn8r1872j7wvv3Y8",
  "key32": "3JwSAe15GHzmfcGoiSm4wwdEpiUL4oDVpTcq2Z38YGm51XGtG4RpoY6VfbYs367KYA2p2boi9tLmn91RiFkCyCbD",
  "key33": "5nb8uZuHammBTkHUhKjzG27UNf6KGnmqhPCcaVQr3gMYam2zgGRs6CT3aevtmPBbx1npJhKwCGLQRDMmhL2wyA8P",
  "key34": "5RcnruWoB1zTvV38XBwQwexMFQpTXHCTsJUfqCdYFdcP6tBvUpZJ8xkQEQ9wJGVDqkzJ4LyAVfAzUkqXm6jC3Xfe",
  "key35": "3o8G1cPY4yzu53UC18duMiokpPUYqnzgugrycortx9taPyAZXnmQHYSxe14STKUEbT51A8mQyQhz9rh5qmzmfVZj",
  "key36": "26HqjjVaXvDpJLHjyv5LtFfHXzuhuU5SaXGYYbryiAgJLij6hesuKW4WHB6PCBhbUjDEJsyjFXveSontz6Km3Jzp",
  "key37": "5soN3kXn3gXuyqVCMpQF2Jj3NdknMGxwHka7u5EdVE194F9xmawXy7VEZDkAZN2ahbQHniHuokgLKzizhHX1CiUe",
  "key38": "auymqFvNpAFoeoskYD37Yok65EdCPMrC62qJ24hcYeQMCFYyzKvZyH6DsA8sHuQ1QMSCoLvFEobEyGWapMJsTz4",
  "key39": "35JQwrGKxcTB2KcBr8yhRxu5rbDaNygFRm5T1gbgBmPsZKfYoNrJrJCw2oNXKGATwhGNyS2bmrAB8KJ4FVwtU9Vj",
  "key40": "41DyLtk6eeB1ekLkF3RxXsD5dhyLE4343cv13UxNBnED7ew5Rm4FaZDg89izWfDNzG3cLurKAf2sJuU126MzbKAK",
  "key41": "2bApiutiyQ3pYTxv8VYh1vapJJAgxXgSvNV4fwb35vB2iHiuiY7XL3ban6Vf5XMTi8w7AGj29HkYZehsq87NLnsF"
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
