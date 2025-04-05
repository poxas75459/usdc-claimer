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
    "5VMPBVpAawkVFc17GSjcoWMZUTey4vZQHmFXqUJb18TDzNzxJd9J8s25BS5jWAQcarceYGVQN43JYBzWSUTry3Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RVCUaeqKXX1qkpeEBzSMjt4rpW5ZBxmNrQfbqDs5BSDmJBefZ8Mb4Xq28K8hMgv1ReuoBJWevc7GCqTFWBkZK9s",
  "key1": "5BvpA9NJoZVUGgE8HGJgK3J5qvDvRSSWPMJeV9kLyMWvD6GwtJkMiUwWBMMkdpEUEu4u9iYoFT9N9cpr43eWeLBX",
  "key2": "rmmVYsCCdynpcCMmoiY5auXgRrv1dq1aSW4LJTNv5tsumEFFZXDvuEazwi6K5cPt2yvuws22178Gxk833ByXM72",
  "key3": "5pWs2deSK2MGJQLjeCkeRJAB6R4rRwjRppzWPDLHSXShj2Br5THaY1fNBhwkHz6QcgbMunLTHauZNAMGeB1vH94z",
  "key4": "2CGqDGUgG3LhZqeiFfGzvMsUTuHkBk7HCyknUmwAwVm3ZEfCQomSPcGTcQE6ZLmtwxGhUvtKuhxP65TG5KRMgaCw",
  "key5": "3nc1RxwMccmP6wbZU7bQrZFtut8xJrEe6PFu82eSgzS5t6VkBuErn7XtmHf3dM5pNcBFevUAV67J491sUTtk3zmG",
  "key6": "9rnEJHXXfv6K1XzMy5LZvBxDUg8GBpjq6sNjxTjFMEuVkTzisJai6ZuJTLnJUbMGr3PBy72V8fm5f8qj8EZLF8S",
  "key7": "3z54yYWp5WUe65nqUmK2RiMJ6cS4FbXsrUWu2ZVPBGBgxT64myd6ygY48RFHUJdrdXfjf57K3jSowCsJHqhJSe8L",
  "key8": "26tGX1atDXjRKveKBnsADLPxd9ws5SLmBjeHRKpEBd14doTAhErceibPCE4xcDgVfEYYpuUe8a2qMrHq8DwZ8sgX",
  "key9": "XGYGC4RfjW1MGRo2t6n6SoJtcdsLeSqTHWjsQji3WZq7J2PURDyWSC9ZdhFiSH4fW6DvjtAd1fKhWFyfvyvTZe8",
  "key10": "4dw7W7cEdukX8JFzAK8Uw7aZRZBKUgQDjHBXeKwu1uLBoi4ADyELoZeSjfj42sYJFDM8ewaytFxscyoevAsD8KYv",
  "key11": "3hjrt1w7prYHZyJVrhY4n2ps97arXjQMCDCEBT567ZxGp2T3jLRnaHTt1ATvyBK1Sk4EjTYXPvELxwSsSv9hdcX2",
  "key12": "23Cvu7uck526xgeDyrKKSfvq9FARdwVXAxje9J5FD18CNc1WM59P2LGNjLWWcpNytY1jfGuFz8W8dGJjXZic2kZz",
  "key13": "2ean5Gt912DQqbTZAryoesbYy4ZKRnc3x427qxHJEaEXqpggstrSfUX9dVfXpKaTXX6PxjyxbHLaa2BeFYiMjDri",
  "key14": "5jioDmjy2RoLRET4Qw2Woc7tn974bkb6Gax7F32qHSz28g3u8XPqEhhgpHyBYwqBWhgDP5CmwgpM7krnJDfVqGgB",
  "key15": "CH7s5Pbm9s6tYWVc5rz9RF7Cbr4Togv2eZcVZnLyYwnTpGzkGNo2rSCn9boEaexqoxWvxBWtdp3KJJN964BTn81",
  "key16": "47kRaFkvnQYkgyTn5jgHXqgp9tusTLj5g7iBKkSmTKfp9QqiFpGVzWL14ys9hTGS3fQjdZ25dsetR6CFELKFkiqC",
  "key17": "4ze1Z48dTt7mfxb8RtLTgWEk5EHgoAGdZkDL9D5jvxmPMV9ynsLqi2E2HMLbiPEfZ9najeZne55JEKa4vsziRPHh",
  "key18": "5HckKtWXo9hAUCTU8Eo4uyVULDnmWbjs6URtsdBpu1vMcCdx5YSvicrRNNNKZSsA7nv3twHoFikZLDAsKG91Rw2x",
  "key19": "66QKaDX5WcGz2QpSPd4KEvFGvC2dEkvm5utmyyCyBQLdLKVYKJsuuEya7Ut8SvSDg2X6qppBAZEexMmoCGcrk7Nh",
  "key20": "5DfTFWjJg94eoSfXg94jDnkoFx18xnPmxxGYpoJCMo7oWsy333pkJYogXW424GRbys79ZXUQPaxM1nqp6dpMj91m",
  "key21": "4B9ddjA6ddGpN5XCvAoJ4uJkcJFwf4AqATEsUXhGAWvPNAmDfrJszXDG4u2BSJtwCufwcAQPgcBSGDEDvF2nona1",
  "key22": "3rt341zYfn7onpvU5dbr138BYvYfkmcRx7qAGdsjPpvNjKiy1ejJ79sPocw43srMXCAaaT7TodrvUkjKMy92rgdA",
  "key23": "2YsKNgZi8oxMHa1pmcGZXyaAxXRHYgRRnm8VecstKKoKT3jeok4BXZYr676s8xCskCv2wDyxYKJu78ygWXSnTNSJ",
  "key24": "2nN5N6L8CHVSuURA979NT48BdDhmTctZzhfEAJm492Lr8129joYzyPj9vSCrbDeVwfWGBieb9DhAKpgepPeb22mq",
  "key25": "3Ac4XjvucydZx4EE6TzPREwzeEdgsf8hF69V88kG4xG4AoNNhUtTaCjiVX87Ywcs2sTfNFP4Cud1ZcP8aT5UGTsu",
  "key26": "27ApYmr3kVg7yFChHS3B3dVtwTd8FmyXreQX5kbkcFSgt4o7ZnCcjTzTzCHKoBjtNh1WG9T29tcEzm7HRXpXJb4d",
  "key27": "2teZZWmxfsRnCi5fdHNdpjZTLesaVNGNm3kvdP8uGDD3b8sMykkL5uqDW5ZMEecmBipKSihXK2ZmLVa3sDJgmy7M",
  "key28": "3NghCbv4PeK29QuMAeTxi28y414Av2j3hxCwdivuL26jSqRjRPWUCzaqEXuDG65ErhWh21aS2koe9xBEoXy5FCa2",
  "key29": "3T6UYyNUMPgKZGjkQhSpJkKF8R7s41hEmmV2w1Cz4sfU5q6j8CkPn1bkJgbBc1XDUeH7tavMhK7nvdpq2qfHfSfp",
  "key30": "3z2s96XNzAbxE1zT13Cjhjv2GJbDGuKAWVpsQB7goY5KeeQRkorHbJXQrAw3YL9bNjbN4SBQWnfLW4JLZkfYkJGi",
  "key31": "22WS61ZRPXUNGtxhzs9wCu93an7GqiFjM3X1AMHWMfhviZPv5H4T9bEnA1k9dvbPrXgNhAoVkavFN89s4afepGUi",
  "key32": "5Q9XNWZ5Z4bb2jHrB1RpaHdncujcSLT8Qrb7kfV3vmoA5g7sW25TN2xpX2ERfCAjo1hxvjnuji6KFSxPByrEwdnh",
  "key33": "4zpFnExHRHZHE5XTwv8kHPsv8bm85sWNWk1GQzUyPBwo7u3EcH4sYdjfSWgXSaLmneNhLfSK3v5uYLWp6an5wPx6",
  "key34": "QWaUUML4Goz7LjF1WkAz7h71nmdv5YDGGcu4HfRLyipBr47zrwbza5SJvjMzGrvSe7q8tM6a78oqzJW3jFz5SzX",
  "key35": "5JtFH318HMtFDgXpYQ4rpUa1RK9wYEYGXth1tsP6eWsrADdMMygqBP7pjKTEYLb5AxYTKUpx6ry46j8e5inxkoya"
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
