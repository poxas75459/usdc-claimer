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
    "yH7YKcTywYWLcvXyKJT2S2HhGizccYoiy1E9WGoNJBhV9Vp4bdzpYV7VJhc8DQGNU9nMKrJWPRABYFuR54eFg2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPi7EtdfKiGqSaGwK3oDu42fXbReHwBXc6xdojfdaRGEBcf523cQaPFvKre3UxkJdvgUEiZoEjTzw8ygQ2z5RoU",
  "key1": "3R2TgHAntySkoCDAht18W1WppJbgWw5p9TfMzdsPBZPSzxRmpxD3pCzZzKmjUMdBnPNhK4K1x3Py4cZHZkjdD4GH",
  "key2": "4zBJnEXcoQGUJLCuZ4swYnAcWE1Rj1gSkbZJvpVa3gsAsfjFfif2XRUGVzAKS7wx7gHoSdHgeHfGhCVvTutxv2JY",
  "key3": "pHp6oGyvt6PWfPmZTrAHSMRXtgoDGWAt1pn9d9HPNXeu52syyujFNgEHmPMNXLDBuPJdkNBDjcrj8FDe5A361P5",
  "key4": "5Ek54Cjfz91ZRhzchbSokzpBvVZBPSh6uzYXY1bUQcVkASLYfv3mWmHuP3EeHM2jb336Vyd85PtcxCDJW39A45Z9",
  "key5": "tt6CBXJFAYkD4hyAbFt4r7CcYjkx6LiU4KDBgrhNEFFaqb1dxk2gaqU2GT31gjZ9z4nR2SN2QktnQ1HHuZKVy3t",
  "key6": "2mbQKCKFopP3dPmqE8yJ3GvgHGZfdKq9v9xRAuyrqixmBzyVL78GeWymq1Bkqc8dBM5ciGUS44TKg9g6Cmx3L1Mr",
  "key7": "5qm8wu7yFyAvu6BBnAxkybzseuab7oUSkVfwwpasWKkZ97nMquVnDNVfjys6jVzM2LjcvPFcWkQ5DnqgbkBnhSMu",
  "key8": "297ARUXNY8fyL4rRno7B9qfBUgzGZc5LekxbBnfagnYQt6qpZZdtokUyH4tRtqaKExdTZeYvS1gKkzpLPtEHewZM",
  "key9": "52Gb1PfW8p2zXPxgg3P3rV12PC4AWsB8MyuCFMVf1ETJGoiDWuhH1M2zsw24VukR7mJqFKnTPcH3CxYaX8Ci6SzX",
  "key10": "5ehMV9GC7FaP8aw6yh9hoLNnz9JwNzYFvmBdpXbduuo2BZoSBLnvyt1px7KSSHg4SxRZYxXm8e9N89U91RZ8fsfV",
  "key11": "5jfZ69sk7czStQn1qkXpthFTENB9noaWckC8UoxKRV5v6YWNAk2ada2Gr3TaZm1PiMvwTHoDc8T1LP9pSDvdWLbe",
  "key12": "qGnLiC9K3YtEBoNEzQqTp56N3hDxsTPqFre7cucjbdfKtTocQnzVV1WeZebJR14S6Gw69tz5yy5mLPcp9mHunEF",
  "key13": "4kP1h86mVfPboh9kGpLHDdMpT75UuqRHGy17XXZ7BaUvzKLGH2GjzRZzeDf8omq11y7dF8zJtra6Fph7gndR7SKi",
  "key14": "5gzmLwy8XktRzWkTrzN54JCbXhgMdLcwp8WPftGg6Ket9a1JMmvdHyhtf3ABCtC1wqud729KattMwd8PhRpcn4rq",
  "key15": "495o78LeQuBi72z62b2DhVHgyeW2hBhbeVkMMn8Bh5ZyJY113gptRmFimNhczN6r6ovgcVeHokVNzHFNxk65iVxE",
  "key16": "49KNxg1wTCDb1HfYVPuTxfp5xy6SutUZ2DDQLRnzgQc7PicUrsNL4vQbZmuQFwMqxWVyorJ61pmifbHcQ4KCMsbt",
  "key17": "51NFjv2hWwc6oNs4GQ2mJrphRauFVgPmxpmx5JeLSNgppG6YAaBCR4o5EWL2SjY8uXM4W8ZZyonKV8YDbean7Wun",
  "key18": "4UXNt7Q17akzybmBAUZVceSYo6SciQnhnBUBfizNjxGzAZbQAVegaewvfEPhFpbrNczzkwGg9fTDvfBFJZCPX4K4",
  "key19": "5iDkytHER2o5ZUb9GHPLkUS6cQeXR4Prhiqhcv2iFEgr6GGohhPLN7x45Q8vgeeDwikK5aE4fePGR95DvgSyECdt",
  "key20": "4oj4dtQQovmgWrBWwVCYtr8NNLfmcnGwd84mgbyvxSUme3sQDwwDtZS5BSVuZRo8VRwVjiPwGHxrdWTyLXj9bRSL",
  "key21": "3WhjQGfiNAajmnb1xbkabn5QBEVM8hYFBQQuPQoWytAWUqD3BP1NJGG46k5bdoGqYjCqEQ3X6wXQa4NWLUYLhR1e",
  "key22": "8chfARorWEWY7e21L3p6aHxhpzSAQTFCpAC5Z5qbnKvBsVzdaora3LV2L4oKbvUySvPEMe1WS1GvQfSDn2Mo7Ar",
  "key23": "3KeLSaqnx4FAR5ujDSafkmobwwLBeorqnos7ZYpm8g1ApWpZ5wmpvD72JWPae1veyxFEVfA2qUirvM83d4AL5JRe",
  "key24": "3sksJzGAXjLutbxxnmHTkDqJMzdqTASVemnxqzz9cizSgh7xhfHauhvZF1uq7esibsQwdZKyR3C3FLRCF6Nnvza5",
  "key25": "Uy8QC8YyXf44psYCRi8GJAPx3uGgdYe8xEYHrWMQwC76EycB6T9FE7dkEctGnsGM73WycaFAtAvfkpENXeeQsLv",
  "key26": "4kLjMwReFpCP5orLtz7N8W8y76nEWYTAPosACLUuxpXq9tgdLwuzd9w7svRQcmhGsmaXvVvKvNfw3JTbqC76yDah",
  "key27": "kToB2fA3xd1tVPsYVDMSREBnsjDjc715ckUwFeteCokPQUzCBCUzsYjSX4rNf1Rge2fw4VsjL8EFW9eFsyqnoE7",
  "key28": "3d4jgGeQgci2gndQmMrrjCnbErsYw2FuSgUTfwgwyezkKg17LZLkBH44RnHP1CNEkoLavW8CYqfPupJDv8WbByYf",
  "key29": "5XMC5jkiuUVVHHyowiMBJRq93Nf5WNTDBzQqpRqADhXcHLXmiWgsUKgRR7jiTVi4Yq3P1dZULNdgAAHF21FX29i2",
  "key30": "2PtyAtLx2ohLN5wpVCLTBECLycc4bHkZS9Rat7F1DvTLDNtFG73UkREHN3mjzc2Svip7h6JDqMveepwMU9g8o3aw",
  "key31": "4Us2Mc6hofjABSEWtYyfXSychtapt5wp144botanA5CcYD7BNHK8bKqQwGwEzEDvd15yjL13ALXtLn1NGZgZ6r8w",
  "key32": "2KXqUWNj5GGV9naSaJDyE86SbwkAWLScbtEoeSXdFg9PKaWqtZ9M5qWtpoDjoxeMJBL3KPWSwjQvtEfTbaS24EW4"
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
