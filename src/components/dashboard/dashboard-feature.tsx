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
    "59ERgHjkFdGnZneMohSKSnTnyJEFRWoPQN2ESYCV7vGvqLXw8VXXgDUYksm5RefnNFa93iLwAGxsSoUqpG21x7Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uknWYgeJYerBSeapR3YtJ2ngvmRU7BASMnVLpJ1ebnCJkXrX3bfX4yd1HpsFnFWgYUP9itzQAZLsCWizcC5zYqB",
  "key1": "5iDeU14erfa47VgrHsupm9RqTAykACPStv38sL5S3hgjwhnRU9gnjWGRma1Y8VBQ9zbG5N3ASPkzwW1WoQrGqoqK",
  "key2": "Mokarm3bEHUkWvFfd2DWHGLZAEZwaWyJHZbzAWNy2xxGM1pov3o6GsnFF2KQDikb6ojUqTzPj6H63cVNBdoXpU8",
  "key3": "MSgFtEBbEaZeJLsyphxN8g9BbJthvJWYMwgfcwkbEr2y5Q2dPjGpcxMpjy2EU8xAq9szzrq6p4Phbs13zrKz92e",
  "key4": "2P9mNHwM9KwW9Zw8TC9sD4HEqS3jn529QVKyfDFkucAmigyBStksgTwkwtrjcNG9naFtwfm48mwBFhW3pNMpX3nT",
  "key5": "4CzrcPL6hZUCFestuLKVz7gx5a4imoiue58tRVp2H2CCLgU3bi49az43j6NfzqyNBmBjxb5xC2rWKdFVELVAbnqq",
  "key6": "4F5abq8ehKU3CvXCHsghd1Do4QfNcVyFWXZi2bBGzRFnEbJHBhuAv51YtJD51o7U6LknTyLmMAkiWTD1mSuHHNYv",
  "key7": "31LMzmvXuBjbrqh7NNaP8GnJKAeTVEWY1E2kD6qyA6SP2jYugrdtXh8orMFVmbH6VB4xJqQbXvVkh4uAEKJcmfkn",
  "key8": "62gFaPqQ7EaMyPFQH2WkrPMXFeK4DTbmazRsZDQaFmKvGrG86BaygaiVjEEsDBWUM7JQx6ETSoXEMPc44CBst23r",
  "key9": "2ZwG4e9m4HSAAyMEtPrCYFB8AXjvbofpcCKajwtgYxAgQQDP8ANtawSeYMkj1mKRF9kc3ArRJioM783QJdP6XPnV",
  "key10": "3oDcEFShXK4U5GU5VN9Rr3tn6ofHrB36Cn3zHdFdkF5trLRPhhLJn2XkdpYB1iyyaTKRn1h4azhf21oFeyejyR95",
  "key11": "2VzoLSa7HMqCfqx1Q5xGeYQfVpYzJzZaUuj8pNAF9cw6B3ze3wG1MHxtgKsW5P5LrojvVtCdq1KuaekxKFry4C8a",
  "key12": "2NfpzQm7ctNuLLTe85UPPTHvssDmcPn5SEsrNm2ETjVTP8oncBkmQJvDPBYcXbxaRLFaaLWAJ2DeUgkcxbdtNt1g",
  "key13": "24BRzf5NwGihN3pCE23YggKZbAZgZiZArJSUCcvkwuDQHdGwYrpmP8mYuKyXJT2ehB8WHq3s5e5gwV9QAznTA8qM",
  "key14": "4BZBS1gMc6ME1ctoLBtTt1QuwNogYf5aw2rHSmnHakimqQeG4XxEu9vm1QZBLJHgfMHBpJkQCZszNbBL1idX9Ru8",
  "key15": "2YSNpqA98kLLZodBDAqfFWw7kThesgAs7xxwk7inuzL8boQaKnEN6fNSzz9pZYx57X51JPFQDg2uSokV81EPWhoj",
  "key16": "4sHCumcUcGLHb8YoAHqq1duWNpbygKopLsdrWEVWYwNCy6nsCQiB1zvmedD5so3QRjgtmyhfdsQmpArRPAwdAMzr",
  "key17": "5VbSwfiaRxBeWDtnqTGVzL78j1E6NncdgiyK5jHW5BPTd9nFXhzEAdciaumUGYrcvLRwoTvouAws5ccYikF4P8pn",
  "key18": "2eUWPwBMWfgSbfjAsJVo1PbAXRomaPC1fYzVF1WivamSAgF1F3txLRGqbCam1bBWksWEifLGtHgb25Zx2d3CF359",
  "key19": "afCKG1K7uUxmGVMdgXCfoiVkfdDgJs5keLssDVQ8DU5VnZbyA8TdEBDX7PJZ7xGeiibhCSchUFRXNG5gRAXAkAB",
  "key20": "2N1EjG5dMWzS2G7VWe5jXfsMPk9cEAtzuY6UXAr5JcYpWGFAszqfi6kuPabqb95ZYPJBqfUNG4n5YsCDBwZ87tPv",
  "key21": "5fm8JTvjHzSGCZaS1d7HjX4HsDSTgRnycLdv1YEf5b7qudBQFUrLDJhVd2929PXaoavqcN8TATf9K7K7o8vcCjYb",
  "key22": "62mcN7M8X2AUz9vdD27iWgVTztHfFA9fgz7KteujQix28yCVEYrRBXEsN4cHE8AYzsDYbTQMVhYiyZJHcaqWQXQi",
  "key23": "4tzfAsqK4d9ebhW6iv2XUpQdsBXqJ2FohAw7eXpxoEVyr5Zek9LBQLU2y5bTVJQknwdpvPUuhE1DU7zrKnW7XU1y",
  "key24": "44KJUPK3paavQMUMo1aEK9x3ydiSuzK86bZqxdHR47M8MZK39XDXWSVinLguVSW7aWidsv1ytu12SR3dgbYYqowG",
  "key25": "64SxRfj7o32TQHZNj2EnSU9H7C6vHzTkBhz6AYghQcXXcg595Z8Swd41ddcE18fTqHysMqGnBP1hWufBJnJJguZV"
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
