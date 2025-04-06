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
    "dtAkduew7p8ZwBgGXfRkpzsxfiY81A4mWKqhWo3Hcd1bXNqZnNWijG65D1aE4e9qTKstadGS94UaZvCHmFAbLt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EC8Eng4tznGy7cagTLBjmwvae5RTAhDeHFYPRMk2PYEioGpsAYA4aEXeVdPLGTEedPTzQZm7qph2VjCZL4iidX7",
  "key1": "3n2jTYTGXDdoVNGGYuiw6yNthZuYjx91MzMWzfW2Fz4T32g8QjvmumPdkc58YDzrkrkvsBTmmKbxA7Rb3vzwZTfk",
  "key2": "452To1ezJ5GjTWmWBzwtv94uRjg5ZBe18JsWBpz3u4zSYMmBFMeDCNmG8rcDWzpDWDcDdduQjymRQxiRcQK8wo94",
  "key3": "4qAdpD2tQFSxPnSxmHarVfryL8qQU8BYCNDKW15Zd3QgHj7kDtNAZxd41ZrkaSGfRZY96doGSWnw4qhoArarXsbj",
  "key4": "6oHsA16oGRvQuJtvjLARLaCyhP9RrVF4goUsfZxPPmG1MbkvZeFLvBjDj5xapYk47MvKDVY4WPbXRqcoeYrxutk",
  "key5": "PdmcJU1SuvUZswWoGzJCxhMndfdTLMVfMu3MfodUaMtK4j7Fx9spEYhfUpa1jHncghAaJRrqhhvN7MZpD4rhN5u",
  "key6": "5Db35K3jicxrKfycfqhbyWjaWwk8XGGYF5S1TZbhQMAu5RKMu2FEJWNuuZeN4mjUnZRrQohUQ5pQgQNhHiNfDxZs",
  "key7": "kZoFDMyGVjHarjDwFxihjRpE7VidjpUnJye87YaCSKSFQFqMNyU7P6wzSn4Kyrg7S667jtXKsQzMcDQdyHnuRhj",
  "key8": "4yhAtpHed19AMoYzJd4kEErKiCZpHwqgm9rnmespUB41dA6x8k1PGaDGdmrbJHCNWuU3zZ8CG6hZg6RBgbvqCxGB",
  "key9": "4eLyMyTQFXyQjQCxmXHiYENXruU4yT8m8BwbB5WhnkTzMGxCriGAeoBUirBscHFdNu3xfwPUJbm1ZeVHEcVuL6Xb",
  "key10": "Kvxo7r8Ftt7Ddo1QSGi4KDfXMSEC76VzFa4LtAaNSzff1ozR6k6XY87mhGNeNEo2k3eXHYc5XeFTxFyZaM5kPJX",
  "key11": "22pkoLSRcANrgwTyJrD4ZLtxwTReohigwEVNtQB6kZ8bPDNZi5cJBYCjGQS2z56UV6RbTUfczJgvr9cfH5u53gPx",
  "key12": "3nr41S3rZ3BML185aTFXzsvZDxegAk6kgqCFm77G9FDBSyQ7ZRG6KkAmZdX4RRw3YwyHfYwUpGNEHN95q36LRaja",
  "key13": "44A8cjACsVzyK53HBH7iANAgEWXwqrrDXR3CLyo9wYZQPeYhiXTKgjRAXbvnNohnL3kUhm8iBwXnMxkfpbNktS4j",
  "key14": "3YPNzttAywGoUuoDasvWwL5nTCrXsgDVpvMaEubZnDCw8ZSqZvoFdPonDLPpfnngd4zXn8oGD6uZCp3ZysetRw58",
  "key15": "5wVZYPz9nDSTj79AMHVpbZKSjqwaeTWp9AMjN7aQQC7F2FAxNWf8i4dvsUTVMR8CPQpSRu4jK9wQH5Pv8cwFx1gg",
  "key16": "47447EzoDm6ZrWCWZeawvMnYHMs9LjmrP2X8SGkoTYSTyUPSAnnWpYWYLHsU1bmVy1pZRCc8Ai5dod1bAQ9FvMds",
  "key17": "2WLe8LUJUcznVo29Svg6ETfgdWNQvvydGSgmB3YsXXTTru2o5SHNMQ9XY9tiF6fdUwGP3bRkgEjXqod1p18FaXCD",
  "key18": "2Qnurqrn2voQP22aA9mrv3eZa7kxc8z5frsYMT9pVv1zVEiBjARSbYpE2RKtc2nrxzaKZKD6q9zCPsXeF1JfTAnH",
  "key19": "4TUwTZSgrUiAyNP3tGLgfznNoJFCRPtdKFoHKWbkxvvFHNSPicQYAAZZmBfeJRHkDrnFXz6SE7iqDh5izdVKY6wh",
  "key20": "jHA5oi79xggTeK1NjY5DaphQGr898GEK5xGtCEbSx6hx8ygZ3xoRjwEHyYy57viSLCZAtodiUb95X7fGcrb7Qw1",
  "key21": "4DUwutaghamYpzFqPNUPzeaE43L7CMtt7cRmQAmJ23oKn17JQeV9nZ7Y6uQfaas5kphyy5NJoKbPK5wrzKUfH6UL",
  "key22": "5cNfm3tB56nnU4KrLaifs5CuEF8DrQDJd7Y4m31nS89QX3nQaGGE6zV4VkWSr5BkcbXrxV9n7N5T9Z6Wzb3Pk9Xu",
  "key23": "5LcKvKorYbJbSKLF6JQyscEFpDKqXjvh4TbPJy847MTNU3SxHn1YVauxEGc88wVP36VjBD9xzC8wyhmq1PvVJX3y",
  "key24": "65xwFPe5KTxYphaTqVzGEeoiihdGA269rDrtuvbsnFffLCxKTCNABXZf5GcqVh6nVPYqt9TRetHRQcXBF5JMC7s6",
  "key25": "qCKPb3aMbgnfB5mNbB1xKhuKUvCaxJeGYR7Ltd54mEs17qjYaPyByzx4EbAPhhUsZAxMH1qohVx2A54YZTZKLQP",
  "key26": "2U1Y3QrDu9rNvwCFc32Kgjwr6f6LFUg5pgEVbAf7TaZ1upyQ5NE575FUAjkjyYY9ZEdyaMvjew7Bda3jtGw3c5iz",
  "key27": "3hn3gWTywKj9LzePVfUd5qeEjhEAc2b7JUk5MG1oYLX7zQjDPntwKwYDfwioj5Gax68R1rbYtnpg6c8yBCveAd23",
  "key28": "2ABdkrhKPFFNmfGm1MwxkekKt8RXMjABhvSnZqx3xHZbVmW7gms5bW2T2hg8vErg5uHNHSCcSLkQip1oynoCpCHa",
  "key29": "4tGU8TDPbX4WFofv8gCEm5LCRXN9J4DzBhwB97szuDyWMo8af77fqeQiXFhi32RVBKiKVDHh6Do1w6W6opzQ9ic2",
  "key30": "4iUt65nMgygS3EVv7KYfvGBSf6zqbHoTNugrWDCnaY6RR7pixSmafrMFn7Sye2fVL5yY5LVttGBHokkkC4b3DFS7",
  "key31": "2CwPjUVXgdK2m5PXGaYsAvgjFpsHQWjRuDMDFebKQ83ZhA3o9BRsdyMVwSkUR59a62zFXV3PkwetYZ5J1iPT4Qf3",
  "key32": "9akrWkPvXj2hNbgsczYhVxR21ErFopo8KVAV8zH5WApuRgWHF18YFzfmgSvVRqRh3u1V2m6pTcfHXh4fdLEpLUU",
  "key33": "5qgn732vHzJYfUuchZV6Y1QkW4cMjhFEMmjcxquQTV1GPUdBrPdqjXRnkxJwjC2JVkhvC2HYGZF9p6jqkwCGPJgp",
  "key34": "3Pzfm4Dv5TruAHKdEjeiKuCPF25zRBn7tEZXThe1Hwt2q98WDULNLjQ7TpuWANQZcEwswP86yYYamgvX817eynAe",
  "key35": "3rHRAqtRKPGtKXchteBTajfcXcyeKeqDPnDDPVRZbh2EMnHbsrQjqF9p8EgYE4GStUpwUZNWUzVr2C5trwLVTxUe",
  "key36": "4ucLzBq2nUJzV5GMpfr2YBgUHH4erKMnWi4bLsoqy975DhziDhaR261v2pg7NsDwRWsvcc4vYvVURWoVco8U6CB2",
  "key37": "EbXdctidMxP2UQeA9CcmbmJkZmUavqGYcFGnw3EvrEmNhZCMYvGdxwh6j8LYDCkxjDiPAussz15ZSEdEqEiJu28",
  "key38": "wYonW6zELG7EKjC3mV9CrbJPxUxoUavekhFX2Aettb4qtWUQjhe593GdVJzqutnLXU5PUgiFxgHTA3HsEsNgvo7",
  "key39": "5R7E1AAi6zqkkqK8wxiUBo7hSQbqKr8j7uJ2oPX1K5ecjgDM8oPfrCYL9iUC28N5GN8Gz21sqf98ntRD2qZgCch5",
  "key40": "UUQKuuyQA7X5EUN7aAst2Nvb32tC9R6PwutbsxyapZ2ksaEDxdacDqK71srwB9g9ZDaUWXh9sLMqMpL9nT8wus6",
  "key41": "itZ1Etked1peCr81eyjQfgJrSPkstxnkuGKKjhz9ZZwk3TkoASLKjz6x5vbW7AdRLnshfR66B4YES84J7SjK8nR",
  "key42": "3Gb3F1w8pdasuEMWe3nZM4YKMWWts9jPfjgH6QHyuyZMZBe7vY78qAPxgrgUs6zJoT1pTjaw45eraiKfXT39jj9s",
  "key43": "3dKUwjnqtzQiPtumBc6pJmGL5XusUC2k4V3P5a5gzuHthhgD4biHdzFwKJaVWWe9K4vDV2m2q1arktSZUBqP9DCk",
  "key44": "66y2JxdYY1Mm6XhcCcvHGJz9U8amk2p9wXAXkvYspUSGSMEiFuagQxNXYnx5zm6MQuVFY9Z9g9X2nsBh3tp2HhoU"
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
