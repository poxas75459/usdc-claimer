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
    "5ExJBDPZ9bgjaKmCUiFqo6sd91P9vbJJkDS7a4a2G5D5c4NnPvL4pQhhCFfqAPzE2bakpmmjoauG2uztTL9vrcZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5rsyeYN1yZHwxKCaJnaAytCyy2a2JHD55j7uVmXsCHZWZ2EfunLpgqL5K6X5uh7H5xMiddW7fXHUZ2Q6MRPLAp",
  "key1": "4KUz4Yib77EJZV1QAm52wMyR4yDVSb8RrivBCaYZH4mKwvvcjXNAqu8WtkzLd5xHNt1mNNnNTsyRuQcJGMzKtUGB",
  "key2": "t96BhBaMby7FLewE7qosZCESFjkJYTwZiMs8nhZy5iGJVGypcTkbkXnXKpD3ZPUe623ikxVU2gNZ7NBnWvBMSi4",
  "key3": "4SJ54i8m8MKDbve4QVB3LbV2CWXHBorHuRdffzNwAkPqLkzVPDy2Hngxg3Su7TjiSV3q6ZhahQ4ioMjNA9vkiVBR",
  "key4": "5GoLursBk86rCLAAGAGeaaU1rahFGCuwQ2fC6RQ4sP27VwLWgPCWhFjojQX92gti48RuFTV9Tcbioh3dszSCW2XJ",
  "key5": "F15D5GfzFSUtNDurTexHEmgTcVfCesbqZ353BM9TQAbovFmaWTeqPxWvFD5ne61tonrSaU3YnWym7bKgJCP2CA6",
  "key6": "4pqpeZhUipULgQv5GytsMW2kuqoHyExN2wCBaHC3HvWMJLWvcRMuduJFtJEahFfJh9RcW6SEhjRPYDP2nNSfNDMn",
  "key7": "3SkjH61guinWeRd1JR3sje42p6F3aLG9uy3BZafAVwroGnqY92NbxCGZ5YjkfSwCQWTK4nf1iitR1jycgMGvuYDX",
  "key8": "4g2v92mteXP8vekY9sHMtNFMi8tNc4bj9r9kqqQH5p3Nrcg7dRz1CZAi6eoiqMR2oU4XH7Xbv6kG9zB77j33FpJZ",
  "key9": "Ku6vtGzTahDKMLJuqtmYmtwbvsgQAyYd2A7dZcJfd1gVgvXMmnC5eXnbppE9xo97XTHnMb83ehoKNBZassrw5u1",
  "key10": "4ZrAXitaS3y3AkQVta6SPNxwBdU7mQkrDSxUHtL2kVAFbJ9gZYw1af85TWyuqDDtNZN9H6ykFyALjGqaf8N6d1K4",
  "key11": "5bXUtU5hktJTkSD51FaRXt8ZNdsQdS565DQyFh5Uxg33n4GVYmUzVbRSQFRzJGgg7cr33via3GPqtH4qWYnmYx4d",
  "key12": "62eeGcAtLgwqscAGbch8coo3cbTqzefGevhRisiz8R82cjYvaZ4Fm7UFzxPriqbE9GF1e9k2PytQToGnrVHmmnKs",
  "key13": "LijdsK7GNMBkHD1umKsoThTvnUitsCXdhreE1FW5gBQHry9oFHqNTsWhwVeiB1nUv38PwNaR1tHzejKQYP44oTS",
  "key14": "45xYyoNzCUxL4oMjQZ3BYTka4YfbjBASjDPkZssGjSWvKR7pDAC1amn65ZpX7owT6fEe1KEGFdgeQCfuw96tT7xH",
  "key15": "5DguiwoRSLvnr85HSzANfA488afxCwXx7CNT5J3koqGeD9MDnvN8MdY7giUEzx8UiPbQibTHSn9eNrdC7jNQrobV",
  "key16": "2DHkTfwyvdmpKHLBSLtjRi2CR6FLKjFb5hSgFuMFM1LrE2TbxChVqrVv8Nka8aVEFq3odAd2e7mBgbXDGStqGnDp",
  "key17": "36cfcvwRw2R8RLzhAA6JTufFbHKVirSK7ZLsnWedNEQCgDHWhD9ogHbc8bAaYJ8rmywbVrz9H6d8WQ2BeHUEkvJo",
  "key18": "5UsfMeGDN5tPeiQBd8XKqP6QLadYeMeJ7GNTVwJdEmowkgLJRct7oSAX5TRKkAFKFJimLp3nBtarXGRPhqBxUoW",
  "key19": "3p8FMcNRiG2KrVchq2LCwLc9PtvHKQFu8yfjQGFxKgxAFxenET1kRnodA5fXigm1zrjpaUoYjSxpJ6MzPxB88zaU",
  "key20": "5kRCQZJAu3jstmiQd82diu7BmLYGRMcRzCLf5Vp7MBC1P4RNyJPqNWaSQ7BaAm2YUvf6DZ4391f4mR3SxsZJ7j8Y",
  "key21": "3e7ps5ARrtNSpB8JQrtz5qydG84kuZ9TmtnBThMC3haZfL8WMEXasPA5TuhK119jvKkUVNarxq75DuHbnycLxAJn",
  "key22": "2W747JocMbT7iQRLbfFTm7jBtESefauBP85zk6wyQ6zSowGcRbZLPzxAb2KRMPVbtGDWSSoCpCVQFwK4iDTWXiD1",
  "key23": "4edxiUiQhC3asM2XU2XaLXUzJdGBK96M4sX6dhT5bisdpFKi8BaYHuAMyE8xyqQVTugiGfqJe72pLtmuy2yQyPd7",
  "key24": "4J11xNsHD9fd5GGhJrLv5nnSEjRZeRst5FV6a5b4qY454fV9Xs1Q5aKkkSkgv4ogLQpaYHCU6HxbwkwAzF8JUdEG",
  "key25": "262ZtXzt6gFSAPTN2r5W25ftbJZetjT882o2N9Nx2hSJXhVqkdgk7cjDEkUmvYEaxeJH3z9HCaLNuJAwZiQNtRQz"
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
