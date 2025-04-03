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
    "2uv2SsCPPk75a2oENG5SogRd6QeRJTiWnR7kh6pqrcN9dTG3cv4fgopaVKxE31MjtLxjtKBK8jAwHzXWuJRtoTxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpJ18eA1ia2AkzPYuSmR3dK7J5Qk4ZSrZS9rDRHWUCVJz789pUY8caP7qdpa97dRRRp8TVZKkdJft4gkWpVBxsw",
  "key1": "zScRxKtt9H33w3AYSdqMeEkxpJcSYr2rfb9zFH1wgiAkmALMxeXe5Po7hVGeaK66QMF8wecofPsFkpLpT7JrqmW",
  "key2": "2zpoePurNopnw2WFmwAJ2c78HpQziAhjdUuWPgcEy5BQ79u3KrtHLdei1f2pu8dSqu19G8UvEcjsif7bYo7JZBdG",
  "key3": "51j2hAZ7UFzF7fmcejctZe3Fa6bfAL6QciLGM4bhQEuaj669hxhzsTNDLrq8yNyEp9yGA3NikT5RWQnQPRf2GQMx",
  "key4": "2gKqdDzdKF1sAPRFf2EeXA99UptuTtAWEDo4TYAG5fdQEjYvXovL4DYY6QP9BzUbi963DriFPEpJDeQLNecAwKYA",
  "key5": "4H2h5wmeToiZQbpcDodGC9VcjoMArB4C5Wm8KMGYdEJuc8nTSAQHCortWWQNBqbj3hxeD3atBLu6A3q7kcLHpZjd",
  "key6": "5MGCqfd2arXtfa6xiWRiedEDrFF52RhNPPufp9QKNqaHXLjXs36YucQQPpjNkvMuZiuu2niGT1h4PsySspjWLuZ8",
  "key7": "V17cmZ7g5MoiWsnmrJ2VHy7NHryZG4CJSHiPRCX7ETsSBbya4244FLFNLzf4Q2xLzfo4HrigWpqieeEQM2mY5tt",
  "key8": "4xSgZrajGEEa5AwAcghjkBVYvYVaLfco6rZuEyUwwRdSTP96fHzggKMHbM5ye4HZNLEEqnB6VB2mJEy3XKYgE3qY",
  "key9": "3opwETY6psQSxVp7RfzSTHoBkVTqaRokBYv4Z5TDznuQ2SRWM8fR89YnqcvEVfr2hvT2D2Xac9Uc8wGDWmpR8kPR",
  "key10": "nm22E51zLyXmA6zEzY4pmpt896ELHiVgnwjYoP7LbVuVBhSEukbUHncYiFB3sGFwBwAdHEUrL7Kxve9pzwkVbH3",
  "key11": "5vZNHXm2hcB9ujnHJZUMcAL17bHLRJ1sXuRHTsNiVhDEiGWfrpeTo4kLm3bpabxr8yekyM1Zr8EpUkpEt59Y3FeR",
  "key12": "5dS3vaSUh7mdj6Q3vmqBZYmADALzNTDVWVjQkysxGRZSbgbKUwzUC4FGzfVEMreEwJ6crm4RS7QB7qGRyWgNh35L",
  "key13": "43fDEkEMLttdF8n3AfgsoqkrW1V8UyArSkCt5Qc5eXZiSpvW5YSGSeQNtAbt92qBxV3febLNGXwgQkFkMaTWQqg6",
  "key14": "2r24mba54hpYPnYdbJ3rMGX724MVfNvJihDmiEV2QmPGaB2N74ioX3bUByHr5X3Yud5gaxFWLrnsgQr1eY2mYoS7",
  "key15": "5AHNPjZZRfvh1HdEyv19W9aMWywcBUQ3X6qomx8RyBcggkgsa2KH57xiY17ns9KAroSCb8WHwa54LYE5XBk4rYKa",
  "key16": "Tvusbt1B8FbfksSEmxJFzbR5CjXPB9ChS78WrjAQwcsboZjpwjxarr2qVHYLaqiyTJYK68TGQ119RmyxKoXW6Pf",
  "key17": "5pJKjiPHdpmnZgrSyEmyA5pmd1ZUaGnYsv8YUr1VSBsSPqNhRif9wb9x2quZbGSAhDkpVGjT3QFeoNmNYRFHTgCA",
  "key18": "5ZWxzX1PuP3tWkjsdHmGd3bh4hXwaQdz7FaHqukHgD2BnoEbrYdWsxDQLaLkVmoKLoneyLkfkoXpbnWjfNeucA3V",
  "key19": "3vJzjG2DULahxhmzf2q5qpJDpqgxAX4kaCzHnPiryV41jCr5jk6KXnnrf85bSswKu4DeyS5uDgGVHdMswvej1Kg9",
  "key20": "43GsS2JGZ1z9gDpvDYcuFGX4Pn1dqcq8LJwKD3WohySiT6MADk55SYBZKKpwEw5fFiknCA1fXoZsGcCqqtZWJm7C",
  "key21": "2EAy14xfENXysWwMneaaH24JT7c7K3AWqKgdR2XnE14Jn2b48o8rqo2mSUaBhM8ungbqRc5oYQkBjt4Y19JpWbiU",
  "key22": "4sTw9sGw4usWVxcQXd4Zvhbo3xyHHYdcsKckURdypPhoNQjDHwxnT2CKHzcrZTD6wfZjvGsEY5eEZRQFrhCoEete",
  "key23": "53qeB4tG57tAoXTseJntxshobacLga3EhqtkKhSdaQ5aT2k2ivkT9qADUF5pKDjb9AXYcPyYDohe78A9Rk6DnopK",
  "key24": "3ZAwybex1o5eZ9ySjJEHTKq8pJrtwgzgNcDfeAjxRctK4JKQE3yJsMfELHQ6yLHMH57vk2hicA4EvBS6pokHqQZN",
  "key25": "aa92VfzkUAR5fiDPxMg9LpjCPJq6PZd4P6ogRMb6yRHGbxVZUQpfPAhH8eBbSpwiDaJGevMF474Z3GNUY36uYhA",
  "key26": "3noK4195FvJrKQxzmLWCvbUQcYqEu3hmjDsnQhozBgLn3m3rKpMmJmTweQwJ5u52J7DVyKJP4MrPQV23FkfAMbWh",
  "key27": "2izKJozXYLhcZDiDbNRvvAsxZTowiFBFJGHbifTumGTwCfoJBDjeKFtooRn5gJdSmFCSkMygYUEDKMStW8Dp4is8",
  "key28": "aLTyV1XMGzJYEfNVjuDfCxL7n9sTKxyoLr3HYUJyTjLjCcjiYntq8HxAe8DAjWmvhnVExH2J5sVFvw5cDaWUzqT",
  "key29": "4zeVhrupij4YqcaHdsApzZpTuPXy1cqpYNSEZFzSrJ973gDkP3nnSkwLmzuQJtRkPHEDcrPMqFRbnRpNcyNWCT9W",
  "key30": "2QSwi4f5gEHEMR43xUpz77ewqAMQfvCmMdkXvJtZNT6ackdtVFAdsHzsZp8YgA1baUXbKkrW4GUHv7ctNDV1UzHg",
  "key31": "5mCPgR8KJAhVZvqdBvd75zjqZeY9TA9HXmXaFh4N1Kr6fRiLvStojYHNqBWJqFST1Hnx7F52gXRrnCBtAcsJomCQ",
  "key32": "4LxA4LQ4zVW5soLsruMPB8MNgDXFKpeQXDXurMiBHjHDCG2DB4uqPvfJMKCX9RqNPCByiig7rN2S51ETxhbX6BwZ",
  "key33": "63r9fFEY12ZJFhmrHGko3MzFpPVUZ5bxhwAm3tQQNV2iXBg9AuvbcMDu9iaYu6trxoUWNYjfb1rpz8dUK4tAGaih",
  "key34": "2cSNT6iTGzEzSAjqgAcNL5oXtQV4nFRs8HNRdGBMH2mRTBwVvfjCZSBBguj126NA7Vm2CX21WSPzPYzYeJkNZwTv",
  "key35": "4hg71MyGF5QkYmeu9ZQ7X5pUM5d4h864mYUhW4zCCDJJLXqrMPvUSAp6bXXYkCSG1mGZyUGxAjnn4PFcM3w1feTX",
  "key36": "33zwGDRvXx6QxqHrxWc96BSRL9zcNaGVuGaAivfwHiY4bY4NyNQ4iY23FK7MqK5hu9PJGZXouWokZiDb644jBQF7",
  "key37": "2NgbgbF72oED4FArXxnWZZ7JR3JurjoDv1K3nud8LNhPMqiwaz9qiweK3Rk3AenVrafpWeW942uLvVzkYTfj8Ku",
  "key38": "5MFkW9iAg38AZ5HzqJRXN3UA7gNmcVNrJAqAmLkH9RVJ6ssUhhisR4UbQgrtY8mEmDt4zd7NfCWHSJLsuYdp3LFE",
  "key39": "2eK4ZPHHLfkX5GRxpfcJ9h8E995n4txv9zYjLfNtBDQJJAdn1FapzGEADm2NhMg3hjbCCQ1E7a8uXyzotuhAmrw2",
  "key40": "5cDEr6KbzATqPMWtQVedGCBoMw8NwrjZcoREe8AsPVSEbRd8o6FqAWaHV7TyRHufzzQsoestyLaVTBfqPdRaHfe7",
  "key41": "4YVtFr4xssaxsnPUgt5c2mXhPBzNrp6w2rpqbDUGkS2zNXxjBp4Lz5REBsaNWBbopJJe8vpdTHGavTqRBniUGewY",
  "key42": "5dpuhS62xvwxtSknwz75sZS9yAF293hFfXJjF3GvMXnivV2PDmFyy47Xf2M8XnxvmF6pznVGDq5Hg3H2RxfFk74V",
  "key43": "5HnU6bYNmWHCPsSCobsoTgTnu1gH1dYUUHneb6Eu67KCrfah9e989K2UQ2hxa9YZVbrSc4trXVf8EVXqxTjQDPZr",
  "key44": "66rYvJmoFj564m7KP4QzmVmBUf5NxRnVztLQr4UPDKjuzgSmMvBPwGbqAbbwiRtraxHRodE1YDyZngDjn6njAMPi",
  "key45": "b7fbSE1DDCiqAWjvxAKSqBFct1NAc9GmGARrNwr9z5xq7g5DKEcgRyEtCsUhCgCELtxiicKCASsKQSiNm4iQJge",
  "key46": "BY7qd79C3VCnnzgYCZshZ2tQ24UdR6qCLwuLqS9JAJfrzMkBSaBzdZf9ua38n47CvVfPqpGVs7sMzCF9xEeGkjG"
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
