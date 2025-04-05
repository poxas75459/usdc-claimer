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
    "4rx4jApfTzny3VK4Cwj9s92KAJUwfa81DfFoZDTB5FgVXsFKTEQKf7szC4A21tV4NT65wYsQFmXEyjS2983y7gZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4Q96JsfNsue3i7TWwpMqMcodD5zrfYJdTJ7Vp7WeU6BeMvnnRfKzjMkXoGhhhrqPVeF7TBsRaNYEmbyhP9tvfz",
  "key1": "5iV9TMhsLEB2Vu9sU8LkiosipcJ5mvT657BgfyEBJjtX1it18hp2R8W5qe6A52hccWzxr8C1w87whMvU77SbfB3Q",
  "key2": "KXJgokw4hoz9g8SLbqm9273wefgqtJ9tgAxXeaPJwY5UHNPNQX9EUjgX7vZwQucq13EASHxqmiQAovMMfAeR4iG",
  "key3": "4eJnhNWHuG9Nqg5PQ63mKFDxv9ixaguYxwYMpifAgqRknW3YM7uiCHvkZSVMBzHZHdCboqExdS4zR7F7HeBMYbZr",
  "key4": "675TpL8TifhHhswRvBP2WV8cbYcQoP53JPjVRLXuLNVYncx997LJP1QTw6Rc8oEvbgumQUc9RibRSwcj669mAvTv",
  "key5": "2EKbSo9EnYsPogxtBUXSAcHPgYNZK1xJWeApbLhDvfHdEArM5reXvSQDZJe2TFPoWdKZ2mRyTrUwAFPvJPE33c4p",
  "key6": "63HP3uP1NVVkXCMzuFR9CyaQgVUPcwt5X5N8MyVxJMfun2qrL6bAUyTpTK3zEsYhhjjQCs68NJiiY6umndNjurTY",
  "key7": "5TGd6VN8iWVxh4Vzxh8HzYAyVdTbSMwk8toxeZWHQSefr5Sv7WE3MDDieioUVipdemeHpzWKSE1in5dVKGPnXowZ",
  "key8": "A3vS16An4KEuiJiAuwVqvQk8o8fkTXraj6yPvo6TUrsjCcCerRnBSJtkBjaM8a2Zt5gcd1MVS2N6AgGL4otmKAs",
  "key9": "51KhTEWUJ4LdXofpAeiSZaUgEhYXzZpDJG6DRN394nGvjHDAAAdMunctWURdNHarYysF3vsTMXk29krbzT8cZyf3",
  "key10": "4oLs9fpAoNc6RwJfTTZ9ta9untuPoq4aqcDiBp81g2ZByDYZwLH3jHJmaipZiXa4QNmXpDPzN7bkDX2LHCGHLiz2",
  "key11": "2ckeZb8BAB359qppxKSxvLCaCFYjr9N8ax7RFmVdK47JXtqDPMJSn525C5umC8qhxvKTLFDqtLZqYan7aQGH29kX",
  "key12": "y8sjtoYggh6X8iLX7SPYRJgwxoBJ4baPzMjLnbRLkfxvY1xN2Ya1UJKfXL71aafrjp6e7Ara9mwkAxDvPNpPYv8",
  "key13": "2apocEmMrswoA9xg3rLt8VBbcNsvDmvKTeCLMV9WmLTHGh3HkLLbiPs1KCo6tzNNeR8sJLsPixEr2ERYZswQH8KC",
  "key14": "5CnujwyHGecTxv7Gz3oKTRGq5Xh5byXTatMP8r7XvYrPNHhDuMuuUFJgrBj62XH49cBx7RGuTfE9eVEjNvtLFrXY",
  "key15": "56Zkpp3f3kMvmM9A5Yqxo5jbuRtgeJUm2nrkuHMCzx8EEcvSG3RyP2JHGBfLpCqD1ut2m9VEmg86nsL9kHJV7YFV",
  "key16": "4im8CETfhRoBNxEJudY6636cL97pdDYXdhMiA2CnQ27jrDrNanxs4TxNkZYyKws7VTCmJ8KDp8vN4y6wVu3T3UCp",
  "key17": "4AGiCY5JrdhXDAjG8oDGD4tLchyjgEjZ8N14a6vZYMg9Z8J5yAvrxQ71hpm5HsQ8ZQFFjPW1k9x2AsKcxPN2HL6x",
  "key18": "275pFYXUHm9d6vmWMKoQ9NSGDnnB7NcpkeQDYqmdYY7pwGkjsoDCHepHBLnSw3fsLFZCwHb4pg81X3qGNRjFYGXk",
  "key19": "BdWQfGv5tmjEXdV3vypUdeAEQv6cBo2SokFqpQvWzgUVPTqAi2rGsHXb46GnN2DKPaqwqxZodSg1xVfRPdZmk9u",
  "key20": "xYLzTzLnCjhLsFkm7cjpJsSbutQdoYzppfyM595F8X9nrMs2tm6ZMDwf9R5nKZBorr9UFZwEtZnAnxLQUMhLxwM",
  "key21": "4YapWFTUyeUUKST8qYWfzw2cXcKAFWK7E8DgxkHBPugqbWsRsTtSsiXfrPnXzrZXiPgX4yVxuyjMr75zQiD8ASnu",
  "key22": "5ScV92fJxMLUSqHLyZnUqwj91M3mYJyKGoW7SqgUzs2FVUtc71LoZ2be9nWqqvhXwZD53aYzv8BVpa9RczB4egtu",
  "key23": "3WaGAFQPfmc6anmo5hGxx3EthXt7iXG7pCSHnmjLVnzbUEYizH1EVCJCKSzmtUaADdxxTSmWwqfjqH51c34CYumv",
  "key24": "Axpmb2DmXhwR3yRx5SZPPvtds29kiuEirNkjvLmZ25Xv6xayP9yGPnxAd2Tkph68YB2vN9PpygECZrvdTL939uG",
  "key25": "3hJWs3yNc4UHEhhkpL5BHcTMXSZ6THfFbvcEPn8GfeWtDH4LYiDNDcD461U9RWFxHGgReLym1TRTAEWpkH6P8LrB",
  "key26": "jFDFMJYbnW3pYbc86F34y9MpAZ6AJTLoBLg7rhsHbJGrRvHGYgHab4zktNtyoC4vKywjEvEWJKkRywLaY4Xo2SY",
  "key27": "4Ajc86gsAn4fddF3pFWtNdkufJNoqEKmhQsXW3W6BXjcWfWTTiATcHvXMuCz1s6vRpZA5hoTo8EdTE66PMJNFEhH",
  "key28": "2wDzHRL6d8tZkmRFrmPMPvWVcJr3o3pq5dPU7ARa3D64uhJQ4M4AQqE6TKM4wY8S2wWQQnjDCyUhuk3CArERg2mo",
  "key29": "2n3JidSbxPh4qXYzy3J8h7TuNWfotRmu9UGH2iHDeAV7L38TyHbiAUqeeLUEz2GNHLEKNAbjeuEXG9hrJtzLn5i3",
  "key30": "QsSTpJWk7dhPxh7H5g3exgZu7ZMZaGatNDEHXAQ2xNWh9TD4tWpcncqxYqL4c2gsqeFTUtFAcNTuiwrX3GJ1685",
  "key31": "5acG6c88s9cVF18Z5hynzFkB12YTYdNk5jRypdsrNz5RVFbGPMTTbTDBRn61ffCAQ6oyqpMhXcoD1eP58Mi29GwX",
  "key32": "3bukxY7qMLvpxHtu9WT79LPQHR3RtQwDKEB5fdh4jjXhddpKxiwPiy1EprXeA4jLuoNHKne9gocRvbACKP3u9bka",
  "key33": "5cMs5PpHe8zZGWDv3fCnYBTPgpnCWwVJRdbREARvufdhGuUXwSsF9XmUKhPf8azFC8tvH9dBKptW7rj2KQWgsziK",
  "key34": "4B9PgpnvCNF4fmY7obEXbjnEWY6sApyLPzfkDTviSMChnhRcqcfdXKT7u8cKZGjR3mMWg7sJANsiC5Fy8Wr1cXug",
  "key35": "37HtH6EutM58LNZwRbxqcA9dZbeBdyj3zSuVHkV3z9jQzSk72nSf3Sudz9Dh6cP7mFDhPrsNbKYH1Uwt7KABEgLH",
  "key36": "dn6z4YuvWQrBEqKbKZrmwPAyUGHeVBsN8Mo25wQBFVBbmSp1Xfd3b4KZYoiMFwi1Lxeb1KLrvkaC8bYaGTLLX1G"
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
