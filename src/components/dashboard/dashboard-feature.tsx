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
    "3kWyG4kpmVxhnogHCbejFZKoweaCM5WNtdvemMNKoo7c4sEYGVVZMF1iXYBJCeeLvDbXJxe8TGihmBZNDJrqnHNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xPecdiKPuDaaAUV73tUur8XY1cax55c76Z7Na478CA9PTVUurFzNJD9yhTaqJ2JGk11J67YkJJerJ8j18QG5KFQ",
  "key1": "3fx9WqXNGeENf58rADCsneDL6LasWMs17GMP6vujmCjLPcR2VTCADp69KTN6eiRA3YRagAUgApkBu5nQAFr9gCiT",
  "key2": "5Eqc7MYFvNTovHi3D3RG1kpBhiEy5MchSVkuUqtfpnwnf1vsgHhHZxMGDKevVqaCkmNEnaDN7sXUiUHgxpjFXXkz",
  "key3": "sYMyvmEktLuTUX5SMvJbs94YLuDLST3PGj3pHVcRWXPRaZGaELQhmjiTNHHHKDLY1UPYCjASCoxRRuugGRpPfgC",
  "key4": "7urycZ7m39ehBB9RtJ993QDByCNPa5yod7bMrAMiyzNQ8ojR2kqYhpnjUpYr2J1Z9puG8ZiePno29Xges6EZwk1",
  "key5": "5RjsjTJ3QZ8tCdsHA76J686SgqxDnP4qu6w2cHprfaQosBpbis93NzSZj3yBtG9KR4bE7Ds1fFCXMK6XL8zejatF",
  "key6": "2vCkWTVtk31bZyPAVQ15ca4rhiC7fwRDSckqEFJUzqTzyvvD8UyymFnmCzUc3ZKm2wbmmxZmPof2DbR3bSmAZf7H",
  "key7": "479S1SsoRpjZPGq4DMUfRBV9NH9RyypQ7Toz4biS1amTWWNMvYEFHiNpy2BXkEEWmqmMuzQHMZQ8Tcs54pKo5KNK",
  "key8": "4R7tQEPmbUELYzJdHi2Jw8WYU9Gsu4iYoBCKGq3qcSKGsMvAGq16Jn9KdDWLPbjC9pzU5zms7pL2s7M6NyWZwaUe",
  "key9": "4JsRhTu8P3wLDe2khTwyrR7xybV8QRDRy4FZmun2LLNUUuDRz5w9V4yKptwfUHK1QukeXpZbw96q16uLZa7ifAsZ",
  "key10": "3yr3JAei7bHQ5hbW5McrauWRf6g5dxKZ5CzoSs9igf2nDgYJGq9gVCkouPnVf7Zw6mVGhxaJ3x7cMvigscW2Gt69",
  "key11": "3Si5sy6cfsvuCqH32Gxq7otuvFGAhLFo6iGx1wCEZo8xFZvfN3AArzPxSBwPdpthUDZWYuA2tbiZR62aakBfZN4y",
  "key12": "RwqoyABDRYRzwSX4JmPq9nBkHZrun82xax9ausA3fHgc33YzRvv3JaiD3QeyhYdESPYa5hTohsiSZNfFZ9LYYXw",
  "key13": "3NV47YkpgFuKJYJGhRZ9ZEkZTFVvN5WmEMv76BDktbYwUmRkXK1S4gzQwcuyfBb8qHicCx4a7Ceva3wDkZ3cKe5B",
  "key14": "53ucZ1qSgoHGdU3fYq2u4xCx4z9BDT49AEwDJPexZML8AJRAtn7it7pZ2XpmxqXx44xtFtL2tDpo7LXe6NigzPhR",
  "key15": "2gikKAVaJqo6Px9YvSSkHtJAokqBgULWrAWArGbMeRMg328mzGSogKSER4E8zsxN9quu5Pm9Laofwy785WCaMtTy",
  "key16": "3qtoQP5JmEKXVGZGBmzaGWo4eTmtK33ej58RphPZuTQZanNZ1BBrzbaVwyCQzDQQXURnQSNvFcxvUz78cUWJggux",
  "key17": "39fqkypn7mumupdo1DzK41HALvDWfk5j1HoRvdfeAgoYVqiyoBvn2sULDTrN3ncKNeWPStr6KJJ8zvtvhXtnRFGH",
  "key18": "4pQGVcdDLU4CRuF6S1SBdAtrHs5ar9BiSkEjusnU5pSHnwNwuMoFGPjygUyaAx19Mkcdb142yGbFmJxzzLNmPHbs",
  "key19": "5Xki25U7zTTtw7E4YsbJBPYX5bhHnWJvGWN1GghWrrWX5UYQ2SCmkcQZge8tJKsLqFpu2G4S338unnoMJSkXKRjH",
  "key20": "3zJGCmyJhUZuqEzfyFy6jG6vNDt57vAVuhd8bQZJ38ckqPd1VqGFV6Y1SykouRHcZLPC76QeeQjNqsPa4nZ1uuUR",
  "key21": "n5JYbxAZcErmBofvB6NNzdorTEwgGapbGvSX9EP9GskXRs6LmRJRGHhNgkYBksPNyTvdwdfbg7QAZQigDoPVqWy",
  "key22": "4PEdPU2BGMLeCcYiPvnpM3Za69xiJn2qgpPh61T5SBqG4Wq2Gy1dqVwK5t2nJztpZcyzQoE4wkMkhQwAGWFgSDbL",
  "key23": "5fjkQfkQAQ4rci5bypkPyBJgmPBNRDocnHrrEpmSxtL886zFqTizj4ybggUKsANauPE5eGQAyQUAmNMR56F9wmL6",
  "key24": "4zdBQYs5MYvLw5nLpDWk5DavoijDhPtH1KJoa1yBTPaRAvBJrjeDQATGAysVwLaMLmubSD4KPdGmxLYcNoFGhSHL",
  "key25": "b4t8KTRKsRuK1Rtqt7EnzUx5iEYrf2ZRP4NoAXCf3vfuXnxM1tjJz9hz3oWcmyosge9u8Cz3tsSVSt8JWyUm76A"
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
