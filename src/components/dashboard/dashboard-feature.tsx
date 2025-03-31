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
    "3GN5yacjg5Vkshy1n4a8vi2LVCHxeHsjv9QfSUkm7NYSDgVUZeW23xJ3KmmsPZqYpJ3kuTBLjupCawqgSEEW8L9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uM1CVt616GzoLUN34K5TnzYiULr7QSvDs8N6JCEtmM4u98Fr5BgmRTtKHKfxyMbabaprt6Dq6uvQQ4fGEEAXHkg",
  "key1": "4dWpCbyEPhvKnL2VYmLXmzRvoTEkDWFE6V5K6VSnfZx8pjd833efkkHy6e7rGMuLUZ4jY75fvGtCNtCBTKF3VzUm",
  "key2": "52aoVAj6bF5vqP5yRkmgPJoNJK8Z2YEtqcVutVbQmD4WdupYj9uHypjoC9pKRqAxb8MZB6puJPC8qXMX1yxHueSL",
  "key3": "2yFTdR87HNi5juwruJEKsMm3VNdSmCqwuaL3QtUskaHyNekZYesvf8S3HszUnLLo3tz4ztRHJvR4DaUSTaJRtvXp",
  "key4": "4ZU1nVx5nMFYA7sxNzhJkMBP7om6ntM618kzgsyReKyNSbGa7cQdHRhmucyZYkT2dkRKDV7PZVr65pKKDHorWQVq",
  "key5": "Kw7RwvcYV5nQMzPKmWktXsgS3Y3XJ2ayCNeTZrvqBzXku6R5j6ELth8LqZxbEEQYSwdRxhNr4dXcJtRccScFGkZ",
  "key6": "ARhajcK3ppoEELHtpm8F2foCV1nmLDYgvamFHZnrSN3HCsqViuRT9wkDtB44hR7QBAocAbpwd8U1cmGxFXyDvuK",
  "key7": "4xE9uEEySS85Wq42RB1tkVA6fV1UoMvqUDcV2Rk53apEdpbvezBiDCJe6jnW9d6bpxjdnk3Qqhj9pVTGwaeTFATz",
  "key8": "27iYeQK92URYyWgMYxaKTtTpAyn8CyH6h5CGMqck6DF6jvhsvNChmujC8CSUYEDNghLiXfVTFGWQADrm3MNFuvSc",
  "key9": "4GS9UEDbSsDmkk55wxBcGRKFMarZdnMd4DP6QXQQUTQNFq5dkfpKCA861HFuhRML1gH4LNqzPrydM6G8KWHGgPpV",
  "key10": "2gkkEvGZoX1km4KuArZEfkfMwRWXZHGmvZHVJJBNdxCcE8wk2nVLdDjseyGrw5kb6Bgzypf9empU2Ys2mmgii1U",
  "key11": "a7dYZErKtvddiEGvZQsybtRkuHvNxjj9oPn9A8ELsrKY6CTxi5kyKRjFY5dkc14KVXYZAY9p5VCmXBaDZYCYK2r",
  "key12": "5GQ5pJ7h1inWZFbgjpNenBy9ja4Cv57N3kovGpCKv6P1hPrcCXGPbe31iCAF8Npk48AjQMw2Zmab4NSAP66g3z35",
  "key13": "3F37qUa3kWZH8nLWEXPWpVNf8URJV6xnL3UsCJGM3oWg2YhHR3DSwkekqcCmqe7hTWBjH1qmxv48upGA752ze3xx",
  "key14": "22uMkGEahwTT6EGHgvgSiZKV1enKFJ9Sgnu3NXXmoo5PdKMVH7bisGFosrjatvfiJN8mdtY5x7hongUqnWRVtQ2X",
  "key15": "5KZPL8QjJ1Gwk8PE1oVdBFuQX4AvBMERXR9xrs1ENF257kixUqFxzCcfwG65gkVJMbduER7pMXwShybhSaWUkW2N",
  "key16": "3T1uJpb8inxtEiEBuLWDmUtmxRSegcLyucT4xukp5twoNdUjvLJxv88mUQY3jK6JCiSGUv8WsPJbB7UWoDT6oyCL",
  "key17": "2xBwsKA6BG7ZVDB41vuZ31ciAGX6qteV6UpddEhj3DccsoyS1ZqLz82RnVt9cabhybJPSEkktT4uGqL9cw5sDFsc",
  "key18": "3aCsGSSUTZMqkRmzyn4XeLvgH1CqtCjHKzEeLt5MBdJvKZuvd3i9Vca9i6de5Spn9Zk6XK4Goa2h9goXimYBnYaS",
  "key19": "yqY39eUggAR4MR9BTa37u3wRB6N2CzjX1F1UBsu5xpKTcBfDrU35pf2N3omzyhzM8hL7tSAQZBMavRoSUd8JLjj",
  "key20": "4JiqyKR5k5QKPShBpBgngvsTSqSUNEsUwbmfBUUKDAwtP4ez4veQGyPt2TMV9s9p1375pBmwfcy2G1qKGRXasWep",
  "key21": "42BSjf9JUZNCVhZ29daPoaiAzNMFSWGpMMn8ZHYx7EodnCjCBTCht4YEt6bgumm1fVLD4udPQAGC64c7HBQEjpvE",
  "key22": "5b8XpMyQqZDuMYRfWiLn6usP7ZJhMssa2PpbrPP4fgocJr4qDa87UfJCZ7Ze8a36ibmqRKzeguGhm8EcuLp4yiUV",
  "key23": "3JacG9SD52m73a1rEWYm2k4VvWMLMqkcxRi5ZrYPFfRPLFRyVvRRo19Ydpoj7U1G4k7abMaMuvyyrMTASpZmGvG",
  "key24": "2nqA5ysQCn8AqNBn3CQb711p7keDEFRMj758e8yWJvnW5AwsQ8C7CDA9c3Hwg9WWegZxLDPSexw7i8gXiqDrHEdG",
  "key25": "2BtLTKYKRLMBvjZ87jGqvcUqvsaxR7qK7RYYLku9ZFdWaLscR9WTTzCDwe6GZC4F3veiXJnmpXibxQYcFj1kLnY8",
  "key26": "EvCCgawXhSaibG6chog9Lpye6f42fmeUW93QviPsHUyrMGNAuJxU26NLyPndE7qMALnGGthsvq1Eye2q695CiQ7",
  "key27": "2ENU6QZVjome2TvpaxPKPHHHkSPoBUJSvP7dN6CL24P7M68i7jHL9VC686y9wd4hiQLJBHCKfe5FwD7LrNHofrjx",
  "key28": "D7Kn9FgwwogNQdQmZTgRLaXn55nCa4tzid1ZBwqj69WAdvuuxjbX4PBrQqMydpJZqRBC1ajPEsfaSr2UM1mmHSq",
  "key29": "3857vco7HjLt19GEmz4mf47B6gPca56q8Gd6D42d8ZQkfkcXLxmjVDu5yBudC4HJS5U6mysFYrc9PK5ef3FayghB",
  "key30": "8dXSmTswFkuSRLtJKZiHd7dnNExJawnF6TmLo2WqbtpPxPn4mH6aAbQaRXnEkaChni4TogSVWmSKzLcJWkXr2BA",
  "key31": "3M17Gc7NYFbhiaPd4E4234ZHHeCw8zioxJG9L8SwYNmonFozeihBJpw3yTded8nhWqu31JgwKp3svqwEMoKhsWcC"
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
