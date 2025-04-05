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
    "5DWE8g8Y1P3g5WcBWrgHWhGcA4BtBrzxrv6HCT5o9K1YD8kgiQeDm5GLJemubUf7WXj7JdePtK7nTTgnTK2W2bGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFegFynR9BG3yWq4AAr2px9opc2HoBwEoWXbw8ko8pL91mfTfa9TRcV11SZF3kq8WxaEitbXnsqRtPjPmYx7s4c",
  "key1": "3tg3j9PpT9gRyrZTH6a4fPvaphqCE1Ub26u3RMQzymJ4izikV3TnZa3PobAzNaXxe2TxspVtsAALMpzV9FoNrrdb",
  "key2": "UaCsaqqU8Rt6rpBqLkYWXkAmyTx8RB4FD4NXwRM2Hht4Y8nU2UBnBejB85J6VyfjktmP9KBAQMeAC57kSYt2PKq",
  "key3": "5yUrZ45iYw1oDAhaW9Gbj2P7qY1ydPRChyrun2vzdxjMUUqhP7KChk67XBoZx2fPeedmYYqL27ujFmVthJ8dv5ZC",
  "key4": "25nayjRN4GHpq7S9BTpLtbfwF69ZCoTnVs4utAekaMn5JMhhfUHdJsEFjoLtk6AwtbDvPouTXkT2gbD3hhJbWAnw",
  "key5": "bd9MtF4LWYT3jDqM2CjPiY9r5PYGRbREoFjMEtDQf8b65KFtikNq7xbLxPmWC3oadh8Vjy7zxnPEkGjcJwHwz5G",
  "key6": "24v5JczrGB4gzzUA6WJYMyvTXXbpH9mN1ARStmSFErq1o6aZfAiatVdoQzgHKyU6Mdd1YRXSHfzaUo7Y4vZnEY89",
  "key7": "26jUceY5zv5tVW6XKrocfUVRzg3xN2YnNuez4gPa6rAPN2TVqsfV9o8oyZkRdu7auroUzgWmzxu4pXoubzXn65mg",
  "key8": "2N6JAefzJyksn4cfF6ZEzVBJJSUKmTvmcXt94Sygm6s4sB8Rk1a5MquYH3BSY2EEGxjXiuiQgxvBWB4jFGEbmvmj",
  "key9": "tjNn3ApBF9gfW5No7LNdKicJpLFscrgGbxRWc9TBbN1qPLXJ99JjrLLzYAfALggFhDxP6ZbuL7onbSF2YRsSZBr",
  "key10": "42LXVERZzocnNpLnv7ex7mFjhMA1btjUTmNumidVwdpXGtQPhiZj3GVXKtxHMCn6Pu1VTUWfb7SFYGi7RwcHPsnX",
  "key11": "3dCC2wCxFAuYSHszmVGkwWtaoEo5ffYxYTwPM7ptppxHwPSQ25V5KM5qTFqorS8CUAozPqscPeEUpTp18S1SN6aS",
  "key12": "ECT2LJRrdjEWSYmDjcnyxSW7jFv52fsxUqPjWPwzDiGyCRWEvQ7VSK2sfcFTFeeEHN9MnDfNu3Zx3wSbR6gpKXE",
  "key13": "4BCMFvhJdEkXzpsmZ32KdQBTfgEv3sjd2HuUTvwPvu1nhfDhitY4U6bisnXW4pbgxQHzY2xrhbD7NC8YFTK6o3y9",
  "key14": "2osbN2vQd45mxB6denFVajVxpBtkUKEHCnKLY7xxsLYCPXDRCuGjavd6j2kskq13PJcoJ6sn3pHmih9djPvJUT9b",
  "key15": "3MNs5ptdxkmvmCDbtriiKmods4wgYTVNrpcdGauQWaACh5upeokreR97BnbiVUXAZcxBKpnddwwcEc8cosSJ9NuA",
  "key16": "4QKydrDSUSDSQkjSkn8fFGZw8KJiTRCgG7GqfMbws83jdDUZuv3FMEFzsVYuzNz9QwohSQHVxuFJeJgmZZevjxBj",
  "key17": "2niERPvp1zLQfWkNuNYdtN4Pq1yi6C3nzvPRGx8AejbMkWjnqtGVi3XHjnBmr9m6TjuT8G7cXWzSCCc5MuFW7Avh",
  "key18": "3CUbWsNEfUPWT7widY5dvDnP1nRTLKf3DBLFqiVMYbwkcgYtZaPW8NE3AXV5e7yHJrw1nHRGK4iPzDmyf945MjBe",
  "key19": "5GxwN5cPQ1KqpSYdVQ23NAb3w1TS9rHQh1swPrQei22k2JibWFkcPC7Ujh6p1Lwc8MKAgkVUaZUzBwjaxBNAApSZ",
  "key20": "hzGFwxgDkaDdnYDB4cUCsKxP4kEH5m45cR6GZ3qHPuZzAuGDE4f3aiL5CrcPTuATamSw6h37vnuftEgcop2VSL4",
  "key21": "3nKN418Cp4nXLMjyGGNL2TB7p2BtSGUdDdFawJKyif9WL4TYP3uou9rfsgAsaskAmPkuYWfCTepru59qBDZpMCnV",
  "key22": "21gTnpUMaUijymtyjE9ZeDckUdtJRYSp29PhzGGAfoWpXuejoQuurHvvY62z4gH7dCJEpGGCyWtyaac4NK6zu3XX",
  "key23": "4R84W3XExqNS87JUQRurm74Kxi1qb4e8XFTieRfhAXVey8F3JFCvJo8vMdZg6KusdBJjaQabE7f4WWmF2erTbaTp",
  "key24": "31dyzy3Ck8t8QPtPwYUHRXaXxvTNpB4nKXKUuyxFn6dz5wWSeshZSX8xxa7DqrsY7pFTwWspAPGZBg9avjtWuhNN",
  "key25": "2UCfAhFLhCj45Dr1AkRbwRuVuymaiBhjKWV9NX8qnXAwN553RzAjbwQ5jmz656yFMNxCVFcqfku3dPwZ6jxXZohA",
  "key26": "8S5fvLJ4xwvgjFKdBqsp4pH7m9aw6xnDrYMPZFefQsiXmUjUpFkLSpq5ptzR7kMkVTtDKdHc638hoeqxygCCZ8f",
  "key27": "fXBKzySYzrYA29wY9kPXHRHKQczeURmcLCSXyjKQyM4r6w21NPmnoTkryPFspGq72cYz38WQ5WiPGe7pnUT3pso",
  "key28": "5f2YZqKDGtvoSL2TnMj1hfqSAfPMavKbSHTyx65f7UHzrQsB5J58ErfaVFkVwEpPHhoCe6iRQFu2E8Hp5Rw9AbgH",
  "key29": "5X8hsJCKAt3DxxwLEXDKFHy27sqFLjsiymbGJfMpjohepBpg2RwAQrQssH19Pj9pQDZmfESrp6NbkQjwmCs6j3MN",
  "key30": "5wit4Tnokg2LifsMVKsmTvE9cq4pK3iS3iqNygVJdyq5XAWHfnWFJW5fGHHQTGG2Kq8oqPyV9Zx1o2pFxaJfPXwi",
  "key31": "4N3oPndtMWxb7Ekgeh8vgpVdE5HWsXgByQBFYu6srtuyS8C4xo5VHS6REHntMkzGZc7MCAkrccQoEYjs2beJaSbs",
  "key32": "5gpWeo66oXjQnJ5DrsQ1BUXx3Mdy9Kq4S5bT6FKsyfa6cbcJsYyxcsnvUT1jzRsL1N7iLjdYSLrCkbQCvQhNcioo",
  "key33": "2d8KrnjAgT8iuqwF893q5reraN5xApF3eMcBuwCxAXX2JPzrb65cWCGqWTA6H13umfDoaxhJk9aZJR9as8oaaTLA",
  "key34": "2EnLj6RUpYBjAkK5Xe3wJhRXjuXMxp4EwWtc127VpQz2ZnkZQuMMkrsbYickT3wCNLMSKd5VhKJqQE8XvT9DWpY6",
  "key35": "54XJaCt9D6YDAA7wYnNBYRPKvkWEXysJewEsfDUsrDG3iENLBAFuQ9rZbTwFL9Gu79wU1mgvMpkSeX2sfXNDEhe7",
  "key36": "mAPV3Lm7Q9GfdDm6kGqMGnNs5tk4WXzB2e6JEEmQaWMtxWWnHeenr1JopzG8kxs1NR2Ts2sBbKoJcoimGXg3ewu",
  "key37": "4V3iaY6P7TQy17xPea9QPxmM6z6cJrhZn4STmxwuCSAXT2AApbkrPnSdth2143VssgCgdqkBwH1MjbwLsNedU6V4",
  "key38": "2a89J8rqmCJpU31Krqz6cQ396Sxc61uUm5tDKaG54rGpJSkG886t44dMSbGW4BMUGMqNw7ibnWdWzHXhWXZAzN1r",
  "key39": "53yaTErXjwZ9cuxP2UQvDDFKh9JeDRXRM1Z9fciU4wbPS4b7uYNv8H5DAjn1Qxxkvz9MmhPyq9CFP5XFHoosKY87",
  "key40": "46q968vGh5xGBJf3x6h8e21YCRznhSFJRPEGN7JQqsfFYpgQh8jEsvecMxMY9RBKtdpWxcCmUBzjhgHmZjkghkkc",
  "key41": "53SaJvM9DRAcR5KwoEgN8HqYWQm4aVWP6J4ED36xvn8PatL4z2NkpAZ4RBKeQuQ3appPnnNn5zyQaBXsiQaAxtYN"
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
