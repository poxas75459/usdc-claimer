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
    "4em3CTSRGkZVBGVuYYHL8uQmSpG48cS71ef2pCh5ufZopKdWfhMN131uiHx4iGUDN9J8kibyNJMMkXVTjK5pM9b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WdH2e2xVrQUGxBRpc4dtW7TyRmkF927522xfeYhXaqxpWUZeBYoqsFVdyRtsTZDmyjG5TqETZHYdq2GCGVUdDjr",
  "key1": "4e7BcZwzM9VRbaBDHuQGEp8VzsxHFZMJsBagAJrfH8sUPzQWYkBUJwqHW89Gw2c8D4ivs35HiDSXtUMREJaj1cFo",
  "key2": "2XwSWXommRniWKeE6Xsth49LVeUvCRxsXkfapbBrRSAPFxqFHw8gWjJhnc97TjBgUCm9uxsSJkPLakdVhdRmbFPe",
  "key3": "4Zof68bwAJ3NXwZZJABWZ8hnCQ5zg5SHJcFzMCMavwVu6p3guTEB1dvzwN7QazXvWM3ZzEWKfQTLgGogEuVXfEhs",
  "key4": "4dBkLGLFhGEoQmiijQMUNysVQS3buQbZ9ggNvmk7APdgFzn9cwXcmgxURfvYMYucSvL517uS6zBby8wEJqXz47GR",
  "key5": "3oN4hLGYPF5AzhrXwNu15ZEXYDKybtN36zTTcEyefB4HtJVBdRHkfhJCBEUqEdYVVowbyJEVfW9oKZcqLgHTtZgu",
  "key6": "ACmjEVz41XxJh6d1533AnPVZWrKtpJVYirTjzQpRbenxd8n9dUUorVjPt8yYNsYbhUhcnALe97AhtXUgkNnYNAw",
  "key7": "5s26F72Qebouvs6o5ARcXhpzPg7Ypk2JAK8EokGLcPnQuFQ4ojLpdqmq5B1aQ7bo94UjuusHMiXELVkk6DiVvzSK",
  "key8": "3FWFcau8DrnasQjMWoeC6w52uRe9hHsTToRuvs9e4twFiMewKBuu7DZaySrCX4jHRXZk7JgcqE3Zi3Rca9iFXBjv",
  "key9": "35jyYuwVB4r27yiNwcJ2ZjXYAvRuFDicH9zhUBuVyGTfKypDNaiUXSyY9tHNCFBoJqFJCqmRJMZ6yp8hkDEiaoa1",
  "key10": "3azQyvefAmEXHTJLTM9j2PsdeVfPRe7GFibwizQwSVaq2ajPEHBoqoDQUwa4uMVRp45sypktDmV3MUyqMeX2ZxK4",
  "key11": "3w8oHga26UTjFQpvy8frmwenGJeZeRA2QpZsU4582tAQxa2B2th2hVSfG9XXicVNVbNyC2XvC6hHxQzuXG8Uizcf",
  "key12": "3F6eZCH7Yp2qKNAE2ipxt9XUpadcY2A89BNdRcnKfUctsSiCtfr275e5xktMzQ5UTttdfsDxvyDN3XhDccvFqCop",
  "key13": "44j3Uk6PNEnV3vu7UEyFDST8Cc5GegX5QstfgSZEQGpo3aiEMzMFRMSRsUrEFJfYwv1myh3FWKhmDK9viU84hPhB",
  "key14": "2sUXPKHSN8t5zBKfGtBkiHqmUJRT6bFhtwmjnQ7dByLSgh5m8csArmFykDhD6wbBTmjBqXjiJPYWMN1rdgWxpmZA",
  "key15": "64jEEeCspQxda7J97PAiEygcyK8njri1eP9s6dJuReSiUCcoCqcze1j5f1TvAEqk8gK7R3jkDYsTfRtVgUt1pzDz",
  "key16": "MxcHZZ2WzZPX461hh559Xoafd98bPC2BK32VDzjuYj99PbTDfA3K7jCQpPcE5Tn9PFUUwnH44BefU1i67Jd2Ago",
  "key17": "3zCzPAfK1r2tqYZTn7YfGLSM4bcZr7zHaBCFrDM5vToKvKnzZTQnbfFTxFrZNNrRfEHyRALjdsmjrMzjBDNtHZRN",
  "key18": "5BuRdGqfDhJo1GeFUEwCV1n96gQLSBGiWtFShTaiNDei4Q8H8GByZB1hcSb6Lq8V1EAusb2DbuvuZK3hV3KWLjPc",
  "key19": "5gGXuruvhfyrDT6iwsCmzKPcsqCBrF9EVYnpimTsYBggBQtperQiB5W1VZb2FAPq1Deg5QnqW5K1PxszF58c5P1U",
  "key20": "4n41L4xXFKfWP6ET5m6bbdGsaEATDQfHfouUATiFfZYDuUvfJEps3sktZKxiA721jNGAxhWyCBvTgyvXvBrrXdiR",
  "key21": "53QeydB7XCmFWNq42jCDTWEw9vazpT1uaajfBPbtL8bAapiCnjJYFHL7yrymt9o3fLEPjka5i3bAWETHvCyCtYbQ",
  "key22": "42s6B7nb6Y8Q3Z8tSqToJmu75ysAenzA9kLG7ceFK2UhiuDwgyxmghw5iEMN2WKUSdUB3GbkXU5DcQyzhWMH5PYH",
  "key23": "2WEh3Bv8XxZVjNV4XZfZshaRCf9MqbnWXJDFetGuNYZtH7XB6qaBjFcMp9UA9QFaQvds5WB5M8RUVmEVvoYTpsa3",
  "key24": "4XNgBVyX5jG6ksB6pxwtsxvifCUw5FbbJ78q2xd41q5qd9PF7YseUW2RYaSB6hfRpZfoUnN4C8BVt2KXPn32YkwP",
  "key25": "4iGZxGzqRmh8jHLETkdL1AE11m4X5Bx6jK79MatHisn4nqCzSLxqArg8eZ4pCn7WU1iryZmdVMmRf44P78tAK1Ey",
  "key26": "5qNcURLNXYgqDxDBDcEyYVP7Mdu8uUhffuND41N8RHZjiXAZdyYgLK74AcajBnVsMYvQysGQUb6zixin3c5j3F3h",
  "key27": "5BsrVvKKKP4oQ7G6Behjz2h8Tq5rvGd76hKhNYBMtSb7ZCyScUjHm1NKND5HT1wfQw7wcHYmorTop6vHQSCFWSbZ",
  "key28": "4LEjoR2hqHZovxweMdJ1r5ywvB2wTNPQP3hd5Y2FLJFMyAHrw3CSFRmEkSEkfDZ3BFUCornzfuNd4J4tk7hD5eui",
  "key29": "5qHgD6Ki76Xg3b41oCoyPb722E3af2uN1tcZWzKfiyRZZFrrBMzFpfZiUhtSS2DnF9VLbaYxdyY49hrPPJB1xfpr",
  "key30": "3eeXcYnC1BjxzeQQ77HiSk8WwzZTJJ7L7ZUrUoT2d278RgaUWKSTb6M1gjVJCXCnToYQ8Z1puQCFhP6kJ8XdokeS",
  "key31": "37yzV66XXa4bawcMtLLSvHWPQEAdCzqfSbEmABRW3Hmm3YZEMzLra78LqV1dqnVHenmSneoZobPWDcHdGfeniBtH",
  "key32": "4VbMD4LUNGYtFQEYD2EwgMmwXPjRDrkibKWBrHApM8JyqJgd8b5PmjrajD8ucBQxFBx7W4jP4zynGwf8HF6arud1",
  "key33": "4zWTJFGFK8bCSp78cGWAYUCdqMhD3beFS43oqspTK1YBRfqg9654tmwxREGHswFyGXDiin37CtAcP6NUTYpVmxkJ",
  "key34": "pUQfUwR1CgA3joQx8iQu5Z8fiDmeRhQqk1ZDm4LtMVPARdrSTq4Y9HJGZaN2zBLxGm5P2jvFpTDJfkyKUNRDSZ4",
  "key35": "3gKvsu41G4b9Je2WjGfkHwvjhDqbroRZkKB62PSBk8jv4twxWv3LbyioLrgsJZbbG1bWFc1PYxCT7jFJGqdm5voN",
  "key36": "5swjj18Z58TEMf3pfo6UuN9SPxJbpcdzMNXWHPLPM2VVoTvGUKRaBcVQNKXLHjgmGhwpfzFyW125abQjDVWJxW14",
  "key37": "3E3GXSN9j75suP9qpP2NGwuSKibaCTJDAYtH3S6oLAeoXKXecqYFffNcZnnuaWVRBZP9QRhPLpQwh5Fi96AziTpt",
  "key38": "3XJDe9efQdrTRKoMBbV9xbhj4UH25bVCYydQZc9EvUDcxBJiifTFRRSPpEPwfUeAdagtheRNW1ipfc9fTpbYSF5u",
  "key39": "ZmitZBW5knv9grfXEEqUiWWAij69uh4eu6F4KMqmd1tvZgPWwmo2ssEu2VjZSGQF9PJtrUnT7zPmFxrHS1cAfpr",
  "key40": "WWXDkKREoFhRSeMGZqEogiFWWXynFwTCzaAZS7MV1G2V3c7WRYDo5MnV3HHuqoAt6ptd52XKfJDkRZTwUpqNPRM",
  "key41": "2fY5EVGXBsWV4TGS7i1amTumrbxAd9Fh6kP4tdiCYqJaWqrhLcBzpp4C9w1FAEtAe2qBtekHsmCj6NJruqJfUiBS",
  "key42": "4jYFuRQg76nR6hnnLu4tk2VFqWh16b3vDbLMisZKGGe4ytHLjy55qZAtHMQafkj2uW4mfSTbrrYXWrAiyo3L7gnh",
  "key43": "35Dp27iK7gfugucSYFqZLTTghsoEGxoraierQLEqo7usHLbLxH5kzYoEnrSwdgQQpmtw87WAMgiEt6xdVFJ7v3J4",
  "key44": "CH9hQVdJ4Ap1qQTuJUJPwwuTZKNCYtAvpwFPugPH4YrtZ98Hf8T84SDmaYaZALPafVWCwuyvrU9FFzhVXn2CbyP",
  "key45": "ibGTQVSFEDynmyURotmQrV6mwVbytagHVqV543de8jLsQ2oypobqBbynhgEiVRX5BuZZqjbyTCQjhK4KNbhhtik"
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
