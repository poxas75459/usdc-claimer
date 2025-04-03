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
    "LLzxdGmHqJg2xgt3tqYaHATucj7jZwHASwit3WRuMaE9RyJWML6NwZ1xpGpyPLLmKHc87f7u1NzacWjSKvPxrPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jSPQNs1kbQQY7gmyaweoEoooPChnBLWBkb4gY79UKbgikcvG7cfbHznxq6ENTX8pgr87rd8fmNYj23ogXsLfNu",
  "key1": "3HfDamyNfjZ63QH6DXfSBSmYrcsAKvPwUxPZiYQfnRWyXH1gdvQq1QtaESkuJNWPgMVNG48tAoygUAKg6Vi859ra",
  "key2": "x7r8oLkVptCBan7f6vHhPur6E2k5LfgNwuA2wH9F9QkZxuFwBgH4LvFc138ZxuoNp5S6BM76wvWivbmCQwYRYEj",
  "key3": "sht8w4g46DLkmDpcxmZCjeZ1s6Y71XxPfR8USCzkYbaaTdrMdjeSHKB14r1xQP9TNC5ADcZwmMJsZaFLNEM5CYC",
  "key4": "3UUsBgdw8wcB7WgFc7bs7PWJWMpHiqQUiFhaChTRo1pRbrYv3HXYS5yh6y67iNitZxcQAhjHAAnaX3yFesoQK61u",
  "key5": "5YLMUkSYoDAKLH8XQuiUm4gZdC6oUHqe1xAveJcE9geDKBexYyWe9cy39JwKxWn2U8a5TsG1g8CoCG25J7L2DT88",
  "key6": "55cCXusPHUqvF1J5kw9Bqi2oZznBkCwFVQjUe5fFV9hZ9CUb6Rt734Rdu5ThKQgxeW4GK2ngbdk4tA1rtejPP8K8",
  "key7": "5tKb9iPnmFHWAmeNW4Wbtr7aK1KxMBorYxyznSWCQxjJmg7ciZfirsHnwTi9HF1hf6Pv2PY1p9NEUV8GmfiBJhCu",
  "key8": "22vVGBfdSUdZaWhu82qF9L1CUtSFfH2iFJPhtb42b9qfvZLDAf97SFDsNURUUdQmLZdNPw2qzdRAUczW2FJ3N273",
  "key9": "3h9oLf6HVi9xvv13mWZZPzF6EmtPtFod7gSD1ZAsrGnS86Yt4xWnVBzDx61xcPeu3qj5kH3fwB52cAuzReYRRTje",
  "key10": "3Z6u49RG2FMcJRBz34WJG1UPQXxx7mEwoEr22PMvUpKVLbCVd4epqRY5MjacV44ey6CDJCfetZ5kJLZkihkKMmVG",
  "key11": "eeiLv6t7bwYx3k5vvP5F62h8m2ueQZSsLxYMgEPBAihHKMiuT2CpFCKhBz2oMDDUpHggQUHCoc86u4VqCKqpDNY",
  "key12": "63kL4ou6DVJzpzC6cpahgA1wf3p4qLLPBWAduucA2ZzVtSSqGNaNHZbKVr9HnTZoh7aKmgf3ZgfFQNby4z6dCoXA",
  "key13": "VM7SaCmUSGBMtfsuyHJVMWuwx9k2R3fzvCd2VofPHUhosVESxJKmnzSvhu9cq8AAxihMPLxUEFfyqYhXDSu1YgL",
  "key14": "3XNGTFCeX2gkq75VTZX1pkmMfbbA1TY6YFkfSDRwxkc4Lso4G4qEwfyF72HjBkWfhG8t7AXL5WQSpc9warsF1h32",
  "key15": "2QQJzr2QC4jpRdtwFqcAcq7XFr4kM6gGbUpgAX2Fh5Cc5dzM92iCbij7USDoJ78th6KNvAA7HsDoMiRq2iESmDW7",
  "key16": "5WgB8nd47oBh1EpqHHJQ6wEHCjupBankE9DsE2HZPzHLn5LPfzEwtnUSZDWw4QgR7mmprsPTB5dUWTobbo9thbZh",
  "key17": "7wPqPtQB3wMA7aeGY5udhYrz7fnBAp5iHJgx7L8p9vnoKJuvVuCkrzbgFvZ4Z8Ci9hK1XQ3GmS8jqacHhiau3QW",
  "key18": "3wnwuM93mcwgaBeY1GdXEh2XrH3sTjJxGCrL82obLLGrvZdZSvxy34krfVVeUDu3x7uJPCkULJtfTUAn3kZnqh3q",
  "key19": "5BnqYA6G5cTF6J95QXC48cv3kacjFkyEBqdvP9vZriHi3bzjGmZbjuu5LmkH3B9yxu3UCdjTjeKJZV5hYARnEKkn",
  "key20": "2toLpZVxeoUfD8wRCXS29fMQG8k9RLckgTjjfQkXLjLm6AEqqT3UwZbHr3UupqmmEiGTK2L3QsEwEDgPhh26cT3o",
  "key21": "23F2dAuDsbRedGAeDM3mrdvX5sZvLkCuXRtEdj35Urz5nL2C6jTTFw1RvgSRsyR9U9pW9TaitfnjwZLBnLgA17zo",
  "key22": "2TERpropAkXevJy2pVaQPWMdF4TqdgmbsTbvtM5MMbWCUZKTzkdFzFMLLsP6Sn4eDAF84CJ5zVeB7vbn6dM3AwvQ",
  "key23": "62xNjkfZV7xkWVeqJ8fodC2BT8NWWFAzyQ4R5UwLnz7fyfyo1fBre5xdFiL5GcAFX4gbEEouAf16xwZMXx26wgQE",
  "key24": "4izkm8YLdZm63ka5KGG5tysW8KriX8bWv9sxkfd92yKfFwsMN2ennRungw3ChoU5umKP6v62mu4TcM9cixTN76DM",
  "key25": "2zsPX7GGqEjjMvkJzSq4uPfnZ3NRaFU6DLpg5dQnJNPkcCW7uMeecn8Vggjt2xDXhnL6aY4QV6mWrc8RUkpq2j27",
  "key26": "35yWWPhT8pfKMb3XxqQXk888doZmbuJXFr1XUaJbv2yf6BQRd23npaweGyULji6di9AMVQbBFqQibi2Z3sFtVsyt",
  "key27": "3MEpsBswdgFig1QhLLqiaY4mP1f9iB6K3oHtxwpkYKQYBHGuXmSiWN1rhp88dyxeuWnjszbb54DEGskQPBgbZmTN",
  "key28": "3bsKZrAjiH781myGmQ791fMTk6KWofspdSFRyEbbJqKWGN1xkyctxXj9Gt61pMAmucpvVWjPwCoYpe91DyNoXSHL",
  "key29": "4KWxBcCraDNVMPhS1ZKGbAhQnUxEAw5cXtVdg6yJZeqdgAd8DLLYqf5ZeZptDWW9hQ7uQnfnJn4DmvZ21nDoN6a8",
  "key30": "3qrbYuL8WvCH8MQWkjupmTJUGV1FsvgFJDwErUdLpmgk8fax3CXXhpv8LMdonE8Ayk72aMYStZ2DQGBWzWfSSSW2",
  "key31": "55535HVmcwAsZWTZvtGLzBc3KHTcP1gzD3BVVFP97FDCsE7tkuAw4XFfQHVawttzDH8q1qxujLgVi7wwKZ842cR8",
  "key32": "3q69msY3sLw9bFn1V1syfydudvyXT65mhvmqRuoAm4m2zreKn24GGzZqJ6ot7bnxN9wo4i9yYSt8YZYopCMnnfux",
  "key33": "Eij6GEY4KERdCmCenGoaVwu2pYABoq6iDaGc5wm6ujC9QU4SqUAq7Y86z8HUQcqx3cDK28qU1utpZJo5AZtjmPi",
  "key34": "2PpKUyvrayfPDFutw5qbjDauavBWKcWKZRJQinHNWn5h65W1e9CGZmrFQEAduLPCF17jrGk5cNXGFDxQxMuBZDBJ",
  "key35": "2FHjXTCN8z1zwJDtP41vRRGdE75m99PtboRqMmiKtZi399EUr6Ktmfk4y2YpVosCPpn8PsUeNs1m1eZnJAJbEZwr",
  "key36": "4bpR4bYDm7XJPr5TFiijq517jYcUArbv1iZRoiNvCVwJVzajFMr7rywqfoKryLkUyjzkjgbNeQnke3qyLf6u5f5A",
  "key37": "3kHYAw7awjTKV4jaNytQF63s7y2uDaCDJRxoxSjJKjBXQ3v21tHk8vVyG9MA1mUDdoE6Lxu9H1H3KonBnFLzXBuJ",
  "key38": "5aGwCroMrTLpNdEYeEkmDnHn5e32ZBRCFu7bdW9qCeozzSxCjTt77o53VWSpoxuiitNLamptEqw9nLaEz6yMJFAf",
  "key39": "Cw377FcdgxZhzH6FEKZ8jkJ8B9BZ8WB7eKsSqTcUi5zi4159MSrMZrBgPbmqfhQuKBLWvPh87abVepwZd4ELtpG",
  "key40": "5wFVK7JRxFK6aJQd44SCH8uWNzpjQdQLRrr7CMQXF8wzmeqw62ryfzqHCFsZ5i5C7Et74kWvgupbnYWtuGLTstw5",
  "key41": "2W5yJr5hoqFtGSaDYWScvwHL1rEmDx3vLCemq9sqCGCRriXJDzaMKozW6L44jyzTDZ5tyJCyM8NmYJkMN1JJSnAV"
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
