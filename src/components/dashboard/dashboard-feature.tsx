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
    "xatpvXPBqYTLT7Vxx6q9QoJx7nTqZdQL5bBAhGfpYVnoALeVXyCqGGsfja2WvBgeYMnzfbtND18tweBCRtjAkWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7EoYPBTUnKfPz43bimvnYrGHBkELrSvawQmf2p88ZHkC8ZGWcEVeT8GN6PwaVBjbuQpJdSxcnqY9yxgch9oSFx",
  "key1": "22nurgALmugi7BpbQCifWB4HudNR8m94RaJeD66tWZB9ofyWua9HRgkAPaE1SyTLTZZPkQHGPqbLr5qLE8voaPAo",
  "key2": "tbdhciUCoJiJNvYZzezXBuVs8RVidYvnTceTX18B8GPsUKQAiWDLeothMmChteho6GQMmCYUA4bKwqqCzVqbkPm",
  "key3": "2n8BtuJjgbfg36Z17VBA5TbNaLk5ouxET2NGCYKy9ExGkL7TSLdAqiXzEotzGq2ACxMaTjjYFLZamx4UDt5SK6Xg",
  "key4": "5u7wxwm4FHwTuXn3winruUGLCj6w3Ls2GkknArEZUvCEsehRZiAW9qWNUkghWbYnfQV7Uhb2pzhXcXShAx6fDvuZ",
  "key5": "2uMS4DEEdgEjKSbppXp1gew7qSXYndxuyAGgJcnJArZesYTDjNN3aAiFpojt2Eh7TX8rnbq7XFwM3EtgADfNhEeU",
  "key6": "2W18CfmtkKzVBHB1rtsVwHuVe3yhJ2iwsFQsrKciZjr8A9fw4McXkErsxCnty2sEDFb4XmXuLn2bYMgxSpne4F38",
  "key7": "3XnZEP2HpQD3TDEDNpJS8C8V7WJgiq6M83zGnm9PndwUfGqts4ANJF3kRQqhWHKWZCxgi6muKeaewrWQtQyaPZcy",
  "key8": "4EDoaKXNSZzsbzJWJRv3Z7PHLV3mRL7fF3o2nE7yRKSZMy1K2iyL1w3KNxG82K9S27M6n2Lr7TNMTW8oEoeBzx2h",
  "key9": "5gzjDXS59pC1yFYF6QiCriu3MPGAdQmLybyqPnwfDrvZvSp4FEUkXxGMgmacjbVygC3RnVFr4FgpyFru91hvw9QE",
  "key10": "49LFCBBdarU5M5c69FCZEW9U3Bc6NfXrNcJU9iFTGoCJTnETTeiBS5bVJ9fZatFJxLve4JU84b6Sc29E2BfWrprw",
  "key11": "2S9R7SEgZUwDSAzMNboHn4q8q5Agyq5bN62hPfqiywmvSiJvuRmrThsCnJVWg2YK1mWRFFpkDQ38R8XdZ9fPqbCC",
  "key12": "4d86sRj44byLi75XJyQWKTjeqHNArpspNZTJ5W5EDiSQX66cU4syQc5HceqhixTZMUy3Puwtubb4u7PupLGMbCnv",
  "key13": "5Rgutbdzu2xd7QkZ14CZHu24Htrm7j7LVwbYFBKKtvqiwMycfF6wFWq4aaQ4hYTyAVX7cMTfaWxJrUcVR7W4UNFd",
  "key14": "4PYUyGNUDVU6KwN65MGuqAax9Zp29iER2Tn3fYzf9tJX64mrqZX5XHH4Wj48gN4tcXADscYhsLkZ86zMUYe6u5v1",
  "key15": "3CR8k1BK2xiN2NjCtQ4dhBhvHkSoyVB6x1HhE2nnbCuqAkRGZc7bYghruqBkiKWiyvo2RMM82ESPkj5PheuwHHHE",
  "key16": "5BaLdSkczJF5pRHYQoJJZHczmcv7nXxb3VDsBYFqNcQiB1wr91nQ91F7w6oSRp59PG6axbJ7dfNgpqn9fn7aBvFi",
  "key17": "67K1nTfFmpMhtcvEM1pxRRq2YcEVNb9jM9dvA9YXZ8iZucWBTTyf7qt9SCxe1foSy8LywbFvmjw5rJx4Yei6YWax",
  "key18": "2dLd4upix8DRFZKihwqZcnyrcGR99Vpcirgu93AFGsxF9LVnXcGAeibBntPm4DWVTTu6rw9JuGXcyjsc8Bb8rKdP",
  "key19": "4Dk9VVRhY7CggHGozqEVtd6Tj3zeiDFV6qEQGu2my9npWG9yDoN89SFXjDkqHdERs9DoA96ibSCfsP5urHvWAh8S",
  "key20": "2JjXobYULYbCAvJpnX44vtxTvYjDDhCZ2dzhYMNj8zBxnXmX61ZUkgSJRaJLPURs2Tnz6N8PrbRYhDRHELGkLBeM",
  "key21": "Dv8ZqUabgeUuzbVywxhDZm7s7XwK1mYoivT7mBb9qcVNz4D5vTS6jTcf7txmB9qeuoN7XbQGPNhjAteLnRNq4ke",
  "key22": "aTSB2nvrzW7KYzJ6tE8rjYM29wVtu4s5Yy5GxgZEYVviPk9iQcF8wvnpyJiKMatfg2Wpxt4j6w8TdtN2CXqQ41c",
  "key23": "UGP1h5CnNzq2ePCDQ2fpnDaNxL4Ust9ppzgtkdbjVBasQ2evLskMz4BrCTJkS13JA3DVB9eYv2yPztabSaJVekU",
  "key24": "5k2HZxM4FnBGZUMkDRvEC25PyiECPnREbyGd1VRMKjosXeXtxWxctxgHakjS4NdjWmaxNeNAUTxBXQe6TqRzRmfe",
  "key25": "sjJyqJRSQeejCQ6jXKqwY84ZWmEfSFYaDjzVhBgGdeP1f3qX47ui57ojHt8JXKNLeQCRPkGom9rhPowAdb2epbJ",
  "key26": "4EZN7Qt36NvK5ESx21d2P52aJCZbziNQHUDjo65G1XzYu9X2HmxHioYSKdPtMgbYVB7QSfihyTsHPT97jgykH6rX"
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
