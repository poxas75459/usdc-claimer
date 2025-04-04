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
    "5frvdg8E1rAx3psUjWkVzU7CTJnzmD5fyWqtrC25yuRBSLiTaAjiXwfPsD1petFMNxmbnt9PV7MLZhpMAvem35He"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBfqJMHTdn2xttCwVVw6e7KeEY6uc9cXmGWg28WTsBKkLREoWUdjwvbVnDdwUWnifnMWVLaUqLTVuScshiZqfyR",
  "key1": "stj4MYQ2T5yeayKW94rxpH2rG1rHfXzBx2wdupDYDikU15sZVUVapVtomHWDyn64MHPUc7WswqvEzJxTwU2CtUd",
  "key2": "2TMiTmVSi2UBxUF6T8tRSkZsFrXehU8bGXG8u7Q9jn3q4cGcRMhAsSNdepdRrkVQHgrjghbr7tGGS1VeiCpJ3MTW",
  "key3": "5xp1BaCRi6ppMha8QxjWyBgsJqFyyGi1NKC6TUvHChF8YyR2u7sU1QxkB4TMyB4Yf58gsoD5bWur3GecbBRsdnYQ",
  "key4": "4qFkBNm9YqoA6nY5EBfN2UxXFxkUtCb8MfYSXHNwRYZqWpPqKCV875kq727hvmSMxvNV7XC8uxrTTfqxQiXivxAq",
  "key5": "47mEcpKMc1ZfT8TaesUEFSc2vvEFfZmfua1zLegLtKcKukngSuVcDAEiv3qtYXbMj6vXJaEdGBHXsfXDaptxgMGG",
  "key6": "4C525Ms8xSixC6Rs88LR58p7ZALCWruZGYnJ4uL7Skef9a3m8PtUCpi9w3c12B59eN9YEnGZZ7Lm92efoKZ7iJVB",
  "key7": "2cVQJhJ6c75bUVu13Y7uufExJksbvapkdv9dmYPBMGicDqLwr3EYRX1ALx1fVnw6uycDJiG7Hpat1Fkt11FLEjam",
  "key8": "i669wxKo1A318ojuNtu3LJRyHW2AXaj2jPszKZ6BKfvvU97EtSTrxkXL2d4UQvRC9W828NpBz7cup18e9h9mhrn",
  "key9": "5fiRb94f5FDyEipZ3K151i67ufbmFRg7AYFtNbNwa7jRhj5W8eGr3XcMdHqD8g9BxkdMubkULNRiYUUkwt6qCb3W",
  "key10": "2cVTS2yCpt9RX3J3aFauxq2eGTm9M5Pda6jFRLY8evaQ8Yg5NWWqcevKtCGQTc5wEwxJYpXwVSt41EvT9W9fNX7b",
  "key11": "PZBQkRbEN8s1pxTBqBBwnhxfjasEHMLQwa2u7N3xMocYQnhkGzvj6hwCfvcHUm7F71TdZyXPRMHR1v9T31NMkit",
  "key12": "2qieRmDUgnMz7DcYHcAoenDM9oQ5tavBnbqebWERK7z9hStNa8VmDTNPM3t7fb3aA41MEFr6iZCPsNXuVs22e8Tx",
  "key13": "5judpmgsWTBHVLB1AgZC3T1YHG9FQ7EALyaqhaLEX5RZFyrDamMcA1u8Pe4JtstvZQ7m4V74SLEJH1HDhkEb4qU",
  "key14": "4MqEapDPBa3fAFCToetiWRUkg5T23ekbf3JYjBAwNDUkEvN1aKyihqYTWXkuozNyXM9RqwE87HAwp3qDQJsw1arC",
  "key15": "5DW2HFdpkTGhgpVeSnvzpSKGBZf6EMjuz5p96RT6YXhLkydmW5Zm58nYC5SdLEapVzYAwugLmKuGmgK3quA2T5hj",
  "key16": "63HTUb5ekHfW1JWDzqkRUvjs6hEek6nSSpWZBa3Aa38naH9byN3kM37PXkfDqchEJBS6FnJKLMWKG1CwH7PUq6oo",
  "key17": "3WaCeQXpTHS6Z6TiuDMaskonA9N4KYgwigCfasbRXqdFhCVymy7LULCDTzaprRpJbc7e5gNNKnN5ECaknNVsHZR8",
  "key18": "61bN1bMZumf2QCnvsRNoSVtbGUBvPiijeHoqVU92P5AmWc5CKdzGYa73T8NJVvEzJzzesuN1jjRXpvjoVGAyF3FZ",
  "key19": "hMCtdU2P7G3MvhdrTg6ChXXXbC6i7kokyizrzKRYggjKdDFTCbidA5VTDtXVhYJ8huonhzVKUPuS75pi814Ro2Q",
  "key20": "58tftGPwWzf3KxhcPxGxwcMozyvLDoAjwNbJ4woQEgk4qZdvPFuAeKVanKaw6zg7F36puEKun16TT1aHybyi3AAr",
  "key21": "5eaTs2xfeGbrV2Xri3hU1zKxmFCxmfnqq5g9tUKC4Crx9WZjMsgBvnKEMaRySd2cpVx1bQ5YSnXvQ72nU2cW1oB4",
  "key22": "344hzjvY6XKo4Z3VsRusmyq1pcH8AThrkqzLNHgrPdKaaHcK5JguGvRi8vYgZiir74kdvBYL5tQKqj7rxmE6EFQG",
  "key23": "6FPwCnPBsLEVmCjQKoNfRQEuDSZYzrrmkS6aGQjQQ1kt4ZfK5aBUCkkX2c2w3VhfDwCcxnAkiH3Nys7wZnSCVZ8",
  "key24": "4x2KmVdSFLgyrhr5VYM1rqRYEkF8QxkxCbXQx1XReVXHUf4dx2i7AVDJM8rHRcJ6hzAqi5NT7wAQvYZ6mU3EBuY",
  "key25": "SahWQ1Z7qcetdZXBorVfedVb2JWtfSaiBWTaK36NLrQ5jbDum7TDXE49cEuw4Y5ddPsRDGQGpFqpufoxvZmQfdh",
  "key26": "3TaKXq3ebAAQZtdcWFz49FNQ7hT6DoHVGnRDPjJmBUp1t2go3zchrQNoVnSW34s4Vpfx6bGwg4hLPfApRFYqjJs",
  "key27": "oahR2DzZNcgUTEKQBoMXHJ7VVmZzi5tMZuwmqnSGDgWbFH5N5wNjzw52KYsBHXqNuxQAEeHeM3hEZ4gWaSX49F7",
  "key28": "CcMpzsNm4ya2L9jgT2FgdDpDx69zJGDayRsepPhGVxfq4b1NRjxwP4Ta9819GmKkGi7v8Bysk53ea7wg2jZ8cu2",
  "key29": "Jymr4GK6mYGpYBWCEpA8yemBYc2MjFb7rS7vnsqm6NpJM6GVWpC6NkwxU3oYaHpdhVA34zNpmnEv5GcY6VuHZV4",
  "key30": "5WMVb1xkLuxRyDSyrqR6XLe3vfJxwZ5vNNzhz1a14ELvL42yYU7s4Z1xMGhf9RvrjX935737fWiotH8dUsbSRGPy",
  "key31": "5YXC4BeTQcrPscmxX9x9snbbLZczRy3FeiTJZ2ifLp7j5jUroPWxVeBbVogpSHqheTAtvMQUNV719hdt6Ynb8SPo",
  "key32": "4rWwtQSkuFEyzV68MWb6aMq5aKSVEnGVvzN893MoK2x2N4pMzLgpnoN8JjyKxhSo6XbNHWM7V89DiLFZxrBfStU8",
  "key33": "uGmCsH9EegCS76GvTJHWs2Qi7dYCSyWJRjhgQHdDnFk14PBmmzsiyFbxnnFjo1K2JEjLBm3MJe1MQikgGGaqwmx",
  "key34": "2tTos8a2xYpWCohWxC6TaVJZACrEYdbykp1pW1sf9MdBAHeo8ZsoSDqCqAkLNASyGERid6Wg4LmcU4UW8tUERUEV",
  "key35": "4oFVPBrCebwERaG94enV4W5prBzJbrfdhM33HsiG1svhvp8EdzdsHcKHR34K8MUs6GkvAkv4V63ivn8Kb8q423Q3",
  "key36": "3swX8kKq8D9AAdMRVYVcjBRmpjHMwwWqp6m1Jmv9jusSJz33pMXeRq916ZWT7PLhs3HA921YLKpeAbpMxodMmyyW",
  "key37": "2tpSCswiCMQUZE1qfGbouYvsLkedo6bymwd3FLrfopkTK4uMJqKcC4oZJYifGKTD7yhBHqnF49czntiFAR4quNDE",
  "key38": "S6Z68BUjEaw8L4yfyKjZyZ3XwibDF4M6fafL3msr3aZg8ajfsKPhhF2cevJLnXgEbMF4F7xj7b19fgBDBuAb6Yw",
  "key39": "3LvqYVbdxRqhVDZHZzcmwV43F3JDP7uuJEGQcGhsfTaGqmXaKg8Nz8ESyu1TasrKz5tZuB5qxg1qf8x1Xkur7T2E",
  "key40": "4Zm65WTcyKtxapgjd5K4F3fDLaS9UCG7Jm1fP7cMPMuqUogY2QU6jGK8FjdW5EAwpffk8ZLbAU7Du1GkGgAjCbi7",
  "key41": "3EDCt3XGBKjskJeZbdeRQJztG52V9mDUmd4dgSCLc74UfLNRcjbN7y3Bz9xFDXnuRQGrPMfJepXFq7TjeDUSG5hQ",
  "key42": "uCYbPbWuGBVXWq9uH7x9cxbCfuzgSz5VL38yFAKN5LXS5v1ct4FLiWzEVEnvGXn1eew7Vs9pwZYg4qBSy1ui7jY",
  "key43": "Sk9RZXXFuUmhDD52W3S8TsDMwrAZf8ZFouwZRyYvwgrYC5mTHW6ytunfQWAxJReNXQigov6oSAqWKMsNfWPeUZ4",
  "key44": "YUTHcns1p42wU2y1MgVNxJHr3Wg4eeMidWTh4AzTQvKfkiS8sG5FSN2uibJkcrSxNjb2D6jxLdxWF2JQN9y3RfJ",
  "key45": "jPJTfqPcXJVVQzUy38GoWmpSG2hUt5kVL2QBxGwZs73CfNkkUwDBDbNyPzkNe4E6WASn9pA8L3kiWwK5Jq9VuJW",
  "key46": "5MQGUbdWXe8tCGfkbaVBcjydqygfzUEeTDgXxfGxZWRbgXtc4ErE9MFeJ9jJH7D74WEAuc2kSCv3JjzjzWo7qtug"
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
