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
    "2N64hMquboDDYfKRk1D9YenveiwXMu8QN2RySAjaabvVPrUgJ9CUq1d3rsnM1XbqrZkABLoWr6UkUd7qSswvgoZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53iHz2beufphpMWTTBNfoiikkKM9r1nQp26ktiTCoBg5ULtTGQVsZX3tBPeVSsHbQ3WjWncdZP44WUzbW8ppRGj6",
  "key1": "3Hvu8NbQKkssg5QCxXXHYjUt4j7ouTa3xNmV2VSHLXZ33Uo9muk3TbKXuJe14Dd3g48uUeYwTYEj3G4M92PFtSse",
  "key2": "3h9QyN5aE3aY4vvZKSktrBP1oiaCCjM94yK2wiGYRhe4doHkg3iQkDb3P3HLkyUATC23PGrS4gsmyJxkLidnscuU",
  "key3": "2u5fFonqi291XcFgewjvd6def8xKxSmL47q7FB4ZjDSvHwZhMaCYogeH8qthBT1iyjoGRFAjzxfDMhJaNQZNfJem",
  "key4": "3jjtKB6THMELpcDBrSmV2M6FiZfBaRb5qVVtqGoTHgkmfkjDW6SzQ1pNHwcQKPYEAmbiBqyJMwBaPRpE41jH6DHi",
  "key5": "4KqgqpHrTZD7wMcBmkefnkWpuoKvakfa1UzPz5EecLogYJm1JAmgGvmqnagDAk5REJzWimhdmbuyCcH8Bduac6uk",
  "key6": "2SQgJo196e6FuqUgPA8f6HViW6g1R3cRFjeWXB9orktz4CabqbTGbGUtYY156XS79SM7e7M7VBysJtyCvbtWtePG",
  "key7": "EKVBvNsP6DXdi4KQqDDyUjZLm32SZYo5BKY8yFUfb37DyFez2vteRXZiEd6jxnqAaBDdfNxoWqbA4iT7reTE7yf",
  "key8": "4pYY8DzfN6viLr8x4ytGRyMZ3r478Dcc11oV57PtDdo3xk4EUNx5ggEsLdU74Jh9ZAvjsrNmmakw3MicQAUPCJmM",
  "key9": "5n8o6rqAMH53meDmDaGpN8WiMwskN6rN4RBpuCUAGQbEnhSCCfFFmkk7zMJDaWNsefnuP3NGHtFFoUwo9Dg7jLen",
  "key10": "4zMJoTVbRv8fQwaTaejSJ3DvishxvbTjhpfossseMgSiqQeFZJ4Ch7aT1JoQ7MKboJfqgMc2n3bJhHjtij4iMCVk",
  "key11": "1W8gQav8k8dQHoBMBGvpHhSSMmrVH5tkHkGNRNYb5SStCYwdeWPq3GSPWUDaZDAW3443KSjzUnMjSgLh37V829L",
  "key12": "WG2tmwcdaYpU9b7EFNRNwutRQiAYMEUazZaEMbF5dhQerVeq8RWTkoLy6yk14DpWewtTXtC54LY33FUz1a2vbqM",
  "key13": "HpAbgWAwxf1GJJHa2fqjVDjfxc4KS9ugdN53eRMRH4z7EuL8Cm4k4ukfpKfz5ipL5TNWrnRDZKrnkbZngKPqDsW",
  "key14": "361JnxYpnuPk5KpWLwppNCaGqkDHixoWcZuAKJkFu1yc1ZQc5CBKkpfzG7z1FGWyQMax7DHrYskLxPt9RgFY5JCu",
  "key15": "GeChvXySAhrf45r3SHEs8e5xmMSByYcBbhFjGLR1VY4kyfSZ7p4NEkQe3jSpfNbmpUmcBw4CEg2A5zaUBisS6rR",
  "key16": "5ddz44vCaKYjdRuGnkra8CjxNQoZEd2vk7qSwuCczzCwdgzE55Y7wzHxN99ESv59X6nA8c4kbnGHkXNihLxQz1hM",
  "key17": "4KGw1V6exYxxtbvV6F4XnWVqCtiwopspLR5GJ45E6pjQo37v1cb9nmku9uRSmVcGSbDMsXXfQbe2rcBEiiyJws8P",
  "key18": "9DXxB1btK9Eutfd3eTxA8fmf47m1TTWrMcZMSPGwKtARxDAR3XCUZnfhUfCzGD5P5C9A6h2TcvHMctexWGMjaCW",
  "key19": "wRzqJUKxXKYKpzAEtyxDycryVkwL8vBdiTMHkraoUVVcj594N6WgmtxhpSFeku1HJR2bbsvepoKUVKdz58Qeeb1",
  "key20": "4z3Fr8gU52pyNEJm8Kjj5GohBKg1gAb5DFPwZo4RiNVZHL58v36Gus6UAFqby8dwsFX6kqYjB7XK65WpTZ6w3vdi",
  "key21": "Mcd48ub1vsH4BoXnTcFWtXf9KkWyTKySvjLxmX1hCCbSjpbNPM1eFz9tMpMNxCx59dP8rjPizGucxGsee7wiHKg",
  "key22": "2Jn84DFLnxkcbhcvNG4nzdaGYfT5g1XTdqF9kEqp16CNMij6gAwmsGKFd19qjyctUN9FhsqVfjapih9HzzUzrRDM",
  "key23": "22st5Yo951DxnVpunZ1rGDmJKKcRjgEDj9dEXNqo5TXobcEfevudPwvTGotJ5BkCzZsxs8DuXzRTSYQKXS9hfdXv",
  "key24": "2faRySRHGasTixnSy18Rh3Nede7NrMFrZksz1htUCqaEqCBKczmFxDCyhcThADhe8DgWYWiBWe6bfncB5GcWP2ab",
  "key25": "TjDvFKETGatdkj4oVgVyAQ39SfmaMCuyLS6JG11UJG5YcxD3dh19cSSeSfJCbWvCm5k9ncpA8x4bdL7JKFqAEJ4",
  "key26": "Qx2ZMgRBCwCHuMQggnAyeMi9FNTC4qBfzX2N6aiBifPGBuu1YYbnfoUyXKNxdyjgMgZcvAKaM4enUDPzuATMEqr",
  "key27": "3SAMJWq3CcdCdkmaznmikznoLzxUGCxpUpy1KdmFW18tkSVc4gYTTrtcT3srrZpLKa7tBRhmL7BABz3JqtTi6z2y",
  "key28": "2nmEAMmp4NLPTM8xgLxYTfp2hZ2BbeupZvYRBEUfMVAHhY8YWeGSADnYJhCBdxpz1fNfD474oyqZzDeSxznjNgVJ",
  "key29": "3TLZdrn7BT5av9mwosKb1UbnsiAd4G2U8VptQRCMm4WJtXZfNgAVefTVSu2Qd3ccMK6fRf9EVYwoA6VDDtNPNwVR",
  "key30": "72zprya5Ziy7SPQb1bKY26zTNugNvYqkU1QGX5pgodCriEVjVsgBvcEucqk4qbou1qaRcbsVrZLtT5ET7NALUCp",
  "key31": "5Ypr5UyVjWg2LTbEmmws6HCDN4TASi7ECXuK9QNDTqQFPt2hEtDfwvKVdpJCqQMykdA9Y1tC7xeKrbBTjdUuMTif",
  "key32": "3pZ9jkwuzyvhRhhK93S58cE8fXKycSHaXp4Cscd2MaoAoaLWT1W8K5W9s9KBQmLkDErZGsvuYJD5MLu4S6HymXye",
  "key33": "4BT9mFvLcHGYh19dQZWzT26mF36As9FuU916LiYHtDqD9xYCPdfGApsXT5cBQ5nPoyF1azamJ6spHetgYeZt7SNg",
  "key34": "5F6WMzH5D6RdFpNyhQebL6iphYaoi8JEbZwHPwZwnwJ5LAXBZKnTgZtcom3968AU55c1R9L8qXJdpSQPAXmHfA3T",
  "key35": "3cVjNqtvNSxyysLkwBHFB3VdAbTb5CekGGVvK5kZ4ngP2g31tZXLMbmS15jzDYkJDWrUVxjYCaMcVWBFv2pzX6dU",
  "key36": "4t7N7v1wWHvq8VxVXhWYkE3HFdsaRUjMujuZZ3Rony9avKT9F1bhTzQYS7hTE4k2jm31K3dgUFG8WrsCLCcc6cuu",
  "key37": "4vKLYvVWcD5MQdwYCEqFVzTBXH9eEkpL29Zq7T1zAhBaKD49QVpnBEQSPddGVNQ3nriCw5L866MrK81L7UZauTuS",
  "key38": "29m7LLhJYvmazjA76dMxypwTUPhx4KZfw4iN46k5mNTgk1JT5Med8nemYtKK7Yr6G4XmDUFDvHekK4gS7JJgnqUm",
  "key39": "5NZP3A62J1EjWb1KB7cp8EXVTbvUaShgb9mpXw9q7qmZKAE8dhA3sPy1h6FUSNQEpNP3ToGe7ZVgTHd1vwTrdidj",
  "key40": "33VXP7whg8449dy7JJCVPVXhKL2V3fzSmtby4YTxrstmQqZNnjRJQDTxA3ZunBV4yHyJYwT3tRgAk3i2ENAbPzs",
  "key41": "UDjevDGBRrNomQjaqXBVn4AmrxUog7t5XQ9dz1fALQvzHiTBssmPqG3w1mHmnWnf5HuuwZ77SrTG4Wpi7eBriJE",
  "key42": "WjG8FBdAHXvMaujMgqLCQ8tNQ669P1vKwJ7DqLvh72QHbN8zzcCzUQgtE93eBjtHgmRxBwGpztCKvzjXJU1fmVL",
  "key43": "3EPf7NxrSoAWCiGiL3Csbmy6WwZEohtvicsPeF56opqBdPay8xX7Mb2krAhjqBnh6YrVAhygR6JaLJYfNxT62bLt",
  "key44": "2jkDrMmeAF1Dpqr6tsmK5hxhAAfoVysVYvTQTCiZEiHtcA4V1fjrW8Jm3ZhQo4ZKC2qrxJNs3TYbZUXj3btiyPjc",
  "key45": "4DKmZyAEXH7a6s1Ky7sRm52WEsLtToNdie1xACiXXX2BQEQveTNge9HUezs3XtJM94KXp6XMbjQcTPPtyxZgwbmE",
  "key46": "5RDUHyADJy9q2Wz4f7y1mAi5BaaKao3YizjCUKiTovJeAzegwqDXJip36HXBndbU8gDQyGofU4q2yZ6rqKeLEVTH",
  "key47": "543RDG4ks3vz9968oQ6HYS1gWAeGdy1mcWuMFamPaxHJ3vAQoWRe5X22DUERqqADhPNfZ5TH3DRmpzmqADJbcRU7",
  "key48": "3UqnvQB9vEtAU48CyDgMUxHNAuWvporUhwDb2Wc1nQRSvSn2zrwszLyGk6S7gNVNoWbYgA8oqepnnqV9YSvVvxJB",
  "key49": "5xnT8NzhLt3wNEybViVHJoFMvXwoaZoX65fGareK7wjmN4eJBP6kTABNgLsCpuiJe6KAYPL1pD871QZJFUknPc76"
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
