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
    "2Z5kWQxTQZz5DWpJGoMB9AnQrHjbk3GTX3PyLDF5g85TnbB45jymKaLG9ExSoiBNhRCBvBKEJ1DjwsFW8pcnabyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYPS5mdsTBaDEXboeZpVJ1GoxuiJTkGyiEFEvrA9Yv8i3AUxBe31x7qyeZNSuEUWh46ZW6HaewGVUFNnMmYT74C",
  "key1": "2Z5BvcGxK4p234nH2UVjAbMT6RDmHJN8PvTrj1UvUpj6mNHQJTFfcBZWP8xgKyVasrDDETt5gDSHRnTExukXUVtJ",
  "key2": "43CGgva2943JbBRyJum83GqKRyUSzMCuab7gV4ofwTbrsRa1KEh5Dg9Su2Wtbs1uXiGmkZ1k4poqf5TMi98rPJMv",
  "key3": "iiYe8VggWYU9NvbpK87BUEAMfjidUrPUkC6aBCQdFXt6iTfTQ7FxiD2Wpe7CvwNceBvRxqgHe1p128cyuBYgn3r",
  "key4": "9SWfeh2VWjWVD3rQyDg8TriSWpyf4K11exrYw9uLH3w8JHCGLPSZajBxsfn4PzKPibmDbfnbkTFJANFa7XeBtrQ",
  "key5": "2Dh9GeVJDgzsmeHRkAURWprqMZho5eYaJ2SuGmhzeDwHxhC5V7zuDKGDYMiheYLqSVsXzquCQNzY8XKszujEuu9",
  "key6": "5vrQVK9r5RD7Vq2y7V3LYxg4WSdT8gJk26CyXxF8eYXNxWe44uzG2yEGNdKNavC1XDNAZhnBF8ojSwAyW1zk1wzg",
  "key7": "2epmtwsiLjzEaQYyj6UdhSeVihuBBigEA2MxQjnvSX8jPXe4Hw1jMXCD75wnRhRPJuja1EpEgXCPy6WLZJEGReei",
  "key8": "2v6tkNsXrpxTfWvwBWnJfipJtVoFUviTP3LvNtNQJV9GXdQTWidXAnWYnqkJ63AMaqnayVRyDn8CWo8hyFh2o9dn",
  "key9": "4y9WFXAvhn1PyByNYke4y7k3eFxWs5ePJyGd5p6z7tTLxbidcqr2C8J5bZKLBFRkBUGqTBaziBNv68qTQrHt19Mi",
  "key10": "qQJ4Kna9pkyoT9ewUKkBc81LDXiQBZrcEDA5cxdkjwDKN35bN2FiKGuVT6vvxmubBjH9RYoTborbdqzA4yFuMbm",
  "key11": "MHQizAA84quGWLgaLpZjC3gZ8G5BAVCGz3hqJHZ5g7Z3vhzRyQoCrCTWuXFeduBvjRoXAiZnjPKq87ibpvhHQWh",
  "key12": "86fafojqPeeMtvvRtEzsK1ndunbAW14zq8mVKGBZCgpKBUmZfp6DvRDRsQD5Q8wUcDC22S437U5wgqChrUrKWCf",
  "key13": "2tC2bxfN4zztm2iNqT4Jerwa3Tp3XKMPE1V9tDbu5UMkcV7M4we4w72bd9NcyeKnz1Fmmgrt5fpimEZqcuxy958N",
  "key14": "5ELxiyP693Bnq4F7JoTSeEwcifV3No8UG7RUDgmAE1tKfLKwtw29i1p9KG3CFCv6fGZQs3A4RH9y6jVrWUCzcWuX",
  "key15": "4qumFSHxstTR6ogU2Xe5EQLDwSr5yiQNZw2ioidNVdc9sozaQAT9RZdgKf8LizhwwmkZaPk8rbzeeuCum2nmFVH4",
  "key16": "3DaEdYE9YnMSHk6J54uT5b4Q75L9m4KA8A2LK2MsanWAqG7CVQqmLzHQEuhPZSe9TUybijtmXbKJ4FUs2vLqgwq2",
  "key17": "3ih88VQvMbKYKGcjBeSro9YMaKQAdnY4nLWZVDBUavHpZSgNuwkxGfvpbqZDNMBDvjz69eCWzcygqQsFfQU3Sos9",
  "key18": "LXFTUYrMX6yWscUKQovXX8Rinm4FBbzUgy3YH4vteB4XNsJn4kgwf1yeZGaiPTpJgNSgZW62AsXK2qcA9zRd6H7",
  "key19": "9yNbpi6P3b2kfpAQFqD3si2X2DqCt8WqQs3M2Ne81YJtNDQVsG9dSoeAFQWnBqg8jCAtL9utxAiTGWX3YgYi8rW",
  "key20": "hXoDN54v7DUHqqghnMMBGdKQLNn6cp6H9WdVYS6VwBfW4xCv2RxMS8h8VvFfCEWVia675Tr1uj8Ww5iXSjwwjjW",
  "key21": "3DyJz7w8Gfdz1N48Sn7RLGVnLtArgUGjWcqUQZFbbLpcQ2Y5RHtbmedw96kfPm8nS5BYkHTrZj31LkxDz2NqHbGg",
  "key22": "5MtVp6KpSUzZ13JLZ6iyNxSmtd98pqzkyaMacZHV5T9qEyA3S1b2QoY6FAWZGTu9ppAuznEba65ixWNA6GWk2QL4",
  "key23": "5gk9KHGdDbx5x5T1NPEuZHEmGy5HZbPt6xLhkm1NFAAQPvrqST2HWhjbKm9H4HUkncsFPWwybVNAZskATjbnQsgz",
  "key24": "2GTYsxKhqDu3z8RVKej7wiw3DaNURozJfA9RsXtZnJXGrJjDoecczi1NXUBfagvg1dkGs3NFbx4o93XPR7Xn81hH",
  "key25": "UGE6485X3Y4WJ4T1UZ8mLaPXbNSLqgrNvv9QhmL38MnZxzrhWBvpSGavoxPdvgznTToSUDHPPc43s828ueS9SMT",
  "key26": "3Mxpm6txt3NfkYAGk5j3xikMnt7uPdZhA1Nv2bsfkSuXmHUVPNf1Mp9WKnpfCxaGePub21A151DoMXWJvtsz9YVy",
  "key27": "44U45Fm7JEsbwptQA8MvT5GisdizeEuiGPJerfe3BKUXHiMUWb9CjrRhnjPDpnRy1677AVspzkP8xmzN45srM9Mu",
  "key28": "2denCabFnaTuCFTs1USJkbRQXiva3VsVGrX1MLNr5FNccFZCQafwcptDTJtEk3w4fiafxs2ioENqjkygHF2RssnY",
  "key29": "3PkbTRBfqKSxhg24FgU3u9EbmEW5jr1G8zKzCGtq39XND9kLVhxpbU1TZ687PvJ94abZGP4Ekx9aCCnEgJCoZeG5",
  "key30": "2rNztkfMyJmQ6vvobngxXmGtad5HBi7kTqAxWqSenAaBzRuHNk2MuD1yd8cH86uk1ZonwswYCeofUagjJVLoXH1R",
  "key31": "4DkjQXPSwsNFW1SB7y494upk9geFjtFJQgidoaLMYMmXE2feZDziJHTMce4TPQ3the7PJTZFgbHkpC1oyHgnEePL",
  "key32": "5N9VVtLMnnDt5m9KBbKmYKNbhAeHmrihZ3wpayGwMrsShTzUabNxL6KTjGjKXVdZim4ro4emWUegreLCKsDWm5ny",
  "key33": "4oWpDuHtFr5PjWgMBpKYAKoeuJSDSnxEu1Vv6X4zcrYXD13qNbeSFMptvZUk9QKV93a42STAXb9pkSXUuapnqLpb",
  "key34": "3vHo1nTJKrdRugXYNerPWGoUf44jfNWtvMDUgkRKRBcuu6wg9om8ysXa3i8VNqcLa9jEeAE7VLiUn38eGXNQX8UZ",
  "key35": "633mRKqXPk2F2d8StDQtQfWE3SSQiKsFMYWUYEgbtafzrCAoaAizJssKdTESAeeHwd3KANQoKEGfdWbops3aL98W"
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
