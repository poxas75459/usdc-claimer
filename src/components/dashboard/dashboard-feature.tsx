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
    "2TLAEAUuHB1vrdVPFkdxYdcVMBntZqurwjradTyfjp4cCt2HBUHaceVD2dx2bb4APnNDDWHhDfkRKYwGmua995MM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcAaCVR8QTPodyTDjmsDMmtjjXrBAmxueqXqFzCgUkwpXAmxc2W8JNGj3g6FPnNWARvJyWKM9nZw6mpWPmA1XqN",
  "key1": "2zZ8sxn9MwPaL7yFGRp5TN6DjDMDrGq8ZA9tfrGaKvr2sXx6NB4MALMWf8cHhcMWgyD2RYWYzUEnqaYWfEpWrv6S",
  "key2": "5xvNCep5PfBmVP5uTWEyMuWokt1wpxiDP9bcDAsJULTJpVxKaHgvvfyT2V9wWUyQwY8AQLzPsHquJ958w9w6EWuS",
  "key3": "2aWkiReFxyyVRYEhAkfKtHFS6NbJRcpYtBXu3PoyiUcqzEv4ZJv3Bu2JUFLTe8dhkGy69PdTv85nCX5gWViMUEP6",
  "key4": "56Tkbme6J5AKBtBq6yKEGRqLsYHRiMEecz31BPdaVNL1a8zxuN3FrKkvzRKnJzLzcbusH9uSBTHFTjHhghzdim5j",
  "key5": "5kA5PFQC16MGsQNWhivPKhD35gbyUHNVUxQBdBpYkszQPBgeQnUdQELd5xy9e661pmpzEzDw3U7Ss78wG6xnjcQN",
  "key6": "64CXjVDxA1AixEs2NxWsucXJLeNQHmxh6K9oFUg5t2qh66YspjTugyGP4utZZpb5eBdNf32HQGSpMNk9fWRpoMdB",
  "key7": "GMJGQp1oZFq8243fWS8BWSU6AhTjkFMXcX7D9zswcPhALftabcLUpcGtPtc9RrykXqPPEj4GALvA3fUcrg51b3h",
  "key8": "3tHFsS7jifPknHNvNYu1vS5qoM636N3wKaCxWo969Lt3767vKbNirC79RqjhikNt986nHDh6otTVWBfj2yVsD3qc",
  "key9": "4WYHX4y3nKhFchVw6ktr8ebUoKUCxAyLJv6PjNNWy4ya5kY2rSRihiUDtKmVNuBeeed4SrHnapBWXipdBtPBMgeY",
  "key10": "2J5i4Sda8B4AnY88G5PZuwkiBi8Dv392FSP1rp9zSJTHEB4xh8LeBkRGZHsQvLo5BtV68qzBQznoBAe4e1qTrbKq",
  "key11": "2nDR3jGJCpqm93NhTiRSqLyPKWG4JyC3LLRbiJM7dhbinT4SHTk6gqW9B4doB1mtfonNLSU1rF4xRXF8uV2LLM8F",
  "key12": "5WwNkYuRAy4LB4R9rR6kAuK5hqymSRq1wZdTKmFWsQx21Xxgv9KzgQp7RML3zsGgjzv3vt53A9L87X6XvBHyxJwk",
  "key13": "5hGURNcDXPiVeJyh5DZhfZdMSWUk1GzZ8S2FqWPmEX58nivNrF2P4WGH6fR3MBv83vPGUPRgZahVHEb6owZvz2i6",
  "key14": "3SHBU48M83fz1Jz2vKZ78nc5sRfN5wq7iH7yMeX9uhYo1u9f7NqY8bf9TviEXmavc7z356d5iikKZHd6M8fmWmXP",
  "key15": "8dW1Mk1E6Go85rcRKG5ZupSAoMvJ5zfY2kkMwxoTixAvdVii2oXZDQSSN9MiuX3vornvihMpDYYUqscGJcJmDBG",
  "key16": "2pfubSec9LqHKc3mqq7bP2rmc8PUU9w2RCfs2CvZh3DVTd6EM5ZHRQZNZTCujmwK7sME49xutfoiHDuoSoao2xSr",
  "key17": "28wj8jD1NfPHHp8fGS419VS4M5vxC7samP5nMNcaGYc2CzMrPki7MZEtqygKSfeLF6Kg2mStrHM7d4CfBuF8hZUy",
  "key18": "DaNxcLAuQMH9699zDCoMkUZSNShvmteLt2UUD3Vqr3UwRu7rMFF5D57659xWF2hUuurgJqtdYqP2xfX7B52B8j4",
  "key19": "2x6dDw5T6kSeoAP74Cb5KmSSwrZMtrLx2CNmSW4Z6Rrrj81cCkofwziyjXDwRwt8P8f49JdTLVf7qxavLAMjJ8u",
  "key20": "2ULHZA9kqyoDjqakAQHiDGjhfAd5dGEZ8jWC49vKRxzdmRhnmVk8kbJBu8vZm9vA53FNgL3PHm7WujWBLWnkQP9F",
  "key21": "FKbyzJahod7anR76vKQTZzGGCPHswEXa6yJmFdVw6mBmDgSk7EqCBcHyVhdRvnDhuG2jvythngESf52nZuFWSUE",
  "key22": "43GUT18Jbu6xMZTkZuD3AgbvWyzhj7jAqKymqfPFbj2JsydfmGj2ownCCGvLXeCAtxoe5AyjXdk1ECghExeWPty5",
  "key23": "K7hoThj6Bq53WtmTMghLwo4LycEkLswFr5rr6sjZ6aQuSWRk3RRiyzKDQwGFNm3H6NpYcP2Ym3vBk6efeCkoB9P",
  "key24": "448BY5HwqZnSQKNRTyon8jcspZ9YSyiZaKj71M4KoZVtHNAoprfaFEQtDyQqoimZ4W5UuxMEu6N3StvdQLizJCZv",
  "key25": "621Cq3ZhgCujF49YEMstwwdd6Uh6oKFfQaQtmgVKPmCJu4H5G8FrWusxn5E5fMjrRVuesuPty1DXh7YQbMeGSQLw",
  "key26": "3J124RkpwMzTZFPwEHNnoSh7vzsJmz9x2hVgYJ7anNh8waDzxFoshF9uh7QJeQfn6bPdRkX1a1aP9Shbp9WeaJAR",
  "key27": "3ttq2nDFqNRc5kBw5xo8hvNgnjBLcdHVRJtdvFM4tCPtxjuQHLSqV7HLzarpFPLozCuEHiufzeu1owjcg4UBjukr",
  "key28": "38vPgFuEtuPzcHnbnQyDTT1ArTLK8RrkAeoXLe7adPQMTKbg8G6myw8X8YrgdCrJqVrEpw65dPoaW121H2cs74he",
  "key29": "UvwGe8usCQRejzZzGrm8zJNNvnAEmBugYQzaoMRvYy5Dty7Qhrmjb4MAYe2ggMoCB9pgaJ35Ry2quJTx6oA6gC8",
  "key30": "4Df6cBP4ReSksVPGXvzaF4aePD7CVXcfu6fRjYdCmBK2aapcEnhJ5Z4Nwc7B8H14MvSeTiXtBVTPYnKL9yoCjYzN",
  "key31": "62eZwqDks1JWYHb4EvjytbhAmRsKuKaLhhiHTEa7FgLB4HsD6g2rtoN8Fse3FqHkW96EHpvSUHkMc75rEQNEYScs",
  "key32": "35LbLsX1EtohW4HYek52CiX1U3J72s8QcmKu4joBzScLj6m8rxQeQpnDqTScfQKidJAH7VmwSHqGSF1fM3p6Gq4m"
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
