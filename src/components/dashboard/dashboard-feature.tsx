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
    "5QCpkBMff8bpgiGB17NEgSfcCawpX5yy7N6kBE2JAj9zje4WKt8w9BcJKDRVjJvCoVaXc7S3yRR6nJuCURFNoU2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVzCSoLbQWbRNAU41qSUG8sgZK8PRqrCSE2diPWicoCJ4WCYNmFtUprrCvh4NNNWPBBrhkPc1ZpCnvYFFMn2phV",
  "key1": "36REmU7ceqNb8M4Mez5t31zMFgxFPs9PZvGqhRSMhJpSJqnV5CqT4HJ6YZphtgpePsrZ5TMuG3cqm5hzrfCpVrzh",
  "key2": "3TXccbKabJB9DpfMf9VrxJvhaATr9uRgHDtTYR4vkam8SFrctzXqpKqTW5r7VgerABqFMTzT1qAGQFZhRvC44XXb",
  "key3": "3Z3B1kAT4zw2K4zLWP8o8EKuR88m3733BK1yLGLKzSfNZ5hQ9cKAS9DGDn3cn7wehq6LCiM3QdyS2q3kGAXGg2oq",
  "key4": "4wirRAz1UMmbysNVnzmqW4aWdbyRqpMZ1o4m1fkkEmDfVxVCPc7PMHt48gstPSecWnMw6qGYiVSiJx6ZeTXEc3wa",
  "key5": "XWMJQGiJsTQqfqHUqfptEngtxksNzmhNqm5FuJNbbqu9hqEdPwCD8p8Tocrx7cahM9H6VWFW9GxgwfNXwnupRdk",
  "key6": "otRRNQjyystMn6BoYBa3xvXqfxTAmCmKTLF1Cr2NXPyWd8HVxDN4guA9ekjfKEo3sba7HVHuAR6VFTen9bsA6SW",
  "key7": "W9x4teXFKGBbkdy3NUECZewjoTGyeTVvotVXHKrEbdRMJeqm89vfPUhod9jPYYrDksm2pjZtaZFAyFgrfBDDYna",
  "key8": "3zacQn6ncv7yoioQKEAthNLhSqmFdJCKYLEvnQyYeUinGSiiWeoSeUN5DoMgGY3o8Nrsp9UEFzjSEvPP4fDJaxth",
  "key9": "3AFS2WQtJqJx1jeaNUUBgFVgrn8SknTWYDr87PzTQiuq6pU9etVm1WDx6tzJXAreg6EP7WyCcv3q9tm32LVwMkKo",
  "key10": "4Z28e7F7k91cAmx5X5P18tjWWVGHT4cHMS9gwRBHuMrm6hrhMBePykRy4z6beN4GGUMTohh3GmyyA52odDScxtUK",
  "key11": "3dyPpeGS9kHu2LVe4Jrtn3ZdS6fwcnqrbPrxkHodEEyNDCzjc1x9s82ha1HNpNxXLCxsVALcfE58HJZ8cAhSKRVu",
  "key12": "4958QkgNrdkm1F7KvJTHbwXX2MHKfATMPCragv7SWbJ2fNoL4WWiSvy2DSGqFC2KU6cyWLRhEnwU7t7M9hVNUQiz",
  "key13": "5eWHijCtBzD6s1VLGEETQBmKiQQhcMzhFb1T7XcHoefPk1K3SbssmesRebymmwJM2kicLMu197xUgtHvrPpuWmts",
  "key14": "58K7EYXHon7zpxLCabR2vbwuDS7gMYCdskzGteeoXbyNogYb97hVPVneXA5q5ZKgjj51LPF5NQVFXRpoxUypfX2Y",
  "key15": "4zoGdhFmqerQV8rQmMWfDbpSAHuAyxtPrs3Q456q9pKAjJrAKpEDMNgEMR9oQ8TcZFbdkwjWs4RM7tY4ypfmLzp9",
  "key16": "4LLd29TJQ4E5tDXz4Gmuxcz7gxJwvLv7UbTYxujVHsD6zU81ikY16vUMRGVBVK4dZY113Edw41BRGVLPGsvoMi5q",
  "key17": "2owktLttfUAqpnLPHR7beRHgqLM6W8MrD47wYC9MwbRLZZdLzia17kgmNJw62DXYPSM8c9aHoAqZQuvKa4jv63qv",
  "key18": "tLehA4SeiVbghABE2QWygp1ByUbau8SvT2wD53VXhshxwtSvoe5ARcfTQq9uSdYmrEhEVbELXdQ6CF83y2Gh3CX",
  "key19": "3zJGFQ5KQGhPvqwXNkiVU5QXDEvxSvmWYqeSvEPKPrSjwKjsqE1eGZ4MBnmRRVnBy9m4q3e5EBPJRBHYh6zEy35o",
  "key20": "5efMWzbq7zQn7Cv2TzXwGEvyv8uRm8fEifyN2TMgpdv62aQg1MbnyQ3W9dPS5VwyGk4wp3VBiAkPWFyYCvZWZJPo",
  "key21": "3LKP6reaP4nCw1EWZJNuctMr2scwGdHsSUUyaBkwzsnXqZYxWo6piwhWoAdSQJiJHPQNqVh5jxUMsA6H8xPBEYAG",
  "key22": "62xS4TcT2HqweZL7Y5HnW8BWVvbwzGmhrLJNHsjPH9A5LEiSP7cqFmxEWpsmsHNaohif1KARUvLNtKnqEh78gawv",
  "key23": "Yyxh2uwGNn1GyhhraSTiztd5tZauZ9Uu7Dt4h3kPEmwTj91JfaBRD794ow54ntrEMz3NZ1a3T4fcF2nWiojkRhb",
  "key24": "2Y7tMrpGXpdNgkVvzXeEZcGMDEqt5wmvqW4ekyFRPMgmbAYJ39XY4imPheTA5HuTCbypBKEYZ5mavWzZfa34V5Mq",
  "key25": "2xTQH4pccLhWZy5VKXcLNTDHvbJ8pWxe5rjVbiRnVCk9G2JPZS8euD1Wnewpzqk3pYbBHBiY8MZC8jZKy49pYZdr",
  "key26": "5G4RKpybttR5M3HoCog1ZYmcGLGh55Rn4ecVgD4Y1Ktike288zFiEzgwBuLD24FCwn45ATzmeT28P2MKFP2AQyHz",
  "key27": "2hJ81Vh942hgauZw3ZeX2QuL4JQq526m8uVoyxXj8DsqPNREmk4WVtfgv8kShsYWoiQJH44g4FbsuVsLHVrvSGvC",
  "key28": "3Z5PrY9dKEUNtvq6U4k8RdGtq6KFPL5mmgrMAHdzqSAq6nqrEfD8UhKXyhaJUpM4vdn6WNYcDNfqWUCywy4yUL5F",
  "key29": "fAL1A9e3RKBK2vN1XqnoKGDbMbbn1gK3TjWBnpQTiczjGv2zvYAsykgkquV4Tp6StsCpiynYFSYdtvLdvFdAjAK",
  "key30": "4YwnFXUnQvdcFDtkxAEEKyuHT2DAVwwbML4DUQure2j2c1HWiLBQvj2NhHy9biqYJUQryhz3jmm4AjW23y7iffN",
  "key31": "38Dhkq1MLyUPoZz7Vj4Eh7gGCPbsAE1WhbYn4CsG8Pg8VZF6e3hmYEEWgjjmmcfqou9TJaGyMQ48mCTDcpW8yqGU",
  "key32": "4uigiHnPPXrYvVYTTtbuwSSk37xemP1tB19KN4eiSDMEgSufncwWWK8fVexpxRAaahCC6JYkHLXwJM2Zj5TPEhD6",
  "key33": "2wQHgtL2tQ2pPnzPFxxZvX4iqsQnRtLbgUYUe6mVsdDTgA6bANXi2oJYYhNZ54Jv88udVWA6VMNfFbGZbhXNSRbY",
  "key34": "4p7mzgv3uysKAYKVqBygamVVwZDqveiJK32yQNkCQnK9wCZF32niPcvH2vqMH77St1EnAYeFNqzXuAPxnLMd4zUL",
  "key35": "2KTBGFSQPdKmJ9ZVWYpfmAeVKfEoRaF9yaq63pmffpEDYvjCuDY2hfVhEW4ukctWt1r5x9hoENzVL9zcKnMCFd84",
  "key36": "5mfoYNjaUbGQyDroKzZ7QgedtaYtdY5Fits9KmTm3S9u8YtxBwn5mnre4YTiD66xYYCtucgYyFXX7WMW4W8KWQqv",
  "key37": "4i6NzoNDPjsFGnyNYaA8En23w39HNt5fddbWhp3zHHy8uv8Z7bhz63y73ceJWwGoWQYbVeYHMA7Powq2ZnhUvuu5",
  "key38": "4c2cETNfhcZbuhFPKaauC1A6rLHphugGoXPA2DgaMVpjUDzxQpFyXdpPUpYUxAdFZXepRYzRpkfz1RushtMYm1KZ",
  "key39": "5kn1kQVn37unpnmu4gMTEuGmuYuUVfsXcRRD3YAk7ZEqv7oBr7bFGywDgPQ5JaAj9RX3Vwh6F8XwZtr1iYehTjHZ",
  "key40": "4WcQoDsmunaETDZjq9Lw7vfDQqSgKEcQHSF9yjHt9q9DGcVaB4yGoxpPULpNeK4Da2eJg3C8DHqvZ2qFKzd554y5",
  "key41": "2gsvTr6GVCSoxJiQYpkuxGduaUr3p8e1Eub58VTQodUerDii4uUR5y3ob2AwjgvmsGVYhE8sHtdnBbPDn5kmnRVJ"
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
