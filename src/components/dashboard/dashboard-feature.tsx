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
    "U8soHU3CNTmC4hamBMZGT9LXHavvqBjahYqnWW5uBnzPQPashawQgXUQuQKL1Rp5BjrCwGbQJfNDaxu8pEN9XgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjBQmk7DerR2FSQHdpiJJpagQtpgkscnKvXsRiW46UxdaApGU5MrVNoMyoMrdDuupa9iRuwDkugbj7F21GNp3CM",
  "key1": "52Mw4B1hCqqBfA8Nyn7hhCKvCneAC8dUwqTH32CRT1F1ubFzD7fKiXfF1aREY2LqzDEfyd6UeZ55t7HoY8TaXyBg",
  "key2": "2TKZfWSocbedAiZ7vYHWnysYzGsmp2iwEY49Jzh9DBX6jJ6sina3sBsQuhd6R3zW6jiDrz8eEemQtA7QMjeVeQh8",
  "key3": "52R1EKvfWfAaYois4D2RSqBt7uy3PyLqWRP67QwzBWg6DxuBV1e1vSYrR9aYR9FNkE2c6ACThfkfsutPFcguN7tk",
  "key4": "48CarNWZQYNEfS4iSThhN2g2M5tEMfsKP73b3Jy7PaesL45t8eLYbgucFv44jBWS9W6NF3ARYmyGY6LJczLdqWrU",
  "key5": "28SaVzPomXgbGDkdLgjtx6nuUHRWYKgak2X8RwQ8PmsywnRuKeboN52kKvDawe9P8s9p7pk1nWA8UcjaAiLp7oNx",
  "key6": "5UFFAAtdGugNKLo6ZiQwiPD2pzx9naUbpLhw15fg4eaqKVYgnJo1RXeuPamgZbEdceD3SdTzrqR1wc2AMdV7J73n",
  "key7": "MapDawv2NnAqp8ja7Z96szmRtJ5pPUCceWwueDLyDj158uAQw8eri48o2kfF7pgQD5vPk5o4bafjz9MxGZqvA5q",
  "key8": "3pLk5GVqZcnx9ATLf3Cb4H2XJTzFm7j6VjhUM5f4nBo3Ryw5rLp1KsfN1diXLV2MGQzE3frHXyfw5TfC15epAyeA",
  "key9": "2PpzEEJMb3uVBSZW8fQ1g34DtefdrKUZRN5tjUQrH9w2ddFaG5G79Jmrp53ymy4vbduze9cJuPXC8MgppX1af5kw",
  "key10": "2MazMrSFwjTDLU3YYtVZYMyGV2jTEdVKfnwqt82Sf43GKPov4yWW4ZKBtcJBV64uEDC2gqW6LXSH2qnWoPgVMeLF",
  "key11": "3zR9jD5u6ngwj1KE4tj2cHFsXqzqkkXLRqWAYrxMnD7cF1SdYXG9WJowYfQfosKsqWfSGvLaPb6phcpRoiaezscn",
  "key12": "5mdhSjZZWWVbTk926ZnEFronM4cZD8WWTc7yC4UUV9zvUhwQzLdWKKAkDr1puPVWBaMEkFxqPePDhfANF6xvnCs7",
  "key13": "5sxpBKyBVgA4qwReMkoSujcLJPAXNrffhj5TjbWXjpGxbbyhhPC2V91u2EUnJaaP9riV6HVxim8PywfRg1FhqGpt",
  "key14": "2Z8WdCSuuhYtV7vq8hM6vwgRkn8YEcbPoHGgQ8brgZkMRYzWyWNCqotCsXGyYMQEBorqU5E4qLm8UcwScisBmRpM",
  "key15": "4Vao5hxAseC8jTV4uVR6RNi5h5aQe8BKkw4qosXyi9Ms5tDnsbhpdMLGCYtFY2jcv6bNGSnF8xD1pvGGkC6NJFeE",
  "key16": "5895XcvwHVQkCT97fgnKLCKVRcCAYRYztw7qWMYuGjaRQpmNav58cmm6PCPeumQ632WpPtjSyh9H9hsJmd9KtYmV",
  "key17": "3taurgo5gJw7iRWHUWvHponQZhDTWeuDaUBmonb4MKVu2Ktzrpn6k1QxjD2ectMLH9hD5i6Kk3vt83p7L9NcAvXV",
  "key18": "4fSneRBv53gFw9bWbb6AFTVkVys5dLJRkGNVrY1fKeeRkUfSz7jzH8yfzdi32YepWoLRBQWHMrgCXbhsznN1No1y",
  "key19": "xv7gQtPz2J9c8C5HDH2Eyb9tBP91Ra4zQqD51Cxq2dNnPvCcfcxiZb4QTPwNkKZKoZx5ASGYiaU2geXCCogNLUk",
  "key20": "4WKBUuwMGDJL2owFeiFfoX65qFHycsxPqgvQ4z7QAECFWhR2jZsLF2Druzs1EedB8Lr5ae1a1CCE3VEsuv2dP8YN",
  "key21": "eT4MSNPnWoWup3LHk8KGwg92guKruPwPh1Ytsvtb7LhvNDjpZRAGhsyY5VFY8EDVZbssKGnx3rPtLBiskskmov8",
  "key22": "4sawcycauwEfJRYwu3FjtivrgiqgQJsG63kE8diSoeQLsB4HMVSPiHR2CAfX2GyvcUF1f8AammjDN754Gfb7qsRF",
  "key23": "4iJZfTBYMrWMUBzbrL3FvSFNAvoz5q5nWWy13kAf81wqErPAi2UKi2tfujNffoi7WgNFkhLttfUR6LXeqAS8gYyh",
  "key24": "4E1Bjzqohc2jq58SPBF5wXBeJy8JKTMkHYhAzpygy2fkKFnyBHegPS2ZwaEGHAcj5ueTfqHjrmqUdEyQwF4xBNEr",
  "key25": "4zBobZAHYukfgviRX2caZ1gQPce68XuhDWVLxz7EUW6VQcuR8mvyiiEMUhAQMkaeP69EB1vWKAWGEYyc2XJnsRPB",
  "key26": "5MAjRyxsc5HNKsLT7EePbn6gAFx7rbsvimN1FJ2foeqzMemfVbAy8HM48vSmammENerxAJP78ZRqYYQijXHfmc9o",
  "key27": "4pkHvc7hTfUDbaRYC6KJxQBHaewkJNaVXsv78MCnuvUGddm3eRb3oNLgn1JMgTerpWvrUk1jcg7vbanna9UCd9Kn",
  "key28": "27ez4Mkdq63gYPbPoxkwDFiuPeRrjjsBv36BQhymf71MKi4iEx5wZNAnvjrdFuScgk6HmNYJBPaga8rWK3nmpFL3",
  "key29": "bjMK9v1nhkdC8Vx1o6HzPa9oPcPKQSjX8m6jrSdyw58YDTJsWssMrbPs8KVAq9cJMqgWteTsxytUSUwMA2yRAY4",
  "key30": "4hiwMCNWM83HKwLcn7Y5Lb62by3mkPeLcKq9kXK4F9uM5UDXkEAGwXjpJszR7GZtDJgGLSWLDbQfAMx17MWSaujj",
  "key31": "4GQBamZF3yZXamSQDuaTAiDWmMJR9Mzk54nF4yFmiGnUv9Zf7Ekepevh5DMR5aKdLdcaWCeQaGyC356ULT1beiEy",
  "key32": "HGpod3JETfWf6Jt4FSJc21377f11fCPHaXz93GCjmFt4BgaBUYiGtjCoNsaTMZNPoANG7tj8xjeeeoBeZSgScna",
  "key33": "44P5JG1oW7pMiUH36aCTkd5o649a5Xc3P1uUCTkpXixeGzotEJuDwetKYvvMNTLomnrRQEWB3djYcTAUdnZbni2H",
  "key34": "Jufn6qSjG9b27L9k1TuBqjT12cH4wW8L7hJnoKAE3pR5eEM13mwiY3LBySsy7jTknf1posYSeApadE1iKhpLywQ",
  "key35": "3wRSLzuhvzZUTbhDmxMzWX9wrLTtnWGEbgDPzA5i7QhzWJ7C9nMZsuQYZ4Z8u7GRaKrpT9pwgFyFuS1ZBAh1EBTP",
  "key36": "2HtJ1dxjBBeeDgdiofWqsPkrdubb76uqQvzf9TCxPsMZLVowhC3jTyTMr81424hATKoJNXtip53boeviMFxyioTf",
  "key37": "BN2i374jtxzmgYkGdwWquBpekqq42peYSHkmxf8khH4fhuNcqVMkuVv2Z8W3Dd9mta9iBdG1EpuN6dwu6xTCHmr",
  "key38": "4WHuHzKNh1KeUruUdJbJJr9VpewS2Yf87ijSPd84Kts3wcYoX3PNJ4VUKVaV9Wk9x9XYHtGeqXeCoqDV3hknsp1o",
  "key39": "56LhdUHzt37PwwJKuWef4SYrYvGYXu59Kgff8x7PMXSq8Jd6ZE614iruuECRtfnFK2M89teeu56bnnf1otGjvccQ",
  "key40": "QxrCLMq2vcLe5jkayjacaguWVFxnenTcR6JrRokRiDRWJWTAiac12aPaMHhPaxgPJtWbwqzLDpe7AyWVNiiBrg7",
  "key41": "32nuKW4V3uv5zVowBTDBZsNteRU6jXfUEr5RNbM1dHcaB2ZVpm9gzpodM1E95diFQNQBidGUa4f7hsa7stCwknYw",
  "key42": "66ibSTeBf2Gp2JkNJbZBJzSUxZRCTF7AqUzmW77y4t9saKT6AZYuvWmwd1HyTcznUr948Hh16AExicxNPcWFfYtn"
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
