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
    "EWHFux2HwpnrLpyaUD5JwaoDKzpzotUPjUd6xDmQnFTcjCw8AwHJsu86DhvoFUoXVfVVYfZFhCK5bMCTgXA5Ghd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHerPTbpCdC9Tqida9Ja81ofn77Ak8vuJR7z4jVFTw4pof3B9BoMK8yvZAaZ5TnKi5DrjJzhr9PCatZNZsaYJiE",
  "key1": "4EARjWqaCpbvEscsnpgRfTd1GpnKim8ZgaWeg8hqQZn4pLauxSjiGjq5md4q5LayzckZypdjTJ1sRfBqbC26hNRb",
  "key2": "DRQMNmduJ3LrhSQockPUYF8rVPexZegwXH8bwkxkmYnAb4tENh2aBeu4Q3ucf7ghBtMWHMEdTXifNgbRdUuYy1f",
  "key3": "6nAJD9nGmoiwg4DkmepFhGSZPVf7WWiAc6aaoLKDq3Wtz8J8oj67RxpWgKapqUWmRxnNa6io8kjD92Ga9rCnSbt",
  "key4": "f1UyvC6XDyniwTNFbeBhjqsFj1jU9rDTgcsG4BJE54UPcpLHrYZnXCLPEWpDZxUJixDf9CiT1i4rmZEgfSQ9jy1",
  "key5": "ZS4Tb6R3jbQ9KjdxKYuC1Z5X5HQG4TCMdaHPpXB1abQnJfXfYEnCf6m8SYb6EVwprPn5ZmrrsUD3KCVhhFPoB27",
  "key6": "vKJdLnYUhTpEBxsCXa9g9bZtQzNp5zLaU5XTDvok3yonM5ZsnLCP24FHM6ihS7iEJRMSGpzofu6oRtomtavg6Ck",
  "key7": "2qv2DLqgntVUakP8mFw6bSfVFDHxQzW4QuWn6fWYny9Cb245ndQLUUHAhdpFNRPiRatt3EeJfBcm6YGB94Vspm3i",
  "key8": "2MQxCj3wW4E3kQqcFTF915HKovQC1bwnftJgWjKxxhhDmDMAhoNy2H28nvftZseVvqXqx37VcZfRs5KsrWKh4hkh",
  "key9": "5gFgDsgCb923i8C1bCS9xdLxTJEpzXS2K16ypj1cV5yJXUCio3AGkRHQSshbHvxiNoJSASQhKYaDNL1B7sf2RyQk",
  "key10": "2f9qusxcfAihR6Va5QxCuEaHdTHHPWHE5rpSbikmfGAhnssqqXNNY4rUo9nti329eow6c1pDnWjWqx5a8xMLAr5A",
  "key11": "43hoKyBLXYW9LRHoiz5SKnkTmwcMuzdVpnvyggovACCVBUbEZFrgrY9U9eNthrfYidq3dcuHVawyhPm2Qj6fcfW8",
  "key12": "4odzjCsYMRLX7zne9VmiW18Y63E1rwTEY6ymspZRFNQWC9oZvH3NGhQmoF8jcNLEe3ZN7obWhH6yVgdRutcwc8cp",
  "key13": "wyfhFjAsJCKtsUSgg1euoywk4UwTHmCVT33b84wtD6BKv9Mi9ikKG65YYUDFoDMHN1XRqgngwMrLe1xLEQiCBxw",
  "key14": "3PSZfGGNXXRR4RGGPsTZnGjq96oBDtiZ2rpUihN69WRwA9JC4kLZ3s7kYtGsW1Zk15bmUvcyVoU6DjxJEqL3LNHV",
  "key15": "M4aezJ5MgAtQ811wdcZN313WahZ1ReSPoaFHFTWXtqmXA4a9XYnYFVmg41wSveTosn3ZB9A8EubWYRLFMwk41bj",
  "key16": "3Zp2efxLAa9XsrB9t84t36TkWQWhvYTfpekkjYxzcpnVKTRfVF59uHs2we831vL9pvfVVS8A7PCyf23S51nXtqc9",
  "key17": "35iXnqAD5fwFLvQVbe88k63x9BrtqNHfhUcPdNNWU9peN3kM4gcvCQpFv155H44qPU6VbBnYpWM5QUr1QA1jt5kY",
  "key18": "3xfkh55BgsHC7SbdubdfxDr9FgFP9yYB6zk948XrZ3Ek7mBNNjd7B2C4gSE8B2BmPkdToTMGu6ZdeuJNuta1gsr9",
  "key19": "viB9FxBYJpTTniUojUbGgQVZ2quYpzr7epvjLy5EYhveL7HGELVX6NfJ1Tj2U9TV2whzdEk4TRcSASbsjUKqhpZ",
  "key20": "3geD7FkK7JqXYmLcY21Yne6CxVQE8dXYZdFfggJPeiLoUmMps8CEo8muQqu4EFKny8Ne38bRMXUixjmDAffL8BhH",
  "key21": "5KcH44aqxxzkv52MGrbe71ohdzkETjKmkmh5LcBc3x7bJggwF9X4UArYUFzQjKf9SfEcpNE41KLwfSGSpXRn7mLU",
  "key22": "5xWXKtjVbbsU45w85NFUHDknPgH6qSmZxrHfMkuFMmsuxbP2yVJdmGXZRrUXAJ5XKX1AD5hKCp9SXQnwcKQthxbM",
  "key23": "Fart2SUKxurvYefc1juQxsnNJykXKrqAnoDiG21BsYoxU2emSmQbThDxbytut8YhNWUrzRfJahT2FNyPVw4KbeB",
  "key24": "5F1tnLfPa3LRg8LJQtoe7pD27j4X2rkaDGk7VYP4wMdYnBHvBHQhApoMWU6vw9CfKxLtJ6tfUJC8YbDhx7c9qaYH",
  "key25": "2yXuM9LHDcBvBpoZMWH6rTGzGzTkeGUmzgNvfQXWRi2QeqDHZJnEoeQiYMzWDRXz6sWmZjV9ZiaLHT465UTuig2N",
  "key26": "3TYY7GXW1bYR5QPGdfSBnGdEAZso2FPthzfcu4AaWnMxxrNDwqUdoddwxLZichnEGHaaTnKCABKyw3XuUsZpMpR5"
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
