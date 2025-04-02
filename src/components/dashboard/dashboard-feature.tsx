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
    "279YLX3Y4ZcT9MPz4SRRsFXiNWGMHtTN1TMboaUWxFQFdJbswB4BpKsvA4wgnzTWqTbuK8E66A613EGQqxSPp7ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TSrq7EoEH3izd693rCKaXxg3dF82jk74myv5VpLRSMB9qvntkWfUWBevGPk17CfMU6fQWqZJbYf4P9jJB8GFBe",
  "key1": "2bG5WBXWQFbvLcj48v6Z6P7MX8TX48hooYaJ1j4cwJYo4cbQJwXB4uL27imfDzqNWCpmSuEX3qC9NLwBTz459cdW",
  "key2": "4vnN4WpZQP3o3jzPhpkQM4YsDjE5SFLr6jD65toePU6425sqfcuJLDvxenVpa5Fqvn8ApUiZvnZq79wzjpHNAUNM",
  "key3": "3mqAGVXckBphGiLGpRJHYEb7ZZy5qzK6mEvF6mf7okdu958zxE4MdmqrgcaJDsaDhzaJ3f772nAW2cch6UJC6jhY",
  "key4": "8aX7vszuMAdH7qTHtw5sTJbccsW4P4x4mcwBCTWL2Fi7eLRzeN5b68JEwwjKFiVgj76CcFRwgdBqGQ2Vd1zBoGF",
  "key5": "45G4tnX9haJJTRF5eTNGKxxeXnvjSNMDunKFc4Wkzb7bg2F9xHPHoycZxQQtRVAebmcQWQaQC7KGK6kbWZubYZqW",
  "key6": "5jAKEVjjE7NHNGffMb7U94ikc7X71o4HNMqWG44c6Dsy66LM6YYtebSteNsHdZppNb5WY6rvqQtHhq6afmTQMHX3",
  "key7": "2wBnEnUx2oUYN7AjirJTyj5dAFgNCRCRRXVgeM3Rodt926yaUvs2EJ8FY7WkEB1Cz9VdbduGHWJg6naN95vwzRTr",
  "key8": "2xqwrVW9Da64UBbiFLYnk6WMqzEHNUYC5hv5jEocM2WP9L2G4xLPKfymUtmjqCdmriSesAPWyDVNkiZgNHGgktsD",
  "key9": "5PBRw9tckho3X42nWLxbEXSERc4iNRn3NjmJbbErUqD2XiqtsD6TRNfVidL9G6Z6b2PLWj1Di4kwLcyXGA2MBqw4",
  "key10": "4V4W7hmMpsyuoiqxdFhLqTP6aPphRabhD3yhNpsnciNEAmG1HSFmKXs25AtDK6HV3cYN7Dvy83iYeACJrUqyTeV3",
  "key11": "3rcKBhCdN4gw1r7c5TvSYS2B62eM9RSLQd2wm3p1zYyPn3JLkuwDF5g9Sxjvf9FMkf9WNXBr663RyyB7JpuUb3Bf",
  "key12": "3kLR8ryZg95v4Rxkc7Ui6JpgYiF7sk9efrLHYxubgeVzUaT4xZ5f95s6ubwXf8KWWzVodSoKVwkXuiyAXH5SwZQw",
  "key13": "4tnRwSYH5TuyEexy9qC4Z38Yv3gPkMBRGmCHf3Emf4peiXi4egDwCZF4xGjJDu53E7LBnLru9G7APukw9BPHu6oi",
  "key14": "2WNRMzY6VEBQdWik32gsbYchz5EY1EgrCT8G5oN5HpM4EJW5MWk9DLjWUYTAhgTVZFhxyRkSsWm6spaDwHFUPNEy",
  "key15": "5iV9WAC6x4kLzrebAqNWvinvKZASpKgFn7UpnJd15Rm3ozvJge8fLEmmK1Q4wFQitkry828qGBcWFKg2wKhXDQgF",
  "key16": "3R7vpYfdKa5kGiHbuKbVTw75oAMNbZf2JuxixtEbGCKacZQPsVscLd8Qm7hp28shEQqqmdVApp81b5FrFhnEXa2V",
  "key17": "4bY8PRVAEzJi5xto76geMh3JjsHfrA9ZAhHo6cGqqDPmstFZ8ovuiygEQYLHtSvYRq8ZoCWeuGYufYS6rjRqBgHc",
  "key18": "5vRhMnxxnRSEMTftYmHhHktDaKXrSBEEnmjBCvAM5ZC5bWNVZtUhvSsbUEkkPPjjcdJLi1ohsfkpkTHuRz7phE1R",
  "key19": "3x6LJjZAgVS9C1U4eJXYVEYxJMf3N2WfMEMuvQMjHSy3jNwvtdhvctqrSxiksyWpN9vtZprnqLJANkFC1q4v5wAp",
  "key20": "52LaQxFhyHa9sJqPsCaYghj8JbGHBgGGt6wWc8AAVbBs7dzzkXjpABKSiJsfjL2912XNNaqhH6vU9vzWSx4ggwxz",
  "key21": "26GqfA93GM75qCkSYjQcbabR8VAmgCmciLCKwhQWrL3XEZphieZswz242GRiz16WPFaSzQuwmJ54gMbSbqJn6AVa",
  "key22": "5KttGFnxefJSu9Npdk973KCBxfJWm5mVbJY6fetPRfgcWzCV6rwqFigDnPKcjYjXV1GtF2XYD2wqLqQxMgKYM2wR",
  "key23": "3UgdRomZw1qjieB6pH4VE3TNvNXsv8fD4Jy7ZEMXwxRb5eF9t7Yb8bkPmnaxQhdShnMePBH98PZsiEMWtgQ4utSQ",
  "key24": "5zU6TtJoWRUy8PV5xzxtCEUE2B28mcRJkM3radt7UDMJEwK3bHNwqRcza4M7kJeEc4z8kLbntNvWoPJWvqbuKmUT",
  "key25": "2cnwrcJCkzF9fFhHSXEqDT3h6dv4UTe7dSSaXUWboNNdHnzjPT5A3WbgHWGyN3oL5T4pNpGchHchJs2mXRZuVc9P",
  "key26": "63kD4AcDdMNkWSeXSMxSPkwLceJZ5cQN4hacuHKu2iArXVrdepR5zWLMRaVXEaBkHRdmkpFkPE413FwycT1EMowR",
  "key27": "pUhRKEJk3y7JNsKWLZgwodPHvWdsMjaN59KGVhiXCvE4p8kcPCbBjejLKGYMLq72A981Minx6NNJg4eYhzDLFWq",
  "key28": "4DQxJ7ioV1ZqaQBjoJMJx6tJDxi26249CGnK5ZcYPDdmUDEze7eau398uAP884rctWkParnV57NrG1J9uYk2MzXs",
  "key29": "2g5fxG2fD5WvYpf7os9iQmhu3ZrQfREWFoUeNM61SJGa1u1DdgT6nHtcU9Pm27FWmd5QqjpyCpvy9oX2mG9BkQoG",
  "key30": "5UnuedtKsAyioeT12dC77k1PzmLPbeuKgQSKGkiRpZECpPPCMnATuQFdskMb51EwCA8i3Fs6ubNAuw3mT3GFcKaE",
  "key31": "4VXEcW4dcXUQZZ7P6dmgWgVtnNKKCXw9J2kgXLaQnRs5jQ4X7sqMTeVDCEwn2NTXrYESePDkrDK7NkxDVkuEPFCK",
  "key32": "2hFtqmHDyunAAdy5u8Ep7LPJSHCPCpnhmtTcVRGTzGhD6AHQxq9HVid1yfxxfxaNEQhyaz2A2Ggk3WcWVc6DJPKj",
  "key33": "5xx7vRZt4fiPLMBXc177yuLQET6nssAcmNqna7LJqYV3j18gYJjAVEVUnPAXtGq54jCj2DyTUF3jE9C97RLN5WUQ",
  "key34": "2RwaheGK2GySCxKWmj3U4b9KWVTVgCvqVFnfKFqCows8e62Y8TXsGGxyV2iCNrL3wxVpb7cNDUFNqPdxXmLPC4Ur",
  "key35": "foeVwEwL22t4cG1FQSJ1MvP7WAuagYibHoecUvicEnWt3xNaFDPWAKKFnB3A1oTQKDARAXY5yXBmYrR2kuWQG7C",
  "key36": "54t1oZgwKJ8VxphWEmC415JRR5heFv1SkkBHhbxmPyZAfJ6q7csGyk4j95VsyURYszYfe279fHyqyNwtCLPZsWtw",
  "key37": "2rsSiSRcnfjTrDszaWBuu6pfKiSaHcuXLwcGiYSiqYwZMdgrscwENKKsCC9YSDaGzpGLKPx9diQiPfVPR7dwPEpV",
  "key38": "4YytKhrXE4jThJ6CvbDgpyp1fnv8dZ2DjhfS7BAvX1GNcETnFv7Ljw8wjbd2aszcqJNRW73268j7BR9RUeBnmAcr",
  "key39": "5Fbdk15apHcMjwZaAXCr1yhekkC3zGRS4H1FBMzUSMnYWSYkEJuCNvGAopK4ZsTF7u2FpHpBwx5hgjBqna9Aafjc",
  "key40": "G43PTKMsc4WpqM9uzme8DiHSzJAeVkTVgRyRVARKYLAsx78nrAEgukkW2JAnCWyVWnbC2WrQisvZcfysaDFnHWR",
  "key41": "44HG5SdgTVvrzgwGRnudL5tXnL6bbVii6QioWRRYQrCxwLqPgaWhq8LEvf8HQcJEvkntU67qyqGznDfPminANo6D",
  "key42": "5shDjwbMDWWNZKLVHN3hn6riHHDryTzesp4uatDaKHRkWKNBen6PN5eaz64amahuVW1gF3E4crixZgzM8HHXhCPd",
  "key43": "uxBkmGUR2jXD1C9kwam7393eoeQbeRSpDb6L9RxxAmHet97fYbXkm7d7JG9hom4hxGEepwXL8uZUAcTn6H9iLM1"
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
