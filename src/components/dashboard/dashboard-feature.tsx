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
    "Y72ybYV31KF1UrbAt9wHrdBiUF66vv2sFYnYBWHrFFRJLx9BP4RqHkPb4F1MbBVNYEje6eu8rJGUMykYP83je2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WXkZPCCmnrS1uB5AhKYUuYEkcgGoW24EKwrVK99dCexNWbYqRXqGTmH4MnPBGwdgfHZuLF34YPhaL3uHrbWSNcV",
  "key1": "4pLt3qZpCBP5Urz6z5XayxHGRuwhJYVRefw7ZwaEANc98gp9jCEtJ7Wo6xUGUhftoszUF2dZa6nC8w34DHzx94V4",
  "key2": "iCnkb9jpoKFSmnjitQwunmSJnxkVBih2n1ZHuetd4KMY6pAM1Pohg3FDZA9R4JZ4TmGXqVw572BhxT3qABhkkY7",
  "key3": "341CtSN18HiQeJvsBPynXmzMTPDfHAB6bLB52zQSMbQnXQGqGMqNhNrKcQjX1WuJfLCUVsdcvjFor3nrdYw3pDP2",
  "key4": "2mEGNjN51XuTqqK8Gk2DKytXqECQv9rWj5Y2HpH8GhGqYJVeWe283UNjtyj5v1hVaRTKYvvuMq3AdsGa12MrSo9c",
  "key5": "2JVY7MmpTx9HSsJGgLyupS2jXxoti4h4PRh13EbM897fqY2GWaAWKDjfAGx8UfU3YNy6sugzzuZdromK37yCf2Fc",
  "key6": "482J74pvVyUYJjSjjVTDzFUu22vdtLYDmzuYQGQD8JAJVx9aB9GVtup7fwKqbFJWDAijQhA9GLxhRrVe48Q6M35W",
  "key7": "33SoV3qJbe9HDhY7B2GhFjao3qVzBVhERyU3wvp49JYbzwpK9BiSVUdnUhbFfZR4VNFfhGqSw75ey6MCZA4WMUQX",
  "key8": "3EQC9Hwq4mKJqBT3WFjPr846SVnqbRYNwQmNix7TkdRXse1BZjrphZptPpN4RsxWhDoy8ufiiykNAJm5Xxf1LeKj",
  "key9": "5LfUFfmGfUEZLjSaEG99oBj5Hc7uM7rWRtPc1PrnzMijugvSCJ7BKrSJMipLNbfLoDF3bgeB3wCx97WRiceNxGYg",
  "key10": "3J1jhpxCAro5Fn7C4UiFWFicUt4cMTKdKzsX6tbeEsuJiJ7cc1Gtub9gdd8n9858Gm9JA2iZHKTmv6Mmw6tbWyCk",
  "key11": "76QeZvgQ5qeHCr9U36MBef44zxviFZHsXRTsNMcPQHuhpANqx6WibNVhBKGVdUPLAwFmQoQUdgmFX95xdhp8k5Q",
  "key12": "3cm8Yec6RPJSCMGHg75WoNRbEGwtuQieV6Wv9bs3YM1iE8a6mGo6An27amT7TXYizHYsuLrqm4nVNbkQHj31JghL",
  "key13": "5tpdJvjCQ8yLRPPNf6od5Lvrg6eFVCWvyudNEkjdzCdTR3LScNgcHYmsMwapm4xEM8JmPZ9NfeuYJtBbhXGpdXa6",
  "key14": "mvBhyw5BaXWQb49SEZXmqEf11VP2poUJzYmDynCptPg4REUfGu83PpHQ2ucdqrvS6bQG87o1s4pShsGjwk82a8h",
  "key15": "22s2U6DAibTTM6X2uHhTg4eEr6fzcXJ2CeTVXBpgSyQPdGWhp137iQcYjsHpNXXqEJVLF1VJxCtVngJrxUXrwVrK",
  "key16": "47DCb16hx68cYwgWHiqHqGKaqMoobsAoE3q6ufeZLA4MZ947qCHFneG9nzZN4vU3LRkKM4HTPCwBknjzLjZywj8f",
  "key17": "fyq6uQeKUWxwRY2Ce3B5HNopNcyLXeuFdwE8FdruvFkBVxkr3ukVL2nHEGAAmfmexSb38m9QPXTvEVG52jfwLG3",
  "key18": "3rKXUTLzzNNaStcH8MxWzjAxCTYxZmy849aWQo7XbWF8s45M9s9NQcLj1jcwLYLzjSf1Txw56JrxYLtTp5TQL9TR",
  "key19": "5tPhMCNhgEymn1TY48ttUeEXEjCpWVztH5wWj8n7fqLDvx6YRVvT7JAfpXvQFGFj6DQreyu6k64JcEFDufj4xZDi",
  "key20": "67YzNUkCHuUpG1HrwYqdeE2PUXZZ7cmk2HZ6b8y7oJ1oX2A786t2adhhs5GSSrkLme7U6gaVeq4BbxgPLrrj2svi",
  "key21": "2NTBih5DUAoe6LZogfJCSFxWa3k4SJDhWaRU6aEo1JbqsNNmdz7Hw4529VSRm4gzLuAb5VaruPs37GqyGaeZN36j",
  "key22": "3goRUmgixYFAbiHkX9jBJJ1fM6bjzFTtfinyCmEuHsrvZavcS44sjD2Csw4EsMK2WR98Ne7rFxMuQ45ah3aGY9Mq",
  "key23": "2EngQjG8saK3hRwtLksDguD8PEJcRLQgwSUfJ1BdjMEGuNmkT2aTGBaqZ5xjqjAfNPAzWcxvUYL15W9VmarPtDpW",
  "key24": "5s6RM45RCZZvFAgXqcqYbxg65r4VhtvD3nRKG414XQn2fKxDtAvDRyKHvmXbzEnW9CjrUatwUPNMBxovDLVb3LbL",
  "key25": "34U4JbkvAxtfjAEkb5KZnJQHRKYpqwJ7DEtaFpZPZ1r2MC4oxjD8YwjPVyTXLxVfXTsmTEsLEqJ16gCbWR6vbD58",
  "key26": "2kuPmSzBDpSR2agWNTWWU9AnefPYcW1xWnsb5E6WvPd9AL8ymDWwooULpTtqvP3d4MNZo6msYoRm9TowGQSkPYbC",
  "key27": "31T6CqozBDsFhNzkc16k4ad2225E2Vu1yDPBHjVzm1W7ao3TSqet45cjDuvaqAdvpksDghFFSjrvZsGvgDbKmUfS"
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
