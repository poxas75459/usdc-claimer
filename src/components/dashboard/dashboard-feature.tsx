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
    "RxWBkV4Ct9bhcRQByFXL77La5v7BRDEaNYum2oQocQ419FHeYBjXrWoAKPW2SetdX6pRoPiRXpbeKCCHFa5cwAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTssUdLRKocdz4p2YSsYSxsj9Rb9okpgk1fo1ZPyYeHzS3waeQfe2TKRdmnyYzbCoE1RUVJKihJt5wMqZjhAnQ2",
  "key1": "5Jj7GAZmiHftGfz8CRjnk81mpKSkaHt4ZdkzRyezX9mCq4H3y5MMynyH1vruNDzqYiZjncAfzZXAoZDW78gCmKnb",
  "key2": "5bZtSQv7J6o7516QqDMnPFn2gJZLn5vtmMx8At2UnupvuSNZu2GhuJ7jvQBW14zEfvqDjLAWXxSnT96GFQnRC1Mj",
  "key3": "62n6Vt48Cjy8iG5p8pC53eoWyW8WgYsUaJL2QDCFFzNRkuns6g4A52fcfZdQAiWbXK9GvXKro2u84MQV1Yo5djWg",
  "key4": "2HW843M5zW5ktPAftfAoj1nK45XdsFEjrFk5Nx6YgfLsNuKW2NCzTcEVyXhkW1yhtavpjhFNG3V5bB4dBxphstc5",
  "key5": "2RBVtMg4PA3TBhtkEGjmJYuFDwSn8Q6K6GRjcypDD5BRQ177zc6adxR6KyZqZYdk8ukh7aNKBTAZrDsr9Vj5sNDE",
  "key6": "5uNyFGQC9Ht7UJ9Vp3NaucjUFmEC1MGCJpBwsN6eUGJ1PxyoSKjPd6zDLeYj4yoTcBkmmYF1P6eTRDTn4m4ARGBE",
  "key7": "3X7pSTUqD1ZcdTrz2v8jmXqCbpgDrbimLWWpmtHkeV3pi2vgrUpeqffmQ7Lx31vHYKfcscorLQUhdsa4QALQmJuw",
  "key8": "2TAkEUHN9wdrMq2NuVqG8qAhsNcjb39N84F47iLERxW4jSBno13gJkCpLdAUTynXDYFMVqmeJJ3sSqqmfC6KPXsN",
  "key9": "2vb6136onvYA7aYqzV6GMfZTkp92HzYCwQcNirz1DpFGuoeZDQ4FMaqoMhfxamGrjGdAYPM2i7HQ2LVPGRSsUZwj",
  "key10": "2wDXSDe7bqjHENiA2ddKUucirLcYaWGZ9YiHZuyMfPmRUeM2a8KvYg9juqziSEEuaNwX7crjZLPUoSfueriKjPJk",
  "key11": "378sg6BMzADzgcTdSbyhz4wh2PNQYXYP2B3astdTptK4neSTFNqZ7N235LCs4SDVkzyZeHeCiKydSzFscs76qWMH",
  "key12": "wCQ52acpdehn2kA8VuMft54rhr4WsYCaRHyVHUpcANzzs6GCgbUPGYYdkWE6BUwCtopaZ27QZ8YRka93t7cmL2y",
  "key13": "23TNqUNLpc5QhKWC67KuLphZhjCmWymRhB6KRMtjEprhe2PB8iufrefw6tSr1bf7qiAg14QpKLBXXL17MjuTt5EF",
  "key14": "2K7xi6B57JBXWmUJA4W874DUxqqrq5q2yUmGTdSj2QHcMtbc7FFjXyyZceXxn1WweXg56KPxxP16YnEQDC7pvkjz",
  "key15": "cCmCQBq33yZFFVLixMSeMQNFjWZ9TgCdmuDuRiSwToRgQZgNMSDgw4hfMBXLKDkLNNcSD6ucdVFvLFKDDVnoRjU",
  "key16": "h6YgeKExjZFvY4ztRhpJ6wTRH655ydm8gpTVoJe4toizegbRNn2v6XAusYFJzahunJqYcs6ef9W2YWDpseMWNBk",
  "key17": "4NpcJJuRm8Mwmr4qtacRXMB21Xmf1LZKXgFzPMNERXfz9zwstVS4bFXHmUPBP17Y46ChbNvrazTkqnibuSpgJFkp",
  "key18": "dSfdc6K4JBxtPxN5dAML7uo8g7m9yVAqSFjTxykfWXpCQakoRFEYu9C27irveQfwrJHSP7cAWKBivc4YaRqPYXH",
  "key19": "5ofzEUoBRBxfKSW8escKZcK5tjPTbFzfTSZc75rYB9BZLT9CwbLJjhV8sxajwTzehWBx9JejwYvV3FAuQXHDr1UQ",
  "key20": "2Pt8yB1z5GzAMvQv3jzsHQbH37fSAj7qSGtY2j5XxxpVqpqboKosPDvqW31UEra9yM9WydHPQiVc9YzzyjJqxaEn",
  "key21": "9c8ePJZr3dFoYW7b5hKnNimTBLz2oby36agcr7CQTAFNV7f6v42XjL5riMgL3Kv9w9oT2jvBoMxvbdSBhpKsong",
  "key22": "2dx7NRAehtcnimrwJEnzWRhMq7TkbpBg9sJminiqQMHvTB9Lf8UTmEykuk38FqWAR4twomut6GUMuHZrAZwwggPq",
  "key23": "5wHbeXUpvGpeVofabVPg5mzvUP5KX5WhNqjMqR6niUSmQApQ4rU6TsaJZ5G1jwFc4MWDG9nhM5VXxJWCNiW53NQB",
  "key24": "4QVHfvpcmikZ9ayt5t6jyA1CzGNtTNgYtJBjsN3KaHPYP24Xe9x1wS1QVXdAJ5izSK7W1d9ye1k8qR3cRSSsNsTt",
  "key25": "3y9CiPXhnJkBWqhgVrzd31v7ztZ6JeoVsJhL2pepDFEqzgBvvMcchYJiaPyGJeJWaQuKo71o1QNYMKVF9mya7bBo"
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
