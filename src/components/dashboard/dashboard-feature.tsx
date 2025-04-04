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
    "NAETGB1LFp7L2wD2hAJQNT1sRh3dfsHgV36hvgCR4vBFGhgxokGv5Y2FMNEm6hAC5LaRSXYHWuX6A54vfFKexrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1p9pdWEgXYBmTWfr2HpPAou5fddPkaXADxRAqDjQm9F8Kj63vTHaRgp2kNgsAXAYSFpTJkPYF75nqWVui4hDGp",
  "key1": "2KKu4uuZqm8zD9RhzzeFTK2dktzmcSeP7jruBbWNbvug32rkJrPRsyprNxdpuEUtNJ7TGP2AFTMLaePUru6LvAfD",
  "key2": "5PpqXkCwACL3QJo46zL3CsuaLhQ3BcFzEZ9wA8PLH6Mony7YGAsnpTTHP5tzMxmEy7KRxqEGoJseEjoGW8Jojibx",
  "key3": "5vjnTuLv4NrXUGg6K6DLj8MZdGsVveZHCsjzimML5k4hkTfgdPTH95k45xnpkoSQHRC1DhZVg4BkzBnEFV2ZpgXV",
  "key4": "4ErWe5KpRBcg31MJTRHgsGqKf7eEePTbMoh2329EUUbwgzwB2ok4yFEbsgFyCiUiTT3r8GriKVMDBYjHM1uMsf2T",
  "key5": "22WYZQVMJXXvMhdPDkMYvbMkX4PYrmNRswDAT66GNGKQoxKTQNwiGh5TbVU9XmoEM6X1CYT8XmhiJ9ewKvZYx1dk",
  "key6": "5NXkxcTFWBrs1A1kW1SSgWkVEnMZ7ik6KLAPYu67hf2ku8yZWyFCL1QCTDHCHXF564SPa762j26D8iKkLumzXcFu",
  "key7": "zyGMZtdoDuxqumNSjTCbJQuketyMvRpxnFZ6i5XBJGSprkiYhJJinZLhsyhAMXR7XhR6uTTetixfyq3AwsNWXb2",
  "key8": "yFj9UAvXjVXDaMooe7z9rxNCWrSs53fnWt2wa1uEwyLxSq1uNMRZr5cBAbchsKUDkkudjtiU9cX4BjfRczgmEJX",
  "key9": "syp7LwumA1UF1uPWXYvhqjiMk86WGc1cnQ3JPqnp7ASLpp9b4VuJ4tnPGzq8p7fmVef2PjuWXUj3JSUftnuTDF5",
  "key10": "4xxaJ1NEKydJa5EP6hjcuLVx9HFV4fKG9ms219G1YW2Cn4LaEgxyQVun9VFWe5w6edQEN6jeJMPPvHgE48MdqJyh",
  "key11": "2c3gcLkqr4Z4oQYJ2Cwf1Zo7G8WM8X9torFBVqaQk3RMndpudMhnruDmkcvJaBx8Rjd3sFNcbiDkGN3hQXr1Dcbm",
  "key12": "23coVThXWDJotcYJDeGpf76dFHCnNRxVaZaw9uVEdx8DyEX2g2NiBpCGQe5pMjpD8MTcctC8CjMpWtp6LTdYbZ5W",
  "key13": "4Kek2RKF5LQi1diT3yNXotepr1RkzPZj7ensAo19mjZcGkxqGV6tJQoBddKTxXy7PphjESXPi5rh2mxXo3Gfmy1j",
  "key14": "rouRb6NAf3VeWDNvrXKr5drSfCTZgh2SKnQBA15NRBmf6dp9sVmZ4bBTavYKPLRutoDu4ScFQPwWamhrrJjJBLe",
  "key15": "46bHzzmBgNo2GGyQoFJzqsj3jJuH9dNicKuuyNsBVGoZbsDwuRj2kC79DTHADtyjnyJTXCQb9ue41wYwKx7EvaMu",
  "key16": "57P7fZdBjTdrtjonu1MTqfuHRJSYgdbWUak7dmRZVoPF3zx6hkesBXPvRFbyXhQR4gaBpwbLb2iVHqdKbPP63FTt",
  "key17": "3pzjk7tMJn9pqbb2A6e6VzaebtYzic11rJKeED9Yr4pXgZxxrUoPvqbgLVPxRrzxzCi6LPw8jZJi9JDiSb67M9Xj",
  "key18": "58zeH9QP5E1UuEwc7gPpqDxr97E754L7VvYH18vPPMsRE7VZWfvSJN46QCTdyozBwdZSXeevskkC39Y7WY9g4B2x",
  "key19": "38mx71QSiz9wLL1FWVNRUmsdMTpWMFWv7m5p2kZx6u4936ffkPu9LEehizLY89i5yzSJJ543VpWGM7obyutqniam",
  "key20": "2A87paoxC5CCznFosedYm5Rp5GMUJETEpjpCvVNx8P77FyHxtDQtuNwHT77qdTcj3iRrVELs3R1WccrCiNJ3szoo",
  "key21": "24tmikkoVCyNNDb3oqQvrnhdwSBLXK6mStM6xzWaLh39CeG8WnRmXE36zt2wv88dsAVqMdZvLdLnyQ9n7tQCjSRZ",
  "key22": "4mfPnSb7Yc7KLdhnvKZqGF1dha9Qa3XuSgAx2W9uBfXHVdmjkKYnhAeeJNAZN9ZL5LTjyDKEFhnKtxLfpgLQGKc2",
  "key23": "d5VR2YW63D4gSYTUrwHYEQ4Rfn1DzSnmdpcLw86j5FHgRMdC6jKapdJ24jjpb5b1DyvmACcRuGNURXsG2aM1AN7",
  "key24": "2T2Z13CMXP3RbMs2nu4n37DRE1nTuXmRJrBzc2zv1smKnS4zXhe5WEyoZocPE9K8PR5EzKGN4yfUNvYmfnFQeTc1",
  "key25": "NJDXWdkQ3n7wnr79E8JcKfLzD13RNYZxdwg5KZ27SaLrxproex2qAkoJixaEMGXGXEwuQpab4PUnLzncxvr31QE",
  "key26": "4y59KVMmFTec7wDxNq35LUu2W53fwpYYXsbWwjBzSBbvPPcSEDzJeGT4hNaFyjCjUiUd4aQpw3gfgYkkuaUpG7D7",
  "key27": "56Tmet4eGX2zbRU8WGHVAAX3dqSpnrUhoTDivYiXyxJ6HfPezm1HLR831nJPJx7CwpNyNTxcYiAeocbsL6wBLn6B",
  "key28": "2naa6shpKJqt1VUwSkBvLmvh5hdBjjkhg37dWyxhsBfsyPWvVFTqanBPzCtuB9bUNeJTaCQKZQyWT1NC7MQKmyA6",
  "key29": "5P1p7v2AJu1W1dW8q4wCgWt2o8MUxmqqZCQT8hvteLpE4BqVHVUwYmgS6jL4UZ6xyYM8pjTyinHef17QrrfJDbYB",
  "key30": "3Hx7pRaZnZH3bKFFpeR3SRQzVdC5ZWkewZaj5q7FFMtjFSwX2DB7PnqZVCtuG9nyEPZNgU8XBZC44Rjw1jVeSiD5",
  "key31": "5zagHLH1AS2HZe7EzjBajHNKcSHZj711JJpqTX6Q5zqj1Q7v5BCjA4az7ag4EuiRsiVqdpM4Z4ESyChHNpRFHb7m",
  "key32": "5ERqqH9NHqzvSWmBbHRuSyb94uquzCCffecCsbmY1VfksQKkYMeBQYXn6hTfpjrKqRdghH6G6JpCVgw5UTckvPDu"
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
