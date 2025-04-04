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
    "4RLc8gFbTCNQ1RwtoMVCzLse5MxgSfDfQHJeFNorbfbZprhmDZnzW9gwgo2gUa2gA22w6K2VCyzCG3QPgAiSLMov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NB2GVK26bfFg2xv2E3oPuYVwngJDyDckgiJc6Apa7UE1Xz3TU6nyJ4ERYmvd3fpKeV4jr9dicmF3QUysGghhvw7",
  "key1": "3SMrgT73QQmKeT8qTDP7b9FEjNwY8U7zNrRyhpJaxSjnz3fyCnDuteGrsw2nmjRnKFArmL53zMHbRM78uGLoSPcy",
  "key2": "jRAJ6ek7qf5MtzqviPqdi3W317o2aD5Yg7RDsXzKX4mKT2QobW8VoXPmjQwpZfgiSJ5TsmnEEdArxMFVvuETnQr",
  "key3": "2wrAsmJ8a5wsodo8f8TYXbDRt1uwxf3m9jThfwovXAEaqrT913izhsGNVKoxUbQWbsuGHHXW6BvGhySwsjUBKXbL",
  "key4": "4aUSXSFG42FMQabb5xmaNZTJ7qe1EXs9wn4Q83zV9tAe9QZpQmZqvwHR7BEVEqg4NTAQptnkuAfT8RNnc4SmYKai",
  "key5": "4Mzc36S3Lxj9vXifxHKM9me51Ajb7dRGEt1WLAJnxNpHLFCSTdNRJmsexa8i2NBRk4qKdy4N3zqisX84ak9L88TR",
  "key6": "32drfy9C69ySTea3VU7Y6sBiADap6m3HN1VJ4WpJrCXMoJN4yk4CHAS5bHjVnxMdDXa1ZK9z7pdg7YvD47n6gSge",
  "key7": "5okH7wGMs8ENhAyB8mbuen9HxfaRUjxzQ3YtNBoLJjNgvvrMqMipVvxJAeVzbdWB7tDE24bgDRgmgYmDEYd6QZeC",
  "key8": "2uaT5bK1iGHWZ1fLTVJ46r1RF8SaZUDtehwGho7QutnqijdZLLpV3jcVQYFAGAWN7Xiy8CEChVBmKAdrMiWq5o4x",
  "key9": "3gUrcpiHVLsUB5LuMDUs7R34RA1gf3kdgCUiBcuHjkFXJg7nqu1d5v1C16Zkp5vkSvYMPMo81BSASVdLBNyJL5k4",
  "key10": "qYJfYjgukF6PfW7z4YrvtTAiN9W5BNnf5ceHw4gEtV43NfVuz8MMh7mLeD1Ccy2qcctJacqf4se2ZccBL6tG58B",
  "key11": "hJo496PSJVz4HJNjuZAeMqpV9eEKpKd5abwGRhtwgbXXHHDt62stQBTE7LjUR3K58RFHUopkEg8U7dUQ4HXPvmi",
  "key12": "32toqayYpn3JPQAA49qE9M3uyxBHZZXNZY2uCeo2ZidVTeDRvz2JeKBQBTF1o7yCYieYxCdY5kKdwUM9DimRA4jD",
  "key13": "5ANPDquo6tfEqRsBaFXHGRZcqDr8sakkDpu9UUMnFjbuiFtiV4ndSnSw9JFgBUm8g8Djw9x7YWXw73aXHQvQiohx",
  "key14": "3R1322yi34Bd7kFUKxKRaTtEuL9nusnd1wLFeNAVtxiY68FcbxbM1TBRJc8Tt9PZgFYfWhKxX7VYKby49cKJJExT",
  "key15": "3YoCvn27H2dFHMM7ozX61aaH67UJJuAiyGdaGsMffgxnxc7WwtyNgexAg96Tou4WeG9FWp8ZciYkYnw9h3oH5jmW",
  "key16": "2HQY1vxwQopu6QLtGXDcpG1dUEFUH1SbJ2G3vcLw3iVFZrb3CxLwCLSdApx8aN5RbNMqdLNP95oeEhMV1HTXDX72",
  "key17": "4fWGzU4qVt9wBK6LLsPC9vAGu8Vrd1bcvo3yZdW8c4KBjhsfJ2LzvQyW29r4QmMJnuX7qCzAyo6YK1GrB81HrAS8",
  "key18": "5HooCUsmtesQRWrXS4wXgsYtN1UrVny83uqFEu5uyAbzvKogQViYtuWzQ99soyNK9n7HT7U5LpH1Mt8i9crkbUCY",
  "key19": "3W1A9mgdzjx4C5AT8T9W1NJWELoLdFopiVQRBrBEhGvnFX7WCXpsunxvVnSxAE7MbRbXk8ynjcX1kQuz63KV7zwF",
  "key20": "MfNYbS7J4fpTyhccwNedhqf4vgWEojwinmxGjJsow1TcVKomFnmWZvu6egEkCZLpt74pJakjweiyi1ET1UMy4PZ",
  "key21": "4J7yxoBc6KUjp7ibV2kMHUvFpX39TfbJeaEVTHV1K7yNYTWErEmH2Apxi9fs8X13wReQ5ezyaCdwq6DJc3DevDa5",
  "key22": "5TwKyaVBH6x795ACHM2inbAPJj93dDsxfkya87GqDNB5FZKQZyGkpfvxkJg2iNrR5FmgzbE9ySLUsR5K9SJYHbaD",
  "key23": "2rSYP9bvMS8CqAuDX7uyifLNr6tJdyug5uvnsirzmJvTp5KYSarywXnmqh5DMN3xmNPxeswMvTyNDNW4nDywudnh",
  "key24": "2hpE7SYJYJxDTtkb8zxXMHErPFNEXr5pE6jrKWsw75Nyt54vz3TVyh3ptfuZZjyhwSioxem7KoS2pxTrm7zvagJN",
  "key25": "dr8jzHLUgBHqeaBTPThm8vBnE7pEWkthtmS2nKh9jGjok1G3bVzvB7tkqGChxSya3zsCMH7BiZv846YtwXeNAJg",
  "key26": "56czEAFoY32WJtAsZeWu7Rwn2VL5yYQiF3a1KW51KXmJ9fca69ub2fuDBZnB53iwqdVFVuqptovsXFPebYsZXRQD",
  "key27": "52RbVpPMwdRVmpgtWFy989sdjZXf5g1rtXSQe4AcH2GZur5zpV8dPFmgDut1JzFjnhPRkgmadX416PjXYCbf3Kr6",
  "key28": "4vkgwQp7Zvn3syXBwZ6oKV7BtPNakvP3kufmDkDxSaBMzmKZJYT2CRawpGBw7ZSkEDSR9SDEpstMzNv4qjxbvbBT",
  "key29": "n14JGSc7tYcy7pAnswZZicTtPQ1ZwNFqy8Z9nEvma2Gj42Ja3wmxFEcyY7gi3SdXHuMuoUoR8BnJP5pz9b13GDs",
  "key30": "3Rf5nB8WQDtTMmTpt3cEV2rBJ5eK6tabT5eFkg9b2tgY7Ah55H4yT8KNAx9kiBs8SeJ7vQaYYoM6Mrj1rvBaWzfb",
  "key31": "66Z1hoiB6x8AafB9AgJq7g8K2u8YauzdM6cFCn3LCwCLcwscrK6Ygq7SWzJsxGggihmgMK2f73eKP2gfqAcwi12L",
  "key32": "5un68wbEkVmD3iAGwntWMPT3kZxsnB5ymz9CAktxsgPjEuEpm91ZfkXbkS5oCSBngxT4enmaqSnbzhSWs4KwntcU",
  "key33": "UfLPixrPHDbc2MpfSi4vbtf1Z15BEVbFsxfwybA2ghS6KQGxs1rQzvQPvKiwc4Cjx6dixetw7yCrWweWshuqp6d",
  "key34": "8tthiAzuXcTRBrJ8fPvHGmMt967hmUZ4CU8teBviZ2CbHJrK9W7avEZacQsAQkNLPmHH1yUguEP8GWCbfQPkEnQ",
  "key35": "4UqByqSV2dvjF75wgveLFTmvLSWKF3KdTNN9ieU1FPpqD5H6wNVPZiHBuAUHPBRx4xSF7W6oGo8CyK9ShqnvvQXx",
  "key36": "36xgr4vjdY61c6mrvaqMZNLxXQnjA8jDjnLm65F9q6fK8q9G9kZqd6a5ZHDszxjg4svK4r7cfuehAzPHJMEeta6Y",
  "key37": "5J4yptcW3i37xUqL7j4TVBsSbd1zzsFsCLViAXhWV1sCUeKFdYyaxiU7teRWJC966zLUDZw9ckPYYq6e9NujPXDb",
  "key38": "5VpVbT3vivxS5CXmJBRLWA4ktHXAfkVqsV32kui19GvPDcQ3WC3mfEBhtQqAP7645zDcBtswgEAa3Mk9juC4xZgT",
  "key39": "2Ym9Cb4DPvAhuGWPV7YYQD9pPfEFsQN5ACPupqmXwSqwo6DQqhHscgU8yr4THt7hCv1wKnxyDPwCWpmaGnHUt5L4",
  "key40": "2ezWb6HvJkzpuFhoPCpGAGZuqBFgSP5FjNE8de6fiiug3tvLAAX9mNfRVYsxTuLDQYduHMhFLpyBpC5M7Nh4qgFm",
  "key41": "3bH9gxsKd297hQWYqCr4H9j35APDnNbCCibbaGhGeJLygC3HL9gVLi39XYpn9MJx82tRx58J6qg7pUmF2rMXU31S",
  "key42": "5tAvar6Ta6xWZ8yT85jqSjrqvDxZdCBYbAgY2zUpiRRtDShP5LoqdcP3eTAcLVkf6hxsgp6HNEKFCNYwFCs3PXRj",
  "key43": "41ZkJFjDyTsqPZU5R9njFmhu1CCutTHeTsJW2gaaRhu1s7d9MMuTxwgw9Cu26A6xjGGwQFUyMQcuYRNzDRZN9e9j"
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
