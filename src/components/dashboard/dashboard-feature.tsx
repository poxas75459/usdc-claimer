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
    "4QuCfEMeVBKE1yR8hgB3s4o3UWXwwo9avGZHzkg2thfBRKRcT4mZ1vpC1G5FhNTMHjUNDTTwNdVwxS341U8ELtVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grCNvWi7eZ4NRg6TsuoJqsviwXFVK862Qkiv3PnbnAxjXdp79cn4LmiRt1c1Md2MCBS6Z7aS6sCeA7cRtd394iP",
  "key1": "4JaFpeWsU7XdR7AoxytFAETQmumgYP3zyKywHLe8dNSuLnEUXA2sE1BV3LXF1Sp9bEiszdkbAFNMDV9rJzsmGWfv",
  "key2": "3uSkDbrktMiY8RwBETCfuzuBejN1xeBmQDE6M53G3PvXVVer3tHSvr2VFRekSZXcgDAScaRGZ8R1Cbeco8MBG69",
  "key3": "2DFQ7JcbRDV2TJjL6pEet6vPGKPKDVxYbJL5uhVraDYSwWa9bhKgfagg3bguZVNqf4Vr1YHWDJh1EX2SqADjSBrR",
  "key4": "66ZN5bzLmEw4T3ZSiDD1ZGsE3UnqUG7wVoKbNiHbyjp8U73KcPQ9ZNaXoJMhRuP56JZYwnt3ZpkKeLxAusXfaQoW",
  "key5": "48fozcERFFxbtFDtZtuCb33Rc9yW4YAfHmpGJjLjeQi5kydixHAJhVt8VZnezufZYNojztErhnxgyKLKn2pV8kD9",
  "key6": "3XB6of6ixaFtdW5npgmW1vwKrX3RevytadqniW9kY5JEfmqfX1XPp8AiYeVH4aCRZMhYvdZLeYCMGsiLDV7xhe5G",
  "key7": "46RSUni3yZ3BEFqHABQ2G5h17grPuhQPWrM9MpSrZh9aDVq4zDftLNvFMgmw3GjEfj6ws3vxghtSgABpuLG1XMWY",
  "key8": "4mgzPSQxntNA9o4Y84F8pYL6HKtcdTCTHJE3vwxgFZUrd6VyRqjMWnFpjJZkrqTgZvQF7FD2PybR8aQtPsgQVmYh",
  "key9": "2RjeevLecSHaPKRuEoBy8Pgdj26E1gn5sUCCg5HHBZd8CGjgj9pabQCMF8UsiMBqZpskP5NQd4YAVHGm8GzJLoCp",
  "key10": "5F8oUHAzSfVJBtJ1dZRdsBSrvjBqSyjiVVnRYEvZT5sKSvAGKiFmoveyzPpMnL95tBTocBMQ6EM3sWmvYLZJ1Xe9",
  "key11": "5ohbB9Rw24uZC5m4SDD85W3KTSxVNz4CFri7mt6sxYsu9Zhhbx85tWM1kaEn6AQtJNLnXEyT846Gs9dhxmLQTcJr",
  "key12": "4Lc8zxsmFdfE2dPnbjAKWHA81T77tBWX3MAsKZRXahe811F5U2dagNohC77wukRL9Seehc1FagZypD1HXSbvejMv",
  "key13": "3Zy5tQdrNzG9CfthA872QvngAPjXrywcmdiY7X2XCn2xYRW32bRVZXN8BpHWT2JptSscJixPAYzpt2S47Fogt3J4",
  "key14": "3V7f1RQBXjxq4Mv9jM6wAfjUeDDX2En37j4VAqKDYVwk1VCa5G7v8tT1HkGfFURZ1XZmSe7nL5NhXE99yMnqGgV1",
  "key15": "RgdjYqrEgfZPWDecn4miy2qRawyu82QbufsGmnfoDQ8DS5nZVjvANvufHNmLLzKXp9wj2uqYxwcAU5sYvR8xPny",
  "key16": "4UBGjcUBQSXNFmnbnnhUVcNDtNDLwSVoHudipqKVLcrm5xvHWA4zkJPYKF8GMVgNsQMqenZkJsMQEfDC82bq8mEX",
  "key17": "gaQoeFc3RBTXLzDk4rKpM1z4CW9cvN1ohyg9VAnf3zFcVLxbZW8WgDNWhhjc2MbDNKGH48giQjRmXjQAyc71ZNq",
  "key18": "41gFNiNaQeGor4gMHj649hPhU5fYaC3XuR1VtR7gkTsM4d67vxLLus2A1Hn1HtCbGwDVk8A2SNmXGD1wa1AGqBBy",
  "key19": "2jkW2JgktEgZ8VZPZ4P2dChn4TC6WKAEdxAn4pvicsky1Px1kBkZwqvMfv4EQ9cedKed3TZinJ6bdPMDwPuBpDpc",
  "key20": "4wUZc3Aw4TqWURQxQVcomVKpxAD9LAhrBynoFDgRhujMeeN1ZDbxNKGxvPgDNVxff61UuRSykKTzr4bs7QzY9V5v",
  "key21": "3tVQYobD11FMJm2cZo6j4cgi5By5Aj1JweCM5WTupb7ch8jeyV54cYAMm9sS8ANrjrkfhJE3i3d6S3XpJfjtk8cE",
  "key22": "5trhxU8Am9AqCYpyG63GRwA2r7YLX81do7CfHUvp6tv9ChkRhKLZfpa1HTujudfwLUGLGWiaoozoZqPA1R7TkhNv",
  "key23": "42tRLdyDggNwv3zCdRiBG46F428pjYXeTKjfRuAdRXBYBYU9fnTLEvieTQ2MBeU9nXVtRcqPC6mS1MmqDW7GjmNA",
  "key24": "3VBDoAdu1mU4xMTrFroF21dZHzZA4YVtrxy2rd1z8P2EnCbYZ1mu3pq6ZUkeftjD6bnBEt1jEC5AnV69PBNsfMG9",
  "key25": "34Rg3qBs8eWeKSBfXeTLq1Y4AFLdXuf1TZWZvmhr4kZAmj1pzi1ayoP8x1BAsbqJdU5RwCCLd2kDS5gyu7i2nnL8"
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
