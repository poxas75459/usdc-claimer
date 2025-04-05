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
    "2dhS9X6o55cSiNGwHSpTrjXpeNb8p8xDq4mPUjBP9WWqfHFKMSrCs9rcnbPN9TkvtQghTtRUUoqqevD7EEmmPNoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cgt5JkZtT7AMDj9qf9S75ihbxyg3aCLDTkjpGRERpX8cimgCxkYzCGQo1kjheuyVEP1Qux11eANDdFpcTkoG9Fr",
  "key1": "2FXsk41DTLKCBkCYactbAeDwgpRbmMEjPQBityPasCbcHYP8r5WNJDnCWABT788PPrTx4LFYVdFhDnJmRTxTdjgS",
  "key2": "3bonGA3Hf4cHL6mr9aj6ZJc6daKuhBWYagUVhATQ4jNyjmu5sQMdhxTW6y1itDK1TASiEmy5BxyD7WSp1dRdmdBz",
  "key3": "whqq2UqAEVu4H4LPfr9FhKX74HGXdf9GT5CDPuCPwkbafAaaZrRwZB5ARtF6jPVLg6PNzLvVJgyGcNLLk6nqTRB",
  "key4": "5B723zLhyMB7uBgsgZdB3yab7gvvN2ZAUFRxuy3KHjdJEAj3wLeTK5hZ83UvzCP8S45e3Z78ktQ1mTe5tje6EDbA",
  "key5": "5KzdXEzTF8juJ2QvvRddNuFbJerSwm61CnYSVEigFo9agngd33am1Qd5SC1Ninpk9XNxJYkpH6FSRdL42KfdQWnC",
  "key6": "3DBHBTq7LHURWu3Yi6mkxjpBfAwYACMcdCtQbKo12aHvZSMEG1JevxHa5PvTKYaZeqY7mYuyMZnABbBjsFaHaXvQ",
  "key7": "5jqiinuryPfUqnG7o2L6TBtzx1kTQ99ahEsPGQR4JMJRiFSrNeU6sZRVwngwhZdF9koqW1DyJtW5GFyiC9YSksT6",
  "key8": "A9wXchCznkZv1X3W4np8FBzhuYLe9HE1Wtj4K5yY2QemShbqvrcm9tWX1cAFGMrZcrzv2eC6KcypPnTrSkeQWRw",
  "key9": "2vGgJEvXhka1MwRq8XTpBpEkKoKeGPwRrJW2uUngcptkUxPoQgKBHuWAMt7mpzEMLqvu9cp4eyoSUZGNh8UmnYza",
  "key10": "UWcQYopBaZpxbQJNenZZY5u8tEdzPph9FL2CSZ3DgjnDR7mefiht12jKoTeUS5sDhNxpBdYNHX9boruUJ9MRHTW",
  "key11": "3diUNXdLaNGjHAncBVSVoVmHeEJyoJCUEPC5Vmc1jd4WjUUsVNgWKFN4LaUBsWG9s569wUyLXz1V5sLCTCLBFZdu",
  "key12": "2Syfxhd53TARgT5UbJZYQvq6VNQ5aonp6BJaVuQT45Zg8F2EWbPYkAW7oU4mgqd4Ep7kphLTk3A4bVHYMFMtwFWk",
  "key13": "4hnaktZwFUw3rpFYjVQxc6c9B22r52xmpn6gtggBgYhDAHhTtzr96Y78sMkwtWiCjyWAfKJGeyTqKAN78aJ39nzr",
  "key14": "CvB1xi2RhANie3ZrQdgrQG1gGR5AdpE4n6h9kFLeMSCAQVYL7y2Gbo7piN8Zi88nEsRixg3PB6tipDeDUByCsdo",
  "key15": "4pjuwxvQ1gMubMWw1BK6KV8fbHKXHPQjBQgTbU8B1rpQPkPYvKxLURf2pjDR1KVbYRdc6rinf2GTogX3ud8cnKBW",
  "key16": "2Wo6wWx1ty66rT5jPmiipepsWSa42RUDMxUji2LvLgQtVwFc1Q8ZgdmdKSaFrQbDAtsCGXsqKH7PMuuLR3iiMMPR",
  "key17": "5MfcZNNaeepcyhMP3EEWXU72KeEvnqt6Q8TbLopRTmeTasRfMamk1Gp3z26Fraq1WKVjrTjNrXuy1ZbwoxKchVQB",
  "key18": "4QrYPyN6kkdwCwCWNMzTHGWuYpv8jzsURNw81BSDVHuKeFHjuuY77ASJGeYgiZCKpraXTj5VF4jLoGqVNdNDhyMx",
  "key19": "Virk2EHztDozM9FzAeDeJ93uYw2ZaRbsmN597vJMvXdg7aik6uasSrXDy9QUBR3AGYqzAWNpcLgCmyKXwzffnZ4",
  "key20": "5cFCBpQMwRFoAeRZyJ2vAtKUW63dgAsv8uetoiPYYtX1vce7PKsKVy1q9En9tJsMaT4Qf6BVYBR4zUQeWDFHMain",
  "key21": "2wRq7EjgQuJnnNBE6GjPuDSf3wJwe5gfuNu3Avs9X9az9y6pzJnLXMCFCrGZGva3nFKYfGRv2Yxk8afvhPUoLWuF",
  "key22": "5mv93jeo1ZCbkHGYj16Eipavfd5E87cBxK8KLbFQsqLhfCLB57xuLfrKSqBQAZdjSNmiWTC8J7RVDFC5G4E9m4iz",
  "key23": "JSGpauDgSZeWDSwGWjDCeKEhbAjfopW1onxebo5Hyu592qL26hDfcmBvNoJUC3UVw6v1d7wHGJUsg4KAjyYoNJ6",
  "key24": "4EkoD9Sg1PK3dnuLv86FhtGQ5DL51vsUTzzoyPeZjaXfeYQLYPPzqFJ2SeRkMcLbevnmmWyDbuL7Js9kXZji4tGV",
  "key25": "5VrfB7rutbiyX8MYvq2tptL8RU8L4x9R5Y2NKvzVErMSzPXQxWz5NhWEL6SupNG8o5G3DebLwbTM7vE6zsabbw4V",
  "key26": "4z8csAfTgDJjLPaUkDae5c8wPa3dKHeXFHguDGHiCdogC1dpprK5nGdzya7Fv3gacGRWgpE9FfcNrX3KHay36QUx",
  "key27": "9Wwv8LYKqmjdc2eb81jJ7LJNJeSVpyUgDwmbedVUWeFoiV5EzUpoTGuptYQJ9UXJXwzs1rRC7kdpWx4ppHKZRyB",
  "key28": "5k3rTdNCKTvB7QKQrbcPh1kRtaWKdhjewbSCv9mdSMJDMZ3CXFZ4A3rWztBRtouevgea9HKcUruRpeJcGx4DsiBc",
  "key29": "DuvmBoWxXtDok7cRuAN8hazegsYmF9EJni5suwvcpEPhrkKTmYsA4vVyN3oqjbWiHpHGghJ677RyTtwnPtcnHhG",
  "key30": "gJJd5SYRXmgkdqaiaQyL3J2FBUFp1w7z5cQZkbNMWZbaZnnQT3EAiaPw5AwLsPFjNhedh73o94j394cDEdL153g"
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
