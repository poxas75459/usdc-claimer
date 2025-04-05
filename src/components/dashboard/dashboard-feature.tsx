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
    "5PhPHoHu4yLDYhqZnRcVwcqomXq4sxHdWWxhCvjp1z32FbKRCRn4PfxqeFJHpZJNSjEpSdjaCGJ8cBbUn9RL2MRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x2zB2xVBJZk4AmNeVMUK2ja65JAThoX4HSKPGgJPUWYyerkAHDXQYXF2TAhbeXpiQSgKjxT68eGpfY89ynsCsCE",
  "key1": "4RQYviYRyV3fPwujpmtUWSwEvnAjRnhceAFBrUc7hZYRH6zX4ETdaFaV4camti8UgQvTUPYwPdwBfZdigXgGrAXM",
  "key2": "3x6Kd834LEVja94jkwVW5Zf4zYFxzUE3ddCDfZazDycsawxQSPki9ur5zznPnwuLSPfuZvfCEUZy1ovk6ANmii6P",
  "key3": "5xei4H5GZzmLrv6jJ6Uc6NN9ppkEiXwcmz7rEqBrzbvHec6N5eKyd9EMyMc5YcJfYt7DpJHvoXP4No9SYdrCWLwW",
  "key4": "ADZJ1d1fdsXspkcfV8gaRW7P6Pd1RD7FnqozW1Vt1WRer3QxcAju31q2gpx5vnXpMR5TYWX1TYx8KCku5RiZVay",
  "key5": "4JyAFZAje72Kvz1Wikj5tvb4ZzAVENH83kVV64topDgnUKCXb22oBHy9JHXxS5FRHne1URnPRphos1tHjbmCMFRg",
  "key6": "3D2r4Nnpq4vT3bhDNZ7ocNcJGcAKMXuTJ3cV1kMhYpCeMGQJrbkRUwNooN4Q7adzyTV5cEmx73X7a2uV51dccVeB",
  "key7": "4HPDAQoK9jTcfeEMxpxmBwv7ip4ed8PwyQLGAH5Tkxq3z7HnYddL8mh3GoKkDBX4DESueLi2QBkkpa96e3BnRUBf",
  "key8": "5By171aWwVDDznKTrygAYc1vzeLpoKhpdTzKmfMbGkUqjXq7E43vVrFo25zaWrY5vfk2bFjBVUPWjnjWTgZV6gH5",
  "key9": "2A8faC8ya9xdDU4fcrUK3UruWn3zJGNPZxa5rVDdFu9HWhKi2VWCwKHDc3dDX85RdtirVaPrko5sWA1mPYah9NMu",
  "key10": "5Qb2Ljqx26HsX8wVqW8kcBmA8aCNHobkGvs2EGKyqQtCM2gsDMDJBzW4VsCvTW8JDKVAQyDmxKSPb7SCZu7n9t6F",
  "key11": "b1jcrNN8v1Tfd3f3of2Cw9XiwiZKXjHaYaxU9WexMmtG5NT97gYQPF5H9zdf7ssXP4Q2zvtmQkroPWscMhuZJbC",
  "key12": "kdM7MhQQvvQENhEYWqSdmhF5oUgwYtKwfrvjBGFPEiNWfExMyWLGuBnK8XAzBUMGmwFB8gzekMscxMtmfiEep9v",
  "key13": "2odnoqAuv989U74ze9JLg4pZJLkZgw9Gp7J8shmcusDVLepaBAdjFsSjmn97uNdFpA8eTQpkYGjA4zSdtz2zbLk8",
  "key14": "293uXqYnTCz1PaZG8QvKmYPUPziZZcQjujhLhCkkNoLCRfsaCu64JQuhw7Qm9WrxD47vdFN8swdk3kSF829GNsRZ",
  "key15": "4zTLqUSxjbmUxuMLt8bTxCLhD84jkGJCNTbhpf34pybRrcHSVNdDeL2NdMbRCLeUS4CZNfmGua2AWtPsYP7iEC7Y",
  "key16": "KGbsKr43QguR99dfWDZwr3aPNHL7P2bcLDUG1P2u6zbMuJbemUpcHquZEWjdAfSNKCRsZ7c4rfTprVoBDbzFkdP",
  "key17": "4aDsoUx1sTmvvgbJWe9mRfR3cTLhXBvgb7Pt8YpB6bn4af4X4aEU8UNL6kEc5fJKULzfTXwRMpfYw8GmTfWDU8BY",
  "key18": "LhDjYaKCATQotcRZB2TLiNVjLFQdVxi4c9YLQ6E9qHtAZmobHpaNx9M4f2jptLiiCsCchcz9KRb28GcgTh5yoSi",
  "key19": "3NxG2SSBm4zaFQ4mp4LAoMfGyaAP8wPKQMdUGfgWPd8xWch4drwpWHZtg9YrGWVRUXqoSTaYB25NnvZay37TLKX1",
  "key20": "3sJ5oNpQLKJQqTTDDwiB1tNGTisR4dmy1skHDBQw43AArYTXBAuvQC7kM9hxyxBdSauAfHZ1mjsi3Jh6Jvof8K3d",
  "key21": "5Ga8yncQFAspMUGEJHcZ5x2dDdF2eEkEijXijNMNw2rZxYSnekhZmbsUJKwC54smtyhNjEVyrTc5x5LqAKhfdBM2",
  "key22": "4h4Jgg7rHxRsYFCC98bC619tkpzmbWNYoWyVW1XtPAZFKfMmc6sntuq387BohRYNcRHRwkuUvQgyXKuj5isgoow6",
  "key23": "2f4WRXnnuTda7yVyiaf9UMkhQu4AZVZTqvgYwoAj1mUoqYYpFfPk57i9YSLoPw9Ckjkf1WrSaRZRg4n2JuaMkkKL",
  "key24": "2HCyQtFNAmhCyDSxGVFHRozt5TkpVJBw9TnV8cnDgpxSZ34zbUQueu4qxb8GRykVP6Q5rT8Sp2atvdZRBj19hDD6",
  "key25": "4jZypRLxLEdYi7y4bEVK9vx2F2qidjGHKWJsPy1HSoRnVod8KQ7aQEbzAzAikfU4gQFZwiGbsjeepN2uNC8xdYVP",
  "key26": "3BQ77rXtyUfR3PDjcQPhS2f63395WWVbafmHgf1nsWhs3iX6EW2ssTt2rrxdHh39XmNvgFnjrqUFJampydXzb1pi",
  "key27": "5ucgd2d1cZyPPik1LMCHXghfTJY4zV9fwEdWBSrxdhuLzLSe1MCYhqyZdcGZNxeKPq72FSiyUwNYvdfX2uzDcoqG",
  "key28": "heMj7tRZjw1h4gTHC1koJWo2F1ZRjMuEZEib9WxdHYt9waEFE4Fae4dCP2HcHainFwdKBKZnHw7uLJtfnAZ6Do6",
  "key29": "3LYCu8qj79Kc46v7wRFM2vxuXvQSoTpzwJf6dxzVK67HmhSaCFGpudLrrShcxDnMLsFA8tEyLzQEHXcafPPPvGJk",
  "key30": "3ttxG4LCAwEw5oPvuGcYXVTNeYFQh53dG3iDpdphCspues4rD6zR8WPFCH6v4a1H4iZ3bMv2LBctaxpKZfViqmL3",
  "key31": "38Db3vJPmTPgViHQDTkBHXkuLCxskj37UusNBtGf1Cc68qJCaqL3CeSEKXBMA2u9JyYRXiGgBvUc38zgg2MLydBs",
  "key32": "oWh1p4gfFB4q8VbFxKRw42ZfCQrrvZfqwZdPZVtRRqkMSBdQaqrSDVn1yHDoLgqbmp5vJ2dE4LR8MmnJSWYkdn2",
  "key33": "5oBGoV6KXXE1xa2hQcJ34LpbAD2oJQUUk6tGb54W6K9zFim5mUqsrPWW3nHVMCAn4TB1QrjFGqzxCM4chPatzzFs",
  "key34": "5K4WYYWRr9WnHmo4Qbte2L4tV2cjucwcy3MyM8s43W1XEvdcYPs4FFyaceQKcUwBQsGGAt2oNkq3MXWvnN5FMiQw",
  "key35": "5QZJvN8qqWDuo6s61gxtanN2ZFMYwkAeHHi16GhJNZ46nkRSQ3djyEWeQ7MemxSHob8gGXr52BYtye133JYzcv4E",
  "key36": "4s6zTs9W9fpD1HVuFTViJ5zapb2hT5k8pyyhPUKEDzCc8TeHj3rZb7FipceQP3JDrbAiuzyR9Tcxya5k5R81F6uv",
  "key37": "g9RCsC1gWikUHLMjy78nd8aBqGBqkM88NkA76wd3hqmUbtBWqCUZ7uFsgvMAPm2Zy4zUCsfXk3U1hh5trENnVxK",
  "key38": "DHjhVQ592Xu9zeGoL68sLxc7TJKqJvDYepxbvQ2YCM6p598Ujoj6EMnkrmykcWb2gYmVNzWwJvton65yNraKhKc",
  "key39": "31mmfcquF8auGnCf8zR5p5sKXoRjM98EQAFY89Gr69XruZEaKS8jkYZQ5QJjgzUVrBa5pqAHKjw16t2whq66fbK1",
  "key40": "fCznsj8b8MjmLsgvDJxbPqssPLrLtq6DhCHEGSpuXpGSMHr8mYJGApb3e8b7dktAcv5EqKJkeVGaDfrkMtToTjP",
  "key41": "2DsAVAyt9zsrMXH51xMtbxMCWGkcQDDksjmZTAkG8RYqvjq2BYhJAC2VBd3qsifoX9Qxf4bm81EYh9H2ifNxixFW"
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
