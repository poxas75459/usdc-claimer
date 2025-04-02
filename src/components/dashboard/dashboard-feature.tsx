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
    "45DmHMAmGDBZDupA1jp4PZ63xX7a9eU4bFbPZdFKUMnyDbq4yXLHgKA7xq3g1UVoanERzcYWuZxvrH7r9WwgGM89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dqU2wwzGxMaPK36rL9hyEVvryhmz7AShuq2C8em1sqwC7vpyBW96GhyP3ZzShoufpsVpRbsQHGKXWzD1mD8uZD",
  "key1": "5P37hyQwwwm27WCLjXw3yHcYFsAgx867R5izbkNErnWUBZ8epGHFgBWBS46sQGybcYiS731aVL2K6z22usbjeiht",
  "key2": "FH65LTK6nA1Z8j9Cp7Whrbvsp9cdJ5aqABdKcCzLuKS8q7xMHoyrG8teavxi714H5D51rrQK3BZHbVxEWFGvX7R",
  "key3": "3kgqe2TqT8HFqtk2EqJKHex6kG352ossdvjpspJTavRDgDyo2PCuZwuDAyJDWnKUq31SHasvzBFtB3sHMDcyBvQt",
  "key4": "3J7NjLRAE1EkowCgEyymAVh7fvNs8MUjMnkAe5camoF2j1QPQM2wvkjrYiYNnnYYs2PLTbUxCbrAHouX42d2Je8b",
  "key5": "3dkx3PZfGT2VXXs4oa1ZAQt57JcCxDYTnV5T3U5ptJtVVpBQCyQZMfG8jBuFsJNzAybAofHjf85gkrohudUeudup",
  "key6": "45zAAwnwsCpJrWqFHXZk8GdLzeHRwTPkzCoT2Lr9B6PwEiRx4iNn5PgMfjcHEhfJZFTdkW35NpeHfkv7ezqpnRAA",
  "key7": "4VdnvphFCGWF2o9YnED7w13qbRv59KUmWJ5evNm29QFVfu3ya6Ywzmr3y9C1VZXRAcSCoN2cnS9SFThgNtSZ6n2S",
  "key8": "4k7vRHdb939uuCh8dBwcFo5MjL2qABq4GGJG6J5pmDHot2GrRAjqq74LT1pHHJ7Sgsa6YpAu65ZcapUYK1MkgLKF",
  "key9": "5RFLzE1SoJYAbgxkSpVyWHDYKimGFG2uFHzFy2H977WzHf1vUkR5S9Nj7VUkpzQYXBgxXi83sXb2NxGeRTHjq8UU",
  "key10": "3GEfAnhSQabXoEde8x1vQLu9DN92PQ7UwLrUQR2yprNC6vKRrVSx1DfgUJeR2LhiyFHbQHgG16VfKuobiMD5kpho",
  "key11": "4N8LQ277m1SsASgb8hboPxa8Nn4s8XX8NWiAXswVCETVDQuQ4kLBLHrFrkpTv5QEu5MgShPBbpSxsJ5THts6xjJs",
  "key12": "4YxYTTUBQz655Pwdbkb3LjwUt1ZwGzsxYdy2wrrVzorJ3xmsY6hb5vvm6RH9QZ1xSQWdD9DN5VBRnCxWcrYPu1ad",
  "key13": "5czzQ2BsWDYfzCgbLD7QVaoPm8jr344i6cbsdraukZkFhP9bqFL9GeDan9Px8cBfPMqzH4RR7uMTf41nqJphkrNy",
  "key14": "2NKTAevYAEybSfXPzpjG4mojScJCqQR8kXWmch5jcKB3fvXPdS8dmyWv4w57nhP33mizaVvyme8JbSTN8PBPytPV",
  "key15": "4LLqS9fkDvRqYphjaR4WWNvCEB1D8Zs74NMctc5oUy5ofBAoDuT5HbR9xMRVMfTJ6RXYXvx1CDRymVMgxX6EuxSy",
  "key16": "2pkscJWbTL9Gr3vkhR7F1hSJU289FyZ9je8QX3L933VqDHXs1qDUsrZdZBJESU1ht51sKw7NZqY9znxGHZ1UAk4K",
  "key17": "4bQPgbe5raQ9jh4QsypXY1nUMdjzL7HpsJaa9HjSGH8bwr7CB61QnoABQg3k2ApsKnFsisZo7istVdtwhcYz6ztM",
  "key18": "cbji9mzUpKs8LjrSaTeESZjKuJC841u7PdhcsR1KZnpW2Cd2nxPHhEdx6WEdFe1BR8obEzNsA8DnyFefyp9kvgd",
  "key19": "4WoV225hA3VgtgYe6G5wxz5soYJmZ86Mut2mRHBesQ7Ls6ZXVhWVK2cN747vkG5bt1xV2GdrVkhJNDnBfZqGM7jB",
  "key20": "2Vn8oc9Midx1oH7wWiFGzKJobR7f3s6kChHLnYnwBXJQRN3rWPZciZLQSCRy2kN1K9WugMFoAxLCcdnDSDAMMEHX",
  "key21": "3jbBVSmfWfJRCgjLUsr5qHcypioHNS6pa16Akmcm3CAoFyBwKsgFiV7Zwsotjqv9jtHKm8PMaz8nWrSxDpqqjpEL",
  "key22": "2H2nCXDFb4NCTPGwzSaYQvV88stR1sDSgmgqBNKdUKgkyapnJHky2pkVC5KZz1rdVmqVwgDRcqioZxZXmbj91z4E",
  "key23": "5SKoM71qVaaVbdGAXaURUY9LS4GeYasZcebowy5T9S5BPEBU2XqFa7eKCPC8kVX5XtDeb5PuqjbANWwanzFNoxs7",
  "key24": "nFgbuWqm3zfNf2KibwTAXKaP1PEcHChYutpWuquFMmLfeW3vvxb5K6CgVcbymbXZFpC132RBSqaDUsgg6jddkxj",
  "key25": "2ZNYPF7cDDrNcP78wexJwEfwVraoSqUf3jzPgFR3Ws4em5W5mSRycmuPwnBvBhz56x2VMi4sBZaCia7A37WWgtZL",
  "key26": "3ibJhqx7n8gn5VaD4ppxneVGu3hym9NP9oCjRS5fxCyrzPRaNNYg3cwqEVUzQ4FFqNyZKzXDUP8xrU4mYBRLVrYz",
  "key27": "24BajFRLXgX4Vx2PHbPox2octVS7uCkLZPnrds4wKNX2WSBgMjCjjvcyPcCSi3YbyJiWVQa7ycbdXF8UDszh3XmH",
  "key28": "34hotttCjv1dXoRyJgADPvAfgFkabQoBZDS64MeQA1QJdTPkEvEq5yog2eJnDpLXuFhjZo2FHCN6dsWPJGDWexQL",
  "key29": "4hLZVQWmyJi3J5PvF8Ue5JXHczJQZdBciYYu8fuMPsHXQ3By25UThK3hbtJrkyoDSYtCTzGqRfaH1WDZhh5o1NXi",
  "key30": "3AScLPuR4uQPS84FwBKsZvxZ4NXohnBrqxZ8gZA33vBjoBuPf55y3pAk2bDjk9Hj7ZWfwTM5GxZpKuT9tAvY1tJs",
  "key31": "219ZR1qm1o8dkhVTE742NDdgfG5HXQQjRRtNqvwPn4YZVYtrFoinvQsubZcUnC8ZFVYmit3m4GMMvTtppc6X6Dyj",
  "key32": "216aNfx2BtkvtyQyhpocboKB8Do6oZV8yi4hTNRbBhcxR7uYReTBg7qXWgSBfvWpUs38FcQmdNg9dQYvtyo1JbmG",
  "key33": "eKuSzBzt2h1oVSwW9QnDcDVnRacRP47hvyWhhWB2uRAzcVKtzTX3xJGBEnfHKModfFZPr3ft6tMfQ6YAomsZTLE",
  "key34": "5VhG2QodPiPH1RuzVjGp1f8Qs3TvKyV1DaRgpZFTTqgKRsoDJidQWXmaq76uqCcf1eSUYy17VL6eKWixwnXHUMvz",
  "key35": "5rtqTiEf8DQTjoMy2orKj81eiJg5uUvivmFrsigSiqCf1RLzNy6UCWXoxozvdnyy7UtuXBnbv4iZx8V1gxmZEJnc",
  "key36": "x36BYvHVVfM9bhUz4L4wBM9BarS8PS2jgR5tNnJtXQMWX9xGphYT5YKJ3BJBkqwmYGH3Bd6Er3KvXHxXe2DBADx",
  "key37": "4dBZ18uz2xh85jXmoYKgmVpCXdNty3gVfST4AUqrRHnAaWCy9FEmc9MZFvPBmPSWFjtPKzSi5PS232UaAWh4NJx6",
  "key38": "5HvhS5yqpLou4sk6wHknYQhq3eaNKfbBD2qQspNzGkMwhCoznon56YYVZg8Gt4L1dL6TjmW3Degt1JgVtiXznPGm",
  "key39": "5zEDxHYTNcUnPbyPASAw7hJWFaxfQRmKtc8aqbTYGccTAC1gq2tfwKmBqQ2Hg8DpTJAEv5nqADUc1HU8T5BziRbf",
  "key40": "2UZ4u6j26DoafLXSbZB2aScLbjNwmFnJDQpLPkxd3SsLTSAFga8poQaXKYjpEA1tYiZwRL2sUuEnTYMcv32dWpvJ",
  "key41": "2K8TGCfz83J2n8pw5hMNzk4EuFRtzjyD3BqcusEsvSKhgZx8wTRi7NyRkezETcehgAYRCD9xR1ASQpj9Be2hsEAB",
  "key42": "54LjmCajoUSVfp5Ws5MqHhYSi33DxmpNixfkiSivRGr81WMebcofkinSx784REFZbtcnV1Y9U8EcyD9YeGoGR6Wn",
  "key43": "5Kd9XdBaFp6AiiqkrFpgrHrva1ra3u5WbyjSngppMiYr2TNq1zduuLZmhs3JaDXRvdMtd1kfp3hFkX7qSoR64ZiY",
  "key44": "2L4VZ4VoYvGHTLvxPS4xAgLeK2KhCjzrmPcu9Jf5U5Pq3A44prBDjNxzyoeXofPVgfc16muycDL48B3hE11vtR7z",
  "key45": "2QfvBhwVPwPPjAGzEcL1oJ7YxsUwQX12ujJ1kR6neWVBi7FXr3EFwD3CqFEUGhbmiKyjiuHq8jcc8VVSZztBuAwX",
  "key46": "2ezAjADxqMQ2MNAC3Tqesobkpno42NrhejgbWsvMnctqxXdp1UEfLJ29eUBqeGVkhdnRCmYajUSViZjZeyTkxHxt",
  "key47": "4mVb46Dvxpdu3M2uJZwXzhSLCeH6eaarwKteeFfEoDFJzqDAhkcNLpx6PvYBuLfrooYVgWVJYFXKiWSdWm2dvsKh",
  "key48": "5rnVxANevcu4Gb7YQEP8dSjzuP6xjiGuQpcwYyHhf9hMD4sWJAd4FM991FbradxcYCaWwhLh1hcv7WzVC4CM2BK5"
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
