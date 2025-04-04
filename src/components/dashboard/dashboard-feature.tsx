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
    "3DydXwAJ94U9GoprAAAkPa3apNHXoxSJK9RFDZxMwFYHP41AMHRuG7oCURsmrcd6bzh4Uff4ZywuDxyGB6TshC58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26UWdzUKnFveT9j1Fssx5dfJmgHySqxXsWrXw4zskkQUW7nGWvGmTrwFxFHqDT3Fye4g5JXQKaB4giYqwmSM4ZVe",
  "key1": "9MeCe4YCwjEnBGVcK6ySLjzPn61nbcCwjRshgAB4HRYXoAevAr58dVXCsEAUgGf8oNG4wwZ1TfWe422eA2iuKvb",
  "key2": "4dPRbstEDpdNm5Dj8Zu2uLM39ExCtRTjgT9bvLzqa2eDeKkypBEnePCRTr28cLHzSkZVsmi1pUjVZJwWHuaAJ9m7",
  "key3": "5cAyn2VAiBcCJ5yNDHPmfonbKJFgHHZstqdkd2fszzxLfo4CyeH4nmSQ9A6PNLE6VUAjSAHXJZb6QM9n6GCD7Kmf",
  "key4": "ifoEA9E2r9BFGMFjBaW3jwjP2XELrddfMNGbEkvuJiZPqBLK6ZsMHvrdcBxkRYNzMGrixhzs8Ntj5bDoEFgWPNK",
  "key5": "MSAtuLNXxbE9FLQ7VnpY6AFphkAmVPr1v7BVG8LttLEutMJL4rRKQPpCx5gUjyRjP9FozRH7vSE3CzkMHqAjYvS",
  "key6": "5hziDxjHpJYi4NJu1GMp1M5yqAeETGh5SgSSMWPEfu5HnNqt9wPoh5XC1D8vCuDEWpZNQPMHNaLv4Xd5bLwcRoWs",
  "key7": "679nYow2GwBR3A9KGwnUhUgySRE4RdTwAEnRKRaKAdDVgvXuXQM98pxdxUMPHV6Efhn76X7WHogYctS18wmukWhc",
  "key8": "2ti5YFFsikSfsexSUfe4Q4c7ahm7maka9zFSKXGdZLHPtFFU2VkLbJayhq11pRPgMWDYKtPyhFBoZmHpWoDbCiqu",
  "key9": "3CC1sejPFaKcgJa7kDe4SMqh35E5AcTw2nZmtRxJb2YK2ZKYGhkG2ATmDgnjKP9CqptdRXHRgLnhvF4Nvug7hzeJ",
  "key10": "3pxcH7udE43LNfDPNRuyfSFmuXNL5zuwgM3fHZFpCKjPmrfBEffv7EUH199CU8XJo7CDgXovBmdJkSyhd1RGDbkH",
  "key11": "3X9duMVKa3RaoBWvF1Fk4B1hZtMVBTHKbB3bC88TYXf8x6VVwpw28yYEH731KiuYxM8Nn2Xm9murCBSQeLuqqNae",
  "key12": "2SNjwxcSNmsX9F94qnDCjPdyH24VbhLAQewXmevM18kyZYtAS5jGpS3mrvE5vE3c2D9UAJFUst2XquQqP6zkPogR",
  "key13": "2dv7h35xqyS9TFANFaBA3ZnS4vHqAGJjqCHexMmEb8GWDqHVfjYc1iACT9WiuhihVXpakuifDfWtoT817k4Zw51h",
  "key14": "4HzPUnmGcmm5H4TaZvh47AQSkR3pYoRTgvkrEw4yqQ532vzoJ68Zii2aM5gPvw2XWDgBLKPuKMXgsybAtskd73rb",
  "key15": "2ENVPZrYjE1NasA2TNYQ8U4FKUNad4VLZuXitjQFgu5NdUpCsGiVgg359aN13ndkDu597HnU61HGT972jTk2HArf",
  "key16": "5fYuhkPEUhXFGZ4t8HKVEhNMkhkySLNSjT4RFjrWocpLgs1KaJLUNB58nggXTspYmfG5PoCv4QNEVMjuh6QuXCcT",
  "key17": "4mLyKPvAohE3gWeBWKC6p1qpCr5KUSufy3nrtpHFzJm8gxJLqYBJVVJXMCNqGhEmw8Ytrbj9MXz91youQJr7pzPu",
  "key18": "26XTnL4N5pM536Qdmofh8sQy336Tk4DGe4qreodfHGCe9HUPaVCwJUR3ocDFTEiPC5tsDxbTkpyRG6efJbcmKuPC",
  "key19": "JiDxn1GHsRWTraBzrFrwrJyANAWdyZJtr45ropxM4QMR8zymMk6mZpKbXipBw28XAGRCV8pwns4HtjCktDRCdpL",
  "key20": "3TwADQgBmFzcfwRZqWP8mGGDAptMhioqXNt4J1dKsMFr3S5WbMYsMeK98RxNM2HC7K1875UAy6L6p6UQ9zto433Z",
  "key21": "ByH2f8adjAadsfiTsym5GhfpYXjLnVNzAceYetNG5HnfWtgeThf4SNg1uAQe1e7H1hvcCfMwr4YuVzsmziXBFZo",
  "key22": "57abfeBdCfWvBkoDNCvL8FwVrnD3SS6sFayXJEWnMHzvoUwP4ALPL9HaEa1kzVoruHmPz9tjbUXPAW1aZyDXntEY",
  "key23": "4gmaPL6Ku2g1Mi6fbbZ7DJB6XyJxoX9kBsyHPDfYKmXSAEsLmtUAuAoagTp5CELELWMzh6m2G9nZDKEjALAykZvx",
  "key24": "KEJjKdjNG7s7MaGk3iPf8dzLupZdWbKJpwQN2J5ZeN2YRU1ipa5czyTBDQ7dmRpb7HCKrkjTf2nWeoFh4TtYpYr",
  "key25": "5qzQojieD3kPkL99o1ap2wz5kGPKjXPUwaiEzuLcCGkf6CnRHhzLDEQW48gjXqBUETnv15dZJwkTBmhVJMCRPyv",
  "key26": "48HvnJXDaSrJh1fYDjc15g4Z9iU94bp9JHk7BkS1RScCWjx7Je4xGJHP7Cmr6KSHnNtGQxL5Rut63jwyZR6fPVeZ",
  "key27": "46yq8WZLGuig9uNRR6QYeMygt1rrC14P9GDk4AQwDwy7yjXu2jyRmLATFehQ7jeqQpNYbg5Hn6iCtnN4iPLZ5hc8",
  "key28": "VMsvM5dYtDcCyY3PFbXrWoG8DcAVq8oZQdwiNyo5cWMuGVMVDWBceS1KuXFEH9jFBFSMQZVRo3AaspCrEizyfdr",
  "key29": "2TRnEL6kGj2u1qkEWz1uVeNsZZdhFVe7Qw8iD8veru4NjvuFBH2pTtzdMPL7jQs6eu5y75ZJzsLVeG9rLVjhKDKH",
  "key30": "ZhTZ9JvMrq1exjtCou1Dacfgfe16oeoaFinNDo59cQWquJXKdshp1iLq3HfMKxrp1ksGv83nL84PfTtsztK5UnM",
  "key31": "4QXcfpTL4wTN4nFhtXtgBfF26Njv2HUdyzSSgrw9tz95TQox7dn6cu4h4pH1XqiiACzcNpLBVVRhTVrVSraUWwsJ",
  "key32": "5JYM7TUJ5RTj2DaWWbXF6NJzMXqStCkV2m2LABDMGnofGjSKnHBvG489rquxaqNgRFFw9bmwt9EsVLkjyW8rBNmN",
  "key33": "4T5ze5NdMr4pV8om9tvhjcLrvek4wPrME4jqXdNsHoALWquXSXysePPu1DpvLrrPvdFUVeYzeebgaSu3YZocxKkc",
  "key34": "2dkqBHtBdAAWAimYCxM4ejbDqaiirsTvBzQMeoXoNNeFEGvremLbGD1QkjSM18Fowf67FXXFkhDHbvxKt9spkV5X",
  "key35": "nziMpV5mk1Y7wENCAuxsyc2jjNrGVhDiUkG7YopSPEcCvb75NYnqkA7Z7T2VMewVnQpMeDPisxEa5j6NrYFLK4N",
  "key36": "5JnZ3r1RsnWPkDb2QgkYUTu7E9T4oaVh5RfwdCMCKMAiZghHYWsjJshZWJLZaKtNvery5KkcaBtz9rBjGgZmyEBu"
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
