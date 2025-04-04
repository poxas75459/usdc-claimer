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
    "5u5W58aGdwRzX2SPTQYsYQ9oz3QnCHX7d9bnjk7uhLp4zz4g39kzGMJ4CrkUDadDP5QUnbyseDn6zyr5KFEnsgSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBb4p1B37UTrrzwP2HQBskA5hZS8TcMG8KHk19YJmtYNXA5sz5vciFGtAAZx3RS3Qr49rtobC8u6M7X482ayBN6",
  "key1": "3hC8ZuLLTbvM8nY5AiQAtaWNRryBnxoGhM7jcw8uD5wxTLu99d2KSXwRYxDcrJ1P6gyPoH5zFy1d3NwZMgaLaSGo",
  "key2": "2cbYqfZbzyV1QrdMUXJ2RTT7daE4VWMaVKgmCRFTdxSmZechWDrFY1JG9VLEM3aHLCyEJx81bJemWBcirqua1tRV",
  "key3": "2u1RwPwu8x1EjKR4bPWRT22PZe2Jn2hNxVg1PnuxboQKxgP2uFADoNei68cMqnSKgMUEGTbjBtGH2W5Xtvc22R53",
  "key4": "3ctjdqR7YW1H4q9Z5oP2EtLRzdw4np8yajSCc9bYCNEpqc9hRLpLj5TfEnfK9vN9DktdWNtBMUhdSR91Ux8qMaXM",
  "key5": "3e9iuS3tzHjcWmGyLZfXAj4stSHafDEWJFiRmbFRprGuDByav51A3dBCCMJ6T9d3rCNBqzHv5AfYxi9yHVDM1c9o",
  "key6": "5hFXzRiGBpy5ECZDtszrRsWPFtXZnRLFWnTRJKrnprjauVBs93WEr1eX9Aumbck9tKJTsEuxxbjHGHLBgYt2ResU",
  "key7": "2qLMix1zxdbfDNt3ULDa4mMmbSQCrNudASgZFHPmAXkjEE5d3bCu8NbGviRp3KTNAwKGye5eh3FmRp6veZgERk8f",
  "key8": "22fkLVguKf6UqeW4jmbq4faCaVNPnWnvaZFyTzCWzBqQXbUJqvbvozBXX2CGaLRxBTfgyDzyDsZkQdefidHPSRGv",
  "key9": "5T3jo5C5hARFwxALomn5pNYxBzqm1Tacut6qjpJzLFfezJoNhmkBBjjFCM6Bxch4vryQnwschnfCYsAjHu73DCek",
  "key10": "xSeHCjFteRQgZugNG4jmmR7r9D8zRX6eSnEPNkNzuNvjPRNVjgdV5PuSCmXA9zqxix67DAQSJjbTJhmJmV1o4SQ",
  "key11": "4jswZVB77JSqmv7dBhJD3f9YAEKyJjktDXt5PPsJHdJ4zrG9sQeVnUAL5rwTKwxSZBGZNkeQEQc49iPjAdJEokqv",
  "key12": "4YkT1KSvbiPXvGvAoEe6gVGNbBxJ7ExDuZqo5EkRZDMwPLHaUxnsCoWX8udRhscyp7AFwkH39cwqiq1ci1N4vRkm",
  "key13": "2ioVedNxWE9MtHyuXKNe2B5vCMGkuEizM8s5LdfoDzu1tDKfU8D3NVWceA5MgVnKGCfbdbk26QQvq9fD7NjvjnVH",
  "key14": "3MMb1LFXBy4jkk9MBouTkNmETJ1Xd82yTwbkZdcy2SCJrFwtDUCqczJmXg12ze9h1YY1abEvedTA8gKK6aNGzZLi",
  "key15": "arY7L1eiAbSStCsUohApHZptepbN5LBW2iM6veNx8mqeU67enuTHNYSiv8xZoGAMw8SvKM6ndMbHFiLpgLtJchz",
  "key16": "22jkrX28b7qqz4jhC5G9yLsknupsR8MmLie9aqVLKo1GB8ZRk8X3tYfPBZCP3ore6KpH2nkVmt7KCevAgNEkiVmX",
  "key17": "5g9UkPejsarA5zUiYvu8Xy5fPJ4fwcnHrGiUYgMBoMPkwLovUhogNVzw3mTDtwUZgKwDWE7mktvdh9fVuLxBhBTC",
  "key18": "2ZK5F2q1f242tt61Hg4f6uaVPwbW63bbaSCJ8wZW6upwpaUABRkd86n6QMnALViX7wjHE3zDAobGpfqXHD6SPPR2",
  "key19": "5buk8FGgFrzSGAV2Xb2TkpkWgaA4E7FM9DVFM9jxHGbwFNbkrtoYdFfrcMUf9RKbVTXdsUKCZK7k2bSmw4FvLrGH",
  "key20": "3adW7FBtPkGyx8S1ymuPrZnQwBjvohMVgWF8tKJZuXLHguL3PUMVa34WkQBLMLYUeiEKF3TQ1Yz5gLn5Y9N2fKRg",
  "key21": "38smsfVDGKoYyaypzsntiqU5zbX74KvNZxTPPkubxsAZDi6kuZ8nmteGnS22kr8m2stbJUtpECcf8tXoVJ3wpivr",
  "key22": "37oMURerf5wKkm6bVXhmLTmMBEbHfwu27wd1jGrv4ce2cC9RaLG7v7iDmDQ7Y2khpjxbEdBF2aJSyMZhy1cextwt",
  "key23": "3nd2v4Apn2cG6GuvJWp9YHyTaBpLQZSLAPLfzqUWu2rd9tnZCtTk8y6vGKkRdA9ktK9yg1YjdAg1yvicYrfipBpJ",
  "key24": "4QRiCAYKGpHQvdP87RTKfHR2kihNz5S4QdgMfvEw4ADjoZkZ54VxgEzM1gP1sy9Hs6MYspFcLuT6UCuwHti5mXdh"
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
