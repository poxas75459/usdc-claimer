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
    "ecren4AuEfvjXszk6kALnCJe37ALPSMu4wdt3SsuzDaQ3kLaqcxbzeUDQvSvSQKC1tMHiEQn2Fq1kZ76fQbDP29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmV39MkfxJLPnYjeYfAnSu1qdxb8F284F3EcbcBGiRg7HH7XTV4oUXLbCeay8fJGUndRw59NsEd8dbxktbKL9NF",
  "key1": "2sBA1j9pPYRiVtCu4zjyFzYyhA3NgobMnMV9JdvYqCvYEEG9KwqrN49oray49oRyYUD27H395k3WfdtdG2mmXDgH",
  "key2": "Kz8PBCKvxspRxgX8vS2EGstj9RPyzBHzswc8Xhtk6GhWHpAgPFNqMT5qXuUrFCjMxHe7mTxLb11M57s79yRgfdF",
  "key3": "kqJJJVwLsR1QhWQrKcu1jsiRXDNo9x65PwG16bjNbyQJXCUyzKzNqvDn1zJ8C25X1SwXcjaicre95HSx1zdV81a",
  "key4": "58VfGMjKmD9TajPwrtn2yHttEnvYkG7oSBiSuTa7TdP1se5UDfWLveM5gEheTD3Ldud1TdNugAXGaxR2avj1i8p",
  "key5": "3BzZxPYmMkDCtZ2Rmfow97zcB6bZCpCwwBiQXvXcqVw9SoRGfiuSQxWpQkE79eRspev2zwcJdnKz3yB9DaeRZr3m",
  "key6": "5tF4Zoex6r6mDuDnNZELPcXuJ4JX5zn8ZHndYmwJMXLEEZhJND28sndRWUmQSzRgtbK9mMHS63GwrM1vNySLZ7KC",
  "key7": "2HMy4YHxTXz3YiLyTussHE1VWTLWhaENuFFokQedNzfd6FmqH2VrnUE9yLm5e8bGmE59UyKj1rDMzpSrTL2AtcfG",
  "key8": "Z8i9i24Gqq29Zm6o7bUArzMGPyYmmjdKffARcVBceiid5NS1RLWezfqHTbK3xmzQydjTNJjtBjeYyQsD6MHbYRX",
  "key9": "3h66z67LGsGyXprAF4kvcobEDVr1ybCe23u17ZJKEgqWhx8KwVdCNNgFZfVwLmUxRtQCnmr9Djn7G7DSUFtTRGuP",
  "key10": "5es9Bds4L89pm7Wc1AfMA2u4W1t7rGg71371WAuzotREJ6D8VX2dXjZyr9LUc9D7rf6dK6cQ9hucEdBq32BsvKHx",
  "key11": "2h2UXaDVYsaN1RaCQyeFE6Gx38k3EnU43VpmBWziHKg4Qjp2t5N3covvwstMZpXn1sUMfmbZZdoP7HisFd3Jskzc",
  "key12": "3cm212c9UZkEv68uWa1RBWkawk2GcYP53MgpiegeBeoFu8kRGNPDvL6FnmG6usB2t4v4igZxTiKFCVweu9NHnrGk",
  "key13": "2Lq2FpCeMLXYMcEfyGh1X4HZKrRocPW11DDMLbWYmk6ByF9jjzwzK8RiwFmVjMjN3hrzso86u7DeDFfQpwEtpfU7",
  "key14": "3XAoGHTypfCUcPAQcC51qkm6T6RbP83qfGNXnENM7dVL1gTt1k7PRQdEQ2nnvKENre9pc8Hyf68i6F3UX7fxbUUb",
  "key15": "2cqck8Ydrtm7zZvezpEvD6SfSsjZTpwPBy5jrAuYh91dPHL1VxcJmsPySopKmcXiVhshjRqeT4BFCRedjKDuQJuw",
  "key16": "262JGzsbBNLMsMpqBc1cREXYGyCfBT93LeZnuqi9wozv2rr4zYm3JMUpneewwgqbfwWZt1JXoHJNQ8kK6Po7hp9C",
  "key17": "2o6m5pRbuf3qV9haDTEc87sPBY6L2p6YkFxoLm97Zq7ujRPzmbhw6raCAPNr7WZLXHrNDFgTHVAwos6FsTeMCP5d",
  "key18": "2XDvj3sp2CRqYj8HaSt4on39kS83pcpZeK6LeSVMhsThU8VZKQAE9wxWpgtmRCMFhXRGSvQZESTFd5ZkXCoYKpP5",
  "key19": "4vM8qUWKTYugcBkGfXejdbctfe2ADRcmj6omLYi9tx8emKhr3qXQLoimhSYjb5Xc9Nj9mGbxWpPFhu54qgU4SS5U",
  "key20": "694wk7pWSN1Vmy2V3H3FExmvyNw9d96UQMxgwE9vTERe7YgskqpAchVqiueXLbciVayUFvnFAfxCfzFox9i4Ras",
  "key21": "2K76tWjKBH446AyoLA899KcueRsBZh63cfypk5RBmQAL6C2eTLhyZQzycutXeTAvs6JfTdXqQLE5daaFwBJLxbzU",
  "key22": "5qUkt6igHyJgTJCNEodXjazeqRBHMCh13hR4h7zhwHGjHQj3LrMRRHRS3S6bndvJRDJ5rzMZQ7x2Ei4iMxLByHza",
  "key23": "3gDqGAQfTk9jvvPXmQcFN8FotfxVRao6yopnn1mfywfdvQSQx8KvQpqFipmKASzkz1Cwcoq8SitLEtRfcX58xuVm",
  "key24": "awmHjEGoAPTM9JBbyB4hP6ANzKT5hAgGRFBn5wwwtBehCJxRn83gTsY2aV7GuGjhEMD2E6hMPbY9WL1daCZ5rmL",
  "key25": "5nT2zzBXYZ85sgj1GZoqP4YrfgpHpFmdFuBhQyTciyXaYhoe5N68KjAKd7F7KWKQU41tETM12jPuM3wXnM9XjUku",
  "key26": "2CF78Yzcy9vaURMkT3WknZay1mEJmi48Qxcr1M85oFestjeNtZtvrkimMY3N3CXnKy6MiTMrLfoEnzsU1KDToLoi",
  "key27": "4QFVJaGYBuVLcbXnJw5LdQdhtVT1BdDqeBapDiFz8z825QLgmFTdfsWb6aHpA6BdJXDbzCuPiX4eNY3WeWG5daDB"
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
