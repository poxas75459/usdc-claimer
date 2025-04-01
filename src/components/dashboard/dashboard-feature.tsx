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
    "4vSykWicov14er4q4a4ikjoTq1EGdTtmQB65D2f1v7Uf9gxv6K8dfKzLJLyWwwBEmMimC2rraSwRCfehYfpBzfVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VL1qJpTmhHYZgLFddRMLL9M22TVWGkHboex1DcMV22QkEFjKJNPsatZDVx6taUwkGXGoE4syXVpox8j7hHTvt3P",
  "key1": "2est2tGJhW6qpjgnUPaidGL8ygVFPCqhp7YMn4hF3uJVg3QBh7SotT3ZDd8txaShCs3oDCb2naaoC4aDFeCSJwR",
  "key2": "3uaEj8ncRXfmF71njrX1NEvgFQUVyw6gK2kDMVUe6RwmXwUmiLpxKsCJ1KLhgx9HHb2BaEc1z8fX6Aq7ck6syQBb",
  "key3": "3vP37v1PwVBCJnyvXi97gU5go1rMPNAEX47an9FPcJeCemPHvsX655xtryzvt6zLjBoEx2r8zD4DjB3Tmyn518Ah",
  "key4": "4U5TSM6QmFdLvhAyLQ4Xwy93nVXig96edMUZS4Axxf4GQJ2KLabvNb1pDByQrHMBVyE3rtbwZejSqrnn4yh8RQuF",
  "key5": "2FGTwrDFsdq17WKrtxyS8aASC1L9C82dqk2ExStuv4biFZAWHJFiNkz2hk55eMsEYrX2497PDxvhMmtQHosYPka6",
  "key6": "rJbJktBG9DoUoGpRJRNpjEspyPzxUbBXMnqGShDhJeCbLT8UH7tPJyUMZjjwEXWteHG5T7iy8bQkdqSMSRvETZV",
  "key7": "B8ExN6qqpgwKFAYkMHMhy9i6gWtacbzxGDqagWc1rdvxSnLvZMi9Q5nF3UdhF8kockShoTowzBJ2pZhhdBV2PBD",
  "key8": "4itU3yXxpZCExYwVPnJUc6CZFXQe9aLGfSFTVnRosUVEJRmCeTyb2s3HKS7cN1iKRMXTcLExH3esEBYj6dX2cUR9",
  "key9": "3fKBmSM16PvgsqXPZpVPS3bda6nLwsV8znxCDcTFCdxDXvC7zbuv1F9MAmvPKYBnQd9bEqBexu1k4q3sbQgj14VX",
  "key10": "2xWEERfTRSVcHt3Wge2kVBzdRXJusATpbNQAFRtdHQ7gcmane7caNyUC2ZjFimpESzvskxbMxcwnM4C2Aivkjqas",
  "key11": "3HVNMn36aJ9EcrdkV1QeMqV59uW8ukxL4E7WX6Qw6bCuZdDXaK1CHLPthX8LaV7RssdJj3K9JG5UWGSYeChth7Wo",
  "key12": "3o9SgmSYoeEqTxthhtCxhkMKbXA9zzPfE42JWrh3yVou1Dq6oEeNPSnvboMPCziqNG5CrNjrVQzx9qCU5jjLLFRC",
  "key13": "4VNuQsFu4pgfGnJjVRjm2ZMtgXN9YdXNBgdDd85Q2k5KgTcmfHDJVhtaHMFrmvx8YTKoBdw6jtWp6LNL6Y3jU67r",
  "key14": "5zxH1FCxw4HfvJN8a9pbgh7uiz9VJxxzVrRYD7tp6k8JXhQppyCc3AR3oLnKjbedFCSxh5S1swa5zkNopgyebuWZ",
  "key15": "42eKvJrQ6Uj6AnYDWcWXG7dPJNMKfRBpb1iKZMKogV3bE3qvhNt112DVZ6eYpmgmVBgYvBD2b29HD7zMvpieB6xg",
  "key16": "2Xoz6VfS61uDT7CasyfE7FktejdNpgcd8jmrvK9PQ2MToS1BzWoYWuyphxYhGXs9drTsKTBZZyecro3jajLernZL",
  "key17": "2mEnqJ2B3s44tAhrUDK2GEjr8tACDTK44vi9FVED5VHHaBQDV4SyXDxrZ2Kh1wBTSHfJ8UwqYiDEXtxdbo2CHwmS",
  "key18": "rKw1hsHuL5WPUUG94DciVE6TtY8MWaEUbM65W57pSCrgPbB7o2fyoZRuiv2v2PypkNCiDLgrHdyKCJg8APkz4WP",
  "key19": "f5nanheyNpFjA3pN45j5YHATDmBYrP233k4aanasw8YP2jBz5xyA1nwDPBksHYQfjHvLzusPdSXAV6ZWJNaqGwj",
  "key20": "5r2pX73K7wjX5THDRyfJ8h6PiY9Ck3NVwgcbDV7HTKfLBDyjpriS9B6MfzENv8aF2ZE4naqiX38DkAERep6t1LwY",
  "key21": "4Z9q1pNuWknyiAprndQxyd3Rvj7N96kcXsvv8ZTBdoAsGtxEne4PPffMnMJnXA1Nz2jchCYU2eDmoPUsfjTeztCD",
  "key22": "4K5bMjNSKXPBSzKHfHz18iPULG4NW8M2Gh55AV3VYSb1JdXWeJgaBWY61RUDDUGsKWMgPJkRYtYWKLXpzBS39D2M",
  "key23": "2eaQPvKDKidk1jVREHyzidzPz3icoLCVmdqwEEivFQLY3UKsETXaT7byg8ZW8XLNaeUGhc7yMY5SzrcV64TptXC9",
  "key24": "3Y8w87MTrYBoQy1aCzjWMY59yUJrXqiTongaZ5tZQZufrf35ufL4pX4w2aNFHq14dLLqYnHi8dGfxsT1n36H15f5",
  "key25": "x33SbEjfWyBuWTWXAh2CWA4d7hEPMFuHaQTC81Ucgmd4a6yjqyn15WVrrznGVwEKWBfQafjmVsVQFW36uLXC6gT",
  "key26": "2gWUWcAazV7viN3EkgAPKRkYPXwBoMAAjWVKMLtDGp5Z6wLYNhgPt5USLi8PLTAqBA21AX7PeoZqo5p9HUrUbmAh",
  "key27": "YE5zpbjjWp5o8WrHhuTsYbwyfGCb6JAtpGoTTz9NTL5SFudAGu8a9SWS15zZfxMqj4FMdDKaF3hB3QixvLAqvwH",
  "key28": "7uggkGLjqWvBEgZU3hjXtax9ymrH7s7CHBsqietEuKMSnk1QebN7z535szkSGqum7FAAfDw6xrMKW3cMzo3N38C",
  "key29": "55kVr9ZztU6ckCY4XPey5hc1iH4JNYmtRrH3JcYzqc2zAKixwjAtuxXpfEJxRvurvGhk2nZE7HNVwSp7C7RsriwL",
  "key30": "5YTghnhX4qxNaezbtoJPar5fiw9y6nu51yozYYUxWCngadk2LcmD2kjMzy2SRngFvkqtfACSXwcdNYv528b7Zn3S",
  "key31": "JLUSDB2dRpqwqcsPnUkj7ZCrxhXutcAzHjxKAgkGtyatWMrU6yuJCTXZXNxmaJqvt8axZPU6Zn9qJRFRxnDpGon",
  "key32": "5mWfEiqDjdJ9PdFCKn4FsAWQG1dKG8eSSjc3yFTcHkaZR3YnC6C2fzNpNEPfKaV3guB1VivVgQhnmT1PR5KKun8A",
  "key33": "2MBdg6qufBLferm1feYFvVzVqchMwv1zbcQeQsEnZGuKCnEYwNJV7WVnEGVbwB2FP3xj3HRwq9gc7tFXjon4m6eF",
  "key34": "5UTSRwZS8nvZYG2mXny1Ny7TCT6QZnyfwaksYQLdmCyN6pWtLHArB6dRKAnRg2GuGDYWpSQVtSb78F8B73fyNENK",
  "key35": "FR5fmFfNoGizGGytA7eSuwsNeyQxiai82ksxQLuyk91PRrUN3SfnjcBDFUCGVFpVd4YERe4VJ81zdiZLhec1Em2",
  "key36": "425Uo7YfzFVLENwfASNiNr4fWvF8n4jTPww278E2rDTGsFXBdttpCB4taFA3SX4DgLE69kaLdbsHF3u5SrYH9WsT"
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
