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
    "4vVBHCVyE8goWB2m2DnmkViUFK6Fd4N7msJmb2mxE4hvZWpKTwZndwmfaERjG9YR1mzuNda2C4AhPrJZ4d5CfWFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFFtfnobqgZMAGxzhHBEbrbMjn171CR5tHSAqC5zAFi6vdFUzEDLjY6k4iy8wKb4T7K3KSMXHcDKkz9uesRZDxv",
  "key1": "EdfwwNT1ajuMe9fSTRVEWoWCbMq94Nvew7p16gTg5bP59thKPZs9nQkNWzKEF7wt1QDAKCYenqmrdTXZWGUS3Ev",
  "key2": "2EprbksXWSQ5XUjGPzyacEmW1tNNRoXdH9d1b1THebWwP2bf5x2XesrRck3thAomERNGWhVXGwB7xvVN4QKg6NMG",
  "key3": "4yQywWUtH6ynpaHeBi9E4Dea5sC7jQPFsrCRF42WMK15uNX2nUpfGyJwsk45qLtqgcvJ2NwdDzwbGREcBEo1a2DR",
  "key4": "2VUq7fEPxDzvJS7qpJLhKaXqyDEMfC22oJKpxgRVoCPwcD4wXwj9vsBeufq3uuTKbUk7T9d5cYgGZp6uyv47PEWN",
  "key5": "2nwyfvjHKyddu7gTYikEEcPGG51Teo7As4XAZouYBZdonYjdgaTrBxWfC1Pt6QNQWia5KRFWbmzkCeAPGdFyx83o",
  "key6": "4Sh6fuHjUroCPcJRQvspQxxBkzEAudpHy6uQEgJCXmGpFYxaRiKLH1hLzVP8vcUXRdJrQaPZioXLqvbXwYCZcYy7",
  "key7": "5V8qEytVLpJaX4eMJ91LMQCeHbNazM7QTc5N173VyRYnyJZpjEiSkQhZYxUhsN5th8mZdnWZfH7hXdjjGWdjuAF2",
  "key8": "4qTBzeF4qavzCvpmfLNr7uY5jT7udKKLMdMkwZvDV8rQPZP5Gv1u7ncEVuZn7o6ciZ3zymb2ps6VoMCM7hW3xrFt",
  "key9": "3tDykDRqQiydfUfxv5FvLhkWAPGtJYD9rgToVMaxX4Po8ZXUL2SbaTccU2Ue1QyVEEoufCgyr7kJRHs5HMGXX1eN",
  "key10": "3tbRc7ZjbkhkyqohCvYSsXFpyNe8befFvx27Akk2L7pVzxWcgnnoXHMqyhfPywUqUjVyifsPXKpv27RSU5wzXc5Q",
  "key11": "3pi3BLj2nm6n94tLvjkUjHjTYb7udzvAwwzHWerUT7YdasFH7rHCJrwhKU2cYQqpgT9nv3xKaJ1v5YicdLQSC6hF",
  "key12": "ScVG16ZZykug3vtFrMnoLoodboK6PDL2yMpjySWJLP4TpBRMeS55CSZhXVN2VefHQFzZBT183bCbx8JQ21uee56",
  "key13": "Shig58mQpB9tVf7nLTEoXfTxGmfupsomdECHHnRf1A45RqEDGsasC9mrkqcrXX8kAjdDi3dLWEbW2RGxXTPwCbg",
  "key14": "5qqaZyuhzkMWWf8qKYDGeMfhLJhLREjWkGsKwnhPfKCmn6fE5o4ka9z3afkoChSHFaqYJDsDnw4F63BixtDuGnTK",
  "key15": "RE7VAXK5CJJSu95sq4Uu2CXfePW7KeK99X6m2tqf2Wbg52auDHViUxAeuDXQ5DEfEscseatfbxdBy37e1fwyXxj",
  "key16": "vtXnE9azsSbiD3XUvrup2aH5LVsUgsJigzHNNbh9qwb5NH78UDdF5wmHYF9tSVrHVXGEmxDZVSg7WqbAbKK9G2Q",
  "key17": "5wcVB1gZuRGtWnuD8giLwkdLB6jHneNd68nD17KTjBasvymRk6yp4g8zKhAQ9uQSYCDMdstGLKTNcCb9MjukFfEF",
  "key18": "3jRR4c5DjVvnmvTrXNE4Ko2LyHyRPcCvjduYtyMHvfsZBzjQzrHrHVrTD4MTrCfHiYEZLAanX3x4h6HgxhuzrUWS",
  "key19": "2EQro8MRF4MGFScQ4s6ujTkrugWQAin9Ut5JrZXHBx75wcEtjVwr1HVeyi14796Wq1uyEcekfWWpHMyhwjNmPfJ",
  "key20": "33vyFUC8BsC4LrVwM9QWouJ49RFMXSK3UE7i7WFKndzMHRq1bkX8HGADpJeUYejTfGhz6r9L8aj8c74pF2Tk1G8b",
  "key21": "46pjZKPTRpuGvxrRYWwnrNiqYRzJPtmrqa11VVRZjfZ1gr7AsHNQQvGQQWxviPLaW5Y1yA3JB2rUxnxiCcqHmDva",
  "key22": "AfqvY5gBjvMBt9rqUnNgbPkwyA9iXc2ri4gLYaAaRjFXCwxRCYtgWMbV82VHEfJaPCiUMM7Fyhcs3S4n9AbeNvt",
  "key23": "41HGSfC6RAe2txSdscAVdpRgQhNBCyqiGwpHS1e6xde3BmmMcyTZUerPfLjWU1hKgGkPbYPZKhqc2jY3nrvB8xiM",
  "key24": "fc6ENuzEJEabLhSr1Sh3zYdKMEhHGyGf6FLg1WVhQLGivjf4rkrqAr41yi3QwCwPgGDdBj4vEQu5tNcgDusS2UW",
  "key25": "ajrNywaQAmaeaiBZyNs8LdtbtE2VmyqAdhaH6pKQUweDD8QpP6aXiRpgHncg9dHn5P6VyJmnDvbHWPKwTW4kw6o",
  "key26": "3ET1YYKwfFc2BSLUFRW2wMQQXPzDJsaiJNoeXA2HBe9Qr9No2vNG4E3ZDtBUvWrW3gpTRNHjVsz2BCYYj8d9f7Rp",
  "key27": "2JLZnyLrH95AAAxf933DdyFu3xgKohohv6avpXB89Hq5Gid2BKGYZMXU65iHDtc93PWsu7Qdz38BXNT71uRCwS8X"
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
