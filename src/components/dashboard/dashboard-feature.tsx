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
    "5CMd3SomHvA9RxuYb9eRtAiRD68tYeNZZrFH6MycE4yrWQTbBVvsv6sv9MFVgcefYYGDXEnqj9VtJArwkYnkoDHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hrtPjWRKufHvm9msu4tBmc1xTjGAnChNfyKxoLMsCzcaDWYVoeX2nztkvFKUUKRfJPRXEG2rcqvVHiHz1XjwDR",
  "key1": "4qobuVmEYA6QHMrRUvbLf9xQD5yU8WRqSydNfEBh3mbgDVSvk9BNFskh22RvY9g6roXZ8Fxe5fC8v9fJDfKvezSJ",
  "key2": "2XSjXhjrvFbq4bFZkr832LL8LwhSfzKDd5AzQq2nEAFmeQEswZ4SjUk1Cwgx9iXQkF6qe3oQNc7b1WCDbHMAv6eF",
  "key3": "3VDigAHHHPEkqrCVxCMvMGEiUh37i4HGpbMGLkrvwVTitXQRMdztpKRWRf4UYUdG98gVr4uEmnLMB9KB45SfXkAi",
  "key4": "4UZ4b6ByVkXd2VyyKEXkpSfDp6FHWnzEdUk7RnZYHNoCnvg5is3nxqiUuys5a5tHS3pRhfhJn76mvSmCn2fhnizy",
  "key5": "56y67ndNa2HfnneVcqfnWzMAnyiaYpbi4xjgwJLnxpZvsNU4eEBw76m8vjfq3KoWm8FUN2xmXLMbZAG3qpP74W69",
  "key6": "5bNnMFLRjmF3eJ3KTgqrPJkqu7GcYU4NZP3VYGfnwYFJHMkU6NRe9kx8AeoTgdf6Lwf8bSC63s51pjbEEmuVM7VH",
  "key7": "mkcF3tHf3GzqGiZ4qwi7xso3fJn3aem1NoYk6p366bZchyECYzVoYotUttSyq6x72mDqidppLEQcviEeTbw9H9F",
  "key8": "3ksi9mc33j4hobjs13Tj8HWJc27aXiV2M5LE1TQzkvoQEZ1THQnrnNUUgW7ZPN68aAiGGjMXfDSCRxBJor4iaKTC",
  "key9": "5MBt6xCSLRvrvDtfVfV7BEqruEu6sZbVi9vUop2UdXA9pUNo7v9cxagYwHsgQ2iWEGHS5K1h8tEwvic8Dr7jWrBm",
  "key10": "3z89dWzWyWJnVXx3Dkr7cYMuC54smh7WuRxC1ZiyKHcSBBBPqkbP7bpkCaqAzyS7Qy9NUygNtXHWmreXNwFiGoKb",
  "key11": "26uZ21aYDvcdTYTpyrDqciUZwNd86jJZGJSLkh6rnbky4eBKv7yyVCYC4pjigfnZwuCGJ5ESMzjCBgiD9nddT2Lp",
  "key12": "3ALGobvVgqBZxZeahBeMxmogggfMxZ2pzzrkt8QosugZ993k4egcmmJLT4VBCcV15d4rcc7UZa3AdRZdBpZaHHC6",
  "key13": "rj3zRt4wr5kQi7NDjHeEQ5oh77wQEsixSAhtXBfsrFZFd6p314f6VCqhEAqEAADgtUnp7j6A4m5pWGAzZqdqMNy",
  "key14": "sHCeMBpYKKgR5F8R32EjXTSgyHF79kzsamDqEGJqkceV3U6aA2QVWB9nawVaPVcYQdSSWEE1FYt4RsP16awMkYX",
  "key15": "3WnntHDBtKN6vfMRPgdz6yz4FY1SHPsEcvNhkBEabfmjzs7tve2XubmHrfShXbzxdpS1aLsA12etPP2wGPwhHUBn",
  "key16": "mJ11nFYk2qyxPy5MwSGTPDDo8FQZrm6tSD45g42deBV2AXeG4jTGdVJQbZUMzFcpAq4fsY93x8K2KNPddxU9XYN",
  "key17": "rPxcbH4494huHzY2xqSK6gJ4yezCemkwB1bCxtKwX6E2g14Awt7wJSJiFqWCUSCbEphmtKo9UQVxPQ5jhzV3caB",
  "key18": "EZGL2LpgdnJ3PHqTNLeJ9LkSDuT8UznZqoTcaKwNzt8qsMHgVzHDvNU1gKVTUWhn3a5FAVmpsDjgnUhP81d1SiL",
  "key19": "4X6jC8iEafmnYbRJDxAM4ypwgjcdF6VDkfJLoBdYeTjXM1GUdTdmFsV1BMFLpTBCzgNaRpnjkHAfn4CcWNH9SCm2",
  "key20": "qStDHfk7eM4vvnwhoNmoVmrGEgeuJXCagPYQ2td1vyZJH6Sv2JsTJrSaeS72mhteWsoN1B66XPp2Pk2KgPe3qi7",
  "key21": "5n1FNVPXMvjJZhy6nF2einHCnVAnVspMLJKjKW2RiG3bjo8NEZPQsenLmJ9KWcwgVFrLtTreiUYHiwvLm6ma4sR",
  "key22": "5han7o3Dj7ZYvj8ooy7WGW8toDRkbXkM83KeBFLy97ivLybNC3wgKeWEjFdWSjV2yz36EnzbndCGEVjMo9Ar18FK",
  "key23": "WpRYK4U57sNckkodpbeVRiFZmqPzQjNBg6DsctvooHxewZdn7wqb1te1FrBMKkbrF1SBoWm5kgoMqyv3hjovc6A",
  "key24": "4oEfzcfmTacPuAyHfSxpN63f2V6Dyh3Ac7mtgmisZ6zLBjR7rYjCfGBYnKgSFqV883myC2foRpudJaRvLtzPxUAh",
  "key25": "31mXhN6xbcmaWiftw7ZyPsYUc3BodBHDNgop33MnHRfzwJfPw9ntm6DmsFdb8rJjvJXieY7V1WFC9WZP58vmgcbZ",
  "key26": "5T6s5B5z5hhYeQdkjBeABQWfC9oYVGRW5Bu4Ve5NNt1ieQSxodqbNwepZjBU8kSgoMp8zSVgs4g8XECw97js2hR9",
  "key27": "4btdrR5R8MrkSGLCgNcLX9EZmnAQCvKc7wa3M8VcEK2bqdR1pSNjsqVcpVHo9ef1ZwVmhsR33ZR4SeED4YmQeHXs",
  "key28": "3Qc6c1feBep5r3AYs4wxx4Hy7y3H1Fft7EMLLJHJNyAUnkfo8HYYYty2Lyrns1BogvGi6hcNT4FiocHx7hCiHLCJ",
  "key29": "43ViY9qnnGUrnHFKwMsMq8rKYt5KJ4h8npmNGJHq3JdRYWCUjuzhtfuGGDp51VSm9K2AZobbnDrKqmb6Fvb63B1x",
  "key30": "5JYe2fwVKjqseeJxyqtJftQVegx9b4mNv8AWZ7UKmFsSznhewjSK22iqBcH256subzjgBGbpNHrhCexVZgomykSZ",
  "key31": "3uKxA2Lndsyzkpk9sRViV1FecFRpw42JxN58ALKTzeVEnFpDBJGcJDAyXKY3Fk9MD3yjN4mWRTa3hyWqJEQ51knW",
  "key32": "5PP2U9XmNV3NWntVEGuPz6wEByVCw1LrG6HQMk1g5DEc5PEUQ4xhLbrbjyPQt2mrPwmVQEB6Lhkdv6dtbGQ6EJ8m",
  "key33": "5CaMwocMCCK2k6wMbBTC7yTLxBBpqvR5VpStLmw6uyfMxWjaWZxgQ6vMREjhpvSFiJU5RwTrLquVvZNAjxZgCmei",
  "key34": "3oKiUmmsvJzjNAhiy8nzovVCmHoWyKjFgZvWVkcH7KMSvNoXfTY6mGeBXRG6zEnmfydupPB55APaoeyFWUcegfw7",
  "key35": "3ikFgyP1bgieUAyixENXLA3XKXn9sszAHPqq75njWqYkcD4LdYrpepFShXAb2rPSjFWFKSS2MGRqLnAvsEEDsGRf",
  "key36": "4UphZvqxYv3zFffc2EWjg6eoJLyLFTKfycSMgwLDb88MwVcDVA7xRsUz2MU9KuZZH1AmTbM5R3WvYzyoDE6QrZHV",
  "key37": "5b5CFDFigQnLECffMj8tsGhXkN53uV3bph5Zm2KvpDn3g9ffKo5WjviVyFe7xFzgzDEqXBLUL417Ck5W1p3BgkWF",
  "key38": "afetw6YEMfPyTwTAzsefUwtni1ASk5Xc8vMTA1Hdw5VLg8yNj4RWNkn8y1r2yR7ZrvPmpiMGBXG2WyiNGyaEQob",
  "key39": "saZRir3HdxZz5gNP7hk8huNWdZnN229Zoqbe6citUPVP3ZZhPyPELCyfwBXx9nMpqvJpd5CV6L52rvC4xR9Zir3",
  "key40": "3o2amxmErshtdJEuae4LpWfkJTXvKibn2As31xo5hqetprRmqoK4HGvgUAgQEenMb96NUYWV2zCsNXCFszwdUXM3",
  "key41": "ihafpqbyAUUXGSqQsPiY92AMFKfzsu4GHUpxwjiBWA4xz4fLgpV3kxiDxnrGVfBNVBakEwAL8Sa9czHgX2Xm5XE",
  "key42": "3xt97vbtacZXpfe6fEr5vdtC9zvbiGuzQEgRJKgHR6xKuVHHrjBmKM7JB9BA8cjcVFF5QcoifBu2ExoEWEwKemFj",
  "key43": "2FAaY7WiaxNBmrfrEAbaroDtJDYkAQxwhX1z2H3pS1R76z63p4Eq9D82NfFyrKJDVGwRfbGRbb9JxuNWjSgay4jY",
  "key44": "4DTDMbaFwgRaSH5BVbbs9WLTbBZ3misxN8Lfryw4x1xCGtvnTeQ9w2bNkQCxXyLvccGYUPxDybSZo7uiAyPmAzEV",
  "key45": "2uubrACoLSYnetFEusiGd5EyVBNX6QaAi4ctKPB4fJw1QM1kWsXRuSmcZTYgXfdPS1hdzQxmg7NKidrk1EJosekN"
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
