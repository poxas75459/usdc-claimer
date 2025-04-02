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
    "3TrB4AK2y8zWT5hhUHZDamDs5GkmSXcJLQeJJJqZvXp6ZEguGQptqjt53rweRH1rnmS73TNRK1Ja76ueABK5E2Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ms799aw5bPgtYTbWKYYF5iRArGAoi2Tmv2Czzbrj9n9dGERN1brFjiyXy7oF9n6YmSN2QcMmrmVY9QTYU78UGdc",
  "key1": "5VQJVBEkCbVbADqrTJXi2huvXeXu4XBgE39HZvqsvryKz6MZziqo4o8ReVXuY62swgy2CiKaiQdEC1HN4pRhyQ7J",
  "key2": "3Gja75iPwKYCAgekY63zVXFK1MzMi68D8Cw3dTEEtQ994sM2Z1zN5aVg6EEgwD5PChw2mk4Furk7hzSKGsyawb6H",
  "key3": "XdPZv7r7Wm8CYPasiKhASGqWYMcEK5rZqBkUekJxwbGqdDqd8v4Cj3RdW64mvJciTKxaGSArqrapzs9Pypjnoqh",
  "key4": "4aGZtUqAdYHezUn97e98Qf516Mh4wsKgv4ff8rW3DhZc2gdMn9k2QunL2tgRB9zCbmaS4qfzvBVq9RUZREhmDkJM",
  "key5": "NRK3JGE1CDseZbtaCTkzEauWsn9hReYTzZ9fKjim5a5z6GRtdd75JVPXeeQ838AptfDitVXJf6LWv2bX5YwBGun",
  "key6": "2ZNQn7t4d3Lphc7fN2nSMDfhUvETFSqWTyem6ApjCfoUDhyMxihhUqNgKbVjpD2nexBf1BsLV9ohjmJePNUMBrnp",
  "key7": "5WNZBtKLzU6GAGbnX8zgR9eWAvK3Xrdy7yRzAxWiVazXm3aT5JLH7f7joippWZWveZJQFGNtthR82UopLDjxNcgj",
  "key8": "5ZkYkJgHuyFQ3NvcizpGtBEmXLDreTd53h3kyhL7chd6RfqG3EepRrtkmPRjWz2FDmdGGRCuBCAiLZWiVJaX83ue",
  "key9": "bu41GqDEtw5uLhLgHTY5xZy6Td9zUBex2nTav37zRA2DovmDZJAFmMnuvRrnkKKrH9QNdXB4JEGm5y3BJbnbYuG",
  "key10": "uuMLHVbcw6LAEvrbZdfWSN9D5L1roKnuKECdoFzfD2UX3f8PPQdoRZF9csQVQYsaGFcpE2gwKtaP4qA2kVv7szr",
  "key11": "4N36HEhviDHVYwTYYcJmRgZ2YCSQ6rgJWRKoWXAusC3D67pVLzxFu1kkV3odKTz2Kfu4HUkPqRq6FWMXAxVsA2AB",
  "key12": "3SLXy7DxdMyunUX1FYSP1bjbtBp3bm228Me72MNNY6Dkr2bj6YPJUyDmHFsBrWwoRbXbqS839qHY3TNEXZ2kd7s",
  "key13": "2mHTa9RSjnWHmiWoZhudGWio6LEoyVjbhb49jPLZMGEcrgkTt7fyDF6Zige7D3fnTw4uvydkKsmoU725uDDSJxLr",
  "key14": "kt6s5SB99qA22iPZUMSqWv5iC9vS2VqMTijJCdEPL1JwXkB2NNLQ8HH1UX3TMNDvWRWrDA81ETapoZBN4Ltp9XQ",
  "key15": "3QV7xYMJRiptyByipneKUPTqGM7orzzuCoKo2Hr9SpqpUFfh51xzQPruh9tfU9C4SY8SicfVvL5Q4VYx2DUJFhDm",
  "key16": "8fRXXxxeGe8BZksEx9F6hFTrQmVUg2DWYtAbu8Vb6tq7pcCVmrgRUSJyDsRhBCKM6BYtfnacWWBRN2VLSC91196",
  "key17": "52CjAkwb6bx7f1JUjtoxo7MsbfY9PAdoufMKJMKkE1skagkAHmmEeZa4CZJWMDCktYwGN1Xed4oZSSjgSfVbwLYu",
  "key18": "t9hXP6PJmhs54Re2X8woQFepVYT77T59ymp8X7e75irr54MRouWMm9oXLEnK12Hqr1wCQg1D96EQwn2jTFgn7UC",
  "key19": "2qGBGUzgKj2g7oL1os3Z34pkfZZQqj7fKMYTXmkWMbVn5jvz7AEfvubFndNvVokzVSs4RCM6M123Bcya44qkPPjg",
  "key20": "4AmvDvSM7kY9atcKDnrFHyFA7jsW5DxfiobURSMc9zDt17b7SrA3YngFMvtJKFvCTW8mQyBoC4cZhaAwXG2933Ay",
  "key21": "4GKW7ntfGBqxmygGSZbeneaWj8gTocqch6nbQn5Erk2ceGmWoLkRPjxzejgszPbfVu2fYQmncirSPEYi7ysGTxK6",
  "key22": "8G2DExwQjBoKELvS2fK8G8r78xgZx4gTUXUKj1Lr32tUrK1MvWLWonuFdyLbpuntKQTHqUAJmZk4ys6EybtDv4n",
  "key23": "2jMRRkRxvivURgoCZQSzfSS95dgNFGVFTV5D65H1KyEGasUVdnhzUDetwAW9fb6iWWSY1atoY2htWXZyKHiBiYBy",
  "key24": "2bjU5Lo3ev9yff86RwnuZY894qxwBKDjSuAouGr3Ly5BjDn5eyvQhMxVktpqyijNWsUMkUBeYrakkrZmyBVkMSYi",
  "key25": "5WPER92KRTw2MomJCZgP6awNa7i8g2GYpMsS1huA74G1jiTRn2xfoWsUCrHWUkzNRq3SYf245YBwYniBESzw5mpJ",
  "key26": "2TqLyb6ezaJXftagtutUf2R8ZBwKwgznXkGJLnvSBjw4QuK794HfTQJvrNzSNiwh49uW8nKN4N9BJHFo7ZvKFXvz",
  "key27": "dMBsMsxBFTYkWyCAy152gS2dmV27ioutejkaxCMWpwL9RyffrNNRaYKQSFLoNUEoZk5mGbGVixb2e29q4twGc4T",
  "key28": "3F2aAR5xsMB8TeAR7trdDEkpDevkiL694kJVPiCYozt1ArPWtiHmYVGPDaLZDmfBVfCYgjtTKwT6KhN9J7nrRtt4",
  "key29": "3E8RDGcWGb2HRPjZf6TbdnJ2goYcEWPPyV4dPrPsKcmRT8qpKD4wTmT4KCBc6arTD3NeGCUdHR6PvRoG5mmetTsh",
  "key30": "VmtAmxYK6vrkhxRBGTmawf6vmCX8xfJ1xYiHCSZdKC1RatykAY7TUf1tCyHkqzJNsQVCvYS45YnEYvqPHVaFbXM",
  "key31": "5vWY3PyPXUmPuU7Qnv48MPz8Z1bZbmvFQgo7zjjHNmGhQNCZecgERUpXfVFnhs8Yi2b5dCyZfdsE824E4h151pFT",
  "key32": "5HvmAkpksWnPJnohQau6mtt4wuuz8esPkLJRK1NogVe5PSuEaJNbf34xZrZVcJeEtHzB8mNPNFnDeUFM5iS8PbjC",
  "key33": "53iJ7WiFiRphUchzqDsknopdKX7forjbSmxLJZRtdjUDATMTxJ2fwwBSbVsGLxvx4P3dqZACCzDu8W5tD3iJfyF8",
  "key34": "2fEDksGhXbx978WVDqZqkWLxz8VbMggwxwJ7cgMbsd7Vy7vfDhP6xRwGbuGLEkD1e7FrRBLj74KCnJASQpBh1Xhh",
  "key35": "4a6kNUpp8JSFW4iaMHYqWbJrMuGFLabhQp2YAToRYDUDh718JQ36boRBo8HBGBwgaSB8JgXVVzKxeJGgzu42BuNa",
  "key36": "5LF1FLvxm7ZpEngB4Zf6y2rG4fVdNCDT7V79qqBrEDyA91hwJnwzRfnYV99spfNHBDvwDyq5M9UjSiyAh9uvruSm",
  "key37": "2ZBfyDUQMrKpr1cfxW6soUT69Rpk5cLXJzEfYxJ33sC6R6q4PwjMo73RP1mser8FU6SQkjbX8psgFjvfoS8pKPbB",
  "key38": "3JkCBrsYFQhGY4uFpBgQretvGTNKrujWvGjHmb9uuQu79LccUTAdbpx7VCtkDggrV5VV1cDzT3iwyBP8MNv1te8a",
  "key39": "34MujJc4GToS9yGDjBqVMHsMHh9A49Lawex7aE1sASf7YddGb1thghFCTKUMiJQEiczgH4ExMAFnpdsYnT4soVbg"
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
