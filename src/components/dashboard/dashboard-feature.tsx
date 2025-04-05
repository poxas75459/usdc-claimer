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
    "2RdRJz3nJWfRJ1ydBFcBF2sfuA3KrJXywQESqVMfPdy4rAU19NmWDi3zLyQwPTc5GP8eLkYwS2bjAYyRsTAzpbYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4cYDNz4eu6JBAHwtwAbDtHzzcFafxogmgSrY8gDUQ6By4btF79hxFxjQVKZoLxstaergqvfLf81MrzAawbWHBV",
  "key1": "5gJair7yiDLVT8KBBi2NkGBMkbTeoLmvePU9qsG6y4PYFGszBLP4qHAoVbRYaERi28tyQWVufdvmjpEyd1Y1sJtX",
  "key2": "jfXfwReWAdRbQxFoqZW9Rewv6ydVg2nsczUyTSA7KNHzYWXc9Vq9jsKbKFHLG3bmeBhSrWRHjrw9kp3grkdfUZ8",
  "key3": "27m6gv45ZoRpTUkw6ykHXfDFWJkWHbay9aG1s8WaT6XKfEP7ZNcr9GYEji9KHNk1ZnXFXGVao7RUYpd8pSbrB3Jo",
  "key4": "2dWkungWmY5h7ZpZUEDcFMahnocgwCisgnQqejMkN67fmbJyFreCdcoM6opNXViNhoAuiLp2Zz5u7vhgtrXRVjZa",
  "key5": "VGb35VPfkcXqdgQY3oJ64rVuULLR9daoCAv3WYSPeWr6JQFCRKpUo55Qn3K3GBsgAdk3VVBJAHTBNgViXJvCCAh",
  "key6": "3veRRNefTptJhRkkegyx9iYn9rtvvLtjaUY5H3cdja4HQidsfaXhTUw4VViKRKEE9xnGACRCNYHxi6Yno5DSmFcm",
  "key7": "SfBaTMozFtjiHcEh6rzWpHcfoDMykLzVPGjPu9a8MAGCnAzTGr7vN1i3eXHNbZAroDJWMHxLgPufSLaGoywZqb7",
  "key8": "yLsSmbZ14UYQr7D9wkgZz9wcCqKLw2LTkdDsHTNYqrqDgEk8NBr92d6Wxw7RYjDkysT7uct7NECPLnUCfPDKd8i",
  "key9": "4F5wgykX3DNnX6vKvGdR9vuRBCpwadgDkXfmc8asJiy3LFGEN1wsTDyp5kdHyCK3sLgUS2WEPd5sxLWR9LmQ65zZ",
  "key10": "pLWm61V8jPZohqiCcPmzGED7DwkxYiXoQPgPmk4xDYLKfwE2eV9QwRoDqTFsJRTn5pGkhTVBtHtxTPH9uGVgpBG",
  "key11": "5VamCEHXUMiyiqh1Lx2K5wQ3ythKVD2PHwUx1eYVXLzyaQim8brKyQPP6XGUB9ma7inonFJ7pHUv9Ac53cVbNRYX",
  "key12": "3xv7u3nier9tqMJak1EuiG5gEsji3H63fkKKPQbWnWQ6J2h7u2zLLcaLiirZZffyYyyrXJg5gF4HPzu4CnUtnsAw",
  "key13": "3gyeQwHqs7GtG6bfMJT1QS4TUb2qBk33RqFLGEVrh8UkaCrqNbfoP2HGTu8N7VW3VWDYwios4cxnxFcvSk6Pgk84",
  "key14": "4Uf9GVRtmiCtciJHZdhpDbV7gdLT8Ei9q479gWeY2oUAkKWAjK2Ro39BaY4qSU3sYBrHXBz8MnDgZQwe5oVT9hTk",
  "key15": "4VujdvP7xvJSph8Cc745vQWFr2dtwy76jCUFhNGyMHjZrW72rMFKht85u3sjL3usmoYWQcHKgzharFyEM2khJd9U",
  "key16": "28qbhiGvSoWTQwvvUTMu3rqLn6HK41fdS17FHirBqALD4U8gVaDZTgcQXLaW24j2nXvnciTEfr6arT4G2JHP4rLW",
  "key17": "5H3pVKdDv7veJJ3RupcqKfVYEk2MDdbZtBUiuGCqm6YWoPywPeHzuSEwyfhpPayCyR1tUXpHo8DxeYYCWshpYGja",
  "key18": "3CC1Cc3PeQiPiB2tRP4GsMLpSuCVKzdCrJwTmadYwYc9BcBNHhTSg5hPBKCpPc1kxhNGhjZXYKzZycaV8MZYWck9",
  "key19": "7MeorUbixuF9HahQzs2TmsWgjtCYD2PVa8o53rwQA8ABX3CvaxmdrMG26m69duY7UwPskMoPJVrUPPQTn6KDNuU",
  "key20": "5gjHT6nAHBA7QVrURt2V8S83nUejBfPgH5irmbZRK9PLSpwwhEzXmjg1RtKX5YJTTNkQK2dmacVkHHnSbiheUGTV",
  "key21": "2TSbc9nH4xCk1X3vAVnumgEwCP7KZoqmMiiZQ5ofNWYR76E1JQ68DvRHykBF5yJky3rq5R757Xk4CuTB31iD9pvz",
  "key22": "5Y4uACEotHhpdkS7zPJuzisxuNsHSfXXgpfpycVAv3Q2vNk2JkoN3GmLTPULzawPmDkTBsgXA7k7DJ3UkF99kCoB",
  "key23": "5tt8PSRdyg7hyEU97Wt7TeTzJK1DwqCApbFXuaD8boZ71RDWHH1Yp5Ypa1FTgKUDbYQ14HKReJSHBW9dcYf4GwsA",
  "key24": "Sm96xu5SRBvcXfJqyTAZvnqQhX46biuxvJVCSwJdfogbyNcGyeUyTPQJkQi2Lzm9f3udHMY6jE37jba6qciZ8BC",
  "key25": "3z1ciW8xKYYDTNJKrGD3wc4xK1sPjRP1R9EoNHi4yvVDTkKTKgY4YbmKWMExPpLRkCDwTSUAQPuuRSi6bQRNptNc",
  "key26": "28gcPdzXaSnYr4RE6hN7F4miTpGkRTxPo9k11jMR4Ae4kUAyswoy785do2p5MdwFChRi1Q3UkVj51FP7aqaA5aoX",
  "key27": "5WCFEDY4v76G5gPsmiCUBbT7zBUiKiiKCsRCKxbHeVS7emMUXpEJethc1FyGTSDRVzDqjC2thjNXvTrXbT5EKSLR",
  "key28": "48qcaGkmuPweHjJSvMgQLYnKLBpby5ohh6dnWHMS65gp84ZRWJWsDo3b282BtR67vvacXfgzyQvTRUTYdDhrjJEk",
  "key29": "ZUTxnHHNWPNY29hEbW3vzxH7krq2cEweUSDH8bTVeuY7HjtLX74CCBuUXZ2sw9whwUD6Rf6HTsA6KxA28xWhGPo",
  "key30": "GPfrgXTaxYawCcyawkEvbuebuiKmdTgYiZhTDMmKDHGMdt66KimyYjpKsuyCzPULnxXH3SHjSRCTcKaNwpkBr6Q",
  "key31": "32j3j82YqRSuArT5nWws1krUTuCT36LTGPVEQibNzqteRPh7zWZ9rP9XAKoYao6GKPcWfKLTEYV5vmRodAALzLAV",
  "key32": "4DjXdyNKdWvscfZ1naKUgbqGLVk8PERBFqxKuNGYckSBWEANNRxYVcVNmPzVJqfjs8WSgeeRRaVASsEEZjeYTyCu",
  "key33": "24prPyPxyCnvhqQGR919akqSW6e97erEQCt6DvjHLnXVTg73BVUieBFwhbNdJNUn1EhQH68UAtgZbKLLLGURAWHY",
  "key34": "RZPFYUTEvWLF3aXAZd7fxo6f47MaRjveiBn6MbfynfDgdNsb9zzdXntRD3KPmNd3CEyNXHothdzR2NJVZ2GWD4p",
  "key35": "2CWVKvBS4XrDnW7foJN4kbRhHnnf5YUeokz8DWhoW2C9EKXJB4ePWYYkototk3J8GpBTt1TogNCKnTzpxUUVZ7ph",
  "key36": "5yp2gs1m6mdj6HgTxFFv43SDwYtsaGiVkKcmPWmKanFEd11BPYNB2sraPSjHYUWML23EN4Ut6Af4SSRp96qnKS3A",
  "key37": "4BkLo96vMCSzFbFszyc3J4xvrHYrV2rWZ2VedEM5jWDZSVg3nV35UaP1juZSc1XnnomUYg5LtRqzwvapzshgcRY4",
  "key38": "5DQW9v1Y4C3AciiRNdBEGU5kYzmxsAum2CYen34L1vxk2v7PLcyy3fjeF9JnU3pMeZUzaNhxcZxPpqxiUvD1pGBA",
  "key39": "5vicioC23o8Sy9wY7GcbNaStoRvtheizdVPZSpW5atPDkyG9hXnwUQkPf33tJoupsU59rrnBioptAQF2L4pzN5gh",
  "key40": "5SYF4qfHntnL2nrQMLAxR3D23XibNrxMBbtnnyS6TpvTEB2bKzxwVUJJcPU8GhWkgPkPyTWZocB9Jqo3RsLnNST6",
  "key41": "3qM3NaaZLwKNJ65bLieS5zCBxJYYq9EyiQrkoM3rbM4L7iBJF6aMx6Le7uVTevCqMNMbzAdRZpZ5EY4wHyMgLVZC",
  "key42": "2xzeiAXQ4Rm7q1Umr96YGnMBuroRZwiM28L6uT4AYxSWToERgx8PB82YEaGci2YAQ3kMKgFgJiAgdMeUcwRw2Fow",
  "key43": "5oroRGqhdCP5UJfaeGtdWvKWdVYfQPJzWsPxDGvwkfVALVow27uLKHy23kMBguXiuNaHrZJAXfcN1ZmqAfJEcwG6",
  "key44": "2XVAo8V5WkQFU39uy6R2wzuLfCqwibxtfArGNh9qZc85n4e4RvUUTFXs2oJ2f6HUEWGQ7Mem7nS87fALujdHXu3E",
  "key45": "67BdiEhG8kc5syQQuWFb2UULA2cWjyZnGdH5pfhe36wTv1rmv3GT48yDTunm7oF95E6MPFpfNmdtPCbKwxVhK4GH",
  "key46": "5ZnWvX6r6i4QwjTBCrGbs5xdQk36Pwzm9qjLqUNyndzMMcx6Wysf4FPsfc6eYDQCsvUHZASUhRtK1b7aNh46ZZQR"
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
