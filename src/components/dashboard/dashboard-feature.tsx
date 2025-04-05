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
    "5y3cDYvMe2NoKJuDaB6iHhLTjqNFNnGxKmkQWQ92x1emGViaZhbeFNPqnjazbHnmHQgXQGQ6qa1gNfachocYHQtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEUYbvoKqkdXyaTiV7ZfbkBUBDMsNiuVptALHYxfX6ABauJuhhCVhbPrabMXUF8j6PHMKZ5gWPXun9nVTfUnnZj",
  "key1": "cXn6M2rbyvXYhips4LxoDssxmieB4y1naVWjBmqJXXzQQywo3yzvvtPjZBUHibrf5ZvYYVi1rCeWbZooV9m2nfD",
  "key2": "37QrwMVFHtoB6UhSsNjoSN6AmkreuujC3q8ifbvefrwvFVa883cP1pCHuGzqfkT1LQ5UBLkGeuD4cvmfRPyb167V",
  "key3": "kcR8Rx8Ps6hhHf9L9SBmeJNN2Up4gUMERYKyM13GNLmiQmH97yuWyW2NWqrjfbqWEncSNxt1BBhRtKjTQTSAbMd",
  "key4": "2eWQSSQ73iKMX3ZyjwRiAcCcLkyH1nMfXXdCdfwqmSSHVZEvJqkHphD3iLgcMUShnUDEn7gyutmaBC26JtdTVs9Z",
  "key5": "tYZCivoqn5nb5CXaivrF4afXqJ4FQNJs671bgk3aMPHMhi5yoEo7S8ocTg9reLx2TXDb8XUi8eYWDPhgKuFWJmg",
  "key6": "3MpdgiiX1TzRbeqZbWkmXmL6BghZkww6CeYbDtV27kYxmDZkN5xfMQ6PqYqMMYAADn1x7Qt11NJsZmZd84U8gG9b",
  "key7": "3GtSgg8zReBA8hqyrp157Sf7RvYXY9oBHAN4ffvPFUtySPXswgvLE6MBdjD8pi5VWUUhpoDBDXVncsBEBZPFLADV",
  "key8": "eUfYMeBHGm6MoJdaW19dD5P3yiBijmMeyniS4s1pPNJFPdtQf5vxrmZtcKw5HqhfS5uLvBBn5b9hvZJg5iecxzh",
  "key9": "VC9Tc1xmXDAxLB3umDAcnQdWw3EBdu2xiRr8iEwxvnkefgbWuC4GA5SrznAo6MAEkF58bHLKUGopx7M3H6f87e3",
  "key10": "55KMM7LqeTfPkK1RnfES3sSEr9K7mmFou2LNUYZq1w2EMCN8nDQrGAQZ6yGVAXbUhASjjn5KKXE51oS6fZHiurB6",
  "key11": "3MxVzKn2qVAJoErAXJryeRrdfCf7uV8M9kV2Xfyim2H1JN5F76RP98CYxR422vr2FhHLdZQ9cLF4LH7SZQ4CV8Ju",
  "key12": "49F9PbWNABU1e5ZUbUei8QYYt6on33pN6P7cStpn7DdjbHWoZ8VJf4C87y5jF8AP2kWeJ5Uta12hmeTodzZvaWDR",
  "key13": "5CK891rpgi3mTTzPQsNvgFkL2NSEaQ9Uu3grbNSmaAr7BXRoqru4RBY7psRxkGSYUFdFhPrLTL2jXvFaFpfDNVh9",
  "key14": "3RYP85afgQCNUkhtV6yeoBi1Kmam11jUwp1wMRdWCwNGeMUKcyhmoNgTQq7wk93kTvX9aGwxF3ABftnGLyfQYkC5",
  "key15": "KTpzijckyozwKaVdNL5YrTwHVci1uEouNnbMzGfD7izESEzS7nU3T9idUhVatFqhzLNaccs9djwLZUCcsAaaQDk",
  "key16": "wzaaUH5ArNj7CtxnQZEv7q5y2vWeEDai1cTf1c3pE8CscTdKQ75AdaqjqEYNZ2T3xMQWhLTbtWGdQY3ULMpPV4v",
  "key17": "PHwDsgfhQgUh2o1yJhDs516VAn61A697ziWoZstqtZuUhj828EB33a3oYq4NdZCRhVctah9eoNm7sVeriJFuPwe",
  "key18": "iTajF3Dju1Ntx9zcSY1JxHtEdtAe4r3cSTfbwxuhLjc5ER7AwJJ5q5aeFmGgDVZsTj3EHmBSmnbTGUcD9rQZwEZ",
  "key19": "5ZkudShV48AV4GHfL8DVu2pibNyTcupWen6TeQsnbfuCAN8u37QFkDaHN3eu7xo2La5CvKmoW9yxFjkiNSRcE5Ty",
  "key20": "3VAhZ66BwrEKzyPvVtpzhcLuLfjQ8KE8gE5dJKG2M1P4PRCBzU3yEYEes8aPhwAbD1yPeUFZfJt8KvPb6AQPRUzG",
  "key21": "3mgyHps4zf5qyvZyhXMTcMEhqjpZRtDMziUezx2Dm83v4P3Yj4USC4SLcLK79rEjY3WNyaCNCRhj3vSPBDb2iBm7",
  "key22": "3775dWDrAxdsc7WsFVm98uBaR5EjE3nhRcE3x1badGxpEWEjUvF7v8X3MwhjyzGW8BR3NXiaEUA7igW6rWaKT3ts",
  "key23": "4vPECpAAr7iV434Dt4aGV5eVhVitwPNGWtjRo9Sw3hQZnG6akYfDqauw3qEy7r2ymQmuXtHG3ATRnEsbeJZu42mu",
  "key24": "4TgsQWjsWZow6i2cq1AFYhquKyWqcTWVo6Z9Q7rgyZkneGssyumuWm4uUP8SbRAuNP5QALKTTZvWH5k9kvkEZcGu",
  "key25": "2iz3zk81P9HWWqX9j2NSrPpKUkPpF1BkDNtwYt3AtVMcZemZE9jwK2AnrZfQYH6TTx3tvCE56LrF49UMUxECojCX"
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
