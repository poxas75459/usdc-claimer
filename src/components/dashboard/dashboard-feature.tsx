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
    "4Kz8S4JqszDmXRAwj74yynCAH7dZddu9CKipcAnWMaDXFGoRZdWXMnV8Qt7ybBFHJu21g1C9oxWLmT5S3irfc1CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGfGfJVcEc8hnGqFG543uWWxNtZuSoB2SjgKBAs6VGUgXLb8UWmz6HJA6eS1dF859MCG8Z5HNEKttyKbaSrvLjx",
  "key1": "5oMhUqDbBzxVt7CRKHHQiaHGDQ2H4Vg9tNVDCD4S1pxjepSEes5YJxEuLbCvBLY2E4YRMkqgcDLGi9xTE5keoXA4",
  "key2": "PyZVnQfgYWy95bbdfBfqbW61NpKumDNNYqUVYUC9EP5TktwXBp65vttcrdP8KTH4SJyS1LDh7ktcBdUwgPxp3j6",
  "key3": "5aUf5VpJg57Mh9nDDz6enFx23cjwZ5homwDUtQzx973bMsnUsbJdbdBRmAokyiAnGp1sC2s1Nde8qWt4zppsheTc",
  "key4": "22uMAKyoKSteBcfdGKAz27xDhtE9qJZfX9vyTMfV895oszB5K86QTN7FwHo29iYVa2dr6V1XdigUsUJRk2D3N7jt",
  "key5": "X5foqe566yJm5jBBVjrvP4HJnBb7kUN9WFtEwRpdgUmE9cVExHFJjabnRsURdoywFuz6BqpiSmiV4vgZ2RAr1wX",
  "key6": "NV9dJvZyHZMbFzvfwdHiGCoeN28imNcd5LWM76gDekR4Jh8FW3pve3Qb1zzfb9ykunRjjn8f7bycZxyUH8A9hrj",
  "key7": "3giKzH88cg5mNxbHByyUPGWAggGJqbg62x48yrB7KsmhyqydynVTM8QBDcbUhVN342X7Pib9Wkq4B1xGedDLybDP",
  "key8": "7WAVof66SdrZBuzj2sC6yboQjFrmAspyWmMiWA7tM86Rn3TvAhSrg3yoLLDieTFTA8FyB3LMLy8SQzHUQkJ8Wts",
  "key9": "54diz17SQgRWycwFChHrMqiNuBxP9pRxFSNakr76U9bicpktk6eYbTDcUS2iaU47pbFxNd9uay8ihXmz1NfLVPjL",
  "key10": "5BJAwEm7sBh5FMUjKgVuxHkrbuPBPEqMUZ4HzDDDgmCQnNxS79P7SF1TvLfo47BWpPjThtMBQWpiLVq6z9PBEr6Y",
  "key11": "5SBNjdq5JVReeAdZbeao2RsyjqF1jRpgQySW3wguXPMy6mFEab6UpZjBtJjwudxcZbmkn66xAYcsz6kkJ4vUhfpM",
  "key12": "6gV4rnTHTMgMjJGyNZGmgsGwNmZi3xrwGqzdBvDrMCnJrUZsQA6orhdrBiRNme4QNCBLtX4Kx3SzjAhNuLKZ3Gq",
  "key13": "4tjCSJAzxQ4Y6xjt69nsmWZjVhLk6DFdrzK5WGCPvvhBfpw4tttS3wNAR5u2KdjdVnea4X6UwfB1SqiPmeioTYkr",
  "key14": "TbbvMRfM9PZJjiQohtXKTACv8N7QYqMk3Z7C8mvZqaSgSVBtEB3uF2KYJdXAStU1sMNXb9cwhgotXmh8wtFo4mF",
  "key15": "3AywHo9mzsctDVa9nNeJbXqMwfac8MXcqN4nFmG8m79pbCEBgKX2EJeYqZoVV23y8saheXtKozUy46rLYcDM4tpB",
  "key16": "w2ExhWoWEk7Hh9YS3Ybux7GE4Pm8U4bJwWWv1sHqpJBbaof3p819147FVgtVE1qYkNtd1yif5UvC9GhGXuZMj7r",
  "key17": "2HFjvMkxqVf8eqBTSo6q7EpQ1ok9Z66LPtHgyFtBegrFrYFkuF5rYNhkK3ZJa2ovy8dtJMj3qK1Yd7adTF8V6vLJ",
  "key18": "2rZYxkaGwWR8FSqtFsBSZrxtwbeM9MAbroXXZsF1qwjeRGk2F4dtZb7tR4rVU7o2jFqhY7Rza9YEmDiLCGDmoAU1",
  "key19": "65gPrRvY9KCsvYJ3kFZW9WFM8XNprUM13opg6irVY4ZVS6xYt5s3wh8BvybgAWEtjZnFnnA8iMxcHzHRKniF2G9",
  "key20": "2TCEKdqpLPHHFP8Cpp2vJBSGhBMHySsz6gB8f8gV526MedPT3SNxPWgfZv6ZwZQiwQkwNRuD7DmrNabXTt86PKng",
  "key21": "49yT3n5DZqfrzNGziQkmYbaTv6uZ7KZ4T8b4cfgfGaKGAWsqMJxz6KSn3gabPrsf2V98bgTGuLVevrBrSvFremf4",
  "key22": "RLSNHLq8kEAUWPBZdKWvT5cwwGtp7K6i92kiojhJVbwAry6wXeEeEMUJgjy6onoNzgDawLkgW6hzWMwbNkwaxfC",
  "key23": "2uP9ZDSDHpFzBWgfCqixsm8UPJ9QBKPLdmpofcB6213B8VUkdtuqRae4S9HEcGXEMFpbXxuP5G7Mjq3od7j1b42t",
  "key24": "5J9kWfRMdPaFcxk1ZU5eUfzJcybwt4uViKPGkLcktg5hWXai87FwrwSmn1VxQNpTcpCuSG2YVDut4DczxzFUpHuR",
  "key25": "5hnX48P163xmABBuD7UrAmZf6uuHpcMU4U2ZEQW43cBBG1sZMVSwA9R7G1LzTkm2JrR59SVEFYK1R4GmGTsiEtfo",
  "key26": "SaqFWhwnAewr2BUsNYbMHrccNCSC53yhAhLBxkwDRmWPKZBHV1yzhdjrksTh5JoybtU9k66PiYffECTJJp2vJgH",
  "key27": "4w1ucvD5mSCaftvGJe4fniPjB742QhgxoKZkisBdb4dsnNwuBue4dHyWV3hRRtBaZvZoZEjmKzFy43b7tjnVWtGj",
  "key28": "2XK3gUYw6euw4sJ2CDTgZKTT5PC9kLRRdz7DdGRf9ZcNmnoPVoiModJZJNiQj1ESu26c31BqfS3ecAPQ4z12egSE",
  "key29": "iT9yqHfvvsJKHS238vZ9BeKRjMhYJNy3QMx3Z1FYCEpAFxHC4JQmV8arpZGPU5U7cTWvcoZk9uP6N6XHz7AXw9L",
  "key30": "5VAVEcvcbBKerqsiU3CdviQfxT4hkvhVmxnQTEPxrBFPDiuH4CcQuswPi4DMcMKopucbyvLMAShTgjLyjbF57cUx",
  "key31": "3gVJmbGoCBxgib1P7bX3vVkb6ncSe7ePmbupbwMzBWW2L4G2feGrGKV2PdZ99Yc1aFaRVKBUwnL3ouHCjEXeVp1j",
  "key32": "2dNPu7sS97nZm7Tkg7AZ6DAE3SWsukLdSgWiWzUausUXxXqvZ1WRci88GGNWWrWACyzHG12ij93aHrVFHzyj1A3F",
  "key33": "4r4rD5sULiorPGnxQNgfLHUiKHvWNxqGri7TXQbRrH1VyfWkReJtDc1hFK7R6YB1dnyhQwK2WHcWbcYhnXQ6peoK",
  "key34": "DokPaf6ceD3xLhPNkP2m9cqBgqqoozqtDs3Jnhs6srtHVU8M9A1FPzeBsbnW4x9zutUS4hyBDsctpFDqJ9QajQn",
  "key35": "3P3Nfm2hAShAh1QrPF55DQN6zGiqCNkb3NR23MrJecHaQZYbWUBE1Vka8gLSCQtq6KusgzEN29FFqazyn8gTqr56",
  "key36": "3sdT7JazQGckFs9XtG5XqEPCb7qz3VHqzx5njB68EFnMKKFy3xtvqFsjftBgpSoUHB1z7xzpGb3jHHzuzJdUQ2wf",
  "key37": "3uoDx1cddcVi2Ek5zxqB3HUmrcq6vDu3WcdGUVn5nFZhQRBetu9ZNGj9udFMehFLz5kHoGWn8xSvqdU1x9kxiX8Z",
  "key38": "5Jdcdakz8AeN2KXcHwAtCMzY3zv8fqFVf1NyQo2PaFcdxjAGUduFB7xBKsmx4KM8RkD6vknGgrQkZjNBvrstucnq",
  "key39": "5GLs4i5N7Cvjk2hFNvT21T1zB19Hxrgs5WvZVqECfbJX23uFWaHVMWsbnpJD1W9ejcRdgedLkFTpYsMHapeuzA1b",
  "key40": "S2d8W8kE3sL7Eum8qhLyTfhxsrVv3gDcGhxg8aT1WS84dJN5H6oapxZpCLnVvHyepzoJ8pqkw6EEGiK8Bwxi177"
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
