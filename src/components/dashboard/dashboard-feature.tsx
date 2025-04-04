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
    "36LQgqbit1H1kfmSDcGDfYBUKeyhJ96xCTQ4iEZQdYmiD3QhHnJjmYG36eJ5S8xcKZrhfFdLvjna6iY95Jz1iHXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJzzZBL5ARnC3RbFb6CrVSsSJ1svfnXdzRT5r7vP2CqeuK5vSy8ks43EResjmyugLuRhgi3uPsyyL9DKnp6a33B",
  "key1": "4A5EYWSKyX6bRezo6DcyWfeEVsnmRujSFtJuCsJhXSripbGmuC8Es7c8zhNih9ESsZPukeQbLaDEfumYuLjTGusT",
  "key2": "bdpwBGUzQcQ9ahQy1Z621cPXgK7ndRwTXPARiMdTx3AhPSxKLmRYKmRhHn6J7iyASGHtSJjEYyujnvmPWhrVhFk",
  "key3": "5pUa3ALfzfBA4qGutWKoLXpvJghzASBdyxkUBun2ykr11KPXGRbRcDP25oFnRNbfrZUW2WqfM8gGJapcW4E5kEbX",
  "key4": "5AieFvc5YfYpx9TqswRucP8HxPtnDbPWiiXwq2dvawu6gJtxNueTt8aG8C81tEJdQRvvhQd57xsxC7kwQeA3tEnc",
  "key5": "3SGPuTtqfh9LEukNB8HxS19iSfGgqwGYm4dZMykS5KkYnx2ofeMmSBLcVv8hdr28BcftS2onXsknPGsPDPVmwoLX",
  "key6": "53ZSj9jkmhB1auJcFVeyy6juKXEX5BQxDtjxkKpDaRJANgB4cz6RC924zLNTeUct5jRTMp2nPvk9ZQDtkTzVdT8d",
  "key7": "4ri6ZBLL9GXHmJJCU9yXM6RXN7DpnwZjasCFJuucSVV8pSQTHybnxLhaHyGsn1og8quLJFdU6XM9PCVmCNvFJcAD",
  "key8": "2bbFbPVL2ATPA2MUvumZC4BPJaE2t88RWYhnKbbYjkEMmG1onHgqaTp4qoPXhP5DFgzc4rbj9gjY2cYk6P4Mpg4s",
  "key9": "3zjJdtUZr7T8Skbm9mwk9CaTqfU6FGA7A9VpLMvprB4WqjLVeuGnkuUc8xMrzekM4rbnwW7fCUhujY13bSfzzL3R",
  "key10": "5cYqgjnAttggRE6AVAyNotaWrcNBiJLd6v11Tdm28dgaVy8o9b3wxkXjdv5A5bZJ5vJBMQqphST1mq7wqDKkzK6K",
  "key11": "BGu3u4f14YtTz8H5zVMDZ3wDS4MpHMJJbraYScUhU5ywepaKdEdXsSwJX8c5dGqutAG1jE5BZAKxGyjrgTMcLc3",
  "key12": "4BCfUbUUtgRbSuRopxqwhCcSnq4myVvPL7qjHrmZtuAsPxqx4wSqxPSQgrBeBxgsGa6iWs9TyUt6h2yZNyEG5Qfd",
  "key13": "4fpduuWP1fsZxexsYHq6b996CvswxoybADWNd9oRjdFx5sKeAVSXCH9apdkqMzo7MJaSjhgeSuDZF5qhvv5FSRUn",
  "key14": "yriS7Zd6eGby8SSSyYgCj3XhzfRnPdHhUuoVMJ3mtdks86ZePLYEZF9z6GmF2yfmzsaigPmdTkXWCU6Vwvn812y",
  "key15": "2FRfMgZiSmELosrgGAZLny7j52fyVR7DkyY3jAsXot5oKYvYpdjj3RvZt41FzETYcSr6Aga1sUJWcrTNZoyuLRxV",
  "key16": "4DhVpspdcBCq9DM6Cryg7QmKqvku6qNmewXGp5pWq3ke6n4s2fTT5wmckYEM51Y6zkKRDQUNR3r6QTn73TjGetXL",
  "key17": "2zq1pTeZQx5Asv2sU8G4xwudDCffnHXvktZyRDyqmNKFafFoyPF5Vf3PwWCZEKTCcJuGRAFPRVg8wViUT3kg8WK7",
  "key18": "2SJShhTL6NUx1FXW2m2w2XGsUmEaMwuo6jb9GKwjSoH5ic4oUcXEiAzGdkZn8hSm1ExQD7engpHv24YnqzDckgCZ",
  "key19": "3SNk9y8Frb4R24cDRSRPQbLvtJr6t71918bVRu4D5mDV2A8NbB9HZkKaxbCcDo4pyBpWFvxMJCshdhRsmD6QTPis",
  "key20": "52wihXVJay1kJdDsM3BmoBsRjU9TZxZFK9GEHxFTZy7ctJyMgp2Bj54bn48KdsGG8C5vaTZmLxwxPWgf7NTsD2uw",
  "key21": "51NrSD3c6rgwjKKV4Uw9qv2znxAetPMAzuxYseCpJwRV8Y7tskaE17vWgznV7friTVYntpEWV1n8MrUi3GGSN35e",
  "key22": "49uDbJeTSFZQbZ1obQbccjGJsmxb9V2vQMCHD2SUZNMKVTQDNbpcDCWcwkVD5RSApDjK19nwuNd62LWuKJgqanz3",
  "key23": "4YsZmHZEEDAzorSGUUQy6VjxYHEGuzqeH6fcixABPQCDZTkWJyYoNhMz2LNd29UqGSSuXteBJKT7cZmchYAyiFqz",
  "key24": "3fNUD1Pe1GYf3o438UUSrN3sEyC3kFngi5Ye83XVM5Sr2gXw93Y1CKKrrBTfJwdziLSLDyHDexmFLQ6rSFkSHRG6",
  "key25": "4U9B1tzp4jLjouBzD2DFbzM7ZU2bJ2crusN3MBLVHq9q2UPoHxEz81GNtLQzVxiPd2Xzpc67ivP8csoH8iWe6pYV",
  "key26": "3JYJGVc2d8k8kyTTMGXwtsHzvBMPryAhS2qsWX5PNTwJSNhY6eb8qbH7HXkiS8jNGNik61UBBcCwDjWfRWFeChr5",
  "key27": "5CaqUjD1CTeg5sZ44hnQiMhmw4uxChxTFvJnbBDbasbiuQaZdjmQV8WjzUH9Uyh5JDDSy1KSeoiKymbiWY2WYnB2",
  "key28": "2FAv6HqpkfefEw5RmrUVFZt5SnZYdZCJ57Ydox7WnXLDgnZhDfPJcLXc6vhcgnamhopXUY3aJzLjTcG2nbEYuvVt",
  "key29": "h4cFvLxf1ZrBjuALTHcryahkexxKBkrVJm9wSFdgLUizkFYNCpmbRqPLy5N9ZmzdMD5UxK8qqoeRbLeJUwybEMC",
  "key30": "fmnRkh1zDeF6sXuk4mHZ9ham5Kj22heSqGiZC5opt9eBDiUowVPnwe9uK4EAdBJNCghRwJoF6NaBRZZJhDMTqTy"
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
