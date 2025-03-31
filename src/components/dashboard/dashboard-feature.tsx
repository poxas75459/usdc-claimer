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
    "4AZx5SuDZETSSEQaL4NenKNJvsWQtH6L8YajWPMrDbJkgTFLtx51f2FGz5uF5KE3kDbFfXRkZd6ZAVbG8Qf3PsmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hMKYJ727584RwCnz5kBSybZNEZdxFTYpcBK7Hau4f2w6qG5Hnz1ntLgJrNA82FCdRMC7DbaMzkTTGQbkTf2B2fu",
  "key1": "3GEB8X6jcoLTsWVb6ntcVpW6dNUJjJTsTwdk5N9SPvqvjdTQPx8shdqiE3KANjdG7TkAB22BK6g8WSHsmTG8tRG9",
  "key2": "2NvhVSEzNkUKrU9tGhyFffEDDYorVQrtUFwPbYrd9sXtEj2irLjCd6vjJhZjAsR8bBaCJLh34MPRe74UGuP9LZub",
  "key3": "2ZqXRTzDWpurX1U25URFHQ8t1vqMEKd1A7tnVJQ3a5n42Sfu1B3eWWRGyu1iBo7xzhG91Hi8BkxG6PFu5omEZMFC",
  "key4": "4BESXCb3a6YU5XWYW5PnKCqj3emLEqWu88CJ6FFP2f8PHmJEcemXiUFMJE5Md9T3k89kaZYcwKY5AAVraViEj1iC",
  "key5": "2k6UGz6nBhxcAvHvoe9qtXYZgTBZhc5pSQUjrbpkSXUs6pF2T9nnqYMkb4sqXa7h9PMtpi2Vzkehd7zvTAD4He9E",
  "key6": "3rWraBBbcfQD965CQ3Q4PPxgkpskxKhY4xqu7hWCno3cdKgWZApSFQJ3KuWKLQLRdvVAam98PbSAumjgZCqUo5HV",
  "key7": "4H1bLutf2n7QdD8Zr6frHZvBqakdG5zvY8V4yAzNYmHEwWPVkmzCNsWBYZwcsh2Kn8QqrdY7zUJUZf4yusz4uZuV",
  "key8": "5kCPhSpwYMqAiEfwW4x1Z712iQtyNwrUdtFDW36uzCV9TPp3dR1mXc7ziTgX1T28hVBZMpJvvZRcUuoeNdomHeGQ",
  "key9": "FCkM45Xc4VZDNoMZ3RYjAPMUJPrhz2LWSYwaUctBB4Yme8Kc52B13MtmVfvLvmoNmgJDBCUKasfRP4CTzRM9j3p",
  "key10": "3wuH3Ct9pjP4cM3nHc5WB79xGM9w4LhTMhXWiyob4fhV1Gi8xgFgzs7RUgcv3wCJxWTRAsr8fho471sVLnr8eBWv",
  "key11": "5JRxgR4BmgXHcGoEfjkZdLyh19CLts8QfcRrcvSYeBcQpEEU42SFGzN34pegairXX3orCZkNZKNTLAiwSnyQrMoE",
  "key12": "23efCxdgXfxjDJJaDf5yoyHQXoKGPVXBQQfEjC2Cv15JcCkiYoYSYuyS7gcca45vomAN5Wzfac4M8zCpyLL4afSP",
  "key13": "4U4HwDNn4Kz9SmNPvrib8eECzcAe5b17Fdhug96sB3vaWY9J3ixNq2dTrSEkE31mpoWDYkK7oyQxXrpkJmJzrPp",
  "key14": "5GivN6gUMqD3PWodTi3PXVQjib4BiC3z2UowFHEgEqRbU8hDKBE5spwk9ygF1bYUZ1xbuvcRuzG41h49ibxCFXA5",
  "key15": "63xSvTErhW37noYTFizLCGofxLeDueGgbhdDCBeXig7xrWUKAwmbhvCU6wrb16HQLJvsLKAVHTS3Nb4iTPJchSA2",
  "key16": "4peoYSmxJC9R3QTjNGKyrkec3jpsrcJWUtt8gcCJjZFFLCZLZRLkMhp8jfcuWUpAGSK8e73R6ibzRbaEAEhJnfNR",
  "key17": "CsErPqiNsrS496XoivjwkFCT9up9XiLvMZugVWQDfdUJkPURoimSQU8o4wQzEyWBSZW82kscoJ1Qst7mJ2VxZBn",
  "key18": "ctnVESY2CkpyZWpKAMTiVQgaBEDjnMcBWJveGvfnFJo7viFF579RTBm9yBhnUzprTuAAonHXVGbapRhxCRxLqwf",
  "key19": "4BeE7S8XQU7numhfTgvZYudP4jp39NTht7VCU2vNb5zUg6mSNTJneDbWbZZk7ZNPa5HLHmpukXDaVzdd64jXxuVD",
  "key20": "5z2noLHNqZYoYUg6CiJZaN7vwHCmQkYkkm4WkWXvyrqTfgNP3FSJn1mgAMReUBwdT2g8fcrxuMBNrqYR3up4BYe9",
  "key21": "4pfLZRXyHSMgxuDyx2hq5kZucdRPLLy17EbSrEquagtpvUjfyvEFcmwepJyxhjnPU8sQGeezvUvPdZjauapCwfy9",
  "key22": "4moS5sVkz7JoQYDUYh6cmtCgH9JaHzvfeE3TSszLmoMNsStAiargRtp9AnyhFgqs5ps9S1UtHRFb99mCqLgdUxre",
  "key23": "2xPjZvWGD9aWyWwcmSXprqGTWa8DK9dFzHPYwrbCaZr3TFEmo5oiXoVax1Hfthd3F3gURQBxsMD3fvFbrAN2c34Z",
  "key24": "3PbgLJwZWfrEWn1q4B85gMF4TVhUbawfHKcGiZZZg1RnH3sTCiWLjCNKga1AREia4SAifuQh8YUPxpKvAXT13Fxi",
  "key25": "3tKBC9YgpH3FQFt5uRs6H7YVxyC9TG5Bz22LEUYHTutMwdx4qnbjzixi5pEVPxX2xEiMrVfBR8DQZHYREK76VF5L",
  "key26": "4bbv9BkfV8nP9S8MLvAfxuuyWnfnuZtYmMnHJRr9J1GMrwwY7S7sFMnEpGo3zDNn3chHBvY1P5zzrKkALeUiM8KG",
  "key27": "2NJFEswy2Y2Bg1wYNKwaFrGuXDRTp3pKCGuuK8SxAVDfLJdha49beysDAiVnSkt1BFsQshVwanoNyBNATQdXmXJb",
  "key28": "33vxJLwaBwF3NoU1FSs5KprwyivfdBMjUAQtsAsbNcojENhUXRbW2dsqtnEKKmjhheFRuSCy7W2pRq2ncSA94r63",
  "key29": "rFvjEuTkA7eR7EKwkP9L8e5ns5ExhbanHoM8ri8ePm9M2hj76beySzokt6MJ65TsATkmieqZ5qXdaritM1DKx36",
  "key30": "5TP7mi3dCFPiU3yqZwK1Da5wEwtpJnfhp9K45Wuyz1v9X19mr5xbXCh5L1UEEqont1ecBo4cukLwte4Z3q4q8Da2",
  "key31": "yvZaaH67fxHAAMbSZeuZU8D1AVxiibpsvMnwwAKihShLKMrduvsqJfJiaG6o2ohyZE7xoYEf2qgVSQJFuArzfbp",
  "key32": "4jqNHXDqfg8gmX7PWoooYZYgFTfjgL9bMTdvUB2mFCzWE6zwanuyUHuFeKDdCPg7soHxdUXuGzKiA8Adgxb7WBRH",
  "key33": "5c8PD4oEWEcEMeZGmmfBRozFYVNGXYjqbvkcQZQY6VtFtAYXQsmnyf1DfUrk39aUFoq2Em87rJU9jX3BdeizZArM",
  "key34": "5AH8xZTPVtXzfRGMNM8A39q38YikftZ1xK8CwehJhUM7oXdY8reHZukSGzACRbLNtjkTCGLRR7tP92UPdCYux5nd",
  "key35": "GTTjQwk5bAJRvmu39TF6J7chwCVNmUmLCJVvzYpJqE2FEVc22F67SnEP58pnY9Zbghv4TzRPSE6ppAAzMnzLddD",
  "key36": "qfzvyk5oAbpiEQGcmxpQJUQsg7iEkr1g5jQJzMKe7CEXWcVLF6mCb3FwsH4b9MU5ZhYwoZfxq58iCi8HV84vQsL",
  "key37": "FDupxBqgHegr5NFExbEx9gXqsNwQbvfS5mVPv1bWshwKfkjv2BeMGThaV5YRPgPA8SNFPcLNcux4X1Wo3xJXiuX",
  "key38": "63d5Lo2kxxJsh8sA7W3EHaPe3LXbYQw9e989s3r35cVvJuBT4rGosfFffX3HZiVLLU8ZMzUqyQ1qj3vcMrDYyBE8",
  "key39": "4avWk9A25jdeHJpWQgdfhC83Xd87Ld5d1L1SAfWJzMs3hEo9BywCMdfiQSV72YcbJejAiBKvm9hKt2P72QTuovcB",
  "key40": "Kms1ztGynRxtmfSwNQer4roiZqkCgvT868ycsCbNkcsKkKPTzbTEJgtdiWMAhjWtafJsVnAXQwbCUa657uQ8vde",
  "key41": "4kAvJ7EiLECyBsuETNM3cB9E1u5QGF5eZAEtA8GySmaF8T1QK272bLwSteKPmiK6oTZuZCdpErgHzfMv2eZkHpeR",
  "key42": "2R8P1UNQAxt4jw1wb9Bfb9WxRUbFyqTwYrTYXyCCz6pXvgZuE3xhKwyjbH73kJFnA3MpuiUVai7TyPsi52KMdkrg",
  "key43": "4yDLkXMUhpJQZ4KRo5Rg4yD5tBiyEWseL37GXa48BLxWE5VDYVki3GozoY4rq9ajqs13xdUtuy3i1avuyDApAY1R"
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
