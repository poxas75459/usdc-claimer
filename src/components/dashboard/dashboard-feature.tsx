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
    "4BnGKPnUxB1hVaJzkX5tTDnPboneWR5DGTtr7zDmJYzomS1SwsaNegz4koYr8HyCFyxamvP5w6wuu6gBztUWyg8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23yiJKf8LDYvojY679NaGY63msR4F326AJGLdfq13q3GhCL3i4vQ6p6gSmBQdBjRtbgXZcBn62tJF89A2sA4Xgqk",
  "key1": "32Qzapr7Rsq4ktCDeLxxF1LD7LWaZGCzDh1M1jr4xxJpd1XfKT21Kt2E28v6KKudgjHarXne5G7DskLKVbndCccL",
  "key2": "2M9qBeXzLnKFd9g8W49pqbiZSPHfpsZ1a77YEt32EUCtgKenermHhQDh96Mtg4Fip5aYT4w5tyjBrnNfSVinq7jd",
  "key3": "3HPWZz4mWTKX5HoqBkp6bW4Xoem3D9QUY7QcMqkqEWCGd9njYQndhsBaNAsscdASFtuZzkYTHuYEDmpQmhHLcTHE",
  "key4": "3dBWg8WjtToEZqiiTtvFjYbHvCWxdF1XL8R38AmPPqSqhKaoDBkC2fTRP4aaMKKL9eoqFsNQYghbWkBzrvQwUync",
  "key5": "2p3tNuGCgHnZMobeSSB1ffojmShAb7nuMwErZeP2Diuo1QNubGohDLETAVTtmDww9C5o3g5gSZiu9BYDuZDNQaJV",
  "key6": "4Hw62JFt5511Uicue3ZEZNDRUHRfjFMK1BYKESqXBGpp8unJrSRCucH3Tdd734FEomg82d1pWZ4UsBt4XCRH2wZ",
  "key7": "3e5s4iQmpbFP593aQbmB5aKSowTxL6NkhMjTnxRnXz8gNRmNDgm3TzyaVMktWYq2Tksd86gyHzTKrAURfbUdGhho",
  "key8": "4udQnYa2ybzhUhUfeYn9GmnDwLXDbozahpQ4HJBjHwdSxoDjksunQ7mrbe6abkswj5cHSJ8PRU7JrmUu2cqH9HcY",
  "key9": "ZrTxQ7q6ehCprRkQBXN5Vt2NUZXhmZZwY9ry7BUGb9xBj2cvLToLt1sMAKvDpT9D8j6boQqaahBqmQX2BpMDgUk",
  "key10": "5FibS5gNGTM51dxePGC9a7vthdSLoezWofYDi1e6ZLpoWpwCZGgsZsZdzM42zSHZfPTDfYXxLaV9wRtxRy4BUvtp",
  "key11": "2L8if24ekN31jfkqQAySyGBFYakCywdSxMgKQxQAuNyLuEGYjK2Y8SPKiZyhTRhm6o3CS4NVspdvRjMhQMzMMVjm",
  "key12": "4HA3H1YdopSE73sBQSEAW4b7P1PskoRU5yzXUQVaTQdQygxpexmK3y5Zs44Xj4pnPkkm8kVLxxKdRVTXmrNFg1kv",
  "key13": "kL5JsfnamqTPbVGLZX5BAX8umqjZmwtNUzGaLzW6VrvFANEdoohnM2ginfgBasmgvMhauq6P79RtJbbyz7siS9D",
  "key14": "pUanDBkCEhL4CNcPziUmVC14z55uRbBpipj5kLeDxiqAMvUA8cbQ4tw3sDnozeZN3sj9EejmUsxADV28k1QpxJ5",
  "key15": "476w6yk8CiYL3gaq9m195WwFFscF9ApUMVRLJa2BaWnVKeY4qgwboLjm8y4huxVVLvvXVQYbp7JK4XnFCn4Gtn47",
  "key16": "4vV5yYeZDugYnpFspZrvdZ87RkLZjPRgUU73QrhyRz8Ywrf9NHfaLda8WsCouB9K2Dzm6eGDsQhsqqVh7HjU76Uw",
  "key17": "33vCsARnoHcYMWzEJJuWDGE8SHfUfYL8FTg7Vy3Wxzy5k2jf9PrDEAbEt7uWgnS62WNKZBn4fggXU1oo1vNSFfBR",
  "key18": "3eSEU8AUU4jQondgSsFn3eduaF3jzKgQC5axYUwQRzAti6CYx8ybv7rZHpRzBmeBpbgWKnLM3Z2veKhmGidRLBTN",
  "key19": "35FmU1QyXYVmbpSn8H8B5pcR8sxWMNjFFVmQ1ZcABKRVRJEVGBAW2Bc5xCJEHPY6mXnrhfLvwfX2AMz43ZAN8F4",
  "key20": "55ooDFnMJozyDHCg4MhqPh6K2fQNSw2ehwBrESgwcXwRy6uZWty6LJ6gbcUnP5C2STamSwWyt7RxFdRNPcRQhtNS",
  "key21": "pHLkKpBa4hRD8Q7nSGoeCP2sF8SaR8nSbkKT2enYE36YDWZuZrKhkAzuYm27QDcCYC8MNgiXxjpbYaVUmsfJrVz",
  "key22": "HgLsLX49EGjXe2JvLBBbprsiWHMprzFJAg8reDQd79eMe2uPQG6dZRGPiZZe19Xng1YVaggHiuvLrdhBEGs3P5D",
  "key23": "2ARKntB3CrUDSZ1tTxe8TLX4DKHqHeMjSMyoFYCMAhSHqSCbhTv2353dZ5Lv3zCFeegGWye1gGJ6W8M83Afc2Kwv",
  "key24": "3BU4pYzUZL1D6Hiq8FPjhUE5tCE1Vj9AaZAU8mv6ujUB6jm29rYQG3aD8RSLBQa5iZ24yCz6yKy8t5kV4FqXzs1n",
  "key25": "2Azf7DXZYJSAAkkRzENj684WtQNZNw6XbUKVviTGEXZN6YMGj4rjzCBR9xuHTq4ETyAcdHAYSVQBya6YwPjNHHsk",
  "key26": "2nTyZiWhXCoT6PMrhABq32MMT31EQ2AbKDmZsZLgWyitLaL2aVzqWfjYuUShE7HCNxLzjC1pns42vsr95mSw3Dxc",
  "key27": "Fy33VeCKjAmiftpiirWgDTmtXidZsFoMH7kQRXMkCgUN2yfVwYFzCWU6TdwYEZuQJpCaSAHTFCLQFpBYQhUa7MT",
  "key28": "4CmVoMaUai5oRBjMhtvaXrbjSpRUFNpw1ATzDRwRhbvc7qmU55L8Tdx4iJiShudb7vgQYWxhSwKjPGok8C1fCGkw",
  "key29": "2j9fweEwfyKZM1PTZquJyxAm8DMVWxdfAG9JM3Nv6BQvQDh5idkdazqADoJohxRH23VXtPmeCybtLL3ccD6dz9f5",
  "key30": "4oEusAbszqaYZwuDo4KtgcTZ4XjMijYM2SsCAwzE9AYMYpaxRCsgGjgxriptiSSXiFCss7awfeXygcJje2rLMRZ8",
  "key31": "5RA1Wy5H9HRtX56KVfJRQbz8ZndQ9HZX6mccY8afvBTitaAmLLpzC2peBq4QnKRaLtVkH2Fcvg7yZFuHppKcKMAg",
  "key32": "2X8SNKmsdHK8HUFsXKNccizgSK1z3bNUE7gCT9X5N7bxS5VvyHvGq5w6uZUVYeEbSr9X837jU2en9wpd4xxw34uz",
  "key33": "5UTLcBpvcgqeLCNYwSpF9c4GocEFRnJrHArXpVLZk5sxdCV3xP9fSbDUk7CJLyfpzHUYmKPZ2M7sheyrqkSZRxjj"
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
