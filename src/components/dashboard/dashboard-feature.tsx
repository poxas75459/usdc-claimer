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
    "3eAjSisbXLS8mPnMKiv6btJmeYbwjCgh9Agk6yEJnUrPkq92pctsuL3CGEzpKwCmtqmxew2xF27HHa81pQg78HMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i25zwWyvA9AScxqA5Q9t7CNgqwxsGAatDhY5tKkj8Rbfc1nXtgwu9ywvdb29yjF2ejnBkMcV6S11W7ZViRNRWq9",
  "key1": "37Lf86Fsw5oEqQ1PF1khc2ZRSKxXXrJmCJZe1XcgnrNTTaUy8acdMeJqxHAf61bKrrt9hvUXUeUxJpg3q5goAzwS",
  "key2": "3xkAgpxPbMcuQiLeUR4gupsJSTvd4joq1EAjuesBDLyVQ4rZLP8RZ5nbvuVhyEnUtRtCxnfMouWD1d8ANVdpq5Eh",
  "key3": "4oWo1Avgr5Sg7ScFMvWiHEtHhFZCzo5jZLUMonogPm8PxaFkkT8J5MVrX2DLazBfWWNvk6PZHYQdDhfZPQW9uJsY",
  "key4": "55YqwmBT2PEoYnLT9aTGEoN8xcqtBEUs9tr6a35omkVbBM8rPTeiuqD9GdK4rDKbKYwFkWw2Fr9CfTapg4bW1kkW",
  "key5": "2tFPNeU2MbH6E6U2bKvwDUagV1LyC3SuEb9Nv8SM2EDghbu5ZncFURJdcT6ga5ZQDMetbAfk8tydVKYPDJeehUe1",
  "key6": "3EEzcj34gsQEDD3yc3FzwRu6gmYYz86QDG5gfqcKCQCjNWUwjMgxHSypeHx7XkcjNbtqUbhuZTnJPLuNjA32cyz9",
  "key7": "5asEc6jCa4LAwwGhMyDses7PrZakjyWXet5hjCUmpMetpx9BfnCKb3fbVNHC3C3bePYqVbABC9nt7Nzqc7hCCAhj",
  "key8": "3UmqaDQFwjmkYsCQT4qDs6cRJzo9PRkj2WzEDPnRHLHEWSwkPTTcZwzwhSbzkeFDb7yhxdgmquWc4Rw74iEUQanF",
  "key9": "HcbJSFVu1cHLrVQS16suhpFNdAMLYZSXArarxfVMt7n93f65JQnEbDZVCKvv3zdiXh3hosYptMc5xTjDGBUEjVr",
  "key10": "35cLwfK3eWSZJ2js2GsCGaUHngdbFYiBm4EbuYHEWNrudCSiqhBBgP5TfMjgUL61HxJuXLz1yCFaeEDEH2XvPUgA",
  "key11": "55jRMRrP1f5STRTSuC86Re89uP48hKPX2ntWmMrjPWTH4poSFzqpYjrr5ZJ1iAUdjJmxWXTbTrbuTgUYKM3L2MmF",
  "key12": "4cxixumGPnL9cgKHQWbmtPDAS3PGQtGGr9DHzmNRRXm57DMjo49PDbrJTVA5UeDW6ZPvyCQPtasYocnBKxETCK2e",
  "key13": "4eQ6NMJFMrtHoCAVDAhZbMHLUNf24tz8GXArcxS3iXx3XaJd7fXfvdwRuLaWmXcGYkqpevwCnA4yogYwLAPABXsu",
  "key14": "Y7QH5DzBf6a2XK72SNUGUVsfQYTkbZi8z6AHtyVyEdZ6ur6H4QAA6gVwwqnWWcbs7gFegapW1arrWvvYGSMY75T",
  "key15": "exsR5G7aHVXqZ3oFNJoikgv8zF9FBHB5x5addcQp6WcnWcugSYDQqXWZyCQXoQosDrP5Ucpea6qFtQgRLX8jnUR",
  "key16": "3mj57mPYvvCPc5So92gP5T65hhXxDoZxRccnRKf6Z2anqXFWBuBkUzcGegF4sMULTgJNJfSJRN2QjbXVfLP16DsL",
  "key17": "2xdENFL5cYUXyAZjjs4qSvej3oQUZHHQLQUPkmzsQWcB3bYfGNSfBD13FfsZY9rrFhQQsR58kZwYgHWzAzMnT7S5",
  "key18": "2By7veJ1m5omWo3vVrrAT6J6uozrxJKK59URhMatm3QixjGwbBt4YGD6ZrgeUnjQVjJeS5pXS3wLq3qCyNMTCwEk",
  "key19": "RME6Q1XnZBhnFPhuBPyoSNcgF5URPcmeMrD1XfrqChBwfw4wnMWPMPwztgRyzPgp6CfBgQ2cAU1Xy1EaRBtTqhE",
  "key20": "4J3f1Y2Q7688Au4N17k8Hgfa1AwPMg5gipqvncbyiwWRTYCZJ1zQn1CQSh24Ez7rGxPpQNHRCjZ66nBUGiLm2VXa",
  "key21": "59Dx2a3MxvFXL9MFpk7Sps7bHwfRBjuD7LQvMY5ZqSgSDoJonGSwXoUf2VvjL2QrayxiuWyhjcLnBUJHitturJyk",
  "key22": "4vtD8rr6yVETxPD28ZFTsWDujfjS7cW8cf9JCtxXJZ8t9aDnCsNsExuAxTfMCb28UP2BaYsi63crV4KD1dagTrm",
  "key23": "59PZuAHd86bi7QcCcSAtks5ovb88nNsBNX2ChCHLEErxX4ntr7thS7ymRYA6bNXQcmzUE4aLpVTQqCcQtjo484MV",
  "key24": "35JNDmPEAkSbqopbZ7p62y6zX9WFaZtKEd8gHJUouUhauQ1Pqiv4iCrPQpgKpchFkmCoEviYtCoe8Ey4WhCgSnWi",
  "key25": "4EbmvAEmBDFoEgeJks4nV8PVCSS9LPJRYVdp9Hm9zKWKnSbv5gUb3jbDbTBxMtFcU8reDRHecwdfEfDHp3YC7Ew1",
  "key26": "4hBkwqkwh3yaM2hha1qog6xchyqmgzoMw3Rv4VKUci3AhZtjkRqjVKeSfxsYDk6Y4L4xQkfafFzqUctyS3ovRbH1",
  "key27": "YwurymJsa2sR93XhiDdnJPxhnvsyFkR38JzXqLWWSxcQKNs59iKotk2TYK6642tPfR1UYCzHA5SMDkEqfbBV6mS",
  "key28": "RNmsgi31xq259JKjfnTGDVQmVsejMYNMw4Srp5wV7hadao3MZ2HL73vH9XHHpvMG91eT9BmJfcMQYhSynfP8XJt",
  "key29": "5NqAJQ57GnR1zsXFp89GvMGbEvhuf8E7FT14BicaMrsu8G6qb6Mi9A5iPP6GsKiUcAxeKCYaEExaKkTwDBrgut3G",
  "key30": "62qTgMfvHc5MN84qHirYYm28ck3ha2Q9JFPsxdnP9yrH7UoiZNT2pema782hh7si4FvqcUxf2FV5bk7C64w7LbgL",
  "key31": "N9uhAR6Y9PXdUSpiz1JaSBcZ5pHfz4NJWh2NXbfadMEt2KDqJaBVxLKFn8FCep4PAgdvQYyGNZAhzCKMguKJN6M",
  "key32": "4iSghkBGSNsbYAE1rF7DqtujWnzzLmC3Gnn6SJwp1nV5cDTJVJgGC2jGtSyi46EWLEUmt94tfm19fQ6eWgkFkRzH",
  "key33": "w328Zw1yUkyDSCdsmXi6PbJ6kLBiKUpDEkejAXBe36TDgy1Teu42Kt5ok5t1A4SnSLRNsUXL9HW8KyYDKFr3jmv",
  "key34": "4vHDrF4SZL9otyeuJTUJTp13WWM5Q7RCpQ5xkJ9NtMy69R6srCu1FhKPDzUa55U6t27Xo4z1JMm9fewG5Nmvy7P1",
  "key35": "2NUhf4UXEAE7WkzcqsShUaJYvQcZ1LiZJtfQwVcZqNCCeRNLUHnPhdzo2ny2QAkzQMTaooFvaoEPaTK8CkFHzq21",
  "key36": "4yR8gUyYj9MPsN699aMynjdi8FSJ1AStyEeikaYqCGHb7bFSebGYbcok9rbntFp57Tea15VcKrNFSTx2jBSxE7Zv",
  "key37": "5eTTaEZ2QVqZtYsxi4zk4yp1RNwjnE4ZG8feNFJWsbfuxszuYBP9VeJz9m88rAGZaFMGUG4jB87Fx7w9sKGeuymo",
  "key38": "4S5VaFj63Xfj5nwE7nEvC916ZgZGYjdkDvyqQNJqyUoFkzkbmvoRCPFo8aNpYvup8Hz7MYm1nkwrCEKmPCB27rHx",
  "key39": "46NqSitNnZMXVvMJdoMfG9nvvoJZnCdBzuCa54hkSzrPFRjJP8VsWR7C9UW13iFqdE9iKGSiUGLrfbTVQqa8PtTo",
  "key40": "EBs44sViMWRoGg2reJiRDKhYouSV7yBKMJXVJJH7aJN7C4sXBFXwj9HQ8Ux5Vk4YNJF7rVRkzi48ALJnyU7n5YV"
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
