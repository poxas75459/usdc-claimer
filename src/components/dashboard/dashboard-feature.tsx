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
    "2wxVZsY3TRXHu3cvrP4CTvPcXLUs7HFJh5eK49CfwyeaJ2brF4mgmRexLiC3xkgREbVfagsBwiX5Ba7mBJbeRQ3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMG7SWkVcbEbvEY4mndmn2MBA7DtNW7nNcfWX48qCJLWmuHrVpMsrukSUeEBmAQxc51ADzn8wE1kX6vvefZXBFW",
  "key1": "3bdMrGYdGjhedh8EHP3sewoiiLwGDZJ1njuFiPxRv6PeaiR7tsnoPhpsu6ZYdKQhD9mFPoGuWfXNxXKAzMyQrPHB",
  "key2": "3NJ35LK3ozY1o7TLPhgWQHeYVMATU2XtvCBaHZNiWhJrgXh7WNXJeEQHN94Adx16Q8t2DwXnFeeSeebjoHcDoVrT",
  "key3": "3tqcRJV3Rx3q3jPUfQPPCNPCT7o6toS5N4KvT7vrvgXHe86q7pJToz4hwboj1QUmVt8jAH8YjR8z9rzoySq8QGKE",
  "key4": "4gDe5J4Wnhn56Xu9MRDrn7TRYYTGSbb7G5GCXSudLjhRbco84YgWP8AqS5wNXqyPzGVXFtJ24a6hdaCko649rUYZ",
  "key5": "4mYo9GbEFj2Hk39SPmnzZxvcxjTcWTfE4hUz2QnhiNAvF3QTpvv12t44X6dPXsYEAYH2NCrgm7mZvV2sCZj81DiN",
  "key6": "564i9RNugrruNJgWvJ5aWkGCjfiFB5CAWg85mpD7mxa9kHScqUbJT9wcvPQr8QzGtRvctZrD8DwAHnkG2PAYpcvq",
  "key7": "281GuxR32M9cvC2W8Rw4bp8im378ZACNxmwFZNQSv2FYtLFq7AE85hCfAtLF9WeHj6YdZba3sgofygWHYiYht8by",
  "key8": "44E6DjhJtJMZg4TWe2Pbi1WC1Eu65b74VQrPUmEEZ4uhucNVMAQbwiwvzjFxgGFtyYRGsfx59MDfWhA3rDJ9FBjR",
  "key9": "2JMUTjQy9pNvnrrg5qRXbF2Rdy5bRV5vNLbEoeJ58shNu9j8LpyWutU1uZ8J8Pp1uNq415sp3pUtrBJYW1buFrfA",
  "key10": "3trFTSWixNuCDPUcSntYtWr82pNUzZKDKZEf15YaeU2UisTpjWvScBWr1UvXiGQZZymeHLi3AiLPz1T2AcX6pagG",
  "key11": "5dGY9TLMYWKm4AWL3DX7rkNa4FociWnAZiLYrnJMeVjWmVBXcAVGA5NAhyW7qPskCNLyRDgFPrdoPSh3swE2uYdp",
  "key12": "4Hv2Dh6N6eSrqxwopdqF5yLBdJzW3N2u9ewvpBPa71uBHZB69z4UPwdb3eUFUDmDAcN6xKy2SqEpzPuxrMHxb7S8",
  "key13": "3AC4Rx9KZ3jDk2uoffkhwEugsQFmrdfcXuSry5JZUWi5MRLV3DXgYy7AsFqge7sgyzr1dR1iTfwKGStzdgmUchXQ",
  "key14": "2UGK2VaegjSb6d6kqo3fWAtLY3FbY5iwdoeaqbbLyZ5G63vB5cgcnZQnv96dmLAjRXmXPeV9QLe4UCwnag9Knd4J",
  "key15": "2ipcSMmVuGzgtmRQviiEqiiia5QBoAim619Q77h79JQTeGTviPbhkQKV3rvz2g3uqkwZCjg7euqTGFuoVNBirPds",
  "key16": "3CP9gM5UCod3vGb5YMpDfdza8ByCDAW5EdCNLoNPK7gcWtH6t4RycgFXWQJqd6PHXB6MkGESVS6bY8dsFsXgsyW",
  "key17": "4Nx4WbHHVKfppPJPBaF7ASSyR6sK2JTMp3ecRDJvzMdB4UMwdvQo2BUJea8yrDqMkpndtTWv1tghfsaL3GmYXjZf",
  "key18": "2ia5EYXZ679NxBk7LsX44q21k5aefeffJ5Y871STySdHWkN3YA7sBaMvNUTpMEP8quuk3tWMgBoaUjmYxdbrHe1S",
  "key19": "2w4ddwuWQBxSZxdKKoSgwgxHbJmvgnGzxsuzFgkvTQvXJ6PGnWXFYruKuMWr6XLU4bEP1iyFYJ47ZThXBHqLXucs",
  "key20": "3oTo8ySWrJ3wx8NS8MThNHEtpR5wV7gjR5spTXxpvpgK8fB8TT9NvHTdcLJDCivPmLKFLeeCrVYEJvd96uPBeAhL",
  "key21": "2NZ5RujuVpPnkvMk88ns2U24MZjCHpm5UGkJty8GYffATdMBu6e8G8kWjwcTptjzykgjcSWKtRhAAXtJQDhgDN2u",
  "key22": "4Qg6PVTksx1HARyo7rhF19W8i5N3TLUXJg8r78gKsbigyZvVkPvY6H8tQBdBgLHtoczWDC7rgN31pc5hrHF2Qx4Q",
  "key23": "541S5oiKC75ZGAW4Xc6zy2Ktw4URdQfugWvTVAtmguvLFUbX4FDhx2DuYqXWzpMskk18msJHJPWnUWzhVpxH7YQX",
  "key24": "5xJmSTtftHBY3aQ8TdQZL3ffE8obhag6Ct1zXaQKKohgr6cw8eDwofnEhi5ZB3ou4cXeb9VWaFJUY1VuZnSHSWwS",
  "key25": "666yo4XsSJt4JX1ScNLrvJbDFa2ZNFEAD8RqHUm5S9VyEisokHXQfcWnPtNYqXPrWUzMyk3CXh3vz8x4Evhe6qGW",
  "key26": "pp2jGEPWfTZD568JGEAUH1rZcFTjCHHJ2UpYYw2ujGfdUAcHY3PcDNAEiLKfdjuGv247QrBCuidDgQWsWry38c8",
  "key27": "319Anc6pLhfhwP2YGzDzRFtg7p6UvUs6YGh7LyaqTAQm3xayzdzWQJgWcwXMEeQaxTPwgUtXrNCYguSbvy1JbxPx",
  "key28": "3rWoPoYPsfwpLeyezdi178PJTCkxvGmdTZ2bHwHqVgQFJoKJ9YTcR9GyFCCHRMokfFB6mQQFM3fegmc2TvoLAGi5",
  "key29": "5b9uPQRDsYY2f8VQTufFmxWP9jGFEYCqDreWosAJnahqk7epSTwQzYC2X6rrPFjZk2aFgHppfpDawbjTXTWV3cCG",
  "key30": "22MX9u3bco2eFhy7nRzVU5SiHKwxQpQneY6r4gVzffjSGiE59ZkwLw9wepX3LJVtoY6nesh6qDwgsXB2p4tLRSE8",
  "key31": "54kicfiegz72jEw1V47LoUb9qhPUZyZuMTSe4eMnxDLs2MELDZjiX6T964WmdGQJEffLxkM1iVGzTJ8CRwfHXGrD",
  "key32": "5FkGm9oahPzszkFYZhC5odQ2KgzHmqBzzoPZi6MeaZd6Y8MVZuvisaNDjeBfHdazkxhMcHCKWgkvvdtsfXtva49p",
  "key33": "SMC1cfUFQiBpWjk7PYEjQ2vaWSpPr72XsK5eCuex6DMBeRqxPVvovmPWZ7osf1mUeyDzmYPbHnyQX8U5Uzsk243",
  "key34": "5ZQkR4Xjzp46GjJTZ2XUL5hJNM6psRP3ccDjgFfhWg8E3xUx5s1pqfidzLX1sY7KWtB46ikAxhj8ax7EmrUcbtVf",
  "key35": "tZ998h6aK7xBFxxG77XLk1QcRkgrfkpuLtCKYudGnqp6UER6kmZNqdnWptpUp3nBgGrN7ntjpU1tvPafGNbCHjr",
  "key36": "35ucguxCcSpKAnWSSaEfbJTxm5jBGKaoGDAEDQivLCMfx15P26rCF5ntzkEXHHDSkXJDdmuRpGbKEmcPAXDCw3Vg",
  "key37": "3mZSXEuvMhxjo9o6jF3WRFuQYndEM5PvbFEDTidwbswAN3Y9MFK1SHJpDVdvBTcmkTRWq1Neh1FyNRiud47Tx9xX",
  "key38": "3i7Xg59n6VtZiVPutj2RcTWnHkDYQasySJhs76z4bqZXhCUc6YF3DdrdekFdUfphSA19LwsRY2HKLLaRGEeTLxEX",
  "key39": "3ycnRcM8fGJWFcVD22NCcW57qQUN5HUS9TRVAhJhTQ8Xh74T79nRRnhtFVSeFHeugABEAqA7G1osEEsS7b483oRA",
  "key40": "67D1Nqdfnq3zobZKLmDHHGazJDUnYfcr3LdnaCdnQ8MoPhWrHhgiyguQX22uQirhKUzP6LRd74dcZ6cw1cSXFQYH"
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
