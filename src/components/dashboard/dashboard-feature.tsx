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
    "3zZ1ZqMvBBT6niAYqLbnEMjSwM8pFkbofHKZwDPbFXcMCumnpt4hFEP8m62QAS4m17zcsdMt5uWmaV7saQNSAbA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrsM5JtSnfdtNtA2NyTxihnbLRxMxAoZAF5EQAxdZ36sF4MdgmFXbjyGYNb3a39u1BG5vLuz18qL8MRXtRhUS1E",
  "key1": "4ghFEEiM9KnZLTDzZjqdL3NWE3KopNUXbirvtB6xgwpTCKqaHmbU1aayuZNt1FMGduAfEhbVNyRYgxtaqjhfpPHA",
  "key2": "2uoqdjh7LKL2vJxzvd6kiDrh9q611ynmX5JABYKRQg27gZqSsa6Pv4ht13V5vqA7i5MQ5UQxo8irFtk9W6J7yu5J",
  "key3": "5bEMT4mZYRfUhoRrJ2JUHA9L4qVxJAoNe123kun2y1GraxVy1YsnD5U2FsWUa3uHWF2uESsaCAprci3XbFesdH5F",
  "key4": "5W21TkxTCjiSY421rHUui5TJvrQbeA6gQNykUsV9F36zQSeoR5z1C3bcJ4dZ2Vr9DtYuomtYoWf85tccm22kPcob",
  "key5": "4Y8wVjafpTrjXnEMzg4ngLfYSrsdi73SK2ZfdG4oVeaUBib6AC4ACCZ3GjBLTqVyjQvFzYsifc1WH77qGuG7pZmG",
  "key6": "2cVbbJqQEHXGqZ9Xzod2Baq3v1YHGhu1g58Exzzq8wPG1JGEXTRM23iYpDmGRkgYT373PC59XZg4nwFaojrqLJdT",
  "key7": "223w1MjZeLVzRqvyioGF3zjdqakM23Gt6i8wk2Kzy5eM7oPrsQaT4cDDcNuvZ24c9JameEAzFr8jd9ByesTv3vBj",
  "key8": "5ZahLFs7hegN9FNRqgPi1CnRVddcpmcNq97Z6Lee7jghL9LLTdwVrSpm1gPMGhSwns7567HxVcFYJHjX9wSkREJ6",
  "key9": "37y7gfHg2Dqiq7SUZwpxy4kFUvUJsqE92wPyn9Tpcrk6nS2cx6uDmZXzWXJ6ReSmAHzhdLtfVDwmcrEULGAWYNSf",
  "key10": "F563D64YGXsgXbeNFkNjWedFAQ4qN6oo9vFJHPXDKiAfXTUpabB8ykvBMSxGqwrBjzaPT6mAR8SUqeMBck1WDiq",
  "key11": "4jBdEZMSZubtM3hKAiY5j2agxxq1kERihosG56mhhTRXUR7jeTpdfY5gsWRF6ekGDgQnr8PiFxPKmrqjsKSqhR6j",
  "key12": "4FiTxZEcFj2T16h9YRyXCtWj6NH9sssjhSxZUsZAsWJhnJ9ywtGVEHjzA5h7nCCCA5cxLgmn7mgkNfthrPPdpRkP",
  "key13": "rKpQ2qJpRNHYPGKs2VJeAwkVbwSEMw3EAaRFGTwz1QrDnUAAWmn1U2MLJg925ukbdYziP1LZeqQN9bSCJ7vQbeQ",
  "key14": "2fEkAx8zkSoYwvKnv939pUNLgXaweGT88QoiBxiuvBnoyHPb6ey3M1Y8wiwHjyzH5udWdQB3BYKBLrU8rATbPR6G",
  "key15": "39mS8tn224QEQGhp2jdM7LpLFqNKtmRQGD3RqrN9Yu2jE6HxWFykdnVbLYEso9yH1YnSNG4Qy2NjaFpkBYLe4e67",
  "key16": "Ug5rXPL521CB7FNjewes2iSG5fCp1NhESxUctQjNm4ThWPc7XjRyWCYBegu5H7KTcZCjCbzaAT3sq3mo8k51uDk",
  "key17": "27MZyKq4CccZLteKp6BPNqSjCjSUVGG7TEMPTXcnFBx5KsiHCiFECmHfSLHcYE5acqtk1DpWnumFB2cP622w1Yje",
  "key18": "2APfQaJg1BoGycTZKdsH5dLhACiRJVH4DQqsPn5Spj4m6Vgh7Bm1Bb1B85doVYLfC1upeAoJyXsFrvaprZDB7P8A",
  "key19": "37Qtj8Q85gYfoAG9SJcEHMcRfCwYsxriufUCygJtnkbfHkFXDJESNziyfn6zcMtWnUamFU5we9JNnm5zacwokue4",
  "key20": "4pY3rQzCkhfBcLafLat6bwiU2CpdPMwDfVfvYtogkPGTtrsupTc2jd2U6zLBKmAtcmNNMz3Nep8z2XfRC2uASfFs",
  "key21": "4WcB45X2bocq4QnmsRvQnLpLjdsYwHNikf2YPf8p5AfBANUEaZpHGScbGurmFMjvNo76veYMfV7g1338pJacDSWg",
  "key22": "4NErBjGqBLGKoyLiGQ4Fb8BByjdwycrmdzqgr1PGZWmnNagsVxysc62tUz78v97qY5evfBY2dQ8xSAr691oigfkW",
  "key23": "u4hxL3om6AHeepW8goFdpxRCmYzQfkQrWmGuxWseTE6kMVNB32iyFnDBzBv8ALQDga7cSeq3vcyc5jYUHSZViBG",
  "key24": "3ejKcEeeejjevJJY4fUiTXFRtioimaVzSLMaun4tC3rtvFamsqpnqnfkByeQccbMQ7Q69Mx98G8uv5nmZPuGATah",
  "key25": "2iVrfMcxT63YyBsGuKuUs5fMxcYHmLcWNZMx8eGetf2HaQqm97n1W9zeKZ8AyoE1pwxDAmcXZd3zpaFVi3gqWPem",
  "key26": "4Ud66frGnPmhbQSbzGBGKqz6LLvLLzpb6RdT2cxf8AtLswDNn3VXEPcZtvjkDfVh7e26pheHq3XDnbvG5urRWHkx",
  "key27": "5TCcVAt2VEhd9ihEQJQJqc98X5mm2rpXDY7ytADsv1zHzb9B8aKPRXCaBUCTTFD9FPkQAiqn7RioXLZ1V6SM66x8",
  "key28": "k2uyMLvyim4pr57aW7QjH5tYoF5Zxtyx9K5Sj2BGcLHtTEdPNryM4AHhcmQvmakFyZZPeJxEyvREPEGoZWHYEnC",
  "key29": "5FSgWn5WshdsRbGHVfzB2mcGRMEh1AMTUZBafMjTHvfUFcyaPTekjDHsPYBnZ9LuSwX47TG4pxNdrynpYygrnLxN",
  "key30": "4PuDYRoBki5QtK5Vg9s1AtucmJ9deeEmqLm8M4v8yEGNcM3mrrY2NJ8o2bkzVdpuAPcTzNXNifz9yUKXMPtdEtCA",
  "key31": "5WYZ5Mf93bqtmSx86L4cipQbLLtvwr9RqGQXcAuMC4pSuSqsZ6tcSdfYLAWvftbByyPpmuEn2PSjL5CbnAf9JMik",
  "key32": "2VzxBv72WTTh8JaPyThWjrmVkdQyhEYyyVDeV8s74BrZZKTndhaYaizzjW16ntFMUy1XLW3v4SMyQjfXQVy9bwuQ",
  "key33": "3QMCjFzSm8nLKg7dxU8WVaTSqTZAzVJvsYwyuKoBRqBqrPojguQGma3vbth6ENw45VB16cSDQuq2Gwhy1E7vdMRt",
  "key34": "4iXFcLj28Jj2zQWUo1UUgd9NNNt6gbPjbwbUdSd5wfHVHSvo3aPThnFgjGWNjk8NMZuz5mv12dCRj26HmZZ5PwPw",
  "key35": "57g5m9DwcCx51849D2i4rEjw9UKsrN3ddhaNGnWx6qW2wH48rFR5w5u2EjqmcB96C8Gxf4bJNXQTbFStSEjcWi1h",
  "key36": "3mrxMQ45ymxy7i9j8dQqmqAjsJwvozATpNnhvftcSvQhY1LfDmmZcmWVLfHsNCYhtqLgr4TAHJUiAAinP6he7AFt",
  "key37": "5SPnhtetdwuFjLACit8kinkJECA1XLkZhC8ZTyJzd6qKvCRpjjrigoUJz3aCrCh8Sp1J2AM7dTMdSRxaTcTW5UKr",
  "key38": "yWeyzPJpUe3PdXPx3B8MhdHDPqFibDJkSBrGZugaEqY7DhkniYdAzj5NRwgkhMZQimh6dmMexWiPBzAGZVu3WWB",
  "key39": "531RdWsSq7qaGU8zD4bm4Z8KpnJBTXysWbbMpNj923TQrDbaUs5Gh7e6XJ3H5YE1oT2ZxW4YXH7PQEB3qj9bsf5d",
  "key40": "31u2PDULKpjEsVswPeeGyuDvDkUoewpppWPpAyqzMbdgAsiCMQXw9j4Ey2NNEXKji13nbKM8D2BHG8DLLKG5yY7c",
  "key41": "3TcYCMVcvfE8j7ZVq8ic4Z7wuCfnZnNZJ1pSfcZ7NDJpy9pz3qmMxY7wfSX99R4vfkoWLjjDMV46WXX8Wwfb4MPh"
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
