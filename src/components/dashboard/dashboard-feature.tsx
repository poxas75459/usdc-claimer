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
    "2UE1FzqyQDdmxMWyYaF1GUYZtL9xjRxLa5NHQRTXiqNBG6Lxv7GBZxKiy6qTmQonHgYvgrbVWco63Vh8EZHGJVds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qvtpaUvSfWcVqVQiXox6dXUawPnJVNdBz1HKf7i43Kw6LAoXxJRMJVSqAFYwYEHr121w4C2bFAPMd4XTefEJbPo",
  "key1": "2pnzmaHUQrAV6Ko4epKvG4y9C2phnBdm3NkRx2upUcjmgLxqxp6HSXw8J16a2jfi9o95SHzzEJmbJvi7sQiBJeGU",
  "key2": "2graFTqPDftktzbemkm13a4dKSLLw66CmovqCoddFjgNNFNPi4cbRCVcZ1vn4wQWsMwzcsTnXPBq2HQT24DSESrE",
  "key3": "5Cd7tXXsx1kYtZMTKMX1QPAKQJipvXQ89NkXRxNzxxvZMMuUDWnRbM6qTdt6jKyM2mm8oYWqmEytYc9eBZkfxEm4",
  "key4": "4wzS14t3eYVu4ybZXeBo2dp63Xr1evgGdYJviVgKNrEZ89TAeye1JKDBYqhCsbHSpXfTDzoTcnhhLskTHwj3Tzkt",
  "key5": "2bu1pCsdhfhzvrhiXEq9SYNc6RQ8X9GfsHXcRfjqu5B9FZR9ouA7bMTaqY1t7kDLi5Xz9XMKqVAQcgJL5EiEfkPs",
  "key6": "wVELzmzF9DFs5nFETZKwPidxEiakVx4ETVTXQxoCop2MLx2hqD1Xr7BeBYS5YuAyjAn58mawd1aNFQMf3bvuMAx",
  "key7": "36GNAhXoEgwEK47arYZNptc38J4BBSs7Eiwx294vdtKGPPuoSLPPgxSs2uhs9g31P6CECboPYgd6wc2Q8hnnqcwi",
  "key8": "uL5kTQNiTcBd9xU1KkvNePmzZjU4xKQNnHHCHmBqZJhn9vQx1ZZU42pjrmnowko6yzF7LevHaQ3b8NrbUG2SWdr",
  "key9": "4SUBQ2aYy7fwjKSEwcqJE4noSXqTV9DdrDq7rXBs7kg8sWrc6u5argM5TKYGzEERnHd327jPoc9WXKV75Srt8sLT",
  "key10": "3YnvED2D3gZ3NRKDwaaJnX2v8iW9nzJ6YRFgh3gFjvC7WDuVXBaSwuspvEcHyF95P8zDUEWmtRKa1w6QnHTLYvxD",
  "key11": "3Db9CCKMT1xXPezj8VT2kGZEBdEHkboLz9bXYup37NtRv2Q83e8qpS5xutZxBPEQjAhQ2uqoyRz92QNVTZEzzg2F",
  "key12": "38t6ipT5h1N6Nxzo4HX363bmD2pzmjeWCg4VjmZgLrm3XWaWBziomB79HyJSUpohEkvMpYHRphAMfBSeYnnkUjqs",
  "key13": "iAMDrCyj4YCR5MG5mvDEJkWk2k7SVqPwwpkQx2Sg5uA2jio1sns6EjAqf7Q9dtH5i1TiunxZEJVVELA9sVMnsFY",
  "key14": "2gDadHmYSGVK8hZmHHabHNn4UHCxnBz97BCMXfLE7RpQ4bsDnkafamjxxxPu5NKaZqRYL8StkVUr6JjuTYVXkMJg",
  "key15": "5ZkkZ4bT4qZSYNB1MhbDfxAi117vWr25ruc6zdoTeRXNvHEEe79s3PvQQs3uD74BaQ71tnJ8yqmTjzq7Ef3d5hPz",
  "key16": "3jGWHxQVfiEpBNzFAAQuFTazrnMpy6pZCR48coawZdRaaPVQhtF48JSkjRDok5mwuBn8a1XSorpNFn6AizL9xtM7",
  "key17": "2h3EK1C8rWW6ELWtCUrHxVw2KvfeoAhyX6kH4SCxid8gr7MpQnbbxPVnT5rzHvdGTo1FAabnCKAPy8845kv1Xo6d",
  "key18": "4Y9ieXCp2CeZM5hY7CoNpSeifnHvNACKvaSBz24J2BwhhioNkyf4NxsgVEKZ86dVgQGd2PKbBJGrYTKW8ogtT1F5",
  "key19": "4snq3EtWNWg5PtL1V7xEWwqpP6e28vyBaCrmtrNX4Bt5fWhkn5uXuzgCbJALwkcdAyynyxtadHbsmKy1Qvt6dACj",
  "key20": "3qTwSEsygCQWEUvnRDhgNwpTndDzdS6ne2Wx6b311f5eKsRd9hP2Qex55Pp5F3yV5Ca7K6Te81yBqAcaQ4pxbcXX",
  "key21": "X3gzzREn3UcF5TWVc4C2Cg2yWTUoa2DvJwovhGMswJutf4HVkRAA8SGpFqBaJUvMf7AravrYEGDHmxkzdv65QSM",
  "key22": "2BVbQo3iaLU6Bh6gCaHwiAicXoYFGZoxzmeWVGxokf6Xp4mHr1256Fm8XCLDHgVi5wT2excig9j1UPDQ6FxNBkrv",
  "key23": "2yqeydeRwnp5DqXi6wHn122YAd1S3gS7omLsxWxszCRmJaF6ydtXA3LHjWxQgVyU2qRMqPdbMutHst6YMFwqAmfZ",
  "key24": "j2tf8dia4cdnbm34JBhd5YMftMXGsrPc4Tkne6bDUyfr8aTSwPuu6fWoty5e9sjSKEi8SEZqZjoFuadACUxPoCg",
  "key25": "3RN3qPPxT1cmQBM2SBR5EEHoedKDTw54Vg8VG7amf831RwzTmM4M2w7NuBQydorPjTfBQGKEuVeZwrHYm2URPABe",
  "key26": "3aXp4eNmTQzatfQwy6GjJs2uLpuDAwY5P91bASsiWapiAoRaMMfzreo7JfPYfcKt4a8QZYMoCdKs6W5LS5MUKTeb",
  "key27": "2i8NJTGPusEA5hn4szbeZ8aDUzHn18yLmXzTitr1EqkJa6yYNGwS8vtaLpbnAHUZaZFkKhG2Nf6wG44N5QuQq9F9",
  "key28": "2uQAubXuXR9ooRkNejeV3deShWNbCGMZHyiXGAz6Tdka9NH9qDKu1oSrsKgMBoBASLf5uWa7oSJpHZDJbhHwaZEF",
  "key29": "2Fewpkpnx8bLzEFDYH6yybxQkk2haTDRU1si2TkeuxXzotrqdG7cbxf8pTRKBk3FT8rqNgWX11KR61LBP2X1YkJ9"
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
