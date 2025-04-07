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
    "2uLVLTuLftDJo6w5tJBLLeuboqeHWTbuRkmqcau5GqxTzVLZuoaB9YYUWuLsJesZvYXxt94WjNxJ8GSS5iYhM7nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkaZzWG34uBZaD5qkRnKfwcYfPvcfR4y2Uy7fwC8rXTL1iR3S7pcvfKaLcp5zYaf5woSPkuBRvzLPQxtP7qsUZp",
  "key1": "2zQkD8fFm1bY2pF9e3QTmgTmzK45GLFTnZLHcqr2xZuSqAZMsbgaujSP68pVHjwjCnHmYpuwPWj8XKuTFvtBy4E9",
  "key2": "5dmFmLc4xUThPWNgcZUa6RSLh89gvtw98rZkrCJFmFi2VPGWH3SwCew3iaFCaDDMzP6mQY2uzshFaJZyD7uzMEBy",
  "key3": "29XwtYGQetrdKVtYwCFr6zx3UhDshSJTnyayUfngEck2WVXzat3668ikZE7ZRkRrA6FBZHwMCC4MFsRpbtsrsn4S",
  "key4": "45xNAMmoeGXjBZggjLhDCEhHXmZ4MN4BJfBp372CGgi7byTLkNBimu7iih7r21SHGuY14yTBKLSYxdrPYgjBUj7k",
  "key5": "35wTpzpYWotNo8VJ9ysGk4xRswwRxH8VC7wwcj6QpNGQzAt4NQuBvoZbVrQ8d4wVgDiFPPSX9mZGi8dNc3f5rJsp",
  "key6": "EgSaLHaRjS9yj6dBEEPvKs1C5ecGXy229ZWDgxMfqgJjXVwJaLS5QxkVGeXbNggcNiAQpwUKPyhEkPKLwuZHcdV",
  "key7": "37PdFP7Q7pfTuWk1rVFCm47ytscLAgBZMtEjfdB8qQWCiVppm1kF6ehzy4i7Pnxd6Mi1HFe3MFLtTC8nbs6hmyQz",
  "key8": "4KNfUSDBYAx7bcN2NrDyFNEWVH81HJSLC9V5tWVgiCQgBNTESPiGoYfvxgeMdLcFdU9NGpNW33mV7Rwg1PPuVSsz",
  "key9": "2npYp85oN2rKhe8EqwwS9XL1EJDbS9o6PCwovgNx4Q5vJirmc3wmDSchhGJQk2LqqHqVpsAJDSRwPxqNHHQD1Raf",
  "key10": "3cxNV3m41nVd6kPSw2MCQpWsTaTgDVweGqDZa4kdSu2yYDh9hkNRWFoinzzp9Qg5CZdQTEhu5ZM2URoduhyQS2os",
  "key11": "JESJ8c23zdMAG1fwpGGRC9QDAd9hL1XWWCJAWt6WF83wBT68Q5uJUkcEtK3SyfVoMhyn49jEepAoDBD52DY6BPX",
  "key12": "3ENQqoRXbM7RuADB2XopFK19YqJfd6dpgX9RSrd4aLtXC1Z7F9ZMotavACn5Z2eyFxUw6Zm3zgnUGuZ7HGS9qDrj",
  "key13": "MLUJEYJuiRFJ2zEVQd7pMMcz9cspjBbXX4XEMBoHrDXViFhA6knsupzobYRap28rx5x9JtiXV73VQzwRLXBcTwU",
  "key14": "dsWWT16L7vZnkjWyodC9y87iNqAcWo2YWvks3t2LQM1BVnzWKDykFg41XfmG3F5i2m2ATDktUBcaBmNksZ4Qa2m",
  "key15": "QYHMHRN3NssME8LCGHGvaUL9zXM8hpzwE2CEc7N4VywTtDym3AeeYK7NtjJNURAzj8szeA5q4btChd9xvgtkAbr",
  "key16": "3PufJZYtY7AntBKdA6cjmUgbDazSMXvQajJbfz1HivgkpaztADJFsRQtt29mci7CHMcuVKxFfiEBagmyWgqitNyj",
  "key17": "39EpFxU6fzwyLqextHruVgP166rybtpoXcCV6ECJQ1Dc7STCM1eLG1UWGGyT22vMtkcCtX213xTEGvfnoPD7xhpA",
  "key18": "3E7r8D1mKaaBr1XT1KWKWW7fodiZmS6HR7gooPh8qb4CS9RKcgE37U5QFVw6D4gaqvU5FmLvX2Lw8te8QzyHFqmW",
  "key19": "2d9RCD85MPAeytqxgJjBrUYUM6ZUA5J9fsPuFADA6NdnBkPqXDXjT6aMdyy6yvGXyjJfPZaiPQDAsNX8WBDZ7fbb",
  "key20": "2oGKnFqpQm6xitWdzVakecuNkTTS21AnKTy5RTKqB9UgqoqxHurFtPPJKbswJPUx7BGDEuBQAntY9UdvjSuGDQti",
  "key21": "4h8fbhPkkgnWr8cnbmzDWELUGDGzrWkocura7XKbBDFqsWVi3iNLQJEovrWYvYLGmpp59VkjCRC5aRdC3DSPwnPs",
  "key22": "2GpyrLj9jrpTQ69hY71nEq724Q6QdLQ5HTi21NzUqTUKRi5Djhw3LyRBFck6eRPFjzvn7VpphLiExzhqB5LE6mTu",
  "key23": "64XSJ35wk7srEv2h1qKVfaTuMcJ1XdSo5PcNupmt7EEzVKvN6tMnezvmtxp18XGwFtL9FCctjSsuUXczAsUESnZM",
  "key24": "4C2H3ip7Um4N5QX7hmq837SdbApEmRA4DoX8dv6caxa2vQh9fi6zzhqzjK45YNhJc9ttKUgTxBbhjWbGGsTmES2o",
  "key25": "5XKmVsLuMphoHEntSsaQAqxy2sGvMBhTgp39dYrePPHMKKFYMb4HQjcYmeuNm1CV2Nj4svLhYQ6SccjnHg6mVZZQ",
  "key26": "2cSoqAXSFg4R8dwMY1LtidMyRTyuf4Kgrdc22RSufKd35rGK88AXdd2H9PUMYscBnGWumQH8yxwKmERAYpRwC4dY",
  "key27": "43d4wUbsTiTrThdfeNZXLyb969JvQBZLk4uA9w6aygcSp67VFoim7tMuui8vbBydNit7WnDhSH7hKVUignYuRiSX",
  "key28": "LN1vX5KGBBipmm77HN1NxFDUQu1cLTqN96UfgBExexRzHewu3db4VnvMcrwjZGwQ6YPFvnkcyjwQLcgLuXeJJ1V",
  "key29": "3Lmy6B34qj6Tyf7Db7pS5Gr3EYH46XKJuxtDwxrb94KkKtuoCS4MiHs7uCKntL8RK9S4SEA5HJycuqbirEg3D1Vq",
  "key30": "39K7SMctyzEG8o1T8czVLYte5WouV29MsEBvUYwZ2n7nFtL4rm58hjSPyvPZniPjfx6kFN8rncMgYG7Pm9uKD484",
  "key31": "4tyWRCq1YSVMJJc5YAoSRE1RxRsWEtrbtjMc63RMcT3KL1nzaqWAh4ujYBrT7gdC7p5JVPB2XDr2697QeDRVf5ou",
  "key32": "5WoLTkt18gi7BF5U1SVYSPET6TG9zsscnCT1ycdTMQFqzFC1gfA3WLgdiTHQ1f8Kqkf7CXgoozexhnRwEovUuYH5",
  "key33": "2HHpt5xxDASGZ5CbaiduiD3WPrbs6boACLiiXoC43HAFDYJiBH2zVkRLqMw8iZjSrQVEu1w2rx7UBshz8qATQFo9",
  "key34": "QSVjFkQKvSxYoU9DpdRWzqSGbupBzTkTBKBNGb2YqRNrwDjfK4swXGuL9CuHKnJ9ypzLAq5pbYWJFJ8FLyADc1K",
  "key35": "3zSGQAE8r4cXUqvbSFzc4juf5WL37BrUnmv6f8SdBERS5MhP87Mcz9VKcu2uw4CuRnWTqDQpn26gr85d8HkMj5zn",
  "key36": "pPghsWnWoveQk5VLFLiZvWT8MRd7yEPG75f1sw5D3fohh7N96EjxURoCgBeJX41TA5LicYxQGy42yPRRjJqq2dp",
  "key37": "5tPJ38rHKXRFGuz9tWMiSLZFDqhHyE33CepP6eVB7PEGWUP1NvPAb8NZ4kninuHjxLXaXCk71fUecC4ojNGctwCk",
  "key38": "4XHsJEjJ5y4kMzjkHMeYKwmixQar8D2WDdK9j2iQKonCSaGaYGeaQMYmGePXyQvpvtLPzSuUyK9FvBnR3CCmZHAr",
  "key39": "2DZmjDVYznQpdJVRUstRzKTacRGRpdhYcCVPHjWpCu89eewy8NGdEsBpxdTWyEUupXazbJBhQdicnLHroYqoFiox",
  "key40": "5CzSkrwxmmH18gg3nJRLj1yKsGQmn8fpx12XnZ1LvPsSdoRCPEGjwK3XCMR8JSQh6WAeordPs6eSn3yKRViivY2U"
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
