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
    "6mCojkBaXLqcuGyazCfuP2VdULoYb99iohqBYowpMiRxQ6ew4JEnJAvSfczo2LYhpVXu3rFh42qw14bmpjRKFtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r14gS6YpcXYi7Nbi58TNqj6XVxe1eDe5cjXYCdq7zK7f774bNt1SkucLa7BMEGJSVjwfY7BXgLsXmiQTEKm1ohU",
  "key1": "wanZ33CRH1mNnJsUzJxnEUXjfGDNGzSK3sL6V1QKyZGwF8HLwGXWcQbKBcy4bm3nQtWUiUWQJ1qWbaW8RuFnqnm",
  "key2": "2HS51Z9zikMaXbkEtz97HDtBoZvYGQ7ZxpAfc2LSwwSNGg7ZzANStfHrJNoGkCeKbkXqZt4YcY7g9Rqsg2KfKw5W",
  "key3": "2fWRhE9moxYa8X4EzTtHFPLzoRtMgWigETwgbwB3kBYW3A2U2jEB3gGYQD5VN29h2PnM6YKK5jrYBXbgfHAKrEDh",
  "key4": "3xpothf2WKefNuCMswJz3KAK49GVUjcLnZfDpSz8JZ5vwfEjvz1VkfhZn6w1RHNz6YR1e9wruaaBDnuCfMUgX8Yf",
  "key5": "52744aYrHz8nbhgriSpsoxKF7Kz7vEZ9PueBFVTZivCKaXZwcg3D63LpjpPWhq1qaqFAfeBQeA7E6ddxeEqF7WWP",
  "key6": "44PToL3xJKFsQnEjMPmonB9vmaGPvbfxhNBhbNs5e5nPjpK3G62sorpX2GnNEWEdZALZKGq1p4GsVWCBV5PunHAQ",
  "key7": "Px6hjQFFRc3Fo81i69V7BzPvYYJZkGpENdRPfSbKjSVuCwbPDaWiC94ohZyWBH29G7Wsy97xWSYN4Kbgf5pXskx",
  "key8": "Dah2Dxb6QQwrYMvarKo7x25aND4jJFaXqrfVZiuvUbZAq6csr5GktuXwkCameeyCWBfuHDvrp6PkRonqdL7d2pT",
  "key9": "5tCsoSjRuTQoDkNWuz6j9v1sXzNicpLPCFEh7XxU6o57sjscxrshrEkBAYeSu1HcpxT4q1N9hp2oC9RVFtEWvZ2X",
  "key10": "2bVyPbs3QPqmhsKakhzw6UB2uCdEs3Vg2xpapjxp3WekfeE66aveEoFz6C3uGCpeMDMT3mb4WGni3dWx6N3Tt8Nm",
  "key11": "4oZCBD85NEY5UBcMNYVsd94GUvs5E9LBp4Z8xzuALwmzZ6QB42mnCU1fZ8vbm9tCYTLhvJtBx3YSTbHBoCdzG3Nm",
  "key12": "HJUt8xkLnJLSb7DebEXsXBgPaeA4poNRgVn6xPB7uoPrHrAHy8Ehn1Zxy4YLWaBguc1CNNYPX8xrXxrsjWiShcf",
  "key13": "fTNP8KUcGBGPZJmWifmMctvQB8HzowrB4cyBzuvkwVLj8WQw6WZhySsaFDeP5UMukNxZEN3KiDAdRoG1akYx2qF",
  "key14": "pVXtYx5rZgM5g5irKzmKW4stPyXS4uZgTxjZhQfDtksFnRFyuzQsJPFWayvKacEx2pfdU1rh8Kd8neEqGL3bh5Q",
  "key15": "5GMRKdyZQNGMb1mELJpP6yYbdRseEeD2FjuhvMNAoxoSK75cdwrCDwBGaSvJNP49Bs3pwbQM5GbstK85pj7cfoA5",
  "key16": "3NJYnTG1cRzs6YG5L9tHVraSeji6pc1K7iWyVyWdL82wrgp3oza7GqJTrDyvuQKzDDdQddnNjQR1dDqc8QXdKnC9",
  "key17": "PAST3XdTi2tihJzk9VsfSMsD9eNFdRnYYBRiZD5Bm6es34m93SzwGLE5rw28WY6Qm29w3UqEdEDhHxTV5pVJxgG",
  "key18": "3oELn7TaiZCpheJtMVjS43Forcq4JSSEvf8iUB1x1xamy53xDTRkipUs6t47t7bbSYV62jYwB2nhdPKj2m7p7gy8",
  "key19": "2t6Ea9yiPxhs5CWPASqc2sVaX5Hor3r4L5oG92QSCs1kRzSEkqsTe4sg3URgSnE3RsZdQCaJrSXcMC1BjfYNP9aj",
  "key20": "AGxGEnzcXfxWBgU86KjR7QRbRCgCuYTgxxyixKSK2LUYt2icMwswhNFQeD6DRyzHYEQu8ggDTrgQz1Xiqo9sHFr",
  "key21": "354SWwqdmSEwG8nbDxxyAYJYd4kzBq2WVd4XBiVdHy9azXaUPF8tjggg428fweT9SwnUHrM3HWf3wguQ98JWb8jm",
  "key22": "4qb7edBJhNbzB5H4iJj9oa4oRh44t8MJcX8dLEoormxrscsSfqt9nWw3aZAKzn5BNmKhHRPtxLpfZLUChHGfb2Aj",
  "key23": "5Z8kJ5wHiUKGbTsHVfhdvBNNpyZsAX9Q8JgLAsSshnAsESjJmWxHbuUtNHVDtDAJPYErLetXtEs7oB4Y6EMYRYNx",
  "key24": "3nwy5pEUT8XrLjDx6befHxaT9xgHQuRVU7NQi7Mu2i339d9zesAAPzKUxcNApRaPkQzpxwaNrFbzy6bk3nvvNTgn",
  "key25": "4BWYoAA8HgLWuX2mGPLCVFoSpceBcGwQ5ZkrFED6yyfRxS9ace43bJAXoXwfZchVP732qAyYz9NGqP284XqUc66Y",
  "key26": "2Zjt973TGsRNsM4pvfvZQomoWzDfJh7m6vtPjq9nqknNqh51wkAJdgritxbZavmAk2hm9TE5Ybyu1iifmaak28qV",
  "key27": "3NQBzKmLtooghNquV4npTcdHDFX7R3P89sAp7Gy4WXNdoeGFRXib1mMHqrUQhFdB9iNFMRMwQqhhjJa9GA6bTau1",
  "key28": "3v1nMbYmfL1QwhwGRVBG372bTV27xkfBmZoVcVCsiW5ktNRCQkFzC1rj3ehkoXvkzxd6nicy1aynALmiYkh1frbN"
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
