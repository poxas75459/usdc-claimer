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
    "yoRdU2K1L7YGrwWQXj1kjrmrD7XKPoKoNvNCwbfErKzvrNqtXsrZ4BUrZPQX2KnGL1AYP495oWyx1UAfdcqBEn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBjxwAzbpDnMa1Qh6UAG3mZgCPBEArSUxjqehecDpWksrgpq8HBmdbc42utWC4LFP9S93FpUmvZcE1TPU5RRsBG",
  "key1": "4TebwmSW5igJ1ywtoGXGT1fYM148VjuNj5jGrAgSC9YBAcWB3uQHt2EPqdXDb6ULEssxtgZpGJvN6Lwan4CobP7p",
  "key2": "29eq9zGCk78wygzgGSbBv57DeeQJTyRnsLPoFzRWFQuAmz5kR3EEhXiz6MAt7JG4Y5cJ9P64XrLoqrgn9UEkoxGQ",
  "key3": "3QUzqo1B3SmdYDoNmeUzxCWv4eVkMKNGSXuX4SrWcWPgL1QfjqqadWLRAKmhEEnMZPGk7vP9hfzakB3tHBUb6yuH",
  "key4": "2oFbg8rLXdwwLVMoXovnyqPPorM4wRuwYAPrCTg53wfohxKL3aPFoUbKpBhRioMkvLLn9JgWJLkoAgtWx8g15HmN",
  "key5": "qnUMLmofMhhMJsMAiojeR36Vt1sysAh6vGo2DrcjQ6QAytgdJXWJZbUDt2j4ZqXyPx2yVcZZXMUe8rMRQ9bNA2B",
  "key6": "5c2tiADHHeMKx2Ph3Cyg95C3an18hMp4FjxLxqQVHg7PX1jViutFMnHNExodZvmrZvKPrZLS5XVroQ6TqtWRJjT5",
  "key7": "356thsJTd29VYA6WaKgK2rkHzeXPqL9eHkF1Xi8kbezJBm6APvQjmUjcLETPT127MfDJXFruH1CNJVCfrVzhuEoh",
  "key8": "2ohVGkLDhB4AqZNFo8Rgp6o4V9Mj1Qi4XmsikrRPzssScgEwDwWAvDnGfKM1sZtBREccFmKiMMsBV28eujqpjB8x",
  "key9": "4ewbWhv7fitjazULq56U9vMJMUoa7Xk9gf4sSRRxDDnXiJXvePsXQQArqV148QweKwYn4eWGdFTeZ17cWSe9fudb",
  "key10": "5ezMTGBeKWJZm3BN1nHSsGEAVYxabCHttsRn6KKve8btLs8hRM1yNGKV29X82dekJv75UGSsP5s574KrTfzR1v8X",
  "key11": "gZai5bwWZyrZC5vet9GmW5C3qHDnr7J727oBgDDGhRmTXtUPLPqfYniVtcZD4kt6Tu6DLoMxCUj6BDHb2dDN7bv",
  "key12": "hbUuALLQerRgfAV3NkhbRUTUkTGs5mnWfMwZxdgbsAgxzxbbzqSrsvqmHanEUM7iAaQa7Z5rH5tvNbJrXzR2ghi",
  "key13": "EuNyts8tK2AdjF1VcfHUtnLMursbAQQoXRFC1gze1mAuJ1RgK6HnAefaoMTS2T3RU1fuFZ8KRAeffVmYnGyZqQn",
  "key14": "5cSgGEMUiqJJ91Za1jbVBFnxmkjfyqU9m5o3nVVSEQrmbb1kvf2z8gj3yW8Lth28mp1pyK85aQbwPWLHL1g7XQWD",
  "key15": "42fTtBGyJXGw9FTfYfeM4nX5hQeKU8m8kjQG4uAZH5qSmaei5kauTgsHz33HF7YWVwrJnhBFY53phNNvyUhusEQE",
  "key16": "2G1dcq9G3Wsi5BqpJhGSR2VvAT6zHjBZuVXFXHmASBVbTAbHAQqNmjP997WgufCJXTbvzhram2NH5GwnifUokEN6",
  "key17": "NJaHcuPFeDdqrpB1uAqneKPa9zus8Mz1FQ4j6GGZJ6VY9eN9kDSq9aZkUdPmAFnzN79ir113zyN3HRKXC2S3pdQ",
  "key18": "23ZGT76o7BRqGD9jJ5RLKnLj5J4WjkELToNW7bFjf4ssPrNmGezj6TtJ71zUwGCM2jqeK4PP7xRXghNHLYnrBR3C",
  "key19": "5u6uX9BWYKKEWu7KMv7SMD5EgfDpaThLPKNbbdLeP2sQKti1b8Xj9FYpNs9t9KqPENzSLtqmXHbkWwAdxXaD7LGB",
  "key20": "5UWVPDW13KAWgFKMZ4sNvrZagoiAVaeMSeFKavAHMExybyvgZsm3F6iCvt1UV4HwmNYiaA9D29DUxmmaCk6X2Rrw",
  "key21": "2LDBHbRvkuKbXG1mcS2qP9gACUcncuEWTSzHzMnpAPT2n1CHZzqPTkii37kmPxxJDLkQM7zdVwXPxLsQ3NUYQ92B",
  "key22": "4XCTcWVuMYKk8aEeKQVSSjKSEJFDMUSxUc1iwYSqNXx4EAGauft6yTTiqxGV7yaqVqEvNy9mAggMEinrH5pxsVk4",
  "key23": "3743fL59B26JYVM8ybpkppQFAgf2C8b6hF7AQ6zNCZ9SMzAbMqondMBQk7UGxU3ik8XfvD7jVEdZp1j1521DA3UG",
  "key24": "47emm5PFVMpLeqwAnRz7nrVmW9NTi9BCMQ2W3bZ9HMQEpVf9CPJbcwVzYYoaczeKCAAgypWim2VJFofAGNaxQhss",
  "key25": "4JTyEinFBwVH2LqYcrTAVqmxUoof92UwsNL5SKm2fW7UbyTXHmxd1gnzXHeUibxDJq7C4Md1z3inoLi8htv8vVKE",
  "key26": "4izBVdyYfYYVXcB1p8qcaNPVT3jfuPixYCCJWtsD68QCD4uCCEHcxm4Z1oSqGfcLTwjkHhn3tFGJZwEsXmkwACkH",
  "key27": "58WLUsTA9sgkoynfaZWbDv5hRbDY1Xnbqz635TiukMB4ATzPyGGwous9bxzAMjkYaUB6CpvThi2FZbTxKQY1q1vf",
  "key28": "Xr5QKqyKfiTZJsMNimaswqUAj1tFYDXcZMfLjp4S33WCsUGHJW9gS6HMDUtpPL1r5Kt91GXKDbQTubMcHdn3Bhx",
  "key29": "5yA4RefRLKSn7KqfyiqamE4CvkX5VdSDYT9bQ9h1rZwiKs69aMwff223GXLEymXDWgKgcUHDAyYXFovVjqdaTwm4",
  "key30": "3UaTfYWtuFDoHzFtke9NrxcVHyBjWXtF5aWxfuPh2JXz513qGYqd7jdmdxxYBvFa4THwpCjytStjXGxXv2DDhAwf",
  "key31": "2pwaexVTAGQVioR5BMpLREob7GpFEbTau31iWZVx8WmaJpt3dHbvyWe27J2ALhg85QbcphuTSSpfqhuVptXuWxQC",
  "key32": "3E3FTeLwFL5x4J1Pa37jVo19fLgGi7ZJ7PGj5oD2ywNJmBDbECfqxonez494QaDivyBmxoP6KDhYnw2a4SWV4CDE",
  "key33": "24zvPto7D9MrR8h5TZVH7gkqq3nEMU5cyxdMych1DuFdLdundsfSJfnm9QQtvc9nS2gCXgWRMBbnAEih7TsawbbA",
  "key34": "3XgCAjSo3HL14afFL2NCgBHie6CNX3ec8erCTtjihkr8ienmuoWQ34pTbDG3LffnQmqkFMymPVmvn6La9hgsY5vV",
  "key35": "4C9tKgzE9foocANZWQHXXLgFChMHtKamqR8FyKrkQS4xmDPMPSnNsL48jyrq9fzoAfSUG3G6hS9uS532HGTQcaSn",
  "key36": "3fq4UGDUhpSaETUoTK2uNpQUTbRf7B9PyADkX6cJZnXkw8zT3tkcKT87SHQHP4BeWkNV7VdFdpcgpNNePCcF8Waf",
  "key37": "4Aep7AGxVDTT1x14ADbcbjoj81gNJ98degoJiXY53msmcdcQ8pTFRu3f71BmGXosEg2z6qyZ57xnRsyFBhrdEN7m",
  "key38": "5GGv75gEi1QaEErLHviWUzQupRXx77PmnGT7ngW1yedjdKu8LbgSUh7oD3NZ48EaWPpC8KpnyZjjT99r1jBB4u6M",
  "key39": "4Mps2pYjGUUWQ9JgeHK8TZuS3J6ycqok2BE2LPQC6rywqd3a4ox9ZFZN3uuU9VSw91nbMgZLGnFoghNuSLiWStFg",
  "key40": "42kvKWX5N4SwUC3VDYaVYTU4rerawh1PaGycVmkCRxgPF1Rpyh2uY3tzArf8cyoDshWeMMiqAx4ZTUvwNuoJ8EPQ",
  "key41": "37kdJcADkaDL3gKV9HGeWUtbWvmRpCqqjAiNH1Tog6aXSRfyFHALKEvPAfEdmrw4SWyV3ExkMjUReAiShNMDjDi5",
  "key42": "2jQMkCKuwbqgLaX825uju56reoDmy9hAMJcNrhW3MBAUtSPcrHjopUuW8kARgQX771gAcBDv8maSwUG9eZHhv7U8"
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
