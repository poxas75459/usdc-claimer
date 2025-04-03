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
    "2aivPphXBE2tS6iRiZHZnqLjqspkcJTQtgxM9rD6GWndAz2muS11wTnhpwc81qGS39MesebUc18c8gsrGq9N7zoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28nvA9V4XL6KxsWQ8AwEeSMinQGxeiZ2r8VmGCXz1zqhv6GwQx2DZzHkiwa4tnpe2H41ziFYaKgo5EL61VpKY3rR",
  "key1": "6711AYwLVdxft9B89Bosj5PVEmNwGHERMJ9LsMMSGaAvXQs7ogMs7UGvxmSX5jPaTHHxTTh9vmZW2r8MtAwoUFKy",
  "key2": "2qM3aCxxEPqRHsiXoLSnzvfx1voJGhHFn2pJ1jcLUpri9aEsEWpWQEY4tHR1W4mJjhVNa2748kPbUD9ttF4DNKw5",
  "key3": "4LzywZyd1u8DTP9JxAdK7YXXVRiZRnGP3rLWYBgyHjYBXQKAnNMR6S6Lre2MEY9pvQtDqYqCRf8HNJ8poV8aTCMW",
  "key4": "3B2WET22oKhJ8u75xd4DyZVfpmz1sR9vYcAZSzP6DLGuy7W2df6JgvgenNdZt38JvWtKHDbXTvVK6QvNoK9L2pD2",
  "key5": "3ajLnJDq7fKUhRXNP3LE759McVLC478K8eTTUJJKNH21MCjpJD5B2GTuKa3JxHWnhJEWYWaLPfe5mFryjEL1yFAs",
  "key6": "4UNcyiCRofVqGMFbfPtku45oxPJE6rnTuWvG13XHL81LWymNykDmXjmjvnVaKMG8E5Q4fXcLNNALjBttzkw2bc4t",
  "key7": "DT63NKUbZ11pfLZMHRU3rfQVUoN5EW2LMdyE1nmp355BgmrvJHsiFk4opdmNvezQ7Pj2TCBR3H91UYHkGTcg5nk",
  "key8": "2oMJ4Fx5EBZhhKhQFC7p7PneNfqgQWRDa3rinsHjzCLUx9WMMkw81awCHGq56H3SgVpdrJ91At5AWEisiA9fWGD4",
  "key9": "3JZiA7QGUspUvfZ3AQb3hY7gFHTx9b2YP1MtRAYQfG8q8zCXuGyCnh5cyhH5JobpEwTKQEuX6vn3uDapLgzNeD7d",
  "key10": "4UQ6poZLsuzZ7219iaRkd3kG65fKqrGfAMQNVVLAL725NqnPqbctEreodEHXAQn7xpqMXgn9tr2SG8RKfLS6jXuU",
  "key11": "4GiszQrWhcazxKDvSeELhx6kuyM1DSrKT5QwJwwpHgp1i2F6Vy5PrYB4ZjwhYhXxBxkPo9TgezjTrmnmVoJnSFiG",
  "key12": "2YXKKXAn2sgdCGUx8t6k2jzHvgWyzZC3pRKmGnpyeECtwMt8Ez2DicEBkuRYFem5hrebZ27VBHQZBZSTGj1ZLgmD",
  "key13": "2nDqsn9StcNy8CWaqK3VN4r2hEck4mAtkk9w6c6zfdQQbK7nm53Lvou9KmAGNFUKdNcP85wNB5ahTffYARUYduGg",
  "key14": "HtTQtbDTFmfh6LHoxTyUF719vY3zVUxJWg38dUKDk7kRyQkxPazShudTjLAMqNZcWt3fPjSFG5EFiXb7h3R5jTZ",
  "key15": "5ikfzvai9kE5MsD5rygL2wvodeUoV3vZsF9foZu1XLGnFYhZiHAJ2Txe3BBdpdeSQsc2pvHEF3MZTZei1PE7cJnL",
  "key16": "RVD8X88wDKGuvvrVXA1Ka7y1YNUg7bsRPxy8t3L4cg5j8WTo2suBmKq517z34HH7pYZpkqHTHwNrhAikZSSQyck",
  "key17": "3fvBUghxoKDGrwQDdUN6UEm83p2puNasvSh7TSz9hLNvedTXVk6GEjFW2BKRnRrMjpVMwWiQUFUDuNLhsQkDrLKS",
  "key18": "3GK2wvVMEvsKRdw8UD8VyMQ99xJjwyQC6u4Qw4BdXXCo5Skmd4V6TTWxdiXBFWCAWq2J2BD5N7hHWDegGFdQTTXN",
  "key19": "3ak9NPy7u1G4e15WXipz93rxFkr3Jx1RrLevJphKFzWw61dum69PZKEcpjbvGAjuHR7mHgA5gBa6gi3Yg4Xn5E2o",
  "key20": "2RPDnxoot1aou3XK7P5uywE4MGvrpzUTQWzPXvcqphJSTVGvgzjybp4byHrNmdGx4BW84E4uCwgK4yt2tPYvV3i9",
  "key21": "3dAGPcsxYEQLuoCvrooTBu95SFMxwt2YPdTJ8dxmQvjTcU4j9qJaWvm58W5QMf6727dM9EYzBFygmgKfSytgabJE",
  "key22": "iiyJmZTbGfyigcJQZtfRsW96y9fqXtiQfnuGNrm8hTyMbf8xov7S19nzdiJNwPbA4Ri7NYAssBEW8dkjqFiu9uS",
  "key23": "d37mEBg6eTuXuaQbFrDmUpm6nG2UnDJpgEtxojnMynD8EdW3oi62GMEGfVBZ3nEDsKy5nci2767CfMGS3j5YFY2",
  "key24": "3esL3rM7897V3KQETWSXsm2gtVer7M21AMkNugWgCHemWw4gD2v362SQ7WNc4EGXQGGFCR4GudyYvHwHMsVQsDL5",
  "key25": "ZbpUg1VpUbrjuttnHHqn3RyKKPfGFvXbcWwrKnw4JBDaNyip63oUj5LVCGo1G8rcXWwbXMSWE94bk9nMZXXhchP",
  "key26": "4LBizEicrsGpcN5UmH8Nj7rZNo5JhL4qb3EAma2MwfJYPzV7JTLkbmDeEHBLSrHrrHmrGU5qBBXWtFCteJtkrTCU",
  "key27": "SRT84WX3R4Z9eWwaXBhVP42M3WCEV7KQtr4jMEPVLenG8RXneD77rFsq5nDu6KCnCg2gENkwR4ARFmZqkYyLuSo",
  "key28": "3Pke1R9ngSgvPmoDypAUBzztXNjUunfpJsU4TSWssEisrCrYkxtSss56ZkGfcbCQRBDvyhAvLBiYxLZ17VB1vJky",
  "key29": "2kKq3NLDmN7AXSBSvELMh4mQgCB9J17YWxY1xHvaeEAhjM9pHn1fuoRoUtxr5Lo62PRkNmERNhkQR5QiG9ja1SnJ",
  "key30": "5YKHXzSGAbWQLoPDxo1aMq3Js284iyemA61bPwgW2DHov8erVgTFQF1Hb15fnDCYBG3wU93xygmgDCT651Gpy3to",
  "key31": "3Yp7YboDxVL93yhNgMVYko1tH5pyQN5MMSdmBEktNaP2jjjB3MLdsurAdyhhez8dniaLfZVNSRLXc8s5kqhhYBKg",
  "key32": "5Pr8NDHQLshYuZsari5X5rCTRto3U2ona8TpbEGvBF9mKvxhG6n147RPPaxY4BHAf4e3jRebdn2Si1C52kCL399E",
  "key33": "5M13NR5khQ2gjFyQy97sFJDysg2vM54mi4TGJ1grm2x46mjMQGVUUrDHsDcbXNq94jK2Ta94T2hT2132B9bNf2xR",
  "key34": "45bXaPgKZNCaG7wushFaWd6Bw57Mf87E3fQ4NPkSv4swYqQ8AuqhRKiGXQjQGUtgQubamriQCfySEQPfTaDU6QTC",
  "key35": "V2jLezsE4Jxsxa4wqmMzoNrif6SzsUFJZtHQLfQc7XB3hWZEsvfJt9Wop2JmiWXLjAe49SR5xz8GWycN8M4wfjt",
  "key36": "4TVLymqxDVjeNU79ogRrFFLZm9JmhPwUPZCqJwBBBR8nSRvH3zNmnfNKQPYrqCnTP6Cv1hTzvj4pzvHoHvW8vybT",
  "key37": "4sKHLsK3MHNevutFE4VL4i5fp42HCPAjUA486d4JP9cZH2cwqJqBqu1nt4YGG9cbyDwMeM1bt3eewWHmXoPJq8mi",
  "key38": "NCubR6KS9DYjUFPBd7jmZWdEYGV9Kq1rduZvFvGvEYhLur8hS5jh4QD6UhzsEHKKo5q77ru7a1vUiJ4v9cpYtX2"
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
