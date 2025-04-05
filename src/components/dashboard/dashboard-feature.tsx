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
    "NfF1scReHx9h7vhe5kBmugmDsUDGdGdkSQ8u3QrMQw5gUhvz5zABa3qKHMgqdHsyNEgeNp1fzaeHCFNhfWftMKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i29iMeae5ARCzgY5M6Bi9AA49qfD23K7G52bNF6znqd8CoZDTkf5dYWZZeh3F748poMX6MDt5phTY2nbjoLuEGj",
  "key1": "3pZgcUbFcrmDR8P2fJKdEgptfqYXMexaMzs15ZNfMCJkBYRGPgqt21aXeCRUycNcran4haTMhzkTWukjDE9NUEL2",
  "key2": "3vRZfXsudhScWGLixdnBfpHKesc4LWwPXgqog5vKogiKQgVNByRmoNy5Tj6pHHXFdrCTeEV5Uu8nxN6fDgqpnoEt",
  "key3": "fwQZgekNiT3bDJ4nUimCcPar3rBUBo8ZBi12N89EuoEeBeKyr79GUhztTr8jh7Ln5vpCi563pa9fC98z6WxBWfj",
  "key4": "5McpjE6hBN3Py167LGvui381kCdc1sg8aR1C386ATLv2s7mLKQAyDhdaEvQCucrMcbhZnmkLzQAbbXjVLgzJQ5oM",
  "key5": "5UCHq9tEGHLsfKGi5ajSzViU27TbMsSWq3svgmm8U9s7yc97jHzZ1vx95UmPcZ5X7is7CQoFkGX2ZaMJ2a7D34KL",
  "key6": "5KfHeuF2g6BttkvWwpVMVtC4yYE1jyXf2FyXLEHQzayzJo8TeTT3xzJFoxmsRXDGiFvKcN9NkJyTPtbS9hNkXJq7",
  "key7": "5DPMsYrsZDZa3V4E9mXD9k6scwZJMFsKemyxoTTu2mvM3BTKSZ6QzgdWgaWgCWrrcBVtB8rbKmiDnE5vuTgtLQd7",
  "key8": "rLNWWDiPNTg2Hp7mRNg3hUgMWgVCVrz2P1WYiJamBBG5ivTUFVyQTJkAqb6VCnrbWAyXGna5fjX9AgaqdpPNCV3",
  "key9": "MiC1puFgvTw3CFbqHdSSnoXYsRMCnBfaSFUzWuCzLKVaDsdVwZu4W66hHCdNNYSe3HujSnfY3SzJYZ6xs1PyGsZ",
  "key10": "4NYr8RPRKhzxrxaygE7ewpsZ2pjKwHaM3fZoYRzTov3Pyfc6fQHVfojqB6mxpar7cLsxwF4FnktkLKG4Ncrsg3MK",
  "key11": "4zWiWPmy4ikLzgkUksPpzYXFGH2pvARwCtnVKJaSCgZ1r3bX9eRd4uURD4dhJZMXayFRdNFKWDcieCCVLqhDXk61",
  "key12": "3ghdX7u2KmzVzc3sRezF9vf2TFyPK6LEmRikC4bZRtS9rugf5JqDcoUGp19pGnRiSc4GhagGg6cduDeymXxCaJnr",
  "key13": "5dpPKrfxgc8ZvXRdTGZKMmACGLEcW4xobFd3aQshfXxULhDxvgHNaKYbfpQZUPJiD1LDs4ir958QBQ9rFPvVswPK",
  "key14": "28BwU9kvgoK16zojeg22S27GbSFQ62wg3FMNd9Trkeb44uK6APFtWPHHKMttnNY1AWU3LTGwhNpWym5KhzJTpVko",
  "key15": "PKmJhUbNwXCYH5aq2dvP3a81bsBvnPr3UnaWMdwFwbfEDpzyaimEUQ9fZmVNKsf4r47Kxnhs9PZeY8ep5SrjAwN",
  "key16": "3vuSHeFJCxshMgUoMWAAr9Y92Y8mSqNyzG1JYn5eDdtL6qVVQsg9TSP4PXXNvxnKhREBTNLTKw4WU39tuzw5n3KA",
  "key17": "Yz41MQyJTYYtHAEVKLiRfiuXiUVeULyCi79UiNTZbE4crdLzr2oYFFpmQiqiqYEG8i5enMyJm16mgHTN8pvcNFh",
  "key18": "2DHr6QTWMVczCuLAW1HrChvNt53Fcej6QCcSC9k49Mp6UA31v8HxxF6XifmX8JkaYeziG7ESuuoq6umVKYWHoQR7",
  "key19": "2xzKERVUid425quffrcyfrVNH3PWvJsZFmhYNMe82FXZ8cYJU1n5kCRC58BFkbAArHJwWLLXu5b1qya6apc8ZAeK",
  "key20": "4NorS9gkBUijMCuHuGnNt2EffkKm63mrHrCK19CrLbqPeYRiQnVo7qprqBGTrmaPpQiGvCMFsM9pxTzAtpN5cqPe",
  "key21": "5reB3LKrJ9ZYyVCr9kjgMLR8t147KyKtnjde5jGGY1C9tmF9Rdza6TXyr67MJnyS9XtrmmXwAtW2fsjV1CLMhBW6",
  "key22": "28dZjekpqJkj3aDvAJDM7Sb1U5HjF9VNnBnobmcTyFZFnBwdbKAqffVGoCURzcjgweb8y6tamHdCGC2n5SJx9HGS",
  "key23": "34n2i2NzVQVFbHr4GYKe8WjggbveuHJ719HMykb7DJSfuiFh8NauHjMqEFUnXoJW8SZj8t8RZLrUb4i3qMTwT596",
  "key24": "2wm4Y6PtQQtwUK3Gpa7t85Sm5M7WpLsXiAz1HxDiiyfAe6bk25W9ZbptgbcpdNjg6nfJXs5FNfvfZpf8yeKcLcYf",
  "key25": "5Q1MpQnGfBEkfhMd58oGdqeTwF6aqddyQY9Lk89Gm2w3nvaSo7J2TJYyCunWN5gJaHSsSmHGmUMoJDTPJzs3dztU",
  "key26": "dBofYe7aRZRQvKn7WFykWnU8etCPR2VcHw9pdZZom7vURfN5qKjMCTSJeCRkbnYB6BX8ruH9JYr1avkc5nS9tcB",
  "key27": "2Ba1xX36qhxpZqudjoiXQN6Eq7J1b6WhQGsYwgMdfw4jTbPk9EwLxeeCRPJuWs4X2PHW97rpJ3yEcFdt5pg3EoMA",
  "key28": "rxvDEUrVCc4zkwyeeaA8fGMNjpwJvjFrQBX243EuxN3hLYXEs4xpdB4SA8ZT2uAwNUJwxFt9GU2WjgrLEzcP6Wb",
  "key29": "44un6u6VL6BZjgEqXngjjXPttYyqgHduTmrCUgNjVa1AZUSxbGsKtBcmDsEtaRCPjVBG1GFi5fg3A1xBJ5PBRzi2",
  "key30": "S7EfrErFX6rc3hE4YgrEpZKcCQnP5az8juf1ix6KTC5B9XNobZwdXfefyT9VN8WzyEj4xpvPPtH8tze3aMsNYwN",
  "key31": "1FYz5UvFTqvgU7CLUsnutvBeU4dD5cterRbvYEyBsufjYtUZ37QpvepTTcKkWu19ybM2QDebPMDt5sndDLiqtwU",
  "key32": "5Hac1FuRM5DVKhAeozb2pEp9TNQrwuj7etXDYfPNddLR27BR1h8Cm5BHnwJ5x7s6g4MwdqSE3zmJ6QV9RGqQWqva"
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
