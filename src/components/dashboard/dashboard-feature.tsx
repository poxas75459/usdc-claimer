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
    "2HhR8DS6Ef84S1snWpKfaSyDzdNvoauJ1oER6M3Cs5QtMrixRLPxM5sgV2gUFd8nXb1cdxKpC6JBPiH1LsMX7VKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2nt1SqXuvMxAAKK1YPy28gHBLUrsDtwcLqspAZuxDi9nkBiuywLM9QL6Pri8SWwexr4Ue54izNBMyJnWZDVAtf",
  "key1": "2MYVshMgDAfMKFRWokwfFaLuSjKzNimSEQGJyT9S8MWbVnT15zwu6DEewKkA89z648L2LV7FfrvbN79XXo8s1g88",
  "key2": "2FUmwqY4bgJUawsZToQckrqUY2ZcKs3bE9sQG96mtWGEdDbTXrktfpf7h4RNj9rKw5F38AiF9vpVEcRysEb4nTPC",
  "key3": "y82YLwvBLZ3Ect7FBbEzXXR2dXt7k5D1c8qqzSoUMXQaRyipw5czEAnMetNJLfHpYQbQTdujgUe19um3odPoSx9",
  "key4": "SmR7U5pVJCi5fwouznmxYHNBEHS4kcXoG6g7AoSbi2VenRyF1R6BuuR3W8VFmN6WowQVecKyrWhXfttQC79kc2j",
  "key5": "y9VxaEHvq75yfLpAkH9UkAdfXRNr779P1D2GenisC44DqW6BRsQB918T2jvmpirUFYHjuBgtusDqLn3gpz6FVJJ",
  "key6": "aVJ5THJGNa53ws9U5AwA7dQUq65nmK8JKD4KHgDpe2LLAqeAjaaZAVTiRfvRy7AEoFGCncrAdC7pRfkYX3ALMvg",
  "key7": "4V9X4q7Q7hKHZQT5FMdqVc6Fxqq6APRp9imcB48HPAsAMLZ7BfPMaGQpLEZKecRCDHuFpmbJyWA1o6Q4AGWqe6yz",
  "key8": "2UWWhGCiGqkps65VgBj87BroWTwSdiBM9qrNKxSMAFsZWzFzuwmyusNVY67EqKwCBUGBcUPyfUWJDn1XFsciQ5ZW",
  "key9": "5EYTfbARufMuMBY7SPAU5rwv79C9PLJVZCUcM6kyAcPQ1TBUNVBWtS5Qh2Y4KB98EBT9nAbX3NjjtbBaFyUyzmtt",
  "key10": "zZodEsGsmoQ1qJzzpWK7qp59RmPVDCrQbWYA98eyeK432VXsGqtyFdxEpgKWBiWCqoCbXSRMcm1F6kokFtW1Fo4",
  "key11": "67AvjT9fvohNKfgnMVo6iQseFKyqDVz4ehEjscHs5pUkiCDf3EQHXNKX9BBjCCeFvNRMTXJdc94SbNRLg6ytUhSs",
  "key12": "4hoR88XjvjA5evP4y7EKdnZufS9M3aL2C46hSZbxJQg9WUvaqieeHbPLYPsaHFMJU3QdB9LWJmrzYm1K8Lj3Jvnu",
  "key13": "xFabTwxFfCgqviYt4soyH9jojwQjGrxGAbS112nZnWtKkPQNykUcGSV8VcPSDwJcCSHEspKcP9KsdaCGZtfjdmd",
  "key14": "3VDdde2S228J99DuACX56t3BHK3iUwa5pNvPi493FgJpHwqTWaj6SBCM5XwxfAPtmN3xyjfq4dcWffe7sV3WWZPZ",
  "key15": "2WBPLBNTMyF3MXBGuGCjTMgBjGMfiXP133hM9izjetX237gJJfjs41VjC21xqsFENo4nMNad1XsiR6huypTyKt4Q",
  "key16": "5V6wH4r4unR1w2yCCxPsFcpJN1532kawAeQp6h8v9nfYN1AnM9JFAQtwjk3SsVmmzo3sszQwfs5CURyKuBq5qWYS",
  "key17": "2s9CdSX7w72LULfEBbHwvLK28XnmS6GeaMdkFAcB8a1kUsUNAASyUkG9bAwgXiAnqq5u9y7soCHtJ3B21VAR5hYz",
  "key18": "3vxn2gNvZUsVgvH9bQnJRUYnYrSZWbJM7m43F6oWtHHBEpHD9ZdqKcMMG6gCvWuPmrsob6yASFbXkn1YWBbmiBpv",
  "key19": "477XLAH8kcGaj9bReAgvPEoYmNLySpSAGp9sLVHmLJkGXp6jg7XKvFfvRKUEy8SeGwhq9HYUgKQ2uRyFYFZRF5mX",
  "key20": "3r5Z6H9zWMEFvDH4pFkvYjng6Qm3i5v8pT7zgnN3CbbBeHrr61c5cv4NLNwCVWAEHsGHy6WeXLoFATGtZPbffdbp",
  "key21": "5iQCBQfy8e92Wqvv6vvpwyKrT6iGBqeeHKBkPtUG4RihyNCuwzvoSYYgDWBuSgusTkCpwfPar1bSL73o3Z1Lc8Ek",
  "key22": "2SbtkW5DEeMGdP2cHjAT9f5QqW3T4dCW72deawzQhegFCYsCG8rG1mrGgGQ11J1sjEnRTVvwioYuETEtN5A87uzt",
  "key23": "5VzLEFun7hmfmtu6mKYY8Jm8R7T3WtNeV63KLcgFm2YkbbxVMD4rY7aRUN8YDfG57y7HBWV6v6tdRkHLfECxKAaz",
  "key24": "37W3ikQafHC7EuSJLEBR9mAdZXY7ES1pVkqmmWqMV7MiaeVLHyrAXCS5nfiy5pFMo6hGpSMW3rhc2rrLMTnQPLSW",
  "key25": "31gSJvjnLR5YcehKoeL8YwYYRoBYqibWsk34FEB7WCP7UaPcjRYDjTzon4LwL5CKKeBRJXtahLvuXTBmcMzmfRPy",
  "key26": "31kPjkxMXRdCfNi666iSVnJvJNJWbqPVJgw4MXNp44DU22m5rfE54KpEDgFTgWDBW3Fhan7TJw51DvavnqfiZZ9C",
  "key27": "C1bKfGwtQRmMo2dzP7TcFGxMctkSJVwF2SFhNzkbQBdTL4De9PAqCygXFHaXfeYAoEHucgPoSeHGHJAnEJaQYe7",
  "key28": "43usZju6SkMgKEYP4dCvnAZLkhmcyhNqJ45S3sGjWetgXPv5oWFaMosP9KQxR7iEyQu2gpCLvTt8deHNEqmFWKtP",
  "key29": "KrD3tFNDq8EK3RWiRpjfN833qvR92pcQBz8y5mkaY5DTQ3TMpWr6MsmFwf1qWSAyhwSF55fm1ZpXD3vdDWffCue",
  "key30": "5EmiTUG8zGFa6ra7mhvjRTu3wRuqPf6LiZ29NYuWuQRKxY2kfNFUp9Vbii7EiUR3R8iuCV5F2hTa4Q277BxpGUtd",
  "key31": "2cE7v6HnejCc62EEp24s5nZwyiaFFoZSJZggnTLHh1UPw9teFNBzjF8jfTHdtVzrvoVC5cm7xLc37KdgrcnT1ZCo",
  "key32": "2juhCbKAWwLh81cVbVrADBAGLqSoc48CBapCX3CVURU8Z3rcen1GX1y5cDiuW1KTKFppxfzyRh3HVTj31kjgBCnc",
  "key33": "5bPEQAF2iK8CbbGAeVSR7waabUoYAdYmocCqJcuSDQoNfuFmySVtoXHpF2EJr5Q6VqSVFLJRyuFeYWrPjs3F8CQV",
  "key34": "2eoVYjrTWe8i6wjETK9Q2BUPzefbfoj3rM186bE8zzmtGPbKoYbXzTzoJSTMs2aWWdw3dUX4shKoY94PV92jfWbX",
  "key35": "TwpB1fN1ZnXro95XAjFyXc4rrFbe1yNsrrciSJSEWKsjAbEre2BqCvL9ikfzqJeb3scoB9ffqftUFossn5DwQ8W",
  "key36": "K7cxAf9Ygiz8sa6DLwVaHKbLMXYLzqSoN5p9A423aZD1LAY5ZVtDWBf5XNFMCSLpmc1uzfZbBUoyZX3LwuRxE1r",
  "key37": "5coWbHbzm5LFJ3qUzoqzXFKtPP5Qx9F6zs8AqpZ9Ur3km4C2DpsfXBWiFTaFARJEAKQhZ8TxT5WGzTMhDjbEKhVu",
  "key38": "5JqjuLXaMPgxuV1kERBa2npNw2oJbQYdC9KzdYK26ACwbWj7rn6TTr6AUNdGNLfPJxhwM4k4mKYJh6ZVR8Hy6eC7",
  "key39": "2Q8Da4PSGZFo81E1Ge8pSgrzkwDs1dCm8KkF4JnZrrsmFGoani8Hob6GEX9F8GnsRQem7UgFLVNQcs1ieoCc2ECN",
  "key40": "4WrS7HDvAzM4D9Pjyvhd81n8TBRVMDin7hvuPGfdCdEvPD7QL949oNWSVZdcxHsbZ6MNcjaRKenSmCXQAjY1qggq",
  "key41": "MmRGh1veHNXrXjLJQswunC9u8Z536UheDdjk6MRJqwZfcJyXwLeS5TQUe4TpHDVsDPMMWTS2iKUcgLZHB6PjDjE",
  "key42": "4zzgD41Cxf1noaSRZ7nvEPmtW4JkYJvmehVcoM86f5xHf5cjZDkoEeUmW8QxWqcon66AkvxTXLyeuhu5AvVVZmya",
  "key43": "2YRADW97U4py14wLbaj53gnY5mGLF7r6qyNzhyER6J8JoFT9Agj2jonv6fxFiQ47pJ3ZKVTh52DcmykNFkQ6ySnt",
  "key44": "3fN7Fh4hmyGM21ToZTEAPqteTDxDDHD31NVrQcGdMVgccn56EK74a3rTf4AgNCPr81WB9RUmYRgfLktNLLL9C7k9",
  "key45": "5AdLaMDbBmXdMT7n5JBiGUomn38jDoYvkrpSSPycKwF2yLcn46DBgSnXo3YhwMXSRy3G29GQ1rwex3ET22XERkdW",
  "key46": "3fmHcKtFBADSpQiQWhP2k4RW5iHN89Nc3L8sWoLydwjCtceU64eB4UWLBV69nVV8ScuxTYa5NWqgWWowKwc1dngB"
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
