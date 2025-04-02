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
    "2YFiX1m42dCj4U6PHeWZ2EaicVu7VtmWZYqTGRxwek5ivSHJxB4x3iny1zg7Xh3pXdSuXNdhRVLg9WqN1BhS2X7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rb4P2Jc2xLSQdD72eB63een2QBXJ8Meebr562aCDDeVhwofsnQkkCcjy18tVpBEhUUtGza2oGft7WmQdPpe947J",
  "key1": "4URYdNavQENvZSrftapKuxX4KxiLpkuZhvZXSsm3aCXzN27Q9hS7HVBnaDJAMSX8oyRFGisV9k6qQxT1pPxbkKiL",
  "key2": "5NRDSue7Qeu2tbD3nB39k1XD9QKeXD3AHbKBhxjNx5u99FShY96o2wNEot6TorRNe4Pfp8Lgp2QevstuqhayfiQs",
  "key3": "eneGJZoyTGA7cnneq2fgisQMTebuqqWbv7Qjzep1KTbdAk3Q46X6jo2mCMErFzqZ4haqTMFFRvmfAht432GdD1E",
  "key4": "DnGS5m8SriL1jM6BQ6HsbC1tudVBdpKeVGqkNeNHpwVLXMcQi5iMzfkmXYYpUSGrmJTEARscR39Sjhgm8Jfeyvn",
  "key5": "5Dp32EVHhotAfcdeZwSr18bSxQCyeN6onSp9GzgDRYJ2rWzcyeRMrqRJHiSJzrWjYQJkd4NVyLaTYRFuF43Gv334",
  "key6": "41TS7WLV1BxDuGLwSAiPDDnU1B5cEwmno3A5HbdVrctcnH9Ej4fpEPToCJLPXCb77rwmP9dHgfrC1PznUgqjiCg5",
  "key7": "29FRSkBfWhphcsTgRofdFa3mRxAhQSwxJvwefmK4zEjU1YsYdesTmQoDRpmJXfRNeHoRnXqZT3qTPkx1jvgHCddd",
  "key8": "2Mm5xLykCV5dgp3S62d61QCF5xfWo8UdoYs1GPZXjXXshcd4Km6Nx6Tb7ebBUCheKDftxZQvPgP4xEyEud3ojeP7",
  "key9": "zgL9tSPKZKV5gg9ar8R9nooZf3UrVpNWwTDf6E6HWRsK4swTSGnvtGB5yBVZPRfQLAdLhzogZeCMmrEN1f8acCk",
  "key10": "3XLPop6jMwMoMTbdY2PxQQHFKEVGKg6xKPrCb3ohEEiwwuhEJtZ3sWUzNXZUgzF8ycGUwuFuNumEHEkb7zimipHX",
  "key11": "5gojqmwLWKKuuAUTXGtMF1Yi59n8BKAVEHawP33LGrhsGVq1odJrCbmVaHfSYFZWb4xXdN8SL5ke4UdjKZejTFkG",
  "key12": "2pZehM4NCjqrQsinVQDmcVQY7FJcRidYo1NxBQxChpk2W2qLW81p6hGL8kuUw3UWiFimfgtu8kpgs7xb4hfDp5fY",
  "key13": "5mAztCYfNkGmNA9ZNuWvai4KVVhGTWZmgUZ6RnHhXZ32QwmbFRHb5MgMm62J6S12ykKG2fvmt6644x7a4fwkTFWh",
  "key14": "2Zo68ujur6DxniS43ydS5D1AABNRcYHtQZjBtUeiXiDzoMg2nqm9gZVesF2zxT2tPcmNbu9MQt1dzHKmwUGANfCK",
  "key15": "3nPuUN9pvdCKzewxEo8iNQnwDbsKz2EKXAk7hEUCMMPFhcKtDyou4UttAZfVZMnD4svkGec3AXEL6jbaeBLZASeu",
  "key16": "So63JXveS4aT1zeXo5PFbEzTonetUpLwbHNFeRYNTbCgJVrmsKnyQxUpSmgLjS8fX2g7nmk9dGDhWLtvQNSC8Yw",
  "key17": "5iXutTEEf7TgtwigAbb3EXffEZx7a5mR6jyUqENwndzWizkeadg3ztqu7keVh7CQCVmsfNjqetT18m4UQuQk4W1T",
  "key18": "4XNSvSJwFwkqaFXveQDqn4hPMkDKHDnd5P73Xv7ddtqK2Ky4iPquWhXqo69wBZUsnD11pyUqPeEyYzs4FtSEYnH",
  "key19": "2WVknt7fp663yJBeugUtW8uU2NRpSnc4H1x2mUsPeuWiqKoTVduMoHuaGsnteBcuNxfYvEp1QbCAcTnDAqMw4TM",
  "key20": "65xJPcC5zYy526jT4TfwYae3ss7Ttq8sXpGuc9KmrtQ3XyhRTY34DqGWFufcsDwgoKkEVzJrWWwK5YPZi1jQcokB",
  "key21": "3u1X3WrRdgXbrE7s9qDGcN4SrjAppzk8S4HBnpRwiXPJHScv4gmwmJ8EgPxW1nmebQkNVt7vKzjeZVzNXeJDoXdP",
  "key22": "3p8HtPPkHgW7Ao2b6oLNcitgUQtbX4t1WESgZxiHfWaUwzNLrpHYnWA9UbuzL3iZdchmSnwA2BxbFTUT5zRg64EG",
  "key23": "4K3foDamjtW3BqmVConXa3BzpRawJq7mubMN6h5rhEGNgBdqUreyogLZyEaMGWMuJQ7fwYpTkx7xbcTzma9pFVCU",
  "key24": "5b34wuWnu6sYFSxb9otuAsSAw7LY7LKbNM7oVgaFdNszDjww4PoifwoWL3kd1hpLrqfNGNQC6cMZzRxippZyhBrr",
  "key25": "4p17vBAcqaTj7o6BXwHkswMf1cecxugaBNc1nQoqQyyF5HEkC9vSohhXKcXd7cpGNcqWLZXFYgBcqnGLwuSFRxcu",
  "key26": "2PsKH7o1UXTdLR8A68tqw1aKdUuTmghTCvs88RyKW5F6nyuSLHrxt7rBaHqsQaxpCxi6ZVvdCJmD4VpsSVUcHrTQ",
  "key27": "28dTUSgmZKnPpjLrvx3keefZjYDtvMJpgnq46pJ7qC8d1KRbspBVhZupJaC3N5RAFheNqT3neAsr6A7qXKQBDHDV",
  "key28": "2tEfue3QPsV8BWeoaZWqsJUzCHeH3D4zaj5SdTx8mK19QtUfAP98Xjfu652EUHXwZ9g1bqSHAHqEqdvFvHPYThH5",
  "key29": "5s5wRuJX9rEVHiQHMNjrW7Ytj1mXEkvSCKSaFydja5LxvZriTc3ddiUUT9Yyw5ATYpxib9RNMGeyBqmTNArq8qk6",
  "key30": "26WCW8gEuCzHe7EkAmR5zMgCpZ5ai5mhq9Qs52j4f9wWQSoc8ispYZCEj2wWTTFBKNKaTkYkKqJ5GPrYDdXBZH37",
  "key31": "5Rp7MAoohrMeq4cYfXanw943SyXqxp7TrFbX6Wc82AMh94dNt7MzuyK2EV2XiyFFp64nCqkrUHrNB94NXufsyn26",
  "key32": "bSppNDSqDoRGPztfeuLFCB9MbnBj1VhPQQYLsm7DDFA9UYoJjCAMig5Wpd15nWCKhuxm7HasuQPa5GuFRFh2NKs",
  "key33": "EjiDNr2ZdD2HJuARA1VjQCRgWGJfnCPF2Lj5koKpfY151bLgYMM97mmqEsnjnhBimLEv5uMNjSHzTedKkboHZDS",
  "key34": "2ZaNm7k6hSEfT8zYdrrXwNQUm9bSSiohxWMVbUPxBbrxuRkHja2QupWZujb9Jsp26YA7DybQqtyUsnoAq8g7ftLh",
  "key35": "2cixm6v2ZrPEK7E9wjpRMo2Ri63eYfHUGmehZvPh5m7knE44q2xeUSQejsP4YomELwWUiqYcogfFQrxPcoFZEZM",
  "key36": "5Jv2ejN8NxChdGX5n8D1MGMcAJ1omotUvHbGia9tXSnSBtfwjg5MaGa2Mnhz267HqbTCpP8hcFPot68KkdprULXg",
  "key37": "29MEG5StRyL6RGGsjcgSLmo2X8ys8F5H64BKbqi85gfy5SjFbBdc19xuvGoem6sjRVU3pnJ6u7g7JQkW1z8X7ggx",
  "key38": "3TFtgPUtHtchgc7ikwuYUUSF5jVjGHx9qEB6wYttDMeQM5ae8LRE4deQfR5yaCtHgXtPAi1kzNqnkX1U2b8tkzpj",
  "key39": "5L9cCC8oDb4uoYkG8P923hgDD5Hs42P4gv7wvztMo5qBiMupf6HsbBYZevWZ4L98Nu4ZAkViNBP9nMhFf3inzFuT",
  "key40": "4SNqb6NhEL7wMvVfBBbD8BqLor6GH2GzHbesC7G7C6SGhk2vA4CZ122E4WYidpuNothCJbSiD4cXQR8weVepNJmV"
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
