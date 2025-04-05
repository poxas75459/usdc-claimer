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
    "2mRGDpKwg2gQBxGZVLjBHb1u2hhfJxoTB6vF9SeaZsg1Di4RC46XM2TBLQTJ8scM2bDQDAa88hCceih1Y5whu6YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDqRvoXkhYxRKmuWjr1N1yrrpDyB6q9o1JkGqCfEf7fXMrZwMULJtz9x49FjobXRBw4629YW9pSpJ4UAL4U1B3H",
  "key1": "4rkRu1NZ4XbQwehPHbPZbGLWYtpjAsx1Ep1CmNRkZnoYn65DBWSkGYWYKfovgSACebc64um8Bm1f1Ymzg16ukFet",
  "key2": "4twd7hdDGzMNdVb4nWYGkCdur9VVpvkCzzNHgqkHc5mQhHfZoR87wHYZ1guo35EwAeQupXhnWtdyDFnwqRH791ov",
  "key3": "vd1XhMGULfj1SMt29gQ3dhxm6HYj5znUTrtfsiabDBojN9hpf3AwnBpeRiktsUVARWycoeh8YCxJehk8gsHdxTX",
  "key4": "2UjjtSYCeWKQZ2eQrdEPFbP74wJGQpdone3tEcZC2XfRVPuy84eWdz3eVk7f1Ab9fNbXddkU8fxCq8qYzfo6bxAS",
  "key5": "3RCJ5YQoQec1VYZ19HEEhZFPPXM4gSXDzXYqjYvqxxPMagu5fzfWFv9Je9v58V1hZn9iM8JpDyhKHaspybpbbZFu",
  "key6": "5sDARzM8PdPPSRYoebpmB9kpbJo932wazwqzH9AoEH39UKGgX5gXTZ3WtB2bfZFqaSLWhhzCEGJm1JmV974qyL3K",
  "key7": "2w9hnf5AYnq3BmWrdXbkPCZJJCLRLFTjFRai64An71oQMAhDKbbWDKnipgjwCbYKxEG772eM3gNqYu6o253YrJSx",
  "key8": "4iaVYgNi2Wp9DSJmvTG1YCNhdxRQ9RZWS6TuNvjDJCjJKcvmfuTWyox8AoUUFhsfRTuP8zdNQNu6HjkGjJq3HNZ2",
  "key9": "j2UwuukGC77CL4tyJUMZqg12dZ9a8JB9jVx3mZbfhupqoskMxpN9ugP9DZ5Y5mdx8CgHQ1z7kywXcitUoUXqnpA",
  "key10": "juLiAG7xVwj6cf3ZnWzmJj8hSQZM2V5mHXnDhCz5uHFRm7B2FSSi3sBXs4t2iT6s7Aaq8JotoeVw6VuijDFXEUH",
  "key11": "6718UjF82rMdHSu2KHz2Tne8hCEaxkrSKAUJ1CL7LDowej2yLNLggfDTDapFbCSvfMcJi23wAjjsf68b7tn88jS9",
  "key12": "74y8ufjpDSajLFRBTjMqK3h2K7jhPnmvtmC9XytNfYa89EZ9csWstF44hWEEP3smjyNUyX8FQV4aPsJAF4pGkXn",
  "key13": "34DphCVjwPctvEhB7wSKr3aoQj4SMc8gj4M9929nRQkhbCgPdTsNKUGVokiwV8Lbu2Wr2XbYjvAsbtsqVpsZpUWV",
  "key14": "5qSi4iV5yJqTns9m4pH4yPi9SH1iz3WdkSzzwM465XFcmzx7LzhAXcEiT2P7yX34ikiPnUgzDdcWynSDVFBSwz2K",
  "key15": "4CRc4m64ZBwVWAnjL2CxrQL4CgbcgBb8c2gBffk8Jnzof2GCXtDFfCMkjrYsWY89tfZnmpsor4ZHjJd6oina95KJ",
  "key16": "21CsepZQXwrsMcix9EVffzMAR7T1gWhNLofV3EV8zenFPEbVdCSuzCqBnsEzSmHu2qj26XHLPtkZzTAhUNKhKshv",
  "key17": "2icGPBCE23MNgonhHHty3jKRs4QzfHyYVaXwys7zpXmC7yNttGfjNr1tDAfrkE4jdEaRCFKEZqKu8UWYM5fPUhKj",
  "key18": "4v8AtwrsjH9ub12PRDUJreBTMK9B5kbwH4DD6HMQowSDLgR6cqoX9hdctpDY5JN5TKXzAebWXPmTchVZypTnRnTG",
  "key19": "Rnh3oqnXJcCiHwfrM7wax2Tguw2UvhDm1xuMufL9HV7mhTsNc2YyKZp6deSNNgvHKEUZcNGAGiiY1KTz2YGaxaT",
  "key20": "4R8byQT2gtwrpcxUyDQuqgefU6VmzbXqdno1Wye7PCM3HLqdqL69XCEUGHkbFyXwwjKjX4jJWerXFQUFKVM4KkzZ",
  "key21": "wUNAASTxvVLdDq3GeK9fH6m3zMW9NZ9k3ZMi9XVDBPVsrm4SRx6KEpgeyJhzZqEk9z9TbvXSEdeWLJU9amApozt",
  "key22": "381YCug8LjPk6aiG1VNUkxy5ESK7w3dc1dNLFKQ2iJURQAen84fbASo53UrMGKMMw3vQUGDjVwNKCWKCV18pENoZ",
  "key23": "2C5HSWVXGEqRBcEDsnm9YF6BmsoXuu7bqqWScovK5fLuJ6v1zGFvd3DH8umCgB2BMpQescJtzSmXLYhbgxQYP79R",
  "key24": "aLSsjRArAFSqAzpNd63TVd36dZqmAGmAroQZEJTKMN1QeZEWEH7aQ2UfVzqnpVmGejXVnXCP2EEzKBBdCcFb5Ng",
  "key25": "4Nq6BpScRxdEmUGsm5YcJK5aaw6rmHZguFUoQkXqMzQAPiNb5t1Mrg5Vihr3un2QmKQqspYaJpikxbJoiV4nY3d3",
  "key26": "2s6W7stFQ9bSdZHRtUzNxyiVNYTZgT5Tz4CPxG423nAL7kBANk8EUwTMyjmdGyPqbmAqy59qKcE9gaTt6Tirevob",
  "key27": "uVJYkYW8fNKTqKvKY7qTF7Mnoco6izwW6MPaWND514xicA8SXZyhNYs6wHRfMLvvVWRypuHd2g992ngcDSkx1Ew",
  "key28": "33UEtXL9ja9TEjREmh8yUoG3cfxEYgfnC2DKwDtawWzTwgbBaDkCJcMrAgMrgxyceem8KFaSActJvAFoTkzfRGBC",
  "key29": "3gebh5aK85YLDVUUn9GdanhdMoebcDVpdigkC5TrGrYxnXyGdYqo9dZJcHtUQszEpnoXFZx1kLi18nCH5PZtzyis",
  "key30": "4kQMtMiY5iDqYpNPU1MQjnxicPRMSvUSrK6Wh8HVuUy1c4njBL1TgP8JuxcKQD9AM4hYEEW3DX4ZQkVxoLKE1s4E",
  "key31": "2fWQ5LM6R1PJwTVUq6JBT83TAKYsfPqgJwaAp7KhCeNzg7m6tecbupNzLUKbp1M8h9ddQxkyKuVGt4X4TwZH31Cp",
  "key32": "4Az7L59PAG2jEAzA4oXpBdFRRySBEsLJtuhCA1Rt1MhxGEKRoLdn34KRANBsBjt6vaH5wrSyDRmXdqCDrxup1MT",
  "key33": "54xLw6JYBZBTSnNhxvDSvfSoAaYtAfoe3BfcPqouVf3rUWYFRhEb1eBBC9cXbQkjNV4MSzrz53PThdTUdyJKasWZ",
  "key34": "3sNZYcs3p8pJGeWnDfDv3cSFWtwLDDFh696Q6pEMaNNiwGANC85SVkhLUjGgJTXC6ndCm7D889uzQQJAG5mAzRHt",
  "key35": "3cUUmmKT1Qeh661uT9hUQUmcpxws69vkBtnbjLJScB1iDjp8VQpPsSDX6TLnoedeGX44y2M8WCB1mTxScjNhH6ir",
  "key36": "2uvN9nc5QRferMrf3RaaNtLHo6uVAfo4YffdzcwPnxED9xkjrT3gbD74YBZw4nijmz9v7W1hZ1sFEcE98XrKsKVA",
  "key37": "2PK3SSXz7UwHmkXYSUB5p7C63UJwbM4TtJ32EL7sE3tYn3YdXUehcV2UbzSujJuCw4NnLr8FpZLF7VrSTcEFrXCK",
  "key38": "2sT6ggGkbPV1sEzbX5Kk2uRojJWNbEji3hFzc29Azf9Wd3mBucNyJbUXfdFxAsFRAzfQt8CURYALJ47ZvM5yFMm3",
  "key39": "9jCBSWM3GDoGGwGT9TW9Hrmj1mQnBfPEaRvr9FebqRgkxGVTVQBwWoU8LnSkNYPKCEZ36qaqRyDMejFfHF37bFK",
  "key40": "4HyB6Hdgn6VNFZCPXTzbkAFnPUH8aq37Nkc3wYbYhLUSAu5nLk3DYESmbpmMWcuW3FU1neLjyYXRyaR8r6hBtw4u",
  "key41": "2SqJiGAxe6d8fPNVMxL1oW5BCTFZk6UPtWg8Gv5oALdk9C3Tz9kzWaSfpnx2yqCuvjEk37M5hkzLgMhzyP5C8adz",
  "key42": "2YycW8YgqXKzmaVsty9aJdBVdvWffcNAZYvyAgdKbxWGNw3F18RyAPyLi8cbhcaazqxqgrmm3J1Y2ntzXVYmgE9x",
  "key43": "4xjmCM8XeR28VLXopFU8tkf95SNkqGdUhS14QRKa9LhyN51ZoGR6HuWxAMMSqu9BmGv3QwSwtP5JufpxALkVVZgJ",
  "key44": "4sXn6NVTXpULNc5g9G3V8V4BDeUPqUg9y2CH6pXPM9DSuQt1EV8eETwHn6D6VCMxfQh8RJq3Fm8jkf9PGjSumqth"
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
