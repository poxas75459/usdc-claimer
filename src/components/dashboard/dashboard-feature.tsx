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
    "5yHxK2NpxYcB93EfqhQkouU4YECSEpCXHziQGq7Ubnuz3JKoQ3BvGecDG7sbw7BcC5FFgHENdZ7CLHoruMQwycf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFRjLTVacHq5w6c54MrAtJjpmKqk2R6A2iE54QSbanB9uA5CnifFTSa4Az8LJMxYKPLP1qcDHTWaeguCZkn7eg7",
  "key1": "5Ain8hP6UcV9U8zVzWGTTfiNciZEyCH3zrE6FQDakBnLgavLZ4BGYPtfnBD1NLcsiL1f9tsgGDL8be47kLsKEt62",
  "key2": "7MCBu8eemsXmPtWZ22zTZWjHBiRKBk3LXjcf1zSVdxSeTv97w4PyiyKto9nXSuA1hcj72TRNVC1cCS9cbouPNiH",
  "key3": "3g7KqmN9K7vMo2tmPPaxNfcM6Edr8Jh7Q9w8wCD4QLDjMv1BYDpEDHgmBZntvgQAAkCVbL3aTU59xaw6g4sYLQaD",
  "key4": "5ofpbqAh3Ea4bBSReoTkBc4cD5fMTKkwpbLkvht7yxh54SQKvcKpRZMYSaf2LNmvTwQVPbsHiURmohE3snXqMU3H",
  "key5": "qRibefH5FxNsrjfHWJUMUYJSY6U4UNbofyotouk6qeDmQCozbTtgg3PCQgWAxKaG9ZVZEeSLnQRbti6gyp2HbTj",
  "key6": "dw7fs49FhwX6jzMnrYn6GgagpyyTzfqFewa1KF4MsCT7xR2i9WHpTnHi66m9gSDPc4CxxTj35gXc9b4v5t6n8cb",
  "key7": "3ZZY1uymcu9rVwVspaf59U3LY6i36PoGNMgYTm9fFi9SF5no4YHsGGG3GSf6xzNCw3hMbmw1RumPHikmHVdhVsLy",
  "key8": "3Ufv65H2h5GNJHohtapTBP5wtanup6DCyENeidFaksyZxY6k7xkpnPjbmWfsMKN6Qnco3G2RWRDoNy6Akeb91Yfc",
  "key9": "oPAAp7pi8aRE1Sh259DHPdGa2qWLxwGSqkQBoP8qxMFcouuKwKnCQa9rKRuGV6N3Nr6wdcKy7YYQ57FBA8Fftx3",
  "key10": "7XQLq1f9izMupje98proeRUzFekqv7i2BdPyV4Pgzeu9uBEvMZp8jhHHbNnCRcjvRFeBqtfgCxUuLfo2zxgkWCA",
  "key11": "2daf4yaRNRtHNPJa4QRb1QP71KLBJrfhwV5THtVtWCkWB5dENUbLARqfW6BYt3gFx2f5QQcwyuyGxHpQ45y77f5R",
  "key12": "3rKbgWF5Zpadv4D8hAu9EeU91WKv5zMmcmKBDsAEUwLGLvTfoExuDwDJHSHsKxn1yCMih2hdTzZxrYoF3CzGW4JF",
  "key13": "5PBfwza2sjqHyHwKDVixNS8u8mEkjPYzqPRgz44B37WLsM2LiUFa4SLgYuEkd9NSK5nQzE5TorAHtGb3epX8zEoF",
  "key14": "4TLYB5abua9Yb3YU8uwgeZnJp8RqftPoLsibqUSqegFxozxr93ApV5i1Yj79K31PizD6s9npKNg2Zx56AT24u1k8",
  "key15": "32dSMC3pCczemTYHaB5DkxaQ9VPo5qJfrMJGV2iM1PcBxsk4Uy9MbkonSYJRNftSJB3z5Kr3kiHTddec1aXAWuLJ",
  "key16": "4G7rNoxEHCFAwbBr4w7DmhaUh6Lp6FAyGEBCUhXn8RSWaNP2ueUs1LvKqksMi34oqs5j6PaLzpjiXp6UcdpH75RZ",
  "key17": "2c7D6GPx6uHt4mwN9S6Zc6pqmq6rxU6d9TFoj9UUFtkcUYmKBGKLF1bT61zGfKhSXKQyVcoMkMwp9PUNAzFwAVvA",
  "key18": "49b8nn7PtosSKaTnCZe7m1aXSHuq5VPqd5GtuHD9EPnSCKXzbEHaor8ddebHkSymaqCKcohNqTGZpptZe7pVKvef",
  "key19": "26hZSseBcZfGvkq6HWhhE53p47PG5ypaEwsuyuL442WN11mBwXQxFnSqCgFDbnLdfTaa7QNoULkpvB44dqR94n13",
  "key20": "2f1UNvqNTstRV2kWNWjzpLFy5FSAXMR7iaHvpmT2MpirQZC4eZKFzxDHgLHxQEkPxRGDaeZje2Y6KFHZZixXHcbh",
  "key21": "DMDNgg7hukVXTjxqvn2BUrQ755nybMSeLoP7hrK883xHfpUJyTkpnWPC6vi8qy2gWqYD8DYqgT9Tdzpz1msYCDw",
  "key22": "3YifshD78wYesghyxTKtFyWQ9Kz6uFCL8msqryEQhDkQEEGo3ihkbh8dDGE53m6rs9ndWJ7jiBrKB5GvhDWniJmr",
  "key23": "3kce2Tr4LA3i33PyMHnnUBVx11CQ8BRAWQqKEbZwhVjpUw7sLwW7b6A96gMQUHnStMJNcDq9kyfhpEYrpuz93RTx",
  "key24": "4JnKNkaBxPDAErjkEDhjbspEnJEe18uxDA5uqBcgiHJMaRMnTU9fNStAEqcTLjHZFTKfxAcnm3Xseov1N8tgU1YW"
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
