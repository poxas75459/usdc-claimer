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
    "5btCk76z2fQijH1MueQfwqb46BFYq1CB5oAddv3fVCRq1C9YtvchMkHbWfxh2Hh9T41t72diyBxLnhZjYHP6Cs9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WrD5qCM3YBboaD4KTX48BJG6usMSGcM5KC6UmKmEZ9BrgZb1ggeFRVwY9tytAM6ubhMaToprLhExXxptnGqQ98n",
  "key1": "3vHVkFd96qcjY4ieoLkZpuMYy7QC3VCQ2ik9vU29tqbCQpsYG2SQox2SydoazdmR6yomHT9LZXf4w1suCdtvChrM",
  "key2": "5ZeP66zptcAtnsr112QeeCSRVKSh7ZH9CCSzzwJXrSjJF4oGzRRVEEm1V7hDdQTLfe9wQGrYofPNiMVRmQLsWthH",
  "key3": "51NWPbz5fFXD2rEZBrS8mAAayuhrtaFqCEDRcwVZD9d72cxZpxDedn2mxUVduyidG5Da6AUZG5qtwVpz5GFEbjiM",
  "key4": "K8DePGf2SepSaAtmb7WxksMZ5wNjXmZpAVk7CJ3NLJoxrsBWgRKBfaBQTwExv4EJyepjNgx5Z6hAMx63yxvnT5C",
  "key5": "24sMfhLZeuuNsLuPTrH32N37h39zFVkVekVrkKFh6i3yXm7Dt4V8fR5ETyG3G7K8KtogMf7Tj3M6aATK6JgG16Gi",
  "key6": "uBL9K1g21MFFju6Eh1bgRhhvhXWjBNTp5ifeZ7JZAznGvqAS1U3Y3ATynbVPreZ7foVNujC2tKv4eRsFuUPQg33",
  "key7": "64TFftvvQCzq8girJXRqz7kRYfKPk5G55JpEqDpAbaRbcwkY1XKxa4AE7Ayhi6Q71nS2ogKcqy8cZcrGCuaTxTwM",
  "key8": "3fef8NSg7RfXTbFGpP4uzBb295GjVKqHVhSWrHSrcRfVNpiD8HUxqD5uAuNgugpFteA7PSmvTty8CoR4BDR5RfP5",
  "key9": "2rn836wEbNyKEPbjnESbPAHhhSs5D5g8LNh5hc75S7ima4QCz8vTmATYbgZrJukCwfWUmtW4gsxjAk2C76raa7Zq",
  "key10": "5G16p4JdnyYf1rswhG6fTqSTqX9UdQM9G4pEhsW1PFChxYwaxfaR4WRc7WfJ61nVUPQEwqZ6LNCiznHK6nqkPpiZ",
  "key11": "3i8FyTwgcdTFLdnbM2GxaLBwbRpypteGTGN4wQEC2MQzEXs6NLZY1Yn9Eqbqgb5AYZinMKL37FfXvuEUzWK7wbNW",
  "key12": "avkuCZR6bCqy7CehyvTeGuPkmhJrKs6BuUCdK81JgdwxfKBZbRcHUJvyLhr4JfE4s64nH8Goob6Tm7ojdo1NZfQ",
  "key13": "5AcMg9sRymmhneZbSKExzDgbwF9HjfAURtjinYZAmCzepeBweZt7AWXy5ymXKhAzR22ZX2oEQX6u5ZYQGFBEaXC",
  "key14": "3mBJvsx4pe1J9bPhCZhW2rpMmBDp4qQmkmyKFxPmLfdiwWQso11ahEiiss65mtpnfMnWbeyTQueWCYgG6oJHouZV",
  "key15": "5ipdU3fkG6WQ66wykPskVwJHBM1peYs442rZos4WcpsxjbfwoHMPH5FtGVUd2eBDUWjGs9xfYWPgwuPaNqZu4Zt2",
  "key16": "2rzDefB12ixxPMZHynQ9sKLRkejJwVMNHx7eXrkaGcMSbB8xmpfHRuwjP5jeyyfKox7MzMCyyyudSc8eekNPoEMs",
  "key17": "5A8hAhMKGua1deKXwkD2AAqLCMu19ZnwrF1gc5FLxh8nxPFL2T33u643FiH6DzfKS9Sy625BmZwi3cDw4Fuw6pQB",
  "key18": "55iYv6ZKgnkqrn68r7Wxf9W8rDi5EJiNt5Uo4c7MfzyyrDmvbojqGjt4PKUjAq6Dj9uHFyFzBQusrTCQeEXzydxV",
  "key19": "gWtWGG4eMkNQ5P23ukfgYH6SmtJC5rnQvnJZte8TR4CWB5mcVkJFUJBj5LauN67dHiat3mvewHM9G9Ad6xAjEHU",
  "key20": "XDeXLtWW2yS3wqQzfKU4PUzynvSXMJn2nCZuEr1V5Ax7NcN4jrMGbSfGdmsqFQGzuzyqweRYyhhH5MT2xRpEigL",
  "key21": "3k597gW9CKZ96sURnDMSr4y6TsFe4fkJmRTB2yZ1LcTcVbfhvNKko6SQTa6XU1F2BBy2HCed2puAxubr4Vk7C2e4",
  "key22": "3UGye4sgwLyj6toPw5k72YMkuLPaPE6YAv8AdoP4Dzp8CCkXPEroTVpvisVcAtmamkGKATUbPeJGhAXGMTL26TnL",
  "key23": "3ChzTjP3NQebk4qG56Ur23qWJVvPYodzVD2cJ6GUVAFNFixt18Ztnhv8e6uRdQtRdLgvGtbbT7ihQ76Kwed3rTT1",
  "key24": "5j8p32vzi9N5dAHqwVeAAe6o9KP6QTy5tFM94ZEECso1hLnDFV7DHcDGQQypKCnswufyzXo6XaF8cUZXxwUSbV7A",
  "key25": "WYZ5TeToCWGKwfE9fQEFzjgt1BbdJLQhPWrS9fEHpVVu4WLH7Pp1HD8kzppwmwsxj55TmTaKxDuWXhjRWw37ZoD",
  "key26": "3Gj7tNm2WGvwrvH2dXtVzUdJ7avd7dPFihsQYJakrr2Euxf79x4HaKeAyNoeHbA7syiEJqQrL4ac2rTR7Zt72GWn",
  "key27": "djP7VqDHa7jjVrKsCR7QCMHHxrWeoM1a3SWgokh9qKTShkTz8j2D6tMndSfTBfzZ4MyZcDyxuS4cWGHpk5HMgNH",
  "key28": "5dkPr631A5nyp2qeh6skKhhYnFrp6QaTcP6uDcwi74AuLPEuLpztvH4XG3Wr6LKfFS2UzMb4jHBcq9dVcrid5G9v",
  "key29": "LzhHMKuN7q5rEc3eAotChCuyY1nNn5s4jbkUwZmXiBYwbmHz33P8M3PRwp4mewharx9UWLmPv8wB5pwThfpnjaM",
  "key30": "36GHgsoUN5rcVWeD8SdmD136QaYLYvofMnC9cT9u7qx5yiEqCU35m3udnctiXQJc3YWas6R2zisxAkuSffHpkMF3",
  "key31": "REVduVqdcx8s59XmmhkpGtH5wEWEGnigTuTDNQZMckFAs6YafKnDPXYx89KGLw179oxNs5g75uZR7FysowgUjCY",
  "key32": "62AxGNDT1RxYtNfsnb5DTcqPhCh2iMaKMPqq4FW1SRrNyXoHhACi5ieTKregC1JufYwx5NGTR73M3QNDcJyiiEer",
  "key33": "4rmUWdG7TAyfvkBQU9hzLGMsovRBvjxP4x9a68tRRJGYEJ49BoBttFRtRDYXMDQy3SNcCrPrmBjdRSNxgPvTEFSG",
  "key34": "k8w14SV8SasxRsaUYq3Lu1C9hGeWwMV2DZFpLwENdCGskLt93A8kcW1AjQggUKp42xXmyPY1ddXs7uXShTH2ZyW",
  "key35": "Q6WLy8mmkQtgR3DmgJxiGJMxW6UPxoKdJh6sCARs8DRZXCrtxpzvfCrerBCQzj2DCxaT8wf4jGvD5nQT5Zd9hcz",
  "key36": "4YxjJbzcwe8iu2EbMEVDntEg7JS8BdNHL52xnZjcgPoKQRmjguZcSdvXEAtRnQmu3x5XiEnWhtA2LQFA31EX4Trg",
  "key37": "56qtZWR1FEFpf9FzRAMYZwhCFPfhBLGBmUU9z8sLtdPkBhVL8gqe6bD4PMxNEQugG6BBC4Lo8UGnLd5pFnfYgiz5",
  "key38": "58yLb7zVzo6BnDctdcAXfCz7xphK8riXJDk3eRHRjXyiWMEkhST9Dddt5FvKmsxC99h3jpZMXFBv4Db5h8GEkmep",
  "key39": "5wM1JEpVMn9VETyzRxrsQqHbA6uNy5ZjXDX77y9kfNTzsNJB8t35Vof2cPk1xQL4zwBF4QjM6u3HGTTLUd8tefGj",
  "key40": "65QYJhh8LpF8x1mUtksCfz6DDoNmJQ7y5Vv93ctxrosctpy2cXyGkGmFXBhXpkTtKnDkKk6uNAhyn9t7w7Sj2f1x"
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
