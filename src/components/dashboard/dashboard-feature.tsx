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
    "41Ak8oTs6jkW6U8HFiAT8pLUidkChKiKpVZK6pjXjqArwrfd9PoP8fHdPrPswLQPXQ4Bme3A6ercWiCojkCUJoTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqxkMSEZ34MyfM5WBuRo92TPNb8dmknVDAxFcifZ6HKBQmFsFevZzhFYECBRY3hvV5KsQHwMRZ7acq3P8S25JZe",
  "key1": "2n9FxWRq6PuQy9EEZ9tqm2wA4GthqsMUogBXHzQfyRaKTJ1TPzfkLYCsrC4gdpqNXmP1bDmFHUw6e6VCj9WbZW88",
  "key2": "2CnmM199CL4XHckg6mCG5BrT5EQi8jxVpWg4YR4jTp9f4DNexgPzKGoMo9EbdU9oLVAadr92GWTYfg5Z6dSaTFfn",
  "key3": "ojxFs81qBjkt1HteN2Gow2X1DqPJQS8BTrr1it65MyUZg6dnxVu7H2qnMX5rYG7pAPfcb5Q4WJ8wYarKQxxG2Do",
  "key4": "9eEmsRiQFyUZeuhPuUhkCjvkgtfehymjSADGorFWuV2DwNSRBHVq47CkDVjHWytZUcfjbdhKhUEbeC4wgkQHBfH",
  "key5": "4wwF435ugQWQj8LQhB9qspfnacdTam1iCLenSEtHhzNxgAhQeUNp5B5gZjeE8Hems8REBuYM6pEpLqREywqHE4ir",
  "key6": "5pKjgQEgFQqjqo9qJvBvwD1ob4ize5dt6janpWvmNCWp65YtKP28T7DaoL2d4JJfyAYZcVqLVNnThrGJ965HHvAJ",
  "key7": "3sWPhmrcmrrvt7A6gc7X7tS9eaaYdAuQLddu9ehtECLu6SDorbDBmjxbiTNs2VLQNRNmFGMHFRcqkaAQzosiwA7n",
  "key8": "4Q7nBAe6PbeuhX4TaKMWDW1po2pCVPRson8zt55kMwx2gGPTuJS2hEeVC59URjk5QxTHu9T3kggbqJuQH61a2Nc2",
  "key9": "ZCtoU7M14VSeLNA53Cd12pqyH14VBFGThMrJt6k9zzzrZCNkSkKxwZ7Dnko6C1bmmgquxE4DLrjpPeNbdLJ3t63",
  "key10": "cN27xPT6sy22j8boNbJqS6CB2yinggeY1vV5ftDV5J2DziNUsFDqAtuvTKxc8WNr6z4x9jeZ4y9QZ4A2g8Adf6v",
  "key11": "qfBaoe5GeFMRcBoDJa2uNEyy2c4viRisKR7cfXVUZgk5eCdy4xSNJaTxzpNt8bSr85SZprh89JYRM9cnPsm1ZVb",
  "key12": "5snKRxYRQXANoMz3gwzzCENJPCSTBLNaMWbUzULsQEQkwok2qH7iqpdMgeitnagmHPeYNP8FHH1CHbaHKC18wJpc",
  "key13": "126cjZUH1epP5KuCLJgyj7kTsxfnVVGBn4WsG4hxegt4UE9MKKrKJEVyXydah55rrCq8bAkktFqXWQFFCgUP3bor",
  "key14": "3ce8GL6ngYskB5SFYuzVwfFY2jXG1RBFoKkntN248CXxiRc1J3XHXYaFozteygckL4xPu7ThRkkPM3MxoqyBsKa6",
  "key15": "3KK4JPvBWDv3hqV5ycLywfXH4bAT3i5GzG8enV9sRJ6WVVWdHTBhVAYMzT7ML4FVwS4zzKSteqZcpVVM1BLU9eL9",
  "key16": "4DSNibaeFJXT8X52z9rfsnqUN3XZTSeboUN7qRWne2Xd88KTD277c1HDNpWt9nTJJHmo53uP1ZpLiRYYisGMujYD",
  "key17": "3yDkVSDHfXVLRStqyNffRxfxucjhBBC5jGggWNsXTfstLSPaqreKwUDrZnSk9Qvq8sXpDe5hYHNhJVsEBfEdtk4H",
  "key18": "44bDDc3BSNFbfUXbLcfJ6ofjNB78pVJe7xGXbx4tLqC28broupPbBUPShaa9kupnJVGYQeGhoPXSwR37HU4cA3Yp",
  "key19": "5fxjuHvHhm3uBrAzCTgvgaf3o7HM3esFRSsZfLmsnTj2YmEjrykkXJ2RF2vSYE4ZGxd7DdSSr6yLqbwm9pnXXjDd",
  "key20": "3ViVqRtMWq8Tqh4dCmgSsJhQpnRhQ6UfhUMAtoWrxXyohsW218w48yp45EaSDjLgHHAS15VTTcxsh6pPyJM447ES",
  "key21": "3daFtVYc7yRLPjjn64Tnwdh7PrfrWr4s6WtaPE8dLRSy4cgvzai9ayWZUQfw5BXngVf2wKAQTL9dtr1bjy1MJSLR",
  "key22": "3qFi4mWVzjfU4XE9qugP6LbUor2q2Thz8R8fvHM3ckHKa8aEcwp9qreZtjo3FzXkmTyZpZX47Fa5BGfyi4sVYuac",
  "key23": "aiefGuFt4q9o8TFGxqNNvs4QXj7vaXRRFsa2kvUQqstwEpKWfSKmYtEttKxDJekwtPxF9QNTjdvvAmDVT373SVx",
  "key24": "51NHFKvcatUcHM3wKaJkUw9Gw86iwYvZa7NsJhT1JhAjxUqwhq3hiNYmrY2T1nGSdfpZaPJ38B76WYyk1Md5NpLo",
  "key25": "3UfPskgJ4bKvMBr3FcA416nk1uPdsnQxHzFutzqvQwxENG7DGFcpXVr4DRqs4NiwPJP3fD5RSQirHGShuJLri453",
  "key26": "yVuvq1vBZjEVZ3jRKiZtyqspQrxvT31mQf9sRveTPHDYw1azkHvEfDukw8NXsofbWEVVocP2N6FMNX3DTWPHZHK",
  "key27": "2NaWz7mMA6nsKnGrcCdNZuam5vzjZAGiQ5GiQ915Q5q8eHCmtKoecppEV2gfa27cMCkDar9g3JGT4WMqn8miu4Tb",
  "key28": "4nzLTQboX66ioieMbom3JyxUtz7pwicWbRBpJxFqc8yr1QwnaBy84NZA2hJ5kwUhUE5ZSUAwkPyuYc6KQoejMNc4",
  "key29": "3BiaJF9LEwmVFzas68Fao41tW8NuMVfzzxpDS7BTsr4ybK3RePN3L2ULi9Dkz3pTnYh9vxwa7qhG5AnsFJjy4Wtu",
  "key30": "3oEA6ssbUbTaMbUQnj5GyMYR8fTvijV4coETq4VsRpBMNvX4LZf9YvCyLaHsjb2CLkW8iE57XEU3VyFB2CW6Gfpy",
  "key31": "5zBPVBQrLpXuPNPyPUfe7rY6j5cJHoKyyZai1gDwhNExAzN3WAqYgdwn5FYtjbth5ye6HBTHQXFpt4svtEeDFYpJ",
  "key32": "21oeP9P4erzZ8Ea5vn3eGpkT8KKM2awDBp3D6sUegYHyqyZetp9R1ZGSTBmMq6XbGSx2s2nigc4HwPepUnab4pso",
  "key33": "6exiJc2peX8rs8tcs6Nq33xyynRHzGDaYMT5djXytG3svknrDnbMVkEm2JQwkvS6c1yVxZ9baeNqqWLPQ6scWRc",
  "key34": "4UFT9AMoDhUQWop38MvdZgrK5DuQ5Mp743QnjPcXfysEqB7Gm6V2Rmepi1BFc9vtrMUmkhNxgWK2Tft7nHesFEaR",
  "key35": "hpfG5QCowWBcvxGtdWcC1LV2Vg4rJCXnu1tq1hYcWkZBXZtG13yw1vMA4RjYfersszexvFTCjoZZX8bYLvVZdNo",
  "key36": "3yV6ixoxkBqNgcu4A12VESNBt7HiEk3yctDiM1GieDSxNxP3vMrcJE1eAdN9j9juBZPBZxGJtVZcPRnM1e49fpec",
  "key37": "5zu3DxWe1kddL8kLS8ZerCBrdWrYorVGKfTP6LsZ3FugHNsFcJUAJ9DaM8SEfzADHMyojTpo2eSGWjQ88ax6puh8",
  "key38": "3gYHw7caGiiaEkmTcjmXj1v6wvMAirC3R4n1kvhDDRfdRiohREUHhyexJDjA4AD1u2vzVtiimAguphSoRmaUC6Me",
  "key39": "2EGvejro7TBHCGyxxVYYBign9r9S9kAWSsWHB8tXvVxUz21Q56A4w4Jd1thS8X2tr2WPxEKLXohTFDUCyy6xCkwp",
  "key40": "2gtbnYFKqpK9J1gHPqcKWBJiucZZFc6MF7yCQ45RtJrSU6h3XXNdXKoUM9bixRk7UYJxbzWx4oFYE7ZzfPeLgkHt",
  "key41": "2bQQdUgopczjLH9pt3xH8XrsTrfAnUwTNcxsokbyYHAJiB9g5Q9nTP8oxBFgPKjTJcXPhqGN7KGvxZAAJYM2ooXQ",
  "key42": "5YSJgJhAjEACEmVkDo4B4y4co4HUsQXNt18PLqWD8dq4y6GsHzjrbPxSLq9gLXEWSzjSuc2qUSR5gU5XLZ49XVch",
  "key43": "64LQ8dem951QNxTGseAGatkdUL6NNe8GxoXdgPSph3zxzhzDGhC7NyMdEXN1nRrADWmcqW7rtpFfC5XMvSje3sLh",
  "key44": "4dYf8irAvy8EYT7Z3YgAiyEaEVDozdn7P2iSRUmr1TN9BLebCEN4dfEYnUPaiZWTdigQ6f7gfe9urNsCTFxHQLen",
  "key45": "3wfHTg68ouXKi3XH5i98EzKDKQGcMtEbuhRctUkTCrP5ugarkTz1Fkwh3V8c58dMaQKreJjJz2p61RQyxx4dhRgm",
  "key46": "2sUb6ej62gUYeyRqYiW2HcPme7QYC3JgGYxyfJgiHFBur54EjXjM3ECYhZVWy3BsmfvZ92hgzNgRWjeii63PJZ6W",
  "key47": "4H5xmz1nLHdn2A7JNGdFfVFUasgA7kYGTeKiofojBrD8PNhoz2eNsov7KZ2yJAprcnycygN1SWjPscRsmwVbBXDe",
  "key48": "5NbGNNJDYGbkCcokf8JMzcZngMhn7nS69z4tQvPcP9qfNoB7YdprgXsMoVPaintkTLtBpmRE9KUBEcF1WCckZDUe"
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
