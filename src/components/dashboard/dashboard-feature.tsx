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
    "5YMYiuNkEmi3cjkzfcW3ZBQp6UWgbzxYMZPJjWoFrEar4z9NWdcE1wpjUxEGgPwSBhoB8nRryDjCSZzgyy2TfyhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCJcHCTUcDSexEGcqmcsqHWQRBB7jag7yHE3jnvSgQg6jjRRF2m4x29pH5HhXoyLahx8x2uYthedAF4bbhVKyz4",
  "key1": "wUipbAhs7o911nzEQV3KskGGEaLJFZ5YEBdjP7k1BeKNkCXRALpUSMwsMEPeua8FQH5Lso96DRfc7resYV6du23",
  "key2": "3V2KeoiQykoSYbsoVE3JbhMKADUtBxaWtLy9spkyRxXT3k2KaXfmKVyunitnypwZKWPCCnAixVxh2TSsGqo7QiDw",
  "key3": "5YsoRSPMbCapxBs1KgvBNpHSbJhNUAZMjj5BqPLajCsDSjT4jGqQCVMgnitQ3XVhJA5kQK7ev4im1M3eomxvZDUC",
  "key4": "5JsYYHHicYtdP1Au3udSESHX9GtjUEaJV7kwtVpQsSQZ1vkg7yMaLnYC8hbR6beBGLsNFPbJZ7E7DMNT8EEN4HwV",
  "key5": "4tn8TEYryGBjY6YmMb6ox9jsdTeRGTAzgxuuReUxNUvmTk9Hjgp3pGDVFKFSTtwDo1m3i6Jzm5S7xeLspqfekH2e",
  "key6": "2LJsj19Z3Po1g8YwuyMyYes9cqCHsvNSVGtNo4B1PwxgzYFwabzAzfgkK5QYWqyZrL7HAxZtNmKWZi6fD7ZuzoEt",
  "key7": "29t1BfgNAnk4ALWoe7QtkLELMmzuYJzFL2BLivfrVRzqkWePsEjAAbix9wkVZzNTtnFuFZDZDQLPsCBMrGS4Hq8X",
  "key8": "5JadG3ePusntAsooyHYNQXYK64eQVzHoANkoJG2p8sAfptBcaotYF76rQqnNBD1q9BCTg5tUJ4PBsUKfuh4krCJy",
  "key9": "2FyUS43XiZUuFgGiFMJ39pA2mUTbwHuFnyAUQ8daxD9H47rUzGAyvK99jzEse8MdwHpjobgCh9JzipZExdEaw88e",
  "key10": "5Nxf5A2YfJ1yeTdw3ZkQQsg6R6qbMK6wjb6tVBE738gxUMaMvQmq4kzxd8VGTpWZP5R4eNFTr7fySemozGLM6LXn",
  "key11": "q6CnL74KWr2gftQK4ngpKZfKBAYJQJYxddYSEDWFP4xHuM4wRkvSADZ2RH9PWo793QuMz8MJ3aJnKjRRqkNNTRv",
  "key12": "VRK7evQYfXYUpjxgpPJwVgfBcHp8U1b3ebzpPeMMrYcqxT8dXQWPKf3sFDRRyWM5dX44hpMsUGvDa2YrN7DWmhG",
  "key13": "575eYHi742FHfzbMeVqmctfqHKeLPw8GPurZNkWoYPB9TyBASD6y7h8pQPuEVjXCNrjUoT1SM9Zo9HbjJK266R5J",
  "key14": "5P4SZdiScgy3X6vRGNkoheBPdQCeoa6PyWLqnfQxos3mqRNWrgHHCCLDt3FpMCfySsGyoEGfJSiBpmkAp7zna8tX",
  "key15": "38DB26C1BcPSLo4UjEbBRkJe1dY8ERsXVRtTURJ2uSQ9qerMJShsY5XU3BRLqs5jhvqwTRtWU75HDW9at3xFiMw4",
  "key16": "54UPWvMkWkt3WEJxW63kvi1BSd8CqMqWvGe4MoTvoeR6cm649G52Vkk3wQmmDc4tgDhmg9xJRCZmQnhceVQygh7U",
  "key17": "4bECptU1NVMtcnu1JUuwVNrc7qFxtSHQUga1F1LvZmpzW7fVB6cnDEvGyrtsZuHPHwbrg5zQLrxYQC2eNNJeJa2r",
  "key18": "591pJvvvJdEQ3KRrwBnBYajuLGsFfScQjYVxDRSVE7Z9bGHAQsJ1vzdtG4p3n1m1qPDxZeYp9pKiK8ovkgksYBVT",
  "key19": "4A3N2XCRNF8mXjsLFKf22vppxvFVYdfFmJdhuWMt3gsTvzLDiFCfRZKZZ6RZNErjWTjySgaZ9Q7XqZofsptqpXaH",
  "key20": "ZxpNVsJfEegRHRmyzcdzSLbvGWH8nrNnLGcAEFQxqXKp83Tnm1GPA9T5A5apmctj3KaJRC4ZXorVnRfiunCeH8Q",
  "key21": "3SD4PWMCyr5CtMRbh6WxZzc12tkWNwoVLbMH9A2cZ4LjXs3Fu9p2Jb2H7JPS3ZpNcPguctHfUgcpv6tMp6g3Adc7",
  "key22": "DSQNYGGSs17RT6Az3bRxsXCrBY8cHz9teDRqtZhafUwgJjShg7c63q3yHRrtENxkk4V1UpSKiFJgQS5uJr3BjkE",
  "key23": "4TyrDehgYHgKBuX3odmJaDQHTiaXdkv7zgygXZmduXc24jS7fFotG4cYTGo4hGKWycdtPoHsqfV2mTC3Kd9yLFoA",
  "key24": "3qejwhcHdgx7PB3uzNzjoJu58RMnfpshqLnHg8PLwvKNCUimyHB1UtAHGu7DGFk75XTr5CFZ4DRVFSWWGrHJuJqG",
  "key25": "3bzkVcNoMtywLTut2L7boYFVcXUv9ZisYmXrLvLLvnqP4iXgmmh6QdSFGp5BeWgAP6ZgnAKiLwaCYj6AZwPEMnF6",
  "key26": "foq1GECcRSVwsG5burkvpGPSm4XXcupXFqXvr2mGQiRdtpqKbPfFGYrbQpueYB9HMi1dHFd38BtdSoVf6dNCXiv",
  "key27": "2emCDcHZvv1vQMmspdNaaxazFJiRYSaoqZCkxSmBYyFcsxjPyMT4au3qkR5r4kwB3Ci7v1a1xGsGWGZ4Bw3VUNpk",
  "key28": "3s4Wih536Ltt6NeSSWMoRm1zs7HZtKZyg2zhCQ3HFyTw8h1DvoqfPzf2edQuBa41rCxwyLZj5Rv63iro6kPLZGrK",
  "key29": "4qtFEah8Ckrzqh7jPy4Gezurqm1gzTw9HoSXeqngePdtzXEx3d3fUbeTKLbKWkJaq4VwcAe8E7s5jW2nN3BfogSQ",
  "key30": "4m85G5yjhqkPxLF9H82JZ5M6QSSyuWWKuk5n9Zdyv6TowgQZiPXwESa2QqLiKPS4jsnNcvyqzgEf9uNqUqgPcDrn",
  "key31": "2cdoCeBAEHgbZ5jbvNBqTufDyPzMUtzkN1FZjUm8WkK7wtzCeapvcXfRgENLZoWvQvPz6aiBUH9PdWsvAGFJj8Ws",
  "key32": "2frEFkPtJ1KDZwRBr2DzgFFgJTnjkpas1pPgh4BGJs1eJ6povQ9KaRwCeJ9vtE82VfqM3gXEZqQ14ajfg4gMBRua",
  "key33": "2Xiw6AQPkmWRqSH51mNp8p3zXXcBGUft6c86YHVpFEHq294Ti4Wxo2GqRrDr1rXg6ki4KcbHFtiEcQZnig1D6Rv8",
  "key34": "XaZjonXSiWPTVguvqMLQ6Fn3bfPA7NwzEiya1yBLv4N95biX74fHKzr75T1W7wPBAbgJ1KRborcY7CZ3ePDWMGw",
  "key35": "e2gbT6F4Xf5wkztAD6yHSc7R5k2AqKELGx1EVZM8B4rVVp3Sx71giA4w6nXMy6S7oW1BD9Kwokj8joHSYnF6Gr6",
  "key36": "DiiMNev8HjF5XzCr87zjeENBigFtpUAB66sVk49hZdNBZWrguz6LWpVDx7e8Vb5RTaHSx6aANnG3vvdzwiGFYP5",
  "key37": "q85b5pLYWMpy2SftmWDr16pdLSeWE5bufehzGvBf5u935DP7L1puyFDEEahSxSZGEYUMmxExpvNc8ePj2APNXk5",
  "key38": "3SyUU6usPvqiugq8hbHoQ7nMoLjXtGtZKgYmWVqCPkivFVHDAnnTSXtEzjroo3E9XTfX2QsE6NNF35WVmDMFv5Hh",
  "key39": "223phkFxfv69f9AVz2oZUuyGpEjrKSfZNYwCX8zMdwRjGpu9ivu1bPoRntPw3Tbwjg1kiLh5PpT27FD6oT4V43Ns",
  "key40": "5KY6JA5rnBAzyGiJPgk8MvceSP2ro5iZ84WuzFXiE9a87imz1ZDxuYve4AkmVkDJRwS4TN2cpo3EbLdDSvPvTpWZ",
  "key41": "51p5J4L1gKRnRFMsJDUdG9zBkZBBjDyJuobeDA74v8zhyjpuJ78aetUyjVSpm7jVU7fCrStbtYvaZvrKPiosjxVt",
  "key42": "3fkAzK6kd5aKjqmnBSLzPd9cZWyXKx1QEtBLQJHtPhqqRPuu6914qdTPh962VbBmQ63Xcd9eCJLUGZeYwezTk1Lz",
  "key43": "4mUFafUWvXaESTv524SGsC7tztbvVrBENygN2yRHMe2LmCGXY9h6Bmnr2Vs1ZeFEJWag9RPAfWomJXeNaFV9jXw5",
  "key44": "4KyisaNLMsFMF5jrEKi8L8iCWZApvPb7zpZ5SxeJBTKQXFF2qaTPjAWcGfyt9WPWTs1ciaXZBeu48KDfQAR2RGLs",
  "key45": "8AQqsL3FqG37RHtWDz31yQGYCDjzGY9p8ujCZKjuymVENkKTLFrsWtDZSYKk8yzkGvSX7C3DY8kNX5AJamxir1D"
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
