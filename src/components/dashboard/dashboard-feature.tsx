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
    "2uqaBzJbGuWcj1Q82kNY5F3p9UgnEAwkq4sgXmWMm2ZdULmGHmtMHy6a68ztiVQPSmEAjHhdfJAT4Q8PxZEDXmY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NLah2wpCtAZyKeDJwFcWX2mgixHgzj77naiqKc1VVp9RkJqhZ11YaaCh4Ns5xZXb3jD4MjihBhTtcwhi8b5vrYV",
  "key1": "4xbF1vtB8jwx8VTGCkNK9jnzbbu5VvLMgmZdiasigipNGmn983r2gCGyhhqUC4rCa7AqpysDr5wFUZSx8sVhktkC",
  "key2": "4V4U2bCFBxiM2ZDRoCAVEQUezWpw2cAgZiGhQ8sqswNPgytfSqGUpWxi7tNkgrHnUocZnwER8kLEdVqzKdgcitMW",
  "key3": "2kSRDiCxYxtu4GFT4ok87zkL2PM49nboG8i4tB2yoXqjfW4Mtk42UoRM7vtRLFLbzi4o2AK4Qi5VWjAU94z3U4yH",
  "key4": "2vVSBwxiJ3ogvpi4qt87NGBN99LK3whQPfa6kMSGjhABquEZtEyFEqWmCoSv8Mf7P9FQSvpTwGqCk1iMu96Q4Rxt",
  "key5": "xqRZsPRhZJNbpDJce9stDx9VBFcHzrWYvHAyxtxS9sUiQNqvXTVS7LPGGCUcUTCGBvN2rj3Zu3hH2HBfTM4W1CV",
  "key6": "2HWnr568bzM8EtTrsHdsLgDMatZWe2AKBEkMfJqY599PXK2gwz8k3Y2bhwSbiayMux42xvFeFCdeVkaXToJdCZ28",
  "key7": "2DdknvrzXCY2w41dSUEqJHbGSSJhhthtSaraCBaEB17xyNP295K3ZzGEMtZ2rBkmEsacfHo24pm5FJc8xDJfMdrH",
  "key8": "44C9QsXxevvpwYBKv9Yx3MaZhSHGGiVWHnHfx1J2SJEPE1rjLpsJFThXRY5NYdmR2Y8FSCf75kg4e7QU6RxSJ4Ar",
  "key9": "5uHU24m9oHhWXwrPmVv3WB5WPJifpWpTWr8xFEzHqi8mPaCTJAjPq11GVJTenHNiXT5TwzkZgFnsNaK4om9DVXQJ",
  "key10": "42iEfRXNCbZC5a7hpZRTHyyJZfhx5HtVVEWnAAKjxxkDVwJtUraddqDCww19GN3KpQZNQkwZkMgMD4vAbGpHmW9X",
  "key11": "psT5kuYqCWYGiAcSNHvK7vGU4B8gJsFrHU5xe77JbdxkHxuobNfdUNEWGFxqqADZmCi2NtzsxCPwnK36cTVqmkt",
  "key12": "B612QkqfDZfco1gAJckfN3ZhgenfQE38VfH7eHng8AjP2p1vXAT7giC7UKmJZxsUrSsw4GAX9vZvfcrNcukvCbS",
  "key13": "4D8P7kSiuX1bHXum4pgVMV2sn1h99HzwA8Bx2HrP7qFCxSSUdUp2n7RcGeDSgEtTaioSGg61dBv7HXUu7uVnhdS1",
  "key14": "3mmXVyajAi38De8hNVGwnMXunxNLseNh2N9KVuJKYG4EUgZAvVrGy1SPzWnF3pB57u3eWBdzrxnJdqCkXEJBSkjz",
  "key15": "UudKaAnebXXmQtPoBodAh25hkhsNZVfbyqNkUURfnWGBWTkoW4PW4aCJmNg9jiYFYZoMEzLsWhgZocoWbPkxAfj",
  "key16": "58PvXhghVoLKtFWsh4HiUakRm4YED9cyBkovU6u76q93LzQ9zS6ikRtUUbXSxXnAEK8YJhUL5kzdW323G6qi1aFX",
  "key17": "4GmPkwPxn3g7K6uJ4vH6ZGKbS2oaNs8ctB45wu1d1xh4DADnzkk9UCRdbG16FjEt1byF3aYN6AU8nHLpVaZmAVfP",
  "key18": "4NgQRsyUMHmbGgFwjvuzjkyXCmk8W5Qeo5PUMX1s578fEURoe54hq1C1bUhabMUjitBSSM6Rb5H2sGSEaaUgWKJD",
  "key19": "6Nuu5Nv94DwNYGFdVALZMz6EFPsKTdRj4xHhzfKch3R1y3sjtdrC51dSjGKYaV1VhGLfnm9NGEQ3VK9UaTjE3sp",
  "key20": "RRhQDtYr3yG6cKTDkdpc9UCLV78yjfdwHCJYfKZCz2cZ5ZM8CUg1nZj3dnpL1Jo6ypj4c3kLZTpC3DwSdjVkuuE",
  "key21": "2ZgbZV5ziP31xcW92GZJMDm1Z5AqtswhtHtMSn4PxsuNPSoCHmQY4paLLsyoteqKM6cw851HTBJAWdCT7bkkHpa5",
  "key22": "4vbHhvBDr3HFBN9bfybtBbFP7gPTuefQARQFmAnGpMLLDWNmH1XHWebSaCEXhcESY72Q4c7G2XYUeBkMq5A51HBC",
  "key23": "4KrsrgXr1R6Egk5JwkXdtc8K4cFh5poDh2GKJ9eANuuUBMQjtFy5nBX8YC3NJBnzebvS58ZqgcFKg3nWkhNiVFYo",
  "key24": "39619NtvNSMATK1in3VdQij1JBB1P8AgrAqnGRsYwGuhPQtRoYL2mCuPMEVb5BTqyLoAbFJkd8JT8TJkHd2yLDHi",
  "key25": "3NoUnKyyPkDVfDzPUaCf7ZpRKZJedPRaPuuPj9eoNzamtEgqLQEGS1qyuy6kVACTujWpDVtWWgUURRaDovZnGKsa",
  "key26": "2HA5g6pqL72syVmYPgaDaX6cgAM4Q1Zxca1TiJkbWNohVzRToCRi8rrgwuCE35FpeKcNft9BQsWRXXTg3G56Uzoh",
  "key27": "2vKjb2Mdx6EciW7vZCLHEAP8rRePqH4q3GyZYdsjaMv2b7FQCXzhTWdfx2fBqSbntfmEfy5fttJS6bmNqhw1ADeW",
  "key28": "4q9oKsdcps46pSLWyYnqb7yDhg2ttKekezAGwdR6Aozu1DBkcjUF6jmyVhW1ZqfnTTmg6nEfa6Aoawt7KwpXd4w3",
  "key29": "45vuwXQtbF1rBnXBnC8FSGgfBrsMt9ZW9GMqZg6GPfmijht5WPNLkHNwwYtUV39NWxouEx9mZBB9bL68SsUVNsQo"
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
