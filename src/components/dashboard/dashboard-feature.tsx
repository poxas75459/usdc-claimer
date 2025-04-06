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
    "2owKHVY3TVnCdHsS5fyjq4cjugSPLKxMeYQBZWACj5GrprFyB1dxdLTsXd84jtRDGz3EJcMcVpPbDmUfquMBwY4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQY58Y3MixptFv2Jj52kd6EJidKc1W4S9AcBwj3bRrWGHjMUayb9yVChF7qySskq4c8k838fUFZzDcyBwCNsQVQ",
  "key1": "2i48MAnHHA9m17ytL5LiDeoXMWtMWLyG2GxPWMyXZVCVHhyfbwmr8CVYPDohNiWYdGKjxjUz2q7CRsGrDdkq8DA4",
  "key2": "4t9SvMqiaEdpvMLU5j5MSh9U13Lp63qcD8WfpQnLChqnNC7aSm4BseZWNkZTyXD5fgSLaLrZXQRxTYeN5zjKqwq7",
  "key3": "4FNERUf5Ri1ubzoZei6P7LRJbJynFt6ZQ4j2FFqLB4sP1ycrfCwbu65nkW1TqH6qdj6HNttM9MQ4aytxXF98biNz",
  "key4": "2xGQoWPLUqFEfreYG1mqLNsqyozkXYPi88jsmyGCm2S3rBHZunn3wMF6jptvfNX6dChdsHem9YtFVoEoPLCUYPTz",
  "key5": "4tUQHBvC8yC3bUnjgCPbPtYwTEgNdnyBjbWeao9g487CH7h7ModYQ9nBPExaZbqpxoLz9q5BYyRZ7qTABsF7vJgF",
  "key6": "4uPBPrmA3gAot3sZxpuKpws36Y4ViCFmiZ6BX6kDRTwrjdJUQ5ev5Eqq7NazEbDc2zFYn3gGQAMaSUfr6goP1Auo",
  "key7": "Q8UMnDGmL2zV4vwcHBGjquXLL45EynVkca38tJvUSnKprofei9dT5tushBnKxbnjzxxSSZ2ntsgTBYrpScm8hqr",
  "key8": "Vb7yXshmNJ6QcCvUuSAvaZQmcectuSMUiwXwQuVJYszzLxXkuAaaFww8djHiGu1voq6SCQvruSKJ2wbDxdnq428",
  "key9": "xhgsz6BURHMUEnALMw2WKatP8MkvgtcgdHWDCFaaSxq1cYuKh2PGJivDkwGY17K12ggrBSepLznrYevsix9hVZd",
  "key10": "4Uf7kUEhvq6pb8aE1V94K7kzCU9Q5bpdgvFtN23jgrLDkqj2YKZbPJ2MUqQhzuN7dxntXZrrqMCMXgAwoANpyKKK",
  "key11": "2VyryfMEQqUXU21z93uL8EJa12iFxFo5nHtgAcYtt3gmEc5syCGZvuLjHCGqhk21PwCHHJW8MgBStYSgNKt6e2AD",
  "key12": "f8AkmtSa6jRijaBU8dwDkiGdwMrHQzKGur5Xpy6uJH1hvT1mCp9dQRcoPozMhmu2MeJ9RTTjUqNovHoCvJNHcrf",
  "key13": "2kA8c2DZqirdTDq8CNJtjkVVF8w3vuAf4GqxLXRcdwj27v72kGwHJN1M68ymnxxhbTmpb9E9kRsKGU1GsU7BPGGH",
  "key14": "2zzS3ghQHgujUAu3GDVRS1hqW42LNN3ocEyxYQdAaGMGdf93o2LQYyUzdQYajQwhjG5NrshXm2Ey1otx18hSxiBs",
  "key15": "cLa2jZ1iXMo3PevnfznugK3hg1HXgrnNmHhcMjy5wQbrax3ZbvucqiAGkQRYw64HcLK5TmZKa7mX1JGDQG7puxq",
  "key16": "2U34Tm8eH4xLQ9XRu5SAbevPknQEp6Q3rQLi6euLWy9vAErwNeR9JswYTphpd4Mb4ZAvFzdnEBYqh7ZtRNtq9DAp",
  "key17": "2i9i1sEk18Ug7z8w5cm4QvrA1hkMFvVGZu2RMyGC9JeiSnVtxdXKjiwqFG5ehfBiaL4jZ4TLmR63My8BRbLXC9JA",
  "key18": "34CD9ZKJj8W8CFTSewweqwBdRCAPybJRNcucBpj3331dtyMSP12cfXv1rCSdvy1sABH8s5LTrQaugV4GpsKL7P8b",
  "key19": "4S1DvavtRFZsrfigX5DT2q3LxUYaPttxwJws9G93HQ1mW6JsDNztNZ5CW4W3G6YbWynguAacAE8r2sZUGXijrPUF",
  "key20": "4snnpyA6GPE6GkSUgarP5YrseBFY4fi2ySGKc4QEFTQLHxbqP32AtbSzWb4RK7r9QrMQwesMR1bYSnU95UhzVJtV",
  "key21": "2Bx9WJwi9d6si2SCF2ykuDBrrry43TMJWjt7XHuFSehMmwNhMPAgTNSGWaVhnp1nUxPdG61gNUGk3K6V5xMSfmZx",
  "key22": "678wCUjg4YzSBLHzThC9bQdgPMdKBZanC7JJj1FQqSkE3Wwkg6zUrjkfMR3kMTQVUfS4f8knetnPuPXyHJKvj6ip",
  "key23": "s1K3aRtvTXd8y6FkJ9WWgUof93oVuuGJ1EYKF6NrpYPdADGNbLHShHmAVh2g8CD54Fz4P7momsir2wz5YruFBAP",
  "key24": "397sxnRwsVayQS6gSCoDL3hrDGwzAnPUm3KbNMzbqrXjZAC1F231quvsHrZob4KUyxfL1MPEWFwUADpguScyxdMe",
  "key25": "61UBHyKJMQdGRo5MBUFacZBXuNVnEMpTqoFtLFkfQiYTvoi2NhTR6zfx2pey56PWwAob9U1x6kf5C2zk93wZSzdm",
  "key26": "2HQP2YTeGLT5FiNzhA9c9jjM8J1McCVoPo4QEmtZJScV8apAZsXSqH9PuKK7dfYYYHSQtryWgiFbZPnvhKdxMCQz",
  "key27": "32qsoWXXbdEpLwZmUCtXANYJ3KjEQRJv6boWr5h23D3nGLUVZbgpDLBcMWB9AmpUSVFQd3iCFniQafusCLNyXuoa",
  "key28": "3yjSsUhC8twRv6wfhN2UYQPNHQJf69Pf9wLD8chS9hFwNKJDLjGGfPQs95PYcjnJa9DJ3bCohmg6rAPEACLemMS3",
  "key29": "3yQJQcQt48FJXJHWNqMJXrWrMeww3cWFtvYXYgn2x1WaUMMYsPdL2xEYG2oGmXdCPuJuEsNMMjFXd4ESSWtQeDtY",
  "key30": "5QAef1Tzow7AJv87eJp2K7WDDMhMcukukrHC6Hswg73BPNui1wUrwXmw5Xk4aj8UdsdbTiabhRz2zogjuQ35Vr9r",
  "key31": "d2ptHuW8L3cZD4qbkM4tn3rtrNjY7z7UJkrfH4Bmaez9ALiqgi2hWp6wDsVDZs6JsxN7U8b2HnjxLNxU2bWLJS1",
  "key32": "427KggAJHJyDRTyzZymPMikGdC6HE2jEEudcwKp3YibYVVZqcfTWgzdm81t4yzCpf1xAiWdr5vtKdRmdsRYcgXgg",
  "key33": "5ZCTSdxP35MUnSHNpinuXySbSzFroWyy7MZzA2zdtd8oxVSnGj5D1LnHQSF9m916cRUQhr1Sj1begzJcfWFFCRuy",
  "key34": "pwzyhU2gLFV28sNSvxZvH6sRXrpRAk8KNrrnayWct79NFK8FscsLWJ2SMokZ4hcNMMnw4XvpgcMVEiwohnpc9eP",
  "key35": "qPUxAKx3oudQNKzNUWn5YRpQXHUEFkjyMP3Y4s1ADfH4o7Wouag2ftPnLXPZvVrkF3Hh45vGgV6R9cyCMNjwEDh",
  "key36": "53drFubJ6nH4RjrXDHfLCR4NLRT8GZCpNxZZ53fYupCsNRyd7v8ZK95UukeowSsstDqB9Lmzv8VBW36F6gLD8w1t",
  "key37": "427HpQczg81627wDqRhuJff7y5mhRjydwW3KfVCj95R6v9nYeLoqfS3amuqLnXJWTsSHofXhga7PBN1wiTmsrTyt",
  "key38": "2MNgo3SuuXaAtJB22LghXT4Qv5x2FZJD4wgbdXGRsRNoRC4zM8wQuAAskGscBK43WDbQPqfYnDWREdq3orCPKrVk",
  "key39": "kyWKQpE18oGpvzg7BPZqCQPs1UuYh2W9gkfE3gUYYtvEdtWrL1pNJKqq9U77fCS3SH1ym1tvvaUxrcNowwvdKfZ",
  "key40": "36RVo4hCrPCSDJzqdujDTxYNGo85V4u2AZNS11Z95hfQSDN6KHMejouCwXshyiiWuUNb7MhEepEoB1aVfE5JJDAe",
  "key41": "5dkfgGKPYLM3ScovC7KU6T3s4PkSTCWEX7dhD3XARDEFnvyMwhG5MUiLUAo9p6vHZZRKzELhr2ntoDoTodwwM1gN"
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
