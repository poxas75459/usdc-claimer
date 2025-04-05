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
    "5nq7XacQST3r6AaaEeFderLM8h7wPK4ZCxpSwuaJp6n4Lkcge2DfEfkYgKDRvgVhF1RZQWuhMVHeo9QuW8NXunf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gpS8mHmD5v6MfwpFavPJT7z3aKtYmd9s2ZfPxtY58RHq9tYDSjouWFCtbauk2GCjhxhgTZxfHJMP872dQ1F2xv9",
  "key1": "4v4Xb2Z1RdTYf7dNW3yKPpCQqMVwqshPSAnJp5jzpAhBdtVGmHjny83XA7iuUPFZbxdRfHpmNX3zJcCh48UQARBV",
  "key2": "35jG99uRYjHxKxAXNc3VwAFMeCWk5YsnWioSxhNdSTEdrgKwWUPoSD98CrJwDxtQvYpyjXEJECGkdWn3oA85WfAh",
  "key3": "2sPPwcz6USk5xBTN3hDPNbGAzUSkvuLoptxyqhcnbGDgzXsb97D55YArqDEtPmRF5SPeBnNPA1mgQoAbphMRdWoF",
  "key4": "2P8KiNmtFrD1hY2AJsx4MzxejWEuRmm2ZS8DuAMsA2MJ5F3jwkG9k6xXxEUnSVvvHi48hVgwrBRog3h6Fms4hpLX",
  "key5": "2mGsv5jq9fERcjqEGPWkj4nF7sc2Suw4v5DiLyeybyLzomUP4B43GpZan4yutATx3tcoHfPeNXvzyRdVSyQMRtZC",
  "key6": "2FpVhF6Ce3vNF4c1JugFRScWwiCqdqX4JNEQr3aePXPoKV9VP61yzZsL9Phs4AXgDc3oEcnhySybBjLukKNiChBY",
  "key7": "4SrXUzoYhU7b5kQU9SYTtuA4fWEAuHT2tq85bLKt1JvkZmTG2mdFspxcoLLmMkKeb4XsQQD7hCDdcE8igV681Wz3",
  "key8": "5xe7VrEk6pDEJnD2nEstQuvdWbmbRF4RYC1G12EyqtXqYojF76LFripG1ogLyjEhsgrcvRhz6YQgXnNezbrSCNTD",
  "key9": "28Xe44e9eG6iU7pmvRZA2BNrazV2UwhqwnhdUXiFLu4nUuBtRmdw9wre1BD5WTzwFB1kDWTAXfFD2He8sYJWKv1m",
  "key10": "2SA7pgybHnD9RsebGseaCiLPYaySsFLPAFdUXb9rtmaNbZ8hYtoF74p1CmJ8HJBiJuedbkM2an7FyUfrGA4bazEC",
  "key11": "4mxC97FsTMxTuxsg8AHNfeTqZvuzcfG5tguNyPQeskYiTUpDRyd51jQwGRkRjwnFCSyM1V4n2YC8PvqkLD7zdSDz",
  "key12": "Zaf9Ei7PE1w1vPFRuokWywUXYGi75iD7LR2DWE3EHrj7BrShNpGyFxVkz2N9B2u8MJKbEAWfRS5i4WjYDBMUPkX",
  "key13": "4g5xvY3V6ASkCxDLXxCroxUFS85uWxxjDv9yfYC6u6Vfyd78xLRwdUh5jwRNqbvoyvmvpRtfjabTFHiu1XGXiuuS",
  "key14": "2ffYCjbW5hNB1ygshyVvAHcWVMLTY1XFRFSxqETdHsZYTYoYsWixRRAnixYpArqaCpnTPqtrAGz8fn2Q2Cp75LEU",
  "key15": "3GAXzcMtVbqYMbUKvnw8QUC7NnKc59nNpTs8xzpy7urXhpkpcn8Y4VcTeFvMX12UufxysGhw6LNn3NSy8BjDvKJP",
  "key16": "3qqKQ9ycgVMS5Xg6h832uJJNManEBGxL4DhLcvi45zPXcq83pUCVv6T9AacvG8KyXxQhxUatZtg2JWBSLXWPN8oB",
  "key17": "3KeMCDWdHJ4jJb6GHQ6696cJX6m5Cc63XaLn6KHhV9ZDZjbwbAVxduVF2weUjunFAMqGrdj9sF5mLAdLYdJoGsUL",
  "key18": "3ckXkVWgPu4P9fm7RshiHEdak9VmjrQgfQRRrfoQ4p6iyFRhsQKzhZf8SkTc7bkzSid9LoK2v36bLkN2SCGdPLcw",
  "key19": "AoMwEW7yEdiF3yKkdhqmsQFqRZAY55rU6DKNgXPKKtMBzah8YyNCbQWFdzi1vbdwx3DqCYg1BBcXuVCaYm55kQy",
  "key20": "mXjAkXuL9aAwhc15QBTEP5KsYuoq3CiCKDd55RhffwLRVcf8BEKtvXeWNtJLFs7cps5R17A4ArALNBNN1Ph9eec",
  "key21": "4KmUZ5vEzEmYnxg2XfonJ5KeQo9KUhXTQx8XNTG9t8Fz8BNiYcrkLC3SYGeg1iufcXNfTrezrmr9EQhyitrnZsdr",
  "key22": "2Hx7ZG3jCKMKkmwaB48CLfZPjakLMi2CeoeRza63w11qWhYVQNy9yRbavM5zXMkCLyumasQQTeyw32iLj4BC5pGi",
  "key23": "3EkScoBkSZfqXomvXD4r2Xy6pu9uGbivbFSg3w2Ln4HC8ED682WhkgRN6QfeYWpK7EeLe37eE3Fih1s3JB1KgzAr",
  "key24": "2aa8LP6P58JDeY8Ho6EsEpwXgii74YojqMivT63YCDCmSLe3h9AYUAKHEv3fNnWuTyTGEiRm4kRYxTHQC73fuTYy",
  "key25": "5nQNSdkLFRMNzbywVieKnZiR5xGwhvgy1yxSuApotLiRSDFAaKbL2sVWHYFb4GeuNZjiqREfwP3Exs23USY4ACgV",
  "key26": "3f5TkV86VUGxjMKzEnPQR4dm3Qng356Ny8o21HbNyd9QucEYC13i6Wub5biQMhnzY6N1jRGkfbDthkgDpqTvksF6",
  "key27": "2WqzV18tzjvva1oe2jyJXGiYFipWZwbSj3b41yYRqBdh1Gvs4MmF2k5iUBhJxUddEYYWXc1DmZYA6Kcp3UbJoGnW",
  "key28": "2PpScXg8Ri8DK6tbaZJaVS52GZKPVSYjsz7sGH8oA4UW7ReL89LG4VfG4qZumq13j4L2PsWLHovZXphgj2Aty9ZV",
  "key29": "2n3utg39VDymzS6WiHaSTYhDBzpMFiuimXhW28gxMwXRnUytDc6e14SRR39t5RVrsk5FgYHGniXaxZyiYztJ8SLv",
  "key30": "23QqD8qjvcUZzK3DVgoK1nUX5a2GbFxqkwQnMMywf1SN3388T616GyArbhHw3fvvJGEFujMYeYTDwMjQ2AfHQSqS",
  "key31": "3VpJWjQUXGLwKUbeWRZainEscPPgJoXkvWGAeeLPFxS9vQrSuPCvhDSfHdX67prGH3bmKi2WHXyHnFt9zHC3kDtS",
  "key32": "trpsiYw3d3ZZzKi28RuoGnaa9dtVxv45vTFduauUBUPHA7C1Q6ivbj5CPsYDCkBCh9EMZAqpkoLMXi6z2Ruvoyq",
  "key33": "2ipB8yPMxgTZjPJebeNJdRNnE72R1SnPBm61Tgc5rGJqLuD5MCU8hPNhHKSfXmYzfgVte6xb6w7cF9P2hkBFqePP",
  "key34": "47gHCCxr6mEN3tgzMuNuF6MNxWHDqQKJC9RMdU6XB71tMNo27NLk41M2LnjXxLgdPHdvpqXUimp4yCh1GryUUvJS",
  "key35": "2bcg48wUL89MydDTJ7wFzveqZbPBw3qdPqRNh1S3gDs7AfvmDXf98fZo6mmcXcPBwLaKA4vyD6RhydVdrtYfnYdF",
  "key36": "4veYJ9ZRN4EuR6zvkJUSCegKMd4NtssQDek15baffrtmcKJkWRFu7za76CPssqhuC8P6nSjeghPiQjQNmcDJZ2dF",
  "key37": "oh6YHvDVeKU4tLeJbDW7Hp9BZLZNxWfETm3o7RvwQiGuVebn2LSGtH1VvLQQg3xtNvSj8GtHn24pHB5HRygcwjf",
  "key38": "5V8Bx1vKaA2zWLJ3XLeqUXx2HXZ7QnDGqajcVN4PeeaP3h1T9L3nUi1xb1NjnezSGhu2YmpYrNhqUndcNwqXFtjA",
  "key39": "5bWdxecuZEsjQNzZS3jJ3HLWV8wEa2c4GLUxQra743CFBmX2UG8GbSVP1xhuPgq9yGibBbsXmns6TdmpBeRNfsgy",
  "key40": "ZSp8Y3iCmGy5soKdH1ubybWTKZ9vKJAarRWA2D4cEeJEswbvt8UpiWXsJCDa1rsHUu5m4Q2nrkspBTkwrzrKqW6",
  "key41": "2Us6CM4eCZFPQjGZhcSs18j25gLJCn12Bu6pmd91AyaXkNdjPuzAv59apaFhnZUb8vh8kjdg4DKiLi67QTGKFMJH"
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
