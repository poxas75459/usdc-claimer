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
    "5tujkT1gAzyGzZeWoU1mqse1R2xp2SBCqimCSSJptE7khCkXNoD2GVcHjvVcC3ExipreK5vf3qFGFqx5Vs68oDbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67K64HqDcZa8XpYtyRUREfuW45M2McfUQajrrQfXeRLbKUX7NrUQe4NMvYPrah3RVjvEfPChXEHRnoqFUoFX1RRc",
  "key1": "4MGmqTFjqBNGBbAZs8v1t6L2gCoJZKi4AkkFEBRPQ7G6CTtaXxVttS8AwELv6optJ3ebqzjGGwrFuq3tU7w8JKiN",
  "key2": "3TLT1PxpkFVtWDzsEPXA3ZuBygpXoz8tPxHJ8ikqru9bh2KUNL916xTQ6MJZGJrV1EFJXMupF4usBCN2SJjncXLa",
  "key3": "9EUQf2pe9gjZTb2WvSa6roChANgmfRCJD5f1WayGixjbg8sNMtmRytoo38c7bNeHJKZdJJ4CT8Xpb1No7zieNcc",
  "key4": "3YjPvDWpLsK7Vn8HLStjr3kaxYBFbTEuEWeYVvDgHCMJBHkJuaD8hxyGAGNkZJ2QRj2AoHgujLLMyGLtR2nLMAQv",
  "key5": "3bKMYswXMLYBquqfPQiXkPAU1p36tEHaANTcmLjubX1bdNwcpWR9rpW5pQYqakBT3bAZp5U6TB9k4zMEKxjz4tdx",
  "key6": "2vwhmuq4znv1h19K2S536Sjpq5nE5gnj73yRPWTAvssnTEjEPgVPZ7koySR4aWAbgGcRX91e8CcS2nZv9NndTedZ",
  "key7": "3bubdHkDAxcpNRCCBNVaZTtKaDHAGDZbskDkPeoQAxfDiuC8BdRwmdn5sgzgKgg3rFxqJVeKQ5uUfGQL8Gj41Zh6",
  "key8": "5h52Kbv1UvTWtrv5cu4RB25T2wxP95ifqLRJ5ZBCresksRUEhdSUnxHX4VzT5SMWUZkUn5uFaZGPACsY14d6uPRo",
  "key9": "5M8mVaR4xQpHuGMkXP4LiwsrWXLd8trdvH5vhesoRC1jM3LueyuJpjEt7nEbVFgYq2BNKS66koAUxEEYrv4omGuW",
  "key10": "5vkXiYdvJgyWF8Wz8jd2UrYPrXrVaNfTWEzVcTv78pfhQ4WNFpd47qAPboD31CMmmVekxg3tHwcpPzpZ5btW6mDt",
  "key11": "5cadLirWiTC7aK8wBCDTsGaQkXqivdhi9GziK1KS3mWu7rDcVUCnaHiaeDv7T5ndWnZ6uAeXQdMPNpd2AKu367Ne",
  "key12": "2YzhC3jwbSgDhRotAMiah36hE5qggvD19MsyrsbMamkUkMM2joV7ZHxo2yXuy4dNkCvQTp6eNvBkF8yPBYEH1Vst",
  "key13": "dbfLpYrgfFRwhFhWuvRPzvkLxLQ8yRmhT3rnDmrF3DhB1ZuatH1wCj8QjhSQTKoxnve4z8wzPPRgbZhEKZKrtL6",
  "key14": "2bhhmaRHW79cEcn7PzENQFV1Aqgm3bLDY9LcCrSm4saHwrx3rNmVYJmq4yiGaG4G3GZmfw7kKxwmApVhQE7Wn8Qc",
  "key15": "28f4JxxySQk4RssuugNdoVZfYZorh24xZ32AFyq9tPugGjJB17QTvy9z7HgxpAGrWWqKf9Zs3vtmuuHRet1vU2rP",
  "key16": "3G2ZQNxwhakgeQgpEBGwBEZMKYW1JsyXiZvczgHTu73ySaVK8p43Ty3MXN9Zi9V2VQNYpCF1MjMQ12oYZTDXnkra",
  "key17": "4WbkHJU9q5knKPqoVqqzgkdLbG94zFTLaannY9kMtvLLcbY1DN7rY6vs3Qmt68MpV4XLS2u5434bTzwfqaxieTQs",
  "key18": "APB4pAM7DRachErpFnYFEHECewxP6UcW7Ae4qyHQ1sx6D8pR4NvRNGAgLD5cHJrjcxoSHQo8wHFaadXEMzQzoBY",
  "key19": "2MMMU99JMWUsCDfVFZZ1GUsDgzQnxGTyD7th1nkGbBm8qFntbnFvQvmdzPtyfm7GyTGRjU7GKQjUb41MHwo7iMEc",
  "key20": "5AQKKHrmgbi5FpLteiW1kwWdw2eoYWg19758Sv3xLvf4HSNyJuukePWZG8zKQpq42MDQSELndARRPYH6v8CtMipT",
  "key21": "3GCYszWCRktsTFehjxUvDVNmTxP5mko8pEFFEKWwuKQ54Hkk5GVWsaGMM7vKyfpdiiLPS1dmiL6Q3zxDpJgcQ77E",
  "key22": "2oPbmzvgx7supXatjv7giPTCqadJ8L6AhqTzPqDmMLZARDBAScCKxS6j1cUpZavkodKwbkx2vFzMdVP5v25M3gqN",
  "key23": "3WW3LykzGZn9BjfuT3rDDu6VKCDtnPjAew4AUMCV8TinRWPBZJ9KDm8qVQgXL9kAjiPVnP723KizvSGoTTRwD7tF",
  "key24": "wASXGd7wEb2ApERGXibi6vXc6XTiC9s7BkVtUeNPS4A727HfwqrzWXSt19z6eQeizo6rgKorQytmkSh2958gRAz",
  "key25": "64R1nnTpeHMQ5KkQPZw7UxTGEafMxFUb8ijBLgv6eQDFJMF7AqEUJp6GKuJsP3999pzGHFKrmq4tBtB61QrLUKXu",
  "key26": "42CD9LWqDZgc36rQHheM1JBNWaGrY734YfLygVAKmQBRhKYeCvbU6rDdRoES4nZBq2U4THZqnpx4QA5gqsFGVU7C",
  "key27": "5NtEHxAYHuQXhKG9sW72NHd8N5pCtBuY5BxwAnp6TkXewGoQEJ3EM6JuARZaVxDpv3qMoxYeBGCLDr8rk86FWLX5",
  "key28": "7eLaXkuSwuu4swKTDFxYiJtTv1N6T1fADtkPMdRChb5KpGwGK3c9oQt6fvWfryQVVBnU95rd5LhZjhTR7xseFTp",
  "key29": "54GSTTp3Ww2wrWamkH43EauARbn1299uvfWhG6prrbmH9xzU6jRhT7zs4SYEHUQZ7WJbfvDjotPvDgc7K7g5A3Xj",
  "key30": "5dNV5WSzMP5dVCr2ZkgLXUNgBFEEVkBXmPCNwNUPmqUGtJjENVJWs7Ezch5582NST5cnmj4UNADtMEnhBmwDEGHo",
  "key31": "5wc3CiWDuxHJ7NVkSTwCK4RtDSUTH4x5i4CwFTcVfMYmvKcfsQJ1uMmuEk8AKE9ucsZKKEeQULau6v3SyWRNUWYf",
  "key32": "5D2Fwfy2Z2SLWcpJaASngRD6crFKSWgYFn1GCCDBz3uWbzd6UE99f7TdRyTjfSFJUhYWAkdzAit4w1TMGbybFwg2",
  "key33": "2PEb7JnPG6sw7RygKEnF4VBWkNdEGzb3CuD39Br2mYEPwEeXrZcUGJ9fsngsTVKbNsacQ6BKAsJm7JYVcRUsS7MK",
  "key34": "5ahAHx3GKHQRCYwdN5unyoeGnsW28qdfzt8D8ip71eSLVNU6u917q6D5DB9p39HVED1iy9zU5vgMPyECbsoUEgw",
  "key35": "2gmEPG4vtiMxcCC9HcbS7YagDvfXCpbomWhXKDyESeAdRoXLBybVmSAhLoHAwcNYGvT4N1Pqoh8BX5NizVVoMU9R",
  "key36": "5kP3mvNyfcpznLTKmPaTXDxaF3WMHKEXRgcFVZjugLvmepfCgE7mrpPd8VGA4vGUZ7VJyih2KVynzMowrXztHWZz",
  "key37": "5pUSeTKJy6sj6kzZ9Y9Jfz2xwvGhiqhjiF5YnKuobYKNsvWUmLpPPxwN1aD4CUHTgPasLtK78He2Gd8pLB16t38X",
  "key38": "3C55K91CdBpJ4u1eZtaUjtYGBmv2jajVrBeemNVpPg8Kn4KDHD7rvAoWUV1L8X7D3iMxPfbogZ2ejgG92z8aFQ5y",
  "key39": "EmtL9b8zNaQhJUvzQaxZL56rnh1TJEm39o5tPfzC8oF2rJ4o7sfVk8KTQfnERM1gVeCFx6oh2JbMtUyJdy2zq1q",
  "key40": "3rfEPHoG4DwqSPiiqVoHsoMRFARRA2r1k4AawNMNssPfcE9SJLZE2RaFXfda1VSPATduLcoiZqBv7hDPCuYgNYtf"
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
