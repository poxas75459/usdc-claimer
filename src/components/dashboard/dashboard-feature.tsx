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
    "4AykbjTSHhmNUnaMDanP6GDgS9qGDQWqtEmRizgNgXaoMLXLF6kfoWZJPNggCjKJCmT6j7kx57iPDebed4CVq1ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aa6HqR9u6bnk198fBDDuGN47poKKKhx7R8CLur7rvLREXaczUKjvpsqpXT5wr729YCyxRLTRtxYYcjyui53RPAB",
  "key1": "3EDCpMzYNvvDMjMbuHoiYN1ENDdjSYSvJM4MuAV9yL9u7TKBGscfB5X3SLENWm8MghQPj9tjy5DjLk7BQsJkGix2",
  "key2": "2EQWQYJvxcaKCsRb4z85QvePCfhDsbGXxUojFJHhw7VVSPxFV5iF385yjKPPMsjACjoDsqZdXVEsyWvHiRiDdnRr",
  "key3": "4aZTA6ZoMUGpnJhvYwAvaRZt38JforSgKdkWgbJ2pJwDW4dCFr7xsAhzoCYSksHLJSJctCRNQg52rHqP7AkFS8NT",
  "key4": "4uaoUSoQP8W6jw76AJ5ghLpKE3yZ1ZSir2c9wqgYuacAudVzZjswWMax9wYfLH8uKmS3n2jZ4oUt4SJLvf9BUn2r",
  "key5": "5by32GSuV6bSjfXmikfhYGpCC3QWH9T8WDpJcCCyxV1KWN8ctnLraq8MmuFT8fi4zS6KLaqfNyU55E2L5C8rdtcC",
  "key6": "654sKd8MtjTQd4mXLoBajPsYVoqq1tvmt1uUYMmPCiqXQZoWVQ3CfWnUUDv43Uh4rJf3MKunetYPc2X85MY1BWzq",
  "key7": "66rgHvGELpQbvbv31SubRpkKyewPJ5m11V1j7vTjtv8cVaBwWqv37ieVNzUm84QMnZaHSJHEX4Ya16BQZUBimPj5",
  "key8": "3oqs9ZWh5o1hwn9VuZ5SQfk3kcUncfHXgqNCseDWrq9njHtZxvs9sn1ZEXaRXVGHryb283KccLh3HKMz64ZKgYG1",
  "key9": "pc25bDfJ48uJNNMnADjegZnNo1dq5BB56U3DhteRYGZ7hEW8eVQpQL3AzrzfD4HuGZFLF4SN8Lz8nxNQRVGEH8X",
  "key10": "36v6n77BamKGkvbdPohafdrAUz9ePyWEWsJGm32RB2WZZA8TzSA6n7HQKHYjvvgUV22rPb6Cb5HFKNpwRR9Tfm6a",
  "key11": "4S4ZpgZUspHUFCkCPyx2dzCPWn9JgQf4KLR7EyRyyGxC9Z6nJCqz46L3UEceLet91zrxaQtfKXnEL21otY22FPWv",
  "key12": "HNRUfB8rZnjJAjSnvGEq8EpckeCbC4AT5EKb1ncsto8Pvv7RZTTErVpJaEZt8XcbNuNXXPsNjiBzKhkg9XdZZgj",
  "key13": "4Y3fT9tBTJvty1uHn7sR7jSgrtMDS8DJNr6iB1gmxJjwkfSavWJSCEanFjK85UYDD3V4aUb7W3wJbUXvaut3Cjgf",
  "key14": "49v85MmySFECDmnSS5jQ8ibVoRvUqYwYtNEWsqsZUi34cZPoB4tfaoPcPd6nRUCUVM7vc4yHevWT2FB3fqmrs3MF",
  "key15": "4mbx6mGLcFJSKQWK7UT36TFiFoVyQvs9GB8LiRtB57xmJUvvzShZVFd1Pb8D2jobtV1vFLJ2UNitPDBaMHEMXcLU",
  "key16": "4njNYBCfivHdFn87eHjbzGQAZrB6kNqApT23HH63mcYRAEozB5vsJrtkzw6DjPAw2f1vKVWyWaTcwZEYFW4ZySiQ",
  "key17": "Dw8JhxmS5U2xvLc5xzqjxdDQmPbqq9r7UgGWRiuqfS1vmEagyxzK9FViAHVwRnMMKMYUDXePPM8ShdSpKoJ9Htu",
  "key18": "2XpwHFkPQoPxRcq1utovyii4ahtc6Xyp6m6Cevqrg8Vufp9fhFQLfCkAcmqtGRm8sPpg79aHsQbcpTpnG4c1Rmun",
  "key19": "4PG1VtozHa3LD6yz3tWhNrUp5TF9zuKdZGd8z1V6WseX2CQ3mysUtaaJq5JjMF7Xhz99YnyJjn4CG7TjDf4zoQtP",
  "key20": "4RjhWf7xVxhNicVfdUuQg5u7KZMvLR3eyUj7LvdUqerVccoumKNXCqT3GNEnvW351apb4LQm3zfL3KYKLJouapRE",
  "key21": "4LTmtaU2ZMJ2uiDCtDJ7LwSq2J49auS4sLmbeVzqMDTqj4r2LxtXmVHHXESvbYQy8KEYsELrcmLeYAGm4eXfF1sv",
  "key22": "2cJMTk1GYDZswNhWJVRhRi7CadqG4rxZWWrXHcgbrdntcYWfZBWuhnSuT1s67MeSENKD1d7UyXUbmaymmz9K4g3E",
  "key23": "63QjUKahxgmSCjj2fUJQ2U3dH4e8q3BJ4sMXsw1DesL59mBdd264vxMrpf8fHzu8NpS8riPVKxjQFG1YMkNZ1f85",
  "key24": "4SuMzddtCi6gkNRBrAXGmBeqs9zaymRuxvipHs3k4XbisUoQEFWMh9ktxuLt2JtgeZxvFFkJnRpZAGBgr1iyZt7T",
  "key25": "5hcbkgCUSaW5L6h1ySrBbcJF4QGQ8JedN6pTAB6BK2Bym1FJZK2k4JradFLdthqtmtGfdwufipRZw2E9o2AX6oEJ",
  "key26": "2LrNzkovvwhho5wqug7GHZWtWMDHaHNRAdHZ3L9gWtfQiGoowqvMGwbms7chnJcS1q1iRw1YepsuT9hYqhddY4x7",
  "key27": "2MJeUKubT2WgtpqpG4KgpdZ8ec2J7cDSGa41XkPSMjqToTr9ggRwYnTFnMMSnyMAP2f6nc3YiWvCvNdDPJjK8VJ2",
  "key28": "rNKmFZG4L9atvn39shSt3SQ1jj115aLayi21caG4vffPWq7aid7ZmXsZMDhybnT3TQizRKS58ZhGm4bzUr1zhQf",
  "key29": "5aMancPKdMiGwsPWwF2sLKyNcAgKrzwrM6ZEa2gVroRZavc7kC9usUTWUKa4W773RAqfVNVs9y4363e672mt8AGQ",
  "key30": "5DdSbL4y6rK9MucWy2GBEYQhWCaUjmkRgEDDjYMgH2YYGcmykkZALdB318BAm7KQkQGdtBcepvnp8JhBBicWfdw5",
  "key31": "5fKRC3sVhGQqNbeA382YfiX35q6aLuCVrSG5oFQ7izkJRu8y5NRUoVApE7sxCWqB21EMfpAnvSMDgHuDzensojBG",
  "key32": "3siTAc3zotLEYdRHbWSJM1RDsYm6oNjNZ84czFXGprH6qW1GgfQE3jtQwa99cq9DRCjrCNfNU9kGRnPGiEMwpwYy",
  "key33": "2LaiczDtYaDUfsCPDy4xCDyB9U6AKBv2dVxfJwi4pfZrJf1yc3nkF7mXNLvXTj9wn911sVDQnaySTu5dDskfo9ty",
  "key34": "2FL1VGv2Du4hTYom2dtaNjoXrxKvgArgxEM5LxQkpAAZg6Qn591PdJxJJkTyg7ZuA1ZiHYdsdXtGrhN4VQH2tGkk",
  "key35": "3xPNhHBXHMTxgteFzSuw7PpYBwypyz1GQTVc9spqZ7aGutNELaPJcc82ofoV7v5Jzjcr5p4YLSAcycdYgrJN8Vbm",
  "key36": "4UJvwrRWXg2vY3mFSC47ooxee2CNAfxAESZfNkhMk2xqzj8h8Uv5m7egKpS9sjSqJeBe2kfJXtFmaswxKxP2DffF",
  "key37": "5qEDdXCdu9ouf2Q98aSvTJaCpGZQLEueNwJpjBMkGcnQC1Zf2PDgCBv2MYrKUTSdqfZc5QdAXTnDRby4KVVohZmb",
  "key38": "4wxEjnVTLdwJFjbk9vyNMD3jk2VnjycQrWxpARxtVXPB8SaL5bsBbLFn27k99F19XZiVi5P6YQoPgMyMoYTKJkzp",
  "key39": "24UyL7GfpApZGENhoao5U5PKp2kw25UsmTAwUdyhoVbxhaGw8GEwZtNoPd1njYXB1rcJzuE33FpH9HaygzVqyh46",
  "key40": "5c4R1Hyg5GbdfgLDK4L46XGrVQ8zUpBWf7UWUSEDqp5KERTqb7vhYQjB1rwZmJgcFp5vcSgF8YbiFhcbBSLmdLcQ",
  "key41": "5ZE1bWsmDv4WnBC6VkkmTD3vrEGRJJjGSznmVYcM1y4MVenzMP3EmBPKca9ChKbEwUk7hoadNDZZFrL7BxmaXVLJ",
  "key42": "2doHEgxa922u2mTdCS3YbnDNNHEoUptKDzEtAnKHMghYCNSjuZGWLRZB9nrVDA7ReYg7xP3ip6XeJX9wjzRo9VK5",
  "key43": "3tonrCuTZ32PfCZpTkx43F8UztsqQqPEbsCLqPq1kfBt6i4tFVCdATghAQPAi1iJPvG4U3QVZNeMVMWpKUFnjQni",
  "key44": "3Z5pRBvwwWw1kj6uvr2UZKHvgeH6MsCBE67bmbsLuzXyXcXx2Kmh958jo4QLJKHvMrNXf75Vo8wtDvXitak26g1U",
  "key45": "3ijHeSJKKYnWQsP8LcvityafMhN7QrUWGWVxW7bpTkTo5QtmvrxvQp4QGm3g6Mp8MiXjxqfXrwKyX1Yrq9BYTe2S",
  "key46": "5PbD8KdRS8UZsACJCXaVsuxNRPtj4eREUeY8T18b2idqMvAbUuG5Nj1R3feWwcP132ELk1ibn9Gsmy4L68TcjCQF"
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
