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
    "3W4q1hVGtG8kbKWb3oWL4PjTbySGsg4sWqa7d9UMuYYD1eEx4eZAXWvh4iDj5P2TZfwD7YM5bN4TtHx7uDcfLFUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YDibJyYAsKE6CaetdgZH8xf4cmzF6kU4Dqy6wwYgNgEfYsGn1mqWp7RoLw6HKwTsKG8YegKgQzc867mEsTAteD",
  "key1": "25mfvtRGy7PizwkGc2FQEjnYP67om1AZXDt546BM8PP9Sx69948uRFuyRJH9XxLAxJnmRKRo1wKwmKYMJVzHjfz8",
  "key2": "3ckuDsR5KFRLM3xvEw4msYMGf3y9QEXFFqS88iFsW3rv366MCTQwUegAUjMDphZwccZUuU291o3L1XeMGpyUv8cJ",
  "key3": "4ewXXsWNziRF7BFK4UtAPVnFMUNfxno2Mm6Z4n5Ekfg5MoAUvL3vaFWzdhtgW6K7ngqCxzThSy7naqZL6PekPXNA",
  "key4": "66yftBReJB9Q49JnB8ADV9e9ugSjUVP6hFC8Z8yyGM8jRX6mq4ey3eMsYk1bxFHohHTu4ddsP1Pb1GySwzYckia5",
  "key5": "r5shE6zYnfVzLskAJTj4GhYpttzJ7hWaFG52VWyPoFLswwukzcmzaruPRjg7arnRyPUun7XYwvuaNrp3cWijQ68",
  "key6": "4eB1nS8uTaxYQwDsasf88jz5tLm4eTg9WFVK5TCMfKbgozRws5M7qvGAKskzfX4vHfRwR1KL7auL5hTdXcCcJjrj",
  "key7": "2DUsgsQtULo5xiwvqYZwFWpL2ppBDY6AL66dGVbjcJoxBNxgSEkZRXeHwaNTzUVPzAAFhhRXygy87QnwxFCmiARo",
  "key8": "suVnrokDdT9wE65Y3YAXMSRmLK3AHxvJHgTPSCvwxoSFNKwmokzuGkup1EBHNALHMmBTpAcV7N9BugTqNS1Yac7",
  "key9": "5xYMghdpyU9DaTFbcx7QcVBh5YJYy1F2UsqcdCB1isbABL4Ndk233X1d1oFjnjF2bHaL9uKfTXtvWEec44dCgKZv",
  "key10": "5yAJzMLdnpcYn8EixAwr46KpyALWSKnirnSYUPVdZjs2yAs41Bw9sZ7q9JaVYcrq8hwZWBjDWB7WKWZ9zLEoEt1J",
  "key11": "uJkN6RrTTEoyZwwFSKEwhqrkuBcwwmNieEcLyeZatg5naTx3do9aLRr1hRMUum5erhtmS4pCxuHCATMuyJPkXaQ",
  "key12": "GQAvfW5UH4Jg6hAo2oAzfJGa23EXE62rjcsX1wSeHC6poaMhsoU19meRrATqYj6xRAuGummQhtvX5wvprsUY88T",
  "key13": "612Ru1x1PWxqY4Dtc22DpuLRFtDcyiaMyPMDCYw2czWq4mRpsURghZ2ccEHDsoTfqxNWAv6zQTf5zb8TM7ccnfPy",
  "key14": "3tBtXr53aSLeaWER4E2j7TC2vEZnojbpvgqLbGUfBM2bk9YFgn3UMFzfpNBybrMtFk8CEsonk1UnY1Dmou8H1Kip",
  "key15": "2bNZbGT8RSzHafENpGt6AuYydcfQrPJAnMwVyXLFWfkhMnaDFCv2tRs6fVroymBCPQWTR2VpQuzWuAAhDF5d4XCv",
  "key16": "4Q4ou7a5Bo4hzeGQDN38Y7tqReXiFKwJ6L4VnCRCpGtJLz9y3G7U3r5roiya6Z71LndmnTqBY72g6mdMLMWY8WRt",
  "key17": "423FrfTYPjGZFXdYMHhBjYSPC8qU1tKnpc2MMtsXP9kEsRSmpjQK1i6xbLae6mAvTJyjjx2w9oFVySRKg8GsQ8yn",
  "key18": "3mNd2GJ9c9ruwRzt1PeUaGLcDzGrZ6BNRx73eV7UC23bVYwWWzgAPtsyWYi2kCR4WseZTnXW6kZ5yEAf2oGVDg3X",
  "key19": "5HAjc7PCGFGC4TMUemUgeuB3dT1xrFvWU8FA6acEk9yLdLefWXt9Ti56yW7umR5V73iiJV7hkiNyYoMziXYHmA59",
  "key20": "2nJLfdVit2QvxFeM8A7qroGFigXUTzKGB4DPBVpBESH6UbSeoyVvMsHAhVKdbQNYWWHNPUnkFm7VBZiuunoEJMWi",
  "key21": "XSFFWLbdQjTa2tqpdLyXjjJ6a1jay1ArodeHTRoViaJLgxi4AiKoF2CxMeofXBMR5U6c564CVVAQSArFxeqvS8f",
  "key22": "G7DbLPdZ63itXgbB6emxsMoVfQhXnLyHHDAhM14rJQ4sv1s84uE9D1Zru8uAYX4baVUeyS2A9orgeX1kyT2iEis",
  "key23": "5E71Qb4GsTvT9iww7Dhy8y52VP2P7A18WvJy48Hq5gk8bapsLyEsy7fecBmgVsfuXoHKu5yiMcbtL86TpRT3e4Hm",
  "key24": "464MzvCJkuCkQMRAGsLtQ43TxKgr3FerKkiJ6xdaNd1X2brZK5FxnnYFhZVGsE7kWfKt1i22Sube3Xwo7T18kfyi",
  "key25": "2fzAovy8HXrEsn9oAfySwM6hHzPMFaUedTpoAXXsa7JS8fkzBDZa4NQHdWM2uohtfN4iwfnDo6LdQtfcJxf4wgBS",
  "key26": "3scWPXd9BtKw3sgzdzhz1iFUVSiEWnxXqNEFcxrTcC57usAkWrC3Qzn53RnrGTwU19MnTiH9Y891fauShVtDC6UN",
  "key27": "pEiyVeRwTaE9Y3DhHbpx4roACB4drc6XHG9XFaGJzvZ8PV3rzykXYMNG7Sq3zsJNL2bTXDzDuSh2TxJfQSnT453",
  "key28": "3FjuT7Y2JrrRzwLMMHPUqTP8f91TZXxsZNNwtn4GwNX6M2bHrjA8xqitn5Zt7rWEwzc1cCb1xPX1eFVfqQhAAmoo",
  "key29": "4HnTdXkcuXZxeq37hMjTvfw7zmaGRVhV1H6qJcZTffjo4aeqSe5c6sasWCzWvgk4rz7JuGhosDuWnJyQaiE1vepK"
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
