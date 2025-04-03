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
    "S3tMvqr9nb2GqB9NuaqZfxVjrpT8TXsLGJs12jcNP3LnHdcf8LD6rd3PpdCURDHjKEDQnuUzzBM9N9Yo9Ary3mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mg8WcbyJxLJHtKj2U73HLWRoQZM8tNFJVimG7tyG6zuD2Xm4A8CFx5ZS2DNSrJJBnwPrbExyn3NrEPXBXcQ2jg",
  "key1": "27SMSaRhw4DN1A4xycKxJiQWAWoBMnqadXsEk4NaEC2YG1vV9J4vK6Rv8kUCjkKjoVfN8cYKzqP5XoYKrb7ViFqx",
  "key2": "5jKoXj9HebAnJ7sEmKPHEHRYz3Z9E4qHjpH6atEQ1dJe7TFt2JTXNHfKtMvVohtU2qZicKxmPMKkrZ17VaE79YRw",
  "key3": "4zZka7HBrd7JS9rLANMpjK9iSe6BP4jFuFxRtrW6Ejopd2qdXNqmGX1XcbU9yc6gqW7HFAnaGBQwaL6gTSFXt345",
  "key4": "4kr3WJdJdQ1PN1BBZyRFPnuKWLr8gEZ5HkTwv4ruddqrtvRRsQk9fgfrmDoXZMYd2FPnEz6x4ZQEuPhaQ9GgdLgH",
  "key5": "2nLrbrDL8kydQUd6Fed3DxSCBMnMcpjRWi5rC3a2X35eyp7bh7fa5n6vP8hqZtahVN8XQapXABWqfPPtCgLBQYCd",
  "key6": "kgFJJtKs7zgw4yMhTAoWEK7mWuHmJJHpXU7QZ3x96JD4KXQRxyHPFrrTZkeDPGzBLVJjrxiD1BJejVoLP5ehaME",
  "key7": "3AzVw2wc3R1whFWpcgPPgqwzG428PE3R1Gtw3EwpYkEFg3N9XWzxU9APLa9rXkTWpRkGVjT8Skjmc32RsvVXSQeo",
  "key8": "5FdZR85T2bMCsjYDeQgiY7RKzX6feK5pR7WMi84xcELkXtpZRx2A2F2kTg3GcCmR5qY1SH86FbsgFuVtEpMdAuVK",
  "key9": "Pup1JePuF6ABGvAYSUSaro2XgWeuH1f6sivnFgK7HTqPYV78y3c4TMer6yHigop8x5LQ5jRNXz1mDWzqAsPysWu",
  "key10": "BdCRhDyQa1igcv7g8FvKgd5yvWtY1eTusrBQbs9RSUWjiM37NyzgV1xqkts84xKXQguZinmk8NkXEZtXTexJVX3",
  "key11": "4STdATp27SZzoiANtzDZr2wrZcVLstmdYMy2hS7cy6WfCFnMfJHXYgwc8NvH11BMzgSK7q3Dkf3pKUZbuM1ePeNe",
  "key12": "Br2H7e8NDxY2Yen2TbPXzJxYZ1TH5KtqxrYMXJULByT6PCfj4fuv1mKBgzyHmgTuAJzq1yNPAXUSDxbTNokJ21X",
  "key13": "2ekLyGvPtDMkMC336CGMamR2yyF68TPtybYmWtESE7KgZtk7wS5G5EKRUmRw9gba3g7ZVs47Geu2GaQu7azcnWTb",
  "key14": "4q1JwSsZM2KSCS7uTzEXLf6R3vShrBpp3dygoAxKwTYPEZHxLYVAUrM4GDqXH2TBANqyTSFzXR67ixGsLcBuxAwd",
  "key15": "3AASejfHaWTBpjjfBWN1WRPontHPC7eQSYX2ecF6n5Mypn2tMtK3nsPwUnPg1TiNFfFJ8qq818qRCDxKrGPJ47Pj",
  "key16": "2BDAYBN1RknK43eAD4kJZjF4KrJfZy74mAPpuBd2qKSAYurvX6M4uiZiARcJ3iWhfibVZJQKfAUGCCzFaHs6U1yX",
  "key17": "5UsV8nS829BB6K7NXNcBxQDvc74QDT57B9ntwHBLoVJh4k4y8TCuUq9RtVEb6WWNyySLkyKDkhCMZc92puiyD3a9",
  "key18": "csKBCtke3Pf9FdB5LueKymVSBC9HDYzBZNdRqTcyb8XhFtFZ9iFrNpRVnoriicio6LzKASe26UMrEAjeaGcupYP",
  "key19": "4SgN5mgv14EwQPCqjGq9vmeqmPmk6iUpcSZLh4AVzc6obM2BqkGtwHDUczEmLuyeSAtorZ7KHkyGC3AuuhMz2QnH",
  "key20": "3D9CX6CCsKKrmoU6d8tn1YLvK2Zsw4fZz4yEamTu9EBrxh1ptaY6pPqqFDYu1GALDGsjKsDG2kCWLSHREtUXEs9",
  "key21": "2YzijAtwevzav6ckGNTNYrbXN7FUk98vGELACP9P8E1eCZ6wfKk21NBMWeg4nyGrRZdipkuiq6jdfYUJrqpQbNiy",
  "key22": "3XJ4nNgmUkSeN4wYfyXWrvF6inis23jWN2J81cY48NKqnuHF8imdYs7JPrpopCD7DFCA4uNdVm55LtVAZcBz62MT",
  "key23": "4RMntznghy83Rxuj3UfZhsfso1ycYSgEFUAmSJtydaeAfU7xNaU2TG26sbdacXiYwTgvmdEzdU23uC7Mr4gkGA7z",
  "key24": "3qAYwGhbmhFuEw9512LhgkU6aLNw4Z9A3RBNCWQVj1mL1edgveorTzQdmRnc1CEwyutATxxjFBzQKEQYjC8AMfT7",
  "key25": "22Wx3q9L9DQDSwsQhEw8cKHnGfeNR1rhU16fbtMvVPLxEU37otNJT6YjGjMa653u53qdncZT1PiWWTr3E95dpNvo",
  "key26": "2CB2jtu6JnvPmeLR2roLaVy8nyQz7dvgWjvT3oJGVWjyVaj3QdWwtiF9duMjPT2jAeQo1cCvhmSs8VnG5kjrMk7p",
  "key27": "4jE8mthUKcsov8jBh2A7vd6iX7CeWL3kbayhSHUSP5VkP25jqh1Jabh4pfvnUyR4VS19TUREJZQnRkE5yayTZciY",
  "key28": "4DniGumdHCefK4f2e7MHtAEdUjPTnfd1n3WzG74aSW8GrNjPcfUWb2Ey6B6xM1kZXVLDhkfEKhtME4y7W3P5pRk4",
  "key29": "2Ftoj9DMb1ekPG7peSmRMc7MNMAhQEYSdNk3saQcY3tSHeLU4GUSFvnoG8hWx7jpawqNRutdxygiDBmDT2ZSqhMS",
  "key30": "iB9FK36Tg3en4HcjEMi5sL9wa8nGyMKP2U8zV5BSHEP3165kEfjVWesnwyPhAAR86CTeVLbRMW2McVrhngPZe86",
  "key31": "37BA7rc97p9Yo1Dv44KfvFK1CdwB3UpjkUpM3keH2AUQsTqSwfKQR8iTM5PesjqDrkZznXpzTQyKbdDj3STexYXg",
  "key32": "2TorHuE4PZdiWqLUHYLAQexQY7wLNV83Sh2VXdp5jtv76gmcaJtHV6SETiyyTURF5XH8Qpx48L3UdYCtbqMAJeMo",
  "key33": "8FFXnii46w76EeQdkj6yb99iU1HMeASaG9ctV15Nm99maEhwYmwFBTkaiMCAi2VT7ZeKAC4mXwASsjbSjyEbHf6",
  "key34": "3SGiBaCkJxdSVgDFGvrkEFV9sBjn43cZFry7CGTBdVVVeRX8RcEUNJndWABS5YGwiPow75ZofvHuGv9zJVJ4WYUD",
  "key35": "3QsEgdQ3MDVsUsAS6bE3SghwC463Nu42tphPJCqQTaQcALXAsHpE4XUru7MjKHm32FM3oqh6EqnLuBFpM9mL4b6F",
  "key36": "42s7SXNbBMMjjVCJm4xVEV8VngtUEE2rFKapvG1sRHn91kmCTukFL3AzdnAYtfb7wAL8eW5eJ55ytgZkWRq4MXzz",
  "key37": "dQyazTpiihWMmv2pMKKN8DuztFCP6K9DMu89z2Zn6SgQNbj7AGr4KQhqjePNnNP5ra5J28jNg8WsZuThnPia1Tc",
  "key38": "2r7HhdS2qcuJUCSy6W6g1PD6WPFPbkHW4YhjHqXm1QWggHTLdoNUVJycNiEUihbRATdA23Ha7Z1ruHckpLb8izhi",
  "key39": "51qG7YmuhQeKuVic7xwWnvMVejgBCWjeYLua1xtHHFGAqYC8ZPUjwBeJxxXXmVASoiDRFbaswBT2Q9o8n356buTs",
  "key40": "5zFQzF6SeN75vv8ByM9uDFrYjUxiuP2vsGLNHbrvYSH2wrQZr7ksp7iBnRZyMed9f1XN4XanjsVvWqdQGERv85NB",
  "key41": "xFnjPNi61ShmrGpNqFVQEkKqPzNyobBJXF7pnLJzPN1GsCuZ2wfyjFnSQmouizKyoFajBVzUF3MTJKdL4xj8FgK",
  "key42": "5PLPhrZnogm6rLp7Ku1wQz3T89C5jdxCMsjSaf1Z25iFSyJcmTArxjP5dPG9e13SRAvo7ejvTeEjgdNQT8PmJEQ5",
  "key43": "3iawczeHpbyACM8fEFe1i8qsMxQMUka3zECYD3VU8vGx8XWCdMTWGPcseX5qKz17G1MvvmJgXWsoZcEepdqpwaS5",
  "key44": "5GBLRdmN2fmL3ARggxtiKsVXQiH1VNdepx9ojAMQcT8ihzsbc4BPBcf8VPFK6faHBfmH5619jkMqvpEnNh1N9Rqm",
  "key45": "3Rp2jG37KR1pdPiHfs9UZdtBJFWbDZRwSkEmEjxNiG2cbU1nkhJW432QgYFvVm8Q2zLWgfb4GimdfxHkGA9wL2Hh",
  "key46": "2He3t2hB4pkJbGAMeKVTUgxrwsaGBUu1NvJuFjurfRgebKBgRtx7dLnN87ULJtJtqUQ6Enrxsq69mjcmca8v9Sqd",
  "key47": "5YCm6G8yA1tof833HZH6f7qGJWmAyj1sn317KG5ExBGV2Kgw1zScfQ1r2uTAhtwi9BAKPYauMYyLseqyQ8TYYKTU",
  "key48": "2Y3sDJBifFBGDb7CbnWuPwjUyFFnsYcnrxTTCfvVyGkKvHkyfT6YUoHbburTJoDVQF3nsDazLbxWmGmDeZFs6Huo",
  "key49": "5SDWYCDcVG7VDmaE8EBstRYMXiEwRtewTRvLry7bavRXB4nMedD2Va9MRqbipjWa3p31tR3FNPiLacqAyjoU8feL"
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
