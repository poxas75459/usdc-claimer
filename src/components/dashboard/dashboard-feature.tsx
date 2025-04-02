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
    "52PHoDeNjsQhbmnf6zUbqPaVHP2uJDTBR63bYtR3ojNepcXMvQJ3SejG76qftun7nsJYXA6qEzRvGF1wZGM668Yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owWhXZTt113MnARNbxNnVcxvPCLbN6YeLXoEZPLM53JYsbZY9xYVrsKGvCLvSS8yE6JTdQtGziwiyMnqcfwQ8Fk",
  "key1": "5KP1v2dqBJoiu2qSMrN9Lhn9iEQcrVQhiHoiziXf2WzoWpup7UuAs7gkbrmNhHb5E8e5e3kLC4eNcyWVrXJUrxqR",
  "key2": "5jKaLHr6mGG8v6tdHhJ82qfRBHWzAT1LbDcw1dymtCXaruhExXkSkahs6sxjfLqnBXPdZNFRivFEZ68u4i5up4Er",
  "key3": "4exU3m39DukRTzRLHFjB3v2PeCEfoZm1q3tmTtHXGhDLR3GTqTnNvc7ehg91bhCjaSs6MRxdND86K4TET8jgF6W4",
  "key4": "3ZZzsRVupxj1ydu1kETPkjQaMnyAPnY87bVbhgU2v2ckbpikzh2LuTVStWbC4ZzksMxPf2CYaT6wPHLMT29B49Gy",
  "key5": "2TtUwMB4JdPYraXoreXXtATePcxtiVH8MM344ZDXkN31FrPYB15dTu5VjBEvQQACV2NcCuWENv8qsd7WgsJX556B",
  "key6": "3KF5WbuNbTk6b1hznkKZAA3o5kfLgU53StJQXXJKVvXsMastD49sWsVbdJMdN9TNi2J1VYghWAHkMVmRUQRPhzob",
  "key7": "5YuAWi7JPTeVFoe91T5H8jATbHM5woQEPTh81ivPp3EVqVRs4BN1RXPTAQhXXiFkNLiBhnLEo8Chz8mhEayKwQPZ",
  "key8": "5YNGBLS3rwqeECRa4zCEgQNYDt3rHebFjHaTBWxNDTperRK66NbEgkKNhpUq8e9CC8so4WJ1NDVyRtotEJwDXSqz",
  "key9": "yZoLxQmXjpKayXKUMEHuqsNGkmRGem84rUsZk8oHvMXmK8QW4MgdSHCJV4uQ8ikjmA9a3P8ScGNDNbYNqFqg4ya",
  "key10": "4SDD6Q3Ff34KHP1eMLJtVSHvSKtPRxogvsCpqZ3HL88dts7bfe3McWA4K8zL3buY8z3m8DRsmP2G2fxdGeZ7hyc1",
  "key11": "2u9fNz6YXy27DKN5z9ckVXNYTzb9JMkEN6g9hCXqcnxz1anrb7qVro8pePTrmiMHKKXLJFy6GwaunV8tfgqcP9wL",
  "key12": "5RpVYUzQuecG2edWDpQwooGm23ABedrJBT3cjBKTCtNGWBGZ673oVwh6UjF2NBbGFTVS9uVSTVK1wz5SZpPDNQAX",
  "key13": "4prNfTrkJ1fXNvFexbcrTy1B5p5P38yWJ6BaJ23FEVC1F4McTWLaPnFoMxVxK2iCe9oskEQpdmU7JGc914xwurSt",
  "key14": "2izQ2YHkiDNxVg5YenUVWNXLaFjL8MpHzR9L8WB21ab38kykYKvegSYou2G8w1okz9wyTwTRoMq2YiuTwmaaPA5q",
  "key15": "3ey2ADzhFznaJxyE9H15qWV6wHEVJjPDQTN8dY1wLCg6vGtZXVDFJfMRDuNFKJU4hk6J9rFdhJ7SpCRN56Wq5Yhd",
  "key16": "23RASxodPKMynQiD6HVTsHewu2pqnBmbEz5RZQRLxwkqxPRynRsmS52fa5QY3smziYMTuNjsFXgoEvTKHBG1kSpX",
  "key17": "Z5Zf2GWD524gL8FYSB2T9kDSWYpaECzPT3rvrVGSnD83xc5XSEtkDmWMCBSph3YY6iCsiLc4R89EykzpB9TvghF",
  "key18": "yjYHXBUHRCpJvsKq4Gc4fnVpDKcbKe71FjusG6FKyEgCpDbDMo3HCheW1dJGCcMZNe9YFk8KkncKZsoR1yJMjnr",
  "key19": "4orppC1xUqoLLVmW3CW2dQrnc8eeJ3QZarYDZ9ra2pwsTi5AziqDgXmfWrUvLY5hntDg2Am1oR7q9fE4aftmmvwX",
  "key20": "4brN3KnVxXo4jfCaTMDNLN8qupPZW8tw8rk83FCqZ8Z2xpBixHGbHqBZfxXF1KFWsPZ6AUpCkWjj5qZ65CsA9s4h",
  "key21": "2ZWxdcRbPMznbpnTDZhuD1Kaf1UjVKBwiLy8u6QxSRst4d7K6nJPLZnPFeXk915Qo7967Evw4PZHir9E3NotP4my",
  "key22": "4meURpFYTpP1baYk1pfx2YuRK9XSuUCqYuP19ntSBsAEqmL8q7ZRbt7Wx48TMsPPf1MpLLzfFrAJvf7mgGAoFPvo",
  "key23": "3eTw9mbWSJBtwq84apXi622xtzgdf4oXM4xbyrnVCrmXgGpNcWVaJJshWsMjAa3jpvjpaCv3DEQeq9Rjv7cajXi9",
  "key24": "2N5chsFasUAv8t73FZcTzPqFeneatSDdavNo8JyzVZhyuSiMq7PdjzT41h9uLsVaqcd6X8CEQWJ9oWDcw7PoGssW",
  "key25": "5nzXkoXo7eQAj5XFRV352dMiXpAy1qP4pGXxYUSP77enFKkKTHZZ2jZM6fkkGMeoUAmwKdxwM78cqG2bHLBy3soV",
  "key26": "4AJHpP5ggaoX8bHcFzRBarzZqveTMp6omRKKcVd2x5EvSCwRDRhYJZpCZtKRWM8ZqF8pbErvhAeoru4CN6Jzfekk",
  "key27": "5WKZXKj6NsXkyERbkVKaCERXQJDCTi8Ez4sgmAHbJdzshPKcoL4HsSHwnfpZTdENYQbuUqQsFiaZCkd98hbEfcrt",
  "key28": "2PTF8CJX63HvzWWBqBueiv9mDVaQbbYmygkHEhAGD8mJLfryASz7XeB6iLrPnGWPxdurnXVqZ37UMgZiq28i2bnJ",
  "key29": "hq3hB92TLjYjXgfZx8bzHgsj4C4Y83d47rGtrtEVXVdpprAHkUMKmUjsAb8am2qtUC1TJNM7M63ttVDhaMV3w1S",
  "key30": "5Fqq2HSgid8MH1mTQAYdmSSNqgSSTfRetDp5HL95mjPDC2r4w24a8UDLZdV93P19ece9qahWgWR5PT7Ejg4EUCsh",
  "key31": "53NiDQtpZk5bg7LrC6KfDSMTYX8etWrrV11MFFgNhME1wWkc2ebmR7g2pGAhGo7JRhV2ayUHNXJPGAL5VhLgsvaT",
  "key32": "3fD6sA48xvXdb38KqzNwKnd4vjcMg3QwbEk4E3SSnhixhwvER7kXH74amz5w5qVUMDPuyUxSNEipZwRtqrazPSei",
  "key33": "K4aRMH3sYBeAj8b7pyZqTXKarABEG946JyrX7nWumVU5NW3tEYbbGGrtuJk6yTcH23baNf5BcSKY1SE6sAa2ve1",
  "key34": "miNMp5PdQTyg1DH7XGwtKPLw2SeYsy9PnQ54DhD6HfJZCyU3uFKCfGjaXP3NVQYzrd7p575RG81ySkNhWAqApb9",
  "key35": "4nenZ1bXTxsuXTnwEu7EX4X5QtrYiAcpmm5xBKYLMJVX8M4DCUuamEG5VsVjVBMxu5epfureSAFbXvA5Ae7AhzUQ",
  "key36": "3sDbpHvPc6LP5p9fdykqPJboD4rSEAZuR44nnV6BkHDLfwHtJpdJbm8BrDEiDSd1F5cY7bV46ojLwXrAPBxhJeNR",
  "key37": "3hMvvQsANnay4q6Ua5tWazgU9RtFXBq2UCc62kWWh7E3XAy14NmCoUsZ2gdFThj6VynBR4DGjQHf6TZchrzkGxZy",
  "key38": "4A3geocdRgHbtyLokvtMjhGK1YJH7aAyoBVH1mXbX38hzUqA92vpBYYb9Wnw2mv6tmdfx3vLQYurYSUKBihaYN5p",
  "key39": "2wQnTs8PYdFnyFjQKMshy9xUZXoinRAhQn8bQ6hdKD7z694EmZykaRXEsDvQq1xKH2Bx5PMHWyYkVVh32MR2iY6T"
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
