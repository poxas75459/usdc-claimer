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
    "56B9d39wy9NcPHQSajVWm3bS7ogmKbnXDkxbR4QTETvQ6PDVp1FMaSmyk1wBec8pzohVmWYT9kVhK1FQf1jRs89M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLkZrooAYt7ojmCYc3taRmpavy1iw5CfMYPgtQNG7ywLtcdeTd8Bi5XfZZxopHDmb4uvse1z1msGBo1DiyUjki9",
  "key1": "iCv1K6A1WS6byLLZDNF1XNa4NnWWw4Q7Lciaur5AYQ1f98KUo4tBnsKaGDQHKchbfZhnKWTnYyRWoSKxGR6kJ8u",
  "key2": "2rnooSDAxRMPEgeStLVYhuJ5yeo2wTtJ8fr9PzKyN73tsFTSTpwUPEVbJX1eaZ2RTcjypUJz97HPzAr6ZeSVy18J",
  "key3": "2cKwR2PMydvUQnrTdD8LgAKxw24ba86JNo8UqhBnDdfm8YwiurzWxyQst4D3ekixepRqLnQm4VaxbPL841RV6kdk",
  "key4": "3fLQEdmtM9Cf2UmHnYv2MLGwBuSyNeUi5bzCDWFt8Cmx1qeJNVZZUMPDtYLgmbMUehWMVnvuEVxgK8AuFKFzSSFq",
  "key5": "474am3AjP3y5esPKy4KnZtqNbpZkDGrjdGPTxndticMdKqXRbRePYWsREmi7PVvp1s4wWHVnCGxcpua9d6oSYhuB",
  "key6": "5hD5EJPu52D1VZoY7GWnFPmnmJ6V89xhYmDPo149GQX3zJHhe8dyaDZ1WQbSp8R33PPXHKiG1TPi4zkbCAq2y753",
  "key7": "3dmho4v2KZ4Hdcupt6pLdaXynhMgmuaZ5AhhrmUXCyQA79c3eSXJcKFS8NrW4wpdcqjrgfptDxdVnqEui5a7mPW",
  "key8": "5ad5YbT2q2ut4ZRAaDCpsDR6Hp2UKLeUAa9RF6q3B2yhC9rPQKDuywMeJjvdeehsKPTMVjuBb4TAqPDkQAryungf",
  "key9": "3H4BjRhQmn2SH3QSs7gY5rapGHyYguxLHdeWFC7Q3adWtLYkgJ2gkW7LYL4X8mbo5P9UurEaNkE7uVft4ej1GrGU",
  "key10": "4QwFU72sR5yY5k5xS6m6mFQaHHFumwmY4hfVDmj2nizy2z6gCZ4HJhKcEHmX9jHFMeCGqJh5Cw3s5vbRK1cZqEM9",
  "key11": "3M2ygvEg1yuEmcLtPbrPbAu8X5TvNJxPDLTgmQqgXe6sU94WTWoPHUtxdKvzZz5e4X8eShky8LcKSy4BZatZysp1",
  "key12": "9Tkdi9vKFN8wDKGTa7DPXjhaFRYNenAUttWZ6LdsdtxmfbiPckjm55A5F9Y3AW2cTaDAFa1cFNudGCNQgctBqTa",
  "key13": "5F7424C1PhvbLw97LCAbz4J9CMnikPMB47hP2tS6QLhKBWryTeikJZUAc4f8Krb5JMtwmkLYaXZKg2ZGH9TqHPJU",
  "key14": "26Dffp1nDcojKKoUzLJmukZpGJeLKqohWZC29X6pzp3kig6DhpQiEPFS7zaCYkUod7BefoFyB6ag67kVLZsMirhb",
  "key15": "2FmfNeYte53mFseLWgXP4uXwDskJY542R6Mux5HV3vESSWMM3sv27ShFc3tBTLUhTFHAnHpfjoXCjNUcRC2BGLH7",
  "key16": "5ckBkUj3sX3wYAUmyxXQn5sCHri4DviBf2BCy9bbnyp7YNnhrCdPvCkcZEz3ctf94QGtte9vMS1JiB47tx9FX4uY",
  "key17": "5v6m34LrtM6pEWu7DNSeLijZYH83AnnteMCndC54VShJ3bFLXYPdCxMLyZG9LZxmpYvG91oRZbongKSEUJK74Fjk",
  "key18": "2TKtMZ4dZvTC3iLQ3DtrwNyZUBqE8wPN5TZpqgkEH7pdN943rHcrw9WsyzL7vkSTJRvvhEhVk6QAhgCPgQiXdB2d",
  "key19": "5w7wu6wxmcEKze1RBeUQ7NStNYpvtX1vfZbWQrr2JgQTHGvjthgng3HYskgkoaXQy6TtRTJMrbZkdcvDLDHFhLdK",
  "key20": "21x81xkth6s1T5N7sRN49MnMhQAic5mzfvU3DVrCnKKi6tduH7t3rhZGDdkCsXktP6hPJU5LwozQ4NfJM27EoywD",
  "key21": "2JNEutgUzpkyBBhEq7HcdEEKo4iMvdUahCgHNY4LRkKJzYJPfxwt6H7VztJpC8sgnaq2paieeqn4jtcQvrkv63CH",
  "key22": "4RkD4nEL3u2wwzd9ikSuVfZ22PB6XaX8WK8GxCYc66uH922U7L2phXWZ8q7kDV472JT3TjVwsbjuNeRnNw5dqaKL",
  "key23": "3FoYpGWFkEY1QGQyKPRCzjFRjLCoxqTj7eYigD3Ka7UeXkdLAyZxkpNo1iLt7pLc3PugXBwvJw4AzBPikx98QLBj",
  "key24": "5jAejvfQcUk9H9gePzArYBLKShPPcRK6x5ACofzekKtxU9ECU9nbfMEzXCKQubKoNjaEwDLwvDgnJPwfB8RbsP3h",
  "key25": "4hRpQMSbcRfGTxkmHZ3WRtC26qddBWwcgGDWLMyqCrJPnTiiZsq7Y4Kp89asVNTiXFj2hMtfeDui5vVUyJUef4sL",
  "key26": "3Ahf3cNmjUj3p7u7VKZyFF47cinymHM2JwL4uTR6ase3D2BJU8C1WavQN8o3dTsUxxVw8kiUSzGDzYi3XCfL1wX7",
  "key27": "2qkahWdEp2KGWitSoMajDZkhz52G61LTK1LEYmBuqWer7zVNsK18PHja3qcsZnTUntPNDumEPhiNkukJFpftbyQr",
  "key28": "5HUmpxfvcxRGqZdo2AgUaPeRehY5fnRoLH3wrxsWKRWtYp1Tyms5aMfq8QUw8NEy5oYpYP8dyruTTMrvGPUUWKP4",
  "key29": "5b8XcbEfmxtyqrdXBQAkzfgCz3GJTaEqf9QcPp3xQH64fxyUXjASGBTWRLfgw5aucCmG8Z7QBvKXVivFVZ9x4aWk",
  "key30": "279wvuwFCAqcCbkNmefsNd47TpHQfkUsnjYhW8HGzNm3mgjMxv1eCSF4qWKeE7za7hgWWsqhB6mMMk3ehXqy1xwT",
  "key31": "5iCK6R92nQfdeuu79nQ5s7NX4Gcnzd2JB4p58tHFrmypTCzk1Dh2yzithye8TgXUwFvWGfAPLJeYdZZq9LpRscje",
  "key32": "2r1VNSYeBHvgdTKQ1eSFBCVRDDcpHueLVev3JP2bMW8Bg1HSYd71hypNiw9gxUMbg6tDjwPH6jtoyxWUbpQ1Tu16",
  "key33": "2DWr5txWpFyAFKtEoKPqk53UoRMEgYg13uXPmFJgx55iLqyrWMeMADviS79DPNn6ZwNTTKphgmAw3FyhASSaaGU7",
  "key34": "45jG63vLcijdSU5m2nronWKJ1CM9WtC7StfvabGNvoAN15dTPsY4G53JCQQmmUWUvjAhKbPDCEGtUEcqWqbABuLe",
  "key35": "5Xup5ktqeaMhzLZS4rXcwzP52VrQXTpwSHZfcDB6UoDfm7DgWyp5XAoaRxLB8BHHxLqYjLpqnZRB4gMyTQYtFFLZ",
  "key36": "Tx8ofMPvavvMxXk32Mi1Kq58bcCQ31RzVCKEESLBtX1Gm1ovM5eETXjbsxBcU2ciy6d2htySeRPVfZ7cDLZ67vJ",
  "key37": "58qrqFRAGS7vtbaHmaga8YcwvvPWiXCBeC2EQwKtEpn1kLpQCdwWVv58VdaCdbis8n2kWMYnDcFjxWXMHC3Dqjj8",
  "key38": "5BtTM3iEjaA13ZyAPjeKiMMpzJxNzB2maP3NyyKRFafSUm2rAizG2FVhypH3p3LSXuGDM2gxygoNZUhWgYUu8EYK",
  "key39": "5cCEywNDJGRpGxh8coXtuqhsji7gWbaWn5d3a9HXB5q6hVqwX4kiLF9XpTXVqzA971g3jgQP58jnehX19SfzAL41"
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
