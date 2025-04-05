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
    "3NMs9ffVpW6W33WNy4sCgfvfAe6iNyf2aBTGgE8MhFVcqX5z3PZN7EHYdzhD2gjkvtDNj66hYaX5cPvj9D8WQdMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiU3wTQz2d2Ytvjqokh3mbVZEtD8SDjZudJ8zyVKbnqAJvonxvAwbckT2o5qPvQhrpC9dxsMJuN9cWxMHaqtBCy",
  "key1": "2wjS8Fzb945eR5duXZ4NusG7MLcNyzvXB5k9SUGbqr2J6vzeKAsTB4xSgpEHnkUppLdFmNqzdCT1u65ndGmuN8C2",
  "key2": "Gb6EHCk4UXZu1ER3zk28vgoZiUn24ihMwtfSwA314LM4L3TX4ovsAFCGPwn225eZv78D72qh612xRSiM4PxNQKu",
  "key3": "21eJMJ1uLPk8nTQ64z4wkH1BwjL1siEeVQhLscdsDK6szfuHsxQfeQG9Z1LFgcD7srG3f2XfLRc21U7CqsapNiF6",
  "key4": "5jTPzKU7HeJgubjWfHjYUixksH6QKmG6kArQN9wwEpAGrCCEhA8TS8inceNVcoVE134SuPj2B5pSzusuFpg4k1qV",
  "key5": "3vu7U9VzPATSx6BM2H8wWQWgFroPBBR9oCa1dWAGTxMQrT2wpvA5oQ33ZX7Suq9XWv3MAz5xg1pZ54VfKJS6xn2s",
  "key6": "56qoMa1JKHrEGLjPWVihWbx5LE66rCiJLKEKucmXYj2XX17NXsGzLx1iqHUvoFJBzDPybadfXNNYgeP1QSPrjer5",
  "key7": "3K6cv8pk4VHYwQhCj7Tay8GqtorSFb6MduXyKeXkQPF93irXySehPPuPuMr546muA8nBdsGwDvC8En5tPjXuygFu",
  "key8": "2LtUhzyTrk92ESKZB11Gi3BrirPZDGDfxs5mjqK5CCP52YHvWuJuo6tkCGxsuEk27v86gjGbcgGzDwtMPXDEzNtr",
  "key9": "gNaAwPaSQa6Rex31abZpH1pNf968Dj6oECDC4ucmNcyWFDpW4NpGstgB5DUXRdLBHrRWSrrBzpwAXnmGbcEWTWQ",
  "key10": "3BtW8sJMrd9Crn1YfphLtpXSZBYMETc2LRx2Tc5QoM3BSBNZa3dQatfqBHoNy3L92BuGDtpRC6J1qH8MzrZe75UQ",
  "key11": "Ka5yWJZbg7uqvU27PBci5hvJWzBv1zVmDPC61mwG8n74noHmZnruo2maLJMqbBRRFGdumkPdWJKe8aYjKPLFXKp",
  "key12": "55QTGqerL6QV7qayfmzW22rfBrggP2Rw8a1pmwJWowosrCr5LQwXoSd6Ww1W9kEJoYt1NC8z93X7DE1NtczTzRd3",
  "key13": "sNHEbYy97nyfDmUDhYqf368mCSTqoV2M8veKBqqWFx4srXP4zZRxVbm1NUQjh5wwuacdHfneq6zA5wEoAR4Ae2D",
  "key14": "4rrQ95VswgiyFPsSgtpcqiQdBRzMjFU2VXEY8BhofFVkHVS3SEmccSHPA7K8Yzx6nHYeXA7zhBh1fH52PUVripKH",
  "key15": "SM68GoVk3HCSS8CaYTe78KTw1xbU2Qv71w2QmcPotHwzDKXdM8PYjaCDxsJEFKXvjZLTQU5CttPvB9dBpVupT19",
  "key16": "3pK1AyTHHLFhctFfMGKaUFQL4umAuzcuRuKtA6E1gSXzpxdTjV53SqaPBs89L54tN43zLd9HYTeBtE4FWvRWixBD",
  "key17": "66yxLQ5Eujye9sKhQTM9LSEJJFM5tYdUzwB7GdxDvNjDf44XXTMVvLgHroVxQBF8GYSUQjGrnoUG4TPgRrznxEm7",
  "key18": "nBgeLfcJHKs1fHdNXrH8HVxksSeCsiokL5CJTFjsmmfSQBEgx1VwjgjCCziBjsRhZpFWYwKVxtSJhfThNvFJWz9",
  "key19": "htFc7HwgdGcx2Sz7bzhr7J8d25eXkmZU69KR8UyqWMenQfiVGnoMf1ycjiv1SRysC2wFzcMyw5CarcqBBqFqY4m",
  "key20": "3H5eVYXA3SvUhW8ufUspL22Lxq4e4oAt7Nmsb9qefq5NGQ9ZT3NV4sqFuUWEGx4bee24c2d5EKsS9kB59iCQXRiL",
  "key21": "2rbcjAYdDWeNzPrYC3FK7ZnnqrV6g48QeTYLPyXjKdcZp9tyUPrfLsouDmwsgD2Qnu7N86fBSVN4n1jrjrGh5oyK",
  "key22": "xjQEJLM21db2exWP3DPYxnpUcw1AGQBBAcGrsPAbCgMXVU153dJesgUe4FYAjnLWm3crmX5j3TtqfiHo1s5oJnm",
  "key23": "4zkcX3vjpvAxUSWRTW48spK4h8Rn5fLktbheufbZk27eW4xbo4AD34KgKjLTsCStH5FdTwa8EVPh6c78ajCRVHxm",
  "key24": "42iyjy1k1KpCC1Kg4bmT8uZqcgqHS8W7usNWDGqczFEELjQRJRt9cR1aLXrDnnxCE5gQqQBLptnDKnR2Et32jikP",
  "key25": "29L1hcutRYETvcyCjYx4vbuC96ZnjBDz1mvdchatuUzfn37p5BjzeZbzwAuMdjzsvvN9aNiqdnaLEycisnjzUHXv",
  "key26": "5iGqujszWVzxKMgkGKiK8u2skveue5PCyWFueWw7vmepW33c3ZsA1oufpttD3VcWHEnVRuznwDLuDxeoDPPiBRbo",
  "key27": "3ZdRXd3iFGwyK7MwgFJB8tBxQrKnoEAub4ZCFSGmEuucZZ6sq6ZtJQRwyJznjE7iVuBpnE4bnCkwaZQ4tPuXJega",
  "key28": "2xaFKeVE7mNiWC7LfMDQdwiQML5H4EN2TdRZVKS1HUq8Ed1SjDmWwEDRXf9emNLR2sogmHHtqYHxLkasUU7ArWeC",
  "key29": "2H2UWCfUdXZr82Jup4SnYucE7KhZwgebDgSL8qdaMGMpfmBx3yysEqhhGyDAznZmz7sQCBVFHi485G4Tf9KHXRKf",
  "key30": "4FaVG8kLRExDvKmL4Nu9nsjeTtpKqHMo4Xc3xvVNiQWCg73MmiQf2q4dfRdiAGkDnpXRFoxYWe1iEmQppf2zM8Qk",
  "key31": "5GRyPCtrrxdewBEffep68kBdapnWKV438U7mYSrC2SjqZbq8bbZnujGBcs9sqdwtPLPY9baCpUgFQvUKNLjg8QtL",
  "key32": "22pk9D8A79yJL8oVdHEMQPKC2p4hrTynKj5eM9bwx6GmVVUJDpnTPgYFzXPcYrKnD1gt1qnGkVt9UGYQdrRD84dW",
  "key33": "5nQUTw1K6JvawXeL1sdFotxEMXJy3hE2LzTepBr5MvvTbwtSe7s6gn6PyfYJgSTZkCTyhaGPu6Btds9tu6wRJhC4",
  "key34": "97YGzqWVxFdgqNMvGrFbPaGfZNsBpbyRtDQVFGeWhY6ywjE2QCADft2tWMLCD93g9uwL9mjDpWhTxHmhwEdZ8sJ",
  "key35": "2q2tzuMbz7sV9hGzs5hsuFnam85QJzb8P9931MjZ68nQXetYaG9YYRmW7HzvNsDrgwHKA1NkdTEdmGrch8BnXZc7",
  "key36": "2r7tVxWk2Vf2hE4z7fq1gHGEdqagL3oajCqNiZJQeNPdkQWseKxLxcJbuxHT9eNZjRfZLSxKW4Bj6rvai9rLFBk6",
  "key37": "2jt73CFopiLq7zFLXi9yB5a93Q8wr67ADg9rbwLdWwxYfPALii4TPRnGwCXq3gRY2WGFL17wDWwL4ZHtrgKgrVDm",
  "key38": "3h42boPjSK2xUy4AEtFpuKdESMBY3QVTB3LXztvCUk431cveK4d6H9BzYdd9VdKmapAgkzxFQ2wVZmf7vMzKtrcS",
  "key39": "5bBRQ3zqedmRPG7PziCHqf6xqQQav4BpyytDLCL4eZLTzargDTws1bT6YL4kB7Sz56Yk6cJ5f3GfxTj8E5Sgrv8W",
  "key40": "2hWqomHcU8EWSRrdsYt8NkDta5Nt1kXFyceyffAg4o44988pWf689frN9iyXVqnXiwd1fWvs8JEcPYGTLiEGKfJg",
  "key41": "39Q3NSnPLar7Ho6wgXxbSCANwxmTgtmgmHmGTowgLWMC9YVCrRVx1h8T3P9d1qA2exccVdvjtHjjdce37MWUht4a",
  "key42": "5HCRTpK4mXQDkBubmCdFU3EaHaCGpcbUuMxP3Mezdkt5cj4quYU43VynHwCj2KYdNsEogmdeC6kAkJE64pyWZWhd",
  "key43": "62gZzgTup1gJZyv9AKYCA3gsZcBJWV5dRdniPQZSN6HJvZCMmL76vvmoepzTUFPcgAjZcjJVYxcYX3V2wXyFC8au",
  "key44": "3FPA9Seoz8Kzey3tsiYRc5e3jLUcdmHVj4SdPPYEZ7x1FiUhi74mWkiitzdr6wrstsmsVE2x5Zc4GMh8J1y6Fwpa",
  "key45": "KA62YSRK2Cu5ZBGtV3mjFttXMUczyMzV16aL4tXi6fSDYjkshameHTNdHndtX15au1tBZiJGkVyeL64rHq9Uzsz",
  "key46": "2bkX1k29wACaeSRU7mjcjxcekKYzSYgMf8A4WoQ98DQixmRSz8v7EBCxrLf51orDTBJgyf8vduLFo4uZutvDjKXQ",
  "key47": "45FYuNEZNsuVwaN6rTgDtHoffGABPJfV1G9BJqih2Meu2h5Tdk7nEu7zbi1jtaMbyUjmyB6YatZ2K34MtXrX2kV",
  "key48": "47snPEXk8G7ZF3LGGiAUWLSZF6LV6j1669R9Qn7AWAwJ4D342aDJmhreop39QEmRvWCV3G2VzBhD83WHQ5RhBRpX",
  "key49": "5noTaeGqhQ6qhucwnLHh1J47dV5BYLBajCxLzAU3qRcyP5s2RwZMHVdJYgoGVgQM2s63fvD8uMWQAyuJKpgvTwFw"
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
