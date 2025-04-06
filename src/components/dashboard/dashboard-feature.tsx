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
    "5hBc3f5bEnxfgPZPqtE7p8oqZqhEShmvx1NwmZekeJNmPNMMQmSa4uGjRRzC6KaUmLmSCupBEAeLTpmcvYxVquYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsFveUA9eiT2wRGRE3xJZGftDdgzXTigFJTzTDFVhvtVnVBJRTuNb7GPt6Z1UucXp6BZiGEgYimyoG8qxqaim3R",
  "key1": "47zzEbdYo18m6XJdH8mo1f9mWKVB6MoSJX9JVxUJ5zMHQW3yVTda1zFqWKp94xpyjatszoEJRBcdoj5GoebUHwo",
  "key2": "2MFNVVv7xv7aHFSV5o4HpLhqBvBNs2FkzwCB4A2RPHhYT974JrC6X7d8rny6gYxTGakRc7DpDxTVNQLhBZFHg7D5",
  "key3": "WEzagXEKyvfUS2Kp8Kc82ZPhdSGnkEk7Nmn6Vwv2ST5KgcsVX2E4XdVDsVpa2LPFrY7r694NXjSJEK3KC9wYWBz",
  "key4": "67rjzQ5JTYy41dGSj3c1aiVHjuGSy3xCihWGutrwWx6AZjfjWJxPW3hbXi9oftSmKSkruxVBppv8eEMMGEXMgHyB",
  "key5": "gWGbeFvHakjgzarcmt8Fqu2isZYQG57bjjeiCJbWxkxd95PN4rXAPHHVQ8Xr7hxbdGZPMe67nDm6rh9qEzob2Fs",
  "key6": "2Y9vnu45MHjuokqXcEkPAMRnZDTyJ9W2GMuXmjQD3sA5yy57m8rAL9wqE6zS3FJMWYXJzakZiCAiagwCmeVVpakN",
  "key7": "3s6LXbK7zEDdo4iFBhPCx1ZZyBqTGCdTgwVTyWVRnQX5cd49bWDXAXEBFSravBmEqeEbt5aoSRZmKVsUvz5sC44N",
  "key8": "5b2NicPzS54s4wQJ5PDxvfgoN4DMrGBkp5ziM3pzDAcxWRXX89TjkR3CdmqoF28pPaxqZktpaNg1WEz6LNhAwHbU",
  "key9": "5vBVSNTqthLLqDttS58XPpHKvHFHAfx3fj1PkuBcdda438cGDmQS1JsK2B6tGqhViSijSpKQdTNixXq8mZ4juqyK",
  "key10": "3WcTb6aoFHWC9Rx8VEkLhUCG8c9NeW6EWchNHJibBb7JUv2JMYpcy5FFxuUjRrce7819atejfTfTz1GyV3kDYJnh",
  "key11": "4rrpmDW2XJHc5q7yCNRwktGbtQPtAnnnaN7gqHxKFp3FD2kh5vdrz6pgGS2zDMsSrNaZREzjjvJwn3JfT7dgtqP5",
  "key12": "34wagGVzDdV6snMNJbSYLsNiXDp7d88ctXycm5aiAWahb2cfWfNaYxouxdJC5CpQXzxe2oji8EPxZ3wUDzShpcyC",
  "key13": "W5g28RdVGBHgBvhetmaphjro2C8M2GjbkciGKhwo2p57225mDaVVT7GVnwfGBpmCWTVxAfaJhqY9mDjUScHNwrn",
  "key14": "3QbXtvUkyvC88jntxcpciDr6whyZ2Ds6Pu1iBZzWy7th2jX2hXnpjSwhFzzFdHgnJE7oaHR93EzhCgLBdvnWHCq1",
  "key15": "5gW7ESjVDJsYuav7SaaBhQn1r2AqZFweBhbwEk68QGx35c9df6Hm5yEJPLfjrpevg9GV2Pk6umCtVwfqarnrMwPh",
  "key16": "5tdnABfdwAMU3mp5fbxbKKSf2jW7Kwf4c9JuBkbxvudpL2CSveonfHauq9YCNSXpQxoakYLp435MexEzEwYVVXtt",
  "key17": "5J1QEkEAcuBL9Dq7d5akU9uQgQmASeKMh8w9WxePFjSFQAELSb5ddmHbCjVB6YrMaD9yD4HgKawEziHVMoAzJuvE",
  "key18": "4i5zfyRqB7tYsb4jbbNJnwLCNjJBPcbYoqG4o7tJfTHKmJGw84LZQzAue2eHSxHxYYuKgmsTKSLmJbpBfo59qr4g",
  "key19": "41YUMHepfpXYVAkaF8xhcS4zCKrH9aTMA4sKiupAcFfnS8k4ikQij4CHSYASsJPBUQy8WF4Q2mv4jr9nwjD7Xfes",
  "key20": "2hMtADrsiZ5yrBPqinRkMYGVoHMTEZwbE5u9wFBcNL8BiRy8DV2EqfSapoLeDKVchM9PYPAk1Zny6EL5FX9EuM1k",
  "key21": "5xWZDppv8DPbgwyJktckrZhe5tUvK7bcgAVzY9qQBeNAkTd7v2sXEoy4r6J4vwM25Yvzxb8zvcNdYq6d13ThTFZa",
  "key22": "3qMv6wsNJCgwsoo37ZpvLjhoEV8desioiMdiQ39Dn2gZnXeW4RbHs8HNyDT6kibSvzegHYjo7xEGRuCGrScCxMsx",
  "key23": "5omLG9FE2y8ZczchWWCsgY2PUMcUMX8Y5MN4UsUZRPsWuePSQ7LjxcSur63Fm4e3p7aVyxdxzihMogw5B2jr1nyH",
  "key24": "3BVsGUQGPGJBTbe1DnQHFBboenNaxvYCT1GhfGvZgS9qC3VJvBuznba9niK9wnoP7U2UnpNiCyk5wbgWiV4PAHGi",
  "key25": "D6fu92KBwbpHj36Eg9MTr4WLK7czit14aXiqXJEmEmyiV4fKnpgqqPWtmBN9jFoak7ZTPrtoy9bMvm9tp47D7Lj",
  "key26": "4p1x7uDBiMVfsBHMuWH8hncYs52A4AsUzekbcvct8RyagxqndbvmK44VdnUgLcB7Jwpx6AKYt3rie2dumqUVb7EJ",
  "key27": "58hEXmKrLycc3qZf4UEsYfu7rV4aAYrYrfAK38YLQEco9s7T8Qzf4L7yh5BmtHHPGoL8Kko2chym9rZdrHCSXWkZ",
  "key28": "462o1tRF27X1vP9hQTQcYNKXYZp735pWHjzbmqUVhBan4XvEvq43s3dhZkUn6QfQDnXE5PzZE4w7yDc3inhnx8cw",
  "key29": "4aC1xD7JtV5g8SeJvykhFX6GJEGYVYaMFNJYedoZHxrWJMfBvtJ8phKHoYYVnVFmzBFJXmAVKQiPyZDRutz9ezTc",
  "key30": "4ajhMcm9zvNyeZ8JvaSobGZxpRXf1KiAwnarSCsrhcxTw6BvVmVcvYFFZncEW99XCP45FVEvq4ycUqPC8WLAf7gk",
  "key31": "fLrDaAL6jmEHPg8wrALXEWSbb93BXbWHAbkMUMjFna4KR75Q4zvCkCYPrvpAbec7t1QD8wVSTSAdgvYsUAbNJLG",
  "key32": "5njxpdZrnd1gvPTvFo2ZEsmxawFL1FMg1E6wZzHzVRtSMNeQVgGUcVuHPmGRRjRoXpFmnvJrfnP4oesAAT1P1qxx",
  "key33": "47G4bHtjqv3yXiq3ynNWkj6Hv8D9GZU5Fj4NR4cMyrGZkZg93J4ZoXG7mKJdjRT8fsbqnvUcMsVDZX248rhcAACs",
  "key34": "5fp953ZpfpssQD63qAoab2eCAkGt1RznrP9DZKCKu8JGdycWLnAFLKx3dfoKvQNjoPQDFtYeGMsVXdAzWckLZWty",
  "key35": "3hc6gx3KptP52vgPCz1xKY2KKqJKivdnNwVLQzHJn7HmAx69wGubLM7CJiQLsCTnE3Ujbjnd25vufHqjynUvQiN1",
  "key36": "2isoWRjGXpqi9iuxYnm3CB4Rq41qqyv8FNcC6ES188fSDs6pvuq695CwFSsfGC9JmCN5tDWxiK8X9AbTt4VbZCFx",
  "key37": "241Fcfsck4x9tgxAdfU8jpswq1nYnXGsSbzcgyq6K3bCiyrcTTwc57zbf8LatkGYf79Z983x1qrJKyM9zN8rRV9B",
  "key38": "2Ko3qfFLFEForFJ3WWWPp5dREeK9wsQGpxTdqQictEMkCaWu26ruvtNnzhBdcAoo5GMQ8d2VuQFwmMZKChvzgnNh"
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
