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
    "2M61e4NAtAkUWFvSMmpYrQpdWcqHgJfwcszrej2vXKhxmfzJ1BvaBggK49ACmM25C1TCh42gsxqn2ShgGdCXNz3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4MnmcawnabnrTAF4hqNkfcQnCYzZ2ZVfTyeXEaSFMBG9NxJk9L83rsauTPNr1HWAfhV3twZ5YmYbSS93v7EoKK",
  "key1": "2ytnhah9sUE1YPfmDaD2kd8UJdG8Rfu5h8b73HqQjXfuTGva3vpWL5P9sguqNFaAjxLJ6C24YBjEh42hzNT4hWuy",
  "key2": "5qoX7yCbgZHhWvCWiYa5TfLHJsjuSvZ4fb2NwjR3zQiAFSe6TAuHugRYVjJLPhcis27txCFCB6B97DndVH3k6HHD",
  "key3": "62bCSXuFfZ5M9tKedDPoMRJe8ECTdbcTztpdTeHPNLYRHAbGEcAZdwjdUWy8dLkqRg9F5FXQafWdRcpmY49n8AhS",
  "key4": "5hJUhpU4xoYob9jFoPAe7zTTPZdE1QvF5TQnrCk6eraEWafnJTQ549MjjKzx3c9hGuan4Shc8hhFJpXpcJ7M4Ena",
  "key5": "4gjmHifkyx49PbEz4z4rT3cZiExSsQix9Hsd3Hf3KaTkjK91TEv4PpCcxMLKszXbYRWq2iuhoTFhcv1fyLvmoN7Y",
  "key6": "4B3coYEkSAP7AUNEH6BG5dX9jxTFiJJznTA4LngVi1YYYMvus1ZPwm1CBF6zbagwXZX9NaSLg9RLt4ScqtyjkePP",
  "key7": "28cA1S9Rf1JhiNpRGXizffyrrZ7NYVxnVd7zNBwwCJTS1PPFASptNGfCwDws4gp187CS3WzPdKZjo4tgpepe2dq1",
  "key8": "3ArhH1bEK9Bm78m3112SiNCuyeF5bZaNchDthrEpxgwLayUT9scGNPFB1iDjdgaKsrfrBLL7FpWkWtmar2moeNed",
  "key9": "343nX4oZH86VYG5QfXDahimEmEVwDDaATp9uyCaPxgjoWZQnKtChTvzJBuTQvp9kgkrHYunPCVh1AmyQaGnZRLnV",
  "key10": "4sQFsTchUDarYM3Ga8LHvh7cYx2dnwYaTQ4N8RHkQDqv6yckmqe6CgptdVW2oTMCTVhu5NWmaaZC7Vpav1jD3SUY",
  "key11": "WcqGBfYbmZmX7KqqxD9TLcJEQ2n5yR8gYjUy94ePJfC8qBsMM3nvTbb9DM15aX2r7sYsYo9yX7a5Sxtk6QR61tD",
  "key12": "hLsGLxHBuPsQoNLSPBoQ1LXnGqDiJuwymiLbjEB2X3ez9GhLT1edML3L8BsgaGHFZjcLm7PCP5rd34mpmoFjHq1",
  "key13": "3KBcMX8FqqtQxjR5jhTyDSC5jfzVnaNpM97J1z4kjES1kCWHqhui8yESLhsyHcRZfih6Ti1p4VSEfNc868dtzZz2",
  "key14": "4rXpthMmWWzyXV327EkcK2aCbZmrR3H4Q26f3yPouCXfhshgCPurkdkf8fB51b7xFCMFFUEVzxXKFYV3xUQDKYCv",
  "key15": "2eHUMXTfLuMmJ2H9hpg7DbAfAtnqFX4ZVk8dHp9RqfEab7EvLgEgDaDrytwLWzeWp1r8nPzSPVhL2NhRVCpE23zj",
  "key16": "3uDARGedBChEGzUnyCM6UkTuACXgg1pCp1e5gdDdDdGuagqcqK5B5emu1k3UunQzGQKYCzfxNCaee9daU7AyBXd5",
  "key17": "5fkonZL6kFH75CuL1PqUm4Dfuev6ajhRLNvEhZJNwniTtyESHN8kBDRe5aSCYUpRqX6eP5cXMwPM4c5cQ4R44kM6",
  "key18": "5iRFjyyx8xV9AkmNR8qKR8fkM4aYasQuwX25KG3Mr2cdUurjfJh9AQRbFZVGhYDLFQwarxLXM6KtwTNWnokTvngH",
  "key19": "62K3PBiRLyS65oGYi8oHJgWGQuG2qFFhVBsMgr8UNZLZDnhTQFk4eUqNCQmVPJErjoCMCFtEFqp6CbWvuzAbv3cM",
  "key20": "8vctwfqdpNRoXZ6EmQf1xgENj9NzqWKBBf7bgq12BY3wxy4h2GsPUHSi6wx7rj6KMjfbS6QdkAEr3yrj6TCEs6b",
  "key21": "6DtRZet5JpMciLkTCYTFPjgUhGvQiJPAqskkTHdQ1SEScDThv3sqBZekq23XvghqhFP2WGKjaiZXpfgAmRmnZRv",
  "key22": "wyyhE2tfdvpJMyRSTyxH6oibv3sQtStUPE58jLGb17ufNUoGbe99XR2du4BCkPh6thvR1oyTBBfJCgZJxHiM98S",
  "key23": "qp8h7NBkNWTvBwcpEHFsShCsAboEoS5B4bHbsove7nWkt9vxDi6TR1ZsfFzWH3v4qpdovV74yDFQGKLjJKNi8Zi",
  "key24": "2PHFJ1vDtZYHCuf9BBvh1ygFT6HVoXrw7cnCBev9wsmgALNgWimAfHMMrExR1htZD7t4hTMFRJhtNvxUBExYxbQi",
  "key25": "3nfDUJ3MFntmwmpw2MLXJ3WSSR3zXYjEWj8EHvJriuD5dFoFtfe4TMcJb1c2Ci7r2hjmbyfyykUjimWHeJ3w6Kye",
  "key26": "31dicZxaV1ExXQBo2o8KEqgnoukQskp9fVts7GiqTfvmApGMQzSiABr3aaEeUGKPgKm3ZaxQMVPMitfFFvHKJ33R",
  "key27": "YSTSZF71huLaMtp2HrH8CXGymJWu6GknFNtQAwNQiSwx6zTgkfJ6QnsaaCHg2GKWbxFvJmayYBX8MQ4NVMUizq9",
  "key28": "4Rjvt9s3t3y62LUoqGknx1N4Nkn3yE9TqELUBhWw92nfy7KQFiuYSX9KLWh7Yiuv3HbcQX84VzEc5PqHDdDfPVd9",
  "key29": "31Su6izomXuAitqjLdgPjJrJFh2aesdMqNvtMyCXmavPQxci2o9YNh654j13dbsdW1de3T1FLriNxCqUgqc94yBe",
  "key30": "3jJDGBW76mevLQe3RMjYZr4zTSLsUijcRdgHjnayt4AZgu9vBKwNTwLUB4ZX1FtXLYa3uRKYxRh4pLy19H63ev4Z",
  "key31": "2SnGMQkcUVAgJVeu19mLe4NgvTdLDhraRCZDZbf7dkqxWofBtqEETfFdzdB8ra2S9vKDtq3XTYVUxTE6vfkFUgF3",
  "key32": "46owaKvLe3vZpAbPCv8tHRV3TgiNC5ajhTwzSG8xwTYDAm27dZczy3Thrn9Ns4vz9ZFyesPBKGhk7wSaYHSBM4mU",
  "key33": "2JhGydRjLZ8RSEmZi99aHDV3sM9uMwKvUfTGADV1y1NEYxbWcYb4ceS7Y1xhfpUYqFFaL5iLyXUeFNGuxBMFwaZw",
  "key34": "czVNEBzYu7c9ptgKr8emwt54JmfnSQ3zxpcmSVHya3fZoghHMnFrpa5Up6JtwEUeq8mCjur8tgLQo9XsDAN5uJJ",
  "key35": "48H5Try9bb24vFJwAkgRAXbG4rXuLyjFBRV6Kh9noQuf3deYuaHjNqZYddjjkxMsm7pTMbbKTTdW5em5tzgAKdqN",
  "key36": "vQWe3ozf7m8SECL3C92eAxkHj8hs9VCEJ4XTz3cwzBGsowToLgHqbp1jDnqMFxGgdrhHy8TFZ9AFBcoXB9jiyJ2",
  "key37": "3m9inmorMyMeoNKYA7cijXraXzUnVVsjfzH7Yi2HDsVJcoWHq36c8tHVHTKm24GKT6KztxMc4DiBcRcKnQzBUfht",
  "key38": "5PSznGNPhGM1pARKGdskW9phcoKQVFdqNgHq3SeciDKjgbqj1yb7FGYiK6iaMFBPPmoGY1vF39ce4DzCV2K2gH1K",
  "key39": "4VR7wFbgAAKfQGiVP7dLip3edt7ogvid8gJmCrPJ3m6RZSbaZhdsXmaShS1M5xK1JZcWNHQp2SaRfYtUgucyqimT",
  "key40": "66h9eaEe1FTANU1vsMsKMxqDBRHQScENxCcwNPoY9EAgaGzwN4XCMnKbqe1CAXWkyu9iYKU5hpetJxF3HWPHkbVo"
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
