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
    "2b93SsEy2cGwGWGup7Goac4qTMfXyPNF3j2TbDWD3n4S5aA4vvdKj1TyLksBGSSupsWHCPnfDEddDWNSCCCAUQ1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCRtTptTFrLgX8zP6LFDzS8X2eWcDMYECQrM6QGndHS8PQeHPHxKGrSqVfZw38tDRYtx1qBjhJe5v4Dhx7M6Sea",
  "key1": "R2tR42Ed9knRBStFExnDudQBiNXvPCW5w8ofWkoYtpdKLP6s9FY6JUw8oEefH3HuqWJqKvJvZdp1eHYofJ6SzYd",
  "key2": "45xkxvW3LsMo2HNNSa5fNoijUpPQ9xb4kZnczTTEF9n92TWKrUyPgCyRjgL6ZxWeFYhFftcg7Nj5AqEVKU1iCyWR",
  "key3": "dcUXjgaCo2K7ZcqWhvsokuyZGz1qhcmzcgfWdm8DE8YuCFqCqMoZ72xYCBriK4h9Z8SRKd8e7C1goFVbus48JBG",
  "key4": "8mAqBcGPuGcQy8ZzkArF2nTUKLtXt2Cy1S2WjeVuEkL4onPZNXRMqgqtjmJSDFrQg7UWRi2tVW7tKSkG7maY6Yh",
  "key5": "mhu1pu4rSn7R3kEukEbskspZMYSWgd3pw6VRwvMUc83qe18yQyvLUeZ7o1DYAeHmXY2E1mm1ufdyET7scy4Da9U",
  "key6": "2JoumL4mW2i3B7TmD49TeeZHoswakwRGhcHkaQ4sUo9Lb6Rb9jmYSbbqYFMrpDuGW673BQs2uCPn23jrmNGorQ64",
  "key7": "3xTY6mqFQiQTN56svpZaatFuYLv8jSRu9Up4TBnoVHq4rJD4aGKGnqapCPA72CagQR1XBJ2VT1HXsihMqWG6uBpM",
  "key8": "2m1hdJX75qgW9fMrUXpm62L7kVM85suiFQziDSkUs66Fv4TW2WFAMMrK8R9aQZcN48JA69T85y6RxVc1M2vD4w3E",
  "key9": "2rXZjGhG9iFeFLfT5x9xBpsKsLurM2qBeYzAmseWin329o8zYFAxM8UTQEPyFxehTGavnUuc8qk7H7t5dumcnbWj",
  "key10": "xdz2qh76gvYKhit8x64wDeLSMzpDfEEJdMHXBW2sEUdQXoGt2x8yQBTfbeuUbL2LjdoGftRuNNvdd9g3wVSQfhD",
  "key11": "3FWKiSvz38iyP6sd8fjXseTDMhh6jpi78WfenodwSXUTrhq9cxkbNcZy5c63vubmpiRv55DRZEutQALGhRmCmknx",
  "key12": "55ngpzcCuZQzfs8HBCQNNjQ7Xbgob8cPe8AL8xvxqUtLLb7yZurcMU7Tu9uysNQukYfCZc4T6NVS5nnLbizpTLy",
  "key13": "3YgEW5dgLLqot5LJKHC4qLcSbicv3mKpFGa2DR21K1nged7HhEfyZzCXyL4Vez7mmxKexN4CKxEUNpuxz6YbK31i",
  "key14": "4tSMx3dTttWZA5Sg5AUMj8Lnfbju5P8JCug2YcSSLtEiuhKhtRLx5HrTPewHccF6h3bB3m4AEjVTQ8zk35gmZbSb",
  "key15": "vmGrQSCuFxD8MEiH6aHCejcdH7y3t9gsshCmoKpYmfGkhuADs78T6GtmXXhKNb4mAG4Je889PoXdTXsTRS8WsN6",
  "key16": "2AEigDATQaZ15vDwDUcb6Bbg2HVvwkDKrtSYwCQTPd9ZowGPXfHuH941XfEKhQTtDHuet4yo8Sm2P9VE7CZ9RQgP",
  "key17": "aaNihodPDpUWQMBCYxQhG9XPagps3Wjh7qzC4BgU9UPBXkMW3WBkVsQQ7zFkBWPgerLdnAW1bDqKQGYqBRiLbYt",
  "key18": "g7rFJGQ6akXtuA1NJQ1czpoy98Ly5sXxNetxvDbkgMtd6DqKZD6CsoSEGtfdXFkMDLEqWdF1a2DXbMGvmVWusBA",
  "key19": "5HB9d5myT1n9BGNwTZ8JYGy2VofdSGDqD3Ev9jyHqQPTchvbSFLqbQxEjFJxeM1bDezbTMjGbCF1kCL9ydsQXPET",
  "key20": "35vVenrvHVDqcN1jLRBpJvTq8L36x4Ngf8kAGZrv7NHX9fdGFPdR9hvduzZ5gTkpEWqdamXnU3bvXFE9SVHMNuV5",
  "key21": "2GcFdUhyDcd3Ad7mWtkg67rNdoMydiJjPibP8uVb93R1Ej3wBtuhwcrAwUPzidH3izs3iXHavhXCKYJCaLRJABBE",
  "key22": "65GLQ6Gpvx7yZ4TZLVmVDZHvowdYWadAsq3RtEXFb6Zds4QBRkqv3EiZXDvEcS5vRws68UjknoMoDio5DKpjeSNN",
  "key23": "3sG4LarADusdasvy24ukWkynVL6W8cz9A7LaTGCWz4FKofPt8j7FBEThdJPdx5cmRAiSVUwuVijazes6MSjQWdiJ",
  "key24": "4xXod6SKsEg3eSH9NhjMyj7PjSXJo64Y86wqsuYwVUusjPZtmtumxsiCj43wJz7iPkUKxYbKQqxAYdNdRMH3KNpb",
  "key25": "2veKXueARUMG8put42cataWckruvZZvL5XAZbEsDTv2euXDexmnShKY32tr3Ukrwy5auzq2oW3be6bxHjkNk2inc",
  "key26": "2g3MWQJ1fCrARXT7ZdSL7BbrxfWJN2yCNqTnQ18i8UxkVzsKseF7ECoQhJhmbUfjzGGtLzvakugJyXoXKzP3DubF",
  "key27": "3fvi6h636noik7bmkTPvVWW8cJBQbkbeqP4csHvqgutQpqwYPTT3dfShbdsVraGFCC7DXTKkPdWqRz8Kr5ZEhZ2H",
  "key28": "5FtGsZuVyJs1zxcwAmNNw2cdEFKbjyyM8tSESoggeE87e9KEY9L1fwquqxo5d4u2XqcLTNTuvYxrvLsMDNBXh737",
  "key29": "3tZ5wrDuF9Jn3vvJenfueXkCd6XcEDFrBFkUoA21PXS3bkRmpmHbmwoWctFmXBdALErn6mtuRW2oeNEtBVV36hf6",
  "key30": "3QXrTU4Pximf3vQyzPPaa6WkLwQsBd4ci6EwzcT5HYcHzjMy3QJ76nDAAtbC49KWyk872MQrZCuw7ntUvpQKPzET",
  "key31": "GcLnnyHVpHEKvERxugJt8UiySpQHVGQAFhe8cPh8EiegtxnJeQEwxrkXP7KemHBkJaHBQBKMEM89xSsqY8hkizo",
  "key32": "2t1ho9owHt9fSJiJxzvSJAxoqRupaXvyCgi612LCjYCNRxqGUGxfKg933MCrcTuYbL4ZWQ2GQFwiTDCFDNgmUKR7"
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
