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
    "3CLay2dntEb2t3UT35Us43yhFCbjuaNmhMMQaeXPwPAoUpCCzY7QfjKk8C6PQcVQeLxFV7WrzvQCJuRXsA95dTnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46i9AkvM7WBtmysF9JJwVAGXMTFfKxy8Aya2J9P6iHZi2otPB2KeDxHtGoGAzj6YgLzWUMfGm7d1FqgDhUYSwum7",
  "key1": "5qRw7Nkuu86GxWqj6AFNXxKfUNAVLjPLgQXLkTBpPwd9LY8Z5kybqFqgyLHQd8bL8j2ACCiek4bdV7wB4PEc7yc6",
  "key2": "WZw2VrVEiDRqbMAkvPneZ6aYbDTPe9HavamRyr3x8LCnG2CZRWbD1Ed4tE8Yr8mZrueDKYVNSHvNv5BgmTtGnHm",
  "key3": "Tb1PKwueBnkebpDPzK3z5C6GvAB9ThVJWzgvHDMMpXiqNvmTbCqUhxELGzR196AjofRx3GgFsn3MebEhX1MaDTo",
  "key4": "6J4J4MBQY86G82YG95b7hZx3DvVkPiKYgKt9XSJtJBxbT2UNDC78Pa1uXwBBTMmTzuuCNhZWTZFbNNsJ8mXjv67",
  "key5": "2ccZS1RrrCrZ9sPp18Rvw2XpqGnmRiZFpmwNSS6D4zw4VHgvyDKZw5xSMMPsfPSv6PCxn8XgMQtdW8hfxhPSSgLy",
  "key6": "2BDCB3evSbrGj3QWoQZNn2LpwUfnE98oDtggZkCZSwacv75BmJ5TSb5c3npAHrQiKMv1hymr4fxS7eq5ihAoYkga",
  "key7": "2wTsKU3w2Yh11tsVZajD3X8Gh28ZMG3FZyc3c1g5Am12K9G12ZFR4fkq9yRmLLpxjBoxCB9FUdGJ2wJm23PDNK2A",
  "key8": "5unqkE3ToEBQ5ZDakLUEKoN2e11h9AjRgq9NkGLkBWkyKpBu7tkKGxeBgg3S5CAXhwcVQUo1QPa2YtuoTJCL9wBr",
  "key9": "2rDd3VMLStDQq1TrRdTRjteGZWpNKJeeyb1DPbWTCCvFEzxp7ve7SGPWvbMh6JHU4ZCyKFWLPRspSYenRUqNqZNa",
  "key10": "34pdXjV2Nk2CLigfRokdzyV16HK6yGdXjeYdwXnMiG6L9dTuAgBRmwWddf5AMa8fytVktwZB9bkjTyrwzLEK25ZX",
  "key11": "5v6iEr8U14rhqEA7ZVY9xGpso72mG7nrh2WJQysCZ1GiRUXtEmi9W2qqaMpHLfy1f49AxBEWH99qHuBSMuApryWQ",
  "key12": "2yC23vJhzDqxg2x52cKSWBw4f1oKuvfzVCsPvY2BJxUzr4qwHXCm3vtzyin65rtipeD9VwZb8enq5QH6DUE5qFUL",
  "key13": "5ifhW3Q6wr829RD4ShBZfsBPYe1tUCH38DowzKWCA97UUQvETFca4wUeVcigonr4f9B7VPWyBpVaiX5WJBbTvm7y",
  "key14": "4jrMzwgnFp1WXfjmPZrc1Ls1wWbxkZ91PqT8kiW6hrqv6HyjUerxSRbRQsXEaXgDSNYfMLYqg8WM5dSaUtnFjpDn",
  "key15": "5CASS81bYS2VbVCQYC4q2ApoYLDmZuGW7f1VGngJmBHQbutAfoDzM4mrfVuWXskNAN19YfgzdijnTjEo9Ktj2ryf",
  "key16": "ZbgFxAxRRnFVTPrkNePqGPX79jQoPeW3w39sZ38shEw8fMGxt1m5kZudy1pCiFyaNFxBzh6onDbNxj4nfmmrHXh",
  "key17": "2ZmHdLpJgXHvY7X9YfH6RBrrpEZdkSmdnkcJ4Ffw4oLbkuYngp4cBrAZ1ADFmobMWnbkLt7LHXHAaosKWGcrkrjX",
  "key18": "5AhiwLybYYo4D4YAqtXkcsBuBVL6Ny6CZEx37B5TFnV2etgTz8XXaWP92gAdqvU2yrrwWdinSP6Auu2AeJzusK5o",
  "key19": "4tH8gsiLXFxibcxquthEoQ8KqrGQJZ37aJ8zyrCWR1SLMMv6pu2mGw1VYFUeMTwD25hW7DaprX5nZrTLrCYF8YsF",
  "key20": "2U7xdf4h3NzWkGDTV1DrYkcrJznJH2gFzPNATgpj5sGa2nfzw3cY2LiMg7DDS6aiSiLLUnnEnChbqarPe1M2QvTn",
  "key21": "22XQQpFzEoFkXMoMMr3UVK5A2CznBtgURJquYET3P6jTUUXPToLL229DhYZ7LriRm5r7s2wcfH7LSYwM4vQjBL4g",
  "key22": "2H2kgAnNZtyQRzQkGUsXa5bj8s5f7KWzuDUDgpuDDcpeEu8sjbi6Vn9fYzTr4jCi7RLAeUWKhKXeCao3DuEoNrfa",
  "key23": "2rSWVZsj7nDxjQyRYsh9BCuWaQFrve2cevzxPq16iR9b3LPcEeJ1L3pQs3ofLjKmbJLhPgnS1eydfMWAHDZHMD4W",
  "key24": "2AW4XNXpWs7sL9wcxtnY4eAkgUvnREEvJj7UF4nzot7dZxLx26mJzqN7SDRwTJjF6vTRu75WniN3JWNxeEcKhmUo",
  "key25": "3ppDunSvEckDbpuxJDdAtWcEfoR24XGCyvKVPD1crMCz1K8xpu4zYi1f8HfU7sQqqV8YzPPUrKsSJYNyNc4zegYM",
  "key26": "5xEZrUrWjZMwYv4F7njprj3sLR7Fjq5Rijqgd2qqoJ7vMUBHTVJEFSpWAo4y8jAQJQ67UpQy444k59iRezN4fDAY",
  "key27": "35iWV8BvEcN7m7Sb7gMh2BagBXgpwa4HnJK7UwE158LSQgJqi3exCD4wSudvXiZ8X8TPsMQMrVnVbd89GUMwLLyE",
  "key28": "4HbSYk4MMJCV6YjxvNaXgdtEyEUCLCF6dU9oqsnbAqpfSra1EviXwvRD2VQepoEFLiT4NLGdBDKuEb2TA71r3Mpv",
  "key29": "29hQpHShscJkiSjLDaXdJo1xNY3UQHv5BvLcGSeYeohg7YfhHxZUQQBF5smTV1BjCPEjLonh98MzBMr9s3xXwcXT",
  "key30": "5Age99ifuDg1LYdYTvjj2A2jvTuZu2HHWX9GsxTnS25X3P3H8nf6an9CScUaNP2kGWthiVLjETJVB4ZrAh9dkBiR",
  "key31": "vg1rFfXTM7uhUf4C6LT56JiPgcRt7MDQFYe4dTi9PuVNPJyXzeg7sMqHzLps8Qg3pc71RAmcSmoUc2coLFXx39y",
  "key32": "2TaezRkM6tgJvjQ9WQdjKDa3TAKP9s2pZi4iDLBc5ZS5PdEWJaqJJkW6LsP6xmdYkzjUNiFiyyHkchwhqbMCLB8a",
  "key33": "5ijLi7773FAFUkQzE6c5SFV9A8uSDLfQ9GYB5BTLo4BWRY1jzfPGYnq2xqwYgG5WzcjLM7Dg63uanfZdTEaWBLTu",
  "key34": "yGSZMv4TfuE6zmSh7KHrDLCrKX9UDzwP5jJ4h3rTbJT4nbK3gWd1ztAq4dxmwqPE6h3o7ZdBHPTL7NYymdemR6E",
  "key35": "4yFw24SRBxXwgjkgeqcykpLdbmGYjeVcWfEKw2jZ76suuC1rhXopHm7PBgrv9GaZH93AAQdpPcojZAbFQPfgKTb2",
  "key36": "3rpFHGAgSKDmH3R1yDSvXT7LKTgwuawq8J6FiDxidkNM1sgp9fEwV7odk2RzRo4Lt9kv7rzLgamLGjd8t3qtHFu5",
  "key37": "5CRs6sAuVEDU7ZSfWUQ9Ywr8hg626cWVKQxGUKQZyhV6cCH7yYaxFEqYNjpPvewK2pqGMqAfMbXQU6hwHvZe6fme",
  "key38": "Ac4JpBtJD8GSDaprhQAKJhBBrSK41ykjFZG4He2i5C59iWrkbtHeDdyaMgfGweeCcXExeCzoxZBwK4Hv5TEqfnB",
  "key39": "54A4Xgfevn19ctVk7azzic8uzmt6DKSC1GsZhVbL7oc4N8AWpSFEqozDyJUSpySgfEvC9Y4mjMtD4x8ZCutmkEwx",
  "key40": "5xPTqUA53eQF9LwX4YLfTrdu1KX1HM1KSY7wYP3PDbJ4zpz3uWpgfcuxMs86h4YHJbwjVrJJHjNH6qnP1EKYaMCQ",
  "key41": "7ospH6aUgFeuuX7x1XzzTix3jWJAKPUKGrCxdBM8k4Nr24pTdSKRXTyqk8EWRbFriH6pzjjfeyNc3sqgSDuV2RZ",
  "key42": "418ytG2SKYPdCKvkxTFmngmWzBnaCf7BcTLGf6JQPA4x3gPpt1wREkpFXxeriPX5QFrLZecoTbF4AT2kwBrPrZMb",
  "key43": "2BCw2yRpXoR63VmuAimpZZBy3kMBzg5vjvKdv7GtxcG3qL2EJeZ5NztLLVhrJAt3PsQEuTNLWuA5MrGMDyWSJD6g",
  "key44": "2e6qCweM7i2Rkz3qmjwyV4aDybKQESGN6b56b7NojWF75g3mbraaQq67XXJ5sGEBkZndEEP2oitVpBPRBjHHgCNY",
  "key45": "5nVhHnDyNQ6Hw5yFaW5sQECGH8v9XdxTq2PSR2DPRtvY4nWmb5fBHBJqEKP9xdGSDfQck2epx1UFucMpYQissnd5",
  "key46": "59tyEWwGfCp7PuoWFGsdAMw586ohLhUv4Y5zR9GHRGSKygZYCvPoLVgzk7iKxMMe1xVhhxfVVWjminiH2pzzQxrc"
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
