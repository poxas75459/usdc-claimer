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
    "28RSDhExfVp63i87vjMarLZdfM27c1YjwrR9UEtXnmCLEfq45RXBpiGnxEdKAvRq2cdpFet1EgveqyWudy5GfQSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRjMwtvrUKdxHZWJ6WH6Gx7qrPuPZ5et6R7rmZKAyK2nfKDuzK91QXHenySMzn7pn7C4DYbcx9dhEReCAZaHeVY",
  "key1": "THuQeruFa5jzfE5YFUdCASThdzy6LYxH6p4tbWLemFt1hhnWX7nJi5nEVL67mec25pGqaicZ8KVqRVWtYmGeA1B",
  "key2": "4wvmuoseDdGUwbwrnksUmVbiz3bsLuDRNRdZEpFtbewpshokozuB7JRMkd4XyHF26CMyjS7EtMGSN8K1Y2jC7bYU",
  "key3": "5CgXi4y1m2kwtFWBtA7ymETLns16kpJ12C2QfeLDYWinBZMPcKG5grSjb5K2rQCcFkTkEVLJYG1Zs8mBXyNNjCWH",
  "key4": "kUoFasst6ads9QyJ5gtidwUNaw3kmkuK4kyDW2wAZveCU5RZGYHDGHF6FdzGoLcSHiSX31sxvu3hkm2Mf9r6M7S",
  "key5": "5fSuR8qQuwqkPgq48uDegu44c9tPq5PEPeZcuYyRRsTidFsgohTe8QVBE7u8X46Gqs75emW3J3NvajeV3kmt6u2a",
  "key6": "mkZE1yVB3BNHeqwNPQRTbXWQZzNThsTUmCPgLw75NqqLgXucsrvYy5jbHu1XgFSneos5UCGvJ1aKa1Qruh7X6pz",
  "key7": "4gpFuLXhcchpVerM3k7F1e5mJr5J5G9NNouCK92xRYWgW9YsRvpjRHSBVEQarC187mrabWVzVTE46tZWehgoKKAG",
  "key8": "2N1mMuTAxnK7sR6wTP2RTdT7yMgCEvhRJG5uAF8mzxbZcDpWeqxGyQzBjPBtZnM6Y33cmtjy2RDTzjitioJJXDGm",
  "key9": "392RhzdgHkp2yg37pbXEd713cCvexA2bmRn9XE9ZAuP3JPuh6kee9YwhNnGGXT8woNsecjv7gWixGH66hVfdEXYM",
  "key10": "3py4J5WbshJWkp4j6p2EbvhscUFLAfuVr6uZieDJ5HrtcPCaAhfqVhCrs1MzCXhnW3x2zwYxwtnMdHxerxfpE4aK",
  "key11": "5dwufptaLHnnsfQwsHs6qycWfUyHh9ZnyyfnmrZcUj89c4vVWkfqQJLm4dv7gQkqZhty2Vf1duNjs6GkzasYHDWy",
  "key12": "BYWFmu41WtD46ZtcWgjobvhdSU8c1GpNHV6dEaNLVGNvMBFXWYSPM9y61cpxDiYNopMgd8iZg9bJt83sFK22W5B",
  "key13": "4873v6cGBxaNXmfVdQFVjRpynYuborXNLGR2MJr2Jak4otcQG2fixhThbEZeaiRZh1VEbzLLLu8KEgxiFPRgKPfW",
  "key14": "57hSUjrrPsS4HtStFVFenNsCofH85UGtoz1hwghPMpeKmCyeaQnm7yZPimudgKAwg18PPJnoDFVoi5i8829bRpb4",
  "key15": "3qNGSS5B39ab4YxKej513qe99NWjmnbaWXXwLRmVVVgwiTGLjzv6Y26Dpw6sZtffq7Rn7nNuQ8mV1HiU4DPCMPqc",
  "key16": "2xGjYxJtFGeP6WkoRyZq7xKWYFkda41y7Ek8u5qr7NCMBYsCGSisBF2SgR69o7gBv7gRmcZUZWnRreESKgCnUSsJ",
  "key17": "411tMdRJNX6f2MWjwkmAfJKNeYtyBgUrdxM96PyNuHYZYQBgq1i4TFCD2dyBtC3nE2vcp9DPGXkapKR66PpN9u5i",
  "key18": "2Kg5T3ARPn13R4Gs5aMVkyvLDMM8z2VVi6BGJUp7bhoKnr5hnKTj4b1aWYJLnNRELfcPeFi84F11CSHnzxFUko4U",
  "key19": "2SL53EokGSxTS7XHbnhezR5ZrbuXheWEfyVUkVq9dzfzBEjraJ38SZSNzHVzykYSZHH6xqvFw9rkSWFPZ67Zue9t",
  "key20": "x1di53mxqThiNtfM2WfmkTkFhMrzRN4fCpa5Y2Sfayc8saUGdMDtuj8aU6Qp34G2MPCDDJMbxm51MhqieDuRptE",
  "key21": "DmXZ71sTrLD86JEGYThTDiQ9LcKFPp4rLUjUYrSDNv58ZZrorCDJeXWdU3DAoQLcADKvdsyn23exu7wENPbRZDE",
  "key22": "51mPVeoD4GaGViph592ZktvBECbzyPu8KFTV8uAkLtCdsED7NEDhHYAZuG8cSVZLAM5nuVq8t56rbB1VK2BVYkS",
  "key23": "2LrJP6Vd9ZRfydAkEfe8LKvM5wvsR6rTkuXGnmV6EbeipQVBxoj9paLcZzMCGYg1zkjgjHqimjSA5iqThcqL3YqF",
  "key24": "2Vbmc8HKbA1ZH5ibt9aKUzXZUji7LfFintUsAEqCCQeGoZb8JwcHe6W5mjxDQz2yPSGadEmf3FriMMNCcje4xJ7M",
  "key25": "5aUmhoRppvKnw3YVerFZEhhEYwXGXcueAw5D8BuecnnxAxgereneZpFT2LkiHNUiysT7XsgNJ8MoWo3SupJfLV4m"
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
