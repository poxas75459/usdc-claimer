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
    "22Q5A2Wij9pxegMMW9VqxbWp1u5kpLb1gSmr7etTR7PBLxfTyXrdTS9JzYW7BqzWtkouxRE72r9984V4SrqGVnfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQr43A5HvUgpacLDrmhrgW7JVLTw8HADM6oS7jgDwz8Vvb5MCgrETux8oUVJZVSUbwabJFf8Jk49F1MYoshpx65",
  "key1": "2dBYJ1UWzNz4RGTqrFWt4Sxm6dARdYhkz2HeSK5ad6MJs2F8bbLD5cLht4sW6Qq3JQ4KJdLYof5yTw3RkzoWqK3c",
  "key2": "5HwmAAjCpp6tvkK9xfVvsZ7afHivbbapZh4KfBR9qTwNiEzAHuxjGLya93mB5DkzhaVkgr3Kmimj8dHuvYxQrubd",
  "key3": "5JmcVGCuAEcgDaos4Fc1CSV2958erLJd2xDLLY3x7zRQDwJBCPLS2DfzkoMsSBH7wSntdM2XmjdYhqsUmhdumVcZ",
  "key4": "5U7ng5gmqrhyjy8YVvQktFn8HnudREKfAj8NrrtGiN52h6atE7L5mEDiSFUPrPy5tvXFA7Nd4hrepwpFFjgakGJB",
  "key5": "5GQwwRJoM8QCz9x3QB4m8y5mdACPVE8UJuZpkEME68LBo6ff4MspeNv1dwCiQsNrUE8xbSnh2sGtWe9HLnvB8Czz",
  "key6": "4r52mAoH7weFYmMKMgQ8RbPzMnVJibNHVQ2uoEXYZUahmwqY2vgpGfvNF638d8qASdKE2x78gipDyotezBze4kRq",
  "key7": "2oXz1RzaPTPuF2y3mEsnBx7UUYVtBc9SyBcNfdFoYtXfhkuea78v8t4ZWw4cdJj9jmZCaNH1jToxQW3QJ847nRMb",
  "key8": "43831pQwepYAiZtHFkQMinpVZkbSP6bvxuUAkSUocCwRBmHHZUiJN25KBcQ7BhSJZScsC3yaBQv2qH6QMV2me4wM",
  "key9": "zvdqMz6DWRGKTJiarCbGfAA14zNaNRGsha1SSu4V1A2919eMvU67Zv3ttTTxSRh9WSeoYFdByNQLyFFeTkcL1ni",
  "key10": "XVqNK3TfCTfxUVRSP5CL93zkGjUVfiWU6DbZVsYRayRFSkZNnG3qq5sdovF3KBggogZzgfDYodGd4yWmZoQ9J3k",
  "key11": "4PEgMqaEFLh6CDevMNZiGzAu1moMYk9ewDhEM8meybk87oADi3L4DmfNsWyJdrX3bd28an4Jc6NaRHfMWXNijpop",
  "key12": "5JM2RPQ9PHDeegLpd2XMLsdLRzZswPK3e8sj929zLsLJgq2NaeDa789hVdyfJoaUkrNZDLfRAxr7TfuBxQQv5jTV",
  "key13": "3Su5FYscR2wvFG4hFmacTWZYNtZuKdYnim26WddUoyva8h3foddzYYusFPVkQKkKGtp8D5Edj4EbPWRu3LQ6YB4r",
  "key14": "66byhY4w1gqgSGX9jxGmMgeCuk1hmhxpPdsR6QT2yPesbSuvECLDG3WnurdYmvo8N5C2ExhWrxNV3Ujv7CETG79W",
  "key15": "3f7dtccJ2YvaQg8Bmp8H3kDgtRNYrgKK1cdfLoDvZXb2xmFNsrQvSooWgD5caz1zH7khJVcUGNhT8TZBd79vhaNW",
  "key16": "2DSd8CJ3nN5DAE51zZvxEjyJMxFKynQKBJBfgdV4v97brD767L2TH2UziaGzc8znzJBpLfdmHKdr1SvBEdV6c4zW",
  "key17": "62BPK8jMMFtCaYezFgi8MFBYUGX3rLgPXSrNDi34CnufYr6gBM94rEmxKgTft3ES8HTr1SkDRHtpg8wpN7e6JjdA",
  "key18": "2cU8H5jmrELNz2FJvsr18hEFhfNCGnYRJNckhEu691vXtJaQZ8mjVx1XfCHbnzASEHbtEac2Lo3RZU2fp9sJdjdL",
  "key19": "3MtiHZC5phg9So2temfcaHA1AzLvseqQJrS4YGnHo6HxqmnjmF2CFv6pVBWkL2En21gWPHPvKVYJNCNEPdLRokUf",
  "key20": "2Mmpck98j9z2JdyNzhZz6xqqjU5scXbvNt6nZ7TWLNKHMZJ2MsANMoZqWZoT2vzHPpA8MKMvsXoeGxvHCYC7L9Jk",
  "key21": "4tDbwrEyJ4DjemM1SWJ3f2Tue5Nm8mwE5hv4WgtQxYUXswBqPsHJVci1NM7Kkt6UiWWt9EoBYQZcPwt1z7kBzSRB",
  "key22": "5Roxu7MrEH383DWWRPzRvUWwPHLpNWcKFtnSCo9oZYiwZf2TXsu479FXvJ7KUL7QhGR3o53WLeeZhuJDCXfw2LxY",
  "key23": "5SarSgEHWiv7o9XU5efS4PLL6Epo4SKZPJBxYyzDtd9jr5QMK45iwNrogRzu6LK1gXFef2augF4tgQugqESVup8F",
  "key24": "B6h4ynrD4uUkeqeP6ELx8dpgub53qDsiJraccnCi3qHNAQNGFn7pQjj9dA5zNzM5shQuNr7ByJM3Xe92HAo4AAP",
  "key25": "4oKDx8ey5y2w4o7QMcJ2FRPuAQU4KUF1kkGWfQkT4H8qzw5MYfWTTCd9gUGpBGwLe7j65sAVhZDVk1U3C92vxrG",
  "key26": "622SuzkdX8q6iDJVsZsZUnmLRcKUYMjNPXjrYbtRuvVwKr9ET9JZeP9kkrGDzkL1RCbUjDFgZj1oSYi9fba8w4fs",
  "key27": "5RDSUsMqVHVLBf6DHJw4LEup2fuurjVDu6c3WDeY2s9u76XMT1YG6xc1LKJRvtXBQdeNBsn7sEqsD2M2qXQPSJA4",
  "key28": "3wkziPLhuzKFGkmAiemm5Ve74RnAtuppaMUwhxvX5QB6n9F7zioW4y33hbBUaKUsPbWbWzDxgo18NJi6BwwP6pDZ",
  "key29": "4MSTUQ4CoCyPoMZTzEBHN2Y4W3GuzKN7V54LRvPTpVHXQivPMk5su9JiGdGHk5H7PNbvkvYrARXDR89cV35goTt2",
  "key30": "2vfBDunuAMje3TJ4EYVP8KwShAmcxtkWc264vYZ3qpd6M4fbuStzJvcWXrmBZdtuGhVLd5GEjESa7dGFQhp4uKRq",
  "key31": "5m4CMaBn3ET1euch3458X61d4jBPHCx3yMspsrdP48AKbYyZdaAxV5ZUmShxEfAJ4dXr6fFrTs91RF4Nb5VHcxkh",
  "key32": "66BYToTGPLB1joguQw97Bpj3TqtGpZWu1ucbnjE9RPG7spqEzrXzbH5FuNwPbhz7gtLjBua356VK6w58j1Xfidda",
  "key33": "24GWLxW72NHABJYBrF8q5mdw64THJGm8bm77yB1ZAkynfHSeV181rtYsQaFyK2pLEurciHzj3NyYjf8EfHUYfXnJ",
  "key34": "2aNekBrghNyGoVoUsShP6qcKwrCoDCNkEfN2Jc8UpM3E6XnBxrWz8CpnMidwEJ5n4a2uwhsEdvZa1JCFJwzsnCJb",
  "key35": "4wkptoiHCuEe7b1uurYn2mjrLtYmZAf2osWgNzfwSiPQ6dC7nseZGk8yQ7z6ok5mxmdj1wdgcdaEpwuG1pAAucip",
  "key36": "2XrKdnuzvnpXd1LhbcRhnhZKzYM2Wje9TkKnUiPcVHvVjsamBLim5xYv5Kd1bfXbuge4gYY53AB5E5CFtLAZCM38",
  "key37": "25x1ah2sorTixYZx6odJ3NtTKLjCesokGpMkHFgWhzg3TPPSUUHgjLCM8gC4TjrAZQAAF4ae7d325T3ZX8pmgBzW"
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
