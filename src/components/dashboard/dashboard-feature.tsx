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
    "GD9w5Eyc1cNnMTNeaKSCkdJo9QWtataLaGwhMmdLirigsFyMoJx6CdrWjakR9fkWNay3vhJiKYFjdL7ULrvBHiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbX7kP91hdRK7dGMkCafLWLSVdwCsQ5o8L5i45mK2X6uGUf35qTGuSBnaF2v225YDDtaRZwnNy1JWGhsLoMK896",
  "key1": "55Qn4hpDS8Q5okTxvNnTgrMu5xDbw8bX8nNRpV54psxW283vqY2sghg5rLq6G9wtxuPH7Qwfj2CqH1VmZR4QLSb1",
  "key2": "3uU8wsTvrBh7J4ZG3YCUXWs9WZVaA2ZQvAR11H88ofAYd9YpFP3RnvrhmzRydztFm3W9mzKnqC4mnmnn92pM42Nj",
  "key3": "4jfG9q7EZnsgRMJn5U9xuyUac8VqqocsWeHeoyaaQtuVvFi6N9Ah6VemcPVGgsqvsuMwg2jEpaYVCp7Dx68KgByJ",
  "key4": "4qE6HXeFYCwKWcCSeXwYeLX9xLnwu7a45EJ13d2nkse35HEepCFAZn2wFTZuPYp6PESNmjYrLCkupg6BhiPN18NZ",
  "key5": "4bQyEcqAy7EVcGrzNYwe6ZAFuQaeBX3EuVHzy5eedRfZfnhVautXaDnU3ioxW5N6HjWr8gGh5bYf1Na1Cr8nGYaN",
  "key6": "49qqkweAb1aKQ97g3P2fb8p3wJXxVc1TwuypeJDNBQrxAvvhQPRRfmYGX7hnhR9uN2BVuQpAArGnc6xUk51tbt7j",
  "key7": "GNS3qxgStZKoYGKrxTLei1wpcJie3cyRqzwhUzGj8RWqC5eiwFvZ8aFdiLsq1Qai3v3xffHLGuwP2g1fVbS7ihy",
  "key8": "2zhd47omw7exEP4qZuaFWiH1qV1QK76DaB6BUYM3DJnRC43VNWZns1cSj58qbx6ZKsNgtYKFwDiBQsezhvvm4xDv",
  "key9": "5rr97QfRSpbeoYvcWD7yPcWixkTAZjDXoZ59YZKmSmMyr87H9wkQEdTJbLEh3nqPAihHzcrPK56FpCmebZg1vmi6",
  "key10": "67QkgEeMsuuoPGm8h3hfobsAbFhMdFxp467oH6itdNdUGs6df8RggEqBRuPe1h2BmNGDLPEdbNgsVBbpzZNeAXQW",
  "key11": "3nVha5GNfxGomtNpSSCaonzTegXt9U6LBDqFD1Vc9rS4NQgQVWpEwS5Fb7aDMcChK6iiCZN92F3x2wvQwsaeMc55",
  "key12": "4goReQ1w2QT4Y1QX5ksVXWC5ViQkumYw698SNWrdyhrD6kUvT7XVCB4mMJdQRQ1VYDfkh7gWBmdguX18XomJKHhA",
  "key13": "iwfM7tgwgQ42T48tE5cBDsx21bZTkHetkGED3padGbCdkjDH7viyiDCsH7vJuZqRrHaiDJxZuNjnJMosNkum7Fe",
  "key14": "2zxFJUra9Q6mm4byeuSYPd6QwxpbEjq8NKsiuzSLzyf5EvZcw943mD82hX7ehpPKqSiGnDQubuGgF9o3YSGrHn2H",
  "key15": "5fQQtQBDPUxfyUPhG9FsvkK6tFwtwj3LjG54wN5oXVN9L3ASma2ULLL5L5sPStKEvDUaY2bfMVvKSGBLFLvBGZym",
  "key16": "4k5woBhg49SXSWctQb5y4voTV8dfxHcv86yvJTEcHea3H4ziN7hu62zSDowfdHGpyZy9SSqupiXCTNGR7i9ox7af",
  "key17": "4b6ueruZFLWcNPbGXCFzKCfgBWC9NvDqZd5kTHQ6MLrKuwtV7xfKa4Z3in4TDwxCRvYkRJz1FXvVLz6NXDkaivCU",
  "key18": "4HRQhj8ZzDTNuMdK2acu9gwkJJEwbMS2a5HRcuhesCcBq3XtkDswCP3ggxYVm7F1zLWjQ58VnFzRB4qrq6GMu2vT",
  "key19": "HSmnBrE29K9TwYLe58M3u3GzxgoWjf2evHNHcGP3r8a94cb1UNxNYE6GciHPXbSGc6VaZ1KrzP3zbhrEm4DdKRd",
  "key20": "2DFLw3JDCRELsEymDrCxg444vurPwukvWRWhuWe6JYPwieUWLHUhYsNwkFnNuH44vYyPYr7357pZKM4mwTiSZCJw",
  "key21": "AWqb3kCJYydkPH9HzuMhEs1Wjm2BQF6SK9p9DeswHe5HJ89XTBwpZGoUDTSKJMwF5Qw5ucAfmuCuAnYS9eMjJ9D",
  "key22": "3AE9hHHaRyPY1UaDnv9zw6pNL1g4PAcyUWnq1T8cHenp1s8AZrB6Rhi83Mvu7EfKC3ELATCYhu41av5B8XkFsrmf",
  "key23": "61WVV3MXZWKgftLb8e3KDaCigdPzbM91BRZB4osHggHh13CZs9HiWNuxj3bUghRC81h9K9aeeXRZBNJaMr9TkCKZ",
  "key24": "kgmUPX7wjyMCipgdYWm5dVuS5fFGVd3zeiRVvAFrDTQE5Qoyqe4L3QewvPW6wV7ZVRqoWPh7Xi3RQ27HreNgqzS",
  "key25": "vLaKLBQDX4uPEPvURZxEGcTQaZNDJw74Bkg24L5ieF2tp2id2Su41VbGu6Tozyx6g2tBGQzGLDsVqkGuNweXN1p"
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
