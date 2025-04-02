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
    "2AnBjxCQw7BoBCrjmKT46dBG3qc4XVCtuSqv6m7fcM6XSneWbWb5HUAfWsSvTZtQ3mAaA9zNFazhNUi5x1qFSjHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YriemPpCQH33ovMWJ5qxhVwaY4ZSPPjUkZfRWV2yEW7iJZRzQud4oNU4UaDWTighh5BiqynhGUVdJZk1obVkVym",
  "key1": "2esX5xWr9ug3tLzzefJ3kgiLdRnnStj9P4Ti4Arhobjge2XWa73sCoCupcKBYPqkm7eSn1ZqpbK6VK336EVeQ7FM",
  "key2": "67X2CZ9SBFgjFMWYmRpoMRBdEZT1HrqaoAnnBqBGhcCQsqa1yHS7cWfn5RfX6hfiC7wA2MMCZQNnhEwxUFMu7HEf",
  "key3": "4cojrM5i2xjC8L2whwMvkN6QAbMHDU351izjLpCxJJHFxQEHH7Ypswvb6YpEm7Bp2y8KNL59r7822MFNmA9dgTz5",
  "key4": "ipQmb88PcRiUCnsYuwGV9xsEwaLvYr52XQEDv8n3v7uPExHXcmR7tWPsjYiKvhvC18g7Ww1g7m65heFAopik3o4",
  "key5": "44HNVxZLUVp9htVpjQnfRGsoAYcNynTEAces68D2T9pBMg9Qqs7SRAS6VVwYPLuwfFNAVGiThx5ShhJGrWEM8Eqy",
  "key6": "5HhBmyGuPsKQVYgiBKw5qAKshcZkzquBqHQER8m6nbDm2FS7awoodTGiEhF5WrQw8SH5Ua1yEMTqM5fNXoMwvc88",
  "key7": "5d2uYhUTBLbzfVXnv42zwWJE31hwkm1dTdy6bdEoFbEBLgbLuZdL38SYjcPZhNeq9QMypFbrg3MuUzkxr3C8x8Jv",
  "key8": "2UjX27rZ4DVw6Rybn63A4BqyohH3bP4HtyvT7us4MH6MPNXWLKKsSW63mGjYqSmz2YYDruQadjMzqUccxZZEcmq6",
  "key9": "29vwfpkZoHowgJ1PbmP3u2cEg82BmFUPMkE2ZX8mC56vguc9qZ6vJqUiwAP5oihN4fzxCdooeA919ZB2iSdw1jzF",
  "key10": "3qdU5AwkWf3YabvCVnrZW5jF6JxDyxxjYePbq9AfQ8XKmCooJ7cDSUePRJiDVo7PBRjF6X34knGRk1Az1DDopwcE",
  "key11": "2eCphnVWsfEKJph2ZQ2oiBRZZNUREtNrXvHuSZycW6ExatGuGyTCvkh9dAbds3TiV7fDUKG7Lh68dwwamv6F6kDF",
  "key12": "56RwzMA2EbMY9yDZTJhfcwffyd4FgSBNRi7TT1FsTHnLKy9nDtCfUCUDVBu4NDQjXne67fvAdXQX6geMSTdnjqTC",
  "key13": "V3sHoH1kCoLZawtytgWL4RX6JdPU3iob9YsGPSZBNUKXtJQ8zW1gBVZJeVtuUbEPnCbV17eTNVXiobqCEqakRvg",
  "key14": "46ZKgQiP2oeXnv6divpziH6oxhsTCz7vbwWHwPAX9gYcavxwroma3zNqiZgwQ9sRq49rf25jdJYbbQS2rUhHzXev",
  "key15": "4NHhjzAGvLBywgcoNzCWv4cF7YxDrAB44ryHLA1qHb1AmhFrMiZaDaRx16WtKKsgh9EkRFA9n1u1zf6ReqyEyEZi",
  "key16": "8Qar6vXyK46pffU5kcLCoJYBBqKaJZYwWxiiiB2jXkR9T97wezH6uNpDaeQt8DGieMnN6qN5PfdMy6Xumx4v7eC",
  "key17": "1ATG3f2qNusWsY8eiMVbYNGfkXqbENLQF9rUDo8Coysnf3LpvnYYLk7VBshAhP3N46EKza9fddEmDLDCpobRXM8",
  "key18": "5NCDRLrsvakAP3nhgPkrxVngDDQHrqrMATJT6MEgp78kGFid29t6Wo8oTme6ucLk5h5uRXDcPYgAQJZEBLrxRKdg",
  "key19": "5uch9xzDhyziqNcZ1Gv5xz46RDpQCD1RtzzGccM4Zw41HTXGxhAaEWTgQTzcmc3keAhh6QbR9XarNMsa6KLG1VSL",
  "key20": "47NsmdQMhEfZ88Gc45yUfXRNQZQQw88ypRe8bF2DYrtXK5L9jqNJkz2aqrHxhwEe11ZhSVcpoHCBXAph2F1Vt2wX",
  "key21": "uGBsBHFzTqVWgXBktn1F7MLCFyFVr1VPEHyvpT1itAxxFBvn9hyFqAdkPojhRUYLrPpw3nuAFy31nuD55jGz9w6",
  "key22": "4zc75RULrMTj2iRFCQdFX2ySnPcFxMiXmFKszjESMSftaQZgSafY7gz3qRqjXicSE7muuNWu8VABoWQ5AVAq8TRm",
  "key23": "46c7jFjvH1mDrwWLsMqeuwWkPYQ93ZCAjSXw36Nkg4d9pxaofSwNBvJpyEyxFc9ac7FawaAtZTzjXg3zySWYN8hY",
  "key24": "44W8xwV9HFEatzmuRuBaxYk16i4y5XahgKensLVYNCGkRB4iZXmxGcSGKjNtkAQ17AyNuZYHNTFHkPaajXDLHwK9",
  "key25": "Rn9ne1abVbtpWLMetUimwaW67NM53gUaK16it6AWGwFjcppygMxbmx2T3NWRhtT6Pey4pT93XsBadNSZPcZdL4g",
  "key26": "51iCB3gULkWtKJ2PhKAYeEgXQGkquXF7kesWgdjeuQ6hvi9DW3iFunRq9ZErpS6pqPyxj6Zh9amZNrZ6Dbe12iBr",
  "key27": "49D1m3XtpGcfxyLyYVnD2VPLFVoUprCu5qDPezEsHuMNf3ZUCbU6ErvpXD9hHbqrDA3vh6Fb4WBRCnZqCunRw6TQ",
  "key28": "3mG2m216GR28uBKcML4VoNzcYRj6oDKfKunwEiRd4fNH35qW9kb3upBPHSn4QxJostHZpwDfE5t7YFv2b2A6UkWR",
  "key29": "2PoQFDrZg7H1NABx87iRGfcrCaQj4iayipVG1zUMRfqZ9cUjzArRePhemM55RsLdupm9rRUnzhdKjT2caGTxhjBj",
  "key30": "5AJupeZvSMaq9Dq4FwuqG7aZMSpSFmtDDt9SejoZHmKEvamQthqaCQn2qscHEgvfmaTAWWgGT85HUqmFAFRryzGy",
  "key31": "Zmp3hcb7WYYneB6qG35SXsXSnWsyySXV6jGtci6BH5vHTGYhomHBpkQsk8WehUnFaph2oGqUvjPihJFnuRjuAmn",
  "key32": "3pcmnGBaXMNtDf7AZxELjrbcW2v8QD2rrSebHUqD6ns5d1nysD51wDhHHdo178ho1DPQK42qTTG8pE42dgmSSkmV"
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
