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
    "McD1xQEy7AGoqQjmQao1HyKKcLXgVv4ecCDLzpYXWDEZDTTqqfS6YhoiE2qg811d2j8dCXfiMz5VA7fLVcSBQft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWiKqVczCbofdpkthgLPBJsctdhnGmHAaNypmp4BGueHZWwVXFnER3v6YS2abNeDMuiX83JbsfqY9c99s66weLq",
  "key1": "3isBLMt4CXKapDMcjHcpEMgKgEfDRN49G4n4THtxPf47VZsGkJwntAKHgdWZf2KLweLS9zTVHnWExZ1Bkgvh5dYE",
  "key2": "3izEFtKh378hqwAfsnd7SQTpDnSxFTj4gbsNQZRZJ8dxLBky3uCYGCPL2agVFK1CF3Y8SmRavpijk1NMbdcwaXNa",
  "key3": "QScNF1uUsfMSGZfnmr5tP1gAcsDsSRwjtDoxEpeBDjFn7hmHcQKMeThKNu4vWTuhAmPHLcHdNg1AGJueayne4SN",
  "key4": "51B6ucsxjJGoa7wiePzgdk9ys73x1uRt82Ww2DDCy4nhT5FVWLfaukPi1cpzGEg2hHnjjuFmRbRqtqJwjZeJ4gYF",
  "key5": "31CTKer4ZDpXWJmP8FESgs3Yhk32zh1Q7S4UupfjZ6RUorsp1USrf65zFoL3bNvTTF8w5CNHg8zQ2N6k1fc8Lab2",
  "key6": "2mjaGaaA4Tcq5vp1nujTpQADPeok3rzjATxxhDC6L8BwzsoNrK1KqZjdPXYUxQfBnR2VHQZQvfw988FAJ65PzzYg",
  "key7": "45AzAU6SQpjKbFVt2HuFTa5u4rh89F9hgHMehZVomKmFz15syN6vW4XP4PdnWW14o1V3TWrLvSZ6W2WTW94EuG9h",
  "key8": "43282A6kfpyA7iYW3zqygkjZRwTXxyyuaPjzRQMuonfL7A8KoFfGDk1FjTJedCvCRPEC56VTYkhhq6ECw6mcsf6J",
  "key9": "TGbV2uA5kyNXg3HEb87kqVtajsBjCdLEDWqSP5FRrei4yzPomHpLpoNAsp6gNBTzSYX8YBBcbM8EnpWELYhv4uR",
  "key10": "28878LBigoMCv3mHDL2BowqX2c7642NB5skYMaoCF78CC9bfTPdc1rMKPT4FpE4RikPE2Agn7MUEoMYJ9uBUn5zo",
  "key11": "SwSVQz9PFpXLGwu2ECzZmyuk299Xt37z8cbjRBjohVhVvospuwhqQ1gAuWyMrPNFb2BMz6c9JijATtTSjLLqVRB",
  "key12": "63VLScBpocCphE95N4bifYEFyCZoYMobzix2esfeZNrEdcXLKCb2N5mriHcyxM2ozcG3eThdJhkQEpWCCQ95jEzo",
  "key13": "xz6R33k5sJaX5dwiBAMgYGuxBm6Di7MogwHLPRFUziuLp28SnMtL9zrnNa4RptMq3S4GZV9wuFX7Rijn9ZADNPN",
  "key14": "5JT9YbPxHiz34kR2uKUogsyZr3JJcoU6VspzmttBzKSdi8XFL8YZRLYL5Ed65Z3jRHMVyAJTBwGoKc42cajaiB1u",
  "key15": "3mHfgphVVqAFwZPF3ANg2ZLSzqTRNx3doz8J5ZaFnjwKc19sEfxQa8yLqHm6BE7936HTREzeQCwteVxnxTYjjjG4",
  "key16": "27GEVqt9z3TxSNMhG49qRZcDRYEv5yFurMomnwLkAG4nDUhKZijgnQQGLB3XwV8YKyiq16sMmKZZ1WoTbFxjVJ2P",
  "key17": "3DZNyK3NRwsk5VMyPYQDwUZt2aAFbxzuLjVtr5cBtncmSTkRjnHujEkYWXhARENgJ3kuCLihdCujLfrJk1obBtrL",
  "key18": "5f7Pbwjam4kXpSvcFPhZ6T6PjNqDmVsTEL6DY4GSgbgumQUAZWRBEzf1BdUvYAMwFEjAq8bL2Uvb5gjbA5Dp38oM",
  "key19": "itmNY3UXo15TJhLf6V4hUHnAMUv5pToL9HxAWfDgAhdTJSHqvpfR6TPBPSpgvDVp3VDQuCugZWpSaApYJfJsWNb",
  "key20": "4cfzu6MT2JtA7Kocx5iQeNy8skaAxCG6Hg5wYTmuiZMEzyE3kvXX5dssN4upNkm5Xk1HBK6LWJfURLFxoYuXrAK2",
  "key21": "37QK6sFAeCYYurAucdxomGZ1DopxAtbgYFBSi3JqWrq81H3tisg6Qs4wBznUuBxFBx32snsvJmXn37xtNQBpTFoP",
  "key22": "2E5Z9evDSvLagyh3T6anS7zt7dkrLnsqPZqRWAEruMPH1yLYN8RK8JiZqfsmcWEPcB8wQgHG2fu74ofVrqDWv8LY",
  "key23": "2BiBAYpykmRKva5NnWurcVkzfKNyRRSYH9PkzrwMxiNGwggjr8B8zJyigyhrxCEdFAd7voQcffRxT5MYpvDNss96",
  "key24": "2rvjomrdksZa74gRYEfDPSs3sAaEHQwKaappjd8fbwFC8qzTgtBMaZkyLkydjgTFV4viENpFcm986Bz6ZJn7nfJ1",
  "key25": "5h6kP2oiJoKznnreWvfZVeBncF4JLjfzusVpe4ATy4gEXMLXFA2MXt3zWDbLAKzWPmeUb2XydmYPqghFj2Rx9UT8",
  "key26": "3HEHTYUipFt5v4yaTEuhcnjybSH7cKPjrK9Zj1oCjzUANRqc4a8RFFaDytFStu61g8vZDrSxw5cDhXshLWKXCBsw",
  "key27": "2QYCgYx1RhwABveCRkFqzBMhaBNsoNcmsPibM3MnopCFiLpijyjH97QNANCJqRsYvdrMbZhVfYu1D4hFgevQ1z76",
  "key28": "3aKhYoscENCefUfBWtXhXRT2CCviKqMn7GjgU7v9MjhUKnkeChd2GJ3reFwKigLmoA7LepdWJeHRfef52tDEpkXc",
  "key29": "2fyexHDPFye2jBrKhwFYwzdorLcMTw6YpeyFNdrpivChNshAXJjqE7sf8dqmBNMdE6UeKiw3VyTrYAv4wQy7Ptiz",
  "key30": "ue6GjW4QBNvqTatuf3vUmzjTmR4Vbt7CRmM4uYzjVX7fSMdHRb5TC7sj4U2jBXRHCxucwqN5HCqEEqQdLviAFKU",
  "key31": "36EdU9DqBP8bZ37NVp59UL1NWwAxD9Vcg7h7JEkvdvHrqJSr2edajJjWnSUCfqZKJ9AFxaUEQrAqJBQGFXFT9mDP",
  "key32": "5tNUj8nc3qe7S2bUB2KGu71mNxRNP2sN1iLo81N4gXqFHxgsi4nNt6Fwu1bNvyFDzGR84UdGekXQTtJoE6wc6ooh",
  "key33": "4BNxb5wHCgvjGbZBoBAHLW4vLXaQcpKP6XZmUdXHgEqZo35y11WVsPUcECPy8AVRQePriDm6ZedjYvWH1Km9SZ3Q",
  "key34": "36bcqNgSZrrJ4CEFMr5T2vKQQPqfxKwQGi6v39PRuXy2MnAd8EkX5XdWAwbYWKVZP4fLcYvsDJCnn6Ftt1DCiHFW",
  "key35": "57VbijL1eyLpcNvn4bytWyzBfANCXNTwmpxJJhbkmTJTH69pgb5qDCQumDA5W3gxpjqmE4gKqdMnnwfVdUFpvLTC",
  "key36": "36NtucvXPSTUhafhrQ2LonYfJJrmGcPgZFuLK4aAdPP1VqSQW8nHR13fQXixttjAjbGnf4cYc3WhAwaZBE5KH89p",
  "key37": "2cnyWwY9YvQG6iBzDvCSZiH6X4U4HecgnDLuuM6HW8AAs1e3uHtVV7j7bDmx3HUJBozs29o1wpxtWDe3ssxxQana",
  "key38": "42BkSvsfWjJqE3kSUFbaK4QRCnrESdoagjGgtoGAJTh4HyqK7au2rmoqV8co1uArTMtPAQkDstJurKyWv9wLg8Nr",
  "key39": "57aAM6LgHWegvd36rtkh18rdBYzGSR1tzVoLWD4GnGsTBcjNwjgH4iy1qWF5gpvDaxMBVbG1PSyzvuBQhr5fnGU",
  "key40": "3J5J7VNNsuzRUzZFcauZGhPYK6X6WcKZwqvTTQtCQjTgGKR1WudHWwkr83bLtGH9Eab6Yrcfzh2Gop3oZkqDWBJv",
  "key41": "5dUBgj4oKa91AQHrLAU87DggDSpkggEtpJyxiZ6YrYxDLmfLQ2HjgxGsiTN24nKPt1ftVMN3gKqEstRTUuV2TqmC",
  "key42": "HSJdV9UxXmNZofmrGRZbEtkikTBSzUsqnBPzxMnTcZNcEeP6JdUkw4ytdMqWirJNZsRncgRjv4bbnhi6MvbQYcE",
  "key43": "5LMQLQzsuaNi1S5xvaN43m6zyygEBog3nzYGLFmAxsCtwoJ9tjXtDj2vTNwCwx9Zg6kNnvuiBP9USgEjgR5yWmxR",
  "key44": "27Bo5UYCiUMQc7Usgs44E9t5s3dBHfbCkoXo6UQxbJLffzdKCKEspShsqTW9Qu8aWf1UVGwERmjfgV519msxqXFF"
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
