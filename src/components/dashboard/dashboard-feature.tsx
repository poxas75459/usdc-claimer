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
    "52PSXGuZmV1zhNY6BrABK9Afg687U6bMjd5BTam1ECmLLFXrh3t2cwBWfbAMfkgHDV1f3VG7nisgDLH4zFvSBCE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t38FeYeNyFKz5oCZWBwe6cqQ7M3CDpWiUch71cuuvJ6TpwF2BkiynL7BQvRiPcmhYmauLNxNnuTwJf1gBesaEDo",
  "key1": "5tcqt34YYMakoiaorsEJKf3pRpssjHaq83isDDNN82Fp4imrU4MmpqcumuTVFpsWEu7DLCf1T9xaqxpkvZ6G91os",
  "key2": "2VwPzr6ARNv484JPRurYLiCNXyN1QFoSnrVFbo8ouYxMaE4gnfSHpSF8TwuBEgvV8UjKPda3udqdmhQCinyxS8pJ",
  "key3": "56YecNdb6UuiD1fb6oJWJPYbxFHRgZ297CkcuvP1NACz9ZABXKgWpk73fz5NLisS5aCFZQkx6Zj2cPPggh7uAeoG",
  "key4": "4rqvmW4cMNDxpsiVipGoww6rPyTz6is9QdeowKwNDk4zCeHrRm5eK5irC8wpX1vVAvtfjfnkppZLsbM9WwdK8D2T",
  "key5": "vggvqiyBy3N8HfAfnS5donx5p2aVKdhFQ9KWBvsrMpWZykuW8hnFiumkavC8qv1PFNU42ootmKFF2YWHwtoRp8P",
  "key6": "24YRcHY2j3ELyz3ZZNYAqm6brbmAp3vfuhpy3KPkcMofdUJxQpVW6E6VzhVLcMEvGFMq4gezq7ywmsu9C2TbYuTp",
  "key7": "474pmKkuFuujVzoaFM4fKwEFXwvn5Arnsu5WBb8ju2YR8fGEKojEKKPzW5LmgJu5emSdK1g5PGvg8rdzingDKXFr",
  "key8": "2A3Zh15etXWXb11LQfYbmD2PX4bCugwLqt2UfUW4wu8ucheAE45AinQCiC5CiCbtSn3UAoscNraGQaXfZK3nrdZB",
  "key9": "5TujhXGgGfxzvnyanrToH5oCDJ6DSqWCF7BdBEob4vK4x879QY2RG8nGyGzw1n9kGZ8cbzDQH1gYVNaDy3j4bC5L",
  "key10": "3AihaNwVEjoQE6uyBEir76xREPT4wNedwUKkv5LLsW9oqzYsB2r1fVDdz8mwEtBVuzszGT7cr8U24P2tyDyi6Xut",
  "key11": "5x7EHhHNuzFHdphX4w2vRjUbXVxyipL78ZJXyZceuch35BfSDVKPR4RLTWWhQA4QqFw9pHeQBTi68U2gC6AXmfCq",
  "key12": "2TfJZWAE2Z7xhuCsTJdCVBfoyL3NUZZLZXFYPNdQq79apFVqSScqKUWx1iiGciiQkD6UPU2fTCEXw3c2K7ZenfAk",
  "key13": "2BDChvzCFoRgs2ujQAM5Lxd2YyTeUz6qZRKsawVPi4C7xFYXhWPGV2dJLpnUYwFN7g2Gte3ykQYaiXq5bbTVijm6",
  "key14": "429qDZ7xaNNNmoSvSaHfk1uJ2zp9P2aGy9tpNPhDtRVhPmYi7XdWwjiKjshcq5eLvY3byGnFS8epMWcvjHR6Ge9C",
  "key15": "69BanG19diTU5c2JUEn4BRDsrAdShfrcHZ7yUbh7FKRQWeqmZJW6JAu6whWm9enhiWK5r6oddZg9ucBGpDqFjKj",
  "key16": "3wFvwNJCXFD5J5bkVsygTrtDFALwYCt5vvVP3WA1G6EUfpduuvpjWQNys1faMX2SWh5a3bUpTCV9Ywp4r3JMb5Mb",
  "key17": "ZvVUpCpCd29cChTFqXuMAUUjoDwvqV8wE48CxJVAdDM8wxxZfrE8dMBQiuhQQ3TMFBGboY8G21ELFYmiRgJ2eCV",
  "key18": "5D3BXaRnnhthC27DKjeQYtsiuHnjLJgW3ewqMm6wLji6VsFQoLC9SnwAjxfGKwY1FScps1MoSzrRWsaebYUhBSsz",
  "key19": "5x66zhYzkCCTXWkRK9byaAFVbzrGx9nsEbmHWkvDx79oWdfBXxGQPoLZyFTWVwy1xREvNaabtEzfDoxA8Ledua8k",
  "key20": "3GG9CyQ4qVQXdGniX4zMfkM2zaJYHV16Kv4HjU1TmdVfnfEjBet3L3wCm5Qao9ggDWLQNzS3oGQAU7tKhfMv5Zot",
  "key21": "4QoGWWDPL9qJ3ZMMU32gJLrHZoVAC2976FVWw5qGgMKxM4VQqGDpR5WVv3Ftc9txRRtAUNkWbgJ3AGoCWZq5dGDB",
  "key22": "3Z6abig6UeZe9ZKU6EeeVD2XFQwihBydHXGU8DosxRsS3mYMHW4Wkap6r29E4VnvxbKzUWiXAo3qKyz12ZEc3sJG",
  "key23": "2YENCQcmTDcbYsiFQ7SyxJYuacAVrUgGFeEhYGmhVJBNsdhbnSNHdvwxnJJjoDgWEFoaTgkRpxD7Mp8AnhULYTyj",
  "key24": "4Qiaiwv5MtK3EGpf6AouvG8xSg5mBRKaeBKxY1UereugtUP4QaQZFDAjMwtw2RJ1RhS1NM93jnApJJgzgFzxxK82",
  "key25": "gM4U6gpHH2n9fysrbbySHA3uTFHHtxjy1g3QoYJDQyqfAnsXbnb4uRseShGXKx3QgeCFngRz5JtCo7KqUKrPDcP",
  "key26": "2nkKPTxiLeWK9ykSNgme78H35AJu3ZPHGeGeaUa7ttWvfgi17d4bRnfwHsMdADDdC1szjYAqdGyB87wudVNTDqu7",
  "key27": "22uDn5MAKimdBX58FQuNbf2sxu9JDuiHZU2VosfApA9JKncLv9LsxHfLRxAnjqQE2cvVdCqh3VTgDS9nxrVEbqXp",
  "key28": "4iAk4syyVTYKHrNL5zuEJSMd37Zh5Svy8Dqo77D75b6z7j2gkZuAWGz3BLyJ4kFK2ejrZuye9zBXjehvsNedz6td",
  "key29": "yfzS8wkiWuSZR6fkzEecGSWVaajAH7CKDvrVGJMyd5EcpMaQeC7YYpuWhhWWRSJyr3FLMAQ6kYUvE1K47XDpgH9",
  "key30": "5oBL1Wm4LxpZBzC3FSGwXKLHEUkEAkZktr7tR9WEuzAbSvMMEcCCyHMKNVkKnuUNiE94KU8M9HWYqP5EBroET2Zf",
  "key31": "3VSXrEtzrsojnXXkU6UrfiwZLQoyab6hxeG4st7NRhudFmN12vgc67Ac5rNbaGmufc5cjPBJRcAvmZ4LZ1QFCUxd",
  "key32": "rqDJL3UQ47gebqY2AHd5QPTFvhqHq6k4x9xmcirdKhhzW4o24XxE1Uqfugfj4hhLKticSAQj9NeiCgNmfw1TcD4",
  "key33": "4Z4TfeDaT7JHPSkhUAvcVL9hLxbQPZBXj1aDP7rhK3ZzgDLxiMLt6BdYHTBVkfyKGwWR7BiREcnoUh1B4cQssPEn",
  "key34": "41dD6FufsNpyw3Pnb9V2NjZ4w78sA4XMHnyNQnqysrxuJcpcpXuYwWTvdDMds5SDYgCopzt3MUuKXsgnKstQbZgV",
  "key35": "sAa99v8iFnuwWeCYnMogzaP1uJNkRTRQxRJXzRxWkbVv3r2XkpCHn1Uvs9Tu4yxNXWT7kqsFFboiBhnFbzrSqNM",
  "key36": "3c78asM7eAPiGhJsoF6PZG4pPh6mNx95LxofbfBepXfci36H5MFVTgjyVeGg5diotiPbBGYppKwg8JaqVriWKPH4",
  "key37": "5tmGMbk8Br53jQAXddRM4wL1cFwUQZRz7zbJaQFevYPriHCewHVbBwiLrPMwVtK7PaGbqFuYi7cwStLJM1P35ukY",
  "key38": "3EEY1yZws79r3Q216psytG88ej7wtxwkLTY8crsp74s5CBAZRoSApchtrbAeEiakneaYcDXZnASYAamTvisVsFHa",
  "key39": "W2Gf8ARDujcpqVuqv6inh8zZfTMnZL26U59Gq7CegXJRzgeB25GCtuqxF4ePcEYPm6kbmQbSX66B7Vd42cxvVNu",
  "key40": "5YinV4iMSMAvszAQZF5Rwmr8Ehmb8BG7mgkdZpmkobJQctJePSe1vUejcHS9a6aGqsSQwRKTwcyHKKe1cGFNcJHy",
  "key41": "BTcpgAqs397MWXRJokQe2CFJ9hrF7RfDfeoCMHobd2YKLuTKssekMJQX4qzxqYaZCHSPc7rAUxjCR3JH1vEkjGR",
  "key42": "22tbhzi2JTjrALQRW8ZHwrayurjuixacCLSyJVUwDA89PU95HU3VcG12WAGBPAkwghYr2zZjKjhW29UNWhY4TLxV",
  "key43": "4x2T8msUXMck2eJMT2nvqnBghko4xcj2USZNqQqP6auxhEhkUbH2aSGt3LmBiML1L1Kr2t6Bk1A3qepae5hvWMau",
  "key44": "46RMcZwrejzgPPcR8E5yVvxsJ2uGC2gB9Xd9urRd7PMCG8oeLXrnsHrkKuW6eVuWkbQjut6C8VzfNmGXmeS5VHSW"
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
