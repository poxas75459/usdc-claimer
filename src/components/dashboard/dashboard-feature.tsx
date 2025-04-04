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
    "5Y5ykHhL9BtpgZyQA2qqMKfqSo58pQzCXpEXekBuai6U5D88Pk2f2i8fsmkvJt7QSfZM5DPzZu2y82ZsiBLsMrhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auBmzNScLziYCTWxkhDULnGcGydJmEEWt53CrovNJJJy1aryDZBq99H5UFz9pa6SbPL9b5tEDADdbQPtWYsLvGR",
  "key1": "5JN8JFZcHCDVTtL9wf8MKQg8RqSyCjgax5G9p8d11AKahdH8jvAVvhGZftqKr86JfiXXSmkAjVi5PXTUGgucTgQ6",
  "key2": "3rEtvmeJLLaxCLjLBvyUTxtsUoSogp3DbqCdrkbM8RaY3c4J2WPSFWyPxDXroq9Rhj7GFJoDffHtVFMuR2NXuQnF",
  "key3": "5tVBfWXtsT8bNVD7PW7JxzaS3pXM1rwb2k1ea9RaUupzX8mW8ofVLmekhWkUHsyYKyDyhwbaRwmE5XysCk6Qs4Sh",
  "key4": "MwaHJHAyfV65CgJUAV74KVGavCnV1yLFMnJFp9M3k1iegcv4VNtRRrcYh2WgtY6F7Nd1kmZc4Qgp2Ryca18Cf5L",
  "key5": "3EJtWGNuaRorsAzwix9kTVTBKg21QXiFims4jKjDaPeemNsNJiZQNpxUR725Css26meV1gGB1oAxh3uDC5bbkuQa",
  "key6": "2U5KC4VALw2AsqGoFZ2Xnuqef9GNXMynwuGcKsCs5kFVJ9AWkvVj6FJzX65PuGMmEiXTaUEiBqF6Nu43dxN4bQwU",
  "key7": "3u5g8q9xU7iLqua9cg1Vw1uWQsk2ko39egtJMbtGJ7pFuah6XYJTYEZiLD7JmHQko98gX7diDvDCqSGTgii5KVve",
  "key8": "2VneoGj6PVcxvyv3Gbj3Poae9S46D1BwvSd7VkSYSHoiZQrxYBJG3QwHw2rtbdVc8K2W35wdr5CYZJPqZT2yvJG",
  "key9": "4uMEWsT2smKKproFyUBpsk4pPMJ8uDTSfgSUeYggAemSRE5yvC6Ch5HVzioVxu9JGbZ6EirYvfbwAjfVkuwMt7Tj",
  "key10": "53Bqk86hs2JkiVVnuyDVedopyJLhmakGjqx83wAYJUDdDy7Feu8AaHcmkUkTuYMrbfXsXhMioJFMLXogX8BsjR9Y",
  "key11": "5c9xVroJ941hQKkuXYYC2YMJaiiMx3BVaCp5frrP7YRJTxMyE4x3N8m2n91Mp9BWuS1uM8K73zEtwhYq5NMDnf82",
  "key12": "3FxERtsQJirPhgBQzJHed78agStP9WYXZEpwXZEBqi9VQQfsCXxgvJLAjm6BsDrw2wLam9zpG7rJ8xVVVqv3AHHj",
  "key13": "5g8C18qgSTRDeQGXLZsqTT8W9eU94TxmxyWCugqiAVyp95gGdC3HrYaDy7LEHhCGzrvmvenT6Bb9DB5vD7sKTD8P",
  "key14": "4yMg6rXyG1kH15GWcs8TCT4aP7JmX6AXFx28dyZSmq8zQgPJ4d59A5WJg6R7XQzr8CsmVH4NpuZethDiYz77t8su",
  "key15": "4DK1nNRAsLqKkXKgwt5NvT5BWZYHnYdQMnKzDAGgkoEpidpii43VVxoTrnUw8W1ZPDwwPrhbHTykxvpejHg1DkzP",
  "key16": "4WMzW8eYWMu6GTXsjeK8UrgTnL32EVi8oG2xZbLgtfx994gxCyQo7LQ6EqtUun4kEm48kwRd7L2TMJ79BAym56o",
  "key17": "4ZGrx2E6vPjbz1Dd1WKkxkdo8N4yq2JAMzkopL3M6autnwhMh7kDQdrh1zJ9DUUpP1HjmRs9b3F5pXDvKMb38QhW",
  "key18": "Gu6CSbo477fTrDtKDgKeHoiGhMPjfqqevaupNCXLEQKft52yiCUxts99GHSzzs4vTqV93rdYfnHFeXbNu4CBZva",
  "key19": "3jEdTAH8HHudJAp5FTgT8p1nu6U2HwyWTHdTrwMZooS3CrTeYzHA8UAarzhg4WcZ2EzZL8oMSHt2tuuVVTenyTKR",
  "key20": "2THgpXECivmmsWcXjs6peHMCZJnpor95qQaaMmumBMjAzV4hfCjzGC34ojqAHutxvUc4YbCAYmyPFvszwSbWnXZK",
  "key21": "Z6DWv65Mqr4hnFdFu8WDVe8vtExDYJeLR3q8te4WHk9cvu79FY7SkTTmf4qtX7kStJNySzzy1SphnYr3GNzg5o9",
  "key22": "3jPLSVG2b3iuhsmTjQ4fCaXphw6YgcgUva9rRw98jVLWfNeD9cv5BFq5DH9zBqEVRnzCACTok2bpjewbdzYnn7cJ",
  "key23": "3vvo2K6LHb1Gruy2wTif8SU9xjGwGB2cJnvhLrPvp4Kp5XBYABfBhyXkhzkrkEVWdeMt5niFD7c2Mu1f6f8H6asE",
  "key24": "4tLL2Ymya4mUNFFL2SySWHEKCLDrnbogxKHXg73xbbPeeyh1CpxDHBZoUFmcSL9PAStAxJRaEZrZCetcH34tVkyj",
  "key25": "3cfSFkFSHQXgQaxWbj9pzcZVjsnLpwiMdAdYxoDwsYehXHsicw2PUfgoRYeK2QVfAvnbzcMGSt6tbejbEeD1TSQL",
  "key26": "4auGBqfjMKyEXQbuhh8eM7zfbhaC4phV5We78LJMwx1YRwmudJ4e6Fne6XqcQbbJtMTQLnUb3yEiL8xfVJL7yEgd",
  "key27": "22Q4pJma66R1SuhDn2SY7nGUUtzND25VDHHiJu1GqB3aVykUdvXm7A93CjxjjBAGq3xBV8sRKTj4G9KAqXFe61FQ",
  "key28": "TndZ9nLtu91LnhzT3DDbiNbtuAmJkQByWEYhbw4ufeJDuFEiYYkoGRWqj7EXEyuz6AZfjA8DiDpjQAbqmobi892"
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
