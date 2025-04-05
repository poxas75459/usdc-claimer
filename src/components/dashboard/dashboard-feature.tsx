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
    "2pQU6UYCyqZBAKmVA6AwdrSxfJ1UxKvYnfbVKkwBpAeTZgjzLqZWBptmbQE3i3Z55neokZH631aosTdDhgMyg7pL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpcrDzWcfj6j5UYR4jA71XKnx195JSZszaDUtwojkKU7cP6EY5P9g1o94axkkeasmEhQyq9eJV9dHVqKB7XoZWR",
  "key1": "BjR9JoHzcLyTzjM7njTKhSjd8aUP2rJDKuSTffEvS5zeUKEtybckjYnPrmHFgUP7jtyFYfqEeiBYkmJ1d6mMj6K",
  "key2": "5mSmeMqBBFexPhMosvunKrzj9DtuWRLvmELYDPkbtyTxHrXmzcwQj8hPDLnekQ32Ro7XcbeeRSgw4iaZa8v3NVk7",
  "key3": "UJ1cn5ZLdfYHP7ZcVx92WaK1hREagJNQF37dLDwSaoRsKSvH7kf7Mx5aVb3Duu4Xh65U18NT5evrF4H8DjWEMcd",
  "key4": "52rpiUjZGi5o6CxHV3zE5CJfxKdXEV4wP6FRLZYG1Va8ogVMzAV29T3EMBi7xMq9zp2rVRrC75qUxgWhGQLNkZSs",
  "key5": "4Lao3QTbTiLrPKYfKhiuEKKJLCbqU5s3JkQaHbWsiKrkFGUJ8WyqsChCf9DCSRKPiCTrpnHTe94rWfXTsWTs6rFb",
  "key6": "3CZ7jYTHVKwdmEx5o5a4VPZ2JNBTRdFsMHNu4itkCcjtEcHbeHqyuTynEKR3r8f5t3FYHQ3cckLEQC6SkEmu1TBP",
  "key7": "xPToaqvgCU2zLQ39Zm3CAxrJGKrqPWMSWixYje7sWqyjmpJYP7uGR4BG3mEwfoiZHVQRJ76GWY7jb2PQYDidbKH",
  "key8": "2fJxHwGx1EKPfRL4YF6pGtutd2kf7oDdAacAwwR4HSkSEw9uYdF1QxZamPeiMgiiTKdQbP4cu6fY3pKBS3hwWxCH",
  "key9": "3auhKiuWU5AzTnu5DNF3uSWq3bj22eMiS17svoAU2khRPca4VRr4aLHth5MojkLq5uSw5DkabjHcDHkjGVBsmrB3",
  "key10": "38XcFUiKVztaqC1uTsKvCBfNNTVQPfQdALATAXLd44dCCFKByXHtJksVTWuy6mdm1F9ZdxTjLEnyU4drgxoFEikq",
  "key11": "5gPqfX8nxp5Gh1Czs77De8nforNGnGot7pzvatSCJATWsT6oyYUe2tCAvVwVW63yRa4apkTETK8WdSZECysY2m4h",
  "key12": "2a3QJCDm78RwiDo2jtht581FQF358ZJJNiUNthMdMyVs4u1s6nGLeMcuyaytrLAeE9hfezC5iPtgQDdm3VnL9oMg",
  "key13": "4T1VG9mDzZpmb7k2YTmRMJWWA6bHUJSUsNGrrdwNh579Z6p5C3KpVw5NnSPMkG47D5rt6ZUohraGw6ioQMBwHcZy",
  "key14": "4Eecetw3Jpmj5SitXqhbGXuMVNev3fGnEMAP3rcRovmyJgRrJ8iv9681PPqPUZj89qkTuKomGniukcBHaiLuoDS4",
  "key15": "5n63uqbRjr1cBjF9MjLfeSYnqwpZrKLnHyRCFv3DCNTmrVvfXRWPNUht997yjZymnKZAKmByTqdzbzDwjVLUgPEV",
  "key16": "5g2LX3KWU7ePary4ZxzTcuK7BUPqWF6PFLQoKHbksJxLfcCaduofp4zTwuL2efrkkoNTtYom8yHXpWqu5A9FDLvH",
  "key17": "wx95TTYLxBVKEgbDoxmfZeSgrayEafbhnaLDjAsyjhTxtdH3Vj2Mcw8kf51iUue8FJSN7k1JwmL3YhKbz3ECahJ",
  "key18": "2zSNnrt5QEM3Ee7SVAFtTJV1a92LsqtC5oojYG93vP3tr5GpV4gs6oy9T3H2REW4Di7QYTW3XojnfqQR2a8YHLrt",
  "key19": "2kXMHUuwCmc1nVDZMdsmPJYKCmDTKVyiBCtub2B3nwm34LDigbi1HdFsCMWvnkz8fCgphWbtxyg9NLjJtUS7BzjD",
  "key20": "4wyyNcPuUXJANECUeGbiaUJumvxYTED6T5yFcV1yhwWZ6JVzgHCx4Uc39uxoUGzaYmvnuj99YFfX3GbHSsyMB9ak",
  "key21": "3YPuwQb8uENbB1LUWQdmbdAEqHkRPD23cFzgooFzbbsfQ8HLBVMHX4rCCdxMgcVFEjyQqFnpnMzMnKw8QHzYuseU",
  "key22": "5AVfh6K4Peo3F6ZuW7buxCPJQ8ZPSRm5TVDQhbNogCTeFhwaaQhW8h56QFRr4oAq98xq8jiX4HJfQSU2dRUN2voe",
  "key23": "3HX4K3VpkyMVL1t96aVXQsHDajikDjoYnoTS2xhjEQoi1infm77nA7B3myHpU9QSwzU3fZ8mJ7bxRcLTnGZb2aYp",
  "key24": "4qfVg3z5zvePzjH6aBiijNTxXApUNaDXndvbQsQ2HTPjkQq5zeEX95pc9SzSAxUqcVPaagegPtJJf84eVvtAeif2",
  "key25": "2945JiPPdesScEhAkwEXgWHVndYM9PrbyxVrBtCHa3NP4URYLDTyRUzJZ1jHbt3WwzhMJ4y8p8VzM7PnnjQAi5ST",
  "key26": "65sgrzonj8K2TcehACgRUQXoEEUgPBZ7khvuUwRAYwaVR5gPiDWFBL3ZKTzarhyimHtfCasim58nWBARoeKevWRk",
  "key27": "54Q9b9ieCGbGDnozCEFSBLaueP2t3uYUt9fkdREAybTf4E6QdQ9dph11SePgFUU4QQnXuoDhzdD33zdUtBqU85xw",
  "key28": "41cZTPkpfuxjY1TzvhRb9RFXbg5XJfX3ZaCVezTaJTNd9ngQbLEzuVoUj1JmQ1UuW5aU4RjWWTHzcyZvopYxeumr"
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
