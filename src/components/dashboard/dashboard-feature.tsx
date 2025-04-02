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
    "4A1QZDenTCGyuZ8gNhNjHpTXwqMaDopoXtEXmahGfR2nRkE3iVf4f8yPq6bzLFoiFh5VkkE8JUh6T9oUtvhekn96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3xARTPq2HaLHL5pq526UHcKQV4E3sdnYfiYZsYdNsHiCWkYTJgMC5ZJ45e5Xjae1tne2BhYAefn9Fr42jAa1B1",
  "key1": "3TSkrYw5raUoSKBqKPvJjj7ocopZC5BkoHXq2Fm8K2i79BezthyKmNXdbkcHYzoPqVMpWMcnrS8Ys8EA56B3Dkzr",
  "key2": "CPKnYvN8B26z3oyvsTQbMuRisoxAsXdR7hrocex9496P1TVyECvGzTEteLixnSzKyDKXVPPJx5z7aMjnRKekAmx",
  "key3": "5iAEdTKPy6QDNcKoqREP5JcdPwgoT2w2AhjiUc4tKaVd3btv1Pb28MBAStJ29YYsMvtRyrXpaDU6Evz5BSrX3SVc",
  "key4": "1fib4QxbiAwVD4BrUPxAPdCEzJG8mk3f7VkmT2BXEYfkuA4PUFVSDWzgGWbNZMK4PKJuwj5EGioBfi12vXMSHb7",
  "key5": "3FDYrhYeZJU3on7a9kx84aHt1qpsHR5LeKARqCmkWnfFmQyiTFHFtrMNmPG6Uk6FmFvnVmbJL1Qg9rPAiQeacMDu",
  "key6": "4K1E8cuaEdyJ5rUSexnijNrs62v3QyZgXkwwAocQ8ijXeJZht2xc6PRvEB5b8S4vcGQiTHnsqXGVGCX7Ru5Cos5X",
  "key7": "riKsE6sK3ezjUFeLbAdeNncugMQ5FFeqjMcdd3QtnEB5BMq9X971xxUccZ6vrRHVA22L41XhbmSzW1BCmct25vo",
  "key8": "2RPo8QFxebup4uumx1cbCH5FXYQwnrfVjeXdQ3ZtLcVC45a6CE5nrGPCFczzLtRXMk97A7FAyrqMCt5MvMK7Lqtg",
  "key9": "xvC1MnuzHftAR6xJdZZxGsA7Kvvn6fPhWUAEmff1QNLR6Bia9tAkrutaLJ5soToMQPvf3G3WpAA29V5LTkBPqGj",
  "key10": "5DE3gjdQUBHhN3rMV7cqUR2AzN6s3XXCR1bhCaLA12duUjJ3E8KGggH3tKQidNsXaDeLsTidvvxkCkP98tmv6tRF",
  "key11": "42ka2qd3sWwpByJQsYnCckZmKyKTvYKqNtTNGpX1kX3e2iuyTCEmpFvtLsB5TYTW5YPLGsRs2E29hgu2LnE1sMjD",
  "key12": "2bhg6JxrUHM4uWRnHu84aQXm9gHf37Rza7pjzuRJwniPaUmpukfApMq7WoxbtjCMT3AYsVbPh7yFhnwLCuZ6LEtc",
  "key13": "8YkqQRyNTPT6Ahnr5tPGpUNrQMcqf6EnwRg9tc5kfk8Nt6FNxGQMXhgBpjZVX1oBudr8dQApqWcf7Bn1MTpGCKu",
  "key14": "2gZZay3oTEb3tNw2mkDKtfWgDaa4pVEJT1U9Sgm4RqpzLsgHRkK5NSsFnKmrWCFo6GP8EZfDUQFuCqjsNVc48mG5",
  "key15": "3RdJ6t6V2kkzMVM7GTFdwbRsP129EzVgTTNNd3cP9Wx9Yvc8pXNa5b8x5Lxp2zu7FnR5r2v3Pznq2aj7rYo2eCxH",
  "key16": "2Uk9mR3ZgSC89hLYJT2RAob7cvxiSTpN5reZZfNdRm9TgTiKBqLD51QPveAx3WRxFXepwFthufjwnAVGyZ2e6Sxt",
  "key17": "3MVb7Lya14TsrNoBgDerXqpSBbRWJFScS1bgWDHxsbuPLmhuv4phLnKCZimuDFmbddHKVafb6Te4Gjh9Dvcd2iSA",
  "key18": "2pz84fADmvJVjAbGnwtXFyssmSVk8xETc6yxP9sb6zWxCzmAPfJCxQtsg22GDTnVh2vQFFNaFjuCqqNWJqE3zVjy",
  "key19": "5WmSCo6AjhkPm62uELVH5M3ccumRaQqA5jELyQJDFLnTU9xj8JX9k37vGT6GMaN1irvgwbxPzqpKq8GL8xHWUub",
  "key20": "5YLw67ojScKKGafTo5yYGdv5CktckvYjK8syR5FE3zj8xdwQEynhgM6Xtn4bJwsJBnmuQo2d6niy9KDFdptsd5AP",
  "key21": "3Z5v8EPzcBFJ13FwrNdEHB6nyGGfet2jmuMyrdQsc32yY9sJcv7ZztmzDpMi9yqofW7r2LxvaRj2BDaV2yCE26Fc",
  "key22": "4Erp2Skr7QcVnUqaPxuZXX16viw5tHybvwVrpoBS84t4kcjba1UcgNnwdWa2gNav7jETtALKzajVbTxbGbGcJaKo",
  "key23": "Dh6xifTCt8Q6cidHq9fnUN3yKvKxeBfeo5SRy5fQcZuinJoxXhyazJe2mgmGccQMkbDWC3BdF56GdMJYn8VbHR2",
  "key24": "V6vxiGKGE8YDzdxmVw9YdZ7jLkRHNB6SWW64XjJfbfwoMVSWfyswprXq5HUEocV6bsrhuzVtrXHeYD97DZvW7vm",
  "key25": "27RtugeJQprgzm7k5hy1buLYht2Lcx2Y5nGWg1vrr8sNE1hJBoJ92E6jhhZ1E1WKWpMEQaTDJk1RLh7bsadGmHfV",
  "key26": "4MHrqg355t8Zs8mtvZhYF455YzCqfKYHx9CEMCWgeMvVr2bWEEsHNU9fXiWGjJ8nMN3UnufqCLNgr2ApKJMBy1X9",
  "key27": "66mDCtcWLGc133Gz7pFCjHNTHqEc6dhRSJww65Kzvbn3fR6WaPPtNh73GQ8dApfPvBgekgPBprXXQszgqWBgeNfj",
  "key28": "4LQUoB44LZDhgmM8qotMN4qTUGFoF4iKwz8s216sULXVJCCGHfxBsxt2FkqtddCGP6m4Lap7rHj8Nq7ZPPMftxPf",
  "key29": "35PBveWQkNYWZyaGb69timtpe5mGBbN5QZBS6JhzXpudAsirXthdoeryDPti1qun5RiKghDLWsJkRNfB9E3Wyhsr",
  "key30": "27qj42tqntG7hSHRGMXDbz78YbtuDT6pfJuSnGjfN7ZSTLJh3dWahxC3yH3LvFN4r41iwmvvtkikBNTpfgLuifZe",
  "key31": "64UmybJm7NpmitDcaUTqe9yaQ1D7ip87JP1S5F2QX4xWPMmSibEBSngU9XURwQN48RDVHh94tETow2EahzW3UHma",
  "key32": "2FgsR9pERNictLCc6YTKW8aGjfVb6e1Q6Smhd4u9Wfaj3VuD3qFj4Bidwf9FYxZAm4rjJkFD5HuXATKfSQ58CmvL",
  "key33": "4hJFhaKmwkyQ5TKkcgxFVVyeiT1trnT6Jg5T7GVfiTSrPkpD1qjKem3ggYxvZR8egsVF1CYWpKEDi7V7Yecg9yDY",
  "key34": "4hU1QjQLpTKxmziUojqBWJg2JCjBgGMgfYp9thb7GrZSmVo9wQqqfsTGVGoFg9FMaJivg6rKEa4dnYw2zn5LMUkg",
  "key35": "4qxKEtkE2DvX6LcwYKta6Gqm1AsEiFFbaEUsHxNaDTBFUekNVgKEAg3xmpdu42rEYp2xbmWkXPvfAXEq4L4bmCd5",
  "key36": "NmpzYfQtBFcsUNXH7AgGSSjHCyL9ekZ8JZJFmx6u6G6Xa1gTsJtXR83dCUov993HR9gTGNuqmbVLtWg4n2qDbUJ",
  "key37": "5JDkWhBKtW7mUsRCU8Ms5STtLYRKwJMdxagdBjetGb9XjGJHwpFZouu1xK3cZsUXuG5yLzWFweqsbSLmv3pA9HDY",
  "key38": "2StEEVdYqiVQMJ8c2rWr6SAF7tUx8fh5Fhg7BVnr8aqU4DKcYonBwMyBrgrEuFQJ5qeSRAZwCDTHkwNLT9NJ2WPM",
  "key39": "3fB7D9RmShsYWTTjAdyCdWfxsV9WyDESzVHddJBecWTriZRrAwYqYpHbcidYZjmNZghSftRuNrcmqzgBbRM39fGW",
  "key40": "WisPdDLaNtnZwDj9RkHM3a9zjzGMfD9q5STy1LS6d5AHPgBo84LirreRiEBZoYnyeX28V1rQLfakJxdmEYS6RWS",
  "key41": "5qxGYjVHcXxYmyDbqoeHA65dWBYmxve2tdNMfngQcVZrBfSvqm45Ue71Eq4w572uBAXQxioZt6Z68mapxi9vrwWm"
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
