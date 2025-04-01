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
    "DNoudnYpvYWr3jgzj1VvLWAoVRVJPz9sBrGXZf7d8BKo8rFuy4hrHVvArV1cp5FA1Gb9ZoLR3tTcqFUqVuYxzfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bx8tLqgThu99XWnpMUDscXhHAv27pvV8ivpJcM2LkAJS3m5jsYKvpdKHxbawoUjS3fG27WjkQU63AiMxpVwSUnM",
  "key1": "3WjFd2S7xiKeSoTXd9MXB9LfWJ7eVDANKAMTGBu3E93LPv19YiTgjzBwNZ565K9kZ8eDQqtMCcP5nK8ryGQE64Zz",
  "key2": "4mmGtUopA9Y4ogtiznQXS21Q6PVYYm1gk9ECkUukcUhPQnyDMae2bA4aNNftPiz2MmpzzMsojA7punibLfKiWMkv",
  "key3": "fTweQ9h1fTbQrxUzdXv1DoZ4f9iXmxbxMTz7c6F9nYMtLieg2o3jLRY6P9whduYPjbZbXU99UKt1F8g6LgbFexN",
  "key4": "np5JJqK3zfUKgbm9DStK5jNdXvzrhENRUiwcv4ihxpsdDu4Jpnj9Jr7hfXcrKAiYofDt34rEy1wnz3ccXsAgQNW",
  "key5": "WYXy1heYWD3EKmJTHaFZkGPHNggbAwEFjmNmLYDsxVn9tFtxzTymzUuctqr4Rghk1y8ooZrtC49Mqskm3rPEHw2",
  "key6": "5kzA4Bc3h2EuqKF3xvZq4eMTaU3YZyha51YBULApYBgQeRLLHYwrSqv6tn3iSbiQGERZ9cp8TzgJQotR6P5qKGg1",
  "key7": "4Y4pBAg7u6irLqw5QKKWTq1EgcyfUdL1cB8NLNxsA35TqcnJg9DCmm6oFDR7HTtSoRXrssJqFHKoHYTH3tMSdy5s",
  "key8": "2tEHY5j4TEoCG4bEFmx7ZTNHWCSq94tqNYixwacxGSo1z1UP2WEUfCbWz3YM5TDmBHKqHwyn587bMiifJaJD73Yw",
  "key9": "s9k75qZZFBxJczA6k94cFV9NdzTKfqimc1S5aGHjd7chkaKHc94TyongzDuigoCKF7oV6adktqojL1kuEy9vo4A",
  "key10": "3tDyDJGkFLvi7LEbxf6hB2CLZbs6ZsVYq6X1BXGBa8b3g7a62bW12vbNnubJZuGDtf1wYe4nrgoo3zHMgWw5mPfQ",
  "key11": "5SSFqbVh2QX87t65C81Lj337XpcpopYdG9J23aQJxvcongMfukQV3ikyuEFpBVnBbdLSiDKAfLr1Bs1vze428wbg",
  "key12": "2N6WzpLkAGyTT2D4wg31H8zwVzypgGgKWNSZC8FRXMksV6gwK9JaJ6XngBYHMNHVezJNdL6J1CZEC6JuP4uikUpP",
  "key13": "pC1BAStE9W4VpiT95Fi3LBdQVZV1iWgUJo3axHnUYqBkJWHzhPZR3jDDnnGkegKMPBYuqwqp9bMoKBZvicaTGng",
  "key14": "4C4FjMBvaocfMDmL2YDwGcAHqSskujDvS5j931EJ1mqcxULPgKWFdMGBU5vQeS6rikL4ZFPTG3VxV5DsE1AfJDo2",
  "key15": "RmRsbDm9NwYbNPG6biFyVmE1PvhBFgYa1NXP3UHUjVB6z5hZfEJK4fMdnMXxhmDHxtEfhUEWH69JMVbFnV3GtoX",
  "key16": "2aPb4Ujq7f6cmWaQpaSKtkn4Zv8KopvRUEYuJP7Us1gQ96SA9bdZ4AkZSgwzBvfhxQ5W2wkCjEfcgcx99Fxc6tuN",
  "key17": "aiKzAtJhmxkeoRxTL7EyMNLeqw7tBNtHKTeaAgfYpNbXWKk6ZLjx6Lt9QbSYTr7r5yA6AnF3b6k37f8Xh7URVqi",
  "key18": "2Vy3q1TYBtQ3duNL5uactpYqbyT3qVP12jPeAkUh6pMG7gCFT4szwHGwvXCgd2LsmecHNaRSZAUXa6rrmJ3P7bLh",
  "key19": "63Sh9HvgEcTes1Bac1z39HwqF6JpAsmLwQSsSkLYzDyCmgaUEqA2FzafmgVWB24yv2viFXPKtn7xqLLFTGQeq6j6",
  "key20": "4xvSp62JaeDBVtWncFTww1pWGNDTcJfcuLLiZxGcMYgpjUFYME6nEnJkBts9ZiFf65urQjC9cegs3RDRBSRbzW6w",
  "key21": "4EdcUhKXtFRdRzekhGrYASmq4iaeo4YSEBaz2hexZnqQqEzcxXQ8WGVoE4Rr7mYPAPPkL4bqFYn6uMm958hTKpvt",
  "key22": "3xwqfB8w5QZeQX8wdexscfg4xyvWufMhGU56zTPLxKQU6NYjzB2W2PB5UHCf832TgtdzJgGxPd8VLZFLRum1nkF6",
  "key23": "1LuxRwLN3emGxDdz2Tyu3j2kE7JpfTLqTZuM1RukqKgXjixGbPB1V9WWhJyZZWcgAsmi1TJAyh6YkGNa3xYSHcW",
  "key24": "2PMB9NhpATfuo6GJWB99no5p2MTCfTAke1WGYCtKNGGSYrUwX9tu3hkRYz8dHJydU7sQbHS6j9arKzyoo6pDdNWF",
  "key25": "fWpNPJf2QY5NYgYVKwjBrC7sHoWY6zC86QSkiX7pNpnGkqLtJPftQUJZkj5zaHNPxhWc26AUR6M3YSiHnrJpJ74",
  "key26": "3oV1VMyvGDie1juT1CHYhcX6LsVTfM1P7nW6Zji2bg2b8NVFoaT37BP9WXfwcPv1ykUS7CaKu9jT3xdxjsZropU4",
  "key27": "g7jpiS9yoa2gPbUPBifTwZ77sT3hpBJHVpAGDswmAQLzdWTNsAvmD9ZZAfdU3hPLrFVE69C7S1d5Qae8JWeTmYF",
  "key28": "5n8xHtoASyo2hahzUtNt5En48DtNsyieBs4Mvvmc66yubJSw5hWCBMEV7p4JymDZbsWYdwnvwbXJ3RWHYXgg41qQ",
  "key29": "2pvfjwFst3798ypka4tNYC93g9jbC7uktmJPoB38m5bxp5zSKZa9saem2yaqGxFtTJZEUXkxAbknYW11XUA2eSrq",
  "key30": "3vqVLPArgao3PzUdVZJTEh2YPf3i6dXGieDpWRCcUUqN5amybh2rfANXQQYcWgFohfu2kkrDo238ue41gsqJXtrY",
  "key31": "2BK72FoAXLnr3FL3j3GQAVGgtH3oBMLdhA2tBHFt2bG1wDRpvcxy7ucViVvEULAgygwhxyv5WEZF999gFKrUxFbv",
  "key32": "2ap7zjYyYHqhfWTvwQVG9MgqoRSxmtBGHxxfZsKvDTqYDuHmFL5gPfQ9aeNwzk8zND8tS54oPQkw32ahZXP8D5V1",
  "key33": "5YUoYrQyVCGj9QKUuqxhfLRWyEanrsteXqvWiA33GBgW2v5ujXPcgMkcFM3832oYPTRJN9Hs9yNNgqjgmZBbfFHP",
  "key34": "4hpUVT6HbvgYQJ6rD2AdR6cyWhzPWcHvmw8cjJo8AVYJuzeqqdJ2CtQiC3oEF3dhBx2VodQHu2P6zzUka6BMmQPa",
  "key35": "RTfmVuHpoNCCZtPTJwQf2d4jb17pip3acpH9q7G9mqXC11G2ejzUTZS6U4sydT79qakaHXnB79nUfprkfgiATe2",
  "key36": "5pV5uiCdfczdLEgv5BEVvZrcvzGXozou6Z9CWuUsNj8yUneiRQDTCVdZuna3hPkQR3Lkzp8XUQvSd4i1bAiS2afn",
  "key37": "2CZCyBLkUbyRTyiTXBvMkcLftncsZPC8VGVvZys4SgLuHjBwR2FSrrGcfmW2rd2N58Svy6fLVyU82tVvMWwJciV9",
  "key38": "5K3ZZ84bVs3kkBdPs4Y1c5jAQGLiAGDcQzHuG7MtbPm7UYqApU9woWgFcNuasNigmKZ1JZRSSfAQVDhN1ZK5WeAi",
  "key39": "ebp2SZm2MgKRCRprY1TJ83k7bEMmMa18rBJJbH3rFYfrr7t5zg8ov9t8SgSWnCZvt46C7TXCrC5azzvgg31qvNn",
  "key40": "KSakibKGLRBQ95Dzqbjs5NkphgVRxujaPfv9vhHu8x7CjPMiPesP2zrnkkUdAiH3hMoKtySqTDppexFqNPDugiv",
  "key41": "3v9FV3bwCJzgERkdcSFqMoMffQGNPqjF2cEUYYKJ7hVCPi3raF5WoXTbbMVsLbzvvKNDJCjoej6tnwhjKft4tcLn",
  "key42": "xdWF5WkVN8AECAakWexwbZwUhV67s46hfc4NAQJmRLbTWGvUpMskXJeoYbeT5c6Bx4yCCsJBgZvD2dRbDJB6Z1t",
  "key43": "4zLJXjsquejTK9iKvZzxmRwxWdZYEhgYTua3gvvrLE3Enz7vB4h2dfanuZf7mYigkHhNgt8PAMhNg1jku9yAqgLF",
  "key44": "5aqQdVRd98WgqKNgLu7d8S2nm32An9Hd8oVrbKAQkN7K6g5NHvBZ87KKjnGTn8J3TAfV64DYQ42e6Wr8RSbnQeup",
  "key45": "HkVzF8V4EBaQMf2xtgFfshQaPZrquQZiMwWqxKxaRkcPMybnVtJYM5n3NiZqHzw3gCRtdcJE2AjxfEgz9WyjJni",
  "key46": "4DhQe63jqUs7LstJfAjShitcTpREXe9eEZEG5pzVW7D4CegnYXqqBeEyD5FxSBWKF5z3S4X5QtBr8Vi7ThJ22GPm",
  "key47": "3KcFR26HPzxQnpj8eq9TUAdH9XuJ4yrbQL7zxwpgPvRrmBPmExfFLHn8FWBCW4yp8pRSDvnUMQDfsmqh7zoatte"
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
