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
    "3i5bgaZLeiYSQXmruQkWVhgf3EXqa8byKByzBrPHjbynKSHo8teLvKwKVgfwkWw8KyQTBZkYg7V1iZeRfYfQig4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXwQyjNt5jGxbh5fiqBRZ7ag7E7Z2LYY4zbPdrnK3qYg8ze1NgMyEY9KBTg5MUJYK4HoznR8mP3HPfFMezoUD3f",
  "key1": "4PTtBHjQZXabwNw28JJhRv5WA3vnECwtMKwC2eBj77jUUrg8eWMGq4HZfiJEVekEzeBWuQr46gFM3Rkw17MmR7we",
  "key2": "4c1tCgBY7UZUxsdGfgYbbfdE33aL9kpBVZ21BUbfUofXJfmPjkdN8DPSAgvURkB5QiWyWe6Nt4gvUWUDi5p8p5gc",
  "key3": "3Qd1Qz4gDybxyaMxhtpTJkbXN9RFUJfTbyEvHWSLeepLfCHpho5SEdvKqTpYwVCfbJGq9QMCMEKv2dEkHkcbWtPH",
  "key4": "4YYQcFkLaHFQbBEfB4NHopzBKcvJZUwMV8k7NJjF1waGifkbbBtYZQ53U86CbrJgCRjAPncESfprrpPby4aUfk7",
  "key5": "5imLqjzi1sGc5sgoo6wvnk3KyqAMrUdXVvuh9opaU63Cf6dRqHvYs6DG9ePZFj13TECh7sMzWAArRiRMRU9xW3tG",
  "key6": "5Qs71yEcWG6gjHfifnh1nPXRtGrVajvdNPofbb2qxPu4FXjJPDsSfGrmoyq8e98nXZMUJF1a5zJC4u8dxZ7ZJzgE",
  "key7": "3UXJdAsSmo4Qs7onikvBnr6r9mZD8vH9YaNFiPuvJo7xjhi7SCHibHipuuLyDbvkCQbBxBuD9ch7szMXVg1Hgz8a",
  "key8": "4kESYKCwvYq9ehtRkhNSuunYzhjjnXdvLsrBwAWXEP88X5XMYvEPNyjBde8gHNQfcXHHTCahA5s1B8gA3gmFekL2",
  "key9": "4XPBE9qH5Rt58KAqc44Q6wdLTzddrRedpAHdRUpfXBKNX9UBUGhpzguinivG6xBZZnQhDXrdguWmqA2kTJY7w8Cn",
  "key10": "4HkrbqXtpgA6Bg7sfZnRVv7QQJ9G8hUkerZuJsh9xxJHPZE5uRA74mXtXtThjmQbkfPb7k4AvDgoGQoy94mQ2hof",
  "key11": "51GJjgASoVcVDsBgq9ngvzu5UFS3z9xUcSNQo44CyoMB4D2nShLcLYCcRTMEsvhxesiZvuXmV1ZvshCdtfu9Vv63",
  "key12": "2VJT1Wkab6xFjcKuqxUFMNRaAsFH5Gv8P8rfrc53NkLEDbErrdQRoNY2jDodYhRfshg21p8DUHaAH3cxD5Pspem9",
  "key13": "2uHfkG15THxKAkjyzMFH7tJriVB1ys7QNYGNLFmVap5fcP4in1cyUuE2ma7dTEG8kL776ujbk13QSNSMDLdTXVvz",
  "key14": "37eQnEb3pGm8zz4YwmRayNMp4u8WoREuVFReSK12wBzgVbu6RCrqKYqqDHbDUyHQruVpUeDRQSSSZ9nz58qtkweB",
  "key15": "5ktrgW5WW47tYMhkxbRzvqr4n3iEW5jgSMWcSdXWqDQat23Guxen9kZph3wgjQJbpLzP6pHwaSbMbn5PWysp5G4E",
  "key16": "5xqzkgA1vAUZgMnmhUqDJp62FRTijtKTdwL5G7RkdDG8jQ5aQeaQzPNXw55kjDjYBAtQPXcDwxseyJ8y7WdPPpzw",
  "key17": "3bdn6BkCe2RenKAux8EYvwTkAv2hnL3NTMrbV6QKrEusCj8j95Da5ba5eihFH9quukR6EAFsyBtvKXbwg97wx6R5",
  "key18": "31BYwgGDcEYYDoPQArPFazoojN98RX4CV7Rr8LMPR21NbDDtFyev1NR9pE4SHtyPZVjddZkqGGLsvpHjUDkuhHPB",
  "key19": "4sYqSjBr6b9q9DWNEm1NEWMBaQYaZSdcaz9SQzW6xmpYhc5aWeqmGXhnUc3GTciptZkNnWkYC46y2ewWTpfVJtGP",
  "key20": "2PKfhLDsQcUDbPgNYMJVktZuRENWxUxBQrNc7WsC8WyHqfsuoLRRM9iLuYhkzE8pn4i3gm5yvkUhiXAiwrJxu3rc",
  "key21": "24XKxRP2W2wApkyJFhmNj9vGcnZdN1m3BMUSNLixLwXVKGL5PpyU4HnBxRTWwT8FbVFBetmwYhQsaiaWhGzMwbwx",
  "key22": "XUKGopqYc8oChcBr9MpmfAGQRgaNkVwyVtdXD5TTduKTnyEWMbJZ1qSseKLSGeuo8PamQpKb4bG8q9CyvgaKzv3",
  "key23": "2LTHepMs2BS6SymbFKGMYHvuf1YtSuMfVtZxs79oS9JTkQA7F2Buj4ziBpDv8EdRJLDnfozrnmgjoZKJLX2gENuZ",
  "key24": "a1FVPaUuYmuBq9oG8Qe8DNaR6Tzixxjx6g3nYgyhJm8PQXwPZyYZrfFhQAoWBm5b7kLLMCNphZ1MbZPECGicNnp",
  "key25": "2YKVeqD2GsZ6KxGua9eFJNbFEW17vhtdU6AW1isg8Vt6AAspqAbpjghidzjf7CfhMiYiaoARrZDUzyLKJUgLQDVp",
  "key26": "2i5kTLxkdJd9Xuh4vC1XwVPoyfSKL8griSseUoDcKHunBFmvKM8u5rvMLnFYhSyAbDWK5yP9ifeZY4dLcsmetRdm",
  "key27": "aeWrdWZCWtffqWhtnokSB7MopyUDjFdGXnSUrYkctcBkkkGTRZYRdw2V2YtBc5MrsAsub3EqS15swifeYVAh2W6",
  "key28": "3u8x9Upeh7oWN4SYNBvPpCdShZgr4Eod36g2DJo8WaF6DJddMtKX9GAn64PeU2gTttkdLTHdgqoDZwcUNHtu68aA",
  "key29": "4sxNDtkWeEKoPQLRqyv2UwyNFaN7oKsroFXTT8SCnGQLvQ5E8xdpTA91y7kKfWZA899WnyCL4x4mVug9gueJFK8t",
  "key30": "5jSDYEGH7GcFku15JtTwbEMTgVUTXzE37cmZkzx8PsonbevWpVBY199JmVRDFS1pogfcqSCofdmSFUbddcyxhuy6",
  "key31": "4LRqfT8uQ4j8Wai5xUEdFph31UU8P82bCJnX364o7ocKuGTsAk5Pw8B92gwextWHqZBVzsVeNmeNQaGcXZSfRvWT",
  "key32": "vxLu4uEPfkesEQqepi6geST4bnzXnXq9NRmarrFzF8nmahaWHioUriva8FvJ6qpmgvChJwPHBBAd2gkCGr4MPeW",
  "key33": "4jfD3DpcP8egg1Qq4ij2KhWCLz3NDJFrFVioRFdYkYEWoNC1dpokCfeA9GJJ7noGgZAntRXP2drd6FxwaE458ZAj",
  "key34": "22xy6b279ycpaEa3zXzZLpTSwQFmrWXy3EyZr18J8R8xkYUdCiyL6PXQHLwAPTSgfhww3KrAip8W3GXEp3aKfVcH",
  "key35": "4Z8CRDmWgadEFhaNcv3A87ehjTamFFzbzjm6NJxC562n27RtrWuHHdjDT6UFdT12k2Z1i3AeGWq3hsgumsDp7TSb",
  "key36": "3mAUwJFXtm7rNzyWikdfpT6ApbZEgpNnBkAPxxj8MnMYbUQYqUieVte2BaExY5GZUz3wQGsTw1bU8Q5z9grC1pLb",
  "key37": "3BbGp12bxXkWYi1J7LmHoYxbaiLDZBDfdzMiu4QP6ZhxwmTM5gPBfR365vii4X19nhvRuPWGF9opEEA25LHVoYuJ",
  "key38": "22GqmEKvyH8myAgzYwSErMZPT74mPsyBD76bwfr29L8CJXPGTztYp7SyH13yP3t7FRkwGpU6nXpubMXE5edPiXPw",
  "key39": "2u37B322QYmsfDuyaxEPwN5Le4q3jicna2d6eN6JMn3tZ8jZW5cFrnA3RtiUm5DSa5rVKeE32ADWqhSWnhp2w3C9"
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
