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
    "2sjfGdN9n6nZzhQtzPYHBVyc7VcVnKq89EMLJw3pBKPwXfcqs7PzKg9Hcf7ciyTyRfqk8C8viU2RESb3zqjGVgjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBz9HHsB8hs5efUhhevuqBS9FQXNVqNmvEa9p3UmY2HXrRhmd17BX6CbfX7UccVwN1eDfWBB1x7bDrbpHUwWvjP",
  "key1": "4W4adfGcvMehSfS7etwjfWtCXTnYR9cHFhBjsbndF2nm4FjdbcFFXBDsUviDfc1BVVLpU14gF8mQTHEsWVAqW1jZ",
  "key2": "3Yv14V96iCDUc2dyNVGw9nAs8Ykdg5aYdEaNh2ushGyKW4vCyBwJuM6b9s6Ma7pRXCWfcexuAvYSrCBEYZ1aLUaE",
  "key3": "N1ReKG4umEtbxj4jm1W5GzmyUb1wkcqkKLUkRyS7tm36fjKojWJL94Qfv235TFiCS3ekNo5xV4orFQd1LgVVCeC",
  "key4": "tTCFvvGe6r8QPQsSrK2uYLuytBmk9C6VyTLZcKUMCdb8CNfuYmUQr3TaxkLXk98nxxR7rXx1aFAtnh9KVZzJfs2",
  "key5": "3SvLPGvgZWTfb5e3AsZpePq1e6jPd5psB6bPffquZS97FXeGv83TVUpx8KvzPF8Uy6vEqEsDsNAJibwZwiWaNfJu",
  "key6": "2V2k4JPvrc5HuUUX3Xpvk49pAsF8FFLSecQEHqy2XH3MFmiAhMqBACiPyNovWYfxs6Put9fScNuEM9PW8cxwFN86",
  "key7": "FEq7vJcxyEUMxdh1qSHzcZ1V8T5Bd1p5mhXbtCiszC5PzEmLt67F1NqQMF3WS3tqDN7YUR1CHHtCh7PmaEo27Di",
  "key8": "2kGCJNci8Fx17KBJJgcSw9TAocrzsMwP9s2om7AdyUoZoqu9ABUsp3HBuTxgWSHvFcsiz8Ac3Tc9YUyEPxJi9YQ",
  "key9": "591RBSY64Y3TNtrH7DCgtEkz5QsvoVNJzDhbZ78pAbrkcG9dgZoTuGpJjByHqSTjqKhrub3yXdMc38G26PVT5gX7",
  "key10": "4EcumQhNt8psK7RYJeM4GwxKHuhdcGnoQWsrxqjX8tq4wqH2yFqkvpq8irmAxEX7ChU9tLcXnwiEJjYadz3agNg6",
  "key11": "4cB8rScXDBgUTfzgRkxWtRapcHpmX5bpvs5FxxpxUKndLNB5hMLnqkZ7hYwdVQMcweumo2d2DmEjUcb35xEHej5P",
  "key12": "3H6WTgqTCDvjnGPXXS6pSJkB4Cqhk5FVPF6qteRJBKFA922mnjYcisu9wtUFxjq6Vddy7sN1mR5VJzaQLhVwyrbd",
  "key13": "3a6QaMgMrejt2mq6ywTurSRr4diDtjkqvpJNDSu482VbkQVMwkK2txGAgghS2cozGeRQVSEXUzThiNm2oJW5GPUh",
  "key14": "4FzhzBh3YzpevaV2N93tSfumbqpXk9wt6PKg7V2PATYecBK9khS8MXRWMxZig82nUN4aVTgUaUAbvACttuLPvYRN",
  "key15": "2nAERXRb18VzJBGomw3ZF6JuJVuBdXasHZZs32UesjQe6ZWdxpmR1mg5rdSjBAHmBNjMoDe8BNATbaDCiCXJM8uN",
  "key16": "5yde31e7uTtGSNiSiwbLKijNurwC6ikZwaqv5bscwCa4EiYxeESiJfsXdQwtYjCgEvq4sqtk548dw8NYSPBjoCad",
  "key17": "5HWWcNyEuYuLcqyA5AKT1XGNDSVNbNUU3Fx5XaUcFcpkdTHYg55k4BmhUevPiLuRTFL65VEMoXEGSmLTxWkyNN1g",
  "key18": "2uS9w35o7sqNBND5zwHtrM8hJTSsYWS4XZL31J36YA7xdnTeVXWCHk77E4AAPi7i8jxCYoG5yhfNce5hbFQKqXmA",
  "key19": "35AuDUjT7XN2kXNz5hpRkzC7XnkRJytTTECWvCwAPGcQeCjHpkwD197azrHjKxTCYWep9hTt8UWER8FbXBWRChoC",
  "key20": "5dozJ8km3troostkb17CnA4FLjx2gJQfK9LJUq8H3FhPLWtepdNWZC7woQAFWVHp3SoMAbPRXixCbcy32a2S4RaB",
  "key21": "5pYyyAgGLgmbdSV9HFhXdx9e3VWHWiQ69eM3SLRHtNXcXFSaiafrpEDjBBfVAGo1SV7odtm5KwqjtSgu3UDjpYPV",
  "key22": "4L4rCYPxeVw5J2DB3v4mT6Eb1q72U6xVZLrBc33oCqGNN74QBHQBnKh8t1qTEpKRfvkiNz2Jz7YKusfptVHVikut",
  "key23": "33CpkN9eHRPMYnRfU1SeLjN9W6ztD8DHUkNmb9NXvfnXSskxXzAe58NUjvEAGpTyXFhW9dJTH9JKCoVbTwrCrh2B",
  "key24": "2XQg8vnqGAFKNQLoFDLnKkUjXBtGj8PnCYQ21iYCRfa7wuXDr5PkuccBPq24QLYU1eTLyWt2j5gfsRyaKu1Fb9pN",
  "key25": "5Pd3UQnABqbBFSXe1EKfbgveRRFNut3uhnX34kFNJ6BkxEqEHP6cBpqHhDcbcHWtFEZP4Une7dGpNy2AsuAz5ush",
  "key26": "3YU8dhf4yRxSq4DXSLJaZPbgLsu3zfLqyv14KoTVRmEEsAnrWM3qbsf1U5iZdGP3yT9fH8fjZ8gonxs84bt7V7ow",
  "key27": "3gckDWn9EhKMcwbkirSbvRDAuwwGJRnh312uyLG4xdFwgEPnWRtr8PXNmtzJoqn35RscR6GgV9EjwzQsz9xjRAFQ",
  "key28": "Qtnj5vZhhUmurUDNKMb4iYY6gd9jwooSaUg8Pgv9S2Muo7EFonz73YRkHvzBmZivG3tUesLXc9hwh9zAxkxc4yn",
  "key29": "59wcBpX9YMST22yMX45PRTWJEXP2pfshWhcNmU4iKTNtnaWNsxWeu55E7k3DgEtTwnYnnrA1uX7yvT165YSYPir8",
  "key30": "kvHTWBrU67AqWSzHWBxiKR7Y4vYpReyhLdHVXui5nE3uLbAGMLtB87mZ5YTb3HCbdLZzbDPPFGAfRD6Z2p4r2yv",
  "key31": "2UTx8iRb7gmDtnmwoCUDQVKhgpUgfn7xGQM8s9QaN6aZqKRT2YLeSWcZwuD9J1Use5pBbnBFuNCY5WQTxkDemM7j",
  "key32": "w1dHyyncXvuCojXYacRgN7Uuz92dWHfgc9ZLxhcWH956C6RRretWB2xiv85HKZjqnPHipnovDnoanUVdjxnztqs",
  "key33": "379gGiLHhwUPJhh9cngLivNNU7t4CdRVYv7XsVz8eWyZkqSqRKGRM8P4Sd6RAzw2GTrh2BueykWnpmcFnMvgb2mr",
  "key34": "3uPUCdj2k5bdCngpZmfivPfFW3AyiTGnUjFG8bu3fDMXyBU4ZUiMEoEG7gzpyUtsz3z1VqEKT7ykyKXx1x4zXueH",
  "key35": "5J1e7pWguh59Jw3LQ5FrVxGo7CkqEKFCUiAy4wNbUJWc6dVz31NjBSrPjpiUxktpie7pexAK3yu9FtfuNvv6KaxH",
  "key36": "5SEgtTtoS7kbm5dGtvNJRnn6Ynp6Hz71TXfTQQ8HqdnbCVpgkGa2kLuZSgHbfL6DYfmu23R8e5AQMWWfq4ufGsdx",
  "key37": "3F6rpzxjLiJvxAqRaJcoAg8kmRXuC62iUycpKwzDzWXL7WgMFtqrvPMSjCFwXYZTbgz75aNTkqocJp4m12cQXgBA",
  "key38": "4b5f6bCxMTApxNUvrGu8zWMuQeGSkNxbbPJDRRQac9tugdhfPGXQjXA6faLzsr7BRiyzRZMZmmPtxvDJaLruqkvJ",
  "key39": "2zWH1AkaXzYd2bnAMJ2t32CEDNXmGeAnVGdvLvuV1RDowdu1WiaEfebwSXv78NhCdVMsVYx1UnR1VoJkxJKvUdbo",
  "key40": "5LnhE5dFfGyntZkUZLpjFwxgzZymwqMk54ziXk3hNbpP2hSLMMJxZigmCTjKHHNGM319RtpwDrgtMRA86s3uggd6",
  "key41": "5GtzPFSfLHVtiwtYCsVy1nu3SWaMGddJh9rPsvs7pcKB1EzkWausc9Qd369RicPHnBeiCm5jKtatgEbPgVTS7Vem",
  "key42": "63Z767vVVpyiECYndnzPKsLBTKYcpUQ7BYDxHoc9wJLnAohLURJEqNk7Q1Absxp5kiWaYtR5QvHmfPZAPj5eRA3A",
  "key43": "3eRBRG6PEwgqqC7RK5AAc5xRJZhk9X8TQpHzhv8sACQwdSBp4HAX3gH4mz1cGo5FwLk3maUCMzVYKhGcXDCWeuC5",
  "key44": "bfNfcfuKfpeQRchqBGiiMoGPPv8MvPRVXnWfExhxLZFtUjzXXCAXBwZnq7t6WgyyMLGBuuGtnS9RGC4pozgMqha",
  "key45": "x9PYgq8UDFWpbQkgX4QzHQYzNu72KNmwVs9t1GKSdXF3wvFNg2NMC2H9C4WA5Bo6sm7nqg83skJQ92ceQL5QNjG"
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
