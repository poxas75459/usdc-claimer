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
    "2BjJEtXgC4EH1uZDhNmu2iiCpAXpG63pkFDQnFv9A1TGpWdGae7zazRaZB4BsPYAbW6V3kLh4H1vjrEHogYG2hxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DBrtnMoCWGiKwAGxCT5BQiEMX8RwJGXHAXm1wZUKD62P2kBR8fJScBHfBMwBPWLhkULvavnfGP3dEci5zsvFiXw",
  "key1": "FeNpEBykQzJrvpCLG2ZvFGd9E8TRBbwjGB5ikX3V7SbmJQP5xZXW2m1eiqg8XBgG63G95UYkPMg5rSDSW3egVdE",
  "key2": "2FnxzXrpqy5wad4yLQa7eBLscreGGmk7EuGQJ8ys88FSNW8qMBMYqtxNZoqEYdbkssE8FSCgBeZPXVGmdnxiS7hC",
  "key3": "XAmBr5dmQPhP1fANhEJyyGnpD1ebaUUA4pUHmXhy4frrL62XdhUtgVyxaUDufAS6zD2sKW9M4CW9h2AkSiHYc9g",
  "key4": "2V9CjPvEBp1hpGhc8kP1Qe5bXRza2D7kGEcZPPydhskrLSfkUTdGtRSWi5upym51DK6dSJcQFbKg7Hx6wMJg1KXP",
  "key5": "5mvaZcMjP4UJm2SHVxnp9R3cK7NjtaZVBoN1jm6v7BZzr6gcfdzrjUArfUU2DCXgXY2QKJQaZ8tjnhyMwGY7dnHr",
  "key6": "5MSr6hK4CCgwPRbKobyKGn2sUGpSj6DHFnyQXVSpitMRyUWe1TVf639fkQPpazP5sFPD7ByAifYEvDbRiqXp4ryW",
  "key7": "2yPKsoyNtd3WvGVseBQHBv5eH8bn2jrLmb2ym9d1ujtNvqnPG7wqYeakvAaUKGCiEqR4jb8vXynocfpQ3QscUiQ",
  "key8": "aEh7kmRNdGFSchn7LdWTp2zmrPyWsUqiwRe4EvMEXTyc63aLfcK7KXx4pXFA9z3V2RZqLCkp3Avhmx37vKDB5CZ",
  "key9": "5maC3P27Wym5g5TEEoE3x5BHPkUTPTtkcm7ErSSXiNSp8zdFsTTEz1YxQpm2kiTdR5pnzPNAfgw3TzFPAoQSmAPx",
  "key10": "4tKNNGg5JreHqvgA7X4CUdGPy7kG7WWTtcn25EDKv3jMEzDvuGhAEc6G5icJq4vC9UNTgyxGHXfxU9WahoYoJSer",
  "key11": "okvr6PcRZQyWNCCH6GR4NewuxSorN5WMtrzZLcuVDhaXLt1qfkc1BBJQRPz1ucqRzTHLQyPqVPBgymW2JT3wcwL",
  "key12": "47VJa9RRrH4GWagkvPThpTmfeELCvbRco7ypFAFneRXhvDnu3u7DAWJ2YHLekVSerEUey3QSWfQXLx22QEmqbw4n",
  "key13": "crRAwBpFhq6iS4qnNwS7HvbVyP7FZZkcMPnBui897qb5PagCdBJ8v3UZaGBE8M2wmS9PDEg8UmEaUMNWNkYNLVP",
  "key14": "QMrjQE7dMz2wVtDW4AnpBv4cd1fTydqhRbu246bJ6AHt8CMYnZDRWjV4vqjEgmXdrN8awXjQYVPHDd6Qq5i26du",
  "key15": "3oWWeQrxsJHg1B78tkRraJuiPsZcBZcHZpg97fvxHqcDcRr5L7KJMf9aAR1FXU1ARnYUWMEj7sJyhiq55rcfV7Z6",
  "key16": "5KzqPv2EjTFt5rcbHv7q7ZUt1WobbitDdSi61RqGmBTUicq8riqoaiv1jQBTxppBYfTTMea3eDmNT6aLYDR8NMf3",
  "key17": "5xZAhB6fHppcRXK52uG2QLRJkcB2WkMsB3CK2WLpuMFHV9yJGq8iecii7hpPoKA8TepwryG9QyUaNGCMgEvvBqyP",
  "key18": "2n8SbA2NJjXrPyBt2i8dhd8yuZQBRf4zsXamcL8yhL7hxydW5eZvRwGztAkyUTY1fEcKQBzoKaU2ZrDz3Nw8bDPV",
  "key19": "3vz2w3Nyjd4kbSuuJCBDZreDv4RUyyaXtS5DHKni1NNPGzsFAaUCUVMcB7RVEtcKVFsRuCYABYMoSmgH4dcR6bgY",
  "key20": "5iR2vB7bidmjCzckYRx7eEwDrtiS1cHFePg8xA1pjEKJFEXGruehbpdbMQNkAPgtpayhSdjHto1Uxtp84cpFyu5E",
  "key21": "5hFg8t38pXMShFb3bPbLtNucuwy1e4Uxdzcx9e2WnwLhXXi2f3ty9V3rbQzHmQTqh8qucPQtdCuJkPoXNdtZ8DLh",
  "key22": "4TGQFDHeWTNWW5smyGTcWZBoa75qG6WopfvjMhwAhgrxh1gpmxbFLDWVQTBDSYbUmDcXaTz1iQMkr5uYBM8mqotb",
  "key23": "3VLBWhZCbVicYVBjCKVbrSdAq5u3qnzBjPY1F2nb5K5EFg5BWw2Wtj8S7fLJ8jyDddwAT9geAx7Df6p7nc1Jwsrf",
  "key24": "27crfbrzS3HQTMoJaWnsJafHaFLuf9RPw5h4hwt6VeDNmtdvjkRmXcmekc6jiznzKJAayrSLJLBHEUC4bHrsp7Mr",
  "key25": "23zNNdLXkJEwsN6zwBStZf5kmHMwMHA9urv21aJAKMF5KEwmjQipAwLAV584q48ewLiUif1n1UkXKxgKFBngLMEd",
  "key26": "3JwgSw19qf9BMLp88Hpnvg6R9FyP1JgaB6MFmToQoBd49EmhTmvgwd7a2v6mfvMLzVoZMrDcdmHZeb1LyfTASFM4",
  "key27": "31qD37bkQjFhotHD9JafoU1uXCZS3ePJDMxVC74tVf4Y7ctV2ByHfzhHaVVLrGBj3foF3GXYAMzdNz3aCwwQUsXx",
  "key28": "4WRVSwJLXRLJFkNQbKcfpeDvfc23rVN3gjZtKigmHwicN54NGmRNrqvrQ5TYt6aAP9URXu6AZzCnqCzZiMTdnMaz",
  "key29": "4kbB4tprCSGHc7dTWYkLbYQHUYz3Ud3QJsFBsjsm6SonibyxXvgZaCizXkxVzTwt6ukX3FkAbhpXGMebfomgRcUE",
  "key30": "5AzUGnbkrKAL2oa6rXsA7ZFrS1aoByoDfrNzija5sUzeNQL3FvCj1DjyeDt6xdrVTBy1zBoGZku3MkpKYvYwf3hD",
  "key31": "5tNeHaruJwbUqQpLQoFPjq5MQV3S898xQ82Z9Vhwjs8Ven5epUmQ4KxMW2cqVWmZGT85sHnuRkdATSFiaygoZA7F",
  "key32": "31vXgPRSEcQmSMs1KMo3vyKcTGzeChkR2hNdNq2Ss5nUSRFVZCahBVmQ2zDBTAEZ58A3LUpKHvcisJcA53CbxXbB",
  "key33": "4fkmFokg2Xwq3PzASTzupQZ91YxzGD6Lgny9bBk3FhagKG4pSZnmbz5fF22H27XZ2fAYVmE9zrPxzzf2LsfEHuYb",
  "key34": "5Tc84exNfnE5oEoKqgq7nhe7mJpu3HLwmy2tg9y4QqyzueZ7GqFD5XExs2sdh79erq7uaDDg2NY6UFrjfCFhC8i5",
  "key35": "3TnW8p3noh6oDLTkyB9Nwe1sKsinQuE7dUqYMoHg37epkSZTXvEd6FWd2vWf8ksiCEq4LZrb9MjxmG7k9cvoLat8",
  "key36": "2CayXRFhMH2jfMuUQPfkXBRhLhQyZbepSG2kc2gvyFALapZdg2YdE2JpvdpoxGNQgv4TSSMhoj54NXDZU9VsUSPs",
  "key37": "5e3fbjHHveKxbGwzB3npNNN9SXTuS9AZVNxrZg81QfB323J8SHQyk2Bq1q5DNEV9pHm4DD1HxhCZTArdZ8Bch5hG",
  "key38": "5T61LcukkxkhiU7zzjdkkbEnSB28VBP7EyzUMA9VZD8Y7VyFwvS8fBgkHY4NPG4N2C29P4UAyDvbwhKxRSshcMcQ"
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
