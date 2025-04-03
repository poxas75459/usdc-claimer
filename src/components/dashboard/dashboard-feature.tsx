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
    "5nJrJp85z8kKjo6atDbRMYhPXzHUosLaymP6gyE166h7FMiQXg3DavVyfo5J1xVqrRUCUPiN8dW7zBfotjZmWVBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYtw9sp8DSxvr7z3REy2gNFNLKiSYkQHJ9iLnzW7F6fzFLXtG95a1WoEA2Kd4QbMpLvZiBVNGhwELZApYSJoU4M",
  "key1": "38Jyhhhuf9SARgC5hgu7TV6FxGjV9sMZNComsDX4DuHrxW7ZoQU6bzg65G9q9MCsfbwbV5A1GEncitdn1SvC7BDE",
  "key2": "27nxjuCrS77BTDJqofRRE1248Y3LpJVPcpq7qbzKJDTRFPzH73StXtwMNNg3xfyaE8awvXjf9VPBTFgH4ncGqzx8",
  "key3": "4we36XUcuNxzsAcwvkohd1fHhvsdY4qrhFDDjMLPANaS3Gc3wqt7HAD6E6vGHE7vsaJTpQAL1LiofxCRgbErjshR",
  "key4": "2Y3AhiiyYA5Prx8pbZmbXyUAGZ6VDsNTSAypowguRPTfX6XuDPnKHGfmAq9nCAjGbsrER5Tyb1uYzdzmdQtHiSkH",
  "key5": "2WSfxNVzjwxvKxeVKYVWBDmXU5sYTgMTTC8hsjpE1wGKEVmhF8axoJbr35DuC9WLrCSK5JXXfLzNGKbqgQByPMQR",
  "key6": "3uKL34MzxCzWcUNgZXqPMcJu33RjfxC53fo9Hfqy8s82mBwDdDyeX6xQd4TfjipfBeA52VKpANEckK5Cjqo276Bw",
  "key7": "2KeKSxNPXSZdQbXDpHwBhM1nkgpeNmFr2RHeVvz5oHZSSLpg96HFDh9M88LsrxjkSC3ARDdBytErnGxcSDJJcmUy",
  "key8": "5UehcR3bcuHyX2QDPN496xXYM3RRnBpVy3fSHDcEwNC1w44BckTC9Mo4GV7yUBxRv5ggxWEMsFFZmp7aNwpNwGrc",
  "key9": "qF4L3Z5ecfEYWcNGMVobD1YiToiE3GUXL1V2PHJZFQSYXfaJrL3TsTKz5dixZHzczgtguoSv9hkeihf5HsNxkBi",
  "key10": "t84NxHgK21LeENiGs9FPcK3siBJnFPTjMmg2tmomPnKFZdeDcGsE3mRguFaXXYTqabvXvYsEr5ijd5HWnL3Uehy",
  "key11": "5XjohumAj72EhwbwE7rdTsbSFeymix1EGnsxNwTyGKGYHrwpvj5N2AEVDad1FjaR18yYSxQfYgqKDh3Q5y1sxTLX",
  "key12": "hapo3WTKPDGhov4swNnM1FK6wPACutS7ZskA1DRjdd994CDaxHCocis7DToxf8eAa4bcw7J6KDFaKDsS2utFYQh",
  "key13": "5eM3FMbZrcgoPdY5n5ssTz4C1cPSurRRD5t3ke1B5jysKR6Nn8ebTm9TA4p8JUQVfdhyy1rdVUF1zvMR8J4B9qR1",
  "key14": "eifzhLphUxqRWBm2U2Sf9hU4a1L7R582gXX68q5m2CKcsAdurrsPMzT9spfxd7REGYbt9dQjcaqq4YLq6iANscP",
  "key15": "4xJ84J7tCoTKSGeUsT88goEhQ8CNxQo7r1xZhmUGrJZHKAtTUYDniDJjH2nsmeQBj24otSQgFvucqY8GZNsyzmjy",
  "key16": "2vM4yBXmHits4XMrwXn1AkMegMJfyhkJ8oehmVTZcY2TdsLgq5GJbsxJ9oCsoQWoxVhe2w7sspLqfkgeizVLbeSE",
  "key17": "5oyKa1Xmn2Yxau3wMwePj6rwWUmu9TJuHUVqYJrb7FTG1diWZTc9GMfc2h5TKTQDj9gWztyXGKYeo4hRQRaXtFzr",
  "key18": "LXiQ67wkzzbaaVBu6dZSMJDoiyx5BbubbwA9SRdo2bNq5T9WbYgoKE9TYhHvmXDDtPKNnfyNxLBtYE896ZQktbG",
  "key19": "4w4QDbXwwRMKpBbtHHhDzHmvP1qMRPuaTSobNqppzeEKYd17NpLfphB2Lnv1SEaDtVMNe8pNqpqcn71zx3MnezzN",
  "key20": "2SbHiw7GrFjud9PXbqRuLokrr93AkmtfyCriWWcuRrDDvW8Ctv8rUef7SoFXFERAXpZvF13jf5DQkswgN6y4SMF1",
  "key21": "ZqEQjtGtuu38P4wSVAQTaUSpjXzFffTkXHz4XHXikFaKMi8QUmoBzehBydxQ1SmUDs3nM3vC6atTRSktTgB4Kbu",
  "key22": "43H5jbENrupbHCAxsuCNHkW64RqUWT3XFzDmaPUFk2YRr4B6YYPXDPprUJgwrgYYgXaTjEWuPNLpPoYyv5bEjYjA",
  "key23": "2yn1iK4xWsLB67AhaadfmHZNcEq7uc8GPr624QdM7pef4FGo1xJbMgNuZuaaTAJoF7fe5tUAqed5aEQeCYe33guL",
  "key24": "58rZszUqpnZEhm7WnXUNSYCHX6fGUyFDtsEGkLr4qSJiisyyYtPdo8bTGD3AoyhX2zatKHGqeWNMfEqgdmh5pVNa",
  "key25": "48YYTAeo86kCyDQcU4byadmFJ1oPXDNC6ZY5bgFk1sW8ydtrQuuWqDgTbLAgNatFZ5PJpZq2jEuNZVnhAU6hiUeG",
  "key26": "36KLtBW3eKBkcK8xT2YWz7H2Vof5Awybm3u8Bb62rgT8GQrdUAwNuirjKzyj4yMCkh4esVxnzFbKrhLhSKkSJxG4",
  "key27": "eCiFRVh2MeVtJBXYyZv3Gd7bHJXeL4mu1rzPaiciPbBWnyxvorFVU4eoFKKYPteuZgD1kBTFQXjPj6gYKhavXZJ",
  "key28": "3WXKz9RUz2ZxgH1JKeN7kCvHmLTXR6mzn5xDct24sEW5gGo6wNTMjjVm2tb4SNZDzwm1qL4GQubP359pXf4KX26d",
  "key29": "27dpQNzUwFT79uxdtMfZNmUz8wWHvTY6jMUDr1dHnJsvrp2fKdW3Kxwj3Wxeav2sYxR37sbsRnkS9yafbx65fUvb",
  "key30": "2Wp3HCikW7SCNoPkpU3wWxJQHjbnQ2tVDUwnd58rYPJP1VFk6aoWtQSUj8YSdSz987pYLQ3s6B5CY43zLgrxALxu"
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
