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
    "3Mc2e8jXuZrJ3X9LKwn2EsTVWSAPVHW5ap71tNpdWGcahYEWp6desFiCLErnnLw7PPty3sGJmkDAZo3x2FLZTLRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vm4rsSSjVWarFf3GuZRkxddhRHxy2RRuvEkV9Lj2PtfkvFAYvbqv3g1odxqh2uVcjb7k7BeyntfwMzb2RYCzMLW",
  "key1": "2BAwfK2LmD5Mb56jwhpYCTTyDFxzht7zFf18ti33pWdhCGFBBuXvCmFVEn8mTj525kaMdkhJVpYCQD4tWNAr46ZA",
  "key2": "VX8xq1C9G5dB4UjiJkcC1McBmthjnj1H3zky7gTZoeiU1SXC3AHGXqwqjqLm6rWZwQ7hgb7AGuCdqn4h5AhNKp5",
  "key3": "2QUUNWYz3UDhksoSMnoswS3yKRxKChhyEsxxw5yC9tZXdoRNvDfGBMfvTuqP6z4xvpHKUHWkbA7up6hvea8ZmUmp",
  "key4": "HFBht1VS3vMFqhrEZXz2HaG9XcoA1BzTLP3wynJUdzJ7gaEtKBKaQVuD5r4GFbdxC7DHqxxQBxwioFGVPwbzVJs",
  "key5": "3vL892nCyKbe5f2GNRiEkFgar8vj9jzCjHbtJRRdY5FDBjVhuTj1E9FqriXf9TnAQ7HW2YbKLiaWsoxzppnFUTT2",
  "key6": "3YuowuCfwvnD7Jc1sZeHBEhrwZTZkAiMHq9bjKd2vowKk7doyZ1t6VbGvSxh8Uc4daDwwkGmEX57WkukPFbpm4K6",
  "key7": "3Mo8p6bzkRX1cYxXQZsWzUT6YL3FeHHJhzunyxfybjXmgPULPtHgjUSJTHdX8GqQB5VfzHP8FLpvpuoTB6kSePJ9",
  "key8": "YYfkAZPST57SV93JeBiP2GiVUqJavcLU9BVizJ5hAFB8QNFZytYTtMhW2GfYE6QMhvqdG3rxa4x33yAF2V6EVqe",
  "key9": "4ytpRvvJW2YD1U2Jfn2wNzyFeTqg6kS6k9mAggwknVUEGJaKmiVeQ939EXHvR9Q6z5ohGwkdMDHWChALqsHiZhCA",
  "key10": "dEScA1CEVyE2wka36MTJWHCD5Uu364RqW7ZDYAM8JTSZUHXmxRKyik1i73fuYgepnQbAEJmq8NfDKUSN7oKLgTU",
  "key11": "5qNoSsPhmLzPV6WZdEkZvUvAaTcbM3Snmzfb5T9sptrihiGUWa463FP75CiDBewneVDqw7FcLbtFteN9sEznfpS4",
  "key12": "38FybcQucaSJE8TUCT5FZa9JTGsavEACC3eWWmR4vvrqqTbQSXSmBFfUQg78zvCDUeTQipJtrYFhZSK4tZ7rCWRi",
  "key13": "48TCygSajpsbeEYrwoP6bbV489UiY5ggYENQCrQfgbkYJngvs2j7SRogWKDY7CxYFkfAayvhck8DFN6jK6Js46cN",
  "key14": "9CoLNRcDsa5aaFFXrySJDKYvu2vjutR3WVAWav8s3ipVp4CE9U6bUvXqEQM7MNL5JhdUyHWsdommrq3NbxsPxQC",
  "key15": "3MpWjpmThUXd59hd7wJD5yBan9i3ZkUxqtubfdh5WjqUVYP92X7EeEfboKSmNVXFpbvN7XuYGWDNJoYpKQMEXyhj",
  "key16": "ij47viosDVLaaLUzoB9BV1d1ojWTmzp5pixspoRGAbjvQ9ynCcAUYxX8bZfSKEssHTuT1HVdnpCDHM622eLpwTF",
  "key17": "WETLaseXRw1KfSBdgSuPDTEW6rde4MrjKjqJQQMF9ZhTJY6p5wW7trbfGaqdVEojgeQcqcug554iTmGmpF6PCHn",
  "key18": "3n6NViv9pQzzoq4wMGZ2xGj7AAVdCo7tnE7LcVE6DTwHDiivMnribMUMW1pTVA9jiomGRsBydbr8PBDTVMPFN97R",
  "key19": "5Z7rJfyUeTrdVwkF8WyB5tZ5brjKuwTCPBVWS3yivyE8s39o7TmFp9ZGUEc2RdbGzVBWedSTJ94CM8JMgqfpyC6X",
  "key20": "24Lpja672w6MX2G6B9yKezW8zus2BMT4mgdYQbtBvMJy4rtRjVWszYCS4YRBVMjsCxe2NvLxg59ry7kXUGrLvSR2",
  "key21": "5kQxdDaYqQ88bmekDpmQYZc1VfDB1TF94TnvsBV3c3kTARCPR9kPzBwL1sew2Sxtj9Y4R14MSnVy73QBeheKJJBa",
  "key22": "2ZRPDkPkdyGraBLK1vgKqMNjXpEzPjG5w8SYqqK8Dyyv3Jp3TvJYvKVZu7zU9GniHoRz9LuJSnQCFKTTuXPYuDWv",
  "key23": "2WuG1aB8SnpNAm2snXn4dxQLFGVY4BV3ty34U4tRogpVVcUZXJpQb3MwhgvqK4e8U56AqJF39uQAcczQPz8VFgPY",
  "key24": "5M58qGaAQjbmmgHND9DwvRAXQakb1Dq6QNs2p1M1RYR6LqXoJBNgqfutWmVjfM1N8SuXTFSCMqqzgxqrBkp3YogW",
  "key25": "HJgrUr9KMtxUcotLhxGXdveqUR31CPU2qqX2NY1NoB8Hdth4PrkJ4GjnRT1p2qBXn9TuaeDLpsfR1AmyBq4FpDK",
  "key26": "3MBRvsBRhQL6WFLbY5RKeuCivWxAY28AtHY4z2hRkiX1yNLQrvibKsjbxYCDwxtCrtDvr2fM8jDuKA8YociXSxZZ",
  "key27": "24cpzsMxuo7PAPNvHtQzRiRRhUAEtjudksNx6C4KFuRfopr9XE5zLMM42tTae3XiuM4NvzhD44DYLvVT9eaZYiex",
  "key28": "2LHppkKBsG8xPxAvAV7ZM82q1A66638qCzvCyGcWxUTBWvmwdfYUGpxNXncnX43zH7NkiKgqnZNg3vcDgBFtUUdT",
  "key29": "zdEXb6XUUR5hdafCxCH5mbEnLBBeD5zf6YWc1zZHyN89FAvs7zuKELKNKmxqbF6kDEenpb15TaAUa58LrkJtV7G",
  "key30": "3n5aqLcnABkAo579dCBBojNmZXQPK7FWh1m1Q4qWp4VceUVwqajMNF3ioSiLqWrakitRxz924HPhxhmGmreFW72x",
  "key31": "2DGEbKX6GAboYtpGBRfBumNddpma4LoMPxw3WCrCsfFoBSuCCkdDqrx1yzmmpWcdhJXzYfvnT6VTyDJuea9u6wov",
  "key32": "5DHbrVj4Hfa2GJwbtjpMXDpuRpvbWsbVC2fzuUmBv1MQdqaxjwz3KJFNjkQZegVBdKdFeLW6xSJbgmRiroKd7nt8",
  "key33": "3ces8KBdWk3d7aGi3t6Rkvba57bqnUtCbmVKrL39mfFLoxJ15wUGpzo2NgmKqvSJLpdYUMmrzoJgg2JdQ3TbdUmL",
  "key34": "4fyUekfZWjYiSzxfZVCWeUJGDv2mGLcEKoyCsDjNUpUuPep4rjGwNZMBvimZST3SirtSxcRTpmB7u17EmQ58QMgS",
  "key35": "3fPBzESx6D6fYgeW5rPPVjfC3qMqLBR1DY7RxgaRyAE9eqDZKNjfrAFEAs7Y5GcjXYLGre3gPC9Gtx7oX3xFxCaM",
  "key36": "2E45JejtrVag2Vgbck78U75HtsV8KmwANy6yeNPbkzy2MSpE9ctNWpU15EnLM9YGvYtRFEGvCCg9SXUfbvYdnrVX",
  "key37": "4Q85cyvw5YryC3CWKvqg3d5CuVbj2GEydzTTCpZ2fGQ5vvkL33RcvEtkTXg7x52HoHmdpBeqVhbp4WB6qrUneotN",
  "key38": "5SRU2qDRVqH9p7amE4GCwsdrDtYwtNMeKoz7G2J4UztUdRwfCtNwkAFtUdnehiuiyWScJFSqQDkGQMnh1mpWtEHg",
  "key39": "28xcZDG1ci2xk4xXCdy5mWivdRHsCCy9txqBYyezy3Cn5K5bFwD9278Q7dpLp2s3BciJ8JeifNWZzbaTZR3kfQCu",
  "key40": "GN3K8B4AhSyPgD1BQruthvRPbn6aURcGfZxj6HjTRkFYJKmwGvprfN8EGoxGPiKQ9iEVVRc3NGEQZs67Hq2qicu",
  "key41": "4EGCYYjyPLmAqYcxZv18z91XshZ23HdPdRBbSYT4NLAhgCER1XhTH82SusnyEajeyC4kAnsxP3NgVACpqnGdT4z"
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
