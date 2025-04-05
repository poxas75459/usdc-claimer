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
    "3QCHj5ZQgLtE2Z8N2QFimSHE3cgm8coXsbDXNy3uox471EachiBmvJbhQBd5P7hUPNb7MvsSeL7BNeyN1siL5y83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGJVAw9TiCFakuCywC5QRqGvZPhg4yXdfyPFMoCVNMoSL6vPdavXvUwQ8AhynoMyRwj1fsVPAaqnC9KaCg8WHxE",
  "key1": "2HE3bgtz8viF4g31gSoJ7nWngzP7sxPXTDfThaBboxU4EcWeqtjhXpwhuDfouyJDjXrCzKkqrEig819zzCBqJuv9",
  "key2": "qomkyuryjEQDjmHMZ9fumLpH1ruFPTqwE97JHX7CvRg14QBLjFBZQXuh7ctMmiXm5gdxBvnWUUMRwYzuxUVuiCT",
  "key3": "Nqq2vqAcSLnjpqAkK41SoRCBTBAwrdWu7cGzesL4kErKnhSomMWFgBHSiMbSAM6oofdQF4e4aLkrxs8XiXafpTR",
  "key4": "5TC4u4ACF2Ts47CJChasSGNuF9meY6wXPy7Fiddhc3gLdKzBXRtcRyJM3zxbysRP3aUntQm1ZQAm3HhnFLAfNx2B",
  "key5": "2woAZpj6xPkPrExvyZdKrgfBtPZZc94wkx3bTSF7DpEc8dyjxy82vFvm9ehqcsKjhy8pibMq55Cdr4PeLeGNfxxT",
  "key6": "SK8343JqSoSk5hrYpYDLsU87JkpZQrvppQpvkQffdkiKsL9Xe56XspYRHAvJvqEFLnokxkpiuVaGEdPX3z3zq2a",
  "key7": "4wan9wWGP4FYKjwbEL9VyC88FyqozbgFFy8pd5Ut1VeFSUc1R3aqjoxVG2NdwGpnAXiEVkwTDA2KtWz3VG5QRCWx",
  "key8": "2UV2F4gH5Py6Dnpxwi3deezgkuYvfTPrKssq67sHYXmc2yLZ2dJE7vNjaUuL3kYxQV3KY2LfiEoAB3rWFX311MTq",
  "key9": "2cAyj1z22hdPV5y4DE72viMUuCKvcrpfeETrZ4AEp2HS1vdd9MJ4bzFeufx3D1a4U71Juow9fG1etbybwvySZYSg",
  "key10": "5pi5Br7AeNL1Ve6WKBTcQgvZ7m8o3ZwhUYXYUypoJAKR8E1eLiVYd2KbaD93RkPi1DVzpChYg735gN8sius9FQM8",
  "key11": "3D65WsFjh6uZsuQH9apkRHPLJKDKnCUa7HvSrrgFJbtqeMrUHogqsL3xWTdRjVwdqpgkCL7tgJva7NqAiigPrAyh",
  "key12": "2bbZF7GTp35Qhu7xxYSdoxQdDJvQgtdYhr1keQ1upa4TsyJL4CtywK6ewzv6FfFhExzkWFNFMevrdKkYicN6on2f",
  "key13": "4VH6WsyszSvpRrgU15v1hpqDoQi5hDhqGarS9r2gXxjm7q4c3yd6MZBKTJNW4yxMoH8DHwzJNggkSeWgqh6mBTax",
  "key14": "67N86kGZeMVCWeZBJXpNtwtrdWkFLk5rn1jHhoaE8Aqjtwcumx9W3XorNHaS3GFLYq9j61XxQD3i7uqUP1y68rox",
  "key15": "3UqnsKV1JEia8ViKQBVrjMbTYhs1N1MZPZg7d6sK8i771vaZdSWqZM5fgkjv3b26QDkBGmpVE5cxCpF7Udhp96hz",
  "key16": "62odiTwwyxU9Ce84ftDVrRaPKfkXvLKkMZRn5oxHtBLG6DkNr42vvyN22K2f8VjvRNy4Ed3UMedctmkWVHAb16CQ",
  "key17": "4oxRTdXj7WZi7GxbZiF7QQpw9J3PSco3ZXiCCewBX6G7d41uFZ7x8pHmwsFqBn2JHA9bRLZA3TLBjGe2i4F4aBzz",
  "key18": "2ukGbnm7hVA36pMxL28RXjZhPun1ow2m11dcoETkXU8fEkMGekPbD1SUoc9ksyKdNoVww6VcEjfMJcKzDjkCSZ3B",
  "key19": "3Yd7hFz3iji4zQkBmLdmaZEiFtqqzwLxkoYcQwYX85oaTKmw9WJsdPuG1z1yrL9VXNcqnEB53rEbiDWC9vBy56jW",
  "key20": "2ELgXCe2beEPXRFdHDHwsEZk6vDzZJ87p1TgE5Dk4CoMf3MSH4914fxqzHcRJBisu5PbYiCseiv7UYqsbML13y1W",
  "key21": "4zYcdRK1ZoLtSCY5vZpbSKKY7nHibtd7oEAYFufCmZAmSjg82rcwaZsnceryYQK4ZCHoewGPa7MW6nk8MMXXHoJG",
  "key22": "5LAaUHNUko7NPbByGccA3dvRs77i1LGDaL8k3upneUQAuFzdq9FSEXG99e4nxFJJSYwmh1NpXADUrGHHH3ciZoyE",
  "key23": "41N6V5dm3ARxJyKLp78Km6rffrF8V8AuZgQFcuUBugHd8xnF7QV5w2AojMsyd78nWkcVBYpMMEM4cZmxC8xWeKW7",
  "key24": "49Ude6zjz1mVCo91usyy6vUy94A2ttky3ir2RZCSLu5JbkB34Qx397RGudA7Kcmd3uwTzB58qGkLi172bAiLMYne",
  "key25": "2hbaGyeiLBHxMB5SLocWvrkaKV4kq2E3QvNcu7pks41kMR2k8JDDok527AJ3QifAbQwUZrhiqevJy5DnyXnLmw31",
  "key26": "2bbkC6QzKu3bd2ZQy8eyTLZ73ufiqaQfs9X14keJQQsBwScvbELy9mUdmDsgmrAczcRNNx5EjCtbJGJUtuRTFUUi",
  "key27": "2kBBg676ENHqtUAhGUiBhkNA5E8ip8mJEWYWExd24QVJZ6qWjEMtKKJGZFcrWEmLr7GeJrjwxpmEEcnzXmcHrrzg",
  "key28": "592VreXJ88AKF12DECk9w6xmQaL4S9PmkQS4B1ZsdEBGKpsGARNtC1j96Zo7Dk65gV1wFpozuJpDehJTrB91kqaf",
  "key29": "ahYckR4cqVVxB1DvkxUaxGu5W5CVFC7XnQcePqWEi9fUwawEc9sJeh5XcVWhtJmnEs5tNHVkzTpvBMZpqB9LARo",
  "key30": "38nZrW9TiViePWCpyRfia5Z91DxTP5fJHfLvJnmzdd8S9rNXVnY2SpDHtXcYC8E3Z5y7AkqEqcy32rNiBV2QF451",
  "key31": "3Tok2eWR6xwFF79i4fbrPhdFvMjUrM3Xzm9rizqTGZ3prus3stxoRB3BBUjXTUbf22cu6ngXqvvYKB6NRxugJBQL",
  "key32": "Y2RmKm537jPkQoTcWPGDvPgfruDR4wwRG7h6PF8Wzox2mo9CNDTjoiimLjQi9ZGEAJdeQ6ot3LQY7d6td7CqHPH",
  "key33": "dn4MAt7mgpqTk7gZZ6hHSAyUwG79A8g9q9GAvHvW2UFstu8itfLKDBjoUW3AHeEAx2tyFUZrwjahawecaS8ELtQ"
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
