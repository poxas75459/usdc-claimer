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
    "5cDQ8zXNgpJMdAuSXj8zkvij5GDkM9UBvT8XcciQceLnNhD3ju4XgLzjeKx6AyvurNoyjYK7pghGddyHJxVvt2Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4saN4gZfUXe31gPfdvSzPDPik1DkMZ4w78TUKdJvoEjfgtHF8GkNqwYb4yemyBcS7nv53hqdJjXhkBtUH9ERJaqs",
  "key1": "64mJYftNePc18sbyRfXqLJqZ6icC6t7nT2NTPvAbdqTyxcAm35bndf3S3VC8RD1o6VnXr18jejpT4kb3FccfF7Ti",
  "key2": "3aRnDrrVLnAHQ8UkiaTPcwwe343aFqmdTr5o6VyVuaGiMXSFPkVeAeYk3LDDdhTNHywyqVeENucSzSYXnqsn6mPs",
  "key3": "3rUah6FutbLksPDJNeqSYrheD8ZA6HRVE5YKJQZeZm8hUtjKEe5A45eGaxQymJsGwwYg7pZczig5x65a6eetHE2d",
  "key4": "4wdPC425XMYf8APXmN2qVLFQTmVbE3b7bAhPRZWosJBJeAzg5iednRxbx9DXwiECak6BJvjmvopMhGQP6WAqF5xu",
  "key5": "3azb7fJsRm6h39HFjja9EYGgJ5faYkiLirmaiQaPgezBKJLF2hxb4mVArteNtDUNuyJGDd68owSSYceAVVdHarm9",
  "key6": "epfmY8jJ32r2PLjcqNvyrG3vWtY4QZ1kdPCa2T9qYKB5wXZLyYcdJeSGFQ6etGfCFREfBPzyy7ejChYiX911hHU",
  "key7": "27tR293uq3GaMq4RCYbQnr6mUthCCMTeMv1hwnuSCkXw9UTVqSwbuoFQpZRgz9psmqNfxFwHNNtQsUPXHx7yPFY4",
  "key8": "29dwp2gWorbL2HKA244wZzw9s6QTzmAfe9hdrEqcjhDyhc7WVfCUx2JNXepVrf54f5gFvfNxPtfax82V1HkjPNNr",
  "key9": "2kHwqzvqDdCqcuLLGj35PMqfYUP4Z7ZSTNgvwpSAiRp5doXUcjetGnZXD2FzmqtqLKozY6ZUMqPkniGFoqTCyisy",
  "key10": "56EcBvpqe6d7AdHVrHFfn7VG3QCVZi1SLRZ5zwDNYc3EM3pkroiv59Kpxw13uMPk256NWXPta3aEDiqYQmbjQasz",
  "key11": "25gdcT67oHbkK2F3zEZe3JCusARox4LNVhWffjWrRfK83k2JRayS8FWcKaxa1wnRt1DbUX6yqEVMHhtwou3vCxcd",
  "key12": "GizQw66LR8K2qCcgQ3tz9LzbZWNPXarp8vpwpmNLwx8xmVSJBH4aaE8C9RrwGJ7ZXDA16rKXFsejVAuEKrg1MJd",
  "key13": "4gkWsPxfbU3PUVp1oiTMJqxXdourFYGwJ7LqvrhKVzG59uMi5YuQBJ8PyJtiLURxHkHUrXQumeACLEbYyANeXV8A",
  "key14": "3WqAAfNK4hYGXuUkoVF7R8ncaXwCGkxa1UMakAw5w8n4b41m3YVBbfqR3wkaemYrwBKvk3pxro9cdHaJeKYJxuYy",
  "key15": "tNEcpEXtfWKWBjBd1C4vzDpqbSCbg7S7Hi5itNxfckVuhqHGGDrLC4Q6yvA1zQ6uc9NPtmJDSn5DNopD8tLNLxA",
  "key16": "3hWNmCr2d2dG3SRCcGCG8JmcSA2wTDSYVyXX7TEs3iwzkwfbYS6PyhYdUzLYMVepFVkHvYEVxkC636ifzxuu7eT6",
  "key17": "537nwx5QpiQD9YG8Qabi2PWeJReaW93mZybS5kEjK3f2mpEoYGXiJUVuomxpyTUua5zGbcwktqCj1KXF23dbSrxY",
  "key18": "5VcjPdiUqSPtYvK5CofwKq9FicunNvJhJd7yXJRNZr9QskWYc137vEgmKKZ9s76ffPrY95CZzV9canwDisf1pirp",
  "key19": "3tRYTajjfmrVhqrpTxnYSNg9JyN7XeP2jw1m3uRYfWGjqwJAwJoqxsvGCmwjFXQYZ61A5RuKfuDouYoeb9ZSEeqS",
  "key20": "4qZusXAKpKuvK6LSrqP5AXkFevuEZ3RpBRC5FdSpfpxuwcZMsS5QdKDgSBdfJSnyMDLuQvhF4Nsr6QJnUQEumTLc",
  "key21": "XBgZQquJ7SR8MZoHwMTwAm4Gjk4bLZhnNqsfSrSLriE5VHfF5r6HmiMwfPB63P3epFTHs4gicfJ655fbFbtwcGR",
  "key22": "4ub8aX7txpKmwNjJJR2SptZdEKobKJ8esdLtmmRno9TCfjjuM2JJC8fo5WZ51JYs6AYPE1W9HfP2v8iK3jEsFMSf",
  "key23": "3z7DMY68wXqZjYyhSJpu5FLGcaWsifrg2HrDfrXof3YVeiNk5ELdYMpAEhrK2CmXD35TonvZrmizHMoewcfKNEXA",
  "key24": "tiCG8TGf327SSesaSiFV9ef7F1aNcJvSDDx1AMHjV7uPNNWcc51HeZsENyJMpCMLi64heSjDWz5Y8ETXHsFRsqz",
  "key25": "3SAw8Barn6gWx254dgj2QQBpwVe48ZpnJw4z2EkDccqMJKfnLTMKXsPUeZMzUuqfDqpGn5bE3RYbAe6iBXViUECD",
  "key26": "4sCGr5DMzcCWxKbSxCzTcgKyufH6cfVN8zSoZhMe8tJbEy2ibKUhLv5r3hw9BrCp7aKVapsGKVgiHuF3JDhHqKim",
  "key27": "3CwthZwSYQCMEWVE8rTuaQPe8rJi5LVHkRDR8KLuoVWFb6mwGm5YeLH4wq5qXNeEn19pGvmiEq9btPwQSovy4T36",
  "key28": "3ketpvqAjCE7iSDdaKFBdN1yz5Zv2PZZrYXhnzLYTjMQM9ppqJVw8tAEzzyiZJEvydPkmVp3A2mEAjteKpdKYmKc",
  "key29": "2EmFr3RY1WrhCturht8UtPxbBSFgTN6iPMw1XzXy5D1asXMSsaBofvBa5acwhgR5eRPee7LP3edmDRxz8S7GmdgY",
  "key30": "7WKzYtJ8geusrUCwo35LXCuQVhZY9w8gGD3riM11g8NzSMoWyPcgc2NyRUyXpmJ2JZygnEQwUKGys3juqijhXYQ",
  "key31": "56YHBuXX6jCRNQLvveU5pgJCGBH3afNUZzzeWo1B1Lj42yoywzwUzhKu74vFDQZCxikqgBqHooVtZMTMPbNkKsNW",
  "key32": "5CiEn1J7e9pC5XcbW1E47ArEziXpQ2KY8BnUxTqoxR7QEzmKLrjcdMfouNCZXi7jp2Rq9LxYJK9s6sSHBPV7Ugrd",
  "key33": "yNjG7TiXbBrscG3X7wxrAgemPcsthNgSct5Ar2guAN4sN92R4J3YKt9zXua4bdQQKXzymGHSHCJEU3trphJAvQJ",
  "key34": "5JKMH9zMafSqts5qSndF6VvbHjTjbqWU7jVNLuyakBAVRTDSdEdGxa41GeAnoh4ARzGKA9BvGTsDWv4tBCD6XBei",
  "key35": "4scHqsH2UsHAqA9KarcaXCHDPRgsuzvw6n3PUafVcayVamPUCJvVE5QsJtqGWkogbwWa91LXSc75sqjbyDLau6Vd",
  "key36": "2WLFeJPiDYyKasfEWgBjzHrmFpDWEhX3Vu4jGw2uJMmrz7SPLo1zoe3MVcpXbMHcV8s1cW5yLw9BYYYM6AQpq2Xm",
  "key37": "3hj6Y9boBvXzooHivNpGpbwzhY6PsKWK5DwQev4Sw6trd2YEtPKqUk5ToFCpkpVhEeoosfrZZGc6NoEQnBFKHVnR",
  "key38": "BjPtqkbn5s7CxA2heHdPrukiWXFkxSdEaM5ayneZBz78CW4eogSeTRRRWTAPAPq1ypwySqHLLPVop84qyqwUagx",
  "key39": "FaXzXYB1gMk75A7MkZ4CZKQK5pwaoUH9S42xZQmHX4unNzuvRvPgfdMPm8493wuzfYu5f38XX5cAsteycjQHLGN",
  "key40": "1vgzMc5Lchrud4sQVeu7zikPPBKNPKHEkVTik5mcUWdvdV2KLKB7XV1aKQNYmoqQK1dCNNqpPef9iKSd1KymZnG",
  "key41": "3jry7tbzzGFjVzj8VkSjk51EXdbSrYDpE2GxsVUs1ds6t2ayZYmhdV458sR6FTiwbhrKspE8pNhhbyQ8CnKGsG2E",
  "key42": "WPL7TTh4YpcWjK4VBc2v11kEAZM9xfcdiMa7KXXCvTQw6ghZQFXeQ3f6qySzWfgET5wdJPy2A9R3VKSF2U2Bg2Y"
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
