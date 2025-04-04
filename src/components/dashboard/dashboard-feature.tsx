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
    "5NNqVGg4Qhg4bQPHCXPUGHa39ERxa1kZR1cgW6VE5eTJbadxBCM5F2NvZdSmEU6twZcXh6Qs8UxGiua5qDEgSv9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmUhuJzEVruWapaX6NyxJcL1rDxuNb5LuzP7marRgwVTDs3L1QeytwVPqSW2UjbpAkrmvRNcBTV42o8v4xGaLhF",
  "key1": "b74AJsw5sXXWBeFPvrat7GZe9EHeH6KoAmEMgx7uT67bW5LnfiFEmT7GouYXjdRSaWhYD6idWQarEs5hNtW6aSo",
  "key2": "4oLSdt5gpBF3NC5ouCMd3GPq6UfzJAr5tNoncxcnM89eBpSfMehEUumGrrCCEZwM8Jh6GyjxeZGNYkTxMu2q4SZU",
  "key3": "282KZAw4ue1L8kGgUVVF7qt86Vo54RhwEpzkhGYJY4p5nzM8Zx69hMETSS9c7WahHXtEah9CmFhAiqUeU2pnUHMe",
  "key4": "4NePMjm9a2JwnKsmkLwZehv83cPzV1sdnBgSQW5cqrYbvWqRwY78i9G4jhp7K8jpPP3gYwjRau3aPpV3pfWUNHyR",
  "key5": "3VkqECRs5uzsASE7G6UnYrpiTRhTn4uerhPjqWoKQKpZoZX7rg97GNR9aouiKJ7AUNd4Px6YySJq2e4y89cfbJzn",
  "key6": "264P515zeHmFtgL9YK6nxy8hMWMe4V1P7CHxwFu51ETq8dGGJR922Vgtfoh1AWJtKSGseNQBMGL8bVDD1o3QzNB3",
  "key7": "5XZscAapPYssAYjNyVU69a5NUhkJAWfkTQ74xgawtPHsDR9iP4So3ZaxuMx4gew9YQB9ns1CScJQL5BXgWpR8eiQ",
  "key8": "2mAsAPEzQ9Zt1JrBiXVfaPuoKcVWWYVJjXp6Dka8ZN94XHxUx3HnzAV42gzt5za1b2ufBodmAWu5agHETJXfYUSj",
  "key9": "3GSTJeSXgUQGyMaU4NMMukFQKDQDQNAVWrqMkaWphDoLe5V651rY5mWf1KojogBVee43vFGzJ4c8SHb8ggmSjs7y",
  "key10": "2RV1iZFbUnVtYPusuKuEQ6xxd7F1pj1fi1sGwgZakUgPpTwNowUZNCnGcyGWZ36JQLodAN9KJTUMtfqFgArqnFAv",
  "key11": "foX78WEirpP5Nqj9aGsmsCscUwekNB2rSBK3CHV3NzbaFeqy2kJtBbgSx6gSHxuP9nShsZ5v7SKjQKZJ1Du1hnp",
  "key12": "5P6NGhnLMuLANYgwJieiyRabfEc9Kw6GZXamhVmcikUvs4EA13pnsJpFgxNz46vSm4MzQXU8dv4YJdGs1111Y9qu",
  "key13": "5Xt4gfcMXKbiZCt1Sd3dZaFrKW5dREERqwweQeE185b1mxWF8xEjrNAJ7Qv7GNwoxuhPc8nMa3exewBKMUYUNxsH",
  "key14": "2wFNz7xFo74aAv32uN2rjA3CHYzojiFecF6JCRU3wyFrZqyx1TgdvjUvcVfoUGQRZL74BGBpTH55n1DA3ZbmMi5w",
  "key15": "5QPbJb3wGQ1u7Hss6RW8Xk3JksZJgrHdBfGj7uzwKAM1vxcB1KUAbQgZP1dvp6ukE3AWi2ad8WebZQN7zdANu8CJ",
  "key16": "bqTfLukViAE2pkvuLb9qRbYQCoSkDJhAmTFDCm4vxdZBbqGn9hDkWZoZZcrCeNw5rt6WUnRmDiNBBBA2b8DLb7R",
  "key17": "Ge4vFxYjcA61ykiUW89iipyEHUPeWVDZzr9GYAorJYZYg9mYx9MaTQXJFzXYHGpwhB9uv1R8yvMxgVLejGyFWp9",
  "key18": "52HYtDeXyHjR3UhNHcs3FJJUx5xkKQRE4w13aiDQEPU2BvHBALcsYRCCkBoGdovtF5SYbWFjCLKavpk71afymUy6",
  "key19": "nTXfPSikit54kx6A3ER3rZcVH46FoXbXgHM9KSty6cZvNcd9WiPzSF1tpq8zCsy7LSVRmY9P7NLfFmFNaARA97u",
  "key20": "5XB7kydyQ2c14v9UAKSvK6qpSHMFb2b66ptTMrsnQMt9NipzXJRvdQhE3UxmcZdxW3wxei6GVdVNY4PX9VLVkmcy",
  "key21": "64wpMz32Xc9FtTqyiuJzjY9hvs7SQfDc1EXDnKNLJ93kxv7LLeQU2wdxmxhfAvhL8HdqT2WBGBVkqXE18UyQMoKe",
  "key22": "4mUXh3qcHXTAfua4pDoR9NGQZs749n1Trmb7rZFjAFWL7Fdx67pLtn7QSmPEScETuY8Q2XEkjCMrxumuMbnJxswm",
  "key23": "2vCBYju6CBQobXiaYTnBsEe2rRfYQ6hV7uceJWX2LK7RjcCeSGJrCpcV9FTMJQNRZm3FfnSYAYZZKvBZiF8XoQ2A",
  "key24": "yy5LbVhxKGvVSDCxNw7trXA44EZwCsvMhLKC3fSat6u9jHSMd9WFuM6rkxEDgneYALn5M1Snf6Ko7cVbUjrZGMb",
  "key25": "2eu4PrYu6Ld6dYFzUocRT1QWhEQDGsRTU4Gw5sGNsvLtoTbXdQjzsGTkKXpDNr3VuyQSuuJuUVMgQFFnmaHo2sF8",
  "key26": "2nR5Vu3XePhCym3ahAPvZXy5HT3HbWgC23M3vVqiRDT6aBzvZuEbePF6dFhgMfP86e9yYTZLR2KKqHCLcPnByh1z",
  "key27": "uppJq8dBLRTvd7yT3ZA7coDC4z7Mi7vBxCsvqyEEs3WvDMa5AhJuC9CQmEfyAimYxD1sqRTYRiA8Cn6zcooJjRB",
  "key28": "3fSVgBKD8vfvQsBqc4FQvyDopTUMvEwGKPkfTT3HmD2LwZAkyp37eFASiopa7T6C5VdPSyXCycU5xudTB9cEWZk1",
  "key29": "MHjwvTPNDcCxPcGkxfgDm9w9MWLQKybXgT8jTtfYxXmEB5t3MPgQwiEHJjYisExmngfXyBPLdFbGqEtkr4whdrS",
  "key30": "4XPPi84rTtgPa5nqRyJB68bFMDfVyZ8bgTfGDnBX7bMYUoY6e4tPWH2s9TthBrxYCxmzQMeqT2vmvCx6B8KWhsdA",
  "key31": "3hQt5X2hnxvgz15JW8dnzELB5cY6C3b6NfPSxyvMfgQjPhi6V4TLrw2zbGH5r1hFU4RKy8cx3Fn84rvGrWJ7fQec",
  "key32": "5gMWA8wm5Z2M4WQrCV2ZwM6CG8k7recN1HczwYCKSSpDb6jKG2o7yXtMyBtX9WTgpeUeEGxVH8aqonsmGnUVWJPj",
  "key33": "2RWzuq3f6GazfnRM7w9QH9FCF7ZWUF5T23YigHS29A1yCdipDWmiXFYG8ttyPmYE6SREj6u4D1ZkQfULFfL7KbC9"
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
