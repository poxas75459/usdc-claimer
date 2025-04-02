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
    "5KDN5aaZV34C2B7tisMX9HbUVJmo7GMJeJfSQRvVmS4GfDwgrwbu294jfdj5rLPLjSrrNQMhYABiRGaQphkwGyEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGH5AYR8C56prpm9rMZukw8oScSFqsX53E3KZZZ1WWjJHWo9AcjgKnQsmMzm7yUmd4UgAJL3hhqyrL2nVTubEZX",
  "key1": "cPb674nWnYuXqCemM9jYMDaBL3qxGqEUgbFRSvPB3eW4nRRhwdR16eFYJcaK5KG3W4VuX1UtRWLt6NXTXzPgy1u",
  "key2": "3o6UEDyEjNcPEKxf68zvcmFARovh43aUKRV8QpFpBMqoCi15mLKxMjTuiQTbFiyvmBmsbB7GE6MAz19V3qxrLpnZ",
  "key3": "64YdpkFAEZWtWUTb31zm2GM5xMgqNH9TmkCY6hVMJCdoo3JiC9xi2S9JeXnWH7sZc345BvtMmaXY3YBqBru6hpfP",
  "key4": "2hGcpNRtessP2ZUGuTExuHeFqeXihVB49VDdaCdAWHWmJGi2nB9VK1rXdYVuqzBQH1n3FB4mbzJsXuZ8mceJH2KT",
  "key5": "2Jn8696J7qt9hjZ7iVSorL4SVmFwXYjjfSskv79riWnoifuWSUA223wYygRXYUvbVjY9ovvTxV2nNzaGry5uaRuM",
  "key6": "4Tdj3o1hgq2PahG9guKcWMMDmWadpeayCbHuB2pe9ttm57XebagLBArsjsNJJmxeS9LkzxMUFPrJCcYev4ZVAUjT",
  "key7": "3N3p8cu64Q44VQgKQNTEMiVzAKzXzYSeLqS1SdHSehvyjoX9hd9GyM35q5YRoVn1pNxAntqTDhGahpqEBrVEqy4c",
  "key8": "2UMBbZVFqg9aKFHesXccHkKyrpyfrECS2CrQwbyynC3qFNJ1QpZNB5PNbUeEc3qTRCv7wxXDswW5H8SExZ3sKcZz",
  "key9": "5c4HVXjKT47dmVsp9sP5bzznkXUPeTBSpe3EKrZyMHp4G79pvFx6pisnxs4cXGsogPHWBAhgSNo9Yoz5Nn2jRHiW",
  "key10": "2PieZbDfyuTPneAntS5YWxzTDSGuzxK28DEF2RehQFpywqpJagbFv8KNAC5YNbC1SxxH6pySYGk5VAeoKDdPsDmJ",
  "key11": "tiNoDt5UspsrkwQ9cMx6acyNQazTxovVuWpPezxGuVKVjLN9512Xm5C5uwDVgGtsg2MDBRw8pSB9R6Zmo3A6fum",
  "key12": "2ASsxNqkwnXNtCFtb9RimkV8RMVeh9scrGJTHsgYEsoJVfobfWGP8EPv4S44BqfjcYtuzp81ywS2t2QQXNSps3Xx",
  "key13": "41tobqwqG3bUCYd2TJ6VffkaHsBam7GCCTa9rX5L3gELGVcMzmHeZ9SZ7aGvtAdWQyWT3qtUiwjhw31fGWB9Fz6w",
  "key14": "223LneHfYxvpFaY6sLPfJVKCV59wtAfHW6irr6PSjrKyR9FaoC82cCFxGLiN1G62irc2E5k2ebrQbjJABuCraSHR",
  "key15": "3vBWZL71Jy6FUM5kgZUGRHg9Rubx6fMmRCU2EFyfMd6atxa365NnTeNEA7axoep2v4SU4NkYNtHB9woAYGSfBt4i",
  "key16": "5RREmgjAYRMVGxQoKGWDPjeKEfoPsHKC9NgaaigLPv2mw677UT9TS6SyoGgBFwYstoBZwWFF25Qt2HsC8nkgNkzv",
  "key17": "32N7kbMbN4Gp7E4cDNLyHe88u9Lr2NbA24omTFPi6cm9s4NBKWhLUfpumavnFAP82DAeSfMaiUdAyE9tHYcbbv3",
  "key18": "5mC1Q2aaHgDNKLUhx4tKyhV3SMfZ1Bweu7EBbfY1P6ko5SejRhXzutmGMDpNNGFs1SLgEzRgY7LgVrfPpmahYUe7",
  "key19": "294deez4RV5KrrF38kVwFDVjxq7xukYkzQjNscES5pER2i95F9hV9oKjhZHTomkcuUqRQCggzqVj3t5zZ5CEH9fm",
  "key20": "5rpjKX9qstXWgNXXrBcMkaEfNVAYV1QzYchp4RCTfup53iLw9GhySuw9ZVjmbCy1tB6dp77aTLAk4Vkvn1c5rpry",
  "key21": "2yeHwULrp4bN9a9U5dHnpL46Dx2hakXqLgAAPmim4jjMicZhfTxCXkGX3iDkq43TYHgc6zRXA3XC52JQGMwuiJyx",
  "key22": "4D6cdRYkAffxjyg2Zx2ytmTooRHd4FDVkz5733eyf2MbrZsHccWQn53fodXjTAbYVqwG6EjPNHFGuDBcre1PCC84",
  "key23": "4knjBni3bisjV5CxKDZGKKiLAu6KUPMarigaBsNA3sAaZM3VJ72KW1c6VGtvu2DNsFv8KwZPgY4mvLBg1fMtF77m",
  "key24": "4f4t1kdFrmX3aVSGkRfVE4JVHn9AcG8wUA3GNsgzf1r5oWntYdCMY5RskFc1bz4yhg9GCZtuVSL8XJkbkVi51fYE",
  "key25": "4EvKxeYoT9bqpzNeWwKW5jb6437Y3gh6UE9J4UH2Pg39PZQ8XHY1Doy7LxFqTNGGoCZy5spbPLEXHRaUusAgDgJw",
  "key26": "3L9nzuPfmGV4kjWvC1BQVBU2Ez6PbPm1uXpeBB5nDckGdVdckUaWWanvjSTnmTSnfaHSJ9J9pWcz7ESJTjDACp4U",
  "key27": "557CDqFLfxKhr8jFcNdPLdNvXwTgp6VBBYpPDp71AG9BGmD3s7hBeNy7FFDnPkCYbiR6rT8qXYfSRMm7tZxiUNkh",
  "key28": "2HMcaAXae6dJnjFhhNHhrVW9Cn5fyrTiYLo49obEZJi3tp3d97M6imdegRwMWJR32jQwVhqGJzmLgS3ebDeZx2u",
  "key29": "5bQXxmR47dvTcokzFDKasHUjSTFJZkLyyb6QBXupZqrpvfh3dyGXaXR1YPrq8mBi5d5eKHh44mPV17kCx71MKW2v",
  "key30": "33Mrztea94weQ33tVycbqcCgEJvFWNrTKcD6uUMiCNd63WrTKWHDSPSQ7jfJ2YUg7BveA2YmC5mQBygY3SwaLxRf",
  "key31": "92zHaJccisQf39vmq9hvDMfVcXyyhAjA13EvKdbpkPx9WAfhzkbD46FbiegGT9aawfpHcZJ59iypkhAzsKXJyEG",
  "key32": "3C2jXeHc955enBxnDMNebtw215VqYNQrgigMzVShZq4oZEQ9cqWoxLxKKaNFMYMCSkm5BycoZ5KvTyeEvRLKB5Pv",
  "key33": "BdqPJz4BsQp7HAw5jgP8EuDLy9XJghkFtaJ4ooZnuoXbuWSiqASXK21t4Vt62AsvMZmUUXi1YV475Sd6QALAZZu",
  "key34": "5prgv18pv8kH1bNo4KYvS8xqFNjAhhZYNuCB1mtYsztmcyV5tqxTsZnrqtTLPzRsUTtA6tNtNNrq5Gtoja8pZcuC",
  "key35": "3Z5KgK6Y4et789DqQBVHcC3D15WSpt8SzRXuLRLzQBvjaSKiDP1WrgDjn9b2hjL2MQ9QvPMq97W6Ro9NxhVTbrRq",
  "key36": "3C1gXRuLCdVA2aF7vqRBHnbhz2RmCTpFxgmumnnBi2zkvYkve5Azss8enwhcZvX6G4hbB15jt4qLa13K4ZR4FRdZ",
  "key37": "2F273JY3HBezKszjFDn1B2UKvG5i8DUNph9mvAxQ91DznvYYJ3H4g37gWWfrkh6G4HhHM5V6Tvka6U4t56kPCUHu",
  "key38": "4pkVFPYVwCzEMzzroHawRevcFkzLGNAcKRp9hubRUivBUs3ixMp6rj9wXMa6jg4PdEpZjEZ8R86tzzzTqH8TjDc4",
  "key39": "2yzU6wBViagJURbYkMiXHZPrXdC6aJ4sLk7GaKmxdYT73xLmk3Mr5BeUY2aqQ2A7PgMKa6u9GK6SvNjLe9ooLYe5",
  "key40": "2BjWDhDn5mYXHofkaTTyhWqiPJdKvuCasoNkRGeNsEsnV3Ls3rpP9eh5occnJNxNQFQFAYjThdepGMdn83WewCTf",
  "key41": "2UUqYmonqTVPMMwLDx7tzzwC4t9UNn2scgJXANBUdSjgU6KHdR2gabf4eUFbCBNvbrFLQ53wQ3F3cHPGQtm4Goyc"
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
