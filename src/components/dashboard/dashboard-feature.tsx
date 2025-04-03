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
    "2Vc45jDu4QFjJ5wtHXwog84B7R5suX3bJSQdjBb8um9TQonjnpxnLMsELPLw4U3dauxTYcpuBF6e7B2rfj7aAU2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wA2dgVjeZ6GnmK3BJ6DupMnLiZ5T9tYKkL1yakaYSiEzMP6JhVTgRQxqnXVV9yWVr8jiuHtEZWyk9ddRTWfqwD7",
  "key1": "2zWVG7cCNiQLKq4CDzVvcy1E51er4kidfJciBfH4sH9hSLwc7XerKWPVn5XTAn3kXSaZKxQeCCnPVzvbbtL8fcTS",
  "key2": "3SZAtiQAMfMVx2uZnVzL29nmQLZmYfuRrRPPnkKKr2Jdr9kWSvKsFazchaQbQhiVzeEqa17SRRvE72huus6hjU6f",
  "key3": "2hdDCTXq9zjhVHgVK15rBFGZM3J9fRvni8bucHiR4VHegf2LwnPAACYZUVjJ2yzWxCvuGifsVTYTpTF5ScRtobMA",
  "key4": "4wQ5vj21bJxHMU8gRwaxSLuAGAWuJjhsN5s7fUwGGDDidMwRteRd3fKNNzch6x9vbRFo364r41VssviGFVknzp3c",
  "key5": "ybnd74ugGQNyBwb9Y4DY7xDSLK23qqdjGS1HFnoiNYieNgudusyoTP9q669kvJvQFVvDVifkAXSjJGEjPk3RhX6",
  "key6": "3bRbbrmpm8RzuS2WRr5aykfH7LdTFpMeG6YCTttFgPRvyMs2QFzupRwU3qztNnmnfBMv9xyNwDvuniioZhvnaN6U",
  "key7": "5oPEktpX1fbAwk3m9vNMYtuLTSQYUBuCGiviJCPbSmpvgtT6vYQ3foHwNQxneC5XiXerqUNYoUJmqqvbZ9xc3E1g",
  "key8": "4z8qGJNnLfwumhRFufK64tnmtxTY4mmdkWP4PcR9yDjeNmGtpYupm8G1vVLpJFSeWfn7aohKm2x1yy3h5TA6vYFJ",
  "key9": "59etqem8SFX3fT448t1ZMQbLmeQtbyKMkfMPZaG7tcosTebVoTHP2zQvSWx83DfjJCmRc21y9ggswhP6qibzaH5b",
  "key10": "K8o6u1JZh2fRmKdpuHHoCyroVQqAgmWyGEXB8NcscjsPJzm3oJ8UxQuoFbTJStMFFLH8943gEVu2HACDEnCDccU",
  "key11": "3XJb12bkjjpSuyvmzv9EGVjR961Dihn4qUQVFhGT1h3qkfaXT5hNLLcPYevijrjDodM4eJrNWWNLhffQwmq9XCBh",
  "key12": "2kxW6eygKFhni35Y44fcBJHgL6EpgEA34UQaWSyofJ8nq25KNrSJGaxWEfE62YMVsAJLvT5jDwVNSBDGxAnrVx2P",
  "key13": "2wNJGAmZRwjHUhGYUPEMhFGT6zrV8uXaTJNf2x93ocVVTbRVa6XQ1VsG7fvjr3ZK3Pxx9GQMFBh1cfzip9D2hKVF",
  "key14": "4iWBub4aRZED2Yzxe4tCWw9EKyzooyvGTQ6N1LbA6t1sUQve3bzQPr9cz3AaLSGSNjU2bHQyLWUHKm9fPfyHEeaF",
  "key15": "45Ycz3AyKKqc9NNe6yJSAKAf7wwKxqifAnvtaM7C5y5LdsUhmLnCK9UPJQF1mvLCvGUgbnyJijLH1D7NY9WMUjDB",
  "key16": "2zszANvwbkGxzWB27eb13o8kfh1RGSfTJaQq3ZMzERHbFDmpZKjo9m5F279YEMCx9xpn2umbhKoF7z4XSAfgX21A",
  "key17": "2TPqHVVGDWJsjXowJo8hvRYZdDFTECKcsNkZHBd6q2XfUP3DMLaaTJzjypg2w2CC2N5LgLCbsiwEV4D4N6MTkGJc",
  "key18": "5VR1J1yrXKQnn6c9phLQcixo52xLDQtMw3mgPUfGwxRRPyz1LREWn6xGQrg9xUveD4z9WecrME3E3S9S2pSqeXBu",
  "key19": "2M4haZ1Vwyj2kNRKMoqZRDq3AoFaf9Ur3xwL1YhsRh4BUJBJzUPCXVNjLYJeaH56MnjpCcRfXLfcwK1jr3kvyLo3",
  "key20": "5kB6FnoDEEvyjEsUmJHNS3SFisUcW5qQcwUCzK3aft6LrEf5JHWPKdNfZVrSbpTLXvjBbgehQ4VjF23QirLDa7Jy",
  "key21": "5bKLQKwi7x8dwYmpbD1PjwMUbMMJtgDgQWkYEv5L5ESkNpXEXBD7SimQsdTzrMAebUBJ9CD4xv1FJWPXA8SnMv6Q",
  "key22": "56MpK59ZDHtF7HJKDAt5jLrRDwuxjYeeX9utYrQLRzwdtjkBsoFTYL7eitmYWdzw1osrjmdkR7aJcb2gJ2EQNV6s",
  "key23": "4bHPKDQJ4qo9YPmSGWH43dNSTv89UhuRAgLe8uGvzzRYDz4LAPsGNorRF8kGUxsBhMddchZZzRtNQhYFfeWBwVnx",
  "key24": "4B5YETUGCYdRbCQ4Mme6P6WQJGSA7F99sxcMz1XmcMwDmdzvpKkzoqNzEjT8dozDorbkQ7FH1TUS2Fnf5v98jPMT",
  "key25": "uXDxxeoEuPhbWNcNWvVBN3z6Qwa7Y9nErS9UD7SdCZ7R5osCFYstLCzGUNzNtcCETFzEXkB1GYsm279aGTxVmQE",
  "key26": "5ji2VAEgmU3ZcsWGQw3U69m3z2mkfUk1Ni48LJqFf19g5CweFXbUVBs9NipAoURZapSPswaBywkerFtGgzm9bDwb",
  "key27": "4STTH8uVpHaAzWnCDKCQLv6BnTMcBY4XgzBd9War9dPSHVUoqBnmCEtav8yENh9XNvneYiy99ca43PCAXavPV9Ap",
  "key28": "fkrDgSi4evdWyPSkSEHk4jhbmwNmG7YsxgzGBchdwbToWZzbipfaR5iPaphFdYB3njyW84usprzCQhdEMAWYGZQ",
  "key29": "KKZcz3WUNgoZLUcPetyFUYuqL6beoB9n7k9REQUGeHhQjXzc43UDv6jTXfV2vx2tixWAg5FVMhfXbsMmo63nyVP",
  "key30": "nTywQt9uQfxVkU6cfHYwc3RauaV4XY7WtCB8zrV6TPseKXMsV1ngojUZ6TzaXnbGr1RkTxE97TS9VRfUJy8fXYU",
  "key31": "AuoqyFZUaFWEjmd9JgTzsDH27tKoy1gEEsMTgByEv9pUFKG3TLoE4B8QU5oGQw68ukGqyNFkMZeNurkQeLU6T9A",
  "key32": "4qRNpttSayZvXMACgr4yMRdPDSyAF7duvsc2W76tTmCJx7d6QUxjGFZaBiv1XnXdUHF3QynNTxQaqmNxqSchr9Ep",
  "key33": "3YpkQ9awdD3N252iKB6rrkHCNMUJFP8LuSZTx36ZbVU1rcEkBqzHtPxUys5KQ3KUS6SGQFKjcsiJFyWAXmB1Bhp5",
  "key34": "2HJeUoMg2yt1K8SSWBFQQVzXWiEsCMaU6xv5VSEcPF73nSx2r75BtGM6qUoFhxVpS54cZUiAfLRCjwP7Jj4kSUYb",
  "key35": "3Xyeyb5jUXJ7Udb3wV4RrdaC38P4ykYC2L252RGci883UchY3Xk1PzvPCgxHvdxhPjXx8yRSwiJDcb1AQ7REru6r",
  "key36": "57FSzNPTaNPPys7UFnPzyMwyLLZNeMzxK1JPKC4Z653vrs4X2J6TwE8Cyb2yWJnPKBXEuL6UN2rx8WUTcUrzrpL7",
  "key37": "4tPuySC8DBLP88WoY8cgNzMTBLhHcFC3Xzet8j89TzH5fn3jxnxtA7G6FNxS3bShysE3w2XTjmVkULbxbB3VZtNn",
  "key38": "ofBA6NLSjA6bN6p3TZk7XXgW2G3Txo1CViiyh4JA9sWsvPvMVioptPtprEFCxwZFATG7aos1DPBySFtrYHRx3Qb"
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
