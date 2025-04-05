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
    "4Jb6631n3LvWSAuyU7f356jY7Qg7oFCMszPuu8rprWHwRJzpxTxxB5N2GbaYiZfEmdk1uPiGYDWmhsNorNGLEhkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMvkrksd7Ht58Rmc9uR6KJcKP6tjLFjDPPN8M28R6kYoWHf96dE181dMCVVHYxLqhs4Aizg7WWehVgjW6brVPVF",
  "key1": "3ghW4E8dWHssdJSRVUHxnVoeZTVmv72eHTYF22jGb2FhYmWbEAnMvcUZHybTfYbdPs4QMTczdRJnTZ975gxRYA5N",
  "key2": "4TZZ6ENA7AVSkJiFRpmKeDydP2hxhs3FU7T63GedKG5y3nthzKE4aUJTNNVYbzQe1sXrPTVfKQsbiufJ3bLeMnWz",
  "key3": "65cbpbW6PFS5xP4tTRpiaxWAtiUN91CfSPoijt1fCEYuwULtU9C3H5CPs1yRGdnm81egBVcVV6Umzdkj4FMFAr1h",
  "key4": "4XC65f8KxvzTFqS1BNtr7h1sczzZsaKtqpPtrr8yrsCjqqy55JFRxtUotVx2i1da94SgyNt73m892r7XZbFaQiLn",
  "key5": "244Toq9wY63ojUeHG1o43FE4pL1PHSW9aXDytTt66oz3588fVULoVk1Q2UrysU2XzTTqDag7MwkoY6AKZJLCgDSn",
  "key6": "aUZp6i83711qCHGKtLEp5PLqLEwy2ngd6oen5XmxJEnemuQp2gw7KhoEyvhvZJw6GHvgqj3y3Zm4vWMXbYnk4Xo",
  "key7": "4bXKE1ed8ufPXnc4nSG4xHbk5xFa8wYZYsigERhXMyAuWCFvUQU3m1EhUQJdYE5ucvP5iiiSJKDdDX64CJzzADo7",
  "key8": "4wv6bgKUbjTJJ1NcjEeavAyg2baDZZGgPkSGGggvSYo2MqWxcpew7LG5GUkdFPe9qoJepLMpHypefegdWHyqRdCm",
  "key9": "3yeqNJRFp8iWyeCjg5r2S3CsAMWvtxM7WzkQv38AniPXKE7w9q3uzmHnQjSAHwtD8ua15JtQZESsmxZQQUyXEH7",
  "key10": "58uadhtYMthysDNjy5mXnxMRVd3rik8zyCUxw1uGGtgH5FnGTwTrGueYcytNDTBNPiZRL3XBoWLZvAhfiM39u9EP",
  "key11": "3MyVAYtouscF49jcYi6bNX46v9oZ4Y8bGLwmSpUNPFDbsBB4gMzFSZ95xBHRBARTutS7kSheZ4BddDkQFV9z6eGN",
  "key12": "P9BbEzpQNaXpixSygrCtnNvzzrrhhmWMeNk9B9hHJSztKBgYjHj9MZq3YzAJhHBuCbBaHUmGmkhuGvWTrS4Zhqd",
  "key13": "486Z4FRgtJDngG9mKv1QsQnohg98XoMiJSEZwh2MNMrAErvPV2czU2NLPBy97A5CBKLqaaJf4NxQcyw1U6PqW5nm",
  "key14": "3RRhMhMW8m2HhnwJqdQ74WZYjD6SzUq1FJHimhd3ysVZJz4g31do1ovFbHKFuntdCjwHsXzZcbcXySwwAAT7TKpG",
  "key15": "22ukeDTFg8Bk9kqHmNr3HzRn7U9Wza2FSFzuVPRDns2c4q4QmVBKkxLDPyfcAPzc3ExLD4RuZns61948RM1tPvaj",
  "key16": "Z87tsfPTPQEqZ7srbNNFRcJYdYNuci9BgY5KJeaqgrs3SMSkfuPLYZNPkSxexADGJ1zjMxp9EExAXzq2X2KNTf5",
  "key17": "2WUwc1dCzjApK8fj92HLsdnGmn1P3F3ioaWjbdwVuwDg6Hv4rn46qEq813EvHLEy3TCpy6sNfyZKNqAmJ5EbC98a",
  "key18": "66kvYa22c9WdxmQrRgb2Q23iwAsRYVe4TpjcFpmKZXiRMuzY9bcLS2aCVVuorRmsFjnd9mUDdCzp1Fit5PTAyuCC",
  "key19": "ZY7UnBsFMMtaALxKCKs8pS6FBdtj5j94JgrNajMV4u64M4YftTVKmAob3vkdjdyVPQLAjGcuX2f5NBt72WV6EnV",
  "key20": "2CfwjpxoPK6aE5GJgdLv4obM1g6jCYY53P8FovDrR96BZ5g1Tody4tmxq1SUmmBbhdVEnyamN2Mud89YiSag5f7y",
  "key21": "3x6gx4aZBi9Af3of59Z3MmPAe1uTv4LzDr8j6oCW3Fo2yfUU2qRGcyGrrh4QXSYmaj7e9zdsQBTCh5Ntfeom9aaN",
  "key22": "VASF5MV2BGwaa9gpy21qVKi5MDSwWxihy9eiQHh4pEPYUVCXsfVttMgvVqXCdU75zDHjbSttE6dxYW5Vr82GiJh",
  "key23": "3i7T7VH8g4HkPEtKAoeeGVfr4XqXiLua3765JCJCcCAQ3vDG8Us4Ksng7ALXKiCWPVDf8Z36UZB8JmAmHE7C9x22",
  "key24": "1TyJFwvDAY4Zhd4nwtGzWXi4HRjnVmpZA6F38XRBuzYcPN3qad41mrZ5gsJ8pJhzyU88XrUzW3Cz9RrvbBxQaw2",
  "key25": "5rnTGcwYyUvcqNx8XgeS9qBVQ7dCKvHVnLVDpbjRzGwQHHZ95PhBggqNqFYW41Tk3D3sY6ExP17KGVNCEhe9Xw4j"
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
