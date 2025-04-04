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
    "3X6QbM77GWmyAY8DHGeuNMf4McsjDU7VbMgBQzQuGnAHWdbmqHNq7p7AdYs1eaXC5BrFU6uXqBsJjt3h4wixrtsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67aSmv2evY34DbTvoEgz6y5YNAjcpzRXaP5UoHM7ELn6VnzanHLYBksu6Zqbu4rHKBZkBagE1uzsLoAaQwXqzQVp",
  "key1": "3LtRrXiaZWQJ5A7K4HthFuMbV6qCuB77htcawbzoJFshkfrxcizguLcuBqtvst91Fk3AfREPsatC7ZfqrV6Ap41W",
  "key2": "2QKPt7UEZxK3HMEGnUspXyxNQQgg8zbAjUxJ9ugtNYWqxBLM3aZmt6WyprsoSavb7UcPEkpzrweVjk2B84fmDyvi",
  "key3": "4qyeU2euQBzKygBq72t9jjkraVRq7E1FsztHKmfWu2VpcRWJX5AyEo8Eb3jFGJnoshnaFDi3e91QSTQ4bvDzp5tq",
  "key4": "4gRLcGZuS4keyLX7AAGS9qXimX7Fz9Dg5fjmqaoHMa2EnmMXAd1fksyUgwn2zHaFsG4P48HHj8NC3wbbEE9kxotW",
  "key5": "Zz3ERiStRtYTXE1cdkgfmqD4AdMyqX9erXppN33zyY363aTHDYN7qxjWSKkerfxq2YQvgE93dGH48o9neai9wqC",
  "key6": "2EpPvM83xBkZf6ZUJEz6u4o4ZmzXFGCH3ZpFQP9vXRoQHwLiQirRaBtZJHwUNkSLFn2noj7NcvLzaA9JpRg4ZTd6",
  "key7": "fCsrjzLoMW6RASUiTvR7oj8Z4ktFXAQtcGvqa8nZyNDoXZG12PBXQWniDqKaa78jfKXe1oGJk1BASefUY8rMN6w",
  "key8": "5awLAoK5K4aRywb1n1K6jYLzzcLbrwPuUUzqnLQ43jDLQ11FSPV3LrioVCZ4YuvoJvdE2f7J3ezfUsTNtwnUfCDc",
  "key9": "Rwj6RE5BUbXUQXKXWBh2rx8vJWKomcerTbvTtmX7qt9xiMthi38f3QMA3S685LxXSwpjRYmaX671pmDjm4Ln6az",
  "key10": "ZKZjdEGT5t7Tbd2WBB2kuGDYfCucqE1zvUry2mmPoMNH2Kxu6c24QuDWBcfj6gHAYpvxdHaPdP9r4gD8UYrcvYo",
  "key11": "5UvQrgUzbNe7KHXuzcHcKsTA9L9pfXMrF3cydFPy3XXU68n4NSQF8zGE3dNkCT9hHMx4wc4LuCmq34nqug9YeTCZ",
  "key12": "2xgHkKEFuAy7VjxAEZWYz2bi3pD4qDg6FWZauRHGyAZx1e4bUNdhLJBuFQGzd6EV7uBw8aEmyd4axiertppPL4oz",
  "key13": "3i51L5d4FxjKu5L5C6osgPW6WAP76vY3hUXuGEvV5Dhgg9htEasyG7FDjbXovBxzBDmgn9HL2uTNE4qTMdViERKo",
  "key14": "393wY5nrFn6ohfwNi6To8k7ju87TDjrBy4CbNTjaFMUnsQ6FarUnisMhnKmvsJeqXr191CSpECKCW7ieiHmcTeZe",
  "key15": "2EcXhFDPHAGt2LUiv5EYLyyjc1aBH3X8Jme8yDaQEr6RzhyNN6T2oaywruGq9uYUEFVefgAVEFgkkuzjYRnzAFuo",
  "key16": "3AygsasAB98QRdSyo2fBg1QqJzcNgpob8AYT6GyNBwmpLNejeyoBP8W79Gt94UsX6DM3azQRzhzzV3QmMqR1drin",
  "key17": "482HjFer3Uxy2NcgpWsREx23AvfRADkBcnfvfNfMdg6aApsvdG7HFihf7ayWxYpZiGX49NchE7HPMyuqCBdj9V4q",
  "key18": "23rMa7NmEdjAn5WsDb28iiiV78vKQ3NwWTm7uLMCTt1TKFP2KD8iBEvV6DSipv6zrzb6fu85esDpn6o1URefRTvX",
  "key19": "53tepJWZqPwKjLWJNt9MqU1CR54Y338ydqq5dy1WMy3DqcRiDKHEbDP3kSW4gWey3gEaDD2inVH8KvFM47NoCTbB",
  "key20": "2yhMx8EjLVCsxvPboLNGkS9F2drieNcCPBrQ9q3gJ2BTEvUiWRvBt7YvNYhZjoHYLqPoWRXdZvyqzdsG49woueVd",
  "key21": "L4GcJyaPCh89DqwYWhUMobqr4GvBB1eAWWiueHKrE824auQtcEAN6Ysx5eCpDSBLzNjANpPm3eJBe8fCcq3vg5x",
  "key22": "XD7MtL5TDtEPb7yQbuN5mWEFVSLmd8LfLuynERjraZC5MWXswafXUy6xPZWv42hbfdkepofoamn9r6NQbvN6k2A",
  "key23": "61Pfx7Dqd8E7pWkPnD8ZJp6qhkoJ8SRKKeASQ8Ex6VHdCwrkySuPiQsXv92uMyHv3EyxmXs9PsCAGfk44E3rK1AF",
  "key24": "5zvVApT1emfKY4THnQFhj5EQSjphP6SSA4uwvb6LQYKEBmHBnkNuuSSHoiXmqmoTzponRSy2KvfdquawJcZgm36t",
  "key25": "2gqHfeGU8hHW7mLnpbs3eVPLDPk8u3ThgCQ2mSsvBednh9xd9j5qHZbrp2M59rxW96krv1ro37J5YfFpDjqDThZ2",
  "key26": "4tBpSvkhsh4tPHmibEidQDzjYkhSG1RA9AHmDaytF6AdeSFP4URXxJomfbARAPT9KL4HgXR31KjBuJ1g6r9ghZm1",
  "key27": "5rhQq2bQ5Jmp56M44et9Vn4kx5oxtD4KBzYuyq36eB7ZDhNNmSU3RSNAhm4Tigbtv5ZS2XcCLtzkpnzSCvmBvxzF",
  "key28": "2AvPuc5dnynCddjEi9pVCPjRZEw8KVRCHY46DVJEwm61iuNHyv8uZoFejqXDUzWCvDpg8DUaL5HFu4CFsT9JPxKH"
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
