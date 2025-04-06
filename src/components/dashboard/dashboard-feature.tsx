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
    "3wHe2ZkFPLJvMszbw4g2aRx3RVU3MCBthU2BJSAmtEYTEqPD5wd4BnZprR91EMXL19SEoQHuHKwEfxh2KzZ6VXx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HN2yUj9Njf4aAzUPQHKsHxqVmRLP3kqWwyUrR549sqDyRMJSykrjAvsP7e93UuBBhM13Wh5gmU9YueSx4hBa8QP",
  "key1": "2T1wEhsLKav14aVDLgw9J3TwzK3UtU4vW9CixUNdV3FBc8odJwDorVrTZsXzFyqQET3yLubec88zbwC41nmpe3WL",
  "key2": "5opQo9CwR3vVjd8kSQii9aQ5h5t7EWcaacgcNEVcQkVVPNbzEacGUTehpwYHJXgu3Y858ndqVy9TNaKWJfcwn8W7",
  "key3": "66yLFPULy8fhEMCphidbhDWBLq1MXjWAGqVLZD7VT32BRgBrmgHqjuVncewRNiPwQRjirkqpk8ynfHeFBd2hUBnA",
  "key4": "2Hq6qf7mqe3k22A7efhSgLCZvw4bVSfVGuLDBvh7QRgeg3qREx9ctxFcih3d9DJRjhw2wDRKAxAZ3GYPVerdpgrM",
  "key5": "4Ws4ErTNWeESnBmwZEoJXwv2izJU6RhP46pCGedbFA9XiNxmmfmuPgEkZwf5T1xDm3bWFq8a9VZHw2EPktgL3K63",
  "key6": "5YA4AuyUUnmMswdMjbBH57Bdu1KgLizLLgUm6sHbyMZtFPbQqTuibitX9AEjPgfaNoScsXHMuob54heoLViUD3An",
  "key7": "vJ8yA77okghWmhXwobKiMKVDfWQDVmkHVdkWXpUNH9xfMHJu9SZJHr1WEEQs6cV7dZekbujWwpYQCtX35HR3S8e",
  "key8": "5L8W1bt1WqYuNqXaw3pB51igiMSUEpsDoMQQKMehCbtPgoesTTcs49iaxaaynhq6xdtxCejVRFtypdD5VoBS9kNn",
  "key9": "Po8SvVvtcZVRizMZzGLcrjfzmLYb4HdeYr8M7Qx1j8Mzu7Ez3XHQYbXbZxWFdh5ezGhQUQ32YkjRfXDs2jhhzUU",
  "key10": "51fcHfYjSQgfRzYWbePMtAf9VKp1cEfA2rSJdRwoCEgtFLPDC1RaMtGmJyctHJKb4e3BscrqQVnC9JxxvRbiWw8S",
  "key11": "48mD1VQwg9mF2JXyFh2Ud1vEzeajf78ZKy1BFSaNbcmQf5pmQwBuQPHebmR2XhAjhZN5EyGf71rd63axhutMMLff",
  "key12": "tDmckDsLEEHB4bT2Nq8HDCqECWpLuDcJFUuBxheb9Wyj1YU7J8fcLJig39DMgv8NAXGBWxsig7dRowxi3YJ1Ehg",
  "key13": "3GPtM9AsWPJC5vjxHmkirc5sCNjEuZng1cKvYv7GShKNXiCX8L768z8ZYj8awE936cAkhmXRCkGTHh7afJy3oaAH",
  "key14": "3yKtbGKH275aJeKFvKFeQUBMcHxGS4BKX12CSsqyFx5hLya9MmMvAytkeoHewjMyXC8TxGBJHJT5Y1K9s6KxpLvp",
  "key15": "3NH3n7yJdAX8RasrQpit9REHq3LAWmDY7WbKeyk4vdAjJ1w3GmGiD4Xq3DMgz3EP64wANNkHqcjnNbrjN98RgrXF",
  "key16": "5syF6kEXmh2cBYL2dzkMEZT5yKKtgZkqzeQUAEBofGsLddan3HpjXha4jmAxM8FpF7HBF429RYxqjTeYwg9VXNJp",
  "key17": "PSsEDobHiLnExcvbQZwJs9VkaxthTC67nApqWCqLYQDXsk2JscTaWenrZCf7WmxhXvMZ8mDsL297Dsukasf81BT",
  "key18": "XxLuxyHf4yt8HPbStcxa7KHACVmTG3wSrBWhgPkWftsm3VBHKxAF5GLYv8NshVVuH4AGzbGNPvVkwhL8osYNPNQ",
  "key19": "3c2DhgxE7xVdukEGp1sY8T3scyfkTkiz3N3w8FN9w3FdHUaevZgxpiavoZ8WowKh9DwfVMf3xYNRyMfkhmQjKVT",
  "key20": "2bhHpm5LNLW7kcRZ46mee1VFhLQ3bpymunbtR5KtnMow5rCkYWxZvJtxHQ5TefhboeHNaKYPpBpBYj8ktuLLMEvT",
  "key21": "paRN6S5c4u6bkpoPUwJEUdE1cHD7uEEfeqnnPJtKQNxQdcSLee4QZDfdzvJyznASXED9uyseEBecKCi6Rb2FZUN",
  "key22": "4NVrezsAF5ZBtLfnzincsRFm25HfQsLsGw5BFbr78LpAX46dn3Ltp8dbt2u1fwRFbZiFQdKonhA6saLWt5Jn1122",
  "key23": "cJd76QbFbM2YkX33QmmdNi5C6TGXJqTcUTrHit5DdgRF8f1xSfxkmHGU8w3iuX4avPNL8BqWPbQca85WnskU1CL",
  "key24": "fUbNuxtPpJDXE7G3wMo6BkfSKYQpFrpToagivEhYkc16HCPSZSpqMHVHPjZyVbxZJxr5HWDVYTEP7gTZSr9vaDM",
  "key25": "3e75VsyKdZhwW7mEp3PmvL1g3qB4gRdQeXqwnfZ8dFtXH3MVtpHpLP18yXToVZtFqTbFQLuu63New97y6zFEFa5r",
  "key26": "5stZLSqYENn7H2c5gSY2JahrRytNLQZj3HHhVLEuc6FfKoWjTJZii8eWRGdzXJ5SFGTNaAR7qmPnbsdyjXF58JGZ",
  "key27": "5AZ7DZKUZsK31y9w4Fz7CEAoeDqffke1xjstQqq7mi7pHUVcQqsc6i4RLPiCxfRrnk4Agk6KCD6cKi5mqxppiJRN",
  "key28": "37izDTESC4jstQF1A6ZFsX8SreLx7mM9cH4VJybVPgGGGZWugcsQS5J5eDBw3bTzVyQpT2gtqW1a6Ph33aDrP1W",
  "key29": "5pwJbtodsysnwinjN1m5xEawkP8nTtiKqRzZvFaUwoKryBgVB3Rq57eFkwMaeV4M3g93CPKRYe1GVwf4v6wa9p6A",
  "key30": "qAxDiwxfGkftsMZZYxoUbtAegT9EKKvVGeXXWye8SxqcY5AB1zuaiyxnxUasv3CG9pAUNpt7hkpnA8PQyEgZX3o",
  "key31": "4kbREYyb5mqgSbb7nBzrKMs9PDgKpj1RbaJpX1wRV8AkETfnVoA1UCQ6UnKPYW52yL3kdAdmjvGMnRYfdqFvhRw2",
  "key32": "44J113LF5Q5ch9KbNrNqBHmsw6KD3DSiVEZU214mB6HEvWkZuwjtKWtS5SWBcT8AQBk2NKzAM7bVcgmNqDHDLf7Y",
  "key33": "56e72cPSRcUGepbbtBYo7hjdpy8TtFxjztsqeAFHXkRiRcvLRwEdbAhFKqnLeS4sBfAKNCtue238GSEDYHUNhe4Z",
  "key34": "4bcW3Tnwdii1f7GuvjSgomhg4ebNQKLEg8GDr3FauMY5zD1yje3WHd33919G1jtYCPaD1R7dQvy9V9vZBfVnpLMb",
  "key35": "9CcYhp3TvYk5oY8qWPo2JFt8UrPJVc1dUywiREavCrtpeeq2J1eGrv7AYMsfZtwTUxgheUs3JAFHKzox6DRZK8t",
  "key36": "4QKJ91qDiTyzp4L5JAmqb2FKRMc4qzo385nkCJTbiVb7DeVUXdKSR2ZjJA539XJ62DjuTsr3swSdLWEWNAczGSL1",
  "key37": "2nvh43hH1chFPr3487uqZrSDkP1BqiTrfdVeBnq2BNCMnzTsiBMET9FM51jGSquYqDYQKs1ew86RXfMHxuCTjaDo",
  "key38": "UwFD2HK3WPGm9MTyiSEJngX1bruXThf9WgdHDqi9adFrb9He3tF9QC3L1Bg8QFSX3Z5e9xtU3g2dD1iGnJWpJEs",
  "key39": "65yQWz3EN45QCoBYb3zZkbckjihQahNQrXCjdCB1ExKwjKYbkPSzb2DTREd81VhGAgV2o9vkyvhg7b447kXS6atf",
  "key40": "4g6pPhPcwaB3d9N3MgxAhRcN9acs5ceLWVPuNSKcyoQrPKLtcEXTeBti1GWozZSFn9C2atMd39pQDcq2u4oUXgRi",
  "key41": "2kgS4cobkCoR1YYrqJ2meUumz37m6vKtvxvV3f9k2zXGjRDxKUwycx843gn3wTomQsWL9SXQWFjBoGmbrX2WBufa",
  "key42": "pvBCi8dxTKJtn2rJEBo5Qi6e84tH7neYLREnRAsmxEyxkWa2w1AnDLwaKLW565NQm23GqGQFiu7pM97dXetd1dA",
  "key43": "RTDGnwssVWQRfhVZsYeM9g7LJ3Lc2BHqNaWwrFGAND3c52EdKa5h4YHo4YkTzdaSG7GhA29xu2iauXsSXvjks3H"
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
