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
    "etXHkEDKzU1gk5bdoaKJfpzrv9gYPHcLMQrxnv9waEZPrtadKHFGwU3fDNyxYYxmBtZqZHbMJsUPNvxhuqGdgwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLr8qbyFYuQyxvJvkFdPdA8iVT5JvT9dxPnuDWR8XizMsXwL4DFKpQRmigMthyWYTdXPYfvzFJ9R2dhwjoJjYAs",
  "key1": "2JtnWa57ehxVvrpiJWCpXUZswysq2DKLooABMWRxr3Ee3TY2mdFRFtaNkZC9rcCTrvSmGTTUnEWG1GNgwQkmZpEa",
  "key2": "3s27mDTZrkhD5nm6n2J8hjQpJb4ddFxV1zEitfabZzyXuZ8YYCikqmtqo66hZDWYbh5pHLeyrVDGBcSKf6hW5wtL",
  "key3": "2fA2P8RrfBzDw34BwiWxSgaKHZUCcwy4sL7CVJGmYFfD88V98wAnvpCQu7UfPqa9fTcJk6YURRdfAFeiGESdfyt4",
  "key4": "5ns1Hz9oByC8GQqPzxLhDq5SePWNDX87RLsk46AZQoCm8M51QK3WENgaJB4JhZUyHRQ59UyUoLYM9zGiMDvtPEyb",
  "key5": "kWhxQ2HFP3RtWbKGZcMPzUJCQ274TtaB3hi3ydRsp2vQuTk7eRuMZD8vUoBzRfmeWTytQfRSWaPwTDZD5RLCnaS",
  "key6": "35KqYX5g2HnsGzfXnVyxJNtkmSkeq3pQQYAysU9QofRsSGsVVdoYqDX89ZAEd4RnCYZT6fP44zkptundvQjpu6qF",
  "key7": "4xJsZpfNmGVDFCGVsTawrXQw2UT5mEDYZqsTxtxFYamq2tNRktNYt13ALUnzqRNt3ePsjaU1bNUhpQts174oVGRx",
  "key8": "5JUNiXwTmLKLohcGfigzvSx6wdMu6mxqrkZohV82TbU4GncJi3CcEc78Bowc6sjTLqcWuZFsMFC6fkBiifEtxo4U",
  "key9": "5mKY8MRVwSLCNR4unXKHhdLcH49ujDzAjcDazQhGtWVRbt5jmLSuTbRMEnUHKf7HHtsg7gy4uA7QzWGv6iyy1Uno",
  "key10": "5t9ks8NohJsfLxn5SzJoUdo5frVrEvXXttXgznaXQac4C89YweafTH1GMcQdd4GK4TkwYrFqEXPgMbkQHwC2anAb",
  "key11": "qM9BJYSm4dQzmqx6bZZQKu213fdoy2APE8A3AWwm6gJy8Lg2Wjea9kduLGPbnMaLYLCHjF597VvGULdsBpHBokh",
  "key12": "4XsK4CvM4w4K6XEnEcZovpK6PFEviQWfyZkDGp2KfVqcN1tA2nH5GRuCu8WCYDvN6jmnNNLYQAmN47uCSCtVYJ3K",
  "key13": "5NFCUh4U8P9Kybp52aRqkh8wnjW1ii3wWEit2q1WjqLFCAV4rhTLLQRBQSdwwboZmwN4fF9c9YLbTJhpauF11ZRG",
  "key14": "4NjzWEjnUGNVBrwnGkgj5ZrZF5RqC53vrNAW4HZrh7uFA2sRYzsc6cumRPzcreMB3c57jzV3WXqpUJLZfnkMgq4W",
  "key15": "4wULX4EiRDiGrSxQwWt1bsh5Dqxzg6YPj6sa1BxUiy9MZikNvqUGY56UYYpZzgvf4EP1mhiAwG1sp4pUuodhsfE9",
  "key16": "7zDVPtEbWFfwjNhQy2pXdQpNTHAanokDASyqf5bv7g6ojcNoV9Zx2mUu11grefhE48MNTk8cRyFsCWJRJByYWkq",
  "key17": "aUqKpShDtQqbxfZWhnrexBNF74Je6p4fK8wfkehvG7EN728fyeSqj9juSzDVJtGHfVft4RUGD7LQU3SEBDez2Fg",
  "key18": "3Lr4DCH4MkMfXWnBTCMDd7bR7L1u4pggJ7jNyT5hv2Zv1dJqcmrw4V2rScjfNUZqmPvL6wrpPXXKTRaMvASzunG8",
  "key19": "5JvQWudQzfdC1Bs3rrnF967PHCJU4p8CHyfVhV19mK9A8r7P2QwSPdJNy44RqVW2TyEPzgpoAox8paiVHvrdXacb",
  "key20": "3C37m4dUBz6KR2DaGG2rEYgFLyeUy9pZyGCaTHTKm4aYZMBJfkrXk7SqzVU7Pzec1Hvt5K7iujp18jGPmrBsXGEq",
  "key21": "h59NrYvMBjrMzbZPxJqhv3c6VJWrg4hLtK4ytfWZnpjDy7Rn9pKZdLcEUqXd7ntR4JMd3648tscN9SihV3hDoN4",
  "key22": "2xYFesNrhc34L3giz9k4HUsLqi6sGKZ2757eTBV6U47qw1GuRKkL7nH3C1SYzfStSrnuuJzm4vszquhvzWTCvBG4",
  "key23": "2DEPAKNFK9HtrTigU3aj2xGPWgjnQSpUHzFGRPVuoXtT6rN3pqapgR4L3jCuyuyaCy8QnUUspBySAqCNjuhoyTNL",
  "key24": "4cEjSeVZEqFF7zKmPsXCJCsjwbnjeF356rKBGTNKo5eCrUZz2xNNUdwL6JrWfv6h9x8XD3oXn3tcVSZbXsnTUcTT",
  "key25": "5cjTbLaTAZqhATW9NWh7LuWiirrCuHAyg7UcDXJayKhphTVJBhL2jgMtUsTpD6PNwHGysP1GRaz5eDGHQ7wvUeqj",
  "key26": "4AULdKe8hgGhDXnZzsf4ehVck9p5vtcEGVvkasoRALcoNujzhMTtjPa56Wb5YjEf1z9bjNget9mroAjCxtQvvKbB"
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
