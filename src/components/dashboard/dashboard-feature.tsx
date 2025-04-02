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
    "mY5As5gBZDYrhBab6iZenuJbDxh8F4hfJqTvGcikW2uobbqrBAbaQYXqQ7aBvtseXWcVEYeShNycXsuggfaSnMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btUg1PKp7MoBzKFF5nGuStuSajp2mmdSNHv5om82nNZKeWTPyYoTsDbAs5dipLR6AUya7dSUtbsqv5ZW7vyPWYT",
  "key1": "5xXu5RVfU2sAsPHsY6ZCWuymmByDReaZsXQeA4BvtSwmAm5gCsyY6TTb8MYGLVrLDMnsvoZopyQK159qr6yFpKdC",
  "key2": "Akqhww2wz693tGH7sTsa5eT3xVjm2k23HYoMzDx6eXciSBDVxCtCou8p8KLysby67vbhrb7F4QmvsWssdgRUayK",
  "key3": "BuEkedgdEnUsCeF9MZtczr5VGjfL3Tao1HnpRd8Zy4DsdMq9tARWycr7eoZsWQpmdJHfJPxEPjcE4NX5HrQUzif",
  "key4": "3J2bvjgX9mGhFevvxmeQUR6wTs93oDKe9VkgjyHUPLi1rZ5i4E5DNjMcLTjCpQgK9BeL2f2moKTPzzZNHYU4faUS",
  "key5": "2XKVkr7hxYjwmSCALCDswYYqSEx6p56ZTjKSaghFntPksXdwHRWiQFafFCpV2hFXTdQ65h3G3GCJgn1nXjggff3R",
  "key6": "2if3GtV7rXTZzzkcSuoQzaKZvVu1FR1Qq8GJdBf3aGNZpiwpXb8wwJ9tWgqdyx4NRKPQ8FGvTR9e52fP6Ej1ZfzM",
  "key7": "iXNL8rHaWnjjEYNMHTEj5NWurGCiWzi2iHKdEYxregRhnjvjq7C4VUTVx9g5bxa6cfxRQiUGeNXoXf4KFuXnkE9",
  "key8": "2qFFgf6GDp37QZH2kMs7aR6fTSXHieGehw75wFbHVYbpywRwBzdSjhQbBXxXwwCTTt9tt4AoULhpGWHFsqSrgDsS",
  "key9": "2prQtATK2SuqVYxgYhTPvV85yhBTkiybEa5WUCS6Yi3RC5eRhn7Japk8yc47FQxcWz7cHCHrEehpJ3NRgegzJcxq",
  "key10": "EfX2aUiHyoKY25Bfrw3dPRqaXaEGhVTeFzmYi8cWbgERDSDbq7nMvTxQfwRDt1JRDVoGjUskXSF5SzbUjgsXVmQ",
  "key11": "QL3RJPwemGFYFiwBpvTufvfhv3xEDWDvyL2X88q3R6a5bjBxCv5zo2Yc1j3sJo5b6Qx2BcvGD48tkiS3KkGadpV",
  "key12": "5mTebRtoSXJw8scnX7gNiwZjVoN2n3u6x7ktWUjp5X7JJ7y2xC77RovpUgdZnd9ok9gyVfeZFv99ZkWQKAg2o1dD",
  "key13": "V6cYEaG2YkyyyMtEfEzFtoe3nQGH44NgVmSYjURRkKsN3iyQ1Fgb9uzeeMS2k18NWcxMud3v836jhDZJm1Lojvr",
  "key14": "3rQ8QrRPXV5S2QexabnKWH49bun78Sj9y3aC6vAYu47YJCk8P6TPeRZ5f4JTEi1fJ4Fy9tP3SEsDiv6pKpdEDHLP",
  "key15": "3PkXmPHX6m8G4AxxB9s1iSY8wuEb3oKDReKZWjYmsYLeAEP1ZWuUY4evBwdwEbwzN3mDrTcq2hmAAoPvBeyuSH4r",
  "key16": "3Y1aqHq1DbyLJ5hzptPeYRTkUdFgvjq26Eskv9MbMVBpMoWesg9vduEBVLVKx917dV7ATPwmcwiaQG9wZqTVY2bQ",
  "key17": "4PdQazyWfxYXCDJCzdjUG8dSduhP4A2g4bdiDM3zF5d5cVttHi15PZpWJJXYKjzQtxc6pwN24BgTuBEfhw8wX9sB",
  "key18": "4CXsRBr3prC8iZdhPUtLw7Z1hRxdpu67TTgWTrCTTpjyoFsrvDjkWTkHsU6SDUfGDX89UmZ6FtQH6p2KEWAAW6iN",
  "key19": "5p3QtdAeBvwhj2PqqoC9b9DHWc76u2tECJ6GYC52QvDX3CZXmATnoTsdJRVLUV2C6CkCEVqHqDd5Lb5Dc5d2ozjj",
  "key20": "jSZwDfYG6dyv3NQYbPqXkQcMzXz3q47xTQa77vGb7DkgQJNxyveNXLTdcuoZUEQRCSxpbsB5F1Vqv48EYhQH1zy",
  "key21": "3frJF8idLPXLjLKbaVFYr3xkeyCfpqMYP7raf4atf5nbX9LYcnQRYptqkf5EjoPwgc5r5UZLwBoqShuuY11CCfhU",
  "key22": "4Qba5QJEVsgAkEvhzmd9hXP1pnZsmL4THZJyeQzpbQVG1dJHjS7Po4CCYskEjRrTuZFahM8QLw1mcwMHcJBzJyY",
  "key23": "2C8pESz7FDkawEsX3K4BpHbLtdmoomNxWzyxwiHcEoqNhvgXXnsYo7mA52q5PkSbBQBtBHvmW8jJfJspFaF6QepH",
  "key24": "5755qU75HeNgmKFunNzY8hHpcmvkXNT4vq22kBveHB8gEdfui3vdB87x6YytQfzfApcF7iXebQWmwMBavEmRv3qV",
  "key25": "4FoXZJLn129tKLS2a56jUxkPjPBgSvkKLZoHmV1bhZFbUztaRgpTqhaFpfvyuyJSh1VJuiGb5fnDkdqT1jv5i75E",
  "key26": "5ieSUj9Y3QbR9vA7Qn7KMQRujy3C2q35suWWaJboWYsid34TDMnm8cD1TfkzqyF2oU9Ye9k522gYprDNpwjtGcud",
  "key27": "2F6y1uTniWEVdpb8YdNHc9NGAubE6vMHCmmJoZjN5xzWA4kvZ2EEuUDWhstUGpPekasy2B1nqTk2zFpq7PM6mt41",
  "key28": "5w5zKFRs2ruUVzLJfz7BKxnQ9U5dpWW3FkHYh9hKweoMQonQvBHqZQM7TqcLY3GRt6faQJ8kHBC1VZ66HJgWJzPL",
  "key29": "5hrqFA3pHfqrrf9xiSJLmgYGvbw81RDq2hVzv4c84sSkYTozv2d5XqiFEkHLqxz9EUpdkZJhhUrBKhriqJLxrc7k",
  "key30": "4Jr4bPqVbFnxYfgkHuJpNSdhT8C2GbQzEhytjF5vdu5HAiDFKYxuD6XiNvPD2ykHESy7FSh1dxe3ttUoMdufArjD",
  "key31": "3WX8y9jeHQCc8hwgUgsRZXC4PVEEUvus9ufG75WaDsSmrZ6iFyw7bh3ZCEay2uAeZxsqMCGa9TBgoRCPgzVfGHsH",
  "key32": "4PoMeFDaMtNfjr4iRK1HMC75qMz3eZrQz5BUMVPzxVkkUrZCZkYWnz5U6KWXFaLUcT1SsWnmQyf4fYL3MipELDHT",
  "key33": "5BFffijsgTvjN4ENMRHjGB55Bi79FdFfAT1h7xqyoHVDSNgiZmrGAdn4TucGpMi7FZ2b64XK8MnG4QfKCpZ6B9ci",
  "key34": "aRBzQm31FyQFmJMT425XBakgoJAmobzxRH6W9AGuky7dTRSTYJNKp1KataF1T26NHHouuJjREz5DkBqKyT6eGBN",
  "key35": "5sXvZAT78C27W5j3LJ8zoZDzFQNtkrEmVuw8Dd769wEzAfiA1fYKFzRfxEb65bci3xbJLqKoqG778T1rkxBVybKV",
  "key36": "4p61cEN1q9vg8yJaPYtmntXrdDpuCWEiDCSYKdhP79xznfrW8YczJ87uNERpoAaWCr4rerRQPj433Suius6xyGhR",
  "key37": "5bL5jfPdAQE37zLXWdnNAKU3uq2Rh8Y888Ztt3kXgNyo1W1R7mpSsdwJ8yypaMgpPDUrYu8VdaD2m3FeBrTPDrAw",
  "key38": "zourxht9H2xsv3VzgF8ZffLTH4e2jb4wT7Cnm9cbxrnjw54hH9phXn7kjxtRFBtb5dKqh6R7i3MBQpLhyTaVPFx",
  "key39": "2AoH3uhw4qe5eLqaZGMLGWSgcrSnz3NP1pgDXHiB5Y1ddrG9NqarcaLr1naiZ7qRqS3GypPoWk3c1GV5S8AxVEAu",
  "key40": "2vuNs5ng2AQqbRSqoM6rvT3zHrQGn8KRzmC228Jic8aPT7ajJvBsZd7QzwxDF7LtwVwne6bfVD9sRmdTJKp2Bmdu",
  "key41": "CDRVvmcMnNeZLdHpUjVSfpX9Xmdy8wfoLHhXg8iYEXXWzLQmkDms6M8ERqGDcVXt5bdNp8QJspVkESiFYLx29Z2",
  "key42": "39TYnB1zjr2Fi82fDf25ZUgpkbuhAvHcR52i2AiXj1RqHA5LUvKpVJ5xoK4xNdUaJFUcT959BPQPUKQTDPHmarcy",
  "key43": "3PUzrWrudfugPA29RPCTRUYEdrUBXbgkN7WKiPMAqJS3e8iGGzDpxFRJvd4983gEje8APG2kL3uLcgWB7wK68VZY",
  "key44": "3qoZTnazHwkbk816bVfCphQZrtB9fXzoQp32Aak5yMa3yuBYS1UdSizjL1UsZHvpku1jJqRtbQDLkyk97dKWrpcq",
  "key45": "5ubtf2zKdNCdtjEQWAMULLQ2hDirXnQCE1js6NNCUDY4Sv4YwNKr3oizek7pcZd4RPcU51NonFpy4SLDXSBpyvsY"
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
