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
    "H1uKGxTkkcgY2M1HVtKPeRdG5xCbsqLgw7fVn9w3gd91Jg4vLxFEc7fLybCrMn6edgGKkqcUiioWf3P2PjjB2NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YM9J4UshedZYLCs35Cae1NzKK4sQwtmLPLWhPVNbkhbdboxYdWgcNsZBFGy493fbe8S7NNzVT1GpLVtghjqwCZz",
  "key1": "5nRHxVJfszVErXgSiRppwvCufhAdhUxftbKT2aKDH39raYcGuyoaTDjEZArmZhnfudK7q1HDpBzxpQoJaeJ49uQK",
  "key2": "5fDgX5NxAXhj8EtioAU1LmQot4ZswFTQCYpLtKtJV9G1PaUw9yR3MXJ3733RAhaUhBnsTq3uE1wEsACQyyAKcYQD",
  "key3": "4SP5LJuFG1hGFa1wbx5T69FrAiBEBGDhZRCwoxZqhghTUj28AspQgn7QEF2H7VNzpQ3AgVqWvNXoKRdbeRzh9ihY",
  "key4": "3MQmDJGbzPWc9zqasoWPQjDx6ETMB81gBkwd8Vidy1tMgTxPtCq8sNB1WRsQ7jns1x33xa7sSmAKDF4fdjCb5sys",
  "key5": "54BziD1CrdkTabPcp3mu4WKexopWhPthe2oH7B1SbmpM7d1yhpmixUtsATPWivLJYmiqBUbDkXUrpToPvymjwt3A",
  "key6": "2bNshzWiM87W9sLKH7GtcTE1LYQLVxJXxmCRoPPfu4p4j8XQfQFpuSyf2PSyaiL5i4DLUXjvaYiAzNTDXFJrSqNd",
  "key7": "4bi7cbxtUfStQHjWbMpeYHKbQzrnUgptVujjThf1ei8keFhSdCV9XSkDwRGkjyY99bnmwPTCKdngHCJnZbZuDia",
  "key8": "5wKY9jDnbNpkGLsKfrSsWVQRqfgCWba2xxnxmRaQihY3hyHSyXbbwwE2jjJaNMcdoGBX5pvzHV8CFc29uS3WrR6j",
  "key9": "B2XHWMsNTJQkZX6Lrw8FzehDZZUVkWNppwA6AwqDVPNQXVnmAp56HKYGJSGqzbAsajJsyMNfbf7dRFbDJUZN3k5",
  "key10": "5Q5nFRM7EPukaMVX2aGh2h2Ur2JJNbJNz24aeW6XSPpk6KvopoTKASLyggAnLezPAfibAGbAAfqhsEv2eJC9sLTg",
  "key11": "55GdSXsz9Fj4tYp7PPPPA8fRmNxx7RLtThHFF74NN5qwGcPxKTBbt16MY2VwVLRmGcbRtar3ZJP9H1znKvovVd63",
  "key12": "5b7i8NbQVbio8VxEi5JzcNL9RLxiYG9dcntJsnHgtDT9fz86wrW3XRraAThsvpbNgFvvXLkXw9K4UVH2eHxjbLeZ",
  "key13": "41Ke1Vm3ZuUduAcia2CgR7SFF89RXGEDmEHCcZZyTdhi33TQmA7KU9A8PPQ397Se8JKuXyZGZ3T8Ey5eJPf9CPM6",
  "key14": "2GqRF1r7hUDvE6CPcg5e9GiGbrfugEniPV7LNT1qxCbyaYYyHz982q7adbFZbfxh6eYqdp4NdcgYjhQw6NEAPHxv",
  "key15": "5PHE6VXUPYhzca4mSLJirFuZ9yDuEr1yGDuvA2H1mo6n9YGi4SASNL3j1KxThpVazk8mR7ffcL8YKJKFpKsQTu6s",
  "key16": "5e6sTGLPgUKSxPbN2P2XakdCGrEzwDSzqydqFT3T74rAUMajpyUqfbJiArj2dtJzqwBewe7qGoAjURWSoh3Xw6NR",
  "key17": "5wyC4dnYS9S1ypu9gJhssTRiJhg9E2i9jdJH9hjnz7KVrEiSoCpgvHpb2V8QkjnpY45EZQuWZjRLm2b21wsmc573",
  "key18": "E4Fx5uHLBCZKCV3MNDRupoaFUSJfhDabZtxzMayxKUH3RFzCEQTECjuCA35vafQ52bZN3m4wi51vA7ZarDnzLrj",
  "key19": "2zD9yWvFyC7prrSgcqBtxRCS1XBjRSAjWv5aPy5rJUWv6jVYQk1cEjNDUTpAEjowLjwj9wMDw67ERmnFz2kqGJqX",
  "key20": "3cRF5xWWT2ZsCnA4d3U3XPoppwbaBa47aRzmemwXytncUD2gcrPzQr1Sz4z3sptnHqtf9t9g9tBAuddsRkY4FUJH",
  "key21": "4foujQMWbAJzQ5pHy1LceYudgeYKxSmodxVxT3M3nQnvRDfWgb1Y1fxWFtSPgAVBYViBf7kvLkVs8CbyD8VPppup",
  "key22": "3uAByBBZGdoFhym6kH4PdcBbEaJYwbsNnBM3dLTikumeRpja8KWTe3E3uSKxihNqmAiMFgNCe1azj21J9Ee5C7iT",
  "key23": "61xz4MLFdUmyBqM5BNTc1FT6nE82CqCDYtB94rE6SjvoTGWusAF1CVqzBqEPpxYP4eSngaUJcGht2tx9u8Uygjb9",
  "key24": "4uWVh9b1RAAhPDQmqMFVSBHPicmQEk3hXjyEbQKdvnAu75DWbgt6nm4WPuocbPFdtACvcNhoL7EFGM65TvZjvaKK",
  "key25": "TT3z6v12wWU2QtRGEB51gWq7KDsrL17QTfnu9QwBLUmfAYQdrXySZqECBdyJhXH2meFYr6YyNtWFcXAUePL9ZZn",
  "key26": "2ZsWsPoSVo11osvEFFyHs5sWj2KDNVQ5BYTFT3pDX6xFUAg5kppAFACQ6kX8uVnE5i6UPRY7R5ggRn6i1P3AkRnh",
  "key27": "4fiAbt2WsBwZqCFoBM3zGvuZ8dv1ZjHPSHj4rbKCKhSw5qZqwbaWQtUnsZRJMVxvQeRVQgnxR88MTswfGPY2kEXC",
  "key28": "4rEcDBxnJNBYpiHa17kddhPiqTX9Amvy9yiBhhR2iLHaL9WWTT18fbcUDYcDJPpYxYsD313pcCHvDm9e63ASyVJu",
  "key29": "4oYrj9rUA9tXWKioxnzGmFUc48PUt4qZjTB3mGzNyk3MA9Kn6PSZ2gRmShPRWzQ2onoLhPyejjE2WAemx71iY8c6",
  "key30": "3QgheU89F2dcoJpGRWtAg8qjXxwNERLvjmdZoRSzTxq6ZKe84cN8mNThRLphmH91KAprBZnmVexWpxdw5KEChjKF",
  "key31": "A9e1jQHMiE5X5orS66c51nj9YN9wDiEvpz6hHHEBDTJhBqEq8VPBQtGpdKBPSxrka26bAF8BSvAnTN1AgFD41Xc",
  "key32": "4r71x7tQwzCByTJJ5iS49JUJx2eUaQorm3KPn8GfwFbJFdE52uZC6WCw51ih1ysBMKB6phMJemUTqxEMDNHAHgaF",
  "key33": "5R9oqmnRHoWgDMsB9cVRAyVJqXdbDrVQqhfvu5Nt8tU3QDGrTbGpdeCiRA1zuBYrBSiDkA8zJVdGZGBSu2qhp9k7",
  "key34": "3pmU9RKB6DBYPmgRrJMz4JeYVdX4WTBz3GvoLWxJMd8WeceChRreMBqUeHpHkrtNk6s9XN6GEt6BbSKo1WoBzA5d",
  "key35": "4jFjwGwfmHAniJFpQTx1UZyNC5uf9TLzoPSAmhqqf3FmssM3U8fkLuAWc9rxMmSEGhR2wmJm73dCrfZ5qy2wqNZz",
  "key36": "2nZtotgpzT4G77cMFnrf2STqjL22oQJUhBcgzUnwvnpakfQkqWyduMu7RJA6cLHdLtBkNtiCVfMJ7jipynbeRnvJ",
  "key37": "3CszegvR4p1kHTBBVTm8zQQrHeBkuN4oLzSd8vXMQTquPL4u1qPfhFe5VCbJhGWXeQ7FC8WG5K23aGmbzhWuRaTY",
  "key38": "3pqXjvY9qBiz49QEfSvKDF7DmR5NsLqTwtrHG1ruAoR5B4PFMXuG359PEm4gZwT4sZR6n4SAgztg48kGsrrpkMe4",
  "key39": "ktJavDjs8oES1wz4AijhLcL9gpYYPtWmz5DGidFscV2gBdTx36QuPWvgnLucrq3TA8B6x6JpiUDzkyZJhqkT1Ln",
  "key40": "2C6D7yjeqauLaexbJztLmJHFFmHaauWFv9mADy8hZUXv6YR4mMqJpQjfqz1fybjrutTdz17JxCZiU3SW1mXhYB4D",
  "key41": "2EH8fhothkVjcL4EmSZCwNQZ4KCCMEJGY8MKNEUGYmnzdTvS78K66FC4jNdkYsQcoQaYc8MuKWjqRzBsKfvy2JVa",
  "key42": "2EEucvWjXCsiJWsaQnHk4wYZnq4xytXU2e7DyNrV2qToLWazAtELkpvKJa4GCrcQET8S6zu2uGkvMvwGdmozt5d",
  "key43": "5yhvhBMj8XrmR8YL3vfArxdo6mKJ3xbQYwpsNP5HUzF1aM3saVbzhD7L5ZfVz5bgezLVveb5fHHjfDwzjo6CxePa",
  "key44": "3ySeYQvaFPPwp54sh5K7KaQ3zhvCpgKWdSecqmBu4eSWmXXbtKz22RmEhZYBC5Qr8VD2RGywjzLcWZ31MCxM4BRi",
  "key45": "63mG7rBQrdioubS49pjnMf6V8V2ZKiYdWMzKTyfaE8ZvgfYxVQTJK5qgnyBE52fJQiiHL8RDkqZR1CVBFuRjtyk",
  "key46": "4z5qya21kpHCFBoMNb8AsYBsGFLaHHSeHhmFqT5mEdgQH5gTYXJTWYw2EP6Ykbsj9PxrHGNEC8Atw5r4ajmN4e3y",
  "key47": "D6xeSqQC5NephypS2Zhd7usDeodnvnqu1u7XcNi7ofFeeHgpaPBeENeZBUkiGbtQE8r8amM9qD8Z1AMLazWNZmN"
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
