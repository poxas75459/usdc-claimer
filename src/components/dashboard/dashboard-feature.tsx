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
    "5USFxwJAE1Nynb3joXmkH4znniaNU9vF5QAwFUTCbyB5d66k2vAJW5qjD6B3SAUQzgU1RaP9ZzsFQdrPn6Jzboxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664mMB7cLUg3BYREwzNDWFqKE96vzKNx19jzKVc2JmUU8wFyRHiY7uDHPoJVN23o7Am7FCZYdzGAK3Q7UrHiZEtV",
  "key1": "37GAgAAsCWou2crUC34wJpote9Ks6boNWmxCENpdNbnSCV5Kn3J1P9EwxD7PQP4EpVj9Dhiw3Hekiq9aGtrumb7T",
  "key2": "4o21jic9VfZS6V51uVNubceWWuUCc6oK9Y2imdFaSvvi1LQ9FJZE3j4UTA13vunsTdmzQjVupBkhxxX1KSoVV4yk",
  "key3": "43BwFBfYCvbT7EfVwL8w8zrsBn4aXMkUU5jLKKSxjjwRizmisfFHRnNu8xyrwhSZD6veUex2fvycqp6sacHeGZe5",
  "key4": "3XcF3KkCTPrKGSDRWx6cbSax4KhwHci378MsNkiNGFKqS8oojDbJnc5uhxLdmE22CvKqbJJimiG1dUGvWQnkxrpg",
  "key5": "PUW7DiyFx2ZsMewFTgt5d6N9KMwCcZ75SDRAtF2UrFpnckZ2Z1Ce8ne77cNXhbkEESTLbgG6CGju2WNBd2cuE2b",
  "key6": "McmserusTuynPp3L46qrRLspbUPbj6AvPZ9bZKuLYn78vdq5uZYrkGmrTUhoBAaHnDsyMujcPYNArxXEB1GVctE",
  "key7": "RWjLGG4wPbomYRkdiFT2WT3r8gmiodUxN7BbG8DxorR7moTMWWH2QzFmo23A1keBThLmCmMxgHwRX2tBWQZmQco",
  "key8": "3TWEgGpttYKpGTxJpooha7Z8bMFUnRFcEE3yjy3Hmf94jqbF1AfhZLWqJAQx3DWXyU6YUFcADDUv5dM6z7A9QGCv",
  "key9": "33uw1HMabhcjShhayfqmLNxM2doTV92TWj5iHh1EXYUNMKFUh34guPxdTZB6LDrPFheH4LK6zc3N7PMs8wboKZHJ",
  "key10": "uW6zocJyLQEWx9wKxLsdLxWk7KJizUuswDnzZQsnWpzHxbrKhciRgo9Hht2BdT1mEVsXJ3QRc3n91wkCSNuHV1Y",
  "key11": "4sbVPct5kw3A3BBtijZAKvkFb3dyDFMsMUfzZQRUk8MBPNGNqQmMat2xGRVWoh9B2s3n6WEwaZ9KH6Tpk5odJQE5",
  "key12": "4LvUMDUBgRzPGLqaQZF4aBVhvGJPPKGgzsUvd36MUvbeAXqUvnuBnAPoxM6b5jQSUo2VzyT1gJF2eYsUFQd5Wyct",
  "key13": "34VzVwy9HjCY9GcC53TdwSPZLZKRaCBSYdY3GUHzxycFuZF7ZSwzwwVpRZnczjemEvmKM18yZjWWVRyo7yPqQEWW",
  "key14": "kv4Tk4VCe2U2cai4dnaJy9agZBoUNeudorzejMSWUyW136o2xkau24tuGEXMR3ZQ6ZjHcMfd4ZAEm2wqmxqzeUD",
  "key15": "4cTkAdHnjdBZdNyFGx7bTuRnXkVBE5MYgTva4UVty3k2rFjJ5W1SB3qGyxgQ5nE7ryKUsjwJEP7HyCdaRjJ7BtXH",
  "key16": "2HZ52XE1DDLfd3UkeDERjBj7NYvUBVWcezqPEur4JWJWnecPzhUUSUPjYb3ZR4qmGHtRVhGrwuYyFPr9vAYZdw1u",
  "key17": "64zKFkPsLowXVpBSgS69tG8FudJY3SeAp47hdukWR7kqLoVHxJHgRJnWqddSAfRPhRGWWcc9R1myW4zgTMJsG786",
  "key18": "s5etqM8NtxfQZozenay84vW9GjTBmG93XGAioDbczqDBPAZgSHitQ2jzeCs9BU3aX3at11m9DhkHZ85BpKyyugD",
  "key19": "2k81EuQHJRa5358ff1hgKCYBYcxid6Ty8Td4J7dqXRGKVmgqeEcGfHNk9U9bqtMWrr8E6VRLA7CfcLG91kUxZida",
  "key20": "2ge7j8M8K8cDgBRWeQadSw2GQG1YCST4ToovTv5B42Q6t3qfS7xZK95hFxHZFxe28LrvEgK1M8w7KEftZph4TtuY",
  "key21": "2VzroZW5PwEJMYpf8tQsrP8RaxsbPKqaqTLdtoXnvzgaPcfSMxdCLzLo9xrb31cwDZvfNxX1hdo4YhFQYmUUmWdn",
  "key22": "k6Ldq8jhqXH9LuQTWJ4rXpZSov2exoueXncjQGfPccbu8AUF3iHGPzGCeHdasCvvbQZN81we6uKvJgNs2bfdXkT",
  "key23": "2W3aYVFpbWCFta3ogyY9XfkrTcCp3WxbkqCekKQypZBKnx2bioRLcGwc8inkjVdDzdqt1ysDtPQj4iFsvagsVa5s",
  "key24": "4mr5YnwL5Ao3BuzecH6eyxkhLLuZ8Eyfe3rFTyTgVAkGrd3kJ5btehRipwb8T7zWnZMZPUsohzeSusPDJ9ydNmDQ",
  "key25": "z85D1NvPVQUKS7CbJ4pWaVvxmR5SGiFFpBwMBijNhqXz2fSXUGkfqPynCwdJZpesFE6UGnqXv8htW8P7oDZaM8Z",
  "key26": "2TtkLoTkmzVNyoZ3HzKptUBoUqPCcCDfNBQH6aK9yQMSdNCCivYpPSPUT27ApP7FRWB2yTw2DRAoA6hWQ8jJUC1T",
  "key27": "5jYMtLjpK6UXK1pioba3kxdbzdpY5yMyYeQrcH11RQ1SAtg5uxtBGK2jE2SyPBX4vKMSQNmuzGFpnHfcZwC7b6MW",
  "key28": "2uhGgdoq733xsxrtGNaZiy8doNYQ2Uia7AwbxU28eeY9RPrysaPX9sNXGt1G5Ud3cCduFCGMD7UZ1vt5Rd7G5goh",
  "key29": "49gpBb4gZjAG3v28cPCTNtEepndGsmo7Ac7WGpTqVmEyFUzi5HfrqyJ4DfpCHn4V7qevYWbnvF1GJDYpx4Z7W5H4",
  "key30": "5KQd81fum83YyxdfBpFAmod4YDdy31LCiRPPU3sHvXStGdZ6WTfZWBQNeUy9G9uvfEvWcDA6nPdPNiNMCxpWpb88",
  "key31": "3KQu2ghTsFhHrXrnoHoavPd14JyTzHStfddKadadRFJagLGbQj5dgtwwoq7kc3C9KYcqy65S3tEdvtrBFzzdTXrA",
  "key32": "ekRt1Jff2n1s7pqhv1s959XWuqknTDT3xfJfVVsHNTnkTj9Jx83VG32Miyavvw1QTMquDwZXWmZBJTWCSvgydsi"
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
