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
    "4DRWoVuEuff1MHpJBNkp5UtKwSCnTFihYASdk3Xh5meFPWDPkzN6xPrLuvEuZcw1T3v4bXmruZsJRM2sGw6HpwER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7e6mZb4qBoqBnBpVW1gAnKAVu2cgYEay8rpNUU2vgGDprWKsa7LZn9wiYpC6fxeKSdkhijc1nDYPJD7byg6uUy",
  "key1": "3nnK4YDbriomS3ci2HpbfDq63RZB3MD3WKiDA4E8qmnJZ2tgHe2Hs3Xm8De5JYfw6JpkWdVEHzzBLD9dixqvzttL",
  "key2": "3gWuGVuabswerfWK6ovonVooQa9GGprG2ZQBQfgk5XhmXuTxrmz2D1K9gX8JvoZnaUQem6F3xhkSFkCoMxTufPsJ",
  "key3": "5X9WaGXxpRiefFgnVFyA4vgKL9QUsghcTCNDwfrYg7n1WuLKeQCkVnAdw5y44RQH3XmqodHj5XJroHm1XfiP3FR8",
  "key4": "4KHcVjYaBuYeHxB5bbJnZbrfCNR9B4rRmpJpF4ReAk684N1Djxe1abP7ThDgDM1LGTqxgX6GVWijyZvf3waptyrY",
  "key5": "3om67cMTj3zhqU5UbJoJ5Gq4Qj1CH6pxefyQusSkL8HLdrBk6bogBy2bjFKfDaBWGQVP2T6CAmAozWH8njRwEDXh",
  "key6": "5WW8tTtW67WQqwvgq9wYhSY6qF7dMT3nG8a8huPXmxL3wLcjSYSn9FUnMrgd3b3YNDiokTKELi7u2CWkjn9Bxb8E",
  "key7": "XYNFVaojyEQHbvPrXK2xVpq8S3QAfKL6aUkvsbxbXEWZA5U4pKmaAb9BscxxAJkuxxRokR2qP1TPdN4cszvbTM1",
  "key8": "3P2oVt9V5Z7xDKEYzCVqSA2PV1p93zE2oVW628vshU6jk2qE5JA6r7QVs1XgxFMgbQMrwZCjWfuGupNbVzoQ8Aja",
  "key9": "2JaSp75CnQVranRVtjvS7A2Ma4DH5zTZ7vQ2npRTxXAgzNLYt6VyPj1pPNgmuCsi4ADJRW96y1TUaFUj259PEcTN",
  "key10": "2E9su8tW3huyzgFkWj7J1RV93vw4ZYkoMqoKgMWQnKPRCx4bhA7qCL4PUMXcwUZY7yeN9Feh1xi4hr7DoDF79xXZ",
  "key11": "571cDPbqqto7tTHPUEsS9dTsBT7dBt9gNC7UfLxv7o4EsCj9LBUgXttxHZ5hTeT3gZmT2dWKRbVBkQpfVPxX86PB",
  "key12": "dxDrUk7ML9gUWkGpuPFgcJaEUwHe1tEGVsMQ89N4xwmRghxWNKb9FV6fUTiwb56RohiBE8onDVK22ertm9CC78G",
  "key13": "2PkhcWJo5gTSw94i281DMsdrk9u4qkZwbHGaGyqrWRArmk8WhuCfrwdNbW6xd8j8QcinZMR9DxFPL3cLQTj3uXPh",
  "key14": "58JTHtb17g7C7dJwW8Pbm11Zxpnz9GJihJjq6g7eo6vh8fgCZkaDCFoaJVCWY4qZ7vmCCHExWdwb46RaVcu4npUz",
  "key15": "GqfgPS2qhSHrZ212Q3XSQgeqED1GHMbmcvxAKwRDr92qDMsHUPx6EWtG5BhxWKnY8vHu7TWyYop4Xdz3fcrh58n",
  "key16": "5Z16ZTeyT2k5KfoxXVbPL9rNnue5yLw58fpqbQz89fW4xpkdsxKHcMbw3EkW172ThqkzTxRuQTkyyvRjnmQGoKPD",
  "key17": "2yGNj5NHDvPQXDb9a5jbBRznT46jfrXPTcGWLsf4W6cmNdu8sZGNxRdXa5JaubxB8vNCQQcz6yCDLtez9QNX26Lz",
  "key18": "isVonv8mtfimXBk8Er51bfqXUv9zNuSfvD5tHzuTqTUYkf7cQ8GMrGaPPe38UPAJEpiTF56q2kX7QANaQppbjrY",
  "key19": "3CsuSBS7AkYGRgr2qJENqQ4eaURrX6DsNbCKA9QaSxWHGbH3gmYQjA21E3V9dTA557vrPr5tZDvecLB2jA2Kgagz",
  "key20": "5b3tFof26fGYyvQxbEDeJMrb2J93qmJmtBA5qkpGTvacbWYMP1xsfvC7M9PhxBYQDwAjHW1zQV6SwJ8hozZYLCGp",
  "key21": "54FZnReT8ELjDDorVQNcivhXmU3LU1huT9ztHJ8nSNwcmjThypy2kccyFoYRb8Yq5ffw1zLWKpYpJndkL9Sb1Swr",
  "key22": "4qxNpsEB5bYDmiKdEasdVMYyc9NVwuKBVotiQKJo4MyKYQZ2RLix8zCxVrTomFsmtiRWG5D2hoQcx5D6cZW1Pmjm",
  "key23": "2S1PuPtehPfapsz4TQeXRsVjgwbNtQha9KKPCzEdXhgbyphnYrKk9WG68MhHX4oVqwQT3fuXteoGbPqo7YDjJ32U",
  "key24": "4B2NLGD7oVPtyZEfEpyEeXkExUBtUeYyKtX3KJzZeaGSmpTSfK6Xjf9TzkLxf4pZ7ShzFzVRxYSCW5t4PUq65VZx",
  "key25": "5PhB9nzqQ1kP9xiAfiCdnoPpvbcma6DbPDNaZ4SDLwTX386HbVPuAu4zjB6VmeYnSkTyPVLnyxNGx7amaGhCmora",
  "key26": "3ypiC2cGrp6V188hPYWUZ77mg2EDewZqQLVhF6iDBikWk6rWPeysrhW14GR6d7p3zMwRFuQevmWV8chzKHDr8wgt",
  "key27": "2CwQjJbPEGnDRN6U9pE4hvrXhFWz6vK6VmEGqZ1ATHdGfvFw7kucjJ8TAmsD5K2cJ3ngV7ihqVgGLt9P2jW57ELb"
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
