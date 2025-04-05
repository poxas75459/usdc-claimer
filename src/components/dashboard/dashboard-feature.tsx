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
    "vgrfBWoLe834RKkMCt99A9gFT6egnb1YGG1wHrW8soDRU4nsHKBMX4eHLWhyJQiik3NiN9JTNNjpAodxJasMKBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fATSXd2yWLqFMSTRPdBvgnr2ZifeCEZcbeP2NAuFwVPpdq4rLsU1aSDeqEfj2q4pYTmqAD4wRCxCBpxtgqGicKf",
  "key1": "5ns8GkEdwCsLVoUoKoUvRwjwz33Tt6i8aotd6oaFsjUfzmFtNpDsLAKvXM49HXrUbrCkS3kGrfpQUxe3vCPZESBK",
  "key2": "438kpSXJCyDrs5muhGjDSuCstVfvBvKPEztT2hmsXqk89irfXAC9CX1X5gKmnkUkLaDyFkZ4arpXLrvkRW6zrSEM",
  "key3": "54CS78JCW9gewpXrzLFH8Ui4XsMZNP9oJQs9a4u8yvjAesbaJrbVHV68GBAi2CexVpSSdJqbeEyLF54MC2R5Dziz",
  "key4": "32jnTGSVKjCyKjbVdyHXXxG17atfKU85k361wHdk6TARERCMGnFK92rarcHfGpFNcLHM3tMGGKZGcuj7dLwtk4aK",
  "key5": "2cRB4GxYdSbu3d3YRA1RP6R8qgYDjLiaCwnAz7k5bausPjbCZxptgXWc7MZnwZSZbeoygnGbfLZ4eXeEkJ62LT4C",
  "key6": "nQ3CQ9VQWctXQWs2xexnAL1rirnQCE9deCdQBTs1PubvWwT1QkEszxrunQkq432ssVtpb8HngpZzJWf7ib54QE4",
  "key7": "4AoV82gy5bMLw5KLU7K1YcCqdwUEkSvafXE1UtQRMfNhDjvLKsv4f4GVTYA49pGWAbecjoFgXfqcnnvjGmNgGyHJ",
  "key8": "2WACJRvo6mjHo4eu4ycUG4F4vFu9udHyQTwSDDzisUYk7z8CtPZtNSgykFbu8mFgT9EfNYmp8c7VsgvorqBjAzpJ",
  "key9": "5YxeAjGamxAVVu2QBL8W6saD3N9uYE1hU5j2WxrZKHo5Bxj6V8CsnNmXoghsHpQEoyHnv6jC2ZigxYyjVecQ4tb",
  "key10": "5bZyL7TFonNTafwqJoC3tCYdW3Hu1coWeLqqwZngckoaFzjEUjBgdMkxdkKKdt1rTTwT9ZuLnkU9EVajByrfXQMm",
  "key11": "5krfWVvrsSaPWnk8FwmHsU3Bz7YnwxpbHrECSjWjXMB1N68qT6cFJJJViSLf42fn5g9o8F3dZAtxm2NuJYohsGnT",
  "key12": "4UjcovW25eSfSqvKYGYvHyAvpusLpfhSaqUXw1ZA3CAU3KEfMtRzCZXch3RkBX3hi6EiXK5MDiPEuYkQKyG4jVFG",
  "key13": "4jX9xU2nehWedt4XZwdXhAqYjCZYq86mmV4YM6hakH2MPJ3dQUv3uRviRf5akUFDsGTTG6AvtKWqjvqiEhTZEKd8",
  "key14": "5eVjpUrx7gFUACRPsjATSZLQE54VHLhfKbsxMrHEKk5WLh8vyBciWFyrXv9bMpBFhmhxN1yvLB1uYa3XXQsokdr2",
  "key15": "4mXbbLQ9o17eUL7wmbrCHiYRUGp4smBW9pztFmKbNG9EtuhvZRyQwSaaS53gqBJrdrJLNATgaLBiYbwv7qQMpymh",
  "key16": "sBTT3kokFuLF5GYzGNhb51RRTAPMu5bsEtjE8pFDagDjZfdGer6DWdowd5JobRKkds7aPMgYLBMnki4PFSRKYMY",
  "key17": "5v9pvLvdKzn4fb4n9mWZEiNKU3YvgBRApEzDaFM7rr2QTd2YtQB7ZsuJZS2Qhf6JPJxgHVJPMXKSMQxGcnWA6T9f",
  "key18": "21wyiyTL8g6hMcyY9s5TrAdExvCcV2RWias9K2YBzo3LnHRD28tKh7bmoAf5uzBkuYnFp3YocxA1wdBNc9tPwG8P",
  "key19": "664Drz2McaTbmtAoBHhLvtdoERRDivWfstwizvzz89FXqij1E9NJvfcMdSSLgFNfdWPg42CQqhqJWxvSsCb2ZQmw",
  "key20": "4h6UXRYwZgtwJ1qBpsh5CQ4fDJtfYKrYQFxzfieTgq39PzJx4mXxLM1VHNdxNnNBZ3v49gnNPESnx73XLbTZt9ug",
  "key21": "4bxLTNt3infeeLfTHnsHHLF5ArsUMTNt3wVi4QERZiedK5bhUyYD18wCbgjEsfskytnmYKZ8eP4VHtRtHtgrJTEL",
  "key22": "284beMbF2M6KHQeRwZaNGyvu1p5Nt2vFgRCDe56F6U5xDMc4sdqYrDDao2uRahdXq8kbmEjWEyeoQXPvUP6w7KQs",
  "key23": "4XUaUx48UHswh1mgo8bS1GodAVqfKybD4VVPWNYmKdHMASCfZh6BPyMo659eo2yZCWLiRSBk5WACBejSDaWiXn8h",
  "key24": "2qC2nEL9KncFqzhpznuJWHxsR6spyu4VYNaBmJseJyb9t5SMM6EY5PCUYkYpoRJssmNZWZS4ZE7hVyozpq3jnZtS",
  "key25": "24ZPZ8mqxJEQVCnmjKgbVMxcJZDjrX4wKjngGP97MoQqgiUg65xhRtsJX6uHDA4rwvH9Cz2UwMXL6K8gdjiNs1q6",
  "key26": "26sJPBA4vigLn2pherVBjBxYAtusBZ2hqw81oQ6stncG7uNCHqPq3mYpKy5Muk7yAjDuzw7x9XWG1tT31ovBhRGp",
  "key27": "5zXNGZ7JzS9eUQq1E3mmYzwK9kTYEx3pk35HCHBBJXXbYDgZNygFw5xECfwjb8abwEpaFaTNPdgw7gu1ykLiAhZv",
  "key28": "3GmvZzy7c3iqaYdedqdJMAUuWvqzLamLgUxzCUwJ7jFY5nkvXavnX3Bvf28hsvgyJMoa5oXG9EVMXFikQrZsAvjr",
  "key29": "5ifNxhMeKpSNjn8DumWkzMhrucoWGnVEsroExPhoDpa2MMz7ZB2eKZm6BPX5GHr81QcFfEexM3gfpsBB5euKeurX",
  "key30": "56BkCLvTetgbBNMhcGKByL9FHgC1e19ZFskoGYG8bv42VMVtj8iBXJTxMW7V8YmrfseEEBN5mt3abn3JQY3A1wz3",
  "key31": "3b6cdEV4C67L64hA6jy9sZaRPVE4tJ8uP9xWbK4wydkGNtDjE6i8PZDVZg53gLD9kGMUJLhmhxve2GCzpeATgWHk",
  "key32": "2u4tSKVFiEiz8BE51qfY9GHHZXmrCCBRy19P14nEjSwKXyMLTjQDSQgS4w8PWyU1AFy8XKC4iehstLXJqx1RHwkt",
  "key33": "WcBw3Ywp6cj62EhKzo2CTicMXBAYWCH9QDiwQ1dAAVAkG3dAqqurHdq2jhZbEsPbThihzWCijoNDSsNvBpVHHQt",
  "key34": "P41kYZhhCbQsyHKW4Kg8716RyArJEQW388oGhQvzQVnLML6n8QYTnhRWv7npTDL3YBFDV7vyaYcFt7hHuSC3CXY",
  "key35": "47KKZ3J3cWsX6W8CJtjGF7trXDkEp3GUnuA8C5Hkg4XvRDZMnXehVsYV67eimTgDSxAY22SBXLEDfZNqghxMwrnr",
  "key36": "4Xu1QTSsVp81mddNyiXX7h6JxRr9HYzGKL34aHM7SBVotqoXdWotzVRej1pqpTz3auUC9Gko7WK53jRKu9iJEYXB",
  "key37": "66dTBBaU8FNe77PkjW7ZncbGS1qSCGCFND7Jmv8TXMSWpmLqi7HP92yzDMFRzpXRBPf7Qr5vtw8Lu3YgPcpCwszj",
  "key38": "5DrnGM7KTXvLaM72aiKKy5fRzVqFY2VHetE3e5u2utaoHWP7FBwLxhojTpaJmxwKD6JaenuR7uAt28UapMYBj5xi",
  "key39": "26pW7u6CT52BnmZDbxtd8uoUmmRQB4mmrytnZoeRmT4KpjREtBMPTurZPkoPF8kq6vu1CxiTn7H4NCzc8wXYzxhA",
  "key40": "4LeK5X9JZay6jRk3Go78tsEbN5RocTmpVNmFiEDToT3KoceuMrAtGBaBcgpiVcdDKEW9R89Le1DBuxKLz6Lmc5A3",
  "key41": "3Z2FrqTrz91BX8dPiVfa2YwhLPbsWXxNudy7dC94JhpQjqpvXuw6qUk3EMmQx2QU9aEGL5eFaqM1NiHe1YRFKeW1",
  "key42": "2hDohPNHMj79FwwYy6CU224m4ihagDoMx1F7J9zrJNd3wykHzDeyUC1UZQA2UsbWKc3psos89eJyQ5cskL6MhdAA",
  "key43": "63T8ibfTsh3mFCJ68bmKUeb349aWKRr1nATKYw1ff8fxp3Rf82KYqZ4EC58yxCgzyTD74paCp7avxLGy1bSe8e5d",
  "key44": "62d5eHX2x87DdhTieyh1cVxmeT6MarxQaRAt4mHwe2gvV48xFbxjQiFCVFAH6e8i1NEbKhQftAkpy5EcSqvXGrxE",
  "key45": "3jeaX3x3dsn5DaBpwpQ4Q7XdLyU8ioCmSYn4fNk9Mtqgv8j1CirrBHj1FJRazFRLfgaMAGvsNmitCSKdp1vimECd"
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
