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
    "5HDKCMMtSYGrNL6iokMRQzTPd7352DK6k4L74U3ccEN4c7rgpvHzButrPtUdu3tEF7Ze5kKQdQeE4sHxrueuLTYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UP2NJTyF2JT2zLjcu6vLRRWYmiJSKCmHz5iacCBRS3RhjcSAMDSWRYsKhneF4CwGEtLVZpMZXBuTkj5K9SVForm",
  "key1": "2RjRkManAHiFFuf9K1y94kigymemebs1BNqwPEvhDQ3zBjJUDV5sGqvCsEmLrBNYQmEoSh1GpKkySvtr5oBqkHjQ",
  "key2": "36gPNvdRogJyUWBgkAUXjJ9NCSjCshAaqwZXXHgUX5uJvoE5cWwaBFMkLVLFhiCGTVzj3oRWjxizaamvYkTqNfFr",
  "key3": "5T35fwecdEN5vBBAs9iF1u6YrZcFN9S6RwMtuU7jQY1KantM3caB4qyq2MRTUfo3RYbUWfCVWa7bmGWrrx7qJaUL",
  "key4": "mi26R12799Qb6ficxuXbGd3W3SewtURsWYQGU9kW3t3WBwTdRoFcRzkgkZbcqUN63A5xJXUJReF7xYa9MsoVzZW",
  "key5": "3eyeugjhqjzLUmpPNo8UkM4ugZ8qipaZKBthndwUakzzYyVAmsrkDJGunfjtY6rUCD3fC7MB4rTn4hVc9VuUWhMk",
  "key6": "3L4kk9jStMmL32F4wAEW1GP4SKdZsSV6cyi3r9FoFqJDMhACkT94Zrf66UupjMeAam7PpzkKeF2jkrZsQXf8Gef6",
  "key7": "3eigpcjHfctDzxGWvoakPsun5c93uvzn9V49Y1dU3jXoUcVgYWHiaAejdtkantTwGit4EwWynrmSudohDZ2vybHx",
  "key8": "5Vxi1ZJ7xVbTQhdTgM4oHuxj8uyqbCHSryXDGUHgAMGr7fA6fUsn11BjP6hGq3AQZjfo3ybFdugGfnJCnaRoKV34",
  "key9": "SzMnNK1KHwGxvExFE1ANA9gnW1wEmWieMjcvUjyP8PmcZt1S7HSu77dqwZuFQz2YxXtkHCXKi8tmE88qhrS6V41",
  "key10": "2ShBhnKzaMyoGdVdSXYWEGbXSMowyPhUXJ1KHnY3SJe5sHhbZV6A6rCVP834m8rTEsCuYnHHGDPk53rmepmLyP4D",
  "key11": "4LEjPoicmRPrxQBGUFuGKcdQm3VyrmF1ZXa5LTYxUiBSM2LpezCfyGWqrbijs1v2LJQFa7d2D4VAbGAPK3LL5Kt4",
  "key12": "29rVbpLCjicGLpn2KDY9m7iGmhBLqLaaj4k69DTjnCw22A7wqQebnHSPQHn22GK64TT9g5bskrzjyF1rkk9ZecvF",
  "key13": "4MkxLFCop6QhAWhW2js9yceaTttDWG82321Lpk3yueBMt67MAjLG7LDfsUkzt1WjecuJ5FDb4rN4p4bY8XyikZm",
  "key14": "2P9LoC1VKxbqw36zeV8uYLpP9sKcFiWGExRJhpaqm8gv2QuBfoRfxS8k76b6HWLe4CR1BWXen2SuwBrfgiBoV2ny",
  "key15": "4Dv4V8JdAnkjqj31uP3ynztUvTjUwSUNaBz4CcZtbb1YCY61AfFRMXuf8KghATU8mvWZsTJdph1fGipABCRKxgTd",
  "key16": "546kExhJaKM1hw3qDMhjW7uuB6CeKfMtWRccGusSkacZiU1mZgqfTKBapeyiPVPPGkGHaQsPVBXcowv1JDnQJ3rH",
  "key17": "5uYQcQXK6DSsKDcSd8mhosWC7867eqZokGc3K8vws1HU9EK4YfyLGgyfGEr7tcQahrY3DqDXdGK6BinRpPeNrxDU",
  "key18": "4GVyFW986JiLArLSXe7yhPrkow7sNZLhzRSUMLDoP51A6QBYrndzsmHfWzSsoxisSt4YpEo1AjYhQTBJ7KnvCheq",
  "key19": "2ZBu4v5qDU1srZ1EdpvsXvm2tpr1cwBaw2fwcTefgb9SjvizCYZFptDxBTzJpG9Tph7kyMwGBKcxRaX2htobL5RA",
  "key20": "3TTXZ7o1j8yAaW56ewJqTdE2oBZyWieYhFDk5kBNdyvuvZ6QioEkh7KCTTnSRUNDrAQMPURvRPWi4x5wJnxH7SdU",
  "key21": "3ckevVKbwy8QYQVNaKinfr5e9BjfgFcbSUAqio5nZ6wwhodp65ZtCpqNuY41RFLCpiz2hi2qb713oq25GGjAj9YU",
  "key22": "2jJq1WRDLswHU1yoQa8KefamrezLuPHjMC3u7y2k4x58xXPHTUZNbrxEWLMVDnf23d7oieeFyKfYWPHgmXbxPumk",
  "key23": "21WcG8jytGLgGDEEHdpgTqMgeD2orWbwJQFVj2qPavVGqhGcnQtS5AmVNXeWBPCMDjf4Gc83y1LQEGRX3m3M9YHs",
  "key24": "44VPCndPt7N3fFYQ5hfeTBUK2BwyYKALDURSKGubdXsgumvtPFrb6Z4LNsWREsFskhfTLsAdFbCsG38MkvouWAbJ",
  "key25": "4YRmeHTbxn8uLVGRTkLcYwTVfrmntcWfMg8YQhYGDRXyoDNax9dvha3eifRLyarKSz2CsbMaCL4sNvnRK6gqMfJr",
  "key26": "5ujk2CX1PvEh3CSxEn4QnQENWSpYtBatt3AEWAVJ9bz8LH9eZ87joM9GmfJUfMdRW3NErkfBY4E9rg99sDbivpUu",
  "key27": "5QuzcqJJXd3yQUDEdQhHhYgXzpSa5u66nZZj9FE2wyvxHW4YZdCU5vJd9ENejAVAyV83JUv3zJ21zYdX8WPzSRZt",
  "key28": "21mgCvee8UHsxcY7wij839bgn4fscuosR6ofRrVJmVXhLSSdb41XWtjV6kN8CkNf6obSkeVbWnczjdPfxq9BjtDN",
  "key29": "23qCjgvXDg6ioJvmseS2zjM5evZxr6eQ1rxQNrAHML74aZJ6F1iSUvfWhrCW2QSXg67RQgUi51VpSQzdr7xzLZf9",
  "key30": "48BQ6usaX8XZ6QfNt63gWrkGtysxesr1Fw9ZsHDQ3LXQpm5JYBv5zttfTa27bxYot546tj7qKFPhJXrAN5jUcvHc",
  "key31": "2Cw5C5JtuQCKisrXN1PE5XAHDVmhwdWNB2Gk5Zq87nhL3BSXZKubbHpdwrTZcw7JW5AerunQt57Uz1TRJynTVDXj",
  "key32": "kbep2YgzbLzcSn1HNoCDrP4ovfVtsEkY85Nu94kgs3Muf4ZXGkjcSZ6mrXRGS8QuxPWdqGdegQ4HU4vgV2YwFH8",
  "key33": "2W3tp2orf4hjCQvsgjPknxTN2QNq3vwea5oHegDRGY3Y6Kb3zqzp9Ak3UwrJUGdiUk5V9N86t4Nyutx6k7zfxrnm",
  "key34": "3wVzaH6XWsTyqVuKWF66bSNTw5ZsZaXQ8gJuNUR74N6K4ghpDRiZhrqHZNRb3bgZcdNzQWPmyMEz5Umh458BYX7x",
  "key35": "2pLdMaFTz2jnmanXdExsKtx64fC4LMJwP28Nd3Y95ATfkgFkZUWHcqyr4tVysh3TTQAuW6aPbtwxLDAMWijC1nvF",
  "key36": "32Jojd2kYT5iHo49feewBiu79LasgtqWY6nEqkoDMirCLA2i5NYeuxWau78xLHACHZMQMiTy615bSwCVbPZiga4z"
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
