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
    "5UJd42ri26idZfvx4qsEPjrWUKskRFMV6dpagqpCL9iDmx6nxzzxva6nJrCy4G36y4wr13tzJU8Q7CWrcMjBB8W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53gwuNb1R9zCCANTZvm9C4hv5yT3tvLHUErFpfvZsQCBLR17e9fdXEFW6MuQaDYYtHquhDKg4ABZ8XxPsLjL8TPa",
  "key1": "3uBrfySGRvq5BFggSuQ87nRyKn41ZSSpRCwMtpJr6gAVZuRy43XzgGkqQd1XmfMEBheACDuvFbTerREq8VAmxywF",
  "key2": "Bc1W83rBxeGDNg6vNntkpCMaLm8v6j3wjBCKaas1mnfEgJA7M4Ro3LdqAGvenjqEBibJHf74APq6G8EkETNKPWu",
  "key3": "2f6A27ARDVk184UNxZ7b6ZeqTFaTrzEHKDyQ5NaEJ5MisaPiJV4PbuFapdqTjLmW5TWoHytNdXARrwXDEREE8b3o",
  "key4": "3YZW7o8CUfLteUaEJJq2euixcp2KABKYVaVtvkRHNqyWoAUSvBc4UNYLp24GAA1WPe53uNdnzJphMzoQqQ7V5CcM",
  "key5": "4dvkCoeNvRem9hPAp3GfEcYQAVEgB93ZRmKpqLFJm7hbR77xwUiuUWkU5mTRgYQoUfUxtW1h7P1zCqct2Y6KnmrG",
  "key6": "3b9j8r4nc335RZUF9ZoJajg2fgBFU5Zk2piX3wjPCng8pKU4DrV71FArimkes4oevDis7RCNtApkspVYWL8Jxzhx",
  "key7": "23Jk4SoN9Kf28CprVLWCvEQjdj2JfbGzLTDyoE9ehBgkxpUbtHoaz73MfPw55JcEQ8LYrrnHQtvQG1QvJ9mCkhdC",
  "key8": "2tuaZkA74ffW4aJBGcB73wgzLGCrC2NVLfJyxR8kRi3TCk9Sb8rwCSCAos8WXh1fMMRvLXib7LqTPDNDwDePfoAh",
  "key9": "2tAuc8TjAH7u8BHrB5LamZoJs4AfbqceQee8uEM8Hc7nyRi8dkdrDk3UxKS33haHeYvoSQWB4G2p6q1s8pAt6JpX",
  "key10": "34xxY7Z6Pk652b9yz3KpN4CFBYTEDYttcTWVBFpJH1rdS4u8iSpu4bfx2CyPAktGVz4QaD4eeRMcGDR7bN7soY2U",
  "key11": "RNMGtU82T5mLhxario8DxdxCT1SphsYwGC1yNmu7dehZaFGuTYMGbLX6ox9TSGnUGX3BL6h5Nyt6ZwgyUpL1Zb2",
  "key12": "BdNKbfkXpuAs2LcpA8GrSsR2cre3k1npCWnQrmMnryeGzaxVJbobjXgbPekA9G4uEZK1VDeHBw3SqWS2XyNcgx9",
  "key13": "5SDZpUFHtdJJrBTAVUMsxpZc5Br1s5ab47hPUzcWYD5ZWB3cpuUQdyYSRsVFRcEp1u8he2cbWoJbPbtQgFKZqSca",
  "key14": "4NChB1kc8KvEqRJjXgdvtZ2z1hruVY6pF1UAdrhQUEznswaBNUyQtVjpjadKBnA2UAGXWr6342Hy5nQiUue38P7w",
  "key15": "3hkwJm1BabpwwBPxgZoqtPzqezvbkqV1KHSpjQAAKAph8SJju67Vqx1vhiSMQLdgmYzRAo4vFqhaUVnb4n9iEXfB",
  "key16": "EaN9g9Vh313FZuZ8atmY47s47jwm4mUuRQf3cammuXQFQ64bFLdvWoJyEp1agHbNzJLBwPtgideh3sHhiva3dcm",
  "key17": "K8e11UX1EoTXe1GEUZEwkVzbYTHUUm9gGAosHATqX8rTDNZg3gqK4Tf7bHxgroyKHvcchQETDc5JgLgadEJy4As",
  "key18": "3bMXtvKqK3RAMf14moCXA2sBY5JJMasxQe6cdXp1cdEVe8pjxz1rB6Fzs5v4BXcewLviKjiNfWEFjdHYuHSpJW9g",
  "key19": "2SKJUag4uPVjn4oeVZdpgC1oehMLQExvDZx46d8EvgjxiC4RDY9TrhpM54yuPoAfrDYLvvGwRyzjRwjEgxWhbXQt",
  "key20": "37M4zsE5rgeMDBdjwHpzycbiJtSnrg3GhmRNMuwsYoNjm1dFKJzLQRBvotUx1eKKZ8SeuMx3Dq62d912qeSijx3J",
  "key21": "4KRAYCpeSmPH5rrydsvAwQgaiVWfDxCzVGvoijMfReHupZMsqJdMtm3YKEXfhus4Ldn4JGqnWV71mMVa3JEnaArD",
  "key22": "4nrAyX2c72ZczHa9kwS8Xzn3PZxsrY2kdtdrGv54MGKPQdCrwZFFtppBb23wmCyyxVwDN2fgdzTNDdZjRi7kRt4T",
  "key23": "21RBgvwZKSrKgG6aC18Ua7du1vmEQ4pQBy4NAJGZLjKzKP925PvV3hs8xiP7aj15yHAHgfRCMDxL69wqxSVjkXTT",
  "key24": "5fhBopqViLQvtJG3Sy1WjEsTHrDMnUrURNZ5LX8HtXHcoUpk3EfRJo3nDgErduTa7GebwktkaxknWrWeXH1C1SWs",
  "key25": "3jGVMJ3zCbTAgBS3xt3YwUMtKx66ybGQmf7Bgbg3mFLDAbnbyu5SqY725rrR8YM71VBd1LMTwzwHWQ1JxvM8T5hH",
  "key26": "56PnxriaQCDgxoPCQkpHDK2HZGUX75M55LQjhSFGVwdscmjd2BxpXwmtsYRFvMSTpMzEN2hjbUeyYZeWx7TuXDdf",
  "key27": "3cAeMACZAKhbHgF8nnXPtJXFhPtCkZmX5F6XL6wM4tkzZUa5VVrKuNCm9p3wbx2vxsPTZn59abFL1MffW9G9fR71",
  "key28": "pHzKFkCPV5MhQwBWfC67eFL2X7M93PbkyDi1SPc8sBjyP5mXwWUahfpvrs7qYzyNgDsnh5pGbmZXHTukDaJTwaz",
  "key29": "aFjnUKSYA5iVw3qiUq5yphHiMmDHwBupCu4mD9uVHSKd84trp7twiwK9MVt3HD43LKA6PiEtqXdCVh3Db36Le1A",
  "key30": "53ZuvhVZUn1asHzYVpFjSgJVZPnQCarcpGRRoLWDAgWoXSerMk3ucVih1nPzgeByZ7uABg826SGAym2oAK6orbpk",
  "key31": "3dbNvDoqihVjctkTpk6jYToSUWUcSL9UyjcCK5A7QaTqN1dYrVtoMJJyzWUV4KYrTFW8DCKp3UNCU9YhzTatw1H6",
  "key32": "5GHGDqQAuDfhiQrE1pe2QxhS3RXkeXwAksGd3Nu3Kr7FwvgJGhNqGmhKsFcu5rACrUbSuFhgMTgVcZqJfNMahGNf",
  "key33": "3a6XCyAEX3X468QTkSpPNtxunnJzE4VDueJap1i9L9EL1zRo9Y5KkUYGKrF2xrW4UjSByRh4pNuUtHW6HFoPnKWV",
  "key34": "2H4YQs4p1PiTtK3zmgr7UivaTV2YWxgG6GpC5GQwjdEsH5w9qCm79LA8UZNrSjNDJ6wG3CyYu3Lvyf3oAAYgtQ2T",
  "key35": "LpRDGB4Yi5V2wKGXGrhQqmn4DSKSJ3X7Tpe4QyQSChrMrZy5pmftNdvfrapkQZrrdE4pwEGyJQcCzXB7nAFzoP6",
  "key36": "Lz1nrz4ktCk9oReLznYTEeyHXU6Kgq21BsdZvMj3tzCUDZMjHyvgN9uwMYuKAptcs3GL6q2eK4hW34A89QXuvQM",
  "key37": "2pX2oTzyNpbL7YCabHoCUhXrFRFTTq6A7LNwNyBP6n9zZXjAGMQGPMeyvAfk2hKwPAeDRhnsu3YzfLoZhszUvuLS",
  "key38": "4pYVuVZdBUU38mMG6YJjLBqEKa4R5scKNEFJWQPj72TqxG3rwBxoiiKUu1wyTCu4A8A92uKp5ys8CDL45atYngyn",
  "key39": "332iBNTVq83ssjRMVCy18ksqpyAUJhjBcoTAUGsKzDnQ35HQV8bNcSLiSgpfD5s7XfsogbgoJCm2qqJ2Z5Xj91ed",
  "key40": "xRnaFjyWYA731u4Sm2JkWUBz5qdEVztJaD2DbmWAHdoBPdq3L9enemRj3T8QouU95tb6H1oQacQJUFnajLGc74Y",
  "key41": "7KwuLnyFVbDUdizigiJWAD8Y8vaRNFH5depq1wzjdyJHJyng8SpUAKfR8azq6KqHJp7hFPM1zLMPiagjdeKjwqb",
  "key42": "2vknH954uLvjADqSRQPU1avzPCLdwzWxycggYDB9xWbeHMGd1HakQUfFcecf2Tkq1xS2BvNRLC2nT5BWzCWWqRqu",
  "key43": "4MQh1o1Bry5yyuwoZHsKvA7RbFr1tKEUa2QzkcUAWQV9NwpEuWp1yK1nnhSubu1kmo4FTXCyxrSeTHZt3oPJymCY",
  "key44": "hcHSvgcgvkLoUZPutSwUEPi1KbJMXcXeb95yGo5tBpvtTUmNwzs5KUxGrjvJ8i5wvC31gkC2ho6yxqWuSfQYRJF",
  "key45": "354h8BQDMTzv2rcCgEmeyfbtsnCfVMcgkUEe39UGiZK5Y9uNDbSQZpYEeQKxjUa4ibqgqyhjxZJDnvV9BSySJvLJ",
  "key46": "5a6EzJpHeccC6fds2snhiDS9YAp43hXSquufmwFhJgh1cEKQzS8cDVw8rTtzaTtDZFQTPwfKcDhd8mdbb5fL1tXd"
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
