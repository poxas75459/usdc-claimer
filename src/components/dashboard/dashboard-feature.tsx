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
    "2BKxqppkXx344K9gp2C2onAuaz8v4jm4btsW56suyA9vUgHm1N4wqNVXvvX7h2P1yapUAB7S1CRz8hgkk6yeBvEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHrj3ZY6vNcWFpurnpQwLUykvwSiz2wCyzU7AmxZ87PztpV2S9NypEnYaVC7UUPmWzsYZZoW8eH4LPJbMB8DzdB",
  "key1": "4ujBvxMFojxMBYGeFGKTPPZES3vGrprtVuUgEeMhSM2USiQzcQojLYrij145eda2zmxP7aB7JizX1CBR15Qo12Pz",
  "key2": "3emCDqEUvAJMyttMu9jcpmBMdjsgyvxxprYJF3vYt3G4NLr2kkSrAMmymfQqr13PSKMu5UuFcDtiFAjnupdtkqkA",
  "key3": "5F4tP5sY3qPJw5TtTRax9jxTx1K4WVuc15AnoRFys6jYKQA2EoMwUs3iZhV5H2bEZcEKVpe8d4S7bagzADpLHyxG",
  "key4": "2yHK8uyUXdsg1FzFoUWKt2ejSaoKJTjp7mm16N1VmXhUrLdJYU5g9FKkqDZnpTjXxZztDjZ7L71HmisBC4XzVrJY",
  "key5": "37xkQYKBoRbLeJLyGSapQ5zVUjmsJHFmTsL9zYQcn3hTTcFnGHoSNKTYvGG6umcVtfepEvb7i4AiJESMEE8X1qnN",
  "key6": "5aaspStjbGtUujUWMvuZTs9YJnuMryvxRny8tJj9aom7fiCx7A5RMHAnnYj6oQK8s1MiV2czManucZEFwL1CdKJd",
  "key7": "2Ypy4qpd4u8idec5Epu6vr8rV1fbwHBB7M8qCb8GWxZwo841e5iohtVEgve519Qsfhm7dw7hNTdf3fYomPBtDvZi",
  "key8": "2cbrqk5agSDYoay1AK8iggirSb4tgzWg7eKrirjukBKMTnSK3CG4o7zde5iNM9uE4kqQk7EDaAicJ5pYw3BNJZa3",
  "key9": "2zKskYTua4hJBtLnSkPWG4NtNz7YaqWM9fy7SkzQ1gcwzQZyrsV1EJfirjuTBzrExTdY1dbRy6vZeySusxeBHwkz",
  "key10": "4jQK1fKnyLJ55pqcXVK1LkiJNoYVxFMnuMnbUfvkwzbMhq4gecTmeMTLNXjoe4Ki1LXmKh1P2BFbLjbpriJXiVZz",
  "key11": "4RhBaZf91A25knP6KYjpRvrJN2w5Mi7N2ioRC7sGF4JVp1ytNmQgF2YDM2r3mu6dBFy7NKQ9pU1cZX8RobcPTu52",
  "key12": "4XqWtjXPvsB1FHTJ3wQC7RhERBJNzNsoCzBPybirVErkmrrwLHz9CL9B8QbnrB6QvXfttNZmpeLSTm6qzcqT8W1s",
  "key13": "5oBoJMmV1E4WcmJ3JxyGfhCtkRG2xKkx5Bm8YKUuqMnnejWsF3aE6ysufZp2f96d2uupdcFeMe7BqFseMk9pecgW",
  "key14": "a9BetCRy1JsKeC9pSNsthquSwYa2sXbvJW6XogVjppVnRGtUwdD9cCpx9TgV6n3ezMukyHRARjvttzGJ43LaKhz",
  "key15": "43DL1QCteoQJtCzcu21TJygZhGz2Rxc8UMMc8QyaAVDC2tA1rr2feKyW5QFuUg8Spdvbus6hma37auNKPCrWKtgR",
  "key16": "hc4tT8D3h3v7sZUacVRySeXW5Sgcy6Rx4aXibpWv317x4DKwFzgJT88THSratsrvD99fNQQtxgcajwGfERBfQXC",
  "key17": "DxZB5P6tjsEQpbUCaRHcbxsTV7L5ePy65JUEHT4QG2vC7KqCfihSUHKL14EGSuMR39bt6tYzpRfZMFW13wSZe5R",
  "key18": "uYyvMsNc8DkwRkaBvLZgzN3maAhqyU8wnLvD8j6Kvs8m9z7inNCRED4hUnk1HYny9KrrJFg5ZU8GJrZQ2pomNE8",
  "key19": "3c5uCY7YrtA3YuwpPXqt9sV6jaUm2gfQ8Nt2aQEpm6YNqWeaujCcKn7gXLi5AqZw3fSjjEbzkiTX3dgqrb9aJFar",
  "key20": "4ZX7QoKKjjr8ZtFdCCmPTtxa4NvS1V9zQkhGte5AH9276jU4Hh4GAcWr4vS2nstsEULfrkszBcyzTNyCPuQtU1Sa",
  "key21": "3rCsEsETTywXnvvxbYLNGtkrwW7Lq55Wp2vzgjRcrAq1ALaozfVGX5CbNcq8JL8cws3wxqTXFb99k94G9y79ix25",
  "key22": "24PcrtxKT2M3WfBoAh8QQLewHbBd8nVoihJhsaX4xNdrYPYM95BYqQ7KrMd8msVFUQv88SoTWEnxMUhJ2uYFW2fy",
  "key23": "5T4Rvn5EPi9pCHSp2z9WLL1du8Pa8QW13E6z8ajZiic1FjEbXc1BpMkzTAMUfRoda8AKRFagsC9Wu41swGYY9Mvb",
  "key24": "2arJN8GtnrgMNxighVxomqnTHsDw7QEmh2mUgrtPhqMnYLgppAVjHr1VmExVepcP47WdEZGn2wdK9LcifXMudXmL",
  "key25": "4RWQRgVDBRRFd25uwnhNj21HiPcN8kS9jGVSnFtur4hPhgDBUgo46sPHyPm2c6EjoUF9s4tBeUZC4YizX5GPdVz8",
  "key26": "2fDiXYKbt4HroGKbw1tzy6WRppkMjvf6bHVhVV6VeBywPsYZZdH1mRCJEsRhos5NKYfC9LaHvJq64oRQw5eT7FQP",
  "key27": "3gzU3N8exd5mqbenf1iiSGPfJ8JKLjUuABVLFYt7CYerUsvR1AsxMBjbHpD6NMo18QanNyS1sb5J9eYC8LetkrMF",
  "key28": "zvqo6c5sLXLECTFdUEhocVeyR937Qp5YmRZEJz8js5QmAMizMjgH795eSq7jbX3HCtnijQYEdCmp5oWr3DbpwCF",
  "key29": "4r15Sg2NL6DD5teF9MHKGTL9o9VGsSWhx3RYyiP1KUqPj3q2FyGGyWQ4ggdcnkMR4SAzuXLX6AhwWGWQFzMgeAd4",
  "key30": "47DEBw8ma7b9MP5AJSEuyLsj3RY6MrCJrmS6SB6nyPCiMg1ATa9tTSD8J8jAE3hL2aygTpka4ncjUbiruimKy6gY",
  "key31": "5VN4qneqyMRYGtUXj7MB9RDEL8F86wjNmhnR4Rn7fvahz6FtDLRRRjE8632R7iCNsuXGdHKhGckxahYmuRfqotD6",
  "key32": "mEmu8PbgVT9ZGCujTeaBkhtkvseLLzvk3QRkqKmMRYRgzY8pMg726BPRznoE8iV75rycG7hq72vkc6ZWDxrZKrE",
  "key33": "5XHrt5yfpKzUfMbZckyof3yN7f88JE5pDxz98r3EAH3smU1zxSjxc7pzqZS8Gzu2SRnt1KyuUKH8bnUEVvvtXNFq",
  "key34": "VeXJ6cQaTHwYQ34G97KXupBLATx8dhakzAbS1noNTTDZV2rdsKrZemkPDQhrEzY6Znm8pGXFJKSt5Jmingcg53i",
  "key35": "3Ezr9PJdDx99cEQcHHfoiwdRTvcwnFpEetzotX18LZTcPEkTzVHDC2JFM9B18qRVj59FtWCwYrH2C3i22wuiMis9",
  "key36": "dbYMppKS96akpwHxFehsQYyuDbiq4FX6AYda9t85QQ3T5jyczwQ8tDekSdGpwRiGYWFqotTtGnNeSrWCKo79oXa"
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
