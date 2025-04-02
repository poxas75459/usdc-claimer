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
    "EHSYDpjaKTm8kB1DzmJSdX6kDrU4MtUwVwfue4kZafsFfc2hEZujFSBmvkzAQWJb9ACwBfU2QRGNnmqVzXoaooj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyvxdWYjStjc6CuoVWEdgALJyMkUHHh2WV2c3pyAJD2Kd3k8UbTtskt1Y5QAreZy4NzckdNLsujmpbDxMumGpWt",
  "key1": "5f748ebqNsaVuqz7b1LNRomHBfEppjJArEhYUgVViasKKURvPdyWaqyrNSWZksTx423uLfWj7LQviTchcRfsqoiT",
  "key2": "5ektcWioH6dcWDWtQGrQ4NrSC8qfcyFbj47g8aDTrV4sG9phsHwDozoD4zzQjVSLEdcPFdLJyVR4nuTw3catvagF",
  "key3": "4qxiGRozbgzfpyQjvywRFcXCYsnYgmzmfBKVXMsHVM9F4B8PvvhvJt5MByR2CQjgrFyxwmJ6tjLydSd1ongnmbYM",
  "key4": "5yELy57oWtLPXuazGowDF64XFBStQwZCvhEno8EGfnADmKJNnk3DyAg5SAx35bUMvvTZpR5jtjyhHJ65JibLs6MN",
  "key5": "GP2NCAVEQRy9Ff4S9bpcJVAULZimyEEC1xJi99munUCnouDXnKNduCP2GyNER5Jpv2CwUcCwbAmjgjCLFA7ekrS",
  "key6": "5o7wtThrLffb5uHwp7smguKvKMF8AnemXPP3GsAQ3RaQkGRBaUaY9uBnXahkxpmMzjgZSBkWU9wzmpeeeSnCEcZz",
  "key7": "3Sj7fsQS27pYKmYtAJu9RnAG6cAbzjzyMftAohcFGHFBrsDE47zaYNPd9mRUasb6sZK5ADDN9X2gce9WMnM5XUcH",
  "key8": "gJgG9BtQugNAag3LVQSbiJAmo9KZusmS1oghoPRpAeGUNsT3Am2deLZHNMLs5bViEkYv891qBb2REj6kPyaguV2",
  "key9": "4bLCnwXBVXKamqNfKgcuDMiNgmqvUqHvpLPMe7Jy1tPtFB5WbZKBtsPvHx2NBD4vqifXEbbjiWwpowHCesvodcDp",
  "key10": "445dw9aUs5KSwXMAvavucCmbwPJi6S1HiQT3Led8Reu9VZm9dJQoAaQGMbnQhh7c1J12Vgz1LLQteJwQDQK8eDNm",
  "key11": "3iWq3HsgAEhg3XpDGfh4BhMCxdpGEBEAqRPbMwdNJnTBRcWjhDaq6N4UVQYwRJDPbQt5s6BV3qbCPyTXvpMsaryH",
  "key12": "33A2zsxHQNBawkeRSqZGx2GEYhaSCpEG3tY3pSLTRbmpfs6BmZqpi8iwTvJW4FfqSGZw5sw7xheMaZPvA73dyGt8",
  "key13": "35udjit19gWWGTXND7YwHmx6yGXBsc2o8qKtJtQ7y2r8azhsKEunCqNNc5qmuTK24WEJWjhbMet45HbxWnXVTHZd",
  "key14": "UsUj9REfbEtUhmdtpzhkGwRqWHrHuMVXmhjmBkJpi3tiNkdbh6wBjE1ptFqUzYa85htJ5Y7s1RBmDXMhrekT2vb",
  "key15": "5M1TUKVwFmaPSMiRXap5o68phvQNvUYrSVX2dyAwPaz885rPQgt3y3VMumPrEQRh8bTxwN2QTJuMeoeBSbevHTdy",
  "key16": "ZZG6JcTdc29A5BXh1qaQ2DiSvnyTxX8ghHB2raUZMSyxT3dSTwprumU7yupeN5wfCny6Q17oeYDwZcY8n8DhZLM",
  "key17": "2how1UZ5Wng4cxQwSPPMKJ9y1XDC5Fv3C9Pw81pKy6292YGjQMJ1d7viGY7NFZNkv9bAttxMKndY4MiYW9LYr6fc",
  "key18": "41DkZEh4JSryZU2E6JrzauZUvyhAiyevLzy6Eg7dcEdZatSSi9zdXGc5wCBHjzCwXETiejLXxLoeCZyWwRRZucJB",
  "key19": "4kuQWmvenw3p2eEe8B9uGkPdz1257PFHZdCJoqhMpgiApwb5dKtnz3D4zRbk7GLsNoAiZj5xrpHy5QQATzctoWr5",
  "key20": "5FEyB8pePKbgV77NdXf5RieWykwdsB7LoaEMiCcb8Z5Kh7oZtHXj3wGEoNwjHKwBWhXw6FDq9wRPhxGxjkaN59rz",
  "key21": "3qegzWVv2sphafJGoyT1W3y84PhTFiqchaGs1MKFXzrbAfZJ8TR6ixtESPxsXHXu4ZVpER6GnQsYfzVfEXvWzA73",
  "key22": "3vycXtLM897hAtk9Ho3gvKS36fomTzWxcosvkEmhTx9TJbDRyu2d9CvV22ZWX2QfeKFGLDLgfaspWFfZ7GZiXkgZ",
  "key23": "JDvYRccEgLoSPPNck4SoCRomhzd34mkvSTdRcUVYTch34da64Ap46LssgKHXaAMZPraSimsNFCp8NxDt7PKByvC",
  "key24": "AVLSGtdCbJPu3imdLELaGfP7QuHe5y6EDpHxFufeBKTw3GY9SfS9S7JjKjx4wcxLgPA2ZwouVDKGKUEdiFfnVbb",
  "key25": "5Cmdk3qq1gJ8U7Lx1DGB7WPH35ndWtUN7iK55pPTeG6a3aFSzT3H6x4ReGHriw4j4iCJFeDZDK1SEbNAeohwuCVn",
  "key26": "5LvrV2wMCLeZTJiP8PtEwKob1rMtKK3M52kS7ujWasuB1RSftfJpdArRZFKgHyRHhy3mTSfbxsm3RRHG7KsrSikq",
  "key27": "4gFrKxagCf2DGsXxgdoWtnWYdkTxhkz4rWdgSMxEq6TvABLxQr2yUZauhzgVwPW2fqnGxjWzJUo1SiwSUkyckMko",
  "key28": "MZVPArihTp5ukiLbbaXDNi48t49jLCuyqQSxJRCgRuKeDHB8b4aXXfeJL68ggENtPp2u8sAauxzC4iHNwm9N9V7",
  "key29": "28dnTrS6UkkTU8Qj8VXCeQoNtHthRVCFwf3mEyEBkZg1Raecg1EmJ2pCAJAWY4h3QcU1AJ2Ym21MLV6VPpFJ6vTA",
  "key30": "3EmfbSBKywZuR7z3yhj1qJ7PouhFTkdykBMHv4KGFA2U6xvF18HV2qjHXtUp8sh1u91pKrkf3rYtJPpXrEgcNDGT",
  "key31": "5ZA5bkvRhMjXn7134CFPCQSm2cQHKLjWJFti9DsYjJpZWg6hWMkoRwDaag24QVENzhpsnJ8kWsBHSvLUFUEMbmy",
  "key32": "2LwbFHkuGpbEx2Z8AzVcocmRwZhtmAQ9kQ5sXKhRdwf9wYUM7kB1pBdkxepdsFZSXewynv9SfCD1FxafNVgpDbnc",
  "key33": "3L2McF3xcyQNPCVzN63LP9yu67t14kYQWS3vNAuKT6sw5eHvQKf7sZMSGtDuZqFuL3QM5wfC4e1h6k18vuq7nV4i",
  "key34": "4pmpSa7JCgmWokjcwppGXgv8jbx2utN5WbGJQCyX2ggg5VQ7CTZFkM3fgCTbxPVWN7J2kcsN4TAgr49c1teHZC8p",
  "key35": "5UX89miZAgi4GHLwzQtERFhN7GacYzxVaNUru7CJUM2NMHVohabzYPzeooWbyGT7R4k6YJKSxhQ4iaEzLnjZKgyz",
  "key36": "3CtyJWXmaM2hJG9vjf4vcVZSoizg4Bv2AT54C8KU4y9FjKyvWRMM6jk6HVtFX5SrLAzeEMpbtnxNrJ6gG3XLospd",
  "key37": "3cPrBkc7B8dsbj1TWBoTsEELTJvFP2sofJit7Hqy88SxZ84H4YGci5CjxXBeS3CGBaHKQXroUTD1GRoCkGUR439u",
  "key38": "5SCsV3vtrDr7xzixoUMKKUSTVNZoKo9LxHX7F4oWK1DcB8P8NyqeAFAG1sVZ1kvdTkbq82CGHfpQQnQZu76cZi9d",
  "key39": "2dqjPpjFvFqLngx8dRGQATDym9zaB6C3QLPQXR6c18iWG2KAbFG1KKKU8JvgcARseocNXuh3N4xECgFGeo73kLMX",
  "key40": "54inY4X1hrrshy4ZVMP3MGeKLRbp1wGo7bssWkiriCq7F6TZX2FNU5w1BgcsRXsfCimeNhMtgQo16A7yH6mh4qY2",
  "key41": "5tPoe9V5pAzdQoKpboRLQoaTHv4b5Ni66ZBUH4767oHgeyvqoXc9Sx5WRK6HuGZpu996wqG5kqReMDmdxDD4yA8V",
  "key42": "2TXTyvvxYqybJQ7JvWQqqDXmDGiKqUEzVrtuYfCcttCpcUN65TwcUcFU3vD7U818uMma6BCvRsciykYQmNCfQSS5",
  "key43": "27Dhsd1uZYC3ufoCaMBeVR8FFuGugNS6qynNGqGiE7wW4ZWVkNRCcspJUcaECuB1SBXTipyhowFgn7ftBPPVYypq",
  "key44": "4cQKGkXULFNCvuaL1qZ3x7LMG17mYcvf7w8NDRDyBQqJzCaTSWJXCbZ3EKW978BpGFp3scVZLZiAcEPx5LtbyQZB",
  "key45": "dw2MLTFs19CfAvCRnK4SkG7dM5HBC5MZQE274x2VDn8n6NLPXmeVMZnQ1RKgCFaM7fk2viNb4FsTGGUb1a6dEhL",
  "key46": "5FugXXL7AbMHAkRs8wWDHw8u2bzGxUBvWzc2SLNSJcQUUVhR4t2qZdvthNG3dS87a84ASSxtTWwnSmd5VTm6NLig",
  "key47": "3tmAB1JDWfxa8ag1QQsGVih7qb26q54tjcgs852TjqE1Hai5dV58aRmrzZRWjYvjEsC3sJ5wNEFTJJ8UgSK6xyFC",
  "key48": "5Le2jQiiybQx3NqvntPctwbJBzynWhQaMjCiGSMpfSuomPq4PdY4JyE9f7ducDNYTS3vLv5iEcXuDhWPWRCGr9oX"
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
