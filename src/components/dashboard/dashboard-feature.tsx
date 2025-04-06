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
    "5rQpLyHJu2agvJaTAu1LGyr2xaCkCr7LQB3C4vGRbGz7sTxseCbykLekk9MbtnJDRBUTyaTyYg5oqEpWru4aVBbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14JXcdQ7GrW2ai4kAWafaYYyUDjndYcPTFfs5rE1QZng3ZiYcEZXe3xLpQcRXQkbWxAqRdUNenfZSAvoGEZDGag",
  "key1": "4H7QuUiz6DoRtBjsq7gNExnNpBhEGmuEeeGXKEnxUu9KSrpfnqA7Uv7v4ieS3iaucnXWzqvrYJsdvVsKiwbpBQMT",
  "key2": "56cuT4A8DZRc9s9QNuYVYDN1DeQpZvq4WT1p45EpEkUoiPShZ6tr2hvuKkMnSQPzRUGWfvSm8tUUefa2ktcvzY31",
  "key3": "3pU3CMdyFT2tWHw1tYiChRhywUW1Ko7yEkYbgc46KzC9aV7HDbefue7U3CnqKouPGWBJmJLdFYN4B2bpaUcWLrof",
  "key4": "5fvXtjVfgDVjg4YDbh4hDeNeSUcX9JsqK2csxScnQVpgwwnWQgp1ytnJXeyq9vf4xQnuiEUr7A3d23fAWygDLXtr",
  "key5": "4TMZX8uJJmaahAvvCYM7tc3uZ5ndnTpGVY5o8GeKbHToWR1ETE71Wcw6zHf75Dxf9bmkywra6V2u9GCmrD2Ynk2J",
  "key6": "4xXu2qUHrouJAxVNTVvZ6h4q6Ho2tBNnzqfURMVkiNhzTN9wXTsPwDq5T3SscVQpvrvXna94i81SMB1i8w7jHqgz",
  "key7": "4P6K53v3URKBLx8PtVhx9mxgXHu484jTF72eJem7L3YkMe5xmrqAFDdH6dnbjg2QJSuDiqRd2UkLhjf8dxm3PQFp",
  "key8": "9sAbCNK6QLyWyPMkt9dEdny876eXY1kQuM6t1uyk1MxpFyeaX3ooUZ23QN9q29bWwyXht5H1PHY6zr9ZcfBW8oE",
  "key9": "2Phq6LvTDPNBFRkuUCzQXuHM1mSkjSkxy9ph2sE4CaaHKPTYwj1BRXYuGskbJ8s45BAvk1JKJttseDABwtLCHccx",
  "key10": "3wodE6KT7iP4LC5XrAbjkL2gkVZqY5jR7dM5xsZiM7GsUEaGtyitqFEMfsRYJr9Yeeam1CdigRJCxK8c1HYgEWCT",
  "key11": "eZybK4oqvexjn69HR58rZGitALxafUJ2HU6mb7DEWbtCsgWjYJNv4PzgYCGdjAuFKSaGRFkyVKzhg8qjQatDDxj",
  "key12": "kZZ7ePaGfdT8XMSQJcaYUZTPTieRDBz4G4fkpWScFj1geAndzgUK2bKfkBrAMySBnqFHNDqe94EmqxGLXoYt2D8",
  "key13": "4LTnnqcKGjZwMvPTF62fHaZKcjedvUGygTitKo5MGLb4Au1xWwwFxL49CEvx18JmdKJ1RTKmJNjcj55aooqk77vG",
  "key14": "36PP8cNmumwVnNzD3HY4HsmzJ3oCY3Y5BdNjEjrm4bZ1QFV9Am3DmJ8ZRSmXb8k4Am5X6DguD8HLjPDVA1bvtnN7",
  "key15": "5RbmHzUCv3Fp3JyHBXgTxZnvy411HqsMHr1qSeKcXdrdrfcanPhJpeXrQTMyvRcZ72nmjGPJdsJj8hzLChgFig8e",
  "key16": "FKfyugjT1dUMnttg7m7y1SXvmmNeT3odSzUJKzDLt3zpqiV4cJypxrQ3xXLbCFXDcpUYTk5v7GKns6fW5isbCXq",
  "key17": "2Sdau6FFRXDqfM9phv9ghUyUHHVLu21hmYiveMz2TUAdRLWWiTc6yhae2oD1BQ8bSTFwcpgPyGwEgNQ7gAkYC4e1",
  "key18": "3gTvtE1tYjUhiVEzxJEfpzz9HWzUPdCTpeK3Jx6aoBeN7gSJbfpEhwiyAznY8CjLK4kEYiM99kd4yuJsw6WnsbuU",
  "key19": "3siD54nuZf28QWV8eAjebmZz6vpJCDzsCyzitCYPHBUtVeTUM7A5oxVCJ1q8B6JzjQVFN94sUiFayebhXcZLAiYb",
  "key20": "5AgLuCSNEz4sfARRBig7Nkkw39sZRh5EQ7pz2oyKdenN8BHuzYvLMaB7Hf4ddEFxtb5qV1r6EFmWehGrCypfGsXi",
  "key21": "F4oz8yScTLYHo4cdfHWzmqsFWKh6wBDXRtRg8TvTF7hj8TQFmMEiUeP3y2UoaQuZqpgdhqQh7YCzxTmwC5GVx1X",
  "key22": "4HCWMY7msEkAv7izHZE3A3E253FiWvdJm1qmrizZsmDq6Dop9scv61VxPbJ5Y3v5hmKnpytsSZ72Bz6M7EWgJeqH",
  "key23": "35LyfTXcGxddoBvo62Z5kPrPmofabBWj7WZqQRo4WJExWm9is6WvADAuDLWBXggFpzqzXotAZgegNkDRXqWkqVYQ",
  "key24": "3ruXtcngBaJjWmV8hcZ2RSFSm54NXbBCAKkTLkNRGVQtuZr8Kxzd6KT4T5s96UYaJRXF7TjxT8gjC5TFsHzvreuj",
  "key25": "3eeQLdts2P6JFP8PgqSJJvcaiJvzWnzbjus65LEMNrZrGfemMMssoA6e7Sr9A84avF3vQK98KjPd38dDDuHNgFPe",
  "key26": "4BECbndnJ81fpNrbpAB5ptFgFfqcPV37462pYuucUNFE5WKKiMDsG9PdwPEYjgDbkypNBaUtSbsxYmUk35PPzXVC",
  "key27": "5FTtggAU13fagn3YMjhW1thckRxSHKnVAP2LBPjfWRZxJJa3zTiYZXoovdHkXajXfXfGUXbs7m7bGvfSoh3atxMQ",
  "key28": "3veY7RAQE5pyBsUYoPBydbdgaYREZNu5Vv89ykBQHpohsbyTsQQHBccCbCAkLZCuyt7A1CC3wN3JMzmFx4c4HJaE",
  "key29": "5c8fhwah3M8Yv3qXLPukaHyLFrqVS9EvThnbv53YPEywBJnYyQ2dJfbKNvePVpABXLaABcvFyqc8N4iGJsaz88uy",
  "key30": "5Ef3HDzqwqwL4YR9N6DUcgADH3dgG2jCMztxz2NQuLh5JW9mDgWk1LBayt8QowximUwvAdrXma6Wf9tQD4W5Xp1Z",
  "key31": "5R2CBMHEsDQMc4Rbt6epoAerqHF5ZBAh61Ndx8XtfsGBQNMqmSHhDxNLj2uvYrPhVnqF2qqPMPZmfwA2mk2DCahv",
  "key32": "3hKjtqBsiGxAyWi8V1EgcPGXipfb2e2RrKzSmgRCEXyHhBM2hmwFBg5uKifWF7CzQhLR9XF3v7PhfV1yRhoQZeko",
  "key33": "3xgcx3mgyvSa7CXPFueWe7qtSTfCuMoNK2gTN342pJn1Qh87qcGKnLqcRPuzxwACoAKL7W7XmP2tySj22ebCEbuU",
  "key34": "2z4u8wsmwYvqX7DTZhvxV1gK1gqjpFotEi6DfwGyMwigjTryhXu7sNcxF81Gt7ynkq8ByCUCjF95PxKmCNgDyns5",
  "key35": "5LSgggoRHJ2wptYSXcWLmwsjR8bjswWLzr8UHnGBm9nKpNJMmERuo1HGbYfVCZU5hbcqSAWAsGeCqksAMTW3op5M",
  "key36": "3nshHvhzhLdeQxHTkHeihgCb3fVBV8H7jDXfJXV3rMJSSRvc36Zos53Hjdb1ZZYMQ2cthzHkVRkBCxGwaQhdjYXT",
  "key37": "2ycdzAD7Ba63e63Mjg7v1n1BXcsdMc2Pi2zQeMCyEqmF6mb5ZHdV4xJsD36KbNhsPShdXbz1QjR2Gq5Y4DkjMdfy",
  "key38": "WWRFnDaa4fiF9dSAawDnKE9FEZnYn1Ma4RBmEe3YCdQ4htURGoC7aeThWZH6ynXnHtE5R81zMfk5Pmd8D2a2pK9",
  "key39": "HJvmrh3dsYhTCFSnWEJDK2eh8HrgjJCRUUVZw8or5aBSUDh5aooRtWUR2n3xGjokoY3a6rTcczrND5e9z7cgG8B",
  "key40": "V1AFakMm12w6n5yGpdfBrbZcifqzVvpHWNKGuNrUhUPSqziTxZHd8Gpcy8vH1CJx2nykbP5JreqzzGyjApemgvv",
  "key41": "4PUWChSvPoMPDKgs588CSt6JwT5f4bfMM51CNdAUBgNxocVkBdpEMwWfDrVmA7nsZJztq26873YuxhF9c5tpB7yM",
  "key42": "5CZ5RVTi8uKWVLPvPMg5cSbPkwnKq5b1pPgi8o5jrKLCpzzTUX5hWpnsDVmD3DgfYFtznTsByCK7K8fabyeFeAA8",
  "key43": "3jJpLHwJaoyymqea1QFswdE3xPQrhctZsYqVw97HZEvnhMCPUvX8QD9YFK9mS3F8ExNotcSUPsTERv6nhNs18jsc",
  "key44": "uQDX9FeUCPVoq76S7kzh9bNcGVip5xJ2WoDw3psQk7DRJuopLSUAsoNK8NrxfocnMLSPqfGDzHmz63KbMwsjExV",
  "key45": "4B7Ayv7tYq5DKNXETxmRYWHXMREcPMSagXm7eGhEknKcD6UpGwXUd9bBrCABR1gR5P4gchBNJ29TYXVBSQhnEMR1"
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
