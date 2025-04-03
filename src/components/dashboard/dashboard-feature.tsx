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
    "3a7Yi4McXh4LYoTzaN6ti6d4TmQkMvpYRsuDgjvDWEBNafPpWF9op7hVKXam38ForRxTyuH6yL3htedUdfK3jUTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NdFuA88ZwTxR39E7dwSqw1uvCHS3CgqCZJ8YdYDcGHNfuWokrRV5QEk2bSoBVzaMqYNL9Unue4WmqRwXBFeMgbb",
  "key1": "4fg8wxTtjHhh7DfPZq7C7XoKsyHuMivCQJ8rZ4aJr8f1imTqnAatH4fcbGWSaMAkUxeTpRe2XDZZCtEEKL2HMNJm",
  "key2": "53LDcVE1S8akbcgk6TCYySPGR2seDpWQ6XTUDBSegxexCdsow2HpuYYaGJ8X8pFvHJ4rsQvFiTwcmNDzwhoPFxMd",
  "key3": "5gJZqsGRLge75LyxiBPHZuEa63M6C4a2KCuBJKwr4ZPCYCbkPPzWEbWPvFocSw3Ac2Zep54WVizo9FJajkh9HSzM",
  "key4": "2ojQXKwc17yq3rZQFbat3kVkW3pSBbwK5N468DVhswTxhpUBt88zhbTvVwCf5owXoosfkewKqj5m2jP8YjuNNBXX",
  "key5": "5QzS2xLjrjj99kNWb8pW1e8g7WjVvQ2m3tATtZPjrfkufRHtLpDaPm4yGzHvbJHhxU174eMscLnFuRt1asYGR4Ez",
  "key6": "CKiEYn6yNcA54Yn4TvAVFYsYeQeg6mYG2JfKprtZxmSGDeikWpXcqVgDsUgFnb6JRy1FrM6QXtvFV5kLPRWmM8Z",
  "key7": "NJiHA7o3omLZZb58fSG14issMurUFciT2gZj1jVeQtFnzgsHeg4nvAKvXu3sex1MK7qxYVXmk2v2ymL4KbnjgZ9",
  "key8": "3R5qrUacTRKHNE3wQTGEtzgfPJFoy36Ea2kcds2VyimDMFmJbkDgpa7B98e54DMDso1p6MD9QeyQPmaMmtsN1E5r",
  "key9": "223JDCmFgrJn5FqKZuyikbUU2BFZctHPsAWrBrgCn59aDxcYDAp9Lsdu9MbhiGZcjwxKqmNSuCfnnfQ8DhVuTnsD",
  "key10": "2FKwuAd6ndG4ShTS9GpwJLBgup3Csigrwi989Wi5BTkQcEoEnfi2DM6awFRaGyN3rJdXGvRPVfUe1wBoXAP1J8Lj",
  "key11": "4yKvxgW5d2fzySZEXBN1Sg635MHpEj1e4M64hiDjJWPXBrFo5j6UfA386nnM9jBZbFDGW6fEvDxeSZgyaVyRbPug",
  "key12": "43Mmi5bDEw2aCA2LYMR91mmtXFYtsoPoH2EMk9kJkWgzki11n1pgq4R4gmfJDX6SyMKjuWJhXwri3W5hkKptYwcP",
  "key13": "gmiJmJMaYsHzTrgr3YM4JasUJ92AYuPGP14ehBeqfrwa3EdhWAmfeGsTeKwNhVbGrcWo1G86ReTsXoYkuszhDVt",
  "key14": "4zBAd67V3UruaLZVNp6hCkXeTBQnACQaX59sJLpuF1vUayN9DG9r9WKpvKUxoc69Rz4guPthUfD9PLoEZP9j3Tsh",
  "key15": "2vWVjxUSnS1yME6UkAFJKJGH44x6xwpoH1eLcbiJ9TnyeBkdu315dSrxdQsJzCsLsVT6PGi3kHYoiDR3BbrTQGQk",
  "key16": "51nWhfVKMuiJEF9kbN7LBsjncKBrgWZf59hJpKUMRd7Y22rxLunew2pCRLb2dqsq2scHbTcfYr7jz9kVqiutmKNx",
  "key17": "YcQTmPVH5GgMeBd1gBAmbQiHHva6x2cy26q8QshssQjmYL2LqjRpnpNcFo4uTkwGa9SWB3gMY9QtdQDpb2dV1fg",
  "key18": "4XmRGrejtCTiNaCtWEtWsdDYE6LWiYq1w5eyJbrH1oHwGAuxKNji7eUcCSwKZayTLhXU7YyYjv5MmvLgExpvwu4b",
  "key19": "656CEd7jKvBuG5FujjuBCRbJ1QsQxBCYwsAyjpowbKR5DB32j8pLueXoQMJdXsJQpGUwCmmbvLDiLwAvTaaCtPaP",
  "key20": "2jLEPEwwyaTe9aR4V5nyAnQJyxB2Krv2vDn7asQaSbmoogDJtEXm8YaxZw24CVpWmdAKz8UERhbJ2irH44mJP2CC",
  "key21": "KoMLFh9mv6UgmNxjoD2Yv1KmapgRZmLzeKtU1bYzpKgwfHvFYMXjycKBwPnJv4ybM5ToWCW1uTAxgVxShmM2c5k",
  "key22": "2R7KaEdYxpJwQMq8LSPSywLanmdb9G7nHzybLMj7oh2isKvh9LiPBuj6RbWdSgUv8wk4i28zPLMHZG9hL4D2ziUK",
  "key23": "mPtWyRtuUML6bN78ozYGAP3CDhqzDysNtj24Ekg1UHNnFu5wcS52kse9VoR27UeP6YjUdhryG28pr9gA7xhXgMs",
  "key24": "4VEmwyPbvJfBH8LQgFAziPZEH2MPtpcSvM6pCjhAvH8G4NY2drsvmjpiKoW562bwmfs95WrYFPWnjw5gp6n9zw63"
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
