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
    "TiFfqy8u2wJmJCP3Tsb2zo4QCVGPsxuw8r9bbnHUR6nwGja7xD2UkHosMydrXjVKMx4DzpwZd584vzyvwkQpZ1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbQQUX9tJTLFXQQxr1DsbA1Tznzup3shvyZsKRAzNDvqE6BN1ouDK5B8xkY5xjfaP8gBcDG8XJcscMPFARikH37",
  "key1": "4k5jQ7nyWYwbU8ShfrnUp8xCBa3fvTnSAb28m2DinZ4pAYzYxyq9qPZJ8GwA6t5f2ZRSekZ6SWgQUYFZzxZqwuez",
  "key2": "5yEqDHfz129xw15Sofqz74PqZN5NKBVqksgfRFy1f3q8JEdCtSC8pTDrfVTdVMZtqMzXyPXJ7vjA3BMdTe8dTKC",
  "key3": "44EkhFTJpEbDPLg1cWbDrPvA2y27g7M4sKSz9L7tjebmWFiaWha94R3SSyw6ZC6vBtz1FrvGYjegARpeuWbUqKu9",
  "key4": "4QoWtUyFmtEExxpkjwz5ndDCc2oYETLx8e6zDfitEPKSMo5kzo5BBH6WoEKTRmZmkekHjWvDvSJing4q9EJZCbBG",
  "key5": "rV5EWrRzy2pHyXy4CwLmRTwSZcXvKqujKtiYnySQS7bSsERxZJhx1QVaKy4SXwq8pcfTnF3ebGrtk45tpnFUeop",
  "key6": "2JtZKUeykfZY7tsBQe7wDKvq8c6CWLRfEHVXxWH5q5mnxUjtte4pqdvCbDr14tYVMhUPWqEaj63WwapbQq9Za3Tg",
  "key7": "549sTa49FJ7Pu6cMic7u6afFNRkqKsjMVo7CyCjxXb4dZ6ncjQxgZ5k8S2cDm8Dru1XuD7sLmwiMes9KkfdUDocC",
  "key8": "56BXWVFgGxC2QDTU4gzSCjNqZmb6iR5QC4TsG88ze3rsHeDtqm1aMdbqv5nutTQtpNHZv2fCtkUNJnbLGyUnaCh9",
  "key9": "3Bg5ouKbLZcKwqud6HX42xDpMgUXNtPQt3Cy9tT9AB5qpg98exxmiQqjbGbYjRqmBaAzc38w5P47LyeHDmzdhfDZ",
  "key10": "2aDSTava5mbTqkuGzszrCCHhvRB1GoYaxGc99aYyveaMQ9uRmE9T49CMMNxUSDJD297PnHmLm9j6ji7cowzGkVAt",
  "key11": "3Y99WgB1tfACh8z5ArQwhfLSGSRAVNtVw19yvCRbVk5xSabXjth9mDaE8CbJtA3eS1y1QTjmT9x7ZzGSCGsZLBob",
  "key12": "5ZHdsc15QPsp3FHJK4QgXVjEJpDo7BRvhz4gCr6nTVu74gxoqqBJ3DcUxyfCYYbvuhgppJCsvmL5pniQ3v4KFsbT",
  "key13": "3bB6cqJvb59gW8K7KaP5Fbt1CQK4JKhNHTzSmZ9H1ttRTkg4TZCGBcZRz2EUiXPNzc1ujiSAMkYdM7dVPVoVxD5w",
  "key14": "2atBADT4dAydUiBMfSqzCQ8rbffq1R1V66KXk9u9kKBdpc2uE2Rz8mju86qdEnMjLE4XkJ5jqLZFvDBTGJ1X7nuF",
  "key15": "5XjPtCaLDG9sdrgxkKFyH7xa1whRR6ZvTyb5w5q5QYfguDRD6YtTUEx37C4j8LeuhzEBMFsN4QwGZkYkoM4KpMq7",
  "key16": "5Q6sRWeQaP4EdTbDcbhS6pRRZmXkJnBSsh6RU4WnBNNgikDjK8KQTsNdN2vzKERs1RjJFurURgQHyn9uSjSz6riE",
  "key17": "2eYLdWhCzDve3xmSb16BcSfuHd2HMmE8B916D39fwe8KQyGepGGdFaXyrShfF1B8312HkJscrFhYVqPnq4ewXXRr",
  "key18": "5LZeCnjtLohgyD5bSBTgFuYwVAV6QeuaCFvW1qfHamD7hPuVV3jSrYvgG9C7qpeVupWGmsQxA2tQiXdUH7GYW3d6",
  "key19": "2kajLDrKfXskGTq5PSTYZnoDvG4UNgpRGo8nveb8XogascaeFnunt9WPVmMxrHW7LTDfPdEVMnspMBnVo1pSnCP1",
  "key20": "5F8M8z7Cpvw6MDLHvBVWdHSZNYvDLSq6jbpAwBrcUi5ETYJWnZ8YK1ZaqnUERFgM7x8wskKnaA92PhwmXGNsH9Qo",
  "key21": "3Cv1Su4jXYXcv5LvjivsveH9nPeW631RohMFSVnnjUAKX9JZ3VLZKBmQwoXifeaqw4Rfpi8JJ1B8W7tDud9sviZf",
  "key22": "2bBEN2NjNokymM5JRdMMAZBydS2GWA1yXPvhoPhzA8o1vPguBtmS7hgBg25z6XeXvvP9XV7Srpu4M4Jon19V3m6V",
  "key23": "5wCaiXKfqTtjHt8q3sZ2uDBuEiaffYxHSZVDEMxHKFdrxUKANsgEd2H9NJEvH2pn46ZespbMqaztE9D3U5tv1Rug",
  "key24": "K9uJx1A6kzZrU9nCx9eKshG1FsoGvvHGAHK6QMjoU1PEaWFqKKYe62XaL1qU4hy4g2hFK7TGU86sLx9H3q6d8nY",
  "key25": "5tjfMpvq4xFgoX9mHEWMCyZSSkACbFg65zhkahw5Q8LtcnNZEszWoXVH3BUfQTjc4rV1GRdkYg8vbs8pFSM3g5sn",
  "key26": "32rofHyXcmnf3fDQqui1s7GqtEuo7TFQPRwtnUnVyt8mE9hkAFmc3Y54TbpPSnUD9y15QRtJ4fewWNsBeMUwcSjS",
  "key27": "3yHMD5XyzMQeNV7oyqYFSzj2NYwFZ9i2GuTPZ7zCACh4HK4kbTGjS5YpbnbZFahzQDpx2Ae3oXUzDKuRYAfXj3yX",
  "key28": "5TrxtRTLDZLPkaCCWmqsnNCvMakHELLocvyCWpCkd2cg1bVmh9hHDs3uv8riWYCcY8nUpWcNBHUL52sug4Smx8j4",
  "key29": "2wbJy7nHHvEF7QwPLgczxcLpnqHV1wmeKgkVd6bAZUawQJpEFhjepnShhKjz6Uotrt2qoFdEtvvfaRryHpLVADxA",
  "key30": "48aiiQKVrmRLxgMDpto3Jg2AmhnqBCBh4Shwav2KswmELd2bM4FYSF6xHT2FsYJV55URwcTc4xb8jRvCe6i8fZ3q",
  "key31": "22iQt8MEgMWtPDM21SUBpWyNB9E7bRfWTprwV2FixdFs5FciACsvKUzjJYXW1hQN8bEKf8iiiFAqW6CdnZzW66eF",
  "key32": "5THGUGnnidE3CdxzRmn4sZQMXjfpLyHzhXT8e9GrMidx6pE5Dm7pQ29xcvLzy2S3sSjXyXZn9eJRHAcBKbjBkHBM",
  "key33": "44Ymy1QDHgmLarVRmN19gcaXceHjMVyKqQAfHsvZtdWPgynpVhLCM89tfbu8t1Vj3ycoK8kFjCTC63MBFWuufrLq",
  "key34": "5zM5iLmhjggn1reLPiVZyCBwPQBbgqvPgWambfaBGdjiLoj4SR51daf81yeuDz8deUNtwJab9YvhdV8uDAWx491j",
  "key35": "y9trrYx9sp8WqUCTpKhhF5P4RH3SF35xQhfcSoWGqqn5MTnkAK459VQ3AMQ2bgtUXYha28T11Jep9xDvnsReVKY",
  "key36": "G2x2uv9XTAQFQoEnuMR79JhBEwzuxEXMS7kJMzGRvcUzdfG7PyYEjDhGX5yW31ohHwrr1mScx8LzEDjccucNxNd"
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
