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
    "4xdffeFYHPC5ya7H395KvvBzWVnE7pHrsjhERWqVvsGFnpQmA4g2JcyKHzqvv638cXoqTxpD2jLT9ZWZC1xA44MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3RJn3EcYFvUZSksovqLQTY6JXbeaaghZ2DCC6r2htGk5BdiE19G7f57eNEprATcZK5nz6pvxnMfKYXjsVNveyo",
  "key1": "2T2qym1pZ9FM7DQPDTF95DsL6pZYbyiGiKYqnRkbphHvZyJJa9bDkhcXHy5EdbRB5PvqmSnGfEs7sUzWUDcpkfBf",
  "key2": "46X7DWnatzuvQjGVRMkdJgxSBXXJNRBuwNsU7CKGLVrBF3WVgijrhM67iF8n7EBtFkB8R5oK4jXF1vWWyfAS4xEd",
  "key3": "2UnarfJzJoYbBCHgSzD1YqAQsXL3B3s7y2WdPzmxibkS5FioivhfakXt5iYuCY9B2zXsMXH1CjMToY42C1tWXpVT",
  "key4": "2MxCUfBtdkvwTegZtLCXryFLdakYLuvWNEXFaNUnpU8KieWVXa28c1euSCkRAnD445p1ZEBCW1DTWMqGTUizC8As",
  "key5": "YMxni5wS4uZyePJtwumKtGpU63HaYp2SX6bVTZAsu5KVRYQvcSnuuHLhYMDNajmkhdUe1EG8id1MoVCNpaYea7g",
  "key6": "63Dh3G6RQiKE15cPuwhhKoAz9ypqW7DcAGnzL5YsRqE8JJJKbzTpzystTpeUkchx42NaSVkoF3fLNmDsbZER6kuY",
  "key7": "2G77MeB23H4kkEwjj5f4Q9iE1dtFXiHzV1gTjAzxXgz7DMfY67eM5okUoGc7yifGAqibZkdmBwZHCD8CJmxhqB96",
  "key8": "51zedMbCnAnZrEyEzQQkJ6KNNMwGoPr9wHSyw9Hz7A3DtFXTTeSVQVTCtsn3DUWFZsnFs3m584infw42boqZYrcQ",
  "key9": "3XnHb1AfKehjfVHrXGYwvDP5ww7r4RLdX6TPqz3ANesrAaRJbpfxDTZwAr8eEDgdbuEZgz7WyJTCGqCsuKAWcrtq",
  "key10": "NHQKy2hCiu9sMrVU2uWiC4z8k3B9uCD5ntDc7br3k3WF9seL2JrGQFEevVdaCNziRtHFPTn5g4CxpSKkzNFDNhL",
  "key11": "4geQdkDR8yhsnTQk2RxuWoRYaTBu1A6FzzvKNFF4nBfkFh54du3p3rUh5N19C5R5en5pFKEJuUWXGZepX1T3vHgL",
  "key12": "5kuhDsadXz5rVqzBTyZi4XZwDutBaKv3Ls9LczuUWc7rYRAksYXNK7Fka1skCY7o6Rn1Dbsg1mb3T5kBVXweCK8F",
  "key13": "2cwXqXdWzxfiC2Y8Zd5yx53gbM3ZtqJUkc4t7BPYPVhgPAKgHTvEynspaQzMwm2YUDdbKCNzcAmf8vnq2UnH4xBT",
  "key14": "29auUUN4LnCQmnfBjtRgRUCpz2rP1bEsqJgNyTXMEvtKHuf3yuhvauxKCmdSi1NLSRb34Gv9FqjbW9zYYZmT8pRn",
  "key15": "3sxBJJFwtWBvUz5Hj9ZU7hypReiXvCChtCfh5Nutzr9JsYyisKsekGFWkQbyorjY4U46TFtGqA7qnPJiyCcmXJXC",
  "key16": "2LECbHYKJnwx1BpjBE3z28kqxcbQF4TQmtSmXDHUgkqH47Sa2vEmuL3vKYyZDjm9xtyTHxVVSmEyBheXXJehafk1",
  "key17": "319NiLeqsV1JSEom1BNW5bBg9BV3D4y45695Ak1eNJ4bCbKpNuTX5QDX8G3mnBkvggC5DfnzTB6akPVQ1g8yfuVB",
  "key18": "4sQFQLPDWUzGwigJoKc8cnE4DngpqYZKT8k7i5xEVrMAvEJyBdYGm8R2gZjPKisewbdfst646ChRsyxLVEjyjpBB",
  "key19": "5KzrRr6KmipqigSQF5ocUQ83gVThXYWjawkRfn6btzkQBvhNGTYduRqxYhXsp7swKDw7XEhydrXNBrf3KE7Zop2L",
  "key20": "5sjwkkNf43HnKTmYtsPM8fxkSMnHaAUrWrFJWJ4diEnAL5acgzfRhcktkhqcEYtvYY7nh9VH946CytqBvGfLrezR",
  "key21": "2hKDnXW4KGLvKiRUFinTzHqeTrEAnMcuQGGq4mAZFeUZykdxvWh1KyYX599g6XF4usGpB5dASDg5Wg3PwbProQwH",
  "key22": "6ZbHRAP3tYSK13aE8v7rdMSUm2vnrxaGMfvUYDeUuCzRmf3Dup2HEPRm3MsxNUtbDYFRPckheThHiWWhZCQ3FQk",
  "key23": "67WpGTr895qBkYWrG4vPZoEdGkRJpVotJyRJuF5EmRXNDcxzUrBC37sqNe3LdC4qiv4iwqgmawqAdwUoj2bzxqCP",
  "key24": "YdPnQMP7xsSk3tkbXKS3SyeSRqjd177VRon3mW84fy1aE8cZCZqxAUoXvRDJdBrxuq81apKq8QHEVyfFRUGoTLh",
  "key25": "25vKLJnzYTRrCbffo8BSxuEURNnydtiSbQTDkx4727x2PjexNjHydUHEbc3bS3JgVLe28LLroPRcg41wZEC59HXw",
  "key26": "3iw5cNzbvGMBPhSMB3BiAW8d1TUpfP32A7rYk7gYfoxu9fnZVnNCheLXxusvXoVPSSuaF3uPmxfyK6YN8Uwct5Gk",
  "key27": "2LBJnPGeN2nEfnXkc56FzNHXjDgjJjZUmtAGAAwaBJVAZUc1bnWTAeNKBRRgmVWczVBEenE43pT4TVPNNbsEeutE",
  "key28": "4cA2cHQ7WUMbkvpFSunEAiB8h4pRXVsJbteUBZsM38NmiXxnX1FBz3juSrxdpKDXRNfqcX1ozKzqRibNuxg8WiAG",
  "key29": "2hQav5pLnQD52TB3P34guqvA1iPdZcF7kTGD6vtDZJfACHBTeqXNEy5LwMjQJ5vBEd42r6vWN3QWsTiUNSr9TybB",
  "key30": "2xUEj3owKbkAfP6r6fD7dkaoWdnMTgqYr1uyW7JcZVEBqs3LwCNawKbCtpPP3TWFV6Mm8fwD1jWbq26ngE1xxEE9",
  "key31": "2bhHkNSSis3587R7kVE65fvmjrwnmDxmeEPaRSHVyZECUjdcxtZhvFH9eKd7hToaxbHE52AihdH7ahVhbQdSKPqx"
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
