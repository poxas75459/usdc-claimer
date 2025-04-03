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
    "4je8mDG2yygJ4wC4Ld17TAhznb1QdNcYcwzDy2DD2cwV2UWsPVBq9vTgaiCo4KQSqnRdn5voVutrhJnk5WGW8sJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjVR8xy2QtPkjTus7wpUcQNhmHkEaAGaCmfSfgiQb5DUu6CzRx8QB6ujxRu78SE9L48ay4uJQ2GhtMQczhcnNov",
  "key1": "3YnQbqR8wxALMANqoMi1keG1TiWxAAkzgXhj6X5TdhUVFJb84kAcsDWchLbKr965DLh73ggextkF1d4VZ1iHRTrm",
  "key2": "5FUUZ58c4zMpikrmpw5siQM8irpYqXJDzsPgnUWtXY4CFRdAtRNTKYZTgdBpkJkDwa9YbP3i3PUBjiRVY3PWvR6o",
  "key3": "2gyPSou3Ju3KTAXtcNFVZd5JP68gtBmhERKER9sTthrBG4sxkTt1bknxXyfgwVHoBrivTJwY9T9hDL8zhC4HNw5H",
  "key4": "67cpZQMzx3tgeGV1dZohxr5h1oJFSU5Sy8FnR4yn4aHM4T8DQChGz4yMvLzfzBTzbJeozVZnBxayQKsbGCsT1gG2",
  "key5": "4quFBD2CtTj5BRPGLj8GyLocvQnkm83qi32xRZ3RFwB4UsV82BiTw2ofHSSig5huZppErF2yEX14Y5WKvvVncLLD",
  "key6": "3AZAytjXTL72HdQHm4Q3Yke6SA2mLonDu17MxWDfKicgyLKJcWxk4rZuNFGNSNJrq7Eu7o451xRtSQp7HTvroZyW",
  "key7": "oQJsJSx4yXWNgLpKodRmRvr3xLrvu7BS9DxnUnKk7MDJidaSwN5rgorNuV1aghcbWuWfd78gwviP6aUhPBH6pgR",
  "key8": "2rvkzynkYP1hbz4DiRSngUa3o35CmfMqrRiJB22gtPSmacV9qVnL5QK7xSML8JAUny4aA7geYxL5YxiNKBWBvRZQ",
  "key9": "5WeQaFpDJozTYbY6rDoaFEFSpMzgY8FXcztkmpLXYrFrbtzKoWZR7VHnUZ7J7Em9H7mb4y9wVBqp9eKihpnnxFYM",
  "key10": "3pDbG27KhQqydsKB1FgW2ruU9v5gaXvLth19WSrBqbq5gkKH1D2gSuroqBZMN2PEqrz2KsLgoj6UJxuxbFrHW78C",
  "key11": "4HFe882oMJWUrMFW8jh9mTBo5VYqEfzE53TxAj6JexBeNjtSUiV9vYm4DivPdRdFdcp2PxqgWnZxwaemVZQGsBLh",
  "key12": "12jV9zCiErMhUG1uSTErr45bZ2WpnhzGsK2jMf6NGRcyaS83Z6Nh7Q3AMBdsVUWHNTJ2mGzua78rwhSjbuKPkcW",
  "key13": "3E6BPXskF4QEaAHrKm6QG3L4657gRtkHQkb2wtQUzg4hozTfkqFiAG9ESwbAom4BYTotZ5RKFE6XG4sYYbokRG9a",
  "key14": "3b71tPgzqhdrMUh1VHNwG2RQnWhQViTa8F65zG6qaioGeVpFzdghLzpV58Th1wj5k9bhsfG6RUwFGhAiXp32kQJr",
  "key15": "kPhrH6nHy9DDmsGS44e2KMucKPYUoDPAgvB5Naq4S2Qj1qLGETrbmMvcrr2SK3tZSXnttCRHHqeiuafFGFH63oZ",
  "key16": "cDzrH9ZGTfscTwEfM81tsJHndKF8SJppwVkMgYjH7Pc1TYpuJE2qwdnuBWYWvGFmgZzoAjdhPH5zLK8Aj8U86rx",
  "key17": "wjGT2EDKCxc1zhHNDCb3eV9xvjapHZNt5tPRzr5JDp9Cdi7x1QhBVtqkdbqhRbZzWGNo8hbYHQS2gsCFRUFxFBw",
  "key18": "3br9xraoGoYdb1aLbDUyZahJeBstdWu76UACR421ApeaXz2Lw3AQfJoYnWxLTVsK5rER9MXJ3i26arXvJpuDqqgr",
  "key19": "67bSa1DfgV6nBEWiDKtciW59eAa7F2vAmZG46g3pm2vmZCNRrWGgzkPXjGGAWtQniDJMpFbkVSwiZHPaexnnKJhD",
  "key20": "3wvBKeNYr48QJKqkRYdzGMow2T3AsHriKYpT1qhH3MrG2yBEeRJvGGVEzaQD3xmk2vEvfbCn1PZ1Mj7wniSCQbLb",
  "key21": "2JxNiXMSh2fTkrhGp7rdSvDauVb8o3LexWCFoc7AxVrigqmzwKPxiqkya1sCcybwx34KSigJrrxeCifjzG8TpKHj",
  "key22": "3zXMSZ4A54Ccyq76bAPPG8JSyDQ3HUTYSNKmeFNen2bCXBz4EVLTJJo4cKSvx8fxX7ztpemGQ8t6uxRpPUE6hYAP",
  "key23": "5fBxFvdWhWobmmqzExiui5vh6Fp845ceRSCHahoPTfWyhehiy8uYCKH7quTkm1Ho3yZS12ZXCULfaBKU9f2QYBor",
  "key24": "3So2bbSXPi1eXGSGR78y9DGfEzeAvXVSBcKh3WAp9hXq5kAAgftVuvPx21ivvE6opEQxXbACx3brXTW9RyKgQUnK",
  "key25": "541T9wqD6bPKbvPGs7AZp1jEtAmtRNbc26srj1N1pA6NgyqZSREocpu4V8QGPQ5D1jgWU2dbtr6zTQBVSsSGijpf",
  "key26": "44Xpd6cwy1YrHYRY5Yf7pZ3uZLSoSG5EFudAqVXFYuyXK1MbzcYqhFaBPpdF9PSFW6xaWQ8rG2dHcX8jR1x5Cf8u",
  "key27": "2aueSGdkDurpUzc39EAo7WbqFSBBVMDfwyt4Md7PLTV8F6sbZE6KzCcEWb4y6dFzEy2Rf4yYe3Cu9dGTf37Kck1s",
  "key28": "5DqgBjuuNUHygJn5gu2NF7vbmP4idzJoSYVKcRxnfZvbZzUD5HzYW412rd8dStmutbSDSnBY9JAD8XxrZ8SRr2NM",
  "key29": "3UHZLqKMZkQjtscxJuvtZJ393tmQFbwkqNA4h395kuyzeEFmR9mdZ2MMrWK7SnhqPHEn5ajvUWg2JYABiRY9Sp24",
  "key30": "32cYijKx86BLzZ9ooDZ2bzrabiJy3ATH4xPN4gNVFi5sm4mbKuGQ3EemyEX94VbDbAkYkwesE9zSxGwCNyPtgSE7",
  "key31": "4XvVsCnUsqJ7FfF6QxfV8nosLNToSYpnRkg2DXidwnFmREwAZtXp14tyzuTazufYQaK3y2xbszvutJAEry9tqc4w",
  "key32": "4DFM9h6WqpTf2VtDQpMC5p2UX7XbEF3t8ywxvdpUBtNENon6ZYaqBjjSihf2GCTxXjSWUBofxm2NDAXhUpE1SwQ",
  "key33": "222uKrCVM4cT6xGs5JA5GeBoxGWKc5VWra7u9fphxQuvgkTFrZnBmzSyiM1CFXno2s8fX3pAtEwKQcwk3H1Ed8FB",
  "key34": "4tiD1bh6aPS8b6RF2BN9TxqmnGAbdAqXiWrf4AkZYHPgQnxDiAQhRN8KGhhGctDNQepMwEvJaqCpUiTmnGLcor3y",
  "key35": "5X2RBmPXhQVmHrdtER5sihCX42xB6gu9McVeLZRmgrWj4yjfgHDDdXLNvdvKpr54qk4HMGzQ23ZwxmxZMLsSS3LE",
  "key36": "5B4XArARwU64RZKxDvofYLTTRR1QjWFvXTNu7xAXA29XEfpQF3eMeZcb8jbM9ZKR3CxkQxKFrWptf9sQWvPB13XR",
  "key37": "4s33tw9HeLKMoTpXEY12WRaH365CQkbZ169AkzrW4TP1MSt9xozJxgbt1mvoVdvUqZz49pRK7XCP76BZHUmUCUXq",
  "key38": "4oMAiqvgWJ8czWppx2fCUn7uisAGe2HLdmmAJ7dZ92iUY38UfFyNsheVXXANEC9nCF9eBSL33cHJt3A2a1wmb7rV",
  "key39": "5Poz6gCEmhNKbvLrcqxkWnNR8KsVxeSVYXJXAovHpYMk6kEpw5yW7vpmcTVjNjiQTPR6UKqpAgx23qAuNNG2tzUa",
  "key40": "3j1jLNtrmjCnssuzn4ajHWAaAbxLFosAEyHSkgup7oH5rLAMMp7DjcVBJKuqK8pesUcj3Q7XWw9yszPmyLMZ45h4",
  "key41": "39Ahnx8M41upwbz7Fq8NTcu5DHp77RuZvdgopQPDmmKh1JAMQg9Gy5FegmMGQaYszDXwoxwBYopb9w8145dg3nKz",
  "key42": "2XB4gpk4971my9n4Loue5vjZGds9PfwFj1HwLbwxTsh6SD1uuQhafmmrtjsWHDdsb8oyLwSyNiTs1UFn9QhfqfuQ",
  "key43": "27vD3vokcd5B3ygGb2bsoZc6Vx3NxXxpwrExgJNGXcJA8GE7SMRdvRfdGHpghKrYxbnscsbq2ewaTB7fDfUr3KzG"
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
