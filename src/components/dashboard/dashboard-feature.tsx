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
    "5CtBuhYQ5VAHyDMveT2JponAV8rUqtLLMwa9TZ8P81xsRQmuoNpWcpk1N1AaiEySqv6gaEUGSuAVL9Y1a8tzSUko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHMQaQGBfGtHLy2y8njFQ2imRbCSbhRG4LFEBHJLJcYvK5axiRDMPARsNCW1syr1gG1yFZN5wA87Cgbi8BP3g4w",
  "key1": "4sjHU4xXkiiTcHBV3rNsnPdUtEvCwaacuHxdt6Pb847vADC2dJj575fZnV3Ld3DDnBdcRsGkUsxsWhrwn6h5usrk",
  "key2": "5JfGEo2s9SNBxtmNKrKJbyG7tk7Lk4KRPCDQgnw9YNAXd8Nvuo62RnmbQ8XC5mhDF9oCKk645ScyUCQTqMgt5YuD",
  "key3": "4cQQNt9xDrMGi6bed1CxkHmW3goEUEkFwxasngQtbyEi2zq4Pi1AmE63HzKBiCUUXGTmKUkfrz8jPtr32o3EWmUM",
  "key4": "5c7E9tjsYWii2sC6o98ZEWXGr3xNRbR93CFGb5L4jshZHCGh7UNMt8xF5i1sDqh3jv1o3i7mnjQ66YMDSsyigjH9",
  "key5": "4vHkmgcNXLUMLCkCyMzrpanZe23HW1vu2LhMKenZx81hjSCF1AucoqSpv2gBvgF8rWLi4Xs1JRpaQGw4FkRL4kZr",
  "key6": "2JrndfDaqRfhfacUxb7owhaV87AFjZnH9ectDqLhyDSZaMCp3DJuuw3CXNuw2rnkMckn2KtCYQAKbQCRnKLu73Dk",
  "key7": "424T1GHbV9d9aRa4gyZM3suCDdWJWEeLMuYCkMmxtc7qqLexciYacVoMMuxQUBaFtXzNwwPWtJKcVjWjjkBRddgT",
  "key8": "5htdXoiVtw1CtRLWifCKVqicSZ1y2ZDzXxnAjkUHya5b7ia3cpCv7C1ViASpKBS4YXQBtMA8UxxjeeWuNs67wjNx",
  "key9": "4QMVovxtQNFGfxrzxrFjqsk2a7rHW1fZQY4hcgcqwAv53X2AYK5yGVq6NeTkdQEAYbA4Bj41eEF5rEBwhANFE1Zj",
  "key10": "5YzGYC6Gz9FWXGpSntdBgjfMUpWQ6FcgNN2KtHdVkGSFKM91baJJyiPjeopW6wwNqc3XZ9djr4R9J7zYipvqzpCi",
  "key11": "3QT58xjpPy8Q3PhpXmqtuihiFU4i3pjrfr5R7mkWdBp1RL9x5HoG8YohGnjiF1FgsgPPEZ4yiqP5gE6VHw6Mcu7V",
  "key12": "56dQeef4rXmm9cuFJk84kfXdP6KNXsbEFyjgfvrSTrLQBs3SFyxwZViqYG9UtLQsjdurad9u2JEeWSTd1BP5MYcF",
  "key13": "247M6cTr5UtThS2cWZQeoSY8ZkAmYcfL8W2L4rTQGWsGgTv5KCKLCt56gyniKdSCRZeAo9tsrib8YyWBhYp5kyES",
  "key14": "4m3FEfZKWw7evdm2LQasPgaN8SeLzXvHsn4cETSp1xSWACRM1DSuasVD9Lp81yUWLyyM88LrfkNezhcBFU9uQr6Z",
  "key15": "WRtfzXyVnN2pzMeXBVMikZoUUXSzHLhKpXCH3b5qw3YNVXnhE846v7pNoAwvF5qxNdWiw1VLF7JXFbTUeyntWLv",
  "key16": "3hFVJJegGbHdzJbzuXMBuzaLZb9K9vP29A7D9CtKCzz2UBR9aJQoNxnEqLN9rivP4yKT3z6omQLK9CoUVKbZab4K",
  "key17": "3LV4k38kWzYDHjWY1BTFmHMpgAnGurktfiTiWXYb66TaUwuiX4ohraXQXXz9djGUCsESgQvQurQmJHjByoru929N",
  "key18": "4KmcVX2NXrLfeDdUKsoNNKinwtS25vHwh5wh1ctrihcMyWhD1xSJyUUdVpzcnAsbYHATXY7FFL95kG6YoPEGMHwS",
  "key19": "5NUdkVso7qDDgzzmi2V4i7ee89YurtQNPrRcpeF1XzSQD2huvvYKh5EqD6U3dfHi4v12h6h75onPR8wZo7kWUvjm",
  "key20": "4tdiALTU9eVMay2y3ii6pzi2TinfWQJeKNYh2xnKgxPgRQvAoRcFzTXK37AcujT1hRU4swiJDxEX7SD3DLGbM2wa",
  "key21": "5Z2oLQedWyc12P8kVye6AoQAbA7EdxwRQY5TKu5VENTcSpHN9fc5BV2TJeFAgbf8FNf95hZMxEmWoNHzBsaC2Evg",
  "key22": "3d6fESKRu4vgPVFGQvUSYvYER3g8RyCJnrBN9JaTATm18kQMWFrnUPk34zRBEHX3d8huTHqzy2CBWw5yrdxBCQ6Y",
  "key23": "2284paKprLWqXpgfBJoHZm6WPTXcLL4xNLKbdudXeKdsP4SdfzY6CHVs4oDgmq9Jdaovup5wDA7AGzoLv8t99PPs",
  "key24": "3jvVC7yMsgmWC2s17rLi5im1KbmkC2i3nuzRsySLQUrovtxfS9Cun47nAWdFmmqrnqWds9pAQR6LKvknism4tY7Q",
  "key25": "twVqWR8ngV8DTFwLt2rbgQgCaWaqhhugSkR8AinHs9WRanq8FTRUZY8TukDLNiVt9aYBPetxbjofHXY4NL25mwz",
  "key26": "eknxKTKCn7MYZ12vMMHGJJ9q2b8DJ9agKKqjky9UfRqsk8bt4GPZKs1S28Sg4KFCBH7mfUb4BDxy9YuzxMLAKaB",
  "key27": "41VAMWZLWT6KreWACTvJr6gkcnh7YPxSQ26mf3Wik1rC4x9zFbqH2CzAqExHEN32JUZpFCB2SoHHyVCxv6hzRR9d",
  "key28": "5iECzSTjRfDfrHqWuoWkBPJMtE1PqoVnkKYsC4sgSZrwZGtFy64N6A9SP7t3oAoJybG2EmbYe8c93jyAHsxfJP48",
  "key29": "25Kx1zfk9qkptLk7MuPx92m6R1ZZddqAXK1g4eHDGLNJPUWftmf4pAJYFMvjhX1Q3e2tGemyhDrmbEXPUFHLwJnq",
  "key30": "and8dicbuRLSBb7WZnoPftgc7mgMMLKnY8g1vyVFK6kvttnT1agwNZj8axLtB1ArvjoAWtJktswRXvrSCsurd7F",
  "key31": "Uuc2Fdf8AjfiW2gs5L5WM1xtqdXKKTAWenytLVgHXvZszLnarrfbF5X9oBz23tJ1yZk9ucZYH8MRUMDjmYYC8d9"
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
