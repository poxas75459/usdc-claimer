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
    "5c9SwYs9MoR9XYeze64no4ZzUnd1Xt6BiTadXbbXDDY6B7TMUty5NBf4zrVdd4SXfFGPG9MVpob3wWpHwVeRUVf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUz6MZmVTLb1W3iikdRjyaSkRfSEq2M71B3f9zHaGVc26uNxhPHvYTMJVaeqMa6gN1B5MSmiRAuzPyCdNT1GZQP",
  "key1": "2JSjj77EA63AAHZuo8sWD7ux5kUUnKyPmBUXgDFM3q2Euoxpi4K8szTR82LF5sKzvqJeA2wKPa24VTxWxhQjKvfN",
  "key2": "4tAymCWdFUeyuUPgukT64wcCEWmXrcL9WbrdyLzGSr6B7vBtQFXWqd9EKhfhzLjx1ccNUxPNYh4QrcpGFMMus1z8",
  "key3": "3kLSTBbKomLxvTsnKinw3qvxGDM3rG7adF5SzJpFfgjPu2nUJ38pczKREYyDYkue7LsvX3zV2dNev1Tfv3g9rJzU",
  "key4": "5yBvzUTgCiez4crMBu5Q1avUaYaU1NXrVGXUb8yTKp3U2CGMudFz8D2dyMbUtQNi47ZHth8hyQE6MXBMXGAKnsmu",
  "key5": "2GmhEyueta2q3rPkBQCzCbumiXBujyFEHk6aS7P4gNpHMaqjw5pK2chBuZD8GgQELNxr6f1BYCUZ2ZoG4gAPuEjW",
  "key6": "3T8EDq4QdtsNQJe2N9eh26EsZsKLSgtMzYpEHy9xkrfpBhHHaTMWKeKUX1qgJfsay5boJC4SE3SkuwF2zCdtHyDN",
  "key7": "391CV5Z1Mo1bXZG8tHKjMYEsYfyu5VnydKpsCFAPQp5qoeN3nJWXmRu9qqnHPra5i8LD4zsE45uB6JV6vLoVCuTG",
  "key8": "62kvC2eVUTUVJKV5xWK7R1TW1wCcTXWDRWFmtq2goDj6dC1NiAvYy6eFKkeSx6XmfYc5NLndrGssS5eyM3HZ4z3F",
  "key9": "3FQQFfSW2B4cmZJc2CSJdeW5cALZcaRM2DAEHrB2umN3PYejjFP9jL2jL4JoYRuHnXCNq6Yy5g6w3kpYcnyULkMK",
  "key10": "Pfz8DLtq7c4w2rjEhgguQGgfnxW3SzkLuVHUHr2FQ8V1L9ENfXwLjbLyad8vgWGe6ywQu3zHD5WNoY6faGtUUKF",
  "key11": "3jGTEPogAacuSCy8NhTAzJDWFSMhbxQ9scsFKsFwtH3L57yAJ4cuW4tBF6CYj9rMuT1Emco2jXaFrJAYJ9MWQgz4",
  "key12": "66hzranxFXTDagZ9aVBtLaxxCLvrM2ncTow31KrAR3c3sy9tKt5omK1dNETYue1aUcQnGUAXQfEzW8RkECZNa8Yd",
  "key13": "5HeYwoxQVxe2gMn7ybJuugSoUVwi7PZfeH17uqod8pY9ybExDTLXJTckKFXeiwiS1wJGsotWbkfUQczQP5dWVfTU",
  "key14": "apt2NtETgbzuDFgASzG3M4tdN3N3qV2MhjAwvSUbKQctGD4ZbQXbmCKJsYrZ6aiC3TN9ACqqNhJCBK5zvGXtMY6",
  "key15": "GAgAHF7mHTTk1sr1Gt32NpUzPbq7FvpixWyZ9ETcFp35rWZGKH3HTvqTnnJrtz3urZiS6jjRmN8BYu2Bd8xdwng",
  "key16": "phnP8PYJmrURg7U8DGKt2r6Kt8baR8mQgiZDH13W43tDLzbfeMQQPTKmMEwx2RjrEZx9uA6rKNdZw4QHV7jScr7",
  "key17": "3CtiW664N9yZw5vRTFFhAoQfUarCKv147sjYrCEyTGvaafgTbzEpgRHBHGdoEmr2vUnZTjBFj5DAW4QKgumjCKSL",
  "key18": "5aHTznqA7WUFoRVo94pHsB8QrpxFtFmsqCwAoXRkjjJKN7DChUt6vndprDXvQyayJDNJ4JB96Yc5frRyGXheHNdF",
  "key19": "2gnLxa9Vy2ML6guxuFeEtuu6DoCoeXdPGofWgxDoxg2BZDxv6KvuYeS5NCun32J6sqDYd5Pqb1cg5we1NQqFsGQe",
  "key20": "5QQmvQSyeM3ACpWXrMUyJM2H1HyjGjPkdYwuLkAXtpUoQnajgfSXPW1ZJpQAj4XeRJKrMhMRCumNsu7XKGSKZgk4",
  "key21": "E5T1grMU7QYjb7cKidu4VCg84YvvDZHoZukXtD5395abZsyjCycQft3UpYJCKCnCGqTF34a839TpkEqoEYkiHu9",
  "key22": "4FYkCPwiho2HZ5LZQwEdTtc76qLTKShVobnqFRRPpZ3f8B3Rcwphc5UWBMqPP3jrFwL3iXziXeFXGcvszL5QTWT2",
  "key23": "3F9szm9qLX7PWHHv71THH91Fs5NcodLR6FtFoLJBg1kYLXAD7EfV3RiduuTGZWngA4YueJE465Rj7FgrecafFiQ3",
  "key24": "2E91wHfkNFt4fjwAdwfTWcfdQLRehdgbV4r9vhJg2iyJ2bonT6Ur1crGfsGYJuhLnefC3tqhxLDisCJNzF1kiVLC",
  "key25": "5vjf1fVbG3YGNnBodnAeTXMq2vR12e4SDyVnYc2v6ZqYkXEVeFBHoCV8Xz655uBEX2xSLDwAzyrjoe9rFuuRgJZ8",
  "key26": "39tux2nkMupy7gsk1YdmAWHMBFiVwfrXhFPzX9sYijtcfCxqxzUeQvw8CCVAA8EQQTqwHsmkphSL6cYxGoVMGwy5",
  "key27": "2hzNKQ3xtCfwdQbjuKWReCQkQ2CY98hJ7edKPA3pVkgZXeXweZCxWChwKK53N4Pv1RJt2sNa6eWanDS4XCjgBzPE",
  "key28": "4qiKhH28WvzY32RJjsMkC2kN45MeQqmDhRG3oaCz6zLYrPtxi73nSujKY52t97MdAUqobKsdxyMEW1UeeZkDgxbe",
  "key29": "4uy5rZEteTo2pb7YxzzmFsaQYjmoqEWXgKXPAbMLHZ8u5NF2thM1T2bJrN7kHKHqGVEysFF9Z512BBTiYAmbrqFX",
  "key30": "5Dh9G4J5NMdBRrDAQ7GAfVa8NcbRw2WxNMtKbzTahjz6R5Ck5vinEsp1BFa4pwEuN72scVePEBmYh9BfrzahEUjH",
  "key31": "2vmKwnc9NKppxXsLst2i8nFWDpz83ktL9iUuNTtfP8NV5Wgd2yot8gz7b1qsCUvYEEqkxiM7FCyG4aygg4e7ep5F",
  "key32": "2b4seNFPHujPeJP7AWajaRk9L9LHYfG6Jimqdy95Dm65eJP5Dbxb31M91X61EzNLX6UuazT7xDhFwvb933SF6wsf",
  "key33": "8hzgaxx4rzW44KaHXvM19Xie1QMdCqECc21mvs2RcSpia6HAuCkreGiCcJQSrnn98pYL8xa8XSv9e73SgWLCuAM",
  "key34": "323w6ceiGSXfAwyTLbk7GaorAMrLD6CquQp8WbzB6usrFzCXgrqdXNTDpz2vryyovpa2hTadmAT6nUUf7KgDqaQG",
  "key35": "45yFhGBEF8S79Rv3ha41xV8eNQdzdMccbs6NtpvmV8h6MQzjyqWXqi9RKFHF1vS68uqr96DhRMbw8Aep2b1EKhta",
  "key36": "4xmFp5qYCR4NGeqArPaTHFTSLfiyhHMCcvUHCpberhfi44X9RgX2aP7ksstsscGpp6srN8QMc9pdgyavg2mJYpYG",
  "key37": "2exwSMWfsNw9VoWorM9FYYw4UDxQ9sGiFJnmqqYzqVX6hJdJYm7CQP1kSLUHNwf8XcQ7zRBoXDY7JUbn8mqfmCjD",
  "key38": "3mK3MrMcUhDEPvYfGBVHadyjx18hiAfKxCXZaPcv9HbzeD8q2xxYaUmFDnfsDb3CjBfUWHQ6QANyvsq84ohemjXU"
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
