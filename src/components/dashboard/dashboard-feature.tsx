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
    "2B9HsLdGFEWp92FadzwwutA1c8qBtkN4p1MCDD5j9pj9jctLKvXth2c6boeTn6xPd6U4e1pcrigmuNhxSioGpLJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfM7ZJmCRN9PGsyvGsQLFgbYPpyHqZcX89ckoHHP9YXtXqX23g56pmui5HvVZguofBmaf4PqUahPKHtE4mnFav6",
  "key1": "3kXFu2Ch7dMk1Lp3YdpoiEFtRxAHpMrm2uC6z1xFfnVNBrRcsBJZYidaTv6EnAD4LMTcNci7xFvkBwrauRbKHwNv",
  "key2": "3WHXFUPwzuDPrrz3HjDCciRbhvuNHLBqBrGK3fNx79vjmKkzAugMCkCixM8f9gLi6m41YAsqkyWpn8J919HueQ82",
  "key3": "2g6nUtgnRNADaLL1g9FMTMaYxe5YaCwCKY1cuY2FtrL2R5vR51geei2FKDZ3VyHgFevVvNn2buZ7Kn7a8n2S3VPT",
  "key4": "38t2bMhgV5PDrjE3nbMn49D8Zs9GdTzKcJ7pot4eauxToZoDdvBSs25t2qcGjn8XbsCAXKbuCfXYrwr6X3zMm3TB",
  "key5": "4JWeUgVhWFaRLMEM73dVJ19CfjeAysaKDATbM1HBVznYF5L9h5RuRMvM267s1hwaRXyovkmGK8J4eXj4ppDsBKnH",
  "key6": "3mCLh4jtSNRXZzM5hKFkV1Hf1R7moEvKLKtkn7BTF3LQxRhEGszWa1xH1BUryDjbvLbQhYpum5E41zAWgJzJY6KF",
  "key7": "3qUj5y2CNgxuJtrmggidFoCjDfeJtA6ortf261jQzzRaisjxZArwb9MBBaGEpzVyEDeVW1ZrRMoMbMUwR9TXknAt",
  "key8": "4R1dpnrcvbZtF6uzz4nHSd8n18RVQKetx4V38ZjSeCroqg9Bpi88YKMKPU6XQ8UaqMik1yv4SdMPgDcAsyD9HAGM",
  "key9": "3UDM72XpKp3KH6LMUsPEHU3Xa54B3VUizfA3jAmmKPdMZB6C5LNzdTic3dHG2L4FXs4qDv7Cni47DBvwYxjEingt",
  "key10": "4sAXNTtXvxh1sbzb35vf3pmjSJqk7fPf4FSkUK2vomBJm66gvXxqgnc3KnNvdGR2Unstse9aw2sDyDR5cEbZUWBH",
  "key11": "3NZenzBajaX6A1UhgFeJEUNnkwrFph3is8soUuvrJSnZ9XE6gLXtWJX4Uq2udNCi2KnyonakTpXMFurC1ShhZWg7",
  "key12": "97w4bfyv58oDqUrXsbqpuMs8367AK8ouwn3brJ3r5manJNN3FGVtrLk7zD2cFBknvTX76oj35Fkjmj7fg2m5bqG",
  "key13": "5NTdxVdTcSCS8AANrVe4wwmsqK5eixNRYvz2XcU9sCarMSTcDKvyrWgkCiHfpz6Ka5SYHYNF8LA1hKn5D3DwbBak",
  "key14": "2N5iWfHFuD1rm8etcYqKaJtL4hE76ud4k6L4Trr4fMDXNqBS9oSJs62Cg2Z8iWhiiKPiX6AZ69pzohsg79y3brY8",
  "key15": "3h7rfemLVRMPH7i2LbjAhLFfyFBQs3xXsXKmZsST7AnpetEFPaNemFLSgN3rTvRUVb7bMCYTUfjwMT3cA6zRR6bp",
  "key16": "tkM3Q1VNyHVp6s8ix9JGhQGbc8FzpmaQXWcMXNbNU7pvt7qmSbcNDsQFmxvtc1VTqqcCGr2UgngbhjiisU6Vxgo",
  "key17": "387QwcqYJ6uNqNVFDkB2tXSuJFGui15gPhUEgsNAaSKXxfttogxHtKEwLPnAFr7MAec4B7WzJLF13ncNbpY39gap",
  "key18": "2oH6ZkDzXbgkWKzuu8vQ5uQ3F35jFr7dr8K36GsHCmVTrVadsZaiAHQHskDDbcvtiroW67iGsHbWsjB2XyVDr7SN",
  "key19": "3imRELQaf2KPhMHbAUnuykEyNaXJKfP3SKdkG9SLPRDWMHuPBonuBvXs5S7Q4qREiDnsCEAResdSJYLynNBc3z7j",
  "key20": "ag61sTLYUhokAG4cdjehZqsfgohuBs28fv9DW9g8SSXbzixqko7s9idwNPAhmRdwQdKbxoHe2SGgecyXRuMtHux",
  "key21": "3XWo9SoxH3VnQrdUu4iwGcoG5b1zPkz7rsSxTb1KaBmvC95pPqSRySMpCLdMPpWcy1ADrbeB5rAvELwo4NotSpPH",
  "key22": "4oEXqe9vzQJ3iTSEeMg3dGZp5x2UExVZnbNi7tiYe5jmj2rEbGgfk6FacdVkNBkhMd3HqGyo81LuM3hra6muGVZE",
  "key23": "3kmeykzbgmYtyezBKxwWFMFEwobcSe92k3U5JAcMc6KkeXE82hKVPrRiDSC1oEmr1iv28bwjqiSNQKzq2A9nDJ3J",
  "key24": "64Q12gQtvF7DtWLnL7Z17HigZJ6KhbtMFRFQiYNfWbkpHVq3hAQWz1X84sX4VefbprZaKdWVtGraaDYTiJL5fkv7",
  "key25": "52pUPQgzL6rZEC8vHemGbvdcW5hbz9r2ykqfhW9JTdm614kLKSyDQ3ECdNSYCLGSGm59DYVP2EjJP46aXZSee2G6",
  "key26": "4m8utqB8Q5qyQ4HHz2BmHPi7m5AF2J4jphg2XimuwEN4nGywdbPVttm3QA3oNHreaxiT4f4NorGUjukSLAHRQfZ1",
  "key27": "4TaUs2jszA9QgfE9ZAn6T1RgXykRXYu968Uf3ycea3gMRkzEKkSQRaYPQCKoNtmp7h3b1nfBTDffPQCn47DLcCu2",
  "key28": "4SNEtLcqiEKPtFQggBjF4cykSYmaie5Z6sVj1LhdwChhW9gwHmis4hxDquwR7YyXKKUv4foHkUxnvXAYf3wNJGyw",
  "key29": "56uEpShSCB9ZdSRXK42X3756qCDy8CGomZaNU7SeTzmT7nQ7wxT9huAA4iFEtU1QdbzWuUhdGQ1mrPoweWUWMhbN",
  "key30": "2oeffovyjcpJhfBoyAu1ZrRszJBZh7mzDyjGosvFgVy7ohwvnT8wuyysMgUTQqnR5Jbxiw4xeATWg5wsCVFToPPD",
  "key31": "2RUhxiM9yMhaF7ZjLyz7PEoZVQ4djmqhYg6MngZJcxwx5sQk59fQz5JzDANi9urLiZDGgJXXEehASDJuoNAXnXMg",
  "key32": "4KtrhPEquC9zpyeLfnmENHAxsmeAemvh64X89gCZ7VFpAWRbw76nCJwaRnTcdEkBetGHg5uQjVzXBuwVTa48uuaP",
  "key33": "2fSNgtGyPevM62g5xQtCcrv1goGNrWioh2Vgts6VQMDVJwqnghYEHHXUAw8MSvGsjiZEC4uX21DLTEWREUBZrm3K",
  "key34": "5xeFVDy5oND3pTsmZpeHF85zWTWv7ck6LCYDsJLsXnzwo29SL6P2b4QX72NNoWmDzRxwdH8G4Hm4ywggPVF1ztJd",
  "key35": "3pT1jb2kEwRsJABPj1wWJSDuKJuJNjjm7jXGUKdcri6a9FCPrVN3bMoSBuobgDZNfz49G5F9c52jF7Kh8so8we1G",
  "key36": "euEB86YYB9t4gt1K74fYxF9xBYbsbmCdvT2vC7J2ARBzrAiHnyjh6JYLBSNN1JEvUU4K9kQ99EwaGYCGns2Rfa8",
  "key37": "21v37StWcEdFsFa5pBkPHz6JdrH9kkjgWG4kpcVSLEWeD7jb3SMA5ZFqeGaxY2ac8fMxsCR8fSjxRun5NhjerUPq",
  "key38": "5YPeegzazMPzBEB9KuqyNiNACQ1KhBEHG3WRVrKAc7dat2RE8gFrSaNU6Lg86EBAsS66WjpRoU1Z6PEbDoFdgTfP",
  "key39": "4WkY73sAait47aK77BXbHMzajJ2W5P7tgLdEUPqaeHS8Hd9kCcugamcwzfTFNW2pjht26wFq3LNmAEDmFzyuYbib",
  "key40": "2rphWWFvpfDYAL5QMyHsyNkkNgKQrpqRJ3jYCs3Z9wW8sjmNjChR1qFZZrbxrpaHuTz52TN7XSNVm97YRfK6BM6i",
  "key41": "5WRLeWAQmupWgCKSrbiuxAeEr1qASs1qbrA875s98wWG2bk2wntiMRzWREnWqB7cgaAPLB3NBwTW1BGvbtzbEQQM"
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
