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
    "42yqAtvhkZDLadutRQK6JQacFKQ5GnvJQqTETLRHXJj3ttm2DCpk8aHLScXSCrRb8VLPHT89wgWodZPKv5w3TqL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKWvu83MeN4dvHchC8h4jp2MU6iUQaycrXMp6FaFtQrA8snWsnEUNQv5CupLJaUGvAgWftysj8SqPoYhA9gGygW",
  "key1": "4XnGC3gSRJg5gjh38f4xbK1J18A2qazMSL7Aow5a9fxvXN8FkeKx82DKSvQCL8WNajBG9EafQLfbidWgjqittpZp",
  "key2": "2ddxpbeqxoJF4mdLhvuvpmoauz6wZoEksvyw4MZUkwWh4vrQ7U8tN4gRA6UNGcWUTFYp6xsmK3GALDMV1B6BitUE",
  "key3": "47RmLjckY9gaMj5DwTLWiBnxLtPhyoFvyruzQJHCdrY4SKfNDV1fYbERSJSiL2igcWUHZc2oYqkK2dVAxw87ykoY",
  "key4": "47zC3r2zHXiDEUw4sRsCp6yLKTuBhZwTtHouWLvquK6pCyhpTpXRHzgkj9UUnaiKKS57gGxriwa8Yk8RF2Zvt8Pa",
  "key5": "MKJxSb9PorFxmgzBAZCPrsgkJeDc76AipuZ3d5cr7Wr6wTB3VcRyeBo4GLsYQxftm9YHtQkQDaf6PkFQwhkqRLj",
  "key6": "4Hk9sXapiEvk83aX8mytu9xwBkxASLUigwrwY9BAvZd3bV45UgP3n457xssRiLNsrhxr5av7Qii77UpdbaZDwF1F",
  "key7": "5BbvhktfD716zwUPV4ALzfaCYVxFnVaGo26paxUbfschUQ5u8vfPrVyZD1W7yncW3rwKMa7o7pebxzFCkKgaorwH",
  "key8": "3tYEFMNe55xyStqaCWxbnmdUrgvMfFWWKM2g2hDqgTDZfrz8tNvMbg9Ay8VkUHXgABrozMBhKhnq8ZgtJ78Rob5t",
  "key9": "25qnyieg23Y4nvQHCQeexS5wnLvWgX8R8ZJ3xsg8XSwG1aXEb7Cq5NCbQCm2tsE78jjoEAFbtmSsDhMirP1M3Y5r",
  "key10": "MGQZ9t6L8H6kTEe52iavSLdHdam8ynwpghiJP1RBXjdduok77tG3csKg3ZhXDcrS92ESvYb5z4PNJfBwfeRCixK",
  "key11": "2EFqSbDCLtv9C1gUZGmxjvKbtkiFG4Mcj6r7iQBbS7Hjbj3XDmRvc4cfnrcq8ZjNGs7yYRXmjuHU9CHUnUs9Qv1p",
  "key12": "48kuaN2DcBqTT1NxsjXEM6WqriqiGBtnGYPT21BCPjpuCQF3YBAB9vFuRcLVs9ZcrNWAzgsmbiUx3H5F6s934UuC",
  "key13": "5CR3o4WFWn7Y8R8VB1a6sL5t1ehQPpMJCAHTFkZrjwYn1aS12xHZKjBJh9txfUtUkbWZMa2L9cSJZRzVLHk4vpjR",
  "key14": "66Xk3GisCaqKAMBFh3nXzpuGhvhpCiN5JfLdjX3jrVnJqcX84mi4ZbSQFNPwqCZMrUEsEcWmivN8eDKw5RcBbTbN",
  "key15": "64SptjU3qW2m2mzQF3ALaN6cs1VVBj2Lk7D2U6KSjBBjipYDD6Xax4MvXPByooVTiiKfSqQZyAt7qPN4MgTqbFPJ",
  "key16": "4VhPxKw2Q1Bnw3pUY2xg7mmhUvQSMZ6jWRwNvMWHz1MUrbSHmNMJK724cs8s22kyk3HvBGqojnfuBXbhaGcCNkWo",
  "key17": "44kxX1QyBjvYekE5SMaDJv7W3W1aQCh6LwaCL29pvSDfftTk1ZFFZDogdYpifmXqenhhyUb8Z1sRA9obM314shoQ",
  "key18": "3WUGYCUJdbzJASMupAfTKv9fcBqUk8c5wRaMMcdUXmRnCvsKa3GhZUjj89dmUiPtmgH61xeJjkmozAxPM7A8EnTQ",
  "key19": "WJRRhdD12ZowrnAd1gujqLfTboWaKpuFjubEigbhwuqn1ypE25VadcdgeAJkGqKUSK5pyqCdm4dFzqBR6wcaaUu",
  "key20": "4amu1ua4Yeya4ayNV42hAtgiS9HBEY5QyCvnDymC9ivWHd7ZSB6yyGC7FRtZzyFTPBcG9MyLDn3WkfYxYD5FFWvv",
  "key21": "2RCNkzn99NEg16AsfXpkaeMpDdHwAzmchBgNTNugN4h2TFyJpYn4X32nvQnW9AteGZagmxahLvx76A3QS9Bti427",
  "key22": "4W13ryPNfMSAics9TQ7E3VBTv8MAkQQdQZTWMayrDW3Lui3GQNVAkqijQzyHu856mZKtArt3992NiX6XdQmY4TAm",
  "key23": "4BQNsBKtkbsTsSfuJgW8Zn7oGtgDSgoZGrdaPVqiasXjw1XEpXmPoKdnan6wKagej6DG1j5gUe2AeoJghGgUnDkd",
  "key24": "qrmaKwqXLJCQyXXDLedW7v14xXNbBsLroWsXAVdK9KHRCbfH1yQ2NyJn6ntTTVLGkkv3AjEY9qgxoVNmJhgTNbZ",
  "key25": "38aYTUFnNAD4GSegHAczMBj3tfPoGudxcQKQjmgtkDpYeGEA9X6ah3xHZ3qpQW9JGsnM8qm1x2WUXn32tMjzSwE5",
  "key26": "4QPcJpwzLKjt6cPprPsUt9Q7EwKvNibv6UQ3y1e9HUWPXkyyPywmQ6iE9uya39xmX5rdzF3cHZX5amp4BfwRGnuN",
  "key27": "ardz1ahjWtk9D8rUfG1P8LnNXF23ve9xcNATXfJWQmSnbW1PgtgHuMLwCLaxb3CaS1tHrQiuMCQNzaDUHMvzuzT",
  "key28": "4gJeof5nxvVUS9nLHAMPTuRBjMrsEsLLrsHQdMg2yAGMxtfqwMpqKbZ8jCtMLQFWZybvPc1jpzRL9crpBF8qZf1H",
  "key29": "46HH5fMMwaXVk7xcq21tJHS3iZ7vYLbedAot2CfWTSLDvY6np84EC3igbXghcwBU9apmPtCe62F4bM6AziyoCzDW"
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
