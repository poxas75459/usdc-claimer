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
    "2yMXgMPtbWtnzND9jMGMW6A8PzQaE6PnRNQZ7iPobKc8ysn8Fon3js7Ezfwo4Sid8pY3xeR7QsyFZbi5mNpVyPdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtpcxsKKX2UBSSHrQXs8hmMEgj1QcqP9kAcwacfxfEwWHTLELRqrHoeq8teCpGrFrtM1TwEKHo8Z1fxKVaXC1WB",
  "key1": "2Xa7umHCuKbjfWam19cbAtxTKCj8B9PHQ7HXsZdaUzKqJvCXR3V87fWo9PSZtp3N9EdEgjEekFZje5dWoASea2XQ",
  "key2": "4HY8oEmbvfsU7FAmJA5azgLTi7huUeabX1i6KJ3kaxDUnkc2Sa26duaNEdABVQ9PFYR5X3nwGmaxrATMmjHgWkAB",
  "key3": "CQB2fUV59F975Rnib5FoENAR2JP1kubY2qTrUQez7A82f38SeQcHBtU9eX2oGcwC26AoFBfjBwUQfWw7zDEyrLf",
  "key4": "2EQTZEeSeZWUc3ffGCvhT2WiNGvc9vXHVibBNDH6RjsYGj7VB9XXn2CPvVasatw9vfcA7tCpAcfvtEjd2jsbRefG",
  "key5": "wYatWaTQk3dHhwuzb8E8wEejpXNUQP3KfCFnnVUZutLCsNfpUsnuvd346opU2sgCTc3f38yz1igXMUVWRoYYYJb",
  "key6": "45WiXfUBQpsa58n6fm3jinhiamdikbHtbD7kj4oDSXyat5bCNb29iDzWupgqFqDQn3NeB9yTbCyXtuE97wkSFptb",
  "key7": "5HaXch3tpvEvDvwMHi7AmVG6S6U6usG8zfEQXh32wi6oHYparfvkrvZG4kTFtEiZX9GtyDzTcFTucT36M1NH4xDR",
  "key8": "5DjeuZLZBKxQVTZuwY2V8iJTbcT1zSN2MyHtkRptU7EkCAbEztifGB4dYUwVC4EFA8re5fZ2UGBcPvyRUyJXKNU2",
  "key9": "5Lrq4Kn6bguvNeE97sPYm5XxBgkVCxuYNJaB9mt3yMNbaVsLrerkJQRbug41z6cmbjvaTU9tS7bRmmbr7BmDzoq1",
  "key10": "2dLCcRahjzux6Mb8ntm7mfFDDUQ8xgtUQ1XPrt25FiysyvM1dZQrtKx1YLtShqeVojS63MxNnfLdJBRsJyYdmbpD",
  "key11": "5NLpBWdS7QeAkTBaqTPmfwsVZTr2cFZDiaiqDk4pRSnDkcyaUGgbW3SARhmuJXaZoVyYA5s99S42aCJKdqrJWYcg",
  "key12": "668Gsun9wrWW1UKtWva8jtzfYBRiMyQoSwcXjSuT1eUPCsiSn6DWipnhxoKHvvdLpGhnCJ71HyivECvjamz4Si7T",
  "key13": "4VcpuijagWsB5V1HJfbrKUugNC6mrdiHRSRRj8KtB1RzDHAK3qhUkPFA6C2kwDZR8KN1QahJNkiM3qZHE1bhH7xq",
  "key14": "2vriZKWjKDQv8PUN6RjpJynkgpUySHhve6b4eYdxRLsyEDMxqNPLRrP11sgxMFTfyxRsyNQCZqrGWcGdKCUNVgLw",
  "key15": "3X7qES7BYDAchHF8ZDYjdcEuedz2z1DWUHHXbWQXfY7mxiJ1YTn4QTMrqgQiqj1Bz826taGytAy1vB7RXZtCfEK1",
  "key16": "3yD6knV7vm9GX2agmNaKMd1oTkwQEV2H9Rehvhgd7Mw7B2ZXoD5Y68CkcGWdMGsQFNz4ARqHd6FWGbcfBjjSaara",
  "key17": "2PtGofg1Yf3xUvVJUEt2ojSNbS4t6eyHS3N668A8mgKNiH27CgcGZ8k8Pe2h5iiVD7hVZrj8JeKTJ4Jbywz5SPV6",
  "key18": "3YDGrCesejB9pG2eb82kzfetFo7gYhUuh2ZqgU184eZw94hEmbTdt2DqwBXALZYiVsoeDJw5aPejLtEdkSEemRD8",
  "key19": "UD9hj2brTnDWGh4Tyxfg1gxZX7HjvNvVfDh7N894HwJZm2YG6VrpBEw2FwhSTiXWAipeNGnytGPJ1r7GVvXqzFE",
  "key20": "5SR4KE54ejYn658AhdVgnGAMHBLrcc1fXN6r2hjpfVAK9omHTsQeFwdqeQ5NiRNaTWZoRsKk2gs3E36D32C9iJ4x",
  "key21": "yo4tKw1XGk9fq13943B1BPDv4AZFQ7GBHyrtEmA9YEgzvrT1Mo5cpJuwzdTmnNE3ePspKL9jxvbZtdxx4yKmbBE",
  "key22": "64kLx3dkaDuYzqeM8MSvNM2HBGVXoMFrMALcohWLFibdTmLMHvBNAwQeXERsyUNv41tdWQ39Q8V93Vq4bp1JjbkG",
  "key23": "4WpMnd1RmMgSuXFPPxCQYi3SXLhx59xzsxSsa4sHfxcUodsRRGwarJXyqyPVEJLCu299KDxxnqyve6AtQrgspHg4",
  "key24": "3hGQKg6y5ncAVF9amDSTSaCXVCQPhbAyXPdKXv3zWMGY5rxBhh3XjjLG1efYNzYWAWr7kNuUrCdY7Hgdedji6MA",
  "key25": "26NGhkKq36Wu9QoaALZSueRgKzrBEQT7wPpH8h2u4V8PHEMbENhsTPQifjHgmt9NhHxCArbPvVYxQoqpBLjRCMjB",
  "key26": "TMUDtht46KiqL2biBYVM8gpqAJnU2bLsSRy31eQQvLanWij5tVVWexc6Y8T8utj9BMx7PQj4TDT5tjPQoNQ4s9c",
  "key27": "5y1MsyQ6zKrc6k8s3QuqujuMbFSWXunaEjk4mcu2NiQGEKS4mLDUCgYFiYJQGKTt8JEtQHDZzoYHSkpKPGEYpCws",
  "key28": "4nXrXaQaPtVGSXj5sSLJz9jBfBWGjqvW95VNxeJtEGaogdjyPr7BxyfPa2E6KNaKXFs39p8kSHzQapbGPgitysvd",
  "key29": "5MYKdGqNa9nW1BLKP2PKYG1hRW6KiCPiqMdweanLoXuZb2BxWWfkDSucKZwEhKUBaYATf8PCDXYt32TCrV9Kfr9j",
  "key30": "5LFceQ1w2YrfDyg9rDzBFJdVUR35DLQtXXCpeVVEk4qFrNVQ38JMKvnzA5BhTgEC8KCdRqtYgC2sGmsHpVGink5X",
  "key31": "4MhHdmXiGjXdE8e8zCFfVi536KYPTd6cisb7vyYNAqYiskN7ywCwCJtCkDmXmEx5YADexchagFY3L5AkcYJfLaZ1",
  "key32": "4GssEGMNj3zCL28Q7TuNMLGXa8GtciittFC8giQ92nyUcvGmTbouw6g9Zkn4Gq2ah6Mc8xTcTJhKiWZjtWJTny6F",
  "key33": "5SzHWn9cpaVfdCCgzkTjcPYNfdw1z16zz2o9ThP8AzhvWszhmMfB1vbxybm2ANRkcLUHCdxyyuq63oK7x3niBfYT",
  "key34": "2CsKEnkyHqaZYHTJF55y38x3PoHD5YZDYCH9QGZt5JKNQ8xKKffjihyFd9pN992dSyAwtLne5BuvmyxV4bPgVEez",
  "key35": "5wJnZzhVbpT2DwWLD2gptJCRoazmHcZtfxzUR4hQnywctfnzqxSRzYsNqsaimprTozXWAh1zbB4umjw8j6s2H9Pw",
  "key36": "5cUyjtHFYf3rbJ29SDt4xnfFg99e5Vy7oRMECWPbiwuDtw6sHsqg1zuSDPVZRq1eMUrcGPNvhhy4YCNuUrUFMDQS",
  "key37": "4qRveNKJniWtBhwYwLNVPW9TNheicScSeFGpy7JHt2aXS1Es3ArQN8DN321eXnxZqVenP5eNq7846cFagq6GiaWL",
  "key38": "2ytTP9qFKX8CPbtUVSvGtiqD6VSjsFeF4kMto3pHuTy7jaj2zt5FCjqGV21bmZho5a2L1yDLbaPJPZHmhsMe3LUr",
  "key39": "2e6vegnVmq7WWc2VvM5TxMmMMKPE5hsSRzsdxwESe7yWgmKGkQBCwvzZjKNhXvtbN1rSqfgQZ3HHHSHCpowBMfbN",
  "key40": "2Su1NjBsjhP1914dNcv6XTt1Vbn76oLP9U9CwTe1xADs2URt9FbueRa2PdW2sRTCsqNPqX5LHh7cA1tg94BTY7on",
  "key41": "5vZkg85WHG9BhC7xDHwAszSX2GpV1ZujuTuXfXrnk7qAQJnQsYUvoATyYk1r1bpJEC9FDtsho4KwmckJBJb7Ffey",
  "key42": "4RjAkzt2aGS23CprnhLLEE4qxDx4HhNDdb7ZJ9m38Z6VCKgbqX22vwR9euaZYdZAxHM9RLB6SPYfuaBgbngBEZWz",
  "key43": "4uMYHQYAKkhwbyXixE7Sb2a3wNtvoHouTJf5p3wwmLTPkahMiZWHjMgvpvxapUANymfRPzR5d4oxBzW56gSexqAL",
  "key44": "4CSTggaQn83dVcFr6NLSydDbKD7y7BHvW9PW3NbuEofAEE5YsPWxCJCuyQCkgUW2qLexQX6Sco7VQQkGJTcQWT1m",
  "key45": "3k8v3XYzDKDRR717Qg4BgfUhmrRpP1rd4arRRRLs29DQWrsx2o9Q7CJ3eCuWDFjsTSCjpT3nHHwh1Gi35r9WtkQh",
  "key46": "3bVMaLdzmk2p7San8RGZengWJhBU3eXZbM7shboshXvrnvAfWYYGp3DJAaoQrL7NVjRDi9FqEVNJLKxZ83cnLrwY",
  "key47": "3f9LcUvcVjApAsAQr8SDxcVwAxL3smuuDBAcCyCk1f2TMxkJurSNBdidTMx74iQsDpE5nG7qhwrxqcXNUyYfF1Ti"
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
