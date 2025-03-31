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
    "5j2mLyJK1sHmSSLgt3c274JH3FfZLvLvCVutUsppPNowegRCaAhpp3TXiya3fB6exQXp6cy2526x8CZSMgaemxL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44sq8M9K9YZa5iE8MkpQfZuRZVVDzZie7QLPXaZG4SU95J1BzgsXjfGvZh2SrrzRngb7BogvMmhELcNcxnDwNxpK",
  "key1": "3rhucSAUxYqPDGghQeFssautGau5Q6Ar61UYs8zwckVgtP9ppV8orAY9zQ3JTAkMhzR8VC3kKpiMkyTb8ea9emsX",
  "key2": "hjwLmAWyfuDH7i7x9mzkJiAjPaaLBTKjpr8NegdNj5Q7bAqAbHd51XXN4erYa4vfodbAFLXZgjqJz86a1BsGtJn",
  "key3": "3F4W9YJH4XqwFDmuZfJXGzYSRMf5xtGjUeHQmwQtV1npSTJLuvZcmC7N85dLkX4MVGmQ1h5H1op9zTtaCJ6RjUgT",
  "key4": "xRf3nLi6KiwjXGa4AqeSjR4p1U1nRVg3a3oRtP9LU3Zdp4m8RabYxTcWWRTm1tV2pNfgha6upLMAC1W7XJnm5UM",
  "key5": "PxHK7GUnHHKajKBrELDRFC23eb9qcFxnGAsZi1pdYuy8kVJZuH1CzX8iaDVmiQHVMfxYwZnGVrbnbNoFtoVYNWF",
  "key6": "2NrtcE2n9uDaLnVenwb3CMZ9jAyMR7ic4mGTpuFrXB3uJsp7kC3pww9TmPqr2ds9YiAh3EWbau3DCLbGJYb1HfW9",
  "key7": "5sXNka9jZND7Gm5S2ZNKtVK96emEQGxDEx5htR9bCpaHdY6bmAtV9Fog8gDgtoKRfxvbzWwfAxAJeeRGQUcgVtjk",
  "key8": "3PLebKFfCQ5BvkJzhYpvYUBZwd7Mxik1iY3vsytAueKRuGKsrTY3TcdTjreiF83XZFxs3jxvHEawwKS9Gq5Cchyx",
  "key9": "4CkoQVoVSgfjyLYzie7sWxJxtYoCUx6Xvz74XxhyoGAGVKFveF6rLUepkj6rumhWvitzx39jsTALScCQcZQH4iJb",
  "key10": "2uoaX89Bn2erzivPUakCutwa1qR2gpjLKuGGomb3Nob5Vaf1wSvD9xYLmbxim95qmPjUjJxBdhTjFLAE1feoJ1rL",
  "key11": "5HThEx8jya8PUx8ipgokzfy1eq6u7xSKz7KU7c7g7pQpjRh6kTHpQC6bM8nVPHzDWzMzxaGGaUQNn2NiVzrSVsnY",
  "key12": "3vpE1bFpNbDmq9gP4a19onKgyoistqj54xhsPFjZXDG1VG7xJVio1wZ4xXcZ4XcDqKdBwzPyhsKu2snMevxynU5x",
  "key13": "4xJg5p3kFDgK9GgosnJxa6WSzxWCHqM1nz3AKPabFo4yTD5ezXikr5kKADaXkCkgZY5ardpyBy4wordPuWNFFAm4",
  "key14": "3vCuEEmQdcpCqx98eTNVQ3v99QVzwtCQZLbdkbhG1q1svY78BzmgqrWUdmNhoiphhSNrS9YrPY423GoH8Q5m5r97",
  "key15": "3QmpuSGpqoNt71b6Hx2ms5N7xsee7NkyMyVzGurKCJfvhM6Ru6bnN8QB7iwvTEM5qq6dRm6WCuUYdgCbcLGKEUsb",
  "key16": "5AumJYyCPYyj3gGKZxgjvB9HupFNDrJTGn7wAPnZYAtSaszF7GSsMmFejpQabCppXrZy34Pdqr8dbQmRfuxC1CfU",
  "key17": "5dkW7nnaDmAiFyWLhaf1oaQSQuCiv7164gbsu5fnprAw41BFiH1zQx38zrrsJp787bPy8vax9wy2DccTN3RRAd2a",
  "key18": "3rUjPRP3ToSVuzjMzhLYRx9acNVHyJQui1MYprz5evKLcttp9PTzD7kGn4tehZxz9xTCUQCq5Z6jaTrLJQBzDy6F",
  "key19": "5WA2jQ2m8gbXPMh7C5fZbkn91PGv3iU5cEKpSkXUsWay6DkUZ2EWAgTcdMcg6nTcmxVjc5P9VZrhCy6k8rRDv26X",
  "key20": "4xttPcqp2rTnox49CWH593ZCtWCxjjHqHJ4Fn6ktd92aA61uQqUtH6BcNtB8ALTJMruLWPQEguouxLDrAPyL8T2g",
  "key21": "3KnCByqGYpzAaLDAXa94iLaPNLJwJedjgD8qmseanGcXMeN5UobXrb69rxn5ViDJxWEfBbW1VuvTDHGukEqggumn",
  "key22": "3XivEpv4pB1yVAsEPVrj4gsU942Fq2tm3jZmMjGjbJaFHCUD28hyMZsA14gdCkyoDDNuGmgLCWmAFMjf5Z2FYqik",
  "key23": "488wLBjnEXPPAPhxGk5mJ1vx7y1RHQ9d69imxNTQ3y7tPeB3Y3CJjp2Ra1e3KMpLBV3EaT96MgL14eJzoh12cpoU",
  "key24": "G7Q26QjXi4TvkXxMFDLTcyNr96tk7ULJbSo3WLAMDZd7s6h5CSUo7pVqPpz7THkLiL1FVGWJPhGgCuWKG2u25q7",
  "key25": "5kQfT4vAcNvLzjQaU56A2iDm6FrZeaAwiNwyrNKFh6xBmuj2ooAMZvk7TXFwEG7Vsr23dRF3QPxtpd7fkkbv2b56",
  "key26": "4iZFmGmqSf8ohZDa9AbEoxGLGUJxgKsLiAa2XQEE7jUzXSxHMugsYpt5yA82HXFqbCnxRc9hZrxPaqazY2mx431y",
  "key27": "2bR9mKor4fhc4dBJFPC7NsLjbgPhGgKS5x9ZTc2AC2JHqTnrrwmwgQLwZ9D2VmvzVv6xW2B8oYd51jqmMCaoaEjs",
  "key28": "5xVcNMDgmCFAayMnanoa6boARS25NH78mxYRce3BkExqxrAELYESj7Fn6XhkDePqFLHyd2zDgDjK2sFpVrUn3gw8",
  "key29": "2GuhFbmxARXS2VVjd5AoHteanviMSJ911jCUUe1mEDuBMVKW7MKF5srb4obuSWF8hB9nhdMPEgrNHpDW59WTrnPc",
  "key30": "3PFNDZ3aSggvwKZuTiCRCBXvuFbPswy16CDhceqKvTeaNfahkUcy1XAbhjGXacrDF2s8WoDctufiBZ2MwtHaeyzE",
  "key31": "2YeJJ9dKS5xAcS1izYSevAgvkGJeRjAtp97DE92Trvg3vPzDyhxdw6u38h8V4RWzQBzr2k62zALNXbU62BPbAD84",
  "key32": "2G9wt16f3qCKh6p7aV4YKxmnhc7HYzRmFYCeK9nMDS8W7caE7KEVJY3J5khNzgXDFFaUBEgMTRXJyTTohQFa62f2",
  "key33": "B9zfio5ZMvahckoYFbCh7ZQBX7wX12ZLZzC1urncsZQmAEc7GDqidUYt4CAu2UMvtm6mskLdErgV2JT3SU11imU"
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
