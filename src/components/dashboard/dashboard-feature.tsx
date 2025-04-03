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
    "62txESBfgTWvWk8Z9FuP7TRMRABcZvXZfNojfyw53n79VufSaUtTSt391hATrRny71zYZS2oJrrVVS97QAQtHh91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548Hw68bqwmmEXQqbRPq4G7kHmQLb2cv1Wc3Bvrk6HkpLYN13YeeNceudYRtc3CY3r3LMvGUhK4o9AyrV6ciVLWu",
  "key1": "3HEvqk8pq9K1tL7DFLVRY8NtbiMNCzvDRp7ipg8NG51RuRvqGK1cN94AKtQEDTZkFBd92ifZnsFXymzAv6ec42GM",
  "key2": "2eRqcCcNdWQLRS6o4A3uJfmk4UWDYbjnAMv4FHZ51Xxidtu8w9N69MBZF7bAUq972CsQyhrq8N8s9FV7VfJfykiq",
  "key3": "5gnu5ixBBsMQqs4RAuK8qS5sw6GE2dJFcH3hN4PD3a2mssWZcigduEzywR4QeUMKF5fPFuxxSUsgac8tJq2wUyx2",
  "key4": "4TqeqJusAUG5i7yeBoasfvjrFz2GxdyPujz35Tdwa68XeQEf8e3rHUqL3smHa3UhJSeR9s525Ka3ZBu22pSMj7PH",
  "key5": "bxb9UsF5ShZqVrZiHzxG6wyis1gEYEmw7XbkFyJVGdTNzbXGBFebacczSJd27mGLJiAJX5UzcP1ELCR5Naw2wMS",
  "key6": "23bEsjkVxg9HQgVVxMFK41kZecyh6oNGwBmQWDoBAtWcoXqbeSVhfnw8XMnc4sR9G47M9WBrKvbUtRnBtMsk1X8z",
  "key7": "3GxpYA8VZ3Y7wqjhmpQmKE1N7wsVHKrYw7R29MXzhUbtHSoMNSA3ZH3gPrLPXSwkKTeWbzdZKdfvA7cSLC94HTJZ",
  "key8": "zNgKPRcwVqZMEeyGhTKrvziD9GQL4WqcbXgcbKSGKbQyMjmDL6k3MBA1WLAbAnPugMEjp7YH3FXs3eVck12LnjT",
  "key9": "5Wc1TWCK5fzX8VUKkQStwB34PAXiUy4UEnQRoJvdw4gHTGNYPyo1cXo7i5vFT6gj13wjPeupDoEionvhqcHMVxEV",
  "key10": "4MyZZL2eT2KasHVJJbT3zYMiByZ1EnDeaqZqAgPqUktRZzVUcSModA3bLDVwNwLqeyNXnHvc3xQTutMa9RVxSBaY",
  "key11": "2z7SBL9s8dWaMEKfPcZ1ZNDUFpLeGyBzFqncTXdkrEcrm7RXGorYB5zGpp9caMNYLkx3D9sN7xneesyJxJzUadec",
  "key12": "2CYNEpdhRV56N37BBCB7v9wTCvavezvDH6n1AiHgo8ZPL7oqqdaZMNcvVsWzo4MzwxUBWtRE6vxsErcGdPWEb6r4",
  "key13": "2ALDQAsjxdnMNQ6PezApSkVxPadAqbtAr3q2zHdVSpazGT8XZbMBLEBcgG6n7Wu1UutKP4h3msEFv6ebLDx2Q8no",
  "key14": "4pMmuN4a94v3z9by2oWtQ3i2iPAxBUybkqKLaenjstnHbfqUcUBQyx6s2uBHcGr5BFzLTHKNGuphCUGnFmM1b4Ut",
  "key15": "3Vxtg4ybysRtuTqB8fHUCEpo8kmYzBaFmEbSzMyUqy7RudUqygWEijCfTCbFpPPbFAWrvKaDHtjrFY2VzMAGN3Qi",
  "key16": "5jZBkW9isvoBwtYqKffch5H4y7v2eNv8M4Khvw252br5XCq53dHrhi6JGK2j2M92pZPiVJRWtBWtY6yPShgjfE1S",
  "key17": "4FuhiKegDhNL7HcWf7udfCbq43xA85s3tRhkFHKwsZVTErm6CaTPZkiUJTJ3aDdcwUNQhbcSf55KoKM73setXEYn",
  "key18": "2zJhzoENZEfVBuK9UFVZGeRWdzd37qGhBW31tRv8E9vapcxzZcTyFnSbBGxNe1SMQWmbZymNYSvnHXnDd7Xnqb4N",
  "key19": "3GkYYnkGnFReK9vnCj8eUqhTENMMvnSry7GTiKp4tda45gqcjJPHHg65PBD2ZwNFxkKL2c9yaWtsC4NWRTWPtVD6",
  "key20": "5vXULZ9GYneaQTU79UZitX1xh6fduthNCohf1kRKwhFBRXupVc2pQkbeJPKCMBeRZQYwXBKyiVGqZYLwjLcPXkMq",
  "key21": "22ME8EukUT19a1qTRsgsBCjcYapkUoGzHyDDtNaHhEY16Y9nzrPi46WBb6tn1PEyGMqz98hrCDsqovgwTcsizWUe",
  "key22": "2gcaV5qn9YAAaXXXeFsUJSE2WY6cD8G1xLnoL8SbMZuobG3uUphjc3GypR3RYAvvSxMQk5SrMDupKyJ1sQ5SbwKG",
  "key23": "5cspwTkZwMkTMpJZ8HZUhGgGmYmbNuHCdEdMYYWsMa323A5uCH39mZBxAW3oBnB2cZmoJkhDHWyxtwieVNj927va",
  "key24": "3PWpEU38mJqZ48qTnRX1H9mBDa7fChHp4FD7kLf5Hugr3TH7rWD8VDon7dPgcFXzyoprz41rz1MZnd7bUwwE5Shi",
  "key25": "4GRoFLmsi48yQDTLWWTEvzYokXJRYtY3DEVfYtEiGxLntZoQw7VmopUZDqGq7WW65XQnLE8842P9Twa4QuZKdPjG",
  "key26": "5CsAgpPkpgr3pNj1TvrQBBDvQU1EfTfP442ex4vyhmwCREswTojEc2R931kWiqVMnnAJxaXCw79p9DHjid4HDpEn",
  "key27": "33USU8EuJVHtqmhBVmmcNsiB2CSjyEjDcsCQGGxYadgfs1Kn8EiJLNZGkFBM9or3PShgZWuDzf8BUvswXMfegGCg",
  "key28": "3uvZhzbWDLNpyQWr1K5sPftwNGrewduazwK8cupK3rEg2ynYpagbWyeLjDQ22dzKLRDdNXNZsjr4co14L1xd2cHb",
  "key29": "ESxb7H1Vr1DXQPArL1Rwf4rNMo37arGfozXh2QnHutHmuaZzHX3puCvjnNcL7GZfswjkBp9ayTAY9iLFYpbH2DA",
  "key30": "2mkpyS7Gum4P7QxvB6Rrc5gv1syzjLVCsXUrWHGvT1QE9N98ebZm1J3RXazXsFk6nQGbRH43nT44KyHFQrLUW4FW",
  "key31": "4tBAPNY9UmhvyYZsV1cnPMjQZksNkdjPY1TQTGfsF3ecSyLoWJ2iMgfAm3VnyzDpoA8GPcogHEWrjVZwNx5xBviz"
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
