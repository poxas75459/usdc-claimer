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
    "2Jz1CNDwTuU5RGQZMN2corvLwEpXnCZzXgBh5jGbQwmwd8Kx7TfaRaafRvBhhDG5XsJ1cFwMqyXJyF67kyWPWzVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tR5aYioq1o7uefuFvaVSQiaVquNuk3DTSWiARQD4wS4oQ7bu5MD4xVmnAj1atwfyRhtUNMiTGzLrfbVLVcZdiTs",
  "key1": "598gEShxrhb1gP43TqDQSPEQHVm2ryZGdcSfh639gq1WyY1mNGsDBAGJnJWxEffXj97ZpNBsqUQ2gUeNdBjgSfNN",
  "key2": "2qcFkik7DWCpZQqJjfYw9ZNa7VEQGFH3hbmytxPa6A2zvzmkUb4t2DXjChZjXg9BejwvuCUgYh6eZf746ZxKd73R",
  "key3": "4rtysvsxqMvXcKgsQ2NkKPbuwYiRkkxBXNhnM3ocKwnQwDYHUVV8sTwozaMpHvhJ3xKrK8bJrE6Q4A3iKdhSishh",
  "key4": "5civ1M7Sjz8joUFn8Gfjsbe2pKXyppA7tc4cwqdcXmSMBJWWqP5WZxySQqBc7Z2tMqUs37oxpazHL9AxcNbQdtr7",
  "key5": "41KJquHwpFU3Ye2GXJ13Uc9Cef5s6r5vp5mgrkMztN8DkG1goxzEi7mBdNWCH7tywpoPvyDMYtfd5rK6yAw64QiW",
  "key6": "3w1p34wEab8NmhLPArMava9fMrDzUitRBoNPEaUfsRyqLZPcurMvti7UX8bvZkNNKqkE74wunVkNqHB2UJLWhHzZ",
  "key7": "41hdQ6zCjt87kqiJzt7nG5VHms9pZ6Gw5m1ErWwTswnm1ghZZckzkqDovXzi3EtVpBQJxvCzh24RaeUvVQt3Ejne",
  "key8": "3x5CH8YJnXpn3pTPirEvi8UyaQSx8pHdeahoEBvAa1ViWbFam9MzMfJB6X7hQ6LeJGgSDbj7rtKbzgomfhpZDYPU",
  "key9": "4zmStDfTCQJdHdf5eEGV4gni18ShArwcCiKHHGWu6umLYw8L1mFdSuSFRb6sSCzdiJGBakuzXz4oHYkyYjYBDdSH",
  "key10": "2BGtRYWX6p7dpqC7fjkQNy3rGhXoS1UK1LSm6hPTyQTv24qnzaeMw9ZoMZN3YqkNyKmaNR5X2S6CNM4n3sq3WCma",
  "key11": "2XyDGwju3jrgqycpf5y424JDZesHKuT7JyUTFdk8MD8Veds5NSghkfv3FzNqxoextX3a8vLE1Z9yJddmqsXJ7ed5",
  "key12": "3NzUJuyLS7DNC5XfUHWPaFeM8kXw4qmnY1HRFoHhHubNcMrqbLPx2y27Wwder9nZuSGnAQHmn9xRMkucYWB81j9f",
  "key13": "2KwZka8KKg1NS7hSr5d4rVXzB9B1r4oM3FGQznWUkpmJEzv1hmeYcXBZ834uYhuxLMYvceReYshekQEHujmhfP9Z",
  "key14": "3ubNJ7CqBPdsZmk9q2iv91vhDQTgci8h6htwiQusCaKXvYsjQSUjMUfSyPbPR4YCpxdHTZq563Be65hFLSqkCsaq",
  "key15": "3pd3trhVNt6vots1pYv3UwAdQvk8D89uW7hSfWywQNBgBHkwjJhJbEXDat9hVEAmuon5z6Dvm5R6NEAKrnYSdL4q",
  "key16": "5uugxa1PCfeq9Esnp7D9FkuGMNVQpkd49UbUHtEEgWxMuq1hniVHf2CxdJwncs4ZTyeTqRkcLr3M18B6qVAmBaB2",
  "key17": "3WkS1UxjJR4Nf9KdVZLMyJSYBJHyWAQUyTcRoJ3XpJFFpdtTrXnRTi7jeCCqa3Bds2CAJLa8wymusANDuKjVx671",
  "key18": "33A7AbC8iHrcaD4fp9pjhTghX9ZAD3DkdVMWnREqWknyPDL2seoRmEmVaWXxQ9CRqdm5CyM4AWUFaPeksn9A9KW",
  "key19": "32hgWGc9AGA7denY2kfpCwk6BnjBYLpcquN4oTDbXCkrCZnMtedzQBZM4DdiTvhHxeb8Ww7ozEihwVbQXdpsqcNV",
  "key20": "33eEnV3pydp99x98SgbWfT9wgXM4txzBe5QsoKvenrzNFYVs8UnisZevvKFCUGqLRtiSWWWq6pXpa6y1qmahfU8H",
  "key21": "2Jqi7Wx7KPnv8Uap8KnKtEjJ8tL4zkVoiVsYDH5XDArKTSM5Ztuu4c1UYmvrPK63Z82ZZuDJxiM5KJE7DDu8cHaG",
  "key22": "5eyocRYbyRUpkUcAwTKBdFYmdD3kYZdMoGSKDCFHzZAgRWNRCveXbKCXNxACTPyecFv6QZd85ZmSL2SeNqbEwq6K",
  "key23": "331K99QAKngcUkNm7LXgS4WTr11aJsiks7NsFJ9AYhzRvbSh9UfAVByKxvW621RyLK8e3wJhtvBtYw84XaoRFDtX",
  "key24": "4EPdDRm4ULevjEtKfnFJesyydMgSgVZnkNPDdMuCDVn7i3WCvuFSZ3BzGkT6p8tmBmn25MqhRf3bCckSHpz9r1MA",
  "key25": "5ZnHqLVjFAYH9P3zz3fmkkvURsu254oKhi8JvN8kyg2CFpU3tNudSNXYcZ47em1qL1XihXoiPP4hVv5XK4MxkYed",
  "key26": "7CYv4qCGPG7hoZQP2Z816a5CHLSkuSa6ZB549xv7o5JbviB2fk1dsThJ9D1PMg5Hihmr1QQBVgsKqCboRRyFY5r",
  "key27": "2ZokMQYNEWGbPtxKrh8LjRG5AiDr25sSwJCue915UFv1UK7LULdaek7qCnfqkpfeKndeJc6sv8LM3i9CsbwtAMJw",
  "key28": "AgWrSXdfDUkkK3kRSW9NVy47ySU3SHikv94WiuDdE2p3k5RGkq9jYVL33KMyx5JMo7WMULRXfEGaB4JejRKkDHU",
  "key29": "4PFyrdsTJWqeQLswtNiRQWXnRsCCSvYhMCZo2VpyKMi5yycAYXWEvTwfrHW6WSy19qwBqZdQAJbEFFDFbh3bsxNR",
  "key30": "5BTRsfMP6pBL6fuyQg7LJAjqbj9jP8cgUtZ8yJLff8GCpM7uqSaffD2urARv5WfjLSUgNo2CxZ97cn8zr9G4yjfK",
  "key31": "37Jn6MEWsSnXA4VzGVd9FV8n74TrNBwKijXLvEeJ8btxUVj9kA7n6EGuyFr3ncWCnLD7K77B3YNMyDbBryiUhaFP",
  "key32": "3fDA5UE6f1PMkrj88QJZXbzxaQTq4iG1oqZjE3zt4uNqifsxRkhYC7CFaH3y8ygsWi5HXewZeVu8M54sX3mUjr7Z"
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
