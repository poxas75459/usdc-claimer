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
    "4VCtfWSXDLnHhudTDMWZSJUkvJLULTAbxcftJX4R6MQXtNuLCuy3tLAoCS9eD1PLLeZKhscSZ64Z6uLPxt5tARko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5up5Y7fJeGxnnbMFFwJqL3frFbfQwwUeVybvckbyMHxRxG3jEvqiRWB3fRw1yfFyuzTxHCVTyieSAZDbHhbB87KL",
  "key1": "Wgu7n66MKuhLkLtyREU2A71A3paLGSRQEM9AxETScjkNnf1jeYG2KxGez8MCeepkiTtGBaVRmttzjaNBhJaG7Kd",
  "key2": "64qwGC1Zkkh5WtLrTMMdAe1uW8AB3727vYXW9E3V96pDjFxvUVSjBZ2xsBLVL8ZRV1gVt52kSBqP7dvzBGRrfkq6",
  "key3": "4vJkq5vZNY6vppvNvcd2TSQU5cgsHf1Jy5PLvpDacmVjSJPomQgQA4fdZJbypRkQ5kgLzhfiBMbpo3d7Gx1e5y4u",
  "key4": "2KDiiUwMQk7yQRzvbWjewqkmXyAVwRtRpHWtFDDC1iqyQME1ryqCUNtq2wjGLmqdZvJkeGPUZv5sXbzL3KQgcfNt",
  "key5": "848ZNftySY7aDEFX2N9g46GXSTQrJnu1mbfgHeWBDGhK3WcuK95RgMdoMKJradYzCmUWMMGr8DdLzomVC9weLRC",
  "key6": "4yxhha78zEqMvATsC6H2Sv79EDvRWMdb932DqshtBcPPL6x3U9e3PoprDgwa5tiQ1XW976UHwaAdHFQ5AqYtoe3G",
  "key7": "5RL9Kwff7GEhjpx5FFht5ePFG3NYvCmT4QvthwJbxnFyqLF2QZNrtVR65eRpqtZWBCrMDtdVXpBS174GgiWdaFkA",
  "key8": "45L27Quhqz2Ts5B6Jcy662JsWZGKNieamJyfLSdeark8nvHuo6uRFBR6mm9u8ATKjnFx5AHva2Wb664KxZDYuLPT",
  "key9": "Y73JSTV6Y1spn1pUcyvDU4Rabd5vDFHDndnxxb7SWV5kCd9m4tYsZ9EBP7ETm623PcDjg8HTBWKKYLGA2Eujn8M",
  "key10": "5MRRe5LbrxDGTc9gzu65K1K16sTVq1C8Sj879DvhgQN1CeBxfrJFoPqeCy7aA8akhDvJJJ2pcR6wV4fswN9pwfyZ",
  "key11": "4jiVFYFkBwdTgwAjXX6pe96NfQpbPsrhuPcjoYAEsgPaSx2avkSpGWJnFN78VvjPqQWyouY8qtsMpfwr6jdoq1WF",
  "key12": "mCLfw9faAyuNjfzY3L9wtFHLRJz26B7cq6xRGb6EP9Pcq2jjNvBUajHCsqEsevjSHFuXpApxLmN6j7Lt6t63XtJ",
  "key13": "5rfj1Ht8YPSs1RkfeqvzUjYR4ab64E7wpEaZukMqptWQxQW2HesqUxioK3sNYYBLvcZWj1S5vNnwFJkLWz9CvMv1",
  "key14": "3ftC5VdMDMzbBzuTELqgpFgMxkE6Wmt6AWH3NWQbGR6CWAn3jyFHU9vUeH8GaHUPHLUMEmbENRGXANY1SfdDCwSK",
  "key15": "2Bx8Ai36ZPbVrZqSfEjVCKoYAPLQziPqA2PvjVfSHrFTB3oCTTAqDBxRCJLDJhLUMM5NAQY23ANEbCikrLYV2ZZ8",
  "key16": "3TRCFLzXZBwR4LxYUJvfBVC18uhVMsRVkaErcZEr5mwPQESLt4ieT4PLQKSZNeVvgvKkBrtqsENChUpVQ8J2afxL",
  "key17": "3PKp76CqkSRV26mvrRbpUPamb5thnD69jfdvwJiRfUtdfo7UCqceK5nvfyP8H96zV9FcBp3msmDm4fswpkD3HSCQ",
  "key18": "565iMQsAe7XjV83EcdFsW6PVamzjd5Qus7JpT4R4Djc7ntPR5yRaScYHuArEysyiUuRdteMyo6wCCSUryQEU5ouk",
  "key19": "3B6zRUkZTrW3EAGRhALwDY5msamg7JVxg6ymGrsp4Totd4GmwrvkdaDWDmq3cDGjdGVoPvs4hZYPbYqJmL4J5rXP",
  "key20": "4CVyLN7tU8LFuDNJWq75x7guAuS6Xz684D2qSNYvZp1J2ec9N8pAqmVWfnJTFzD34dCtpEoeHM6PJn6svfvdG44R",
  "key21": "58sjisWyAAY3PkgdjrUbuH3Q3g9wgRmkpqWoidWUELs7DADfdFUvNT64azqLA4xFW7SiZ1jemy41UdNMDxuDh6wH",
  "key22": "59BPHCvNZWuqoLxNyoyEnKumEayhNCTpDx8pKS5H7r82BSEZFJNt6TfRkzKT5YLoCUhd3VmPMZSYaUnG6wwFWTBE",
  "key23": "5fAYbc2sMYkjs6oc7NfT692J6tJYuTWT2sYZ6zR6BT2pDzHMLcY86fMgCD778pTM2Ek55TLDErTH2Htm1wE1h2Sd",
  "key24": "4FsUqhBNXVo1FqKdMFepKKPH5Jz5X3b4KMygyoPCBJkNUGHtSsyKhytRtCo2VoNk1GE2eGoPpuUi4DE7nMbkPesp",
  "key25": "5KyzvPQ6jsE5AWesM9du6wkxRWcujo6GJPsMPzhT4GpakNWVknMbCPepMBuQeci1yycG2Civ95rmEAG2QRuPvbVF",
  "key26": "36FHgMPUzGqBHvQfvqyBQfgHQAZap5BGqVWe2sw34SiUfZ35D1HWe5wK4h2cAujbMmfgKzMcm7TWyfK1VeXiXN1u",
  "key27": "2MgTJVF9QCfbXXA3ApdVi2imJR6z4rqHSaTkCne2W1Y35quiUXws4UvKDyP9ZsH8UTkJvXvQ7M3G1RMnNguVm6GX",
  "key28": "5h1dbPUboePfgawSVL8vK2qQFTW8R9GgYwHwDXkdsjwrUWvFw3aqXj7MzCQWkgmuJbyHjtuMkyk1c8iirPj5FdCh",
  "key29": "2PVJ77vX9EjMX6Qnu99oRUCspasVDrSW5HVDUsJ4eor19xmHcmePQSbkyx735BX2SavZ5hvqPebjH3K2r5zRLvPZ",
  "key30": "4GGhF9jfx4kvVjndK5ug7FokSQnkSLQXiqTD2kXLb8ZC2zT3az2FsaWcTQPChAvfJLWJMkGxqTMVYWpC4HwxhuNe",
  "key31": "4QKUt7qFdDNyJe3CW2bAZHQMwfoM6HURHhuFKAQVfkM7UWZmChbwL7z95pKDtwzhuawcRmofutgUb8Ku4pj18Pa1",
  "key32": "4xeDnBGz3o14VNXGpZQuSAioXUnc6DcTqHfTm7EtmCjf6pdhSLXBmxumMmQ8Kd9HGjC8vBpxpEnFnV1q5fcoALyA",
  "key33": "4DT1zYSwzk9gSYpE8nfodFMNSz5k9Yi9V17UgicQHgsFrnCzEuDqaX7trhJi3QimKZgumynGQhYiwTghos9a1BqA",
  "key34": "4sTLqU6xCm2pugHNAUVuLYtuTP1X4eHkVWp8XUWMEtLfx8bXVThFEvF5XevYS2Ttc7SdcEgqJ35p2Th7G5iuHU43",
  "key35": "5CP8zBj4gzfGoRqNJ9PT6EMPKpvC3FBuUD8KyGYqYaZtq3ecw2K6M7eoTH5QCqXv5QFADm4EkbY8uwv6Lwxw1hmK",
  "key36": "4N3oUu6Br69JueVrGfycpXCJekC7FCG6MbyTJALuHv2fYtGAEN9KzyPLs6VEiQdeAVVWRb1i8tY6YYpYaFoMwN31"
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
