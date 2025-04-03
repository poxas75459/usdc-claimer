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
    "4g8368tb8xropDgTMMn6TfBGwwgQ8w1UFRgcAw3RfCbbDxBfgD6BTtofH87mY7iUSN64kjDHpwAi8ZyruBaLe1cS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mP3FJkrABEjhrJMW9WebupaJUqdnNoQ3qHXJjzwBdJ9gDsskvbm7ceHZEqHwajEEGy15quornBkTRPQ5mks63mr",
  "key1": "cYLXawih9BuQo5koBZsV7uucyuLTWNALP4yq8qUSbfmi3JNxxahGNKUwc4KBk859rimgimWT7TJPJCEgkyjhxaF",
  "key2": "3tQCsrtwpd4WNcoKretH8byhSkLUgpZQ5otxngtkt11nYb22m9EuWo6h3hDT5g2WJFUNyc8ZZqDzy9UzFm19bMS4",
  "key3": "MMSpxaPLGk2DEGFSXNoRcRThvmGTT1aLEHKr5EZgEaW7cT7yvrZvkYnfFLQwQYb5qZhPcBGP9eCkWq6d4ANABiN",
  "key4": "2QWRtFDEZzDiB5aeXuL8ESD24vvXdSq7MHns5sBEsRmAypuxk6zFoMXfZmZppsxeHynnQz6ak69p2yyaNBZ9rgZR",
  "key5": "3deW5WrwKGVaxv4tFForLKGQ9CgbKsATLRZJbcGV1FuckScbfFA1sfCtpPenE6GX9ifG15ieTZkvWkigpCrTGyG2",
  "key6": "tFn7b4zSVi4UQ1bgAPW9K2ZpZJYWyM8KAogUMUjtEBet6C9zYhfK8TiDG7kqumhPsWzzi5yQ25KsqybMZS8N7y7",
  "key7": "5augJLyKkbYeUFbdGZLpv3UXCCdNxWciLXnngwQZScwc5ReuZwUXFMfbEL3FBUZDArGEJRXoy7vciJrLx6hZgzp7",
  "key8": "24Y36A4xsKdV71WRf81BA2XAVSN5L7cRAL4Pd7FVjHwbGSZ4XXxEoy44FhyCwkHEhJb4KA8BSyDw6nF2EWKfbcE3",
  "key9": "PutCbfZTX2EjsCyDy7JopqFuJFaaq99qUNykXJ5uSwVP9163umjXkyC8Fy3xH9dxEiJfF8jjVJRCuG4FHaMQXYH",
  "key10": "5kxwFr46tghv6AcEp5iJu6j6S4Sjge3Ap24jmqbNegUwuyvDimzqbvirWwmhQJRoY19KTf8UxCK1YWKqkDeUGTAY",
  "key11": "ik5e4XNkk47as96AP3p1Uoe33zZgmy3tLjqSXmdbHc9USkBkKjLzPxBsx1YxBPcFu657YiCnTdHGwQrtEcK61zE",
  "key12": "y2YZGnbNRnbiqDcnNqhLbuA2tjyRxizDJxbEu9MWL15po7Xk5rMyG3aJijGynRESvX5EwW6kuc1gUjwvSDPXQ8B",
  "key13": "2iHS6QvKfcLx1FpnLHp5nymLhowNcq5jerBXGxiKCc4w9WNHMgsaQXYhWbB9NHc2TX9DE7WGTf8MVExgL5mMiJNY",
  "key14": "2XeAJpxmxaKtLMxCnxnHQx7jeFeioPBABzs3PrcUgFP1DGk9gTUX7qso32gLjKxZq6Ee2eedYXtNttGmssDWNHVg",
  "key15": "2JjtQbKBPAL7KDQikqS45W1qG1qwstqtvo24frakfMzH6p42bNjyou1rm3Pucp8k6j7UoQXZdYgCNdGeiWq39dNH",
  "key16": "2pYUYFSQS3T36k1rN2mzPu1xQXaUEgtpXTQmNPUXu4dHsbskogKwGPwHWSMR1KVnzf1k7rNruuG4CB2cK4u3jCPW",
  "key17": "5raF4V2QbG7zdUTw2grTMXjCLrWX4RPbSo6o3Vj7k812reG4myUVbe7NiA3ZvwPNJc1ps1cNVqysRKScyVxKn5H5",
  "key18": "Z6aw6CVixegVWqx32pBbXnvp5g471WHWmDoh9ScUqzbMsvWyYUtu3WjN1qViKBTDeXia3rujC2rkPovXmCTrGw6",
  "key19": "62RULkAFVsE1PWXmaLU6Dhw3TsP3kKjAy8f8ds7QfRZj55XtJh81KJukVBPuskjo2SAXR31A3BrTCm1QGYsi5ZSH",
  "key20": "5Bgg3VMSUeVmzeYm53XkzVwdPyudhaU21nid5wJr4ujDSvfoTd1pHoKJW6fpjYUHsoYaBCd1cpZEQARqoqnsn7jg",
  "key21": "2FqneDhSTACsZLjf9evd9HwwanU4NAmqF91GrV9vaNGwgb4ukeqsyaTT23vqUBveRuU5iPGynoGQ6tWX6ZDM7JYT",
  "key22": "5arofd5zk4pz6ootykrar1XdB3Jj1Ukk96Gz7q7CMZSQ4pmiQPeyQMGGJBPo8NBadMBth2rz4su1T8J2nk5MZyk2",
  "key23": "5gXiv2QRAzwCyuZmSuDpCMnZrSs4K96MNCqwtDUFrivZjBnbrjar2hopnWtDpudJtrJspPz5Yjs5X1caehXribU8",
  "key24": "3c5otKLuDXe6wszrcr5bntsGGwzkzR9Fu8RnaS8e7gv8Q8HhmpMCegDRATH2KiDne2QLUasYtvfRb86yCejDcEQL",
  "key25": "4uHFRcWfad8aatfedmXSWCgKWhSmmdCjK3FKf2z3UgGvgxqFcdS91aEjVZwdzTweJGXjXn5TSjSE5MR4XbETELz6",
  "key26": "3DX2GpSPShBw61zSuShqF4RsnEZGqodepieZZG24tSAJFAko3yQZWk1EUtJpt9L6uUdBSeEo7yGqpwTwRDdx2Gax",
  "key27": "3UAFLuPkHnVRUWDekT77L5Thn5ceGgvwC4VHHWuP5doTgcmcZ88kVUauGwJBfA3mY4pwnFpMiaraQzF6ioi3m9ny",
  "key28": "3gnyttqR1rpuQwzVD4agmfyGdc6Yfw7BNF61sJfKQoFSBmvxBu6Xz7p8t3dXz49pm2yQhpgXYuvJmXEaAWekCRAu",
  "key29": "2wWxX61GEpkXhVaCAWcoaFmtjkwTiPCT2y122LgwTCRPJpet4m8A42AqQiwcTQYPYaxD63kJgK8AfPQwNUeMAdYS",
  "key30": "2FySgVMPmnxDkjmcYNcqUUp1upbgm31KQgkXfdxyf9S1y5z3oPLciXWqxfEm8D8H9kz11FgGGVBb6W8swvAxGykn",
  "key31": "3Numce8sTyePAnPWd9xeop4N3HAmy9dihd2JjuWbetdFTTAW1MGURxGQ36L561UY816CZ6SUE7Q6gAKDS983dcmf",
  "key32": "BGnvtSynob847nPjhJ4VoCQtr9W2eEWkdCCbrUbB4phZjBNwZWe73EaDRhNsjrrfAyekxqUdKhPvLubP6Rp8HyX"
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
