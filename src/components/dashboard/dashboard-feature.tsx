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
    "5w8EKT1zem5mFBdM6rXsu1o8hPuA8oTBWHEfDquLKNXqXugi5MefitmPEbe8fa5o6wWkeuS4wEJ5qrfvQZynYX34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WbE8xDSno2u93Ju18DJsfuywkk6B1N7AxF4mJTeh4nqKSn381RnSSiTxhd1YDoFMLC3Gk7dXzenwKNDv35AzZm",
  "key1": "5fKEYFCQM12uBdADofsrBY5StfAJhzytzyRPsP1Bwp6uaTx7hWKU6VMtD56kmHMFRjyNEpbowzpgEM3hiFj6jBy3",
  "key2": "4yFrRMiXFCpdr9JsTAbirogGg5uVYufx1Ct9ceam6cp6XEgiPRDUQwcCdjiVn3pL3d8fAizpyefsjmhWVRf1mtsX",
  "key3": "4uXmP3gMKx6q7F32dPvpicUskVjXG3PwTaHJnZmbpNhKZ1seocq32VkNsrcQALmYtQJwdASMJzkDtuGpMSbpCE6k",
  "key4": "5HLZuvABR4zRofnNWENUhPafmZHDtHbeot1bwyxTi4BwJowaNDVLMFCwXDLfqdM4ZWsoy35Njq2EAyxTkhfajDkg",
  "key5": "5HoYWP19fz56gaRmopmRefXgtwoFBanEkHnxTHhsY8yxbTxGvMKcCTatxbqQuA38MovgVv9R7wxrqisi7VwHNfWZ",
  "key6": "3zBEwuMzgKX2bkwU2QZ28Yv7Kuy1odQ8XRJkqKpaLcBxqDBjtBHENMPjP6D6JeG55zkkXTH7Eqf92D9D1w8nHjCA",
  "key7": "2vE7BBcM5MN5jbKeeRxVCMCSYQZ7kRqTtrGtX5Y6g8kgxSFigck3m9ujY4WsD1uM7nEkeFFxXBg3UqNDTpq3tEmU",
  "key8": "5Fb3ht9z7CjzBHGX1PHUfWjuAhk6hK5C9PnZjZWrupqu7adsfMVr5pGDb6GxsEbyHDWqpFxVh4qa5UCm3QhmRe64",
  "key9": "3HkzrU34TDK1C9rnHk8QcQzgKLcGkcFVd2fMRzHMNYkqhZdmwb42EYM2imaRN9vTamfj4V2eBZ3kyw51Z7UzX1oQ",
  "key10": "58ryrKZ7G1KwadRd4qiPcYnpwaWoym3KwpZRqwuTGJWzsUpcaCTYQ6wSqFtiF61RVGSsqxo7QxoiyNeBhWNGPR2h",
  "key11": "uFxAKUUb4shXryUbND3VU3ZTtJa6XHmta1jk2XW79fLGrAgzQURs3w9ZV3M3DNuinjVetYqttob4xBHATSAWVVh",
  "key12": "5BLj7PcdN7sgWNMhd114oxoiktXEXf25gxLNcGP43nebg92qkLY11HDtSQ4jEfLRCce2n7Li1U1PeShE2qXKsh12",
  "key13": "4nvEwgVTBuzzLBtSWDhMhipDAK396Me9A2vL46EJVDXm13EATg3QZeMzw4UMSKZbHMpejoCyXjQAsSwVb9U4N3BX",
  "key14": "EMtzXQgyZ3rLKZMmuenkeoNHAdTMjEJRAL6nCj4CqFnwynSdP7K5U9Q8yLEGFe1xSeXer9pX8AHtjTusFQswdvG",
  "key15": "246cynCZr9nKA26bFTDgELGCh3f1C4WBNzUQskBQAHyCfdCkExUkjRD7zua8zLtzyoRoLo6wzkzNj6jBLxpWcAjw",
  "key16": "27mh1sSpwBNStDtVXNbdxT4gvdecjZS28vezTW9aWxvKSRVtuVJ2arsXUbXLsJ3xpskytYUuSdzxoYFqYVcwqEdA",
  "key17": "2pvwXiu5Xyk22MqUZmYEznehwFjndmQPERCnEyzRH4coacCFnX3Zp5ZCjMaToRRvHWGYoV5cHakmoFwNYJAXA7FR",
  "key18": "25jyG6GuhqiUMEuPBQMfn6Weyq8amf3Tmo96u5jSAHMNczMaWzmCkeEj5ihCB9u1KBjS4ZFq3j8MNsWLdo4VywqN",
  "key19": "4iLEvybAohANJejD28KGAMtbY8jYDD8jpWCA7prcBQQ2wF4rj963Tp2eTZSBnzwuQz6ieecKgGZWrr3gpCngBzhN",
  "key20": "2wFjvkrtxfY5x5XdMeAwD5btoAws7daExU86Z6ywdYk7kod4tVvw3cv329K8QkTgxXyg9GzKNUKYLk8uxnFmQRK1",
  "key21": "5QXugsq5cqzrSB2HogndMPUnZ8torCQzqsVyUHcB4QTibEABCFnn1pSMu3A9JtB8jeACzNNCPGKXwRKUfRaXvmqi",
  "key22": "4WbjVH3kRL57wEbr4tkkQCzAGdcAsun4oRejuqA9TBFZyQicFrgdBBVhRWFwzfGgVJUxBH63zzDadR4bgM6KQQtV",
  "key23": "4SUcpQ7Z581eafSjGyajfBy9i1NBT7zVWv72r2r4SiejyZ3rEP8aypCVM9z2rqDduR3mXTWZv3vpRKdm1YpRER1d",
  "key24": "39rFUkS216nc1K61z4kxtMyqmpAUAjnyKGz3xQifMS1hk4oD9CZCEm9N1uqtzheh1eES2CTJzsiaTVWokshYVGtk",
  "key25": "2AenQdwWyJ9tLsMJqvNvB7dv2Tqa3vhb8TmfkcbRvdZ2NuiTQtbfmCnYhjaay9X6WhZhve77aQzsGNvFPZ3T6fvV",
  "key26": "5o83PvB7EuMeFWAm64XX7bqhKsRkydY4prJvfBN2MSHSeN1facaEXoDVqYBU6dEo73ZX8WA2nFLY6J9FG5UWq4JL",
  "key27": "ETBxtyyYZVwVFfyjwAX4f7QFtFMeJNxdPZb1JiwQif4cXZYRQtfocLdZ1YwQ2BtZsUYPenvjBhWSnMKiqFY1MP6",
  "key28": "LXsHGt4qToD65XHwgogZAB4SRu2C6oSnRGuvJQf3PMBXnWSSE8thKJPLrUhBwKF4rgz1yhcD8rGNo9TZXejFDkC",
  "key29": "MUkWpN6YajCUH7ppsz6vzGcVndLtajHCV2LyiU7BUWcvDSLu5PkuuNJ5r95kH9LdBWxGomikt3xgrorPULbyJDJ",
  "key30": "4qCXgkiFPZ4yMK537inVPCvMt4qER1yxTwbLjbKUWWZfnxH4ku3THzVu9yjGuvNQG9AodVURytNYu27mDSpWUCeB",
  "key31": "5rH87ubw6CMpsgibQeEkhRB4Uq2A8Aggze2oojR9NhesrtY6ov76yWYYc5maoBZ5iCoDz1tShcLkg14XogwGRiui"
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
