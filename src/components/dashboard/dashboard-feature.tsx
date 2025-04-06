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
    "53inbcMdBV5Tk14nsYHeQPZvQbHwJEnnfXDhHoVmiWYaX1Ump12pgqEkmxM1tQdxcjAw7kqWCfDHMEAuAqiypDMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSjb4QXUWYL5VDW5z1XfmwaVNwL8DX4vNztZ3UbiSnKgHTMWvhFeGGe9jYNcXUtqHZPa1F5itezaTfjz34xkMZF",
  "key1": "5wyBCPP7E4tdv7zV7ub1WqAp1P4x8Qk4DVEbnHVGWkdfji8ZBKtVHiJRVzVD9enRzyfSHjULEHFz4nEJ2Ye3EktE",
  "key2": "25HhhEGDyUJ25LeZNwoZosGxBJRLea6o7tPTDnXsXY9puTxbn9oYHtZRh8dBYotbdXmxzniFoinWrMs3Mt1yvqnM",
  "key3": "5e9WKvuZDk4qz2EkyEmTtsssCLZaf4gwTF7kogZfq4BE2Ms64KbpU1Lqmu1qm3nmk8LZQ7WDZ1CwERgzgQM7Qi5W",
  "key4": "Aov3VpF5tceJkWDefzcHi4SuxMsAgm1mG5PwzGqvL58BtDGzp5nj9JmTmqHYNR4axbsPade7HwDAY4Arub25US2",
  "key5": "u3KeMZVGyWzw1MvUfxW13Safjw9NGxQgKt9GAQVj2TNRoJTwuzVBxzNj3Q4NB32Zg8HWHQALR1q9979e9Ca46fy",
  "key6": "2k9f3gRj97prtxuDVxYna1omXpEPt1e8kqCbZNS9w7Tk9dthpXXhkmERqLAAYFY3gkbQfPwqRZd2Vpt6egAvzXqT",
  "key7": "vvdk1HszRicK5Jctqekrhm1u576TqcFY3G8mWhdoChyTSbCGodYwBLxhtkJXUn6WhgJPYZ7H227fgH8gNWAxbUF",
  "key8": "2axWAwBCXdQmNbnjq6iv6oQdPEkKMryYTN33GGUAt27HGm5uZRSWY89wd3CNtvbxNhmQkVQYWWqjHedzNgjrrptc",
  "key9": "4L2cSPh3sfpnpfTwzM9wAJfBWs8r4FyR6YauqTubTob2xvccfip5pZyH1v2zvJhnZehq8CEyytsZYJgmYCvqi25P",
  "key10": "kxKFLss82tmzkMiDnVHY9e1UUggZRx3jfRsYGvv9nvLivXPPgooNfo2oMd1GVERpVxMxNgb7e3BX7CNTNJiLQpR",
  "key11": "3fAfdNw7LZPb9t6C1DUPipca9rcwQY4rEuntMdAj2p3BiGuzP9vTsEg1sPt8uHLg8sjRvQz45re3LjoRchnChjsp",
  "key12": "4Pgn3ar97aP6N7yBZcKaXr114RhkLPQYWEdc723U4b3ezJ42GxfUCbRGrQsHmGCqf2iYWoAhSHVdP3JYihuRpdLD",
  "key13": "5VCfiJw78N7eYxo5LmxyYzf6UqyoaMUZJVrjwoP2nCGoJ3Fe2CPDreG4U3zgz264noh3F5v5RQeGiWHiNhcYa4jq",
  "key14": "4HP9K9LZFGWDnaxKe73gAfj2cvoTzFhXz7PJQGDCAuJ9vaUPgyqM4mW2XXkMaQuFA93GKK3nauurGK3PpMbJMYnw",
  "key15": "56bzVeY3VpoiokcLXxLqNjdthqG85z5VeQdGtxBXbc6AAz1PWHviH6sxfCvhEaPsw5T8k2BofFTNWd4VZeLADgSd",
  "key16": "4HhGSWDc6oCxbxSxusQctZ56QSocxfzsYbrKF3nouoGXTGHYdjHvLrT8dyvSTJxMi5Q66xURNZWqhH6i7RmhNi8f",
  "key17": "3Ee8HpCixWowedE6eGykDwGsTceS49wpx2RM74QRuxtH28Jsfuc5LYiBcLgAcUzkKZJSos58Qkq5rGa4A5opY7zi",
  "key18": "4cZk6CcoRwft3rs9uthKQ44pFfQuYstyBXjdtWPwHFHb7XD18m8YmJZjZcvAG2TpPRG3LXWodaCh8p8YQLrsbrXg",
  "key19": "ZLaa5mh5tbzkhrN2ybSNedDhxyAreAaKj1KfhJXvX31qj8RxKfn72dc18NBJQfLrBABbEhNDpLh3PMYoJQXuFCi",
  "key20": "uRgCJ6Wr3rkWtrxXjnipQycxKjSm8VYNcY4SQ4TLdtpo1TE8DmRtweB6QSzXPLZQjcZYMNBMi8uqZGxBwEHn2Bw",
  "key21": "38VvgERKd1QKiRgQTv3UzYTejTH5uYAyHdTsSrgVCVs46mABGag3iEZDjYe8dR96CFJ9u4wSPSeHry8unJDM4YAi",
  "key22": "4WD7XSv4bTwmHJ4qHbTy2Vyqgur8GqaHPH4epDQjGYPRQjN5Mtf6ZRDKjNNS4aPGMsHdBgxHf6AnkrWcWzi2dkne",
  "key23": "2uPtAwY1utdZEsXcAKHenwVFcYd9zAszBee5wYHBs42ztQEiJcNWbZ1F55k7X1bpedhdjf4D2TefTHZXMQYkw6pK",
  "key24": "3pNaKrPDHGp8YfSkEHXXeT79aFwVzzNURC7eARAWRjrDcR1zC2i5iUnkBYmGzX1DJNqdi77Q5hvwmWcV5i3N2kpu",
  "key25": "3dawHRxLbxhTJUvAKGijxFEengfz97MFrVtjAgZNARFw9ht5gtzp5AhJproyAz7hBDboWjF18LMVg8oqTC7M171A",
  "key26": "2c944q7dLkQfXMLEMYfzRLPRnESBUwMqZz9UdB6XKAKF1gpkuiUjusqjLiAk9mM8oJ8ypBiVgzJicnnfJ56azof",
  "key27": "55S8avbYpeJhhbkWmhc9ykG8pg2QXVYZKq7FRmoJp2SY2eQw3tUgVks9wBe8YYaofYSKBXec3D3cpZrdy5EpPvTV",
  "key28": "4C7tMym12ukEk1bPdVfE3DbSmCrsBvATfsVfxtL7VtFPWmvMPESohitqdbsAngAufBJNbd3UjkFFUwCL2U3z1Mhy",
  "key29": "37HZMHGV2s8P39QDAzdFcfiVSpFhCchSnhJFYkQwtrgx7W78nxkPayJqdroCtrkHD1rxbhjRi5AQjipakuvenBiq",
  "key30": "2jPxf6uwCkHWXjhjphyRFkn9kanGpTYtyYChXWkk1yN1GXkKkAS85Zy685MPeLpTGFA2uMXa62TavijKgd4fSqMA",
  "key31": "2dNvjTU9xUu4cupRgqAfx6yPWxG7FpEGoXgTifE9fKissxPXnZhM68faZ7vKhuj35wi1HZW2C5nqYoiXBbnhcSVf",
  "key32": "Hs5F6fHutvv2PK9cUJNNRxTeP2M3M4RKXSK5CA3i2DbHg7YefvMqP7Ln9iZueHX8cFo9nmi3BCTQJfL3iDSEse4",
  "key33": "4z9y15VZ5Pubf21PykJmHQY7uZrNDuir8iTKYVqxHRomFzRrCESxCp3JQJ3GqAfvwJD7fJuw7GyDPe2dvbaADGbG",
  "key34": "121FLY3VvvBrT9hnfwdS6cKs1V9RCbzuQVbZh9CYNN9juSfnTGtajQHfCeUhEdQJazw9iusxkaX77mbep7Rf6yMt",
  "key35": "4dBs3TVKrdK55iEmKBBM3de2BGjWDvuWdQzunHZJntLePPmym8yEpJFFyMhZm3U6Wkr7cCx2eVa9L7RiE4snzMzV",
  "key36": "53xkCRfZ9aune2YZee7TCk9cKcTDQmanWu9NxtYLdy6wi3eSZ7rEY6QTu7eD8TLkfSoryqi8EGnx6NxrMSuDeHLx",
  "key37": "2Xz7tiZ5MMQWXv4DYqYLi8Y7Ayvgh19RrBr7FXx8F914rd1yZ4tN6J62swc3pb6RQMiHNDCc25eE7SmjKy2PdZz5"
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
