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
    "4X4RNhc6q4YFTk992soGNLSb1jXQQB1LbfnHxobqKxusQ3tjLsAh1G6yrRewpdQv7C3urKg3rYckBjDSNKkPQ1wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVwHpv8R3Y879rsEM1oi5kTbxB13PT66HduogDTZXoQMviN3acW4Yw1M8Au3rq3GmrdZeS5hoJGgA8QMQUJzEaq",
  "key1": "4YidSDxvbVpNRCcoXDTevE91nusdKVd6FPAR54f6tM1TKhdNySjq8QpikD32CevrKnMTNXrTVw4MitbwCKahn7jN",
  "key2": "4kbxwNCoYJCUiyxRy6TkwBF9TqDboYeMaEZ99jJacM3mqis5xsvh5epRs9gUC68ixKRRSb4y17hpwWBohsmj4fvd",
  "key3": "3RKCiU9TKS6Ny1t2f1yQTspbLrsAWMaZKWBo2na8bSbnbPk6TCcQGyaQLDFoCRn1CMpGBo41JTZLTAduGuZVfTwS",
  "key4": "4TksCjVPnBx2qMjt4NGMsBjZ2efZa6i6ZKSD7pW29e3CSP6sLAhNsZ9scKRS9djmh4hypmVr37q4uF4aSGMWZPnH",
  "key5": "4L9YGNyH2gZLdhXWWBWiBCoPUbSxciTxGMKgpFfG2HKbspbqpZg8hpQ5iFdv5LL9s7k5dqiVxG2nWdwnnSXQByKY",
  "key6": "2mgc6FnbP2wchfkcCX7Yk6j1jmVpVDoLk9d5MjwSB1rNsDA3ZiGnEfgypw6Gi1zv96j1g1ZdcxYgyzzbwnsXhRDT",
  "key7": "4rAfMA7Kh2oX1avazGWDQBktti246zvg3DRxyCR57wcwaw6EAiRNxA9bLmEfqQWgtGmQZr99tvgAomS3U1QdaKiN",
  "key8": "3GNLWSsNTkELjBhZxJBfHTBNE1hKjBC9zHmK3pbMB7CyhNUrXNBCQopG4d8iaz3tPCWW9qtgFiGJh9oon5Rnu3Nd",
  "key9": "3YJrqtAGKJaP5bUvnorXwqnwcQdKadfSna7vvGWFjnwAM8JqVopgbNpgjonS2CjYpjzSiy16om7Q5njtMTD57AeU",
  "key10": "6334EwQmbuxQE5VZ1eARwLPk45JL6ADYJGEB51v6HejpKVSxJVKeswQECt4Lh1kFvvvZ9uXS9wPoqN9EDbsETa1e",
  "key11": "4oQrC8ivqG9EQqZva3EQmgnvRroK6s47CRQdLCs1y8fq8YW2j6EcUp7ByrquyXE4QZQCnsC8dQjQd7qhwD8RD4do",
  "key12": "233dazBBYccrkVNMmJkf4a4qhesowJVRVTxcRVEmmfjD6FJtMFEg9EEuSxNBQ5Yp4kJjzfHK6RSyoRPUGMWzQV1o",
  "key13": "5PdRpzXgeAcrFdtwxVkFCuzGbLZpQK54VoUQBC7Qhcjj9eT8AT2tpuFDvqkZWbxoN6yykX2r9BV2Bt2u8Wpdzx1B",
  "key14": "2Th45vyaYKEbCG4JZ6Ys3KNjPphQuQDLoVLtomioGsC3Z3dTkYdxP2JKDogTft659PMp3x9is3yczp8ckpg95wAs",
  "key15": "5T8qGz18Wju7sVgHxoRAfwmP9SC8PekDTKVg4nQhLd3Br4VwzgjhSEgrfqWnpvHTXdjXQa6qL5fozSBpGGbLwySF",
  "key16": "5gAgtVD6eFVZd9hveLZPp5ZACAP9TqHES61fFKMUE35P2so618ntM5e164kJLxq11dRYkW7ye3fwB4UY8HWqowe4",
  "key17": "2LMcSffWY6rwF2uc979WRcZibdymbQwRixrWNDhgeH2rShUE3AshAsgyrV6XVfFsRHPDBmKbuTqwS7j9VH92b7zR",
  "key18": "5QrmoMisyyPoiGgF47FdMH6UWrVZ2eQtVGi8BwUYWSX127fmtisrmE27fX8zi9pZeemdBDnDZv3k1GyTrsEcgM1T",
  "key19": "2kiQqvCtaHnhUJLjfqvW52D3BZuZqGbtNjSPiu2BeX1yUDRzGFaD9bh8BVKkWZftknbaoYm6UH6eF1LEGShchGPc",
  "key20": "2TJXsyg6u3wV9j15kpVs1r3vyFyfceRfuxL7wUGzifFyUSVDenNL8WnMq6hy6uWE1msi9pnk7MBm7AnEcJkwNcDu",
  "key21": "hSZoJ5CCjFzT74PnLjZe1JCNDJ9UcfWnpWQrBtRw42dDUgT47nZ7bNdyqLLryTkPm3apoCMYu6GnKDhjDh5i5xj",
  "key22": "4eBaJshFMH1zHQ3kHsF5qqfq83uGyVukLD5WVnbMzugKzw67oVXzEESbMgtTN5JnX5g4bLTL7dSJtdQjFH79KBkU",
  "key23": "4nSPTJBkdRm3CY8ZKE1TCgxGa2rDxSTa5pW6iqzZJrrBXDYeenqShgKntMybLeoDqqGD3VALi7sSED1gzeabcpWk",
  "key24": "2u3BYoWxk73BL6dk7MYRfYJFGBv9XfdszSZdSJbXEMMDiX861d8QEifKY8b7VnX19QUdKJN3hQWK11DyyKyQ7Czf",
  "key25": "3Dqi5wyMgz7wic51uvxHrd5yB2jgPXhAPFWuri9Q5GgGERaPNXVD76QPWcj7rzgqvPDdcRXZmKnqNGJDkaK3ZJw2",
  "key26": "4zhmLoVE1vJVGXiggYM9xXhrSfVPJGBHjr9m4oR1aoeVxNvHPUR9xHkfz6ithYo74XYK7GSXwww4h543QBDobrAK",
  "key27": "2wgMs9L1EujiN93yizuZhScqCRdtQNtMZ8DKnZCEWFmwYVQWFoKo9zQ2MZLCJ7StBh932z4BfN9V77by24r6KrpF",
  "key28": "29LvQziyCvkvyN5SRqrXkzgxWdcqx6TqAq72DK8HzLx6YzPjHS4LjnzhrHCVtyLySiezzcQhWWN6FVPyuJtmPq5P",
  "key29": "21SDZ9BmmA6cceX66LFtMGBWLd7d8XZKPZQhX3VVGn8cGeJGL6xySXFS6p9bt93jj7qJm8mTK2KqVu533kFun9rz",
  "key30": "5Q1eG2tQMt5zhRsyF9HMfEA3TH4kuPawTQ49bwiYA2qLuYcVQdBsz64bUQ3vPMhKWhPrGNWc1kcfvP2bzUQMh9G7",
  "key31": "3B9vjCBdKiBwAWj8234ti9z8dZxbseajhUwTrXGKKS2GmneQ4anoQaR2jT7MiP73mWmGThXk75dXcBQLXCT3hEEX",
  "key32": "5r1VCbD5w61b5X9PavKPDzco3bZFgortJQ4dtjEwcDjQ1Yxdsri5Z4jbFvv5Uu2gqbDSmTHaLCBxk6qMXCMU46GD",
  "key33": "eo12DZowYjAnSehEyWvxf51rqBjFt7EJCaM3xZ9m9pdFeLtFygGwerEEK37Dr1ZdiKeAQqffuifk9dAd1H9KYZN",
  "key34": "3PvSvPdETyRT4UFxJ5t9xs8qzd4CvMRCgQgUzq945GEYsqXqaWkJybUTcvRZ7oWRVyo1qLuKWGrRtAFw4oVAm86N",
  "key35": "4czweniDzxHk2SsvzYzLbHgVT87Gehwjnfa6cquF48U3C1dzsDzd2hFrjoc2t65nJD3YLh6uEB5MxrcepaQ7V87y",
  "key36": "3j7qiD27LHUxzQMxucCZEBF3Xfvu2XmD9BCocjCbchevdoVfAybBL6eiQHgYWNwN7FTBWAoxA6DN6J6i1oBPKquF"
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
