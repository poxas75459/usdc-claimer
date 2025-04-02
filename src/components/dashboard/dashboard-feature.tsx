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
    "3MoEQbwjN7cp7Jo7fofEvueV6tV99fETCg4gtNYFL4tJrc5L3GqUAGWWjLPdRfw2oxY3B7XPBZ6hqqeuYzj8DTr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7h8TnocnuqzfwVXPaM9cryexozBVbBmL5Ly5PPcFBr4EEwvo2jPDvM6SqFN7pfc5izZKk5nyamjrCD7KYNUvLq",
  "key1": "3FhRWr2cc5gNRebShQ5oj7HfPeTDQCaBmiFbi1Ys1aRXnhaFp45wTwyuiHv3FSjkn2whoaoPhPpjri5BQ9qmwx2A",
  "key2": "LRUz2H9Kz8Nzg4DfKsd4KNGMKFMh2q5XD2sxdXm1zAhMQmv6fZU5W2JrLbnXvs31atYCXYP4CSRjFKYSLtiJZqv",
  "key3": "2ckirQq5KeEi5boxcXBbtevkNSJ1qjppefSJ1FRbnY3vBXDwwF8Sw1uKgmgjEikdqbWpLuZvBjKvqxZXAVkA79NM",
  "key4": "3ZTWq3UGF1nUTpVfZGB1oP5hCf8SytUAEMApf43jG5DEX24sAxE1LdEtaNP9EubVrYqaDMhNTbEX92sMzdT2wkCK",
  "key5": "53bxD6Yk2fDieb6JkFJ7fL2mLi2mfrLDFxX14EuW7CNuqKfmeCrvxE2VxPn35uZeii1kqz6xdwJkfw1f4Hb56vz",
  "key6": "4kk1S7nT3YZyYDLrBf1JbiH7QE2hAc2Af5sd6X13D3Wry4kJyN3dBvnY7Rwna1Wdw4h3G87PjGFoDvnDvEdrYAiZ",
  "key7": "5WJDp5mn3bwVGXXWCkAYAndmxZkzk8mmU7zZNzjURmKkuRaNxxAfuiA4pYAD1NYBc5LYhMPqc7X1oYcRLY8VRnoz",
  "key8": "26tieTDaXqatrtUDPLx3N7t3PRpqQ18zKtV5k6cj4xmimuwXv9WCt6rZsoV5ELxsNUtbVT6aTE9NZrQpXMXnEfpJ",
  "key9": "36JipGTwUjFgKFsRiERiWGs5RgLX3eZ1K62i7Zf6ZigjTopDeVuQc7dXqP32VS4NejVX2owNCLEL3u2EHgUWGXnc",
  "key10": "5JBWVimo67mHDm3HVMmWsQnHCTWD3FxQQGDrf84aE9wY8eRN2yyPVnrZUodmsriSrHEVdVuCQqHdy3x8boKA39cC",
  "key11": "2dGpXMcuNYZLR4vkYJXnpvJKRnC4Eo36nUHdTF2bN5wCCYFnAA7NKEuHJhHKG4PyDb2qnAdeQamMrjDz5fXceoWC",
  "key12": "2R89xPmfRjo1yVvfv5Sv7W4rWrGMEZd2DLFufrY2VHgUtHz6WUn6dKtRNJc6wvw2e6bBBnWwk9xHwmb3zK2xPecH",
  "key13": "4HVZt9zT24mMHuvBP7tKqTZcjpwwZtCj3CstSfH2Lt7Y31R18KuazutBSvL1R8ZzSgqQYeqsMh6BiF4JaVvsnaW6",
  "key14": "2M6wAofJxAZvx8ijtWeNbSAX5hJjbtPzuGnEHZVBi7mtA1LCHKssfiBJqohQ1kMQ4KVPtGfCvvtkDzfBe12pBERi",
  "key15": "JhSduVaPe6L1LychJMCHRCFyUHKfCScSuJbaWUs8UGGtCyDYDchv1tWMhqcEbzmgGhB1pZatHvu1f6UPUTeGx8R",
  "key16": "4LS5K29mDmBNccqyrwRTC1UkL3NxeGyaBGEqvvJHvTgZXDNgyCDoGvu37SJY8yDSj3Uz7nbyd8r85XshPYmnWAEd",
  "key17": "4VBjhbBjd2V8gS5XUoPY7A99moMyKCj6VGWzPVz8suQQB6sXfvFUzCgTFCLiiosUKPEBGBQR6MxmQpkTHAibQ67u",
  "key18": "4r8femEZASwczqU83AMa9mbL3CfB8eVALGnwDp7GukJMPxkWDDdavGjqbcouYWCtrdQVoaeBLkqosmZPJ1UBU2aM",
  "key19": "5nh9zy2PHSoGMFJHweq2xRDKtvgSf68Hkv1kX92eVAKpGCyoRqLieiP8s4RViUTjLGWtoDnWoiU9bqP34c7B3GzA",
  "key20": "oejdDVX2DN6X2CN85VASuW8QG15yVGoc5r95zUbCmEvTk3v5LTbSGm5L7ZKyatgihrD9VLRJSFoKncDewC9cV8E",
  "key21": "5jCv5yqckMSBSqLiedQffU5yfweNDbJ4S1sARtcw8HwfpdN3yz5qbkw6EtQWd2Ld4E17tB7Giui12b2DqRBFGJCh",
  "key22": "5QLpKckHTLPFEWxNFbuLDwzF2K1ZU1AGTXnYL4TfNUr2Tv5c8Wffe9Lo6xAhyeRBf7WJJwoHxYA36NxD5A8Lptz6",
  "key23": "51TvSiwf3aJLMFTUAW2db621EKfSfp84AWPBcT6LsosEji7CzGCHvekC6aSy4GJ6UjQZqjZrLXLNLARQmGYqtKfX",
  "key24": "2ppqiVCBtFtUHGPD4G2w3sxTo3C8K16irYBrPEjGPYQxiHH2P4JSkvV9d8g1ZGKsigDc7ADW3yvDATtRewmvb2TP",
  "key25": "2EWwEEhp6vKdjj4QPX77QkCeGkbSVgyCvXJ8ZLr666JncZWoEJAtPQ8n7r7uiWm1eXYaXPsUYqrNS5PTxjqYQXCf",
  "key26": "3uYmqL8dnXXGxbRTrQyfEbz3rFsbYbcvPim9LRDFrDzyooXck884bdibuvBYFsYWVmYCbGgzGphhRcqNK57gDzgW",
  "key27": "q9LbAQDyiDPsSHaWx4rwU6PUJ1e2D64JrM7fu8NB89PnBLsWshE6kcZtAUgptxLHTdSRk3PEYnjshUjkbxuuQCp",
  "key28": "F2HCEKeEfNuY5Jan2VdVhL9REsfUScjRvw6zXY16J1WEtjxZQDnFdgGcSWHM2bfFhbhuwjkGf3pjmMQH7jQXQZn",
  "key29": "7m149hdugHhcbu5c9bRYWev9XN5YbY68vz3dLfYGpUoVqSkKm3GxCb57cb8bQjpakWMUbcv3ndFKbMFgvrLo3Bp",
  "key30": "rDETaZ9mXQQALrv35av4R9rDVCGV5zf38Faex7abCMKM2yym2duBLJUVNaCpecRYesuaB15nkRKoUHzyrfPUA6H",
  "key31": "yrUfaoraNEyAs1C5MV8PGLuESCEm5SEuJioWzpurpJp27bRHScrH9qRGxb7xMAM7vR7keMDXs4rCD1oPtnP9V9H",
  "key32": "4w8fQEMqtdNrL6vzvTuUDbn9sB7xaya44YoUHJrYBrz65qXSBzdsSuuVaSXNLy8QqxXnA7NJXHN5Dwz7JzH32nxM",
  "key33": "2Ekj3VwPtNhHNigx1nZTMbFTJDqpXbQJbVtvLJv8fhRRbc5RxJWi2Cv9E5bZG6FBXo1QdgoUj3p9jcWcCEaGZtLo",
  "key34": "34tSsJav77AyCMrZ9DWB6BZ9TrDfJk3eAYBafvdsF9eHiSqw1C6dtrTAEyvYmTRvx7o87cUAcroNX33riygvt5H9",
  "key35": "4CXDbTTSguaZNypwEMRa7HdhKgd2zXAoJkxr31WzCRKGpGRWFxpxf6yXcetVizbpvaBdJfGbeqn7CzmAcpESLELf",
  "key36": "2zXGMKzU4ZizHqDxz4meWQFv8pS4DiGEfrCNRCZx2L8zb5JXD9U85rC4KsYppPNHqx9eZCSzkmNM4K2b1PvWdwN5",
  "key37": "3ATKAEzkabwY8gcRGpDGQYyQJUAEDZbhVHwpAAzKqpTvvN315CCaykZvcpCqWGirbrbVU8GyRGKuSDua4m2wyryZ",
  "key38": "mTNdVg2Gkb5pVKymQcPRfFvukk2YrTNHWKEgrRcvw4bADJBHTWRZ8vT4yf7qdQpuyq4K3zAarrw3eJ2yC8gpnm5",
  "key39": "3zQE3MjQ9m4avKXns5Kj9Ah4hsxWBHznTXAVLndcsim6PF6WKfL91yXppeLZLbCTkSvhhWqPaTNj2xJ7GCSE6EcE",
  "key40": "dBePQzZmvWSdyMiwNfviCEESFwj4YP11EP5aCPEzfNs2cinEnQ7mvGxpUwBQL9RPv7kjZdswsC3uxQ8ySKmFyXv",
  "key41": "5qtahGjTGPdhjyTMFQm1WxLRzBTcc3XRoZ9PrKovPGRw1YFrPhgbuGdfMfem69cYWa1gZeDHmEbQuuU8q78LtEjF",
  "key42": "2LrgXeRSPUZQukAuDjRr2k5qzkdzWyAUez75E7f7yXREB85t1hV5HjBCMBcMhQcFC6v3xx2i9Q9A7Y8gdbN8sXKb",
  "key43": "2suUs78NEp2qZD9hCKtd7pna2LXPnAUegyF2QtXcHYGKNABiiaWCvKHXAKvVwRM4R3mLVWvgZjpy5cBLCNV1UeUf",
  "key44": "5Y5cjYCJhgHcfYga9VaT1E1fEzSgxFUHMgD8G9bewQ8BXGph18c2QNH8GTJHimZQYG1UmLT8nzmKBNccDDcB5YPX"
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
