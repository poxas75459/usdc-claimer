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
    "5eitQfLjAw1iMHAh54PKZX1FX2pRigBJ4oFTZN3bHiBGaEd6ww8rdcfWhJyuwjrPeF3Hh4HsLT4HgjeQ81np3SaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAR4uibpMNSJGgTXeCEbqW1jwvJYvSi1KxDaqGBjRTUuqenhvDNYmMKbqrHVaDtuu5o7oJSRQ8QoJPsyueRTocb",
  "key1": "5qYbwp9PYNLWvGVktBY6dL5R1Rouvnk9Xh1Y2MR8Jxqt2nAtHUEV5xMhTxtNLpfAQhaBhGQ8csB9Mt1fCGD4X5Hw",
  "key2": "549RJZHqqQqsmQRUft86avhanuQbUjXWmTqSgJD86CD1UwpN14cEdUHdmVCTF4FpLRLkJfq7T3YjuSkexNKF9fx5",
  "key3": "M1fHtagAAT1e2BDywdXPRaBmac3Rvoh4WxnzgWqSe6fp5vPDFBB35T4e6iVUNAhQVVSwUC6equ9gF7vCxJdawGd",
  "key4": "3dRi2ztxSKfZixE3LpqQ29gVWEuxTPbScyu5fNXLVJo2uhCdfJuaFPCiuAAKQy1d1bnYqyTwQS9u11bRTxcHrG9o",
  "key5": "2izDkc4fEQ3decmnFaQBgnPwWo7haLYVnibLqaBFa9vyx1HrEUH44ursMVpCNwbdi6RAgBzyUbbMMEcb9khAiZCF",
  "key6": "2cLMCM4xc6Xe3h318zof6e4waxieFJhvt1QtH3XNMYDbwRFidn8YVdPb5kAJq5tDM4yVk6x4oV7vTWkq6r8P5H4W",
  "key7": "3tj9kJZS2BqpKPmaAyWfi71GaJHxFn4aXuqHgZLGNhAhbnJfdvQok6Bm3r18w6Axf8o1wbvssJHQ7MreT4VwdnbL",
  "key8": "57hknW2iMr72bro1jV3gZeX9meVZrXqNqeV8AzsGQW7XephcDpatKp3LFQc6dPAMuHLkjboernTeRnm2Xxjbupyx",
  "key9": "3JvfZG9MZmoV9KTj43MMH1UHxoy7Cfdfjeq5qWScyv2XibPvRaATGQtKeBJeMwUjaCWxjgEHtpuv41ai7QbDYtV9",
  "key10": "5mu3TyunQpn66rwvXMcUgexcBAJVkbQHHnDojw7m2GovDd89Qmf6YcJSLesx6Tmz15v53hojChyoa11hjfZRdTSp",
  "key11": "4RLKDCeQt9m4yJyuQzRPBDFerEMTHmL6N3HdF3RR2txpSQ1iaaWzPU7Pzgc8cp87gr9Nvc64iWnZq8YTz69abf2",
  "key12": "4t1vqJAzGsVCcGbdThbxopHttLD56sn11d1pJg6e3iXnqdF4RgLRG5PzmX3MaxGHpZ9LrZynNnXJTt11YiUooBry",
  "key13": "4rtpMCmfzQmVu9J9UCy6tkg8SddKKt1g5Ee6Rra7xZXQPSLUXKubqtst6DGhFBWKxDQtkjEbK6Xe8tWtDTw8gbNH",
  "key14": "5kdU9KCxZfTEFRSKdMUJPnpJjye7jeHzwJm7Eks9YjjiyqkePNe9pRX7xLgFeHDUPvUNuX1HJV1oZEsBAQ48BLe1",
  "key15": "3hqdZSzT1N2GpFfFerZBeaR1n4S3WqXunbjDrfTTfxsQc5boxLG73bKTP4JJFaib2kuFv9RXCaiWPFH2BDfDxS6F",
  "key16": "2wGqwLZq9chXJP5Bvn73fmRmNqfE99oZg4qD2QCWzURKdngYCgTgPLQ5DuqG1KC45xtioDhKgtRqCkboDbNNCF3g",
  "key17": "44vxbbPv3jK1a9wFbUCHE51ki7ocmVy1b42NK9KD2qfCgK2k7knp8nScttvH7V7d1oMK1dEbjytswoL4j4qvPzvf",
  "key18": "5xBZ9UFDqkCKEV93fCYx6xZHsPBrDV7ni1k6CyaVYFxacuD6tPE53ShJpjmFmeT8peDPVXk2vdffrYMPSrYtx85k",
  "key19": "3BJBd6P4hh4tfLYXNLxr9ogyxY5SWPsQdy6TUwT1uDYn7Ryviy6RgazrS8cd1qtB3pSNdYzP6i2cDZ4kPVBU1K3R",
  "key20": "3F8qzebSGu5YUgQsRwihrpxP5EPQjhxVEA8XFyyddnUvmdLBqUVD8crhyfZjwjcGQbfYA7jc2mauqJNa7732NuwP",
  "key21": "3achKU6t31nuJSnHJXBF3tu6KEhFXEdPWdmLG8wv4Cokh1TNJJzpcwQJveP8WPrCrLLUN3pQFh6eaxC8GQWJie92",
  "key22": "9y7rU3gEtXp4yFC5NjNLRjku3JgPckJtRbzxHtUKWbMyGDgNBCxQNxwgy9w1pjFQNcRumjSusKntcTmBqLuXZCB",
  "key23": "5bFrK2Lxsg7Uyu9qHKsRUvcneEQ7BjEmoWf59hcuwNzJ9oPM1Zgn1W7b7eMg4gHaNinBJGaVqL5mKA8oYVc1PrDB",
  "key24": "2za1yX76ZdkFUt9MN2dgHbV3nBNoJCTFgxctzWwYu7FS1x6BqKTBuhYttJvRi2mzZPCBUjJpYjjF6mzXq4HxNSq5",
  "key25": "4WrhribpPRSmgdnUZXso7mq1dS1MxB1zKWKJb2M54WXr3AUwWzMZG5ZGPu53CaBSV36tpNNpf5qFfG8vzBSnqLtL",
  "key26": "zCb1Gg1SKKv9hZLdhgwk2v516aE33c7mqsJsT1YXnz65vnWf6LHe77RQPvBTdVoBg1w5DB8e6tNeFBqsXzAWjpk",
  "key27": "YpghWbutf2KXWfykUHsimtuZ6YWT7s7SmxLZkFu4Djt6PQBzvbcxtY4kNkmS1N1HSbhXJSygFw6sRRz6uRR3Qj4",
  "key28": "2Dxev4j1iKhogzJhoAtno1y8S2PTSk6Ecgr8BbHdB5Ar5eu4VhUkGGPN33a6KUxpNZ9cdwCuEasqtKWFzubEDdtq",
  "key29": "qgQ8Nh3yn27GDQyjYjA5MmL39xAWJVEJmNgmgQYFuu3SAH8Hw4ddFqMnz3qFyh3H2hqnx94VFKpC2N68rPwaKLB",
  "key30": "UKHHnNxByv1MMHM8ehKJhvHEGmQTmu4rTpwZ3RTUgnimt7MdWX3fanpQGY4HknvLRXpdTyaHgzCnpzukfB3fzbC",
  "key31": "KJD1hYsnt3V5Ho3yWcps478LG26Ny4DQHpPL1bBcc8zqNohqHFApZpdNCxJAz54w7z5NSnFTCUixiN3GhDjg4jk",
  "key32": "3YAA5NtY2Pb6eMguegUCwwXGwEB5wEmfVPFwNCU6oMJhNtzWmRcjKe36ovnwWYbgg7xKQuTehoW84Gqf7FBXKmq2",
  "key33": "5ArXCB2NNQHJz23t5mPKV3VdgtVR2yYSjxJN5ZAvE5ReSccsZ4btvBQBb1CfF7r9CiDxjA1XZ5rWVMGkuReFAP5r",
  "key34": "2U2CgAfUfPF3xwyah5JnNW1Jk9XtTzxahD3pnP6NxzgWSXVEZ3mZDf1d7zY16V8YF8HTzn3d1RjBzhvnm75mQWxc",
  "key35": "5MUCYvaRf1kNSnTHvAeRrYSCix1cbiYCydfhNLmPP9dYiaQHx3s6tWxWVHePriZ6MGDshp6xPqbsZmnLRFQuXnt8",
  "key36": "53mTJaHfG2muEeFXYc9z5mBFevb15KBJBQ6RGtHDxQa5DEt914xSFiJTRYJWtX42NjbbrhtcpzbzHhvmSAcgf8sH",
  "key37": "5WwKXYcwLmHZBeyqYwm3AYmDqGzfcoFRacbCyCqqrrydwTD4dHWk3pdJodLKgRtQAqPuxeeqXooKuvbuab1Zebwk",
  "key38": "4DhQ41qCyqJFtJiV5ZEhP5wEBkVqMr1MPVf9zRScRzQRT7YavY3WjuyerQYJjcAp3RBKBZq3URNUA9H97x7zpZ3f",
  "key39": "3iQdMXns8Hh2UJuw7YDSXhF4RJHUZm5oK9rzMLT4HidEYWA1r7PB8JBPu9gk4Mvh6WegyLLmmRmZNa4FeXyAqHPT",
  "key40": "5VgZEfxtiaih8CNEuvTP5sbRjG4Ceco9TZuaXjUjoP4gGs7BaYhYwyH4gPLKRn75qS5akv8Xyx1tXUD5WQ8EitqW",
  "key41": "2q3QG4SmsemYWrS9U7akSowPFsCJCofhvbLdF2KtFbQN6n3dd3caMS7vQB9BCgBmTJioiPSoLrV54hDfNWiKkVKm",
  "key42": "5jpLC8smUEFwMC2GSMY3FrAwULpwNxAkNQimJXG1sMAv8pc3ZEmz145dJiqqNt86rVWnmn71v3Bao9i6RCywPFga",
  "key43": "5wFe6F2BJBysbvfnmmUirXmfv5FiyV8NRDNzfzBTQFRiK5yBK9dZuGc4iTEcbHkUvoaB273ogYfHK2EV1urdVEdZ",
  "key44": "47jqd6tSRdzCNAQ1eNzeRdTbMPX9QoQhMD5ED4hMtyvCTTqr8s2pMG1PgrurBJtxjD6GWxRLL2Ec5mNn1SAMDnVF",
  "key45": "KvgJsdZcBcXJH7sTLCt5YoLB2iRWcYBLaGRhtqwxgmYpeRK3TS9tVXCcTuPr3D4AMyRtbzySpPM5tKzFx3Hy23x",
  "key46": "4JwTbxKTgGgXVGt52XKSDVp9GkGmaERZvQau3uQT6hgCozxhxuSyL2bZFgRkkJ4FbEMz2ffWG1k1BUY9wfcopp8A",
  "key47": "5Ub96uzKCF6b7qKCcFhuCZXPkzhR67LB5yAdaUeqhJZPzo6YWCp4mTX565U5bC2yX6Was7rgK8UtLi13i1Cig5CG",
  "key48": "5fVmZM7fWyjGhNa2dMzu5ZLfS3gPQSmWJEevpseTmbBT3U3QenPFU8zwQos93iBfzDKPgJdsweFrKP69TapsUvjn",
  "key49": "5JC3RwJKUoBx8KAKB8r6kikkQ35pTTv3SurnWMygqit6beuDGr9SEoho3QojM6t6qRcqCASdrjJPAPLA1gVhMBwD"
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
