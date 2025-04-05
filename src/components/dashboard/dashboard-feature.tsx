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
    "29s7xDMEhuF7inV5K6XYqA4S2MtHtqPesR2SJphqf9QoZaFzXrpmENLARmd7zcbQ8a8LvgE5v7VRkpA65C4oF1Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rj6WZgwECozsLb2zQzNhVsvtGkyLeFVjfTrEAG9MMtjBUCU9ALBFFFBTuXWu3HhaE4amTMJ1dsnY1B6qZ8jx1Su",
  "key1": "3KrEb79oDX7DFMh1XTB5urGEc3QTcsuFPiLFbPZJ6QQQ1Sc7upCorf2hiPg4Hi6Heu7cGyxQbyztRfxFFD6bzivM",
  "key2": "w8UQk5yXeEEURoqS6iCM82ZzW1mVDo5fbWKztwML8pbe3dxohnfKg3hqQRPcM7YA5wz6Cq11KDSweXg8N6jg9uL",
  "key3": "kaap8tcFM9bX2XZqGxukhiRTJunLQu1tTTdoK8qnRN4otttoHymR1sB4AUwGdCofjjxyXdgjXU7GB7PTuFvxoJ6",
  "key4": "37N1Rd5KGqYBVQzbCdSvwxvZ3pZbm2uzW2yicXECbKyR4uYSzfdCnLk31qLTiuLH5g6QQZarwVt9zSWJ9NpdkB8P",
  "key5": "5pWgfRPQakp6GtSE52bNFbGaCDzKMtBrK4hFU6tJqGsiM5zM5x1M2YpZc6EmNgudpi2CgQ1aRXWxRK2HtRGuvdLe",
  "key6": "wN391kvYpWfdVuHyxH8TfxUgSNRgprAJVMuoqMqRcXgAHC4615xLpyQAmrdtx9Ujm7rkHtQcZ3hnVdKVDk3qtZH",
  "key7": "2Mfxry497ASuh9TvXsGM6huXqb2UHpgDpNb1YSPcNKgYPLcCo6niKkX9Ft1AQtV6zvujemun6K7mNsB5C63JdN2u",
  "key8": "2c216abjQ5c5Ky4rw3oArAcaepQY44nDqQjR4qvW4YBScvVyVRByrHdYb38mCLmNQ2mNvZCc8FGJpBgebqnN96DP",
  "key9": "5mfLJtxtnJZgBdmwG9ktjdYJQon8H5aHtkGqCeVwUsw7CWrAMgKBuQ8EAf7t3B39LAuGCKRHgQx8xrLQipjeW2Gb",
  "key10": "5F3hPoTdJQ4GLYsV5pYBJoNe3ZyW2QYsnWE4EbA9p1a4nAxpDezpCcJJjbidVwp3ZaxA8wgNDczMwqY3yXx4X7FM",
  "key11": "5VM1zdUYRvTLp7iq69diX8KzG9GgmC6dp6Kuj3ca8H1VMvUfRJWNUC8LT62GCDoVdQ6LRP864H7osMsfwctDKQVz",
  "key12": "4jEbvEgtVoHG2ZmyPBmjeeU5VuXCheaYA6Qz12u83NnkRE8fc4K3Bu6oTG636wyNhHuERMfP5p5XrQ2X4VGmRtR4",
  "key13": "4hqNDs8NtCzGAYq24PLCcoWRoFbGz1hRznxrmbE1L1XeQtPSCSeajqJfqsZcuHuMSFRJdvg5RoTEMraVPq4MLGwB",
  "key14": "3WpeCnDNVHPdJdyAK9NyWiyYRToaVgJoqE2hq9pXySQvcjUeZEy7c3m3mXJFFkhikf3cYZLu54Qi7KcBF1Q8uHgf",
  "key15": "3ipVdNaMuwdcFQy4T8o3z9yUnTvkL3wQ4ZVAUaAbVyUwXXKJ4f9dkH6ugrh45Mmy6MsWvHpznmCKYJVRgnFVEPde",
  "key16": "25rLHki6MysJABDRNXTRNJoQ1tqVcfNXNU4AcdBo6QNVjuesp4MSwo8GcdjSPT9aoy55ocJRCg16jnQi92BVcbf3",
  "key17": "AnqJaa8ReNxrv3gPyPsXTnWeKxjnD8SnwpjM7ZoAQkYGvboi6NdPfRpR2KeVFeaTnAC6zZjMCSEwFSBt1ZgrfAF",
  "key18": "5R81VPw9bD2TTQtrLjzMb41vDsrNHt76G4ApGXtcoWMPdNNeuXBWKzsKacwtJpiDLs11qTN7ycwZgmm7Gep5qkmQ",
  "key19": "5SQTYxgryUeePX5nyYSt5BMe4WmYqnwtf3K9R3TXB7Mhg9mB3ZD8xFjND2pGubmKDRzo1BmNe7GZSepPYumv9b9N",
  "key20": "4WSP58QHAP5XamdGYaV8xue4SGetF28HD3aZtDdXTZa8181bzVw4dqavKfmMxPDNQfykSjey4USAjubFwmFqZSeY",
  "key21": "2xrt95ocJkbU2BemFzdx211FJ8SE5qAycVWngqWR3QE3YvmpewVqAF6zSp1p1DEgWYFRjyJ8DgvrnX4szJj7CBaT",
  "key22": "4KGBtftkde6eeBUofYfxo92EepbjViaGdjbF9UVWHDB39TFn9HG91CG4JzZin112BHBs1o9aJFEyHiTM7cFjo48c",
  "key23": "3P8h5aBeEsYV64fwqG8zXSfbJoiivqQDoZZEKYbBUidh5DeKXhRSQrLfFyBB1vF3rZkmnDoTaQkyuaS9sZyoQjWu",
  "key24": "maQVPH1PDy92dr3cBydWCPQZq3QB8JVcyg9jwbwRpJWNn7v7BUtaodP2quqew2YdQC5H6DarSGvqYGNjQv5S53Y",
  "key25": "492iwbi5uJgDLwdNtApD63fu5fdVPtCw5w2yBJQuQo8dCoEniGn56ou1CT5h8XPMPSXVByRr736APpUmSDbmeQzQ",
  "key26": "3z2DJzPk15Aq34SsX3SdtyXvC6AWpUsyc8DZcVN1iq94TxnyDb5o4PGD12VxMHUpQRsJv5YRSF8TaskzaBJnFcAw",
  "key27": "2L67mHELWzR67nTrUAHGtGtCnRJeeWPurR7L3TNcf1FbQmoqJxxZLDTD3PWFTbjAnsQiPAt5AYoyMvc8uGW4nEHc",
  "key28": "2MJTez6JcYQBpUD9wiyfgcmijzoP7zNWTP9DQ2ATHPy8zRUbwWk9SGyGiokVaBPrVXMRNyq8xasHzWz2T3UZiioc",
  "key29": "4g37FDPrCYjX8nuYXDAAVBSsfebsrozw4NDM6kCbWgtmyrmsv8WNMcDG7hsbXP9xjFhQUYGREsfhvjESjtAuWA4L",
  "key30": "3jesnxnnrcgwaqUPyjLYv8oFrYrcEiWNy2VYhNtKuRMdSKRBPJP21vhP9y6oLPrUA2PK31h2zGeEVd7UPLjiiTHU",
  "key31": "3ihJ1Nwy9Ewfn2bZL8gZTyPMfckMERdK1fQ3eK2HHm36RwhZgBs9QpZbvJFCRA2kX5WMjVTQhpABAtiwVbnbLf6P",
  "key32": "nQyvYtiAchE2P84dVmFw77sJWk3oFV92vxycbQjAqUsMJZa1mUBJB4tdjrhJNmtD7rfqgg1shX1zJfU5zdeAZqq",
  "key33": "2hdc1VDaUZRUXTA96vjBSwQJix6afKNspDFdsr46KrtuyN4aeZboncqAiVFGtNybAnnrG1HREBkvKEzKwQxo7VRV",
  "key34": "5U3DpSiREnZiTHc8dV5BrmwtsHiMeZPnZXvAE92ytAtZXg5WGn8KUK7ftW7HLyQ6tmr65mf3aPzZ1F9hH4CRVWFv",
  "key35": "SbnVPRfEoV86WtByvY9WdVrVPUwtJnmXXikir2LMrMrqYKS96bWNNwDbc2SWM4RnvUWXM39buNGGB7btWq3UYpV",
  "key36": "4WPVav5pYztEi5AGe72RAK5GHuYGv9ccEWkZ9S8hZo5tvLYTjm8kWyh2UVnfmfqaoBiUrGWijhSXifz7t7P8hUHj",
  "key37": "2PHhLuCkTUe8w4A6APY8pCUg9YopVmkZWzWsx88PYvJTyxAGU6xg4ZNboHzodYgNXYhNgeXcmQ6zCmtSARxpReFv",
  "key38": "qW2RHNCPvhPDTjCtnMjD6i9A9RWM9AFBuXtGjMxb61bv7N4rKMMuQWFQ16dxs2drRhVt81nseGyjeRz5Mgug5XS",
  "key39": "4VTwjQfd7VygcEdtzA4WSEip3h1duQxqEYRD6iGkfC9ujQp2zKc2x8DQzCjT2YL6zuYCDRa61gDjYcdFFH3V1a6D",
  "key40": "5mMzG4YpgEg7iCbvEkYyJ6wYK7EohCQKeHRzEZ2gBkK2fvuyF2A4ktHhfiZTd7WdzN9QzCSzp5HF7xwgqxRhz3nP",
  "key41": "3jnBRogG75LhSpfykgRTkn1bj4LF6yWBBy31t1wAhxozFqqni942cYtUq3zDwCEnx14pZQLnsA9oBCFS8vrMdq9D",
  "key42": "3wZQym4niwh8EUkm5AeiLSv9zHimkJWp9DBfdVaoNv9M9Lq2ZsL3yrBKZSKH29qUgGjRHHcgoZsyDq7Q3Fm5WhV5",
  "key43": "39W45hKYsro9Tf6QSQZmNjAcNq6SVnsMtKSBZRk8GSc3azrNM35YxmvaFK1vN3CUAaVrTrXUJNJTSatSqsFEFa5X",
  "key44": "kifchgQJGvoNuFvVEWEa657ms7FacsBHLkuM7ALqjkjxizSF2RZGs4EdmUwRntKgmNnRWr26zfSRnHjqScyoX7t",
  "key45": "4UCVUeeiZvTwiMtdtu3cpTo4fjfjF8kTiA7hgf2P8P6ky9pcLDsxHHbK5wRZMAEevqSuN3ZWMzxDMphNDt2s2gC8",
  "key46": "4AqMECMjFqqHeW2mSCTR9YMFz2GnsbPhuKWnovkDfE5v3eyiPPMhU7PXiaGoAkVwPE38yBfVN8m7Po81SN88CFvH",
  "key47": "4uhuQnr9JTMuHxCYnN2wB3Mcybc87BHjw3DX7wgLQhuJzCxPGNBdU1DfJBD8egufMgK8vd8ScAtA8K9j5ZncW3qy",
  "key48": "6uSU4CF4GogSJuo8tA5V6M432gso7NRCmu6Zf3VUuDDobk84L8SRrgUZrqtrtMucBY9sbZKddULZZRQMYiAZQqf",
  "key49": "28b1E9mcZJssfe48M3VUrny8eiEV1GGvHT3qsH3ESMYCfEXuQaXx4Kazsk7pC2Wgun8jjPjbdFsk2NvShpLyNUee"
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
