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
    "2VRxLbDL7BB5z3reoZQFydfPBAKNeKgwigE1J354PKQjSaJa9aEfkxGLLLUNM6oFt2ApakY3nnwc2h7hJeYLySpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMtUBEGSgSP9qU4Av52wocojfSZpQyzaS3amxH2U5fhKrRPZD2BjKgawZL3GgM32QCakEHAtMVm735SVko2E7Hd",
  "key1": "gHryWnaSB5u5cqEMe7tBzYKX6xuXR3TvZBsJS6fuLa6G4QYRXH95sybbDgdwD2wTGtVqbeVMh5q7S5GreNYxbRe",
  "key2": "3gEiR9BxfEw4Ra8ofbU5u3bzB7uSg6NBS3qg4pAGMkkJEcfrxBBbqZ4UWGMYEZY3XJgcjx9ZR6QCVWuNEmsWJPiy",
  "key3": "2quUgahUtij9DBYXWNKKGugJaAXWH2pRod3aPWz1VejqbDU5Y1tQ4myGb3wBgTDXaBJ8JXYuLkxrtL2vkpZbUStV",
  "key4": "2PQHu1cHEJgFE2TcXabB8ToYx8F68YXsihPiUBhn4Xuv6tkpnU71FSWAjrFsmnjnJu7EpDrw6SyYLQeccgs4ivLM",
  "key5": "5prcDV1ZjCqMGq9LEN46hy88EBsgKBTiJXx8XkG1FSDTdgCDVSVtGGGUfk1v99x44b35oUyPpzfv92ZfgMP9ooS1",
  "key6": "qwziZeKyztBQiWGsyKQ8KmMbt71oaaye4nN7Ef1CRS3ShkeXLt8qB5nLnsnLD6EDrHSMDjMjhQzeKJ1at2QWVeZ",
  "key7": "3bYda2cnKJS16xitXPowg9VUbeW1BURDgquppuDLf98ebszA56ix9Tn4cmN2zPESgfboTER1bL7dQchrqWbZKTSs",
  "key8": "55zGQzsp7JgTgRp85a5W7VuGmk7AtZkNbeR3uoMvDVdfMZcTcuAuu83wgEqf18vNJrTKoghF1pRJA75LBRfi6BYS",
  "key9": "3s2GzDnS2T74nqpNssP8xpmNLL5cMaZjKj7ZgWoDgAxXceaQ7Snhmj3MP3RUvQ9hPM6EKs29SLMpVPrMEsMjQWVo",
  "key10": "2Dp7p2Aoiixwpjcwd9XJbiwighyiPyuVXLyUj5W2sMdZCJvuByUr6kshsAZ36vz7yxbgqAEtJZVHwwWiyCoqHoSp",
  "key11": "4WN57QL8amgtrQki8HhKnBtQeqqZp5w887ns86X8cHwL35oijzRzUc1DhwWTCcTPpgGWPgt95wQrY3miJW1MD59d",
  "key12": "3APhNTXhEGkMSBaLtNyW24r2kr7fAszyUGvnvS7KQgNJr9V8CAB5LrzGgjKNgWA1K2Cg4qYAjdECrrkQab5dnnt8",
  "key13": "3Uw64kuJwS1rrWEcVxCwEMCXkeqgWfvga7bYgg1hUHw8d7x5cRkpXTaSxtf5947MmE2MzW7aM1UjXL6hLJLrWnVa",
  "key14": "cHkfNQntgh4FtuGTiUGmvbexwEJHjVFXF9sxv4N5ACUFZDE7wzNZjgJcUEEvShkig8CLSyFVjBhuvGQPdABu7mM",
  "key15": "61KZVav8XxcvtfX8bTEEPR8u1pvd2yYkjnqta2jGSsc87fzabyj4bYfzyK1NChfP6Tn4Uo93zm8K9e4mG3Kp47ZW",
  "key16": "2VoMcRVtjzysNz4BmTkrTA2e1msGZWhQdy5zHJXLrx5Dt4mEX3QDmc59tJ1UPFiAG3Coi79iK3tnQdHKsMPd6EYh",
  "key17": "3yVizJnUEUFwEjZQypFK9cJn6Bo18LgQcEATd4HoYrgjyhheZ624MCQzTVEMf7wyRWVgerqA4prvqkcvbpRmfo5F",
  "key18": "41uVetVcQLvvhAQttp3SBCApdgaSV239iXPsEM1FETcG8qn6TPpXtVDr2pHsLNyCP7Ew1Wtzry7DrKPuMiEjsFKw",
  "key19": "61gZgdWTwJUQibkZ2L2bHDtTtZwpcsn255erZXbMxPe78zLn6HZvZi1qkJU7YXdm5anm5qoAxRFcKKn3D4qyTKH8",
  "key20": "uw9E2vMTGrA1BP3uKQwyYD9xG8rJosDsGJaHfRHpP6tPG6wo1e8NLDr6A4n3qiWVXRh3tPXdb6tQST25qWC6c4o",
  "key21": "3rmC78mM1RMCY6LwuZhRmqtgYDT1wbwarqA6BdetZqv527jo7y29Th3hVqsJwyy2H54xJP7b9FFQnmiUy7GFFgHk",
  "key22": "32eWvDzn9vDH6PhNYQ21EXKVyFECG34W7V1LvGEn7jnQTnupLmDSHiZ8uAKRLFcoLjzK4Fc9fUu7ZZ5q2N8zfLbP",
  "key23": "4kc3MhD2hQNHuE8y7xzZBVd7iSoDLTj2w6Yzh93zygBPPArUkeUiDJ8Edgv5FeyHt7WMJY7bJjpeS2k2FWDxtvip",
  "key24": "3MVZdBP9fqi9Y89osbcffTKZfeMkcC8TmnBdMbbtVhoTdbFpsmJU3d1M1588o8dwHksmRgQAxuDtZ29aSpXRSfuW",
  "key25": "5iB8j2ruR1G49TLdAq97X7MP2gMongxfCsRZb71sC3iys3epbGwtPdvgPavbx3m13vuGepz3b118bQHkeQ3AsL5A",
  "key26": "5Ko8zdLo9uGLRPoTX165SGsQudb73BB8SmFU2tdd7MaQeZaBjQ3q4zKCgr6qACVcYWwzW852kHKEkvStUm3JgnFs",
  "key27": "2JbAbpd2D3EzsByc7zmKHA3vTh7iLHwzQunrNHqsgycbP48hRoPARE1gzLfLFRTFbrga15F6QuTtkACU9yEcQauC",
  "key28": "U2x5DKvYRFQ3BMw3EcufAxtQWNozZPUcczMR6hx5uPa3sa2ARdXf5URsqnUgnkmuraqimdtjNJeV2hFCkmEw2fJ",
  "key29": "5rrHgPAUpBi5TJL4aWBvp1MyNyAFefMe9bHonSEf4gFWYFNcNu7UMFy6qsz6HzU7bedbVRcn1eay8amFah6xaUbv",
  "key30": "3QcE1ck4yST2BN5eVuWWqXXzAX38KqZ92wbXXhe3ddRCjiuPVZxKsWQnYGgL1Vo3SMTV4LKZCC9BeKtJUzQwvmy9",
  "key31": "3BPf3sSwHoo6yvsCee6NaUacjRY4ytjGUE9zqxEuvPGTzPiMAwPtNgb9Vs4g5RtnteUdSswwH1iv9hAYVxkbQKDR",
  "key32": "2ncj1d414E1wRF3PFsRxNvSkZVwfk7K4Y6DkMr7dqHAHQo7oTAAAFi8n4PurhrvdYSDhS8D9jMvi1ryQdciX3EMV",
  "key33": "5ZEKGTX2XNhdx8virBamAnHnPpjcn1BpFmScCBgsMKPPqo3Nigi2xtW2hhHsVWzJx7TvnjzRydCzNQtWdgjpNwwY",
  "key34": "33c952xh6bu2wukZMD2YNtF25jtXYkXLxH9e2pYWDYuYw7oMtXSdJHFjkWubXbgsYc4Z2pStKwBYMue3mBUhobE9",
  "key35": "4LEDq3kG8YN23ZEAE6DWXrkNpPSchCLNywG3YovB9HPcM2y1UnPWTJBm5EechbofgwbNbk4Y3LGPQbXUaqXTVHDj",
  "key36": "2Ts6bVCuksLSEAQAMCsFJmCK1myxv6DLqcVcBimeW31rfuZZtkP5co5hTWB7y2GbfiTVxkfuRxmRAEPdrdVXq78f",
  "key37": "4p7bfnBRP6f3HUfmQC27Brb1jaf7zGLZWPM3zWvurjCpCt6QDvaN8UhnEjGc7W5mLgCoUAu4FYbCxX3mKqTQVe33",
  "key38": "2j7oHfcRqwosizpqfSfDTDzsN8nobJNA8u71PQqLAFeA115ZxvFqsa7v68C5GLxAz51FQmaBcAaFrtPdKfsTnief"
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
