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
    "2fB7K2bgbhF74596nw6sgaS6VKXHT1tjFWDMGBbb3DecYGA7WJHPPumU3KHUESdP5tkpupsH1dqc9r8B3pbDyaGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLCmVMDr8c2iKyPvAX6zD2jgkcvB6jxUhbTTTMCTSKCHRBDHZoGYW17t5TQ8ZCMwpvctYyEuP243fW5LUizdBeU",
  "key1": "2gfAzGWKSBMnbrxuQte4fG5SyzFoQQfk5iwEDFs2ZAG34ttLBVZ3y34N5X4kmjfLD9fvrVuDexQdLmu9RWW87Q1o",
  "key2": "5K2VB87R87ET6KUYXCoXXzYhgLz8HpumDttu3qqRe3bbsvLYjBeYK55oEHsyo2MoYeVvtqKggFYwVNuDwtt8bbjb",
  "key3": "5P4VXq7N7xFLNgaZHS9p4qJvzycsAM77kLz2PPiPAxt6RSY9yCN89tniTfhAeqyD3g64qfq5GRLF4a7WNKbu7JXd",
  "key4": "2ffRXHZgZ99urbvsFzR5dsszGp6FGuyg9h3TPTC1KRkDT6d2ArpZRzok7CiA6VCzbGSxxCfUQwQsJhPbWi2ApqRz",
  "key5": "4mi1x1J9JhagwPZ6Yjyw7JPS6j94KzC5kGrEV5rzmYSuQzYsp4vfqeEggYeAPN1YWx4FPHdNXDMLp8cj78jMf1az",
  "key6": "5qfWcYjgpnaJ4YMLC2RjEfyJgSeWV34YsiCebDHoCuMzfCbo9t3de4iySt6tU6Tgnko6hHAuT6M4VsH47djoQixF",
  "key7": "61YJb7zStcGEDw2Y9FuTA1yjPSJWdJxT8o5voTNNy35XN2d55mL9AN6qBahThA2TNvZzAQyPsrVxXDFpGNYq2YaE",
  "key8": "5jauUbgzdTNzGpqW458RoKZbbPVhRb3oxMUnXpxCqKmrkgx2wJcwodq6v2JGotgT32BqSZ1qBhvuT3rnteyyPKd8",
  "key9": "2jizWo7DPD3L7gS5dYTy5TGt72qKnMU2usxXu7KKLwdFYbV8Ab9iLfAV5dzfKXYX6pyzpe8TdviRq9qgMLpDhMY3",
  "key10": "PuH4DTg2q9evSRq67ikyvVmBeAzY4Xjodx1wvd8JMBF8Jt3SJMDhDvDVodRxVyUWTMtwiuCh5pEG9yfrfHieEK2",
  "key11": "3pSbEhVp87v7rbzhJ56KiQTeHbeNNSQnjtu5qXaAmquJaH7xFCKqgvSaC6RVBEJAd9rNAm4jHsPa8oMRQiwytpwH",
  "key12": "Mcqx1hPRzgTcaR3jq5ud61qJpTcgmLY75YpF9abvFTZ9j1E2yRCnhCWfJi8n9tsBNnbKXSzeHYsRphwSspg9zFM",
  "key13": "2Z21bkaSVVohyih5HTG8ywy9isaSVR1KFxKzBQWpF8CzKQYyfkp4D5XVgNoiKiZt6xYefcN3SFc6F5B9FPFTrwwD",
  "key14": "3tmYQRHK1gvnW6htVJ9BPdcnnwaQzXspJcEYrrpVEziiTsWj8WhhdEbioB6dmrPcEBXZj28YNDrzo2zcE3an2CqR",
  "key15": "4KD1RjU3Q6D7V1QhnGDUMJNvoNWdwecALgWTsjcKPNg53e11ts2eondaojxGf77pG8Rx6HAwjzYNmUaj5T9dHngE",
  "key16": "3sbC1Rh47EwHw6vvdAWCEhyFKXAFdp2VNowLV4no66cRuEF3fzT9R7cfDhjazHhEWiWP4nwNxgKmYaXEZsMssPqh",
  "key17": "yrRU59oqSwWhWDwV7pFcxATzLCTXCy3X9BNCuVmfcuHxhdYRSs7Pnu444B87XvFSf6aZV4NjYSqnnJVH18vQToL",
  "key18": "3hbCfYbDydkUs2qLwdjzKMZUoPopatyfg3bVxnEDCiFZbbCWRSmDr5sDEdDcK81cGam4oStFPucsr8uTp2qydzcz",
  "key19": "5G935wkgMTP93EiVrxQL5XbnSeKsyadn6FtjSAeZ37WYiah1XpVuid3mYfGwAYSDyiBCjPzt2PMbbGRW6ZQPFjPy",
  "key20": "3TzKgHNkv2XMyc5zefd5LmGhtQ2pDP8bi3Nf32mCQRAsSd2cz5GyXj4aXj3i9i6AeVXUrThiVjL2VEG6EcEz8mJg",
  "key21": "3QGgcM4tPxvGURoj2rk1VppKoTQUkjbmsegirRimrEte2Z3wvhwuJzyGjVL7QBzJNfyPRjMzq3AmqvfEq7VcUhZw",
  "key22": "4dtWnbHXnctqYGTkwEGacYHqPV7yhDHAbu9izDqVj2etWtxi9FoS369MBZNG4iBZpNBuUc3qvZKKoGmbHxLSBcXx",
  "key23": "4WTovnVizjoWk4PetpLPdtPgewFvKJJ8AgSQUtqNdHeSfGRUNEofEQmGjznheqAbFYRRrejGm9Pp1B5GxmuMsMu2",
  "key24": "5SMQf5WNYfxTM2jUy6ZHdhCrhQFnEQP9aK1BWBA8Dj4S5CKUFFBoHahCciapQ2gEKiqb1tk75CtcgVeF6zrBq7wV",
  "key25": "2W5UHbKP7NTtk9ieNE62koCz5m1WVJHTtqmHmQQ9YcCgs2mVE98UFiHYo3tB3reVYdBSz6h4H32s3LhCCMKF9UoP",
  "key26": "2xWXdURm9nGrhACDfN7C3v2jwAnJ5d6bWtpvyMCWoDdJPRG5fxZRwH9Bv4Zh8vcWunYWHeyhk7bAd2YcLeG4LkJ5",
  "key27": "5bXC4XDg9zp5m2L67FcJ7sq6UWXgVMLpgeMogd2TQfa2ZJbQoL1DCzC8ohRgm7CLJrcNMxqnZLdSio7dzQxCAdaW",
  "key28": "5Ctkruq4KfDK4HJK26bQixhao7S8YQhqncxNps4psBZmHJ37jndjGBuEgHUPbZ5CB2yaJFJMNbnE7m5uYLb6coij",
  "key29": "2DCRRfo9NKV8TV2XzUFYbbxS8bPrtctsPi1LtxtAx92SNFBhKprrk5Lonk2RriyFQ2Upm1aNPV84kvgUuo798GGT",
  "key30": "4QqgP1xa5dUeC9dgyxwvTbEAe73aiFtqNDxZamvjDemWU5qiRh1rdGU5dvGtYv1DEiNE9nkJv5rLGmkQsokQhqY9",
  "key31": "4QxBkRx8WMYwZsceQu23z8UAaLX3YrUDEc3NeCoURskykvBp5UySzr3BR9VZfFntjMhKH5z6AVm5DkTc531H9Ere",
  "key32": "5nDcCMsaCzMDesbhMryR2RtnHxfHLsHwma661FeGMrygFt5EC9FJd5VCsZ8xio7ZnSYRJTBRumZ9PzcUZqrWCzdN",
  "key33": "d5hvdKD5J7ZA9KCAup4ttzw9en8LEXT322oqDMRBr6heEgEUg281KatMZHEwyqJXeJf5G3LG6PX7BxcSM6EhzJ9",
  "key34": "4StiLcvnXhJmuEWcpTFNKyNweHwps1BYcF4Sp3EoW9ijaEy8BRhXrCwoDpBpKceMUHM4qnNSLg1V2UWNCe4LZtfn",
  "key35": "5CDahE7i7YAVDJKmzPaiaKSjSjRK3eRFdvgcJ3egndu2XNfukhtCy9jCyqcWXa6ppzT7KFcTdPPzRhpBXZyiheYo",
  "key36": "52viuCWAnCbK1SVnVcXq6VALrMiZjAXP7Lah3ne8YfVfarXPujhu6jtqu9zkMCTUzWBqczQpbdEyta5feu2ysVZh",
  "key37": "3pqimkHFjmvYaBn3SkB1qCAToE2rGPVbsyk21zJMQwqGh9qdtpxfemZxgR1GRoHAGBfpqZQwHSVe7vGdwKGKXbtm",
  "key38": "U2dtRjuYLWnuaqNWFtygtv2bFZofZrEkMDsqWNdWTNNetm8qjPsCXokCFnU7qtYHsJJkjBtKAUYj9UfY83RyRbt",
  "key39": "GtGhpadWn3RA8BwGSJ54Z4pJsmWYdMNRwQLa9gQNRGvj7D2QPQ71ZYGaEViBDBx3VaxKP5SkRqsBeApYdfSwtgg",
  "key40": "5L7b6b1gMW4bCrgNWUMXdYcRju5cKjiHbGYADmrxm9zSZZSkn57mYN8nxkH7bVrrot2aQ5MmEYSHqHpuJNe98xS6",
  "key41": "2DAPFM8qo5Coh85agqWw1yH7oPGK6VXXHk7xJSzDGiRBC7b6CCazTrtTQT6jGptZKTXsSNDRejFv3BdRP5uTB62G",
  "key42": "kPPputqtMZjZq7RbgRKP4Hzio4HfiYBCzLSNZabBrHMoGvYWnwFvSvxG43gxurJBzfyZCWzGvrBvKPtntNwAk92"
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
