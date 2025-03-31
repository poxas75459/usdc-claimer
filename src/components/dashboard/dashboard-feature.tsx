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
    "41YcHz6KSxjUjtPWnwYpkyne2CC6NKNZhR7yG9GVsKYLXJgn8ym3z9rXVi4PSPe5J5hZSZbq3mFizrJGnaR8u3Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJjHXY9BgfZWC7yJwhCwjxdvieSQqfa9cTi7WPeg7hMPMtRQkSW1ZpSokcELTpsyBdz3g3y4VYtXdf85PyCqBcp",
  "key1": "2RBRsfmEiimFfApgSvxinETZLCk76vAY65516VkwtzDMbKCh1XeWTTeQ2psKZdA85XqScaQwhNeWeexdyyeqwSdm",
  "key2": "275VZ3gZ5RKVKpVX4wAgQdYLWc82X6KRMtftjppo8vC6kkESEkhBfimTCgtjtqqcSwLMSidDbpTnRn9qCQpL78sR",
  "key3": "5mUqQY6NJTNC3Yoa8FnGH8oAW4qqH3nJT7VyZ66WpKi7prT5TnuNoyQfTasC9pE3qCE2Vz93nJfRH8rfzwBAd5CP",
  "key4": "45K6HAL37VrgoFU2gckdkMe3cd5EYhta6QfrojG8YV61McCL19A9ByyoQSZvyeq5WYKvnpBusYRjqLmfvt4TWrTh",
  "key5": "2aD5QyeyWPyyG7vkvfsErHcF1bppdiXBRBVGvUPamJsfAtJPjRmBee4jjbgScaVv3CgWAHNfq5eijqjczXe4XUzX",
  "key6": "2CcmrNh9Tz1BPUEWRb3atY46Ux6BJR3xVR3SnT1nR1UfRnrjfTumozStwmyoHfsdHUKUBAKDDfBkApq91TyRsBiF",
  "key7": "kBuQLPurtxDhhsRtYCbmBF7mf4HKY2zAwHgus6GnYpuuudNsVCkSiuZUYjZXhAuSqyUG2uiZQcAtTqsz2dt6W2t",
  "key8": "3Bdsmd9FbmZ9KbCQWiDEJ352cBEUdvqj2i6crAzXsevvURJ5MQQNM18HeNmFxKYoWP7ZC51j4NdpaskkGWhcNdBW",
  "key9": "4ASNjgvVP6xqchDVh6nSCP9gsVupeXRcKuNyYNcFNPvsJB9BrpnprjD3kqga6DDKFU5ckvLRxFesv9NLEFrHWK9F",
  "key10": "4jWcWGu8STipoDUdJ3xqbPJMh58qPo6m8WcY4DFbcUNeUGXpqgXZgWdyCvhEdmVebebkFsLdjdVrSEpu8nVRFTbG",
  "key11": "M2bkBiU7bWTtLFbxfiDcsNKr9w5SU62UmV96ETFSqoeB6gJsRJd9FBGRTiPpam5f47tjPoh2qEBgzuXmtcedBFZ",
  "key12": "3CfStafKjxA5weVt3pMJWy2f4obUCux3QnNRELPpBRLsRHc44RNk6yfSC59yuKKpNxFgDuF1mW8ifGzu33scXPYP",
  "key13": "2iAJWfYhRJ2SU3SjiCWs7GT5mF2WdogmCHbX4UNNRyYDrEj43WXrZWtKqfpNLWAFcQQ4xwAG6cpr2dR6fk8ibeJy",
  "key14": "3FFiLEKLVnZCsbjBLcYyYbgb8S41FuAr2XqNvFUWKhibZ3JX84Li3ww4engjTFuK1AF7pLNFrka2mh3aAdzUgndj",
  "key15": "5QqRDk4raHdvoMz1msdTjDnbe3YHrwBgnNwSdAWq2x3K8KifgG2nZeZri68Zv9Dq3z42tBEUSz6vAHHxjG7YKqJj",
  "key16": "5wER4Wk6drzB2hbWRpULJGG9T7hhGRu3vPqVf9RcXXBoWq6bcEUudWb1gAUuMbxLBbJ5Fueg5FSTmGmWGKddjPZB",
  "key17": "2qh3k2PYuYkMvdAjNUMYcMkkbf7GQcgGRDFgi3GxP6QEHwjEpHprA5zrbnvTkJMPhJqkoxZwoHpSv4fRyLnXtdPo",
  "key18": "2tCc2D5hWmyMpoN2gNYxV1D2GaucVJKFKdozbgkGMGkvKQuCA7Ntkp2492N3HeR6rJCUwZ2QsybPLWrKzmhA2hWA",
  "key19": "4QpxFmYkutPnTubvT5rMAiZ5pHM1FNkfKTkGdFttnS6cEQvxaGYsNPVYpEnFEP6dXbvX2eeoWxusuXDFrmxBA7vb",
  "key20": "5864YbYmUVLGNZWrs9jhAy6bgmuSEUh4tccwoFrgcqgPNHxq8DY7mwWAU6Vok4cvuRJX1SMwkgPWyzeJkTsWPNTc",
  "key21": "5Rn5eCiFLcuH9D2gnWuTvoeFwzHYsM7tTbJ1FNBpL4gSTWP3viXc4iKf8SFz2tEjzMvTrNBXdbETByY1ToL9L86k",
  "key22": "3Y8pRJHVgYcg9KkCEK5GqSeCzTRsarKGu7yfmr9XkZ8hM3e49i1GSntAuZXoX7mYSQ58Nyuynf2W9QBfVJByyeeq",
  "key23": "9NSeoTxVQ7hgdVDeRNaPeSEebxsMVAAQbTX1cK8NQqKWCWvqte2YkNRex9hiudmSTCufGjivqUgUbP172kkEvzN",
  "key24": "5JHtbVuRvJRMmu1nLvqZ5QcZH61w4aBx3TDkFS82mE5uuAqacwKugxLUeoYDbst1YRLHn3bmYFdJ5TjWFTfvnyAi",
  "key25": "3Y4dEKhaybJAKKBESarqpvXhS2ZgXGw7gxPsQQhbe46RU4s2r8AXQ6A63r6aWf1gt7jAmBqLXWts4AZ9T5Qht41q",
  "key26": "2BLXtbwVHkS6kS9nqKZYDtXdymKqRd3XKVDx1yxFFEKXdzMysjC4xWsDyTD6y5F27sC88yc3qgWLRFMXU4gbnJAB",
  "key27": "5VfWfi7dqpFCf726h1WwUfFVTs5s1i9TMZ8uFe2L1fQK1uk8LrqGuZkdc9Q8g4T6cwmmjzizUCgR7DXintFVoC7H",
  "key28": "meaUkj2x7W4ba4B6aZK6VeGkYjj9E465tNZW3sysPMMg4w2TZDwfBg2H7BpJVuQNvFJXjV8UDLW5BvJQ5PjiU78",
  "key29": "3sUWhPYk2yMAZSeD3gk93Lih5T8wNF5wgc9NoZFj5RC1PLN2bSKyzwGq1vvLWHKsWKRNrVjAYD3vdhDvxGfyT74v",
  "key30": "4G9XB8jLa6kWFCeX3W8LUaWEQE1YqaEiWpgpW8epg9SXJRwcNoxvYL6o4ibHsh4MUrdoftEekXjda8xZfX5sTQsW",
  "key31": "5fDPCV7CLoNghABj5Bowh5Tqxx8muUzE7xZEUhGeTUhDCtrFjZBCDysYcDqZZLcYcqmDz3La9yteegin5gdRFNa5",
  "key32": "2ESyNKjrpr2U8NUx7wPNAQmyw8E9wRHzfW9sMiMkhPuV637RSpk5pN4TDWG2RAFRg6GGLdu3kjhcRXJyYprWS6t6"
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
