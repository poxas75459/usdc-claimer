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
    "2fiuaM31ZRrbx6y2Ui5craXnDEiwA3DGnvNmEVv7cmZoTTZ6MxEz71JrzakXud3HD8gUrsY2GrqnWY2n9ZmzH5pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59icxNcBY87GnRXzaPSHCFABGX4N2sPAPrbT2YbFLiAZRdkyhZxju6DuyUZwHKvmwKq42fzpeHxuW3SEeFiGoc7y",
  "key1": "62erUFHEAZapQn5aozeLAtcf1ZoTh86QchjrQWdgUuHwTaWkVMW3V8cyQq91Y7v7zZhunu5tkJJMaHvBn6rcoxPe",
  "key2": "224U99WnAWHyqDpMW8XbroCbtNqYBiPkHdWCSdVZbA6dZwCXEoshSf37DSDDkg89QptYcNnGActphuTesNQfcji8",
  "key3": "5m353tXDt9ytfquziv6wGrjxE7PqMwijKi9d5Pqdn4LNwZFZYfKvupwRXvAufTdbWUQdEuVxrVzVWB9zzjfydsy6",
  "key4": "2LkJdQCM3yQyLziyWKgypzMNSbmSPaXATCVfpRWftZQ1awcupwD2buPz8osPwNJNfdCAnSq9EjyytP6PYi9uLGhg",
  "key5": "hk4wgXP7K6fDfdby47fAzB2WMA1ddmpfSKDFQMmsdyUuWirjEhGt95WD7bRgviThFBux76qoFwmda4Ssb1vtduK",
  "key6": "3wxPdS8hHR38jHHwbfTiAJyjw2qJgabmYsTySQfmCaAgm24qSxpN4KNpiXpEsYDz62jGwanybGJAjxjwcFjNpzyX",
  "key7": "f1JK6arCiC3kniMj5vppzZUfoygxo5RXdMeXrezNY83xmi7QcNi2DV8wQgWyWF4PEW993UBcmnG57m1suc7DE11",
  "key8": "41ME2XAptwk4SKm2aUQ6nTMEXRwrff42QV2XLLXpcCDs4gDwbfGjzwx8Y4NEfjK1KBE8pd9XhGakmF5rZQqZPsqX",
  "key9": "azyh8wDTovKdg2fVz4KbUzQp3DcBE2AisZGNHxd9u9pWdYZRuMkgdXnz98SfoR7kFNH6vqqA5QBhnvHwey8MdqV",
  "key10": "31g2e2tbduFSck5NUhAfDc6hM7MKoJeeQGpkNi3MQ4WCH6eqXGGtjRbA8bYNZDaW9x3h79w76D9r7FBnrpwp9iFL",
  "key11": "4df9V3ypazq97HBHu1ZajA67bj3gpoNGaEPYsvLeXQ6RH2iCgL4Ai43snXJYHHrcxsEg1kS3y8s4L7zMM3iyH59d",
  "key12": "3PqXKhZ6nn9QMBvkC6kr5czQHsfPTnTB1qSRwgAcPjN2NgMMSyaNv3sgWARvkn6ftKXoTeq3BevXcSHGf1LeNqsj",
  "key13": "3VYrtjYqXJRQPmo2RnaZ7aw18HAw557ozM7QEmv2GYwfww7ZUSTUa4vhRknruR2bbzdubuTnmx4v1kpktx1nJeNg",
  "key14": "qGqX4ybM7cbWzPkRLiMjQV3JT4MsY8hTk8FtT5U4Chok3veee4DDeYnQGGKFLyKcsnvcTxQdWU9zKTsprxcM4cj",
  "key15": "5ZRrALUhQc9NruKFrrmSshRHxDfN4vKq9jY6U8dYxmnbTXipv4roDHVp1f1RZaXg6XBdwKkXUUjdNhmm8qvYpWWb",
  "key16": "5cNi3Q3n8n7sKzZdzxL9GYXuRWCLS5HnoZWuBPvwrBhWLus2gB2bB647NCLnpnpqChsfaBNw99r9WWCQSqq4PMsi",
  "key17": "58WAWqJ8LZcoPdpyLGMwj74gUm1XwJfFkHDx31yjZFEtEpZu4auQthTg1WgLKxh4s8pFhFjQseZuA18197sK1Ts4",
  "key18": "5s32rcoAz3dtHMe1FrGAphzeEfrTsvGcCBB3bkuSL6ybnKHa6G3SHWZaJ5v6NnE5DqRTGfxkstFcgyDxRexm3wLf",
  "key19": "4x9a7V67CsbbNRrtZExzV3KTKBxkKd7LoHB8qVMK5ksQNxHhgYaAzJQAjT4qdnYeUBK9E8ZCpZpD8LAe7St4jot6",
  "key20": "5huwWhT5hMEgQbwAaYkYMhqhmrB6YC2TToBoKPWngJLnmnfezWdtzhcxkhHCcxKn4FdhcgkhL4BzT1qg9EA7Ncau",
  "key21": "tdM1zf6oSSJXLzwHveZtMvuUZHXtqmLn7zVLNLxLYf3BtR4eWPLPwvxENdUWgTZoLLEK6Sf5owkBMhL9j8ZygLg",
  "key22": "C5sP7VPGgtknsiKJg5Z1ibgSqRQ1BPitNBsARV9q7dDPRpVJc89SJjm78eqroaauPzDJHBAKENDBeTSpLb6gWX4",
  "key23": "2yVLMZjWwwJFwwKwD6TsJV4Y6ojqDJHJrKNt1iwku4GURm4BTMKWfT8ZMa5mPx7LeHW8gFRVs3ce2PkrkRJSH6wf",
  "key24": "2GHrLsQkmQyEZ1UkEaZfMXJPZrkUPxmyd7TJzWaY6FxobRTKmXbPcuLaBgMF9E4iYgCSFz7ShyovuRF7FSYF7Sjo",
  "key25": "2osAabWS1AxprdJQP9QkqXqtDqH6n1uzXGgsAGnieaAjYrh6qQ2ANadryBzWxwMxV77ZuNSVwEwyxHEWLnsbSCbZ",
  "key26": "3gAKLjxhVugSs5gX7JFaaqbKfPi1TB17gqgWR6wpPQg31u1R1u1mWLEGnV9D1AdJHEamd34qkuDm3PphTc3bY3ZN",
  "key27": "5YyMtLKHZxqBP8FpYmTm6zhJ579AyCWAo3GCpBYASMvrnW4wG2zfczSRW2B9mGZojpH1ha1KjCEv6KqouoexWQqC",
  "key28": "4K26iq8Y2AqDDtrfg4VaLPbKXxAMtBiHBauQ7BKFUH7NmNExBcqi12oy2uyU8fFVy6uswsAx2SAP9HWoFFRN9c8Z",
  "key29": "2z1poRhfAmSgqHg5paj35PneLNzgJm3Ppj8C9hrDwfzcR8T5fhDso9htyqYS4NBUSXyXEX2ZMtVtauqdY9rJxHsK",
  "key30": "cpJszwzgd6uvsn4Y7rcUyRx7QUC3vqeKGmc6qvtdP8ih4y42AHthiYio9skuaJxs1QQEfi7om34H4W1Tox61hcK",
  "key31": "5x6AodsQxeK3tFNUEJjFsaSNVwFRBjXLexp7os1YcfxavYwG6w79UNz56dE8fWCodbQ1EKGanFT4vGErNcFgBEq8",
  "key32": "22Qh8uJmfpCcc3Lb5i4ZwAVc5VR2278c8XR4Uj7oEF3bbW1bTeGUu2dFDmLEj1tTVmeMkyGZPcwAQm6popcx9Mjw",
  "key33": "59GgwwPtDnxpXuCiLhdxFoJLXkk7H2tLh172gshVJha5y3ZkBb7W6FyRFgFQyxG1z7k9zbfyYU4sT2YcCT3TTXA8",
  "key34": "TmJWL7fig7ndmk8VUQ6YvmE99sRiW5zcHBodx65bTsVJYVi6o2ZhXZxv7z5Y1QY4b7srFzMyXKRoMziVXy3MTaB",
  "key35": "3u67LqmwvHrtn4iSC9fSHaW5n4P7tu7g7VgbZ6L7AobtArhhDBQE4Pep9EcdcJAbRvN9T6fb8z8A7xgdjYskmGox",
  "key36": "eKxKn1xgF8PaTdw47Da45H9TgX1R9eHpZ75odwHSic1H6Fi8n7hj6qnymnwMcWikpqqDBaSVTZnopk3YqdwH84x",
  "key37": "5oTBwpVFnMhqp7a5dtkMyNsu1WyBDWhFSx5XtRcRs31u6VgPoAGLVFZnXThMHkymrKCeKyLvbZYaCwdyhy1bB8zP",
  "key38": "3Xj2H4tzvrfwMeroee2Hobff5N1uXJwQDa3Fu3QmtS9xoHRYEPBXWQKC7SneFLgd1wRMiyE6ZXsaJsq9HKs8TQ4A",
  "key39": "2k4LzgEyeXouw55sPYSwrCeP2oid6hY94cCzdqxrJBHXaAoiypZmyqiY49oXBStq5G1CLScA7auGbYR7tSNbXDoH",
  "key40": "bFnds1CE8i287KkYBm9tkqTVc9yNMAU41dRQWGMJQUxK6fUC2o1WDecamrHe3BPuKTB9Bcv5Tjf7qPmTFgUcFHr",
  "key41": "2JsaBwfVxmk5xrFxEcwMHS9av7r3M2uSReFrJdjiSK7mBxWXzW4Vax1qwMYKw9tTQdfoy6kfiLo2g7MMTMLAdWBF"
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
