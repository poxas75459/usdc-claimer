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
    "pbtJkNB41fpqt7Da1eNjdAKQCE2bcu1NSatFTgvRqJRnYY2c7Jh8k9ZEFGwf9C62d5wsBVTm41FiVuuoU7NcW4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wq1yMEpXeiRF8aAZJNpDtiZSgUjJouV2oiUBcRMiSMRUNLDQvBtvSeXGbvkkQh51MKcge2qgFfVvNREtbNJghQ",
  "key1": "49S4LCs66qhHUgGbCY85EaBqouoNobYS6vCtnMqzxc1F81YoP4m6esCZg9tvuWJGDVgiF3RyAQKs7NFQwQND9yM3",
  "key2": "AtawwQ8guMMod4rFCirLEkYPDLjbTuq2R67WrixFNpsLRZmF3tPnERYW1a5fSpghRHZeeYvoJrNheotoBE9gzr9",
  "key3": "2QL1fzKjQGTMbMyy9rFcgCNimTqP5BbwMXaL5MtEEnkeEbvd1JRyZEkXBfFdjE3Dqt8FTiUW73DFtnWmxxmv679W",
  "key4": "3oX2Tdgzsvem8g8PqDCt5S1bbFeSySmCDEqCeVANSwW6RvbuEv8JjZuia4Ttfn74BztHVZZKXcHMEMh9xFpycDad",
  "key5": "62UfBvtptGDtMZUsnnMhReHCkMNdYrXrsvM1pwJk7aYDYP9QzaZjCeGBRpZTchsFiPSfBi8kNBa1XhJTnfnH38he",
  "key6": "4eUCtAzWySZengAU5KbAR83oo7XM3GzMUzxEZageyXiVFkPDJAYj8BiUvsBhHm6RRTZd24arRDxJtyw52jH8Guuf",
  "key7": "56Eu1weyVfHN7CukYjhGBWnwmSfmAvtg6HECGguBudHgXRVtPVEkBfE7U6T9vqxuFBNSKKDDJEt5b3wTwwDusnd9",
  "key8": "5fzgMhrfzHoY6hxPb7qxECNDuFXWjjK6iZpUMFKc18uvyyd4Q9JnsCteJvHshc23sSCsaRor9tMfqGgf8J7BJC8u",
  "key9": "637N9sUUfiKGadJe9UvhhYu2dZFH9Vty29JXnaWuKa9yZrNozDEYNxUWPiimoVCBbDszwkMPAHXZf5BQ6pZ2vkQt",
  "key10": "5gfp4RUjum6oLEttiDmpBcHgPQxcsdfiL5CdnbUhjFQU4HU5BHUe3JZ3WssYcmRpsyfLPTm5Nn48TQQQsJjE2n7v",
  "key11": "3Z4yK5WmuivvyeqKDRyx1h9RNfsNq2TgLX5Zf8MHANrNDfDisUJBhcLDvnLUNhMxYC3JnoV3ay2aChq5NPH8oZzn",
  "key12": "2fEUj1rtQfzWzZaaey4Q5hkxL3FDKjnoDVmJg8qEYVWmAnkMrDBbVTk3sMHSPkHvjhNs933YU9gksh1yBawqoUcN",
  "key13": "3T6UYNR1ieQRkAg6SBXEKt9yc7saC6eTuCDFS9UgyA5VVH2xvQLxyanPbGz32ZRyrpKhAhTjvjrTJoSUh1fdxGGH",
  "key14": "5px5jMR88tqJzXZocVghTN8bfvcjwzuyuQQRAS6cX3kvtWtHz9NGttBXRzckdGopr5njym5AaVQVbfisbkVxhfGx",
  "key15": "4ptytM7kot6yvPeBJjrdUS1DK7ZtNLVQxM8ggAL4WkmgcGiLu3eiU5JDMw7QKMbH5QRMPwJbhPGxGjxbKRBJBpfN",
  "key16": "3ZVuXc2AirXCTfvwxp7JFLHsuLM7VdhaJ7QrX1YENBiioM8Xwmc79j7BzszyRfXcH5EywcuKUskA5nnzpvvoDxQv",
  "key17": "5wH6QXR4fCRcEE9YdyU5ypoJnU2LTJzkGNwdq4UmeG51MoRZdCyEDFZUSpP8QGffh3HD8N6Bjg5A1pLH2aRndtCd",
  "key18": "3CoSyhkMZfUgbaUqTDRPLckyTQ4T194Gr2Hki3Ep4TAJRaHrD3wVTnZBmC2JhCfWnMusWDP2gz3pHeThhcuSG2gU",
  "key19": "iPez456wMUu1A2UViNjQn2xvT8JM7Arz7Tvr1YyiiWouqseoYPVzFSp3mmkytSFkJ9JbnJLMG5CkyqZfeX2k85f",
  "key20": "5KUQ5nWFvaFGCM7ZU8gqLfuzN8FpCdP5MnMuKyPQeeeBytT6ii4YmLGCo2zN6GZWWigMjqo933zeFJkPfr97ewip",
  "key21": "AC6iynCkW8V2gASSusSNdqWnJwLrpinmgDUcVXyiX3mcMPGKh3KnhME1KC2B71gacE75AShebgaimS5NWKNN4Pz",
  "key22": "4ytfqRNScUSX6u99DXQPyqmaCWpiRSo2CERRxdjvacqUyiWDQGyAh7sJNbb7ihVfvpfh2r68weDCmrv1x6MZffFU",
  "key23": "4pmWe47m5c9gtCGgx36HjcaFSaPKvBqbTRWSyCfkpCzPnbys52vVWHqaTcC9DRKpN3y9AQa4FSDQM9j8t3Kd8aMQ",
  "key24": "4bmJLHVWb4jaWtbGHjeTPZVV8oqW4RH7CDn2ecfXEFPYP6zBAuQ4V8MumZNxoCCw7QtFs2QhtdNmWnhGYw2XMneF",
  "key25": "2PBfjqwCfj5w4rq7yYF6nLhS793Bm61pmseaJgKMgEym52bPMN5FmBEPToviEvk678Wbf9kr8kVDtAejxqUu7iFn",
  "key26": "2DBqLscWH1gDfCGt7CjVDNinNUMQrdBrBvwxj5RWnUj2qWTNpXNQHw1VK4Pi1ztrh66x6HD1FEG3Txum8GN3RHXe",
  "key27": "3C4ePSqxdHkASWiDYLgQw3oh2jubeDYZbryVH8ds8kBTwcArEgtYwf2HoQNBMUKaWC6KdrqgS8aBPUUDMfzb8hve",
  "key28": "2vTBafM8A57RftE8QTzNpc1cUtg1ZTMFhUcKbc5iM5kJsSSjbzBAHiuRmAYFYcT1pbBBrZfeFf7D1KhGp9yXRULH",
  "key29": "SEyLTuZ6Mgajo8XjbVYUapAsibRHuRq972yGCjMZjgGrQAatMNFWUWcAfA32yZ96wB2LcHRbVjiqJEkcBjf5XPX",
  "key30": "2fa6633ihhdHDJUM3td6L5zL1a447mped4hMgezeoLUh55QfrVXCiAXAysvDpQ4pCXsomjuKppsgThKieorhpER",
  "key31": "2U321sDyaLwMXNDp2Mo2Xydv5DrvH8Dk6QtteQEzZ5Fq5ZXatdEGSGBeuSs56f41xKyotWiy6bJenhpoLgUgViKs",
  "key32": "2uH5Bm6NaXFz6USoBXKkUGhEmEQrp2vKNywWqWkHASY213vLPhRmTbwd1TbQQgKMewfonfWTvaAucMzd8ojEfunV",
  "key33": "4Z86bqGLEu6sxGY5kSqjsNLxGdWxP9x75KXBVyDHLQaHBJ8VtE5cTDPevFok5CTsZnXNLvpWtZrZLS4vZtbAoF6x",
  "key34": "2MEeb59k2TDY6n6ELtGMnTCkc6bAbDmFYULLQ2gnSHPcyQaMuqaZwXQ92imQsm5raSnD1KksAt6gNc4tYBiWrPpG",
  "key35": "5nhyzFESFy8hsbKswTvcgRS9UrDaa7fxRcYd8chhYyu7dwnUnjC5HiHnJWezYAUXSVEDnA2dUUqSJBswrhRowsxK",
  "key36": "2npWEnGuBuz8vaPqPFPRr1PRbYQ7Yt83VorPLc7nA1fbyqi4tHkganGdzquyc84GqpNoppM9CPmCbhJBVBvaWLCa",
  "key37": "5byu5CrH44U39uPg3cabJzFabYA77eV6pQEAJ4jeT1M6XZKa8485GvrzcsjBweJ9nqHcbHuUrUfGuMg2hn2tangc",
  "key38": "2u1jkTu9dGSsNDB9WwArTbf2SGbccCpaWm6vZ2637qiAgDqqcJ4FhJu4DGE5u2pvax7Cbs9UbvmpfRbQgDCD8np2",
  "key39": "53dZ3SkosXmQo4LkP8EBRoFPhixX5k2cPxvQNgtJybirXqqBEqqncHs1e1WeMR85EzQUNjLDvfS1fi8bpg6ijk5r",
  "key40": "sD6zaz6trMuVjZg4PjkPYaibsC81mNjcWtpTZEHveWhYs7mZDPrRbi3oQ2H7hz8JVJHDCn7rR4BuVfAokoGwGTC",
  "key41": "2zgQDrnrJNZ7fpBgVVvdMcoos3iunHdnfhrPewmjjWS8r579xkKenz8CqxPmGGqCHmkocgvXaEEK74iErcgixFSU",
  "key42": "2yJYn3vTVS7uNQqT3wErVuVVAbbismaanuLLoJW92QMY7Jr36mhQ2uHRw5JKCSTcS5AqKzCgQSw68vytjsp4uPzT",
  "key43": "5kyU4yLgAoygPVfgqvGcqYmXz2cpDvKCj17VRUhhoznPPZrkPFoRqyXSfTDUgxX3DTrKggE5uP2jWCHpTRTpj6aQ",
  "key44": "5gqSTRzcZQz117tfVuAZZeCLciYWFUf5zUneqRVfKUyf5i3BVQzvonYkq1Ys1t2Zq8AZxVtPzUVdv6wUYwLAqhAx",
  "key45": "gJw4RG7b9cSEH6cMgZMaDkK2bhkkVcAp3pXv3WYXu76qW1WPzeoiXaPYe22CRmoMmeq7vGeAVTNcQkQtEj6GE9T",
  "key46": "3z2iiMoF5q5k3miwaBLgYNvP6xMkvw4FRzPmSQmB4gMjZczogzwCJdTgWHwJhmQdNuiL1vsouic5XoCDQaMc5JDB"
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
