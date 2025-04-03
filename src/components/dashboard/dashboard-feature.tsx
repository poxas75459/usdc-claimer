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
    "Rgrk23tJstncFAREkSv4TXKxotRDih9nVtg2zeaCpuSLmxptpx5wtc4xTKF6QK4kN9qjrmeLq71ry8dGgu7gHgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GeeSMkFcEn13hxtXgFH5BQSgKXcjRSUDysENWAiRPZsbejbPmNtBaDRfd1o4XFhqs2siW1UDy28XebyNxjV6h7",
  "key1": "41dazXz1vgSLgSrzcNhKqN3BzbFprMWBNA7Q93Xrhobu9PDY46dR9KgcdzJVfqwPR6PxzvZt3owSR9csJTekuCTz",
  "key2": "3RJ7hdKqb1YhkeNdNVuKCGdqPiTPDXUQtg3UTDKXyNMETB6rEQXt4QGoyTrq9aSTfpMRYDLXwcWe2KgRB2QC8xWT",
  "key3": "6Arieq7ffEE1W9NVmqLraSEwSADMXMdKZ9tjNvDHvRdQagNJLHRWxjmMrTt7G33rr8mcTDiDvD9vNvMdtZZhfE5",
  "key4": "351S5E2Ctdu2TmVdyoFgw86gbxLJ2RoRSS97VoLNZnGgCTzvP4hfa3kghnAwaR2kcfZHutSgL7DX4qcnJbHjzb7f",
  "key5": "2WGfxAvoZpeDUTJh6WLGod8V3HiYDscv6VmfY3ryTBDkXBoSe992qn4aTP4teL2FTdtt3sWSDdJMSKQJDoV83YgW",
  "key6": "4Ey6ofph16YCtWuyfK1cBb47Lq1FoArF3fuBUrHoriQy7pEhAvcqwTLazQgKBtvHpkBNxz6qWyaGSGDJsRsVLEsQ",
  "key7": "3UjoKDsxZWn9fZiWffsAbKhZdWACumALDCDkEcL1f5FMxvFfNR9hhDgpdyGNQS7ykxYdRPkXwgRYzNjPBnTBnYmv",
  "key8": "2rptfPiyWGCPwF3R9ems9UR4LhQAxztL7fVhHuzufLLczuTW5Dw6KEoGcAkG4PiNtAmgt55FMMoCKHHNeypKkm78",
  "key9": "QWqjbDwvWm4GeyiWHq46BwktGMXzFjN9twYeF93ducktJt3er2EyyKbVEBuqDdNqeBQrnwzCeM58kA3m5JYqrkh",
  "key10": "3yvTWfxN1dVEppZkbxVmSqrA2RFaGd3huH1Lc9EmLCaHnT3hfnwJEnPzHUWmEBr7BEgMDBz7RQF9G4WPS8eW8J5d",
  "key11": "23s3ixCgdoYmZKWSCA92YvgqhwCFbWMvQyaCBo78V1HGGctchEUU3kwYTx98CRLL67BWMhhNsQBBAMZqA8CtrgKw",
  "key12": "2RjWX74aXKkyU1mku7sMwrXW98A6JBXo8WA43BsB9s8H1d6QDzPpjfBNxXijJmZLyjhxqp1xqUGqvuAwN4C835Ba",
  "key13": "66DCJAJPqUWj4rPVmn9fwqNCHCBeiiJpi2H1Fc6GE89NSdNjcLQRyCgNnac3iMkAhVDPiwvDvvJe5btM2ySdZUP4",
  "key14": "66PZv7Wwv72qbrh8RkGFmqMe76JZ5WfJBSH3SMCESX6vTZGZ5v9DanoBPjTEdzCr3mVna25siTvHMk4w43USYnrh",
  "key15": "3WoyQoJzRkfEhWxKyPAoFNLUHzzqN6uTYpAYkDMorTpU9JRfAtreGVPaVzXrenBVcb8L58ex62nXkc97fso21Hve",
  "key16": "5KEbSbGbBkKdAZJqUDrJ1aG752LF5gzBncgL6uikzVV2t9xLoimdYevxBXHsuuPZHz9yxnHPuqPMHF6Zr2LY8zKR",
  "key17": "4uzjrU3s7tXgNCQyuj55cm4e4Ju835UaWcKRHdavGP1preRKCX52eUCLSbXjGG8dEEu7WhQDwPPt7NwbDbfiv3ev",
  "key18": "27r8p6pQJtrtQ99USr1yjvT5MxtifsY63MDB7YXNaXffDnEtk7qEGa9923osAGiJRn4cZhzGrN5bh3QT3ZZ6ERgW",
  "key19": "2gzpRduEUtFhy2uJyBzxHSHZY9g8BjEGdKU6vkuqNZuRrjX726U2uVUJ9JFdobS3zHZhfBcmFnyUztJyboWbfqVe",
  "key20": "3CnwfT7tcjkwAJvmPwSGKEiVV2ArWRdZWtH4Hx35CV1fE5ZscQ5ugXJsRN6RitGuxFnrQ4jmryDnhkYQfmUrdCYG",
  "key21": "4Wo9GYBTSsjnvLLs1xYE1uapgbCL21MYEnNePQvYBHEjKwCD5M1WMsXtcEdoGEvxuZWvrpS2Xkbye7Cduayqjuyu",
  "key22": "3pCB2jM7ehwgu6UBeN15nkMSLx9Xfc5T7tunCJ4nsHpPneL7tAUtuGRg99AqVbA6zWw4yetuxY6zKRSVRgHbWXYY",
  "key23": "4M9bvuNyp7DxwV6V4A3Ue6oeibcS25PUJFKWS9uyeNE8NiFhkj4jWCTLyguDR5Lo8doYJPqrhxKRhfTfHiu7JAL6",
  "key24": "5LqCUA5LfcUh2sx9up2Lkvg1vW7d8XHqwo8GVx4SAesaGLCKi9cc98aTZ6wYHF5yLnFNwNRNXXDFSQwmYpbSRq5Z",
  "key25": "Ssoe7JP8cbpRk8CMLdvm8Xop6REqhnYcHKGG8hfn7GxjiAwmhfiSaUJt8dLZmFkUYqJrVDt3BXySQ9iDhafah1w",
  "key26": "2d6ePhrUmhEHRMNDQbjQ44Jt7j27mHPKJP92GSd8uwWhBHD4tmDYY6aWQRkmH5SNWh4qcExfNha6fGkBpK3akUwa",
  "key27": "3RDnpMCwyQ5soQ5o9LtmBV1iwhFw1qguuZzLdwLhdfH811A9xS3TSbHLk22Auva8syUBvRsSmVZk13QuxC5tKcDA",
  "key28": "2g1D6hGJRFtys7BSwSWNJfzETGqUsfSKSw8tYx6B6QrWucn9y6bePuT2ma9o6Xxesr3UgQ2gWC9mM1FRnnXjh9p3",
  "key29": "BYyXksKR9SUoVERTa4V5V3E86h4DegDXMdb3Jek68vFcg7enbd99mcucMnyeeRQRsXjtftKNVhWJmKCAuPYGASq",
  "key30": "2ZXzW9NpEHf4ht5eroqte37gcvrbonnswTriRCTgiuhREuLBkQNWobJZ3Bec6NCdW8yz85JjfTF6PFfXowM6d6TZ",
  "key31": "hFR7uaagWSuhC6aSuZ6PTgT8KtP9R7vB6rHQBrKiT4cQNAQJhTwZZVzi7gQCADxTD7RbQwBFBfzyyJLW1Rsvgpd",
  "key32": "bJjYVriitW1AdyjejGDnLFQ5oirLWiUjqp9yqQuvdMpmTFyRPDLSJgZpqkMHV16aQKd9phbEMfd3vDT5aBNhcEf",
  "key33": "v5hMch6od16v2G8CrDGtcjPRFQzFY1eLfZZoJqUwFvA2GgZ48K73Y22puzPAYPyedfVc9ZrddbTp1npbfugvx4p",
  "key34": "2T5kPvaiMzLeFj1bSDMv2a1CYyYfKuW3QBcvEN8RNTiR8B9cLW99P4H9WAinbrnBcjtPvYikCT984ddXcoPwqyA5",
  "key35": "gNB2S5DNxjpqPbcgRFD555d6LAc7PErGf6pwTWwVf6TLJ4j1RGKMScaed4ooPjb2awqNyBVTyJ58wGKUaH9FZqV",
  "key36": "46cV1bRZAKUMz7WaLHQ91T8z3P7r98xntpszcxQ75yGgXvViALnFXBaQf5z9Y77AfWbtjiU427hSAYSCjKtM2CTF",
  "key37": "3MSKWUvGK4MtgBgVnXg8BiD1fTH58bh6mkHu6N2LVzjrzuiiCLj6udh8NAGG56TJxr13yi59GDSTG3AjvtavA18r",
  "key38": "58uYFc1tFbPzAZU6aeMQ5srGWFJ66q6Kamm5fTFwtToVdp4PD9dQdLEAfCp7zsrCngRk9YeuVxQqdzzAnwYdJBPQ",
  "key39": "5qkNzZ7TdyZNK31BShwnn727QG6JupxxMPGZW6yZXS65qcN2jsGJ3P2H2x1DidM8KD3k5HhrwKXUGDd19x9XAnDo",
  "key40": "4BqNU2VVvvVqWNsDW3a4R5MBXJcLtnpVGnXDSq6y4aKVHH3RKG8LsiAVErh7A75qqnmTgm1P76UfQWgSyNaTgpCN",
  "key41": "2Nn5MnVwjKG5ki8x4axLKLZSZDJbxaQTnjKuqPoF527mKQDVb6SeuqupHbCMrSWVytTv8uhrgU69w2qgavEi9PwU",
  "key42": "5UMfVhMG7mWRWwtfWLBakDuCZYvf9UKUcxd8tD6iqqXYPwZJcfWn4id2cyPxDnSoamZxh9dHAeNGCfsnhfyfQDvu",
  "key43": "31kAY8yMp6CSM2CbFDjHaDp4NyLY5QiKZt1nedXi6LEEwJxz7PMzb7WYqkta5Pt7RVsiCm8T2QHhjPeJfikXdVPd"
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
