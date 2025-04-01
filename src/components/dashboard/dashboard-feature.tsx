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
    "PzMDDXk6TemLTrFJ6g7Cxue7j2kPXniNXKb9HKoYNvgLwPeUw7NHX6C3Q325VDrVb5973tMF2nNePgraDjTheWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJyXHo3Pjh4vmuLCBnQwFnceTkGzozR5FzqyKZ5MdrLzcJk2o7LNH7PzxVMVZxbvcoe6dYvtg6g7Crkks17NmHB",
  "key1": "4PBfnbJViBuNTps5Tgb553skniyvJePCzEXHjbTqH5vUGBjEtn9PAt7akKDzgz6vnxW5p6fWpo4ZbCdxZfMToHoC",
  "key2": "zjeFAnGVxg45HmbTVyhR1Ujh2x98wMjJWei9jnHMKqvhsy81M5YggPJVLP83pLL5UwAhZ1V93FEntFBF5P6popm",
  "key3": "5RVgq9dUcBECMUC4eKx5DFnK7UquMyXVQCdMr52HaHGCs37HX1aTATpsGWd7iUUmHSzzKAUfBdybpNA14nNkM7Pa",
  "key4": "65Uv216fG2AZcnPXPNKEYWq5192xTcjM4p4r2gt7tVtSJjuqA7WdtwezroNqugx469F9AX5mvEe6C35jJdMFtzg2",
  "key5": "QpeH3PTt3nmd9enEDkYsmATxbJveCyPRnwrQUQo48qAGNBtVkRvzFH2p13fuAdFYpkNwZnuBSprEBuerm3576JC",
  "key6": "2opTK9wFxHzpb6U1pUNLo9bEFsahf6DkeGajdYfobetFUD2JW6yDyodtCAYC5EfhzBPEEUuNWHPHZPo5hNHc4p2F",
  "key7": "3Khuxdg8DSmJYMCr2Jm1t8Z9jVyTd2zwBGqQeLi65QkGvG5uShjP9CmeQmoBdzY47GeEQnzQfR3obTcCGgPcHVi1",
  "key8": "4n4aoURAdzMQ19BDhyrMis8RWJohCbudRzP9gz6daHjXp6MHP8LhihPm5Hp1H6ucb7da8NcAQMrWqzx5nJyGUh2U",
  "key9": "HVXQNtRoWFD7tw7SLaoTZxMWxMrH2xoM2GNF16KHtBF54hLk2yTgUXfte3qmZzX9Powa5NwHsCdVvufcAgcQMGT",
  "key10": "39whk9sbcuXcrjf7hkTHn8XEUpHEkCSegWMGfPnwRKPm7fqMBXh4aH8cYqZnw1VQ81UDC3BBnCMmD5RiodAbMTEu",
  "key11": "2MbhWYW44DoxtsvCEjQ13SQbZTPEkUPpcS9PxEPSJKkAc4F62GvDrWhffECZK9uPo8Cv1NxLJSvgUGofXfJ4pNho",
  "key12": "91HPuq55S4AtHTLGy3QNbG8WHYE8aEof71ZT2ThWRxcCYNjfky6g6XAviD8jQbQVguuhTPUXJaSwrowovVPxxUu",
  "key13": "5BeDog8w18pu3rRA1XMFuKKtyMPBakgsDUSAqkMeQ6RZgSWBpsSQkiCmynjVEYLcCiBJPprQs6jsNNTx2Cd9hK3u",
  "key14": "3oY3EuadBTLFYsd1cT45g1m5u3rPtuQZSDu4ZFitXQtdLDwZmbRD6UvyQKuYTJFqDqWMnHSPpfh3EnPWwhcqXuhm",
  "key15": "sYx5GtYqTZoccPyxFYex8o4EYQBrsvZjj9VJAMEvsnuCzoCX9fPNYRmffQZsnBuuZ96dbfNpuViCz9wcJoRJYjf",
  "key16": "41vAvSLVHTa7JzNzSgDBwLrV57P1rypxadTh2rcRFUA6WsRSNY2kfAV9uKQyKp3PDbXPsLNbzUESLLfbyGBFTNLX",
  "key17": "2Pc9QDtb8g1j3fKBo9VxSp1YVzeK9VyZ5XjJpV7QXtNXYeBECNveR3WTMTr9vwoz9jeEA2Voa4nvwQsCReDKutAP",
  "key18": "2VDbmEuP8JK1SyLuqZhmiM2FLf2ezX2ueS3HRsM64ct9qNnrXjAj721owFdRvF9Wrq1iUHNgJ9UWkg4JjfU9Eum8",
  "key19": "3zDsAj23B9Hq3L8RiM88VCsXtoQh3WjsTd2F987j53Cftsv7BP6AEhQzpKHrNpSaByNLaXoY3aBKNcRjCj1Vkrya",
  "key20": "2rhszUt6LGf56NF2LDaHGsZa3AZzn7ZK8Fp3Z7ja5ovVxHyvqqQMSVDkSGKdjURBjywzk1xyze8TRNh8R7NafoxE",
  "key21": "578r64m721ZV8xtqeEz1D3wsoypE4x6pEFULwQqgKD26M86THMLuzv2dmbDD9daHmN8Vrpx6N9MbsqDAahK7iUbZ",
  "key22": "JLoDxyKWBBkhdvgiqt8bKgD6uY48WXW6XaBrHhby1WV4PbZ9ZdbouR1Krt8mdR6NW95stj6JJRC2RYABKmypLov",
  "key23": "hJFTfW7mNddCmjt2qq2RtQ5pQyXuKvMT6PDdgujy9ahmLiFbjdCcjR7guYuvUGpWjEZCLtBnQQRyA4MD4fTL3mC",
  "key24": "3WARzqhAh4WJfQ39Ng7PertrTrTHWiK38CGV6FmM4oTJHJmoE7pNoSoAJ5PWVernccGsZQp9h98soZpJ9KxVErpv",
  "key25": "3hovAMLezxxJYHW71EkoQQ7nmYiY45T92GaLCK77S7R7Hme3spVbHSi5PXjXZJvcNADYzehYyLMhMpz3oQXj6Unb",
  "key26": "nu5nNRPaSTKoGT8GFVx1Qn389HYkYE7Re81e3GhNhWccEtTV5z6DRSqnH92TbdFF4EeCFeGVNh299NfDWwYPAuL",
  "key27": "64LGd6xJzpPoHvEnJUjtfLPkABfGAFf8oCkVVszy5axb48tUnS8njpQYqjx84TwsPycHwdBNfKBpqbmpb4xVb19s",
  "key28": "62xKimkrTJMBkGxSQyy56xyDvGLMgVgiUAKanWFLmHjBrdA9gExmXzQGE1qMUtvodBnL9dZQijTiHs8odnUWar26",
  "key29": "LzFDbSCBQdXkLh9eWFPPvD2X392GGbQss3DcH8VceNtHwSXDk5gD6KVo9cWH7J89WDP23NDNJEMmMTCvrUWjq1g",
  "key30": "2P1VZnn7cESXeiQfVU8CYKzWNVCCvtQ1DguESewzc8idsCHBTAtLmLkbHzraK6LJhQm4GFyUaqNeNdnJXbJ5ZVtU",
  "key31": "25VQM2Wkuf5k9GW5zt6uegYiEU3CYSfcfR8kYtX6WBbcJivqAxMJaSYeqZja7yf6aJ1PSSZEbjP2RJ7v4deguwDV",
  "key32": "3xPphj2kor21toNe1MkiT5vs1kSgZHp5mJm6AzddgYS7QYphU8Lpq22DgVUH52DgjyFcHyFFYNxYm3Q68msLXoSZ"
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
