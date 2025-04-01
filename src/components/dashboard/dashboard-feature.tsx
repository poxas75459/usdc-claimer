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
    "2nyisuQFv1r3WtEv9DYaqPiefBrc8wqWC6UWABH4oJBBofS1Tagyn5QghThWJbTBLX69fgGwPydAX64D2bK7AjFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vQURuso7bF81sWCxazxMeq3mPSndFLrx8LKXYmSNvmpkT3CZAAF8gWyEPLjPFqxgdVXcqjr629tP5ucnRh8p9Qg",
  "key1": "4esnPG8DrPAz1AqNdGnRx5CZfyEPh8fzonRj2EqwEBZapwNF8BH8sR2Tfgtv9KCETtCpbNbWBBrdLN9CRfVvakHG",
  "key2": "2MCvNzLgNeKh1DdBDpeWg9fVBf4Z9bVwYw1r3hbHvEoCgoiG2q6QpUHA6Ffr4QPcrNJAkFywRKLi3Q1sB7yS24N",
  "key3": "51TwFFu1EzneTkMMRM66bVFyiyUex9iR2egWFrXSnY4hqC4Kfg5ANVHEx7gyNcvVogTvHZeB6AGc3izy1tNZV797",
  "key4": "3F2w1SYGLuPxSekgsFZWXyuhUEuuq4szZBFoNh2riaBYoYhzgdiGLafXBuTy5MnVfS5fF424xHjG4Yog1KHb27PA",
  "key5": "4xityFdDkUyNz64xjCEZbkj5ZoiLU5CKy5mR1X6ku5TPQqwdyhUPt5Yfj9XW4ugTyb9yv4N6emEN9ppBfWLdE177",
  "key6": "4mqMDzviGqWScHdhYMi979TZfvPJFBLTA5afKDpdw7J4y2G2nod4kjBPatV3SRCohXkUonENihQTb465BMW9sMns",
  "key7": "36rV8vu4yJRgvdPGasKZuRgmxd2mEi6RKBW3hyPcYNB3qrR3kdyCqjm4Duyjz3MAbJ29T7cQCMH6p7X3TNvCnb83",
  "key8": "3rvcD8fRV5Y7e2C461XfxUyZ7wbRtCYtqy4R2L7FgnNXVcZMPjPwHGdo4X9LQKUVjphWMcikwfpo3aKXucifoEFE",
  "key9": "3ZuDtg6Mbnz6m79VbgsBKeHtX5ZhBMp33tkrdZexzRejtEwrZadiHfsDmrNBJQEHkhaFhjVNCaGbmfNKN2oDiets",
  "key10": "HkR3rDxg1EZRUwMMXwdeHokKjnvLDvbcyTQXwfrphkZZ9xjPg7yhNeHnmuk19eqo2bRvBTDRD9aNcVLXbFeuuDW",
  "key11": "2tGRq85i8miQ134rXdWh8v1YrF9MzYGkb2j5rjS9SHPpbiZ59p9emM4TiPLTn4NRNPMNX18RNuVCmzwp2gMXncfU",
  "key12": "4pvoXaYGqzZugT2yhfVBJzMkSiJKdXw2YkFpurfQKcH3EcvKFwDFrkwexFsPcfwPyxWskZQVMVcRGGWwWBDsZNVo",
  "key13": "5rMrYH6nHTrZKYuWGuQ8mm6NhvW7a9VUZDYc97chVHb85LfV8YsRUzVk5abzKJ4FAAzamVAuBq55ADzoPnbTa14u",
  "key14": "2SxUX4bW5Mye1Xb12aqrLHvgQu3JHKvTjVaUWEDTw6uhUpgTD1K4JTHPzKZYd6hevPQDeWZKxgZkznewtBdgvDSy",
  "key15": "HXfKH1jgs2FxZGPzJ4HgbQYvx3FqDX76FGzf9iTDzG6rNkz9a5Mp7qWhb2VXxoazrbMtnAMLBDx2LdM4RDL8qXD",
  "key16": "2MqiRpimmQTUMeZnVLoDz2yEPpPuuGtD5zPCip2BvLfXtRQFuHRTa1vUKB5vZ7XLrdHKQyqW2Mk1r82koEsEPtnu",
  "key17": "SJ7GPumUSZqcH6AehtWcSgEj5Bu5EnA3aKpJrMAELbnVMCXyBTfQTyU9DP532BTk4gWgcPJktLMojoDXqB26X61",
  "key18": "2CZqEPC3QXKWr1jL7YSo8XBCgY19TPMCmBypU4DDQUEvu5yotqnqfMFkYsK4Mzo1Bf5dG29YvqY3pncuGQDLjgYf",
  "key19": "aaySyGPRKgE3kPMM6igxSbwqdFadrYeftJWzJ1KnBH6hsHsuwm8HbDKinpArm3E5yHUseh4vWu22wpA2T2QSsdm",
  "key20": "3AC97jLSMETPzaJKUShzuB7ReFKJ1qEs1wDerGW5y5EKeYb19r3d1RAjabp4JSzFkapHqXZrWEMTtryGMzqzQZtv",
  "key21": "4aiUbgvA3R4sGTYmxiaj1GSm9ATdtDPQdRtpgZUxYsEW5Uy8h13PNe3THi1bTzuSLairHMURU4Hua27YzbdLmTVC",
  "key22": "5v3EpH3crN8S4otsbs52JtbCL1iGpskRi8yax3CWtmRx3hagKDk75CbZvV8G3x4PPjgiZTYWLyy9UBMEiuQothpM",
  "key23": "xzBNHgjsznLyYGDp7WfNcgHjhBACFoMa1wFGhTZCYF8vT7cRcsyYmG5gcvZ2miMUsavovnw7qhg5tDBB3mb8JxB",
  "key24": "5QZWp9Xykv94j4mhBgbVvuPi5aLyNHiTaLPnfiUqzMEhMo8XcJDQV6L7i379sUhwjEqGEyLrqBkxSEN7TX9CRxrw",
  "key25": "4BFFqTa38rMbqSSQXvjqfM9ByQ6BxPVAdsyxtDiM6GDHhaWD6f2icdxDBUhz7yJHcs8kiRDyWSqshG6tuUcnXthq",
  "key26": "4U26dRPsvTVr8VamuPu5hRg1JoGgfMXZazZDrXftZJSBmNuECSpJAu8KNhiHiQXXV9xm7stTJzY7UGtHWjrQyU52",
  "key27": "AQ2VXCjaDbqrvMQe15XdRqqyyfZo5bYYFQzAYxUJjKWa8zA8ApFv7KukKdp92DWgMB4C4zmpNcpsa4dS6f5ew4R",
  "key28": "49jDyWn92TySf6QeYnMUoBmKZCiAWbzCKz4s9Hk5K8zkq2qJLyexuYUzJdW8MtFkPdfxnvNhch8vfzuMEtH8UWLA",
  "key29": "2nGXMSiMJHHPHdyXMJLosb3BK8GwKfDzwrGTibzVwCyLzNfSE4vFokXjd41jU9TJ7LdT5LEe1DzChpyXXTNW7U5g",
  "key30": "3Vw6N8sTb8tCMddVDmwgZdSMf6QjcwgPy4XvpuRX1S1qwVubUsVbeTY8fWPbXN7cTV18VfSTubBALqCF4Vn7i1VK",
  "key31": "2kBoGHbs6hAAtF9MJpDkm3QS3263KHiGYyAfxnthhz1Ey31JQzT5ebWA22FYRE2Ei18wwSE2Z63M35U1bSZjaBm7",
  "key32": "4GvEHA2G3JMsJZ62hJJGHSRJS9on3qcuwFWbAgF75BzFjqWvj5PUbH27nnPphtXi5Kc35SXG4Vmwn1oieugPcoNb",
  "key33": "5a7r8VD69RibxyyXQNkdQsDQRW1fHgL4xWwDDyXJCteV2Ziqo2KZZ7PJfKNXEKZFYJNsRPPr5C4G5zGBKFWNyjNe",
  "key34": "dewdWDRnCpWqgJery5biAUyLHoMnqjSAuC1eTc6oruTevirrCiESLEQM9yi2eEu9Xy61Y5fkMUTj45wVXUoBoCJ",
  "key35": "GMDYbGHdJireyWYpsfwT6q76dfpYV9QY8M4Na9WagC9om2RrV9cHuorTQ2bJLMBj2xhN17ws2x8FotU8B65FDiu",
  "key36": "4qYg4L7o2ZDF1EQSFuasZN1arhq4VYERuZPe7MMDu3a15XCHGwXwSCBcnw25jVYTzg1nRiw9cPozPe8hY2oajorY",
  "key37": "3LcbaREXdRBFYh43PsiEUP2NN29rcqoHWiXRtgjGktLi4XvEWbQ6zmX4H76hMYNkRRSySNXCebgaCaM7znGRvPuF",
  "key38": "49mfg6nD1zunM1Uv2U8SAd4p15C5GHRnkXLgojJ3oczzH6KnrozHDe7dk1RBGXoQf4RcKf5MLVHs47NvKuzHBK5S",
  "key39": "4Te8XGUpVuopnrSxi6PNMZRJpmqf9UpxE3kKYZAWxhLNUjUrPVvudj4ieg1ExeEV6VHw2nr5rvpn78pmgKtRQZ6K",
  "key40": "R3gsPLkS8gFbks4q1GFbGwNCSek4shTTTsahxPELYN5J3j5yaowLhndda5hLLBVUWnNjsWuP1GTPYCEXcrUW9pa",
  "key41": "4G32QYdwL1Yu1WYeu2oG4maPGvnz76emx2xUhaM3GU5BBGVrmUB9JjeovXAeCAezcfK9qZArteVfY58hjkxw2wjb",
  "key42": "SCXVTxPj6YK1omZBZ4iyQ4a7CxHXZeTPjWN6byveD96PfRuxqebnNX94y1b5dvVCyzs1G86RmWTD3rnzqgkZdxE",
  "key43": "3nihtMtQmYiNzimrSFcHnbzZZYCytB3ni4yTai3zW4tbK6fvXpBPe4iK5ZoEKn8dZpFsDHg7jiqCEE8q3fPHT32W",
  "key44": "59oK8qyqrpaCnJS2nu1ECqm8enWbbzjN7VEskgVasXiKTD3YYEQCX2HxA3wvA9jkEjWhLxYmxJdVzazZ1XMsKQVc"
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
