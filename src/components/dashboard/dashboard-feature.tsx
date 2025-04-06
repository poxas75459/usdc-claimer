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
    "4Es7dhrUSQ6MgRE3QnxLhktUsstXJ5FDBzgH5Dj2YokANrEQyX74Xct9KWiuFeYJB4K1JtbXAoUJnjpXeN59unVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuYLFVh2zki3Nmyt8SbFiPMJyFRKYZiuMthcMsLfHUNmoaNSURYJ8eBtu2veWRddW7BmuRv5RtLswGGZFXEyp5D",
  "key1": "2r9CCLJBYHTxbFZjvtJ4ST3GP6UVUKhPMprAqvQygarEF9fcPomU6vT4ysfFDzrKZYEpLpaxcX27JFQFeJ2XqQLg",
  "key2": "2h8r9QaYpQacJ4Ku1QPP4sm8j5ABa5SnZPs9ADRBFXgvnehsqqu9a83pESWmLqFw12M2LT7yEevSKLKvhsLy1Kg7",
  "key3": "GBHcJXu5bZNGM5WTUWYNgL3BULF3Qd3PWA9FGBoVequDKTD15PtdyXyr7Yran5u2Ye7gQ6yrSpHNptbCBz3VRi3",
  "key4": "4awqn4Cy9BWATQNpMvVBhhDdQU3ChH9aoMjsKWvf1PUVQ5FZ8nnDCRqBATAjbyZknNk11Xs38iLwMrs82PnMzv3M",
  "key5": "3Hag2JBAp2YMVz6PWs7QYUeCWmyyoqA7pT5hxQFgRTPR8J5onE3FbPNz9g8FBNYXSB8ZzHrRsse1HPax4RhQhayR",
  "key6": "4AqDhp191LnjecsCBCQiedvXxi6cuDZZq6hRRKg9RycdCp1fxQ2DZ7hHa9uDXJ6W1gEoKLNgPhGRytRYJffbxr5w",
  "key7": "41PtBG83Vu8SD1T7zKoePUL8CoQT3rygNiyoSGGmMrsmFqtRpznRSDZAhqh3tdpG66u14vb7PtJERTnFzpdoB1gq",
  "key8": "5XkYoPNSEHvPsiSmo3jkFiWoHZDz5z1Hd5HbmgC5nZoqbw1ryur6iYPQ1NVm6wT2N4X1WRKyxiN71h8Qw6Q1iffQ",
  "key9": "4VZ3rDefaKHFqbooLNX1ouocyJkaagSB6vEVphCZVeRcpwDmWyr7Mmq6J7X5YsEvc7VNycrG3Hok4CV6eSuQCK8E",
  "key10": "4owmgLv684jRquBR32YYU98bMDNjzvndNwp2uaee3Y34oeG9xjBwQF1afn82bRv6cfmvKptrfYWHXFJvsyLo41yE",
  "key11": "4YC2H7ikS4VyAitSWFKk7Y6YZnc26QUkcnz9adiKyiBsX8U7QtfUtk461vFv2BisCRfPtoaB2X44T6mAZHizkDYU",
  "key12": "p16qAKmgGcJVB7i39UH4fFnXeP7187JVytqVzyKLeHT7CjYBk3kvQpiH31adUHvhNGCEZxCHF9nYBX7erm1zAsT",
  "key13": "4dxVAsmyiFvHuSD322J3dUiWXsm51HenCJArtda1CxNrqMGokQGXpXHr9YbWMTwpArmuqnoGTZofgU1oPeC1wJQX",
  "key14": "3mPN7ooQp1mug2Jk6qT2xMbtxLpJkg2Zd8XwP5w8ULVawRJzazw2tqiQ3WaJd7aniyb5Via72aRSQzgGB6njXuse",
  "key15": "2rZ7nyvzmtuQZrRhnxPFhfyQHqkXLCvto99Wuow4rX98Q9CYXspQL1GL7MmycYFQ95eLCWmLWsfiKLZZDbWMCxDX",
  "key16": "5LUjaqXYSaeRGHdYeoLYyLw3wNk4ANuuFnBUQp5YXgYrZnj4McMjMMZh8KnZufbdfHV5VjoRyHAhzwVMM38NLX79",
  "key17": "mBBsR32K9yCCcdFFcvTJBcRwwjp77U9WHWaPgkpRRVWkbBmKad7p5sDrWE2TATFBoZDSiX2LC7kz4NPtc5fkQcg",
  "key18": "2AbD8dgZXaK8FJSNuwSMmxa5r8bPtomcVgPVXUWC5de4t1keKHKeyDxxoQdJXMU5UiaBKU2moH6K94vaEBfnUfJu",
  "key19": "55fqesPB8GgfjU12AwfbJCDu6pBUaHqu7wePjRPd1ufPqFZAAQzuLGD8UaQN1L1ii74zEarF9aWPYFTtM6yDKcpS",
  "key20": "3ojXhajsuCx1uvMkYK6NCrjon4p66xj1JGQLRsVpE5qabDK7UCkfscwAmC3zXPiSq1nZXWPuPEcCrxupuaQFiX7U",
  "key21": "2FQLinMk9C54QxsSduyf2pDsg1dGAbDJrjMEVstBsy4b3Hskqk2TkeHzJyFQaXLgZhuzsgtWSdFvnpdhStsZCAZh",
  "key22": "2DZqRqFJyiP5uDqXskv8Lprx9H4Dbtzi6GYR7WTeq73u1Q2rGQZdEQhokegAaZd6N6pukLk6bwNdKuYHV2gHi4Kb",
  "key23": "t9VxguNd46fEjHX7KmAh1arb8BQrFUuwvodcg67hVDyqMkHBpDeAkbaehaWdBWvkAEK6aQ3KxmphSF7HgMumkm9",
  "key24": "2G22GJJcEU2U9MHRzcqnvNUFadAfzNMxXHb77QFBiCLZXkGJo2LtzvT63Z4yeA6ut28PPqxe8ty5Dve47UceGuqf",
  "key25": "FrYywDShogHfqjdrpmeFGLSotshQWP8hD9h8AnQrHU9tr8cF88DvkVsyvv3goypBcsm1TF2T7onbrSR16KZjyxE",
  "key26": "5ebMXshvRM4aEGYznRg9zw6ML7hVLSPiv8eEn8DaYZqBmvnFHeZCUYHAugwpoeBXwthj42pucsvYtf36cgPFCcB",
  "key27": "3PhPHDdDGeAZ7TWi57NTixYugeegULHEJb9pK6kjWeBbgDhAbw99Vs3E4JM9EEzKwQGdqv9V85nsjAEKHiSoWq6v",
  "key28": "48d2BXqgsYuqh8fGxXVjFjjSMtt7c6HBs3yV3dZKb2zT8dGTnn7wRWqHPr6GWJr3iiPx2q5ejVMP5av9HjCSP6ar",
  "key29": "39mMus7pX6opzqJo32Gq1tozpbJrFNiTPrtRDaNuUxe52ovmBzNHAT6PteeBa6dSyT6PGCaaeBJsraDTHU4S3UYw",
  "key30": "VEuG2t7xT4b7Z9cCfBo3BpaxVRL9cHcLrdZM6msxSNpfkdoTLP6v9Uh1VvGFEQNubsan3NdnEG6EajBwQ8A4LrF",
  "key31": "5TzLaXRLj3nj2uHuTvh3ei9LxQSzjX6osGpvokRqRoN3Kz7wf9wQwX8mUmGA8YvXv8EAGrfL1MxHSjKq5wBDTJd3",
  "key32": "qKo1egFiA8BSvmhYunULfinAkNL5HpNFc2cDgxZSwkv3sCBDhWgyakYxz9mZ3UcmecmQbHEP7Wqoq7gSsVj45iG",
  "key33": "59J5DFb1Peo1iFFSm8D8sEwmAS5F9tcrqiUc5eagwDQmEp5rz4GhS3BMxjqMnxWNCRBrtR1EfxPrXywfMm1Cronz",
  "key34": "4q22G6zidiCM2BqH1EcA7e7hCnn1Qv2tHh6NWEnwZTETsXdJSBLGgRHvYrsA5PyoaqWXvkW7SdazPgZ6Zk9VxMih",
  "key35": "58d7PBZiTfnAEuRUpQnmsLnUrAA6eM8YWyx7JXUHmu2zkDDYA5NpfZVaXDPXiamjJDHrqEJ7BsgTw2aRr3FARhac",
  "key36": "5NeZw9gKisa9S7HYCewFQXyAmH36uyEpkBhWfCQjB6bZ6dPCTq9d4Aanj4cwRVwifXuTafXRzK8qqq6ADvWdQ5f6"
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
