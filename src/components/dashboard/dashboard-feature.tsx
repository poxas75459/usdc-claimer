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
    "4fqymgUqHWp6K79tUmdqJURfzw44gBncSGMPAaNRca2jxjnXEN21FKAvMhC2DJ2CSFzNDCo984UxyPw9GtKHa6c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39StSpfAGMdKLqztGYLLXG3LRVSU2GhoYjcuwPeK85NohvziFpq2NwgD8efPppUZ29qjUp2JpF9aQVH4y4SALx1o",
  "key1": "2j8S39ArnSwCWgJLjhzptwNihJ9k4xNXw3nbtCyBtNpgc8J4m1HyBF2BUBuE6RsVeMrB4Tb1BQDayBTVgf2CVxd5",
  "key2": "4asN2Qk6RB3kifFoy7HVAQTBhhHhPsewcMsMJLPpAwC76TF7fcinHKAuBbPi8iGZUofVB9v1qJQ3rwxqukKqm7hr",
  "key3": "3F4USiwYRUAg15A2zwEAkrZZvALF5WrubxcH7ASr7SqwznSExUFQWUc41oMByTDiTDGEYby2zxvtSsiPbsR38XJd",
  "key4": "fzam8nXd5kSE64XD4LYjp7bncWDC5mFWXZfv3LB77ftFyN9kLLEzendxhecwKvqZHJsxbQMuFFa8pRgBvQWGFPH",
  "key5": "2KBccmGt28GpWHywkahudcX2dcD8YXuRr9GjwjVmkb78etJtgEaJcuumtdYBYDTTAnGJyBFA5jyUQCWcb9s555bz",
  "key6": "2Rpx6UVL3SmhBeD1SShS7ctovbQi7Lsq91DxXYu9ZYTu56E2LTbJRgykVcRoi7QFL7ApwDBWTXi3PV6jDdwt75Zn",
  "key7": "4jYcRGtyoaYKX1DwJFAn9z5uRwwy9QA363UvTKDRmjU5rcXjriApNMoSPMJsJ1rTy2vfxpmxwwdoi7i9GBJDeYX5",
  "key8": "G1ELzFrDbnymzq6tKKRiCDyJc6xZ6dYf12NBNTxcXkgfssNcSVkgbhWkU3ZxkUe6BCE4XgNbKkxfmnmC5vsEhNw",
  "key9": "5zSgXpEpdKiTe33vL5dvjp7Uw2o2J41pCXTzq9Ai2PjKQu7oAGuc8vX6ZbSMnwuDpcxUAyns4yjkVBmFdvin5o9E",
  "key10": "5EL5FyvAozmUayod454cVaEJvV32MzXsLA3Yi8sHRxRGNUPkFKvUVCE3By3gLNyHqtzc53Kp2naDixr3SyqLoTzh",
  "key11": "4DTGRecyLoaqcRJKgiQdjSir3DxH1MEPs31ja3eD59Hmo81trtefEMvqn7Xvwd44Y9VknaWhqkHE5An554DVTLXN",
  "key12": "3W8AXmnKBYH9A51J3j4HixL4KjUdExyYDepz8yGTHmEr9c9j9bAvzxEizbcKRw5eHL9tEgKMaYFDsTeopjuT7FHA",
  "key13": "5xWjZyuHEcPwGrDYzK3XwznynKzDmZr2y3orQ22Kve4H7Lhs6mqiAxTBGp99beyKyBjB7qXipVSvmug9GnLWwiDe",
  "key14": "2H6z7K2boHeZHhUFkUx2iDqwxdnfTBUAuyRKtnYjjXBbnwNx7mPDKBiRV4mJvFYPHSzKCgpDS2D6QThzMMTyv1wq",
  "key15": "eaAHMmAbSHC5uopdAK1vX8XX2CN6ryhQUFo6jaxW5o5hj9sn6yi4HHPqGC9SCLTaXHuuyNKFakobvcoSxgvg9YN",
  "key16": "2XZswUE1ftpKFA1LWh2Pqbbsg63qzGSp1fTiMXiMnWmrKUKhsvv4bWm5JhxKXNXxbhQ7F3xMnvzgrJra543orHKh",
  "key17": "4ubS9vZAu4MG9ygdMX4CFADyq39QUHxcB3WB8mbqy1Y2iZ1HREFwTPSFrLpphBjGur9VJNnp2NEB9ELeP3SYBMuv",
  "key18": "4feWcXvd5JrbJVxGMuRqwh7uiiLKvBsGidzb68dwGYGbsz7UPKvz7wws8Kh9JsyQvtU4dPhmZbmnUDiExAzrvrae",
  "key19": "4kiAwxMmnSjWzEHtzCVS1VTYzqguQQmbSbXdysoqb3JGjhLpbkE6uiEshBB4dhN4tQbQQHQyKVkYqQmD92SvUUNw",
  "key20": "7K97EAMYrQUDvhJGZSz94jFvqunpM3XJwv2oLUi4PFo1v8tBK9M2aeGUitxwjfB5mg46QzZiAs37WTBzRe9ZHre",
  "key21": "35v8mu1ZEi4QT5TaBJk8paaNAD4fqQxNWBfsSd3y22uiuTKmqN24pXfmyByqrBLBEzEhPF8daZPRLGD6aYzKJdFG",
  "key22": "3b68QckGMe4xifSeoCM8c8hdoEppBqrvPxvx5jAoV1DfR2HN3mSWbWfzjgJrHLS6YSaaPX8S75ANADityasZddLA",
  "key23": "QfA4pFgp1uNcH8TrZHjG5kyCUcMDvRkkDyhkzWanVfH1ayvaWKiraBwT1raqHb2Y2Qx8ncAJEtLD1TUUxYDbvHa",
  "key24": "5npCQf87o1ZA6jvFXHoxDAMbrHtWbkxwaWb9hrMtvKts9xn37oVWK7hB6DsjCnMB4Bcx22A8FNPAv2jGcQUrf5D2",
  "key25": "qzAe4FgtMP1sc9HUSgzYu3xjekFihkBhbqL69Hq6x7oUWnNMV1eU59Fvk37G4FfBbKUCGwz6nk5RWub67K9nY4A",
  "key26": "2US3jn6M2RHu8vWXcVLYTXaYpkSbqdzVGcwy94iQoWVVVc3KSQqvXFGbJCXWfA7HujUx57sUecHRYcqsBaYikBkR",
  "key27": "36VxXpbdmgRyk26tBu8N141KHKe53p2wY4ion6bXFDND2PFpZMucYzZMrB7zfL2fnapghJdjehKbzpRYUGKE8rcF",
  "key28": "5bUwdJSaf5WK3yC2xDJQu3fJq3PwtdhR6JfL4t5CcLkK5e6AYyE9sCLawvUuywTeMVqxCBTfo73FVeqGVoHSnceX",
  "key29": "5xCanpihNo7KpETumYJztCofYbpDV4HguLm22JegVG8BtdAkYEgc4R7ekMZRw1riW1hdwgM9s59Ps4ET3E77wogo",
  "key30": "517WgTucDprGAjRK8NdKwHRh7XDFWAfS6RvNzPJPJZbzb4Qf6wgHGmEdvmDZpiMp3M5D7ma3sBn7uTUc2FEmeZkY",
  "key31": "scy6eCFVkvFuoCENheRRTitfuxusjNGUkaJnwsKJ429N1B45i6sqtNq2jMtk6UrhfmpQH6VXPkbYZ9mXo821D3n",
  "key32": "4msQeRShXpsbyH7w9L2w49VyC7VyvSTkJZKY7zWnPkJDAcfLi6H2xqtBT5VuC5k1TxhvzNegG7qSBCv8N1U4VHFu",
  "key33": "2wrbdi8nEvTxGicNgmBxTjS66JMTc5mRRzqdJSfYeopeCL1awbPkmnxRvMG82T5o3LDZzuZBnG81LeJnGU4KUYoA",
  "key34": "3qhdynpBcycN9Vdnqru9h1Dqfd2i4SmgzdjndRRJrQbL7zTP5taAjwQZffxCEQwnY9Nkg6mzy8edTZkn6F7yn3rJ",
  "key35": "462eoG2oTXL7uYkfARonvTSDWEo1oUtbCkhwGyQcW1vARCsyrAmmAuUytoGf3rHZ3rcjN9M4BdEn9jq7LrUvB8tq",
  "key36": "24qwipA7PwWAutVdhaub1nsK6rBQ4ofp3vFaFqscHLjiF9FXoEjPFvH4hAsnRzK5MQsL7kXuaauL9rotfbXktEpR",
  "key37": "4m6QhvaJCNkbxfdQG4iuAwmHzK3FXBFRS5DTEbHPD6GTckzovTEByLfCBgzqtrtXydkFxiv4nixJ4MwwbW2XHLUW",
  "key38": "32y2SzSpQx2ZX72Dj5echmKuWpotNCuUgnvp4yJ9KxHNUh1Vr2k7dkbUNzbKsTm6hwF2a5ajae6Jx1mWZX65Tk2G",
  "key39": "4Sc2cj3vWJxvH3sz88c9e17rKBU9i4r3jzVvW5xZLvD6yPNFmgE1TmbAzd8RkykHTKnAMSXGb3XS8dbyPZo1EG8H",
  "key40": "2qCkvNt2pWddynxCfEtwskQwFaqd3KGLAykL78MPQn838juzg6txFghKmbhVGwrPHMaidQPYYAAViC3wYVK2jP6y",
  "key41": "NKpZo28VCefDZ1aPa86RrbbHW7tFRVQnGx34qaFgxVpDix9bXR4iFxMvq86B55TJkYv2ZCYNp1FX6eWKioPuf4h",
  "key42": "2BkARy5dgXYJiRmYNRsrZihm5ygGwRdFVRMHMa1a76ZtcyX5aPmXP1nTzX5cntwbXdSUCkrSUsKjjbdFcgFVGsCs",
  "key43": "2khd85Gz4BYWZCUbw3AqSdX1ZSpKguUS8bh1ANgEGLVuQf6m9W7hcTnJz5GYA7F6hxEAXoA3U5juufX2QSeNfQXn",
  "key44": "3VjvCVd2nPmbMuZtEUJvzpNZVixxCazobF4u1eSTycY9MjAxLDYc8XsjTN6QD1Uh9PWQSE2FctreWZ7Gfza9KBSh",
  "key45": "2YtFNc49E8aCb5vzMWBUyusagU78a8AmFAgn95nKXWxatq7f58bygCcNqsucFmHGciV2JEeEMQGDan39FhDKq3NA",
  "key46": "2ekpN2g87HbekwWhLmSAjQJKffFqaaCMHRLHbc9Cvx2uJzNzoZoKpC1bXQP6QDrKgkAGDkJ9C8Mc1R8dHYrzx3UF",
  "key47": "631MZCyy2fmC5jLmRoAp14Kq3rNEnpfBRMZGdDkNgTZ2vFkQL1vjkSkQeWq52vXFf7Dw5n8ezDDoPx1SXYvJGepc",
  "key48": "22yYB5YjX5E8vSji2ocFnbkdDzxmZh8p9tNLQ9iyE9xJzW4fQ83eQnn8SGWvFpmhXaoZaNAgAdKGaWx15Pf4Gc2P",
  "key49": "538AA6AzBYqzDcatRj9NGb3AkEUhWzJoXG31CdjXbapsZiXRTP9uhh4b2oZAxn41fCs1TFLty9M3vN4mkioEivcS"
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
