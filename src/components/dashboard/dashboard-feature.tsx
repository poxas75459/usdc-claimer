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
    "SR1tZuZ7tcKnYYkXZJfyvnU7e17F8Bi43Yu34tkWVrbAYtPuH31k4FhngB61k752iLiaNq2HDXraWmtPB6fd75t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rimYZXZjHZmL4cooYcHGLF4vSxzjf9eWmv18tbKvK8Cny99VzETcZ7PzExteKvNhsUS1NVAz68tfAxP98y2Zdpy",
  "key1": "62uUHSAg3rqCs31jCcyAZRTgQ68kYAHsMrqPtPyDJEWXyoFe5agHKvNQV6TtGUr65k7cnje24SCQcUAcaLSQti2k",
  "key2": "1gAGkrGhqbFNEd2hEq8g1jufCfbjSpe1TjYCaBVdECLsJn66VwfXyTBmXoWEbcqqr6vKRsENKVN8gZwyh5cE6Tp",
  "key3": "3x4enHcL8sa2xGy8yYSbyuyUA2Fs5jmEF7uAZFFcaZDYdq4LkLfN5rtyvNRen58T8tyXys5u1PbzWqupzipoV5Q",
  "key4": "3L8CiwYmQesuVR6DDtbCPTBLydouyEH9e19zPz6B9LE4iJcwmECy4jj1GEmKXEn29ZTXDw1CHERj2LVPzXjKr7Jh",
  "key5": "4CGsUp8pJyTusnM8GfB7XAjBeiBoTAj2bauUAjLzoUnFwp7wCwU7mnByek5DVaVXRaVYhSNbK9TxZFGTHwXCeiyy",
  "key6": "21d8SD8vYkKSbah4545rDCze2B5zgFxDycpC5B8LuZHNdb1dKqUFFFv5nAFngWJNGcVp7V53Ly7gEg7JurpSvcFJ",
  "key7": "4JF6fg2Bf7w9wwpoJ3DERtPMG7WXq5BZADWEeQ2L4rLJ4p88Cf5hjCwSRc4J9pX5h5YGum4F5oLBkptXN1G3jxGu",
  "key8": "3c8a8JW2fkNT2TtrMmKS2g6C8pSYMt2gAKm3vYcRgX7fAqvW6bcDz6P6m4kk8tvg7HdG38q9k4KdsNV4WYyqDrrv",
  "key9": "4LVH96ETNZ3gfQ3sHtkHZLiTPZq9VzfkpqZoWhsXhWYoMPGTWLGPrwdbUBSGpDigk4vkFWcned3oQB47MSpaVWqp",
  "key10": "4WSjvu6iKWriTSaPmaUxLvNxcK3gjGiShCVh8SvwJrVdRY1jFha8Bj2sM3vT4W1P4JqX677igBUeJNkGSEkE3PwB",
  "key11": "5ArTV6CLkx4Ag21NsJfYJEQ3TH68Zsk6yfdAXwh6iY38rujzDpdgg1xoPn15hbkVLSrpZjeN4S9QUucNEooxb3Vy",
  "key12": "2E2f8WYM5kzMd8EamJTPBfmKiXzCYHmy7HdZRF8GhLeZvttyKKQqx44rkntUkjBzvV8xLwaCHppMg8dDcQKFm4yK",
  "key13": "3m26xD25fVYCpdUcQkA5J4xg1YrqsCh4NejJgc36Xm7phnMsB3L3ynTqCy7F2rijgDzXVrq153PfAA74BoU5j6wa",
  "key14": "43LKtTwgUUoCTZAQB4RsZ7xAJjS9o8p7DEZZzYWpKBbLJpJPzaiWqkDAQ5g7zEy5D6mzp2VEMmpxBWopSpzPHfDe",
  "key15": "46McsB4fQAnkzvnavkMVzJ2rffToLfHPHZmDkCJxs4Eump2N7oQhEHL7zAtt4A5YBALz9CAhq9heQSLbyp977sfz",
  "key16": "2fCc4mzD6pDcrPbk2Zpg2XeFjZz2s4Q63hGrLW2t5Mn2w5TGcdu3kd9thWNuGd7PS375FDdfCWrhKzQ3eiH9fCUq",
  "key17": "379d1P4MRya7J8HcTRAutfHTBnQMsosesQ8V9si6UZz6zR6QkZFeajoKxZpNFscCctvARdFDASPEUivK7q139n8y",
  "key18": "3Vo2JGPxNkZ65qcrqwCeQcV7wQKMkLDkmvoGHiMdMApVvSaeUCHhrWCnUG2vU8duHhcKMq5p3ZZG2N5kA3c5oBb4",
  "key19": "3vp18AXF1ThZ13GYhb3izLwmT7Vet5bBJKGKam7rsyGM2FAihRbDxGZuxWFUdDD85icD7rfRpZSKzyF89YJqNJvb",
  "key20": "5sgypra6WVFCYA8f9auuVUi3xTT4TJ8JRhvs1QLh54wHyybVhTzLzaFTw6Lkf2bM3Q8VWoLWRH9THAR5VhNn8VtZ",
  "key21": "4ncTS1mMDhew1hZGbEsHoBQFf4WvGztZhWWRHe7JdDC49xGCrcZvVDkZKKtAAUJbEzY2BHKD9nqHu26jVPqPc1QQ",
  "key22": "4gTeKF6Bxa8EmroWB7ZFkzExePrpDuXvPaZGW9X9cTWmtNhjexzzBkPAbABocJVQSDWk9ThsGQAKxYWiMRQkgPR1",
  "key23": "3S1XfKSyqoEgpch1aw8zX5U7S16wZ3nqGjS1bqQWMZABgiNguEZhDD2jFDK9WBcx7VYr9qYnXDyVpWW6965k78i8",
  "key24": "36Tc5gWEijiLqm7s9cFE22CZn182zWUadVCsMW4B2TxavCSFfXasSqYCacGCKVps6iYL4puhbAGmcDKtBBKy77y",
  "key25": "2NMrYdKFzrF3N1upYcq7sHSou7u3T7GbhYbu9kY6y53JSVbSrt95RoCdbRBEtk2B9ZCGjRbnPmXJgKE8KtrpdsZw",
  "key26": "i7FemkVa1WoMszwr4A3zGJq6RyqyDZxBzP73oPAJP4QcoEuUzoPWEvaY1s64q48MYvYhyabzL3EovbvokiQdpND",
  "key27": "3BXKbXfBpDpBai3nk32A3UytHKuFpC5VmAkjBcdrZTgBQvt1ijeKuNB3Ay3EguQ1QdP1AHuCX5Mcia83abcSqjwc",
  "key28": "31ZagjUugjmpY6JZ9GxKjbubuC9Dakm3GrwJBWSjYzpS1ksFTi4djTFuHQBWwrFDLQMHwpr7AXcDFkxiz5rL34Eq",
  "key29": "4rG4rRRLux4x4mTRDkvxoN5Vehzy1TKvugpY9UBBQc1czjaDfU4btZTFT51UgD7W3cVAddoTMu8C8ANZ2jzM18nT",
  "key30": "3nQAfXZk28Dzq3udLuET1iByqhfesMS1W2wPN2JVw6UnfEsGvqCVkBLYTk383PfXwbVqQjxuv5FCXX53G7tc5MW1",
  "key31": "nRnVyR9esFfKEPkGRJcrGBywCAcrCBpJBWjSmfSF1otGHEw9oRdQ2av8tpN1opXs5PZKpbYXvgArichG83DbWAY",
  "key32": "3BzFJdKQGsnFHWAgTmeLhAU2bu6S6Rtoagfzb1BQX2Q5E5uVUxwzEuWK7pkW9mTXFQe5FU9V3DNFGBLXsDw4WpSy",
  "key33": "EjoEyPZcdCZYB9RjXhSc6rLxXLi34jeVMpJrA5UpWAwGipSciBuK2ntc4GXGCCazVftoqNy39ojAcZwuMNah95z",
  "key34": "5rbymPMjkJDkgXPYg6RpzyhQt3FydLPdaranhFAw3ZzYrPmxw7zVqTPCuUKriFHZebVJTSej7KYVsF1HrZRAj3QD",
  "key35": "2BwdTuFxQZiAvUXkKJgjtV6n7UgrNwqVZgJrA9ECxtYN3b43Nrwm4xP56hneaWHudwkseCRE6XZyCJf1Yz4WKi5u",
  "key36": "QXZTQScBmaLWgpUxLv4eQPKLAVnx4ohbDe7dsDJUbMWSHKpxZdsWuYdK2w6VsYCLkTbD865wTXQaQ6wiUcUyFG3",
  "key37": "ZKLNwENyyufjwqy2k6mVKsM2hayW7UstbgijFGzHHaeJtt8rzbm35jZTxen1J2KcgJsKJLq3gJ2TgWf9UCaaZUH",
  "key38": "4Ub8ppmAzZieTQ4RTEkYNVjU6NRFvtKWfzuPCWe2FAVkoa5MQY8KmTnp3Q8NHnZKKkhgL21S6YLkkSE5cTtRX5Da",
  "key39": "55NXdKrFHGkeC5HSNMbps588FxYBT9gD4UwP22yWuiVarvJVuXA4Pbp95krBT9hBMoMsNfaSvrHXMpUFwCtUkbHd",
  "key40": "4oLMmCZQGmLoVsnPmjoNkcihPzktkwk8tny2tgASt4r3AgtchsnsCxi55TRUFekJjF6RKUv4V8FPdPWFxbAUJXpQ",
  "key41": "52qEfL3ntPX9KRBAuWDVFbvVDmzSW7G932F3jWEuWFnnYzCeeEFqhUawtro3HF1zQbaxbxzCUKJ3FkkMeeKq7SmD",
  "key42": "XrTRTn1WWoq7mKFDDP5Liux7WMTzPoky3MCzxByc9Bm9Q7Jg2DQFYVkPAFMRiuLfKxN2shyJgBUcJhQdy3q1eYS",
  "key43": "1Mw5qSfXWMWecjEoJD7uLYH1suueGCosWF841GEKaaawfRxmGw9GFeqyeEAX3pPdLXKWnw3b2kr2AXzVF18azDm",
  "key44": "EqiBU7YokSZGR7saZUjD8uYmYLoj7NqE5az97GPpBNh1r9VuG2D3ZMGAjZQmX8kyLknvZS17uPsmSAwLJaMf1tE",
  "key45": "emBGgE3yyNWsBXrZdkQ8RqUnJCxAMmdsv7R6tSHp4sGw7WsHtcqCkzNWcPrb1sNNpiy89dS6e6VgTuKTFpKNkNV",
  "key46": "36HfBX7k9mS5hy4uosRw6ZpBiVLcsu85LaPTpLZZUJQqyq4otN48QEWGBv2cXydaePVGpmEohQeYYsXUQfECGChz",
  "key47": "5uwyrezkWa96wH9ji2Wo6NX2JBYe1pRQs6ifp1cprqCA5Y9GgxCAYKJR2LcchdkUkkBV7V9bYuFVP7R8Wp3paVDZ",
  "key48": "MxnV7TeGZJ5iFPSAvmZoUsz1BmuFmDXCP2DSM23SJ7DRVvuuPdvHPH5KNtkFird3qNa7wJxXerUwF3y3FDfQqjf",
  "key49": "3B78T67Jby5MC8nWyipzS1DTRhBZZBF36TJ6mUMbJP7FL4y4ZTN1zeno3pJpBfBcGdn4dGvWsE7yG8ipMcTu1ycE"
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
