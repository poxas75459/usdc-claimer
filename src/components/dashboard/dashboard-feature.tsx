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
    "LHfCWnNWBVq2vcQNaNPYmaF3CXAjJeqnfYoFmoXhmpwVThtioo3K8pyctfMRHU81RLCS7J6NCXtYzKKNZ67LVz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UcT1uRxBNWUj4HSSDJt6PW19b58C6CotMS9FfSMdNhHLyAhXstJLfKDrMZeZxH4kKbi4EskeeGxcMQq2hpc2Wqt",
  "key1": "pZeRr521WwrGMSMGVZd8c22U5tp9snjgvDXPv1RVeA5D9eZSQrUC1F7JdG6o4Zp95cfQbKVPuLfxEuqW2CTm5UB",
  "key2": "ZnbyprvVEZSLKFoPCPaxYVQeS7wPnNV7or6Ab76Zti9si2tJUisCKUa6D6NxvahEp1uEZe8gjuREmfH86H1tbQd",
  "key3": "2QjYa8ekkt1orGVGbArR7icHYLvWtfss97jhghF8nUDszKFnFiZ29tEUJZJ1CiP7zufjwxnEAg1mxhjh87b6tyDq",
  "key4": "3C8RbckWkKxtSJmAqx9mzenEdT9qKPF1UBqNUUhs7gkrFgjTLULye3s6W4y1MogZQpyveHchEhYNAQA8yX3kWhBs",
  "key5": "5AxPjZeYDKLWVbqyHMNQmVB7ZJ9gMnT2LCn8KJLysht4A6ZwyRg28kR2SqYguoMaUa5SKBvCnfeSRKpaHNxLHjww",
  "key6": "NMRjedWNcJqb2nsaBwc9JhGBsSj7224vjJMPtpH1d1bbgbsbS5ueb8Uyr7EudNU2RRorLAudCePKwZ6xfjdT3XJ",
  "key7": "5bofHBUxHdHT3zHp8Uz24qTXK74xAVAr7wPtvd4mBCbVYpVejL3W5heLSvVmjLGtQJZpEMT4B3qTngNSAy7BBf7h",
  "key8": "3JfP14hNz7H42D3ZtHSqcacUwnqT99qa84xsbfcd9jELB6ovNHRWRaM4c1FMNiJPkHvoTsgnUu2rVfttvuqKA2yV",
  "key9": "pDFgp3W7xSbunmUxUaQDqcZU61mHZTLVAMFWxUNPvQzyQvUB65g3vAeNCaEUPdrCXHkHtPsdgiEJH76U6WNfUa6",
  "key10": "3FTUWpWWrW1EnpbbBLPDuzBiW2NfgznXXT2B5oexfBffCKdVNshUrxp74uf7JwDmwqBmPEdWojQiS3HP99JNjB67",
  "key11": "4RibdazFfjYCgJ6tLF28p1VDRaK7VrfrcudEjgaAAhSEunCojM7VSp3GDR87P386dRs9Y8GMxqJQxfxBDKYpXsCR",
  "key12": "3Z3rfi5VzgJFMexGrf1sht1R2Sq3dHbzPLRtGj7SzzHUneuMwRf4zYXa88BN2AKKqX3jYcGSRzoJTBKuzH6z26JX",
  "key13": "53Gb3VZG4X9rpyzTVeL8aKy9XMvcjy3tJAEzcifhKxXVrHrwBmMng9XSJ7rLVBf5a2pLs3Cn3vM2mEF98WquxyTP",
  "key14": "3x9ZRTTztw4j6vrwxsSnHv6t3pgWJwNx2sf7Tn14sZ65sM552G9bQAGaeYdmc9jbpKRdxsgfi7FjnXFAo6Ybh735",
  "key15": "3ux2qbGV7WrmkMogdFYmiQ7k9KC6cS8MJgMFaneaBWXrUN1JRsd4H6XL4Tzwvx58vvZGJF6uaqWr63f4mQ4pyoyV",
  "key16": "dhq3P3T8mF8sa8X7AMrUuqLARqoaYvEEYp7v4Cq4TaUarvupRG6csbFxgMae82BfNjNL5KpwLqwzyAasZrkDkr8",
  "key17": "4QKk2XWxedSWyVYvd5DjWWNfMQmkib721hFbyJ5vUad6JBQVXFddkocvC8FMmrwgZZKCSTC7RnDKqdjzVnnvk4PM",
  "key18": "5XN7jkeu3Hn97BGtHjq9UDUHGSAUuHHRbxYrEdBFGBG9YivF5GaLh934rTP9r3bwbfq2UYLKvNDbD729Z7z49GBq",
  "key19": "2hi4GnotEEPvDfXDMi38pq4nAWtbVGfDbWS9Ddqot2FLrRzKajcAsyJvgTsZ9xWBcGAKutyCuL3kHSxjoucHkTZW",
  "key20": "5qCW8Gs91WXCJ6qc3sc8PpXkYYFarKEi32PbWPATYKyNMSgEz6B1Pag28PqLuoDiPPd7PuGzpA19a4UxM2cTDUPj",
  "key21": "56AZ8HNnhGFCTkNG28qJGYDgpSWndMK3J91BgoctC1E1rYsd4A2VPtdT33hfdqCKn8ji8V94Rn1jdZfep5FT2Lfn",
  "key22": "3pE6QwuuZQnC6TfwCyeXC34ehMhVGkXSbwizSaQQ8YBbHSWW1Z2GEw3HCzMDuQq9JBMQ67gMGmSiddyuq6xKZq2j",
  "key23": "5goeKeUX2P5oBznFtscf2iH5XXCR5BwoxE2PKun8xpCYNUvDZimv8xLs1dQgtRWny2mgytw8m2Szh7Ny8jB48w5P",
  "key24": "2KhAZeZZff4Po1n8gULhKrcp4eqz8ZMgemPjDxCFTAG7qDGUkY9yLBUt3idLhDPUiZeNkubktB8FhKLuKg2rzzsn",
  "key25": "W9yqW5tEpw5AGVQNMxFtr8qWnYyg8Gz4MZVjadJS2qakAVogxrbwVgU8q1jHU6eJozoBLLqbZQ6Vf71WevxDtcc",
  "key26": "5Mr91wfyyFpPDn5iAkJ9xCMfbjLMTANnFdRUpfAsch8iTPAmiusPg1wNYJxb9WRtwUtkqWn4mHkLzDrEmM8wHyHm",
  "key27": "2GnkxfSU9TpEe3yjFYUu8CBFBW6L6Eq6YrdJGFM91k2dwKHbmPyiU4UDYouaB6zdpCNaTXFpKpYXN9SzWkz2J8ie",
  "key28": "2LdHxS2aaYPcmArMVZ89ihsRs2jcSzTpFzVgZPpWh3iazR5embRMDuch2ZaYwsxiCC6yTUxUtaMWNguK2BGsyhGQ",
  "key29": "36fLYkjwMWHJYfLWJiBY6SNWchgMmQ7wUDMQ7HW6wCAP9jCFmctqjCunBGVE2nCCwdht62ckrbaGmobrYT9XHzvh",
  "key30": "5PE1bYin3cAt5u9kgYwzzwHLUwtETP5wYzMgZpmG8QQPcwrw2jtgejb7HyAgJHZS6BBBd5d25rWSzYG9VLnzWUL3",
  "key31": "3X4VPpCrwb8cZsQs993eCJf5hoJF5ffR9wGW95PJavzVtqZdQrM71UiypoDyCLE26EkGX6prkkSA5SiFXAuPoBCs",
  "key32": "2wWKZso6R5hPCF859jt5CZmz74RYzVRE6kSjGWDYYHfvosjTWGSsfYii5ABroWmcjfWqvLtKPT7qB1W1gQAfEFu5",
  "key33": "3e8U6fTwEVWZj8XhWLfWxENnEW5CM1GUtyyhDvAn52kEnNLR3qunGTpFqKGx3qGFFBCuBfKacnpL9QTBqFrYe8GM",
  "key34": "14iNneUDvmfnNnT5mmf3kvZjUWgtJ3kfR2zsaouVzziMXkSoKKJ7VDsDJANhtZTivhE7aTgBgUwnpgvDQoPQC6R",
  "key35": "3wmV4NeESxmcaTFFBVxLB4KkeGaWQBffouqP28sghakr71t7BH9312YwZPqRwvdPxrR6EZcnYrKBc45GfsPWWi4d",
  "key36": "2iWpfZarpxWSoKkbSYNkmTcKVfFzbGLvayEc4ZoM1MdiUdp1RmfU3MU5DbnjgSR39UBmZdQNich4mUPmo3BfHH1e",
  "key37": "4VCQk4hnvzfn89MDr5qCPwBCwZnL1Y9RFMsPpuiLA7rJMLV6Sq4DGug82KEtNUQYisYikZr9esC4uzTAhqYbstjd",
  "key38": "4b52kn55A5myFTP2WnNs4Qk5wUfcfSZ31JCoGyVbFnNzkz3mWrpquSaEowfnQngTYKN8YTMKAJzRsgNra5nrFFVc"
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
