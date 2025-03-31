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
    "K51A4ZeqtDx93KTMr2Jt1t4dRUbhZtsogmKq6F3TFMo7stBVFQFqXWo82yX83YsHxrLXThTuq8WQU9aUhbPvMtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSpdH7pbT9gyPWBjDZHRvyNo5Lvbiyn1caXLFusCynkG6iEu4Lf92g5qXiCrfCmXxaoM5iq7CpKdo2TSUuYBmei",
  "key1": "4mwyLYSVTnP4B8n3J4i8Q9UJF2Vr3fxGLTUjiSGbBfuWKXhcdJJkZEG436C4YcCVkMHjB3w53i8KxtTGAeH958FC",
  "key2": "wKfd7hhepVV4m8Yfcu5fjBiJtrXRNa9NKzyKHyLW11FPX5CosfpHi2jK8v2jNRVzoZZuiKFXrGveRFovcgK6k1W",
  "key3": "5gKMniFFDnVWtMaUUEqNJp8RaudZqomU1JoHjJH1jLXpJhvCkmynfiT4JT1z5QexQp8R1KXZ5KrRA28DAhrfDxt4",
  "key4": "3MizUSsghPb7XBtzjTSJJwFd5CfHCgbuScYrsLUAqRXcmgBXotvvaJTJU4ndz6bFas5qHgGn7wPw51LGaDy7QkrP",
  "key5": "2XpcEZSTUWUjNjcYkaVipF6BH4Uz3oqReFQBA4W34pK7kScNKEj3uHDbWpXsSbDYyQF3wWuu85ZgVHARAT5jAVdS",
  "key6": "JrxxRm2skbCZvXPo6je9LeNhuqqmXZfht8XyvHm2Fy5WvasBwbWXDXkcojttbTYpVV3t8Kf7qv8JWKck6w5s9LG",
  "key7": "3bx8gswMUsWqz2pGmefazCcsofbg9zroRJWQV52GveRgK4zVMYSeJEyZxUypammTkh9KYK2egDEkXTRxT6Bnm6mK",
  "key8": "5gn5wUTVW6fxo8xgxh113XqorpNWgnarFPtugiup37CVJixYFSJQjJCb9xJJt3BeKPxSiQWuCe86NP15WMiU3GgV",
  "key9": "2s5ncKN6dkpCDLNuQ9MMUo6fJRvUXjdiPGSts6E11Q7g4pkrAnFdsrXmzL6Qt9QStQpfdzkBVhJ1LL1v4RX79f5n",
  "key10": "j9wSciKrvuUVFXr8prMbJvJa5Tmx9GRQEQv6Bc1Z2Ldq4VUsya34yMwYc6HHsVxuhGzNSQhxca44e5LBvtaHWBE",
  "key11": "2aCpScD64XJoF6coQDkEcSn64VA9BWM8cstQu7CNzGrRKYWSb6gsKun3SePsWNWP6YG1rGrvXQAZgt9URJaEVZtY",
  "key12": "2aXeEXJ68GZ83229p4e8JYWZmfNgaaG1p1FzhWYvy7FVqHVdz436k3kgRGCxEguFQP45VgyVohzj9hiVxMbUvPuQ",
  "key13": "2V1DoQwarkC3agZ6SX8FwdpWXcfEyQk5PYSiUpt9jHenASQFsUYAQgpki5gs6qXH41VwRxp7xJufTAaFH87bV4ow",
  "key14": "5UFnbXnK67mvfjqszTFQqyYVb4VwFVTjnjmyKY95ftBWp7kAGNFjT1BYmvoi4YUbcPTavKrgUNFmFr6pKrLrig9X",
  "key15": "zm9Va4cZQwP1dhNCJbDZHNhJWHHBygomejjZAANUvE356Ts6rBLEkxw4f9ZASoCEyr4CLEvSchtriAKNS5RtgBt",
  "key16": "2TwLPpD1A8XUWJ4te6mXv2pfJ2poRVLbGX25mQGfeo3fpg42GL6yaySeGYCn1JNNjgZ4jA3BZ9HbKPLfFXiFxFZ5",
  "key17": "26c2wdfSe7EutvwwhySkoVY3V8YnKcLnjjiVoVAbrHxTbLrQApQzvSfPBoxu2nycrtCZoDiF9CuKY6YdxpFvs1Ri",
  "key18": "4nxxa8ctma8HJnavosuJTc2qn6EFbg8WA7G3Sw39dwHwvNYhF5QHzHYE7hu8TLm3EXJsLwJGAcMuUXkMfhzKvCWq",
  "key19": "5gCS4nCc8FFK9xcYE7cgdAc7e7q4o3kuztvnGWs7CrpJXPwz9s4xAANpYT5Y9ufo3PuXPwSKLJ8rCbopLH42dkir",
  "key20": "4DJkRHgvrKxyy9y6UrBFs3yaoWi2M9UnZpVDXHF7kfbXKSVu3ZuhoZC1CQBPmLjR7eE1sdgGFa6u7Nwnxio5TK7M",
  "key21": "cHUd9q8uk8tQykKWm41cffuSLNrP3JgFkgWHXhyUYuRjqDy41a3HWqXJ441KRsitsg9H61oXfiowxndy6RUoocJ",
  "key22": "28P9ohCSUkLdAsdTi3pyv29fUscCEQ7FQwv5W275Pbr82iiGcZKbdq4nHxND3fQXnJmsUP9pEq4xiQxYAHnpumAU",
  "key23": "3cWBgGFntbC9SAMRHQWwoVVhqxHRfFCveFMy2VQLGP9aVFMpsJYdzxMq6iLLfAdkGYby3tAy5338CckDbY41R3Fk",
  "key24": "3FdnBBbLYExxo6ZXEHA4eQAe8enaXWQ5sPGmFuT77Zvoic51ddqgrGgvSncuwexaauNwCUyZUAo2NH6TqRjkTsxo",
  "key25": "2pwRCbEoCZc9ZEeyDxuRKpdTTjz7bfCPDv8mumFP1zxqSJ9WpLSancaWtVRrXwk2tnEMkGdRvAixCjrfYSfpaoPo",
  "key26": "3xGDMvZofzgqB1LYBMnsxzmntPZaoMh7sGptWfPdphRHnr9K7EqAm5Dsn9N4KLF4R9AK5hrQ1ePYtnxivLzufBLP",
  "key27": "5CPLaJRKi9pZy2A78bx33Y9LKokL4rPPgxjzbdPsDaeG8tWrXMu7LPMoGuNQoT11QF5zsP67GgeU6ZzUqFDJEvZk",
  "key28": "4AFah4g6sJuWHmJWoghYEj4f7avA7vhmGsdhQUwxMkZCbijmV5GUYL8VG8nGGnkQGSEZZTk8nWirBoz6trYFE4dX",
  "key29": "5LhqZ2wBn9wACzgzjtpB3qZsm6W7XEi2iznzmETKT599oUSqXgwkYHKfCbWe1h5BAayk1CgFekRhxcFWTouJubgm",
  "key30": "24SoWCh5VuCv1UJ8N9iZbJc355XHv1F6r9dScBsVRFwPFqZS37TrTR8RVf6AC15owjD1sELFtkNUuych9ABsaS1A",
  "key31": "5rjyQLxUzQ9UCo1X8cQaryctEfSZBPci2Cc7bG3jhSc1PYUAjyC23imejqvkgCXscmmnjj3aXRJLXjdByEE22Js7",
  "key32": "5y3Jm46Dws9sKGgmvcQVPBwjQceS5HKps1xKsyfBomMmWEUYySAqDoEbmLaVjhK8Qmz7rjhSkg4xLFTK3CaYJtC7",
  "key33": "5eft3mahEEymgzK4FvkuTXZ8Bq1Nno6sg8XXiopbfhT7rc34byNfCfQhMrdXz8bWj93EkT75wVtvb3uqLxc4Gqqr",
  "key34": "4MPnRHYYkr7SgaJu2agajkaU1x5idsuqTpeyB89VD9NQ3TMBzcRUpFkZXieCDNJRb1gw1RCWLqV4wVjQLyNHxLsk",
  "key35": "4BvXD9HtuWMKmUP5M1JXEm9hpcvinPSUe9ao1BVxKEgSbUhKat9mRH5xahVg3aLJoRzYqMZpR2rfunBeah5aqWhM",
  "key36": "2k4icvCm5F5tpjmJuWzey1AjKotsRGLbGbdDVwMa8w2NC7gGHYxV4sDar3RDt7MuTsHU1A6pXFTkLssXmXP1GeUb",
  "key37": "5UpVkGqArEdHd1YPhpM4GzvWELkVGtkGLkMzgfGrFaPNh7e6nTT28JQVZk1KBnNjFeK4GKXUxfsHSH7oZQ3qfuUH",
  "key38": "5dwSp7mFdmSGBC9ZW5iBhCKSCYgjCBYPk7RCu1qqFCCj5BTsYscwbkcvDKnXmag2RCy7A9UcrsMMk5d86QAQ8VHz",
  "key39": "219JV3WvzAxXiCFwWfty38sdp1xdvZLHYBUswApmdWvq1hGrkcwqs4VfyePjqfnWbt6o3n31q9WVtduoDffY85H6",
  "key40": "4A7JxkkGodogZ6MqTHbGoBx4dziaTWtsUsKhZMi4naWNQZCKyqf6Q3G6EAmDuLnB4ZJxE456gdyg9eeP3rPyoDb8"
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
