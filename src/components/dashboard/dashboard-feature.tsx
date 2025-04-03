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
    "w39G73ViW5MeTCxbUFe6ZNZbrm2vHdytA3XYSx7y7dxhq5ut2tgqZHjSAB5hqfgRe8zhqwFQURgqPu5ABbPNa5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dF2uG6KEBCdzkLCb737P6T2SQEtEEaawUMEXxzu9kPzVfrdCsAgVzXmVCjJQ6XowsRD4nPL1qXhntYM83fjDFdW",
  "key1": "4A5xdDLp59B48o46nDahsZeUQgyLUswmru22cq3K9vouwUeKbRmKMx6yjaBX5uLbYEPyjH3CHPr6g2Y2BCSxKkWs",
  "key2": "5X8eNx6tEj9mLR1UhKnsiiqTLPYVrZYeaMTDgY4ZFzzGD3ywMwf6nWnGoYg1hRVC6HZgZZEcYxwvzwo7rpdkoJ7F",
  "key3": "5tiGg3KPHuQ6xr5DymyRerWw1ojFDm8nMgwV8cWjRKfzGN8v1ef1zzb1SNhaUtUURozGTtJLorLAQuFNhRywwLXm",
  "key4": "5skAcHnT5epFcidQ7PvJHDpgHUHa87nVuLejVmp5vKwYuJQCFLzYqRv7rULduQFxFdu6fbGsr8ZRxax3bAY22Uah",
  "key5": "5BJgmZLTahA1tW1h57rcTseUmAqBctSsifcQ5i6ixftNoQUzAF7CGuWodcSmEUQiDjRbsnRy44GbcG2SLJpGkKPx",
  "key6": "4M4sz4ERCUiBktUSCMKiTLqHiWi11GDgFUWdREdLpdjnmEsXTWtZB7E3XrqBEqTHkZNkUtCqsR9xLALos5k7RAHm",
  "key7": "61Mv4r2zZJNDotMb5v2fGWxD9vnJagVqdFZrY7e3B3CatnJBFiAMHsbjnE7XsGB8T49TCQwrCdqxRMCJ25F6rt5E",
  "key8": "3AmJKpMxevaRRSJsmMLVRJoTcxLig7gdZzjfuXYXzSGvkx7C5cTrXC6Dhh5aeotArbw2Bic5o621kRYhvLwWVDzb",
  "key9": "2r6Dv9SGraJV3RM6kftNn7S82GBgLtHgNdGjBoa48tts7bJBNWsw4aB5XqnP9H8gFkv7izboadt87nENAMMEdmhm",
  "key10": "2DdM1eZCYb6an1P9gut7YoYZ5GUqp4rvhiWBkFR9KcoBQ9saW4x3cGmdTQ6wKAUpZDznpZpppp6JSAHqX3vT1CRf",
  "key11": "4UYRXrtwcbAuw6a2A7ZKnfvCZr9cY14aKe4xbeSrzYinzYKB12kVa8SXVrW1sRnGGc5hbeKQwj8UAYppEwad7EF7",
  "key12": "hco7GMQ3xJSbpwcTwGbmunphYoYLzq3fkdKyVSnnyZVoGhEnRcFw2iP8gwmonSsq22qyQQ2FssQq446Z9ykDX2m",
  "key13": "5KwdPKBUz71sWZZRk7a3nG7A9LKTVm2YuLfeLQfU58t9u1HvQBmd8xJQ24uAfbg1Ayi1EcmpQ7zS4qRAFKbkRin5",
  "key14": "5gfHg9dwFE8eV6LjixQeLaRDNyu6gbA6W2odBFhWD2oAzsjgmWSZyiNyeESh8w83adsyP68x1hoFwseMDgTATtLJ",
  "key15": "2mnSKYuYgi67yAoLEPiSNi9vzyfQjePhtJEB2DLRZnUTESTeqqEw819LtFZzRgFYtL7aA2eR2nwFd2LV6Aj5fNz7",
  "key16": "4EfK9BQsEqJ3tCXc1mv2soYbQUWZhrXQ5e75E7moVh2T3YMY5n2xhELFfuNZxb2PSJ5KNWYwSbFRnN9sx3uZrXja",
  "key17": "2zkKZEUG4Y2haVBufxDPmfxFPu56ZUtZBCu1EYfn44swrXVzXDyskuWPoJRRsTiAj5prhtqL65LhhQmVewb1N1Qk",
  "key18": "39jwUmUe5zfj9FhqbDb4AKAg6jNwwZK1g4rU523SEMu2K8mdAKSPzVAoti15yjd9gpuhXicfoVWyPzZp8chpTzz7",
  "key19": "5bybceckKFXwKgcWYfR951CRDU6eSv5TDDrbraUZoqYGpdaq6DvtRo9xQtxsJvg5kCiAyqUXgUSgQ38vogfwsYxn",
  "key20": "5dQz5FF9yMxWR5NWe3gCsrtWhMGYWFrgbUBiXkSDTTvLg2hGXiVqTDhSQcAcFoNrMJMr6yaNdBA1nHUZbbjAYuHy",
  "key21": "51abdq8DitoEN2GXh8zrRkE87Y5GrsAmpaxyYapu1TY1JAshQN8VFHVDAk5mFqwnF5YbAcqNvuopAptZkckPVbKi",
  "key22": "3vUhhFcoB2u8cAkDYStWBCxtZqzosAFbYCGjp5qWo5tKP4EBFsQoypKtPaTSFbrMYx2j5Tc1wCwgMYW2FjJYXd6t",
  "key23": "2XPSvSdt7ox6wAGKBb7CnrZkWo7m1UWet8NtNyYXpfHx1cbUnxpSkwos1EkwAmr3dF9BrWPwaK6a7LzPMVorEuZ",
  "key24": "4rG3ThmiAz5oHZdXohRZUH9BnbdH2KR1C35H5ogQFJ3wAGvCPnD7pmG9meNiNzsBjJJtW5QBKxscT3nGpV4rrawe",
  "key25": "xunCzmEaLKfp3r5RinLGrRmJNsvVeMAsRrZsTUjoxXK4czsnq34voevMcrDSchNMberC6C1fX6rYEnxdyqPu1cz"
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
