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
    "4sT4HpwGmtB1tN8GiNspD4XPnwAV5CfrZhfvwofQhsGYXRUMzriZTk9i52KdTy7SZrvF29g4nPqe26QPzNFfi2Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6B4RPda6ysPNhvhSAyxNyBbYidF9NFWqQsw35DSsQM9rKeJCuRmdVYQX91sMky1ncxbW4GkcsJ1NDuiVR7HeCQ",
  "key1": "wuEJWQbmjfGcsS1JhDcjNHH31F4SJxJNxJA21bQ9Yh4deQ3wnQbikRQGUFnbu8y6ctNF2p2HyysVDVof4JBXeXk",
  "key2": "2nRjN8TLb5QWqzxyYmbK6iNJCuz4sLgVa33gadEUsZQBdpvBXTSoHPwcLZSbUMCey8peMEAgVMFDskSvCeNWMgYu",
  "key3": "4qSrJtF2ByGgYmHeejmgJpb4MT9HnmorAiTMHQjNshSedZDDz7VZb9Fq4AFtzmswvbtCsffYYQz4cTWkJ941TPmN",
  "key4": "4S31S9ycvyo1uxcNsJuAWPbedz9zR79epfUZ1rYvqF3SMi4tA1AnjndAwQHmnLfbEe5J3cha1QZbVQBuynGKctPc",
  "key5": "89DyLQejwKpkj5AXkyg3J8rm5E2sfjKncP1iUTviMwbuj6d4Ti3PUcHSXL89e5mJzdKbMcaNAAEzedjZD4hDNP8",
  "key6": "4Mo3LZG1socMqmDjrPDQAnn7cjwtqehJGsESg7FFWUt3ES1Pk5puKoxXCk3xoK8Kj98hRJYFLWYgjKDWDW5KjZLg",
  "key7": "xGZWNrrQV1BRjCiGbCEwZyvrzLrNyA9FXiunLerpQboZwK6v5fBByReM6zMcp4afhhaZov6ce5NhAcs1bWNsuJJ",
  "key8": "5YHTjpKiQTfTHk2GNJSQ7VKXTSeD2dSQpd5cMtPKUmjUoyCDGvtouSmJ1g5pUuq31apGzzMjcg79x656ZaMZWLCj",
  "key9": "5p13gNf9iXGgnhQ2fWQ5ABA6Xj4LxuAvFLBocGUKXX1tXan6ufFrJPJTCN91Yr7iAUQ9UDvGvpsrobLxoDnV73yz",
  "key10": "3b3uPu2n9WnFeyZCJ9Zb3baRNkXhbEC4ma8NmpVQhtuXhSh4S6JEyi4FYcEzNJRoAH5eGNTPZdpuyFTbaPyBJMa7",
  "key11": "SgUVQQdb3d9qVGuPHCu8MhuySWDPLxizxgEocfaS2bW8m3btj3asPT25wrXXoX8ASFXELNpfDSuewFSCwy5rxuj",
  "key12": "3ZMph15FadBKvEPAj9qmFLGgUDKqBL9Q72wJS5SYgrqT2m4gt2rmHRvbm3bRdPXHqtdKWdfQo5Snoh9GV5Pk1YVb",
  "key13": "4LMMCc5aW9WMxvN9Yof7GkxujVt4SuW6KQf6w56FzsPntJq5ANJFnJLkCsZFruBjVvVuwwVyztXWGgHrTYqtwSkm",
  "key14": "5un6eeydrTDJRWgHFhRPVy9zEQjodhUa2cPjEgM6FQ8s93dnA4LxDR84it49CgE6oujmQKsLdeHszW1u4qoNUrWf",
  "key15": "2Qjz7ct5C4zr3c3sSc1FfXwEUmemF1wvZ7xDYTAbUnFNWhpRiMK3T3ii8PnLw53TE7sznzzV8QkxXy83F6gW8oXF",
  "key16": "21LGxUHXVnYZXx7n18Fwcdstx39ZWDXYsgyRM5xho4dwAo9J5mFL6aYZp5LSJrcTZnqGLC93FvN8moh6B16cjYnj",
  "key17": "4LAVN969EgN8f22aEm4fn6a556ULiyGeNRCZ876ZJPHGZx4PMMu218mDjYnNCC7kFSeUokCsWsSzfeKaQtiqqjPw",
  "key18": "3QnEctZvs49skZcmekstJV2ZcS3Gw5iUJwFYpvnNwzfRTpfq79PKRMxiZ3uyD7jBSAydGBEkJwdE9nk8QK84dVwP",
  "key19": "xHs7UZTZobwQGc624jcoYwrW32rAaud8Wdi2HuSKUgA5aBzq9e3uUuY2ztTZKLFamyDU79KHHXJNUgacJYdj1Pm",
  "key20": "39arWPaXnEsG7CTu3atUjiTNM7NHr6SbnQZYXM5nmRhqwy1Qi9Z177h2MyG9uv72o7ES46c1iZ963wBXpxpQJB5u",
  "key21": "2qCnCMLEdqJtr7Y7P88CS5An1soBBeSS18EpqEUjhT88hvozdP1Drz1WiHPm3Vj1dTwpvj8dn9V6t4YWnckvkeAg",
  "key22": "2NYybpLMNcata71hseGRHnC9dWx4LsypEUzfTyQ1BxscBpU2RRJcPjEzXZoPJx58bj9spDwvEdn2HxNgtaBpvZ1",
  "key23": "3BvAqsqbWPMGHx21rAFmquim5VohAEdsMfHPNwEEuS2YXamkxUscEXshYNMUy5u1tYYBHjmV9s1wQpX12H9KqfeQ",
  "key24": "2yCBPw5cQPKLAjxQUfp2tevC1ySzZzkpovhEgXjPD2ueVty4bcnV7AkVwLFSjCiZpoemM2tJok6WkRQV2V367zJT",
  "key25": "5R3RJTiy1Pm62JCF2sz8Gyoq7ABHG2Zb2ZSZs1u8c8woy386tQQpNiVkBcyqHcgYkesNef6CFYPdZL15X5QeP6Q",
  "key26": "437Ny3WL2JHBPJT7CgRR1B25xZ5cR5PWBrBvKwfPd6jZFrm2WdewkFyctACAmG11NqUxYJ2wFp5Q5cj34RYvAHUZ",
  "key27": "5aegTME4F38R7eKHdot3R9KinZp8uQdnaopbokyGasqNWT54hX62DAXzSutCechpSnM6FnhPkiRJ5cQLQw2onmG3",
  "key28": "c1HsjeTrGRGRhay4zBHLTmAqG4RzRafpgQLr5P5dgqBabBdtE2ZcDy5xNzghhv6YrErhUJ1nvBC4eZgNc65soCH",
  "key29": "5PB4CgENXjNrTiB1mZPeqGngXta26jwziWV2kNyu53DhsEyHf4KKALh1ZnfVnrwVyVB3HyRDWuYjanmoMMSTMFzc",
  "key30": "36kADt9kgLs8dZHcu9omoVYQTkdH6x5NiX7W317CZYtUzxiTPay42ZPFYpZWFvkf21894ASRqdTapXybGoLAYkcL",
  "key31": "5ZJohQNCqFsdjS75KzzLZp59VGqr9MHRUBA5rBNeSjXQkabtLgoN9p8cLVc55NqspHx2HJU9noXHCxWLJ9Zckc8K",
  "key32": "5smvCmZAHPqw9UKrhk1ssjaP1KpHNQrD2gBRXyiAr41cMgYXAScwtj3Kb3QGKXGBRz6LR75AkAjcedvYUiNzaT2Q",
  "key33": "ZcdK3WwByAVV16PjiTP7Wv56e7zMZusn9EqkYEK9aXmrLy4DafeUGhSY2mP69vc1YTR5y72aD33Bh6RRcuktrAY",
  "key34": "555zmTSnNTXX1k18KC4xztmk256TbE6SWnd6QEHQwNH61UW5TQBJstxp6kpamuc69gLMufgzJeoAW2hWvktDgzPy",
  "key35": "b9UEUUJimRW287zcD5xoTY6Ss8xYCdq5p52XgVN97KEjYuyciPP7zAXaXKWD8f7NRjfu1bmtMYhrBxyhGz9CmLT",
  "key36": "4f6WexctaZnGidsMgvCDveiBZdz9kv9xuggchiWuS2FmAzCeaspaqTdin48ovry2DZT4hsrhqDFQaYZBk14efvEh",
  "key37": "4R63LbmFZ7xHipdPgXBcFVZStXs5ZucJ4N8hcWQd45uPXxTckXuiHuKFZN8kfnHjx9YtLDipU6FZCwNmd2frW3yT",
  "key38": "5htN4AS2hyQRAM3HbTbZwuLontHuBsSMChzPXXMxokz7rW6mVW3wYonAcw1TaMaLRDUopAau6kp1ciKnX7gERGX2",
  "key39": "KPYtC2zHydBuDNsqRjCgmvFzBxrbb4xtic5szAKHgEY8GRdsCdkDy5AxhiypD7TsBjcjGFgun1gnS8KJrUENNeK",
  "key40": "cfPaoced85SQmZGnriSWawRaGN6C43zhjZ3PNAz6voqUL3ATGA2zpA2uWTvwDDTKMny7N1fdL9eU8DRheEVKLGn",
  "key41": "2SiAf1YnX9p96SCohzEmso8HUaPdSFQ8rrYN5KCUgAg4RhqnLHkgaFt1nHvwjmAk2SFJbGjkkV25PWv7injxeN9A"
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
