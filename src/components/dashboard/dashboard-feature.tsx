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
    "2u5RHCij5LfNe8WCCQ9mDC4pPUxEwbegbGyhDMwZyvCpMZ8TxU5Gqk235Awfs43Y9e32Q2qbievrVJiLiRNLn7F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwdsFCLbtqPavUk5T6s53bDdKeGfVPy6HpUEkqnR1KSdtgv5axhXhy1AKzAiwuZZhVxCpbqBGZkcnJeWePHSyMv",
  "key1": "34JTDdmUHr2DpipSSsq7sYjypmj6dWJZoMytYnpT8vSEy7riAj2UyNpXzuyZ6HNHze5kFG5YygEdK5qfs1qA2ibK",
  "key2": "2mj4ffKLAq5pwsFSGFbD4aYc5MSvZbHqbKWwPQj3cQM7kxFLNEWz7Y8vQPrd6mtHs8ahKhqgpdDtBzK4RG5S7KeA",
  "key3": "CyKqzo2FEn5dB3eq5hTBpqSBtWQdnN4nsvW8ua3zWSehvQZTKN1zBiZgp6fJ856R4FhGUKhSH5TeHwriEesjVLU",
  "key4": "4nMp2CYhQ4A8FLqU8Q7ww5hc1EwRFmUWh5F6XknxRYfr3fixtd28SnR2sWgdvtg1FUwzhyMM8dk8KbhJbVnKZABY",
  "key5": "hU1SgBEUvTRNajjVvzo9eHjciDtkZB8bExvrv8Ehj8puqs6voc9ozT6PAxvEFKV3DKi89TdkYB3rTD3eaNouiKF",
  "key6": "5saBSEy3Ns482KsT6emrP5fWg8afFSgS5y9jKACcc67XzYoY3tiiv4N38hPu876NhVsbZsHxJ4i6fpqTTtDKvFUL",
  "key7": "43CNxjaFVdXsyDrxJvqG3haFtt966iBowanui97o8WBnaLpZS8jrt2QVnpJwtKck7P8w2iLWZXmMJVbg5ZYRjRZR",
  "key8": "4yJdfSUVY6Y3WsdvCbaQarGQfeNx7YxKvWPe3E4R3MCjXNTuERjhq3nbFvse6Bd7TcCKxxLoj8dBKBYXSvKe9uAd",
  "key9": "43dQhR95vTvz3ZSUExZfRvZmidoQwHXTf89nYH3URF83YWpfF7d6NgF5dfFr9PHpA54uozrmCEpDgBLyzttpDaVT",
  "key10": "49PaQAZB71KaBMJV4Hc4AiuEmJUkNaYLqwj177L6XF6iYzzyG5B4YnPrfuyzcpCeR3M4U1sVrdUPCwC6hRH618Gv",
  "key11": "3Su5C1FLyEuv8HURu46DXmbrvMF8fwTWjif3f1zgLtUqJtHDytowCq172aikETYQHX3iMBJGmanNi35dyTgiNipM",
  "key12": "iqaRjS9KLwFk7iu4qRgaFUFB27See7VEo3S3mxrUmmtU8v5KcD9xc65L8x8t2RZ89JEiG91TGtFAB7Heoim4rcz",
  "key13": "PX2LtshQD3nutyHyd6HQxu8NvB1or6du9NmxrFqpUVDBZNuwYMDd8fQmTG5YEU5GFqbKXUPRDvgpgmQRvHtRJqd",
  "key14": "66NnCaPrwMXx3AmayqC8AVcHRiNGEnkADxxhh6c1bp3APThj1gPUwT4JQW8GSLREbjr72RX3mxXJPma1H1W7NqLS",
  "key15": "3tehWRHkHsXXBvWC38Z2THCGugVHFJVtf67cAaBU5TALBniUqmVumB2oYN3NvgcJCitbR7MkpP4Vks4vNTJWvrTR",
  "key16": "4juh2vwRyMkXSXHdAzna4MXbqxWxD7YLuWYTRDPHULe8pefoUAQmBX8C5c2cAtZ3wPJCa3tSvL92dvdmR3Y43SX",
  "key17": "5ciXjbJqMXqgDSyGSc5fmB4wFZTkxEfcVfz6hmgC9ZQ6eKc3wodLUCjieDusz2bk6mWWhyhfCVjARYVTJnAUaERx",
  "key18": "5mPFoYijiLkYBeKBGdA4p9EMtPqfDA49Ff4BeJJa1x1txQQZuKs7aXrcMbqw1gaeiDbXUBUiESYLdHcZxmrUpuhz",
  "key19": "47R4GWbtX735aq5a5iSfJJt7cUUwQCsB4GLJs4asynqGntwmA23eYPsFpxasgUTe2ktkS9XjLHBspCkw3M2gZ1NN",
  "key20": "2BQLV7VSiUhGSFpBcgKTsfx91v4s9xHhTPLpnNvyvP2JSDD7SKphpGMSojrt6263eix6iQCcE1oAgie53nPJh1mW",
  "key21": "63awwFTgeVzqiqkQGW9e8pxieWwSg5FsMtrod93B9FuGgqbGNWUZDVnBQLeFSwqwsxdM672TgSxPEM9sqpuaYMPz",
  "key22": "5K7owNGdgaeyjmTMpFS6UR5fqfYf9Vzi1AGotWoRG4MM2HSDLRFswwkUdcji59KMZehb4EmgT4UUtTuFD9bHg9WQ",
  "key23": "2piamwaMmSadTBWt4h9PsCK6xJtQVaeRYnhZ3iDrAKeaRqGfSaoNad5caBFH5EHbF6oRe7w5tpCy2o3BxALyXvLq",
  "key24": "5KrTHrErZrC1gHahgAmk658AvpPjnN3hRT4ekzNqAvGEgwo4JNZU5EnQB8HhL2KFHcGxR6iWeGsoxtMoG3R6v3gK",
  "key25": "2CZv3sJTGZ9fQGoELshzBMgsm6DozdxBF1GtZWYqWZFPN6nXjkXLc5EzjxdF1yFvqd3CkRAz2vkfJmhjEUu5qT7p",
  "key26": "4Yj2CEjU1hppbrmXGBJsaz8pUmqgCbHwrUR6zVCcNBm2jR7kgK2qaEsDmxvUzm3XuHJ31gx959UCHgEKSHR4BnKc",
  "key27": "2uwTZ2omsGhuuay38KSPND2uokrXH79CqESa8dEAHNxQP12JLp9bjXHXSFj5SmEd4tuo1PgjrRwCUdmEUsJZV2Rj",
  "key28": "3PTvkQ8MxQ4hbssXWN6yRYZPjGRLkPrwTFUMRW5K8TE6vzvwJn1K73VjweBZkcd7kqjzvasTqLg8xph6Ju2JzKJQ",
  "key29": "gfeihFp1UFEVqnV9Kz9QPRzT12yctNRWCwruDddNwSjEnUseRPU9p5KwyTwo7r9EqRLeGFNb1osDG8ZZDJe3FRf",
  "key30": "5NR5VU8iq4uRpqeHdMVPeuaRyx1RnejzkJRxA91B4seaTiUkNgX6iycfXYrNd3xszbsGg8TjideSqFiA74Wd9Bvw",
  "key31": "dW7n9dvejtUqwy6EAgPz1VzQwnDZdiGt8qm2GMGqYgfSeVK5Whize48644xoJNu5MChnR4jZWsnVckNz3wXE5is",
  "key32": "ycyUfj6frKzCGT3YfUhEnNm4xfHBu56JuS47JuKJ7FaKLbnpz5Dni7jahiLqeYt8ndHEMw8nbktSDKGSqU8xV6S",
  "key33": "3SDC4QUkanW86EqeULYrsQecyh4mfV22T1NdyHbLVFrQN25hKDVn7Hhqyef1oEPasV4JzpcHCHfzXCWF7nGeAQWB",
  "key34": "5fLxodYpbw5wPFN1gHu8YJTTW99vcgNryr1bmvjavMRmucvoBh2w7Hdp2TTKP1cbBxAHEpJTMqa66poE6Jz3DuBx",
  "key35": "3AyiKTakDcAi2NhXK481VYxQJnRDfSV1SVXFThLLQGr9rQXFP7wiUmgAGACgKNH6Rn31JRR4cLffx6Je59Cxefkn"
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
