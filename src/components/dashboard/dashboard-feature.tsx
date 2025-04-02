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
    "vDEUA2U6Az55Zdqfn6AtXPSt57fyJ1NTiBikJjof5MaEHb7s44NPyybL1B3DfTxXtrcD9Js8ALYNbjTRAyppPRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWVF536PU1DTNMafaPCLAs74GEn6LHecpCAYYsq1W2G73zoQKGtJMqA5egQQe1CbJYYHiHxxv8Bh5Ni7xRyokhn",
  "key1": "4zx986VqBB1Phwmxyj8ozPRZdEybjsPep8bZepnDWciiHGmEg12ExkGh7s4HZsScGAczGgjDpdTZxi89UUyGzhoJ",
  "key2": "5Bvp9fB262XY5MGiuJbE8XCZF6cVkZa1wPnHWdD3UEpm4KsrDYxtbNjCpeyxXMKpMBBZ4sZrmt9YGdRYrnNVJUnw",
  "key3": "5ZU7LgTEeW8zsC4wRdgdg8LtFuf79kZFVHMJeQjsnX8iH7dxTT92UyN4ewT1VbfPtdJHWmSnUUrjzbiSojFSbHSF",
  "key4": "CXXzDAAZ35Dz2Kg6c4tCe8JY9cqsbLNFgbWpffHTrHxqFEMVY9vuYuavqa6dKusHHXhPj8PyLhKmTrkLDGCzeWL",
  "key5": "63KU3Ear5yd6sKCvxGR8rQMSLieAii88HBWN9Qe661MbGA14xDR1s5PHiW9HGPPLZSs9e7GnrMCQaQuwGNAsfLpn",
  "key6": "UcT6zz1BkxBwRbjjZXYStPoH8w67f6GPsaBruPJSS3yoWKer8UhRh9CHRszrg1NDXGCuyEDbh7fg7XaYw4sgCvZ",
  "key7": "4b8QZXGxyLVC3Xq8EcgmMErbmtqFmsWBEDEnWxEGmuQCK52R3TF5j7iCHkd7FdqmaXKq5mAkbbuAmo38fkPK2iZT",
  "key8": "5ruJ5qeZTpUJUkSbBfomCdjgZbsBwSkCkV7S8zryt4SnfzSLQYjmNQ6sbRnM74ZyJ8j9wGJ7MWuD39hDPf7naqzZ",
  "key9": "6iQ2K5rxca7EdCDxCbVmDmULghrxqBnE77LQWX3uyaFR7QngTM14dZQrCTnPoJo9CcNhXMATrGTeSX4mqr3Mt8P",
  "key10": "3a7s9gwNE2QpGGwKYw9JkuJugLzPxHA8sBmqMADUaJYM28KRo4WCXoqfZsLSkxUPsSiaxSSenWdRd1Vy7byEVxFd",
  "key11": "4NdkhNqfvYPTXvfBwK8Qu5h7anLM3ykCXMrG7a7dsFvE8xasd24ohhoZ5RNbgCjiDqmmftxhneZCBqMhAe2XJTms",
  "key12": "2wRpJSC95p4G36BJzPmnC5rL9EeFJfv5pdFarbvifwiRwgEcpWvtXEPbV1oFbQc99NZAosY1zjfiyENhVu8fWXcd",
  "key13": "p4C9WN1G2FkCT2Pgc1wVHceEkZ9ubzqERVzVv2iapns82v6LWGGgzKF5DpRKtLbzAgGDuxTcxbmiQrEKDP4PnL6",
  "key14": "5ymhRE41z8NgW6CQJU1PwSwnnFdt6boX9vmz6bR87tyx4Cz89TYwXm1DS8RYG6d5Z2zkn6Q41eztAg2uboXJZF5w",
  "key15": "5CyKwoVtdgiasQLTnxx7n1rPbMV6aYuk6UeZjsM9RTbD3sXnuz5GSYdjEukNrDu48aimKxhzKjLUCRN64DXarMFi",
  "key16": "3cNcRBkGfcKqXKewyDXzhox3bJYrxCB6J5JwDevffhawCZgHSoyAT3gHj4UsJUcKfAvYdks7e5oUJp5BBqUhwHry",
  "key17": "SVQNyM7NM4zTNbiKMPMed2UeciXy4Krp5qVfZywSdCHfWWcutCLjvQcyNKwFnoSsdtRcqmSE5ptUg9RK5W3v3AZ",
  "key18": "Z6WHstwt7nmho8dwtBvXuDo2qYUUAUKzPVwa2ZzPE3s4MBWzJeCe37HUu5bQV8EgfHea8LSThYvzqu46FpxnB1k",
  "key19": "X2c6DSJHaiEGFA3qXFDsABJhNn4bh5EvBfu5YH5jRj8ATDZxT2UUExHnZPRawEVWWkSkr1RjQ76W1Ko1qWUCGTw",
  "key20": "3ED96cS1Aiz3trREPGdUcUTX3i7MMmHELsL1LzHjpzvEQFooo7qYEhDv97qBcft8NtnHZCgLDvtMWCsoXesf928E",
  "key21": "2dyQzyqCKip3auQ6pKcs9gSuXDiDyHmbKEFbyCKXLxTns74WFWNEXd2nE5dRpEMCR2LQuadyEJzELdQsf8gQ8Rf7",
  "key22": "4mi2AwRdimq1rTDxJGRBbc6n57dsTMwCKBhaaAv77LMWG8BwLwGxLm5xR2G4sc9wY4cMYhN3pCp25KSQLb1zbWZm",
  "key23": "54Drz6637BG8HRKMoHxQ5PQbKJrCj6N9qyNsh9q2AeWJq8qEM9K7uSs1vJfcNggWq66fVxUP5F2iTutWASx2Rd92",
  "key24": "wLQp1erF7Cct4SuzVLZ7yNCLWCRoemtiukka88US2cjqnQ2oRyFe3xRvLsuZymvmXzSZXMZmfbgrxuVXsXduZ4o",
  "key25": "Vw2vPoo2PqBbUiyX29e2dggPjmWTcwkjAPhixVRmJ2nJwazmriXm68UyX2xxx2pUWqSE3gozU4Qa5wWN2tZCgXC",
  "key26": "3WVNSxJTvXh7ZTqPuiYkNkEGs1YkCPEnkHMr7ANXEmBFStY2Wws5qnQn9s3BKUK3hTA9kDWsShn9huF9SkdumZeY",
  "key27": "27VfV9EkKr9mtA5xwCrjCmaWEz5Un8zLA1mqqpoxgJrHaQ56V3NtyM1UJpWXJ5FRMdsXdt6pFizfjV6g6c5s8Jkb",
  "key28": "3WZ2yAh2eBVGjCRwB3qnd94okNwU2Ve2D48dx1bJYooARDXmJTYEUDpb5UuSXMpqhKnuPrT2SRfaytECqu6jD2dA",
  "key29": "58Ai6WntCfYsPLHy9SEhwQpR5yq3ZxpVaqVremHf4ARmqsSLqFMgsT3y1FH2pDPkvJiXyXas7UzkzzmgMcDsS4x8",
  "key30": "4pm8mzmPbdn3QX28GvvnrbdmUT41WR5W7VwHPkfTxHx7N4QQSybfxB6kzRExeo4FmQ1VEuZArccCzjaRjd78ZHq",
  "key31": "3soVnoCRxWkHU9UqzHaB4Em5YqVh4Yi834vFF7vMXdyryj7KHfGbxGtqXyyu1cqooRM51eaqpekGsuMZaEzxcydb",
  "key32": "2NW4hf4F2FUGAVu34c73A4m28agcYCE6MYWy52FT5dKcDoEY3UxM5pCoCXWSSMkwMpykqombVRCq3jCFRKE1ZbY1",
  "key33": "317S9eMaQELibbfYtxtnkyAB5nqPZqg8Baw3iLAV3LKZk6Wh2wRERtpgtZctLUaqk9mkFaws84gyLxFUKX43DqYH",
  "key34": "3JyrAcsGuZ2ipmZDB9ijWa1PDTSaMcK6Jfe8qRHrDhZNE4iTpfx4qGJP31qxKuWMUaXakWJwnZCZ9bfdaALkH77J",
  "key35": "3ZnPHiARzy6ueaEuZFBqwmvidCq9S6bzr9U3AL6cbR9P4uumeUspX6QvjvQAfTp2tfDJUYA5BCBewCGHRehrN8Sb",
  "key36": "5bmVwHUnDz25sV5AnbiBkKqBDAe6nMutVayePo5U3dK8pMUgA8vuQeimbRi3M6vPK7S4RbvRCoLRNoGjcfcYJwoL",
  "key37": "HwbaUALLR8ASdbZig8mXqe659szFN6nE5FA5aFEGgk4uQJBULzqMFjCmJJeEzCEVH8wy8jF9uCEc3bdGphHk17z",
  "key38": "5uNqe8f2UpZ5T2t6YMPumwQY3d3Ek8XQoUEcT2BeMEYLjCpVxUqwFwmnH5K48dBtg2usePFS18qDfekDy7wMeowG",
  "key39": "tN37Yemw3r2ot3PE8uePiUyMB8MjHHMPioRZkxUBZsADWN7vqCfqEdFi4KRLnMLjwgT8EGhakMZoK8rQz2TWVFM",
  "key40": "4CKuNSdJdnFkbgRiwpmePq5hMfvb8wyvdr4MmhQVF4Jk9s8eRBHAQVH4La25gcQSnGpi38ywMrqd3nq26rZSG5Y1",
  "key41": "5cYdhrr7rZeikG79dsFAV4TZ3YHRr7Qzu6EkqDZTDyaPGkidVMZkDtiGBJY3bd5jTkudoSKTeJkqAu4K7cvQ1PNi",
  "key42": "3iZE6gK64uZoiLhc1y9F3FMMzpX7g5xQxkJtvpGZZsqfuhGq373bEEr4zX7mSp4ckqsRHrVp25vfNKbPqEgB1q7A",
  "key43": "54sWH23Cqwb7jYrb87MUnCkpxmZpgf9KjuZ2UcgAt9QqLYSxtddYSPNFgjspm88xhHzMC3DSGhAPAZd64TQftcQL"
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
