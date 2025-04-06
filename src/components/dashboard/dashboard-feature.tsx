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
    "Gct8VoxAEXqu7QpJvZpdqvmuom6KQkGSMupwcxVkTwp5vC1NxWWVcFcAwvweSaWQxW96yBDXzP44YZsDFuJ6P9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tcr9WPKxerA3wguq9ac7MgDF1a4a4du71YeCiGES8PGzzhbETMfgEncyHkvsKSKHqqGEd4R34kQPho5vSoWnFyo",
  "key1": "hatEVD1ujqamTdo1gm7rq6ccDWCFMJd7cjQLKsGh6WDArzwH7Pb1QhzZs1bD99uvApCj7uwtVwTMa2ELLKfjqvt",
  "key2": "h9KTEnkfEQkTZYt7mvP5mp9M9buWqmnkTy5csuFrwhE6v9VCrtyYFuRhyXaPQTWtM4QeDiJK8m1z91vxkGc5SyE",
  "key3": "3QqrRzdEJVhsBnwvZncAhaj16bsocy9LoMwCcxwcJcqBSBH98duQndxvfGZFwtAeWnfbUZfEYhfPkV1n5mHCohwA",
  "key4": "4ZyxDqZhsWZbGXapLD2hNbEyfaqFn5SkSLDNApiEzadFjn4UQ5NHqtnmohHMqEFiG4yDac2dPhdnS77PYBmTw9qu",
  "key5": "4yK2useoFFqMsWwN3KDmDnHWzZehDJYPvPi9ELD3YwGGTgZM26mACiNaRkx77PvoiFc2FZn4oKb2C1sNeMFZ6Jbh",
  "key6": "5eptSDbuEqqxn8TFNKi64bqZWuKhPc4qRKLhi72QWbFYf14wx8QoMtMD1BTgsBKvBSkGnoYLFYtgoo793dm6A41q",
  "key7": "2aKwnaxsYYXHhKow8sbs4eh8yQpJDcnYNF86Eg5uZZpEmRwNN1WtihXtZGPkz1jZWnpkDJ97v54PCHUA3HGGqFWo",
  "key8": "2AYyxzyYiV2gFhqP6uakajzeBG4wH4okBPm8L1wHHsAcv8KZefdowWrmPjstW7hTFL1ViSxX3hegxCucpMNAy8fa",
  "key9": "2nwEjNJekLTrCrw1SyWxunHYFsdTGYKsM16kKd9QsPVyFoykFR2nH46jzSHhB8QfhB47RgSsG937g5hh398kubBC",
  "key10": "3sh8W8sVXsNHMbwmujSAL2t2kwUdJGC71kCyvsszdy6YHS7ADWi4hfG4xpsMYKZcfES63Hr7YyhwbkBmyJ5My26b",
  "key11": "4a85GEN4cKKhqWFASJzUH2iteaTryu1NGtSGQpRSxeLLhZXscBQiGT9AjsixaMurYv73i6gBRKoocZUwcBEUzjHY",
  "key12": "gNF81DE5StjXJ56SFff6pfguDMCfFzu4fJnNps9r7xVv3ycqXJRptWmruffMbXmK5cfUC3tDA9ZVrjUyYKaFpYd",
  "key13": "2vtdeh6SZwHWXheAK3EJuEUwAbM4hfxwXf69Bq1H4gyGxbnsWVVhCEfPLAzjNLTQxeed4wYJ7kUw8UamG1S1T7wa",
  "key14": "3Uk6iRDbbwbKJbUtapatz6bYTaHPnxtykbN3DRNc9bDMWubrwt4AKpSnL7fpCxxb84aYVWwTkQKkniwgVPumUiMX",
  "key15": "3CJCFeNCxGEc8fwQJSgUohLZ8ZDsWufomAeuFavSRx4Vc1eRoKt36bUCc2DQu69yBU2E1BHD1ME59xpLPuPbb3Kx",
  "key16": "r6Mmt7VPqUwzGKPR3ugNrSAGk756Hi8smogKcsuPnzkhNh7btttPUsjnvWTJ58Un1M4pw1YzKcsTcB4bjXAH6TJ",
  "key17": "47HPbsuN1pcTiPdo7UDrEc3GjGiYCWGvhkd4QL4iHQiwq7ebg29GQgXtPhFZEW2FgEJrzbaNtoK86ufPhVbir2rL",
  "key18": "iK694BQ6s1iBKgDTi3XhG93CYqb9yLmXzHEK45V4Lx9oLD78QXG48Xi4VM6yVq2sj5iV75xeRsYYZUZf3K8cJT9",
  "key19": "TX8ckB6uda1nWuAN5t7qyRq2VikmmKWxWpwB5iU25qwVjJTC6h6iJDY889bHAw1YbBxA8eXrDTeMyWCfxbjCz8K",
  "key20": "3JxtvVJb6WuXyuq5GMBgbjYikKLj7x54m5wWSk1WAwuVFEujvg6cdhBR8iBSmb46gkRZMev8K4ZAMoEQ27j7DzUc",
  "key21": "3toYWrQPoWTEG3TQz2SYtT6izCJWsH1QwukZrPKoVtAJBjb9Dc4oYDSQF3xu8XrUWXput58jT6U3fPcdB9niwVW4",
  "key22": "2p3WCX7cH5rG9hhn7LvQk1NYiarYqy2riXqFqKwJXPPy4nDUJ9WYQjMmcVKZKHkXAdALMWwBS1CThFM5eCczikNt",
  "key23": "3pB6pgdWmgz635GpnxxU5gLktgbXTtDJ2DTKjuM6KFxcKSzpCJg1wWYTp9EGXJDNAuwaR5sSJf7gRdR4MdUt6Pzw",
  "key24": "4tsVPxukvRmQbTcLDLAxpt1LnDLY13apDjYUXZLiD6oW5FAZ9rjDx8JQPfSHpiPTmp9NGxtYGvYyfJjtMNDB8yVY",
  "key25": "472VaepKtFjyRUjYBJwAAmDSrHzgDh5bUS3k5CDhLFNrazFSjkvzPSrKSHk3qJf1z7m62AWx1jLezZur2RHFmhJE",
  "key26": "C6fYstBLuspQX34LEXTcGR9fSnsyPxNfGLkA98C9oAcEifyWy6eKjLEdZAu2maTubdUnKbAb7NzFvwBWAyKLAca",
  "key27": "2T33wYzAUjXvkdnBbyFAirL1j4fgxHADunCnSSQmdLifZUtdvTcKXW738kbMformaMUFKiR9UQWe1UbF1eBuc5X2",
  "key28": "5bqz26DxhYNYmvPJJQLyB8Y7mSph4K6TnMdc9D9EmZwEcmuU1zTvfqph594N7WPxjd1mAZYTjLBDYsN8PKzkzdah",
  "key29": "4AxedEzJtxtcoWmPrLP98gNetWYkjcbjgLkg2kzcdJJGHBWbJiqcNzZjvBagNmkrxQJJgG3vgfcE2oWW2Dgx6hzc",
  "key30": "5ypsvhCYmnmHMgNfBsWNDBYPgZq5WR6QyXKXRSo2nsfukBvV1mH3H3ZvQpqR2XimchtwBjkyE94sPxzFK4moGhoy",
  "key31": "2zqcrmdE8QxVobUEtZmreu9SLQffipDKzqXKk9NCEVsYiNHz9uE6RrL2dtLFoBXYqCMfUwfcGfnXJZKxzY5fD9aQ",
  "key32": "Q8KjvJLeXv1nyzdYHXemSWCVoQrmgyfLVqGVSiyJsg4aGQT7G37Ya787VBWx1JgLiH9oWfTaH73byxhQyASKX72",
  "key33": "2VVrQsrfNJikssZjgbne5URajkqYmkhCpidp1xpqWWo9Nbetg53ymfaE2hgifGEe3Qy6mgY7URDLkeZVXSXR93CM",
  "key34": "4bLLqFi5m6xANABGenx2nN5tXbpm9NpTvCtUTwjtemcHfb99AnqiuLb8rHYz4SbfGmASsRtCJxy5N18ysgfWsczd",
  "key35": "3ybFFUCchoz9UhSF4hcPHjgntXHnpWBesMSCBA7cJMrTAtBs2mvthg9KctubUfh64Y8RpvaeBQ9dWbdGJ8MYmJnn",
  "key36": "277xGHCwhPsg5mES8dHFChTc1WWsuKR5Yv75KXfFxrz6UAK81Fs2G18ypP7ZXFdvqMfK4cLMw2NqHc6YCRk5Yx9g",
  "key37": "571QYZLnqWYHQy9f6XCSov7Vhey6ihd8bTqauuZW3sD4MNtbT4c9rkf5jUMUJDEBpoRarZiiTfwUDg3fRmLztQif",
  "key38": "3X3nhtoyLhX6j3ZcGobKCejSBwpwi7YYou5fqaSnxcp1rdYyRLAGZJqCepdUZnQrAShpQ7p3rPw1tD1yLAGjqZhM",
  "key39": "hU9X5BckX478Y15ypiRH5R4gCmyPUMvPduRfMtfDXavjcNL5w6YP4cM3m4WxDNWpDDz6bKhCrFefcCCk9XUYTHx",
  "key40": "4XbgEbrcBmCqfYFp2Xej4xiFVikrbwWSypL2EXJmUtL6rr38W1h7hg4HDpznE3UdcSQZNWsx8QW6RZKkwRKtcbhc",
  "key41": "2SdwdS8ZV5HZXFFX7x1mGV9TWNagtEHfQcYxAam2tqNruom2YvudZNkKNMGh9J1JRfWugis6aZ6Cw6VSoA6AiApR",
  "key42": "5dimP6ptC6PAVBK7LnfDJQWwMu1E1F7MTfWjQFjvtgTLN6dzkE9nLprvJDvATwYWEeTdvGxhVxZKgkf6tnMkk1Rc",
  "key43": "xSLs7AJqF7Y7FnQhtfGoXZeTCZNA2vdQHEq7bkuX5wGJ9dFKzQhzjmwUFDgV9ziy43LeAqgRAhpS2wyeTYFCpd6",
  "key44": "Auk186EJtpANFG2EaQVNePm8z886VR8VToXkCT8ZH8uVfAcBqAmZPMv1nRhdY4Ak8z7gogik93iaGGzRJUH99Sm",
  "key45": "3YLcKp9X6mdP9JenuT3yA8cXm1rNxCoqTJerGPp9vWaGLk4FyGgBFFCmR4sk84N4UE87QeJZrTAyWUGJmbRsxCpL"
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
