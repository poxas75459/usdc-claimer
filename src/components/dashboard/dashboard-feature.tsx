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
    "2AiTfCC6rSjSnAyCrzx1f8bSKioxEbASQNsKqwQXQGWXECLyXY8dpJkFCPc7iQhUw67FLi1UyXvt8aZSfn6bQEZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5nFzEFHrq1gkQ5UjPishvPtoaXjW4ykzcwmyPtfDjMugY9Rv1mhbJuXDVa79PBcC8G1TeiUTsD4ZgZM3mSttwf",
  "key1": "5rN4G5pouPYXteQ6MjZ4WfEmxAiJUzBaxHgFBxxv1T1w9n6QgJJ5oZqGPBa6aMLmpxtPMx19sbreopdjWbvYXctR",
  "key2": "7VMXFvz4egi2k9LoHXoFze97nHhmRR9jhuqUduriS2ondhJPhgkhCqEVqG74nkD2v8kPDnaW2m3kng3pJkbQYPA",
  "key3": "4HCVHapsFUNnxzRAuwzUPqDryEtaupLu2YXaQSS1sPSq11Sfq2cbgnjeNkahtMPykrHwTit1Dx9yb66NGQtrUAvW",
  "key4": "4m8dW8EZzwB4BJ24kYvz8HT6719kW5de2ac4uLrbPhLiqvHbmcRoWPfRXqL6ddiSbaXfk5yHCQp5wj6BGqiwhLYX",
  "key5": "2ksqTRz9cqrN45jNzHVt2SNWpstSdfQt4U9Pwm2YL13pFaqYUaowEzseYBS9B6RRFbu3S5D8UQbMzJMddbe3x4yY",
  "key6": "6RRZriVif1GGR6wt8SXH5wrQXTTcYzBy8gjpvaskVtyUcPrrfiyfxDrpop7uVAnd6hzuemce9pGZcQoosBa8VMQ",
  "key7": "61oHazQqjPZXcQu7wH63vdWkJkci1V1HGxnyPMzRJeqeeuCDMC4tWw5cTeb9GsqstpqKkx93seR4yp5GHDyu52o5",
  "key8": "4mbnMyNLk8fCSsMeiocNTiwcQPq58V5oRnkeW6gNhmhXCBf4RtFJBNeAgqxssUEUsF2ywU7zpTv3WciedaogcciK",
  "key9": "4BJb7ej59V6pUniurvbvG2xtsQxzbWHL5oQkq6Ee7cGU9YCjSJviUYUKNwpKCnipHAaNRh5P2cEUd5TMhb7oTzCJ",
  "key10": "3dcCee4HYYZhpbAYzfznPWi59VDf1BFpja5MBxkq3E9oBsFegG1KokntkerdSSXu1sSy2d6zeimJKn9mtHnJpYjf",
  "key11": "JaUkXdvw1iKc4ruhGje6Gsi2JhYYfpz2tbnzu1SymdUTDSYcd3qrRUkRPEdrcokMySAUWSWh9bv2mp7XNdRytsH",
  "key12": "5u3FNriwPLNbbDurWLxCyj3Q8ZMVGRfP5PRCEdV5sNxZNcMXaAgCG8GYcHpupxvGEcstWvN5ijXap5JzjX3zGGcR",
  "key13": "58kvEuEtjMwPGCdUJwkRpAzpage9C3Mtm9pqWxvHMJqGpK67nUwz8LfbteGyBNAMLm69eFCgcbAyVdHJJo775Z8H",
  "key14": "5WFL1EHJetXgh7X42xCcbLXYLYkqT4UQPmp6AknHyYYaUJFcz4vD8S4oga3FBn1VT2HHUAVvxP3q7s3mc3WssD1W",
  "key15": "4SJSq7H5yBjjLMeXLPhWgzh25AkCfabhu9qknwkJDX4yEKC1ZVhiPBPgYUGD8fT11Vxh3Ao1gvo3j1t2aDTsmpLo",
  "key16": "4a76aqWKZ9uRguSnn28SRmyNsyVjGPeAiygFLoHzMWH7u1tdXT3cueb9UWShrTZfg3qzz9hrxuTtjHxGxzPXCspf",
  "key17": "4Ri4XXC8LGQEFYKprotNwNUYjUX6iHDphwZcr4c8RXmyBgcLEZogeVqwnag3C9bJEYXmrQmuaSqgyMBm6uP7xxnb",
  "key18": "3Tp6wNxgUmnPd84ZKeaufpJj212B3wVfVzRXWcezuqeRnucsHsWphAF4iKFHBiR8tDQ3qsQjhRXQPXm4Dsj51MrV",
  "key19": "4F3oHE5Wysy7BdeJf2C6grwn61BgzCJErwpu39ErHCaTQ5AHs6i8c97TsETizJQqqAzuwz9zo3KWRiUunUAheCK7",
  "key20": "3849kLrGwWfs7SniqrjTmW9mAndHMVxRyRrU9P4hiQsFVBgMa8q3wKBPTf8YVLZ2PgoWm9LLtap68Tpg346br6Rz",
  "key21": "2HAScNf2KEaByxHpK6gxKgseUYsUuiHZwy47AtQP7A4PVm3LBKDaSmcrFP8edF2riEvj1tdmadVDTb2Eh1Bgg6Pa",
  "key22": "2ABUkrprXx8A5iugFc77jRUmwKvQCDpAbqtStc6221nT9naS6yQy28J3e5YjWWwZdLDUF7NAa3pdCEk6C8AK7mGL",
  "key23": "33C5vavK55LLwVnaQVbyTmZ1Aaxm1zDR6gW4Xtg24QUmUzngvBKbfWKrQTEyy4iMmpBd41c57pya3dJAkufY5XXE",
  "key24": "3hccX6woGU2grqoZcgnVBGiMpuXyxiGH1wAgv8oALw2ZYhTKGG5RVe9Ha2WxgrVKkDg41BzxfUZE4Mu2Hd8u5yen",
  "key25": "3fD92Qwe1LWfjNe2nsZhyVYZLt4pzcv7PESCgwgfpj7Ljy3Ru5WRAxAQQcDivVDMy6oUGcKrc3PfTMYWPi2sGcoW",
  "key26": "5JrwG7mmfHSdsuSoeDviWpEjowkyPP7uqff9oViYve7Ga7BaaBdwWhGD4nxsxwjY822zn3yPofHvkBpTJMnmAUMc"
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
