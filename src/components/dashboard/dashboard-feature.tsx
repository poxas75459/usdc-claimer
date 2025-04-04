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
    "yNqb8ZuYXnQ8XFKKsN4whK9pgQGNzH7DJfjgWfC6Dj1QMtguZHzJPz66T8siHT12Lio7yDFdbke4sHk4BjwbWPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qpNBzUhQcCYxLAWTTBNvhqZLj9jm3oKc2hP7JSrdX5aH52ACeBNYTntvxpKhX6uoWki1tczugyngWc8MRm4cSK",
  "key1": "4Y1r1oT5ueFGm1BJ8Qc2VKT9FsBibrJBRLgFNJSzpSsqrjUVXdZw4LpcxPJ7AWJcZajumWdmF6MSpTsEFR4RwqMP",
  "key2": "3B9tRnvLRDb7xvySZo8Dv7Kcrjp7MfNCBwbTbj3DodyCTKyrDmKq1e8EgCstpVSsANftt3N8dgTnYtx2vj8ump2C",
  "key3": "36oJvcPzr7XPoyV3t69xLCYeqj3iH6DfMohVjeU9Dx2ypX7pbmmkH8dJKxARAbefKVzmAD2d4PnUj5PBw2WsLsJT",
  "key4": "3HKZfDYKKW5WxAthmsFLTvU41j1i5Cu4Xftz9nfpTw6RSJVJ4bDgjrDdvW1VEGmF9KgJzTSHGd2U66FNfM9F4NYD",
  "key5": "4rFvjyd6NzERXdbmwafrzaxob1Gs9jKSTkRfNvCJd3vYbcJaoXssrNDmW4sFUmmkyp9pbDDM2ZMLQMJ6JsxLNRLp",
  "key6": "7NnhH5tmwXXCLGuhWKFaeBhmheG7NBQtRaGMeZiQhiZXvG732wBBFFqp2k5nt9vxdzQWnMS3gwFSMsp4yFaUyVc",
  "key7": "2ewxDJixmvp5jxDkuFGTEfdkEEgu2pRWJxXt9fgy5XdkUSm3Hn8LJGU3psawKYPdGMuvaSWLTEjV4wBS5gLyUhju",
  "key8": "YvNtYpobd6un3AbC85FVf9pTshGaDMJxyuNjgmLWpLuFVzRsKTkuBujw9NnETiwDYrxwZycB6y32vACcgkEpZhP",
  "key9": "4MkzmWikAQkh6WkPWe1xqtJgGNrLEv1HgSe6aQJKnH4zt54HNSmvuJi4hWDEchaqgcXnMRaV1dFcQhpQwNF7GeyD",
  "key10": "2r9cZSsqXgC34btD1S8xc4iGWtLmWhX7EafNpBDLmKknzgo6uBrfqKeMKhYUacaWR5eB6Qbh3Z4kNXa4CHpnoewh",
  "key11": "5YWRbbCqzr3GXVLAhJjTvJYbeAnMCGsDQb1wkiEv9VLoeuAeVhUPHJXG2xZHHXigfeTyNcQp17HQkNbvNctC6ZtQ",
  "key12": "5aMzVrReGhw1c3hkwji2v7XTwziPpvU74yFbaAMvZ1ZEcQ2KZPX7nsXjemr3WmvfhN2NZoh5hoZSGXmodXfH9evT",
  "key13": "5aoD8tpZzjczVV9xvteRQDAwUANNgfhENu7BXi251JkhUAS8wUzs55b1o1XpRzQp7BuDVss6HPB2gJ1bgRsH762p",
  "key14": "2GPfsu77GmqUHr4uMS9wKRHEtBsK2AJGasqDEnZQCKG8sPNtkgZv8SnYTaJQMoM4LDr4PvqW284MST5ZPcbcdaN3",
  "key15": "4YQx5gaiUFUK8kkMF3bpDx6e93FBZL5VRfKqogN9uGzXwwesA4DcYEX47fPiczopQRorATei7nJUcJWXL7n3SF1J",
  "key16": "3XEmJsK1XEai31Mg83CKNvWJbZhq4Gx1sDUgNFjxgFAso8odvC3342YWM5X73yi5fCqzdyfmwndEmhBvrHwCVcqP",
  "key17": "4ob2zGaHFc5EfnVqAMw6be5LLGu9XzN9yxD5ZpnvWMpHTtQy8H4zqkpBWDggJVsNNbFKa2nBTd7ob7jr8ufmfCYB",
  "key18": "5KCwYhzDAkjtEyRAAiwjLXoCk7rZ9T3muTfbzJrohVndqzPHob2uqhRea1QzYrb5XuQkRVrKmV371F8CFmxwxwon",
  "key19": "w2PvHdeFu9rJv2zALHAWDyaiT8zCs9D4ukL3FdtWVMKkgcjhU6P3ypxE5TTKCRHxYtrckv7BLjpJqnJKTcPPyoP",
  "key20": "4hY2WzxMjr4daXn1rrVjH49fjMgLrG5xzAFBjNnZiuaJ5oRUdy8M9KArHywQH2wAZ8VDEFN1G7jn442utHbxjafL",
  "key21": "33L2CDYHHJfmDSP3ciGminD3mjSD6qcdcYCCXjo4F381orZ3AakrHtibR7EM8Q2MiVLba2zf3zBWM4KkomriXaDx",
  "key22": "2mYK3bsvcPDwip1erNbHocDfW9KUBFLtsJ14R3KWZFfwZkY2qUvtUGJvxTZKaHRH2jr9X68zfYiNmndFuq7srfiq",
  "key23": "iKUodKSP1KzG5RYae3F1thSGmP98V2PTfgns3eTH1oSsWqtRQQRxZSDd8yxDDgX4tJKVNBBXPtNGmRHUzVJDMh8",
  "key24": "3LQ6WHtYVDYDfAsWcXdB3FSi9tASvp4QtUavGnb2JzA9jCERmVQfJr3BAPrB9och6kuRT8hihtZmVcqVACJsKA2r"
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
