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
    "3ZD21jP86GpjyB5Rwj7o8R6eG61GjSaedJ6hhkja8rXHBitocTNEEagBFj6NGFaUpjacuY8RqBrmoevHk3DBVwPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBwvmUFh2xHTNQZN8ysK2jwsqUsqYDqwD3XKptczNRwWfpydDq7iiEjdUUrnK9o4aVHAQRFYK6HBQnXya4jzka",
  "key1": "66rbUZudvA1Tm8AbNornBjuTNQa4jN8R1imMn6HNCmSV2NuePYirCpnhvxPXk8dyHVnaNrMXtec8LmT9tmbYDgW1",
  "key2": "54bywmBzEgK16VrDvfBW3x4Yxue3TyEJbhtFbfAHhqHhBWf1miBuSX6gtkkwzLhNQv6ANR3hkXpi2tCsyN2rQww9",
  "key3": "P6fzcZi4VZVcFqSxMnf4kCZGzsgq6huJ3U2drkh7biZHe8rKb2HAxG2aFkzzqSBEGJsVBUAXQuLtNMnGZrQ5vFP",
  "key4": "2s5gM9ynjgmcegFbpoqyjEMAdqVcLKyz6W4zsVd9SwzfRnSABdgdBhn2nWvVt9tqwqxt6ottKmpUf7yHvxaB5Z1z",
  "key5": "4XypRP3TTXuYKtqu2Ag5y9W3VZKeUhSqXVVvBEyqjikmnXvQDeb98u5guS9nwHidoAQRAkuxYJ5Yiug54xS6YU9f",
  "key6": "3TUvphxuHAYUpw7NjeGr8t3zQYasQSuwT3EVpndXsXgfhkUnPFQgFwzYX1Funrqxrru2rBpvKcchkYXd5pZXXJt3",
  "key7": "3raR2q3hMqj6sCieYMUn31xQkvZiQRijF5nMqgmQMpktSL6RSdFK2eeZo62Ug2DcN6NSmHUout8hNTtJB4spZbFS",
  "key8": "DjTTScDtbZoQ8oCCBpUrGnXk7uKNij79wtcF7zvo1MwkYMhfDpYFHzs2JjMa5XXQFChQk84GY4AiGgRxHA2sbdA",
  "key9": "2job4WTrw1s1rkDRRcspXrwHJQeEvfoFq8PJCEwaG9UYnieLZFgYunBSxaiGNRy2uDpC6vUjBKT7FC8zCiBUM2GR",
  "key10": "4MWcNsfYCse8BjezjG5fUvnnDHoHsAHoKgwqAqRoUR3xum1DhCSvzY7Ts128p1wjT3zFq8PXtuzHEG6Js4bJ9sHF",
  "key11": "5p6bTzxUX7PpydRHKWVZLwKBuy33yA1PCvB1zBpRwDibfZxZD4zpvRxU4Ffi8dzD2VJYthgmDeRmDdH8nqzK9STA",
  "key12": "2NQQ6eqxQ49c8miCUx9BPpPthbFTsEU8qwpLfnsXhZiYpFiDwUdoVxGbL8YoY36vAjbABgd4D8aHP6DZcGEpMx1t",
  "key13": "xAygpXj6vykmF1qYFmSBUmtrzCqLXMhtBwVSGGURSP2YBaPTMfHwj7X9bPUnevyAEoizPo73GhgK9vqSRN3BQyq",
  "key14": "4fdU9ysSsFSmJmMLcS8yBYF2BmiM4vTqz6rP6yrUrUXxBXhyArf26Cg3NZ2uwBfPeheaj2kU4xwrAFUKrus9eA3o",
  "key15": "4RmaFzXKg6dmagZL6oCmgvvdUtodfpbkahp2b9xDkwbQsBHQrNk43T7z3v9hBk83xsfN4X7kXp2hgWYagCNNhS9i",
  "key16": "37Xtwce66wiU9aDAMCRjZFTvC3PVjSZHR1TGMy9BD41G1nRr3KcusrE2mYAHWb3UL6eSJyqnVpYZsgq1GpE1zUVL",
  "key17": "4E3odyqMj1PYsYZ7oYatDsCtfkcL5YNDMKFKL2FxAgRRErsQtckApP1RF8271t6fEYTqQp2njkurXbFqVZjzBUNB",
  "key18": "cgx4fEThhksvGoBAJpDuTmGmFncJ8h5GXVweLVtcMZCxiHYwRS7gw7mQnrH9yRZAaZjA3NrNcmieViTPLjgUTMo",
  "key19": "3ixNAn463zgiMNXdSgvn4jwogygP2mxWrWA761qgcT2LwiVnjyiYcXJao2h94DjhaszpUuBNtsryE5sq5EA7YFGo",
  "key20": "2pPVUQVSYZhvvoZHvmTEiLbAnf4tbmqtUQEG7EHTTYPLL8VDc2CyPjcmnqoUbvVUoe8zmXtfFSUTp3SHh25avNZw",
  "key21": "2WC15Dakw337vzFa8WqbHehiJ9qBR7WABQGNt8jduz9koTnHkqQbcRgj3GZcUkqW5biUzoZPhsA9gfbppf4ipke1",
  "key22": "63Wbrwygrpi5ZMQhp7FhkuenFWxY4gzPJZjUNug6Y8TzNperif3Mcam8TRzDukV1QyuwFALs7bTHnswRJBFsnnqC",
  "key23": "etrU4rtGuzSRDgHxMTYa5mBriyDi6uVj8NkJerEfvHqrtJbn3MGTeWeTd7RjJ4zf5y5pa7HwJGYos9n5oirsDWM",
  "key24": "2sgFFA5NtGjKDJ3dCozZCrvYXpf9qnArMUwb6Lxh8R41iiTxfLUH5drWTGbJY9Mo6yQLg1XU98aEE4yMxPyTXyT8",
  "key25": "49YsifKfttHDHXf4pyFa9xEVJthgq6qPXSfRRWQHtXnpkB535Ui7edxgkgsUUfqdHms9YRVKXryXiFeqn91RTEk1",
  "key26": "3GsrEnwWKPkbQNhNYTviKNr4tUBAUCvRiHMkpwK44xo1gHzSwiXkwdqpiDQwkDAgTPXaamJDmKCK7dFVKgQ6RHJf"
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
