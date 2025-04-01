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
    "1C8TzbhRjm3rHjWWPZT5ABhTnEdzQ8qkHc2dwmRxVLfB697aUHL6syCb8K6avGNrPPskwpNoEYWB9Vr4EGo4JxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdicnjKLnJYiSAYcaPZJwGS5rkuSwqWCDSqJpLPB1fchdWmAoyc5DKLJijMjNyVFtiHMaP74N1pvKpJAKmW1CbX",
  "key1": "5NgDpnQsmpd1ATsEWHTL1RnJqP3JTiKXVmPFq7fPYPQ52rZ96oWThunHWXadmmjfp6doz9hfECae4XEtgTauydwD",
  "key2": "2yt4PX1LPrKYvk8X5uv5kU31DvjuFtED2jf3AP4n2Ph2gtaNasxywvvaipUc1v7c6fwRbaxY5RagR2HzaJqaESwc",
  "key3": "4YSNoFxHUeB95bGKcd9onqoGRPeNV7QcQ5JG25P8xVmhs5sS8rAjumN4jWLRQLC6b8vnjSfksujL3pcSw2BUrDWC",
  "key4": "4DEGSCbDHEtcKmLVJmz4CrAF6RwCVnj7bWApK99MAP6PS2ZK4Kkh69fsPufriPAKHBEbX5gNkTnE5KRzbYFjdcEU",
  "key5": "3E1negZTSUhim2W2ovNx5KDWtt8DcqD8Lz5HmRLrSpjdh9SLGK5Z5A5JZYg8MG4GZ1o33TMwDDYyjMuK1Ptd1xxF",
  "key6": "3K6XQaK7ywCUH44GMtS5iGfFBQYwopHLFXNroKaSJUwD1DgMXZtdPsBjVQrXPUNe7K6avnA177y8nmRVaebxmjCQ",
  "key7": "e4B23TntCu26iaWyp5c8tBJ2QqfKHWeJpJUgkRrZoL3EoPKG291P6D3AvJ6ZwEiE533cwqLJvrTLnXVyeZBZPTk",
  "key8": "4FBe7Do4tUKgbe7RKN5DgGUP5CWxsVQjXhAGpbU3zeMAHtBXVEaQPQw4wJyfrLo1DXcuKXVtz9Y7rwwcMBUgUaAa",
  "key9": "3NLsdxEfwfLsq5ibMvdDrZshPjALNbxZdvBaxyZxSM29whPT5MDVAJyFbRQWp2eRuhSs3HWqM6cUgTzd7yZaWwib",
  "key10": "3Kegy2KrCGunCUsTFEag5b6QDgprxFhQzGSCoMUBX8r1yWEsJwbVr71xYDbNzi7q1xoBVtYZtrEBVzepDL8NeY16",
  "key11": "2CXLvgRvxKP6245jt1BcYTAWZeRb4FhWHWRq6NF6nnFccE7qtPZVrvn8mbo5wiLTNkpWyLzKvqBGwmqwqp5KJ9c",
  "key12": "56RfANrSRCkUNVRao65CARVukauGXk5EQsxQdzATDkkuSb5qA5ANbsEZp9dqRnSLS2WXXUxZ3Tf1ZM52WfYKTHEW",
  "key13": "5aJgKqsXmRBg87sK7HTAVHCUmqVjtmkY4GhcJyTFX2ysQhJ1QoqXfRUNcHwtS1jCEwtdjWUXswGqJg9C6medD1rA",
  "key14": "35Eoy8zMmRqN2mQdmS9pAZuw9DF3W6C1CBejTq1gVNuUHSrqSccMswtpk2M2TAGBxQXpTjaNQWUZ3YVUsiPNhd3k",
  "key15": "4cCQoJTE4VQJtXU1HdTYypvBRMDSNoxu3Zz6GTysE81at2aY74yUYMvUpYUpBVGqXKWAiAVbSmXC5Kxa7w1tq8E3",
  "key16": "3fM2j8RnVH9ELjkD6Pxiwy5MmQj56Q62qGwfW37ySUTaDcbQuDQMpXCHjhUcrz8cSf1d818PaKhsXJJao6VKE8AR",
  "key17": "wQHpgb1gPwQQCvBxGmu9NTiKpAK7cS83qrjVThX9tdfBN9gnNKBXkfzr4rBhn634N7RqMZo9GDWnLPR6ppmPobE",
  "key18": "3RdCeYwXLmT958h1SXUWzU73aXPAsjwE9zLCHqjFJD8QcGUB99BhH4DoZ2eSrvS6HJqpDPSYmovk8jArN3Xzyo1y",
  "key19": "2NRcs2QsNFa3GkBXRc578bpxVbGyes4oajhUpTTznpLnsCZFQukSfdN2NEZFo7GCoYV9Z8KrLdbiKNwj1CMaQwnN",
  "key20": "5Po9XYz3kJ45SKjcwpzAX7hDUQLfN5CQmo27tBa3ccEBf5sgE2EM6pKnctgbz7FfzjgX9Fp8n8vg7QH4uFqZLX5t",
  "key21": "G6TVxrASdjJ2GyomumzKZgEqxVPqJZ2HzNesTMGMduXWsVpASTZRojLTX3JFCghQ6fdTX4UPWtcE8Ade2WAav9k",
  "key22": "hfqkMH2buT7jMT61ZMbPFiLiEuXLQHuqKVMp7jds26kZzMdVraUfBcQ2dfBN2F9XCvcBoJctAe46ePqPGi64cMx",
  "key23": "4JyrNDeQnjNhpWm8HWFuBwtFpV8JM3dCUdn6WvkYFHcfekRRjmCjP4xYA2FNEAdWGjbvxiRmSGgFiSdmvZXnLDtk",
  "key24": "txnVfrckJALpv8REY8cFLovf452ZtZAq7nhkfxRy5Bp8DMmMeCWcAWKoVZwHwThSZVnBL7AxjLQLtJrvFbbDfHj",
  "key25": "5kPy7ocXjmQfMQ2KxBVSzuQgqJoCaegm6p4teCt2ShmhcvJKvXMQUXY9QgDdsbZDR86B328SSWTvEDs3bE8iWswo",
  "key26": "2U9k7MyPjXED1ou6gUohaboh9Kfc3jkUSd1fMjKPuGJ8YaAFi5WwryggQkHupXjQQnexSh7hxX6Csrf66747kv2i",
  "key27": "2odpJYKrcHcUmjBRLRGdKSpMiwpwL6LLgBUMnfhMphXpFxrpQpa96jA4tYo2QKNWwdZArMv4Na16DugpWuRbAkog",
  "key28": "2gxw5dMHJ9jd38cLfCB5HnJgMXGyDM73BtCdEEYHeYSGSjdnEBLnLPQeUwiNDVXHbneqwVGFszcx6V5Atg5Um2cN",
  "key29": "4ee8rehwNEWRad6vQTTK7P4euAqo7ksJBc5w54MM5UnLLmVLZmUfGYXhxsoHYVegnCqKacSqj44JhceeuZrxgaQg",
  "key30": "572r99XDFUmePymtg3uKEVXJn9F4LBeCfBHFhHX7rNs6JUgWvuz4jRksd2K7FwWBL4cCxqc1aCZyaGMHXBEDLVnL",
  "key31": "5Zrp7PSBeWNEePQiRoWQ7SKSZEZwNtyUmfKMqRnMMa9CWAnVBmoeTHEV9ukDMrNEh2LHVwd1ULoq6E1P6g2SGvn2",
  "key32": "33xJCkb74jYAHqT1PiQYtvToZkUmtCwhtGVexTR3anLqisfxxut99SYdwfpuxYbX53zdy4wh6V2XYrEotzhhhNDY",
  "key33": "5GirrWCrhvX74vFdgRQ1dnUnjo2Rbzk8TWLSTtXXPoVAgRih7nNWJF1dNK5yGntJWjdsAiYEXd2xtnEGdSa9Ts1a",
  "key34": "228kwfWGV5gQ3dR2v9k8Zoa2Nq3W2j8dT79omsCvmZXYcgNXV2SJYxSp4WvWBZG4BPsh3f5AVxHTz6EXpTjpqgy7",
  "key35": "5YkXMvBxFMvZ86P42495WbJQuwp22xCuEcrJxvJsiNoupRtysEr25ERbSSuXrgLU8x5nW1mVskguXTjovobZhMLD",
  "key36": "58KVTJ8oABfcYGtPWTxQQHVysBkZ7Vcw5Beo66vAnpxfumcgEUEr1Hu4aHDRawCt2t7sfXCL4zgBBh6tLoJ8rBd7",
  "key37": "3xGPk8Bv2pfbwUgyocVp6Usj6bp63Vu1bNuDkexXCZ1NQTqDPAhYGVCdvPhuzDqbuz1Jw2pZYPvTnDZZpyAdCezs",
  "key38": "4d81NiuPpnTowEVq5hwNa5JGuEiSEjk6Sb7CMhw59A7ZY8NBKayccYKqKTF3hakbCJCE7hZkGttgPTJSgYb2Gdj4",
  "key39": "61LiJZPqwLNDZa4sttw4DiB5is6rv7GonvdM7GMSaW5KRB9oehb55TMJxjGU6XeKKvEoFysdnFGycetGsrxeiNrP",
  "key40": "UpjCwZiWXWqtYfTF8RgYCaH7z4DPu8SdL2Ey662rm9gnfpSPVHT6vcJXmfNbNBNCtq3z5o7pCYDM9dze8pyw33k",
  "key41": "4KZdqFHUiU4AfxJEYWwP9Ltue49sQSzcoisX5DxHVqiz7kd2QGjopWZcWLs5aMh6vNGwjgkX814PVMuCrJ5u46DE"
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
