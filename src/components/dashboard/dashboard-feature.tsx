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
    "pZUUNMLR8jK6KhadxHAh56cWdWbVSiociZnJATZwvYsqRecdntFKnh8ZPcefmAVaYFCJ6Zx6G6RAS6NknUi9Qu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NTFBu3jKHH7mapAxV1C3VDAH2togezuYdDGWHFQQsdZJPK9Z8YEbcGsAxaFN8jBxcknjpEeb1Uo2XF2ABVGKnXN",
  "key1": "UuS5duN7gGxHk15WDSAFei49WXhUV634H9jsd8iWk7ZYZtAxsa2rraCDQGiDGcRKqqd1N5ksc2Nz9PJS2KsKkxU",
  "key2": "5ttc56kGFwRfxQVTjjWTEeCqQVJcQE5wnaimtKFynSXnFaqNUrJjcT4fEayRCFs8HmSbraqdmQpR3YiG2WVcPm49",
  "key3": "96v2tt5hFdRSHmYYEHL6Xcmnqw9qouEjNMt4KZTRKvBqPWb5uEPvmiyS5dnWFP2SPgnX2RstYRHZqovDwb34YSZ",
  "key4": "4xQLQUzSCc5PUbjH8UAMgmT9U8E86fpPBUwH41pEPMLHYiohCJqR5L43hSk9tm1LHueLDAnwaRhDAVUba49cGxpL",
  "key5": "32i2mhTnjdp2S8rbm47PH1zaveck7wXiXXDgr7phczAE6WuQecxW44pyKSBekzwZrh288rcuUpoK3pEVz4vh8NLc",
  "key6": "2rqgzcYrggJbDx9WA2gfVxAXPqE9kvtA3HWAnzcCUPTsd1Ei9p79EQ6FyciTBtZvyDFoXE5AFa2J3VNCH9ddaTyN",
  "key7": "5PSesHRs2nujUQ6MbgYQgmmVg4yggyTHBXLafjrE5Dpxz4F6ojM94RyDcn4NPiQxPiU6FwWQyv7mTc5adtTaQkzh",
  "key8": "FXfXCWbW2n75M3bSpCcpx4tAHbrgVWQbvyo7VSRp2DLsQYtY7KeHUV4fbEtVc2PiEwAVH1Jvfq761daoPXZdXnM",
  "key9": "2oS9pKQ6Mskd2Zbmh3vYHyhPB58QzHQATGkUG6agscfsKbtrgrgXMFDexDn6xMfXm5aRuKytTygScdXRUADRkS7",
  "key10": "58QRh89T26y5tWmUqGcTvZBBJMJFi6QmUHjgv7XeWgFAQWUajmRBEGke6UXKkPon89EuxkAa28aUJNg3NyASdgwd",
  "key11": "2VkMrkeyQe3jGHiiHJkab3ZworaBUHpxZYZ64YKkLbb1xtcyEcTkuAb7y4GEqkW4kG72aurJbcsQeyxFqXDu6H2f",
  "key12": "5vtMgspRmVYp2Z6dcr9ciAgs2WXKt5ssCGQwcFNUyX6VGuq4mGrbxGWm6xG7f1c1t6VrfHdAaqu7LSGx1X3EB9vA",
  "key13": "3Fw43jFGN8dfm9VGoQUN2bG91Qsa1jYDRRmH4cUH9jZLsGKfh5Su3Wqe33fyR9uUDcJo6csS3WXt9nFc7xvxtdcs",
  "key14": "66b19NqmpbjMgh1jwjuUg5go76HyvS8LQoYAe3M8teSFTWQgeGHuFEB3oNmtoiNi7z4yWKLpEjwKa4CVJ4J8Nrro",
  "key15": "FsRY7BsrxGhkxm31Q5J36kR6WGaQa7HHEMhjaeTNuk9gZeExoLm86R7Z77DqfpqShnvkiFo27wvwHpum5mxXgdG",
  "key16": "Wmt4r4PaP82ZdiRhj4QGCNxdhDDvj84j8CebxhG25anZKXSHam8eZ8AQhpDEi2e3JvC7x5VSgPkwM3NKw5SAC62",
  "key17": "3niVbmnwXPNRayhVv4upGMk6bjTTjGhi8ZwaiacVSf6dDKQ7yZ6vJxLZ5vG8qgtznwBvULtKUtczbYFnciv3UU2S",
  "key18": "2DKxMNBo9pJDopE2211VeGJWrVFq1hEDxTDrE46pX2jeJW4bsoqc5HrXjvXZpKNNs6CkeBy5RcZwTjE5s1pweNEu",
  "key19": "2VHottkYLhkZmuQjJF91rgenCeTnVXm8XDEF1ZyWtYEsvfeYK2TbJtAQpTG15iTwK2wHyovrrEeKTZjRmzfeF4x6",
  "key20": "4YE7DjrukHo3APvPKuHAWVqTj25PAFjnbTS1FcBxySRRkxCVSWLe15FXGWB1EhemadQvDEGfg4x5qpyd1FK4ycZY",
  "key21": "3ktRhKtS1t4pfMxqYaCVUhRyE38GVBUQNS3F5A2yN9P6dt5tF4CRdkj7QZpqZnXiQSbiXSrMfj6gwBFDCZbEnMqX",
  "key22": "4L6wsDJHf4NSDZ6jRQRaQ4JQzP35s4DCpNpkjLUdcZZnxzLW5H8L5wAjUNTngXziGSrWS6V5oWr5z7uPxqZ7m2hg",
  "key23": "29aYuh95mLavxNnfqWCjKv1c5v4eaGQ2pcrfJP3kByZvWrcQx7us5EG3qUgvVwUdxW7K5iKjz1MqPksJkPcmkuaE",
  "key24": "5Lrtc6MNLjXDm6iGMNDpw5ngivx5uAUiXyKJYRMsgsWLtYcMmij5E7uSWZ5Bsq4HgvspMhnWe4iwSE6zxb2cVUr7",
  "key25": "YhzraSt3F4hjL6YvckhyDsScGHHiJ8dsqm2RTJaV9vgXqGSiKQ8zREH1SdNZCt51bfDdNx2sNfkQf1fXGYECph9",
  "key26": "562paeMuxx64BRChksorYgALTYBzzpv8s9dEj4ZRv8rRLeV5Cj8w2smJZoEBmRhxcKvSv54KfWrP84PC3Wv7BE4e",
  "key27": "JLgNVdDYxBEh2GvmoAy6xfo8Y6gQRT2SFxmuRzQXmxvqYPUQxukWx6uaukT9bbmR4Q3jAGcP1kuY2abSj667rXs",
  "key28": "4NHGHVV4FeUiSVyKR93tiok79Y4AVZtnXgi8JHYexc6bDcDLz34KciK5bzcTLTUH9JLHu31pgi3Qu8fApzQk91oE",
  "key29": "fpqQ7Ms8CVoE4D72zsnxbEK97HAS6MDZCf7AqBuvYGKM8AadvcBPAQS4kJRtERwf6QTFFvGyBtrmyYihtm9fEEs",
  "key30": "54K4MUbD8VC53hqiGvB8Jdx22L6zSfkSCUpiE7fDHufARW23ecp3mFwAyW5ZoTNkEF9qat6PrSy4CXMwq2xFe8fY",
  "key31": "v5BgRpNfXbrHgkdsforxF5eGntS5ngUTQ7KkYpCFRZ2YTjffLd3vcZ6KfcvbzGT9bkxmf8osHGCHckoYFyx9k32"
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
