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
    "2UAbKx1yHZLK5XfzwRZV5M9EDZfy8Ak2uJAmJ8D3mEzq2iWkYkdnKPx7RAchAn8NWACpFCHuTxEooVWqsWLzCFMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pCxbkWfBzLDLZ5nPmmnwZamFBCj3DJzmjuNGEFiMLPTaF9osx5rcXmNTfsWZjiYrGKhfkdZwWw97MKgGkHnMbSc",
  "key1": "5WFqwwyLnBfWfpaJBP5jvdsDMR6AhhSKJJCpJaafh9hy9zzZBkN7irXLyYut1xdH7TybJCfNBM3qmDrRGDprXS2A",
  "key2": "2VV436vWPN9SDSzKf8USkj8fjcr1NwXk9hzXHdconbGRPG2uaUiN9TLPu6dWRuFqK19pdeDccLXtdfqodwQCQaMb",
  "key3": "4B1rD2H9M9Uu5eFJGYx6TmAHhmCwHMTQp9cscqzwTnG775pmf4HKUHqZLjH6br6gkGqMWGHsN7TAW7En31DkTpeQ",
  "key4": "YYYxHeeWdzGqQqbHkLS1sHbhyYj417CAaeUQf95zAXTnc5JT8dcTYrSG4HjoYPmYsWeSbLJBH5g5fFhV7NEojBs",
  "key5": "2Mh7wvWpyyEC5TpRuoC5esS8N91AkYk8czgGS6kYZVLxUPoBvGs1T6UrBnoYHgS2W7HwpJ3A1qXgM9xsC72vAKHF",
  "key6": "3vk6vsS4c88ddTDNJvB6t8hJa3apuqH4vS2L3YQexZQaw6oY56JgoB3DyvhPyxMJGAorCQMGnJSvyYdbr9LP7RxK",
  "key7": "cgZzZRA5tBsyUwfQdiFwm8w44W7FfGfNdocRCFyMf2jEYqh77EyLtxMSjYAYS8d5a2B8SKxkBYmRoJy4XRrm3qU",
  "key8": "3EtTbeVBJvwMAvoAsRMuTr2q4gA4Hi38KPgwYMnf1YRYUvXqqsi4Rx9eVzFTQ753w8KMuTJhbHuHUwdSv1fw1Rui",
  "key9": "2VD5DRdrVPnxtc7Ui9rbtgz3XqzrSvfbXRL1MZcNFuYigREWPNMQnDjaFQhrR3i3h5GmfhbcVeZTQrQB4cQkzEkf",
  "key10": "qNCKeUY2DuLe8piRStbdv1MahAU658RStAS6tpEopX3wPnHCxjjHrpXbZX9YDcV89iXkMiXiJPYjWXLy4JSWSgd",
  "key11": "2cWKABcvRkxWnck1MfuohjAikH7s7VDwKzro3Q8fKJHQvNswgDFhCGpHvXRwRG5xZhyEJWGHEPLPB5Ynps2Pk8oT",
  "key12": "Ljy7JHd2BwpcUdkUX34px6J1fKfvhvU4U8ZgsqcxXSCviFJGzDiNotE7nEB4z792n8EUjiwosT5Z2VzViMtN1FW",
  "key13": "3ofSjAJiuuwFa9MHBuLARceRsf3Ebic8BWj35wzvZ7fmMkaZ3Hk44Sv3zh9WeZ7AhcH7PRKxhvSNamkRCYwoCzJi",
  "key14": "5Jq6gxzuBM425JWDUBKFoGTuc1Dgw1DvvKphm1421yeVDwC6ZTnzAvyFobGTH76J3rToT6oFgLqpt9TkEUMkNfzT",
  "key15": "3geJWX68Q5zYvKT8BFuw9UaoLYrdJ1La1D71fG7PEgKfDkZjyziVf37dWdeEyZAZ3VrUiLtfThQJeF1QWJpVKAWD",
  "key16": "3cCxUpWKonhE2vDjpaDBY6i8GntoXQEerbp69XBvbRrVPMf3QgFx2HXHcSYTXFGkUL2eadXxRucFV3d4vq4LJJxP",
  "key17": "3JKtPznQorkNnLkEf1UP5x23Tpm5CrGzzWAd8v9jaPj47kfbyDw3HwUtJvpsdgWAGmBTCXV9b3gJmRJrCZgXq343",
  "key18": "UsxRFezTmi1CFLTQMdVV5pc8K55eJyXBaj6yoHixLo5BzkyBfppishgmH1f1ZCuVhZTfCPBbTtVeF1dA8LjEcnx",
  "key19": "5ix1AMbiiBzHAhf6TPK74RSBHay4B3rBfhTfmddyxAJCsC56S4eERcCX66u6qTM5WVWTuw2ujSiVb2wNvtNLhWLM",
  "key20": "8b5CnMWxhkWrWjveud1nJy8Gz1dXobfhSmiHTvp7H8Bn3qMutmm4tbPVLfcARtxyKAipnfJNEGZ36A9RyaCJJhs",
  "key21": "j9knFNCBBVGszqB57sRKQnAQDncjLiSTu48dyPKxHCFC2YT3Za6vzRUx6eQau1AEqJrg95Zk8gbaSD1KH4rNwgb",
  "key22": "4BV2s343yGENkyyC1AngSyaV1u9Ncu7y7vErLVYtUkZzN2NHmBhD9dyZTh7THEb3P7YGQ8s5q5xbGEUCbz6XCwv8",
  "key23": "5m5faoGim5YwESeBwNfUiVbZsCpM5dgsaAgfFeqwqJFhwXQkWDiZQnuK91apWUY721DdDdzmHv5h2kYcBrHYNVi2",
  "key24": "4GSroF9qmrMD4rvdU1yZUvt8nAvByWBbzep3cvsqfteMeZdhtSFyDq18Bcvqpr1PCgbeu6kKzok1vixdwD1Qd1ZW",
  "key25": "3gjGZGpKMsiss5zujSzRpXsU214Wr3meaTT9oConhGWuazfanazYTXnZ9CZqZ8c1FZZqQXmbvWPXhcDBGFyPKCp8",
  "key26": "CcPrDKuw9WVf64mq86fjH6Z34ASdYQFtwaMw169Zja4rXscLhxcgXnnsa8cNL2nU9SaRmjpzLa8oK8aGuZM7VuU",
  "key27": "2sUpRy7CcQot4NXn8uG3F2xBdujLxCNmN5aZTrRfS4AvjEwVfwWyJ713r4rkNQoKEYc37Ym5B26PpsA7RucnmjLf",
  "key28": "wyWqubcektvdonu3NYWDR3Lwri8gGyfNSdCHWzH2d7rYrmpiCTnJdLrgwK5h2deP75yweAAhKBErEw85uU5Fg8z",
  "key29": "4zQJf7qUCrHhzzLFEKsjn5AV2tFybbCWUeRDGSckVK1qZHJBuQxGAzfxrNxjqE7zeETKvDgDTD6As5nUgUV6Wpva",
  "key30": "39rBGUMjw81qGunegSs4uHtWHAFqk3z9bCEejEQjQppPMW775b7j5MjrPV3Cr22mH34KZa2BhzwXymuLPkuQtaMg",
  "key31": "4P7JzGsDNXDsvmFQsgDuQGk2iaVfAxxMbt2CKup7G6xG9zCJhSLkBmy51JjU5WposzuiWjM8NH69dYJtxSUjxgTg",
  "key32": "4tdukSFg2SVxtFEEwUkQ9M7TwrNkMiDH2E7BPtDPAtb3EnGdP4xayptkBCioC33SBYkThYkfxyzFv663cKspMjhy",
  "key33": "k2yQqovBS3KoRXSE5cUmimBRXuAroTYPpXxSfjvnNeT5gahEke6r2GEhShbANbDumkJhzDP3igvZkHJHrmbH6Rg",
  "key34": "3kQ3R5SM7kFyoWyaawdNUMFvQTZyF6TivwbezbYug3anMNu8MiLhf5AELFqdN6m4qt43w3d2GARxhYFC59V93rWp"
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
