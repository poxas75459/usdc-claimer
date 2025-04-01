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
    "579PZyZzLoap6vyREbLnxuaJTkjC29b1WYiRzMumQ7AB117hhKzbowYTUPWULvhvM8sFS1Cun9LfhWEgfykiR3jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hwayQ6TjxS4bo5DWdNMEtAWEgQ2XjhrJFSdC2egui9YFtSxwHkV4L9SLKYAKorsnnquVkapy9RBVVyJ2PU8KZB",
  "key1": "3mM5crALF9ti5bGyms7VVZpNzdH5s9f6bV1tWFBachSzn4gUUh5t3xqa27fF1JCgg1oyJ6mpuHCFY8TLTuWzB5L6",
  "key2": "5i1rP8xK9eFVuAqTj8WN7fViTr9bUfPvgP1hnXuKpm4Ld6kk6MnyESRJUYgkByemNTXh9ofCxhvPxtyPTge8vtdj",
  "key3": "5mrUDDEgNKoiurV2AmrDvaJrkd9SvEddphqc3mxoNFpQdAchgibTyUAQcYgBD6eLKfewQGsUthQ1sAf1qEhBWia3",
  "key4": "4L8BXP1CvV4Fh4TZ9GRRLgbPQGxim8H13BHqhYnSChVECpgekb9P8PV79QssUxD9Cf8cNAuGjiiFHk9YEzC8kYFp",
  "key5": "3NMXmpnUPzN6BkQkFAd9NMDSPm2LiwyCXb6uCkCuRf3M3Ei4yZEgLb7xpA2g3nikDywLmXV8rxs5uYHnuTiZVX8Z",
  "key6": "3J8ZZNquKg4mtNtiNnTBKKrFAW3tZ3ymiuNcG2oz5611RXa3gf2XEg79VSbtfM7iLWoXTCjWrZCoBUjow1rBk5tZ",
  "key7": "2cbN2oWhdfxrBGUGNLvf1dHxCEcJ6CJSAugiwM3mNnFt33CCgQqWzWXMHgNC57uFoB89YMHSnuF5A3rugqyLocUH",
  "key8": "4eV4ed6GYDwhzkKkeEYeDm9FwhcRvQyFLMx6EHq9AbFUmhFc89YLuhu4qQSEeynwjKzgfDpUWGkLdGGdNtXed6Ta",
  "key9": "3WEbr5n19LehktFd26y4hPmT8HHMFkDa21CpbTBqLaSuHpAdqeCD1yo9ZvvNRCDT34c8Tuiavx2RWnLcjjx2sdYG",
  "key10": "2NiSCUV4a2aiMExCPabbcNCEarGspSPUj97gqD9yRfo6fHCSyXhuJafHajYb9UrSBLRy43UV2mQKGLfBZgr1BcXq",
  "key11": "35FTMSvfi5oTRzBfXXDQ5Y8495sCmUNs1KQZLb5swrSzpSUPotjdmHcFAxmQtQTSiBiHJEBF6BvvmDoYjrk5wFtN",
  "key12": "3Gt3uZdQpn3GW84qVQchVqF4FHoM1KCENVX5P4phWv9FBmqZQg7WDNs6BqYm9xHhJUJkoZvxEauc7HwUzjoVdG75",
  "key13": "5EawiwSyT9geuRFsqrEUoRTRWqMsGu5A3BH9samD1AomxyfvhDKZsUzVR4GgoL5qDsUCWubJ1YEYr1iMmKmdxHdc",
  "key14": "3xwcAmr1w3BvxVPTEFSPm4KSPSpbbpNiCGFyWr3pWfPpyHABEajJdJ6vR8GPsfBVHiYk15CjEtdYnmezySfgcmX9",
  "key15": "4cv4iU3BmXmVrwbDb7BvBvYcr1cTk1UmuaJhCWMoyzXfZGCfeajjuMovQKGk5RwGdfofHTmDAr7ppyB2NJ4qe3Cv",
  "key16": "5miVkGtCHqGXHeHCVP4ZDKDjzwCJCCbo32GaatJNbBiHa2yaroSAjqFjiznTfPLgy3SYKpmkewH8DpTnfu5cdSL6",
  "key17": "2yAFdJJSLZKXNT1mcFWJ2QjVHrpoAEKfBeymMNqCRyjj2wmT6rRb2ociiBWJYTZ2SWKo76nuckKamyYBduefwrgo",
  "key18": "5121GEVPs8VbjrbHBBF3Q3cxHgFr7qp4yCpGwDbHtX6ju16mcZqFixoVqgaoi5oV5iosY6sLBnizPgNdgMCkH9hs",
  "key19": "5ZnyFzPFgHTYckbuuFpihXd1HzpLEffi23W7ZqaTCHsCXJrqw2sTzmNRJQXXm7g4p3Y11VHpTP35SthcxYdMKb67",
  "key20": "45q3ogFFMZyA6jWAC9VWsuLgsVxq5KtGdrCSYKiC31oDPnmm5WY4KSqLYzDSpmasNQ3okT8NJ43ZcyWVXmTVsCRF",
  "key21": "5rW1grXGmVC6KYEBXojwFYWGmypbPg1WpUggf9vk9WpQcMuefe4JAqvRhehXNks16siQQcnEBcJcppiZq1FExbK5",
  "key22": "JKVnx3Q5qKjSaeLdnnyqDA636Jcyp6TUhERJXqMLZzUPEotBcvwNTunPXr4AaxvidDXgbYPktD6v62EJrB8aqN1",
  "key23": "5EnyoV3zK71m62vV6vweaVqG8adTk5C5EpByN4TuQrxGCeSKEGXNXqPyZZrCrHWTQcpMzSfFex3DeoxEEPPPtu3K",
  "key24": "47Yc6y8BDvsRNpgE7o4J2cWC42yvd3poyYsu1ChygpUk4Egen2WQp733e6avvEQePSx3nKTRtxHqNnTomjag5SPY",
  "key25": "4pYJNwMJQBdFrKi3sUHb9FSn5euRmoZuxgKX2WMF7hH2AYMS68XVxRoo1Nc5PQWVSNaibX48MkidMgAjnJugyv2N",
  "key26": "4cPZiYe3xKFXiFHR1HzZLKWaUfkFpeYZycZr7mrKPEG2Rp14wgZHbUahvFGXrBcngd3rq1ehDb1rgu8GDNzweuKm",
  "key27": "3AKVNLkKoWMxkeDWW1YTDg7caHxCQVWZR4WBRXdCxtEEtF1vLUF4UWAwRGtCgTPLRxz6eSCWWjCUmivoQ6WLM13b",
  "key28": "4FY4R4NiR1UEChYPc8bSQcRDgvVwftd3AtpTSvtQTzgsBq8dXGGVDrzcsccXML55sCwS3NAnc1UXtSrvG2cLEMxo",
  "key29": "ggc2aeuvPMnBfxa4FRekSkvFhi65PzYwn4YscuKoPQKW2XmhNAwdxgVkCuF6rsiXyR5SdNV69tp3tNjeikRC2N4",
  "key30": "5SUiMyn2jiARm6XXJDwWHSJJkxS3yxZ8EoHP4MBeLjBSXiLKosvhyKFPJKPjiKKAPFZ9idw5R62CV5H8uwSvBZq4",
  "key31": "4W1r5p1tncrLqPRv2fdYGUCMys3FmW5mS4AZBKUnmfwnTdLXNLTbtmQ3TdJRwSvdfKJf2yE4kjh1HRV5wiRz7FZB",
  "key32": "4vDfCCzwQHJ5uLytEi1TDZxWoVCFXjhMxZqZnT3PAdUnpStazponAMU5objpyZXaEuYweBKJp3ozHBQD2LW8CNqp",
  "key33": "32JHrTL8zkQBL9PaYVbmyaSngCCZwtALPfDcQpmcUsxycL5Da5jLZDTVKVsgkvgvbFGRwE8HRxrJxhd7ffHr6js6",
  "key34": "d17iBVQzbV2SaA4w3xemV6FTqLWqtLry4z1AJZTNBNVY3LRJN2CCQGrNG9DPicfBLUp3DgdLFgqFR1H92UeqksB",
  "key35": "8ip6UzjsQV7gWmfwqUWVQq6mZbJPRwpcimX6xtRpgubPuY5EDPu6DeKVoT9V115rAURhzG76vv52E4LZGT6fEs3",
  "key36": "4zJxechP41TF8ngSMJXoWd6s8dhrmjQfvnZSREvySgiDMwcfpzX5KiMP6x28bqMLSwsSaW32XamTi3MVjgvzqMRJ",
  "key37": "5Q6mWJT85hSHBJCgiD7V92iNdYD6aB2bXeL2KMY1hQ951HQhsrBTfLY4f5VDYDmV8TskkcRNJnPg2mPvktCJuCkL",
  "key38": "45eTvAh4JRCvdRW93S7is2KDQPhVVDbUi9i8pWnt6ubf7b5xcNufMMeS9m5UZcKUEDpiWWpZUmAUwZVj7YycjBmZ",
  "key39": "4YACCmUxhNXKYmJzkgVeuB4UWEu1QYwSv3SqJ1UZngjyk1ia9wDPNX9HzCGBVu6Hq5zctaJ7yWAxiEHTfhyHTCQA"
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
