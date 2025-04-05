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
    "2MpgvdHS7nruUESCjEB8Vf9QsepobJ4VSQSjuFbh14d7C9mzuhqCYXrbFJ7KPXwgoDskMZ7JGMrVAvS2WZSPHRKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4LZnrPM5NorGAhcruccdB1RMm13pjDbRFk5kUaxafyKy2i3EkzjCVmRjDttSYaHQy1y4Loyn19SgCmAJN8qCFE",
  "key1": "4WCAT2Ng2vzJxRp9nBgkB1oD6HqEELwmKuENGEe7eRWR16CuBDud5C3S12qxLShjszyjF9gCwfun6qKUTK1sDfs2",
  "key2": "4xV5zXPXgJw9E8NUNVkQjDD8Bb59rNuCQKQg4m4WE3wE8c8ZA3Bh8TU5iYkjhLVtxbVzZhmMgtpB9V1DpefnwuHa",
  "key3": "4oWyVRyeAJdqP4ja5AGEtEQ2gHZ5TJpHfaECpGFTwm9pdxdL52xnkRVka6BXdG2mK941Dnrk8Erj8zK65SsyjuFM",
  "key4": "58pUbCcyw6JRy76oowHJQmqu1Esr4NJ62zuVuhNYFgZtjsKnbNuHAhuJ8hCSP5yNHKqzwKxy5LPyTkKBsc8wbyTq",
  "key5": "5efvjszJnjWATc3LRXpPzANSAFde4D2yM74DtcenvfdP8Lv2vvhm86T4b341EDSRW7qwHaPYy6RHsWTyLDK7wan1",
  "key6": "4sEP39Tw5dhg2aTJdbxXBCLgdMMZHN1pDfsjQHSuvWerCEadUEVgXTvs1P8jqijHeLS8ETNddpDx2rt22WjHF3iX",
  "key7": "4oyGgxokah3Xr9qxVSrijW88U7gks9AnSGYaTJG1iSh5AfmzPpVuHfyGLV6co9vjQqmp7zZdzzD4hnUKc6rLz2sW",
  "key8": "2T7KGYVSZUR7M8HsrYJrtymJcerns5x9DUkiR9CuEQkukvxHHwMwTrxteojoyJrm6KiCVrDqDL3WFGuksSoNx6GE",
  "key9": "2dPwQrDhgFrK8HnGDuWoWWqKA59UFw9fjyNADy8KEUnwHGreMmpULVsUbvnxvN7rPpvc7ocbvbWumXo4KuWVSbzP",
  "key10": "2ywoYfVxWBjyVgsa94gfRFZFCihueRA1JPpnR28gsnLoPfrEAkfbt814TrpFL1EScgVhdjPCZGrCmj219yQ5TCPV",
  "key11": "3trqfJGweQaXF8knS4sdcPNxWq8G9eH7TAeoUz9ZdHkim3vgjUq1AbCd4ii1qNNC68ZTemyyefRYnGD3RuiNd22y",
  "key12": "4C6H3SzHmY5ShqprRtoDEHxceK8wNfowvFtKnqfKDiwD8G756D4ZwtxV6uCjWc2dz9nZPeaxBBWsW9YDrhXbmyCg",
  "key13": "2gFfB6KDujYLqSxTF3vdSQ22nEpTMtRuuriEj9WCMuFFNzy56nLFbhAH4gwUvb6i9fvsB3u3eENerXHPBimLZDNH",
  "key14": "5kyv8NC9g6zcDnEvuq95GPCd4aZo6TjvA9rQNuVuSaEAX81P92zn96KdoBVQkdagcVpP87Mvvxva6dNUpAQghJxN",
  "key15": "53VZfhXPDsuHNLxYARbojsvgsvtwfGiSiViLBR2FLJzTWewH97xLjh2HFG3WokrTzmbNt9rKiMAcyUX8NCeqeC5K",
  "key16": "2y9uxnnsejfg1PfBqxDEcrdMfmRKs2BAZx9Tm9G6FEXUZ8yaGzixfNQJLjihc9su8sAXRWjPeyzF7r71LA5xxtZE",
  "key17": "23tpv6j1dos6pQUQ8KRbVU5Dr6Q4xmLxCutCaYF7KezrJAmMBv7iS2v3fKnD3m5fD7eg6Z89tHbMTHhyYSraj7DH",
  "key18": "5mG9YzBd9ARHafch4YnboTsUHFheL5Eo8AEN4S1941a1U3u1W4sGmZXuofpwqraLA1StgkWkZF6nhcdKfXZ3wr6q",
  "key19": "3ZX2wvoof7nsQiMQDeNhM3jCQC6Fab2as7x37BkNuyQHXwYaJob7hVP94axvGy1XthDafyhpH8Qw6B11At3vk259",
  "key20": "4EsPGvSqcLM6EwxL4oNjfdHutvB3EDnEB8MUiBbjprAEHmPr82TGPgx43STfAWw7gXfrQ2QmPi3juvVSLajvEgpB",
  "key21": "2CkPhFcHhmcsr6wQE7Hd7CiZaFCLQEeCGDr14tvn2GmmgUrpwc3scnhuM446xG45dyZ9UEi7rTf5DoXbVANc2Qdw",
  "key22": "4aAEkudn6USFS7qMtbQ5ojMWNZbMuo75G4XeWw5Nnk3YVjeheZJkiXNmS4B1EccLrhESH3u481NxmTTF87UGBmZ5",
  "key23": "2HqZAqkCwXajLLjAMxXxyhZpHa4khpsAXmXPEuDnUTviJNQ1idGH81Auwf2UT3o2VbcLreseSsVRaJSmWETsFKGH",
  "key24": "ks5SZAJV768u5RJg3nq6X2WtgWgMaMBrQqoR3JmZ3eae5LbZHavxiKvTq8W1kT9zFsnG3myB9YLSkwRVJYR1MKw",
  "key25": "2j4Y9GgwBnWqVcrkrgpHEyg7vL1bMRRqzLsysBmw5FzHXdvrgf3xyjFnWzCnEJ7Y1inAYsm5aKp5dvnRqhgwmdzb",
  "key26": "2uF8kZVFuRntpqTZ2DAYrDWWHCj3xxFqow9wdfGLHzVEuxasWGd7UjA8Lw9qcxtmWxPpKw1W3kFF5dXQ6jfVM62D",
  "key27": "2eZBcyVt5iZpi9UHv6S3nkbFsWGLbf4bDjm6TZ4CuGnqsFB9CMsG75jjxyzc5Y8NbbQW21hPeCG7WCVDwTEXtcLG",
  "key28": "4TSJrnL61kkNb6C9jLpjCoBPV77cE6rf3EwgKkJmPopYyQBPg1VMbQFhTpXGZaKLHW2yxV9CbGf7CnVjvxz2beS7",
  "key29": "2b8PcXrydjiCJa5rm6F89appdHrUZtW7HcHhbyQ7zqZhi167maSSoemwaaLh8jfaJuWYbYysx9EaVzNWjZ3kYYNj",
  "key30": "RKhZncH8r49XLaDxGnYf1ej8gCATLnWZ9gnEj4NVJiAVqbQBzQ4i185BQHbgFrJQvCE9hpShH1adWC3DwbPirkE",
  "key31": "2ivfcdZ9AWrGsyLRoScEFRNGEHgehJ2YWDQ1bxQTzAEFAiLpsKPV9fk3JMzNVR9xLT4s2VaksK35v2AuwXdu3Scy",
  "key32": "41NMxRLicic5dg912UtZVpCKLWener8VoEmsUhjUPY2FZSEb6fiQFLGCPr3MJkT9E74tP7VtYxKSezTtBXg2Tyf4",
  "key33": "5D4DuCD39x11d3UntHHv5yZyRocpvQfxKiHVoz4iiNtGzMfKxSL5KN2GTpbASUUSE75wNB6z9bYERvshzbdj1n9c",
  "key34": "2WuCvfDiiizvxkMEczjLyWkujAbvKuBsLRFFzc1b79VAX1dksJbJyiVdiEnysscWccQkN4RMRmuAwNMZWQQiEw1B",
  "key35": "E43Ev391BB9BGen5yvtoWwMwQntM3pHL1yxhkDwum2nvfSJr7B9fTx6NMxPCurdZadGvuggLipBkN73uUtCyPQA",
  "key36": "w8c6yb2NshfUaQZojYYPMN6eRK19wBSQp9sNXXRb1AJMgFejUB7HZcKedg1c34qTsQXjBMDEJXTZyyKGTgNwJLf",
  "key37": "JWw2p2JAAFzNw8nqNBCJvPMx2hxYtCSNt58DgzJXxdQzreb7mGNigeazWXF9yD8nfBhfsLb2PxGFi381uaNNboG"
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
