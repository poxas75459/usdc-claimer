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
    "3ibXcpKVh2tjT1BDKgBc554B8xbsPWtoyzsgyuf3FKqihutSFA4tWsUJ5TgyomvVV1mXL55ohmU2mJZB9QwMd6Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnpYFbz2Ham9jEXtLuss4KP4WBqi1F8b4g6jSCN8c8Rn6ie8HySnG9Q8uQQptj6V7PWhVAE2WEgvK8C3AuPNqWB",
  "key1": "2eLnp8m2CCG6b8NrvwHZpXWyEVpAYitxyKM3UpUUFy1N7Xcnf7ruBAxZTJnuMaj3LH1m7WKjtiv1RFCpWDPFMLBi",
  "key2": "3ucukSGMh2rLCwk3Umkzp1CnnfkD4aUi4a5pDnqBrvdr69KNqErANNwcy2LDUC5AKw8462CNtChXuzAnkUM1C9aR",
  "key3": "iexENcm96z2jhBKLY8TAMcxUQSaAqLT7eJqA9rb4mvmgtSPBLsoQntKsQYJ3J5zhDejYfESkwDSQQY189TaAMeb",
  "key4": "2YxMKahRZ3XEoBETJ5gPRC2joNf7VKApAnxdhAdUczZYFZ9zQpGNLVAYenVzpJAduJD1ooaTd3pgjYMidJ6Ctzb9",
  "key5": "eYqUBtPyeHwYJFzzzsH9QuQYJRcc9Jpuj3ZbyUNuJsgNYWrwKqAUwPhf8nEcACd6uSu5nmBE4QqByVjsuPHRbss",
  "key6": "2Dbqmjj9b28C4mFSeHHTjLgpH3FHWXEMdH2bv8PEbbHMrDhtBedH9hDVkyYnSsNYCh2inwMcSfVwqTzyLBBHEUZZ",
  "key7": "uhKbhHoq7wy7B6cChQBwK8qPRTCzZLkLPcpGazoefLCQiXdQZ9ay2Vjvusb8LoVcdFSY9NbqACGxN7qKfu5MSu8",
  "key8": "3cVgSg4mU7ECB1mLTXrxgpKSgKQrMbht4iJJpC6BpptywcrUwe45DJ4zNWLsXk2udxtjTqRUPua2PCmrJb1Dm2Uu",
  "key9": "4j6Z2kR8jeEf9KydZro3a8iNRftESZe7tyfGAP58t2WTuBnR3Go78kef2zRFi94MWGqURpJygUqzBp9kQtwtXc3v",
  "key10": "3CXCx2twzWSDm5fxmvDp9Pg7cBUAMNMTCm44nENjGKby2aNg9Mczmh1wcPejbnR4R5oi5d1t86ttwfJ5ULQqd4Un",
  "key11": "3AupDPWSSShVMUJ4N5YpzN4foqZBCSQyBZ5ZSNhpSfbEUS6TFTz9ZNiSPFxEe9aSPUfsZWdLoRpADyDKZ1RkGstL",
  "key12": "4JzBP1zRiDKzozUs585nA2uUjsbauUtFSsfneGG43H4va6KmhF9UocBqrg3fVgYLd2WxepAkNt5kateSQkYDwhS4",
  "key13": "2zqnBJ8ibgx3zyxYGDDoAzpiRBMmDYxUu7XREPgHQxFzokmwVxJDN1SGPRuUUJGT2dwbNZCKphfi981QnxeehKzn",
  "key14": "2YPXrFcg6pNqXp5rk1tQx22YfBVCiaQqX2yBbrB9CyWCgaVLQDm3tzpQB5UuDnAPqVqAuXFsRPtwbvtaDfwgX3R1",
  "key15": "4FN4VHFPiMAenTFi5tAq3tshvJEFY5FAho2QnBAyXLMgj5gvA2e4HRtkuLb2QXbPj5Gm7kJY8yHTKLXpfohMtJka",
  "key16": "5Fr4JL7x4mAAWdTiu4YB2LEJzhnPsq2dzEXd38ACrhvSSoWUQr1a8Cq1tdfxciTS7k4dqarto5M67v3SzEyTT9kF",
  "key17": "X4iwkjjq9K94q4qiNLs7zXCfrvHruwxXg1F8HNSsPbFyeukzg7ajvoMtjQvd8Er2jDosqnjoZiVLA6Y5iXQkknk",
  "key18": "2swJmvN6mmziN2CdkHDMr3pKF2r8Whb4aZpBxJjYfZuKBaqgKN82y5utG6U3m6VkY9itGdambwVu6n9v491Timkt",
  "key19": "MY616rbymR7wehBLbApKVJ1cJat5Lq7SDjv72U1Gc4ScBFdULoHrqj9Bn83rC7zC3NNrMSuTwYFeEoQZyQbbhd6",
  "key20": "4RwHR2Rt3ynHdJ7A6YriTEE8tNhgA8fmStEtGn2SqRpTV913CnWaK5FfDXTNpUzfzEEChD3HpyhHZYW36GEDHKDp",
  "key21": "3Kovzwgi1YZqimZtJF2kek2yzdFbASSV9eRirxeiztCM1GuCLLgw3rq7nsAm8ehG94Ec5ZxLpFZKqFw7uJzmJ2PY",
  "key22": "5CH6dJroDFfEJaUPjueKBgXTnKhW6SiSAnCmXVtAhX7LFZUyDyCeY4XAPgomnVEUiS7qGDDrgMknBq5bfiveBSLN",
  "key23": "HjJeckcugg5Uwnxm3PW3rBu2YuDoffT8Y1t5pfnfMZmFNoktXRLtVbsSGU8uM6h6ir1uscAJgMXL6EDStefNJ85",
  "key24": "4QNZqcsQaa5b2f3b3GMjFfiwzANyBTWxbTAupraDvK7nuCUPMwyMVcgp7ioBrAryCB51UbtyoZssv49PK6o4BkCC",
  "key25": "4GMeePbpVUkBn2avjgGGTJPFgePu9jT8gjPjiwS92STv97Y1eCGUrUqmimLAR6UzdrtCoRwQvNLDCiRi6AumYFxM",
  "key26": "5tehDCUoMh7rn1Vy97fg5LYVQ5sZ6nfCRdDCULvc7b3ni4uP3bV5PGr5J6TAefSRSCXAQHnDe54dz3LLdDkN7CrV",
  "key27": "465EEycbYKiMkspUdF5ffER7JeaQTPnvHSx1zahj2H9vwzWVZsogtqafFQ74EcnF1kUkkson2LfVgQYGpNZ6U34c",
  "key28": "64Sj8sB8a47haAS4EovgpcUG8yK3g55rQyb1b11zfz2hiZuzctpgacuwiFXyMPuxmDK5Fwtt9n267CRDHGjS7vqG",
  "key29": "KRV9hH5iFXqEgYbSkg2WMp1VzCM7gN25BZSRtBsyJ8EzQoN7Jr1rn1rknueW9xLBsS9kj4M9QyZSQT7ir9ysMWH",
  "key30": "49RihfMBGufptq4QpShUcH27ANyd741JnioCc4XWdNWZJCpYRrt11QEVprqaqaGciW9kz1ZhWMQAyzvy5e2pyUX",
  "key31": "3TvaBXfoYt7MXF7rU9Yw11A2Sdxf6SaMPP5oip66LU1t5KjkeqxzsAB76eEKb1o3KiyjnAhb544rMZgZ2Jd1MjAL",
  "key32": "3ZfYKVtPQNUcUQeiebQxgyTAgtDjKpop6vDu57WB9NsyWH4q1Yqbc8BeoGW5RkcE13riL9uBAcC2VLL9RDC6cyr8",
  "key33": "4PV3p26uSmPNMabhWy2WTSm6BMZp27YZiSyWvyWrszWYdEMiTNjySAvWcXG43h2q87Lscj24AckcmtCnpiEXdvbF",
  "key34": "4zZE4tX8vA4V1fsFssXWNTJBrrpYP9qXoBidpPwW7FvNn5BTfxQkdhjCTqR62PmKTFqGDUFphT5tSqPzhNfhUWfY"
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
