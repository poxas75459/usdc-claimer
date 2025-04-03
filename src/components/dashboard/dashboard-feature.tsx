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
    "2NLUzVx3RMse7pKut2B5PoTHmUq6QvUdtNoyMxRe3PNUeEj8S7wSdHQeWCSZhSHp9MtLvY1VQ67EeLkauG2kkoxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGfft6xjx6Bzh2KLjiZ26eQS69fsg8QjYf6P7P8addaoMjhMSCJRrrp2yfEfKyZoXGhpQ5AJwTajbLrHacSWqKa",
  "key1": "33MvaExAsc74kiELLSiYW7iVPPbxHGLcvLXXHEzWmrAqxSQqYgUi5xNm6T7gTuWeteuD6hVsCaNRo9J3Y97Yd7JP",
  "key2": "32Lkfb81uouYWEygFCXjfDQzM1UZ1tMBSVjbPoovy6ydQMeTXMJveHskNJNRNSyfeZoAiJDXY679q3jSDwzj9YW3",
  "key3": "o9JytLdyZf1LDdqhMGZbdAmbX1rpADdFBKDMHtvGVLNqbL6tjUPBs63RJ1SAFE6Rt75LdG3dPyQ44t3xN5nxxeR",
  "key4": "3ycUJBinHm5KwXoRjSvvFsMJwvZwABgd3pQwgB1MJZDt6gXj5F9ze9JMSinVnzuPMZrHZwRTSWQQxvz97vH9JDaw",
  "key5": "5N9r59Vrq2CdnggoQKAnsJSp75bwEz5a2wEtEPgauFD2aqqxu5D27uLKa6Y8PSbpPf5cfjXQhmpTstsitpUvhZno",
  "key6": "52tEmR1aFdVJsygbQHBJJQwN9NB7nN5ikTW6rePyJbr1bucy1dcEE87EUkfHWovkJ2Le2G4PoUDxNRspHajjzSvc",
  "key7": "yZSqCktTpFZ9HqDeCq4XFsJJJ4eRyeTVxrk9ir9nepokNuLqgRsYWKZGaDLH1DmEQe18vysp9MN339Y3KANQhZL",
  "key8": "4Szq5rbvyEUqk57zSnUPEzrzC6hdkbLzdKoyezSgzL6Q8VGvBT5gRrRqD4rY7RGRTbcUtybqKqYmVET77X33q6EV",
  "key9": "3Ks3hHjjCbftrv2gHnYqwErUnrH9dwZBwiH5GysCsV3q14fTqvmsPXNQCvxg29SrYiucwCrrpLZPz3CVFnxXFMa8",
  "key10": "48gfdrrt13i8mmThWZjrKrx2SKXdKgX4j1QYKBzbCR261WuunWMTHogoYFqGCWuVEaLW9WyoY5p3Uqgm1cTvExmk",
  "key11": "5rBXiyfZ87A7ja4ohtpWpKkAFthEcTD9fz7XRmihjhzUMLysvWHCHyaNE9pfXMkfLECxqr3MY6h75QCAMrRLs3Mj",
  "key12": "EnonJbjYHUvQJde8uKMorMmt53Po9WF1x4KCZfHTjfinMvJePf4u35B7GcgwZLHg8cpog43v8orjVeLVCsEiGjc",
  "key13": "2q1FhU6SBMdb3oFLEWzHewpjarvQnLNjCyQYBSzPC1pJVyD4scFbZu1Vuh9Sudy7fp5dwjHNGjKKbz8Z4QyR9VZK",
  "key14": "3irRKunEzTpdeLqXqAfhtLkpozp85AeSPf4KYHGhZTFsvW8BCjAbfaNJZ3VL2rtHiHLabTvF4DAicGJCefKVFd57",
  "key15": "5fHkGausJEUzD8GxNk97cjV8Hw9rdpPQiPWjvqud98NPocLmwbTdsZi5wmGfhMJzcS98YZpnykrUdwyG3Vn1rPmQ",
  "key16": "U2gReCzE1EMVMjLZc35fdBtzDF26vrZuxpNCg8GiQcZNYYsTTKjTX4bduLUqCoKKnnBvyxKpsag6bjTpfreURwn",
  "key17": "5tnxRv3UYBSDDgfLsk423RsuozTkfXM826YukhaspbCZXRbnvh4SKsQqpnG8PaoVGcVredoy65vMAge95QmANa4w",
  "key18": "3NCvphnvyGvkGDDTGqFFzz2Vqgsb1t5aRiLyge2DTwTf65uQ6LEbh7EngUWfHW5THv9Ct34YBb4k1BGgYJvtpize",
  "key19": "3j9XWnpvLHZVBDxUf5nGH2XYC5Rtx2XsDpG55gW9SuyJK42jEC5M1Amj3dj1yd9GAd5pD7Q8xfudNo3NyTxHRq9U",
  "key20": "48KUz5NryGgfsiPXYpSsFVoykEeGLjKxN18RJucCaWKduC5gEayoTAr3cJGCj8wmKvpon7rVt554NAuJ5kD84BGR",
  "key21": "3RmNCyn4ndS4aPuqNbWq1S6uZAHw7BZWrs6SRNeMtq6V4DTM6113aUFfCXEWgc6hWrC6hDrGheqqBrDnB46vmvst",
  "key22": "3XmtcmFC2GtZ2pcmHz8bJqux31VEbhqBUS75tzusvGX5fgGBZV1ykCj1kCXzgm1AKBXAzdNbne6hsEiAThp9Aerk",
  "key23": "KH8Y2qvnJXzT5Rq7ax71yw4oDQTLxk8ofBBrjwTKKJdecsCAanw6pH5aA6jAyo2tzYcePy7eNxidXUP5MvM8AzU",
  "key24": "5DDNv3gMATTKGVcxe9emZUPLRyvMYV1RJWHoSLm5unF5VYuyQSExM4KL9akWXEFUjH7vhXPzDMx5ULQRDck3u1J4",
  "key25": "XxL9h4WxMYmV4MFKitnHKaXCNrDNPPgrrQB5XazkH48V1gZ5rMJTTwng6zvt4H8uRMvqtW8PchCsxa6EH3K2gnt",
  "key26": "5tmRBxvCaoYAvX3PoCrhnxJichw5C1ZcFPH9sc3hxf9RKb7odNJo8PbCPLukgMxb14LKdAcwY5pTjrJLw8SLgR2B",
  "key27": "21HKhThUPNeyNs6u2r184rw6QLA1Nm7LVM5UAV8hfxnna9XjeyzaQDjS8H232Acyz9R3QjZjngSmcti6LRn2pR1g",
  "key28": "55FmmavCnax5XKRzv5ZVq3QYpaPsyFBJAiE1kRw5xhNZxcuJdtDbQSKpgMUkUf33GLvUB5ofpEL9hJN4feaTDG8u",
  "key29": "2CDQPqmyuRHSZyiGtDeqFqV9RNL4h8RtSfcijGMZZaH8R8Tw7mqFrpoH9C8H7JvzdswckQiDS7WFKdhntCzKjw7k",
  "key30": "5ZtpUAsqdh75oJuZ3T3RoPiKqAzQrzE964Qc8cVxEK75sradQGLKzWHYcJdAJ7dButAQ4jkjJ18ENMwbTiCPG5R9"
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
