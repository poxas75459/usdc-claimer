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
    "2iUHJwf5cQud4qLSibvW1ksDxjoE5aYcV7iSiE6VzHzq7D2v74Zwq9GxhAP59hVKzs6NHrpX83uJuLy9Qm4fTG4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w6NKJDeALN1JeKmxGjMe7uhbdhUZpwc4TDaEP6N1q6rytZCCT9pZtB8uMyxd4LBYivp1GgKWj6831Qdj5r1LFcq",
  "key1": "4m2yHsgi52oTndUZsKcXRy9dpdkrKxsxsVA53NXP1qoUpQfic2iG8VSVdULcUSv1k9ZyFZzTtsXWPJ4FNktk1D4i",
  "key2": "42t4xeqqwmUaSDfW2NB4o1FdqjG8Ui2AVMQt1YXqFRn7AdsTcyoYerH7t881btJxq8SA15JjtGeZdKjtpNQg12EP",
  "key3": "LnLfymvBj5gHf858Npj42cRGqdt4R9fpvqMhBb3NaFW5ERmJzD7PuDbZ6AJ3oWu7yZp9DSHfUNChuKfmogPuLbX",
  "key4": "K1bJGLWC684CKdpntfozpDgA8RXwmTDCNDQatrCxPbwV2i2fejFg6BaLVtiSyrCRN1Fw4WiEqFXJB8qhkZfEBuH",
  "key5": "smWXu5PBmjtP9MBYdTwGiazn7bKWjn5481Dt26BjqjWskG22wgedzhLf1vZvqP9eBEVe14t3TFAeXoaN3pA8NJu",
  "key6": "4xJ116CaSggwZx3rt6c6ThK7SnUEWhtM1sy4YJ9wv9AaeXfeuExYEM9vzkaa2jq8usbYgP4q7ArGhQGATULvNMdp",
  "key7": "4DYFzaokzAKNoyHRQgfFMns7VyyXpYQyg2vWTM445rGHXJCc7LAHSdtrqQbEkHmYrLjNDJPM4pctLyo1vv4fv5XQ",
  "key8": "2fsvKixyPeWaibn1Vp6L6EQQG39qh3hJ5BFQJYct2gUELqZiUp7XTGoApGuDAVufEbegt74kY8qHyvZ7oBbvmFKh",
  "key9": "2jpYudzK6rBbhgqRraYj36ugFwH6QMtBCeEJjhKQ7vRmyHRk6YnJDSzVAVAHCREFLKdAzRtHMjSBg3jYt3mWnjqB",
  "key10": "4TUap9JA1Fvp58nv6Hy8DrBB7r1TCdwEVuQUCEL3JivKj4FY847UW1BKMCCGNQZgAmWPM8MxZL7V9GtABk7xMXTc",
  "key11": "2pHezFgT9MD7aJ1w2oMxDu4iej19CZTSMF7KfDUsodinLjdq9sg2pnxN2c6ge7rneuxgataqYsz553DfGzWqmbkk",
  "key12": "BdvFyvACntvUrsBixYUMkgSHHMMpGGeMEpaynLMKk9FHfGWtnK8v6ihCywuFRPBPEivoSYBnZeh1NgNVQNTgHD1",
  "key13": "kEc6HKK2GqvvViUdSndGV1EmsEBHyNWK24Z9rbWVoEsjW95s4T1xsLrpSHb91RFpWPBAUX4qw6edui2Dg4oFyyW",
  "key14": "5pNMwmwJNiz93ein92tmV4btX3jaZWscpaDCWh1tpvYrVy3JVHz8WENEMdg4XezXGPt7S64ZKphP2uf1zr7jdkiF",
  "key15": "3mzd9m1QvpmVTWBcuFkN1akmiB9abnnEXFsqAC7KiQG1cUpYJMcsn5ubkQziUC4z8Q1nMXtaqnhPY1XUfVygKgcc",
  "key16": "3FdA6ELWJcR4ZZDC5twh93QshKcvymJhRNrqTQSEtiLbYRX7WLjPuoVdLx1iAd3V4E4iveUAVKkqiL1gQTR4yT3a",
  "key17": "5eM53th3hkiRaUd8qyooKwhpk3ZxtzFnEs7t9iLDNXXteE84dPoBFL3Y2y9wKy9c9wKddx6yhC6bLdtt3d3VvvKZ",
  "key18": "G8qaBCiFsk5YzQ89qmqbZT5Y6Vjv4N3iCCDzLmcn29A4i4xpb8EYAH2D1837eFykwkZaHCSqeCp42MQsMrWeVN7",
  "key19": "3Bi2JLCmaHdKKi8mNxeMBQyUkhG5MTsxWQw6h2ay5WdaxyVtYVdQrsj7e7BEDPdmEGf5TgsNwXbMhVTfrkEiXwWz",
  "key20": "5LhgTBXSB97dGZ1zsFJX2E1CFSZq58M6KTz6FQYgxxxwY3tPBdwjdQvTtMEK73ESuCPbtCodc6T7UJNAF6ruSSLR",
  "key21": "soW1jbHc1A8Vu8g6cDrDzQKYzrAXhhyEBZ2advQzHAhAp2FPKYd9VbTnb24rK6QEpT6Qy3TwJ3oEc1ErkFDCjdS",
  "key22": "2SnM2w2siWSQ3dB5WRoDi48E71yXDdVXQGvzE2WAWXP9mcXtxBBnihxHBJSEi8mMBt6sskMtZ8hBTdPNknRaL8S3",
  "key23": "3Cv2kVWsSestw9PL1YPgkZajqbzVgDjTcXc5KsXkGCz57huqa1dYAyVeBemkpwtZyhWnCAHALaeSgBpfCApEvGsA",
  "key24": "2zFZwE6nPjW8bpES6wwz2m9mbqrWUwadwTfvEh8yN8TQLjvwYFytK5wUgeDM3hXgtz7uHo3R9muebMLGYEDcwJFC",
  "key25": "3AQc2CEAuwMZmQXzS1gWX95Pz5BwHvp95HdnUdd8YXAe1HJK5W6BWgKhgEkDwS5qLLdebha9n8nsaV9sgLpcPQAA",
  "key26": "ymgPdk8TwKfHubp6Qg33cTjruEnvU41NXLVcNk7Qr8Gfaya8yXPQhX8DxVF39RMCp7wYJ8fxtbjPMebGuvNcziP",
  "key27": "pyhMAkUMwM4adv3CW2aDZthJQMb8kk8CUduCGMj9Jhr8sEp94G4ZACjCwz5kr9vsorMYNHWhfujeXURomCUCDqK",
  "key28": "5pbvfkdvCWWx1q1mNsMUrvdw9z1Zf39qQigKNbzppeGeLd8Qhf9xh2TWLvpxR9UboVAEYEXKCJX5oJRbc6Fxwx9S",
  "key29": "ehEwDhRshEFrD53Wt1D5HSBWfCH43ppHvVwpCcC1GVuPLBZj5FzgAQXvHHVL6SdhizVvvHXuGTP2mxf6DQ8Vtx7",
  "key30": "iXJhvG38SgNrDBnnFhsJCc4Ld7qe8iUzwro9pmjKi3emm8GVrEsmm6js6BmGnzjT49y1SpWSfDqtrMtczodbZzo",
  "key31": "4N7MMYTSf3ibgPap63MWC4k79j5GDin5eU1VjaQEFkiongBdq1K1Uv6AEARqULNURBJVtNS8mYG3btkU8hXMLBX1",
  "key32": "4kadApe9eTHbunA7DE6dbGWcTUwviQ66SiYEKarhLFt9gbDBWFtRd3Pw5J3pv8HKPymZWPZoysMiMGz5qQijBFe4",
  "key33": "kuezG3UzG4cNrYs59BvUowBdECV6mzFfH4NdZ9hr9teeqxZufjDfngcNiui4a9sruto1suSp7t3MYEibyFNEBth",
  "key34": "DRRaGTm5vpLuyQfhTSFwnmKBxjDVvZBjpZ9F65FbhDyfdhVmrVUaGaXrMbKZv3LNEkCG2JLTqeXqMSKNeqKHvHU",
  "key35": "5jqcnnoxdN1bQkxRo8HsAP38AZ4azxhhwC5SBc1oYUCgF7PExE7z5bbC8NDmUvUHCZ4AXVZgDTKEdizkJQYzcpdw",
  "key36": "5Dm573pLboSLZsR2J5FhvQCwVHhz9suYL84cUKYYKbCdXNQKrzhmDhWMXfpeL3KAi2TQG31WYPvfStf35hMGQ4aq",
  "key37": "529J2kRGybLwdES2mgUsEA59CkAG8dhdGaHDHiYR2WDzqGUbocjU15donjYt7HqrbB4wsc79ashWzHzgzS5rip7c",
  "key38": "2xhgG7yFiizn9FsAPQkkMvEVpxidA7wxpYmkvDFo3HWnKKN8iMvQvPUaR1g2M2hPTVzaCf6dyfLV6RbRC48R5LRZ",
  "key39": "4MGTpLbyHJiFZaZ9qnD4DY7QZzGq732GNpgyjxF1VXf4fE17fHRscF1BR6g1QXHJAnRBZnx1JwQazpgrPuYRtoq2",
  "key40": "2RbsDaZabj74wnKWBtbJmhze9vch1QerZQv8nXy9F6auJ4W16zB1vUpigHd3c5asu6MrvEsCoNAgZwoKFrzHDm3x",
  "key41": "2fQTdmhyc3Enp2WrLP41EuBUfwqcisigFDWipoWBKU5pGUKr7jrcrmhMw3mLbkX15MMCKKxjhERvqsP8QCt5wt6C",
  "key42": "4amoQvx5VSGyGRSSmbJQ1xDdJqthP1Tn3aMy3pQacBarn6XP6J7xtU7bsxR5z6HzjLypj4a5kMzhDUBHREnKTGzg",
  "key43": "2z8KFqoWNAjmpgdca8ykuTPDJHofNzn9oHDQMY5EMDDw5Nzh4h8xPEFzBfQqnSrRhSVq2zqoTBVWpwRjhxLjsH3h",
  "key44": "3FrmahGf39uP7dwkF6xJRemAuYDqSQxU72pq6pzKLvBV2PF4iYnqv9HnGsfYMn6A9vsLQg2xAY8RiUD7gsbgyBSu",
  "key45": "54Yoor1o2H7NExQgKirHBnNzcZwDdHmoAQxS9AQMMFTCzZEhuNucbLYUMAp4bWAK7oUwGaftTTqNu9pjGVMiAkny",
  "key46": "5cgqnCRoEs6suWU5cEjLKt2h2ahw6D5oWPXuKKKxtZLNG1nk2mFwi9uZr7ATQVfCHTXtMTfbKBTkdeCRV6QzMaNj",
  "key47": "2KJcNzLqFteD3DEa4DbYd3Ywp3BBahXpE6QsTZ6DNgUxaDqhZqtCpxV44iVNNiZKUmqcTZ8vGbffzcyDE4QeV7b",
  "key48": "o3pNjgF1cXmzD1eLiwQGbtEpAvEAwNT6uGjH5JnWfCLL1719jKBLk4fJZVB5CFE6d7THsXiVdwfxFCm2vDuvwmi",
  "key49": "3raoCQyRJJXL32HGGg37YAew9kc77Ro7bN55hFzy9TgD4xfu4naVeg9bC9EeThtyZqSxDY9dAYReHmSwfZBnV87u"
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
