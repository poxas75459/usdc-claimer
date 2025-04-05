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
    "59XA8UGDwsAARpee4ei4MtvBAnBsoDYmCZaCcyqMtQ7DLtsr1cjVoCvkJBP5A9h82iYAEd1cQhddi8jt3726XXwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ksxhh98MFAn6VVXwgXuM7rKFJX1B6WAEjw31HnGr7dxdJZ2dK5PmV13U6GU8zQZN3nN21a2FKBC6L3RfPWB2zjF",
  "key1": "2U9h5bDXv8kc19KnCwwmPdHLTJx4GYjJJ9MzZYzVSr9WTBzEPesxwre2hbQxyRiTnApkjy3msXgNb9z2RaogQVqT",
  "key2": "29Qb2hA6sCmkc3PS1rPcVvuWNLyeRigTgKeVdaiGC7X27deDzHUi9LEgjcdp3wSCp8vkpfLb7r4tEqttBMAZn8Yh",
  "key3": "5eR9s8GomFVGSTTDbXYRtkUQAyJqYfaJQpsuFBvSVA95ZFeoyTmnzQiDR9kJP9ZNaY41bAv11qzDupD7tQBDFhau",
  "key4": "2rKakAMij3copMQ3BqjJ7mUc7Y7MQRonEfxYTUm4MuWz1xYqmAWQhsTahxCCgYvvpiKLb5rZFJ8i7HiRRGcYqwLS",
  "key5": "3uTcXP3R71nhFaxoVNbnMb2D36tKuvdnUeNjQbhU3QAqtrcgDFFjRLBwvTb9VcfQqY1Tq5Ps7Mr5m4L3LkU5m6tn",
  "key6": "43GrMkDKV7NwQYxuMPM3HQM4Jm74zraBzfuevtEN77iyRayhjNV4DEotjMwdXnxVTPfvt65mznDEDNKMawCe7Zrz",
  "key7": "3XkSW1EUBtiVEsiMrYikZhQQn63gfj7oUTKYndNFF7RhhYTDHhVPzG5panypMb1gjMtYGGb5Us2BrW2JKEBWrpdu",
  "key8": "56CqZioihZZb2vQzkB9qffcFn9fRbhPSY8gsdPadnc6qhYfKEcsDL7NbH3nKAREYaS8e8BPLu6YAMhNW6cZ5GMSC",
  "key9": "XDYxNB2jvUAMieyxjH599Hrk5ixNM9RSts6SQsQ8ufjxz7T9VCy2EM11woYvYGQyzryWTaZTRSGsPUU1e9U5VTJ",
  "key10": "4ahhcHDaJAe7nXmPLWG1wGrof29SP1qUQUHdtcUpHHngA8o7YFrSbk5KkErHQsVbarL8wxwTSUkteLfaFN2Buw4C",
  "key11": "xQQk7uN3P9Hko8gNDzLLArsN8RZ5YPjVdxwbUWXLSeh8Wpan4BNv87UkEVPodgy9gpVyBZbYCdHFsuTGAXyHLV4",
  "key12": "aYD155gfRLQeNgLjowjcBhMtKEeXNXeseigoXa3UWZh2pMfURoWvHWTLV3uHxLBYwwBSTLq3bj72WwwqEWiSfyD",
  "key13": "5z9zRWoKwCJf6suEBswhRufzATz7p81qBQ17vgc4aoczDhVch1rkKR2M9sKd6fyJDdRR2yF155roPzVbSoA8UAC5",
  "key14": "4nRDrgkrW4PvV7Umewef5FMRnqwovGzn9ZDZsVsWF3rAWmjxe5zNidguNDfFSwhW9JBUp6ie12mKwF8dPZN84yg2",
  "key15": "2qxwhWmAyBaQoM3QbQfKu4f9BUnA9uk6EJYYLgcdDNK73C9tXWuoxdDAQFHqEctySX5pryQ5KcaDx6fDPiD5V5Qo",
  "key16": "3crRahd99xdNe1nbrVXcdvPfDL9fDq4mbphAMNbiCWFN9w9jcZyw92JkP7bm4GD8pbKHetTgNjCEx7dBW4GMg755",
  "key17": "2hHmBLnrX4MNmrhbeDtuXJ6Uo23JkWU7w3nKTJpwAPvaDJ3FwaJKsp4gwoN3rqsc7VnwgQEUTqWefFbJiKAFNAdK",
  "key18": "3uwxTpZedtk5C8oUhZyLx6d3J1XjUFHSh2rAs9Lq79sfyjkSuMHjNXNxr7ALwaek4ymd8rRK21aga98FxWDGMmQ4",
  "key19": "6DMi6rK94hauAnGNRfBUZUe9pTi4cZUXbGGedsPwWB5U8y7u7m7in18GrMB17nqCVY3f2A5zLwkU4YKCKZjWcDV",
  "key20": "QwcPtgBDYuqcuduJN8uDKqWiVBzGeaDMSKgERiRGHGP5nE8ogEXJeMsv2xJiKrho2MxxosZqDQ2vNt8E1c9TSE9",
  "key21": "3FmvtRoSxR2HB2gNPXFGWdZjNY9vXWdXG1CUt9N4yqrpRvadUsyKmuKqE5jPJ2VUYDkYFRT86nsJxk8dVBKfgN6a",
  "key22": "2mUQBAbDvQupgcPfisacBkUuympGzfiMxnZVGxM5y651rLnmH9ZFXDtMNXK1Fmm7VxfZmEYdwT4GxTXwdrAmJsKm",
  "key23": "3W5CqmJVZuufUarxTvSxuc5zAYK21qqN4rnP9egeH4YvJEKBAWv258YCoB1JmRa3nBGyV6oAYkSEUGGBs7CfhGAR",
  "key24": "3d5h2ofod1enQQVrNXyVMyLbFEHVGfhTLDsvwQtRzEyRhhvWwST1eTiuihU8iciAEM6HZLsUT7jVCq7md3Q1AXZC",
  "key25": "5PbReBWcxJigpnKzvzpVP7wWiZKaXk6d2nWn9apjmaxdPg3Vs5wcd3VYZbpQc7p3TCB4JJA5KpB5nRhZPCP7vbe1",
  "key26": "28WQbmj9Q2TMobawxum3JUYrmSgStSQBpjFXSnJnYxCann3BeMd4WsNuLJMUH9hGKJKJduuvvWsN1aeR5xfqwGGZ",
  "key27": "2k1djXpZm8iD2kZZCbMTbygNy7FXdy1ZzLZBugCd6TNonNRZwkcttkKnrSTQv1U5ZgeMnyeVrLSNsocgZ1uQb57q",
  "key28": "2VbekJCc3RTC2KY5YTEVMFkVgcS92DxihoiLYEmUQcbKWSHCmFejpFgNnQMJGjzT5pajAYDDpUuMHNWXdYRaJEVp",
  "key29": "MvZnzmhVEJd4Q4b8mQbLqrmcf2CWJoWWexYLVAaQ7R7auw9xJudc8hTgGHQ2Jedq8cX2WJbsg8nATdz8VvRejmZ",
  "key30": "WZGEz1D6QM8fE1ofD9eQxUmyZbR9px3QwqjzWJb7W5dr3nBVP7yYd8Kc4qGRYx1A8tdTXapWkggCVoLjyXvGkmf",
  "key31": "sVhhNzyXe8dG8V1eBQuudbi47kXZREUnBZXoNesj2akUfheosenywa9nRPRZJEvZQY7PMjnV7CGK4xFhnr3QKdz",
  "key32": "Hyuk2LW8QyF8ekde4a5aGKrRX9YUbGMbmdbDgu2ftTGnwEBgEwgsNZdZQZTGrcC2WnnZnprTScADu4RV4KUQEH9",
  "key33": "2y3iM9UmbBKSdNi4YimBnBQg1JujReWiPwiCmpjDzjH3somNZKxHmboxrb1Uvjadpg2tjNcjg11paGiPGZvNWqTE",
  "key34": "3hrwrwjDcJYaHVweEpt8KMxKMHfPM2x9KU7cPMDW5XV4TEgeZPQje1VuQUmjApmA92V5tUiP6basUskmeShkwLHU"
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
