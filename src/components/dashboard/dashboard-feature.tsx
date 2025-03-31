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
    "5PkD2hFgukmwmtecachWDqTyBwTbYwei3XBQhTFA856cArWEyoC7VeDYPtBeXMc427Kf2WduoRNADPT9kmLmKbtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFfMLChEpGtosYN9HQuVFk2VfFMefSaKmucXQwKLpzLVxPsQEGXzFz4NeivyarFxqSdStPjJ2HEtMucAegRa1VL",
  "key1": "33uAotp4QdjesjxWg5BfEF7YJa4ssBqFXxQAgDcG2m5ag4QDnxEcb7YKXZbZhoXS7QUB6qnhcuyxNdogj9pdYQ6d",
  "key2": "4K36wUVXfFEoevVPL2QDn5bZgZ3LQe67Led7oQdNmSaPnvqDpro4ksKPZa9dpKYSp3J25RUFbQFFYE5Layc25Mk5",
  "key3": "5WcPrQu2Y9EScduc5ZKRJANWxjkUNr4Nuf5skFAJZQ8tA62Tb8Qpb5Cb7AWzQMmRQzYqwm2nKqUDVPBCYdS31hqa",
  "key4": "62toVbL4tLAWmJEBQBqKaqBtuT8R8Uws5shD7k4QnPKgqQd4gZEhKrUeCRrX7tvFftudfwuow5wXSvQHvJsVp6ou",
  "key5": "2mNwFvLD1tcP5opxQNvA92GAq6wwd5onLgXgvTteD4VWgK2H3yKZa1Br5Y17toZXZTTt4rGLftfXYKv66VXgYbpY",
  "key6": "3Bcf18eZicDFriWmxG8cNZPY8mSwwyetRcmBDkWuLBnUuqZjnJRYz84JwrCVnLJ5RaBGSeWPE7nSm9kHWWUakPZ7",
  "key7": "7XRCzNetQKTSqd2h43E7wNrE1TjY3TBQZDCK7Ywz39YX2zSLExjqyNKe5LrotQLVoVu2homQabkWYuXH3WRmtBP",
  "key8": "hbb7ZhdqUeKD3pZib4o4AfVZ1W7iNpiwXpiABnrd5ubAGgW7jisWicgnhxwL2aa8WkCgnEzE93G8gAvqqREU9Gd",
  "key9": "46F9CCGpvYsGWSN6tntUS2Ge3XEBjjunmotTFcUTUDEspeaZvnMAVa6k8A9QX2gvysrkyDezKqWRtWorBRsVcGAY",
  "key10": "4WRUV1e8CR1aopFqRNJXwLg5z4eWABqpi7ioiiv274zESkemX9hw5YcqfD4cx6px9J74kgotPX4BZigEpHMR9jwH",
  "key11": "5aBSByKRgCgWcEDb9HnYx1F2eaRee1rDSW8CkSjjTmh3NNCDFn7YCSHbRWomcY1Xrzf5VFsdqLzJMPe3NW1jkA1r",
  "key12": "2TrwqnkS1rY8ZTxSBoC85NmSPniqDSfdyEbUTtu8vYcYZsBJu6p8A8CnExLnot82paeEGri1h49HRegQapdAboH5",
  "key13": "48phUexjvyiQPk7SbmDor7GZy31F1jCsHtBykur7NuQwJjtmSF1rSyY1mpzHDMvuk5FA44k7U3y7RZseSpqvtbhg",
  "key14": "2MxcZgjnTX751bcKQasRNp14LYtr1mmWJT2Xh9hLAtGwBT639PNqn7xjkhpYn8q75riCUHGvxgXjwreiDNPef1S8",
  "key15": "5o3ZTNA2hRv9k6FQmGB3zSzfgpN1dxBWdhLFWaMcWXe9sZrhYCrFvjq4EjGALQS5VEnRrLGx7ZUNVhwXqJ1Pevg6",
  "key16": "4a89RKaV5mJKGavXMsr8uuwUudTNSrTLkprAn5fivvxNSUc1wLoBoZogtqNE2iYEQ8Y1inPj2mM3Vpge5tPtLs4W",
  "key17": "25sDPPF7cNxyNXDQJHEo7kyVx8Prn4NZRUZZZJbgqfbxWB2pUUHjRoPuH8gP7yNyzipeRoFCNebzPtB79azF6RnF",
  "key18": "4xxDmWUdBQtXZnh7z5trKHAPqmybxeKTYkh9RRxAenqRVeXTSUoD5pBp9pSXfM5pU7rfpjc1z3neHhyRgLPhp1tK",
  "key19": "3UiXfc2dAvdY7XBonS8RNrBjVhJQECxczgZHUGoqkKxbdFuLqdqJSBmf1ponRk5q3xmBRHKwLbL89KPt7acMhZLe",
  "key20": "4z4qPa6c1J9oYBvTkXW9RZbf8C82TZ3yZnmLEuSNBFjyNCbu5GNRWbJK7aZHzXzrGdEY679j1vg1ZWd1pLhHWayT",
  "key21": "4EzSdPi2kQmw8V15g5hMVjQRfghiAY2q7WKeCeNGjXYwPdzqBkomuKTbp7w419ZxFA2BQDtUSfLaQB1nZSqP3T9P",
  "key22": "2JPCoi2LabfwVcNHs2r3M5v1aN2s1b48H5XyrvuG1eNapku1ibkER5vSf7LB54t3xnb7bSmWdwpEioZVzt38khrx",
  "key23": "5PReDtryjurt2Kd2w7tTtHbdDGahsSaEkbXBsQ8hxeNQy2rSUP2aFRcic7NUQpnnwApmZp1vT1BWM5hbmNTErJQ4",
  "key24": "4fdRVWrMtdMFz1H2iUxK6nm1X2Lya4fTKHT57jrdrrfaGzaDpwuQF2NP91udyNMm21imqdDyUs2ZbXhmmPR89eSY",
  "key25": "sswzQjKYJYqsdQtKvTrFXwp1o2s6SmPfWB6Qw4Jo2LAfTaVoXp9izWyTkQRYrg5zbSUGAj59ZhkuC329xvZ2LWM",
  "key26": "32nd3gPk2P2FkhsYzjaq3YbztqcbtbPcvjqd5bGVmuSGZjeabv86nutwh1fxgtyxU9p7PxohcFwFRNkbZL1mJNEF",
  "key27": "3cr1VHFq3VKrBqBZniWZSeX9zz9eNcrtXnN2mbYPkk9ECQD96UgdVURvdUD2DE12Nn2JMjHt7q43T62Jhs5spCbu",
  "key28": "5yCq58TNDNRMYhqCnEAZHkDHrNUGN8TapTcMh8VYX1fx7dCV147RwWFUhN741BZQxdhHZ1pAu39khSMrMo8KYrgR",
  "key29": "5TNXpbAcPwyZ1y47aZsFsfSVk7gcg1wHtB4mU6w4ZgQFTYCns3erJXhiESXVfZPsEVNXgji5Gc17vLAPxBoGy6RP",
  "key30": "3zRWCnymA1vSSakzzaBpr9jkNxmqJT7QsV7c2rPdixATQGh3aaVsxymo4SBjHKYMvNGQFhVhavGigbTnWTwLD1tx",
  "key31": "4FQV9yC1RYJVWAj5EQ2q7ryfecKCPBvWdQZEegSKj2gW3zQFtqsbpNWFPXP1hibWwEHzDRzPHr7K31RDosdCnqXk",
  "key32": "4Czt8buwpwzKZma7bpRStjo4xBKt869aiD31LQzcGRKKV61r7iYKx2zx3gwWkoA2moqRiWZCFYFzkCarnAoUmQdy",
  "key33": "5whYRoNYvKg4kkMHqzLXyDbw7oyBTgVSsRyfCBSMNPjjzGCABpwLLzb9DPMMQbYxadgBRaUQ7F44iGvVm4ch81LV",
  "key34": "4Ehc2gvg7dsWgVAuNsSHrGau4X2TBmGEKAU618eguYurQ8VqYmFNm9RfZWxJcTFjERidZSy8S2Bn79cmZKByvnAe",
  "key35": "cAdWA695UbMCEUJGSqLj5Xq85ENcnVpguXqkUh8zX1Cv3dxC7Vs8Z4oKEC13mu6rPV5kUd1sVSaXicRqzkoztsK",
  "key36": "4FWXg7Eoe9h399f1qb6Mjgo59xpK8cdJdnqcv7iwi6nJ4qRieBZGzzw6uPvC3NmwJ53gqzSuDoBb193oJEopR6WD",
  "key37": "3xBp5opJ5GwweT9cRSGegMeFYEqHErwJMYSpCbw7U5ymfHzSZ8bQLG77ZxKbieNhaLg4PVL2rzF8g2uGyr2ss7Hp",
  "key38": "3WcAXRHy1ZLiDhvx2rwCbcSFqfstVTcGWeUNxkRwE6zMdf3iFr2CjukjswohVxejdDFGepEMkTywzCB1LQU8viCD",
  "key39": "5vFJgVPQYR12qon4xBdvKqifyKAQ99zDKFksr3YGWwviXQd3EMxCkZSxgkn7j5TzG28K8GvAZ24uqHKEYbWDCSMU",
  "key40": "2TNurXhjjLjQVG11ZyBWwqjzL3kzVeZrYRddETqNYLL3bGVStKh72pjBKJBtbuVA2BAQZJ4ZRZwX9GhwBdoq4ESy",
  "key41": "4tgtyWamfKT2m5C7M2gPJ2fKo7dd373vSQJ2bjB3jxB2ZJddTqXKfc292kBctsmwnLsdBN4QqX1h1rkcknL6V8CT",
  "key42": "2rDKi46GcTG1yiLjX6QGm59fJzgk8ykHuKuZYBaPnopiomYuCxnhjTwKhUc9vi2ACXjUuL78WDQjvxHdomerUDNk",
  "key43": "4CAEXGV1P83bwdYZKxopKzTHnRMMbs4LFoWcsTNS4y3nDvVLKeBEwZNHSLeUnx29bnvw7fTjHdAy3tWVH3N5Pom8"
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
