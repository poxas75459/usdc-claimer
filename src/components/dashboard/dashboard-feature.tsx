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
    "4u9RCwZhTTXZRBDUNbwjrNqSLQhkKqePbHZm9CTmXtpBAjJHF4FYyGg5jSm7XUnfw7Q2uaFT945yFzdEiM817eDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsu6kcURCdAFC1F6ffqGwx9sPEQeT2TLB9RuAsV6GpoVkJGsk6xKgFxYfNcTiDNfQwkmMa2pZRfVkjuhHWxZFhi",
  "key1": "5anBcLqL9aR5MeixFmhg8QMiD39VZdpJypqNg4JuWvPLzcGuu5rjEtXK4xL8TK4XDQnjn3aWEDdWHa1FCLeP3DwK",
  "key2": "yXwnGSPLg6JM5h6Bbb2H3anUk3qk8oPusHXKay82XhCfdK5LuNW1rhG53T8SLrXC5VPkZwhGbNPaH6JLoKCWTqQ",
  "key3": "28gxy5pbwy2CouF8bQnfVVQhx6M29gqPt8qoxhPcFbg4ATAXuZss8wWxuff2cp7ZtUfeoQwARuiqu8Mt3UR53wdA",
  "key4": "2ooAYHnAKnDVfcjzFFXet9YRK28JPVtiQAVSx7AidV2YZQxEf6bAVJ5qLyYAYLBcP9mzfFC9m6d92Dw9zXRfafVN",
  "key5": "2hbH6CbBXf9fv7tXYoFJK9G8cnRRB2r3PWLXokm7HUCiZ6uwPNicHkiAruWXNB3HTnp2whxKvdhTuWxKEQ6GARma",
  "key6": "4Fpgx683CrUZNyTWuqiGVK5WyrK2PQW44SWk2MZiR4bAWba4Ha6AWej6Yn1HsB1CGnuMyou88JcueztvM89v279e",
  "key7": "Z3YhLc7njzn3svSLo7Knthn6C9URJiuG1dtHQPR1r6f34zcRqejJJQTLuHvfbqkxFUYdQ8bCd3JAqXY8h2Hve73",
  "key8": "rVgTt86EG1bAjuwXGJ3i8euCJS2QunNEUa1EgrqW4xysN5aSbuXakmHcGp6fe4vNoQGPzLAKTyAh6QNW7jBqKCY",
  "key9": "czMgxcXaP8JnmKdMWN6MPj1NCjrQyJ1nvEdrKC1eAMecfwrkDqfwAhbTmENRVkkciKghVaLep5VuTwjQ3d8aRu3",
  "key10": "5PGhv7Dn9pjqp9enBQ3immbhjqHpwSRf5NzLcUJn991XQSGZYSaYcXqKm4Pr7rrrqHbzpGYLQfBepUCY3sbyKNTE",
  "key11": "4Ry8vNBiNt4VZ3bAvxhaWBbX2BebDWXsbEEq86LucFMoeY2EGfrv6wA2sKkS9wkejsbVYipZ7KDHouAEBDg4Q6A3",
  "key12": "4KswCCwwz3azv1xALv6tBCS9V9Ya64rWR4yZBp3oqihibRtMBBvf2SY8MWtnA2Mm8NxPcAoQ61ym8nSsF1JifM6Q",
  "key13": "ifEHiYzGSzGUBoTUsof4bhDVtzpDLd6LvudjFHo4zcoTiJdmFxakqwnyrgKGauksnG8a3LiXxjTnep1tY3uRbPa",
  "key14": "2zYjjvXUPjSUVN1dKjeYiS6UvuUsp7VKyEWXW6FzsQniZbHubcz6iiyP9NZs9dgU1NjGBAQPYgbgq1baWViYEW7L",
  "key15": "2R7Jafe8NSffNvZk9fFKTtNkVP9s6yTESQBnUfZEBDSsEkSoNr6A1obG2YgcQG32GhvbXRt3F74uwA3kVfJLW7m1",
  "key16": "5cEKXTKnJxnHVNKDU58wXkCbachtC6VRjhUEviYT2HSw6N2yjVrjPd3DQZY6aZXdLF6b5nGXbuxEGfE9xpVczze8",
  "key17": "4ncpmu888zUbid5isuNxQ3gJ1sgf9yBMCPC3opTDPtL2NxxDT6KHdVUmGEj5wEMHGVN8jvY6sDhva7bb4MoQNC38",
  "key18": "5jzyFAqZPDu4PCsmqDRJm9bKFXuEDXdYMGKXwx8kUrzeAfxmoAwu7w2ZbLxukfcDFooEnfwinV6bbUUED5btmusq",
  "key19": "2imkVXif2gXkLYcHNVno3Jk3wTDJjcppwQWJWPB6imCn7yqCZ8EFszeQJg2FP2qD3gCnbDyHzbwCzkwAP34WQvfB",
  "key20": "3u5sxECVBNEbCys92qZjqDM4oMjTpkgp79vW4LcSjsBmREU6ZwnAANTuCiHPua2SnR3LL49uXEZuCEJwmXEbfRcn",
  "key21": "3qPHywnSoiCHCHXgvgSvfP5SodX7pRzQXF9a8evP9vhSRteufNmnRSfNqHkmgpoM8GRrF519VExDE311StJ5PVrp",
  "key22": "Ktsn2F7WRWauFs3kHVq8AkVc7zzFymiQthNPKTJ2RgqF3xHFeDfEohX46VM2XJCPBdTRFGsPb2n42k6QY2hkJ6Z",
  "key23": "2AoB1usX6nZSZHnkFaG9d1aVnVRku1PNyB89zx9mP3Vsp1EcdL7ZLWKS1sdBVrfQH67SXJf6sbKQjKSJDb9fvCvz",
  "key24": "5yEGv1KnVRBr3EcEPjg37JQk4Go5ibQR5VXqJi7ZGWTmAzKW18VSqPXr2pyohkyPPKUufByBQfsPJr92DjmepMBa",
  "key25": "27Aerxy7eZ21pj8buZKUwzzq3t8GipvhpS1BqCMsNk9dZnoyDd95duVwKdJK3aJ9Qm6sBWSPcfussjrAhpXFv6Jx",
  "key26": "2zbfNnKVvDsuV8xCjNtyE4WVVAxcLmn7yEFAdrVrbfaVqPwMToXxKeTv1F1so4ZzjKiwTiBuYix33MB7t6Kexieb",
  "key27": "znQ3Es1paaAGv8FJDwV88zU3hQH63QBZN4kqbUxcqp4MVSUhN81T8ztJ4jYxAmkiwJ8pkZDiGtXPjFdVnF1CuKR",
  "key28": "3B9iuPbhta492eTRXP4ncgcWnRzFSEvtMLN4Q2AUW2Dp9W5sWL3pLwQfACjhhJDjfP9QenarVEpMkZXGetK28UzC",
  "key29": "55KLFnynYB8g6A96LNhJXCn45WQG6TThua5ispy3pkfdSH6Mgzf1m5ALmWZmCMhFGjj6UuUE4XrzYrDWnRKA8uBE",
  "key30": "63T5FZWdD6aQXdwJ6W5J6HmB26hvnArDfGxvr9JZuh9QooXh3ox5hEcDCovQM8Eq4pY1xo38CJWyEcSQHHy6jsXh",
  "key31": "21QaWJH57jPYcGdFmoiqcdcCEvrjZMCvdJdNavpYvKq4QXgvprkhCdf6T6iK8r1Dm3CfqBt2Zjt1mh5YPS9CBdyD"
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
