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
    "2Mct8Hb6akx95DsQGeSNNnmimqRvgxgEQUhXeSqKh7tuxQGMkENkEPqKuzdVjpWtzaH7rnEFb3RvH3n62mjoZkW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWUqW8C8XfdfNH124LGugU2MXHRi3hvBf6vJT4ntTa7EvrKtDEF6vpT1xNPYw85QJeg3xu1td6ptyMbAQL2sksC",
  "key1": "3EFaE3DJsKZcfcFmCSUP7AvRMrVha1VBg9SfBnD6mEGivtvvkEMNHzPgK2fd3x34RhudjhJNiAEXpbUsptLhMAkk",
  "key2": "615ZZ9BtBiFmDrX221xvn6hhykJhxefG3xfGwNrx9DksGDCrvyobNNNFwATaYdZVyEeppdYkcKDVgLYfeW65Np4z",
  "key3": "3sNkoigVTDPzjt49fUZjydxhLFGQmy114WV17RaEKx9makJzw1QJmYWgfS3UDVep3SujTFm8HAY3pQiFEJTNShUe",
  "key4": "65DeDTZ9yFRm4PdSLv358KmSBTvjmi2kQmGxWEgLhhJqpAyCF9i4jzp7LFZ5FahNZAcNrMv1cwGaBaj7EarHcvG9",
  "key5": "w3C98H4iEDwUmYGoPHDSXqahq2B4VURSz9GzAqiudKmvcdgGtEV58PCKCAQrZ65wtQcFLmf9EGJpcok6KJEcvVM",
  "key6": "4bvX1oLcYNqwWLcKjFx5kbaezfzunTg6hukaZk7Lh1jx8dWiUQ2HNdN2EUSERKu8rCqkBTHDmftrZgyQW5w45b1c",
  "key7": "5LAM5D7Vbon7uFCgAMA79nFPH88v3hsRCchCJAkWFYJ6crZ5D6dkMWE2UAzRBbJpuT6mxPHaSwVcnX6zBDxrNjh6",
  "key8": "5z9MT8RoPSvcQTCsioLyhKdvzPgku1DkUdk1XEgBWucKgWMwnjtVv5Ex2FSLPLYFT7mmd1ZJd7mqgtfDUmJPVB3p",
  "key9": "2j3LTrf8X5ReDCKDrnLMZAw2soK74sBguwDm433XqTmxmBq659zDBZGZHFnwAZGyaJDgfVni9C3Rw5iKCGFqnUrw",
  "key10": "461bxaHs6Jb4AB8QAFhmzR34GVPAsANfKwVFurCDf9Sznp79a4Qbsy25y2k6XoEkniSqmcjZCwRC27CTHPcVJfm9",
  "key11": "tcxRLV5nZGodkBTafzreRCvNFNKywKGcPcZQxXjFopB3eqYYV616VeZ5vAj1d4pZHfE3jjBA6bNBhAi8gsYoEbR",
  "key12": "3EyaGCQ9WZbfeC2gapdYsts7ezXdNCuxYB6okLQFp7mRGgb2aViJZxu1VWBKnvsesf17XdkobZBaHp6tcAyu1fj2",
  "key13": "5SPfDqXVLLzSC6jfevtBgpjkG7hLCHdpRVZQXdkBw3ghcshBcoKL4RkddBkjUtPrAex62Qw8cs5iX6Rmfo1BKaaL",
  "key14": "4Tw1YVH6YyXHvqwKLE7ZYB6NyTzQRNnXkTvhzZrof5Ydd69hkQRpdyT6VPuXjzFJfvTwJHB9KwrC8GQGyLyyMaLa",
  "key15": "4uXJrMvFF75JcAFBiHvNJTipGHsWfjzcJfzeSX9D3qzGqHawCNPJu6TP2ZntJY3fYp52Ja54hRMmnFWKThz3YKiX",
  "key16": "2RS9VWXsoLaaUW1qyQwEqKoKVbGSp2pYgyZnWJLWoUjXtbkyWcTYzu9bvtxiPu5EnqtBpZaNeRMMCZPwSzqqpqHh",
  "key17": "4qtdgG7Rpqv1S5RKChWvEr1PgHqtmAWkHNh8Q9bEqqp5h3BKo6NmSeAZtAUPvW5qHS4DMWNZgA1fofGmUiBrJYCb",
  "key18": "5madJfvt6v4Jwn3gQk21CvFbDLvVjgmtzn3fN81pKUjvzLWFNDx128x6maxFnAUwDuxJuoUqfXL9p15JeT5tgZUY",
  "key19": "4Co7HMogisQogGVjeGtZ7cNhM7qdUJNMNSEHvwdeGRiLpQqQLVQpwYyDx3ZrVdRvHhx972GEYzxzpihpDBAbUrMq",
  "key20": "5XjEPWwt3fZUu8cSRmcDxhyyz11bryZwtB3ow6GnsQ5JYfLDCpJNnmCrU2VmJA9CHyxgvekTyqJz4fH6CxZtW98J",
  "key21": "2if4oqRFstMStQg5TYuYkFigc5RMV7qsZmdtzE6SQrhmaQBxbxrjEzgoqN1FkF8LYh7GxpkhsUGT7bfmcVBLu22b",
  "key22": "r5tZ8XmEzsm4phFrUHFhkr8JmYhr6frbtmELRfMmGhzet4aUzzRtPfDVRe16KWgU6y6xYGeqmC22gW7MDsWHteA",
  "key23": "gnpKBNDDjxKngQaDDuDDVg6W85a4gAfERXocg4ZmQKf6mNf6tWapohivHA8oF1SyijN4XSLocxtS8D6JCuRDowg",
  "key24": "5JALuurcB3erAYh5S1wNS1qn2ontWodDNWun9TPGAaCj1qLAmUi2TPwwDsgEex5Xu4XvVdJgqxMVYZgymTrHLLJ5",
  "key25": "4DmsPX8v2oZ8W6Fn3teYMWvnBbX7k4dnK5xeFafwfWAuRoi9cetuEhpYdWs5n5sSYyTtyGbweZSpq28vGXdybYK5",
  "key26": "AuFisu1gpE25pVhCR5xGwNEaHN1RaaVkZstoneTHMrTVBujp9ZhzgGb3uiN51M8hKuQiVty3bGBusr6XKtWyFfX",
  "key27": "45NMvLnQKV1DyjcV8XVpkASknx2SpdkkZrTpjKQicjpv64mjsbSLNy62XeMK8GyxUq22KCsu65Enn1xcHQ1WB71R",
  "key28": "5mNd6oQKYgrWKw1ynVrCZre67vCwsUEcfbfybbaE3Ke4STsaocKozFBNYWdRz5unZVxzppAU34pdaV9wuCXkcLZc",
  "key29": "3XKAdJtXdC6PB5G9wLma5y6F1acvyRyiPGnvMTRsZ8zv5cFYioregDaQPky681y3yLFpVC51uHTNpoNQUQmyj58L",
  "key30": "2hKAY52mwhg65BQaSErLUTJa6FRVoBY2kstB91NuTTCRXV6LvAtSGDNuNZiPkTZUbuqFr2LXdV7QFtGonBGPCkXt",
  "key31": "2QDpFuVCrqWpaHQncuLEvELYm9ujmdDFBGJZxxVd88X8o7AXKWbwA8fbGdKRjebCjgvoPffWKnzf4pveJ76Z6jam",
  "key32": "3oYYvB6ypdu7FYxa2bKBTwP8v24qD6ZgyvaU3qNkgwiWU8RPGusAFTGLA7v2qFjLrt2NZckNEGAqvxN62Ym87PMr"
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
