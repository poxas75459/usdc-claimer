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
    "4eGWiPMYQu2Ur3neRuqihhZ6r7BxcjEvha19xGFYgpMaKApxdSv3iME1eY7HhFd4cHvAcMYu6LetXFBgTTaAUUEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pDPY9EVYpA9GvDq65LstahTrc9C5DwnaujxyLAe47UGqZuwvkSVeMh4kC7acNHajeMHgud5cAx8ziWEnGwrAYXj",
  "key1": "4CSNKjV7pAr41ZzhPaMRKTvKtK9Aan8tyUFooLb7apUyeFbV19U24s7sRJib7KiNHReuL1pKGCUNUZMx5MTke1Xe",
  "key2": "5h9grEtrBxXdywEuvzZR9bE2shkKtSVfFQ57DN64fGhhrEiaEHo8tq6MMfb1YYYDRdCdYc8A68aeLyCkhBN3GSJW",
  "key3": "5JkshAyhRZF2hD8fwWHedhfoR4k15oNc8LKiXCoUvv1W9JW6qcxxT64wQ2Ms3DRFxRtsq8QHU1WmUkJsib7R9h8v",
  "key4": "5mujwXEQ3m1z6TJ5cQmrTsvHDwgvwKSjXCVKtGQnB9rJ1e52dGaTeNccCAC8rgQyxeHaMZyWwa1kFUWM8JCs2sQ",
  "key5": "2SdviLaVHtQk6UFKFz8uMoTWiZZG9SzKKunTytvjfzXLirCLtURmDNi7TPwYZqzbScXWvJtGSy3vLPQvNMFnnPbN",
  "key6": "5J9qUWNVJBXig68BVwE3NTY3zX5oVjqPffej6hfpiK1MdgHUDWaYvH7gtUuSmeGnWH698KdSv6xBCA3MzMfGkUWe",
  "key7": "5AXr8afHb3uSL1x84TVVfJMDsPofbqkojpWPMq5JtqMbtKp2BNrbhrrWXt1wMh9pR2Bs1Ww9Q8C8rbHtE9cHdLte",
  "key8": "5WvvXY6PnFtRxcUF8QWYTwpmUhoV6m169uWyZcaV4ZEPCNqYE744yKfpBN1dGDCPXqm8WieMCoVascRtUoQ3fxSu",
  "key9": "4DqPY1KYeMFsfypk4Mu2AxACfcXBjdBVJp9wNdNEmZZyAJ821S5226qv7Nt1mdg98zht3YDEViRkDb2UJ6BxsnRc",
  "key10": "3uUEq6hXXSLzucYQzas9yKDV51C4HpN4CLeKmBeFEd9vdnjiHjy5nBquG8jVeDHYs6YPmHPniBTGZoQh2XpkxFLS",
  "key11": "2auCfffqmqMh4DXnVhDuoHGDLaFw7aQAk4w5fL3Aw6CwFgNrFFhYpvKpYphZewYX3JrYENDbLGuEnTEXXVceDEyt",
  "key12": "3GkfmcbvukFrXCc1pPAsccE4nNxkSzk7XdsCGwn43SwLBrcF65uksTPEA3SEzfR8CA9prgaUQSBQM2TVNpUUfdNQ",
  "key13": "2xZjhMevzFy17f3HB4SVGjSFPsdmnYp2YiNxTRCsuWgz2XQYebQW63nSMgHkvRzKtEyhs1acob5ywud77MJVfCrQ",
  "key14": "5dxEYe5JZkdz1dHxhhLpTS6JoJFAPxfmQabb5pWWqxpaXx9UVkRtxW1Xw5Qv7rkUSGBCTP4Vx4KHR9tBYa1bnAJT",
  "key15": "48WS4LSVAqf4gmgJMZu5jMugRnsVeAtRmKorcUdy4wytJ47Np59Fnmgh18QBmR1fnEZBZNPHzhvhDQGMpC7wKSSg",
  "key16": "ryQpPPceDtkJyT2jUZsQfv1SPZ6pQTWon35N1Z76UdmgDfqhGj9e12cFvM8LQMpssFJs8h27Acx8H3u7REFJtm9",
  "key17": "Fsi1AYqp82MwEQmYTQ7ZDu2bPeWXAwwjeCv1zoTw2socPZfyb9J7gQqQzwKmg5TwE6nXJvcUQG2Hi2uiDdtJpEh",
  "key18": "aowXxU4kEJZwN1LkiKpgx6D3yzrikg9cLmHq2svHTjyda3B8s7cYUuysLWwZqC5v95zoyLjkX8XdYUJ9sSfEiBb",
  "key19": "4JV3XHa9gfKgr7QR5oVLyWaoSC8Rmsbcf4isHBmKyp3fomVu1fPaQcupdMCParmfvSxKESidoieAbVAwMXLPizZo",
  "key20": "5sjBV4BSJnPmYhLAxH2obGHrnW1hyqhfwS9Kmijncr4eX7iXDHrtLVfzX8vvo5gAaG8EDyoxhfhJ9vCuVpxxRWN1",
  "key21": "3tAMehrvizi4VDAWaEQRqtLHASN7puUHrVd19wPkPoiUfKKnWQZZPn913aBnjTUTJmCKekqVvZ2DoZKWbPhJ8qn",
  "key22": "5t1Nv1srwdGhqQBXbiphuASeKHXsfDmYyTB4LjFt79RULyQZxNoWCggLQV3hTEq9M6PJ64SvQj3MyhXTtaSyZfLq",
  "key23": "22ce5jE7PdwBHvfKg7GJuZKWQdrVjMfmMgm8cJqMJpM6Gj4zZhp7cdALE1PEm54GqHEj9ybxxEaRsofqaCHWc2TK",
  "key24": "4SgP9x4dGwwCkCtWPXvPaogz6QEa63hXa534k1ZBHWA5tpJe1KsBLA6q1JRUm4yudtT4saZ2ctsyzCF5nbYqEWeS",
  "key25": "4dNstJC7grf8aVBe3YZ55FMCgiMjRqkLkrfEUkKA8y8ep6YrMqtRHXHB6r2XYZUfRZbg1AwvEHohTP47mtQuXojx",
  "key26": "pq62bz72oFkkVpQcs4mtejb2trFjNnccoYTQeEVV9v6GsRRwBWoS3Tk3xTDjtDYUoUbchhzhPuKsdN1DFQHffQs",
  "key27": "4rg3HDqN6YKf5fMp9N2W47iN3fqZJDf2Ps9UZJffPQresHxGXMP5boPqp63oQSdoh235N1nHntj3WMxhfnLr5ZGr",
  "key28": "28gt83MEHgKLy8mZm47boJAk5cdi3AqVNu3FMjwDeH3UzKUJo24M3wWcykRd2eVB6rA8hAK1mp9Q1e5ndDL8vBfG",
  "key29": "58uWYArDszZR3vtMA4pJdMXvDCH7X88X8PGGoFoHePmUZoL8MQeNycjDtJrpZZLNv2Jtde1W3dCBH7Pb7HzmEyXN",
  "key30": "62QEXPmL2eM1vXovg51nFkUbtfTt6jyxZEFH1ag3xu7Ck98ro9pUR2mdyFa3ZeJ7sFXiLppkhGYQD8PdD6sQrHEg",
  "key31": "45BVQyJC1gYCjcvUB6X3oLRbwTG9JoUUgQ38w4hwx3c57YuSR74X52pKsF3ziUEg6ikX6j3wYrs3MKM2xXHudXy2",
  "key32": "3tXavPqoj8SjK5j41uWPibN1o9cWRndavYC4Bu4X2x5rsA6CZUZC4TzsvQcdEY25bNj8Hi9Adda8KmfaS9mUFz45",
  "key33": "4CjaorAFmhcA66k6jZPwLApXcehaPGGJPJ6MQqTwFSd98T7VrJ4HswHzSQiJ6xucQoa3LQd7aGntEepSaG4x4fj3",
  "key34": "jCygvhwj1rsAMcGz8jMYKSHsJvpF3hz8kzKu3McVCFgLgrSiVFo24DXK7yQedJhpmHD1Uy6Uy3rABMSbweMLYUf",
  "key35": "5UVPBEjVvy7wEJh9fED5cxMggFsy3H6VZrCr8okiviD2B4fdHsBaiZShmhcyYU1xBrQSZdM6Nre6dgwzuwhHpnrG",
  "key36": "4mhue9fH4MMs4sWbnqSPnwXSSaZ3jbeNpSnryzqV1J81ZNMWPVKzhZAuseCiAEngidEumF8jimFNyWxY1Eaf7Jjo",
  "key37": "4R6XwTcWiNZ8bTb79s3BBfoDBnXSg6TwvRJKcd8SeVp5zCrw3EQNpYyA3u63Bhr8J8TmyJmwXHgvSP7HX43M1BPN",
  "key38": "3KStGD9Zuz6p2ugfaYyr7a8iKyTxxfsKQuHHGsWJSD8NUopLGP7iBLERUGF7x2h3NbfUpG5XE1UthCdDXEz6idvN",
  "key39": "51KDcFJWdCf8N1V5gHKnuWTWupb7wQXzUM3hn14bjtmDpY8hhKCpFbTqkDrgN25vu5h7fEWYJX84gAYybEEXYDyT",
  "key40": "5iNNfcCpFvWFfhCT9f63ZYUkStCB9Jhq8wyhWEpzP4Kz6op8rgrxvgPGUzHMEJsmoTQxD6X8ZoE7ubrc8sTkpyyF",
  "key41": "5gZ7BcLTdm6bk2P1cmkSyAPVpW5RJrVLEHFEthjgmGEnJmNguFmA6K8u4uAZSmWWun8WyyAFTGhhStmQ7xVfQKPc",
  "key42": "5dNwjrzWz5bnVNuKUBhhXAkTdPS5gqP7hhBkDUBs3RAnKkQZ3FdSgpouYyAQBJc9UsmvUSDpH7h9XW5q5ZHVS6tB",
  "key43": "3rVHRjhqt5WPCUEXEuunrmSmRLZZPzaZjxAYbnjip94Rx8xmssC6Tic4wT2f1mAcKG4EkLF2ngRGuRcayQgQHt1F",
  "key44": "5NhqAuFHyhDMJRkzur3zDndZT1dr3cFMeZ3Cozf1guictpah3jNTDJyTWnzdYzFQ2QDP4SYxmT6RExh3VZxbTgv7",
  "key45": "eJEs6Dug9aQwNtMnamUFFdaaKd39yF8AKkFc8PasG7hYhkipJRFo45qJgGd8N8rb9iYkBF3YF7QWRpU54Yixqgo",
  "key46": "4J71D8xZWcAsBvWrSC3nkkR17gtfgvVCpeBMsyKywPATe2FtfoLySQiJXGSTEXQZRvQnRko4e4ht3kabfConHmTk",
  "key47": "4XFWNNkoLb5SzQX1uu1bJRppv9s3JPGZKqvndxBTMFRtq1FPqTjcX9ZjwvsES2Wc9deN66tUgPWq1pm2cFYpBNfM",
  "key48": "2mvTsZeYDHkyD6Esaz6UqKuN9bE1DX9PtFbG5q6bns5Cqc7fRXRhiq73a8VNx9AtGV5zJw777ehDckjbpdfZd3V9",
  "key49": "2vGELXM4k7fXVjj3iX291F7ekp7ygQ7o3X17mPM9otQi5yF6APKnSjoZVjBPFc6NtEhksh5ijw6CQKkZMpS4zmBE"
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
