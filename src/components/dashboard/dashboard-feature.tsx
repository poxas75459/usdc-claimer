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
    "L4Durx5zF95629yGEH9er82tangv8VGNiB4aVfaYk13PSMHFKfn21j2G6RtH4nyPx9iNtM1fw9yth9EEoJ6nEgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENjYvt2JuWd7LMbu9aREmTc3pZRHsQa2szw4J3mUVBPUTCjPbbHtjKShquRbNF8rCh6P8DFabECEP3fA7c8tV8q",
  "key1": "4k379o3VG1KEHASaDRTii5gFKX6Sexwo85aU2FYE4XX6PwfWqepJm5WJ4J3YYTW6A8n1mZg6vaqj4kZDibtZG6vZ",
  "key2": "RvFRzQMd86RFKpZsDWbqt4x6qYvJXJJiRJuJf9Fs3Bg5ya6DipU4qy2xU8m7fp7A24dLY5XmwnF1RnKsyQdx9pR",
  "key3": "5FXQob33FBj2JxyyS4iPqxL7Ee5HCDBhBqRg92rf66JPNkZDb1E9EL96FqqTNkjiSjbAQGa8tQorS4P8zPgX29Z3",
  "key4": "4igrAoHrwd8qupDvZ1g6iWpUSCyRV55E6TgDWZUggrxMx9b83sEdNToBvcn289qUhxCA6CT2QXvZp2YfT1nmeYvV",
  "key5": "5eeA3DdYc76ifrFqh1cijiueNLHwXLfasPSwLiyuAF4G7cSMqBtUpntMsnyTviq9DpkHKTUtCfaT66qxiHCMtuHr",
  "key6": "4Wf7MKetqU8wtKy3drhN64EQKBTSZGGY5AttNPppmyrMF4SJzaBWnLwxFUNYZqeiAee6d2WV7UKEEMGAGMpEcbPN",
  "key7": "64JRxfd5D92wQsEXr4iMz6Mv9d7drei5MJu7PFuhDXVWARjNBYKTEaFxtSxjZYcVmhkppCvQD2hAieiz1QYzGZTT",
  "key8": "NxhJdV3Vk9BYi9XGR9gDQS21LAiHh6QQGHqq2zBXyD8qsgnx9kZjJnorDCci8ZAnaWk5yqQNx2VBq2j4kHtJFz3",
  "key9": "23ETexd5iSGXLMkCsWwBLftu7sZGHXXmWfPSzua8wHcTwi78DLqpQ9y7RdXjMkEJc8NT1BcdeyMsJS2Kod8qqLeV",
  "key10": "5DiD7Wgey27WPZMboMGEQBGrHaPWyJ6PcWV5Tb8yPpz6jDeMyjEh5FmivAugRbEyhjLsFup7QZddVPW1kcDzFY1M",
  "key11": "4jDhfuWisXmYPsr2qL3P2sAzzF2mLgSQRaYbEWbKiSA4txzHffZCefpQ6QpPotqxgr8bK5imwKBb89ubFSTyg4Ap",
  "key12": "2iYHdwKLdMA1bEaHcbnCNsVeppwbJxxDEk6PUhhgn2izv6FyrBGYYk4ZZLGwoUxMjRaJ3KvFDT5ASUz8E5UiF5EK",
  "key13": "5qqzUpvJe6THWQwtqcFxn9ncSxdAsdTkzdXACueH7U86iqWPpodvy3cPxrRjHeHg5GLDCN4DCAssCL4tUxj4xqXR",
  "key14": "5Z2dRB7JMHJr9KfK8x7WqchiRSSetDn9R1xogSDz9ymT1jaP11v9VZTynUG7s9F1i5K7s5KySc1ydK5Yi547ZgSN",
  "key15": "gyYczEz2VFq8cJKAoZcoD8X65Ds6KziTVqattB6QY3n7FhfJyZaYHLEFpkb77mEfQ64Wy1JmWTCq5znpepZAUbV",
  "key16": "2C8EmXHGbLcDvQJG5JDAZyPpMM638RZ8eRXFTxfdcgknP2fn5bVZFvVxersFRzSdYfKP6g47FLy2Z4GCfvgP3HXA",
  "key17": "ymNXjR34PmU8WWZB8skKccjyJiD7SqedENkS9G8Wf8kLQDRmY7wDrmNZexsAJjm6VjLGiCsxGY4ywiwQXakxMkQ",
  "key18": "3KjBi9PS5V37e9PMQGr5bTcVLejY6uh7dBegR6suS1zSXWcXmdZW3YQy7GyMGtu6DuodDPEmJEvc8T7zhke9F5qe",
  "key19": "3PMLqHBUBef5PRdomeEAyzbTMKGGCFRFeJFij9EhYGzpjzXseRP9HB3VEDin2yPTMQaHY7FRheQLe9bRr1h6RAwH",
  "key20": "4BrrJnsLPehaeo8kGXwcY6ajPWbveaXdh7Xdg8WzPuSytrHNvMxt3NtDC2qdr8z9gTpynESTBhpP624EpByXAfoZ",
  "key21": "3Z3YRTURbXvoLLXKxFrD1gtjEhD11ChfVzg8ubyhYTsFmPRcLP2L9nhKHWMoAwMv64ETVv4U4Xr582EhV1YvJDDA",
  "key22": "5urav8JnSDcZ6BYh7xSrxnkPeXCYj59Z4Y9da6ms8yirXj3mFoYRHPsUTK98ehQFSzCBg3WohT8JFMYY9bvYBmQs",
  "key23": "2zwZfqZktoYWhjViqsHhrQZK8UZT9rPvPCv8jkyU83MsTfKcH8DkeZMx7dwGzw12Pc8GzfuhuzFAdEdNwXhvFfVp",
  "key24": "5uPNFyWxhmv3WHf71rSqmCdL1E1iRiCwSZprYBWuC3rK564dniGAWCuHGGbzYedF7MXCzMy1DZHEHWwndRSXnzTW",
  "key25": "4cucP3dcYr815UBg5JshzsGGs6nzUFEG9TyFrG66Qzt82C29G4gj5TPRipFNeXB58jjsGgwpxC37Xe5ZZ2sL1T1",
  "key26": "2SiP77trgdwVyAYYsHHkJGm3accePo6MR6V6ykoFpgP17ouw6QRJueinHSBtjZYc7HVgsSbYGhtSPu7iqkJYpjcR",
  "key27": "3N6CRkFQcKN4WgBS3wMNrcCzeWhEKSyTi7sNKXnuxpvoP3vJ6xCYNQCFb8XTmzzdkoRBYo9BebDLBQbFUZyAgdf2",
  "key28": "5aiaF19vWgRDF9EwHBM7vSPeAP1XscKMzUnKhesj5DdAKAKFVBcyT1bBJN8eYzy2LEW9rY27rxicpfpi2EfL8R3y"
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
