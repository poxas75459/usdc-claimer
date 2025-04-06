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
    "2JbFCasGhv7sQzemhqhb87j2XVxyMqeWE7ncVcjcifRk1pmL7Khq3LYd78V2SnVgcLnq73SkyauGJr4j3JcK4mpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiXsvjA2wJ6i8MteeWTfcsR4Zmmz5Dkstvid9zbRRGakWxyuNGECVwGRrpqyptSr3npkYRWfVsBPp5kz62kj4sU",
  "key1": "3ar9bnQGsqCfqWumEpt46dpiafbKYfLQhfS5cywvXo2vXWFoL7qPsPSz9EQ8DeEPR7Fokc36s29gN6u228CpeLBQ",
  "key2": "5KKUswJjrUowMg4pV5gSmyKdGtcip8Wsd8abqnnNF8CGRuD5WCVDZJiRKThGdZRiscScuHzxEHsCk9Sk78kS4Yi4",
  "key3": "3CqYRTHb4oY2A7vaSNqQ3XLUfxxpWegYbk3wrpEroseW1cCNXVziBqLMt3c1sN3fsDnDqD5TNaCjjCdJ2CXs3S2w",
  "key4": "Sz3UuDNRTCV1Fv1i96bqyrryuNSzdsp7hPcpHRQq4YnGAmcZKHNhnYF2fExzHuzW5cuwgLCfgPGHuQ7oo634DRj",
  "key5": "j1agkKikjoYQXDVCLWqtycjcxymcGv1arcC5wxj8g9uo5ZhfCiymGu5dDwPNTqUtgrHzkWLhjztb7XjuM86ChUA",
  "key6": "nNJQyMVnA5mcDE86T62uCh7ZxfMy88LXHvM4sLRqc6LQepVEZ7WATmW1t9Zu2DY9ypAHrzR3JpfQYP9T5sh1Y2D",
  "key7": "5VhSnbNaMM2FznR5fzbqmsZU5nFPB3L8ksYMFbvGPacunLoD7cp56KgECB7x9Y6vyA3XxSu2CcBGEJbXScvEeeo9",
  "key8": "5wyUfhRvniiHhmVv9AqNvdhDDXDe7PwJ9BkbtKARdLK1yus2CMSJpC5eg6ugymFQwnFP8nADYmTqSMDFJrPQ3n73",
  "key9": "3RWpwu7k27ZzkyMXNEwkpbBw9stdrtkyk3fcWzkA1SQzPU9fURgqPfvTWy5xTphsBJxmsubWj5NANe9ukmng92MV",
  "key10": "2AwR4nynq1uSzGZxsqfFZ1f8vLgWM9N8yBtr5MpgDd1eEnjn9JoFE2B2QdsimgsMaqWZZbbyzBvJc2WR2Q2kHW6i",
  "key11": "3ncBXMJqeG64sd7z8MvpKRtm2vVif4eqYdEdGJkCDznE95UqGR2SEXU7hSNR82vGGyA4MKsBTTJKtq5PHN1oHTgs",
  "key12": "63KYpRUNMJExGVKAkh2HKvse5dZdfZAfAqLYtHFXN8kQ5wPP3eM4o18QPRZgH9q5AgaYj3sMyoLiXeEwaPar6Zsg",
  "key13": "4BNDbo2b5YhAjShFeBx5QBjXgePw1x2ec74kbMyNRTEemoPTRuGhbWZSjBKPhyMf9Tejiw91qRCvDSdgHiD15Bdp",
  "key14": "7gLR5ZTkabV8x1N4hmok6UPfayvr35E6ZQWdaL8tanYgKCajBp2sQz6Qd5xoDw1kRNtbpJstYpR9vFaabH8CRE5",
  "key15": "5nWQQTmv9tWrP2qYajsnXH8RKRRazqa97rhhP3HHd9r36YgBXP9fBS7TZQYDC1wxx7h8YxSanm2mPtNbWekSn67x",
  "key16": "486iCuMW5jyDJXNLxqL1GHLyfWkNvyYj8yJDyDBsMCGejsSnBmE1xohnT7FfjhEh8TCn5ykPH8ir1sNiq7Xpdawp",
  "key17": "YhCmoNRwMz4gqjVHehhqEUrzHj78QxqyK87s6Aj3Q6zeTn9mWhJibZT99iELASL2y86qzqus7jg3aVhfArm1pNv",
  "key18": "4Vo8qsoXK7PwF7YbZUoA55c2echwJy6g6JqbVUUjyA2vmbf8JVTNQNSGH3DVp2MxwzcjUmQTovrU758PuVe8XTaT",
  "key19": "4w1bZ1TaBwcYSMUZg8Bbx2UTMR11ETbzL1eMyt3mASAMmRukwCnr6vchXYoQVvKUKNkqWwWnDSrKNtvaiqRYvz6h",
  "key20": "3Qfj2ruY2Dt6x4efeDip2t7r1RBcmUwJUQzQ6EKuTuEVfj1PidCWNZbXncKWiVAXeWJMm8xbveXrotnKRTEUfZXm",
  "key21": "4cEUnj78WVWRYGk4NmN2pip62deiKJvrHVHytmV4EeJ3nCG93TU8x7PB3RPqvEHAZhpD9LRrkFCe53rXoKjDA9Fi",
  "key22": "HwYEhrB77hTFdezQ9R7vQDHDdpp348H1enpb3JF3JHo74ckLBsEJVqMRgk54StUyso9kRNzxkboUhHG4DqNkiks",
  "key23": "pyKdnR1FKb1V7FUQFGgp2cJ8YhTwfvAtG8PX4pVW32DsAfUpV8ZDo825QmCbHkYm6TooSif4DfoaC55xgSGHRBf",
  "key24": "dx65kJcgURxTNArfWLj48EjAjwj2Rk9NUK1QVbLckABiwW8nL82vsndYnQWqu6L5CLDMFAUAfU1H45Bi96iLVmY",
  "key25": "udyu7qaD5hC7dYvJi8HMKtuZYxbQvT4cfB6YiX5kkpktKqDkE4AW21vrCPT5DNkijnUL7N3Lx8PkzbRDo6t5wRb",
  "key26": "5qywCZupshEctvCkhWs84dSLV9gQyFH7FffN48ZAvg6P2GGgVHzHtqfqhTbj4ZpCJrJCbn1npVg6Mmr8N8m9xqPz",
  "key27": "2kpxHRoDWBYiR3gKizZokGapBtfbqvxpVc8FpmYRq69UcYGpGWEJHXYE84N1rRb7vhLSPqpcxyQFHcAY5Xp7YUnd",
  "key28": "4She2eUCDxepUzKwkcwTJ3zyAfu3P2Kub9wBg8RU2diH8NWQMHR5oXf2rWGJWuSeKYWDS4mjp7px69TgQbWrAhAe",
  "key29": "mWqiDMR2ZG2tL1kbf1PBXHbHu633Yxu48HZ1EKubqSozAnw6ythMHR6zZLZShYAbGRnjzWvS6WiaYQvauRUMXSc",
  "key30": "4jA1V9TuR4cXRa3ctSGSNs2BCph5qdv9vThLzr22YRDvFA3FcKS8XEg58EptGwANexcuVbsKTvL9oMus68GuWuZP",
  "key31": "2RGFq7fDn1Myg4WoTWwzMgR1idQWxA4WtPAdG58rW3rXrJ76GkzD5UmuvKeFsQT8gY62TibbRKQUngV5r8msFdZ8",
  "key32": "4MaGWAvXw2jXVmREdKPkPzjXEuDcfKkSvwweLDghjue1TNQ8CsAYmG2qsKkfi9z7nWzy4R1NAbyNFQH85MLpTC4b",
  "key33": "Rx65nQWeDj9ywkrfyzPdN5Pa3sxegC5ULH1Gi4P7644Wq22251CEDGc39gFAxxryoTx3MBLL7UAs3EMJ3Vd9QyY",
  "key34": "5e2xZLNr28nSKDgR2E2pfLVoUnVtdrhJriY8qMk83uQxRVvyuRYKSUDHwuc3RdryvY2wJh9ckU5b6jHwpPgRJJjx",
  "key35": "2csJeBqg8NhnxpZjy5Dm27fGJpfsjTxCzzvhu9zFzwkaApbUraUShU9xMev2nxRgPx9hPLNSRm2WHTnKmkPBcGAT",
  "key36": "5V54gE2WYS7eteyHcGC1xmUpB8rruYAGs6ysBXwSuYAs26Db7ZK33iq69qVPK4ZiEZAk3bRCaXNMzsgK8Nwxb3CN",
  "key37": "2zLTffRvAtKrRi2CVwgAiJxYvHeBvYPfAKjTkr6qmgzkD3aytuBNGsUi7Qo1ib1ZD7weRVpJ2pyBQghaYuqxBxAH",
  "key38": "2AP4wecTT6ZWYZ3VqNnbAZr3CDQxQGqgpp7wLK8cKK2tJvgwDsxAgKJE6BqjwgNdB1bcKysQJnkaGeJS44jpK3NK",
  "key39": "227j6KAmk4fRcXDkb1gVY6p8a6FPSBYm8tNAtXy3m14Mw2HE5ySwWvyujNYW3BrKJtXsbQpRhwqTdvhU3eSBSC5g",
  "key40": "48Ht6pSVNt48teeDYUXS7NRhBVhUhDsZKexLQH6c1vu9kzpjJiQwzGwHG7zPhxqK73vgfELL38xf7rRR8HLSPeAp",
  "key41": "1H62HFbYvwpR3eAv2rNNxiAcKAjAb7SZe19jJGrjB3YNev9UT3bSRzP1X7bJ5ddY7yCBZ9KQtfAwFNMsHH641Jg",
  "key42": "3UtAf1T7NdVSMKTtCQjMrbKaVm3CxEyYGERXF4KbGdi65G8VfbKmFWrwCy5cNrJQDoUSQMjUjcNJuU3djdN2bT7x",
  "key43": "675EbHJ96bydPxdHeecvLjnHia3Zj2RTbSy4DR1QL9bQXxvDF48RHdsQmghRehRnaHpJezumUGegUszTqfkYKLnS",
  "key44": "2dUMCmFKGsPnpxeeGzNH6fYNitBw1NMud8Pbu5sohNmgTWXEyaoarUJeSUfu5eSgcKq9J4T6wBCW76MdHTTMJs74"
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
