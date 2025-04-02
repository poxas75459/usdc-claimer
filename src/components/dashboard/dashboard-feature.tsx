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
    "4jTuCdu8M2xH8JjEmo4z16WmVJf5oQKVqmSjnfyJQxucf6i1U7yRT89SEvhGSeh6hgmRkDqrA5ekJT2LZWhE5J18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uRn2BXkUNJoJsX7YakYTEcuvWP58Cg6beJRkmLEtEjGwzgcdVrTKv38A1FjHL9HrB4y2AjwupXRCGpkhrHMnGkx",
  "key1": "3afpdERXh6Nh5crfZg2xfMsBki5irHmTxhNmTm9rsUu59vcMhYDUyy9GTdZNgF3zGnbq63Q2u3XZftwghie3FG5v",
  "key2": "55ie9kLArzvuHpTWbY894kQdBX2kTjMnyrSXpUCP4gab1Vb5Dazj41SqGeo29hQKRPkza94bTRsxBo7vZA4HRrvs",
  "key3": "5mR5ZF9XPY1ewN7Siy9BPcwFuUazEynhzkLkKQVwYXTE7RfdoZmWnYGMqk5j4KjavS8W2EaMyTKCt74mjMc4FC3J",
  "key4": "3cVkZBKDhZvBiyWwYcY4T9dspyThb3fwoA2nzhvqLwCRZm9PxVC9GLSMvjkFV3ni3koBk8EdXnL4pomYPjGvqD7q",
  "key5": "77hb9qgQtJ3KNUW1DWQZPE1yWgXSx592dme1ExDUjY1AHCMiVqaQTt5HQZaiMdewGvzprPAncKSjQBmQ5HD1h1V",
  "key6": "4YF3FYBxtkqs4ePic4KQQ9w8dJmxLhPTRxosk9GJ5Z6ELoETufG54J5GhVAEvTL4X9feqKKJQ6q1EbjhQTX3XdZ3",
  "key7": "4pTgQ5oFB1xgcYWZ5nBNLfDWnEpa26NuzAXEgz2gWndPcsfrTxkjjxE7tdMCY2ycyG9v6v8SozycWYB3ed5qU5M9",
  "key8": "27AhZYtm24F6AD9qvy98JEgrQsi8RPBV3Bf9tsGxXmAesw8Yg4pdCW35iUfzoRzVPywtAiCL4yGH565EF7JuGuSH",
  "key9": "33AjZhRATR6RH75knsKzvTa6AfNzP8Knfr2PiP7BYQZQ4rP4qAH9Sa6f8USKu5rPaJYD6Fs77qwgtqtXjUy7XkJ8",
  "key10": "4H3mbbNBSTRWzMfqPbro8xeuaJXhrvuvc7MqzeRsXzKX9CbDApHyNKmrxpyTCw3pvJf52oXPdbUWeUbCR2B5y3ME",
  "key11": "2USXHcXGMNpuxmrfRHfLCbyLCi1ZxYysLb9F1G7p2ju7osat9gnoyZLpcvtvGDNGok1X9K3CuG2cmopJsH7y1wHh",
  "key12": "4y5Mn9QnuezCCp8QYa3Zzm9bc3k4G1h7en58ueQHB5xSpsMkhetPHB7rCiRQQiM8JyBzSHSn1qihv19AZDJAx6Vp",
  "key13": "3ZqyUNrUvefgTGTB2GjqLTNVvZmo1fTjziz5gxi49BHn4RmD4vX4EsG1on5EJUySrhxV5hStdCwfk4HgBCDX6GS3",
  "key14": "38CEAHFNLErYiL7xcnr2Kp4eBK6Nzu314UfEZJXGDWEQfTV1n32tqAaNa8N8inEsxXqeD599TRFCH2hForNB51A2",
  "key15": "3AfagBFuDb7yDaZQUoRJbaCunyVrARiaDezbGM2LWij7QK6Ci4n6Tqhs5NXMQZ3ZGTsbWsc6mYpRmiddwqMJrU9Z",
  "key16": "5jTxzptp4JpKvaJizVD1rKTRSxCFcAQK8Lj2HNnkrKWGHpovY6NfN1LoMyP29y8yWmnqi7VVspaFCY26EG18S4Fu",
  "key17": "5L9oSgUMQNibeSxDW6Zvxw55Un4UZ7gZHZurXdbSEcyToVoHjGNTLfssPR4j6jt6ztBZUnUsfS8XqfsBL2wNytaB",
  "key18": "29QbRJkchqYdSaE7NSJiwaBy3NYR5G7mNWYwPtFJ8EuUApjWUaSjDEmjH2qsMDLXwKCLbbY9phd8AMjSM96h8yAh",
  "key19": "5m1cwZiFx5dzf4DkFfou3jSnH3TceKVAgXQftdnLbuJwMiqHkvLVj5sNfjEdmG9zjX1PUqShjkxxNWzJR6wJmchH",
  "key20": "4ebMABbsadEQ23pULGCvdgK3g9TgHZbGuAXbvWEd7K5FseGnkg57B4QQHWUYLsRrxEsHEPjtKgYKTsDWitfjJkvu",
  "key21": "5uM6JvoyRrDNFuXZfMZy2VBNx7i1VtksRkxvBF1qKpS6A9sg17aFjKETLt7tCmELRpvybPAbgXz2PjWXoqrfAv7U",
  "key22": "PAKVLG8Mt3WaDV6PkdynWdBNm8itpks4pDPKDTdReA8NFL7hox1Yh3wZyydzPHgH9HgzztdcGNe98iNfnYt8iM2",
  "key23": "GADm1n4eJtGS3d6ZGoNJCXy9ftDeZK1AEs1JxCgWKe6gBQHEgsNkq5WUyayu4cA1KjmRUYxkt4tCzYepoY823yf",
  "key24": "8WwBf8YMbZGwWiTPsV3CZdTT1T4L9KM5HivfM8fZeqDu55NtBHRKFeewjaXRJsYAcH5ZtZqWYA5EfoDDVeTsfbG",
  "key25": "4377Vz47hUvXH3sLQckGEHQTqsEPRC5AvxnNiNEpnuosC2HLFjbVKKMjjR2gmBpFnuAYKTcwSg7pnmvPkPzSw62u",
  "key26": "YjTuR45nXNLJsK6RZuAqQ1eoWznzxqm4Qa1c1Z28FwsyCfXL6BrDxuHwdv7DfBr8C9zfNszFMbFXD9KcksHdT87",
  "key27": "2feELHZwSY9uxm6DerA3gfrRxsB8ZELDBpU4uegAhGHHzSwT7Uxnv6YjG6Xzx97QADJsA44PG3e12GyqkdBwTuuz",
  "key28": "5TnN92cbtibWrcadMbshCFD8SKXXBcUNj1AJFuztn4QXBTc6wPaz15nyF7vHLo3kQEYEw79wPLUCYsUgLLvd95pZ",
  "key29": "3BDY8F9DMngCLR2ptcHTExgNDEReLZFdXafnrPVBxEmvVignj8SoGFQaNP7VL7GS2Qrts26Zwf8crUssiszWxKY4",
  "key30": "34UY7fkWfdfpyEdDNxoKS6nfSdNi8xJPFaMGeB6MJNqewaUWfEX5KVFC9coUVrRUUMeqZyVfiALwNsnehhB9QVug",
  "key31": "3uaUCVwNwYzLHFfjSGtRHz7dXk6eNaBpkkk7DMzVwv5hTdBKiSxCGD1As5pac9ahCKV5CspkXZK7m8TVzLz1EaCW",
  "key32": "4EVqpcorCMrDN1gPvJAdeJXunTcmV7NiCtGvkt8r4YTxTEds2xuTqSdtKA2mndMAgo5Bob2Ge1qT4XzFycKAJ4X7",
  "key33": "4N8om5wJCb9ZPPChF851wHCktes6A4LPmYiHAoYbkemQxViFfLp7sc13b33w3STSFyxL4wEgfPQZzdgvez46GmSr",
  "key34": "34AH15kTyanMeGFDqqtB8KUAnWoypNNPxKNoi22vwxwiu866JBFgdzqQJUUNMTgAjiT7fbSy5ESa1pf987KKQyFG",
  "key35": "21kDk966u2vUiLMJeeaiC4a9caDaoFdnHt3i16KciNcH9WhZFbRUyDzqeyCEtprWPWW8HLHjPUguU85nZggaVuzY",
  "key36": "4BNTU5BER6izyZBoH35ivNED8EyrTE6A5obe3FNCRxUeL2UwrcJaaxu1dXaGipbQAotgQ2wE1hBBxEe4d6qmznvx",
  "key37": "43hrywNPyHiwsmvw2w7BgJr1V5rPCEmZ9a5M7wc4QLMHmZ51zf5u3ptEGgX5CSanchNzjizLJAQVGRVGsWKC6Toz",
  "key38": "5z3DptPFs7giNK1Lssp9cXhMNfgqfh6nKeuXbzYzPdhK3neatiZnhwzpiBSB8z8xQUde15C26RuhKC4KtiNhKRSa",
  "key39": "4qGn3tGtdLUuVrXZs4nTeNiuELGygE1rUQpYDuGS8zjc31puATb51DfNz7YpURNJpjXWZFX3eZTBJPUciTwrcqEM",
  "key40": "38mNjv3MAoirKgG4MJCDSAhkLJtgNxM3G82pop3VACNWJr53xwhWZLebrGAEdBGhWdi3ipEUZ29HiXwmiPfx8XnK",
  "key41": "4c61cnSpVMibh9yNBay9uBhs6m42QT5VATypAqApgcRWbne9C758tudtcuw2xXjMubvyMFN9PzGKW8fbPKwscKZM",
  "key42": "2nyc9SgaZ5hAKmMpW5th79er1XX4T6KGmXCknByp8wmibPWmD9Hd9yZPWmzEGAQ229YB15pAuEP8Kysen6KMHncS",
  "key43": "41pfuJTgDaXTWsSdrW7hWtcgahdLnL4CspJjMwJdYGUC2b7AbrUFDQHZGHMHwHhKuLBpXp8j3NJpcLk2ek7e4cG7",
  "key44": "3nabA1vxoeXpo8x1Y9pad4PAgWMeqw5FvGJRuEQNbyWoD6St9ZKFEumcQH6YaV9nyFJqSadWFe3ugWRJG5rcb8Qc",
  "key45": "4rUgstCvkxCWLS3fPFrnnAKVbwpvr6seLvLVb4uLkXFxz59MuttGjakKzcHBTG2rx3ZogQCgeoFJqQUcJ3xMAXiz",
  "key46": "55ZYS97VW171pFHpvijVfXrMvZ3yd4HKdRn4pkv2BAzA2DTNBCpMRdNeGZpVAnJKQMFRDn7PZXbanqB94pFwYMNj",
  "key47": "5Qt1UmT4AREngUhDg8LBUdzArcfLsH6wRP6iXE5bRUfeuCAkZPdjs6AQLSAFVMmExun5sqTJ1ULyjggyVuPk2wde",
  "key48": "y6DJbms4kYtGSQ42fkJUeBzA9kdMkXjUqwpWWTABF7LHMY4NqHadBaDYJwNpKJHXNw7JSrufaMk4ywD3U6q3G2u"
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
