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
    "4Zh66nnxyTt27o9CK2WqZEnW524gjY7Mvdedgccnjwft9S5Hvmk9aCcz6YktRgSRQKhHxBxhF4zwLnenU1ScHgGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29cLX6PhFtG8HJrGnxX6MPSzksowQBWPMZGjkHRtnSWne8RV6eJXsTD93EwHnVFZGSzXmqwryWuA8cJzZfdKfagg",
  "key1": "4kMKMPowZGoqGw7XbcSRNvt2K7kwfjTqX69X9BQbUasCaBDDEPzsBQ5wzsvKBDntqHWqg8XupvCCH6ZKWQfpXwvR",
  "key2": "5BdrrLZvf34XUc5LBZT5xKDmfu6FUVQqFdmfvsQDpkt4QJzsfiW846h6XZjB8b4PrFDcCzJenL7USTHNWH8nkWZt",
  "key3": "2cKjcXsiBerQqJVnrLRNKZn6rbkXddMDf8BqtH7ZEMr4yYbdMtaeEJQnyrMZYw3q8yW2N7FCZGoN66CSadr9VEAv",
  "key4": "zmJgyBLDBPNebDFE9yDLXmskrMDxjVFz6EMPH5kMhNWf7vfDZD8A6gJ67W5ByDqiZjQNhPFPWWXsp9P9FnXEQ3n",
  "key5": "38jh6nHckrwadz66j2yZua7bBPbPr7EESEnFbkk37MiCfspziN6cQiJzmETD8KoEAMzBP4ch5gwyk3XucxeNvrD5",
  "key6": "51NAfLXzQYF7gVeB1WeknZ855cLQQRwXrD9vJ8J8Bk3Ejuk922fxNZ6YNBriP73S5VBeKEFYtdbPpDHds2myTcgd",
  "key7": "5pkCXJiuTWRapVxgjF2e4Jx4YRw4MwbsYf8AjE5DCH2jW8gBna1aEkqhJe3fAKQyEekLGAEV4UeGYcCD3MFLvt71",
  "key8": "4fo26pEfvatgvSfKzGSGatTw4Aqrohx4Z7o3NMraobhR337JgCYxU7GhZa8sbMcw48SH4tBn9qQFhjshTVML8cLh",
  "key9": "64eNCG4ahwT67NbWQiWNv18mnrvav2pDxurYoQmV7xdTj9L7mKQoBNxrr1BW59snh3e1NJQkK4r7z7yCegWuzssa",
  "key10": "4kQ9REcF1Sey2g5T52K5NNd5He5z5VCkffKoxRczhA9E3q3aHF1qTPpj1Y34NvtBUHG4ghF5kzWdYd5Jd94pyFRQ",
  "key11": "3j4jDqdBTnfJoJuwhb2RMHdsq7Mh4cPoQQyGdPp1gbyTfibsHgHtS5BJiYbi3pgKU9sQjBk8rykZY9k6PZs6NmMo",
  "key12": "2pUzDyhoCRDHcyCbhh8KaeijsEF6bdDQ965ykWNyfUwJX7cFHCoWLiodKgeGzbypSsqKByJLZ1AK5ELsSSuNFjjj",
  "key13": "5JsGUm4fzcyUrSFjPWgnXDRBNAwKW5TPpgMAYn5E29cbWVZgMm3iqgc9qJ9uoCDz6NuBWcoxgAETxxBUMsva6JKN",
  "key14": "3vMUkpNNhDggmpm8nX5eFmfBbPjst4B8TpzjT3ArSX9KLJ9vYJsGkMRXkr6L2Ko26qTVHCishdUqDDUJPNfqNKj2",
  "key15": "2H92ykbhfH2mAG7P9VFqgGMfCe6zsqRr6HRubjNtXBGmj1wdA1bmijXDe2uwKH2RNnFG1ZvheXHCAxfiS71GmwkD",
  "key16": "4XrkMATRAvyDVANyL6pfpTrBPt9HqdRxjhS6gBraU5QhktWQzjVrjGT5WecMxiVdXEu5gpJuTPRBbTua7shCzuNw",
  "key17": "4w9xKqBwHpjdWWVH8T6sizygZ11pJurc8hUCXHE35xAjbP9uHHCvfjQPig14WGJQXfxzyQUuErFt2fs3798ScegX",
  "key18": "4RHME3sdvZkoEAxHT6K3EotY2kF5ex3AoJXAEYiHi8s5qTY9p4pVEen51rR4Ty8JbT5y77ZkgGc4r6n2QTSmh3nx",
  "key19": "5f7rrtJAnH16TqGu1EEBnc9WTY2QCgbYvSF29qbnoVPgTuoSfGp3jSgymfetjSuewSoV3GHpkWruGmgny23NsvTr",
  "key20": "4zXXNTgUNVABNjUfQhUmVdP9DTwxhLKYoCzQmk98aW34q6FmoFwC5n8i8FF6FZ7ApntcFm8aPYATuUWumv1zcd7K",
  "key21": "c9GSQfbHDgGWRH2ckPDzdTLyDgrsyt8ZT3uNrN97ooiijAEPG5JKSyXpFUrQqCn82XrRhkMsvzirWpNUyZsFgQE",
  "key22": "5XaGXK4QzVeyemjnqmnxZ1mfkvpzhBb7FYXbGdwHAYA53isimJ6J2NyE6ZtENsxE4op7Wr8PWWWDx5JXBBbV8DiH",
  "key23": "37vfczrPZarx1CejfHbaDwyU7iveztnF8cci8S1iBR7iyA8rYM6zP9j8SNb5FDsQsAQbe3g6UcXjdfxtWVJHyKPa",
  "key24": "TvqrHe2oVexHQcVg2JxdU9Yc7x4kgPdBDTSyZ3Qym3rqiSD53dCRLmd57pJDUPZxV7vN5m4f1HtBkrpnxHxGc8n",
  "key25": "2Lczq62uyaZ5vX5SVRMUjdhinWrL3S3b1U8fXeUus1ogb4zJ3AfbeLE9RgpPwTA6D6Ry93xtuVkgQwEKW1wcAmTx",
  "key26": "2Tz4U6RWUPjJiEGw6AVYR6eUBLQQpRiA3Ty5ijbQwaM8ufRtA6UU3GCV6XT9eFU5qdnam5wcYnkcWmxResUDB242",
  "key27": "4tPyyiiD6v6dAgj9qSVfH6kq1XbixJypYFoSGb12baRDuWyt2N6Cknprw4ovF6Dy9VUcnJ8nfXtQeLJfJXurK3cU",
  "key28": "mVpbfpcnjvQgm11AQED4dQLtxYA5dt6iW4hpWArHzDBNT3aahF8tdE4iD7yiQsFAnTACFi5zr4HqRdTUF6jnDwR",
  "key29": "4etUiM5vX5bwmygwYowQoubhdEt9pcEN8JCELKVEJwFHfxh4RNTTPxis2FpkSZbHR3L2JEqTUv2eHTKgmmsVXMZ9",
  "key30": "3gpo9iUUwu6zucwngBpu9iLcnVYHfDmKqst44JpGjNrwef4Js9k9quQrev5ACdFrva5rEVRjgNqxAKDnQYp1HYUb",
  "key31": "47EtEaVk4D7nr2zovUNHkBmZnCE6gqLxDPetRSxr74m3Wue9nTSqk6TbRBaqXZfjFcyMkKk8j1NixqQv3eKCrBCS",
  "key32": "Lb6QSNpxWA7CVLpv271q5Ci872sJVi3mu3SLX42t7L8uisfS1HiPiCWjmtosRxLZdBSZ8pNNM2nfSHFc1JyBuwK"
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
