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
    "4WnAeddXe7Dk8VjXFHoCtyF31EDyXNj9qwUU9wPAQZCfiNEe2m7dVj8mBsP7GM6FrGtLxk3ysoam1DstkTLY5Ww8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TKbyezSukB78jgJ8QWzGANJ6QUhKBZrBpPkPkrc46XXBkp8XbPs4yoPR6ewJFSaqERCgQG4erKyCY4Gpq2Tj272",
  "key1": "46aap44GsvSx9EM7TQjCoMU6YoGj2tcoKrN5TjwzH5Nom3LJGzvaVAPH5PxFNKSAHrrtuGSQBZLh6phcQ5YuY2Tp",
  "key2": "3CTbDDcuPXXqVYeGS1vExU5zQ7z7adrcbaLigQUfLKvSJnaabhYjWTRHNzQt9oZ9yvC3nws8waFB6KBvgeyLhpGX",
  "key3": "2oKPijdSzscoEaXTdFnreC44ayREjSkuSpksQWCwGhrkHisxvCVCuwnQtH58J5WsYV7SGj1DXAZadskwgLPYpgDL",
  "key4": "3pm3prd5UDWKQhj5LhUGU3H2TuYt6CTDEYVnLqCG8ABNhdx5PwB95Dd9QpkioPNfgZREd34G8S6jYfT9MF6Zwsjr",
  "key5": "66aRvQfkMH9yLN5GPjuYc9KDF2TLGk9L9wAJWxDSSMPAfFBNPG52Jf1u9UZ4Jjrfsoo1AjBzw7ZqNTxtLLQxABBR",
  "key6": "4ELpNPRebXJUHb6sSnzMQq5YuwKFhMBaerNY8JfspzXY4xq1admM6xMg6Pr3X7GoDNSGKPtoxYUfBsk2MjLLE7fT",
  "key7": "24NuYrVNrp9fZoVhRvmibGWHwi7BxaYZEyyFwJitSuFPtp1RkwE7RyskU6ouk86xxUc8PUyRyPoksTQh3Xs2QHas",
  "key8": "gMfQVAL5Rz8bY2zm9gWooHFurRD22YZ1hEo8eLbkRLGnSgaoA8xGZo3C8n9P3ZXTYFcmQ3rNXx6zW8ydCXXxwvL",
  "key9": "35oF895ncmV5eKHU4PrnYQfjZadsBwpDuk3C1SwHjbBqjEq9UTNFZdqkB9cK9bFR1kQJgQEcdmpM4P5hesq2nmBm",
  "key10": "5yaLryegmP1k1xJ9bE8DNZBVctd4Tt4qc62CZijadMysEfDq2hPMHRac9D1ghQUwpbSZmJMrTgyxhsWEcgwrynrZ",
  "key11": "5KUyTKHwzu5gVq5SjocS9QMVSuYMMsikZLvaNXTqBH6t7jF4C5rrSmYmuarF2Fad6MoVS5zbGskw4QTukyVBFkiM",
  "key12": "3Q23gcxGNybWrWJWsZNoEf7Ws5qzE7uekW2DA3Xfei1Np49ttGNbyRMLQ4yXEKiKsshLXoo5a4E7WzqwZFHVbxCh",
  "key13": "QYgNgE4vDJjG3JwVgSmTPKN9vZ82ha7FmvuPcBHydMsUHAaTnrfWPJ5bzfobtA2mA4qUtGoB7jKRA66tT1MoFmi",
  "key14": "1se8istRkdKeRvuVP3BLPYhyJgYnKWj3fyH1GNhya8mrgKaY3WEA1n6J1c4P3ogTwT9EK8S31X5vhqQ1ZyEH8mD",
  "key15": "41s8QeuicLziDi1ReVXxtugmpvAWSgsw59MrfdU4bt6tCjKp1CPKQ4u1JusJXQAACgWrWCHfsjR3wBgp7sTiziX4",
  "key16": "nGas8YrDU3pAhs74kUkhDnUbssTxL1MbvdDTuLfBT9Nyb82jZ57JVZvHqZyV7ujhJrZb3pv3Xnk2hXQ8MBM5hqa",
  "key17": "2rHoBtPtS3Gtzp5HPJe1PdBAr6JLUUApGeBdDUpX5bNWr4NVt5aXPiVawHPwwyUhbCiGeUbdecGPQtgasTqVfoQ8",
  "key18": "3KxCCL8dHkEcedwrxGVdU8SteiqNwQZoPYhf2RXVdTXzdD9DaWa1hU87LQmjA1sG6befp174fhgxbEKh8NwbxQqa",
  "key19": "37Z63kKQ8kqvktbYJVhM4gPxhcLKyfoFah78Hq5zzVY9NXUyHWkn5m8VnXB6HcCCrefpejrNo4Q86sbEE3RGDDrx",
  "key20": "3cS3mmpgqD213ZGwPQggBgGMNkwHgt2YbK9xnAnBdP8LPHd4UxpTCuee6DFABwU1KpafMS5xif1nhDdYTFtBTjvq",
  "key21": "5s9sU3eXTc4TUvckn8VFyVKhzXZTVjaGKxnr9LNNF7cBbYABuLSGLFJYqA8SKuLL8at7R4zxEeWZ8rrhWrJoAzGP",
  "key22": "5HpC9sjTfwfzf5VsGFswJYtAkmiUhKHzVrRmo297ecLt9X2reWPfkjLvNurhDR79qfrB3y2yBXQ7tiZgXBDDrw2h",
  "key23": "sGUkgJPXB21TFtUxtP6KgrYTvGtYEbQLHnAtPnYvitpXRQwwaV7hUE7dH4DnjLBRTVUKVtWNQex4AcjfKcfSsAV",
  "key24": "4N73mKPiVCdt1gTYGmJ1qVC79wDzGF4RQfDnf92RBfFGwiNV25CBBqEqR4GvkUnF4SRs8fe4zx2AqQ4hkebRKQGE",
  "key25": "3TvT8Yq3MC8vRabFvMHd6thJHoyMnvKELTQHAAYun2do8ypVfHsGvM5etMpuSpHzdx92Hf5erMa7KKWXYreqJNaV",
  "key26": "2vavSEPCCTtJUk7UaKb8XB4c4EWRvNcN6K8hFjHsbZNruQf2mqzjjShDLoLZqsCWYWvjBvr1QJbw83ZLsmEiVqBc",
  "key27": "5t2bFiTKPBZpsXNo3jndr2cfiedidhUg2ELuvD4ELtf3sx9gLa3FEuLZv2jQzRpS3Rj9uam8KfvPRyvAETYV51T2",
  "key28": "2jBBHTbYBFMswUegP8B1ZFcbocGoajiD5DFMgRhiCsynEbHtUAW6FYhpus7zPSX18h6xxtWs2Ln4JP66ULJqraCV",
  "key29": "5KWCZbSo5Dg48jphCXp9CQa3qWVn3bkSYsb24wmxNYDT1CzaL9G61ogSPkogHbZcNvnHw41PwEcMLvZHodnCU4c7",
  "key30": "23RGrBzMtcMSzt7hgxLBapA9TQrRJq8rP7qceBS5kwGEPoHCzBUQu4Kf6GVr8iNUfazWx7xudrnXUWnX2oy36gri",
  "key31": "2bL65rhHhdhaMhXM62NCbzASKJGh19Wv7WWELjXgtKmHfGxjRCzcnEJXb7KM5m9QiNLfLpPgb7pGtpt6Yt6sBVsj",
  "key32": "4jXfdJB7TePbwcBPE9tueQucjf5EDKmdiywxA9xRyf8km231rXCfQusKs9yyLQvBJHhvvaVt18vAwLRFWszyUxap",
  "key33": "4hF97FwRESHv4dfTyrykuPCDGvZ6JbbEwJ1mZgM2xzEbynyADefAEHUVRK27Ab9vvFY5BBht3ysKeBJhykJA2qcL",
  "key34": "4ZJuGSGdg4Tstqcy7BLeKQGwZf84zN8sA74bxFa864SFx7vYwUJeMWCBxzmvYSLhFmNMcjAJKYUCGzc6x1TX7hur",
  "key35": "5nStDnnHWQkE82jPSdaCBT7b6rwSMN7ASt9aio9jYorFiAFzd4GsguC4PFCtv3h2ictosAzyUU7e2opWvagwpFAb",
  "key36": "3QR9ztri2EW6on68ertoUkYZNvwNxKr4MB2aVmWetsQddUEWhMMrufV5tcNYgegWeTcpjWZqTwJDbitcu2PJoJYz",
  "key37": "3Dsgx2nrFjZyTVzFjFogxp8BmuEgh8ThuuR3f9mrBtpcK7b7tjcFL92rTCTQns37fzrQSNfaNTZ2gkBLF1weibto",
  "key38": "oxTfMG6mcLhEtkKcQvi6r9Lgj9CdTLYrNfSqQMRgCWU18myckwqvapAnpZQ3okUeYDUW8TfsBKQ1zpaqCruogw2",
  "key39": "415QtNKzziGxu8rkMWwLLaBz2wFDt7wTvCDYA3KZEhSv38qoz7Pwfn62FsvsiNgi2wxid8KjEE9YLKUVijJfVvPc",
  "key40": "5Tm3JrVgKfgACpYMtZDptXW6QZbJqVGuJ6vUQuftcPuQWqkHSF71rmwwne1AgB1wyoirdbzaDrpfDzvTaGcHNTWn",
  "key41": "5bbtDch4kJNoTjEVuk2kFZ2zeFB5BpdjY6vwJP4A3DsWvNyiQPrsN5KWis2ZNd3WzJwCSy6Bx4cShRCaMec6P64Q",
  "key42": "LazffvVzG4gawbjStUPPfxsPa7HSqbdZM1GLty8gzaontpM9KxvAf75zXj35rTwNHywvoCTpHmBzQnSDUZY1mwC",
  "key43": "46P1CmCyC99ptL8Qc8cTZCXDoMz6f23ziNzN72fqUcEQLATfxfoJeXsqvGSWNhYM7VVEdcBhqDQbA21t6t8uFb5L",
  "key44": "2fY9KzRM99K6fMJATrtDzAuFD4pXmoS9zJqxVbwf5hy3zzJcWWm7s7UAjZSLFfyhFw7y5y2c3ukrBLH5x9R7jufR",
  "key45": "2qMoF3kkqvpNuw2VRSb4JuAqzhYuDkKA1RTfmpSs9KNRxnuFcJqNwqWjzzqUCidGUNRtFTHX8nRT3toB54Xhjyng",
  "key46": "393WykqXpncYBg8UDd4w3wV5w5BuQSNXjkPiFCWjBiH2mX5AWyw8ZLRyabkWEYimAWNQoYMmAhFBDksvo45R9zxa"
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
