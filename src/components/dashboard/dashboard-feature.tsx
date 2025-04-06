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
    "hv9heoLNS9QRAMF3xPo65WshtDw4wacuHcn7JwGvGCqw3HYgE9EZ7AGuz5MwpqjEXXg9SSUNMmdu5ms6yxwm9Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXwZpiqrcWQP6TYQyoiHpNiNhQ8Jnyz3zumVUEFjnuVJ8pPZ5e4mdro6ueMBED9AdWFHFYDqZtykaD8Cr1e4bKS",
  "key1": "24cZjtizfVCCAuh6GCazsLNnpuettaSzCnBRw6AbgUxpyHgjULG7etPRBhHCPyNLA5myuUD1mk3Xku6tkBAjcEwz",
  "key2": "PDq5GN3NPY6SjsmkKVrRcYLKQFMMRebUR61pLmW3P86WLFGJRuN86sNgMFdLW4MpDYXDFcvgFqdQAVX1DoQ5R16",
  "key3": "YK5HPMDUJNRxQjDnVc3N9Z9R65tfXtgjeUBwejjL9L77b4Rv2G4tefcgHRrB51ZBhfXaAhwK7cnCdyafmaP3Hhp",
  "key4": "48LWZKPpBbe1N3fQuhCsWXUKsX2JH5AAfPFbKpmNJzR1ozmSD9Usrf3eJ8GVR21dgtPyRw7HN4qf1QmZvQyYQx4P",
  "key5": "ez9NpyERWjg7JfPRoASEshoM7BoCAz8ybxZBSjE4Z93GLeGGJ4AiczZBSqAWTHoSPJd5TWXRopxs8rQKTPiGPis",
  "key6": "3wX4EhKdR3rx34CRpXJzWJyVaN9N9WoLGzuGeN6r6Re3s44uGfxg7jysX1sdUWoLdm55xkPABct6JAaSpi4oPmks",
  "key7": "36c8KhAbDvZxv8Boj2StGwkTx3CqSHavDkBXF6pKXNN65NfnpFS2EGYZQYBnL8P79AT3XfDxhyM4ukXbcz47eSBd",
  "key8": "eoaxGkJFGLrh3XeTC5aVMpNXBcg1855ub42RvrxNiisbRvFpa8AWAZggWYPVgYeuCmDtfeXm9BqFSHySVcitka6",
  "key9": "3rgPuEjsVdYNjj5C3ssfiEPUEcdqtcJ9ds8mEqRtSD5oWzKprYPuB3nTdSGFubobnCzcQ4ySvMhZvhfMkmhNPHDg",
  "key10": "55rSqGueiG1gHZVt5MbgSCXhm3MNJuA3J11VGa6v9Q8fpVVo8RvMWQzmSaUQh7Q6uoErosHadG9B9j4JnC4TMrC8",
  "key11": "4VwvmFpZFNYRUJAhMvFxbQGopad8RHtxwiwfdsPVLVxceJrk99a3rxjuP6EuQ668AZLQCF8CVNtDdzxeGnHm63cR",
  "key12": "5J2RgVngGtaekWEu2iRMCB47D26xoGuyzRRMg5tQQC4L11rnzPJQ3Ci9Q2JRts3xaRFTzLE2efP3TeRuxTyNBHBs",
  "key13": "XmAXH1eB7vS7M52oRRDyywLw8sHjmrKvHwPYCKctWjKgeEbQFmPexRmhJryURAmQAiBDEBBjsrCcNzjXh55H4Fw",
  "key14": "2ZaWerGvbujXdv5t4SXLzokYsz5NEemzutyT1S9ExQr7ntUfmqhQbRdBk2CT3YKpsRizSa7efXuqHvQ7g7YVTnu2",
  "key15": "49UF96SAtiv1Gh5X1MzSHTNhn28TMiF5Jg427hY5M9quGM3xsbcVXjDupUWTvPz9z2pByCK6eprGgJeBRk8FGJ42",
  "key16": "2PkM8o1dM4j64EEaMHdNXB3LQWhrpHdHHjCMpYwUikavoMAe4hMMumukcWm9AnVqakZ3Vmmhn6mSWNwfGVyDLm5B",
  "key17": "4nBFgMo6z2mE31pn6fxmpL9ZasZp3QZbXkbtWD6455grQdvyehynjzkmp2gWQWhRY9ny3XoGerY4NVgkKPvBpjQd",
  "key18": "sZDJMwQAekWdbKSXTiC4gQCYeX55X2jQxHEkDq3UTvQtWdMDuDcaYitvtJN2gjbbrLy3WJvHgFgiRqPcn4hrnFb",
  "key19": "5P11zHor99N2EWdWfCibNMJXfy85X3Qk5TKc8aG5kB9md6NND2ep75Bi3eG3LJFDNKE6wwDoWSj8EVFBEKsGE8ZX",
  "key20": "2E2zu47ocL8e1Re1ooUZ3vM3XuHGJ7oPLCfJRvrxE1yyGvYs3mVt884rdJzgGXoh8bByJ5qtXazb11ANZjN88jVB",
  "key21": "3YGwZiqrXA5n6HFZLQ3YzsBzyFKFGuA4p331MGS1Ru5qZT7GQKTDfhJ5kuGVfjdbmkaw7JKfYcf1Jz1ktBogm5zV",
  "key22": "YadsA7xesDcrj3qvv2XJSQUtwzvs6863W3gWPu1h1Hz8ShinjoQw3MSXGotq3GZcMRs2CTShX6NNEArvGPKxV5t",
  "key23": "3Bx12H2QUHTJs6ydRUhyZrCiNXcRY1fycjR3vjYThqaJuJvCChn3zxrbQWzJLzwVzerShVcfTvCH5vEUsLXfpsqK",
  "key24": "4RDYAGjwEEVKmK6oK6N97zs72m4qZVQUbRyxJ3F3cwYk4BiWp2sTWYTFUbduaRJjcMS7naNDuaqqnX7a6fxG7eGz",
  "key25": "5rvBTdHmkX6u6UeZn5eGUiVkiPWag4zYsBA4CBPe3Uh1TaiVeWsmFNjBMKHkYfDGF8z1iuQo6gS4zGUJEDScK6CM",
  "key26": "kT7jrzdss7KyamXDKsnkkPzx8fUiyQXmpKG4aBZSokmV9Mj5ZMuGvdeAanjwK7XTe9VQoeEhojKYMie9WGp5ZXe",
  "key27": "5sTp29T1KN8jxKC7eqyVE5Rw3zENGmBWdWKNbGa8j4Dfzy8PNmt3aYd4muLofttxLZhH1K7JtxBSRp5yh9tN7He9",
  "key28": "3KARDyhE9LD23zPd5g1jLZPDNhBv7o26QQuPTjDftw1b1vWdcmWc7JKR9BrE6N8siHjpLaDyA2uEDaMRwyVPxGh1",
  "key29": "5FT7Ge3GhkJGY3oUZ1LQvZGa1KwdTagVx495bTu6JipDiFhvKHVR3RirycXuKWLFZmEaYAegpRXGeFzjLcxqz4C9",
  "key30": "2k2UVeuBDscDQFvBuHaZnjn4EcwPEYGGT44e6hRv8NYB7naKa8QMcTD6SS9ADZ6FzYEH41xfhyoXbq5WZEuKvJp6",
  "key31": "67Jran3uTZKfhQd5T7USa5S9cxPUi5ALpVhRGd9CexnCvrUfkczDJkkzGxcG6ZvFpdLNdk2Q2SQrtEzvZiC7PAkG",
  "key32": "5Zj5bPNW571Ax2sxRcMPZPMELNEdGv1T6mzw6pdhset4r8ZqdjwcpcrypG8DuAARN1yYr197BHyoYs2hnMvW5SUD",
  "key33": "4FvHksihG2eQ8BULLfMXnQGA4cmwmqLFKULraEPzgkQxndGQeXSmAot3JTQ2BYYgQUU5PXzfpbvVUecsPC2XWY4L",
  "key34": "3ua6VWR4G7FiStNSosn7ebKqpfdUUpUAL8wwfWpaHhVqNAwGvXtnp2XbLaYLCzs1nws6D9K4Ss39kYrSjGtYigh3",
  "key35": "BvWtoT9kRSbNqFCxKnjemXv3EPkrJwx8SsTr5j1XME2yRbCmYd9je9Thg84rQ2b36kWoJKuCfqE9ZAToZL4EQcR",
  "key36": "2MQBcEQ5c1ZkAVwWb7SVJaHnWiPtaGeEr3vfX4MEasrZdPNhdCcPrwaMhBptEBr3wmbv7vZQEyLzcZ9svnXxjpj9",
  "key37": "2eAs4j3AENcbJs2Jqsqcv6XX7ffCNYipFHT7SxHZCowXhBTEZiDgYHEh2ydByMA61xepECd6eeAj1E5tzjhWyzGM",
  "key38": "4CbH81ggSmwozkWS9ysgwxoGzs7wMLg5tGbtyUmVui2UjVrQ8YKeSfpxAke5uPAMHEwjaxkkhNf82u3ELTTKr4My",
  "key39": "2oZstTd2zJxFofRDzCcusMtNnZ5gowZdVD1RCuZHAxJQ9wGQ3PD1CMrnCBYwsrFEdq8Ua9VtAciwCAa21wKvpeYX",
  "key40": "3uVaHx4GojUud8VxkmVqJFeQMpx8wBQTQhpWaJt5KKFiqVh21egqvD27B69ruguiXxBKiVM5HcF5m9Su9Z6PmqGR",
  "key41": "nFs5oTknuJfSxGdi9h498F5Pjt9HNtfiF7bFP59YhmSLDFSDeFqiMRtVuuNAwKU1yrXNmfzkF3idNZaaDrozSdG",
  "key42": "4eBRRvapdanvCRaAee3seAyi84tDCpbBuNnRToivpSjQp1b2pKGk31e6R4M2rArTG4JGnj6rgoR6Gj8wc46UdudD",
  "key43": "3ZDK333JibYTvckt9WqQoMqAZsbpwrBrdLHzv4wSUQighsCVVP7FCunso4zy8ieyBhfGBT2f3iJrxAPwMpgiVqdr",
  "key44": "5tNmiARvRRfuTHY4rwkYRAP4SaX28tTWSWskdnKH73LHdoqrRttKk9EX1man6q9k2fHGz5BuoALpujmvqiQd4iz8",
  "key45": "26zQtStJsgErLSxA2PNeUGuWL75SzTh4rtVCFCanXczrSVf5AeEBpLTMQeqNwwb1P7kXCzdf47KgvxooMWTQodKo"
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
