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
    "GQCvFB6VF3Q1sn6sP6RGTTk9pnFKAEor2Q9r1JpcnMusFjD52fKaJrEpAUbkWiHLBocsyiED4U3BCwezsdvNyqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ae9DdGW2qB5y7ew9o6r8DqqJ1jzHHSRL4o2iCE3NcXGUMnuFSbVo2FHcLeDcLzkRzTpYfuHHGYiBkB4JW8yd2Hs",
  "key1": "UGihEBbtvbDjDydSiHU5LhooJ6GaKHpQsn2DdcM9vwmszVmgtx8s9NpYv9EfgVjrM1ZsFhgLGPhoCpPwmngH5Cp",
  "key2": "JYSUZN7TmYMQnPMxAAXV8ZL3iDKJ1RxaB4jWCi4KvibzgJ8X9CoHTRoYtUTJXVEaqLBAmaBeSMQpvJzABww5rV5",
  "key3": "oGXAjRSrPBBhsaB4fNw5xaJQRTMhh2gU9vD73NJh2UPcnmtdyXgTQ96NQiwaWC1RmWth5bFFYc5ZuQLrWu58Ct3",
  "key4": "34XjkHGCM4S4TjsRxcLZ9UJnkJhyrR65cU1GepWPJqqYkh1fRpBcuqB36gSB9nbTQLQ5w1HBnLxm6hY9txgVo3b6",
  "key5": "2XiXxmVJeBUoqzDsLDjiWsD7AUtvE7Bbz85MHJqqmsQbRGk5tnqK8PsA4xuBnzQKmfos1bgSFq19tGXVYEBX22tk",
  "key6": "23pSF5Yj9yLUsBAkRr8VhWvnwCaPzjFUGwUMtVd8E3vpKx2kaDEoW8isF3fd6mGp2fGAMg9eh9HjdLa72FEgbNYy",
  "key7": "4oyaHJN21gKTt9izbG2cKwJSpfDjzTQAQZJTR4rRBg3rWkMsgDnKxuaVFcpMgkdia8aMq9RnkD71DKJdhWZeSKES",
  "key8": "5z9UL54A9m8AucfMZqtqSqKtYhyHZHfqHeXkrMJC1yZRdBCSwEJL7qVq2TgBPhzjcL3jMTiEjNDES66NKBtHmBC5",
  "key9": "3U5PzXdLZvL4QYVU7HbgS7zqHtg8KeuabThwcbCfzDhdAoucdsmm22WUB6PJTTQ6vtEeq5QBvcSekmc5vZ6r6aM2",
  "key10": "3HMuP4c68dJnSF7sg6hHbddjBXoFsHtwudTmepubEfEmbxDNRLCXZqBAjnXaSRyeDUXDnr3udsLw19D5wd4yqMRU",
  "key11": "tMNND8zyzPgHVZrquZ6Lsorc8CqC4TJfT7gvwa6i6ZGvHdAdAr95hR93qXB8SMn4Cr8xPmKmS48oF5wmBaXHQTH",
  "key12": "41Qb97XywTPhFkKXYMxF9ye2oG2SqxGnaXS4t4sjCUMcSzDYHdTo3nBVy5jXvgSzXMzHGibmXXPiAQUpcKBoh2Ly",
  "key13": "nfuDHasRRYLdEejnZJ9bG5DjxPve4kdqYFRsDRb77wq6KUzRVcS4XJ52V3o2Nht3bPkzjSnvs8CwEz3cQJ7rYva",
  "key14": "271PxcPkKX76nHGCN66GsvKLbSdT3PXdq7SgZG8XHvPAb7tN5y39sQ1oU2VrtCRg72MWKu2AJWkV8dfMVd5zfucz",
  "key15": "2H9DYDXcnL6Uxa6YZVRHHZqonnJVrV7Ec4XxwXARzWr8uk69rgYEdyk2aN77VyNZyTU389ktp8BDnjzDf2dnmfCs",
  "key16": "57ZhN4YEXtW2ZWtQpY1z5XikBFwMCeoVQ2chUBsYUV6Nyqp4fY7y1Ndxp9e3CbUP8AjQarrfRJnrdmUPjEfj8tq8",
  "key17": "iTLNpaebFsTCYKhhJK9rVMHnrexpvcXqeAnJQ3EhY2igM2S81qNyyGKwTzuaM9EtSjupivyLV2y4PC799NvrxeK",
  "key18": "3g4q2Cf7J7MojpT1bB7M53W8fDL4k9nM8Lg7scYUkDbRuERhpxde3hxnhyJM49qDnqM6YYqgsKrfHXjitZFsMKmC",
  "key19": "i3R8qrcdhihuKG8cbdg4z9cmHXY9MsWdgvNmS23avHnjetjCsf1Vuzyz3rVBeuoCrew6BZnQzVAspKUvdD9TEZz",
  "key20": "5vaawUYTNmqAARxJMyb2o7AVCTawtfTXuE6sABxUr3jVYhqdsE6MMAnkbKc2i4GqHatATrK897LzxVe5CMEzNqza",
  "key21": "3nnEDcNnT3e3PxhPmUwZ2gVW5QPYX27nMDuUYTstFZpLCyNDuJFMggpoeUmmLZzhyBom3DjsQt3JNQsKQCLHYH3x",
  "key22": "2qDNSN6yVS5jEY6wfE31KpW8gsYkSuJeZzst339kPkxqog1f6BWsN66X2x6Ds7CkB9oaHnx3jupxj1TQGFy7CnXP",
  "key23": "3NHoRvB9yUtkEYBdw587aT2pdrKSgrbjGKRqzErbuwBYj3c6YbikVUCDFxpRJdDLTkk5SS1KW66nAaWCB6pwgiEc",
  "key24": "5F51TJvpGzbrhYQ4nubD5E1bPFfzrkvWxprTc7HEg8AULSCJwKRuxvtpWk9V4SpFVChbYPzEC4qSzsZqR3zc9K4D",
  "key25": "54XT4pehEiHmykASAWPHBP6ZXN787kigkY1qWfEZsoEKGG3zodQoxYCJjUk57sQQ864E642ypvvuGhJcqBrBkKQd",
  "key26": "NGeXjsVvzWyAhavPgXaUYizYSCwr99bX7ThQVqhGj7JeHNfvLfVxr5Hzt962F4uVEtihiAJwUBvtWScRBmWEnLv",
  "key27": "2SdmzBh92wZBVvq6eQGUkqVPdws15cpVs9wBPxB54dSQGESf4VRCPagAev1ucngsMVt9JskSGHTw3kfuajYHvx7Q",
  "key28": "4obTrJgGJHg5z8uwjthEa8paHeHz8UMF1bfTVxPynWSr8jopXpyDj4QY4fb1hgVEuyB96agPbXgkGX1tcN6q9EE2",
  "key29": "53RAWJdJpgHXB6TSV54uATZQ8ZKHYPmbCX8sCfd1kmMioaua7yBpMU7eBesjmmXspS7RyMEvfLmVQk6SZEHC2eb4"
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
