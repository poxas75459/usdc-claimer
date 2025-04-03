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
    "2SNDdDeWcNgfe9itYrpKDvdKwsnmWSDmNS3jZDC7FLoBf58rqyYuMZRn3t1yvjNEgg6hwCeppgeoQKqaEfzPLNDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLaaf5oEgNkN7ZXHACMkc8mrC2CVTaFvjj5p1Ejktad5XajSH4nS8WXgEc6JtPPqUBJZTmn528bKezaNLp36oRm",
  "key1": "2sv6wAeuiMJoCUztE7K5TYLUhUQcL2Ro3wppFMqK8Y719241m3PvoKeQQm9LKjwnDc91hGpjEVaREiDmDiPX7psv",
  "key2": "3Y8jB2Qv9BcJg1ZiM6oD6JNAycVhcupXWT5Ei8uDPpNXPvJ6jyBw5tdisFQKvk5AE12CsMmh3z2Dfea6RhuQCehe",
  "key3": "26m23No1e3NXPfSR14fLzMRSM26sZdsUp6hCBY1bNjnWYDTKc5AtXUki23ViadnsNaCFtVwfLF55Y8M3EYbmHo1C",
  "key4": "2fAnA8jEsyay2bdkxC5fGUY1GUdXbAeGbNsNhK16bExGMCb8VoGNjBnzKUhdKEpxjviAq5cvB5qhiia4mswjm8pM",
  "key5": "pBvXqjA1pNPey81RivqyUwDkwo6RTMx7qYGpYXDgNCMuMK46SYVDC48aD59r6cTj5JFxtzxNRskomCGpDouWz1q",
  "key6": "Axp3DuRcwshXv59Abq3mAxG8cAnxhjvnNLfXCGWCaxZAXzfiXRfTCFnQny4kFVPbJoa368m1MYFEB3v9pmAz613",
  "key7": "5F7NCtKyeMvX2t3foG2PE2DqcdGH86Jo6Knaok674pEXXX8pj4zexErHDXNWrpWwzYgkTmxHrMqCrH9QhTk5264p",
  "key8": "5pvV3mbp4NFtg5K6q5sUSEVeaW9hy63WwXCfJ2rjeMdwPzv3hmJVRTbPSzRhZRte5dJLKHJow7GmDmCGjunwjcWX",
  "key9": "bHy2uysYFMVXzeipckUcnoUZQohJ7J6NKnumrJBuzjvsfYCq9hHz8Ebd1H36wq1hhbNAoBK1XTMY9uG3wp7yooe",
  "key10": "5eL2K2B5bqZZpQTjL3auekyRy5rnYiZDgDenxEzEbsA6kHkqehkCceodqe1Kjuc3MQXNoptvAE92Fc3noJWEin5u",
  "key11": "63wFTiAyEsUcZ9zdheUXi6CJ6CPaZseTGQ4RNBRPcDzDMFcJJ8s1D85A8U8SpQNzSSNNrUYCV6J87fkNjM3EMqzZ",
  "key12": "HuanNFpFVUX1xS8deCc2oqGg8MESSQFwXdcVZdTipqjJQ4KghVB33ACUwYwWabBYazSnqY3VSRErPDae4je1PwJ",
  "key13": "4A1NkRXVy8QktpewR6VeLprLHw7FD64T7DQxN91yVPdwUoFt1bNS2j1SszCJq5XHQJEg8qhXygcuKsJNF8c4oUim",
  "key14": "sReSjux4A9WBrVyzBrM7NKNKrrRMTeL7WCxUMHH16Aqcs1QkCkPi3JtvxmNdgicEtTRYkAt8zr8ojL2YwXdwx84",
  "key15": "2nuEX5EwDEk3MxsgGSMfQ2CeUjH8wDjijLRc9ZdWiLG1ZLP1cs1WrkLZoigkbTodPumwvEVLhC9nLcGNpR56QivT",
  "key16": "zXGu2et9da3ndemEMyAAQFuZfaSY7mzssp1WCAttWsvL5FbkWBdYYAVv1p12kFEGvhMk6rP1xq2JHt9qtTCUbRM",
  "key17": "6Zcvz5mm8Het1iJRhwXKStpwqbZqDxmBJgroQEJ68LeEJ7QWqCuhXK66VYhKcC1DYRg8HgtT3Ji4MsWhF1BjVW4",
  "key18": "2Hcfote1cfrKxpE1BzNYS5vZf1xbXVc37HTbDU8wYZDvUCHgnoAUjsdJR3WHvudZDZmwVqeTWFq7vYrP3qd2NDjt",
  "key19": "UorL1E33dMvif58F3o337FDJcYhg4S6xTfgzndDp8qr4LUb98e88vY11wFApYFQYWNuQ3V62dWRPAvWPtWpDR9i",
  "key20": "2StmJFnzBupceZYtPPgnR9aynmEDTo21acgGaFCrz4nzvrcG6jTK5wPGjretTyshyGNiza9ywrk9CM9DxLjXo6jT",
  "key21": "5rugf9pg7DjS2R3vBRXnvAmBa85Fqe5TSYtVAD8yHBMKMdfkFzHaKp1ECLu1L4M9Kp9mRTPZrPky8yr2bsDDcVsm",
  "key22": "3zZrABgw6s4jkm7Yy97YP9BPk2dBy8J8Y9cPATdM9vwbnqQc3PpwUpgpAd9v8M5jdEBNsV7b93E7hbpsFJJHVJLo",
  "key23": "27qko4QpiVigooahsogyFHi38SdXga7mYt8eb8ncwfmAu8XtWbZNSES5GWaRQcgnjmA3wfLErjYQuFYPfuGDL43s",
  "key24": "8FtL5NoddC7sGAGv7b6Qvuozuaf1KZU7bNm9FNvFQUnj66aEdRuRnoDbyH7DzmoBgV2sHhy77VzjEwwb7NfGY2D",
  "key25": "4cNheiR6KGKJzpmoV2D8cpB4XJrFMzeRVaScGchLr1naVvkcVBe9GboYXhcxpVY5ZFPNJBQZX6m774drYrwe44A3",
  "key26": "4HKTWxAtRikcnL8oVr2aV5gSEqM55c6FZYY9twAxh1yKzgmxQeZw9X6W7jbUo7qyguCm2u8EnpwrQNcmDjbsNCrx",
  "key27": "2aerSse2dsrPzo58ZTZ9xidhQtj7PAShGs7Dcvjis5Rh7kqB57PuHiT4RuJYQdfcRTJwFkTS4ssBv3moYpvyUwnx",
  "key28": "4bVS5PWaZtz5eQfH2z2VVv1dmu6ESn4rcCPH5BAVsoXxvkCHAcx9Ms4YLDPJaEERzrYiSdFG54KaPv18R6cpo4tN",
  "key29": "4qSAZyLyKwPc3CZK3cc4h5GHPQAPMsfG6kuTL5PJXJ5ihGjCvBGneE99nf6rs4QNaFKtWNGoe6fawP1ejvfY3VLA",
  "key30": "3HvDhtS9bxoaFDnGdNT4jnfJYHNqWzcf4MC8krA1ArBopFn1moH33Tcj48aJgrtewm6MqoNVPrcQzncFds595Zws",
  "key31": "g4BuvdAtuqMyUN2t9jjVJiYMsictc5Cz7mibM1DpHJpxq1UKgYWNBXfbxizAjzT2WMtSQqFk6VCmzWiQ3demJfu",
  "key32": "3qJ8GSbKZksyg6bKD75SCyNeXynrE5mvmCtmdby9M9WeCPy8mMwqtQUHT9UFgDswa1gGvVJKWNaQXZMgXg5qJgKH",
  "key33": "oqGjW5WRxGP26cJvJy8o8xo6SMzVSieQosokSp51i2tDyphrwxPZVXQLxe972PFSW6hKMgEPsDZAs7YzeJMLaqV",
  "key34": "3NJpgYH65x8poM2KFbXLDrXRJYZdP7U7go5tuayzLxmzsAVWgDAz9WEx2dCRjdeZa82RGmz19NMAvFyrmTAF4tY8",
  "key35": "Ve16VBhv4pauTELvQZqkD2oa2pqp9zeZ9CDWKgPgHCEEE8NJXbkSQ3umBVzbVboqAiDvHd14dJxEdAXGkTWND9c",
  "key36": "4aBsasMArdAz6z53gcFMekAMWg7L56YQHi5DQsaMbiuxwT3mtk1EJDaW1ND27mmJy2n3hkEHZMZLBEH6pGmowQD6",
  "key37": "2j69JMafyzHe61JYdEGPjUVQs2n8LQNiSK5muoERGrtxfq7dD3ibX5p6JQbrbekBL6ZpRA2dhHDs8V96ANgtEmEH",
  "key38": "pPxdLbhe3seKZ7py2n88NFTzQwx1H5UMp4wbKKWbxYvyiT87VYSMgzsNSxGdUhW4ef56WNWZ2RQkh2hqBTz1LaB",
  "key39": "3LAEGziAK6SBjsSWCHEjbStfSFyGLfLJbY1j1nwwGG95nrh5HPqcYp4MCLuKHXQ748eaKBu2yzaLSe6gWKZnH4K3",
  "key40": "27uU5JpTZLL1AkAZERwuk81CodKb3nNPKGzy8WLQeHsgPLBmHG5zMuQ4MZeBvWtrZAK3U36n2Vy3pUMJYnfNYVes",
  "key41": "5EEHtxsa5YE7PESGvL97kfTuzcAJHb5RPr88ERjyKYkbjJXSNXfTYnVMrxnx1WwvEBpJKpkQKEb178oMYtT7xiRA",
  "key42": "2VmDC9q5PCQ49DXPxsHY9UqPRenv4Vi2uKYpEjMGbHAv1Djm5GNpZ5mk3PaRNziMwUHChtvE2RkoxrZaD53pJzS9"
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
