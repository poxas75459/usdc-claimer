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
    "7BHJNrjheXKJLqQdT4mjm7aZVT8tKcxfZrY4fVoeoEnZmabUE9BFbLtYfMiErd4Sz1vqtDgP7waafWQKzB3TwfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QntmprKiHCX5Y61iYh8Www8y9mcfvCuNcDjzWcSW17e1ibjzXTSDtWPKQcYzW1d5BBYSBEsLUJQr7UubVSfDRrj",
  "key1": "2c2Nr5ntS9gJ95SE2fYdvupVgyQgTj78sSmu9Wfwa3x25rjSXbjcRN72aGLJVCmRm19zkfvT8uLVnDUyMFebzJjY",
  "key2": "3qHvzohTMC7V9kD4ZLMd6Psz5BfcVhfaKpSfN9N771bwvDUSBD9jxTr7Gc3JycdfqucN5daruMHgH4BBff391z2S",
  "key3": "3dt6kZky4dQX7AR34nbyq331ZXHSUCpt25RaaYuCA3X4i9nzSA9StotoGu8JkwbYoq3JBvV5Kam6xMY6NRNBrrdz",
  "key4": "eQ2VCVW3zfJUgiqSMtq7cxBmHjcFbCWnMxTPzBtniwRVq5Jqq2xxcp7G8sjp37WVHzHaKuSRxxh9CUEwfptj5an",
  "key5": "2bRNEWium1H5REJnf9ykmF3QtxQg3ekN1TvXT3H58VWwjuBrPEeb6VGVZthuMrafLSCtX9JWc7qGBxYWZmDDBAdA",
  "key6": "4ckh1e5MRn9sw8t3nSsD2rGRzxRM6j2KRqUgF8N7bGyD6kH4ryCmm61W1ogJVmDpFhogYAG65jAj2V5xszB6nH2x",
  "key7": "4EjkYDjY7miFQiwwBh67T7XUD4Ah58hPQS3ia66VRVe3BPrCcLHqiu5cbDtAeDa1jyH95qNfFn19PbsNBW8sLHMN",
  "key8": "2njagDc75VAoJPnMbZGfhFaJ9U7JRgidXuMer4irVPQizVsBmNDPz8epqCjeW2LD8xQZWgythaF7A381cQU9J4QY",
  "key9": "3Mbchubox92wcxRrszVtD7DfkTLhogfs7xjrEoN81LzhBhJNAvcVCWuHn1ncbTcXVCLvhemo3eiTxUDDBg5ppasr",
  "key10": "2rQF2amDA9jMY7cSBFj51pSe6ywQXasUM1VKKVCggzf5snLnNuuyb5k8dgBX6bQykGBN4vNnwYQSyx3nH6L7KnXt",
  "key11": "444nSQznztjQGpYgNwXwkRM4UcQgdEU2NPPEESHgV7s314YphfeCtBZbJrUmukoKyqwHfWywJ1o8ie8CCzQ91xey",
  "key12": "2GiJFt2UkJzH2XPGqnmj9zoXtRn3VdQAggQy3jay7BRtM3d84jabhR7JvopSEFY8n7JUJy5puDdfNiLhfaBjmKmX",
  "key13": "5znKh1HCJgo9Gabpjg8nZj3DWcYgD6GhUpXp5oDZkeMSGSvfxaLpJKqWLxyyrz87KhUg8uneiqQVgZk5mBG1Ay6n",
  "key14": "3fUi2wZxUtNAMMSP6Jub1PgPsKzo337ipQrTpyzoLu5V7vPxUemryzY7xTQ9ipdmXLDa4g6jhwcK62DWM5QhDgQq",
  "key15": "5ES9KB6qi9ogv6jnbBUWoEADiuxyqAfzTFkT2TLwAWGRgjAEci7tU2aF9TuCiPz87dxQGxnNdUkxGZ4G6JckPV3K",
  "key16": "4fhAeZqndboUWsAgLmNjkpqcYNYZYd5YuFd6XLWRdEuvg12UxBVH1c1ocvVHYNGBdPb59rvQndnSJy8QZvThmHEr",
  "key17": "5MboKPUcxyRknwC3wwdymd34WAqtyhRAXA6LBgMCfcCXC3xSxwPj7jAeLHyNEdrr1DT35xsnyVpTXsenPHCKsCiC",
  "key18": "5Q8o3xjDSHyXwRZJsrivt1BthVCFFCE8J1kkF4vNoBSuWQgbPZaqEfHqBxEWnhm3yY434CTktzoBaR8wvGPTCK6P",
  "key19": "55yczhxUyf6YEZHQFVS3KJSqxwDtZciBkNNPeiWuaDGLUUqMCVNxTuTtSccVKDm4fSyNGHgeg2yXFVnFGUKedm1x",
  "key20": "3ChFcVYdqBt9NiCo8z2ZsvanApkVA39Lw3C3nJF5cvVGG2CBNfGDBV6pzDCyue7KBHyHbyEpvrvdjAA1zSAWWq1P",
  "key21": "3vBNb7KyYqPgKi3mWaLnntojp1hhQBKKdPf4UJq6P5nbS7bPFb9TT8SkwmtA9Zchp6wMNy9ik8R7YumVgy8yLE8M",
  "key22": "BxSqjyxermpnYKmsGFaBFwLETbmL96xYMEzVDiDrCu3cPpXZ6y5CiVKJY8TM1C9n3EFtFx3KqVxWk4wZG84Z7sD",
  "key23": "QpWyWernmNDe2mA8hKvHKhACoqcobqWAKsD2k4kZcNj2Rqz3dYFm9tZhypz9dZzEEgAA36VY2yHH3ePSWc3Q8Lj",
  "key24": "5jkYuFyBmLzrUadqRgn9NA4xFxKQEep7Ve68tVSqpyYbAivF7TSorQGvwoFqUdSKVSEjmG1Rm5Z2FnLFTFkpSjiU",
  "key25": "Pav5adUtMgzJ23ByqwUTC3A1QbGbVHeeBcSRLM6MDonpcX4EFh5wxKHcWbJxAcutQGp3UkkknWAF1PjPt7JRgvt",
  "key26": "5WgbQ776jh8eUA86yCgDY6DVGiL3CftgwPLo1CoUgNvTh2QbS2WufZX7D22Qkba4T2myopzpchRacDK7NvuNXoCD",
  "key27": "2vFYw3eX3FSSq92G4W9RQQ3PFt6x7pVPutLGFMmTT67AuRPXTFTHbmZDttECR6rqS9eyZ9RihvrrZB75Gk5XVCQg",
  "key28": "5nU6AoE3FLWd4rQjCDfwKDMxdcECAbrr7YEoruez6e61pThYubNLMH97sUHsqcuKihLhDNvtNgNDpWD1pWCTJ8Md",
  "key29": "3WTQQ9dGTgKFvkPLcXm1t4YQ3EDrCtc5oBo9kVCmZ4EoYZHee4C97r6yc6xEWQ4vW6gBa2AStP5XhkHDCrbuWHfT",
  "key30": "22oP8rWky99kL4LfxFGQDPdZ1ruqx21k6TeA11dfhX1vEXRg3EJ7pqNuz6XsZMZ1JUGsdHjZvm7SzH5rVbnCLrRA",
  "key31": "4k9jB23JnV5mSuwSrf2VivBgh5GUk1mNcCXkyYB2z8ssGrr764PwC2nWgL6XBcA1EJXMUajbnborTZcDPd5aoptb",
  "key32": "2Q7RygEYMDBz5GCBbxm9UBB1gyj1uA3bpCURLPqsPgmxcvE99kAtQat9jipWzxNA9uxVf53peNQ1X3wTy4s8yEco",
  "key33": "5cN2kNRZ96i27PGhGMLqJn9ceunsNTyGyQyVSweMxqvpp5wJK7GnfKxGK1eksAtr8dfHzvpzciTc2dJvzo1LnTFF",
  "key34": "2N5Bfbx6YRFfDsJWKdfibdP8oPqPLrFZDpfqqRZTGAXW9MwonUHPpp94GpTqc8SJ13UtBN4MSjMVmwrGTxr4EAf4",
  "key35": "368jV56GqM5aenW2vZo5YZFkTLJFtYX4JkaD8B8EUbyaPYAYpRsEBp33U2xM2rzqptEyH3a49AHjxFk9MHVeEMsW",
  "key36": "rUZDVkR1cBcdq1rzhSnUZpQ5MFxz1CgGh74sqYx1W4wrjvS24zYCV4f1suNiMgBhcUrKZpW6Xi52LsAUafm8nvM",
  "key37": "5bVb1HaXtaYh7bbBup4s6HVzWNsCM8f8bazGygdjrU1FBKDiYMSMbg7KQMYMcEaLb4uqTuuD3jGhMmEVXp197JnG",
  "key38": "4K9jQLKvuydtfSZj1LA8MC7p7YGwvzczTxffe3P1TGv8qQ1B78RVZFM2rPrPrA55NoHoZALyhggDET5oT3DkY6dk",
  "key39": "2GGYxLd8424zJq5kGkMu27McRR7CnWwAYu1WWV4wyVENJ46CxrvKzTsYJzyrE68AAuWLbWG91drJUp2DCuYyxvQV",
  "key40": "22KZPUziVo41henJ2z1aykvsLoTwNDhJvo7LrKdDV3HrsPRUm7vesiVUG3sVC5coTPxLAnWqSz4aw7MunYJ4QBdx",
  "key41": "5zw7Pzee4nLyKQr7xzv8btsexuVwf8pJmW89qQDqv3eKSjnukdMHLKuptKQN3Nyx1vosmt21GpEQhXB5AJmyCvoR",
  "key42": "2ZSCcX5WZkKmmF5srYbZKiMBJq9qZggEBzndcEVJWNnceoZJdHPXRxv7oNKjcDw5XqbNEsi87qBz1nPMq8Hxu3kR",
  "key43": "VXe2kMqorekq8hAjTH1rMCrNpBtg853QkAUafRmUeuP9GdziDWRaehUorb8Y7a7VVkDS4pg6Rak1mK1FLF9PQEZ"
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
