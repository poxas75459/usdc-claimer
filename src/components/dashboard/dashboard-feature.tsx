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
    "V3SDNZRFwLRqDVdhnJ3hN288hVMLVxHnNr5ADTrDvXiYU8s68uNhghht2rsQQKLxyP2yBDiqZYaY57SxFs46e3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTepKevXQUiBL843x5TiBZ431itr4eCTurH5yWbjd1dJgoCdWUSUkeEeVHnwUompP2SW861QmzGn8c49PmsNzsn",
  "key1": "48NgrK5Vic8Y5uHCToFKmwazZZnQAwaV864ZToS8xK8USqHR9B7qSK5XQWrXWdYDbHkShpXnFpWAwTS1gB8nxHKm",
  "key2": "3wvS8CzZdrXrAKJt2EUhYpfuQCMVdE4r8QtrjQU5rXC8qwyEhqYSDx7kSPkpUbSnxRZ1MPoWtzsxaYHyHVjPkXAE",
  "key3": "3Ahb87M7Vnvqb7jaekGa3YJBvvspiqaifAX5fbVhm2bQ8FUKasrW6ebYG93SnQiYeuN6iwMQPCHHpTBZHCf9DsNt",
  "key4": "5YaVQwSDdUUQSGP7Vkxou2Z46XVVGg86F6FMBwEoZRyQA6sPYF2dShofD4Y75tPxgm9cPvg9zh3EkBv8rB259cqm",
  "key5": "28TR69K7XvdCsEbcpVTG4HMvEdBo4XFik2TUcKc9VTB5xMYyj6iP4vwspfu4Dww9F578QRfanbToH2EhhoF3pSuU",
  "key6": "43ZpGWVTDCjKmW6KBytj9gBAaq2qYLtgt7c4whNY8UTzdVHdLyDKcVWe5gCUxGWNCAsp3AvPF8JmgMaYy9CyQQrU",
  "key7": "KzZHwKDYmofVWZr4e9HecZrJWP6uE8KDcT3NT3eDQVjoMD4mESVUYCsqzZN5KA2cQ7CdfKB6mSmMU4qvcXzx45C",
  "key8": "55TMyfCbLA1KfXAAHhm9NRzbraa5zACDPfcD7ZFsrifZZ4bSv9CKYQmRRKo6FmoJFDoSLBgssEFFjJNuxv11oiWi",
  "key9": "5cNATo1U1iu2ZGCgTGr5DgLe8xRyJ1cvRwTBhiMi3M8XMXUky2N4pWRA7kC5gihpCGcuoxU8C7Fwg6HJ3v2UMMxk",
  "key10": "5CysN4gWvsNL6WWBdeXg3LwKzTNvo3TMTZMM8ZXLHKxczKaPvhvHFqH7cTk3nbjEVUWJxS1yciGQbC3dvagUwkR6",
  "key11": "XaWajntLPbezgAeWicqHsLCkYYqNYxSSVHDVoG59a6VPtPjGAZAxPkRDeJKqqv6QbcSdNewQnxBcXdDyUUQcrDH",
  "key12": "ubYvhkhVQjxkvo16JoUyokb2zTh7xrYanxHWwV3UGhJ47K5CTgEGD5rTUYdnRAuox6fb4k9XNXLP2SyQLBLUWjb",
  "key13": "5ShB9GiiELX38hgABESaEYCZJCJzQt17Biif7dvW7EwrLyYzuNZGYGajSnsvJdsCtb9UZjNQL3eR7XL4Mtf9ZMgi",
  "key14": "3sAzjrK89RLGMe5GPhkRrPKTX8frPQ14jNf59zDETzPBUt9ZzXs2sgTX2xxKKBi1eCenicFZHmjcCtM9Bjdm7e4x",
  "key15": "2JkKXjvoMrasgHXE9jaPnhSm7ZveXfZ5TLqmst9sJ4Qvbbghkv7FnDRvCTGKwUdEdcm4k42buoGExxZvzoWdYYg7",
  "key16": "35AYbeoVixsSzMWUZMDsTncqfh3F3gQw3RxHM9krNU5nt7kmpwA4dywoPhwmDSbFtREAe2yDeeH8y2mg1cK6DMuj",
  "key17": "vLgVuwyccoz8mWFpZnF7iv797TcrvcGqouXWYUek5qWfLc5qse2cKuVtz64eR1zmmVUHBqtftfoJPXi5BLTihmh",
  "key18": "27Va8yVdijo4eZX4CQvz7HgcaL7WDRXLv5eVg8wiFyRBrRYCURNcTnCRqvgbqwXxZobhAQaF4jH5KKZpRGyZMShT",
  "key19": "xd6EykZecYgodjohs3BYaNZ1HZLfPzhEBMXn2RehFLDgYFqAktdeg3KhVKy9vY5S1cyBrmg6nTnKikqQxd35eQd",
  "key20": "cGW12VrFypCf6jDF9bnMfiEGxGyoq8E7YWHd8JpQvtub2YnFgwsLsuhF9jFm71AEj9qbSTmykBCCfgU4kjDAMyQ",
  "key21": "4mUTeEj82979dfVCcGWrfsu6sUrN2RuzngTxVtDWw5PWBX1vsBF1pRmQaFyhZjNs9MYdWkrWFZjfnJS94uTPBrZB",
  "key22": "Dq9oyCtgd8fJHtn8qcJdu3sjHGeyaEzJ3gcMx9PqQAuTu8f68AxeQh9DLhk7WmXy7y16ZBNvBvpuggStY4WVs8n",
  "key23": "beeKtQzWwkktxPKbo84JjERMcxMWASEZbTk51RV5XJvPxVZ9vzUHvAtfhfNVsM9KQBUXiCgQ97Rg9iysVybWvcm",
  "key24": "3AMqf95QJTh87AsvdTDgTTpwbcUFRS1HmVZ1CmMUaW2pgfdADiUMHQDpK6w8MUwUMoCYKeXa645b536Bn4K3V8y6",
  "key25": "2sfMxpuC3kFT4tyeXEKZmef9CMdzaZ468eaXePZC779NWm1Ry4WgZv7sfrmbHwgbRZojYQn67dnhtEGMQ1BhqVYy",
  "key26": "5P2VGpL897zfycjs5wGpB5w1cYBDdZUNrCaSQbW12sgmojXXfuZHBSmKqkmFxwSgkdsRTP22u8MmRK9jtGqLaqdT",
  "key27": "5YQfwHES7ePYQ2JphJQpxQeoDKpQDP5oJJFkoZCYHTFdD5G251w8jCtrP8gefVqjKKsdHz5eBo4aAu6p1inxveZb",
  "key28": "36Sh7B37Sgw2Co2ZMphzhbNbT5nCivMTKWCNYjPb8QxCqr4HzGpmrhSNruyGT4jU82GWDyySR9PTAt14BckYGF3c",
  "key29": "6LKX74mJjb6B3KcYN5z5YpqwCUS5P3LCkfzUkE61FSbxyGFBhq7d4VFZSDFgqvwQREdwFNEFynPwQJ4aMe9oC1Y",
  "key30": "21cFe9JFQpCJimg6LikEkVqp8XozgVuVW5g4kf928SU8KuQsWPyZQjrnt1HvKF3sZm1No1z8Tkjt1usHvPCXSs7x",
  "key31": "3zXhFf1YAKo6LephRxtWg4yiXz4fcQF4Gb3opsyPSqbHisw7mCNwa1mWvf1s1pxykbpnmWxEzsMuThmL5bGz6nWK",
  "key32": "5AhASpGtab5GzFz2hSa3sRasuu7VdCzCoNUMXhFC9eWryg2wUe4749ehHss88YZXwavohdXDYwAA9jJQvY3f1Pm9",
  "key33": "2PpJjeNvL2wmSqhp8ERHqgPkoaWXSabG8Ry1at5nxgkHNBwT9qDqqm6GM3XENmoNZffzMywUK8qZSR7y3wyznBnp"
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
