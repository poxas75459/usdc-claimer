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
    "63TSJht2zTP8Cj6EaLm1SXxXCy9vJ7MhFuXPCLNqNDjMPVLpHJEvL1dq2HpMuMTcVDyEx8wL3EpUfzmp9foQZom1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NCe5EeUYLCwHrf3WaY2jKXeJbwBFejyF67xKp5g23faEkrE7qaW3C23ybuNwtzBZfzH1uccniER7BCQaGfs3mL",
  "key1": "5yTeZowGpYLHZxi6TVn8qnajNhF8udpoRr5VuTN3gEe37TDdTvvbTBriKqsNuD2zezkjB3uALFUNictqGCWtnaVN",
  "key2": "2kq2fwUgcbAmb29xVJrvxRZBo4XQs85NLeMKmvwLJvB4qfuGVNqa5N15LfnQnVxeikNYDE4At3a7q1XHJbDp1EhT",
  "key3": "2XVxbxyz7JUpr7YUFvmNdRL1AycAM3PhdX4hSxUcetoHFhGcQ9g2nRHSa2wo1sVmxAWK3Nn9x57y81GyRt9EXyJa",
  "key4": "4S7vScHMhGPbimcWAYJEvnEGLjAzGqL6PqzR7v7nevSgW3SSv6BvbWJS7fkoTVzyK5nuDMGMznhMPbJr18Dy3DXL",
  "key5": "4U2T2LVqGhBphGBsXUHDRodxo9K5PpLRmG9VCGFDVTop2szFLw7mhdEkrKzQsqwKkjDhAE726wpEQCcFhRqKkUeH",
  "key6": "5cP13LxRUxcUyjAU6suUoRjiH4zK32RanVknKDD6ymt2BfwaDDAj3yCCtEpug2ZJrjWNwaYrFCg9GWkggvxJeQAp",
  "key7": "4seGjjPWihQodMFVAhbugmzfTm4EYZbqFbM1z1oCWEfjYbQb96WhJtNARQDJUS8eMDADSGNvtGcasM61SvtB1YP1",
  "key8": "5j37K9cEzJSWLFf4dMzKQY9NJhV9QKYMs1EhDMuxUTaoEy8Lwkri27CyUKQgDpTkQCDozhZAVttSL6HbgBVuhBtN",
  "key9": "79Stt42w288Rbk3sT9Ex5kTFHj1xZTbDi6GAP2h7ECgfAcAECiGTimHypwZ89fst3zE7VaLVTh35F1dJD7K2krT",
  "key10": "2j1sisro5rAnN813KttkeYybE9XECgvcvRbuYtCog5t3ThppnKcbdc5MFKcCtcL4Wv8eMi4ewqqcPRZBBwhbVUvZ",
  "key11": "4CoCM4TwcmviGWnQ6G3qFAwMDMSBeyRK1nPw144gbBnurTonzJaa85dhZt73AXfGkE9eMy8FVx3mCP9EJU6LwQks",
  "key12": "3Rf3LDUQkZPGyFLwMDQz8aNP7HGXDMbk6oL4fe51XCZ31xcjGUi3uNTBrBkBuPtNCrU9w9TWTSoYqp589UTZQdFn",
  "key13": "4iyvcghYWEM8NkRPWgvVvDEyRy4MKb83NPDVVSvAwMM8E3SEYDnSjTC6CobPabWjUSa1JijP2ECqPzoD8t1cbLmV",
  "key14": "4E7EpgyasbmJRsti7M4ePMzGDNHA2dHgq1JG18YoJKTXNXwrQnkhW6bYbzJiyFySKbmke2wStP9P6u7iZuKQxUHT",
  "key15": "qqDVKW3Krc5xCeJ9tJuTpWqKgfXBott3d8J2nqLYtWRJzQSTs7hpFZ9m92ZYiNwHjcgRDeK2xLGp1e5WMdU9rJC",
  "key16": "3mcPt56Kt8sK3M6GVp6cL6LmZ3MWoLnjf4U2uyVBT2tskuCvZGB4RLg1qvpbi8ucBhk5GRTWmCyveZRPHe9MbQ1X",
  "key17": "5LGGPCh8grfRdFaCEd2U84ekBSXei5oRXkpeBCY1gsMi8fRKXYw4w5FzLobzhccU5DQEQQB5zrQd4peMu5NySwKH",
  "key18": "4GCLfBmRxj7GjiPUdRsa9Yi99CrZwGFED6gcSCeSRCxvw6AZLoVyiA1XVBAWWJxypeb7pVva1uAdqU2qwyhWw7Ew",
  "key19": "3kVWwFn3ZGnu2jd73thz2sCe85gRyd4BAQpDV7BP3hqSSQL7pZCD1xymKcMjCGmxQAvBvZG3NHKmt92XDGua2y5u",
  "key20": "2WJqV6XbuJJWSuRNxBeEfHcyEY32JmJ6W1LU233F9xuCeA6aAKat76TcjEtXPhfSmhScf6GnZPNTbKYVj4niXmZt",
  "key21": "49AGmoQq6ZZnt2YFtkaJMEFyRAqTbKVyjgYqbNFWSofyscF9b93TdC6YVneMeJj6NByKjdAoprZ23bHcCVgzPQXz",
  "key22": "671SbEqsW4BHZMQqWHe7mQSzk2Qw4MoR2MdS6GbrePrftK7Qo3tYu8Ba3NVwLW4qjsTXPkWtBt183qNwK6bWoFcN",
  "key23": "4RmH7muMJD2FbDBhoKvCKLVL7HrKKZdbuinDX4DZCJ6Gyevg2kkSrtGCTceUZ2Fm8wZY8pB3hUAEhsrT1M8yuA73",
  "key24": "B9owTQjEmTnJYSUoyz9ANmGG4i6MzSx3yHvwp7gpjvq9oTnVdp4YGzThHVah7a5TUJcZxw7xbi9P7ML8bDvRHPw",
  "key25": "JdDAi4csP4qm4dc2ECJ7yiAw567Y4DBf2mpUKDHsqHe26gx5SqfN5ffyykmRxLQGVAfpPDvrhRuFvYbma4SaiMp",
  "key26": "39Sw63GMV1At3BaFx8JM4VMwhC4QjHiSycnm3kbFARZRjQNNQvMPedU1VyzKEoa68Ct4Aa5rAa8Hj8Sw5usrcYsA",
  "key27": "2hwiw1uJq2mFkQ5WtMRgmEVeYPQDrUtXTThGpPCqeBy4SKHp66FvE42SF6wk4N8MG5YP32qeQncja99zT7meWxw5",
  "key28": "2XrzSZEDdPHXK3jAUruPGmDTYsuir8cVuKBXh2frwfCvF6Q9Jj6FDapLzuCHZu2GVGms54aBLD4SQNmNEQ4rG2Ka",
  "key29": "a68d4KqGJ1rzUrTEb8pGzvPTJCN9Y1yk7AEXTptyijCbnqKRf65yX79i7e1J87eJEinqHCDDXgEH6HmpdrGXJMr",
  "key30": "3JqqRSy1uiwY1ZDPvzd4QRXAWh6u4zQRVYuHKFRwp22TtKSpM4wPfGQV2ERZCkit9LsJmnV6LPXVVxv4NjBx8w58",
  "key31": "26SpyXh5sR2Lw8eHFL2fQDr7xS2Q4Uku3khUUnhNBfG21u4vstGbpZcjM3drNQqeAZjEgNiuWjA9381MyDqgrSp5"
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
