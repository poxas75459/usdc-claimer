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
    "jQY3CychcrNcQcwSyqcrtQEGnVw3RrZpvzVdBCsV32BCoWXMvv61F9YrQHfkuDwixKAo2H4pa9rZghkKH9bFsiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYGEshevm9fW4wAaJd78Ar1BwYZkhqGaQqhygcrggM1CddzM3PptpVDiJSAUNKZAXsQMFeXwKYxexfW9zJw1SVC",
  "key1": "5dL9MrnhT49RhaqmJVGuqFu1X9DQUeWBFYPy8bVTa6uh4mdyFMCDsBxych4kcEtwrXVD2pEvjFAdWDLEpDnPNzeg",
  "key2": "25SFKxbBWg5rmW1aawdDkuseET4t8pi34ckmZeYajBustrUm9buGgtWzpDjkouJsdenyLartrTesNRGrMUkYuUxY",
  "key3": "2bDwdApjmsVRVxCjLcCCWcR6B9k7Fd9WrhXv4bascGLpCa3ZYzQHAZQfu2aBqXPXn8dsGE3HMbqetHDhCQHYyitw",
  "key4": "5uVZxhJ2JEhDKcJQzNNQZRzXieT9yrQ5i4Ue6Ya23UhtBN22rNGf3ZDpovD3NZVpY8oXL4hAuuUEkxLFq52MzTae",
  "key5": "29Qg1NJfFmqeMczXAdFA4W3wq9Kku61RnUZK9oHRCrwdZ2qwMFcvr7AMRX2Z1mMvHfsX7yCZn9hG82uMEHEmd7B9",
  "key6": "uBK1mPMjra7c8Q2DED5f8b3vasHtHF8mJNqhLNcxDuTVqTyFFfb9wv7BnQurftePp3TDRRoQvL6zPTNQnTjrayt",
  "key7": "2Qkq4QfbQGHPhYQ9PpeWcJQ9qcWEPJTfDa6mBepRLFsDj8E9ZPrxn46j54uudkLY5h9kcgcBFxzvhPckvgjKkCBp",
  "key8": "5eyRkq8zecGVcfCxuKXEqqvAnxErqgDrtB129WyZtprv5ijGS1XM1HxFkxvGXxNcDK5qJnwpzpvCHvsK4LR3U5Lu",
  "key9": "5Psz7nsgBSqpMsJaW4sASPmpUArSXSjHpYuAN6kAzrj1uQhhxNJ53qbkRx448eWHho9x6UYmtbXA2MWvubg51PU3",
  "key10": "2vqp4ANbnPQFuCeGj3Q6PjcKQMwgQ1AotNGRMbVR4z8p5poTuh19qUGvaVdD4VxwYnh2NFURHsJmUSNyyNAwXRGk",
  "key11": "rQh1xHDhrcoBTt4VMRQcyGhpFzmqoxcT6wMr8p2EeTJ6feqphGV9M25MqP9er982aXZpjmf2mpXuHoBN95BDGk5",
  "key12": "2jdPa8sKoJPqYjop7cSamkWQtJvXXLwmMDZHNEem6A36JZhwnxdWiXL34d1RepzcEsrHZcDnppt9Pz2smf1J99Uf",
  "key13": "2v6KmwBXAPjWC6iApftwyHK5jAuh2Pxnrtdr37oQjSJviKX5tzerjLf78kLrdB1frwQCN2Hw6jF8oGrzxQNNK74K",
  "key14": "4hv7AmuE6JKWybdRH1mhf51hMj3ntxnH9jSRjbrXW5URzC5AfNMAd33d1JGbmdHtpC9m8VdmFmx2AnU74sVtFG5D",
  "key15": "5XAutdKaZkTkhQm6ESghrnyPz1jeWt6Jk4RkD1MEiyCtKPstPyjB79LtpAAw4esYaiY4zkjd6N7EyeHfs4wPrp6b",
  "key16": "3BWK6njsZz5Tq3Yv7uTaMFeBngU3waj5DLn2y1F5KQyEHxV3hH6YVuFAxUcP64r9NfqTAx8LUzFjDeQPVraZFDzh",
  "key17": "3pgjsH9sUPfWRE182BiquPcTbVSwUJPqgAFgXwoXHC33zGVWBfkqWEdS6Q6T5NoUiH1gFN5usdUEF1JEjb4Jgywo",
  "key18": "4b2U1RSEHCWeqBnn4k2LQcjTWrtruE5QPJs6hATYLWUwejta5HmKgmxTjaByJ1rnrzVeQ8sFcnP7ZZSPLqZLCsuq",
  "key19": "4z2cC1qpDCK2ukctKQJzySj8HrQxypq8Zhd1nj12YAjoJVSCKCDExFWsYzuUxqHAUt6kHhzqAE4pwbbyVGjgEVQj",
  "key20": "274Ys6hEtHyzvrMmjYfNhAM1AxQWikXbmGarUqCSrnDqWfH8GqeMKKo1MjtsVtm8pn9dcA6jPTLyJ2af5Dg1QyMX",
  "key21": "38FSo79dGL29da8WJFhygzpfwuhNZKNtz5fDvRef652JvxS2n4uooP9N2kkPKkKaeYoM6wEXnjwTfwfsVNWEAuoF",
  "key22": "3rZoBVixUK3NEn6Zm1YB4ed6AqvKEqvqp95eB4cMWQgwxZu3uFswDfPvXa15yKETrpgPHRbpFdRLpES6bdKXehDq",
  "key23": "3uZC94jMxf1Mf82Mzj13JCRV33x3BHtMDAx6bsT8W95j3iqXeiB8cCzoRSetn4h1H3pCm6exdvRwKhcTHCutBfVQ",
  "key24": "29bLQx6TXCYw1ZQUEPRviRhkA5c92pyQqbNS5GppGHDqKBmjm4nH3MJTPMFzLgKccVSqdDhxKXYKkhprgQwc8dD3",
  "key25": "2f4ZgttrzAcLTx3bVL97JiyNrr44y94e634bLvDa24hCCYyXbBQpbsKuf2fqP67Nw7mXrqPbirj51gLudHPPqZBX",
  "key26": "Anrzg4HM31XFrEr651wtBJYfstrHDACS3ASmkPtP41G3WFTV9hYGf7ecUhfQm4Duv8o7uEztJoAGM9FQ6SrQMHn"
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
