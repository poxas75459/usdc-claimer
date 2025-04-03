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
    "EpoDhmjJGcumLm76YZogJDHWgyCmW6JubyJXftW9BJk5529AEepCfypqVqXfmWLjw7ASVTmMAWUDW4r4Ehet7TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXMqWceSvLvNJbZeY8WjJuhQdTL4TBDnsm5Y6f2QBio8VsrMA3pgD5AWsRFQeGAAj3sYrC4d3hAKSHDrUt128pq",
  "key1": "5HYWDuNJizY8aV7n48Euz3LuXXZVjW6WRkNpHgp87bZyCC3N9ujAvPrs3mzMcSJcF9Pb5NG4VtKQ5BFdkMvgEgzC",
  "key2": "4nVwpe1TAtVAjXkLPb57Xh9t53g6ZTut1CJCQhRPQWer9fV7uHW8AoSZpRva2mSGprVkkiHWR5o8tYqLAkJs1pn2",
  "key3": "4e8XXnQxCKvrvgnkKFnVKhmHvBzeaeqHCMf21SxEMiyHrNb5aJPNdA4U6saeUoKxWXGwsuPiJJ54Bt8MThFmLhJA",
  "key4": "4s7gVb4rd7WHiWBzGHWqAyo78KxcudyAbEwRWJesPfd7axPLCTZaGnfKSJPqQ9rLNR5rX69xWVNBmTUQdDzFxaz",
  "key5": "RomgW1P1KRNH5UnyjBxhDERd4S2vpzMuxt52FfKLzm1FEfk5bXMbs58g7iJiLaoW8Q8EimSEnFBEk8E1ptVoWYx",
  "key6": "3WuSBQNNpWdC7GXjB8K3i9AdHSnKDjnLo4eNY5dmJ5YrEaSBAdKhKeF5vjt3BkAsmfAftmCeiNwpwYtUuDXjVrpU",
  "key7": "TtoDX44TB2cZ7SSRk9SSRJq3bGc9Gipb9o5T38p6nJXtd9jsdBjVSzchLDCWwDtDzguUFUZxyRpELLLbzPojQYC",
  "key8": "5ymuhLWn833cWcEJsH3NJfc9sVHXT5EyXPmsnfKD59rahGtGaK7yr63eiTy69XR798e69EydZtEzArDrwMNuK5Ba",
  "key9": "6XUQvjziBbTWU5S9SoSPRsC92o5zvVfRXUJVfDCpQDJAQZvyBJYAEpk5J45G27FkcyujT55HK8UrGQe8vekcc2d",
  "key10": "4jDsaTXZ3ccKZhuvg1QkJcPT72Hzyhd6WnzcgjREuK4BKxw3LF4VnXCQdG1YTvWQoWGzHdmcSc5jabhMRRc3psNu",
  "key11": "5FjhLXN13sYzyab8xs5MNkxRuveLmektZJ81CFBsQn67VwLxZZdU23zABiykcZMkBjsV3KgAb8hznKHJfuJjVunh",
  "key12": "4Jz1s4Uk8nvyYbfw5wxUpjMFwqCByp4sVM1bbp2d8PBDHuL4mUwXixVgiQxknzkpTyZZNyJw7jAW24mJG4UHTW8x",
  "key13": "3tB5seZiXzSd5EgsFzk8xf43XbccYwHP2NuVWv2xPTLdQYGE1QVLD74CE3NQwHskakRCt9XMvSkdTKQzgw6HRdgB",
  "key14": "rB9t6GUuEZmHBC14toPYY9cfTK77uoahiHEadaa1r6GJZ7u4EujqZundC79smsNBJ5pMKRts1YToXcZ7AgHpur7",
  "key15": "5syKVNF4FdCVJqUCv8P8hzL5MiH9Z447yFtHJkwpuBQKW53nq65q4Z8LofDXR2UkSoQAYshpLucJnzHyDzZ58KSK",
  "key16": "3zCqnXsoi9H3HiS31dDQsE7doPAzEcBuafPPoxDG8rgShBMHrhWigVbjPNHVCsbdWFaWes9JqiRtwx3QzhDrY4bV",
  "key17": "KGuXoa3qYw7pV7h5QYbBmgKCZimkRTsKr9UwEajFdmD83Xme7rMEU6DXPsQGU7M1UCRrrrCF1hStd4RfQnmSCYq",
  "key18": "5FZCDeoJsqhfgTFjxnwMGna5XjWrvU6X3Zvjh79wu5vhvrTs3EppFxB1FYfQdWwXwUN5MQxzmD7Gr8sXjfv4Lway",
  "key19": "4HcLptAQTXRGC6Da7wFHLoJBeJPnTXZ6fmy8pktEhEXujQWbNn6qLmN986T5Stwo6DLKoapDL3FBcQTA3c4XPx64",
  "key20": "4xcVxsP3FArQXRCjxMNYmfxbHpvWkvnox88BjtsbU47qF5M8z7A6PpuLYdc2YHcpY3s6AFB24meDG4Lw6oMsbhVy",
  "key21": "5HUN9knGTm6ogKnvHh8QWG5AK1cdp5UM92xEXuACu2AxXAY7NE7S92dVd5diiQv52ZSVh81g3CTN9dqJztnvCVTX",
  "key22": "3pV82gdUdPdu7u8yQX4HiwT9bgKqdrthVZc5dZwD3WGsbdcxbURLiKcDEehZNVGo5J4qWH2kqke6stAtNS3w4FtT",
  "key23": "4VkLTiEG9ua3ZumaWhRNzXbDn3Y9NK4uxWMSLF1V7XjysBFtf8KAcsiNitbVWZ7RtvEudviK97hQtuPTkm77JdSH",
  "key24": "CynMbSwDDv9iP71WbMFs6LMnKDg7GXDuR7R4zQHhnDGX2V33APnmYpxQTU6H5VbCMJUXjc1o84aQ4wTNXJiSs1Z",
  "key25": "27wEzPaFqFSQvtNYbzxEfcEQwpbQuvUNcDTgYvH133zNi13xNXKXPWPiuyb6ZJ7fr4w8k978EHP7a6BoyQMqvQhQ",
  "key26": "53dKPgpN8BbwuBRcbiRWqMDEgtWj9PbSHmrkmwNt31JozQztHbAKBppeZoijiWWCGG5DC3w5rDY6n9r16VwxLEhH",
  "key27": "2LGpaPLmNYoDECWhVry5uH3SHsv8NcVqbS38yDFPfRKbyhD7Zk5Us4Km7CqfcjJYouDc3VC381iUzW2swCuErFyj",
  "key28": "4de245iky7fokZCm4efkKEcyF2neiZ1vmreuHpWosGLCzfjvpLgN4P4QsjGvgKRNbNtN3XFvsatB4ZgYW7G2Mhti",
  "key29": "5zPwnxqBZS746yWH9MwkN2RNyQ82whjHeEaYwWFNukWC1YxoCPSbPSPphNMZau7phe5KYNfddinneXSXpJ8wQZAX",
  "key30": "2VxX6P9B4KBbKuhGM94FsoJizQiXy6TN3YLJw3wuQfbyrCtFKyVMqQp2xWz8UsbW3wLKaSgoPjtJjxNBRFgusCZv",
  "key31": "3Kzu8MqfHZkTwVXo1wPUUE2tGW7bf72R7eZ2xrCD78PcKoTAg5tJupQQA1PL6R3uNZHhKcuRTqLnbZY3ngmrksfS",
  "key32": "QJSDWoj4RFWpD83e7ZKdabLohGGSgaGV7FQRfBdLiavNpwsa5DQJtxLCNQ5gyxacJvMqxMZKif7Eb8uneBWgRjk",
  "key33": "REEvcPXB4Smw8nAHENUb7TEj47KxyTaub3tBAzjroRsfowujjk6tQxC4RnkCRhtLvWcnodS9ebsG24piRwRyhHe",
  "key34": "4R7mTmHcDDpJ9f1AgBHSue2wkzYeqQwKaWSMha3RiC36pg9iHY6dAWn8apaGfc3pSKYixouJ9uhkbzLR5Fr8eWaR",
  "key35": "4tqahGoRei4pXE93rsBMfY65RweFAPFwsu7UnkRecGxiet4YXVirwi85WcK8mSU1KAynBnUojRunKSXHjqAJoxNG"
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
