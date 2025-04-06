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
    "2971WhqpP5vEcBzc2648YSLPyAfzPZTwidxQHM3baXYuWhfAq2Z8wd2BALJ2qW5wBUZ6FhLR5zD6wihVFpvGD9yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCmLsbT6js8H8UpB51yrsPz9Yyug2ZNu89viZB46Rv6X5HtziXZPq7HtWB1LpM6ZZ6gCGZES4ZUaaP4S1VMr7pQ",
  "key1": "5LJ3rT97cMNwgzBFsrD2iK2aTdJk5ibtjxgtiGV4J6qhvc8nycmuJjGQSWXuyV8DQXuM7s5WhQeTdeZtDZwogNKD",
  "key2": "27HwZkRg9oBS6eUEUXhZJm8JZPuhY1c26qN3jYSmxt244x9TnzGyjCrLbJqi7PmpQB2AbcPXuFbrKUjvSeiyXYCM",
  "key3": "58T6uxnCVz1QfJ7XpXnW9qTknMSFaFpymS62D9feMToAMSzhjCtk6a7KbAMiRbxMfUibvnAmmB2hNZcRfPxJL3z1",
  "key4": "2rAoEL2gxeeLwaR6fR9Lj9KTZewbF7uQSt3sRcAhkXwcegFx94jUozdKfBRkQb3ewJLqKwhUb5BCeLcXuYMnCEJ8",
  "key5": "5bakDR2g1k61fyNf8QuYsy4QHVVQYpC74V9y7JgRy3LehgmwiNJWwEU6v17NDqyUAt7jDMWdmdHisE5C4xZ6PxBb",
  "key6": "2XdGWBMeZkSaGiJmnewdc4JAjG1QGWJi65PoB36ZWRfaGEGhhNYaw7PBY3quoryoMPhJaE9snaz9oeAb35egSz69",
  "key7": "62bc83WECcobLgbaBRA1gByjAJmT56CBPJksNb72YmaEdA7arK2DsR5fsVM78VLn5WNexWrD2CUZLbLmHALdt7C",
  "key8": "5ggPKicUD8ToeLD6jGySB48jkgrfNrwVZsKuzLVnTZ1B8XZVsjpSPR6ti41QBundoSDUFCPHfFgpUaw7wBvjcRtx",
  "key9": "54Qm1J2UxsB7LX4VxXTmQyEAwgBqUFMRLkw1NmNhThPHwnPkToYrKSg94S2RaVQcLGza59ARNrToNooitXp59TYj",
  "key10": "MQRd1XvAjxkx4e7gjVjqFQCs3RF2CzeaoJKiC3qYvqqwzA5x684Efc1CDxBKZpiNVw9gkJALWfD7pXu4FHLDCxi",
  "key11": "5vrVq5hgpkLK7p2i2MTRFVvZ7VxmbohCH66vhx7UosmKY9hWKaBzayGY94L29vZ84E3iT8W5WTzX4mAmL8gNUe1A",
  "key12": "5PHmmAYq1yiQ8n5wj2bX7oFJmQXtBydP1vVULjpuQih11sMUh7cqcuhcozXYUa4xqDEgibtwdY6mSkPFdt62oECN",
  "key13": "5pXnSxGdLF1kPFxdPfWG8KvN62q1FvdGwWJHT65P94nJVDt5xvZb6qBpmNPsgctYraiYaGc5vJvHLUcUVzPv45tc",
  "key14": "5rkn3pjRwnVuLVDHjQHgLWZ59otWJ21HjNjNwzjwCy5b77XpkmvUj7FEA967tcEnAc1NMgvyeei159puw2iUyyAa",
  "key15": "2ZyqvB69cEBNtfQtrRs8c5n71Z9t8GGk1oa37Ns87mDjZ9QqgnnBmX2cb57f4r7wCushzvhtPfG6ahZECTm4KYcg",
  "key16": "4GFyC47GRd2P8nacozK3UTsCumxoLskhsN2iqo4vpzDhcjVvYGcdM9pCDPEMfsx7RRTHNr4YcX5xKjFPdZvAbDaU",
  "key17": "2X5AARxHBLs897kMarGDRKTjPF5KVrn41XSN5NSikrtDQJScjZtc91AcWMuWKE9hE9GGZAbyDMfE393BUkfQpXgh",
  "key18": "44YrZH94BpcUxmYVNWx9iGB8SGsxAJDdD1r9mFqKmvHE9u9hqHx15G87PSAWCpaXtdS6fVF6RcrTeqP5BNL2wDmE",
  "key19": "2bwU2KBXFFP3PpQZtSHpT3pwyTXB49vixibxpewzLxJfbr7ioTxYWbBqDneTE72U7mAFAoJ83sZuz8JtnxkFHY4h",
  "key20": "349hhk38nvBCZMgs1diSKngFkjwGuSTGA1y5FcUEjfbK8oEQ92dKVf16Q2TXixqWATPirXo6JCvbfmZ4Pja1oe94",
  "key21": "4twiiE8a8sRrdHtiyWQcLgyXTJAXH8h1zN4wGzy71MU6XAH3zrMiRe1YXLEARn6N6FawJ9TNyQYY4hozxnFDTCLS",
  "key22": "5j5hkJ3nkHtbxoSyumBngzraRcRnp48ayantvJmh72dCDk6xd1xcCqU4pygYUgLhaP9fLAsVWygrZMNtghV1KxWW",
  "key23": "3HY8uSThkKamc6UJ5xZgiwVLFHRACcXsGV63XU9GDkyk9kPA5xar4M3Vu3dYdx4nsALqdMJUcAx6y34LstXY3pbC",
  "key24": "4Gix4ttA4DZ51n2yPSF9sEfDT4XpELQBHiy9W6HSRJwjnxEBGXE7DcWv63snAStaLtShcAPwFxJgd329Ey71BcJo",
  "key25": "3JVsP6t3USXV1ura8pnPrBReJhgKxvkTaX55Jy5FkuhxBdtGHDoa5gwnArRXD7Nb6VVGL5CMdvNz4F3tVqK2yC8p",
  "key26": "5jrd8qL251uZ7uQudgvFMPVNmTmaVyxCu9HWD6GXVWby7o8byM7j3nh89i3biZHNfQ55FeDpquLmde1tgnRjGfR5",
  "key27": "5EHutgVWGq5GWJ3637Hdk2QLvHekxfucUPsyr5AGCGkiavvttZGzvmcWFsZ5m5qmbNCaqg1UD5NPXgafT5wr2u7i",
  "key28": "yXhBbr2LXrGpQiptQwipTNj4u8Wk45CV7MqeCjFC8PaSDoMtgXcwV6qLwDbs9bNCQMinDd3MpfJKXsnwooyri5W",
  "key29": "36A6KeLV3x6kVDwUDVy5N4YPMtLU3t8WDAKqV2khRSoPcnDacYk93a48s7huS4L2x5YEetetduwXrvoBn7jDxxtP",
  "key30": "BY8ewh1BgCoNa7PeQ6NPeSXntQ9kQ6GwGbcuFEKnUuCxwyEzKK9uhhF98dTe4Kprughf7Rp35hRMtXJDUSyhNFf",
  "key31": "WTxtWAxp9FjcjUcLraCcRU3VE8ufneFdgUN5hr6wenVZYi6c4iNbn9cGMhSMffqWsTtXA2Gtv9n2DUTcSmYLNX9",
  "key32": "ZoiqLUuBuhWBCiAMoHGc9hp6sMVm4ZTD8z8kPxd36w6Ym3sMFKawthr1C8vTPdstiGV8KY7CuvrYMao3kUkf8db",
  "key33": "5V6jnXgsMyZKmkDp2MMosPN5cbn5E3Sd4pbg35fsJnAJJaCMoFaHvLVCWQY9Dger9wmCQDsKe4eQPoTuDD5J43Qh",
  "key34": "5GZsHUv9RnswA2H24XuRBy8BJKWdU8ikdTDHFDXNKqD2PddnGafNFoPHVMY6zTGzJNFjkjxqT3c13Mvnpdx4f551",
  "key35": "3cbj9PxuSvqJtcNmXfL13nx262Yvhcn5kQJ4yJiP3KvSSACnfM8p6BxyVoDX13jhp5HAZLRX2jxTnFMc866DHHYP",
  "key36": "4uTKEgmpjU5UsemtZxguxSujhapgpXdGppF1JZLuQ35fjwGgJa1mp8aXW93HBLAdCM6aH815yEqLEUVPGxdnDCLi",
  "key37": "5AopUjgfXaikna2fRceLNnnfiddHKx2xweiTTyo1AtpTrQ1xBRNh7HWHpqV1cp6TCcYPXq9FSsLm5piZGFMwdgy",
  "key38": "3FyhWyJgvn12HdLtKS6w5c1QFVqh66QcxrmejUpXivEQys2McF8tFdK4RzLhHhZz1zr2HYRkzucmscoRupN5eQvp",
  "key39": "2CJsnznMhpQRB4K2F561JbH8HhDRp88jbJJA6KvSpw8sRSPPDoPPJp9FbQgj1Uo635m2YGtaLu16Ckdy5mhbX56s",
  "key40": "49VbUMpJHMVpGtH9s4hiZ6hVdUtrpkKzNUhUojFuKQDT8E4bGTNginxZF8ZkpFDqHvAJqRHUvMNQDHhH7SHwbchp",
  "key41": "3wR9c59C72EtikSZgY5jRC4y4ZfB9QfUL7CixAQdSeJMAs9jHawbu2rwRjiDNCi3XcB4Su1Pv6KwVCjdSKWWyQM",
  "key42": "4ze3iPgeiiKgVM4g5jsRagtV1uxCyXBAKCrQpSAdkHuxPshGRQxBGbW1d4UKny1kpUMhZz3RoqkAQwa23sXLJTMR",
  "key43": "27N3Ag26AyJHFb1vedPmBAnq85Y424NU9rXTDEMC8svrXBJJuEha7CYfAzZNXRsdCuE47HyyFspqBEoTiQ77B7hx",
  "key44": "U87dihgXKUn1MeRfVB3JVSH3ZyaftUY8Pi5mTLetBHuBV2q11T2wjTkqSWwq7DDwKazixNwCdc1t2SX1qVDX3t8",
  "key45": "35dD2ARrWBtXQDhHqobKg7766qbHtJ7c863iGQKBFnQ5nYQVE1MJoNFTNPkYwLS3xwWY9DxLQJBvGWJVyRk8Bg9B",
  "key46": "541dSgDRYwxGvAxLN4PnBhnTQC5QTrBmSA2azQfpftyn9HgQqmfxNmyoQd51tsuYTb6ePcgmt7iLQNUVC9H3Ukai",
  "key47": "H9kXWgz5kMcp4CdRAwLXoofR1bugEwJmj5X7y4qt8tVaVB3QMCp4TtZ3kU1n7ur3Um4j9sr9XKte2z5qCrczmwM",
  "key48": "MDUXBScurU1PhqJXqRwaeTS2NAYxDhPjdnjQ8cC7erLXS5sVGyc25BtD3AquF8pU8hEtS34STp9zye5BF4qCfTk",
  "key49": "5xwVZz7FYhL1uYBFXajTsVZHhH2vua2hyPMq1MKSajp3gr7Pie7AeeEA6KnLZiRWGHrtSjRiEwhcSd1g2b1SJTfC"
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
