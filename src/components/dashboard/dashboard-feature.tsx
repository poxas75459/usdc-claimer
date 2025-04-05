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
    "4pRxfoHCoVGeF8a4feNehhE1BimuVmCBkAZq7hfCh62Yeg7BtFbXYZGQFFupZ3AkVU2ZtqeiztrFbhf1SoQarrgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdWx2Dpz67KwrntH3eC3WmeFEmRzTEMKqVLo2asU2BJJjoEDWCeZcBhjLRPBprtM59hjepzmDTifgAyhw9h7jsa",
  "key1": "7Hj8GyHsuN3T7BwArkstorsVHY7hWF7y5rCquBoEpedBfLzBbs4BxwMgo3yMosGmq6fvQGbqeNYgsH5Fqnekmbe",
  "key2": "5LeEP3YptEHUA9ZodCMU86MMoSdkseqmoSEEqtVivYqZwPs6kdCsM3EHmZN8NNyeQkxymq9LzNxZq9dHv2hoULCQ",
  "key3": "X5hu2ar7kcconTczjdL3LgTUKj9wctAUR1SXF3DMuNxqkZ2JThe13khGThHULk5YtrUm6JvyDDMkKVaLmFhXu9X",
  "key4": "34oUcc8FcCmovg1zQ1UomHxgaHreExrsiqe2gc8GmbdGAjWHFGHxRCJ16nSpymTuEooegXVrKXsvw5hcijsqfzde",
  "key5": "27FpYvpTyoF4sXSFj7y5vi8E9BwEorGraJKkLSBNMhbGjWvaumgB7RoVpmL2Hsjti9X6Ds3Me8iTMnxhHD2MeEic",
  "key6": "3m5ge8hjEkvGwNdEbpgnjzhZKBNnuRPM2WW3j4c8u2pcEMsLi4SdraD1iWJuxMUX74jDnPJYGkYLuUTPWk5kgPS4",
  "key7": "QmZh8f9JeycMpLzN8sxKDgWnHP8HFL8824P6zX6MEruENJWYADXYT5NyRjm7bJzq4rSWwHjEMNEsA19aoGxBRyS",
  "key8": "22bWgPonYaTP2mE5ENk9DQHjTLpJFhDnRsPw4Ppo3zDHsS8NVAAKqEMRwYfDVEzxiMGZ9zyQdGoP1bezACoeyhHY",
  "key9": "2B92qyLukXQV46gPAtdkedz6VJ9CEAtXv39iNvftjhJdnzXrGoV5qdCro45vxMKwLREpnfqJPfeMgMZL1TopcBXP",
  "key10": "3Z4ZEZ3QdEKR9ugpSFc1gsyjm1GAUMezoiuoDk8wbiUQ4gG57XN89Fz7BAyvc3M5Duf5dQemUu3HCv1mrpXQZbM5",
  "key11": "2dkoeke6jx5kMfDHM1uPLVLoAWnnsoPNbYvAg4sG8sVFxXL4e18WQzxD2wAyACx4Fgk1B9GAjKAMpVvvjMbJKejK",
  "key12": "4p6fqHLSszaQJovCD9AozGc1RuwqLCiw1BZSf1Q7q6ZVoNA9QejHdxKHnWKjgbCLZPbZphRMnyFuek5A9unBA2Fp",
  "key13": "5LxzjjoJw8cxUgTb5BjfuGS27P54vQb5ZaJrCnozhv6n75c6BamwjYYMohmVu8JtiKGiF97dq2B12johDMurxfE3",
  "key14": "3TYoHwtMdCmv2rGiaExWxU4US6sN2B99RycBkqwVTGSxRfr899CgwgKxr2eWeWQfjtgKQGLqgDdfCJRLqbv6QShc",
  "key15": "2aBFgVPM4hoyrieBHifF7qdDkWAqVNEzt94M6ujGgDHoEzp7v6WooNHLKPmjrUkLv4pWS2ZB4VwafDtor3Ja6M78",
  "key16": "27aGokg8Km95sys8BeNSfjK5gfu88YDvau6jo1XzzqccxcbL2ZaKCkr91hftTTD8HejkhMtvzKvpvXPQCZjw4p1T",
  "key17": "2ZBnZit8VjABjLRPS9sHjndCpDSE51MJiMzS1fppaMjjEbcZLpqwxAV2S2prb4iTL84SABp6uiX9WqASRFxVN8zx",
  "key18": "5q3r2BKycrC8CQD7MuwTaF3JCWdZ1fUoon3TJvNinLMuZbPQoWSShbG82jE7Suf11VaaYezJhJQ56S4tvg3MZJZn",
  "key19": "3X8J2xr95QAPg9eBQ2TMfTVrfhTStFH8vH7Spn25Ya2rXQdyU76bavCVbhEgepCJUKhrZjUtgmVMYFeWYFmsURPs",
  "key20": "5UJd9r1jKrNFTWA9jhFSbZTU9nCqHwCsL2AZpdhuSzniH8KsXo6PNGbdVgepcVvhjELFpmMUXwh2k7CEpRY4w4Q9",
  "key21": "DavM5NQmUJSjd75vd6L7Y2kSpzyVc83zq2L116PLV476rZ5we28raiSZWUgrYwEieHMrXpYQzYiTyQxpwqRg7Xh",
  "key22": "4sseD6agrR8xDLgFumMJC6ZUsLQsj9FVpc1kMUf191eHoZCfFrirEcyE5yT2Jp8wkFdeYtdSy9seqiSBNH5RVj1P",
  "key23": "2yNGNR4fiaEunMP6Hed1vHSBHmpon1VFfC5nXvTxLJ5qdUjri7qsoWHiDaCaSt9uHs5ZBzHELTDY7ze3gQQgysnK",
  "key24": "jxkMZmEFspQbaT7VQZASC1evgDMzDH6de2dE5f7aArZf7twVbxNJQ2d87VVgN4pmLMktHwZPUKRy4aSUMwQiZA7",
  "key25": "5TeH76syVPVVjUhVZtbehbyPaDwgLbh5VnAbqPg7LcuwfNaoUKDAcfj2fUr5CmNyPHYtEigHs1fgJxUuZRkupzZu",
  "key26": "3z81sfx6Lky2sfE5B8KHJUTNeUz6jYFdP4EBkxfJqbVzRkgMXqadMgHutUZ3r3JSTctGUuyFFTybNua42Uk4exKg",
  "key27": "52P46eW58et8Q3Ryjy8YqZZCa7Epm1NWZ7DY3xQ8CvSejrgavXgwx15DsbyRoyWvjxDCVSHhs7WBoUNHRf2q4aYB",
  "key28": "5qms6GWypAQ3drRpGXFkJSzYVsUrYMskMdU5K1pzhNv3CHVdNd7rRuEkkj2ZRX7b3B5Msn23PwSKDQ823ryz2Mqg",
  "key29": "3suR1AJQjcGRK7HS8jFzpUoPqhTnAKeDjkWDpGC2UmEJUee9e25mfw1TXBTDnoxzQ7eYpbiRe8mBVpNJJAu17tVY",
  "key30": "4AxaAeHsdbm9NuQevL8ZstNz3U3XPew21hFnihWqC3JLPVBK1YcFN2fQ2oJ73RQFDvjhooSm89wYB8HyXdMP7QaA",
  "key31": "5HMvrC9PoCu6nXoj5riiLM1Ps7fpKd7Rq4uaQTztVYqydajQwJDTcFEk9kSpmaqh5VkL7pPVG5L4N3DQktnFaMiM",
  "key32": "549k18bPMeogsKZ13u7g9TbFdBtgExzjLYQkB29ixaXbBCyVCDNK6ZmqZkHqALBiDREqy69jG2u76CCUXRLWaPy4",
  "key33": "2s4JyRm3Ek7Re83VbygsEguD85MFfMPN78swoPrxYAmXHJ1B7YdieWDgduYtHUh3fGoL1xN7TrHsh3vTkoSvhg4X",
  "key34": "5tBaJ8U4Q11ybZR3TaUwGNow6qAb9VSjsaSzybJJiuVTVfQDFop3x43C8sL8eGDa8ENeXv5EZzKtrC2h1mhTKeRi",
  "key35": "pWEFLLdW5oJCeS47ixExfZ9MinFDAdA8fXpEKmtoPW3HW7rVU7zyR6gBFdec2VX8CUWSegsixVriANqVo31QStQ",
  "key36": "2Ve1iHh5M2pTjXMqo6KqNHAEzE38WzXrQQGBPWYByQr6p66UnLVQwocRgsfTNyE1cRCMiN6UkD1uyT6XPVEbKeuZ",
  "key37": "WRbHfV6b5hsnZQ9ExTbhNb1dPbz2iq5E6YQkpyxcy2rXawBiTNgByCzmwcHVxLY2UnEi48LFEYcCeKFRaK9NSXa",
  "key38": "21sCoZwM8uDoGAZTRkdESjExES8ne4bJh9n9eW3u1eVFW3bfokmEUbB2d8dRgcZrBhWu95wMd9RQDq1w3P7GVkGv",
  "key39": "4ZAn6nJLDZs4V9VXuxQYJbxdLEZiRWZPfrDahetFTDq8yrx29QR7GdmE5Fo3DRduHfpZkSujttEEwDfB4tMjyVtW",
  "key40": "5faxKZjZDfjh8VWZSJgKzCuW73J9tzTQmSDHjRAcoZxUdJq5AWp3ftL95vr3iMsHMmYkBsu2Hu1dGJG6SexnTQAb",
  "key41": "4a1zHiA47un9b7TtBiTyY3kYQUCzvx9xLannXaMyP1qtikpxho3dDhk9Y97iZLVyUz2zEUQ4C5J12AkdgFEcU3Ut",
  "key42": "XSeev17R9R9R1UvmPFuS9LNXZcexNbgSLAKN7FdCY5mxU72SqrKjWqXBa2RvAFnd9UiG3pRs4p9iPyiHxubPMz8",
  "key43": "Vjfjscy4TvNC8YCjo8Y2oBv9r6Eki7RP2hZzyhK1s7s46SBsPMk3zZwXynFWYboM7gb88BZPQqiE1PfAzYAziBn"
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
