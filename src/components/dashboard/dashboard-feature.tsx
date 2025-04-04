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
    "392oJvJbww598XJXPLmFWaUj5NvMh2hdXk8Tda9RYE88VLGXuRGDU4xzU72apJn16hDLsAugaec9FZhFVJQNxKis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUZhdgJWPGYr4NTpW95iYzNNTF97seB2ct3JnMkTAjrwrz9tzmcZ65EfqL8Q5QtEkMqJnvyrYEoJ9EtnDiaTxQp",
  "key1": "2DW2kkCMRXDeB9izjkqJtFTbHT3pNDeC9JWBcrHvs3dU3psZJeJDPcjZFUd3GZmfjMpDpGw8hG5YzNP6huV5VCGy",
  "key2": "3bdyksw9m7JwUKmib6bvYdE9PQRMWsjZyZkh36QY81m1x77X3DKVVuVpqAz92chuLTggmLQEnFddpjWTbVLtSpqC",
  "key3": "29vPNXFkwSnbjajCP7zFqH7kfMNnaC7kvzaQphbB3ifGB69WAa9T286WN2pASAsHdfkURspsHAzUttowW5stvsAy",
  "key4": "dYdDPNomFnCUuHvR6BAgdRFrGB3PJHu3qh5aENXCKQftNhunqpLbvXxLawHHiKZ1TyXHrWhYAaXCAYyLyiNuSck",
  "key5": "4nx3xgo2bi22NTNnhX9em2ohZFj21kfHsTQFCcREaZxQox5Sozn9c962CshEWprmcggXXUenPu1dNeCuZAxdakXP",
  "key6": "2gZfzgLu8N3CMeGK4RrLTPzpw3uywx6Sq4adJtHz7LJpMU1v15jSYwniAEitBY48e4u1jJs2XCTCZheyj9WTBUP1",
  "key7": "5ihxyb2LLJJmguio6zGXLtc5YpfSm3VKwpq1kZ7RMNwHk22erysvLhnWvToVzNjQ5SqDheramjAFkASSP3nmsJQo",
  "key8": "fPQL4U1aFcUobzwDfiyh2cmEDfhNo92u5aVdFz4DWYfFg2Vvnrn6AyRe4PcMCDGYBqWpnETnac6MuUqH2GcyH4Z",
  "key9": "3fibfYBuP4jhC9rSCuc1LkaaD8afEqBQRELW37hwBiyjaTYAyVPafWYpvsZfubB1Y58vbXnVyBvJydZBsJVTLYM9",
  "key10": "3Z3CCwMwKLZ798bSkpHVtngbV84ghh8y9VbiDJ2QDB6onyg1D6nLNeparBpnr6gEGMygFrvHHzVk7mBYUhU2brS",
  "key11": "T82SfFC22p2U3XEiD9hzVkEy48J5Tka8kY929Uyg3gGiREzPsoJEopNDgcjVjXq8DozyktGup8Ao6g2wVkbVJE4",
  "key12": "ZccR94EvyaGge4h7uRcs266ine6QwicqzvVMsX7kjYiqgoY3sm6vj68gFEgW3wpKot3YXVgjvm76uhQWebbyUty",
  "key13": "TLoAo2c3ny9uMJ14Dswa1PuapveTkjmTdeXVLVueQ5AcdfEEwUrguximqmj6wqzYxuGooZQDB1tQSugsFYt4ppw",
  "key14": "31ZAr7SB6cdAjv41G46uS9wKdHQyLLFzGZmcTAEqMaskuxv9i5zDpBJMsVvtFvQU292aQZCXd1i4R5HyjQuGRCB",
  "key15": "4HXqDGbJ3oVbLHw6USEft68fuj7ZpG41NhmUvEVVwpNrRkwQanVb9w1SugHBLaUfpNiXwvw4pysutCP6T6j6s5Lm",
  "key16": "39WURarMkHBbsGyRSnTwBpvW4cNZ8GgX4YFoByq9xii7GnUfTuFFQ22V7UEse7pNuLxNG2DixrdntAW7A55hGPoF",
  "key17": "5hr7cnHzozPHzW4dQW7xZA8ddGg5pM1ZLXZfZ9PXcfTsRXFfJjgnMuWC8iSuTK4waVMFQDEUnyPY69s1YACvsQa2",
  "key18": "66xtn47LK5s6Kj4gTSMibC1Xx2HDdVayCSuDiQyQt3Hb3fHov4C2GfraeKP2LdqVKPZdQYY28V1yjyXWKpZfxwsu",
  "key19": "5F6KgH8SCQxqD3gTCpVrVi6PCHtFsb9goh3vwLEv3cbdmAotX3SV2NzkeNKAMZmejRxY6jiAwZ13A2pRee7MFcXJ",
  "key20": "62jgCdi4TLqCRYWv1xmxETdU2XPaB3tSBPyNUTZD8aUt7UHdNKK6Zv1P2aLi5cx79fSqdoyNpeGB2JQ2WR2HaaxS",
  "key21": "2vvznALswFa7FgW6toi9dcDkhf8tArE3Ts7BKJMx6rDi9Ak2mw52JjGuQKPr8VVwSh3girnC9sWqqMdeoycP5jjg",
  "key22": "4ZrUPJmK48Vnvg4Auzi7Fax5ssrJdCpU6j3ox7Ujfeetj5xgVFNo5qfdF2y5pRGHtrWkH2A9nbsGocxtT3sLumbo",
  "key23": "38nyef7sSR5ZJAc2gF34c4zXtJPvRekmD5V6XrGNNKXsGVrZzVe3V3yrLpbNdxpw6bnmyhp2MSJSD3FG3RcA4PzN",
  "key24": "YfPPNLhSQRwSsvRWxDgatAAtfbhRmtBTGDBkywJM32pgr9VdyAsB8Qo2aGCi4H1sgfjnERtZ4yRhrzdZLkgizhe"
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
